/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  
  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtLegend$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtLegend", D.$DvtLegend$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLegend$$, D.$DvtBaseComponent$$, "DvtLegend");
D.$DvtLegend$newInstance$$ = function $$DvtLegend$newInstance$$$($context$$453$$, $callback$$113$$, $callbackObj$$69$$) {
  var $legend$$3$$ = new D.$DvtLegend$$;
  $legend$$3$$.Init($context$$453$$, $callback$$113$$, $callbackObj$$69$$);
  return $legend$$3$$
};
D.$DvtLegend$$.newInstance = D.$DvtLegend$newInstance$$;
D.$DvtLegend$$.getDefaults = function $$DvtLegend$$$getDefaults$($skin$$16$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtLegendDefaults$$, $skin$$16$$)
};
D.$DvtLegend$$.prototype.Init = function $$DvtLegend$$$$Init$($context$$454$$, $callback$$114$$, $callbackObj$$70$$) {
  D.$DvtLegend$$.$superclass$.Init.call(this, $context$$454$$, $callback$$114$$, $callbackObj$$70$$);
  this.setId("legend1000" + window.Math.floor(1E9 * window.Math.random()));
  this.$Defaults$ = new D.$DvtLegendDefaults$$;
  this.$_eventManager$ = new D.$DvtLegendEventManager$$(this);
  this.$_eventManager$.$addListeners$(this);
  this.$_peers$ = [];
  this.$_navigablePeers$ = [];
  this.$_bounds$ = D.$JSCompiler_alias_NULL$$;
  this.$_titles$ = []
};
D.$DvtLegend$$.prototype.$SetOptions$ = function $$DvtLegend$$$$$SetOptions$$($options$$173$$) {
  $options$$173$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$173$$), (0,D.$JSCompiler_StaticMethods__transferVisibilityProperties$$)(this, this.$Options$.sections)) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtLegend$$.prototype.$getPreferredSize$ = function $$DvtLegend$$$$$getPreferredSize$$($dim$$63_options$$174$$, $maxWidth$$23$$, $maxHeight$$14$$) {
  this.$SetOptions$($dim$$63_options$$174$$);
  this.$getOptions$().isLayout = D.$JSCompiler_alias_TRUE$$;
  $dim$$63_options$$174$$ = D.$DvtLegendRenderer$$.$render$(this, new D.$DvtRectangle$$(0, 0, $maxWidth$$23$$, $maxHeight$$14$$));
  this.$getOptions$().isLayout = D.$JSCompiler_alias_FALSE$$;
  return new D.$DvtDimension$$($dim$$63_options$$174$$.$w$, $dim$$63_options$$174$$.$h$)
};
D.$DvtLegend$$.prototype.getPreferredSize = D.$DvtLegend$$.prototype.$getPreferredSize$;
D.$DvtLegend$$.prototype.$render$ = function $$DvtLegend$$$$$render$$($highlightedCategories_options$$175$$, $width$$114$$, $height$$106$$) {
  this.$SetOptions$($highlightedCategories_options$$175$$);
  !(0,window.isNaN)($width$$114$$) && !(0,window.isNaN)($height$$106$$) && (this.$Width$ = $width$$114$$, this.$Height$ = $height$$106$$);
  this.$getOptions$().isLayout = D.$JSCompiler_alias_FALSE$$;
  this.$removeChildren$();
  this.$_peers$ = [];
  this.$_navigablePeers$ = [];
  this.$_bounds$ = D.$JSCompiler_alias_NULL$$;
  this.$_titles$ = [];
  (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventManager$, new D.$DvtLegendKeyboardHandler$$(this.$_eventManager$, this));
  this.$UpdateAriaAttributes$();
  this.$_contentDimensions$ = D.$DvtLegendRenderer$$.$render$(this, new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$));
  ($highlightedCategories_options$$175$$ = this.$getOptions$().highlightedCategories) && 0 < $highlightedCategories_options$$175$$.length && this.$highlight$($highlightedCategories_options$$175$$);
  return this.$_contentDimensions$
};
D.$DvtLegend$$.prototype.render = D.$DvtLegend$$.prototype.$render$;
D.$DvtLegend$$.prototype.$highlight$ = function $$DvtLegend$$$$$highlight$$($categories$$14$$) {
  this.$getOptions$().highlightedCategories = $categories$$14$$ && 0 < $categories$$14$$.length ? $categories$$14$$.slice() : D.$JSCompiler_alias_NULL$$;
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$14$$, this.$_peers$, D.$JSCompiler_alias_TRUE$$)
};
D.$DvtLegend$$.prototype.highlight = D.$DvtLegend$$.prototype.$highlight$;
D.$DvtLegend$$.prototype.$processEvent$ = function $$DvtLegend$$$$$processEvent$$($event$$551$$, $source$$31$$) {
  var $type$$235$$ = $event$$551$$.$getType$();
  if(("categoryRollOver" == $type$$235$$ || "categoryRollOut" == $type$$235$$) && "dim" == this.$getOptions$().hoverBehavior) {
    var $peers$$7$$ = this.$_peers$;
    this != $source$$31$$ && this.$highlight$($event$$551$$.categories);
    for(var $i$$690$$ = 0;$i$$690$$ < $peers$$7$$.length;$i$$690$$++) {
      if($peers$$7$$[$i$$690$$].getId() == $event$$551$$.$_category$) {
        this.$container$.scrollIntoView($peers$$7$$[$i$$690$$].$getDisplayables$()[0]);
        break
      }
    }
  }
  (this == $source$$31$$ || "showPopup" == $type$$235$$ || "hidePopup" == $type$$235$$) && this.$__dispatchEvent$($event$$551$$)
};
D.$DvtLegend$$.prototype.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventManager$");
D.$DvtLegend$$.prototype.$__registerObject$ = function $$DvtLegend$$$$$__registerObject$$($peer$$21$$) {
  if($peer$$21$$.$getDisplayables$()[0] instanceof D.$DvtButton$$) {
    this.$_navigablePeers$.push($peer$$21$$)
  }else {
    var $hideAndShow$$ = this.$getOptions$().hideAndShowBehavior;
    ($peer$$21$$.$getDatatip$() != D.$JSCompiler_alias_NULL$$ || $peer$$21$$.$getAction$() != D.$JSCompiler_alias_NULL$$ || $peer$$21$$.$isDrillable$() || "none" != $hideAndShow$$ && "off" != $hideAndShow$$) && this.$_navigablePeers$.push($peer$$21$$);
    this.$_peers$.push($peer$$21$$)
  }
};
D.$DvtLegend$$.prototype.$destroy$ = function $$DvtLegend$$$$$destroy$$() {
  this.$_eventManager$ && (this.$_eventManager$.$removeListeners$(this), this.$_eventManager$.$destroy$(), this.$_eventManager$ = D.$JSCompiler_alias_NULL$$);
  D.$DvtLegend$$.$superclass$.$destroy$.call(this)
};
D.$DvtLegend$$.prototype.destroy = D.$DvtLegend$$.prototype.$destroy$;
D.$DvtLegend$$.prototype.$__setBounds$ = (0,D.$JSCompiler_set$$)("$_bounds$");
D.$DvtLegend$$.prototype.$getAutomation$ = function $$DvtLegend$$$$$getAutomation$$() {
  return new D.$DvtLegendAutomation$$(this)
};
D.$DvtLegend$$.prototype.getAutomation = D.$DvtLegend$$.prototype.$getAutomation$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtLegend$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getKeyboardFocus$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardFocus$$() {
  return this.$_eventManager$ != D.$JSCompiler_alias_NULL$$ ? this.$_eventManager$.$getFocus$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setKeyboardFocus$ = function $$JSCompiler_prototypeAlias$$$$setKeyboardFocus$$($navigable$$15$$, $isShowingFocusEffect$$1$$) {
  if(this.$_eventManager$ != D.$JSCompiler_alias_NULL$$) {
    for(var $focus$$4_peers$$8$$ = this.$_navigablePeers$, $displayable$$58_i$$691$$ = 0;$displayable$$58_i$$691$$ < $focus$$4_peers$$8$$.length;$displayable$$58_i$$691$$++) {
      if($focus$$4_peers$$8$$[$displayable$$58_i$$691$$].getId() == $navigable$$15$$.getId()) {
        (0,D.$JSCompiler_StaticMethods_setFocusObj$$)(this.$_eventManager$, $focus$$4_peers$$8$$[$displayable$$58_i$$691$$]);
        $isShowingFocusEffect$$1$$ && $focus$$4_peers$$8$$[$displayable$$58_i$$691$$].$showKeyboardFocusEffect$();
        break
      }
    }
    if($focus$$4_peers$$8$$ = this.$getKeyboardFocus$()) {
      $displayable$$58_i$$691$$ = $focus$$4_peers$$8$$.$getDisplayables$()[0], $displayable$$58_i$$691$$.$setAriaProperty$("label", $focus$$4_peers$$8$$.$getAriaLabel$()), (0,D.$JSCompiler_StaticMethods_setActiveElement$$)(this.$getCtx$(), $displayable$$58_i$$691$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$getDimensions$ = function $$JSCompiler_prototypeAlias$$$$getDimensions$$($targetCoordinateSpace$$45$$) {
  var $bounds$$135$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
  return!$targetCoordinateSpace$$45$$ || $targetCoordinateSpace$$45$$ === this ? $bounds$$135$$ : (0,D.$JSCompiler_StaticMethods_ConvertCoordSpaceRect$$)(this, $bounds$$135$$, $targetCoordinateSpace$$45$$)
};
D.$JSCompiler_prototypeAlias$$.$getContentDimensions$ = function $$JSCompiler_prototypeAlias$$$$getContentDimensions$$($targetCoordinateSpace$$46$$) {
  return!$targetCoordinateSpace$$46$$ || $targetCoordinateSpace$$46$$ === this ? this.$_contentDimensions$ : (0,D.$JSCompiler_StaticMethods_ConvertCoordSpaceRect$$)(this, this.$_contentDimensions$, $targetCoordinateSpace$$46$$)
};
D.$JSCompiler_prototypeAlias$$.$GetComponentDescription$ = function $$JSCompiler_prototypeAlias$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "LEGEND")
};
D.$JSCompiler_StaticMethods__transferVisibilityProperties$$ = function $$JSCompiler_StaticMethods__transferVisibilityProperties$$$($JSCompiler_StaticMethods__transferVisibilityProperties$self$$, $sections$$2$$) {
  if($sections$$2$$ && !(0 >= $sections$$2$$.length)) {
    for(var $hiddenCategories$$7$$ = $JSCompiler_StaticMethods__transferVisibilityProperties$self$$.$getOptions$().hiddenCategories, $i$$692$$ = 0;$i$$692$$ < $sections$$2$$.length;$i$$692$$++) {
      var $items$$25_section$$4$$ = $sections$$2$$[$i$$692$$];
      $items$$25_section$$4$$.sections && ($hiddenCategories$$7$$ = (0,D.$JSCompiler_StaticMethods__transferVisibilityProperties$$)($JSCompiler_StaticMethods__transferVisibilityProperties$self$$, $items$$25_section$$4$$.sections));
      if(($items$$25_section$$4$$ = $items$$25_section$$4$$.items) && !(0 >= $items$$25_section$$4$$.length)) {
        for(var $j$$90$$ = 0;$j$$90$$ < $items$$25_section$$4$$.length;$j$$90$$++) {
          var $item$$26$$ = $items$$25_section$$4$$[$j$$90$$], $itemCategory$$ = D.$DvtLegendRenderer$$.$getItemCategory$($item$$26$$);
          "hidden" == $item$$26$$.categoryVisibility && 0 > D.$DvtArrayUtils$$.$getIndex$($hiddenCategories$$7$$, $itemCategory$$) && $hiddenCategories$$7$$.push($itemCategory$$);
          $item$$26$$.categoryVisibility = D.$JSCompiler_alias_NULL$$
        }
      }
    }
  }
};
D.$DvtLegend$$.prototype.$UpdateAriaAttributes$ = function $$DvtLegend$$$$$UpdateAriaAttributes$$() {
  if((0,D.$JSCompiler_StaticMethods_IsParentRoot$$)(this)) {
    var $options$$176$$ = this.$getOptions$(), $hideAndShow$$1$$ = $options$$176$$.hideAndShowBehavior;
    if("off" != $hideAndShow$$1$$ && "none" != $hideAndShow$$1$$ || "dim" == $options$$176$$.hoverBehavior) {
      this.$getCtx$().$setAriaRole$("application"), (0,D.$JSCompiler_StaticMethods_setAriaLabel$$)(this.$getCtx$(), (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DATA_VISUALIZATION"), D.$DvtStringUtils$$.$processAriaLabel$(this.$GetComponentDescription$())]))
    }
  }
};
D.$DvtLegend$$.prototype.$isNavigable$ = function $$DvtLegend$$$$$isNavigable$$() {
  return 0 < this.$_navigablePeers$.length
};
D.$DvtLegendConstants$$ = {};
(0,D.$goog$exportPath_$$)("DvtLegendConstants", D.$DvtLegendConstants$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLegendConstants$$, D.$DvtObj$$, "DvtLegendConstants");
D.$DvtLegendConstants$$.$BACKGROUND$ = "background";
D.$DvtLegendConstants$$.BACKGROUND = D.$DvtLegendConstants$$.$BACKGROUND$;
D.$DvtLegendConstants$$.$LEGEND_ITEM$ = "legendItem";
D.$DvtLegendConstants$$.LEGEND_ITEM = D.$DvtLegendConstants$$.$LEGEND_ITEM$;
D.$DvtLegendConstants$$.$TITLE$ = "title";
D.$DvtLegendConstants$$.TITLE = D.$DvtLegendConstants$$.$TITLE$;
D.$DvtLegendAutomation$$ = function $$DvtLegendAutomation$$$($dvtComponent$$11$$) {
  this.$_legend$ = $dvtComponent$$11$$;
  this.$_options$ = this.$_legend$.$getOptions$()
};
(0,D.$goog$exportPath_$$)("DvtLegendAutomation", D.$DvtLegendAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtLegendAutomation$$, D.$DvtAutomation$$, "DvtLegendAutomation");
D.$DvtLegendAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtLegendAutomation$$$$$GetSubIdForDomElement$$($displayable$$59_indexList$$4_item$$27_logicalObj$$14$$) {
  if(($displayable$$59_indexList$$4_item$$27_logicalObj$$14$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_legend$.$__getEventManager$(), $displayable$$59_indexList$$4_item$$27_logicalObj$$14$$)) && $displayable$$59_indexList$$4_item$$27_logicalObj$$14$$ instanceof D.$DvtLegendObjPeer$$) {
    if($displayable$$59_indexList$$4_item$$27_logicalObj$$14$$ = $displayable$$59_indexList$$4_item$$27_logicalObj$$14$$.getData(), $displayable$$59_indexList$$4_item$$27_logicalObj$$14$$ = (0,D.$JSCompiler_StaticMethods__getIndicesFromItem$$)(this, $displayable$$59_indexList$$4_item$$27_logicalObj$$14$$, this.$_options$)) {
      return"section" + $displayable$$59_indexList$$4_item$$27_logicalObj$$14$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getIndicesFromItem$$ = function $$JSCompiler_StaticMethods__getIndicesFromItem$$$($JSCompiler_StaticMethods__getIndicesFromItem$self_i$$693$$, $item$$28$$, $legendOptions$$4$$) {
  if($legendOptions$$4$$.sections && 0 < $legendOptions$$4$$.sections.length) {
    for(var $s$$148$$ = 0;$s$$148$$ < $legendOptions$$4$$.sections.length;$s$$148$$++) {
      if($legendOptions$$4$$.sections[$s$$148$$] == $item$$28$$) {
        return"[" + $s$$148$$ + "]"
      }
      var $itemIndex$$8$$ = (0,D.$JSCompiler_StaticMethods__getIndicesFromItem$$)($JSCompiler_StaticMethods__getIndicesFromItem$self_i$$693$$, $item$$28$$, $legendOptions$$4$$.sections[$s$$148$$]);
      if($itemIndex$$8$$) {
        return"[" + $s$$148$$ + "]" + $itemIndex$$8$$
      }
    }
    return D.$JSCompiler_alias_NULL$$
  }
  if($legendOptions$$4$$.items && 0 < $legendOptions$$4$$.items.length) {
    for($JSCompiler_StaticMethods__getIndicesFromItem$self_i$$693$$ = 0;$JSCompiler_StaticMethods__getIndicesFromItem$self_i$$693$$ < $legendOptions$$4$$.items.length;$JSCompiler_StaticMethods__getIndicesFromItem$self_i$$693$$++) {
      if($legendOptions$$4$$.items[$JSCompiler_StaticMethods__getIndicesFromItem$self_i$$693$$] == $item$$28$$) {
        return":item[" + $JSCompiler_StaticMethods__getIndicesFromItem$self_i$$693$$ + "]"
      }
    }
    return D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods_getIndicesFromSeries$$ = function $$JSCompiler_StaticMethods_getIndicesFromSeries$$$($JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$694$$, $series$$18$$, $legendOptions$$5$$) {
  if($legendOptions$$5$$.sections && 0 < $legendOptions$$5$$.sections.length) {
    for(var $s$$149$$ = 0;$s$$149$$ < $legendOptions$$5$$.sections.length;$s$$149$$++) {
      var $itemIndex$$9$$ = (0,D.$JSCompiler_StaticMethods_getIndicesFromSeries$$)($JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$694$$, $series$$18$$, $legendOptions$$5$$.sections[$s$$149$$]);
      if($itemIndex$$9$$) {
        return"[" + $s$$149$$ + "]" + $itemIndex$$9$$
      }
    }
    return D.$JSCompiler_alias_NULL$$
  }
  if($legendOptions$$5$$.items && 0 < $legendOptions$$5$$.items.length) {
    for($JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$694$$ = 0;$JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$694$$ < $legendOptions$$5$$.items.length;$JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$694$$++) {
      if($legendOptions$$5$$.items[$JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$694$$].text == $series$$18$$.name) {
        return":item[" + $JSCompiler_StaticMethods_getIndicesFromSeries$self_i$$694$$ + "]"
      }
    }
    return D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods_getLegendItem$$ = function $$JSCompiler_StaticMethods_getLegendItem$$$($JSCompiler_StaticMethods_getLegendItem$self$$, $options$$177$$, $subId$$19$$) {
  var $index$$217_openParen$$3$$ = $subId$$19$$.indexOf("["), $closeParen$$3_nextCloseParen$$ = $subId$$19$$.indexOf("]");
  if(0 <= $index$$217_openParen$$3$$ && 0 <= $closeParen$$3_nextCloseParen$$) {
    var $index$$217_openParen$$3$$ = $subId$$19$$.substring($index$$217_openParen$$3$$ + 1, $closeParen$$3_nextCloseParen$$), $colonIndex$$2$$ = $subId$$19$$.indexOf(":");
    $subId$$19$$ = $subId$$19$$.substring($closeParen$$3_nextCloseParen$$ + 1);
    $closeParen$$3_nextCloseParen$$ = $subId$$19$$.indexOf("]");
    return 0 <= $subId$$19$$.indexOf("[") && 0 <= $closeParen$$3_nextCloseParen$$ ? (0,D.$JSCompiler_StaticMethods_getLegendItem$$)($JSCompiler_StaticMethods_getLegendItem$self$$, $options$$177$$.sections[$index$$217_openParen$$3$$], $subId$$19$$) : 0 == $colonIndex$$2$$ ? $options$$177$$.items[$index$$217_openParen$$3$$] : $options$$177$$.sections[$index$$217_openParen$$3$$]
  }
};
D.$DvtLegendAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtLegendAutomation$$$$$getDomElementForSubId$$($legendItem$$3_subId$$20$$) {
  if("tooltip" == $legendItem$$3_subId$$20$$) {
    return(0,D.$JSCompiler_StaticMethods_GetTooltipElement$$)(this.$_legend$)
  }
  $legendItem$$3_subId$$20$$ = (0,D.$JSCompiler_StaticMethods_getLegendItem$$)(this, this.$_options$, $legendItem$$3_subId$$20$$);
  for(var $legendPeers$$ = this.$_legend$.$_peers$, $i$$695$$ = 0;$i$$695$$ < $legendPeers$$.length;$i$$695$$++) {
    var $item$$29$$ = $legendPeers$$[$i$$695$$].getData();
    if($legendItem$$3_subId$$20$$ == $item$$29$$) {
      return $legendPeers$$[$i$$695$$].$getDisplayables$()[0].$getElem$()
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtLegendAutomation$$.prototype.getDomElementForSubId = D.$DvtLegendAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtLegendAutomation$$.prototype.$getTitle$ = function $$DvtLegendAutomation$$$$$getTitle$$() {
  return this.$_options$.title
};
D.$DvtLegendAutomation$$.prototype.getTitle = D.$DvtLegendAutomation$$.prototype.$getTitle$;
D.$DvtLegendAutomation$$.prototype.getItem = function $$DvtLegendAutomation$$$$getItem$($subIdPath$$) {
  for(var $item$$30$$, $index$$218$$ = $subIdPath$$.shift(), $options$$178$$ = this.$_options$;$index$$218$$ != D.$JSCompiler_alias_VOID$$;) {
    0 < $subIdPath$$.length ? $options$$178$$ = $options$$178$$.sections[$index$$218$$] : $item$$30$$ = $options$$178$$.items[$index$$218$$], $index$$218$$ = $subIdPath$$.shift()
  }
  return $item$$30$$ ? {text:$item$$30$$.text ? $item$$30$$.text : D.$JSCompiler_alias_NULL$$} : D.$JSCompiler_alias_NULL$$
};
D.$DvtLegendAutomation$$.prototype.getItem = D.$DvtLegendAutomation$$.prototype.getItem;
D.$DvtLegendAutomation$$.prototype.$getSection$ = function $$DvtLegendAutomation$$$$$getSection$$($subIdPath$$1$$) {
  for(var $section$$5$$, $index$$219$$ = $subIdPath$$1$$.shift(), $options$$179$$ = this.$_options$;$index$$219$$ != D.$JSCompiler_alias_VOID$$;) {
    0 < $subIdPath$$1$$.length ? $options$$179$$ = $options$$179$$.sections[$index$$219$$] : $section$$5$$ = $options$$179$$.sections[$index$$219$$], $index$$219$$ = $subIdPath$$1$$.shift()
  }
  return{title:$section$$5$$.title ? $section$$5$$.title : D.$JSCompiler_alias_NULL$$, items:$section$$5$$.items ? (0,D.$JSCompiler_StaticMethods__generateItemObjects$$)($section$$5$$.items) : D.$JSCompiler_alias_NULL$$, sections:$section$$5$$.sections ? (0,D.$JSCompiler_StaticMethods__generateSectionObjects$$)(this, $section$$5$$.sections) : D.$JSCompiler_alias_NULL$$}
};
D.$DvtLegendAutomation$$.prototype.getSection = D.$DvtLegendAutomation$$.prototype.$getSection$;
D.$JSCompiler_StaticMethods__generateItemObjects$$ = function $$JSCompiler_StaticMethods__generateItemObjects$$$($items$$26$$) {
  for(var $itemDataArray$$ = [], $i$$696$$ = 0;$i$$696$$ < $items$$26$$.length;$i$$696$$++) {
    $itemDataArray$$.push({text:$items$$26$$[$i$$696$$].text})
  }
  return $itemDataArray$$
};
D.$JSCompiler_StaticMethods__generateSectionObjects$$ = function $$JSCompiler_StaticMethods__generateSectionObjects$$$($JSCompiler_StaticMethods__generateSectionObjects$self$$, $sections$$3$$) {
  for(var $sectionDataArray$$ = [], $i$$697$$ = 0;$i$$697$$ < $sections$$3$$.length;$i$$697$$++) {
    $sectionDataArray$$.push({title:$sections$$3$$[$i$$697$$].title ? $sections$$3$$[$i$$697$$].title : D.$JSCompiler_alias_NULL$$, items:$sections$$3$$[$i$$697$$].items ? (0,D.$JSCompiler_StaticMethods__generateItemObjects$$)($sections$$3$$[$i$$697$$].items) : D.$JSCompiler_alias_NULL$$, sections:$sections$$3$$[$i$$697$$].sections ? (0,D.$JSCompiler_StaticMethods__generateSectionObjects$$)($JSCompiler_StaticMethods__generateSectionObjects$self$$, $sections$$3$$[$i$$697$$].sections) : D.$JSCompiler_alias_NULL$$})
  }
  return $sectionDataArray$$
};
D.$DvtLegendDefaults$$ = function $$DvtLegendDefaults$$$() {
  this.Init({skyros:D.$DvtLegendDefaults$VERSION_1$$, alta:D.$DvtLegendDefaults$SKIN_ALTA$$, next:D.$DvtLegendDefaults$SKIN_NEXT$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtLegendDefaults");
D.$DvtLegendDefaults$SKIN_NEXT$$ = {skin:"next", titleStyle:new D.$DvtCSSStyle$$("color: #737373;"), _sectionTitleStyle:new D.$DvtCSSStyle$$("color: #737373;"), layout:{titleGapWidth:17, titleGapHeight:9, symbolGapWidth:7, symbolGapHeight:4, rowGap:4, columnGap:10, sectionGapHeight:16, sectionGapWidth:24}};
D.$DvtLegendDefaults$SKIN_ALTA$$ = {skin:"alta", textStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"), titleStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; color: #333333;"), _sectionTitleStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px; color: #333333;")};
D.$DvtLegendDefaults$VERSION_1$$ = {skin:"skyros", orientation:"vertical", position:D.$JSCompiler_alias_NULL$$, backgroundColor:D.$JSCompiler_alias_NULL$$, borderColor:D.$JSCompiler_alias_NULL$$, textStyle:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif; font-size: 11px; color: #333333;"), titleStyle:new D.$DvtCSSStyle$$("font-family: tahoma, sans-serif; font-size: 12px; color: #003d5b;"), titleHalign:"start", hiddenCategories:[], hideAndShowBehavior:"off", hoverBehavior:"none", hoverBehaviorDelay:200, 
scrolling:"asNeeded", halign:"start", valign:"top", drilling:"off", _color:"#a6acb1", _markerShape:"square", _lineWidth:3, layout:{outerGapWidth:3, outerGapHeight:3, titleGapWidth:8, titleGapHeight:3, symbolGapWidth:5, symbolGapHeight:4, rowGap:0, columnGap:8, sectionGapHeight:6, sectionGapWidth:15}, isLayout:D.$JSCompiler_alias_FALSE$$};
D.$DvtLegendDefaults$getGapSize$$ = function $$DvtLegendDefaults$getGapSize$$$($legend$$4$$, $defaultSize$$1$$) {
  var $scalingFactor$$2$$ = window.Math.min(D.$DvtTextUtils$$.$getTextStringHeight$($legend$$4$$.$getCtx$(), $legend$$4$$.$getOptions$().textStyle) / 14, 1);
  return window.Math.ceil($defaultSize$$1$$ * $scalingFactor$$2$$)
};
D.$DvtLegendEventManager$$ = function $$DvtLegendEventManager$$$($legend$$5$$) {
  this.Init($legend$$5$$.$getCtx$(), $legend$$5$$.$processEvent$, $legend$$5$$);
  this.$_legend$ = $legend$$5$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendEventManager$$, D.$DvtEventManager$$, "DvtLegendEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtLegendEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$FireUIEvent$ = function $$JSCompiler_prototypeAlias$$$$FireUIEvent$$($type$$237$$, $logicalObj$$15$$) {
  var $id$$inline_7306_params$$50$$ = D.$JSCompiler_alias_NULL$$;
  $logicalObj$$15$$ instanceof D.$DvtSimpleObjPeer$$ && $logicalObj$$15$$.$_params$ != D.$JSCompiler_alias_NULL$$ ? $id$$inline_7306_params$$50$$ = $logicalObj$$15$$.$_params$ : $logicalObj$$15$$ instanceof D.$DvtLegendObjPeer$$ && ($id$$inline_7306_params$$50$$ = $logicalObj$$15$$.getId(), $id$$inline_7306_params$$50$$ = {type:D.$DvtLegendConstants$$.$LEGEND_ITEM$, id:$id$$inline_7306_params$$50$$});
  this.$FireEvent$(new D.$DvtComponentUIEvent$$($type$$237$$, $id$$inline_7306_params$$50$$), this.$_legend$)
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$552$$) {
  D.$DvtLegendEventManager$$.$superclass$.$OnClick$.call(this, $event$$552$$);
  var $action$$19_obj$$297$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$552$$.target);
  if($action$$19_obj$$297$$) {
    var $hideShow$$ = (0,D.$JSCompiler_StaticMethods_processHideShowEvent$$)(this, $action$$19_obj$$297$$), $action$$19_obj$$297$$ = this.$processActionEvent$($action$$19_obj$$297$$);
    ($hideShow$$ || $action$$19_obj$$297$$) && $event$$552$$.stopPropagation()
  }
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$553_obj$$298$$) {
  D.$DvtLegendEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$553_obj$$298$$);
  ($event$$553_obj$$298$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$553_obj$$298$$.target)) && this.$UpdateActiveElement$($event$$553_obj$$298$$)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$554$$) {
  D.$DvtLegendEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$554$$);
  (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$554$$.target)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($evt$$52_touchEvent$$7$$) {
  var $action$$20_obj$$300$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $evt$$52_touchEvent$$7$$.target);
  if($action$$20_obj$$300$$) {
    $evt$$52_touchEvent$$7$$ = $evt$$52_touchEvent$$7$$.$touchEvent$;
    var $hideShow$$1$$ = (0,D.$JSCompiler_StaticMethods_processHideShowEvent$$)(this, $action$$20_obj$$300$$), $action$$20_obj$$300$$ = this.$processActionEvent$($action$$20_obj$$300$$);
    ($hideShow$$1$$ || $action$$20_obj$$300$$) && $evt$$52_touchEvent$$7$$ && $evt$$52_touchEvent$$7$$.preventDefault()
  }
};
D.$JSCompiler_StaticMethods_processHideShowEvent$$ = function $$JSCompiler_StaticMethods_processHideShowEvent$$$($JSCompiler_StaticMethods_processHideShowEvent$self$$, $obj$$301$$) {
  var $hiddenCategories$$8_hideAndShow$$2$$ = $JSCompiler_StaticMethods_processHideShowEvent$self$$.$_legend$.$getOptions$().hideAndShowBehavior;
  if("none" == $hiddenCategories$$8_hideAndShow$$2$$ || "off" == $hiddenCategories$$8_hideAndShow$$2$$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $categories$$15_id$$223$$ = $obj$$301$$.$getCategories$ ? $obj$$301$$.$getCategories$() : D.$JSCompiler_alias_NULL$$;
  if(!$categories$$15_id$$223$$ || 0 >= $categories$$15_id$$223$$.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $category$$17_event$$555$$ = $obj$$301$$.$getCategories$()[0], $hiddenCategories$$8_hideAndShow$$2$$ = $JSCompiler_StaticMethods_processHideShowEvent$self$$.$_legend$.$getOptions$().hiddenCategories || [], $hiddenCategories$$8_hideAndShow$$2$$ = $hiddenCategories$$8_hideAndShow$$2$$.slice(), $displayables$$18$$ = $obj$$301$$.$getDisplayables$(), $i$$698$$ = 0;$i$$698$$ < $displayables$$18$$.length;$i$$698$$++) {
    var $displayable$$60$$ = $displayables$$18$$[$i$$698$$];
    $displayable$$60$$ instanceof D.$DvtSimpleMarker$$ ? $displayable$$60$$.$setHollow$($obj$$301$$.$getColor$()) : $displayable$$60$$ instanceof D.$DvtRect$$ && (0,D.$JSCompiler_StaticMethods_updateAriaLabel$$)($obj$$301$$)
  }
  $categories$$15_id$$223$$ = $categories$$15_id$$223$$[0];
  D.$DvtLegendRenderer$$.$isCategoryHidden$($category$$17_event$$555$$, $JSCompiler_StaticMethods_processHideShowEvent$self$$.$_legend$) ? ($hiddenCategories$$8_hideAndShow$$2$$.splice($hiddenCategories$$8_hideAndShow$$2$$.indexOf($category$$17_event$$555$$), 1), $category$$17_event$$555$$ = new D.$DvtCategoryHideShowEvent$$(D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$, $categories$$15_id$$223$$)) : ($hiddenCategories$$8_hideAndShow$$2$$.push($category$$17_event$$555$$), $category$$17_event$$555$$ = 
  new D.$DvtCategoryHideShowEvent$$(D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$, $categories$$15_id$$223$$));
  $category$$17_event$$555$$.hiddenCategories = $hiddenCategories$$8_hideAndShow$$2$$;
  $JSCompiler_StaticMethods_processHideShowEvent$self$$.$_legend$.$getOptions$().hiddenCategories = $hiddenCategories$$8_hideAndShow$$2$$;
  $JSCompiler_StaticMethods_processHideShowEvent$self$$.$FireEvent$($category$$17_event$$555$$, $JSCompiler_StaticMethods_processHideShowEvent$self$$.$_legend$);
  return D.$JSCompiler_alias_TRUE$$
};
D.$DvtLegendEventManager$$.prototype.$processActionEvent$ = function $$DvtLegendEventManager$$$$$processActionEvent$$($id$$224_obj$$302$$) {
  return $id$$224_obj$$302$$ && $id$$224_obj$$302$$.$getAction$ && $id$$224_obj$$302$$.$getAction$() ? (this.$FireEvent$(new D.$DvtActionEvent$$("action", $id$$224_obj$$302$$.$getAction$(), $id$$224_obj$$302$$.getId()), this.$_legend$), D.$JSCompiler_alias_TRUE$$) : $id$$224_obj$$302$$ instanceof D.$DvtLegendObjPeer$$ && $id$$224_obj$$302$$.$isDrillable$() ? ($id$$224_obj$$302$$ = $id$$224_obj$$302$$.getId(), this.$FireEvent$(new D.$DvtDrillEvent$$($id$$224_obj$$302$$, $id$$224_obj$$302$$, D.$JSCompiler_alias_NULL$$), 
  this.$_legend$), D.$JSCompiler_alias_TRUE$$) : D.$JSCompiler_alias_FALSE$$
};
D.$DvtLegendEventManager$$.prototype.$ProcessRolloverEvent$ = function $$DvtLegendEventManager$$$$$ProcessRolloverEvent$$($event$$556_hoverBehaviorDelay$$2_options$$180$$, $categories$$16_obj$$303$$, $bOver$$9_rolloverEvent$$3$$) {
  $event$$556_hoverBehaviorDelay$$2_options$$180$$ = this.$_legend$.$getOptions$();
  "none" == $event$$556_hoverBehaviorDelay$$2_options$$180$$.hoverBehavior || $categories$$16_obj$$303$$.$getDisplayables$ && $categories$$16_obj$$303$$.$getDisplayables$()[0] instanceof D.$DvtButton$$ || ($categories$$16_obj$$303$$ = $categories$$16_obj$$303$$.$getCategories$ ? $categories$$16_obj$$303$$.$getCategories$() : [], $event$$556_hoverBehaviorDelay$$2_options$$180$$.highlightedCategories = $bOver$$9_rolloverEvent$$3$$ ? $categories$$16_obj$$303$$.slice() : D.$JSCompiler_alias_NULL$$, $bOver$$9_rolloverEvent$$3$$ = 
  new D.$DvtCategoryRolloverEvent$$($bOver$$9_rolloverEvent$$3$$ ? "categoryRollOver" : "categoryRollOut", $event$$556_hoverBehaviorDelay$$2_options$$180$$.highlightedCategories), $event$$556_hoverBehaviorDelay$$2_options$$180$$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)($event$$556_hoverBehaviorDelay$$2_options$$180$$.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($bOver$$9_rolloverEvent$$3$$, this.$_legend$.$_peers$, $event$$556_hoverBehaviorDelay$$2_options$$180$$, D.$JSCompiler_alias_TRUE$$))
};
D.$DvtLegendEventManager$$.prototype.$onCollapseButtonClick$ = function $$DvtLegendEventManager$$$$$onCollapseButtonClick$$($event$$557$$, $button$$64$$) {
  for(var $bounds$$136_buttonId$$1_focus$$5_peer$$22$$ = $button$$64$$.getId(), $isShowingFocusEffect$$2_section$$6$$ = this.$_legend$.$getOptions$(), $i$$699$$ = 0;$i$$699$$ < $bounds$$136_buttonId$$1_focus$$5_peer$$22$$.length;$i$$699$$++) {
    $isShowingFocusEffect$$2_section$$6$$ = $isShowingFocusEffect$$2_section$$6$$.sections[$bounds$$136_buttonId$$1_focus$$5_peer$$22$$[$i$$699$$]]
  }
  $isShowingFocusEffect$$2_section$$6$$.expanded = "off" == $isShowingFocusEffect$$2_section$$6$$.expanded ? "on" : "off";
  $event$$557$$.type == D.$DvtMouseEvent$CLICK$$ && ($bounds$$136_buttonId$$1_focus$$5_peer$$22$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$557$$)), (0,D.$JSCompiler_StaticMethods_setFocusObj$$)(this, $bounds$$136_buttonId$$1_focus$$5_peer$$22$$.$getNextNavigable$($event$$557$$)));
  $isShowingFocusEffect$$2_section$$6$$ = ($bounds$$136_buttonId$$1_focus$$5_peer$$22$$ = this.$_legend$.$getKeyboardFocus$()) ? $bounds$$136_buttonId$$1_focus$$5_peer$$22$$.$isShowingKeyboardFocusEffect$() : D.$JSCompiler_alias_FALSE$$;
  this.$_legend$.$render$();
  $bounds$$136_buttonId$$1_focus$$5_peer$$22$$ && this.$_legend$.$setKeyboardFocus$($bounds$$136_buttonId$$1_focus$$5_peer$$22$$, $isShowingFocusEffect$$2_section$$6$$);
  this.$hideTooltip$();
  $bounds$$136_buttonId$$1_focus$$5_peer$$22$$ = this.$_legend$.$getContentDimensions$();
  this.$FireEvent$(new D.$DvtResizeEvent$$($bounds$$136_buttonId$$1_focus$$5_peer$$22$$.$w$, $bounds$$136_buttonId$$1_focus$$5_peer$$22$$.$h$, $bounds$$136_buttonId$$1_focus$$5_peer$$22$$.x, $bounds$$136_buttonId$$1_focus$$5_peer$$22$$.y), this.$_legend$)
};
D.$DvtLegendEventManager$$.prototype.$GetTouchResponse$ = function $$DvtLegendEventManager$$$$$GetTouchResponse$$() {
  return this.$_legend$.$getOptions$()._isScrollingLegend ? "touchHold" : "touchStart"
};
D.$DvtLegendKeyboardHandler$$ = function $$DvtLegendKeyboardHandler$$$($manager$$19$$, $legend$$6$$) {
  this.Init($manager$$19$$, $legend$$6$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtLegendKeyboardHandler");
D.$DvtLegendKeyboardHandler$$.prototype.Init = function $$DvtLegendKeyboardHandler$$$$Init$($manager$$20$$, $legend$$7$$) {
  D.$DvtLegendKeyboardHandler$$.$superclass$.Init.call(this, $manager$$20$$);
  this.$_legend$ = $legend$$7$$
};
D.$DvtLegendKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtLegendKeyboardHandler$$$$$processKeyDown$$($event$$558$$) {
  var $keyCode$$39_navigables$$8$$ = $event$$558$$.keyCode, $currentNavigable$$12$$ = this.$_eventManager$.$getFocus$(), $isButton$$ = $currentNavigable$$12$$ && $currentNavigable$$12$$.$getDisplayables$()[0] instanceof D.$DvtButton$$, $nextNavigable$$5$$ = D.$JSCompiler_alias_NULL$$;
  $currentNavigable$$12$$ == D.$JSCompiler_alias_NULL$$ && 9 == $keyCode$$39_navigables$$8$$ ? ($keyCode$$39_navigables$$8$$ = this.$_legend$.$_navigablePeers$, 0 < $keyCode$$39_navigables$$8$$.length && ((0,D.$DvtEventManager$consumeEvent$$)($event$$558$$), $nextNavigable$$5$$ = this.$getDefaultNavigable$($keyCode$$39_navigables$$8$$))) : $currentNavigable$$12$$ && (9 == $keyCode$$39_navigables$$8$$ ? ((0,D.$DvtEventManager$consumeEvent$$)($event$$558$$), $nextNavigable$$5$$ = $currentNavigable$$12$$) : 
  13 == $keyCode$$39_navigables$$8$$ || 32 == $keyCode$$39_navigables$$8$$ ? (13 == $keyCode$$39_navigables$$8$$ && this.$_eventManager$.$processActionEvent$($currentNavigable$$12$$), $isButton$$ ? this.$_eventManager$.$onCollapseButtonClick$($event$$558$$, $currentNavigable$$12$$.$getDisplayables$()[0]) : (0,D.$JSCompiler_StaticMethods_processHideShowEvent$$)(this.$_eventManager$, $currentNavigable$$12$$), (0,D.$DvtEventManager$consumeEvent$$)($event$$558$$)) : $isButton$$ && (37 == $keyCode$$39_navigables$$8$$ || 
  39 == $keyCode$$39_navigables$$8$$) ? (this.$_eventManager$.$onCollapseButtonClick$($event$$558$$, $currentNavigable$$12$$.$getDisplayables$()[0]), (0,D.$DvtEventManager$consumeEvent$$)($event$$558$$)) : $nextNavigable$$5$$ = D.$DvtLegendKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$558$$));
  $nextNavigable$$5$$ && this.$_legend$.$container$.scrollIntoView($nextNavigable$$5$$.$getDisplayables$()[0]);
  return $nextNavigable$$5$$
};
D.$DvtLegendObjPeer$$ = function $$DvtLegendObjPeer$$$($legend$$8$$, $displayables$$19$$, $id$$225$$, $tooltip$$34$$, $datatip$$16$$, $drillable$$5$$) {
  this.Init($legend$$8$$, $displayables$$19$$, $id$$225$$, $tooltip$$34$$, $datatip$$16$$, $drillable$$5$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendObjPeer$$, D.$DvtObj$$, "DvtLegendObjPeer");
D.$DvtLegendObjPeer$$.prototype.Init = function $$DvtLegendObjPeer$$$$Init$($i$$700_legend$$9$$, $displayables$$20$$, $item$$31$$, $tooltip$$35$$, $datatip$$17$$, $drillable$$6$$) {
  this.$_legend$ = $i$$700_legend$$9$$;
  this.$_displayables$ = $displayables$$20$$;
  this.$_item$ = $item$$31$$;
  this.$_id$ = (this.$_category$ = D.$DvtLegendRenderer$$.$getItemCategory$(this.$_item$)) ? this.$_category$ : $item$$31$$.title;
  this.$_action$ = $item$$31$$.action;
  this.$_drillable$ = $drillable$$6$$;
  this.$_spb$ = $item$$31$$._spb;
  this.$_tooltip$ = $tooltip$$35$$;
  this.$_datatip$ = $datatip$$17$$;
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  if(this.$_action$ || this.$_drillable$) {
    for($i$$700_legend$$9$$ = 0;$i$$700_legend$$9$$ < this.$_displayables$.length;$i$$700_legend$$9$$++) {
      this.$_displayables$[$i$$700_legend$$9$$].setCursor("pointer")
    }
  }
};
D.$DvtLegendObjPeer$associate$$ = function $$DvtLegendObjPeer$associate$$$($displayables$$21$$, $legend$$10$$, $identObj$$1_item$$32$$, $i$$701_tooltip$$36$$, $datatip$$18$$, $drillable$$7$$) {
  if(!$displayables$$21$$ || !$identObj$$1_item$$32$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $identObj$$1_item$$32$$ = new D.$DvtLegendObjPeer$$($legend$$10$$, $displayables$$21$$, $identObj$$1_item$$32$$, $i$$701_tooltip$$36$$, $datatip$$18$$, $drillable$$7$$);
  $legend$$10$$.$__registerObject$($identObj$$1_item$$32$$);
  for($i$$701_tooltip$$36$$ = 0;$i$$701_tooltip$$36$$ < $displayables$$21$$.length;$i$$701_tooltip$$36$$++) {
    $legend$$10$$.$__getEventManager$().$associate$($displayables$$21$$[$i$$701_tooltip$$36$$], $identObj$$1_item$$32$$)
  }
  return $identObj$$1_item$$32$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtLegendObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.getData = (0,D.$JSCompiler_get$$)("$_item$");
D.$JSCompiler_prototypeAlias$$.$getColor$ = function $$JSCompiler_prototypeAlias$$$$getColor$$() {
  return this.$_item$.color
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = (0,D.$JSCompiler_get$$)("$_displayables$");
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return this.$_category$ != D.$JSCompiler_alias_NULL$$ ? [this.$_category$] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getAction$ = (0,D.$JSCompiler_get$$)("$_action$");
D.$JSCompiler_prototypeAlias$$.$isDrillable$ = (0,D.$JSCompiler_get$$)("$_drillable$");
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = (0,D.$JSCompiler_get$$)("$_spb$");
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$11$$ = [], $options$$181$$ = this.$_legend$.$getOptions$(), $hideAndShow$$3$$ = this.$_legend$.$getOptions$().hideAndShowBehavior, $bHiddenCategory$$ = D.$DvtLegendRenderer$$.$isCategoryHidden$(this.$_category$, this.$_legend$), $data$$61$$ = this.getData();
  if(this.$_displayables$[0] instanceof D.$DvtButton$$) {
    return $states$$11$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "off" == $data$$61$$.expanded ? "STATE_COLLAPSED" : "STATE_EXPANDED")), (0,D.$DvtDisplayable$generateAriaLabel$$)($data$$61$$.title, $states$$11$$)
  }
  "off" != $hideAndShow$$3$$ && "none" != $hideAndShow$$3$$ && $states$$11$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", $bHiddenCategory$$ ? "STATE_HIDDEN" : "STATE_VISIBLE"));
  this.$isDrillable$() && $states$$11$$.push((0,D.$DvtBundle$getTranslation$$)($options$$181$$, "stateDrillable", "DvtUtilBundle", "STATE_DRILLABLE"));
  return $data$$61$$.shortDesc != D.$JSCompiler_alias_NULL$$ ? (0,D.$DvtDisplayable$generateAriaLabel$$)($data$$61$$.shortDesc, $states$$11$$) : 0 < $states$$11$$.length ? (0,D.$DvtDisplayable$generateAriaLabel$$)($data$$61$$.text, $states$$11$$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_updateAriaLabel$$ = function $$JSCompiler_StaticMethods_updateAriaLabel$$$($JSCompiler_StaticMethods_updateAriaLabel$self$$) {
  !(0,D.$DvtAgent$deferAriaCreation$$)() && $JSCompiler_StaticMethods_updateAriaLabel$self$$.$_displayables$[0] && $JSCompiler_StaticMethods_updateAriaLabel$self$$.$_displayables$[0].$setAriaProperty$("label", $JSCompiler_StaticMethods_updateAriaLabel$self$$.$getAriaLabel$())
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtLegendObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$559$$) {
  return $event$$559$$.type == D.$DvtMouseEvent$CLICK$$ ? this : (0,D.$DvtKeyboardHandler$getNextNavigable$$)(this, $event$$559$$, this.$_legend$.$_navigablePeers$, D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$47$$) {
  return this.$_displayables$[0] ? this.$_displayables$[0].$getDimensions$($targetCoordinateSpace$$47$$) : new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_displayables$[0] ? this.$_displayables$[0].$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$_displayables$[0] && (this.$_displayables$[0] instanceof D.$DvtButton$$ ? (0,D.$JSCompiler_StaticMethods_drawOverState$$)(this.$_displayables$[0]) : this.$_displayables$[0].$setSolidStroke$((0,D.$DvtAgent$getFocusColor$$)()))
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$_displayables$[0] && (this.$_displayables$[0] instanceof D.$DvtButton$$ ? (0,D.$JSCompiler_StaticMethods_drawUpState$$)(this.$_displayables$[0]) : this.$_displayables$[0].$setStroke$(D.$JSCompiler_alias_NULL$$))
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = (0,D.$JSCompiler_get$$)("$_tooltip$");
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = (0,D.$JSCompiler_get$$)("$_datatip$");
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return this.$_item$.color
};
D.$DvtLegendRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtLegendRenderer$$, D.$DvtObj$$, "DvtLegendRenderer");
D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH$ = 5;
D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH_WITH_MARKER$ = 2;
D.$DvtLegendRenderer$$.$_LINE_MARKER_SIZE_FACTOR$ = 0.6;
D.$DvtLegendRenderer$$.$_DEFAULT_SYMBOL_SIZE$ = 10;
D.$DvtLegendRenderer$$.$_BUTTON_SIZE$ = 12;
D.$DvtLegendRenderer$$.$_FOCUS_GAP$ = 2;
D.$DvtLegendRenderer$$.$render$ = function $$DvtLegendRenderer$$$$render$$($legend$$11$$, $availSpace$$87$$) {
  var $options$$182_titles$$ = $legend$$11$$.$getOptions$(), $context$$455_totalDim$$ = $legend$$11$$.$getCtx$(), $contentDims_isRTL$$34_valign$$5$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$455_totalDim$$);
  $options$$182_titles$$.isLayout || D.$DvtLegendRenderer$$.$_renderBackground$($legend$$11$$, $availSpace$$87$$);
  var $container$$130_translateX$$1$$ = new D.$DvtSimpleScrollableContainer$$($context$$455_totalDim$$, $availSpace$$87$$.$w$, $availSpace$$87$$.$h$), $contentContainer$$3_i$$702$$ = new D.$DvtContainer$$($context$$455_totalDim$$);
  $container$$130_translateX$$1$$.$_container$.$addChild$($contentContainer$$3_i$$702$$);
  $legend$$11$$.$addChild$($container$$130_translateX$$1$$);
  $legend$$11$$.$container$ = $container$$130_translateX$$1$$;
  var $gapWidth$$2$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$11$$, $options$$182_titles$$.layout.outerGapWidth), $gapHeight$$2$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$11$$, $options$$182_titles$$.layout.outerGapHeight);
  $availSpace$$87$$.x += $gapWidth$$2$$;
  $availSpace$$87$$.y += $gapHeight$$2$$;
  $availSpace$$87$$.$w$ -= 2 * $gapWidth$$2$$;
  $availSpace$$87$$.$h$ -= 2 * $gapHeight$$2$$;
  $legend$$11$$.$__setBounds$($availSpace$$87$$);
  if(0 >= $availSpace$$87$$.$w$ || 0 >= $availSpace$$87$$.$h$) {
    return new D.$DvtDimension$$(0, 0)
  }
  $context$$455_totalDim$$ = D.$DvtLegendRenderer$$.$_renderContents$($legend$$11$$, $contentContainer$$3_i$$702$$, new D.$DvtRectangle$$($availSpace$$87$$.x, $availSpace$$87$$.y, $availSpace$$87$$.$w$, $availSpace$$87$$.$h$));
  if(0 == $context$$455_totalDim$$.$w$ || 0 == $context$$455_totalDim$$.$h$) {
    return new D.$DvtDimension$$(0, 0)
  }
  (0,D.$JSCompiler_StaticMethods_prepareContentPane$$)($container$$130_translateX$$1$$);
  $context$$455_totalDim$$.$h$ > $availSpace$$87$$.$h$ ? ($context$$455_totalDim$$.$h$ = $availSpace$$87$$.$h$, $options$$182_titles$$._isScrollingLegend = D.$JSCompiler_alias_TRUE$$) : $options$$182_titles$$._isScrollingLegend = D.$JSCompiler_alias_FALSE$$;
  var $translateY$$1$$ = $container$$130_translateX$$1$$ = 0, $halign$$6$$ = $options$$182_titles$$.hAlign != D.$JSCompiler_alias_NULL$$ ? $options$$182_titles$$.hAlign : $options$$182_titles$$.halign;
  "center" == $halign$$6$$ ? $container$$130_translateX$$1$$ = $availSpace$$87$$.x - $context$$455_totalDim$$.x + ($availSpace$$87$$.$w$ - $context$$455_totalDim$$.$w$) / 2 : "end" == $halign$$6$$ && ($container$$130_translateX$$1$$ = $contentDims_isRTL$$34_valign$$5$$ ? $availSpace$$87$$.x - $context$$455_totalDim$$.x : $availSpace$$87$$.x - $context$$455_totalDim$$.x + $availSpace$$87$$.$w$ - $context$$455_totalDim$$.$w$);
  $contentDims_isRTL$$34_valign$$5$$ = $options$$182_titles$$.vAlign != D.$JSCompiler_alias_NULL$$ ? $options$$182_titles$$.vAlign : $options$$182_titles$$.valign;
  "middle" == $contentDims_isRTL$$34_valign$$5$$ ? $translateY$$1$$ = $availSpace$$87$$.y - $context$$455_totalDim$$.y + ($availSpace$$87$$.$h$ - $context$$455_totalDim$$.$h$) / 2 : "bottom" == $contentDims_isRTL$$34_valign$$5$$ && ($translateY$$1$$ = $availSpace$$87$$.y - $context$$455_totalDim$$.y + $availSpace$$87$$.$h$ - $context$$455_totalDim$$.$h$);
  $contentDims_isRTL$$34_valign$$5$$ = new D.$DvtRectangle$$($context$$455_totalDim$$.x + $container$$130_translateX$$1$$ - $gapWidth$$2$$, $context$$455_totalDim$$.y + $translateY$$1$$ - $gapHeight$$2$$, $context$$455_totalDim$$.$w$ + 2 * $gapWidth$$2$$, $context$$455_totalDim$$.$h$ + 2 * $gapHeight$$2$$);
  if($options$$182_titles$$.isLayout) {
    return $contentDims_isRTL$$34_valign$$5$$
  }
  ($container$$130_translateX$$1$$ || $translateY$$1$$) && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($contentContainer$$3_i$$702$$, $container$$130_translateX$$1$$, $translateY$$1$$);
  $options$$182_titles$$ = $legend$$11$$.$_titles$;
  for($contentContainer$$3_i$$702$$ = 0;$contentContainer$$3_i$$702$$ < $options$$182_titles$$.length;$contentContainer$$3_i$$702$$++) {
    (0,D.$DvtLayoutUtils$align$$)($context$$455_totalDim$$, $options$$182_titles$$[$contentContainer$$3_i$$702$$].$halign$, $options$$182_titles$$[$contentContainer$$3_i$$702$$].text, $options$$182_titles$$[$contentContainer$$3_i$$702$$].text.$measureDimensions$().$w$)
  }
  return $contentDims_isRTL$$34_valign$$5$$
};
D.$DvtLegendRenderer$$.$_renderContents$ = function $$DvtLegendRenderer$$$$_renderContents$$($legend$$12_sectionsDim$$, $container$$131$$, $availSpace$$88$$) {
  var $options$$183$$ = $legend$$12_sectionsDim$$.$getOptions$();
  $availSpace$$88$$ = $availSpace$$88$$.$clone$();
  var $title$$14$$ = D.$DvtLegendRenderer$$.$_renderTitle$($legend$$12_sectionsDim$$, $container$$131$$, $options$$183$$.title, $availSpace$$88$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_TRUE$$);
  if($title$$14$$) {
    var $titleDim$$ = $title$$14$$.$measureDimensions$(), $titleGap$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$12_sectionsDim$$, $options$$183$$.layout.titleGapHeight);
    $availSpace$$88$$.y += $titleDim$$.$h$ + $titleGap$$;
    $availSpace$$88$$.$h$ -= window.Math.floor($titleDim$$.$h$ + $titleGap$$)
  }
  $legend$$12_sectionsDim$$ = D.$DvtLegendRenderer$$.$_renderSections$($legend$$12_sectionsDim$$, $container$$131$$, $options$$183$$.sections, $availSpace$$88$$, []);
  return $title$$14$$ ? (0,D.$JSCompiler_StaticMethods_getUnion$$)($titleDim$$, $legend$$12_sectionsDim$$) : $legend$$12_sectionsDim$$
};
D.$DvtLegendRenderer$$.$_renderBackground$ = function $$DvtLegendRenderer$$$$_renderBackground$$($legend$$13$$, $availSpace$$89$$) {
  var $borderColor$$50_options$$184$$ = $legend$$13$$.$getOptions$(), $backgroundColor$$23$$ = $borderColor$$50_options$$184$$.backgroundColor, $borderColor$$50_options$$184$$ = $borderColor$$50_options$$184$$.borderColor;
  if($backgroundColor$$23$$ || $borderColor$$50_options$$184$$) {
    var $rect$$34$$ = new D.$DvtRect$$($legend$$13$$.$getCtx$(), $availSpace$$89$$.x, $availSpace$$89$$.y, $availSpace$$89$$.$w$, $availSpace$$89$$.$h$);
    $backgroundColor$$23$$ ? $rect$$34$$.$setSolidFill$($backgroundColor$$23$$) : (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$34$$);
    $borderColor$$50_options$$184$$ && ($rect$$34$$.$setSolidStroke$($borderColor$$50_options$$184$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($rect$$34$$));
    $legend$$13$$.$__getEventManager$().$associate$($rect$$34$$, new D.$DvtSimpleObjPeer$$(D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, {type:D.$DvtLegendConstants$$.$BACKGROUND$, id:D.$JSCompiler_alias_VOID$$}));
    $legend$$13$$.$addChild$($rect$$34$$)
  }
};
D.$DvtLegendRenderer$$.$_renderTitle$ = function $$DvtLegendRenderer$$$$_renderTitle$$($legend$$14$$, $container$$132$$, $title$$15_titleStr$$, $availSpace$$90$$, $section$$7$$, $isAligned$$) {
  var $options$$185$$ = $legend$$14$$.$getOptions$(), $context$$456_titleStyle$$2$$ = $container$$132$$.$getCtx$(), $isRTL$$35$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$456_titleStyle$$2$$);
  if(!$title$$15_titleStr$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $title$$15_titleStr$$ = new D.$DvtOutputText$$($context$$456_titleStyle$$2$$, $title$$15_titleStr$$, $availSpace$$90$$.x, $availSpace$$90$$.y);
  $context$$456_titleStyle$$2$$ = $options$$185$$.titleStyle;
  $section$$7$$ && $section$$7$$.titleStyle ? $context$$456_titleStyle$$2$$ = new D.$DvtCSSStyle$$($section$$7$$.titleStyle) : $section$$7$$ && $options$$185$$._sectionTitleStyle && ($context$$456_titleStyle$$2$$ = $options$$185$$._sectionTitleStyle);
  $title$$15_titleStr$$.$setCSSStyle$($context$$456_titleStyle$$2$$);
  return D.$DvtTextUtils$$.$fitText$($title$$15_titleStr$$, $availSpace$$90$$.$w$, window.Infinity, $container$$132$$) ? ($isRTL$$35$$ && $title$$15_titleStr$$.$setX$($availSpace$$90$$.x + $availSpace$$90$$.$w$ - $title$$15_titleStr$$.$measureDimensions$().$w$), $options$$185$$.isLayout ? $container$$132$$.removeChild($title$$15_titleStr$$) : ($legend$$14$$.$__getEventManager$().$associate$($title$$15_titleStr$$, new D.$DvtSimpleObjPeer$$($title$$15_titleStr$$.$getUntruncatedTextString$(), D.$JSCompiler_alias_NULL$$, 
  D.$JSCompiler_alias_NULL$$, {type:D.$DvtLegendConstants$$.$TITLE$, id:D.$JSCompiler_alias_VOID$$})), $isAligned$$ && $legend$$14$$.$_titles$.push({text:$title$$15_titleStr$$, $halign$:$section$$7$$ && $section$$7$$.titleHalign ? $section$$7$$.titleHalign : $options$$185$$.titleHalign})), $title$$15_titleStr$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtLegendRenderer$$.$_renderSections$ = function $$DvtLegendRenderer$$$$_renderSections$$($legend$$15$$, $container$$133$$, $sections$$4$$, $availSpace$$91$$, $id$$226$$) {
  var $isHoriz$$16_options$$186$$ = $legend$$15$$.$getOptions$();
  $isHoriz$$16_options$$186$$.symbolWidth == D.$JSCompiler_alias_NULL$$ && $isHoriz$$16_options$$186$$.symbolHeight == D.$JSCompiler_alias_NULL$$ ? ($isHoriz$$16_options$$186$$.symbolWidth = D.$DvtLegendRenderer$$.$_DEFAULT_SYMBOL_SIZE$, $isHoriz$$16_options$$186$$.symbolHeight = D.$DvtLegendRenderer$$.$_DEFAULT_SYMBOL_SIZE$) : ($isHoriz$$16_options$$186$$.symbolWidth == D.$JSCompiler_alias_NULL$$ ? $isHoriz$$16_options$$186$$.symbolWidth = $isHoriz$$16_options$$186$$.symbolHeight : $isHoriz$$16_options$$186$$.symbolHeight == 
  D.$JSCompiler_alias_NULL$$ && ($isHoriz$$16_options$$186$$.symbolHeight = $isHoriz$$16_options$$186$$.symbolWidth), $isHoriz$$16_options$$186$$.symbolWidth = (0,window.parseInt)($isHoriz$$16_options$$186$$.symbolWidth), $isHoriz$$16_options$$186$$.symbolHeight = (0,window.parseInt)($isHoriz$$16_options$$186$$.symbolHeight));
  for(var $sectionGapHeight$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$15$$, $isHoriz$$16_options$$186$$.layout.sectionGapHeight), $titleGapHeight$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$15$$, $isHoriz$$16_options$$186$$.layout.titleGapHeight), $gapWidth$$3$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$15$$, $isHoriz$$16_options$$186$$.layout.sectionGapWidth), $rowHeight$$2$$ = D.$DvtLegendRenderer$$.$_getRowHeight$($legend$$15$$), $isHoriz$$16_options$$186$$ = "vertical" != 
  $isHoriz$$16_options$$186$$.orientation, $totalDim$$1$$ = D.$JSCompiler_alias_NULL$$, $horizAvailSpace$$ = $availSpace$$91$$.$clone$(), $sectionDim$$, $i$$703$$ = 0;$i$$703$$ < $sections$$4$$.length;$i$$703$$++) {
    var $sectionId$$4$$ = $id$$226$$.concat([$i$$703$$]), $gapHeight$$3$$ = "off" == $sections$$4$$[$i$$703$$].expanded || $sections$$4$$[$i$$703$$].expanded == D.$JSCompiler_alias_FALSE$$ ? $titleGapHeight$$ : $sectionGapHeight$$;
    $isHoriz$$16_options$$186$$ ? ($sectionDim$$ = D.$DvtLegendRenderer$$.$_renderHorizontalSection$($legend$$15$$, $container$$133$$, $sections$$4$$[$i$$703$$], $horizAvailSpace$$, $rowHeight$$2$$), $sectionDim$$.$w$ > $horizAvailSpace$$.$w$ ? ($horizAvailSpace$$.$w$ < $availSpace$$91$$.$w$ && ($availSpace$$91$$.y += $sectionDim$$.$h$ + $gapHeight$$3$$, $availSpace$$91$$.$h$ -= $sectionDim$$.$h$ + $gapHeight$$3$$), $sectionDim$$ = $sectionDim$$.$w$ <= $availSpace$$91$$.$w$ ? D.$DvtLegendRenderer$$.$_renderHorizontalSection$($legend$$15$$, 
    $container$$133$$, $sections$$4$$[$i$$703$$], $availSpace$$91$$, $rowHeight$$2$$) : D.$DvtLegendRenderer$$.$_renderVerticalSection$($legend$$15$$, $container$$133$$, $sections$$4$$[$i$$703$$], $availSpace$$91$$, $rowHeight$$2$$, $sectionId$$4$$, D.$JSCompiler_alias_TRUE$$), $availSpace$$91$$.y += $sectionDim$$.$h$ + $gapHeight$$3$$, $availSpace$$91$$.$h$ -= $sectionDim$$.$h$ + $gapHeight$$3$$, $horizAvailSpace$$ = $availSpace$$91$$.$clone$()) : ($horizAvailSpace$$.$w$ -= $sectionDim$$.$w$ + $gapWidth$$3$$, 
    (0,D.$DvtAgent$isRightToLeft$$)($legend$$15$$.$getCtx$()) || ($horizAvailSpace$$.x += $sectionDim$$.$w$ + $gapWidth$$3$$))) : ($sectionDim$$ = D.$DvtLegendRenderer$$.$_renderVerticalSection$($legend$$15$$, $container$$133$$, $sections$$4$$[$i$$703$$], $availSpace$$91$$, $rowHeight$$2$$, $sectionId$$4$$, D.$JSCompiler_alias_FALSE$$), $availSpace$$91$$.y += $sectionDim$$.$h$ + $gapHeight$$3$$, $availSpace$$91$$.$h$ -= $sectionDim$$.$h$ + $gapHeight$$3$$);
    $totalDim$$1$$ = $totalDim$$1$$ ? (0,D.$JSCompiler_StaticMethods_getUnion$$)($totalDim$$1$$, $sectionDim$$) : $sectionDim$$
  }
  return $totalDim$$1$$
};
D.$DvtLegendRenderer$$.$_createButton$ = function $$DvtLegendRenderer$$$$_createButton$$($button$$65_context$$457$$, $legend$$16_peer$$23$$, $item$$33$$, $downState$$14_resources$$5$$, $prefix$$5$$, $x$$237$$, $y$$211$$, $tooltip$$37$$, $id$$227$$, $callback$$115$$, $callbackObj$$71$$) {
  var $upState$$17$$ = D.$DvtLegendRenderer$$.$_createButtonImage$($button$$65_context$$457$$, $downState$$14_resources$$5$$, $prefix$$5$$ + "Enabled", $x$$237$$, $y$$211$$), $overState$$14$$ = D.$DvtLegendRenderer$$.$_createButtonImage$($button$$65_context$$457$$, $downState$$14_resources$$5$$, $prefix$$5$$ + "Over", $x$$237$$, $y$$211$$);
  $downState$$14_resources$$5$$ = D.$DvtLegendRenderer$$.$_createButtonImage$($button$$65_context$$457$$, $downState$$14_resources$$5$$, $prefix$$5$$ + "Down", $x$$237$$, $y$$211$$);
  $button$$65_context$$457$$ = new D.$DvtButton$$($button$$65_context$$457$$, $upState$$17$$, $overState$$14$$, $downState$$14_resources$$5$$, D.$JSCompiler_alias_NULL$$, $id$$227$$, $callback$$115$$, $callbackObj$$71$$);
  $legend$$16_peer$$23$$ = (0,D.$DvtLegendObjPeer$associate$$)([$button$$65_context$$457$$], $legend$$16_peer$$23$$, $item$$33$$, $tooltip$$37$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_FALSE$$);
  $button$$65_context$$457$$.$setAriaRole$("button");
  (0,D.$JSCompiler_StaticMethods_updateAriaLabel$$)($legend$$16_peer$$23$$);
  return $button$$65_context$$457$$
};
D.$DvtLegendRenderer$$.$_createButtonImage$ = function $$DvtLegendRenderer$$$$_createButtonImage$$($context$$458_image$$13$$, $resources$$6$$, $name$$101$$, $x$$238$$, $y$$212$$) {
  var $suffix$$3$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$458_image$$13$$) ? "RTL" : "";
  $context$$458_image$$13$$ = new D.$DvtImage$$($context$$458_image$$13$$, $resources$$6$$[$name$$101$$ + $suffix$$3$$] ? $resources$$6$$[$name$$101$$ + $suffix$$3$$] : $resources$$6$$[$name$$101$$], $x$$238$$, $y$$212$$, D.$DvtLegendRenderer$$.$_BUTTON_SIZE$, D.$DvtLegendRenderer$$.$_BUTTON_SIZE$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($context$$458_image$$13$$);
  return $context$$458_image$$13$$
};
D.$DvtLegendRenderer$$.$_renderVerticalSection$ = function $$DvtLegendRenderer$$$$_renderVerticalSection$$($legend$$17$$, $container$$134$$, $section$$8$$, $availSpace$$92_sectionSpace$$, $rowHeight$$3$$, $id$$228_nestedSectionDim_numRows$$, $minimizeNumRows_numCols$$) {
  if($section$$8$$) {
    var $options$$187_textSpace$$ = $legend$$17$$.$getOptions$(), $currRow_symbolGap$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$17$$, $options$$187_textSpace$$.layout.symbolGapWidth), $rowGap$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$17$$, $options$$187_textSpace$$.layout.rowGap), $colGap$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$17$$, $options$$187_textSpace$$.layout.columnGap), $button$$66_buttonGap_colInfo_colWidth_context$$459_titleGap$$1$$ = $legend$$17$$.$getCtx$(), 
    $isRTL$$36$$ = (0,D.$DvtAgent$isRightToLeft$$)($button$$66_buttonGap_colInfo_colWidth_context$$459_titleGap$$1$$);
    $availSpace$$92_sectionSpace$$ = $availSpace$$92_sectionSpace$$.$clone$();
    "off" != $options$$187_textSpace$$.scrolling && ($availSpace$$92_sectionSpace$$.$h$ = window.Infinity);
    var $buttonDim_buttonX_colInitY$$, $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$ = "on" == $section$$8$$.collapsible || $section$$8$$.collapsible == D.$JSCompiler_alias_TRUE$$;
    if($isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$) {
      $buttonDim_buttonX_colInitY$$ = $isRTL$$36$$ ? $availSpace$$92_sectionSpace$$.x + $availSpace$$92_sectionSpace$$.$w$ - D.$DvtLegendRenderer$$.$_BUTTON_SIZE$ : $availSpace$$92_sectionSpace$$.x;
      if(!$options$$187_textSpace$$.isLayout) {
        var $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$ = "off" == $section$$8$$.expanded || $section$$8$$.expanded == D.$JSCompiler_alias_FALSE$$, $buttonType_contentHeight$$2_currCol$$ = $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$ ? "closed" : "open", $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$ ? "EXPAND" : "COLLAPSE", D.$JSCompiler_alias_NULL$$), 
        $em$$4_i$$704$$ = $legend$$17$$.$__getEventManager$(), $button$$66_buttonGap_colInfo_colWidth_context$$459_titleGap$$1$$ = D.$DvtLegendRenderer$$.$_createButton$($button$$66_buttonGap_colInfo_colWidth_context$$459_titleGap$$1$$, $legend$$17$$, $section$$8$$, $options$$187_textSpace$$._resources, $buttonType_contentHeight$$2_currCol$$, $buttonDim_buttonX_colInitY$$, $availSpace$$92_sectionSpace$$.y, $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$, $id$$228_nestedSectionDim_numRows$$, 
        $em$$4_i$$704$$.$onCollapseButtonClick$, $em$$4_i$$704$$);
        $container$$134$$.$addChild$($button$$66_buttonGap_colInfo_colWidth_context$$459_titleGap$$1$$)
      }
      $buttonDim_buttonX_colInitY$$ = new D.$DvtRectangle$$($buttonDim_buttonX_colInitY$$, $availSpace$$92_sectionSpace$$.y, D.$DvtLegendRenderer$$.$_BUTTON_SIZE$, D.$DvtLegendRenderer$$.$_BUTTON_SIZE$);
      $button$$66_buttonGap_colInfo_colWidth_context$$459_titleGap$$1$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$17$$, $options$$187_textSpace$$.layout.symbolGapWidth);
      $isRTL$$36$$ || ($availSpace$$92_sectionSpace$$.x += D.$DvtLegendRenderer$$.$_BUTTON_SIZE$ + $button$$66_buttonGap_colInfo_colWidth_context$$459_titleGap$$1$$);
      $availSpace$$92_sectionSpace$$.$w$ -= D.$DvtLegendRenderer$$.$_BUTTON_SIZE$ + $button$$66_buttonGap_colInfo_colWidth_context$$459_titleGap$$1$$
    }
    $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$ = ($isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$ = D.$DvtLegendRenderer$$.$_renderTitle$($legend$$17$$, $container$$134$$, $section$$8$$.title, $availSpace$$92_sectionSpace$$, $section$$8$$, !$isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$ && 1 >= $id$$228_nestedSectionDim_numRows$$.length)) ? $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$.$measureDimensions$() : new D.$DvtRectangle$$($isRTL$$36$$ ? $availSpace$$92_sectionSpace$$.x + 
    $availSpace$$92_sectionSpace$$.$w$ : $availSpace$$92_sectionSpace$$.x, $availSpace$$92_sectionSpace$$.y, 0, 0);
    $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$ = $buttonDim_buttonX_colInitY$$ ? (0,D.$JSCompiler_StaticMethods_getUnion$$)($isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$, $buttonDim_buttonX_colInitY$$) : $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$;
    if(!$section$$8$$.items && !$section$$8$$.sections || "off" == $section$$8$$.expanded || $section$$8$$.expanded == D.$JSCompiler_alias_FALSE$$) {
      return $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$
    }
    0 < $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$.$h$ && ($button$$66_buttonGap_colInfo_colWidth_context$$459_titleGap$$1$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$17$$, $options$$187_textSpace$$.layout.titleGapHeight), $availSpace$$92_sectionSpace$$.y += $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$.$h$ + $button$$66_buttonGap_colInfo_colWidth_context$$459_titleGap$$1$$, $availSpace$$92_sectionSpace$$.$h$ -= $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$.$h$ + $button$$66_buttonGap_colInfo_colWidth_context$$459_titleGap$$1$$);
    $section$$8$$.sections && ($id$$228_nestedSectionDim_numRows$$ = D.$DvtLegendRenderer$$.$_renderSections$($legend$$17$$, $container$$134$$, $section$$8$$.sections, $availSpace$$92_sectionSpace$$, $id$$228_nestedSectionDim_numRows$$), $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$, $id$$228_nestedSectionDim_numRows$$));
    if(!$section$$8$$.items) {
      return $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$
    }
    $button$$66_buttonGap_colInfo_colWidth_context$$459_titleGap$$1$$ = D.$DvtLegendRenderer$$.$_calcColumns$($legend$$17$$, $availSpace$$92_sectionSpace$$, $rowHeight$$3$$, $section$$8$$.items, $minimizeNumRows_numCols$$);
    $minimizeNumRows_numCols$$ = $button$$66_buttonGap_colInfo_colWidth_context$$459_titleGap$$1$$.numCols;
    $id$$228_nestedSectionDim_numRows$$ = $button$$66_buttonGap_colInfo_colWidth_context$$459_titleGap$$1$$.numRows;
    $button$$66_buttonGap_colInfo_colWidth_context$$459_titleGap$$1$$ = $button$$66_buttonGap_colInfo_colWidth_context$$459_titleGap$$1$$.width;
    $buttonDim_buttonX_colInitY$$ = $availSpace$$92_sectionSpace$$.y;
    if(0 == $id$$228_nestedSectionDim_numRows$$ || 0 == $minimizeNumRows_numCols$$) {
      return $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$
    }
    $buttonType_contentHeight$$2_currCol$$ = $id$$228_nestedSectionDim_numRows$$ * ($rowHeight$$3$$ + $rowGap$$) - $rowGap$$;
    $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$ = window.Math.min($minimizeNumRows_numCols$$ * ($button$$66_buttonGap_colInfo_colWidth_context$$459_titleGap$$1$$ + $colGap$$) - $colGap$$, $availSpace$$92_sectionSpace$$.$w$);
    $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$, new D.$DvtRectangle$$($isRTL$$36$$ ? $availSpace$$92_sectionSpace$$.x + $availSpace$$92_sectionSpace$$.$w$ - $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$ : $availSpace$$92_sectionSpace$$.x, $availSpace$$92_sectionSpace$$.y, $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$, $buttonType_contentHeight$$2_currCol$$));
    if($options$$187_textSpace$$.isLayout) {
      return $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$
    }
    $options$$187_textSpace$$ = $button$$66_buttonGap_colInfo_colWidth_context$$459_titleGap$$1$$ - $options$$187_textSpace$$.symbolWidth - $currRow_symbolGap$$;
    $currRow_symbolGap$$ = 0;
    $buttonType_contentHeight$$2_currCol$$ = 1;
    $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$ = $section$$8$$.items.length;
    for($em$$4_i$$704$$ = 0;$em$$4_i$$704$$ < $buttonTooltip_contentWidth$$4_isCollapsed_numItems$$2$$ && !(D.$DvtLegendRenderer$$.$_createLegendItem$($legend$$17$$, $container$$134$$, $section$$8$$.items[$em$$4_i$$704$$], $availSpace$$92_sectionSpace$$, $options$$187_textSpace$$, $rowHeight$$3$$, $em$$4_i$$704$$), $availSpace$$92_sectionSpace$$.y += $rowHeight$$3$$ + $rowGap$$, $currRow_symbolGap$$++, $currRow_symbolGap$$ === $id$$228_nestedSectionDim_numRows$$ && $buttonType_contentHeight$$2_currCol$$ !== 
    $minimizeNumRows_numCols$$ && ($availSpace$$92_sectionSpace$$.y = $buttonDim_buttonX_colInitY$$, $availSpace$$92_sectionSpace$$.$w$ -= $button$$66_buttonGap_colInfo_colWidth_context$$459_titleGap$$1$$ + $colGap$$, $isRTL$$36$$ || ($availSpace$$92_sectionSpace$$.x += $button$$66_buttonGap_colInfo_colWidth_context$$459_titleGap$$1$$ + $colGap$$), $currRow_symbolGap$$ = 0, $buttonType_contentHeight$$2_currCol$$++), $currRow_symbolGap$$ === $id$$228_nestedSectionDim_numRows$$);$em$$4_i$$704$$++) {
    }
    return $isCollapsible_sectionDim$$1_title$$16_titleDim$$1$$
  }
};
D.$DvtLegendRenderer$$.$_renderHorizontalSection$ = function $$DvtLegendRenderer$$$$_renderHorizontalSection$$($legend$$18$$, $container$$135$$, $section$$9$$, $availSpace$$93_colWidth$$1$$, $rowHeight$$4$$) {
  if($section$$9$$) {
    var $options$$188$$ = $legend$$18$$.$getOptions$(), $symbolWidth$$ = $options$$188$$.symbolWidth, $symbolGap$$1$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$18$$, $options$$188$$.layout.symbolGapWidth), $colGap$$1$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$18$$, $options$$188$$.layout.columnGap), $textWidths$$1_titleGap$$2$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$18$$, $options$$188$$.layout.titleGapWidth), $numItems$$3$$ = $section$$9$$.items.length, $isRTL$$37$$ = (0,D.$DvtAgent$isRightToLeft$$)($legend$$18$$.$getCtx$()), 
    $sectionSpace$$1$$ = $availSpace$$93_colWidth$$1$$.$clone$(), $title$$17$$ = D.$DvtLegendRenderer$$.$_renderTitle$($legend$$18$$, $container$$135$$, $section$$9$$.title, $availSpace$$93_colWidth$$1$$, $section$$9$$, D.$JSCompiler_alias_FALSE$$), $sectionDim$$2_titleDim$$2$$ = $title$$17$$ ? $title$$17$$.$measureDimensions$() : new D.$DvtRectangle$$($isRTL$$37$$ ? $availSpace$$93_colWidth$$1$$.x + $availSpace$$93_colWidth$$1$$.$w$ : $availSpace$$93_colWidth$$1$$.x, $availSpace$$93_colWidth$$1$$.y, 
    0, 0);
    if($section$$9$$.items) {
      0 < $sectionDim$$2_titleDim$$2$$.$w$ && ($sectionSpace$$1$$.$w$ -= $sectionDim$$2_titleDim$$2$$.$w$ + $textWidths$$1_titleGap$$2$$, $isRTL$$37$$ || ($sectionSpace$$1$$.x += $sectionDim$$2_titleDim$$2$$.$w$ + $textWidths$$1_titleGap$$2$$))
    }else {
      return $sectionDim$$2_titleDim$$2$$
    }
    var $textWidths$$1_titleGap$$2$$ = [], $totalWidth$$5$$ = $availSpace$$93_colWidth$$1$$.$w$ - $sectionSpace$$1$$.$w$, $item$$35_textWidth$$3$$, $i$$705$$;
    for($i$$705$$ = 0;$i$$705$$ < $numItems$$3$$;$i$$705$$++) {
      $item$$35_textWidth$$3$$ = $section$$9$$.items[$i$$705$$], $item$$35_textWidth$$3$$ = window.Math.ceil(D.$DvtTextUtils$$.$getTextStringWidth$($legend$$18$$.$getCtx$(), $item$$35_textWidth$$3$$.text, $options$$188$$.textStyle)), $totalWidth$$5$$ += $item$$35_textWidth$$3$$ + $symbolWidth$$ + $symbolGap$$1$$ + $colGap$$1$$, $textWidths$$1_titleGap$$2$$.push($item$$35_textWidth$$3$$)
    }
    0 < $numItems$$3$$ && ($totalWidth$$5$$ -= $colGap$$1$$);
    $sectionDim$$2_titleDim$$2$$ = new D.$DvtRectangle$$($isRTL$$37$$ ? $availSpace$$93_colWidth$$1$$.x + $availSpace$$93_colWidth$$1$$.$w$ - $totalWidth$$5$$ : $availSpace$$93_colWidth$$1$$.x, $availSpace$$93_colWidth$$1$$.y, $totalWidth$$5$$, window.Math.max($rowHeight$$4$$, $sectionDim$$2_titleDim$$2$$.$h$));
    if($options$$188$$.isLayout || $totalWidth$$5$$ > $availSpace$$93_colWidth$$1$$.$w$) {
      return $container$$135$$.removeChild($title$$17$$), $sectionDim$$2_titleDim$$2$$
    }
    for($i$$705$$ = 0;$i$$705$$ < $numItems$$3$$;$i$$705$$++) {
      $item$$35_textWidth$$3$$ = $section$$9$$.items[$i$$705$$], D.$DvtLegendRenderer$$.$_createLegendItem$($legend$$18$$, $container$$135$$, $item$$35_textWidth$$3$$, $sectionSpace$$1$$, $textWidths$$1_titleGap$$2$$[$i$$705$$], $rowHeight$$4$$, $i$$705$$), $availSpace$$93_colWidth$$1$$ = $textWidths$$1_titleGap$$2$$[$i$$705$$] + $symbolWidth$$ + $symbolGap$$1$$, $sectionSpace$$1$$.$w$ -= $availSpace$$93_colWidth$$1$$ + $colGap$$1$$, $isRTL$$37$$ || ($sectionSpace$$1$$.x += $availSpace$$93_colWidth$$1$$ + 
      $colGap$$1$$)
    }
    return $sectionDim$$2_titleDim$$2$$
  }
};
D.$DvtLegendRenderer$$.$_calcColumns$ = function $$DvtLegendRenderer$$$$_calcColumns$$($colGap$$2_legend$$19$$, $availSpace$$94_colWidth$$2$$, $numRows$$1_rowHeight$$5$$, $items$$27$$, $minimizeNumRows$$1_numCols$$1$$) {
  for(var $options$$189$$ = $colGap$$2_legend$$19$$.$getOptions$(), $fullColWidth_textWidth$$4$$ = 0, $i$$706_symbolWidth$$1$$ = 0;$i$$706_symbolWidth$$1$$ < $items$$27$$.length;$i$$706_symbolWidth$$1$$++) {
    var $rowGap$$1_tempWidth$$ = D.$DvtTextUtils$$.$getTextStringWidth$($colGap$$2_legend$$19$$.$getCtx$(), $items$$27$$[$i$$706_symbolWidth$$1$$].text, $options$$189$$.textStyle);
    $rowGap$$1_tempWidth$$ > $fullColWidth_textWidth$$4$$ && ($fullColWidth_textWidth$$4$$ = $rowGap$$1_tempWidth$$)
  }
  var $i$$706_symbolWidth$$1$$ = $options$$189$$.symbolWidth, $symbolGap$$2$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($colGap$$2_legend$$19$$, $options$$189$$.layout.symbolGapWidth), $rowGap$$1_tempWidth$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($colGap$$2_legend$$19$$, $options$$189$$.layout.rowGap);
  $colGap$$2_legend$$19$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($colGap$$2_legend$$19$$, $options$$189$$.layout.columnGap);
  $fullColWidth_textWidth$$4$$ = window.Math.ceil($i$$706_symbolWidth$$1$$ + $symbolGap$$2$$ + $fullColWidth_textWidth$$4$$);
  $minimizeNumRows$$1_numCols$$1$$ ? ($minimizeNumRows$$1_numCols$$1$$ = window.Math.min(window.Math.floor(($availSpace$$94_colWidth$$2$$.$w$ + $colGap$$2_legend$$19$$) / ($fullColWidth_textWidth$$4$$ + $colGap$$2_legend$$19$$)), $items$$27$$.length), $numRows$$1_rowHeight$$5$$ = window.Math.min(window.Math.floor(($availSpace$$94_colWidth$$2$$.$h$ + $rowGap$$1_tempWidth$$) / ($numRows$$1_rowHeight$$5$$ + $rowGap$$1_tempWidth$$)), window.Math.ceil($items$$27$$.length / $minimizeNumRows$$1_numCols$$1$$)), 
  $minimizeNumRows$$1_numCols$$1$$ = window.Math.ceil($items$$27$$.length / $numRows$$1_rowHeight$$5$$), $numRows$$1_rowHeight$$5$$ = window.Math.ceil($items$$27$$.length / $minimizeNumRows$$1_numCols$$1$$)) : window.Infinity == $availSpace$$94_colWidth$$2$$.$h$ ? ($minimizeNumRows$$1_numCols$$1$$ = 1, $numRows$$1_rowHeight$$5$$ = $items$$27$$.length) : ($numRows$$1_rowHeight$$5$$ = window.Math.min(window.Math.floor(($availSpace$$94_colWidth$$2$$.$h$ + $rowGap$$1_tempWidth$$) / ($numRows$$1_rowHeight$$5$$ + 
  $rowGap$$1_tempWidth$$)), $items$$27$$.length), $minimizeNumRows$$1_numCols$$1$$ = window.Math.ceil($items$$27$$.length / $numRows$$1_rowHeight$$5$$), $numRows$$1_rowHeight$$5$$ = window.Math.ceil($items$$27$$.length / $minimizeNumRows$$1_numCols$$1$$));
  $availSpace$$94_colWidth$$2$$ = window.Math.min($fullColWidth_textWidth$$4$$, ($availSpace$$94_colWidth$$2$$.$w$ - $colGap$$2_legend$$19$$ * ($minimizeNumRows$$1_numCols$$1$$ - 1)) / $minimizeNumRows$$1_numCols$$1$$);
  return $availSpace$$94_colWidth$$2$$ < $i$$706_symbolWidth$$1$$ ? {width:0, numCols:0, numRows:0} : {width:$availSpace$$94_colWidth$$2$$, numCols:$minimizeNumRows$$1_numCols$$1$$, numRows:$numRows$$1_rowHeight$$5$$}
};
D.$DvtLegendRenderer$$.$_getRowHeight$ = function $$DvtLegendRenderer$$$$_getRowHeight$$($legend$$20_symbolHeight$$) {
  var $options$$190$$ = $legend$$20_symbolHeight$$.$getOptions$(), $text$$97_textHeight$$3$$ = new D.$DvtOutputText$$($legend$$20_symbolHeight$$.$getCtx$(), "Test");
  $text$$97_textHeight$$3$$.$setCSSStyle$($options$$190$$.textStyle);
  $text$$97_textHeight$$3$$.$alignMiddle$();
  $text$$97_textHeight$$3$$ = D.$DvtTextUtils$$.$guessTextDimensions$($text$$97_textHeight$$3$$).$h$;
  $legend$$20_symbolHeight$$ = $options$$190$$.symbolHeight + (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$20_symbolHeight$$, $options$$190$$.layout.symbolGapHeight);
  return window.Math.ceil(window.Math.max($text$$97_textHeight$$3$$, $legend$$20_symbolHeight$$))
};
D.$DvtLegendRenderer$$.$_createLegendItem$ = function $$DvtLegendRenderer$$$$_createLegendItem$$($legend$$21$$, $container$$136_displayables$$22$$, $item$$37$$, $availSpace$$95_itemRect$$, $textSpace$$1$$, $rowHeight$$6$$) {
  var $hideAndShow$$4_options$$191$$ = $legend$$21$$.$getOptions$(), $context$$460$$ = $legend$$21$$.$getCtx$(), $isRTL$$38$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$460$$), $symbolWidth$$2$$ = $hideAndShow$$4_options$$191$$.symbolWidth, $symbolGap$$3$$ = (0,D.$DvtLegendDefaults$getGapSize$$)($legend$$21$$, $hideAndShow$$4_options$$191$$.layout.symbolGapWidth), $symbolX$$ = $isRTL$$38$$ ? $availSpace$$95_itemRect$$.x + $availSpace$$95_itemRect$$.$w$ - $symbolWidth$$2$$ : $availSpace$$95_itemRect$$.x, 
  $textX$$ = $isRTL$$38$$ ? $availSpace$$95_itemRect$$.x + $availSpace$$95_itemRect$$.$w$ - $symbolWidth$$2$$ - $symbolGap$$3$$ : $availSpace$$95_itemRect$$.x + $symbolWidth$$2$$ + $symbolGap$$3$$, $marker$$13$$ = D.$DvtLegendRenderer$$.$_createLegendSymbol$($legend$$21$$, $symbolX$$, $availSpace$$95_itemRect$$.y, $rowHeight$$6$$, $item$$37$$), $label$$61$$ = $item$$37$$.text, $peer$$24_text$$98$$;
  if($label$$61$$ && ($peer$$24_text$$98$$ = D.$DvtLegendRenderer$$.$_createLegendText$($container$$136_displayables$$22$$, $textSpace$$1$$, $label$$61$$, $hideAndShow$$4_options$$191$$.textStyle))) {
    $peer$$24_text$$98$$.$setX$($textX$$), D.$DvtTextUtils$$.$centerTextVertically$($peer$$24_text$$98$$, $availSpace$$95_itemRect$$.y + $rowHeight$$6$$ / 2), $isRTL$$38$$ && $peer$$24_text$$98$$.$alignRight$()
  }
  $container$$136_displayables$$22$$.$addChild$($marker$$13$$);
  $availSpace$$95_itemRect$$ = new D.$DvtRect$$($context$$460$$, $isRTL$$38$$ ? $textX$$ - $textSpace$$1$$ - D.$DvtLegendRenderer$$.$_FOCUS_GAP$ : $symbolX$$ - D.$DvtLegendRenderer$$.$_FOCUS_GAP$, $availSpace$$95_itemRect$$.y - D.$DvtLegendRenderer$$.$_FOCUS_GAP$, $symbolWidth$$2$$ + $symbolGap$$3$$ + $textSpace$$1$$ + 2 * D.$DvtLegendRenderer$$.$_FOCUS_GAP$, $rowHeight$$6$$ + 2 * D.$DvtLegendRenderer$$.$_FOCUS_GAP$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($availSpace$$95_itemRect$$);
  $hideAndShow$$4_options$$191$$ = $hideAndShow$$4_options$$191$$.hideAndShowBehavior;
  "none" != $hideAndShow$$4_options$$191$$ && "off" != $hideAndShow$$4_options$$191$$ && $availSpace$$95_itemRect$$.setCursor("pointer");
  $container$$136_displayables$$22$$.$addChild$($availSpace$$95_itemRect$$);
  $container$$136_displayables$$22$$ = [$availSpace$$95_itemRect$$, $marker$$13$$];
  $peer$$24_text$$98$$ != D.$JSCompiler_alias_NULL$$ && $container$$136_displayables$$22$$.push($peer$$24_text$$98$$);
  $peer$$24_text$$98$$ = (0,D.$DvtLegendObjPeer$associate$$)($container$$136_displayables$$22$$, $legend$$21$$, $item$$37$$, $peer$$24_text$$98$$ != D.$JSCompiler_alias_NULL$$ ? $peer$$24_text$$98$$.$getUntruncatedTextString$() : D.$JSCompiler_alias_NULL$$, $item$$37$$.shortDesc, D.$DvtLegendRenderer$$.$_isItemDrillable$($legend$$21$$, $item$$37$$));
  D.$DvtLegendRenderer$$.$isCategoryHidden$(D.$DvtLegendRenderer$$.$getItemCategory$($item$$37$$), $legend$$21$$) && $marker$$13$$.$setHollow$($peer$$24_text$$98$$.$getColor$());
  if("none" != $hideAndShow$$4_options$$191$$ && "off" != $hideAndShow$$4_options$$191$$ || $item$$37$$.shortDesc != D.$JSCompiler_alias_NULL$$) {
    $availSpace$$95_itemRect$$.$setAriaRole$("img"), (0,D.$JSCompiler_StaticMethods_updateAriaLabel$$)($peer$$24_text$$98$$)
  }
};
D.$DvtLegendRenderer$$.$_isItemDrillable$ = function $$DvtLegendRenderer$$$$_isItemDrillable$$($legend$$22$$, $item$$38$$) {
  return"on" == $item$$38$$.drilling ? D.$JSCompiler_alias_TRUE$$ : "off" == $item$$38$$.drilling ? D.$JSCompiler_alias_FALSE$$ : "on" == $legend$$22$$.$getOptions$().drilling
};
D.$DvtLegendRenderer$$.$_createLegendText$ = function $$DvtLegendRenderer$$$$_createLegendText$$($container$$137$$, $textSpace$$2$$, $label$$62_text$$99$$, $style$$99$$) {
  $label$$62_text$$99$$ = new D.$DvtOutputText$$($container$$137$$.$getCtx$(), $label$$62_text$$99$$);
  $label$$62_text$$99$$.$setCSSStyle$($style$$99$$);
  return $label$$62_text$$99$$ = D.$DvtTextUtils$$.$fitText$($label$$62_text$$99$$, $textSpace$$2$$, window.Infinity, $container$$137$$) ? $label$$62_text$$99$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtLegendRenderer$$.$_createLegendSymbol$ = function $$DvtLegendRenderer$$$$_createLegendSymbol$$($legend$$23$$, $symbol$$1_x$$239$$, $y$$213$$, $rowHeight$$7$$, $item$$39$$) {
  var $legendOptions$$6_symbolHeight$$1$$ = $legend$$23$$.$getOptions$();
  $item$$39$$.markerShape || ($item$$39$$.markerShape = $legendOptions$$6_symbolHeight$$1$$._markerShape);
  $item$$39$$.color || ($item$$39$$.color = $legendOptions$$6_symbolHeight$$1$$._color);
  $item$$39$$.lineWidth || ($item$$39$$.lineWidth = $legendOptions$$6_symbolHeight$$1$$._lineWidth);
  var $symbolWidth$$3$$ = $legendOptions$$6_symbolHeight$$1$$.symbolWidth, $legendOptions$$6_symbolHeight$$1$$ = $legendOptions$$6_symbolHeight$$1$$.symbolHeight, $cy$$54$$ = $y$$213$$ + $rowHeight$$7$$ / 2, $cx$$53$$ = $symbol$$1_x$$239$$ + $symbolWidth$$3$$ / 2, $symbolType$$ = $item$$39$$.type != D.$JSCompiler_alias_NULL$$ ? $item$$39$$.type : $item$$39$$.symbolType;
  "line" == $symbolType$$ ? ($item$$39$$.lineWidth = window.Math.min($item$$39$$.lineWidth, D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH$), $symbol$$1_x$$239$$ = D.$DvtLegendRenderer$$.$_createLine$($legend$$23$$.$getCtx$(), $symbol$$1_x$$239$$, $y$$213$$, $symbolWidth$$3$$, $rowHeight$$7$$, $item$$39$$)) : "lineWithMarker" == $symbolType$$ ? ($item$$39$$.lineWidth = window.Math.min($item$$39$$.lineWidth, D.$DvtLegendRenderer$$.$_MAX_LINE_WIDTH_WITH_MARKER$), $symbol$$1_x$$239$$ = D.$DvtLegendRenderer$$.$_createLine$($legend$$23$$.$getCtx$(), 
  $symbol$$1_x$$239$$, $y$$213$$, $symbolWidth$$3$$, $rowHeight$$7$$, $item$$39$$), D.$DvtLegendRenderer$$.$isCategoryHidden$(D.$DvtLegendRenderer$$.$getItemCategory$($item$$39$$), $legend$$23$$) || $symbol$$1_x$$239$$.$addChild$(D.$DvtLegendRenderer$$.$_createMarker$($legend$$23$$, $cx$$53$$, $cy$$54$$, $symbolWidth$$3$$ * D.$DvtLegendRenderer$$.$_LINE_MARKER_SIZE_FACTOR$, $legendOptions$$6_symbolHeight$$1$$ * D.$DvtLegendRenderer$$.$_LINE_MARKER_SIZE_FACTOR$, $item$$39$$))) : $symbol$$1_x$$239$$ = 
  "image" == $symbolType$$ ? D.$DvtLegendRenderer$$.$_createImage$($legend$$23$$, $symbol$$1_x$$239$$, $y$$213$$, $symbolWidth$$3$$, $legendOptions$$6_symbolHeight$$1$$, $rowHeight$$7$$, $item$$39$$) : D.$DvtLegendRenderer$$.$_createMarker$($legend$$23$$, $cx$$53$$, $cy$$54$$, $symbolWidth$$3$$, $legendOptions$$6_symbolHeight$$1$$, $item$$39$$);
  return $symbol$$1_x$$239$$
};
D.$DvtLegendRenderer$$.$_createImage$ = function $$DvtLegendRenderer$$$$_createImage$$($legend$$24$$, $x$$240$$, $y$$214$$, $symbolWidth$$4$$, $symbolHeight$$2$$, $rowHeight$$8$$, $item$$40$$) {
  return new D.$DvtImage$$($legend$$24$$.$getCtx$(), $item$$40$$.source, $x$$240$$, $y$$214$$ + ($rowHeight$$8$$ - $symbolHeight$$2$$) / 2, $symbolWidth$$4$$, $symbolHeight$$2$$)
};
D.$DvtLegendRenderer$$.$_createMarker$ = function $$DvtLegendRenderer$$$$_createMarker$$($legend$$25_shape$$68$$, $cx$$54$$, $cy$$55$$, $legendMarker_symbolWidth$$5$$, $symbolHeight$$3$$, $item$$41$$) {
  var $context$$462$$ = $legend$$25_shape$$68$$.$getCtx$(), $legendOptions$$7$$ = $legend$$25_shape$$68$$.$getOptions$();
  $legend$$25_shape$$68$$ = $item$$41$$.markerShape;
  var $color$$65$$ = $item$$41$$.markerColor ? $item$$41$$.markerColor : $item$$41$$.color, $pattern$$12$$ = $item$$41$$.pattern;
  $pattern$$12$$ && "none" != $pattern$$12$$ ? ($legendMarker_symbolWidth$$5$$ = new D.$DvtSimpleMarker$$($context$$462$$, $legend$$25_shape$$68$$, $legendOptions$$7$$.skin, 0, 0, $legendMarker_symbolWidth$$5$$, $symbolHeight$$3$$), $legendMarker_symbolWidth$$5$$.$setFill$(new D.$DvtPatternFill$$($pattern$$12$$, $color$$65$$, "#FFFFFF")), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($legendMarker_symbolWidth$$5$$, $cx$$54$$, $cy$$55$$)) : ($legendMarker_symbolWidth$$5$$ = new D.$DvtSimpleMarker$$($context$$462$$, 
  $legend$$25_shape$$68$$, $legendOptions$$7$$.skin, $cx$$54$$, $cy$$55$$, $legendMarker_symbolWidth$$5$$, $symbolHeight$$3$$), $legendMarker_symbolWidth$$5$$.$setSolidFill$($color$$65$$));
  $item$$41$$.borderColor && $legendMarker_symbolWidth$$5$$.$setSolidStroke$($item$$41$$.borderColor, D.$JSCompiler_alias_NULL$$, $item$$41$$._borderWidth ? $item$$41$$._borderWidth : 1);
  "square" == $legend$$25_shape$$68$$ && (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($legendMarker_symbolWidth$$5$$);
  return $legendMarker_symbolWidth$$5$$
};
D.$DvtLegendRenderer$$.$_createLine$ = function $$DvtLegendRenderer$$$$_createLine$$($context$$463_line$$11$$, $stroke$$98_x$$241$$, $lineY_y$$215$$, $colWidth$$3$$, $rowHeight$$9$$, $item$$42_style$$100$$) {
  $lineY_y$$215$$ += $rowHeight$$9$$ / 2;
  $context$$463_line$$11$$ = new D.$DvtLine$$($context$$463_line$$11$$, $stroke$$98_x$$241$$, $lineY_y$$215$$, $stroke$$98_x$$241$$ + $colWidth$$3$$, $lineY_y$$215$$);
  $stroke$$98_x$$241$$ = new D.$DvtSolidStroke$$($item$$42_style$$100$$.color, 1, $item$$42_style$$100$$.lineWidth);
  $item$$42_style$$100$$ = $item$$42_style$$100$$.lineStyle;
  "dashed" == $item$$42_style$$100$$ ? $stroke$$98_x$$241$$.$setType$((0,D.$DvtStroke$convertTypeString$$)($item$$42_style$$100$$), "4,2,4") : "dotted" == $item$$42_style$$100$$ && $stroke$$98_x$$241$$.$setType$((0,D.$DvtStroke$convertTypeString$$)($item$$42_style$$100$$), "2");
  $context$$463_line$$11$$.$setStroke$($stroke$$98_x$$241$$);
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($context$$463_line$$11$$);
  return $context$$463_line$$11$$
};
D.$DvtLegendRenderer$$.$getItemCategory$ = function $$DvtLegendRenderer$$$$getItemCategory$$($item$$43$$) {
  var $category$$19$$ = D.$JSCompiler_alias_NULL$$;
  return $category$$19$$ = $item$$43$$.categories && 0 < $item$$43$$.categories.length ? $item$$43$$.categories[0] : $item$$43$$.id ? $item$$43$$.id : $item$$43$$.text
};
D.$DvtLegendRenderer$$.$isCategoryHidden$ = function $$DvtLegendRenderer$$$$isCategoryHidden$$($category$$20$$, $legend$$26$$) {
  var $hiddenCategories$$9$$ = $legend$$26$$.$getOptions$().hiddenCategories;
  return!$hiddenCategories$$9$$ || 0 >= $hiddenCategories$$9$$.length ? D.$JSCompiler_alias_FALSE$$ : -1 !== $hiddenCategories$$9$$.indexOf($category$$20$$)
};

  return D;
});
/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit', './DvtSubcomponent'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  
  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtBaseTreeView$$ = (0,D.$JSCompiler_emptyFn$$)();
(0,D.$goog$exportPath_$$)("DvtBaseTreeView", D.$DvtBaseTreeView$$);
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeView$$, D.$DvtBaseComponent$$, "DvtBaseTreeView");
D.$DvtBaseTreeView$$.prototype.Init = function $$DvtBaseTreeView$$$$Init$($context$$663$$, $callback$$174$$, $callbackObj$$124$$) {
  D.$DvtBaseTreeView$$.$superclass$.Init.call(this, $context$$663$$, $callback$$174$$, $callbackObj$$124$$);
  this.$_eventHandler$ = this.$CreateEventManager$(this, $context$$663$$, this.$__dispatchEvent$, this);
  this.$_eventHandler$.$addListeners$(this);
  this.$_dragSource$ = new D.$DvtDragSource$$($context$$663$$);
  this.$_dropTarget$ = new D.$DvtBaseTreeDropTarget$$(this);
  (0,D.$JSCompiler_StaticMethods_setDragSource$$)(this.$_eventHandler$, this.$_dragSource$);
  this.$_legend$ = D.$JSCompiler_alias_NULL$$;
  this.$_hasFocus$ = D.$JSCompiler_alias_FALSE$$;
  this.$_navigableIdToFocus$ = D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseTreeView$$.prototype.$SetOptions$ = function $$DvtBaseTreeView$$$$$SetOptions$$($options$$305$$) {
  $options$$305$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$305$$), (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this))
};
D.$DvtBaseTreeView$$.prototype.$render$ = function $$DvtBaseTreeView$$$$$render$$($ah$$5_animationOnDataChange$$3_options$$306_root$$32_rootNodes$$inline_9100$$, $container$$213_width$$185$$, $availSpace$$128_bBlackBoxUpdate$$3_height$$164$$) {
  var $bNewOptions$$ = $ah$$5_animationOnDataChange$$3_options$$306_root$$32_rootNodes$$inline_9100$$ || !this.$Options$;
  this.$SetOptions$($ah$$5_animationOnDataChange$$3_options$$306_root$$32_rootNodes$$inline_9100$$);
  var $newRoot$$inline_9113_options$$inline_9099_size$$inline_9104$$ = this.$getOptions$();
  if($newRoot$$inline_9113_options$$inline_9099_size$$inline_9104$$.nodes == D.$JSCompiler_alias_NULL$$) {
    $ah$$5_animationOnDataChange$$3_options$$306_root$$32_rootNodes$$inline_9100$$ = D.$JSCompiler_alias_NULL$$
  }else {
    $ah$$5_animationOnDataChange$$3_options$$306_root$$32_rootNodes$$inline_9100$$ = [];
    for(var $hiddenCategories$$inline_9101_oldAncestors$$inline_9114_oldList$$inline_9116$$ = D.$DvtArrayUtils$$.$createBooleanMap$($newRoot$$inline_9113_options$$inline_9099_size$$inline_9104$$.hiddenCategories), $artificialRoot$$inline_9106_bounds$$160_i$$inline_9105_oldRoot$$inline_9112$$ = 0;$artificialRoot$$inline_9106_bounds$$160_i$$inline_9105_oldRoot$$inline_9112$$ < $newRoot$$inline_9113_options$$inline_9099_size$$inline_9104$$.nodes.length;$artificialRoot$$inline_9106_bounds$$160_i$$inline_9105_oldRoot$$inline_9112$$++) {
      var $newAncestors$$inline_9115_newList$$inline_9117_nodeOptions$$inline_9102_rootNode$$inline_9103$$ = $newRoot$$inline_9113_options$$inline_9099_size$$inline_9104$$.nodes[$artificialRoot$$inline_9106_bounds$$160_i$$inline_9105_oldRoot$$inline_9112$$];
      $newAncestors$$inline_9115_newList$$inline_9117_nodeOptions$$inline_9102_rootNode$$inline_9103$$._index = $artificialRoot$$inline_9106_bounds$$160_i$$inline_9105_oldRoot$$inline_9112$$;
      ($newAncestors$$inline_9115_newList$$inline_9117_nodeOptions$$inline_9102_rootNode$$inline_9103$$ = (0,D.$JSCompiler_StaticMethods__processNode$$)(this, $hiddenCategories$$inline_9101_oldAncestors$$inline_9114_oldList$$inline_9116$$, $newAncestors$$inline_9115_newList$$inline_9117_nodeOptions$$inline_9102_rootNode$$inline_9103$$)) && $ah$$5_animationOnDataChange$$3_options$$306_root$$32_rootNodes$$inline_9100$$.push($newAncestors$$inline_9115_newList$$inline_9117_nodeOptions$$inline_9102_rootNode$$inline_9103$$)
    }
    if(1 == $ah$$5_animationOnDataChange$$3_options$$306_root$$32_rootNodes$$inline_9100$$.length) {
      $ah$$5_animationOnDataChange$$3_options$$306_root$$32_rootNodes$$inline_9100$$ = $ah$$5_animationOnDataChange$$3_options$$306_root$$32_rootNodes$$inline_9100$$[0]
    }else {
      for(var $artificialRoot$$inline_9106_bounds$$160_i$$inline_9105_oldRoot$$inline_9112$$ = $newRoot$$inline_9113_options$$inline_9099_size$$inline_9104$$ = 0;$artificialRoot$$inline_9106_bounds$$160_i$$inline_9105_oldRoot$$inline_9112$$ < $ah$$5_animationOnDataChange$$3_options$$306_root$$32_rootNodes$$inline_9100$$.length;$artificialRoot$$inline_9106_bounds$$160_i$$inline_9105_oldRoot$$inline_9112$$++) {
        $newRoot$$inline_9113_options$$inline_9099_size$$inline_9104$$ += $ah$$5_animationOnDataChange$$3_options$$306_root$$32_rootNodes$$inline_9100$$[$artificialRoot$$inline_9106_bounds$$160_i$$inline_9105_oldRoot$$inline_9112$$].$getSize$()
      }
      $artificialRoot$$inline_9106_bounds$$160_i$$inline_9105_oldRoot$$inline_9112$$ = this.$CreateNode$({value:$newRoot$$inline_9113_options$$inline_9099_size$$inline_9104$$, $bArtificialRoot$:D.$JSCompiler_alias_TRUE$$});
      (0,D.$JSCompiler_StaticMethods_setChildNodes$$)($artificialRoot$$inline_9106_bounds$$160_i$$inline_9105_oldRoot$$inline_9112$$, $ah$$5_animationOnDataChange$$3_options$$306_root$$32_rootNodes$$inline_9100$$);
      $ah$$5_animationOnDataChange$$3_options$$306_root$$32_rootNodes$$inline_9100$$ = $artificialRoot$$inline_9106_bounds$$160_i$$inline_9105_oldRoot$$inline_9112$$
    }
  }
  this.$ApplyParsedProperties$({root:$ah$$5_animationOnDataChange$$3_options$$306_root$$32_rootNodes$$inline_9100$$});
  !(0,window.isNaN)($container$$213_width$$185$$) && !(0,window.isNaN)($availSpace$$128_bBlackBoxUpdate$$3_height$$164$$) && (this.$Width$ = $container$$213_width$$185$$, this.$Height$ = $availSpace$$128_bBlackBoxUpdate$$3_height$$164$$);
  this.$_eventHandler$ && this.$_eventHandler$.$hideTooltip$();
  $availSpace$$128_bBlackBoxUpdate$$3_height$$164$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
  this.$Layout$($availSpace$$128_bBlackBoxUpdate$$3_height$$164$$);
  $container$$213_width$$185$$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$addChild$($container$$213_width$$185$$);
  this.$_templates$ && (this.$_afContext$ = new D.$DvtAfContext$$(this.$getCtx$(), this.$_eventHandler$), this.$_afContext$.$_rmIfNotFit$ = D.$JSCompiler_alias_TRUE$$);
  this.$Render$($container$$213_width$$185$$, $availSpace$$128_bBlackBoxUpdate$$3_height$$164$$);
  this.$Animation$ && (this.$AnimationStopped$ = D.$JSCompiler_alias_TRUE$$, this.$Animation$.stop());
  $ah$$5_animationOnDataChange$$3_options$$306_root$$32_rootNodes$$inline_9100$$ = this.$getOptions$().animationOnDataChange;
  $artificialRoot$$inline_9106_bounds$$160_i$$inline_9105_oldRoot$$inline_9112$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
  $availSpace$$128_bBlackBoxUpdate$$3_height$$164$$ = D.$JSCompiler_alias_FALSE$$;
  this.$_container$ ? $ah$$5_animationOnDataChange$$3_options$$306_root$$32_rootNodes$$inline_9100$$ && $bNewOptions$$ && (D.$DvtBlackBoxAnimationHandler$$.isSupported($ah$$5_animationOnDataChange$$3_options$$306_root$$32_rootNodes$$inline_9100$$) ? (this.$Animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$getCtx$(), $ah$$5_animationOnDataChange$$3_options$$306_root$$32_rootNodes$$inline_9100$$, this.$_container$, $container$$213_width$$185$$, $artificialRoot$$inline_9106_bounds$$160_i$$inline_9105_oldRoot$$inline_9112$$, 
  this.$AnimationDuration$), $availSpace$$128_bBlackBoxUpdate$$3_height$$164$$ = D.$JSCompiler_alias_TRUE$$) : this.$_oldRoot$ && "auto" == $ah$$5_animationOnDataChange$$3_options$$306_root$$32_rootNodes$$inline_9100$$ && (this.$_deleteContainer$ = this.$GetDeleteContainer$(), this.$addChild$(this.$_deleteContainer$), $ah$$5_animationOnDataChange$$3_options$$306_root$$32_rootNodes$$inline_9100$$ = new D.$DvtBaseTreeAnimationHandler$$(this.$getCtx$(), this.$_deleteContainer$), $artificialRoot$$inline_9106_bounds$$160_i$$inline_9105_oldRoot$$inline_9112$$ = 
  this.$_oldRoot$, $newRoot$$inline_9113_options$$inline_9099_size$$inline_9104$$ = this.$_root$, $hiddenCategories$$inline_9101_oldAncestors$$inline_9114_oldList$$inline_9116$$ = this.$_oldAncestors$, $newAncestors$$inline_9115_newList$$inline_9117_nodeOptions$$inline_9102_rootNode$$inline_9103$$ = this.$_ancestors$, $ah$$5_animationOnDataChange$$3_options$$306_root$$32_rootNodes$$inline_9100$$.$_bDrill$ = D.$JSCompiler_alias_FALSE$$, $ah$$5_animationOnDataChange$$3_options$$306_root$$32_rootNodes$$inline_9100$$.$_oldRoot$ = 
  $artificialRoot$$inline_9106_bounds$$160_i$$inline_9105_oldRoot$$inline_9112$$, $ah$$5_animationOnDataChange$$3_options$$306_root$$32_rootNodes$$inline_9100$$.$_oldAncestors$ = $hiddenCategories$$inline_9101_oldAncestors$$inline_9114_oldList$$inline_9116$$, (0,D.$DvtBaseTreeAnimationHandler$_isAncestor$$)($newAncestors$$inline_9115_newList$$inline_9117_nodeOptions$$inline_9102_rootNode$$inline_9103$$, $artificialRoot$$inline_9106_bounds$$160_i$$inline_9105_oldRoot$$inline_9112$$) || (0,D.$DvtBaseTreeAnimationHandler$_isAncestor$$)($hiddenCategories$$inline_9101_oldAncestors$$inline_9114_oldList$$inline_9116$$, 
  $newRoot$$inline_9113_options$$inline_9099_size$$inline_9104$$) ? ($ah$$5_animationOnDataChange$$3_options$$306_root$$32_rootNodes$$inline_9100$$.$_bDrill$ = D.$JSCompiler_alias_TRUE$$, $hiddenCategories$$inline_9101_oldAncestors$$inline_9114_oldList$$inline_9116$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($artificialRoot$$inline_9106_bounds$$160_i$$inline_9105_oldRoot$$inline_9112$$), $newAncestors$$inline_9115_newList$$inline_9117_nodeOptions$$inline_9102_rootNode$$inline_9103$$ = 
  (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($newRoot$$inline_9113_options$$inline_9099_size$$inline_9104$$), $hiddenCategories$$inline_9101_oldAncestors$$inline_9114_oldList$$inline_9116$$.push($artificialRoot$$inline_9106_bounds$$160_i$$inline_9105_oldRoot$$inline_9112$$), $newAncestors$$inline_9115_newList$$inline_9117_nodeOptions$$inline_9102_rootNode$$inline_9103$$.push($newRoot$$inline_9113_options$$inline_9099_size$$inline_9104$$), (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($ah$$5_animationOnDataChange$$3_options$$306_root$$32_rootNodes$$inline_9100$$, 
  $hiddenCategories$$inline_9101_oldAncestors$$inline_9114_oldList$$inline_9116$$, $newAncestors$$inline_9115_newList$$inline_9117_nodeOptions$$inline_9102_rootNode$$inline_9103$$)) : (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($ah$$5_animationOnDataChange$$3_options$$306_root$$32_rootNodes$$inline_9100$$, [$artificialRoot$$inline_9106_bounds$$160_i$$inline_9105_oldRoot$$inline_9112$$], [$newRoot$$inline_9113_options$$inline_9099_size$$inline_9104$$]), this.$Animation$ = $ah$$5_animationOnDataChange$$3_options$$306_root$$32_rootNodes$$inline_9100$$.$getAnimation$(D.$JSCompiler_alias_TRUE$$))) : 
  this.$Animation$ = this.$GetDisplayAnimation$($container$$213_width$$185$$, $artificialRoot$$inline_9106_bounds$$160_i$$inline_9105_oldRoot$$inline_9112$$);
  this.$_oldAncestors$ = this.$_oldRoot$ = D.$JSCompiler_alias_NULL$$;
  this.$Animation$ && (this.$_eventHandler$.$removeListeners$(this), this.$Animation$.$setOnEnd$(this.$OnAnimationEnd$, this), this.$Animation$.play());
  $availSpace$$128_bBlackBoxUpdate$$3_height$$164$$ ? this.$_oldContainer$ = this.$_container$ : this.$_container$ && this.removeChild(this.$_container$);
  this.$_container$ = $container$$213_width$$185$$;
  $bNewOptions$$ ? this.$_processInitialSelections$() : this.$ReselectNodes$();
  (0,D.$JSCompiler_StaticMethods__processInitialFocus$$)(this, !this.$Animation$);
  this.$Animation$ || (0,D.$JSCompiler_StaticMethods__processInitialHighlighting$$)(this);
  this.$UpdateAriaAttributes$()
};
D.$DvtBaseTreeView$$.prototype.render = D.$DvtBaseTreeView$$.prototype.$render$;
D.$DvtBaseTreeView$$.prototype.$Parse$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$DvtBaseTreeView$$.prototype.$Layout$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtBaseTreeView$$.prototype.$Render$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_RenderBackground$$ = function $$JSCompiler_StaticMethods_RenderBackground$$$($JSCompiler_StaticMethods_RenderBackground$self$$, $container$$215$$) {
  var $background$$15$$ = new D.$DvtRect$$($JSCompiler_StaticMethods_RenderBackground$self$$.$getCtx$(), 0, 0, $JSCompiler_StaticMethods_RenderBackground$self$$.$Width$, $JSCompiler_StaticMethods_RenderBackground$self$$.$Height$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($background$$15$$);
  $container$$215$$.$addChild$($background$$15$$)
};
D.$JSCompiler_StaticMethods_LayoutBreadcrumbs$$ = function $$JSCompiler_StaticMethods_LayoutBreadcrumbs$$$($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$, $availSpace$$130$$) {
  if(0 < $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_ancestors$.length) {
    var $rootLabel$$ = $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_root$ ? $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_root$.$getLabel$() : D.$JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ && (0,D.$JSCompiler_StaticMethods_removeComponentKeyboardHandler$$)($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_eventHandler$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$.$getEventManager$());
    $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ = D.$DvtTreeBreadcrumbsRenderer$$.$render$($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$, $availSpace$$130$$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_ancestors$, $rootLabel$$);
    (0,D.$JSCompiler_StaticMethods_addComponentKeyboardHandlerAt$$)($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_eventHandler$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$.$getEventManager$())
  }else {
    $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ && (0,D.$JSCompiler_StaticMethods_removeComponentKeyboardHandler$$)($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_eventHandler$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$.$getEventManager$()), $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ = D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods_RenderEmptyText$$ = function $$JSCompiler_StaticMethods_RenderEmptyText$$$($JSCompiler_StaticMethods_RenderEmptyText$self$$, $container$$218$$) {
  var $options$$307$$ = $JSCompiler_StaticMethods_RenderEmptyText$self$$.$getOptions$(), $emptyText$$5$$ = $options$$307$$.emptyText;
  $emptyText$$5$$ || ($emptyText$$5$$ = (0,D.$DvtBundle$getTranslation$$)($options$$307$$, "labelNoData", "DvtUtilBundle", "NO_DATA"));
  D.$DvtTextUtils$$.$renderEmptyText$($container$$218$$, $emptyText$$5$$, new D.$DvtRectangle$$(0, 0, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Width$, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Height$), $JSCompiler_StaticMethods_RenderEmptyText$self$$.$__getEventManager$(), $options$$307$$._statusMessageStyle)
};
D.$JSCompiler_StaticMethods_HasValidData$$ = function $$JSCompiler_StaticMethods_HasValidData$$$($JSCompiler_StaticMethods_HasValidData$self$$) {
  return $JSCompiler_StaticMethods_HasValidData$self$$.$_root$ && 0 < $JSCompiler_StaticMethods_HasValidData$self$$.$_root$.$getSize$()
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeView$$.prototype;
D.$JSCompiler_prototypeAlias$$.$GetDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$GetDisplayAnimation$$($container$$219$$, $bounds$$162$$) {
  var $animationOnDisplay$$4$$ = this.$getOptions$().animationOnDisplay;
  return D.$DvtBlackBoxAnimationHandler$$.isSupported($animationOnDisplay$$4$$) ? D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$(this.$getCtx$(), $animationOnDisplay$$4$$, $container$$219$$, $bounds$$162$$, this.$AnimationDuration$) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  this.$_deleteContainer$ && (this.removeChild(this.$_deleteContainer$), this.$_deleteContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$AnimationStopped$ = D.$JSCompiler_alias_FALSE$$;
  this.$Animation$ = D.$JSCompiler_alias_NULL$$;
  this.$_eventHandler$.$addListeners$(this);
  (0,D.$JSCompiler_StaticMethods__processInitialFocus$$)(this, D.$JSCompiler_alias_TRUE$$);
  (0,D.$JSCompiler_StaticMethods__processInitialHighlighting$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$GetDeleteContainer$ = function $$JSCompiler_prototypeAlias$$$$GetDeleteContainer$$() {
  return new D.$DvtContainer$$(this.$getCtx$())
};
D.$JSCompiler_prototypeAlias$$.$CreateKeyboardHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateKeyboardHandler$$($manager$$35$$) {
  return new D.$DvtBaseTreeKeyboardHandler$$($manager$$35$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$($view$$67$$, $context$$664$$, $callback$$175$$, $callbackObj$$125$$) {
  return new D.$DvtBaseTreeEventManager$$($view$$67$$, $context$$664$$, $callback$$175$$, $callbackObj$$125$$)
};
D.$JSCompiler_prototypeAlias$$.$GetInitialFocusedItem$ = function $$JSCompiler_prototypeAlias$$$$GetInitialFocusedItem$$($root$$33$$) {
  if($root$$33$$ && $root$$33$$.$_bArtificialRoot$) {
    var $nodes$$20$$ = $root$$33$$.$getChildNodes$();
    if($nodes$$20$$ && 0 < $nodes$$20$$.length) {
      return $nodes$$20$$[0]
    }
  }
  return $root$$33$$
};
D.$JSCompiler_prototypeAlias$$.$highlight$ = function $$JSCompiler_prototypeAlias$$$$highlight$$($categories$$32$$) {
  this.$getOptions$().highlightedCategories = D.$DvtJSONUtils$$.$clone$($categories$$32$$);
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$32$$, D.$DvtBaseTreeUtils$$.$getAllNodes$(this.$_root$), "any" == this.$getOptions$().highlightMatch)
};
D.$DvtBaseTreeView$$.prototype.highlight = D.$DvtBaseTreeView$$.prototype.$highlight$;
D.$DvtBaseTreeView$$.prototype.select = function $$DvtBaseTreeView$$$$select$($selection$$41_targets$$8$$) {
  var $options$$308$$ = this.$getOptions$();
  $options$$308$$.selection = D.$DvtJSONUtils$$.$clone$($selection$$41_targets$$8$$);
  this.$_selectionHandler$ && ($selection$$41_targets$$8$$ = D.$DvtBaseTreeUtils$$.$getAllNodes$(this.$_root$), (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$_selectionHandler$, $options$$308$$.selection, $selection$$41_targets$$8$$))
};
D.$DvtBaseTreeView$$.prototype.select = D.$DvtBaseTreeView$$.prototype.select;
D.$DvtBaseTreeView$$.prototype.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$DvtBaseTreeView$$.prototype.$ApplyParsedProperties$ = function $$DvtBaseTreeView$$$$$ApplyParsedProperties$$($afComponent$$3_menus$$1_nodes$$21_props$$22$$) {
  var $options$$309_templates$$2$$ = this.$getOptions$();
  this.$_oldRoot$ = this.$_root$;
  this.$_oldAncestors$ = this.$_ancestors$;
  this.$_root$ = $afComponent$$3_menus$$1_nodes$$21_props$$22$$.root;
  this.$_ancestors$ = $options$$309_templates$$2$$._ancestors ? $options$$309_templates$$2$$._ancestors : [];
  this.$_nodeCount$ = this.$_root$ ? D.$DvtBaseTreeUtils$$.$calcNodeCount$(this.$_root$) : 0;
  this.$_maxDepth$ = this.$_root$ ? D.$DvtBaseTreeUtils$$.$calcMaxDepth$(this.$_root$, 0) : 0;
  this.$AnimationDuration$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)($options$$309_templates$$2$$.animationDuration) / 1E3;
  this.$_styles$ = $afComponent$$3_menus$$1_nodes$$21_props$$22$$.$styles$ ? $afComponent$$3_menus$$1_nodes$$21_props$$22$$.$styles$ : {};
  (this.$_nodeSelection$ = "none" == $options$$309_templates$$2$$.selectionMode ? D.$JSCompiler_alias_NULL$$ : "single" == $options$$309_templates$$2$$.selectionMode ? "s" : "m") ? (this.$_selectionHandler$ = new D.$DvtSelectionHandler$$(this.$_nodeSelection$), this.$_initialSelection$ = $options$$309_templates$$2$$.selection) : this.$_selectionHandler$ = D.$JSCompiler_alias_NULL$$;
  this.$_eventHandler$.$setSelectionHandler$(this.$_selectionHandler$);
  (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventHandler$, this.$CreateKeyboardHandler$(this.$_eventHandler$));
  this.$_legendSource$ = D.$JSCompiler_alias_NULL$$;
  this.$_attrGroups$ = [];
  if($options$$309_templates$$2$$.attributeGroups) {
    $afComponent$$3_menus$$1_nodes$$21_props$$22$$ = D.$DvtBaseTreeUtils$$.$getAllNodes$(this.$_root$);
    for(var $i$$910$$ = 0;$i$$910$$ < $options$$309_templates$$2$$.attributeGroups.length;$i$$910$$++) {
      var $attrGroup$$ = $options$$309_templates$$2$$.attributeGroups[$i$$910$$], $agObj$$ = D.$JSCompiler_alias_NULL$$;
      if("continuous" == $attrGroup$$.attributeType) {
        D.$DvtBaseTreeUtils$$.$calcContinuousAttrGroupsExtents$($attrGroup$$, $afComponent$$3_menus$$1_nodes$$21_props$$22$$), $agObj$$ = new D.$DvtContinuousAttrGroups$$($attrGroup$$.min, $attrGroup$$.max, $attrGroup$$.minLabel, $attrGroup$$.maxLabel, $attrGroup$$.colors)
      }else {
        for(var $agObj$$ = new D.$DvtDiscreteAttrGroups$$, $groupIndex$$74$$ = 0;$groupIndex$$74$$ < $attrGroup$$.groups.length;$groupIndex$$74$$++) {
          var $group$$38$$ = $attrGroup$$.groups[$groupIndex$$74$$];
          $agObj$$.add($group$$38$$.id, $group$$38$$.label, {color:$group$$38$$.color, pattern:$group$$38$$.pattern})
        }
      }
      this.$_attrGroups$.push({$attrGroups$:$agObj$$, $stampId$:$attrGroup$$.S, id:$attrGroup$$.id});
      !$options$$309_templates$$2$$._adf && !$options$$309_templates$$2$$._legendSource && 0 == $i$$910$$ ? this.$_legendSource$ = $agObj$$ : $options$$309_templates$$2$$._legendSource && $options$$309_templates$$2$$._legendSource == $attrGroup$$.id && (this.$_legendSource$ = $agObj$$)
    }
    D.$DvtBaseTreeUtils$$.$processContinuousAttrGroups$(this.$_attrGroups$, $afComponent$$3_menus$$1_nodes$$21_props$$22$$)
  }
  if(($afComponent$$3_menus$$1_nodes$$21_props$$22$$ = $options$$309_templates$$2$$._contextMenus) && 0 < $afComponent$$3_menus$$1_nodes$$21_props$$22$$.length) {
    this.$_eventHandler$.$ContextMenuHandler$ = new D.$DvtContextMenuHandler$$(this.$getCtx$(), $afComponent$$3_menus$$1_nodes$$21_props$$22$$)
  }
  if($options$$309_templates$$2$$ = $options$$309_templates$$2$$._templates) {
    this.$_templates$ = {};
    for(var $templateKey$$ in $options$$309_templates$$2$$) {
      $afComponent$$3_menus$$1_nodes$$21_props$$22$$ = D.$DvtAfComponentFactory$$.$parseJsonElement$($options$$309_templates$$2$$[$templateKey$$]), this.$_templates$[$templateKey$$] = $afComponent$$3_menus$$1_nodes$$21_props$$22$$
    }
  }
};
D.$DvtBaseTreeView$$.prototype.$ReselectNodes$ = function $$DvtBaseTreeView$$$$$ReselectNodes$$() {
  for(var $selectedNodes$$1$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $i$$911$$ = 0;$i$$911$$ < $selectedNodes$$1$$.length;$i$$911$$++) {
    $selectedNodes$$1$$[$i$$911$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
  }
};
D.$DvtBaseTreeView$$.prototype.$_processInitialSelections$ = function $$DvtBaseTreeView$$$$$_processInitialSelections$$() {
  if(this.$_selectionHandler$ && this.$_initialSelection$) {
    var $targets$$9$$ = D.$DvtBaseTreeUtils$$.$getAllNodes$(this.$_root$);
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$_selectionHandler$, this.$_initialSelection$, $targets$$9$$);
    this.$_initialSelection$ = D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods__processInitialHighlighting$$ = function $$JSCompiler_StaticMethods__processInitialHighlighting$$$($JSCompiler_StaticMethods__processInitialHighlighting$self$$) {
  var $highlightedCategories$$1$$ = $JSCompiler_StaticMethods__processInitialHighlighting$self$$.$getOptions$().highlightedCategories;
  $highlightedCategories$$1$$ && 0 < $highlightedCategories$$1$$.length && $JSCompiler_StaticMethods__processInitialHighlighting$self$$.$highlight$($highlightedCategories$$1$$)
};
D.$JSCompiler_StaticMethods__processInitialFocus$$ = function $$JSCompiler_StaticMethods__processInitialFocus$$$($JSCompiler_StaticMethods__processInitialFocus$self$$, $applyVisualEffects$$) {
  var $initialFocus$$ = D.$JSCompiler_alias_NULL$$, $id$$322$$ = $JSCompiler_StaticMethods__processInitialFocus$self$$.$_navigableIdToFocus$;
  $id$$322$$ && ($initialFocus$$ = (0,D.$DvtBaseTreeNode$getNodeById$$)($JSCompiler_StaticMethods__processInitialFocus$self$$.$_root$, $id$$322$$), $JSCompiler_StaticMethods__processInitialFocus$self$$.$_eventHandler$.$setFocus$($initialFocus$$));
  $applyVisualEffects$$ && ($JSCompiler_StaticMethods__processInitialFocus$self$$.$_navigableIdToFocus$ = D.$JSCompiler_alias_NULL$$);
  $initialFocus$$ || ($initialFocus$$ = $JSCompiler_StaticMethods__processInitialFocus$self$$.$GetInitialFocusedItem$($JSCompiler_StaticMethods__processInitialFocus$self$$.$_root$), $JSCompiler_StaticMethods__processInitialFocus$self$$.$_eventHandler$.$setFocus$($initialFocus$$));
  $applyVisualEffects$$ && $JSCompiler_StaticMethods__processInitialFocus$self$$.$setFocused$($JSCompiler_StaticMethods__processInitialFocus$self$$.$isFocused$())
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeView$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setFocused$ = function $$JSCompiler_prototypeAlias$$$$setFocused$$($isFocused$$6$$) {
  this.$_hasFocus$ = $isFocused$$6$$;
  this.$_eventHandler$.$setFocused$($isFocused$$6$$)
};
D.$JSCompiler_prototypeAlias$$.$isFocused$ = (0,D.$JSCompiler_get$$)("$_hasFocus$");
D.$JSCompiler_prototypeAlias$$.$__getNodeUnderPoint$ = function $$JSCompiler_prototypeAlias$$$$__getNodeUnderPoint$$($x$$306$$, $y$$275$$) {
  return this.$_root$.$getNodeUnderPoint$($x$$306$$, $y$$275$$)
};
D.$JSCompiler_prototypeAlias$$.$__isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$__isDragAvailable$$($clientIds$$27$$) {
  return this.$_selectionHandler$ ? $clientIds$$27$$[0] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$__getDragTransferable$$($node$$325_rowKeys$$4$$) {
  $node$$325_rowKeys$$4$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($node$$325_rowKeys$$4$$, D.$JSCompiler_alias_FALSE$$), this.$_eventHandler$.$fireSelectionEvent$());
  $node$$325_rowKeys$$4$$ = [];
  for(var $selection$$42$$ = this.$_selectionHandler$.getSelection(), $i$$912$$ = 0;$i$$912$$ < $selection$$42$$.length;$i$$912$$++) {
    $node$$325_rowKeys$$4$$.push($selection$$42$$[$i$$912$$].getId())
  }
  return $node$$325_rowKeys$$4$$
};
D.$JSCompiler_prototypeAlias$$.$__getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$__getDragFeedback$$() {
  for(var $displayables$$30$$ = [], $selection$$43$$ = this.$_selectionHandler$.getSelection(), $i$$913$$ = 0;$i$$913$$ < $selection$$43$$.length;$i$$913$$++) {
    $displayables$$30$$.push($selection$$43$$[$i$$913$$].$getDisplayable$())
  }
  return $displayables$$30$$
};
D.$JSCompiler_prototypeAlias$$.$__showDropSiteFeedback$ = function $$JSCompiler_prototypeAlias$$$$__showDropSiteFeedback$$($node$$326_styleDefaults$$4$$) {
  this.$_dropSiteFeedback$ && (this.removeChild(this.$_dropSiteFeedback$), this.$_dropSiteFeedback$ = D.$JSCompiler_alias_NULL$$);
  if($node$$326_styleDefaults$$4$$ && (this.$_dropSiteFeedback$ = $node$$326_styleDefaults$$4$$.$getDropSiteFeedback$())) {
    $node$$326_styleDefaults$$4$$ = this.$getOptions$().styleDefaults, this.$_dropSiteFeedback$.$setSolidFill$($node$$326_styleDefaults$$4$$._dropSiteFillColor, $node$$326_styleDefaults$$4$$._dropSiteOpacity), this.$_dropSiteFeedback$.$setSolidStroke$($node$$326_styleDefaults$$4$$._dropSiteBorderColor), this.$addChild$(this.$_dropSiteFeedback$)
  }
  return this.$_dropSiteFeedback$
};
D.$JSCompiler_prototypeAlias$$.$__processBreadcrumbsEvent$ = function $$JSCompiler_prototypeAlias$$$$__processBreadcrumbsEvent$$($event$$838$$) {
  $event$$838$$ instanceof D.$DvtBreadcrumbsDrillEvent$$ && (0,D.$JSCompiler_StaticMethods___drill$$)(this, $event$$838$$.getId(), D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods___drill$$ = function $$JSCompiler_StaticMethods___drill$$$($JSCompiler_StaticMethods___drill$self$$, $id$$323$$, $bDrillUp$$) {
  $bDrillUp$$ && $JSCompiler_StaticMethods___drill$self$$.$_root$ && $id$$323$$ == $JSCompiler_StaticMethods___drill$self$$.$_root$.getId() && 0 < $JSCompiler_StaticMethods___drill$self$$.$_ancestors$.length ? ($JSCompiler_StaticMethods___drill$self$$.$_navigableIdToFocus$ = $id$$323$$, $JSCompiler_StaticMethods___drill$self$$.$__dispatchEvent$(new D.$DvtDrillReplaceEvent$$($JSCompiler_StaticMethods___drill$self$$.$_ancestors$[0].id))) : $bDrillUp$$ || $JSCompiler_StaticMethods___drill$self$$.$__dispatchEvent$(new D.$DvtDrillReplaceEvent$$($id$$323$$));
  $JSCompiler_StaticMethods___drill$self$$.$getCtx$().$getTooltipManager$().$hideTooltip$()
};
D.$DvtBaseTreeView$$.prototype.$getLogicalObject$ = function $$DvtBaseTreeView$$$$$getLogicalObject$$($target$$131$$) {
  return(0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_eventHandler$, $target$$131$$)
};
D.$DvtBaseTreeView$$.prototype.$CreateNode$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$DvtBaseTreeView$$.prototype.$getBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$DvtBaseTreeView$$.prototype.$getAutomation$ = function $$DvtBaseTreeView$$$$$getAutomation$$() {
  return new D.$DvtTreeAutomation$$(this)
};
D.$DvtBaseTreeView$$.prototype.getAutomation = D.$DvtBaseTreeView$$.prototype.$getAutomation$;
D.$DvtBaseTreeView$$.prototype.$getBreadcrumbs$ = (0,D.$JSCompiler_get$$)("$_breadcrumbs$");
D.$JSCompiler_StaticMethods__processNode$$ = function $$JSCompiler_StaticMethods__processNode$$$($JSCompiler_StaticMethods__processNode$self$$, $hiddenCategories$$14$$, $childOptions_nodeOptions$$5$$) {
  if(D.$DvtBaseTreeUtils$$.$isHiddenNode$($hiddenCategories$$14$$, $childOptions_nodeOptions$$5$$)) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $node$$327$$ = $JSCompiler_StaticMethods__processNode$self$$.$CreateNode$($childOptions_nodeOptions$$5$$);
  if($node$$327$$.$isDisclosed$()) {
    var $childNodes$$27$$ = [];
    $childOptions_nodeOptions$$5$$ = $childOptions_nodeOptions$$5$$.nodes ? $childOptions_nodeOptions$$5$$.nodes : [];
    for(var $childIndex$$12$$ = 0;$childIndex$$12$$ < $childOptions_nodeOptions$$5$$.length;$childIndex$$12$$++) {
      var $childNode$$14_childNodeOptions$$ = $childOptions_nodeOptions$$5$$[$childIndex$$12$$];
      $childNode$$14_childNodeOptions$$._index = $childIndex$$12$$;
      ($childNode$$14_childNodeOptions$$ = (0,D.$JSCompiler_StaticMethods__processNode$$)($JSCompiler_StaticMethods__processNode$self$$, $hiddenCategories$$14$$, $childNode$$14_childNodeOptions$$)) && $childNodes$$27$$.push($childNode$$14_childNodeOptions$$)
    }
    (0,D.$JSCompiler_StaticMethods_setChildNodes$$)($node$$327$$, $childNodes$$27$$)
  }
  return $node$$327$$
};
D.$JSCompiler_StaticMethods_UpdateAriaNavigation$$ = function $$JSCompiler_StaticMethods_UpdateAriaNavigation$$$($JSCompiler_StaticMethods_UpdateAriaNavigation$self$$, $root$$34$$) {
  if((0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$DvtAgent$isEnvironmentTest$$)()) {
    for(var $nodes$$22$$ = D.$DvtBaseTreeUtils$$.$getAllVisibleNodes$($root$$34$$), $i$$915$$ = 0;$i$$915$$ < $nodes$$22$$.length - 1;$i$$915$$++) {
      var $id$$325$$ = $JSCompiler_StaticMethods_UpdateAriaNavigation$self$$.getId() + ($nodes$$22$$[$i$$915$$ + 1].getId() ? $nodes$$22$$[$i$$915$$ + 1].getId() : $nodes$$22$$[$i$$915$$ + 1].$getLabel$()), $id$$325$$ = $id$$325$$.replace(/\s+/g, "");
      $nodes$$22$$[$i$$915$$ + 1].$getDisplayable$().setId($id$$325$$, D.$JSCompiler_alias_TRUE$$);
      $nodes$$22$$[$i$$915$$].$getDisplayable$().$setAriaProperty$("flowto", $id$$325$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeView$$.prototype;
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($mouseX$$65$$, $mouseY$$65$$, $clientIds$$28$$) {
  return this.$_dragSource$.$isDragAvailable$($clientIds$$28$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$($mouseX$$66$$, $mouseY$$66$$) {
  return this.$_dragSource$.$getDragTransferable$($mouseX$$66$$, $mouseY$$66$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragOverFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragOverFeedback$$($mouseX$$67$$, $mouseY$$67$$) {
  return this.$_dragSource$.$getDragOverFeedback$($mouseX$$67$$, $mouseY$$67$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragContext$ = function $$JSCompiler_prototypeAlias$$$$getDragContext$$($mouseX$$68$$, $mouseY$$68$$) {
  return this.$_dragSource$.$getDragContext$($mouseX$$68$$, $mouseY$$68$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragOffset$ = function $$JSCompiler_prototypeAlias$$$$getDragOffset$$($mouseX$$69$$, $mouseY$$69$$) {
  return this.$_dragSource$.$getDragOffset$($mouseX$$69$$, $mouseY$$69$$)
};
D.$JSCompiler_prototypeAlias$$.$getPointerOffset$ = function $$JSCompiler_prototypeAlias$$$$getPointerOffset$$($xOffset$$8$$, $yOffset$$11$$) {
  return this.$_dragSource$.$getPointerOffset$($xOffset$$8$$, $yOffset$$11$$)
};
D.$JSCompiler_prototypeAlias$$.$initiateDrag$ = function $$JSCompiler_prototypeAlias$$$$initiateDrag$$() {
  this.$_dragSource$.$initiateDrag$()
};
D.$JSCompiler_prototypeAlias$$.$dragDropEnd$ = function $$JSCompiler_prototypeAlias$$$$dragDropEnd$$() {
  this.$_dragSource$.$dragDropEnd$()
};
D.$DvtBaseTreeView$$.prototype.$acceptDrag$ = function $$DvtBaseTreeView$$$$$acceptDrag$$($mouseX$$70$$, $mouseY$$70$$, $clientIds$$29$$) {
  return this.$_dropTarget$.$acceptDrag$($mouseX$$70$$, $mouseY$$70$$, $clientIds$$29$$)
};
D.$DvtBaseTreeView$$.prototype.$getDropSite$ = function $$DvtBaseTreeView$$$$$getDropSite$$($mouseX$$71$$, $mouseY$$71$$) {
  return this.$_dropTarget$.$getDropSite$($mouseX$$71$$, $mouseY$$71$$)
};
D.$DvtBaseTreeAnimationHandler$$ = function $$DvtBaseTreeAnimationHandler$$$($context$$661$$, $deleteContainer$$13$$) {
  this.Init($context$$661$$, $deleteContainer$$13$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeAnimationHandler$$, D.$DvtDataAnimationHandler$$, "DvtBaseTreeAnimationHandler");
D.$DvtBaseTreeAnimationHandler$_isAncestor$$ = function $$DvtBaseTreeAnimationHandler$_isAncestor$$$($ancestors$$7$$, $node$$310$$) {
  if(!$node$$310$$ || !$ancestors$$7$$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  for(var $i$$897$$ = 0;$i$$897$$ < $ancestors$$7$$.length;$i$$897$$++) {
    if($ancestors$$7$$[$i$$897$$].id == $node$$310$$.getId()) {
      return D.$JSCompiler_alias_TRUE$$
    }
  }
  return D.$JSCompiler_alias_FALSE$$
};
D.$DvtBaseTreeDropTarget$$ = (0,D.$JSCompiler_set$$)("$_view$");
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeDropTarget$$, D.$DvtDropTarget$$, "DvtBaseTreeDropTarget");
D.$DvtBaseTreeDropTarget$$.prototype.$acceptDrag$ = function $$DvtBaseTreeDropTarget$$$$$acceptDrag$$($mouseX$$61_node$$311$$, $mouseY$$61$$, $clientIds$$25$$) {
  if($mouseX$$61_node$$311$$ = this.$_view$.$__getNodeUnderPoint$($mouseX$$61_node$$311$$, $mouseY$$61$$)) {
    $mouseX$$61_node$$311$$ != this.$_dropSite$ && (this.$_view$.$__showDropSiteFeedback$($mouseX$$61_node$$311$$), this.$_dropSite$ = $mouseX$$61_node$$311$$)
  }else {
    return this.$_view$.$__showDropSiteFeedback$(D.$JSCompiler_alias_NULL$$), D.$JSCompiler_alias_NULL$$
  }
  return $clientIds$$25$$[0]
};
D.$DvtBaseTreeDropTarget$$.prototype.$getDropSite$ = function $$DvtBaseTreeDropTarget$$$$$getDropSite$$($mouseX$$62$$, $mouseY$$62$$) {
  var $node$$312$$ = this.$_view$.$__getNodeUnderPoint$($mouseX$$62$$, $mouseY$$62$$);
  return $node$$312$$ ? {$clientRowKey$:$node$$312$$.getId()} : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseTreeEventManager$$ = function $$DvtBaseTreeEventManager$$$($view$$66$$, $context$$662$$, $callback$$173$$, $callbackObj$$123$$) {
  this.Init($context$$662$$, $callback$$173$$, $callbackObj$$123$$);
  this.$_view$ = $view$$66$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeEventManager$$, D.$DvtEventManager$$, "DvtBaseTreeEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnDblClickInternal$$($event$$827$$) {
  var $obj$$373$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$827$$.target);
  $obj$$373$$ && $obj$$373$$.$isSelectable$ && $obj$$373$$.$isSelectable$() && (0,D.$JSCompiler_StaticMethods__processDrill$$)(this, $obj$$373$$, $event$$827$$.shiftKey)
};
D.$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$828$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnClick$.call(this, $event$$828$$);
  var $obj$$374$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$828$$.target);
  (0,D.$JSCompiler_StaticMethods__processNodeLabel$$)(this, $obj$$374$$);
  $obj$$374$$ && (!$obj$$374$$.$isSelectable$ || !$obj$$374$$.$isSelectable$()) && (0,D.$JSCompiler_StaticMethods__processDrill$$)(this, $obj$$374$$, $event$$828$$.shiftKey)
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$829_obj$$375$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$829_obj$$375$$);
  ($event$$829_obj$$375$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$829_obj$$375$$.target)) && $event$$829_obj$$375$$.$handleMouseOver$ && $event$$829_obj$$375$$.$handleMouseOver$()
};
D.$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$830_relatedId_relatedObj$$1$$) {
  D.$DvtBaseTreeEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$830_relatedId_relatedObj$$1$$);
  var $obj$$376$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$830_relatedId_relatedObj$$1$$.target);
  $obj$$376$$ && $obj$$376$$.$handleMouseOut$ && ($event$$830_relatedId_relatedObj$$1$$ = ($event$$830_relatedId_relatedObj$$1$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$830_relatedId_relatedObj$$1$$.relatedTarget)) && $event$$830_relatedId_relatedObj$$1$$.getId ? $event$$830_relatedId_relatedObj$$1$$.getId() : D.$JSCompiler_alias_NULL$$, ($obj$$376$$.getId() == D.$JSCompiler_alias_NULL$$ || $event$$830_relatedId_relatedObj$$1$$ != $obj$$376$$.getId()) && $obj$$376$$.$handleMouseOut$())
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$831$$) {
  var $eventConsumed$$8_obj$$377$$ = D.$JSCompiler_alias_FALSE$$, $eventConsumed$$8_obj$$377$$ = this.$getFocus$();
  13 == $event$$831$$.keyCode && !$event$$831$$.ctrlKey ? ($eventConsumed$$8_obj$$377$$ = this.$getFocus$(), $eventConsumed$$8_obj$$377$$.$isDrillReplaceEnabled$ && $eventConsumed$$8_obj$$377$$.$isDrillReplaceEnabled$() && ($event$$831$$.shiftKey && ($eventConsumed$$8_obj$$377$$ = this.$_view$.$_root$), (0,D.$JSCompiler_StaticMethods___drill$$)(this.$_view$, $eventConsumed$$8_obj$$377$$.getId(), $event$$831$$.shiftKey)), (0,D.$DvtEventManager$consumeEvent$$)($event$$831$$), $eventConsumed$$8_obj$$377$$ = 
  D.$JSCompiler_alias_TRUE$$) : $eventConsumed$$8_obj$$377$$ = D.$DvtBaseTreeEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$831$$);
  return $eventConsumed$$8_obj$$377$$
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($event$$832$$) {
  var $obj$$378$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$832$$.target);
  (0,D.$JSCompiler_StaticMethods__processNodeLabel$$)(this, $obj$$378$$);
  this.$_currentHoverItem$ && this.$_currentHoverItem$ != $obj$$378$$ && (this.$_currentHoverItem$.$handleMouseOut$(), this.$_currentHoverItem$ = D.$JSCompiler_alias_NULL$$);
  $obj$$378$$ && ($obj$$378$$ instanceof D.$DvtBaseTreeNode$$ && this.$_currentHoverItem$ != $obj$$378$$ && (this.$_currentHoverItem$ = $obj$$378$$, $obj$$378$$.$handleMouseOver$()), (!$obj$$378$$.$isSelectable$ || !$obj$$378$$.$isSelectable$()) && (0,D.$JSCompiler_StaticMethods__processDrill$$)(this, $obj$$378$$, $event$$832$$.shiftKey))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchDblClickInternal$$($event$$833_obj$$379$$) {
  ($event$$833_obj$$379$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$833_obj$$379$$.target)) && $event$$833_obj$$379$$.$isSelectable$ && $event$$833_obj$$379$$.$isSelectable$() && (0,D.$JSCompiler_StaticMethods__processDrill$$)(this, $event$$833_obj$$379$$, D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods__processNodeLabel$$ = function $$JSCompiler_StaticMethods__processNodeLabel$$$($JSCompiler_StaticMethods__processNodeLabel$self$$, $obj$$380$$) {
  $obj$$380$$ && ($obj$$380$$ instanceof D.$DvtBaseTreePeer$$ && $obj$$380$$.$isDrillable$()) && (0,D.$JSCompiler_StaticMethods___drill$$)($JSCompiler_StaticMethods__processNodeLabel$self$$.$_view$, $obj$$380$$.getId(), D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_StaticMethods__processDrill$$ = function $$JSCompiler_StaticMethods__processDrill$$$($JSCompiler_StaticMethods__processDrill$self$$, $obj$$381$$, $shiftKey$$9$$) {
  $obj$$381$$.$isDrillReplaceEnabled$ && $obj$$381$$.$isDrillReplaceEnabled$() && (0,D.$JSCompiler_StaticMethods___drill$$)($JSCompiler_StaticMethods__processDrill$self$$.$_view$, $obj$$381$$.getId(), $shiftKey$$9$$)
};
D.$DvtBaseTreeEventManager$$.prototype.$ProcessRolloverEvent$ = function $$DvtBaseTreeEventManager$$$$$ProcessRolloverEvent$$($event$$834_options$$304$$, $categories$$30_nodes$$17_obj$$382$$, $bOver$$14_rolloverEvent$$9$$) {
  $event$$834_options$$304$$ = this.$_view$.$getOptions$();
  if("dim" == $event$$834_options$$304$$.hoverBehavior) {
    $categories$$30_nodes$$17_obj$$382$$ = $categories$$30_nodes$$17_obj$$382$$.$getCategories$ ? $categories$$30_nodes$$17_obj$$382$$.$getCategories$() : [];
    $event$$834_options$$304$$.highlightedCategories = $bOver$$14_rolloverEvent$$9$$ ? $categories$$30_nodes$$17_obj$$382$$.slice() : D.$JSCompiler_alias_NULL$$;
    $bOver$$14_rolloverEvent$$9$$ = new D.$DvtCategoryRolloverEvent$$($bOver$$14_rolloverEvent$$9$$ ? "categoryRollOver" : "categoryRollOut", $event$$834_options$$304$$.highlightedCategories);
    $categories$$30_nodes$$17_obj$$382$$ = D.$DvtBaseTreeUtils$$.$getAllNodes$(this.$_view$.$_root$);
    var $hoverBehaviorDelay$$7$$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)($event$$834_options$$304$$.hoverBehaviorDelay);
    this.$RolloverHandler$.$processEvent$($bOver$$14_rolloverEvent$$9$$, $categories$$30_nodes$$17_obj$$382$$, $hoverBehaviorDelay$$7$$, "any" == $event$$834_options$$304$$.highlightMatch)
  }
};
D.$DvtBaseTreeEventManager$$.prototype.$GetTouchResponse$ = function $$DvtBaseTreeEventManager$$$$$GetTouchResponse$$() {
  return this.$_view$.$getOptions$().touchResponse
};
D.$DvtBaseTreeNode$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeNode$$, D.$DvtObj$$, "DvtBaseTreeNode");
D.$DvtBaseTreeNode$__NODE_SELECTED_SHADOW$$ = new D.$DvtShadow$$("#000000", 2, 5, 5, 45, 0.5);
D.$DvtBaseTreeNode$$.prototype.Init = function $$DvtBaseTreeNode$$$$Init$($treeView$$, $props$$21$$) {
  this.$_view$ = $treeView$$;
  this.$_options$ = $props$$21$$;
  var $nodeDefaults$$2$$ = this.$_view$.$getOptions$().nodeDefaults;
  this.$_id$ = $props$$21$$.id || $props$$21$$.label;
  this.$_color$ = $props$$21$$.color ? $props$$21$$.color : "#000000";
  this.$_textStr$ = $props$$21$$.label;
  this.$_labelStyle$ = "string" == typeof $props$$21$$.labelStyle ? new D.$DvtCSSStyle$$($props$$21$$.labelStyle) : $props$$21$$.labelStyle;
  this.$_pattern$ = $props$$21$$.pattern;
  this.$_selectable$ = $props$$21$$.selectable;
  this.$_shortDesc$ = $props$$21$$.shortDesc ? $props$$21$$.shortDesc : $props$$21$$.tooltip;
  this.$_size$ = $props$$21$$.value;
  this.$_drilling$ = $props$$21$$.drilling ? $props$$21$$.drilling : $nodeDefaults$$2$$.drilling;
  this.$_stampId$ = $props$$21$$.S;
  this.$_bArtificialRoot$ = $props$$21$$.$bArtificialRoot$;
  this.$_alpha$ = 1;
  this.$_lastVisitedChild$ = D.$JSCompiler_alias_NULL$$;
  this.$IsHover$ = this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_StaticMethods_setChildNodes$$ = function $$JSCompiler_StaticMethods_setChildNodes$$$($JSCompiler_StaticMethods_setChildNodes$self$$, $children$$17$$) {
  if($children$$17$$ != D.$JSCompiler_alias_NULL$$) {
    for(var $i$$898$$ = 0;$i$$898$$ < $children$$17$$.length;$i$$898$$++) {
      $children$$17$$[$i$$898$$].$_parent$ = $JSCompiler_StaticMethods_setChildNodes$self$$
    }
  }
  $JSCompiler_StaticMethods_setChildNodes$self$$.$_children$ = $children$$17$$
};
D.$DvtBaseTreeNode$$.prototype.$getChildNodes$ = function $$DvtBaseTreeNode$$$$$getChildNodes$$() {
  return this.$_children$ ? this.$_children$ : []
};
D.$JSCompiler_StaticMethods_getDescendantNodes$$ = function $$JSCompiler_StaticMethods_getDescendantNodes$$$($JSCompiler_StaticMethods_getDescendantNodes$self$$) {
  var $descendants$$3$$ = [], $childDescendants$$, $child$$78$$;
  if(!$JSCompiler_StaticMethods_getDescendantNodes$self$$.$hasChildren$()) {
    return $descendants$$3$$
  }
  for(var $i$$899$$ = 0;$i$$899$$ < $JSCompiler_StaticMethods_getDescendantNodes$self$$.$_children$.length;$i$$899$$++) {
    $child$$78$$ = $JSCompiler_StaticMethods_getDescendantNodes$self$$.$_children$[$i$$899$$], $childDescendants$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($child$$78$$), $descendants$$3$$.push($child$$78$$), $descendants$$3$$ = $descendants$$3$$.concat($childDescendants$$)
  }
  return $descendants$$3$$
};
D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$ = function $$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$$($JSCompiler_StaticMethods_MarkAsLastVisitedChild$self$$) {
  var $parent$$90$$ = $JSCompiler_StaticMethods_MarkAsLastVisitedChild$self$$.$_parent$;
  $parent$$90$$ && ($parent$$90$$.$_lastVisitedChild$ = $JSCompiler_StaticMethods_MarkAsLastVisitedChild$self$$)
};
D.$DvtBaseTreeNode$$.prototype.$isDescendantOf$ = function $$DvtBaseTreeNode$$$$$isDescendantOf$$($node$$313$$) {
  return!$node$$313$$ || !this.$_parent$ ? D.$JSCompiler_alias_FALSE$$ : this.$_parent$ == $node$$313$$ ? D.$JSCompiler_alias_TRUE$$ : this.$_parent$.$isDescendantOf$($node$$313$$)
};
D.$JSCompiler_StaticMethods_GetNodesAtDepth$$ = function $$JSCompiler_StaticMethods_GetNodesAtDepth$$$($JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$18$$, $child$$79_root$$30$$, $depth$$24$$) {
  var $returnArray$$ = [];
  if(0 > $depth$$24$$) {
    return $returnArray$$
  }
  if(0 == $depth$$24$$) {
    return[$JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$18$$]
  }
  if($child$$79_root$$30$$.$hasChildren$()) {
    $JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$18$$ = $child$$79_root$$30$$.$getChildNodes$();
    for(var $i$$900$$ = 0;$i$$900$$ < $JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$18$$.length;$i$$900$$++) {
      $child$$79_root$$30$$ = $JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$18$$[$i$$900$$], $returnArray$$ = $returnArray$$.concat((0,D.$JSCompiler_StaticMethods_GetNodesAtDepth$$)($child$$79_root$$30$$, $child$$79_root$$30$$, $depth$$24$$ - 1))
    }
  }
  return $returnArray$$
};
D.$DvtBaseTreeNode$getNodeById$$ = function $$DvtBaseTreeNode$getNodeById$$$($root$$31$$, $id$$320$$) {
  if($root$$31$$.getId() == $id$$320$$) {
    return $root$$31$$
  }
  for(var $child$$80_node$$314$$ = D.$JSCompiler_alias_NULL$$, $children$$19$$ = $root$$31$$.$getChildNodes$(), $length$$28$$ = $children$$19$$.length, $child$$80_node$$314$$ = D.$JSCompiler_alias_NULL$$, $i$$901$$ = 0;$i$$901$$ < $length$$28$$;$i$$901$$++) {
    if($child$$80_node$$314$$ = $children$$19$$[$i$$901$$], $child$$80_node$$314$$ = (0,D.$DvtBaseTreeNode$getNodeById$$)($child$$80_node$$314$$, $id$$320$$)) {
      return $child$$80_node$$314$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreeNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getOptions$ = (0,D.$JSCompiler_get$$)("$_options$");
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  if(this.$_bArtificialRoot$) {
    return[]
  }
  var $categories$$31_parent$$91_parentCategories$$1$$ = this.$getOptions$().categories;
  $categories$$31_parent$$91_parentCategories$$1$$ || ($categories$$31_parent$$91_parentCategories$$1$$ = ($categories$$31_parent$$91_parentCategories$$1$$ = ($categories$$31_parent$$91_parentCategories$$1$$ = this.$_parent$) ? $categories$$31_parent$$91_parentCategories$$1$$.$getCategories$() : D.$JSCompiler_alias_NULL$$) ? $categories$$31_parent$$91_parentCategories$$1$$.slice() : [], $categories$$31_parent$$91_parentCategories$$1$$.push(this.getId()));
  return $categories$$31_parent$$91_parentCategories$$1$$
};
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$getSize$ = (0,D.$JSCompiler_get$$)("$_size$");
D.$JSCompiler_prototypeAlias$$.$getColor$ = (0,D.$JSCompiler_get$$)("$_color$");
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  var $tooltipFunc$$11$$ = this.$_view$.$getOptions$().tooltip;
  return $tooltipFunc$$11$$ ? (0,D.$JSCompiler_StaticMethods_getCustomTooltip$$)(this.$_view$.$getCtx$().$getTooltipManager$(), $tooltipFunc$$11$$, this.$getDataContext$()) : this.$_shortDesc$
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = (0,D.$JSCompiler_get$$)("$_color$");
D.$JSCompiler_prototypeAlias$$.$getShortDesc$ = (0,D.$JSCompiler_get$$)("$_shortDesc$");
D.$JSCompiler_prototypeAlias$$.$getDataContext$ = function $$JSCompiler_prototypeAlias$$$$getDataContext$$() {
  return{id:this.getId(), label:this.$getLabel$(), value:this.$getSize$(), color:this.$getColor$()}
};
D.$JSCompiler_prototypeAlias$$.$getIndex$ = function $$JSCompiler_prototypeAlias$$$$getIndex$$() {
  return this.$getOptions$()._index
};
D.$JSCompiler_prototypeAlias$$.$getAlpha$ = (0,D.$JSCompiler_get$$)("$_alpha$");
D.$JSCompiler_prototypeAlias$$.$setAlpha$ = function $$JSCompiler_prototypeAlias$$$$setAlpha$$($alpha$$51$$) {
  this.$_alpha$ = $alpha$$51$$;
  this.$_shape$ && this.$_shape$.$setAlpha$(this.$_alpha$)
};
D.$JSCompiler_prototypeAlias$$.$setDisclosed$ = function $$JSCompiler_prototypeAlias$$$$setDisclosed$$($disclosed$$6$$) {
  this.$getOptions$()._expanded = $disclosed$$6$$
};
D.$JSCompiler_prototypeAlias$$.$isDisclosed$ = function $$JSCompiler_prototypeAlias$$$$isDisclosed$$() {
  return this.$getOptions$()._expanded !== D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$isDrillReplaceEnabled$ = function $$JSCompiler_prototypeAlias$$$$isDrillReplaceEnabled$$() {
  return"replace" == this.$_drilling$ || "insertAndReplace" == this.$_drilling$
};
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$() {
  var $JSCompiler_temp$$456_behaviors$$10_optionsArray$$inline_9090$$ = this.$_view$.$getOptions$()._spb;
  if(!$JSCompiler_temp$$456_behaviors$$10_optionsArray$$inline_9090$$ || !$JSCompiler_temp$$456_behaviors$$10_optionsArray$$inline_9090$$[this.$_stampId$]) {
    $JSCompiler_temp$$456_behaviors$$10_optionsArray$$inline_9090$$ = D.$JSCompiler_alias_NULL$$
  }else {
    for(var $JSCompiler_temp$$456_behaviors$$10_optionsArray$$inline_9090$$ = $JSCompiler_temp$$456_behaviors$$10_optionsArray$$inline_9090$$[this.$_stampId$], $ret$$inline_9091$$ = [], $i$$inline_9092$$ = 0;$i$$inline_9092$$ < $JSCompiler_temp$$456_behaviors$$10_optionsArray$$inline_9090$$.length;$i$$inline_9092$$++) {
      $ret$$inline_9091$$.push(new D.$DvtShowPopupBehavior$$($JSCompiler_temp$$456_behaviors$$10_optionsArray$$inline_9090$$[$i$$inline_9092$$].popupId, $JSCompiler_temp$$456_behaviors$$10_optionsArray$$inline_9090$$[$i$$inline_9092$$].triggerType, $JSCompiler_temp$$456_behaviors$$10_optionsArray$$inline_9090$$[$i$$inline_9092$$].alignId, $JSCompiler_temp$$456_behaviors$$10_optionsArray$$inline_9090$$[$i$$inline_9092$$].align))
    }
    $JSCompiler_temp$$456_behaviors$$10_optionsArray$$inline_9090$$ = $ret$$inline_9091$$
  }
  return $JSCompiler_temp$$456_behaviors$$10_optionsArray$$inline_9090$$
};
D.$JSCompiler_prototypeAlias$$.$render$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$renderChildren$ = function $$JSCompiler_prototypeAlias$$$$renderChildren$$($container$$211$$) {
  var $children$$20$$ = this.$getChildNodes$();
  if($children$$20$$ != D.$JSCompiler_alias_NULL$$) {
    for(var $i$$902$$ = 0;$i$$902$$ < $children$$20$$.length;$i$$902$$++) {
      $children$$20$$[$i$$902$$].$render$($container$$211$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$() {
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)(this);
  return this
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return new D.$DvtRectangle$$(0, 0, 0, 0)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$();
  this.$handleMouseOver$ && this.$handleMouseOver$()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ && (this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$, this.$hideHoverEffect$());
  this.$handleMouseOut$ && this.$handleMouseOut$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$handleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOver$$() {
  this.$IsHover$ = D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$handleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOut$$() {
  this.$IsHover$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return"off" != this.$_selectable$ && this.$_view$.$_nodeSelection$ != D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_selected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$47$$) {
  this.$_selected$ = $selected$$47$$;
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$highlight$ = function $$JSCompiler_prototypeAlias$$$$highlight$$($bDimmed$$3$$, $alpha$$52$$) {
  this.$setAlpha$($alpha$$52$$)
};
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$26$$) {
  return this.$_view$.$__isDragAvailable$($clientIds$$26$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  return this.$_view$.$__getDragTransferable$(this)
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_view$.$__getDragFeedback$()
};
D.$JSCompiler_prototypeAlias$$.$getDropSiteFeedback$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getPopupBounds$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.contains = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_prototypeAlias$$.$getNodeUnderPoint$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  return[]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$66$$, $oldNode$$19$$) {
  $handler$$66$$.$_bDrill$ || (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($handler$$66$$, $oldNode$$19$$.$getChildNodes$(), this.$getChildNodes$());
  var $bSizeChanged_endState$$18$$ = this.$GetAnimationParams$(), $animationUpdateColor_startState$$8$$ = $oldNode$$19$$.$GetAnimationParams$($bSizeChanged_endState$$18$$), $bColorChanged_nodePlayable$$29$$;
  if(!D.$DvtArrayUtils$$.$equals$($animationUpdateColor_startState$$8$$, $bSizeChanged_endState$$18$$) && ($bColorChanged_nodePlayable$$29$$ = new D.$DvtCustomAnimation$$(this.$_view$.$getCtx$(), this, this.$_view$.$AnimationDuration$), (0,D.$JSCompiler_StaticMethods_addProp$$)($bColorChanged_nodePlayable$$29$$.$_animator$, "typeNumberArray", this, this.$GetAnimationParams$, this.$SetAnimationParams$, $bSizeChanged_endState$$18$$), $handler$$66$$.add($bColorChanged_nodePlayable$$29$$, 1), $bSizeChanged_endState$$18$$ = 
  this.$_size$ != $oldNode$$19$$.$_size$, $bColorChanged_nodePlayable$$29$$ = D.$DvtColorUtils$$.$getRGBA$(this.$_color$) != D.$DvtColorUtils$$.$getRGBA$($oldNode$$19$$.$_color$), this.$SetAnimationParams$($animationUpdateColor_startState$$8$$), ($animationUpdateColor_startState$$8$$ = this.$_view$.$getOptions$().animationUpdateColor) && ($bSizeChanged_endState$$18$$ || $bColorChanged_nodePlayable$$29$$))) {
    this.$_color$ = $animationUpdateColor_startState$$8$$
  }
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$67$$) {
  if(!$handler$$67$$.$_bDrill$ || !$handler$$67$$.$_bDrill$ || !($handler$$67$$.$_oldRoot$.getId() == this.getId() || (0,D.$DvtBaseTreeAnimationHandler$_isAncestor$$)($handler$$67$$.$_oldAncestors$, this))) {
    this.$setAlpha$(0);
    var $anim$$44_i$$903$$ = new D.$DvtAnimFadeIn$$(this.$_view$.$getCtx$(), this, this.$_view$.$AnimationDuration$);
    $handler$$67$$.add($anim$$44_i$$903$$, 2);
    if(this.$hasChildren$()) {
      for($anim$$44_i$$903$$ = 0;$anim$$44_i$$903$$ < this.$_children$.length;$anim$$44_i$$903$$++) {
        this.$_children$[$anim$$44_i$$903$$].$animateInsert$($handler$$67$$)
      }
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$68$$, $container$$212$$) {
  $container$$212$$.$addChild$(this.$_shape$);
  var $anim$$45_i$$904$$ = new D.$DvtAnimFadeOut$$(this.$_view$.$getCtx$(), this, this.$_view$.$AnimationDuration$);
  $handler$$68$$.add($anim$$45_i$$904$$, 0);
  if(!$handler$$68$$.$_bDrill$ && this.$hasChildren$()) {
    for($anim$$45_i$$904$$ = 0;$anim$$45_i$$904$$ < this.$_children$.length;$anim$$45_i$$904$$++) {
      this.$_children$[$anim$$45_i$$904$$].$animateDelete$($handler$$68$$, $container$$212$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$hasChildren$ = function $$JSCompiler_prototypeAlias$$$$hasChildren$$() {
  return this.$_children$ != D.$JSCompiler_alias_NULL$$ && 0 < this.$_children$.length
};
D.$JSCompiler_StaticMethods_GetDepth$$ = function $$JSCompiler_StaticMethods_GetDepth$$$($JSCompiler_StaticMethods_GetDepth$self_parent$$92$$) {
  var $depth$$25$$ = 0;
  for($JSCompiler_StaticMethods_GetDepth$self_parent$$92$$ = $JSCompiler_StaticMethods_GetDepth$self_parent$$92$$.$_parent$;$JSCompiler_StaticMethods_GetDepth$self_parent$$92$$;) {
    $depth$$25$$++, $JSCompiler_StaticMethods_GetDepth$self_parent$$92$$ = $JSCompiler_StaticMethods_GetDepth$self_parent$$92$$.$_parent$
  }
  return $depth$$25$$
};
D.$DvtBaseTreeNode$$.prototype.$GetFill$ = function $$DvtBaseTreeNode$$$$$GetFill$$() {
  return this.$_pattern$ ? new D.$DvtPatternFill$$(this.$_pattern$, this.$_color$) : new D.$DvtSolidFill$$(this.$_color$)
};
D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$ = function $$JSCompiler_StaticMethods_ApplyLabelTextStyle$$$($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$, $text$$116$$) {
  var $defaultFillColor$$ = $JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_pattern$ ? "#000000" : D.$DvtColorUtils$$.$getContrastingTextColor$($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_color$);
  $text$$116$$.$setSolidFill$($defaultFillColor$$);
  var $textStyle$$8$$ = [];
  $textStyle$$8$$.push($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_view$.$getOptions$().nodeDefaults.labelStyle);
  $JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_labelStyle$ && $textStyle$$8$$.push($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_labelStyle$);
  $text$$116$$.$setCSSStyle$((0,D.$DvtCSSStyle$mergeStyles$$)($textStyle$$8$$));
  D.$DvtAgent$_highContrast$$ === D.$JSCompiler_alias_TRUE$$ && $text$$116$$.$setSolidFill$($defaultFillColor$$)
};
D.$JSCompiler_StaticMethods_GetTextSize$$ = function $$JSCompiler_StaticMethods_GetTextSize$$$($JSCompiler_StaticMethods_GetTextSize$self_fontSize$$16$$) {
  var $size$$52$$ = 11;
  ($JSCompiler_StaticMethods_GetTextSize$self_fontSize$$16$$ = $JSCompiler_StaticMethods_GetTextSize$self_fontSize$$16$$.$_view$.$getOptions$().nodeDefaults.labelStyle.$getFontSize$()) && ($size$$52$$ = (0,window.parseFloat)($JSCompiler_StaticMethods_GetTextSize$self_fontSize$$16$$));
  return $size$$52$$
};
D.$DvtBaseTreeNode$$.prototype.$getDisplayable$ = (0,D.$JSCompiler_get$$)("$_shape$");
D.$DvtBaseTreeNode$$.prototype.$getLabel$ = (0,D.$JSCompiler_get$$)("$_textStr$");
D.$JSCompiler_StaticMethods_GetTemplate$$ = function $$JSCompiler_StaticMethods_GetTemplate$$$($JSCompiler_StaticMethods_GetTemplate$self$$) {
  return $JSCompiler_StaticMethods_GetTemplate$self$$.$_view$.$_templates$ ? $JSCompiler_StaticMethods_GetTemplate$self$$.$_view$.$_templates$[$JSCompiler_StaticMethods_GetTemplate$self$$.$_stampId$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtBaseTreeNode$$.prototype.$isDoubleClickable$ = function $$DvtBaseTreeNode$$$$$isDoubleClickable$$() {
  return this.$isDrillReplaceEnabled$()
};
D.$DvtBaseTreeNode$$.prototype.$UpdateAriaLabel$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtBaseTreePeer$$ = function $$DvtBaseTreePeer$$$($node$$316$$, $id$$321$$, $tooltip$$51$$, $datatip$$20$$, $datatipColor$$3$$) {
  this.Init($tooltip$$51$$, $datatip$$20$$, $datatipColor$$3$$);
  this.$_node$ = $node$$316$$;
  this.$_id$ = $id$$321$$;
  this.$_bDrillable$ = D.$JSCompiler_alias_FALSE$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreePeer$$, D.$DvtSimpleObjPeer$$, "DvtBaseTreePeer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseTreePeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$JSCompiler_prototypeAlias$$.$isDrillable$ = (0,D.$JSCompiler_get$$)("$_bDrillable$");
D.$JSCompiler_prototypeAlias$$.$setDrillable$ = (0,D.$JSCompiler_set$$)("$_bDrillable$");
D.$JSCompiler_prototypeAlias$$.$handleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOver$$() {
  this.$_node$ && this.$_node$.$handleMouseOver$ && this.$_node$.$handleMouseOver$()
};
D.$JSCompiler_prototypeAlias$$.$handleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOut$$() {
  this.$_node$ && this.$_node$.$handleMouseOut$ && this.$_node$.$handleMouseOut$()
};
D.$DvtTreeBreadcrumbsRenderer$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTreeBreadcrumbsRenderer$$, D.$DvtObj$$, "DvtTreeBreadcrumbsRenderer");
D.$DvtTreeBreadcrumbsRenderer$$.$_COMPONENT_GAP$ = 6;
D.$DvtTreeBreadcrumbsRenderer$$.$_ENABLED_INLINE_STYLE$ = "color: #003286;";
D.$DvtTreeBreadcrumbsRenderer$$.$render$ = function $$DvtTreeBreadcrumbsRenderer$$$$render$$($treeView$$2$$, $availSpace$$132$$, $ancestors$$8_dataItems$$3$$, $dims$$72_height$$165_rootLabel$$1$$) {
  var $breadcrumbs$$5_context$$665$$ = $treeView$$2$$.$getCtx$(), $disabledStyle_styleDefaults$$5$$ = $treeView$$2$$.$getOptions$().styleDefaults, $enabledStyle$$1_enabledStyleArray$$ = [];
  $enabledStyle$$1_enabledStyleArray$$.push(new D.$DvtCSSStyle$$(D.$DvtTreeBreadcrumbsRenderer$$.$_ENABLED_INLINE_STYLE$));
  $enabledStyle$$1_enabledStyleArray$$.push($disabledStyle_styleDefaults$$5$$._drillTextStyle);
  var $enabledStyle$$1_enabledStyleArray$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($enabledStyle$$1_enabledStyleArray$$).toString(), $enabledStyleOver$$ = $enabledStyle$$1_enabledStyleArray$$ + "text-decoration: underline;", $disabledStyleArray$$ = [];
  $disabledStyleArray$$.push($disabledStyle_styleDefaults$$5$$._currentTextStyle);
  $disabledStyle_styleDefaults$$5$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($disabledStyleArray$$).toString();
  $breadcrumbs$$5_context$$665$$ = new D.$DvtBreadcrumbs$$($breadcrumbs$$5_context$$665$$, $treeView$$2$$.$__processBreadcrumbsEvent$, $treeView$$2$$, {$labelStyle$:$enabledStyle$$1_enabledStyleArray$$, $labelStyleOver$:$enabledStyleOver$$, $labelStyleDown$:$enabledStyleOver$$, $disabledLabelStyle$:$disabledStyle_styleDefaults$$5$$});
  $treeView$$2$$.$addChild$($breadcrumbs$$5_context$$665$$);
  $ancestors$$8_dataItems$$3$$ = $ancestors$$8_dataItems$$3$$.slice(0).reverse();
  $ancestors$$8_dataItems$$3$$.push({label:$dims$$72_height$$165_rootLabel$$1$$});
  $breadcrumbs$$5_context$$665$$.$render$({items:$ancestors$$8_dataItems$$3$$}, $availSpace$$132$$.$w$);
  $dims$$72_height$$165_rootLabel$$1$$ = $breadcrumbs$$5_context$$665$$.$getDimensions$();
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($breadcrumbs$$5_context$$665$$, $availSpace$$132$$.x, $availSpace$$132$$.y);
  $dims$$72_height$$165_rootLabel$$1$$ = $dims$$72_height$$165_rootLabel$$1$$.$h$ + D.$DvtTreeBreadcrumbsRenderer$$.$_COMPONENT_GAP$;
  $availSpace$$132$$.y += $dims$$72_height$$165_rootLabel$$1$$;
  $availSpace$$132$$.$h$ -= $dims$$72_height$$165_rootLabel$$1$$;
  $treeView$$2$$.removeChild($breadcrumbs$$5_context$$665$$);
  return $breadcrumbs$$5_context$$665$$
};
D.$DvtTreeLegendRenderer$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTreeLegendRenderer$$, D.$DvtObj$$, "DvtTreeLegendRenderer");
D.$DvtTreeLegendRenderer$$.$_LEGEND_GAP$ = 4;
D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$ = 7;
D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$ = 24;
D.$DvtTreeLegendRenderer$$.$_LABEL_SIZE$ = 11;
D.$DvtTreeLegendRenderer$$.$_LABEL_COLOR$ = "#636363";
D.$DvtTreeLegendRenderer$$.$_LABEL_INLINE_STYLE$ = "color:" + D.$DvtTreeLegendRenderer$$.$_LABEL_COLOR$ + ";";
D.$DvtTreeLegendRenderer$$.$render$ = function $$DvtTreeLegendRenderer$$$$render$$($treeView$$3$$, $availSpace$$133$$, $attrGroups$$7_legendDims$$) {
  var $colorContainer$$2_options$$312$$ = $treeView$$3$$.$getOptions$(), $colorSpace_sizeValueStr$$ = $colorContainer$$2_options$$312$$.sizeLabel, $colorValueStr$$ = $colorContainer$$2_options$$312$$.colorLabel;
  if(!($colorSpace_sizeValueStr$$ == D.$JSCompiler_alias_NULL$$ && $colorValueStr$$ == D.$JSCompiler_alias_NULL$$ && $attrGroups$$7_legendDims$$ == D.$JSCompiler_alias_NULL$$)) {
    var $context$$666$$ = $treeView$$3$$.$getCtx$(), $eventManager$$48_labelSpace$$2$$ = $treeView$$3$$.$__getEventManager$(), $legend$$32$$ = new D.$DvtContainer$$($context$$666$$);
    $treeView$$3$$.$addChild$($legend$$32$$);
    var $labelContainer$$ = D.$DvtTreeLegendRenderer$$.$_renderLabels$($context$$666$$, $treeView$$3$$, $legend$$32$$, $availSpace$$133$$.$w$, $colorSpace_sizeValueStr$$, $colorValueStr$$, $attrGroups$$7_legendDims$$), $borderColor$$64_legendStyles$$ = (0,D.$DvtCSSStyle$afterSkinAlta$$)($treeView$$3$$.$getOptions$().skin) ? D.$JSCompiler_alias_NULL$$ : "#000000", $labelDims$$13_legendStyleArray$$ = [];
    $labelDims$$13_legendStyleArray$$.push($colorContainer$$2_options$$312$$.styleDefaults._labelStyle);
    var $borderColor$$64_legendStyles$$ = {borderColor:$borderColor$$64_legendStyles$$, $labelStyle$:(0,D.$DvtCSSStyle$mergeStyles$$)($labelDims$$13_legendStyleArray$$)}, $colorContainer$$2_options$$312$$ = D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$($context$$666$$, $eventManager$$48_labelSpace$$2$$, $legend$$32$$, $availSpace$$133$$.$w$, $availSpace$$133$$.$h$, $attrGroups$$7_legendDims$$, $borderColor$$64_legendStyles$$), $labelDims$$13_legendStyleArray$$ = $labelContainer$$ ? $labelContainer$$.$getDimensions$() : 
    D.$JSCompiler_alias_NULL$$, $colorDims$$ = $colorContainer$$2_options$$312$$ ? $colorContainer$$2_options$$312$$.$getDimensions$() : D.$JSCompiler_alias_NULL$$;
    if($labelContainer$$ && !$colorContainer$$2_options$$312$$) {
      $labelContainer$$.$setTranslateX$($availSpace$$133$$.y + ($availSpace$$133$$.$w$ - $labelDims$$13_legendStyleArray$$.$w$) / 2)
    }else {
      if($colorContainer$$2_options$$312$$ && !$labelContainer$$) {
        $colorContainer$$2_options$$312$$.$setTranslateX$($availSpace$$133$$.y + ($availSpace$$133$$.$w$ - $colorDims$$.$w$) / 2)
      }else {
        if($colorContainer$$2_options$$312$$ && $labelContainer$$) {
          var $availWidth$$18$$ = $availSpace$$133$$.$w$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$;
          $labelDims$$13_legendStyleArray$$.$w$ + $colorDims$$.$w$ > $availWidth$$18$$ && ($labelDims$$13_legendStyleArray$$.$w$ > $availWidth$$18$$ / 2 && $colorDims$$.$w$ > $availWidth$$18$$ / 2 ? ($legend$$32$$.removeChild($labelContainer$$), $legend$$32$$.removeChild($colorContainer$$2_options$$312$$), $labelContainer$$ = D.$DvtTreeLegendRenderer$$.$_renderLabels$($context$$666$$, $treeView$$3$$, $legend$$32$$, $availWidth$$18$$ / 2, $colorSpace_sizeValueStr$$, $colorValueStr$$, $attrGroups$$7_legendDims$$), 
          $colorContainer$$2_options$$312$$ = D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$($context$$666$$, $eventManager$$48_labelSpace$$2$$, $legend$$32$$, $availWidth$$18$$ / 2, $availSpace$$133$$.$h$, $attrGroups$$7_legendDims$$, $borderColor$$64_legendStyles$$)) : $labelDims$$13_legendStyleArray$$.$w$ > $colorDims$$.$w$ ? ($eventManager$$48_labelSpace$$2$$ = $availWidth$$18$$ - $colorDims$$.$w$, $legend$$32$$.removeChild($labelContainer$$), $labelContainer$$ = D.$DvtTreeLegendRenderer$$.$_renderLabels$($context$$666$$, 
          $treeView$$3$$, $legend$$32$$, $eventManager$$48_labelSpace$$2$$, $colorSpace_sizeValueStr$$, $colorValueStr$$, $attrGroups$$7_legendDims$$)) : ($colorSpace_sizeValueStr$$ = $availWidth$$18$$ - $labelDims$$13_legendStyleArray$$.$w$, $legend$$32$$.removeChild($colorContainer$$2_options$$312$$), $colorContainer$$2_options$$312$$ = D.$DvtLegendAttrGroupsRenderer$$.$renderAttrGroups$($context$$666$$, $eventManager$$48_labelSpace$$2$$, $legend$$32$$, $colorSpace_sizeValueStr$$, $availSpace$$133$$.$h$, 
          $attrGroups$$7_legendDims$$, $borderColor$$64_legendStyles$$)), $labelDims$$13_legendStyleArray$$ = $labelContainer$$.$getDimensions$(), $colorDims$$ = $colorContainer$$2_options$$312$$.$getDimensions$());
          (0,D.$DvtAgent$isRightToLeft$$)($context$$666$$) ? ($colorContainer$$2_options$$312$$.$setTranslateX$($availSpace$$133$$.x), $labelContainer$$.$setTranslateX$($availSpace$$133$$.x + $availSpace$$133$$.$w$ - $labelDims$$13_legendStyleArray$$.$w$)) : ($labelContainer$$.$setTranslateX$($availSpace$$133$$.x), $colorContainer$$2_options$$312$$.$setTranslateX$($availSpace$$133$$.x + $availSpace$$133$$.$w$ - $colorDims$$.$w$))
        }
      }
    }
    $attrGroups$$7_legendDims$$ = $legend$$32$$.$getDimensions$();
    $legend$$32$$.$setTranslateY$($availSpace$$133$$.y + $availSpace$$133$$.$h$ - $attrGroups$$7_legendDims$$.$h$);
    $availSpace$$133$$.$h$ -= $attrGroups$$7_legendDims$$.$h$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_GAP$;
    $treeView$$3$$.removeChild($legend$$32$$);
    return $legend$$32$$
  }
};
D.$DvtTreeLegendRenderer$$.$_renderLabels$ = function $$DvtTreeLegendRenderer$$$$_renderLabels$$($context$$667_widthPerSection$$, $treeView$$4$$, $attrTypeStyle_legend$$33$$, $availWidth$$19_x$$307$$, $sizeValueStr$$1$$, $colorValueStr$$1$$) {
  var $isRTL$$65$$ = (0,D.$DvtAgent$isRightToLeft$$)($context$$667_widthPerSection$$), $eventManager$$49$$ = $treeView$$4$$.$__getEventManager$(), $attrValueStyle_styleDefaults$$6$$ = $treeView$$4$$.$getOptions$().styleDefaults, $labelContainer$$1$$ = D.$JSCompiler_alias_NULL$$;
  if($sizeValueStr$$1$$ || $colorValueStr$$1$$) {
    $labelContainer$$1$$ = new D.$DvtContainer$$($context$$667_widthPerSection$$);
    $attrTypeStyle_legend$$33$$.$addChild$($labelContainer$$1$$);
    var $sizeWidth_textStyle$$10$$ = [];
    $sizeWidth_textStyle$$10$$.push($attrValueStyle_styleDefaults$$6$$._attributeTypeTextStyle);
    $attrTypeStyle_legend$$33$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($sizeWidth_textStyle$$10$$);
    $sizeWidth_textStyle$$10$$ = [];
    $sizeWidth_textStyle$$10$$.push($attrValueStyle_styleDefaults$$6$$._attributeValueTextStyle);
    var $attrValueStyle_styleDefaults$$6$$ = (0,D.$DvtCSSStyle$mergeStyles$$)($sizeWidth_textStyle$$10$$), $sizeLabel_sizeStr$$, $sizeValueLabel$$, $sizeLabelWidth$$, $sizeValueLabelWidth$$, $sizeWidth_textStyle$$10$$ = 0;
    $sizeValueStr$$1$$ && ($sizeLabel_sizeStr$$ = (0,D.$DvtBundle$getTranslation$$)($treeView$$4$$.$getOptions$(), "labelSize", $treeView$$4$$.$getBundlePrefix$(), "SIZE"), $sizeLabel_sizeStr$$ = new D.$DvtOutputText$$($context$$667_widthPerSection$$, $sizeLabel_sizeStr$$, 0, 0), $sizeLabel_sizeStr$$.$setCSSStyle$($attrTypeStyle_legend$$33$$), $labelContainer$$1$$.$addChild$($sizeLabel_sizeStr$$), $sizeLabelWidth$$ = $sizeLabel_sizeStr$$.$measureDimensions$().$w$, $sizeValueLabel$$ = new D.$DvtOutputText$$($context$$667_widthPerSection$$, 
    $sizeValueStr$$1$$, 0, 0), $sizeValueLabel$$.$setCSSStyle$($attrValueStyle_styleDefaults$$6$$), $labelContainer$$1$$.$addChild$($sizeValueLabel$$), $sizeValueLabelWidth$$ = $sizeValueLabel$$.$measureDimensions$().$w$, $sizeWidth_textStyle$$10$$ = $sizeLabelWidth$$ + $sizeValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$);
    var $colorLabel_colorStr$$1$$, $colorValueLabel$$, $colorLabelWidth$$, $colorValueLabelWidth$$, $colorWidth$$ = 0;
    $colorValueStr$$1$$ && ($colorLabel_colorStr$$1$$ = (0,D.$DvtBundle$getTranslation$$)($treeView$$4$$.$getOptions$(), "labelColor", $treeView$$4$$.$getBundlePrefix$(), "COLOR"), $colorLabel_colorStr$$1$$ = new D.$DvtOutputText$$($context$$667_widthPerSection$$, $colorLabel_colorStr$$1$$, 0, 0), $colorLabel_colorStr$$1$$.$setCSSStyle$($attrTypeStyle_legend$$33$$), $labelContainer$$1$$.$addChild$($colorLabel_colorStr$$1$$), $colorLabelWidth$$ = $colorLabel_colorStr$$1$$.$measureDimensions$().$w$, 
    $colorValueLabel$$ = new D.$DvtOutputText$$($context$$667_widthPerSection$$, $colorValueStr$$1$$, 0, 0), $colorValueLabel$$.$setCSSStyle$($attrValueStyle_styleDefaults$$6$$), $labelContainer$$1$$.$addChild$($colorValueLabel$$), $colorValueLabelWidth$$ = $colorValueLabel$$.$measureDimensions$().$w$, $colorWidth$$ = $colorLabelWidth$$ + $colorValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$);
    $availWidth$$19_x$$307$$ -= D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$;
    $sizeWidth_textStyle$$10$$ + $colorWidth$$ > $availWidth$$19_x$$307$$ && ($context$$667_widthPerSection$$ = $availWidth$$19_x$$307$$ / 2, $sizeWidth_textStyle$$10$$ > $context$$667_widthPerSection$$ && $colorWidth$$ > $context$$667_widthPerSection$$ ? (D.$DvtTextUtils$$.$fitText$($sizeValueLabel$$, $context$$667_widthPerSection$$ - $sizeLabelWidth$$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($sizeValueLabelWidth$$ = $sizeValueLabel$$.$measureDimensions$().$w$, 
    $eventManager$$49$$.$associate$($sizeValueLabel$$, new D.$DvtSimpleObjPeer$$($sizeValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($sizeLabel_sizeStr$$), $labelContainer$$1$$.removeChild($sizeValueLabel$$), $sizeValueLabel$$ = D.$JSCompiler_alias_NULL$$, $sizeValueLabelWidth$$ = 0), D.$DvtTextUtils$$.$fitText$($colorValueLabel$$, $context$$667_widthPerSection$$ - $colorLabelWidth$$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($colorValueLabelWidth$$ = 
    $colorValueLabel$$.$measureDimensions$().$w$, $eventManager$$49$$.$associate$($colorValueLabel$$, new D.$DvtSimpleObjPeer$$($colorValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($colorLabel_colorStr$$1$$), $labelContainer$$1$$.removeChild($colorValueLabel$$), $colorValueLabel$$ = D.$JSCompiler_alias_NULL$$, $colorValueLabelWidth$$ = 0)) : $sizeWidth_textStyle$$10$$ > $colorWidth$$ ? D.$DvtTextUtils$$.$fitText$($sizeValueLabel$$, $availWidth$$19_x$$307$$ - $colorWidth$$ - $sizeLabelWidth$$ - 
    D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($sizeValueLabelWidth$$ = $sizeValueLabel$$.$measureDimensions$().$w$, $eventManager$$49$$.$associate$($sizeValueLabel$$, new D.$DvtSimpleObjPeer$$($sizeValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($sizeLabel_sizeStr$$), $labelContainer$$1$$.removeChild($sizeValueLabel$$), $sizeValueLabel$$ = D.$JSCompiler_alias_NULL$$, $sizeValueLabelWidth$$ = 0) : D.$DvtTextUtils$$.$fitText$($colorValueLabel$$, 
    $availWidth$$19_x$$307$$ - $sizeWidth_textStyle$$10$$ - $colorLabelWidth$$ - D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, window.Infinity, $labelContainer$$1$$) ? ($colorValueLabelWidth$$ = $colorValueLabel$$.$measureDimensions$().$w$, $eventManager$$49$$.$associate$($colorValueLabel$$, new D.$DvtSimpleObjPeer$$($colorValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($colorLabel_colorStr$$1$$), $labelContainer$$1$$.removeChild($colorValueLabel$$), $colorValueLabel$$ = D.$JSCompiler_alias_NULL$$, 
    $colorValueLabelWidth$$ = 0));
    $availWidth$$19_x$$307$$ = 0;
    $isRTL$$65$$ ? ($colorValueLabel$$ && ($colorValueLabel$$.$setX$($availWidth$$19_x$$307$$), $availWidth$$19_x$$307$$ += $colorValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, $colorLabel_colorStr$$1$$.$setX$($availWidth$$19_x$$307$$), $availWidth$$19_x$$307$$ += $colorLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$), $sizeValueLabel$$ && ($sizeValueLabel$$.$setX$($availWidth$$19_x$$307$$), $availWidth$$19_x$$307$$ += $sizeValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, 
    $sizeLabel_sizeStr$$.$setX$($availWidth$$19_x$$307$$))) : ($sizeValueLabel$$ && ($sizeLabel_sizeStr$$.$setX$($availWidth$$19_x$$307$$), $availWidth$$19_x$$307$$ += $sizeLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, $sizeValueLabel$$.$setX$($availWidth$$19_x$$307$$), $availWidth$$19_x$$307$$ += $sizeValueLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$), $colorValueLabel$$ && ($colorLabel_colorStr$$1$$.$setX$($availWidth$$19_x$$307$$), $availWidth$$19_x$$307$$ += 
    $colorLabelWidth$$ + D.$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, $colorValueLabel$$.$setX$($availWidth$$19_x$$307$$)))
  }
  return $labelContainer$$1$$
};
D.$DvtBaseTreeKeyboardHandler$$ = function $$DvtBaseTreeKeyboardHandler$$$($manager$$34$$) {
  this.Init($manager$$34$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtBaseTreeKeyboardHandler");
D.$DvtBaseTreeKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtBaseTreeKeyboardHandler$$$$$isSelectionEvent$$($event$$835$$) {
  return this.$isNavigationEvent$($event$$835$$) && !$event$$835$$.ctrlKey
};
D.$DvtBaseTreeKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtBaseTreeKeyboardHandler$$$$$isMultiSelectEvent$$($event$$836$$) {
  return 32 == $event$$836$$.keyCode && $event$$836$$.ctrlKey
};
D.$DvtBaseTreeDefaults$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtBaseTreeDefaults");
D.$DvtBaseTreeDefaults$VERSION_1$$ = {skin:"alta", animationDuration:500, animationOnDataChange:"none", animationOnDisplay:"none", highlightMatch:"all", hoverBehavior:"none", hoverBehaviorDelay:200, nodeDefaults:{labelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px;")}, selectionMode:"multiple", sorting:"off", _statusMessageStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"), styleDefaults:{_attributeTypeTextStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:bold;color:#4F4F4F"), 
_attributeValueTextStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;"), _currentTextStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;"), _drillTextStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;"), _labelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, touchResponse:"auto", _resources:{}};
D.$DvtBaseTreeDefaults$$.prototype.Init = function $$DvtBaseTreeDefaults$$$$Init$($defaultsMap$$2_ret$$105$$) {
  $defaultsMap$$2_ret$$105$$ = {skyros:D.$DvtJSONUtils$$.$merge$($defaultsMap$$2_ret$$105$$.skyros, D.$DvtBaseTreeDefaults$VERSION_1$$), alta:D.$DvtJSONUtils$$.$merge$($defaultsMap$$2_ret$$105$$.alta, {})};
  D.$DvtBaseTreeDefaults$$.$superclass$.Init.call(this, $defaultsMap$$2_ret$$105$$)
};
D.$DvtBaseTreeUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreeUtils$$, D.$DvtObj$$, "DvtBaseTreeUtils");
D.$DvtBaseTreeUtils$$.$calcMaxDepth$ = function $$DvtBaseTreeUtils$$$$calcMaxDepth$$($node$$317$$, $depth$$26$$) {
  var $maxDepth$$2$$ = $depth$$26$$, $children$$21$$ = $node$$317$$.$getChildNodes$();
  if($children$$21$$) {
    for(var $i$$905$$ = 0;$i$$905$$ < $children$$21$$.length;$i$$905$$++) {
      var $childDepth$$ = D.$DvtBaseTreeUtils$$.$calcMaxDepth$($children$$21$$[$i$$905$$], $depth$$26$$ + 1), $maxDepth$$2$$ = window.Math.max($maxDepth$$2$$, $childDepth$$)
    }
  }
  return $maxDepth$$2$$
};
D.$DvtBaseTreeUtils$$.$calcNodeCount$ = function $$DvtBaseTreeUtils$$$$calcNodeCount$$($children$$22_node$$318$$) {
  var $count$$27$$ = 1;
  if($children$$22_node$$318$$ = $children$$22_node$$318$$.$getChildNodes$()) {
    for(var $i$$906$$ = 0;$i$$906$$ < $children$$22_node$$318$$.length;$i$$906$$++) {
      $count$$27$$ += D.$DvtBaseTreeUtils$$.$calcNodeCount$($children$$22_node$$318$$[$i$$906$$])
    }
  }
  return $count$$27$$
};
D.$DvtBaseTreeUtils$$.$getAllNodes$ = function $$DvtBaseTreeUtils$$$$getAllNodes$$($node$$319$$) {
  var $ret$$106$$ = [];
  D.$DvtBaseTreeUtils$$.$_addNodesToArray$($node$$319$$, $ret$$106$$);
  return $ret$$106$$
};
D.$DvtBaseTreeUtils$$.$getAllVisibleNodes$ = function $$DvtBaseTreeUtils$$$$getAllVisibleNodes$$($node$$320$$) {
  var $ret$$107$$ = [];
  D.$DvtBaseTreeUtils$$.$_addNodesToArray$($node$$320$$, $ret$$107$$, D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$);
  return $ret$$107$$
};
D.$DvtBaseTreeUtils$$.$getLeafNodes$ = function $$DvtBaseTreeUtils$$$$getLeafNodes$$($node$$321$$) {
  var $ret$$108$$ = [];
  D.$DvtBaseTreeUtils$$.$_addNodesToArray$($node$$321$$, $ret$$108$$, D.$JSCompiler_alias_TRUE$$);
  return $ret$$108$$
};
D.$DvtBaseTreeUtils$$.$isHiddenNode$ = function $$DvtBaseTreeUtils$$$$isHiddenNode$$($categoryMap$$3$$, $nodeOptions$$2$$) {
  return D.$DvtArrayUtils$$.$hasAnyMapItem$($categoryMap$$3$$, $nodeOptions$$2$$.categories)
};
D.$DvtBaseTreeUtils$$.$calcContinuousAttrGroupsExtents$ = function $$DvtBaseTreeUtils$$$$calcContinuousAttrGroupsExtents$$($attrGroupOptions$$, $nodes$$18$$) {
  var $stampId$$15$$ = $attrGroupOptions$$.S;
  if(!($stampId$$15$$ == D.$JSCompiler_alias_NULL$$ || $attrGroupOptions$$.min != D.$JSCompiler_alias_NULL$$ && $attrGroupOptions$$.max != D.$JSCompiler_alias_NULL$$)) {
    for(var $min$$19$$ = window.Infinity, $max$$20$$ = -window.Infinity, $i$$907$$ = 0;$i$$907$$ < $nodes$$18$$.length;$i$$907$$++) {
      var $node$$322_value$$190$$ = $nodes$$18$$[$i$$907$$];
      $stampId$$15$$ == $node$$322_value$$190$$.$_stampId$ && ($node$$322_value$$190$$ = $node$$322_value$$190$$.$getOptions$()._cv, $node$$322_value$$190$$ != D.$JSCompiler_alias_NULL$$ && ($max$$20$$ = window.Math.max($max$$20$$, $node$$322_value$$190$$), $min$$19$$ = window.Math.min($min$$19$$, $node$$322_value$$190$$)))
    }
    $attrGroupOptions$$.min == D.$JSCompiler_alias_NULL$$ && ($attrGroupOptions$$.min = $min$$19$$);
    $attrGroupOptions$$.max == D.$JSCompiler_alias_NULL$$ && ($attrGroupOptions$$.max = $max$$20$$)
  }
};
D.$DvtBaseTreeUtils$$.$processContinuousAttrGroups$ = function $$DvtBaseTreeUtils$$$$processContinuousAttrGroups$$($attrGroupsList$$, $nodes$$19$$) {
  for(var $i$$908$$ = 0;$i$$908$$ < $attrGroupsList$$.length;$i$$908$$++) {
    var $attrGroupsMap_stampId$$16$$ = $attrGroupsList$$[$i$$908$$], $attrGroups$$6$$ = $attrGroupsMap_stampId$$16$$.$attrGroups$, $attrGroupsMap_stampId$$16$$ = $attrGroupsMap_stampId$$16$$.$stampId$;
    if($attrGroups$$6$$ instanceof D.$DvtContinuousAttrGroups$$ && $attrGroupsMap_stampId$$16$$ != D.$JSCompiler_alias_NULL$$) {
      for(var $j$$126$$ = 0;$j$$126$$ < $nodes$$19$$.length;$j$$126$$++) {
        var $JSCompiler_StaticMethods_processAttrGroups$self$$inline_9094_node$$323$$ = $nodes$$19$$[$j$$126$$];
        if($attrGroupsMap_stampId$$16$$ == $JSCompiler_StaticMethods_processAttrGroups$self$$inline_9094_node$$323$$.$_stampId$) {
          var $color$$inline_9096$$ = $attrGroups$$6$$.get($JSCompiler_StaticMethods_processAttrGroups$self$$inline_9094_node$$323$$.$getOptions$()._cv);
          $color$$inline_9096$$ && ($JSCompiler_StaticMethods_processAttrGroups$self$$inline_9094_node$$323$$.$_color$ = $color$$inline_9096$$)
        }
      }
    }
  }
};
D.$DvtBaseTreeUtils$$.$_addNodesToArray$ = function $$DvtBaseTreeUtils$$$$_addNodesToArray$$($i$$909_node$$324$$, $ret$$109$$, $bLeafOnly$$, $bRendered$$1$$) {
  if($i$$909_node$$324$$) {
    var $children$$23$$ = $i$$909_node$$324$$.$getChildNodes$(), $childCount$$9$$ = $children$$23$$ ? $children$$23$$.length : 0;
    (!$bLeafOnly$$ || 0 == $childCount$$9$$) && (!$bRendered$$1$$ || $i$$909_node$$324$$.$getDisplayable$()) && $ret$$109$$.push($i$$909_node$$324$$);
    for($i$$909_node$$324$$ = 0;$i$$909_node$$324$$ < $childCount$$9$$;$i$$909_node$$324$$++) {
      D.$DvtBaseTreeUtils$$.$_addNodesToArray$($children$$23$$[$i$$909_node$$324$$], $ret$$109$$, $bLeafOnly$$, $bRendered$$1$$)
    }
  }
};
D.$DvtTreeAutomation$$ = function $$DvtTreeAutomation$$$($treeView$$1$$) {
  this.$_treeView$ = $treeView$$1$$;
  this.$_root$ = $treeView$$1$$.$_root$
};
(0,D.$goog$exportPath_$$)("DvtTreeAutomation", D.$DvtTreeAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTreeAutomation$$, D.$DvtAutomation$$, "DvtTreeAutomation");
D.$DvtTreeAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTreeAutomation$$$$$GetSubIdForDomElement$$($displayable$$109_indices$$12$$) {
  var $childIndices_logicalObj$$21_parent$$93$$ = this.$_treeView$.$getLogicalObject$($displayable$$109_indices$$12$$);
  if(!$childIndices_logicalObj$$21_parent$$93$$) {
    return $displayable$$109_indices$$12$$.getParent() instanceof D.$DvtButton$$ && ($displayable$$109_indices$$12$$ = $displayable$$109_indices$$12$$.getParent()), $childIndices_logicalObj$$21_parent$$93$$ = $displayable$$109_indices$$12$$.getParent(), $childIndices_logicalObj$$21_parent$$93$$ instanceof D.$DvtBreadcrumbs$$ ? "breadcrumbs[" + (0,D.$JSCompiler_StaticMethods_getCrumbIndex$$)($childIndices_logicalObj$$21_parent$$93$$, $displayable$$109_indices$$12$$) + "]" : D.$JSCompiler_alias_NULL$$
  }
  if($childIndices_logicalObj$$21_parent$$93$$ instanceof D.$DvtBaseTreeNode$$) {
    $displayable$$109_indices$$12$$ = "";
    if(!this.$_root$.$_bArtificialRoot$) {
      if($childIndices_logicalObj$$21_parent$$93$$ == this.$_root$) {
        return"node[0]"
      }
      $displayable$$109_indices$$12$$ += "[0]"
    }
    $displayable$$109_indices$$12$$ = ($childIndices_logicalObj$$21_parent$$93$$ = this.$_getIndicesFromNode$($childIndices_logicalObj$$21_parent$$93$$, this.$_root$.$getChildNodes$())) ? $displayable$$109_indices$$12$$ + $childIndices_logicalObj$$21_parent$$93$$ : $displayable$$109_indices$$12$$;
    if(0 < $displayable$$109_indices$$12$$.length) {
      return"node" + $displayable$$109_indices$$12$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTreeAutomation$$.prototype.$_getIndicesFromNode$ = function $$DvtTreeAutomation$$$$$_getIndicesFromNode$$($node$$328$$, $children$$24$$) {
  if($children$$24$$ && 0 < $children$$24$$.length) {
    for(var $n$$39$$ = 0;$n$$39$$ < $children$$24$$.length;$n$$39$$++) {
      if($children$$24$$[$n$$39$$] == $node$$328$$) {
        return"[" + $n$$39$$ + "]"
      }
      var $nodeIndex$$12$$ = this.$_getIndicesFromNode$($node$$328$$, $children$$24$$[$n$$39$$].$getChildNodes$());
      if($nodeIndex$$12$$) {
        return"[" + $n$$39$$ + "]" + $nodeIndex$$12$$
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTreeAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTreeAutomation$$$$$getDomElementForSubId$$($crumb$$2_foundNode_subId$$32$$) {
  return!$crumb$$2_foundNode_subId$$32$$ ? D.$JSCompiler_alias_NULL$$ : "tooltip" == $crumb$$2_foundNode_subId$$32$$ ? (0,D.$JSCompiler_StaticMethods_GetTooltipElement$$)(this.$_treeView$) : 0 == $crumb$$2_foundNode_subId$$32$$.indexOf("breadcrumbs") ? ($crumb$$2_foundNode_subId$$32$$ = (0,D.$JSCompiler_StaticMethods_getCrumb$$)(this.$_root$.$_view$.$getBreadcrumbs$(), $crumb$$2_foundNode_subId$$32$$.substring($crumb$$2_foundNode_subId$$32$$.indexOf("[") + 1, $crumb$$2_foundNode_subId$$32$$.indexOf("]")))) ? 
  $crumb$$2_foundNode_subId$$32$$.$getElem$() : D.$JSCompiler_alias_NULL$$ : !this.$_root$.$_bArtificialRoot$ && ($crumb$$2_foundNode_subId$$32$$ = $crumb$$2_foundNode_subId$$32$$.substring(0, $crumb$$2_foundNode_subId$$32$$.indexOf("[")) + $crumb$$2_foundNode_subId$$32$$.substring($crumb$$2_foundNode_subId$$32$$.indexOf("]") + 1), "node" == $crumb$$2_foundNode_subId$$32$$) ? this.$_root$.$getDisplayable$().$getElem$() : ($crumb$$2_foundNode_subId$$32$$ = (0,D.$JSCompiler_StaticMethods__getNodeFromSubId$$)(this, 
  this.$_root$, $crumb$$2_foundNode_subId$$32$$)) ? $crumb$$2_foundNode_subId$$32$$.$getDisplayable$().$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$DvtTreeAutomation$$.prototype.getDomElementForSubId = D.$DvtTreeAutomation$$.prototype.$getDomElementForSubId$;
D.$JSCompiler_StaticMethods__getNodeFromSubId$$ = function $$JSCompiler_StaticMethods__getNodeFromSubId$$$($JSCompiler_StaticMethods__getNodeFromSubId$self$$, $childNode$$15_node$$329$$, $subId$$33$$) {
  var $index$$260_openParen$$4$$ = $subId$$33$$.indexOf("["), $closeParen$$4_nextOpenParen$$1$$ = $subId$$33$$.indexOf("]");
  if(0 <= $index$$260_openParen$$4$$ && 0 <= $closeParen$$4_nextOpenParen$$1$$) {
    $index$$260_openParen$$4$$ = $subId$$33$$.substring($index$$260_openParen$$4$$ + 1, $closeParen$$4_nextOpenParen$$1$$);
    $subId$$33$$ = $subId$$33$$.substring($closeParen$$4_nextOpenParen$$1$$ + 1);
    var $closeParen$$4_nextOpenParen$$1$$ = $subId$$33$$.indexOf("["), $nextCloseParen$$1$$ = $subId$$33$$.indexOf("]");
    return($childNode$$15_node$$329$$ = (0,D.$DvtTreeAutomation$_getNodeByIndex$$)($childNode$$15_node$$329$$.$getChildNodes$(), $index$$260_openParen$$4$$)) && 0 <= $closeParen$$4_nextOpenParen$$1$$ && 0 <= $nextCloseParen$$1$$ ? (0,D.$JSCompiler_StaticMethods__getNodeFromSubId$$)($JSCompiler_StaticMethods__getNodeFromSubId$self$$, $childNode$$15_node$$329$$, $subId$$33$$) : $childNode$$15_node$$329$$
  }
};
D.$JSCompiler_StaticMethods__getNodeFromPath$$ = function $$JSCompiler_StaticMethods__getNodeFromPath$$$($JSCompiler_StaticMethods__getNodeFromPath$self$$, $childNode$$16_node$$330$$, $path$$41$$) {
  var $index$$261$$ = $path$$41$$.shift();
  $childNode$$16_node$$330$$ = (0,D.$DvtTreeAutomation$_getNodeByIndex$$)($childNode$$16_node$$330$$.$getChildNodes$(), $index$$261$$);
  return 0 == $path$$41$$.length ? $childNode$$16_node$$330$$ : 0 < $path$$41$$.length ? (0,D.$JSCompiler_StaticMethods__getNodeFromPath$$)($JSCompiler_StaticMethods__getNodeFromPath$self$$, $childNode$$16_node$$330$$, $path$$41$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtTreeAutomation$$.prototype.$getNode$ = function $$DvtTreeAutomation$$$$$getNode$$($node$$331_subIdPath$$2$$) {
  !this.$_root$.$_bArtificialRoot$ && 0 == $node$$331_subIdPath$$2$$[0] && $node$$331_subIdPath$$2$$.shift();
  $node$$331_subIdPath$$2$$ = 0 == $node$$331_subIdPath$$2$$.length ? this.$_root$ : (0,D.$JSCompiler_StaticMethods__getNodeFromPath$$)(this, this.$_root$, $node$$331_subIdPath$$2$$);
  return{color:$node$$331_subIdPath$$2$$.$getColor$(), label:$node$$331_subIdPath$$2$$.$getLabel$(), selected:$node$$331_subIdPath$$2$$.$isSelected$() == D.$JSCompiler_alias_VOID$$ ? D.$JSCompiler_alias_FALSE$$ : $node$$331_subIdPath$$2$$.$isSelected$(), size:$node$$331_subIdPath$$2$$.$getSize$(), tooltip:$node$$331_subIdPath$$2$$.$getShortDesc$()}
};
D.$DvtTreeAutomation$$.prototype.getNode = D.$DvtTreeAutomation$$.prototype.$getNode$;
D.$DvtTreeAutomation$_getNodeByIndex$$ = function $$DvtTreeAutomation$_getNodeByIndex$$$($nodes$$23$$, $index$$262$$) {
  for(var $i$$916$$ = 0;$i$$916$$ < $nodes$$23$$.length;$i$$916$$++) {
    if($index$$262$$ == $nodes$$23$$[$i$$916$$].$getIndex$()) {
      return $nodes$$23$$[$i$$916$$]
    }
  }
  return D.$JSCompiler_alias_NULL$$
};

  return D;
});
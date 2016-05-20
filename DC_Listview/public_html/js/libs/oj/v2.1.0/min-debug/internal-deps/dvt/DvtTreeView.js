/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit', './DvtSubcomponent'], function(dvt) {
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

function $DvtTreeView$$() {
}
$goog$exportPath_$$("DvtTreeView", $DvtTreeView$$);
dvt.$Obj$.$createSubclass$($DvtTreeView$$, dvt.$BaseComponent$);
$DvtTreeView$$.prototype.Init = function $$DvtTreeView$$$$Init$($context$$633$$, $callback$$161$$, $callbackObj$$117$$) {
  $DvtTreeView$$.$superclass$.Init.call(this, $context$$633$$, $callback$$161$$, $callbackObj$$117$$);
  this.$_eventHandler$ = this.$CreateEventManager$(this, $context$$633$$, this.dispatchEvent, this);
  this.$_eventHandler$.$addListeners$(this);
  this.$_dragSource$ = new dvt.$DragSource$($context$$633$$);
  this.$_dropTarget$ = new $DvtTreeDropTarget$$(this);
  this.$_eventHandler$.$setDragSource$(this.$_dragSource$);
  this.$_legend$ = $JSCompiler_alias_NULL$$;
  this.$_hasFocus$ = $JSCompiler_alias_FALSE$$;
  this.$_navigableIdToFocus$ = $JSCompiler_alias_NULL$$
};
$DvtTreeView$$.prototype.$SetOptions$ = function $$DvtTreeView$$$$$SetOptions$$($options$$301$$) {
  $options$$301$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$301$$), dvt.$Agent$.$isEnvironmentBrowser$() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")) : this.$Options$ || (this.$Options$ = this.$GetDefaults$())
};
$DvtTreeView$$.prototype.$render$ = function $$DvtTreeView$$$$$render$$($ah$$4_animationOnDataChange$$3_options$$302_root$$14_rootNodes$$inline_5299$$, $container$$206_width$$175$$, $availSpace$$127_bBlackBoxUpdate$$3_height$$145$$) {
  var $bNewOptions$$ = $ah$$4_animationOnDataChange$$3_options$$302_root$$14_rootNodes$$inline_5299$$ || !this.$Options$;
  this.$SetOptions$($ah$$4_animationOnDataChange$$3_options$$302_root$$14_rootNodes$$inline_5299$$);
  var $newRoot$$inline_5312_options$$inline_5298_size$$inline_5303$$ = this.$getOptions$();
  if($newRoot$$inline_5312_options$$inline_5298_size$$inline_5303$$.nodes == $JSCompiler_alias_NULL$$) {
    $ah$$4_animationOnDataChange$$3_options$$302_root$$14_rootNodes$$inline_5299$$ = $JSCompiler_alias_NULL$$
  }else {
    $ah$$4_animationOnDataChange$$3_options$$302_root$$14_rootNodes$$inline_5299$$ = [];
    for(var $hiddenCategories$$inline_5300_oldAncestors$$inline_5313_oldList$$inline_5315$$ = dvt.$ArrayUtils$.$createBooleanMap$($newRoot$$inline_5312_options$$inline_5298_size$$inline_5303$$.hiddenCategories), $artificialRoot$$inline_5305_bounds$$155_i$$inline_5304_oldRoot$$inline_5311$$ = 0;$artificialRoot$$inline_5305_bounds$$155_i$$inline_5304_oldRoot$$inline_5311$$ < $newRoot$$inline_5312_options$$inline_5298_size$$inline_5303$$.nodes.length;$artificialRoot$$inline_5305_bounds$$155_i$$inline_5304_oldRoot$$inline_5311$$++) {
      var $newAncestors$$inline_5314_newList$$inline_5316_nodeOptions$$inline_5301_rootNode$$inline_5302$$ = $newRoot$$inline_5312_options$$inline_5298_size$$inline_5303$$.nodes[$artificialRoot$$inline_5305_bounds$$155_i$$inline_5304_oldRoot$$inline_5311$$];
      $newAncestors$$inline_5314_newList$$inline_5316_nodeOptions$$inline_5301_rootNode$$inline_5302$$._index = $artificialRoot$$inline_5305_bounds$$155_i$$inline_5304_oldRoot$$inline_5311$$;
      ($newAncestors$$inline_5314_newList$$inline_5316_nodeOptions$$inline_5301_rootNode$$inline_5302$$ = $JSCompiler_StaticMethods__processNode$$(this, $hiddenCategories$$inline_5300_oldAncestors$$inline_5313_oldList$$inline_5315$$, $newAncestors$$inline_5314_newList$$inline_5316_nodeOptions$$inline_5301_rootNode$$inline_5302$$)) && $ah$$4_animationOnDataChange$$3_options$$302_root$$14_rootNodes$$inline_5299$$.push($newAncestors$$inline_5314_newList$$inline_5316_nodeOptions$$inline_5301_rootNode$$inline_5302$$)
    }
    if(1 == $ah$$4_animationOnDataChange$$3_options$$302_root$$14_rootNodes$$inline_5299$$.length) {
      $ah$$4_animationOnDataChange$$3_options$$302_root$$14_rootNodes$$inline_5299$$ = $ah$$4_animationOnDataChange$$3_options$$302_root$$14_rootNodes$$inline_5299$$[0]
    }else {
      for(var $artificialRoot$$inline_5305_bounds$$155_i$$inline_5304_oldRoot$$inline_5311$$ = $newRoot$$inline_5312_options$$inline_5298_size$$inline_5303$$ = 0;$artificialRoot$$inline_5305_bounds$$155_i$$inline_5304_oldRoot$$inline_5311$$ < $ah$$4_animationOnDataChange$$3_options$$302_root$$14_rootNodes$$inline_5299$$.length;$artificialRoot$$inline_5305_bounds$$155_i$$inline_5304_oldRoot$$inline_5311$$++) {
        $newRoot$$inline_5312_options$$inline_5298_size$$inline_5303$$ += $ah$$4_animationOnDataChange$$3_options$$302_root$$14_rootNodes$$inline_5299$$[$artificialRoot$$inline_5305_bounds$$155_i$$inline_5304_oldRoot$$inline_5311$$].$getSize$()
      }
      $artificialRoot$$inline_5305_bounds$$155_i$$inline_5304_oldRoot$$inline_5311$$ = this.$CreateNode$({value:$newRoot$$inline_5312_options$$inline_5298_size$$inline_5303$$, $bArtificialRoot$:$JSCompiler_alias_TRUE$$});
      $artificialRoot$$inline_5305_bounds$$155_i$$inline_5304_oldRoot$$inline_5311$$.$setChildNodes$($ah$$4_animationOnDataChange$$3_options$$302_root$$14_rootNodes$$inline_5299$$);
      $ah$$4_animationOnDataChange$$3_options$$302_root$$14_rootNodes$$inline_5299$$ = $artificialRoot$$inline_5305_bounds$$155_i$$inline_5304_oldRoot$$inline_5311$$
    }
  }
  this.$ApplyParsedProperties$({root:$ah$$4_animationOnDataChange$$3_options$$302_root$$14_rootNodes$$inline_5299$$});
  !isNaN($container$$206_width$$175$$) && !isNaN($availSpace$$127_bBlackBoxUpdate$$3_height$$145$$) && (this.$Width$ = $container$$206_width$$175$$, this.$Height$ = $availSpace$$127_bBlackBoxUpdate$$3_height$$145$$);
  this.$_eventHandler$ && this.$_eventHandler$.$hideTooltip$();
  $availSpace$$127_bBlackBoxUpdate$$3_height$$145$$ = new dvt.$Rectangle$(0, 0, this.$Width$, this.$Height$);
  this.$Layout$($availSpace$$127_bBlackBoxUpdate$$3_height$$145$$);
  $container$$206_width$$175$$ = new dvt.$Container$(this.$getCtx$());
  this.$addChild$($container$$206_width$$175$$);
  this.$_templates$ && (this.$_afContext$ = new $DvtAfContext$$(this.$getCtx$(), this.$_eventHandler$), this.$_afContext$.$_rmIfNotFit$ = $JSCompiler_alias_TRUE$$);
  this.$Render$($container$$206_width$$175$$, $availSpace$$127_bBlackBoxUpdate$$3_height$$145$$);
  this.$Animation$ && (this.$AnimationStopped$ = $JSCompiler_alias_TRUE$$, this.$Animation$.stop());
  $ah$$4_animationOnDataChange$$3_options$$302_root$$14_rootNodes$$inline_5299$$ = this.$getOptions$().animationOnDataChange;
  $artificialRoot$$inline_5305_bounds$$155_i$$inline_5304_oldRoot$$inline_5311$$ = new dvt.$Rectangle$(0, 0, this.$Width$, this.$Height$);
  $availSpace$$127_bBlackBoxUpdate$$3_height$$145$$ = $JSCompiler_alias_FALSE$$;
  this.$_container$ ? $ah$$4_animationOnDataChange$$3_options$$302_root$$14_rootNodes$$inline_5299$$ && $bNewOptions$$ && (dvt.$BlackBoxAnimationHandler$.isSupported($ah$$4_animationOnDataChange$$3_options$$302_root$$14_rootNodes$$inline_5299$$) ? (this.$Animation$ = dvt.$BlackBoxAnimationHandler$.$getCombinedAnimation$(this.$getCtx$(), $ah$$4_animationOnDataChange$$3_options$$302_root$$14_rootNodes$$inline_5299$$, this.$_container$, $container$$206_width$$175$$, $artificialRoot$$inline_5305_bounds$$155_i$$inline_5304_oldRoot$$inline_5311$$, 
  this.$AnimationDuration$), $availSpace$$127_bBlackBoxUpdate$$3_height$$145$$ = $JSCompiler_alias_TRUE$$) : this.$_oldRoot$ && "auto" == $ah$$4_animationOnDataChange$$3_options$$302_root$$14_rootNodes$$inline_5299$$ && (this.$_deleteContainer$ = this.$GetDeleteContainer$(), this.$addChild$(this.$_deleteContainer$), $ah$$4_animationOnDataChange$$3_options$$302_root$$14_rootNodes$$inline_5299$$ = new $DvtTreeAnimationHandler$$(this.$getCtx$(), this.$_deleteContainer$), $artificialRoot$$inline_5305_bounds$$155_i$$inline_5304_oldRoot$$inline_5311$$ = 
  this.$_oldRoot$, $newRoot$$inline_5312_options$$inline_5298_size$$inline_5303$$ = this.$_root$, $hiddenCategories$$inline_5300_oldAncestors$$inline_5313_oldList$$inline_5315$$ = this.$_oldAncestors$, $newAncestors$$inline_5314_newList$$inline_5316_nodeOptions$$inline_5301_rootNode$$inline_5302$$ = this.$_ancestors$, $ah$$4_animationOnDataChange$$3_options$$302_root$$14_rootNodes$$inline_5299$$.$_bDrill$ = $JSCompiler_alias_FALSE$$, $ah$$4_animationOnDataChange$$3_options$$302_root$$14_rootNodes$$inline_5299$$.$_oldRoot$ = 
  $artificialRoot$$inline_5305_bounds$$155_i$$inline_5304_oldRoot$$inline_5311$$, $ah$$4_animationOnDataChange$$3_options$$302_root$$14_rootNodes$$inline_5299$$.$_oldAncestors$ = $hiddenCategories$$inline_5300_oldAncestors$$inline_5313_oldList$$inline_5315$$, $DvtTreeAnimationHandler$_isAncestor$$($newAncestors$$inline_5314_newList$$inline_5316_nodeOptions$$inline_5301_rootNode$$inline_5302$$, $artificialRoot$$inline_5305_bounds$$155_i$$inline_5304_oldRoot$$inline_5311$$) || $DvtTreeAnimationHandler$_isAncestor$$($hiddenCategories$$inline_5300_oldAncestors$$inline_5313_oldList$$inline_5315$$, 
  $newRoot$$inline_5312_options$$inline_5298_size$$inline_5303$$) ? ($ah$$4_animationOnDataChange$$3_options$$302_root$$14_rootNodes$$inline_5299$$.$_bDrill$ = $JSCompiler_alias_TRUE$$, $hiddenCategories$$inline_5300_oldAncestors$$inline_5313_oldList$$inline_5315$$ = $JSCompiler_StaticMethods_getDescendantNodes$$($artificialRoot$$inline_5305_bounds$$155_i$$inline_5304_oldRoot$$inline_5311$$), $newAncestors$$inline_5314_newList$$inline_5316_nodeOptions$$inline_5301_rootNode$$inline_5302$$ = $JSCompiler_StaticMethods_getDescendantNodes$$($newRoot$$inline_5312_options$$inline_5298_size$$inline_5303$$), 
  $hiddenCategories$$inline_5300_oldAncestors$$inline_5313_oldList$$inline_5315$$.push($artificialRoot$$inline_5305_bounds$$155_i$$inline_5304_oldRoot$$inline_5311$$), $newAncestors$$inline_5314_newList$$inline_5316_nodeOptions$$inline_5301_rootNode$$inline_5302$$.push($newRoot$$inline_5312_options$$inline_5298_size$$inline_5303$$), $ah$$4_animationOnDataChange$$3_options$$302_root$$14_rootNodes$$inline_5299$$.$constructAnimation$($hiddenCategories$$inline_5300_oldAncestors$$inline_5313_oldList$$inline_5315$$, 
  $newAncestors$$inline_5314_newList$$inline_5316_nodeOptions$$inline_5301_rootNode$$inline_5302$$)) : $ah$$4_animationOnDataChange$$3_options$$302_root$$14_rootNodes$$inline_5299$$.$constructAnimation$([$artificialRoot$$inline_5305_bounds$$155_i$$inline_5304_oldRoot$$inline_5311$$], [$newRoot$$inline_5312_options$$inline_5298_size$$inline_5303$$]), this.$Animation$ = $ah$$4_animationOnDataChange$$3_options$$302_root$$14_rootNodes$$inline_5299$$.$getAnimation$($JSCompiler_alias_TRUE$$))) : this.$Animation$ = 
  this.$GetDisplayAnimation$($container$$206_width$$175$$, $artificialRoot$$inline_5305_bounds$$155_i$$inline_5304_oldRoot$$inline_5311$$);
  this.$_oldAncestors$ = this.$_oldRoot$ = $JSCompiler_alias_NULL$$;
  this.$Animation$ && (this.$_eventHandler$.$removeListeners$(this), this.$Animation$.$setOnEnd$(this.$OnAnimationEnd$, this), this.$Animation$.play());
  $availSpace$$127_bBlackBoxUpdate$$3_height$$145$$ ? this.$_oldContainer$ = this.$_container$ : this.$_container$ && this.removeChild(this.$_container$);
  this.$_container$ = $container$$206_width$$175$$;
  $bNewOptions$$ ? this.$_processInitialSelections$() : this.$ReselectNodes$();
  $JSCompiler_StaticMethods__processInitialFocus$$(this, !this.$Animation$);
  this.$Animation$ || $JSCompiler_StaticMethods__processInitialHighlighting$$(this);
  this.$UpdateAriaAttributes$();
  this.$Animation$ || this.$RenderComplete$()
};
$DvtTreeView$$.prototype.render = $DvtTreeView$$.prototype.$render$;
$JSCompiler_prototypeAlias$$ = $DvtTreeView$$.prototype;
$JSCompiler_prototypeAlias$$.$Parse$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
$JSCompiler_prototypeAlias$$.$Layout$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$Render$ = $JSCompiler_emptyFn$$();
function $JSCompiler_StaticMethods_RenderBackground$$($JSCompiler_StaticMethods_RenderBackground$self$$, $container$$208$$) {
  var $background$$16$$ = new dvt.$Rect$($JSCompiler_StaticMethods_RenderBackground$self$$.$getCtx$(), 0, 0, $JSCompiler_StaticMethods_RenderBackground$self$$.$Width$, $JSCompiler_StaticMethods_RenderBackground$self$$.$Height$);
  $background$$16$$.$setInvisibleFill$();
  $container$$208$$.$addChild$($background$$16$$)
}
function $JSCompiler_StaticMethods_LayoutBreadcrumbs$$($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$, $availSpace$$129$$) {
  if(0 < $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_ancestors$.length) {
    var $rootLabel$$ = $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_root$ ? $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_root$.$getLabel$() : $JSCompiler_alias_NULL$$;
    $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ && $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_eventHandler$.$removeComponentKeyboardHandler$($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$.$getEventManager$());
    $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ = $DvtTreeBreadcrumbsRenderer$$.$render$($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$, $availSpace$$129$$, $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_ancestors$, $rootLabel$$);
    $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_eventHandler$.$addComponentKeyboardHandlerAt$($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$.$getEventManager$())
  }else {
    $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ && $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_eventHandler$.$removeComponentKeyboardHandler$($JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$.$getEventManager$()), $JSCompiler_StaticMethods_LayoutBreadcrumbs$self$$.$_breadcrumbs$ = $JSCompiler_alias_NULL$$
  }
}
function $JSCompiler_StaticMethods_RenderEmptyText$$($JSCompiler_StaticMethods_RenderEmptyText$self$$, $container$$211$$) {
  var $options$$303$$ = $JSCompiler_StaticMethods_RenderEmptyText$self$$.$getOptions$(), $emptyText$$3$$ = $options$$303$$.emptyText;
  $emptyText$$3$$ || ($emptyText$$3$$ = dvt.$Bundle$.$getTranslation$($options$$303$$, "labelNoData", dvt.$Bundle$.$UTIL_PREFIX$, "NO_DATA"));
  dvt.$TextUtils$.$renderEmptyText$($container$$211$$, $emptyText$$3$$, new dvt.$Rectangle$(0, 0, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Width$, $JSCompiler_StaticMethods_RenderEmptyText$self$$.$Height$), $JSCompiler_StaticMethods_RenderEmptyText$self$$.$getEventManager$(), $options$$303$$._statusMessageStyle)
}
function $JSCompiler_StaticMethods_HasValidData$$($JSCompiler_StaticMethods_HasValidData$self$$) {
  return $JSCompiler_StaticMethods_HasValidData$self$$.$_root$ && 0 < $JSCompiler_StaticMethods_HasValidData$self$$.$_root$.$getSize$()
}
$JSCompiler_prototypeAlias$$.$GetDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$GetDisplayAnimation$$($container$$212$$, $bounds$$157$$) {
  var $animationOnDisplay$$4$$ = this.$getOptions$().animationOnDisplay;
  return dvt.$BlackBoxAnimationHandler$.isSupported($animationOnDisplay$$4$$) ? dvt.$BlackBoxAnimationHandler$.$getInAnimation$(this.$getCtx$(), $animationOnDisplay$$4$$, $container$$212$$, $bounds$$157$$, this.$AnimationDuration$) : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  this.$_deleteContainer$ && (this.removeChild(this.$_deleteContainer$), this.$_deleteContainer$ = $JSCompiler_alias_NULL$$);
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$ = $JSCompiler_alias_NULL$$);
  this.$_eventHandler$.$addListeners$(this);
  $JSCompiler_StaticMethods__processInitialFocus$$(this, $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods__processInitialHighlighting$$(this);
  this.$AnimationStopped$ || this.$RenderComplete$();
  this.$AnimationStopped$ = $JSCompiler_alias_FALSE$$;
  this.$Animation$ = $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$GetDeleteContainer$ = function $$JSCompiler_prototypeAlias$$$$GetDeleteContainer$$() {
  return new dvt.$Container$(this.$getCtx$())
};
$JSCompiler_prototypeAlias$$.$CreateKeyboardHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateKeyboardHandler$$($manager$$34$$) {
  return new $DvtTreeKeyboardHandler$$($manager$$34$$)
};
$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$($view$$58$$, $context$$634$$, $callback$$162$$, $callbackObj$$118$$) {
  return new $DvtTreeEventManager$$($view$$58$$, $context$$634$$, $callback$$162$$, $callbackObj$$118$$)
};
$JSCompiler_prototypeAlias$$.$GetInitialFocusedItem$ = function $$JSCompiler_prototypeAlias$$$$GetInitialFocusedItem$$($root$$15$$) {
  if($root$$15$$ && $root$$15$$.$_bArtificialRoot$) {
    var $nodes$$21$$ = $root$$15$$.$getChildNodes$();
    if($nodes$$21$$ && 0 < $nodes$$21$$.length) {
      return $nodes$$21$$[0]
    }
  }
  return $root$$15$$
};
$JSCompiler_prototypeAlias$$.$highlight$ = function $$JSCompiler_prototypeAlias$$$$highlight$$($categories$$32$$) {
  this.$getOptions$().highlightedCategories = dvt.$JsonUtils$.$clone$($categories$$32$$);
  dvt.$CategoryRolloverHandler$.$highlight$($categories$$32$$, $DvtTreeUtils$$.$getAllNodes$(this.$_root$), "any" == this.$getOptions$().highlightMatch)
};
$DvtTreeView$$.prototype.highlight = $DvtTreeView$$.prototype.$highlight$;
$DvtTreeView$$.prototype.select = function $$DvtTreeView$$$$select$($selection$$29_targets$$8$$) {
  var $options$$304$$ = this.$getOptions$();
  $options$$304$$.selection = dvt.$JsonUtils$.$clone$($selection$$29_targets$$8$$);
  this.$_selectionHandler$ && ($selection$$29_targets$$8$$ = $DvtTreeUtils$$.$getAllNodes$(this.$_root$), this.$_selectionHandler$.$processInitialSelections$($options$$304$$.selection, $selection$$29_targets$$8$$))
};
$DvtTreeView$$.prototype.select = $DvtTreeView$$.prototype.select;
$JSCompiler_prototypeAlias$$ = $DvtTreeView$$.prototype;
$JSCompiler_prototypeAlias$$.$getEventManager$ = $JSCompiler_get$$("$_eventHandler$");
$JSCompiler_prototypeAlias$$.$ApplyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$ApplyParsedProperties$$($afComponent$$3_contextMenuHandler_menus$$1_nodes$$22_props$$19$$) {
  var $options$$305_templates$$2$$ = this.$getOptions$();
  this.$_oldRoot$ = this.$_root$;
  this.$_oldAncestors$ = this.$_ancestors$;
  this.$_root$ = $afComponent$$3_contextMenuHandler_menus$$1_nodes$$22_props$$19$$.root;
  this.$_ancestors$ = $options$$305_templates$$2$$._ancestors ? $options$$305_templates$$2$$._ancestors : [];
  this.$_nodeCount$ = this.$_root$ ? $DvtTreeUtils$$.$calcNodeCount$(this.$_root$) : 0;
  this.$_maxDepth$ = this.$_root$ ? $DvtTreeUtils$$.$calcMaxDepth$(this.$_root$, 0) : 0;
  this.$AnimationDuration$ = dvt.$StyleUtils$.$getTimeMilliseconds$($options$$305_templates$$2$$.animationDuration) / 1E3;
  this.$_styles$ = $afComponent$$3_contextMenuHandler_menus$$1_nodes$$22_props$$19$$.$styles$ ? $afComponent$$3_contextMenuHandler_menus$$1_nodes$$22_props$$19$$.$styles$ : {};
  (this.$_nodeSelection$ = "none" == $options$$305_templates$$2$$.selectionMode ? $JSCompiler_alias_NULL$$ : "single" == $options$$305_templates$$2$$.selectionMode ? dvt.$SelectionHandler$.$TYPE_SINGLE$ : dvt.$SelectionHandler$.$TYPE_MULTIPLE$) ? (this.$_selectionHandler$ = new dvt.$SelectionHandler$(this.$_nodeSelection$), this.$_initialSelection$ = $options$$305_templates$$2$$.selection) : this.$_selectionHandler$ = $JSCompiler_alias_NULL$$;
  this.$_eventHandler$.$setSelectionHandler$(this.$_selectionHandler$);
  this.$_eventHandler$.$setKeyboardHandler$(this.$CreateKeyboardHandler$(this.$_eventHandler$));
  this.$_legendSource$ = $JSCompiler_alias_NULL$$;
  this.$_attrGroups$ = [];
  if($options$$305_templates$$2$$.attributeGroups) {
    $afComponent$$3_contextMenuHandler_menus$$1_nodes$$22_props$$19$$ = $DvtTreeUtils$$.$getAllNodes$(this.$_root$);
    for(var $i$$843$$ = 0;$i$$843$$ < $options$$305_templates$$2$$.attributeGroups.length;$i$$843$$++) {
      var $attrGroup$$ = $options$$305_templates$$2$$.attributeGroups[$i$$843$$], $agObj$$ = $JSCompiler_alias_NULL$$;
      if("continuous" == $attrGroup$$.attributeType) {
        $DvtTreeUtils$$.$calcContinuousAttrGroupsExtents$($attrGroup$$, $afComponent$$3_contextMenuHandler_menus$$1_nodes$$22_props$$19$$), $agObj$$ = new dvt.$ContinuousAttrGroups$($attrGroup$$.min, $attrGroup$$.max, $attrGroup$$.minLabel, $attrGroup$$.maxLabel, $attrGroup$$.colors)
      }else {
        for(var $agObj$$ = new dvt.$DiscreteAttrGroups$, $groupIndex$$78$$ = 0;$groupIndex$$78$$ < $attrGroup$$.groups.length;$groupIndex$$78$$++) {
          var $group$$37$$ = $attrGroup$$.groups[$groupIndex$$78$$];
          $agObj$$.add($group$$37$$.id, $group$$37$$.label, {color:$group$$37$$.color, pattern:$group$$37$$.pattern})
        }
      }
      this.$_attrGroups$.push({$attrGroups$:$agObj$$, $stampId$:$attrGroup$$.S, id:$attrGroup$$.id});
      !$options$$305_templates$$2$$._adf && !$options$$305_templates$$2$$._legendSource && 0 == $i$$843$$ ? this.$_legendSource$ = $agObj$$ : $options$$305_templates$$2$$._legendSource && $options$$305_templates$$2$$._legendSource == $attrGroup$$.id && (this.$_legendSource$ = $agObj$$)
    }
    $DvtTreeUtils$$.$processContinuousAttrGroups$(this.$_attrGroups$, $afComponent$$3_contextMenuHandler_menus$$1_nodes$$22_props$$19$$)
  }
  if(($afComponent$$3_contextMenuHandler_menus$$1_nodes$$22_props$$19$$ = $options$$305_templates$$2$$._contextMenus) && 0 < $afComponent$$3_contextMenuHandler_menus$$1_nodes$$22_props$$19$$.length) {
    $afComponent$$3_contextMenuHandler_menus$$1_nodes$$22_props$$19$$ = new dvt.$ContextMenuHandler$(this.$getCtx$(), $afComponent$$3_contextMenuHandler_menus$$1_nodes$$22_props$$19$$), this.$_eventHandler$.$setContextMenuHandler$($afComponent$$3_contextMenuHandler_menus$$1_nodes$$22_props$$19$$)
  }
  if($options$$305_templates$$2$$ = $options$$305_templates$$2$$._templates) {
    this.$_templates$ = {};
    for(var $templateKey$$ in $options$$305_templates$$2$$) {
      $afComponent$$3_contextMenuHandler_menus$$1_nodes$$22_props$$19$$ = $DvtAfComponentFactory$$.$parseJsonElement$($options$$305_templates$$2$$[$templateKey$$]), this.$_templates$[$templateKey$$] = $afComponent$$3_contextMenuHandler_menus$$1_nodes$$22_props$$19$$
    }
  }
};
$JSCompiler_prototypeAlias$$.$ReselectNodes$ = function $$JSCompiler_prototypeAlias$$$$ReselectNodes$$() {
  for(var $selectedNodes$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $i$$844$$ = 0;$i$$844$$ < $selectedNodes$$.length;$i$$844$$++) {
    $selectedNodes$$[$i$$844$$].$setSelected$($JSCompiler_alias_TRUE$$)
  }
};
$JSCompiler_prototypeAlias$$.$_processInitialSelections$ = function $$JSCompiler_prototypeAlias$$$$_processInitialSelections$$() {
  if(this.$_selectionHandler$ && this.$_initialSelection$) {
    var $targets$$9$$ = $DvtTreeUtils$$.$getAllNodes$(this.$_root$);
    this.$_selectionHandler$.$processInitialSelections$(this.$_initialSelection$, $targets$$9$$);
    this.$_initialSelection$ = $JSCompiler_alias_NULL$$
  }
};
function $JSCompiler_StaticMethods__processInitialHighlighting$$($JSCompiler_StaticMethods__processInitialHighlighting$self$$) {
  var $highlightedCategories$$1$$ = $JSCompiler_StaticMethods__processInitialHighlighting$self$$.$getOptions$().highlightedCategories;
  $highlightedCategories$$1$$ && 0 < $highlightedCategories$$1$$.length && $JSCompiler_StaticMethods__processInitialHighlighting$self$$.$highlight$($highlightedCategories$$1$$)
}
function $JSCompiler_StaticMethods__processInitialFocus$$($JSCompiler_StaticMethods__processInitialFocus$self$$, $applyVisualEffects$$) {
  var $initialFocus$$ = $JSCompiler_alias_NULL$$, $id$$316$$ = $JSCompiler_StaticMethods__processInitialFocus$self$$.$_navigableIdToFocus$;
  $id$$316$$ && ($initialFocus$$ = $DvtTreeNode$getNodeById$$($JSCompiler_StaticMethods__processInitialFocus$self$$.$_root$, $id$$316$$), $JSCompiler_StaticMethods__processInitialFocus$self$$.$_eventHandler$.$setFocus$($initialFocus$$));
  $applyVisualEffects$$ && ($JSCompiler_StaticMethods__processInitialFocus$self$$.$_navigableIdToFocus$ = $JSCompiler_alias_NULL$$);
  $initialFocus$$ || ($initialFocus$$ = $JSCompiler_StaticMethods__processInitialFocus$self$$.$GetInitialFocusedItem$($JSCompiler_StaticMethods__processInitialFocus$self$$.$_root$), $JSCompiler_StaticMethods__processInitialFocus$self$$.$_eventHandler$.$setFocus$($initialFocus$$));
  $applyVisualEffects$$ && $JSCompiler_StaticMethods__processInitialFocus$self$$.$setFocused$($JSCompiler_StaticMethods__processInitialFocus$self$$.$isFocused$())
}
$JSCompiler_prototypeAlias$$.$setFocused$ = function $$JSCompiler_prototypeAlias$$$$setFocused$$($isFocused$$6$$) {
  this.$_hasFocus$ = $isFocused$$6$$;
  this.$_eventHandler$.$setFocused$($isFocused$$6$$)
};
$JSCompiler_prototypeAlias$$.$isFocused$ = $JSCompiler_get$$("$_hasFocus$");
$JSCompiler_prototypeAlias$$.$__getNodeUnderPoint$ = function $$JSCompiler_prototypeAlias$$$$__getNodeUnderPoint$$($x$$295$$, $y$$263$$) {
  return this.$_root$.$getNodeUnderPoint$($x$$295$$, $y$$263$$)
};
$JSCompiler_prototypeAlias$$.$__isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$__isDragAvailable$$($clientIds$$24$$) {
  return this.$_selectionHandler$ ? $clientIds$$24$$[0] : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$__getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$__getDragTransferable$$($node$$307_rowKeys$$4$$) {
  $node$$307_rowKeys$$4$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($node$$307_rowKeys$$4$$, $JSCompiler_alias_FALSE$$), this.$_eventHandler$.$fireSelectionEvent$());
  $node$$307_rowKeys$$4$$ = [];
  for(var $selection$$30$$ = this.$_selectionHandler$.getSelection(), $i$$845$$ = 0;$i$$845$$ < $selection$$30$$.length;$i$$845$$++) {
    $node$$307_rowKeys$$4$$.push($selection$$30$$[$i$$845$$].getId())
  }
  return $node$$307_rowKeys$$4$$
};
$JSCompiler_prototypeAlias$$.$__getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$__getDragFeedback$$() {
  for(var $displayables$$28$$ = [], $selection$$31$$ = this.$_selectionHandler$.getSelection(), $i$$846$$ = 0;$i$$846$$ < $selection$$31$$.length;$i$$846$$++) {
    $displayables$$28$$.push($selection$$31$$[$i$$846$$].$getDisplayable$())
  }
  return $displayables$$28$$
};
$JSCompiler_prototypeAlias$$.$__showDropSiteFeedback$ = function $$JSCompiler_prototypeAlias$$$$__showDropSiteFeedback$$($node$$308_styleDefaults$$4$$) {
  this.$_dropSiteFeedback$ && (this.removeChild(this.$_dropSiteFeedback$), this.$_dropSiteFeedback$ = $JSCompiler_alias_NULL$$);
  if($node$$308_styleDefaults$$4$$ && (this.$_dropSiteFeedback$ = $node$$308_styleDefaults$$4$$.$getDropSiteFeedback$())) {
    $node$$308_styleDefaults$$4$$ = this.$getOptions$().styleDefaults, this.$_dropSiteFeedback$.$setSolidFill$($node$$308_styleDefaults$$4$$._dropSiteFillColor, $node$$308_styleDefaults$$4$$._dropSiteOpacity), this.$_dropSiteFeedback$.$setSolidStroke$($node$$308_styleDefaults$$4$$._dropSiteBorderColor), this.$addChild$(this.$_dropSiteFeedback$)
  }
  return this.$_dropSiteFeedback$
};
$JSCompiler_prototypeAlias$$.$__processBreadcrumbsEvent$ = function $$JSCompiler_prototypeAlias$$$$__processBreadcrumbsEvent$$($event$$722$$) {
  $event$$722$$ instanceof dvt.$BreadcrumbsDrillEvent$ && $JSCompiler_StaticMethods___drill$$(this, $event$$722$$.getId(), $JSCompiler_alias_FALSE$$)
};
function $JSCompiler_StaticMethods___drill$$($JSCompiler_StaticMethods___drill$self$$, $id$$317$$, $bDrillUp$$) {
  $bDrillUp$$ && $JSCompiler_StaticMethods___drill$self$$.$_root$ && $id$$317$$ == $JSCompiler_StaticMethods___drill$self$$.$_root$.getId() && 0 < $JSCompiler_StaticMethods___drill$self$$.$_ancestors$.length ? ($JSCompiler_StaticMethods___drill$self$$.$_navigableIdToFocus$ = $id$$317$$, $JSCompiler_StaticMethods___drill$self$$.dispatchEvent(dvt.$EventFactory$.$newDrillEvent$($JSCompiler_StaticMethods___drill$self$$.$_ancestors$[0].id))) : $bDrillUp$$ || $JSCompiler_StaticMethods___drill$self$$.dispatchEvent(dvt.$EventFactory$.$newDrillEvent$($id$$317$$));
  $JSCompiler_StaticMethods___drill$self$$.$getCtx$().$getTooltipManager$().$hideTooltip$()
}
$JSCompiler_prototypeAlias$$.$getLogicalObject$ = function $$JSCompiler_prototypeAlias$$$$getLogicalObject$$($target$$115$$) {
  return this.$_eventHandler$.$GetLogicalObject$($target$$115$$)
};
$JSCompiler_prototypeAlias$$.$CreateNode$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
$JSCompiler_prototypeAlias$$.$getBundlePrefix$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
$JSCompiler_prototypeAlias$$.$getAutomation$ = function $$JSCompiler_prototypeAlias$$$$getAutomation$$() {
  return new $DvtTreeAutomation$$(this)
};
$DvtTreeView$$.prototype.getAutomation = $DvtTreeView$$.prototype.$getAutomation$;
$JSCompiler_prototypeAlias$$ = $DvtTreeView$$.prototype;
$JSCompiler_prototypeAlias$$.$getBreadcrumbs$ = $JSCompiler_get$$("$_breadcrumbs$");
function $JSCompiler_StaticMethods__processNode$$($JSCompiler_StaticMethods__processNode$self$$, $hiddenCategories$$16$$, $childOptions_nodeOptions$$2$$) {
  if($DvtTreeUtils$$.$isHiddenNode$($hiddenCategories$$16$$, $childOptions_nodeOptions$$2$$)) {
    return $JSCompiler_alias_NULL$$
  }
  var $node$$309$$ = $JSCompiler_StaticMethods__processNode$self$$.$CreateNode$($childOptions_nodeOptions$$2$$);
  if($node$$309$$.$isDisclosed$()) {
    var $childNodes$$24$$ = [];
    $childOptions_nodeOptions$$2$$ = $childOptions_nodeOptions$$2$$.nodes ? $childOptions_nodeOptions$$2$$.nodes : [];
    for(var $childIndex$$11$$ = 0;$childIndex$$11$$ < $childOptions_nodeOptions$$2$$.length;$childIndex$$11$$++) {
      var $childNode$$13_childNodeOptions$$ = $childOptions_nodeOptions$$2$$[$childIndex$$11$$];
      $childNode$$13_childNodeOptions$$._index = $childIndex$$11$$;
      ($childNode$$13_childNodeOptions$$ = $JSCompiler_StaticMethods__processNode$$($JSCompiler_StaticMethods__processNode$self$$, $hiddenCategories$$16$$, $childNode$$13_childNodeOptions$$)) && $childNodes$$24$$.push($childNode$$13_childNodeOptions$$)
    }
    $node$$309$$.$setChildNodes$($childNodes$$24$$)
  }
  return $node$$309$$
}
function $JSCompiler_StaticMethods_UpdateAriaNavigation$$($JSCompiler_StaticMethods_UpdateAriaNavigation$self$$, $root$$16$$) {
  if(dvt.$Agent$.$isTouchDevice$() || dvt.$Agent$.$isEnvironmentTest$()) {
    for(var $nodes$$23$$ = $DvtTreeUtils$$.$getAllVisibleNodes$($root$$16$$), $i$$848$$ = 0;$i$$848$$ < $nodes$$23$$.length - 1;$i$$848$$++) {
      var $id$$319$$ = $JSCompiler_StaticMethods_UpdateAriaNavigation$self$$.getId() + ($nodes$$23$$[$i$$848$$ + 1].getId() ? $nodes$$23$$[$i$$848$$ + 1].getId() : $nodes$$23$$[$i$$848$$ + 1].$getLabel$()), $id$$319$$ = $id$$319$$.replace(/\s+/g, "");
      $nodes$$23$$[$i$$848$$ + 1].$getDisplayable$().setId($id$$319$$, $JSCompiler_alias_TRUE$$);
      $nodes$$23$$[$i$$848$$].$getDisplayable$().$setAriaProperty$("flowto", $id$$319$$)
    }
  }
}
$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($mouseX$$57$$, $mouseY$$57$$, $clientIds$$25$$) {
  return this.$_dragSource$.$isDragAvailable$($clientIds$$25$$)
};
$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$($mouseX$$58$$, $mouseY$$58$$) {
  return this.$_dragSource$.$getDragTransferable$($mouseX$$58$$, $mouseY$$58$$)
};
$JSCompiler_prototypeAlias$$.$getDragOverFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragOverFeedback$$($mouseX$$59$$, $mouseY$$59$$) {
  return this.$_dragSource$.$getDragOverFeedback$($mouseX$$59$$, $mouseY$$59$$)
};
$JSCompiler_prototypeAlias$$.$getDragContext$ = function $$JSCompiler_prototypeAlias$$$$getDragContext$$($mouseX$$60$$, $mouseY$$60$$) {
  return this.$_dragSource$.$getDragContext$($mouseX$$60$$, $mouseY$$60$$)
};
$JSCompiler_prototypeAlias$$.$getDragOffset$ = function $$JSCompiler_prototypeAlias$$$$getDragOffset$$($mouseX$$61$$, $mouseY$$61$$) {
  return this.$_dragSource$.$getDragOffset$($mouseX$$61$$, $mouseY$$61$$)
};
$JSCompiler_prototypeAlias$$.$getPointerOffset$ = function $$JSCompiler_prototypeAlias$$$$getPointerOffset$$($xOffset$$8$$, $yOffset$$11$$) {
  return this.$_dragSource$.$getPointerOffset$($xOffset$$8$$, $yOffset$$11$$)
};
$JSCompiler_prototypeAlias$$.$initiateDrag$ = function $$JSCompiler_prototypeAlias$$$$initiateDrag$$() {
  this.$_dragSource$.$initiateDrag$()
};
$JSCompiler_prototypeAlias$$.$dragDropEnd$ = function $$JSCompiler_prototypeAlias$$$$dragDropEnd$$() {
  this.$_dragSource$.$dragDropEnd$()
};
$JSCompiler_prototypeAlias$$.$acceptDrag$ = function $$JSCompiler_prototypeAlias$$$$acceptDrag$$($mouseX$$62$$, $mouseY$$62$$, $clientIds$$26$$) {
  return this.$_dropTarget$.$acceptDrag$($mouseX$$62$$, $mouseY$$62$$, $clientIds$$26$$)
};
$JSCompiler_prototypeAlias$$.$getDropSite$ = function $$JSCompiler_prototypeAlias$$$$getDropSite$$($mouseX$$63$$, $mouseY$$63$$) {
  return this.$_dropTarget$.$getDropSite$($mouseX$$63$$, $mouseY$$63$$)
};
function $DvtTreeAnimationHandler$$($context$$635$$, $deleteContainer$$13$$) {
  this.Init($context$$635$$, $deleteContainer$$13$$)
}
dvt.$Obj$.$createSubclass$($DvtTreeAnimationHandler$$, dvt.$DataAnimationHandler$);
function $DvtTreeAnimationHandler$_isAncestor$$($ancestors$$6$$, $node$$311$$) {
  if(!$node$$311$$ || !$ancestors$$6$$) {
    return $JSCompiler_alias_FALSE$$
  }
  for(var $i$$849$$ = 0;$i$$849$$ < $ancestors$$6$$.length;$i$$849$$++) {
    if($ancestors$$6$$[$i$$849$$].id == $node$$311$$.getId()) {
      return $JSCompiler_alias_TRUE$$
    }
  }
  return $JSCompiler_alias_FALSE$$
}
function $DvtTreeDropTarget$$($view$$59$$) {
  this.$_view$ = $view$$59$$
}
dvt.$Obj$.$createSubclass$($DvtTreeDropTarget$$, dvt.$DropTarget$);
$DvtTreeDropTarget$$.prototype.$acceptDrag$ = function $$DvtTreeDropTarget$$$$$acceptDrag$$($mouseX$$64_node$$312$$, $mouseY$$64$$, $clientIds$$27$$) {
  if($mouseX$$64_node$$312$$ = this.$_view$.$__getNodeUnderPoint$($mouseX$$64_node$$312$$, $mouseY$$64$$)) {
    $mouseX$$64_node$$312$$ != this.$_dropSite$ && (this.$_view$.$__showDropSiteFeedback$($mouseX$$64_node$$312$$), this.$_dropSite$ = $mouseX$$64_node$$312$$)
  }else {
    return this.$_view$.$__showDropSiteFeedback$($JSCompiler_alias_NULL$$), $JSCompiler_alias_NULL$$
  }
  return $clientIds$$27$$[0]
};
$DvtTreeDropTarget$$.prototype.$getDropSite$ = function $$DvtTreeDropTarget$$$$$getDropSite$$($mouseX$$65$$, $mouseY$$65$$) {
  var $node$$313$$ = this.$_view$.$__getNodeUnderPoint$($mouseX$$65$$, $mouseY$$65$$);
  return $node$$313$$ ? {$clientRowKey$:$node$$313$$.getId()} : $JSCompiler_alias_NULL$$
};
function $DvtTreeEventManager$$($view$$60$$, $context$$636$$, $callback$$163$$, $callbackObj$$119$$) {
  this.Init($context$$636$$, $callback$$163$$, $callbackObj$$119$$);
  this.$_view$ = $view$$60$$
}
dvt.$Obj$.$createSubclass$($DvtTreeEventManager$$, dvt.$EventManager$);
$JSCompiler_prototypeAlias$$ = $DvtTreeEventManager$$.prototype;
$JSCompiler_prototypeAlias$$.$OnDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnDblClickInternal$$($event$$723$$) {
  var $obj$$359$$ = this.$GetLogicalObject$($event$$723$$.target);
  $obj$$359$$ && $obj$$359$$.$isSelectable$ && $obj$$359$$.$isSelectable$() && $JSCompiler_StaticMethods__processDrill$$(this, $obj$$359$$, $event$$723$$.shiftKey)
};
$JSCompiler_prototypeAlias$$.$OnClick$ = function $$JSCompiler_prototypeAlias$$$$OnClick$$($event$$724$$) {
  $DvtTreeEventManager$$.$superclass$.$OnClick$.call(this, $event$$724$$);
  var $obj$$360$$ = this.$GetLogicalObject$($event$$724$$.target);
  $JSCompiler_StaticMethods__processNodeLabel$$(this, $obj$$360$$);
  $obj$$360$$ && (!$obj$$360$$.$isSelectable$ || !$obj$$360$$.$isSelectable$()) && $JSCompiler_StaticMethods__processDrill$$(this, $obj$$360$$, $event$$724$$.shiftKey)
};
$JSCompiler_prototypeAlias$$.$OnMouseOver$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOver$$($event$$725_obj$$361$$) {
  $DvtTreeEventManager$$.$superclass$.$OnMouseOver$.call(this, $event$$725_obj$$361$$);
  ($event$$725_obj$$361$$ = this.$GetLogicalObject$($event$$725_obj$$361$$.target)) && $event$$725_obj$$361$$.$handleMouseOver$ && $event$$725_obj$$361$$.$handleMouseOver$()
};
$JSCompiler_prototypeAlias$$.$OnMouseOut$ = function $$JSCompiler_prototypeAlias$$$$OnMouseOut$$($event$$726_relatedId_relatedObj$$1$$) {
  $DvtTreeEventManager$$.$superclass$.$OnMouseOut$.call(this, $event$$726_relatedId_relatedObj$$1$$);
  var $obj$$362$$ = this.$GetLogicalObject$($event$$726_relatedId_relatedObj$$1$$.target);
  $obj$$362$$ && $obj$$362$$.$handleMouseOut$ && ($event$$726_relatedId_relatedObj$$1$$ = ($event$$726_relatedId_relatedObj$$1$$ = this.$GetLogicalObject$($event$$726_relatedId_relatedObj$$1$$.relatedTarget)) && $event$$726_relatedId_relatedObj$$1$$.getId ? $event$$726_relatedId_relatedObj$$1$$.getId() : $JSCompiler_alias_NULL$$, ($obj$$362$$.getId() == $JSCompiler_alias_NULL$$ || $event$$726_relatedId_relatedObj$$1$$ != $obj$$362$$.getId()) && $obj$$362$$.$handleMouseOut$())
};
$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$727$$) {
  var $eventConsumed$$7_obj$$363$$ = $JSCompiler_alias_FALSE$$, $eventConsumed$$7_obj$$363$$ = this.$getFocus$();
  $event$$727$$.keyCode == dvt.$KeyboardEvent$.$ENTER$ && !$event$$727$$.ctrlKey ? ($eventConsumed$$7_obj$$363$$ = this.$getFocus$(), $eventConsumed$$7_obj$$363$$.$isDrillReplaceEnabled$ && $eventConsumed$$7_obj$$363$$.$isDrillReplaceEnabled$() && ($event$$727$$.shiftKey && ($eventConsumed$$7_obj$$363$$ = this.$_view$.$_root$), $JSCompiler_StaticMethods___drill$$(this.$_view$, $eventConsumed$$7_obj$$363$$.getId(), $event$$727$$.shiftKey)), dvt.$EventManager$.$consumeEvent$($event$$727$$), $eventConsumed$$7_obj$$363$$ = 
  $JSCompiler_alias_TRUE$$) : $eventConsumed$$7_obj$$363$$ = $DvtTreeEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$727$$);
  return $eventConsumed$$7_obj$$363$$
};
$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($event$$728$$) {
  var $obj$$364$$ = this.$GetLogicalObject$($event$$728$$.target);
  $JSCompiler_StaticMethods__processNodeLabel$$(this, $obj$$364$$);
  this.$_currentHoverItem$ && this.$_currentHoverItem$ != $obj$$364$$ && (this.$_currentHoverItem$.$handleMouseOut$(), this.$_currentHoverItem$ = $JSCompiler_alias_NULL$$);
  $obj$$364$$ && ($obj$$364$$ instanceof $DvtTreeNode$$ && this.$_currentHoverItem$ != $obj$$364$$ && (this.$_currentHoverItem$ = $obj$$364$$, $obj$$364$$.$handleMouseOver$()), (!$obj$$364$$.$isSelectable$ || !$obj$$364$$.$isSelectable$()) && $JSCompiler_StaticMethods__processDrill$$(this, $obj$$364$$, $event$$728$$.shiftKey))
};
$JSCompiler_prototypeAlias$$.$HandleTouchDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchDblClickInternal$$($event$$729_obj$$365$$) {
  ($event$$729_obj$$365$$ = this.$GetLogicalObject$($event$$729_obj$$365$$.target)) && $event$$729_obj$$365$$.$isSelectable$ && $event$$729_obj$$365$$.$isSelectable$() && $JSCompiler_StaticMethods__processDrill$$(this, $event$$729_obj$$365$$, $JSCompiler_alias_FALSE$$)
};
function $JSCompiler_StaticMethods__processNodeLabel$$($JSCompiler_StaticMethods__processNodeLabel$self$$, $obj$$366$$) {
  $obj$$366$$ && ($obj$$366$$ instanceof $DvtTreePeer$$ && $obj$$366$$.$isDrillable$()) && $JSCompiler_StaticMethods___drill$$($JSCompiler_StaticMethods__processNodeLabel$self$$.$_view$, $obj$$366$$.getId(), $JSCompiler_alias_FALSE$$)
}
function $JSCompiler_StaticMethods__processDrill$$($JSCompiler_StaticMethods__processDrill$self$$, $obj$$367$$, $shiftKey$$2$$) {
  $obj$$367$$.$isDrillReplaceEnabled$ && $obj$$367$$.$isDrillReplaceEnabled$() && $JSCompiler_StaticMethods___drill$$($JSCompiler_StaticMethods__processDrill$self$$.$_view$, $obj$$367$$.getId(), $shiftKey$$2$$)
}
$JSCompiler_prototypeAlias$$.$ProcessRolloverEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessRolloverEvent$$($event$$730_options$$307$$, $categories$$33_nodes$$24_obj$$368$$, $bOver$$15_rolloverEvent$$8$$) {
  $event$$730_options$$307$$ = this.$_view$.$getOptions$();
  if("dim" == $event$$730_options$$307$$.hoverBehavior) {
    $categories$$33_nodes$$24_obj$$368$$ = $categories$$33_nodes$$24_obj$$368$$.$getCategories$ ? $categories$$33_nodes$$24_obj$$368$$.$getCategories$() : [];
    $event$$730_options$$307$$.highlightedCategories = $bOver$$15_rolloverEvent$$8$$ ? $categories$$33_nodes$$24_obj$$368$$.slice() : $JSCompiler_alias_NULL$$;
    $bOver$$15_rolloverEvent$$8$$ = dvt.$EventFactory$.$newCategoryHighlightEvent$($event$$730_options$$307$$.highlightedCategories, $bOver$$15_rolloverEvent$$8$$);
    $categories$$33_nodes$$24_obj$$368$$ = $DvtTreeUtils$$.$getAllNodes$(this.$_view$.$_root$);
    var $hoverBehaviorDelay$$7$$ = dvt.$StyleUtils$.$getTimeMilliseconds$($event$$730_options$$307$$.hoverBehaviorDelay);
    this.$RolloverHandler$.$processEvent$($bOver$$15_rolloverEvent$$8$$, $categories$$33_nodes$$24_obj$$368$$, $hoverBehaviorDelay$$7$$, "any" == $event$$730_options$$307$$.highlightMatch)
  }
};
$JSCompiler_prototypeAlias$$.$GetTouchResponse$ = function $$JSCompiler_prototypeAlias$$$$GetTouchResponse$$() {
  return this.$_view$.$getOptions$().touchResponse
};
function $DvtTreeNode$$() {
}
dvt.$Obj$.$createSubclass$($DvtTreeNode$$, dvt.$Obj$);
var $DvtTreeNode$__NODE_SELECTED_SHADOW$$ = new dvt.$Shadow$("#000000", 2, 5, 5, 45, 0.5);
$JSCompiler_prototypeAlias$$ = $DvtTreeNode$$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($treeView$$, $props$$21$$) {
  this.$_view$ = $treeView$$;
  this.$_options$ = $props$$21$$;
  var $nodeDefaults$$ = this.$_view$.$getOptions$().nodeDefaults;
  this.$_id$ = $props$$21$$.id || $props$$21$$.label;
  this.$_color$ = $props$$21$$.color ? $props$$21$$.color : "#000000";
  this.$_textStr$ = $props$$21$$.label;
  this.$_labelStyle$ = "string" == typeof $props$$21$$.labelStyle ? new dvt.$CSSStyle$($props$$21$$.labelStyle) : $props$$21$$.labelStyle;
  this.$_pattern$ = $props$$21$$.pattern;
  this.$_selectable$ = $props$$21$$.selectable;
  this.$_shortDesc$ = $props$$21$$.shortDesc ? $props$$21$$.shortDesc : $props$$21$$.tooltip;
  this.$_size$ = $props$$21$$.value;
  this.$_drilling$ = $props$$21$$.drilling ? $props$$21$$.drilling : $nodeDefaults$$.drilling;
  this.$_stampId$ = $props$$21$$.S;
  this.$_bArtificialRoot$ = $props$$21$$.$bArtificialRoot$;
  this.$_alpha$ = 1;
  this.$_lastVisitedChild$ = $JSCompiler_alias_NULL$$;
  this.$IsHover$ = this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$setChildNodes$ = function $$JSCompiler_prototypeAlias$$$$setChildNodes$$($children$$12$$) {
  if($children$$12$$ != $JSCompiler_alias_NULL$$) {
    for(var $i$$850$$ = 0;$i$$850$$ < $children$$12$$.length;$i$$850$$++) {
      $children$$12$$[$i$$850$$].$_parent$ = this
    }
  }
  this.$_children$ = $children$$12$$
};
$JSCompiler_prototypeAlias$$.$getChildNodes$ = function $$JSCompiler_prototypeAlias$$$$getChildNodes$$() {
  return this.$_children$ ? this.$_children$ : []
};
function $JSCompiler_StaticMethods_getDescendantNodes$$($JSCompiler_StaticMethods_getDescendantNodes$self$$) {
  var $descendants$$3$$ = [], $childDescendants$$, $child$$75$$;
  if(!$JSCompiler_StaticMethods_getDescendantNodes$self$$.$hasChildren$()) {
    return $descendants$$3$$
  }
  for(var $i$$851$$ = 0;$i$$851$$ < $JSCompiler_StaticMethods_getDescendantNodes$self$$.$_children$.length;$i$$851$$++) {
    $child$$75$$ = $JSCompiler_StaticMethods_getDescendantNodes$self$$.$_children$[$i$$851$$], $childDescendants$$ = $JSCompiler_StaticMethods_getDescendantNodes$$($child$$75$$), $descendants$$3$$.push($child$$75$$), $descendants$$3$$ = $descendants$$3$$.concat($childDescendants$$)
  }
  return $descendants$$3$$
}
function $JSCompiler_StaticMethods_MarkAsLastVisitedChild$$($JSCompiler_StaticMethods_MarkAsLastVisitedChild$self$$) {
  var $parent$$87$$ = $JSCompiler_StaticMethods_MarkAsLastVisitedChild$self$$.$_parent$;
  $parent$$87$$ && ($parent$$87$$.$_lastVisitedChild$ = $JSCompiler_StaticMethods_MarkAsLastVisitedChild$self$$)
}
$JSCompiler_prototypeAlias$$.$isDescendantOf$ = function $$JSCompiler_prototypeAlias$$$$isDescendantOf$$($node$$314$$) {
  return!$node$$314$$ || !this.$_parent$ ? $JSCompiler_alias_FALSE$$ : this.$_parent$ == $node$$314$$ ? $JSCompiler_alias_TRUE$$ : this.$_parent$.$isDescendantOf$($node$$314$$)
};
function $JSCompiler_StaticMethods_GetNodesAtDepth$$($JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$13$$, $child$$76_root$$17$$, $depth$$20$$) {
  var $returnArray$$ = [];
  if(0 > $depth$$20$$) {
    return $returnArray$$
  }
  if(0 == $depth$$20$$) {
    return[$JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$13$$]
  }
  if($child$$76_root$$17$$.$hasChildren$()) {
    $JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$13$$ = $child$$76_root$$17$$.$getChildNodes$();
    for(var $i$$852$$ = 0;$i$$852$$ < $JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$13$$.length;$i$$852$$++) {
      $child$$76_root$$17$$ = $JSCompiler_StaticMethods_GetNodesAtDepth$self_children$$13$$[$i$$852$$], $returnArray$$ = $returnArray$$.concat($JSCompiler_StaticMethods_GetNodesAtDepth$$($child$$76_root$$17$$, $child$$76_root$$17$$, $depth$$20$$ - 1))
    }
  }
  return $returnArray$$
}
function $DvtTreeNode$getNodeById$$($root$$18$$, $id$$320$$) {
  if($root$$18$$.getId() == $id$$320$$) {
    return $root$$18$$
  }
  for(var $child$$77_node$$315$$ = $JSCompiler_alias_NULL$$, $children$$14$$ = $root$$18$$.$getChildNodes$(), $length$$28$$ = $children$$14$$.length, $child$$77_node$$315$$ = $JSCompiler_alias_NULL$$, $i$$853$$ = 0;$i$$853$$ < $length$$28$$;$i$$853$$++) {
    if($child$$77_node$$315$$ = $children$$14$$[$i$$853$$], $child$$77_node$$315$$ = $DvtTreeNode$getNodeById$$($child$$77_node$$315$$, $id$$320$$)) {
      return $child$$77_node$$315$$
    }
  }
  return $JSCompiler_alias_NULL$$
}
$JSCompiler_prototypeAlias$$.$getOptions$ = $JSCompiler_get$$("$_options$");
$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  if(this.$_bArtificialRoot$) {
    return[]
  }
  var $categories$$34_parent$$88_parentCategories$$1$$ = this.$getOptions$().categories;
  $categories$$34_parent$$88_parentCategories$$1$$ || ($categories$$34_parent$$88_parentCategories$$1$$ = ($categories$$34_parent$$88_parentCategories$$1$$ = ($categories$$34_parent$$88_parentCategories$$1$$ = this.$_parent$) ? $categories$$34_parent$$88_parentCategories$$1$$.$getCategories$() : $JSCompiler_alias_NULL$$) ? $categories$$34_parent$$88_parentCategories$$1$$.slice() : [], $categories$$34_parent$$88_parentCategories$$1$$.push(this.getId()));
  return $categories$$34_parent$$88_parentCategories$$1$$
};
$JSCompiler_prototypeAlias$$.getId = $JSCompiler_get$$("$_id$");
$JSCompiler_prototypeAlias$$.$getSize$ = $JSCompiler_get$$("$_size$");
$JSCompiler_prototypeAlias$$.$getColor$ = $JSCompiler_get$$("$_color$");
$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  var $tooltipFunc$$11$$ = this.$_view$.$getOptions$().tooltip;
  return $tooltipFunc$$11$$ ? this.$_view$.$getCtx$().$getTooltipManager$().$getCustomTooltip$($tooltipFunc$$11$$, this.$getDataContext$()) : this.$_shortDesc$
};
$JSCompiler_prototypeAlias$$.$getDatatipColor$ = $JSCompiler_get$$("$_color$");
$JSCompiler_prototypeAlias$$.$getShortDesc$ = $JSCompiler_get$$("$_shortDesc$");
$JSCompiler_prototypeAlias$$.$getDataContext$ = function $$JSCompiler_prototypeAlias$$$$getDataContext$$() {
  return{id:this.getId(), label:this.$getLabel$(), value:this.$getSize$(), color:this.$getColor$()}
};
$JSCompiler_prototypeAlias$$.$getIndex$ = function $$JSCompiler_prototypeAlias$$$$getIndex$$() {
  return this.$getOptions$()._index
};
$JSCompiler_prototypeAlias$$.$getAlpha$ = $JSCompiler_get$$("$_alpha$");
$JSCompiler_prototypeAlias$$.$setAlpha$ = function $$JSCompiler_prototypeAlias$$$$setAlpha$$($alpha$$52$$) {
  this.$_alpha$ = $alpha$$52$$;
  this.$_shape$ && this.$_shape$.$setAlpha$(this.$_alpha$)
};
$JSCompiler_prototypeAlias$$.$setDisclosed$ = function $$JSCompiler_prototypeAlias$$$$setDisclosed$$($disclosed$$6$$) {
  this.$getOptions$()._expanded = $disclosed$$6$$
};
$JSCompiler_prototypeAlias$$.$isDisclosed$ = function $$JSCompiler_prototypeAlias$$$$isDisclosed$$() {
  return this.$getOptions$()._expanded !== $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$isDrillReplaceEnabled$ = function $$JSCompiler_prototypeAlias$$$$isDrillReplaceEnabled$$() {
  return"replace" == this.$_drilling$ || "insertAndReplace" == this.$_drilling$
};
$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$() {
  var $behaviors$$10$$ = this.$_view$.$getOptions$()._spb;
  return!$behaviors$$10$$ || !$behaviors$$10$$[this.$_stampId$] ? $JSCompiler_alias_NULL$$ : dvt.$ShowPopupBehavior$.$createBehaviors$($behaviors$$10$$[this.$_stampId$])
};
$JSCompiler_prototypeAlias$$.$render$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$renderChildren$ = function $$JSCompiler_prototypeAlias$$$$renderChildren$$($container$$214$$) {
  var $children$$15$$ = this.$getChildNodes$();
  if($children$$15$$ != $JSCompiler_alias_NULL$$) {
    for(var $i$$854$$ = 0;$i$$854$$ < $children$$15$$.length;$i$$854$$++) {
      $children$$15$$[$i$$854$$].$render$($container$$214$$)
    }
  }
};
$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$() {
  $JSCompiler_StaticMethods_MarkAsLastVisitedChild$$(this);
  return this
};
$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return new dvt.$Rectangle$(0, 0, 0, 0)
};
$JSCompiler_prototypeAlias$$.$getTargetElem$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$();
  this.$handleMouseOver$ && this.$handleMouseOver$()
};
$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ && (this.$_isShowingKeyboardFocusEffect$ = $JSCompiler_alias_FALSE$$, this.$hideHoverEffect$());
  this.$handleMouseOut$ && this.$handleMouseOut$()
};
$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = $JSCompiler_get$$("$_isShowingKeyboardFocusEffect$");
$JSCompiler_prototypeAlias$$.$handleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOver$$() {
  this.$IsHover$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$handleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOut$$() {
  this.$IsHover$ = $JSCompiler_alias_FALSE$$
};
$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return"off" != this.$_selectable$ && this.$_view$.$_nodeSelection$ != $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$isSelected$ = $JSCompiler_get$$("$_selected$");
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$46$$) {
  this.$_selected$ = $selected$$46$$;
  this.$UpdateAriaLabel$()
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$highlight$ = function $$JSCompiler_prototypeAlias$$$$highlight$$($bDimmed$$3$$, $alpha$$53$$) {
  this.$setAlpha$($alpha$$53$$)
};
$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$28$$) {
  return this.$_view$.$__isDragAvailable$($clientIds$$28$$)
};
$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  return this.$_view$.$__getDragTransferable$(this)
};
$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_view$.$__getDragFeedback$()
};
$JSCompiler_prototypeAlias$$.$getDropSiteFeedback$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
$JSCompiler_prototypeAlias$$.$getPopupBounds$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
$JSCompiler_prototypeAlias$$.contains = $JSCompiler_returnArg$$($JSCompiler_alias_FALSE$$);
$JSCompiler_prototypeAlias$$.$getNodeUnderPoint$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  return[]
};
$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = $JSCompiler_emptyFn$$();
$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$64$$, $oldNode$$18$$) {
  $handler$$64$$.$_bDrill$ || $handler$$64$$.$constructAnimation$($oldNode$$18$$.$getChildNodes$(), this.$getChildNodes$());
  var $bSizeChanged_endState$$17$$ = this.$GetAnimationParams$(), $animationUpdateColor_startState$$8$$ = $oldNode$$18$$.$GetAnimationParams$($bSizeChanged_endState$$17$$), $bColorChanged_nodePlayable$$29$$;
  if(!dvt.$ArrayUtils$.$equals$($animationUpdateColor_startState$$8$$, $bSizeChanged_endState$$17$$) && ($bColorChanged_nodePlayable$$29$$ = new dvt.$CustomAnimation$(this.$_view$.$getCtx$(), this, this.$_view$.$AnimationDuration$), $bColorChanged_nodePlayable$$29$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, this, this.$GetAnimationParams$, this.$SetAnimationParams$, $bSizeChanged_endState$$17$$), $handler$$64$$.add($bColorChanged_nodePlayable$$29$$, 1), $bSizeChanged_endState$$17$$ = 
  this.$_size$ != $oldNode$$18$$.$_size$, $bColorChanged_nodePlayable$$29$$ = dvt.$ColorUtils$.$getRGBA$(this.$_color$) != dvt.$ColorUtils$.$getRGBA$($oldNode$$18$$.$_color$), this.$SetAnimationParams$($animationUpdateColor_startState$$8$$), ($animationUpdateColor_startState$$8$$ = this.$_view$.$getOptions$().animationUpdateColor) && ($bSizeChanged_endState$$17$$ || $bColorChanged_nodePlayable$$29$$))) {
    this.$_color$ = $animationUpdateColor_startState$$8$$
  }
};
$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$65$$) {
  if(!$handler$$65$$.$_bDrill$ || !$handler$$65$$.$_bDrill$ || !($handler$$65$$.$_oldRoot$.getId() == this.getId() || $DvtTreeAnimationHandler$_isAncestor$$($handler$$65$$.$_oldAncestors$, this))) {
    this.$setAlpha$(0);
    var $anim$$43_i$$855$$ = new dvt.$AnimFadeIn$(this.$_view$.$getCtx$(), this, this.$_view$.$AnimationDuration$);
    $handler$$65$$.add($anim$$43_i$$855$$, 2);
    if(this.$hasChildren$()) {
      for($anim$$43_i$$855$$ = 0;$anim$$43_i$$855$$ < this.$_children$.length;$anim$$43_i$$855$$++) {
        this.$_children$[$anim$$43_i$$855$$].$animateInsert$($handler$$65$$)
      }
    }
  }
};
$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$66$$, $container$$215$$) {
  $container$$215$$.$addChild$(this.$_shape$);
  var $anim$$44_i$$856$$ = new dvt.$AnimFadeOut$(this.$_view$.$getCtx$(), this, this.$_view$.$AnimationDuration$);
  $handler$$66$$.add($anim$$44_i$$856$$, 0);
  if(!$handler$$66$$.$_bDrill$ && this.$hasChildren$()) {
    for($anim$$44_i$$856$$ = 0;$anim$$44_i$$856$$ < this.$_children$.length;$anim$$44_i$$856$$++) {
      this.$_children$[$anim$$44_i$$856$$].$animateDelete$($handler$$66$$, $container$$215$$)
    }
  }
};
$JSCompiler_prototypeAlias$$.$hasChildren$ = function $$JSCompiler_prototypeAlias$$$$hasChildren$$() {
  return this.$_children$ != $JSCompiler_alias_NULL$$ && 0 < this.$_children$.length
};
function $JSCompiler_StaticMethods_GetDepth$$($JSCompiler_StaticMethods_GetDepth$self_parent$$89$$) {
  var $depth$$21$$ = 0;
  for($JSCompiler_StaticMethods_GetDepth$self_parent$$89$$ = $JSCompiler_StaticMethods_GetDepth$self_parent$$89$$.$_parent$;$JSCompiler_StaticMethods_GetDepth$self_parent$$89$$;) {
    $depth$$21$$++, $JSCompiler_StaticMethods_GetDepth$self_parent$$89$$ = $JSCompiler_StaticMethods_GetDepth$self_parent$$89$$.$_parent$
  }
  return $depth$$21$$
}
$JSCompiler_prototypeAlias$$.$GetFill$ = function $$JSCompiler_prototypeAlias$$$$GetFill$$() {
  return this.$_pattern$ ? new dvt.$PatternFill$(this.$_pattern$, this.$_color$) : new dvt.$SolidFill$(this.$_color$)
};
function $JSCompiler_StaticMethods_ApplyLabelTextStyle$$($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$, $text$$108$$) {
  var $defaultFillColor$$ = $JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_pattern$ ? "#000000" : dvt.$ColorUtils$.$getContrastingTextColor$($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_color$);
  $text$$108$$.$setSolidFill$($defaultFillColor$$);
  var $textStyle$$8$$ = [];
  $textStyle$$8$$.push($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_view$.$getOptions$().nodeDefaults.labelStyle);
  $JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_labelStyle$ && $textStyle$$8$$.push($JSCompiler_StaticMethods_ApplyLabelTextStyle$self$$.$_labelStyle$);
  $text$$108$$.$setCSSStyle$(dvt.$CSSStyle$.$mergeStyles$($textStyle$$8$$));
  dvt.$Agent$.$isHighContrast$() && $text$$108$$.$setSolidFill$($defaultFillColor$$)
}
function $JSCompiler_StaticMethods_GetTextSize$$($JSCompiler_StaticMethods_GetTextSize$self_fontSize$$14$$) {
  var $size$$52$$ = 11;
  ($JSCompiler_StaticMethods_GetTextSize$self_fontSize$$14$$ = $JSCompiler_StaticMethods_GetTextSize$self_fontSize$$14$$.$_view$.$getOptions$().nodeDefaults.labelStyle.$getFontSize$()) && ($size$$52$$ = parseFloat($JSCompiler_StaticMethods_GetTextSize$self_fontSize$$14$$));
  return $size$$52$$
}
$JSCompiler_prototypeAlias$$.$getDisplayable$ = $JSCompiler_get$$("$_shape$");
$JSCompiler_prototypeAlias$$.$getLabel$ = $JSCompiler_get$$("$_textStr$");
function $JSCompiler_StaticMethods_GetTemplate$$($JSCompiler_StaticMethods_GetTemplate$self$$) {
  return $JSCompiler_StaticMethods_GetTemplate$self$$.$_view$.$_templates$ ? $JSCompiler_StaticMethods_GetTemplate$self$$.$_view$.$_templates$[$JSCompiler_StaticMethods_GetTemplate$self$$.$_stampId$] : $JSCompiler_alias_NULL$$
}
$JSCompiler_prototypeAlias$$.$isDoubleClickable$ = function $$JSCompiler_prototypeAlias$$$$isDoubleClickable$$() {
  return this.$isDrillReplaceEnabled$()
};
$JSCompiler_prototypeAlias$$.$UpdateAriaLabel$ = $JSCompiler_emptyFn$$();
function $DvtTreePeer$$($node$$317$$, $id$$321$$, $tooltip$$48$$, $datatip$$20$$, $datatipColor$$3$$) {
  this.Init($tooltip$$48$$, $datatip$$20$$, $datatipColor$$3$$);
  this.$_node$ = $node$$317$$;
  this.$_id$ = $id$$321$$;
  this.$_bDrillable$ = $JSCompiler_alias_FALSE$$
}
dvt.$Obj$.$createSubclass$($DvtTreePeer$$, dvt.$SimpleObjPeer$);
$JSCompiler_prototypeAlias$$ = $DvtTreePeer$$.prototype;
$JSCompiler_prototypeAlias$$.getId = $JSCompiler_get$$("$_id$");
$JSCompiler_prototypeAlias$$.$isDrillable$ = $JSCompiler_get$$("$_bDrillable$");
$JSCompiler_prototypeAlias$$.$setDrillable$ = $JSCompiler_set$$("$_bDrillable$");
$JSCompiler_prototypeAlias$$.$handleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOver$$() {
  this.$_node$ && this.$_node$.$handleMouseOver$ && this.$_node$.$handleMouseOver$()
};
$JSCompiler_prototypeAlias$$.$handleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOut$$() {
  this.$_node$ && this.$_node$.$handleMouseOut$ && this.$_node$.$handleMouseOut$()
};
function $DvtTreeBreadcrumbsRenderer$$() {
}
dvt.$Obj$.$createSubclass$($DvtTreeBreadcrumbsRenderer$$, dvt.$Obj$);
$DvtTreeBreadcrumbsRenderer$$.$_COMPONENT_GAP$ = 6;
$DvtTreeBreadcrumbsRenderer$$.$_ENABLED_INLINE_STYLE$ = "color: #003286;";
$DvtTreeBreadcrumbsRenderer$$.$render$ = function $$DvtTreeBreadcrumbsRenderer$$$$render$$($treeView$$1$$, $availSpace$$131$$, $ancestors$$7_dataItems$$3$$, $dims$$70_height$$146_rootLabel$$1$$) {
  var $breadcrumbs$$5_context$$637$$ = $treeView$$1$$.$getCtx$(), $disabledStyle_styleDefaults$$5$$ = $treeView$$1$$.$getOptions$().styleDefaults, $enabledStyle$$1_enabledStyleArray$$ = [];
  $enabledStyle$$1_enabledStyleArray$$.push(new dvt.$CSSStyle$($DvtTreeBreadcrumbsRenderer$$.$_ENABLED_INLINE_STYLE$));
  $enabledStyle$$1_enabledStyleArray$$.push($disabledStyle_styleDefaults$$5$$._drillTextStyle);
  var $enabledStyle$$1_enabledStyleArray$$ = dvt.$CSSStyle$.$mergeStyles$($enabledStyle$$1_enabledStyleArray$$).toString(), $enabledStyleOver$$ = $enabledStyle$$1_enabledStyleArray$$ + "text-decoration: underline;", $disabledStyleArray$$ = [];
  $disabledStyleArray$$.push($disabledStyle_styleDefaults$$5$$._currentTextStyle);
  $disabledStyle_styleDefaults$$5$$ = dvt.$CSSStyle$.$mergeStyles$($disabledStyleArray$$).toString();
  $breadcrumbs$$5_context$$637$$ = new dvt.$Breadcrumbs$($breadcrumbs$$5_context$$637$$, $treeView$$1$$.$__processBreadcrumbsEvent$, $treeView$$1$$, {$labelStyle$:$enabledStyle$$1_enabledStyleArray$$, $labelStyleOver$:$enabledStyleOver$$, $labelStyleDown$:$enabledStyleOver$$, $disabledLabelStyle$:$disabledStyle_styleDefaults$$5$$});
  $treeView$$1$$.$addChild$($breadcrumbs$$5_context$$637$$);
  $ancestors$$7_dataItems$$3$$ = $ancestors$$7_dataItems$$3$$.slice(0).reverse();
  $ancestors$$7_dataItems$$3$$.push({label:$dims$$70_height$$146_rootLabel$$1$$});
  $breadcrumbs$$5_context$$637$$.$render$({items:$ancestors$$7_dataItems$$3$$}, $availSpace$$131$$.$w$);
  $dims$$70_height$$146_rootLabel$$1$$ = $breadcrumbs$$5_context$$637$$.$getDimensions$();
  $breadcrumbs$$5_context$$637$$.$setTranslate$($availSpace$$131$$.x, $availSpace$$131$$.y);
  $dims$$70_height$$146_rootLabel$$1$$ = $dims$$70_height$$146_rootLabel$$1$$.$h$ + $DvtTreeBreadcrumbsRenderer$$.$_COMPONENT_GAP$;
  $availSpace$$131$$.y += $dims$$70_height$$146_rootLabel$$1$$;
  $availSpace$$131$$.$h$ -= $dims$$70_height$$146_rootLabel$$1$$;
  $treeView$$1$$.removeChild($breadcrumbs$$5_context$$637$$);
  return $breadcrumbs$$5_context$$637$$
};
function $DvtTreeLegendRenderer$$() {
}
dvt.$Obj$.$createSubclass$($DvtTreeLegendRenderer$$, dvt.$Obj$);
$DvtTreeLegendRenderer$$.$_LEGEND_GAP$ = 4;
$DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$ = 7;
$DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$ = 24;
$DvtTreeLegendRenderer$$.$_LABEL_SIZE$ = 11;
$DvtTreeLegendRenderer$$.$_LABEL_COLOR$ = "#636363";
$DvtTreeLegendRenderer$$.$_LABEL_INLINE_STYLE$ = "color:" + $DvtTreeLegendRenderer$$.$_LABEL_COLOR$ + ";";
$DvtTreeLegendRenderer$$.$render$ = function $$DvtTreeLegendRenderer$$$$render$$($treeView$$2$$, $availSpace$$132$$, $attrGroups$$6_legendDims$$) {
  var $colorContainer$$2_options$$309$$ = $treeView$$2$$.$getOptions$(), $colorSpace_sizeValueStr$$ = $colorContainer$$2_options$$309$$.sizeLabel, $colorValueStr$$ = $colorContainer$$2_options$$309$$.colorLabel;
  if(!($colorSpace_sizeValueStr$$ == $JSCompiler_alias_NULL$$ && $colorValueStr$$ == $JSCompiler_alias_NULL$$ && $attrGroups$$6_legendDims$$ == $JSCompiler_alias_NULL$$)) {
    var $context$$638$$ = $treeView$$2$$.$getCtx$(), $eventManager$$34_labelSpace$$2$$ = $treeView$$2$$.$getEventManager$(), $legend$$32$$ = new dvt.$Container$($context$$638$$);
    $treeView$$2$$.$addChild$($legend$$32$$);
    var $labelContainer$$ = $DvtTreeLegendRenderer$$.$_renderLabels$($context$$638$$, $treeView$$2$$, $legend$$32$$, $availSpace$$132$$.$w$, $colorSpace_sizeValueStr$$, $colorValueStr$$, $attrGroups$$6_legendDims$$), $borderColor$$63_legendStyles$$ = dvt.$CSSStyle$.$afterSkinAlta$($treeView$$2$$.$getOptions$().skin) ? $JSCompiler_alias_NULL$$ : "#000000", $labelDims$$13_legendStyleArray$$ = [];
    $labelDims$$13_legendStyleArray$$.push($colorContainer$$2_options$$309$$.styleDefaults._labelStyle);
    var $borderColor$$63_legendStyles$$ = {borderColor:$borderColor$$63_legendStyles$$, $labelStyle$:dvt.$CSSStyle$.$mergeStyles$($labelDims$$13_legendStyleArray$$)}, $colorContainer$$2_options$$309$$ = dvt.$LegendAttrGroupsRenderer$.$renderAttrGroups$($context$$638$$, $eventManager$$34_labelSpace$$2$$, $legend$$32$$, $availSpace$$132$$.$w$, $availSpace$$132$$.$h$, $attrGroups$$6_legendDims$$, $borderColor$$63_legendStyles$$), $labelDims$$13_legendStyleArray$$ = $labelContainer$$ ? $labelContainer$$.$getDimensions$() : 
    $JSCompiler_alias_NULL$$, $colorDims$$ = $colorContainer$$2_options$$309$$ ? $colorContainer$$2_options$$309$$.$getDimensions$() : $JSCompiler_alias_NULL$$;
    if($labelContainer$$ && !$colorContainer$$2_options$$309$$) {
      $labelContainer$$.$setTranslateX$($availSpace$$132$$.y + ($availSpace$$132$$.$w$ - $labelDims$$13_legendStyleArray$$.$w$) / 2)
    }else {
      if($colorContainer$$2_options$$309$$ && !$labelContainer$$) {
        $colorContainer$$2_options$$309$$.$setTranslateX$($availSpace$$132$$.y + ($availSpace$$132$$.$w$ - $colorDims$$.$w$) / 2)
      }else {
        if($colorContainer$$2_options$$309$$ && $labelContainer$$) {
          var $availWidth$$17$$ = $availSpace$$132$$.$w$ - $DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$;
          $labelDims$$13_legendStyleArray$$.$w$ + $colorDims$$.$w$ > $availWidth$$17$$ && ($labelDims$$13_legendStyleArray$$.$w$ > $availWidth$$17$$ / 2 && $colorDims$$.$w$ > $availWidth$$17$$ / 2 ? ($legend$$32$$.removeChild($labelContainer$$), $legend$$32$$.removeChild($colorContainer$$2_options$$309$$), $labelContainer$$ = $DvtTreeLegendRenderer$$.$_renderLabels$($context$$638$$, $treeView$$2$$, $legend$$32$$, $availWidth$$17$$ / 2, $colorSpace_sizeValueStr$$, $colorValueStr$$, $attrGroups$$6_legendDims$$), 
          $colorContainer$$2_options$$309$$ = dvt.$LegendAttrGroupsRenderer$.$renderAttrGroups$($context$$638$$, $eventManager$$34_labelSpace$$2$$, $legend$$32$$, $availWidth$$17$$ / 2, $availSpace$$132$$.$h$, $attrGroups$$6_legendDims$$, $borderColor$$63_legendStyles$$)) : $labelDims$$13_legendStyleArray$$.$w$ > $colorDims$$.$w$ ? ($eventManager$$34_labelSpace$$2$$ = $availWidth$$17$$ - $colorDims$$.$w$, $legend$$32$$.removeChild($labelContainer$$), $labelContainer$$ = $DvtTreeLegendRenderer$$.$_renderLabels$($context$$638$$, 
          $treeView$$2$$, $legend$$32$$, $eventManager$$34_labelSpace$$2$$, $colorSpace_sizeValueStr$$, $colorValueStr$$, $attrGroups$$6_legendDims$$)) : ($colorSpace_sizeValueStr$$ = $availWidth$$17$$ - $labelDims$$13_legendStyleArray$$.$w$, $legend$$32$$.removeChild($colorContainer$$2_options$$309$$), $colorContainer$$2_options$$309$$ = dvt.$LegendAttrGroupsRenderer$.$renderAttrGroups$($context$$638$$, $eventManager$$34_labelSpace$$2$$, $legend$$32$$, $colorSpace_sizeValueStr$$, $availSpace$$132$$.$h$, 
          $attrGroups$$6_legendDims$$, $borderColor$$63_legendStyles$$)), $labelDims$$13_legendStyleArray$$ = $labelContainer$$.$getDimensions$(), $colorDims$$ = $colorContainer$$2_options$$309$$.$getDimensions$());
          dvt.$Agent$.$isRightToLeft$($context$$638$$) ? ($colorContainer$$2_options$$309$$.$setTranslateX$($availSpace$$132$$.x), $labelContainer$$.$setTranslateX$($availSpace$$132$$.x + $availSpace$$132$$.$w$ - $labelDims$$13_legendStyleArray$$.$w$)) : ($labelContainer$$.$setTranslateX$($availSpace$$132$$.x), $colorContainer$$2_options$$309$$.$setTranslateX$($availSpace$$132$$.x + $availSpace$$132$$.$w$ - $colorDims$$.$w$))
        }
      }
    }
    $attrGroups$$6_legendDims$$ = $legend$$32$$.$getDimensions$();
    $legend$$32$$.$setTranslateY$($availSpace$$132$$.y + $availSpace$$132$$.$h$ - $attrGroups$$6_legendDims$$.$h$);
    $availSpace$$132$$.$h$ -= $attrGroups$$6_legendDims$$.$h$ + $DvtTreeLegendRenderer$$.$_LEGEND_GAP$;
    $treeView$$2$$.removeChild($legend$$32$$);
    return $legend$$32$$
  }
};
$DvtTreeLegendRenderer$$.$_renderLabels$ = function $$DvtTreeLegendRenderer$$$$_renderLabels$$($context$$639_widthPerSection$$, $treeView$$3$$, $attrTypeStyle_legend$$33$$, $availWidth$$18_x$$298$$, $sizeValueStr$$1$$, $colorValueStr$$1$$) {
  var $isRTL$$64$$ = dvt.$Agent$.$isRightToLeft$($context$$639_widthPerSection$$), $eventManager$$35$$ = $treeView$$3$$.$getEventManager$(), $attrValueStyle_styleDefaults$$6$$ = $treeView$$3$$.$getOptions$().styleDefaults, $labelContainer$$1$$ = $JSCompiler_alias_NULL$$;
  if($sizeValueStr$$1$$ || $colorValueStr$$1$$) {
    $labelContainer$$1$$ = new dvt.$Container$($context$$639_widthPerSection$$);
    $attrTypeStyle_legend$$33$$.$addChild$($labelContainer$$1$$);
    var $sizeWidth_textStyle$$10$$ = [];
    $sizeWidth_textStyle$$10$$.push($attrValueStyle_styleDefaults$$6$$._attributeTypeTextStyle);
    $attrTypeStyle_legend$$33$$ = dvt.$CSSStyle$.$mergeStyles$($sizeWidth_textStyle$$10$$);
    $sizeWidth_textStyle$$10$$ = [];
    $sizeWidth_textStyle$$10$$.push($attrValueStyle_styleDefaults$$6$$._attributeValueTextStyle);
    var $attrValueStyle_styleDefaults$$6$$ = dvt.$CSSStyle$.$mergeStyles$($sizeWidth_textStyle$$10$$), $sizeLabel_sizeStr$$, $sizeValueLabel$$, $sizeLabelWidth$$, $sizeValueLabelWidth$$, $sizeWidth_textStyle$$10$$ = 0;
    $sizeValueStr$$1$$ && ($sizeLabel_sizeStr$$ = dvt.$Bundle$.$getTranslation$($treeView$$3$$.$getOptions$(), "labelSize", $treeView$$3$$.$getBundlePrefix$(), "SIZE"), $sizeLabel_sizeStr$$ = new dvt.$OutputText$($context$$639_widthPerSection$$, $sizeLabel_sizeStr$$, 0, 0), $sizeLabel_sizeStr$$.$setCSSStyle$($attrTypeStyle_legend$$33$$), $labelContainer$$1$$.$addChild$($sizeLabel_sizeStr$$), $sizeLabelWidth$$ = $sizeLabel_sizeStr$$.$measureDimensions$().$w$, $sizeValueLabel$$ = new dvt.$OutputText$($context$$639_widthPerSection$$, 
    $sizeValueStr$$1$$, 0, 0), $sizeValueLabel$$.$setCSSStyle$($attrValueStyle_styleDefaults$$6$$), $labelContainer$$1$$.$addChild$($sizeValueLabel$$), $sizeValueLabelWidth$$ = $sizeValueLabel$$.$measureDimensions$().$w$, $sizeWidth_textStyle$$10$$ = $sizeLabelWidth$$ + $sizeValueLabelWidth$$ + $DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$);
    var $colorLabel_colorStr$$1$$, $colorValueLabel$$, $colorLabelWidth$$, $colorValueLabelWidth$$, $colorWidth$$ = 0;
    $colorValueStr$$1$$ && ($colorLabel_colorStr$$1$$ = dvt.$Bundle$.$getTranslation$($treeView$$3$$.$getOptions$(), "labelColor", $treeView$$3$$.$getBundlePrefix$(), "COLOR"), $colorLabel_colorStr$$1$$ = new dvt.$OutputText$($context$$639_widthPerSection$$, $colorLabel_colorStr$$1$$, 0, 0), $colorLabel_colorStr$$1$$.$setCSSStyle$($attrTypeStyle_legend$$33$$), $labelContainer$$1$$.$addChild$($colorLabel_colorStr$$1$$), $colorLabelWidth$$ = $colorLabel_colorStr$$1$$.$measureDimensions$().$w$, $colorValueLabel$$ = 
    new dvt.$OutputText$($context$$639_widthPerSection$$, $colorValueStr$$1$$, 0, 0), $colorValueLabel$$.$setCSSStyle$($attrValueStyle_styleDefaults$$6$$), $labelContainer$$1$$.$addChild$($colorValueLabel$$), $colorValueLabelWidth$$ = $colorValueLabel$$.$measureDimensions$().$w$, $colorWidth$$ = $colorLabelWidth$$ + $colorValueLabelWidth$$ + $DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$);
    $availWidth$$18_x$$298$$ -= $DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$;
    $sizeWidth_textStyle$$10$$ + $colorWidth$$ > $availWidth$$18_x$$298$$ && ($context$$639_widthPerSection$$ = $availWidth$$18_x$$298$$ / 2, $sizeWidth_textStyle$$10$$ > $context$$639_widthPerSection$$ && $colorWidth$$ > $context$$639_widthPerSection$$ ? (dvt.$TextUtils$.$fitText$($sizeValueLabel$$, $context$$639_widthPerSection$$ - $sizeLabelWidth$$ - $DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, Infinity, $labelContainer$$1$$) ? ($sizeValueLabelWidth$$ = $sizeValueLabel$$.$measureDimensions$().$w$, 
    $eventManager$$35$$.$associate$($sizeValueLabel$$, new dvt.$SimpleObjPeer$($sizeValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($sizeLabel_sizeStr$$), $labelContainer$$1$$.removeChild($sizeValueLabel$$), $sizeValueLabel$$ = $JSCompiler_alias_NULL$$, $sizeValueLabelWidth$$ = 0), dvt.$TextUtils$.$fitText$($colorValueLabel$$, $context$$639_widthPerSection$$ - $colorLabelWidth$$ - $DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, Infinity, $labelContainer$$1$$) ? ($colorValueLabelWidth$$ = $colorValueLabel$$.$measureDimensions$().$w$, 
    $eventManager$$35$$.$associate$($colorValueLabel$$, new dvt.$SimpleObjPeer$($colorValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($colorLabel_colorStr$$1$$), $labelContainer$$1$$.removeChild($colorValueLabel$$), $colorValueLabel$$ = $JSCompiler_alias_NULL$$, $colorValueLabelWidth$$ = 0)) : $sizeWidth_textStyle$$10$$ > $colorWidth$$ ? dvt.$TextUtils$.$fitText$($sizeValueLabel$$, $availWidth$$18_x$$298$$ - $colorWidth$$ - $sizeLabelWidth$$ - $DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, Infinity, 
    $labelContainer$$1$$) ? ($sizeValueLabelWidth$$ = $sizeValueLabel$$.$measureDimensions$().$w$, $eventManager$$35$$.$associate$($sizeValueLabel$$, new dvt.$SimpleObjPeer$($sizeValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($sizeLabel_sizeStr$$), $labelContainer$$1$$.removeChild($sizeValueLabel$$), $sizeValueLabel$$ = $JSCompiler_alias_NULL$$, $sizeValueLabelWidth$$ = 0) : dvt.$TextUtils$.$fitText$($colorValueLabel$$, $availWidth$$18_x$$298$$ - $sizeWidth_textStyle$$10$$ - $colorLabelWidth$$ - 
    $DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, Infinity, $labelContainer$$1$$) ? ($colorValueLabelWidth$$ = $colorValueLabel$$.$measureDimensions$().$w$, $eventManager$$35$$.$associate$($colorValueLabel$$, new dvt.$SimpleObjPeer$($colorValueStr$$1$$))) : ($labelContainer$$1$$.removeChild($colorLabel_colorStr$$1$$), $labelContainer$$1$$.removeChild($colorValueLabel$$), $colorValueLabel$$ = $JSCompiler_alias_NULL$$, $colorValueLabelWidth$$ = 0));
    $availWidth$$18_x$$298$$ = 0;
    $isRTL$$64$$ ? ($colorValueLabel$$ && ($colorValueLabel$$.$setX$($availWidth$$18_x$$298$$), $availWidth$$18_x$$298$$ += $colorValueLabelWidth$$ + $DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, $colorLabel_colorStr$$1$$.$setX$($availWidth$$18_x$$298$$), $availWidth$$18_x$$298$$ += $colorLabelWidth$$ + $DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$), $sizeValueLabel$$ && ($sizeValueLabel$$.$setX$($availWidth$$18_x$$298$$), $availWidth$$18_x$$298$$ += $sizeValueLabelWidth$$ + $DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, 
    $sizeLabel_sizeStr$$.$setX$($availWidth$$18_x$$298$$))) : ($sizeValueLabel$$ && ($sizeLabel_sizeStr$$.$setX$($availWidth$$18_x$$298$$), $availWidth$$18_x$$298$$ += $sizeLabelWidth$$ + $DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, $sizeValueLabel$$.$setX$($availWidth$$18_x$$298$$), $availWidth$$18_x$$298$$ += $sizeValueLabelWidth$$ + $DvtTreeLegendRenderer$$.$_LEGEND_SECTION_GAP$), $colorValueLabel$$ && ($colorLabel_colorStr$$1$$.$setX$($availWidth$$18_x$$298$$), $availWidth$$18_x$$298$$ += $colorLabelWidth$$ + 
    $DvtTreeLegendRenderer$$.$_LEGEND_LABEL_GAP$, $colorValueLabel$$.$setX$($availWidth$$18_x$$298$$)))
  }
  return $labelContainer$$1$$
};
function $DvtTreeKeyboardHandler$$($manager$$35$$) {
  this.Init($manager$$35$$)
}
dvt.$Obj$.$createSubclass$($DvtTreeKeyboardHandler$$, dvt.$KeyboardHandler$);
$DvtTreeKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtTreeKeyboardHandler$$$$$isSelectionEvent$$($event$$732$$) {
  return this.$isNavigationEvent$($event$$732$$) && !$event$$732$$.ctrlKey
};
$DvtTreeKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtTreeKeyboardHandler$$$$$isMultiSelectEvent$$($event$$733$$) {
  return $event$$733$$.keyCode == dvt.$KeyboardEvent$.$SPACE$ && $event$$733$$.ctrlKey
};
function $DvtTreeDefaults$$() {
}
dvt.$Obj$.$createSubclass$($DvtTreeDefaults$$, dvt.$BaseComponentDefaults$);
var $DvtTreeDefaults$VERSION_1$$ = {skin:dvt.$CSSStyle$.$SKIN_ALTA$, animationDuration:500, animationOnDataChange:"none", animationOnDisplay:"none", highlightMatch:"all", hoverBehavior:"none", hoverBehaviorDelay:200, nodeDefaults:{labelStyle:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 11px;")}, selectionMode:"multiple", sorting:"off", _statusMessageStyle:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"), styleDefaults:{_attributeTypeTextStyle:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;font-weight:bold;color:#4F4F4F"), 
_attributeValueTextStyle:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;"), _currentTextStyle:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;"), _drillTextStyle:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:12px;"), _labelStyle:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")}, touchResponse:"auto", _resources:{}};
$DvtTreeDefaults$$.prototype.Init = function $$DvtTreeDefaults$$$$Init$($defaultsMap$$2_ret$$123$$) {
  $defaultsMap$$2_ret$$123$$ = {skyros:dvt.$JsonUtils$.$merge$($defaultsMap$$2_ret$$123$$.skyros, $DvtTreeDefaults$VERSION_1$$), alta:dvt.$JsonUtils$.$merge$($defaultsMap$$2_ret$$123$$.alta, {})};
  $DvtTreeDefaults$$.$superclass$.Init.call(this, $defaultsMap$$2_ret$$123$$)
};
var $DvtTreeUtils$$ = {};
dvt.$Obj$.$createSubclass$($DvtTreeUtils$$, dvt.$Obj$);
$DvtTreeUtils$$.$calcMaxDepth$ = function $$DvtTreeUtils$$$$calcMaxDepth$$($node$$318$$, $depth$$22$$) {
  var $maxDepth$$2$$ = $depth$$22$$, $children$$16$$ = $node$$318$$.$getChildNodes$();
  if($children$$16$$) {
    for(var $i$$857$$ = 0;$i$$857$$ < $children$$16$$.length;$i$$857$$++) {
      var $childDepth$$ = $DvtTreeUtils$$.$calcMaxDepth$($children$$16$$[$i$$857$$], $depth$$22$$ + 1), $maxDepth$$2$$ = Math.max($maxDepth$$2$$, $childDepth$$)
    }
  }
  return $maxDepth$$2$$
};
$DvtTreeUtils$$.$calcNodeCount$ = function $$DvtTreeUtils$$$$calcNodeCount$$($children$$17_node$$319$$) {
  var $count$$25$$ = 1;
  if($children$$17_node$$319$$ = $children$$17_node$$319$$.$getChildNodes$()) {
    for(var $i$$858$$ = 0;$i$$858$$ < $children$$17_node$$319$$.length;$i$$858$$++) {
      $count$$25$$ += $DvtTreeUtils$$.$calcNodeCount$($children$$17_node$$319$$[$i$$858$$])
    }
  }
  return $count$$25$$
};
$DvtTreeUtils$$.$getAllNodes$ = function $$DvtTreeUtils$$$$getAllNodes$$($node$$320$$) {
  var $ret$$124$$ = [];
  $DvtTreeUtils$$.$_addNodesToArray$($node$$320$$, $ret$$124$$);
  return $ret$$124$$
};
$DvtTreeUtils$$.$getAllVisibleNodes$ = function $$DvtTreeUtils$$$$getAllVisibleNodes$$($node$$321$$) {
  var $ret$$125$$ = [];
  $DvtTreeUtils$$.$_addNodesToArray$($node$$321$$, $ret$$125$$, $JSCompiler_alias_FALSE$$, $JSCompiler_alias_TRUE$$);
  return $ret$$125$$
};
$DvtTreeUtils$$.$getLeafNodes$ = function $$DvtTreeUtils$$$$getLeafNodes$$($node$$322$$) {
  var $ret$$126$$ = [];
  $DvtTreeUtils$$.$_addNodesToArray$($node$$322$$, $ret$$126$$, $JSCompiler_alias_TRUE$$);
  return $ret$$126$$
};
$DvtTreeUtils$$.$isHiddenNode$ = function $$DvtTreeUtils$$$$isHiddenNode$$($categoryMap$$3$$, $nodeOptions$$3$$) {
  return dvt.$ArrayUtils$.$hasAnyMapItem$($categoryMap$$3$$, $nodeOptions$$3$$.categories)
};
$DvtTreeUtils$$.$calcContinuousAttrGroupsExtents$ = function $$DvtTreeUtils$$$$calcContinuousAttrGroupsExtents$$($attrGroupOptions$$, $nodes$$25$$) {
  var $stampId$$23$$ = $attrGroupOptions$$.S;
  if(!($stampId$$23$$ == $JSCompiler_alias_NULL$$ || $attrGroupOptions$$.min != $JSCompiler_alias_NULL$$ && $attrGroupOptions$$.max != $JSCompiler_alias_NULL$$)) {
    for(var $min$$19$$ = Infinity, $max$$20$$ = -Infinity, $i$$859$$ = 0;$i$$859$$ < $nodes$$25$$.length;$i$$859$$++) {
      var $node$$323_value$$184$$ = $nodes$$25$$[$i$$859$$];
      $stampId$$23$$ == $node$$323_value$$184$$.$_stampId$ && ($node$$323_value$$184$$ = $node$$323_value$$184$$.$getOptions$()._cv, $node$$323_value$$184$$ != $JSCompiler_alias_NULL$$ && ($max$$20$$ = Math.max($max$$20$$, $node$$323_value$$184$$), $min$$19$$ = Math.min($min$$19$$, $node$$323_value$$184$$)))
    }
    $attrGroupOptions$$.min == $JSCompiler_alias_NULL$$ && ($attrGroupOptions$$.min = $min$$19$$);
    $attrGroupOptions$$.max == $JSCompiler_alias_NULL$$ && ($attrGroupOptions$$.max = $max$$20$$)
  }
};
$DvtTreeUtils$$.$processContinuousAttrGroups$ = function $$DvtTreeUtils$$$$processContinuousAttrGroups$$($attrGroupsList$$, $nodes$$26$$) {
  for(var $i$$860$$ = 0;$i$$860$$ < $attrGroupsList$$.length;$i$$860$$++) {
    var $attrGroupsMap_stampId$$24$$ = $attrGroupsList$$[$i$$860$$], $attrGroups$$8$$ = $attrGroupsMap_stampId$$24$$.$attrGroups$, $attrGroupsMap_stampId$$24$$ = $attrGroupsMap_stampId$$24$$.$stampId$;
    if($attrGroups$$8$$ instanceof dvt.$ContinuousAttrGroups$ && $attrGroupsMap_stampId$$24$$ != $JSCompiler_alias_NULL$$) {
      for(var $j$$117$$ = 0;$j$$117$$ < $nodes$$26$$.length;$j$$117$$++) {
        var $JSCompiler_StaticMethods_processAttrGroups$self$$inline_5343_node$$324$$ = $nodes$$26$$[$j$$117$$];
        if($attrGroupsMap_stampId$$24$$ == $JSCompiler_StaticMethods_processAttrGroups$self$$inline_5343_node$$324$$.$_stampId$) {
          var $color$$inline_5345$$ = $attrGroups$$8$$.get($JSCompiler_StaticMethods_processAttrGroups$self$$inline_5343_node$$324$$.$getOptions$()._cv);
          $color$$inline_5345$$ && ($JSCompiler_StaticMethods_processAttrGroups$self$$inline_5343_node$$324$$.$_color$ = $color$$inline_5345$$)
        }
      }
    }
  }
};
$DvtTreeUtils$$.$_addNodesToArray$ = function $$DvtTreeUtils$$$$_addNodesToArray$$($i$$861_node$$325$$, $ret$$127$$, $bLeafOnly$$, $bRendered$$1$$) {
  if($i$$861_node$$325$$) {
    var $children$$18$$ = $i$$861_node$$325$$.$getChildNodes$(), $childCount$$8$$ = $children$$18$$ ? $children$$18$$.length : 0;
    (!$bLeafOnly$$ || 0 == $childCount$$8$$) && (!$bRendered$$1$$ || $i$$861_node$$325$$.$getDisplayable$()) && $ret$$127$$.push($i$$861_node$$325$$);
    for($i$$861_node$$325$$ = 0;$i$$861_node$$325$$ < $childCount$$8$$;$i$$861_node$$325$$++) {
      $DvtTreeUtils$$.$_addNodesToArray$($children$$18$$[$i$$861_node$$325$$], $ret$$127$$, $bLeafOnly$$, $bRendered$$1$$)
    }
  }
};
function $DvtTreeAutomation$$($treeView$$4$$) {
  this.$_treeView$ = $treeView$$4$$;
  this.$_root$ = $treeView$$4$$.$_root$
}
$goog$exportPath_$$("DvtTreeAutomation", $DvtTreeAutomation$$);
dvt.$Obj$.$createSubclass$($DvtTreeAutomation$$, dvt.$Automation$);
$DvtTreeAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTreeAutomation$$$$$GetSubIdForDomElement$$($displayable$$113_indices$$7$$) {
  var $childIndices_logicalObj$$18_parent$$90$$ = this.$_treeView$.$getLogicalObject$($displayable$$113_indices$$7$$);
  if(!$childIndices_logicalObj$$18_parent$$90$$) {
    return $displayable$$113_indices$$7$$.getParent() instanceof dvt.$Button$ && ($displayable$$113_indices$$7$$ = $displayable$$113_indices$$7$$.getParent()), $childIndices_logicalObj$$18_parent$$90$$ = $displayable$$113_indices$$7$$.getParent(), $childIndices_logicalObj$$18_parent$$90$$ instanceof dvt.$Breadcrumbs$ ? "breadcrumbs[" + $childIndices_logicalObj$$18_parent$$90$$.$getCrumbIndex$($displayable$$113_indices$$7$$) + "]" : $JSCompiler_alias_NULL$$
  }
  if($childIndices_logicalObj$$18_parent$$90$$ instanceof $DvtTreeNode$$) {
    $displayable$$113_indices$$7$$ = "";
    if(!this.$_root$.$_bArtificialRoot$) {
      if($childIndices_logicalObj$$18_parent$$90$$ == this.$_root$) {
        return"node[0]"
      }
      $displayable$$113_indices$$7$$ += "[0]"
    }
    $displayable$$113_indices$$7$$ = ($childIndices_logicalObj$$18_parent$$90$$ = this.$_getIndicesFromNode$($childIndices_logicalObj$$18_parent$$90$$, this.$_root$.$getChildNodes$())) ? $displayable$$113_indices$$7$$ + $childIndices_logicalObj$$18_parent$$90$$ : $displayable$$113_indices$$7$$;
    if(0 < $displayable$$113_indices$$7$$.length) {
      return"node" + $displayable$$113_indices$$7$$
    }
  }
  return $JSCompiler_alias_NULL$$
};
$DvtTreeAutomation$$.prototype.$_getIndicesFromNode$ = function $$DvtTreeAutomation$$$$$_getIndicesFromNode$$($node$$326$$, $children$$19$$) {
  if($children$$19$$ && 0 < $children$$19$$.length) {
    for(var $n$$44$$ = 0;$n$$44$$ < $children$$19$$.length;$n$$44$$++) {
      if($children$$19$$[$n$$44$$] == $node$$326$$) {
        return"[" + $n$$44$$ + "]"
      }
      var $nodeIndex$$13$$ = this.$_getIndicesFromNode$($node$$326$$, $children$$19$$[$n$$44$$].$getChildNodes$());
      if($nodeIndex$$13$$) {
        return"[" + $n$$44$$ + "]" + $nodeIndex$$13$$
      }
    }
  }
  return $JSCompiler_alias_NULL$$
};
$DvtTreeAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTreeAutomation$$$$$getDomElementForSubId$$($crumb$$2_foundNode_subId$$36$$) {
  return!$crumb$$2_foundNode_subId$$36$$ ? $JSCompiler_alias_NULL$$ : $crumb$$2_foundNode_subId$$36$$ == dvt.$Automation$.$TOOLTIP_SUBID$ ? this.$GetTooltipElement$(this.$_treeView$) : 0 == $crumb$$2_foundNode_subId$$36$$.indexOf("breadcrumbs") ? ($crumb$$2_foundNode_subId$$36$$ = this.$_root$.$_view$.$getBreadcrumbs$().$getCrumb$($crumb$$2_foundNode_subId$$36$$.substring($crumb$$2_foundNode_subId$$36$$.indexOf("[") + 1, $crumb$$2_foundNode_subId$$36$$.indexOf("]")))) ? $crumb$$2_foundNode_subId$$36$$.$getElem$() : 
  $JSCompiler_alias_NULL$$ : !this.$_root$.$_bArtificialRoot$ && ($crumb$$2_foundNode_subId$$36$$ = $crumb$$2_foundNode_subId$$36$$.substring(0, $crumb$$2_foundNode_subId$$36$$.indexOf("[")) + $crumb$$2_foundNode_subId$$36$$.substring($crumb$$2_foundNode_subId$$36$$.indexOf("]") + 1), "node" == $crumb$$2_foundNode_subId$$36$$) ? this.$_root$.$getDisplayable$().$getElem$() : ($crumb$$2_foundNode_subId$$36$$ = $JSCompiler_StaticMethods__getNodeFromSubId$$(this, this.$_root$, $crumb$$2_foundNode_subId$$36$$)) ? 
  $crumb$$2_foundNode_subId$$36$$.$getDisplayable$().$getElem$() : $JSCompiler_alias_NULL$$
};
$DvtTreeAutomation$$.prototype.getDomElementForSubId = $DvtTreeAutomation$$.prototype.$getDomElementForSubId$;
function $JSCompiler_StaticMethods__getNodeFromSubId$$($JSCompiler_StaticMethods__getNodeFromSubId$self$$, $childNode$$14_node$$327$$, $subId$$37$$) {
  var $index$$214_openParen$$4$$ = $subId$$37$$.indexOf("["), $closeParen$$4_nextOpenParen$$1$$ = $subId$$37$$.indexOf("]");
  if(0 <= $index$$214_openParen$$4$$ && 0 <= $closeParen$$4_nextOpenParen$$1$$) {
    $index$$214_openParen$$4$$ = $subId$$37$$.substring($index$$214_openParen$$4$$ + 1, $closeParen$$4_nextOpenParen$$1$$);
    $subId$$37$$ = $subId$$37$$.substring($closeParen$$4_nextOpenParen$$1$$ + 1);
    var $closeParen$$4_nextOpenParen$$1$$ = $subId$$37$$.indexOf("["), $nextCloseParen$$1$$ = $subId$$37$$.indexOf("]");
    return($childNode$$14_node$$327$$ = $DvtTreeAutomation$_getNodeByIndex$$($childNode$$14_node$$327$$.$getChildNodes$(), $index$$214_openParen$$4$$)) && 0 <= $closeParen$$4_nextOpenParen$$1$$ && 0 <= $nextCloseParen$$1$$ ? $JSCompiler_StaticMethods__getNodeFromSubId$$($JSCompiler_StaticMethods__getNodeFromSubId$self$$, $childNode$$14_node$$327$$, $subId$$37$$) : $childNode$$14_node$$327$$
  }
}
function $JSCompiler_StaticMethods__getNodeFromPath$$($JSCompiler_StaticMethods__getNodeFromPath$self$$, $childNode$$15_node$$328$$, $path$$41$$) {
  var $index$$215$$ = $path$$41$$.shift();
  $childNode$$15_node$$328$$ = $DvtTreeAutomation$_getNodeByIndex$$($childNode$$15_node$$328$$.$getChildNodes$(), $index$$215$$);
  return 0 == $path$$41$$.length ? $childNode$$15_node$$328$$ : 0 < $path$$41$$.length ? $JSCompiler_StaticMethods__getNodeFromPath$$($JSCompiler_StaticMethods__getNodeFromPath$self$$, $childNode$$15_node$$328$$, $path$$41$$) : $JSCompiler_alias_NULL$$
}
$DvtTreeAutomation$$.prototype.$getNode$ = function $$DvtTreeAutomation$$$$$getNode$$($node$$329_subIdPath$$2$$) {
  !this.$_root$.$_bArtificialRoot$ && 0 == $node$$329_subIdPath$$2$$[0] && $node$$329_subIdPath$$2$$.shift();
  $node$$329_subIdPath$$2$$ = 0 == $node$$329_subIdPath$$2$$.length ? this.$_root$ : $JSCompiler_StaticMethods__getNodeFromPath$$(this, this.$_root$, $node$$329_subIdPath$$2$$);
  return{color:$node$$329_subIdPath$$2$$.$getColor$(), label:$node$$329_subIdPath$$2$$.$getLabel$(), selected:$node$$329_subIdPath$$2$$.$isSelected$() == $JSCompiler_alias_VOID$$ ? $JSCompiler_alias_FALSE$$ : $node$$329_subIdPath$$2$$.$isSelected$(), size:$node$$329_subIdPath$$2$$.$getSize$(), tooltip:$node$$329_subIdPath$$2$$.$getShortDesc$()}
};
$DvtTreeAutomation$$.prototype.getNode = $DvtTreeAutomation$$.prototype.$getNode$;
function $DvtTreeAutomation$_getNodeByIndex$$($nodes$$27$$, $index$$216$$) {
  for(var $i$$862$$ = 0;$i$$862$$ < $nodes$$27$$.length;$i$$862$$++) {
    if($index$$216$$ == $nodes$$27$$[$i$$862$$].$getIndex$()) {
      return $nodes$$27$$[$i$$862$$]
    }
  }
  return $JSCompiler_alias_NULL$$
}
dvt.$Treemap$ = function $dvt$$Treemap$$($context$$640$$, $callback$$164$$, $callbackObj$$120$$) {
  this.Init($context$$640$$, $callback$$164$$, $callbackObj$$120$$)
};
$goog$exportPath_$$("dvt.Treemap", dvt.$Treemap$);
dvt.$Obj$.$createSubclass$(dvt.$Treemap$, $DvtTreeView$$);
dvt.$Treemap$.$_BUFFER_SPACE$ = 7;
dvt.$Treemap$.$_MIN_BUFFER_SPACE$ = 1;
dvt.$Treemap$.$_BACKGROUND_FILL_COLOR$ = "#EBEFF5";
dvt.$Treemap$.$_BACKGROUND_BORDER_COLOR$ = "#DBE0EA";
dvt.$Treemap$.$_BACKGROUND_INLINE_DEFAULT$ = "background-color:" + dvt.$Treemap$.$_BACKGROUND_FILL_COLOR$ + ";border-color:" + dvt.$Treemap$.$_BACKGROUND_BORDER_COLOR$ + ";border-width:2px";
dvt.$Treemap$.newInstance = function $dvt$$Treemap$$newInstance$($context$$641$$, $callback$$165$$, $callbackObj$$121$$) {
  return new dvt.$Treemap$($context$$641$$, $callback$$165$$, $callbackObj$$121$$)
};
dvt.$Treemap$.newInstance = dvt.$Treemap$.newInstance;
$JSCompiler_prototypeAlias$$ = dvt.$Treemap$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$642$$, $callback$$166$$, $callbackObj$$122$$) {
  dvt.$Treemap$.$superclass$.Init.call(this, $context$$642$$, $callback$$166$$, $callbackObj$$122$$);
  this.$Defaults$ = new $DvtTreemapDefaults$$;
  this.setId("treemap1000" + Math.floor(1E9 * Math.random()))
};
$JSCompiler_prototypeAlias$$.$ApplyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$ApplyParsedProperties$$($options$$310_props$$22$$) {
  dvt.$Treemap$.$superclass$.$ApplyParsedProperties$.call(this, $options$$310_props$$22$$);
  $options$$310_props$$22$$ = this.$getOptions$();
  this.$_layout$ = "sliceAndDiceHorizontal" == $options$$310_props$$22$$.layout ? new $DvtTreemapLayoutSliceAndDice$$($JSCompiler_alias_TRUE$$) : "sliceAndDiceVertical" == $options$$310_props$$22$$.layout ? new $DvtTreemapLayoutSliceAndDice$$($JSCompiler_alias_FALSE$$) : new $DvtTreemapLayoutSquarifying$$;
  this.$_isolatedNodes$ = [];
  var $isolateRowKey$$inline_5360$$ = $options$$310_props$$22$$.isolatedNode;
  if($isolateRowKey$$inline_5360$$ && this.$_root$) {
    var $allNodes$$inline_5361$$ = $JSCompiler_StaticMethods_getDescendantNodes$$(this.$_root$);
    $allNodes$$inline_5361$$.push(this.$_root$);
    for(var $i$$inline_5362$$ = 0;$i$$inline_5362$$ < $allNodes$$inline_5361$$.length;$i$$inline_5362$$++) {
      if($allNodes$$inline_5361$$[$i$$inline_5362$$].getId() == $isolateRowKey$$inline_5360$$) {
        this.$_isolatedNodes$.push($allNodes$$inline_5361$$[$i$$inline_5362$$]);
        break
      }
    }
  }
  "auto" == $options$$310_props$$22$$.animationOnDisplay && ($options$$310_props$$22$$.animationOnDisplay = "alphaFade")
};
$JSCompiler_prototypeAlias$$.$Layout$ = function $$JSCompiler_prototypeAlias$$$$Layout$$($availSpace$$133$$) {
  var $bufferSpace_gap$$30_numIsolated$$ = "jet" != this.$getOptions$()._environment ? dvt.$Treemap$.$_BUFFER_SPACE$ : dvt.$Treemap$.$_MIN_BUFFER_SPACE$, $bufferSpace_gap$$30_numIsolated$$ = Math.max(Math.ceil($bufferSpace_gap$$30_numIsolated$$ * Math.min($availSpace$$133$$.$w$, $availSpace$$133$$.$h$) / 400), dvt.$Treemap$.$_MIN_BUFFER_SPACE$);
  $availSpace$$133$$.x += $bufferSpace_gap$$30_numIsolated$$;
  $availSpace$$133$$.y += $bufferSpace_gap$$30_numIsolated$$;
  $availSpace$$133$$.$w$ -= 2 * $bufferSpace_gap$$30_numIsolated$$;
  $availSpace$$133$$.$h$ -= 2 * $bufferSpace_gap$$30_numIsolated$$;
  $bufferSpace_gap$$30_numIsolated$$ = this.$_layout$.$getGapSize$(this, 1);
  $availSpace$$133$$.x += $bufferSpace_gap$$30_numIsolated$$;
  $availSpace$$133$$.$w$ -= 2 * $bufferSpace_gap$$30_numIsolated$$;
  $JSCompiler_StaticMethods_LayoutBreadcrumbs$$(this, $availSpace$$133$$);
  this.$_legend$ = $DvtTreeLegendRenderer$$.$render$(this, $availSpace$$133$$, this.$_legendSource$);
  $availSpace$$133$$.x -= $bufferSpace_gap$$30_numIsolated$$;
  $availSpace$$133$$.$w$ += 2 * $bufferSpace_gap$$30_numIsolated$$;
  $bufferSpace_gap$$30_numIsolated$$ = this.$_isolatedNodes$.length;
  if(0 < $bufferSpace_gap$$30_numIsolated$$ && this.$_isolateRestoreLayout$) {
    this.$_layout$.$layout$(this, this.$_isolatedNodes$[$bufferSpace_gap$$30_numIsolated$$ - 1], $availSpace$$133$$.x, $availSpace$$133$$.y, $availSpace$$133$$.$w$, $availSpace$$133$$.$h$, $JSCompiler_alias_TRUE$$)
  }else {
    this.$_root$ && this.$_layout$.$layout$(this, this.$_root$, $availSpace$$133$$.x, $availSpace$$133$$.y, $availSpace$$133$$.$w$, $availSpace$$133$$.$h$, $JSCompiler_alias_FALSE$$);
    for(var $i$$863$$ = 0;$i$$863$$ < $bufferSpace_gap$$30_numIsolated$$;$i$$863$$++) {
      this.$_layout$.$layout$(this, this.$_isolatedNodes$[$i$$863$$], $availSpace$$133$$.x, $availSpace$$133$$.y, $availSpace$$133$$.$w$, $availSpace$$133$$.$h$, $JSCompiler_alias_TRUE$$)
    }
  }
};
$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$216_i$$864$$) {
  $JSCompiler_StaticMethods_RenderBackground$$(this, $container$$216_i$$864$$);
  this.$_breadcrumbs$ && $container$$216_i$$864$$.$addChild$(this.$_breadcrumbs$);
  this.$_legend$ && ($container$$216_i$$864$$.$addChild$(this.$_legend$), this.$_legend$ = $JSCompiler_alias_NULL$$);
  if($JSCompiler_StaticMethods_HasValidData$$(this)) {
    this.$_groupTextLayer$ = new dvt.$Container$(this.$getCtx$());
    $container$$216_i$$864$$.$addChild$(this.$_groupTextLayer$);
    this.$_isolatedNode$ ? this.$_isolatedNode$.$render$($container$$216_i$$864$$) : this.$_root$.$hasChildren$() ? (this.$_root$.$renderChildren$($container$$216_i$$864$$), $JSCompiler_StaticMethods_UpdateAriaNavigation$$(this, this.$_root$)) : this.$_root$.$render$($container$$216_i$$864$$);
    this.$_isolatedLayer$ = new dvt.$Container$(this.$getCtx$());
    $container$$216_i$$864$$.$addChild$(this.$_isolatedLayer$);
    this.$_selectedLayer$ = new dvt.$Container$(this.$getCtx$());
    $container$$216_i$$864$$.$addChild$(this.$_selectedLayer$);
    $container$$216_i$$864$$.$addChild$(this.$_groupTextLayer$);
    this.$_hoverEffect$ = new dvt.$Polyline$(this.$getCtx$(), []);
    this.$_hoverEffect$.$setVisible$($JSCompiler_alias_FALSE$$);
    this.$_hoverEffect$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    this.$_hoverEffect$.$setPixelHinting$();
    $container$$216_i$$864$$.$addChild$(this.$_hoverEffect$);
    for($container$$216_i$$864$$ = 0;$container$$216_i$$864$$ < this.$_isolatedNodes$.length;$container$$216_i$$864$$++) {
      var $displayable$$114$$ = this.$_isolatedNodes$[$container$$216_i$$864$$].$getDisplayable$();
      this.$_isolatedLayer$.$addChild$($displayable$$114$$)
    }
  }else {
    $JSCompiler_StaticMethods_RenderEmptyText$$(this, $container$$216_i$$864$$)
  }
};
$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  this.$AnimationStopped$ || (this.$_container$.$removeChildren$(), this.$Layout$(new dvt.$Rectangle$(0, 0, this.$Width$, this.$Height$)), this.$Render$(this.$_container$), this.$ReselectNodes$());
  dvt.$Treemap$.$superclass$.$OnAnimationEnd$.call(this)
};
$JSCompiler_prototypeAlias$$.$ReselectNodes$ = function $$JSCompiler_prototypeAlias$$$$ReselectNodes$$() {
  for(var $selectedNodes$$1$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $i$$865$$ = 0;$i$$865$$ < $selectedNodes$$1$$.length;$i$$865$$++) {
    if(0 < this.$_isolatedNodes$.length) {
      var $lastIsolated$$1$$ = this.$_isolatedNodes$[this.$_isolatedNodes$.length - 1];
      ($selectedNodes$$1$$[$i$$865$$] == $lastIsolated$$1$$ || $selectedNodes$$1$$[$i$$865$$].$isDescendantOf$($lastIsolated$$1$$)) && $selectedNodes$$1$$[$i$$865$$].$setSelected$($JSCompiler_alias_TRUE$$)
    }else {
      $selectedNodes$$1$$[$i$$865$$].$setSelected$($JSCompiler_alias_TRUE$$)
    }
  }
};
$JSCompiler_prototypeAlias$$.$CreateKeyboardHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateKeyboardHandler$$($manager$$36$$) {
  return new $DvtTreemapKeyboardHandler$$($manager$$36$$)
};
$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$($view$$61$$, $context$$643$$, $callback$$167$$, $callbackObj$$123$$) {
  return new $DvtTreemapEventManager$$($view$$61$$, $context$$643$$, $callback$$167$$, $callbackObj$$123$$)
};
$JSCompiler_prototypeAlias$$.$GetInitialFocusedItem$ = function $$JSCompiler_prototypeAlias$$$$GetInitialFocusedItem$$($root$$19$$) {
  var $isolatedRootNode$$ = $JSCompiler_StaticMethods___getLastIsolatedNode$$(this);
  return $isolatedRootNode$$ ? $JSCompiler_StaticMethods___getDefaultNavigable$$(this, $DvtTreeUtils$$.$getLeafNodes$($isolatedRootNode$$)) : $root$$19$$ ? $JSCompiler_StaticMethods___getDefaultNavigable$$(this, $DvtTreeUtils$$.$getLeafNodes$($root$$19$$)) : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$__moveToSelectedLayer$ = function $$JSCompiler_prototypeAlias$$$$__moveToSelectedLayer$$($rect$$48$$) {
  for(var $newIndex$$8$$ = 0, $numChildren$$17$$ = this.$_selectedLayer$.$getNumChildren$(), $i$$866$$ = 0;$i$$866$$ < $numChildren$$17$$;$i$$866$$++) {
    var $child$$78$$ = this.$_selectedLayer$.$getChildAt$($i$$866$$);
    $rect$$48$$.zIndex > $child$$78$$.zIndex && ($newIndex$$8$$ = $i$$866$$ + 1)
  }
  $newIndex$$8$$ < $numChildren$$17$$ ? this.$_selectedLayer$.$addChildAt$($rect$$48$$, $newIndex$$8$$) : this.$_selectedLayer$.$addChild$($rect$$48$$)
};
$JSCompiler_prototypeAlias$$.$__getNodeUnderPoint$ = function $$JSCompiler_prototypeAlias$$$$__getNodeUnderPoint$$($x$$299$$, $y$$266$$) {
  return 0 < this.$_isolatedNodes$.length ? this.$_isolatedNodes$[this.$_isolatedNodes$.length - 1].$getNodeUnderPoint$($x$$299$$, $y$$266$$) : this.$_root$.$getNodeUnderPoint$($x$$299$$, $y$$266$$)
};
function $JSCompiler_StaticMethods___getLastIsolatedNode$$($JSCompiler_StaticMethods___getLastIsolatedNode$self$$) {
  return $JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$ && 0 < $JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$.length ? $JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$[$JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$.length - 1] : $JSCompiler_alias_NULL$$
}
function $JSCompiler_StaticMethods__renderIsolateRestore$$($JSCompiler_StaticMethods__renderIsolateRestore$self$$, $node$$332$$) {
  if("none" != $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$getOptions$().animationOnDataChange) {
    for(var $playables$$inline_5377_selectedNodes$$2$$ = $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_selectionHandler$ ? $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_selectionHandler$.getSelection() : [], $descendants$$inline_5378_i$$867$$ = 0;$descendants$$inline_5378_i$$867$$ < $playables$$inline_5377_selectedNodes$$2$$.length;$descendants$$inline_5378_i$$867$$++) {
      $playables$$inline_5377_selectedNodes$$2$$[$descendants$$inline_5378_i$$867$$].$setSelected$($JSCompiler_alias_FALSE$$)
    }
    for(var $playables$$inline_5377_selectedNodes$$2$$ = [$JSCompiler_StaticMethods__getIsolateAnimation$$($node$$332$$)], $descendants$$inline_5378_i$$867$$ = $JSCompiler_StaticMethods_getDescendantNodes$$($node$$332$$), $i$$inline_5379$$ = 0;$i$$inline_5379$$ < $descendants$$inline_5378_i$$867$$.length;$i$$inline_5379$$++) {
      $playables$$inline_5377_selectedNodes$$2$$.push($JSCompiler_StaticMethods__getIsolateAnimation$$($descendants$$inline_5378_i$$867$$[$i$$inline_5379$$]))
    }
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Animation$ = new dvt.$ParallelPlayable$($JSCompiler_StaticMethods__renderIsolateRestore$self$$.$getCtx$(), $playables$$inline_5377_selectedNodes$$2$$);
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Animation$.$setOnEnd$($JSCompiler_StaticMethods__renderIsolateRestore$self$$.$OnAnimationEnd$, $JSCompiler_StaticMethods__renderIsolateRestore$self$$);
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_eventHandler$.$removeListeners$($JSCompiler_StaticMethods__renderIsolateRestore$self$$);
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Animation$.play()
  }else {
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$render$($JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Width$, $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Height$, $JSCompiler_alias_TRUE$$)
  }
}
function $JSCompiler_StaticMethods___getDefaultNavigable$$($JSCompiler_StaticMethods___getDefaultNavigable$self$$, $navigableItems$$10$$) {
  var $keyboardHandler$$10$$ = $JSCompiler_StaticMethods___getDefaultNavigable$self$$.$_eventHandler$.$KeyboardHandler$;
  return $keyboardHandler$$10$$ ? $keyboardHandler$$10$$.$getDefaultNavigable$($navigableItems$$10$$) : $navigableItems$$10$$ && 0 < $navigableItems$$10$$.length ? $navigableItems$$10$$[0] : $JSCompiler_alias_NULL$$
}
$JSCompiler_prototypeAlias$$.$GetComponentDescription$ = function $$JSCompiler_prototypeAlias$$$$GetComponentDescription$$() {
  return dvt.$Bundle$.$getTranslation$(this.$getOptions$(), "componentName", dvt.$Bundle$.$UTIL_PREFIX$, "TREEMAP")
};
$JSCompiler_prototypeAlias$$.$getBundlePrefix$ = function $$JSCompiler_prototypeAlias$$$$getBundlePrefix$$() {
  return dvt.$Bundle$.$TREEMAP_PREFIX$
};
$JSCompiler_prototypeAlias$$.$CreateNode$ = function $$JSCompiler_prototypeAlias$$$$CreateNode$$($nodeOptions$$4$$) {
  return new $DvtTreemapNode$$(this, $nodeOptions$$4$$)
};
function $DvtTreemapNode$$($treemap$$, $props$$23$$) {
  this.Init($treemap$$, $props$$23$$);
  var $options$$312$$ = this.$_view$.$getOptions$(), $nodeDefaults$$1$$ = $options$$312$$.nodeDefaults, $headerDefaults$$ = $nodeDefaults$$1$$.header, $headerOptions$$ = $props$$23$$.header ? $props$$23$$.header : {};
  this.$_groupLabelDisplay$ = $props$$23$$.groupLabelDisplay ? $props$$23$$.groupLabelDisplay : $nodeDefaults$$1$$.groupLabelDisplay;
  this.$_labelDisplay$ = $props$$23$$.labelDisplay ? $props$$23$$.labelDisplay : $nodeDefaults$$1$$.labelDisplay;
  this.$_labelHalign$ = $props$$23$$.labelHalign ? $props$$23$$.labelHalign : $nodeDefaults$$1$$.labelHalign;
  this.$_labelValign$ = $props$$23$$.labelValign ? $props$$23$$.labelValign : $nodeDefaults$$1$$.labelValign;
  this.$_headerHalign$ = $headerOptions$$.labelHalign ? $headerOptions$$.labelHalign : $headerDefaults$$.labelHalign;
  this.$_headerLabelStyle$ = $headerOptions$$.labelStyle ? new dvt.$CSSStyle$($headerOptions$$.labelStyle) : $JSCompiler_alias_NULL$$;
  this.$_bHeaderUseNodeColor$ = "on" == ($headerOptions$$.useNodeColor ? $headerOptions$$.useNodeColor : $headerDefaults$$.useNodeColor);
  this.$_isolate$ = $headerOptions$$.isolate ? $headerOptions$$.isolate : $headerDefaults$$.isolate;
  "auto" == this.$_isolate$ && (this.$_isolate$ = dvt.$Agent$.$isTouchDevice$() ? "off" : "on");
  this.$_bIsolated$ = $options$$312$$.isolatedNode != $JSCompiler_alias_NULL$$ && $options$$312$$.isolatedNode == this.getId()
}
dvt.$Obj$.$createSubclass$($DvtTreemapNode$$, $DvtTreeNode$$);
$JSCompiler_prototypeAlias$$ = $DvtTreemapNode$$.prototype;
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$217_dim$$89_dims$$71_text$$inline_5385_transX$$9$$) {
  if(this.$_hasLayout$) {
    this.$_shape$ = this.$_createShapeNode$();
    $container$$217_dim$$89_dims$$71_text$$inline_5385_transX$$9$$.$addChild$(this.$_shape$);
    var $afRoot$$10_template$$24$$;
    this.$hasChildren$() ? (this.$_childNodeGroup$ = new dvt.$Container$(this.$_view$.$getCtx$()), this.$_shape$.$addChild$(this.$_childNodeGroup$), this.$renderChildren$(this.$_childNodeGroup$)) : $afRoot$$10_template$$24$$ = $JSCompiler_StaticMethods_GetTemplate$$(this);
    if($afRoot$$10_template$$24$$) {
      var $aw$$3_elAttrs$$1$$ = this.$getOptions$()._cf, $afContext$$64$$ = this.$_view$.$_afContext$;
      $afContext$$64$$.$_elContext$ = $aw$$3_elAttrs$$1$$;
      var $aw$$3_elAttrs$$1$$ = this.$_width$ - 8 - 2, $ah$$5$$ = this.$_height$ - 4 - 2;
      0 < $aw$$3_elAttrs$$1$$ && 0 < $ah$$5$$ && ($JSCompiler_StaticMethods_setAvailableWidth$$($afContext$$64$$, $aw$$3_elAttrs$$1$$), $JSCompiler_StaticMethods_setAvailableHeight$$($afContext$$64$$, $ah$$5$$), $afContext$$64$$.$setFontSize$($JSCompiler_StaticMethods_GetTextSize$$(this)), this.$_contentRoot$ = $afRoot$$10_template$$24$$ = $DvtAfComponentFactory$$.$parseAndLayout$($afContext$$64$$, $afRoot$$10_template$$24$$, this.$_shape$), dvt.$Agent$.$isRightToLeft$($container$$217_dim$$89_dims$$71_text$$inline_5385_transX$$9$$.$getCtx$()) ? 
      ($container$$217_dim$$89_dims$$71_text$$inline_5385_transX$$9$$ = $afRoot$$10_template$$24$$.$getDimensions$(), $container$$217_dim$$89_dims$$71_text$$inline_5385_transX$$9$$ = this.$_x$ + this.$_width$ - 4 - 1 - $container$$217_dim$$89_dims$$71_text$$inline_5385_transX$$9$$.$w$) : $container$$217_dim$$89_dims$$71_text$$inline_5385_transX$$9$$ = this.$_x$ + 4 + 1, $afRoot$$10_template$$24$$.$setTranslate$($container$$217_dim$$89_dims$$71_text$$inline_5385_transX$$9$$, this.$_y$ + 2 + 1))
    }else {
      this.$_text$ = this.$_createTextNode$(this.$_shape$), this.$_text$ != $JSCompiler_alias_NULL$$ && (this.$_pattern$ && "header" != this.$_textStyle$) && ($container$$217_dim$$89_dims$$71_text$$inline_5385_transX$$9$$ = this.$_text$.$measureDimensions$(), this.$_textBackground$ = new dvt.$Rect$(this.$_view$.$getCtx$(), $container$$217_dim$$89_dims$$71_text$$inline_5385_transX$$9$$.x, $container$$217_dim$$89_dims$$71_text$$inline_5385_transX$$9$$.y, $container$$217_dim$$89_dims$$71_text$$inline_5385_transX$$9$$.$w$, 
      $container$$217_dim$$89_dims$$71_text$$inline_5385_transX$$9$$.$h$), this.$_textBackground$.$setSolidFill$("#FFFFFF"), this.$_textBackground$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), this.$_shape$.$addChild$(this.$_textBackground$), $container$$217_dim$$89_dims$$71_text$$inline_5385_transX$$9$$ = this.$_text$, "node" == this.$_textStyle$ && this.$hasChildren$() ? this.$_view$.$_groupTextLayer$.$addChild$($container$$217_dim$$89_dims$$71_text$$inline_5385_transX$$9$$) : this.$_shape$.$addChild$($container$$217_dim$$89_dims$$71_text$$inline_5385_transX$$9$$))
    }
    this.$hasChildren$() ? this.$_shape$.$setAriaRole$("group") : this.$_shape$.$setAriaRole$("img");
    this.$UpdateAriaLabel$()
  }
};
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($nodeDefaults$$2_parentNode$$18_selected$$47$$) {
  $DvtTreemapNode$$.$superclass$.$setSelected$.call(this, $nodeDefaults$$2_parentNode$$18_selected$$47$$);
  if(this.$_shape$) {
    $nodeDefaults$$2_parentNode$$18_selected$$47$$ = this.$_view$.$getOptions$().nodeDefaults;
    var $nodeHeaderDefaults$$ = $nodeDefaults$$2_parentNode$$18_selected$$47$$.header;
    if(this.$isSelected$()) {
      var $x$$300$$ = this.$_x$, $y$$267$$ = this.$_y$ + 1, $w$$70$$ = this.$_width$ - 1, $h$$68$$ = this.$_height$ - 1;
      dvt.$Agent$.$isPlatformWebkit$() && ($y$$267$$ -= 1);
      $JSCompiler_StaticMethods__removeChildShape$$(this, this.$_selectionOuter$);
      $JSCompiler_StaticMethods__removeChildShape$$(this, this.$_selectionInner$);
      this.$_selectionInner$ = this.$_selectionOuter$ = $JSCompiler_alias_NULL$$;
      this.$_selectionOuter$ = new dvt.$Rect$(this.$_view$.$getCtx$(), $x$$300$$, $y$$267$$, $w$$70$$, $h$$68$$);
      this.$_selectionOuter$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
      this.$_selectionOuter$.$setFill$($JSCompiler_alias_NULL$$);
      this.$_selectionOuter$.$setPixelHinting$();
      this.$_shape$.$addChild$(this.$_selectionOuter$);
      this.$_selectionInner$ = new dvt.$Rect$(this.$_view$.$getCtx$(), $x$$300$$ + 1, $y$$267$$ + 1, $w$$70$$ - 2, $h$$68$$ - 2);
      this.$_selectionInner$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
      this.$_selectionInner$.$setFill$($JSCompiler_alias_NULL$$);
      this.$_selectionInner$.$setPixelHinting$();
      this.$_shape$.$addChild$(this.$_selectionInner$);
      "header" == this.$_textStyle$ ? (this.$IsHover$ || this.$isShowingKeyboardFocusEffect$() ? this.$_innerShape$.$setSolidFill$($nodeHeaderDefaults$$.hoverBackgroundColor) : (this.$_innerShape$.$setSolidFill$($nodeHeaderDefaults$$.selectedBackgroundColor), this.$_text$ && $JSCompiler_StaticMethods_ApplyHeaderTextStyle$$(this, this.$_text$, "_selectedLabelStyle")), this.$_selectionOuter$.$setSolidStroke$($nodeHeaderDefaults$$.selectedOuterColor), this.$_selectionInner$.$setSolidStroke$($nodeHeaderDefaults$$.selectedInnerColor), 
      dvt.$Agent$.$isTouchDevice$() && (this.$_isolateButton$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$$(this, this.$_shape$))) : (this.$_selectionOuter$.$setSolidStroke$($nodeDefaults$$2_parentNode$$18_selected$$47$$.selectedOuterColor), this.$_selectionInner$.$setSolidStroke$($nodeDefaults$$2_parentNode$$18_selected$$47$$.selectedInnerColor), !dvt.$Agent$.$isBrowserSafari$() && !dvt.$Agent$.$isPlatformGecko$() && this.$_shape$.$addDrawEffect$($DvtTreeNode$__NODE_SELECTED_SHADOW$$), 
      this.$_view$.$__moveToSelectedLayer$(this.$_shape$))
    }else {
      $JSCompiler_StaticMethods__removeChildShape$$(this, this.$_selectionInner$), this.$_selectionInner$ = $JSCompiler_alias_NULL$$, dvt.$Agent$.$isTouchDevice$() && $JSCompiler_StaticMethods__removeIsolateRestoreButton$$(this), "header" == this.$_textStyle$ ? (this.$IsHover$ || this.$isShowingKeyboardFocusEffect$() ? this.$_innerShape$.$setSolidFill$($nodeHeaderDefaults$$.hoverBackgroundColor) : ($JSCompiler_StaticMethods_ApplyHeaderStyle$$(this, this.$_shape$, this.$_innerShape$), this.$_text$ && 
      (this.$isDrillReplaceEnabled$() ? $JSCompiler_StaticMethods_ApplyHeaderTextStyle$$(this, this.$_text$, "_drillableLabelStyle") : $JSCompiler_StaticMethods_ApplyHeaderTextStyle$$(this, this.$_text$, "labelStyle"))), this.$_selectionOuter$ && (this.$IsHover$ || this.$isShowingKeyboardFocusEffect$() ? this.$_selectionOuter$.$setSolidStroke$($nodeHeaderDefaults$$.hoverOuterColor) : ($JSCompiler_StaticMethods__removeChildShape$$(this, this.$_selectionOuter$), this.$_selectionOuter$ = $JSCompiler_alias_NULL$$))) : 
      (this.$_shape$.$removeAllDrawEffects$(), this.$_selectionOuter$ && ($JSCompiler_StaticMethods__removeChildShape$$(this, this.$_selectionOuter$), this.$_selectionOuter$ = $JSCompiler_alias_NULL$$), ($nodeDefaults$$2_parentNode$$18_selected$$47$$ = this.$_parent$) && $nodeDefaults$$2_parentNode$$18_selected$$47$$.$_childNodeGroup$ && $nodeDefaults$$2_parentNode$$18_selected$$47$$.$_childNodeGroup$.$addChild$(this.$_shape$))
    }
  }
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  if(this.$_shape$ && this.$_hasLayout$) {
    var $nodeDefaults$$3_stroke$$123_stroke$$inline_5389_x$$301$$ = this.$_view$.$getOptions$().nodeDefaults, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_5387_nodeHeaderDefaults$$1$$ = $nodeDefaults$$3_stroke$$123_stroke$$inline_5389_x$$301$$.header, $isolatedNode_points$$80$$ = $JSCompiler_StaticMethods___getLastIsolatedNode$$(this.$_view$);
    if(!($isolatedNode_points$$80$$ != $JSCompiler_alias_NULL$$ && $isolatedNode_points$$80$$ != this && !this.$isDescendantOf$($isolatedNode_points$$80$$))) {
      var $isolatedNode_points$$80$$ = [], $x1$$54_y$$268$$, $w$$71_y1$$44$$, $h$$69_x2$$52$$, $y2$$42$$;
      "header" == this.$_textStyle$ ? (this.$_innerShape$.$setSolidFill$($JSCompiler_StaticMethods___showHoverEffect$self$$inline_5387_nodeHeaderDefaults$$1$$.hoverBackgroundColor), this.$_selectionOuter$ || ($nodeDefaults$$3_stroke$$123_stroke$$inline_5389_x$$301$$ = this.$_x$, $x1$$54_y$$268$$ = this.$_y$ + 1, $w$$71_y1$$44$$ = this.$_width$ - 1, $h$$69_x2$$52$$ = this.$_height$ - 1, dvt.$Agent$.$isPlatformWebkit$() && ($x1$$54_y$$268$$ -= 1), this.$_selectionOuter$ = new dvt.$Rect$(this.$_view$.$getCtx$(), 
      $nodeDefaults$$3_stroke$$123_stroke$$inline_5389_x$$301$$, $x1$$54_y$$268$$, $w$$71_y1$$44$$, $h$$69_x2$$52$$), this.$_selectionOuter$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), this.$_selectionOuter$.$setFill$($JSCompiler_alias_NULL$$), this.$_selectionOuter$.$setPixelHinting$(), this.$_shape$.$addChild$(this.$_selectionOuter$)), this.$_selectionOuter$.$setSolidStroke$(this.$isSelected$() ? $JSCompiler_StaticMethods___showHoverEffect$self$$inline_5387_nodeHeaderDefaults$$1$$.selectedOuterColor : 
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_5387_nodeHeaderDefaults$$1$$.hoverOuterColor), $x1$$54_y$$268$$ = this.$_x$ + 1.5 + 1, $h$$69_x2$$52$$ = this.$_x$ + this.$_width$ - 1.5 - 1, $w$$71_y1$$44$$ = this.$_y$ + this.$_titleBarHeight$, $y2$$42$$ = this.$_y$ + this.$_height$ - 1.5 - 1, $isolatedNode_points$$80$$.push($h$$69_x2$$52$$, $w$$71_y1$$44$$, $h$$69_x2$$52$$, $y2$$42$$, $x1$$54_y$$268$$, $y2$$42$$, $x1$$54_y$$268$$, $w$$71_y1$$44$$), $nodeDefaults$$3_stroke$$123_stroke$$inline_5389_x$$301$$ = 
      new dvt.$SolidStroke$($JSCompiler_StaticMethods___showHoverEffect$self$$inline_5387_nodeHeaderDefaults$$1$$.hoverInnerColor, 0.8, 3), this.$_text$ && (this.$isDrillReplaceEnabled$() ? $JSCompiler_StaticMethods_ApplyHeaderTextStyle$$(this, this.$_text$, "_drillableHoverLabelStyle") : $JSCompiler_StaticMethods_ApplyHeaderTextStyle$$(this, this.$_text$, "_hoverLabelStyle"))) : ($x1$$54_y$$268$$ = this.$_x$ + 1, $h$$69_x2$$52$$ = this.$_x$ + this.$_width$ - 1, $w$$71_y1$$44$$ = this.$_y$ + 1, $y2$$42$$ = 
      this.$_y$ + this.$_height$ - 1, $isolatedNode_points$$80$$.push(this.$_x$, $w$$71_y1$$44$$, $h$$69_x2$$52$$, $w$$71_y1$$44$$, $h$$69_x2$$52$$, $y2$$42$$, $x1$$54_y$$268$$, $y2$$42$$, $x1$$54_y$$268$$, $w$$71_y1$$44$$), $nodeDefaults$$3_stroke$$123_stroke$$inline_5389_x$$301$$ = new dvt.$SolidStroke$($nodeDefaults$$3_stroke$$123_stroke$$inline_5389_x$$301$$.hoverColor, 1, 2));
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_5387_nodeHeaderDefaults$$1$$ = this.$_view$;
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_5387_nodeHeaderDefaults$$1$$.$_hoverEffect$.$setPoints$($isolatedNode_points$$80$$);
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_5387_nodeHeaderDefaults$$1$$.$_hoverEffect$.$setStroke$($nodeDefaults$$3_stroke$$123_stroke$$inline_5389_x$$301$$);
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_5387_nodeHeaderDefaults$$1$$.$_hoverEffect$.$setVisible$($JSCompiler_alias_TRUE$$)
    }
  }
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  if(this.$_shape$ && this.$_hasLayout$) {
    var $nodeHeaderDefaults$$2$$ = this.$_view$.$getOptions$().nodeDefaults.header;
    "header" == this.$_textStyle$ && (this.$isSelected$() ? (this.$_innerShape$.$setSolidFill$($nodeHeaderDefaults$$2$$.selectedBackgroundColor), this.$_selectionOuter$.$setSolidStroke$($nodeHeaderDefaults$$2$$.selectedOuterColor), this.$_text$ && (this.$isDrillReplaceEnabled$() ? $JSCompiler_StaticMethods_ApplyHeaderTextStyle$$(this, this.$_text$, "_drillableSelectedLabelStyle") : $JSCompiler_StaticMethods_ApplyHeaderTextStyle$$(this, this.$_text$, "_selectedLabelStyle"))) : ($JSCompiler_StaticMethods_ApplyHeaderStyle$$(this, 
    this.$_shape$, this.$_innerShape$), this.$_selectionOuter$ && (this.$_shape$.removeChild(this.$_selectionOuter$), this.$_selectionOuter$ = $JSCompiler_alias_NULL$$), this.$_text$ && (this.$isDrillReplaceEnabled$() ? $JSCompiler_StaticMethods_ApplyHeaderTextStyle$$(this, this.$_text$, "_drillableLabelStyle") : $JSCompiler_StaticMethods_ApplyHeaderTextStyle$$(this, this.$_text$, "labelStyle"))));
    this.$_view$.$_hoverEffect$.$setVisible$($JSCompiler_alias_FALSE$$)
  }
};
$JSCompiler_prototypeAlias$$.$highlight$ = function $$JSCompiler_prototypeAlias$$$$highlight$$($bDimmed$$4$$, $alpha$$54$$) {
  this.$hasChildren$() ? (this.$_text$ && this.$_text$.$setAlpha$($alpha$$54$$), "header" == this.$_textStyle$ && (this.$_bHeaderUseNodeColor$ && this.$_innerShape$) && this.$_innerShape$.$setAlpha$($alpha$$54$$)) : $DvtTreemapNode$$.$superclass$.$highlight$.call(this, $bDimmed$$4$$, $alpha$$54$$)
};
$JSCompiler_prototypeAlias$$.$isIsolateEnabled$ = function $$JSCompiler_prototypeAlias$$$$isIsolateEnabled$$() {
  return"off" != this.$_isolate$ && "header" == this.$_textStyle$
};
$JSCompiler_prototypeAlias$$.$getPopupBounds$ = function $$JSCompiler_prototypeAlias$$$$getPopupBounds$$($behavior$$17$$) {
  return!$behavior$$17$$ || !$behavior$$17$$.$getAlign$() ? $DvtTreemapNode$$.$superclass$.$getPopupBounds$.call(this, $behavior$$17$$) : new dvt.$Rectangle$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
};
$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$734_lastChild$$2_next$$18$$) {
  var $keyCode$$44_navigables$$15_parent$$92$$;
  if($event$$734_lastChild$$2_next$$18$$.type == dvt.$MouseEvent$.$CLICK$) {
    return $DvtTreemapNode$$.$superclass$.$getNextNavigable$.call(this, $event$$734_lastChild$$2_next$$18$$)
  }
  $keyCode$$44_navigables$$15_parent$$92$$ = $event$$734_lastChild$$2_next$$18$$.keyCode;
  if($keyCode$$44_navigables$$15_parent$$92$$ == dvt.$KeyboardEvent$.$SPACE$ && $event$$734_lastChild$$2_next$$18$$.ctrlKey) {
    return this
  }
  if($keyCode$$44_navigables$$15_parent$$92$$ == dvt.$KeyboardEvent$.$UP_ARROW$ && $event$$734_lastChild$$2_next$$18$$.altKey || $keyCode$$44_navigables$$15_parent$$92$$ == dvt.$KeyboardEvent$.$CLOSE_BRACKET$) {
    ($keyCode$$44_navigables$$15_parent$$92$$ = this.$_parent$) && $keyCode$$44_navigables$$15_parent$$92$$.getId() != this.$_view$.$_root$.getId() ? ($event$$734_lastChild$$2_next$$18$$ = $keyCode$$44_navigables$$15_parent$$92$$, $JSCompiler_StaticMethods_MarkAsLastVisitedChild$$($keyCode$$44_navigables$$15_parent$$92$$)) : $event$$734_lastChild$$2_next$$18$$ = this
  }else {
    if($keyCode$$44_navigables$$15_parent$$92$$ == dvt.$KeyboardEvent$.$DOWN_ARROW$ && $event$$734_lastChild$$2_next$$18$$.altKey || $keyCode$$44_navigables$$15_parent$$92$$ == dvt.$KeyboardEvent$.$OPEN_BRACKET$) {
      $event$$734_lastChild$$2_next$$18$$ = ($event$$734_lastChild$$2_next$$18$$ = this.$_lastVisitedChild$) ? $event$$734_lastChild$$2_next$$18$$ : this.$hasChildren$() ? $JSCompiler_StaticMethods___getDefaultNavigable$$(this.$_view$, this.$getChildNodes$()) : this
    }else {
      var $root$$20$$ = $JSCompiler_StaticMethods___getLastIsolatedNode$$(this.$_view$), $depth$$23$$ = 0;
      if($root$$20$$) {
        if(this == $root$$20$$) {
          $depth$$23$$ = 0
        }else {
          $keyCode$$44_navigables$$15_parent$$92$$ = this.$_parent$;
          for($depth$$23$$ = 1;$root$$20$$ != $keyCode$$44_navigables$$15_parent$$92$$;) {
            $depth$$23$$++, $keyCode$$44_navigables$$15_parent$$92$$ = $keyCode$$44_navigables$$15_parent$$92$$.$_parent$
          }
        }
      }else {
        for($root$$20$$ = this;$root$$20$$.$_parent$;) {
          $root$$20$$ = $root$$20$$.$_parent$
        }
        $depth$$23$$ = $JSCompiler_StaticMethods_GetDepth$$(this)
      }
      $keyCode$$44_navigables$$15_parent$$92$$ = $JSCompiler_StaticMethods_GetNodesAtDepth$$(this, $root$$20$$, $depth$$23$$);
      $event$$734_lastChild$$2_next$$18$$ = dvt.$KeyboardHandler$.$getNextNavigable$(this, $event$$734_lastChild$$2_next$$18$$, $keyCode$$44_navigables$$15_parent$$92$$)
    }
  }
  $JSCompiler_StaticMethods_MarkAsLastVisitedChild$$($event$$734_lastChild$$2_next$$18$$);
  return $event$$734_lastChild$$2_next$$18$$
};
$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return new dvt.$Rectangle$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
};
$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_shape$ ? this.$_shape$.$getElem$() : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$setLayoutParams$ = function $$JSCompiler_prototypeAlias$$$$setLayoutParams$$($headerLabelHeight_text$$109_x$$302_xx$$64$$, $y$$269_yy$$64$$, $width$$176_ww$$119$$, $height$$147_hh$$103$$) {
  if(!(0 >= $width$$176_ww$$119$$ || 0 >= $height$$147_hh$$103$$)) {
    this.$_hasLayout$ = $JSCompiler_alias_TRUE$$;
    this.$_oldState$ = this.$GetAnimationParams$();
    this.$_x$ = $headerLabelHeight_text$$109_x$$302_xx$$64$$;
    this.$_y$ = $y$$269_yy$$64$$;
    this.$_width$ = $width$$176_ww$$119$$ ? $width$$176_ww$$119$$ : 0;
    this.$_height$ = $height$$147_hh$$103$$ ? $height$$147_hh$$103$$ : 0;
    this.$_textStyle$ = this.$hasChildren$() ? this.$_groupLabelDisplay$ : this.$_labelDisplay$;
    this.$_textStr$ || (this.$_textStyle$ = "off");
    if("header" == this.$_textStyle$) {
      this.$_titleBarHeight$ = 15;
      $headerLabelHeight_text$$109_x$$302_xx$$64$$ = new dvt.$OutputText$(this.$_view$.$getCtx$(), this.$_textStr$);
      $headerLabelHeight_text$$109_x$$302_xx$$64$$.$setFontSize$($JSCompiler_StaticMethods_GetTextSize$$(this));
      $JSCompiler_StaticMethods_ApplyHeaderTextStyle$$(this, $headerLabelHeight_text$$109_x$$302_xx$$64$$, "labelStyle");
      $headerLabelHeight_text$$109_x$$302_xx$$64$$ = dvt.$TextUtils$.$guessTextDimensions$($headerLabelHeight_text$$109_x$$302_xx$$64$$).$h$;
      this.$_titleBarHeight$ = Math.max(this.$_titleBarHeight$, $headerLabelHeight_text$$109_x$$302_xx$$64$$);
      this.$isIsolateEnabled$() && (this.$_titleBarHeight$ = Math.max(this.$_titleBarHeight$, 15));
      $headerLabelHeight_text$$109_x$$302_xx$$64$$ = this.$_x$;
      $y$$269_yy$$64$$ = this.$_y$ + this.$_titleBarHeight$;
      $width$$176_ww$$119$$ = this.$_width$;
      $height$$147_hh$$103$$ = this.$_height$ - this.$_titleBarHeight$;
      if(0 <= $width$$176_ww$$119$$ && 0 <= $height$$147_hh$$103$$) {
        return new dvt.$Rectangle$($headerLabelHeight_text$$109_x$$302_xx$$64$$, $y$$269_yy$$64$$, $width$$176_ww$$119$$, $height$$147_hh$$103$$)
      }
      this.$_textStyle$ = $JSCompiler_alias_NULL$$
    }
    return new dvt.$Rectangle$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
  }
};
$JSCompiler_prototypeAlias$$.$getNodeUnderPoint$ = function $$JSCompiler_prototypeAlias$$$$getNodeUnderPoint$$($x$$303$$, $y$$270$$) {
  if(this.contains($x$$303$$, $y$$270$$) || !this.$_hasLayout$) {
    for(var $childNodes$$25$$ = this.$getChildNodes$(), $i$$869$$ = 0;$i$$869$$ < $childNodes$$25$$.length;$i$$869$$++) {
      if($childNodes$$25$$[$i$$869$$].contains($x$$303$$, $y$$270$$)) {
        return $childNodes$$25$$[$i$$869$$].$getNodeUnderPoint$($x$$303$$, $y$$270$$)
      }
    }
    if(this.$_hasLayout$) {
      return this
    }
  }
  return $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$304$$, $y$$271$$) {
  return $x$$304$$ >= this.$_x$ && $x$$304$$ <= this.$_x$ + this.$_width$ && $y$$271$$ >= this.$_y$ && $y$$271$$ <= this.$_y$ + this.$_height$
};
$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  var $r$$92$$ = dvt.$ColorUtils$.$getRed$(this.$_color$), $g$$28$$ = dvt.$ColorUtils$.$getGreen$(this.$_color$), $b$$63$$ = dvt.$ColorUtils$.$getBlue$(this.$_color$);
  return[this.$_x$, this.$_y$, this.$_width$, this.$_height$, $r$$92$$, $g$$28$$, $b$$63$$, this.$hasChildren$() ? 0 : Math.random()]
};
$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$SetAnimationParams$$($params$$54$$) {
  this.$setLayoutParams$($params$$54$$[0], $params$$54$$[1], $params$$54$$[2], $params$$54$$[3]);
  this.$_color$ = dvt.$ColorUtils$.$makeRGB$(Math.round($params$$54$$[4]), Math.round($params$$54$$[5]), Math.round($params$$54$$[6]));
  this.$_shape$ && (this.$_shape$.$setRect$(this.$_x$, this.$_y$, this.$_width$, this.$_height$), this.$_innerShape$ && this.$_innerShape$.$setRect$(this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), ("header" != this.$_textStyle$ || this.$_bHeaderUseNodeColor$) && this.$_shape$.$setFill$(this.$GetFill$()), this.$isSelected$() && this.$setSelected$($JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods__removeChildShape$$(this, this.$_fillShape$), $JSCompiler_StaticMethods__removeChildShape$$(this, 
  this.$_topLeftShape$), this.$_topLeftShape$ = this.$_fillShape$ = $JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__removeIsolateRestoreButton$$(this), $JSCompiler_StaticMethods_GetTemplate$$(this) ? ($JSCompiler_StaticMethods__removeChildShape$$(this, this.$_contentRoot$), this.$_contentRoot$ = $JSCompiler_alias_NULL$$) : ($JSCompiler_StaticMethods__removeChildShape$$(this, this.$_textBackground$), this.$_textBackground$ = $JSCompiler_alias_NULL$$, this.$_text$ && this.$_text$.getParent().removeChild(this.$_text$), 
  this.$_text$ = this.$_createTextNode$(this.$_shape$)))
};
function $JSCompiler_StaticMethods__getIsolateAnimation$$($JSCompiler_StaticMethods__getIsolateAnimation$self$$) {
  if($JSCompiler_StaticMethods__getIsolateAnimation$self$$.$_oldState$) {
    var $playable$$48$$ = new dvt.$CustomAnimation$($JSCompiler_StaticMethods__getIsolateAnimation$self$$.$_view$.$getCtx$(), $JSCompiler_StaticMethods__getIsolateAnimation$self$$, 0.3);
    $playable$$48$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER_ARRAY$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$GetAnimationParams$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$SetAnimationParams$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$GetAnimationParams$());
    $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$SetAnimationParams$($JSCompiler_StaticMethods__getIsolateAnimation$self$$.$_oldState$);
    return $playable$$48$$
  }
  return $JSCompiler_alias_NULL$$
}
$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$67$$, $oldNode$$19$$) {
  return 0 == $JSCompiler_StaticMethods_GetDepth$$(this) || $oldNode$$19$$.$_hasLayout$ && 0 < $oldNode$$19$$.$_width$ && 0 < $oldNode$$19$$.$_height$ ? $DvtTreemapNode$$.$superclass$.$animateUpdate$.call(this, $handler$$67$$, $oldNode$$19$$) : this.$animateInsert$($handler$$67$$)
};
$JSCompiler_prototypeAlias$$.$_createShapeNode$ = function $$JSCompiler_prototypeAlias$$$$_createShapeNode$$() {
  var $context$$644$$ = this.$_view$.$getCtx$(), $shape$$92$$;
  if("header" == this.$_textStyle$) {
    $shape$$92$$ = new dvt.$Rect$($context$$644$$, this.$_x$, this.$_y$, this.$_width$, this.$_height$), this.$_innerShape$ = new dvt.$Rect$($context$$644$$, this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), $JSCompiler_StaticMethods_ApplyHeaderStyle$$(this, $shape$$92$$, this.$_innerShape$), this.$_innerShape$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), $shape$$92$$.$addChild$(this.$_innerShape$), this.$_bIsolated$ && (this.$_isolateButton$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$$(this, 
    $shape$$92$$))
  }else {
    var $fill$$77$$ = this.$GetFill$();
    $shape$$92$$ = new dvt.$Rect$($context$$644$$, this.$_x$, this.$_y$, this.$_width$, this.$_height$);
    if((1E3 > this.$_view$.$_nodeCount$ || !dvt.$Agent$.$isTouchDevice$()) && 2 <= this.$_width$ && 2 <= this.$_height$) {
      new dvt.$SolidStroke$("#FFFFFF");
      new dvt.$SolidStroke$("#000000", 0.3);
      this.$_pattern$ && new dvt.$SolidStroke$(this.$_color$, 0.15);
      var $bottomRightColor_fillColor$$12$$ = this.$getColor$(), $topLeftColor$$ = dvt.$ColorUtils$.$interpolateColor$("#FFFFFF", $bottomRightColor_fillColor$$12$$, 0.7), $bottomRightColor_fillColor$$12$$ = dvt.$ColorUtils$.$interpolateColor$("#000000", $bottomRightColor_fillColor$$12$$, 0.7), $minDim$$1$$ = Math.min(this.$_width$, this.$_height$);
      4 <= $minDim$$1$$ ? ($shape$$92$$.$setSolidFill$($bottomRightColor_fillColor$$12$$), this.$_topLeftShape$ = new dvt.$Rect$($context$$644$$, this.$_x$, this.$_y$, this.$_width$ - 1, this.$_height$ - 1), this.$_topLeftShape$.$setSolidFill$($topLeftColor$$), this.$_topLeftShape$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), $shape$$92$$.$addChild$(this.$_topLeftShape$), this.$_fillShape$ = new dvt.$Rect$($context$$644$$, this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), this.$_fillShape$.$setFill$($fill$$77$$), 
      this.$_fillShape$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), $shape$$92$$.$addChild$(this.$_fillShape$)) : 2 <= $minDim$$1$$ ? ($shape$$92$$.$setSolidFill$($bottomRightColor_fillColor$$12$$), this.$_fillShape$ = new dvt.$Rect$($context$$644$$, this.$_x$, this.$_y$, this.$_width$ - 1, this.$_height$ - 1), this.$_fillShape$.$setFill$($fill$$77$$), this.$_fillShape$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), $shape$$92$$.$addChild$(this.$_fillShape$)) : $shape$$92$$.$setFill$($fill$$77$$)
    }else {
      $shape$$92$$.$setFill$($fill$$77$$)
    }
  }
  this.$_view$.$getEventManager$().$associate$($shape$$92$$, this);
  this.$isSelectable$() ? $shape$$92$$.$setSelectable$($JSCompiler_alias_TRUE$$) : $shape$$92$$.setCursor("default");
  $shape$$92$$.zIndex = this.$_zIndex$;
  return $shape$$92$$
};
function $JSCompiler_StaticMethods__createIsolateRestoreButton$$($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$, $container$$218$$) {
  if("header" != $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_textStyle$ || !$JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$isIsolateEnabled$()) {
    return $JSCompiler_alias_NULL$$
  }
  var $JSCompiler_temp$$207_button$$76_button$$inline_5404_button$$inline_5415_context$$inline_5396_context$$inline_5407$$ = $JSCompiler_alias_NULL$$, $transX$$10_x1$$55$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_x$, $x2$$53$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_x$ + $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_width$ - 1, $rect$$49_tooltip$$49_y1$$45$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_y$ + 1, $y2$$43$$ = 
  $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_y$ + $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_titleBarHeight$;
  if(12 < $x2$$53$$ - $transX$$10_x1$$55$$ - 2) {
    if($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_bIsolated$) {
      var $JSCompiler_temp$$207_button$$76_button$$inline_5404_button$$inline_5415_context$$inline_5396_context$$inline_5407$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getCtx$(), $bRtl$$inline_5397_bRtl$$inline_5408_upState$$inline_5401_upState$$inline_5412$$ = dvt.$Agent$.$isRightToLeft$($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_context$), $resources$$inline_5398_resources$$inline_5409$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getOptions$()._resources, 
      $overImage$$inline_5399_overImage$$inline_5410_overState$$inline_5402_overState$$inline_5413$$ = $bRtl$$inline_5397_bRtl$$inline_5408_upState$$inline_5401_upState$$inline_5412$$ && $resources$$inline_5398_resources$$inline_5409$$.restoreDownRtl ? $resources$$inline_5398_resources$$inline_5409$$.restoreDownRtl : $resources$$inline_5398_resources$$inline_5409$$.restoreDown, $downImage$$inline_5400_downImage$$inline_5411_downState$$inline_5403_downState$$inline_5414$$ = $bRtl$$inline_5397_bRtl$$inline_5408_upState$$inline_5401_upState$$inline_5412$$ && 
      $resources$$inline_5398_resources$$inline_5409$$.restoreOverRtl ? $resources$$inline_5398_resources$$inline_5409$$.restoreOverRtl : $resources$$inline_5398_resources$$inline_5409$$.restoreOver, $bRtl$$inline_5397_bRtl$$inline_5408_upState$$inline_5401_upState$$inline_5412$$ = new dvt.$Image$($JSCompiler_temp$$207_button$$76_button$$inline_5404_button$$inline_5415_context$$inline_5396_context$$inline_5407$$, $bRtl$$inline_5397_bRtl$$inline_5408_upState$$inline_5401_upState$$inline_5412$$ && 
      $resources$$inline_5398_resources$$inline_5409$$.restoreRtl ? $resources$$inline_5398_resources$$inline_5409$$.restoreRtl : $resources$$inline_5398_resources$$inline_5409$$.restore, 0, 0, 12, 12), $overImage$$inline_5399_overImage$$inline_5410_overState$$inline_5402_overState$$inline_5413$$ = new dvt.$Image$($JSCompiler_temp$$207_button$$76_button$$inline_5404_button$$inline_5415_context$$inline_5396_context$$inline_5407$$, $overImage$$inline_5399_overImage$$inline_5410_overState$$inline_5402_overState$$inline_5413$$, 
      0, 0, 12, 12), $downImage$$inline_5400_downImage$$inline_5411_downState$$inline_5403_downState$$inline_5414$$ = new dvt.$Image$($JSCompiler_temp$$207_button$$76_button$$inline_5404_button$$inline_5415_context$$inline_5396_context$$inline_5407$$, $downImage$$inline_5400_downImage$$inline_5411_downState$$inline_5403_downState$$inline_5414$$, 0, 0, 12, 12);
      $bRtl$$inline_5397_bRtl$$inline_5408_upState$$inline_5401_upState$$inline_5412$$.$setInvisibleFill$();
      $overImage$$inline_5399_overImage$$inline_5410_overState$$inline_5402_overState$$inline_5413$$.$setInvisibleFill$();
      $downImage$$inline_5400_downImage$$inline_5411_downState$$inline_5403_downState$$inline_5414$$.$setInvisibleFill$();
      $JSCompiler_temp$$207_button$$76_button$$inline_5404_button$$inline_5415_context$$inline_5396_context$$inline_5407$$ = new dvt.$Button$($JSCompiler_temp$$207_button$$76_button$$inline_5404_button$$inline_5415_context$$inline_5396_context$$inline_5407$$, $bRtl$$inline_5397_bRtl$$inline_5408_upState$$inline_5401_upState$$inline_5412$$, $overImage$$inline_5399_overImage$$inline_5410_overState$$inline_5402_overState$$inline_5413$$, $downImage$$inline_5400_downImage$$inline_5411_downState$$inline_5403_downState$$inline_5414$$);
      $JSCompiler_temp$$207_button$$76_button$$inline_5404_button$$inline_5415_context$$inline_5396_context$$inline_5407$$.$addEvtListener$(dvt.$MouseEvent$.$CLICK$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$__restoreNode$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$)
    }else {
      $JSCompiler_temp$$207_button$$76_button$$inline_5404_button$$inline_5415_context$$inline_5396_context$$inline_5407$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getCtx$(), $bRtl$$inline_5397_bRtl$$inline_5408_upState$$inline_5401_upState$$inline_5412$$ = dvt.$Agent$.$isRightToLeft$($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_context$), $resources$$inline_5398_resources$$inline_5409$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getOptions$()._resources, 
      $overImage$$inline_5399_overImage$$inline_5410_overState$$inline_5402_overState$$inline_5413$$ = $bRtl$$inline_5397_bRtl$$inline_5408_upState$$inline_5401_upState$$inline_5412$$ && $resources$$inline_5398_resources$$inline_5409$$.isolateDownRtl ? $resources$$inline_5398_resources$$inline_5409$$.isolateDownRtl : $resources$$inline_5398_resources$$inline_5409$$.isolateDown, $downImage$$inline_5400_downImage$$inline_5411_downState$$inline_5403_downState$$inline_5414$$ = $bRtl$$inline_5397_bRtl$$inline_5408_upState$$inline_5401_upState$$inline_5412$$ && 
      $resources$$inline_5398_resources$$inline_5409$$.isolateOverRtl ? $resources$$inline_5398_resources$$inline_5409$$.isolateOverRtl : $resources$$inline_5398_resources$$inline_5409$$.isolateOver, $bRtl$$inline_5397_bRtl$$inline_5408_upState$$inline_5401_upState$$inline_5412$$ = new dvt.$Image$($JSCompiler_temp$$207_button$$76_button$$inline_5404_button$$inline_5415_context$$inline_5396_context$$inline_5407$$, $bRtl$$inline_5397_bRtl$$inline_5408_upState$$inline_5401_upState$$inline_5412$$ && 
      $resources$$inline_5398_resources$$inline_5409$$.isolateRtl ? $resources$$inline_5398_resources$$inline_5409$$.isolateRtl : $resources$$inline_5398_resources$$inline_5409$$.isolate, 0, 0, 12, 12), $overImage$$inline_5399_overImage$$inline_5410_overState$$inline_5402_overState$$inline_5413$$ = new dvt.$Image$($JSCompiler_temp$$207_button$$76_button$$inline_5404_button$$inline_5415_context$$inline_5396_context$$inline_5407$$, $overImage$$inline_5399_overImage$$inline_5410_overState$$inline_5402_overState$$inline_5413$$, 
      0, 0, 12, 12), $downImage$$inline_5400_downImage$$inline_5411_downState$$inline_5403_downState$$inline_5414$$ = new dvt.$Image$($JSCompiler_temp$$207_button$$76_button$$inline_5404_button$$inline_5415_context$$inline_5396_context$$inline_5407$$, $downImage$$inline_5400_downImage$$inline_5411_downState$$inline_5403_downState$$inline_5414$$, 0, 0, 12, 12), $bRtl$$inline_5397_bRtl$$inline_5408_upState$$inline_5401_upState$$inline_5412$$.$setInvisibleFill$(), $overImage$$inline_5399_overImage$$inline_5410_overState$$inline_5402_overState$$inline_5413$$.$setInvisibleFill$(), 
      $downImage$$inline_5400_downImage$$inline_5411_downState$$inline_5403_downState$$inline_5414$$.$setInvisibleFill$(), $JSCompiler_temp$$207_button$$76_button$$inline_5404_button$$inline_5415_context$$inline_5396_context$$inline_5407$$ = new dvt.$Button$($JSCompiler_temp$$207_button$$76_button$$inline_5404_button$$inline_5415_context$$inline_5396_context$$inline_5407$$, $bRtl$$inline_5397_bRtl$$inline_5408_upState$$inline_5401_upState$$inline_5412$$, $overImage$$inline_5399_overImage$$inline_5410_overState$$inline_5402_overState$$inline_5413$$, 
      $downImage$$inline_5400_downImage$$inline_5411_downState$$inline_5403_downState$$inline_5414$$), $JSCompiler_temp$$207_button$$76_button$$inline_5404_button$$inline_5415_context$$inline_5396_context$$inline_5407$$.$addEvtListener$(dvt.$MouseEvent$.$CLICK$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$__isolateNode$, $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$)
    }
    $transX$$10_x1$$55$$ = dvt.$Agent$.$isRightToLeft$($container$$218$$.$getCtx$()) ? $transX$$10_x1$$55$$ + 1 : $x2$$53$$ - 12 - 1;
    $JSCompiler_temp$$207_button$$76_button$$inline_5404_button$$inline_5415_context$$inline_5396_context$$inline_5407$$.$setTranslate$($transX$$10_x1$$55$$, ($y2$$43$$ + $rect$$49_tooltip$$49_y1$$45$$ - 12) / 2);
    $container$$218$$.$addChild$($JSCompiler_temp$$207_button$$76_button$$inline_5404_button$$inline_5415_context$$inline_5396_context$$inline_5407$$);
    dvt.$Agent$.$isTouchDevice$() && ($rect$$49_tooltip$$49_y1$$45$$ = new dvt.$Rect$($container$$218$$.$getCtx$(), -2, -2, 16, 16), $rect$$49_tooltip$$49_y1$$45$$.$setInvisibleFill$(), $JSCompiler_temp$$207_button$$76_button$$inline_5404_button$$inline_5415_context$$inline_5396_context$$inline_5407$$.$addChild$($rect$$49_tooltip$$49_y1$$45$$));
    dvt.$CSSStyle$.$afterSkinAlta$($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getOptions$().skin) ? $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getEventManager$().$associate$($JSCompiler_temp$$207_button$$76_button$$inline_5404_button$$inline_5415_context$$inline_5396_context$$inline_5407$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$) : ($rect$$49_tooltip$$49_y1$$45$$ = dvt.$Bundle$.$getTranslation$($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getOptions$(), 
    $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_bIsolated$ ? "tooltipRestore" : "tooltipIsolate", dvt.$Bundle$.$TREEMAP_PREFIX$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_bIsolated$ ? "RESTORE" : "ISOLATE"), $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getEventManager$().$associate$($JSCompiler_temp$$207_button$$76_button$$inline_5404_button$$inline_5415_context$$inline_5396_context$$inline_5407$$, new $DvtTreePeer$$($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$, 
    $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.getId(), $rect$$49_tooltip$$49_y1$$45$$)))
  }
  return $JSCompiler_temp$$207_button$$76_button$$inline_5404_button$$inline_5415_context$$inline_5396_context$$inline_5407$$
}
function $JSCompiler_StaticMethods__removeIsolateRestoreButton$$($JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$) {
  $JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$.$_isolateButton$ && ($JSCompiler_StaticMethods__removeChildShape$$($JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$, $JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$.$_isolateButton$), $JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$.$_isolateButton$ = $JSCompiler_alias_NULL$$)
}
$JSCompiler_prototypeAlias$$.$_createTextNode$ = function $$JSCompiler_prototypeAlias$$$$_createTextNode$$($container$$219$$) {
  var $chromeAdjustment_isRTL$$65_peer$$34_textHeight$$4$$ = dvt.$Agent$.$isRightToLeft$($container$$219$$.$getCtx$());
  if(!this.$_textStr$ || !$container$$219$$ || !this.$_textStyle$ || "off" == this.$_textStyle$) {
    return $JSCompiler_alias_NULL$$
  }
  var $availHeight$$12$$ = this.$_height$;
  if($JSCompiler_StaticMethods_GetTextSize$$(this) > $availHeight$$12$$) {
    return $JSCompiler_alias_NULL$$
  }
  var $hAlign$$6$$ = "node" == this.$_textStyle$ ? this.$_labelHalign$ : this.$_headerHalign$;
  $chromeAdjustment_isRTL$$65_peer$$34_textHeight$$4$$ && ("start" == $hAlign$$6$$ ? $hAlign$$6$$ = "end" : "end" == $hAlign$$6$$ && ($hAlign$$6$$ = "start"));
  var $availWidth$$19$$ = this.$_width$ - 6, $isolateWidth$$ = 0;
  this.$isIsolateEnabled$() && ($isolateWidth$$ = 13, $availWidth$$19$$ = "center" == $hAlign$$6$$ ? $availWidth$$19$$ - 2 * $isolateWidth$$ : $availWidth$$19$$ - $isolateWidth$$);
  if(0 >= $availWidth$$19$$) {
    return $JSCompiler_alias_NULL$$
  }
  var $text$$110$$ = new dvt.$OutputText$(this.$_view$.$getCtx$(), this.$_textStr$);
  $text$$110$$.$setFontSize$($JSCompiler_StaticMethods_GetTextSize$$(this));
  "start" == $hAlign$$6$$ ? ($chromeAdjustment_isRTL$$65_peer$$34_textHeight$$4$$ ? $text$$110$$.$setX$(this.$_x$ + 4 + $isolateWidth$$) : $text$$110$$.$setX$(this.$_x$ + 4), $text$$110$$.$alignLeft$()) : "center" == $hAlign$$6$$ ? ($text$$110$$.$setX$(this.$_x$ + this.$_width$ / 2), $text$$110$$.$alignCenter$()) : "end" == $hAlign$$6$$ && ($chromeAdjustment_isRTL$$65_peer$$34_textHeight$$4$$ ? $text$$110$$.$setX$(this.$_x$ + this.$_width$ - 4) : $text$$110$$.$setX$(this.$_x$ + this.$_width$ - 4 - 
  $isolateWidth$$), $text$$110$$.$alignRight$());
  "node" == this.$_textStyle$ ? ($JSCompiler_StaticMethods_ApplyLabelTextStyle$$(this, $text$$110$$), $availHeight$$12$$ = this.$_height$ - 4, $chromeAdjustment_isRTL$$65_peer$$34_textHeight$$4$$ = dvt.$TextUtils$.$getTextHeight$($text$$110$$), "top" == this.$_labelValign$ ? $text$$110$$.$setY$(this.$_y$ + 2) : "center" == this.$_labelValign$ ? $text$$110$$.$setY$(this.$_y$ + this.$_height$ / 2 - $chromeAdjustment_isRTL$$65_peer$$34_textHeight$$4$$ / 2) : "bottom" == this.$_labelValign$ && $text$$110$$.$setY$(this.$_y$ + 
  this.$_height$ - 2 - $chromeAdjustment_isRTL$$65_peer$$34_textHeight$$4$$)) : "header" == this.$_textStyle$ && ($chromeAdjustment_isRTL$$65_peer$$34_textHeight$$4$$ = dvt.$Agent$.$isPlatformWebkit$() ? 1 : 0, $text$$110$$.$setY$(this.$_y$ + 1 + this.$_titleBarHeight$ / 2 + $chromeAdjustment_isRTL$$65_peer$$34_textHeight$$4$$), $text$$110$$.$alignMiddle$(), $JSCompiler_StaticMethods_ApplyHeaderTextStyle$$(this, $text$$110$$, "labelStyle"));
  if($text$$110$$ != $JSCompiler_alias_NULL$$) {
    return"header" == this.$_textStyle$ && this.$isDrillReplaceEnabled$() ? ($JSCompiler_StaticMethods_ApplyHeaderTextStyle$$(this, $text$$110$$, "_drillableLabelStyle"), $text$$110$$.setCursor("pointer"), $chromeAdjustment_isRTL$$65_peer$$34_textHeight$$4$$ = new $DvtTreePeer$$(this, this.getId(), $JSCompiler_alias_NULL$$, this.$getDatatip$(), this.$getDatatipColor$()), $chromeAdjustment_isRTL$$65_peer$$34_textHeight$$4$$.$setDrillable$($JSCompiler_alias_TRUE$$), this.$_view$.$getEventManager$().$associate$($text$$110$$, 
    $chromeAdjustment_isRTL$$65_peer$$34_textHeight$$4$$)) : $text$$110$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), dvt.$TextUtils$.$fitText$($text$$110$$, $availWidth$$19$$, $availHeight$$12$$, $container$$219$$) ? $text$$110$$ : $JSCompiler_alias_NULL$$
  }
};
function $JSCompiler_StaticMethods_ApplyHeaderStyle$$($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$13$$, $shape$$93$$, $borderColor$$64_innerShape$$) {
  var $nodeHeaderDefaults$$3$$ = $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$13$$.$_view$.$getOptions$().nodeDefaults.header;
  $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$13$$.$_bHeaderUseNodeColor$ ? ($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$13$$ = $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$13$$.$getColor$(), $borderColor$$64_innerShape$$.$setSolidFill$($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$13$$), $borderColor$$64_innerShape$$ = dvt.$ColorUtils$.$interpolateColor$($nodeHeaderDefaults$$3$$.borderColor, $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$13$$, 
  0.5), $shape$$93$$.$setSolidFill$($borderColor$$64_innerShape$$)) : ($shape$$93$$.$setSolidFill$($nodeHeaderDefaults$$3$$.borderColor), $borderColor$$64_innerShape$$.$setSolidFill$($nodeHeaderDefaults$$3$$.backgroundColor))
}
function $JSCompiler_StaticMethods_ApplyHeaderTextStyle$$($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$, $text$$111$$, $styleType$$) {
  var $textStyle$$11$$ = [];
  1 >= $JSCompiler_StaticMethods_GetDepth$$($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$) && $textStyle$$11$$.push(new dvt.$CSSStyle$("font-weight:bold;"));
  $textStyle$$11$$.push($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_view$.$getOptions$().nodeDefaults.header[$styleType$$]);
  $JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_bHeaderUseNodeColor$ && ("labelStyle" == $styleType$$ || "_drillableLabelStyle" == $styleType$$) && $textStyle$$11$$.push(new dvt.$CSSStyle$("color: " + ($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_pattern$ ? "#000000" : dvt.$ColorUtils$.$getContrastingTextColor$($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_color$))));
  $JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_headerLabelStyle$ && $textStyle$$11$$.push($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_headerLabelStyle$);
  $text$$111$$.$setCSSStyle$(dvt.$CSSStyle$.$mergeStyles$($textStyle$$11$$))
}
$JSCompiler_prototypeAlias$$.$handleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOver$$() {
  !this.$_isolateButton$ && !dvt.$Agent$.$isTouchDevice$() && (this.$_isolateButton$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$$(this, this.$_shape$));
  $DvtTreemapNode$$.$superclass$.$handleMouseOver$.call(this)
};
$JSCompiler_prototypeAlias$$.$handleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOut$$() {
  this.$_bIsolated$ !== $JSCompiler_alias_TRUE$$ && !dvt.$Agent$.$isTouchDevice$() && $JSCompiler_StaticMethods__removeIsolateRestoreButton$$(this);
  $DvtTreemapNode$$.$superclass$.$handleMouseOut$.call(this)
};
$JSCompiler_prototypeAlias$$.$getDropSiteFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDropSiteFeedback$$() {
  return this.$_shape$ ? new dvt.$Rect$(this.$_view$.$getCtx$(), this.$_shape$.$getX$(), this.$_shape$.$getY$(), this.$_shape$.getWidth(), this.$_shape$.getHeight()) : $JSCompiler_alias_NULL$$
};
function $JSCompiler_StaticMethods__removeChildShape$$($JSCompiler_StaticMethods__removeChildShape$self$$, $childShape$$) {
  $childShape$$ && $JSCompiler_StaticMethods__removeChildShape$self$$.$_shape$.removeChild($childShape$$)
}
$JSCompiler_prototypeAlias$$.$__isolateNode$ = function $$JSCompiler_prototypeAlias$$$$__isolateNode$$($event$$735$$) {
  this.$_bIsolated$ = $JSCompiler_alias_TRUE$$;
  this.$hideHoverEffect$();
  var $JSCompiler_StaticMethods___isolate$self$$inline_5417$$ = this.$_view$, $currentNavigable$$inline_5419_displayable$$inline_5420$$ = $JSCompiler_StaticMethods___isolate$self$$inline_5417$$.$getEventManager$().$getFocus$();
  $currentNavigable$$inline_5419_displayable$$inline_5420$$ && $currentNavigable$$inline_5419_displayable$$inline_5420$$.$hideKeyboardFocusEffect$();
  $JSCompiler_StaticMethods___isolate$self$$inline_5417$$.$_isolatedNodes$.push(this);
  $JSCompiler_StaticMethods___isolate$self$$inline_5417$$.$getOptions$().isolatedNode = this.getId();
  $JSCompiler_StaticMethods___isolate$self$$inline_5417$$.dispatchEvent(dvt.$EventFactory$.$newTreemapIsolateEvent$(this.getId()));
  $JSCompiler_StaticMethods___isolate$self$$inline_5417$$.$_isolateRestoreLayout$ = $JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods___isolate$self$$inline_5417$$.$Layout$(new dvt.$Rectangle$(0, 0, $JSCompiler_StaticMethods___isolate$self$$inline_5417$$.$Width$, $JSCompiler_StaticMethods___isolate$self$$inline_5417$$.$Height$));
  $JSCompiler_StaticMethods___isolate$self$$inline_5417$$.$_isolateRestoreLayout$ = $JSCompiler_alias_FALSE$$;
  $currentNavigable$$inline_5419_displayable$$inline_5420$$ = this.$getDisplayable$();
  $JSCompiler_StaticMethods___isolate$self$$inline_5417$$.$_isolatedLayer$.$addChild$($currentNavigable$$inline_5419_displayable$$inline_5420$$);
  $JSCompiler_StaticMethods__renderIsolateRestore$$($JSCompiler_StaticMethods___isolate$self$$inline_5417$$, this);
  $JSCompiler_StaticMethods__removeIsolateRestoreButton$$(this);
  this.$UpdateAriaLabel$();
  $event$$735$$ && $event$$735$$.stopPropagation()
};
$JSCompiler_prototypeAlias$$.$__restoreNode$ = function $$JSCompiler_prototypeAlias$$$$__restoreNode$$($event$$736$$) {
  this.$_bIsolated$ = $JSCompiler_alias_FALSE$$;
  this.$hideHoverEffect$();
  var $JSCompiler_StaticMethods___restore$self$$inline_5422$$ = this.$_view$, $restoreNode$$inline_5423$$ = $JSCompiler_StaticMethods___restore$self$$inline_5422$$.$_isolatedNodes$.pop();
  $JSCompiler_StaticMethods___restore$self$$inline_5422$$.$getOptions$().isolatedNode = 0 < $JSCompiler_StaticMethods___restore$self$$inline_5422$$.$_isolatedNodes$.length ? $JSCompiler_StaticMethods___restore$self$$inline_5422$$.$_isolatedNodes$[$JSCompiler_StaticMethods___restore$self$$inline_5422$$.$_isolatedNodes$.length - 1].getId() : $JSCompiler_alias_NULL$$;
  var $currentNavigable$$inline_5424_id$$inline_6811$$ = $JSCompiler_StaticMethods___restore$self$$inline_5422$$.$getEventManager$().$getFocus$();
  $currentNavigable$$inline_5424_id$$inline_6811$$ && $currentNavigable$$inline_5424_id$$inline_6811$$.$hideKeyboardFocusEffect$();
  $currentNavigable$$inline_5424_id$$inline_6811$$ = $restoreNode$$inline_5423$$.getId();
  $JSCompiler_StaticMethods___restore$self$$inline_5422$$.$_navigableIdToFocus$ = $currentNavigable$$inline_5424_id$$inline_6811$$;
  $JSCompiler_StaticMethods___restore$self$$inline_5422$$.dispatchEvent(dvt.$EventFactory$.$newTreemapIsolateEvent$());
  $JSCompiler_StaticMethods___restore$self$$inline_5422$$.$_isolateRestoreLayout$ = $JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods___restore$self$$inline_5422$$.$Layout$(new dvt.$Rectangle$(0, 0, $JSCompiler_StaticMethods___restore$self$$inline_5422$$.$Width$, $JSCompiler_StaticMethods___restore$self$$inline_5422$$.$Height$));
  $JSCompiler_StaticMethods___restore$self$$inline_5422$$.$_isolateRestoreLayout$ = $JSCompiler_alias_FALSE$$;
  $JSCompiler_StaticMethods__renderIsolateRestore$$($JSCompiler_StaticMethods___restore$self$$inline_5422$$, $restoreNode$$inline_5423$$);
  $JSCompiler_StaticMethods__removeIsolateRestoreButton$$(this);
  this.$UpdateAriaLabel$();
  $event$$736$$ && $event$$736$$.stopPropagation()
};
$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$($target$$116$$, $x$$305$$, $y$$272$$) {
  return $target$$116$$ && $target$$116$$ instanceof dvt.$Button$ ? $JSCompiler_alias_NULL$$ : $DvtTreemapNode$$.$superclass$.$getDatatip$.call(this, $target$$116$$, $x$$305$$, $y$$272$$)
};
$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$($target$$117$$) {
  return $target$$117$$ && $target$$117$$ instanceof dvt.$Button$ ? $JSCompiler_alias_NULL$$ : $DvtTreemapNode$$.$superclass$.$getDatatipColor$.call(this, $target$$117$$)
};
$JSCompiler_prototypeAlias$$.$getTooltip$ = function $$JSCompiler_prototypeAlias$$$$getTooltip$$($target$$118$$) {
  return $target$$118$$ && $target$$118$$ instanceof dvt.$Button$ ? dvt.$Bundle$.$getTranslation$(this.$_view$.$getOptions$(), this.$_bIsolated$ ? "tooltipRestore" : "tooltipIsolate", dvt.$Bundle$.$TREEMAP_PREFIX$, this.$_bIsolated$ ? "RESTORE" : "ISOLATE") : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $options$$313$$ = this.$_view$.$getOptions$(), $states$$19$$ = [];
  this.$isSelectable$() && $states$$19$$.push(dvt.$Bundle$.$getTranslation$($options$$313$$, this.$isSelected$() ? "stateSelected" : "stateUnselected", dvt.$Bundle$.$UTIL_PREFIX$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  this.$_bIsolated$ && $states$$19$$.push(dvt.$Bundle$.$getTranslation$($options$$313$$, "stateIsolated", dvt.$Bundle$.$UTIL_PREFIX$, "STATE_ISOLATED"));
  this.$isDrillReplaceEnabled$() && $states$$19$$.push(dvt.$Bundle$.$getTranslation$($options$$313$$, "stateDrillable", dvt.$Bundle$.$UTIL_PREFIX$, "STATE_DRILLABLE"));
  return dvt.$Displayable$.$generateAriaLabel$(this.$getShortDesc$(), $states$$19$$)
};
$JSCompiler_prototypeAlias$$.$UpdateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$UpdateAriaLabel$$() {
  !dvt.$Agent$.$deferAriaCreation$() && this.$_shape$ && this.$_shape$.$setAriaProperty$("label", this.$getAriaLabel$())
};
function $DvtTreemapLayoutBase$$() {
  this.Init()
}
dvt.$Obj$.$createSubclass$($DvtTreemapLayoutBase$$, dvt.$Obj$);
$DvtTreemapLayoutBase$$.prototype.Init = function $$DvtTreemapLayoutBase$$$$Init$() {
  this.$_zIndex$ = 0
};
$DvtTreemapLayoutBase$$.prototype.$layout$ = $JSCompiler_emptyFn$$();
function $JSCompiler_StaticMethods_setNodeBounds$$($JSCompiler_StaticMethods_setNodeBounds$self_gap$$31$$, $availBounds_node$$334$$, $x$$307$$, $y$$274$$, $width$$178$$, $height$$149$$, $isRoot$$2_xx$$65$$) {
  $availBounds_node$$334$$.$_zIndex$ = $JSCompiler_StaticMethods_setNodeBounds$self_gap$$31$$.$_zIndex$;
  $JSCompiler_StaticMethods_setNodeBounds$self_gap$$31$$.$_zIndex$++;
  if(!$isRoot$$2_xx$$65$$ || !$availBounds_node$$334$$.$hasChildren$()) {
    $JSCompiler_StaticMethods_setNodeBounds$self_gap$$31$$ = $JSCompiler_StaticMethods_setNodeBounds$self_gap$$31$$.$getGapSize$($availBounds_node$$334$$.$_view$, $JSCompiler_StaticMethods_GetDepth$$($availBounds_node$$334$$));
    $isRoot$$2_xx$$65$$ = Math.round($x$$307$$ + $JSCompiler_StaticMethods_setNodeBounds$self_gap$$31$$);
    var $yy$$65$$ = Math.round($y$$274$$ + $JSCompiler_StaticMethods_setNodeBounds$self_gap$$31$$);
    if($availBounds_node$$334$$ = $availBounds_node$$334$$.$setLayoutParams$($isRoot$$2_xx$$65$$, $yy$$65$$, Math.round($x$$307$$ + $width$$178$$ - $JSCompiler_StaticMethods_setNodeBounds$self_gap$$31$$) - $isRoot$$2_xx$$65$$, Math.round($y$$274$$ + $height$$149$$ - $JSCompiler_StaticMethods_setNodeBounds$self_gap$$31$$) - $yy$$65$$)) {
      return $availBounds_node$$334$$
    }
  }
  return new dvt.$Rectangle$($x$$307$$, $y$$274$$, $width$$178$$, $height$$149$$)
}
$DvtTreemapLayoutBase$$.prototype.$getGapSize$ = function $$DvtTreemapLayoutBase$$$$$getGapSize$$($view$$63$$, $depth$$24$$) {
  var $groupGaps$$ = $view$$63$$.$getOptions$().groupGaps;
  return"outer" == $groupGaps$$ ? 1 == $depth$$24$$ && 2 <= $view$$63$$.$_maxDepth$ ? 3 : 0 : "all" == $groupGaps$$ ? $depth$$24$$ < $view$$63$$.$_maxDepth$ ? 3 : 0 : 0
};
function $DvtTreemapLayoutSquarifying$$() {
  this.Init()
}
dvt.$Obj$.$createSubclass$($DvtTreemapLayoutSquarifying$$, $DvtTreemapLayoutBase$$);
$DvtTreemapLayoutSquarifying$$.prototype.$layout$ = function $$DvtTreemapLayoutSquarifying$$$$$layout$$($view$$64$$, $root$$22$$, $x$$308$$, $y$$275$$, $width$$179$$, $height$$150$$, $bShowRoot$$1$$) {
  this.$_layout$($root$$22$$, $x$$308$$, $y$$275$$, $width$$179$$, $height$$150$$, $bShowRoot$$1$$ ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$)
};
$DvtTreemapLayoutSquarifying$$.prototype.$_layout$ = function $$DvtTreemapLayoutSquarifying$$$$$_layout$$($children$$21_node$$335$$, $availBounds$$1_x$$309$$, $w$$72_y$$276$$, $width$$180$$, $height$$151$$, $isRoot$$4$$) {
  $availBounds$$1_x$$309$$ = $JSCompiler_StaticMethods_setNodeBounds$$(this, $children$$21_node$$335$$, $availBounds$$1_x$$309$$, $w$$72_y$$276$$, $width$$180$$, $height$$151$$, $isRoot$$4$$);
  $children$$21_node$$335$$ = $children$$21_node$$335$$.$getChildNodes$();
  $children$$21_node$$335$$ != $JSCompiler_alias_NULL$$ && 0 < $children$$21_node$$335$$.length && ($JSCompiler_StaticMethods__calcPixelSize$$($children$$21_node$$335$$, $availBounds$$1_x$$309$$.$w$ * $availBounds$$1_x$$309$$.$h$), $children$$21_node$$335$$ = $children$$21_node$$335$$.slice(0).sort(function($children$$21_node$$335$$, $availBounds$$1_x$$309$$) {
    return $children$$21_node$$335$$.$getSize$() - $availBounds$$1_x$$309$$.$getSize$()
  }), $w$$72_y$$276$$ = Math.min($availBounds$$1_x$$309$$.$w$, $availBounds$$1_x$$309$$.$h$), $JSCompiler_StaticMethods__squarify$$(this, $children$$21_node$$335$$, $w$$72_y$$276$$, new dvt.$Rectangle$($availBounds$$1_x$$309$$.x, $availBounds$$1_x$$309$$.y, $availBounds$$1_x$$309$$.$w$, $availBounds$$1_x$$309$$.$h$)))
};
function $JSCompiler_StaticMethods__calcPixelSize$$($children$$22$$, $area$$23$$) {
  for(var $factor$$7_total$$6$$ = 0, $i$$871$$ = 0, $i$$871$$ = 0;$i$$871$$ < $children$$22$$.length;$i$$871$$++) {
    $factor$$7_total$$6$$ += 0 < $children$$22$$[$i$$871$$].$getSize$() ? $children$$22$$[$i$$871$$].$getSize$() : 0
  }
  $factor$$7_total$$6$$ = 0 == $area$$23$$ ? 0 : $area$$23$$ / $factor$$7_total$$6$$;
  for($i$$871$$ = 0;$i$$871$$ < $children$$22$$.length;$i$$871$$++) {
    var $child$$79$$ = $children$$22$$[$i$$871$$];
    $child$$79$$.$__pxSize$ = $child$$79$$.$getSize$() * $factor$$7_total$$6$$
  }
}
function $JSCompiler_StaticMethods__squarify$$($JSCompiler_StaticMethods__squarify$self$$, $children$$23$$, $w$$73$$, $r$$95$$) {
  var $row$$11$$ = [], $worst$$ = Infinity;
  if($children$$23$$ == $JSCompiler_alias_NULL$$ || 0 == $children$$23$$.length) {
    $JSCompiler_StaticMethods__layoutRow$$($JSCompiler_StaticMethods__squarify$self$$, $row$$11$$, $w$$73$$, $r$$95$$)
  }else {
    for(;0 < $children$$23$$.length;) {
      var $c$$50$$ = $children$$23$$.pop();
      if(0 > $c$$50$$.$__pxSize$) {
        $JSCompiler_StaticMethods__layoutRow$$($JSCompiler_StaticMethods__squarify$self$$, $row$$11$$, $w$$73$$, $r$$95$$);
        break
      }
      $row$$11$$.push($c$$50$$);
      var $min$$inline_5432_newWorst$$, $areas$$inline_5429_s2$$inline_5435$$ = $row$$11$$, $w$$inline_5430_w2$$inline_5436$$ = $w$$73$$, $total$$inline_5431$$ = 0;
      $min$$inline_5432_newWorst$$ = Infinity;
      for(var $max$$inline_5433$$ = -Infinity, $i$$inline_5434$$ = 0;$i$$inline_5434$$ < $areas$$inline_5429_s2$$inline_5435$$.length;$i$$inline_5434$$++) {
        $total$$inline_5431$$ += $areas$$inline_5429_s2$$inline_5435$$[$i$$inline_5434$$].$__pxSize$, $min$$inline_5432_newWorst$$ = Math.min($min$$inline_5432_newWorst$$, $areas$$inline_5429_s2$$inline_5435$$[$i$$inline_5434$$].$__pxSize$), $max$$inline_5433$$ = Math.max($max$$inline_5433$$, $areas$$inline_5429_s2$$inline_5435$$[$i$$inline_5434$$].$__pxSize$)
      }
      $areas$$inline_5429_s2$$inline_5435$$ = $total$$inline_5431$$ * $total$$inline_5431$$;
      $w$$inline_5430_w2$$inline_5436$$ *= $w$$inline_5430_w2$$inline_5436$$;
      $min$$inline_5432_newWorst$$ = Math.max($w$$inline_5430_w2$$inline_5436$$ * $max$$inline_5433$$ / $areas$$inline_5429_s2$$inline_5435$$, $areas$$inline_5429_s2$$inline_5435$$ / ($w$$inline_5430_w2$$inline_5436$$ * $min$$inline_5432_newWorst$$));
      if($min$$inline_5432_newWorst$$ > $worst$$) {
        $children$$23$$.push($c$$50$$);
        $row$$11$$.pop();
        $r$$95$$ = $JSCompiler_StaticMethods__layoutRow$$($JSCompiler_StaticMethods__squarify$self$$, $row$$11$$, $w$$73$$, $r$$95$$);
        $JSCompiler_StaticMethods__squarify$$($JSCompiler_StaticMethods__squarify$self$$, $children$$23$$, Math.min($r$$95$$.$w$, $r$$95$$.$h$), $r$$95$$);
        break
      }else {
        if(0 == $children$$23$$.length) {
          $JSCompiler_StaticMethods__layoutRow$$($JSCompiler_StaticMethods__squarify$self$$, $row$$11$$, $w$$73$$, $r$$95$$);
          break
        }else {
          $worst$$ = $min$$inline_5432_newWorst$$
        }
      }
    }
  }
}
function $JSCompiler_StaticMethods__layoutRow$$($JSCompiler_StaticMethods__layoutRow$self$$, $row$$12$$, $w$$75_width$$181$$, $r$$96$$) {
  var $height$$152_total$$8$$ = 0, $i$$873$$;
  for($i$$873$$ = 0;$i$$873$$ < $row$$12$$.length;$i$$873$$++) {
    $height$$152_total$$8$$ += $row$$12$$[$i$$873$$].$__pxSize$
  }
  var $x$$310$$ = $r$$96$$.x, $y$$277$$ = $r$$96$$.y;
  if($w$$75_width$$181$$ == $r$$96$$.$w$) {
    $height$$152_total$$8$$ = 0 == $w$$75_width$$181$$ ? 0 : $height$$152_total$$8$$ / $w$$75_width$$181$$;
    for($i$$873$$ = 0;$i$$873$$ < $row$$12$$.length;$i$$873$$++) {
      $w$$75_width$$181$$ = $row$$12$$[$i$$873$$].$__pxSize$ / $height$$152_total$$8$$, $JSCompiler_StaticMethods__layoutRow$self$$.$_layout$($row$$12$$[$i$$873$$], $x$$310$$, $y$$277$$, $w$$75_width$$181$$, $height$$152_total$$8$$, $JSCompiler_alias_FALSE$$), $x$$310$$ += $w$$75_width$$181$$
    }
    return new dvt.$Rectangle$($r$$96$$.x, $r$$96$$.y + $height$$152_total$$8$$, $r$$96$$.$w$, $r$$96$$.$h$ - $height$$152_total$$8$$)
  }
  $w$$75_width$$181$$ = 0 == $w$$75_width$$181$$ ? 0 : $height$$152_total$$8$$ / $w$$75_width$$181$$;
  for($i$$873$$ = 0;$i$$873$$ < $row$$12$$.length;$i$$873$$++) {
    $height$$152_total$$8$$ = $row$$12$$[$i$$873$$].$__pxSize$ / $w$$75_width$$181$$, $JSCompiler_StaticMethods__layoutRow$self$$.$_layout$($row$$12$$[$i$$873$$], $x$$310$$, $y$$277$$, $w$$75_width$$181$$, $height$$152_total$$8$$, $JSCompiler_alias_FALSE$$), $y$$277$$ += $height$$152_total$$8$$
  }
  return new dvt.$Rectangle$($r$$96$$.x + $w$$75_width$$181$$, $r$$96$$.y, $r$$96$$.$w$ - $w$$75_width$$181$$, $r$$96$$.$h$)
}
function $DvtTreemapLayoutSliceAndDice$$($isHoriz$$18$$) {
  this.Init();
  this.$_isHoriz$ = $isHoriz$$18$$
}
dvt.$Obj$.$createSubclass$($DvtTreemapLayoutSliceAndDice$$, $DvtTreemapLayoutBase$$);
$DvtTreemapLayoutSliceAndDice$$.prototype.$layout$ = function $$DvtTreemapLayoutSliceAndDice$$$$$layout$$($view$$65$$, $root$$23$$, $x$$311$$, $y$$278$$, $width$$182$$, $height$$153$$, $bShowRoot$$2$$) {
  this.$_layout$(this.$_isHoriz$, $view$$65$$, $root$$23$$, $x$$311$$, $y$$278$$, $width$$182$$, $height$$153$$, $bShowRoot$$2$$ ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$)
};
$DvtTreemapLayoutSliceAndDice$$.prototype.$_layout$ = function $$DvtTreemapLayoutSliceAndDice$$$$$_layout$$($isHoriz$$19$$, $view$$66$$, $children$$24_node$$336$$, $availBounds$$2_x$$312$$, $childX$$1_y$$279$$, $childY$$1_width$$183$$, $childWidth_height$$154$$, $childHeight_isRoot$$6$$) {
  var $child$$80_options$$314$$ = $view$$66$$.$getOptions$();
  $availBounds$$2_x$$312$$ = $JSCompiler_StaticMethods_setNodeBounds$$(this, $children$$24_node$$336$$, $availBounds$$2_x$$312$$, $childX$$1_y$$279$$, $childY$$1_width$$183$$, $childWidth_height$$154$$, $childHeight_isRoot$$6$$);
  $children$$24_node$$336$$ = $children$$24_node$$336$$.$getChildNodes$();
  if($children$$24_node$$336$$ != $JSCompiler_alias_NULL$$) {
    $childX$$1_y$$279$$ = $availBounds$$2_x$$312$$.x;
    $childY$$1_width$$183$$ = $availBounds$$2_x$$312$$.y;
    $childWidth_height$$154$$ = $availBounds$$2_x$$312$$.$w$;
    $childHeight_isRoot$$6$$ = $availBounds$$2_x$$312$$.$h$;
    var $total$$9$$ = 0, $i$$874$$;
    for($i$$874$$ = 0;$i$$874$$ < $children$$24_node$$336$$.length;$i$$874$$++) {
      $total$$9$$ += 0 < $children$$24_node$$336$$[$i$$874$$].$getSize$() ? $children$$24_node$$336$$[$i$$874$$].$getSize$() : 0
    }
    "on" == $child$$80_options$$314$$.sorting && ($children$$24_node$$336$$ = $children$$24_node$$336$$.slice(0), $children$$24_node$$336$$.sort(function($isHoriz$$19$$, $view$$66$$) {
      return $view$$66$$.$getSize$() - $isHoriz$$19$$.$getSize$()
    }));
    $isHoriz$$19$$ && dvt.$Agent$.$isRightToLeft$($view$$66$$.$getCtx$()) && ($children$$24_node$$336$$ = $children$$24_node$$336$$.slice(0).reverse());
    for($i$$874$$ = 0;$i$$874$$ < $children$$24_node$$336$$.length;$i$$874$$++) {
      if($child$$80_options$$314$$ = $children$$24_node$$336$$[$i$$874$$], !(0 >= $child$$80_options$$314$$.$getSize$())) {
        var $sizeRatio$$ = $child$$80_options$$314$$.$getSize$() / $total$$9$$;
        $isHoriz$$19$$ ? $childWidth_height$$154$$ = $availBounds$$2_x$$312$$.$w$ * $sizeRatio$$ : $childHeight_isRoot$$6$$ = $availBounds$$2_x$$312$$.$h$ * $sizeRatio$$;
        this.$_layout$(!$isHoriz$$19$$, $view$$66$$, $child$$80_options$$314$$, $childX$$1_y$$279$$, $childY$$1_width$$183$$, $childWidth_height$$154$$, $childHeight_isRoot$$6$$, $JSCompiler_alias_FALSE$$);
        $isHoriz$$19$$ ? $childX$$1_y$$279$$ += $childWidth_height$$154$$ : $childY$$1_width$$183$$ += $childHeight_isRoot$$6$$
      }
    }
  }
};
function $DvtTreemapKeyboardHandler$$($manager$$37$$) {
  this.Init($manager$$37$$)
}
dvt.$Obj$.$createSubclass$($DvtTreemapKeyboardHandler$$, $DvtTreeKeyboardHandler$$);
$DvtTreemapKeyboardHandler$$.prototype.$isNavigationEvent$ = function $$DvtTreemapKeyboardHandler$$$$$isNavigationEvent$$($event$$737_keyCode$$45$$) {
  var $isNavigable$$1$$ = $DvtTreemapKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $event$$737_keyCode$$45$$);
  if(!$isNavigable$$1$$ && ($event$$737_keyCode$$45$$ = $event$$737_keyCode$$45$$.keyCode, $event$$737_keyCode$$45$$ == dvt.$KeyboardEvent$.$OPEN_BRACKET$ || $event$$737_keyCode$$45$$ == dvt.$KeyboardEvent$.$CLOSE_BRACKET$)) {
    $isNavigable$$1$$ = $JSCompiler_alias_TRUE$$
  }
  return $isNavigable$$1$$
};
function $DvtTreemapEventManager$$($view$$67$$, $context$$647$$, $callback$$168$$, $callbackObj$$124$$) {
  $DvtTreeEventManager$$.call(this, $view$$67$$, $context$$647$$, $callback$$168$$, $callbackObj$$124$$)
}
dvt.$Obj$.$createSubclass$($DvtTreemapEventManager$$, $DvtTreeEventManager$$);
$DvtTreemapEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtTreemapEventManager$$$$$ProcessKeyboardEvent$$($event$$738$$) {
  var $eventConsumed$$8$$ = $JSCompiler_alias_TRUE$$;
  if($event$$738$$.keyCode == dvt.$KeyboardEvent$.$ENTER$ && $event$$738$$.ctrlKey) {
    var $node$$337$$ = this.$getFocus$();
    $node$$337$$.$isIsolateEnabled$() && ($node$$337$$.$_bIsolated$ ? $node$$337$$.$__restoreNode$() : $node$$337$$.$__isolateNode$());
    dvt.$EventManager$.$consumeEvent$($event$$738$$)
  }else {
    $eventConsumed$$8$$ = $DvtTreemapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$738$$)
  }
  return $eventConsumed$$8$$
};
$DvtTreemapEventManager$$.prototype.$isClearMenuAllowed$ = $JSCompiler_returnArg$$($JSCompiler_alias_FALSE$$);
dvt.$Bundle$.$addDefaultStrings$(dvt.$Bundle$.$TREEMAP_PREFIX$, {COLOR:"Color", ISOLATE:"Isolate", OTHER:"Other", RESTORE:"Restore", SIZE:"Size"});
function $DvtTreemapDefaults$$() {
  this.Init({skyros:$DvtTreemapDefaults$VERSION_1$$, alta:{}})
}
dvt.$Obj$.$createSubclass$($DvtTreemapDefaults$$, $DvtTreeDefaults$$);
var $DvtTreemapDefaults$VERSION_1$$ = {groupGaps:"outer", nodeDefaults:{header:{backgroundColor:"#FFFFFF", borderColor:"#d6dfe6", hoverBackgroundColor:"#ebeced", hoverOuterColor:"#ebeced", hoverInnerColor:"#d6d7d8", isolate:"auto", labelHalign:"start", labelStyle:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;color:#252525;"), selectedBackgroundColor:"#dae9f5", selectedInnerColor:"#FFFFFF", selectedOuterColor:"#000000", useNodeColor:"off", _hoverLabelStyle:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;color:#252525;"), 
_selectedLabelStyle:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;color:#252525;"), _drillableLabelStyle:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; color:#145c9e;"), _drillableHoverLabelStyle:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; color:#145c9e;"), _drillableSelectedLabelStyle:new dvt.$CSSStyle$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; color:#145c9e;")}, 
hoverColor:"#ebeced", groupLabelDisplay:"header", labelDisplay:"node", labelHalign:"center", labelValign:"center", selectedInnerColor:"#FFFFFF", selectedOuterColor:"#000000"}};
dvt.$Sunburst$ = function $dvt$$Sunburst$$($context$$648$$, $callback$$169$$, $callbackObj$$125$$) {
  this.Init($context$$648$$, $callback$$169$$, $callbackObj$$125$$)
};
$goog$exportPath_$$("dvt.Sunburst", dvt.$Sunburst$);
dvt.$Obj$.$createSubclass$(dvt.$Sunburst$, $DvtTreeView$$);
dvt.$Sunburst$.$_ROTATION_SHAPE_RADIUS$ = 15;
dvt.$Sunburst$.$_ROTATION_SHAPE_RADIUS_TOUCH$ = 60;
dvt.$Sunburst$.$_ANIMATION_TYPE_FAN$ = "fan";
dvt.$Sunburst$.$_BACKGROUND_INLINE_DEFAULT$ = "";
dvt.$Sunburst$.$_BUFFER_SPACE$ = 3;
dvt.$Sunburst$.$_MIN_BUFFER_SPACE$ = 2;
dvt.$Sunburst$.newInstance = function $dvt$$Sunburst$$newInstance$($context$$649$$, $callback$$170$$, $callbackObj$$126$$) {
  return new dvt.$Sunburst$($context$$649$$, $callback$$170$$, $callbackObj$$126$$)
};
dvt.$Sunburst$.newInstance = dvt.$Sunburst$.newInstance;
$JSCompiler_prototypeAlias$$ = dvt.$Sunburst$.prototype;
$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$650$$, $callback$$171$$, $callbackObj$$127$$) {
  dvt.$Sunburst$.$superclass$.Init.call(this, $context$$650$$, $callback$$171$$, $callbackObj$$127$$);
  this.$Defaults$ = new $DvtSunburstDefaults$$;
  this.$_angleExtent$ = 2 * Math.PI
};
$JSCompiler_prototypeAlias$$.$ApplyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$ApplyParsedProperties$$($options$$315_props$$24$$) {
  dvt.$Sunburst$.$superclass$.$ApplyParsedProperties$.call(this, $options$$315_props$$24$$);
  $options$$315_props$$24$$ = this.$getOptions$();
  dvt.$Agent$.$isPlatformIE$() ? this.$_rotateCursor$ = "url(" + $options$$315_props$$24$$._resources.rotateCursor + "), auto" : this.$_rotateCursor$ = "url(" + $options$$315_props$$24$$._resources.rotateCursor + ") 8 8, auto";
  this.$_startAngle$ = (360 - $options$$315_props$$24$$.startAngle) * $DvtSunburstNode$TWO_PI$$ / 360;
  this.$_startAngle$ > Math.PI && (this.$_startAngle$ -= $DvtSunburstNode$TWO_PI$$);
  "auto" == $options$$315_props$$24$$.animationOnDisplay && ($options$$315_props$$24$$.animationOnDisplay = "fan")
};
$JSCompiler_prototypeAlias$$.$Layout$ = function $$JSCompiler_prototypeAlias$$$$Layout$$($availSpace$$135$$) {
  var $bufferSpace$$1$$ = Math.max(Math.ceil(dvt.$Sunburst$.$_BUFFER_SPACE$ * Math.min($availSpace$$135$$.$w$, $availSpace$$135$$.$h$) / 400), dvt.$Sunburst$.$_MIN_BUFFER_SPACE$);
  $availSpace$$135$$.x += $bufferSpace$$1$$;
  $availSpace$$135$$.y += $bufferSpace$$1$$;
  $availSpace$$135$$.$w$ -= 2 * $bufferSpace$$1$$;
  $availSpace$$135$$.$h$ -= 2 * $bufferSpace$$1$$;
  $JSCompiler_StaticMethods_LayoutBreadcrumbs$$(this, $availSpace$$135$$);
  this.$_legend$ = $DvtTreeLegendRenderer$$.$render$(this, $availSpace$$135$$, this.$_legendSource$);
  this.$_totalRadius$ = Math.floor(Math.min($availSpace$$135$$.$w$, $availSpace$$135$$.$h$) / 2);
  this.$_root$ && $DvtSunburstLayout$$.$layout$(this.$_totalRadius$, this.$_root$, this.$_startAngle$, this.$_angleExtent$, this.$getOptions$().sorting)
};
$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$220$$, $bounds$$159$$) {
  $JSCompiler_StaticMethods_RenderBackground$$(this, $container$$220$$);
  this.$_breadcrumbs$ && $container$$220$$.$addChild$(this.$_breadcrumbs$);
  this.$_legend$ && ($container$$220$$.$addChild$(this.$_legend$), this.$_legend$ = $JSCompiler_alias_NULL$$);
  this.$_translatePt$ = new dvt.$Point$($bounds$$159$$.x + $bounds$$159$$.$w$ / 2, $bounds$$159$$.y + $bounds$$159$$.$h$ / 2);
  if("off" != this.$getOptions$().rotation && $JSCompiler_StaticMethods_HasValidData$$(this)) {
    var $buffer$$11_nodeContainer$$12_rotationShape$$ = dvt.$Agent$.$isTouchDevice$() ? dvt.$Sunburst$.$_ROTATION_SHAPE_RADIUS_TOUCH$ : dvt.$Sunburst$.$_ROTATION_SHAPE_RADIUS$, $buffer$$11_nodeContainer$$12_rotationShape$$ = new dvt.$Circle$(this.$getCtx$(), $bounds$$159$$.x + $bounds$$159$$.$w$ / 2, $bounds$$159$$.y + $bounds$$159$$.$h$ / 2, this.$_totalRadius$ + $buffer$$11_nodeContainer$$12_rotationShape$$);
    $buffer$$11_nodeContainer$$12_rotationShape$$.$setInvisibleFill$();
    $buffer$$11_nodeContainer$$12_rotationShape$$.setCursor(this.$_rotateCursor$);
    $container$$220$$.$addChild$($buffer$$11_nodeContainer$$12_rotationShape$$);
    this.$getEventManager$().$associate$($buffer$$11_nodeContainer$$12_rotationShape$$, new $DvtTreePeer$$($JSCompiler_alias_NULL$$, "_rotationShape"))
  }
  $buffer$$11_nodeContainer$$12_rotationShape$$ = new dvt.$Container$(this.$getCtx$());
  $buffer$$11_nodeContainer$$12_rotationShape$$.$setTranslate$(this.$_translatePt$.x, this.$_translatePt$.y);
  $container$$220$$.$addChild$($buffer$$11_nodeContainer$$12_rotationShape$$);
  if($JSCompiler_StaticMethods_HasValidData$$(this)) {
    var $nodeLayer$$ = new dvt.$Container$(this.$getCtx$());
    $buffer$$11_nodeContainer$$12_rotationShape$$.$addChild$($nodeLayer$$);
    this.$_root$.$render$($nodeLayer$$);
    $JSCompiler_StaticMethods_UpdateAriaNavigation$$(this, this.$_root$);
    this.$_selectedLayer$ = new dvt.$Container$(this.$getCtx$());
    $buffer$$11_nodeContainer$$12_rotationShape$$.$addChild$(this.$_selectedLayer$);
    this.$_hoverLayer$ = new dvt.$Container$(this.$getCtx$());
    $buffer$$11_nodeContainer$$12_rotationShape$$.$addChild$(this.$_hoverLayer$)
  }else {
    $JSCompiler_StaticMethods_RenderEmptyText$$(this, $container$$220$$)
  }
};
$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$($view$$68$$, $context$$651$$, $callback$$172$$, $callbackObj$$128$$) {
  return new $DvtSunburstEventManager$$($view$$68$$, $context$$651$$, $callback$$172$$, $callbackObj$$128$$)
};
$JSCompiler_prototypeAlias$$.$GetDisplayAnimation$ = function $$JSCompiler_prototypeAlias$$$$GetDisplayAnimation$$($container$$221$$, $bounds$$160$$) {
  if(this.$getOptions$().animationOnDisplay === dvt.$Sunburst$.$_ANIMATION_TYPE_FAN$ && $JSCompiler_StaticMethods_HasValidData$$(this)) {
    this.$_animateAngleExtent$(0);
    var $anim$$45$$ = new dvt.$CustomAnimation$(this.$getCtx$(), this, this.$AnimationDuration$);
    $anim$$45$$.$_animator$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, this, this.$__getAngleExtent$, this.$_animateAngleExtent$, 2 * Math.PI);
    return $anim$$45$$
  }
  return dvt.$Sunburst$.$superclass$.$GetDisplayAnimation$.call(this, $container$$221$$, $bounds$$160$$)
};
$JSCompiler_prototypeAlias$$.$GetDeleteContainer$ = function $$JSCompiler_prototypeAlias$$$$GetDeleteContainer$$() {
  var $ret$$128$$ = dvt.$Sunburst$.$superclass$.$GetDeleteContainer$.call(this);
  $ret$$128$$ && $ret$$128$$.$setTranslate$(this.$_translatePt$.x, this.$_translatePt$.y);
  return $ret$$128$$
};
$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  if(!this.$AnimationStopped$) {
    this.$_container$.$removeChildren$();
    var $availSpace$$136_selectedNodes$$3$$ = new dvt.$Rectangle$(0, 0, this.$Width$, this.$Height$);
    this.$Layout$($availSpace$$136_selectedNodes$$3$$);
    this.$Render$(this.$_container$, $availSpace$$136_selectedNodes$$3$$);
    for(var $availSpace$$136_selectedNodes$$3$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $i$$875$$ = 0;$i$$875$$ < $availSpace$$136_selectedNodes$$3$$.length;$i$$875$$++) {
      $availSpace$$136_selectedNodes$$3$$[$i$$875$$].$setSelected$($JSCompiler_alias_TRUE$$)
    }
  }
  this.$_angleExtent$ < 2 * Math.PI && this.$_animateAngleExtent$(2 * Math.PI);
  dvt.$Sunburst$.$superclass$.$OnAnimationEnd$.call(this)
};
$JSCompiler_prototypeAlias$$.$__moveToSelectedLayer$ = function $$JSCompiler_prototypeAlias$$$$__moveToSelectedLayer$$($displayable$$117$$) {
  this.$_selectedLayer$.$addChild$($displayable$$117$$);
  !dvt.$Agent$.$isBrowserSafari$() && !dvt.$Agent$.$isPlatformGecko$() && (this.$_selectedLayer$.$removeAllDrawEffects$(), this.$_selectedLayer$.$addDrawEffect$($DvtTreeNode$__NODE_SELECTED_SHADOW$$))
};
$JSCompiler_prototypeAlias$$.$__getAngleExtent$ = $JSCompiler_get$$("$_angleExtent$");
$JSCompiler_prototypeAlias$$.$_animateAngleExtent$ = function $$JSCompiler_prototypeAlias$$$$_animateAngleExtent$$($extent$$1$$) {
  this.$_angleExtent$ = $extent$$1$$;
  this.$Layout$(new dvt.$Rectangle$(0, 0, this.$Width$, this.$Height$));
  this.$_root$ && $JSCompiler_StaticMethods_updateShapes$$(this.$_root$, $JSCompiler_alias_TRUE$$)
};
function $JSCompiler_StaticMethods___setRotationAnchor$$($JSCompiler_StaticMethods___setRotationAnchor$self$$, $angle$$51$$) {
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$_currentAngle$ = $angle$$51$$;
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$ = new dvt.$Rect$($JSCompiler_StaticMethods___setRotationAnchor$self$$.$getCtx$(), 0, 0, $JSCompiler_StaticMethods___setRotationAnchor$self$$.$Width$, $JSCompiler_StaticMethods___setRotationAnchor$self$$.$Height$);
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$.$setInvisibleFill$();
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$.setCursor($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotateCursor$);
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$addChild$($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$);
  $JSCompiler_StaticMethods___setRotationAnchor$self$$.$getEventManager$().$associate$($JSCompiler_StaticMethods___setRotationAnchor$self$$.$_rotationMask$, new $DvtTreePeer$$($JSCompiler_alias_NULL$$, "_rotationShape"))
}
function $JSCompiler_StaticMethods___rotate$$($JSCompiler_StaticMethods___rotate$self$$, $newAngle$$) {
  var $change$$1$$ = $newAngle$$ - $JSCompiler_StaticMethods___rotate$self$$.$_currentAngle$;
  $JSCompiler_StaticMethods___rotate$self$$.$_currentAngle$ = $newAngle$$;
  $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ += $change$$1$$;
  $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ < -Math.PI ? $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ += 2 * Math.PI : $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ > Math.PI && ($JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ -= 2 * Math.PI);
  $JSCompiler_StaticMethods___rotate$self$$.$Layout$(new dvt.$Rectangle$(0, 0, $JSCompiler_StaticMethods___rotate$self$$.$Width$, $JSCompiler_StaticMethods___rotate$self$$.$Height$));
  $JSCompiler_StaticMethods___rotate$self$$.$_root$ && $JSCompiler_StaticMethods_updateShapes$$($JSCompiler_StaticMethods___rotate$self$$.$_root$, $JSCompiler_alias_TRUE$$);
  $JSCompiler_StaticMethods___rotate$self$$.dispatchEvent(dvt.$EventFactory$.$newSunburstRotationEvent$(360 - Math.round(180 * $JSCompiler_StaticMethods___rotate$self$$.$_startAngle$ / Math.PI), $JSCompiler_alias_FALSE$$))
}
function $JSCompiler_StaticMethods___endRotation$$($JSCompiler_StaticMethods___endRotation$self$$) {
  $JSCompiler_StaticMethods___endRotation$self$$.$_currentAngle$ = $JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods___endRotation$self$$.removeChild($JSCompiler_StaticMethods___endRotation$self$$.$_rotationMask$);
  $JSCompiler_StaticMethods___endRotation$self$$.$_rotationMask$ = $JSCompiler_alias_NULL$$;
  var $degrees$$8$$ = 360 - Math.round(180 * $JSCompiler_StaticMethods___endRotation$self$$.$_startAngle$ / Math.PI);
  $JSCompiler_StaticMethods___endRotation$self$$.dispatchEvent(dvt.$EventFactory$.$newSunburstRotationEvent$($degrees$$8$$, $JSCompiler_alias_FALSE$$));
  $JSCompiler_StaticMethods___endRotation$self$$.dispatchEvent(dvt.$EventFactory$.$newSunburstRotationEvent$($degrees$$8$$, $JSCompiler_alias_TRUE$$))
}
function $JSCompiler_StaticMethods__calcAngle$$($JSCompiler_StaticMethods__calcAngle$self$$, $x$$313$$, $y$$280$$) {
  return Math.atan2($y$$280$$ - $JSCompiler_StaticMethods__calcAngle$self$$.$_translatePt$.y, $x$$313$$ - $JSCompiler_StaticMethods__calcAngle$self$$.$_translatePt$.x)
}
$JSCompiler_prototypeAlias$$.$__getNodeUnderPoint$ = function $$JSCompiler_prototypeAlias$$$$__getNodeUnderPoint$$($x$$314$$, $y$$281$$) {
  return this.$_root$.$getNodeUnderPoint$($x$$314$$ - this.$_translatePt$.x, $y$$281$$ - this.$_translatePt$.y)
};
$JSCompiler_prototypeAlias$$.$__showDropSiteFeedback$ = function $$JSCompiler_prototypeAlias$$$$__showDropSiteFeedback$$($feedback$$2_node$$339$$) {
  ($feedback$$2_node$$339$$ = dvt.$Sunburst$.$superclass$.$__showDropSiteFeedback$.call(this, $feedback$$2_node$$339$$)) && $feedback$$2_node$$339$$.$setTranslate$(this.$_translatePt$.x, this.$_translatePt$.y);
  return $feedback$$2_node$$339$$
};
$JSCompiler_prototypeAlias$$.$GetComponentDescription$ = function $$JSCompiler_prototypeAlias$$$$GetComponentDescription$$() {
  return dvt.$Bundle$.$getTranslation$(this.$getOptions$(), "componentName", dvt.$Bundle$.$UTIL_PREFIX$, "SUNBURST")
};
$JSCompiler_prototypeAlias$$.$getBundlePrefix$ = function $$JSCompiler_prototypeAlias$$$$getBundlePrefix$$() {
  return dvt.$Bundle$.$SUNBURST_PREFIX$
};
$JSCompiler_prototypeAlias$$.$CreateNode$ = function $$JSCompiler_prototypeAlias$$$$CreateNode$$($nodeOptions$$6$$) {
  return new $DvtSunburstNode$$(this, $nodeOptions$$6$$)
};
function $DvtSunburstNode$$($sunburst$$, $props$$25$$) {
  this.Init($sunburst$$, $props$$25$$);
  var $nodeDefaults$$5$$ = this.$_view$.$getOptions$().nodeDefaults;
  this.$_labelDisplay$ = $props$$25$$.labelDisplay ? $props$$25$$.labelDisplay : $nodeDefaults$$5$$.labelDisplay;
  this.$_labelHalign$ = $props$$25$$.labelHalign ? $props$$25$$.labelHalign : $nodeDefaults$$5$$.labelHalign;
  this.$_radius$ = $props$$25$$.radius
}
dvt.$Obj$.$createSubclass$($DvtSunburstNode$$, $DvtTreeNode$$);
var $DvtSunburstNode$TWO_PI$$ = 2 * Math.PI;
$JSCompiler_prototypeAlias$$ = $DvtSunburstNode$$.prototype;
$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$222$$) {
  if(this.$_hasLayout$) {
    this.$_nodeContainer$ = $container$$222$$;
    this.$_shape$ = this.$_createShapeNode$();
    $container$$222$$.$addChild$(this.$_shape$);
    var $afRoot$$11_template$$26$$ = $JSCompiler_StaticMethods_GetTemplate$$(this);
    if(!this.$_parent$ && (0 == this.$_innerRadius$ && this.$_angleExtent$ == $DvtSunburstNode$TWO_PI$$) && $afRoot$$11_template$$26$$) {
      var $dims$$72_elAttrs$$2_sqrt2$$ = Math.sqrt(2), $aw$$4_matrix$$23$$ = this.$_outerRadius$ * $dims$$72_elAttrs$$2_sqrt2$$ - 4;
      this.$_x$ = -this.$_outerRadius$ / $dims$$72_elAttrs$$2_sqrt2$$ + 2;
      this.$_y$ = -this.$_outerRadius$ / $dims$$72_elAttrs$$2_sqrt2$$ + 2;
      var $dims$$72_elAttrs$$2_sqrt2$$ = this.$getOptions$()._cf, $afContext$$65$$ = this.$_view$.$_afContext$;
      $afContext$$65$$.$_elContext$ = $dims$$72_elAttrs$$2_sqrt2$$;
      0 < $aw$$4_matrix$$23$$ && 0 < $aw$$4_matrix$$23$$ && ($JSCompiler_StaticMethods_setAvailableWidth$$($afContext$$65$$, $aw$$4_matrix$$23$$), $JSCompiler_StaticMethods_setAvailableHeight$$($afContext$$65$$, $aw$$4_matrix$$23$$), $afContext$$65$$.$setFontSize$($JSCompiler_StaticMethods_GetTextSize$$(this)), this.$_contentRoot$ = $afRoot$$11_template$$26$$ = $DvtAfComponentFactory$$.$parseAndLayout$($afContext$$65$$, $afRoot$$11_template$$26$$, this.$_shape$), $dims$$72_elAttrs$$2_sqrt2$$ = $afRoot$$11_template$$26$$.$getDimensions$(), 
      $afRoot$$11_template$$26$$.$setTranslate$(this.$_x$ + ($aw$$4_matrix$$23$$ - $dims$$72_elAttrs$$2_sqrt2$$.$w$) / 2, this.$_y$ + ($aw$$4_matrix$$23$$ - $dims$$72_elAttrs$$2_sqrt2$$.$h$) / 2))
    }else {
      this.$_text$ = this.$_createTextNode$(this.$_shape$), this.$_text$ != $JSCompiler_alias_NULL$$ && (this.$_shape$.$addChild$(this.$_text$), this.$_pattern$ && ($dims$$72_elAttrs$$2_sqrt2$$ = this.$_text$.$measureDimensions$(), this.$_textBackground$ = new dvt.$Rect$(this.$_view$.$getCtx$(), $dims$$72_elAttrs$$2_sqrt2$$.x, $dims$$72_elAttrs$$2_sqrt2$$.y, $dims$$72_elAttrs$$2_sqrt2$$.$w$, $dims$$72_elAttrs$$2_sqrt2$$.$h$), this.$_textBackground$.$setSolidFill$("#FFFFFF"), this.$_textBackground$.$setMouseEnabled$($JSCompiler_alias_FALSE$$), 
      this.$_shape$.$addChild$(this.$_textBackground$), $aw$$4_matrix$$23$$ = this.$_text$.$getMatrix$(), $aw$$4_matrix$$23$$.$isIdentity$() || this.$_textBackground$.$setMatrix$($aw$$4_matrix$$23$$), this.$_shape$.$addChild$(this.$_text$)))
    }
    this.$_shape$.$setAriaRole$("img");
    this.$UpdateAriaLabel$();
    this.$renderChildren$($container$$222$$)
  }
};
$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$48$$) {
  $DvtSunburstNode$$.$superclass$.$setSelected$.call(this, $selected$$48$$);
  this.$isSelected$() ? (this.$_shape$.$setSelected$($JSCompiler_alias_TRUE$$), this.$_view$.$__moveToSelectedLayer$(this.$_shape$)) : (this.$_shape$.$setSelected$($JSCompiler_alias_FALSE$$), this.$_nodeContainer$ && this.$_nodeContainer$.$addChild$(this.$_shape$))
};
$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_shape$ && this.$_hasLayout$ && (this.$_shape$.$showHoverEffect$(), this.$isSelected$() ? this.$_view$.$__moveToSelectedLayer$(this.$_shape$) : this.$_view$.$_hoverLayer$.$addChild$(this.$_shape$))
};
$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_shape$ && (this.$_hasLayout$ && !this.$isShowingKeyboardFocusEffect$()) && (this.$_shape$.$hideHoverEffect$(), !this.$isSelected$() && this.$_nodeContainer$ && this.$_nodeContainer$.$addChild$(this.$_shape$))
};
function $JSCompiler_StaticMethods_isExpandCollapseEnabled$$($JSCompiler_StaticMethods_isExpandCollapseEnabled$self$$) {
  return"insert" == $JSCompiler_StaticMethods_isExpandCollapseEnabled$self$$.$_drilling$ || "insertAndReplace" == $JSCompiler_StaticMethods_isExpandCollapseEnabled$self$$.$_drilling$
}
$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$739_next$$19$$) {
  var $keyCode$$47_lastVisitedChild$$, $lastVisitedMidAngle_navigables$$16$$, $i$$inline_5465_idx$$39$$, $root$$24$$;
  if($event$$739_next$$19$$.type == dvt.$MouseEvent$.$CLICK$) {
    return $DvtSunburstNode$$.$superclass$.$getNextNavigable$.call(this, $event$$739_next$$19$$)
  }
  $keyCode$$47_lastVisitedChild$$ = $event$$739_next$$19$$.keyCode;
  if($keyCode$$47_lastVisitedChild$$ == dvt.$KeyboardEvent$.$SPACE$ && $event$$739_next$$19$$.ctrlKey) {
    return this
  }
  for($root$$24$$ = this;$root$$24$$.$_parent$;) {
    $root$$24$$ = $root$$24$$.$_parent$
  }
  $lastVisitedMidAngle_navigables$$16$$ = $JSCompiler_StaticMethods_GetNodesAtDepth$$(this, $root$$24$$, $JSCompiler_StaticMethods_GetDepth$$(this));
  a: {
    for($i$$inline_5465_idx$$39$$ = 0;$i$$inline_5465_idx$$39$$ < $lastVisitedMidAngle_navigables$$16$$.length;$i$$inline_5465_idx$$39$$++) {
      if(this === $lastVisitedMidAngle_navigables$$16$$[$i$$inline_5465_idx$$39$$]) {
        break a
      }
    }
    $i$$inline_5465_idx$$39$$ = -1
  }
  var $midAngle$$1$$ = this.$_startAngle$ + this.$_angleExtent$ / 2, $midAngle$$1$$ = $DvtSunburstNode$_normalizedRadToDeg$$($midAngle$$1$$);
  switch($keyCode$$47_lastVisitedChild$$) {
    case dvt.$KeyboardEvent$.$UP_ARROW$:
      if(this === $root$$24$$ || 180 < $midAngle$$1$$) {
        if($keyCode$$47_lastVisitedChild$$ = this.$_lastVisitedChild$) {
          if($lastVisitedMidAngle_navigables$$16$$ = $keyCode$$47_lastVisitedChild$$.$_startAngle$ + $keyCode$$47_lastVisitedChild$$.$_angleExtent$ / 2, $lastVisitedMidAngle_navigables$$16$$ = $DvtSunburstNode$_normalizedRadToDeg$$($lastVisitedMidAngle_navigables$$16$$), 180 < $lastVisitedMidAngle_navigables$$16$$) {
            return $keyCode$$47_lastVisitedChild$$
          }
        }
        $event$$739_next$$19$$ = dvt.$KeyboardHandler$.$getNextAdjacentNavigable$(this, $event$$739_next$$19$$, $JSCompiler_StaticMethods_getDescendantNodes$$(this))
      }else {
        $event$$739_next$$19$$ = $JSCompiler_StaticMethods__navigateToParent$$(this)
      }
      break;
    case dvt.$KeyboardEvent$.$DOWN_ARROW$:
      if(this === $root$$24$$ || 0 <= $midAngle$$1$$ && 180 >= $midAngle$$1$$) {
        if($keyCode$$47_lastVisitedChild$$ = this.$_lastVisitedChild$) {
          if($lastVisitedMidAngle_navigables$$16$$ = $keyCode$$47_lastVisitedChild$$.$_startAngle$ + $keyCode$$47_lastVisitedChild$$.$_angleExtent$ / 2, $lastVisitedMidAngle_navigables$$16$$ = $DvtSunburstNode$_normalizedRadToDeg$$($lastVisitedMidAngle_navigables$$16$$), 0 <= $lastVisitedMidAngle_navigables$$16$$ && 180 >= $lastVisitedMidAngle_navigables$$16$$) {
            return $keyCode$$47_lastVisitedChild$$
          }
        }
        $event$$739_next$$19$$ = dvt.$KeyboardHandler$.$getNextAdjacentNavigable$(this, $event$$739_next$$19$$, $JSCompiler_StaticMethods_getDescendantNodes$$(this))
      }else {
        $event$$739_next$$19$$ = $JSCompiler_StaticMethods__navigateToParent$$(this)
      }
      break;
    case dvt.$KeyboardEvent$.$LEFT_ARROW$:
      $event$$739_next$$19$$ = 1 == $lastVisitedMidAngle_navigables$$16$$.length ? this : 0 == $i$$inline_5465_idx$$39$$ ? $lastVisitedMidAngle_navigables$$16$$[$lastVisitedMidAngle_navigables$$16$$.length - 1] : $lastVisitedMidAngle_navigables$$16$$[$i$$inline_5465_idx$$39$$ - 1];
      break;
    case dvt.$KeyboardEvent$.$RIGHT_ARROW$:
      $event$$739_next$$19$$ = 1 == $lastVisitedMidAngle_navigables$$16$$.length ? this : $i$$inline_5465_idx$$39$$ == $lastVisitedMidAngle_navigables$$16$$.length - 1 ? $lastVisitedMidAngle_navigables$$16$$[0] : $lastVisitedMidAngle_navigables$$16$$[$i$$inline_5465_idx$$39$$ + 1];
      break;
    default:
      $event$$739_next$$19$$ = this
  }
  $JSCompiler_StaticMethods_MarkAsLastVisitedChild$$($event$$739_next$$19$$);
  return $event$$739_next$$19$$
};
function $JSCompiler_StaticMethods__navigateToParent$$($JSCompiler_StaticMethods__navigateToParent$self_next$$20$$) {
  var $parent$$94$$ = $JSCompiler_StaticMethods__navigateToParent$self_next$$20$$.$_parent$;
  $parent$$94$$ && ($JSCompiler_StaticMethods__navigateToParent$self_next$$20$$ = $parent$$94$$, $JSCompiler_StaticMethods_MarkAsLastVisitedChild$$($parent$$94$$));
  $JSCompiler_StaticMethods_MarkAsLastVisitedChild$$($JSCompiler_StaticMethods__navigateToParent$self_next$$20$$);
  return $JSCompiler_StaticMethods__navigateToParent$self_next$$20$$
}
function $DvtSunburstNode$_normalizedRadToDeg$$($deg$$1_rad$$2$$) {
  $deg$$1_rad$$2$$ = dvt.$Math$.$radsToDegrees$($deg$$1_rad$$2$$);
  0 > $deg$$1_rad$$2$$ ? $deg$$1_rad$$2$$ += 360 : 360 < $deg$$1_rad$$2$$ && ($deg$$1_rad$$2$$ -= 360);
  return $deg$$1_rad$$2$$
}
$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  if(this.$_shape$) {
    var $bounds$$163$$ = this.$_shape$.$getDimensions$(), $point$$56$$ = new dvt.$Point$($bounds$$163$$.x, $bounds$$163$$.y), $point$$56$$ = this.$_shape$.$localToStage$($point$$56$$);
    $bounds$$163$$.x = $point$$56$$.x;
    $bounds$$163$$.y = $point$$56$$.y;
    return $bounds$$163$$
  }
  return new dvt.$Rectangle$(0, 0, 0, 0)
};
$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_shape$ ? this.$_shape$.$getElem$() : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$getContextMenuLocation$ = function $$JSCompiler_prototypeAlias$$$$getContextMenuLocation$$() {
  return this.$_shape$.$localToStage$($DvtSunburstNode$_calcPointOnArc$$(0.5 * (this.$_outerRadius$ + this.$_innerRadius$), this.$_startAngle$ + this.$_angleExtent$ / 2))
};
$JSCompiler_prototypeAlias$$.$setLayoutParams$ = function $$JSCompiler_prototypeAlias$$$$setLayoutParams$$($innerRadius$$9$$, $outerRadius$$7$$, $startAngle$$19$$, $angleExtent$$16$$) {
  this.$_innerRadius$ = $innerRadius$$9$$;
  this.$_outerRadius$ = $outerRadius$$7$$;
  this.$_startAngle$ = $startAngle$$19$$;
  this.$_angleExtent$ = $angleExtent$$16$$;
  this.$_hasLayout$ = $JSCompiler_alias_TRUE$$
};
$JSCompiler_prototypeAlias$$.$GetFill$ = function $$JSCompiler_prototypeAlias$$$$GetFill$$() {
  return this.$_bArtificialRoot$ ? dvt.$SolidFill$.$invisibleFill$() : $DvtSunburstNode$$.$superclass$.$GetFill$.call(this)
};
$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$($endStartAngle_endState$$18$$) {
  var $r$$97$$ = dvt.$ColorUtils$.$getRed$(this.$_color$), $g$$30$$ = dvt.$ColorUtils$.$getGreen$(this.$_color$), $b$$67$$ = dvt.$ColorUtils$.$getBlue$(this.$_color$), $startAngle$$20$$ = this.$_startAngle$;
  $endStartAngle_endState$$18$$ && !isNaN($endStartAngle_endState$$18$$[2]) && ($endStartAngle_endState$$18$$ = $endStartAngle_endState$$18$$[2], $endStartAngle_endState$$18$$ - this.$_startAngle$ > Math.PI ? $startAngle$$20$$ += $DvtSunburstNode$TWO_PI$$ : this.$_startAngle$ - $endStartAngle_endState$$18$$ > Math.PI && ($startAngle$$20$$ -= $DvtSunburstNode$TWO_PI$$));
  return[this.$_innerRadius$, this.$_outerRadius$, $startAngle$$20$$, this.$_angleExtent$, $r$$97$$, $g$$30$$, $b$$67$$]
};
$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$SetAnimationParams$$($params$$55$$) {
  this.$setLayoutParams$($params$$55$$[0], $params$$55$$[1], $params$$55$$[2], $params$$55$$[3]);
  this.$_color$ = dvt.$ColorUtils$.$makeRGB$(Math.round($params$$55$$[4]), Math.round($params$$55$$[5]), Math.round($params$$55$$[6]));
  $JSCompiler_StaticMethods_updateShapes$$(this, $JSCompiler_alias_FALSE$$)
};
$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$68$$, $oldNode$$20$$) {
  $oldNode$$20$$.$_hasLayout$ && 0 < $oldNode$$20$$.$_angleExtent$ ? $DvtSunburstNode$$.$superclass$.$animateUpdate$.call(this, $handler$$68$$, $oldNode$$20$$) : this.$animateInsert$($handler$$68$$)
};
$JSCompiler_prototypeAlias$$.$getNodeUnderPoint$ = function $$JSCompiler_prototypeAlias$$$$getNodeUnderPoint$$($x$$315$$, $y$$282$$) {
  if(this.contains($x$$315$$, $y$$282$$)) {
    return this
  }
  for(var $childNodes$$26$$ = this.$getChildNodes$(), $i$$876$$ = 0;$i$$876$$ < $childNodes$$26$$.length;$i$$876$$++) {
    var $ret$$129$$ = $childNodes$$26$$[$i$$876$$].$getNodeUnderPoint$($x$$315$$, $y$$282$$);
    if($ret$$129$$) {
      return $ret$$129$$
    }
  }
  return $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$316$$, $y$$283$$) {
  var $angle$$52$$ = $DvtSunburstNode$_calcAngle$$($x$$316$$, $y$$283$$);
  return Math.sqrt($x$$316$$ * $x$$316$$ + $y$$283$$ * $y$$283$$) >= this.$_innerRadius$ && Math.sqrt($x$$316$$ * $x$$316$$ + $y$$283$$ * $y$$283$$) <= this.$_outerRadius$ && $JSCompiler_StaticMethods_ContainsAngle$$(this, $angle$$52$$)
};
function $JSCompiler_StaticMethods_ContainsAngle$$($JSCompiler_StaticMethods_ContainsAngle$self$$, $angle$$53$$) {
  for(;$angle$$53$$ < $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$;) {
    $angle$$53$$ += $DvtSunburstNode$TWO_PI$$
  }
  for(;$angle$$53$$ - $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$ > $DvtSunburstNode$TWO_PI$$;) {
    $angle$$53$$ -= $DvtSunburstNode$TWO_PI$$
  }
  return $angle$$53$$ >= $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$ && $angle$$53$$ <= $JSCompiler_StaticMethods_ContainsAngle$self$$.$_startAngle$ + $JSCompiler_StaticMethods_ContainsAngle$self$$.$_angleExtent$
}
function $DvtSunburstNode$_calcPointOnArc$$($radius$$26$$, $angle$$54$$) {
  return{x:Math.cos($angle$$54$$) * $radius$$26$$, y:Math.sin($angle$$54$$) * $radius$$26$$}
}
function $DvtSunburstNode$_calcAngle$$($x$$318$$, $y$$285$$) {
  var $angle$$55$$ = Math.atan2($y$$285$$, $x$$318$$);
  0 > $angle$$55$$ ? $angle$$55$$ += $DvtSunburstNode$TWO_PI$$ : $angle$$55$$ > $DvtSunburstNode$TWO_PI$$ && ($angle$$55$$ -= $DvtSunburstNode$TWO_PI$$);
  return $angle$$55$$
}
$JSCompiler_prototypeAlias$$.$_createShapeNode$ = function $$JSCompiler_prototypeAlias$$$$_createShapeNode$$() {
  if(!this.$_angleExtent$ || 0 >= this.$_angleExtent$) {
    return $JSCompiler_alias_NULL$$
  }
  var $cmd$$18_shape$$95$$ = $JSCompiler_StaticMethods__createPathCmd$$(this), $cmd$$18_shape$$95$$ = new dvt.$Path$(this.$_view$.$getCtx$(), $cmd$$18_shape$$95$$);
  this.$_view$.$getEventManager$().$associate$($cmd$$18_shape$$95$$, this);
  $cmd$$18_shape$$95$$.$setAlpha$(this.$getAlpha$());
  $cmd$$18_shape$$95$$.$setFill$(this.$GetFill$());
  var $nodeDefaults$$6$$ = this.$_view$.$getOptions$().nodeDefaults, $options$$316$$ = this.$getOptions$();
  $cmd$$18_shape$$95$$.$setStroke$(new dvt.$SolidStroke$($options$$316$$.borderColor || $nodeDefaults$$6$$.borderColor, 1, $options$$316$$.borderWidth || $nodeDefaults$$6$$.borderWidth));
  $cmd$$18_shape$$95$$.$setHoverStroke$(new dvt.$SolidStroke$($nodeDefaults$$6$$.hoverColor, 1, 3));
  $cmd$$18_shape$$95$$.$setSelectedStroke$(new dvt.$SolidStroke$($nodeDefaults$$6$$.selectedInnerColor, 1, 1.5), new dvt.$SolidStroke$($nodeDefaults$$6$$.selectedOuterColor, 1, 3.5));
  $cmd$$18_shape$$95$$.$setSelectedHoverStroke$(new dvt.$SolidStroke$($nodeDefaults$$6$$.hoverColor, 1, 3));
  $cmd$$18_shape$$95$$.$setSelectable$(this.$isSelectable$());
  this.$_bArtificialRoot$ && ($cmd$$18_shape$$95$$.$setAlpha$(0.001), $cmd$$18_shape$$95$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$));
  return $cmd$$18_shape$$95$$
};
function $JSCompiler_StaticMethods__createPathCmd$$($JSCompiler_StaticMethods__createPathCmd$self$$) {
  var $cmd$$19_p1$$9$$, $p2$$8$$, $p3$$2$$, $p4$$2$$;
  $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ < $DvtSunburstNode$TWO_PI$$ ? ($cmd$$19_p1$$9$$ = $DvtSunburstNode$_calcPointOnArc$$($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $p2$$8$$ = $DvtSunburstNode$_calcPointOnArc$$($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$), 
  $p3$$2$$ = $DvtSunburstNode$_calcPointOnArc$$($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$), $p4$$2$$ = $DvtSunburstNode$_calcPointOnArc$$($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $cmd$$19_p1$$9$$ = dvt.$PathUtils$.moveTo($cmd$$19_p1$$9$$.x, $cmd$$19_p1$$9$$.y) + dvt.$PathUtils$.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, 
  $JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$, 1, $p2$$8$$.x, $p2$$8$$.y) + dvt.$PathUtils$.lineTo($p3$$2$$.x, $p3$$2$$.y) + dvt.$PathUtils$.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$, 0, $p4$$2$$.x, $p4$$2$$.y) + dvt.$PathUtils$.closePath()) : ($cmd$$19_p1$$9$$ = 
  $DvtSunburstNode$_calcPointOnArc$$($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $p2$$8$$ = $DvtSunburstNode$_calcPointOnArc$$($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2), $p3$$2$$ = $DvtSunburstNode$_calcPointOnArc$$($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, 
  $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$), $p4$$2$$ = $DvtSunburstNode$_calcPointOnArc$$($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_startAngle$ + $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2), $cmd$$19_p1$$9$$ = dvt.$PathUtils$.moveTo($cmd$$19_p1$$9$$.x, $cmd$$19_p1$$9$$.y) + dvt.$PathUtils$.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, 
  $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 1, $p2$$8$$.x, $p2$$8$$.y) + dvt.$PathUtils$.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_outerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 1, $cmd$$19_p1$$9$$.x, $cmd$$19_p1$$9$$.y), 0 < $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$ && ($cmd$$19_p1$$9$$ += dvt.$PathUtils$.moveTo($p4$$2$$.x, $p4$$2$$.y) + 
  dvt.$PathUtils$.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 0, $p3$$2$$.x, $p3$$2$$.y) + dvt.$PathUtils$.arcTo($JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_innerRadius$, $JSCompiler_StaticMethods__createPathCmd$self$$.$_angleExtent$ / 2, 0, $p4$$2$$.x, $p4$$2$$.y)), $cmd$$19_p1$$9$$ += 
  dvt.$PathUtils$.closePath());
  return $cmd$$19_p1$$9$$
}
$JSCompiler_prototypeAlias$$.$_createTextNode$ = function $$JSCompiler_prototypeAlias$$$$_createTextNode$$($JSCompiler_temp$$250_actualTextWidth$$inline_5474_container$$224_textAnchor$$inline_5475$$) {
  if(!this.$_textStr$ || (!$JSCompiler_temp$$250_actualTextWidth$$inline_5474_container$$224_textAnchor$$inline_5475$$ || !this.$_labelDisplay$ || "off" == this.$_labelDisplay$) || this == this.$_view$.$_root$ && this.$_angleExtent$ < $DvtSunburstNode$TWO_PI$$) {
    return $JSCompiler_alias_NULL$$
  }
  var $bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$ = $JSCompiler_alias_FALSE$$;
  "auto" == this.$_labelDisplay$ ? $bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$ = !dvt.$Agent$.$isPlatformIE$() && dvt.$Agent$.$getOS$() == dvt.$Agent$.$WINDOWS_OS$ ? $JSCompiler_alias_FALSE$$ : $JSCompiler_alias_TRUE$$ : "rotated" == this.$_labelDisplay$ && ($bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$ = $JSCompiler_alias_TRUE$$);
  if($bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$ && this.$_angleExtent$ < this.$_view$.$_angleExtent$) {
    var $angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$ = Math.max(this.$_innerRadius$, 10), $anchorRadius$$inline_5473_availWidth$$inline_5470_estimatedDims$$inline_5484_rightAngle$$inline_5482$$ = this.$_outerRadius$ - $angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$ - 6, $availHeight$$inline_5471_x1$$inline_5485$$ = 1.1 * this.$_angleExtent$ * ($angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$ + 
    6);
    if(6 >= $availHeight$$inline_5471_x1$$inline_5485$$) {
      $JSCompiler_temp$$250_actualTextWidth$$inline_5474_container$$224_textAnchor$$inline_5475$$ = $JSCompiler_alias_NULL$$
    }else {
      if($bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$ = new dvt.$OutputText$(this.$_view$.$getCtx$(), this.$_textStr$, 0, 0), $bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$.$setFontSize$($JSCompiler_StaticMethods_GetTextSize$$(this)), $JSCompiler_StaticMethods_ApplyLabelTextStyle$$(this, $bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$), dvt.$TextUtils$.$fitText$($bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$, 
      $anchorRadius$$inline_5473_availWidth$$inline_5470_estimatedDims$$inline_5484_rightAngle$$inline_5482$$, $availHeight$$inline_5471_x1$$inline_5485$$, $JSCompiler_temp$$250_actualTextWidth$$inline_5474_container$$224_textAnchor$$inline_5475$$)) {
        $anchorRadius$$inline_5473_availWidth$$inline_5470_estimatedDims$$inline_5484_rightAngle$$inline_5482$$ = ($angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$ + this.$_outerRadius$) / 2;
        if("inner" == this.$_labelHalign$ || "outer" == this.$_labelHalign$) {
          $JSCompiler_temp$$250_actualTextWidth$$inline_5474_container$$224_textAnchor$$inline_5475$$.$addChild$($bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$), $JSCompiler_temp$$250_actualTextWidth$$inline_5474_container$$224_textAnchor$$inline_5475$$ = $bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$.$getDimensions$().$w$, "inner" == this.$_labelHalign$ ? $anchorRadius$$inline_5473_availWidth$$inline_5470_estimatedDims$$inline_5484_rightAngle$$inline_5482$$ = 
          $angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$ + 4.5 + $JSCompiler_temp$$250_actualTextWidth$$inline_5474_container$$224_textAnchor$$inline_5475$$ / 2 : "outer" == this.$_labelHalign$ && ($anchorRadius$$inline_5473_availWidth$$inline_5470_estimatedDims$$inline_5484_rightAngle$$inline_5482$$ = this.$_outerRadius$ - 4.5 - $JSCompiler_temp$$250_actualTextWidth$$inline_5474_container$$224_textAnchor$$inline_5475$$ / 2)
        }
        $JSCompiler_temp$$250_actualTextWidth$$inline_5474_container$$224_textAnchor$$inline_5475$$ = $DvtSunburstNode$_calcPointOnArc$$($anchorRadius$$inline_5473_availWidth$$inline_5470_estimatedDims$$inline_5484_rightAngle$$inline_5482$$, this.$_startAngle$ + this.$_angleExtent$ / 2);
        $bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$.$alignCenter$();
        $bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$.$alignMiddle$();
        $angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$ = this.$_startAngle$ + this.$_angleExtent$ / 2;
        $angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$ = $angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$ >= $DvtSunburstNode$TWO_PI$$ ? $angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$ - $DvtSunburstNode$TWO_PI$$ : $angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$;
        $angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$ = 0 > $angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$ ? $angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$ + $DvtSunburstNode$TWO_PI$$ : $angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$;
        $angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$ > 0.5 * Math.PI && $angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$ < 1.5 * Math.PI && ($angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$ += Math.PI);
        $bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$.$setRotation$($angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$);
        $bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$.$setTranslate$($JSCompiler_temp$$250_actualTextWidth$$inline_5474_container$$224_textAnchor$$inline_5475$$.x, $JSCompiler_temp$$250_actualTextWidth$$inline_5474_container$$224_textAnchor$$inline_5475$$.y);
        $bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
        $JSCompiler_temp$$250_actualTextWidth$$inline_5474_container$$224_textAnchor$$inline_5475$$ = $bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$
      }else {
        $JSCompiler_temp$$250_actualTextWidth$$inline_5474_container$$224_textAnchor$$inline_5475$$ = $JSCompiler_alias_NULL$$
      }
    }
  }else {
    if(0 == this.$_innerRadius$) {
      $bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$ = {x:0, y:0}
    }else {
      if($bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$ = $DvtSunburstNode$_calcPointOnArc$$((this.$_innerRadius$ + this.$_outerRadius$) / 2, this.$_startAngle$ + this.$_angleExtent$ / 2), $angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$ = 3 * $JSCompiler_StaticMethods_GetTextSize$$(this) / 2, $anchorRadius$$inline_5473_availWidth$$inline_5470_estimatedDims$$inline_5484_rightAngle$$inline_5482$$ = $DvtSunburstNode$_calcAngle$$($bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$.x + 
      $angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$ / 2, $bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$.y), !$JSCompiler_StaticMethods_ContainsAngle$$(this, $DvtSunburstNode$_calcAngle$$($bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$.x - $angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$ / 2, $bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$.y)) || 
      !$JSCompiler_StaticMethods_ContainsAngle$$(this, $anchorRadius$$inline_5473_availWidth$$inline_5470_estimatedDims$$inline_5484_rightAngle$$inline_5482$$)) {
        $bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$ = $JSCompiler_alias_NULL$$
      }
    }
    if($bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$) {
      $angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$ = new dvt.$OutputText$(this.$_view$.$getCtx$(), this.$_textStr$, $bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$.x, $bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$.y, $JSCompiler_alias_NULL$$);
      $angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$.$setFontSize$($JSCompiler_StaticMethods_GetTextSize$$(this));
      $JSCompiler_StaticMethods_ApplyLabelTextStyle$$(this, $angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$);
      $angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$.$alignCenter$();
      $angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$.$alignMiddle$();
      $angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
      for(var $anchorRadius$$inline_5473_availWidth$$inline_5470_estimatedDims$$inline_5484_rightAngle$$inline_5482$$ = dvt.$TextUtils$.$guessTextDimensions$($angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$), $x2$$inline_5486$$ = $availHeight$$inline_5471_x1$$inline_5485$$ = $bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$.x, $y1$$inline_5487$$ = $bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$.y - 
      $anchorRadius$$inline_5473_availWidth$$inline_5470_estimatedDims$$inline_5484_rightAngle$$inline_5482$$.$h$ / 2, $y2$$inline_5488$$ = $bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$.y + $anchorRadius$$inline_5473_availWidth$$inline_5470_estimatedDims$$inline_5484_rightAngle$$inline_5482$$.$h$ / 2, $fitX1$$inline_5489_fitX2$$inline_5490$$ = $JSCompiler_alias_TRUE$$;this.contains($availHeight$$inline_5471_x1$$inline_5485$$, $y1$$inline_5487$$) && this.contains($availHeight$$inline_5471_x1$$inline_5485$$, 
      $y2$$inline_5488$$) && $fitX1$$inline_5489_fitX2$$inline_5490$$;) {
        $availHeight$$inline_5471_x1$$inline_5485$$--, this.$_angleExtent$ > Math.PI && $bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$.x - $availHeight$$inline_5471_x1$$inline_5485$$ >= $anchorRadius$$inline_5473_availWidth$$inline_5470_estimatedDims$$inline_5484_rightAngle$$inline_5482$$.$w$ / 2 && ($fitX1$$inline_5489_fitX2$$inline_5490$$ = $JSCompiler_alias_FALSE$$)
      }
      for($fitX1$$inline_5489_fitX2$$inline_5490$$ = $JSCompiler_alias_TRUE$$;this.contains($x2$$inline_5486$$, $y1$$inline_5487$$) && this.contains($x2$$inline_5486$$, $y2$$inline_5488$$) && $fitX1$$inline_5489_fitX2$$inline_5490$$;) {
        $x2$$inline_5486$$++, this.$_angleExtent$ > Math.PI && $x2$$inline_5486$$ - $bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$.x >= $anchorRadius$$inline_5473_availWidth$$inline_5470_estimatedDims$$inline_5484_rightAngle$$inline_5482$$.$w$ / 2 && ($fitX1$$inline_5489_fitX2$$inline_5490$$ = $JSCompiler_alias_FALSE$$)
      }
      $availHeight$$inline_5471_x1$$inline_5485$$ += 3;
      $x2$$inline_5486$$ -= 3;
      $bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$ = 2 * Math.min($bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$.x - $availHeight$$inline_5471_x1$$inline_5485$$, $x2$$inline_5486$$ - $bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$.x);
      $bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$ < $anchorRadius$$inline_5473_availWidth$$inline_5470_estimatedDims$$inline_5484_rightAngle$$inline_5482$$.$w$ && ($angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$.$setX$(($availHeight$$inline_5471_x1$$inline_5485$$ + $x2$$inline_5486$$) / 2), $bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$ = $x2$$inline_5486$$ - $availHeight$$inline_5471_x1$$inline_5485$$);
      $JSCompiler_temp$$250_actualTextWidth$$inline_5474_container$$224_textAnchor$$inline_5475$$ = dvt.$TextUtils$.$fitText$($angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$, $bRotated_text$$inline_5472_textAnchor$$inline_5480_usableSpace$$inline_5491$$, $anchorRadius$$inline_5473_availWidth$$inline_5470_estimatedDims$$inline_5484_rightAngle$$inline_5482$$.$h$, $JSCompiler_temp$$250_actualTextWidth$$inline_5474_container$$224_textAnchor$$inline_5475$$) ? 
      $angle$$inline_5476_approxWidth$$inline_5481_innerStartCoord$$inline_5469_text$$inline_5483$$ : $JSCompiler_alias_NULL$$
    }else {
      $JSCompiler_temp$$250_actualTextWidth$$inline_5474_container$$224_textAnchor$$inline_5475$$ = $JSCompiler_alias_VOID$$
    }
  }
  return $JSCompiler_temp$$250_actualTextWidth$$inline_5474_container$$224_textAnchor$$inline_5475$$
};
$JSCompiler_prototypeAlias$$.$handleMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOver$$() {
  if(!this.$_expandButton$) {
    var $JSCompiler_inline_result$$143_container$$inline_5494_tooltip$$inline_5498$$;
    $JSCompiler_inline_result$$143_container$$inline_5494_tooltip$$inline_5498$$ = this.$_shape$;
    var $JSCompiler_temp$$5533_bDisclosed$$inline_5495_button$$inline_5496_button$$inline_6822_button$$inline_6830_context$$inline_6817_context$$inline_6825$$ = this.$isDisclosed$();
    if(!$JSCompiler_inline_result$$143_container$$inline_5494_tooltip$$inline_5498$$ || !$JSCompiler_StaticMethods_isExpandCollapseEnabled$$(this) || !this.$hasChildren$() && $JSCompiler_temp$$5533_bDisclosed$$inline_5495_button$$inline_5496_button$$inline_6822_button$$inline_6830_context$$inline_6817_context$$inline_6825$$) {
      $JSCompiler_inline_result$$143_container$$inline_5494_tooltip$$inline_5498$$ = $JSCompiler_alias_NULL$$
    }else {
      if($JSCompiler_temp$$5533_bDisclosed$$inline_5495_button$$inline_5496_button$$inline_6822_button$$inline_6830_context$$inline_6817_context$$inline_6825$$) {
        var $JSCompiler_temp$$5533_bDisclosed$$inline_5495_button$$inline_5496_button$$inline_6822_button$$inline_6830_context$$inline_6817_context$$inline_6825$$ = this.$_view$.$getCtx$(), $downState$$inline_6821_downState$$inline_6829_resources$$inline_6818_resources$$inline_6826$$ = this.$_view$.$getOptions$()._resources, $center$$inline_5497_upState$$inline_6819_upState$$inline_6827$$ = new dvt.$Image$($JSCompiler_temp$$5533_bDisclosed$$inline_5495_button$$inline_5496_button$$inline_6822_button$$inline_6830_context$$inline_6817_context$$inline_6825$$, 
        $downState$$inline_6821_downState$$inline_6829_resources$$inline_6818_resources$$inline_6826$$.collapse, 0, 0, 16, 16), $overState$$inline_6820_overState$$inline_6828$$ = new dvt.$Image$($JSCompiler_temp$$5533_bDisclosed$$inline_5495_button$$inline_5496_button$$inline_6822_button$$inline_6830_context$$inline_6817_context$$inline_6825$$, $downState$$inline_6821_downState$$inline_6829_resources$$inline_6818_resources$$inline_6826$$.collapseOver, 0, 0, 16, 16), $downState$$inline_6821_downState$$inline_6829_resources$$inline_6818_resources$$inline_6826$$ = 
        new dvt.$Image$($JSCompiler_temp$$5533_bDisclosed$$inline_5495_button$$inline_5496_button$$inline_6822_button$$inline_6830_context$$inline_6817_context$$inline_6825$$, $downState$$inline_6821_downState$$inline_6829_resources$$inline_6818_resources$$inline_6826$$.collapseDown, 0, 0, 16, 16)
      }else {
        $JSCompiler_temp$$5533_bDisclosed$$inline_5495_button$$inline_5496_button$$inline_6822_button$$inline_6830_context$$inline_6817_context$$inline_6825$$ = this.$_view$.$getCtx$(), $downState$$inline_6821_downState$$inline_6829_resources$$inline_6818_resources$$inline_6826$$ = this.$_view$.$getOptions$()._resources, $center$$inline_5497_upState$$inline_6819_upState$$inline_6827$$ = new dvt.$Image$($JSCompiler_temp$$5533_bDisclosed$$inline_5495_button$$inline_5496_button$$inline_6822_button$$inline_6830_context$$inline_6817_context$$inline_6825$$, 
        $downState$$inline_6821_downState$$inline_6829_resources$$inline_6818_resources$$inline_6826$$.expand, 0, 0, 16, 16), $overState$$inline_6820_overState$$inline_6828$$ = new dvt.$Image$($JSCompiler_temp$$5533_bDisclosed$$inline_5495_button$$inline_5496_button$$inline_6822_button$$inline_6830_context$$inline_6817_context$$inline_6825$$, $downState$$inline_6821_downState$$inline_6829_resources$$inline_6818_resources$$inline_6826$$.expandOver, 0, 0, 16, 16), $downState$$inline_6821_downState$$inline_6829_resources$$inline_6818_resources$$inline_6826$$ = 
        new dvt.$Image$($JSCompiler_temp$$5533_bDisclosed$$inline_5495_button$$inline_5496_button$$inline_6822_button$$inline_6830_context$$inline_6817_context$$inline_6825$$, $downState$$inline_6821_downState$$inline_6829_resources$$inline_6818_resources$$inline_6826$$.expandDown, 0, 0, 16, 16)
      }
      $center$$inline_5497_upState$$inline_6819_upState$$inline_6827$$.$setInvisibleFill$();
      $overState$$inline_6820_overState$$inline_6828$$.$setInvisibleFill$();
      $downState$$inline_6821_downState$$inline_6829_resources$$inline_6818_resources$$inline_6826$$.$setInvisibleFill$();
      $JSCompiler_temp$$5533_bDisclosed$$inline_5495_button$$inline_5496_button$$inline_6822_button$$inline_6830_context$$inline_6817_context$$inline_6825$$ = new dvt.$Button$($JSCompiler_temp$$5533_bDisclosed$$inline_5495_button$$inline_5496_button$$inline_6822_button$$inline_6830_context$$inline_6817_context$$inline_6825$$, $center$$inline_5497_upState$$inline_6819_upState$$inline_6827$$, $overState$$inline_6820_overState$$inline_6828$$, $downState$$inline_6821_downState$$inline_6829_resources$$inline_6818_resources$$inline_6826$$);
      $JSCompiler_temp$$5533_bDisclosed$$inline_5495_button$$inline_5496_button$$inline_6822_button$$inline_6830_context$$inline_6817_context$$inline_6825$$.$addEvtListener$(dvt.$MouseEvent$.$CLICK$, this.$expandCollapseNode$, $JSCompiler_alias_FALSE$$, this);
      $center$$inline_5497_upState$$inline_6819_upState$$inline_6827$$ = $DvtSunburstNode$_calcPointOnArc$$(this.$_outerRadius$, this.$_startAngle$ + this.$_angleExtent$ / 2);
      $JSCompiler_temp$$5533_bDisclosed$$inline_5495_button$$inline_5496_button$$inline_6822_button$$inline_6830_context$$inline_6817_context$$inline_6825$$.$setTranslate$($center$$inline_5497_upState$$inline_6819_upState$$inline_6827$$.x - 8, $center$$inline_5497_upState$$inline_6819_upState$$inline_6827$$.y - 8);
      $JSCompiler_inline_result$$143_container$$inline_5494_tooltip$$inline_5498$$.$addChild$($JSCompiler_temp$$5533_bDisclosed$$inline_5495_button$$inline_5496_button$$inline_6822_button$$inline_6830_context$$inline_6817_context$$inline_6825$$);
      $JSCompiler_inline_result$$143_container$$inline_5494_tooltip$$inline_5498$$ = dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, this.$isDisclosed$() ? "COLLAPSE" : "EXPAND");
      this.$_view$.$getEventManager$().$associate$($JSCompiler_temp$$5533_bDisclosed$$inline_5495_button$$inline_5496_button$$inline_6822_button$$inline_6830_context$$inline_6817_context$$inline_6825$$, new $DvtTreePeer$$(this, this.getId(), $JSCompiler_inline_result$$143_container$$inline_5494_tooltip$$inline_5498$$));
      $JSCompiler_inline_result$$143_container$$inline_5494_tooltip$$inline_5498$$ = $JSCompiler_temp$$5533_bDisclosed$$inline_5495_button$$inline_5496_button$$inline_6822_button$$inline_6830_context$$inline_6817_context$$inline_6825$$
    }
    this.$_expandButton$ = $JSCompiler_inline_result$$143_container$$inline_5494_tooltip$$inline_5498$$
  }
  $DvtSunburstNode$$.$superclass$.$handleMouseOver$.call(this)
};
$JSCompiler_prototypeAlias$$.$handleMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleMouseOut$$() {
  this.$_expandButton$ && this.$_shape$ && (this.$_shape$.removeChild(this.$_expandButton$), this.$_expandButton$ = $JSCompiler_alias_NULL$$);
  $DvtSunburstNode$$.$superclass$.$handleMouseOut$.call(this)
};
function $JSCompiler_StaticMethods_updateShapes$$($JSCompiler_StaticMethods_updateShapes$self$$, $bRecurse$$) {
  if($JSCompiler_StaticMethods_updateShapes$self$$.$_shape$) {
    var $children$$26_cmd$$20$$ = $JSCompiler_StaticMethods__createPathCmd$$($JSCompiler_StaticMethods_updateShapes$self$$);
    $JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.$setCmds$($children$$26_cmd$$20$$);
    if($JSCompiler_StaticMethods_updateShapes$self$$.$_parent$ || !(0 == $JSCompiler_StaticMethods_updateShapes$self$$.$_innerRadius$ && $JSCompiler_StaticMethods_updateShapes$self$$.$_angleExtent$ == $DvtSunburstNode$TWO_PI$$)) {
      $JSCompiler_StaticMethods_updateShapes$self$$.$_text$ && $JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.removeChild($JSCompiler_StaticMethods_updateShapes$self$$.$_text$), $JSCompiler_StaticMethods_updateShapes$self$$.$_text$ = $JSCompiler_StaticMethods_updateShapes$self$$.$_createTextNode$($JSCompiler_StaticMethods_updateShapes$self$$.$_shape$), $JSCompiler_StaticMethods_updateShapes$self$$.$_textBackground$ && ($JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.removeChild($JSCompiler_StaticMethods_updateShapes$self$$.$_textBackground$), 
      $JSCompiler_StaticMethods_updateShapes$self$$.$_textBackground$ = $JSCompiler_alias_NULL$$)
    }
    $JSCompiler_StaticMethods_updateShapes$self$$.$_shape$.$setFill$($JSCompiler_StaticMethods_updateShapes$self$$.$GetFill$());
    if($bRecurse$$) {
      for(var $children$$26_cmd$$20$$ = $JSCompiler_StaticMethods_updateShapes$self$$.$getChildNodes$(), $i$$878$$ = 0;$i$$878$$ < $children$$26_cmd$$20$$.length;$i$$878$$++) {
        $JSCompiler_StaticMethods_updateShapes$$($children$$26_cmd$$20$$[$i$$878$$], $JSCompiler_alias_TRUE$$)
      }
    }
  }
}
$JSCompiler_prototypeAlias$$.$getDropSiteFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDropSiteFeedback$$() {
  return this.$_shape$ instanceof dvt.$Circle$ ? new dvt.$Circle$(this.$_view$.$getCtx$(), this.$_shape$.$getCx$(), this.$_shape$.$getCy$(), this.$_shape$.$getRadius$()) : this.$_shape$ instanceof dvt.$Path$ ? new dvt.$Path$(this.$_view$.$getCtx$(), this.$_shape$.$getCmds$()) : $JSCompiler_alias_NULL$$
};
$JSCompiler_prototypeAlias$$.$expandCollapseNode$ = function $$JSCompiler_prototypeAlias$$$$expandCollapseNode$$($event$$740$$) {
  this.$setDisclosed$(!this.$isDisclosed$());
  var $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5500$$ = this.$_view$, $bDisclosed$$inline_5502_nodeOptions$$inline_5503$$ = this.$isDisclosed$(), $id$$inline_6833$$ = this.getId();
  $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5500$$.$_navigableIdToFocus$ = $id$$inline_6833$$;
  $bDisclosed$$inline_5502_nodeOptions$$inline_5503$$ ? ($bDisclosed$$inline_5502_nodeOptions$$inline_5503$$ = this.$getOptions$(), $bDisclosed$$inline_5502_nodeOptions$$inline_5503$$.nodes && 0 < $bDisclosed$$inline_5502_nodeOptions$$inline_5503$$.nodes.length && $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5500$$.$render$($JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5500$$.$getOptions$()), $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5500$$.dispatchEvent(dvt.$EventFactory$.$newSunburstExpandEvent$(this.getId()))) : 
  ($JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5500$$.$render$($JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5500$$.$getOptions$()), $JSCompiler_StaticMethods___expandCollapseNode$self$$inline_5500$$.dispatchEvent(dvt.$EventFactory$.$newSunburstCollapseEvent$(this.getId())));
  this.$UpdateAriaLabel$();
  $event$$740$$.stopPropagation()
};
function $JSCompiler_StaticMethods___getRadius$$($JSCompiler_StaticMethods___getRadius$self$$) {
  return $JSCompiler_StaticMethods___getRadius$self$$.$_radius$ != $JSCompiler_alias_NULL$$ ? Number($JSCompiler_StaticMethods___getRadius$self$$.$_radius$) : $JSCompiler_StaticMethods___getRadius$self$$.$_parent$ ? 1 : $JSCompiler_StaticMethods___getRadius$self$$.$_bArtificialRoot$ ? 0.25 : $JSCompiler_StaticMethods_GetTemplate$$($JSCompiler_StaticMethods___getRadius$self$$) ? 1 : 0.5
}
$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $options$$317$$ = this.$_view$.$getOptions$(), $states$$20$$ = [];
  this.$isSelectable$() && $states$$20$$.push(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  $JSCompiler_StaticMethods_isExpandCollapseEnabled$$(this) && $states$$20$$.push(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$UTIL_PREFIX$, this.$isDisclosed$() ? "STATE_EXPANDED" : "STATE_COLLAPSED"));
  this.$isDrillReplaceEnabled$() && $states$$20$$.push(dvt.$Bundle$.$getTranslation$($options$$317$$, "stateDrillable", dvt.$Bundle$.$UTIL_PREFIX$, "STATE_DRILLABLE"));
  return dvt.$Displayable$.$generateAriaLabel$(this.$getShortDesc$(), $states$$20$$)
};
$JSCompiler_prototypeAlias$$.$UpdateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$UpdateAriaLabel$$() {
  !dvt.$Agent$.$deferAriaCreation$() && this.$_shape$ && this.$_shape$.$setAriaProperty$("label", this.$getAriaLabel$())
};
$JSCompiler_prototypeAlias$$.$getDataContext$ = function $$JSCompiler_prototypeAlias$$$$getDataContext$$() {
  var $dataContext$$11$$ = $DvtSunburstNode$$.$superclass$.$getDataContext$.call(this);
  $dataContext$$11$$.radius = $JSCompiler_StaticMethods___getRadius$$(this);
  return $dataContext$$11$$
};
var $DvtSunburstLayout$$ = {};
dvt.$Obj$.$createSubclass$($DvtSunburstLayout$$, dvt.$Obj$);
$DvtSunburstLayout$$.$layout$ = function $$DvtSunburstLayout$$$$layout$$($totalRadius$$, $root$$25$$, $startAngle$$21$$, $angleExtent$$17$$, $sorting$$1$$) {
  var $longestRadius$$ = $DvtSunburstLayout$$.$_calcLargestRadius$($root$$25$$);
  $DvtSunburstLayout$$.$_layout$($totalRadius$$ / $longestRadius$$, $root$$25$$, $startAngle$$21$$, $angleExtent$$17$$, $sorting$$1$$, 0)
};
$DvtSunburstLayout$$.$_layout$ = function $$DvtSunburstLayout$$$$_layout$$($radiusPerDepth$$1$$, $i$$879_node$$343$$, $childStartAngle_startAngle$$22$$, $angleExtent$$18$$, $sorting$$2$$, $children$$27_innerRadius$$10$$) {
  var $outerRadius$$8$$ = $children$$27_innerRadius$$10$$ + $JSCompiler_StaticMethods___getRadius$$($i$$879_node$$343$$) * $radiusPerDepth$$1$$;
  $i$$879_node$$343$$.$setLayoutParams$($children$$27_innerRadius$$10$$, $outerRadius$$8$$, $childStartAngle_startAngle$$22$$, $angleExtent$$18$$);
  $children$$27_innerRadius$$10$$ = $i$$879_node$$343$$.$getChildNodes$();
  if($children$$27_innerRadius$$10$$ != $JSCompiler_alias_NULL$$ && $i$$879_node$$343$$.$isDisclosed$()) {
    "on" == $sorting$$2$$ && ($children$$27_innerRadius$$10$$ = $children$$27_innerRadius$$10$$.slice(0), $children$$27_innerRadius$$10$$.sort(function($radiusPerDepth$$1$$, $i$$879_node$$343$$) {
      return $i$$879_node$$343$$.$getSize$() - $radiusPerDepth$$1$$.$getSize$()
    }));
    dvt.$Agent$.$isRightToLeft$($i$$879_node$$343$$.$_view$.$getCtx$()) && ($children$$27_innerRadius$$10$$ = $children$$27_innerRadius$$10$$.slice(0).reverse());
    var $total$$10$$ = 0;
    for($i$$879_node$$343$$ = 0;$i$$879_node$$343$$ < $children$$27_innerRadius$$10$$.length;$i$$879_node$$343$$++) {
      $total$$10$$ += 0 < $children$$27_innerRadius$$10$$[$i$$879_node$$343$$].$getSize$() ? $children$$27_innerRadius$$10$$[$i$$879_node$$343$$].$getSize$() : 0
    }
    for($i$$879_node$$343$$ = 0;$i$$879_node$$343$$ < $children$$27_innerRadius$$10$$.length;$i$$879_node$$343$$++) {
      var $child$$81$$ = $children$$27_innerRadius$$10$$[$i$$879_node$$343$$];
      if(!(0 >= $child$$81$$.$getSize$())) {
        var $childAngleExtent$$ = $child$$81$$.$getSize$() / $total$$10$$ * $angleExtent$$18$$;
        $DvtSunburstLayout$$.$_layout$($radiusPerDepth$$1$$, $child$$81$$, $childStartAngle_startAngle$$22$$, $childAngleExtent$$, $sorting$$2$$, $outerRadius$$8$$);
        $childStartAngle_startAngle$$22$$ += $childAngleExtent$$
      }
    }
  }
};
$DvtSunburstLayout$$.$_calcLargestRadius$ = function $$DvtSunburstLayout$$$$_calcLargestRadius$$($node$$344$$) {
  var $maxRadius$$2$$ = 0, $children$$28$$ = $node$$344$$.$getChildNodes$();
  if($children$$28$$ && 0 < $children$$28$$.length) {
    for(var $i$$880$$ = 0;$i$$880$$ < $children$$28$$.length;$i$$880$$++) {
      var $childRadius$$ = $DvtSunburstLayout$$.$_calcLargestRadius$($children$$28$$[$i$$880$$]), $maxRadius$$2$$ = Math.max($maxRadius$$2$$, $childRadius$$)
    }
    return $maxRadius$$2$$ + $JSCompiler_StaticMethods___getRadius$$($node$$344$$)
  }
  return $JSCompiler_StaticMethods___getRadius$$($node$$344$$)
};
function $DvtSunburstEventManager$$($view$$69$$, $context$$654$$, $callback$$173$$, $callbackObj$$129$$) {
  $DvtTreeEventManager$$.call(this, $view$$69$$, $context$$654$$, $callback$$173$$, $callbackObj$$129$$)
}
dvt.$Obj$.$createSubclass$($DvtSunburstEventManager$$, $DvtTreeEventManager$$);
$JSCompiler_prototypeAlias$$ = $DvtSunburstEventManager$$.prototype;
$JSCompiler_prototypeAlias$$.$OnMouseDown$ = function $$JSCompiler_prototypeAlias$$$$OnMouseDown$$($event$$741_relPos$$67$$) {
  var $JSCompiler_StaticMethods___startRotation$self$$inline_5505_obj$$369$$ = this.$GetLogicalObject$($event$$741_relPos$$67$$.target);
  $JSCompiler_StaticMethods___startRotation$self$$inline_5505_obj$$369$$ && $JSCompiler_StaticMethods___startRotation$self$$inline_5505_obj$$369$$.getId && "_rotationShape" == $JSCompiler_StaticMethods___startRotation$self$$inline_5505_obj$$369$$.getId() && !this.$_bRotating$ ? (this.$_bRotating$ = $JSCompiler_alias_TRUE$$, $event$$741_relPos$$67$$ = this.$_context$.$pageToStageCoords$($event$$741_relPos$$67$$.pageX, $event$$741_relPos$$67$$.pageY), $JSCompiler_StaticMethods___startRotation$self$$inline_5505_obj$$369$$ = 
  this.$_view$, $JSCompiler_StaticMethods___setRotationAnchor$$($JSCompiler_StaticMethods___startRotation$self$$inline_5505_obj$$369$$, $JSCompiler_StaticMethods__calcAngle$$($JSCompiler_StaticMethods___startRotation$self$$inline_5505_obj$$369$$, $event$$741_relPos$$67$$.x, $event$$741_relPos$$67$$.y))) : $DvtSunburstEventManager$$.$superclass$.$OnMouseDown$.call(this, $event$$741_relPos$$67$$)
};
$JSCompiler_prototypeAlias$$.$OnMouseMove$ = function $$JSCompiler_prototypeAlias$$$$OnMouseMove$$($event$$742_relPos$$68$$) {
  if(this.$_bRotating$) {
    $event$$742_relPos$$68$$ = this.$_context$.$pageToStageCoords$($event$$742_relPos$$68$$.pageX, $event$$742_relPos$$68$$.pageY);
    var $JSCompiler_StaticMethods___continueRotation$self$$inline_5509$$ = this.$_view$;
    $JSCompiler_StaticMethods___rotate$$($JSCompiler_StaticMethods___continueRotation$self$$inline_5509$$, $JSCompiler_StaticMethods__calcAngle$$($JSCompiler_StaticMethods___continueRotation$self$$inline_5509$$, $event$$742_relPos$$68$$.x, $event$$742_relPos$$68$$.y))
  }else {
    $DvtSunburstEventManager$$.$superclass$.$OnMouseMove$.call(this, $event$$742_relPos$$68$$)
  }
};
$JSCompiler_prototypeAlias$$.$OnMouseUp$ = function $$JSCompiler_prototypeAlias$$$$OnMouseUp$$($event$$743$$) {
  this.$_bRotating$ ? (this.$_bRotating$ = $JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods___endRotation$$(this.$_view$)) : $DvtSunburstEventManager$$.$superclass$.$OnMouseUp$.call(this, $event$$743$$)
};
$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$744$$) {
  var $eventConsumed$$9$$ = $JSCompiler_alias_TRUE$$, $keyCode$$48_newAngle$$1$$ = $event$$744$$.keyCode, $node$$345$$ = this.$getFocus$(), $sunburst$$1$$ = this.$_view$;
  $JSCompiler_StaticMethods_isExpandCollapseEnabled$$($node$$345$$) && (dvt.$KeyboardEvent$.$isPlus$($event$$744$$) && !$node$$345$$.$isDisclosed$() || dvt.$KeyboardEvent$.$isMinus$($event$$744$$) && $node$$345$$.$isDisclosed$() || $event$$744$$.ctrlKey && $keyCode$$48_newAngle$$1$$ == dvt.$KeyboardEvent$.$ENTER$) ? ($node$$345$$.$expandCollapseNode$(), dvt.$EventManager$.$consumeEvent$($event$$744$$)) : $sunburst$$1$$ && "off" != $sunburst$$1$$.$getOptions$().rotation && ($keyCode$$48_newAngle$$1$$ == 
  dvt.$KeyboardEvent$.$LEFT_ARROW$ || $keyCode$$48_newAngle$$1$$ == dvt.$KeyboardEvent$.$RIGHT_ARROW$) && !$event$$744$$.ctrlKey && $event$$744$$.altKey && $event$$744$$.shiftKey ? ($keyCode$$48_newAngle$$1$$ = $keyCode$$48_newAngle$$1$$ == dvt.$KeyboardEvent$.$LEFT_ARROW$ ? -5 * (Math.PI / 180) : 5 * (Math.PI / 180), $JSCompiler_StaticMethods___setRotationAnchor$$($sunburst$$1$$, 0), $JSCompiler_StaticMethods___rotate$$($sunburst$$1$$, $keyCode$$48_newAngle$$1$$), $JSCompiler_StaticMethods___endRotation$$($sunburst$$1$$), 
  dvt.$EventManager$.$consumeEvent$($event$$744$$)) : $eventConsumed$$9$$ = $DvtSunburstEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$744$$);
  return $eventConsumed$$9$$
};
$JSCompiler_prototypeAlias$$.$HandleImmediateTouchStartInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchStartInternal$$($event$$745$$) {
  var $obj$$370$$ = this.$GetLogicalObject$($event$$745$$.target);
  $obj$$370$$ && ($obj$$370$$.getId && "_rotationShape" == $obj$$370$$.getId()) && this.$TouchManager$.$processAssociatedTouchAttempt$($event$$745$$, this.$RotateStartTouch$, this)
};
$JSCompiler_prototypeAlias$$.$HandleImmediateTouchMoveInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchMoveInternal$$($event$$746$$) {
  this.$TouchManager$.$processAssociatedTouchMove$($event$$746$$, "rotateKey")
};
$JSCompiler_prototypeAlias$$.$HandleImmediateTouchEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleImmediateTouchEndInternal$$($event$$747$$) {
  this.$TouchManager$.$processAssociatedTouchEnd$($event$$747$$, "rotateKey")
};
$JSCompiler_prototypeAlias$$.$RotateStartTouch$ = function $$JSCompiler_prototypeAlias$$$$RotateStartTouch$$($event$$748$$, $touch$$51$$) {
  if(1 >= this.$TouchManager$.$getTouchIdsForObj$("rotateKey").length) {
    this.$TouchManager$.$saveProcessedTouch$($touch$$51$$.identifier, "rotateKey", "rotateKey", "rotateKey", this.$RotateMoveTouch$, this.$RotateEndTouch$, this);
    this.$TouchManager$.$setTooltipEnabled$($touch$$51$$.identifier, $JSCompiler_alias_FALSE$$);
    var $pos$$80$$ = this.$_context$.$pageToStageCoords$($touch$$51$$.pageX, $touch$$51$$.pageY), $JSCompiler_StaticMethods___startRotation$self$$inline_5513$$ = this.$_view$;
    $JSCompiler_StaticMethods___setRotationAnchor$$($JSCompiler_StaticMethods___startRotation$self$$inline_5513$$, $JSCompiler_StaticMethods__calcAngle$$($JSCompiler_StaticMethods___startRotation$self$$inline_5513$$, $pos$$80$$.x, $pos$$80$$.y));
    $event$$748$$.$blockTouchHold$()
  }
};
$JSCompiler_prototypeAlias$$.$RotateMoveTouch$ = function $$JSCompiler_prototypeAlias$$$$RotateMoveTouch$$($event$$749$$, $touch$$52$$) {
  var $pos$$81$$ = this.$_context$.$pageToStageCoords$($touch$$52$$.pageX, $touch$$52$$.pageY), $JSCompiler_StaticMethods___continueRotation$self$$inline_5517$$ = this.$_view$;
  $JSCompiler_StaticMethods___rotate$$($JSCompiler_StaticMethods___continueRotation$self$$inline_5517$$, $JSCompiler_StaticMethods__calcAngle$$($JSCompiler_StaticMethods___continueRotation$self$$inline_5517$$, $pos$$81$$.x, $pos$$81$$.y));
  $event$$749$$.preventDefault()
};
$JSCompiler_prototypeAlias$$.$RotateEndTouch$ = function $$JSCompiler_prototypeAlias$$$$RotateEndTouch$$() {
  $JSCompiler_StaticMethods___endRotation$$(this.$_view$)
};
dvt.$Bundle$.$addDefaultStrings$(dvt.$Bundle$.$SUNBURST_PREFIX$, {COLOR:"Color", OTHER:"Other", SIZE:"Size"});
function $DvtSunburstDefaults$$() {
  this.Init({skyros:$DvtSunburstDefaults$VERSION_1$$, alta:{}})
}
dvt.$Obj$.$createSubclass$($DvtSunburstDefaults$$, $DvtTreeDefaults$$);
var $DvtSunburstDefaults$VERSION_1$$ = {nodeDefaults:{borderColor:"rgba(255,255,255,0.3)", borderWidth:1, hoverColor:"#FFFFFF", labelDisplay:"auto", labelHalign:"center", selectedInnerColor:"#FFFFFF", selectedOuterColor:"#000000"}, rotation:"on", startAngle:90};

  return dvt;
});

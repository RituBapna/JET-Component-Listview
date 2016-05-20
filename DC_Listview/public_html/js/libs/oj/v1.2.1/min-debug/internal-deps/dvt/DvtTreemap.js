/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit', './DvtBaseTreeView'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  
  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtTreemap$$ = function $$DvtTreemap$$$($context$$668$$, $callback$$176$$, $callbackObj$$126$$) {
  this.Init($context$$668$$, $callback$$176$$, $callbackObj$$126$$)
};
(0,D.$goog$exportPath_$$)("DvtTreemap", D.$DvtTreemap$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTreemap$$, D.$DvtBaseTreeView$$, "DvtTreemap");
D.$DvtTreemap$$.newInstance = function $$DvtTreemap$$$newInstance$($context$$669$$, $callback$$177$$, $callbackObj$$127$$) {
  return new D.$DvtTreemap$$($context$$669$$, $callback$$177$$, $callbackObj$$127$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtTreemap$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$670$$, $callback$$178$$, $callbackObj$$128$$) {
  D.$DvtTreemap$$.$superclass$.Init.call(this, $context$$670$$, $callback$$178$$, $callbackObj$$128$$);
  this.$Defaults$ = new D.$DvtTreemapDefaults$$;
  this.setId("treemap1000" + window.Math.floor(1E9 * window.Math.random()))
};
D.$JSCompiler_prototypeAlias$$.$ApplyParsedProperties$ = function $$JSCompiler_prototypeAlias$$$$ApplyParsedProperties$$($options$$314_props$$24$$) {
  D.$DvtTreemap$$.$superclass$.$ApplyParsedProperties$.call(this, $options$$314_props$$24$$);
  $options$$314_props$$24$$ = this.$getOptions$();
  this.$_layout$ = "sliceAndDiceHorizontal" == $options$$314_props$$24$$.layout ? new D.$DvtSliceAndDiceLayout$$(D.$JSCompiler_alias_TRUE$$) : "sliceAndDiceVertical" == $options$$314_props$$24$$.layout ? new D.$DvtSliceAndDiceLayout$$(D.$JSCompiler_alias_FALSE$$) : new D.$DvtSquarifyingLayout$$;
  this.$_isolatedNodes$ = [];
  var $isolateRowKey$$inline_9176$$ = $options$$314_props$$24$$.isolatedNode;
  if($isolateRowKey$$inline_9176$$ && this.$_root$) {
    var $allNodes$$inline_9177$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)(this.$_root$);
    $allNodes$$inline_9177$$.push(this.$_root$);
    for(var $i$$inline_9178$$ = 0;$i$$inline_9178$$ < $allNodes$$inline_9177$$.length;$i$$inline_9178$$++) {
      if($allNodes$$inline_9177$$[$i$$inline_9178$$].getId() == $isolateRowKey$$inline_9176$$) {
        this.$_isolatedNodes$.push($allNodes$$inline_9177$$[$i$$inline_9178$$]);
        break
      }
    }
  }
  "auto" == $options$$314_props$$24$$.animationOnDisplay && ($options$$314_props$$24$$.animationOnDisplay = "alphaFade")
};
D.$JSCompiler_prototypeAlias$$.$Layout$ = function $$JSCompiler_prototypeAlias$$$$Layout$$($availSpace$$134$$) {
  var $bufferSpace$$1_gap$$31_numIsolated$$ = "jet" != this.$getOptions$()._environment ? 7 : 1, $bufferSpace$$1_gap$$31_numIsolated$$ = window.Math.max(window.Math.ceil($bufferSpace$$1_gap$$31_numIsolated$$ * window.Math.min($availSpace$$134$$.$w$, $availSpace$$134$$.$h$) / 400), 1);
  $availSpace$$134$$.x += $bufferSpace$$1_gap$$31_numIsolated$$;
  $availSpace$$134$$.y += $bufferSpace$$1_gap$$31_numIsolated$$;
  $availSpace$$134$$.$w$ -= 2 * $bufferSpace$$1_gap$$31_numIsolated$$;
  $availSpace$$134$$.$h$ -= 2 * $bufferSpace$$1_gap$$31_numIsolated$$;
  $bufferSpace$$1_gap$$31_numIsolated$$ = this.$_layout$.$getGapSize$(this, 1);
  $availSpace$$134$$.x += $bufferSpace$$1_gap$$31_numIsolated$$;
  $availSpace$$134$$.$w$ -= 2 * $bufferSpace$$1_gap$$31_numIsolated$$;
  (0,D.$JSCompiler_StaticMethods_LayoutBreadcrumbs$$)(this, $availSpace$$134$$);
  this.$_legend$ = D.$DvtTreeLegendRenderer$$.$render$(this, $availSpace$$134$$, this.$_legendSource$);
  $availSpace$$134$$.x -= $bufferSpace$$1_gap$$31_numIsolated$$;
  $availSpace$$134$$.$w$ += 2 * $bufferSpace$$1_gap$$31_numIsolated$$;
  $bufferSpace$$1_gap$$31_numIsolated$$ = this.$_isolatedNodes$.length;
  if(0 < $bufferSpace$$1_gap$$31_numIsolated$$ && this.$_isolateRestoreLayout$) {
    this.$_layout$.$layout$(this, this.$_isolatedNodes$[$bufferSpace$$1_gap$$31_numIsolated$$ - 1], $availSpace$$134$$.x, $availSpace$$134$$.y, $availSpace$$134$$.$w$, $availSpace$$134$$.$h$, D.$JSCompiler_alias_TRUE$$)
  }else {
    this.$_root$ && this.$_layout$.$layout$(this, this.$_root$, $availSpace$$134$$.x, $availSpace$$134$$.y, $availSpace$$134$$.$w$, $availSpace$$134$$.$h$, D.$JSCompiler_alias_FALSE$$);
    for(var $i$$921$$ = 0;$i$$921$$ < $bufferSpace$$1_gap$$31_numIsolated$$;$i$$921$$++) {
      this.$_layout$.$layout$(this, this.$_isolatedNodes$[$i$$921$$], $availSpace$$134$$.x, $availSpace$$134$$.y, $availSpace$$134$$.$w$, $availSpace$$134$$.$h$, D.$JSCompiler_alias_TRUE$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$($container$$220_i$$922$$) {
  (0,D.$JSCompiler_StaticMethods_RenderBackground$$)(this, $container$$220_i$$922$$);
  this.$_breadcrumbs$ && $container$$220_i$$922$$.$addChild$(this.$_breadcrumbs$);
  this.$_legend$ && ($container$$220_i$$922$$.$addChild$(this.$_legend$), this.$_legend$ = D.$JSCompiler_alias_NULL$$);
  if((0,D.$JSCompiler_StaticMethods_HasValidData$$)(this)) {
    this.$_groupTextLayer$ = new D.$DvtContainer$$(this.$getCtx$());
    $container$$220_i$$922$$.$addChild$(this.$_groupTextLayer$);
    this.$_isolatedNode$ ? this.$_isolatedNode$.$render$($container$$220_i$$922$$) : this.$_root$.$hasChildren$() ? (this.$_root$.$renderChildren$($container$$220_i$$922$$), (0,D.$JSCompiler_StaticMethods_UpdateAriaNavigation$$)(this, this.$_root$)) : this.$_root$.$render$($container$$220_i$$922$$);
    this.$_isolatedLayer$ = new D.$DvtContainer$$(this.$getCtx$());
    $container$$220_i$$922$$.$addChild$(this.$_isolatedLayer$);
    this.$_selectedLayer$ = new D.$DvtContainer$$(this.$getCtx$());
    $container$$220_i$$922$$.$addChild$(this.$_selectedLayer$);
    $container$$220_i$$922$$.$addChild$(this.$_groupTextLayer$);
    this.$_hoverEffect$ = new D.$DvtPolyline$$(this.$getCtx$(), []);
    this.$_hoverEffect$.$setVisible$(D.$JSCompiler_alias_FALSE$$);
    this.$_hoverEffect$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
    (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_hoverEffect$);
    $container$$220_i$$922$$.$addChild$(this.$_hoverEffect$);
    for($container$$220_i$$922$$ = 0;$container$$220_i$$922$$ < this.$_isolatedNodes$.length;$container$$220_i$$922$$++) {
      var $displayable$$110$$ = this.$_isolatedNodes$[$container$$220_i$$922$$].$getDisplayable$();
      this.$_isolatedLayer$.$addChild$($displayable$$110$$)
    }
  }else {
    (0,D.$JSCompiler_StaticMethods_RenderEmptyText$$)(this, $container$$220_i$$922$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$OnAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$OnAnimationEnd$$() {
  this.$AnimationStopped$ || (this.$_container$.$removeChildren$(), this.$Layout$(new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$)), this.$Render$(this.$_container$), this.$ReselectNodes$());
  D.$DvtTreemap$$.$superclass$.$OnAnimationEnd$.call(this)
};
D.$JSCompiler_prototypeAlias$$.$ReselectNodes$ = function $$JSCompiler_prototypeAlias$$$$ReselectNodes$$() {
  for(var $selectedNodes$$2$$ = this.$_selectionHandler$ ? this.$_selectionHandler$.getSelection() : [], $i$$923$$ = 0;$i$$923$$ < $selectedNodes$$2$$.length;$i$$923$$++) {
    if(0 < this.$_isolatedNodes$.length) {
      var $lastIsolated$$1$$ = this.$_isolatedNodes$[this.$_isolatedNodes$.length - 1];
      ($selectedNodes$$2$$[$i$$923$$] == $lastIsolated$$1$$ || $selectedNodes$$2$$[$i$$923$$].$isDescendantOf$($lastIsolated$$1$$)) && $selectedNodes$$2$$[$i$$923$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
    }else {
      $selectedNodes$$2$$[$i$$923$$].$setSelected$(D.$JSCompiler_alias_TRUE$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$CreateKeyboardHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateKeyboardHandler$$($manager$$36$$) {
  return new D.$DvtTreemapKeyboardHandler$$($manager$$36$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateEventManager$ = function $$JSCompiler_prototypeAlias$$$$CreateEventManager$$($view$$73$$, $context$$671$$, $callback$$179$$, $callbackObj$$129$$) {
  return new D.$DvtTreemapEventManager$$($view$$73$$, $context$$671$$, $callback$$179$$, $callbackObj$$129$$)
};
D.$JSCompiler_prototypeAlias$$.$GetInitialFocusedItem$ = function $$JSCompiler_prototypeAlias$$$$GetInitialFocusedItem$$($root$$38$$) {
  var $isolatedRootNode$$ = (0,D.$JSCompiler_StaticMethods___getLastIsolatedNode$$)(this);
  return $isolatedRootNode$$ ? (0,D.$JSCompiler_StaticMethods___getDefaultNavigable$$)(this, D.$DvtBaseTreeUtils$$.$getLeafNodes$($isolatedRootNode$$)) : $root$$38$$ ? (0,D.$JSCompiler_StaticMethods___getDefaultNavigable$$)(this, D.$DvtBaseTreeUtils$$.$getLeafNodes$($root$$38$$)) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$__moveToSelectedLayer$ = function $$JSCompiler_prototypeAlias$$$$__moveToSelectedLayer$$($rect$$52$$) {
  for(var $newIndex$$9$$ = 0, $numChildren$$17$$ = this.$_selectedLayer$.$getNumChildren$(), $i$$924$$ = 0;$i$$924$$ < $numChildren$$17$$;$i$$924$$++) {
    var $child$$83$$ = this.$_selectedLayer$.$getChildAt$($i$$924$$);
    $rect$$52$$.zIndex > $child$$83$$.zIndex && ($newIndex$$9$$ = $i$$924$$ + 1)
  }
  $newIndex$$9$$ < $numChildren$$17$$ ? this.$_selectedLayer$.$addChildAt$($rect$$52$$, $newIndex$$9$$) : this.$_selectedLayer$.$addChild$($rect$$52$$)
};
D.$JSCompiler_prototypeAlias$$.$__getNodeUnderPoint$ = function $$JSCompiler_prototypeAlias$$$$__getNodeUnderPoint$$($x$$315$$, $y$$283$$) {
  return 0 < this.$_isolatedNodes$.length ? this.$_isolatedNodes$[this.$_isolatedNodes$.length - 1].$getNodeUnderPoint$($x$$315$$, $y$$283$$) : this.$_root$.$getNodeUnderPoint$($x$$315$$, $y$$283$$)
};
D.$JSCompiler_StaticMethods___getLastIsolatedNode$$ = function $$JSCompiler_StaticMethods___getLastIsolatedNode$$$($JSCompiler_StaticMethods___getLastIsolatedNode$self$$) {
  return $JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$ && 0 < $JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$.length ? $JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$[$JSCompiler_StaticMethods___getLastIsolatedNode$self$$.$_isolatedNodes$.length - 1] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__renderIsolateRestore$$ = function $$JSCompiler_StaticMethods__renderIsolateRestore$$$($JSCompiler_StaticMethods__renderIsolateRestore$self$$, $node$$337$$) {
  if("none" != $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$getOptions$().animationOnDataChange) {
    for(var $playables$$inline_9193_selectedNodes$$3$$ = $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_selectionHandler$ ? $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_selectionHandler$.getSelection() : [], $descendants$$inline_9194_i$$925$$ = 0;$descendants$$inline_9194_i$$925$$ < $playables$$inline_9193_selectedNodes$$3$$.length;$descendants$$inline_9194_i$$925$$++) {
      $playables$$inline_9193_selectedNodes$$3$$[$descendants$$inline_9194_i$$925$$].$setSelected$(D.$JSCompiler_alias_FALSE$$)
    }
    for(var $playables$$inline_9193_selectedNodes$$3$$ = [(0,D.$JSCompiler_StaticMethods__getIsolateAnimation$$)($node$$337$$)], $descendants$$inline_9194_i$$925$$ = (0,D.$JSCompiler_StaticMethods_getDescendantNodes$$)($node$$337$$), $i$$inline_9195$$ = 0;$i$$inline_9195$$ < $descendants$$inline_9194_i$$925$$.length;$i$$inline_9195$$++) {
      $playables$$inline_9193_selectedNodes$$3$$.push((0,D.$JSCompiler_StaticMethods__getIsolateAnimation$$)($descendants$$inline_9194_i$$925$$[$i$$inline_9195$$]))
    }
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Animation$ = new D.$DvtParallelPlayable$$($JSCompiler_StaticMethods__renderIsolateRestore$self$$.$getCtx$(), $playables$$inline_9193_selectedNodes$$3$$);
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Animation$.$setOnEnd$($JSCompiler_StaticMethods__renderIsolateRestore$self$$.$OnAnimationEnd$, $JSCompiler_StaticMethods__renderIsolateRestore$self$$);
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$_eventHandler$.$removeListeners$($JSCompiler_StaticMethods__renderIsolateRestore$self$$);
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Animation$.play()
  }else {
    $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$render$(D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Width$, $JSCompiler_StaticMethods__renderIsolateRestore$self$$.$Height$, D.$JSCompiler_alias_TRUE$$)
  }
};
D.$JSCompiler_StaticMethods___getDefaultNavigable$$ = function $$JSCompiler_StaticMethods___getDefaultNavigable$$$($JSCompiler_StaticMethods___getDefaultNavigable$self$$, $navigableItems$$10$$) {
  var $keyboardHandler$$10$$ = $JSCompiler_StaticMethods___getDefaultNavigable$self$$.$_eventHandler$.$KeyboardHandler$;
  return $keyboardHandler$$10$$ ? $keyboardHandler$$10$$.$getDefaultNavigable$($navigableItems$$10$$) : $navigableItems$$10$$ && 0 < $navigableItems$$10$$.length ? $navigableItems$$10$$[0] : D.$JSCompiler_alias_NULL$$
};
D.$DvtTreemap$$.prototype.$GetComponentDescription$ = function $$DvtTreemap$$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslation$$)(this.$getOptions$(), "componentName", "DvtUtilBundle", "TREEMAP")
};
D.$DvtTreemap$$.prototype.$getBundlePrefix$ = (0,D.$JSCompiler_returnArg$$)("DvtTreemapBundle");
D.$DvtTreemap$$.prototype.$CreateNode$ = function $$DvtTreemap$$$$$CreateNode$$($nodeOptions$$6$$) {
  return new D.$DvtTreemapNode$$(this, $nodeOptions$$6$$)
};
D.$DvtTreemapNode$$ = function $$DvtTreemapNode$$$($treemap$$, $props$$25$$) {
  this.Init($treemap$$, $props$$25$$);
  var $options$$316$$ = this.$_view$.$getOptions$(), $nodeDefaults$$3$$ = $options$$316$$.nodeDefaults, $headerDefaults$$ = $nodeDefaults$$3$$.header, $headerOptions$$ = $props$$25$$.header ? $props$$25$$.header : {};
  this.$_groupLabelDisplay$ = $props$$25$$.groupLabelDisplay ? $props$$25$$.groupLabelDisplay : $nodeDefaults$$3$$.groupLabelDisplay;
  this.$_labelDisplay$ = $props$$25$$.labelDisplay ? $props$$25$$.labelDisplay : $nodeDefaults$$3$$.labelDisplay;
  this.$_labelHalign$ = $props$$25$$.labelHalign ? $props$$25$$.labelHalign : $nodeDefaults$$3$$.labelHalign;
  this.$_labelValign$ = $props$$25$$.labelValign ? $props$$25$$.labelValign : $nodeDefaults$$3$$.labelValign;
  this.$_headerHalign$ = $headerOptions$$.labelHalign ? $headerOptions$$.labelHalign : $headerDefaults$$.labelHalign;
  this.$_headerLabelStyle$ = $headerOptions$$.labelStyle ? new D.$DvtCSSStyle$$($headerOptions$$.labelStyle) : D.$JSCompiler_alias_NULL$$;
  this.$_bHeaderUseNodeColor$ = "on" == ($headerOptions$$.useNodeColor ? $headerOptions$$.useNodeColor : $headerDefaults$$.useNodeColor);
  this.$_isolate$ = $headerOptions$$.isolate ? $headerOptions$$.isolate : $headerDefaults$$.isolate;
  "auto" == this.$_isolate$ && (this.$_isolate$ = (0,D.$DvtAgent$isTouchDevice$$)() ? "off" : "on");
  this.$_bIsolated$ = $options$$316$$.isolatedNode != D.$JSCompiler_alias_NULL$$ && $options$$316$$.isolatedNode == this.getId()
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapNode$$, D.$DvtBaseTreeNode$$, "DvtTreemapNode");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTreemapNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$221_dim$$91_dims$$73_text$$inline_9209_transX$$9$$) {
  if(this.$_hasLayout$) {
    this.$_shape$ = this.$_createShapeNode$();
    $container$$221_dim$$91_dims$$73_text$$inline_9209_transX$$9$$.$addChild$(this.$_shape$);
    var $afRoot$$11_template$$25$$;
    this.$hasChildren$() ? (this.$_childNodeGroup$ = new D.$DvtContainer$$(this.$_view$.$getCtx$()), this.$_shape$.$addChild$(this.$_childNodeGroup$), this.$renderChildren$(this.$_childNodeGroup$)) : $afRoot$$11_template$$25$$ = (0,D.$JSCompiler_StaticMethods_GetTemplate$$)(this);
    if($afRoot$$11_template$$25$$) {
      var $aw$$4_elAttrs$$2$$ = this.$getOptions$()._cf, $afContext$$64$$ = this.$_view$.$_afContext$;
      $afContext$$64$$.$_elContext$ = $aw$$4_elAttrs$$2$$;
      var $aw$$4_elAttrs$$2$$ = this.$_width$ - 8 - 2, $ah$$6$$ = this.$_height$ - 4 - 2;
      0 < $aw$$4_elAttrs$$2$$ && 0 < $ah$$6$$ && ((0,D.$JSCompiler_StaticMethods_setAvailableWidth$$)($afContext$$64$$, $aw$$4_elAttrs$$2$$), (0,D.$JSCompiler_StaticMethods_setAvailableHeight$$)($afContext$$64$$, $ah$$6$$), $afContext$$64$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this)), this.$_contentRoot$ = $afRoot$$11_template$$25$$ = D.$DvtAfComponentFactory$$.$parseAndLayout$($afContext$$64$$, $afRoot$$11_template$$25$$, this.$_shape$), (0,D.$DvtAgent$isRightToLeft$$)($container$$221_dim$$91_dims$$73_text$$inline_9209_transX$$9$$.$getCtx$()) ? 
      ($container$$221_dim$$91_dims$$73_text$$inline_9209_transX$$9$$ = $afRoot$$11_template$$25$$.$getDimensions$(), $container$$221_dim$$91_dims$$73_text$$inline_9209_transX$$9$$ = this.$_x$ + this.$_width$ - 4 - 1 - $container$$221_dim$$91_dims$$73_text$$inline_9209_transX$$9$$.$w$) : $container$$221_dim$$91_dims$$73_text$$inline_9209_transX$$9$$ = this.$_x$ + 4 + 1, (0,D.$JSCompiler_StaticMethods_setTranslate$$)($afRoot$$11_template$$25$$, $container$$221_dim$$91_dims$$73_text$$inline_9209_transX$$9$$, 
      this.$_y$ + 2 + 1))
    }else {
      this.$_text$ = this.$_createTextNode$(this.$_shape$), this.$_text$ != D.$JSCompiler_alias_NULL$$ && (this.$_pattern$ && "header" != this.$_textStyle$) && ($container$$221_dim$$91_dims$$73_text$$inline_9209_transX$$9$$ = this.$_text$.$measureDimensions$(), this.$_textBackground$ = new D.$DvtRect$$(this.$_view$.$getCtx$(), $container$$221_dim$$91_dims$$73_text$$inline_9209_transX$$9$$.x, $container$$221_dim$$91_dims$$73_text$$inline_9209_transX$$9$$.y, $container$$221_dim$$91_dims$$73_text$$inline_9209_transX$$9$$.$w$, 
      $container$$221_dim$$91_dims$$73_text$$inline_9209_transX$$9$$.$h$), this.$_textBackground$.$setSolidFill$("#FFFFFF"), this.$_textBackground$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$_shape$.$addChild$(this.$_textBackground$), $container$$221_dim$$91_dims$$73_text$$inline_9209_transX$$9$$ = this.$_text$, "node" == this.$_textStyle$ && this.$hasChildren$() ? this.$_view$.$_groupTextLayer$.$addChild$($container$$221_dim$$91_dims$$73_text$$inline_9209_transX$$9$$) : this.$_shape$.$addChild$($container$$221_dim$$91_dims$$73_text$$inline_9209_transX$$9$$))
    }
    this.$hasChildren$() ? this.$_shape$.$setAriaRole$("group") : this.$_shape$.$setAriaRole$("img");
    this.$UpdateAriaLabel$()
  }
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($nodeDefaults$$4_parentNode$$16_selected$$48$$) {
  D.$DvtTreemapNode$$.$superclass$.$setSelected$.call(this, $nodeDefaults$$4_parentNode$$16_selected$$48$$);
  if(this.$_shape$) {
    $nodeDefaults$$4_parentNode$$16_selected$$48$$ = this.$_view$.$getOptions$().nodeDefaults;
    var $nodeHeaderDefaults$$ = $nodeDefaults$$4_parentNode$$16_selected$$48$$.header;
    if(this.$isSelected$()) {
      var $x$$316$$ = this.$_x$, $y$$284$$ = this.$_y$ + 1, $w$$74$$ = this.$_width$ - 1, $h$$68$$ = this.$_height$ - 1;
      (0,D.$DvtAgent$isPlatformWebkit$$)() && ($y$$284$$ -= 1);
      (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionOuter$);
      (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionInner$);
      this.$_selectionInner$ = this.$_selectionOuter$ = D.$JSCompiler_alias_NULL$$;
      this.$_selectionOuter$ = new D.$DvtRect$$(this.$_view$.$getCtx$(), $x$$316$$, $y$$284$$, $w$$74$$, $h$$68$$);
      this.$_selectionOuter$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      this.$_selectionOuter$.$setFill$(D.$JSCompiler_alias_NULL$$);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_selectionOuter$);
      this.$_shape$.$addChild$(this.$_selectionOuter$);
      this.$_selectionInner$ = new D.$DvtRect$$(this.$_view$.$getCtx$(), $x$$316$$ + 1, $y$$284$$ + 1, $w$$74$$ - 2, $h$$68$$ - 2);
      this.$_selectionInner$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$);
      this.$_selectionInner$.$setFill$(D.$JSCompiler_alias_NULL$$);
      (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_selectionInner$);
      this.$_shape$.$addChild$(this.$_selectionInner$);
      "header" == this.$_textStyle$ ? (this.$IsHover$ || this.$isShowingKeyboardFocusEffect$() ? this.$_innerShape$.$setSolidFill$($nodeHeaderDefaults$$.hoverBackgroundColor) : (this.$_innerShape$.$setSolidFill$($nodeHeaderDefaults$$.selectedBackgroundColor), this.$_text$ && (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "_selectedLabelStyle")), this.$_selectionOuter$.$setSolidStroke$($nodeHeaderDefaults$$.selectedOuterColor), this.$_selectionInner$.$setSolidStroke$($nodeHeaderDefaults$$.selectedInnerColor), 
      (0,D.$DvtAgent$isTouchDevice$$)() && (this.$_isolateButton$ = (0,D.$JSCompiler_StaticMethods__createIsolateRestoreButton$$)(this, this.$_shape$))) : (this.$_selectionOuter$.$setSolidStroke$($nodeDefaults$$4_parentNode$$16_selected$$48$$.selectedOuterColor), this.$_selectionInner$.$setSolidStroke$($nodeDefaults$$4_parentNode$$16_selected$$48$$.selectedInnerColor), !(0,D.$DvtAgent$isBrowserSafari$$)() && !(0,D.$DvtAgent$isPlatformGecko$$)() && (0,D.$JSCompiler_StaticMethods_addDrawEffect$$)(this.$_shape$, 
      D.$DvtBaseTreeNode$__NODE_SELECTED_SHADOW$$), this.$_view$.$__moveToSelectedLayer$(this.$_shape$))
    }else {
      (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionInner$), this.$_selectionInner$ = D.$JSCompiler_alias_NULL$$, (0,D.$DvtAgent$isTouchDevice$$)() && (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this), "header" == this.$_textStyle$ ? (this.$IsHover$ || this.$isShowingKeyboardFocusEffect$() ? this.$_innerShape$.$setSolidFill$($nodeHeaderDefaults$$.hoverBackgroundColor) : ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, this.$_shape$, this.$_innerShape$), 
      this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "_drillableLabelStyle") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "labelStyle"))), this.$_selectionOuter$ && (this.$IsHover$ || this.$isShowingKeyboardFocusEffect$() ? this.$_selectionOuter$.$setSolidStroke$($nodeHeaderDefaults$$.hoverOuterColor) : ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionOuter$), this.$_selectionOuter$ = 
      D.$JSCompiler_alias_NULL$$))) : ((0,D.$JSCompiler_StaticMethods_removeAllDrawEffects$$)(this.$_shape$), this.$_selectionOuter$ && ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_selectionOuter$), this.$_selectionOuter$ = D.$JSCompiler_alias_NULL$$), ($nodeDefaults$$4_parentNode$$16_selected$$48$$ = this.$_parent$) && $nodeDefaults$$4_parentNode$$16_selected$$48$$.$_childNodeGroup$ && $nodeDefaults$$4_parentNode$$16_selected$$48$$.$_childNodeGroup$.$addChild$(this.$_shape$))
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  if(this.$_shape$ && this.$_hasLayout$) {
    var $nodeDefaults$$5_stroke$$122_stroke$$inline_9213_x$$317$$ = this.$_view$.$getOptions$().nodeDefaults, $JSCompiler_StaticMethods___showHoverEffect$self$$inline_9211_nodeHeaderDefaults$$1$$ = $nodeDefaults$$5_stroke$$122_stroke$$inline_9213_x$$317$$.header, $isolatedNode_points$$80$$ = (0,D.$JSCompiler_StaticMethods___getLastIsolatedNode$$)(this.$_view$);
    if(!($isolatedNode_points$$80$$ != D.$JSCompiler_alias_NULL$$ && $isolatedNode_points$$80$$ != this && !this.$isDescendantOf$($isolatedNode_points$$80$$))) {
      var $isolatedNode_points$$80$$ = [], $x1$$58_y$$285$$, $w$$75_y1$$48$$, $h$$69_x2$$55$$, $y2$$45$$;
      "header" == this.$_textStyle$ ? (this.$_innerShape$.$setSolidFill$($JSCompiler_StaticMethods___showHoverEffect$self$$inline_9211_nodeHeaderDefaults$$1$$.hoverBackgroundColor), this.$_selectionOuter$ || ($nodeDefaults$$5_stroke$$122_stroke$$inline_9213_x$$317$$ = this.$_x$, $x1$$58_y$$285$$ = this.$_y$ + 1, $w$$75_y1$$48$$ = this.$_width$ - 1, $h$$69_x2$$55$$ = this.$_height$ - 1, (0,D.$DvtAgent$isPlatformWebkit$$)() && ($x1$$58_y$$285$$ -= 1), this.$_selectionOuter$ = new D.$DvtRect$$(this.$_view$.$getCtx$(), 
      $nodeDefaults$$5_stroke$$122_stroke$$inline_9213_x$$317$$, $x1$$58_y$$285$$, $w$$75_y1$$48$$, $h$$69_x2$$55$$), this.$_selectionOuter$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), this.$_selectionOuter$.$setFill$(D.$JSCompiler_alias_NULL$$), (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)(this.$_selectionOuter$), this.$_shape$.$addChild$(this.$_selectionOuter$)), this.$_selectionOuter$.$setSolidStroke$(this.$isSelected$() ? $JSCompiler_StaticMethods___showHoverEffect$self$$inline_9211_nodeHeaderDefaults$$1$$.selectedOuterColor : 
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_9211_nodeHeaderDefaults$$1$$.hoverOuterColor), $x1$$58_y$$285$$ = this.$_x$ + 1.5 + 1, $h$$69_x2$$55$$ = this.$_x$ + this.$_width$ - 1.5 - 1, $w$$75_y1$$48$$ = this.$_y$ + this.$_titleBarHeight$, $y2$$45$$ = this.$_y$ + this.$_height$ - 1.5 - 1, $isolatedNode_points$$80$$.push($h$$69_x2$$55$$, $w$$75_y1$$48$$, $h$$69_x2$$55$$, $y2$$45$$, $x1$$58_y$$285$$, $y2$$45$$, $x1$$58_y$$285$$, $w$$75_y1$$48$$), $nodeDefaults$$5_stroke$$122_stroke$$inline_9213_x$$317$$ = 
      new D.$DvtSolidStroke$$($JSCompiler_StaticMethods___showHoverEffect$self$$inline_9211_nodeHeaderDefaults$$1$$.hoverInnerColor, 0.8, 3), this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "_drillableHoverLabelStyle") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "_hoverLabelStyle"))) : ($x1$$58_y$$285$$ = this.$_x$ + 1, $h$$69_x2$$55$$ = this.$_x$ + this.$_width$ - 1, $w$$75_y1$$48$$ = this.$_y$ + 
      1, $y2$$45$$ = this.$_y$ + this.$_height$ - 1, $isolatedNode_points$$80$$.push(this.$_x$, $w$$75_y1$$48$$, $h$$69_x2$$55$$, $w$$75_y1$$48$$, $h$$69_x2$$55$$, $y2$$45$$, $x1$$58_y$$285$$, $y2$$45$$, $x1$$58_y$$285$$, $w$$75_y1$$48$$), $nodeDefaults$$5_stroke$$122_stroke$$inline_9213_x$$317$$ = new D.$DvtSolidStroke$$($nodeDefaults$$5_stroke$$122_stroke$$inline_9213_x$$317$$.hoverColor, 1, 2));
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_9211_nodeHeaderDefaults$$1$$ = this.$_view$;
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_9211_nodeHeaderDefaults$$1$$.$_hoverEffect$.$setPoints$($isolatedNode_points$$80$$);
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_9211_nodeHeaderDefaults$$1$$.$_hoverEffect$.$setStroke$($nodeDefaults$$5_stroke$$122_stroke$$inline_9213_x$$317$$);
      $JSCompiler_StaticMethods___showHoverEffect$self$$inline_9211_nodeHeaderDefaults$$1$$.$_hoverEffect$.$setVisible$(D.$JSCompiler_alias_TRUE$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  if(this.$_shape$ && this.$_hasLayout$) {
    var $nodeHeaderDefaults$$2$$ = this.$_view$.$getOptions$().nodeDefaults.header;
    "header" == this.$_textStyle$ && (this.$isSelected$() ? (this.$_innerShape$.$setSolidFill$($nodeHeaderDefaults$$2$$.selectedBackgroundColor), this.$_selectionOuter$.$setSolidStroke$($nodeHeaderDefaults$$2$$.selectedOuterColor), this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "_drillableSelectedLabelStyle") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "_selectedLabelStyle"))) : ((0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, 
    this.$_shape$, this.$_innerShape$), this.$_selectionOuter$ && (this.$_shape$.removeChild(this.$_selectionOuter$), this.$_selectionOuter$ = D.$JSCompiler_alias_NULL$$), this.$_text$ && (this.$isDrillReplaceEnabled$() ? (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "_drillableLabelStyle") : (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, this.$_text$, "labelStyle"))));
    this.$_view$.$_hoverEffect$.$setVisible$(D.$JSCompiler_alias_FALSE$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$highlight$ = function $$JSCompiler_prototypeAlias$$$$highlight$$($bDimmed$$4$$, $alpha$$53$$) {
  this.$hasChildren$() ? (this.$_text$ && this.$_text$.$setAlpha$($alpha$$53$$), "header" == this.$_textStyle$ && (this.$_bHeaderUseNodeColor$ && this.$_innerShape$) && this.$_innerShape$.$setAlpha$($alpha$$53$$)) : D.$DvtTreemapNode$$.$superclass$.$highlight$.call(this, $bDimmed$$4$$, $alpha$$53$$)
};
D.$JSCompiler_prototypeAlias$$.$isIsolateEnabled$ = function $$JSCompiler_prototypeAlias$$$$isIsolateEnabled$$() {
  return"off" != this.$_isolate$ && "header" == this.$_textStyle$
};
D.$JSCompiler_prototypeAlias$$.$getPopupBounds$ = function $$JSCompiler_prototypeAlias$$$$getPopupBounds$$($behavior$$17$$) {
  return!$behavior$$17$$ || !$behavior$$17$$.$getAlign$() ? D.$DvtTreemapNode$$.$superclass$.$getPopupBounds$.call(this, $behavior$$17$$) : new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$841_lastChild$$2_next$$23$$) {
  var $keyCode$$58_navigables$$15_parent$$95$$;
  if($event$$841_lastChild$$2_next$$23$$.type == D.$DvtMouseEvent$CLICK$$) {
    return D.$DvtTreemapNode$$.$superclass$.$getNextNavigable$.call(this, $event$$841_lastChild$$2_next$$23$$)
  }
  $keyCode$$58_navigables$$15_parent$$95$$ = $event$$841_lastChild$$2_next$$23$$.keyCode;
  if(32 == $keyCode$$58_navigables$$15_parent$$95$$ && $event$$841_lastChild$$2_next$$23$$.ctrlKey) {
    return this
  }
  if(38 == $keyCode$$58_navigables$$15_parent$$95$$ && $event$$841_lastChild$$2_next$$23$$.altKey || 221 == $keyCode$$58_navigables$$15_parent$$95$$) {
    ($keyCode$$58_navigables$$15_parent$$95$$ = this.$_parent$) && $keyCode$$58_navigables$$15_parent$$95$$.getId() != this.$_view$.$_root$.getId() ? ($event$$841_lastChild$$2_next$$23$$ = $keyCode$$58_navigables$$15_parent$$95$$, (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($keyCode$$58_navigables$$15_parent$$95$$)) : $event$$841_lastChild$$2_next$$23$$ = this
  }else {
    if(40 == $keyCode$$58_navigables$$15_parent$$95$$ && $event$$841_lastChild$$2_next$$23$$.altKey || 219 == $keyCode$$58_navigables$$15_parent$$95$$) {
      $event$$841_lastChild$$2_next$$23$$ = ($event$$841_lastChild$$2_next$$23$$ = this.$_lastVisitedChild$) ? $event$$841_lastChild$$2_next$$23$$ : this.$hasChildren$() ? (0,D.$JSCompiler_StaticMethods___getDefaultNavigable$$)(this.$_view$, this.$getChildNodes$()) : this
    }else {
      var $root$$39$$ = (0,D.$JSCompiler_StaticMethods___getLastIsolatedNode$$)(this.$_view$), $depth$$28$$ = 0;
      if($root$$39$$) {
        if(this == $root$$39$$) {
          $depth$$28$$ = 0
        }else {
          $keyCode$$58_navigables$$15_parent$$95$$ = this.$_parent$;
          for($depth$$28$$ = 1;$root$$39$$ != $keyCode$$58_navigables$$15_parent$$95$$;) {
            $depth$$28$$++, $keyCode$$58_navigables$$15_parent$$95$$ = $keyCode$$58_navigables$$15_parent$$95$$.$_parent$
          }
        }
      }else {
        for($root$$39$$ = this;$root$$39$$.$_parent$;) {
          $root$$39$$ = $root$$39$$.$_parent$
        }
        $depth$$28$$ = (0,D.$JSCompiler_StaticMethods_GetDepth$$)(this)
      }
      $keyCode$$58_navigables$$15_parent$$95$$ = (0,D.$JSCompiler_StaticMethods_GetNodesAtDepth$$)(this, $root$$39$$, $depth$$28$$);
      $event$$841_lastChild$$2_next$$23$$ = (0,D.$DvtKeyboardHandler$getNextNavigable$$)(this, $event$$841_lastChild$$2_next$$23$$, $keyCode$$58_navigables$$15_parent$$95$$)
    }
  }
  (0,D.$JSCompiler_StaticMethods_MarkAsLastVisitedChild$$)($event$$841_lastChild$$2_next$$23$$);
  return $event$$841_lastChild$$2_next$$23$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_shape$ ? this.$_shape$.$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$setLayoutParams$ = function $$JSCompiler_prototypeAlias$$$$setLayoutParams$$($headerLabelHeight_text$$117_x$$318_xx$$65$$, $y$$286_yy$$65$$, $width$$193_ww$$122$$, $height$$173_hh$$106$$) {
  if(!(0 >= $width$$193_ww$$122$$ || 0 >= $height$$173_hh$$106$$)) {
    this.$_hasLayout$ = D.$JSCompiler_alias_TRUE$$;
    this.$_oldState$ = this.$GetAnimationParams$();
    this.$_x$ = $headerLabelHeight_text$$117_x$$318_xx$$65$$;
    this.$_y$ = $y$$286_yy$$65$$;
    this.$_width$ = $width$$193_ww$$122$$ ? $width$$193_ww$$122$$ : 0;
    this.$_height$ = $height$$173_hh$$106$$ ? $height$$173_hh$$106$$ : 0;
    this.$_textStyle$ = this.$hasChildren$() ? this.$_groupLabelDisplay$ : this.$_labelDisplay$;
    this.$_textStr$ || (this.$_textStyle$ = "off");
    if("header" == this.$_textStyle$) {
      this.$_titleBarHeight$ = 15;
      $headerLabelHeight_text$$117_x$$318_xx$$65$$ = new D.$DvtOutputText$$(this.$_view$.$getCtx$(), this.$_textStr$);
      $headerLabelHeight_text$$117_x$$318_xx$$65$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this));
      (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, $headerLabelHeight_text$$117_x$$318_xx$$65$$, "labelStyle");
      $headerLabelHeight_text$$117_x$$318_xx$$65$$ = D.$DvtTextUtils$$.$guessTextDimensions$($headerLabelHeight_text$$117_x$$318_xx$$65$$).$h$;
      this.$_titleBarHeight$ = window.Math.max(this.$_titleBarHeight$, $headerLabelHeight_text$$117_x$$318_xx$$65$$);
      this.$isIsolateEnabled$() && (this.$_titleBarHeight$ = window.Math.max(this.$_titleBarHeight$, 15));
      $headerLabelHeight_text$$117_x$$318_xx$$65$$ = this.$_x$;
      $y$$286_yy$$65$$ = this.$_y$ + this.$_titleBarHeight$;
      $width$$193_ww$$122$$ = this.$_width$;
      $height$$173_hh$$106$$ = this.$_height$ - this.$_titleBarHeight$;
      if(0 <= $width$$193_ww$$122$$ && 0 <= $height$$173_hh$$106$$) {
        return new D.$DvtRectangle$$($headerLabelHeight_text$$117_x$$318_xx$$65$$, $y$$286_yy$$65$$, $width$$193_ww$$122$$, $height$$173_hh$$106$$)
      }
      this.$_textStyle$ = D.$JSCompiler_alias_NULL$$
    }
    return new D.$DvtRectangle$$(this.$_x$, this.$_y$, this.$_width$, this.$_height$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getNodeUnderPoint$ = function $$JSCompiler_prototypeAlias$$$$getNodeUnderPoint$$($x$$319$$, $y$$287$$) {
  if(this.contains($x$$319$$, $y$$287$$) || !this.$_hasLayout$) {
    for(var $childNodes$$28$$ = this.$getChildNodes$(), $i$$927$$ = 0;$i$$927$$ < $childNodes$$28$$.length;$i$$927$$++) {
      if($childNodes$$28$$[$i$$927$$].contains($x$$319$$, $y$$287$$)) {
        return $childNodes$$28$$[$i$$927$$].$getNodeUnderPoint$($x$$319$$, $y$$287$$)
      }
    }
    if(this.$_hasLayout$) {
      return this
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$320$$, $y$$288$$) {
  return $x$$320$$ >= this.$_x$ && $x$$320$$ <= this.$_x$ + this.$_width$ && $y$$288$$ >= this.$_y$ && $y$$288$$ <= this.$_y$ + this.$_height$
};
D.$JSCompiler_prototypeAlias$$.$GetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$GetAnimationParams$$() {
  var $r$$97$$ = D.$DvtColorUtils$$.$getRed$(this.$_color$), $g$$30$$ = D.$DvtColorUtils$$.$getGreen$(this.$_color$), $b$$69$$ = D.$DvtColorUtils$$.$getBlue$(this.$_color$);
  return[this.$_x$, this.$_y$, this.$_width$, this.$_height$, $r$$97$$, $g$$30$$, $b$$69$$, this.$hasChildren$() ? 0 : window.Math.random()]
};
D.$JSCompiler_prototypeAlias$$.$SetAnimationParams$ = function $$JSCompiler_prototypeAlias$$$$SetAnimationParams$$($params$$59$$) {
  this.$setLayoutParams$($params$$59$$[0], $params$$59$$[1], $params$$59$$[2], $params$$59$$[3]);
  this.$_color$ = D.$DvtColorUtils$$.$makeRGB$(window.Math.round($params$$59$$[4]), window.Math.round($params$$59$$[5]), window.Math.round($params$$59$$[6]));
  this.$_shape$ && ((0,D.$JSCompiler_StaticMethods_setRect$$)(this.$_shape$, this.$_x$, this.$_y$, this.$_width$, this.$_height$), this.$_innerShape$ && (0,D.$JSCompiler_StaticMethods_setRect$$)(this.$_innerShape$, this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), ("header" != this.$_textStyle$ || this.$_bHeaderUseNodeColor$) && this.$_shape$.$setFill$(this.$GetFill$()), this.$isSelected$() && this.$setSelected$(D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, 
  this.$_fillShape$), (0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_topLeftShape$), this.$_topLeftShape$ = this.$_fillShape$ = D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this), (0,D.$JSCompiler_StaticMethods_GetTemplate$$)(this) ? ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_contentRoot$), this.$_contentRoot$ = D.$JSCompiler_alias_NULL$$) : ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)(this, this.$_textBackground$), 
  this.$_textBackground$ = D.$JSCompiler_alias_NULL$$, this.$_text$ && this.$_text$.getParent().removeChild(this.$_text$), this.$_text$ = this.$_createTextNode$(this.$_shape$)))
};
D.$JSCompiler_StaticMethods__getIsolateAnimation$$ = function $$JSCompiler_StaticMethods__getIsolateAnimation$$$($JSCompiler_StaticMethods__getIsolateAnimation$self$$) {
  if($JSCompiler_StaticMethods__getIsolateAnimation$self$$.$_oldState$) {
    var $playable$$48$$ = new D.$DvtCustomAnimation$$($JSCompiler_StaticMethods__getIsolateAnimation$self$$.$_view$.$getCtx$(), $JSCompiler_StaticMethods__getIsolateAnimation$self$$, 0.3);
    (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$48$$.$_animator$, "typeNumberArray", $JSCompiler_StaticMethods__getIsolateAnimation$self$$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$GetAnimationParams$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$SetAnimationParams$, $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$GetAnimationParams$());
    $JSCompiler_StaticMethods__getIsolateAnimation$self$$.$SetAnimationParams$($JSCompiler_StaticMethods__getIsolateAnimation$self$$.$_oldState$);
    return $playable$$48$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTreemapNode$$.prototype.$animateUpdate$ = function $$DvtTreemapNode$$$$$animateUpdate$$($handler$$69$$, $oldNode$$20$$) {
  return 0 == (0,D.$JSCompiler_StaticMethods_GetDepth$$)(this) || $oldNode$$20$$.$_hasLayout$ && 0 < $oldNode$$20$$.$_width$ && 0 < $oldNode$$20$$.$_height$ ? D.$DvtTreemapNode$$.$superclass$.$animateUpdate$.call(this, $handler$$69$$, $oldNode$$20$$) : this.$animateInsert$($handler$$69$$)
};
D.$DvtTreemapNode$$.prototype.$_createShapeNode$ = function $$DvtTreemapNode$$$$$_createShapeNode$$() {
  var $context$$673$$ = this.$_view$.$getCtx$(), $shape$$93$$;
  if("header" == this.$_textStyle$) {
    $shape$$93$$ = new D.$DvtRect$$($context$$673$$, this.$_x$, this.$_y$, this.$_width$, this.$_height$), this.$_innerShape$ = new D.$DvtRect$$($context$$673$$, this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), (0,D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$)(this, $shape$$93$$, this.$_innerShape$), this.$_innerShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$93$$.$addChild$(this.$_innerShape$), this.$_bIsolated$ && (this.$_isolateButton$ = (0,D.$JSCompiler_StaticMethods__createIsolateRestoreButton$$)(this, 
    $shape$$93$$))
  }else {
    var $fill$$77$$ = this.$GetFill$();
    $shape$$93$$ = new D.$DvtRect$$($context$$673$$, this.$_x$, this.$_y$, this.$_width$, this.$_height$);
    if((1E3 > this.$_view$.$_nodeCount$ || !(0,D.$DvtAgent$isTouchDevice$$)()) && 2 <= this.$_width$ && 2 <= this.$_height$) {
      new D.$DvtSolidStroke$$("#FFFFFF");
      new D.$DvtSolidStroke$$("#000000", 0.3);
      this.$_pattern$ && new D.$DvtSolidStroke$$(this.$_color$, 0.15);
      var $bottomRightColor_fillColor$$12$$ = this.$getColor$(), $topLeftColor$$ = D.$DvtColorUtils$$.$interpolateColor$("#FFFFFF", $bottomRightColor_fillColor$$12$$, 0.7), $bottomRightColor_fillColor$$12$$ = D.$DvtColorUtils$$.$interpolateColor$("#000000", $bottomRightColor_fillColor$$12$$, 0.7), $minDim$$1$$ = window.Math.min(this.$_width$, this.$_height$);
      4 <= $minDim$$1$$ ? ($shape$$93$$.$setSolidFill$($bottomRightColor_fillColor$$12$$), this.$_topLeftShape$ = new D.$DvtRect$$($context$$673$$, this.$_x$, this.$_y$, this.$_width$ - 1, this.$_height$ - 1), this.$_topLeftShape$.$setSolidFill$($topLeftColor$$), this.$_topLeftShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$93$$.$addChild$(this.$_topLeftShape$), this.$_fillShape$ = new D.$DvtRect$$($context$$673$$, this.$_x$ + 1, this.$_y$ + 1, this.$_width$ - 2, this.$_height$ - 2), 
      this.$_fillShape$.$setFill$($fill$$77$$), this.$_fillShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$93$$.$addChild$(this.$_fillShape$)) : 2 <= $minDim$$1$$ ? ($shape$$93$$.$setSolidFill$($bottomRightColor_fillColor$$12$$), this.$_fillShape$ = new D.$DvtRect$$($context$$673$$, this.$_x$, this.$_y$, this.$_width$ - 1, this.$_height$ - 1), this.$_fillShape$.$setFill$($fill$$77$$), this.$_fillShape$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), $shape$$93$$.$addChild$(this.$_fillShape$)) : 
      $shape$$93$$.$setFill$($fill$$77$$)
    }else {
      $shape$$93$$.$setFill$($fill$$77$$)
    }
  }
  this.$_view$.$__getEventManager$().$associate$($shape$$93$$, this);
  this.$isSelectable$() ? $shape$$93$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$) : $shape$$93$$.setCursor("default");
  $shape$$93$$.zIndex = this.$_zIndex$;
  return $shape$$93$$
};
D.$JSCompiler_StaticMethods__createIsolateRestoreButton$$ = function $$JSCompiler_StaticMethods__createIsolateRestoreButton$$$($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$, $container$$222$$) {
  if("header" != $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_textStyle$ || !$JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$isIsolateEnabled$()) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $JSCompiler_temp$$168_button$$84_button$$inline_9228_button$$inline_9239_context$$inline_9220_context$$inline_9231$$ = D.$JSCompiler_alias_NULL$$, $transX$$10_x1$$59$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_x$, $x2$$56$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_x$ + $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_width$ - 1, $rect$$53_tooltip$$52_y1$$49$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_y$ + 1, 
  $y2$$46$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_y$ + $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_titleBarHeight$;
  if(12 < $x2$$56$$ - $transX$$10_x1$$59$$ - 2) {
    if($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_bIsolated$) {
      var $JSCompiler_temp$$168_button$$84_button$$inline_9228_button$$inline_9239_context$$inline_9220_context$$inline_9231$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getCtx$(), $bRtl$$inline_9221_bRtl$$inline_9232_upState$$inline_9225_upState$$inline_9236$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_context$), $resources$$inline_9222_resources$$inline_9233$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getOptions$()._resources, 
      $overImage$$inline_9223_overImage$$inline_9234_overState$$inline_9226_overState$$inline_9237$$ = $bRtl$$inline_9221_bRtl$$inline_9232_upState$$inline_9225_upState$$inline_9236$$ && $resources$$inline_9222_resources$$inline_9233$$.restoreDownRtl ? $resources$$inline_9222_resources$$inline_9233$$.restoreDownRtl : $resources$$inline_9222_resources$$inline_9233$$.restoreDown, $downImage$$inline_9224_downImage$$inline_9235_downState$$inline_9227_downState$$inline_9238$$ = $bRtl$$inline_9221_bRtl$$inline_9232_upState$$inline_9225_upState$$inline_9236$$ && 
      $resources$$inline_9222_resources$$inline_9233$$.restoreOverRtl ? $resources$$inline_9222_resources$$inline_9233$$.restoreOverRtl : $resources$$inline_9222_resources$$inline_9233$$.restoreOver, $bRtl$$inline_9221_bRtl$$inline_9232_upState$$inline_9225_upState$$inline_9236$$ = new D.$DvtImage$$($JSCompiler_temp$$168_button$$84_button$$inline_9228_button$$inline_9239_context$$inline_9220_context$$inline_9231$$, $bRtl$$inline_9221_bRtl$$inline_9232_upState$$inline_9225_upState$$inline_9236$$ && 
      $resources$$inline_9222_resources$$inline_9233$$.restoreRtl ? $resources$$inline_9222_resources$$inline_9233$$.restoreRtl : $resources$$inline_9222_resources$$inline_9233$$.restore, 0, 0, 12, 12), $overImage$$inline_9223_overImage$$inline_9234_overState$$inline_9226_overState$$inline_9237$$ = new D.$DvtImage$$($JSCompiler_temp$$168_button$$84_button$$inline_9228_button$$inline_9239_context$$inline_9220_context$$inline_9231$$, $overImage$$inline_9223_overImage$$inline_9234_overState$$inline_9226_overState$$inline_9237$$, 
      0, 0, 12, 12), $downImage$$inline_9224_downImage$$inline_9235_downState$$inline_9227_downState$$inline_9238$$ = new D.$DvtImage$$($JSCompiler_temp$$168_button$$84_button$$inline_9228_button$$inline_9239_context$$inline_9220_context$$inline_9231$$, $downImage$$inline_9224_downImage$$inline_9235_downState$$inline_9227_downState$$inline_9238$$, 0, 0, 12, 12);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($bRtl$$inline_9221_bRtl$$inline_9232_upState$$inline_9225_upState$$inline_9236$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overImage$$inline_9223_overImage$$inline_9234_overState$$inline_9226_overState$$inline_9237$$);
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($downImage$$inline_9224_downImage$$inline_9235_downState$$inline_9227_downState$$inline_9238$$);
      $JSCompiler_temp$$168_button$$84_button$$inline_9228_button$$inline_9239_context$$inline_9220_context$$inline_9231$$ = new D.$DvtButton$$($JSCompiler_temp$$168_button$$84_button$$inline_9228_button$$inline_9239_context$$inline_9220_context$$inline_9231$$, $bRtl$$inline_9221_bRtl$$inline_9232_upState$$inline_9225_upState$$inline_9236$$, $overImage$$inline_9223_overImage$$inline_9234_overState$$inline_9226_overState$$inline_9237$$, $downImage$$inline_9224_downImage$$inline_9235_downState$$inline_9227_downState$$inline_9238$$);
      $JSCompiler_temp$$168_button$$84_button$$inline_9228_button$$inline_9239_context$$inline_9220_context$$inline_9231$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$__restoreNode$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$)
    }else {
      $JSCompiler_temp$$168_button$$84_button$$inline_9228_button$$inline_9239_context$$inline_9220_context$$inline_9231$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getCtx$(), $bRtl$$inline_9221_bRtl$$inline_9232_upState$$inline_9225_upState$$inline_9236$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_context$), $resources$$inline_9222_resources$$inline_9233$$ = $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getOptions$()._resources, 
      $overImage$$inline_9223_overImage$$inline_9234_overState$$inline_9226_overState$$inline_9237$$ = $bRtl$$inline_9221_bRtl$$inline_9232_upState$$inline_9225_upState$$inline_9236$$ && $resources$$inline_9222_resources$$inline_9233$$.isolateDownRtl ? $resources$$inline_9222_resources$$inline_9233$$.isolateDownRtl : $resources$$inline_9222_resources$$inline_9233$$.isolateDown, $downImage$$inline_9224_downImage$$inline_9235_downState$$inline_9227_downState$$inline_9238$$ = $bRtl$$inline_9221_bRtl$$inline_9232_upState$$inline_9225_upState$$inline_9236$$ && 
      $resources$$inline_9222_resources$$inline_9233$$.isolateOverRtl ? $resources$$inline_9222_resources$$inline_9233$$.isolateOverRtl : $resources$$inline_9222_resources$$inline_9233$$.isolateOver, $bRtl$$inline_9221_bRtl$$inline_9232_upState$$inline_9225_upState$$inline_9236$$ = new D.$DvtImage$$($JSCompiler_temp$$168_button$$84_button$$inline_9228_button$$inline_9239_context$$inline_9220_context$$inline_9231$$, $bRtl$$inline_9221_bRtl$$inline_9232_upState$$inline_9225_upState$$inline_9236$$ && 
      $resources$$inline_9222_resources$$inline_9233$$.isolateRtl ? $resources$$inline_9222_resources$$inline_9233$$.isolateRtl : $resources$$inline_9222_resources$$inline_9233$$.isolate, 0, 0, 12, 12), $overImage$$inline_9223_overImage$$inline_9234_overState$$inline_9226_overState$$inline_9237$$ = new D.$DvtImage$$($JSCompiler_temp$$168_button$$84_button$$inline_9228_button$$inline_9239_context$$inline_9220_context$$inline_9231$$, $overImage$$inline_9223_overImage$$inline_9234_overState$$inline_9226_overState$$inline_9237$$, 
      0, 0, 12, 12), $downImage$$inline_9224_downImage$$inline_9235_downState$$inline_9227_downState$$inline_9238$$ = new D.$DvtImage$$($JSCompiler_temp$$168_button$$84_button$$inline_9228_button$$inline_9239_context$$inline_9220_context$$inline_9231$$, $downImage$$inline_9224_downImage$$inline_9235_downState$$inline_9227_downState$$inline_9238$$, 0, 0, 12, 12), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($bRtl$$inline_9221_bRtl$$inline_9232_upState$$inline_9225_upState$$inline_9236$$), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overImage$$inline_9223_overImage$$inline_9234_overState$$inline_9226_overState$$inline_9237$$), 
      (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($downImage$$inline_9224_downImage$$inline_9235_downState$$inline_9227_downState$$inline_9238$$), $JSCompiler_temp$$168_button$$84_button$$inline_9228_button$$inline_9239_context$$inline_9220_context$$inline_9231$$ = new D.$DvtButton$$($JSCompiler_temp$$168_button$$84_button$$inline_9228_button$$inline_9239_context$$inline_9220_context$$inline_9231$$, $bRtl$$inline_9221_bRtl$$inline_9232_upState$$inline_9225_upState$$inline_9236$$, $overImage$$inline_9223_overImage$$inline_9234_overState$$inline_9226_overState$$inline_9237$$, 
      $downImage$$inline_9224_downImage$$inline_9235_downState$$inline_9227_downState$$inline_9238$$), $JSCompiler_temp$$168_button$$84_button$$inline_9228_button$$inline_9239_context$$inline_9220_context$$inline_9231$$.$addEvtListener$(D.$DvtMouseEvent$CLICK$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$__isolateNode$, D.$JSCompiler_alias_FALSE$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$)
    }
    $transX$$10_x1$$59$$ = (0,D.$DvtAgent$isRightToLeft$$)($container$$222$$.$getCtx$()) ? $transX$$10_x1$$59$$ + 1 : $x2$$56$$ - 12 - 1;
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($JSCompiler_temp$$168_button$$84_button$$inline_9228_button$$inline_9239_context$$inline_9220_context$$inline_9231$$, $transX$$10_x1$$59$$, ($y2$$46$$ + $rect$$53_tooltip$$52_y1$$49$$ - 12) / 2);
    $container$$222$$.$addChild$($JSCompiler_temp$$168_button$$84_button$$inline_9228_button$$inline_9239_context$$inline_9220_context$$inline_9231$$);
    (0,D.$DvtAgent$isTouchDevice$$)() && ($rect$$53_tooltip$$52_y1$$49$$ = new D.$DvtRect$$($container$$222$$.$getCtx$(), -2, -2, 16, 16), (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$53_tooltip$$52_y1$$49$$), $JSCompiler_temp$$168_button$$84_button$$inline_9228_button$$inline_9239_context$$inline_9220_context$$inline_9231$$.$addChild$($rect$$53_tooltip$$52_y1$$49$$));
    (0,D.$DvtCSSStyle$afterSkinAlta$$)($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getOptions$().skin) ? $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$__getEventManager$().$associate$($JSCompiler_temp$$168_button$$84_button$$inline_9228_button$$inline_9239_context$$inline_9220_context$$inline_9231$$, $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$) : ($rect$$53_tooltip$$52_y1$$49$$ = (0,D.$DvtBundle$getTranslation$$)($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$getOptions$(), 
    $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_bIsolated$ ? "tooltipRestore" : "tooltipIsolate", "DvtTreemapBundle", $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_bIsolated$ ? "RESTORE" : "ISOLATE"), $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.$_view$.$__getEventManager$().$associate$($JSCompiler_temp$$168_button$$84_button$$inline_9228_button$$inline_9239_context$$inline_9220_context$$inline_9231$$, new D.$DvtBaseTreePeer$$($JSCompiler_StaticMethods__createIsolateRestoreButton$self$$, 
    $JSCompiler_StaticMethods__createIsolateRestoreButton$self$$.getId(), $rect$$53_tooltip$$52_y1$$49$$)))
  }
  return $JSCompiler_temp$$168_button$$84_button$$inline_9228_button$$inline_9239_context$$inline_9220_context$$inline_9231$$
};
D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$ = function $$JSCompiler_StaticMethods__removeIsolateRestoreButton$$$($JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$) {
  $JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$.$_isolateButton$ && ((0,D.$JSCompiler_StaticMethods__removeChildShape$$)($JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$, $JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$.$_isolateButton$), $JSCompiler_StaticMethods__removeIsolateRestoreButton$self$$.$_isolateButton$ = D.$JSCompiler_alias_NULL$$)
};
D.$DvtTreemapNode$$.prototype.$_createTextNode$ = function $$DvtTreemapNode$$$$$_createTextNode$$($container$$223$$) {
  var $chromeAdjustment_isRTL$$66_peer$$34_textHeight$$4$$ = (0,D.$DvtAgent$isRightToLeft$$)($container$$223$$.$getCtx$());
  if(!this.$_textStr$ || !$container$$223$$ || !this.$_textStyle$ || "off" == this.$_textStyle$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $availHeight$$13$$ = this.$_height$;
  if((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this) > $availHeight$$13$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $hAlign$$6$$ = "node" == this.$_textStyle$ ? this.$_labelHalign$ : this.$_headerHalign$;
  $chromeAdjustment_isRTL$$66_peer$$34_textHeight$$4$$ && ("start" == $hAlign$$6$$ ? $hAlign$$6$$ = "end" : "end" == $hAlign$$6$$ && ($hAlign$$6$$ = "start"));
  var $availWidth$$20$$ = this.$_width$ - 6, $isolateWidth$$ = 0;
  this.$isIsolateEnabled$() && ($isolateWidth$$ = 13, $availWidth$$20$$ = "center" == $hAlign$$6$$ ? $availWidth$$20$$ - 2 * $isolateWidth$$ : $availWidth$$20$$ - $isolateWidth$$);
  if(0 >= $availWidth$$20$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $text$$118$$ = new D.$DvtOutputText$$(this.$_view$.$getCtx$(), this.$_textStr$);
  $text$$118$$.$setFontSize$((0,D.$JSCompiler_StaticMethods_GetTextSize$$)(this));
  "start" == $hAlign$$6$$ ? ($chromeAdjustment_isRTL$$66_peer$$34_textHeight$$4$$ ? $text$$118$$.$setX$(this.$_x$ + 4 + $isolateWidth$$) : $text$$118$$.$setX$(this.$_x$ + 4), $text$$118$$.$alignLeft$()) : "center" == $hAlign$$6$$ ? ($text$$118$$.$setX$(this.$_x$ + this.$_width$ / 2), $text$$118$$.$alignCenter$()) : "end" == $hAlign$$6$$ && ($chromeAdjustment_isRTL$$66_peer$$34_textHeight$$4$$ ? $text$$118$$.$setX$(this.$_x$ + this.$_width$ - 4) : $text$$118$$.$setX$(this.$_x$ + this.$_width$ - 4 - 
  $isolateWidth$$), $text$$118$$.$alignRight$());
  "node" == this.$_textStyle$ ? ((0,D.$JSCompiler_StaticMethods_ApplyLabelTextStyle$$)(this, $text$$118$$), $availHeight$$13$$ = this.$_height$ - 4, $chromeAdjustment_isRTL$$66_peer$$34_textHeight$$4$$ = D.$DvtTextUtils$$.$getTextHeight$($text$$118$$), "top" == this.$_labelValign$ ? $text$$118$$.$setY$(this.$_y$ + 2) : "center" == this.$_labelValign$ ? $text$$118$$.$setY$(this.$_y$ + this.$_height$ / 2 - $chromeAdjustment_isRTL$$66_peer$$34_textHeight$$4$$ / 2) : "bottom" == this.$_labelValign$ && 
  $text$$118$$.$setY$(this.$_y$ + this.$_height$ - 2 - $chromeAdjustment_isRTL$$66_peer$$34_textHeight$$4$$)) : "header" == this.$_textStyle$ && ($chromeAdjustment_isRTL$$66_peer$$34_textHeight$$4$$ = (0,D.$DvtAgent$isPlatformWebkit$$)() ? 1 : 0, $text$$118$$.$setY$(this.$_y$ + 1 + this.$_titleBarHeight$ / 2 + $chromeAdjustment_isRTL$$66_peer$$34_textHeight$$4$$), $text$$118$$.$alignMiddle$(), (0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, $text$$118$$, "labelStyle"));
  if($text$$118$$ != D.$JSCompiler_alias_NULL$$) {
    return"header" == this.$_textStyle$ && this.$isDrillReplaceEnabled$() ? ((0,D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$)(this, $text$$118$$, "_drillableLabelStyle"), $text$$118$$.setCursor("pointer"), $chromeAdjustment_isRTL$$66_peer$$34_textHeight$$4$$ = new D.$DvtBaseTreePeer$$(this, this.getId(), D.$JSCompiler_alias_NULL$$, this.$getDatatip$(), this.$getDatatipColor$()), $chromeAdjustment_isRTL$$66_peer$$34_textHeight$$4$$.$setDrillable$(D.$JSCompiler_alias_TRUE$$), this.$_view$.$__getEventManager$().$associate$($text$$118$$, 
    $chromeAdjustment_isRTL$$66_peer$$34_textHeight$$4$$)) : $text$$118$$.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), D.$DvtTextUtils$$.$fitText$($text$$118$$, $availWidth$$20$$, $availHeight$$13$$, $container$$223$$) ? $text$$118$$ : D.$JSCompiler_alias_NULL$$
  }
};
D.$JSCompiler_StaticMethods_ApplyHeaderStyle$$ = function $$JSCompiler_StaticMethods_ApplyHeaderStyle$$$($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$13$$, $shape$$94$$, $borderColor$$65_innerShape$$) {
  var $nodeHeaderDefaults$$3$$ = $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$13$$.$_view$.$getOptions$().nodeDefaults.header;
  $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$13$$.$_bHeaderUseNodeColor$ ? ($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$13$$ = $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$13$$.$getColor$(), $borderColor$$65_innerShape$$.$setSolidFill$($JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$13$$), $borderColor$$65_innerShape$$ = D.$DvtColorUtils$$.$interpolateColor$($nodeHeaderDefaults$$3$$.borderColor, $JSCompiler_StaticMethods_ApplyHeaderStyle$self_fillColor$$13$$, 
  0.5), $shape$$94$$.$setSolidFill$($borderColor$$65_innerShape$$)) : ($shape$$94$$.$setSolidFill$($nodeHeaderDefaults$$3$$.borderColor), $borderColor$$65_innerShape$$.$setSolidFill$($nodeHeaderDefaults$$3$$.backgroundColor))
};
D.$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$ = function $$JSCompiler_StaticMethods_ApplyHeaderTextStyle$$$($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$, $text$$119$$, $styleType$$) {
  var $textStyle$$11$$ = [];
  1 >= (0,D.$JSCompiler_StaticMethods_GetDepth$$)($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$) && $textStyle$$11$$.push(new D.$DvtCSSStyle$$("font-weight:bold;"));
  $textStyle$$11$$.push($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_view$.$getOptions$().nodeDefaults.header[$styleType$$]);
  $JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_bHeaderUseNodeColor$ && ("labelStyle" == $styleType$$ || "_drillableLabelStyle" == $styleType$$) && $textStyle$$11$$.push(new D.$DvtCSSStyle$$("color: " + ($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_pattern$ ? "#000000" : D.$DvtColorUtils$$.$getContrastingTextColor$($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_color$))));
  $JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_headerLabelStyle$ && $textStyle$$11$$.push($JSCompiler_StaticMethods_ApplyHeaderTextStyle$self$$.$_headerLabelStyle$);
  $text$$119$$.$setCSSStyle$((0,D.$DvtCSSStyle$mergeStyles$$)($textStyle$$11$$))
};
D.$DvtTreemapNode$$.prototype.$handleMouseOver$ = function $$DvtTreemapNode$$$$$handleMouseOver$$() {
  !this.$_isolateButton$ && !(0,D.$DvtAgent$isTouchDevice$$)() && (this.$_isolateButton$ = (0,D.$JSCompiler_StaticMethods__createIsolateRestoreButton$$)(this, this.$_shape$));
  D.$DvtTreemapNode$$.$superclass$.$handleMouseOver$.call(this)
};
D.$DvtTreemapNode$$.prototype.$handleMouseOut$ = function $$DvtTreemapNode$$$$$handleMouseOut$$() {
  this.$_bIsolated$ !== D.$JSCompiler_alias_TRUE$$ && !(0,D.$DvtAgent$isTouchDevice$$)() && (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this);
  D.$DvtTreemapNode$$.$superclass$.$handleMouseOut$.call(this)
};
D.$DvtTreemapNode$$.prototype.$getDropSiteFeedback$ = function $$DvtTreemapNode$$$$$getDropSiteFeedback$$() {
  return this.$_shape$ ? new D.$DvtRect$$(this.$_view$.$getCtx$(), this.$_shape$.$getX$(), this.$_shape$.$getY$(), this.$_shape$.getWidth(), this.$_shape$.getHeight()) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__removeChildShape$$ = function $$JSCompiler_StaticMethods__removeChildShape$$$($JSCompiler_StaticMethods__removeChildShape$self$$, $childShape$$) {
  $childShape$$ && $JSCompiler_StaticMethods__removeChildShape$self$$.$_shape$.removeChild($childShape$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtTreemapNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$__isolateNode$ = function $$JSCompiler_prototypeAlias$$$$__isolateNode$$($event$$842$$) {
  this.$_bIsolated$ = D.$JSCompiler_alias_TRUE$$;
  this.$hideHoverEffect$();
  var $JSCompiler_StaticMethods___isolate$self$$inline_9241$$ = this.$_view$, $currentNavigable$$inline_9243_displayable$$inline_9244$$ = $JSCompiler_StaticMethods___isolate$self$$inline_9241$$.$__getEventManager$().$getFocus$();
  $currentNavigable$$inline_9243_displayable$$inline_9244$$ && $currentNavigable$$inline_9243_displayable$$inline_9244$$.$hideKeyboardFocusEffect$();
  $JSCompiler_StaticMethods___isolate$self$$inline_9241$$.$_isolatedNodes$.push(this);
  $JSCompiler_StaticMethods___isolate$self$$inline_9241$$.$getOptions$().isolatedNode = this.getId();
  $JSCompiler_StaticMethods___isolate$self$$inline_9241$$.$__dispatchEvent$(new D.$DvtTreemapIsolateEvent$$(this.getId()));
  $JSCompiler_StaticMethods___isolate$self$$inline_9241$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods___isolate$self$$inline_9241$$.$Layout$(new D.$DvtRectangle$$(0, 0, $JSCompiler_StaticMethods___isolate$self$$inline_9241$$.$Width$, $JSCompiler_StaticMethods___isolate$self$$inline_9241$$.$Height$));
  $JSCompiler_StaticMethods___isolate$self$$inline_9241$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_FALSE$$;
  $currentNavigable$$inline_9243_displayable$$inline_9244$$ = this.$getDisplayable$();
  $JSCompiler_StaticMethods___isolate$self$$inline_9241$$.$_isolatedLayer$.$addChild$($currentNavigable$$inline_9243_displayable$$inline_9244$$);
  (0,D.$JSCompiler_StaticMethods__renderIsolateRestore$$)($JSCompiler_StaticMethods___isolate$self$$inline_9241$$, this);
  (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this);
  this.$UpdateAriaLabel$();
  $event$$842$$ && $event$$842$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$__restoreNode$ = function $$JSCompiler_prototypeAlias$$$$__restoreNode$$($event$$843$$) {
  this.$_bIsolated$ = D.$JSCompiler_alias_FALSE$$;
  this.$hideHoverEffect$();
  var $JSCompiler_StaticMethods___restore$self$$inline_9246$$ = this.$_view$, $restoreNode$$inline_9247$$ = $JSCompiler_StaticMethods___restore$self$$inline_9246$$.$_isolatedNodes$.pop();
  $JSCompiler_StaticMethods___restore$self$$inline_9246$$.$getOptions$().isolatedNode = 0 < $JSCompiler_StaticMethods___restore$self$$inline_9246$$.$_isolatedNodes$.length ? $JSCompiler_StaticMethods___restore$self$$inline_9246$$.$_isolatedNodes$[$JSCompiler_StaticMethods___restore$self$$inline_9246$$.$_isolatedNodes$.length - 1].getId() : D.$JSCompiler_alias_NULL$$;
  var $currentNavigable$$inline_9248_id$$inline_11570$$ = $JSCompiler_StaticMethods___restore$self$$inline_9246$$.$__getEventManager$().$getFocus$();
  $currentNavigable$$inline_9248_id$$inline_11570$$ && $currentNavigable$$inline_9248_id$$inline_11570$$.$hideKeyboardFocusEffect$();
  $currentNavigable$$inline_9248_id$$inline_11570$$ = $restoreNode$$inline_9247$$.getId();
  $JSCompiler_StaticMethods___restore$self$$inline_9246$$.$_navigableIdToFocus$ = $currentNavigable$$inline_9248_id$$inline_11570$$;
  $JSCompiler_StaticMethods___restore$self$$inline_9246$$.$__dispatchEvent$(new D.$DvtTreemapIsolateEvent$$);
  $JSCompiler_StaticMethods___restore$self$$inline_9246$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_TRUE$$;
  $JSCompiler_StaticMethods___restore$self$$inline_9246$$.$Layout$(new D.$DvtRectangle$$(0, 0, $JSCompiler_StaticMethods___restore$self$$inline_9246$$.$Width$, $JSCompiler_StaticMethods___restore$self$$inline_9246$$.$Height$));
  $JSCompiler_StaticMethods___restore$self$$inline_9246$$.$_isolateRestoreLayout$ = D.$JSCompiler_alias_FALSE$$;
  (0,D.$JSCompiler_StaticMethods__renderIsolateRestore$$)($JSCompiler_StaticMethods___restore$self$$inline_9246$$, $restoreNode$$inline_9247$$);
  (0,D.$JSCompiler_StaticMethods__removeIsolateRestoreButton$$)(this);
  this.$UpdateAriaLabel$();
  $event$$843$$ && $event$$843$$.stopPropagation()
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$($target$$132$$, $x$$321$$, $y$$289$$) {
  return $target$$132$$ && $target$$132$$ instanceof D.$DvtButton$$ ? D.$JSCompiler_alias_NULL$$ : D.$DvtTreemapNode$$.$superclass$.$getDatatip$.call(this, $target$$132$$, $x$$321$$, $y$$289$$)
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$($target$$133$$) {
  return $target$$133$$ && $target$$133$$ instanceof D.$DvtButton$$ ? D.$JSCompiler_alias_NULL$$ : D.$DvtTreemapNode$$.$superclass$.$getDatatipColor$.call(this, $target$$133$$)
};
D.$JSCompiler_prototypeAlias$$.$getTooltip$ = function $$JSCompiler_prototypeAlias$$$$getTooltip$$($target$$134$$) {
  return $target$$134$$ && $target$$134$$ instanceof D.$DvtButton$$ ? (0,D.$DvtBundle$getTranslation$$)(this.$_view$.$getOptions$(), this.$_bIsolated$ ? "tooltipRestore" : "tooltipIsolate", "DvtTreemapBundle", this.$_bIsolated$ ? "RESTORE" : "ISOLATE") : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $options$$317$$ = this.$_view$.$getOptions$(), $states$$20$$ = [];
  this.$isSelectable$() && $states$$20$$.push((0,D.$DvtBundle$getTranslation$$)($options$$317$$, this.$isSelected$() ? "stateSelected" : "stateUnselected", "DvtUtilBundle", this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  this.$_bIsolated$ && $states$$20$$.push((0,D.$DvtBundle$getTranslation$$)($options$$317$$, "stateIsolated", "DvtUtilBundle", "STATE_ISOLATED"));
  this.$isDrillReplaceEnabled$() && $states$$20$$.push((0,D.$DvtBundle$getTranslation$$)($options$$317$$, "stateDrillable", "DvtUtilBundle", "STATE_DRILLABLE"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getShortDesc$(), $states$$20$$)
};
D.$JSCompiler_prototypeAlias$$.$UpdateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$UpdateAriaLabel$$() {
  !(0,D.$DvtAgent$deferAriaCreation$$)() && this.$_shape$ && this.$_shape$.$setAriaProperty$("label", this.$getAriaLabel$())
};
D.$DvtBaseTreemapLayout$$ = function $$DvtBaseTreemapLayout$$$() {
  this.Init()
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseTreemapLayout$$, D.$DvtObj$$, "DvtBaseTreemapLayout");
D.$DvtBaseTreemapLayout$$.prototype.Init = function $$DvtBaseTreemapLayout$$$$Init$() {
  this.$_zIndex$ = 0
};
D.$DvtBaseTreemapLayout$$.prototype.$layout$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_StaticMethods_setNodeBounds$$ = function $$JSCompiler_StaticMethods_setNodeBounds$$$($JSCompiler_StaticMethods_setNodeBounds$self_gap$$30$$, $availBounds_node$$332$$, $x$$309$$, $y$$277$$, $width$$187$$, $height$$167$$, $isRoot$$2_xx$$64$$) {
  $availBounds_node$$332$$.$_zIndex$ = $JSCompiler_StaticMethods_setNodeBounds$self_gap$$30$$.$_zIndex$;
  $JSCompiler_StaticMethods_setNodeBounds$self_gap$$30$$.$_zIndex$++;
  if(!$isRoot$$2_xx$$64$$ || !$availBounds_node$$332$$.$hasChildren$()) {
    $JSCompiler_StaticMethods_setNodeBounds$self_gap$$30$$ = $JSCompiler_StaticMethods_setNodeBounds$self_gap$$30$$.$getGapSize$($availBounds_node$$332$$.$_view$, (0,D.$JSCompiler_StaticMethods_GetDepth$$)($availBounds_node$$332$$));
    $isRoot$$2_xx$$64$$ = window.Math.round($x$$309$$ + $JSCompiler_StaticMethods_setNodeBounds$self_gap$$30$$);
    var $yy$$64$$ = window.Math.round($y$$277$$ + $JSCompiler_StaticMethods_setNodeBounds$self_gap$$30$$);
    if($availBounds_node$$332$$ = $availBounds_node$$332$$.$setLayoutParams$($isRoot$$2_xx$$64$$, $yy$$64$$, window.Math.round($x$$309$$ + $width$$187$$ - $JSCompiler_StaticMethods_setNodeBounds$self_gap$$30$$) - $isRoot$$2_xx$$64$$, window.Math.round($y$$277$$ + $height$$167$$ - $JSCompiler_StaticMethods_setNodeBounds$self_gap$$30$$) - $yy$$64$$)) {
      return $availBounds_node$$332$$
    }
  }
  return new D.$DvtRectangle$$($x$$309$$, $y$$277$$, $width$$187$$, $height$$167$$)
};
D.$DvtBaseTreemapLayout$$.prototype.$getGapSize$ = function $$DvtBaseTreemapLayout$$$$$getGapSize$$($view$$69$$, $depth$$27$$) {
  var $groupGaps$$ = $view$$69$$.$getOptions$().groupGaps;
  return"outer" == $groupGaps$$ ? 1 == $depth$$27$$ && 2 <= $view$$69$$.$_maxDepth$ ? 3 : 0 : "all" == $groupGaps$$ ? $depth$$27$$ < $view$$69$$.$_maxDepth$ ? 3 : 0 : 0
};
D.$DvtSquarifyingLayout$$ = function $$DvtSquarifyingLayout$$$() {
  this.Init()
};
D.$DvtObj$$.$createSubclass$(D.$DvtSquarifyingLayout$$, D.$DvtBaseTreemapLayout$$, "DvtSquarifyingLayout");
D.$DvtSquarifyingLayout$$.prototype.$layout$ = function $$DvtSquarifyingLayout$$$$$layout$$($view$$72$$, $root$$37$$, $x$$312$$, $y$$280$$, $width$$190$$, $height$$170$$, $bShowRoot$$2$$) {
  this.$_layout$($root$$37$$, $x$$312$$, $y$$280$$, $width$$190$$, $height$$170$$, $bShowRoot$$2$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$)
};
D.$DvtSquarifyingLayout$$.prototype.$_layout$ = function $$DvtSquarifyingLayout$$$$$_layout$$($children$$26_node$$334$$, $availBounds$$2_x$$313$$, $children$$inline_9155_w$$70_y$$281$$, $i$$inline_9158_width$$191$$, $area$$inline_9156_factor$$inline_9159_height$$171$$, $child$$inline_9160_isRoot$$6_total$$inline_9157$$) {
  $availBounds$$2_x$$313$$ = (0,D.$JSCompiler_StaticMethods_setNodeBounds$$)(this, $children$$26_node$$334$$, $availBounds$$2_x$$313$$, $children$$inline_9155_w$$70_y$$281$$, $i$$inline_9158_width$$191$$, $area$$inline_9156_factor$$inline_9159_height$$171$$, $child$$inline_9160_isRoot$$6_total$$inline_9157$$);
  $children$$26_node$$334$$ = $children$$26_node$$334$$.$getChildNodes$();
  if($children$$26_node$$334$$ != D.$JSCompiler_alias_NULL$$ && 0 < $children$$26_node$$334$$.length) {
    $children$$inline_9155_w$$70_y$$281$$ = $children$$26_node$$334$$;
    $area$$inline_9156_factor$$inline_9159_height$$171$$ = $availBounds$$2_x$$313$$.$w$ * $availBounds$$2_x$$313$$.$h$;
    for($i$$inline_9158_width$$191$$ = $i$$inline_9158_width$$191$$ = $child$$inline_9160_isRoot$$6_total$$inline_9157$$ = 0;$i$$inline_9158_width$$191$$ < $children$$inline_9155_w$$70_y$$281$$.length;$i$$inline_9158_width$$191$$++) {
      $child$$inline_9160_isRoot$$6_total$$inline_9157$$ += 0 < $children$$inline_9155_w$$70_y$$281$$[$i$$inline_9158_width$$191$$].$getSize$() ? $children$$inline_9155_w$$70_y$$281$$[$i$$inline_9158_width$$191$$].$getSize$() : 0
    }
    $area$$inline_9156_factor$$inline_9159_height$$171$$ = 0 == $area$$inline_9156_factor$$inline_9159_height$$171$$ ? 0 : $area$$inline_9156_factor$$inline_9159_height$$171$$ / $child$$inline_9160_isRoot$$6_total$$inline_9157$$;
    for($i$$inline_9158_width$$191$$ = 0;$i$$inline_9158_width$$191$$ < $children$$inline_9155_w$$70_y$$281$$.length;$i$$inline_9158_width$$191$$++) {
      $child$$inline_9160_isRoot$$6_total$$inline_9157$$ = $children$$inline_9155_w$$70_y$$281$$[$i$$inline_9158_width$$191$$], $child$$inline_9160_isRoot$$6_total$$inline_9157$$.$__pxSize$ = $child$$inline_9160_isRoot$$6_total$$inline_9157$$.$getSize$() * $area$$inline_9156_factor$$inline_9159_height$$171$$
    }
    $children$$26_node$$334$$ = $children$$26_node$$334$$.slice(0).sort(function($children$$26_node$$334$$, $availBounds$$2_x$$313$$) {
      return $children$$26_node$$334$$.$getSize$() - $availBounds$$2_x$$313$$.$getSize$()
    });
    $children$$inline_9155_w$$70_y$$281$$ = window.Math.min($availBounds$$2_x$$313$$.$w$, $availBounds$$2_x$$313$$.$h$);
    (0,D.$JSCompiler_StaticMethods__squarify$$)(this, $children$$26_node$$334$$, $children$$inline_9155_w$$70_y$$281$$, new D.$DvtRectangle$$($availBounds$$2_x$$313$$.x, $availBounds$$2_x$$313$$.y, $availBounds$$2_x$$313$$.$w$, $availBounds$$2_x$$313$$.$h$))
  }
};
D.$JSCompiler_StaticMethods__squarify$$ = function $$JSCompiler_StaticMethods__squarify$$$($JSCompiler_StaticMethods__squarify$self$$, $children$$28$$, $w$$71$$, $r$$95$$) {
  var $row$$56$$ = [], $worst$$ = window.Infinity;
  if($children$$28$$ == D.$JSCompiler_alias_NULL$$ || 0 == $children$$28$$.length) {
    (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$56$$, $w$$71$$, $r$$95$$)
  }else {
    for(;0 < $children$$28$$.length;) {
      var $c$$52$$ = $children$$28$$.pop();
      if(0 > $c$$52$$.$__pxSize$) {
        (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$56$$, $w$$71$$, $r$$95$$);
        break
      }
      $row$$56$$.push($c$$52$$);
      var $min$$inline_9165_newWorst$$, $areas$$inline_9162_s2$$inline_9168$$ = $row$$56$$, $w$$inline_9163_w2$$inline_9169$$ = $w$$71$$, $total$$inline_9164$$ = 0;
      $min$$inline_9165_newWorst$$ = window.Infinity;
      for(var $max$$inline_9166$$ = -window.Infinity, $i$$inline_9167$$ = 0;$i$$inline_9167$$ < $areas$$inline_9162_s2$$inline_9168$$.length;$i$$inline_9167$$++) {
        $total$$inline_9164$$ += $areas$$inline_9162_s2$$inline_9168$$[$i$$inline_9167$$].$__pxSize$, $min$$inline_9165_newWorst$$ = window.Math.min($min$$inline_9165_newWorst$$, $areas$$inline_9162_s2$$inline_9168$$[$i$$inline_9167$$].$__pxSize$), $max$$inline_9166$$ = window.Math.max($max$$inline_9166$$, $areas$$inline_9162_s2$$inline_9168$$[$i$$inline_9167$$].$__pxSize$)
      }
      $areas$$inline_9162_s2$$inline_9168$$ = $total$$inline_9164$$ * $total$$inline_9164$$;
      $w$$inline_9163_w2$$inline_9169$$ *= $w$$inline_9163_w2$$inline_9169$$;
      $min$$inline_9165_newWorst$$ = window.Math.max($w$$inline_9163_w2$$inline_9169$$ * $max$$inline_9166$$ / $areas$$inline_9162_s2$$inline_9168$$, $areas$$inline_9162_s2$$inline_9168$$ / ($w$$inline_9163_w2$$inline_9169$$ * $min$$inline_9165_newWorst$$));
      if($min$$inline_9165_newWorst$$ > $worst$$) {
        $children$$28$$.push($c$$52$$);
        $row$$56$$.pop();
        $r$$95$$ = (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$56$$, $w$$71$$, $r$$95$$);
        (0,D.$JSCompiler_StaticMethods__squarify$$)($JSCompiler_StaticMethods__squarify$self$$, $children$$28$$, window.Math.min($r$$95$$.$w$, $r$$95$$.$h$), $r$$95$$);
        break
      }else {
        if(0 == $children$$28$$.length) {
          (0,D.$JSCompiler_StaticMethods__layoutRow$$)($JSCompiler_StaticMethods__squarify$self$$, $row$$56$$, $w$$71$$, $r$$95$$);
          break
        }else {
          $worst$$ = $min$$inline_9165_newWorst$$
        }
      }
    }
  }
};
D.$JSCompiler_StaticMethods__layoutRow$$ = function $$JSCompiler_StaticMethods__layoutRow$$$($JSCompiler_StaticMethods__layoutRow$self$$, $row$$57$$, $w$$73_width$$192$$, $r$$96$$) {
  var $height$$172_total$$11$$ = 0, $i$$920$$;
  for($i$$920$$ = 0;$i$$920$$ < $row$$57$$.length;$i$$920$$++) {
    $height$$172_total$$11$$ += $row$$57$$[$i$$920$$].$__pxSize$
  }
  var $x$$314$$ = $r$$96$$.x, $y$$282$$ = $r$$96$$.y;
  if($w$$73_width$$192$$ == $r$$96$$.$w$) {
    $height$$172_total$$11$$ = 0 == $w$$73_width$$192$$ ? 0 : $height$$172_total$$11$$ / $w$$73_width$$192$$;
    for($i$$920$$ = 0;$i$$920$$ < $row$$57$$.length;$i$$920$$++) {
      $w$$73_width$$192$$ = $row$$57$$[$i$$920$$].$__pxSize$ / $height$$172_total$$11$$, $JSCompiler_StaticMethods__layoutRow$self$$.$_layout$($row$$57$$[$i$$920$$], $x$$314$$, $y$$282$$, $w$$73_width$$192$$, $height$$172_total$$11$$, D.$JSCompiler_alias_FALSE$$), $x$$314$$ += $w$$73_width$$192$$
    }
    return new D.$DvtRectangle$$($r$$96$$.x, $r$$96$$.y + $height$$172_total$$11$$, $r$$96$$.$w$, $r$$96$$.$h$ - $height$$172_total$$11$$)
  }
  $w$$73_width$$192$$ = 0 == $w$$73_width$$192$$ ? 0 : $height$$172_total$$11$$ / $w$$73_width$$192$$;
  for($i$$920$$ = 0;$i$$920$$ < $row$$57$$.length;$i$$920$$++) {
    $height$$172_total$$11$$ = $row$$57$$[$i$$920$$].$__pxSize$ / $w$$73_width$$192$$, $JSCompiler_StaticMethods__layoutRow$self$$.$_layout$($row$$57$$[$i$$920$$], $x$$314$$, $y$$282$$, $w$$73_width$$192$$, $height$$172_total$$11$$, D.$JSCompiler_alias_FALSE$$), $y$$282$$ += $height$$172_total$$11$$
  }
  return new D.$DvtRectangle$$($r$$96$$.x + $w$$73_width$$192$$, $r$$96$$.y, $r$$96$$.$w$ - $w$$73_width$$192$$, $r$$96$$.$h$)
};
D.$DvtSliceAndDiceLayout$$ = function $$DvtSliceAndDiceLayout$$$($isHoriz$$18$$) {
  this.Init();
  this.$_isHoriz$ = $isHoriz$$18$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtSliceAndDiceLayout$$, D.$DvtBaseTreemapLayout$$, "DvtSliceAndDiceLayout");
D.$DvtSliceAndDiceLayout$$.prototype.$layout$ = function $$DvtSliceAndDiceLayout$$$$$layout$$($view$$70$$, $root$$36$$, $x$$310$$, $y$$278$$, $width$$188$$, $height$$168$$, $bShowRoot$$1$$) {
  this.$_layout$(this.$_isHoriz$, $view$$70$$, $root$$36$$, $x$$310$$, $y$$278$$, $width$$188$$, $height$$168$$, $bShowRoot$$1$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$)
};
D.$DvtSliceAndDiceLayout$$.prototype.$_layout$ = function $$DvtSliceAndDiceLayout$$$$$_layout$$($isHoriz$$19$$, $view$$71$$, $children$$25_node$$333$$, $availBounds$$1_x$$311$$, $childX$$1_y$$279$$, $childY$$1_width$$189$$, $childWidth_height$$169$$, $childHeight_isRoot$$4$$) {
  var $child$$81_options$$313$$ = $view$$71$$.$getOptions$();
  $availBounds$$1_x$$311$$ = (0,D.$JSCompiler_StaticMethods_setNodeBounds$$)(this, $children$$25_node$$333$$, $availBounds$$1_x$$311$$, $childX$$1_y$$279$$, $childY$$1_width$$189$$, $childWidth_height$$169$$, $childHeight_isRoot$$4$$);
  $children$$25_node$$333$$ = $children$$25_node$$333$$.$getChildNodes$();
  if($children$$25_node$$333$$ != D.$JSCompiler_alias_NULL$$) {
    $childX$$1_y$$279$$ = $availBounds$$1_x$$311$$.x;
    $childY$$1_width$$189$$ = $availBounds$$1_x$$311$$.y;
    $childWidth_height$$169$$ = $availBounds$$1_x$$311$$.$w$;
    $childHeight_isRoot$$4$$ = $availBounds$$1_x$$311$$.$h$;
    var $total$$8$$ = 0, $i$$917$$;
    for($i$$917$$ = 0;$i$$917$$ < $children$$25_node$$333$$.length;$i$$917$$++) {
      $total$$8$$ += 0 < $children$$25_node$$333$$[$i$$917$$].$getSize$() ? $children$$25_node$$333$$[$i$$917$$].$getSize$() : 0
    }
    "on" == $child$$81_options$$313$$.sorting && ($children$$25_node$$333$$ = $children$$25_node$$333$$.slice(0), $children$$25_node$$333$$.sort(function($isHoriz$$19$$, $view$$71$$) {
      return $view$$71$$.$getSize$() - $isHoriz$$19$$.$getSize$()
    }));
    $isHoriz$$19$$ && (0,D.$DvtAgent$isRightToLeft$$)($view$$71$$.$getCtx$()) && ($children$$25_node$$333$$ = $children$$25_node$$333$$.slice(0).reverse());
    for($i$$917$$ = 0;$i$$917$$ < $children$$25_node$$333$$.length;$i$$917$$++) {
      if($child$$81_options$$313$$ = $children$$25_node$$333$$[$i$$917$$], !(0 >= $child$$81_options$$313$$.$getSize$())) {
        var $sizeRatio$$1$$ = $child$$81_options$$313$$.$getSize$() / $total$$8$$;
        $isHoriz$$19$$ ? $childWidth_height$$169$$ = $availBounds$$1_x$$311$$.$w$ * $sizeRatio$$1$$ : $childHeight_isRoot$$4$$ = $availBounds$$1_x$$311$$.$h$ * $sizeRatio$$1$$;
        this.$_layout$(!$isHoriz$$19$$, $view$$71$$, $child$$81_options$$313$$, $childX$$1_y$$279$$, $childY$$1_width$$189$$, $childWidth_height$$169$$, $childHeight_isRoot$$4$$, D.$JSCompiler_alias_FALSE$$);
        $isHoriz$$19$$ ? $childX$$1_y$$279$$ += $childWidth_height$$169$$ : $childY$$1_width$$189$$ += $childHeight_isRoot$$4$$
      }
    }
  }
};
D.$DvtTreemapIsolateEvent$$ = function $$DvtTreemapIsolateEvent$$$($id$$327$$) {
  this.Init("treemapIsolate");
  this.$_id$ = $id$$327$$ ? $id$$327$$ : D.$JSCompiler_alias_NULL$$
};
(0,D.$goog$exportPath_$$)("DvtTreemapIsolateEvent", D.$DvtTreemapIsolateEvent$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapIsolateEvent$$, D.$DvtBaseComponentEvent$$, "DvtTreemapIsolateEvent");
D.$DvtTreemapIsolateEvent$$.TYPE = "treemapIsolate";
D.$DvtTreemapIsolateEvent$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtTreemapIsolateEvent$$.prototype.getId = D.$DvtTreemapIsolateEvent$$.prototype.getId;
D.$DvtTreemapKeyboardHandler$$ = function $$DvtTreemapKeyboardHandler$$$($manager$$37$$) {
  this.Init($manager$$37$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapKeyboardHandler$$, D.$DvtBaseTreeKeyboardHandler$$, "DvtTreemapKeyboardHandler");
D.$DvtTreemapKeyboardHandler$$.prototype.$isNavigationEvent$ = function $$DvtTreemapKeyboardHandler$$$$$isNavigationEvent$$($event$$840_keyCode$$57$$) {
  var $isNavigable$$1$$ = D.$DvtTreemapKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $event$$840_keyCode$$57$$);
  if(!$isNavigable$$1$$ && ($event$$840_keyCode$$57$$ = $event$$840_keyCode$$57$$.keyCode, 219 == $event$$840_keyCode$$57$$ || 221 == $event$$840_keyCode$$57$$)) {
    $isNavigable$$1$$ = D.$JSCompiler_alias_TRUE$$
  }
  return $isNavigable$$1$$
};
D.$DvtTreemapEventManager$$ = function $$DvtTreemapEventManager$$$($view$$74$$, $context$$672$$, $callback$$180$$, $callbackObj$$130$$) {
  D.$DvtBaseTreeEventManager$$.call(this, $view$$74$$, $context$$672$$, $callback$$180$$, $callbackObj$$130$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapEventManager$$, D.$DvtBaseTreeEventManager$$, "DvtTreemapEventManager");
D.$DvtTreemapEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtTreemapEventManager$$$$$ProcessKeyboardEvent$$($event$$839$$) {
  var $eventConsumed$$9$$ = D.$JSCompiler_alias_TRUE$$;
  if(13 == $event$$839$$.keyCode && $event$$839$$.ctrlKey) {
    var $node$$339$$ = this.$getFocus$();
    $node$$339$$.$isIsolateEnabled$() && ($node$$339$$.$_bIsolated$ ? $node$$339$$.$__restoreNode$() : $node$$339$$.$__isolateNode$());
    (0,D.$DvtEventManager$consumeEvent$$)($event$$839$$)
  }else {
    $eventConsumed$$9$$ = D.$DvtTreemapEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$839$$)
  }
  return $eventConsumed$$9$$
};
D.$DvtTreemapEventManager$$.prototype.$isClearMenuAllowed$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
(0,D.$DvtBundle$addDefaultStrings$$)("DvtTreemapBundle", {COLOR:"Color", ISOLATE:"Isolate", OTHER:"Other", RESTORE:"Restore", SIZE:"Size"});
D.$DvtTreemapDefaults$$ = function $$DvtTreemapDefaults$$$() {
  this.Init({skyros:D.$DvtTreemapDefaults$VERSION_1$$, alta:{}})
};
D.$DvtObj$$.$createSubclass$(D.$DvtTreemapDefaults$$, D.$DvtBaseTreeDefaults$$, "DvtTreemapDefaults");
D.$DvtTreemapDefaults$VERSION_1$$ = {groupGaps:"outer", nodeDefaults:{header:{backgroundColor:"#FFFFFF", borderColor:"#d6dfe6", hoverBackgroundColor:"#ebeced", hoverOuterColor:"#ebeced", hoverInnerColor:"#d6d7d8", isolate:"auto", labelHalign:"start", labelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;color:#252525;"), selectedBackgroundColor:"#dae9f5", selectedInnerColor:"#FFFFFF", selectedOuterColor:"#000000", useNodeColor:"off", _hoverLabelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;color:#252525;"), 
_selectedLabelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px;color:#252525;"), _drillableLabelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; color:#145c9e;"), _drillableHoverLabelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; color:#145c9e;"), _drillableSelectedLabelStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 12px; color:#145c9e;")}, 
hoverColor:"#ebeced", groupLabelDisplay:"header", labelDisplay:"node", labelHalign:"center", labelValign:"center", selectedInnerColor:"#FFFFFF", selectedOuterColor:"#000000"}};

  return D;
});
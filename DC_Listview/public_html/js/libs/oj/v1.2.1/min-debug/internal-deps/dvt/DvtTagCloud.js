/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  
  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtTagCloud$$ = function $$DvtTagCloud$$$($context$$592$$, $callback$$147$$, $callbackObj$$101$$) {
  this.Init($context$$592$$, $callback$$147$$, $callbackObj$$101$$)
};
(0,D.$goog$exportPath_$$)("DvtTagCloud", D.$DvtTagCloud$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloud$$, D.$DvtBaseComponent$$, "DvtTagCloud");
D.$DvtTagCloud$$.newInstance = function $$DvtTagCloud$$$newInstance$($context$$593$$, $callback$$148$$, $callbackObj$$102$$) {
  return new D.$DvtTagCloud$$($context$$593$$, $callback$$148$$, $callbackObj$$102$$)
};
D.$DvtTagCloud$$.prototype.Init = function $$DvtTagCloud$$$$Init$($context$$594$$, $callback$$149$$, $callbackObj$$103$$) {
  D.$DvtTagCloud$$.$superclass$.Init.call(this, $context$$594$$, $callback$$149$$, $callbackObj$$103$$);
  this.$getCtx$().$_stage$.$getElem$().setAttributeNS(D.$JSCompiler_alias_NULL$$, "text-rendering", "geometricPrecision");
  this.$EventManager$ = new D.$DvtTagCloudEventManager$$(this, $context$$594$$, this.$processEvent$, this);
  this.$EventManager$.$addListeners$(this);
  (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$EventManager$, new D.$DvtTagCloudKeyboardHandler$$(this.$EventManager$));
  this.$Defaults$ = new D.$DvtTagCloudDefaults$$;
  this.$_items$ = [];
  this.$_peers$ = [];
  this.$legend$ = D.$JSCompiler_alias_NULL$$;
  this.$_dragSource$ = new D.$DvtDragSource$$(this.$getCtx$());
  (0,D.$JSCompiler_StaticMethods_setDragSource$$)(this.$EventManager$, this.$_dragSource$)
};
D.$DvtTagCloud$$.prototype.$render$ = function $$DvtTagCloud$$$$$render$$($ah$$4_options$$257$$, $animationDuration$$10_width$$155$$, $bounds$$152_height$$141$$) {
  !(0,window.isNaN)($animationDuration$$10_width$$155$$) && !(0,window.isNaN)($bounds$$152_height$$141$$) && (this.$Width$ = $animationDuration$$10_width$$155$$, this.$Height$ = $bounds$$152_height$$141$$);
  this.$__cleanUp$();
  this.$SetOptions$($ah$$4_options$$257$$);
  this.$_animation$ && this.$_animation$.stop();
  this.$_oldContainer$ = this.$_container$;
  this.$_oldItems$ = this.$_items$;
  this.$_items$ = [];
  this.$_itemCollection$ = [];
  this.$_container$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$addChild$(this.$_container$);
  D.$DvtTagCloudRenderer$$.$render$(this, this.$_container$, new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$));
  this.$SelectionHandler$ && (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$SelectionHandler$, this.$Options$.selection, this.$getObjects$());
  $animationDuration$$10_width$$155$$ = this.$Options$.animationDuration;
  $bounds$$152_height$$141$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
  this.$_oldContainer$ ? "none" !== this.$Options$.animationOnDataChange && $ah$$4_options$$257$$ && (this.$_deleteContainer$ = new D.$DvtContainer$$(this.$getCtx$()), this.$addChild$(this.$_deleteContainer$), $ah$$4_options$$257$$ = new D.$DvtDataAnimationHandler$$(this.$getCtx$(), this.$_deleteContainer$), (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($ah$$4_options$$257$$, this.$_oldItems$, this.$_items$), this.$_animation$ = $ah$$4_options$$257$$.$getAnimation$()) : "none" !== this.$Options$.animationOnDisplay && 
  (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$(this.$getCtx$(), D.$DvtBlackBoxAnimationHandler$$.$ALPHA_FADE$, this.$_container$, $bounds$$152_height$$141$$, $animationDuration$$10_width$$155$$));
  this.$_animation$ ? (this.$EventManager$.$hideTooltip$(), this.$EventManager$.$removeListeners$(this), this.$_animation$.$setOnEnd$(this.$OnRenderEnd$, this), this.$_animation$.play()) : this.$OnRenderEnd$();
  this.$UpdateAriaAttributes$()
};
D.$DvtTagCloud$$.prototype.render = D.$DvtTagCloud$$.prototype.$render$;
D.$DvtTagCloud$$.prototype.$registerItems$ = (0,D.$JSCompiler_set$$)("$_items$");
D.$DvtTagCloud$$.prototype.$getAutomation$ = function $$DvtTagCloud$$$$$getAutomation$$() {
  this.$Automation$ || (this.$Automation$ = new D.$DvtTagCloudAutomation$$(this));
  return this.$Automation$
};
D.$DvtTagCloud$$.prototype.getAutomation = D.$DvtTagCloud$$.prototype.$getAutomation$;
D.$DvtTagCloud$$.prototype.$registerObject$ = function $$DvtTagCloud$$$$$registerObject$$($peer$$28$$, $index$$239$$) {
  this.$_peers$.push($peer$$28$$);
  this.$_itemCollection$[$index$$239$$] = $peer$$28$$
};
D.$DvtTagCloud$$.prototype.$getObjects$ = (0,D.$JSCompiler_get$$)("$_peers$");
D.$DvtTagCloud$$.prototype.$getItems$ = (0,D.$JSCompiler_get$$)("$_itemCollection$");
D.$DvtTagCloud$$.prototype.$highlight$ = function $$DvtTagCloud$$$$$highlight$$($categories$$26$$) {
  this.$Options$.highlightedCategories = D.$DvtJSONUtils$$.$clone$($categories$$26$$);
  (0,D.$DvtCategoryRolloverHandler$highlight$$)($categories$$26$$, this.$getObjects$(), "any" === this.$Options$.highlightMatch);
  this.$legend$ && this.$legend$.$highlight$($categories$$26$$)
};
D.$DvtTagCloud$$.prototype.highlight = D.$DvtTagCloud$$.prototype.$highlight$;
D.$DvtTagCloud$$.prototype.select = function $$DvtTagCloud$$$$select$($selection$$33$$) {
  this.$Options$.selection = D.$DvtJSONUtils$$.$clone$($selection$$33$$);
  this.$SelectionHandler$ && (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$SelectionHandler$, this.$Options$.selection, this.$getObjects$())
};
D.$DvtTagCloud$$.prototype.select = D.$DvtTagCloud$$.prototype.select;
D.$JSCompiler_prototypeAlias$$ = D.$DvtTagCloud$$.prototype;
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$258_selectionMode$$13$$) {
  $options$$258_selectionMode$$13$$ ? this.$Options$ = this.$Defaults$.$calcOptions$($options$$258_selectionMode$$13$$) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this));
  $options$$258_selectionMode$$13$$ = this.$Options$.selectionMode;
  this.$SelectionHandler$ = "single" === $options$$258_selectionMode$$13$$ ? new D.$DvtSelectionHandler$$("s") : "multiple" === $options$$258_selectionMode$$13$$ ? new D.$DvtSelectionHandler$$("m") : D.$JSCompiler_alias_NULL$$;
  this.$EventManager$.$setSelectionHandler$(this.$SelectionHandler$);
  (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$.animationOnDisplay = "none", this.$Options$.animationOnDataChange = "none")
};
D.$JSCompiler_prototypeAlias$$.$GetComponentDescription$ = function $$JSCompiler_prototypeAlias$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslation$$)(this.$getOptions$(), "componentName", "DvtUtilBundle", "TAG_CLOUD")
};
D.$JSCompiler_prototypeAlias$$.$OnRenderEnd$ = function $$JSCompiler_prototypeAlias$$$$OnRenderEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_deleteContainer$ && (this.removeChild(this.$_deleteContainer$), this.$_deleteContainer$.$destroy$(), this.$_deleteContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_animation$ && (this.$_animation$ = D.$JSCompiler_alias_NULL$$, this.$EventManager$.$addListeners$(this));
  this.$Options$.highlightedCategories && 0 < this.$Options$.highlightedCategories.length && this.$highlight$(this.$Options$.highlightedCategories)
};
D.$JSCompiler_prototypeAlias$$.$__cleanUp$ = function $$JSCompiler_prototypeAlias$$$$__cleanUp$$() {
  this.$EventManager$.$hideTooltip$();
  this.$_peers$.length = 0
};
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$EventManager$");
D.$JSCompiler_prototypeAlias$$.$processEvent$ = function $$JSCompiler_prototypeAlias$$$$processEvent$$($event$$746$$, $source$$35$$) {
  var $type$$246$$ = $event$$746$$.$getType$();
  if($type$$246$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ || $type$$246$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$) {
    var $category$$23$$ = $event$$746$$.$_category$, $index$$240$$ = this.$Options$.hiddenCategories.indexOf($category$$23$$);
    $type$$246$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ && 0 > $index$$240$$ && this.$Options$.hiddenCategories.push($category$$23$$);
    $type$$246$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$ && 0 <= $index$$240$$ && this.$Options$.hiddenCategories.splice($index$$240$$, 1);
    this.$render$(this.$Options$, this.$Width$, this.$Height$)
  }else {
    if("categoryRollOver" == $type$$246$$ || "categoryRollOut" == $type$$246$$) {
      this != $source$$35$$ ? this.$highlight$($event$$746$$.categories) : this.$legend$ && this.$legend$ != $source$$35$$ && this.$legend$.$processEvent$($event$$746$$, $source$$35$$)
    }
  }
  $event$$746$$ && this.$__dispatchEvent$($event$$746$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  for(var $displayables$$28$$ = [], $selection$$35$$ = this.$SelectionHandler$.getSelection(), $i$$787$$ = 0;$i$$787$$ < $selection$$35$$.length;$i$$787$$++) {
    $displayables$$28$$ = $displayables$$28$$.concat($selection$$35$$[$i$$787$$].$getDisplayables$())
  }
  return $displayables$$28$$
};
D.$DvtTagCloud$$.prototype.$isDragAvailable$ = function $$DvtTagCloud$$$$$isDragAvailable$$($mouseX$$43$$, $mouseY$$43$$, $clientIds$$19$$) {
  return this.$_dragSource$.$isDragAvailable$($clientIds$$19$$)
};
D.$DvtTagCloud$$.prototype.isDragAvailable = D.$DvtTagCloud$$.prototype.$isDragAvailable$;
D.$DvtTagCloud$$.prototype.$getDragTransferable$ = function $$DvtTagCloud$$$$$getDragTransferable$$($mouseX$$44$$, $mouseY$$44$$) {
  return this.$_dragSource$.$getDragTransferable$($mouseX$$44$$, $mouseY$$44$$)
};
D.$DvtTagCloud$$.prototype.getDragTransferable = D.$DvtTagCloud$$.prototype.$getDragTransferable$;
D.$DvtTagCloud$$.prototype.$getDragOverFeedback$ = function $$DvtTagCloud$$$$$getDragOverFeedback$$($mouseX$$45$$, $mouseY$$45$$) {
  return this.$_dragSource$.$getDragOverFeedback$($mouseX$$45$$, $mouseY$$45$$)
};
D.$DvtTagCloud$$.prototype.getDragOverFeedback = D.$DvtTagCloud$$.prototype.$getDragOverFeedback$;
D.$DvtTagCloud$$.prototype.$getDragContext$ = function $$DvtTagCloud$$$$$getDragContext$$($mouseX$$46$$, $mouseY$$46$$) {
  return this.$_dragSource$.$getDragContext$($mouseX$$46$$, $mouseY$$46$$)
};
D.$DvtTagCloud$$.prototype.getDragContext = D.$DvtTagCloud$$.prototype.$getDragContext$;
D.$DvtTagCloud$$.prototype.$getDragOffset$ = function $$DvtTagCloud$$$$$getDragOffset$$($mouseX$$47$$, $mouseY$$47$$) {
  return this.$_dragSource$.$getDragOffset$($mouseX$$47$$, $mouseY$$47$$)
};
D.$DvtTagCloud$$.prototype.getDragOffset = D.$DvtTagCloud$$.prototype.$getDragOffset$;
D.$DvtTagCloud$$.prototype.$getPointerOffset$ = function $$DvtTagCloud$$$$$getPointerOffset$$($xOffset$$6$$, $yOffset$$9$$) {
  return this.$_dragSource$.$getPointerOffset$($xOffset$$6$$, $yOffset$$9$$)
};
D.$DvtTagCloud$$.prototype.getPointerOffset = D.$DvtTagCloud$$.prototype.$getPointerOffset$;
D.$DvtTagCloud$$.prototype.$initiateDrag$ = function $$DvtTagCloud$$$$$initiateDrag$$() {
  this.$_dragSource$.$initiateDrag$()
};
D.$DvtTagCloud$$.prototype.initiateDrag = D.$DvtTagCloud$$.prototype.$initiateDrag$;
D.$DvtTagCloud$$.prototype.$dragDropEnd$ = function $$DvtTagCloud$$$$$dragDropEnd$$() {
  this.$_dragSource$.$dragDropEnd$()
};
D.$DvtTagCloud$$.prototype.dragDropEnd = D.$DvtTagCloud$$.prototype.$dragDropEnd$;
D.$DvtTagCloud$$.prototype.$acceptDrag$ = function $$DvtTagCloud$$$$$acceptDrag$$($mouseX$$48$$, $mouseY$$48$$, $clientIds$$20$$) {
  this.$_dropTarget$ || (this.$_dropTarget$ = new D.$DvtTagCloudDropTarget$$);
  return this.$_dropTarget$.$acceptDrag$($mouseX$$48$$, $mouseY$$48$$, $clientIds$$20$$)
};
D.$DvtTagCloud$$.prototype.acceptDrag = D.$DvtTagCloud$$.prototype.$acceptDrag$;
D.$DvtTagCloudAutomation$$ = (0,D.$JSCompiler_set$$)("$_tagCloud$");
(0,D.$goog$exportPath_$$)("DvtTagCloudAutomation", D.$DvtTagCloudAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudAutomation$$, D.$DvtAutomation$$, "DvtTagCloudAutomation");
D.$DvtTagCloudAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtTagCloudAutomation$$$$$GetSubIdForDomElement$$($displayable$$82_logicalObj$$17$$) {
  return($displayable$$82_logicalObj$$17$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_tagCloud$.$EventManager$, $displayable$$82_logicalObj$$17$$)) && $displayable$$82_logicalObj$$17$$ instanceof D.$DvtTagCloudObjPeer$$ ? "item[" + this.$_tagCloud$.$getItems$().indexOf($displayable$$82_logicalObj$$17$$) + "]" : D.$JSCompiler_alias_NULL$$
};
D.$DvtTagCloudAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtTagCloudAutomation$$$$$getDomElementForSubId$$($index$$242_peer$$30_subId$$25$$) {
  if("tooltip" == $index$$242_peer$$30_subId$$25$$) {
    return(0,D.$JSCompiler_StaticMethods_GetTooltipElement$$)(this.$_tagCloud$)
  }
  var $parenIdx$$1$$ = $index$$242_peer$$30_subId$$25$$.indexOf("[");
  return 0 < $parenIdx$$1$$ && "item" === $index$$242_peer$$30_subId$$25$$.substring(0, $parenIdx$$1$$) && ($index$$242_peer$$30_subId$$25$$ = (0,window.parseInt)($index$$242_peer$$30_subId$$25$$.substring($parenIdx$$1$$ + 1, $index$$242_peer$$30_subId$$25$$.length - 1)), $index$$242_peer$$30_subId$$25$$ = this.$_tagCloud$.$getItems$()[$index$$242_peer$$30_subId$$25$$]) ? $index$$242_peer$$30_subId$$25$$.$getDisplayables$()[0].$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$DvtTagCloudAutomation$$.prototype.getDomElementForSubId = D.$DvtTagCloudAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtTagCloudAutomation$$.prototype.getItem = function $$DvtTagCloudAutomation$$$$getItem$($index$$243_peer$$31$$) {
  if($index$$243_peer$$31$$ = this.$_tagCloud$.$getItems$()[$index$$243_peer$$31$$]) {
    var $data$$94$$ = {};
    $data$$94$$.color = $index$$243_peer$$31$$.$getDatatipColor$();
    $data$$94$$.tooltip = $index$$243_peer$$31$$.$getShortDesc$();
    $data$$94$$.label = $index$$243_peer$$31$$.$getLabel$();
    $data$$94$$.value = $index$$243_peer$$31$$.getValue();
    $data$$94$$.selected = $index$$243_peer$$31$$.$isSelected$();
    return $data$$94$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtTagCloudAutomation$$.prototype.getItem = D.$DvtTagCloudAutomation$$.prototype.getItem;
D.$DvtTagCloudAutomation$$.prototype.$getItemCount$ = function $$DvtTagCloudAutomation$$$$$getItemCount$$() {
  return this.$_tagCloud$.$getObjects$().length
};
D.$DvtTagCloudAutomation$$.prototype.getItemCount = D.$DvtTagCloudAutomation$$.prototype.$getItemCount$;
D.$DvtTagCloudItem$$ = function $$DvtTagCloudItem$$$($tagCloud$$, $context$$596$$, $textStr$$16$$, $x$$271$$, $y$$244$$, $style$$110$$, $id$$283$$) {
  this.Init($tagCloud$$, $context$$596$$, $textStr$$16$$, $x$$271$$, $y$$244$$, $style$$110$$, $id$$283$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudItem$$, D.$DvtBackgroundOutputText$$, "DvtTagCloudItem");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTagCloudItem$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tagCloud$$1$$, $context$$597$$, $textStr$$17$$, $x$$272$$, $y$$245$$, $style$$111$$, $id$$284$$) {
  D.$DvtTagCloudItem$$.$superclass$.Init.call(this, $context$$597$$, $textStr$$17$$, $x$$272$$, $y$$245$$, $style$$111$$, $id$$284$$);
  this.$_tagCloud$ = $tagCloud$$1$$;
  $style$$111$$ && (0,D.$JSCompiler_StaticMethods__createFeedbackStyles$$)(this, $style$$111$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateBackground$ = function $$JSCompiler_prototypeAlias$$$$CreateBackground$$($context$$598$$, $text$$113$$) {
  this.$alignAuto$();
  return D.$DvtTagCloudItem$$.$superclass$.$CreateBackground$.call(this, $context$$598$$, $text$$113$$)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSelected$$8$$) {
  this.$_isSelected$ != $bSelected$$8$$ && ((this.$_isSelected$ = $bSelected$$8$$) ? this.$_isShowingHoverEffect$ ? this.$setCSSStyle$(this.$_hoverSelectedStyle$) : this.$setCSSStyle$(this.$_selectedStyle$) : this.$setCSSStyle$(this.$_normalStyle$))
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_isShowingHoverEffect$ || (this.$_isShowingHoverEffect$ = D.$JSCompiler_alias_TRUE$$, this.$_isSelected$ ? this.$setCSSStyle$(this.$_hoverSelectedStyle$) : this.$setCSSStyle$(this.$_hoverStyle$))
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_isSelected$ ? this.$setCSSStyle$(this.$_selectedStyle$) : this.$setCSSStyle$(this.$_normalStyle$);
  this.$_isShowingHoverEffect$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($handler$$58$$, $oldObj$$2$$) {
  var $anim$$38$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), this, D.$DvtTagCloudStyleUtils$$.$getAnimationDuration$(this.$_tagCloud$)), $endSize_endX$$1_endY$$1_style$$112$$ = this.$getCSSStyle$(), $oldStyle_startAlign_startSize$$ = $oldObj$$2$$.$getCSSStyle$(), $bSizeChange_startY$$6_x$$inline_8164$$ = D.$JSCompiler_alias_FALSE$$, $dims$$inline_8166_startColor$$14_startX$$5$$ = $oldStyle_startAlign_startSize$$.$getStyle$("color"), $endAlign_endColor$$17$$ = $endSize_endX$$1_endY$$1_style$$112$$.$getStyle$("color");
  if($dims$$inline_8166_startColor$$14_startX$$5$$ != $endAlign_endColor$$17$$) {
    var $tag$$2$$ = this;
    this.$setCSSStyle$($endSize_endX$$1_endY$$1_style$$112$$.$setStyle$("color", $dims$$inline_8166_startColor$$14_startX$$5$$));
    (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$38$$.$_animator$, "typeColor", this, function() {
      return $tag$$2$$.$getCSSStyle$().$getStyle$("color")
    }, function($handler$$58$$) {
      $tag$$2$$.$setCSSStyle$($tag$$2$$.$getCSSStyle$().$setStyle$("color", $handler$$58$$))
    }, $endAlign_endColor$$17$$)
  }
  $oldStyle_startAlign_startSize$$ = (0,window.parseFloat)($oldStyle_startAlign_startSize$$.$getStyle$("font-size"));
  $endSize_endX$$1_endY$$1_style$$112$$ = (0,window.parseFloat)($endSize_endX$$1_endY$$1_style$$112$$.$getStyle$("font-size"));
  $oldStyle_startAlign_startSize$$ != $endSize_endX$$1_endY$$1_style$$112$$ && ($bSizeChange_startY$$6_x$$inline_8164$$ = D.$JSCompiler_alias_TRUE$$, $tag$$2$$ = this, this.$setFontSize$($oldStyle_startAlign_startSize$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$38$$.$_animator$, "typeNumber", this, function() {
    return(0,window.parseFloat)($tag$$2$$.$getCSSStyle$().$getStyle$("font-size"))
  }, this.$setFontSize$, $endSize_endX$$1_endY$$1_style$$112$$));
  $dims$$inline_8166_startColor$$14_startX$$5$$ = $oldObj$$2$$.$getX$();
  $endSize_endX$$1_endY$$1_style$$112$$ = this.$getX$();
  $oldStyle_startAlign_startSize$$ = $oldObj$$2$$.$getHorizAlignment$();
  $endAlign_endColor$$17$$ = this.$getHorizAlignment$();
  if($endSize_endX$$1_endY$$1_style$$112$$ != $dims$$inline_8166_startColor$$14_startX$$5$$ || $bSizeChange_startY$$6_x$$inline_8164$$ && $endAlign_endColor$$17$$ != $oldStyle_startAlign_startSize$$) {
    $endAlign_endColor$$17$$ != $oldStyle_startAlign_startSize$$ && ($bSizeChange_startY$$6_x$$inline_8164$$ = $dims$$inline_8166_startColor$$14_startX$$5$$, $dims$$inline_8166_startColor$$14_startX$$5$$ = $oldObj$$2$$.$TextInstance$.$getDimensions$(D.$JSCompiler_alias_VOID$$), $dims$$inline_8166_startColor$$14_startX$$5$$ = "left" == $oldStyle_startAlign_startSize$$ ? $bSizeChange_startY$$6_x$$inline_8164$$ + $dims$$inline_8166_startColor$$14_startX$$5$$.$w$ : "right" == $oldStyle_startAlign_startSize$$ ? 
    $bSizeChange_startY$$6_x$$inline_8164$$ - $dims$$inline_8166_startColor$$14_startX$$5$$.$w$ : $bSizeChange_startY$$6_x$$inline_8164$$), this.$setX$($dims$$inline_8166_startColor$$14_startX$$5$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$38$$.$_animator$, "typeNumber", this, this.$getX$, this.$setX$, $endSize_endX$$1_endY$$1_style$$112$$)
  }
  $bSizeChange_startY$$6_x$$inline_8164$$ = $oldObj$$2$$.$getY$();
  $endSize_endX$$1_endY$$1_style$$112$$ = this.$getY$();
  $endSize_endX$$1_endY$$1_style$$112$$ != $bSizeChange_startY$$6_x$$inline_8164$$ && (this.$setY$($bSizeChange_startY$$6_x$$inline_8164$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($anim$$38$$.$_animator$, "typeNumber", this, this.$getY$, this.$setY$, $endSize_endX$$1_endY$$1_style$$112$$));
  $oldObj$$2$$.$setAlpha$(0);
  $handler$$58$$.add($anim$$38$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($handler$$59$$) {
  $handler$$59$$.add(new D.$DvtAnimFadeOut$$(this.$getCtx$(), this, D.$DvtTagCloudStyleUtils$$.$getAnimationDuration$(this.$_tagCloud$)), 0)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($handler$$60$$) {
  this.$setAlpha$(0);
  $handler$$60$$.add(new D.$DvtAnimFadeIn$$(this.$getCtx$(), this, D.$DvtTagCloudStyleUtils$$.$getAnimationDuration$(this.$_tagCloud$)), 2)
};
D.$JSCompiler_prototypeAlias$$.$setFontSize$ = function $$JSCompiler_prototypeAlias$$$$setFontSize$$($size$$48$$) {
  D.$DvtTagCloudItem$$.$superclass$.$setFontSize$.call(this, $size$$48$$);
  (0,D.$JSCompiler_StaticMethods__createFeedbackStyles$$)(this, this.$getCSSStyle$())
};
D.$JSCompiler_StaticMethods__createFeedbackStyles$$ = function $$JSCompiler_StaticMethods__createFeedbackStyles$$$($JSCompiler_StaticMethods__createFeedbackStyles$self$$, $style$$113$$) {
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$ = $style$$113$$.$clone$();
  var $color$$86_hoverSelectedColor$$ = $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$.$getStyle$("color");
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$.$setStyle$("background-color", D.$JSCompiler_alias_NULL$$);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverStyle$ = $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$.$clone$();
  var $hoverColor$$7$$ = (0,D.$DvtTagCloudItem$_lightenColor$$)($color$$86_hoverSelectedColor$$, 0.3);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverStyle$.$setStyle$("background-color", $hoverColor$$7$$);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverStyle$.$setStyle$("color", D.$DvtColorUtils$$.$getContrastingTextColor$($hoverColor$$7$$));
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_selectedStyle$ = $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$.$clone$();
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_selectedStyle$.$setStyle$("background-color", $color$$86_hoverSelectedColor$$);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_selectedStyle$.$setStyle$("color", D.$DvtColorUtils$$.$getContrastingTextColor$($color$$86_hoverSelectedColor$$));
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverSelectedStyle$ = $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_normalStyle$.$clone$();
  $color$$86_hoverSelectedColor$$ = (0,D.$DvtTagCloudItem$_lightenColor$$)($color$$86_hoverSelectedColor$$, 0.6);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverSelectedStyle$.$setStyle$("background-color", $color$$86_hoverSelectedColor$$);
  $JSCompiler_StaticMethods__createFeedbackStyles$self$$.$_hoverSelectedStyle$.$setStyle$("color", D.$DvtColorUtils$$.$getContrastingTextColor$($color$$86_hoverSelectedColor$$))
};
D.$DvtTagCloudItem$_lightenColor$$ = function $$DvtTagCloudItem$_lightenColor$$$($color$$87$$, $opacity$$4$$) {
  var $r$$92$$ = D.$DvtColorUtils$$.$getRed$($color$$87$$), $g$$28$$ = D.$DvtColorUtils$$.$getGreen$($color$$87$$), $b$$63$$ = D.$DvtColorUtils$$.$getBlue$($color$$87$$);
  return D.$DvtColorUtils$$.$makeRGB$(window.Math.floor(255 * (1 - $opacity$$4$$) + $opacity$$4$$ * $r$$92$$), window.Math.floor(255 * (1 - $opacity$$4$$) + $opacity$$4$$ * $g$$28$$), window.Math.floor(255 * (1 - $opacity$$4$$) + $opacity$$4$$ * $b$$63$$))
};
D.$DvtTagCloudObjPeer$$ = function $$DvtTagCloudObjPeer$$$($tagCloud$$2$$, $displayable$$83$$, $data$$95$$) {
  this.Init($tagCloud$$2$$, $displayable$$83$$, $data$$95$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudObjPeer$$, D.$DvtObj$$, "DvtTagCloudObjPeer");
D.$JSCompiler_prototypeAlias$$ = D.$DvtTagCloudObjPeer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($tagCloud$$3$$, $displayable$$84$$, $data$$96$$) {
  this.$_view$ = $tagCloud$$3$$;
  this.$_displayable$ = $displayable$$84$$;
  this.$_data$ = $data$$96$$;
  this.$_bSelectable$ = this.$_isSelected$ = D.$JSCompiler_alias_FALSE$$;
  $data$$96$$.url ? ($displayable$$84$$.$setAriaRole$("link"), this.$_linkCallback$ = D.$DvtToolkitUtils$$.$getLinkCallback$("_blank", $data$$96$$.url)) : $displayable$$84$$.$setAriaRole$("img");
  this.$_updateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.getId = function $$JSCompiler_prototypeAlias$$$getId$() {
  return this.$_data$.id
};
D.$JSCompiler_prototypeAlias$$.$getLabel$ = function $$JSCompiler_prototypeAlias$$$$getLabel$$() {
  return this.$_data$.label
};
D.$JSCompiler_prototypeAlias$$.getValue = function $$JSCompiler_prototypeAlias$$$getValue$() {
  return this.$_data$.value
};
D.$JSCompiler_prototypeAlias$$.$getShortDesc$ = function $$JSCompiler_prototypeAlias$$$$getShortDesc$$() {
  return this.$_data$.shortDesc
};
D.$JSCompiler_prototypeAlias$$.$getAction$ = function $$JSCompiler_prototypeAlias$$$$getAction$$() {
  return this.$_data$.action
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  var $tooltipFunc$$9$$ = this.$_view$.$getOptions$().tooltip;
  return $tooltipFunc$$9$$ ? (0,D.$JSCompiler_StaticMethods_getCustomTooltip$$)(this.$_view$.$getCtx$().$getTooltipManager$(), $tooltipFunc$$9$$, this.$getDataContext$()) : this.$getShortDesc$()
};
D.$JSCompiler_prototypeAlias$$.$getDataContext$ = function $$JSCompiler_prototypeAlias$$$$getDataContext$$() {
  return{id:this.getId(), label:this.$getLabel$(), color:this.$getDatatipColor$(), value:this.getValue()}
};
D.$JSCompiler_prototypeAlias$$.$getLinkCallback$ = (0,D.$JSCompiler_get$$)("$_linkCallback$");
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  this.$_dataColor$ || (this.$_dataColor$ = (new D.$DvtCSSStyle$$(this.$_data$.style)).$getStyle$("color"));
  return this.$_dataColor$
};
D.$JSCompiler_prototypeAlias$$.$setSelectable$ = (0,D.$JSCompiler_set$$)("$_bSelectable$");
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = (0,D.$JSCompiler_get$$)("$_bSelectable$");
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_isSelected$");
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($bSelected$$9$$) {
  this.$_isSelected$ = $bSelected$$9$$;
  this.$_displayable$.$setSelected$($bSelected$$9$$);
  this.$_updateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_displayable$.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$_displayable$.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($JSCompiler_temp$$229_JSCompiler_temp$$230_event$$755_nextIdx$$inline_8171$$) {
  var $keyboardHandler$$8_navigableItems$$inline_8170$$ = this.$_view$.$EventManager$.$KeyboardHandler$;
  $JSCompiler_temp$$229_JSCompiler_temp$$230_event$$755_nextIdx$$inline_8171$$.type == D.$DvtMouseEvent$CLICK$$ || $keyboardHandler$$8_navigableItems$$inline_8170$$.$isMultiSelectEvent$($JSCompiler_temp$$229_JSCompiler_temp$$230_event$$755_nextIdx$$inline_8171$$) ? $JSCompiler_temp$$229_JSCompiler_temp$$230_event$$755_nextIdx$$inline_8171$$ = this : $keyboardHandler$$8_navigableItems$$inline_8170$$.$isNavigationEvent$($JSCompiler_temp$$229_JSCompiler_temp$$230_event$$755_nextIdx$$inline_8171$$) ? 
  ($keyboardHandler$$8_navigableItems$$inline_8170$$ = this.$_view$.$getObjects$(), $JSCompiler_temp$$229_JSCompiler_temp$$230_event$$755_nextIdx$$inline_8171$$ = $keyboardHandler$$8_navigableItems$$inline_8170$$.indexOf(this) + (39 == $JSCompiler_temp$$229_JSCompiler_temp$$230_event$$755_nextIdx$$inline_8171$$.keyCode || 40 == $JSCompiler_temp$$229_JSCompiler_temp$$230_event$$755_nextIdx$$inline_8171$$.keyCode ? 1 : -1), $JSCompiler_temp$$229_JSCompiler_temp$$230_event$$755_nextIdx$$inline_8171$$ = 
  $JSCompiler_temp$$229_JSCompiler_temp$$230_event$$755_nextIdx$$inline_8171$$ < $keyboardHandler$$8_navigableItems$$inline_8170$$.length && 0 <= $JSCompiler_temp$$229_JSCompiler_temp$$230_event$$755_nextIdx$$inline_8171$$ ? $keyboardHandler$$8_navigableItems$$inline_8170$$[$JSCompiler_temp$$229_JSCompiler_temp$$230_event$$755_nextIdx$$inline_8171$$] : D.$JSCompiler_alias_NULL$$) : $JSCompiler_temp$$229_JSCompiler_temp$$230_event$$755_nextIdx$$inline_8171$$ = D.$JSCompiler_alias_NULL$$;
  return $JSCompiler_temp$$229_JSCompiler_temp$$230_event$$755_nextIdx$$inline_8171$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$61$$) {
  return this.$_displayable$.$getDimensions$($targetCoordinateSpace$$61$$)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$_displayable$.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ && (this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$, this.$hideHoverEffect$())
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = function $$JSCompiler_prototypeAlias$$$$getDisplayables$$() {
  return[this.$_displayable$]
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$17$$ = [];
  this.$isSelectable$() && $states$$17$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getShortDesc$(), $states$$17$$)
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return this.$_data$.categories
};
D.$JSCompiler_prototypeAlias$$.$_updateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$_updateAriaLabel$$() {
  (0,D.$DvtAgent$deferAriaCreation$$)() || this.$_displayable$.$setAriaProperty$("label", this.$getAriaLabel$())
};
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$() {
  if(!this.$_showPopupBehaviors$ && (this.$_showPopupBehaviors$ = [], this.$_data$.showPopupBehaviors)) {
    for(var $spbs$$4$$ = this.$_data$.showPopupBehaviors, $si$$ = 0;$si$$ < $spbs$$4$$.length;$si$$++) {
      this.$_showPopupBehaviors$.push(new D.$DvtShowPopupBehavior$$($spbs$$4$$[$si$$].popupId, $spbs$$4$$[$si$$].triggerType, $spbs$$4$$[$si$$].alignId, $spbs$$4$$[$si$$].align))
    }
  }
  return this.$_showPopupBehaviors$
};
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$18$$) {
  return this.$_view$.$SelectionHandler$ ? $clientIds$$18$$[0] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  var $JSCompiler_StaticMethods_getDragRowKeys$self$$inline_8173_selection$$inline_8176$$ = this.$_view$;
  this.$isSelected$() || ($JSCompiler_StaticMethods_getDragRowKeys$self$$inline_8173_selection$$inline_8176$$.$SelectionHandler$.$processClick$(this, D.$JSCompiler_alias_FALSE$$), $JSCompiler_StaticMethods_getDragRowKeys$self$$inline_8173_selection$$inline_8176$$.$EventManager$.$fireSelectionEvent$());
  for(var $rowKeys$$inline_8175$$ = [], $JSCompiler_StaticMethods_getDragRowKeys$self$$inline_8173_selection$$inline_8176$$ = $JSCompiler_StaticMethods_getDragRowKeys$self$$inline_8173_selection$$inline_8176$$.$SelectionHandler$.getSelection(), $i$$inline_8177$$ = 0;$i$$inline_8177$$ < $JSCompiler_StaticMethods_getDragRowKeys$self$$inline_8173_selection$$inline_8176$$.length;$i$$inline_8177$$++) {
    var $item$$inline_8178$$ = $JSCompiler_StaticMethods_getDragRowKeys$self$$inline_8173_selection$$inline_8176$$[$i$$inline_8177$$];
    $item$$inline_8178$$ instanceof D.$DvtTagCloudObjPeer$$ && $rowKeys$$inline_8175$$.push($item$$inline_8178$$.getId())
  }
  return $rowKeys$$inline_8175$$
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_view$.$getDragFeedback$()
};
D.$DvtTagCloudDefaults$$ = function $$DvtTagCloudDefaults$$$() {
  this.Init({alta:D.$DvtTagCloudDefaults$VERSION_1$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtTagCloudDefaults");
D.$DvtTagCloudDefaults$VERSION_1$$ = {animationOnDisplay:"none", animationOnDataChange:"none", emptyText:D.$JSCompiler_alias_NULL$$, hiddenCategories:[], hideAndShowBehavior:"none", highlightedCategories:[], highlightMatch:"all", hoverBehavior:"none", layout:"rectangular", selectionMode:"none", _statusMessageStyle:new D.$DvtCSSStyle$$('font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; color: #333333;'), styleDefaults:{animationDuration:500, hoverBehaviorDelay:200, style:new D.$DvtCSSStyle$$('font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; color: #333333;')}, 
touchResponse:"auto"};
D.$DvtTagCloudRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudRenderer$$, D.$DvtObj$$, "DvtTagCloudRenderer");
D.$DvtTagCloudRenderer$$.$render$ = function $$DvtTagCloudRenderer$$$$render$$($tagCloud$$4$$, $container$$183$$, $availSpace$$120$$) {
  D.$DvtTagCloudRenderer$$.$_renderBackground$($tagCloud$$4$$, $container$$183$$, $availSpace$$120$$);
  D.$DvtTagCloudRenderer$$.$_renderLegend$($tagCloud$$4$$, $container$$183$$, $availSpace$$120$$);
  D.$DvtTagCloudRenderer$$.$_adjustAvailSpace$($availSpace$$120$$);
  var $items$$37_options$$260$$ = $tagCloud$$4$$.$getOptions$();
  $items$$37_options$$260$$.items && 0 < $items$$37_options$$260$$.items.length ? ($items$$37_options$$260$$ = D.$DvtTagCloudRenderer$$.$_renderItems$($tagCloud$$4$$, $container$$183$$, $availSpace$$120$$), 0 < $items$$37_options$$260$$.length ? ($tagCloud$$4$$.$registerItems$($items$$37_options$$260$$), (0,D.$JSCompiler_StaticMethods_setFocusObj$$)($tagCloud$$4$$.$EventManager$, $tagCloud$$4$$.$getObjects$()[0])) : D.$DvtTagCloudRenderer$$.$_renderEmptyText$($tagCloud$$4$$, $container$$183$$, $availSpace$$120$$)) : 
  D.$DvtTagCloudRenderer$$.$_renderEmptyText$($tagCloud$$4$$, $container$$183$$, $availSpace$$120$$)
};
D.$DvtTagCloudRenderer$$.$_renderEmptyText$ = function $$DvtTagCloudRenderer$$$$_renderEmptyText$$($tagCloud$$5$$, $container$$184$$, $availSpace$$121$$) {
  var $options$$261$$ = $tagCloud$$5$$.$getOptions$(), $emptyTextStr$$3$$ = $options$$261$$.emptyText;
  $emptyTextStr$$3$$ || ($emptyTextStr$$3$$ = (0,D.$DvtBundle$getTranslation$$)($options$$261$$, "labelNoData", "DvtUtilBundle", "NO_DATA", D.$JSCompiler_alias_NULL$$));
  D.$DvtTextUtils$$.$renderEmptyText$($container$$184$$, $emptyTextStr$$3$$, new D.$DvtRectangle$$($availSpace$$121$$.x, $availSpace$$121$$.y, $availSpace$$121$$.$w$, $availSpace$$121$$.$h$), $tagCloud$$5$$.$EventManager$, $options$$261$$._statusMessageStyle)
};
D.$DvtTagCloudRenderer$$.$_renderBackground$ = function $$DvtTagCloudRenderer$$$$_renderBackground$$($rect$$50_tagCloud$$6$$, $container$$185$$, $availSpace$$122$$) {
  $rect$$50_tagCloud$$6$$ = new D.$DvtRect$$($rect$$50_tagCloud$$6$$.$getCtx$(), $availSpace$$122$$.x, $availSpace$$122$$.y, $availSpace$$122$$.$w$, $availSpace$$122$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($rect$$50_tagCloud$$6$$);
  $container$$185$$.$addChild$($rect$$50_tagCloud$$6$$)
};
D.$DvtTagCloudRenderer$$.$_renderItems$ = function $$DvtTagCloudRenderer$$$$_renderItems$$($tagCloud$$7$$, $container$$186$$, $availSpace$$123$$) {
  for(var $options$$262$$ = $tagCloud$$7$$.$getOptions$(), $items$$38$$ = [], $dataItems$$2$$ = $options$$262$$.items, $fontSizeFunction_minValue$$17$$ = window.Number.MAX_VALUE, $categoryMap$$2_maxValue$$18$$ = -window.Number.MAX_VALUE, $i$$791$$ = 0;$i$$791$$ < $dataItems$$2$$.length;$i$$791$$++) {
    $fontSizeFunction_minValue$$17$$ = window.Math.min($fontSizeFunction_minValue$$17$$, $dataItems$$2$$[$i$$791$$].value), $categoryMap$$2_maxValue$$18$$ = window.Math.max($categoryMap$$2_maxValue$$18$$, $dataItems$$2$$[$i$$791$$].value)
  }
  $fontSizeFunction_minValue$$17$$ = D.$DvtTagCloudLayoutUtils$$.$getFontSizeFunction$($fontSizeFunction_minValue$$17$$, $categoryMap$$2_maxValue$$18$$);
  $categoryMap$$2_maxValue$$18$$ = D.$DvtArrayUtils$$.$createBooleanMap$($options$$262$$.hiddenCategories);
  for($i$$791$$ = 0;$i$$791$$ < $dataItems$$2$$.length;$i$$791$$++) {
    var $data$$97$$ = $dataItems$$2$$[$i$$791$$];
    $data$$97$$.categories || ($data$$97$$.categories = [$data$$97$$.label]);
    if(!$categoryMap$$2_maxValue$$18$$ || !D.$DvtArrayUtils$$.$hasAnyMapItem$($categoryMap$$2_maxValue$$18$$, $data$$97$$.categories)) {
      var $item$$55_style$$114$$ = $options$$262$$.styleDefaults.style.$clone$();
      (0,D.$JSCompiler_StaticMethods_parseInlineStyle$$)($item$$55_style$$114$$, $data$$97$$.style);
      $item$$55_style$$114$$.$setStyle$("font-size", $fontSizeFunction_minValue$$17$$.call(D.$JSCompiler_alias_NULL$$, $data$$97$$.value).toString());
      var $item$$55_style$$114$$ = new D.$DvtTagCloudItem$$($tagCloud$$7$$, $tagCloud$$7$$.$getCtx$(), $data$$97$$.label, 0, 0, $item$$55_style$$114$$, $data$$97$$.id), $peer$$32$$ = new D.$DvtTagCloudObjPeer$$($tagCloud$$7$$, $item$$55_style$$114$$, $data$$97$$);
      $tagCloud$$7$$.$EventManager$.$associate$($item$$55_style$$114$$, $peer$$32$$);
      $tagCloud$$7$$.$registerObject$($peer$$32$$, $i$$791$$);
      "none" !== $options$$262$$.selectionMode && $peer$$32$$.$setSelectable$(D.$JSCompiler_alias_TRUE$$);
      ($peer$$32$$.$isSelectable$() || $data$$97$$.url || $peer$$32$$.$getAction$()) && $item$$55_style$$114$$.setCursor("pointer");
      $items$$38$$.push($item$$55_style$$114$$);
      $container$$186$$.$addChild$($item$$55_style$$114$$)
    }
  }
  0 < $items$$38$$.length && ("cloud" === $options$$262$$.layout ? D.$DvtTagCloudLayoutUtils$$.$cloudLayout$($availSpace$$123$$, $items$$38$$) : D.$DvtTagCloudLayoutUtils$$.$rectangleLayout$($availSpace$$123$$, $items$$38$$, (0,D.$DvtAgent$isRightToLeft$$)($tagCloud$$7$$.$getCtx$())));
  return $items$$38$$
};
D.$DvtTagCloudRenderer$$.$_renderLegend$ = function $$DvtTagCloudRenderer$$$$_renderLegend$$($tagCloud$$8$$, $container$$187$$, $availSpace$$124$$) {
  var $legend$$30_options$$263$$ = $tagCloud$$8$$.$getOptions$(), $legendData$$6_legendOptions$$9$$ = $legend$$30_options$$263$$.legend;
  if($legendData$$6_legendOptions$$9$$ && $legendData$$6_legendOptions$$9$$.sections) {
    $legendData$$6_legendOptions$$9$$ = D.$DvtJSONUtils$$.$clone$($legendData$$6_legendOptions$$9$$);
    $legendData$$6_legendOptions$$9$$.orientation = "horizontal";
    $legendData$$6_legendOptions$$9$$.halign = "center";
    $legendData$$6_legendOptions$$9$$.hoverBehavior = $legend$$30_options$$263$$.hoverBehavior;
    $legendData$$6_legendOptions$$9$$.hideAndShowBehavior = $legend$$30_options$$263$$.hideAndShowBehavior;
    $legendData$$6_legendOptions$$9$$.hiddenCategories = $legend$$30_options$$263$$.hiddenCategories;
    $legend$$30_options$$263$$ = (0,D.$DvtLegend$newInstance$$)($tagCloud$$8$$.$getCtx$(), $tagCloud$$8$$.$processEvent$, $tagCloud$$8$$);
    $container$$187$$.$addChild$($legend$$30_options$$263$$);
    var $preferredSize$$7$$ = $legend$$30_options$$263$$.$getPreferredSize$($legendData$$6_legendOptions$$9$$, $availSpace$$124$$.$w$, $availSpace$$124$$.$h$ / 3);
    $legend$$30_options$$263$$.$render$($legendData$$6_legendOptions$$9$$, $preferredSize$$7$$.$w$, $preferredSize$$7$$.$h$);
    (0,D.$DvtLayoutUtils$position$$)($availSpace$$124$$, "bottom", $legend$$30_options$$263$$, $preferredSize$$7$$.$w$, $preferredSize$$7$$.$h$, 0);
    $tagCloud$$8$$.$legend$ && ($tagCloud$$8$$.$legend$.$destroy$(), $container$$187$$.removeChild($tagCloud$$8$$.$legend$));
    $tagCloud$$8$$.$legend$ = $legend$$30_options$$263$$
  }
};
D.$DvtTagCloudRenderer$$.$_adjustAvailSpace$ = function $$DvtTagCloudRenderer$$$$_adjustAvailSpace$$($availSpace$$125$$) {
  $availSpace$$125$$.x = window.Math.round($availSpace$$125$$.x);
  $availSpace$$125$$.y = window.Math.round($availSpace$$125$$.y);
  $availSpace$$125$$.$w$ = window.Math.round($availSpace$$125$$.$w$);
  $availSpace$$125$$.$h$ = window.Math.round($availSpace$$125$$.$h$)
};
D.$DvtTagCloudLayoutUtils$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudLayoutUtils$$, D.$DvtObj$$, "DvtTagCloudLayoutUtils");
D.$DvtTagCloudLayoutUtils$$.$getFontSizeFunction$ = function $$DvtTagCloudLayoutUtils$$$$getFontSizeFunction$$($minValue$$16$$, $maxValue$$17$$) {
  return function($value$$188$$) {
    return 12 + window.Math.ceil(12 * (2 * ($value$$188$$ - $minValue$$16$$) / ($maxValue$$17$$ - $minValue$$16$$)))
  }
};
D.$DvtTagCloudLayoutUtils$$.$cloudLayout$ = function $$DvtTagCloudLayoutUtils$$$$cloudLayout$$($availSpace$$118$$, $items$$35$$) {
  var $positions$$2_scale$$62$$ = [], $cx$$61_xrStep$$ = 10 / 180, $fontSize$$14_yrStep$$ = 10 / 180;
  $availSpace$$118$$.$w$ > $availSpace$$118$$.$h$ ? $cx$$61_xrStep$$ *= $availSpace$$118$$.$w$ / $availSpace$$118$$.$h$ : $fontSize$$14_yrStep$$ *= $availSpace$$118$$.$h$ / $availSpace$$118$$.$w$;
  for(var $thetaStep$$1$$ = 2 * window.Math.PI / 180, $bounds$$153_cy$$62$$ = D.$JSCompiler_alias_NULL$$, $maxFontSize$$ = 0, $cosCache$$ = [], $sinCache$$ = [], $i$$788$$ = 0;$i$$788$$ < $items$$35$$.length;$i$$788$$++) {
    for(var $placed$$ = D.$JSCompiler_alias_FALSE$$, $step$$4$$ = 0, $stepIncrement$$ = 4, $tag$$4$$ = $items$$35$$[$i$$788$$], $dims$$69$$ = $tag$$4$$.$getDimensions$(), $maxFontSize$$ = window.Math.max($maxFontSize$$, (0,window.parseFloat)($tag$$4$$.$getCSSStyle$().$getStyle$("font-size"))), $lastCollisionIndex$$ = -1;!$placed$$;) {
      var $j$$103_lookup$$ = $step$$4$$ % 180;
      $cosCache$$[$j$$103_lookup$$] === D.$JSCompiler_alias_VOID$$ && ($cosCache$$[$j$$103_lookup$$] = window.Math.cos($step$$4$$ * $thetaStep$$1$$));
      $sinCache$$[$j$$103_lookup$$] === D.$JSCompiler_alias_VOID$$ && ($sinCache$$[$j$$103_lookup$$] = window.Math.sin($step$$4$$ * $thetaStep$$1$$));
      var $x$$274$$ = $cx$$61_xrStep$$ * $step$$4$$ * $cosCache$$[$j$$103_lookup$$], $y$$246$$ = $fontSize$$14_yrStep$$ * $step$$4$$ * $sinCache$$[$j$$103_lookup$$], $rect$$49$$ = new D.$DvtRectangle$$($x$$274$$, $y$$246$$, $dims$$69$$.$w$, $dims$$69$$.$h$), $placed$$ = D.$JSCompiler_alias_TRUE$$;
      -1 != $lastCollisionIndex$$ && $positions$$2_scale$$62$$[$lastCollisionIndex$$].$intersects$($rect$$49$$) && ($placed$$ = D.$JSCompiler_alias_FALSE$$);
      if($placed$$) {
        for($j$$103_lookup$$ = 0;$j$$103_lookup$$ < $i$$788$$;$j$$103_lookup$$++) {
          if($positions$$2_scale$$62$$[$j$$103_lookup$$].$intersects$($rect$$49$$)) {
            $lastCollisionIndex$$ = $j$$103_lookup$$;
            $placed$$ = D.$JSCompiler_alias_FALSE$$;
            break
          }
        }
      }
      $placed$$ && ($bounds$$153_cy$$62$$ = $bounds$$153_cy$$62$$ ? (0,D.$JSCompiler_StaticMethods_getUnion$$)($bounds$$153_cy$$62$$, $rect$$49$$) : $rect$$49$$, $lastCollisionIndex$$ = -1, $positions$$2_scale$$62$$[$i$$788$$] = $rect$$49$$, $tag$$4$$.$setX$($x$$274$$), $tag$$4$$.$setY$(-$dims$$69$$.y + $y$$246$$));
      3600 === $step$$4$$ ? $stepIncrement$$ = 3 : 5400 === $step$$4$$ ? $stepIncrement$$ = 2 : 10800 === $step$$4$$ && ($stepIncrement$$ = 1);
      $step$$4$$ += $stepIncrement$$
    }
  }
  $positions$$2_scale$$62$$ = window.Math.max($bounds$$153_cy$$62$$.$w$ / $availSpace$$118$$.$w$, $bounds$$153_cy$$62$$.$h$ / $availSpace$$118$$.$h$);
  $cx$$61_xrStep$$ = $bounds$$153_cy$$62$$.x + $bounds$$153_cy$$62$$.$w$ / 2;
  $bounds$$153_cy$$62$$ = $bounds$$153_cy$$62$$.y + $bounds$$153_cy$$62$$.$h$ / 2;
  for($j$$103_lookup$$ = 0;$j$$103_lookup$$ < $items$$35$$.length;$j$$103_lookup$$++) {
    $tag$$4$$ = $items$$35$$[$j$$103_lookup$$], $tag$$4$$.$setX$($availSpace$$118$$.x + $tag$$4$$.$getX$() / $positions$$2_scale$$62$$ + ($availSpace$$118$$.$w$ / 2 - $cx$$61_xrStep$$ / $positions$$2_scale$$62$$)), $tag$$4$$.$setY$($availSpace$$118$$.y + $tag$$4$$.$getY$() / $positions$$2_scale$$62$$ + ($availSpace$$118$$.$h$ / 2 - $bounds$$153_cy$$62$$ / $positions$$2_scale$$62$$)), $fontSize$$14_yrStep$$ = (0,window.parseFloat)($tag$$4$$.$getCSSStyle$().$getStyle$("font-size")), $tag$$4$$.$setFontSize$($fontSize$$14_yrStep$$ / 
    $positions$$2_scale$$62$$)
  }
};
D.$DvtTagCloudLayoutUtils$$.$rectangleLayout$ = function $$DvtTagCloudLayoutUtils$$$$rectangleLayout$$($availSpace$$119$$, $items$$36$$, $isBidi$$) {
  for(var $arDims$$1$$ = [], $maxWidth$$30_scale$$63$$ = 0, $maxHeight$$18$$ = 0, $arLines_maxFontSize$$1$$ = 0, $i$$789_minScale$$9$$ = 0;$i$$789_minScale$$9$$ < $items$$36$$.length;$i$$789_minScale$$9$$++) {
    var $lineWidth$$9_maxScale_tag$$5$$ = $items$$36$$[$i$$789_minScale$$9$$], $dims$$70_lineStart$$ = $lineWidth$$9_maxScale_tag$$5$$.$getDimensions$(), $maxWidth$$30_scale$$63$$ = window.Math.max($maxWidth$$30_scale$$63$$, $dims$$70_lineStart$$.$w$), $maxHeight$$18$$ = window.Math.max($maxHeight$$18$$, $dims$$70_lineStart$$.$h$), $arLines_maxFontSize$$1$$ = window.Math.max($arLines_maxFontSize$$1$$, (0,window.parseFloat)($lineWidth$$9_maxScale_tag$$5$$.$getCSSStyle$().$getStyle$("font-size")));
    $arDims$$1$$.push(new D.$DvtDimension$$($dims$$70_lineStart$$.$w$, $dims$$70_lineStart$$.$h$))
  }
  $i$$789_minScale$$9$$ = 0;
  for($lineWidth$$9_maxScale_tag$$5$$ = ($availSpace$$119$$.$w$ - 10) / $maxWidth$$30_scale$$63$$;0.001 < $lineWidth$$9_maxScale_tag$$5$$ - $i$$789_minScale$$9$$;) {
    $maxWidth$$30_scale$$63$$ = ($i$$789_minScale$$9$$ + $lineWidth$$9_maxScale_tag$$5$$) / 2, $arLines_maxFontSize$$1$$ = D.$DvtTagCloudLayoutUtils$$.$_calculateLineBreaks$($arDims$$1$$, ($availSpace$$119$$.$w$ - 10) / $maxWidth$$30_scale$$63$$), $arLines_maxFontSize$$1$$.length * ($maxWidth$$30_scale$$63$$ * $maxHeight$$18$$ + 2) - 2 > $availSpace$$119$$.$h$ - 10 ? $lineWidth$$9_maxScale_tag$$5$$ = $maxWidth$$30_scale$$63$$ : $i$$789_minScale$$9$$ = $maxWidth$$30_scale$$63$$
  }
  $maxWidth$$30_scale$$63$$ = $i$$789_minScale$$9$$;
  $arLines_maxFontSize$$1$$ = D.$DvtTagCloudLayoutUtils$$.$_calculateLineBreaks$($arDims$$1$$, ($availSpace$$119$$.$w$ - 10) / $maxWidth$$30_scale$$63$$);
  $arLines_maxFontSize$$1$$.push($items$$36$$.length);
  for($i$$789_minScale$$9$$ = 0;$i$$789_minScale$$9$$ < $arLines_maxFontSize$$1$$.length - 1;$i$$789_minScale$$9$$++) {
    var $dims$$70_lineStart$$ = $arLines_maxFontSize$$1$$[$i$$789_minScale$$9$$], $lineEnd$$ = $arLines_maxFontSize$$1$$[$i$$789_minScale$$9$$ + 1], $hPadding$$1$$ = 0, $bottomY$$2_maxLineHeight$$ = 0, $justified$$ = D.$JSCompiler_alias_TRUE$$;
    if(1 < $lineEnd$$ - $dims$$70_lineStart$$) {
      for(var $lineWidth$$9_maxScale_tag$$5$$ = 0, $flowPadding_j$$104$$ = $dims$$70_lineStart$$;$flowPadding_j$$104$$ < $lineEnd$$;$flowPadding_j$$104$$++) {
        $lineWidth$$9_maxScale_tag$$5$$ += $arDims$$1$$[$flowPadding_j$$104$$].$w$ * $maxWidth$$30_scale$$63$$, $bottomY$$2_maxLineHeight$$ = window.Math.max($bottomY$$2_maxLineHeight$$, $arDims$$1$$[$flowPadding_j$$104$$].$h$ * $maxWidth$$30_scale$$63$$)
      }
      $hPadding$$1$$ = ($availSpace$$119$$.$w$ - 10 - $lineWidth$$9_maxScale_tag$$5$$) / ($lineEnd$$ - $dims$$70_lineStart$$ - 1);
      $i$$789_minScale$$9$$ == $arLines_maxFontSize$$1$$.length - 2 && ($flowPadding_j$$104$$ = 0.5 * $bottomY$$2_maxLineHeight$$, $flowPadding_j$$104$$ < $hPadding$$1$$ && $lineWidth$$9_maxScale_tag$$5$$ + ($lineEnd$$ - $dims$$70_lineStart$$) * $flowPadding_j$$104$$ < 0.9 * ($availSpace$$119$$.$w$ - 10) && ($hPadding$$1$$ = $flowPadding_j$$104$$, $justified$$ = D.$JSCompiler_alias_FALSE$$))
    }
    for(var $bottomY$$2_maxLineHeight$$ = 5 + ($i$$789_minScale$$9$$ + 1) * ($maxHeight$$18$$ * $maxWidth$$30_scale$$63$$ + 2) - 2, $curX$$2$$ = $isBidi$$ ? $availSpace$$119$$.$w$ - 5 : 5, $flowPadding_j$$104$$ = $dims$$70_lineStart$$;$flowPadding_j$$104$$ < $lineEnd$$;$flowPadding_j$$104$$++) {
      var $lineWidth$$9_maxScale_tag$$5$$ = $items$$36$$[$flowPadding_j$$104$$], $fontSize$$15$$ = (0,window.parseFloat)($lineWidth$$9_maxScale_tag$$5$$.$getCSSStyle$().$getStyle$("font-size"));
      $lineWidth$$9_maxScale_tag$$5$$.$setFontSize$($fontSize$$15$$ * $maxWidth$$30_scale$$63$$);
      $lineWidth$$9_maxScale_tag$$5$$.$setY$($availSpace$$119$$.y + $bottomY$$2_maxLineHeight$$);
      $justified$$ && $flowPadding_j$$104$$ == $lineEnd$$ - 1 && $flowPadding_j$$104$$ != $dims$$70_lineStart$$ ? $isBidi$$ ? ($lineWidth$$9_maxScale_tag$$5$$.$alignLeft$(), $lineWidth$$9_maxScale_tag$$5$$.$setX$($availSpace$$119$$.x + 5)) : ($lineWidth$$9_maxScale_tag$$5$$.$alignRight$(), $lineWidth$$9_maxScale_tag$$5$$.$setX$($availSpace$$119$$.x + $availSpace$$119$$.$w$ - 5)) : ($lineWidth$$9_maxScale_tag$$5$$.$setX$($availSpace$$119$$.x + $curX$$2$$), $isBidi$$ ? ($lineWidth$$9_maxScale_tag$$5$$.$alignRight$(), 
      $curX$$2$$ -= $arDims$$1$$[$flowPadding_j$$104$$].$w$ * $maxWidth$$30_scale$$63$$ + $hPadding$$1$$) : ($lineWidth$$9_maxScale_tag$$5$$.$alignLeft$(), $curX$$2$$ += $arDims$$1$$[$flowPadding_j$$104$$].$w$ * $maxWidth$$30_scale$$63$$ + $hPadding$$1$$))
    }
  }
};
D.$DvtTagCloudLayoutUtils$$.$_calculateLineBreaks$ = function $$DvtTagCloudLayoutUtils$$$$_calculateLineBreaks$$($arDims$$2$$, $width$$156$$) {
  var $lines$$1$$ = [0], $curWidth$$ = $arDims$$2$$[0].$w$ + 2;
  if(1 < $arDims$$2$$.length) {
    for(var $i$$790$$ = 1;$i$$790$$ < $arDims$$2$$.length;$i$$790$$++) {
      $curWidth$$ + $arDims$$2$$[$i$$790$$].$w$ > $width$$156$$ && ($lines$$1$$.push($i$$790$$), $curWidth$$ = 0), $curWidth$$ += $arDims$$2$$[$i$$790$$].$w$ + 2
    }
  }
  return $lines$$1$$
};
D.$DvtTagCloudStyleUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudStyleUtils$$, D.$DvtObj$$, "DvtTagCloudStyleUtils");
D.$DvtTagCloudStyleUtils$$.$getAnimationDuration$ = function $$DvtTagCloudStyleUtils$$$$getAnimationDuration$$($tagCloud$$9$$) {
  return $tagCloud$$9$$.$getOptions$().styleDefaults.animationDuration / 1E3
};
D.$DvtTagCloudEventManager$$ = function $$DvtTagCloudEventManager$$$($view$$62$$, $context$$595$$, $callback$$150$$, $callbackObj$$104$$) {
  this.Init($context$$595$$, $callback$$150$$, $callbackObj$$104$$);
  this.$_view$ = $view$$62$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudEventManager$$, D.$DvtEventManager$$, "DvtTagCloudEventManager");
D.$DvtTagCloudEventManager$$.prototype.$OnClickInternal$ = function $$DvtTagCloudEventManager$$$$$OnClickInternal$$($event$$747_obj$$343$$) {
  $event$$747_obj$$343$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$747_obj$$343$$.target);
  (0,D.$JSCompiler_StaticMethods__handleLinkCallback$$)($event$$747_obj$$343$$);
  this.$_processActionEvent$($event$$747_obj$$343$$)
};
D.$DvtTagCloudEventManager$$.prototype.$HandleTouchHoverEndInternal$ = function $$DvtTagCloudEventManager$$$$$HandleTouchHoverEndInternal$$($event$$748_obj$$344$$) {
  $event$$748_obj$$344$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$748_obj$$344$$.target);
  this.$_processActionEvent$($event$$748_obj$$344$$)
};
D.$DvtTagCloudEventManager$$.prototype.$HandleTouchClickInternal$ = function $$DvtTagCloudEventManager$$$$$HandleTouchClickInternal$$($event$$749_obj$$345$$) {
  $event$$749_obj$$345$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$749_obj$$345$$.target);
  (0,D.$JSCompiler_StaticMethods__handleLinkCallback$$)($event$$749_obj$$345$$);
  this.$_processActionEvent$($event$$749_obj$$345$$)
};
D.$JSCompiler_StaticMethods__handleLinkCallback$$ = function $$JSCompiler_StaticMethods__handleLinkCallback$$$($callback$$151_obj$$346$$) {
  $callback$$151_obj$$346$$ instanceof D.$DvtTagCloudObjPeer$$ && ($callback$$151_obj$$346$$ = $callback$$151_obj$$346$$.$getLinkCallback$()) && $callback$$151_obj$$346$$.call()
};
D.$DvtTagCloudEventManager$$.prototype.$ProcessKeyboardEvent$ = function $$DvtTagCloudEventManager$$$$$ProcessKeyboardEvent$$($event$$750$$) {
  var $eventConsumed$$6$$ = D.$JSCompiler_alias_TRUE$$, $focusObj$$1$$ = this.$getFocus$();
  13 == $event$$750$$.keyCode ? (0,D.$JSCompiler_StaticMethods__handleLinkCallback$$)($focusObj$$1$$) : $eventConsumed$$6$$ = D.$DvtTagCloudEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$750$$);
  return $eventConsumed$$6$$
};
D.$DvtTagCloudEventManager$$.prototype.$ProcessRolloverEvent$ = function $$DvtTagCloudEventManager$$$$$ProcessRolloverEvent$$($event$$751_options$$259$$, $categories$$27_hoverBehaviorDelay$$5_obj$$347$$, $bOver$$12_rolloverEvent$$6$$) {
  $event$$751_options$$259$$ = this.$_view$.$getOptions$();
  "dim" == $event$$751_options$$259$$.hoverBehavior && ($categories$$27_hoverBehaviorDelay$$5_obj$$347$$ = $categories$$27_hoverBehaviorDelay$$5_obj$$347$$.$getCategories$ ? $categories$$27_hoverBehaviorDelay$$5_obj$$347$$.$getCategories$() : [], $event$$751_options$$259$$.highlightedCategories = $bOver$$12_rolloverEvent$$6$$ ? $categories$$27_hoverBehaviorDelay$$5_obj$$347$$.slice() : D.$JSCompiler_alias_NULL$$, $bOver$$12_rolloverEvent$$6$$ = new D.$DvtCategoryRolloverEvent$$($bOver$$12_rolloverEvent$$6$$ ? 
  "categoryRollOver" : "categoryRollOut", $event$$751_options$$259$$.highlightedCategories), $categories$$27_hoverBehaviorDelay$$5_obj$$347$$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)($event$$751_options$$259$$.styleDefaults.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($bOver$$12_rolloverEvent$$6$$, this.$_view$.$getObjects$(), $categories$$27_hoverBehaviorDelay$$5_obj$$347$$, "any" == $event$$751_options$$259$$.highlightMatch))
};
D.$DvtTagCloudEventManager$$.prototype.$_processActionEvent$ = function $$DvtTagCloudEventManager$$$$$_processActionEvent$$($obj$$348$$) {
  $obj$$348$$ && ($obj$$348$$.$getAction$ && $obj$$348$$.$getAction$()) && this.$FireEvent$(new D.$DvtActionEvent$$("action", $obj$$348$$.$getAction$(), $obj$$348$$.getId()))
};
D.$DvtTagCloudEventManager$$.prototype.$GetTouchResponse$ = function $$DvtTagCloudEventManager$$$$$GetTouchResponse$$() {
  return this.$_view$.$getOptions$().touchResponse
};
D.$DvtTagCloudKeyboardHandler$$ = function $$DvtTagCloudKeyboardHandler$$$($manager$$28$$) {
  this.Init($manager$$28$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtTagCloudKeyboardHandler");
D.$DvtTagCloudKeyboardHandler$$.prototype.Init = function $$DvtTagCloudKeyboardHandler$$$$Init$($manager$$29$$) {
  D.$DvtTagCloudKeyboardHandler$$.$superclass$.Init.call(this, $manager$$29$$)
};
D.$DvtTagCloudKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtTagCloudKeyboardHandler$$$$$isSelectionEvent$$($event$$752$$) {
  return this.$isNavigationEvent$($event$$752$$) && !$event$$752$$.ctrlKey
};
D.$DvtTagCloudKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtTagCloudKeyboardHandler$$$$$isMultiSelectEvent$$($event$$753$$) {
  return 32 == $event$$753$$.keyCode && $event$$753$$.ctrlKey
};
D.$DvtTagCloudDropTarget$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtTagCloudDropTarget$$, D.$DvtDropTarget$$, "DvtTagCloudDropTarget");
D.$DvtTagCloudDropTarget$$.prototype.$acceptDrag$ = function $$DvtTagCloudDropTarget$$$$$acceptDrag$$($mouseX$$40$$, $mouseY$$40$$, $clientIds$$17$$) {
  return $clientIds$$17$$[0]
};

  return D;
});
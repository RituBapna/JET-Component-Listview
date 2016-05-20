/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  
  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtNBox$$ = function $$DvtNBox$$$($context$$464$$, $callback$$116$$, $callbackObj$$72$$) {
  this.Init($context$$464$$, $callback$$116$$, $callbackObj$$72$$)
};
(0,D.$goog$exportPath_$$)("DvtNBox", D.$DvtNBox$$);
D.$DvtObj$$.$createSubclass$(D.$DvtNBox$$, D.$DvtBaseComponent$$, "DvtNBox");
D.$DvtNBox$$.newInstance = function $$DvtNBox$$$newInstance$($context$$465$$, $callback$$117$$, $callbackObj$$73$$) {
  return new D.$DvtNBox$$($context$$465$$, $callback$$117$$, $callbackObj$$73$$)
};
D.$DvtNBox$$.getDefaults = function $$DvtNBox$$$getDefaults$($skin$$17$$) {
  return(0,D.$JSCompiler_StaticMethods_getDefaults$$)(new D.$DvtNBoxDefaults$$, $skin$$17$$)
};
D.$DvtNBox$$.prototype.Init = function $$DvtNBox$$$$Init$($context$$466$$, $callback$$118$$, $callbackObj$$74$$) {
  D.$DvtNBox$$.$superclass$.Init.call(this, $context$$466$$, $callback$$118$$, $callbackObj$$74$$);
  this.$Defaults$ = new D.$DvtNBoxDefaults$$;
  this.$EventManager$ = new D.$DvtNBoxEventManager$$(this);
  this.$EventManager$.$addListeners$(this);
  this.$_dragSource$ = new D.$DvtDragSource$$($context$$466$$);
  this.$_dropTarget$ = new D.$DvtNBoxDropTarget$$(this);
  (0,D.$JSCompiler_StaticMethods_setDragSource$$)(this.$EventManager$, this.$_dragSource$);
  (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$EventManager$, this.$CreateKeyboardHandler$(this.$EventManager$));
  this.setId("nbox1000" + window.Math.floor(1E9 * window.Math.random()));
  this.$legend$ = this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  this.$_peers$ = [];
  this.$_animationAllowed$ = D.$JSCompiler_alias_TRUE$$
};
D.$DvtNBox$$.prototype.$SetOptions$ = function $$DvtNBox$$$$$SetOptions$$($options$$192_selectionMode$$8$$) {
  $options$$192_selectionMode$$8$$ || ($options$$192_selectionMode$$8$$ = (0,D.$JSCompiler_StaticMethods_getSanitizedOptions$$)(this));
  $options$$192_selectionMode$$8$$ ? (this.$Options$ = this.$Defaults$.$calcOptions$($options$$192_selectionMode$$8$$), D.$DvtNBoxDataUtils$$.$processDataObject$(this), (0,D.$DvtAgent$isEnvironmentBrowser$$)() || (this.$Options$[D.$DvtNBoxConstants$$.$ANIMATION_ON_DISPLAY$] = "none", this.$Options$[D.$DvtNBoxConstants$$.$ANIMATION_ON_DATA_CHANGE$] = "none")) : this.$Options$ || (this.$Options$ = (0,D.$JSCompiler_StaticMethods_GetDefaults$$)(this));
  this.$_displayables$ = [];
  $options$$192_selectionMode$$8$$ = this.$Options$[D.$DvtNBoxConstants$$.$SELECTION_MODE$];
  this.$_selectionHandler$ = "single" == $options$$192_selectionMode$$8$$ ? new D.$DvtSelectionHandler$$("s") : "multiple" == $options$$192_selectionMode$$8$$ ? new D.$DvtSelectionHandler$$("m") : D.$JSCompiler_alias_NULL$$;
  this.$EventManager$.$setSelectionHandler$(this.$_selectionHandler$)
};
D.$DvtNBox$$.prototype.$render$ = function $$DvtNBox$$$$$render$$($options$$193$$, $container$$138_width$$115$$, $bBlackBoxUpdate$$2_drawer_height$$107_keyboardHandlers$$) {
  var $ah$$2_animationOnDataChange$$2$$ = D.$DvtNBoxStyleUtils$$.$getAnimationOnDataChange$(this), $oldNBox$$ = D.$JSCompiler_alias_NULL$$;
  this.$Options$ && "none" !== $ah$$2_animationOnDataChange$$2$$ && ($oldNBox$$ = {options:this.$Options$, getOptions:(0,D.$JSCompiler_get$$)("options"), displayables:this.$_displayables$, getDisplayables:(0,D.$JSCompiler_get$$)("displayables"), id:this.getId(), getId:(0,D.$JSCompiler_get$$)("id")}, $oldNBox$$.$getOptions$ = $oldNBox$$.getOptions, $oldNBox$$.$getDisplayables$ = $oldNBox$$.getDisplayables, $oldNBox$$.getId = $oldNBox$$.getId);
  this.$__cleanUp$();
  this.$SetOptions$($options$$193$$);
  !(0,window.isNaN)($container$$138_width$$115$$) && !(0,window.isNaN)($bBlackBoxUpdate$$2_drawer_height$$107_keyboardHandlers$$) && (this.$Width$ = $container$$138_width$$115$$, this.$Height$ = $bBlackBoxUpdate$$2_drawer_height$$107_keyboardHandlers$$);
  $container$$138_width$$115$$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$addChild$($container$$138_width$$115$$);
  D.$DvtNBoxRenderer$$.$render$(this, $container$$138_width$$115$$, new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$));
  $bBlackBoxUpdate$$2_drawer_height$$107_keyboardHandlers$$ = [this];
  var $animationOnDisplay$$2_legend$$27_legendData$$3$$ = D.$DvtNBoxDataUtils$$.$getLegend$(this);
  if($animationOnDisplay$$2_legend$$27_legendData$$3$$ && $animationOnDisplay$$2_legend$$27_legendData$$3$$.sections) {
    var $animationDuration$$8_panelDrawer$$2$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this, $animationOnDisplay$$2_legend$$27_legendData$$3$$, "panelDrawer");
    $animationDuration$$8_panelDrawer$$2$$ && ($bBlackBoxUpdate$$2_drawer_height$$107_keyboardHandlers$$.push($animationDuration$$8_panelDrawer$$2$$), $animationDuration$$8_panelDrawer$$2$$.$isDisclosed$() && ($animationOnDisplay$$2_legend$$27_legendData$$3$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this, $animationOnDisplay$$2_legend$$27_legendData$$3$$, "legend"), $bBlackBoxUpdate$$2_drawer_height$$107_keyboardHandlers$$.push($animationOnDisplay$$2_legend$$27_legendData$$3$$)))
  }
  (0,D.$JSCompiler_StaticMethods_setKeyboardFocusArray$$)(this.$getCtx$(), $bBlackBoxUpdate$$2_drawer_height$$107_keyboardHandlers$$);
  $options$$193$$ && (D.$DvtNBoxDataUtils$$.$getDrawer$(this) && D.$DvtNBoxDataUtils$$.$getGrouping$(this)) && ($bBlackBoxUpdate$$2_drawer_height$$107_keyboardHandlers$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this, D.$DvtNBoxDataUtils$$.$getDrawer$(this)), this.$EventManager$.$setFocus$($bBlackBoxUpdate$$2_drawer_height$$107_keyboardHandlers$$), this.$EventManager$.$setFocused$(D.$JSCompiler_alias_FALSE$$));
  this.$_updateKeyboardFocusEffect$();
  this.$_animation$ && (this.$_animationStopped$ = D.$JSCompiler_alias_TRUE$$, this.$_animation$.stop());
  var $animationOnDisplay$$2_legend$$27_legendData$$3$$ = D.$DvtNBoxStyleUtils$$.$getAnimationOnDisplay$(this), $animationDuration$$8_panelDrawer$$2$$ = D.$DvtNBoxStyleUtils$$.$getAnimationDuration$(this), $bounds$$137$$ = new D.$DvtRectangle$$(0, 0, this.$Width$, this.$Height$);
  $bBlackBoxUpdate$$2_drawer_height$$107_keyboardHandlers$$ = D.$JSCompiler_alias_FALSE$$;
  this.$_container$ ? "none" != $ah$$2_animationOnDataChange$$2$$ && $options$$193$$ && ((this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getCombinedAnimation$(this.$getCtx$(), $ah$$2_animationOnDataChange$$2$$, this.$_container$, $container$$138_width$$115$$, $bounds$$137$$, $animationDuration$$8_panelDrawer$$2$$)) ? $bBlackBoxUpdate$$2_drawer_height$$107_keyboardHandlers$$ = D.$JSCompiler_alias_TRUE$$ : (this.$_deleteContainer$ = new D.$DvtContainer$$(this.$getCtx$(), "DeleteContainer"), 
  this.$addChild$(this.$_deleteContainer$), $ah$$2_animationOnDataChange$$2$$ = new D.$DvtNBoxDataAnimationHandler$$(this.$getCtx$(), this.$_deleteContainer$, $oldNBox$$, this), (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($ah$$2_animationOnDataChange$$2$$, [$oldNBox$$], [this]), this.$_animation$ = $ah$$2_animationOnDataChange$$2$$.$getAnimation$())) : "none" !== $animationOnDisplay$$2_legend$$27_legendData$$3$$ && (this.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$(this.$getCtx$(), 
  $animationOnDisplay$$2_legend$$27_legendData$$3$$, $container$$138_width$$115$$, $bounds$$137$$, $animationDuration$$8_panelDrawer$$2$$));
  this.$_animation$ && (this.$setMouseEnabled$(D.$JSCompiler_alias_FALSE$$), (0,D.$DvtPlayable$appendOnEnd$$)(this.$_animation$, this.$_onAnimationEnd$, this), (0,D.$DvtAgent$isPlatformIE$$)() && 12 <= (0,D.$DvtAgent$getVersion$$)() && (0,D.$DvtPlayable$appendOnEnd$$)(this.$_animation$, function() {
    this.$_animationAllowed$ = D.$JSCompiler_alias_FALSE$$;
    this.$render$($options$$193$$);
    this.$_animationAllowed$ = D.$JSCompiler_alias_TRUE$$
  }, this), this.$_animation$.play());
  $bBlackBoxUpdate$$2_drawer_height$$107_keyboardHandlers$$ ? this.$_oldContainer$ = this.$_container$ : this.$_container$ && (this.removeChild(this.$_container$), this.$_container$.$destroy$());
  this.$_container$ = $container$$138_width$$115$$;
  this.$UpdateAriaAttributes$()
};
D.$DvtNBox$$.prototype.render = D.$DvtNBox$$.prototype.$render$;
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBox$$.prototype;
D.$JSCompiler_prototypeAlias$$.$__cleanUp$ = function $$JSCompiler_prototypeAlias$$$$__cleanUp$$() {
  this.$EventManager$.$hideTooltip$();
  this.$_peers$.length = 0
};
D.$JSCompiler_prototypeAlias$$.$_onAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onAnimationEnd$$() {
  this.$_oldContainer$ && (this.removeChild(this.$_oldContainer$), this.$_oldContainer$.$destroy$(), this.$_oldContainer$ = D.$JSCompiler_alias_NULL$$);
  this.$_deleteContainer$ && (this.removeChild(this.$_deleteContainer$), this.$_deleteContainer$.$destroy$());
  this.$_deleteContainer$ = D.$JSCompiler_alias_NULL$$;
  this.$_animationStopped$ = D.$JSCompiler_alias_FALSE$$;
  this.$_animation$ = D.$JSCompiler_alias_NULL$$;
  this.$setMouseEnabled$(D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$CreateKeyboardHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateKeyboardHandler$$($manager$$21$$) {
  return new D.$DvtNBoxKeyboardHandler$$($manager$$21$$, this)
};
D.$JSCompiler_prototypeAlias$$.$getChildContainer$ = (0,D.$JSCompiler_get$$)("$_container$");
D.$JSCompiler_prototypeAlias$$.$getDisplayables$ = (0,D.$JSCompiler_get$$)("$_displayables$");
D.$JSCompiler_prototypeAlias$$.$_updateKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$_updateKeyboardFocusEffect$$() {
  var $navigable$$16$$ = this.$EventManager$.$getFocus$(), $isShowingKeyboardFocusEffect$$ = D.$JSCompiler_alias_FALSE$$;
  if($navigable$$16$$) {
    var $newNavigable$$, $isShowingKeyboardFocusEffect$$ = $navigable$$16$$.$isShowingKeyboardFocusEffect$();
    $navigable$$16$$.$getKeyboardFocusDisplayable$ && ($newNavigable$$ = $navigable$$16$$.$getKeyboardFocusDisplayable$());
    $newNavigable$$ && $isShowingKeyboardFocusEffect$$ && $newNavigable$$.$showKeyboardFocusEffect$();
    this.$EventManager$.$setFocus$($newNavigable$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$EventManager$");
D.$JSCompiler_prototypeAlias$$.$processEvent$ = function $$JSCompiler_prototypeAlias$$$$processEvent$$($event$$560$$) {
  var $disclosure_type$$239$$ = $event$$560$$.$getType$(), $options$$194$$ = (0,D.$JSCompiler_StaticMethods_getSanitizedOptions$$)(this);
  $disclosure_type$$239$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ || $disclosure_type$$239$$ == D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$ ? $event$$560$$ = this.$_processHideShowEvent$($event$$560$$) : "categoryRollOver" == $disclosure_type$$239$$ || "categoryRollOut" == $disclosure_type$$239$$ ? $event$$560$$ = this.$_processRolloverEvent$($event$$560$$) : "selection" == $disclosure_type$$239$$ ? $event$$560$$ = this.$_processSelectionEvent$($event$$560$$) : $options$$194$$._legend && "dvtPanelDrawerEvent" == 
  $disclosure_type$$239$$ && ($disclosure_type$$239$$ = "hide" == $event$$560$$.$getSubType$() ? "undisclosed" : "disclosed", $event$$560$$ = new D.$DvtSetPropertyEvent$$, (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$560$$, D.$DvtNBoxConstants$$.$LEGEND_DISCLOSURE$, $disclosure_type$$239$$), $options$$194$$[D.$DvtNBoxConstants$$.$LEGEND_DISCLOSURE$] = $disclosure_type$$239$$, this.$render$($options$$194$$));
  $event$$560$$ && this.$__dispatchEvent$($event$$560$$)
};
D.$JSCompiler_prototypeAlias$$.$_processHideShowEvent$ = function $$JSCompiler_prototypeAlias$$$$_processHideShowEvent$$($event$$561$$) {
  var $options$$195$$ = (0,D.$JSCompiler_StaticMethods_getSanitizedOptions$$)(this), $hiddenCategories$$10$$ = $options$$195$$[D.$DvtNBoxConstants$$.$HIDDEN_CATEGORIES$];
  $hiddenCategories$$10$$ || ($hiddenCategories$$10$$ = []);
  var $categoryIndex$$2$$ = D.$DvtArrayUtils$$.$getIndex$($hiddenCategories$$10$$, $event$$561$$.$_category$);
  $event$$561$$.$getType$() == D.$DvtCategoryHideShowEvent$$.$TYPE_HIDE$ && -1 == $categoryIndex$$2$$ && $hiddenCategories$$10$$.push($event$$561$$.$_category$);
  $event$$561$$.$getType$() == D.$DvtCategoryHideShowEvent$$.$TYPE_SHOW$ && -1 != $categoryIndex$$2$$ && $hiddenCategories$$10$$.splice($categoryIndex$$2$$, 1);
  0 == $hiddenCategories$$10$$.length && ($hiddenCategories$$10$$ = D.$JSCompiler_alias_NULL$$);
  $event$$561$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$561$$, D.$DvtNBoxConstants$$.$HIDDEN_CATEGORIES$, $hiddenCategories$$10$$);
  $options$$195$$[D.$DvtNBoxConstants$$.$HIDDEN_CATEGORIES$] = $hiddenCategories$$10$$;
  this.$render$($options$$195$$);
  return $event$$561$$
};
D.$JSCompiler_prototypeAlias$$.$_processRolloverEvent$ = function $$JSCompiler_prototypeAlias$$$$_processRolloverEvent$$($event$$562$$) {
  this.$_processHighlighting$($event$$562$$.categories);
  return $event$$562$$
};
D.$JSCompiler_prototypeAlias$$.$_processSelectionEvent$ = function $$JSCompiler_prototypeAlias$$$$_processSelectionEvent$$($event$$563_selectedMap$$) {
  var $eventSelection_objects$$3_selection$$30$$ = $event$$563_selectedMap$$.getSelection(), $i$$709_selectedItems$$ = D.$JSCompiler_alias_NULL$$;
  if($eventSelection_objects$$3_selection$$30$$) {
    $event$$563_selectedMap$$ = {};
    for($i$$709_selectedItems$$ = 0;$i$$709_selectedItems$$ < $eventSelection_objects$$3_selection$$30$$.length;$i$$709_selectedItems$$++) {
      $event$$563_selectedMap$$[$eventSelection_objects$$3_selection$$30$$[$i$$709_selectedItems$$]] = D.$JSCompiler_alias_TRUE$$
    }
    var $eventSelection_objects$$3_selection$$30$$ = this.$getObjects$(), $drawer$$1$$ = D.$JSCompiler_alias_NULL$$;
    if(D.$DvtNBoxDataUtils$$.$getGrouping$(this)) {
      for($i$$709_selectedItems$$ = 0;$i$$709_selectedItems$$ < $eventSelection_objects$$3_selection$$30$$.length;$i$$709_selectedItems$$++) {
        if($eventSelection_objects$$3_selection$$30$$[$i$$709_selectedItems$$] instanceof D.$DvtNBoxCategoryNode$$) {
          if($event$$563_selectedMap$$[$eventSelection_objects$$3_selection$$30$$[$i$$709_selectedItems$$].getId()]) {
            $event$$563_selectedMap$$[$eventSelection_objects$$3_selection$$30$$[$i$$709_selectedItems$$].getId()] = D.$JSCompiler_alias_FALSE$$;
            for(var $nodeIndices$$1$$ = $eventSelection_objects$$3_selection$$30$$[$i$$709_selectedItems$$].getData().nodeIndices, $j$$91$$ = 0;$j$$91$$ < $nodeIndices$$1$$.length;$j$$91$$++) {
              var $node$$248$$ = D.$DvtNBoxDataUtils$$.$getNode$(this, $nodeIndices$$1$$[$j$$91$$]);
              $event$$563_selectedMap$$[$node$$248$$[D.$DvtNBoxConstants$$.ID]] = D.$JSCompiler_alias_TRUE$$
            }
          }
        }else {
          $eventSelection_objects$$3_selection$$30$$[$i$$709_selectedItems$$] instanceof D.$DvtNBoxDrawer$$ && ($drawer$$1$$ = $eventSelection_objects$$3_selection$$30$$[$i$$709_selectedItems$$])
        }
      }
    }
    var $eventSelection_objects$$3_selection$$30$$ = [], $i$$709_selectedItems$$ = [], $id$$229$$;
    for($id$$229$$ in $event$$563_selectedMap$$) {
      $event$$563_selectedMap$$[$id$$229$$] && ($eventSelection_objects$$3_selection$$30$$.push($id$$229$$), $i$$709_selectedItems$$.push($id$$229$$))
    }
    $event$$563_selectedMap$$ = new D.$DvtSelectionEvent$$($eventSelection_objects$$3_selection$$30$$)
  }
  D.$DvtNBoxDataUtils$$.$setSelectedItems$(this, $i$$709_selectedItems$$);
  $drawer$$1$$ && $drawer$$1$$.$UpdateAccessibilityAttributes$();
  return $event$$563_selectedMap$$
};
D.$JSCompiler_prototypeAlias$$.$registerObject$ = function $$JSCompiler_prototypeAlias$$$$registerObject$$($peer$$25$$) {
  this.$_peers$.push($peer$$25$$)
};
D.$JSCompiler_prototypeAlias$$.$getObjects$ = (0,D.$JSCompiler_get$$)("$_peers$");
D.$JSCompiler_prototypeAlias$$.getWidth = (0,D.$JSCompiler_get$$)("$Width$");
D.$JSCompiler_prototypeAlias$$.getHeight = (0,D.$JSCompiler_get$$)("$Height$");
D.$JSCompiler_prototypeAlias$$.$getSelectionHandler$ = (0,D.$JSCompiler_get$$)("$_selectionHandler$");
D.$JSCompiler_prototypeAlias$$.$isSelectionSupported$ = function $$JSCompiler_prototypeAlias$$$$isSelectionSupported$$() {
  return this.$_selectionHandler$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$($stampId$$14$$) {
  return this.$_popupBehaviors$ ? this.$_popupBehaviors$[$stampId$$14$$] : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($animationHandler$$7$$, $oldNBox$$1$$) {
  D.$DvtNBoxRenderer$$.$animateUpdate$($animationHandler$$7$$, $oldNBox$$1$$, this)
};
D.$JSCompiler_StaticMethods_getSanitizedOptions$$ = function $$JSCompiler_StaticMethods_getSanitizedOptions$$$($JSCompiler_StaticMethods_getSanitizedOptions$self$$) {
  return D.$DvtJSONUtils$$.$clone$($JSCompiler_StaticMethods_getSanitizedOptions$self$$.$getOptions$(), function($JSCompiler_StaticMethods_getSanitizedOptions$self$$) {
    return 0 != $JSCompiler_StaticMethods_getSanitizedOptions$self$$.indexOf("__")
  })
};
D.$DvtNBox$$.prototype.$getSubcomponentStyles$ = function $$DvtNBox$$$$$getSubcomponentStyles$$() {
  return{}
};
D.$DvtNBox$$.prototype.$__isDragAvailable$ = function $$DvtNBox$$$$$__isDragAvailable$$($clientIds$$10$$) {
  return this.$_selectionHandler$ ? $clientIds$$10$$[0] : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBox$$.prototype.$__getDragTransferable$ = function $$DvtNBox$$$$$__getDragTransferable$$($node$$249_rowKeys$$1$$) {
  $node$$249_rowKeys$$1$$.$isSelected$() || (this.$_selectionHandler$.$processClick$($node$$249_rowKeys$$1$$, D.$JSCompiler_alias_FALSE$$), this.$EventManager$.$fireSelectionEvent$());
  $node$$249_rowKeys$$1$$ = [];
  for(var $selectionMap$$ = {}, $selectedIds$$8_selection$$31$$ = this.$_selectionHandler$.getSelection(), $i$$710$$ = 0;$i$$710$$ < $selectedIds$$8_selection$$31$$.length;$i$$710$$++) {
    var $id$$230_item$$44$$ = $selectedIds$$8_selection$$31$$[$i$$710$$];
    if($id$$230_item$$44$$ instanceof D.$DvtNBoxNode$$) {
      $id$$230_item$$44$$ = $id$$230_item$$44$$.getData()[D.$DvtNBoxConstants$$.ID], $node$$249_rowKeys$$1$$.push($id$$230_item$$44$$), $selectionMap$$[$id$$230_item$$44$$] = D.$JSCompiler_alias_TRUE$$
    }else {
      if($id$$230_item$$44$$ instanceof D.$DvtNBoxCategoryNode$$) {
        for(var $nodeIndices$$2$$ = $id$$230_item$$44$$.getData().nodeIndices, $j$$92$$ = 0;$j$$92$$ < $nodeIndices$$2$$.length;$j$$92$$++) {
          var $nodeId$$145$$ = D.$DvtNBoxDataUtils$$.$getNode$(this, $nodeIndices$$2$$[$j$$92$$])[D.$DvtNBoxConstants$$.ID];
          $node$$249_rowKeys$$1$$.push($nodeId$$145$$);
          $selectionMap$$[$nodeId$$145$$] = D.$JSCompiler_alias_TRUE$$
        }
        $selectionMap$$[$id$$230_item$$44$$.getData()[D.$DvtNBoxConstants$$.ID]] = D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  $selectedIds$$8_selection$$31$$ = (0,D.$JSCompiler_StaticMethods_getSelectedIds$$)(this.$_selectionHandler$);
  for($i$$710$$ = 0;$i$$710$$ < $selectedIds$$8_selection$$31$$.length;$i$$710$$++) {
    if($id$$230_item$$44$$ = $selectedIds$$8_selection$$31$$[$i$$710$$], !$selectionMap$$[$id$$230_item$$44$$]) {
      if((0,window.isNaN)(D.$DvtNBoxDataUtils$$.$getNodeIndex$(this, $id$$230_item$$44$$))) {
        if(D.$DvtNBoxDataUtils$$.$getGrouping$(this) && D.$DvtNBoxDataUtils$$.$getCategoryNode$(this, $id$$230_item$$44$$)) {
          $nodeIndices$$2$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$(this, $id$$230_item$$44$$).nodeIndices;
          for($j$$92$$ = 0;$j$$92$$ < $nodeIndices$$2$$.length;$j$$92$$++) {
            $nodeId$$145$$ = D.$DvtNBoxDataUtils$$.$getNode$(this, $nodeIndices$$2$$[$j$$92$$])[D.$DvtNBoxConstants$$.ID], $selectionMap$$[$nodeId$$145$$] || ($node$$249_rowKeys$$1$$.push($nodeId$$145$$), $selectionMap$$[$nodeId$$145$$] = D.$JSCompiler_alias_TRUE$$)
          }
          $selectionMap$$[$id$$230_item$$44$$] = D.$JSCompiler_alias_TRUE$$
        }
      }else {
        $node$$249_rowKeys$$1$$.push($id$$230_item$$44$$), $selectionMap$$[$id$$230_item$$44$$] = D.$JSCompiler_alias_TRUE$$
      }
    }
  }
  return $node$$249_rowKeys$$1$$
};
D.$DvtNBox$$.prototype.$__getDragFeedback$ = function $$DvtNBox$$$$$__getDragFeedback$$() {
  return this.$_selectionHandler$.getSelection().slice(0)
};
D.$JSCompiler_StaticMethods___getCellUnderPoint$$ = function $$JSCompiler_StaticMethods___getCellUnderPoint$$$($JSCompiler_StaticMethods___getCellUnderPoint$self$$, $x$$242$$, $y$$216$$) {
  for(var $cellCount$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($JSCompiler_StaticMethods___getCellUnderPoint$self$$) * D.$DvtNBoxDataUtils$$.$getColumnCount$($JSCompiler_StaticMethods___getCellUnderPoint$self$$), $i$$711$$ = 0;$i$$711$$ < $cellCount$$;$i$$711$$++) {
    var $cell$$30$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($JSCompiler_StaticMethods___getCellUnderPoint$self$$, D.$DvtNBoxDataUtils$$.$getCell$($JSCompiler_StaticMethods___getCellUnderPoint$self$$, $i$$711$$));
    if($cell$$30$$.contains($x$$242$$, $y$$216$$)) {
      return $cell$$30$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtNBox$$.prototype.$__showDropSiteFeedback$ = function $$DvtNBox$$$$$__showDropSiteFeedback$$($cell$$31$$) {
  this.$_dropSiteFeedback$ && (this.$_dropSiteFeedback$.getParent().removeChild(this.$_dropSiteFeedback$), this.$_dropSiteFeedback$ = D.$JSCompiler_alias_NULL$$);
  $cell$$31$$ && (this.$_dropSiteFeedback$ = $cell$$31$$.$renderDropSiteFeedback$());
  return this.$_dropSiteFeedback$
};
D.$DvtNBox$$.prototype.$getAutomation$ = function $$DvtNBox$$$$$getAutomation$$() {
  this.$Automation$ || (this.$Automation$ = new D.$DvtNBoxAutomation$$(this));
  return this.$Automation$
};
D.$DvtNBox$$.prototype.getAutomation = D.$DvtNBox$$.prototype.$getAutomation$;
D.$DvtNBox$$.prototype.$GetComponentDescription$ = function $$DvtNBox$$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "NBOX", D.$DvtNBoxDataUtils$$.$getColumnCount$(this) * D.$DvtNBoxDataUtils$$.$getRowCount$(this))
};
D.$DvtNBox$$.prototype.$highlight$ = function $$DvtNBox$$$$$highlight$$($categories$$17$$) {
  this.$Options$.highlightedCategories = D.$DvtJSONUtils$$.$clone$($categories$$17$$);
  this.$_processHighlighting$($categories$$17$$)
};
D.$DvtNBox$$.prototype.highlight = D.$DvtNBox$$.prototype.$highlight$;
D.$DvtNBox$$.prototype.$_processHighlighting$ = function $$DvtNBox$$$$$_processHighlighting$$($categories$$18$$) {
  var $displayables$$24$$ = (0,D.$JSCompiler_StaticMethods_getNodeDisplayables$$)(this), $cellCount$$1_highlightedMap$$ = D.$DvtNBoxDataUtils$$.$getRowCount$(this) * D.$DvtNBoxDataUtils$$.$getColumnCount$(this);
  this.$getOptions$().__highlightedMap = D.$JSCompiler_alias_NULL$$;
  for(var $JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$ = D.$DvtNBoxRenderer$$.$_calculateCellCounts$(this), $i$$712$$ = 0;$i$$712$$ < $cellCount$$1_highlightedMap$$;$i$$712$$++) {
    var $bIndicator_categoryNodeCount$$inline_7339_cellData$$1_count$$17$$ = D.$DvtNBoxDataUtils$$.$getCell$(this, $i$$712$$), $cell$$32_i$$inline_7340_j$$93$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this, $bIndicator_categoryNodeCount$$inline_7339_cellData$$1_count$$17$$);
    D.$DvtNBoxCellRenderer$$.$renderHeader$(this, $bIndicator_categoryNodeCount$$inline_7339_cellData$$1_count$$17$$, $cell$$32_i$$inline_7340_j$$93$$, $JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$, D.$JSCompiler_alias_FALSE$$)
  }
  $JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$ = D.$DvtNBoxDataUtils$$.$getHighlightedItems$(this);
  $cellCount$$1_highlightedMap$$ = {};
  if($JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$) {
    for(var $i$$712$$ = 0;$i$$712$$ < $JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$.length;$i$$712$$++) {
      $cellCount$$1_highlightedMap$$[$JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$[$i$$712$$][D.$DvtNBoxConstants$$.ID]] = D.$JSCompiler_alias_TRUE$$
    }
  }
  for($i$$712$$ = 0;$i$$712$$ < $displayables$$24$$.length;$i$$712$$++) {
    if($JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$ = $categories$$18$$) {
      if($JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$ = 0 < $categories$$18$$.length) {
        a: {
          $JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$ = $displayables$$24$$[$i$$712$$];
          if($JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$ instanceof D.$DvtNBoxNode$$) {
            if($JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$.$getCategories$()) {
              $JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$ = "all" == this.$getOptions$()[D.$DvtNBoxConstants$$.$HIGHLIGHT_MATCH$] ? D.$DvtArrayUtils$$.$hasAllItems$($categories$$18$$, $JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$.$getCategories$()) : D.$DvtArrayUtils$$.$hasAnyItem$($categories$$18$$, 
              $JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$.$getCategories$());
              break a
            }
          }else {
            if($JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$ instanceof D.$DvtNBoxCategoryNode$$) {
              $JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$ = $JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$.getData();
              $bIndicator_categoryNodeCount$$inline_7339_cellData$$1_count$$17$$ = $JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$.nodeIndices.length;
              for($cell$$32_i$$inline_7340_j$$93$$ = 0;$cell$$32_i$$inline_7340_j$$93$$ < $bIndicator_categoryNodeCount$$inline_7339_cellData$$1_count$$17$$;$cell$$32_i$$inline_7340_j$$93$$++) {
                var $nodeData$$inline_7341$$ = D.$DvtNBoxDataUtils$$.$getNode$(this, $JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$.nodeIndices[$cell$$32_i$$inline_7340_j$$93$$]);
                if($nodeData$$inline_7341$$[D.$DvtNBoxConstants$$.$CATEGORIES$] && ("all" == this.$getOptions$()[D.$DvtNBoxConstants$$.$HIGHLIGHT_MATCH$] ? D.$DvtArrayUtils$$.$hasAllItems$($categories$$18$$, $nodeData$$inline_7341$$[D.$DvtNBoxConstants$$.$CATEGORIES$]) : D.$DvtArrayUtils$$.$hasAnyItem$($categories$$18$$, $nodeData$$inline_7341$$[D.$DvtNBoxConstants$$.$CATEGORIES$]))) {
                  $JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$ = D.$JSCompiler_alias_TRUE$$;
                  break a
                }
              }
            }
          }
          $JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$ = D.$JSCompiler_alias_FALSE$$
        }
        $JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$ = !$JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$
      }
    }
    $JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$ ? $displayables$$24$$[$i$$712$$].$setAlpha$(D.$DvtNBoxStyleUtils$$.$getFadedNodeAlpha$(this)) : $displayables$$24$$[$i$$712$$].$setAlpha$(1);
    if($displayables$$24$$[$i$$712$$] instanceof D.$DvtNBoxCategoryNode$$) {
      $bIndicator_categoryNodeCount$$inline_7339_cellData$$1_count$$17$$ = 0;
      $JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$ = $displayables$$24$$[$i$$712$$].getData();
      for($cell$$32_i$$inline_7340_j$$93$$ = 0;$cell$$32_i$$inline_7340_j$$93$$ < $JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$.nodeIndices.length;$cell$$32_i$$inline_7340_j$$93$$++) {
        $cellCount$$1_highlightedMap$$[$JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$.nodeIndices[$cell$$32_i$$inline_7340_j$$93$$]] && ($bIndicator_categoryNodeCount$$inline_7339_cellData$$1_count$$17$$ += 1)
      }
      $JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$.highlightedCount = $bIndicator_categoryNodeCount$$inline_7339_cellData$$1_count$$17$$;
      $bIndicator_categoryNodeCount$$inline_7339_cellData$$1_count$$17$$ = D.$DvtNBoxStyleUtils$$.$getStyledCategoryIndicatorIcon$(this, $JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$) != D.$JSCompiler_alias_NULL$$ || D.$DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$(this, $JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$) != 
      D.$JSCompiler_alias_NULL$$;
      D.$DvtNBoxCategoryNodeRenderer$$.$_renderNodeCount$(this, $displayables$$24$$[$i$$712$$].getData(), $displayables$$24$$[$i$$712$$], $JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$.__scale, $bIndicator_categoryNodeCount$$inline_7339_cellData$$1_count$$17$$, $JSCompiler_inline_result$$394_JSCompiler_temp$$392_JSCompiler_temp$$393_cellCounts_data$$63_data$$inline_7338_disp$$inline_7337_highlightedItems$$.__gap)
    }
  }
};
D.$JSCompiler_StaticMethods_getNodeDisplayables$$ = function $$JSCompiler_StaticMethods_getNodeDisplayables$$$($JSCompiler_StaticMethods_getNodeDisplayables$self$$) {
  for(var $dataObjects$$ = [], $displayable$$61_groupInfo_nodeCount$$5$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($JSCompiler_StaticMethods_getNodeDisplayables$self$$), $groupBehavior_i$$714$$ = 0;$groupBehavior_i$$714$$ < $displayable$$61_groupInfo_nodeCount$$5$$;$groupBehavior_i$$714$$++) {
    $dataObjects$$.push(D.$DvtNBoxDataUtils$$.$getNode$($JSCompiler_StaticMethods_getNodeDisplayables$self$$, $groupBehavior_i$$714$$))
  }
  $groupBehavior_i$$714$$ = D.$DvtNBoxDataUtils$$.$getGroupBehavior$($JSCompiler_StaticMethods_getNodeDisplayables$self$$);
  if($displayable$$61_groupInfo_nodeCount$$5$$ = $JSCompiler_StaticMethods_getNodeDisplayables$self$$.$getOptions$().__groups) {
    if($groupBehavior_i$$714$$ == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
      for(var $cellCount$$2$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($JSCompiler_StaticMethods_getNodeDisplayables$self$$) * D.$DvtNBoxDataUtils$$.$getColumnCount$($JSCompiler_StaticMethods_getNodeDisplayables$self$$), $groupBehavior_i$$714$$ = 0;$groupBehavior_i$$714$$ < $cellCount$$2$$;$groupBehavior_i$$714$$++) {
        var $cellGroups$$ = $displayable$$61_groupInfo_nodeCount$$5$$[$groupBehavior_i$$714$$ + ""], $displayables$$25_id$$231$$;
        for($displayables$$25_id$$231$$ in $cellGroups$$) {
          $dataObjects$$.push($cellGroups$$[$displayables$$25_id$$231$$])
        }
      }
    }else {
      for($displayables$$25_id$$231$$ in $displayable$$61_groupInfo_nodeCount$$5$$) {
        $dataObjects$$.push($displayable$$61_groupInfo_nodeCount$$5$$[$displayables$$25_id$$231$$])
      }
    }
  }
  $displayables$$25_id$$231$$ = [];
  for($groupBehavior_i$$714$$ = 0;$groupBehavior_i$$714$$ < $dataObjects$$.length;$groupBehavior_i$$714$$++) {
    ($displayable$$61_groupInfo_nodeCount$$5$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($JSCompiler_StaticMethods_getNodeDisplayables$self$$, $dataObjects$$[$groupBehavior_i$$714$$])) && $displayables$$25_id$$231$$.push($displayable$$61_groupInfo_nodeCount$$5$$)
  }
  return $displayables$$25_id$$231$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBox$$.prototype;
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($mouseX$$31$$, $mouseY$$31$$, $clientIds$$14$$) {
  return this.$_dragSource$.$isDragAvailable$($clientIds$$14$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$($mouseX$$32$$, $mouseY$$32$$) {
  return this.$_dragSource$.$getDragTransferable$($mouseX$$32$$, $mouseY$$32$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragOverFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragOverFeedback$$($mouseX$$33$$, $mouseY$$33$$) {
  return this.$_dragSource$.$getDragOverFeedback$($mouseX$$33$$, $mouseY$$33$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragContext$ = function $$JSCompiler_prototypeAlias$$$$getDragContext$$($mouseX$$34$$, $mouseY$$34$$) {
  return this.$_dragSource$.$getDragContext$($mouseX$$34$$, $mouseY$$34$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragOffset$ = function $$JSCompiler_prototypeAlias$$$$getDragOffset$$($mouseX$$35$$, $mouseY$$35$$) {
  return this.$_dragSource$.$getDragOffset$($mouseX$$35$$, $mouseY$$35$$)
};
D.$JSCompiler_prototypeAlias$$.$getPointerOffset$ = function $$JSCompiler_prototypeAlias$$$$getPointerOffset$$($xOffset$$3$$, $yOffset$$5$$) {
  return this.$_dragSource$.$getPointerOffset$($xOffset$$3$$, $yOffset$$5$$)
};
D.$JSCompiler_prototypeAlias$$.$initiateDrag$ = function $$JSCompiler_prototypeAlias$$$$initiateDrag$$() {
  this.$_dragSource$.$initiateDrag$()
};
D.$JSCompiler_prototypeAlias$$.$dragDropEnd$ = function $$JSCompiler_prototypeAlias$$$$dragDropEnd$$() {
  this.$_dragSource$.$dragDropEnd$()
};
D.$DvtNBox$$.prototype.$acceptDrag$ = function $$DvtNBox$$$$$acceptDrag$$($mouseX$$36$$, $mouseY$$36$$, $clientIds$$15$$) {
  return this.$_dropTarget$.$acceptDrag$($mouseX$$36$$, $mouseY$$36$$, $clientIds$$15$$)
};
D.$DvtNBox$$.prototype.$getDropSite$ = function $$DvtNBox$$$$$getDropSite$$($mouseX$$37$$, $mouseY$$37$$) {
  return this.$_dropTarget$.$getDropSite$($mouseX$$37$$, $mouseY$$37$$)
};
D.$DvtNBoxConstants$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxConstants$$, D.$DvtObj$$, "DvtNBoxConstants");
D.$DvtNBoxConstants$$.$COLUMN$ = "column";
D.$DvtNBoxConstants$$.$COLUMNS$ = "columns";
D.$DvtNBoxConstants$$.$COLUMNS_TITLE$ = "columnsTitle";
D.$DvtNBoxConstants$$.$COLUMNS_TITLE_STYLE$ = "columnsTitleStyle";
D.$DvtNBoxConstants$$.$COLUMN_LABEL_STYLE$ = "columnLabelStyle";
D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$ = "maximizedColumn";
(0,D.$goog$exportPath_$$)("DvtNBoxConstants.MAXIMIZED_COLUMN", D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$);
D.$DvtNBoxConstants$$.$ROW$ = "row";
D.$DvtNBoxConstants$$.$ROWS$ = "rows";
D.$DvtNBoxConstants$$.$ROWS_TITLE$ = "rowsTitle";
D.$DvtNBoxConstants$$.$ROWS_TITLE_STYLE$ = "rowsTitleStyle";
D.$DvtNBoxConstants$$.$ROW_LABEL_STYLE$ = "rowLabelStyle";
D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$ = "maximizedRow";
(0,D.$goog$exportPath_$$)("DvtNBoxConstants.MAXIMIZED_ROW", D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$);
D.$DvtNBoxConstants$$.$CELL$ = "cell";
D.$DvtNBoxConstants$$.$CELLS$ = "cells";
D.$DvtNBoxConstants$$.$CELL_DEFAULTS$ = "cellDefaults";
D.$DvtNBoxConstants$$.$NODES$ = "nodes";
D.$DvtNBoxConstants$$.$NODE_DEFAULTS$ = "nodeDefaults";
D.$DvtNBoxConstants$$.$CATEGORIES$ = "categories";
D.$DvtNBoxConstants$$.$ICON$ = "icon";
D.$DvtNBoxConstants$$.$ICON_DEFAULTS$ = "iconDefaults";
D.$DvtNBoxConstants$$.$INDICATOR$ = "indicator";
D.$DvtNBoxConstants$$.$INDICATOR_ICON$ = "indicatorIcon";
D.$DvtNBoxConstants$$.$INDICATOR_ICON_DEFAULTS$ = "indicatorIconDefaults";
D.$DvtNBoxConstants$$.$INDICATOR_COLOR$ = "indicatorColor";
D.$DvtNBoxConstants$$.$X_PERCENTAGE$ = "xPercentage";
D.$DvtNBoxConstants$$.$Y_PERCENTAGE$ = "yPercentage";
D.$DvtNBoxConstants$$.$SELECTION$ = "selection";
D.$DvtNBoxConstants$$.$SELECTION_MODE$ = "selectionMode";
D.$DvtNBoxConstants$$.$SELECTION_INFO$ = "selectionInfo";
(0,D.$goog$exportPath_$$)("DvtNBoxConstants.SELECTION_INFO", D.$DvtNBoxConstants$$.$SELECTION_INFO$);
D.$DvtNBoxConstants$$.$HAS_SELECTION_LISTENER$ = "hasSelectionListener";
D.$DvtNBoxConstants$$.$HIGHLIGHTED_CATEGORIES$ = "highlightedCategories";
D.$DvtNBoxConstants$$.$HIGHLIGHT_MATCH$ = "highlightMatch";
D.$DvtNBoxConstants$$.$HIDDEN_CATEGORIES$ = "hiddenCategories";
(0,D.$goog$exportPath_$$)("DvtNBoxConstants.HIDDEN_CATEGORIES", D.$DvtNBoxConstants$$.$HIDDEN_CATEGORIES$);
D.$DvtNBoxConstants$$.$HOVER_BEHAVIOR$ = "hoverBehavior";
D.$DvtNBoxConstants$$.$GROUP_CATEGORY$ = "groupCategory";
D.$DvtNBoxConstants$$.$GROUP_ATTRIBUTES$ = "groupAttributes";
D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR$ = "groupBehavior";
D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$ = "withinCell";
D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_ACROSS_CELLS$ = "acrossCells";
D.$DvtNBoxConstants$$.$OTHER_COLOR$ = "otherColor";
D.$DvtNBoxConstants$$.$OTHER_THRESHOLD$ = "otherThreshold";
D.$DvtNBoxConstants$$.$ANIMATION_ON_DATA_CHANGE$ = "animationOnDataChange";
D.$DvtNBoxConstants$$.$ANIMATION_ON_DISPLAY$ = "animationOnDisplay";
D.$DvtNBoxConstants$$.$ANIMATION_DURATION$ = "animationDuration";
D.$DvtNBoxConstants$$.$DRAWER$ = "_drawer";
(0,D.$goog$exportPath_$$)("DvtNBoxConstants.DRAWER", D.$DvtNBoxConstants$$.$DRAWER$);
D.$DvtNBoxConstants$$.$LEGEND$ = "_legend";
D.$DvtNBoxConstants$$.$LEGEND_DISCLOSURE$ = "legendDisclosure";
(0,D.$goog$exportPath_$$)("DvtNBoxConstants.LEGEND_DISCLOSURE", D.$DvtNBoxConstants$$.$LEGEND_DISCLOSURE$);
D.$DvtNBoxConstants$$.ID = "id";
D.$DvtNBoxConstants$$.$LABEL$ = "label";
D.$DvtNBoxConstants$$.$LABEL_STYLE$ = "labelStyle";
D.$DvtNBoxConstants$$.$LABEL_HALIGN$ = "labelHalign";
D.$DvtNBoxConstants$$.$SECONDARY_LABEL$ = "secondaryLabel";
D.$DvtNBoxConstants$$.$SECONDARY_LABEL_STYLE$ = "secondaryLabelStyle";
D.$DvtNBoxConstants$$.$SHORT_DESC$ = "shortDesc";
D.$DvtNBoxConstants$$.$SHOW_COUNT$ = "showCount";
D.$DvtNBoxConstants$$.$STYLE$ = "style";
D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$ = "styleDefaults";
D.$DvtNBoxConstants$$.$BORDER_COLOR$ = "borderColor";
D.$DvtNBoxConstants$$.$BORDER_RADIUS$ = "borderRadius";
D.$DvtNBoxConstants$$.$BORDER_WIDTH$ = "borderWidth";
D.$DvtNBoxConstants$$.$COLOR$ = "color";
D.$DvtNBoxConstants$$.$PATTERN$ = "pattern";
D.$DvtNBoxConstants$$.$OPACITY$ = "opacity";
D.$DvtNBoxConstants$$.$SHAPE$ = "shape";
D.$DvtNBoxConstants$$.$SOURCE$ = "source";
D.$DvtNBoxConstants$$.$HEIGHT$ = "height";
D.$DvtNBoxConstants$$.$WIDTH$ = "width";
(0,D.$DvtBundle$addDefaultStrings$$)("DvtNBoxBundle", {HIGHLIGHTED_COUNT:"{0}/{1}", COMMA_SEP_LIST:"{0}, {1}", OTHER:"Other", LEGEND:"Legend", GROUP_NODE:"Group", ADDITIONAL_DATA:"Additional Data", SIZE:"Size"});
D.$DvtNBoxDefaults$$ = function $$DvtNBoxDefaults$$$() {
  this.Init({skyros:D.$DvtNBoxDefaults$VERSION_1$$, alta:D.$DvtNBoxDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtNBoxDefaults");
D.$DvtNBoxDefaults$VERSION_1$$ = {skin:"alta", selectionMode:"multiple", animationOnDataChange:"none", animationOnDisplay:"none", cellMaximize:"on", cellContent:"auto", legendDisplay:"auto", legendDisclosure:"disclosed", groupBehavior:"withinCell", otherColor:"#636363", otherThreshold:0, hoverBehavior:"none", highlightMatch:"all", highlightedCategories:[], touchResponse:"auto", styleDefaults:{animationDuration:500, hoverBehaviorDelay:200, columnLabelStyle:new D.$DvtCSSStyle$$('font-size: 12px; color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif'), 
rowLabelStyle:new D.$DvtCSSStyle$$('font-size: 12px; color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif'), columnsTitleStyle:new D.$DvtCSSStyle$$('font-size: 14px; color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif'), rowsTitleStyle:new D.$DvtCSSStyle$$('font-size: 14px; color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif'), cellDefaults:{style:new D.$DvtCSSStyle$$("background-color:#e5e5e5"), minimizedStyle:new D.$DvtCSSStyle$$("background-color:#f0f0f0"), 
labelStyle:new D.$DvtCSSStyle$$('font-size: 14px; color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:bold'), countLabelStyle:new D.$DvtCSSStyle$$('font-size: 14px; color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif'), bodyCountLabelStyle:new D.$DvtCSSStyle$$('color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif'), dropTargetStyle:new D.$DvtCSSStyle$$("background-color:rgba(217, 244, 250, .75);border-color:#ccf6ff"), 
showCount:"off", showMaximize:"on"}, __scrollbar:{scrollbarBackground:"linear-gradient(bottom, #dce2e7 0%, #f8f8f8 8%)", scrollbarBorderColor:"#dce2e7", scrollbarHandleColor:"#abb0b4", scrollbarHandleHoverColor:"#333333", scrollbarHandleActiveColor:"#333333"}, __drawerDefaults:{background:"#e5e5e5", borderColor:"#c4ced7", borderRadius:1, headerBackground:"linear-gradient(to bottom, #f5f5f5 0%, #f0f0f0 100%)", labelStyle:new D.$DvtCSSStyle$$('font-size: 14px; color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:bold'), 
countLabelStyle:new D.$DvtCSSStyle$$('font-size: 14px; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:bold'), countBorderRadius:1}, nodeDefaults:{color:"#FFFFFF", labelStyle:new D.$DvtCSSStyle$$('font-size: 12px; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif'), secondaryLabelStyle:new D.$DvtCSSStyle$$('font-size: 11px; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif'), alphaFade:0.2, borderRadius:1, hoverColor:"#FFFFFF", selectionColor:"#000000", iconDefaults:{preferredSize:19, 
preferredSizeTouch:34, shapePaddingRatio:0.15, sourcePaddingRatio:0, opacity:1, pattern:"none", borderWidth:1, borderRadius:0, shape:"circle"}, indicatorIconDefaults:{width:10, height:10, opacity:1, pattern:"none", borderWidth:1, borderRadius:0, shape:"circle"}}, __legendDefaults:{sectionStyle:'font-size: 12px; color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif; font-weight:bold', itemStyle:'font-size: 12px; color: #252525; font-family:"Helvetica Neue", Helvetica, Arial, sans-serif', 
markerColor:"#808080"}, __categoryNodeDefaults:{labelStyle:new D.$DvtCSSStyle$$('font-family:"Helvetica Neue", Helvetica, Arial, sans-serif')}}, __layout:{componentGap:8, titleGap:4, titleComponentGap:4, nodeLabelOnlyStartLabelGap:5, nodeStartLabelGap:3, nodeEndLabelGap:5, nodeSingleLabelGap:2, nodeDualLabelGap:2, nodeInterLabelGap:0, nodeIndicatorGap:3, nodeSwatchSize:10, categoryNodeLabelGap:5, minimumCellSize:34, cellGap:3, gridGap:6, cellStartGap:6, cellEndGap:6, cellTopGap:6, cellBottomGap:6, 
cellLabelGap:6, countLabelGap:10, markerGap:3, minimumLabelWidth:55, maximumLabelWidth:148, drawerButtonGap:10, drawerCountHorizontalGap:5, drawerCountVerticalGap:3, drawerStartGap:10, drawerLabelGap:7, drawerHeaderHeight:31, legendBottomGap:10}};
D.$DvtNBoxDefaults$SKIN_ALTA$$ = {};
D.$DvtNBoxCell$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxCell$$, D.$DvtContainer$$, "DvtNBoxCell");
D.$DvtNBoxCell$$.newInstance = function $$DvtNBoxCell$$$newInstance$($nbox$$3$$, $data$$75$$) {
  var $component$$21$$ = new D.$DvtNBoxCell$$;
  $component$$21$$.Init($nbox$$3$$, $data$$75$$);
  return $component$$21$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBoxCell$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($nbox$$4$$, $data$$76$$) {
  var $r$$55$$ = D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$4$$, $data$$76$$[D.$DvtNBoxConstants$$.$ROW$]), $c$$36$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$4$$, $data$$76$$[D.$DvtNBoxConstants$$.$COLUMN$]);
  D.$DvtNBoxCell$$.$superclass$.Init.call(this, $nbox$$4$$.$getCtx$(), D.$JSCompiler_alias_NULL$$, "c:" + $r$$55$$ + "," + $c$$36$$);
  this.$_nbox$ = $nbox$$4$$;
  this.$_data$ = $data$$76$$;
  this.$_scrollContainer$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.getData = (0,D.$JSCompiler_get$$)("$_data$");
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$143$$, $cellLayout$$, $cellCounts$$1$$, $availSpace$$96$$) {
  this.$_cellCounts$ = $cellCounts$$1$$;
  $container$$143$$.$addChild$(this);
  D.$DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this.$_data$, this);
  D.$DvtNBoxCellRenderer$$.$render$(this.$_nbox$, this.$_data$, this, $cellLayout$$, $cellCounts$$1$$, $availSpace$$96$$);
  this.$_nbox$.$EventManager$.$associate$(this, this)
};
D.$JSCompiler_prototypeAlias$$.$getChildContainer$ = (0,D.$JSCompiler_get$$)("$_childContainer$");
D.$JSCompiler_prototypeAlias$$.$setChildContainer$ = (0,D.$JSCompiler_set$$)("$_childContainer$");
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($animationHandler$$11$$, $oldCell$$) {
  D.$DvtNBoxCellRenderer$$.$animateUpdate$($animationHandler$$11$$, $oldCell$$, this)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($animationHandler$$12$$) {
  D.$DvtNBoxCellRenderer$$.$animateDelete$($animationHandler$$12$$, this)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($animationHandler$$13$$) {
  D.$DvtNBoxCellRenderer$$.$animateInsert$($animationHandler$$13$$, this)
};
D.$JSCompiler_prototypeAlias$$.$isDoubleClickable$ = function $$JSCompiler_prototypeAlias$$$$isDoubleClickable$$() {
  return D.$DvtNBoxDataUtils$$.$isMaximizeEnabled$(this.$_nbox$)
};
D.$JSCompiler_prototypeAlias$$.$handleDoubleClick$ = function $$JSCompiler_prototypeAlias$$$$handleDoubleClick$$() {
  if(this.$isDoubleClickable$()) {
    var $maximizedRow_oldFocus$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$(this.$_nbox$), $maximizedColumn$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$(this.$_nbox$), $options$$197$$ = (0,D.$JSCompiler_StaticMethods_getSanitizedOptions$$)(this.$_nbox$), $event$$570$$ = new D.$DvtSetPropertyEvent$$, $drawer$$5$$ = $options$$197$$[D.$DvtNBoxConstants$$.$DRAWER$];
    $options$$197$$[D.$DvtNBoxConstants$$.$DRAWER$] = D.$JSCompiler_alias_NULL$$;
    (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$570$$, D.$DvtNBoxConstants$$.$DRAWER$, D.$JSCompiler_alias_NULL$$);
    !$drawer$$5$$ && $maximizedRow_oldFocus$$ == this.$_data$[D.$DvtNBoxConstants$$.$ROW$] && $maximizedColumn$$ == this.$_data$[D.$DvtNBoxConstants$$.$COLUMN$] ? ($options$$197$$[D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$] = D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$570$$, D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$, D.$JSCompiler_alias_NULL$$), $options$$197$$[D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$] = D.$JSCompiler_alias_NULL$$, (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$570$$, 
    D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$, D.$JSCompiler_alias_NULL$$)) : ($options$$197$$[D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$] = this.$_data$[D.$DvtNBoxConstants$$.$ROW$], (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$570$$, D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$, this.$_data$[D.$DvtNBoxConstants$$.$ROW$]), $options$$197$$[D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$] = this.$_data$[D.$DvtNBoxConstants$$.$COLUMN$], (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$570$$, D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$, 
    this.$_data$[D.$DvtNBoxConstants$$.$COLUMN$]));
    var $otherCell$$;
    ($maximizedRow_oldFocus$$ = this.$_nbox$.$EventManager$.$getFocus$()) ? $maximizedRow_oldFocus$$ instanceof D.$DvtNBoxNode$$ ? $otherCell$$ = this.$getCellIndex$() != D.$DvtNBoxDataUtils$$.$getCellIndex$(this.$_nbox$, $maximizedRow_oldFocus$$.getData()) : $maximizedRow_oldFocus$$ instanceof D.$DvtNBoxNodeOverflow$$ ? $otherCell$$ = this != $maximizedRow_oldFocus$$.$_cell$ : $maximizedRow_oldFocus$$ instanceof D.$DvtNBoxCell$$ ? $otherCell$$ = this.$getCellIndex$() != $maximizedRow_oldFocus$$.$getCellIndex$() : 
    $maximizedRow_oldFocus$$ instanceof D.$DvtNBoxCategoryNode$$ && ($otherCell$$ = this.$getCellIndex$() != $maximizedRow_oldFocus$$.getData().cell) : (0,D.$JSCompiler_StaticMethods_setFocusObj$$)(this.$_nbox$.$EventManager$, this);
    $otherCell$$ && ((0,D.$JSCompiler_StaticMethods_setFocusObj$$)(this.$_nbox$.$EventManager$, this), this.$_nbox$.$EventManager$.$setFocused$(D.$JSCompiler_alias_FALSE$$));
    this.$_nbox$.$processEvent$($event$$570$$);
    this.$_nbox$.$render$($options$$197$$)
  }
};
D.$JSCompiler_prototypeAlias$$.contains = function $$JSCompiler_prototypeAlias$$$contains$($x$$244$$, $y$$218$$) {
  var $background$$9_maxY$$14$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.$_data$, "background"), $minX$$15$$ = this.$getTranslateX$() + $background$$9_maxY$$14$$.$getX$(), $minY$$17$$ = this.$getTranslateY$() + $background$$9_maxY$$14$$.$getY$(), $maxX$$12$$ = $minX$$15$$ + $background$$9_maxY$$14$$.getWidth(), $background$$9_maxY$$14$$ = $minY$$17$$ + $background$$9_maxY$$14$$.getHeight();
  return $minX$$15$$ <= $x$$244$$ && $x$$244$$ <= $maxX$$12$$ && $minY$$17$$ <= $y$$218$$ && $y$$218$$ <= $background$$9_maxY$$14$$
};
D.$JSCompiler_prototypeAlias$$.$renderDropSiteFeedback$ = function $$JSCompiler_prototypeAlias$$$$renderDropSiteFeedback$$() {
  return D.$DvtNBoxCellRenderer$$.$renderDropSiteFeedback$(this.$_nbox$, this)
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyboardEvent$$($event$$571$$) {
  var $isCellMaximized_maximizedRow$$1$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$(this.$_nbox$), $maximizedColumn$$1$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$(this.$_nbox$), $isCellMaximized_maximizedRow$$1$$ = $isCellMaximized_maximizedRow$$1$$ == this.$_data$[D.$DvtNBoxConstants$$.$ROW$] && $maximizedColumn$$1$$ == this.$_data$[D.$DvtNBoxConstants$$.$COLUMN$] ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$;
  (!$isCellMaximized_maximizedRow$$1$$ && 13 == $event$$571$$.keyCode || $isCellMaximized_maximizedRow$$1$$ && 27 == $event$$571$$.keyCode) && this.$handleDoubleClick$()
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $cellIndex$$2$$ = this.$getCellIndex$(), $states$$12$$ = [];
  D.$DvtNBoxDataUtils$$.$isCellMaximized$(this.$_nbox$, $cellIndex$$2$$) ? $states$$12$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "STATE_MAXIMIZED")) : D.$DvtNBoxDataUtils$$.$isCellMinimized$(this.$_nbox$, $cellIndex$$2$$) && $states$$12$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "STATE_MINIMIZED"));
  $states$$12$$.push([(0,D.$DvtBundle$getTranslatedString$$)("DvtNBoxBundle", "SIZE"), this.$getNodeCount$()]);
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.getData().shortDesc, $states$$12$$)
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return(0,D.$DvtNBoxKeyboardHandler$getKeyboardBoundingBox$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "focusEffect").show()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "focusEffect").$hide$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($JSCompiler_temp$$234_event$$572$$) {
  var $cells$$inline_7403_childObj$$inline_7392_container$$inline_7396_maximizedRow$$inline_7393_next$$7$$ = D.$JSCompiler_alias_NULL$$;
  if(this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($JSCompiler_temp$$234_event$$572$$)) {
    if(219 == $JSCompiler_temp$$234_event$$572$$.keyCode) {
      var $cells$$inline_7403_childObj$$inline_7392_container$$inline_7396_maximizedRow$$inline_7393_next$$7$$ = D.$JSCompiler_alias_NULL$$, $cells$$inline_7403_childObj$$inline_7392_container$$inline_7396_maximizedRow$$inline_7393_next$$7$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$(this.$_nbox$), $cellCount$$inline_7404_maximizedColumn$$inline_7394_nodes$$inline_7397$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$(this.$_nbox$), $drawerData$$inline_7395_i$$inline_7398_i$$inline_7405$$ = D.$DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$);
      if($drawerData$$inline_7395_i$$inline_7398_i$$inline_7405$$ && $cells$$inline_7403_childObj$$inline_7392_container$$inline_7396_maximizedRow$$inline_7393_next$$7$$ == this.getData()[D.$DvtNBoxConstants$$.$ROW$] && $cellCount$$inline_7404_maximizedColumn$$inline_7394_nodes$$inline_7397$$ == this.getData()[D.$DvtNBoxConstants$$.$COLUMN$]) {
        $cells$$inline_7403_childObj$$inline_7392_container$$inline_7396_maximizedRow$$inline_7393_next$$7$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $drawerData$$inline_7395_i$$inline_7398_i$$inline_7405$$)
      }else {
        if($cells$$inline_7403_childObj$$inline_7392_container$$inline_7396_maximizedRow$$inline_7393_next$$7$$ = this.$getChildContainer$(), $cells$$inline_7403_childObj$$inline_7392_container$$inline_7396_maximizedRow$$inline_7393_next$$7$$.$getScrollingPane$ && ($cells$$inline_7403_childObj$$inline_7392_container$$inline_7396_maximizedRow$$inline_7393_next$$7$$ = $cells$$inline_7403_childObj$$inline_7392_container$$inline_7396_maximizedRow$$inline_7393_next$$7$$.$_container$), 0 < $cells$$inline_7403_childObj$$inline_7392_container$$inline_7396_maximizedRow$$inline_7393_next$$7$$.$getNumChildren$() && 
        ($cells$$inline_7403_childObj$$inline_7392_container$$inline_7396_maximizedRow$$inline_7393_next$$7$$.$getChildAt$(0) instanceof D.$DvtNBoxNode$$ || $cells$$inline_7403_childObj$$inline_7392_container$$inline_7396_maximizedRow$$inline_7393_next$$7$$.$getChildAt$(0) instanceof D.$DvtNBoxNodeOverflow$$)) {
          $cells$$inline_7403_childObj$$inline_7392_container$$inline_7396_maximizedRow$$inline_7393_next$$7$$ = D.$DvtNBoxDataUtils$$.$getFirstNavigableNode$(this.$_nbox$, $cells$$inline_7403_childObj$$inline_7392_container$$inline_7396_maximizedRow$$inline_7393_next$$7$$)
        }else {
          $cellCount$$inline_7404_maximizedColumn$$inline_7394_nodes$$inline_7397$$ = [];
          for($drawerData$$inline_7395_i$$inline_7398_i$$inline_7405$$ = 0;$drawerData$$inline_7395_i$$inline_7398_i$$inline_7405$$ < $cells$$inline_7403_childObj$$inline_7392_container$$inline_7396_maximizedRow$$inline_7393_next$$7$$.$getNumChildren$();$drawerData$$inline_7395_i$$inline_7398_i$$inline_7405$$++) {
            var $child$$inline_7399$$ = $cells$$inline_7403_childObj$$inline_7392_container$$inline_7396_maximizedRow$$inline_7393_next$$7$$.$getChildAt$($drawerData$$inline_7395_i$$inline_7398_i$$inline_7405$$);
            $child$$inline_7399$$ instanceof D.$DvtNBoxCategoryNode$$ && $cellCount$$inline_7404_maximizedColumn$$inline_7394_nodes$$inline_7397$$.push($child$$inline_7399$$)
          }
          $cells$$inline_7403_childObj$$inline_7392_container$$inline_7396_maximizedRow$$inline_7393_next$$7$$ = (0,D.$DvtNBoxKeyboardHandler$getNextNavigableCategoryNode$$)(D.$JSCompiler_alias_NULL$$, $JSCompiler_temp$$234_event$$572$$, $cellCount$$inline_7404_maximizedColumn$$inline_7394_nodes$$inline_7397$$)
        }
      }
      $JSCompiler_temp$$234_event$$572$$ = $cells$$inline_7403_childObj$$inline_7392_container$$inline_7396_maximizedRow$$inline_7393_next$$7$$
    }else {
      $cells$$inline_7403_childObj$$inline_7392_container$$inline_7396_maximizedRow$$inline_7393_next$$7$$ = [];
      $cellCount$$inline_7404_maximizedColumn$$inline_7394_nodes$$inline_7397$$ = D.$DvtNBoxDataUtils$$.$getRowCount$(this.$_nbox$) * D.$DvtNBoxDataUtils$$.$getColumnCount$(this.$_nbox$);
      for($drawerData$$inline_7395_i$$inline_7398_i$$inline_7405$$ = 0;$drawerData$$inline_7395_i$$inline_7398_i$$inline_7405$$ < $cellCount$$inline_7404_maximizedColumn$$inline_7394_nodes$$inline_7397$$;$drawerData$$inline_7395_i$$inline_7398_i$$inline_7405$$++) {
        $cells$$inline_7403_childObj$$inline_7392_container$$inline_7396_maximizedRow$$inline_7393_next$$7$$.push(D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $drawerData$$inline_7395_i$$inline_7398_i$$inline_7405$$)))
      }
      $JSCompiler_temp$$234_event$$572$$ = (0,D.$DvtKeyboardHandler$getNextNavigable$$)(this, $JSCompiler_temp$$234_event$$572$$, $cells$$inline_7403_childObj$$inline_7392_container$$inline_7396_maximizedRow$$inline_7393_next$$7$$)
    }
    $cells$$inline_7403_childObj$$inline_7392_container$$inline_7396_maximizedRow$$inline_7393_next$$7$$ = $JSCompiler_temp$$234_event$$572$$
  }
  return $cells$$inline_7403_childObj$$inline_7392_container$$inline_7396_maximizedRow$$inline_7393_next$$7$$
};
D.$JSCompiler_prototypeAlias$$.$getCellIndex$ = function $$JSCompiler_prototypeAlias$$$$getCellIndex$$() {
  return D.$DvtNBoxDataUtils$$.$getCellIndexByRowColumn$(this.$_nbox$, this.getData()[D.$DvtNBoxConstants$$.$ROW$], this.getData()[D.$DvtNBoxConstants$$.$COLUMN$])
};
D.$JSCompiler_prototypeAlias$$.$getLabel$ = function $$JSCompiler_prototypeAlias$$$$getLabel$$() {
  var $label$$63$$ = this.getData()[D.$DvtNBoxConstants$$.$LABEL$];
  return $label$$63$$ ? $label$$63$$ : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getNodeCount$ = function $$JSCompiler_prototypeAlias$$$$getNodeCount$$() {
  this.$_cellCounts$ || (this.$_cellCounts$ = D.$DvtNBoxRenderer$$.$_calculateCellCounts$(this.$_nbox$));
  var $index$$223$$ = this.$getCellIndex$();
  return this.$_cellCounts$.total[$index$$223$$]
};
D.$JSCompiler_prototypeAlias$$.$getNode$ = function $$JSCompiler_prototypeAlias$$$$getNode$$($index$$224$$) {
  var $nodes$$14$$ = this.$_nbox$.$getOptions$()[D.$DvtNBoxConstants$$.$NODES$];
  if($nodes$$14$$) {
    for(var $nodeIndex$$10$$ = 0, $idx$$30$$ = 0;$idx$$30$$ < $nodes$$14$$.length;$idx$$30$$++) {
      if(this.getData()[D.$DvtNBoxConstants$$.$ROW$] == $nodes$$14$$[$idx$$30$$][D.$DvtNBoxConstants$$.$ROW$] && this.getData()[D.$DvtNBoxConstants$$.$COLUMN$] == $nodes$$14$$[$idx$$30$$][D.$DvtNBoxConstants$$.$COLUMN$] && !D.$DvtNBoxDataUtils$$.$isNodeHidden$(this.$_nbox$, $nodes$$14$$[$idx$$30$$])) {
        if($index$$224$$ == $nodeIndex$$10$$) {
          return $nodes$$14$$[$idx$$30$$]
        }
        $nodeIndex$$10$$++
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardFocusDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardFocusDisplayable$$() {
  return D.$DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) != D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_ACROSS_CELLS$ || !this.$_nbox$.$getOptions$().__groups ? D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getCellIndex$(this.$_nbox$, this.getData()))) : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxNode$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxNode$$, D.$DvtContainer$$, "DvtNBoxNode");
D.$DvtNBoxNode$$.newInstance = function $$DvtNBoxNode$$$newInstance$($nbox$$10$$, $data$$80$$) {
  var $component$$23$$ = new D.$DvtNBoxNode$$;
  $component$$23$$.Init($nbox$$10$$, $data$$80$$);
  return $component$$23$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBoxNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($nbox$$11$$, $data$$81$$) {
  D.$DvtNBoxNode$$.$superclass$.Init.call(this, $nbox$$11$$.$getCtx$(), D.$JSCompiler_alias_NULL$$, $data$$81$$[D.$DvtNBoxConstants$$.ID]);
  this.$_nbox$ = $nbox$$11$$;
  this.$_data$ = $data$$81$$;
  this.$_nbox$.$registerObject$(this);
  var $selectionMode$$11$$ = this.$_nbox$.$getOptions$()[D.$DvtNBoxConstants$$.$SELECTION_MODE$];
  ("single" == $selectionMode$$11$$ || "multiple" == $selectionMode$$11$$ || this.$getAction$()) && this.setCursor("pointer");
  this.$_maxAlpha$ = 1
};
D.$JSCompiler_prototypeAlias$$.getData = (0,D.$JSCompiler_get$$)("$_data$");
D.$JSCompiler_prototypeAlias$$.$getAction$ = function $$JSCompiler_prototypeAlias$$$$getAction$$() {
  return this.$_data$.action
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$149$$, $nodeLayout$$) {
  D.$DvtNBoxNodeRenderer$$.$render$(this.$_nbox$, this.$_data$, this, $nodeLayout$$);
  $container$$149$$.$addChild$(this);
  D.$DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this.$_data$, this);
  this.$_nbox$.$EventManager$.$associate$(this, this)
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$JSCompiler_prototypeAlias$$.$isSelected$ = function $$JSCompiler_prototypeAlias$$$$isSelected$$() {
  return this.$getSelectionShape$().$isSelected$()
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$35$$) {
  this.$getSelectionShape$().$setSelected$($selected$$35$$);
  this.$UpdateAccessibilityAttributes$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$getSelectionShape$().$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$getSelectionShape$().$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$setSelectionShape$ = (0,D.$JSCompiler_set$$)("$_selectionShape$");
D.$JSCompiler_prototypeAlias$$.$getSelectionShape$ = (0,D.$JSCompiler_get$$)("$_selectionShape$");
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  var $tooltipFunc$$7$$ = this.$_nbox$.$getOptions$().tooltip;
  if($tooltipFunc$$7$$) {
    var $dataContext$$5$$ = {id:this.$_data$.id, label:this.$_data$.label, secondaryLabel:this.$_data$.secondaryLabel, row:this.$_data$.row, column:this.$_data$.column, color:D.$DvtNBoxStyleUtils$$.$getNodeColor$(this.$_nbox$, this.$_data$), indicatorColor:D.$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$(this.$_nbox$, this.$_data$)};
    return(0,D.$JSCompiler_StaticMethods_getCustomTooltip$$)(this.$_nbox$.$getCtx$().$getTooltipManager$(), $tooltipFunc$$7$$, $dataContext$$5$$)
  }
  return this.$getShortDesc$()
};
D.$JSCompiler_prototypeAlias$$.$getShortDesc$ = function $$JSCompiler_prototypeAlias$$$$getShortDesc$$() {
  return this.$_data$[D.$DvtNBoxConstants$$.$SHORT_DESC$]
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return D.$DvtNBoxStyleUtils$$.$getNodeColor$(this.$_nbox$, this.$_data$)
};
D.$JSCompiler_prototypeAlias$$.$setMaxAlpha$ = function $$JSCompiler_prototypeAlias$$$$setMaxAlpha$$($maxAlpha$$4$$) {
  this.$_maxAlpha$ = $maxAlpha$$4$$;
  this.$setAlpha$(this.$getAlpha$())
};
D.$JSCompiler_prototypeAlias$$.$setAlpha$ = function $$JSCompiler_prototypeAlias$$$$setAlpha$$($alpha$$44$$) {
  D.$DvtNBoxNode$$.$superclass$.$setAlpha$.call(this, window.Math.min($alpha$$44$$, this.$_maxAlpha$))
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($animationHandler$$17$$, $oldNode$$11$$) {
  D.$DvtNBoxNodeRenderer$$.$animateUpdate$($animationHandler$$17$$, $oldNode$$11$$, this)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($animationHandler$$18$$) {
  D.$DvtNBoxNodeRenderer$$.$animateDelete$($animationHandler$$18$$, this)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($animationHandler$$19$$) {
  D.$DvtNBoxNodeRenderer$$.$animateInsert$($animationHandler$$19$$, this)
};
D.$JSCompiler_prototypeAlias$$.$isDoubleClickable$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$JSCompiler_prototypeAlias$$.$handleDoubleClick$ = function $$JSCompiler_prototypeAlias$$$$handleDoubleClick$$() {
  (0,D.$JSCompiler_StaticMethods__getParentContainer$$)(this).$handleDoubleClick$()
};
D.$JSCompiler_prototypeAlias$$.$getShowPopupBehaviors$ = function $$JSCompiler_prototypeAlias$$$$getShowPopupBehaviors$$() {
  if(!this.$_showPopupBehaviors$) {
    this.$_showPopupBehaviors$ = [];
    var $spbs$$3$$ = this.$_data$.showPopupBehaviors;
    if($spbs$$3$$) {
      for(var $i$$725$$ = 0;$i$$725$$ < $spbs$$3$$.length;$i$$725$$++) {
        this.$_showPopupBehaviors$.push(new D.$DvtShowPopupBehavior$$($spbs$$3$$[$i$$725$$].popupId, $spbs$$3$$[$i$$725$$].triggerType, $spbs$$3$$[$i$$725$$].alignId, $spbs$$3$$[$i$$725$$].align))
      }
    }
  }
  return this.$_showPopupBehaviors$
};
D.$JSCompiler_prototypeAlias$$.$getPopupBounds$ = function $$JSCompiler_prototypeAlias$$$$getPopupBounds$$($behavior$$13_matrix$$17$$) {
  if($behavior$$13_matrix$$17$$ && $behavior$$13_matrix$$17$$.$getAlign$()) {
    $behavior$$13_matrix$$17$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$(this);
    var $background$$10$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.$_data$, "background");
    return new D.$DvtRectangle$$($behavior$$13_matrix$$17$$.$_tx$ + $background$$10$$.$getX$(), $behavior$$13_matrix$$17$$.$_ty$ + $background$$10$$.$getY$(), $background$$10$$.getWidth(), $background$$10$$.getHeight())
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$13$$) {
  return this.$_nbox$.$__isDragAvailable$($clientIds$$13$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  return this.$_nbox$.$__getDragTransferable$(this)
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_nbox$.$__getDragFeedback$()
};
D.$JSCompiler_StaticMethods__getParentContainer$$ = function $$JSCompiler_StaticMethods__getParentContainer$$$($JSCompiler_StaticMethods__getParentContainer$self_container$$150$$) {
  var $cellData$$6_cellIndex$$3_drawerData$$3$$ = D.$DvtNBoxDataUtils$$.$getDrawer$($JSCompiler_StaticMethods__getParentContainer$self_container$$150$$.$_nbox$);
  $cellData$$6_cellIndex$$3_drawerData$$3$$ || ($cellData$$6_cellIndex$$3_drawerData$$3$$ = D.$DvtNBoxDataUtils$$.$getCellIndex$($JSCompiler_StaticMethods__getParentContainer$self_container$$150$$.$_nbox$, $JSCompiler_StaticMethods__getParentContainer$self_container$$150$$.$_data$), $cellData$$6_cellIndex$$3_drawerData$$3$$ = D.$DvtNBoxDataUtils$$.$getCell$($JSCompiler_StaticMethods__getParentContainer$self_container$$150$$.$_nbox$, $cellData$$6_cellIndex$$3_drawerData$$3$$));
  return $JSCompiler_StaticMethods__getParentContainer$self_container$$150$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($JSCompiler_StaticMethods__getParentContainer$self_container$$150$$.$_nbox$, $cellData$$6_cellIndex$$3_drawerData$$3$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBoxNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$UpdateAccessibilityAttributes$ = function $$JSCompiler_prototypeAlias$$$$UpdateAccessibilityAttributes$$() {
  if(!(0,D.$DvtAgent$deferAriaCreation$$)()) {
    var $desc$$20$$ = this.$getAriaLabel$();
    $desc$$20$$ && this.$setAriaProperty$(D.$DvtNBoxConstants$$.$LABEL$, $desc$$20$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  return D.$DvtNBoxDataUtils$$.$buildAriaDesc$(this.$_nbox$, this, this.$getShortDesc$(), this.$isSelected$())
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return this.getData()[D.$DvtNBoxConstants$$.$CATEGORIES$] ? this.getData()[D.$DvtNBoxConstants$$.$CATEGORIES$] : []
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return(0,D.$DvtNBoxKeyboardHandler$getKeyboardBoundingBox$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$();
  var $scrollContainer$$ = D.$DvtNBoxDataUtils$$.$getNodeScrollableContainer$(this.$_nbox$, this);
  $scrollContainer$$ && $scrollContainer$$.scrollIntoView(this)
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$590$$) {
  var $next$$11$$ = D.$JSCompiler_alias_NULL$$;
  if(32 == $event$$590$$.keyCode && $event$$590$$.ctrlKey) {
    return this
  }
  this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($event$$590$$) ? $next$$11$$ = 221 == $event$$590$$.keyCode ? (0,D.$JSCompiler_StaticMethods__getParentContainer$$)(this) : 219 == $event$$590$$.keyCode ? this : D.$DvtNBoxDataUtils$$.$getNextNavigableNode$(this.$_nbox$, this, $event$$590$$) : $event$$590$$.type == D.$DvtMouseEvent$CLICK$$ && ($next$$11$$ = this);
  return $next$$11$$
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyboardEvent$$($event$$591$$) {
  if(D.$DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$) && 27 == $event$$591$$.keyCode) {
    this.$handleDoubleClick$()
  }else {
    var $isCellMaximized$$1_maximizedRow$$3$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$(this.$_nbox$), $maximizedColumn$$3$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$(this.$_nbox$), $isCellMaximized$$1_maximizedRow$$3$$ = $isCellMaximized$$1_maximizedRow$$3$$ == this.$_data$[D.$DvtNBoxConstants$$.$ROW$] && $maximizedColumn$$3$$ == this.$_data$[D.$DvtNBoxConstants$$.$COLUMN$] ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$;
    (!$isCellMaximized$$1_maximizedRow$$3$$ && 13 == $event$$591$$.keyCode || $isCellMaximized$$1_maximizedRow$$3$$ && 27 == $event$$591$$.keyCode) && this.$handleDoubleClick$()
  }
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardFocusDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardFocusDisplayable$$() {
  var $cell$$38_cellData$$7_node$$253$$ = D.$DvtNBoxDataUtils$$.$getNode$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getNodeIndex$(this.$_nbox$, this.getData()[D.$DvtNBoxConstants$$.ID]));
  if($cell$$38_cellData$$7_node$$253$$) {
    var $ancestor$$inline_7408_displayable$$68_drawer$$6_lastNode$$1$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $cell$$38_cellData$$7_node$$253$$);
    if($ancestor$$inline_7408_displayable$$68_drawer$$6_lastNode$$1$$) {
      return $ancestor$$inline_7408_displayable$$68_drawer$$6_lastNode$$1$$
    }
    $cell$$38_cellData$$7_node$$253$$ = D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getCellIndex$(this.$_nbox$, $cell$$38_cellData$$7_node$$253$$));
    $cell$$38_cellData$$7_node$$253$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $cell$$38_cellData$$7_node$$253$$);
    $ancestor$$inline_7408_displayable$$68_drawer$$6_lastNode$$1$$ = D.$DvtNBoxDataUtils$$.$getLastNavigableNode$(this.$_nbox$, $cell$$38_cellData$$7_node$$253$$.$getChildContainer$());
    if($ancestor$$inline_7408_displayable$$68_drawer$$6_lastNode$$1$$ instanceof D.$DvtNBoxNodeOverflow$$) {
      return $ancestor$$inline_7408_displayable$$68_drawer$$6_lastNode$$1$$
    }
    a: {
      for($ancestor$$inline_7408_displayable$$68_drawer$$6_lastNode$$1$$ = this;$ancestor$$inline_7408_displayable$$68_drawer$$6_lastNode$$1$$ && $ancestor$$inline_7408_displayable$$68_drawer$$6_lastNode$$1$$.getParent;) {
        if($ancestor$$inline_7408_displayable$$68_drawer$$6_lastNode$$1$$ = $ancestor$$inline_7408_displayable$$68_drawer$$6_lastNode$$1$$.getParent(), $ancestor$$inline_7408_displayable$$68_drawer$$6_lastNode$$1$$ instanceof D.$DvtNBoxDrawer$$) {
          break a
        }
      }
      $ancestor$$inline_7408_displayable$$68_drawer$$6_lastNode$$1$$ = D.$JSCompiler_alias_NULL$$
    }
    return $ancestor$$inline_7408_displayable$$68_drawer$$6_lastNode$$1$$ ? $ancestor$$inline_7408_displayable$$68_drawer$$6_lastNode$$1$$.$getKeyboardFocusDisplayable$() : $cell$$38_cellData$$7_node$$253$$.$getKeyboardFocusDisplayable$()
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxNodeOverflow$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxNodeOverflow$$, D.$DvtContainer$$, "DvtNBoxNodeOverflow");
D.$DvtNBoxNodeOverflow$$.newInstance = function $$DvtNBoxNodeOverflow$$$newInstance$($nbox$$12$$, $cell$$39$$) {
  var $component$$24$$ = new D.$DvtNBoxNodeOverflow$$;
  $component$$24$$.Init($nbox$$12$$, $cell$$39$$);
  return $component$$24$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBoxNodeOverflow$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($nbox$$13$$, $cell$$40$$) {
  D.$DvtNBoxNodeOverflow$$.$superclass$.Init.call(this, $nbox$$13$$.$getCtx$());
  this.$_nbox$ = $nbox$$13$$;
  this.$_cell$ = $cell$$40$$;
  this.$_button$
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$151$$, $keyboardFocusEffect_width$$116$$, $height$$108$$) {
  var $options$$201$$ = this.$_nbox$.$getOptions$(), $w$$57$$ = $options$$201$$._resources.overflow_ena.width, $h$$52$$ = $options$$201$$._resources.overflow_ena.height, $scale$$54_x$$246$$ = 1;
  if($keyboardFocusEffect_width$$116$$ < $w$$57$$ || $height$$108$$ < $h$$52$$) {
    $scale$$54_x$$246$$ = window.Math.min($keyboardFocusEffect_width$$116$$ / $w$$57$$, $height$$108$$ / $h$$52$$)
  }
  var $w$$57$$ = $scale$$54_x$$246$$ * $w$$57$$, $h$$52$$ = $scale$$54_x$$246$$ * $h$$52$$, $scale$$54_x$$246$$ = ($keyboardFocusEffect_width$$116$$ - $w$$57$$) / 2, $y$$220$$ = ($height$$108$$ - $h$$52$$) / 2, $ctx$$4$$ = this.$_nbox$.$getCtx$(), $upRect$$ = new D.$DvtRect$$($ctx$$4$$, 0, 0, $keyboardFocusEffect_width$$116$$, $height$$108$$), $overRect$$ = new D.$DvtRect$$($ctx$$4$$, 0, 0, $keyboardFocusEffect_width$$116$$, $height$$108$$), $downRect$$ = new D.$DvtRect$$($ctx$$4$$, 0, 0, $keyboardFocusEffect_width$$116$$, 
  $height$$108$$), $disRect$$ = new D.$DvtRect$$($ctx$$4$$, 0, 0, $keyboardFocusEffect_width$$116$$, $height$$108$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($upRect$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($overRect$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($downRect$$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($disRect$$);
  var $upState$$18$$ = new D.$DvtContainer$$($ctx$$4$$), $overState$$15$$ = new D.$DvtContainer$$($ctx$$4$$), $downState$$15$$ = new D.$DvtContainer$$($ctx$$4$$), $disState$$ = new D.$DvtContainer$$($ctx$$4$$);
  $upState$$18$$.$addChild$($upRect$$);
  $overState$$15$$.$addChild$($overRect$$);
  $downState$$15$$.$addChild$($downRect$$);
  $disState$$.$addChild$($disRect$$);
  $upState$$18$$.$addChild$(new D.$DvtImage$$($ctx$$4$$, $options$$201$$._resources.overflow_ena.src, $scale$$54_x$$246$$, $y$$220$$, $w$$57$$, $h$$52$$));
  $overState$$15$$.$addChild$(new D.$DvtImage$$($ctx$$4$$, $options$$201$$._resources.overflow_ovr.src, $scale$$54_x$$246$$, $y$$220$$, $w$$57$$, $h$$52$$));
  $downState$$15$$.$addChild$(new D.$DvtImage$$($ctx$$4$$, $options$$201$$._resources.overflow_dwn.src, $scale$$54_x$$246$$, $y$$220$$, $w$$57$$, $h$$52$$));
  $disState$$.$addChild$(new D.$DvtImage$$($ctx$$4$$, $options$$201$$._resources.overflow_dis.src, $scale$$54_x$$246$$, $y$$220$$, $w$$57$$, $h$$52$$));
  this.$_button$ = new D.$DvtButton$$($ctx$$4$$, $upState$$18$$, $overState$$15$$, $downState$$15$$, $disState$$, D.$JSCompiler_alias_NULL$$, this.$HandleClick$, this);
  D.$DvtNBoxDataUtils$$.$isMaximizeEnabled$(this.$_nbox$) || (this.$_button$.$setEnabled$(D.$JSCompiler_alias_FALSE$$), (0,D.$JSCompiler_StaticMethods_drawDisabledState$$)(this.$_button$));
  this.$addChild$(this.$_button$);
  $keyboardFocusEffect_width$$116$$ = new D.$DvtKeyboardFocusEffect$$(this.$_nbox$.$getCtx$(), this, new D.$DvtRectangle$$(-1, -1, $keyboardFocusEffect_width$$116$$ + 2, $height$$108$$ + 2));
  D.$DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this, $keyboardFocusEffect_width$$116$$, "focusEffect");
  $container$$151$$.$addChild$(this);
  this.$_addAccessibilityAttributes$();
  this.$_nbox$.$EventManager$.$associate$(this, this)
};
D.$JSCompiler_prototypeAlias$$.$HandleClick$ = function $$JSCompiler_prototypeAlias$$$$HandleClick$$($event$$592$$) {
  (0,D.$DvtEventManager$consumeEvent$$)($event$$592$$);
  this.$_cell$.$handleDoubleClick$(D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyboardEvent$$($event$$593$$) {
  13 == $event$$593$$.keyCode && this.$_cell$.$handleDoubleClick$()
};
D.$JSCompiler_prototypeAlias$$.$_addAccessibilityAttributes$ = function $$JSCompiler_prototypeAlias$$$$_addAccessibilityAttributes$$() {
  this.$setAriaRole$("button");
  if(!(0,D.$DvtAgent$deferAriaCreation$$)()) {
    var $desc$$21$$ = this.$getAriaLabel$();
    $desc$$21$$ && this.$setAriaProperty$(D.$DvtNBoxConstants$$.$LABEL$, $desc$$21$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  return(0,D.$DvtBundle$getTranslatedString$$)("DvtNBoxBundle", "ADDITIONAL_DATA")
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  return this.$getDatatip$()
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return(0,D.$DvtNBoxKeyboardHandler$getKeyboardBoundingBox$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this, "focusEffect").show()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this, "focusEffect").$hide$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$594$$) {
  var $next$$12$$ = D.$JSCompiler_alias_NULL$$;
  this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($event$$594$$) && ($next$$12$$ = 221 == $event$$594$$.keyCode ? this.$_cell$ : D.$DvtNBoxDataUtils$$.$getNextNavigableNode$(this.$_nbox$, this, $event$$594$$));
  return $next$$12$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardFocusDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardFocusDisplayable$$() {
  var $newNode$$8$$ = D.$DvtNBoxDataUtils$$.$getNode$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getNodeIndex$(this.$_nbox$, this.__prev[D.$DvtNBoxConstants$$.ID])).__next;
  return D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $newNode$$8$$)
};
D.$DvtNBoxCategoryNode$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxCategoryNode$$, D.$DvtContainer$$, "DvtNBoxCategoryNode");
D.$DvtNBoxCategoryNode$$.newInstance = function $$DvtNBoxCategoryNode$$$newInstance$($nbox$$1$$, $data$$73$$) {
  var $component$$20$$ = new D.$DvtNBoxCategoryNode$$;
  $component$$20$$.Init($nbox$$1$$, $data$$73$$);
  return $component$$20$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBoxCategoryNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($nbox$$2$$, $data$$74$$) {
  D.$DvtNBoxCategoryNode$$.$superclass$.Init.call(this, $nbox$$2$$.$getCtx$(), D.$JSCompiler_alias_NULL$$, (0,window.isNaN)($data$$74$$[D.$DvtNBoxConstants$$.$CELL$]) ? $data$$74$$[D.$DvtNBoxConstants$$.ID] : $data$$74$$[D.$DvtNBoxConstants$$.$CELL$] + ":" + $data$$74$$[D.$DvtNBoxConstants$$.ID]);
  this.$_nbox$ = $nbox$$2$$;
  this.$_data$ = $data$$74$$;
  this.$_nbox$.$registerObject$(this);
  "multiple" == this.$_nbox$.$getOptions$()[D.$DvtNBoxConstants$$.$SELECTION_MODE$] && this.setCursor("pointer");
  this.$_maxAlpha$ = 1
};
D.$JSCompiler_prototypeAlias$$.getData = (0,D.$JSCompiler_get$$)("$_data$");
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$141$$, $scale$$53$$, $gap$$23$$) {
  D.$DvtNBoxCategoryNodeRenderer$$.$render$(this.$_nbox$, this.$_data$, this, $scale$$53$$, $gap$$23$$);
  $container$$141$$.$addChild$(this);
  D.$DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this.$_data$, this);
  this.$_nbox$.$EventManager$.$associate$(this, this)
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return"multiple" == this.$_nbox$.$getOptions$()[D.$DvtNBoxConstants$$.$SELECTION_MODE$]
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = function $$JSCompiler_prototypeAlias$$$$isSelected$$() {
  return this.$getSelectionShape$().$isSelected$()
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$33$$) {
  this.$getSelectionShape$().$setSelected$($selected$$33$$);
  this.$UpdateAccessibilityAttributes$()
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$getSelectionShape$().$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$getSelectionShape$().$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$setSelectionShape$ = (0,D.$JSCompiler_set$$)("$_selectionShape$");
D.$JSCompiler_prototypeAlias$$.$getSelectionShape$ = (0,D.$JSCompiler_get$$)("$_selectionShape$");
D.$JSCompiler_prototypeAlias$$.$getLabel$ = function $$JSCompiler_prototypeAlias$$$$getLabel$$() {
  for(var $labels$$21$$ = D.$DvtNBoxDataUtils$$.$getCategoryNodeLabels$(this.$_nbox$, this.$_data$);1 < $labels$$21$$.length;) {
    var $joined$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtNBoxBundle", "COMMA_SEP_LIST", [$labels$$21$$[0], $labels$$21$$[1]]);
    $labels$$21$$.splice(0, 2, $joined$$)
  }
  return $labels$$21$$[0]
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  var $tooltipFunc$$6$$ = this.$_nbox$.$getOptions$().tooltip;
  if($tooltipFunc$$6$$) {
    var $dataContext$$4$$ = {id:this.$_data$.id, color:D.$DvtNBoxStyleUtils$$.$getCategoryNodeColor$(this.$_nbox$, this.$_data$), indicatorColor:D.$DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$(this.$_nbox$, this.$_data$), size:this.$_data$.nodeIndices.length};
    "withinCell" == D.$DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) && ($dataContext$$4$$.row = D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, this.$_data$.cell).row, $dataContext$$4$$.column = D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, this.$_data$.cell).column);
    return(0,D.$JSCompiler_StaticMethods_getCustomTooltip$$)(this.$_nbox$.$getCtx$().$getTooltipManager$(), $tooltipFunc$$6$$, $dataContext$$4$$)
  }
  return this.$getShortDesc$() + "\n" + (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [(0,D.$DvtBundle$getTranslatedString$$)("DvtNBoxBundle", "SIZE"), this.$_data$.nodeIndices.length])
};
D.$JSCompiler_prototypeAlias$$.$getShortDesc$ = function $$JSCompiler_prototypeAlias$$$$getShortDesc$$() {
  return D.$DvtNBoxDataUtils$$.$getCategoryNodeLabels$(this.$_nbox$, this.$_data$).join("\n")
};
D.$JSCompiler_prototypeAlias$$.$getDatatipColor$ = function $$JSCompiler_prototypeAlias$$$$getDatatipColor$$() {
  return D.$DvtNBoxStyleUtils$$.$getCategoryNodeColor$(this.$_nbox$, this.$_data$)
};
D.$JSCompiler_prototypeAlias$$.$setMaxAlpha$ = function $$JSCompiler_prototypeAlias$$$$setMaxAlpha$$($maxAlpha$$3$$) {
  this.$_maxAlpha$ = $maxAlpha$$3$$;
  this.$setAlpha$(this.$getAlpha$())
};
D.$JSCompiler_prototypeAlias$$.$setAlpha$ = function $$JSCompiler_prototypeAlias$$$$setAlpha$$($alpha$$43$$) {
  D.$DvtNBoxCategoryNode$$.$superclass$.$setAlpha$.call(this, window.Math.min($alpha$$43$$, this.$_maxAlpha$))
};
D.$JSCompiler_prototypeAlias$$.$isDoubleClickable$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$JSCompiler_prototypeAlias$$.$handleDoubleClick$ = function $$JSCompiler_prototypeAlias$$$$handleDoubleClick$$() {
  var $options$$196$$ = (0,D.$JSCompiler_StaticMethods_getSanitizedOptions$$)(this.$_nbox$);
  $options$$196$$[D.$DvtNBoxConstants$$.$DRAWER$] = {id:this.getId()};
  var $event$$565$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$565$$, D.$DvtNBoxConstants$$.$DRAWER$, this.getId());
  this.$_nbox$.$processEvent$($event$$565$$);
  this.$_nbox$.$render$($options$$196$$)
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($animationHandler$$8$$, $oldNode$$10$$) {
  D.$DvtNBoxCategoryNodeRenderer$$.$animateUpdate$($animationHandler$$8$$, $oldNode$$10$$, this)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($animationHandler$$9$$) {
  D.$DvtNBoxCategoryNodeRenderer$$.$animateDelete$($animationHandler$$9$$, this)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($animationHandler$$10$$) {
  D.$DvtNBoxCategoryNodeRenderer$$.$animateInsert$($animationHandler$$10$$, this)
};
D.$JSCompiler_prototypeAlias$$.$isDragAvailable$ = function $$JSCompiler_prototypeAlias$$$$isDragAvailable$$($clientIds$$11$$) {
  return this.$_nbox$.$__isDragAvailable$($clientIds$$11$$)
};
D.$JSCompiler_prototypeAlias$$.$getDragTransferable$ = function $$JSCompiler_prototypeAlias$$$$getDragTransferable$$() {
  return this.$_nbox$.$__getDragTransferable$(this)
};
D.$JSCompiler_prototypeAlias$$.$getDragFeedback$ = function $$JSCompiler_prototypeAlias$$$$getDragFeedback$$() {
  return this.$_nbox$.$__getDragFeedback$()
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyboardEvent$$($event$$566$$) {
  if(13 == $event$$566$$.keyCode) {
    this.$handleDoubleClick$()
  }else {
    if(27 == $event$$566$$.keyCode && D.$DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
      var $cellData$$4$$ = D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, this.$_data$.$cell$);
      D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $cellData$$4$$).$HandleKeyboardEvent$($event$$566$$)
    }
  }
};
D.$JSCompiler_prototypeAlias$$.$UpdateAccessibilityAttributes$ = function $$JSCompiler_prototypeAlias$$$$UpdateAccessibilityAttributes$$() {
  if(!(0,D.$DvtAgent$deferAriaCreation$$)()) {
    var $desc$$18$$ = this.$getAriaLabel$();
    $desc$$18$$ && this.$setAriaProperty$(D.$DvtNBoxConstants$$.$LABEL$, $desc$$18$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  return D.$DvtNBoxDataUtils$$.$buildAriaDesc$(this.$_nbox$, this, this.$getShortDesc$(), this.$isSelected$())
};
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  var $categories$$20$$ = this.getData()[D.$DvtNBoxConstants$$.$CATEGORIES$];
  if(!$categories$$20$$) {
    for(var $intersect$$ = function $$intersect$$$($categories$$20$$, $intersect$$) {
      return $categories$$20$$.filter(function($categories$$20$$) {
        return-1 < $intersect$$.indexOf($categories$$20$$)
      })
    }, $indices$$11$$ = this.getData().nodeIndices, $categories$$20$$ = D.$JSCompiler_alias_NULL$$, $i$$720$$ = 0;$i$$720$$ < $indices$$11$$.length;$i$$720$$++) {
      var $nodeCategories$$ = D.$DvtNBoxDataUtils$$.$getNode$(this.$_nbox$, $indices$$11$$[$i$$720$$])[D.$DvtNBoxConstants$$.$CATEGORIES$];
      if(!$nodeCategories$$) {
        $categories$$20$$ = [];
        break
      }
      $categories$$20$$ = $categories$$20$$ == D.$JSCompiler_alias_NULL$$ ? $nodeCategories$$ : $intersect$$($categories$$20$$, $nodeCategories$$)
    }
    this.getData()[D.$DvtNBoxConstants$$.$CATEGORIES$] = $categories$$20$$
  }
  return $categories$$20$$
};
D.$DvtNBoxCategoryNode$$.$compareSize$ = function $$DvtNBoxCategoryNode$$$$compareSize$$($a$$69$$, $b$$49$$) {
  var $alength$$ = $a$$69$$.nodeIndices.length, $blength$$ = $b$$49$$.nodeIndices.length;
  return $alength$$ == $blength$$ ? 0 : $alength$$ < $blength$$ ? 1 : -1
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBoxCategoryNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return(0,D.$DvtNBoxKeyboardHandler$getKeyboardBoundingBox$$)(this)
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
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($cellData$$5_event$$567$$) {
  var $groups$$5_next$$6_nodes$$12$$ = D.$JSCompiler_alias_NULL$$;
  if(32 == $cellData$$5_event$$567$$.keyCode && $cellData$$5_event$$567$$.ctrlKey) {
    return this
  }
  if(221 == $cellData$$5_event$$567$$.keyCode && D.$DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
    $cellData$$5_event$$567$$ = D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, this.getData()[D.$DvtNBoxConstants$$.$CELL$]), $groups$$5_next$$6_nodes$$12$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $cellData$$5_event$$567$$)
  }else {
    if(221 == $cellData$$5_event$$567$$.keyCode || 219 == $cellData$$5_event$$567$$.keyCode) {
      $groups$$5_next$$6_nodes$$12$$ = this
    }else {
      if(this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($cellData$$5_event$$567$$)) {
        if(D.$DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_ACROSS_CELLS$) {
          var $groups$$5_next$$6_nodes$$12$$ = this.$_nbox$.$getOptions$().__groups, $groupNodes_i$$721$$ = [], $container$$142_id$$234$$;
          for($container$$142_id$$234$$ in $groups$$5_next$$6_nodes$$12$$) {
            var $displayable$$65$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $groups$$5_next$$6_nodes$$12$$[$container$$142_id$$234$$]);
            $displayable$$65$$ && $groupNodes_i$$721$$.push($displayable$$65$$)
          }
          $groups$$5_next$$6_nodes$$12$$ = (0,D.$DvtNBoxKeyboardHandler$getNextNavigableCategoryNode$$)(this, $cellData$$5_event$$567$$, $groupNodes_i$$721$$)
        }else {
          $container$$142_id$$234$$ = this.getParent();
          $groups$$5_next$$6_nodes$$12$$ = [];
          for($groupNodes_i$$721$$ = 0;$groupNodes_i$$721$$ < $container$$142_id$$234$$.$getNumChildren$();$groupNodes_i$$721$$++) {
            $container$$142_id$$234$$.$getChildAt$($groupNodes_i$$721$$) instanceof D.$DvtNBoxCategoryNode$$ && $groups$$5_next$$6_nodes$$12$$.push($container$$142_id$$234$$.$getChildAt$($groupNodes_i$$721$$))
          }
          $groups$$5_next$$6_nodes$$12$$ = (0,D.$DvtNBoxKeyboardHandler$getNextNavigableCategoryNode$$)(this, $cellData$$5_event$$567$$, $groups$$5_next$$6_nodes$$12$$)
        }
      }else {
        $cellData$$5_event$$567$$.type == D.$DvtMouseEvent$CLICK$$ && ($groups$$5_next$$6_nodes$$12$$ = this)
      }
    }
  }
  return $groups$$5_next$$6_nodes$$12$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardFocusDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardFocusDisplayable$$() {
  var $drawerData_groupNodeData$$ = D.$DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$);
  return $drawerData_groupNodeData$$ || D.$DvtNBoxDataUtils$$.$getGrouping$(this.$_nbox$) && ($drawerData_groupNodeData$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nbox$, this.getId())) ? D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $drawerData_groupNodeData$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxCategoryRolloverHandler$$ = function $$DvtNBoxCategoryRolloverHandler$$$($callback$$119$$, $callbackObj$$75$$) {
  D.$DvtNBoxCategoryRolloverHandler$$.$superclass$.constructor.call(this, $callback$$119$$, $callbackObj$$75$$);
  this.$_nbox$ = $callbackObj$$75$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxCategoryRolloverHandler$$, D.$DvtCategoryRolloverHandler$$, "DvtNBoxCategoryRolloverHandler");
D.$DvtNBoxCategoryRolloverHandler$$.prototype.$GetRolloverCallback$ = function $$DvtNBoxCategoryRolloverHandler$$$$$GetRolloverCallback$$($event$$568$$) {
  return D.$DvtObj$$.$createCallback$(this, function() {
    this.$_bHighlightMode$ = D.$JSCompiler_alias_TRUE$$;
    this.$_nbox$.$processEvent$($event$$568$$);
    this.$_callback$ && this.$_callback$.call(this.$_callbackObj$, $event$$568$$, this.$_source$)
  })
};
D.$DvtNBoxCategoryRolloverHandler$$.prototype.$GetRolloutCallback$ = function $$DvtNBoxCategoryRolloverHandler$$$$$GetRolloutCallback$$($event$$569$$) {
  return D.$DvtObj$$.$createCallback$(this, function() {
    (0,D.$JSCompiler_StaticMethods_SetHighlightModeTimeout$$)(this);
    this.$_nbox$.$processEvent$($event$$569$$);
    this.$_callback$ && this.$_callback$.call(this.$_callbackObj$, $event$$569$$, this.$_source$)
  })
};
D.$DvtNBoxDrawer$$ = (0,D.$JSCompiler_emptyFn$$)();
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxDrawer$$, D.$DvtContainer$$, "DvtNBoxDrawer");
D.$DvtNBoxDrawer$$.newInstance = function $$DvtNBoxDrawer$$$newInstance$($nbox$$5$$, $data$$77$$) {
  var $component$$22$$ = new D.$DvtNBoxDrawer$$;
  $component$$22$$.Init($nbox$$5$$, $data$$77$$);
  return $component$$22$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBoxDrawer$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($nbox$$6$$, $data$$78$$) {
  D.$DvtNBoxDrawer$$.$superclass$.Init.call(this, $nbox$$6$$.$getCtx$(), D.$JSCompiler_alias_NULL$$, $data$$78$$.id + "_d");
  this.$_nbox$ = $nbox$$6$$;
  this.$_data$ = $data$$78$$;
  this.$_nbox$.$registerObject$(this)
};
D.$JSCompiler_prototypeAlias$$.getData = (0,D.$JSCompiler_get$$)("$_data$");
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$146$$, $availSpace$$97$$) {
  $container$$146$$.$addChild$(this);
  D.$DvtNBoxDataUtils$$.$setDisplayable$(this.$_nbox$, this.$_data$, this);
  D.$DvtNBoxDrawerRenderer$$.$render$(this.$_nbox$, this.$_data$, this, $availSpace$$97$$);
  this.$_nbox$.$EventManager$.$associate$(this, this)
};
D.$JSCompiler_prototypeAlias$$.$getChildContainer$ = (0,D.$JSCompiler_get$$)("$_childContainer$");
D.$JSCompiler_prototypeAlias$$.$setChildContainer$ = (0,D.$JSCompiler_set$$)("$_childContainer$");
D.$JSCompiler_prototypeAlias$$.$isDoubleClickable$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_TRUE$$);
D.$JSCompiler_prototypeAlias$$.$handleDoubleClick$ = function $$JSCompiler_prototypeAlias$$$$handleDoubleClick$$() {
  this.$closeDrawer$()
};
D.$JSCompiler_prototypeAlias$$.$closeDrawer$ = function $$JSCompiler_prototypeAlias$$$$closeDrawer$$() {
  var $options$$199$$ = (0,D.$JSCompiler_StaticMethods_getSanitizedOptions$$)(this.$_nbox$);
  $options$$199$$[D.$DvtNBoxConstants$$.$DRAWER$] = D.$JSCompiler_alias_NULL$$;
  var $event$$575$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$575$$, D.$DvtNBoxConstants$$.$DRAWER$, D.$JSCompiler_alias_NULL$$);
  this.$_nbox$.$processEvent$($event$$575$$);
  this.$_nbox$.$render$($options$$199$$)
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($animationHandler$$14$$, $oldDrawer$$) {
  D.$DvtNBoxDrawerRenderer$$.$animateUpdate$($animationHandler$$14$$, $oldDrawer$$, this)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($animationHandler$$15$$) {
  D.$DvtNBoxDrawerRenderer$$.$animateDelete$($animationHandler$$15$$, this)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($animationHandler$$16$$) {
  D.$DvtNBoxDrawerRenderer$$.$animateInsert$($animationHandler$$16$$, this)
};
D.$JSCompiler_prototypeAlias$$.$HandleKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleKeyboardEvent$$($event$$576$$) {
  27 == $event$$576$$.keyCode && this.$closeDrawer$()
};
D.$JSCompiler_prototypeAlias$$.$UpdateAccessibilityAttributes$ = function $$JSCompiler_prototypeAlias$$$$UpdateAccessibilityAttributes$$() {
  if(!(0,D.$DvtAgent$deferAriaCreation$$)()) {
    var $desc$$19$$ = this.$getAriaLabel$();
    $desc$$19$$ && ((0,D.$DvtAgent$isTouchDevice$$)() ? D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "background") : this).$setAriaProperty$("label", $desc$$19$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $categoryNode$$4$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nbox$, this.getData().id)), $selected$$34$$ = D.$DvtNBoxDataUtils$$.$isDrawerSelected$(this.$_nbox$, $categoryNode$$4$$);
  return D.$DvtNBoxDataUtils$$.$buildAriaDesc$(this.$_nbox$, this, $categoryNode$$4$$.$getShortDesc$(), $selected$$34$$)
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$() {
  return(0,D.$DvtNBoxKeyboardHandler$getKeyboardBoundingBox$$)(this)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "focusEffect").show()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, this.getData(), "focusEffect").$hide$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($container$$148_event$$577_maximizedCellIndex$$) {
  var $next$$8$$ = D.$JSCompiler_alias_NULL$$;
  this.$_nbox$.$EventManager$.$KeyboardHandler$.$isNavigationEvent$($container$$148_event$$577_maximizedCellIndex$$) && (219 == $container$$148_event$$577_maximizedCellIndex$$.keyCode ? ($container$$148_event$$577_maximizedCellIndex$$ = this.$getChildContainer$(), $container$$148_event$$577_maximizedCellIndex$$.$getScrollingPane$ && ($container$$148_event$$577_maximizedCellIndex$$ = $container$$148_event$$577_maximizedCellIndex$$.$_container$), $next$$8$$ = D.$DvtNBoxDataUtils$$.$getFirstNavigableNode$(this.$_nbox$, 
  $container$$148_event$$577_maximizedCellIndex$$)) : 221 == $container$$148_event$$577_maximizedCellIndex$$.keyCode && ($container$$148_event$$577_maximizedCellIndex$$ = D.$DvtNBoxDataUtils$$.$getMaximizedCellIndex$(this.$_nbox$), $next$$8$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $container$$148_event$$577_maximizedCellIndex$$))));
  return $next$$8$$
};
D.$JSCompiler_prototypeAlias$$.$getKeyboardFocusDisplayable$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardFocusDisplayable$$() {
  if(this.$_nbox$.$getOptions$()._drawer) {
    return this
  }
  var $groupNodeData$$1$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nbox$, this.getData()[D.$DvtNBoxConstants$$.ID]);
  return $groupNodeData$$1$$ ? D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $groupNodeData$$1$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxDataAnimationHandler$$ = function $$DvtNBoxDataAnimationHandler$$$($context$$467$$, $deleteContainer$$9$$, $oldNBox$$2$$, $newNBox$$) {
  this.Init($context$$467$$, $deleteContainer$$9$$, $oldNBox$$2$$, $newNBox$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxDataAnimationHandler$$, D.$DvtDataAnimationHandler$$, "DvtNBoxDataAnimationHandler");
D.$DvtNBoxDataAnimationHandler$$.prototype.Init = function $$DvtNBoxDataAnimationHandler$$$$Init$($context$$468$$, $deleteContainer$$10$$, $oldNBox$$3$$, $newNBox$$1$$) {
  D.$DvtNBoxDataAnimationHandler$$.$superclass$.Init.call(this, $context$$468$$, $deleteContainer$$10$$);
  this.$_oldNBox$ = $oldNBox$$3$$;
  this.$_newNBox$ = $newNBox$$1$$
};
D.$DvtNBoxDataAnimationHandler$$.prototype.$getAnimationDuration$ = function $$DvtNBoxDataAnimationHandler$$$$$getAnimationDuration$$() {
  return D.$DvtNBoxStyleUtils$$.$getAnimationDuration$(this.$_oldNBox$)
};
D.$DvtNBoxDropTarget$$ = (0,D.$JSCompiler_set$$)("$_view$");
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxDropTarget$$, D.$DvtDropTarget$$, "DvtNBoxDropTarget");
D.$DvtNBoxDropTarget$$.prototype.$acceptDrag$ = function $$DvtNBoxDropTarget$$$$$acceptDrag$$($cell$$36_mouseX$$27$$, $mouseY$$27$$, $clientIds$$12$$) {
  if($cell$$36_mouseX$$27$$ = (0,D.$JSCompiler_StaticMethods___getCellUnderPoint$$)(this.$_view$, $cell$$36_mouseX$$27$$, $mouseY$$27$$)) {
    $cell$$36_mouseX$$27$$ != this.$_dropSite$ && (this.$_view$.$__showDropSiteFeedback$($cell$$36_mouseX$$27$$), this.$_dropSite$ = $cell$$36_mouseX$$27$$)
  }else {
    return this.$_view$.$__showDropSiteFeedback$(D.$JSCompiler_alias_NULL$$), D.$JSCompiler_alias_NULL$$
  }
  return $clientIds$$12$$[0]
};
D.$DvtNBoxDropTarget$$.prototype.$getDropSite$ = function $$DvtNBoxDropTarget$$$$$getDropSite$$($mouseX$$28$$, $mouseY$$28$$) {
  var $cell$$37_data$$79$$ = (0,D.$JSCompiler_StaticMethods___getCellUnderPoint$$)(this.$_view$, $mouseX$$28$$, $mouseY$$28$$);
  return $cell$$37_data$$79$$ ? ($cell$$37_data$$79$$ = $cell$$37_data$$79$$.getData(), {$row$:$cell$$37_data$$79$$[D.$DvtNBoxConstants$$.$ROW$], $column$:$cell$$37_data$$79$$[D.$DvtNBoxConstants$$.$COLUMN$]}) : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxEventManager$$ = function $$DvtNBoxEventManager$$$($nbox$$7$$) {
  this.Init($nbox$$7$$.$getCtx$(), $nbox$$7$$.$processEvent$, $nbox$$7$$);
  this.$_nbox$ = $nbox$$7$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxEventManager$$, D.$DvtEventManager$$, "DvtNBoxEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBoxEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$OnClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnClickInternal$$($event$$578_obj$$304$$) {
  $event$$578_obj$$304$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$578_obj$$304$$.target);
  this.$_processActionEvent$($event$$578_obj$$304$$)
};
D.$JSCompiler_prototypeAlias$$.$OnDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$OnDblClickInternal$$($event$$579$$) {
  (0,D.$JSCompiler_StaticMethods__handleDblClick$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$579$$))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchDblClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchDblClickInternal$$($event$$580$$) {
  (0,D.$JSCompiler_StaticMethods__handleDblClick$$)(this, (0,D.$JSCompiler_StaticMethods_GetCurrentTargetForEvent$$)(this, $event$$580$$))
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchHoverEndInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchHoverEndInternal$$($event$$581_obj$$305$$) {
  $event$$581_obj$$305$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$581_obj$$305$$.target);
  this.$_processActionEvent$($event$$581_obj$$305$$)
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($event$$582_obj$$306$$) {
  $event$$582_obj$$306$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this, $event$$582_obj$$306$$.target);
  this.$_processActionEvent$($event$$582_obj$$306$$)
};
D.$JSCompiler_StaticMethods__handleDblClick$$ = function $$JSCompiler_StaticMethods__handleDblClick$$$($JSCompiler_StaticMethods__handleDblClick$self$$, $displayable$$66$$) {
  var $logicalObject$$12$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)($JSCompiler_StaticMethods__handleDblClick$self$$, $displayable$$66$$);
  $logicalObject$$12$$ && ($logicalObject$$12$$.$isDoubleClickable$ && $logicalObject$$12$$.$isDoubleClickable$() && $logicalObject$$12$$.$handleDoubleClick$) && $logicalObject$$12$$.$handleDoubleClick$()
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtNBoxEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$583$$) {
  var $eventConsumed$$3$$ = D.$JSCompiler_alias_FALSE$$, $keyCode$$40$$ = $event$$583$$.keyCode, $navigable$$17$$ = this.$getFocus$();
  if(13 == $keyCode$$40$$ || 27 == $keyCode$$40$$) {
    $navigable$$17$$ && $navigable$$17$$.$HandleKeyboardEvent$ && $navigable$$17$$.$HandleKeyboardEvent$($event$$583$$)
  }else {
    if(32 == $event$$583$$.keyCode && $event$$583$$.ctrlKey) {
      if($navigable$$17$$ instanceof D.$DvtNBoxCategoryNode$$ || $navigable$$17$$ instanceof D.$DvtNBoxNode$$) {
        $eventConsumed$$3$$ = D.$DvtNBoxEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$583$$)
      }
    }else {
      $eventConsumed$$3$$ = D.$DvtNBoxEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$583$$)
    }
  }
  return $eventConsumed$$3$$
};
D.$JSCompiler_prototypeAlias$$.$ProcessRolloverEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessRolloverEvent$$($event$$584_options$$200$$, $categories$$21_hoverBehaviorDelay$$3_obj$$307$$, $bOver$$10_rolloverEvent$$4$$) {
  $event$$584_options$$200$$ = this.$_nbox$.$getOptions$();
  "dim" == $event$$584_options$$200$$.hoverBehavior && ($categories$$21_hoverBehaviorDelay$$3_obj$$307$$ = $categories$$21_hoverBehaviorDelay$$3_obj$$307$$.$getCategories$ ? $categories$$21_hoverBehaviorDelay$$3_obj$$307$$.$getCategories$() : [], $event$$584_options$$200$$.highlightedCategories = $bOver$$10_rolloverEvent$$4$$ ? $categories$$21_hoverBehaviorDelay$$3_obj$$307$$.slice() : D.$JSCompiler_alias_NULL$$, $bOver$$10_rolloverEvent$$4$$ = new D.$DvtCategoryRolloverEvent$$($bOver$$10_rolloverEvent$$4$$ ? 
  "categoryRollOver" : "categoryRollOut", $event$$584_options$$200$$.highlightedCategories), $categories$$21_hoverBehaviorDelay$$3_obj$$307$$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)($event$$584_options$$200$$.styleDefaults.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($bOver$$10_rolloverEvent$$4$$, (0,D.$JSCompiler_StaticMethods_getNodeDisplayables$$)(this.$_nbox$), $categories$$21_hoverBehaviorDelay$$3_obj$$307$$, "any" == $event$$584_options$$200$$.highlightMatch))
};
D.$JSCompiler_prototypeAlias$$.$CreateCategoryRolloverHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateCategoryRolloverHandler$$($callback$$122$$, $callbackObj$$76$$) {
  return new D.$DvtNBoxCategoryRolloverHandler$$($callback$$122$$, $callbackObj$$76$$)
};
D.$JSCompiler_prototypeAlias$$.$_processActionEvent$ = function $$JSCompiler_prototypeAlias$$$$_processActionEvent$$($obj$$308$$) {
  $obj$$308$$ && ($obj$$308$$.$getAction$ && $obj$$308$$.$getAction$()) && this.$FireEvent$(new D.$DvtActionEvent$$("action", $obj$$308$$.$getAction$(), $obj$$308$$.getId()))
};
D.$JSCompiler_prototypeAlias$$.$GetTouchResponse$ = (0,D.$JSCompiler_returnArg$$)("touchHold");
D.$DvtNBoxKeyboardHandler$$ = function $$DvtNBoxKeyboardHandler$$$($manager$$22$$, $nbox$$8$$) {
  this.Init($manager$$22$$, $nbox$$8$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxKeyboardHandler$$, D.$DvtKeyboardHandler$$, "DvtNBoxKeyboardHandler");
D.$DvtNBoxKeyboardHandler$$.prototype.Init = function $$DvtNBoxKeyboardHandler$$$$Init$($manager$$23$$, $nbox$$9$$) {
  D.$DvtNBoxKeyboardHandler$$.$superclass$.Init.call(this, $manager$$23$$);
  this.$_nbox$ = $nbox$$9$$
};
D.$DvtNBoxKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtNBoxKeyboardHandler$$$$$processKeyDown$$($event$$585_index$$225$$) {
  if(9 == $event$$585_index$$225$$.keyCode) {
    var $currentNavigable$$13_drawerData$$2_groups$$6$$ = this.$_eventManager$.$getFocus$(), $groupNodes$$1_next$$9$$ = D.$JSCompiler_alias_NULL$$;
    (0,D.$DvtEventManager$consumeEvent$$)($event$$585_index$$225$$);
    if($currentNavigable$$13_drawerData$$2_groups$$6$$) {
      $groupNodes$$1_next$$9$$ = $currentNavigable$$13_drawerData$$2_groups$$6$$
    }else {
      if($currentNavigable$$13_drawerData$$2_groups$$6$$ = D.$DvtNBoxDataUtils$$.$getDrawer$(this.$_nbox$)) {
        $groupNodes$$1_next$$9$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $currentNavigable$$13_drawerData$$2_groups$$6$$)
      }else {
        if(D.$DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nbox$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_ACROSS_CELLS$ && ($currentNavigable$$13_drawerData$$2_groups$$6$$ = this.$_nbox$.$getOptions$().__groups)) {
          var $groupNodes$$1_next$$9$$ = [], $id$$235$$;
          for($id$$235$$ in $currentNavigable$$13_drawerData$$2_groups$$6$$) {
            var $displayable$$67$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, $currentNavigable$$13_drawerData$$2_groups$$6$$[$id$$235$$]);
            $displayable$$67$$ && $groupNodes$$1_next$$9$$.push($displayable$$67$$)
          }
          $groupNodes$$1_next$$9$$ = (0,D.$DvtNBoxKeyboardHandler$getNextNavigableCategoryNode$$)(D.$JSCompiler_alias_NULL$$, $event$$585_index$$225$$, $groupNodes$$1_next$$9$$)
        }
      }
      $groupNodes$$1_next$$9$$ || ($event$$585_index$$225$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$(this.$_nbox$) * (D.$DvtNBoxDataUtils$$.$getRowCount$(this.$_nbox$) - 1), $groupNodes$$1_next$$9$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nbox$, D.$DvtNBoxDataUtils$$.$getCell$(this.$_nbox$, $event$$585_index$$225$$)))
    }
    return $groupNodes$$1_next$$9$$
  }
  return D.$DvtNBoxKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$585_index$$225$$)
};
D.$DvtNBoxKeyboardHandler$$.prototype.$isSelectionEvent$ = function $$DvtNBoxKeyboardHandler$$$$$isSelectionEvent$$($event$$586$$) {
  return 9 == $event$$586$$.keyCode ? D.$JSCompiler_alias_FALSE$$ : this.$isNavigationEvent$($event$$586$$) && !$event$$586$$.ctrlKey
};
D.$DvtNBoxKeyboardHandler$$.prototype.$isMultiSelectEvent$ = function $$DvtNBoxKeyboardHandler$$$$$isMultiSelectEvent$$($event$$587$$) {
  return 32 == $event$$587$$.keyCode && $event$$587$$.ctrlKey
};
D.$DvtNBoxKeyboardHandler$getKeyboardBoundingBox$$ = function $$DvtNBoxKeyboardHandler$getKeyboardBoundingBox$$$($obj$$309_stageP2$$4$$) {
  var $bounds$$138$$ = $obj$$309_stageP2$$4$$.$getDimensions$(), $stageP1$$4$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($obj$$309_stageP2$$4$$, new D.$DvtPoint$$($bounds$$138$$.x, $bounds$$138$$.y));
  $obj$$309_stageP2$$4$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)($obj$$309_stageP2$$4$$, new D.$DvtPoint$$($bounds$$138$$.x + $bounds$$138$$.$w$, $bounds$$138$$.y + $bounds$$138$$.$h$));
  return new D.$DvtRectangle$$($stageP1$$4$$.x, $stageP1$$4$$.y, $obj$$309_stageP2$$4$$.x - $stageP1$$4$$.x, $obj$$309_stageP2$$4$$.y - $stageP1$$4$$.y)
};
D.$DvtNBoxKeyboardHandler$$.prototype.$isNavigationEvent$ = function $$DvtNBoxKeyboardHandler$$$$$isNavigationEvent$$($event$$588$$) {
  var $retVal$$2$$ = D.$JSCompiler_alias_FALSE$$;
  switch($event$$588$$.keyCode) {
    case 219:
    ;
    case 221:
      $retVal$$2$$ = D.$JSCompiler_alias_TRUE$$;
      break;
    default:
      $retVal$$2$$ = D.$DvtNBoxKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $event$$588$$)
  }
  return $retVal$$2$$
};
D.$DvtNBoxKeyboardHandler$getNextNavigableCategoryNode$$ = function $$DvtNBoxKeyboardHandler$getNextNavigableCategoryNode$$$($curr$$, $bNext$$6_event$$589$$, $navigableItems$$3$$) {
  if(!$navigableItems$$3$$ || 0 >= $navigableItems$$3$$.length) {
    return D.$JSCompiler_alias_NULL$$
  }
  $navigableItems$$3$$[0] instanceof D.$DvtNBoxCategoryNode$$ && $navigableItems$$3$$.sort(function($curr$$, $bNext$$6_event$$589$$) {
    return D.$DvtNBoxCategoryNode$$.$compareSize$($curr$$.getData(), $bNext$$6_event$$589$$.getData())
  });
  if($curr$$ == D.$JSCompiler_alias_NULL$$) {
    return $navigableItems$$3$$[0]
  }
  var $next$$10$$ = $curr$$;
  $bNext$$6_event$$589$$ = 39 == $bNext$$6_event$$589$$.keyCode || 40 == $bNext$$6_event$$589$$.keyCode ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$;
  for(var $itemCount$$1$$ = $navigableItems$$3$$.length, $i$$724$$ = 0;$i$$724$$ < $itemCount$$1$$;$i$$724$$++) {
    if($navigableItems$$3$$[$i$$724$$] === $curr$$) {
      $next$$10$$ = $navigableItems$$3$$[$bNext$$6_event$$589$$ ? $i$$724$$ + 1 < $itemCount$$1$$ ? $i$$724$$ + 1 : $i$$724$$ : 0 <= $i$$724$$ - 1 ? $i$$724$$ - 1 : $i$$724$$];
      break
    }
  }
  return $next$$10$$
};
D.$DvtNBoxAutomation$$ = function $$DvtNBoxAutomation$$$($dvtComponent$$12$$) {
  this.Init($dvtComponent$$12$$)
};
(0,D.$goog$exportPath_$$)("DvtNBoxAutomation", D.$DvtNBoxAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxAutomation$$, D.$DvtAutomation$$, "DvtNBoxAutomation");
D.$DvtNBoxAutomation$$.prototype.Init = (0,D.$JSCompiler_set$$)("$_nBox$");
D.$DvtNBoxAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtNBoxAutomation$$$$$GetSubIdForDomElement$$($displayable$$62$$) {
  for(var $cell$$33_id$$232$$ = (0,D.$JSCompiler_StaticMethods__getParentObject$$)($displayable$$62$$, "DvtNBoxCell"), $drawer$$2$$ = (0,D.$JSCompiler_StaticMethods__getParentObject$$)($displayable$$62$$, "DvtNBoxDrawer");$displayable$$62$$ && !($displayable$$62$$ instanceof D.$DvtNBox$$);) {
    var $nBox$$ = this.$getComponent$(), $component$$16_r$$54_values$$10$$, $action$$21$$;
    if($cell$$33_id$$232$$) {
      $component$$16_r$$54_values$$10$$ = $cell$$33_id$$232$$.getData().row;
      var $c$$35_index$$220_indices$$10$$ = $cell$$33_id$$232$$.getData().column, $container$$139_data$$65_node$$250$$ = $cell$$33_id$$232$$.$getChildContainer$();
      $component$$16_r$$54_values$$10$$ = (0,D.$JSCompiler_StaticMethods__createBrackets$$)([$component$$16_r$$54_values$$10$$, $c$$35_index$$220_indices$$10$$]);
      $component$$16_r$$54_values$$10$$ = "cell" + $component$$16_r$$54_values$$10$$;
      if($displayable$$62$$ instanceof D.$DvtNBoxCell$$) {
        return this.$_createSubId$($component$$16_r$$54_values$$10$$, $action$$21$$)
      }
      if($displayable$$62$$ instanceof D.$DvtButton$$ && (0,D.$JSCompiler_StaticMethods__getParentObject$$)($displayable$$62$$, "DvtNBoxNodeOverflow")) {
        return $action$$21$$ = "overflow", this.$_createSubId$($component$$16_r$$54_values$$10$$, $action$$21$$)
      }
      if($displayable$$62$$ instanceof D.$DvtNBoxNode$$) {
        $c$$35_index$$220_indices$$10$$ = 0;
        for($container$$139_data$$65_node$$250$$ = D.$DvtNBoxDataUtils$$.$getFirstNavigableNode$($nBox$$, $container$$139_data$$65_node$$250$$);$container$$139_data$$65_node$$250$$;) {
          if($container$$139_data$$65_node$$250$$ == $displayable$$62$$) {
            return $action$$21$$ = "node" + (0,D.$JSCompiler_StaticMethods__createBrackets$$)([$c$$35_index$$220_indices$$10$$]), this.$_createSubId$($component$$16_r$$54_values$$10$$, $action$$21$$)
          }
          $container$$139_data$$65_node$$250$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nBox$$, $container$$139_data$$65_node$$250$$.getData().__next);
          $c$$35_index$$220_indices$$10$$ += 1
        }
      }
      if($displayable$$62$$ instanceof D.$DvtNBoxCategoryNode$$) {
        return $cell$$33_id$$232$$ = $displayable$$62$$.getData().id, $action$$21$$ = "groupNode", $action$$21$$ = D.$DvtNBoxDataUtils$$.$getNode$($nBox$$, $displayable$$62$$.getData().nodeIndices[0]).groupCategory ? $action$$21$$ + (0,D.$JSCompiler_StaticMethods__createBrackets$$)([$cell$$33_id$$232$$]) : $action$$21$$ + (0,D.$JSCompiler_StaticMethods__createBraces$$)($cell$$33_id$$232$$.split(";")), this.$_createSubId$($component$$16_r$$54_values$$10$$, $action$$21$$)
      }
    }
    if($drawer$$2$$) {
      $component$$16_r$$54_values$$10$$ = "dialog";
      if($displayable$$62$$ instanceof D.$DvtNBoxDrawer$$) {
        return this.$_createSubId$($component$$16_r$$54_values$$10$$, $action$$21$$)
      }
      if($displayable$$62$$ instanceof D.$DvtButton$$) {
        return $action$$21$$ = "closeButton", this.$_createSubId$($component$$16_r$$54_values$$10$$, $action$$21$$)
      }
      if($displayable$$62$$ instanceof D.$DvtNBoxNode$$) {
        for(var $c$$35_index$$220_indices$$10$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$($nBox$$, $drawer$$2$$.getData().id).nodeIndices, $i$$715$$ = 0;$i$$715$$ < $c$$35_index$$220_indices$$10$$.length;$i$$715$$++) {
          if($container$$139_data$$65_node$$250$$ = D.$DvtNBoxDataUtils$$.$getNode$($nBox$$, $c$$35_index$$220_indices$$10$$[$i$$715$$]), $container$$139_data$$65_node$$250$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nBox$$, $container$$139_data$$65_node$$250$$), $container$$139_data$$65_node$$250$$ == $displayable$$62$$) {
            return $action$$21$$ = "node" + (0,D.$JSCompiler_StaticMethods__createBrackets$$)([$i$$715$$]), this.$_createSubId$($component$$16_r$$54_values$$10$$, $action$$21$$)
          }
        }
      }
    }
    if($displayable$$62$$ instanceof D.$DvtNBoxCategoryNode$$) {
      return $cell$$33_id$$232$$ = $displayable$$62$$.getData().id, $component$$16_r$$54_values$$10$$ = "groupNode", $component$$16_r$$54_values$$10$$ = D.$DvtNBoxDataUtils$$.$getNode$($nBox$$, $displayable$$62$$.getData().nodeIndices[0]).groupCategory ? $component$$16_r$$54_values$$10$$ + (0,D.$JSCompiler_StaticMethods__createBrackets$$)([$cell$$33_id$$232$$]) : $component$$16_r$$54_values$$10$$ + (0,D.$JSCompiler_StaticMethods__createBraces$$)($cell$$33_id$$232$$.split(";")), this.$_createSubId$($component$$16_r$$54_values$$10$$, 
      $action$$21$$)
    }
    $displayable$$62$$ = $displayable$$62$$.getParent()
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxAutomation$$.prototype.$_createSubId$ = function $$DvtNBoxAutomation$$$$$_createSubId$$($component$$17$$, $action$$22$$) {
  var $subId$$21$$ = $component$$17$$;
  $action$$22$$ && ($subId$$21$$ += "#" + $action$$22$$);
  return $subId$$21$$
};
D.$DvtNBoxAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtNBoxAutomation$$$$$getDomElementForSubId$$($displayable$$63_nodeIndex$$7_parsedId_subId$$22$$) {
  var $id$$233_nBox$$1$$ = this.$getComponent$();
  if("tooltip" == $displayable$$63_nodeIndex$$7_parsedId_subId$$22$$) {
    return(0,D.$JSCompiler_StaticMethods_GetTooltipElement$$)($id$$233_nBox$$1$$)
  }
  $displayable$$63_nodeIndex$$7_parsedId_subId$$22$$ = this.$_parseSubId$($displayable$$63_nodeIndex$$7_parsedId_subId$$22$$);
  var $component$$18_node$$251_rowIndex$$inline_7347$$ = $displayable$$63_nodeIndex$$7_parsedId_subId$$22$$.component, $action$$23_nodeIdx$$1$$ = $displayable$$63_nodeIndex$$7_parsedId_subId$$22$$.action, $j$$94_values$$11$$ = D.$JSCompiler_alias_NULL$$, $cell$$34_colCount$$inline_7346_container$$140_data$$66$$ = D.$JSCompiler_alias_NULL$$;
  $displayable$$63_nodeIndex$$7_parsedId_subId$$22$$ = D.$JSCompiler_alias_NULL$$;
  if(0 === $component$$18_node$$251_rowIndex$$inline_7347$$.lastIndexOf("cell", 0)) {
    var $colIndex$$inline_7348_count$$18_i$$716_values$$inline_7344$$ = $j$$94_values$$11$$ = (0,D.$JSCompiler_StaticMethods__parseBrackets$$)($component$$18_node$$251_rowIndex$$inline_7347$$), $nBox$$inline_7345$$ = this.$getComponent$(), $cell$$34_colCount$$inline_7346_container$$140_data$$66$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nBox$$inline_7345$$), $component$$18_node$$251_rowIndex$$inline_7347$$ = D.$DvtNBoxDataUtils$$.$getRowIndex$($nBox$$inline_7345$$, $colIndex$$inline_7348_count$$18_i$$716_values$$inline_7344$$[0]), 
    $colIndex$$inline_7348_count$$18_i$$716_values$$inline_7344$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($nBox$$inline_7345$$, $colIndex$$inline_7348_count$$18_i$$716_values$$inline_7344$$[1]), $cell$$34_colCount$$inline_7346_container$$140_data$$66$$ = D.$DvtNBoxDataUtils$$.$getCell$($id$$233_nBox$$1$$, $colIndex$$inline_7348_count$$18_i$$716_values$$inline_7344$$ != D.$JSCompiler_alias_NULL$$ && $component$$18_node$$251_rowIndex$$inline_7347$$ != D.$JSCompiler_alias_NULL$$ ? $colIndex$$inline_7348_count$$18_i$$716_values$$inline_7344$$ + 
    $cell$$34_colCount$$inline_7346_container$$140_data$$66$$ * $component$$18_node$$251_rowIndex$$inline_7347$$ : D.$JSCompiler_alias_NULL$$);
    if(!$cell$$34_colCount$$inline_7346_container$$140_data$$66$$) {
      return D.$JSCompiler_alias_NULL$$
    }
    $cell$$34_colCount$$inline_7346_container$$140_data$$66$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($id$$233_nBox$$1$$, $cell$$34_colCount$$inline_7346_container$$140_data$$66$$);
    if($action$$23_nodeIdx$$1$$) {
      $cell$$34_colCount$$inline_7346_container$$140_data$$66$$ = $cell$$34_colCount$$inline_7346_container$$140_data$$66$$.$getChildContainer$();
      if("overflow" == $action$$23_nodeIdx$$1$$) {
        for($colIndex$$inline_7348_count$$18_i$$716_values$$inline_7344$$ = $cell$$34_colCount$$inline_7346_container$$140_data$$66$$.$getNumChildren$();0 < $colIndex$$inline_7348_count$$18_i$$716_values$$inline_7344$$;$colIndex$$inline_7348_count$$18_i$$716_values$$inline_7344$$--) {
          if($cell$$34_colCount$$inline_7346_container$$140_data$$66$$.$getChildAt$($colIndex$$inline_7348_count$$18_i$$716_values$$inline_7344$$ - 1) instanceof D.$DvtNBoxNodeOverflow$$) {
            $displayable$$63_nodeIndex$$7_parsedId_subId$$22$$ = $cell$$34_colCount$$inline_7346_container$$140_data$$66$$.$getChildAt$($colIndex$$inline_7348_count$$18_i$$716_values$$inline_7344$$ - 1).$_button$;
            break
          }
        }
      }
      if(0 === $action$$23_nodeIdx$$1$$.lastIndexOf("node", 0)) {
        $j$$94_values$$11$$ = (0,D.$JSCompiler_StaticMethods__parseBrackets$$)($action$$23_nodeIdx$$1$$, D.$JSCompiler_alias_TRUE$$);
        $displayable$$63_nodeIndex$$7_parsedId_subId$$22$$ = $j$$94_values$$11$$[0];
        if(0 > $displayable$$63_nodeIndex$$7_parsedId_subId$$22$$) {
          return D.$JSCompiler_alias_NULL$$
        }
        $component$$18_node$$251_rowIndex$$inline_7347$$ = D.$DvtNBoxDataUtils$$.$getFirstNavigableNode$($id$$233_nBox$$1$$, $cell$$34_colCount$$inline_7346_container$$140_data$$66$$);
        for($colIndex$$inline_7348_count$$18_i$$716_values$$inline_7344$$ = 0;$colIndex$$inline_7348_count$$18_i$$716_values$$inline_7344$$ < $displayable$$63_nodeIndex$$7_parsedId_subId$$22$$;) {
          if($component$$18_node$$251_rowIndex$$inline_7347$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($id$$233_nBox$$1$$, $component$$18_node$$251_rowIndex$$inline_7347$$.getData().__next), $colIndex$$inline_7348_count$$18_i$$716_values$$inline_7344$$ += 1, "DvtNBoxNode" != $component$$18_node$$251_rowIndex$$inline_7347$$.$getTypeName$()) {
            return D.$JSCompiler_alias_NULL$$
          }
        }
        $displayable$$63_nodeIndex$$7_parsedId_subId$$22$$ = $component$$18_node$$251_rowIndex$$inline_7347$$
      }
      if(0 === $action$$23_nodeIdx$$1$$.lastIndexOf("groupNode", 0)) {
        var $categoryNode$$1_dialog_value$$182$$;
        -1 < $action$$23_nodeIdx$$1$$.indexOf("{") ? $j$$94_values$$11$$ = (0,D.$JSCompiler_StaticMethods__parseBraces$$)($action$$23_nodeIdx$$1$$) : $categoryNode$$1_dialog_value$$182$$ = $action$$23_nodeIdx$$1$$.substring($action$$23_nodeIdx$$1$$.indexOf("[") + 1, $action$$23_nodeIdx$$1$$.indexOf("]"));
        for($colIndex$$inline_7348_count$$18_i$$716_values$$inline_7344$$ = 0;$colIndex$$inline_7348_count$$18_i$$716_values$$inline_7344$$ < $cell$$34_colCount$$inline_7346_container$$140_data$$66$$.$getNumChildren$();$colIndex$$inline_7348_count$$18_i$$716_values$$inline_7344$$++) {
          if($component$$18_node$$251_rowIndex$$inline_7347$$ = $cell$$34_colCount$$inline_7346_container$$140_data$$66$$.$getChildAt$($colIndex$$inline_7348_count$$18_i$$716_values$$inline_7344$$), $component$$18_node$$251_rowIndex$$inline_7347$$ instanceof D.$DvtNBoxCategoryNode$$) {
            if($id$$233_nBox$$1$$ = $component$$18_node$$251_rowIndex$$inline_7347$$.getData().id, $j$$94_values$$11$$ && (0,D.$JSCompiler_StaticMethods__compareCategories$$)($j$$94_values$$11$$, $id$$233_nBox$$1$$.split(";"))) {
              $displayable$$63_nodeIndex$$7_parsedId_subId$$22$$ = $component$$18_node$$251_rowIndex$$inline_7347$$;
              break
            }else {
              if($categoryNode$$1_dialog_value$$182$$ && $categoryNode$$1_dialog_value$$182$$ == $id$$233_nBox$$1$$) {
                $displayable$$63_nodeIndex$$7_parsedId_subId$$22$$ = $component$$18_node$$251_rowIndex$$inline_7347$$;
                break
              }
            }
          }
        }
      }
    }else {
      $displayable$$63_nodeIndex$$7_parsedId_subId$$22$$ = $cell$$34_colCount$$inline_7346_container$$140_data$$66$$
    }
  }else {
    if(0 === $component$$18_node$$251_rowIndex$$inline_7347$$.lastIndexOf("groupNode", 0)) {
      $cell$$34_colCount$$inline_7346_container$$140_data$$66$$ = $id$$233_nBox$$1$$.$getChildContainer$();
      -1 < $component$$18_node$$251_rowIndex$$inline_7347$$.indexOf("{") ? $j$$94_values$$11$$ = (0,D.$JSCompiler_StaticMethods__parseBraces$$)($component$$18_node$$251_rowIndex$$inline_7347$$) : $categoryNode$$1_dialog_value$$182$$ = $component$$18_node$$251_rowIndex$$inline_7347$$.substring($component$$18_node$$251_rowIndex$$inline_7347$$.indexOf("[") + 1, $component$$18_node$$251_rowIndex$$inline_7347$$.indexOf("]"));
      for($colIndex$$inline_7348_count$$18_i$$716_values$$inline_7344$$ = 0;$colIndex$$inline_7348_count$$18_i$$716_values$$inline_7344$$ < $cell$$34_colCount$$inline_7346_container$$140_data$$66$$.$getNumChildren$();$colIndex$$inline_7348_count$$18_i$$716_values$$inline_7344$$++) {
        if($component$$18_node$$251_rowIndex$$inline_7347$$ = $cell$$34_colCount$$inline_7346_container$$140_data$$66$$.$getChildAt$($colIndex$$inline_7348_count$$18_i$$716_values$$inline_7344$$), $component$$18_node$$251_rowIndex$$inline_7347$$ instanceof D.$DvtNBoxCategoryNode$$) {
          if($id$$233_nBox$$1$$ = $component$$18_node$$251_rowIndex$$inline_7347$$.getData().id, $j$$94_values$$11$$ && (0,D.$JSCompiler_StaticMethods__compareCategories$$)($j$$94_values$$11$$, $id$$233_nBox$$1$$.split(";"))) {
            $displayable$$63_nodeIndex$$7_parsedId_subId$$22$$ = $component$$18_node$$251_rowIndex$$inline_7347$$;
            break
          }else {
            if($categoryNode$$1_dialog_value$$182$$ && $categoryNode$$1_dialog_value$$182$$ == $id$$233_nBox$$1$$) {
              $displayable$$63_nodeIndex$$7_parsedId_subId$$22$$ = $component$$18_node$$251_rowIndex$$inline_7347$$;
              break
            }
          }
        }
      }
    }else {
      if("dialog" === $component$$18_node$$251_rowIndex$$inline_7347$$ && ($cell$$34_colCount$$inline_7346_container$$140_data$$66$$ = $id$$233_nBox$$1$$.$getChildContainer$())) {
        for($colIndex$$inline_7348_count$$18_i$$716_values$$inline_7344$$ = 0;$colIndex$$inline_7348_count$$18_i$$716_values$$inline_7344$$ < $cell$$34_colCount$$inline_7346_container$$140_data$$66$$.$getNumChildren$();$colIndex$$inline_7348_count$$18_i$$716_values$$inline_7344$$++) {
          if($cell$$34_colCount$$inline_7346_container$$140_data$$66$$.$getChildAt$($colIndex$$inline_7348_count$$18_i$$716_values$$inline_7344$$) instanceof D.$DvtNBoxDrawer$$) {
            $categoryNode$$1_dialog_value$$182$$ = $cell$$34_colCount$$inline_7346_container$$140_data$$66$$.$getChildAt$($colIndex$$inline_7348_count$$18_i$$716_values$$inline_7344$$);
            if($action$$23_nodeIdx$$1$$) {
              if("closeButton" == $action$$23_nodeIdx$$1$$) {
                for($j$$94_values$$11$$ = 0;$j$$94_values$$11$$ < $categoryNode$$1_dialog_value$$182$$.$getNumChildren$();$j$$94_values$$11$$++) {
                  $categoryNode$$1_dialog_value$$182$$.$getChildAt$($j$$94_values$$11$$) instanceof D.$DvtButton$$ && ($displayable$$63_nodeIndex$$7_parsedId_subId$$22$$ = $categoryNode$$1_dialog_value$$182$$.$getChildAt$($j$$94_values$$11$$))
                }
              }
              if(0 === $action$$23_nodeIdx$$1$$.lastIndexOf("node", 0) && ($j$$94_values$$11$$ = (0,D.$JSCompiler_StaticMethods__parseBrackets$$)($action$$23_nodeIdx$$1$$, D.$JSCompiler_alias_TRUE$$), $action$$23_nodeIdx$$1$$ = $j$$94_values$$11$$[0], $categoryNode$$1_dialog_value$$182$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$($id$$233_nBox$$1$$, $categoryNode$$1_dialog_value$$182$$.getData().id))) {
                $component$$18_node$$251_rowIndex$$inline_7347$$ = D.$DvtNBoxDataUtils$$.$getNode$($id$$233_nBox$$1$$, $categoryNode$$1_dialog_value$$182$$.nodeIndices[$action$$23_nodeIdx$$1$$]);
                if(!$component$$18_node$$251_rowIndex$$inline_7347$$) {
                  return D.$JSCompiler_alias_NULL$$
                }
                $displayable$$63_nodeIndex$$7_parsedId_subId$$22$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($id$$233_nBox$$1$$, $component$$18_node$$251_rowIndex$$inline_7347$$)
              }
            }else {
              $displayable$$63_nodeIndex$$7_parsedId_subId$$22$$ = $categoryNode$$1_dialog_value$$182$$
            }
            break
          }
        }
      }
    }
  }
  return $displayable$$63_nodeIndex$$7_parsedId_subId$$22$$ ? $displayable$$63_nodeIndex$$7_parsedId_subId$$22$$.$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxAutomation$$.prototype.getDomElementForSubId = D.$DvtNBoxAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtNBoxAutomation$$.prototype.$_parseSubId$ = function $$DvtNBoxAutomation$$$$$_parseSubId$$($subId$$23$$) {
  var $component$$19$$ = D.$JSCompiler_alias_NULL$$, $action$$24$$ = D.$JSCompiler_alias_NULL$$, $hashIndex$$ = $subId$$23$$.indexOf("#");
  -1 !== $hashIndex$$ ? ($component$$19$$ = $subId$$23$$.substring(0, $hashIndex$$), $action$$24$$ = $subId$$23$$.substring($hashIndex$$ + 1)) : $component$$19$$ = $subId$$23$$;
  return{component:$component$$19$$, action:$action$$24$$}
};
D.$DvtNBoxAutomation$$.prototype.$getComponent$ = (0,D.$JSCompiler_get$$)("$_nBox$");
D.$JSCompiler_StaticMethods__parseBrackets$$ = function $$JSCompiler_StaticMethods__parseBrackets$$$($str$$17$$, $bParseInt$$) {
  var $values$$12$$ = $str$$17$$.substring($str$$17$$.indexOf("[") + 1, $str$$17$$.indexOf("]")).split(",");
  if($bParseInt$$) {
    for(var $i$$717$$ = 0;$i$$717$$ < $values$$12$$.length;$i$$717$$++) {
      $values$$12$$[$i$$717$$] = (0,window.parseInt)($values$$12$$[$i$$717$$])
    }
  }
  return 0 < $values$$12$$.length ? $values$$12$$ : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__createBrackets$$ = function $$JSCompiler_StaticMethods__createBrackets$$$($values$$13$$) {
  return 0 < $values$$13$$.length ? "[" + $values$$13$$.join(",") + "]" : ""
};
D.$JSCompiler_StaticMethods__parseBraces$$ = function $$JSCompiler_StaticMethods__parseBraces$$$($str$$18$$) {
  return $str$$18$$.substring($str$$18$$.indexOf("{") + 1, $str$$18$$.lastIndexOf("}")).split(",")
};
D.$JSCompiler_StaticMethods__createBraces$$ = function $$JSCompiler_StaticMethods__createBraces$$$($values$$14$$) {
  for(var $str$$19$$ = "{", $i$$718$$ = 0;$i$$718$$ < $values$$14$$.length;$i$$718$$++) {
    $str$$19$$ += $values$$14$$[$i$$718$$].trim() + ","
  }
  return $str$$19$$.substring(0, $str$$19$$.length - 1) + "}"
};
D.$JSCompiler_StaticMethods__compareCategories$$ = function $$JSCompiler_StaticMethods__compareCategories$$$($arr1$$, $arr2$$) {
  if($arr1$$.length != $arr2$$.length) {
    return D.$JSCompiler_alias_FALSE$$
  }
  $arr1$$.sort();
  $arr2$$.sort();
  for(var $i$$719$$ = 0;$i$$719$$ < $arr1$$.length;$i$$719$$++) {
    if($arr1$$[$i$$719$$].trim() != $arr2$$[$i$$719$$].trim()) {
      return D.$JSCompiler_alias_FALSE$$
    }
  }
  return D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_StaticMethods__getParentObject$$ = function $$JSCompiler_StaticMethods__getParentObject$$$($displayable$$64$$, $type$$240$$) {
  for(var $parent$$75$$ = $displayable$$64$$;$parent$$75$$;) {
    if($parent$$75$$.$getTypeName$() == $type$$240$$) {
      return $parent$$75$$
    }
    $parent$$75$$ = $parent$$75$$.getParent()
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxAutomation$$.prototype.getData = function $$DvtNBoxAutomation$$$$getData$($key$$120$$, $attribute$$2$$) {
  if(this.$_nBox$) {
    if("rowsTitle" == $key$$120$$) {
      if(this.$_nBox$.$getOptions$().rowsTitle) {
        return this.$_nBox$.$getOptions$().rowsTitle
      }
    }else {
      if("rowCount" == $key$$120$$) {
        var $cols$$3_data$$67_rows$$13$$ = this.$_nBox$.$getOptions$().rows;
        if($cols$$3_data$$67_rows$$13$$) {
          return $cols$$3_data$$67_rows$$13$$.length
        }
      }else {
        if("row" == $key$$120$$) {
          if(0 <= D.$DvtNBoxDataUtils$$.$getRowIndex$(this.$_nBox$, $attribute$$2$$)) {
            return $cols$$3_data$$67_rows$$13$$ = {}, $cols$$3_data$$67_rows$$13$$.label = D.$DvtNBoxDataUtils$$.$getRowLabel$(this.$_nBox$, $attribute$$2$$), $cols$$3_data$$67_rows$$13$$
          }
        }else {
          if("columnsTitle" == $key$$120$$) {
            if(this.$_nBox$.$getOptions$().columnsTitle) {
              return this.$_nBox$.$getOptions$().columnsTitle
            }
          }else {
            if("columnCount" == $key$$120$$) {
              if($cols$$3_data$$67_rows$$13$$ = this.$_nBox$.$getOptions$().columns) {
                return $cols$$3_data$$67_rows$$13$$.length
              }
            }else {
              if("column" == $key$$120$$) {
                if(0 <= D.$DvtNBoxDataUtils$$.$getColumnIndex$(this.$_nBox$, $attribute$$2$$)) {
                  return $cols$$3_data$$67_rows$$13$$ = {}, $cols$$3_data$$67_rows$$13$$.label = D.$DvtNBoxDataUtils$$.$getColumnLabel$(this.$_nBox$, $attribute$$2$$), $cols$$3_data$$67_rows$$13$$
                }
              }else {
                if("groupBehavior" == $key$$120$$) {
                  return D.$DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nBox$)
                }
              }
            }
          }
        }
      }
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxAutomation$$.prototype.getData = D.$DvtNBoxAutomation$$.prototype.getData;
D.$DvtNBoxAutomation$$.prototype.$getGroupNode$ = function $$DvtNBoxAutomation$$$$$getGroupNode$$($groupInfo$$1$$) {
  if($groupInfo$$1$$ && D.$DvtNBoxDataUtils$$.$getGrouping$(this.$_nBox$) && D.$DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nBox$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_ACROSS_CELLS$) {
    if("string" === typeof $groupInfo$$1$$) {
      return(0,D.$JSCompiler_StaticMethods__getGroupNodeData$$)(this, $groupInfo$$1$$)
    }
    var $groupData$$ = "", $key$$121$$;
    for($key$$121$$ in $groupInfo$$1$$) {
      $groupData$$ = $groupInfo$$1$$[$key$$121$$] ? $groupData$$ + ($key$$121$$ + ":" + $groupInfo$$1$$[$key$$121$$] + ";") : $groupData$$ + ($key$$121$$ + ";")
    }
    return(0,D.$JSCompiler_StaticMethods__getGroupNodeData$$)(this, $groupData$$.substring(0, $groupData$$.length - 1))
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxAutomation$$.prototype.getGroupNode = D.$DvtNBoxAutomation$$.prototype.$getGroupNode$;
D.$JSCompiler_StaticMethods__getGroupNodeData$$ = function $$JSCompiler_StaticMethods__getGroupNodeData$$$($JSCompiler_StaticMethods__getGroupNodeData$self$$, $groupData$$1$$) {
  var $categoryData_indicatorIcon$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$($JSCompiler_StaticMethods__getGroupNodeData$self$$.$_nBox$, $groupData$$1$$);
  if($categoryData_indicatorIcon$$) {
    var $categoryNode$$2$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($JSCompiler_StaticMethods__getGroupNodeData$self$$.$_nBox$, $categoryData_indicatorIcon$$);
    if($categoryNode$$2$$) {
      var $data$$68$$ = {};
      $data$$68$$.selected = $categoryNode$$2$$.$isSelected$();
      $data$$68$$.color = D.$DvtNBoxStyleUtils$$.$getCategoryNodeColor$($JSCompiler_StaticMethods__getGroupNodeData$self$$.$_nBox$, $categoryData_indicatorIcon$$);
      $data$$68$$.indicatorColor = D.$DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$($JSCompiler_StaticMethods__getGroupNodeData$self$$.$_nBox$, $categoryData_indicatorIcon$$);
      $data$$68$$.tooltip = $categoryNode$$2$$.$getShortDesc$();
      $data$$68$$.size = $categoryData_indicatorIcon$$.nodeIndices ? $categoryData_indicatorIcon$$.nodeIndices.length : -1;
      $categoryData_indicatorIcon$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($JSCompiler_StaticMethods__getGroupNodeData$self$$.$_nBox$, $categoryData_indicatorIcon$$, "indicatorIcon");
      $data$$68$$.indicatorIcon = $JSCompiler_StaticMethods__getGroupNodeData$self$$.$_getMarkerData$($categoryData_indicatorIcon$$);
      return $data$$68$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxAutomation$$.prototype.$getCell$ = function $$DvtNBoxAutomation$$$$$getCell$$($rowValue$$, $columnValue$$) {
  var $cellObj$$ = D.$DvtNBoxDataUtils$$.$getCellByRowColumn$(this.$_nBox$, $rowValue$$, $columnValue$$);
  if($cellObj$$) {
    var $cellIndex$$1$$ = $cellObj$$.$getCellIndex$(), $data$$69$$ = {};
    $data$$69$$.label = $cellObj$$.$getLabel$();
    var $colorFill$$inline_7365_style$$inline_7363$$ = D.$DvtNBoxStyleUtils$$.$getCellStyle$($cellObj$$.$_nbox$, $cellObj$$.$getCellIndex$()), $bgFill$$inline_7364$$ = $colorFill$$inline_7365_style$$inline_7363$$.$getStyle$("background"), $colorFill$$inline_7365_style$$inline_7363$$ = $colorFill$$inline_7365_style$$inline_7363$$.$getStyle$("background-color");
    $data$$69$$.background = $bgFill$$inline_7364$$ ? $bgFill$$inline_7364$$ : $colorFill$$inline_7365_style$$inline_7363$$;
    $data$$69$$.getNodeCount = function $$data$$69$$$getNodeCount$() {
      return $cellObj$$.$getNodeCount$()
    };
    $data$$69$$.rowValue = $rowValue$$;
    $data$$69$$.columnValue = $columnValue$$;
    $data$$69$$.cellIndex = $cellIndex$$1$$;
    return $data$$69$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxAutomation$$.prototype.getCell = D.$DvtNBoxAutomation$$.prototype.$getCell$;
D.$DvtNBoxAutomation$$.prototype.$getCellNode$ = function $$DvtNBoxAutomation$$$$$getCellNode$$($cellData$$2$$, $nodeIndex$$8$$) {
  if(this.$_nBox$ && !D.$DvtNBoxDataUtils$$.$getGrouping$(this.$_nBox$)) {
    var $nodeData$$39$$ = D.$DvtNBoxDataUtils$$.$getCellByRowColumn$(this.$_nBox$, $cellData$$2$$.rowValue, $cellData$$2$$.columnValue).$getNode$($nodeIndex$$8$$);
    return this.$_getNode$($nodeData$$39$$)
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxAutomation$$.prototype.getCellNode = D.$DvtNBoxAutomation$$.prototype.$getCellNode$;
D.$DvtNBoxAutomation$$.prototype.$_getNode$ = function $$DvtNBoxAutomation$$$$$_getNode$$($indicatorIcon$$1_nodeData$$40$$) {
  if($indicatorIcon$$1_nodeData$$40$$) {
    var $icon$$42_node$$252$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, $indicatorIcon$$1_nodeData$$40$$);
    if($icon$$42_node$$252$$) {
      var $data$$70$$ = {};
      $data$$70$$.selected = $icon$$42_node$$252$$.$isSelected$();
      $data$$70$$.tooltip = $icon$$42_node$$252$$.$getShortDesc$();
      $data$$70$$.color = D.$DvtNBoxStyleUtils$$.$getNodeColor$(this.$_nBox$, $indicatorIcon$$1_nodeData$$40$$);
      $data$$70$$.indicatorColor = D.$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$(this.$_nBox$, $indicatorIcon$$1_nodeData$$40$$);
      $indicatorIcon$$1_nodeData$$40$$.label && ($data$$70$$.label = $indicatorIcon$$1_nodeData$$40$$.label);
      $indicatorIcon$$1_nodeData$$40$$.secondaryLabel && ($data$$70$$.secondaryLabel = $indicatorIcon$$1_nodeData$$40$$.secondaryLabel);
      $icon$$42_node$$252$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, $indicatorIcon$$1_nodeData$$40$$, "icon");
      $data$$70$$.icon = this.$_getMarkerData$($icon$$42_node$$252$$);
      $indicatorIcon$$1_nodeData$$40$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, $indicatorIcon$$1_nodeData$$40$$, "indicatorIcon");
      $data$$70$$.indicatorIcon = this.$_getMarkerData$($indicatorIcon$$1_nodeData$$40$$);
      return $data$$70$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxAutomation$$.prototype.$getCellGroupNode$ = function $$DvtNBoxAutomation$$$$$getCellGroupNode$$($cellData$$3$$, $groupInfo$$2$$) {
  if($groupInfo$$2$$ && D.$DvtNBoxDataUtils$$.$getGrouping$(this.$_nBox$) && D.$DvtNBoxDataUtils$$.$getGroupBehavior$(this.$_nBox$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
    if("string" === typeof $groupInfo$$2$$) {
      return(0,D.$JSCompiler_StaticMethods__getGroupNodeData$$)(this, $cellData$$3$$.cellIndex + ":" + $groupInfo$$2$$)
    }
    var $groupData$$2$$ = $cellData$$3$$.cellIndex + ":", $key$$122$$;
    for($key$$122$$ in $groupInfo$$2$$) {
      $groupData$$2$$ = $groupInfo$$2$$[$key$$122$$] ? $groupData$$2$$ + ($key$$122$$ + ":" + $groupInfo$$2$$[$key$$122$$] + ";") : $groupData$$2$$ + ($key$$122$$ + ";")
    }
    return(0,D.$JSCompiler_StaticMethods__getGroupNodeData$$)(this, $groupData$$2$$.substring(0, $groupData$$2$$.length - 1))
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxAutomation$$.prototype.getCellGroupNode = D.$DvtNBoxAutomation$$.prototype.$getCellGroupNode$;
D.$DvtNBoxAutomation$$.prototype.$_getMarkerData$ = function $$DvtNBoxAutomation$$$$$_getMarkerData$$($marker$$14$$) {
  if($marker$$14$$) {
    var $data$$71$$ = {};
    $data$$71$$.shape = $marker$$14$$ instanceof D.$DvtSimpleMarker$$ ? $marker$$14$$.$getType$() : "none";
    $marker$$14$$.$getFill$() && ($data$$71$$.color = $marker$$14$$.$getFill$().$getColor$());
    return $data$$71$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxAutomation$$.prototype.$getDialog$ = function $$DvtNBoxAutomation$$$$$getDialog$$() {
  var $data$$72_drawer$$3$$ = D.$DvtNBoxDataUtils$$.$getDrawer$(this.$_nBox$);
  if($data$$72_drawer$$3$$) {
    var $categoryData$$1$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nBox$, $data$$72_drawer$$3$$.id);
    if($categoryData$$1$$) {
      var $categoryNode$$3_groupInfo$$3$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$(this.$_nBox$, $categoryData$$1$$), $data$$72_drawer$$3$$ = {};
      $data$$72_drawer$$3$$.label = $categoryNode$$3_groupInfo$$3$$.$getLabel$();
      $data$$72_drawer$$3$$.getNodeCount = function $$data$$72_drawer$$3$$$getNodeCount$() {
        return $categoryData$$1$$.nodeIndices ? $categoryData$$1$$.nodeIndices.length : -1
      };
      for(var $categoryNode$$3_groupInfo$$3$$ = {}, $categories$$19$$ = $categoryData$$1$$.id.split(";"), $idx$$29$$ = 0;$idx$$29$$ < $categories$$19$$.length;$idx$$29$$++) {
        var $row$$48$$ = $categories$$19$$[$idx$$29$$].split(":");
        $row$$48$$ && 2 == $row$$48$$.length && ($categoryNode$$3_groupInfo$$3$$[$row$$48$$[0]] = $row$$48$$[1])
      }
      $data$$72_drawer$$3$$.groupInfo = $categoryNode$$3_groupInfo$$3$$;
      return $data$$72_drawer$$3$$
    }
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxAutomation$$.prototype.getDialog = D.$DvtNBoxAutomation$$.prototype.$getDialog$;
D.$DvtNBoxAutomation$$.prototype.$getDialogNode$ = function $$DvtNBoxAutomation$$$$$getDialogNode$$($nodeData$$41_nodeIndex$$9$$) {
  var $categoryData$$2_drawer$$4$$ = D.$DvtNBoxDataUtils$$.$getDrawer$(this.$_nBox$);
  return $categoryData$$2_drawer$$4$$ && ($categoryData$$2_drawer$$4$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$(this.$_nBox$, $categoryData$$2_drawer$$4$$.id)) && $categoryData$$2_drawer$$4$$.nodeIndices && $categoryData$$2_drawer$$4$$.nodeIndices[$nodeData$$41_nodeIndex$$9$$] != D.$JSCompiler_alias_NULL$$ ? ($nodeData$$41_nodeIndex$$9$$ = D.$DvtNBoxDataUtils$$.$getNode$(this.$_nBox$, $categoryData$$2_drawer$$4$$.nodeIndices[$nodeData$$41_nodeIndex$$9$$]), this.$_getNode$($nodeData$$41_nodeIndex$$9$$)) : 
  D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxAutomation$$.prototype.getDialogNode = D.$DvtNBoxAutomation$$.prototype.$getDialogNode$;
D.$DvtNBoxRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxRenderer$$, D.$DvtObj$$, "DvtNBoxRenderer");
D.$DvtNBoxRenderer$$.$render$ = function $$DvtNBoxRenderer$$$$render$$($nbox$$45$$, $container$$155$$, $availSpace$$102$$) {
  D.$DvtNBoxRenderer$$.$_renderBackground$($nbox$$45$$, $container$$155$$, $availSpace$$102$$);
  D.$DvtNBoxRenderer$$.$_renderLegend$($nbox$$45$$, $container$$155$$, $availSpace$$102$$);
  D.$DvtNBoxRenderer$$.$_adjustAvailSpace$($availSpace$$102$$);
  var $cellCounts$$7$$ = D.$DvtNBoxRenderer$$.$_calculateCellCounts$($nbox$$45$$), $cellLayout$$8$$ = D.$DvtNBoxCellRenderer$$.$calculateCellLayout$($nbox$$45$$, $cellCounts$$7$$);
  D.$DvtNBoxRenderer$$.$_renderTitles$($nbox$$45$$, $container$$155$$, $cellLayout$$8$$, $availSpace$$102$$);
  D.$DvtNBoxRenderer$$.$_adjustAvailSpace$($availSpace$$102$$);
  D.$DvtNBoxRenderer$$.$_renderCells$($nbox$$45$$, $container$$155$$, $cellCounts$$7$$, $cellLayout$$8$$, $availSpace$$102$$);
  D.$DvtNBoxRenderer$$.$_renderNodes$($nbox$$45$$, $container$$155$$, $cellCounts$$7$$, $availSpace$$102$$);
  D.$DvtNBoxRenderer$$.$_renderInitialSelection$($nbox$$45$$);
  D.$DvtNBoxRenderer$$.$_fixZOrder$($nbox$$45$$)
};
D.$DvtNBoxRenderer$$.$_renderBackground$ = function $$DvtNBoxRenderer$$$$_renderBackground$$($clipPath$$11_nbox$$46_rect$$38$$, $container$$156$$, $availSpace$$103$$) {
  $clipPath$$11_nbox$$46_rect$$38$$ = new D.$DvtRect$$($clipPath$$11_nbox$$46_rect$$38$$.$getCtx$(), $availSpace$$103$$.x, $availSpace$$103$$.y, $availSpace$$103$$.$w$, $availSpace$$103$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($clipPath$$11_nbox$$46_rect$$38$$);
  $container$$156$$.$addChild$($clipPath$$11_nbox$$46_rect$$38$$);
  $clipPath$$11_nbox$$46_rect$$38$$ = new D.$DvtClipPath$$;
  (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$11_nbox$$46_rect$$38$$, $availSpace$$103$$.x, $availSpace$$103$$.y, $availSpace$$103$$.$w$, $availSpace$$103$$.$h$);
  (0,D.$JSCompiler_StaticMethods_setClipPath$$)($container$$156$$, $clipPath$$11_nbox$$46_rect$$38$$)
};
D.$DvtNBoxRenderer$$.$_renderLegend$ = function $$DvtNBoxRenderer$$$$_renderLegend$$($nbox$$47$$, $container$$157_legendDwn_legendDwnImg$$, $availSpace$$104$$) {
  var $legendData$$4$$ = D.$DvtNBoxDataUtils$$.$getLegend$($nbox$$47$$);
  if($legendData$$4$$ && $legendData$$4$$.sections) {
    var $dims$$60_options$$215$$ = $nbox$$47$$.$getOptions$(), $rtl$$27$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$47$$.$getCtx$()), $panelDrawer$$3$$ = new D.$DvtPanelDrawer$$($nbox$$47$$.$getCtx$(), $nbox$$47$$.$processEvent$, $nbox$$47$$, "pd1");
    $panelDrawer$$3$$.$addEvtListener$("dvtPanelDrawerEvent", $nbox$$47$$.$processEvent$, D.$JSCompiler_alias_FALSE$$, $nbox$$47$$);
    $panelDrawer$$3$$.$_dockSide$ = "top";
    $panelDrawer$$3$$.$setMaxHeight$($availSpace$$104$$.$h$ - $dims$$60_options$$215$$.__layout.legendBottomGap);
    $panelDrawer$$3$$.$setMaxWidth$($availSpace$$104$$.$w$ / 3);
    $container$$157_legendDwn_legendDwnImg$$.$addChild$($panelDrawer$$3$$);
    var $legend$$28$$ = (0,D.$DvtLegend$newInstance$$)($nbox$$47$$.$getCtx$(), $nbox$$47$$.$processEvent$, $nbox$$47$$);
    $container$$157_legendDwn_legendDwnImg$$.$addChild$($legend$$28$$);
    var $legendEna_legendEnaImg_preferredSize$$5$$ = $legend$$28$$.$getPreferredSize$($legendData$$4$$, $panelDrawer$$3$$.$getMaxContentWidth$(), $panelDrawer$$3$$.$getMaxContentHeight$());
    $legend$$28$$.$render$($legendData$$4$$, $legendEna_legendEnaImg_preferredSize$$5$$.$w$, $legendEna_legendEnaImg_preferredSize$$5$$.$h$);
    $container$$157_legendDwn_legendDwnImg$$.removeChild($legend$$28$$);
    var $legendEna_legendEnaImg_preferredSize$$5$$ = $dims$$60_options$$215$$._resources.legend_ena, $legendOvr_legendOvrImg$$ = $dims$$60_options$$215$$._resources.legend_ovr;
    $container$$157_legendDwn_legendDwnImg$$ = $dims$$60_options$$215$$._resources.legend_dwn;
    $legendEna_legendEnaImg_preferredSize$$5$$ = new D.$DvtImage$$($nbox$$47$$.$getCtx$(), $legendEna_legendEnaImg_preferredSize$$5$$.src, 0, 0, $legendEna_legendEnaImg_preferredSize$$5$$.width, $legendEna_legendEnaImg_preferredSize$$5$$.height);
    $legendOvr_legendOvrImg$$ = new D.$DvtImage$$($nbox$$47$$.$getCtx$(), $legendOvr_legendOvrImg$$.src, 0, 0, $legendOvr_legendOvrImg$$.width, $legendOvr_legendOvrImg$$.height);
    $container$$157_legendDwn_legendDwnImg$$ = new D.$DvtImage$$($nbox$$47$$.$getCtx$(), $container$$157_legendDwn_legendDwnImg$$.src, 0, 0, $container$$157_legendDwn_legendDwnImg$$.width, $container$$157_legendDwn_legendDwnImg$$.height);
    (0,D.$JSCompiler_StaticMethods_addPanel$$)($panelDrawer$$3$$, $legend$$28$$, $legendEna_legendEnaImg_preferredSize$$5$$, $legendOvr_legendOvrImg$$, $container$$157_legendDwn_legendDwnImg$$, (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "LEGEND"), "legend");
    $rtl$$27$$ && ($panelDrawer$$3$$.$_discloseDirection$ = "right");
    $panelDrawer$$3$$.$renderComponent$();
    "disclosed" == $dims$$60_options$$215$$[D.$DvtNBoxConstants$$.$LEGEND_DISCLOSURE$] && ((0,D.$JSCompiler_StaticMethods_setDisplayedPanelId$$)($panelDrawer$$3$$, "legend"), $panelDrawer$$3$$.$setDisclosed$(D.$JSCompiler_alias_TRUE$$, D.$JSCompiler_alias_TRUE$$));
    $dims$$60_options$$215$$ = $panelDrawer$$3$$.$getDimensions$();
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($panelDrawer$$3$$, $rtl$$27$$ ? 0 : $availSpace$$104$$.$w$, 0);
    $rtl$$27$$ && ($availSpace$$104$$.x += $dims$$60_options$$215$$.$w$);
    $availSpace$$104$$.$w$ -= $dims$$60_options$$215$$.$w$;
    D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$47$$, $legendData$$4$$, $legend$$28$$, "legend");
    D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$47$$, $legendData$$4$$, $panelDrawer$$3$$, "panelDrawer")
  }
};
D.$DvtNBoxRenderer$$.$_renderTitles$ = function $$DvtNBoxRenderer$$$$_renderTitles$$($nbox$$48$$, $container$$158$$, $cellLayout$$9$$, $availSpace$$105$$) {
  var $i$$731_options$$216$$ = $nbox$$48$$.$getOptions$(), $columnCount$$7$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$48$$), $rowCount$$12$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$48$$), $componentGap_maximizedColumnIndex$$2$$ = $i$$731_options$$216$$.__layout.componentGap, $rowHeaderWidth$$4_titleGap$$3$$ = $i$$731_options$$216$$.__layout.titleGap, $columnHeaderHeight_titleComponentGap$$ = $i$$731_options$$216$$.__layout.titleComponentGap, $rtl$$28$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$48$$.$getCtx$());
  $availSpace$$105$$.x += $componentGap_maximizedColumnIndex$$2$$;
  $availSpace$$105$$.y += $componentGap_maximizedColumnIndex$$2$$;
  $availSpace$$105$$.$w$ -= 2 * $componentGap_maximizedColumnIndex$$2$$;
  $availSpace$$105$$.$h$ -= 2 * $componentGap_maximizedColumnIndex$$2$$;
  var $maximizedColumn$$7_row$$49$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($nbox$$48$$), $componentGap_maximizedColumnIndex$$2$$ = $maximizedColumn$$7_row$$49$$ ? D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$48$$, $maximizedColumn$$7_row$$49$$) : -1, $maximizedRow$$7$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($nbox$$48$$), $maximizedRowIndex$$2$$ = $maximizedRow$$7$$ ? D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$48$$, $maximizedRow$$7$$) : -1, $cellDims$$2_columnsTitle$$ = D.$JSCompiler_alias_NULL$$, 
  $rowsTitle$$ = D.$JSCompiler_alias_NULL$$, $columnLabels$$ = [], $rowLabels$$ = [], $columnsTitleHeight$$ = 0, $rowsTitleWidth$$ = 0, $rowTitleGap$$ = 0, $columnTitleGap$$ = 0, $columnLabelsHeight$$ = 0, $rowLabelsWidth$$ = 0, $rowTitleComponentGap$$ = 0, $columnTitleComponentGap$$ = 0;
  $i$$731_options$$216$$[D.$DvtNBoxConstants$$.$COLUMNS_TITLE$] && ($cellDims$$2_columnsTitle$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$48$$.$getCtx$(), $i$$731_options$$216$$[D.$DvtNBoxConstants$$.$COLUMNS_TITLE$], $i$$731_options$$216$$[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$COLUMNS_TITLE_STYLE$], "center", "middle"), $container$$158$$.$addChild$($cellDims$$2_columnsTitle$$), $columnsTitleHeight$$ = D.$DvtTextUtils$$.$guessTextDimensions$($cellDims$$2_columnsTitle$$).$h$);
  $i$$731_options$$216$$[D.$DvtNBoxConstants$$.$ROWS_TITLE$] && ($rowsTitle$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$48$$.$getCtx$(), $i$$731_options$$216$$[D.$DvtNBoxConstants$$.$ROWS_TITLE$], $i$$731_options$$216$$[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$ROWS_TITLE_STYLE$], "center", "middle"), $container$$158$$.$addChild$($rowsTitle$$), $rowsTitleWidth$$ = D.$DvtTextUtils$$.$guessTextDimensions$($rowsTitle$$).$h$);
  for($i$$731_options$$216$$ = 0;$i$$731_options$$216$$ < $columnCount$$7$$;$i$$731_options$$216$$++) {
    var $column$$9_rowLabel$$ = D.$DvtNBoxDataUtils$$.$getColumn$($nbox$$48$$, $i$$731_options$$216$$);
    if($column$$9_rowLabel$$[D.$DvtNBoxConstants$$.$LABEL$]) {
      var $columnLabel$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$48$$.$getCtx$(), $column$$9_rowLabel$$[D.$DvtNBoxConstants$$.$LABEL$], D.$DvtNBoxStyleUtils$$.$getColumnLabelStyle$($nbox$$48$$, $i$$731_options$$216$$), "center", "middle"), $columnLabelsHeight$$ = window.Math.max($columnLabelsHeight$$, D.$DvtTextUtils$$.$guessTextDimensions$($columnLabel$$).$h$);
      if(!$maximizedColumn$$7_row$$49$$ || $maximizedColumn$$7_row$$49$$ == $column$$9_rowLabel$$[D.$DvtNBoxConstants$$.ID]) {
        $columnLabels$$[$i$$731_options$$216$$] = $columnLabel$$, $container$$158$$.$addChild$($columnLabels$$[$i$$731_options$$216$$])
      }
    }
  }
  for($i$$731_options$$216$$ = 0;$i$$731_options$$216$$ < $rowCount$$12$$;$i$$731_options$$216$$++) {
    if($maximizedColumn$$7_row$$49$$ = D.$DvtNBoxDataUtils$$.$getRow$($nbox$$48$$, $i$$731_options$$216$$), $maximizedColumn$$7_row$$49$$[D.$DvtNBoxConstants$$.$LABEL$] && ($column$$9_rowLabel$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$48$$.$getCtx$(), $maximizedColumn$$7_row$$49$$[D.$DvtNBoxConstants$$.$LABEL$], D.$DvtNBoxStyleUtils$$.$getRowLabelStyle$($nbox$$48$$, $i$$731_options$$216$$), "center", "middle"), $rowLabelsWidth$$ = window.Math.max($rowLabelsWidth$$, D.$DvtTextUtils$$.$guessTextDimensions$($column$$9_rowLabel$$).$h$), 
    !$maximizedRow$$7$$ || $maximizedRow$$7$$ == $maximizedColumn$$7_row$$49$$[D.$DvtNBoxConstants$$.ID])) {
      $rowLabels$$[$i$$731_options$$216$$] = $column$$9_rowLabel$$, $container$$158$$.$addChild$($rowLabels$$[$i$$731_options$$216$$])
    }
  }
  if($rowsTitleWidth$$ || $rowLabelsWidth$$) {
    $rowTitleComponentGap$$ = $columnHeaderHeight_titleComponentGap$$, $rowsTitleWidth$$ && $rowLabelsWidth$$ && ($rowTitleGap$$ = $rowHeaderWidth$$4_titleGap$$3$$)
  }
  if($columnsTitleHeight$$ || $columnLabelsHeight$$) {
    $columnTitleComponentGap$$ = $columnHeaderHeight_titleComponentGap$$, $columnsTitleHeight$$ && $columnLabelsHeight$$ && ($columnTitleGap$$ = $rowHeaderWidth$$4_titleGap$$3$$)
  }
  $rowHeaderWidth$$4_titleGap$$3$$ = $rowsTitleWidth$$ + $rowTitleGap$$ + $rowLabelsWidth$$ + $rowTitleComponentGap$$;
  $columnHeaderHeight_titleComponentGap$$ = $columnsTitleHeight$$ + $columnTitleGap$$ + $columnLabelsHeight$$ + $columnTitleComponentGap$$;
  $availSpace$$105$$.x += $rtl$$28$$ ? 0 : $rowHeaderWidth$$4_titleGap$$3$$;
  $availSpace$$105$$.$w$ -= $rowHeaderWidth$$4_titleGap$$3$$;
  $availSpace$$105$$.$h$ -= $columnHeaderHeight_titleComponentGap$$;
  $cellDims$$2_columnsTitle$$ && D.$DvtTextUtils$$.$fitText$($cellDims$$2_columnsTitle$$, $availSpace$$105$$.$w$, $columnsTitleHeight$$, $container$$158$$) && (D.$DvtNBoxRenderer$$.$positionText$($cellDims$$2_columnsTitle$$, $availSpace$$105$$.x + $availSpace$$105$$.$w$ / 2, $availSpace$$105$$.y + $availSpace$$105$$.$h$ + $columnHeaderHeight_titleComponentGap$$ - $columnsTitleHeight$$ / 2), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$48$$, $nbox$$48$$.$getOptions$(), $cellDims$$2_columnsTitle$$, 
  D.$DvtNBoxConstants$$.$COLUMNS_TITLE$));
  $rowsTitle$$ && D.$DvtTextUtils$$.$fitText$($rowsTitle$$, $availSpace$$105$$.$h$, $rowsTitleWidth$$, $container$$158$$) && (D.$DvtNBoxRenderer$$.$positionText$($rowsTitle$$, $availSpace$$105$$.x + ($rtl$$28$$ ? $availSpace$$105$$.$w$ : 0) + ($rtl$$28$$ ? 1 : -1) * ($rowHeaderWidth$$4_titleGap$$3$$ - $rowsTitleWidth$$ / 2), $availSpace$$105$$.y + $availSpace$$105$$.$h$ / 2, $rtl$$28$$ ? window.Math.PI / 2 : -window.Math.PI / 2), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$48$$, $nbox$$48$$.$getOptions$(), 
  $rowsTitle$$, D.$DvtNBoxConstants$$.$ROWS_TITLE$));
  for($i$$731_options$$216$$ = 0;$i$$731_options$$216$$ < $columnCount$$7$$;$i$$731_options$$216$$++) {
    $columnLabels$$[$i$$731_options$$216$$] && ($cellDims$$2_columnsTitle$$ = D.$DvtNBoxCellRenderer$$.$getCellDimensions$($nbox$$48$$, -1 == $maximizedRowIndex$$2$$ ? 0 : $maximizedRowIndex$$2$$, $i$$731_options$$216$$, $cellLayout$$9$$, $availSpace$$105$$), D.$DvtTextUtils$$.$fitText$($columnLabels$$[$i$$731_options$$216$$], $cellDims$$2_columnsTitle$$.$w$, $columnLabelsHeight$$, $container$$158$$) && (D.$DvtNBoxRenderer$$.$positionText$($columnLabels$$[$i$$731_options$$216$$], $cellDims$$2_columnsTitle$$.x + 
    $cellDims$$2_columnsTitle$$.$w$ / 2, $availSpace$$105$$.y + $availSpace$$105$$.$h$ + $columnTitleComponentGap$$ + $columnLabelsHeight$$ / 2), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$48$$, D.$DvtNBoxDataUtils$$.$getColumn$($nbox$$48$$, $i$$731_options$$216$$), $columnLabels$$[$i$$731_options$$216$$], D.$DvtNBoxConstants$$.$LABEL$)))
  }
  for($i$$731_options$$216$$ = 0;$i$$731_options$$216$$ < $rowCount$$12$$;$i$$731_options$$216$$++) {
    $rowLabels$$[$i$$731_options$$216$$] && ($cellDims$$2_columnsTitle$$ = D.$DvtNBoxCellRenderer$$.$getCellDimensions$($nbox$$48$$, $i$$731_options$$216$$, -1 == $componentGap_maximizedColumnIndex$$2$$ ? 0 : $componentGap_maximizedColumnIndex$$2$$, $cellLayout$$9$$, $availSpace$$105$$), D.$DvtTextUtils$$.$fitText$($rowLabels$$[$i$$731_options$$216$$], $cellDims$$2_columnsTitle$$.$h$, $rowLabelsWidth$$, $container$$158$$) && (D.$DvtNBoxRenderer$$.$positionText$($rowLabels$$[$i$$731_options$$216$$], 
    $availSpace$$105$$.x + ($rtl$$28$$ ? $availSpace$$105$$.$w$ : 0) + ($rtl$$28$$ ? 1 : -1) * ($rowTitleComponentGap$$ + $rowLabelsWidth$$ / 2), $cellDims$$2_columnsTitle$$.y + $cellDims$$2_columnsTitle$$.$h$ / 2, $rtl$$28$$ ? window.Math.PI / 2 : -window.Math.PI / 2), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$48$$, D.$DvtNBoxDataUtils$$.$getRow$($nbox$$48$$, $i$$731_options$$216$$), $rowLabels$$[$i$$731_options$$216$$], D.$DvtNBoxConstants$$.$LABEL$)))
  }
};
D.$DvtNBoxRenderer$$.$createText$ = function $$DvtNBoxRenderer$$$$createText$$($ctx$$5_text$$100$$, $strText$$3$$, $style$$105$$, $halign$$11$$, $valign$$6$$) {
  $ctx$$5_text$$100$$ = new D.$DvtOutputText$$($ctx$$5_text$$100$$, $strText$$3$$, 0, 0);
  $ctx$$5_text$$100$$.$setCSSStyle$($style$$105$$);
  $ctx$$5_text$$100$$.$setHorizAlignment$($halign$$11$$);
  $ctx$$5_text$$100$$.$setVertAlignment$($valign$$6$$);
  return $ctx$$5_text$$100$$
};
D.$DvtNBoxRenderer$$.$_renderCells$ = function $$DvtNBoxRenderer$$$$_renderCells$$($nbox$$49$$, $container$$159$$, $cellCounts$$8$$, $cellLayout$$10$$, $availSpace$$106$$) {
  for(var $rowCount$$13$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$49$$), $columnCount$$8$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$49$$), $r$$60$$ = 0;$r$$60$$ < $rowCount$$13$$;$r$$60$$++) {
    for(var $c$$41$$ = 0;$c$$41$$ < $columnCount$$8$$;$c$$41$$++) {
      var $cell$$44$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$49$$, $r$$60$$ * $columnCount$$8$$ + $c$$41$$);
      D.$DvtNBoxCell$$.newInstance($nbox$$49$$, $cell$$44$$).$render$($container$$159$$, $cellLayout$$10$$, $cellCounts$$8$$, $availSpace$$106$$)
    }
  }
};
D.$DvtNBoxRenderer$$.$_calculateCellCounts$ = function $$DvtNBoxRenderer$$$$_calculateCellCounts$$($nbox$$50_retVal$$4$$) {
  var $rowCount$$14_total$$6$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$50_retVal$$4$$), $columnCount$$9_highlighted$$1$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$50_retVal$$4$$), $cellCount$$4_nodeCount$$9$$ = $rowCount$$14_total$$6$$ * $columnCount$$9_highlighted$$1$$, $rowCount$$14_total$$6$$ = [], $columnCount$$9_highlighted$$1$$ = D.$JSCompiler_alias_NULL$$, $highlightedItems$$3_node$$266$$ = D.$DvtNBoxDataUtils$$.$getHighlightedItems$($nbox$$50_retVal$$4$$), $highlightedMap$$2$$ = 
  {};
  if($highlightedItems$$3_node$$266$$) {
    for(var $columnCount$$9_highlighted$$1$$ = [], $i$$732$$ = 0;$i$$732$$ < $highlightedItems$$3_node$$266$$.length;$i$$732$$++) {
      $highlightedMap$$2$$[$highlightedItems$$3_node$$266$$[$i$$732$$][D.$DvtNBoxConstants$$.ID]] = D.$JSCompiler_alias_TRUE$$
    }
  }
  for($i$$732$$ = 0;$i$$732$$ < $cellCount$$4_nodeCount$$9$$;$i$$732$$++) {
    $rowCount$$14_total$$6$$[$i$$732$$] = 0, $columnCount$$9_highlighted$$1$$ && ($columnCount$$9_highlighted$$1$$[$i$$732$$] = 0)
  }
  $cellCount$$4_nodeCount$$9$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($nbox$$50_retVal$$4$$);
  for($i$$732$$ = 0;$i$$732$$ < $cellCount$$4_nodeCount$$9$$;$i$$732$$++) {
    if($highlightedItems$$3_node$$266$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$50_retVal$$4$$, $i$$732$$), !D.$DvtNBoxDataUtils$$.$isNodeHidden$($nbox$$50_retVal$$4$$, $highlightedItems$$3_node$$266$$)) {
      var $cellIndex$$9$$ = D.$DvtNBoxDataUtils$$.$getCellIndex$($nbox$$50_retVal$$4$$, $highlightedItems$$3_node$$266$$);
      $rowCount$$14_total$$6$$[$cellIndex$$9$$]++;
      $columnCount$$9_highlighted$$1$$ && $highlightedMap$$2$$[$highlightedItems$$3_node$$266$$[D.$DvtNBoxConstants$$.ID]] && $columnCount$$9_highlighted$$1$$[$cellIndex$$9$$]++
    }
  }
  $nbox$$50_retVal$$4$$ = {};
  $nbox$$50_retVal$$4$$.total = $rowCount$$14_total$$6$$;
  $columnCount$$9_highlighted$$1$$ && ($nbox$$50_retVal$$4$$.highlighted = $columnCount$$9_highlighted$$1$$);
  return $nbox$$50_retVal$$4$$
};
D.$DvtNBoxRenderer$$.$_renderNodes$ = function $$DvtNBoxRenderer$$$$_renderNodes$$($nbox$$51$$, $container$$160_rowCount$$15$$, $cellCounts$$9$$, $availSpace$$107_columnCount$$10$$) {
  if(0 < D.$DvtNBoxDataUtils$$.$getNodeCount$($nbox$$51$$)) {
    if("counts" == D.$DvtNBoxDataUtils$$.$getCellContent$($nbox$$51$$)) {
      $container$$160_rowCount$$15$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$51$$);
      $availSpace$$107_columnCount$$10$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$51$$);
      for(var $bodyCountLabels$$ = [], $r$$61$$ = 0;$r$$61$$ < $container$$160_rowCount$$15$$;$r$$61$$++) {
        for(var $c$$42$$ = 0;$c$$42$$ < $availSpace$$107_columnCount$$10$$;$c$$42$$++) {
          $bodyCountLabels$$.push($r$$61$$ * $availSpace$$107_columnCount$$10$$ + $c$$42$$)
        }
      }
      D.$DvtNBoxCellRenderer$$.$renderBodyCountLabels$($nbox$$51$$, $cellCounts$$9$$, $bodyCountLabels$$)
    }else {
      D.$DvtNBoxDataUtils$$.$getGrouping$($nbox$$51$$) ? (D.$DvtNBoxRenderer$$.$_renderCategoryNodes$($nbox$$51$$, $container$$160_rowCount$$15$$, $availSpace$$107_columnCount$$10$$), D.$DvtNBoxRenderer$$.$_renderDrawer$($nbox$$51$$, $container$$160_rowCount$$15$$, $availSpace$$107_columnCount$$10$$)) : D.$DvtNBoxRenderer$$.$_renderIndividualNodes$($nbox$$51$$, $cellCounts$$9$$)
    }
  }
};
D.$DvtNBoxRenderer$$.$_renderIndividualNodes$ = function $$DvtNBoxRenderer$$$$_renderIndividualNodes$$($nbox$$52$$, $cellCounts$$10$$) {
  var $gridGap$$4$$ = $nbox$$52$$.$getOptions$().__layout.gridGap, $rtl$$29$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$52$$.$getCtx$()), $nodeLayout$$11$$ = D.$DvtNBoxNodeRenderer$$.$calculateNodeLayout$($nbox$$52$$), $hGridSize$$1$$ = $nodeLayout$$11$$.indicatorSectionWidth + $nodeLayout$$11$$.iconSectionWidth + $nodeLayout$$11$$.labelSectionWidth + $gridGap$$4$$, $vGridSize$$1$$ = $nodeLayout$$11$$.nodeHeight + $gridGap$$4$$, $nodeCount$$10_rowCount$$16$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($nbox$$52$$), 
  $gridPos$$1$$ = [], $r$$62_renderPasses$$1$$ = ["normal"], $alphaFade$$2_columnCount$$11$$ = D.$DvtNBoxStyleUtils$$.$getFadedNodeAlpha$($nbox$$52$$), $cell$$45_highlightedItems$$4_prevNodeCellIndex$$ = D.$DvtNBoxDataUtils$$.$getHighlightedItems$($nbox$$52$$), $bodyCountLabels$$1_highlightedMap$$3$$ = {};
  if($cell$$45_highlightedItems$$4_prevNodeCellIndex$$) {
    for(var $cellLayout$$11_gridRow$$1_i$$733$$ = 0;$cellLayout$$11_gridRow$$1_i$$733$$ < $cell$$45_highlightedItems$$4_prevNodeCellIndex$$.length;$cellLayout$$11_gridRow$$1_i$$733$$++) {
      $bodyCountLabels$$1_highlightedMap$$3$$[$cell$$45_highlightedItems$$4_prevNodeCellIndex$$[$cellLayout$$11_gridRow$$1_i$$733$$][D.$DvtNBoxConstants$$.ID]] = D.$JSCompiler_alias_TRUE$$
    }
    $r$$62_renderPasses$$1$$ = ["highlighted", "unhighlighted"]
  }
  for(var $c$$43_p$$28$$ = 0;$c$$43_p$$28$$ < $r$$62_renderPasses$$1$$.length;$c$$43_p$$28$$++) {
    for(var $n$$21_overflowContainer$$ = 0;$n$$21_overflowContainer$$ < $nodeCount$$10_rowCount$$16$$;$n$$21_overflowContainer$$++) {
      var $node$$267$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$52$$, $n$$21_overflowContainer$$);
      if(!D.$DvtNBoxDataUtils$$.$isNodeHidden$($nbox$$52$$, $node$$267$$) && ("normal" == $r$$62_renderPasses$$1$$[$c$$43_p$$28$$] || "highlighted" == $r$$62_renderPasses$$1$$[$c$$43_p$$28$$] && $bodyCountLabels$$1_highlightedMap$$3$$[$node$$267$$[D.$DvtNBoxConstants$$.ID]] || "unhighlighted" == $r$$62_renderPasses$$1$$[$c$$43_p$$28$$] && !$bodyCountLabels$$1_highlightedMap$$3$$[$node$$267$$[D.$DvtNBoxConstants$$.ID]])) {
        var $cellIndex$$10$$ = D.$DvtNBoxDataUtils$$.$getCellIndex$($nbox$$52$$, $node$$267$$);
        if(!D.$DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$52$$, $cellIndex$$10$$)) {
          $cell$$45_highlightedItems$$4_prevNodeCellIndex$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$52$$, $cellIndex$$10$$);
          (0,window.isNaN)($gridPos$$1$$[$cellIndex$$10$$]) && ($gridPos$$1$$[$cellIndex$$10$$] = 0);
          var $cellLayout$$11_gridRow$$1_i$$733$$ = $nodeLayout$$11$$.cellLayouts[$cellIndex$$10$$], $cellRows$$1_gridXOrigin$$1_maxNodes$$ = $cellLayout$$11_gridRow$$1_i$$733$$.cellRows, $cellColumns$$1_prevNode$$1$$ = $cellLayout$$11_gridRow$$1_i$$733$$.cellColumns;
          if(!(0 == $cellRows$$1_gridXOrigin$$1_maxNodes$$ || 0 == $cellColumns$$1_prevNode$$1$$ || 1 == $cellRows$$1_gridXOrigin$$1_maxNodes$$ && 1 == $cellColumns$$1_prevNode$$1$$ && $cellLayout$$11_gridRow$$1_i$$733$$.overflow)) {
            if($cellRows$$1_gridXOrigin$$1_maxNodes$$ = $cellRows$$1_gridXOrigin$$1_maxNodes$$ * $cellColumns$$1_prevNode$$1$$ - ($cellLayout$$11_gridRow$$1_i$$733$$.overflow ? 1 : 0), 0 > $cellRows$$1_gridXOrigin$$1_maxNodes$$ || $gridPos$$1$$[$cellIndex$$10$$] < $cellRows$$1_gridXOrigin$$1_maxNodes$$) {
              var $cellContainer$$5_ci$$3$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$52$$, $cell$$45_highlightedItems$$4_prevNodeCellIndex$$).$getChildContainer$(), $scrolling$$ = $cellContainer$$5_ci$$3$$ instanceof D.$DvtSimpleScrollableContainer$$, $nodeContainer$$10$$ = D.$DvtNBoxNode$$.newInstance($nbox$$52$$, $node$$267$$), $cellRows$$1_gridXOrigin$$1_maxNodes$$ = $cell$$45_highlightedItems$$4_prevNodeCellIndex$$.__childArea.x + ($cell$$45_highlightedItems$$4_prevNodeCellIndex$$.__childArea.$w$ - 
              $cellLayout$$11_gridRow$$1_i$$733$$.cellColumns * $hGridSize$$1$$ + $gridGap$$4$$) / 2, $cellData$$15_gridYOrigin$$1$$ = $scrolling$$ ? $gridGap$$4$$ : $cell$$45_highlightedItems$$4_prevNodeCellIndex$$.__childArea.y, $gridColumn$$1$$ = $gridPos$$1$$[$cellIndex$$10$$] % $cellColumns$$1_prevNode$$1$$;
              $rtl$$29$$ && ($gridColumn$$1$$ = $cellColumns$$1_prevNode$$1$$ - $gridColumn$$1$$ - 1);
              $cellLayout$$11_gridRow$$1_i$$733$$ = window.Math.floor($gridPos$$1$$[$cellIndex$$10$$] / $cellColumns$$1_prevNode$$1$$);
              (0,D.$JSCompiler_StaticMethods_setTranslate$$)($nodeContainer$$10$$, $cellRows$$1_gridXOrigin$$1_maxNodes$$ + $hGridSize$$1$$ * $gridColumn$$1$$, $cellData$$15_gridYOrigin$$1$$ + $vGridSize$$1$$ * $cellLayout$$11_gridRow$$1_i$$733$$);
              $gridPos$$1$$[$cellIndex$$10$$]++;
              $nodeContainer$$10$$.$render$($scrolling$$ ? $cellContainer$$5_ci$$3$$.$_container$ : $cellContainer$$5_ci$$3$$, $nodeLayout$$11$$);
              "unhighlighted" == $r$$62_renderPasses$$1$$[$c$$43_p$$28$$] && $nodeContainer$$10$$.$setAlpha$($alphaFade$$2_columnCount$$11$$);
              $cell$$45_highlightedItems$$4_prevNodeCellIndex$$ = ($cellColumns$$1_prevNode$$1$$ = 0 < $n$$21_overflowContainer$$ ? D.$DvtNBoxDataUtils$$.$getNode$($nbox$$52$$, $n$$21_overflowContainer$$ - 1) : D.$JSCompiler_alias_NULL$$) ? D.$DvtNBoxDataUtils$$.$getCellIndex$($nbox$$52$$, $cellColumns$$1_prevNode$$1$$) : -1;
              $cellColumns$$1_prevNode$$1$$ && $cell$$45_highlightedItems$$4_prevNodeCellIndex$$ == $cellIndex$$10$$ && ($node$$267$$.__prev = $cellColumns$$1_prevNode$$1$$, $cellColumns$$1_prevNode$$1$$.__next = $node$$267$$)
            }
          }
        }
      }
    }
  }
  $nodeCount$$10_rowCount$$16$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$52$$);
  $alphaFade$$2_columnCount$$11$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$52$$);
  $bodyCountLabels$$1_highlightedMap$$3$$ = [];
  for($r$$62_renderPasses$$1$$ = 0;$r$$62_renderPasses$$1$$ < $nodeCount$$10_rowCount$$16$$;$r$$62_renderPasses$$1$$++) {
    for($c$$43_p$$28$$ = 0;$c$$43_p$$28$$ < $alphaFade$$2_columnCount$$11$$;$c$$43_p$$28$$++) {
      $cellContainer$$5_ci$$3$$ = $r$$62_renderPasses$$1$$ * $alphaFade$$2_columnCount$$11$$ + $c$$43_p$$28$$;
      if(!D.$DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$52$$, $cellContainer$$5_ci$$3$$) && ($cellData$$15_gridYOrigin$$1$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$52$$, $cellContainer$$5_ci$$3$$), $cell$$45_highlightedItems$$4_prevNodeCellIndex$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$52$$, $cellData$$15_gridYOrigin$$1$$), $cellLayout$$11_gridRow$$1_i$$733$$ = $nodeLayout$$11$$.cellLayouts[$cellContainer$$5_ci$$3$$], $cellLayout$$11_gridRow$$1_i$$733$$.overflow)) {
        if($cellRows$$1_gridXOrigin$$1_maxNodes$$ = $cellLayout$$11_gridRow$$1_i$$733$$.cellRows, $cellColumns$$1_prevNode$$1$$ = $cellLayout$$11_gridRow$$1_i$$733$$.cellColumns, 0 == $cellRows$$1_gridXOrigin$$1_maxNodes$$ || 0 == $cellColumns$$1_prevNode$$1$$ || 1 == $cellRows$$1_gridXOrigin$$1_maxNodes$$ && 1 == $cellColumns$$1_prevNode$$1$$ && $cellLayout$$11_gridRow$$1_i$$733$$.overflow) {
          $bodyCountLabels$$1_highlightedMap$$3$$.push($cellContainer$$5_ci$$3$$)
        }else {
          $n$$21_overflowContainer$$ = D.$DvtNBoxNodeOverflow$$.newInstance($nbox$$52$$, $cell$$45_highlightedItems$$4_prevNodeCellIndex$$);
          if(($cellColumns$$1_prevNode$$1$$ = D.$DvtNBoxDataUtils$$.$getLastNavigableNode$($nbox$$52$$, $cell$$45_highlightedItems$$4_prevNodeCellIndex$$.$getChildContainer$())) && $cellColumns$$1_prevNode$$1$$ instanceof D.$DvtNBoxNode$$) {
            $n$$21_overflowContainer$$.__prev = $cellColumns$$1_prevNode$$1$$.getData(), $cellColumns$$1_prevNode$$1$$.getData().__next = $n$$21_overflowContainer$$
          }
          D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$52$$, $n$$21_overflowContainer$$, $n$$21_overflowContainer$$);
          D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$52$$, $cellData$$15_gridYOrigin$$1$$, $n$$21_overflowContainer$$, "overflow");
          $cellRows$$1_gridXOrigin$$1_maxNodes$$ = $cellData$$15_gridYOrigin$$1$$.__childArea.x + ($cellData$$15_gridYOrigin$$1$$.__childArea.$w$ - $cellLayout$$11_gridRow$$1_i$$733$$.cellColumns * $hGridSize$$1$$ + $gridGap$$4$$) / 2;
          $cellData$$15_gridYOrigin$$1$$ = $cellData$$15_gridYOrigin$$1$$.__childArea.y;
          $gridColumn$$1$$ = $gridPos$$1$$[$cellContainer$$5_ci$$3$$] % $cellLayout$$11_gridRow$$1_i$$733$$.cellColumns;
          $rtl$$29$$ && ($gridColumn$$1$$ = $cellLayout$$11_gridRow$$1_i$$733$$.cellColumns - $gridColumn$$1$$ - 1);
          $cellLayout$$11_gridRow$$1_i$$733$$ = window.Math.floor($gridPos$$1$$[$cellContainer$$5_ci$$3$$] / $cellLayout$$11_gridRow$$1_i$$733$$.cellColumns);
          (0,D.$JSCompiler_StaticMethods_setTranslate$$)($n$$21_overflowContainer$$, $cellRows$$1_gridXOrigin$$1_maxNodes$$ + $hGridSize$$1$$ * $gridColumn$$1$$, $cellData$$15_gridYOrigin$$1$$ + $vGridSize$$1$$ * $cellLayout$$11_gridRow$$1_i$$733$$);
          $n$$21_overflowContainer$$.$render$($cell$$45_highlightedItems$$4_prevNodeCellIndex$$.$getChildContainer$(), $hGridSize$$1$$ - $gridGap$$4$$, $vGridSize$$1$$ - $gridGap$$4$$)
        }
      }
      D.$DvtNBoxDataUtils$$.$isCellMaximized$($nbox$$52$$, $cellContainer$$5_ci$$3$$) && ($cellContainer$$5_ci$$3$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$52$$, D.$DvtNBoxDataUtils$$.$getCell$($nbox$$52$$, $cellContainer$$5_ci$$3$$)).$getChildContainer$(), (0,D.$JSCompiler_StaticMethods_prepareContentPane$$)($cellContainer$$5_ci$$3$$))
    }
  }
  0 < $bodyCountLabels$$1_highlightedMap$$3$$.length && D.$DvtNBoxCellRenderer$$.$renderBodyCountLabels$($nbox$$52$$, $cellCounts$$10$$, $bodyCountLabels$$1_highlightedMap$$3$$)
};
D.$DvtNBoxRenderer$$.$_renderCategoryNodes$ = function $$DvtNBoxRenderer$$$$_renderCategoryNodes$$($nbox$$53$$, $cellCount$$5_columnCount$$12_container$$162$$, $availSpace$$109_layouts$$) {
  var $groups$$9$$ = {}, $nodeContainer$$11_nodeCount$$11$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($nbox$$53$$), $groupBehavior$$4_scale$$60$$ = D.$DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$53$$), $cell$$46_rtl$$30$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$53$$.$getCtx$()), $highlightedItems$$5_node$$268_positions$$ = D.$DvtNBoxDataUtils$$.$getHighlightedItems$($nbox$$53$$), $childContainer$$4_highlightedMap$$4_xPos$$2$$ = {};
  if($highlightedItems$$5_node$$268_positions$$) {
    for(var $i$$734_n$$22_otherGroups$$1_rowCount$$17$$ = 0;$i$$734_n$$22_otherGroups$$1_rowCount$$17$$ < $highlightedItems$$5_node$$268_positions$$.length;$i$$734_n$$22_otherGroups$$1_rowCount$$17$$++) {
      $childContainer$$4_highlightedMap$$4_xPos$$2$$[$highlightedItems$$5_node$$268_positions$$[$i$$734_n$$22_otherGroups$$1_rowCount$$17$$][D.$DvtNBoxConstants$$.ID]] = D.$JSCompiler_alias_TRUE$$
    }
  }
  for($i$$734_n$$22_otherGroups$$1_rowCount$$17$$ = 0;$i$$734_n$$22_otherGroups$$1_rowCount$$17$$ < $nodeContainer$$11_nodeCount$$11$$;$i$$734_n$$22_otherGroups$$1_rowCount$$17$$++) {
    if($highlightedItems$$5_node$$268_positions$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$53$$, $i$$734_n$$22_otherGroups$$1_rowCount$$17$$), !D.$DvtNBoxDataUtils$$.$isNodeHidden$($nbox$$53$$, $highlightedItems$$5_node$$268_positions$$)) {
      var $groupContainer_scrolling$$1_yPos$$2$$ = $groups$$9$$;
      if($groupBehavior$$4_scale$$60$$ == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
        var $groupId$$22_j$$95$$ = D.$DvtNBoxDataUtils$$.$getCellIndex$($nbox$$53$$, $highlightedItems$$5_node$$268_positions$$) + "", $groupContainer_scrolling$$1_yPos$$2$$ = $groups$$9$$[$groupId$$22_j$$95$$];
        $groupContainer_scrolling$$1_yPos$$2$$ || ($groupContainer_scrolling$$1_yPos$$2$$ = {}, $groups$$9$$[$groupId$$22_j$$95$$] = $groupContainer_scrolling$$1_yPos$$2$$)
      }
      var $groupId$$22_j$$95$$ = D.$DvtNBoxDataUtils$$.$getNodeGroupId$($highlightedItems$$5_node$$268_positions$$), $group$$33$$ = $groupContainer_scrolling$$1_yPos$$2$$[$groupId$$22_j$$95$$];
      $group$$33$$ || ($group$$33$$ = {}, $group$$33$$[D.$DvtNBoxConstants$$.ID] = $groupId$$22_j$$95$$, $groupBehavior$$4_scale$$60$$ == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($group$$33$$[D.$DvtNBoxConstants$$.$CELL$] = D.$DvtNBoxDataUtils$$.$getCellIndex$($nbox$$53$$, $highlightedItems$$5_node$$268_positions$$)), $group$$33$$.nodeIndices = [], $group$$33$$.highlightedCount = 0, $groupContainer_scrolling$$1_yPos$$2$$[$groupId$$22_j$$95$$] = $group$$33$$);
      $group$$33$$.nodeIndices.push($i$$734_n$$22_otherGroups$$1_rowCount$$17$$);
      $childContainer$$4_highlightedMap$$4_xPos$$2$$[D.$DvtNBoxDataUtils$$.$getNode$($nbox$$53$$, $i$$734_n$$22_otherGroups$$1_rowCount$$17$$)[D.$DvtNBoxConstants$$.ID]] && $group$$33$$.highlightedCount++
    }
  }
  if($groupBehavior$$4_scale$$60$$ == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
    var $i$$734_n$$22_otherGroups$$1_rowCount$$17$$ = {}, $cellId_center$$7_sortedGroups$$;
    for($cellId_center$$7_sortedGroups$$ in $groups$$9$$) {
      $i$$734_n$$22_otherGroups$$1_rowCount$$17$$[$cellId_center$$7_sortedGroups$$] = D.$DvtNBoxRenderer$$.$_processOtherThreshold$($nbox$$53$$, $groups$$9$$[$cellId_center$$7_sortedGroups$$])
    }
  }else {
    $i$$734_n$$22_otherGroups$$1_rowCount$$17$$ = D.$DvtNBoxRenderer$$.$_processOtherThreshold$($nbox$$53$$, $groups$$9$$)
  }
  $groups$$9$$ = $i$$734_n$$22_otherGroups$$1_rowCount$$17$$;
  $nbox$$53$$.$getOptions$().__groups = $groups$$9$$;
  if($groupBehavior$$4_scale$$60$$ == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_ACROSS_CELLS$) {
    $cellId_center$$7_sortedGroups$$ = [];
    for($group$$33$$ in $groups$$9$$) {
      $cellId_center$$7_sortedGroups$$.push($group$$33$$)
    }
    $cellId_center$$7_sortedGroups$$.sort(function($nbox$$53$$, $cellCount$$5_columnCount$$12_container$$162$$) {
      return D.$DvtNBoxCategoryNode$$.$compareSize$($groups$$9$$[$nbox$$53$$], $groups$$9$$[$cellCount$$5_columnCount$$12_container$$162$$])
    });
    $groupBehavior$$4_scale$$60$$ = window.Math.sqrt(0.15 * $availSpace$$109_layouts$$.$w$ * $availSpace$$109_layouts$$.$h$ / $nodeContainer$$11_nodeCount$$11$$);
    for($i$$734_n$$22_otherGroups$$1_rowCount$$17$$ = 0;$i$$734_n$$22_otherGroups$$1_rowCount$$17$$ < $cellId_center$$7_sortedGroups$$.length;$i$$734_n$$22_otherGroups$$1_rowCount$$17$$++) {
      $group$$33$$ = $cellId_center$$7_sortedGroups$$[$i$$734_n$$22_otherGroups$$1_rowCount$$17$$];
      $groupContainer_scrolling$$1_yPos$$2$$ = $childContainer$$4_highlightedMap$$4_xPos$$2$$ = 0;
      $nodeContainer$$11_nodeCount$$11$$ = $groups$$9$$[$group$$33$$].nodeIndices.length;
      for($groupId$$22_j$$95$$ = 0;$groupId$$22_j$$95$$ < $nodeContainer$$11_nodeCount$$11$$;$groupId$$22_j$$95$$++) {
        $highlightedItems$$5_node$$268_positions$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$53$$, $groups$$9$$[$group$$33$$].nodeIndices[$groupId$$22_j$$95$$]), $childContainer$$4_highlightedMap$$4_xPos$$2$$ += D.$DvtNBoxDataUtils$$.$getXPercentage$($nbox$$53$$, $highlightedItems$$5_node$$268_positions$$), $groupContainer_scrolling$$1_yPos$$2$$ += D.$DvtNBoxDataUtils$$.$getYPercentage$($nbox$$53$$, $highlightedItems$$5_node$$268_positions$$)
      }
      $childContainer$$4_highlightedMap$$4_xPos$$2$$ /= $nodeContainer$$11_nodeCount$$11$$;
      $groupContainer_scrolling$$1_yPos$$2$$ /= $nodeContainer$$11_nodeCount$$11$$;
      $nodeContainer$$11_nodeCount$$11$$ = D.$DvtNBoxCategoryNode$$.newInstance($nbox$$53$$, $groups$$9$$[$group$$33$$]);
      (0,D.$JSCompiler_StaticMethods_setTranslate$$)($nodeContainer$$11_nodeCount$$11$$, $availSpace$$109_layouts$$.x + ($cell$$46_rtl$$30$$ ? 1 - $childContainer$$4_highlightedMap$$4_xPos$$2$$ : $childContainer$$4_highlightedMap$$4_xPos$$2$$) * $availSpace$$109_layouts$$.$w$, $availSpace$$109_layouts$$.y + (1 - $groupContainer_scrolling$$1_yPos$$2$$) * $availSpace$$109_layouts$$.$h$);
      $nodeContainer$$11_nodeCount$$11$$.$render$($cellCount$$5_columnCount$$12_container$$162$$, $groupBehavior$$4_scale$$60$$, 0);
      $nodeContainer$$11_nodeCount$$11$$.$setMaxAlpha$(0.8)
    }
  }else {
    if($groupBehavior$$4_scale$$60$$ == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
      $i$$734_n$$22_otherGroups$$1_rowCount$$17$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$53$$);
      $cellCount$$5_columnCount$$12_container$$162$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$53$$);
      $cellCount$$5_columnCount$$12_container$$162$$ *= $i$$734_n$$22_otherGroups$$1_rowCount$$17$$;
      $availSpace$$109_layouts$$ = [];
      for($i$$734_n$$22_otherGroups$$1_rowCount$$17$$ = 0;$i$$734_n$$22_otherGroups$$1_rowCount$$17$$ < $cellCount$$5_columnCount$$12_container$$162$$;$i$$734_n$$22_otherGroups$$1_rowCount$$17$$++) {
        $groups$$9$$[$i$$734_n$$22_otherGroups$$1_rowCount$$17$$] && !D.$DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$53$$, $i$$734_n$$22_otherGroups$$1_rowCount$$17$$) && ($cell$$46_rtl$$30$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$53$$, $i$$734_n$$22_otherGroups$$1_rowCount$$17$$), $availSpace$$109_layouts$$[$i$$734_n$$22_otherGroups$$1_rowCount$$17$$] = D.$DvtNBoxRenderer$$.$_forceLayoutGroups$($groups$$9$$[$i$$734_n$$22_otherGroups$$1_rowCount$$17$$], $cell$$46_rtl$$30$$.__childArea.$w$, $cell$$46_rtl$$30$$.__childArea.$h$))
      }
      $groupBehavior$$4_scale$$60$$ = 40;
      for($i$$734_n$$22_otherGroups$$1_rowCount$$17$$ = 0;$i$$734_n$$22_otherGroups$$1_rowCount$$17$$ < $cellCount$$5_columnCount$$12_container$$162$$;$i$$734_n$$22_otherGroups$$1_rowCount$$17$$++) {
        $groups$$9$$[$i$$734_n$$22_otherGroups$$1_rowCount$$17$$] && !D.$DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$53$$, $i$$734_n$$22_otherGroups$$1_rowCount$$17$$) && ($groupBehavior$$4_scale$$60$$ = window.Math.min($groupBehavior$$4_scale$$60$$, $availSpace$$109_layouts$$[$i$$734_n$$22_otherGroups$$1_rowCount$$17$$].scale))
      }
      for($i$$734_n$$22_otherGroups$$1_rowCount$$17$$ = 0;$i$$734_n$$22_otherGroups$$1_rowCount$$17$$ < $cellCount$$5_columnCount$$12_container$$162$$;$i$$734_n$$22_otherGroups$$1_rowCount$$17$$++) {
        if($groups$$9$$[$i$$734_n$$22_otherGroups$$1_rowCount$$17$$] && !D.$DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$53$$, $i$$734_n$$22_otherGroups$$1_rowCount$$17$$)) {
          for($group$$33$$ in $highlightedItems$$5_node$$268_positions$$ = $availSpace$$109_layouts$$[$i$$734_n$$22_otherGroups$$1_rowCount$$17$$].positions, $cellId_center$$7_sortedGroups$$ = $availSpace$$109_layouts$$[$i$$734_n$$22_otherGroups$$1_rowCount$$17$$].center, $cell$$46_rtl$$30$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$53$$, $i$$734_n$$22_otherGroups$$1_rowCount$$17$$), $childContainer$$4_highlightedMap$$4_xPos$$2$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$53$$, $cell$$46_rtl$$30$$).$getChildContainer$(), 
          $groupContainer_scrolling$$1_yPos$$2$$ = $childContainer$$4_highlightedMap$$4_xPos$$2$$ instanceof D.$DvtSimpleScrollableContainer$$, $highlightedItems$$5_node$$268_positions$$) {
            $nodeContainer$$11_nodeCount$$11$$ = D.$DvtNBoxCategoryNode$$.newInstance($nbox$$53$$, $groups$$9$$[$i$$734_n$$22_otherGroups$$1_rowCount$$17$$][$group$$33$$]), (0,D.$JSCompiler_StaticMethods_setTranslate$$)($nodeContainer$$11_nodeCount$$11$$, $cell$$46_rtl$$30$$.__childArea.x + $cell$$46_rtl$$30$$.__childArea.$w$ / 2 + $groupBehavior$$4_scale$$60$$ * ($highlightedItems$$5_node$$268_positions$$[$group$$33$$].x - $cellId_center$$7_sortedGroups$$.x), ($groupContainer_scrolling$$1_yPos$$2$$ ? 
            0 : $cell$$46_rtl$$30$$.__childArea.y) + $cell$$46_rtl$$30$$.__childArea.$h$ / 2 + $groupBehavior$$4_scale$$60$$ * ($highlightedItems$$5_node$$268_positions$$[$group$$33$$].y - $cellId_center$$7_sortedGroups$$.y)), $nodeContainer$$11_nodeCount$$11$$.$render$($groupContainer_scrolling$$1_yPos$$2$$ ? $childContainer$$4_highlightedMap$$4_xPos$$2$$.$_container$ : $childContainer$$4_highlightedMap$$4_xPos$$2$$, $groupBehavior$$4_scale$$60$$, 3)
          }
        }
      }
    }
  }
};
D.$DvtNBoxRenderer$$.$getRowDimensions$ = function $$DvtNBoxRenderer$$$$getRowDimensions$$($nbox$$54_rowCount$$18$$, $rowIndex$$17$$, $availSpace$$110$$) {
  $nbox$$54_rowCount$$18$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$54_rowCount$$18$$);
  var $rowHeight$$10$$ = $availSpace$$110$$.$h$ / $nbox$$54_rowCount$$18$$;
  return new D.$DvtRectangle$$($availSpace$$110$$.x, $availSpace$$110$$.y + ($nbox$$54_rowCount$$18$$ - $rowIndex$$17$$ - 1) * $rowHeight$$10$$, $availSpace$$110$$.$w$, $rowHeight$$10$$)
};
D.$DvtNBoxRenderer$$.$getColumnDimensions$ = function $$DvtNBoxRenderer$$$$getColumnDimensions$$($nbox$$55_rtl$$31$$, $columnIndex$$5$$, $availSpace$$111$$) {
  var $columnCount$$13_columnWidth$$1$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$55_rtl$$31$$), $columnCount$$13_columnWidth$$1$$ = $availSpace$$111$$.$w$ / $columnCount$$13_columnWidth$$1$$;
  $nbox$$55_rtl$$31$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$55_rtl$$31$$.$getCtx$());
  return new D.$DvtRectangle$$($availSpace$$111$$.x + ($nbox$$55_rtl$$31$$ ? $availSpace$$111$$.$w$ - $columnCount$$13_columnWidth$$1$$ : 0) + ($nbox$$55_rtl$$31$$ ? -1 : 1) * $columnIndex$$5$$ * $columnCount$$13_columnWidth$$1$$, $availSpace$$111$$.y, $columnCount$$13_columnWidth$$1$$, $availSpace$$111$$.$h$)
};
D.$DvtNBoxRenderer$$.$_adjustAvailSpace$ = function $$DvtNBoxRenderer$$$$_adjustAvailSpace$$($availSpace$$112$$) {
  $availSpace$$112$$.x = window.Math.round($availSpace$$112$$.x);
  $availSpace$$112$$.y = window.Math.round($availSpace$$112$$.y);
  $availSpace$$112$$.$w$ = window.Math.round($availSpace$$112$$.$w$);
  $availSpace$$112$$.$h$ = window.Math.round($availSpace$$112$$.$h$)
};
D.$DvtNBoxRenderer$$.$positionText$ = function $$DvtNBoxRenderer$$$$positionText$$($text$$101$$, $x$$249$$, $y$$223$$, $angle$$51$$) {
  $text$$101$$.$setX$($x$$249$$);
  $text$$101$$.$setY$($y$$223$$);
  if($angle$$51$$) {
    var $matrix$$18$$ = $text$$101$$.$getMatrix$();
    $matrix$$18$$.translate(-$x$$249$$, -$y$$223$$);
    $matrix$$18$$.rotate($angle$$51$$);
    $matrix$$18$$.translate($x$$249$$, $y$$223$$);
    $text$$101$$.$setMatrix$($matrix$$18$$)
  }
};
D.$DvtNBoxRenderer$$.$_renderInitialSelection$ = function $$DvtNBoxRenderer$$$$_renderInitialSelection$$($nbox$$56$$) {
  if($nbox$$56$$.$isSelectionSupported$()) {
    var $selectedMap$$1$$ = {}, $selectedIds$$9$$ = [], $nodeIndices$$3_selectedItems$$1$$ = D.$DvtNBoxDataUtils$$.$getSelectedItems$($nbox$$56$$);
    if($nodeIndices$$3_selectedItems$$1$$) {
      for(var $i$$735$$ = 0;$i$$735$$ < $nodeIndices$$3_selectedItems$$1$$.length;$i$$735$$++) {
        $selectedIds$$9$$.push($nodeIndices$$3_selectedItems$$1$$[$i$$735$$]), $selectedMap$$1$$[$nodeIndices$$3_selectedItems$$1$$[$i$$735$$]] = D.$JSCompiler_alias_TRUE$$
      }
      var $objects$$4$$ = $nbox$$56$$.$getObjects$();
      if(D.$DvtNBoxDataUtils$$.$getGrouping$($nbox$$56$$)) {
        for($i$$735$$ = 0;$i$$735$$ < $objects$$4$$.length;$i$$735$$++) {
          if($objects$$4$$[$i$$735$$] instanceof D.$DvtNBoxCategoryNode$$) {
            for(var $nodeIndices$$3_selectedItems$$1$$ = $objects$$4$$[$i$$735$$].getData().nodeIndices, $selected$$36$$ = D.$JSCompiler_alias_TRUE$$, $j$$96$$ = 0;$j$$96$$ < $nodeIndices$$3_selectedItems$$1$$.length;$j$$96$$++) {
              var $node$$269$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$56$$, $nodeIndices$$3_selectedItems$$1$$[$j$$96$$]);
              if(!$selectedMap$$1$$[$node$$269$$[D.$DvtNBoxConstants$$.ID]]) {
                $selected$$36$$ = D.$JSCompiler_alias_FALSE$$;
                break
              }
            }
            $selected$$36$$ && $selectedIds$$9$$.push($objects$$4$$[$i$$735$$].getId())
          }
        }
      }
    }
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)($nbox$$56$$.$getSelectionHandler$(), $selectedIds$$9$$, $objects$$4$$)
  }
};
D.$DvtNBoxRenderer$$.$_forceLayoutGroups$ = function $$DvtNBoxRenderer$$$$_forceLayoutGroups$$($groups$$10$$, $width$$119$$, $height$$110$$) {
  var $sortedGroups$$1$$ = [], $group$$34_iPos_position$$59$$;
  for($group$$34_iPos_position$$59$$ in $groups$$10$$) {
    $sortedGroups$$1$$.push($group$$34_iPos_position$$59$$)
  }
  $sortedGroups$$1$$.sort(function($width$$119$$, $height$$110$$) {
    return D.$DvtNBoxCategoryNode$$.$compareSize$($groups$$10$$[$width$$119$$], $groups$$10$$[$height$$110$$])
  });
  for(var $positions$$1$$ = {}, $alpha$$45_left$$16_thetaStep$$ = 2 * window.Math.PI / $sortedGroups$$1$$.length, $i$$736$$ = 0;$i$$736$$ < $sortedGroups$$1$$.length;$i$$736$$++) {
    $positions$$1$$[$sortedGroups$$1$$[$i$$736$$]] = D.$DvtVectorUtils$$.$createVector$($i$$736$$ * window.Math.cos($alpha$$45_left$$16_thetaStep$$ * $i$$736$$), $i$$736$$ * window.Math.sin($alpha$$45_left$$16_thetaStep$$ * $i$$736$$))
  }
  for(var $alpha$$45_left$$16_thetaStep$$ = 1, $right$$11_xGravity$$ = -0.25 * $height$$110$$ / window.Math.max($width$$119$$, $height$$110$$), $top$$15_yGravity$$ = -0.25 * $width$$119$$ / window.Math.max($width$$119$$, $height$$110$$);0.005 < $alpha$$45_left$$16_thetaStep$$;) {
    for(var $bottom$$10_displacement$$3$$ = {}, $i$$736$$ = 0;$i$$736$$ < $sortedGroups$$1$$.length;$i$$736$$++) {
      var $iGroup_side$$25$$ = $sortedGroups$$1$$[$i$$736$$];
      $group$$34_iPos_position$$59$$ = $positions$$1$$[$iGroup_side$$25$$];
      var $iSize$$ = $groups$$10$$[$iGroup_side$$25$$].nodeIndices.length;
      $bottom$$10_displacement$$3$$[$iGroup_side$$25$$] = D.$DvtVectorUtils$$.$createVector$($alpha$$45_left$$16_thetaStep$$ * $right$$11_xGravity$$ * $group$$34_iPos_position$$59$$.x, $alpha$$45_left$$16_thetaStep$$ * $top$$15_yGravity$$ * $group$$34_iPos_position$$59$$.y);
      for(var $j$$97$$ = 0;$j$$97$$ < $sortedGroups$$1$$.length;$j$$97$$++) {
        if($i$$736$$ != $j$$97$$) {
          for(var $difference$$1_jGroup$$ = $sortedGroups$$1$$[$j$$97$$], $jSize$$ = $groups$$10$$[$difference$$1_jGroup$$].nodeIndices.length, $difference$$1_jGroup$$ = D.$DvtVectorUtils$$.$subtractVectors$($group$$34_iPos_position$$59$$, $positions$$1$$[$difference$$1_jGroup$$]), $distance$$9$$ = D.$DvtVectorUtils$$.$getMagnitude$($difference$$1_jGroup$$), $angle$$52_minimumDistance$$ = window.Math.atan2($difference$$1_jGroup$$.y, $difference$$1_jGroup$$.x);0 > $angle$$52_minimumDistance$$;) {
            $angle$$52_minimumDistance$$ += window.Math.PI / 2
          }
          for(;$angle$$52_minimumDistance$$ >= window.Math.PI / 2;) {
            $angle$$52_minimumDistance$$ -= window.Math.PI / 2
          }
          $angle$$52_minimumDistance$$ = $angle$$52_minimumDistance$$ < window.Math.PI / 4 ? 0.5 * (window.Math.sqrt($iSize$$) + window.Math.sqrt($jSize$$)) / window.Math.cos($angle$$52_minimumDistance$$) : 0.5 * (window.Math.sqrt($iSize$$) + window.Math.sqrt($jSize$$)) / window.Math.sin($angle$$52_minimumDistance$$);
          $distance$$9$$ < $angle$$52_minimumDistance$$ && ($bottom$$10_displacement$$3$$[$iGroup_side$$25$$] = D.$DvtVectorUtils$$.$addVectors$($bottom$$10_displacement$$3$$[$iGroup_side$$25$$], D.$DvtVectorUtils$$.$scaleVector$($difference$$1_jGroup$$, (1 - $alpha$$45_left$$16_thetaStep$$) * $jSize$$ / ($iSize$$ + $jSize$$) * (($angle$$52_minimumDistance$$ - $distance$$9$$) / $distance$$9$$))))
        }
      }
    }
    for($i$$736$$ = 0;$i$$736$$ < $sortedGroups$$1$$.length;$i$$736$$++) {
      $iGroup_side$$25$$ = $sortedGroups$$1$$[$i$$736$$], $positions$$1$$[$iGroup_side$$25$$] = D.$DvtVectorUtils$$.$addVectors$($positions$$1$$[$iGroup_side$$25$$], $bottom$$10_displacement$$3$$[$iGroup_side$$25$$])
    }
    $alpha$$45_left$$16_thetaStep$$ *= 0.98
  }
  $alpha$$45_left$$16_thetaStep$$ = window.Number.MAX_VALUE;
  $right$$11_xGravity$$ = -window.Number.MAX_VALUE;
  $top$$15_yGravity$$ = window.Number.MAX_VALUE;
  $bottom$$10_displacement$$3$$ = -window.Number.MAX_VALUE;
  for($i$$736$$ = 0;$i$$736$$ < $sortedGroups$$1$$.length;$i$$736$$++) {
    $group$$34_iPos_position$$59$$ = $sortedGroups$$1$$[$i$$736$$], $iGroup_side$$25$$ = window.Math.sqrt($groups$$10$$[$group$$34_iPos_position$$59$$].nodeIndices.length), $group$$34_iPos_position$$59$$ = $positions$$1$$[$group$$34_iPos_position$$59$$], $alpha$$45_left$$16_thetaStep$$ = window.Math.min($alpha$$45_left$$16_thetaStep$$, $group$$34_iPos_position$$59$$.x - $iGroup_side$$25$$ / 2), $right$$11_xGravity$$ = window.Math.max($right$$11_xGravity$$, $group$$34_iPos_position$$59$$.x + $iGroup_side$$25$$ / 
    2), $top$$15_yGravity$$ = window.Math.min($top$$15_yGravity$$, $group$$34_iPos_position$$59$$.y - $iGroup_side$$25$$ / 2), $bottom$$10_displacement$$3$$ = window.Math.max($bottom$$10_displacement$$3$$, $group$$34_iPos_position$$59$$.y + $iGroup_side$$25$$ / 2)
  }
  return{scale:window.Math.min($width$$119$$ / ($right$$11_xGravity$$ - $alpha$$45_left$$16_thetaStep$$), $height$$110$$ / ($bottom$$10_displacement$$3$$ - $top$$15_yGravity$$)), center:new D.$DvtPoint$$(($alpha$$45_left$$16_thetaStep$$ + $right$$11_xGravity$$) / 2, ($top$$15_yGravity$$ + $bottom$$10_displacement$$3$$) / 2), positions:$positions$$1$$}
};
D.$DvtNBoxRenderer$$.$_processOtherThreshold$ = function $$DvtNBoxRenderer$$$$_processOtherThreshold$$($nbox$$57$$, $groups$$11$$) {
  var $nodeCount$$12_otherCount$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($nbox$$57$$), $nodeCount$$12_otherCount$$ = D.$DvtNBoxDataUtils$$.$getOtherThreshold$($nbox$$57$$) * $nodeCount$$12_otherCount$$;
  if(1 >= $nodeCount$$12_otherCount$$) {
    return $groups$$11$$
  }
  var $processedGroups$$ = {}, $otherGroup$$ = {};
  if(D.$DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$57$$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
    for(var $groupId$$23$$ in $groups$$11$$) {
      var $group$$35$$ = $groups$$11$$[$groupId$$23$$];
      $otherGroup$$.cell = $group$$35$$.cell;
      break
    }
  }
  $otherGroup$$.id = "other";
  $otherGroup$$.nodeIndices = [];
  $otherGroup$$.otherNode = D.$JSCompiler_alias_TRUE$$;
  for($groupId$$23$$ in $groups$$11$$) {
    if($group$$35$$ = $groups$$11$$[$groupId$$23$$], $group$$35$$.nodeIndices.length < $nodeCount$$12_otherCount$$) {
      for(var $i$$737$$ = 0;$i$$737$$ < $group$$35$$.nodeIndices.length;$i$$737$$++) {
        $otherGroup$$.nodeIndices.push($group$$35$$.nodeIndices[$i$$737$$])
      }
    }else {
      $processedGroups$$[$groupId$$23$$] = $group$$35$$
    }
  }
  0 < $otherGroup$$.nodeIndices.length && ($processedGroups$$.other = $otherGroup$$);
  return $processedGroups$$
};
D.$DvtNBoxRenderer$$.$_renderDrawer$ = function $$DvtNBoxRenderer$$$$_renderDrawer$$($nbox$$58$$, $container$$163_event$$595$$, $availSpace$$113$$) {
  var $drawerData$$5$$ = D.$DvtNBoxDataUtils$$.$getDrawer$($nbox$$58$$);
  $drawerData$$5$$ && (D.$DvtNBoxDataUtils$$.$getCategoryNode$($nbox$$58$$, $drawerData$$5$$.id) ? D.$DvtNBoxDrawer$$.newInstance($nbox$$58$$, $drawerData$$5$$).$render$($container$$163_event$$595$$, $availSpace$$113$$) : ($nbox$$58$$.$getOptions$()[D.$DvtNBoxConstants$$.$DRAWER$] = D.$JSCompiler_alias_NULL$$, $container$$163_event$$595$$ = new D.$DvtSetPropertyEvent$$, (0,D.$JSCompiler_StaticMethods_addParam$$)($container$$163_event$$595$$, D.$DvtNBoxConstants$$.$DRAWER$, D.$JSCompiler_alias_NULL$$), 
  $nbox$$58$$.$processEvent$($container$$163_event$$595$$)))
};
D.$DvtNBoxRenderer$$.$getGlobalMatrix$ = function $$DvtNBoxRenderer$$$$getGlobalMatrix$$($current$$7_displayable$$70$$) {
  var $matrix$$19$$ = $current$$7_displayable$$70$$.$getMatrix$().$clone$();
  for($current$$7_displayable$$70$$ = $current$$7_displayable$$70$$.getParent();$current$$7_displayable$$70$$;) {
    var $currentMatrix$$ = $current$$7_displayable$$70$$.$getMatrix$();
    $matrix$$19$$.translate($currentMatrix$$.$_tx$, $currentMatrix$$.$_ty$);
    $current$$7_displayable$$70$$ = $current$$7_displayable$$70$$.getParent()
  }
  return $matrix$$19$$
};
D.$DvtNBoxRenderer$$.$animateUpdate$ = function $$DvtNBoxRenderer$$$$animateUpdate$$($animationHandler$$33$$, $oldNBox$$14$$, $newNBox$$14$$) {
  D.$DvtNBoxRenderer$$.$_animateCells$($animationHandler$$33$$, $oldNBox$$14$$, $newNBox$$14$$);
  var $oldDrawer$$3$$ = D.$DvtNBoxDataUtils$$.$getDrawer$($oldNBox$$14$$), $oldDrawer$$3$$ = $oldDrawer$$3$$ ? $oldDrawer$$3$$.id : D.$JSCompiler_alias_NULL$$, $newDrawer$$2$$ = D.$DvtNBoxDataUtils$$.$getDrawer$($newNBox$$14$$), $newDrawer$$2$$ = $newDrawer$$2$$ ? $newDrawer$$2$$.id : D.$JSCompiler_alias_NULL$$;
  $oldDrawer$$3$$ == $newDrawer$$2$$ ? D.$DvtNBoxRenderer$$.$_animateNodes$($animationHandler$$33$$, $oldNBox$$14$$, $newNBox$$14$$) : D.$DvtNBoxRenderer$$.$_animateDrawer$($animationHandler$$33$$, $oldNBox$$14$$, $newNBox$$14$$)
};
D.$DvtNBoxRenderer$$.$_animateCells$ = function $$DvtNBoxRenderer$$$$_animateCells$$($animationHandler$$34$$, $oldNBox$$15$$, $newNBox$$15$$) {
  for(var $identical$$1_oldRowCount$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($oldNBox$$15$$), $newRowCount_oldColumnValue$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($newNBox$$15$$), $newColumnValue_oldColumnCount_oldRowValue$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($oldNBox$$15$$), $newColumnCount$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($newNBox$$15$$), $newRowValue_oldCellCount$$ = $identical$$1_oldRowCount$$ * $newColumnValue_oldColumnCount_oldRowValue$$, $newCellCount$$ = $newRowCount_oldColumnValue$$ * 
  $newColumnCount$$, $oldCells$$ = [], $newCells$$ = [], $i$$738$$ = 0;$i$$738$$ < $newRowValue_oldCellCount$$;$i$$738$$++) {
    $oldCells$$.push(D.$DvtNBoxDataUtils$$.$getDisplayable$($oldNBox$$15$$, D.$DvtNBoxDataUtils$$.$getCell$($oldNBox$$15$$, $i$$738$$)))
  }
  for($i$$738$$ = 0;$i$$738$$ < $newCellCount$$;$i$$738$$++) {
    $newCells$$.push(D.$DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$15$$, D.$DvtNBoxDataUtils$$.$getCell$($newNBox$$15$$, $i$$738$$)))
  }
  if($identical$$1_oldRowCount$$ == $newRowCount_oldColumnValue$$ && $newColumnValue_oldColumnCount_oldRowValue$$ == $newColumnCount$$) {
    $identical$$1_oldRowCount$$ = D.$JSCompiler_alias_TRUE$$;
    for($i$$738$$ = 0;$i$$738$$ < $newRowCount_oldColumnValue$$;$i$$738$$++) {
      if($newColumnValue_oldColumnCount_oldRowValue$$ = D.$DvtNBoxDataUtils$$.$getRow$($oldNBox$$15$$, $i$$738$$)[D.$DvtNBoxConstants$$.ID], $newRowValue_oldCellCount$$ = D.$DvtNBoxDataUtils$$.$getRow$($newNBox$$15$$, $i$$738$$)[D.$DvtNBoxConstants$$.ID], $newColumnValue_oldColumnCount_oldRowValue$$ != $newRowValue_oldCellCount$$) {
        $identical$$1_oldRowCount$$ = D.$JSCompiler_alias_FALSE$$;
        break
      }
    }
    if($identical$$1_oldRowCount$$) {
      for($i$$738$$ = 0;$i$$738$$ < $newColumnCount$$;$i$$738$$++) {
        if($newRowCount_oldColumnValue$$ = D.$DvtNBoxDataUtils$$.$getColumn$($oldNBox$$15$$, $i$$738$$)[D.$DvtNBoxConstants$$.ID], $newColumnValue_oldColumnCount_oldRowValue$$ = D.$DvtNBoxDataUtils$$.$getColumn$($newNBox$$15$$, $i$$738$$)[D.$DvtNBoxConstants$$.ID], $newRowCount_oldColumnValue$$ != $newColumnValue_oldColumnCount_oldRowValue$$) {
          $identical$$1_oldRowCount$$ = D.$JSCompiler_alias_FALSE$$;
          break
        }
      }
    }
    if($identical$$1_oldRowCount$$) {
      (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($animationHandler$$34$$, $oldCells$$, $newCells$$);
      return
    }
  }
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($animationHandler$$34$$, $oldCells$$, []);
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($animationHandler$$34$$, [], $newCells$$)
};
D.$DvtNBoxRenderer$$.$_animateNodes$ = function $$DvtNBoxRenderer$$$$_animateNodes$$($animationHandler$$35$$, $oldGroupNodes_oldNBox$$16$$, $newGroupNodes_newNBox$$16$$) {
  for(var $oldNodeCount$$1$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($oldGroupNodes_oldNBox$$16$$), $newNodeCount$$1$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($newGroupNodes_newNBox$$16$$), $oldNodes$$4$$ = [], $newNodes$$4$$ = [], $i$$739$$ = 0;$i$$739$$ < $oldNodeCount$$1$$;$i$$739$$++) {
    $oldNodes$$4$$.push(D.$DvtNBoxDataUtils$$.$getDisplayable$($oldGroupNodes_oldNBox$$16$$, D.$DvtNBoxDataUtils$$.$getNode$($oldGroupNodes_oldNBox$$16$$, $i$$739$$)))
  }
  for($i$$739$$ = 0;$i$$739$$ < $newNodeCount$$1$$;$i$$739$$++) {
    $newNodes$$4$$.push(D.$DvtNBoxDataUtils$$.$getDisplayable$($newGroupNodes_newNBox$$16$$, D.$DvtNBoxDataUtils$$.$getNode$($newGroupNodes_newNBox$$16$$, $i$$739$$)))
  }
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($animationHandler$$35$$, $oldNodes$$4$$, $newNodes$$4$$);
  D.$DvtNBoxDataUtils$$.$getDrawer$($newGroupNodes_newNBox$$16$$) || ($oldGroupNodes_oldNBox$$16$$ = D.$DvtNBoxRenderer$$.$_getSortedGroups$($oldGroupNodes_oldNBox$$16$$), $newGroupNodes_newNBox$$16$$ = D.$DvtNBoxRenderer$$.$_getSortedGroups$($newGroupNodes_newNBox$$16$$), (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($animationHandler$$35$$, $oldGroupNodes_oldNBox$$16$$, $newGroupNodes_newNBox$$16$$))
};
D.$DvtNBoxRenderer$$.$_getSortedGroups$ = function $$DvtNBoxRenderer$$$$_getSortedGroups$$($nbox$$59$$) {
  var $cellCount$$6_groupBehavior$$6_rowCount$$19$$ = D.$DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$59$$), $groupInfo$$4$$ = $nbox$$59$$.$getOptions$().__groups, $groupNodes$$2$$ = [];
  if($groupInfo$$4$$) {
    if($cellCount$$6_groupBehavior$$6_rowCount$$19$$ == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$) {
      for(var $cellCount$$6_groupBehavior$$6_rowCount$$19$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$59$$), $columnCount$$14_i$$740$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$59$$), $cellCount$$6_groupBehavior$$6_rowCount$$19$$ = $cellCount$$6_groupBehavior$$6_rowCount$$19$$ * $columnCount$$14_i$$740$$, $columnCount$$14_i$$740$$ = 0;$columnCount$$14_i$$740$$ < $cellCount$$6_groupBehavior$$6_rowCount$$19$$;$columnCount$$14_i$$740$$++) {
        for(var $cellGroupNodes$$ = D.$DvtNBoxRenderer$$.$_getSortedGroupsFromContainer$($nbox$$59$$, $groupInfo$$4$$[$columnCount$$14_i$$740$$ + ""]), $j$$98$$ = 0;$j$$98$$ < $cellGroupNodes$$.length;$j$$98$$++) {
          $groupNodes$$2$$.push($cellGroupNodes$$[$j$$98$$])
        }
      }
    }else {
      $groupNodes$$2$$ = D.$DvtNBoxRenderer$$.$_getSortedGroupsFromContainer$($nbox$$59$$, $groupInfo$$4$$)
    }
  }
  return $groupNodes$$2$$
};
D.$DvtNBoxRenderer$$.$_getSortedGroupsFromContainer$ = function $$DvtNBoxRenderer$$$$_getSortedGroupsFromContainer$$($nbox$$60$$, $container$$164$$) {
  var $groupNodes$$3$$ = [], $id$$240$$;
  for($id$$240$$ in $container$$164$$) {
    var $displayable$$71$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$60$$, $container$$164$$[$id$$240$$]);
    $displayable$$71$$ && $groupNodes$$3$$.push($displayable$$71$$)
  }
  $groupNodes$$3$$.sort(function($nbox$$60$$, $container$$164$$) {
    var $groupNodes$$3$$ = $nbox$$60$$.getId(), $id$$240$$ = $container$$164$$.getId();
    return $groupNodes$$3$$ == $id$$240$$ ? 0 : $groupNodes$$3$$ < $id$$240$$ ? -1 : 1
  });
  return $groupNodes$$3$$
};
D.$DvtNBoxRenderer$$.$_animateDrawer$ = function $$DvtNBoxRenderer$$$$_animateDrawer$$($animationHandler$$36$$, $newDrawer$$4_oldNBox$$17$$, $newNBox$$17$$) {
  var $oldDrawer$$4$$ = D.$DvtNBoxDataUtils$$.$getDrawer$($newDrawer$$4_oldNBox$$17$$), $oldDrawer$$4$$ = $oldDrawer$$4$$ ? [D.$DvtNBoxDataUtils$$.$getDisplayable$($newDrawer$$4_oldNBox$$17$$, $oldDrawer$$4$$)] : D.$JSCompiler_alias_NULL$$;
  $newDrawer$$4_oldNBox$$17$$ = ($newDrawer$$4_oldNBox$$17$$ = D.$DvtNBoxDataUtils$$.$getDrawer$($newNBox$$17$$)) ? [D.$DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$17$$, $newDrawer$$4_oldNBox$$17$$)] : [];
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($animationHandler$$36$$, $oldDrawer$$4$$, $newDrawer$$4_oldNBox$$17$$)
};
D.$DvtNBoxRenderer$$.$setFill$ = function $$DvtNBoxRenderer$$$$setFill$$($displayable$$72$$, $fillString$$) {
  if(0 == $fillString$$.indexOf("linear-gradient")) {
    var $linearGradient$$3$$ = (0,D.$DvtGradientParser$parseCSSGradient$$)($fillString$$);
    $linearGradient$$3$$ && $displayable$$72$$.$setFill$(new D.$DvtLinearGradientFill$$($linearGradient$$3$$.$getAngle$(), $linearGradient$$3$$.$_arColors$, $linearGradient$$3$$.$_arAlphas$, $linearGradient$$3$$.$_arRatios$))
  }else {
    $displayable$$72$$.$setSolidFill$($fillString$$)
  }
};
D.$DvtNBoxRenderer$$.$_fixZOrder$ = function $$DvtNBoxRenderer$$$$_fixZOrder$$($nbox$$61_panelDrawer$$4$$) {
  var $legendData$$5$$ = D.$DvtNBoxDataUtils$$.$getLegend$($nbox$$61_panelDrawer$$4$$);
  $legendData$$5$$ && $legendData$$5$$.sections && ($nbox$$61_panelDrawer$$4$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$61_panelDrawer$$4$$, $legendData$$5$$, "panelDrawer")) && $nbox$$61_panelDrawer$$4$$.getParent().$addChild$($nbox$$61_panelDrawer$$4$$)
};
D.$DvtNBoxCellRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxCellRenderer$$, D.$DvtObj$$, "DvtNBoxCellRenderer");
D.$DvtNBoxCellRenderer$$.$render$ = function $$DvtNBoxCellRenderer$$$$render$$($nbox$$19$$, $cellData$$8$$, $cellContainer_childArea$$, $cellLayout$$2$$, $addedHeader_cellCounts$$2$$, $availSpace$$98_cellIndex$$4_childContainer$$) {
  var $cellBottomGap_options$$204$$ = $nbox$$19$$.$getOptions$(), $cellGap_cellRect$$ = $cellBottomGap_options$$204$$.__layout.cellGap, $cellStartGap$$ = $cellBottomGap_options$$204$$.__layout.cellStartGap, $cellEndGap$$ = $cellBottomGap_options$$204$$.__layout.cellEndGap, $cellTopGap$$ = $cellBottomGap_options$$204$$.__layout.cellTopGap, $cellBottomGap_options$$204$$ = $cellBottomGap_options$$204$$.__layout.cellBottomGap, $keyboardFocusEffect$$1_r$$56_style$$102$$ = D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$19$$, 
  $cellData$$8$$[D.$DvtNBoxConstants$$.$ROW$]), $c$$37$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$19$$, $cellData$$8$$[D.$DvtNBoxConstants$$.$COLUMN$]), $cellDims$$ = D.$DvtNBoxCellRenderer$$.$getCellDimensions$($nbox$$19$$, $keyboardFocusEffect$$1_r$$56_style$$102$$, $c$$37$$, $cellLayout$$2$$, $availSpace$$98_cellIndex$$4_childContainer$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($cellContainer_childArea$$, $cellDims$$.x + $cellGap_cellRect$$ / 2, $cellDims$$.y + $cellGap_cellRect$$ / 2);
  $availSpace$$98_cellIndex$$4_childContainer$$ = $keyboardFocusEffect$$1_r$$56_style$$102$$ * D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$19$$) + $c$$37$$;
  $cellGap_cellRect$$ = new D.$DvtRect$$($nbox$$19$$.$getCtx$(), 0, 0, window.Math.max($cellDims$$.$w$ - $cellGap_cellRect$$, 0), window.Math.max($cellDims$$.$h$ - $cellGap_cellRect$$, 0));
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($cellGap_cellRect$$);
  $keyboardFocusEffect$$1_r$$56_style$$102$$ = D.$DvtNBoxStyleUtils$$.$getCellStyle$($nbox$$19$$, $availSpace$$98_cellIndex$$4_childContainer$$);
  D.$DvtNBoxCellRenderer$$.$_applyStyleToRect$($cellGap_cellRect$$, $keyboardFocusEffect$$1_r$$56_style$$102$$);
  $cellContainer_childArea$$.$addChild$($cellGap_cellRect$$);
  D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$19$$, $cellData$$8$$, $cellGap_cellRect$$, "background");
  $keyboardFocusEffect$$1_r$$56_style$$102$$ = new D.$DvtKeyboardFocusEffect$$($nbox$$19$$.$getCtx$(), $cellContainer_childArea$$, new D.$DvtRectangle$$(-1, -1, $cellGap_cellRect$$.getWidth() + 2, $cellGap_cellRect$$.getHeight() + 2));
  D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$19$$, $cellData$$8$$, $keyboardFocusEffect$$1_r$$56_style$$102$$, "focusEffect");
  $addedHeader_cellCounts$$2$$ = D.$DvtNBoxCellRenderer$$.$renderHeader$($nbox$$19$$, $cellData$$8$$, $cellContainer_childArea$$, $addedHeader_cellCounts$$2$$, D.$JSCompiler_alias_FALSE$$);
  $availSpace$$98_cellIndex$$4_childContainer$$ = D.$DvtNBoxDataUtils$$.$isCellMaximized$($nbox$$19$$, $availSpace$$98_cellIndex$$4_childContainer$$) ? new D.$DvtSimpleScrollableContainer$$($nbox$$19$$.$getCtx$(), $cellGap_cellRect$$.getWidth(), $cellGap_cellRect$$.getHeight() - ($addedHeader_cellCounts$$2$$ ? $cellLayout$$2$$.headerSize : 0)) : new D.$DvtContainer$$($nbox$$19$$.$getCtx$());
  $cellContainer_childArea$$.$addChild$($availSpace$$98_cellIndex$$4_childContainer$$);
  $cellContainer_childArea$$.$setChildContainer$($availSpace$$98_cellIndex$$4_childContainer$$);
  $cellContainer_childArea$$ = D.$JSCompiler_alias_NULL$$;
  $addedHeader_cellCounts$$2$$ ? ($cellContainer_childArea$$ = D.$DvtNBoxCellRenderer$$.$_isLabelVertical$($nbox$$19$$, $cellData$$8$$) ? new D.$DvtRectangle$$($cellLayout$$2$$.headerSize, $cellTopGap$$, $cellGap_cellRect$$.getWidth() - $cellLayout$$2$$.headerSize - $cellEndGap$$, $cellGap_cellRect$$.getHeight() - $cellTopGap$$ - $cellBottomGap_options$$204$$) : new D.$DvtRectangle$$($cellStartGap$$, $cellLayout$$2$$.headerSize, $cellGap_cellRect$$.getWidth() - $cellStartGap$$ - $cellEndGap$$, $cellGap_cellRect$$.getHeight() - 
  $cellLayout$$2$$.headerSize - $cellBottomGap_options$$204$$), $availSpace$$98_cellIndex$$4_childContainer$$ instanceof D.$DvtSimpleScrollableContainer$$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($availSpace$$98_cellIndex$$4_childContainer$$, 0, $cellLayout$$2$$.headerSize)) : $cellContainer_childArea$$ = new D.$DvtRectangle$$($cellStartGap$$, $cellTopGap$$, $cellGap_cellRect$$.getWidth() - $cellStartGap$$ - $cellEndGap$$, $cellGap_cellRect$$.getHeight() - $cellTopGap$$ - $cellBottomGap_options$$204$$);
  $cellContainer_childArea$$.$w$ = window.Math.max($cellContainer_childArea$$.$w$, 0);
  $cellContainer_childArea$$.$h$ = window.Math.max($cellContainer_childArea$$.$h$, 0);
  $cellData$$8$$.__childArea = $cellContainer_childArea$$
};
D.$DvtNBoxCellRenderer$$.$renderHeader$ = function $$DvtNBoxCellRenderer$$$$renderHeader$$($nbox$$20$$, $cellData$$9$$, $cellContainer$$1$$, $cellCounts$$3_countLabelOffset_labelWidth$$6$$, $label$$65_noCount$$) {
  var $addedHeader$$1_oldCountLabel_oldLabel$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$20$$, $cellData$$9$$, D.$DvtNBoxConstants$$.$LABEL$);
  $addedHeader$$1_oldCountLabel_oldLabel$$ && ($addedHeader$$1_oldCountLabel_oldLabel$$.getParent().removeChild($addedHeader$$1_oldCountLabel_oldLabel$$), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$20$$, $cellData$$9$$, D.$JSCompiler_alias_NULL$$, D.$DvtNBoxConstants$$.$LABEL$));
  if($addedHeader$$1_oldCountLabel_oldLabel$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$20$$, $cellData$$9$$, "countLabel")) {
    $addedHeader$$1_oldCountLabel_oldLabel$$.getParent().removeChild($addedHeader$$1_oldCountLabel_oldLabel$$), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$20$$, $cellData$$9$$, D.$JSCompiler_alias_NULL$$, "countLabel")
  }
  $addedHeader$$1_oldCountLabel_oldLabel$$ = D.$JSCompiler_alias_FALSE$$;
  if($cellData$$9$$ && $cellData$$9$$[D.$DvtNBoxConstants$$.$LABEL$]) {
    var $options$$205_r$$57_rtl$$20$$ = $nbox$$20$$.$getOptions$(), $countLabelGap$$ = $options$$205_r$$57_rtl$$20$$.__layout.countLabelGap, $cellStartGap$$1_labelX$$2$$ = $options$$205_r$$57_rtl$$20$$.__layout.cellStartGap, $cellEndGap$$1$$ = $options$$205_r$$57_rtl$$20$$.__layout.cellEndGap, $cellTopGap$$1$$ = $options$$205_r$$57_rtl$$20$$.__layout.cellTopGap, $cellLayout$$3_labelHeight$$4$$ = $options$$205_r$$57_rtl$$20$$.__layout.__cellLayout, $options$$205_r$$57_rtl$$20$$ = D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$20$$, 
    $cellData$$9$$[D.$DvtNBoxConstants$$.$ROW$]), $c$$38_cellRect$$1$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$20$$, $cellData$$9$$[D.$DvtNBoxConstants$$.$COLUMN$]), $cellIndex$$5$$ = $options$$205_r$$57_rtl$$20$$ * D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$20$$) + $c$$38_cellRect$$1$$, $c$$38_cellRect$$1$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$20$$, $cellData$$9$$, "background"), $options$$205_r$$57_rtl$$20$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$20$$.$getCtx$()), $cellLayout$$3_labelHeight$$4$$ = 
    $cellLayout$$3_labelHeight$$4$$.labelHeight, $skipLabel$$ = D.$JSCompiler_alias_FALSE$$, $halign$$7$$ = D.$DvtNBoxStyleUtils$$.$getLabelHalign$($nbox$$20$$, $cellData$$9$$), $countLabelWidth_countLabelX$$ = 0, $countLabelWidthWithGap$$ = 0, $countLabel$$ = D.$JSCompiler_alias_NULL$$, $countLabelY$$ = $countLabelWidth_countLabelX$$ = 0, $countText$$ = D.$JSCompiler_alias_NULL$$;
    !$label$$65_noCount$$ && "on" == D.$DvtNBoxStyleUtils$$.$getCellShowCount$($nbox$$20$$, $cellData$$9$$) && ($countText$$ = "" + $cellCounts$$3_countLabelOffset_labelWidth$$6$$.total[$cellIndex$$5$$], $cellCounts$$3_countLabelOffset_labelWidth$$6$$.highlighted && ($countText$$ = (0,D.$DvtBundle$getTranslatedString$$)("DvtNBoxBundle", "HIGHLIGHTED_COUNT", [$cellCounts$$3_countLabelOffset_labelWidth$$6$$.highlighted[$cellIndex$$5$$], $countText$$])));
    D.$DvtNBoxCellRenderer$$.$_isLabelVertical$($nbox$$20$$, $cellData$$9$$) ? ($countText$$ && ($countLabel$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$20$$.$getCtx$(), $countText$$, D.$DvtNBoxStyleUtils$$.$getCellCountLabelStyle$($nbox$$20$$), "center", "middle"), D.$DvtTextUtils$$.$fitText$($countLabel$$, $c$$38_cellRect$$1$$.getHeight() - $cellStartGap$$1_labelX$$2$$ - $cellEndGap$$1$$, $c$$38_cellRect$$1$$.getWidth() - 2 * $cellTopGap$$1$$, $cellContainer$$1$$) ? (D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$20$$, 
    $cellData$$9$$, $countLabel$$, "countLabel"), $addedHeader$$1_oldCountLabel_oldLabel$$ = D.$JSCompiler_alias_TRUE$$, $countLabelWidth_countLabelX$$ = $countLabel$$.$getDimensions$().$w$, $countLabelWidthWithGap$$ = $countLabelWidth_countLabelX$$ + $countLabelGap$$, $countLabelY$$ = $c$$38_cellRect$$1$$.getHeight() / 2, $countLabelWidth_countLabelX$$ = $cellTopGap$$1$$ + $cellLayout$$3_labelHeight$$4$$ / 2) : $skipLabel$$ = D.$JSCompiler_alias_TRUE$$), $cellCounts$$3_countLabelOffset_labelWidth$$6$$ = 
    0, $skipLabel$$ || ($label$$65_noCount$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$20$$.$getCtx$(), $cellData$$9$$[D.$DvtNBoxConstants$$.$LABEL$], D.$DvtNBoxStyleUtils$$.$getCellLabelStyle$($nbox$$20$$, $cellIndex$$5$$), "center", "middle"), D.$DvtTextUtils$$.$fitText$($label$$65_noCount$$, $c$$38_cellRect$$1$$.getHeight() - $cellStartGap$$1_labelX$$2$$ - $cellEndGap$$1$$ - $countLabelWidthWithGap$$, $c$$38_cellRect$$1$$.getWidth() - 2 * $cellTopGap$$1$$, $cellContainer$$1$$) && (D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$20$$, 
    $cellData$$9$$, $label$$65_noCount$$, D.$DvtNBoxConstants$$.$LABEL$), $cellCounts$$3_countLabelOffset_labelWidth$$6$$ = $label$$65_noCount$$.$getDimensions$().$w$, $addedHeader$$1_oldCountLabel_oldLabel$$ = D.$JSCompiler_alias_TRUE$$, D.$DvtNBoxRenderer$$.$positionText$($label$$65_noCount$$, $cellTopGap$$1$$ + $cellLayout$$3_labelHeight$$4$$ / 2, ($c$$38_cellRect$$1$$.getHeight() + $countLabelWidthWithGap$$) / 2, $options$$205_r$$57_rtl$$20$$ ? window.Math.PI / 2 : -window.Math.PI / 2), $cellCounts$$3_countLabelOffset_labelWidth$$6$$ = 
    ($cellCounts$$3_countLabelOffset_labelWidth$$6$$ + $countLabelGap$$) / 2)), $countLabel$$ && D.$DvtNBoxRenderer$$.$positionText$($countLabel$$, $countLabelWidth_countLabelX$$, $countLabelY$$ - $cellCounts$$3_countLabelOffset_labelWidth$$6$$, $options$$205_r$$57_rtl$$20$$ ? window.Math.PI / 2 : -window.Math.PI / 2)) : ($countText$$ && ($countLabel$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$20$$.$getCtx$(), $countText$$, D.$DvtNBoxStyleUtils$$.$getCellCountLabelStyle$($nbox$$20$$), $halign$$7$$, 
    "middle"), D.$DvtTextUtils$$.$fitText$($countLabel$$, $c$$38_cellRect$$1$$.getWidth() - $cellStartGap$$1_labelX$$2$$ - $cellEndGap$$1$$, $c$$38_cellRect$$1$$.getHeight() - 2 * $cellTopGap$$1$$, $cellContainer$$1$$) ? (D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$20$$, $cellData$$9$$, $countLabel$$, "countLabel"), $addedHeader$$1_oldCountLabel_oldLabel$$ = D.$JSCompiler_alias_TRUE$$, $countLabelWidth_countLabelX$$ = $countLabel$$.$getDimensions$().$w$, $countLabelWidthWithGap$$ = $countLabelWidth_countLabelX$$ + 
    $countLabelGap$$, $countLabelWidth_countLabelX$$ = "center" == $halign$$7$$ ? $c$$38_cellRect$$1$$.getWidth() / 2 : "right" == $halign$$7$$ ? $c$$38_cellRect$$1$$.getWidth() - $cellEndGap$$1$$ : $cellStartGap$$1_labelX$$2$$, $countLabelY$$ = $cellTopGap$$1$$ + $cellLayout$$3_labelHeight$$4$$ / 2, D.$DvtNBoxRenderer$$.$positionText$($countLabel$$, $countLabelWidth_countLabelX$$, $countLabelY$$)) : $skipLabel$$ = D.$JSCompiler_alias_TRUE$$), $cellCounts$$3_countLabelOffset_labelWidth$$6$$ = 0, 
    $skipLabel$$ || ($label$$65_noCount$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$20$$.$getCtx$(), $cellData$$9$$[D.$DvtNBoxConstants$$.$LABEL$], D.$DvtNBoxStyleUtils$$.$getCellLabelStyle$($nbox$$20$$, $cellIndex$$5$$), $halign$$7$$, "middle"), D.$DvtTextUtils$$.$fitText$($label$$65_noCount$$, $c$$38_cellRect$$1$$.getWidth() - $cellStartGap$$1_labelX$$2$$ - $cellEndGap$$1$$ - $countLabelWidthWithGap$$, $c$$38_cellRect$$1$$.getHeight() - 2 * $cellTopGap$$1$$, $cellContainer$$1$$) && (D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$20$$, 
    $cellData$$9$$, $label$$65_noCount$$, D.$DvtNBoxConstants$$.$LABEL$), $cellCounts$$3_countLabelOffset_labelWidth$$6$$ = $label$$65_noCount$$.$getDimensions$().$w$, $addedHeader$$1_oldCountLabel_oldLabel$$ = D.$JSCompiler_alias_TRUE$$, "center" == $halign$$7$$ ? ($cellStartGap$$1_labelX$$2$$ = ($c$$38_cellRect$$1$$.getWidth() - ($options$$205_r$$57_rtl$$20$$ ? -1 : 1) * $countLabelWidthWithGap$$) / 2, $cellCounts$$3_countLabelOffset_labelWidth$$6$$ = ($options$$205_r$$57_rtl$$20$$ ? -1 : 1) * 
    ($cellCounts$$3_countLabelOffset_labelWidth$$6$$ + $countLabelGap$$) / 2) : "right" == $halign$$7$$ ? ($cellStartGap$$1_labelX$$2$$ = $c$$38_cellRect$$1$$.getWidth() - $cellEndGap$$1$$ - ($options$$205_r$$57_rtl$$20$$ ? 0 : 1) * $countLabelWidthWithGap$$, $cellCounts$$3_countLabelOffset_labelWidth$$6$$ = ($options$$205_r$$57_rtl$$20$$ ? -1 : 0) * ($cellCounts$$3_countLabelOffset_labelWidth$$6$$ + $countLabelGap$$)) : ($cellStartGap$$1_labelX$$2$$ += ($options$$205_r$$57_rtl$$20$$ ? 1 : 0) * $countLabelWidthWithGap$$, 
    $cellCounts$$3_countLabelOffset_labelWidth$$6$$ = ($options$$205_r$$57_rtl$$20$$ ? 0 : 1) * ($cellCounts$$3_countLabelOffset_labelWidth$$6$$ + $countLabelGap$$)), D.$DvtNBoxRenderer$$.$positionText$($label$$65_noCount$$, $cellStartGap$$1_labelX$$2$$, $cellTopGap$$1$$ + $cellLayout$$3_labelHeight$$4$$ / 2))), $countLabel$$ && $cellCounts$$3_countLabelOffset_labelWidth$$6$$ && D.$DvtNBoxRenderer$$.$positionText$($countLabel$$, $countLabelWidth_countLabelX$$ + $cellCounts$$3_countLabelOffset_labelWidth$$6$$, 
    $countLabelY$$))
  }
  D.$DvtNBoxCellRenderer$$.$_addAccessibilityAttributes$($nbox$$20$$, $cellData$$9$$, $cellContainer$$1$$);
  return $addedHeader$$1_oldCountLabel_oldLabel$$
};
D.$DvtNBoxCellRenderer$$.$renderBodyCountLabels$ = function $$DvtNBoxCellRenderer$$$$renderBodyCountLabels$$($nbox$$21$$, $cellCounts$$4$$, $cellContainer$$2_cellIndices$$) {
  var $cellLayout$$4$$ = D.$DvtNBoxCellRenderer$$.$calculateCellLayout$($nbox$$21$$, $cellCounts$$4$$), $cellTopGap$$2$$ = $nbox$$21$$.$getOptions$().__layout.cellTopGap, $cellStartGap$$2$$ = $nbox$$21$$.$getOptions$().__layout.cellStartGap, $childArea$$1_headerFontSize$$ = window.Number.MAX_VALUE, $removeHeaders$$ = D.$JSCompiler_alias_FALSE$$, $cellData$$10_cellIndex$$6_count$$20$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$21$$, $cellContainer$$2_cellIndices$$[0]), $headerLabel$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$21$$, 
  $cellData$$10_cellIndex$$6_count$$20$$, D.$DvtNBoxConstants$$.$LABEL$), $headerCount$$5$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$21$$, $cellData$$10_cellIndex$$6_count$$20$$, "countLabel"), $headerLabelSize_maximizedCellIndices$$ = $headerLabel$$ && $headerLabel$$.$getCSSStyle$() ? $headerLabel$$.$getCSSStyle$().$getFontSize$() : D.$JSCompiler_alias_NULL$$, $headerCountSize_minimizedCellIndices$$ = $headerCount$$5$$ && $headerCount$$5$$.$getCSSStyle$() ? $headerCount$$5$$.$getCSSStyle$().$getFontSize$() : 
  D.$JSCompiler_alias_NULL$$, $headerLabelSize_maximizedCellIndices$$ = (0,window.isNaN)($headerLabelSize_maximizedCellIndices$$) ? (0,window.parseFloat)($headerLabelSize_maximizedCellIndices$$) : $headerLabelSize_maximizedCellIndices$$, $headerCountSize_minimizedCellIndices$$ = (0,window.isNaN)($headerCountSize_minimizedCellIndices$$) ? (0,window.parseFloat)($headerCountSize_minimizedCellIndices$$) : $headerCountSize_minimizedCellIndices$$;
  if(!(0,window.isNaN)($headerLabelSize_maximizedCellIndices$$) || !(0,window.isNaN)($headerCountSize_minimizedCellIndices$$)) {
    $childArea$$1_headerFontSize$$ = (0,window.isNaN)($headerLabelSize_maximizedCellIndices$$) ? $headerCountSize_minimizedCellIndices$$ : (0,window.isNaN)($headerCountSize_minimizedCellIndices$$) ? $headerLabelSize_maximizedCellIndices$$ : window.Math.max($headerLabelSize_maximizedCellIndices$$, $headerCountSize_minimizedCellIndices$$)
  }
  for(var $headerLabelSize_maximizedCellIndices$$ = [], $headerCountSize_minimizedCellIndices$$ = [], $i$$727$$ = 0;$i$$727$$ < $cellContainer$$2_cellIndices$$.length;$i$$727$$++) {
    $cellData$$10_cellIndex$$6_count$$20$$ = $cellContainer$$2_cellIndices$$[$i$$727$$], D.$DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$21$$, $cellData$$10_cellIndex$$6_count$$20$$) ? $headerCountSize_minimizedCellIndices$$.push($cellData$$10_cellIndex$$6_count$$20$$) : $headerLabelSize_maximizedCellIndices$$.push($cellData$$10_cellIndex$$6_count$$20$$)
  }
  for(var $maximizedLabels$$ = [], $minimizedLabels$$ = [], $i$$727$$ = 0;$i$$727$$ < $headerLabelSize_maximizedCellIndices$$.length;$i$$727$$++) {
    $cellData$$10_cellIndex$$6_count$$20$$ = $headerLabelSize_maximizedCellIndices$$[$i$$727$$], $cellData$$10_cellIndex$$6_count$$20$$ = $cellCounts$$4$$.total[$cellData$$10_cellIndex$$6_count$$20$$], $maximizedLabels$$[$i$$727$$] = D.$DvtNBoxRenderer$$.$createText$($nbox$$21$$.$getCtx$(), "" + $cellData$$10_cellIndex$$6_count$$20$$, D.$DvtNBoxStyleUtils$$.$getCellBodyCountLabelStyle$($nbox$$21$$), "center", "middle")
  }
  for($i$$727$$ = 0;$i$$727$$ < $headerCountSize_minimizedCellIndices$$.length;$i$$727$$++) {
    $cellData$$10_cellIndex$$6_count$$20$$ = $headerCountSize_minimizedCellIndices$$[$i$$727$$], $cellData$$10_cellIndex$$6_count$$20$$ = $cellCounts$$4$$.total[$cellData$$10_cellIndex$$6_count$$20$$], $minimizedLabels$$[$i$$727$$] = D.$DvtNBoxRenderer$$.$createText$($nbox$$21$$.$getCtx$(), "" + $cellData$$10_cellIndex$$6_count$$20$$, D.$DvtNBoxStyleUtils$$.$getCellBodyCountLabelStyle$($nbox$$21$$), "center", "middle")
  }
  var $headerRemoved_maximizedFontSize$$ = D.$DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$($nbox$$21$$, $headerLabelSize_maximizedCellIndices$$, $maximizedLabels$$);
  if($headerRemoved_maximizedFontSize$$ <= $childArea$$1_headerFontSize$$ || $headerCount$$5$$ && !$headerLabel$$) {
    $removeHeaders$$ = D.$JSCompiler_alias_TRUE$$
  }
  var $minimizedFontSize$$ = D.$DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$($nbox$$21$$, $headerCountSize_minimizedCellIndices$$, $minimizedLabels$$);
  if($minimizedFontSize$$ <= $childArea$$1_headerFontSize$$ || $headerCount$$5$$ && !$headerLabel$$) {
    $removeHeaders$$ = D.$JSCompiler_alias_TRUE$$
  }
  if($removeHeaders$$) {
    for($i$$727$$ = 0;$i$$727$$ < $cellContainer$$2_cellIndices$$.length;$i$$727$$++) {
      $cellData$$10_cellIndex$$6_count$$20$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$21$$, $cellContainer$$2_cellIndices$$[$i$$727$$]), $headerLabel$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$21$$, $cellData$$10_cellIndex$$6_count$$20$$, D.$DvtNBoxConstants$$.$LABEL$), $headerCount$$5$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$21$$, $cellData$$10_cellIndex$$6_count$$20$$, "countLabel"), $childArea$$1_headerFontSize$$ = $cellData$$10_cellIndex$$6_count$$20$$.__childArea, $headerRemoved_maximizedFontSize$$ = 
      D.$JSCompiler_alias_FALSE$$, $headerLabel$$ && ($headerLabel$$.getParent().removeChild($headerLabel$$), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$21$$, $cellData$$10_cellIndex$$6_count$$20$$, D.$JSCompiler_alias_NULL$$, D.$DvtNBoxConstants$$.$LABEL$), $headerRemoved_maximizedFontSize$$ = D.$JSCompiler_alias_TRUE$$), $headerCount$$5$$ && ($headerCount$$5$$.getParent().removeChild($headerCount$$5$$), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$21$$, $cellData$$10_cellIndex$$6_count$$20$$, 
      D.$JSCompiler_alias_NULL$$, "countLabel"), $headerRemoved_maximizedFontSize$$ = D.$JSCompiler_alias_TRUE$$), $headerRemoved_maximizedFontSize$$ && (D.$DvtNBoxCellRenderer$$.$_isLabelVertical$($nbox$$21$$, $cellData$$10_cellIndex$$6_count$$20$$) ? ($childArea$$1_headerFontSize$$.x -= $cellLayout$$4$$.headerSize - $cellStartGap$$2$$, $childArea$$1_headerFontSize$$.$w$ += $cellLayout$$4$$.headerSize - $cellStartGap$$2$$) : ($childArea$$1_headerFontSize$$.y -= $cellLayout$$4$$.headerSize - $cellTopGap$$2$$, 
      $childArea$$1_headerFontSize$$.$h$ += $cellLayout$$4$$.headerSize - $cellTopGap$$2$$), $cellData$$10_cellIndex$$6_count$$20$$.__childArea = $childArea$$1_headerFontSize$$)
    }
    $headerRemoved_maximizedFontSize$$ = D.$DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$($nbox$$21$$, $headerLabelSize_maximizedCellIndices$$, $maximizedLabels$$);
    $minimizedFontSize$$ = D.$DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$($nbox$$21$$, $headerCountSize_minimizedCellIndices$$, $minimizedLabels$$)
  }
  for($i$$727$$ = 0;$i$$727$$ < $headerLabelSize_maximizedCellIndices$$.length;$i$$727$$++) {
    $cellData$$10_cellIndex$$6_count$$20$$ = $headerLabelSize_maximizedCellIndices$$[$i$$727$$], $cellData$$10_cellIndex$$6_count$$20$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$21$$, $cellData$$10_cellIndex$$6_count$$20$$), $cellContainer$$2_cellIndices$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$21$$, $cellData$$10_cellIndex$$6_count$$20$$), $childArea$$1_headerFontSize$$ = $cellData$$10_cellIndex$$6_count$$20$$.__childArea, $maximizedLabels$$[$i$$727$$].$setFontSize$($headerRemoved_maximizedFontSize$$), 
    D.$DvtTextUtils$$.$fitText$($maximizedLabels$$[$i$$727$$], $childArea$$1_headerFontSize$$.$w$, $childArea$$1_headerFontSize$$.$h$, $cellContainer$$2_cellIndices$$) && ($removeHeaders$$ || D.$DvtNBoxCellRenderer$$.$renderHeader$($nbox$$21$$, $cellData$$10_cellIndex$$6_count$$20$$, $cellContainer$$2_cellIndices$$, $cellCounts$$4$$, D.$JSCompiler_alias_TRUE$$), D.$DvtNBoxRenderer$$.$positionText$($maximizedLabels$$[$i$$727$$], $childArea$$1_headerFontSize$$.x + $childArea$$1_headerFontSize$$.$w$ / 
    2, $childArea$$1_headerFontSize$$.y + $childArea$$1_headerFontSize$$.$h$ / 2))
  }
  for($i$$727$$ = 0;$i$$727$$ < $headerCountSize_minimizedCellIndices$$.length;$i$$727$$++) {
    $cellData$$10_cellIndex$$6_count$$20$$ = $headerCountSize_minimizedCellIndices$$[$i$$727$$], $cellData$$10_cellIndex$$6_count$$20$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$21$$, $cellData$$10_cellIndex$$6_count$$20$$), $cellContainer$$2_cellIndices$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$21$$, $cellData$$10_cellIndex$$6_count$$20$$), $childArea$$1_headerFontSize$$ = $cellData$$10_cellIndex$$6_count$$20$$.__childArea, $minimizedLabels$$[$i$$727$$].$setFontSize$($minimizedFontSize$$), 
    D.$DvtTextUtils$$.$fitText$($minimizedLabels$$[$i$$727$$], $childArea$$1_headerFontSize$$.$w$, $childArea$$1_headerFontSize$$.$h$, $cellContainer$$2_cellIndices$$) && ($removeHeaders$$ || D.$DvtNBoxCellRenderer$$.$renderHeader$($nbox$$21$$, $cellData$$10_cellIndex$$6_count$$20$$, $cellContainer$$2_cellIndices$$, $cellCounts$$4$$, D.$JSCompiler_alias_TRUE$$), D.$DvtNBoxRenderer$$.$positionText$($minimizedLabels$$[$i$$727$$], $childArea$$1_headerFontSize$$.x + $childArea$$1_headerFontSize$$.$w$ / 
    2, $childArea$$1_headerFontSize$$.y + $childArea$$1_headerFontSize$$.$h$ / 2))
  }
};
D.$DvtNBoxCellRenderer$$.$getBodyCountLabelsFontSize$ = function $$DvtNBoxCellRenderer$$$$getBodyCountLabelsFontSize$$($nbox$$22$$, $cellIndices$$1$$, $labels$$22$$) {
  for(var $fontSize$$13$$ = window.Number.MAX_VALUE, $i$$728$$ = 0;$i$$728$$ < $cellIndices$$1$$.length;$i$$728$$++) {
    var $childArea$$2$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$22$$, $cellIndices$$1$$[$i$$728$$]).__childArea, $fontSize$$13$$ = window.Math.min($fontSize$$13$$, $labels$$22$$[$i$$728$$].$getOptimalFontSize$($childArea$$2$$))
  }
  return $fontSize$$13$$
};
D.$DvtNBoxCellRenderer$$.$_isLabelVertical$ = function $$DvtNBoxCellRenderer$$$$_isLabelVertical$$($nbox$$23$$, $cellData$$11$$) {
  var $maximizedColumn$$4$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($nbox$$23$$), $maximizedRow$$4$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($nbox$$23$$);
  return $maximizedColumn$$4$$ && $maximizedColumn$$4$$ != $cellData$$11$$[D.$DvtNBoxConstants$$.$COLUMN$] && (!$maximizedRow$$4$$ || $maximizedRow$$4$$ == $cellData$$11$$[D.$DvtNBoxConstants$$.$ROW$]) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtNBoxCellRenderer$$.$getCellDimensions$ = function $$DvtNBoxCellRenderer$$$$getCellDimensions$$($maximizedColumnIndex_nbox$$24$$, $minimizedColumnSize_rowIndex$$16$$, $columnIndex$$4$$, $cellLayout$$5_columnCount$$5$$, $availSpace$$99$$) {
  var $cellGap$$1_minimizedSize$$ = $maximizedColumnIndex_nbox$$24$$.$getOptions$().__layout.cellGap, $rtl$$21$$ = (0,D.$DvtAgent$isRightToLeft$$)($maximizedColumnIndex_nbox$$24$$.$getCtx$()), $cellGap$$1_minimizedSize$$ = $cellGap$$1_minimizedSize$$ + $cellLayout$$5_columnCount$$5$$.minimumCellSize, $rowCount$$10$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($maximizedColumnIndex_nbox$$24$$);
  $cellLayout$$5_columnCount$$5$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($maximizedColumnIndex_nbox$$24$$);
  var $defaultRowDimensions_rowH$$ = D.$DvtNBoxRenderer$$.$getRowDimensions$($maximizedColumnIndex_nbox$$24$$, $minimizedColumnSize_rowIndex$$16$$, $availSpace$$99$$), $columnW_defaultColumnDimensions$$ = D.$DvtNBoxRenderer$$.$getColumnDimensions$($maximizedColumnIndex_nbox$$24$$, $columnIndex$$4$$, $availSpace$$99$$), $maximizedRow$$5_minimizedRowSize$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($maximizedColumnIndex_nbox$$24$$), $maximizedColumn$$5$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($maximizedColumnIndex_nbox$$24$$), 
  $columnX$$ = $columnW_defaultColumnDimensions$$.x, $maximizedRowIndex_rowY$$ = $defaultRowDimensions_rowH$$.y, $columnW_defaultColumnDimensions$$ = $columnW_defaultColumnDimensions$$.$w$, $defaultRowDimensions_rowH$$ = $defaultRowDimensions_rowH$$.$h$, $processColumn$$ = D.$JSCompiler_alias_TRUE$$;
  $maximizedRow$$5_minimizedRowSize$$ && ($maximizedRowIndex_rowY$$ = D.$DvtNBoxDataUtils$$.$getRowIndex$($maximizedColumnIndex_nbox$$24$$, $maximizedRow$$5_minimizedRowSize$$), $maximizedRow$$5_minimizedRowSize$$ = window.Math.min($availSpace$$99$$.$h$ / (3 * ($rowCount$$10$$ - 1)), $cellGap$$1_minimizedSize$$), $minimizedColumnSize_rowIndex$$16$$ < $maximizedRowIndex_rowY$$ ? ($maximizedRowIndex_rowY$$ = $availSpace$$99$$.y + $availSpace$$99$$.$h$ - ($minimizedColumnSize_rowIndex$$16$$ + 1) * $maximizedRow$$5_minimizedRowSize$$, 
  $defaultRowDimensions_rowH$$ = $maximizedRow$$5_minimizedRowSize$$, $processColumn$$ = D.$JSCompiler_alias_FALSE$$) : $minimizedColumnSize_rowIndex$$16$$ == $maximizedRowIndex_rowY$$ ? ($maximizedRowIndex_rowY$$ = $availSpace$$99$$.y + ($rowCount$$10$$ - $minimizedColumnSize_rowIndex$$16$$ - 1) * $maximizedRow$$5_minimizedRowSize$$, $defaultRowDimensions_rowH$$ = $availSpace$$99$$.$h$ - ($rowCount$$10$$ - 1) * $maximizedRow$$5_minimizedRowSize$$) : ($maximizedRowIndex_rowY$$ = $availSpace$$99$$.y + 
  ($rowCount$$10$$ - $minimizedColumnSize_rowIndex$$16$$ - 1) * $maximizedRow$$5_minimizedRowSize$$, $defaultRowDimensions_rowH$$ = $maximizedRow$$5_minimizedRowSize$$, $processColumn$$ = D.$JSCompiler_alias_FALSE$$));
  $maximizedColumn$$5$$ && $processColumn$$ && ($maximizedColumnIndex_nbox$$24$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($maximizedColumnIndex_nbox$$24$$, $maximizedColumn$$5$$), $minimizedColumnSize_rowIndex$$16$$ = window.Math.min($availSpace$$99$$.$w$ / (3 * ($cellLayout$$5_columnCount$$5$$ - 1)), $cellGap$$1_minimizedSize$$), $columnIndex$$4$$ < $maximizedColumnIndex_nbox$$24$$ ? ($columnW_defaultColumnDimensions$$ = $minimizedColumnSize_rowIndex$$16$$, $columnX$$ = $availSpace$$99$$.x + ($rtl$$21$$ ? 
  $availSpace$$99$$.$w$ - $minimizedColumnSize_rowIndex$$16$$ : 0) + ($rtl$$21$$ ? -1 : 1) * $columnIndex$$4$$ * $minimizedColumnSize_rowIndex$$16$$) : $columnIndex$$4$$ == $maximizedColumnIndex_nbox$$24$$ ? ($columnW_defaultColumnDimensions$$ = $availSpace$$99$$.$w$ - ($cellLayout$$5_columnCount$$5$$ - 1) * $minimizedColumnSize_rowIndex$$16$$, $columnX$$ = $availSpace$$99$$.x + ($rtl$$21$$ ? $availSpace$$99$$.$w$ - $columnW_defaultColumnDimensions$$ : 0) + ($rtl$$21$$ ? -1 : 1) * $columnIndex$$4$$ * 
  $minimizedColumnSize_rowIndex$$16$$) : ($columnW_defaultColumnDimensions$$ = $minimizedColumnSize_rowIndex$$16$$, $columnX$$ = $availSpace$$99$$.x + ($rtl$$21$$ ? -$minimizedColumnSize_rowIndex$$16$$ : $availSpace$$99$$.$w$) + ($rtl$$21$$ ? 1 : -1) * ($cellLayout$$5_columnCount$$5$$ - $columnIndex$$4$$) * $minimizedColumnSize_rowIndex$$16$$));
  return new D.$DvtRectangle$$($columnX$$, $maximizedRowIndex_rowY$$, $columnW_defaultColumnDimensions$$, $defaultRowDimensions_rowH$$)
};
D.$DvtNBoxCellRenderer$$.$calculateCellLayout$ = function $$DvtNBoxCellRenderer$$$$calculateCellLayout$$($nbox$$25$$, $cellCounts$$6$$) {
  var $options$$207$$ = $nbox$$25$$.$getOptions$(), $cellTopGap$$3_headerSize$$ = $options$$207$$.__layout.cellTopGap, $cellBottomGap$$1_minimizedHeaderSize$$ = $options$$207$$.__layout.cellBottomGap, $cellLabelGap$$ = $options$$207$$.__layout.cellLabelGap, $cellLayout$$6_minimumCellSize$$ = $options$$207$$.__layout.minimumCellSize, $label$$66_labelHeight$$5$$ = 0, $cellData$$12_count$$21_countLabelHeight$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$25$$, 0);
  if($cellData$$12_count$$21_countLabelHeight$$ && $cellData$$12_count$$21_countLabelHeight$$[D.$DvtNBoxConstants$$.$LABEL$]) {
    var $halign$$8$$ = $cellData$$12_count$$21_countLabelHeight$$[D.$DvtNBoxConstants$$.$LABEL_HALIGN$], $label$$66_labelHeight$$5$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$25$$.$getCtx$(), $cellData$$12_count$$21_countLabelHeight$$[D.$DvtNBoxConstants$$.$LABEL$], D.$DvtNBoxStyleUtils$$.$getCellLabelStyle$($nbox$$25$$, 0), $halign$$8$$, "middle"), $label$$66_labelHeight$$5$$ = D.$DvtTextUtils$$.$guessTextDimensions$($label$$66_labelHeight$$5$$).$h$;
    "on" == D.$DvtNBoxStyleUtils$$.$getCellShowCount$($nbox$$25$$, $cellData$$12_count$$21_countLabelHeight$$) && ($cellData$$12_count$$21_countLabelHeight$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$25$$.$getCtx$(), $cellCounts$$6$$.total[0], D.$DvtNBoxStyleUtils$$.$getCellCountLabelStyle$($nbox$$25$$), $halign$$8$$, "middle"), $cellData$$12_count$$21_countLabelHeight$$ = D.$DvtTextUtils$$.$guessTextDimensions$($cellData$$12_count$$21_countLabelHeight$$).$h$, $label$$66_labelHeight$$5$$ = window.Math.max($label$$66_labelHeight$$5$$, 
    $cellData$$12_count$$21_countLabelHeight$$))
  }
  $cellBottomGap$$1_minimizedHeaderSize$$ = $label$$66_labelHeight$$5$$ + $cellTopGap$$3_headerSize$$ + $cellBottomGap$$1_minimizedHeaderSize$$;
  $cellTopGap$$3_headerSize$$ = $label$$66_labelHeight$$5$$ + $cellTopGap$$3_headerSize$$ + $cellLabelGap$$;
  $cellLayout$$6_minimumCellSize$$ = window.Math.max($cellBottomGap$$1_minimizedHeaderSize$$, $cellLayout$$6_minimumCellSize$$);
  $cellLayout$$6_minimumCellSize$$ = {labelHeight:$label$$66_labelHeight$$5$$, headerSize:$cellTopGap$$3_headerSize$$, minimizedHeaderSize:$cellBottomGap$$1_minimizedHeaderSize$$, minimumCellSize:$cellLayout$$6_minimumCellSize$$};
  return $options$$207$$.__layout.__cellLayout = $cellLayout$$6_minimumCellSize$$
};
D.$DvtNBoxCellRenderer$$.$animateUpdate$ = function $$DvtNBoxCellRenderer$$$$animateUpdate$$($animationHandler$$23$$, $oldCell$$1$$, $newCell$$) {
  var $oldBackground_oldNBox$$8$$ = $animationHandler$$23$$.$_oldNBox$, $effect$$14_newNBox$$6$$ = $animationHandler$$23$$.$_newNBox$, $playable$$40$$ = new D.$DvtCustomAnimation$$($effect$$14_newNBox$$6$$.$getCtx$(), $newCell$$, $animationHandler$$23$$.$getAnimationDuration$()), $childContainer$$1$$ = $newCell$$.$getChildContainer$(), $childMatrix$$ = $childContainer$$1$$.$getMatrix$();
  $childContainer$$1$$.$setMatrix$(D.$DvtNBoxRenderer$$.$getGlobalMatrix$($childContainer$$1$$));
  var $cellParent_newBackground$$ = $newCell$$.getParent();
  $cellParent_newBackground$$.$addChildAt$($childContainer$$1$$, $cellParent_newBackground$$.$getChildIndex$($newCell$$) + 1);
  (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$40$$.$_animator$, "typeMatrix", $newCell$$, $newCell$$.$getMatrix$, $newCell$$.$setMatrix$, $newCell$$.$getMatrix$());
  $newCell$$.$setMatrix$($oldCell$$1$$.$getMatrix$());
  $oldBackground_oldNBox$$8$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($oldBackground_oldNBox$$8$$, $oldCell$$1$$.getData(), "background");
  $cellParent_newBackground$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($effect$$14_newNBox$$6$$, $newCell$$.getData(), "background");
  (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$40$$.$_animator$, "typeFill", $cellParent_newBackground$$, $cellParent_newBackground$$.$getFill$, $cellParent_newBackground$$.$setFill$, $cellParent_newBackground$$.$getFill$());
  $cellParent_newBackground$$.$setFill$($oldBackground_oldNBox$$8$$.$getFill$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$40$$.$_animator$, "typeNumber", $cellParent_newBackground$$, $cellParent_newBackground$$.getWidth, $cellParent_newBackground$$.$setWidth$, $cellParent_newBackground$$.getWidth());
  $cellParent_newBackground$$.$setWidth$($oldBackground_oldNBox$$8$$.getWidth());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$40$$.$_animator$, "typeNumber", $cellParent_newBackground$$, $cellParent_newBackground$$.getHeight, $cellParent_newBackground$$.$setHeight$, $cellParent_newBackground$$.getHeight());
  $cellParent_newBackground$$.$setHeight$($oldBackground_oldNBox$$8$$.getHeight());
  if($newCell$$.$isShowingKeyboardFocusEffect$() && ($effect$$14_newNBox$$6$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($effect$$14_newNBox$$6$$, $newCell$$.getData(), "focusEffect").$getEffect$())) {
    (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$40$$.$_animator$, "typeNumber", $effect$$14_newNBox$$6$$, $effect$$14_newNBox$$6$$.getWidth, $effect$$14_newNBox$$6$$.$setWidth$, $effect$$14_newNBox$$6$$.getWidth()), $effect$$14_newNBox$$6$$.$setWidth$($oldBackground_oldNBox$$8$$.getWidth() + 2), (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$40$$.$_animator$, "typeNumber", $effect$$14_newNBox$$6$$, $effect$$14_newNBox$$6$$.getHeight, $effect$$14_newNBox$$6$$.$setHeight$, $effect$$14_newNBox$$6$$.getHeight()), 
    $effect$$14_newNBox$$6$$.$setHeight$($oldBackground_oldNBox$$8$$.getHeight() + 2)
  }
  D.$DvtNBoxCellRenderer$$.$_animateLabels$($animationHandler$$23$$, $oldCell$$1$$, $newCell$$, "countLabel");
  D.$DvtNBoxCellRenderer$$.$_animateLabels$($animationHandler$$23$$, $oldCell$$1$$, $newCell$$, D.$DvtNBoxConstants$$.$LABEL$);
  (0,D.$DvtPlayable$appendOnEnd$$)($playable$$40$$, function() {
    $newCell$$.$addChild$($childContainer$$1$$);
    $childContainer$$1$$.$setMatrix$($childMatrix$$)
  });
  $animationHandler$$23$$.add($playable$$40$$, 1)
};
D.$DvtNBoxCellRenderer$$.$_animateLabels$ = function $$DvtNBoxCellRenderer$$$$_animateLabels$$($animationHandler$$24$$, $oldCell$$2_oldVerticalLabel_playable$$41$$, $fadeOutAnim_newCell$$1$$, $labelKey$$) {
  var $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$ = $animationHandler$$24$$.$_oldNBox$, $newNBox$$7$$ = $animationHandler$$24$$.$_newNBox$, $oldLabel$$1$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$, $oldCell$$2_oldVerticalLabel_playable$$41$$.getData(), $labelKey$$), $fadeInAnim_newLabel$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$7$$, $fadeOutAnim_newCell$$1$$.getData(), $labelKey$$);
  $oldCell$$2_oldVerticalLabel_playable$$41$$ = D.$DvtNBoxCellRenderer$$.$_isLabelVertical$($alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$, $oldCell$$2_oldVerticalLabel_playable$$41$$.getData());
  $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$ = D.$DvtNBoxCellRenderer$$.$_isLabelVertical$($newNBox$$7$$, $fadeOutAnim_newCell$$1$$.getData());
  if($oldLabel$$1$$ || $fadeInAnim_newLabel$$) {
    if($oldLabel$$1$$ && $fadeInAnim_newLabel$$ && $oldCell$$2_oldVerticalLabel_playable$$41$$ == $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$) {
      $oldCell$$2_oldVerticalLabel_playable$$41$$ = new D.$DvtCustomAnimation$$($newNBox$$7$$.$getCtx$(), $fadeInAnim_newLabel$$, $animationHandler$$24$$.$getAnimationDuration$());
      var $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$ = $oldLabel$$1$$.$getHorizAlignment$(), $newAlign$$ = $fadeInAnim_newLabel$$.$getHorizAlignment$(), $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$ = (("left" == $newAlign$$ ? -1 : "center" == $newAlign$$ ? 0 : 1) - ("left" == $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$ ? -1 : "center" == $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$ ? 0 : 1)) * $fadeInAnim_newLabel$$.$measureDimensions$().$w$ / 2;
      (0,D.$JSCompiler_StaticMethods_addProp$$)($oldCell$$2_oldVerticalLabel_playable$$41$$.$_animator$, "typeNumber", $fadeInAnim_newLabel$$, $fadeInAnim_newLabel$$.$getX$, $fadeInAnim_newLabel$$.$setX$, $fadeInAnim_newLabel$$.$getX$());
      $fadeInAnim_newLabel$$.$setX$($oldLabel$$1$$.$getX$() + $alignOffset_newVerticalLabel_oldAlign_oldNBox$$9$$);
      (0,D.$JSCompiler_StaticMethods_addProp$$)($oldCell$$2_oldVerticalLabel_playable$$41$$.$_animator$, "typeNumber", $fadeInAnim_newLabel$$, $fadeInAnim_newLabel$$.$getY$, $fadeInAnim_newLabel$$.$setY$, $fadeInAnim_newLabel$$.$getY$());
      $fadeInAnim_newLabel$$.$setY$($oldLabel$$1$$.$getY$());
      (0,D.$JSCompiler_StaticMethods_addProp$$)($oldCell$$2_oldVerticalLabel_playable$$41$$.$_animator$, "typeMatrix", $fadeInAnim_newLabel$$, $fadeInAnim_newLabel$$.$getMatrix$, $fadeInAnim_newLabel$$.$setMatrix$, $fadeInAnim_newLabel$$.$getMatrix$());
      $fadeInAnim_newLabel$$.$setMatrix$($oldLabel$$1$$.$getMatrix$());
      $animationHandler$$24$$.add($oldCell$$2_oldVerticalLabel_playable$$41$$, 1);
      "countLabel" == $labelKey$$ && $oldLabel$$1$$.$getTextString$() != $fadeInAnim_newLabel$$.$getTextString$() && ($fadeInAnim_newLabel$$.$setAlpha$(0), $fadeOutAnim_newCell$$1$$.$addChild$($oldLabel$$1$$), $fadeOutAnim_newCell$$1$$ = new D.$DvtAnimFadeOut$$($newNBox$$7$$.$getCtx$(), $oldLabel$$1$$, $animationHandler$$24$$.$getAnimationDuration$()), $fadeInAnim_newLabel$$ = new D.$DvtAnimFadeIn$$($newNBox$$7$$.$getCtx$(), $fadeInAnim_newLabel$$, $animationHandler$$24$$.$getAnimationDuration$()), 
      $animationHandler$$24$$.add($fadeOutAnim_newCell$$1$$, 1), $animationHandler$$24$$.add($fadeInAnim_newLabel$$, 2), (0,D.$DvtPlayable$appendOnEnd$$)($fadeOutAnim_newCell$$1$$, function() {
        $newNBox$$7$$.$_deleteContainer$.$addChild$($oldLabel$$1$$)
      }))
    }else {
      $oldLabel$$1$$ && ($oldLabel$$1$$.$setMatrix$(D.$DvtNBoxRenderer$$.$getGlobalMatrix$($oldLabel$$1$$)), $newNBox$$7$$.$_deleteContainer$.$addChild$($oldLabel$$1$$), $animationHandler$$24$$.add(new D.$DvtAnimFadeOut$$($newNBox$$7$$.$getCtx$(), $oldLabel$$1$$, $animationHandler$$24$$.$getAnimationDuration$()), 1)), $fadeInAnim_newLabel$$ && ($fadeInAnim_newLabel$$.$setAlpha$(0), $animationHandler$$24$$.add(new D.$DvtAnimFadeIn$$($newNBox$$7$$.$getCtx$(), $fadeInAnim_newLabel$$, $animationHandler$$24$$.$getAnimationDuration$()), 
      1))
    }
  }
};
D.$DvtNBoxCellRenderer$$.$animateDelete$ = function $$DvtNBoxCellRenderer$$$$animateDelete$$($animationHandler$$25$$, $oldCell$$3$$) {
  var $nbox$$26$$ = $animationHandler$$25$$.$_newNBox$, $childContainer$$2$$ = $oldCell$$3$$.$getChildContainer$();
  if($childContainer$$2$$) {
    var $globalMatrix$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($childContainer$$2$$), $cellParent$$1$$ = $oldCell$$3$$.getParent();
    $cellParent$$1$$.$addChildAt$($childContainer$$2$$, $cellParent$$1$$.$getChildIndex$($oldCell$$3$$) + 1);
    $childContainer$$2$$.$setMatrix$($globalMatrix$$)
  }
  $nbox$$26$$.$_deleteContainer$.$addChild$($oldCell$$3$$);
  $animationHandler$$25$$.add(new D.$DvtAnimFadeOut$$($nbox$$26$$.$getCtx$(), $oldCell$$3$$, $animationHandler$$25$$.$getAnimationDuration$()), 1)
};
D.$DvtNBoxCellRenderer$$.$animateInsert$ = function $$DvtNBoxCellRenderer$$$$animateInsert$$($animationHandler$$26$$, $newCell$$2$$) {
  var $nbox$$27_playable$$42$$ = $animationHandler$$26$$.$_newNBox$, $childContainer$$3$$ = $newCell$$2$$.$getChildContainer$(), $childMatrix$$1$$ = D.$JSCompiler_alias_NULL$$;
  if($childContainer$$3$$) {
    var $childMatrix$$1$$ = $childContainer$$3$$.$getMatrix$(), $globalMatrix$$1$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($newCell$$2$$), $cellParent$$2$$ = $newCell$$2$$.getParent();
    $cellParent$$2$$.$addChildAt$($childContainer$$3$$, $cellParent$$2$$.$getChildIndex$($newCell$$2$$) + 1);
    $childContainer$$3$$.$setMatrix$($globalMatrix$$1$$)
  }
  $newCell$$2$$.$setAlpha$(0);
  $nbox$$27_playable$$42$$ = new D.$DvtAnimFadeIn$$($nbox$$27_playable$$42$$.$getCtx$(), $newCell$$2$$, $animationHandler$$26$$.$getAnimationDuration$());
  $childContainer$$3$$ && (0,D.$DvtPlayable$appendOnEnd$$)($nbox$$27_playable$$42$$, function() {
    $newCell$$2$$.$addChild$($childContainer$$3$$);
    $childContainer$$3$$.$setMatrix$($childMatrix$$1$$)
  });
  $animationHandler$$26$$.add($nbox$$27_playable$$42$$, 1)
};
D.$DvtNBoxCellRenderer$$.$renderDropSiteFeedback$ = function $$DvtNBoxCellRenderer$$$$renderDropSiteFeedback$$($nbox$$28$$, $cell$$41$$) {
  var $background$$11$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$28$$, $cell$$41$$.getData(), "background"), $dropSiteFeedback$$ = new D.$DvtRect$$($nbox$$28$$.$getCtx$(), $background$$11$$.$getX$(), $background$$11$$.$getY$(), $background$$11$$.getWidth(), $background$$11$$.getHeight());
  (0,D.$JSCompiler_StaticMethods_setPixelHinting$$)($dropSiteFeedback$$);
  var $style$$103$$ = D.$DvtNBoxStyleUtils$$.$getCellDropTargetStyle$($nbox$$28$$);
  D.$DvtNBoxCellRenderer$$.$_applyStyleToRect$($dropSiteFeedback$$, $style$$103$$);
  $cell$$41$$.$addChildAt$($dropSiteFeedback$$, $cell$$41$$.$getChildIndex$($background$$11$$) + 1);
  return $dropSiteFeedback$$
};
D.$DvtNBoxCellRenderer$$.$_applyStyleToRect$ = function $$DvtNBoxCellRenderer$$$$_applyStyleToRect$$($rect$$35$$, $style$$104$$) {
  var $bgFill$$1_borderColor$$51_fill$$64$$ = $style$$104$$.$getStyle$("background"), $borderWidth$$14_colorFill$$1$$ = $style$$104$$.$getStyle$("background-color");
  ($bgFill$$1_borderColor$$51_fill$$64$$ = $bgFill$$1_borderColor$$51_fill$$64$$ ? $bgFill$$1_borderColor$$51_fill$$64$$ : $borderWidth$$14_colorFill$$1$$) && D.$DvtNBoxRenderer$$.$setFill$($rect$$35$$, $bgFill$$1_borderColor$$51_fill$$64$$);
  "solid" == $style$$104$$.$getStyle$("border-style") && ($bgFill$$1_borderColor$$51_fill$$64$$ = ($bgFill$$1_borderColor$$51_fill$$64$$ = $style$$104$$.$getStyle$("border-color")) ? $bgFill$$1_borderColor$$51_fill$$64$$ : "#000000", $borderWidth$$14_colorFill$$1$$ = $style$$104$$.$getStyle$("border-width"), $borderWidth$$14_colorFill$$1$$ = $borderWidth$$14_colorFill$$1$$ == D.$JSCompiler_alias_NULL$$ ? 1 : (0,window.parseFloat)($borderWidth$$14_colorFill$$1$$), $rect$$35$$.$setSolidStroke$($bgFill$$1_borderColor$$51_fill$$64$$, 
  D.$JSCompiler_alias_NULL$$, $borderWidth$$14_colorFill$$1$$))
};
D.$DvtNBoxCellRenderer$$.$_addAccessibilityAttributes$ = function $$DvtNBoxCellRenderer$$$$_addAccessibilityAttributes$$($nbox$$29_object$$13$$, $cellData$$13$$, $cellContainer$$3_desc$$23$$) {
  $nbox$$29_object$$13$$ = (0,D.$DvtAgent$isTouchDevice$$)() ? D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$29_object$$13$$, $cellData$$13$$, "background") : $cellContainer$$3_desc$$23$$;
  $nbox$$29_object$$13$$.$setAriaRole$("img");
  (0,D.$DvtAgent$deferAriaCreation$$)() || ($cellContainer$$3_desc$$23$$ = $cellContainer$$3_desc$$23$$.$getAriaLabel$()) && $nbox$$29_object$$13$$.$setAriaProperty$(D.$DvtNBoxConstants$$.$LABEL$, $cellContainer$$3_desc$$23$$)
};
D.$DvtNBoxNodeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxNodeRenderer$$, D.$DvtObj$$, "DvtNBoxNodeRenderer");
D.$DvtNBoxNodeRenderer$$.$render$ = function $$DvtNBoxNodeRenderer$$$$render$$($nbox$$35$$, $nodeData$$43$$, $nodeContainer$$5$$, $nodeLayout$$2$$) {
  D.$DvtNBoxNodeRenderer$$.$_renderNodeBackground$($nbox$$35$$, $nodeData$$43$$, $nodeContainer$$5$$, $nodeLayout$$2$$);
  D.$DvtNBoxNodeRenderer$$.$_renderNodeIndicator$($nbox$$35$$, $nodeData$$43$$, $nodeContainer$$5$$, $nodeLayout$$2$$);
  D.$DvtNBoxNodeRenderer$$.$_renderNodeIcon$($nbox$$35$$, $nodeData$$43$$, $nodeContainer$$5$$, $nodeLayout$$2$$);
  D.$DvtNBoxNodeRenderer$$.$_renderNodeLabels$($nbox$$35$$, $nodeData$$43$$, $nodeContainer$$5$$, $nodeLayout$$2$$);
  D.$DvtNBoxNodeRenderer$$.$_addAccessibilityAttributes$($nbox$$35$$, $nodeContainer$$5$$)
};
D.$DvtNBoxNodeRenderer$$.$calculateNodeLayout$ = function $$DvtNBoxNodeRenderer$$$$calculateNodeLayout$$($cell$$43_maxRows_nbox$$36$$) {
  for(var $options$$211$$ = $cell$$43_maxRows_nbox$$36$$.$getOptions$(), $container$$153_gridGap$$2$$ = $options$$211$$.__layout.gridGap, $cellLayouts_nodeStartLabelGap$$ = $options$$211$$.__layout.nodeStartLabelGap, $nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$ = $options$$211$$.__layout.nodeLabelOnlyStartLabelGap, $cellIndex$$8_nodeEndLabelGap$$ = $options$$211$$.__layout.nodeEndLabelGap, $cellIndices$$2_nodeSwatchSize$$ = $options$$211$$.__layout.nodeSwatchSize, $labelVisible_maxCellIndex_simpleLayout$$ = 
  D.$DvtNBoxNodeRenderer$$.$_calculateSimpleNodeLayout$($cell$$43_maxRows_nbox$$36$$), $nodeHeight$$3_nodeLayout$$3$$ = $labelVisible_maxCellIndex_simpleLayout$$.nodeHeight, $indicatorSectionWidth$$ = $labelVisible_maxCellIndex_simpleLayout$$.indicatorSectionWidth, $iconSectionWidth$$ = $labelVisible_maxCellIndex_simpleLayout$$.iconSectionWidth, $nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$ = $indicatorSectionWidth$$ || $iconSectionWidth$$ ? $cellLayouts_nodeStartLabelGap$$ : $nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$, 
  $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$ = D.$DvtNBoxDataUtils$$.$getNode$($cell$$43_maxRows_nbox$$36$$, 0), $indicatorIcon$$4$$ = D.$DvtNBoxDataUtils$$.$getIndicatorIcon$($cell$$43_maxRows_nbox$$36$$, $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$), $icon$$43$$ = D.$DvtNBoxDataUtils$$.$getIcon$($cell$$43_maxRows_nbox$$36$$, $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$), $i$$730_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ = 
  0, $cellLayouts_nodeStartLabelGap$$ = [], $cellRows_label$$67_maximizedRow$$6_secondaryLabel$$ = 0, $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$ = 0, $cellRows_label$$67_maximizedRow$$6_secondaryLabel$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($cell$$43_maxRows_nbox$$36$$), $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($cell$$43_maxRows_nbox$$36$$), $i$$730_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ = 
  D.$DvtNBoxDataUtils$$.$getRowCount$($cell$$43_maxRows_nbox$$36$$), $cellArea_columnCount$$6$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($cell$$43_maxRows_nbox$$36$$), $nodeCount$$8_r$$59$$ = 0;$nodeCount$$8_r$$59$$ < $i$$730_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$;$nodeCount$$8_r$$59$$++) {
    for(var $c$$40_n$$20$$ = 0;$c$$40_n$$20$$ < $cellArea_columnCount$$6$$;$c$$40_n$$20$$++) {
      $cellLayouts_nodeStartLabelGap$$.push({cellRows:0, cellColumns:0, overflow:D.$JSCompiler_alias_FALSE$$})
    }
  }
  for(var $maximizedCellIndex$$1_nodeCounts$$ = [], $nodeCount$$8_r$$59$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($cell$$43_maxRows_nbox$$36$$), $c$$40_n$$20$$ = 0;$c$$40_n$$20$$ < $nodeCount$$8_r$$59$$;$c$$40_n$$20$$++) {
    if($ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$ = D.$DvtNBoxDataUtils$$.$getNode$($cell$$43_maxRows_nbox$$36$$, $c$$40_n$$20$$), !D.$DvtNBoxDataUtils$$.$isNodeHidden$($cell$$43_maxRows_nbox$$36$$, $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$)) {
      var $nodeCellIndex$$ = D.$DvtNBoxDataUtils$$.$getCellIndex$($cell$$43_maxRows_nbox$$36$$, $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$);
      (0,window.isNaN)($maximizedCellIndex$$1_nodeCounts$$[$nodeCellIndex$$]) && ($maximizedCellIndex$$1_nodeCounts$$[$nodeCellIndex$$] = 0);
      $maximizedCellIndex$$1_nodeCounts$$[$nodeCellIndex$$]++
    }
  }
  if($cellRows_label$$67_maximizedRow$$6_secondaryLabel$$ && $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$) {
    $i$$730_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ = $labelVisible_maxCellIndex_simpleLayout$$.labelSectionWidth != D.$JSCompiler_alias_NULL$$ ? $labelVisible_maxCellIndex_simpleLayout$$.labelSectionWidth : $options$$211$$.__layout.maximumLabelWidth + $nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$ + $cellIndex$$8_nodeEndLabelGap$$;
    $maximizedCellIndex$$1_nodeCounts$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($cell$$43_maxRows_nbox$$36$$, $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$) + $cellArea_columnCount$$6$$ * D.$DvtNBoxDataUtils$$.$getRowIndex$($cell$$43_maxRows_nbox$$36$$, $cellRows_label$$67_maximizedRow$$6_secondaryLabel$$);
    $cellArea_columnCount$$6$$ = D.$DvtNBoxDataUtils$$.$getCell$($cell$$43_maxRows_nbox$$36$$, $maximizedCellIndex$$1_nodeCounts$$).__childArea;
    $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$ = window.Math.floor(($cellArea_columnCount$$6$$.$w$ + $container$$153_gridGap$$2$$) / ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $i$$730_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ + $container$$153_gridGap$$2$$));
    if(0 == $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$ && $labelVisible_maxCellIndex_simpleLayout$$.labelSectionWidth == D.$JSCompiler_alias_NULL$$) {
      $i$$730_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ = window.Math.max(0, $cellArea_columnCount$$6$$.$w$ - $indicatorSectionWidth$$ - $iconSectionWidth$$);
      if($ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$[D.$DvtNBoxConstants$$.$LABEL$] && ($container$$153_gridGap$$2$$ = new D.$DvtContainer$$, $labelVisible_maxCellIndex_simpleLayout$$ = D.$JSCompiler_alias_FALSE$$, $cellRows_label$$67_maximizedRow$$6_secondaryLabel$$ = D.$DvtNBoxRenderer$$.$createText$($cell$$43_maxRows_nbox$$36$$.$getCtx$(), $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$[D.$DvtNBoxConstants$$.$LABEL$], D.$DvtNBoxStyleUtils$$.$getNodeLabelStyle$($cell$$43_maxRows_nbox$$36$$), 
      "left", "middle"), $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$ = D.$DvtTextUtils$$.$guessTextDimensions$($cellRows_label$$67_maximizedRow$$6_secondaryLabel$$).$h$, D.$DvtTextUtils$$.$fitText$($cellRows_label$$67_maximizedRow$$6_secondaryLabel$$, $i$$730_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ - $nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$ - $cellIndex$$8_nodeEndLabelGap$$, $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$, 
      $container$$153_gridGap$$2$$) && ($labelVisible_maxCellIndex_simpleLayout$$ = D.$JSCompiler_alias_TRUE$$), $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$[D.$DvtNBoxConstants$$.$SECONDARY_LABEL$] && ($cellRows_label$$67_maximizedRow$$6_secondaryLabel$$ = D.$DvtNBoxRenderer$$.$createText$($cell$$43_maxRows_nbox$$36$$.$getCtx$(), $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$[D.$DvtNBoxConstants$$.$SECONDARY_LABEL$], D.$DvtNBoxStyleUtils$$.$getNodeSecondaryLabelStyle$($cell$$43_maxRows_nbox$$36$$), 
      "left", "middle"), $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$ = D.$DvtTextUtils$$.$guessTextDimensions$($cellRows_label$$67_maximizedRow$$6_secondaryLabel$$).$h$, D.$DvtTextUtils$$.$fitText$($cellRows_label$$67_maximizedRow$$6_secondaryLabel$$, $i$$730_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ - $nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$ - $cellIndex$$8_nodeEndLabelGap$$, $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$, 
      $container$$153_gridGap$$2$$) && ($labelVisible_maxCellIndex_simpleLayout$$ = D.$JSCompiler_alias_TRUE$$)), !$labelVisible_maxCellIndex_simpleLayout$$ && ($i$$730_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ = 0, $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$[D.$DvtNBoxConstants$$.$COLOR$] && (!$indicatorIcon$$4$$ || D.$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($cell$$43_maxRows_nbox$$36$$, $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$)) && (!$icon$$43$$ || 
      $icon$$43$$[D.$DvtNBoxConstants$$.$SOURCE$])))) {
        $i$$730_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ = window.Math.max(0, window.Math.min($cellIndices$$2_nodeSwatchSize$$, $cellArea_columnCount$$6$$.$w$ - $indicatorSectionWidth$$ - $iconSectionWidth$$))
      }
      $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$ = 1
    }
    if(0 > $cellArea_columnCount$$6$$.$w$ - $indicatorSectionWidth$$ - $iconSectionWidth$$) {
      var $iconWidth$$9$$ = $iconSectionWidth$$, $iconSectionWidth$$ = window.Math.max(0, $cellArea_columnCount$$6$$.$w$ - $indicatorSectionWidth$$)
    }
    0 > $cellArea_columnCount$$6$$.$w$ - $indicatorSectionWidth$$ && ($indicatorSectionWidth$$ = $cellArea_columnCount$$6$$.$w$);
    $cellLayouts_nodeStartLabelGap$$[$maximizedCellIndex$$1_nodeCounts$$] = {cellRows:-1, cellColumns:$cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$, overflow:D.$JSCompiler_alias_FALSE$$}
  }else {
    $cellIndices$$2_nodeSwatchSize$$ = [];
    if($cellRows_label$$67_maximizedRow$$6_secondaryLabel$$) {
      $i$$730_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ = D.$DvtNBoxDataUtils$$.$getRowIndex$($cell$$43_maxRows_nbox$$36$$, $cellRows_label$$67_maximizedRow$$6_secondaryLabel$$);
      for($c$$40_n$$20$$ = 0;$c$$40_n$$20$$ < $cellArea_columnCount$$6$$;$c$$40_n$$20$$++) {
        $cellIndices$$2_nodeSwatchSize$$.push($c$$40_n$$20$$ + $i$$730_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ * $cellArea_columnCount$$6$$)
      }
    }else {
      if($cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$) {
        $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($cell$$43_maxRows_nbox$$36$$, $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$);
        for($nodeCount$$8_r$$59$$ = 0;$nodeCount$$8_r$$59$$ < $i$$730_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$;$nodeCount$$8_r$$59$$++) {
          $cellIndices$$2_nodeSwatchSize$$.push($ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$ + $nodeCount$$8_r$$59$$ * $cellArea_columnCount$$6$$)
        }
      }else {
        for($i$$730_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ = 0;$i$$730_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ < $cellLayouts_nodeStartLabelGap$$.length;$i$$730_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$++) {
          $cellIndices$$2_nodeSwatchSize$$.push($i$$730_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$)
        }
      }
    }
    if($labelVisible_maxCellIndex_simpleLayout$$.labelSectionWidth != D.$JSCompiler_alias_NULL$$) {
      $i$$730_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ = $labelVisible_maxCellIndex_simpleLayout$$.labelSectionWidth, $cell$$43_maxRows_nbox$$36$$ = D.$DvtNBoxDataUtils$$.$getCell$($cell$$43_maxRows_nbox$$36$$, $cellIndices$$2_nodeSwatchSize$$[0]), $cellArea_columnCount$$6$$ = $cell$$43_maxRows_nbox$$36$$.__childArea, $cellRows_label$$67_maximizedRow$$6_secondaryLabel$$ = window.Math.floor(($cellArea_columnCount$$6$$.$h$ + $container$$153_gridGap$$2$$) / ($nodeHeight$$3_nodeLayout$$3$$ + 
      $container$$153_gridGap$$2$$)), $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$ = window.Math.floor(($cellArea_columnCount$$6$$.$w$ + $container$$153_gridGap$$2$$) / ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $i$$730_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ + $container$$153_gridGap$$2$$))
    }else {
      for($ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$ = $labelVisible_maxCellIndex_simpleLayout$$ = 0;$ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$ < $cellIndices$$2_nodeSwatchSize$$.length;$ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$++) {
        !(0,window.isNaN)($maximizedCellIndex$$1_nodeCounts$$[$cellIndices$$2_nodeSwatchSize$$[$ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$]]) && $maximizedCellIndex$$1_nodeCounts$$[$cellIndices$$2_nodeSwatchSize$$[$ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$]] > $maximizedCellIndex$$1_nodeCounts$$[$labelVisible_maxCellIndex_simpleLayout$$] && ($labelVisible_maxCellIndex_simpleLayout$$ = $cellIndices$$2_nodeSwatchSize$$[$ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$])
      }
      $cell$$43_maxRows_nbox$$36$$ = D.$DvtNBoxDataUtils$$.$getCell$($cell$$43_maxRows_nbox$$36$$, $labelVisible_maxCellIndex_simpleLayout$$);
      $cellArea_columnCount$$6$$ = $cell$$43_maxRows_nbox$$36$$.__childArea;
      $cell$$43_maxRows_nbox$$36$$ = window.Math.floor(($cellArea_columnCount$$6$$.$h$ + $container$$153_gridGap$$2$$) / ($nodeHeight$$3_nodeLayout$$3$$ + $container$$153_gridGap$$2$$));
      $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$ = window.Math.floor(($cellArea_columnCount$$6$$.$w$ + $container$$153_gridGap$$2$$) / ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $options$$211$$.__layout.minimumLabelWidth + $nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$ + $cellIndex$$8_nodeEndLabelGap$$ + $container$$153_gridGap$$2$$));
      if($cell$$43_maxRows_nbox$$36$$ * $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$ < $maximizedCellIndex$$1_nodeCounts$$[$labelVisible_maxCellIndex_simpleLayout$$]) {
        $i$$730_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ = window.Math.floor(window.Math.min($options$$211$$.__layout.maximumLabelWidth + $nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$ + $cellIndex$$8_nodeEndLabelGap$$, ($cellArea_columnCount$$6$$.$w$ + $container$$153_gridGap$$2$$) / $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$ - ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $container$$153_gridGap$$2$$)))
      }else {
        for($i$$730_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ = window.Math.floor(window.Math.min($options$$211$$.__layout.maximumLabelWidth + $nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$ + $cellIndex$$8_nodeEndLabelGap$$, ($cellArea_columnCount$$6$$.$w$ + $container$$153_gridGap$$2$$) / $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$ - ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $container$$153_gridGap$$2$$)));$i$$730_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ < 
        $options$$211$$.__layout.maximumLabelWidth + $nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$ + $cellIndex$$8_nodeEndLabelGap$$;) {
          if(($ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$ - 1) * $cell$$43_maxRows_nbox$$36$$ >= $maximizedCellIndex$$1_nodeCounts$$[$labelVisible_maxCellIndex_simpleLayout$$]) {
            $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$--, $i$$730_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$ = window.Math.floor(window.Math.min($options$$211$$.__layout.maximumLabelWidth + $nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$ + $cellIndex$$8_nodeEndLabelGap$$, ($cellArea_columnCount$$6$$.$w$ + $container$$153_gridGap$$2$$) / $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$ - ($indicatorSectionWidth$$ + $iconSectionWidth$$ + $container$$153_gridGap$$2$$)))
          }else {
            break
          }
        }
      }
      $cellRows_label$$67_maximizedRow$$6_secondaryLabel$$ = $cell$$43_maxRows_nbox$$36$$;
      $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$ = $ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$
    }
    for($ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$ = 0;$ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$ < $cellIndices$$2_nodeSwatchSize$$.length;$ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$++) {
      $cellIndex$$8_nodeEndLabelGap$$ = $cellIndices$$2_nodeSwatchSize$$[$ci$$2_columnsPerRow_maxCols_maximizedColumnIndex$$1_node$$259$$], $nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$ = D.$JSCompiler_alias_FALSE$$, $maximizedCellIndex$$1_nodeCounts$$[$cellIndex$$8_nodeEndLabelGap$$] > $cellRows_label$$67_maximizedRow$$6_secondaryLabel$$ * $cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$ && ($nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$ = D.$JSCompiler_alias_TRUE$$), 
      $cellLayouts_nodeStartLabelGap$$[$cellIndex$$8_nodeEndLabelGap$$] = {cellRows:$cellRows_label$$67_maximizedRow$$6_secondaryLabel$$, cellColumns:$cellColumns_labelHeight$$6_maximizedColumn$$6_secondaryLabelHeight$$, overflow:$nodeLabelOnlyStartLabelGap_overflow$$4_startLabelGap$$}
    }
  }
  $nodeHeight$$3_nodeLayout$$3$$ = {nodeHeight:$nodeHeight$$3_nodeLayout$$3$$, indicatorSectionWidth:$indicatorSectionWidth$$, iconSectionWidth:$iconSectionWidth$$, iconWidth:$iconWidth$$9$$, labelSectionWidth:$i$$730_labelSectionWidth_maximizedRowIndex$$1_rowCount$$11$$, cellLayouts:$cellLayouts_nodeStartLabelGap$$};
  return $options$$211$$.__layout.__nodeLayout = $nodeHeight$$3_nodeLayout$$3$$
};
D.$DvtNBoxNodeRenderer$$.$calculateNodeDrawerLayout$ = function $$DvtNBoxNodeRenderer$$$$calculateNodeDrawerLayout$$($nbox$$37$$, $data$$87$$) {
  var $options$$212$$ = $nbox$$37$$.$getOptions$(), $container$$154_gridGap$$3$$ = $options$$212$$.__layout.gridGap, $nodeStartLabelGap$$1_startLabelGap$$1$$ = $options$$212$$.__layout.nodeStartLabelGap, $labelSectionWidth$$1_nodeLabelOnlyStartLabelGap$$1$$ = $options$$212$$.__layout.nodeLabelOnlyStartLabelGap, $nodeDrawerLayout_nodeEndLabelGap$$1$$ = $options$$212$$.__layout.nodeEndLabelGap, $nodeSwatchSize$$1$$ = $options$$212$$.__layout.nodeSwatchSize, $node$$260$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$37$$, 
  0), $indicatorIcon$$5$$ = D.$DvtNBoxDataUtils$$.$getIndicatorIcon$($nbox$$37$$, $node$$260$$), $icon$$44$$ = D.$DvtNBoxDataUtils$$.$getIcon$($nbox$$37$$, $node$$260$$), $labelVisible$$1_simpleLayout$$1$$ = D.$DvtNBoxNodeRenderer$$.$_calculateSimpleNodeLayout$($nbox$$37$$), $nodeHeight$$4$$ = $labelVisible$$1_simpleLayout$$1$$.nodeHeight, $indicatorSectionWidth$$1$$ = $labelVisible$$1_simpleLayout$$1$$.indicatorSectionWidth, $iconSectionWidth$$1$$ = $labelVisible$$1_simpleLayout$$1$$.iconSectionWidth, 
  $nodeStartLabelGap$$1_startLabelGap$$1$$ = $indicatorSectionWidth$$1$$ || $iconSectionWidth$$1$$ ? $nodeStartLabelGap$$1_startLabelGap$$1$$ : $labelSectionWidth$$1_nodeLabelOnlyStartLabelGap$$1$$, $labelSectionWidth$$1_nodeLabelOnlyStartLabelGap$$1$$ = $labelVisible$$1_simpleLayout$$1$$.labelSectionWidth != D.$JSCompiler_alias_NULL$$ ? $labelVisible$$1_simpleLayout$$1$$.labelSectionWidth : $options$$212$$.__layout.maximumLabelWidth + $nodeStartLabelGap$$1_startLabelGap$$1$$ + $nodeDrawerLayout_nodeEndLabelGap$$1$$, 
  $childArea$$3$$ = $data$$87$$.__childArea, $columns$$3_label$$68_secondaryLabel$$1$$ = window.Math.floor(($childArea$$3$$.$w$ + $container$$154_gridGap$$3$$) / ($indicatorSectionWidth$$1$$ + $iconSectionWidth$$1$$ + $labelSectionWidth$$1_nodeLabelOnlyStartLabelGap$$1$$ + $container$$154_gridGap$$3$$));
  if(0 == $columns$$3_label$$68_secondaryLabel$$1$$ && $labelVisible$$1_simpleLayout$$1$$.labelSectionWidth == D.$JSCompiler_alias_NULL$$) {
    var $labelHeight$$7_labelWidth$$7_secondaryLabelHeight$$1$$ = $childArea$$3$$.$w$ - $indicatorSectionWidth$$1$$ - $iconSectionWidth$$1$$;
    $labelHeight$$7_labelWidth$$7_secondaryLabelHeight$$1$$ >= $options$$212$$.__layout.minimumLabelWidth && ($labelSectionWidth$$1_nodeLabelOnlyStartLabelGap$$1$$ = $labelHeight$$7_labelWidth$$7_secondaryLabelHeight$$1$$, $columns$$3_label$$68_secondaryLabel$$1$$ = window.Math.floor(($childArea$$3$$.$w$ + $container$$154_gridGap$$3$$) / ($indicatorSectionWidth$$1$$ + $iconSectionWidth$$1$$ + $labelSectionWidth$$1_nodeLabelOnlyStartLabelGap$$1$$ + $container$$154_gridGap$$3$$)))
  }
  if(0 == $columns$$3_label$$68_secondaryLabel$$1$$ && $labelVisible$$1_simpleLayout$$1$$.labelSectionWidth == D.$JSCompiler_alias_NULL$$) {
    $labelSectionWidth$$1_nodeLabelOnlyStartLabelGap$$1$$ = window.Math.max(0, $childArea$$3$$.$w$ - $indicatorSectionWidth$$1$$ - $iconSectionWidth$$1$$);
    if($node$$260$$[D.$DvtNBoxConstants$$.$LABEL$] && ($container$$154_gridGap$$3$$ = new D.$DvtContainer$$, $labelVisible$$1_simpleLayout$$1$$ = D.$JSCompiler_alias_FALSE$$, $columns$$3_label$$68_secondaryLabel$$1$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$37$$.$getCtx$(), $node$$260$$[D.$DvtNBoxConstants$$.$LABEL$], D.$DvtNBoxStyleUtils$$.$getNodeLabelStyle$($nbox$$37$$), "left", "middle"), $labelHeight$$7_labelWidth$$7_secondaryLabelHeight$$1$$ = D.$DvtTextUtils$$.$guessTextDimensions$($columns$$3_label$$68_secondaryLabel$$1$$).$h$, 
    D.$DvtTextUtils$$.$fitText$($columns$$3_label$$68_secondaryLabel$$1$$, $labelSectionWidth$$1_nodeLabelOnlyStartLabelGap$$1$$ - $nodeStartLabelGap$$1_startLabelGap$$1$$ - $nodeDrawerLayout_nodeEndLabelGap$$1$$, $labelHeight$$7_labelWidth$$7_secondaryLabelHeight$$1$$, $container$$154_gridGap$$3$$) && ($labelVisible$$1_simpleLayout$$1$$ = D.$JSCompiler_alias_TRUE$$), $node$$260$$[D.$DvtNBoxConstants$$.$SECONDARY_LABEL$] && ($columns$$3_label$$68_secondaryLabel$$1$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$37$$.$getCtx$(), 
    $node$$260$$[D.$DvtNBoxConstants$$.$SECONDARY_LABEL$], D.$DvtNBoxStyleUtils$$.$getNodeSecondaryLabelStyle$($nbox$$37$$), "left", "middle"), $labelHeight$$7_labelWidth$$7_secondaryLabelHeight$$1$$ = D.$DvtTextUtils$$.$guessTextDimensions$($columns$$3_label$$68_secondaryLabel$$1$$).$h$, D.$DvtTextUtils$$.$fitText$($columns$$3_label$$68_secondaryLabel$$1$$, $labelSectionWidth$$1_nodeLabelOnlyStartLabelGap$$1$$ - $nodeStartLabelGap$$1_startLabelGap$$1$$ - $nodeDrawerLayout_nodeEndLabelGap$$1$$, $labelHeight$$7_labelWidth$$7_secondaryLabelHeight$$1$$, 
    $container$$154_gridGap$$3$$) && ($labelVisible$$1_simpleLayout$$1$$ = D.$JSCompiler_alias_TRUE$$)), !$labelVisible$$1_simpleLayout$$1$$ && ($labelSectionWidth$$1_nodeLabelOnlyStartLabelGap$$1$$ = 0, $node$$260$$[D.$DvtNBoxConstants$$.$COLOR$] && (!$indicatorIcon$$5$$ || D.$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($nbox$$37$$, $node$$260$$)) && (!$icon$$44$$ || $icon$$44$$[D.$DvtNBoxConstants$$.$SOURCE$])))) {
      $labelSectionWidth$$1_nodeLabelOnlyStartLabelGap$$1$$ = window.Math.max(0, window.Math.min($nodeSwatchSize$$1$$, $childArea$$3$$.$w$ - $indicatorSectionWidth$$1$$ - $iconSectionWidth$$1$$))
    }
    $columns$$3_label$$68_secondaryLabel$$1$$ = 1
  }
  if(0 > $childArea$$3$$.$w$ - $indicatorSectionWidth$$1$$ - $iconSectionWidth$$1$$) {
    var $iconWidth$$10$$ = $iconSectionWidth$$1$$, $iconSectionWidth$$1$$ = window.Math.max(0, $childArea$$3$$.$w$ - $indicatorSectionWidth$$1$$)
  }
  0 > $childArea$$3$$.$w$ - $indicatorSectionWidth$$1$$ && ($indicatorSectionWidth$$1$$ = $childArea$$3$$.$w$);
  $nodeDrawerLayout_nodeEndLabelGap$$1$$ = {nodeHeight:$nodeHeight$$4$$, indicatorSectionWidth:$indicatorSectionWidth$$1$$, iconSectionWidth:$iconSectionWidth$$1$$, iconWidth:$iconWidth$$10$$, labelSectionWidth:$labelSectionWidth$$1_nodeLabelOnlyStartLabelGap$$1$$, drawerLayout:{rows:-1, columns:$columns$$3_label$$68_secondaryLabel$$1$$}};
  return $options$$212$$.__layout.__nodeDrawerLayout = $nodeDrawerLayout_nodeEndLabelGap$$1$$
};
D.$DvtNBoxNodeRenderer$$.$_calculateSimpleNodeLayout$ = function $$DvtNBoxNodeRenderer$$$$_calculateSimpleNodeLayout$$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$) {
  var $nodeHeight$$5_options$$213$$ = $nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$.$getOptions$(), $label$$69_labelHeight$$8_nodeIndicatorGap$$ = $nodeHeight$$5_options$$213$$.__layout.nodeIndicatorGap, $nodeSingleLabelGap$$ = $nodeHeight$$5_options$$213$$.__layout.nodeSingleLabelGap, $nodeDualLabelGap_padding$$27$$ = $nodeHeight$$5_options$$213$$.__layout.nodeDualLabelGap, $iconHeight$$9_nodeInterLabelGap$$ = $nodeHeight$$5_options$$213$$.__layout.nodeInterLabelGap, $nodeSwatchSize$$2$$ = 
  $nodeHeight$$5_options$$213$$.__layout.nodeSwatchSize, $node$$261$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$, 0), $indicatorSectionWidth$$2$$ = $nodeHeight$$5_options$$213$$ = 0, $iconSectionWidth$$2_preferredSize$$4$$ = 0, $labelSectionWidth$$2$$ = D.$JSCompiler_alias_NULL$$, $indicatorIcon$$6$$ = D.$DvtNBoxDataUtils$$.$getIndicatorIcon$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$, $node$$261$$), $indicatorColor$$2_indicatorIconHeight$$1$$ = 
  D.$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$, $node$$261$$), $icon$$45$$ = D.$DvtNBoxDataUtils$$.$getIcon$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$, $node$$261$$);
  $indicatorIcon$$6$$ ? ($indicatorColor$$2_indicatorIconHeight$$1$$ = $indicatorIcon$$6$$[D.$DvtNBoxConstants$$.$HEIGHT$], $indicatorSectionWidth$$2$$ = $indicatorIcon$$6$$[D.$DvtNBoxConstants$$.$WIDTH$] + 2 * $label$$69_labelHeight$$8_nodeIndicatorGap$$, $nodeHeight$$5_options$$213$$ = window.Math.max($nodeHeight$$5_options$$213$$, $indicatorColor$$2_indicatorIconHeight$$1$$ + 2 * $label$$69_labelHeight$$8_nodeIndicatorGap$$)) : $indicatorColor$$2_indicatorIconHeight$$1$$ && ($indicatorSectionWidth$$2$$ = 
  $nodeSwatchSize$$2$$);
  if($node$$261$$[D.$DvtNBoxConstants$$.$LABEL$]) {
    $label$$69_labelHeight$$8_nodeIndicatorGap$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$.$getCtx$(), $node$$261$$[D.$DvtNBoxConstants$$.$LABEL$], D.$DvtNBoxStyleUtils$$.$getNodeLabelStyle$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$), "left", "middle"), $label$$69_labelHeight$$8_nodeIndicatorGap$$ = D.$DvtTextUtils$$.$guessTextDimensions$($label$$69_labelHeight$$8_nodeIndicatorGap$$).$h$, $nodeHeight$$5_options$$213$$ = window.Math.max($nodeHeight$$5_options$$213$$, 
    $label$$69_labelHeight$$8_nodeIndicatorGap$$ + 2 * $nodeSingleLabelGap$$), $node$$261$$[D.$DvtNBoxConstants$$.$SECONDARY_LABEL$] && ($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$.$getCtx$(), $node$$261$$[D.$DvtNBoxConstants$$.$SECONDARY_LABEL$], D.$DvtNBoxStyleUtils$$.$getNodeSecondaryLabelStyle$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$), "left", "middle"), $nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$ = 
    D.$DvtTextUtils$$.$guessTextDimensions$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$).$h$, $nodeHeight$$5_options$$213$$ = window.Math.max($nodeHeight$$5_options$$213$$, $label$$69_labelHeight$$8_nodeIndicatorGap$$ + $nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$ + 2 * $nodeDualLabelGap_padding$$27$$ + $iconHeight$$9_nodeInterLabelGap$$))
  }else {
    if($labelSectionWidth$$2$$ = 0, $node$$261$$[D.$DvtNBoxConstants$$.$COLOR$] && (!$indicatorIcon$$6$$ || D.$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($nbox$$38_secondaryLabel$$2_secondaryLabelHeight$$2$$, $node$$261$$)) && (!$icon$$45$$ || $icon$$45$$[D.$DvtNBoxConstants$$.$SOURCE$])) {
      $labelSectionWidth$$2$$ = $indicatorSectionWidth$$2$$ ? $indicatorSectionWidth$$2$$ : $nodeSwatchSize$$2$$
    }
  }
  $icon$$45$$ && ($iconSectionWidth$$2_preferredSize$$4$$ = window.Math.max($nodeHeight$$5_options$$213$$, (0,D.$DvtAgent$isTouchDevice$$)() ? $icon$$45$$.preferredSizeTouch : $icon$$45$$.preferredSize), $nodeDualLabelGap_padding$$27$$ = ($icon$$45$$[D.$DvtNBoxConstants$$.$SOURCE$] ? $icon$$45$$.sourcePaddingRatio : $icon$$45$$.shapePaddingRatio) * $iconSectionWidth$$2_preferredSize$$4$$, $iconHeight$$9_nodeInterLabelGap$$ = $icon$$45$$[D.$DvtNBoxConstants$$.$HEIGHT$] ? $icon$$45$$[D.$DvtNBoxConstants$$.$HEIGHT$] : 
  $iconSectionWidth$$2_preferredSize$$4$$ - 2 * $nodeDualLabelGap_padding$$27$$, $iconSectionWidth$$2_preferredSize$$4$$ = ($icon$$45$$[D.$DvtNBoxConstants$$.$WIDTH$] ? $icon$$45$$[D.$DvtNBoxConstants$$.$WIDTH$] : $iconSectionWidth$$2_preferredSize$$4$$ - 2 * $nodeDualLabelGap_padding$$27$$) + 2 * $nodeDualLabelGap_padding$$27$$, $nodeHeight$$5_options$$213$$ = window.Math.max($nodeHeight$$5_options$$213$$, $iconHeight$$9_nodeInterLabelGap$$ + 2 * $nodeDualLabelGap_padding$$27$$));
  return{nodeHeight:$nodeHeight$$5_options$$213$$, indicatorSectionWidth:$indicatorSectionWidth$$2$$, iconSectionWidth:$iconSectionWidth$$2_preferredSize$$4$$, labelSectionWidth:$labelSectionWidth$$2$$}
};
D.$DvtNBoxNodeRenderer$$.$_renderNodeBackground$ = function $$DvtNBoxNodeRenderer$$$$_renderNodeBackground$$($nbox$$39$$, $node$$262$$, $nodeContainer$$6$$, $borderRadius$$9_color$$69_nodeLayout$$4$$) {
  var $nodeRect$$1_width$$118$$ = $borderRadius$$9_color$$69_nodeLayout$$4$$.indicatorSectionWidth + $borderRadius$$9_color$$69_nodeLayout$$4$$.iconSectionWidth + $borderRadius$$9_color$$69_nodeLayout$$4$$.labelSectionWidth, $height$$109$$ = $borderRadius$$9_color$$69_nodeLayout$$4$$.nodeHeight;
  $borderRadius$$9_color$$69_nodeLayout$$4$$ = D.$DvtNBoxStyleUtils$$.$getNodeBorderRadius$($nbox$$39$$);
  var $hoverColor$$6$$ = D.$DvtNBoxStyleUtils$$.$getNodeHoverColor$($nbox$$39$$), $selectionColor$$2$$ = D.$DvtNBoxStyleUtils$$.$getNodeSelectionColor$($nbox$$39$$), $selectionRect$$1$$ = new D.$DvtRect$$($nbox$$39$$.$getCtx$(), 0, 0, $nodeRect$$1_width$$118$$, $height$$109$$);
  $selectionRect$$1$$.$setFill$(D.$JSCompiler_alias_NULL$$);
  $borderRadius$$9_color$$69_nodeLayout$$4$$ && ($selectionRect$$1$$.$setRx$($borderRadius$$9_color$$69_nodeLayout$$4$$), $selectionRect$$1$$.$setRy$($borderRadius$$9_color$$69_nodeLayout$$4$$));
  $selectionRect$$1$$.$setHoverStroke$(new D.$DvtSolidStroke$$($hoverColor$$6$$, D.$JSCompiler_alias_NULL$$, 2), new D.$DvtSolidStroke$$($selectionColor$$2$$, D.$JSCompiler_alias_NULL$$, 4));
  $selectionRect$$1$$.$setSelectedStroke$(new D.$DvtSolidStroke$$($selectionColor$$2$$, D.$JSCompiler_alias_NULL$$, 4), D.$JSCompiler_alias_NULL$$);
  $selectionRect$$1$$.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($hoverColor$$6$$, D.$JSCompiler_alias_NULL$$, 2), new D.$DvtSolidStroke$$($selectionColor$$2$$, D.$JSCompiler_alias_NULL$$, 6));
  $nodeContainer$$6$$.$addChild$($selectionRect$$1$$);
  $nodeContainer$$6$$.$setSelectionShape$($selectionRect$$1$$);
  $nodeRect$$1_width$$118$$ = new D.$DvtRect$$($nbox$$39$$.$getCtx$(), 0, 0, $nodeRect$$1_width$$118$$, $height$$109$$);
  $borderRadius$$9_color$$69_nodeLayout$$4$$ && ($nodeRect$$1_width$$118$$.$setRx$($borderRadius$$9_color$$69_nodeLayout$$4$$), $nodeRect$$1_width$$118$$.$setRy$($borderRadius$$9_color$$69_nodeLayout$$4$$));
  $borderRadius$$9_color$$69_nodeLayout$$4$$ = D.$DvtNBoxStyleUtils$$.$getNodeColor$($nbox$$39$$, $node$$262$$);
  $nodeRect$$1_width$$118$$.$setSolidFill$($borderRadius$$9_color$$69_nodeLayout$$4$$);
  D.$DvtNBoxStyleUtils$$.$getNodeBorderColor$($nbox$$39$$, $node$$262$$) && D.$DvtNBoxStyleUtils$$.$getNodeBorderWidth$($nbox$$39$$, $node$$262$$) && $nodeRect$$1_width$$118$$.$setSolidStroke$(D.$DvtNBoxStyleUtils$$.$getNodeBorderColor$($nbox$$39$$, $node$$262$$), D.$JSCompiler_alias_NULL$$, D.$DvtNBoxStyleUtils$$.$getNodeBorderWidth$($nbox$$39$$, $node$$262$$));
  $nodeContainer$$6$$.$addChild$($nodeRect$$1_width$$118$$);
  D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$39$$, $node$$262$$, $nodeRect$$1_width$$118$$, "background")
};
D.$DvtNBoxNodeRenderer$$.$_renderNodeIndicator$ = function $$DvtNBoxNodeRenderer$$$$_renderNodeIndicator$$($nbox$$40$$, $node$$263$$, $nodeContainer$$7$$, $nodeLayout$$5$$) {
  var $color$$70$$ = D.$DvtNBoxStyleUtils$$.$getNodeColor$($nbox$$40$$, $node$$263$$), $contrastColor$$3_indicatorIconColor$$2$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($color$$70$$), $indicatorMarker$$2_indicatorX$$2$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$40$$.$getCtx$()) ? $nodeLayout$$5$$.labelSectionWidth + $nodeLayout$$5$$.iconSectionWidth : 0, $indicatorColor$$3_indicatorIcon$$7$$ = D.$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$($nbox$$40$$, $node$$263$$);
  if($indicatorColor$$3_indicatorIcon$$7$$) {
    var $contrastColor$$3_indicatorIconColor$$2$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($indicatorColor$$3_indicatorIcon$$7$$), $bgRect$$4$$ = new D.$DvtRect$$($nbox$$40$$.$getCtx$(), $indicatorMarker$$2_indicatorX$$2$$, 0, $nodeLayout$$5$$.indicatorSectionWidth, $nodeLayout$$5$$.nodeHeight);
    $bgRect$$4$$.$setSolidFill$($indicatorColor$$3_indicatorIcon$$7$$);
    D.$DvtNBoxNodeRenderer$$.$_clipIfNecessary$($nbox$$40$$, $bgRect$$4$$, $nodeLayout$$5$$);
    $nodeContainer$$7$$.$addChild$($bgRect$$4$$);
    D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$40$$, $node$$263$$, $bgRect$$4$$, D.$DvtNBoxConstants$$.$INDICATOR$)
  }
  if($indicatorColor$$3_indicatorIcon$$7$$ = D.$DvtNBoxDataUtils$$.$getIndicatorIcon$($nbox$$40$$, $node$$263$$)) {
    $contrastColor$$3_indicatorIconColor$$2$$ = $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$COLOR$] ? $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$COLOR$] : $contrastColor$$3_indicatorIconColor$$2$$, $indicatorMarker$$2_indicatorX$$2$$ = $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$SOURCE$] ? new D.$DvtImageMarker$$($nbox$$40$$.$getCtx$(), $indicatorMarker$$2_indicatorX$$2$$ + $nodeLayout$$5$$.indicatorSectionWidth / 2, $nodeLayout$$5$$.nodeHeight / 
    2, $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$WIDTH$], $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$HEIGHT$], $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$SOURCE$]) : new D.$DvtSimpleMarker$$($nbox$$40$$.$getCtx$(), $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$SHAPE$], "alta", $indicatorMarker$$2_indicatorX$$2$$ + $nodeLayout$$5$$.indicatorSectionWidth / 2, $nodeLayout$$5$$.nodeHeight / 2, $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$WIDTH$], 
    $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$HEIGHT$]), "none" != $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$PATTERN$] ? $indicatorMarker$$2_indicatorX$$2$$.$setFill$(new D.$DvtPatternFill$$($indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$PATTERN$], $contrastColor$$3_indicatorIconColor$$2$$, $color$$70$$)) : $indicatorMarker$$2_indicatorX$$2$$.$setSolidFill$($contrastColor$$3_indicatorIconColor$$2$$), $indicatorColor$$3_indicatorIcon$$7$$[D.$DvtNBoxConstants$$.$WIDTH$] > 
    $nodeLayout$$5$$.indicatorSectionWidth && D.$DvtNBoxNodeRenderer$$.$_clipIfNecessary$($nbox$$40$$, $indicatorMarker$$2_indicatorX$$2$$, $nodeLayout$$5$$), $nodeContainer$$7$$.$addChild$($indicatorMarker$$2_indicatorX$$2$$), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$40$$, $node$$263$$, $indicatorMarker$$2_indicatorX$$2$$, D.$DvtNBoxConstants$$.$INDICATOR_ICON$)
  }
};
D.$DvtNBoxNodeRenderer$$.$_renderNodeIcon$ = function $$DvtNBoxNodeRenderer$$$$_renderNodeIcon$$($nbox$$41$$, $node$$264$$, $nodeContainer$$8$$, $nodeLayout$$6$$) {
  var $color$$71$$ = D.$DvtNBoxStyleUtils$$.$getNodeColor$($nbox$$41$$, $node$$264$$), $contrastColor$$4_iconColor$$1$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($color$$71$$), $iconX$$2_rtl$$25$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$41$$.$getCtx$()), $icon$$46$$ = D.$DvtNBoxDataUtils$$.$getIcon$($nbox$$41$$, $node$$264$$);
  if($icon$$46$$) {
    var $iconHeight$$10_padding$$28$$ = ($icon$$46$$[D.$DvtNBoxConstants$$.$SOURCE$] ? $icon$$46$$.sourcePaddingRatio : $icon$$46$$.shapePaddingRatio) * $nodeLayout$$6$$.nodeHeight, $iconMarker$$1_iconWidth$$12$$ = $icon$$46$$[D.$DvtNBoxConstants$$.$WIDTH$] ? $icon$$46$$[D.$DvtNBoxConstants$$.$WIDTH$] : $nodeLayout$$6$$.iconWidth ? $nodeLayout$$6$$.iconWidth : $nodeLayout$$6$$.iconSectionWidth - 2 * $iconHeight$$10_padding$$28$$, $iconHeight$$10_padding$$28$$ = $icon$$46$$[D.$DvtNBoxConstants$$.$HEIGHT$] ? 
    $icon$$46$$[D.$DvtNBoxConstants$$.$HEIGHT$] : $nodeLayout$$6$$.nodeHeight - 2 * $iconHeight$$10_padding$$28$$, $iconX$$2_rtl$$25$$ = $nodeLayout$$6$$[$iconX$$2_rtl$$25$$ ? "labelSectionWidth" : "indicatorSectionWidth"] + window.Math.max($nodeLayout$$6$$.iconSectionWidth / 2, $nodeLayout$$6$$.iconWidth ? $nodeLayout$$6$$.iconWidth / 2 : 0), $iconY$$2$$ = $nodeLayout$$6$$.nodeHeight / 2, $contrastColor$$4_iconColor$$1$$ = $icon$$46$$[D.$DvtNBoxConstants$$.$COLOR$] ? $icon$$46$$[D.$DvtNBoxConstants$$.$COLOR$] : 
    $contrastColor$$4_iconColor$$1$$, $iconMarker$$1_iconWidth$$12$$ = $icon$$46$$[D.$DvtNBoxConstants$$.$SOURCE$] ? new D.$DvtImageMarker$$($nbox$$41$$.$getCtx$(), $iconX$$2_rtl$$25$$, $iconY$$2$$, $iconMarker$$1_iconWidth$$12$$, $iconHeight$$10_padding$$28$$, $icon$$46$$[D.$DvtNBoxConstants$$.$SOURCE$]) : new D.$DvtSimpleMarker$$($nbox$$41$$.$getCtx$(), $icon$$46$$[D.$DvtNBoxConstants$$.$SHAPE$], "alta", $iconX$$2_rtl$$25$$, $iconY$$2$$, $iconMarker$$1_iconWidth$$12$$, $iconHeight$$10_padding$$28$$);
    "none" != $icon$$46$$[D.$DvtNBoxConstants$$.$PATTERN$] ? $iconMarker$$1_iconWidth$$12$$.$setFill$(new D.$DvtPatternFill$$($icon$$46$$[D.$DvtNBoxConstants$$.$PATTERN$], $contrastColor$$4_iconColor$$1$$, $color$$71$$)) : $iconMarker$$1_iconWidth$$12$$.$setSolidFill$($contrastColor$$4_iconColor$$1$$);
    (0 == $nodeLayout$$6$$.indicatorSectionWidth || 0 == $nodeLayout$$6$$.labelSectionWidth) && D.$DvtNBoxNodeRenderer$$.$_clipIfNecessary$($nbox$$41$$, $iconMarker$$1_iconWidth$$12$$, $nodeLayout$$6$$);
    $nodeContainer$$8$$.$addChild$($iconMarker$$1_iconWidth$$12$$)
  }
  D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$41$$, $node$$264$$, $iconMarker$$1_iconWidth$$12$$, D.$DvtNBoxConstants$$.$ICON$)
};
D.$DvtNBoxNodeRenderer$$.$_renderNodeLabels$ = function $$DvtNBoxNodeRenderer$$$$_renderNodeLabels$$($nbox$$42$$, $node$$265$$, $nodeContainer$$9_yOffset$$6$$, $nodeLayout$$7$$) {
  var $nodeEndLabelGap$$2_options$$214$$ = $nbox$$42$$.$getOptions$(), $nodeInterLabelGap$$1$$ = $nodeEndLabelGap$$2_options$$214$$.__layout.nodeInterLabelGap, $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$ = $nodeEndLabelGap$$2_options$$214$$.__layout.nodeLabelOnlyStartLabelGap, $color$$72_contrastColor$$5_nodeStartLabelGap$$2$$ = $nodeEndLabelGap$$2_options$$214$$.__layout.nodeStartLabelGap, $nodeEndLabelGap$$2_options$$214$$ = $nodeEndLabelGap$$2_options$$214$$.__layout.nodeEndLabelGap, $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$ = 
  $nodeLayout$$7$$.indicatorSectionWidth || $nodeLayout$$7$$.iconSectionWidth ? $color$$72_contrastColor$$5_nodeStartLabelGap$$2$$ : $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$, $color$$72_contrastColor$$5_nodeStartLabelGap$$2$$ = D.$DvtNBoxStyleUtils$$.$getNodeColor$($nbox$$42$$, $node$$265$$), $color$$72_contrastColor$$5_nodeStartLabelGap$$2$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($color$$72_contrastColor$$5_nodeStartLabelGap$$2$$), $labelX$$4_rtl$$26$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$42$$.$getCtx$()), 
  $halign$$10_secondaryLabel$$3$$ = $labelX$$4_rtl$$26$$ ? "right" : "left", $labelX$$4_rtl$$26$$ = $labelX$$4_rtl$$26$$ ? $nodeLayout$$7$$.labelSectionWidth - $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$ : $nodeLayout$$7$$.indicatorSectionWidth + $nodeLayout$$7$$.iconSectionWidth + $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$;
  if($node$$265$$[D.$DvtNBoxConstants$$.$LABEL$]) {
    var $label$$70$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$42$$.$getCtx$(), $node$$265$$[D.$DvtNBoxConstants$$.$LABEL$], D.$DvtNBoxStyleUtils$$.$getNodeLabelStyle$($nbox$$42$$), $halign$$10_secondaryLabel$$3$$, "middle"), $labelHeight$$9$$ = D.$DvtTextUtils$$.$guessTextDimensions$($label$$70$$).$h$;
    D.$DvtTextUtils$$.$fitText$($label$$70$$, $nodeLayout$$7$$.labelSectionWidth - $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$ - $nodeEndLabelGap$$2_options$$214$$, $labelHeight$$9$$, $nodeContainer$$9_yOffset$$6$$) && (D.$DvtNBoxRenderer$$.$positionText$($label$$70$$, $labelX$$4_rtl$$26$$, $nodeLayout$$7$$.nodeHeight / 2), $label$$70$$.$getCSSStyle$() && $label$$70$$.$getCSSStyle$().$getStyle$("color") ? $label$$70$$.$setSolidFill$($label$$70$$.$getCSSStyle$().$getStyle$("color")) : $label$$70$$.$setSolidFill$($color$$72_contrastColor$$5_nodeStartLabelGap$$2$$), 
    D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$42$$, $node$$265$$, $label$$70$$, D.$DvtNBoxConstants$$.$LABEL$));
    if($node$$265$$[D.$DvtNBoxConstants$$.$SECONDARY_LABEL$]) {
      var $halign$$10_secondaryLabel$$3$$ = D.$DvtNBoxRenderer$$.$createText$($nbox$$42$$.$getCtx$(), $node$$265$$[D.$DvtNBoxConstants$$.$SECONDARY_LABEL$], D.$DvtNBoxStyleUtils$$.$getNodeSecondaryLabelStyle$($nbox$$42$$), $halign$$10_secondaryLabel$$3$$, "middle"), $secondaryLabelHeight$$3$$ = D.$DvtTextUtils$$.$guessTextDimensions$($halign$$10_secondaryLabel$$3$$).$h$;
      D.$DvtTextUtils$$.$fitText$($halign$$10_secondaryLabel$$3$$, $nodeLayout$$7$$.labelSectionWidth - $nodeLabelOnlyStartLabelGap$$2_startLabelGap$$2$$ - $nodeEndLabelGap$$2_options$$214$$, $secondaryLabelHeight$$3$$, $nodeContainer$$9_yOffset$$6$$) && ($nodeContainer$$9_yOffset$$6$$ = ($nodeLayout$$7$$.nodeHeight - $labelHeight$$9$$ - $secondaryLabelHeight$$3$$ - $nodeInterLabelGap$$1$$) / 2, D.$DvtNBoxRenderer$$.$positionText$($label$$70$$, $labelX$$4_rtl$$26$$, $nodeContainer$$9_yOffset$$6$$ + 
      $labelHeight$$9$$ / 2), D.$DvtNBoxRenderer$$.$positionText$($halign$$10_secondaryLabel$$3$$, $labelX$$4_rtl$$26$$, $nodeContainer$$9_yOffset$$6$$ + $labelHeight$$9$$ + $nodeInterLabelGap$$1$$ + $secondaryLabelHeight$$3$$ / 2), $halign$$10_secondaryLabel$$3$$.$getCSSStyle$() && $halign$$10_secondaryLabel$$3$$.$getCSSStyle$().$getStyle$("color") ? $halign$$10_secondaryLabel$$3$$.$setSolidFill$($halign$$10_secondaryLabel$$3$$.$getCSSStyle$().$getStyle$("color")) : $halign$$10_secondaryLabel$$3$$.$setSolidFill$($color$$72_contrastColor$$5_nodeStartLabelGap$$2$$), 
      D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$42$$, $node$$265$$, $halign$$10_secondaryLabel$$3$$, D.$DvtNBoxConstants$$.$SECONDARY_LABEL$))
    }
  }
};
D.$DvtNBoxNodeRenderer$$.$_clipIfNecessary$ = function $$DvtNBoxNodeRenderer$$$$_clipIfNecessary$$($borderRadius$$10_nbox$$43$$, $displayable$$69$$, $nodeHeight$$6_nodeLayout$$8$$) {
  if($borderRadius$$10_nbox$$43$$ = D.$DvtNBoxStyleUtils$$.$getNodeBorderRadius$($borderRadius$$10_nbox$$43$$)) {
    var $nodeWidth$$3$$ = $nodeHeight$$6_nodeLayout$$8$$.indicatorSectionWidth + $nodeHeight$$6_nodeLayout$$8$$.iconSectionWidth + $nodeHeight$$6_nodeLayout$$8$$.labelSectionWidth;
    $nodeHeight$$6_nodeLayout$$8$$ = $nodeHeight$$6_nodeLayout$$8$$.nodeHeight;
    var $clipPath$$8$$ = new D.$DvtClipPath$$;
    (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$8$$, 0, 0, $nodeWidth$$3$$, $nodeHeight$$6_nodeLayout$$8$$, $borderRadius$$10_nbox$$43$$, $borderRadius$$10_nbox$$43$$);
    (0,D.$JSCompiler_StaticMethods_setClipPath$$)($displayable$$69$$, $clipPath$$8$$)
  }
};
D.$DvtNBoxNodeRenderer$$.$animateUpdate$ = function $$DvtNBoxNodeRenderer$$$$animateUpdate$$($animationHandler$$30$$, $oldNode$$14$$, $newNode$$11$$) {
  var $oldNBox$$10$$ = $animationHandler$$30$$.$_oldNBox$, $newNBox$$10$$ = $animationHandler$$30$$.$_newNBox$, $clipPath$$9_oldGlobalMatrix$$1$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($oldNode$$14$$), $movePlayable_newGlobalMatrix$$1_playable$$45$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($newNode$$11$$), $newMatrix$$3$$ = $newNode$$11$$.$getMatrix$(), $parent$$78$$ = $newNode$$11$$.getParent();
  $oldNode$$14$$.$setAlpha$(0);
  $animationHandler$$30$$.$_newNBox$.$addChild$($newNode$$11$$);
  $newNode$$11$$.$setMatrix$($clipPath$$9_oldGlobalMatrix$$1$$);
  var $newScrollMatrix_oldScrollContainer$$ = D.$DvtNBoxDataUtils$$.$getNodeScrollableContainer$($oldNBox$$10$$, $oldNode$$14$$), $newRect_newScrollContainer$$ = D.$DvtNBoxDataUtils$$.$getNodeScrollableContainer$($newNBox$$10$$, $newNode$$11$$);
  if($newScrollMatrix_oldScrollContainer$$ || $newRect_newScrollContainer$$) {
    var $clipPath$$9_oldGlobalMatrix$$1$$ = new D.$DvtClipPath$$, $oldScrollMatrix_rect$$36$$;
    $newScrollMatrix_oldScrollContainer$$ && ($oldScrollMatrix_rect$$36$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($newScrollMatrix_oldScrollContainer$$), $oldScrollMatrix_rect$$36$$ = new D.$DvtRectangle$$($oldScrollMatrix_rect$$36$$.$_tx$, $oldScrollMatrix_rect$$36$$.$_ty$, $newScrollMatrix_oldScrollContainer$$.getWidth(), $newScrollMatrix_oldScrollContainer$$.getHeight()));
    $newRect_newScrollContainer$$ && ($newScrollMatrix_oldScrollContainer$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($newRect_newScrollContainer$$), $newRect_newScrollContainer$$ = new D.$DvtRectangle$$($newScrollMatrix_oldScrollContainer$$.$_tx$, $newScrollMatrix_oldScrollContainer$$.$_ty$, $newRect_newScrollContainer$$.getWidth(), $newRect_newScrollContainer$$.getHeight()), $oldScrollMatrix_rect$$36$$ = $oldScrollMatrix_rect$$36$$ ? (0,D.$JSCompiler_StaticMethods_getUnion$$)($oldScrollMatrix_rect$$36$$, 
    $newRect_newScrollContainer$$) : $newRect_newScrollContainer$$);
    $oldScrollMatrix_rect$$36$$ && ((0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$9_oldGlobalMatrix$$1$$, $oldScrollMatrix_rect$$36$$.x, $oldScrollMatrix_rect$$36$$.y, $oldScrollMatrix_rect$$36$$.$w$, $oldScrollMatrix_rect$$36$$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($newNode$$11$$, $clipPath$$9_oldGlobalMatrix$$1$$))
  }
  $movePlayable_newGlobalMatrix$$1_playable$$45$$ = new D.$DvtAnimMoveTo$$($newNode$$11$$.$getCtx$(), $newNode$$11$$, new D.$DvtPoint$$($movePlayable_newGlobalMatrix$$1_playable$$45$$.$_tx$, $movePlayable_newGlobalMatrix$$1_playable$$45$$.$_ty$), $animationHandler$$30$$.$getAnimationDuration$());
  (0,D.$DvtPlayable$appendOnEnd$$)($movePlayable_newGlobalMatrix$$1_playable$$45$$, function() {
    $parent$$78$$.$addChild$($newNode$$11$$);
    $newNode$$11$$.$setMatrix$($newMatrix$$3$$);
    (0,D.$JSCompiler_StaticMethods_setClipPath$$)($newNode$$11$$, D.$JSCompiler_alias_NULL$$)
  });
  $animationHandler$$30$$.add($movePlayable_newGlobalMatrix$$1_playable$$45$$, 1);
  $movePlayable_newGlobalMatrix$$1_playable$$45$$ = new D.$DvtCustomAnimation$$($newNBox$$10$$.$getCtx$(), $newNode$$11$$, $animationHandler$$30$$.$getAnimationDuration$());
  D.$DvtNBoxNodeRenderer$$.$_animateFill$($movePlayable_newGlobalMatrix$$1_playable$$45$$, $oldNBox$$10$$, $newNBox$$10$$, $oldNode$$14$$, $newNode$$11$$, "background");
  D.$DvtNBoxNodeRenderer$$.$_animateFill$($movePlayable_newGlobalMatrix$$1_playable$$45$$, $oldNBox$$10$$, $newNBox$$10$$, $oldNode$$14$$, $newNode$$11$$, D.$DvtNBoxConstants$$.$LABEL$);
  D.$DvtNBoxNodeRenderer$$.$_animateFill$($movePlayable_newGlobalMatrix$$1_playable$$45$$, $oldNBox$$10$$, $newNBox$$10$$, $oldNode$$14$$, $newNode$$11$$, D.$DvtNBoxConstants$$.$SECONDARY_LABEL$);
  D.$DvtNBoxNodeRenderer$$.$_animateFill$($movePlayable_newGlobalMatrix$$1_playable$$45$$, $oldNBox$$10$$, $newNBox$$10$$, $oldNode$$14$$, $newNode$$11$$, D.$DvtNBoxConstants$$.$INDICATOR$);
  D.$DvtNBoxNodeRenderer$$.$_animateFill$($movePlayable_newGlobalMatrix$$1_playable$$45$$, $oldNBox$$10$$, $newNBox$$10$$, $oldNode$$14$$, $newNode$$11$$, D.$DvtNBoxConstants$$.$INDICATOR_ICON$);
  D.$DvtNBoxNodeRenderer$$.$_animateFill$($movePlayable_newGlobalMatrix$$1_playable$$45$$, $oldNBox$$10$$, $newNBox$$10$$, $oldNode$$14$$, $newNode$$11$$, D.$DvtNBoxConstants$$.$ICON$);
  $animationHandler$$30$$.add($movePlayable_newGlobalMatrix$$1_playable$$45$$, 1)
};
D.$DvtNBoxNodeRenderer$$.$_animateFill$ = function $$DvtNBoxNodeRenderer$$$$_animateFill$$($playable$$46$$, $oldDisplayable$$1_oldNBox$$11$$, $newDisplayable$$1_newNBox$$11$$, $oldNode$$15$$, $newNode$$12$$, $displayableKey$$) {
  $oldDisplayable$$1_oldNBox$$11$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($oldDisplayable$$1_oldNBox$$11$$, $oldNode$$15$$.getData(), $displayableKey$$);
  $newDisplayable$$1_newNBox$$11$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($newDisplayable$$1_newNBox$$11$$, $newNode$$12$$.getData(), $displayableKey$$);
  $oldDisplayable$$1_oldNBox$$11$$ && $newDisplayable$$1_newNBox$$11$$ && ((0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$46$$.$_animator$, "typeFill", $newDisplayable$$1_newNBox$$11$$, $newDisplayable$$1_newNBox$$11$$.$getFill$, $newDisplayable$$1_newNBox$$11$$.$setFill$, $newDisplayable$$1_newNBox$$11$$.$getFill$()), $newDisplayable$$1_newNBox$$11$$.$setFill$($oldDisplayable$$1_oldNBox$$11$$.$getFill$()))
};
D.$DvtNBoxNodeRenderer$$.$animateDelete$ = function $$DvtNBoxNodeRenderer$$$$animateDelete$$($animationHandler$$31$$, $oldNode$$16$$) {
  var $animationPhase$$4_oldDims$$2$$ = 0, $clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$ = $animationHandler$$31$$.$_oldNBox$, $newNBox$$12$$ = $animationHandler$$31$$.$_newNBox$, $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$ = $oldNode$$16$$.getData(), $centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$ = D.$DvtNBoxDataUtils$$.$getNodeIndex$($newNBox$$12$$, $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$[D.$DvtNBoxConstants$$.ID]);
  if(!(0,window.isNaN)($centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$) && ($centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$ = D.$DvtNBoxDataUtils$$.$getNode$($newNBox$$12$$, $centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$), !D.$DvtNBoxDataUtils$$.$isNodeHidden$($newNBox$$12$$, $centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$))) {
    if($animationPhase$$4_oldDims$$2$$ = 1, D.$DvtNBoxDataUtils$$.$getGrouping$($newNBox$$12$$)) {
      if($centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$ = $newNBox$$12$$.$getOptions$().__groups, D.$DvtNBoxDataUtils$$.$getGroupBehavior$($newNBox$$12$$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$ = $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$[D.$DvtNBoxDataUtils$$.$getCellIndex$($newNBox$$12$$, 
      $centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$)]), $centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$ = $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$[D.$DvtNBoxDataUtils$$.$getNodeGroupId$($centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$)]) {
        if($centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$12$$, $centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$)) {
          $centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$), $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$ = $clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$.$getOptions$().__layout.__nodeLayout, $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$ = 
          new D.$DvtPoint$$(($centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.indicatorSectionWidth + $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.iconSectionWidth + $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.labelSectionWidth) / 2, $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.nodeHeight / 2), $animationHandler$$31$$.add(new D.$DvtAnimMoveTo$$($newNBox$$12$$.$getCtx$(), 
          $oldNode$$16$$, new D.$DvtPoint$$($centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$.$_tx$ - $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.x, $centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$.$_ty$ - $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.y), $animationHandler$$31$$.$getAnimationDuration$()), $animationPhase$$4_oldDims$$2$$)
        }
      }
    }else {
      if($centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$[D.$DvtNBoxConstants$$.$ROW$] != $centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$[D.$DvtNBoxConstants$$.$ROW$] || $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$[D.$DvtNBoxConstants$$.$COLUMN$] != $centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$[D.$DvtNBoxConstants$$.$COLUMN$]) {
        $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($oldNode$$16$$);
        $animationPhase$$4_oldDims$$2$$ = $oldNode$$16$$.$getDimensions$();
        $animationHandler$$31$$.$_newNBox$.$addChild$($oldNode$$16$$);
        $oldNode$$16$$.$setMatrix$($centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$);
        var $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$ = D.$DvtNBoxDataUtils$$.$getCellByRowColumn$($newNBox$$12$$, $centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$[D.$DvtNBoxConstants$$.$ROW$], $centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$[D.$DvtNBoxConstants$$.$COLUMN$]), $cellMatrix_overflow$$5$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($newNBox$$12$$, 
        $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.getData(), "overflow");
        if($cellMatrix_overflow$$5$$) {
          $clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($cellMatrix_overflow$$5$$), $animationHandler$$31$$.add(new D.$DvtAnimMoveTo$$($newNBox$$12$$.$getCtx$(), $oldNode$$16$$, new D.$DvtPoint$$($clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$.$_tx$, $clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$.$_ty$), $animationHandler$$31$$.$getAnimationDuration$()), 1)
        }else {
          var $cellMatrix_overflow$$5$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$), $cellDimensions$$ = $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.$getDimensions$(), $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$ = $clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$.$getOptions$().__layout.__nodeLayout, $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$ = 
          new D.$DvtPoint$$(($centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.indicatorSectionWidth + $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.iconSectionWidth + $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.labelSectionWidth) / 2, $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.nodeHeight / 2);
          $animationHandler$$31$$.add(new D.$DvtAnimMoveTo$$($newNBox$$12$$.$getCtx$(), $oldNode$$16$$, new D.$DvtPoint$$($cellMatrix_overflow$$5$$.$_tx$ + $cellDimensions$$.$w$ / 2 - $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.x, $cellMatrix_overflow$$5$$.$_ty$ + $cellDimensions$$.$h$ / 2 - $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.y), $animationHandler$$31$$.$getAnimationDuration$()), 1)
        }
        $clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$ = new D.$DvtCustomAnimation$$($newNBox$$12$$.$getCtx$(), $centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$, $animationHandler$$31$$.$getAnimationDuration$());
        (0,D.$JSCompiler_StaticMethods_addProp$$)($clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$.$_animator$, "typeNumber", $oldNode$$16$$, $oldNode$$16$$.$getScaleX$, $oldNode$$16$$.$setScaleX$, 0.01);
        (0,D.$JSCompiler_StaticMethods_addProp$$)($clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$.$_animator$, "typeNumber", $oldNode$$16$$, $oldNode$$16$$.$getScaleY$, $oldNode$$16$$.$setScaleY$, 0.01);
        (0,D.$DvtPlayable$appendOnEnd$$)($clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$, function() {
          $newNBox$$12$$.$_deleteContainer$.$addChild$($oldNode$$16$$)
        });
        $animationHandler$$31$$.add($clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$, 2);
        $animationHandler$$31$$.add(new D.$DvtAnimMoveBy$$($newNBox$$12$$.$getCtx$(), $oldNode$$16$$, new D.$DvtPoint$$($animationPhase$$4_oldDims$$2$$.$w$ / 2, $animationPhase$$4_oldDims$$2$$.$h$ / 2), $animationHandler$$31$$.$getAnimationDuration$()), 2);
        $animationHandler$$31$$.add(new D.$DvtAnimFadeOut$$($newNBox$$12$$.$getCtx$(), $oldNode$$16$$, $animationHandler$$31$$.$getAnimationDuration$()), 2);
        return
      }
    }
  }
  $oldNode$$16$$.$setMatrix$(D.$DvtNBoxRenderer$$.$getGlobalMatrix$($oldNode$$16$$));
  if($centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$ = D.$DvtNBoxDataUtils$$.$getNodeScrollableContainer$($clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$, $oldNode$$16$$)) {
    $clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$ = new D.$DvtClipPath$$, $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$), $centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$ = new D.$DvtRectangle$$($centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.$_tx$, 
    $centerOffset_groups$$7_newCell$$3_nodeLayout$$9_oldData$$1_oldGlobalMatrix$$2_scrollMatrix$$.$_ty$, $centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$.$_width$, $centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$.$_height$), (0,D.$JSCompiler_StaticMethods_addRect$$)($clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$, $centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$.x, 
    $centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$.y, $centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$.$w$, $centerMatrix$$2_group$$31_groupNode$$14_newNode$$13_newNodeIndex_rect$$37_scrollContainer$$2$$.$h$), (0,D.$JSCompiler_StaticMethods_setClipPath$$)($oldNode$$16$$, $clipPath$$10_oldNBox$$12_overflowMatrix_scaleAnim$$)
  }
  $animationHandler$$31$$.add(new D.$DvtAnimFadeOut$$($newNBox$$12$$.$getCtx$(), $oldNode$$16$$, $animationHandler$$31$$.$getAnimationDuration$()), $animationPhase$$4_oldDims$$2$$);
  $newNBox$$12$$.$_deleteContainer$.$addChild$($oldNode$$16$$)
};
D.$DvtNBoxNodeRenderer$$.$animateInsert$ = function $$DvtNBoxNodeRenderer$$$$animateInsert$$($animationHandler$$32$$, $newNode$$14$$) {
  var $animationPhase$$5$$ = 2, $finalMatrix$$1_movePlayable$$1_oldNBox$$13$$ = $animationHandler$$32$$.$_oldNBox$, $fadeAnim$$2_newNBox$$13$$ = $animationHandler$$32$$.$_newNBox$, $centerMatrix$$3_group$$32_groupNode$$15_id$$239_oldNode$$17_oldNodeIndex$$ = $newNode$$14$$.getData()[D.$DvtNBoxConstants$$.ID], $centerMatrix$$3_group$$32_groupNode$$15_id$$239_oldNode$$17_oldNodeIndex$$ = D.$DvtNBoxDataUtils$$.$getNodeIndex$($finalMatrix$$1_movePlayable$$1_oldNBox$$13$$, $centerMatrix$$3_group$$32_groupNode$$15_id$$239_oldNode$$17_oldNodeIndex$$);
  if(!(0,window.isNaN)($centerMatrix$$3_group$$32_groupNode$$15_id$$239_oldNode$$17_oldNodeIndex$$) && ($centerMatrix$$3_group$$32_groupNode$$15_id$$239_oldNode$$17_oldNodeIndex$$ = D.$DvtNBoxDataUtils$$.$getNode$($finalMatrix$$1_movePlayable$$1_oldNBox$$13$$, $centerMatrix$$3_group$$32_groupNode$$15_id$$239_oldNode$$17_oldNodeIndex$$), !D.$DvtNBoxDataUtils$$.$isNodeHidden$($finalMatrix$$1_movePlayable$$1_oldNBox$$13$$, $centerMatrix$$3_group$$32_groupNode$$15_id$$239_oldNode$$17_oldNodeIndex$$) && 
  ($animationPhase$$5$$ = 1, D.$DvtNBoxDataUtils$$.$getGrouping$($finalMatrix$$1_movePlayable$$1_oldNBox$$13$$)))) {
    var $centerOffset$$1_groups$$8_nodeLayout$$10$$ = $finalMatrix$$1_movePlayable$$1_oldNBox$$13$$.$getOptions$().__groups;
    D.$DvtNBoxDataUtils$$.$getGroupBehavior$($finalMatrix$$1_movePlayable$$1_oldNBox$$13$$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($centerOffset$$1_groups$$8_nodeLayout$$10$$ = $centerOffset$$1_groups$$8_nodeLayout$$10$$[D.$DvtNBoxDataUtils$$.$getCellIndex$($finalMatrix$$1_movePlayable$$1_oldNBox$$13$$, $centerMatrix$$3_group$$32_groupNode$$15_id$$239_oldNode$$17_oldNodeIndex$$)]);
    if($centerMatrix$$3_group$$32_groupNode$$15_id$$239_oldNode$$17_oldNodeIndex$$ = $centerOffset$$1_groups$$8_nodeLayout$$10$$[D.$DvtNBoxDataUtils$$.$getNodeGroupId$($centerMatrix$$3_group$$32_groupNode$$15_id$$239_oldNode$$17_oldNodeIndex$$)]) {
      if($centerMatrix$$3_group$$32_groupNode$$15_id$$239_oldNode$$17_oldNodeIndex$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($finalMatrix$$1_movePlayable$$1_oldNBox$$13$$, $centerMatrix$$3_group$$32_groupNode$$15_id$$239_oldNode$$17_oldNodeIndex$$)) {
        var $childMatrix$$2$$ = $newNode$$14$$.$getMatrix$(), $parent$$79$$ = $newNode$$14$$.getParent(), $finalMatrix$$1_movePlayable$$1_oldNBox$$13$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($newNode$$14$$), $centerMatrix$$3_group$$32_groupNode$$15_id$$239_oldNode$$17_oldNodeIndex$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($centerMatrix$$3_group$$32_groupNode$$15_id$$239_oldNode$$17_oldNodeIndex$$), $centerOffset$$1_groups$$8_nodeLayout$$10$$ = $fadeAnim$$2_newNBox$$13$$.$getOptions$().__layout.__nodeLayout, 
        $centerOffset$$1_groups$$8_nodeLayout$$10$$ = new D.$DvtPoint$$(($centerOffset$$1_groups$$8_nodeLayout$$10$$.indicatorSectionWidth + $centerOffset$$1_groups$$8_nodeLayout$$10$$.iconSectionWidth + $centerOffset$$1_groups$$8_nodeLayout$$10$$.labelSectionWidth) / 2, $centerOffset$$1_groups$$8_nodeLayout$$10$$.nodeHeight / 2);
        $centerMatrix$$3_group$$32_groupNode$$15_id$$239_oldNode$$17_oldNodeIndex$$.translate(-$centerOffset$$1_groups$$8_nodeLayout$$10$$.x, -$centerOffset$$1_groups$$8_nodeLayout$$10$$.y);
        $fadeAnim$$2_newNBox$$13$$.$addChild$($newNode$$14$$);
        $newNode$$14$$.$setMatrix$($centerMatrix$$3_group$$32_groupNode$$15_id$$239_oldNode$$17_oldNodeIndex$$);
        $finalMatrix$$1_movePlayable$$1_oldNBox$$13$$ = new D.$DvtAnimMoveTo$$($fadeAnim$$2_newNBox$$13$$.$getCtx$(), $newNode$$14$$, new D.$DvtPoint$$($finalMatrix$$1_movePlayable$$1_oldNBox$$13$$.$_tx$, $finalMatrix$$1_movePlayable$$1_oldNBox$$13$$.$_ty$), $animationHandler$$32$$.$getAnimationDuration$());
        (0,D.$DvtPlayable$appendOnEnd$$)($finalMatrix$$1_movePlayable$$1_oldNBox$$13$$, function() {
          $newNode$$14$$.$setMatrix$($childMatrix$$2$$);
          $parent$$79$$.$addChild$($newNode$$14$$)
        });
        $animationHandler$$32$$.add($finalMatrix$$1_movePlayable$$1_oldNBox$$13$$, $animationPhase$$5$$)
      }
    }
  }
  $fadeAnim$$2_newNBox$$13$$ = new D.$DvtCustomAnimation$$($fadeAnim$$2_newNBox$$13$$.$getCtx$(), $newNode$$14$$, $animationHandler$$32$$.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($fadeAnim$$2_newNBox$$13$$.$_animator$, "typeNumber", $newNode$$14$$, $newNode$$14$$.$getAlpha$, $newNode$$14$$.$setAlpha$, $newNode$$14$$.$getAlpha$());
  $animationHandler$$32$$.add($fadeAnim$$2_newNBox$$13$$, $animationPhase$$5$$);
  $newNode$$14$$.$setAlpha$(0)
};
D.$DvtNBoxNodeRenderer$$.$_addAccessibilityAttributes$ = function $$DvtNBoxNodeRenderer$$$$_addAccessibilityAttributes$$($nbox$$44$$, $object$$15$$) {
  $object$$15$$.$setAriaRole$("img");
  if(!(0,D.$DvtAgent$deferAriaCreation$$)()) {
    var $desc$$25$$ = $object$$15$$.$getAriaLabel$();
    $desc$$25$$ && $object$$15$$.$setAriaProperty$(D.$DvtNBoxConstants$$.$LABEL$, $desc$$25$$)
  }
};
D.$DvtNBoxCategoryNodeRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxCategoryNodeRenderer$$, D.$DvtObj$$, "DvtNBoxCategoryNodeRenderer");
D.$DvtNBoxCategoryNodeRenderer$$.$render$ = function $$DvtNBoxCategoryNodeRenderer$$$$render$$($nbox$$14$$, $nodeData$$42$$, $nodeContainer$$, $scale$$55$$, $gap$$24$$) {
  D.$DvtNBoxCategoryNodeRenderer$$.$_renderNodeBackground$($nbox$$14$$, $nodeData$$42$$, $nodeContainer$$, $scale$$55$$, $gap$$24$$);
  var $rendered$$5$$ = D.$DvtNBoxCategoryNodeRenderer$$.$_renderNodeIndicator$($nbox$$14$$, $nodeData$$42$$, $nodeContainer$$, $scale$$55$$, $gap$$24$$);
  D.$DvtNBoxCategoryNodeRenderer$$.$_renderNodeCount$($nbox$$14$$, $nodeData$$42$$, $nodeContainer$$, $scale$$55$$, $rendered$$5$$, $gap$$24$$);
  D.$DvtNBoxCategoryNodeRenderer$$.$_addAccessibilityAttributes$($nbox$$14$$, $nodeContainer$$)
};
D.$DvtNBoxCategoryNodeRenderer$$.$_renderNodeBackground$ = function $$DvtNBoxCategoryNodeRenderer$$$$_renderNodeBackground$$($color$$66_nbox$$15$$, $node$$254$$, $nodeContainer$$1$$, $borderRadius$$6_scale$$56$$, $gap$$25_nodeRect_side$$22$$) {
  $node$$254$$.__scale = $borderRadius$$6_scale$$56$$;
  $node$$254$$.__gap = $gap$$25_nodeRect_side$$22$$;
  $gap$$25_nodeRect_side$$22$$ = D.$DvtNBoxCategoryNodeRenderer$$.$getSideLength$($node$$254$$);
  $borderRadius$$6_scale$$56$$ = D.$DvtNBoxStyleUtils$$.$getNodeBorderRadius$($color$$66_nbox$$15$$);
  var $hoverColor$$5$$ = D.$DvtNBoxStyleUtils$$.$getNodeHoverColor$($color$$66_nbox$$15$$), $selectionColor$$1$$ = D.$DvtNBoxStyleUtils$$.$getNodeSelectionColor$($color$$66_nbox$$15$$), $selectionRect$$ = new D.$DvtRect$$($color$$66_nbox$$15$$.$getCtx$(), -$gap$$25_nodeRect_side$$22$$ / 2, -$gap$$25_nodeRect_side$$22$$ / 2, $gap$$25_nodeRect_side$$22$$, $gap$$25_nodeRect_side$$22$$);
  $selectionRect$$.$setFill$(D.$JSCompiler_alias_NULL$$);
  $borderRadius$$6_scale$$56$$ && ($selectionRect$$.$setRx$($borderRadius$$6_scale$$56$$), $selectionRect$$.$setRy$($borderRadius$$6_scale$$56$$));
  $selectionRect$$.$setHoverStroke$(new D.$DvtSolidStroke$$($hoverColor$$5$$, D.$JSCompiler_alias_NULL$$, 2), new D.$DvtSolidStroke$$($selectionColor$$1$$, D.$JSCompiler_alias_NULL$$, 4));
  $selectionRect$$.$setSelectedStroke$(new D.$DvtSolidStroke$$($selectionColor$$1$$, D.$JSCompiler_alias_NULL$$, 4), D.$JSCompiler_alias_NULL$$);
  $selectionRect$$.$setSelectedHoverStroke$(new D.$DvtSolidStroke$$($hoverColor$$5$$, D.$JSCompiler_alias_NULL$$, 2), new D.$DvtSolidStroke$$($selectionColor$$1$$, D.$JSCompiler_alias_NULL$$, 6));
  $nodeContainer$$1$$.$addChild$($selectionRect$$);
  $nodeContainer$$1$$.$setSelectionShape$($selectionRect$$);
  $gap$$25_nodeRect_side$$22$$ = new D.$DvtRect$$($color$$66_nbox$$15$$.$getCtx$(), -$gap$$25_nodeRect_side$$22$$ / 2, -$gap$$25_nodeRect_side$$22$$ / 2, $gap$$25_nodeRect_side$$22$$, $gap$$25_nodeRect_side$$22$$);
  $borderRadius$$6_scale$$56$$ && ($gap$$25_nodeRect_side$$22$$.$setRx$($borderRadius$$6_scale$$56$$), $gap$$25_nodeRect_side$$22$$.$setRy$($borderRadius$$6_scale$$56$$));
  $color$$66_nbox$$15$$ = D.$DvtNBoxStyleUtils$$.$getCategoryNodeColor$($color$$66_nbox$$15$$, $node$$254$$);
  $gap$$25_nodeRect_side$$22$$.$setSolidFill$($color$$66_nbox$$15$$);
  $nodeContainer$$1$$.$addChild$($gap$$25_nodeRect_side$$22$$)
};
D.$DvtNBoxCategoryNodeRenderer$$.$getSideLength$ = function $$DvtNBoxCategoryNodeRenderer$$$$getSideLength$$($node$$255$$) {
  return $node$$255$$.__scale * window.Math.sqrt($node$$255$$.nodeIndices.length) - $node$$255$$.__gap
};
D.$DvtNBoxCategoryNodeRenderer$$.$_renderNodeIndicator$ = function $$DvtNBoxCategoryNodeRenderer$$$$_renderNodeIndicator$$($nbox$$16$$, $node$$256$$, $nodeContainer$$2$$, $color$$67_scale$$57$$, $gap$$26_indicatorIcon$$2$$) {
  var $bgRect$$3_indicatorIconColor_retVal$$3$$ = D.$JSCompiler_alias_FALSE$$, $indicatorColor_markerGap$$ = $nbox$$16$$.$getOptions$().__layout.markerGap, $indicatorMarker_rtl$$18$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$16$$.$getCtx$()), $side$$23$$ = $color$$67_scale$$57$$ * window.Math.sqrt($node$$256$$.nodeIndices.length) - $gap$$26_indicatorIcon$$2$$;
  $color$$67_scale$$57$$ = D.$DvtNBoxStyleUtils$$.$getCategoryNodeColor$($nbox$$16$$, $node$$256$$);
  var $contrastColor$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($color$$67_scale$$57$$), $indicatorWidth$$ = $side$$23$$ / 4, $indicatorIconScale$$ = 1, $indicatorX$$ = $indicatorMarker_rtl$$18$$ ? $side$$23$$ / 2 - $indicatorWidth$$ : -$side$$23$$ / 2;
  ($gap$$26_indicatorIcon$$2$$ = D.$DvtNBoxStyleUtils$$.$getStyledCategoryIndicatorIcon$($nbox$$16$$, $node$$256$$)) && ($indicatorIconScale$$ = window.Math.min($indicatorWidth$$ / ($gap$$26_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$WIDTH$] + 2 * $indicatorColor_markerGap$$), $side$$23$$ / ($gap$$26_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$HEIGHT$] + 2 * $indicatorColor_markerGap$$)));
  if($indicatorColor_markerGap$$ = D.$DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$($nbox$$16$$, $node$$256$$)) {
    $contrastColor$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($indicatorColor_markerGap$$), $bgRect$$3_indicatorIconColor_retVal$$3$$ = new D.$DvtRect$$($nbox$$16$$.$getCtx$(), $indicatorX$$, -$side$$23$$ / 2, $indicatorWidth$$, $side$$23$$), $bgRect$$3_indicatorIconColor_retVal$$3$$.$setSolidFill$($indicatorColor_markerGap$$), $nodeContainer$$2$$.$addChild$($bgRect$$3_indicatorIconColor_retVal$$3$$), $bgRect$$3_indicatorIconColor_retVal$$3$$ = D.$JSCompiler_alias_TRUE$$
  }
  $gap$$26_indicatorIcon$$2$$ && ($bgRect$$3_indicatorIconColor_retVal$$3$$ = $gap$$26_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$COLOR$] ? $gap$$26_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$COLOR$] : $contrastColor$$, $indicatorMarker_rtl$$18$$ = new D.$DvtSimpleMarker$$($nbox$$16$$.$getCtx$(), $gap$$26_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$SHAPE$], "alta", ($indicatorMarker_rtl$$18$$ ? 1 : -1) * ($side$$23$$ - $indicatorWidth$$) / 2, 0, $gap$$26_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$WIDTH$] * 
  $indicatorIconScale$$, $gap$$26_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$HEIGHT$] * $indicatorIconScale$$), $gap$$26_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$PATTERN$] && "none" != $gap$$26_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$PATTERN$] ? $indicatorMarker_rtl$$18$$.$setFill$(new D.$DvtPatternFill$$($gap$$26_indicatorIcon$$2$$[D.$DvtNBoxConstants$$.$PATTERN$], $bgRect$$3_indicatorIconColor_retVal$$3$$, $color$$67_scale$$57$$)) : $indicatorMarker_rtl$$18$$.$setSolidFill$($bgRect$$3_indicatorIconColor_retVal$$3$$), 
  $nodeContainer$$2$$.$addChild$($indicatorMarker_rtl$$18$$), D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$16$$, $node$$256$$, $indicatorMarker_rtl$$18$$, D.$DvtNBoxConstants$$.$INDICATOR_ICON$), $bgRect$$3_indicatorIconColor_retVal$$3$$ = D.$JSCompiler_alias_TRUE$$);
  return $bgRect$$3_indicatorIconColor_retVal$$3$$
};
D.$DvtNBoxCategoryNodeRenderer$$.$_renderNodeCount$ = function $$DvtNBoxCategoryNodeRenderer$$$$_renderNodeCount$$($fontSize$$12_nbox$$17$$, $node$$257$$, $nodeContainer$$3$$, $scale$$58_side$$24$$, $bIndicator$$1_width$$117$$, $color$$68_contrastColor$$1_gap$$27$$) {
  var $labelGap$$1$$ = $fontSize$$12_nbox$$17$$.$getOptions$().__layout.categoryNodeLabelGap, $countX_rtl$$19$$ = (0,D.$DvtAgent$isRightToLeft$$)($fontSize$$12_nbox$$17$$.$getCtx$()), $alphaFade_labelBounds$$12$$ = D.$DvtNBoxStyleUtils$$.$getFadedNodeAlpha$($fontSize$$12_nbox$$17$$), $count$$19_highlightedItems$$1$$ = D.$DvtNBoxDataUtils$$.$getHighlightedItems$($fontSize$$12_nbox$$17$$), $label$$64$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($fontSize$$12_nbox$$17$$, $node$$257$$, "label");
  if($count$$19_highlightedItems$$1$$) {
    if($count$$19_highlightedItems$$1$$ = $node$$257$$.highlightedCount, 0 == $count$$19_highlightedItems$$1$$) {
      $label$$64$$ && $label$$64$$.$setTextString$("");
      $nodeContainer$$3$$.$setAlpha$($alphaFade_labelBounds$$12$$);
      return
    }
  }else {
    $count$$19_highlightedItems$$1$$ = $node$$257$$.nodeIndices.length
  }
  $scale$$58_side$$24$$ = $scale$$58_side$$24$$ * window.Math.sqrt($node$$257$$.nodeIndices.length) - $color$$68_contrastColor$$1_gap$$27$$;
  $bIndicator$$1_width$$117$$ = $bIndicator$$1_width$$117$$ ? 0.75 * $scale$$58_side$$24$$ : $scale$$58_side$$24$$;
  $countX_rtl$$19$$ = ($countX_rtl$$19$$ ? -1 : 1) * ($scale$$58_side$$24$$ - $bIndicator$$1_width$$117$$) / 2;
  $color$$68_contrastColor$$1_gap$$27$$ = D.$DvtNBoxStyleUtils$$.$getCategoryNodeColor$($fontSize$$12_nbox$$17$$, $node$$257$$);
  $color$$68_contrastColor$$1_gap$$27$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($color$$68_contrastColor$$1_gap$$27$$);
  $alphaFade_labelBounds$$12$$ = new D.$DvtRectangle$$(0, 0, $bIndicator$$1_width$$117$$ - 2 * $labelGap$$1$$, $scale$$58_side$$24$$ - 2 * $labelGap$$1$$);
  $label$$64$$ ? $label$$64$$.$setTextString$("" + $count$$19_highlightedItems$$1$$) : ($label$$64$$ = D.$DvtNBoxRenderer$$.$createText$($fontSize$$12_nbox$$17$$.$getCtx$(), "" + $count$$19_highlightedItems$$1$$, D.$DvtNBoxStyleUtils$$.$getCategoryNodeLabelStyle$($fontSize$$12_nbox$$17$$), "center", "middle"), D.$DvtNBoxDataUtils$$.$setDisplayable$($fontSize$$12_nbox$$17$$, $node$$257$$, $label$$64$$, "label"));
  $fontSize$$12_nbox$$17$$ = $label$$64$$.$getOptimalFontSize$($alphaFade_labelBounds$$12$$);
  $label$$64$$.$setFontSize$($fontSize$$12_nbox$$17$$);
  D.$DvtTextUtils$$.$fitText$($label$$64$$, $bIndicator$$1_width$$117$$ - 2 * $labelGap$$1$$, $scale$$58_side$$24$$ - 2 * $labelGap$$1$$, $nodeContainer$$3$$) && (D.$DvtNBoxRenderer$$.$positionText$($label$$64$$, $countX_rtl$$19$$, 0), $label$$64$$.$setSolidFill$($color$$68_contrastColor$$1_gap$$27$$))
};
D.$DvtNBoxCategoryNodeRenderer$$.$animateUpdate$ = function $$DvtNBoxCategoryNodeRenderer$$$$animateUpdate$$($animationHandler$$20$$, $oldNode$$12_playable$$39$$, $newNode$$9$$) {
  var $oldGlobalMatrix$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($oldNode$$12_playable$$39$$), $newGlobalMatrix$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($newNode$$9$$), $newMatrix$$2$$ = $newNode$$9$$.$getMatrix$(), $parent$$76$$ = $newNode$$9$$.getParent();
  $oldNode$$12_playable$$39$$.$setAlpha$(0);
  $animationHandler$$20$$.$_newNBox$.$addChild$($newNode$$9$$);
  $newNode$$9$$.$setMatrix$($oldGlobalMatrix$$);
  $oldNode$$12_playable$$39$$ = new D.$DvtAnimMoveTo$$($newNode$$9$$.$getCtx$(), $newNode$$9$$, new D.$DvtPoint$$($newGlobalMatrix$$.$_tx$, $newGlobalMatrix$$.$_ty$), $animationHandler$$20$$.$getAnimationDuration$());
  (0,D.$DvtPlayable$appendOnEnd$$)($oldNode$$12_playable$$39$$, function() {
    $parent$$76$$.$addChild$($newNode$$9$$);
    $newNode$$9$$.$setMatrix$($newMatrix$$2$$)
  });
  $animationHandler$$20$$.add($oldNode$$12_playable$$39$$, 1)
};
D.$DvtNBoxCategoryNodeRenderer$$.$animateDelete$ = function $$DvtNBoxCategoryNodeRenderer$$$$animateDelete$$($animationHandler$$21$$, $oldNode$$13$$) {
  var $animationPhase$$ = 1, $fadePlayable_oldNBox$$4_scalePlayable$$ = $animationHandler$$21$$.$_oldNBox$, $newNBox$$2$$ = $animationHandler$$21$$.$_newNBox$;
  D.$DvtNBoxCategoryNodeRenderer$$.$isMaximizeEqual$($fadePlayable_oldNBox$$4_scalePlayable$$, $newNBox$$2$$) && D.$DvtNBoxCategoryNodeRenderer$$.$isGroupingEqual$($fadePlayable_oldNBox$$4_scalePlayable$$, $newNBox$$2$$) && ($animationPhase$$ = 0);
  $fadePlayable_oldNBox$$4_scalePlayable$$ = new D.$DvtAnimScaleTo$$($newNBox$$2$$.$getCtx$(), $oldNode$$13$$, new D.$DvtPoint$$(0.01, 0.01), $animationHandler$$21$$.$getAnimationDuration$());
  $animationHandler$$21$$.add($fadePlayable_oldNBox$$4_scalePlayable$$, $animationPhase$$);
  $fadePlayable_oldNBox$$4_scalePlayable$$ = new D.$DvtAnimFadeOut$$($newNBox$$2$$.$getCtx$(), $oldNode$$13$$, $animationHandler$$21$$.$getAnimationDuration$());
  $animationHandler$$21$$.add($fadePlayable_oldNBox$$4_scalePlayable$$, $animationPhase$$);
  $oldNode$$13$$.$setMatrix$(D.$DvtNBoxRenderer$$.$getGlobalMatrix$($oldNode$$13$$));
  $newNBox$$2$$.$_deleteContainer$.$addChild$($oldNode$$13$$)
};
D.$DvtNBoxCategoryNodeRenderer$$.$animateInsert$ = function $$DvtNBoxCategoryNodeRenderer$$$$animateInsert$$($animationHandler$$22$$, $newNode$$10$$) {
  var $animationPhase$$1$$ = 1, $oldNBox$$5_scalePlayable$$1$$ = $animationHandler$$22$$.$_oldNBox$, $fadeAnim$$1_newNBox$$3$$ = $animationHandler$$22$$.$_newNBox$;
  D.$DvtNBoxCategoryNodeRenderer$$.$isMaximizeEqual$($oldNBox$$5_scalePlayable$$1$$, $fadeAnim$$1_newNBox$$3$$) && D.$DvtNBoxCategoryNodeRenderer$$.$isGroupingEqual$($oldNBox$$5_scalePlayable$$1$$, $fadeAnim$$1_newNBox$$3$$) && ($animationPhase$$1$$ = 2);
  $newNode$$10$$.$setScaleX$(0.01);
  $newNode$$10$$.$setScaleY$(0.01);
  $oldNBox$$5_scalePlayable$$1$$ = new D.$DvtAnimScaleTo$$($fadeAnim$$1_newNBox$$3$$.$getCtx$(), $newNode$$10$$, new D.$DvtPoint$$(1, 1), $animationHandler$$22$$.$getAnimationDuration$());
  $animationHandler$$22$$.add($oldNBox$$5_scalePlayable$$1$$, $animationPhase$$1$$);
  $fadeAnim$$1_newNBox$$3$$ = new D.$DvtCustomAnimation$$($fadeAnim$$1_newNBox$$3$$.$getCtx$(), $newNode$$10$$, $animationHandler$$22$$.$getAnimationDuration$());
  (0,D.$JSCompiler_StaticMethods_addProp$$)($fadeAnim$$1_newNBox$$3$$.$_animator$, "typeNumber", $newNode$$10$$, $newNode$$10$$.$getAlpha$, $newNode$$10$$.$setAlpha$, $newNode$$10$$.$getAlpha$());
  $animationHandler$$22$$.add($fadeAnim$$1_newNBox$$3$$, $animationPhase$$1$$);
  $newNode$$10$$.$setAlpha$(0)
};
D.$DvtNBoxCategoryNodeRenderer$$.$isGroupingEqual$ = function $$DvtNBoxCategoryNodeRenderer$$$$isGroupingEqual$$($oldNBox$$6$$, $newNBox$$4$$) {
  var $i$$726_oldGroupBehavior$$ = D.$DvtNBoxDataUtils$$.$getGroupBehavior$($oldNBox$$6$$), $newGroupBehavior_oldCategory$$ = D.$DvtNBoxDataUtils$$.$getGroupBehavior$($newNBox$$4$$), $oldNodeCount$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($oldNBox$$6$$), $newCategory_newNodeCount$$ = D.$DvtNBoxDataUtils$$.$getNodeCount$($newNBox$$4$$), $identical$$ = D.$JSCompiler_alias_FALSE$$;
  if($i$$726_oldGroupBehavior$$ == $newGroupBehavior_oldCategory$$ && $oldNodeCount$$ == $newCategory_newNodeCount$$) {
    $identical$$ = D.$JSCompiler_alias_TRUE$$;
    for($i$$726_oldGroupBehavior$$ = 0;$i$$726_oldGroupBehavior$$ < $oldNodeCount$$;$i$$726_oldGroupBehavior$$++) {
      if($newGroupBehavior_oldCategory$$ = D.$DvtNBoxDataUtils$$.$getNodeGroupId$(D.$DvtNBoxDataUtils$$.$getNode$($oldNBox$$6$$, $i$$726_oldGroupBehavior$$)), $newCategory_newNodeCount$$ = D.$DvtNBoxDataUtils$$.$getNodeGroupId$(D.$DvtNBoxDataUtils$$.$getNode$($newNBox$$4$$, $i$$726_oldGroupBehavior$$)), $newGroupBehavior_oldCategory$$ != $newCategory_newNodeCount$$) {
        $identical$$ = D.$JSCompiler_alias_FALSE$$;
        break
      }
    }
  }
  return $identical$$
};
D.$DvtNBoxCategoryNodeRenderer$$.$isMaximizeEqual$ = function $$DvtNBoxCategoryNodeRenderer$$$$isMaximizeEqual$$($oldNBox$$7$$, $newNBox$$5$$) {
  var $oldMaximizedRow$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($oldNBox$$7$$), $oldMaximizedColumn$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($oldNBox$$7$$), $newMaximizedRow$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($newNBox$$5$$), $newMaximizedColumn$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($newNBox$$5$$);
  return $oldMaximizedRow$$ == $newMaximizedRow$$ && $oldMaximizedColumn$$ == $newMaximizedColumn$$
};
D.$DvtNBoxCategoryNodeRenderer$$.$_addAccessibilityAttributes$ = function $$DvtNBoxCategoryNodeRenderer$$$$_addAccessibilityAttributes$$($nbox$$18$$, $object$$12$$) {
  $object$$12$$.$setAriaRole$("img");
  if(!(0,D.$DvtAgent$deferAriaCreation$$)()) {
    var $desc$$22$$ = $object$$12$$.$getAriaLabel$();
    $desc$$22$$ && $object$$12$$.$setAriaProperty$(D.$DvtNBoxConstants$$.$LABEL$, $desc$$22$$)
  }
};
D.$DvtNBoxDrawerRenderer$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxDrawerRenderer$$, D.$DvtObj$$, "DvtNBoxDrawerRenderer");
D.$DvtNBoxDrawerRenderer$$.$render$ = function $$DvtNBoxDrawerRenderer$$$$render$$($nbox$$30$$, $data$$82$$, $drawerContainer$$, $availSpace$$100_drawerBounds_keyboardFocusEffect$$2$$) {
  $availSpace$$100_drawerBounds_keyboardFocusEffect$$2$$ = D.$DvtNBoxDrawerRenderer$$.$getDrawerBounds$($nbox$$30$$, $data$$82$$, $availSpace$$100_drawerBounds_keyboardFocusEffect$$2$$);
  $data$$82$$.__drawerBounds = $availSpace$$100_drawerBounds_keyboardFocusEffect$$2$$;
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($drawerContainer$$, $availSpace$$100_drawerBounds_keyboardFocusEffect$$2$$.x, $availSpace$$100_drawerBounds_keyboardFocusEffect$$2$$.y);
  $availSpace$$100_drawerBounds_keyboardFocusEffect$$2$$ = new D.$DvtKeyboardFocusEffect$$($nbox$$30$$.$getCtx$(), $drawerContainer$$, new D.$DvtRectangle$$(-1, -1, $availSpace$$100_drawerBounds_keyboardFocusEffect$$2$$.$w$ + 2, $availSpace$$100_drawerBounds_keyboardFocusEffect$$2$$.$h$ + 2));
  D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$30$$, $data$$82$$, $availSpace$$100_drawerBounds_keyboardFocusEffect$$2$$, "focusEffect");
  D.$DvtNBoxDrawerRenderer$$.$_renderHeader$($nbox$$30$$, $data$$82$$, $drawerContainer$$);
  D.$DvtNBoxDrawerRenderer$$.$_renderBody$($nbox$$30$$, $data$$82$$, $drawerContainer$$);
  D.$DvtNBoxDrawerRenderer$$.$_addAccessibilityAttributes$($nbox$$30$$, $data$$82$$, $drawerContainer$$)
};
D.$DvtNBoxDrawerRenderer$$.$_renderHeader$ = function $$DvtNBoxDrawerRenderer$$$$_renderHeader$$($categoryLabel_nbox$$31$$, $data$$83_drawerBounds$$1$$, $drawerContainer$$1$$) {
  var $closeHeight_countColor_options$$208$$ = $categoryLabel_nbox$$31$$.$getOptions$(), $drawerButtonGap$$ = $closeHeight_countColor_options$$208$$.__layout.drawerButtonGap, $drawerStartGap$$ = $closeHeight_countColor_options$$208$$.__layout.drawerStartGap, $drawerLabelGap$$ = $closeHeight_countColor_options$$208$$.__layout.drawerLabelGap, $categoryText_drawerCountHGap_labelOffset$$ = $closeHeight_countColor_options$$208$$.__layout.drawerCountHorizontalGap, $countIndicatorHeight_drawerCountVGap$$ = 
  $closeHeight_countColor_options$$208$$.__layout.drawerCountVerticalGap, $drawerHeaderHeight$$ = $closeHeight_countColor_options$$208$$.__layout.drawerHeaderHeight, $countIndicatorWidth_indicatorGap$$ = $closeHeight_countColor_options$$208$$.__layout.nodeIndicatorGap, $countIndicatorSectionWidth_swatchSize$$ = $closeHeight_countColor_options$$208$$.__layout.nodeSwatchSize, $rtl$$22$$ = (0,D.$DvtAgent$isRightToLeft$$)($categoryLabel_nbox$$31$$.$getCtx$()), $categoryNode$$5$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$($categoryLabel_nbox$$31$$, 
  $data$$83_drawerBounds$$1$$[D.$DvtNBoxConstants$$.ID]), $countLabel$$1_nodeCount$$6$$ = $categoryNode$$5$$.nodeIndices.length;
  $data$$83_drawerBounds$$1$$ = $data$$83_drawerBounds$$1$$.__drawerBounds;
  var $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$33_headerPath$$ = D.$DvtNBoxStyleUtils$$.$getDrawerBorderRadius$($categoryLabel_nbox$$31$$), $borderColor$$52_closeWidth_headerBackground$$ = D.$DvtNBoxStyleUtils$$.$getDrawerBorderColor$($categoryLabel_nbox$$31$$), $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$33_headerPath$$ = D.$DvtPathUtils$$.$roundedRectangle$(0, 0, $data$$83_drawerBounds$$1$$.$w$, $drawerHeaderHeight$$, $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$33_headerPath$$, 
  $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$33_headerPath$$, 0, 0), $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$33_headerPath$$ = new D.$DvtPath$$($categoryLabel_nbox$$31$$.$getCtx$(), $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$33_headerPath$$);
  $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$33_headerPath$$.$setSolidStroke$($borderColor$$52_closeWidth_headerBackground$$);
  $borderColor$$52_closeWidth_headerBackground$$ = D.$DvtNBoxStyleUtils$$.$getDrawerHeaderBackground$($categoryLabel_nbox$$31$$);
  D.$DvtNBoxRenderer$$.$setFill$($borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$33_headerPath$$, $borderColor$$52_closeWidth_headerBackground$$);
  $drawerContainer$$1$$.$addChild$($borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$33_headerPath$$);
  var $closeEna_closeEnaImg_indicatorIconColor$$1$$ = $closeHeight_countColor_options$$208$$._resources.close_ena, $borderColor$$52_closeWidth_headerBackground$$ = $closeEna_closeEnaImg_indicatorIconColor$$1$$.width;
  if($data$$83_drawerBounds$$1$$.$w$ > $borderColor$$52_closeWidth_headerBackground$$) {
    var $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$33_headerPath$$ = $closeHeight_countColor_options$$208$$._resources.close_ovr, $closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$ = $closeHeight_countColor_options$$208$$._resources.close_dwn, $closeHeight_countColor_options$$208$$ = $closeEna_closeEnaImg_indicatorIconColor$$1$$.height, $closeEna_closeEnaImg_indicatorIconColor$$1$$ = new D.$DvtImage$$($categoryLabel_nbox$$31$$.$getCtx$(), $closeEna_closeEnaImg_indicatorIconColor$$1$$.src, 
    0, 0, $closeEna_closeEnaImg_indicatorIconColor$$1$$.width, $closeEna_closeEnaImg_indicatorIconColor$$1$$.height), $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$33_headerPath$$ = new D.$DvtImage$$($categoryLabel_nbox$$31$$.$getCtx$(), $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$33_headerPath$$.src, 0, 0, $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$33_headerPath$$.width, $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$33_headerPath$$.height), 
    $closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$ = new D.$DvtImage$$($categoryLabel_nbox$$31$$.$getCtx$(), $closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$.src, 0, 0, $closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$.width, $closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$.height), $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$33_headerPath$$ = new D.$DvtButton$$($categoryLabel_nbox$$31$$.$getCtx$(), $closeEna_closeEnaImg_indicatorIconColor$$1$$, 
    $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$33_headerPath$$, $closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$, D.$JSCompiler_alias_NULL$$, D.$JSCompiler_alias_NULL$$, $drawerContainer$$1$$.$closeDrawer$, $drawerContainer$$1$$), $closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$ = $rtl$$22$$ ? window.Math.min(($data$$83_drawerBounds$$1$$.$w$ - $borderColor$$52_closeWidth_headerBackground$$) / 2, $drawerButtonGap$$) : window.Math.max(($data$$83_drawerBounds$$1$$.$w$ - 
    $borderColor$$52_closeWidth_headerBackground$$) / 2, $data$$83_drawerBounds$$1$$.$w$ - $drawerButtonGap$$ - $borderColor$$52_closeWidth_headerBackground$$);
    (0,D.$JSCompiler_StaticMethods_setTranslate$$)($borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$33_headerPath$$, $closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$, $drawerHeaderHeight$$ / 2 - $closeHeight_countColor_options$$208$$ / 2);
    $drawerContainer$$1$$.$addChild$($borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$33_headerPath$$)
  }
  var $closeHeight_countColor_options$$208$$ = D.$DvtNBoxStyleUtils$$.$getCategoryNodeColor$($categoryLabel_nbox$$31$$, $categoryNode$$5$$), $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$33_headerPath$$ = D.$DvtColorUtils$$.$getContrastingTextColor$($closeHeight_countColor_options$$208$$), $closeEna_closeEnaImg_indicatorIconColor$$1$$ = ($closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$ = D.$DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$($categoryLabel_nbox$$31$$, 
  $categoryNode$$5$$)) ? D.$DvtColorUtils$$.$getContrastingTextColor$($closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$) : $borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$33_headerPath$$, $indicatorIcon$$3$$ = D.$DvtNBoxStyleUtils$$.$getStyledCategoryIndicatorIcon$($categoryLabel_nbox$$31$$, $categoryNode$$5$$), $countLabelSectionWidth_indicatorIconWidth$$1$$ = $countIndicatorSectionWidth_swatchSize$$, $indicatorMarker$$1_scale$$59$$ = 1;
  if($indicatorIcon$$3$$) {
    var $halign$$9_indicatorIconW$$ = $indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$WIDTH$], $indicatorMarker$$1_scale$$59$$ = $countIndicatorSectionWidth_swatchSize$$ / $indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$HEIGHT$], $countLabelSectionWidth_indicatorIconWidth$$1$$ = $indicatorMarker$$1_scale$$59$$ * $halign$$9_indicatorIconW$$, $closeEna_closeEnaImg_indicatorIconColor$$1$$ = $indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$COLOR$] ? $indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$COLOR$] : $closeEna_closeEnaImg_indicatorIconColor$$1$$
  }
  var $countBorderRadius_indicatorSection_indicatorSectionPath$$ = D.$DvtNBoxStyleUtils$$.$getDrawerCountBorderRadius$($categoryLabel_nbox$$31$$), $halign$$9_indicatorIconW$$ = $rtl$$22$$ ? "right" : "left", $countLabel$$1_nodeCount$$6$$ = D.$DvtNBoxRenderer$$.$createText$($categoryLabel_nbox$$31$$.$getCtx$(), "" + $countLabel$$1_nodeCount$$6$$, D.$DvtNBoxStyleUtils$$.$getDrawerCountLabelStyle$($categoryLabel_nbox$$31$$), $halign$$9_indicatorIconW$$, "middle"), $countLabelDims_indicatorX$$1$$ = $countLabel$$1_nodeCount$$6$$.$measureDimensions$(), 
  $countIndicatorHeight_drawerCountVGap$$ = $countLabelDims_indicatorX$$1$$.$h$ + 2 * $countIndicatorHeight_drawerCountVGap$$, $countIndicatorSectionWidth_swatchSize$$ = $indicatorIcon$$3$$ ? $countLabelSectionWidth_indicatorIconWidth$$1$$ + 2 * $countIndicatorWidth_indicatorGap$$ : $closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$ ? $countIndicatorSectionWidth_swatchSize$$ : 0, $countLabelSectionWidth_indicatorIconWidth$$1$$ = $countLabelDims_indicatorX$$1$$.$w$ + 2 * $categoryText_drawerCountHGap_labelOffset$$, 
  $countIndicatorWidth_indicatorGap$$ = $countIndicatorSectionWidth_swatchSize$$ + $countLabelSectionWidth_indicatorIconWidth$$1$$, $countIndicatorPath_countIndicatorShape$$;
  $data$$83_drawerBounds$$1$$.$w$ - $borderColor$$52_closeWidth_headerBackground$$ - 2 * $drawerButtonGap$$ > $countIndicatorWidth_indicatorGap$$ && ($countIndicatorPath_countIndicatorShape$$ = D.$DvtPathUtils$$.$roundedRectangle$(0, 0, $countIndicatorWidth_indicatorGap$$, $countIndicatorHeight_drawerCountVGap$$, $countBorderRadius_indicatorSection_indicatorSectionPath$$, $countBorderRadius_indicatorSection_indicatorSectionPath$$, $countBorderRadius_indicatorSection_indicatorSectionPath$$, $countBorderRadius_indicatorSection_indicatorSectionPath$$), 
  $countIndicatorPath_countIndicatorShape$$ = new D.$DvtPath$$($categoryLabel_nbox$$31$$.$getCtx$(), $countIndicatorPath_countIndicatorShape$$), $countIndicatorPath_countIndicatorShape$$.$setSolidFill$($closeHeight_countColor_options$$208$$), $drawerContainer$$1$$.$addChild$($countIndicatorPath_countIndicatorShape$$), $countLabelDims_indicatorX$$1$$ = $rtl$$22$$ ? $countLabelSectionWidth_indicatorIconWidth$$1$$ : 0, 0 < $countIndicatorSectionWidth_swatchSize$$ && ($closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$ && 
  ($countBorderRadius_indicatorSection_indicatorSectionPath$$ = D.$DvtPathUtils$$.$roundedRectangle$($countLabelDims_indicatorX$$1$$, 0, $countIndicatorSectionWidth_swatchSize$$, $countIndicatorHeight_drawerCountVGap$$, $rtl$$22$$ ? 0 : $countBorderRadius_indicatorSection_indicatorSectionPath$$, $rtl$$22$$ ? $countBorderRadius_indicatorSection_indicatorSectionPath$$ : 0, $rtl$$22$$ ? $countBorderRadius_indicatorSection_indicatorSectionPath$$ : 0, $rtl$$22$$ ? 0 : $countBorderRadius_indicatorSection_indicatorSectionPath$$), 
  $countBorderRadius_indicatorSection_indicatorSectionPath$$ = new D.$DvtPath$$($categoryLabel_nbox$$31$$.$getCtx$(), $countBorderRadius_indicatorSection_indicatorSectionPath$$), $countBorderRadius_indicatorSection_indicatorSectionPath$$.$setSolidFill$($closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$), $countIndicatorPath_countIndicatorShape$$.$addChild$($countBorderRadius_indicatorSection_indicatorSectionPath$$)), $indicatorIcon$$3$$ && ($indicatorMarker$$1_scale$$59$$ = new D.$DvtSimpleMarker$$($categoryLabel_nbox$$31$$.$getCtx$(), 
  $indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$SHAPE$], "alta", $countLabelDims_indicatorX$$1$$ + $countIndicatorSectionWidth_swatchSize$$ / 2, $countIndicatorHeight_drawerCountVGap$$ / 2, $indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$WIDTH$] * $indicatorMarker$$1_scale$$59$$, $indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$HEIGHT$] * $indicatorMarker$$1_scale$$59$$), $indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$PATTERN$] && "none" != $indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$PATTERN$] ? $indicatorMarker$$1_scale$$59$$.$setFill$(new D.$DvtPatternFill$$($indicatorIcon$$3$$[D.$DvtNBoxConstants$$.$PATTERN$], 
  $closeEna_closeEnaImg_indicatorIconColor$$1$$, $closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$ ? $closeButtonX_closeDwn_closeDwnImg_indicatorColor$$1$$ : $closeHeight_countColor_options$$208$$)) : $indicatorMarker$$1_scale$$59$$.$setSolidFill$($closeEna_closeEnaImg_indicatorIconColor$$1$$), $countIndicatorPath_countIndicatorShape$$.$addChild$($indicatorMarker$$1_scale$$59$$))), $countIndicatorPath_countIndicatorShape$$.$addChild$($countLabel$$1_nodeCount$$6$$), $countLabel$$1_nodeCount$$6$$.$setSolidFill$($borderRadius$$7_closeButton$$2_closeOvr_closeOvrImg_contrastColor$$2_header$$33_headerPath$$), 
  D.$DvtNBoxRenderer$$.$positionText$($countLabel$$1_nodeCount$$6$$, $rtl$$22$$ ? $countLabelSectionWidth_indicatorIconWidth$$1$$ - $categoryText_drawerCountHGap_labelOffset$$ : $countIndicatorSectionWidth_swatchSize$$ + $categoryText_drawerCountHGap_labelOffset$$, $countIndicatorHeight_drawerCountVGap$$ / 2));
  $categoryText_drawerCountHGap_labelOffset$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($categoryLabel_nbox$$31$$, $categoryNode$$5$$).$getLabel$();
  $categoryLabel_nbox$$31$$ = D.$DvtNBoxRenderer$$.$createText$($categoryLabel_nbox$$31$$.$getCtx$(), $categoryText_drawerCountHGap_labelOffset$$, D.$DvtNBoxStyleUtils$$.$getDrawerLabelStyle$($categoryLabel_nbox$$31$$), $halign$$9_indicatorIconW$$, "middle");
  $categoryText_drawerCountHGap_labelOffset$$ = 0;
  D.$DvtTextUtils$$.$fitText$($categoryLabel_nbox$$31$$, $data$$83_drawerBounds$$1$$.$w$ - $drawerStartGap$$ - $drawerLabelGap$$ - $countIndicatorWidth_indicatorGap$$ - $drawerButtonGap$$ - $borderColor$$52_closeWidth_headerBackground$$, $drawerHeaderHeight$$, $drawerContainer$$1$$) && (D.$DvtNBoxRenderer$$.$positionText$($categoryLabel_nbox$$31$$, $rtl$$22$$ ? $data$$83_drawerBounds$$1$$.$w$ - $drawerStartGap$$ : $drawerStartGap$$, $drawerHeaderHeight$$ / 2), $categoryText_drawerCountHGap_labelOffset$$ = 
  $categoryLabel_nbox$$31$$.$measureDimensions$().$w$ + $drawerLabelGap$$);
  $countIndicatorPath_countIndicatorShape$$ && (0,D.$JSCompiler_StaticMethods_setTranslate$$)($countIndicatorPath_countIndicatorShape$$, $rtl$$22$$ ? $data$$83_drawerBounds$$1$$.$w$ - $drawerStartGap$$ - $countIndicatorWidth_indicatorGap$$ - $categoryText_drawerCountHGap_labelOffset$$ : $drawerStartGap$$ + $categoryText_drawerCountHGap_labelOffset$$, ($drawerHeaderHeight$$ - $countIndicatorHeight_drawerCountVGap$$) / 2)
};
D.$DvtNBoxDrawerRenderer$$.$_renderBody$ = function $$DvtNBoxDrawerRenderer$$$$_renderBody$$($nbox$$32$$, $data$$84$$, $drawerContainer$$2_nodeLayout$$1$$) {
  var $options$$209_rtl$$23$$ = $nbox$$32$$.$getOptions$(), $gridGap$$ = $options$$209_rtl$$23$$.__layout.gridGap, $drawerHeaderHeight$$1_hGridSize$$ = $options$$209_rtl$$23$$.__layout.drawerHeaderHeight, $drawerBounds$$2_scrollContainer$$1_vGridSize$$ = $data$$84$$.__drawerBounds, $options$$209_rtl$$23$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$32$$.$getCtx$()), $alphaFade$$1_body$$3_bodyPath_borderRadius$$8$$ = D.$DvtNBoxStyleUtils$$.$getDrawerBorderRadius$($nbox$$32$$), $borderColor$$53_gridPos$$ = 
  D.$DvtNBoxStyleUtils$$.$getDrawerBorderColor$($nbox$$32$$), $alphaFade$$1_body$$3_bodyPath_borderRadius$$8$$ = D.$DvtPathUtils$$.$roundedRectangle$(0, $drawerHeaderHeight$$1_hGridSize$$, $drawerBounds$$2_scrollContainer$$1_vGridSize$$.$w$, $drawerBounds$$2_scrollContainer$$1_vGridSize$$.$h$ - $drawerHeaderHeight$$1_hGridSize$$, 0, 0, $alphaFade$$1_body$$3_bodyPath_borderRadius$$8$$, $alphaFade$$1_body$$3_bodyPath_borderRadius$$8$$), $alphaFade$$1_body$$3_bodyPath_borderRadius$$8$$ = new D.$DvtPath$$($nbox$$32$$.$getCtx$(), 
  $alphaFade$$1_body$$3_bodyPath_borderRadius$$8$$);
  D.$DvtNBoxRenderer$$.$setFill$($alphaFade$$1_body$$3_bodyPath_borderRadius$$8$$, D.$DvtNBoxStyleUtils$$.$getDrawerBackground$($nbox$$32$$));
  $alphaFade$$1_body$$3_bodyPath_borderRadius$$8$$.$setSolidStroke$($borderColor$$53_gridPos$$);
  $drawerContainer$$2_nodeLayout$$1$$.$addChild$($alphaFade$$1_body$$3_bodyPath_borderRadius$$8$$);
  D.$DvtNBoxDataUtils$$.$setDisplayable$($nbox$$32$$, $data$$84$$, $alphaFade$$1_body$$3_bodyPath_borderRadius$$8$$, "background");
  $data$$84$$.__childArea = new D.$DvtRectangle$$($gridGap$$, $drawerHeaderHeight$$1_hGridSize$$ + $gridGap$$, window.Math.max($drawerBounds$$2_scrollContainer$$1_vGridSize$$.$w$ - 2 * $gridGap$$, 0), window.Math.max($drawerBounds$$2_scrollContainer$$1_vGridSize$$.$h$ - $drawerHeaderHeight$$1_hGridSize$$ - 2 * $gridGap$$, 0));
  $drawerBounds$$2_scrollContainer$$1_vGridSize$$ = new D.$DvtSimpleScrollableContainer$$($nbox$$32$$.$getCtx$(), $drawerBounds$$2_scrollContainer$$1_vGridSize$$.$w$, $drawerBounds$$2_scrollContainer$$1_vGridSize$$.$h$ - $drawerHeaderHeight$$1_hGridSize$$);
  (0,D.$JSCompiler_StaticMethods_setTranslate$$)($drawerBounds$$2_scrollContainer$$1_vGridSize$$, 0, $drawerHeaderHeight$$1_hGridSize$$);
  $drawerContainer$$2_nodeLayout$$1$$.$addChild$($drawerBounds$$2_scrollContainer$$1_vGridSize$$);
  $drawerContainer$$2_nodeLayout$$1$$.$setChildContainer$($drawerBounds$$2_scrollContainer$$1_vGridSize$$);
  $drawerContainer$$2_nodeLayout$$1$$ = D.$DvtNBoxNodeRenderer$$.$calculateNodeDrawerLayout$($nbox$$32$$, $data$$84$$);
  var $drawerHeaderHeight$$1_hGridSize$$ = $drawerContainer$$2_nodeLayout$$1$$.indicatorSectionWidth + $drawerContainer$$2_nodeLayout$$1$$.iconSectionWidth + $drawerContainer$$2_nodeLayout$$1$$.labelSectionWidth + $gridGap$$, $drawerBounds$$2_scrollContainer$$1_vGridSize$$ = $drawerContainer$$2_nodeLayout$$1$$.nodeHeight + $gridGap$$, $borderColor$$53_gridPos$$ = 0, $i$$729_renderPasses$$ = ["normal"], $alphaFade$$1_body$$3_bodyPath_borderRadius$$8$$ = D.$DvtNBoxStyleUtils$$.$getFadedNodeAlpha$($nbox$$32$$), 
  $container$$152_highlightedItems$$2$$ = D.$DvtNBoxDataUtils$$.$getHighlightedItems$($nbox$$32$$), $highlightedMap$$1$$ = {};
  if($container$$152_highlightedItems$$2$$) {
    for($i$$729_renderPasses$$ = 0;$i$$729_renderPasses$$ < $container$$152_highlightedItems$$2$$.length;$i$$729_renderPasses$$++) {
      $highlightedMap$$1$$[$container$$152_highlightedItems$$2$$[$i$$729_renderPasses$$][D.$DvtNBoxConstants$$.ID]] = D.$JSCompiler_alias_TRUE$$
    }
    $i$$729_renderPasses$$ = ["highlighted", "unhighlighted"]
  }
  for(var $container$$152_highlightedItems$$2$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$32$$, $data$$84$$).$getChildContainer$(), $categoryNode$$6$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$($nbox$$32$$, $data$$84$$[D.$DvtNBoxConstants$$.ID]), $nodeCount$$7$$ = $categoryNode$$6$$.nodeIndices.length, $p$$27$$ = 0;$p$$27$$ < $i$$729_renderPasses$$.length;$p$$27$$++) {
    for(var $n$$19$$ = 0;$n$$19$$ < $nodeCount$$7$$;$n$$19$$++) {
      var $node$$258$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$32$$, $categoryNode$$6$$.nodeIndices[$n$$19$$]);
      if(("normal" == $i$$729_renderPasses$$[$p$$27$$] || "highlighted" == $i$$729_renderPasses$$[$p$$27$$] && $highlightedMap$$1$$[$node$$258$$[D.$DvtNBoxConstants$$.ID]] || "unhighlighted" == $i$$729_renderPasses$$[$p$$27$$] && !$highlightedMap$$1$$[$node$$258$$[D.$DvtNBoxConstants$$.ID]]) && 0 != $drawerContainer$$2_nodeLayout$$1$$.drawerLayout[D.$DvtNBoxConstants$$.$COLUMNS$] && 0 != $drawerContainer$$2_nodeLayout$$1$$.drawerLayout[D.$DvtNBoxConstants$$.$ROWS$]) {
        var $nodeContainer$$4_prevNode$$ = D.$DvtNBoxNode$$.newInstance($nbox$$32$$, $node$$258$$), $gridXOrigin$$ = $data$$84$$.__childArea.x + ($data$$84$$.__childArea.$w$ - $drawerContainer$$2_nodeLayout$$1$$.drawerLayout[D.$DvtNBoxConstants$$.$COLUMNS$] * $drawerHeaderHeight$$1_hGridSize$$ + $gridGap$$) / 2, $gridYOrigin$$ = $gridGap$$, $gridColumn$$ = $borderColor$$53_gridPos$$ % $drawerContainer$$2_nodeLayout$$1$$.drawerLayout[D.$DvtNBoxConstants$$.$COLUMNS$];
        $options$$209_rtl$$23$$ && ($gridColumn$$ = $drawerContainer$$2_nodeLayout$$1$$.drawerLayout[D.$DvtNBoxConstants$$.$COLUMNS$] - $gridColumn$$ - 1);
        (0,D.$JSCompiler_StaticMethods_setTranslate$$)($nodeContainer$$4_prevNode$$, $gridXOrigin$$ + $drawerHeaderHeight$$1_hGridSize$$ * $gridColumn$$, $gridYOrigin$$ + $drawerBounds$$2_scrollContainer$$1_vGridSize$$ * window.Math.floor($borderColor$$53_gridPos$$ / $drawerContainer$$2_nodeLayout$$1$$.drawerLayout[D.$DvtNBoxConstants$$.$COLUMNS$]));
        $borderColor$$53_gridPos$$++;
        $nodeContainer$$4_prevNode$$.$render$($container$$152_highlightedItems$$2$$.$_container$, $drawerContainer$$2_nodeLayout$$1$$);
        "unhighlighted" == $i$$729_renderPasses$$[$p$$27$$] && $nodeContainer$$4_prevNode$$.$setAlpha$($alphaFade$$1_body$$3_bodyPath_borderRadius$$8$$);
        if($nodeContainer$$4_prevNode$$ = 0 < $n$$19$$ ? D.$DvtNBoxDataUtils$$.$getNode$($nbox$$32$$, $categoryNode$$6$$.nodeIndices[$n$$19$$ - 1]) : D.$JSCompiler_alias_NULL$$) {
          $node$$258$$.__prev = $nodeContainer$$4_prevNode$$, $nodeContainer$$4_prevNode$$.__next = $node$$258$$
        }
      }
    }
  }
  (0,D.$JSCompiler_StaticMethods_prepareContentPane$$)($container$$152_highlightedItems$$2$$)
};
D.$DvtNBoxDrawerRenderer$$.$getDrawerBounds$ = function $$DvtNBoxDrawerRenderer$$$$getDrawerBounds$$($cellDims$$1_nbox$$33$$, $cellIndex$$7_data$$85_r$$58$$, $availSpace$$101$$) {
  var $cellLayout$$7_options$$210$$ = $cellDims$$1_nbox$$33$$.$getOptions$(), $gridGap$$1$$ = $cellLayout$$7_options$$210$$.__layout.gridGap, $cellLayout$$7_options$$210$$ = $cellLayout$$7_options$$210$$.__layout.__cellLayout, $c$$39_cell$$42_drawerBounds$$3$$ = new D.$DvtRectangle$$($availSpace$$101$$.x + $gridGap$$1$$ / 2, $availSpace$$101$$.y + $gridGap$$1$$ / 2, window.Math.max($availSpace$$101$$.$w$ - $gridGap$$1$$, 0), window.Math.max($availSpace$$101$$.$h$ - $gridGap$$1$$, 0));
  D.$DvtNBoxDataUtils$$.$getGroupBehavior$($cellDims$$1_nbox$$33$$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($cellIndex$$7_data$$85_r$$58$$ = (0,window.parseInt)($cellIndex$$7_data$$85_r$$58$$.id.substring(0, $cellIndex$$7_data$$85_r$$58$$[D.$DvtNBoxConstants$$.ID].indexOf(":"))), D.$DvtNBoxDataUtils$$.$isCellMaximized$($cellDims$$1_nbox$$33$$, $cellIndex$$7_data$$85_r$$58$$) && ($c$$39_cell$$42_drawerBounds$$3$$ = D.$DvtNBoxDataUtils$$.$getCell$($cellDims$$1_nbox$$33$$, $cellIndex$$7_data$$85_r$$58$$), 
  $cellIndex$$7_data$$85_r$$58$$ = D.$DvtNBoxDataUtils$$.$getRowIndex$($cellDims$$1_nbox$$33$$, $c$$39_cell$$42_drawerBounds$$3$$[D.$DvtNBoxConstants$$.$ROW$]), $c$$39_cell$$42_drawerBounds$$3$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($cellDims$$1_nbox$$33$$, $c$$39_cell$$42_drawerBounds$$3$$[D.$DvtNBoxConstants$$.$COLUMN$]), $cellDims$$1_nbox$$33$$ = D.$DvtNBoxCellRenderer$$.$getCellDimensions$($cellDims$$1_nbox$$33$$, $cellIndex$$7_data$$85_r$$58$$, $c$$39_cell$$42_drawerBounds$$3$$, $cellLayout$$7_options$$210$$, 
  $availSpace$$101$$), $c$$39_cell$$42_drawerBounds$$3$$ = new D.$DvtRectangle$$($cellDims$$1_nbox$$33$$.x + $gridGap$$1$$ / 2, $cellDims$$1_nbox$$33$$.y + $gridGap$$1$$ / 2 + $cellLayout$$7_options$$210$$.headerSize, window.Math.max($cellDims$$1_nbox$$33$$.$w$ - $gridGap$$1$$, 0), window.Math.max($cellDims$$1_nbox$$33$$.$h$ - $cellLayout$$7_options$$210$$.headerSize - $gridGap$$1$$, 0))));
  return $c$$39_cell$$42_drawerBounds$$3$$
};
D.$DvtNBoxDrawerRenderer$$.$animateUpdate$ = function $$DvtNBoxDrawerRenderer$$$$animateUpdate$$() {
  window.console.log("********************* DvtNBoxDrawerRenderer.animateUpdate *********************")
};
D.$DvtNBoxDrawerRenderer$$.$animateDelete$ = function $$DvtNBoxDrawerRenderer$$$$animateDelete$$($animationHandler$$28$$, $oldDrawer$$2$$) {
  var $fadePlayable$$1_newNBox$$8$$ = $animationHandler$$28$$.$_newNBox$, $drawerBounds$$4_scaleY$$5$$ = $oldDrawer$$2$$.getData().__drawerBounds, $finalMatrix_id$$236_sideLength$$ = $oldDrawer$$2$$.getData()[D.$DvtNBoxConstants$$.ID], $centerMatrix_group$$29_groupNode$$12$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$($fadePlayable$$1_newNBox$$8$$, $finalMatrix_id$$236_sideLength$$);
  if($centerMatrix_group$$29_groupNode$$12$$) {
    var $finalMatrix_id$$236_sideLength$$ = D.$DvtNBoxCategoryNodeRenderer$$.$getSideLength$($centerMatrix_group$$29_groupNode$$12$$), $playable$$43_scaleX$$5$$ = $finalMatrix_id$$236_sideLength$$ / $drawerBounds$$4_scaleY$$5$$.$w$, $drawerBounds$$4_scaleY$$5$$ = $finalMatrix_id$$236_sideLength$$ / $drawerBounds$$4_scaleY$$5$$.$h$;
    if($centerMatrix_group$$29_groupNode$$12$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($fadePlayable$$1_newNBox$$8$$, $centerMatrix_group$$29_groupNode$$12$$)) {
      $centerMatrix_group$$29_groupNode$$12$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($centerMatrix_group$$29_groupNode$$12$$), $finalMatrix_id$$236_sideLength$$ = new D.$DvtMatrix$$($playable$$43_scaleX$$5$$, 0, 0, $drawerBounds$$4_scaleY$$5$$, $centerMatrix_group$$29_groupNode$$12$$.$_tx$ - $finalMatrix_id$$236_sideLength$$ / 2, $centerMatrix_group$$29_groupNode$$12$$.$_ty$ - $finalMatrix_id$$236_sideLength$$ / 2), $playable$$43_scaleX$$5$$ = new D.$DvtCustomAnimation$$($fadePlayable$$1_newNBox$$8$$.$getCtx$(), 
      $oldDrawer$$2$$, $animationHandler$$28$$.$getAnimationDuration$()), (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$43_scaleX$$5$$.$_animator$, "typeMatrix", $oldDrawer$$2$$, $oldDrawer$$2$$.$getMatrix$, $oldDrawer$$2$$.$setMatrix$, $finalMatrix_id$$236_sideLength$$), $animationHandler$$28$$.add($playable$$43_scaleX$$5$$, 1)
    }
  }
  $fadePlayable$$1_newNBox$$8$$.$_deleteContainer$.$addChild$($oldDrawer$$2$$);
  $fadePlayable$$1_newNBox$$8$$ = new D.$DvtAnimFadeOut$$($fadePlayable$$1_newNBox$$8$$.$getCtx$(), $oldDrawer$$2$$, $animationHandler$$28$$.$getAnimationDuration$());
  $animationHandler$$28$$.add($fadePlayable$$1_newNBox$$8$$, 1)
};
D.$DvtNBoxDrawerRenderer$$.$animateInsert$ = function $$DvtNBoxDrawerRenderer$$$$animateInsert$$($animationHandler$$29$$, $newDrawer$$1$$) {
  var $fadePlayable$$2_newNBox$$9$$ = $animationHandler$$29$$.$_newNBox$, $drawerBounds$$5_scaleY$$6$$ = $newDrawer$$1$$.getData().__drawerBounds, $id$$237_initMatrix_sideLength$$1$$ = $newDrawer$$1$$.getData()[D.$DvtNBoxConstants$$.ID], $centerMatrix$$1_group$$30_groupNode$$13$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$($fadePlayable$$2_newNBox$$9$$, $id$$237_initMatrix_sideLength$$1$$);
  if($centerMatrix$$1_group$$30_groupNode$$13$$) {
    var $id$$237_initMatrix_sideLength$$1$$ = D.$DvtNBoxCategoryNodeRenderer$$.$getSideLength$($centerMatrix$$1_group$$30_groupNode$$13$$), $playable$$44_scaleX$$6$$ = $id$$237_initMatrix_sideLength$$1$$ / $drawerBounds$$5_scaleY$$6$$.$w$, $drawerBounds$$5_scaleY$$6$$ = $id$$237_initMatrix_sideLength$$1$$ / $drawerBounds$$5_scaleY$$6$$.$h$;
    if($centerMatrix$$1_group$$30_groupNode$$13$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($fadePlayable$$2_newNBox$$9$$, $centerMatrix$$1_group$$30_groupNode$$13$$)) {
      $centerMatrix$$1_group$$30_groupNode$$13$$ = D.$DvtNBoxRenderer$$.$getGlobalMatrix$($centerMatrix$$1_group$$30_groupNode$$13$$);
      $id$$237_initMatrix_sideLength$$1$$ = new D.$DvtMatrix$$($playable$$44_scaleX$$6$$, 0, 0, $drawerBounds$$5_scaleY$$6$$, $centerMatrix$$1_group$$30_groupNode$$13$$.$_tx$ - $id$$237_initMatrix_sideLength$$1$$ / 2, $centerMatrix$$1_group$$30_groupNode$$13$$.$_ty$ - $id$$237_initMatrix_sideLength$$1$$ / 2);
      $playable$$44_scaleX$$6$$ = new D.$DvtCustomAnimation$$($fadePlayable$$2_newNBox$$9$$.$getCtx$(), $newDrawer$$1$$, $animationHandler$$29$$.$getAnimationDuration$());
      (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$44_scaleX$$6$$.$_animator$, "typeMatrix", $newDrawer$$1$$, $newDrawer$$1$$.$getMatrix$, $newDrawer$$1$$.$setMatrix$, $newDrawer$$1$$.$getMatrix$());
      var $parent$$77$$ = $newDrawer$$1$$.getParent();
      $fadePlayable$$2_newNBox$$9$$.$addChild$($newDrawer$$1$$);
      (0,D.$DvtPlayable$appendOnEnd$$)($playable$$44_scaleX$$6$$, function() {
        $parent$$77$$.$addChild$($newDrawer$$1$$)
      });
      $newDrawer$$1$$.$setMatrix$($id$$237_initMatrix_sideLength$$1$$);
      $animationHandler$$29$$.add($playable$$44_scaleX$$6$$, 1)
    }
  }
  $newDrawer$$1$$.$setAlpha$(0);
  $fadePlayable$$2_newNBox$$9$$ = new D.$DvtAnimFadeIn$$($fadePlayable$$2_newNBox$$9$$.$getCtx$(), $newDrawer$$1$$, $animationHandler$$29$$.$getAnimationDuration$());
  $animationHandler$$29$$.add($fadePlayable$$2_newNBox$$9$$, 1)
};
D.$DvtNBoxDrawerRenderer$$.$_addAccessibilityAttributes$ = function $$DvtNBoxDrawerRenderer$$$$_addAccessibilityAttributes$$($nbox$$34_object$$14$$, $data$$86$$, $desc$$24_drawerContainer$$3$$) {
  $nbox$$34_object$$14$$ = (0,D.$DvtAgent$isTouchDevice$$)() ? D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$34_object$$14$$, $data$$86$$, "background") : $desc$$24_drawerContainer$$3$$;
  $nbox$$34_object$$14$$.$setAriaRole$("img");
  (0,D.$DvtAgent$deferAriaCreation$$)() || ($desc$$24_drawerContainer$$3$$ = $desc$$24_drawerContainer$$3$$.$getAriaLabel$()) && $nbox$$34_object$$14$$.$setAriaProperty$(D.$DvtNBoxConstants$$.$LABEL$, $desc$$24_drawerContainer$$3$$)
};
D.$DvtNBoxDataUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxDataUtils$$, D.$DvtObj$$, "DvtNBoxDataUtils");
D.$DvtNBoxDataUtils$$.$processDataObject$ = function $$DvtNBoxDataUtils$$$$processDataObject$$($legend$$29_nbox$$62$$) {
  var $options$$219$$ = $legend$$29_nbox$$62$$.$getOptions$(), $cells$$2_columnMap_hiddenCategories$$11$$ = $options$$219$$[D.$DvtNBoxConstants$$.$CELLS$], $cellMap_nodeMap$$6_section$$10$$ = {};
  if($cells$$2_columnMap_hiddenCategories$$11$$) {
    for(var $i$$741_rowMap$$ = 0;$i$$741_rowMap$$ < $cells$$2_columnMap_hiddenCategories$$11$$.length;$i$$741_rowMap$$++) {
      var $cell$$47_newCells$$1_nodeObj$$ = $cells$$2_columnMap_hiddenCategories$$11$$[$i$$741_rowMap$$], $grouping$$4_j$$99_row$$50_rowObj$$ = $cell$$47_newCells$$1_nodeObj$$[D.$DvtNBoxConstants$$.$ROW$];
      $cellMap_nodeMap$$6_section$$10$$[$grouping$$4_j$$99_row$$50_rowObj$$] || ($cellMap_nodeMap$$6_section$$10$$[$grouping$$4_j$$99_row$$50_rowObj$$] = {});
      var $column$$10_columnObj_item$$45_n$$23$$ = $cell$$47_newCells$$1_nodeObj$$[D.$DvtNBoxConstants$$.$COLUMN$];
      $cellMap_nodeMap$$6_section$$10$$[$grouping$$4_j$$99_row$$50_rowObj$$][$column$$10_columnObj_item$$45_n$$23$$] = $cell$$47_newCells$$1_nodeObj$$
    }
  }
  for(var $cell$$47_newCells$$1_nodeObj$$ = [], $i$$741_rowMap$$ = {}, $cells$$2_columnMap_hiddenCategories$$11$$ = {}, $r$$63$$ = 0;$r$$63$$ < D.$DvtNBoxDataUtils$$.$getRowCount$($legend$$29_nbox$$62$$);$r$$63$$++) {
    $grouping$$4_j$$99_row$$50_rowObj$$ = D.$DvtNBoxDataUtils$$.$getRow$($legend$$29_nbox$$62$$, $r$$63$$), $i$$741_rowMap$$[$grouping$$4_j$$99_row$$50_rowObj$$[D.$DvtNBoxConstants$$.ID]] = $r$$63$$
  }
  $options$$219$$.__rowMap = $i$$741_rowMap$$;
  for(var $c$$44$$ = 0;$c$$44$$ < D.$DvtNBoxDataUtils$$.$getColumnCount$($legend$$29_nbox$$62$$);$c$$44$$++) {
    $column$$10_columnObj_item$$45_n$$23$$ = D.$DvtNBoxDataUtils$$.$getColumn$($legend$$29_nbox$$62$$, $c$$44$$), $cells$$2_columnMap_hiddenCategories$$11$$[$column$$10_columnObj_item$$45_n$$23$$[D.$DvtNBoxConstants$$.ID]] = $c$$44$$
  }
  $options$$219$$.__columnMap = $cells$$2_columnMap_hiddenCategories$$11$$;
  for($r$$63$$ = 0;$r$$63$$ < D.$DvtNBoxDataUtils$$.$getRowCount$($legend$$29_nbox$$62$$);$r$$63$$++) {
    $grouping$$4_j$$99_row$$50_rowObj$$ = D.$DvtNBoxDataUtils$$.$getRow$($legend$$29_nbox$$62$$, $r$$63$$);
    $grouping$$4_j$$99_row$$50_rowObj$$ = $grouping$$4_j$$99_row$$50_rowObj$$[D.$DvtNBoxConstants$$.ID];
    for($c$$44$$ = 0;$c$$44$$ < D.$DvtNBoxDataUtils$$.$getColumnCount$($legend$$29_nbox$$62$$);$c$$44$$++) {
      $column$$10_columnObj_item$$45_n$$23$$ = D.$DvtNBoxDataUtils$$.$getColumn$($legend$$29_nbox$$62$$, $c$$44$$), $column$$10_columnObj_item$$45_n$$23$$ = $column$$10_columnObj_item$$45_n$$23$$[D.$DvtNBoxConstants$$.ID], $cellMap_nodeMap$$6_section$$10$$[$grouping$$4_j$$99_row$$50_rowObj$$] && $cellMap_nodeMap$$6_section$$10$$[$grouping$$4_j$$99_row$$50_rowObj$$][$column$$10_columnObj_item$$45_n$$23$$] ? $cell$$47_newCells$$1_nodeObj$$.push($cellMap_nodeMap$$6_section$$10$$[$grouping$$4_j$$99_row$$50_rowObj$$][$column$$10_columnObj_item$$45_n$$23$$]) : 
      $cell$$47_newCells$$1_nodeObj$$.push({row:$grouping$$4_j$$99_row$$50_rowObj$$, column:$column$$10_columnObj_item$$45_n$$23$$})
    }
  }
  $options$$219$$[D.$DvtNBoxConstants$$.$CELLS$] = $cell$$47_newCells$$1_nodeObj$$;
  $cellMap_nodeMap$$6_section$$10$$ = {};
  $grouping$$4_j$$99_row$$50_rowObj$$ = D.$JSCompiler_alias_FALSE$$;
  for($column$$10_columnObj_item$$45_n$$23$$ = 0;$column$$10_columnObj_item$$45_n$$23$$ < D.$DvtNBoxDataUtils$$.$getNodeCount$($legend$$29_nbox$$62$$);$column$$10_columnObj_item$$45_n$$23$$++) {
    if($cell$$47_newCells$$1_nodeObj$$ = D.$DvtNBoxDataUtils$$.$getNode$($legend$$29_nbox$$62$$, $column$$10_columnObj_item$$45_n$$23$$), $cellMap_nodeMap$$6_section$$10$$[$cell$$47_newCells$$1_nodeObj$$[D.$DvtNBoxConstants$$.ID]] = $column$$10_columnObj_item$$45_n$$23$$, !$grouping$$4_j$$99_row$$50_rowObj$$ && ($cell$$47_newCells$$1_nodeObj$$[D.$DvtNBoxConstants$$.$GROUP_CATEGORY$] || $cell$$47_newCells$$1_nodeObj$$._groupCategories || $cell$$47_newCells$$1_nodeObj$$._groupLabels)) {
      $grouping$$4_j$$99_row$$50_rowObj$$ = D.$JSCompiler_alias_TRUE$$
    }
  }
  $options$$219$$.__nodeMap = $cellMap_nodeMap$$6_section$$10$$;
  $options$$219$$.__grouping = "none" != $options$$219$$[D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR$] ? $grouping$$4_j$$99_row$$50_rowObj$$ : D.$JSCompiler_alias_FALSE$$;
  D.$DvtNBoxDataUtils$$.$getGrouping$($legend$$29_nbox$$62$$) && D.$DvtNBoxDataUtils$$.$getGroupBehavior$($legend$$29_nbox$$62$$) == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_ACROSS_CELLS$ && ($options$$219$$[D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$] = D.$JSCompiler_alias_NULL$$, D.$DvtNBoxDataUtils$$.$fireSetPropertyEvent$($legend$$29_nbox$$62$$, D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$), $options$$219$$[D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$] = D.$JSCompiler_alias_NULL$$, D.$DvtNBoxDataUtils$$.$fireSetPropertyEvent$($legend$$29_nbox$$62$$, 
  D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$));
  if($options$$219$$[D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$] && (0,window.isNaN)($i$$741_rowMap$$[$options$$219$$[D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$]]) || $options$$219$$[D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$] && (0,window.isNaN)($cells$$2_columnMap_hiddenCategories$$11$$[$options$$219$$[D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$]])) {
    $options$$219$$[D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$] = D.$JSCompiler_alias_NULL$$, D.$DvtNBoxDataUtils$$.$fireSetPropertyEvent$($legend$$29_nbox$$62$$, D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$), $options$$219$$[D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$] = D.$JSCompiler_alias_NULL$$, D.$DvtNBoxDataUtils$$.$fireSetPropertyEvent$($legend$$29_nbox$$62$$, D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$)
  }
  if(($legend$$29_nbox$$62$$ = $options$$219$$[D.$DvtNBoxConstants$$.$LEGEND$]) && $legend$$29_nbox$$62$$.sections) {
    var $legendPrecedence$$ = "color iconFill iconShape iconPattern indicatorColor indicatorIconColor indicatorIconShape indicatorIconPattern".split(" ");
    $legend$$29_nbox$$62$$.sections = $legend$$29_nbox$$62$$.sections.slice(0);
    $legend$$29_nbox$$62$$.sections.sort(function($legend$$29_nbox$$62$$, $options$$219$$) {
      return D.$DvtArrayUtils$$.$getIndex$($legendPrecedence$$, $legend$$29_nbox$$62$$.type) - D.$DvtArrayUtils$$.$getIndex$($legendPrecedence$$, $options$$219$$.type)
    });
    $cells$$2_columnMap_hiddenCategories$$11$$ = $options$$219$$[D.$DvtNBoxConstants$$.$HIDDEN_CATEGORIES$];
    $legend$$29_nbox$$62$$.hideAndShowBehavior = "on";
    $legend$$29_nbox$$62$$.textStyle = $options$$219$$.styleDefaults.__legendDefaults.itemStyle;
    $legend$$29_nbox$$62$$.layout = {rowGap:2};
    $legend$$29_nbox$$62$$.symbolWidth = 16;
    $legend$$29_nbox$$62$$.symbolHeight = 16;
    for($i$$741_rowMap$$ = 0;$i$$741_rowMap$$ < $legend$$29_nbox$$62$$.sections.length;$i$$741_rowMap$$++) {
      $cellMap_nodeMap$$6_section$$10$$ = $legend$$29_nbox$$62$$.sections[$i$$741_rowMap$$];
      $cellMap_nodeMap$$6_section$$10$$.titleStyle = $options$$219$$.styleDefaults.__legendDefaults.sectionStyle;
      for($grouping$$4_j$$99_row$$50_rowObj$$ = 0;$grouping$$4_j$$99_row$$50_rowObj$$ < $cellMap_nodeMap$$6_section$$10$$.items.length;$grouping$$4_j$$99_row$$50_rowObj$$++) {
        $column$$10_columnObj_item$$45_n$$23$$ = $cellMap_nodeMap$$6_section$$10$$.items[$grouping$$4_j$$99_row$$50_rowObj$$], $column$$10_columnObj_item$$45_n$$23$$.categoryVisibility = -1 != D.$DvtArrayUtils$$.$getIndex$($cells$$2_columnMap_hiddenCategories$$11$$, $column$$10_columnObj_item$$45_n$$23$$.categories && 0 < $column$$10_columnObj_item$$45_n$$23$$.categories.length ? $column$$10_columnObj_item$$45_n$$23$$.categories[0] : $column$$10_columnObj_item$$45_n$$23$$.id) ? "hidden" : D.$JSCompiler_alias_NULL$$, 
        $column$$10_columnObj_item$$45_n$$23$$.indicatorColor && ($column$$10_columnObj_item$$45_n$$23$$.color = $column$$10_columnObj_item$$45_n$$23$$.indicatorColor), $column$$10_columnObj_item$$45_n$$23$$.color || ($column$$10_columnObj_item$$45_n$$23$$.color = $options$$219$$.styleDefaults.__legendDefaults.markerColor), $column$$10_columnObj_item$$45_n$$23$$.shape && ($column$$10_columnObj_item$$45_n$$23$$.markerShape = $column$$10_columnObj_item$$45_n$$23$$.shape)
      }
    }
  }
};
D.$DvtNBoxDataUtils$$.$getColumnCount$ = function $$DvtNBoxDataUtils$$$$getColumnCount$$($nbox$$63$$) {
  return $nbox$$63$$.$getOptions$()[D.$DvtNBoxConstants$$.$COLUMNS$].length
};
D.$DvtNBoxDataUtils$$.$getRowCount$ = function $$DvtNBoxDataUtils$$$$getRowCount$$($nbox$$64$$) {
  return $nbox$$64$$.$getOptions$()[D.$DvtNBoxConstants$$.$ROWS$].length
};
D.$DvtNBoxDataUtils$$.$getColumnLabel$ = function $$DvtNBoxDataUtils$$$$getColumnLabel$$($nbox$$65$$, $colValue$$) {
  var $col$$4$$ = D.$DvtNBoxDataUtils$$.$getColumn$($nbox$$65$$, D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$65$$, $colValue$$));
  return $col$$4$$ && $col$$4$$[D.$DvtNBoxConstants$$.$LABEL$] ? $col$$4$$[D.$DvtNBoxConstants$$.$LABEL$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxDataUtils$$.$getRowLabel$ = function $$DvtNBoxDataUtils$$$$getRowLabel$$($nbox$$66$$, $rowValue$$1$$) {
  var $row$$51$$ = D.$DvtNBoxDataUtils$$.$getRow$($nbox$$66$$, D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$66$$, $rowValue$$1$$));
  return $row$$51$$ && $row$$51$$[D.$DvtNBoxConstants$$.$LABEL$] ? $row$$51$$[D.$DvtNBoxConstants$$.$LABEL$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxDataUtils$$.$getCellByRowColumn$ = function $$DvtNBoxDataUtils$$$$getCellByRowColumn$$($nbox$$67$$, $cell$$48_rowValue$$2$$, $columnValue$$1$$) {
  return($cell$$48_rowValue$$2$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$67$$, D.$DvtNBoxDataUtils$$.$getCellIndexByRowColumn$($nbox$$67$$, $cell$$48_rowValue$$2$$, $columnValue$$1$$))) ? D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$67$$, $cell$$48_rowValue$$2$$) : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxDataUtils$$.$getCellIndexByRowColumn$ = function $$DvtNBoxDataUtils$$$$getCellIndexByRowColumn$$($nbox$$68$$, $rowValue$$3$$, $columnValue$$2$$) {
  return D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$68$$, $columnValue$$2$$) + D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$68$$, $rowValue$$3$$) * D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$68$$)
};
D.$DvtNBoxDataUtils$$.$getColumn$ = function $$DvtNBoxDataUtils$$$$getColumn$$($nbox$$69$$, $columnIndex$$6$$) {
  return $nbox$$69$$.$getOptions$()[D.$DvtNBoxConstants$$.$COLUMNS$][$columnIndex$$6$$]
};
D.$DvtNBoxDataUtils$$.$getRow$ = function $$DvtNBoxDataUtils$$$$getRow$$($nbox$$70$$, $rowIndex$$18$$) {
  return $nbox$$70$$.$getOptions$()[D.$DvtNBoxConstants$$.$ROWS$][$rowIndex$$18$$]
};
D.$DvtNBoxDataUtils$$.$getMaximizedRow$ = function $$DvtNBoxDataUtils$$$$getMaximizedRow$$($nbox$$71$$) {
  return $nbox$$71$$.$getOptions$()[D.$DvtNBoxConstants$$.$MAXIMIZED_ROW$]
};
D.$DvtNBoxDataUtils$$.$getMaximizedColumn$ = function $$DvtNBoxDataUtils$$$$getMaximizedColumn$$($nbox$$72$$) {
  return $nbox$$72$$.$getOptions$()[D.$DvtNBoxConstants$$.$MAXIMIZED_COLUMN$]
};
D.$DvtNBoxDataUtils$$.$getRowIndex$ = function $$DvtNBoxDataUtils$$$$getRowIndex$$($nbox$$73$$, $row$$52$$) {
  return $nbox$$73$$.$getOptions$().__rowMap[$row$$52$$]
};
D.$DvtNBoxDataUtils$$.$getColumnIndex$ = function $$DvtNBoxDataUtils$$$$getColumnIndex$$($nbox$$74$$, $column$$11$$) {
  return $nbox$$74$$.$getOptions$().__columnMap[$column$$11$$]
};
D.$DvtNBoxDataUtils$$.$getCell$ = function $$DvtNBoxDataUtils$$$$getCell$$($nbox$$75$$, $cellIndex$$11$$) {
  return $nbox$$75$$.$getOptions$()[D.$DvtNBoxConstants$$.$CELLS$][$cellIndex$$11$$]
};
D.$DvtNBoxDataUtils$$.$getNodeCount$ = function $$DvtNBoxDataUtils$$$$getNodeCount$$($nbox$$76$$) {
  return $nbox$$76$$.$getOptions$()[D.$DvtNBoxConstants$$.$NODES$] ? $nbox$$76$$.$getOptions$()[D.$DvtNBoxConstants$$.$NODES$].length : 0
};
D.$DvtNBoxDataUtils$$.$getNode$ = function $$DvtNBoxDataUtils$$$$getNode$$($nbox$$77$$, $nodeIndex$$11$$) {
  return $nbox$$77$$.$getOptions$()[D.$DvtNBoxConstants$$.$NODES$][$nodeIndex$$11$$]
};
D.$DvtNBoxDataUtils$$.$getNodeIndex$ = function $$DvtNBoxDataUtils$$$$getNodeIndex$$($nbox$$78$$, $id$$241$$) {
  return $nbox$$78$$.$getOptions$().__nodeMap[$id$$241$$]
};
D.$DvtNBoxDataUtils$$.$getCellIndex$ = function $$DvtNBoxDataUtils$$$$getCellIndex$$($nbox$$79$$, $node$$270$$) {
  var $nodeRowIndex$$ = D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$79$$, $node$$270$$[D.$DvtNBoxConstants$$.$ROW$]), $nodeColumnIndex$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$79$$, $node$$270$$[D.$DvtNBoxConstants$$.$COLUMN$]), $columnCount$$15$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$79$$);
  return $nodeColumnIndex$$ + $nodeRowIndex$$ * $columnCount$$15$$
};
D.$DvtNBoxDataUtils$$.$getIcon$ = function $$DvtNBoxDataUtils$$$$getIcon$$($nbox$$80$$, $node$$271$$) {
  return $node$$271$$[D.$DvtNBoxConstants$$.$ICON$] ? D.$DvtNBoxStyleUtils$$.$getStyledIcon$($nbox$$80$$, $node$$271$$[D.$DvtNBoxConstants$$.$ICON$]) : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxDataUtils$$.$getIndicatorIcon$ = function $$DvtNBoxDataUtils$$$$getIndicatorIcon$$($nbox$$81$$, $node$$272$$) {
  return $node$$272$$[D.$DvtNBoxConstants$$.$INDICATOR_ICON$] ? D.$DvtNBoxStyleUtils$$.$getStyledIndicatorIcon$($nbox$$81$$, $node$$272$$[D.$DvtNBoxConstants$$.$INDICATOR_ICON$]) : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxDataUtils$$.$getSelectedItems$ = function $$DvtNBoxDataUtils$$$$getSelectedItems$$($nbox$$82$$) {
  return $nbox$$82$$.$getOptions$()[D.$DvtNBoxConstants$$.$SELECTION$]
};
D.$DvtNBoxDataUtils$$.$setSelectedItems$ = function $$DvtNBoxDataUtils$$$$setSelectedItems$$($nbox$$83$$, $selectedItems$$2$$) {
  $nbox$$83$$.$getOptions$()[D.$DvtNBoxConstants$$.$SELECTION$] = $selectedItems$$2$$
};
D.$DvtNBoxDataUtils$$.$getHighlightedItems$ = function $$DvtNBoxDataUtils$$$$getHighlightedItems$$($nbox$$84$$) {
  var $items$$28$$, $categories$$22_n$$24$$ = $nbox$$84$$.$getOptions$()[D.$DvtNBoxConstants$$.$HIGHLIGHTED_CATEGORIES$];
  if($categories$$22_n$$24$$ && 0 < $categories$$22_n$$24$$.length) {
    $items$$28$$ = [];
    for($categories$$22_n$$24$$ = 0;$categories$$22_n$$24$$ < D.$DvtNBoxDataUtils$$.$getNodeCount$($nbox$$84$$);$categories$$22_n$$24$$++) {
      var $node$$273$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$84$$, $categories$$22_n$$24$$);
      D.$DvtNBoxDataUtils$$.$isNodeHighlighted$($nbox$$84$$, $node$$273$$) && $items$$28$$.push($node$$273$$)
    }
  }
  return $items$$28$$
};
D.$DvtNBoxDataUtils$$.$getGrouping$ = function $$DvtNBoxDataUtils$$$$getGrouping$$($nbox$$85$$) {
  return $nbox$$85$$.$getOptions$().__grouping
};
D.$DvtNBoxDataUtils$$.$getGroupAttributes$ = function $$DvtNBoxDataUtils$$$$getGroupAttributes$$($nbox$$86$$) {
  return $nbox$$86$$.$getOptions$()[D.$DvtNBoxConstants$$.$GROUP_ATTRIBUTES$]
};
D.$DvtNBoxDataUtils$$.$getGroupBehavior$ = function $$DvtNBoxDataUtils$$$$getGroupBehavior$$($nbox$$87$$) {
  return $nbox$$87$$.$getOptions$()[D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR$]
};
D.$DvtNBoxDataUtils$$.$getNodeGroupId$ = function $$DvtNBoxDataUtils$$$$getNodeGroupId$$($categories$$23_node$$274$$) {
  return $categories$$23_node$$274$$[D.$DvtNBoxConstants$$.$GROUP_CATEGORY$] ? $categories$$23_node$$274$$[D.$DvtNBoxConstants$$.$GROUP_CATEGORY$] : ($categories$$23_node$$274$$ = $categories$$23_node$$274$$._groupCategories) && 0 < $categories$$23_node$$274$$.length ? $categories$$23_node$$274$$.join(";") : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxDataUtils$$.$getXPercentage$ = function $$DvtNBoxDataUtils$$$$getXPercentage$$($nbox$$88$$, $node$$275$$) {
  if(!(0,window.isNaN)($node$$275$$[D.$DvtNBoxConstants$$.$X_PERCENTAGE$])) {
    return $node$$275$$[D.$DvtNBoxConstants$$.$X_PERCENTAGE$]
  }
  var $columnCount$$16$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$88$$);
  return(D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$88$$, $node$$275$$[D.$DvtNBoxConstants$$.$COLUMN$]) + 0.5) / $columnCount$$16$$
};
D.$DvtNBoxDataUtils$$.$getYPercentage$ = function $$DvtNBoxDataUtils$$$$getYPercentage$$($nbox$$89$$, $node$$276$$) {
  if(!(0,window.isNaN)($node$$276$$[D.$DvtNBoxConstants$$.$Y_PERCENTAGE$])) {
    return $node$$276$$[D.$DvtNBoxConstants$$.$Y_PERCENTAGE$]
  }
  var $rowCount$$20$$ = D.$DvtNBoxDataUtils$$.$getRowCount$($nbox$$89$$);
  return(D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$89$$, $node$$276$$[D.$DvtNBoxConstants$$.$ROW$]) + 0.5) / $rowCount$$20$$
};
D.$DvtNBoxDataUtils$$.$getOtherThreshold$ = function $$DvtNBoxDataUtils$$$$getOtherThreshold$$($nbox$$90$$) {
  return $nbox$$90$$.$getOptions$()[D.$DvtNBoxConstants$$.$OTHER_THRESHOLD$]
};
D.$DvtNBoxDataUtils$$.$getOtherColor$ = function $$DvtNBoxDataUtils$$$$getOtherColor$$($nbox$$91$$) {
  return $nbox$$91$$.$getOptions$()[D.$DvtNBoxConstants$$.$OTHER_COLOR$]
};
D.$DvtNBoxDataUtils$$.$getDrawer$ = function $$DvtNBoxDataUtils$$$$getDrawer$$($nbox$$92$$) {
  return $nbox$$92$$.$getOptions$()[D.$DvtNBoxConstants$$.$DRAWER$]
};
D.$DvtNBoxDataUtils$$.$getCategoryNode$ = function $$DvtNBoxDataUtils$$$$getCategoryNode$$($nbox$$93$$, $id$$242$$) {
  var $cell$$49_groupBehavior$$7$$ = D.$DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$93$$), $groups$$12$$ = $nbox$$93$$.$getOptions$().__groups, $groupId$$24$$ = $id$$242$$;
  $cell$$49_groupBehavior$$7$$ == D.$DvtNBoxConstants$$.$GROUP_BEHAVIOR_WITHIN_CELL$ && ($cell$$49_groupBehavior$$7$$ = $id$$242$$.substring(0, $id$$242$$.indexOf(":")), $groupId$$24$$ = $id$$242$$.substring($id$$242$$.indexOf(":") + 1), $groups$$12$$ = $groups$$12$$[$cell$$49_groupBehavior$$7$$]);
  return $groups$$12$$ ? $groups$$12$$[$groupId$$24$$] : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxDataUtils$$.$getCategoryNodeLabels$ = function $$DvtNBoxDataUtils$$$$getCategoryNodeLabels$$($nbox$$94$$, $categoryNode$$8$$) {
  if($categoryNode$$8$$.__labels) {
    return $categoryNode$$8$$.__labels
  }
  var $node$$277$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$94$$, $categoryNode$$8$$.nodeIndices[0]);
  if($node$$277$$[D.$DvtNBoxConstants$$.$GROUP_CATEGORY$]) {
    return $categoryNode$$8$$.__labels = [$node$$277$$[D.$DvtNBoxConstants$$.$GROUP_CATEGORY$]]
  }
  $categoryNode$$8$$.__labels = [];
  if($node$$277$$._groupCategories) {
    for(var $labelMap$$ = $nbox$$94$$.$getOptions$()._groupLabels, $i$$742$$ = 0;$i$$742$$ < $node$$277$$._groupCategories.length;$i$$742$$++) {
      $categoryNode$$8$$.__labels[$i$$742$$] = $labelMap$$ && $labelMap$$[$node$$277$$._groupCategories[$i$$742$$]] ? $labelMap$$[$node$$277$$._groupCategories[$i$$742$$]] : $node$$277$$._groupCategories[$i$$742$$]
    }
  }
  return $categoryNode$$8$$.__labels
};
D.$DvtNBoxDataUtils$$.$setDisplayable$ = function $$DvtNBoxDataUtils$$$$setDisplayable$$($displayables$$26_nbox$$95$$, $dataObject$$, $displayable$$73$$, $fullKey$$2_key$$123$$) {
  $displayables$$26_nbox$$95$$ = $displayables$$26_nbox$$95$$.$getDisplayables$();
  $fullKey$$2_key$$123$$ = $fullKey$$2_key$$123$$ ? "__displayable:" + $fullKey$$2_key$$123$$ : "__displayable";
  $dataObject$$[$fullKey$$2_key$$123$$] ? $displayables$$26_nbox$$95$$[$dataObject$$[$fullKey$$2_key$$123$$]] = $displayable$$73$$ : ($dataObject$$[$fullKey$$2_key$$123$$] = $displayables$$26_nbox$$95$$.length, $displayables$$26_nbox$$95$$.push($displayable$$73$$))
};
D.$DvtNBoxDataUtils$$.$getDisplayable$ = function $$DvtNBoxDataUtils$$$$getDisplayable$$($displayables$$27_nbox$$96$$, $dataObject$$1_index$$226$$, $key$$124$$) {
  if(!$dataObject$$1_index$$226$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  $dataObject$$1_index$$226$$ = $dataObject$$1_index$$226$$[$key$$124$$ ? "__displayable:" + $key$$124$$ : "__displayable"];
  $displayables$$27_nbox$$96$$ = $displayables$$27_nbox$$96$$.$getDisplayables$();
  return $dataObject$$1_index$$226$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : $displayables$$27_nbox$$96$$[$dataObject$$1_index$$226$$]
};
D.$DvtNBoxDataUtils$$.$isMaximizeEnabled$ = function $$DvtNBoxDataUtils$$$$isMaximizeEnabled$$($nbox$$97$$) {
  return"off" != $nbox$$97$$.$getOptions$().cellMaximize
};
D.$DvtNBoxDataUtils$$.$getCellContent$ = function $$DvtNBoxDataUtils$$$$getCellContent$$($nbox$$98$$) {
  return"counts" == $nbox$$98$$.$getOptions$().cellContent ? "counts" : "auto"
};
D.$DvtNBoxDataUtils$$.$isCellMinimized$ = function $$DvtNBoxDataUtils$$$$isCellMinimized$$($nbox$$99$$, $cellIndex$$12$$) {
  var $maximizedRow$$8$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($nbox$$99$$), $maximizedColumn$$8$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($nbox$$99$$);
  if(!$maximizedRow$$8$$ && !$maximizedColumn$$8$$) {
    return D.$JSCompiler_alias_FALSE$$
  }
  var $cell$$50_cellColumn$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$99$$, $cellIndex$$12$$), $cellRow$$ = $cell$$50_cellColumn$$[D.$DvtNBoxConstants$$.$ROW$], $cell$$50_cellColumn$$ = $cell$$50_cellColumn$$[D.$DvtNBoxConstants$$.$COLUMN$];
  return $maximizedRow$$8$$ && $maximizedColumn$$8$$ ? $maximizedRow$$8$$ != $cellRow$$ || $maximizedColumn$$8$$ != $cell$$50_cellColumn$$ : $maximizedRow$$8$$ != $cellRow$$ && $maximizedColumn$$8$$ != $cell$$50_cellColumn$$
};
D.$DvtNBoxDataUtils$$.$isCellMaximized$ = function $$DvtNBoxDataUtils$$$$isCellMaximized$$($nbox$$100$$, $cellIndex$$13$$) {
  var $maximizedRow$$9$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($nbox$$100$$), $maximizedColumn$$9$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($nbox$$100$$), $cell$$51$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$100$$, $cellIndex$$13$$), $cellColumn$$1$$ = $cell$$51$$[D.$DvtNBoxConstants$$.$COLUMN$];
  return $maximizedRow$$9$$ == $cell$$51$$[D.$DvtNBoxConstants$$.$ROW$] && $maximizedColumn$$9$$ == $cellColumn$$1$$
};
D.$DvtNBoxDataUtils$$.$getLegend$ = function $$DvtNBoxDataUtils$$$$getLegend$$($nbox$$101$$) {
  return $nbox$$101$$.$getOptions$()._legend
};
D.$DvtNBoxDataUtils$$.$isNodeHidden$ = function $$DvtNBoxDataUtils$$$$isNodeHidden$$($nbox$$102$$, $node$$278$$) {
  var $options$$220$$ = $nbox$$102$$.$getOptions$();
  $options$$220$$[D.$DvtNBoxConstants$$.$HIDDEN_CATEGORIES$] && !$options$$220$$.__hiddenMap && ($options$$220$$.__hiddenMap = D.$DvtArrayUtils$$.$createBooleanMap$($options$$220$$[D.$DvtNBoxConstants$$.$HIDDEN_CATEGORIES$]));
  return D.$DvtArrayUtils$$.$hasAnyMapItem$($options$$220$$.__hiddenMap, $node$$278$$[D.$DvtNBoxConstants$$.$CATEGORIES$])
};
D.$DvtNBoxDataUtils$$.$isNodeHighlighted$ = function $$DvtNBoxDataUtils$$$$isNodeHighlighted$$($nbox$$103$$, $node$$279$$) {
  var $options$$221$$ = $nbox$$103$$.$getOptions$();
  $options$$221$$[D.$DvtNBoxConstants$$.$HIGHLIGHTED_CATEGORIES$] && !$options$$221$$.__highlightedMap && ($options$$221$$.__highlightedMap = D.$DvtArrayUtils$$.$createBooleanMap$($options$$221$$[D.$DvtNBoxConstants$$.$HIGHLIGHTED_CATEGORIES$]));
  return"all" == $options$$221$$[D.$DvtNBoxConstants$$.$HIGHLIGHT_MATCH$] ? D.$DvtArrayUtils$$.$hasAllMapItems$($options$$221$$.__highlightedMap, $node$$279$$[D.$DvtNBoxConstants$$.$CATEGORIES$]) : D.$DvtArrayUtils$$.$hasAnyMapItem$($options$$221$$.__highlightedMap, $node$$279$$[D.$DvtNBoxConstants$$.$CATEGORIES$])
};
D.$DvtNBoxDataUtils$$.$getNodeScrollableContainer$ = function $$DvtNBoxDataUtils$$$$getNodeScrollableContainer$$($nbox$$104$$, $node$$280$$) {
  if(!$node$$280$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $cell$$52_cellIndex$$14_drawer$$8_drawerData$$6$$ = D.$DvtNBoxDataUtils$$.$getDrawer$($nbox$$104$$);
  if($cell$$52_cellIndex$$14_drawer$$8_drawerData$$6$$ && ($cell$$52_cellIndex$$14_drawer$$8_drawerData$$6$$ = D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$104$$, $cell$$52_cellIndex$$14_drawer$$8_drawerData$$6$$))) {
    return $cell$$52_cellIndex$$14_drawer$$8_drawerData$$6$$.$getChildContainer$()
  }
  $cell$$52_cellIndex$$14_drawer$$8_drawerData$$6$$ = D.$DvtNBoxDataUtils$$.$getCellIndex$($nbox$$104$$, $node$$280$$.getData());
  return D.$DvtNBoxDataUtils$$.$isCellMaximized$($nbox$$104$$, $cell$$52_cellIndex$$14_drawer$$8_drawerData$$6$$) ? ($cell$$52_cellIndex$$14_drawer$$8_drawerData$$6$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$104$$, $cell$$52_cellIndex$$14_drawer$$8_drawerData$$6$$), D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$104$$, $cell$$52_cellIndex$$14_drawer$$8_drawerData$$6$$).$getChildContainer$()) : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxDataUtils$$.$fireSetPropertyEvent$ = function $$DvtNBoxDataUtils$$$$fireSetPropertyEvent$$($nbox$$105$$, $key$$125$$) {
  var $event$$596$$ = new D.$DvtSetPropertyEvent$$;
  (0,D.$JSCompiler_StaticMethods_addParam$$)($event$$596$$, $key$$125$$, D.$JSCompiler_alias_NULL$$);
  $nbox$$105$$.$processEvent$($event$$596$$)
};
D.$DvtNBoxDataUtils$$.$getMaximizedCellIndex$ = function $$DvtNBoxDataUtils$$$$getMaximizedCellIndex$$($nbox$$106$$) {
  var $columnCount$$17_maximizedCellIndex$$2$$ = D.$JSCompiler_alias_NULL$$, $maximizedRow$$10$$ = D.$DvtNBoxDataUtils$$.$getMaximizedRow$($nbox$$106$$), $maximizedColumn$$10$$ = D.$DvtNBoxDataUtils$$.$getMaximizedColumn$($nbox$$106$$);
  $maximizedRow$$10$$ && $maximizedColumn$$10$$ && ($columnCount$$17_maximizedCellIndex$$2$$ = D.$DvtNBoxDataUtils$$.$getColumnCount$($nbox$$106$$), $columnCount$$17_maximizedCellIndex$$2$$ = D.$DvtNBoxDataUtils$$.$getColumnIndex$($nbox$$106$$, $maximizedColumn$$10$$) + $columnCount$$17_maximizedCellIndex$$2$$ * D.$DvtNBoxDataUtils$$.$getRowIndex$($nbox$$106$$, $maximizedRow$$10$$));
  return $columnCount$$17_maximizedCellIndex$$2$$
};
D.$DvtNBoxDataUtils$$.$isDrawerSelected$ = function $$DvtNBoxDataUtils$$$$isDrawerSelected$$($nbox$$107$$, $categoryNode$$9$$) {
  var $i$$743_selected$$37$$ = D.$JSCompiler_alias_FALSE$$, $nodeIndices$$4_selectedItems$$3$$ = D.$DvtNBoxDataUtils$$.$getSelectedItems$($nbox$$107$$);
  if($nodeIndices$$4_selectedItems$$3$$) {
    for(var $selectedMap$$2$$ = {}, $i$$743_selected$$37$$ = 0;$i$$743_selected$$37$$ < $nodeIndices$$4_selectedItems$$3$$.length;$i$$743_selected$$37$$++) {
      $selectedMap$$2$$[$nodeIndices$$4_selectedItems$$3$$[$i$$743_selected$$37$$]] = D.$JSCompiler_alias_TRUE$$
    }
    for(var $nodeIndices$$4_selectedItems$$3$$ = $categoryNode$$9$$.getData().nodeIndices, $i$$743_selected$$37$$ = D.$JSCompiler_alias_TRUE$$, $j$$100$$ = 0;$j$$100$$ < $nodeIndices$$4_selectedItems$$3$$.length;$j$$100$$++) {
      var $node$$281$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$107$$, $nodeIndices$$4_selectedItems$$3$$[$j$$100$$]);
      if(!$selectedMap$$2$$[$node$$281$$[D.$DvtNBoxConstants$$.ID]]) {
        $i$$743_selected$$37$$ = D.$JSCompiler_alias_FALSE$$;
        break
      }
    }
  }
  return $i$$743_selected$$37$$
};
D.$DvtNBoxDataUtils$$.$buildAriaDesc$ = function $$DvtNBoxDataUtils$$$$buildAriaDesc$$($nbox$$108_nodeCount$$13$$, $object$$16$$, $baseDesc_datatip$$19$$, $selected$$38$$) {
  $baseDesc_datatip$$19$$ = $object$$16$$ instanceof D.$DvtNBoxCategoryNode$$ || $object$$16$$ instanceof D.$DvtNBoxDrawer$$ ? (0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [(0,D.$DvtBundle$getTranslatedString$$)("DvtNBoxBundle", "GROUP_NODE"), $baseDesc_datatip$$19$$]) : $baseDesc_datatip$$19$$;
  var $states$$13$$ = [];
  $selected$$38$$ ? $states$$13$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "STATE_SELECTED")) : $states$$13$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "STATE_UNSELECTED"));
  $object$$16$$ instanceof D.$DvtNBoxCategoryNode$$ ? ($nbox$$108_nodeCount$$13$$ = $object$$16$$.getData().nodeIndices.length, $states$$13$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "STATE_COLLAPSED")), $states$$13$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [(0,D.$DvtBundle$getTranslatedString$$)("DvtNBoxBundle", "SIZE"), $nbox$$108_nodeCount$$13$$]))) : $object$$16$$ instanceof D.$DvtNBoxDrawer$$ && ($nbox$$108_nodeCount$$13$$ = D.$DvtNBoxDataUtils$$.$getCategoryNode$($nbox$$108_nodeCount$$13$$, 
  $object$$16$$.getData()[D.$DvtNBoxConstants$$.ID]).nodeIndices.length, $states$$13$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "STATE_EXPANDED")), $states$$13$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "COLON_SEP_LIST", [(0,D.$DvtBundle$getTranslatedString$$)("DvtNBoxBundle", "SIZE"), $nbox$$108_nodeCount$$13$$])));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)($baseDesc_datatip$$19$$, $states$$13$$)
};
D.$DvtNBoxDataUtils$$.$getFirstNavigableNode$ = function $$DvtNBoxDataUtils$$$$getFirstNavigableNode$$($nbox$$109$$, $container$$165$$) {
  var $navigable$$18$$ = D.$JSCompiler_alias_NULL$$;
  if(0 < $container$$165$$.$getNumChildren$()) {
    var $navigable$$18$$ = $container$$165$$.$getChildAt$(0), $prevData$$;
    do {
      $navigable$$18$$ instanceof D.$DvtNBoxNode$$ ? $prevData$$ = $navigable$$18$$.getData().__prev : $navigable$$18$$ instanceof D.$DvtNBoxNodeOverflow$$ && ($prevData$$ = $navigable$$18$$.__prev), $navigable$$18$$ = $prevData$$ ? D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$109$$, $prevData$$) : $navigable$$18$$
    }while($prevData$$)
  }
  return $navigable$$18$$
};
D.$DvtNBoxDataUtils$$.$getLastNavigableNode$ = function $$DvtNBoxDataUtils$$$$getLastNavigableNode$$($nbox$$110$$, $container$$166$$) {
  var $navigable$$19$$ = D.$JSCompiler_alias_NULL$$, $childCnt$$2_nextData$$ = $container$$166$$.$getNumChildren$();
  if(0 < $childCnt$$2_nextData$$) {
    $navigable$$19$$ = $container$$166$$.$getChildAt$($childCnt$$2_nextData$$ - 1);
    do {
      $navigable$$19$$ = ($childCnt$$2_nextData$$ = $navigable$$19$$ instanceof D.$DvtNBoxNode$$ ? $navigable$$19$$.getData().__next : D.$JSCompiler_alias_NULL$$) ? D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$110$$, $childCnt$$2_nextData$$) : $navigable$$19$$
    }while($childCnt$$2_nextData$$)
  }
  return $navigable$$19$$
};
D.$DvtNBoxDataUtils$$.$getNextNavigableNode$ = function $$DvtNBoxDataUtils$$$$getNextNavigableNode$$($nbox$$111$$, $object$$17$$, $bNext$$7_event$$597$$) {
  $bNext$$7_event$$597$$ = 39 == $bNext$$7_event$$597$$.keyCode || 40 == $bNext$$7_event$$597$$.keyCode ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$;
  var $nextData$$1$$;
  $object$$17$$ instanceof D.$DvtNBoxNode$$ ? $nextData$$1$$ = $bNext$$7_event$$597$$ ? $object$$17$$.getData().__next : $object$$17$$.getData().__prev : $object$$17$$ instanceof D.$DvtNBoxNodeOverflow$$ && ($nextData$$1$$ = $bNext$$7_event$$597$$ ? D.$JSCompiler_alias_NULL$$ : $object$$17$$.__prev);
  return $nextData$$1$$ ? D.$DvtNBoxDataUtils$$.$getDisplayable$($nbox$$111$$, $nextData$$1$$) : $object$$17$$
};
D.$DvtNBoxStyleUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtNBoxStyleUtils$$, D.$DvtObj$$, "DvtNBoxStyleUtils");
D.$DvtNBoxStyleUtils$$.$getAnimationOnDisplay$ = function $$DvtNBoxStyleUtils$$$$getAnimationOnDisplay$$($animationOnDisplay$$3_nbox$$112$$) {
  if(!$animationOnDisplay$$3_nbox$$112$$.$_animationAllowed$) {
    return"none"
  }
  $animationOnDisplay$$3_nbox$$112$$ = $animationOnDisplay$$3_nbox$$112$$.$getOptions$()[D.$DvtNBoxConstants$$.$ANIMATION_ON_DISPLAY$];
  "auto" == $animationOnDisplay$$3_nbox$$112$$ && ($animationOnDisplay$$3_nbox$$112$$ = D.$DvtBlackBoxAnimationHandler$$.$ALPHA_FADE$);
  return $animationOnDisplay$$3_nbox$$112$$
};
D.$DvtNBoxStyleUtils$$.$getAnimationOnDataChange$ = function $$DvtNBoxStyleUtils$$$$getAnimationOnDataChange$$($nbox$$113$$) {
  return!$nbox$$113$$.$_animationAllowed$ ? "none" : $nbox$$113$$.$getOptions$()[D.$DvtNBoxConstants$$.$ANIMATION_ON_DATA_CHANGE$]
};
D.$DvtNBoxStyleUtils$$.$getAnimationDuration$ = function $$DvtNBoxStyleUtils$$$$getAnimationDuration$$($nbox$$114$$) {
  return(0,D.$DvtStyleUtils$getTimeMilliseconds$$)($nbox$$114$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$ANIMATION_DURATION$]) / 1E3
};
D.$DvtNBoxStyleUtils$$.$getColumnLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getColumnLabelStyle$$($nbox$$115$$, $columnIndex$$8$$) {
  var $defaults$$1$$ = $nbox$$115$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$COLUMN_LABEL_STYLE$], $column$$12$$ = D.$DvtNBoxDataUtils$$.$getColumn$($nbox$$115$$, $columnIndex$$8$$);
  return $column$$12$$[D.$DvtNBoxConstants$$.$LABEL_STYLE$] ? D.$DvtJSONUtils$$.$merge$(new D.$DvtCSSStyle$$($column$$12$$[D.$DvtNBoxConstants$$.$LABEL_STYLE$]), $defaults$$1$$) : $defaults$$1$$
};
D.$DvtNBoxStyleUtils$$.$getRowLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getRowLabelStyle$$($nbox$$116$$, $rowIndex$$20$$) {
  var $defaults$$2$$ = $nbox$$116$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$ROW_LABEL_STYLE$], $row$$53$$ = D.$DvtNBoxDataUtils$$.$getRow$($nbox$$116$$, $rowIndex$$20$$);
  return $row$$53$$[D.$DvtNBoxConstants$$.$LABEL_STYLE$] ? D.$DvtJSONUtils$$.$merge$(new D.$DvtCSSStyle$$($row$$53$$[D.$DvtNBoxConstants$$.$LABEL_STYLE$]), $defaults$$2$$) : $defaults$$2$$
};
D.$DvtNBoxStyleUtils$$.$getCellStyle$ = function $$DvtNBoxStyleUtils$$$$getCellStyle$$($nbox$$117$$, $cellIndex$$15$$) {
  var $defaults$$3_options$$224$$ = $nbox$$117$$.$getOptions$(), $styleKey$$ = D.$DvtNBoxDataUtils$$.$isCellMinimized$($nbox$$117$$, $cellIndex$$15$$) ? "minimizedStyle" : D.$DvtNBoxConstants$$.$STYLE$, $defaults$$3_options$$224$$ = $defaults$$3_options$$224$$[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$CELL_DEFAULTS$][$styleKey$$], $cell$$53$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$117$$, $cellIndex$$15$$);
  return $cell$$53$$[$styleKey$$] ? D.$DvtJSONUtils$$.$merge$(new D.$DvtCSSStyle$$($cell$$53$$[$styleKey$$]), $defaults$$3_options$$224$$) : $defaults$$3_options$$224$$
};
D.$DvtNBoxStyleUtils$$.$getCellLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getCellLabelStyle$$($nbox$$118$$, $cellIndex$$16$$) {
  var $defaults$$4$$ = $nbox$$118$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$CELL_DEFAULTS$][D.$DvtNBoxConstants$$.$LABEL_STYLE$], $cell$$54$$ = D.$DvtNBoxDataUtils$$.$getCell$($nbox$$118$$, $cellIndex$$16$$);
  return $cell$$54$$[D.$DvtNBoxConstants$$.$LABEL_STYLE$] ? D.$DvtJSONUtils$$.$merge$(new D.$DvtCSSStyle$$($cell$$54$$[D.$DvtNBoxConstants$$.$LABEL_STYLE$]), $defaults$$4$$) : $defaults$$4$$
};
D.$DvtNBoxStyleUtils$$.$getCellShowCount$ = function $$DvtNBoxStyleUtils$$$$getCellShowCount$$($nbox$$119$$, $cell$$55$$) {
  return $cell$$55$$[D.$DvtNBoxConstants$$.$SHOW_COUNT$] ? $cell$$55$$[D.$DvtNBoxConstants$$.$SHOW_COUNT$] : $nbox$$119$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$CELL_DEFAULTS$][D.$DvtNBoxConstants$$.$SHOW_COUNT$]
};
D.$DvtNBoxStyleUtils$$.$getCellCountLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getCellCountLabelStyle$$($nbox$$120$$) {
  return $nbox$$120$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$CELL_DEFAULTS$].countLabelStyle
};
D.$DvtNBoxStyleUtils$$.$getCellBodyCountLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getCellBodyCountLabelStyle$$($nbox$$121$$) {
  return $nbox$$121$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$CELL_DEFAULTS$].bodyCountLabelStyle
};
D.$DvtNBoxStyleUtils$$.$getCellDropTargetStyle$ = function $$DvtNBoxStyleUtils$$$$getCellDropTargetStyle$$($nbox$$122$$) {
  return $nbox$$122$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$CELL_DEFAULTS$].dropTargetStyle
};
D.$DvtNBoxStyleUtils$$.$getNodeLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getNodeLabelStyle$$($nbox$$123$$) {
  return $nbox$$123$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$LABEL_STYLE$]
};
D.$DvtNBoxStyleUtils$$.$getNodeSecondaryLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getNodeSecondaryLabelStyle$$($nbox$$124$$) {
  return $nbox$$124$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$SECONDARY_LABEL_STYLE$]
};
D.$DvtNBoxStyleUtils$$.$getNodeColor$ = function $$DvtNBoxStyleUtils$$$$getNodeColor$$($nbox$$125$$, $node$$284$$) {
  return $node$$284$$[D.$DvtNBoxConstants$$.$COLOR$] ? $node$$284$$[D.$DvtNBoxConstants$$.$COLOR$] : $nbox$$125$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$COLOR$]
};
D.$DvtNBoxStyleUtils$$.$getNodeBorderColor$ = function $$DvtNBoxStyleUtils$$$$getNodeBorderColor$$($nbox$$126$$, $node$$285$$) {
  var $color$$73$$ = $node$$285$$[D.$DvtNBoxConstants$$.$BORDER_COLOR$] ? $node$$285$$[D.$DvtNBoxConstants$$.$BORDER_COLOR$] : $nbox$$126$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$BORDER_COLOR$];
  return $color$$73$$ ? $color$$73$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxStyleUtils$$.$getNodeBorderWidth$ = function $$DvtNBoxStyleUtils$$$$getNodeBorderWidth$$($nbox$$127$$, $node$$286$$) {
  var $width$$120$$ = $node$$286$$[D.$DvtNBoxConstants$$.$BORDER_WIDTH$] ? $node$$286$$[D.$DvtNBoxConstants$$.$BORDER_WIDTH$] : $nbox$$127$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$BORDER_WIDTH$];
  return $width$$120$$ ? $width$$120$$ : D.$JSCompiler_alias_NULL$$
};
D.$DvtNBoxStyleUtils$$.$getNodeIndicatorColor$ = function $$DvtNBoxStyleUtils$$$$getNodeIndicatorColor$$($nbox$$128$$, $node$$287$$) {
  return $node$$287$$[D.$DvtNBoxConstants$$.$INDICATOR_COLOR$] ? $node$$287$$[D.$DvtNBoxConstants$$.$INDICATOR_COLOR$] : $nbox$$128$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$INDICATOR_COLOR$]
};
D.$DvtNBoxStyleUtils$$.$getStyledIcon$ = function $$DvtNBoxStyleUtils$$$$getStyledIcon$$($nbox$$129$$, $icon$$47$$) {
  return D.$DvtJSONUtils$$.$merge$($icon$$47$$, $nbox$$129$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$ICON_DEFAULTS$])
};
D.$DvtNBoxStyleUtils$$.$getStyledIndicatorIcon$ = function $$DvtNBoxStyleUtils$$$$getStyledIndicatorIcon$$($nbox$$130$$, $indicatorIcon$$8$$) {
  return D.$DvtJSONUtils$$.$merge$($indicatorIcon$$8$$, $nbox$$130$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$INDICATOR_ICON_DEFAULTS$])
};
D.$DvtNBoxStyleUtils$$.$getFadedNodeAlpha$ = function $$DvtNBoxStyleUtils$$$$getFadedNodeAlpha$$($nbox$$131$$) {
  return $nbox$$131$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$].alphaFade
};
D.$DvtNBoxStyleUtils$$.$getScrollbarStyleMap$ = function $$DvtNBoxStyleUtils$$$$getScrollbarStyleMap$$($nbox$$132$$) {
  return $nbox$$132$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$].__scrollbar
};
D.$DvtNBoxStyleUtils$$.$getCategoryNodeColor$ = function $$DvtNBoxStyleUtils$$$$getCategoryNodeColor$$($nbox$$133$$, $categoryNode$$10$$) {
  if("none" == D.$DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$133$$) || D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$133$$) && -1 == D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$133$$).indexOf("color")) {
    return $nbox$$133$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$COLOR$]
  }
  if($categoryNode$$10$$.otherNode) {
    return D.$DvtNBoxDataUtils$$.$getOtherColor$($nbox$$133$$)
  }
  var $nodeIndices$$5$$ = $categoryNode$$10$$.nodeIndices, $color$$74$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$133$$, $nodeIndices$$5$$[0])[D.$DvtNBoxConstants$$.$COLOR$];
  if(!$color$$74$$) {
    return $nbox$$133$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$COLOR$]
  }
  for(var $i$$744$$ = 1;$i$$744$$ < $nodeIndices$$5$$.length;$i$$744$$++) {
    var $node$$288$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$133$$, $nodeIndices$$5$$[$i$$744$$]);
    if($color$$74$$ != $node$$288$$[D.$DvtNBoxConstants$$.$COLOR$]) {
      return $nbox$$133$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$COLOR$]
    }
  }
  return $color$$74$$
};
D.$DvtNBoxStyleUtils$$.$getCategoryNodeIndicatorColor$ = function $$DvtNBoxStyleUtils$$$$getCategoryNodeIndicatorColor$$($nbox$$134$$, $categoryNode$$11$$) {
  if("none" == D.$DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$134$$) || D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$134$$) && -1 == D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$134$$).indexOf("indicatorColor")) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $nodeIndices$$6$$ = $categoryNode$$11$$.nodeIndices, $color$$75$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$134$$, $nodeIndices$$6$$[0])[D.$DvtNBoxConstants$$.$INDICATOR_COLOR$];
  if(!$color$$75$$) {
    return $nbox$$134$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$INDICATOR_COLOR$]
  }
  for(var $i$$745$$ = 1;$i$$745$$ < $nodeIndices$$6$$.length;$i$$745$$++) {
    var $node$$289$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$134$$, $nodeIndices$$6$$[$i$$745$$]);
    if($color$$75$$ != $node$$289$$[D.$DvtNBoxConstants$$.$INDICATOR_COLOR$]) {
      return $nbox$$134$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$INDICATOR_COLOR$]
    }
  }
  return $color$$75$$
};
D.$DvtNBoxStyleUtils$$.$getStyledCategoryIndicatorIcon$ = function $$DvtNBoxStyleUtils$$$$getStyledCategoryIndicatorIcon$$($nbox$$135$$, $categoryNode$$12$$) {
  if("none" == D.$DvtNBoxDataUtils$$.$getGroupBehavior$($nbox$$135$$) || D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$135$$) && -1 == D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$135$$).indexOf("indicatorIconShape") && -1 == D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$135$$).indexOf("indicatorIconColor") && -1 == D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$135$$).indexOf("indicatorIconPattern")) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $indicatorIcon$$9$$ = {}, $nodeIndices$$7$$ = $categoryNode$$12$$.nodeIndices, $baseIcon_pattern$$13$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$135$$, $nodeIndices$$7$$[0])[D.$DvtNBoxConstants$$.$INDICATOR_ICON$];
  if(!$baseIcon_pattern$$13$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $match$$7$$ = D.$JSCompiler_alias_TRUE$$;
  if(!D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$135$$) || -1 != D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$135$$).indexOf("indicatorIconShape")) {
    for(var $color$$76_k$$9_shape$$69$$ = $baseIcon_pattern$$13$$[D.$DvtNBoxConstants$$.$SHAPE$], $i$$746_j$$101$$ = 1;$i$$746_j$$101$$ < $nodeIndices$$7$$.length;$i$$746_j$$101$$++) {
      var $nodeIcon$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$135$$, $nodeIndices$$7$$[$i$$746_j$$101$$])[D.$DvtNBoxConstants$$.$INDICATOR_ICON$];
      $nodeIcon$$ && $color$$76_k$$9_shape$$69$$ != $nodeIcon$$[D.$DvtNBoxConstants$$.$SHAPE$] && ($match$$7$$ = D.$JSCompiler_alias_FALSE$$)
    }
    $indicatorIcon$$9$$[D.$DvtNBoxConstants$$.$SHAPE$] = $match$$7$$ ? $color$$76_k$$9_shape$$69$$ : $nbox$$135$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$INDICATOR_ICON_DEFAULTS$][D.$DvtNBoxConstants$$.$SHAPE$]
  }
  $match$$7$$ = D.$JSCompiler_alias_TRUE$$;
  if(!D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$135$$) || -1 != D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$135$$).indexOf("indicatorIconColor")) {
    $color$$76_k$$9_shape$$69$$ = $baseIcon_pattern$$13$$[D.$DvtNBoxConstants$$.$COLOR$];
    for($i$$746_j$$101$$ = 1;$i$$746_j$$101$$ < $nodeIndices$$7$$.length;$i$$746_j$$101$$++) {
      ($nodeIcon$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$135$$, $nodeIndices$$7$$[$i$$746_j$$101$$])[D.$DvtNBoxConstants$$.$INDICATOR_ICON$]) && $color$$76_k$$9_shape$$69$$ != $nodeIcon$$[D.$DvtNBoxConstants$$.$COLOR$] && ($match$$7$$ = D.$JSCompiler_alias_FALSE$$)
    }
    $indicatorIcon$$9$$[D.$DvtNBoxConstants$$.$COLOR$] = $match$$7$$ ? $color$$76_k$$9_shape$$69$$ : $nbox$$135$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$INDICATOR_ICON_DEFAULTS$][D.$DvtNBoxConstants$$.$COLOR$]
  }
  $match$$7$$ = D.$JSCompiler_alias_TRUE$$;
  if(!D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$135$$) || -1 != D.$DvtNBoxDataUtils$$.$getGroupAttributes$($nbox$$135$$).indexOf("indicatorIconPattern")) {
    $baseIcon_pattern$$13$$ = $baseIcon_pattern$$13$$[D.$DvtNBoxConstants$$.$PATTERN$];
    for($color$$76_k$$9_shape$$69$$ = 1;$color$$76_k$$9_shape$$69$$ < $nodeIndices$$7$$.length;$color$$76_k$$9_shape$$69$$++) {
      ($nodeIcon$$ = D.$DvtNBoxDataUtils$$.$getNode$($nbox$$135$$, $nodeIndices$$7$$[$color$$76_k$$9_shape$$69$$])[D.$DvtNBoxConstants$$.$INDICATOR_ICON$]) && $baseIcon_pattern$$13$$ != $nodeIcon$$[D.$DvtNBoxConstants$$.$PATTERN$] && ($match$$7$$ = D.$JSCompiler_alias_FALSE$$)
    }
    $indicatorIcon$$9$$[D.$DvtNBoxConstants$$.$PATTERN$] = $match$$7$$ ? $baseIcon_pattern$$13$$ : $nbox$$135$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$INDICATOR_ICON_DEFAULTS$][D.$DvtNBoxConstants$$.$PATTERN$]
  }
  return D.$DvtJSONUtils$$.$merge$($indicatorIcon$$9$$, $nbox$$135$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$INDICATOR_ICON_DEFAULTS$])
};
D.$DvtNBoxStyleUtils$$.$getDrawerBackground$ = function $$DvtNBoxStyleUtils$$$$getDrawerBackground$$($nbox$$136$$) {
  return $nbox$$136$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$].__drawerDefaults.background
};
D.$DvtNBoxStyleUtils$$.$getDrawerHeaderBackground$ = function $$DvtNBoxStyleUtils$$$$getDrawerHeaderBackground$$($nbox$$137$$) {
  return $nbox$$137$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$].__drawerDefaults.headerBackground
};
D.$DvtNBoxStyleUtils$$.$getDrawerBorderColor$ = function $$DvtNBoxStyleUtils$$$$getDrawerBorderColor$$($nbox$$138$$) {
  return $nbox$$138$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$].__drawerDefaults[D.$DvtNBoxConstants$$.$BORDER_COLOR$]
};
D.$DvtNBoxStyleUtils$$.$getDrawerBorderRadius$ = function $$DvtNBoxStyleUtils$$$$getDrawerBorderRadius$$($nbox$$139$$) {
  return $nbox$$139$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$].__drawerDefaults[D.$DvtNBoxConstants$$.$BORDER_RADIUS$]
};
D.$DvtNBoxStyleUtils$$.$getDrawerLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getDrawerLabelStyle$$($nbox$$140$$) {
  return $nbox$$140$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$].__drawerDefaults[D.$DvtNBoxConstants$$.$LABEL_STYLE$]
};
D.$DvtNBoxStyleUtils$$.$getDrawerCountLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getDrawerCountLabelStyle$$($nbox$$141$$) {
  return $nbox$$141$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$].__drawerDefaults.countLabelStyle
};
D.$DvtNBoxStyleUtils$$.$getDrawerCountBorderRadius$ = function $$DvtNBoxStyleUtils$$$$getDrawerCountBorderRadius$$($nbox$$142$$) {
  return $nbox$$142$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$].__drawerDefaults.countBorderRadius
};
D.$DvtNBoxStyleUtils$$.$getCategoryNodeLabelStyle$ = function $$DvtNBoxStyleUtils$$$$getCategoryNodeLabelStyle$$($nbox$$143$$) {
  return $nbox$$143$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$].__categoryNodeDefaults.labelStyle
};
D.$DvtNBoxStyleUtils$$.$getNodeBorderRadius$ = function $$DvtNBoxStyleUtils$$$$getNodeBorderRadius$$($nbox$$144$$) {
  return $nbox$$144$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$][D.$DvtNBoxConstants$$.$BORDER_RADIUS$]
};
D.$DvtNBoxStyleUtils$$.$getNodeHoverColor$ = function $$DvtNBoxStyleUtils$$$$getNodeHoverColor$$($nbox$$145$$) {
  return $nbox$$145$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$].hoverColor
};
D.$DvtNBoxStyleUtils$$.$getNodeSelectionColor$ = function $$DvtNBoxStyleUtils$$$$getNodeSelectionColor$$($nbox$$146$$) {
  return $nbox$$146$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$NODE_DEFAULTS$].selectionColor
};
D.$DvtNBoxStyleUtils$$.$getLabelHalign$ = function $$DvtNBoxStyleUtils$$$$getLabelHalign$$($nbox$$147$$, $data$$89$$) {
  var $halign$$12$$ = $data$$89$$[D.$DvtNBoxConstants$$.$LABEL_HALIGN$];
  $halign$$12$$ || ($halign$$12$$ = $nbox$$147$$.$getOptions$()[D.$DvtNBoxConstants$$.$STYLE_DEFAULTS$][D.$DvtNBoxConstants$$.$CELL_DEFAULTS$][D.$DvtNBoxConstants$$.$LABEL_HALIGN$]);
  var $rtl$$32$$ = (0,D.$DvtAgent$isRightToLeft$$)($nbox$$147$$.$getCtx$());
  return"end" == $halign$$12$$ ? $rtl$$32$$ ? "left" : "right" : "center" == $halign$$12$$ ? "center" : $rtl$$32$$ ? "right" : "left"
};

  return D;
});
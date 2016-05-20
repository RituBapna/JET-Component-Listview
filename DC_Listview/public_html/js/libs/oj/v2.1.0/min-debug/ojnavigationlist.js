/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojbutton", "ojs/ojmenu", "ojs/ojlistview"], function($oj$$20$$, $$$$19$$) {
  $oj$$20$$.$DefaultNavListHandler$ = function $$oj$$20$$$$DefaultNavListHandler$$($widget$$9$$, $root$$25$$, $component$$24$$) {
    this.$m_widget$ = $widget$$9$$;
    this.$m_root$ = $root$$25$$;
    this.$m_component$ = $component$$24$$;
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$Destroy$ = function $$oj$$20$$$$DefaultNavListHandler$$$$Destroy$$() {
    this.$m_root$.removeClass("oj-navigationlist-expanded oj-navigationlist-vertical");
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$Expand$ = function $$oj$$20$$$$DefaultNavListHandler$$$$Expand$$() {
    return Promise.resolve(null);
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$Collapse$ = function $$oj$$20$$$$DefaultNavListHandler$$$$Collapse$$() {
    return Promise.resolve(null);
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$HandleExpandAndCollapseKeys$ = function $$oj$$20$$$$DefaultNavListHandler$$$$HandleExpandAndCollapseKeys$$() {
    return!1;
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$ModifyListItem$ = function $$oj$$20$$$$DefaultNavListHandler$$$$ModifyListItem$$() {
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$UpdateAriaPropertiesOnSelectedItem$ = function $$oj$$20$$$$DefaultNavListHandler$$$$UpdateAriaPropertiesOnSelectedItem$$($elem$$82$$, $highlight$$1$$) {
    $elem$$82$$.attr("aria-selected", $highlight$$1$$ ? "true" : "false");
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$BeforeRenderComplete$ = function $$oj$$20$$$$DefaultNavListHandler$$$$BeforeRenderComplete$$() {
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$ItemInsertComplete$ = function $$oj$$20$$$$DefaultNavListHandler$$$$ItemInsertComplete$$() {
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$ItemRemoveComplete$ = function $$oj$$20$$$$DefaultNavListHandler$$$$ItemRemoveComplete$$() {
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$HandleArrowKeys$ = function $$oj$$20$$$$DefaultNavListHandler$$$$HandleArrowKeys$$($keyCode$$17$$, $isExtend$$3$$, $event$$410$$) {
    return $_ojNavigationListView$$.$superclass$.$HandleArrowKeys$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$IsArrowKey$ = function $$oj$$20$$$$DefaultNavListHandler$$$$IsArrowKey$$($keyCode$$18$$) {
    return $_ojNavigationListView$$.$superclass$.$IsArrowKey$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$GetState$ = function $$oj$$20$$$$DefaultNavListHandler$$$$GetState$$($item$$81$$) {
    return $_ojNavigationListView$$.$superclass$.$GetState$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$SetState$ = function $$oj$$20$$$$DefaultNavListHandler$$$$SetState$$($item$$82$$, $state$$7$$) {
    $_ojNavigationListView$$.$superclass$.$SetState$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.Init = function $$oj$$20$$$$DefaultNavListHandler$$$Init$() {
    this.$m_root$.addClass("oj-navigationlist-expanded oj-navigationlist-vertical");
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$IsSelectable$ = function $$oj$$20$$$$DefaultNavListHandler$$$$IsSelectable$$($item$$83$$) {
    return $_ojNavigationListView$$.$superclass$.$IsSelectable$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$RestoreItem$ = function $$oj$$20$$$$DefaultNavListHandler$$$$RestoreItem$$() {
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$CollapseCurrentList$ = function $$oj$$20$$$$DefaultNavListHandler$$$$CollapseCurrentList$$() {
  };
  $oj$$20$$.$DefaultNavListHandler$.prototype.$setOptions$ = function $$oj$$20$$$$DefaultNavListHandler$$$$setOptions$$() {
  };
  $oj$$20$$.$HorizontalNavListHandler$ = function $$oj$$20$$$$HorizontalNavListHandler$$($widget$$10$$, $root$$26$$, $component$$25$$) {
    $oj$$20$$.$HorizontalNavListHandler$.$superclass$.constructor.call(this, $widget$$10$$, $root$$26$$, $component$$25$$);
  };
  $oj$$20$$.$Object$.$createSubclass$($oj$$20$$.$HorizontalNavListHandler$, $oj$$20$$.$DefaultNavListHandler$, "oj.HorizontalNavListHandler");
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$Destroy$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$Destroy$$() {
    this.$m_root$.removeClass("oj-navigationlist-expanded oj-navigationlist-horizontal");
    this.$m_root$.find("." + this.$m_widget$.$DIVIDER_STYLE_CLASS$).remove();
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$UpdateAriaPropertiesOnSelectedItem$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$UpdateAriaPropertiesOnSelectedItem$$($elem$$85$$, $highlight$$2$$) {
    $elem$$85$$.attr("aria-pressed", $highlight$$2$$ ? "true" : "false");
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$HandleArrowKeys$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$HandleArrowKeys$$($keyCode$$19_processed$$7$$, $isExtend$$4$$, $event$$411$$) {
    $keyCode$$19_processed$$7$$ === $$$$19$$.ui.keyCode.LEFT ? $keyCode$$19_processed$$7$$ = this.$m_widget$.$isRtl$() ? $$$$19$$.ui.keyCode.DOWN : $$$$19$$.ui.keyCode.UP : $keyCode$$19_processed$$7$$ === $$$$19$$.ui.keyCode.RIGHT && ($keyCode$$19_processed$$7$$ = this.$m_widget$.$isRtl$() ? $$$$19$$.ui.keyCode.UP : $$$$19$$.ui.keyCode.DOWN);
    $keyCode$$19_processed$$7$$ = $_ojNavigationListView$$.$superclass$.$HandleArrowKeys$.call(this.$m_widget$, $keyCode$$19_processed$$7$$, $isExtend$$4$$, $event$$411$$);
    "top" === this.$m_widget$.$ojContext$.options.edge && this.$m_widget$.$m_active$.elem[0].scrollIntoView(!1);
    return $keyCode$$19_processed$$7$$;
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$IsArrowKey$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$IsArrowKey$$($keyCode$$20$$) {
    return $keyCode$$20$$ === this.$m_widget$.$UP_KEY$ || $keyCode$$20$$ === this.$m_widget$.$DOWN_KEY$ || $keyCode$$20$$ === this.$m_widget$.$LEFT_KEY$ || $keyCode$$20$$ === this.$m_widget$.$RIGHT_KEY$;
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$ModifyListItem$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$ModifyListItem$$($$item$$1_focusableElement$$) {
    $$item$$1_focusableElement$$ = this.$m_widget$.$getSingleFocusableElement$($$item$$1_focusableElement$$);
    $$item$$1_focusableElement$$.attr("role", "button");
    $$item$$1_focusableElement$$[0].hasAttribute("aria-selected") && ($$item$$1_focusableElement$$.attr("aria-pressed", "false"), $$item$$1_focusableElement$$.removeAttr("aria-selected"));
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$BeforeRenderComplete$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$BeforeRenderComplete$$() {
    var $self$$143$$ = this;
    this.$m_widget$.element.attr("role", "toolbar");
    this.$m_widget$.element.find("." + this.$m_widget$.$getItemElementStyleClass$() + ":visible").each(function($index$$185$$) {
      0 < $index$$185$$ && $self$$143$$.$_addSeparator$(this, $index$$185$$);
    });
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$_addSeparator$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$_addSeparator$$($elem$$86$$, $index$$186$$) {
    var $$elem$$ = $$$$19$$($elem$$86$$), $previousElement$$1$$ = $$elem$$.prev();
    0 < $index$$186$$ && $$elem$$.is(":visible") && $previousElement$$1$$.length && !$previousElement$$1$$.is("li." + this.$m_widget$.$DIVIDER_STYLE_CLASS$) && $$elem$$.before('\x3cli role\x3d"separator" class\x3d"' + this.$m_widget$.$DIVIDER_STYLE_CLASS$ + '"\x3e\x3c/li\x3e');
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$ItemInsertComplete$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$ItemInsertComplete$$($elem$$87$$, $context$$102$$) {
    this.$_addSeparator$($elem$$87$$, $context$$102$$.index);
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$ItemRemoveComplete$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$ItemRemoveComplete$$($$elem$$1_elem$$88_nextElement$$) {
    $$elem$$1_elem$$88_nextElement$$ = $$$$19$$($$elem$$1_elem$$88_nextElement$$);
    var $previousElement$$2$$ = $$elem$$1_elem$$88_nextElement$$.prev();
    $previousElement$$2$$.length && $previousElement$$2$$.is("li." + this.$m_widget$.$DIVIDER_STYLE_CLASS$) ? $previousElement$$2$$.remove() : ($$elem$$1_elem$$88_nextElement$$ = $$elem$$1_elem$$88_nextElement$$.next(), $$elem$$1_elem$$88_nextElement$$.is("li." + this.$m_widget$.$DIVIDER_STYLE_CLASS$) && $$elem$$1_elem$$88_nextElement$$.remove());
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$IsSelectable$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$IsSelectable$$($item$$85$$) {
    return this.$m_widget$.$getFocusItem$($$$$19$$($item$$85$$))[0].hasAttribute("aria-pressed");
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.Init = function $$oj$$20$$$$HorizontalNavListHandler$$$Init$() {
    this.$m_root$.addClass("oj-navigationlist-expanded oj-navigationlist-horizontal");
  };
  $oj$$20$$.$HorizontalNavListHandler$.prototype.$RestoreItem$ = function $$oj$$20$$$$HorizontalNavListHandler$$$$RestoreItem$$() {
  };
  $oj$$20$$.$CollapsibleNavListHandler$ = function $$oj$$20$$$$CollapsibleNavListHandler$$($widget$$11$$, $root$$27$$, $component$$26$$) {
    $oj$$20$$.$CollapsibleNavListHandler$.$superclass$.constructor.call(this, $widget$$11$$, $root$$27$$, $component$$26$$);
  };
  $oj$$20$$.$Object$.$createSubclass$($oj$$20$$.$CollapsibleNavListHandler$, $oj$$20$$.$DefaultNavListHandler$, "oj.CollapsibleNavListHandler");
  $oj$$20$$.$CollapsibleNavListHandler$.prototype.$Destroy$ = function $$oj$$20$$$$CollapsibleNavListHandler$$$$Destroy$$() {
    this.$m_root$.removeClass("oj-navigationlist-collapsible oj-navigationlist-vertical");
  };
  $oj$$20$$.$CollapsibleNavListHandler$.prototype.Init = function $$oj$$20$$$$CollapsibleNavListHandler$$$Init$() {
    this.$m_root$.addClass("oj-navigationlist-collapsible oj-navigationlist-vertical");
  };
  $oj$$20$$.$CollapsibleNavListHandler$.prototype.$Expand$ = function $$oj$$20$$$$CollapsibleNavListHandler$$$$Expand$$($groupItem$$18$$, $animate$$8$$, $event$$412$$) {
    return $_ojNavigationListView$$.$superclass$.$AnimateExpand$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$CollapsibleNavListHandler$.prototype.$Collapse$ = function $$oj$$20$$$$CollapsibleNavListHandler$$$$Collapse$$($item$$87$$, $animate$$9$$, $event$$413$$) {
    return $_ojNavigationListView$$.$superclass$.$AnimateCollapse$.apply(this.$m_widget$, arguments);
  };
  $oj$$20$$.$CollapsibleNavListHandler$.prototype.$HandleExpandAndCollapseKeys$ = function $$oj$$20$$$$CollapsibleNavListHandler$$$$HandleExpandAndCollapseKeys$$($event$$414$$, $keyCode$$21$$, $current$$16$$, $currentItemKey$$1$$) {
    var $isGroupItem$$1$$ = 0 < $current$$16$$.children("." + this.$m_widget$.$getGroupStyleClass$()).length;
    if ($keyCode$$21$$ === this.$m_widget$.$LEFT_KEY$ || $keyCode$$21$$ === this.$m_widget$.$RIGHT_KEY$) {
      return $keyCode$$21$$ === this.$m_widget$.$LEFT_KEY$ && !this.$m_widget$.$isRtl$() || $keyCode$$21$$ === this.$m_widget$.$RIGHT_KEY$ && this.$m_widget$.$isRtl$() ? this.$m_widget$.$GetState$($current$$16$$) === this.$m_widget$.$STATE_EXPANDED$ && this.$m_widget$.$CollapseItem$($current$$16$$, $event$$414$$, !0, $currentItemKey$$1$$, !0, !0) : this.$m_widget$.$GetState$($current$$16$$) === this.$m_widget$.$STATE_COLLAPSED$ && this.$m_widget$.$ExpandItem$($current$$16$$, $event$$414$$, !0, $currentItemKey$$1$$, 
      !0, !0, !0), !0;
    }
    if ($isGroupItem$$1$$ && ($keyCode$$21$$ === $$$$19$$.ui.keyCode.ENTER || $keyCode$$21$$ === $$$$19$$.ui.keyCode.SPACE)) {
      if (0 >= $current$$16$$.length) {
        return;
      }
      this.$m_widget$.$GetState$($current$$16$$) === this.$m_widget$.$STATE_COLLAPSED$ ? this.$m_widget$.$ExpandItem$($current$$16$$, null, !0, $currentItemKey$$1$$, !0, !0, !0) : this.$m_widget$.$GetState$($current$$16$$) === this.$m_widget$.$STATE_EXPANDED$ && this.$m_widget$.$CollapseItem$($current$$16$$, null, !0, $currentItemKey$$1$$, !0, !0);
      return!0;
    }
    return!1;
  };
  $oj$$20$$.$CollapsibleNavListHandler$.prototype.$RestoreItem$ = function $$oj$$20$$$$CollapsibleNavListHandler$$$$RestoreItem$$() {
  };
  $oj$$20$$.$SlidingNavListHandler$ = function $$oj$$20$$$$SlidingNavListHandler$$($widget$$12$$, $root$$28$$, $component$$27$$) {
    $oj$$20$$.$SlidingNavListHandler$.$superclass$.constructor.call(this, $widget$$12$$, $root$$28$$, $component$$27$$);
    this.$m_expanded$ = [];
  };
  $oj$$20$$.$Object$.$createSubclass$($oj$$20$$.$SlidingNavListHandler$, $oj$$20$$.$CollapsibleNavListHandler$, "oj.SlidingNavListHandler");
  $oj$$20$$.$SlidingNavListHandler$.prototype.$Destroy$ = function $$oj$$20$$$$SlidingNavListHandler$$$$Destroy$$() {
    this.$m_root$.removeClass("oj-navigationlist-slider oj-navigationlist-vertical");
    this.$_toolbar$.remove();
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$_slideAnimation$ = function $$oj$$20$$$$SlidingNavListHandler$$$$_slideAnimation$$($item$$89$$, $isMovingNext$$, $focusableElement$$1$$, $event$$415$$, $animationResolve$$4$$) {
    var $self$$144$$ = this, $list_root$$ = this.$m_widget$.$getRootElement$(), $contentWidth$$ = $list_root$$.outerWidth() / 2, $isRtl$$1$$ = this.$m_widget$.$isRtl$();
    $isMovingNext$$ || ($contentWidth$$ *= -1);
    var $hasFocusAncestor$$ = this.$m_widget$.$getRootElement$().hasClass("oj-focus-ancestor");
    $isRtl$$1$$ ? ($list_root$$.css({"margin-right":$contentWidth$$}), $list_root$$.animate({"margin-right":"0px"}, 400, "swing", function() {
      $self$$144$$.$_slideAnimationComplete$($item$$89$$, $isMovingNext$$, $focusableElement$$1$$, $event$$415$$, $hasFocusAncestor$$);
      $animationResolve$$4$$(null);
    })) : ($list_root$$.css({"margin-left":$contentWidth$$}), $list_root$$.animate({"margin-left":"0px"}, 400, "swing", function() {
      $self$$144$$.$_slideAnimationComplete$($item$$89$$, $isMovingNext$$, $focusableElement$$1$$, $event$$415$$, $hasFocusAncestor$$);
      $animationResolve$$4$$(null);
    }));
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$_slideAnimationComplete$ = function $$oj$$20$$$$SlidingNavListHandler$$$$_slideAnimationComplete$$($item$$90$$, $isMovingNext$$1$$, $focusableElement$$2$$, $event$$416$$, $needFocusAncestor$$) {
    null !== this.$m_widget$.$m_contentHandler$ && ($focusableElement$$2$$ && ($needFocusAncestor$$ && this.$m_widget$.$getRootElement$().addClass("oj-focus-ancestor"), this.$m_widget$.$HandleClickActive$($focusableElement$$2$$, $event$$416$$)), $isMovingNext$$1$$ ? this.$m_widget$.$AnimateExpandComplete$($item$$90$$.children("." + this.$m_widget$.$getGroupStyleClass$())) : this.$m_widget$.$AnimateCollapseComplete$($item$$90$$.children("." + this.$m_widget$.$getGroupStyleClass$())));
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$Expand$ = function $$oj$$20$$$$SlidingNavListHandler$$$$Expand$$($groupItem$$19$$, $animate$$10$$, $event$$417$$) {
    var $animationResolve$$5$$, $animationPromise$$4$$ = new Promise(function($resolve$$35$$) {
      $animationResolve$$5$$ = $resolve$$35$$;
    }), $target$$118$$ = $$$$19$$($groupItem$$19$$).parents(".oj-navigationlist-item-element:first"), $sublist$$3$$ = $target$$118$$.children("." + this.$m_widget$.$getGroupStyleClass$()), $parentLabel$$, $nextFocusableItem$$ = null, $currentListRoot$$ = $target$$118$$.closest("." + this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$);
    if (0 < $currentListRoot$$.length) {
      $currentListRoot$$.removeClass(this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$);
      $target$$118$$.addClass(this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$);
      var $nextFocusableItem$$ = $sublist$$3$$.find("." + this.$m_widget$.$getItemElementStyleClass$() + ":eq(0)"), $listOfParents$$ = $target$$118$$.parentsUntil($currentListRoot$$, "ul"), $listOfParents$$ = $currentListRoot$$.is(this.$m_widget$.element) ? $listOfParents$$.get().concat($currentListRoot$$.get()) : $listOfParents$$.get(), $self$$145$$ = this, $itemNode$$, $listOfParents$$ = $$$$19$$($listOfParents$$.reverse());
      $listOfParents$$.each(function($i$$340$$, $parentList$$) {
        $parentLabel$$ = $$$$19$$($parentList$$).is($self$$145$$.$m_widget$.element) ? $self$$145$$.$m_widget$.$getRootLabel$() : $self$$145$$.$m_widget$.$getItemLabel$($$$$19$$($parentList$$).parent());
        $itemNode$$ = $i$$340$$ === $listOfParents$$.length - 1 ? $target$$118$$ : $$$$19$$($listOfParents$$.get($i$$340$$ + 1)).parent();
        $self$$145$$.$_addItemToHviewMenu$($self$$145$$.$m_widget$.$GetKey$($itemNode$$[0]), $self$$145$$.$m_widget$.$getItemLabel$($itemNode$$), $parentLabel$$);
        $self$$145$$.$m_expanded$.push($itemNode$$);
      });
    }
    $animate$$10$$ ? this.$_slideAnimation$($target$$118$$, !0, $nextFocusableItem$$, $event$$417$$, $animationResolve$$5$$) : (this.$_slideAnimationComplete$($target$$118$$, !0, $nextFocusableItem$$, $event$$417$$, !1), $animationResolve$$5$$(null));
    this.$m_widget$.element.focus();
    $target$$118$$.siblings().attr("aria-hidden", "true");
    $target$$118$$.children("." + this.$m_widget$.$getGroupItemStyleClass$()).children("." + this.$m_widget$.$ITEM_CONTENT_STYLE_CLASS$).attr("aria-hidden", "true");
    $sublist$$3$$.removeAttr("aria-hidden");
    $groupItem$$19$$.css("display", "");
    $target$$118$$.addClass("oj-skipfocus");
    return $animationPromise$$4$$;
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$Collapse$ = function $$oj$$20$$$$SlidingNavListHandler$$$$Collapse$$($target$$119$$, $animate$$11$$, $event$$418$$) {
    var $animationResolve$$6$$, $animationPromise$$5$$ = new Promise(function($resolve$$36$$) {
      $animationResolve$$6$$ = $resolve$$36$$;
    }), $currentList$$ = $target$$119$$.children("." + this.$m_widget$.$getGroupStyleClass$()), $parentlist$$ = $target$$119$$.parent();
    $target$$119$$.children("." + this.$m_widget$.$getGroupItemStyleClass$()).children("." + this.$m_widget$.$ITEM_CONTENT_STYLE_CLASS$).removeAttr("aria-hidden");
    $currentList$$.attr("aria-hidden", "true");
    $target$$119$$.siblings().removeAttr("aria-hidden");
    $target$$119$$.removeClass("oj-skipfocus");
    $target$$119$$.removeClass(this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$);
    0 === $target$$119$$.closest("." + this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$).length && ($parentlist$$.closest("." + this.$m_widget$.$getItemElementStyleClass$()).addClass(this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$), this.$m_widget$.element.is($parentlist$$) && this.$m_widget$.element.addClass(this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$));
    $animate$$11$$ ? this.$_slideAnimation$($target$$119$$, !1, $currentList$$.parent(), $event$$418$$, $animationResolve$$6$$) : (this.$_slideAnimationComplete$($target$$119$$, !1, $currentList$$.parent(), $event$$418$$, !1), $animationResolve$$6$$(null));
    this.$_removeItemFromHviewMenu$();
    this.$m_widget$.element.focus();
    return $animationPromise$$5$$;
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$UpdateAriaPropertiesOnSelectedItem$ = function $$oj$$20$$$$SlidingNavListHandler$$$$UpdateAriaPropertiesOnSelectedItem$$($elem$$89$$, $highlight$$3$$) {
    $highlight$$3$$ ? $elem$$89$$.attr("aria-describedby", "selectedLabel") : $elem$$89$$.removeAttr("aria-describedby");
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$GetState$ = function $$oj$$20$$$$SlidingNavListHandler$$$$GetState$$($expanded$$8_item$$91$$) {
    $expanded$$8_item$$91$$ = this.$m_widget$.$getFocusItem$($expanded$$8_item$$91$$).attr("aria-expanded");
    return "true" === $expanded$$8_item$$91$$ ? this.$m_widget$.$STATE_EXPANDED$ : "false" === $expanded$$8_item$$91$$ ? this.$m_widget$.$STATE_COLLAPSED$ : this.$m_widget$.$STATE_NONE$;
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$SetState$ = function $$oj$$20$$$$SlidingNavListHandler$$$$SetState$$($item$$92$$, $state$$8$$) {
    $state$$8$$ === this.$m_widget$.$STATE_EXPANDED$ ? (this.$m_widget$.$getFocusItem$($item$$92$$).attr("aria-expanded", "true"), $item$$92$$.removeClass(this.$m_widget$.$COLLAPSED_STYLE_CLASS$).addClass(this.$m_widget$.$EXPANDED_STYLE_CLASS$)) : $state$$8$$ === this.$m_widget$.$STATE_COLLAPSED$ && (this.$m_widget$.$getFocusItem$($item$$92$$).attr("aria-expanded", "false"), $item$$92$$.removeClass(this.$m_widget$.$EXPANDED_STYLE_CLASS$).addClass(this.$m_widget$.$COLLAPSED_STYLE_CLASS$));
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$ModifyListItem$ = function $$oj$$20$$$$SlidingNavListHandler$$$$ModifyListItem$$($$item$$2$$, $itemContent$$5$$) {
    var $focusableElement$$3$$ = this.$m_widget$.$getFocusItem$($$item$$2$$);
    $focusableElement$$3$$.attr("role", "menuitem");
    $itemContent$$5$$.attr("id") || $itemContent$$5$$.uniqueId();
    var $groupItems$$4$$ = $$item$$2$$.children("." + this.$m_widget$.$getGroupStyleClass$());
    0 < $groupItems$$4$$.length && ($focusableElement$$3$$.attr("aria-haspopup", "true"), $groupItems$$4$$.attr("role", "menu"), $groupItems$$4$$.css("display", ""), $$item$$2$$.removeAttr("aria-expanded"), $focusableElement$$3$$.attr("aria-expanded", "false"));
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$BeforeRenderComplete$ = function $$oj$$20$$$$SlidingNavListHandler$$$$BeforeRenderComplete$$() {
    this.$m_widget$.element.attr("role", "menu");
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.Init = function $$oj$$20$$$$SlidingNavListHandler$$$Init$($opts$$24$$) {
    this.$m_root$.addClass("oj-navigationlist-slider oj-navigationlist-vertical");
    $opts$$24$$.element.addClass("oj-navigationlist-current");
    this.$_buildSlidingNavListHeader$($opts$$24$$);
    this.$_initializeHierarchicalView$();
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$_buildSlidingNavListHeader$ = function $$oj$$20$$$$SlidingNavListHandler$$$$_buildSlidingNavListHeader$$($opts$$25$$) {
    var $selectedLabel$$;
    this.$_toolbar$ = $$$$19$$(document.createElement("div"));
    this.$_toolbar$.addClass("oj-navigationlist-toolbar");
    this.$_previousLink$ = $$$$19$$(document.createElement("a"));
    this.$_prevIcon$ = $$$$19$$(document.createElement("span"));
    this.$_prevIcon$.addClass("oj-navigationlist-previous-icon oj-component-icon oj-clickable-icon-nocontext").attr("role", "img").attr("alt", this.$m_component$.$getTranslatedString$("previousIcon"));
    this.$_prevIcon$.css("visibility", "hidden");
    this.$_previousLink$.addClass("oj-navigationlist-previous-link").attr("tabindex", "-1").append(this.$_prevIcon$);
    this.$_headerLabel$ = $$$$19$$(document.createElement("label"));
    this.$_headerLabel$.addClass("oj-navigationlist-current-header").text(this.$m_widget$.$getRootLabel$());
    this.$_vSeparator$ = $$$$19$$(document.createElement("span"));
    this.$_vSeparator$.attr("role", "separator").attr("aria-orientation", "vertical").addClass("oj-navigationlist-toolbar-separator");
    this.$_hviewBtn$ = $$$$19$$(document.createElement("button"));
    this.$_hviewBtn$.addClass("oj-navigationlist-hierarchical-button");
    this.$_hviewMenu$ = $$$$19$$(document.createElement("ul"));
    this.$_hviewMenu$.addClass("oj-navigationlist-hierarchical-menu").hide();
    $selectedLabel$$ = $$$$19$$(document.createElement("label"));
    $selectedLabel$$.addClass("oj-helper-hidden-accessible").attr("aria-hidden", "true").attr("id", "selectedLabel");
    $selectedLabel$$.text(this.$m_component$.$getTranslatedString$("selectedLabel"));
    this.$_previousLink$.append(this.$_headerLabel$);
    this.$_toolbar$.append(this.$_previousLink$).append(this.$_vSeparator$).append(this.$_hviewBtn$).append(this.$_hviewMenu$).append($selectedLabel$$);
    this.$m_root$.prepend(this.$_toolbar$);
    this.$_showOrHideHierarchyMenu$($opts$$25$$.hierarchyMenuDisplayThresholdLevel);
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$CollapseCurrentList$ = function $$oj$$20$$$$SlidingNavListHandler$$$$CollapseCurrentList$$() {
    var $current$$17$$ = this.$m_expanded$.pop();
    $current$$17$$ && this.$m_widget$.$CollapseItem$($current$$17$$, null, !0, null, !0, !0);
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$_initializeHierarchicalView$ = function $$oj$$20$$$$SlidingNavListHandler$$$$_initializeHierarchicalView$$() {
    var $self$$147$$ = this, $menuid$$ = this.$_hviewMenu$.uniqueId().attr("id");
    this.$_hviewMenu$.ojMenu({openOptions:{position:{my:"end top", at:"end bottom"}}, select:function($event$$419$$, $ui$$16$$) {
      for (var $itemsToRemove$$ = $ui$$16$$.item.nextAll(), $currentKey$$, $item$$93$$, $expandedItems$$ = $self$$147$$.$m_expanded$, $targetItemKey$$ = $ui$$16$$.item.data("key");0 < $expandedItems$$.length && ($item$$93$$ = $expandedItems$$.pop(), $currentKey$$ = $self$$147$$.$m_widget$.$GetKey$($item$$93$$[0]), $self$$147$$.$m_widget$.$CollapseItem$($$$$19$$($item$$93$$), null, !0, $currentKey$$, !0, !0), $targetItemKey$$ !== $currentKey$$);) {
      }
      $itemsToRemove$$.remove();
      $ui$$16$$.item.remove();
      $self$$147$$.$_hviewMenu$.ojMenu("refresh");
    }});
    this.$_hviewBtn$.ojButton({label:this.$m_component$.$getTranslatedString$("hierMenuBtnLabel"), display:"icons", icons:{start:"oj-fwk-icon oj-hier-icon"}, menu:"#" + $menuid$$, disabled:!0, chroming:"half"});
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$_addItemToHviewMenu$ = function $$oj$$20$$$$SlidingNavListHandler$$$$_addItemToHviewMenu$$($itemKey$$, $label$$16$$, $parentLabel$$1$$) {
    if (this.$_hviewBtn$) {
      var $itemsinTree_menuItemLabel$$ = this.$_hviewMenu$.find("li").length, $menuListItem$$ = $$$$19$$(document.createElement("li")), $menuItem$$ = $$$$19$$(document.createElement("a"));
      $menuItem$$.attr("href", "#");
      $menuListItem$$.append($menuItem$$);
      if (0 < $itemsinTree_menuItemLabel$$) {
        for (var $i$$341$$ = 0;$i$$341$$ < $itemsinTree_menuItemLabel$$;$i$$341$$++) {
          0 < $i$$341$$ && $menuItem$$.append($$$$19$$(document.createElement("span")).addClass("oj-navigationlist-hvitem-space"));
        }
        $menuItem$$.append($$$$19$$(document.createElement("span")).addClass("oj-menu-item-icon oj-icon oj-navigationlist-level-indicator"));
      }
      $itemsinTree_menuItemLabel$$ = $$$$19$$(document.createElement("span")).addClass("oj-navigationlist-hierarchical-menu-label");
      $itemsinTree_menuItemLabel$$.text($parentLabel$$1$$);
      $menuItem$$.append($itemsinTree_menuItemLabel$$);
      $menuListItem$$.data("key", $itemKey$$);
      this.$_hviewMenu$.append($menuListItem$$);
      this.$_hviewMenu$.ojMenu("refresh");
      this.$_showOrHideHierarchyMenu$(this.$m_widget$.$GetOption$("hierarchyMenuDisplayThresholdLevel"));
      this.$_hviewBtn$.ojButton("option", "disabled", !1);
      this.$_prevIcon$.css("visibility", "visible");
      this.$_previousLink$.attr("tabindex", "0");
      this.$_headerLabel$.text($label$$16$$);
    }
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$setOptions$ = function $$oj$$20$$$$SlidingNavListHandler$$$$setOptions$$($options$$266$$) {
    this.$m_widget$.$GetOption$("hierarchyMenuDisplayThresholdLevel") !== $options$$266$$.hierarchyMenuDisplayThresholdLevel && this.$_showOrHideHierarchyMenu$($options$$266$$.hierarchyMenuDisplayThresholdLevel);
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$_showOrHideHierarchyMenu$ = function $$oj$$20$$$$SlidingNavListHandler$$$$_showOrHideHierarchyMenu$$($hierarchyMenuDisplayThresholdLevel$$) {
    var $itemsinTree$$1$$ = this.$_hviewMenu$.find("li").length;
    -1 === $hierarchyMenuDisplayThresholdLevel$$ || $itemsinTree$$1$$ < $hierarchyMenuDisplayThresholdLevel$$ ? (this.$_vSeparator$.css("visibility", "hidden"), this.$_hviewBtn$.css("visibility", "hidden")) : $itemsinTree$$1$$ >= $hierarchyMenuDisplayThresholdLevel$$ && (this.$_vSeparator$.css("visibility", "visible"), this.$_hviewBtn$.css("visibility", "visible"));
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$_removeItemFromHviewMenu$ = function $$oj$$20$$$$SlidingNavListHandler$$$$_removeItemFromHviewMenu$$() {
    if (this.$_hviewBtn$) {
      var $removed$$3$$ = this.$_hviewMenu$.find("li").last().remove();
      this.$_hviewMenu$.ojMenu("refresh");
      this.$_showOrHideHierarchyMenu$(this.$m_widget$.$GetOption$("hierarchyMenuDisplayThresholdLevel"));
      0 === this.$_hviewMenu$.children("li").length ? (this.$_hviewBtn$.ojButton("option", "disabled", !0), this.$_prevIcon$.css("visibility", "hidden"), this.$_previousLink$.attr("tabindex", "-1"), this.$_headerLabel$.text(this.$m_widget$.$getRootLabel$())) : this.$_headerLabel$.text($removed$$3$$.children("a").text());
    }
  };
  $oj$$20$$.$SlidingNavListHandler$.prototype.$RestoreItem$ = function $$oj$$20$$$$SlidingNavListHandler$$$$RestoreItem$$($item$$94$$, $itemContent$$6$$) {
    $item$$94$$.removeClass(this.$m_widget$.$SLIDING_NAVLIST_CURRENT_STYLE_CLASS$);
    $itemContent$$6$$.removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-describedby").removeAttr("aria-hidden");
  };
  var $_ojNavigationListView$$ = function($SuperClass$$2$$, $methods$$3$$) {
    function $constructor$$3$$() {
    }
    $oj$$20$$.$Object$.$createSubclass$($constructor$$3$$, $SuperClass$$2$$, "");
    $$$$19$$.extend($constructor$$3$$.prototype, $methods$$3$$);
    return $constructor$$3$$;
  }($oj$$20$$.$_ojListView$, {$ITEM_CONTENT_STYLE_CLASS$:"oj-navigationlist-item-content", $EXPANDED_STYLE_CLASS$:"oj-expanded", $COLLAPSED_STYLE_CLASS$:"oj-collapsed", $SLIDING_NAVLIST_CURRENT_STYLE_CLASS$:"oj-navigationlist-current", $DIVIDER_STYLE_CLASS$:"oj-navigationlist-divider", $_CATEGORY_DIVIDER_STYLE_CLASS$:"oj-navigationlist-category-divider", $_ITEM_LABEL_STYLE_CLASS$:"oj-navigationlist-item-label", $_ICON_ONLY_STYLE_CLASS$:"oj-navigationlist-icon-only", $_ITEM_ICON_STYLE_CLASS$:"oj-navigationlist-item-icon", 
  $_HORIZONTAL_NAVLIST_STYLE_CLASS$:"oj-navigationlist-horizontal", $_NAVLIST_HAS_ICONS$:"oj-navigationlist-has-icons", $_NAVLIST_ITEM_HAS_NO_ICON$:"oj-navigationlist-item-no-icon", $_NAVLIST_ITEM_TITLE$:"oj-navigationlist-item-title", $_NAVLIST_STYLE_CLASS$:"oj-navigationlist", $_NAVLIST_TOUCH_STYLE_CLASS$:"oj-navigationlist-touch", $_NAVLIST_LISTVIEW_CONTAINER_STYLE_CLASS$:"oj-navigationlist-listview-container", $_IS_TITLE_ATTR_ADDED_DUE_TO_TRUNCATION$:"IsTitleAttrDueToTruncation", $_APPLICATION_LEVEL_NAV_STYLE_CLASS$:"oj-navigationlist-app-level", 
  $_PAGE_LEVEL_NAV_STYLE_CLASS$:"oj-navigationlist-page-level", $_NAVLIST_ITEM_ICON_HAS_TITLE$:"navigationListItemIconHastitle", $_NAVLIST_NO_FOLLOW_LINK_CLASS$:"oj-navigationlist-nofollow-link", $getItemLabel$:function($itemContent$$7_target$$120$$) {
    $itemContent$$7_target$$120$$ = this.$getItemContentElement$($itemContent$$7_target$$120$$);
    return $itemContent$$7_target$$120$$.is("a") ? $$$$19$$.trim($itemContent$$7_target$$120$$.text()) : $$$$19$$.trim($itemContent$$7_target$$120$$.find("." + this.$_NAVLIST_ITEM_TITLE$).text());
  }, $getItemContentElement$:function($item$$95$$) {
    var $itemContent$$8$$ = $item$$95$$.children("." + this.$ITEM_CONTENT_STYLE_CLASS$);
    0 === $itemContent$$8$$.length && ($itemContent$$8$$ = $item$$95$$.children("." + this.$getGroupItemStyleClass$()).children("." + this.$ITEM_CONTENT_STYLE_CLASS$), 0 === $itemContent$$8$$.length && ($itemContent$$8$$ = $item$$95$$.children("." + this.$getGroupItemStyleClass$()).children(":not(." + this.$getExpandIconStyleClass$() + "):not(." + this.$getCollapseIconStyleClass$() + ")")));
    return $itemContent$$8$$;
  }, $isRtl$:function() {
    return "rtl" === this.$ojContext$.$_GetReadingDirection$();
  }, $renderComplete$:function() {
    this.$m_listHandler$.$BeforeRenderComplete$();
    $_ojNavigationListView$$.$superclass$.$renderComplete$.apply(this, arguments);
  }, $itemInsertComplete$:function($elem$$90$$, $context$$103$$) {
    this.$m_listHandler$.$ItemInsertComplete$($elem$$90$$, $context$$103$$);
  }, $itemRemoveComplete$:function($elem$$91$$) {
    this.$m_listHandler$.$ItemRemoveComplete$($elem$$91$$);
    $_ojNavigationListView$$.$superclass$.$itemRemoveComplete$.apply(this, arguments);
  }, $_restoreContent$:function($i$$342_list$$10$$) {
    var $items$$8$$ = $i$$342_list$$10$$.children();
    $i$$342_list$$10$$.removeAttr("style").removeClass(this.$_NAVLIST_HAS_ICONS$).removeAttr("aria-hidden");
    for ($i$$342_list$$10$$ = 0;$i$$342_list$$10$$ < $items$$8$$.length;$i$$342_list$$10$$++) {
      var $item$$96$$ = $items$$8$$[$i$$342_list$$10$$], $item$$96$$ = $$$$19$$($item$$96$$);
      if ($item$$96$$.hasClass(this.$DIVIDER_STYLE_CLASS$)) {
        $item$$96$$.remove();
      } else {
        var $itemContent$$9$$ = this.$getItemContentElement$($item$$96$$);
        $itemContent$$9$$.removeClass(this.$ITEM_CONTENT_STYLE_CLASS$).removeClass(this.$_NAVLIST_ITEM_HAS_NO_ICON$).removeAttr("aria-haspopup");
        var $focusableItem_itemIcon_sublist$$5$$ = $itemContent$$9$$.children("." + this.$_ITEM_ICON_STYLE_CLASS$);
        $focusableItem_itemIcon_sublist$$5$$ && 0 < $focusableItem_itemIcon_sublist$$5$$.length && ($focusableItem_itemIcon_sublist$$5$$.removeAttr("role"), $focusableItem_itemIcon_sublist$$5$$.removeAttr("aria-label"), this.$_removeToolTipOnIcon$($focusableItem_itemIcon_sublist$$5$$));
        $item$$96$$.removeClass("oj-default").removeAttr("role").removeAttr("aria-disabled").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-pressed");
        $focusableItem_itemIcon_sublist$$5$$ = this.$getFocusItem$($item$$96$$);
        $focusableItem_itemIcon_sublist$$5$$.removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-pressed");
        $itemContent$$9$$.children("." + this.$_ITEM_LABEL_STYLE_CLASS$).contents().unwrap();
        $focusableItem_itemIcon_sublist$$5$$.data(this.$_IS_TITLE_ATTR_ADDED_DUE_TO_TRUNCATION$) && $focusableItem_itemIcon_sublist$$5$$.removeAttr("title");
        $focusableItem_itemIcon_sublist$$5$$ = $item$$96$$.children("ul");
        0 < $focusableItem_itemIcon_sublist$$5$$.length ? (this.$m_listHandler$.$RestoreItem$($item$$96$$, $itemContent$$9$$, $focusableItem_itemIcon_sublist$$5$$), this.$_restoreContent$($focusableItem_itemIcon_sublist$$5$$)) : this.$m_listHandler$.$RestoreItem$($item$$96$$, $itemContent$$9$$);
      }
    }
  }, $IsNodeEditableOrClickable$:function($node$$77$$) {
    return $node$$77$$.hasClass(this.$ITEM_CONTENT_STYLE_CLASS$) || $node$$77$$.hasClass(this.$getExpandIconStyleClass$()) || $node$$77$$.hasClass(this.$getCollapseIconStyleClass$()) ? !1 : $_ojNavigationListView$$.$superclass$.$IsNodeEditableOrClickable$.apply(this, arguments);
  }, $IsElementEditableOrClickable$:function($node$$78$$) {
    return $node$$78$$.prop("nodeName").match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/) && !$node$$78$$.hasClass(this.$ITEM_CONTENT_STYLE_CLASS$) || $node$$78$$.hasClass("oj-component");
  }, $_prepareListViewOptions$:function($navlistOptions$$) {
    var $opts$$26$$ = {drillMode:"none" !== $navlistOptions$$.drillMode ? "collapsible" : "none", selection:null !== $navlistOptions$$.selection ? [$navlistOptions$$.selection] : [], item:$navlistOptions$$.item, data:$navlistOptions$$.data, selectionMode:"single"};
    $opts$$26$$.element = this.$_list$;
    $opts$$26$$.item.focusable = function $$opts$$26$$$item$focusable$($context$$104$$) {
      return $$$$19$$($context$$104$$.data).is("li") ? !$$$$19$$($context$$104$$.data).hasClass("oj-disabled") : !$$$$19$$($context$$104$$.parentElement).hasClass("oj-disabled");
    };
    return $opts$$26$$ = $$$$19$$.extend($$$$19$$.extend({}, $navlistOptions$$), $opts$$26$$);
  }, $getRootLabel$:function() {
    return this.$ojContext$.options.rootLabel ? this.$ojContext$.options.rootLabel : this.$ojContext$.$getTranslatedString$("defaultRootLabel");
  }, $SetAriaProperties$:function() {
    var $ariaLabelId$$ = this.$ojContext$.element.attr("aria-labelledby");
    $ariaLabelId$$ ? (this.element.attr("aria-labelledby", $ariaLabelId$$), this.$ojContext$.element.removeAttr("aria-labelledby")) : this.element.attr("aria-label", this.$getRootLabel$());
    $_ojNavigationListView$$.$superclass$.$SetAriaProperties$.apply(this, arguments);
  }, $UnsetAriaProperties$:function() {
    this.element.attr("aria-labelledby") && (this.$ojContext$.element.attr("aria-labelledby", this.element.attr("aria-labelledby")), this.element.removeAttr("aria-labelledby"));
    this.element.attr("aria-label") && this.element.removeAttr("aria-label");
    $_ojNavigationListView$$.$superclass$.$UnsetAriaProperties$.apply(this, arguments);
  }, $init$:function($navlistopts_opts$$28$$) {
    var $self$$148$$ = this, $element$$145_listViewContainer$$ = $navlistopts_opts$$28$$.$ojContext$.element;
    $element$$145_listViewContainer$$.addClass(this.$_NAVLIST_STYLE_CLASS$);
    $oj$$20$$.$DomUtils$.$isTouchSupported$() && $element$$145_listViewContainer$$.addClass(this.$_NAVLIST_TOUCH_STYLE_CLASS$);
    this.$_list$ = $element$$145_listViewContainer$$.children("ul:first");
    0 === this.$_list$.length && (this.$_list$ = $$$$19$$(document.createElement("ul")), $element$$145_listViewContainer$$.append(this.$_list$));
    $element$$145_listViewContainer$$ = $$$$19$$(document.createElement("div"));
    $element$$145_listViewContainer$$.addClass(this.$_NAVLIST_LISTVIEW_CONTAINER_STYLE_CLASS$);
    this.$_list$.wrap($element$$145_listViewContainer$$);
    $navlistopts_opts$$28$$ = this.$_prepareListViewOptions$($navlistopts_opts$$28$$);
    $_ojNavigationListView$$.$superclass$.$init$.call(this, $navlistopts_opts$$28$$);
    this.element.removeClass("oj-component-initnode");
    this.$ojContext$._on(this.$ojContext$.element, {mouseup:function($event$$420$$) {
      $self$$148$$.$_clearActiveState$($event$$420$$);
    }, "click .oj-navigationlist-previous-link":function() {
      $self$$148$$.$_collapseCurrentList$();
    }, "keydown .oj-navigationlist-previous-link":function($event$$422$$) {
      $event$$422$$.keyCode === $$$$19$$.ui.keyCode.ENTER && $self$$148$$.$_collapseCurrentList$();
    }, "keydown .oj-navigationlist-element":function($event$$423$$) {
      $event$$423$$.keyCode !== $$$$19$$.ui.keyCode.ESCAPE || $event$$423$$.isDefaultPrevented() || $self$$148$$.$_collapseCurrentList$();
    }, "mouseenter a.oj-navigationlist-item-content":function($$itemLink_event$$424$$) {
      $$itemLink_event$$424$$ = $$$$19$$($$itemLink_event$$424$$.currentTarget);
      var $$label$$ = $$itemLink_event$$424$$.find("." + $self$$148$$.$_ITEM_LABEL_STYLE_CLASS$);
      $$label$$[0].offsetWidth < $$label$$[0].scrollWidth && !$$itemLink_event$$424$$.attr("title") && ($$itemLink_event$$424$$.attr("title", $$label$$.text().trim()), $$itemLink_event$$424$$.data($self$$148$$.$_IS_TITLE_ATTR_ADDED_DUE_TO_TRUNCATION$, "true"));
    }, "mouseleave a.oj-navigationlist-item-content":function($event$$425$$) {
      var $$itemLink$$1$$ = $$$$19$$($event$$425$$.currentTarget);
      $$itemLink$$1$$.data($self$$148$$.$_IS_TITLE_ATTR_ADDED_DUE_TO_TRUNCATION$) && ($$itemLink$$1$$.removeData($self$$148$$.$_IS_TITLE_ATTR_ADDED_DUE_TO_TRUNCATION$), $$itemLink$$1$$.removeAttr("title"));
      $self$$148$$.$_clearActiveState$($event$$425$$);
    }});
  }, $_collapseCurrentList$:function() {
    this.$m_listHandler$.$CollapseCurrentList$();
  }, $_initListHandler$:function() {
    var $drillMode$$ = this.$ojContext$.options.drillMode, $edge$$ = this.$ojContext$.options.edge;
    this.$m_listHandler$ = "sliding" === $drillMode$$ ? new $oj$$20$$.$SlidingNavListHandler$(this, this.$ojContext$.element, this.$ojContext$) : "collapsible" === $drillMode$$ ? new $oj$$20$$.$CollapsibleNavListHandler$(this, this.$ojContext$.element, this.$ojContext$) : "none" === $drillMode$$ && "top" === $edge$$ ? new $oj$$20$$.$HorizontalNavListHandler$(this, this.$ojContext$.element, this.$ojContext$) : new $oj$$20$$.$DefaultNavListHandler$(this, this.$ojContext$.element, this.$ojContext$);
    this.$m_listHandler$.Init(this.options);
    this.$_setNavigationLevel$(this.$ojContext$.options.navigationLevel);
  }, $_setNavigationLevel$:function($navigationLevel$$1$$) {
    "none" === this.$ojContext$.options.drillMode && ("application" === $navigationLevel$$1$$ ? (this.$ojContext$.element.addClass(this.$_APPLICATION_LEVEL_NAV_STYLE_CLASS$), this.$ojContext$.element.removeClass(this.$_PAGE_LEVEL_NAV_STYLE_CLASS$)) : "page" === $navigationLevel$$1$$ && (this.$ojContext$.element.addClass(this.$_PAGE_LEVEL_NAV_STYLE_CLASS$), this.$ojContext$.element.removeClass(this.$_APPLICATION_LEVEL_NAV_STYLE_CLASS$)));
  }, $_clearActiveState$:function($event$$426_item$$97$$) {
    $event$$426_item$$97$$ = this.$FindItem$($$$$19$$($event$$426_item$$97$$.target));
    null != $event$$426_item$$97$$ && this.$HighlightUnhighlightElem$($event$$426_item$$97$$, "oj-active", !1);
  }, $afterCreate$:function() {
    this.$_initListHandler$();
    $_ojNavigationListView$$.$superclass$.$afterCreate$.apply(this, arguments);
  }, $HandleMouseDownOrTouchStart$:function($event$$427$$) {
    $_ojNavigationListView$$.$superclass$.$HandleMouseDownOrTouchStart$.apply(this, arguments);
    var $item$$98$$ = this.$FindItem$($$$$19$$($event$$427$$.target));
    $item$$98$$ && !$item$$98$$.hasClass("oj-disabled") && this.$HighlightUnhighlightElem$($item$$98$$, "oj-active", !0);
  }, $HandleTouchEndOrCancel$:function($event$$428$$) {
    this.$_clearActiveState$($event$$428$$);
    $_ojNavigationListView$$.$superclass$.$HandleTouchEndOrCancel$.apply(this, arguments);
  }, $GetContainerStyleClass$:function() {
    return "oj-navigationlist-listview";
  }, $GetStyleClass$:function() {
    return "oj-navigationlist-element";
  }, $getItemStyleClass$:function() {
    return "oj-navigationlist-item";
  }, $getFocusedElementStyleClass$:function() {
    return "oj-navigationlist-focused-element";
  }, $getItemElementStyleClass$:function() {
    return "oj-navigationlist-item-element";
  }, $getCollapseIconStyleClass$:function() {
    return "oj-navigationlist-collapse-icon";
  }, $getExpandIconStyleClass$:function() {
    return "oj-navigationlist-expand-icon";
  }, $getDepthStyleClass$:function($depth$$16$$) {
    return "oj-navigationlist-depth-" + $depth$$16$$;
  }, $getGroupItemStyleClass$:function() {
    return "oj-navigationlist-group-item";
  }, $getGroupStyleClass$:function() {
    return "oj-navigationlist-group";
  }, $getGroupExpandStyleClass$:function() {
    return "oj-navigationlist-collapsible-transition";
  }, $getGroupCollapseStyleClass$:function() {
    return this.$getGroupExpandStyleClass$();
  }, $AnimateExpand$:function($groupItem$$20$$, $animate$$12$$, $event$$429$$) {
    return this.$m_listHandler$.$Expand$($groupItem$$20$$, $animate$$12$$, $event$$429$$);
  }, $AnimateCollapse$:function($item$$99$$, $animate$$13$$, $event$$430$$) {
    return this.$m_listHandler$.$Collapse$($item$$99$$, $animate$$13$$, $event$$430$$);
  }, $HandleArrowKeys$:function($keyCode$$22$$, $isExtend$$5$$, $event$$431$$) {
    return this.$m_listHandler$.$HandleArrowKeys$($keyCode$$22$$, $isExtend$$5$$, $event$$431$$);
  }, $IsArrowKey$:function($keyCode$$23$$) {
    return this.$m_listHandler$.$IsArrowKey$($keyCode$$23$$);
  }, $GetState$:function($item$$100$$) {
    return this.$m_listHandler$.$GetState$($item$$100$$);
  }, $SetState$:function($item$$101$$, $state$$9$$) {
    this.$m_listHandler$.$SetState$($item$$101$$, $state$$9$$);
  }, $HandleMouseClick$:function($event$$432$$) {
    var $item$$102_url$$33$$ = this.$FindItem$($$$$19$$($event$$432$$.target));
    null != $item$$102_url$$33$$ && 0 !== $item$$102_url$$33$$.length && (this.$SkipFocus$($item$$102_url$$33$$) ? $event$$432$$.preventDefault() : (this.$GetKey$($item$$102_url$$33$$[0]), this.$IsNodeEditableOrClickable$($$$$19$$($event$$432$$.target)) || ($item$$102_url$$33$$ = this.$getItemContentElement$($item$$102_url$$33$$).attr("href"), $item$$102_url$$33$$ && "#" !== $item$$102_url$$33$$ && 0 === $event$$432$$.button && ($event$$432$$.shiftKey || $event$$432$$.ctrlKey) || ($_ojNavigationListView$$.$superclass$.$HandleMouseClick$.apply(this, 
    arguments), $event$$432$$.preventDefault()))));
  }, $HandleKeyDown$:function($event$$433$$) {
    var $keyCode$$24_processExpansion$$, $current$$18$$, $currentItemKey$$2$$;
    if (this.$m_active$) {
      if ($keyCode$$24_processExpansion$$ = $event$$433$$.keyCode, $current$$18$$ = this.$m_active$.elem, $currentItemKey$$2$$ = this.$m_active$.key, $keyCode$$24_processExpansion$$ === $$$$19$$.ui.keyCode.HOME || $keyCode$$24_processExpansion$$ === $$$$19$$.ui.keyCode.END) {
        var $item$$103_processed$$8$$;
        $item$$103_processed$$8$$ = $keyCode$$24_processExpansion$$ === $$$$19$$.ui.keyCode.HOME ? this.element.find("." + this.$ITEM_CONTENT_STYLE_CLASS$ + ":visible").first().closest("." + this.$getItemElementStyleClass$()) : this.element.find("." + this.$ITEM_CONTENT_STYLE_CLASS$ + ":visible").last().closest("." + this.$getItemElementStyleClass$());
        this.$HandleClickActive$($item$$103_processed$$8$$, $event$$433$$);
        $event$$433$$.preventDefault();
      } else {
        $item$$103_processed$$8$$ = this.$HandleSelectionOrActiveKeyDown$($event$$433$$), $keyCode$$24_processExpansion$$ = this.$m_listHandler$.$HandleExpandAndCollapseKeys$($event$$433$$, $keyCode$$24_processExpansion$$, $current$$18$$, $currentItemKey$$2$$), !0 !== $item$$103_processed$$8$$ && !0 !== $keyCode$$24_processExpansion$$ || $event$$433$$.preventDefault();
      }
    }
  }, $ToggleSelection$:function($event$$434$$, $keepCurrentSelection$$1$$, $skipIfNotSelected$$1$$) {
    var $item$$104$$ = this.$m_active$.elem;
    this.$IsSelectable$($item$$104$$[0]) && !this.$_isSelected$($item$$104$$) && this.$_fireBeforeSelectEvent$($event$$434$$, $item$$104$$) && ($_ojNavigationListView$$.$superclass$.$ToggleSelection$.apply(this, arguments), this.$_initiateNavigation$($item$$104$$));
  }, $HighlightUnhighlightElem$:function($elem$$92$$, $style$$7$$, $highlight$$4$$) {
    var $group$$4$$;
    $elem$$92$$ = $$$$19$$($elem$$92$$);
    "oj-selected" === $style$$7$$ && this.$m_listHandler$.$UpdateAriaPropertiesOnSelectedItem$(this.$getFocusItem$($elem$$92$$), $highlight$$4$$);
    $group$$4$$ = $elem$$92$$.children("." + this.$getGroupItemStyleClass$());
    0 < $group$$4$$.length && ($elem$$92$$ = $$$$19$$($group$$4$$[0]));
    $highlight$$4$$ ? $elem$$92$$.addClass($style$$7$$) : $elem$$92$$.removeClass($style$$7$$);
    $elem$$92$$.hasClass("oj-selected") || $elem$$92$$.hasClass("oj-hover") || $elem$$92$$.hasClass("oj-active") || $elem$$92$$.hasClass("oj-disabled") ? $elem$$92$$.removeClass("oj-default") : $elem$$92$$.addClass("oj-default");
  }, $IsSelectable$:function($item$$105$$) {
    return!$$$$19$$($item$$105$$).hasClass("oj-disabled") && this.$m_listHandler$.$IsSelectable$($$$$19$$($item$$105$$));
  }, $Trigger$:function($type$$85$$, $event$$435$$, $ui$$17$$) {
    return "ready" !== $type$$85$$ ? this.$ojContext$._trigger($type$$85$$, $event$$435$$, $ui$$17$$) : !0;
  }, $SetOption$:function($key$$124$$, $value$$253$$, $flags$$29$$) {
    if ("selection" === $key$$124$$) {
      var $context$$105$$ = $flags$$29$$._context, $selectedItem$$ = $context$$105$$ && $context$$105$$.$extraData$ && $context$$105$$.$extraData$.items;
      $selectedItem$$ && ($context$$105$$.$extraData$.item = $selectedItem$$, $context$$105$$.$extraData$.items = void 0);
      $value$$253$$ && 0 < $value$$253$$.length ? this.$ojContext$.option($key$$124$$, $value$$253$$[0], $flags$$29$$) : this.$ojContext$.option($key$$124$$, null, $flags$$29$$);
    } else {
      this.$ojContext$.option($key$$124$$, $value$$253$$, $flags$$29$$);
    }
    this.options[$key$$124$$] = $value$$253$$;
  }, $ShouldRefresh$:function($options$$267$$) {
    return null != $options$$267$$.data || null != $options$$267$$.drillMode || null != $options$$267$$.item || null != $options$$267$$.display || null != $options$$267$$.edge;
  }, $setOptions$:function($options$$268$$, $flags$$30$$) {
    var $result$$51$$ = {$skipOptions$:[]}, $newSelectionValue$$;
    void 0 !== $options$$268$$.hierarchyMenuDisplayThresholdLevel && this.$m_listHandler$.$setOptions$($options$$268$$);
    void 0 !== $options$$268$$.navigationLevel && this.$_setNavigationLevel$($options$$268$$.navigationLevel);
    if (void 0 !== $options$$268$$.selection) {
      if ($newSelectionValue$$ = $options$$268$$.selection) {
        var $item$$106_selection$$22$$ = this.$GetOption$("selection");
        $item$$106_selection$$22$$ && 0 !== $item$$106_selection$$22$$.length && $item$$106_selection$$22$$[0] === $newSelectionValue$$ ? delete $options$$268$$.selection : ($item$$106_selection$$22$$ = this.$FindElementByKey$($newSelectionValue$$)) && this.$IsSelectable$($item$$106_selection$$22$$) ? this.$_fireBeforeSelectEvent$(null, $$$$19$$($item$$106_selection$$22$$)) ? ($options$$268$$.selection = [$newSelectionValue$$], this.$_initiateNavigation$($$$$19$$($item$$106_selection$$22$$))) : (delete $options$$268$$.selection, 
        $result$$51$$.$skipOptions$.push("selection")) : (delete $options$$268$$.selection, $result$$51$$.$skipOptions$.push("selection"));
      } else {
        $options$$268$$.selection = [];
      }
    }
    $result$$51$$.$needRefresh$ = $_ojNavigationListView$$.$superclass$.$setOptions$.call(this, $options$$268$$, $flags$$30$$);
    void 0 !== $newSelectionValue$$ && ($options$$268$$.selection = $newSelectionValue$$);
    return $result$$51$$;
  }, $GetOption$:function($key$$125$$) {
    var $optionValue$$4$$ = this.$ojContext$.option($key$$125$$);
    return "selection" === $key$$125$$ ? $optionValue$$4$$ ? [$optionValue$$4$$] : [] : null === $optionValue$$4$$ ? this.options[$key$$125$$] : $optionValue$$4$$;
  }, $getWidgetConstructor$:function() {
    return $oj$$20$$.Components.$getWidgetConstructor$(this.$ojContext$.element);
  }, $SelectAndFocus$:function($item$$107$$, $event$$436$$) {
    !$item$$107$$.hasClass("oj-disabled") && this.$IsSelectable$($item$$107$$[0]) && (!this.$_isSelected$($item$$107$$) && this.$_fireBeforeSelectEvent$($event$$436$$, $item$$107$$) ? ($_ojNavigationListView$$.$superclass$.$SelectAndFocus$.apply(this, arguments), this.$_initiateNavigation$($item$$107$$)) : this.$HandleClickActive$($item$$107$$, $event$$436$$));
  }, $_fireBeforeSelectEvent$:function($event$$437$$, $item$$108$$) {
    var $key$$126$$ = this.$GetKey$($item$$108$$[0]);
    return this.$Trigger$("beforeSelect", $event$$437$$, {item:$item$$108$$, key:$key$$126$$});
  }, $_initiateNavigation$:function($item$$109_url$$34$$) {
    return this.$ojContext$.element.hasClass(this.$_NAVLIST_NO_FOLLOW_LINK_CLASS$) ? !1 : ($item$$109_url$$34$$ = this.$getItemContentElement$($item$$109_url$$34$$).attr("href")) && "#" !== $item$$109_url$$34$$ ? (window.location.href = $item$$109_url$$34$$, !0) : !1;
  }, $_isSelected$:function($item$$110_key$$127$$) {
    var $selection$$23$$;
    $selection$$23$$ = this.$GetOption$("selection");
    $item$$110_key$$127$$ = this.$GetKey$($item$$110_key$$127$$[0]);
    return-1 < $selection$$23$$.indexOf($item$$110_key$$127$$) ? !0 : !1;
  }, $_setToolTipOnIcon$:function($icon$$6$$, $itemLabel$$1$$) {
    $icon$$6$$.attr("title") || $icon$$6$$.attr("title", $itemLabel$$1$$);
  }, $_removeToolTipOnIcon$:function($icon$$7$$) {
    $icon$$7$$.data(this.$_NAVLIST_ITEM_ICON_HAS_TITLE$) ? $icon$$7$$.removeData(this.$_NAVLIST_ITEM_ICON_HAS_TITLE$) : $icon$$7$$.removeAttr("title");
  }, $itemRenderComplete$:function($elem$$93$$, $context$$106$$) {
    var $$item$$3$$ = $$$$19$$($elem$$93$$);
    if ($$item$$3$$.hasClass(this.$_CATEGORY_DIVIDER_STYLE_CLASS$)) {
      $$item$$3$$.removeClass(this.$getItemElementStyleClass$()), $$item$$3$$.removeClass(this.$getFocusedElementStyleClass$()), $$item$$3$$.removeClass(this.$getItemStyleClass$()), $$item$$3$$.removeAttr("aria-selected"), $$item$$3$$.children().remove(), $$item$$3$$.attr("role", "separator");
    } else {
      var $collapseIconClass$$1_icon$$8$$ = this.$getCollapseIconStyleClass$(), $expandIconClass$$1_groupIcon$$ = this.$getExpandIconStyleClass$(), $itemIconClass_itemLabel$$2$$ = this.$_ITEM_ICON_STYLE_CLASS$, $groupItem$$21$$ = $$item$$3$$.children("." + this.$getGroupItemStyleClass$()), $itemContent$$12$$;
      0 < $groupItem$$21$$.length ? ($groupItem$$21$$.addClass(this.$getItemStyleClass$()), $itemContent$$12$$ = $groupItem$$21$$.children(":not(." + $expandIconClass$$1_groupIcon$$ + "):not(." + $collapseIconClass$$1_icon$$8$$ + ")"), $expandIconClass$$1_groupIcon$$ = $groupItem$$21$$.children("." + $expandIconClass$$1_groupIcon$$), 0 === $expandIconClass$$1_groupIcon$$.length && ($expandIconClass$$1_groupIcon$$ = $groupItem$$21$$.children("." + $collapseIconClass$$1_icon$$8$$)), $expandIconClass$$1_groupIcon$$.attr("role", 
      "presentation"), $expandIconClass$$1_groupIcon$$.removeAttr("aria-labelledby"), $$item$$3$$.hasClass("oj-disabled") && $groupItem$$21$$.addClass("oj-disabled")) : $itemContent$$12$$ = $$item$$3$$.children().first();
      $itemContent$$12$$.addClass(this.$ITEM_CONTENT_STYLE_CLASS$);
      $collapseIconClass$$1_icon$$8$$ = $itemContent$$12$$.wrapInner('\x3cspan class\x3d"' + this.$_ITEM_LABEL_STYLE_CLASS$ + '"\x3e\x3c/span\x3e').find("." + $itemIconClass_itemLabel$$2$$);
      0 < $collapseIconClass$$1_icon$$8$$.length ? ($collapseIconClass$$1_icon$$8$$.insertBefore($collapseIconClass$$1_icon$$8$$.parent()), $collapseIconClass$$1_icon$$8$$.attr("title") && $collapseIconClass$$1_icon$$8$$.data(this.$_NAVLIST_ITEM_ICON_HAS_TITLE$, $collapseIconClass$$1_icon$$8$$.attr("title")), "icons" === this.$ojContext$.options.display && (this.$ojContext$.element.addClass(this.$_ICON_ONLY_STYLE_CLASS$), $itemIconClass_itemLabel$$2$$ = this.$getItemLabel$($$item$$3$$), $collapseIconClass$$1_icon$$8$$.attr("aria-label", 
      $itemIconClass_itemLabel$$2$$), $collapseIconClass$$1_icon$$8$$.attr("role", "img"), this.$_setToolTipOnIcon$($collapseIconClass$$1_icon$$8$$, $itemIconClass_itemLabel$$2$$)), $$item$$3$$.closest("ul").addClass(this.$_NAVLIST_HAS_ICONS$)) : $itemContent$$12$$.addClass(this.$_NAVLIST_ITEM_HAS_NO_ICON$);
      $$item$$3$$.hasClass("oj-disabled") ? this.$getFocusItem$($$item$$3$$).attr("aria-disabled", "true") : 0 < $groupItem$$21$$.length ? $groupItem$$21$$.addClass("oj-default") : $$item$$3$$.addClass("oj-default");
      this.$m_listHandler$.$ModifyListItem$($$item$$3$$, $itemContent$$12$$);
      $_ojNavigationListView$$.$superclass$.$itemRenderComplete$.apply(this, arguments);
    }
  }, getNodeBySubId:function($item$$111_key$$128_locator$$28$$) {
    var $subId$$34$$;
    if (null === $item$$111_key$$128_locator$$28$$) {
      return this.element ? this.element[0] : null;
    }
    $subId$$34$$ = $item$$111_key$$128_locator$$28$$.subId;
    return "oj-navigationlist-item" === $subId$$34$$ ? ($item$$111_key$$128_locator$$28$$ = $item$$111_key$$128_locator$$28$$.key, $item$$111_key$$128_locator$$28$$ = this.$FindElementByKey$($item$$111_key$$128_locator$$28$$)) : "oj-navigationlist-previous-link" === $subId$$34$$ ? this.$m_listHandler$.$_previousLink$ ? this.$m_listHandler$.$_previousLink$[0] : null : "oj-navigationlist-hierarchical-button" === $subId$$34$$ ? this.$m_listHandler$.$_hviewBtn$ ? this.$m_listHandler$.$_hviewBtn$[0] : 
    null : "oj-navigationlist-hierarchical-menu" === $subId$$34$$ ? this.$m_listHandler$.$_hviewMenu$ ? this.$m_listHandler$.$_hviewMenu$[0] : null : null;
  }, getSubIdByNode:function($item$$112_key$$129_node$$79$$) {
    if (this.$m_listHandler$.$_previousLink$ && this.$m_listHandler$.$_previousLink$[0] === $item$$112_key$$129_node$$79$$) {
      return{subId:"oj-navigationlist-previous-link"};
    }
    if (this.$m_listHandler$.$_hviewBtn$ && this.$m_listHandler$.$_hviewBtn$[0] === $item$$112_key$$129_node$$79$$) {
      return{subId:"oj-navigationlist-hierarchical-button"};
    }
    if (this.$m_listHandler$.$_hviewMenu$ && this.$m_listHandler$.$_hviewMenu$[0] === $item$$112_key$$129_node$$79$$) {
      return{subId:"oj-navigationlist-hierarchical-menu"};
    }
    $item$$112_key$$129_node$$79$$ = this.$FindItem$($item$$112_key$$129_node$$79$$);
    return null != $item$$112_key$$129_node$$79$$ && 0 < $item$$112_key$$129_node$$79$$.length && ($item$$112_key$$129_node$$79$$ = this.$GetKey$($item$$112_key$$129_node$$79$$[0]), null != $item$$112_key$$129_node$$79$$) ? {subId:"oj-navigationlist-item", key:$item$$112_key$$129_node$$79$$} : null;
  }, getContextByNode:function($context$$107_node$$80$$) {
    return($context$$107_node$$80$$ = $_ojNavigationListView$$.$superclass$.getContextByNode.call(this, $context$$107_node$$80$$)) && "oj-listview-item" == $context$$107_node$$80$$.subId ? ($context$$107_node$$80$$.subId = "oj-navigationlist-item", $context$$107_node$$80$$) : null;
  }, refresh:function() {
    this.$_resetNavlist$();
    this.$_initListHandler$();
    $_ojNavigationListView$$.$superclass$.refresh.apply(this, arguments);
  }, $_resetNavlist$:function() {
    this.$ojContext$.element.removeClass(this.$_ICON_ONLY_STYLE_CLASS$);
    this.$ojContext$.element.removeClass(this.$_APPLICATION_LEVEL_NAV_STYLE_CLASS$);
    this.$ojContext$.element.removeClass(this.$_PAGE_LEVEL_NAV_STYLE_CLASS$);
    this.$_restoreContent$(this.element);
    this.$m_listHandler$.$Destroy$();
  }, destroy:function() {
    this.$_resetNavlist$();
    $_ojNavigationListView$$.$superclass$.destroy.apply(this, arguments);
    this.$_list$.unwrap();
    this.$_list$.is(":empty") && this.$_list$.remove();
    this.$ojContext$.element.removeClass(this.$_NAVLIST_STYLE_CLASS$ + " " + this.$_NAVLIST_TOUCH_STYLE_CLASS$);
    this.$ojContext$._off(this.element, "click");
    this.$ojContext$._off(this.element, "focus");
    this.$ojContext$._off(this.element, "blur");
    this.$ojContext$._off(this.element, "mouseover");
    this.$ojContext$._off(this.element, "mousein");
    this.$ojContext$._off(this.element, "mouseout");
    this.$ojContext$._off(this.element, "keydown");
  }});
  (function() {
    $oj$$20$$.$__registerWidget$("oj.ojNavigationList", $$$$19$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{currentItem:null, drillMode:"none", edge:"start", hierarchyMenuDisplayThresholdLevel:0, rootLabel:null, selection:null, expanded:"auto", data:null, display:"all", navigationLevel:"page", item:{renderer:null, selectable:!0}, beforeSelect:null, beforeCollapse:null, beforeCurrentItem:null, collapse:null, beforeExpand:null, expand:null, optionChange:null}, _ComponentCreate:function() {
      this._super();
      this.$_setup$();
    }, $_AfterCreate$:function() {
      this._super();
      this.$navlist$.$afterCreate$();
    }, $_NotifyContextMenuGesture$:function($menu$$8$$, $event$$438$$, $eventType$$38$$) {
      this.$navlist$.$notifyContextMenuGesture$($menu$$8$$, $event$$438$$, $eventType$$38$$);
    }, $_setup$:function() {
      for (var $key$$130_opts$$29$$ in this.options) {
        this.$_validateOptionValues$($key$$130_opts$$29$$, this.options[$key$$130_opts$$29$$]);
      }
      this.$_validateOptionsForIconsOnlyAndHorizontalList$(this.options.drillMode, this.options.display, this.options.edge);
      this.$navlist$ = new $_ojNavigationListView$$;
      $key$$130_opts$$29$$ = {$ojContext$:this};
      $key$$130_opts$$29$$ = $$$$19$$.extend(this.options, $key$$130_opts$$29$$);
      this.$navlist$.$init$($key$$130_opts$$29$$);
    }, getNodeBySubId:function($locator$$29$$) {
      return this.$navlist$.getNodeBySubId($locator$$29$$);
    }, getSubIdByNode:function($node$$81$$) {
      return this.$navlist$.getSubIdByNode($node$$81$$);
    }, getContextByNode:function($node$$82$$) {
      return this.$navlist$.getContextByNode($node$$82$$);
    }, expand:function($key$$131$$, $vetoable$$2$$) {
      this.$navlist$.$expandKey$($key$$131$$, $vetoable$$2$$, !0, !0);
    }, collapse:function($key$$132$$, $vetoable$$3$$) {
      this.$navlist$.$collapseKey$($key$$132$$, $vetoable$$3$$, !0);
    }, getExpanded:function() {
      return this.$navlist$.getExpanded();
    }, $_validateOptionsForIconsOnlyAndHorizontalList$:function($drillMode$$2$$, $display$$1$$, $edge$$1$$) {
      if ("none" !== $drillMode$$2$$) {
        if ("icons" === $display$$1$$) {
          throw "Icon only navigation list should have drillMode set to 'none'.";
        }
        if ("top" === $edge$$1$$) {
          throw "Horizontal navigation list should have drillMode set to 'none'.";
        }
      }
    }, $_validateOptionValues$:function($key$$133$$, $value$$254$$) {
      var $valid$$9$$ = !0;
      "drillMode" === $key$$133$$ ? $valid$$9$$ = "none" === $value$$254$$ || "collapsible" === $value$$254$$ || "sliding" === $value$$254$$ : "display" === $key$$133$$ ? $valid$$9$$ = "all" === $value$$254$$ || "icons" === $value$$254$$ : "edge" === $key$$133$$ && ($valid$$9$$ = "top" === $value$$254$$ || "start" === $value$$254$$);
      if (!$valid$$9$$) {
        throw "Invalid value: " + $value$$254$$ + " for key: " + $key$$133$$;
      }
    }, _setOption:function($key$$134$$, $value$$255$$) {
      this.$_validateOptionValues$($key$$134$$, $value$$255$$);
      switch($key$$134$$) {
        case "drillMode":
          this.$_validateOptionsForIconsOnlyAndHorizontalList$($value$$255$$, this.options.display, this.options.edge);
          break;
        case "display":
          this.$_validateOptionsForIconsOnlyAndHorizontalList$(this.options.drillMode, $value$$255$$, this.options.edge);
          break;
        case "edge":
          this.$_validateOptionsForIconsOnlyAndHorizontalList$(this.options.drillMode, this.options.display, $value$$255$$);
      }
      return this._super($key$$134$$, $value$$255$$);
    }, _setOptions:function($options$$269$$, $flags$$31$$) {
      var $result$$52$$ = this.$navlist$.$setOptions$($options$$269$$, $flags$$31$$), $key$$135$$;
      for ($key$$135$$ in $options$$269$$) {
        0 > $result$$52$$.$skipOptions$.indexOf($key$$135$$) && this._setOption($key$$135$$, $options$$269$$[$key$$135$$], $flags$$31$$);
      }
      $result$$52$$.$needRefresh$ && this.$navlist$.refresh();
      return this;
    }, $_NotifyDetached$:function() {
      this.$navlist$.$notifyDetached$();
    }, $_NotifyShown$:function() {
    }, refresh:function() {
      this._super();
      this.$navlist$.refresh();
    }, whenReady:function() {
      return this.$navlist$.whenReady();
    }, _destroy:function() {
      this.$navlist$.destroy();
      this._super();
      delete this.$navlist$;
    }});
    $oj$$20$$.Components.$setDefaultOptions$({ojNavigationList:{hierarchyMenuDisplayThresholdLevel:$oj$$20$$.Components.$createDynamicPropertyGetter$(function() {
      return $oj$$20$$.$ThemeUtils$.$getOptionDefaultMap$("navigationList").hierarchyMenuDisplayThresholdLevel;
    })}});
  })();
});

/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojconveyorbelt", "ojs/ojmenu", "jqueryui-amd/sortable", "ojs/ojtouchproxy"], function($oj$$53$$, $$$$48$$) {
  (function() {
    var $_arMenuCmdMap$$ = {cut:"ojtabscut", "paste-before":"ojtabspastebefore", "paste-after":"ojtabspasteafter", remove:"ojtabsremove"}, $_arMenuKeyMap$$ = {cut:"labelCut", "paste-before":"labelPasteBefore", "paste-after":"labelPasteAfter", remove:"labelRemove"};
    $oj$$53$$.$__registerWidget$("oj.ojTabs", $$$$48$$.oj.baseComponent, {widgetEventPrefix:"oj", delay:300, options:{selected:0, disabledTabs:null, truncation:"auto", selectOn:"click", orientation:"horizontal", edge:"top", removable:!1, reorderable:!1, beforeSelect:null, select:null, beforeDeselect:null, deselect:null, beforeRemove:null, remove:null, beforeReorder:null, reorder:null, optionChange:null}, _ComponentCreate:function() {
      var $options$$325_selectedIndex$$2$$ = this.options;
      this._super();
      this.$running$ = !1;
      this.$_initialRender$ = !0;
      this.$_setupEdge$($options$$325_selectedIndex$$2$$.edge);
      this.$_isOldMarkup$ = 0 == this.element.children("ul").length;
      this.$_createTabbarFromOldMarkup$();
      this.$_processTabs$();
      this.$_menu$ = {};
      this.$_menu$.$$container$ = !1;
      this.$_menu$.$$elemPasteBefore$ = !1;
      this.$_menu$.$$elemPasteAfter$ = !1;
      this.$_initMenu$();
      this.$_refresh$();
      $options$$325_selectedIndex$$2$$ = this.$_getIndexByTabOrContentId$($options$$325_selectedIndex$$2$$.selected);
      void 0 === $options$$325_selectedIndex$$2$$ && ($options$$325_selectedIndex$$2$$ = 0);
      this.$_fireSelectEvents$($options$$325_selectedIndex$$2$$);
      this.$_initialRender$ = void 0;
    }, $_fireSelectEvents$:function($selectedIndex$$3$$, $flags$$43$$) {
      this.$_isTabDisabled$($selectedIndex$$3$$) && ($selectedIndex$$3$$ = this.$_getNextEnabledTab$($selectedIndex$$3$$));
      this.$_activate$(void 0 === $selectedIndex$$3$$ ? void 0 : $$$$48$$(this.$tabs$[$selectedIndex$$3$$]), $flags$$43$$);
    }, $_NotifyContextMenuGesture$:function($menu$$15_openOptions$$5$$, $event$$625$$, $eventType$$46$$) {
      if (this.$_isInATab$($event$$625$$.target) && (!this.$_touchProxy$ || !this.$_touchProxy$.$_touchMoved$)) {
        var $isDisabled$$2_keyboard$$ = "keyboard" === $eventType$$46$$;
        if ("contextmenu" == $event$$625$$.type || $isDisabled$$2_keyboard$$ || "touch" == $eventType$$46$$) {
          var $disabledState_tab$$ = $$$$48$$($event$$625$$.target).closest("li");
          $menu$$15_openOptions$$5$$ = {launcher:$disabledState_tab$$};
          this.$_menu$.tab = $isDisabled$$2_keyboard$$ ? this.$active$ : $menu$$15_openOptions$$5$$.launcher;
          if (this.$_menu$.tab) {
            if (this.$_menu$.$$elemRemove$) {
              if ((($isDisabled$$2_keyboard$$ = $disabledState_tab$$.hasClass("oj-disabled")) || 0 == this.$_getCloseIcons$($disabledState_tab$$).length) && 1 == this.$_menu$.$$container$.children().length) {
                $event$$625$$.preventDefault();
                return;
              }
              $isDisabled$$2_keyboard$$ || !this.$_isTabRemovable$($disabledState_tab$$) ? this.$_menu$.$$elemRemove$.addClass("oj-disabled") : this.$_menu$.$$elemRemove$.removeClass("oj-disabled");
            }
            if (this.$_menu$.$$elemPasteBefore$ || this.$_menu$.$$elemPasteAfter$) {
              $disabledState_tab$$ = !this.$_menu$.$cutTab$, this.$_menu$.$$elemPasteBefore$.hasClass("oj-disabled") != $disabledState_tab$$ && ($disabledState_tab$$ ? (this.$_menu$.$$elemPasteBefore$.addClass("oj-disabled"), this.$_menu$.$$elemPasteAfter$.addClass("oj-disabled")) : (this.$_menu$.$$elemPasteBefore$.removeClass("oj-disabled"), this.$_menu$.$$elemPasteAfter$.removeClass("oj-disabled")), this.$_menu$.$$container$.ojMenu("refresh"));
            }
            this.$_OpenContextMenu$($event$$625$$, $eventType$$46$$, $menu$$15_openOptions$$5$$);
          } else {
            $event$$625$$.preventDefault();
          }
        }
      }
    }, $_tabKeydown$:function($event$$626$$) {
      if (!this.$_handlePageNav$($event$$626$$)) {
        var $focusedTab_tab$$1$$ = $$$$48$$(this.document[0].activeElement).closest("li"), $enabledTabs$$ = this.$_getEnabledTabs$(), $selectedIndex$$4$$ = $enabledTabs$$.index($focusedTab_tab$$1$$), $length$$18$$ = $enabledTabs$$.length;
        switch($event$$626$$.keyCode) {
          case $$$$48$$.ui.keyCode.RIGHT:
          ;
          case $$$$48$$.ui.keyCode.DOWN:
            $selectedIndex$$4$$ = ($selectedIndex$$4$$ + 1) % $length$$18$$;
            break;
          case $$$$48$$.ui.keyCode.UP:
          ;
          case $$$$48$$.ui.keyCode.LEFT:
            $selectedIndex$$4$$ = ((0 == $selectedIndex$$4$$ ? $length$$18$$ : $selectedIndex$$4$$) - 1) % $length$$18$$;
            break;
          case $$$$48$$.ui.keyCode.END:
            $selectedIndex$$4$$ = $length$$18$$ - 1;
            break;
          case $$$$48$$.ui.keyCode.HOME:
            $selectedIndex$$4$$ = 0;
            break;
          case 46:
            ($focusedTab_tab$$1$$ = this.$active$) && 0 < this.$_getCloseIcons$($focusedTab_tab$$1$$).length && ($event$$626$$.preventDefault(), this.$_removeTab$($focusedTab_tab$$1$$, null, $event$$626$$));
            return;
          default:
            return;
        }
        $event$$626$$.preventDefault();
        clearTimeout(this.$activating$);
        var $selTab$$ = $$$$48$$($enabledTabs$$[$selectedIndex$$4$$]);
        $selTab$$.focus();
        if (!$event$$626$$.ctrlKey) {
          $focusedTab_tab$$1$$.attr("aria-selected", "false");
          $selTab$$.attr("aria-selected", "true");
          this.$_getTabIdOrIndex$($selTab$$);
          var $self$$178$$ = this;
          this.$activating$ = this._delay(function() {
            $self$$178$$ && $self$$178$$.$tabs$ && $self$$178$$.$_activate$($selTab$$, $event$$626$$);
          }, this.delay);
        }
      }
    }, $_panelKeydown$:function($event$$627$$) {
      $$$$48$$($event$$627$$.target).closest(".oj-tabs-selected").attr("id") === this.element.children(".oj-tabs-selected").attr("id") && !this.$_handlePageNav$($event$$627$$) && $event$$627$$.ctrlKey && $event$$627$$.keyCode === $$$$48$$.ui.keyCode.UP && ($event$$627$$.preventDefault(), this.$active$.focus());
    }, $_handlePageNav$:function($event$$628$$) {
      var $selectedIndex$$5$$ = this.$_getSelectedIndex$();
      if ($event$$628$$.ctrlKey && $event$$628$$.keyCode === $$$$48$$.ui.keyCode.PAGE_UP) {
        return this.$_activate$(this.$_focusNextTab$($selectedIndex$$5$$, !1)), !0;
      }
      if ($event$$628$$.ctrlKey && $event$$628$$.keyCode === $$$$48$$.ui.keyCode.PAGE_DOWN) {
        return this.$_activate$(this.$_focusNextTab$($selectedIndex$$5$$, !0)), !0;
      }
    }, $_isTabDisabled$:function($index$$265$$) {
      return 0 <= $index$$265$$ && $index$$265$$ < this.$tabs$.length ? $$$$48$$(this.$tabs$[$index$$265$$]).hasClass("oj-disabled") : !1;
    }, $_focusNextTab$:function($index$$266$$, $goingForward$$) {
      var $enabledTabs$$1_selTab$$1$$ = this.$_getEnabledTabs$(), $currentIndex$$3$$ = $enabledTabs$$1_selTab$$1$$.index(this.$tabs$[$index$$266$$]), $length$$19$$ = $enabledTabs$$1_selTab$$1$$.length, $enabledTabs$$1_selTab$$1$$ = $$$$48$$($enabledTabs$$1_selTab$$1$$[$goingForward$$ ? ($currentIndex$$3$$ + 1) % $length$$19$$ : ((0 == $currentIndex$$3$$ ? $length$$19$$ : $currentIndex$$3$$) - 1) % $length$$19$$]);
      $enabledTabs$$1_selTab$$1$$.focus();
      return $enabledTabs$$1_selTab$$1$$;
    }, $_getNextEnabledTab$:function($index$$267$$) {
      for (var $next$$8$$ = $index$$267$$ + 1, $lastTabIndex$$ = this.$tabs$.length - 1;$next$$8$$ <= $lastTabIndex$$;) {
        if (!this.$_isTabDisabled$($next$$8$$)) {
          return $next$$8$$;
        }
        $next$$8$$++;
      }
      for ($next$$8$$ = $index$$267$$ - 1;0 <= $next$$8$$;) {
        if (!this.$_isTabDisabled$($next$$8$$)) {
          return $next$$8$$;
        }
        $next$$8$$--;
      }
    }, $_isHorizontal$:function() {
      return "top" == this.options.edge || "bottom" == this.options.edge;
    }, _setOption:function($edge$$13_key$$172_selectedIndex$$6$$, $value$$286$$, $flags$$44$$) {
      "selected" === $edge$$13_key$$172_selectedIndex$$6$$ ? ($value$$286$$ = this.$_getTab$($value$$286$$), void 0 !== $value$$286$$ && this.$_activate$($value$$286$$)) : "disabledTabs" === $edge$$13_key$$172_selectedIndex$$6$$ ? (null === $value$$286$$ && ($value$$286$$ = []), Array.isArray($value$$286$$) && (this.$_setOjDisabledOnTab$($value$$286$$), $edge$$13_key$$172_selectedIndex$$6$$ = this.$_getSelectedIndex$(), this.$_isTabDisabled$($edge$$13_key$$172_selectedIndex$$6$$) && this.$_fireSelectEvents$($edge$$13_key$$172_selectedIndex$$6$$), 
      this.refresh())) : "removable" === $edge$$13_key$$172_selectedIndex$$6$$ || "truncation" === $edge$$13_key$$172_selectedIndex$$6$$ ? $value$$286$$ != this.options[$edge$$13_key$$172_selectedIndex$$6$$] && (this._super($edge$$13_key$$172_selectedIndex$$6$$, $value$$286$$, $flags$$44$$), this.refresh()) : "reorderable" === $edge$$13_key$$172_selectedIndex$$6$$ ? $value$$286$$ !== this.options.reorderable && (this._super($edge$$13_key$$172_selectedIndex$$6$$, $value$$286$$, $flags$$44$$), this.refresh()) : 
      "orientation" === $edge$$13_key$$172_selectedIndex$$6$$ ? this.$_edgeSpecified$ || ($edge$$13_key$$172_selectedIndex$$6$$ = this.$_orientationToEdge$($value$$286$$)) && this.$_setupEdge$($edge$$13_key$$172_selectedIndex$$6$$) && this.refresh() : "edge" === $edge$$13_key$$172_selectedIndex$$6$$ ? this.$_setupEdge$($value$$286$$) && (this.$_edgeSpecified$ = !0, this._super($edge$$13_key$$172_selectedIndex$$6$$, $value$$286$$, $flags$$44$$), this.refresh()) : "selectOn" === $edge$$13_key$$172_selectedIndex$$6$$ ? 
      (this.$_tearDownEvents$(!0), this._super($edge$$13_key$$172_selectedIndex$$6$$, $value$$286$$, $flags$$44$$), this.$_setupEvents$()) : ("contextMenu" === $edge$$13_key$$172_selectedIndex$$6$$ && (this.$_clearMenu$(), $value$$286$$ && this.$_initMenu$($value$$286$$)), this._super($edge$$13_key$$172_selectedIndex$$6$$, $value$$286$$, $flags$$44$$), "translations" === $edge$$13_key$$172_selectedIndex$$6$$ && $flags$$44$$ && "removeCueText" === $flags$$44$$.subkey && this.$tablist$ && this.$_getCloseIcons$(this.$tablist$).attr("aria-label", 
      $value$$286$$ ? $value$$286$$.removeCueText : ""));
    }, refresh:function() {
      this._super();
      this.$_processTabs$();
      this.$_refresh$();
    }, $_refresh$:function() {
      var $selectedPanel$$ = this.element.children(".oj-tabs-selected");
      this.$active$ = $selectedPanel$$.length ? this.$tablist$.children(".oj-selected") : $$$$48$$();
      this.$_createCloseIcons$();
      this.$_setupEvents$();
      this.$tabs$.not(this.$active$).attr({"aria-selected":"false", tabIndex:"-1"});
      this.$panels$.not(this.$_getPanelForTab$(this.$active$)).hide().attr({"aria-expanded":"false", "aria-hidden":"true"});
      this.$active$.length ? (this.$active$.addClass("oj-selected").attr({"aria-selected":"true", tabIndex:"0"}), $selectedPanel$$.show().attr("aria-expanded", "true").removeAttr("aria-hidden")) : $$$$48$$(this.$tabs$[0]).attr("tabIndex", "0");
      this.$_isHorizontal$() && (0 < this.$tabs$.length ? (this.$_truncateBeforeOverflow$(), this.$_addConveyor$()) : this.$_getTabbarWrapper$(), this.$_addFacets$());
      void 0 === this.options.selected || 0 == this.$_getSelectedIndex$() ? this.element.addClass("oj-first-child-selected") : this.element.removeClass("oj-first-child-selected");
      this.$_setupReorder$();
    }, $_addConveyor$:function() {
      var $cparent_tabsId$$ = this.$tablist$.uniqueId().attr("id");
      this.$conveyor$ = this.$_getTabbarWrapper$().parent().ojConveyorBelt({orientation:"horizontal", contentParent:"#" + $cparent_tabsId$$});
      $cparent_tabsId$$ = this.$conveyor$.parent();
      if ($cparent_tabsId$$.hasClass("oj-tabs-conveyorbelt-wrapper")) {
        var $flex$$ = "0 1 " + this.$_getConveyorWrapperMaxWidth$() + "px";
        $cparent_tabsId$$.css("flex", $flex$$);
        $cparent_tabsId$$.css("-webkit-flex", $flex$$);
        $cparent_tabsId$$.css("-ms-flex", $flex$$);
      }
    }, $_processTabs$:function() {
      var $self$$179$$ = this, $edge$$14$$ = this.options.edge;
      this.$_destroyTabBar$();
      this.$_createTabbar$();
      this.$tablist$ = this.element.children("ul").addClass("oj-tabs-nav oj-helper-clearfix").attr("role", "tablist");
      var $tabbarIndex$$ = this.$tablist$.index();
      this.element.children(".oj-tabs-facet").each(function() {
        var $facet$$ = $$$$48$$(this);
        $facet$$.index() < $tabbarIndex$$ ? $facet$$.addClass("oj-start") : $facet$$.removeClass("oj-start");
      });
      var $tabContents$$ = this.element.children(".oj-tabs-panel");
      "start" == $edge$$14$$ || "top" == $edge$$14$$ ? $$$$48$$($tabContents$$[0]).before(this.$tablist$) : $$$$48$$($tabContents$$[$tabContents$$.length - 1]).after(this.$tablist$);
      this.$tabs$ = $$$$48$$();
      this.$panels$ = $$$$48$$();
      this.$tablist$.children("li").each(function() {
        var $tab$$2$$ = $$$$48$$(this).addClass("oj-tabs-tab").attr({role:"tab", tabIndex:"-1"}).removeAttr("aria-hidden"), $anchor$$3_anchorId_div$$6$$ = $tab$$2$$.children();
        $anchor$$3_anchorId_div$$6$$.addClass("oj-tabs-tab-content");
        $anchor$$3_anchorId_div$$6$$ = $anchor$$3_anchorId_div$$6$$.children();
        $anchor$$3_anchorId_div$$6$$.addClass("oj-tabs-anchor").attr({role:"presentation", tabIndex:"-1"});
        $anchor$$3_anchorId_div$$6$$.children().addClass("oj-tabs-title").removeAttr("aria-hidden");
        $self$$179$$.$tabs$ = $self$$179$$.$tabs$.add($tab$$2$$);
        var $anchor$$3_anchorId_div$$6$$ = $anchor$$3_anchorId_div$$6$$.uniqueId().attr("id"), $panelId$$ = $tab$$2$$.attr("data-content"), $panel$$2$$ = $self$$179$$.element.find($self$$179$$.$_sanitizeSelector$("#" + $panelId$$));
        $tab$$2$$.attr({"aria-controls":$panelId$$, "aria-labelledby":$anchor$$3_anchorId_div$$6$$});
        $self$$179$$.$panels$ = $self$$179$$.$panels$.add($panel$$2$$);
        $panel$$2$$.attr("aria-labelledby", $anchor$$3_anchorId_div$$6$$).attr("role", "tabpanel");
      });
      "start" != $edge$$14$$ && "end" != $edge$$14$$ || $self$$179$$.$tablist$.addClass("oj-tabs-nav-root");
      this.$_initialRender$ && this.$_setOjDisabledOnTab$(this.options.disabledTabs);
    }, $_setupEvents$:function() {
      var $events$$13$$ = {keydown:this.$_tabKeydown$}, $enabledTabs$$2_event$$629$$ = this.options.selectOn, $selectOnClick$$ = !1;
      if ($enabledTabs$$2_event$$629$$) {
        var $self$$180$$ = this;
        $$$$48$$.each($enabledTabs$$2_event$$629$$.split(" "), function($index$$269$$, $eventName$$2$$) {
          "click" == $eventName$$2$$ && ($selectOnClick$$ = !0);
          $oj$$53$$.$DomUtils$.$isValidIdentifier$($eventName$$2$$) && ($events$$13$$[$eventName$$2$$] = $self$$180$$.$_eventHandler$);
        });
      }
      $enabledTabs$$2_event$$629$$ = this.$_getEnabledTabs$();
      this._on($enabledTabs$$2_event$$629$$, $events$$13$$);
      $selectOnClick$$ || this._on($enabledTabs$$2_event$$629$$, {click:function($e$$100$$) {
        $e$$100$$.preventDefault();
      }});
      this.$panels$.on("keydown" + this.eventNamespace, this.$_panelKeydown$.bind(this));
      if (this.options.removable) {
        var $revents$$ = {click:this.$_removeTabHandler$}, $closeIcons$$ = this.$_getCloseIcons$($enabledTabs$$2_event$$629$$);
        this._on($closeIcons$$, $revents$$);
        this.$_AddHoverAndActiveListeners$($closeIcons$$);
      }
      this._focusable($enabledTabs$$2_event$$629$$);
      this.$_AddHoverAndActiveListeners$($enabledTabs$$2_event$$629$$);
    }, $_tearDownEvents$:function($noCloseIcon$$) {
      var $enabledTabs$$3$$ = this.$_getEnabledTabs$();
      $noCloseIcon$$ || this.$_UnregisterChildNode$(this.$_getCloseIcons$($enabledTabs$$3$$));
      this.$_UnregisterChildNode$($enabledTabs$$3$$);
      this.$panels$ && this.$panels$.off("keydown" + this.eventNamespace);
    }, $_eventHandler$:function($event$$630$$, $flags$$45$$) {
      var $active$$6_eventData$$11$$ = this.$active$, $tab$$3$$ = $$$$48$$($event$$630$$.currentTarget).closest("li"), $clickedIsActive$$ = $active$$6_eventData$$11$$ && $tab$$3$$[0] === $active$$6_eventData$$11$$[0], $oToContent$$ = this.$_getPanelForTab$($tab$$3$$), $oFromContent$$ = $active$$6_eventData$$11$$ && $active$$6_eventData$$11$$.length ? this.$_getPanelForTab$($active$$6_eventData$$11$$) : $$$$48$$(), $active$$6_eventData$$11$$ = {fromTab:$active$$6_eventData$$11$$, fromContent:$oFromContent$$, 
      toTab:$tab$$3$$, toContent:$oToContent$$};
      $event$$630$$.preventDefault();
      var $oEvent$$ = $flags$$45$$ ? $flags$$45$$ : $event$$630$$;
      $tab$$3$$.hasClass("oj-disabled") || this.$running$ || $clickedIsActive$$ || $oFromContent$$ && $oFromContent$$.length && !1 === this._trigger("beforeDeselect", $oEvent$$, $active$$6_eventData$$11$$) || !this.$_initialRender$ && !1 === this._trigger("beforeSelect", $oEvent$$, $active$$6_eventData$$11$$) || (this.$_initialRender$ ? this.options.selected = this.$_getTabIdOrIndex$($tab$$3$$) : this.option("selected", this.$_getTabIdOrIndex$($tab$$3$$), {_context:{originalEvent:$oEvent$$, $internalSet$:!0}}), 
      this.$active$ = $tab$$3$$, $oToContent$$.addClass("oj-tabs-selected"), $oFromContent$$ && $oFromContent$$.length && $oFromContent$$.removeClass("oj-tabs-selected"), this.$_toggle$($oEvent$$, $active$$6_eventData$$11$$));
    }, $_toggle$:function($event$$631$$, $eventData$$12$$) {
      var $toTab$$ = $eventData$$12$$.toTab.closest("li"), $toShow$$ = $eventData$$12$$.toContent, $toHide$$ = $eventData$$12$$.fromContent;
      this.$running$ = !0;
      var $fromTab$$ = $eventData$$12$$.fromTab.closest("li").removeClass("oj-selected");
      $toHide$$.hide();
      0 < $toHide$$.length && $oj$$53$$.Components.$subtreeHidden$($toHide$$[0]);
      $toTab$$.addClass("oj-selected");
      this.$_isHorizontal$() && 0 < this.$tabs$.length && (0 == $toTab$$.index() ? this.element.addClass("oj-first-child-selected") : this.element.removeClass("oj-first-child-selected"));
      $toShow$$.show();
      0 < $toShow$$.length && $oj$$53$$.Components.$subtreeShown$($toShow$$[0]);
      this.$running$ = !1;
      this.$_initialRender$ || (this._trigger("deselect", $event$$631$$, $eventData$$12$$), this._trigger("select", $event$$631$$, $eventData$$12$$));
      $toHide$$.attr({"aria-expanded":"false", "aria-hidden":"true"});
      $fromTab$$.attr("aria-selected", "false");
      $toShow$$.length && $toHide$$.length ? $fromTab$$.attr("tabIndex", "-1") : $toShow$$.length && this.$tabs$.filter(function() {
        return "0" === $$$$48$$(this).attr("tabIndex");
      }).attr("tabIndex", "-1");
      $toShow$$.attr("aria-expanded", "true").removeAttr("aria-hidden");
      $toTab$$.attr({"aria-selected":"true", tabIndex:"0"});
    }, $_activate$:function($active$$7$$, $flags$$46$$) {
      if (void 0 !== $active$$7$$) {
        var $anchor$$4$$;
        this.$active$ && $active$$7$$[0] === this.$active$[0] || ($anchor$$4$$ = $active$$7$$.find(".oj-tabs-anchor")[0], this.$_eventHandler$({target:$anchor$$4$$, currentTarget:$anchor$$4$$, preventDefault:$$$$48$$.noop}, $flags$$46$$));
      }
    }, $_createCloseIcons$:function() {
      if (this.options.removable && this.$_isHorizontal$()) {
        var $removeCueText$$ = this.$getTranslatedString$("removeCueText"), $self$$182$$ = this;
        this.$_getEnabledTabs$().each(function($index$$270_rmId$$) {
          if ($self$$182$$.$_isTabRemovable$($$$$48$$(this))) {
            var $div$$7$$ = $$$$48$$(this).find("\x3e :first-child");
            $div$$7$$.addClass("oj-removable");
            $index$$270_rmId$$ = "ojtabs-id_rm_" + $index$$270_rmId$$;
            $$$$48$$(this).attr("aria-describedby", $index$$270_rmId$$);
            $$$$48$$("\x3ca href\x3d'#'\x3e").addClass("oj-tabs-icon oj-component-icon oj-clickable-icon-nocontext oj-tabs-close-icon").attr({id:$index$$270_rmId$$, tabIndex:"-1", "aria-label":$removeCueText$$, role:"presentation"}).appendTo($div$$7$$);
          }
        });
      }
    }, $_getEnabledTabs$:function() {
      return $$$$48$$(this.$tabs$.not(".oj-disabled"));
    }, $_getCloseIcons$:function($elem$$104$$) {
      return $elem$$104$$.find(".oj-tabs-close-icon");
    }, $_destroyTabBar$:function() {
      this.$tabs$ && this.$_tearDownEvents$();
      this.$_hasResizeListener$ && ($oj$$53$$.$DomUtils$.$removeResizeListener$(this.element[0], this.$_resizeHandler$), this.$_hasResizeListener$ = !1, this.$_originalWidth$ = void 0);
      this.$_sortable$ && ($oj$$53$$.$DomUtils$.$isTouchSupported$() && this.$_tearDownTouchReorder$(), this.$tablist$.sortable("destroy"), this.$_sortable$ = void 0);
      var $navRoot$$ = this.element.children(".oj-tabs-nav-root"), $navRootNotUL$$ = !$navRoot$$.hasClass("oj-tabs-nav");
      if (this.$tabs$ && (this.$_getCloseIcons$(this.$tabs$).remove(), $navRoot$$.length)) {
        var $afterMe$$ = $navRoot$$, $noFacet$$ = !0, $tabbar$$ = this.$tablist$;
        $navRoot$$.children().each(function() {
          var $child$$12$$ = $$$$48$$(this);
          if ($child$$12$$.hasClass("oj-tabs-conveyorbelt-wrapper")) {
            $child$$12$$ = $tabbar$$;
          } else {
            if (!$child$$12$$.hasClass("oj-tabs-facet")) {
              return;
            }
          }
          $noFacet$$ = !1;
          $afterMe$$.after($child$$12$$);
          $afterMe$$ = $child$$12$$;
        });
        $noFacet$$ && $navRootNotUL$$ && $navRoot$$.after($tabbar$$);
      }
      this.$conveyor$ && (this.$conveyor$.ojConveyorBelt("destroy"), this.$conveyor$.remove(), this.$active$ = this.$conveyor$ = null);
      $navRootNotUL$$ && $navRoot$$.remove();
      this.$tablist$ = this.$tabs$ = null;
    }, _destroy:function() {
      this.$_clearMenu$();
      this.$_isHorizontal$() ? this.element.removeClass("oj-tabs oj-component oj-tabs-horizontal oj-tabs-top oj-tabs-bottom oj-first-child-selected") : this.element.removeClass("oj-tabs oj-component oj-tabs-vertical oj-tabs-start oj-tabs-end oj-helper-clearfix");
      var $self$$183$$ = this, $tab$$4$$, $div$$8$$, $anchor$$5$$, $header$$42$$;
      this.$tabs$.each(function($index$$271$$) {
        $tab$$4$$ = $$$$48$$(this);
        $tab$$4$$.removeAttr("tabIndex").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-controls").removeAttr("aria-disabled").removeAttr("role").removeAttr("data-content").removeClass("oj-active oj-disabled oj-selected oj-tabs-gen-id oj-tabs-tab").removeUniqueId().css("display", "");
        $div$$8$$ = $tab$$4$$.children("div").removeClass("oj-tabs-tab-content");
        $anchor$$5$$ = $div$$8$$.children("a").removeClass("oj-tabs-anchor").removeAttr("tabIndex").removeAttr("role");
        $header$$42$$ = $anchor$$5$$.children();
        $header$$42$$.removeClass("oj-tabs-title").removeAttr("aria-hidden");
        $self$$183$$.$_isOldMarkup$ ? $header$$42$$.prependTo($self$$183$$.$panels$.get($index$$271$$)) : $div$$8$$.hasClass("oj-tabs-gen-div") && $anchor$$5$$.hasClass("oj-tabs-gen-a") ? ($header$$42$$.prependTo($tab$$4$$), $div$$8$$.remove()) : $anchor$$5$$.hasClass("oj-tabs-gen-a") ? ($header$$42$$.prependTo($div$$8$$), $anchor$$5$$.remove()) : $div$$8$$.hasClass("oj-tabs-gen-div") && ($anchor$$5$$.prependTo($tab$$4$$), $div$$8$$.remove());
      });
      var $tabbar$$1$$ = this.$tablist$;
      this.$_destroyTabBar$();
      $tabbar$$1$$.removeAttr("tabIndex").removeAttr("role").removeClass("oj-tabs-nav oj-tabs-nav-root oj-helper-clearfix").removeUniqueId();
      this.$_isOldMarkup$ && $tabbar$$1$$.remove();
      this.$panels$.each(function() {
        $$$$48$$(this).removeAttr("tabIndex").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("role").removeClass("oj-active oj-tabs-selected oj-tabs-gen-id oj-tabs-panel").removeUniqueId().css("display", "");
      });
      this.element.children(".oj-tabs-facet").removeClass("oj-start");
    }, $_isTabRemovable$:function($tab$$5$$) {
      var $removable$$1$$ = this.options.removable;
      return $removable$$1$$ && (!Array.isArray($removable$$1$$) || -1 < $removable$$1$$.indexOf($tab$$5$$.attr("id")));
    }, $_removeTab$:function($tab$$6$$, $event$$632_nextIndex$$1$$, $flags$$47_oEvent$$1$$) {
      if (this.$_isTabRemovable$($tab$$6$$)) {
        var $panel$$4$$ = this.$_getPanelForTab$($tab$$6$$), $eventData$$13$$ = {tab:$tab$$6$$, content:$panel$$4$$};
        $flags$$47_oEvent$$1$$ = $flags$$47_oEvent$$1$$ ? $flags$$47_oEvent$$1$$ : $event$$632_nextIndex$$1$$ ? $event$$632_nextIndex$$1$$ : {target:$tab$$6$$, currentTarget:$tab$$6$$, preventDefault:$$$$48$$.noop};
        $tab$$6$$ && !1 !== this._trigger("beforeRemove", $flags$$47_oEvent$$1$$, $eventData$$13$$) && ($event$$632_nextIndex$$1$$ && $event$$632_nextIndex$$1$$.preventDefault(), $tab$$6$$.hasClass("oj-selected") && ($event$$632_nextIndex$$1$$ = this.$_getNextEnabledTab$(this.$tabs$.index($tab$$6$$)), void 0 === $event$$632_nextIndex$$1$$ ? (this.$active$ = void 0, this.option("selected", void 0, {_context:{originalEvent:$flags$$47_oEvent$$1$$, $internalSet$:!0}})) : (this.$_fireSelectEvents$($event$$632_nextIndex$$1$$, 
        $flags$$47_oEvent$$1$$), this.option("selected", this.$_getTabIdOrIndex$($$$$48$$(this.$tabs$[$event$$632_nextIndex$$1$$])), {_context:{originalEvent:$flags$$47_oEvent$$1$$, $internalSet$:!0}}))), this.$_tearDownEvents$(), this.$tabs$ = this.$tabs$.not($tab$$6$$), $tab$$6$$.remove(), $panel$$4$$.remove(), this.$_updateDisabledTabs$(), this.refresh(), this._trigger("remove", $flags$$47_oEvent$$1$$, $eventData$$13$$));
      }
    }, $_removeTabHandler$:function($event$$633$$, $flags$$48$$) {
      this.$_removeTab$($$$$48$$($event$$633$$.currentTarget).closest("li"), $event$$633$$, $flags$$48$$);
    }, removeTab:function($tabId$$) {
      if ("string" !== typeof $tabId$$) {
        throw Error("'" + $tabId$$ + "' is not a tab id");
      }
      this.$_removeTab$(this.$_getTab$($tabId$$), null, null);
    }, $_wrapLi$:function($header$$43$$, $contentId$$1$$) {
      var $tab$$7$$;
      if ("li" == $header$$43$$.prop("tagName").toLowerCase()) {
        $tab$$7$$ = $header$$43$$;
        var $anchor$$6_div$$9$$ = $tab$$7$$.children("div");
        1 == $anchor$$6_div$$9$$.length && $anchor$$6_div$$9$$.hasClass("oj-tabs-tab-content") ? ($anchor$$6_div$$9$$ = $anchor$$6_div$$9$$.children("a"), 1 != $anchor$$6_div$$9$$.length && ($tab$$7$$.wrapInner("\x3ca href\x3d'#'\x3e\x3c/a\x3e"), $anchor$$6_div$$9$$.addClass("oj-tabs-gen-a"))) : ($anchor$$6_div$$9$$ = $tab$$7$$.wrapInner("\x3cdiv\x3e\x3ca href\x3d'#'\x3e\x3c/a\x3e\x3c/div\x3e").children(), $anchor$$6_div$$9$$.addClass("oj-tabs-gen-div oj-tabs-tab-content"), $anchor$$6_div$$9$$.children().addClass("oj-tabs-gen-a"));
      } else {
        $tab$$7$$ = $header$$43$$.wrap("\x3cli\x3e\x3cdiv\x3e\x3ca href\x3d'#'\x3e\x3c/a\x3e\x3c/div\x3e\x3c/li\x3e").parent().parent().parent(), $tab$$7$$.addClass("oj-tabs-gen-li"), $tab$$7$$.children().addClass("oj-tabs-gen-div oj-tabs-tab-content");
      }
      $contentId$$1$$ && $tab$$7$$.attr("data-content", $contentId$$1$$);
      return $tab$$7$$;
    }, addTab:function($contentAfter_navRoot$$1_newTab_tabbar$$2$$) {
      var $tab$$8$$, $content$$38$$, $index$$273_tabAfter$$ = -1;
      $contentAfter_navRoot$$1_newTab_tabbar$$2$$.tab && $contentAfter_navRoot$$1_newTab_tabbar$$2$$.content ? ($content$$38$$ = $contentAfter_navRoot$$1_newTab_tabbar$$2$$.content, $tab$$8$$ = this.$_wrapLi$($contentAfter_navRoot$$1_newTab_tabbar$$2$$.tab, this.$_getUniqueId$($content$$38$$)), void 0 !== $contentAfter_navRoot$$1_newTab_tabbar$$2$$.index && ($index$$273_tabAfter$$ = $contentAfter_navRoot$$1_newTab_tabbar$$2$$.index)) : ($content$$38$$ = $contentAfter_navRoot$$1_newTab_tabbar$$2$$, 
      $tab$$8$$ = this.$_wrapLi$($$$$48$$($contentAfter_navRoot$$1_newTab_tabbar$$2$$).find("\x3e :first-child"), this.$_getUniqueId$($content$$38$$)));
      $contentAfter_navRoot$$1_newTab_tabbar$$2$$ = this.element.children(".oj-tabs-nav-root");
      $contentAfter_navRoot$$1_newTab_tabbar$$2$$ = $contentAfter_navRoot$$1_newTab_tabbar$$2$$.hasClass("oj-tabs-nav") ? $contentAfter_navRoot$$1_newTab_tabbar$$2$$ : $contentAfter_navRoot$$1_newTab_tabbar$$2$$.length ? $contentAfter_navRoot$$1_newTab_tabbar$$2$$.find(".oj-tabs-nav") : this.element.children(".oj-tabs-nav");
      var $isNew$$6$$ = !1;
      $contentAfter_navRoot$$1_newTab_tabbar$$2$$.length || ($contentAfter_navRoot$$1_newTab_tabbar$$2$$ = $$$$48$$("\x3cul\x3e"), $isNew$$6$$ = !0);
      $isNew$$6$$ && $contentAfter_navRoot$$1_newTab_tabbar$$2$$.prependTo(this.element);
      0 <= $index$$273_tabAfter$$ && $index$$273_tabAfter$$ < $contentAfter_navRoot$$1_newTab_tabbar$$2$$.children().length ? ($index$$273_tabAfter$$ = $contentAfter_navRoot$$1_newTab_tabbar$$2$$.children(":eq(" + $index$$273_tabAfter$$ + ")"), $contentAfter_navRoot$$1_newTab_tabbar$$2$$ = this.element.children("#" + $index$$273_tabAfter$$.attr("aria-controls")), $index$$273_tabAfter$$.before($tab$$8$$), $contentAfter_navRoot$$1_newTab_tabbar$$2$$.before($content$$38$$)) : ($tab$$8$$.appendTo($contentAfter_navRoot$$1_newTab_tabbar$$2$$), 
      $content$$38$$.appendTo(this.element));
      this.refresh();
      0 == this.$active$.length && this.$_fireSelectEvents$(0);
      var $self$$184$$ = this;
      window.setTimeout(function() {
        $self$$184$$.$tabs$ && $tab$$8$$[0].scrollIntoView(!1);
      }, 0);
    }, $_setupTouchReorder$:function() {
      this.$_touchProxy$ = $oj$$53$$.$_TouchProxy$.$addTouchListeners$(this.$tablist$);
    }, $_tearDownTouchReorder$:function() {
      $oj$$53$$.$_TouchProxy$.$removeTouchListeners$(this.$tablist$);
    }, $_setupReorder$:function() {
      if (this.options.reorderable) {
        var $self$$185$$ = this;
        $oj$$53$$.$DomUtils$.$isTouchSupported$() && this.$_setupTouchReorder$();
        this.$tablist$.sortable({axis:$self$$185$$.$_isHorizontal$() ? "x" : "y", stop:function($event$$634$$, $ui$$38$$) {
          var $mvTab$$ = $ui$$38$$.item;
          $self$$185$$.$_doReorder$($event$$634$$, $mvTab$$, $mvTab$$.prev()) || $self$$185$$.$tablist$.sortable("cancel");
        }});
        this.$_sortable$ = !0;
      } else {
        this.$_tearDownTouchReorder$(), this.$_sortable$ = !1;
      }
    }, $_InitOptions$:function($originalDefaults$$17$$, $constructorOptions$$19$$) {
      var $edge$$15$$ = $constructorOptions$$19$$.edge;
      this.$_edgeSpecified$ = "top" == $edge$$15$$ || "bottom" == $edge$$15$$ || "start" == $edge$$15$$ || "end" == $edge$$15$$;
      this._super($originalDefaults$$17$$, $constructorOptions$$19$$);
    }, $_orientationToEdge$:function($value$$287$$) {
      return "horizontal" == $value$$287$$ ? "top" : "vertical" == $value$$287$$ ? "start" : null;
    }, $_setupEdge$:function($edge$$16$$) {
      if (this.$_initialRender$ && !this.$_edgeSpecified$ || !$edge$$16$$) {
        $edge$$16$$ = this.$_orientationToEdge$(this.options.orientation);
      }
      var $oEdge$$ = this.options.edge;
      this.element.removeClass("oj-tabs-top oj-tabs-bottom oj-tabs-start oj-tabs-end");
      switch($edge$$16$$) {
        case "top":
        ;
        case "bottom":
          !this.$panels$ || "start" != $oEdge$$ && "end" != $oEdge$$ || this.element.removeClass("oj-tabs-vertical oj-helper-clearfix");
          this.element.addClass("oj-tabs oj-component oj-tabs-horizontal");
          "bottom" == $edge$$16$$ ? this.element.addClass("oj-tabs-bottom") : this.element.addClass("oj-tabs-top");
          this.$_initialRender$ ? this.options.orientation = "horizontal" : "horizontal" != this.options.orientation && this.option("orientation", "horizontal", {_context:{$internalSet$:!0}, changed:!0});
          break;
        case "start":
        ;
        case "end":
          !this.$panels$ || "top" != $oEdge$$ && "bottom" != $oEdge$$ || this.element.removeClass("oj-tabs-horizontal");
          this.element.addClass("oj-tabs oj-component oj-tabs-vertical oj-helper-clearfix");
          "end" == $edge$$16$$ ? this.element.addClass("oj-tabs-end") : this.element.addClass("oj-tabs-start");
          this.$_initialRender$ ? this.options.orientation = "vertical" : "vertical" != this.options.orientation && this.option("orientation", "vertical", {_context:{$internalSet$:!0}, changed:!0});
          break;
        default:
          return!1;
      }
      this.$_initialRender$ ? this.options.edge = $edge$$16$$ : this.options.edge != $edge$$16$$ && this.option("edge", $edge$$16$$, {_context:{$internalSet$:!0}, changed:!0});
      return!0;
    }, $_getTabbarWrapper$:function() {
      var $ulParent$$ = this.$tablist$.parent();
      $ulParent$$.hasClass("oj-tabs-conveyor") || ($ulParent$$ = this.$tablist$.wrap("\x3cdiv\x3e").parent().addClass("oj-tabs-conveyor"), (0 < this.element.children(".oj-tabs-facet").length ? $ulParent$$.wrap("\x3cdiv\x3e").wrap("\x3cdiv\x3e").parent().parent().addClass("oj-tabs-conveyorbelt-wrapper") : $ulParent$$).wrap("\x3cdiv\x3e").parent().addClass("oj-tabs-nav-root").uniqueId().attr("id"));
      return $ulParent$$;
    }, $_addPrefixId$:function($elem$$105$$) {
      0 > $elem$$105$$.id.indexOf("ojtabs-id_") && $$$$48$$($elem$$105$$).attr("id", "ojtabs-id_" + $elem$$105$$.id);
    }, getNodeBySubId:function($index$$274_locator$$55$$) {
      if (null == $index$$274_locator$$55$$) {
        return this.element ? this.element[0] : null;
      }
      var $subId$$60$$ = $index$$274_locator$$55$$.subId;
      $index$$274_locator$$55$$ = $index$$274_locator$$55$$.index;
      if ("oj-conveyorbelt" != $subId$$60$$ && ("number" !== typeof $index$$274_locator$$55$$ || 0 > $index$$274_locator$$55$$ || $index$$274_locator$$55$$ >= this.$panels$.length)) {
        return null;
      }
      switch($subId$$60$$) {
        case "oj-conveyorbelt":
          return this.$conveyor$ ? this.$conveyor$[0] : null;
        case "oj-tabs-panel":
          return this.$_getPanelForTab$(this.$tabs$[$index$$274_locator$$55$$])[0];
        case "oj-tabs-tab":
          return this.$tabs$[$index$$274_locator$$55$$];
        case "oj-tabs-title":
          return $$$$48$$(this.$tabs$[$index$$274_locator$$55$$]).find(".oj-tabs-title")[0];
        case "oj-tabs-close-icon":
        ;
        case "oj-tabs-close":
          return $$$$48$$(this.$tabs$[$index$$274_locator$$55$$]).find(".oj-tabs-close-icon")[0];
      }
      return null;
    }, getSubIdByNode:function($node$$112$$) {
      for (var $panels_title$$11$$ = [], $i$$419_tabIndex$$8$$ = 0;$i$$419_tabIndex$$8$$ < this.$tabs$.length;$i$$419_tabIndex$$8$$++) {
        $panels_title$$11$$.push(this.$_getPanelForTab$(this.$tabs$[$i$$419_tabIndex$$8$$])[0]);
      }
      for (var $closeIcon_panelIndex$$ = $i$$419_tabIndex$$8$$ = -1, $currentNode$$2$$ = $node$$112$$;$currentNode$$2$$;) {
        if (this.$conveyor$ && $currentNode$$2$$ === this.$conveyor$[0]) {
          return{subId:"oj-conveyorbelt"};
        }
        $i$$419_tabIndex$$8$$ = Array.prototype.indexOf.call(this.$tabs$, $currentNode$$2$$);
        if (-1 != $i$$419_tabIndex$$8$$) {
          break;
        }
        $closeIcon_panelIndex$$ = $panels_title$$11$$.indexOf($currentNode$$2$$);
        if (-1 != $closeIcon_panelIndex$$) {
          return{subId:"oj-tabs-panel", index:$closeIcon_panelIndex$$};
        }
        $currentNode$$2$$ = $currentNode$$2$$.parentElement;
      }
      if (-1 != $i$$419_tabIndex$$8$$) {
        for ($panels_title$$11$$ = this.getNodeBySubId({subId:"oj-tabs-title", index:$i$$419_tabIndex$$8$$}), $closeIcon_panelIndex$$ = this.getNodeBySubId({subId:"oj-tabs-close", index:$i$$419_tabIndex$$8$$}), $currentNode$$2$$ = $node$$112$$;$currentNode$$2$$;) {
          if ($currentNode$$2$$ === $panels_title$$11$$) {
            return{subId:"oj-tabs-title", index:$i$$419_tabIndex$$8$$};
          }
          if ($currentNode$$2$$ === $closeIcon_panelIndex$$) {
            return{subId:"oj-tabs-close", index:$i$$419_tabIndex$$8$$};
          }
          if ($currentNode$$2$$ === this.$tabs$[$i$$419_tabIndex$$8$$]) {
            return{subId:"oj-tabs-tab", index:$i$$419_tabIndex$$8$$};
          }
          $currentNode$$2$$ = $currentNode$$2$$.parentElement;
        }
      }
      return null;
    }, $_getConveyorWrapperMaxWidth$:function() {
      return this.$_originalWidth$ + 10;
    }, $_getTabsWidth$:function() {
      var $tabbar$$3$$ = this.element.find(".oj-tabs-conveyorbelt-wrapper");
      return $tabbar$$3$$.length ? $tabbar$$3$$[0].clientWidth : this.element[0].clientWidth;
    }, $_isOverflow$:function() {
      return this.$_originalWidth$ > this.$_getTabsWidth$();
    }, $_getTabMaxWidth$:function() {
      var $max$$8$$ = Math.floor(this.$_getTabsWidth$() / this.$tabs$.length);
      this.options.removable && ($max$$8$$ -= 28);
      return $max$$8$$;
    }, $_applyTabMaxWidth$:function() {
      var $maxWidth$$2$$ = this.$_getTabMaxWidth$();
      this.$tablist$.find(".oj-tabs-title").each(function() {
        $$$$48$$(this).css("max-width", "" + $maxWidth$$2$$ + "px").addClass("oj-tabs-title-overflow");
      });
    }, $_removeTabMaxWidth$:function() {
      this.$tablist$.find(".oj-tabs-title").each(function() {
        $$$$48$$(this).css("max-width", "").removeClass("oj-tabs-title-overflow");
      });
    }, $_logMessage$:function() {
    }, $_handleResize$:function() {
      this.$_isProgressive$() && (this.$_isOverflow$() ? this.$_applyTabMaxWidth$() : this.$_removeTabMaxWidth$());
    }, $_isProgressive$:function() {
      return "auto" == this.options.truncation || "progressive" == this.options.truncation;
    }, $_truncateBeforeOverflow$:function() {
      this.$_isHorizontal$() && 0 < this.$tabs$.length && (null == this.$_resizeHandler$ && (this.$_resizeHandler$ = this.$_handleResize$.bind(this)), $oj$$53$$.$DomUtils$.$addResizeListener$(this.element[0], this.$_resizeHandler$), this.$_hasResizeListener$ = !0, this.$_originalWidth$ = this.$_getTabbarWrapper$()[0].scrollWidth, this.$_isProgressive$() && this.$_isOverflow$() && this.$_applyTabMaxWidth$());
    }, $_NotifyShown$:function() {
      this._super();
      this.refresh();
    }, $_NotifyAttached$:function() {
      this._super();
      this.refresh();
    }, $_buildContextMenuItem$:function($cmd$$) {
      return $$$$48$$("\x3ca\x3e").text(this.$getTranslatedString$($_arMenuKeyMap$$[$cmd$$])).attr("href", "#").wrap("\x3cli\x3e").parent().attr("id", $_arMenuCmdMap$$[$cmd$$]).addClass("oj-menu-item");
    }, $_menu_cut$:function($obj$$65$$) {
      if (!$obj$$65$$ || !$obj$$65$$.length) {
        return!1;
      }
      this.$_menu$.$cutTab$ = $obj$$65$$;
    }, $_menu_paste$:function($event$$635$$, $obj$$66$$, $pasteBefore$$) {
      if (!$obj$$66$$ || !$obj$$66$$.length || !this.$_menu$.$cutTab$) {
        return!1;
      }
      var $mvTab$$1$$ = this.$_menu$.$cutTab$;
      this.$_menu$.$cutTab$ = !1;
      this.$_doReorder$($event$$635$$, $mvTab$$1$$, $obj$$66$$, $pasteBefore$$);
    }, $_menu_remove$:function($event$$636$$, $obj$$67$$) {
      if (!$obj$$67$$ || !$obj$$67$$.length) {
        return!1;
      }
      this.$_removeTab$($obj$$67$$, null, $event$$636$$);
    }, $_handleContextMenuSelect$:function($ev$$3$$, $ui$$39$$) {
      var $id$$52$$ = $ui$$39$$ ? $ui$$39$$.item.attr("id") : void 0;
      "ojtabscut" === $id$$52$$ ? this.$_menu_cut$(this.$_menu$.tab) : "ojtabspastebefore" === $id$$52$$ ? this.$_menu_paste$($ev$$3$$, this.$_menu$.tab, !0) : "ojtabspasteafter" === $id$$52$$ ? this.$_menu_paste$($ev$$3$$, this.$_menu$.tab, !1) : "ojtabsremove" === $id$$52$$ && this.$_menu_remove$($ev$$3$$, this.$_menu$.tab);
    }, $_initMenu$:function($menu$$16_newVal$$4$$) {
      if ($menu$$16_newVal$$4$$ = $menu$$16_newVal$$4$$ || this.options.contextMenu) {
        if ("function" == $$$$48$$.type($menu$$16_newVal$$4$$)) {
          try {
            $menu$$16_newVal$$4$$ = $menu$$16_newVal$$4$$();
          } catch ($e$$101$$) {
            $menu$$16_newVal$$4$$ = null;
          }
          $$$$48$$.type($menu$$16_newVal$$4$$);
        }
        $menu$$16_newVal$$4$$ && $$$$48$$($menu$$16_newVal$$4$$).length && (this.options.contextMenu = $menu$$16_newVal$$4$$);
      }
      this.$_addContextMenu$();
    }, $_addIfNotExist$:function($$ul$$, $itemList_menuItem$$1$$, $command$$12$$) {
      -1 == $itemList_menuItem$$1$$.indexOf($command$$12$$) && ($itemList_menuItem$$1$$ = this.$_buildContextMenuItem$($command$$12$$), $$ul$$.append($itemList_menuItem$$1$$));
    }, $_addContextMenu$:function() {
      var $$menuContainer$$ = $$$$48$$(this.options.contextMenu);
      if ($$menuContainer$$ || this.options.reorderable || this.options.removable) {
        var $self$$186$$ = this;
        if (0 == $$menuContainer$$.length) {
          var $key$$173$$ = this.options.reorderable ? "labelReorder" : $_arMenuKeyMap$$.remove, $menuId$$ = this.element.uniqueId().attr("id") + "contextmenu", $$menuContainer$$ = $$$$48$$("\x3cul\x3e");
          $$menuContainer$$.css("display", "none").attr("id", $menuId$$).attr("aria-label", this.$getTranslatedString$($key$$173$$));
          $$$$48$$(document.body).append($$menuContainer$$);
          $$menuContainer$$.ojMenu();
          this.options.contextMenu = "#" + $menuId$$;
        }
        var $itemList$$1$$ = [];
        $$menuContainer$$.find("[data-oj-command]").each(function() {
          if (0 === $$$$48$$(this).children("a").length) {
            var $command$$13$$ = $$$$48$$(this).attr("data-oj-command").slice(8);
            $$$$48$$(this).replaceWith($self$$186$$.$_buildContextMenuItem$($command$$13$$));
            $$$$48$$(this).addClass("oj-menu-item");
            $itemList$$1$$.push($command$$13$$);
          }
        });
        this.options.reorderable && (this.$_addIfNotExist$($$menuContainer$$, $itemList$$1$$, "cut"), this.$_addIfNotExist$($$menuContainer$$, $itemList$$1$$, "paste-before"), this.$_addIfNotExist$($$menuContainer$$, $itemList$$1$$, "paste-after"), this.$_menu$.$$elemPasteBefore$ = $$menuContainer$$.find("#ojtabspastebefore"), this.$_menu$.$$elemPasteAfter$ = $$menuContainer$$.find("#ojtabspasteafter"));
        this.options.removable && (this.$_addIfNotExist$($$menuContainer$$, $itemList$$1$$, "remove"), this.$_menu$.$$elemRemove$ = $$menuContainer$$.find("#ojtabsremove"));
        this.$_menu$.$$container$ = $$menuContainer$$;
        $$menuContainer$$.ojMenu("refresh");
        $$menuContainer$$.on("ojselect", $$$$48$$.proxy(this.$_handleContextMenuSelect$, this));
      }
    }, $_clearMenu$:function() {
      var $menu$$17$$ = this.$_menu$;
      $menu$$17$$ && ($menu$$17$$.$$container$.off("ojselect"), $menu$$17$$.$$container$ = null);
    }, $_doReorder$:function($event$$637$$, $mvTab$$2$$, $prevTab$$, $pasteBefore$$1$$) {
      var $mvContent$$ = this.$_getPanelForTab$($mvTab$$2$$), $eventData$$14$$ = {tab:$mvTab$$2$$, content:$mvContent$$};
      if (!1 === this._trigger("beforeReorder", $event$$637$$, $eventData$$14$$)) {
        return!1;
      }
      var $mvInd_prevContent$$ = this.$tabs$.index($mvTab$$2$$);
      if ($prevTab$$.length) {
        if (this.$tabs$.index($prevTab$$) == $mvInd_prevContent$$) {
          return!0;
        }
        $mvInd_prevContent$$ = this.$_getPanelForTab$($prevTab$$);
        $pasteBefore$$1$$ ? ($prevTab$$.before($mvTab$$2$$), $mvInd_prevContent$$.before($mvContent$$)) : ($prevTab$$.after($mvTab$$2$$), $mvInd_prevContent$$.after($mvContent$$));
      } else {
        if (0 < this.$tabs$.length) {
          if (0 == $mvInd_prevContent$$) {
            return!0;
          }
          this.$tabs$.first().before($mvTab$$2$$);
          this.$panels$.first().before($mvContent$$);
        }
      }
      this.$_updateDisabledTabs$();
      this.refresh();
      $mvTab$$2$$.focus();
      this._trigger("reorder", $event$$637$$, $eventData$$14$$);
      return!0;
    }, $_sanitizeSelector$:function($hash$$7$$) {
      return $hash$$7$$ ? $hash$$7$$.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$\x26") : "";
    }, $_getPanelForTab$:function($tab$$9$$) {
      return this.element.find(this.$_sanitizeSelector$("#" + $$$$48$$($tab$$9$$).attr("aria-controls")));
    }, $_getUniqueId$:function($panel$$5$$) {
      var $id$$53$$ = $panel$$5$$.attr("id");
      $id$$53$$ || ($id$$53$$ = $panel$$5$$.uniqueId().attr("id"), $panel$$5$$.addClass("oj-tabs-gen-id"));
      return $id$$53$$;
    }, $_getTab$:function($idOrIndex$$1_index$$277$$) {
      $idOrIndex$$1_index$$277$$ = this.$_getIndexByTabOrContentId$($idOrIndex$$1_index$$277$$);
      if (-1 !== $idOrIndex$$1_index$$277$$) {
        return $$$$48$$(this.$tabs$[$idOrIndex$$1_index$$277$$]);
      }
    }, $_getIndexByTabOrContentId$:function($idOrIndex$$2_selector$$37_tabOrContent$$) {
      var $index$$278$$ = -1;
      "number" === typeof $idOrIndex$$2_selector$$37_tabOrContent$$ ? 0 <= $idOrIndex$$2_selector$$37_tabOrContent$$ && $idOrIndex$$2_selector$$37_tabOrContent$$ < this.$tabs$.length && ($index$$278$$ = $idOrIndex$$2_selector$$37_tabOrContent$$) : "string" === typeof $idOrIndex$$2_selector$$37_tabOrContent$$ && ($idOrIndex$$2_selector$$37_tabOrContent$$ = this.$_sanitizeSelector$($idOrIndex$$2_selector$$37_tabOrContent$$), $oj$$53$$.$DomUtils$.$isValidIdentifier$($idOrIndex$$2_selector$$37_tabOrContent$$) && 
      ($idOrIndex$$2_selector$$37_tabOrContent$$ = this.element.find("#" + $idOrIndex$$2_selector$$37_tabOrContent$$), $idOrIndex$$2_selector$$37_tabOrContent$$.length && ($index$$278$$ = this.$tabs$.index($idOrIndex$$2_selector$$37_tabOrContent$$), -1 == $index$$278$$ && ($index$$278$$ = this.$panels$.index($idOrIndex$$2_selector$$37_tabOrContent$$)))));
      return $index$$278$$;
    }, $_getSelectedIndex$:function() {
      var $selected$$24$$ = this.options.selected;
      return "number" === typeof $selected$$24$$ ? $selected$$24$$ : this.$tabs$.index($$$$48$$("#" + $selected$$24$$));
    }, $_getTabIdOrIndex$:function($tab$$10$$) {
      if ($tab$$10$$) {
        var $id$$54$$ = $tab$$10$$.attr("id");
        return $id$$54$$ ? $id$$54$$ : this.$tabs$.index($tab$$10$$);
      }
    }, $_setOjDisabledOnTab$:function($disTabs$$) {
      var $children$$13$$ = (this.$tablist$ ? this.$tablist$ : this.element.children("ul")).children("li");
      $children$$13$$.removeClass("oj-disabled").removeAttr("aria-disabled");
      var $arr$$23$$ = [];
      if ($disTabs$$ && 0 < $disTabs$$.length) {
        for (var $id$$55$$, $tab$$11$$, $i$$420$$ = 0;$i$$420$$ < $disTabs$$.length;$i$$420$$++) {
          if ($tab$$11$$ = this.$_getTab$($disTabs$$[$i$$420$$])) {
            $tab$$11$$.addClass("oj-disabled"), $tab$$11$$.attr("aria-disabled", "true"), $tab$$11$$.find(".oj-tabs-anchor").removeAttr("href"), $id$$55$$ = $tab$$11$$.attr("id"), $arr$$23$$.push($id$$55$$ ? $id$$55$$ : $children$$13$$.index($tab$$11$$));
          }
        }
      }
      this.$_updateDisabledTabs$($arr$$23$$);
    }, $_updateDisabledTabs$:function($arr$$24$$) {
      if (!$arr$$24$$) {
        $arr$$24$$ = [];
        var $self$$187$$ = this;
        this.$tablist$.children().each(function() {
          var $tab$$12$$ = $$$$48$$(this);
          $tab$$12$$.hasClass("oj-disabled") && $arr$$24$$.push($self$$187$$.$_getTabIdOrIndex$($tab$$12$$));
        });
      }
      $oj$$53$$.$Object$.$_compareSet$(this.options.disabledTabs, $arr$$24$$) || (this.$_initialRender$ ? this.options.disabledTabs = $arr$$24$$ : this.option({disabledTabs:$arr$$24$$}, {_context:{$internalSet$:!0, $writeback$:!0}, changed:!0}));
    }, $_isInATab$:function($element$$171$$) {
      var $found$$8$$ = !1;
      this.$tabs$.each(function() {
        if (this === $element$$171$$ || $$$$48$$.contains(this, $element$$171$$)) {
          return $found$$8$$ = !0, !1;
        }
      });
      return $found$$8$$;
    }, $_createTabbar$:function() {
      var $contentIds$$ = this.$_getContentIds$(), $self$$188$$ = this, $tabbar$$5$$ = this.element.children("ul");
      0 < $tabbar$$5$$.length && $tabbar$$5$$.children("li").each(function($index$$280$$) {
        $self$$188$$.$_wrapLi$($$$$48$$(this), $contentIds$$[$index$$280$$]);
      });
    }, $_createTabbarFromOldMarkup$:function() {
      var $tabbar$$6$$ = this.element.children("ul");
      if (0 == $tabbar$$6$$.length) {
        var $self$$189$$ = this, $contentIds$$1$$ = this.$_getContentIds$(), $tabbar$$6$$ = $$$$48$$("\x3cul\x3e");
        this.element.children().each(function($index$$281$$) {
          $self$$189$$.$_wrapLi$($$$$48$$(this).find("\x3e :first-child"), $contentIds$$1$$[$index$$281$$]).appendTo($tabbar$$6$$);
        });
        $tabbar$$6$$.prependTo(this.element);
      }
    }, $_addFacets$:function() {
      var $navRoot$$3$$ = this.element.children(".oj-tabs-nav-root"), $self$$190$$ = this, $tabbarWrapper$$ = $navRoot$$3$$.children(".oj-tabs-conveyorbelt-wrapper");
      $navRoot$$3$$.index();
      this.element.children(".oj-tabs-facet").each(function() {
        var $facet$$1$$ = $$$$48$$(this), $facetId$$ = $self$$190$$.$_getUniqueId$($facet$$1$$);
        0 == $navRoot$$3$$.find("#" + $facetId$$).length && ($facet$$1$$.hasClass("oj-start") ? $tabbarWrapper$$.before($facet$$1$$) : $facet$$1$$.appendTo($navRoot$$3$$));
      });
    }, $_getContentIds$:function() {
      var $contentIds$$2$$ = [], $self$$191$$ = this;
      this.element.children(":not(ul):not(.oj-tabs-facet)").each(function() {
        var $panel$$6$$ = $$$$48$$(this);
        $panel$$6$$.addClass("oj-tabs-panel");
        $contentIds$$2$$.push($self$$191$$.$_getUniqueId$($panel$$6$$));
      });
      return $contentIds$$2$$;
    }});
  })();
});

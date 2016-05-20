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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojcollapsible"], function($oj$$59$$, $$$$54$$) {
  (function() {
    $oj$$59$$.$__registerWidget$("oj.ojAccordion", $$$$54$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{multiple:!1, expanded:null, beforeExpand:null, expand:null, beforeCollapse:null, collapse:null}, _ComponentCreate:function() {
      this._super();
      this.element.addClass("oj-accordion oj-component").attr("role", "group");
      this.options.expanded = this.$_expandedIndexToId$(this.options.expanded);
      this.$_refresh$();
    }, $_NotifyContextMenuGesture$:function($menu$$18$$, $event$$642$$, $eventType$$47$$) {
      this.$_OpenContextMenu$($event$$642$$, $eventType$$47$$, {launcher:this.element.find(".oj-collapsible-header-icon").first()});
    }, _destroy:function() {
      this.element.removeClass("oj-accordion oj-component").removeAttr("role");
      this.element.children().removeClass("oj-accordion-collapsible");
      this.element.children(".oj-accordion-created").removeClass("oj-accordion-created").ojCollapsible("destroy");
    }, _setOption:function($key$$178$$, $value$$291$$, $flags$$52$$) {
      if ("multiple" === $key$$178$$) {
        !1 == $value$$291$$ && !0 == this.options.multiple && this.element.children(".oj-expanded").first().siblings(".oj-collapsible").ojCollapsible("collapse", !1);
      } else {
        if ("expanded" === $key$$178$$) {
          this.$_setExpandedOption$($value$$291$$);
          return;
        }
      }
      this._super($key$$178$$, $value$$291$$, $flags$$52$$);
    }, refresh:function() {
      this._super();
      this.$_refresh$();
    }, $_refresh$:function() {
      this.$_makeCollapsible$();
      this._setOption("disabled", this.options.disabled);
      this.$_internalSetExpanded$ = !0;
      this._setOption("expanded", this.options.expanded);
      this.$_internalSetExpanded$ = !1;
      this.$_setupEvents$();
    }, $_makeCollapsible$:function() {
      this.element.children(":oj-collapsible").each(function() {
        $$$$54$$(this).ojCollapsible("option", "expandArea", "header");
      });
      this.$collapsibles$ = this.element.children().not(":oj-ojCollapsible").ojCollapsible({expandArea:"header"}).addClass("oj-accordion-created").end().addClass("oj-accordion-collapsible");
    }, $_setupEvents$:function() {
      var $events$$14$$ = {keydown:this.$_keydown$, ojbeforeexpand:this.$_beforeExpandHandler$, ojexpand:this.$_expandHandler$, ojbeforecollapse:this.$_beforeCollapseHandler$, ojcollapse:this.$_collapseHandler$};
      this._off(this.$collapsibles$);
      this._on(this.$collapsibles$, $events$$14$$);
    }, $_keydown$:function($event$$643$$) {
      if (!$event$$643$$.altKey && !$event$$643$$.ctrlKey && ($$$$54$$($event$$643$$.target).hasClass("oj-collapsible-header") || $$$$54$$($event$$643$$.target).hasClass("oj-collapsible-header-icon"))) {
        var $keyCode$$28$$ = $$$$54$$.ui.keyCode, $enabledCollapsibles$$ = this.$collapsibles$.not(".oj-disabled"), $length$$20$$ = $enabledCollapsibles$$.length, $target$$129$$ = $$$$54$$($event$$643$$.target).closest(".oj-collapsible"), $currentIndex$$4$$ = $enabledCollapsibles$$.index($target$$129$$), $toFocus$$ = !1;
        if (0 <= $currentIndex$$4$$) {
          switch($event$$643$$.keyCode) {
            case $keyCode$$28$$.RIGHT:
            ;
            case $keyCode$$28$$.DOWN:
              $toFocus$$ = $enabledCollapsibles$$[($currentIndex$$4$$ + 1) % $length$$20$$];
              break;
            case $keyCode$$28$$.LEFT:
            ;
            case $keyCode$$28$$.UP:
              $toFocus$$ = $enabledCollapsibles$$[($currentIndex$$4$$ - 1 + $length$$20$$) % $length$$20$$];
              break;
            case $keyCode$$28$$.HOME:
              $toFocus$$ = $enabledCollapsibles$$[0];
              break;
            case $keyCode$$28$$.END:
              $toFocus$$ = $enabledCollapsibles$$[$length$$20$$ - 1];
          }
        }
        $toFocus$$ && ($target$$129$$ && $$$$54$$($target$$129$$).trigger("ojfocusout"), $$$$54$$($toFocus$$).trigger("ojfocus"), $event$$643$$.preventDefault());
      }
    }, $_findTargetSiblings$:function($closestCollapsible_event$$644$$) {
      return!this.options.multiple && ($closestCollapsible_event$$644$$ = $$$$54$$($closestCollapsible_event$$644$$.target).closest(".oj-collapsible"), $closestCollapsible_event$$644$$.parent().is(":oj-ojAccordion")) ? $closestCollapsible_event$$644$$.siblings(".oj-collapsible.oj-expanded").map(function() {
        return $$$$54$$(this).data("oj-ojCollapsible");
      }) : $$$$54$$();
    }, $_beforeExpandHandler$:function($event$$645$$) {
      if (!this.$_isTargetMyCollapsible$($event$$645$$)) {
        return!0;
      }
      var $result$$66$$, $self$$193$$ = this, $newData$$1$$;
      this.$_findTargetSiblings$($event$$645$$).each(function() {
        var $beforeCollapsedData_collapsible$$ = this.element;
        $newData$$1$$ = $self$$193$$.$_initEventData$($beforeCollapsedData_collapsible$$, $$$$54$$($event$$645$$.target));
        $beforeCollapsedData_collapsible$$ = {header:$beforeCollapsedData_collapsible$$.find(".oj-collapsible-header"), content:$beforeCollapsedData_collapsible$$.find(".oj-collapsible-content")};
        return $result$$66$$ = this._trigger("beforeCollapse", $event$$645$$, $beforeCollapsedData_collapsible$$);
      });
      $newData$$1$$ || ($newData$$1$$ = $self$$193$$.$_initEventData$(null, $$$$54$$($event$$645$$.target)));
      this.options.multiple || this._trigger("beforeExpand", $event$$645$$, $newData$$1$$);
      return $result$$66$$;
    }, $_expandHandler$:function($event$$646$$, $eventData$$16$$) {
      if (this.$_isTargetMyCollapsible$($event$$646$$) && !this.$_duringSetExpandedOption$) {
        var $newData$$2$$, $self$$194$$ = this;
        this.$_findTargetSiblings$($event$$646$$).each(function() {
          this.collapse(!1, $event$$646$$, $eventData$$16$$);
          $newData$$2$$ = $self$$194$$.$_initEventData$(this.element, $$$$54$$($event$$646$$.target));
        });
        $newData$$2$$ || ($newData$$2$$ = $self$$194$$.$_initEventData$(null, $$$$54$$($event$$646$$.target)));
        this.options.multiple || this._trigger("expand", $event$$646$$, $newData$$2$$);
        this.$_updateExpanded$();
      }
    }, $_beforeCollapseHandler$:function($event$$647$$, $eventData$$17$$) {
      return this.$_isTargetMyCollapsible$($event$$647$$) && !this.options.multiple ? this._trigger("beforeCollapse", $event$$647$$, this.$_initCollapseEventData$($event$$647$$, $eventData$$17$$)) : !0;
    }, $_collapseHandler$:function($event$$648$$, $eventData$$18$$) {
      if (!this.$_duringSetExpandedOption$ && this.$_isTargetMyCollapsible$($event$$648$$)) {
        var $newData$$3$$ = this.$_initCollapseEventData$($event$$648$$, $eventData$$18$$);
        this.options.multiple || this._trigger("collapse", $event$$648$$, $newData$$3$$);
        this.$_updateExpanded$();
      }
    }, $_initEventData$:function($fromC$$, $toC$$) {
      return{fromCollapsible:$fromC$$, toCollapsible:$toC$$};
    }, $_initCollapseEventData$:function($event$$649$$, $eventData$$20$$) {
      var $newData$$4$$;
      if ($eventData$$20$$.toCollapsible) {
        $newData$$4$$ = $eventData$$20$$;
      } else {
        if ($event$$649$$.originalEvent && $event$$649$$.originalEvent.target) {
          var $collapsible$$1$$ = $$$$54$$($event$$649$$.originalEvent.target);
          $collapsible$$1$$.hasClass("oj-collapsible") && ($newData$$4$$ = this.$_initEventData$($$$$54$$($event$$649$$.target), $collapsible$$1$$));
        }
        $newData$$4$$ || ($newData$$4$$ = this.$_initEventData$($$$$54$$($event$$649$$.target), null));
      }
      return $newData$$4$$;
    }, $_isTargetMyCollapsible$:function($event$$650$$) {
      return $$$$54$$($event$$650$$.target).is(this.$collapsibles$);
    }, $_updateExpanded$:function() {
      var $cid$$8$$, $result$$67$$ = [];
      this.$collapsibles$.each(function($index$$291$$) {
        $$$$54$$(this).ojCollapsible("option", "expanded") && ($cid$$8$$ = $$$$54$$(this).attr("id"), $result$$67$$.push($cid$$8$$ ? $cid$$8$$ : $index$$291$$));
      });
      $oj$$59$$.$Object$.$_compareSet$(this.options.expanded, $result$$67$$) || this.option("expanded", $result$$67$$, {_context:{$internalSet$:!0, $writeback$:!0}});
    }, $_expandedIndexToId$:function($expanded$$11$$) {
      if (Array.isArray($expanded$$11$$)) {
        var $id$$57$$, $newExp$$ = [];
        this.element.children().each(function($index$$292$$) {
          ($id$$57$$ = $$$$54$$(this).attr("id")) ? -1 != $expanded$$11$$.indexOf($id$$57$$) ? $newExp$$.push($id$$57$$) : -1 != $expanded$$11$$.indexOf($index$$292$$) && $newExp$$.push($id$$57$$) : -1 != $expanded$$11$$.indexOf($index$$292$$) && $newExp$$.push($index$$292$$);
        });
        !this.options.multiple && 1 < $newExp$$.length && ($newExp$$ = [$newExp$$[$newExp$$.length - 1]]);
        return $newExp$$;
      }
      return null;
    }, $_setExpandedOption$:function($expanded$$12$$) {
      this.$_internalSetExpanded$ || ($expanded$$12$$ = this.$_expandedIndexToId$($expanded$$12$$));
      if ($expanded$$12$$) {
        var $self$$195$$ = this, $child$$13$$, $childId$$, $parentExp$$, $iexp$$ = 0;
        this.$collapsibles$.each(function($index$$293$$) {
          $child$$13$$ = $$$$54$$(this);
          $childId$$ = $child$$13$$.attr("id");
          $parentExp$$ = !1;
          $childId$$ ? $childId$$ == $expanded$$12$$[$iexp$$] && ($parentExp$$ = !0) : $index$$293$$ == $expanded$$12$$[$iexp$$] && ($parentExp$$ = !0);
          $parentExp$$ && $iexp$$++;
          $child$$13$$.ojCollapsible("option", "expanded") !== $parentExp$$ && ($oj$$59$$.$Logger$.warn("JET Accordion: override collapsible " + $index$$293$$ + " expanded setting"), $self$$195$$.$_duringSetExpandedOption$ = !0, $child$$13$$.ojCollapsible("option", "expanded", $parentExp$$), $self$$195$$.$_duringSetExpandedOption$ = !1);
        });
      }
      this.$_updateExpanded$();
    }, getNodeBySubId:function($collapsible$$2_index$$294_locator$$58$$) {
      if (null == $collapsible$$2_index$$294_locator$$58$$) {
        return this.element ? this.element[0] : null;
      }
      var $subId$$63$$ = $collapsible$$2_index$$294_locator$$58$$.subId;
      $collapsible$$2_index$$294_locator$$58$$ = $collapsible$$2_index$$294_locator$$58$$.index;
      if ("number" !== typeof $collapsible$$2_index$$294_locator$$58$$ || 0 > $collapsible$$2_index$$294_locator$$58$$ || $collapsible$$2_index$$294_locator$$58$$ >= this.$collapsibles$.length) {
        return null;
      }
      $collapsible$$2_index$$294_locator$$58$$ = this.$collapsibles$[$collapsible$$2_index$$294_locator$$58$$];
      switch($subId$$63$$) {
        case "oj-accordion-content":
          $subId$$63$$ = "oj-collapsible-content";
          break;
        case "oj-accordion-header":
          $subId$$63$$ = "oj-collapsible-header";
          break;
        case "oj-accordion-disclosure":
        ;
        case "oj-accordion-header-icon":
          $subId$$63$$ = "oj-collapsible-disclosure";
          break;
        case "oj-accordion-collapsible":
          return $collapsible$$2_index$$294_locator$$58$$;
        default:
          return null;
      }
      return $$$$54$$($collapsible$$2_index$$294_locator$$58$$).ojCollapsible("getNodeBySubId", {subId:$subId$$63$$});
    }, getSubIdByNode:function($collapsibleSubId_node$$114$$) {
      for (var $collapsibleIndex$$ = -1, $currentNode$$3_subId$$64$$ = $collapsibleSubId_node$$114$$;$currentNode$$3_subId$$64$$;) {
        $collapsibleIndex$$ = Array.prototype.indexOf.call(this.$collapsibles$, $currentNode$$3_subId$$64$$);
        if (-1 != $collapsibleIndex$$) {
          break;
        }
        $currentNode$$3_subId$$64$$ = $currentNode$$3_subId$$64$$.parentElement;
      }
      $currentNode$$3_subId$$64$$ = null;
      if (-1 != $collapsibleIndex$$) {
        switch($collapsibleSubId_node$$114$$ = ($collapsibleSubId_node$$114$$ = $$$$54$$(this.$collapsibles$[$collapsibleIndex$$]).ojCollapsible("getSubIdByNode", $collapsibleSubId_node$$114$$)) ? $collapsibleSubId_node$$114$$ : {}, $collapsibleSubId_node$$114$$.subId) {
          case "oj-collapsible-content":
            $currentNode$$3_subId$$64$$ = "oj-accordion-content";
            break;
          case "oj-collapsible-header":
            $currentNode$$3_subId$$64$$ = "oj-accordion-header";
            break;
          case "oj-collapsible-disclosure":
          ;
          case "oj-collapsible-header-icon":
            $currentNode$$3_subId$$64$$ = "oj-accordion-disclosure";
            break;
          default:
            $currentNode$$3_subId$$64$$ = "oj-accordion-collapsible";
        }
      }
      return $currentNode$$3_subId$$64$$ ? {subId:$currentNode$$3_subId$$64$$, index:$collapsibleIndex$$} : null;
    }});
  })();
});

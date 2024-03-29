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
define(["ojs/ojcore", "jquery", "hammerjs", "promise", "ojs/ojjquery-hammer", "ojs/ojcomponentcore"], function($oj$$34$$, $$$$31$$, $Hammer$$4$$) {
  (function() {
    $oj$$34$$.$__registerWidget$("oj.ojIndexer", $$$$31$$.oj.baseComponent, {defaultElement:"\x3cul\x3e", version:"1.2", widgetEventPrefix:"oj", options:{data:null}, _ComponentCreate:function() {
      this._super();
      this.$_setup$();
    }, $_AfterCreate$:function() {
      var $container$$28$$;
      this._super();
      this.$_createIndexerContent$();
      this.$_setAriaProperties$();
      this.$_createInstructionText$();
      $container$$28$$ = this.$_getIndexerContainer$()[0];
      this.$_registerResizeListener$($container$$28$$);
      this.$_registerTouchHandler$($container$$28$$);
    }, _destroy:function() {
      var $container$$29$$, $model$$63$$;
      this._super();
      this.$_unsetAriaProperties$();
      this.element.removeClass("oj-component-initnode");
      $container$$29$$ = this.$_getIndexerContainer$()[0];
      this.$_unregisterResizeListener$($container$$29$$);
      this.$_unregisterTouchHandler$($container$$29$$);
      $model$$63$$ = this.$_getIndexerModel$();
      null != $model$$63$$ && this.$m_indexerModelListener$ && $model$$63$$.off($oj$$34$$.$IndexerModel$.$EventType$.$CHANGE$, this.$m_indexerModelListener$);
      $oj$$34$$.$DomUtils$.unwrap(this.element, $$$$31$$($container$$29$$));
    }, _setOption:function($key$$158$$, $value$$264$$) {
      this._superApply(arguments);
      "data" == $key$$158$$ && this.refresh();
    }, widget:function() {
      return this.$_getIndexerContainer$();
    }, refresh:function() {
      this._super();
      this.element.empty();
      this.$_createIndexerContent$();
      this.$_setAriaProperties$();
      this.$m_current$ = null;
    }, getNodeBySubId:function($locator$$37_prefix$$18$$) {
      var $prefixes$$, $i$$388$$, $j$$56$$, $node$$93$$, $includes$$;
      if (null == $locator$$37_prefix$$18$$) {
        return this.element ? this.element[0] : null;
      }
      if ("oj-indexer-prefix" === $locator$$37_prefix$$18$$.subId) {
        for ($locator$$37_prefix$$18$$ = $locator$$37_prefix$$18$$.prefix, $prefixes$$ = this.element.children("li"), $i$$388$$ = 0;$i$$388$$ < $prefixes$$.length;$i$$388$$++) {
          $node$$93$$ = $prefixes$$.get($i$$388$$);
          if ($$$$31$$($node$$93$$).attr("data-range") == $locator$$37_prefix$$18$$) {
            return $node$$93$$;
          }
          $includes$$ = $$$$31$$($node$$93$$).attr("data-includes");
          if (null != $includes$$) {
            for ($includes$$ = $includes$$.split("|"), $j$$56$$ = 0;$j$$56$$ < $includes$$.length;$j$$56$$++) {
              if ($includes$$[$j$$56$$] == $locator$$37_prefix$$18$$) {
                return $node$$93$$;
              }
            }
          }
        }
      }
      return null;
    }, getSubIdByNode:function($node$$94_prefix$$19$$) {
      return null != $node$$94_prefix$$19$$ && ($node$$94_prefix$$19$$ = $$$$31$$($node$$94_prefix$$19$$).attr("data-range"), null != $node$$94_prefix$$19$$) ? {subId:"oj-indexer-prefix", prefix:$node$$94_prefix$$19$$} : null;
    }, $_setAriaProperties$:function() {
      this.element.attr("role", "slider").attr("aria-orientation", "vertical").attr("aria-describedby", this.element.prop("id") + ":desc").attr("aria-valuemin", 0).attr("aria-valuemax", Math.max(0, this.element.children().length - 1));
    }, $_unsetAriaProperties$:function() {
      this.element.removeAttr("role").removeAttr("aria-orientation").removeAttr("aria-describedby").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuetext");
    }, $_createInstructionText$:function() {
      var $key$$159$$, $text$$22$$;
      $key$$159$$ = $oj$$34$$.$DomUtils$.$isTouchSupported$() ? "ariaTouchInstructionText" : "ariaKeyboardInstructionText";
      $text$$22$$ = $$$$31$$(document.createElement("div"));
      $text$$22$$.prop("id", this.element.prop("id") + ":desc");
      $text$$22$$.addClass("oj-helper-hidden-accessible").text(this.$getTranslatedString$($key$$159$$));
      this.$_getIndexerContainer$().append($text$$22$$);
    }, $_getIndexerContainer$:function() {
      null == this.$m_container$ && (this.$m_container$ = this.$_createIndexerContainer$());
      return this.$m_container$;
    }, $_createIndexerContainer$:function() {
      var $container$$30$$ = $$$$31$$(document.createElement("div"));
      $container$$30$$.addClass("oj-indexer oj-component");
      this.element.parent()[0].replaceChild($container$$30$$[0], this.element[0]);
      $container$$30$$.prepend(this.element);
      return $container$$30$$;
    }, $_createIndexerContent$:function() {
      var $model$$64_prefixOthers$$, $root$$29$$, $last$$4_others_prefixes$$1$$, $availablePrefixes$$, $height$$46_max$$7_skip$$4$$, $first$$8_i$$389_itemHeight$$, $item$$113_prefix$$20$$;
      $model$$64_prefixOthers$$ = this.$_getIndexerModel$();
      if (null != $model$$64_prefixOthers$$) {
        $root$$29$$ = this.element;
        $last$$4_others_prefixes$$1$$ = $model$$64_prefixOthers$$.getIndexablePrefixes();
        $availablePrefixes$$ = $model$$64_prefixOthers$$.getPrefixes();
        $model$$64_prefixOthers$$ = this.$getTranslatedString$("indexerOthers");
        $height$$46_max$$7_skip$$4$$ = this.widget().outerHeight();
        $first$$8_i$$389_itemHeight$$ = this.$_createItem$($last$$4_others_prefixes$$1$$[0], $availablePrefixes$$);
        $root$$29$$.append($first$$8_i$$389_itemHeight$$);
        $first$$8_i$$389_itemHeight$$ = $first$$8_i$$389_itemHeight$$.outerHeight();
        $height$$46_max$$7_skip$$4$$ = Math.floor($height$$46_max$$7_skip$$4$$ / $first$$8_i$$389_itemHeight$$);
        this.$_getIndexerContainer$().removeClass("oj-indexer-abbr");
        $height$$46_max$$7_skip$$4$$ = Math.floor(($last$$4_others_prefixes$$1$$.length + 1) / $height$$46_max$$7_skip$$4$$) + 1;
        1 < $height$$46_max$$7_skip$$4$$ && this.$_getIndexerContainer$().addClass("oj-indexer-abbr");
        for ($first$$8_i$$389_itemHeight$$ = 1 + $height$$46_max$$7_skip$$4$$;$first$$8_i$$389_itemHeight$$ < $last$$4_others_prefixes$$1$$.length;$first$$8_i$$389_itemHeight$$ = $first$$8_i$$389_itemHeight$$ + $height$$46_max$$7_skip$$4$$ + 1) {
          1 < $height$$46_max$$7_skip$$4$$ ? ($item$$113_prefix$$20$$ = this.$_createSeparator$($last$$4_others_prefixes$$1$$, $first$$8_i$$389_itemHeight$$ - $height$$46_max$$7_skip$$4$$, $first$$8_i$$389_itemHeight$$ - 1), $root$$29$$.append($item$$113_prefix$$20$$)) : $first$$8_i$$389_itemHeight$$--, $item$$113_prefix$$20$$ = $last$$4_others_prefixes$$1$$[$first$$8_i$$389_itemHeight$$], $item$$113_prefix$$20$$ = this.$_createItem$($item$$113_prefix$$20$$, $availablePrefixes$$), $root$$29$$.append($item$$113_prefix$$20$$)
          ;
        }
        $last$$4_others_prefixes$$1$$ = this.$_createItem$($last$$4_others_prefixes$$1$$[$last$$4_others_prefixes$$1$$.length - 1], $availablePrefixes$$);
        $root$$29$$.append($last$$4_others_prefixes$$1$$);
        $last$$4_others_prefixes$$1$$ = this.$_createItem$($model$$64_prefixOthers$$);
        $last$$4_others_prefixes$$1$$.attr("data-others", "true");
        $root$$29$$.append($last$$4_others_prefixes$$1$$);
      }
    }, $_createItem$:function($prefix$$21$$, $availablePrefixes$$1$$) {
      var $item$$114$$ = $$$$31$$(document.createElement("li"));
      $item$$114$$.attr("data-range", $prefix$$21$$).text($prefix$$21$$);
      null != $availablePrefixes$$1$$ && -1 == $availablePrefixes$$1$$.indexOf($prefix$$21$$) && $item$$114$$.addClass("oj-disabled");
      return $item$$114$$;
    }, $_createSeparator$:function($indexString$$, $from$$3_i$$390$$, $to$$3$$) {
      var $item$$115$$, $includes$$1$$ = "";
      $item$$115$$ = $$$$31$$(document.createElement("li"));
      for ($item$$115$$.addClass("oj-indexer-ellipsis").attr("data-range", $indexString$$[$from$$3_i$$390$$ + Math.round(($to$$3$$ - $from$$3_i$$390$$) / 2)]);$from$$3_i$$390$$ < $to$$3$$;$from$$3_i$$390$$++) {
        $includes$$1$$ = $includes$$1$$ + $indexString$$[$from$$3_i$$390$$] + "|";
      }
      $includes$$1$$ += $indexString$$[$to$$3$$];
      $item$$115$$.attr("data-includes", $includes$$1$$);
      return $item$$115$$;
    }, $_setup$:function() {
      var $self$$163$$ = this, $model$$65$$;
      this.element.uniqueId().addClass("oj-component-initnode").attr("tabIndex", 0);
      this._on(this.element, {click:function($event$$509$$) {
        $self$$163$$.$_handleClick$($event$$509$$);
      }, keydown:function($event$$510$$) {
        $self$$163$$.$_handleKeyDown$($event$$510$$);
      }, focus:function($event$$511$$) {
        $self$$163$$.$_handleFocus$($event$$511$$);
      }, blur:function($event$$512$$) {
        $self$$163$$.$_handleBlur$($event$$512$$);
      }});
      $model$$65$$ = this.$_getIndexerModel$();
      null != $model$$65$$ && (this.$m_indexerModelListener$ = function $this$$m_indexerModelListener$$() {
        $self$$163$$.refresh();
      }, $model$$65$$.on($oj$$34$$.$IndexerModel$.$EventType$.$CHANGE$, this.$m_indexerModelListener$));
    }, $_handleClick$:function($event$$513_target$$124$$) {
      0 === $event$$513_target$$124$$.button && ($event$$513_target$$124$$ = $$$$31$$($event$$513_target$$124$$.target), this.$_setCurrent$($event$$513_target$$124$$));
    }, $_handleFocus$:function() {
      this.$_getIndexerContainer$().addClass("oj-focus-ancestor");
      null == this.$m_current$ && this.$_setFocus$(this.element.children("li").first());
    }, $_handleBlur$:function() {
      this.$_getIndexerContainer$().removeClass("oj-focus-ancestor");
    }, $_handleKeyDown$:function($event$$516$$) {
      var $next$$7$$, $processed$$11$$ = !1;
      switch($event$$516$$.keyCode) {
        case 38:
          $next$$7$$ = this.$m_current$.prev();
          break;
        case 40:
          $next$$7$$ = this.$m_current$.next();
          break;
        case 13:
          this.$_setCurrent$(this.$m_current$), $processed$$11$$ = !0;
      }
      null != $next$$7$$ && 0 < $next$$7$$.length && ($processed$$11$$ = !0, this.$_setFocus$($next$$7$$));
      $processed$$11$$ && $event$$516$$.preventDefault();
    }, $_setFocus$:function($item$$116$$) {
      null != this.$m_current$ && this.$m_current$.removeClass("oj-focus");
      $item$$116$$.addClass("oj-focus");
      this.$_updateAriaProperties$($item$$116$$);
      this.$m_current$ = $item$$116$$;
    }, $_getIndexerModel$:function() {
      var $model$$66$$ = this.option("data");
      if (null != $model$$66$$ && (void 0 == $model$$66$$.setPrefix || void 0 == $model$$66$$.getIndexablePrefixes || void 0 == $model$$66$$.getPrefixes)) {
        throw "Invalid IndexerModel";
      }
      return $model$$66$$;
    }, $_setCurrent$:function($item$$117$$) {
      var $prefix$$22$$ = $item$$117$$.attr("data-range");
      $item$$117$$.attr("data-others") && ($prefix$$22$$ = $oj$$34$$.$IndexerModel$.PREFIX_OTHERS);
      this.$_setCurrentPrefix$($prefix$$22$$);
    }, $_setCurrentPrefix$:function($prefix$$23$$) {
      var $self$$164$$ = this, $item$$118$$;
      this.$_getIndexerModel$().setPrefix($prefix$$23$$).then(function($val$$55$$) {
        null != $val$$55$$ && ($item$$118$$ = $self$$164$$.$_findItem$($val$$55$$), null != $item$$118$$ && $self$$164$$.$_setFocus$($item$$118$$));
      });
    }, $_updateAriaProperties$:function($item$$119$$) {
      var $includes$$2_val$$56$$, $valueText$$ = "";
      $includes$$2_val$$56$$ = $item$$119$$.attr("data-includes");
      null != $includes$$2_val$$56$$ ? ($includes$$2_val$$56$$ = $includes$$2_val$$56$$.split("|"), 0 < $includes$$2_val$$56$$.length && ($valueText$$ = this.$getTranslatedString$("ariaInBetweenText", {first:$includes$$2_val$$56$$[0], second:$includes$$2_val$$56$$[$includes$$2_val$$56$$.length - 1]}))) : ($includes$$2_val$$56$$ = $item$$119$$.attr("data-range"), $valueText$$ = $includes$$2_val$$56$$ === $oj$$34$$.$IndexerModel$.PREFIX_OTHERS ? this.$getTranslatedString$("ariaOthersLabel") : $includes$$2_val$$56$$);
      $item$$119$$.hasClass("oj-disabled") && ($valueText$$ = $valueText$$ + ". " + this.$getTranslatedString$("ariaDisabledLabel"));
      this.element.attr("aria-valuetext", $valueText$$);
      this.element.attr("aria-valuenow", $item$$119$$.index());
    }, $_findItem$:function($prefix$$24$$) {
      var $children$$11$$, $i$$391$$, $item$$120$$, $value$$265$$, $includes$$3$$;
      $children$$11$$ = this.element.children();
      for ($i$$391$$ = 0;$i$$391$$ < $children$$11$$.length;$i$$391$$++) {
        if ($item$$120$$ = $children$$11$$.get($i$$391$$), $value$$265$$ = $$$$31$$($item$$120$$).attr("data-range"), $includes$$3$$ = $$$$31$$($item$$120$$).attr("data-includes"), null != $value$$265$$ && $value$$265$$ == $prefix$$24$$ || null != $includes$$3$$ && -1 < $includes$$3$$.indexOf($prefix$$24$$)) {
          return $$$$31$$($item$$120$$);
        }
      }
      return null;
    }, $_unregisterResizeListener$:function($element$$157$$) {
      $element$$157$$ && this.$_resizeHandler$ && $oj$$34$$.$DomUtils$.$removeResizeListener$($element$$157$$, this.$_resizeHandler$);
    }, $_registerResizeListener$:function($element$$158$$) {
      $element$$158$$ && (null == this.$_resizeHandler$ && (this.$_resizeHandler$ = this.$_handleResize$.bind(this)), $oj$$34$$.$DomUtils$.$addResizeListener$($element$$158$$, this.$_resizeHandler$));
    }, $_unregisterTouchHandler$:function($element$$159$$) {
      $$$$31$$($element$$159$$).off("panstart panmove panend");
    }, $_registerTouchHandler$:function($element$$160$$) {
      var $self$$165$$ = this, $options$$310$$, $target$$125$$, $x$$55$$, $y$$39$$, $currentTarget$$, $currentPrefix$$, $currentY$$, $previousY$$, $delta$$7$$, $range$$27$$, $index$$233$$, $prefix$$25$$;
      $options$$310$$ = {recognizers:[[$Hammer$$4$$.Pan, {direction:$Hammer$$4$$.DIRECTION_VERTICAL}]]};
      $$$$31$$($element$$160$$).$ojHammer$($options$$310$$).on("panstart", function($event$$517$$) {
        $target$$125$$ = $event$$517$$.gesture.target;
        $x$$55$$ = $self$$165$$.element[0].getBoundingClientRect().left + 5;
        $y$$39$$ = $target$$125$$.getBoundingClientRect().top;
        $self$$165$$.$_setCurrent$($$$$31$$($target$$125$$));
        $currentTarget$$ = $target$$125$$;
        $currentPrefix$$ = $target$$125$$.getAttribute("data-range");
        $currentY$$ = $y$$39$$;
      }).on("panmove", function($event$$518$$) {
        $previousY$$ = $currentY$$;
        $currentY$$ = $y$$39$$ + $event$$518$$.gesture.deltaY;
        $target$$125$$ = document.elementFromPoint($x$$55$$, $currentY$$);
        null != $target$$125$$ && ($delta$$7$$ = $currentY$$ - $previousY$$, $currentTarget$$ == $target$$125$$ ? ($range$$27$$ = $target$$125$$.getAttribute("data-includes"), null != $range$$27$$ && ($range$$27$$ = $range$$27$$.split("|"), $index$$233$$ = $range$$27$$.indexOf($currentPrefix$$), $prefix$$25$$ = null, 0 < $delta$$7$$ && $index$$233$$ < $range$$27$$.length - 1 ? $prefix$$25$$ = $range$$27$$[$index$$233$$ + 1] : 0 > $delta$$7$$ && 0 < $index$$233$$ && ($prefix$$25$$ = $range$$27$$[$index$$233$$ - 
        1]), null != $prefix$$25$$ && ($currentPrefix$$ = $prefix$$25$$, $self$$165$$.$_setCurrentPrefix$($prefix$$25$$)))) : $target$$125$$.hasAttribute("data-range") && ($range$$27$$ = $target$$125$$.getAttribute("data-includes"), $prefix$$25$$ = null, null != $range$$27$$ && (0 < $delta$$7$$ && $target$$125$$ == $currentTarget$$.nextElementSibling ? $prefix$$25$$ = $range$$27$$[0] : 0 > $delta$$7$$ && $target$$125$$ == $currentTarget$$.previousElementSibling && ($prefix$$25$$ = $range$$27$$[$range$$27$$.length - 
        1])), null == $prefix$$25$$ && ($prefix$$25$$ = $target$$125$$.getAttribute("data-range")), $currentTarget$$ = $target$$125$$, $currentPrefix$$ = $prefix$$25$$, $self$$165$$.$_setCurrentPrefix$($currentPrefix$$)));
      }).on("panend", function() {
        $prefix$$25$$ = $currentY$$ = $currentPrefix$$ = $currentTarget$$ = null;
      });
    }, $_handleResize$:function($width$$42$$, $height$$47$$) {
      0 < $width$$42$$ && 0 < $height$$47$$ && this.refresh();
    }});
  })();
  $oj$$34$$.$ListViewIndexerModel$ = function $$oj$$34$$$$ListViewIndexerModel$$($listview$$) {
    this.$listview$ = $listview$$;
    this.Init();
  };
  $goog$exportPath_$$("ListViewIndexerModel", $oj$$34$$.$ListViewIndexerModel$, $oj$$34$$);
  $oj$$34$$.$Object$.$createSubclass$($oj$$34$$.$ListViewIndexerModel$, $oj$$34$$.$EventSource$, "oj.ListViewIndexerModel");
  $oj$$34$$.$ListViewIndexerModel$.prototype.getIndexablePrefixes = function $$oj$$34$$$$ListViewIndexerModel$$$getIndexablePrefixes$() {
    return this.$listview$.$ojContext$.$getTranslatedString$("indexerCharacters").split("|");
  };
  $oj$$34$$.$Object$.$exportPrototypeSymbol$("ListViewIndexerModel.prototype.getIndexablePrefixes", {getIndexablePrefixes:$oj$$34$$.$ListViewIndexerModel$.prototype.getIndexablePrefixes});
  $oj$$34$$.$ListViewIndexerModel$.prototype.getPrefixes = function $$oj$$34$$$$ListViewIndexerModel$$$getPrefixes$() {
    null == this.$availablePrefixes$ && (this.$availablePrefixes$ = this.$_getAvailablePrefixes$());
    return this.$availablePrefixes$;
  };
  $oj$$34$$.$Object$.$exportPrototypeSymbol$("ListViewIndexerModel.prototype.getPrefixes", {getPrefixes:$oj$$34$$.$ListViewIndexerModel$.prototype.getPrefixes});
  $oj$$34$$.$ListViewIndexerModel$.prototype.$_getAvailablePrefixes$ = function $$oj$$34$$$$ListViewIndexerModel$$$$_getAvailablePrefixes$$() {
    var $results$$12$$ = [], $groupItems$$5$$ = this.$listview$.$_getGroupItemsCache$();
    if (null != $groupItems$$5$$) {
      for (var $prefixes$$3$$ = this.getIndexablePrefixes(), $i$$392$$ = 0;$i$$392$$ < $prefixes$$3$$.length;$i$$392$$++) {
        var $prefix$$26$$ = $prefixes$$3$$[$i$$392$$];
        $groupItems$$5$$.each(function() {
          if (0 == $$$$31$$(this).text().indexOf($prefix$$26$$)) {
            return $results$$12$$.push($prefix$$26$$), !1;
          }
        });
      }
    }
    return $results$$12$$;
  };
  $oj$$34$$.$ListViewIndexerModel$.prototype.setPrefix = function $$oj$$34$$$$ListViewIndexerModel$$$setPrefix$($prefix$$27$$) {
    return $prefix$$27$$ == $oj$$34$$.$IndexerModel$.PREFIX_OTHERS ? this.$_setOtherPrefix$() : this.$_setPrefix$($prefix$$27$$);
  };
  $oj$$34$$.$Object$.$exportPrototypeSymbol$("ListViewIndexerModel.prototype.setPrefix", {setPrefix:$oj$$34$$.$ListViewIndexerModel$.prototype.setPrefix});
  $oj$$34$$.$ListViewIndexerModel$.prototype.$_setOtherPrefix$ = function $$oj$$34$$$$ListViewIndexerModel$$$$_setOtherPrefix$$() {
    var $prefixes$$4$$, $self$$166$$ = this, $match$$23$$, $groupItems$$6$$, $content$$36$$, $i$$393$$, $prefix$$28$$;
    $prefixes$$4$$ = this.getIndexablePrefixes();
    return new Promise(function($resolve$$41$$) {
      $match$$23$$ = null;
      $groupItems$$6$$ = $self$$166$$.$listview$.$_getGroupItemsCache$();
      null != $groupItems$$6$$ && $groupItems$$6$$.each(function() {
        $content$$36$$ = $$$$31$$(this).text();
        for ($i$$393$$ = 0;$i$$393$$ < $prefixes$$4$$.length;$i$$393$$++) {
          if ($prefix$$28$$ = $prefixes$$4$$[$i$$393$$], 0 == $content$$36$$.indexOf($prefix$$28$$)) {
            return!0;
          }
        }
        $match$$23$$ = this;
        return!1;
      });
      $match$$23$$ ? ($self$$166$$.$listview$.$_scrollToGroupHeader$($match$$23$$), $resolve$$41$$($oj$$34$$.$IndexerModel$.PREFIX_OTHERS)) : $resolve$$41$$(null);
    });
  };
  $oj$$34$$.$ListViewIndexerModel$.prototype.$_setPrefix$ = function $$oj$$34$$$$ListViewIndexerModel$$$$_setPrefix$$($prefix$$29$$) {
    var $prefixes$$5$$, $index$$236$$, $self$$167$$ = this, $match$$24$$ = null, $groupHeader$$2$$;
    $prefixes$$5$$ = this.getIndexablePrefixes();
    $index$$236$$ = $prefixes$$5$$.indexOf($prefix$$29$$);
    return new Promise(function($resolve$$42$$) {
      if (-1 == $index$$236$$) {
        $resolve$$42$$(null);
      } else {
        for (;$index$$236$$ < $prefixes$$5$$.length;) {
          $prefix$$29$$ = $prefixes$$5$$[$index$$236$$];
          $groupHeader$$2$$ = $self$$167$$.$_findGroupHeader$($prefix$$29$$);
          if (null != $groupHeader$$2$$) {
            $self$$167$$.$listview$.$_scrollToGroupHeader$($groupHeader$$2$$);
            $match$$24$$ = $prefix$$29$$;
            break;
          }
          $index$$236$$++;
        }
        $resolve$$42$$($match$$24$$);
      }
    });
  };
  $oj$$34$$.$ListViewIndexerModel$.prototype.$_findGroupHeader$ = function $$oj$$34$$$$ListViewIndexerModel$$$$_findGroupHeader$$($prefix$$30$$) {
    var $match$$25$$, $groupItems$$7$$, $content$$37$$;
    $groupItems$$7$$ = this.$listview$.$_getGroupItemsCache$();
    null != $groupItems$$7$$ && $groupItems$$7$$.each(function() {
      $content$$37$$ = $$$$31$$(this).text();
      if (0 == $content$$37$$.indexOf($prefix$$30$$)) {
        return $match$$25$$ = this, !1;
      }
    });
    return $match$$25$$;
  };
  $oj$$34$$.$ListViewIndexerModel$.prototype.$fireChangeEvent$ = function $$oj$$34$$$$ListViewIndexerModel$$$$fireChangeEvent$$() {
    this.$availablePrefixes$ = null;
    this.handleEvent($oj$$34$$.$IndexerModel$.$EventType$.CHANGE, {});
  };
  $oj$$34$$.$IndexerModel$ = function $$oj$$34$$$$IndexerModel$$() {
  };
  $goog$exportPath_$$("IndexerModel", $oj$$34$$.$IndexerModel$, $oj$$34$$);
  $oj$$34$$.$IndexerModel$.PREFIX_OTHERS = "__others__";
  $goog$exportPath_$$("IndexerModel.PREFIX_OTHERS", $oj$$34$$.$IndexerModel$.PREFIX_OTHERS, $oj$$34$$);
  $oj$$34$$.$IndexerModel$.$EventType$ = {CHANGE:"change"};
  $goog$exportPath_$$("IndexerModel.EventType", $oj$$34$$.$IndexerModel$.$EventType$, $oj$$34$$);
  $oj$$34$$.$IndexerModel$.prototype.setPrefix = function $$oj$$34$$$$IndexerModel$$$setPrefix$() {
  };
  $oj$$34$$.$Object$.$exportPrototypeSymbol$("IndexerModel.prototype.setPrefix", {setPrefix:$oj$$34$$.$IndexerModel$.prototype.setPrefix});
  $oj$$34$$.$IndexerModel$.prototype.getIndexablePrefixes = function $$oj$$34$$$$IndexerModel$$$getIndexablePrefixes$() {
  };
  $oj$$34$$.$Object$.$exportPrototypeSymbol$("IndexerModel.prototype.getIndexablePrefixes", {getIndexablePrefixes:$oj$$34$$.$IndexerModel$.prototype.getIndexablePrefixes});
  $oj$$34$$.$IndexerModel$.prototype.getPrefixes = function $$oj$$34$$$$IndexerModel$$$getPrefixes$() {
  };
  $oj$$34$$.$Object$.$exportPrototypeSymbol$("IndexerModel.prototype.getPrefixes", {getPrefixes:$oj$$34$$.$IndexerModel$.prototype.getPrefixes});
});

/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojpopupcore"], function($oj$$77$$, $$$$71$$) {
  (function() {
    var $_TAIL_STYLES$$ = "oj-left oj-center oj-right oj-top oj-middle oj-bottom".split(" "), $_TAIL_ALIGN_RULES$$ = {"right-top":"oj-right oj-top", "right-middle":"oj-right oj-middle", "right-bottom":"oj-right oj-bottom", "left-top":"oj-left oj-top", "left-middle":"oj-left oj-middle", "left-bottom":"oj-left oj-bottom", "center-top":"oj-center oj-top", "center-middle":"oj-left oj-middle", "center-bottom":"oj-center oj-bottom"};
    $oj$$77$$.$__registerWidget$("oj.ojPopup", $$$$71$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{autoDismiss:"focusLoss", chrome:"default", initialFocus:"auto", position:{my:"start top", at:"start bottom", of:"", collision:"flip"}, tail:"none", modality:"modeless", role:"tooltip", beforeOpen:null, open:null, beforeClose:null, close:null, focus:null}, _ComponentCreate:function() {
      this._super();
      var $rootElement$$3$$ = $$$$71$$("\x3cdiv\x3e");
      this.$_rootElement$ = $rootElement$$3$$.hide().addClass("oj-popup").attr("aria-hidden", "true");
      $rootElement$$3$$.addClass("oj-component");
      var $content$$39$$ = $$$$71$$("\x3cdiv\x3e").addClass("oj-popup-content");
      $content$$39$$.attr("role", "presentation");
      $content$$39$$.appendTo($rootElement$$3$$);
      this.element.after($rootElement$$3$$);
      this.element.appendTo($content$$39$$);
      this.element.show();
      this.$_createTail$();
      this.$_setChrome$();
      this.$_usingCallback$ = $$$$71$$.proxy(this.$_usingHandler$, this);
    }, _destroy:function() {
      this.isOpen() && this.$_closeImplicitly$();
      this.$_destroyTail$();
      delete this.$_usingCallback$;
      delete this.$_popupServiceEvents$;
      $oj$$77$$.$DomUtils$.unwrap(this.element, this.$_rootElement$);
      this.element.hide();
      var $closeDelayTimer$$1$$ = this.$_closeDelayTimer$;
      isNaN($closeDelayTimer$$1$$) || (delete this.$_closeDelayTimer$, window.clearTimeout($closeDelayTimer$$1$$));
      this.$_destroyVoiceOverAssist$();
      this._super();
    }, widget:function() {
      return this.$_rootElement$;
    }, open:function($launcher$$16$$, $position$$50$$) {
      if (this.isOpen() && (this.close(), this.isOpen())) {
        return;
      }
      this.$_setLauncher$($launcher$$16$$);
      var $rootElement$$4$$ = this.$_rootElement$;
      $launcher$$16$$ = this.$_launcher$;
      $oj$$77$$.$StringUtils$.$isEmptyOrUndefined$($rootElement$$4$$.attr("id")) && $rootElement$$4$$.attr("id", this.$_getSubId$("wrapper"));
      if (!1 !== this._trigger("beforeOpen")) {
        this.$_setPosition$($position$$50$$);
        var $options$$400$$ = this.options;
        this.$_setAutoDismiss$($options$$400$$.autoDismiss);
        this.$_addDescribedBy$();
        $rootElement$$4$$.attr("role", $options$$400$$.role);
        $position$$50$$ = $options$$400$$.position;
        var $isRtl$$5_layerClass$$3$$ = "rtl" === this.$_GetReadingDirection$();
        $position$$50$$ = $oj$$77$$.$PositionUtils$.$normalizeHorizontalAlignment$($position$$50$$, $isRtl$$5_layerClass$$3$$);
        var $isRtl$$5_layerClass$$3$$ = "oj-popup-layer", $psOptions$$5_tailDecoration$$ = $options$$400$$.tail;
        "none" !== $psOptions$$5_tailDecoration$$ && ($isRtl$$5_layerClass$$3$$ += " " + ["oj-popup-tail", $psOptions$$5_tailDecoration$$].join("-"));
        $psOptions$$5_tailDecoration$$ = {};
        $psOptions$$5_tailDecoration$$[$oj$$77$$.$PopupService$.$OPTION$.$POPUP$] = $rootElement$$4$$;
        $psOptions$$5_tailDecoration$$[$oj$$77$$.$PopupService$.$OPTION$.$LAUNCHER$] = $launcher$$16$$;
        $psOptions$$5_tailDecoration$$[$oj$$77$$.$PopupService$.$OPTION$.$POSITION$] = $position$$50$$;
        $psOptions$$5_tailDecoration$$[$oj$$77$$.$PopupService$.$OPTION$.$EVENTS$] = this.$_getPopupServiceEvents$();
        $psOptions$$5_tailDecoration$$[$oj$$77$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = $isRtl$$5_layerClass$$3$$;
        $psOptions$$5_tailDecoration$$[$oj$$77$$.$PopupService$.$OPTION$.$MODALITY$] = $options$$400$$.modality;
        $oj$$77$$.$PopupService$.$getInstance$().open($psOptions$$5_tailDecoration$$);
        this._trigger("open");
        this.$_intialFocus$();
        this.$_initVoiceOverAssist$();
        this._on($rootElement$$4$$, {keydown:this.$_keyHandler$, keyup:this.$_keyHandler$});
        $launcher$$16$$ && 0 < $launcher$$16$$.length && this._on($launcher$$16$$, {keydown:this.$_keyHandler$, keyup:this.$_keyHandler$});
      }
    }, close:function() {
      if (this.isOpen() && (!1 !== this._trigger("beforeClose") || this.$_ignoreBeforeCloseResultant$)) {
        this.$_restoreFocus$();
        var $launcher$$17_psOptions$$6$$ = this.$_launcher$, $position$$51_rootElement$$5$$ = this.$_rootElement$;
        this._off($position$$51_rootElement$$5$$, "keydown keyup");
        $launcher$$17_psOptions$$6$$ && 0 < $launcher$$17_psOptions$$6$$.length && this._off($launcher$$17_psOptions$$6$$, "keydown keyup");
        this.$_destroyVoiceOverAssist$();
        $launcher$$17_psOptions$$6$$ = {};
        $launcher$$17_psOptions$$6$$[$oj$$77$$.$PopupService$.$OPTION$.$POPUP$] = $position$$51_rootElement$$5$$;
        $oj$$77$$.$PopupService$.$getInstance$().close($launcher$$17_psOptions$$6$$);
        this.$_removeDescribedBy$();
        this.$_setAutoDismiss$();
        delete this.$_launcher$;
        $position$$51_rootElement$$5$$ = this.options.position;
        $position$$51_rootElement$$5$$._ofo && (delete $position$$51_rootElement$$5$$._ofo, delete $position$$51_rootElement$$5$$.of);
        this._trigger("close");
      }
    }, isOpen:function() {
      return this.$_rootElement$.is(":visible");
    }, refresh:function() {
      this._super();
      this.isOpen() && this.$_reposition$();
      var $rootElement$$6$$ = this.$_rootElement$;
      $oj$$77$$.$PopupService$.$getInstance$().$triggerOnDescendents$($rootElement$$6$$, $oj$$77$$.$PopupService$.$EVENT$.$POPUP_REFRESH$);
    }, _setOption:function($key$$211$$, $value$$305$$) {
      var $options$$401_psOptions$$7$$ = this.options;
      switch($key$$211$$) {
        case "tail":
          $value$$305$$ !== $options$$401_psOptions$$7$$.tail && this.$_setTail$($value$$305$$);
          break;
        case "chrome":
          $value$$305$$ !== $options$$401_psOptions$$7$$.chrome && this.$_setChrome$($value$$305$$);
          break;
        case "position":
          this.$_setPosition$($value$$305$$);
          this.refresh();
          return;
        case "autoDismiss":
          this.isOpen() && $value$$305$$ !== $options$$401_psOptions$$7$$.autoDismiss && this.$_setAutoDismiss$($value$$305$$);
          break;
        case "modality":
          this.isOpen() && ($options$$401_psOptions$$7$$ = {}, $options$$401_psOptions$$7$$[$oj$$77$$.$PopupService$.$OPTION$.$POPUP$] = this.$_rootElement$, $options$$401_psOptions$$7$$[$oj$$77$$.$PopupService$.$OPTION$.$MODALITY$] = $value$$305$$, $oj$$77$$.$PopupService$.$getInstance$().$changeOptions$($options$$401_psOptions$$7$$));
      }
      this._superApply(arguments);
    }, $_getRootStyle$:function() {
      return "oj-popup";
    }, $_setTail$:function($tail$$) {
      this.$_destroyTail$();
      this.$_createTail$($tail$$);
      this.$_reposition$();
    }, $_createTail$:function($tail$$1_tailDecoration$$1_tailStyle$$) {
      $tail$$1_tailDecoration$$1_tailStyle$$ = $tail$$1_tailDecoration$$1_tailStyle$$ ? $tail$$1_tailDecoration$$1_tailStyle$$ : this.options.tail;
      if ("none" !== $tail$$1_tailDecoration$$1_tailStyle$$) {
        $tail$$1_tailDecoration$$1_tailStyle$$ = ["oj-popup-tail", $tail$$1_tailDecoration$$1_tailStyle$$].join("-");
        var $options$$402_tailDom$$ = $$$$71$$("\x3cdiv\x3e").hide();
        $options$$402_tailDom$$.addClass("oj-popup-tail").addClass($tail$$1_tailDecoration$$1_tailStyle$$);
        $options$$402_tailDom$$.attr("role", "presentation");
        this.$_tailId$ = $options$$402_tailDom$$.attr("id", this.$_getSubId$("tail")).attr("id");
        var $rootElement$$8$$ = this.$_rootElement$;
        $options$$402_tailDom$$.appendTo($rootElement$$8$$);
        $rootElement$$8$$.addClass($tail$$1_tailDecoration$$1_tailStyle$$);
        this.isOpen() && ($options$$402_tailDom$$ = {}, $options$$402_tailDom$$[$oj$$77$$.$PopupService$.$OPTION$.$POPUP$] = $rootElement$$8$$, $options$$402_tailDom$$[$oj$$77$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = "oj-popup-layer " + $tail$$1_tailDecoration$$1_tailStyle$$, $oj$$77$$.$PopupService$.$getInstance$().$changeOptions$($options$$402_tailDom$$));
      }
    }, $_getTail$:function() {
      var $tailId$$ = this.$_tailId$;
      return $tailId$$ ? $$$$71$$(document.getElementById($tailId$$)) : null;
    }, $_destroyTail$:function() {
      var $rootElement$$9_tail$$2$$ = this.$_getTail$();
      $rootElement$$9_tail$$2$$ && $rootElement$$9_tail$$2$$.remove();
      delete this.$_tailId$;
      $rootElement$$9_tail$$2$$ = this.$_rootElement$;
      $rootElement$$9_tail$$2$$.removeClass(["oj-popup-tail", this.options.tail].join("-"));
      if (this.isOpen()) {
        var $options$$403$$ = {};
        $options$$403$$[$oj$$77$$.$PopupService$.$OPTION$.$POPUP$] = $rootElement$$9_tail$$2$$;
        $options$$403$$[$oj$$77$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = "oj-popup-layer";
        $oj$$77$$.$PopupService$.$getInstance$().$changeOptions$($options$$403$$);
      }
    }, $_setChrome$:function($chrome$$1_chromeDecoration$$) {
      $chrome$$1_chromeDecoration$$ = $chrome$$1_chromeDecoration$$ ? $chrome$$1_chromeDecoration$$ : this.options.chrome;
      var $rootElement$$10$$ = this.$_rootElement$;
      "default" === $chrome$$1_chromeDecoration$$ && $rootElement$$10$$.hasClass("oj-popup-no-chrome") ? $rootElement$$10$$.removeClass("oj-popup-no-chrome") : "none" !== $chrome$$1_chromeDecoration$$ || $rootElement$$10$$.hasClass("oj-popup-no-chrome") || $rootElement$$10$$.addClass("oj-popup-no-chrome");
    }, $_setLauncher$:function($launcher$$18$$) {
      $launcher$$18$$ ? "string" === $$$$71$$.type($launcher$$18$$) ? $launcher$$18$$ = $$$$71$$($launcher$$18$$) : 1 === $launcher$$18$$.nodeType && ($launcher$$18$$ = $$$$71$$($launcher$$18$$)) : $launcher$$18$$ = $$$$71$$(document.activeElement);
      if ($launcher$$18$$ instanceof jQuery && 1 < $launcher$$18$$.length) {
        for (var $rootElement$$11$$ = this.$_rootElement$, $i$$530$$ = 0;$i$$530$$ < $launcher$$18$$.length;$i$$530$$++) {
          var $target$$137$$ = $launcher$$18$$[0];
          if (!$oj$$77$$.$DomUtils$.$isAncestorOrSelf$($rootElement$$11$$[0], $target$$137$$)) {
            $launcher$$18$$ = $$$$71$$($target$$137$$);
            break;
          }
        }
      } else {
        if (!($launcher$$18$$ instanceof jQuery) || $launcher$$18$$ instanceof jQuery && 0 === $launcher$$18$$.length) {
          $launcher$$18$$ = $$$$71$$(document.activeElement);
        }
      }
      this.$_launcher$ = $launcher$$18$$;
    }, $_setPosition$:function($position$$52$$) {
      var $launcher$$19_options$$404_usingCallback$$ = this.options;
      $position$$52$$ && ($launcher$$19_options$$404_usingCallback$$.position = $$$$71$$.extend($launcher$$19_options$$404_usingCallback$$[$position$$52$$], $position$$52$$));
      $position$$52$$ = $launcher$$19_options$$404_usingCallback$$.position;
      $launcher$$19_options$$404_usingCallback$$ = this.$_usingCallback$;
      $$$$71$$.isFunction($position$$52$$.using) && $position$$52$$.using !== $launcher$$19_options$$404_usingCallback$$ && ($position$$52$$.origUsing = $position$$52$$.using);
      $position$$52$$.using = $launcher$$19_options$$404_usingCallback$$;
      $launcher$$19_options$$404_usingCallback$$ = this.$_launcher$;
      $position$$52$$.of || ($position$$52$$.of = $launcher$$19_options$$404_usingCallback$$, $position$$52$$._ofo = !0);
    }, $_usingHandler$:function($pos$$19$$, $props$$24$$) {
      var $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ = $props$$24$$.element.element;
      if ($pos$$19$$.top !== $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$.css("top") || $pos$$19$$.left !== $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$.css("left")) {
        var $options$$405_tail$$3$$ = this.$_getTail$();
        if ($options$$405_tail$$3$$) {
          $options$$405_tail$$3$$.hide();
          for (var $i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = 0;$i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ < $_TAIL_STYLES$$.length;$i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$++) {
            $options$$405_tail$$3$$.removeClass($_TAIL_STYLES$$[$i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$]), $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$.removeClass($_TAIL_STYLES$$[$i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$]);
          }
          $options$$405_tail$$3$$.removeAttr("style");
          if ($props$$24$$.target && 0 === $props$$24$$.target.height && 0 === $props$$24$$.target.width && ($i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = "rtl" === this.$_GetReadingDirection$(), $i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $oj$$77$$.$PositionUtils$.$normalizeHorizontalAlignment$(this.options.position, $i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$).my, !$oj$$77$$.$StringUtils$.$isEmptyOrUndefined$($i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$))) {
            var $i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$.split(" "), $suggestedHrule$$ = $i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$[0], $suggestedVrule$$ = "middle";
            1 < $i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$.length && ($suggestedVrule$$ = "center" === $i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$[1] ? "middle" : $i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$[1]);
            $props$$24$$.horizontal = $suggestedHrule$$;
            $props$$24$$.vertical = $suggestedVrule$$;
          }
          $i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $_TAIL_ALIGN_RULES$$[[$props$$24$$.horizontal, $props$$24$$.vertical].join("-")];
          $options$$405_tail$$3$$.addClass($i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$);
          $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$.addClass($i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$);
          $options$$405_tail$$3$$.show();
          "left" === $props$$24$$.horizontal ? ($i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $options$$405_tail$$3$$.outerWidth(), $i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ -= $i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ + $oj$$77$$.$DomUtils$.$getCSSLengthAsInt$($options$$405_tail$$3$$.css("left")), $pos$$19$$.left += $i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ - 2) : "right" === $props$$24$$.horizontal && 
          ($i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $options$$405_tail$$3$$.outerWidth(), $i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ -= $i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ + $oj$$77$$.$DomUtils$.$getCSSLengthAsInt$($options$$405_tail$$3$$.css("right")), $pos$$19$$.left -= $i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ - 2);
          "top" === $props$$24$$.vertical ? ($i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $options$$405_tail$$3$$.outerHeight(), $i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ -= $i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ + $oj$$77$$.$DomUtils$.$getCSSLengthAsInt$($options$$405_tail$$3$$.css($props$$24$$.vertical)), $pos$$19$$.top += $i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ - 2) : "bottom" === 
          $props$$24$$.vertical && ($i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ = $options$$405_tail$$3$$.outerHeight(), $i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ -= $i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ + $oj$$77$$.$DomUtils$.$getCSSLengthAsInt$($options$$405_tail$$3$$.css($props$$24$$.vertical)), $pos$$19$$.top -= $i$$531_isRtl$$6_myrule_myrules_tailHOffset_tailStyle$$2_tailVOffset$$ - 2);
          $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$.css($pos$$19$$);
          "center" === $props$$24$$.horizontal && "middle" !== $props$$24$$.vertical ? ($leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ = $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$.width(), $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ = Math.round(($leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ / 2 - $options$$405_tail$$3$$.outerWidth() / 2) / $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ * 
          100), $options$$405_tail$$3$$.css({left:$leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ + "%"})) : "middle" === $props$$24$$.vertical && ($leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ = $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$.height(), $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ = Math.round(($leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ / 2 - $options$$405_tail$$3$$.outerHeight() / 
          2) / $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ * 100), $options$$405_tail$$3$$.css({top:$leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ + "%"}));
        } else {
          $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$.css($pos$$19$$);
        }
        $options$$405_tail$$3$$ = this.options;
        ($leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$ = $options$$405_tail$$3$$.position.origUsing) && $leftPercent_origUsing_rootElement$$12_rootHeight_rootWidth_topPercent$$($pos$$19$$, $props$$24$$);
        "focusLoss" === $options$$405_tail$$3$$.autoDismiss && $oj$$77$$.$PositionUtils$.$isAligningPositionClipped$($props$$24$$) && (this.$_ignoreRestoreFocus$ = !0, this.$_closeDelayTimer$ = this._delay($$$$71$$.proxy(this.$_closeImplicitly$, this), 1));
      }
    }, $_reposition$:function() {
      var $rootElement$$13$$ = this.$_rootElement$, $position$$54$$ = this.options.position, $isRtl$$7$$ = "rtl" === this.$_GetReadingDirection$();
      $rootElement$$13$$.position($oj$$77$$.$PositionUtils$.$normalizeHorizontalAlignment$($position$$54$$, $isRtl$$7$$));
    }, $_intialFocus$:function($nodes$$14_waiAriaAssisted$$) {
      var $initialFocus_rootElement$$14$$ = this.$_deriveInitialFocus$();
      $nodes$$14_waiAriaAssisted$$ && "none" === $initialFocus_rootElement$$14$$ && ($initialFocus_rootElement$$14$$ = "popup");
      "firstFocusable" === $initialFocus_rootElement$$14$$ && ($nodes$$14_waiAriaAssisted$$ = this.element.find(":focusable"), 0 < $nodes$$14_waiAriaAssisted$$.length ? ($$$$71$$($nodes$$14_waiAriaAssisted$$[0]).focus(), this._trigger("focus")) : $initialFocus_rootElement$$14$$ = "popup");
      "popup" === $initialFocus_rootElement$$14$$ && ($initialFocus_rootElement$$14$$ = this.$_rootElement$, $initialFocus_rootElement$$14$$.attr("tabindex", "-1"), $initialFocus_rootElement$$14$$.focus(), this._trigger("focus"));
    }, $_deriveInitialFocus$:function() {
      var $options$$406$$ = this.options, $initialFocus$$1$$ = $options$$406$$.initialFocus;
      "auto" === $initialFocus$$1$$ && ($initialFocus$$1$$ = "modal" === $options$$406$$.modality ? $oj$$77$$.$DomUtils$.$isTouchSupported$() ? "popup" : "firstFocusable" : "none");
      return $initialFocus$$1$$;
    }, $_isFocusInPopup$:function($activeElement$$2$$, $includeChildren$$) {
      $activeElement$$2$$ || ($activeElement$$2$$ = document.activeElement);
      if (!$activeElement$$2$$) {
        return!1;
      }
      var $rootElement$$15$$ = this.$_rootElement$;
      $includeChildren$$ && ($rootElement$$15$$ = $rootElement$$15$$.parent());
      return $oj$$77$$.$DomUtils$.$isAncestorOrSelf$($rootElement$$15$$[0], $activeElement$$2$$);
    }, $_isFocusInLauncher$:function($activeElement$$3$$) {
      $activeElement$$3$$ || ($activeElement$$3$$ = document.activeElement);
      return $oj$$77$$.$DomUtils$.$isAncestorOrSelf$(this.$_launcher$[0], $activeElement$$3$$);
    }, $_restoreFocus$:function() {
      this.$_ignoreRestoreFocus$ ? delete this.$_ignoreRestoreFocus$ : this.$_isFocusInPopup$(null, !0) && this.$_launcher$.focus();
    }, $_keyHandler$:function($event$$760_launcher$$22$$) {
      if (!$event$$760_launcher$$22$$.isDefaultPrevented()) {
        var $eventType$$56_firstNode$$ = $event$$760_launcher$$22$$.type, $options$$407_target$$138$$ = $event$$760_launcher$$22$$.target;
        if ("keyup" === $eventType$$56_firstNode$$ && $event$$760_launcher$$22$$.keyCode === $$$$71$$.ui.keyCode.ESCAPE && (this.$_isFocusInPopup$($options$$407_target$$138$$) || this.$_isFocusInLauncher$($options$$407_target$$138$$))) {
          $event$$760_launcher$$22$$.preventDefault(), this.close();
        } else {
          if ("keydown" === $eventType$$56_firstNode$$ && 117 === $event$$760_launcher$$22$$.keyCode) {
            this.$_isFocusInPopup$($options$$407_target$$138$$) ? ($options$$407_target$$138$$ = this.options, "modeless" === $options$$407_target$$138$$.modality ? ($event$$760_launcher$$22$$.preventDefault(), $event$$760_launcher$$22$$ = this.$_launcher$, $event$$760_launcher$$22$$.focus()) : this.close()) : this.$_isFocusInLauncher$($options$$407_target$$138$$) && ($event$$760_launcher$$22$$.preventDefault(), this.$_intialFocus$(!0));
          } else {
            if ("keydown" === $eventType$$56_firstNode$$ && $event$$760_launcher$$22$$.keyCode === $$$$71$$.ui.keyCode.TAB && this.$_isFocusInPopup$($options$$407_target$$138$$)) {
              var $lastNode$$1_nodes$$15$$ = this.element.find(":tabbable");
              if (0 < $lastNode$$1_nodes$$15$$.length) {
                var $eventType$$56_firstNode$$ = $lastNode$$1_nodes$$15$$[0], $lastNode$$1_nodes$$15$$ = $lastNode$$1_nodes$$15$$[$lastNode$$1_nodes$$15$$.length - 1], $rootElement$$16$$ = this.$_rootElement$;
                $eventType$$56_firstNode$$ !== $options$$407_target$$138$$ && $rootElement$$16$$[0] !== $options$$407_target$$138$$ || !$event$$760_launcher$$22$$.shiftKey ? $lastNode$$1_nodes$$15$$ !== $options$$407_target$$138$$ || $event$$760_launcher$$22$$.shiftKey || ($event$$760_launcher$$22$$.preventDefault(), $lastNode$$1_nodes$$15$$ === $eventType$$56_firstNode$$ ? ($rootElement$$16$$.attr("tabindex", "-1"), $rootElement$$16$$.focus()) : $$$$71$$($eventType$$56_firstNode$$).focus()) : ($event$$760_launcher$$22$$.preventDefault(), 
                $eventType$$56_firstNode$$ === $lastNode$$1_nodes$$15$$ && $eventType$$56_firstNode$$ === $options$$407_target$$138$$ ? ($rootElement$$16$$.attr("tabindex", "-1"), $rootElement$$16$$.focus()) : $$$$71$$($lastNode$$1_nodes$$15$$).focus());
              } else {
                $event$$760_launcher$$22$$.preventDefault(), $options$$407_target$$138$$ = this.options, "modeless" === $options$$407_target$$138$$.modality ? ($event$$760_launcher$$22$$ = this.$_launcher$, $event$$760_launcher$$22$$.focus()) : this.close();
              }
            }
          }
        }
      }
    }, $_setAutoDismiss$:function($autoDismiss_options$$408$$) {
      var $focusLossCallback$$ = this.$_focusLossCallback$, $events$$15$$ = this.$_getPopupServiceEvents$();
      $focusLossCallback$$ && (delete $events$$15$$[$oj$$77$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$], delete this.$_focusLossCallback$);
      "focusLoss" === $autoDismiss_options$$408$$ && ($focusLossCallback$$ = this.$_focusLossCallback$ = $$$$71$$.proxy(this.$_dismissalHandler$, this), $events$$15$$[$oj$$77$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$] = $focusLossCallback$$);
      this.isOpen() && ($autoDismiss_options$$408$$ = {}, $autoDismiss_options$$408$$[$oj$$77$$.$PopupService$.$OPTION$.$POPUP$] = this.$_rootElement$, $autoDismiss_options$$408$$[$oj$$77$$.$PopupService$.$OPTION$.$EVENTS$] = $events$$15$$, $oj$$77$$.$PopupService$.$getInstance$().$changeOptions$($autoDismiss_options$$408$$));
    }, $_dismissalHandler$:function($event$$761$$) {
      var $launcher$$23$$ = this.$_launcher$, $layer$$24$$ = this.$_rootElement$.parent(), $target$$139$$ = $event$$761$$.target, $focusSkipLink_link$$5$$ = this.$_focusSkipLink$;
      if ($focusSkipLink_link$$5$$ && ($focusSkipLink_link$$5$$ = $focusSkipLink_link$$5$$.getLink()) && $oj$$77$$.$DomUtils$.$isAncestorOrSelf$($focusSkipLink_link$$5$$[0], $target$$139$$)) {
        return;
      }
      if (!$oj$$77$$.$DomUtils$.$isAncestorOrSelf$($launcher$$23$$[0], $target$$139$$) && !$oj$$77$$.$DomUtils$.$isAncestorOrSelf$($layer$$24$$[0], $target$$139$$)) {
        if ($$$$71$$($target$$139$$).is(":focusable")) {
          if ("mousedown" === $event$$761$$.type || "touchstart" === $event$$761$$.type) {
            return;
          }
          this.$_ignoreRestoreFocus$ = !0;
        }
        this.close();
      }
    }, $_addDescribedBy$:function() {
      var $launcher$$24$$ = this.$_launcher$, $popupId$$1$$ = this.$_rootElement$.attr("id"), $describedby$$2_tokens$$5$$ = $launcher$$24$$.attr("aria-describedby"), $describedby$$2_tokens$$5$$ = $describedby$$2_tokens$$5$$ ? $describedby$$2_tokens$$5$$.split(/\s+/) : [];
      $describedby$$2_tokens$$5$$.push($popupId$$1$$);
      $describedby$$2_tokens$$5$$ = $$$$71$$.trim($describedby$$2_tokens$$5$$.join(" "));
      $launcher$$24$$.attr("aria-describedby", $describedby$$2_tokens$$5$$);
    }, $_removeDescribedBy$:function() {
      var $launcher$$25$$ = this.$_launcher$, $index$$339_popupId$$2$$ = this.$_rootElement$.attr("id"), $describedby$$3_tokens$$6$$ = $launcher$$25$$.attr("aria-describedby"), $describedby$$3_tokens$$6$$ = $describedby$$3_tokens$$6$$ ? $describedby$$3_tokens$$6$$.split(/\s+/) : [], $index$$339_popupId$$2$$ = $$$$71$$.inArray($index$$339_popupId$$2$$, $describedby$$3_tokens$$6$$);
      -1 !== $index$$339_popupId$$2$$ && $describedby$$3_tokens$$6$$.splice($index$$339_popupId$$2$$, 1);
      ($describedby$$3_tokens$$6$$ = $$$$71$$.trim($describedby$$3_tokens$$6$$.join(" "))) ? $launcher$$25$$.attr("aria-describedby", $describedby$$3_tokens$$6$$) : $launcher$$25$$.removeAttr("aria-describedby");
    }, $_initVoiceOverAssist$:function() {
      var $callback$$144_isIOSVOSupported$$ = $oj$$77$$.$AgentUtils$.$getAgentInfo$().os === $oj$$77$$.$AgentUtils$.$OS$.$IOS$, $closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$ = this.$_liveRegion$;
      $closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$ || ($closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$ = this.$_liveRegion$ = new $oj$$77$$.$PopupLiveRegion$);
      var $message$$37$$;
      $message$$37$$ = $callback$$144_isIOSVOSupported$$ ? this.$getTranslatedString$("none" === this.options.initialFocus ? "ariaLiveRegionInitialFocusNoneTouch" : "ariaLiveRegionInitialFocusFirstFocusableTouch") : this.$getTranslatedString$("none" === this.options.initialFocus ? "ariaLiveRegionInitialFocusNone" : "ariaLiveRegionInitialFocusFirstFocusable");
      $closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$.$announce$($message$$37$$);
      if ($callback$$144_isIOSVOSupported$$) {
        if (!this.$_focusSkipLink$) {
          var $closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$ = this.$_getSubId$("focusSkipLink"), $element$$176_launcher$$26$$ = this.$_launcher$, $callback$$144_isIOSVOSupported$$ = $$$$71$$.proxy(this.$_intialFocus$, this, !0);
          $message$$37$$ = this.$getTranslatedString$("ariaFocusSkipLink");
          this.$_focusSkipLink$ = new $oj$$77$$.$PopupSkipLink$($element$$176_launcher$$26$$, $message$$37$$, $callback$$144_isIOSVOSupported$$, $closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$);
        }
        this.$_closeSkipLink$ || ($closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$ = this.$_getSubId$("closeSkipLink"), $element$$176_launcher$$26$$ = this.element, $callback$$144_isIOSVOSupported$$ = $$$$71$$.proxy(this.$_closeImplicitly$, this), $message$$37$$ = this.$getTranslatedString$("ariaCloseSkipLink"), this.$_closeSkipLink$ = new $oj$$77$$.$PopupSkipLink$($element$$176_launcher$$26$$, $message$$37$$, $callback$$144_isIOSVOSupported$$, $closeSkipLinkId_focusSkipLinkId_liveRegion$$3$$));
      }
    }, $_destroyVoiceOverAssist$:function() {
      var $closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$ = this.$_liveRegion$;
      $closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$ && ($closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$.destroy(), delete this.$_liveRegion$);
      if ($closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$ = this.$_focusSkipLink$) {
        $closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$.destroy(), delete this.$_focusSkipLink$;
      }
      if ($closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$ = this.$_closeSkipLink$) {
        $closeSkipLink$$1_focusSkipLink$$2_liveRegion$$4$$.destroy(), delete this.$_closeSkipLink$;
      }
    }, $_getSubId$:function($sub$$1$$) {
      var $id$$68$$ = this.element.attr("id");
      $oj$$77$$.$StringUtils$.$isEmptyOrUndefined$($id$$68$$) && ($id$$68$$ = this.uuid);
      return[$id$$68$$, $sub$$1$$].join("_");
    }, $_surrogateRemoveHandler$:function() {
      this.element.remove();
    }, $_getPopupServiceEvents$:function() {
      if (!this.$_popupServiceEvents$) {
        var $events$$16$$ = this.$_popupServiceEvents$ = {};
        $events$$16$$[$oj$$77$$.$PopupService$.$EVENT$.$POPUP_CLOSE$] = $$$$71$$.proxy(this.$_closeImplicitly$, this);
        $events$$16$$[$oj$$77$$.$PopupService$.$EVENT$.$POPUP_REMOVE$] = $$$$71$$.proxy(this.$_surrogateRemoveHandler$, this);
        $events$$16$$[$oj$$77$$.$PopupService$.$EVENT$.$POPUP_REFRESH$] = $$$$71$$.proxy(this.refresh, this);
      }
      return this.$_popupServiceEvents$;
    }, $_closeImplicitly$:function() {
      this.$_ignoreBeforeCloseResultant$ = !0;
      this.close();
      delete this.$_ignoreBeforeCloseResultant$;
    }});
    $oj$$77$$.Components.$setDefaultOptions$({ojPopup:{modality:$oj$$77$$.Components.$createDynamicPropertyGetter$(function() {
      return $oj$$77$$.$ThemeUtils$.$getOptionDefaultMap$("popup").modality;
    })}});
  })();
});

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
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "jqueryui-amd/draggable", "ojs/ojtouchproxy"], function($oj$$45$$, $$$$41$$) {
  (function() {
    $oj$$45$$.$__registerWidget$("oj.ojSlider", $$$$41$$.oj.editableValue, {defaultElement:"\x3cinput\x3e", version:"1.0.1", widgetEventPrefix:"oj", options:{distance:0, max:100, min:0, orientation:"horizontal", readOnly:!1, disabled:!1, step:1, type:"fromMin", value:0, rawValue:void 0}, $_numPages$:5, $_sliderDisplayValue$:null, $_isRTL$:function() {
      return "rtl" === $oj$$45$$.$DomUtils$.$getReadingDirection$();
    }, _ComponentCreate:function() {
      this._super();
      this.$_inputtag$ = !1;
      this.element.is("INPUT") ? (this.$_inputtag$ = !0, this.element[0].style && (this.$_styleFromInputTag$ = this.element[0].style.cssText), this.$_inputElementOriginalDisplay$ = this.element.css("display"), this.element.css("display", "none"), this.$_elementWrapped$ = $$$$41$$(this.element).wrap("\x3cdiv\x3e \x3c/div\x3e").parent()) : this.$_elementWrapped$ = this.element;
      this.$_componentSetup$();
    }, $_componentSetup$:function() {
      this.$_newMultiValue$ = [];
      this.$_thumbIndex$ = null;
      var $classes$$1$$ = "oj-slider ", $classes$$1$$ = this.$_isVertical$() ? $classes$$1$$ + "oj-slider-vertical" : $classes$$1$$ + "oj-slider-horizontal", $classes$$1$$ = $classes$$1$$ + " oj-component oj-form-control";
      this.options.$readonly$ && ($classes$$1$$ += " oj-read-only");
      this.options.disabled && ($classes$$1$$ += " oj-disabled");
      this.$_elementWrapped$.removeClass();
      this.$_elementWrapped$.addClass($classes$$1$$);
      this.$_multipleThumbs$ = "range" === this.options.type ? !0 : !1;
      this.$_calculateNewMax$();
      this.$_createSliderContainer$();
      this.$_createBarBackground$();
      this.$_buildValueOption$();
      this.$_createRange$();
      this.$_createThumbs$();
      this.$_updateUI$();
      this.$_setupEvents$();
    }, $_AfterCreate$:function() {
      this._super();
      this.$_makeDraggable$();
      var $ariaLabelString_label$$18$$ = this.$_GetLabelElementLocal$();
      if ($ariaLabelString_label$$18$$) {
        var $thumb$$ = this.$_elementWrapped$.find(".oj-slider-thumb"), $labelId$$1$$ = $ariaLabelString_label$$18$$.attr("id");
        $labelId$$1$$ || ($labelId$$1$$ = $ariaLabelString_label$$18$$.attr("for"));
        $thumb$$.attr("aria-labelledby", $labelId$$1$$);
        1 < $ariaLabelString_label$$18$$.length && 1 < $thumb$$.length && $thumb$$[1].attr("aria-labelledby", String($labelId$$1$$));
      } else {
        if ($ariaLabelString_label$$18$$ = this.element.attr("aria-label")) {
          $thumb$$ = this.$_elementWrapped$.find(".oj-slider-thumb"), $thumb$$.attr("aria-label", $ariaLabelString_label$$18$$);
        }
      }
    }, $_GetLabelElementLocal$:function() {
      var $queryResult$$7$$ = this.$_getAriaLabelledByElementLocal$();
      if (null !== $queryResult$$7$$ && 0 !== $queryResult$$7$$.length) {
        return $queryResult$$7$$;
      }
      $queryResult$$7$$ = this.$_getAriaLabelForElementLocal$();
      if (null !== $queryResult$$7$$ && 0 !== $queryResult$$7$$.length) {
        return $queryResult$$7$$;
      }
    }, $_getAriaLabelForElementLocal$:function() {
      var $id$$48_spanQuery$$ = this.element.prop("id");
      if (void 0 !== $id$$48_spanQuery$$) {
        var $jqLabelQuery$$ = $$$$41$$("label[for\x3d'" + $id$$48_spanQuery$$ + "']");
        if (0 < $jqLabelQuery$$.length) {
          return $jqLabelQuery$$;
        }
        $id$$48_spanQuery$$ = "span[for\x3d'" + $id$$48_spanQuery$$ + "']";
        if (0 !== $$$$41$$($id$$48_spanQuery$$).length) {
          return $$$$41$$($id$$48_spanQuery$$);
        }
      }
      return null;
    }, $_getAriaLabelledByElementLocal$:function() {
      var $ariaId$$1_jqSpanQuery$$ = this.element.attr("aria-labelledby");
      if (void 0 !== $ariaId$$1_jqSpanQuery$$) {
        var $jqLabelQuery$$1$$ = $$$$41$$("label[id\x3d'" + $ariaId$$1_jqSpanQuery$$ + "']");
        if (0 < $jqLabelQuery$$1$$.length) {
          return $jqLabelQuery$$1$$;
        }
        $ariaId$$1_jqSpanQuery$$ = $$$$41$$("span[id\x3d'" + $ariaId$$1_jqSpanQuery$$ + "']");
        if (0 < $ariaId$$1_jqSpanQuery$$.length) {
          return $ariaId$$1_jqSpanQuery$$;
        }
      } else {
        return null;
      }
    }, widget:function() {
      return this.$_elementWrapped$;
    }, $_SetDisplayValue$:function($displayValue$$11$$) {
      this.$_sliderDisplayValue$ = $displayValue$$11$$;
    }, $_GetDisplayValue$:function() {
      return this.$_sliderDisplayValue$;
    }, $_getElementId$:function() {
      return this.element[0].id;
    }, $_getThumbId$:function($index$$247$$) {
      return this.$_getElementId$() + "-thumb" + $index$$247$$;
    }, $_getBarValueId$:function() {
      return this.$_getElementId$() + "-barValue";
    }, $_getBarBackgroundId$:function() {
      return this.$_getElementId$() + "-barBack";
    }, $_getSliderWrapperId$:function() {
      return this.$_getElementId$() + "-sliderWrapper";
    }, $_createThumbs$:function() {
      var $i$$405$$, $thumbCount$$, $thumb$$1$$ = "", $thumbClasses$$ = "class\x3d'oj-slider-thumb ui-state-default' tabindex\x3d'0' role\x3d'slider'" + ("aria-valuemin \x3d '" + this.$_valueMin$() + "' ") + ("aria-valuemax \x3d '" + this.$_valueMax$() + "' ") + "\x3e\x3c/span\x3e", $thumbs$$ = [];
      $thumbCount$$ = this.$_multipleThumbs$ ? this.options.value.length : 1;
      for ($i$$405$$ = 0;$i$$405$$ < $thumbCount$$;$i$$405$$++) {
        $thumb$$1$$ = "\x3cspan " + ("id\x3d'" + this.$_getThumbId$($i$$405$$) + "' ") + $thumbClasses$$, $thumbs$$.push($thumb$$1$$);
      }
      this.$_thumbs$ = $$$$41$$($thumbs$$.join("")).appendTo(this.$_sliderContainer$);
      this.$_thumb$ = this.$_thumbs$.eq(0);
      var $that$$10$$ = this;
      this.$_thumbs$.each(function($i$$406$$) {
        $$$$41$$(this).data("oj-slider-thumb-index", $i$$406$$);
        $that$$10$$.$_isVertical$() && $$$$41$$(this).attr("aria-orientation", "vertical");
        $that$$10$$.options.disabled ? ($$$$41$$(this).attr("aria-disabled", "true"), $$$$41$$(this).removeAttr("tabindex")) : $$$$41$$(this).removeAttr("aria-disabled");
        $that$$10$$.options.readOnly ? $$$$41$$(this).attr("title", "read only") : $$$$41$$(this).removeAttr("title");
      });
    }, $_createSliderContainer$:function() {
      var $sliderWrapperId$$1$$ = this.$_getSliderWrapperId$(), $existingSliderWrapper$$ = this.$_elementWrapped$.find("#" + $sliderWrapperId$$1$$);
      $existingSliderWrapper$$.length && $existingSliderWrapper$$.remove();
      this.$_sliderContainer$ = $$$$41$$("\x3cdiv\x3e\x3c/div\x3e");
      $$$$41$$(this.$_sliderContainer$).attr("id", $sliderWrapperId$$1$$);
      this.$_sliderContainer$.addClass("oj-slider-container");
      this.element.after(this.$_sliderContainer$);
      this.$_sliderContainer$[0].style.cssText = this.$_styleFromInputTag$;
      this.$_isVertical$() && "" == this.$_sliderContainer$[0].style.height && (this.$_sliderContainer$[0].style.height = "150px");
    }, $_createBarBackground$:function() {
      var $barId$$ = this.$_getBarBackgroundId$(), $classes$$2_existingBarBack$$ = this.$_elementWrapped$.find("#" + $barId$$);
      $classes$$2_existingBarBack$$.length && $classes$$2_existingBarBack$$.remove();
      this.$_barback$ = $$$$41$$("\x3cdiv\x3e\x3c/div\x3e");
      $classes$$2_existingBarBack$$ = "oj-slider-bar";
      $classes$$2_existingBarBack$$ = this.$_isVertical$() ? $classes$$2_existingBarBack$$ + " oj-slider-vertical" : $classes$$2_existingBarBack$$ + " oj-slider-horizontal";
      $$$$41$$(this.$_barback$).attr("id", $barId$$);
      this.$_barback$.addClass($classes$$2_existingBarBack$$);
      this.$_sliderContainer$.append(this.$_barback$);
      var $that$$11$$ = this;
      this.$_barback$.on("mousedown" + $that$$11$$.eventNamespace, function($event$$584$$) {
        $that$$11$$.$_repositionThumb$($event$$584$$);
        $that$$11$$.$_mouseStop$($event$$584$$);
        $that$$11$$.$_getActiveThumb$().focus();
      });
    }, $_buildValueOption$:function() {
      this.options.type && (this.options.value ? this.$_multipleThumbs$ && 2 != this.options.value.length && (this.options.value = [0 < this.options.value.length ? this.options.value[0] : this.$_valueMin$(), this.$_valueMax$()], this.option("value", this.options.value, {_context:{$writeback$:!0, $internalSet$:!0}})) : (this.options.value = this.$_multipleThumbs$ ? [this.$_valueMin$(), this.$_valueMax$()] : this.$_valueMin$(), this.option("value", this.options.value, {_context:{$writeback$:!0, $internalSet$:!0}})));
    }, $_createRange$:function() {
      var $options$$320$$ = this.options, $classes$$3$$ = "";
      if ($options$$320$$.type) {
        this.$_range$ = $$$$41$$("\x3cdiv\x3e\x3c/div\x3e");
        $$$$41$$(this.$_range$).attr("id", this.$_getBarValueId$());
        this.$_sliderContainer$.append(this.$_range$);
        var $classes$$3$$ = "oj-slider-range oj-slider-bar-value", $that$$12$$ = this;
        this.$_range$.on("mousedown" + $that$$12$$.eventNamespace, function($event$$585$$) {
          $that$$12$$.$_repositionThumb$($event$$585$$);
          $that$$12$$.$_mouseStop$($event$$585$$);
          $that$$12$$.$_getActiveThumb$().focus();
        });
        this.$_range$ = this.$_sliderContainer$.find("#" + this.$_getBarValueId$());
        var $newClass$$ = "";
        "fromMin" === $options$$320$$.type ? $newClass$$ = " oj-slider-range-min" : "fromMax" === $options$$320$$.type && ($newClass$$ = " oj-slider-range-max");
        this.$_range$.addClass($classes$$3$$ + $newClass$$);
      } else {
        this.$_range$ && this.$_range$.remove(), this.$_range$ = null;
      }
    }, $_setupTouch$:function($e$$97$$) {
      this.$_touchProxy$ = $oj$$45$$.$_TouchProxy$.$addTouchListeners$($e$$97$$);
    }, $_tearDownTouch$:function($e$$98$$) {
      $oj$$45$$.$_TouchProxy$.$removeTouchListeners$($e$$98$$);
    }, $_setupEvents$:function() {
      this.$_CanSetValue$() && this._hoverable(this.$_elementWrapped$);
      this._focusable(this.$_elementWrapped$);
      this.$_thumbs$.toArray().forEach(function($current$$22_thumb$$4$$) {
        $current$$22_thumb$$4$$ = $$$$41$$($current$$22_thumb$$4$$);
        this.$_UnregisterChildNode$($current$$22_thumb$$4$$);
        this._on($current$$22_thumb$$4$$, this.$_thumbEvents$);
        this.$_setupTouch$($current$$22_thumb$$4$$);
      }, this);
    }, $_GetContentElement$:function() {
      return this.$_elementWrapped$;
    }, $_destroySliderDom$:function() {
      this.$_thumbs$.toArray().forEach(function($current$$23_thumb$$5$$) {
        $current$$23_thumb$$5$$ = $$$$41$$($current$$23_thumb$$5$$);
        this.$_tearDownTouch$($current$$23_thumb$$5$$);
      }, this);
      this.$_range$ && this.$_range$.remove();
      this.$_sliderContainer$ && this.$_sliderContainer$.remove();
    }, $_unwrapSlider$:function() {
      $oj$$45$$.$DomUtils$.unwrap(this.element, this.$_elementWrapped$);
      this.element.css("display", this.$_inputElementOriginalDisplay$);
      this.$_RestoreAttributes$(this.element);
    }, _destroy:function() {
      this.$_destroySliderDom$();
      this.$_unwrapSlider$();
      return this._super();
    }, $_repositionThumb$:function($event$$586$$) {
      var $normValue$$, $distance$$2$$, $index$$251$$, $that$$13$$ = this, $o$$10$$ = this.options;
      $index$$251$$ = 0;
      this.$_closestThumb$ = this.$_thumb$;
      if ($o$$10$$.disabled || $o$$10$$.readOnly) {
        return!1;
      }
      $normValue$$ = this.$_getNormValueFromMouse$({x:$event$$586$$.pageX, y:$event$$586$$.pageY});
      $distance$$2$$ = this.$_valueMax$() - this.$_valueMin$() + 1;
      this.$_multipleThumbs$ && this.$_thumbs$.each(function($i$$409$$) {
        var $thisDistance$$ = Math.abs($normValue$$ - $that$$13$$.$_getMultiValues$($i$$409$$));
        if ($distance$$2$$ > $thisDistance$$ || $distance$$2$$ === $thisDistance$$ && ($i$$409$$ === $that$$13$$.$_lastChangedValueIndex$ || $that$$13$$.$_getMultiValues$($i$$409$$) === $o$$10$$.min)) {
          $distance$$2$$ = $thisDistance$$, this.$_closestThumb$ = $$$$41$$(this), $index$$251$$ = $i$$409$$;
        }
      });
      this.$_thumbIndex$ = $index$$251$$;
      if (this.$_closestThumb$) {
        return this.$_thumbs$.hasClass("ui-state-hover") || this.$_slide$($event$$586$$, $index$$251$$, $normValue$$), this.$_getActiveThumb$().addClass("oj-active").focus(), this.$_range$.addClass("oj-active"), !0;
      }
    }, $_initDragging$:function($event$$587$$, $thumb$$7$$) {
      var $o$$11$$ = this.options;
      if ($o$$11$$.disabled || $o$$11$$.readOnly) {
        return!1;
      }
      $thumb$$7$$.addClass("oj-active").focus();
      this.$_range$.addClass("oj-active");
      return!0;
    }, $_mouseDragInternal$:function($event$$588$$, $thumb$$8$$) {
      var $normValue$$1_pct$$ = this.$_getNormValueFromThumb$($thumb$$8$$);
      this.$_slide$($event$$588$$, this.$_thumbIndex$, $normValue$$1_pct$$, !0);
      $normValue$$1_pct$$ = 100 * this.$_getFracFromThumb$($thumb$$8$$);
      this.$_multipleThumbs$ ? this.$_setRangeMultiThumb$($normValue$$1_pct$$, this.$_thumbIndex$) : this.$_setRange$($normValue$$1_pct$$);
      return!1;
    }, $_mouseStop$:function($event$$589$$, $thumb$$9$$) {
      this.$_thumbs$.removeClass("oj-active");
      this.$_range$.removeClass("oj-active");
      var $normValue$$2$$ = this.$_getNormValueFromThumb$($thumb$$9$$);
      this.$_slide$($event$$589$$, this.$_thumbIndex$, $normValue$$2$$);
      this.$_change$($event$$589$$, this.$_thumbIndex$, !1);
      this.$_thumbIndex$ = null;
      return!1;
    }, $_isVertical$:function() {
      return "vertical" === this.options.orientation;
    }, $_getOrientationAdjustedFrac$:function($frac$$) {
      1 < $frac$$ && ($frac$$ = 1);
      0 > $frac$$ && ($frac$$ = 0);
      this.$_isVertical$() && ($frac$$ = 1 - $frac$$);
      return $frac$$;
    }, $_getNormValueFromMouse$:function($position$$29_valueTotal$$) {
      var $fracMouse$$ = this.$_getFracFromMouse$($position$$29_valueTotal$$);
      $position$$29_valueTotal$$ = this.$_valueMax$() - this.$_valueMin$();
      this.$_isRTL$() && !this.$_isVertical$() && ($fracMouse$$ = 1 - $fracMouse$$);
      return this.$_trimAlignValue$(this.$_valueMin$() + $fracMouse$$ * $position$$29_valueTotal$$);
    }, $_getFracFromMouse$:function($pixelMouse$$1_position$$30$$) {
      var $fracMouse$$1_pixelTotal$$1$$;
      this.$_isVertical$() ? ($fracMouse$$1_pixelTotal$$1$$ = this.$_barback$.height(), $pixelMouse$$1_position$$30$$ = $pixelMouse$$1_position$$30$$.y - this.$_barback$.offset().top) : ($fracMouse$$1_pixelTotal$$1$$ = this.$_barback$.width(), $pixelMouse$$1_position$$30$$ = $pixelMouse$$1_position$$30$$.x - this.$_barback$.offset().left);
      return 0 == $fracMouse$$1_pixelTotal$$1$$ ? 1 : $fracMouse$$1_pixelTotal$$1$$ = this.$_getOrientationAdjustedFrac$($pixelMouse$$1_position$$30$$ / $fracMouse$$1_pixelTotal$$1$$);
    }, $_getActiveThumb$:function() {
      return this.$_multipleThumbs$ ? $$$$41$$(this.$_thumbs$[this.$_thumbIndex$]) : this.$_thumb$;
    }, $_getFracFromThumb$:function($fracThumb_pixelTotal$$2_thumb$$10$$) {
      var $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$11$$;
      $fracThumb_pixelTotal$$2_thumb$$10$$ || ($fracThumb_pixelTotal$$2_thumb$$10$$ = this.$_getActiveThumb$());
      this.$_isVertical$() ? ($halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$11$$ = $fracThumb_pixelTotal$$2_thumb$$10$$.outerHeight() / 2, $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$11$$ = $fracThumb_pixelTotal$$2_thumb$$10$$.offset().top + $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$11$$, $fracThumb_pixelTotal$$2_thumb$$10$$ = this.$_barback$.height(), $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$11$$ -= this.$_barback$.offset().top) : ($halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$11$$ = 
      $fracThumb_pixelTotal$$2_thumb$$10$$.outerWidth() / 2, $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$11$$ = $fracThumb_pixelTotal$$2_thumb$$10$$.offset().left + $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$11$$, $fracThumb_pixelTotal$$2_thumb$$10$$ = this.$_barback$.width(), $halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$11$$ -= this.$_barback$.offset().left);
      return 0 == $fracThumb_pixelTotal$$2_thumb$$10$$ ? 1 : $fracThumb_pixelTotal$$2_thumb$$10$$ = this.$_getOrientationAdjustedFrac$($halfThumbHeight_halfThumbWidth_pixelMouse$$2_pos$$11$$ / $fracThumb_pixelTotal$$2_thumb$$10$$);
    }, $_getNormValueFromThumb$:function($fracThumb$$1_thumb$$11$$) {
      var $valueTotal$$1$$;
      $fracThumb$$1_thumb$$11$$ = this.$_getFracFromThumb$($fracThumb$$1_thumb$$11$$);
      $valueTotal$$1$$ = this.$_valueMax$() - this.$_valueMin$();
      this.$_isRTL$() && !this.$_isVertical$() && ($fracThumb$$1_thumb$$11$$ = 1 - $fracThumb$$1_thumb$$11$$);
      return this.$_trimAlignValue$(this.$_valueMin$() + $fracThumb$$1_thumb$$11$$ * $valueTotal$$1$$);
    }, $_getOtherThumbValue$:function($index$$252$$) {
      return this.$_getMultiValues$($index$$252$$ ? 0 : 1);
    }, $_getNewThumbValueLimited$:function($index$$253$$, $newVal$$1$$, $otherVal$$) {
      return 2 === this.options.value.length && (0 === $index$$253$$ && $newVal$$1$$ > $otherVal$$ || 1 === $index$$253$$ && $newVal$$1$$ < $otherVal$$) ? $otherVal$$ : $newVal$$1$$;
    }, $_slide$:function($event$$590$$, $index$$254$$, $newVal$$2$$, $rawOnly$$) {
      var $otherVal$$1$$;
      this.$_multipleThumbs$ ? ($otherVal$$1$$ = this.$_getOtherThumbValue$($index$$254$$), $newVal$$2$$ = this.$_getNewThumbValueLimited$($index$$254$$, $newVal$$2$$, $otherVal$$1$$), $newVal$$2$$ !== this.$_getMultiValues$($index$$254$$) && this.$_setMultiValue$($event$$590$$, $index$$254$$, $newVal$$2$$, $rawOnly$$)) : $newVal$$2$$ !== this.$_getSingleValue$() && (this.$_setSingleValue$($event$$590$$, $newVal$$2$$, $rawOnly$$), $rawOnly$$ || this.$_inputtag$ && this.element.val($newVal$$2$$));
    }, $_setSingleValue$:function($event$$591$$, $newValue$$20$$, $rawOnly$$1$$) {
      this.$_newValue$ = this.$_trimAlignValue$($newValue$$20$$);
      $rawOnly$$1$$ || (this.$_SetValue$(this.$_newValue$, $event$$591$$), this.$_updateUI$());
      this.$_SetRawValue$(this.$_newValue$, $event$$591$$);
    }, $_change$:function($event$$592$$, $index$$255$$, $rawOnly$$2$$) {
      this.$_multipleThumbs$ ? (this.$_lastChangedValues$ = this.$_getNewValues$($index$$255$$, this.$_newMultiValue$[$index$$255$$]), this.$_SetRawValue$(this.$_lastChangedValues$, $event$$592$$), $rawOnly$$2$$ || this.$_SetValue$(this.$_lastChangedValues$, $event$$592$$)) : (this.$_SetRawValue$(this.$_newValue$, $event$$592$$), $rawOnly$$2$$ || this.$_SetValue$(this.$_newValue$, $event$$592$$));
      this.$_lastChangedValueIndex$ = $index$$255$$;
    }, $_getNewValues$:function($index$$256$$, $newValue$$21$$) {
      var $vals$$, $i$$410$$;
      $vals$$ = this.options.value.slice();
      for ($i$$410$$ = 0;$i$$410$$ < $vals$$.length;$i$$410$$ += 1) {
        $vals$$[$i$$410$$] = this.$_trimAlignValue$($vals$$[$i$$410$$]);
      }
      $index$$256$$ === this.$_thumbIndex$ && ($vals$$[$index$$256$$] = $newValue$$21$$);
      return $vals$$;
    }, $_getSingleValue$:function() {
      return this.$_getValueAligned$();
    }, $_getMultiValues$:function($index$$257$$) {
      return this.$_getValuesAligned$($index$$257$$);
    }, $_setMultiValue$:function($event$$593$$, $index$$258$$, $newValue$$22$$, $rawOnly$$3$$) {
      this.$_newMultiValue$[$index$$258$$] = this.$_trimAlignValue$($newValue$$22$$);
      this.$_change$($event$$593$$, $index$$258$$, $rawOnly$$3$$);
      $rawOnly$$3$$ || this.$_updateUI$();
    }, _setOption:function($key$$168$$, $coercedValue_value$$274$$, $flags$$39$$) {
      "value" === $key$$168$$ && (Array.isArray($coercedValue_value$$274$$) ? isNaN($coercedValue_value$$274$$[0]) ? (this.$_multipleThumbs$ = !1, this.$_parse$($key$$168$$, $coercedValue_value$$274$$[0])) : this.$_multipleThumbs$ = !0 : (this.$_multipleThumbs$ = !1, this.$_parse$($key$$168$$, $coercedValue_value$$274$$)));
      $coercedValue_value$$274$$ = "max" === $key$$168$$ || "min" === $key$$168$$ ? this.$_parse$($key$$168$$, $coercedValue_value$$274$$) : "step" === $key$$168$$ ? this.$_parseStep$($coercedValue_value$$274$$) : $coercedValue_value$$274$$;
      "disabled" != $key$$168$$ && this._super($key$$168$$, $coercedValue_value$$274$$, $flags$$39$$);
      "readOnly" === $key$$168$$ && (this.options.$readonly$ = $coercedValue_value$$274$$);
      "disabled" === $key$$168$$ && (this.options.disabled = $coercedValue_value$$274$$);
      switch($key$$168$$) {
        case "value":
          this.$_updateUI$();
          this.$_makeDraggable$();
          break;
        case "min":
        ;
        case "max":
          this.$_calculateNewMax$();
          this.$_updateUI$();
          this.$_makeDraggable$();
          break;
        case "orientation":
        ;
        case "readonly":
        ;
        case "step":
        ;
        case "type":
        ;
        case "disabled":
          this.$_reCreate$();
      }
    }, $_reCreate$:function() {
      this.$_destroySliderDom$();
      this.$_componentSetup$();
      this.$_AfterCreate$();
    }, $_getValueAligned$:function() {
      var $val$$57$$ = this.options.value;
      return $val$$57$$ = this.$_trimAlignValue$($val$$57$$);
    }, $_getValuesAligned$:function($index$$259$$) {
      return this.$_trimAlignValue$(this.options.value[$index$$259$$]);
    }, $_trimAlignValue$:function($alignValue_val$$59$$) {
      if ($alignValue_val$$59$$ <= this.$_valueMin$()) {
        return this.$_valueMin$();
      }
      if ($alignValue_val$$59$$ >= this.$_valueMax$()) {
        return this.$_valueMax$();
      }
      var $step$$1$$ = 0 < this.options.step ? this.options.step : 1, $valModStep$$ = ($alignValue_val$$59$$ - this.$_valueMin$()) % $step$$1$$;
      $alignValue_val$$59$$ -= $valModStep$$;
      2 * Math.abs($valModStep$$) >= $step$$1$$ && ($alignValue_val$$59$$ += 0 < $valModStep$$ ? $step$$1$$ : -$step$$1$$);
      return parseFloat($alignValue_val$$59$$.toFixed(5));
    }, $_calculateNewMax$:function() {
      var $min$$7$$ = this.$_valueMin$();
      this.max = 0 !== (this.options.max - $min$$7$$) / this.options.step % 1 ? this.options.max - (this.options.max - $min$$7$$) % this.options.step : this.options.max;
    }, $_valueMin$:function() {
      return this.options.min;
    }, $_valueMax$:function() {
      return this.max;
    }, $_getGrid$:function() {
      var $numIntervals_pixelInterval$$;
      $numIntervals_pixelInterval$$ = 0 < this.options.step ? (this.$_valueMax$() - this.$_valueMin$()) / this.options.step : 100;
      $numIntervals_pixelInterval$$ = (this.$_isVertical$() ? this.$_barback$.height() : this.$_barback$.width()) / $numIntervals_pixelInterval$$;
      1 > $numIntervals_pixelInterval$$ && ($numIntervals_pixelInterval$$ = 1);
      return this.$_isVertical$() ? [1, $numIntervals_pixelInterval$$] : [$numIntervals_pixelInterval$$, 1];
    }, $_getThumbsValueFrac$:function($index$$260$$) {
      return(this.$_getMultiValues$($index$$260$$) - this.$_valueMin$()) / (this.$_valueMax$() - this.$_valueMin$());
    }, $_updateUI$:function() {
      var $valPercent$$, $value$$275$$, $valueMin$$, $valueMax$$;
      this.$_multipleThumbs$ ? this.$_thumbs$.toArray().forEach(function($current$$24$$, $i$$412$$) {
        var $thumb$$12$$ = $$$$41$$($current$$24$$);
        $valPercent$$ = 100 * this.$_getThumbsValueFrac$($i$$412$$);
        this.$_isRTL$() && !this.$_isVertical$() && ($valPercent$$ = 100 - $valPercent$$);
        this.$_isVertical$() ? $$$$41$$($thumb$$12$$).css({top:100 - $valPercent$$ + "%"}) : $$$$41$$($thumb$$12$$).css({left:$valPercent$$ + "%"});
        $$$$41$$($thumb$$12$$).attr("aria-valuenow", this.$_getMultiValues$($i$$412$$));
        this.$_setRangeMultiThumb$($valPercent$$, $i$$412$$);
      }, this) : ($value$$275$$ = this.$_getValueAligned$(), $valueMin$$ = this.$_valueMin$(), $valueMax$$ = this.$_valueMax$(), $valPercent$$ = $valueMax$$ !== $valueMin$$ ? ($value$$275$$ - $valueMin$$) / ($valueMax$$ - $valueMin$$) * 100 : 0, this.$_isRTL$() && !this.$_isVertical$() && ($valPercent$$ = 100 - $valPercent$$), this.$_isVertical$() ? this.$_thumb$.css({top:100 - $valPercent$$ + "%"}) : this.$_thumb$.css({left:$valPercent$$ + "%"}), $$$$41$$(this.$_thumb$).attr("aria-valuenow", $value$$275$$), 
      this.$_setRange$($valPercent$$));
    }, $_setRange$:function($val$$60$$) {
      var $oRange$$ = this.options.type;
      this.$_isVertical$() ? ("fromMin" === $oRange$$ && this.$_range$.css({height:$val$$60$$ + "%"}), "fromMax" === $oRange$$ && this.$_range$.css({height:100 - $val$$60$$ + "%"})) : this.$_isRTL$() ? ("fromMin" === $oRange$$ && this.$_range$.css({width:100 - $val$$60$$ + "%"}), "fromMax" === $oRange$$ && this.$_range$.css({width:$val$$60$$ + "%"})) : ("fromMin" === $oRange$$ && this.$_range$.css({width:$val$$60$$ + "%"}), "fromMax" === $oRange$$ && this.$_range$.css({width:100 - $val$$60$$ + "%"}));
    }, $_setRangeMultiThumb$:function($val$$61$$, $index$$261$$) {
      var $id$$49_thumb1Pct$$ = this.$_range$.attr("id");
      if (0 == $index$$261$$) {
        switch($id$$49_thumb1Pct$$ = 100 * this.$_getThumbsValueFrac$(1), this.options.type) {
          case "fromMin":
            this.$_isVertical$() ? this.$_range$.css({height:$val$$61$$ + "%"}) : this.$_range$.css({width:$val$$61$$ + "%"});
            break;
          case "range":
            this.$_isVertical$() ? (this.$_range$.css({top:100 - $id$$49_thumb1Pct$$ + "%"}), this.$_range$.css({height:$id$$49_thumb1Pct$$ - $val$$61$$ + "%"})) : this.$_isRTL$() ? (this.$_range$.css({left:100 - $id$$49_thumb1Pct$$ + "%"}), this.$_range$.css({width:$id$$49_thumb1Pct$$ - (100 - $val$$61$$) + "%"})) : (this.$_range$.css({left:$val$$61$$ + "%"}), this.$_range$.css({width:$id$$49_thumb1Pct$$ - $val$$61$$ + "%"}));
        }
      } else {
        var $thumb0Pct$$ = 100 * this.$_getThumbsValueFrac$(0);
        switch(this.options.type) {
          case "fromMax":
            this.$_isVertical$() ? this.$_range$.css({height:100 - $val$$61$$ + "%"}) : this.$_range$.css({width:100 - $val$$61$$ + "%"});
            break;
          case "range":
            this.$_isVertical$() ? document.getElementById($id$$49_thumb1Pct$$) && (this.$_range$.css({top:100 - $val$$61$$ + "%"}), this.$_range$.css({height:$val$$61$$ - $thumb0Pct$$ + "%"})) : this.$_isRTL$() ? document.getElementById($id$$49_thumb1Pct$$) && (this.$_range$.css({left:$val$$61$$ + "%"}), this.$_range$.css({width:-$val$$61$$ + 100 - $thumb0Pct$$ + "%"})) : document.getElementById($id$$49_thumb1Pct$$) && this.$_range$.css({width:$val$$61$$ - parseInt(document.getElementById($id$$49_thumb1Pct$$).style.left, 
            10) + "%"});
        }
      }
    }, $_thumbEvents$:{keydown:function($event$$594$$) {
      var $curVal_tempVal$$, $newVal$$3$$, $step$$2$$, $index$$262$$ = $$$$41$$($event$$594$$.target).data("oj-slider-thumb-index");
      this.$_thumbIndex$ = $index$$262$$;
      switch($event$$594$$.keyCode) {
        case $$$$41$$.ui.keyCode.HOME:
        ;
        case $$$$41$$.ui.keyCode.END:
        ;
        case $$$$41$$.ui.keyCode.PAGE_UP:
        ;
        case $$$$41$$.ui.keyCode.PAGE_DOWN:
        ;
        case $$$$41$$.ui.keyCode.UP:
        ;
        case $$$$41$$.ui.keyCode.RIGHT:
        ;
        case $$$$41$$.ui.keyCode.DOWN:
        ;
        case $$$$41$$.ui.keyCode.LEFT:
          $event$$594$$.preventDefault(), $$$$41$$($event$$594$$.target).addClass("oj-active");
      }
      $step$$2$$ = this.options.step;
      $curVal_tempVal$$ = this.$_multipleThumbs$ ? $newVal$$3$$ = this.$_getMultiValues$($index$$262$$) : $newVal$$3$$ = this.$_getSingleValue$();
      switch($event$$594$$.keyCode) {
        case $$$$41$$.ui.keyCode.HOME:
          $newVal$$3$$ = this.$_valueMin$();
          break;
        case $$$$41$$.ui.keyCode.END:
          $newVal$$3$$ = this.$_valueMax$();
          break;
        case $$$$41$$.ui.keyCode.PAGE_UP:
          $newVal$$3$$ = this.$_trimAlignValue$($curVal_tempVal$$ + (this.$_valueMax$() - this.$_valueMin$()) / this.$_numPages$);
          break;
        case $$$$41$$.ui.keyCode.PAGE_DOWN:
          $newVal$$3$$ = this.$_trimAlignValue$($curVal_tempVal$$ - (this.$_valueMax$() - this.$_valueMin$()) / this.$_numPages$);
          break;
        case $$$$41$$.ui.keyCode.UP:
          if ($curVal_tempVal$$ === this.$_valueMax$()) {
            return;
          }
          $newVal$$3$$ = this.$_trimAlignValue$($curVal_tempVal$$ + $step$$2$$);
          break;
        case $$$$41$$.ui.keyCode.RIGHT:
          if (!this.$_isRTL$() || this.$_isVertical$()) {
            if ($curVal_tempVal$$ === this.$_valueMax$()) {
              return;
            }
            $curVal_tempVal$$ += $step$$2$$;
          } else {
            if ($curVal_tempVal$$ === this.$_valueMin$()) {
              return;
            }
            $curVal_tempVal$$ -= $step$$2$$;
          }
          $newVal$$3$$ = this.$_trimAlignValue$($curVal_tempVal$$);
          break;
        case $$$$41$$.ui.keyCode.DOWN:
          if ($curVal_tempVal$$ === this.$_valueMin$()) {
            return;
          }
          $newVal$$3$$ = this.$_trimAlignValue$($curVal_tempVal$$ - $step$$2$$);
          break;
        case $$$$41$$.ui.keyCode.LEFT:
          if (!this.$_isRTL$() || this.$_isVertical$()) {
            if ($curVal_tempVal$$ === this.$_valueMin$()) {
              return;
            }
            $curVal_tempVal$$ -= $step$$2$$;
          } else {
            if ($curVal_tempVal$$ === this.$_valueMax$()) {
              return;
            }
            $curVal_tempVal$$ += $step$$2$$;
          }
          $newVal$$3$$ = this.$_trimAlignValue$($curVal_tempVal$$);
      }
      this.$_slide$($event$$594$$, $index$$262$$, $newVal$$3$$);
    }, keyup:function($event$$595$$) {
      var $index$$263$$ = $$$$41$$($event$$595$$.target).data("oj-slider-thumb-index");
      this.$_thumbIndex$ = $index$$263$$;
      this.$_change$($event$$595$$, $index$$263$$, !1);
      $$$$41$$($event$$595$$.target).removeClass("oj-active");
      this.$_thumbIndex$ = null;
    }}, $_InitOptions$:function($originalDefaults$$13$$, $constructorOptions$$15$$) {
      var $opts$$30$$ = this.options, $self$$173$$ = this;
      this._superApply(arguments);
      $oj$$45$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $validateOption$:!0}, {$attribute$:"value"}, {$attribute$:"title"}, {$attribute$:"min"}, {$attribute$:"max"}, {$attribute$:"step"}], $constructorOptions$$15$$, this, function($initializedOptions$$1$$) {
        for (var $toParse$$ = ["value", "step", "min", "max"], $i$$413$$ = 0;$i$$413$$ < $toParse$$.length;$i$$413$$++) {
          var $opt$$22$$ = $toParse$$[$i$$413$$], $value$$276$$ = $opt$$22$$ in $initializedOptions$$1$$ ? $initializedOptions$$1$$[$opt$$22$$] : $opts$$30$$[$opt$$22$$];
          null != $value$$276$$ && ("step" === $opt$$22$$ ? $initializedOptions$$1$$[$opt$$22$$] = $self$$173$$.$_parseStep$($value$$276$$) : "min" === $opt$$22$$ || "max" === $opt$$22$$ ? $initializedOptions$$1$$[$opt$$22$$] = $self$$173$$.$_parse$($opt$$22$$, $value$$276$$) : "value" === $opt$$22$$ && (Array.isArray($value$$276$$) ? $initializedOptions$$1$$[$opt$$22$$] = $value$$276$$ : $initializedOptions$$1$$[$opt$$22$$] = $self$$173$$.$_parse$($opt$$22$$, $value$$276$$)));
        }
      });
      if (void 0 === $opts$$30$$.value) {
        throw Error(this.$getTranslatedString$("noValue"));
      }
      if (null != $opts$$30$$.min && null != $opts$$30$$.max) {
        if ($opts$$30$$.max < $opts$$30$$.min) {
          throw Error(this.$getTranslatedString$("maxMin"));
        }
        if ($opts$$30$$.value < $opts$$30$$.min || $opts$$30$$.value > $opts$$30$$.max) {
          throw Error(this.$getTranslatedString$("valueRange"));
        }
      }
    }, getNodeBySubId:function($locator$$47_subId$$51$$) {
      if (null == $locator$$47_subId$$51$$) {
        return this.element ? this.element[0] : null;
      }
      $locator$$47_subId$$51$$ = $locator$$47_subId$$51$$.subId;
      return "oj-slider-thumb-0" === $locator$$47_subId$$51$$ ? this.widget().find(".oj-slider-thumb")[0] : "oj-slider-thumb-1" === $locator$$47_subId$$51$$ ? this.widget().find(".oj-slider-thumb")[1] : "oj-slider-bar" === $locator$$47_subId$$51$$ ? this.widget().find("." + $locator$$47_subId$$51$$)[0] : "oj-slider-bar-value" === $locator$$47_subId$$51$$ ? this.widget().find("." + $locator$$47_subId$$51$$)[0] : null;
    }, getSubIdByNode:function($node$$103$$) {
      if (null != $node$$103$$) {
        if ($node$$103$$.id === this.$_getThumbId$(0) && $$$$41$$($node$$103$$).hasClass("oj-slider-thumb")) {
          return{subId:"oj-slider-thumb-0"};
        }
        if ($node$$103$$.id === this.$_getThumbId$(1) && $$$$41$$($node$$103$$).hasClass("oj-slider-thumb")) {
          return{subId:"oj-slider-thumb-1"};
        }
        if ($$$$41$$($node$$103$$).hasClass("oj-slider-bar")) {
          return{subId:"oj-slider-bar"};
        }
        if ($$$$41$$($node$$103$$).hasClass("oj-slider-bar-value")) {
          return{subId:"oj-slider-bar-value"};
        }
      }
      return null;
    }, _GetDefaultStyleClass:function() {
      return "oj-slider";
    }, $_parse$:function($option$$34$$, $val$$62$$) {
      var $returnValue$$7$$;
      $returnValue$$7$$ = null !== $val$$62$$ ? +$val$$62$$ : $val$$62$$;
      if (isNaN($returnValue$$7$$)) {
        throw Error(this.$getTranslatedString$("optionNum", {option:$option$$34$$}));
      }
      return $returnValue$$7$$;
    }, $_parseStep$:function($parsedStep_val$$63$$) {
      if (null === $parsedStep_val$$63$$) {
        return 1;
      }
      $parsedStep_val$$63$$ = this.$_parse$("step", $parsedStep_val$$63$$);
      if (0 >= $parsedStep_val$$63$$) {
        throw Error(this.$getTranslatedString$("invalidStep"));
      }
      if (null === $parsedStep_val$$63$$ || 0 >= $parsedStep_val$$63$$) {
        $parsedStep_val$$63$$ = 1;
      }
      return $parsedStep_val$$63$$;
    }, $_getEndInterval$:function() {
      return this.$_barback$.offset().left + this.$_barback$.width();
    }, $_getStartInterval$:function() {
      return this.$_barback$.offset().left;
    }, $_callDraggable$:function($thumbParam$$) {
      var $g$$1$$ = this.$_getGrid$(), $cachedStyle$$ = $thumbParam$$[0].style, $that$$14$$ = this;
      $thumbParam$$.draggable({axis:this.$_isVertical$() ? "y" : "x", grid:$g$$1$$, disabled:!1, start:function($event$$596$$) {
        $thumbParam$$[0] == $$$$41$$($that$$14$$.$_thumbs$)[0] ? $that$$14$$.$_thumbIndex$ = 0 : $thumbParam$$[0] == $$$$41$$($that$$14$$.$_thumbs$)[1] && ($that$$14$$.$_thumbIndex$ = 1);
        $that$$14$$.$_initDragging$($event$$596$$, $thumbParam$$);
      }, drag:function($event$$597$$, $ui$$33$$) {
        var $pos$$12$$ = $ui$$33$$.position;
        $that$$14$$.$_isVertical$() ? ($cachedStyle$$.left = "", $pos$$12$$.left = "") : ($cachedStyle$$.top = "", $pos$$12$$.top = "");
        $that$$14$$.$_mouseDragInternal$($event$$597$$, $thumbParam$$);
        $that$$14$$.$_isVertical$() ? (0 > $pos$$12$$.top && ($pos$$12$$.top = 0), $pos$$12$$.top > $that$$14$$.$_barback$.height() && ($pos$$12$$.top = $that$$14$$.$_barback$.height())) : (0 > $pos$$12$$.left && ($pos$$12$$.left = 0), $pos$$12$$.left > $that$$14$$.$_barback$.width() && ($pos$$12$$.left = $that$$14$$.$_barback$.width()));
        if ($that$$14$$.$_multipleThumbs$) {
          var $otherThumb_pos2$$;
          $otherThumb_pos2$$ = 0 == $that$$14$$.$_thumbIndex$ ? $$$$41$$($that$$14$$.$_thumbs$[1]) : $$$$41$$($that$$14$$.$_thumbs$[0]);
          if ($that$$14$$.$_isVertical$()) {
            var $halfThumbHeight$$1_halfThumbWidth$$1$$ = $thumbParam$$.outerHeight() / 2, $parentLeft_parentTop$$ = $that$$14$$.$_barback$.offsetParent().offset().top;
            $thumbParam$$.offset();
            $otherThumb_pos2$$ = $otherThumb_pos2$$.offset().top + $halfThumbHeight$$1_halfThumbWidth$$1$$ - $parentLeft_parentTop$$;
          } else {
            $halfThumbHeight$$1_halfThumbWidth$$1$$ = $thumbParam$$.outerWidth() / 2, $parentLeft_parentTop$$ = $that$$14$$.$_barback$.offsetParent().offset().left, $thumbParam$$.offset(), $otherThumb_pos2$$ = $otherThumb_pos2$$.offset().left + $halfThumbHeight$$1_halfThumbWidth$$1$$ - $parentLeft_parentTop$$;
          }
          0 == $that$$14$$.$_thumbIndex$ ? $that$$14$$.$_isVertical$() ? $pos$$12$$.top < $otherThumb_pos2$$ && ($pos$$12$$.top = $otherThumb_pos2$$) : $that$$14$$.$_isRTL$() ? $pos$$12$$.left < $otherThumb_pos2$$ && ($pos$$12$$.left = $otherThumb_pos2$$) : $pos$$12$$.left > $otherThumb_pos2$$ && ($pos$$12$$.left = $otherThumb_pos2$$) : $that$$14$$.$_isVertical$() ? $pos$$12$$.top > $otherThumb_pos2$$ && ($pos$$12$$.top = $otherThumb_pos2$$) : $that$$14$$.$_isRTL$() ? $pos$$12$$.left > $otherThumb_pos2$$ && 
          ($pos$$12$$.left = $otherThumb_pos2$$) : $pos$$12$$.left < $otherThumb_pos2$$ && ($pos$$12$$.left = $otherThumb_pos2$$);
        }
      }, stop:function($event$$598$$) {
        this.style.width = "";
        this.style.height = "";
        $that$$14$$.$_mouseStop$($event$$598$$, $thumbParam$$);
      }});
    }, $_makeDraggable$:function() {
      this.options.disabled || (this.$_multipleThumbs$ ? this.$_thumbs$.toArray().forEach(function($current$$25_thumb$$13$$) {
        $current$$25_thumb$$13$$ = $$$$41$$($current$$25_thumb$$13$$);
        this.$_callDraggable$($current$$25_thumb$$13$$);
      }, this) : this.$_callDraggable$(this.$_thumb$));
    }, $_disableDraggable$:function() {
      this.$_multipleThumbs$ ? this.$_thumbs$.toArray().forEach(function($current$$26_thumb$$14$$) {
        $current$$26_thumb$$14$$ = $$$$41$$($current$$26_thumb$$14$$);
        $current$$26_thumb$$14$$.is(".ui-draggable") && $current$$26_thumb$$14$$.draggable("disable");
      }, this) : this.$_thumb$.is(".ui-draggable") && this.$_thumb$.draggable("disable");
    }});
  })();
});

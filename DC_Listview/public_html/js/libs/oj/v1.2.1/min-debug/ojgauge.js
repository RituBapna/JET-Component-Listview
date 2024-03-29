/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtGauge"], function($oj$$16$$, $$$$16$$, $comp$$6$$, $base$$4$$, $dvt$$2$$) {
  $oj$$16$$.$__registerWidget$("oj.dvtBaseGauge", $$$$16$$.oj.dvtBaseComponent, {$_ProcessStyles$:function() {
    this._super();
    this.options._thresholdColors = [this.options._threshold1, this.options._threshold2, this.options._threshold3];
    this.options._threshold1 = null;
    this.options._threshold2 = null;
    this.options._threshold3 = null;
  }, $_AfterCreate$:function() {
    this._super();
    this.option("rawValue", this.options.value, {_context:{$writeback$:!0, $internalSet$:!0}});
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$2$$ = this._super();
    $styleClasses$$2$$["oj-gauge-metric-label"] = {path:"metricLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$2$$["oj-gauge-tick-label"] = {path:"tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$2$$["oj-gauge-threshold1"] = {path:"_threshold1", property:"color"};
    $styleClasses$$2$$["oj-gauge-threshold2"] = {path:"_threshold2", property:"color"};
    $styleClasses$$2$$["oj-gauge-threshold3"] = {path:"_threshold3", property:"color"};
    return $styleClasses$$2$$;
  }, $_GetEventTypes$:function() {
    return["input", "optionChange"];
  }, $_GetTranslationMap$:function() {
    var $translations$$11$$ = this.options.translations, $ret$$32$$ = this._super();
    $ret$$32$$["DvtGaugeBundle.EMPTY_TEXT"] = $translations$$11$$.labelNoData;
    $ret$$32$$["DvtUtilBundle.GAUGE"] = $translations$$11$$.componentName;
    return $ret$$32$$;
  }, $_HandleEvent$:function($event$$247$$) {
    var $newValue$$11_type$$81$$ = $event$$247$$ && $event$$247$$.getType ? $event$$247$$.getType() : null;
    $newValue$$11_type$$81$$ === $dvt$$2$$.DvtValueChangeEvent.TYPE ? this.$_UserOptionChange$("value", $event$$247$$.getNewValue()) : $newValue$$11_type$$81$$ === $dvt$$2$$.DvtValueChangeEvent.TYPE_INPUT ? ($newValue$$11_type$$81$$ = $event$$247$$.getNewValue(), this._trigger("input", null, {value:$newValue$$11_type$$81$$}), this.$_UserOptionChange$("rawValue", $event$$247$$.getNewValue())) : this._super($event$$247$$);
  }, _setOption:function($key$$74$$, $value$$220$$, $flags$$25$$) {
    "rawValue" === $key$$74$$ ? $oj$$16$$.$Logger$.error("'rawValue' is a read-only option and cannot be set") : ("value" === $key$$74$$ && this.option("rawValue", $value$$220$$, {_context:{$writeback$:!0, $internalSet$:!0}}), this._super($key$$74$$, $value$$220$$, $flags$$25$$));
  }, $_ConvertLocatorToSubId$:function($locator$$21$$) {
    var $subId$$26$$ = $locator$$21$$.subId;
    if ("oj-dialgauge-tooltip" == $subId$$26$$ || "oj-ledgauge-tooltip" == $subId$$26$$ || "oj-ratinggauge-tooltip" == $subId$$26$$ || "oj-statusmetergauge-tooltip" == $subId$$26$$) {
      $subId$$26$$ = "tooltip";
    }
    "oj-ratinggauge-item" == $subId$$26$$ && null != $locator$$21$$.index && ($subId$$26$$ = "item[" + $locator$$21$$.index + "]");
    return $subId$$26$$;
  }}, !0);
  $oj$$16$$.$__registerWidget$("oj.ojLedGauge", $$$$16$$.oj.dvtBaseGauge, {widgetEventPrefix:"oj", options:{}, $_CreateDvtComponent$:function($context$$70$$, $callback$$93$$, $callbackObj$$1$$) {
    return $dvt$$2$$.DvtLedGauge.newInstance($context$$70$$, $callback$$93$$, $callbackObj$$1$$);
  }, $_ConvertSubIdToLocator$:function($subId$$27$$) {
    var $locator$$22$$ = {};
    "tooltip" == $subId$$27$$ && ($locator$$22$$.subId = "oj-ledgauge-tooltip");
    return $locator$$22$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$3$$ = this._super();
    $styleClasses$$3$$.push("oj-ledgauge");
    return $styleClasses$$3$$;
  }, $_Render$:function() {
    this.element.attr("title") ? (this.options.shortDesc = this.element.attr("title"), this.element.data(this.element, "title", this.element.attr("title")), this.element.removeAttr("title")) : this.element.data("title") && (this.options.shortDesc = this.element.data("title"));
    this._super();
  }, getMetricLabel:function() {
    return this.$_component$.getAutomation().getMetricLabel();
  }});
  $oj$$16$$.$__registerWidget$("oj.ojRatingGauge", $$$$16$$.oj.dvtBaseGauge, {widgetEventPrefix:"oj", options:{input:null, optionChange:null, rawValue:void 0}, $_CreateDvtComponent$:function($context$$71$$, $callback$$94$$, $callbackObj$$2$$) {
    return $dvt$$2$$.DvtRatingGauge.newInstance($context$$71$$, $callback$$94$$, $callbackObj$$2$$);
  }, $_ConvertSubIdToLocator$:function($subId$$28$$) {
    var $locator$$23$$ = {};
    "tooltip" == $subId$$28$$ ? $locator$$23$$.subId = "oj-ratinggauge-tooltip" : 0 == $subId$$28$$.indexOf("item") && ($locator$$23$$.subId = "oj-ratinggauge-item", $locator$$23$$.index = this.$_GetFirstIndex$($subId$$28$$));
    return $locator$$23$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$4$$ = this._super();
    $styleClasses$$4$$.push("oj-ratinggauge");
    return $styleClasses$$4$$;
  }, $_Render$:function() {
    this.element.attr("title") ? (this.options.shortDesc = this.element.attr("title"), this.element.data(this.element, "title", this.element.attr("title")), this.element.removeAttr("title")) : this.element.data("title") && (this.options.shortDesc = this.element.data("title"));
    this._super();
  }, $_UserOptionChange$:function($key$$75$$, $value$$221$$) {
    this._superApply(arguments);
    "value" == $key$$75$$ && this.$_UserOptionChange$("changed", !0);
  }});
  $oj$$16$$.$__registerWidget$("oj.ojDialGauge", $$$$16$$.oj.dvtBaseGauge, {widgetEventPrefix:"oj", options:{input:null, optionChange:null, rawValue:void 0}, $_CreateDvtComponent$:function($context$$72$$, $callback$$95$$, $callbackObj$$3$$) {
    return $dvt$$2$$.DvtDialGauge.newInstance($context$$72$$, $callback$$95$$, $callbackObj$$3$$);
  }, $_ConvertSubIdToLocator$:function($subId$$29$$) {
    var $locator$$24$$ = {};
    "tooltip" == $subId$$29$$ && ($locator$$24$$.subId = "oj-dialgauge-tooltip");
    return $locator$$24$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$5$$ = this._super();
    $styleClasses$$5$$.push("oj-dialgauge");
    return $styleClasses$$5$$;
  }, $_Render$:function() {
    this.element.attr("title") ? (this.options.shortDesc = this.element.attr("title"), this.element.data(this.element, "title", this.element.attr("title")), this.element.removeAttr("title")) : this.element.data("title") && (this.options.shortDesc = this.element.data("title"));
    this.$_setImages$();
    this._super();
  }, $_setImages$:function() {
    var $backgroundImages$$ = this.options.background, $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-circle-200x200.png"), width:200, height:200}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-circle-400x400.png"), width:400, height:400}], $indicatorImages$$ = this.options.indicator, $indicatorInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-needle-1600x1600.png"), 
    width:374, height:575}];
    "string" === typeof $backgroundImages$$ && ("rectangleAlta" === $backgroundImages$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-rectangle-200x200.png"), width:200, height:154}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-rectangle-400x400.png"), width:400, height:309}] : "domeAlta" === $backgroundImages$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-dome-200x200.png"), 
    width:200, height:154}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/alta-dome-400x400.png"), width:400, height:309}] : "circleAntique" === $backgroundImages$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-circle-200x200.png"), width:200, height:200}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-circle-400x400.png"), width:400, height:400}] : "rectangleAntique" === 
    $backgroundImages$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-rectangle-200x200.png"), width:200, height:168}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-rectangle-400x400.png"), width:400, height:335}] : "domeAntique" === $backgroundImages$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-dome-200x200.png"), width:200, height:176}, 
    {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-dome-400x400.png"), width:400, height:352}] : "circleLight" === $backgroundImages$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-circle-200x200.png"), width:200, height:200}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-circle-400x400.png"), width:400, height:400}] : "rectangleLight" === $backgroundImages$$ ? $backgroundInfo$$ = 
    [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-rectangle-200x200.png"), width:200, height:154}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-rectangle-400x400.png"), width:400, height:307}] : "domeLight" === $backgroundImages$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-dome-200x200.png"), width:200, height:138}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-dome-400x400.png"), 
    width:400, height:276}] : "circleDark" === $backgroundImages$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-circle-200x200.png"), width:200, height:200}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-circle-400x400.png"), width:400, height:400}] : "rectangleDark" === $backgroundImages$$ ? $backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-rectangle-200x200.png"), 
    width:200, height:154}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-rectangle-400x400.png"), width:400, height:307}] : "domeDark" === $backgroundImages$$ && ($backgroundInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-dome-200x200.png"), width:200, height:138}, {src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-dome-400x400.png"), width:400, height:276}]), this.options._backgroundImages = 
    $backgroundInfo$$);
    "string" === typeof $indicatorImages$$ && ("needleAntique" === $indicatorImages$$ ? $indicatorInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/antique-needle-1600x1600.png"), width:81, height:734}] : "needleDark" === $indicatorImages$$ ? $indicatorInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/dark-needle-1600x1600.png"), width:454, height:652}] : "needleLight" === $indicatorImages$$ && ($indicatorInfo$$ = [{src:$oj$$16$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/gauge/light-needle-1600x1600.png"), 
    width:454, height:652}]), this.options._indicatorImages = $indicatorInfo$$);
  }, getMetricLabel:function() {
    return this.$_component$.getAutomation().getMetricLabel();
  }});
  $oj$$16$$.$__registerWidget$("oj.ojStatusMeterGauge", $$$$16$$.oj.dvtBaseGauge, {widgetEventPrefix:"oj", options:{input:null, optionChange:null, rawValue:void 0}, $_CreateDvtComponent$:function($context$$73$$, $callback$$96$$, $callbackObj$$4$$) {
    return $dvt$$2$$.DvtStatusMeterGauge.newInstance($context$$73$$, $callback$$96$$, $callbackObj$$4$$);
  }, $_ConvertSubIdToLocator$:function($subId$$30$$) {
    var $locator$$25$$ = {};
    "tooltip" == $subId$$30$$ && ($locator$$25$$.subId = "oj-statusmetergauge-tooltip");
    return $locator$$25$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$6$$ = this._super();
    $styleClasses$$6$$.push("oj-statusmetergauge");
    return $styleClasses$$6$$;
  }, $_Render$:function() {
    this.element.attr("title") ? (this.options.shortDesc = this.element.attr("title"), this.element.data(this.element, "title", this.element.attr("title")), this.element.removeAttr("title")) : this.element.data("title") && (this.options.shortDesc = this.element.data("title"));
    this._super();
  }, getMetricLabel:function() {
    return this.$_component$.getAutomation().getMetricLabel();
  }});
});

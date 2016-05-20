/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtChart"], function($oj$$51$$, $$$$46$$, $comp$$13$$, $base$$12$$, $dvt$$9$$) {
  $oj$$51$$.$__registerWidget$("oj.ojSparkChart", $$$$46$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{}, $_CreateDvtComponent$:function($context$$156$$, $callback$$127$$, $callbackObj$$11$$) {
    return $dvt$$9$$.SparkChart.newInstance($context$$156$$, $callback$$127$$, $callbackObj$$11$$);
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$19$$ = this._super();
    $styleClasses$$19$$.push("oj-sparkchart");
    return $styleClasses$$19$$;
  }, $_GetTranslationMap$:function() {
    var $translations$$18$$ = this.options.translations, $ret$$47$$ = this._super();
    $ret$$47$$["DvtUtilBundle.CHART"] = $translations$$18$$.componentName;
    return $ret$$47$$;
  }, $_Render$:function() {
    this.element.attr("title") ? (this.options.shortDesc = this.element.attr("title"), this.element.data(this.element, "title", this.element.attr("title")), this.element.removeAttr("title")) : this.element.data("title") && (this.options.shortDesc = this.element.data("title"));
    this._super();
  }, getDataItem:function($itemIndex$$) {
    var $auto$$17$$ = this.$_component$.getAutomation();
    return new $oj$$51$$.$SparkChartDataItem$($auto$$17$$.getDataItem($itemIndex$$));
  }, $_GetComponentDeferredDataPaths$:function() {
    return{root:["items"]};
  }});
  $oj$$51$$.$SparkChartDataItem$ = function $$oj$$51$$$$SparkChartDataItem$$($data$$154$$) {
    this.$_data$ = $data$$154$$;
  };
  $goog$exportPath_$$("SparkChartDataItem", $oj$$51$$.$SparkChartDataItem$, $oj$$51$$);
  $oj$$51$$.$SparkChartDataItem$.prototype.$getBorderColor$ = function $$oj$$51$$$$SparkChartDataItem$$$$getBorderColor$$() {
    return this.$_data$ ? this.$_data$.borderColor : null;
  };
  $oj$$51$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getBorderColor", {$getBorderColor$:$oj$$51$$.$SparkChartDataItem$.prototype.$getBorderColor$});
  $oj$$51$$.$SparkChartDataItem$.prototype.$getColor$ = function $$oj$$51$$$$SparkChartDataItem$$$$getColor$$() {
    return this.$_data$ ? this.$_data$.color : null;
  };
  $oj$$51$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getColor", {$getColor$:$oj$$51$$.$SparkChartDataItem$.prototype.$getColor$});
  $oj$$51$$.$SparkChartDataItem$.prototype.getDate = function $$oj$$51$$$$SparkChartDataItem$$$getDate$() {
    return this.$_data$ ? this.$_data$.date : null;
  };
  $oj$$51$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getDate", {getDate:$oj$$51$$.$SparkChartDataItem$.prototype.getDate});
  $oj$$51$$.$SparkChartDataItem$.prototype.getFloatValue = function $$oj$$51$$$$SparkChartDataItem$$$getFloatValue$() {
    return this.$getLow$();
  };
  $oj$$51$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getFloatValue", {getFloatValue:$oj$$51$$.$SparkChartDataItem$.prototype.getFloatValue});
  $oj$$51$$.$SparkChartDataItem$.prototype.$getLow$ = function $$oj$$51$$$$SparkChartDataItem$$$$getLow$$() {
    return this.$_data$ ? this.$_data$.low : null;
  };
  $oj$$51$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getLow", {$getLow$:$oj$$51$$.$SparkChartDataItem$.prototype.$getLow$});
  $oj$$51$$.$SparkChartDataItem$.prototype.$getHigh$ = function $$oj$$51$$$$SparkChartDataItem$$$$getHigh$$() {
    return this.$_data$ ? this.$_data$.high : null;
  };
  $oj$$51$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getHigh", {$getHigh$:$oj$$51$$.$SparkChartDataItem$.prototype.$getHigh$});
  $oj$$51$$.$SparkChartDataItem$.prototype.$getValue$ = function $$oj$$51$$$$SparkChartDataItem$$$$getValue$$() {
    return this.$_data$ ? this.$_data$.value : null;
  };
  $oj$$51$$.$Object$.$exportPrototypeSymbol$("SparkChartDataItem.prototype.getValue", {$getValue$:$oj$$51$$.$SparkChartDataItem$.prototype.$getValue$});
  $oj$$51$$.$__registerWidget$("oj.ojChart", $$$$46$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{categoryFilter:null, categoryHighlight:null, optionChange:null, selectInput:null, viewportChange:null, viewportChangeInput:null, drill:null}, $_CreateDvtComponent$:function($context$$157$$, $callback$$128$$, $callbackObj$$12$$) {
    return $dvt$$9$$.Chart.newInstance($context$$157$$, $callback$$128$$, $callbackObj$$12$$);
  }, $_ConvertLocatorToSubId$:function($locator$$52$$) {
    var $subId$$57$$ = $locator$$52$$.subId;
    "oj-chart-item" == $subId$$57$$ ? $subId$$57$$ = "dataItem[" + $locator$$52$$.seriesIndex + "][" + $locator$$52$$.itemIndex + "]" : "oj-chart-group" == $subId$$57$$ ? $subId$$57$$ = "group" + this.$_GetStringFromIndexPath$($locator$$52$$.indexPath) : "oj-chart-series" == $subId$$57$$ ? $subId$$57$$ = "series[" + $locator$$52$$.index + "]" : "oj-chart-axis-title" == $subId$$57$$ ? $subId$$57$$ = $locator$$52$$.axis + ":title" : "oj-chart-reference-object" == $subId$$57$$ ? $subId$$57$$ = $locator$$52$$.axis + 
    ":referenceObject[" + $locator$$52$$.index + "]" : "oj-legend-section" == $subId$$57$$ ? $subId$$57$$ = "legend:section" + this.$_GetStringFromIndexPath$($locator$$52$$.indexPath) : "oj-legend-item" == $subId$$57$$ ? ($subId$$57$$ = "legend:section" + this.$_GetStringFromIndexPath$($locator$$52$$.sectionIndexPath), $subId$$57$$ += ":item[" + $locator$$52$$.itemIndex + "]") : "oj-chart-tooltip" == $subId$$57$$ && ($subId$$57$$ = "tooltip");
    return $subId$$57$$;
  }, $_ConvertSubIdToLocator$:function($itemSubstr_subId$$58$$) {
    var $locator$$53$$ = {};
    if (0 == $itemSubstr_subId$$58$$.indexOf("dataItem")) {
      var $indexPath$$3_sectionSubstr$$ = this.$_GetIndexPath$($itemSubstr_subId$$58$$);
      $locator$$53$$.subId = "oj-chart-item";
      $locator$$53$$.seriesIndex = $indexPath$$3_sectionSubstr$$[0];
      $locator$$53$$.itemIndex = $indexPath$$3_sectionSubstr$$[1];
    } else {
      if (0 == $itemSubstr_subId$$58$$.indexOf("group")) {
        $locator$$53$$.subId = "oj-chart-group", $locator$$53$$.indexPath = this.$_GetIndexPath$($itemSubstr_subId$$58$$);
      } else {
        if (0 == $itemSubstr_subId$$58$$.indexOf("series")) {
          $locator$$53$$.subId = "oj-chart-series", $locator$$53$$.index = this.$_GetFirstIndex$($itemSubstr_subId$$58$$);
        } else {
          if (0 < $itemSubstr_subId$$58$$.indexOf("Axis:title")) {
            $locator$$53$$.subId = "oj-chart-axis-title", $locator$$53$$.axis = $itemSubstr_subId$$58$$.substring(0, $itemSubstr_subId$$58$$.indexOf(":"));
          } else {
            if (0 < $itemSubstr_subId$$58$$.indexOf("Axis:referenceObject")) {
              $locator$$53$$.subId = "oj-chart-reference-object", $locator$$53$$.axis = $itemSubstr_subId$$58$$.substring(0, $itemSubstr_subId$$58$$.indexOf(":")), $locator$$53$$.index = this.$_GetFirstIndex$($itemSubstr_subId$$58$$);
            } else {
              if (0 == $itemSubstr_subId$$58$$.indexOf("legend")) {
                if (0 < $itemSubstr_subId$$58$$.indexOf(":item")) {
                  var $itemStartIndex$$ = $itemSubstr_subId$$58$$.indexOf(":item"), $indexPath$$3_sectionSubstr$$ = $itemSubstr_subId$$58$$.substring(0, $itemStartIndex$$);
                  $itemSubstr_subId$$58$$ = $itemSubstr_subId$$58$$.substring($itemStartIndex$$);
                  $locator$$53$$.subId = "oj-legend-item";
                  $locator$$53$$.sectionIndexPath = this.$_GetIndexPath$($indexPath$$3_sectionSubstr$$);
                  $locator$$53$$.itemIndex = this.$_GetFirstIndex$($itemSubstr_subId$$58$$);
                } else {
                  0 == $itemSubstr_subId$$58$$.indexOf("section") && ($locator$$53$$.subId = "oj-legend-section", $locator$$53$$.indexPath = this.$_GetIndexPath$($itemSubstr_subId$$58$$));
                }
              } else {
                "tooltip" == $itemSubstr_subId$$58$$ && ($locator$$53$$.subId = "oj-chart-tooltip");
              }
            }
          }
        }
      }
    }
    return $locator$$53$$;
  }, $_ProcessStyles$:function() {
    this._super();
    this.options.styleDefaults || (this.options.styleDefaults = {});
    if (!this.options.styleDefaults.colors) {
      var $handler$$53$$ = new $oj$$51$$.$ColorAttributeGroupHandler$;
      this.options.styleDefaults.colors = $handler$$53$$.$getValueRamp$();
    }
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$20$$ = this._super();
    $styleClasses$$20$$.push("oj-chart");
    return $styleClasses$$20$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$21$$ = this._super();
    $styleClasses$$21$$["oj-chart-data-label"] = {path:"styleDefaults/dataLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$21$$["oj-chart-stack-label"] = {path:"styleDefaults/stackLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$21$$["oj-chart-footnote"] = {path:"footnote/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$21$$["oj-chart-pie-center-label"] = {path:"pieCenterLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$21$$["oj-chart-slice-label"] = {path:"styleDefaults/sliceLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$21$$["oj-chart-subtitle"] = {path:"subtitle/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$21$$["oj-chart-stock-falling"] = {path:"styleDefaults/stockFallingColor", property:"background-color"};
    $styleClasses$$21$$["oj-chart-stock-range"] = {path:"styleDefaults/stockRangeColor", property:"background-color"};
    $styleClasses$$21$$["oj-chart-stock-rising"] = {path:"styleDefaults/stockRisingColor", property:"background-color"};
    $styleClasses$$21$$["oj-chart-title"] = {path:"title/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$21$$["oj-chart-xaxis-tick-label"] = {path:"xAxis/tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$21$$["oj-chart-xaxis-title"] = {path:"xAxis/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$21$$["oj-chart-yaxis-tick-label"] = {path:"yAxis/tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$21$$["oj-chart-yaxis-title"] = {path:"yAxis/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$21$$["oj-chart-y2axis-tick-label"] = {path:"y2Axis/tickLabel/style", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$21$$["oj-chart-y2axis-title"] = {path:"y2Axis/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$21$$["oj-chart-pan-icon"] = {path:"_resources/panUp", property:"CSS_URL"};
    $styleClasses$$21$$["oj-chart-pan-icon oj-active"] = {path:"_resources/panDown", property:"CSS_URL"};
    $styleClasses$$21$$["oj-chart-select-icon"] = {path:"_resources/selectUp", property:"CSS_URL"};
    $styleClasses$$21$$["oj-chart-select-icon oj-active"] = {path:"_resources/selectDown", property:"CSS_URL"};
    $styleClasses$$21$$["oj-chart-zoom-icon"] = {path:"_resources/zoomUp", property:"CSS_URL"};
    $styleClasses$$21$$["oj-chart-zoom-icon oj-active"] = {path:"_resources/zoomDown", property:"CSS_URL"};
    $styleClasses$$21$$["oj-legend"] = {path:"legend/textStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$21$$["oj-legend-title"] = {path:"legend/titleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$21$$["oj-legend-section-close-icon"] = {path:"legend/_resources/closedEnabled", property:"CSS_URL"};
    $styleClasses$$21$$["oj-legend-section-close-icon oj-hover"] = {path:"legend/_resources/closedOver", property:"CSS_URL"};
    $styleClasses$$21$$["oj-legend-section-close-icon oj-active"] = {path:"legend/_resources/closedDown", property:"CSS_URL"};
    $styleClasses$$21$$["oj-legend-section-open-icon"] = {path:"legend/_resources/openEnabled", property:"CSS_URL"};
    $styleClasses$$21$$["oj-legend-section-open-icon oj-hover"] = {path:"legend/_resources/openOver", property:"CSS_URL"};
    $styleClasses$$21$$["oj-legend-section-open-icon oj-active"] = {path:"legend/_resources/openDown", property:"CSS_URL"};
    return $styleClasses$$21$$;
  }, $_GetEventTypes$:function() {
    return "categoryFilter categoryHighlight drill optionChange selectInput viewportChange viewportChangeInput".split(" ");
  }, $_GetTranslationMap$:function() {
    var $translations$$19$$ = this.options.translations, $ret$$48$$ = this._super();
    $ret$$48$$["DvtChartBundle.DEFAULT_GROUP_NAME"] = $translations$$19$$.labelDefaultGroupName;
    $ret$$48$$["DvtChartBundle.LABEL_SERIES"] = $translations$$19$$.labelSeries;
    $ret$$48$$["DvtChartBundle.LABEL_GROUP"] = $translations$$19$$.labelGroup;
    $ret$$48$$["DvtChartBundle.LABEL_VALUE"] = $translations$$19$$.labelValue;
    $ret$$48$$["DvtChartBundle.LABEL_TARGET_VALUE"] = $translations$$19$$.labelTargetValue;
    $ret$$48$$["DvtChartBundle.LABEL_X"] = $translations$$19$$.labelX;
    $ret$$48$$["DvtChartBundle.LABEL_Y"] = $translations$$19$$.labelY;
    $ret$$48$$["DvtChartBundle.LABEL_Z"] = $translations$$19$$.labelZ;
    $ret$$48$$["DvtChartBundle.LABEL_PERCENTAGE"] = $translations$$19$$.labelPercentage;
    $ret$$48$$["DvtChartBundle.LABEL_LOW"] = $translations$$19$$.labelLow;
    $ret$$48$$["DvtChartBundle.LABEL_HIGH"] = $translations$$19$$.labelHigh;
    $ret$$48$$["DvtChartBundle.LABEL_OPEN"] = $translations$$19$$.labelOpen;
    $ret$$48$$["DvtChartBundle.LABEL_CLOSE"] = $translations$$19$$.labelClose;
    $ret$$48$$["DvtChartBundle.LABEL_VOLUME"] = $translations$$19$$.labelVolume;
    $ret$$48$$["DvtChartBundle.LABEL_MIN"] = $translations$$19$$.labelMin;
    $ret$$48$$["DvtChartBundle.LABEL_MAX"] = $translations$$19$$.labelMax;
    $ret$$48$$["DvtChartBundle.LABEL_OTHER"] = $translations$$19$$.labelOther;
    $ret$$48$$["DvtChartBundle.PAN"] = $translations$$19$$.tooltipPan;
    $ret$$48$$["DvtChartBundle.MARQUEE_SELECT"] = $translations$$19$$.tooltipSelect;
    $ret$$48$$["DvtChartBundle.MARQUEE_ZOOM"] = $translations$$19$$.tooltipZoom;
    $ret$$48$$["DvtUtilBundle.CHART"] = $translations$$19$$.componentName;
    return $ret$$48$$;
  }, $_HandleEvent$:function($event$$624$$) {
    var $selectedItems$$6_type$$96_viewportChangePayload$$1$$ = $event$$624$$.type;
    if ("selection" === $selectedItems$$6_type$$96_viewportChangePayload$$1$$) {
      var $selectPayload_selection$$24$$ = $event$$624$$.selection;
      if ($selectPayload_selection$$24$$) {
        for (var $selectedItems$$6_type$$96_viewportChangePayload$$1$$ = [], $i$$418$$ = 0;$i$$418$$ < $selectPayload_selection$$24$$.length;$i$$418$$++) {
          $selectedItems$$6_type$$96_viewportChangePayload$$1$$.push({id:$selectPayload_selection$$24$$[$i$$418$$].id, series:$selectPayload_selection$$24$$[$i$$418$$].series, group:$selectPayload_selection$$24$$[$i$$418$$].group});
        }
        $selectPayload_selection$$24$$ = {endGroup:$event$$624$$.endGroup, startGroup:$event$$624$$.startGroup, xMax:$event$$624$$.xMax, xMin:$event$$624$$.xMin, yMax:$event$$624$$.yMax, yMin:$event$$624$$.yMin, y2Max:$event$$624$$.y2Max, y2Min:$event$$624$$.y2Min};
        $event$$624$$.complete ? this.$_UserOptionChange$("selection", $selectedItems$$6_type$$96_viewportChangePayload$$1$$, $selectPayload_selection$$24$$) : ($selectPayload_selection$$24$$.items = $selectedItems$$6_type$$96_viewportChangePayload$$1$$, this._trigger("selectInput", null, $selectPayload_selection$$24$$));
      }
    } else {
      "categoryHide" === $selectedItems$$6_type$$96_viewportChangePayload$$1$$ || "categoryShow" === $selectedItems$$6_type$$96_viewportChangePayload$$1$$ ? (this._trigger("categoryFilter", null, {category:$event$$624$$.category, type:"categoryHide" === $selectedItems$$6_type$$96_viewportChangePayload$$1$$ ? "out" : "in"}), this.$_UserOptionChange$("hiddenCategories", $event$$624$$.hiddenCategories)) : "categoryHighlight" === $selectedItems$$6_type$$96_viewportChangePayload$$1$$ ? (this._trigger("categoryHighlight", 
      null, {categories:$event$$624$$.categories, type:$event$$624$$.categories && 0 < $event$$624$$.categories.length ? "on" : "off"}), this.$_UserOptionChange$("highlightedCategories", $event$$624$$.categories)) : "viewportChange" === $selectedItems$$6_type$$96_viewportChangePayload$$1$$ ? ($selectedItems$$6_type$$96_viewportChangePayload$$1$$ = {endGroup:$event$$624$$.endGroup, startGroup:$event$$624$$.startGroup, xMax:$event$$624$$.xMax, xMin:$event$$624$$.xMin, yMax:$event$$624$$.yMax, yMin:$event$$624$$.yMin}, 
      $event$$624$$.complete && (this.options.xAxis || (this.options.xAxis = {}), this.options.yAxis || (this.options.yAxis = {}), this.options.xAxis.viewportStartGroup = null, this.options.xAxis.viewportEndGroup = null, null != $event$$624$$.xMin && null != $event$$624$$.xMax && (this.options.xAxis.viewportMin = $event$$624$$.xMin, this.options.xAxis.viewportMax = $event$$624$$.xMax), null != $event$$624$$.yMin && null != $event$$624$$.yMax && (this.options.yAxis.viewportMin = $event$$624$$.yMin, 
      this.options.yAxis.viewportMax = $event$$624$$.yMax)), this._trigger($event$$624$$.complete ? "viewportChange" : "viewportChangeInput", null, $selectedItems$$6_type$$96_viewportChangePayload$$1$$)) : "drill" === $selectedItems$$6_type$$96_viewportChangePayload$$1$$ ? this._trigger("drill", null, {id:$event$$624$$.id, series:$event$$624$$.series, group:$event$$624$$.group}) : this._super($event$$624$$);
    }
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    var $resources$$6$$ = this.options._resources;
    $resources$$6$$.overviewGrippy = $oj$$51$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/chart/drag_horizontal.png");
    $resources$$6$$.panCursorDown = $oj$$51$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/chart/hand-closed.cur");
    $resources$$6$$.panCursorUp = $oj$$51$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/chart/hand-open.cur");
  }, getTitle:function() {
    return this.$_component$.getAutomation().getTitle();
  }, getGroup:function($groupIndex$$) {
    return this.$_component$.getAutomation().getGroup($groupIndex$$);
  }, getSeries:function($seriesIndex$$) {
    return this.$_component$.getAutomation().getSeries($seriesIndex$$);
  }, getGroupCount:function() {
    return this.$_component$.getAutomation().getGroupCount();
  }, getSeriesCount:function() {
    return this.$_component$.getAutomation().getSeriesCount();
  }, getDataItem:function($seriesIndex$$1$$, $groupIndex$$1$$) {
    var $ret$$49$$ = this.$_component$.getAutomation().getDataItem($seriesIndex$$1$$, $groupIndex$$1$$);
    this.$_AddAutomationGetters$($ret$$49$$);
    return $ret$$49$$;
  }, getLegend:function() {
    var $ret$$50$$ = this.$_component$.getAutomation().getLegend();
    this.$_AddAutomationGetters$($ret$$50$$);
    return $ret$$50$$;
  }, getPlotArea:function() {
    var $ret$$51$$ = this.$_component$.getAutomation().getPlotArea();
    this.$_AddAutomationGetters$($ret$$51$$);
    return $ret$$51$$;
  }, getXAxis:function() {
    var $ret$$52$$ = this.$_component$.getAutomation().getXAxis();
    this.$_AddAutomationGetters$($ret$$52$$);
    return $ret$$52$$;
  }, getYAxis:function() {
    var $ret$$53$$ = this.$_component$.getAutomation().getYAxis();
    this.$_AddAutomationGetters$($ret$$53$$);
    return $ret$$53$$;
  }, getY2Axis:function() {
    var $ret$$54$$ = this.$_component$.getAutomation().getY2Axis();
    this.$_AddAutomationGetters$($ret$$54$$);
    return $ret$$54$$;
  }, getValuesAt:function($x$$56$$, $y$$40$$) {
    return this.$_component$.getValuesAt($x$$56$$, $y$$40$$);
  }, getContextByNode:function($context$$158_node$$110$$) {
    return($context$$158_node$$110$$ = this.getSubIdByNode($context$$158_node$$110$$)) && "oj-chart-tooltip" !== $context$$158_node$$110$$.subId ? $context$$158_node$$110$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{root:["groups", "series"]};
  }, whenReady:function() {
    return this._super();
  }});
});

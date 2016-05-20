/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtThematicMap"], function($oj$$55$$, $$$$50$$, $comp$$14$$, $base$$13$$, $dvt$$10$$) {
  $oj$$55$$.$__registerWidget$("oj.ojThematicMap", $$$$50$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{load:null, optionChange:null}, $_currentLocale$:"", $_loadedBasemaps$:[], $_supportedLocales$:{ar:"ar", cs:"cs", da:"da", de:"de", el:"el", es:"es", fi:"fi", fr:"fr", "fr-ca":"fr_CA", he:"iw", hu:"hu", it:"it", ja:"ja", ko:"ko", nl:"nl", no:"no", pl:"pl", pt:"pt_BR", "pt-pt":"pt", ro:"ro", ru:"ru", sk:"sk", sv:"sv", th:"th", tr:"tr", "zh-hans":"zh_CN", "zh-hant":"zh_TW"}, _ComponentCreate:function() {
    this._super();
    this.$_checkBasemaps$ = [];
    this.$_initiallyRendered$ = !1;
    this.$_dataLayersToUpdate$ = [];
  }, $_CreateDvtComponent$:function($context$$160$$, $callback$$129$$, $callbackObj$$13$$) {
    return $dvt$$10$$.ThematicMap.newInstance($context$$160$$, $callback$$129$$, $callbackObj$$13$$);
  }, $_ConvertLocatorToSubId$:function($locator$$56$$) {
    var $subId$$61$$ = $locator$$56$$.subId;
    "oj-thematicmap-area" == $subId$$61$$ ? $subId$$61$$ = $locator$$56$$.dataLayer + ":area[" + $locator$$56$$.index + "]" : "oj-thematicmap-marker" == $subId$$61$$ ? $subId$$61$$ = $locator$$56$$.dataLayer + ":marker[" + $locator$$56$$.index + "]" : "oj-thematicmap-tooltip" == $subId$$61$$ && ($subId$$61$$ = "tooltip");
    return $subId$$61$$;
  }, $_ConvertSubIdToLocator$:function($subId$$62$$) {
    var $locator$$57$$ = {};
    0 < $subId$$62$$.indexOf(":area") ? ($locator$$57$$.subId = "oj-thematicmap-area", $locator$$57$$.dataLayer = $subId$$62$$.substring(0, $subId$$62$$.indexOf(":")), $locator$$57$$.index = this.$_GetFirstIndex$($subId$$62$$)) : 0 < $subId$$62$$.indexOf(":marker") ? ($locator$$57$$.subId = "oj-thematicmap-marker", $locator$$57$$.dataLayer = $subId$$62$$.substring(0, $subId$$62$$.indexOf(":")), $locator$$57$$.index = this.$_GetFirstIndex$($subId$$62$$)) : "tooltip" == $subId$$62$$ && ($locator$$57$$.subId = 
    "oj-thematicmap-tooltip");
    return $locator$$57$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$22$$ = this._super();
    $styleClasses$$22$$.push("oj-thematicmap");
    return $styleClasses$$22$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$23$$ = this._super();
    $styleClasses$$23$$["oj-dvtbase oj-thematicmap"] = {path:"animationDuration", property:"animation-duration"};
    $styleClasses$$23$$["oj-thematicmap-arealayer"] = [{path:"styleDefaults/areaStyle", property:"CSS_BACKGROUND_PROPERTIES"}, {path:"styleDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"}];
    $styleClasses$$23$$["oj-thematicmap-area"] = {path:"styleDefaults/dataAreaDefaults/borderColor", property:"border-top-color"};
    $styleClasses$$23$$["oj-thematicmap-area oj-hover"] = {path:"styleDefaults/dataAreaDefaults/hoverColor", property:"border-top-color"};
    $styleClasses$$23$$["oj-thematicmap-area oj-selected"] = [{path:"styleDefaults/dataAreaDefaults/selectedInnerColor", property:"border-top-color"}, {path:"styleDefaults/dataAreaDefaults/selectedOuterColor", property:"border-bottom-color"}];
    $styleClasses$$23$$["oj-thematicmap-marker"] = [{path:"styleDefaults/dataMarkerDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"}, {path:"styleDefaults/dataMarkerDefaults/color", property:"background-color"}, {path:"styleDefaults/dataMarkerDefaults/opacity", property:"opacity"}, {path:"styleDefaults/dataMarkerDefaults/borderColor", property:"border-top-color"}];
    return $styleClasses$$23$$;
  }, $_GetEventTypes$:function() {
    return["load", "optionChange"];
  }, _setOptions:function($options$$328$$, $flags$$49$$) {
    var $i$$421_numUpdates$$ = Object.keys($options$$328$$).length, $newAreaLayers$$ = $options$$328$$.areaLayers, $oldAreaLayers$$ = this.options.areaLayers, $newAreaLayer_pointDataLayers$$ = $options$$328$$.pointDataLayers;
    if (1 == $i$$421_numUpdates$$ && $newAreaLayers$$ && $oldAreaLayers$$ && 0 < $oldAreaLayers$$.length) {
      for ($i$$421_numUpdates$$ = 0;$i$$421_numUpdates$$ < $newAreaLayers$$.length;$i$$421_numUpdates$$++) {
        var $newAreaLayer_pointDataLayers$$ = $newAreaLayers$$[$i$$421_numUpdates$$], $currAreaLayer$$ = $oldAreaLayers$$[$i$$421_numUpdates$$], $updateDataLayer$$ = !0, $areaLayerKey$$;
        for ($areaLayerKey$$ in $newAreaLayer_pointDataLayers$$) {
          "areaDataLayer" != $areaLayerKey$$ && $newAreaLayer_pointDataLayers$$[$areaLayerKey$$] != $currAreaLayer$$[$areaLayerKey$$] && ($updateDataLayer$$ = $updateDataLayer$$ && !1);
        }
        $updateDataLayer$$ && !$oj$$55$$.$Object$.$compareValues$($currAreaLayer$$.areaDataLayer, $newAreaLayer_pointDataLayers$$.areaDataLayer) && this.$_dataLayersToUpdate$.push({options:$newAreaLayer_pointDataLayers$$.areaDataLayer, parentLayer:$newAreaLayer_pointDataLayers$$.layer, isADL:!0});
      }
    } else {
      if (1 == $i$$421_numUpdates$$ && $newAreaLayer_pointDataLayers$$ && this.options.pointDataLayers && 0 < this.options.pointDataLayers.length) {
        for ($i$$421_numUpdates$$ = 0;$i$$421_numUpdates$$ < $newAreaLayer_pointDataLayers$$.length;$i$$421_numUpdates$$++) {
          $oj$$55$$.$Object$.$compareValues$(this.options.pointDataLayers[$i$$421_numUpdates$$], $newAreaLayer_pointDataLayers$$[$i$$421_numUpdates$$]) || this.$_dataLayersToUpdate$.push({options:$newAreaLayer_pointDataLayers$$[$i$$421_numUpdates$$], parentLayer:$newAreaLayer_pointDataLayers$$[$i$$421_numUpdates$$].id, isADL:!1});
        }
      }
    }
    this._super($options$$328$$, $flags$$49$$);
  }, $_Render$:function() {
    this.$_loadBasemap$();
    for (var $i$$422$$ = 0;$i$$422$$ < this.$_checkBasemaps$.length;$i$$422$$++) {
      if (!this.$_loadedBasemaps$[this.$_checkBasemaps$[$i$$422$$]]) {
        return;
      }
    }
    this.$_checkBasemaps$ = [];
    this.$_updateDataLayerSelection$();
    var $areaLayers_pointDataLayers$$1$$ = this.options.areaLayers;
    if ($areaLayers_pointDataLayers$$1$$) {
      for ($i$$422$$ = 0;$i$$422$$ < $areaLayers_pointDataLayers$$1$$.length;$i$$422$$++) {
        var $areaDataLayer$$1_pointDataLayer$$ = $areaLayers_pointDataLayers$$1$$[$i$$422$$].areaDataLayer;
        if ($areaDataLayer$$1_pointDataLayer$$) {
          var $dl_renderer$$12$$ = $areaDataLayer$$1_pointDataLayer$$._templateRenderer;
          $dl_renderer$$12$$ && ($areaDataLayer$$1_pointDataLayer$$.renderer = this.$_getTemplateRenderer$($dl_renderer$$12$$, $areaDataLayer$$1_pointDataLayer$$.markers));
        }
      }
    }
    if ($areaLayers_pointDataLayers$$1$$ = this.options.pointDataLayers) {
      for ($i$$422$$ = 0;$i$$422$$ < $areaLayers_pointDataLayers$$1$$.length;$i$$422$$++) {
        ($areaDataLayer$$1_pointDataLayer$$ = $areaLayers_pointDataLayers$$1$$[$i$$422$$]) && ($dl_renderer$$12$$ = $areaDataLayer$$1_pointDataLayer$$._templateRenderer) && ($areaDataLayer$$1_pointDataLayer$$.renderer = this.$_getTemplateRenderer$($dl_renderer$$12$$, $areaDataLayer$$1_pointDataLayer$$.markers));
      }
    }
    this.options._contextHandler = this.$_getContextHandler$();
    if (this.$_initiallyRendered$ && 0 < this.$_dataLayersToUpdate$.length) {
      if (this.$_context$.isReadyToRender()) {
        for ($i$$422$$ = 0;$i$$422$$ < this.$_dataLayersToUpdate$.length;$i$$422$$++) {
          $dl_renderer$$12$$ = this.$_dataLayersToUpdate$[$i$$422$$], this.$_component$.updateLayer($dl_renderer$$12$$.options, $dl_renderer$$12$$.parentLayer, $dl_renderer$$12$$.isADL);
        }
        this.$_dataLayersToUpdate$ = [];
      }
    } else {
      this._super(), this.$_initiallyRendered$ = !0;
    }
    this._trigger("load", null, null);
  }, $_getTemplateRenderer$:function($templateFunction$$) {
    var $thisRef$$ = this;
    return function($context$$161_elem$$106$$) {
      var $dummyDiv$$ = document.createElement("div");
      $dummyDiv$$.style.display = "none";
      $dummyDiv$$.$_dvtcontext$ = $thisRef$$.$_context$;
      $thisRef$$.element.append($dummyDiv$$);
      $templateFunction$$({parentElement:$dummyDiv$$, data:$context$$161_elem$$106$$.data});
      return($context$$161_elem$$106$$ = $dummyDiv$$.children[0]) ? "http://www.w3.org/2000/svg" === $context$$161_elem$$106$$.namespaceURI ? ($dummyDiv$$.removeChild($context$$161_elem$$106$$), $$$$50$$($dummyDiv$$).remove(), $context$$161_elem$$106$$) : $thisRef$$.$_GetDvtComponent$($context$$161_elem$$106$$) : null;
    };
  }, $_getContextHandler$:function() {
    var $thisRef$$1$$ = this;
    return function($parentElement$$8$$, $rootElement$$2$$, $data$$155$$, $state$$13$$, $previousState$$) {
      return{component:$oj$$55$$.Components.$getWidgetConstructor$($thisRef$$1$$.element), parentElement:$parentElement$$8$$, rootElement:$rootElement$$2$$, data:$data$$155$$, state:$state$$13$$, previousState:$previousState$$, id:$data$$155$$.id, label:$data$$155$$.label, color:$data$$155$$.color, location:$data$$155$$.location, x:$data$$155$$.x, y:$data$$155$$.y};
    };
  }, renderDefaultHover:function($context$$163$$) {
    $context$$163$$.previousState && $context$$163$$.state.hovered == $context$$163$$.previousState.hovered || this.$_component$.processDefaultHoverEffect($context$$163$$.id, $context$$163$$.state.hovered);
  }, renderDefaultSelection:function($context$$164$$) {
    $context$$164$$.previousState && $context$$164$$.state.selected == $context$$164$$.previousState.selected || this.$_component$.processDefaultSelectionEffect($context$$164$$.id, $context$$164$$.state.selected);
  }, renderDefaultFocus:function($context$$165$$) {
    $context$$165$$.previousState && $context$$165$$.state.focused == $context$$165$$.previousState.focused || this.$_component$.processDefaultFocusEffect($context$$165$$.id, $context$$165$$.state.focused);
  }, $_loadBasemap$:function() {
    var $basemap$$ = this.options.basemap;
    if ($basemap$$) {
      var $locale$$22$$ = $oj$$55$$.$Config$.$getLocale$();
      $locale$$22$$ !== this.$_currentLocale$ && (this.$_currentLocale$ = $locale$$22$$, this.$_loadedBasemaps$ = []);
      var $basemap$$ = $basemap$$.charAt(0).toUpperCase() + $basemap$$.slice(1), $areaLayers$$1_pointDataLayers$$2$$ = this.options.areaLayers;
      if ($areaLayers$$1_pointDataLayers$$2$$) {
        for (var $i$$423$$ = 0;$i$$423$$ < $areaLayers$$1_pointDataLayers$$2$$.length;$i$$423$$++) {
          var $layer$$21$$ = $areaLayers$$1_pointDataLayers$$2$$[$i$$423$$].layer;
          $layer$$21$$ && ($layer$$21$$ = $layer$$21$$.charAt(0).toUpperCase() + $layer$$21$$.slice(1), this.$_loadBasemapHelper$($basemap$$, $layer$$21$$, $locale$$22$$));
        }
      }
      ($areaLayers$$1_pointDataLayers$$2$$ = this.options.pointDataLayers) && 0 < $areaLayers$$1_pointDataLayers$$2$$.length && this.$_loadBasemapHelper$($basemap$$, "Cities", $locale$$22$$);
    }
  }, $_loadResourceByUrl$:function($url$$35$$) {
    if (!this.$_loadedBasemaps$[$url$$35$$]) {
      var $resolvedUrl$$ = $oj$$55$$.$Config$.$getResourceUrl$($url$$35$$), $thisRef$$2$$ = this, $loadedBundles$$ = this.$_loadedBasemaps$;
      $$$$50$$.getScript($resolvedUrl$$, function() {
        $loadedBundles$$[$url$$35$$] = !0;
        $thisRef$$2$$.$_Render$();
      });
    }
  }, $_loadBasemapHelper$:function($basemap$$1_bundleName_bundleUrl$$, $i$$424_layer$$22$$, $locale$$23_localeList$$) {
    var $relativeUrl_splitLocale$$ = "resources/internal-deps/dvt/thematicMap/basemaps/DvtBaseMap" + $basemap$$1_bundleName_bundleUrl$$ + $i$$424_layer$$22$$ + ".js";
    -1 == this.$_checkBasemaps$.indexOf($relativeUrl_splitLocale$$) && (this.$_checkBasemaps$.push($relativeUrl_splitLocale$$), this.$_loadResourceByUrl$($relativeUrl_splitLocale$$));
    if (-1 === $locale$$23_localeList$$.indexOf("en")) {
      for ($relativeUrl_splitLocale$$ = $locale$$23_localeList$$.toLowerCase().split("-"), $locale$$23_localeList$$ = [$relativeUrl_splitLocale$$[0]], 1 < $relativeUrl_splitLocale$$.length && $locale$$23_localeList$$.unshift($relativeUrl_splitLocale$$[0] + "-" + $relativeUrl_splitLocale$$[1]), 2 < $relativeUrl_splitLocale$$.length && $locale$$23_localeList$$.unshift($relativeUrl_splitLocale$$[0] + "-" + $relativeUrl_splitLocale$$[2], $relativeUrl_splitLocale$$[0] + "-" + $relativeUrl_splitLocale$$[1] + 
      "-" + $relativeUrl_splitLocale$$[2]), $basemap$$1_bundleName_bundleUrl$$ = "resources/internal-deps/dvt/thematicMap/resourceBundles/" + $basemap$$1_bundleName_bundleUrl$$ + $i$$424_layer$$22$$ + "Bundle", $i$$424_layer$$22$$ = 0;$i$$424_layer$$22$$ < $locale$$23_localeList$$.length;$i$$424_layer$$22$$++) {
        if (this.$_supportedLocales$[$locale$$23_localeList$$[$i$$424_layer$$22$$]]) {
          $basemap$$1_bundleName_bundleUrl$$ = $basemap$$1_bundleName_bundleUrl$$ + "_" + this.$_supportedLocales$[$locale$$23_localeList$$[$i$$424_layer$$22$$]] + ".js";
          -1 == this.$_checkBasemaps$.indexOf($basemap$$1_bundleName_bundleUrl$$) && (this.$_checkBasemaps$.push($basemap$$1_bundleName_bundleUrl$$), this.$_loadResourceByUrl$($basemap$$1_bundleName_bundleUrl$$));
          break;
        }
      }
    }
  }, $_HandleEvent$:function($event$$638$$) {
    if ("selection" === $event$$638$$.type) {
      var $selection$$25$$ = {}, $id$$56$$ = $event$$638$$.clientId;
      $selection$$25$$[$id$$56$$] = $event$$638$$.selection;
      if (this.options.selection) {
        for (var $dataLayerId$$ in this.options.selection) {
          $id$$56$$ !== $dataLayerId$$ && ($selection$$25$$[$dataLayerId$$] = this.options.selection[$dataLayerId$$]);
        }
      }
      this.$_UserOptionChange$("selection", $selection$$25$$);
    } else {
      this._super($event$$638$$);
    }
  }, $_GetTranslationMap$:function() {
    var $translations$$20$$ = this.options.translations, $ret$$56$$ = this._super();
    $ret$$56$$["DvtUtilBundle.THEMATIC_MAP"] = $translations$$20$$.componentName;
    return $ret$$56$$;
  }, $_updateDataLayerSelection$:function() {
    var $selection$$26$$ = this.options.selection;
    if ($selection$$26$$) {
      var $als_pdls$$ = this.options.pointDataLayers;
      if ($als_pdls$$) {
        for (var $i$$425$$ = 0;$i$$425$$ < $als_pdls$$.length;$i$$425$$++) {
          $selection$$26$$[$als_pdls$$[$i$$425$$].id] && ($als_pdls$$[$i$$425$$].selection = $selection$$26$$[$als_pdls$$[$i$$425$$].id]);
        }
      }
      if ($als_pdls$$ = this.options.areaLayers) {
        for ($i$$425$$ = 0;$i$$425$$ < $als_pdls$$.length;$i$$425$$++) {
          var $adl$$ = $als_pdls$$[$i$$425$$].areaDataLayer;
          $adl$$ && $selection$$26$$[$adl$$.id] && ($adl$$.selection = $selection$$26$$[$adl$$.id]);
        }
      }
    }
  }, getArea:function($dataLayerId$$1$$, $index$$282$$) {
    var $ret$$57$$ = this.$_component$.getAutomation().getData($dataLayerId$$1$$, "area", $index$$282$$);
    this.$_AddAutomationGetters$($ret$$57$$);
    return $ret$$57$$;
  }, getMarker:function($dataLayerId$$2$$, $index$$283$$) {
    var $ret$$58$$ = this.$_component$.getAutomation().getData($dataLayerId$$2$$, "marker", $index$$283$$);
    this.$_AddAutomationGetters$($ret$$58$$);
    return $ret$$58$$;
  }, getContextByNode:function($context$$166_node$$113$$) {
    return($context$$166_node$$113$$ = this.getSubIdByNode($context$$166_node$$113$$)) && "oj-thematicmap-tooltip" !== $context$$166_node$$113$$.subId ? $context$$166_node$$113$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{areaLayers:["areaDataLayer/areas", "areaDataLayer/markers"], pointDataLayers:["markers"]};
  }, $_GetDataContext$:function($layer$$23_options$$329$$) {
    var $basemap$$2$$ = this.options.basemap;
    $layer$$23_options$$329$$ = $layer$$23_options$$329$$.layer ? $layer$$23_options$$329$$.layer : "cities";
    return{basemap:$basemap$$2$$, layer:$layer$$23_options$$329$$, ids:$dvt$$10$$.DvtBaseMapManager.getLayerIds($basemap$$2$$, $layer$$23_options$$329$$)};
  }});
});

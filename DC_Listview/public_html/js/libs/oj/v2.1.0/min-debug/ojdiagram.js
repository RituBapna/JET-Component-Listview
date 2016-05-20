/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtDiagram"], function($oj$$81$$, $$$$75$$, $comp$$17$$, $base$$15$$, $dvt$$12$$) {
  $oj$$81$$.$__registerWidget$("oj.ojDiagram", $$$$75$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null}, $_Render$:function($isResize$$1$$) {
    this.options._logger = $oj$$81$$.$Logger$;
    this.options._templateFunction && (this.options.renderer = this.$_getTemplateRenderer$(this.options._templateFunction));
    this.options.renderer && (this.options._contextHandler = this.$_getContextHandler$());
    return this._super($isResize$$1$$);
  }, $_getTemplateRenderer$:function($templateFunction$$1$$) {
    var $thisRef$$3$$ = this;
    return function($context$$174_elem$$202$$) {
      var $dummyDiv$$1$$ = document.createElement("div");
      $dummyDiv$$1$$.style.display = "none";
      $dummyDiv$$1$$.$_dvtcontext$ = $thisRef$$3$$.$_context$;
      $thisRef$$3$$.element.append($dummyDiv$$1$$);
      $templateFunction$$1$$({parentElement:$dummyDiv$$1$$, data:$context$$174_elem$$202$$.data});
      return($context$$174_elem$$202$$ = $dummyDiv$$1$$.children[0]) && "http://www.w3.org/2000/svg" === $context$$174_elem$$202$$.namespaceURI ? ($dummyDiv$$1$$.removeChild($context$$174_elem$$202$$), $$$$75$$($dummyDiv$$1$$).remove(), $context$$174_elem$$202$$) : $context$$174_elem$$202$$ ? $thisRef$$3$$.$_GetDvtComponent$($context$$174_elem$$202$$) : null;
    };
  }, $_getContextHandler$:function() {
    var $thisRef$$4$$ = this;
    return function($parentElement$$9$$, $rootElement$$21$$, $data$$185$$, $state$$15$$, $previousState$$1$$) {
      return{component:$oj$$81$$.Components.$getWidgetConstructor$($thisRef$$4$$.element), parentElement:$parentElement$$9$$, rootElement:$rootElement$$21$$, data:$data$$185$$, state:$state$$15$$, previousState:$previousState$$1$$, id:$data$$185$$.id, type:"node", label:$data$$185$$.label};
    };
  }, renderDefaultHover:function($context$$176$$) {
    $context$$176$$.previousState && $context$$176$$.state.hovered == $context$$176$$.previousState.hovered || this.$_GetDvtComponent$(this.element).processDefaultHoverEffect($context$$176$$.id, $context$$176$$.state.hovered);
  }, renderDefaultSelection:function($context$$177$$) {
    $context$$177$$.previousState && $context$$177$$.state.selected == $context$$177$$.previousState.selected || this.$_GetDvtComponent$(this.element).processDefaultSelectionEffect($context$$177$$.id, $context$$177$$.state.selected);
  }, renderDefaultFocus:function($context$$178$$) {
    $context$$178$$.previousState && $context$$178$$.state.focused == $context$$178$$.previousState.focused || this.$_GetDvtComponent$(this.element).processDefaultFocusEffect($context$$178$$.id, $context$$178$$.state.focused);
  }, $_CreateDvtComponent$:function($context$$179$$, $callback$$145$$, $callbackObj$$15$$) {
    return $dvt$$12$$.Diagram.newInstance($context$$179$$, $callback$$145$$, $callbackObj$$15$$);
  }, $_ConvertLocatorToSubId$:function($locator$$67$$) {
    var $subId$$71$$ = $locator$$67$$.subId;
    "oj-diagram-link" == $subId$$71$$ ? $subId$$71$$ = "link[" + $locator$$67$$.index + "]" : "oj-diagram-node" == $subId$$71$$ ? $subId$$71$$ = "node[" + $locator$$67$$.index + "]" : "oj-diagram-tooltip" == $subId$$71$$ && ($subId$$71$$ = "tooltip");
    return $subId$$71$$;
  }, $_ConvertSubIdToLocator$:function($subId$$72$$) {
    var $locator$$68$$ = {};
    0 == $subId$$72$$.indexOf("link") ? ($locator$$68$$.subId = "oj-diagram-link", $locator$$68$$.index = this.$_GetFirstIndex$($subId$$72$$)) : 0 == $subId$$72$$.indexOf("node") ? ($locator$$68$$.subId = "oj-diagram-node", $locator$$68$$.index = this.$_GetFirstIndex$($subId$$72$$)) : "tooltip" == $subId$$72$$ && ($locator$$68$$.subId = "oj-diagram-tooltip");
    return $locator$$68$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$26$$ = this._super();
    $styleClasses$$26$$.push("oj-diagram");
    return $styleClasses$$26$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$27$$ = this._super();
    $styleClasses$$27$$["oj-diagram-node-label"] = {path:"styleDefaults/nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$27$$["oj-diagram-node oj-selected"] = {path:"styleDefaults/nodeDefaults/selectionColor", property:"border-color"};
    $styleClasses$$27$$["oj-diagram-node oj-hover"] = [{path:"styleDefaults/nodeDefaults/hoverOuterColor", property:"border-top-color"}, {path:"styleDefaults/nodeDefaults/hoverInnerColor", property:"border-bottom-color"}];
    $styleClasses$$27$$["oj-diagram-link"] = {path:"styleDefaults/linkDefaults/color", property:"color"};
    $styleClasses$$27$$["oj-diagram-link-label"] = {path:"styleDefaults/linkDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$27$$["oj-diagram-link oj-selected"] = {path:"styleDefaults/linkDefaults/selectionColor", property:"border-color"};
    $styleClasses$$27$$["oj-diagram-link oj-hover"] = [{path:"styleDefaults/linkDefaults/hoverOuterColor", property:"border-top-color"}, {path:"styleDefaults/linkDefaults/hoverInnerColor", property:"border-bottom-color"}];
    return $styleClasses$$27$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_GetTranslationMap$:function() {
    var $translations$$22$$ = this.options.translations, $ret$$82$$ = this._super();
    $ret$$82$$["DvtUtilBundle.DIAGRAM"] = $translations$$22$$.componentName;
    return $ret$$82$$;
  }, getNodeCount:function() {
    return this.$_component$.getAutomation().getNodeCount();
  }, getNode:function($nodeIndex$$2$$) {
    return this.$_component$.getAutomation().getNode($nodeIndex$$2$$);
  }, getLinkCount:function() {
    return this.$_component$.getAutomation().getLinkCount();
  }, getLink:function($linkIndex$$) {
    return this.$_component$.getAutomation().getLink($linkIndex$$);
  }, getContextByNode:function($context$$180_node$$177$$) {
    return($context$$180_node$$177$$ = this.getSubIdByNode($context$$180_node$$177$$)) && "oj-diagram-tooltip" !== $context$$180_node$$177$$.subId ? $context$$180_node$$177$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{root:["nodes", "links"]};
  }});
});

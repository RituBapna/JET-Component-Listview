/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdvt-base", "ojs/internal-deps/dvt/DvtNBox"], function($oj$$36$$, $$$$33$$, $comp$$9$$, $base$$8$$, $dvt$$5$$) {
  $oj$$36$$.$__registerWidget$("oj.ojNBox", $$$$33$$.oj.dvtBaseComponent, {widgetEventPrefix:"oj", options:{optionChange:null}, $_CreateDvtComponent$:function($context$$121$$, $callback$$111$$, $callbackObj$$7$$) {
    return $dvt$$5$$.DvtNBox.newInstance($context$$121$$, $callback$$111$$, $callbackObj$$7$$);
  }, $_ConvertLocatorToSubId$:function($locator$$38$$) {
    var $subId$$42$$ = $locator$$38$$.subId;
    "oj-nbox-cell" == $subId$$42$$ ? $subId$$42$$ = "cell[" + $locator$$38$$.row + "," + $locator$$38$$.column + "]" : "oj-nbox-dialog" == $subId$$42$$ ? $subId$$42$$ = "dialog" : "oj-nbox-dialog-close-button" == $subId$$42$$ ? $subId$$42$$ = "dialog#closeButton" : "oj-nbox-dialog-node" == $subId$$42$$ ? $subId$$42$$ = "dialog#node[" + $locator$$38$$.index + "]" : "oj-nbox-group-node" == $subId$$42$$ ? ($subId$$42$$ = $locator$$38$$.row && $locator$$38$$.column ? "cell[" + $locator$$38$$.row + "," + 
    $locator$$38$$.column + "]#groupNode[" : "groupNode[", $subId$$42$$ += $locator$$38$$.groupCategory + "]") : "oj-nbox-node" == $subId$$42$$ ? $subId$$42$$ = "cell[" + $locator$$38$$.row + "," + $locator$$38$$.column + "]#node[" + $locator$$38$$.index + "]" : "oj-nbox-overflow" == $subId$$42$$ ? $subId$$42$$ = "cell[" + $locator$$38$$.row + "," + $locator$$38$$.column + "]#overflow" : "oj-nbox-tooltip" == $subId$$42$$ && ($subId$$42$$ = "tooltip");
    return $subId$$42$$;
  }, $_ConvertSubIdToLocator$:function($subId$$43$$) {
    var $locator$$39$$ = {};
    if (0 == $subId$$43$$.indexOf("cell")) {
      var $cellIds_poundIndex$$ = this.$_GetFirstBracketedString$($subId$$43$$), $commaIndex$$ = $cellIds_poundIndex$$.indexOf(",");
      $locator$$39$$.row = $cellIds_poundIndex$$.substring(0, $commaIndex$$);
      $locator$$39$$.column = $cellIds_poundIndex$$.substring($commaIndex$$ + 1);
      $cellIds_poundIndex$$ = $subId$$43$$.indexOf("#");
      0 < $subId$$43$$.indexOf("#groupNode") ? ($locator$$39$$.subId = "oj-nbox-group-node", $locator$$39$$.groupCategory = this.$_GetFirstBracketedString$($subId$$43$$.substring($cellIds_poundIndex$$))) : 0 < $subId$$43$$.indexOf("#node") ? ($locator$$39$$.subId = "oj-nbox-node", $locator$$39$$.index = this.$_GetFirstIndex$($subId$$43$$.substring($cellIds_poundIndex$$))) : 0 < $subId$$43$$.indexOf("#overflow") ? $locator$$39$$.subId = "oj-nbox-overflow" : $locator$$39$$.subId = "oj-nbox-cell";
    } else {
      0 == $subId$$43$$.indexOf("dialog") ? 0 < $subId$$43$$.indexOf("#closeButton") ? $locator$$39$$.subId = "oj-nbox-dialog-close-button" : 0 < $subId$$43$$.indexOf("#node") ? ($locator$$39$$.subId = "oj-nbox-dialog-node", $locator$$39$$.index = this.$_GetFirstIndex$($subId$$43$$)) : $locator$$39$$.subId = "oj-nbox-dialog" : 0 == $subId$$43$$.indexOf("groupNode") ? ($locator$$39$$.subId = "oj-nbox-group-node", $locator$$39$$.groupCategory = this.$_GetFirstBracketedString$($subId$$43$$)) : "tooltip" == 
      $subId$$43$$ && ($locator$$39$$.subId = "oj-nbox-tooltip");
    }
    return $locator$$39$$;
  }, $_GetComponentStyleClasses$:function() {
    var $styleClasses$$11$$ = this._super();
    $styleClasses$$11$$.push("oj-nbox");
    return $styleClasses$$11$$;
  }, $_GetChildStyleClasses$:function() {
    var $styleClasses$$12$$ = this._super();
    $styleClasses$$12$$["oj-nbox-columns-title"] = {path:"styleDefaults/columnsTitleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-nbox-rows-title"] = {path:"styleDefaults/rowsTitleStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-nbox-column-label"] = {path:"styleDefaults/columnLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-nbox-row-label"] = {path:"styleDefaults/rowLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-nbox-cell"] = {path:"styleDefaults/cellDefaults/style", property:"CSS_BACKGROUND_PROPERTIES"};
    $styleClasses$$12$$["oj-nbox-cell oj-minimized"] = {path:"styleDefaults/cellDefaults/minimizedStyle", property:"CSS_BACKGROUND_PROPERTIES"};
    $styleClasses$$12$$["oj-nbox-cell-label"] = {path:"styleDefaults/cellDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-nbox-cell-countlabel"] = {path:"styleDefaults/cellDefaults/bodyCountLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-nbox-cell-countlabel oj-nbox-cell-header"] = {path:"styleDefaults/cellDefaults/countLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-nbox-node"] = {path:"styleDefaults/nodeDefaults/color", property:"background-color"};
    $styleClasses$$12$$["oj-nbox-node oj-hover"] = {path:"styleDefaults/nodeDefaults/hoverColor", property:"border-color"};
    $styleClasses$$12$$["oj-nbox-node oj-selected"] = {path:"styleDefaults/nodeDefaults/selectionColor", property:"border-color"};
    $styleClasses$$12$$["oj-nbox-node-label"] = {path:"styleDefaults/nodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-nbox-node-secondarylabel"] = {path:"styleDefaults/nodeDefaults/secondaryLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-nbox-node-categorylabel"] = {path:"styleDefaults/__categoryNodeDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-nbox-dialog"] = [{path:"styleDefaults/__drawerDefaults/background", property:"background-color"}, {path:"styleDefaults/__drawerDefaults/borderColor", property:"border-color"}];
    $styleClasses$$12$$["oj-nbox-dialog-label"] = {path:"styleDefaults/__drawerDefaults/labelStyle", property:"CSS_TEXT_PROPERTIES"};
    $styleClasses$$12$$["oj-nbox-dialog-countlabel"] = {path:"styleDefaults/__drawerDefaults/countLabelStyle", property:"CSS_TEXT_PROPERTIES"};
    return $styleClasses$$12$$;
  }, $_GetEventTypes$:function() {
    return["optionChange"];
  }, $_GetTranslationMap$:function() {
    var $translations$$14$$ = this.options.translations, $ret$$38$$ = this._super();
    $ret$$38$$["DvtUtilBundle.NBOX"] = $translations$$14$$.componentName;
    $ret$$38$$["DvtNBoxBundle.HIGHLIGHTED_COUNT"] = $translations$$14$$.highlightedCount;
    $ret$$38$$["DvtNBoxBundle.OTHER"] = $translations$$14$$.labelOther;
    $ret$$38$$["DvtNBoxBundle.GROUP_NODE"] = $translations$$14$$.labelGroup;
    $ret$$38$$["DvtNBoxBundle.SIZE"] = $translations$$14$$.labelSize;
    $ret$$38$$["DvtNBoxBundle.ADDITIONAL_DATA"] = $translations$$14$$.labelAdditionalData;
    return $ret$$38$$;
  }, $_HandleEvent$:function($event$$422$$) {
    var $keys$$35_type$$90$$ = $event$$422$$ && $event$$422$$.getType ? $event$$422$$.getType() : null;
    if ($keys$$35_type$$90$$ === $dvt$$5$$.DvtSelectionEvent.TYPE) {
      this.$_UserOptionChange$("selection", $event$$422$$.getSelection());
    } else {
      if ($keys$$35_type$$90$$ === $dvt$$5$$.DvtSetPropertyEvent.TYPE) {
        for (var $keys$$35_type$$90$$ = $event$$422$$.getParamKeys(), $i$$341$$ = 0;$i$$341$$ < $keys$$35_type$$90$$.length;$i$$341$$++) {
          var $key$$143$$ = $keys$$35_type$$90$$[$i$$341$$], $value$$258$$ = $event$$422$$.getParamValue($key$$143$$);
          "_drawer" == $key$$143$$ ? ($value$$258$$ && ($value$$258$$ = {id:$value$$258$$}), this.options[$key$$143$$] = $value$$258$$) : "maximizedRow" != $key$$143$$ && "maximizedColumn" != $key$$143$$ || this.$_UserOptionChange$($key$$143$$, $value$$258$$);
        }
      } else {
        this._super($event$$422$$);
      }
    }
  }, $_LoadResources$:function() {
    null == this.options._resources && (this.options._resources = {});
    var $resources$$2$$ = this.options._resources;
    $resources$$2$$.overflow_dwn = {src:$oj$$36$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/overflow_dwn.png"), width:34, height:9};
    $resources$$2$$.overflow_ovr = {src:$oj$$36$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/overflow_ovr.png"), width:34, height:9};
    $resources$$2$$.overflow_ena = {src:$oj$$36$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/overflow_ena.png"), width:34, height:9};
    $resources$$2$$.overflow_dis = {src:$oj$$36$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/overflow_dis.png"), width:34, height:9};
    $resources$$2$$.close_dwn = {src:$oj$$36$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/close_dwn.png"), width:16, height:16};
    $resources$$2$$.close_ovr = {src:$oj$$36$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/close_ovr.png"), width:16, height:16};
    $resources$$2$$.close_ena = {src:$oj$$36$$.$Config$.$getResourceUrl$("resources/internal-deps/dvt/nbox/close_ena.png"), width:16, height:16};
  }, getNodeBySubId:function($locator$$40$$) {
    return this._super($locator$$40$$);
  }, getSubIdByNode:function($node$$87$$) {
    return this._super($node$$87$$);
  }, getRowsTitle:function() {
    var $auto$$3$$ = this.$_component$.getAutomation();
    return $auto$$3$$ ? $auto$$3$$.getData("rowsTitle") : null;
  }, getRowCount:function() {
    var $auto$$4$$ = this.$_component$.getAutomation();
    return $auto$$4$$ ? $auto$$4$$.getData("rowCount") : null;
  }, getRow:function($rowValue$$) {
    var $auto$$5$$ = this.$_component$.getAutomation();
    return $auto$$5$$ ? $auto$$5$$.getData("row", $rowValue$$) : null;
  }, getColumnsTitle:function() {
    var $auto$$6$$ = this.$_component$.getAutomation();
    return $auto$$6$$ ? $auto$$6$$.getData("columnsTitle") : null;
  }, getColumnCount:function() {
    var $auto$$7$$ = this.$_component$.getAutomation();
    return $auto$$7$$ ? $auto$$7$$.getData("columnCount") : -1;
  }, getColumn:function($columnValue$$) {
    var $auto$$8$$ = this.$_component$.getAutomation();
    return $auto$$8$$ ? $auto$$8$$.getData("column", $columnValue$$) : null;
  }, getCell:function($rowValue$$1$$, $columnValue$$1$$) {
    var $auto$$9$$ = this.$_component$.getAutomation(), $ret$$39$$ = $auto$$9$$ ? $auto$$9$$.getCell($rowValue$$1$$, $columnValue$$1$$) : null;
    $ret$$39$$ && ($ret$$39$$.getGroupNode = function $$ret$$39$$$getGroupNode$($groupMap$$) {
      return $auto$$9$$.getCellGroupNode($ret$$39$$, $groupMap$$);
    }, $ret$$39$$.getNode = function $$ret$$39$$$getNode$($nodeIndex$$) {
      return $auto$$9$$.getCellNode($ret$$39$$, $nodeIndex$$);
    });
    return $ret$$39$$;
  }, getGroupBehavior:function() {
    var $auto$$10$$ = this.$_component$.getAutomation();
    return $auto$$10$$ ? $auto$$10$$.getData("groupBehavior") : null;
  }, getGroupNode:function($groupCategory$$) {
    return this.$_component$.getAutomation().getGroupNode($groupCategory$$);
  }, getDialog:function() {
    var $auto$$12$$ = this.$_component$.getAutomation(), $ret$$40$$ = $auto$$12$$ ? $auto$$12$$.getDialog() : null;
    $ret$$40$$ && ($ret$$40$$.getNode = function $$ret$$40$$$getNode$($nodeIndex$$1$$) {
      return $auto$$12$$.getDialogNode($nodeIndex$$1$$);
    });
    return $ret$$40$$;
  }, getContextByNode:function($context$$122_node$$88$$) {
    return($context$$122_node$$88$$ = this.getSubIdByNode($context$$122_node$$88$$)) && "oj-nbox-tooltip" !== $context$$122_node$$88$$.subId && "oj-nbox-dialog-close-button" !== $context$$122_node$$88$$.subId && "oj-nbox-overflow" !== $context$$122_node$$88$$.subId ? $context$$122_node$$88$$ : null;
  }, $_GetComponentDeferredDataPaths$:function() {
    return{root:["cells", "rows", "columns", "nodes"]};
  }});
});

define([], function() {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  
var D={};var $JSCompiler_prototypeAlias$$, $goog$exportPath_$$ = function $$goog$exportPath_$$$($name$$56$$, $opt_object$$) {
  var $parts$$ = $name$$56$$.split("."), $cur$$ = eval("D");
  $parts$$[0] in $cur$$ || !$cur$$.execScript || $cur$$.execScript("var " + $parts$$[0]);
  for (var $part$$;$parts$$.length && ($part$$ = $parts$$.shift());) {
    $parts$$.length || void 0 === $opt_object$$ ? $cur$$ = $cur$$[$part$$] ? $cur$$[$part$$] : $cur$$[$part$$] = {} : $cur$$[$part$$] = $opt_object$$;
  }
};
Math.floor(2147483648 * Math.random()).toString(36);

/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
var $DvtDataGridUtils$$ = function $$DvtDataGridUtils$$$($dataGrid_userAgent$$) {
  this.$scrollbarSize$ = -1;
  this.$dataGrid$ = $dataGrid_userAgent$$;
  $dataGrid_userAgent$$ = window.navigator && window.navigator.userAgent ? window.navigator.userAgent.toLowerCase() : null;
  this.$os$ = $JSCompiler_StaticMethods__determineOS$$($dataGrid_userAgent$$);
  this.platform = $JSCompiler_StaticMethods__determinePlatform$$($dataGrid_userAgent$$);
}, $JSCompiler_StaticMethods_getScrollbarSize$$ = function $$JSCompiler_StaticMethods_getScrollbarSize$$$($JSCompiler_StaticMethods_getScrollbarSize$self$$) {
  if (-1 == $JSCompiler_StaticMethods_getScrollbarSize$self$$.$scrollbarSize$) {
    var $scrollDiv$$inline_1115$$ = window.document.createElement("div");
    $scrollDiv$$inline_1115$$.style.cssText = "width:100px;height:100px;overflow:scroll;position:absolute;top:-9999px;";
    window.document.body.appendChild($scrollDiv$$inline_1115$$);
    $JSCompiler_StaticMethods_getScrollbarSize$self$$.$scrollbarSize$ = $scrollDiv$$inline_1115$$.offsetWidth - $scrollDiv$$inline_1115$$.clientWidth;
    window.document.body.removeChild($scrollDiv$$inline_1115$$);
  }
  return $JSCompiler_StaticMethods_getScrollbarSize$self$$.$scrollbarSize$;
}, $JSCompiler_StaticMethods_isTouchDevice$$ = function $$JSCompiler_StaticMethods_isTouchDevice$$$($JSCompiler_StaticMethods_isTouchDevice$self$$) {
  if (void 0 == $JSCompiler_StaticMethods_isTouchDevice$self$$.$isTouch$) {
    var $agentName$$ = window.navigator.userAgent.toLowerCase();
    $JSCompiler_StaticMethods_isTouchDevice$self$$.$isTouch$ = -1 != $agentName$$.indexOf("mobile") || -1 != $agentName$$.indexOf("android") ? !0 : !1;
  }
  return $JSCompiler_StaticMethods_isTouchDevice$self$$.$isTouch$;
}, $JSCompiler_StaticMethods_addCSSClassName$$ = function $$JSCompiler_StaticMethods_addCSSClassName$$$($domElement$$, $className$$18$$) {
  var $currentClassName$$, $classNameIndex$$;
  null != $className$$18$$ && null != $domElement$$ && ($currentClassName$$ = $domElement$$.className, $classNameIndex$$ = $DvtDataGridUtils$_getCSSClassNameIndex$$($currentClassName$$, $className$$18$$), -1 == $classNameIndex$$ && ($domElement$$.className = $currentClassName$$ ? $className$$18$$ + " " + $currentClassName$$ : $className$$18$$));
}, $JSCompiler_StaticMethods_removeCSSClassName$$ = function $$JSCompiler_StaticMethods_removeCSSClassName$$$($domElement$$1$$, $className$$19$$) {
  var $afterstring_currentClassName$$1$$, $beforestring_classNameIndex$$1$$, $classNameEndIndex$$;
  null != $className$$19$$ && null != $domElement$$1$$ && ($afterstring_currentClassName$$1$$ = $domElement$$1$$.className, $beforestring_classNameIndex$$1$$ = $DvtDataGridUtils$_getCSSClassNameIndex$$($afterstring_currentClassName$$1$$, $className$$19$$), -1 != $beforestring_classNameIndex$$1$$ && ($classNameEndIndex$$ = $beforestring_classNameIndex$$1$$ + $className$$19$$.length, $beforestring_classNameIndex$$1$$ = 0 == $beforestring_classNameIndex$$1$$ ? null : $afterstring_currentClassName$$1$$.substring(0, 
  $beforestring_classNameIndex$$1$$), $afterstring_currentClassName$$1$$ = $classNameEndIndex$$ == $afterstring_currentClassName$$1$$.length ? null : $afterstring_currentClassName$$1$$.substring($classNameEndIndex$$ + 1), $domElement$$1$$.className = null == $beforestring_classNameIndex$$1$$ ? null == $afterstring_currentClassName$$1$$ ? "" : $afterstring_currentClassName$$1$$ : null == $afterstring_currentClassName$$1$$ ? $beforestring_classNameIndex$$1$$ : $beforestring_classNameIndex$$1$$ + $afterstring_currentClassName$$1$$));
}, $JSCompiler_StaticMethods_containsCSSClassName$$ = function $$JSCompiler_StaticMethods_containsCSSClassName$$$($domElement$$2$$, $className$$20$$) {
  return null != $className$$20$$ && null != $domElement$$2$$ ? -1 != $DvtDataGridUtils$_getCSSClassNameIndex$$($domElement$$2$$.className, $className$$20$$) : !1;
}, $DvtDataGridUtils$_getCSSClassNameIndex$$ = function $$DvtDataGridUtils$_getCSSClassNameIndex$$$($currentClassName$$2$$, $className$$21$$) {
  var $classNameLength$$, $currentClassNameLength$$, $nameIndex$$, $hasStart$$, $endIndex$$11_hasEnd$$, $lastNameIndex$$;
  if (!$currentClassName$$2$$ || !$currentClassName$$2$$.indexOf) {
    return-1;
  }
  if ($className$$21$$ === $currentClassName$$2$$) {
    return 0;
  }
  $classNameLength$$ = $className$$21$$.length;
  $currentClassNameLength$$ = $currentClassName$$2$$.length;
  $nameIndex$$ = $currentClassName$$2$$.indexOf($className$$21$$);
  if (0 <= $nameIndex$$) {
    $hasStart$$ = 0 == $nameIndex$$ || " " == $currentClassName$$2$$.charAt($nameIndex$$ - 1);
    $endIndex$$11_hasEnd$$ = $nameIndex$$ + $classNameLength$$;
    $endIndex$$11_hasEnd$$ = $endIndex$$11_hasEnd$$ == $currentClassNameLength$$ || " " == $currentClassName$$2$$.charAt($endIndex$$11_hasEnd$$);
    if ($hasStart$$ && $endIndex$$11_hasEnd$$) {
      return $nameIndex$$;
    }
    $lastNameIndex$$ = $currentClassName$$2$$.lastIndexOf($className$$21$$);
    if ($lastNameIndex$$ != $nameIndex$$) {
      return $hasStart$$ = $currentClassName$$2$$.charAt($lastNameIndex$$ - 1), $endIndex$$11_hasEnd$$ = $lastNameIndex$$ + $classNameLength$$, $endIndex$$11_hasEnd$$ = $endIndex$$11_hasEnd$$ == $currentClassNameLength$$ || " " == $currentClassName$$2$$.charAt($endIndex$$11_hasEnd$$), $hasStart$$ && $endIndex$$11_hasEnd$$ ? $lastNameIndex$$ : $currentClassName$$2$$.indexOf(" " + $className$$21$$ + " ");
    }
  }
  return-1;
}, $JSCompiler_StaticMethods_ctrlEquivalent$$ = function $$JSCompiler_StaticMethods_ctrlEquivalent$$$($JSCompiler_StaticMethods_ctrlEquivalent$self$$, $event$$83$$) {
  return "Mac" === $JSCompiler_StaticMethods_ctrlEquivalent$self$$.$os$ ? $event$$83$$.metaKey : $event$$83$$.ctrlKey;
}, $JSCompiler_StaticMethods__determineOS$$ = function $$JSCompiler_StaticMethods__determineOS$$$($userAgent$$1$$) {
  if ($userAgent$$1$$) {
    if (-1 != $userAgent$$1$$.indexOf("win")) {
      return "Windows";
    }
    if (-1 != $userAgent$$1$$.indexOf("mac")) {
      return "Mac";
    }
    if (-1 != $userAgent$$1$$.indexOf("sunos")) {
      return "Solaris";
    }
  }
  return "Unknown";
}, $JSCompiler_StaticMethods__determinePlatform$$ = function $$JSCompiler_StaticMethods__determinePlatform$$$($userAgent$$2$$) {
  if ($userAgent$$2$$ && -1 == $userAgent$$2$$.indexOf("opera")) {
    if (-1 != $userAgent$$2$$.indexOf("trident") || -1 != $userAgent$$2$$.indexOf("msie")) {
      return "ie";
    }
    if (-1 != $userAgent$$2$$.indexOf("edge")) {
      return "edge";
    }
    if (-1 != $userAgent$$2$$.indexOf("applewebkit") || -1 != $userAgent$$2$$.indexOf("safari")) {
      return "webkit";
    }
    if (-1 != $userAgent$$2$$.indexOf("gecko/")) {
      return "gecko";
    }
  }
  return "unknown";
};
$DvtDataGridUtils$$.prototype.empty = function $$DvtDataGridUtils$$$$empty$($elem$$29$$) {
  for (;$elem$$29$$.firstChild;) {
    this.$dataGrid$.$_remove$($elem$$29$$.firstChild);
  }
};
var $JSCompiler_StaticMethods_supportsTransitions$$ = function $$JSCompiler_StaticMethods_supportsTransitions$$$() {
  var $s$$3$$ = (window.document.body || window.document.documentElement).style, $p$$ = "transition";
  if (/MSIE \d/.test(window.navigator.userAgent) && (null == window.document.documentMode || 11 > window.document.documentMode)) {
    return!1;
  }
  if ("string" == typeof $s$$3$$[$p$$]) {
    return!0;
  }
  for (var $v$$1$$ = "Moz webkit Webkit Khtml O ms".split(" "), $p$$ = $p$$.charAt(0).toUpperCase() + $p$$.substr(1), $i$$57$$ = 0;$i$$57$$ < $v$$1$$.length;$i$$57$$++) {
    if ("string" == typeof $s$$3$$[$v$$1$$[$i$$57$$] + $p$$]) {
      return!0;
    }
  }
  return!1;
};
var $DvtDataGridOptions$$ = function $$DvtDataGridOptions$$$($options$$6$$) {
  this.options = $options$$6$$;
}, $JSCompiler_StaticMethods_extract$$ = function $$JSCompiler_StaticMethods_extract$$$($JSCompiler_StaticMethods_extract$self_val1$$, $arg1$$, $arg2_val2$$, $arg3_val3$$, $arg4$$) {
  return null != $arg1$$ ? ($JSCompiler_StaticMethods_extract$self_val1$$ = $JSCompiler_StaticMethods_extract$self_val1$$.options[$arg1$$], null != $arg2_val2$$ && null != $JSCompiler_StaticMethods_extract$self_val1$$ ? ($arg2_val2$$ = $JSCompiler_StaticMethods_extract$self_val1$$[$arg2_val2$$], null != $arg3_val3$$ && null != $arg2_val2$$ ? ($arg3_val3$$ = $arg2_val2$$[$arg3_val3$$], null != $arg4$$ && null != $arg3_val3$$ ? $arg3_val3$$[$arg4$$] : $arg3_val3$$) : $arg2_val2$$) : $JSCompiler_StaticMethods_extract$self_val1$$) : 
  null;
};
$DvtDataGridOptions$$.prototype.evaluate = function $$DvtDataGridOptions$$$$evaluate$($value$$49$$, $obj$$28$$) {
  return "function" == typeof $value$$49$$ ? $value$$49$$.call(this, $obj$$28$$) : $value$$49$$;
};
var $JSCompiler_StaticMethods_getRawProperty$$ = function $$JSCompiler_StaticMethods_getRawProperty$$$($JSCompiler_StaticMethods_getRawProperty$self$$, $prop$$7$$, $axis$$27$$) {
  var $arg1$$1$$, $arg2$$1$$, $arg3$$1$$;
  "row" == $axis$$27$$ || "column" == $axis$$27$$ ? ($arg1$$1$$ = "header", $arg2$$1$$ = $axis$$27$$, $arg3$$1$$ = $prop$$7$$) : "cell" == $axis$$27$$ && ($arg1$$1$$ = "cell", $arg2$$1$$ = $prop$$7$$);
  return $JSCompiler_StaticMethods_extract$$($JSCompiler_StaticMethods_getRawProperty$self$$, $arg1$$1$$, $arg2$$1$$, $arg3$$1$$);
};
$DvtDataGridOptions$$.prototype.$getProperty$ = function $$DvtDataGridOptions$$$$$getProperty$$($prop$$8$$, $axis$$28$$, $obj$$29$$) {
  return void 0 === $obj$$29$$ ? $JSCompiler_StaticMethods_extract$$(this, $prop$$8$$, $axis$$28$$) : this.evaluate($JSCompiler_StaticMethods_getRawProperty$$(this, $prop$$8$$, $axis$$28$$), $obj$$29$$);
};
var $JSCompiler_StaticMethods_getRowBandingInterval$$ = function $$JSCompiler_StaticMethods_getRowBandingInterval$$$($JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$) {
  $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$ = $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$.$getProperty$("bandingInterval", "row");
  return null != $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$ ? $JSCompiler_StaticMethods_getRowBandingInterval$self_bandingInterval$$ : 0;
}, $JSCompiler_StaticMethods_getColumnBandingInterval$$ = function $$JSCompiler_StaticMethods_getColumnBandingInterval$$$($JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$) {
  $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$ = $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$.$getProperty$("bandingInterval", "column");
  return null != $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$ ? $JSCompiler_StaticMethods_getColumnBandingInterval$self_bandingInterval$$1$$ : 0;
};
$DvtDataGridOptions$$.prototype.$getEmptyText$ = function $$DvtDataGridOptions$$$$$getEmptyText$$() {
  return this.$getProperty$("emptyText");
};
var $JSCompiler_StaticMethods_getHorizontalGridlines$$ = function $$JSCompiler_StaticMethods_getHorizontalGridlines$$$($JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$) {
  $JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$ = $JSCompiler_StaticMethods_extract$$($JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$, "gridlines", "horizontal");
  return null != $JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$ ? $JSCompiler_StaticMethods_getHorizontalGridlines$self_horizontalGridlines$$4$$ : "visible";
}, $JSCompiler_StaticMethods_getVerticalGridlines$$ = function $$JSCompiler_StaticMethods_getVerticalGridlines$$$($JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$) {
  $JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$ = $JSCompiler_StaticMethods_extract$$($JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$, "gridlines", "vertical");
  return null != $JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$ ? $JSCompiler_StaticMethods_getVerticalGridlines$self_verticalGridlines$$4$$ : "visible";
}, $JSCompiler_StaticMethods_getSelectionCardinality$$ = function $$JSCompiler_StaticMethods_getSelectionCardinality$$$($JSCompiler_StaticMethods_getSelectionCardinality$self_key$$37$$) {
  var $mode$$8_val$$13$$;
  $mode$$8_val$$13$$ = $JSCompiler_StaticMethods_getSelectionCardinality$self_key$$37$$.$getProperty$("selectionMode");
  if (void 0 == $mode$$8_val$$13$$) {
    return "none";
  }
  $JSCompiler_StaticMethods_getSelectionCardinality$self_key$$37$$ = $JSCompiler_StaticMethods_getSelectionCardinality$self_key$$37$$.$getSelectionMode$();
  $mode$$8_val$$13$$ = $mode$$8_val$$13$$[$JSCompiler_StaticMethods_getSelectionCardinality$self_key$$37$$];
  return null != $mode$$8_val$$13$$ ? $mode$$8_val$$13$$ : "none";
};
$DvtDataGridOptions$$.prototype.$getSelectionMode$ = function $$DvtDataGridOptions$$$$$getSelectionMode$$() {
  var $cardinality_mode$$9$$;
  $cardinality_mode$$9$$ = this.$getProperty$("selectionMode");
  if (void 0 == $cardinality_mode$$9$$) {
    return "cell";
  }
  $cardinality_mode$$9$$ = $cardinality_mode$$9$$.row;
  return null != $cardinality_mode$$9$$ && "none" != $cardinality_mode$$9$$ ? "row" : "cell";
};
$DvtDataGridOptions$$.prototype.getSelection = function $$DvtDataGridOptions$$$$getSelection$() {
  return this.$getProperty$("selection");
};
var $JSCompiler_StaticMethods_isResizable$$ = function $$JSCompiler_StaticMethods_isResizable$$$($JSCompiler_StaticMethods_isResizable$self$$, $axis$$30_v$$, $dir$$13$$, $obj$$31$$) {
  $axis$$30_v$$ = $JSCompiler_StaticMethods_extract$$($JSCompiler_StaticMethods_isResizable$self$$, "header", $axis$$30_v$$, "resizable", $dir$$13$$);
  return void 0 != $obj$$31$$ ? $JSCompiler_StaticMethods_isResizable$self$$.evaluate($axis$$30_v$$, $obj$$31$$) : $axis$$30_v$$;
};
$DvtDataGridOptions$$.prototype.$getInlineStyle$ = function $$DvtDataGridOptions$$$$$getInlineStyle$$($axis$$32$$, $obj$$32$$) {
  return this.$getProperty$("style", $axis$$32$$, $obj$$32$$);
};
$DvtDataGridOptions$$.prototype.$getStyleClass$ = function $$DvtDataGridOptions$$$$$getStyleClass$$($axis$$33$$, $obj$$33$$) {
  return this.$getProperty$("className", $axis$$33$$, $obj$$33$$);
};
var $JSCompiler_StaticMethods_getRenderer$$ = function $$JSCompiler_StaticMethods_getRenderer$$$($JSCompiler_StaticMethods_getRenderer$self$$, $axis$$34$$) {
  return $JSCompiler_StaticMethods_getRawProperty$$($JSCompiler_StaticMethods_getRenderer$self$$, "renderer", $axis$$34$$);
}, $JSCompiler_StaticMethods_getScrollPolicy$$ = function $$JSCompiler_StaticMethods_getScrollPolicy$$$($JSCompiler_StaticMethods_getScrollPolicy$self_mode$$10$$) {
  $JSCompiler_StaticMethods_getScrollPolicy$self_mode$$10$$ = $JSCompiler_StaticMethods_getScrollPolicy$self_mode$$10$$.$getProperty$("scrollPolicy");
  null == $JSCompiler_StaticMethods_getScrollPolicy$self_mode$$10$$ && ($JSCompiler_StaticMethods_getScrollPolicy$self_mode$$10$$ = "auto");
  return $JSCompiler_StaticMethods_getScrollPolicy$self_mode$$10$$;
};
var $DvtDataGridSizingManager$$ = function $$DvtDataGridSizingManager$$$() {
  this.$sizes$ = {column:{}, row:{}};
};
$DvtDataGridSizingManager$$.prototype.$setSize$ = function $$DvtDataGridSizingManager$$$$$setSize$$($axis$$40$$, $headerKey$$, $size$$11$$) {
  this.$sizes$[$axis$$40$$][$headerKey$$] = $size$$11$$;
};
$DvtDataGridSizingManager$$.prototype.$getSize$ = function $$DvtDataGridSizingManager$$$$$getSize$$($axis$$41$$, $headerKey$$1$$) {
  return this.$sizes$[$axis$$41$$].hasOwnProperty($headerKey$$1$$) ? this.$sizes$[$axis$$41$$][$headerKey$$1$$] : null;
};
$DvtDataGridSizingManager$$.prototype.clear = function $$DvtDataGridSizingManager$$$$clear$() {
  this.$sizes$ = {column:{}, row:{}};
};
var $DvtDataGrid$$ = function $$DvtDataGrid$$$() {
  this.$MAX_COLUMN_THRESHOLD$ = 20;
  this.$MAX_ROW_THRESHOLD$ = 30;
  this.$m_utils$ = new $DvtDataGridUtils$$(this);
  this.$m_discontiguousSelection$ = !1;
  this.$m_sizingManager$ = new $DvtDataGridSizingManager$$;
  this.$m_colHeaderHeight$ = this.$m_rowHeaderWidth$ = null;
  this.$m_styleClassDimensionMap$ = {};
  this.$m_captureScrolling$ = this.$m_stopDatabodyScroll$ = !1;
  this.$m_isEstimateColumnCount$ = this.$m_isEstimateRowCount$ = void 0;
  this.$m_initialized$ = this.$m_stopColumnHeaderFetch$ = this.$m_stopColumnFetch$ = this.$m_stopRowHeaderFetch$ = this.$m_stopRowFetch$ = !1;
  this.$callbacks$ = {};
};
$goog$exportPath_$$("DvtDataGrid", $DvtDataGrid$$);
$DvtDataGrid$$.VISIBILITY_STATE_HIDDEN = "hidden";
$DvtDataGrid$$.VISIBILITY_STATE_REFRESH = "refresh";
$DvtDataGrid$$.VISIBILITY_STATE_RENDER = "render";
$DvtDataGrid$$.VISIBILITY_STATE_VISIBLE = "visible";
$DvtDataGrid$$.prototype.$SetOptions$ = function $$DvtDataGrid$$$$$SetOptions$$($options$$3$$) {
  this.$m_options$ = new $DvtDataGridOptions$$($options$$3$$);
};
$DvtDataGrid$$.prototype.SetOptions = $DvtDataGrid$$.prototype.$SetOptions$;
$DvtDataGrid$$.prototype.$UpdateOptions$ = function $$DvtDataGrid$$$$$UpdateOptions$$($JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$) {
  for (var $candidate$$ in $JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$) {
    $candidate$$ in this.$m_options$.options && this.$m_options$.options[$candidate$$] != $JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$[$candidate$$] && (this.$m_options$.options[$candidate$$] = $JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$[$candidate$$]);
  }
  for ($candidate$$ in $JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$) {
    a: {
      $JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$ = void 0;
      switch($candidate$$) {
        case "bandingInterval":
          var $colObj$$inline_8880_j$$inline_8870_row$$inline_8854_rows$$inline_8861$$ = $JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$ = void 0, $i$$inline_8855_i$$inline_8862_opt$$inline_8881_row$$inline_8871$$ = void 0, $headers$$inline_8882_index$$inline_8863_j$$inline_8856_rowCount$$inline_8872$$ = void 0, $bandingClass$$inline_8857_bandingClass$$inline_8864_element$$inline_8883_horizontalGridlines$$inline_8873$$ = 
          void 0;
          $JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$ = this.$m_databody$.firstChild.childNodes;
          $bandingClass$$inline_8857_bandingClass$$inline_8864_element$$inline_8883_horizontalGridlines$$inline_8873$$ = this.getMappedStyle("banded");
          for ($i$$inline_8855_i$$inline_8862_opt$$inline_8881_row$$inline_8871$$ = 0;$i$$inline_8855_i$$inline_8862_opt$$inline_8881_row$$inline_8871$$ < $JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$.length;$i$$inline_8855_i$$inline_8862_opt$$inline_8881_row$$inline_8871$$++) {
            for ($JSCompiler_StaticMethods_containsCSSClassName$$($JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$[$i$$inline_8855_i$$inline_8862_opt$$inline_8881_row$$inline_8871$$], $bandingClass$$inline_8857_bandingClass$$inline_8864_element$$inline_8883_horizontalGridlines$$inline_8873$$) && $JSCompiler_StaticMethods_removeCSSClassName$$($JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$[$i$$inline_8855_i$$inline_8862_opt$$inline_8881_row$$inline_8871$$], 
            $bandingClass$$inline_8857_bandingClass$$inline_8864_element$$inline_8883_horizontalGridlines$$inline_8873$$), $colObj$$inline_8880_j$$inline_8870_row$$inline_8854_rows$$inline_8861$$ = $JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$[$i$$inline_8855_i$$inline_8862_opt$$inline_8881_row$$inline_8871$$].childNodes, $headers$$inline_8882_index$$inline_8863_j$$inline_8856_rowCount$$inline_8872$$ = 
            0;$headers$$inline_8882_index$$inline_8863_j$$inline_8856_rowCount$$inline_8872$$ < $colObj$$inline_8880_j$$inline_8870_row$$inline_8854_rows$$inline_8861$$.length;$headers$$inline_8882_index$$inline_8863_j$$inline_8856_rowCount$$inline_8872$$ += 1) {
              $JSCompiler_StaticMethods_containsCSSClassName$$($colObj$$inline_8880_j$$inline_8870_row$$inline_8854_rows$$inline_8861$$[$headers$$inline_8882_index$$inline_8863_j$$inline_8856_rowCount$$inline_8872$$], $bandingClass$$inline_8857_bandingClass$$inline_8864_element$$inline_8883_horizontalGridlines$$inline_8873$$) && $JSCompiler_StaticMethods_removeCSSClassName$$($colObj$$inline_8880_j$$inline_8870_row$$inline_8854_rows$$inline_8861$$[$headers$$inline_8882_index$$inline_8863_j$$inline_8856_rowCount$$inline_8872$$], 
              $bandingClass$$inline_8857_bandingClass$$inline_8864_element$$inline_8883_horizontalGridlines$$inline_8873$$);
            }
          }
          var $j$$inline_8865_refresh$$inline_8884_verticalGridlines$$inline_8874$$ = $bandingClass$$inline_8857_bandingClass$$inline_8864_element$$inline_8883_horizontalGridlines$$inline_8873$$ = $headers$$inline_8882_index$$inline_8863_j$$inline_8856_rowCount$$inline_8872$$ = $i$$inline_8855_i$$inline_8862_opt$$inline_8881_row$$inline_8871$$ = $colObj$$inline_8880_j$$inline_8870_row$$inline_8854_rows$$inline_8861$$ = $JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$ = 
          void 0, $JSCompiler_inline_result$$10859_headers$$inline_10861_row$$inline_8866_rows$$inline_8875$$ = void 0;
          $JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$ = $JSCompiler_StaticMethods_getColumnBandingInterval$$(this.$m_options$);
          if (0 < $JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$) {
            for ($colObj$$inline_8880_j$$inline_8870_row$$inline_8854_rows$$inline_8861$$ = this.$m_databody$.firstChild.childNodes, $bandingClass$$inline_8857_bandingClass$$inline_8864_element$$inline_8883_horizontalGridlines$$inline_8873$$ = this.getMappedStyle("banded"), $i$$inline_8855_i$$inline_8862_opt$$inline_8881_row$$inline_8871$$ = 0;$i$$inline_8855_i$$inline_8862_opt$$inline_8881_row$$inline_8871$$ < $colObj$$inline_8880_j$$inline_8870_row$$inline_8854_rows$$inline_8861$$.length;$i$$inline_8855_i$$inline_8862_opt$$inline_8881_row$$inline_8871$$ += 
            1) {
              for ($JSCompiler_inline_result$$10859_headers$$inline_10861_row$$inline_8866_rows$$inline_8875$$ = $colObj$$inline_8880_j$$inline_8870_row$$inline_8854_rows$$inline_8861$$[$i$$inline_8855_i$$inline_8862_opt$$inline_8881_row$$inline_8871$$].childNodes, $j$$inline_8865_refresh$$inline_8884_verticalGridlines$$inline_8874$$ = 0;$j$$inline_8865_refresh$$inline_8884_verticalGridlines$$inline_8874$$ < $JSCompiler_inline_result$$10859_headers$$inline_10861_row$$inline_8866_rows$$inline_8875$$.length;$j$$inline_8865_refresh$$inline_8884_verticalGridlines$$inline_8874$$ += 
              1) {
                $headers$$inline_8882_index$$inline_8863_j$$inline_8856_rowCount$$inline_8872$$ = this.$m_startCol$ + $j$$inline_8865_refresh$$inline_8884_verticalGridlines$$inline_8874$$, 1 === Math.floor($headers$$inline_8882_index$$inline_8863_j$$inline_8856_rowCount$$inline_8872$$ / $JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$) % 2 ? $JSCompiler_StaticMethods_containsCSSClassName$$($JSCompiler_inline_result$$10859_headers$$inline_10861_row$$inline_8866_rows$$inline_8875$$[$j$$inline_8865_refresh$$inline_8884_verticalGridlines$$inline_8874$$], 
                $bandingClass$$inline_8857_bandingClass$$inline_8864_element$$inline_8883_horizontalGridlines$$inline_8873$$) || $JSCompiler_StaticMethods_addCSSClassName$$($JSCompiler_inline_result$$10859_headers$$inline_10861_row$$inline_8866_rows$$inline_8875$$[$j$$inline_8865_refresh$$inline_8884_verticalGridlines$$inline_8874$$], $bandingClass$$inline_8857_bandingClass$$inline_8864_element$$inline_8883_horizontalGridlines$$inline_8873$$) : $JSCompiler_StaticMethods_containsCSSClassName$$($JSCompiler_inline_result$$10859_headers$$inline_10861_row$$inline_8866_rows$$inline_8875$$[$j$$inline_8865_refresh$$inline_8884_verticalGridlines$$inline_8874$$], 
                $bandingClass$$inline_8857_bandingClass$$inline_8864_element$$inline_8883_horizontalGridlines$$inline_8873$$) && $JSCompiler_StaticMethods_removeCSSClassName$$($colObj$$inline_8880_j$$inline_8870_row$$inline_8854_rows$$inline_8861$$[$j$$inline_8865_refresh$$inline_8884_verticalGridlines$$inline_8874$$], $bandingClass$$inline_8857_bandingClass$$inline_8864_element$$inline_8883_horizontalGridlines$$inline_8873$$);
              }
            }
          }
          $JSCompiler_StaticMethods_updateRowBanding$$(this);
          break;
        case "gridlines":
          var $dir$$inline_8876_value$$inline_10863$$ = $JSCompiler_inline_result$$10859_headers$$inline_10861_row$$inline_8866_rows$$inline_8875$$ = $j$$inline_8865_refresh$$inline_8884_verticalGridlines$$inline_8874$$ = $bandingClass$$inline_8857_bandingClass$$inline_8864_element$$inline_8883_horizontalGridlines$$inline_8873$$ = $headers$$inline_8882_index$$inline_8863_j$$inline_8856_rowCount$$inline_8872$$ = $i$$inline_8855_i$$inline_8862_opt$$inline_8881_row$$inline_8871$$ = $colObj$$inline_8880_j$$inline_8870_row$$inline_8854_rows$$inline_8861$$ = 
          $JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$ = void 0, $bandingClass$$inline_8857_bandingClass$$inline_8864_element$$inline_8883_horizontalGridlines$$inline_8873$$ = $JSCompiler_StaticMethods_getHorizontalGridlines$$(this.$m_options$), $j$$inline_8865_refresh$$inline_8884_verticalGridlines$$inline_8874$$ = $JSCompiler_StaticMethods_getVerticalGridlines$$(this.$m_options$), 
          $JSCompiler_inline_result$$10859_headers$$inline_10861_row$$inline_8866_rows$$inline_8875$$ = this.$m_databody$.firstChild.childNodes, $headers$$inline_8882_index$$inline_8863_j$$inline_8856_rowCount$$inline_8872$$ = $JSCompiler_inline_result$$10859_headers$$inline_10861_row$$inline_8866_rows$$inline_8875$$.length, $dir$$inline_8876_value$$inline_10863$$ = this.$m_resources$.isRTLMode() ? "right" : "left";
          for ($JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$ = 0;$JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$ < $headers$$inline_8882_index$$inline_8863_j$$inline_8856_rowCount$$inline_8872$$;$JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$ += 
          1) {
            for ($i$$inline_8855_i$$inline_8862_opt$$inline_8881_row$$inline_8871$$ = $JSCompiler_inline_result$$10859_headers$$inline_10861_row$$inline_8866_rows$$inline_8875$$[$JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$].childNodes, $colObj$$inline_8880_j$$inline_8870_row$$inline_8854_rows$$inline_8861$$ = 0;$colObj$$inline_8880_j$$inline_8870_row$$inline_8854_rows$$inline_8861$$ < 
            $i$$inline_8855_i$$inline_8862_opt$$inline_8881_row$$inline_8871$$.length;$colObj$$inline_8880_j$$inline_8870_row$$inline_8854_rows$$inline_8861$$ += 1) {
              "hidden" === $j$$inline_8865_refresh$$inline_8884_verticalGridlines$$inline_8874$$ || $JSCompiler_StaticMethods__isLastColumn$$(this, $colObj$$inline_8880_j$$inline_8870_row$$inline_8854_rows$$inline_8861$$ + this.$m_startCol$) && $JSCompiler_StaticMethods_getRowHeaderWidth$$(this) + $JSCompiler_StaticMethods_getElementDir$$($i$$inline_8855_i$$inline_8862_opt$$inline_8881_row$$inline_8871$$[$colObj$$inline_8880_j$$inline_8870_row$$inline_8854_rows$$inline_8861$$], $dir$$inline_8876_value$$inline_10863$$) + 
              $JSCompiler_StaticMethods_calculateColumnWidth$$(this, $i$$inline_8855_i$$inline_8862_opt$$inline_8881_row$$inline_8871$$[$colObj$$inline_8880_j$$inline_8870_row$$inline_8854_rows$$inline_8861$$]) >= this.getWidth() ? "left" === $dir$$inline_8876_value$$inline_10863$$ ? $i$$inline_8855_i$$inline_8862_opt$$inline_8881_row$$inline_8871$$[$colObj$$inline_8880_j$$inline_8870_row$$inline_8854_rows$$inline_8861$$].style.borderRightStyle = "none" : $i$$inline_8855_i$$inline_8862_opt$$inline_8881_row$$inline_8871$$[$colObj$$inline_8880_j$$inline_8870_row$$inline_8854_rows$$inline_8861$$].style.borderLeftStyle = 
              "none" : "left" === $dir$$inline_8876_value$$inline_10863$$ ? $i$$inline_8855_i$$inline_8862_opt$$inline_8881_row$$inline_8871$$[$colObj$$inline_8880_j$$inline_8870_row$$inline_8854_rows$$inline_8861$$].style.borderRightStyle = "" : $i$$inline_8855_i$$inline_8862_opt$$inline_8881_row$$inline_8871$$[$colObj$$inline_8880_j$$inline_8870_row$$inline_8854_rows$$inline_8861$$].style.borderLeftStyle = "", "hidden" === $bandingClass$$inline_8857_bandingClass$$inline_8864_element$$inline_8883_horizontalGridlines$$inline_8873$$ || 
              $JSCompiler_StaticMethods__isLastRow$$(this, $JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$ + this.$m_startRow$) && $JSCompiler_StaticMethods_getRowBottom$$(this, $JSCompiler_inline_result$$10859_headers$$inline_10861_row$$inline_8866_rows$$inline_8875$$[$JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$], 
              null) >= this.getHeight() ? $i$$inline_8855_i$$inline_8862_opt$$inline_8881_row$$inline_8871$$[$colObj$$inline_8880_j$$inline_8870_row$$inline_8854_rows$$inline_8861$$].style.borderBottomStyle = "none" : $i$$inline_8855_i$$inline_8862_opt$$inline_8881_row$$inline_8871$$[$colObj$$inline_8880_j$$inline_8870_row$$inline_8854_rows$$inline_8861$$].style.borderBottomStyle = "";
            }
          }
          break;
        case "scrollPosition":
          $JSCompiler_StaticMethods_setInitialScrollPosition$$(this);
          break;
        case "selectionMode":
          break;
        case "emptyText":
          break;
        case "header":
          $JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$ = this.$m_options$.options.header;
          $j$$inline_8865_refresh$$inline_8884_verticalGridlines$$inline_8874$$ = $bandingClass$$inline_8857_bandingClass$$inline_8864_element$$inline_8883_horizontalGridlines$$inline_8873$$ = $headers$$inline_8882_index$$inline_8863_j$$inline_8856_rowCount$$inline_8872$$ = $i$$inline_8855_i$$inline_8862_opt$$inline_8881_row$$inline_8871$$ = $colObj$$inline_8880_j$$inline_8870_row$$inline_8854_rows$$inline_8861$$ = void 0;
          $j$$inline_8865_refresh$$inline_8884_verticalGridlines$$inline_8874$$ = !1;
          for ($bandingClass$$inline_8857_bandingClass$$inline_8864_element$$inline_8883_horizontalGridlines$$inline_8873$$ in $JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$) {
            if ("column" == $bandingClass$$inline_8857_bandingClass$$inline_8864_element$$inline_8883_horizontalGridlines$$inline_8873$$ || "row" == $bandingClass$$inline_8857_bandingClass$$inline_8864_element$$inline_8883_horizontalGridlines$$inline_8873$$) {
              if ($j$$inline_8865_refresh$$inline_8884_verticalGridlines$$inline_8874$$) {
                break;
              }
              "column" == $bandingClass$$inline_8857_bandingClass$$inline_8864_element$$inline_8883_horizontalGridlines$$inline_8873$$ ? this.$m_colHeader$ && ($headers$$inline_8882_index$$inline_8863_j$$inline_8856_rowCount$$inline_8872$$ = this.$m_colHeader$.firstChild.childNodes) : this.$m_rowHeader$ && ($headers$$inline_8882_index$$inline_8863_j$$inline_8856_rowCount$$inline_8872$$ = this.$m_rowHeader$.firstChild.childNodes);
              if ($headers$$inline_8882_index$$inline_8863_j$$inline_8856_rowCount$$inline_8872$$) {
                for ($i$$inline_8855_i$$inline_8862_opt$$inline_8881_row$$inline_8871$$ in $colObj$$inline_8880_j$$inline_8870_row$$inline_8854_rows$$inline_8861$$ = $JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$[$bandingClass$$inline_8857_bandingClass$$inline_8864_element$$inline_8883_horizontalGridlines$$inline_8873$$], $colObj$$inline_8880_j$$inline_8870_row$$inline_8854_rows$$inline_8861$$) {
                  b: {
                    var $JSCompiler_inline_result$$10859_headers$$inline_10861_row$$inline_8866_rows$$inline_8875$$ = $headers$$inline_8882_index$$inline_8863_j$$inline_8856_rowCount$$inline_8872$$, $dir$$inline_8876_value$$inline_10863$$ = $colObj$$inline_8880_j$$inline_8870_row$$inline_8854_rows$$inline_8861$$[$i$$inline_8855_i$$inline_8862_opt$$inline_8881_row$$inline_8871$$], $i$$inline_10864$$ = void 0, $attribute$$inline_10865$$ = void 0, $val$$inline_10866$$ = void 0, $attribute$$inline_10865$$ = 
                    this.$m_resources$.getMappedAttribute($i$$inline_8855_i$$inline_8862_opt$$inline_8881_row$$inline_8871$$), $val$$inline_10866$$ = $dir$$inline_8876_value$$inline_10863$$;
                    $dir$$inline_8876_value$$inline_10863$$.width ? $val$$inline_10866$$ = $dir$$inline_8876_value$$inline_10863$$.width : $dir$$inline_8876_value$$inline_10863$$.height && ($val$$inline_10866$$ = $dir$$inline_8876_value$$inline_10863$$.height);
                    for ($i$$inline_10864$$ = 0;$i$$inline_10864$$ < $JSCompiler_inline_result$$10859_headers$$inline_10861_row$$inline_8866_rows$$inline_8875$$.length;$i$$inline_10864$$++) {
                      if ("disable" == $val$$inline_10866$$) {
                        $JSCompiler_inline_result$$10859_headers$$inline_10861_row$$inline_8866_rows$$inline_8875$$[$i$$inline_10864$$].setAttribute($attribute$$inline_10865$$, "false");
                      } else {
                        if ("enable" == $val$$inline_10866$$) {
                          $JSCompiler_inline_result$$10859_headers$$inline_10861_row$$inline_8866_rows$$inline_8875$$[$i$$inline_10864$$].setAttribute($attribute$$inline_10865$$, "true");
                        } else {
                          $JSCompiler_inline_result$$10859_headers$$inline_10861_row$$inline_8866_rows$$inline_8875$$ = !1;
                          break b;
                        }
                      }
                    }
                    $JSCompiler_inline_result$$10859_headers$$inline_10861_row$$inline_8866_rows$$inline_8875$$ = !0;
                  }
                  if (!$JSCompiler_inline_result$$10859_headers$$inline_10861_row$$inline_8866_rows$$inline_8875$$) {
                    $j$$inline_8865_refresh$$inline_8884_verticalGridlines$$inline_8874$$ = !0;
                    break;
                  }
                }
              }
            }
          }
          $j$$inline_8865_refresh$$inline_8884_verticalGridlines$$inline_8874$$ && (this.empty(), this.refresh(this.$m_root$));
          break;
        case "selection":
          $JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$ = this.$m_options$.getSelection();
          null != $JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$ && ($JSCompiler_StaticMethods__isSelectionEnabled$$(this) ? this.$SetSelection$($JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$) : $JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$.length = 
          0);
          break;
        case "currentCell":
          $JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$ = this.$m_options$.$getProperty$("currentCell");
          $JSCompiler_StaticMethods__updateActive$$(this, $JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$);
          break;
        default:
          $JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$ = !1;
          break a;
      }
      $JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$ = !0;
    }
    if (!$JSCompiler_inline_result$$305_columnBandingInterval$$inline_8860_i$$inline_8869_obj$$inline_508_obj$$inline_8879_options$$4_rows$$inline_8853_selection$$inline_8887$$) {
      this.empty();
      this.refresh(this.$m_root$);
      break;
    }
  }
};
$DvtDataGrid$$.prototype.UpdateOptions = $DvtDataGrid$$.prototype.$UpdateOptions$;
$DvtDataGrid$$.prototype.$SetResources$ = function $$DvtDataGrid$$$$$SetResources$$($resources$$) {
  this.$m_resources$ = $resources$$;
};
$DvtDataGrid$$.prototype.SetResources = $DvtDataGrid$$.prototype.$SetResources$;
$DvtDataGrid$$.prototype.$getResources$ = function $$DvtDataGrid$$$$$getResources$$() {
  return this.$m_resources$;
};
$DvtDataGrid$$.prototype.getResources = $DvtDataGrid$$.prototype.$getResources$;
$DvtDataGrid$$.prototype.$getStartRow$ = function $$DvtDataGrid$$$$$getStartRow$$() {
  return this.$m_startRow$;
};
$DvtDataGrid$$.prototype.getStartRow = $DvtDataGrid$$.prototype.$getStartRow$;
$DvtDataGrid$$.prototype.$getStartRowHeader$ = function $$DvtDataGrid$$$$$getStartRowHeader$$() {
  return this.$m_startRowHeader$;
};
$DvtDataGrid$$.prototype.getStartRowHeader = $DvtDataGrid$$.prototype.$getStartRowHeader$;
$DvtDataGrid$$.prototype.$getStartColumn$ = function $$DvtDataGrid$$$$$getStartColumn$$() {
  return this.$m_startCol$;
};
$DvtDataGrid$$.prototype.getStartColumn = $DvtDataGrid$$.prototype.$getStartColumn$;
$DvtDataGrid$$.prototype.$getStartColumnHeader$ = function $$DvtDataGrid$$$$$getStartColumnHeader$$() {
  return this.$m_startColHeader$;
};
$DvtDataGrid$$.prototype.getStartColumnHeader = $DvtDataGrid$$.prototype.$getStartColumnHeader$;
$DvtDataGrid$$.prototype.getMappedStyle = function $$DvtDataGrid$$$$getMappedStyle$($key$$22$$) {
  return this.$m_resources$.getMappedStyle($key$$22$$);
};
$DvtDataGrid$$.prototype.$SetDataSource$ = function $$DvtDataGrid$$$$$SetDataSource$$($dataSource$$) {
  $JSCompiler_StaticMethods__removeDataSourceEventListeners$$(this);
  null != $dataSource$$ && (this.$m_handleModelEventListener$ = this.$handleModelEvent$.bind(this), this.$m_handleExpandEventListener$ = this.$handleExpandEvent$.bind(this), this.$m_handleCollapseEventListener$ = this.$handleCollapseEvent$.bind(this), $dataSource$$.on("change", this.$m_handleModelEventListener$, this), $dataSource$$.on("expand", this.$m_handleExpandEventListener$, this), $dataSource$$.on("collapse", this.$m_handleCollapseEventListener$, this));
  this.$m_dataSource$ = $dataSource$$;
};
$DvtDataGrid$$.prototype.SetDataSource = $DvtDataGrid$$.prototype.$SetDataSource$;
$DvtDataGrid$$.prototype.$getDataSource$ = function $$DvtDataGrid$$$$$getDataSource$$() {
  return this.$m_dataSource$;
};
$DvtDataGrid$$.prototype.getDataSource = $DvtDataGrid$$.prototype.$getDataSource$;
$DvtDataGrid$$.prototype.$setVisibility$ = function $$DvtDataGrid$$$$$setVisibility$$($state$$) {
  this.$m_visibility$ = $state$$;
};
$DvtDataGrid$$.prototype.setVisibility = $DvtDataGrid$$.prototype.$setVisibility$;
$DvtDataGrid$$.prototype.$getVisibility$ = function $$DvtDataGrid$$$$$getVisibility$$() {
  null == this.$m_visibility$ && (null != this.$m_root$.offsetParent ? this.$setVisibility$("visible") : this.$setVisibility$("hidden"));
  return this.$m_visibility$;
};
$DvtDataGrid$$.prototype.getVisibility = $DvtDataGrid$$.prototype.$getVisibility$;
$DvtDataGrid$$.prototype.$SetRemoveCallback$ = function $$DvtDataGrid$$$$$SetRemoveCallback$$($callback$$23$$) {
  this.$m_removeCallback$ = $callback$$23$$;
};
$DvtDataGrid$$.prototype.SetRemoveCallback = $DvtDataGrid$$.prototype.$SetRemoveCallback$;
$DvtDataGrid$$.prototype.$_remove$ = function $$DvtDataGrid$$$$$_remove$$($element$$6$$) {
  null != this.$m_removeCallback$ ? this.$m_removeCallback$.call(null, $element$$6$$) : $element$$6$$.parentNode.removeChild($element$$6$$);
};
$DvtDataGrid$$.prototype._remove = $DvtDataGrid$$.prototype.$_remove$;
var $JSCompiler_StaticMethods__indexes$$ = function $$JSCompiler_StaticMethods__indexes$$$($JSCompiler_StaticMethods__indexes$self$$, $keys$$1$$, $callback$$24$$) {
  var $indexes$$3$$;
  $indexes$$3$$ = $JSCompiler_StaticMethods__indexes$self$$.$m_dataSource$.indexes($keys$$1$$);
  "function" === typeof $indexes$$3$$.then ? $indexes$$3$$.then(function($indexes$$3$$) {
    $callback$$24$$.call($JSCompiler_StaticMethods__indexes$self$$, $indexes$$3$$, $keys$$1$$);
  }, function() {
    $callback$$24$$.call($JSCompiler_StaticMethods__indexes$self$$, {row:-1, column:-1}, $keys$$1$$);
  }) : $callback$$24$$.call($JSCompiler_StaticMethods__indexes$self$$, $indexes$$3$$, $keys$$1$$);
}, $JSCompiler_StaticMethods__keys$$ = function $$JSCompiler_StaticMethods__keys$$$($JSCompiler_StaticMethods__keys$self$$, $indexes$$4$$, $callback$$25$$) {
  var $keys$$2$$;
  $keys$$2$$ = $JSCompiler_StaticMethods__keys$self$$.$m_dataSource$.keys($indexes$$4$$);
  "function" === typeof $keys$$2$$.then ? $keys$$2$$.then(function($keys$$2$$) {
    $callback$$25$$.call($JSCompiler_StaticMethods__keys$self$$, $keys$$2$$, $indexes$$4$$);
  }, function() {
    $callback$$25$$.call($JSCompiler_StaticMethods__keys$self$$, {row:null, column:null}, $indexes$$4$$);
  }) : $callback$$25$$.call($JSCompiler_StaticMethods__keys$self$$, $keys$$2$$, $indexes$$4$$);
};
$DvtDataGrid$$.prototype.$SetCreateContextCallback$ = function $$DvtDataGrid$$$$$SetCreateContextCallback$$($callback$$26$$) {
  this.$m_createContextCallback$ = $callback$$26$$;
};
$DvtDataGrid$$.prototype.SetCreateContextCallback = $DvtDataGrid$$.prototype.$SetCreateContextCallback$;
var $JSCompiler_StaticMethods__isHighWatermarkScrolling$$ = function $$JSCompiler_StaticMethods__isHighWatermarkScrolling$$$($JSCompiler_StaticMethods__isHighWatermarkScrolling$self$$) {
  return "scroll" != $JSCompiler_StaticMethods_getScrollPolicy$$($JSCompiler_StaticMethods__isHighWatermarkScrolling$self$$.$m_options$);
};
$DvtDataGrid$$.prototype.$destroy$ = function $$DvtDataGrid$$$$$destroy$$() {
  delete this.$m_fetching$;
  $JSCompiler_StaticMethods__removeDataSourceEventListeners$$(this);
  $JSCompiler_StaticMethods__removeDomEventListeners$$(this);
  delete this.$m_styleClassDimensionMap$;
  this.$m_styleClassDimensionMap$ = {};
};
$DvtDataGrid$$.prototype.destroy = $DvtDataGrid$$.prototype.$destroy$;
var $JSCompiler_StaticMethods__removeDataSourceEventListeners$$ = function $$JSCompiler_StaticMethods__removeDataSourceEventListeners$$$($JSCompiler_StaticMethods__removeDataSourceEventListeners$self$$) {
  null != $JSCompiler_StaticMethods__removeDataSourceEventListeners$self$$.$m_dataSource$ && ($JSCompiler_StaticMethods__removeDataSourceEventListeners$self$$.$m_dataSource$.off("change", $JSCompiler_StaticMethods__removeDataSourceEventListeners$self$$.$m_handleModelEventListener$), $JSCompiler_StaticMethods__removeDataSourceEventListeners$self$$.$m_dataSource$.off("expand", $JSCompiler_StaticMethods__removeDataSourceEventListeners$self$$.$m_handleExpandEventListener$), $JSCompiler_StaticMethods__removeDataSourceEventListeners$self$$.$m_dataSource$.off("collapse", 
  $JSCompiler_StaticMethods__removeDataSourceEventListeners$self$$.$m_handleCollapseEventListener$));
}, $JSCompiler_StaticMethods__removeDomEventListeners$$ = function $$JSCompiler_StaticMethods__removeDomEventListeners$$$($JSCompiler_StaticMethods__removeDomEventListeners$self$$) {
  window.document.removeEventListener("mousemove", $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_docMouseMoveListener$, !1);
  window.document.removeEventListener("mouseup", $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_docMouseUpListener$, !1);
  null != $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_root$ && ($JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_handleDatabodyKeyDown$ && $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_root$.removeEventListener("keydown", $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_handleDatabodyKeyDown$, !1), $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_handleRootFocus$ && $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_root$.removeEventListener("focus", 
  $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_handleRootFocus$, !1), $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_handleRootBlur$ && $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_root$.removeEventListener("blur", $JSCompiler_StaticMethods__removeDomEventListeners$self$$.$m_handleRootBlur$, !1));
};
$DvtDataGrid$$.prototype.$getRootElement$ = function $$DvtDataGrid$$$$$getRootElement$$() {
  return this.$m_root$;
};
$DvtDataGrid$$.prototype.getWidth = function $$DvtDataGrid$$$$getWidth$() {
  null == this.$m_width$ && (this.$m_width$ = this.$getRootElement$().clientWidth);
  return this.$m_width$;
};
$DvtDataGrid$$.prototype.getHeight = function $$DvtDataGrid$$$$getHeight$() {
  null == this.$m_height$ && (this.$m_height$ = this.$getRootElement$().clientHeight);
  return this.$m_height$;
};
var $JSCompiler_StaticMethods_getViewportWidth$$ = function $$JSCompiler_StaticMethods_getViewportWidth$$$($JSCompiler_StaticMethods_getViewportWidth$self_width$$12$$) {
  $JSCompiler_StaticMethods_getViewportWidth$self_width$$12$$ = $JSCompiler_StaticMethods_getViewportWidth$self_width$$12$$.getWidth();
  return Math.round(1.5 * $JSCompiler_StaticMethods_getViewportWidth$self_width$$12$$);
}, $JSCompiler_StaticMethods_getViewportHeight$$ = function $$JSCompiler_StaticMethods_getViewportHeight$$$($JSCompiler_StaticMethods_getViewportHeight$self_height$$11$$) {
  $JSCompiler_StaticMethods_getViewportHeight$self_height$$11$$ = $JSCompiler_StaticMethods_getViewportHeight$self_height$$11$$.getHeight();
  return Math.round(1.5 * $JSCompiler_StaticMethods_getViewportHeight$self_height$$11$$);
}, $JSCompiler_StaticMethods_getFetchSize$$ = function $$JSCompiler_StaticMethods_getFetchSize$$$($JSCompiler_StaticMethods_getFetchSize$self$$, $axis$$4$$) {
  return "row" == $axis$$4$$ ? (null == $JSCompiler_StaticMethods_getFetchSize$self$$.$m_rowFetchSize$ && ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_rowFetchSize$ = Math.round($JSCompiler_StaticMethods_getViewportHeight$$($JSCompiler_StaticMethods_getFetchSize$self$$) / $JSCompiler_StaticMethods_getDefaultRowHeight$$($JSCompiler_StaticMethods_getFetchSize$self$$))), $JSCompiler_StaticMethods_getFetchSize$self$$.$m_rowFetchSize$) : "column" == $axis$$4$$ ? (null == $JSCompiler_StaticMethods_getFetchSize$self$$.$m_columnFetchSize$ && 
  ($JSCompiler_StaticMethods_getFetchSize$self$$.$m_columnFetchSize$ = Math.round($JSCompiler_StaticMethods_getViewportWidth$$($JSCompiler_StaticMethods_getFetchSize$self$$) / $JSCompiler_StaticMethods_getDefaultColumnWidth$$($JSCompiler_StaticMethods_getFetchSize$self$$))), $JSCompiler_StaticMethods_getFetchSize$self$$.$m_columnFetchSize$) : 0;
};
$DvtDataGrid$$.prototype.$getEmptyText$ = function $$DvtDataGrid$$$$$getEmptyText$$() {
  var $emptyText_resources$$1$$;
  $emptyText_resources$$1$$ = this.$m_options$.$getEmptyText$();
  null == $emptyText_resources$$1$$ && ($emptyText_resources$$1$$ = this.$m_resources$, $emptyText_resources$$1$$ = $emptyText_resources$$1$$.getTranslatedText("msgNoData"));
  return $emptyText_resources$$1$$;
};
var $JSCompiler_StaticMethods__buildEmptyText$$ = function $$JSCompiler_StaticMethods__buildEmptyText$$$($JSCompiler_StaticMethods__buildEmptyText$self$$) {
  var $emptyText$$1$$, $empty$$;
  $emptyText$$1$$ = $JSCompiler_StaticMethods__buildEmptyText$self$$.$getEmptyText$();
  $empty$$ = window.document.createElement("div");
  $empty$$.id = $JSCompiler_StaticMethods_createSubId$$($JSCompiler_StaticMethods__buildEmptyText$self$$, "empty");
  $empty$$.className = $JSCompiler_StaticMethods__buildEmptyText$self$$.getMappedStyle("emptytext");
  $JSCompiler_StaticMethods_setElementDir$$($empty$$, 0 <= $JSCompiler_StaticMethods__buildEmptyText$self$$.$m_endColHeader$ ? $JSCompiler_StaticMethods_getColumnHeaderHeight$$($JSCompiler_StaticMethods__buildEmptyText$self$$) : 0, "top");
  $empty$$.textContent = $emptyText$$1$$;
  return $JSCompiler_StaticMethods__buildEmptyText$self$$.$m_empty$ = $empty$$;
}, $JSCompiler_StaticMethods_setDefaultDimensions$$ = function $$JSCompiler_StaticMethods_setDefaultDimensions$$$($JSCompiler_StaticMethods_setDefaultDimensions$self$$) {
  var $div$$, $resources$$2$$;
  $div$$ = window.document.createElement("div");
  $div$$.style.visibilty = "hidden";
  $resources$$2$$ = $JSCompiler_StaticMethods_setDefaultDimensions$self$$.$m_resources$;
  $div$$.className = $resources$$2$$.getMappedStyle("colheadercell") + " " + $resources$$2$$.getMappedStyle("headercell");
  window.document.body.appendChild($div$$);
  $JSCompiler_StaticMethods_setDefaultDimensions$self$$.$m_defaultColumnWidth$ = Math.floor($div$$.getBoundingClientRect().width);
  $div$$.className = $resources$$2$$.getMappedStyle("row");
  $JSCompiler_StaticMethods_setDefaultDimensions$self$$.$m_defaultRowHeight$ = Math.floor($div$$.getBoundingClientRect().height);
  window.document.body.removeChild($div$$);
}, $JSCompiler_StaticMethods_getDefaultRowHeight$$ = function $$JSCompiler_StaticMethods_getDefaultRowHeight$$$($JSCompiler_StaticMethods_getDefaultRowHeight$self$$) {
  null == $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$m_defaultRowHeight$ && $JSCompiler_StaticMethods_setDefaultDimensions$$($JSCompiler_StaticMethods_getDefaultRowHeight$self$$);
  return $JSCompiler_StaticMethods_getDefaultRowHeight$self$$.$m_defaultRowHeight$;
}, $JSCompiler_StaticMethods_getDefaultColumnWidth$$ = function $$JSCompiler_StaticMethods_getDefaultColumnWidth$$$($JSCompiler_StaticMethods_getDefaultColumnWidth$self$$) {
  null == $JSCompiler_StaticMethods_getDefaultColumnWidth$self$$.$m_defaultColumnWidth$ && $JSCompiler_StaticMethods_setDefaultDimensions$$($JSCompiler_StaticMethods_getDefaultColumnWidth$self$$);
  return $JSCompiler_StaticMethods_getDefaultColumnWidth$self$$.$m_defaultColumnWidth$;
};
$DvtDataGrid$$.prototype.$getRowHeight$ = function $$DvtDataGrid$$$$$getRowHeight$$($elem$$1$$, $key$$23$$) {
  var $rowHeight$$, $className$$5$$;
  $rowHeight$$ = this.$m_sizingManager$.$getSize$("row", $key$$23$$);
  if (null != $rowHeight$$) {
    return $rowHeight$$;
  }
  if ("" != $elem$$1$$.style.height) {
    return $rowHeight$$ = $JSCompiler_StaticMethods_getElementHeight$$($elem$$1$$), this.$m_sizingManager$.$setSize$("row", $key$$23$$, $rowHeight$$), $rowHeight$$;
  }
  $className$$5$$ = $elem$$1$$.className;
  $rowHeight$$ = this.$m_styleClassDimensionMap$[$className$$5$$];
  null == $rowHeight$$ && ($rowHeight$$ = $JSCompiler_StaticMethods_getElementHeight$$($elem$$1$$));
  $rowHeight$$ != $JSCompiler_StaticMethods_getDefaultRowHeight$$(this) && this.$m_sizingManager$.$setSize$("row", $key$$23$$, $rowHeight$$);
  return this.$m_styleClassDimensionMap$[$className$$5$$] = $rowHeight$$;
};
$DvtDataGrid$$.prototype.$getColumnWidth$ = function $$DvtDataGrid$$$$$getColumnWidth$$($elem$$2$$, $key$$24$$) {
  var $columnWidth$$, $className$$6$$;
  $columnWidth$$ = this.$m_sizingManager$.$getSize$("column", $key$$24$$);
  if (null != $columnWidth$$) {
    return $columnWidth$$;
  }
  if ("" != $elem$$2$$.style.width) {
    return $columnWidth$$ = $JSCompiler_StaticMethods_getElementWidth$$($elem$$2$$), this.$m_sizingManager$.$setSize$("column", $key$$24$$, $columnWidth$$), $columnWidth$$;
  }
  $className$$6$$ = $elem$$2$$.className;
  $columnWidth$$ = this.$m_styleClassDimensionMap$[$className$$6$$];
  null == $columnWidth$$ && ($columnWidth$$ = $JSCompiler_StaticMethods_getElementWidth$$($elem$$2$$));
  $columnWidth$$ != $JSCompiler_StaticMethods_getDefaultColumnWidth$$(this) && this.$m_sizingManager$.$setSize$("column", $key$$24$$, $columnWidth$$);
  return this.$m_styleClassDimensionMap$[$className$$6$$] = $columnWidth$$;
};
var $JSCompiler_StaticMethods_createSubId$$ = function $$JSCompiler_StaticMethods_createSubId$$$($JSCompiler_StaticMethods_createSubId$self$$, $subId$$) {
  var $id$$1$$ = $JSCompiler_StaticMethods_createSubId$self$$.$getRootElement$().id;
  null == $id$$1$$ && ($id$$1$$ = "");
  return[$id$$1$$, $subId$$].join(":");
}, $JSCompiler_StaticMethods_isFetchComplete$$ = function $$JSCompiler_StaticMethods_isFetchComplete$$$($JSCompiler_StaticMethods_isFetchComplete$self$$) {
  return!1 === $JSCompiler_StaticMethods_isFetchComplete$self$$.$m_fetching$.row && !1 === $JSCompiler_StaticMethods_isFetchComplete$self$$.$m_fetching$.column && !1 === $JSCompiler_StaticMethods_isFetchComplete$self$$.$m_fetching$.cells;
}, $JSCompiler_StaticMethods__isLastRow$$ = function $$JSCompiler_StaticMethods__isLastRow$$$($JSCompiler_StaticMethods__isLastRow$self$$, $index$$49$$) {
  return $JSCompiler_StaticMethods__isCountUnknown$$($JSCompiler_StaticMethods__isLastRow$self$$, "row") ? $index$$49$$ === $JSCompiler_StaticMethods__isLastRow$self$$.$m_endRow$ && $JSCompiler_StaticMethods__isLastRow$self$$.$m_stopRowFetch$ : $index$$49$$ + 1 === $JSCompiler_StaticMethods__isLastRow$self$$.$m_dataSource$.getCount("row");
}, $JSCompiler_StaticMethods__isLastColumn$$ = function $$JSCompiler_StaticMethods__isLastColumn$$$($JSCompiler_StaticMethods__isLastColumn$self$$, $index$$50$$) {
  return $JSCompiler_StaticMethods__isCountUnknown$$($JSCompiler_StaticMethods__isLastColumn$self$$, "column") ? $index$$50$$ === $JSCompiler_StaticMethods__isLastColumn$self$$.$m_endCol$ && $JSCompiler_StaticMethods__isLastColumn$self$$.$m_stopColumnFetch$ : $index$$50$$ + 1 === $JSCompiler_StaticMethods__isLastColumn$self$$.$m_dataSource$.getCount("column");
};
$DvtDataGrid$$.prototype.empty = function $$DvtDataGrid$$$$empty$() {
  this.$m_empty$ && this.$m_root$.removeChild(this.$m_empty$);
  this.$m_corner$ && this.$m_root$.removeChild(this.$m_corner$);
  this.$m_bottomCorner$ && this.$m_root$.removeChild(this.$m_bottomCorner$);
  this.$m_columnHeaderScrollbarSpacer$ && this.$m_root$.removeChild(this.$m_columnHeaderScrollbarSpacer$);
  this.$m_rowHeaderScrollbarSpacer$ && this.$m_root$.removeChild(this.$m_rowHeaderScrollbarSpacer$);
  this.$m_root$.removeChild(this.$m_placeHolder$);
  this.$m_root$.removeChild(this.$m_status$);
  this.$m_root$.removeChild(this.$m_accSummary$);
  this.$m_root$.removeChild(this.$m_accInfo$);
  this.$m_root$.removeChild(this.$m_stateInfo$);
  this.$m_root$.removeChild(this.$m_contextInfo$);
  this.$m_root$.removeChild(this.$m_scroller$);
  this.$_remove$(this.$m_colHeader$);
  this.$_remove$(this.$m_rowHeader$);
  this.$_remove$(this.$m_databody$);
};
$DvtDataGrid$$.prototype.refresh = function $$DvtDataGrid$$$$refresh$($root$$) {
  $JSCompiler_StaticMethods__removeDomEventListeners$$(this);
  $JSCompiler_StaticMethods_resetInternal$$(this);
  this.$render$($root$$);
};
$DvtDataGrid$$.prototype.refresh = $DvtDataGrid$$.prototype.refresh;
var $JSCompiler_StaticMethods_resetInternal$$ = function $$JSCompiler_StaticMethods_resetInternal$$$($JSCompiler_StaticMethods_resetInternal$self$$) {
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_initialized$ = !1;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_cursor$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_corner$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_bottomCorner$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_columnHeaderScrollbarSpacer$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_rowHeaderScrollbarSpacer$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_colHeader$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_rowHeader$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_databody$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_scroller$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_empty$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_accInfo$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_accSummary$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_contextInfo$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_placeHolder$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stateInfo$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_status$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_isEstimateRowCount$ = void 0;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_isEstimateColumnCount$ = void 0;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopRowFetch$ = !1;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopRowHeaderFetch$ = !1;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopColumnFetch$ = !1;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopColumnHeaderFetch$ = !1;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_rowFetchSize$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_columnFetchSize$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_fetching$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_sizingManager$.clear();
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_styleClassDimensionMap$ = {};
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_height$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_width$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_scrollHeight$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_scrollWidth$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_avgRowHeight$ = void 0;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_avgColWidth$ = void 0;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_defaultColumnWidth$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_defaultRowHeight$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_colHeaderHeight$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_rowHeaderWidth$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_rowHeaderLevelWidths$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_columnHeaderLevelHeights$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_active$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_prevActive$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_databodyDragState$ = !1;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_databodyMove$ = !1;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_moveRow$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_moveRowHeader$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_dropTarget$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_dropTargetHeader$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_discontiguousSelection$ = !1;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_docMouseMoveListener$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_docMouseUpListener$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_handleDatabodyKeyDown$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_handleRootFocus$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_handleRootBlur$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_modelEvents$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_stopDatabodyScroll$ = !1;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_captureScrolling$ = !1;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_hasHorizontalScroller$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_hasVerticalScroller$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_currentScrollLeft$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_currentScrollTop$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_resizingElement$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_startRow$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_startCol$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_endRow$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_endCol$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_startRowPixel$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_startColPixel$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_endRowPixel$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_endColPixel$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_startRowHeader$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_startColHeader$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_endRowHeader$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_endColHeader$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_startRowHeaderPixel$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_startColHeaderPixel$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_endRowHeaderPixel$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_endColHeaderPixel$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_rowHeaderLevelCount$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_columnHeaderLevelCount$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_sortInfo$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_resizeRequired$ = null;
  $JSCompiler_StaticMethods_resetInternal$self$$.$m_externalFocus$ = null;
}, $JSCompiler_StaticMethods__shouldInitialize$$ = function $$JSCompiler_StaticMethods__shouldInitialize$$$($JSCompiler_StaticMethods__shouldInitialize$self$$) {
  return $JSCompiler_StaticMethods_isFetchComplete$$($JSCompiler_StaticMethods__shouldInitialize$self$$) && !$JSCompiler_StaticMethods__shouldInitialize$self$$.$m_initialized$ && null != $JSCompiler_StaticMethods__shouldInitialize$self$$.$m_databody$.parentNode;
}, $JSCompiler_StaticMethods__handleInitialization$$ = function $$JSCompiler_StaticMethods__handleInitialization$$$($JSCompiler_StaticMethods__handleInitialization$self$$, $hasData$$) {
  !0 == $hasData$$ ? ($JSCompiler_StaticMethods_resizeGrid$$($JSCompiler_StaticMethods__handleInitialization$self$$), $JSCompiler_StaticMethods_setInitialScrollPosition$$($JSCompiler_StaticMethods__handleInitialization$self$$), $JSCompiler_StaticMethods_fillViewport$$($JSCompiler_StaticMethods__handleInitialization$self$$, $JSCompiler_StaticMethods__handleInitialization$self$$.$m_currentScrollLeft$, $JSCompiler_StaticMethods__handleInitialization$self$$.$m_currentScrollTop$), $JSCompiler_StaticMethods_isFetchComplete$$($JSCompiler_StaticMethods__handleInitialization$self$$) && 
  ($JSCompiler_StaticMethods__updateActive$$($JSCompiler_StaticMethods__handleInitialization$self$$, $JSCompiler_StaticMethods__handleInitialization$self$$.$m_options$.$getProperty$("currentCell")), $JSCompiler_StaticMethods__handleInitialization$self$$.$m_initialized$ = !0, $JSCompiler_StaticMethods__handleInitialization$self$$.fireEvent("ready", {}), $JSCompiler_StaticMethods__runModelEventQueue$$($JSCompiler_StaticMethods__handleInitialization$self$$))) : ($JSCompiler_StaticMethods__handleInitialization$self$$.$m_initialized$ = 
  !0, $JSCompiler_StaticMethods__handleInitialization$self$$.fireEvent("ready", {}), $JSCompiler_StaticMethods__runModelEventQueue$$($JSCompiler_StaticMethods__handleInitialization$self$$));
}, $JSCompiler_StaticMethods__runModelEventQueue$$ = function $$JSCompiler_StaticMethods__runModelEventQueue$$$($JSCompiler_StaticMethods__runModelEventQueue$self$$) {
  var $i$$7$$;
  if (null != $JSCompiler_StaticMethods__runModelEventQueue$self$$.$m_modelEvents$) {
    for ($i$$7$$ = 0;$i$$7$$ < $JSCompiler_StaticMethods__runModelEventQueue$self$$.$m_modelEvents$.length;$i$$7$$++) {
      $JSCompiler_StaticMethods__runModelEventQueue$self$$.$handleModelEvent$($JSCompiler_StaticMethods__runModelEventQueue$self$$.$m_modelEvents$[$i$$7$$]);
    }
    $JSCompiler_StaticMethods__runModelEventQueue$self$$.$m_modelEvents$.length = 0;
  }
};
$DvtDataGrid$$.prototype.$render$ = function $$DvtDataGrid$$$$$render$$($empty$$inline_585_root$$1$$) {
  null != this.$m_databody$ && (this.$destroy$(), $JSCompiler_StaticMethods_resetInternal$$(this));
  this.$m_fetching$ = {};
  this.$m_startCol$ = this.$m_startRow$ = 0;
  this.$m_endCol$ = this.$m_endRow$ = -1;
  this.$m_startColHeader$ = this.$m_startRowHeader$ = this.$m_endColPixel$ = this.$m_endRowPixel$ = this.$m_startColPixel$ = this.$m_startRowPixel$ = 0;
  this.$m_endColHeader$ = this.$m_endRowHeader$ = -1;
  this.$m_currentScrollTop$ = this.$m_currentScrollLeft$ = this.$m_endColHeaderPixel$ = this.$m_endRowHeaderPixel$ = this.$m_startColHeaderPixel$ = this.$m_startRowHeaderPixel$ = 0;
  var $root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$, $colHeader$$inline_581$$, $rowHeader$$inline_582$$;
  this.$m_root$ = $empty$$inline_585_root$$1$$;
  this.$m_root$.setAttribute("role", "application");
  $empty$$inline_585_root$$1$$.tabIndex = 0;
  var $root$$inline_8890$$ = window.document.createElement("div");
  $root$$inline_8890$$.id = $JSCompiler_StaticMethods_createSubId$$(this, "status");
  $root$$inline_8890$$.className = this.getMappedStyle("status");
  $root$$inline_8890$$.setAttribute("role", "status");
  $empty$$inline_585_root$$1$$.appendChild($root$$inline_8890$$);
  this.$m_status$ = $root$$inline_8890$$;
  $root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$ = window.document.createElement("div");
  $root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$.id = $JSCompiler_StaticMethods_createSubId$$(this, "summary");
  $root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$.className = this.getMappedStyle("info");
  $empty$$inline_585_root$$1$$.appendChild($root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$);
  this.$m_accSummary$ = $root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$;
  $root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$ = window.document.createElement("div");
  $root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$.id = $JSCompiler_StaticMethods_createSubId$$(this, "info");
  $root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$.className = this.getMappedStyle("info");
  $root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$.setAttribute("role", "status");
  $empty$$inline_585_root$$1$$.appendChild($root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$);
  this.$m_accInfo$ = $root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$;
  $root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$ = window.document.createElement("div");
  $root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$.id = $JSCompiler_StaticMethods_createSubId$$(this, "state");
  $root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$.className = this.getMappedStyle("info");
  $empty$$inline_585_root$$1$$.appendChild($root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$);
  this.$m_stateInfo$ = $root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$;
  $root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$ = window.document.createElement("div");
  $root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$.id = $JSCompiler_StaticMethods_createSubId$$(this, "context");
  $root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$.className = this.getMappedStyle("info");
  $empty$$inline_585_root$$1$$.appendChild($root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$);
  this.$m_contextInfo$ = $root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$;
  $root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$ = window.document.createElement("div");
  $root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$.id = $JSCompiler_StaticMethods_createSubId$$(this, "placeHolder");
  $root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$.className = this.getMappedStyle("info");
  $empty$$inline_585_root$$1$$.appendChild($root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$);
  this.$m_placeHolder$ = $root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$;
  if (null != this.$m_dataSource$) {
    this.$m_empty$ = null;
    $root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$ = this.$m_resources$.isRTLMode();
    $colHeader$$inline_581$$ = $JSCompiler_StaticMethods_buildHeaders$$(this, "column", this.getMappedStyle("colheader"));
    $rowHeader$$inline_582$$ = $JSCompiler_StaticMethods_buildHeaders$$(this, "row", this.getMappedStyle("rowheader"));
    var $root$$inline_8908$$ = window.document.createElement("div");
    $root$$inline_8908$$.id = $JSCompiler_StaticMethods_createSubId$$(this, "scroller");
    $root$$inline_8908$$.className = this.getMappedStyle("scrollers");
    $root$$inline_8908$$.tabIndex = "-1";
    $root$$inline_8908$$.addEventListener ? $root$$inline_8908$$.addEventListener("scroll", this.$handleScroll$.bind(this), !1) : $root$$inline_8908$$.attachEvent("onscroll", this.$handleScroll$.bind(this));
    this.$m_scroller$ = $root$$inline_8908$$;
    var $root$$inline_8912$$ = window.document.createElement("div");
    $root$$inline_8912$$.id = $JSCompiler_StaticMethods_createSubId$$(this, "databody");
    $root$$inline_8912$$.className = this.getMappedStyle("databody");
    this.$m_databody$ = $root$$inline_8912$$;
    this.fetchCells($root$$inline_8912$$, $root$$inline_8908$$, 0, 0);
    $root$$inline_8893_root$$inline_8896_root$$inline_8899_root$$inline_8902_root$$inline_8905_rtl$$inline_580$$ && ($colHeader$$inline_581$$.style.direction = "rtl", $root$$inline_8912$$.style.direction = "rtl", $root$$inline_8908$$.style.direction = "rtl");
    this.$m_isResizing$ = !1;
    this.$m_resizingElement$ = null;
    this.$m_databodyDragState$ = !1;
    this.$m_handleDatabodyKeyDown$ = this.$handleDatabodyKeyDown$.bind(this);
    this.$m_handleRootFocus$ = this.$handleRootFocus$.bind(this);
    this.$m_handleRootBlur$ = this.$handleRootBlur$.bind(this);
    this.$m_docMouseMoveListener$ = this.$handleMouseMove$.bind(this);
    this.$m_docMouseUpListener$ = this.$handleMouseUp$.bind(this);
    $JSCompiler_StaticMethods_isTouchDevice$$(this.$m_utils$) ? ($root$$inline_8912$$.addEventListener("touchstart", this.$handleTouchStart$.bind(this), !1), $root$$inline_8912$$.addEventListener("touchmove", this.$handleTouchMove$.bind(this), !1), $root$$inline_8912$$.addEventListener("touchend", this.$handleTouchEnd$.bind(this), !1), $root$$inline_8912$$.addEventListener("touchcancel", this.$handleTouchCancel$.bind(this), !1), $colHeader$$inline_581$$.addEventListener("touchstart", this.$handleHeaderTouchStart$.bind(this), 
    !1), $colHeader$$inline_581$$.addEventListener("touchmove", this.$handleHeaderTouchMove$.bind(this), !1), $colHeader$$inline_581$$.addEventListener("touchend", this.$handleHeaderTouchEnd$.bind(this), !1), $colHeader$$inline_581$$.addEventListener("touchcancel", this.$handleHeaderTouchCancel$.bind(this), !1), $rowHeader$$inline_582$$.addEventListener("touchstart", this.$handleHeaderTouchStart$.bind(this), !1), $rowHeader$$inline_582$$.addEventListener("touchmove", this.$handleHeaderTouchMove$.bind(this), 
    !1), $rowHeader$$inline_582$$.addEventListener("touchend", this.$handleHeaderTouchEnd$.bind(this), !1), $rowHeader$$inline_582$$.addEventListener("touchcancel", this.$handleHeaderTouchCancel$.bind(this), !1), $empty$$inline_585_root$$1$$.addEventListener("focus", this.$m_handleRootFocus$, !0), $empty$$inline_585_root$$1$$.addEventListener("blur", this.$m_handleRootBlur$, !0)) : (window.document.addEventListener("mousemove", this.$m_docMouseMoveListener$, !1), window.document.addEventListener("mouseup", 
    this.$m_docMouseUpListener$, !1), $empty$$inline_585_root$$1$$.addEventListener("keydown", this.$m_handleDatabodyKeyDown$, !1), $empty$$inline_585_root$$1$$.addEventListener("focus", this.$m_handleRootFocus$, !0), $empty$$inline_585_root$$1$$.addEventListener("blur", this.$m_handleRootBlur$, !0), $root$$inline_8912$$.addEventListener("gecko" === this.$m_utils$.platform ? "DOMMouseScroll" : "mousewheel", this.$handleDatabodyMouseWheel$.bind(this), !1), $root$$inline_8912$$.addEventListener("mousedown", 
    this.$handleDatabodyMouseDown$.bind(this), !1), $root$$inline_8912$$.addEventListener("mousemove", this.$handleDatabodyMouseMove$.bind(this), !1), $root$$inline_8912$$.addEventListener("mouseup", this.$handleDatabodyMouseUp$.bind(this), !1), $root$$inline_8912$$.addEventListener("mouseout", this.$handleDatabodyMouseOut$.bind(this), !1), $root$$inline_8912$$.addEventListener("mouseover", this.$handleDatabodyMouseOver$.bind(this), !1), $rowHeader$$inline_582$$.addEventListener("mousedown", this.$handleHeaderMouseDown$.bind(this), 
    !1), $colHeader$$inline_581$$.addEventListener("mousedown", this.$handleHeaderMouseDown$.bind(this), !1), $rowHeader$$inline_582$$.addEventListener("mouseover", this.$handleHeaderMouseOver$.bind(this), !1), $colHeader$$inline_581$$.addEventListener("mouseover", this.$handleHeaderMouseOver$.bind(this), !1), $rowHeader$$inline_582$$.addEventListener("mousemove", this.$handleRowHeaderMouseMove$.bind(this), !1), $rowHeader$$inline_582$$.addEventListener("mouseup", this.$handleHeaderMouseUp$.bind(this), 
    !1), $rowHeader$$inline_582$$.addEventListener("mouseout", this.$handleHeaderMouseOut$.bind(this), !1), $colHeader$$inline_581$$.addEventListener("mouseout", this.$handleHeaderMouseOut$.bind(this), !1), $rowHeader$$inline_582$$.addEventListener("click", this.$handleHeaderClick$.bind(this), !1), $colHeader$$inline_581$$.addEventListener("click", this.$handleHeaderClick$.bind(this), !1), $root$$inline_8908$$.addEventListener("mousedown", this.$handleScrollerMouseDown$.bind(this), !1), $root$$inline_8908$$.addEventListener("mouseup", 
    this.$handleScrollerMouseUp$.bind(this), !1));
    $empty$$inline_585_root$$1$$.insertBefore($colHeader$$inline_581$$, $root$$inline_8890$$);
    $empty$$inline_585_root$$1$$.insertBefore($rowHeader$$inline_582$$, $root$$inline_8890$$);
    $empty$$inline_585_root$$1$$.insertBefore($root$$inline_8908$$, $root$$inline_8890$$);
    $empty$$inline_585_root$$1$$.insertBefore($root$$inline_8912$$, $root$$inline_8890$$);
    $JSCompiler_StaticMethods__shouldInitialize$$(this) && $JSCompiler_StaticMethods__handleInitialization$$(this, !0);
  } else {
    $empty$$inline_585_root$$1$$ = $JSCompiler_StaticMethods__buildEmptyText$$(this), this.$m_root$.appendChild($empty$$inline_585_root$$1$$), $JSCompiler_StaticMethods__handleInitialization$$(this, !1);
  }
};
$DvtDataGrid$$.prototype.render = $DvtDataGrid$$.prototype.$render$;
$DvtDataGrid$$.prototype.$HandleResize$ = function $$DvtDataGrid$$$$$HandleResize$$($width$$14$$, $height$$14$$) {
  $width$$14$$ = this.$getRootElement$().clientWidth;
  $height$$14$$ = this.$getRootElement$().clientHeight;
  if ($width$$14$$ != this.$m_width$ || $height$$14$$ != this.$m_height$) {
    this.$m_width$ = $width$$14$$, this.$m_height$ = $height$$14$$, this.$m_columnFetchSize$ = this.$m_rowFetchSize$ = null, this.$m_initialized$ && ($JSCompiler_StaticMethods_resizeGrid$$(this), $JSCompiler_StaticMethods_isFetchComplete$$(this) && $JSCompiler_StaticMethods_fillViewport$$(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$));
  }
};
$DvtDataGrid$$.prototype.HandleResize = $DvtDataGrid$$.prototype.$HandleResize$;
var $JSCompiler_StaticMethods_resizeGrid$$ = function $$JSCompiler_StaticMethods_resizeGrid$$$($JSCompiler_StaticMethods_resizeGrid$self$$) {
  var $databodyWidth_width$$15$$, $height$$15_scrollerHeight$$, $borderStyle$$inline_598_colHeader$$2_empty$$2$$, $lastHeader$$inline_599_rowHeader$$2$$, $scroller$$1$$, $databody$$1$$, $colHeaderHeight$$1$$, $rowHeaderWidth$$1$$, $databodyContentWidth$$, $databodyContentHeight$$, $databodyHeight$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$, $isDatabodyVerticalScrollbarRequired$$, $scrollbarSize$$, $scrollerWidth$$;
  $JSCompiler_StaticMethods__databodyEmpty$$($JSCompiler_StaticMethods_resizeGrid$self$$) ? null == $JSCompiler_StaticMethods_resizeGrid$self$$.$m_empty$ && ($borderStyle$$inline_598_colHeader$$2_empty$$2$$ = $JSCompiler_StaticMethods__buildEmptyText$$($JSCompiler_StaticMethods_resizeGrid$self$$), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_root$.appendChild($borderStyle$$inline_598_colHeader$$2_empty$$2$$)) : ($databodyWidth_width$$15$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.getWidth(), 
  $height$$15_scrollerHeight$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.getHeight(), $borderStyle$$inline_598_colHeader$$2_empty$$2$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_colHeader$, $lastHeader$$inline_599_rowHeader$$2$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_rowHeader$, $scroller$$1$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_scroller$, $databody$$1$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_databody$, $colHeaderHeight$$1$$ = $JSCompiler_StaticMethods_getColumnHeaderHeight$$($JSCompiler_StaticMethods_resizeGrid$self$$), 
  $rowHeaderWidth$$1$$ = $JSCompiler_StaticMethods_getRowHeaderWidth$$($JSCompiler_StaticMethods_resizeGrid$self$$), $databodyContentWidth$$ = $JSCompiler_StaticMethods_getElementWidth$$($databody$$1$$.firstChild), $databodyContentHeight$$ = $JSCompiler_StaticMethods_getElementHeight$$($databody$$1$$.firstChild), $height$$15_scrollerHeight$$ -= $colHeaderHeight$$1$$, $scrollerWidth$$ = $databodyWidth_width$$15$$ - $rowHeaderWidth$$1$$, $databodyWidth_width$$15$$ = Math.min($databodyContentWidth$$, 
  $scrollerWidth$$), $databodyHeight$$ = Math.min($databodyContentHeight$$, $height$$15_scrollerHeight$$), $JSCompiler_StaticMethods_isTouchDevice$$($JSCompiler_StaticMethods_resizeGrid$self$$.$m_utils$), $scrollbarSize$$ = $JSCompiler_StaticMethods_getScrollbarSize$$($JSCompiler_StaticMethods_resizeGrid$self$$.$m_utils$), ($dir$$3_isDatabodyHorizontalScrollbarRequired$$ = $JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$($JSCompiler_StaticMethods_resizeGrid$self$$, $scrollerWidth$$)) ? 
  $isDatabodyVerticalScrollbarRequired$$ = $JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$($JSCompiler_StaticMethods_resizeGrid$self$$, $height$$15_scrollerHeight$$ - $scrollbarSize$$) : ($isDatabodyVerticalScrollbarRequired$$ = $JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$($JSCompiler_StaticMethods_resizeGrid$self$$, $height$$15_scrollerHeight$$)) && ($dir$$3_isDatabodyHorizontalScrollbarRequired$$ = $JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$($JSCompiler_StaticMethods_resizeGrid$self$$, 
  $scrollerWidth$$ - $scrollbarSize$$)), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_hasHorizontalScroller$ = $dir$$3_isDatabodyHorizontalScrollbarRequired$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_hasVerticalScroller$ = $isDatabodyVerticalScrollbarRequired$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$ && $height$$15_scrollerHeight$$ - $scrollbarSize$$ < $databodyHeight$$ && ($databodyHeight$$ = $height$$15_scrollerHeight$$ - $scrollbarSize$$), $isDatabodyVerticalScrollbarRequired$$ && 
  $scrollerWidth$$ - $scrollbarSize$$ < $databodyWidth_width$$15$$ && ($databodyWidth_width$$15$$ = $scrollerWidth$$ - $scrollbarSize$$), $dir$$3_isDatabodyHorizontalScrollbarRequired$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_resources$.isRTLMode() ? "right" : "left", $JSCompiler_StaticMethods_setElementDir$$($lastHeader$$inline_599_rowHeader$$2$$, 0, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), $JSCompiler_StaticMethods_setElementDir$$($lastHeader$$inline_599_rowHeader$$2$$, $colHeaderHeight$$1$$, 
  "top"), $JSCompiler_StaticMethods_setElementHeight$$($lastHeader$$inline_599_rowHeader$$2$$, $databodyHeight$$), $JSCompiler_StaticMethods_setElementDir$$($borderStyle$$inline_598_colHeader$$2_empty$$2$$, $rowHeaderWidth$$1$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), $JSCompiler_StaticMethods_setElementWidth$$($borderStyle$$inline_598_colHeader$$2_empty$$2$$, $databodyWidth_width$$15$$), $JSCompiler_StaticMethods_setElementDir$$($databody$$1$$, $colHeaderHeight$$1$$, "top"), $JSCompiler_StaticMethods_setElementDir$$($databody$$1$$, 
  $rowHeaderWidth$$1$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), $JSCompiler_StaticMethods_setElementWidth$$($databody$$1$$, $databodyWidth_width$$15$$), $JSCompiler_StaticMethods_setElementHeight$$($databody$$1$$, $databodyHeight$$), $JSCompiler_StaticMethods_setElementDir$$($scroller$$1$$, $colHeaderHeight$$1$$, "top"), $JSCompiler_StaticMethods_setElementDir$$($scroller$$1$$, $rowHeaderWidth$$1$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), $JSCompiler_StaticMethods_setElementWidth$$($scroller$$1$$, 
  $scrollerWidth$$), $JSCompiler_StaticMethods_setElementHeight$$($scroller$$1$$, $height$$15_scrollerHeight$$), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_scrollWidth$ = $databodyContentWidth$$ - $databodyWidth_width$$15$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_scrollHeight$ = $databodyContentHeight$$ - $databodyHeight$$, null != $JSCompiler_StaticMethods_resizeGrid$self$$.$m_colHeader$ && 0 <= $JSCompiler_StaticMethods_resizeGrid$self$$.$m_endColHeader$ && $JSCompiler_StaticMethods_getRowHeaderWidth$$($JSCompiler_StaticMethods_resizeGrid$self$$) + 
  $JSCompiler_StaticMethods_resizeGrid$self$$.$m_endColHeaderPixel$ >= $JSCompiler_StaticMethods_resizeGrid$self$$.getWidth() && ($borderStyle$$inline_598_colHeader$$2_empty$$2$$ = $JSCompiler_StaticMethods_resizeGrid$self$$.$m_resources$.isRTLMode() ? "borderLeftStyle" : "borderRightStyle", $lastHeader$$inline_599_rowHeader$$2$$ = $JSCompiler_StaticMethods__getColumnHeaderByIndex$$($JSCompiler_StaticMethods_resizeGrid$self$$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_endColHeader$, $JSCompiler_StaticMethods_resizeGrid$self$$.$m_columnHeaderLevelCount$ - 
  1), $lastHeader$$inline_599_rowHeader$$2$$.style[$borderStyle$$inline_598_colHeader$$2_empty$$2$$] = "none"), $JSCompiler_StaticMethods_buildCorners$$($JSCompiler_StaticMethods_resizeGrid$self$$), $JSCompiler_StaticMethods_resizeGrid$self$$.$m_resizeRequired$ = !1);
}, $JSCompiler_StaticMethods_buildCorners$$ = function $$JSCompiler_StaticMethods_buildCorners$$$($JSCompiler_StaticMethods_buildCorners$self$$) {
  var $colHeaderHeight$$2$$, $rowHeaderWidth$$2$$, $bottomCorner$$, $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $dir$$4$$, $colHeaderWidth$$, $rowHeaderHeight$$, $scrollerWidth$$1$$, $scrollerHeight$$1$$;
  $JSCompiler_StaticMethods_getScrollbarSize$$($JSCompiler_StaticMethods_buildCorners$self$$.$m_utils$);
  $scrollerWidth$$1$$ = $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_buildCorners$self$$.$m_scroller$);
  $scrollerHeight$$1$$ = $JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_StaticMethods_buildCorners$self$$.$m_scroller$);
  $colHeaderHeight$$2$$ = $JSCompiler_StaticMethods_getColumnHeaderHeight$$($JSCompiler_StaticMethods_buildCorners$self$$);
  $colHeaderWidth$$ = $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_buildCorners$self$$.$m_colHeader$);
  $rowHeaderWidth$$2$$ = $JSCompiler_StaticMethods_getRowHeaderWidth$$($JSCompiler_StaticMethods_buildCorners$self$$);
  $rowHeaderHeight$$ = $JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeader$);
  $dir$$4$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  -1 != $JSCompiler_StaticMethods_buildCorners$self$$.$m_endRowHeader$ && -1 != $JSCompiler_StaticMethods_buildCorners$self$$.$m_endColHeader$ && (null != $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ ? $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ : ($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = window.document.createElement("div"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = 
  $JSCompiler_StaticMethods_createSubId$$($JSCompiler_StaticMethods_buildCorners$self$$, "corner"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("topcorner")), $JSCompiler_StaticMethods_setElementWidth$$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$), $JSCompiler_StaticMethods_setElementHeight$$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $colHeaderHeight$$2$$), 
  null == $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ = $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$));
  null != $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ && null == $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_corner$ = null);
  -1 != $JSCompiler_StaticMethods_buildCorners$self$$.$m_endRowHeader$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_hasHorizontalScroller$ ? (null != $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ ? $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ : ($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = window.document.createElement("div"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = 
  $JSCompiler_StaticMethods_createSubId$$($JSCompiler_StaticMethods_buildCorners$self$$, "rhSbSpacer"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("rowheaderspacer")), $JSCompiler_StaticMethods_setElementDir$$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderHeight$$ + $colHeaderHeight$$2$$, "top"), $JSCompiler_StaticMethods_setElementDir$$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 
  0, $dir$$4$$), $JSCompiler_StaticMethods_setElementWidth$$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$), $JSCompiler_StaticMethods_setElementHeight$$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $scrollerHeight$$1$$ - $rowHeaderHeight$$), null == $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), 
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ = $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$)) : (null != $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_rowHeaderScrollbarSpacer$ = null));
  -1 != $JSCompiler_StaticMethods_buildCorners$self$$.$m_endColHeader$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_hasVerticalScroller$ ? (null != $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ ? $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ : ($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = window.document.createElement("div"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = 
  $JSCompiler_StaticMethods_createSubId$$($JSCompiler_StaticMethods_buildCorners$self$$, "chSbSpacer"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("colheaderspacer")), $JSCompiler_StaticMethods_setElementDir$$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$ + $colHeaderWidth$$, $dir$$4$$), $JSCompiler_StaticMethods_setElementDir$$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 
  0, "top"), $JSCompiler_StaticMethods_setElementWidth$$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $scrollerWidth$$1$$ - $colHeaderWidth$$), $JSCompiler_StaticMethods_setElementHeight$$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $colHeaderHeight$$2$$), null == $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), 
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ = $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$)) : (null != $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_columnHeaderScrollbarSpacer$ = null));
  $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasHorizontalScroller$ && $JSCompiler_StaticMethods_buildCorners$self$$.$m_hasVerticalScroller$ && (null != $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ ? $bottomCorner$$ = $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ : ($bottomCorner$$ = window.document.createElement("div"), $bottomCorner$$.id = $JSCompiler_StaticMethods_createSubId$$($JSCompiler_StaticMethods_buildCorners$self$$, "bcorner"), $bottomCorner$$.className = 
  $JSCompiler_StaticMethods_buildCorners$self$$.getMappedStyle("bottomcorner")), $JSCompiler_StaticMethods_setElementDir$$($bottomCorner$$, $rowHeaderHeight$$ + $colHeaderHeight$$2$$, "top"), $JSCompiler_StaticMethods_setElementDir$$($bottomCorner$$, $rowHeaderWidth$$2$$ + $colHeaderWidth$$, $dir$$4$$), $JSCompiler_StaticMethods_setElementWidth$$($bottomCorner$$, $scrollerWidth$$1$$ - $colHeaderWidth$$), $JSCompiler_StaticMethods_setElementHeight$$($bottomCorner$$, $scrollerHeight$$1$$ - $rowHeaderHeight$$), 
  null == $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.appendChild($bottomCorner$$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ = $bottomCorner$$));
  null != $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ && null == $bottomCorner$$ && ($JSCompiler_StaticMethods_buildCorners$self$$.$m_root$.removeChild($JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$), $JSCompiler_StaticMethods_buildCorners$self$$.$m_bottomCorner$ = null);
}, $JSCompiler_StaticMethods_setInitialScrollPosition$$ = function $$JSCompiler_StaticMethods_setInitialScrollPosition$$$($JSCompiler_StaticMethods_setInitialScrollPosition$self$$) {
  var $databody$$2_firstRow_scrollMode$$, $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_604_columnScrollPosition_scrollPosition$$inline_602$$, $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_607_columnScrollPosition$$inline_605_rowScrollPosition$$, $firstCell_rowScrollPosition$$inline_608$$;
  $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_604_columnScrollPosition_scrollPosition$$inline_602$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_options$.$getProperty$("scrollPosition");
  $databody$$2_firstRow_scrollMode$$ = void 0 == $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_604_columnScrollPosition_scrollPosition$$inline_602$$ ? null : void 0 != $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_604_columnScrollPosition_scrollPosition$$inline_602$$.key ? "key" : void 0 != $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_604_columnScrollPosition_scrollPosition$$inline_602$$.index ? "index" : null;
  if (void 0 != $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_scroller$ && null != $databody$$2_firstRow_scrollMode$$ && ($JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_604_columnScrollPosition_scrollPosition$$inline_602$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_options$, $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_607_columnScrollPosition$$inline_605_rowScrollPosition$$ = $JSCompiler_StaticMethods_extract$$($JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_604_columnScrollPosition_scrollPosition$$inline_602$$, 
  "scrollPosition", "key", "column"), $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_604_columnScrollPosition_scrollPosition$$inline_602$$ = null != $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_607_columnScrollPosition$$inline_605_rowScrollPosition$$ ? $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_607_columnScrollPosition$$inline_605_rowScrollPosition$$ : $JSCompiler_StaticMethods_extract$$($JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_604_columnScrollPosition_scrollPosition$$inline_602$$, 
  "scrollPosition", "index", "column"), $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_607_columnScrollPosition$$inline_605_rowScrollPosition$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_options$, $firstCell_rowScrollPosition$$inline_608$$ = $JSCompiler_StaticMethods_extract$$($JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_607_columnScrollPosition$$inline_605_rowScrollPosition$$, "scrollPosition", "key", "row"), $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_607_columnScrollPosition$$inline_605_rowScrollPosition$$ = 
  null != $firstCell_rowScrollPosition$$inline_608$$ ? $firstCell_rowScrollPosition$$inline_608$$ : $JSCompiler_StaticMethods_extract$$($JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_607_columnScrollPosition$$inline_605_rowScrollPosition$$, "scrollPosition", "index", "row"), null != $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_604_columnScrollPosition_scrollPosition$$inline_602$$ || null != $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_607_columnScrollPosition$$inline_605_rowScrollPosition$$)) {
    if ("key" === $databody$$2_firstRow_scrollMode$$) {
      if (null == $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_607_columnScrollPosition$$inline_605_rowScrollPosition$$ || null == $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_604_columnScrollPosition_scrollPosition$$inline_602$$) {
        $databody$$2_firstRow_scrollMode$$ = $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$m_databody$, $databody$$2_firstRow_scrollMode$$ = null != $databody$$2_firstRow_scrollMode$$ ? $databody$$2_firstRow_scrollMode$$.firstChild.firstChild : null, $firstCell_rowScrollPosition$$inline_608$$ = null != $databody$$2_firstRow_scrollMode$$ ? $databody$$2_firstRow_scrollMode$$.firstChild : null, null == $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_607_columnScrollPosition$$inline_605_rowScrollPosition$$ && 
        null != $databody$$2_firstRow_scrollMode$$ ? $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_607_columnScrollPosition$$inline_605_rowScrollPosition$$ = $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods_setInitialScrollPosition$self$$, $databody$$2_firstRow_scrollMode$$) : null == $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_604_columnScrollPosition_scrollPosition$$inline_602$$ && null != $firstCell_rowScrollPosition$$inline_608$$ && ($JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_607_columnScrollPosition$$inline_605_rowScrollPosition$$ = 
        $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods_setInitialScrollPosition$self$$, $firstCell_rowScrollPosition$$inline_608$$));
      }
      $JSCompiler_StaticMethods__indexes$$($JSCompiler_StaticMethods_setInitialScrollPosition$self$$, {row:$JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_607_columnScrollPosition$$inline_605_rowScrollPosition$$, column:$JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_604_columnScrollPosition_scrollPosition$$inline_602$$}, $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$_intialScrollPositionCallback$);
    } else {
      null == $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_607_columnScrollPosition$$inline_605_rowScrollPosition$$ ? $JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_607_columnScrollPosition$$inline_605_rowScrollPosition$$ = 0 : null == $JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_604_columnScrollPosition_scrollPosition$$inline_602$$ && ($JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_607_columnScrollPosition$$inline_605_rowScrollPosition$$ = 
      0), $JSCompiler_StaticMethods_setInitialScrollPosition$self$$.$_intialScrollPositionCallback$({row:$JSCompiler_StaticMethods_getRowScrollPosition$self$$inline_607_columnScrollPosition$$inline_605_rowScrollPosition$$, column:$JSCompiler_StaticMethods_getColumnScrollPosition$self$$inline_604_columnScrollPosition_scrollPosition$$inline_602$$});
    }
  }
};
$DvtDataGrid$$.prototype.$_intialScrollPositionCallback$ = function $$DvtDataGrid$$$$$_intialScrollPositionCallback$$($indexes$$6_rowScrollPosition$$1$$) {
  var $columnScrollPosition$$1_initialScrollLeft$$, $initialScrollTop$$ = 0;
  $columnScrollPosition$$1_initialScrollLeft$$ = -1 === $indexes$$6_rowScrollPosition$$1$$.column ? 0 : $indexes$$6_rowScrollPosition$$1$$.column;
  $indexes$$6_rowScrollPosition$$1$$ = -1 === $indexes$$6_rowScrollPosition$$1$$.row ? 0 : $indexes$$6_rowScrollPosition$$1$$.row;
  $columnScrollPosition$$1_initialScrollLeft$$ *= this.$m_avgColWidth$;
  $initialScrollTop$$ = $indexes$$6_rowScrollPosition$$1$$ * this.$m_avgRowHeight$;
  $JSCompiler_StaticMethods__initiateScroll$$(this, $columnScrollPosition$$1_initialScrollLeft$$, $initialScrollTop$$);
};
var $JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$ = function $$JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$$($JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$self$$, $expectedWidth$$) {
  var $databody$$3$$, $expected$$;
  $databody$$3$$ = $JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$self$$.$m_databody$;
  $expected$$ = null == $expectedWidth$$ ? $JSCompiler_StaticMethods_getElementWidth$$($databody$$3$$) : $expectedWidth$$;
  return $JSCompiler_StaticMethods_getElementWidth$$($databody$$3$$.firstChild) > $expected$$ ? !0 : !1;
}, $JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$ = function $$JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$$($JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$self$$, $expectedHeight$$) {
  var $databody$$4$$, $expected$$1$$;
  $databody$$4$$ = $JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$self$$.$m_databody$;
  $expected$$1$$ = null == $expectedHeight$$ ? $JSCompiler_StaticMethods_getElementHeight$$($databody$$4$$) : $expectedHeight$$;
  return $JSCompiler_StaticMethods_getElementHeight$$($databody$$4$$.firstChild) > $expected$$1$$ ? !0 : !1;
}, $JSCompiler_StaticMethods_populateAccInfo$$ = function $$JSCompiler_StaticMethods_populateAccInfo$$$($JSCompiler_StaticMethods_populateAccInfo$self$$) {
  var $summary$$, $summaryExpanded$$;
  $summary$$ = $JSCompiler_StaticMethods_populateAccInfo$self$$.$m_resources$.getTranslatedText("accessibleSummaryExact", {rownum:$JSCompiler_StaticMethods_populateAccInfo$self$$.$m_endRow$ + 1, colnum:$JSCompiler_StaticMethods_populateAccInfo$self$$.$m_endCol$ + 1});
  $JSCompiler_StaticMethods_populateAccInfo$self$$.$m_dataSource$.getExpandedKeys && ($summaryExpanded$$ = $JSCompiler_StaticMethods_populateAccInfo$self$$.$m_resources$.getTranslatedText("accessibleSummaryExpanded", {num:$JSCompiler_StaticMethods_populateAccInfo$self$$.$m_dataSource$.getExpandedKeys().length}), $summary$$ = $summary$$ + ". " + $summaryExpanded$$);
  $JSCompiler_StaticMethods_populateAccInfo$self$$.$m_accSummary$.textContent = $summary$$ + ". ";
};
$DvtDataGrid$$.prototype.$SetAccessibleContext$ = function $$DvtDataGrid$$$$$SetAccessibleContext$$($ancestors_context$$1$$) {
  var $label$$2$$, $col$$, $i$$9$$, $parent$$2$$, $cell_row$$1_text$$10$$;
  if (null != $ancestors_context$$1$$ && (null != $ancestors_context$$1$$.context && (this.$m_accessibleContext$ = $ancestors_context$$1$$.context), null != $ancestors_context$$1$$.state && (this.$m_stateInfo$.textContent = $ancestors_context$$1$$.state), null != $ancestors_context$$1$$.ancestors && $JSCompiler_StaticMethods__isDatabodyCellActive$$(this))) {
    $label$$2$$ = "";
    $ancestors_context$$1$$ = $ancestors_context$$1$$.ancestors;
    $col$$ = this.$m_active$.indexes.column;
    if (null != $col$$ && 0 <= $col$$) {
      for ($i$$9$$ = 0;$i$$9$$ < $ancestors_context$$1$$.length;$i$$9$$++) {
        0 < $i$$9$$ && ($label$$2$$ = $label$$2$$.concat(", ")), $parent$$2$$ = $ancestors_context$$1$$[$i$$9$$], $cell_row$$1_text$$10$$ = $JSCompiler_StaticMethods__findRowByKey$$(this, $parent$$2$$.key), null != $cell_row$$1_text$$10$$ && ($cell_row$$1_text$$10$$ = $cell_row$$1_text$$10$$.childNodes[$col$$ - this.$m_startCol$], $cell_row$$1_text$$10$$ = $cell_row$$1_text$$10$$.textContent, $cell_row$$1_text$$10$$ = null != $cell_row$$1_text$$10$$ ? $cell_row$$1_text$$10$$.replace(/\n|<br\s*\/?>/gi, 
        "").trim() : "", $label$$2$$ = $label$$2$$.concat($parent$$2$$.label).concat(" ").concat($cell_row$$1_text$$10$$));
      }
    }
    this.$m_accessibleContext$ = $label$$2$$.concat(", ").concat(this.$m_accessibleContext$);
  }
};
$DvtDataGrid$$.prototype.SetAccessibleContext = $DvtDataGrid$$.prototype.$SetAccessibleContext$;
var $JSCompiler_StaticMethods__updateStateInfo$$ = function $$JSCompiler_StaticMethods__updateStateInfo$$$($JSCompiler_StaticMethods__updateStateInfo$self$$, $key$$25_text$$11$$, $args$$2$$) {
  $key$$25_text$$11$$ = $JSCompiler_StaticMethods__updateStateInfo$self$$.$m_resources$.getTranslatedText($key$$25_text$$11$$, $args$$2$$);
  null != $key$$25_text$$11$$ && ($JSCompiler_StaticMethods__updateStateInfo$self$$.$m_stateInfo$.textContent = $key$$25_text$$11$$);
}, $JSCompiler_StaticMethods__updateContextInfo$$ = function $$JSCompiler_StaticMethods__updateContextInfo$$$($JSCompiler_StaticMethods__updateContextInfo$self$$, $context$$2_info$$, $skip$$) {
  var $row$$2_text$$12$$, $column$$, $level$$11$$, $rowHeader$$3$$, $columnHeader$$;
  $row$$2_text$$12$$ = $context$$2_info$$.row;
  $column$$ = $context$$2_info$$.column;
  $level$$11$$ = $context$$2_info$$.level;
  $rowHeader$$3$$ = $context$$2_info$$.rowHeader;
  $columnHeader$$ = $context$$2_info$$.columnHeader;
  $context$$2_info$$ = "";
  null != $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_accessibleContext$ || (0,window.isNaN)($row$$2_text$$12$$) || "row" == $skip$$ || ($row$$2_text$$12$$ = $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_resources$.getTranslatedText("accessibleRowContext", {index:$row$$2_text$$12$$ + 1}), null != $row$$2_text$$12$$ && ($context$$2_info$$ = $row$$2_text$$12$$));
  (0,window.isNaN)($column$$) || "column" == $skip$$ || ($row$$2_text$$12$$ = $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_resources$.getTranslatedText("accessibleColumnContext", {index:$column$$ + 1}), null != $row$$2_text$$12$$ && ($context$$2_info$$ = 0 === $context$$2_info$$.length ? $row$$2_text$$12$$ : $context$$2_info$$ + " " + $row$$2_text$$12$$));
  (0,window.isNaN)($rowHeader$$3$$) || "rowHeader" == $skip$$ || ($row$$2_text$$12$$ = $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_resources$.getTranslatedText("accessibleRowHeaderContext", {index:$rowHeader$$3$$ + 1}), null != $row$$2_text$$12$$ && ($context$$2_info$$ = 0 === $context$$2_info$$.length ? $row$$2_text$$12$$ : $context$$2_info$$ + " " + $row$$2_text$$12$$));
  (0,window.isNaN)($columnHeader$$) || "columnHeader" == $skip$$ || ($row$$2_text$$12$$ = $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_resources$.getTranslatedText("accessibleColumnHeaderContext", {index:$columnHeader$$ + 1}), null != $row$$2_text$$12$$ && ($context$$2_info$$ = 0 === $context$$2_info$$.length ? $row$$2_text$$12$$ : $context$$2_info$$ + " " + $row$$2_text$$12$$));
  (0,window.isNaN)($level$$11$$) || "level" == $skip$$ || ($row$$2_text$$12$$ = $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_resources$.getTranslatedText("accessibleLevelContext", {level:$level$$11$$ + 1}), null != $row$$2_text$$12$$ && ($context$$2_info$$ = 0 === $context$$2_info$$.length ? $row$$2_text$$12$$ : $context$$2_info$$ + " " + $row$$2_text$$12$$));
  null != $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_accessibleContext$ && ($context$$2_info$$ = $context$$2_info$$ + ", " + $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_accessibleContext$, $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_accessibleContext$ = null);
  $JSCompiler_StaticMethods__updateContextInfo$self$$.$m_contextInfo$.textContent = $context$$2_info$$;
}, $JSCompiler_StaticMethods__isCountUnknown$$ = function $$JSCompiler_StaticMethods__isCountUnknown$$$($JSCompiler_StaticMethods__isCountUnknown$self$$, $axis$$5$$) {
  var $colCount_datasource_rowCount$$1$$, $colPrecision_rowPrecision$$;
  $colCount_datasource_rowCount$$1$$ = $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_dataSource$;
  return "row" === $axis$$5$$ ? (void 0 === $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_isEstimateRowCount$ && ($colPrecision_rowPrecision$$ = $colCount_datasource_rowCount$$1$$.getCountPrecision("row"), $colCount_datasource_rowCount$$1$$ = $colCount_datasource_rowCount$$1$$.getCount("row"), $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_isEstimateRowCount$ = "estimate" === $colPrecision_rowPrecision$$ || 0 > $colCount_datasource_rowCount$$1$$ ? !0 : !1), $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_isEstimateRowCount$) : 
  "column" === $axis$$5$$ ? (void 0 === $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_isEstimateColumnCount$ && ($colPrecision_rowPrecision$$ = $colCount_datasource_rowCount$$1$$.getCountPrecision("column"), $colCount_datasource_rowCount$$1$$ = $colCount_datasource_rowCount$$1$$.getCount("column"), $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_isEstimateColumnCount$ = "estimate" === $colPrecision_rowPrecision$$ || 0 > $colCount_datasource_rowCount$$1$$ ? !0 : !1), $JSCompiler_StaticMethods__isCountUnknown$self$$.$m_isEstimateColumnCount$) : 
  !1;
}, $JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$ = function $$JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$$($JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$self$$, $axis$$6$$) {
  return $JSCompiler_StaticMethods__isCountUnknown$$($JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$self$$, $axis$$6$$) || $JSCompiler_StaticMethods__isHighWatermarkScrolling$$($JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$self$$);
}, $JSCompiler_StaticMethods_buildHeaders$$ = function $$JSCompiler_StaticMethods_buildHeaders$$$($JSCompiler_StaticMethods_buildHeaders$self$$, $axis$$7$$, $styleClass$$) {
  var $root$$9$$ = window.document.createElement("div");
  $root$$9$$.id = $JSCompiler_StaticMethods_createSubId$$($JSCompiler_StaticMethods_buildHeaders$self$$, $axis$$7$$ + "Header");
  $root$$9$$.className = $styleClass$$ + " " + $JSCompiler_StaticMethods_buildHeaders$self$$.getMappedStyle("header");
  "column" === $axis$$7$$ ? $JSCompiler_StaticMethods_buildHeaders$self$$.$m_colHeader$ = $root$$9$$ : "row" === $axis$$7$$ && ($JSCompiler_StaticMethods_buildHeaders$self$$.$m_rowHeader$ = $root$$9$$);
  $JSCompiler_StaticMethods_buildHeaders$self$$.fetchHeaders($axis$$7$$, 0, $root$$9$$);
  return $root$$9$$;
};
$DvtDataGrid$$.prototype.fetchHeaders = function $$DvtDataGrid$$$$fetchHeaders$($axis$$8_headerRange$$1$$, $start$$9$$, $header$$2$$, $fetchSize$$, $callbacks$$3_successCallback$$26$$) {
  this.$m_fetching$[$axis$$8_headerRange$$1$$] || (this.$m_fetching$[$axis$$8_headerRange$$1$$] = {start:$start$$9$$}, void 0 == $fetchSize$$ && ($fetchSize$$ = $JSCompiler_StaticMethods_getFetchSize$$(this, $axis$$8_headerRange$$1$$)), $axis$$8_headerRange$$1$$ = {axis:$axis$$8_headerRange$$1$$, start:$start$$9$$, count:$fetchSize$$, header:$header$$2$$}, $callbacks$$3_successCallback$$26$$ = null != $callbacks$$3_successCallback$$26$$ && null != $callbacks$$3_successCallback$$26$$.success ? $callbacks$$3_successCallback$$26$$.success : 
  this.$handleHeadersFetchSuccess$, $JSCompiler_StaticMethods_showStatusText$$(this), this.$m_dataSource$.fetchHeaders($axis$$8_headerRange$$1$$, {success:$callbacks$$3_successCallback$$26$$, error:this.$handleHeadersFetchError$}, {success:this, error:this}));
};
$DvtDataGrid$$.prototype.$handleHeadersFetchSuccess$ = function $$DvtDataGrid$$$$$handleHeadersFetchSuccess$$($results$$, $headerRange$$3$$, $rowInsert$$) {
  var $axis$$10_scroller$$inline_619$$, $root$$10$$, $start$$10$$, $count$$6$$;
  if ($headerRange$$3$$.start == this.$m_fetching$[$headerRange$$3$$.axis].start) {
    $axis$$10_scroller$$inline_619$$ = $headerRange$$3$$.axis;
    this.$m_fetching$[$axis$$10_scroller$$inline_619$$] = !1;
    $root$$10$$ = $headerRange$$3$$.header;
    $start$$10$$ = $headerRange$$3$$.start;
    $count$$6$$ = this.$m_dataSource$.getCount($axis$$10_scroller$$inline_619$$);
    if ("column" === $axis$$10_scroller$$inline_619$$) {
      a: {
        var $renderer$$inline_620$$, $totalColumnWidth$$inline_621$$, $left$$inline_622$$, $headerCount$$inline_623$$, $c$$inline_624$$, $index$$inline_625_returnVal$$inline_628$$, $isAppend$$inline_626$$, $fragment$$inline_627$$, $className$$inline_629$$;
        null == this.$m_columnHeaderLevelCount$ && (this.$m_columnHeaderLevelCount$ = $results$$.getLevelCount());
        $headerCount$$inline_623$$ = $results$$.getCount();
        if ($root$$10$$.hasChildNodes()) {
          if (0 == $headerCount$$inline_623$$ && $JSCompiler_StaticMethods__isCountUnknown$$(this, "column")) {
            this.$m_stopColumnHeaderFetch$ = !0;
            break a;
          }
          $axis$$10_scroller$$inline_619$$ = $root$$10$$.firstChild;
          -1 == this.$m_endColHeader$ && "" == $root$$10$$.className && ($root$$10$$.className = this.getMappedStyle("colheader") + " " + this.getMappedStyle("header"), $root$$10$$.style.height = "", $axis$$10_scroller$$inline_619$$.style.height = "");
        } else {
          $axis$$10_scroller$$inline_619$$ = window.document.createElement("div"), $axis$$10_scroller$$inline_619$$.className = this.getMappedStyle("scroller") + ($JSCompiler_StaticMethods_isTouchDevice$$(this.$m_utils$) ? " " + this.getMappedStyle("scroller-mobile") : ""), 0 == $headerCount$$inline_623$$ && ($root$$10$$.className = "", $JSCompiler_StaticMethods_setElementHeight$$($root$$10$$, 0), $JSCompiler_StaticMethods_setElementHeight$$($axis$$10_scroller$$inline_619$$, 0), this.$m_stopColumnHeaderFetch$ = 
          !0);
        }
        $renderer$$inline_620$$ = $JSCompiler_StaticMethods_getRenderer$$(this.$m_options$, "column");
        $totalColumnWidth$$inline_621$$ = 0;
        $left$$inline_622$$ = ($isAppend$$inline_626$$ = $start$$10$$ > this.$m_endColHeader$) ? this.$m_endColHeaderPixel$ : this.$m_startColHeaderPixel$;
        $fragment$$inline_627$$ = window.document.createDocumentFragment();
        $c$$inline_624$$ = 0;
        for ($className$$inline_629$$ = this.getMappedStyle("headercell") + " " + this.getMappedStyle("colheadercell");0 < $headerCount$$inline_623$$ - $c$$inline_624$$;) {
          $index$$inline_625_returnVal$$inline_628$$ = $isAppend$$inline_626$$ ? $start$$10$$ + $c$$inline_624$$ : $start$$10$$ + ($headerCount$$inline_623$$ - 1 - $c$$inline_624$$), $index$$inline_625_returnVal$$inline_628$$ = $JSCompiler_StaticMethods_buildLevelHeaders$$(this, $fragment$$inline_627$$, $index$$inline_625_returnVal$$inline_628$$, 0, $isAppend$$inline_626$$ ? $left$$inline_622$$ + $totalColumnWidth$$inline_621$$ : $left$$inline_622$$ - $totalColumnWidth$$inline_621$$, 0, $isAppend$$inline_626$$, 
          !1, $renderer$$inline_620$$, $results$$, "column", $className$$inline_629$$, this.$m_columnHeaderLevelCount$), $c$$inline_624$$ += $index$$inline_625_returnVal$$inline_628$$.count, $totalColumnWidth$$inline_621$$ += $index$$inline_625_returnVal$$inline_628$$.totalWidth, null == this.$m_colHeaderHeight$ && (this.$m_colHeaderHeight$ = $index$$inline_625_returnVal$$inline_628$$.totalHeight, $JSCompiler_StaticMethods_setElementHeight$$($root$$10$$, this.$m_colHeaderHeight$));
        }
        $isAppend$$inline_626$$ ? $axis$$10_scroller$$inline_619$$.appendChild($fragment$$inline_627$$) : $axis$$10_scroller$$inline_619$$.insertBefore($fragment$$inline_627$$, $axis$$10_scroller$$inline_619$$.firstChild);
        $isAppend$$inline_626$$ ? (this.$m_endColHeader$ = $start$$10$$ + $headerCount$$inline_623$$ - 1, this.$m_endColHeaderPixel$ += $totalColumnWidth$$inline_621$$) : (this.$m_startColHeader$ -= $headerCount$$inline_623$$, this.$m_startColHeaderPixel$ -= $totalColumnWidth$$inline_621$$);
        $root$$10$$.hasChildNodes() || $root$$10$$.appendChild($axis$$10_scroller$$inline_619$$);
        !$JSCompiler_StaticMethods__isCountUnknown$$(this, "column") && $JSCompiler_StaticMethods__isHighWatermarkScrolling$$(this) && this.$m_endColHeader$ + 1 >= $count$$6$$ && (this.$m_stopColumnHeaderFetch$ = !0);
      }
      $results$$.getCount() < $headerRange$$3$$.count && (this.$m_stopColumnHeaderFetch$ = !0);
    } else {
      "row" === $axis$$10_scroller$$inline_619$$ && ($JSCompiler_StaticMethods_buildRowHeaders$$(this, $root$$10$$, $results$$, $start$$10$$, $count$$6$$, $rowInsert$$), $results$$.getCount() < $headerRange$$3$$.count && (this.$m_stopRowHeaderFetch$ = !0));
    }
    $JSCompiler_StaticMethods_isFetchComplete$$(this) && ($JSCompiler_StaticMethods_hideStatusText$$(this), $JSCompiler_StaticMethods__shouldInitialize$$(this) && !$rowInsert$$ && $JSCompiler_StaticMethods__handleInitialization$$(this, !0));
    this.$m_initialized$ && $JSCompiler_StaticMethods__syncScroller$$(this);
  }
};
$DvtDataGrid$$.prototype.$handleHeadersFetchError$ = function $$DvtDataGrid$$$$$handleHeadersFetchError$$($error$$3$$, $headerRange$$4$$) {
  this.$m_fetching$[$headerRange$$4$$.axis] = !1;
};
var $JSCompiler_StaticMethods_createHeaderContext$$ = function $$JSCompiler_StaticMethods_createHeaderContext$$$($JSCompiler_StaticMethods_createHeaderContext$self$$, $axis$$12_key$$26$$, $index$$51$$, $data$$21$$, $metadata$$, $elem$$3$$, $level$$12$$, $extent$$, $depth$$1$$) {
  var $headerContext$$, $prop$$4$$;
  $headerContext$$ = {};
  $headerContext$$.axis = $axis$$12_key$$26$$;
  $headerContext$$.index = $index$$51$$;
  $headerContext$$.data = $data$$21$$;
  $headerContext$$.component = $JSCompiler_StaticMethods_createHeaderContext$self$$;
  $headerContext$$.datasource = $JSCompiler_StaticMethods_createHeaderContext$self$$.$m_dataSource$;
  $headerContext$$.level = $level$$12$$;
  $headerContext$$.depth = $depth$$1$$;
  $headerContext$$.extent = $extent$$;
  null != $elem$$3$$ && ($headerContext$$.parentElement = $elem$$3$$.firstChild);
  $axis$$12_key$$26$$ = $metadata$$.key;
  null != $axis$$12_key$$26$$ && null != $elem$$3$$ && $JSCompiler_StaticMethods__setKey$$($JSCompiler_StaticMethods_createHeaderContext$self$$, $elem$$3$$, $axis$$12_key$$26$$);
  for ($prop$$4$$ in $metadata$$) {
    $metadata$$.hasOwnProperty($prop$$4$$) && ($headerContext$$[$prop$$4$$] = $metadata$$[$prop$$4$$]);
  }
  null != $JSCompiler_StaticMethods_createHeaderContext$self$$.$m_createContextCallback$ && $JSCompiler_StaticMethods_createHeaderContext$self$$.$m_createContextCallback$.call($JSCompiler_StaticMethods_createHeaderContext$self$$, $headerContext$$);
  return $headerContext$$;
}, $JSCompiler_StaticMethods_buildLevelHeaders$$ = function $$JSCompiler_StaticMethods_buildLevelHeaders$$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $fragment$$1$$, $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$, $level$$13$$, $left$$4_totalLevelDimension$$, $top$$2_totalHeaderDimension$$, $isAppend$$1$$, $insert$$, $JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$, 
$headerSet$$1$$, $axis$$13_sortIcon$$inline_644$$, $className$$8$$, $totalLevels$$) {
  var $getLevelDimension_i$$10$$, $getHeaderDimension_headerDimensionValue$$, $levelDimension$$, $headerDimension$$, $dimensionToAdjust$$, $dimensionToAdjustValue$$, $dimensionSecond$$, $dimensionSecondValue$$, $direction$$inline_646_headerContext$$1_start$$12$$, $end$$3_headerMetadata$$, $getGrouping_header$$3$$, $extentInfo_headerDepth$$, $headerExtent$$, $headerContent_patchBefore$$, $headerData_patchAfter$$, $groupingContainer$$, $returnVal$$1$$, $levelDimensionValue$$, $totalHeaderDimensionValue$$, 
  $headerCount$$1$$, $d_inlineStyle_nextIndex_totalLevelDimensionValue$$, $styleClass$$1$$;
  $headerCount$$1$$ = $totalHeaderDimensionValue$$ = $d_inlineStyle_nextIndex_totalLevelDimensionValue$$ = $levelDimensionValue$$ = 0;
  "row" === $axis$$13_sortIcon$$inline_644$$ ? ($getLevelDimension_i$$10$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$_getRowHeaderLevelWidth$.bind($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$), $getHeaderDimension_headerDimensionValue$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$getRowHeight$.bind($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$), $getGrouping_header$$3$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$_getRowHeaderContainer$.bind($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$), 
  $levelDimension$$ = "width", $headerDimension$$ = "height", $dimensionToAdjust$$ = "top", $dimensionToAdjustValue$$ = $top$$2_totalHeaderDimension$$, $dimensionSecond$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_resources$.isRTLMode() ? "right" : "left", $dimensionSecondValue$$ = $left$$4_totalLevelDimension$$, $left$$4_totalLevelDimension$$ = "totalWidth", $top$$2_totalHeaderDimension$$ = "totalHeight", $direction$$inline_646_headerContext$$1_start$$12$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_startRowHeader$, 
  $end$$3_headerMetadata$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_endRowHeader$) : ($getLevelDimension_i$$10$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$_getColumnHeaderLevelHeight$.bind($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$), $getHeaderDimension_headerDimensionValue$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$getColumnWidth$.bind($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$), $getGrouping_header$$3$$ = 
  $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$_getColumnHeaderContainer$.bind($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$), $levelDimension$$ = "height", $headerDimension$$ = "width", $dimensionToAdjust$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_resources$.isRTLMode() ? "right" : "left", $dimensionToAdjustValue$$ = $left$$4_totalLevelDimension$$, $dimensionSecond$$ = "top", $dimensionSecondValue$$ = $top$$2_totalHeaderDimension$$, $left$$4_totalLevelDimension$$ = 
  "totalHeight", $top$$2_totalHeaderDimension$$ = "totalWidth", $direction$$inline_646_headerContext$$1_start$$12$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_startColHeader$, $end$$3_headerMetadata$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_endColHeader$);
  $extentInfo_headerDepth$$ = $headerSet$$1$$.getExtent($JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$, $level$$13$$);
  $headerExtent$$ = $extentInfo_headerDepth$$.extent;
  $headerContent_patchBefore$$ = $extentInfo_headerDepth$$.more.before;
  $headerData_patchAfter$$ = $extentInfo_headerDepth$$.more.after;
  $extentInfo_headerDepth$$ = $headerSet$$1$$.getDepth($JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$, $level$$13$$);
  if ($headerContent_patchBefore$$ && $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ === $end$$3_headerMetadata$$ + 1) {
    $groupingContainer$$ = $getGrouping_header$$3$$($JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ - 1, $level$$13$$, 0);
    $JSCompiler_StaticMethods__setAttribute$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, "extent", $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, "extent") + $headerExtent$$);
    $getGrouping_header$$3$$ = $groupingContainer$$.firstChild;
    $levelDimensionValue$$ = $JSCompiler_StaticMethods_getElementDir$$($getGrouping_header$$3$$, $levelDimension$$);
    for ($getLevelDimension_i$$10$$ = 0;$getLevelDimension_i$$10$$ < $headerExtent$$;$getLevelDimension_i$$10$$) {
      $returnVal$$1$$ = "column" === $axis$$13_sortIcon$$inline_644$$ ? $JSCompiler_StaticMethods_buildLevelHeaders$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ + $getLevelDimension_i$$10$$, $level$$13$$ + $extentInfo_headerDepth$$, $dimensionToAdjustValue$$, $dimensionSecondValue$$ + $levelDimensionValue$$, $isAppend$$1$$, 
      $insert$$, $JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$, $headerSet$$1$$, $axis$$13_sortIcon$$inline_644$$, $className$$8$$, $totalLevels$$) : $JSCompiler_StaticMethods_buildLevelHeaders$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ + $getLevelDimension_i$$10$$, 
      $level$$13$$ + $extentInfo_headerDepth$$, $dimensionSecondValue$$ + $levelDimensionValue$$, $dimensionToAdjustValue$$, $isAppend$$1$$, $insert$$, $JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$, $headerSet$$1$$, $axis$$13_sortIcon$$inline_644$$, $className$$8$$, $totalLevels$$), $dimensionToAdjustValue$$ += $returnVal$$1$$[$top$$2_totalHeaderDimension$$], $totalHeaderDimensionValue$$ += $returnVal$$1$$[$top$$2_totalHeaderDimension$$], $headerCount$$1$$ += 
      $returnVal$$1$$.count, $getLevelDimension_i$$10$$ += $returnVal$$1$$.count;
    }
    $JSCompiler_StaticMethods_setElementDir$$($getGrouping_header$$3$$, $JSCompiler_StaticMethods_getElementDir$$($getGrouping_header$$3$$, $headerDimension$$) + $totalHeaderDimensionValue$$, $headerDimension$$);
  } else {
    if ($headerData_patchAfter$$ && $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ === $direction$$inline_646_headerContext$$1_start$$12$$ - 1) {
      $groupingContainer$$ = $getGrouping_header$$3$$($JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ + 1, $level$$13$$, 0);
      $JSCompiler_StaticMethods__setAttribute$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, "extent", $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, "extent") + $headerExtent$$);
      $JSCompiler_StaticMethods__setAttribute$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, "start", $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, "start") - $headerExtent$$);
      $getGrouping_header$$3$$ = $groupingContainer$$.firstChild;
      $levelDimensionValue$$ = $JSCompiler_StaticMethods_getElementDir$$($getGrouping_header$$3$$, $levelDimension$$);
      for ($getLevelDimension_i$$10$$ = 0;$getLevelDimension_i$$10$$ < $headerExtent$$;$getLevelDimension_i$$10$$) {
        $returnVal$$1$$ = "column" === $axis$$13_sortIcon$$inline_644$$ ? $JSCompiler_StaticMethods_buildLevelHeaders$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ - $getLevelDimension_i$$10$$, $level$$13$$ + $extentInfo_headerDepth$$, $dimensionToAdjustValue$$, $dimensionSecondValue$$ + $levelDimensionValue$$, $isAppend$$1$$, 
        $insert$$, $JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$, $headerSet$$1$$, $axis$$13_sortIcon$$inline_644$$, $className$$8$$, $totalLevels$$) : $JSCompiler_StaticMethods_buildLevelHeaders$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ - $getLevelDimension_i$$10$$, 
        $level$$13$$ + $extentInfo_headerDepth$$, $dimensionSecondValue$$ + $levelDimensionValue$$, $dimensionToAdjustValue$$, $isAppend$$1$$, $insert$$, $JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$, $headerSet$$1$$, $axis$$13_sortIcon$$inline_644$$, $className$$8$$, $totalLevels$$), $dimensionToAdjustValue$$ -= $returnVal$$1$$[$top$$2_totalHeaderDimension$$], $totalHeaderDimensionValue$$ += $returnVal$$1$$[$top$$2_totalHeaderDimension$$], $headerCount$$1$$ += 
        $returnVal$$1$$.count, $getLevelDimension_i$$10$$ += $returnVal$$1$$.count;
      }
      $JSCompiler_StaticMethods_setElementDir$$($getGrouping_header$$3$$, $JSCompiler_StaticMethods_getElementDir$$($getGrouping_header$$3$$, $headerDimension$$) + $totalHeaderDimensionValue$$, $headerDimension$$);
      $JSCompiler_StaticMethods_setElementDir$$($getGrouping_header$$3$$, $dimensionToAdjustValue$$, $dimensionToAdjust$$);
    } else {
      $headerData_patchAfter$$ = $headerSet$$1$$.getData($JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$, $level$$13$$);
      $end$$3_headerMetadata$$ = $headerSet$$1$$.getMetadata($JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$, $level$$13$$);
      $headerContent_patchBefore$$ = window.document.createElement("div");
      $headerContent_patchBefore$$.className = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("headercellcontent");
      $getGrouping_header$$3$$ = window.document.createElement("div");
      $getGrouping_header$$3$$.appendChild($headerContent_patchBefore$$);
      $direction$$inline_646_headerContext$$1_start$$12$$ = $JSCompiler_StaticMethods_createHeaderContext$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $axis$$13_sortIcon$$inline_644$$, $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$, $headerData_patchAfter$$, $end$$3_headerMetadata$$, $getGrouping_header$$3$$, $level$$13$$, $headerExtent$$, $extentInfo_headerDepth$$);
      $getGrouping_header$$3$$.id = $JSCompiler_StaticMethods_createSubId$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $axis$$13_sortIcon$$inline_644$$.charAt(0) + $direction$$inline_646_headerContext$$1_start$$12$$.key);
      $getGrouping_header$$3$$[$JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_resources$.getMappedAttribute("context")] = $direction$$inline_646_headerContext$$1_start$$12$$;
      $d_inlineStyle_nextIndex_totalLevelDimensionValue$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_options$.$getInlineStyle$($axis$$13_sortIcon$$inline_644$$, $direction$$inline_646_headerContext$$1_start$$12$$);
      $styleClass$$1$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_options$.$getStyleClass$($axis$$13_sortIcon$$inline_644$$, $direction$$inline_646_headerContext$$1_start$$12$$);
      null != $d_inlineStyle_nextIndex_totalLevelDimensionValue$$ && ($getGrouping_header$$3$$.style.cssText = $d_inlineStyle_nextIndex_totalLevelDimensionValue$$);
      $getGrouping_header$$3$$.className = $className$$8$$;
      null != $styleClass$$1$$ && ($getGrouping_header$$3$$.className += " " + $styleClass$$1$$);
      for ($d_inlineStyle_nextIndex_totalLevelDimensionValue$$ = 0;$d_inlineStyle_nextIndex_totalLevelDimensionValue$$ < $extentInfo_headerDepth$$;$d_inlineStyle_nextIndex_totalLevelDimensionValue$$++) {
        $levelDimensionValue$$ += $getLevelDimension_i$$10$$($level$$13$$ + $d_inlineStyle_nextIndex_totalLevelDimensionValue$$, $getGrouping_header$$3$$);
      }
      $JSCompiler_StaticMethods_setElementDir$$($getGrouping_header$$3$$, $dimensionToAdjustValue$$, $dimensionToAdjust$$);
      $JSCompiler_StaticMethods_setElementDir$$($getGrouping_header$$3$$, $dimensionSecondValue$$, $dimensionSecond$$);
      $JSCompiler_StaticMethods_setElementDir$$($getGrouping_header$$3$$, $levelDimensionValue$$, $levelDimension$$);
      $getHeaderDimension_headerDimensionValue$$ = $getHeaderDimension_headerDimensionValue$$($getGrouping_header$$3$$, $direction$$inline_646_headerContext$$1_start$$12$$.key);
      $JSCompiler_StaticMethods__setAttribute$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $getGrouping_header$$3$$, "depth", $extentInfo_headerDepth$$);
      $level$$13$$ != $totalLevels$$ - 1 && ($groupingContainer$$ = window.document.createElement("div"), $groupingContainer$$.className = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("groupingcontainer"), $groupingContainer$$.appendChild($getGrouping_header$$3$$), $JSCompiler_StaticMethods__setAttribute$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, "start", $isAppend$$1$$ ? $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ : 
      $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ - $headerExtent$$ + 1), $JSCompiler_StaticMethods__setAttribute$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, "extent", $headerExtent$$), $JSCompiler_StaticMethods__setAttribute$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $groupingContainer$$, "level", $level$$13$$));
      if ($level$$13$$ + $extentInfo_headerDepth$$ == $totalLevels$$) {
        $JSCompiler_StaticMethods_setElementDir$$($getGrouping_header$$3$$, $getHeaderDimension_headerDimensionValue$$, $headerDimension$$), $totalHeaderDimensionValue$$ += $getHeaderDimension_headerDimensionValue$$, $headerCount$$1$$++, $d_inlineStyle_nextIndex_totalLevelDimensionValue$$ = $levelDimensionValue$$, $isAppend$$1$$ || $insert$$ || ($dimensionToAdjustValue$$ -= $getHeaderDimension_headerDimensionValue$$, $JSCompiler_StaticMethods_setElementDir$$($getGrouping_header$$3$$, $dimensionToAdjustValue$$, 
        $dimensionToAdjust$$));
      } else {
        for ($getLevelDimension_i$$10$$ = 0;$getLevelDimension_i$$10$$ < $headerExtent$$;$getLevelDimension_i$$10$$++) {
          $d_inlineStyle_nextIndex_totalLevelDimensionValue$$ = $isAppend$$1$$ ? $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ + $getLevelDimension_i$$10$$ : $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ - $getLevelDimension_i$$10$$, $returnVal$$1$$ = "column" === $axis$$13_sortIcon$$inline_644$$ ? $JSCompiler_StaticMethods_buildLevelHeaders$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, 
          $groupingContainer$$, $d_inlineStyle_nextIndex_totalLevelDimensionValue$$, $level$$13$$ + $extentInfo_headerDepth$$, $dimensionToAdjustValue$$, $dimensionSecondValue$$ + $levelDimensionValue$$, $isAppend$$1$$, $insert$$, $JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$, $headerSet$$1$$, $axis$$13_sortIcon$$inline_644$$, $className$$8$$, $totalLevels$$) : $JSCompiler_StaticMethods_buildLevelHeaders$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, 
          $groupingContainer$$, $d_inlineStyle_nextIndex_totalLevelDimensionValue$$, $level$$13$$ + $extentInfo_headerDepth$$, $dimensionSecondValue$$ + $levelDimensionValue$$, $dimensionToAdjustValue$$, $isAppend$$1$$, $insert$$, $JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$, $headerSet$$1$$, $axis$$13_sortIcon$$inline_644$$, $className$$8$$, $totalLevels$$), $getHeaderDimension_headerDimensionValue$$ = $returnVal$$1$$[$top$$2_totalHeaderDimension$$], 
          $dimensionToAdjustValue$$ = $isAppend$$1$$ ? $dimensionToAdjustValue$$ + $getHeaderDimension_headerDimensionValue$$ : $dimensionToAdjustValue$$ - $getHeaderDimension_headerDimensionValue$$, $totalHeaderDimensionValue$$ += $getHeaderDimension_headerDimensionValue$$, $headerCount$$1$$ += $returnVal$$1$$.count, $getLevelDimension_i$$10$$ += $returnVal$$1$$.count - 1;
        }
        $d_inlineStyle_nextIndex_totalLevelDimensionValue$$ = $levelDimensionValue$$ + $returnVal$$1$$[$left$$4_totalLevelDimension$$];
        $isAppend$$1$$ || $insert$$ || $JSCompiler_StaticMethods_setElementDir$$($getGrouping_header$$3$$, $dimensionToAdjustValue$$, $dimensionToAdjust$$);
        $JSCompiler_StaticMethods_setElementDir$$($getGrouping_header$$3$$, $totalHeaderDimensionValue$$, $headerDimension$$);
      }
      "column" === $axis$$13_sortIcon$$inline_644$$ ? $JSCompiler_StaticMethods__isLastColumn$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ + $headerExtent$$ - 1) && $JSCompiler_StaticMethods_getRowHeaderWidth$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$) + $dimensionToAdjustValue$$ + $getHeaderDimension_headerDimensionValue$$ >= 
      $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getWidth() && ("left" === $dimensionToAdjust$$ ? $getGrouping_header$$3$$.style.borderRightStyle = "none" : $getGrouping_header$$3$$.style.borderLeftStyle = "none") : $JSCompiler_StaticMethods__isLastRow$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ + $headerExtent$$ - 1) && 
      $JSCompiler_StaticMethods_getColumnHeaderHeight$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$) + $dimensionToAdjustValue$$ + $getHeaderDimension_headerDimensionValue$$ >= $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getHeight() && ($getGrouping_header$$3$$.style.borderBottomStyle = "none");
      "column" == $axis$$13_sortIcon$$inline_644$$ ? ($JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ = $JSCompiler_StaticMethods_isResizable$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_options$, $axis$$13_sortIcon$$inline_644$$, "width", $direction$$inline_646_headerContext$$1_start$$12$$), $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ = 
      "enable" == $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ ? !0 : !1) : "row" == $axis$$13_sortIcon$$inline_644$$ ? ($JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ = $JSCompiler_StaticMethods_isResizable$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_options$, $axis$$13_sortIcon$$inline_644$$, 
      "height", $direction$$inline_646_headerContext$$1_start$$12$$), $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ = "enable" == $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ ? !0 : !1) : $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ = 
      !1;
      $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ && $JSCompiler_StaticMethods__setAttribute$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $getGrouping_header$$3$$, "resizable", "true");
      null != $groupingContainer$$ ? $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_root$.appendChild($groupingContainer$$) : $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_root$.appendChild($getGrouping_header$$3$$);
      null != $JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$ ? ($JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ = $JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$.call($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $direction$$inline_646_headerContext$$1_start$$12$$), null != $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ && 
      (null === $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$.parentNode ? $headerContent_patchBefore$$.appendChild($JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$) : null == $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$.parentNode && 
      $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$.toString && ($JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$ = window.document.createElement("span"), $JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$.className = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("headercelltext"), 
      $JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$.appendChild(window.document.createTextNode($JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$.toString())), $headerContent_patchBefore$$.appendChild($JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$))), $JSCompiler_StaticMethods__disableAllFocusableElements$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, 
      $getGrouping_header$$3$$)) : (null == $headerData_patchAfter$$ && ($headerData_patchAfter$$ = ""), $JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$ = window.document.createElement("span"), $JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$.className = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("headercelltext"), $JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$.appendChild(window.document.createTextNode($headerData_patchAfter$$.toString())), 
      $headerContent_patchBefore$$.appendChild($JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$));
      if ($JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$ = "column" === $axis$$13_sortIcon$$inline_644$$) {
        $JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_dataSource$.getCapability("sort"), $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_options$.$getProperty$("sortable", $axis$$13_sortIcon$$inline_644$$, $direction$$inline_646_headerContext$$1_start$$12$$), 
        $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ = null != $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ ? $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ : !1, $JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$ = 
        "enable" !== $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ && "auto" !== $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ || "full" !== $JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$ && $JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$ !== 
        $axis$$13_sortIcon$$inline_644$$ ? !1 : !0;
      }
      $JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$ && (null != $end$$3_headerMetadata$$.sortDirection && null == $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_sortInfo$ && ($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_sortInfo$ = {}, $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_sortInfo$.key = $end$$3_headerMetadata$$.key, $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_sortInfo$.direction = 
      $end$$3_headerMetadata$$.sortDirection, $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_sortInfo$.axis = $axis$$13_sortIcon$$inline_644$$), $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$ = window.document.createElement("div"), $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$.className = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("sortcontainer"), 
      $axis$$13_sortIcon$$inline_644$$ = window.document.createElement("div"), $JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$ = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("icon") + " " + $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("clickableicon"), $direction$$inline_646_headerContext$$1_start$$12$$.key === (null != $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_sortInfo$ ? 
      $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_sortInfo$.key : null) ? ($direction$$inline_646_headerContext$$1_start$$12$$ = null != $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_sortInfo$ ? $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.$m_sortInfo$.direction : null, "ascending" === $direction$$inline_646_headerContext$$1_start$$12$$ ? $axis$$13_sortIcon$$inline_644$$.className = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("sortascending") + 
      " " + $JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$ + " " + $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("default") : "descending" === $direction$$inline_646_headerContext$$1_start$$12$$ && ($axis$$13_sortIcon$$inline_644$$.className = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("sortdescending") + " " + $JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$ + 
      " " + $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("default"))) : ($JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$ += " " + $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("disabled"), $axis$$13_sortIcon$$inline_644$$.className = $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("sortascending") + " " + $JSCompiler_temp$$16_capability$$inline_639_iconClassString$$inline_645_renderer$$1_textWrapper$$), 
      $JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$.appendChild($axis$$13_sortIcon$$inline_644$$), $getGrouping_header$$3$$.appendChild($JSCompiler_inline_result$$163_content_index$$53_resizable$$inline_634_sortContainer$$inline_647_sortable$$inline_640_value$$inline_10868$$), $JSCompiler_StaticMethods__setAttribute$$($JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$, $getGrouping_header$$3$$, 
      "sortable", "true"));
      $isAppend$$1$$ ? null != $groupingContainer$$ ? $fragment$$1$$.appendChild($groupingContainer$$) : $fragment$$1$$.appendChild($getGrouping_header$$3$$) : null != $groupingContainer$$ ? $fragment$$1$$.firstChild ? $JSCompiler_StaticMethods_containsCSSClassName$$($fragment$$1$$.firstChild, $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("groupingcontainer")) ? $fragment$$1$$.insertBefore($groupingContainer$$, $fragment$$1$$.firstChild) : $JSCompiler_StaticMethods_containsCSSClassName$$($fragment$$1$$.firstChild, 
      $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("headercell")) && $fragment$$1$$.insertBefore($groupingContainer$$, $fragment$$1$$.firstChild.nextSibling) : $fragment$$1$$.appendChild($groupingContainer$$) : $JSCompiler_StaticMethods_containsCSSClassName$$($fragment$$1$$, $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.getMappedStyle("groupingcontainer")) ? $fragment$$1$$.insertBefore($getGrouping_header$$3$$, $fragment$$1$$.firstChild.nextSibling) : 
      $fragment$$1$$.insertBefore($getGrouping_header$$3$$, $fragment$$1$$.firstChild);
    }
  }
  $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$ = {};
  $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$[$left$$4_totalLevelDimension$$] = $d_inlineStyle_nextIndex_totalLevelDimensionValue$$;
  $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$[$top$$2_totalHeaderDimension$$] = $totalHeaderDimensionValue$$;
  $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$.count = $headerCount$$1$$;
  return $JSCompiler_StaticMethods_buildLevelHeaders$self_returnObj$$;
}, $JSCompiler_StaticMethods_buildRowHeaders$$ = function $$JSCompiler_StaticMethods_buildRowHeaders$$$($JSCompiler_StaticMethods_buildRowHeaders$self$$, $headerRoot$$1$$, $headerSet$$2_prev$$, $rowHeader$$inline_650_start$$13$$, $totalCount$$1$$, $rowInsert$$1$$, $animation$$) {
  var $headerCount$$2$$, $scroller$$5$$, $renderer$$2$$, $isAppend$$2$$, $top$$3$$, $adjustment$$inline_651_totalRowHeight$$, $className$$9$$, $fragment$$2$$, $index$$54_returnVal$$2$$, $rowHeaderContent$$, $referenceRow$$, $c$$1$$;
  null == $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_rowHeaderLevelCount$ && ($JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_rowHeaderLevelCount$ = $headerSet$$2_prev$$.getLevelCount());
  $headerCount$$2$$ = $headerSet$$2_prev$$.getCount();
  if (!$animation$$) {
    if ($headerRoot$$1$$.hasChildNodes()) {
      if (0 == $headerCount$$2$$ && $JSCompiler_StaticMethods__isCountUnknown$$($JSCompiler_StaticMethods_buildRowHeaders$self$$, "row")) {
        $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_stopRowHeaderFetch$ = !0;
        return;
      }
      $scroller$$5$$ = $headerRoot$$1$$.firstChild;
      -1 == $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeader$ && "" == $headerRoot$$1$$.className && ($headerRoot$$1$$.className = $JSCompiler_StaticMethods_buildRowHeaders$self$$.getMappedStyle("rowheader") + " " + $JSCompiler_StaticMethods_buildRowHeaders$self$$.getMappedStyle("header"), $headerRoot$$1$$.style.width = "", $scroller$$5$$.style.width = "");
    } else {
      $scroller$$5$$ = window.document.createElement("div"), $scroller$$5$$.className = $JSCompiler_StaticMethods_buildRowHeaders$self$$.getMappedStyle("scroller") + ($JSCompiler_StaticMethods_isTouchDevice$$($JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_utils$) ? " " + $JSCompiler_StaticMethods_buildRowHeaders$self$$.getMappedStyle("scroller-mobile") : ""), 0 == $headerCount$$2$$ && ($headerRoot$$1$$.className = "", $JSCompiler_StaticMethods_setElementWidth$$($headerRoot$$1$$, 0), $JSCompiler_StaticMethods_setElementWidth$$($scroller$$5$$, 
      0), $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_stopRowHeaderFetch$ = !0);
    }
  }
  $renderer$$2$$ = $JSCompiler_StaticMethods_getRenderer$$($JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_options$, "row");
  ($isAppend$$2$$ = $rowHeader$$inline_650_start$$13$$ > $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeader$ ? !0 : !1) ? $top$$3$$ = $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeaderPixel$ : $rowInsert$$1$$ ? ($rowHeaderContent$$ = $headerRoot$$1$$.firstChild, $referenceRow$$ = $rowHeaderContent$$.childNodes[$rowHeader$$inline_650_start$$13$$ - $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeader$], $top$$3$$ = $JSCompiler_StaticMethods_getElementDir$$($referenceRow$$, 
  "top")) : $top$$3$$ = $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeaderPixel$;
  -1 == $totalCount$$1$$ && ($totalCount$$1$$ = $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeader$ + $headerCount$$2$$);
  $adjustment$$inline_651_totalRowHeight$$ = 0;
  $fragment$$2$$ = window.document.createDocumentFragment();
  $c$$1$$ = 0;
  for ($className$$9$$ = $JSCompiler_StaticMethods_buildRowHeaders$self$$.getMappedStyle("row") + " " + $JSCompiler_StaticMethods_buildRowHeaders$self$$.getMappedStyle("headercell") + " " + $JSCompiler_StaticMethods_buildRowHeaders$self$$.getMappedStyle("rowheadercell");0 < $headerCount$$2$$ - $c$$1$$;) {
    $index$$54_returnVal$$2$$ = $isAppend$$2$$ ? $rowHeader$$inline_650_start$$13$$ + $c$$1$$ : $rowHeader$$inline_650_start$$13$$ + ($headerCount$$2$$ - 1 - $c$$1$$), $index$$54_returnVal$$2$$ = $JSCompiler_StaticMethods_buildLevelHeaders$$($JSCompiler_StaticMethods_buildRowHeaders$self$$, $fragment$$2$$, $index$$54_returnVal$$2$$, 0, 0, $isAppend$$2$$ ? $top$$3$$ + $adjustment$$inline_651_totalRowHeight$$ : $top$$3$$ - $adjustment$$inline_651_totalRowHeight$$, $isAppend$$2$$, $rowInsert$$1$$, $renderer$$2$$, 
    $headerSet$$2_prev$$, "row", $className$$9$$, $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_rowHeaderLevelCount$), $c$$1$$ += $index$$54_returnVal$$2$$.count, $adjustment$$inline_651_totalRowHeight$$ += $index$$54_returnVal$$2$$.totalHeight, null == $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_rowHeaderWidth$ && ($JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_rowHeaderWidth$ = $index$$54_returnVal$$2$$.totalWidth, $JSCompiler_StaticMethods_setElementWidth$$($headerRoot$$1$$, 
    $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_rowHeaderWidth$));
  }
  if ($animation$$) {
    return $fragment$$2$$;
  }
  if ($isAppend$$2$$ && 0 != $headerCount$$2$$) {
    $scroller$$5$$.appendChild($fragment$$2$$), -1 != $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeader$ && 0 != $headerCount$$2$$ && ($headerSet$$2_prev$$ = $scroller$$5$$.childNodes[$JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeader$ - $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeader$], null != $headerSet$$2_prev$$ && ($headerSet$$2_prev$$.firstChild.style.borderBottomStyle = "")), $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeader$ = 
    $rowHeader$$inline_650_start$$13$$ + $headerCount$$2$$ - 1, $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeaderPixel$ += $adjustment$$inline_651_totalRowHeight$$;
  } else {
    if ($rowInsert$$1$$) {
      for ($rowHeaderContent$$.insertBefore($fragment$$2$$, $referenceRow$$), $rowHeader$$inline_650_start$$13$$ < $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeader$ && ($JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeader$ = $rowHeader$$inline_650_start$$13$$, $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeaderPixel$ = Math.max(0, $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeaderPixel$ - $adjustment$$inline_651_totalRowHeight$$)), $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeader$ += 
      $headerCount$$2$$, $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeaderPixel$ = Math.max(0, $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeaderPixel$ + $adjustment$$inline_651_totalRowHeight$$), $rowHeader$$inline_650_start$$13$$ = $referenceRow$$;$rowHeader$$inline_650_start$$13$$;) {
        $rowHeader$$inline_650_start$$13$$.style.top = $JSCompiler_StaticMethods_getElementDir$$($rowHeader$$inline_650_start$$13$$, "top") + $adjustment$$inline_651_totalRowHeight$$ + "px", $rowHeader$$inline_650_start$$13$$ = $rowHeader$$inline_650_start$$13$$.nextSibling;
      }
    } else {
      $scroller$$5$$.insertBefore($fragment$$2$$, $scroller$$5$$.firstChild), $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeader$ = Math.max(0, $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeader$ - $headerCount$$2$$), $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeaderPixel$ = Math.max(0, $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_startRowHeaderPixel$ - $adjustment$$inline_651_totalRowHeight$$);
    }
  }
  $rowInsert$$1$$ || $headerRoot$$1$$.appendChild($scroller$$5$$);
  !$JSCompiler_StaticMethods__isCountUnknown$$($JSCompiler_StaticMethods_buildRowHeaders$self$$, "row") && $JSCompiler_StaticMethods__isHighWatermarkScrolling$$($JSCompiler_StaticMethods_buildRowHeaders$self$$) && $JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_endRowHeader$ + 1 >= $totalCount$$1$$ && ($JSCompiler_StaticMethods_buildRowHeaders$self$$.$m_stopRowHeaderFetch$ = !0);
};
$DvtDataGrid$$.prototype.$_getRowHeaderContainer$ = function $$DvtDataGrid$$$$$_getRowHeaderContainer$$($index$$55$$, $level$$14$$, $currentLevel$$, $rowHeaders$$) {
  var $headerIndex$$, $headerExtent$$1$$, $headerDepth$$1$$, $i$$11$$;
  null == $rowHeaders$$ ? ($rowHeaders$$ = this.$m_rowHeader$.firstChild.childNodes, $i$$11$$ = 0) : $i$$11$$ = 1;
  if ($currentLevel$$ === this.$m_rowHeaderLevelCount$ - 1) {
    return $rowHeaders$$[0].parentNode;
  }
  for ($i$$11$$;$i$$11$$ < $rowHeaders$$.length;$i$$11$$++) {
    if ($headerIndex$$ = $JSCompiler_StaticMethods__getAttribute$$(this, $rowHeaders$$[$i$$11$$], "start"), $headerExtent$$1$$ = $JSCompiler_StaticMethods__getAttribute$$(this, $rowHeaders$$[$i$$11$$], "extent"), $headerDepth$$1$$ = $JSCompiler_StaticMethods__getAttribute$$(this, $rowHeaders$$[$i$$11$$].firstChild, "depth"), $index$$55$$ >= $headerIndex$$ && $index$$55$$ < $headerIndex$$ + $headerExtent$$1$$) {
      return $level$$14$$ < $currentLevel$$ + $headerDepth$$1$$ ? $rowHeaders$$[$i$$11$$] : this.$_getRowHeaderContainer$($index$$55$$, $level$$14$$, $currentLevel$$ + $headerDepth$$1$$, $rowHeaders$$[$i$$11$$].childNodes);
    }
  }
  return null;
};
var $JSCompiler_StaticMethods__getRowHeaderByIndex$$ = function $$JSCompiler_StaticMethods__getRowHeaderByIndex$$$($JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$, $index$$56_relativeIndex$$, $level$$15$$) {
  var $rowHeaderContainer_rowHeaderContent$$1$$;
  if (0 > $level$$15$$) {
    return null;
  }
  if (1 === $JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$.$m_rowHeaderLevelCount$) {
    return $rowHeaderContainer_rowHeaderContent$$1$$ = $JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$.$m_rowHeader$.firstChild.childNodes, $index$$56_relativeIndex$$ -= $JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$.$m_startRowHeader$, $rowHeaderContainer_rowHeaderContent$$1$$[$index$$56_relativeIndex$$];
  }
  $rowHeaderContainer_rowHeaderContent$$1$$ = $JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$.$_getRowHeaderContainer$($index$$56_relativeIndex$$, $level$$15$$, 0);
  if (null == $rowHeaderContainer_rowHeaderContent$$1$$) {
    return null;
  }
  if ($level$$15$$ <= $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$, $rowHeaderContainer_rowHeaderContent$$1$$, "level") + $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$, $rowHeaderContainer_rowHeaderContent$$1$$.firstChild, "depth") - 1) {
    return $rowHeaderContainer_rowHeaderContent$$1$$.firstChild;
  }
  $JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$ = $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$, $rowHeaderContainer_rowHeaderContent$$1$$, "start");
  return $rowHeaderContainer_rowHeaderContent$$1$$.childNodes[$index$$56_relativeIndex$$ - $JSCompiler_StaticMethods__getRowHeaderByIndex$self_start$$14$$ + 1];
};
$DvtDataGrid$$.prototype.$_getRowHeaderLevelWidth$ = function $$DvtDataGrid$$$$$_getRowHeaderLevelWidth$$($level$$16$$, $element$$7$$) {
  var $width$$16$$;
  null == this.$m_rowHeaderLevelWidths$ && (this.$m_rowHeaderLevelWidths$ = []);
  $width$$16$$ = this.$m_rowHeaderLevelWidths$[$level$$16$$];
  if (null != $width$$16$$) {
    return $width$$16$$;
  }
  $width$$16$$ = $JSCompiler_StaticMethods_getElementWidth$$($element$$7$$);
  return this.$m_rowHeaderLevelWidths$[$level$$16$$] = $width$$16$$;
};
$DvtDataGrid$$.prototype.$_getColumnHeaderContainer$ = function $$DvtDataGrid$$$$$_getColumnHeaderContainer$$($index$$57$$, $level$$17$$, $currentLevel$$1$$, $columnHeaders$$) {
  var $headerIndex$$1$$, $headerExtent$$2$$, $headerDepth$$2$$, $i$$12$$;
  null == $columnHeaders$$ ? ($columnHeaders$$ = this.$m_colHeader$.firstChild.childNodes, $i$$12$$ = 0) : $i$$12$$ = 1;
  if ($currentLevel$$1$$ === this.$m_columnHeaderLevelCount$ - 1) {
    return $columnHeaders$$[0].parentNode;
  }
  for ($i$$12$$;$i$$12$$ < $columnHeaders$$.length;$i$$12$$++) {
    if ($headerIndex$$1$$ = $JSCompiler_StaticMethods__getAttribute$$(this, $columnHeaders$$[$i$$12$$], "start"), $headerExtent$$2$$ = $JSCompiler_StaticMethods__getAttribute$$(this, $columnHeaders$$[$i$$12$$], "extent"), $headerDepth$$2$$ = $JSCompiler_StaticMethods__getAttribute$$(this, $columnHeaders$$[$i$$12$$].firstChild, "depth"), $index$$57$$ >= $headerIndex$$1$$ && $index$$57$$ < $headerIndex$$1$$ + $headerExtent$$2$$) {
      return $level$$17$$ < $currentLevel$$1$$ + $headerDepth$$2$$ ? $columnHeaders$$[$i$$12$$] : this.$_getColumnHeaderContainer$($index$$57$$, $level$$17$$, $currentLevel$$1$$ + $headerDepth$$2$$, $columnHeaders$$[$i$$12$$].childNodes);
    }
  }
  return null;
};
var $JSCompiler_StaticMethods__getColumnHeaderByIndex$$ = function $$JSCompiler_StaticMethods__getColumnHeaderByIndex$$$($JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$, $index$$58_relativeIndex$$1$$, $level$$18$$) {
  var $columnHeaderContainer_columnHeaderContent$$;
  if (0 > $level$$18$$) {
    return null;
  }
  if (1 === $JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$.$m_columnHeaderLevelCount$) {
    return $columnHeaderContainer_columnHeaderContent$$ = $JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$.$m_colHeader$.firstChild.childNodes, $index$$58_relativeIndex$$1$$ -= $JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$.$m_startColHeader$, $columnHeaderContainer_columnHeaderContent$$[$index$$58_relativeIndex$$1$$];
  }
  $columnHeaderContainer_columnHeaderContent$$ = $JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$.$_getColumnHeaderContainer$($index$$58_relativeIndex$$1$$, $level$$18$$, 0);
  if (null == $columnHeaderContainer_columnHeaderContent$$) {
    return null;
  }
  if ($level$$18$$ <= $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$, $columnHeaderContainer_columnHeaderContent$$, "level") + $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$, $columnHeaderContainer_columnHeaderContent$$.firstChild, "depth") - 1) {
    return $columnHeaderContainer_columnHeaderContent$$.firstChild;
  }
  $JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$ = $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$, $columnHeaderContainer_columnHeaderContent$$, "start");
  return $columnHeaderContainer_columnHeaderContent$$.childNodes[$index$$58_relativeIndex$$1$$ - $JSCompiler_StaticMethods__getColumnHeaderByIndex$self_start$$15$$ + 1];
};
$DvtDataGrid$$.prototype.$_getColumnHeaderLevelHeight$ = function $$DvtDataGrid$$$$$_getColumnHeaderLevelHeight$$($level$$19$$, $element$$8$$) {
  var $height$$16$$;
  null == this.$m_columnHeaderLevelHeights$ && (this.$m_columnHeaderLevelHeights$ = []);
  $height$$16$$ = this.$m_columnHeaderLevelHeights$[$level$$19$$];
  if (null != $height$$16$$) {
    return $height$$16$$;
  }
  $height$$16$$ = $JSCompiler_StaticMethods_getElementHeight$$($element$$8$$);
  return this.$m_columnHeaderLevelHeights$[$level$$19$$] = $height$$16$$;
};
var $JSCompiler_StaticMethods__getAttribute$$ = function $$JSCompiler_StaticMethods__getAttribute$$$($JSCompiler_StaticMethods__getAttribute$self_value$$45$$, $element$$9$$, $attributeKey$$) {
  $JSCompiler_StaticMethods__getAttribute$self_value$$45$$ = $element$$9$$.getAttribute($JSCompiler_StaticMethods__getAttribute$self_value$$45$$.$m_resources$.getMappedAttribute($attributeKey$$));
  return(0,window.parseInt)($JSCompiler_StaticMethods__getAttribute$self_value$$45$$, 10);
}, $JSCompiler_StaticMethods__setAttribute$$ = function $$JSCompiler_StaticMethods__setAttribute$$$($JSCompiler_StaticMethods__setAttribute$self$$, $element$$10$$, $attributeKey$$1$$, $value$$46$$) {
  $element$$10$$.setAttribute($JSCompiler_StaticMethods__setAttribute$self$$.$m_resources$.getMappedAttribute($attributeKey$$1$$), $value$$46$$);
};
$DvtDataGrid$$.prototype.fetchCells = function $$DvtDataGrid$$$$fetchCells$($columnRange_databody$$5$$, $scroller$$7$$, $rowRange_rowStart$$, $colStart$$, $rowCount$$2$$, $colCount$$1$$, $callbacks$$4_successCallback$$27$$) {
  this.$m_fetching$.cells || (this.$m_fetching$.cells = {row:$rowRange_rowStart$$, column:$colStart$$}, null == $rowCount$$2$$ && ($rowCount$$2$$ = $JSCompiler_StaticMethods_getFetchSize$$(this, "row")), null == $colCount$$1$$ && ($colCount$$1$$ = $JSCompiler_StaticMethods_getFetchSize$$(this, "column")), $rowRange_rowStart$$ = {axis:"row", start:$rowRange_rowStart$$, count:$rowCount$$2$$}, $columnRange_databody$$5$$ = {axis:"column", start:$colStart$$, count:$colCount$$1$$, databody:$columnRange_databody$$5$$, 
  scroller:$scroller$$7$$}, $callbacks$$4_successCallback$$27$$ = null != $callbacks$$4_successCallback$$27$$ && null != $callbacks$$4_successCallback$$27$$.success ? $callbacks$$4_successCallback$$27$$.success : this.$handleCellsFetchSuccess$, $JSCompiler_StaticMethods_showStatusText$$(this), this.$m_dataSource$.fetchCells([$rowRange_rowStart$$, $columnRange_databody$$5$$], {success:$callbacks$$4_successCallback$$27$$, error:this.$handleCellsFetchError$}, {success:this, error:this}));
};
$DvtDataGrid$$.prototype.$handleCellsFetchSuccess$ = function $$DvtDataGrid$$$$$handleCellsFetchSuccess$$($cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$, $cellRange$$3_databody$$6$$, $prev$$1_rowInsert$$2_rows$$1$$) {
  var $JSCompiler_inline_result$$161_scrollerHeight$$inline_695_totalRowCount$$, $scrollerWidth$$inline_696_totalColumnCount$$, $JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$, $columnCount$$inline_677_responseColumnStart$$inline_656_rowStart$$2$$, $requestRowStart$$inline_658_rowCount$$4_rowStart$$inline_664_rowStartPixel$$inline_668$$, $fragment$$3_horizontalGridlines$$inline_687_rowRangeNeedsUpdate_viewportBottom$$inline_673$$, 
  $columnRange$$3_inner_viewportTop$$inline_672$$, $columnStart$$1_requestCellRanges$$inline_657_requestColumnStart$$inline_659_rowEnd$$inline_665_rowEndPixel$$inline_669$$, $columnCount$$1_columnStartPixel$$inline_670$$, $columnEndPixel$$inline_671_columnRangeNeedsUpdate_columnStart$$inline_666$$, $addResult_avgHeight_scrollerContentHeight$$inline_698_top$$4$$, $columnBandingInterval$$inline_686_referenceRow$$1$$, $avgWidth$$inline_690_i$$13_isAppend$$3_returnVal$$inline_692_row$$inline_689$$, $avgWidth$$1_renderer$$inline_685$$;
  $JSCompiler_inline_result$$161_scrollerHeight$$inline_695_totalRowCount$$ = this.$m_dataSource$.getCount("row");
  $scrollerWidth$$inline_696_totalColumnCount$$ = this.$m_dataSource$.getCount("column");
  if (void 0 === $prev$$1_rowInsert$$2_rows$$1$$) {
    $prev$$1_rowInsert$$2_rows$$1$$ = !1;
    $JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$ = $cellRange$$3_databody$$6$$[0].start;
    $columnCount$$inline_677_responseColumnStart$$inline_656_rowStart$$2$$ = $cellRange$$3_databody$$6$$[1].start;
    $columnStart$$1_requestCellRanges$$inline_657_requestColumnStart$$inline_659_rowEnd$$inline_665_rowEndPixel$$inline_669$$ = this.$m_fetching$.cells;
    $requestRowStart$$inline_658_rowCount$$4_rowStart$$inline_664_rowStartPixel$$inline_668$$ = $columnStart$$1_requestCellRanges$$inline_657_requestColumnStart$$inline_659_rowEnd$$inline_665_rowEndPixel$$inline_669$$.row;
    $columnStart$$1_requestCellRanges$$inline_657_requestColumnStart$$inline_659_rowEnd$$inline_665_rowEndPixel$$inline_669$$ = $columnStart$$1_requestCellRanges$$inline_657_requestColumnStart$$inline_659_rowEnd$$inline_665_rowEndPixel$$inline_669$$.column;
    if ($requestRowStart$$inline_658_rowCount$$4_rowStart$$inline_664_rowStartPixel$$inline_668$$ != $JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$ || $columnStart$$1_requestCellRanges$$inline_657_requestColumnStart$$inline_659_rowEnd$$inline_665_rowEndPixel$$inline_669$$ != $columnCount$$inline_677_responseColumnStart$$inline_656_rowStart$$2$$) {
      return;
    }
    if ($JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$ = this.$m_startRowPixel$ == this.$m_endRowPixel$ && this.$m_startColPixel$ == this.$m_endColPixel$) {
      var $verticalGridlines$$inline_688_viewportLeft$$inline_674$$, $i$$inline_691_viewportRight$$inline_675$$;
      (0,window.isNaN)(this.$m_avgRowHeight$) || (0,window.isNaN)(this.$m_avgColWidth$) ? $JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$ = !0 : ($requestRowStart$$inline_658_rowCount$$4_rowStart$$inline_664_rowStartPixel$$inline_668$$ = $cellRange$$3_databody$$6$$[0].start, $JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$ = 
      $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$.getCount("row"), $columnStart$$1_requestCellRanges$$inline_657_requestColumnStart$$inline_659_rowEnd$$inline_665_rowEndPixel$$inline_669$$ = $requestRowStart$$inline_658_rowCount$$4_rowStart$$inline_664_rowStartPixel$$inline_668$$ + $JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$, $columnEndPixel$$inline_671_columnRangeNeedsUpdate_columnStart$$inline_666$$ = 
      $cellRange$$3_databody$$6$$[1].start, $columnCount$$inline_677_responseColumnStart$$inline_656_rowStart$$2$$ = $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$.getCount("column"), $requestRowStart$$inline_658_rowCount$$4_rowStart$$inline_664_rowStartPixel$$inline_668$$ *= this.$m_avgRowHeight$, $columnStart$$1_requestCellRanges$$inline_657_requestColumnStart$$inline_659_rowEnd$$inline_665_rowEndPixel$$inline_669$$ *= this.$m_avgRowHeight$, 
      $columnCount$$1_columnStartPixel$$inline_670$$ = this.$m_avgColWidth$ * $columnEndPixel$$inline_671_columnRangeNeedsUpdate_columnStart$$inline_666$$, $columnEndPixel$$inline_671_columnRangeNeedsUpdate_columnStart$$inline_666$$ = this.$m_avgColWidth$ * ($columnEndPixel$$inline_671_columnRangeNeedsUpdate_columnStart$$inline_666$$ + $columnCount$$inline_677_responseColumnStart$$inline_656_rowStart$$2$$), $columnRange$$3_inner_viewportTop$$inline_672$$ = this.$m_currentScrollTop$, $fragment$$3_horizontalGridlines$$inline_687_rowRangeNeedsUpdate_viewportBottom$$inline_673$$ = 
      this.$m_currentScrollTop$ + $JSCompiler_StaticMethods_getElementHeight$$(this.$m_databody$), $verticalGridlines$$inline_688_viewportLeft$$inline_674$$ = this.$m_currentScrollLeft$, $i$$inline_691_viewportRight$$inline_675$$ = this.$m_currentScrollLeft$ + $JSCompiler_StaticMethods_getElementWidth$$(this.$m_databody$), !$JSCompiler_StaticMethods__isCountUnknown$$(this, "row") && this.$m_dataSource$.getCount("row") == $JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$ && 
      $columnStart$$1_requestCellRanges$$inline_657_requestColumnStart$$inline_659_rowEnd$$inline_665_rowEndPixel$$inline_669$$ < $fragment$$3_horizontalGridlines$$inline_687_rowRangeNeedsUpdate_viewportBottom$$inline_673$$ && ($columnStart$$1_requestCellRanges$$inline_657_requestColumnStart$$inline_659_rowEnd$$inline_665_rowEndPixel$$inline_669$$ = $fragment$$3_horizontalGridlines$$inline_687_rowRangeNeedsUpdate_viewportBottom$$inline_673$$), !$JSCompiler_StaticMethods__isCountUnknown$$(this, "column") && 
      this.$m_dataSource$.getCount("column") == $columnCount$$inline_677_responseColumnStart$$inline_656_rowStart$$2$$ && $columnEndPixel$$inline_671_columnRangeNeedsUpdate_columnStart$$inline_666$$ < $i$$inline_691_viewportRight$$inline_675$$ && ($columnEndPixel$$inline_671_columnRangeNeedsUpdate_columnStart$$inline_666$$ = $i$$inline_691_viewportRight$$inline_675$$), $JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$ = 
      $columnRange$$3_inner_viewportTop$$inline_672$$ >= $requestRowStart$$inline_658_rowCount$$4_rowStart$$inline_664_rowStartPixel$$inline_668$$ && $fragment$$3_horizontalGridlines$$inline_687_rowRangeNeedsUpdate_viewportBottom$$inline_673$$ <= $columnStart$$1_requestCellRanges$$inline_657_requestColumnStart$$inline_659_rowEnd$$inline_665_rowEndPixel$$inline_669$$ && $verticalGridlines$$inline_688_viewportLeft$$inline_674$$ >= $columnCount$$1_columnStartPixel$$inline_670$$ && $i$$inline_691_viewportRight$$inline_675$$ <= 
      $columnEndPixel$$inline_671_columnRangeNeedsUpdate_columnStart$$inline_666$$);
      $JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$ = !$JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$;
    }
    if ($JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$) {
      this.$m_fetching$.cells = !1;
      this.$m_captureScrolling$ || $JSCompiler_StaticMethods_handleLongScroll$$(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$);
      return;
    }
  }
  $JSCompiler_StaticMethods_getDefaultRowHeight$$(this);
  $JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$ = $cellRange$$3_databody$$6$$[0];
  $columnCount$$inline_677_responseColumnStart$$inline_656_rowStart$$2$$ = $JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$.start;
  $requestRowStart$$inline_658_rowCount$$4_rowStart$$inline_664_rowStartPixel$$inline_668$$ = $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$.getCount("row");
  $fragment$$3_horizontalGridlines$$inline_687_rowRangeNeedsUpdate_viewportBottom$$inline_673$$ = 0 < $requestRowStart$$inline_658_rowCount$$4_rowStart$$inline_664_rowStartPixel$$inline_668$$ && ($columnCount$$inline_677_responseColumnStart$$inline_656_rowStart$$2$$ > this.$m_endRow$ || $columnCount$$inline_677_responseColumnStart$$inline_656_rowStart$$2$$ + $requestRowStart$$inline_658_rowCount$$4_rowStart$$inline_664_rowStartPixel$$inline_668$$ <= this.$m_startRow$);
  if (0 == $requestRowStart$$inline_658_rowCount$$4_rowStart$$inline_664_rowStartPixel$$inline_668$$ && $JSCompiler_StaticMethods__isCountUnknown$$(this, "row") && 0 < $JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$.count || $fragment$$3_horizontalGridlines$$inline_687_rowRangeNeedsUpdate_viewportBottom$$inline_673$$ && $JSCompiler_StaticMethods__isHighWatermarkScrolling$$(this) && !$JSCompiler_StaticMethods__isCountUnknown$$(this, 
  "row") && this.$m_endRow$ + $requestRowStart$$inline_658_rowCount$$4_rowStart$$inline_664_rowStartPixel$$inline_668$$ + 1 >= $JSCompiler_inline_result$$161_scrollerHeight$$inline_695_totalRowCount$$ || $requestRowStart$$inline_658_rowCount$$4_rowStart$$inline_664_rowStartPixel$$inline_668$$ < $JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$.count) {
    this.$m_stopRowFetch$ = !0;
  }
  $columnRange$$3_inner_viewportTop$$inline_672$$ = $cellRange$$3_databody$$6$$[1];
  $columnStart$$1_requestCellRanges$$inline_657_requestColumnStart$$inline_659_rowEnd$$inline_665_rowEndPixel$$inline_669$$ = $columnRange$$3_inner_viewportTop$$inline_672$$.start;
  $columnCount$$1_columnStartPixel$$inline_670$$ = $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$.getCount("column");
  $columnEndPixel$$inline_671_columnRangeNeedsUpdate_columnStart$$inline_666$$ = 0 < $columnCount$$1_columnStartPixel$$inline_670$$ && ($columnStart$$1_requestCellRanges$$inline_657_requestColumnStart$$inline_659_rowEnd$$inline_665_rowEndPixel$$inline_669$$ > this.$m_endCol$ || $columnStart$$1_requestCellRanges$$inline_657_requestColumnStart$$inline_659_rowEnd$$inline_665_rowEndPixel$$inline_669$$ + $columnCount$$1_columnStartPixel$$inline_670$$ == this.$m_startCol$);
  if (0 == $columnCount$$1_columnStartPixel$$inline_670$$ && $JSCompiler_StaticMethods__isCountUnknown$$(this, "column") && 0 < $columnRange$$3_inner_viewportTop$$inline_672$$.count || $columnEndPixel$$inline_671_columnRangeNeedsUpdate_columnStart$$inline_666$$ && $JSCompiler_StaticMethods__isHighWatermarkScrolling$$(this) && !$JSCompiler_StaticMethods__isCountUnknown$$(this, "column") && this.$m_endCol$ + $columnCount$$1_columnStartPixel$$inline_670$$ + 1 >= $scrollerWidth$$inline_696_totalColumnCount$$ || 
  $columnCount$$1_columnStartPixel$$inline_670$$ < $columnRange$$3_inner_viewportTop$$inline_672$$.count) {
    this.$m_stopColumnFetch$ = !0;
  }
  $cellRange$$3_databody$$6$$ = this.$m_databody$;
  null == $cellRange$$3_databody$$6$$ && ($cellRange$$3_databody$$6$$ = $columnRange$$3_inner_viewportTop$$inline_672$$.databody);
  $JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$ = this.$m_scroller$;
  null == $JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$ && ($JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$ = $columnRange$$3_inner_viewportTop$$inline_672$$.scroller);
  $JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$.hasChildNodes() ? $columnRange$$3_inner_viewportTop$$inline_672$$ = $JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$.firstChild : ($columnRange$$3_inner_viewportTop$$inline_672$$ = window.document.createElement("div"), $JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$.appendChild($columnRange$$3_inner_viewportTop$$inline_672$$));
  $cellRange$$3_databody$$6$$.hasChildNodes() ? $JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$ = $cellRange$$3_databody$$6$$.firstChild : ($JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$ = window.document.createElement("div"), $JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$.className = 
  this.getMappedStyle("scroller") + ($JSCompiler_StaticMethods_isTouchDevice$$(this.$m_utils$) ? " " + this.getMappedStyle("scroller-mobile") : ""));
  if ($fragment$$3_horizontalGridlines$$inline_687_rowRangeNeedsUpdate_viewportBottom$$inline_673$$ || $prev$$1_rowInsert$$2_rows$$1$$) {
    if (($avgWidth$$inline_690_i$$13_isAppend$$3_returnVal$$inline_692_row$$inline_689$$ = !$prev$$1_rowInsert$$2_rows$$1$$ && $columnCount$$inline_677_responseColumnStart$$inline_656_rowStart$$2$$ >= this.$m_startRow$ ? !0 : !1) ? ($columnBandingInterval$$inline_686_referenceRow$$1$$ = $JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$.childNodes[$columnCount$$inline_677_responseColumnStart$$inline_656_rowStart$$2$$ - 
    this.$m_startRow$], $addResult_avgHeight_scrollerContentHeight$$inline_698_top$$4$$ = this.$m_endRowPixel$) : $prev$$1_rowInsert$$2_rows$$1$$ ? ($columnBandingInterval$$inline_686_referenceRow$$1$$ = $JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$.childNodes[$columnCount$$inline_677_responseColumnStart$$inline_656_rowStart$$2$$ - this.$m_startRow$], $addResult_avgHeight_scrollerContentHeight$$inline_698_top$$4$$ = 
    $JSCompiler_StaticMethods_getElementDir$$($columnBandingInterval$$inline_686_referenceRow$$1$$, "top")) : $addResult_avgHeight_scrollerContentHeight$$inline_698_top$$4$$ = this.$m_startRowPixel$, $fragment$$3_horizontalGridlines$$inline_687_rowRangeNeedsUpdate_viewportBottom$$inline_673$$ = window.document.createDocumentFragment(), $addResult_avgHeight_scrollerContentHeight$$inline_698_top$$4$$ = $JSCompiler_StaticMethods__addRows$$(this, $fragment$$3_horizontalGridlines$$inline_687_rowRangeNeedsUpdate_viewportBottom$$inline_673$$, 
    $avgWidth$$inline_690_i$$13_isAppend$$3_returnVal$$inline_692_row$$inline_689$$ || $prev$$1_rowInsert$$2_rows$$1$$, $addResult_avgHeight_scrollerContentHeight$$inline_698_top$$4$$, $columnCount$$inline_677_responseColumnStart$$inline_656_rowStart$$2$$, $requestRowStart$$inline_658_rowCount$$4_rowStart$$inline_664_rowStartPixel$$inline_668$$, $columnStart$$1_requestCellRanges$$inline_657_requestColumnStart$$inline_659_rowEnd$$inline_665_rowEndPixel$$inline_669$$, $columnEndPixel$$inline_671_columnRangeNeedsUpdate_columnStart$$inline_666$$, 
    $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$), $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$ = $addResult_avgHeight_scrollerContentHeight$$inline_698_top$$4$$.totalRowHeight, $avgWidth$$1_renderer$$inline_685$$ = $addResult_avgHeight_scrollerContentHeight$$inline_698_top$$4$$.avgWidth, $addResult_avgHeight_scrollerContentHeight$$inline_698_top$$4$$ = $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$ / 
    $requestRowStart$$inline_658_rowCount$$4_rowStart$$inline_664_rowStartPixel$$inline_668$$, $avgWidth$$inline_690_i$$13_isAppend$$3_returnVal$$inline_692_row$$inline_689$$) {
      $JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$.appendChild($fragment$$3_horizontalGridlines$$inline_687_rowRangeNeedsUpdate_viewportBottom$$inline_673$$);
      if (-1 != this.$m_endRow$ && 0 != $requestRowStart$$inline_658_rowCount$$4_rowStart$$inline_664_rowStartPixel$$inline_668$$ && ($prev$$1_rowInsert$$2_rows$$1$$ = $JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$.childNodes[this.$m_endRow$ - this.$m_startRow$], null != $prev$$1_rowInsert$$2_rows$$1$$)) {
        for ($prev$$1_rowInsert$$2_rows$$1$$ = $prev$$1_rowInsert$$2_rows$$1$$.childNodes, $avgWidth$$inline_690_i$$13_isAppend$$3_returnVal$$inline_692_row$$inline_689$$ = 0;$avgWidth$$inline_690_i$$13_isAppend$$3_returnVal$$inline_692_row$$inline_689$$ < $prev$$1_rowInsert$$2_rows$$1$$.length;$avgWidth$$inline_690_i$$13_isAppend$$3_returnVal$$inline_692_row$$inline_689$$ += 1) {
          $prev$$1_rowInsert$$2_rows$$1$$[$avgWidth$$inline_690_i$$13_isAppend$$3_returnVal$$inline_692_row$$inline_689$$].style.borderBottomStyle = "";
        }
      }
      this.$m_endRow$ = $columnCount$$inline_677_responseColumnStart$$inline_656_rowStart$$2$$ + $requestRowStart$$inline_658_rowCount$$4_rowStart$$inline_664_rowStartPixel$$inline_668$$ - 1;
      this.$m_endRowPixel$ += $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$;
      $cellRange$$3_databody$$6$$.hasChildNodes() || $cellRange$$3_databody$$6$$.appendChild($JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$);
    } else {
      $prev$$1_rowInsert$$2_rows$$1$$ ? ($JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$.insertBefore($fragment$$3_horizontalGridlines$$inline_687_rowRangeNeedsUpdate_viewportBottom$$inline_673$$, $columnBandingInterval$$inline_686_referenceRow$$1$$), $columnCount$$inline_677_responseColumnStart$$inline_656_rowStart$$2$$ < this.$m_startRow$ && (this.$m_startRow$ = $columnCount$$inline_677_responseColumnStart$$inline_656_rowStart$$2$$, 
      this.$m_startRowPixel$ = Math.max(0, this.$m_startRowPixel$ - $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$)), this.$m_endRow$ += $requestRowStart$$inline_658_rowCount$$4_rowStart$$inline_664_rowStartPixel$$inline_668$$, this.$m_endRowPixel$ += $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$, $JSCompiler_StaticMethods_pushRowsDown$$($columnBandingInterval$$inline_686_referenceRow$$1$$, 
      $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$)) : ($JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$.insertBefore($fragment$$3_horizontalGridlines$$inline_687_rowRangeNeedsUpdate_viewportBottom$$inline_673$$, $JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$.firstChild), 
      this.$m_startRow$ -= $requestRowStart$$inline_658_rowCount$$4_rowStart$$inline_664_rowStartPixel$$inline_668$$, this.$m_startRowPixel$ = Math.max(0, this.$m_startRowPixel$ - $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$));
    }
  } else {
    if ($columnEndPixel$$inline_671_columnRangeNeedsUpdate_columnStart$$inline_666$$ && ($prev$$1_rowInsert$$2_rows$$1$$ = $JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$.childNodes, $requestRowStart$$inline_658_rowCount$$4_rowStart$$inline_664_rowStartPixel$$inline_668$$ == $prev$$1_rowInsert$$2_rows$$1$$.length)) {
      $avgWidth$$1_renderer$$inline_685$$ = $JSCompiler_StaticMethods_getRenderer$$(this.$m_options$, "cell");
      $columnBandingInterval$$inline_686_referenceRow$$1$$ = $JSCompiler_StaticMethods_getColumnBandingInterval$$(this.$m_options$);
      $fragment$$3_horizontalGridlines$$inline_687_rowRangeNeedsUpdate_viewportBottom$$inline_673$$ = $JSCompiler_StaticMethods_getHorizontalGridlines$$(this.$m_options$);
      $verticalGridlines$$inline_688_viewportLeft$$inline_674$$ = $JSCompiler_StaticMethods_getVerticalGridlines$$(this.$m_options$);
      for ($i$$inline_691_viewportRight$$inline_675$$ = 0;$i$$inline_691_viewportRight$$inline_675$$ < $requestRowStart$$inline_658_rowCount$$4_rowStart$$inline_664_rowStartPixel$$inline_668$$;$i$$inline_691_viewportRight$$inline_675$$ += 1) {
        $avgWidth$$inline_690_i$$13_isAppend$$3_returnVal$$inline_692_row$$inline_689$$ = $prev$$1_rowInsert$$2_rows$$1$$[$i$$inline_691_viewportRight$$inline_675$$], $avgWidth$$inline_690_i$$13_isAppend$$3_returnVal$$inline_692_row$$inline_689$$ = $JSCompiler_StaticMethods_addCellsToRow$$(this, $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$, $avgWidth$$inline_690_i$$13_isAppend$$3_returnVal$$inline_692_row$$inline_689$$, $columnCount$$inline_677_responseColumnStart$$inline_656_rowStart$$2$$ + 
        $i$$inline_691_viewportRight$$inline_675$$, $avgWidth$$1_renderer$$inline_685$$, !1, $columnStart$$1_requestCellRanges$$inline_657_requestColumnStart$$inline_659_rowEnd$$inline_665_rowEndPixel$$inline_669$$, $i$$inline_691_viewportRight$$inline_675$$ == $requestRowStart$$inline_658_rowCount$$4_rowStart$$inline_664_rowStartPixel$$inline_668$$ - 1, $columnBandingInterval$$inline_686_referenceRow$$1$$, $fragment$$3_horizontalGridlines$$inline_687_rowRangeNeedsUpdate_viewportBottom$$inline_673$$, 
        $verticalGridlines$$inline_688_viewportLeft$$inline_674$$), $avgWidth$$inline_690_i$$13_isAppend$$3_returnVal$$inline_692_row$$inline_689$$ = $avgWidth$$inline_690_i$$13_isAppend$$3_returnVal$$inline_692_row$$inline_689$$.avgWidth;
      }
      $avgWidth$$1_renderer$$inline_685$$ = $avgWidth$$inline_690_i$$13_isAppend$$3_returnVal$$inline_692_row$$inline_689$$;
    }
  }
  $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$ = -1 == $scrollerWidth$$inline_696_totalColumnCount$$ || $JSCompiler_StaticMethods__isHighWatermarkScrolling$$(this) ? this.$m_endColPixel$ : $scrollerWidth$$inline_696_totalColumnCount$$ * $avgWidth$$1_renderer$$inline_685$$;
  void 0 == $avgWidth$$1_renderer$$inline_685$$ || 0 != this.$m_avgColWidth$ && void 0 != this.$m_avgColWidth$ ? (-1 == $scrollerWidth$$inline_696_totalColumnCount$$ || $JSCompiler_StaticMethods__isHighWatermarkScrolling$$(this)) && $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$ > $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$) && 
  ($JSCompiler_StaticMethods_setElementWidth$$($JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$, $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$), $JSCompiler_StaticMethods_setElementWidth$$($columnRange$$3_inner_viewportTop$$inline_672$$, $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$)) : 
  (this.$m_avgColWidth$ = $avgWidth$$1_renderer$$inline_685$$, $JSCompiler_StaticMethods_setElementWidth$$($JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$, $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$), $JSCompiler_StaticMethods_setElementWidth$$($columnRange$$3_inner_viewportTop$$inline_672$$, $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$));
  $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$ = -1 == $JSCompiler_inline_result$$161_scrollerHeight$$inline_695_totalRowCount$$ || $JSCompiler_StaticMethods__isHighWatermarkScrolling$$(this) ? this.$m_endRowPixel$ : $JSCompiler_inline_result$$161_scrollerHeight$$inline_695_totalRowCount$$ * $addResult_avgHeight_scrollerContentHeight$$inline_698_top$$4$$;
  if (void 0 != $addResult_avgHeight_scrollerContentHeight$$inline_698_top$$4$$ && (0 == this.$m_avgRowHeight$ || void 0 == this.$m_avgRowHeight$)) {
    this.$m_avgRowHeight$ = $addResult_avgHeight_scrollerContentHeight$$inline_698_top$$4$$, $JSCompiler_StaticMethods_setElementHeight$$($JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$, $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$), $JSCompiler_StaticMethods_setElementHeight$$($columnRange$$3_inner_viewportTop$$inline_672$$, $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$)
    ;
  } else {
    if ((-1 == $JSCompiler_inline_result$$161_scrollerHeight$$inline_695_totalRowCount$$ || $JSCompiler_StaticMethods__isHighWatermarkScrolling$$(this)) && $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$ > $JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$) || $JSCompiler_inline_result$$161_scrollerHeight$$inline_695_totalRowCount$$ * 
    $addResult_avgHeight_scrollerContentHeight$$inline_698_top$$4$$ != $JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$)) {
      $JSCompiler_StaticMethods_setElementHeight$$($JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$, $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$), $JSCompiler_StaticMethods_setElementHeight$$($columnRange$$3_inner_viewportTop$$inline_672$$, $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$)
      ;
    }
  }
  $columnEndPixel$$inline_671_columnRangeNeedsUpdate_columnStart$$inline_666$$ && ($columnStart$$1_requestCellRanges$$inline_657_requestColumnStart$$inline_659_rowEnd$$inline_665_rowEndPixel$$inline_669$$ < this.$m_startCol$ ? this.$m_startCol$ -= $columnCount$$1_columnStartPixel$$inline_670$$ : this.$m_endCol$ = $columnStart$$1_requestCellRanges$$inline_657_requestColumnStart$$inline_659_rowEnd$$inline_665_rowEndPixel$$inline_669$$ + $columnCount$$1_columnStartPixel$$inline_670$$ - 1);
  this.$m_fetching$.cells = !1;
  this.$m_initialized$ && $JSCompiler_StaticMethods__syncScroller$$(this);
  $JSCompiler_StaticMethods_isFetchComplete$$(this) && ($JSCompiler_StaticMethods_hideStatusText$$(this), null != this.$m_scrollIndexAfterFetch$ ? $JSCompiler_StaticMethods_scrollToIndex$$(this, this.$m_scrollIndexAfterFetch$) : null != this.$m_scrollHeaderAfterFetch$ ? $JSCompiler_StaticMethods_scrollToHeader$$(this, this.$m_scrollHeaderAfterFetch$) : $JSCompiler_StaticMethods_isActionableMode$$(this) || $JSCompiler_StaticMethods__highlightActive$$(this), $JSCompiler_StaticMethods__isSelectionEnabled$$(this) && 
  $JSCompiler_StaticMethods_applySelection$$(this, $columnCount$$inline_677_responseColumnStart$$inline_656_rowStart$$2$$, $columnCount$$inline_677_responseColumnStart$$inline_656_rowStart$$2$$ + $requestRowStart$$inline_658_rowCount$$4_rowStart$$inline_664_rowStartPixel$$inline_668$$), $JSCompiler_StaticMethods_populateAccInfo$$(this), $JSCompiler_StaticMethods_isTouchDevice$$(this.$m_utils$) && window.hasOwnProperty("WebKitCSSMatrix") && ($cellRange$$3_databody$$6$$.style.webkitTransform = "translate3d(0, 0, 0)", 
  null != this.$m_rowHeader$ && (this.$m_rowHeader$.style.webkitTransform = "translate3d(0, 0, 0)"), null != this.$m_colHeader$ && (this.$m_colHeader$.style.webkitTransform = "translate3d(0, 0, 0)")), $JSCompiler_StaticMethods__shouldInitialize$$(this) ? $JSCompiler_StaticMethods__handleInitialization$$(this, !0) : this.$m_initialized$ && (null == this.$m_scroller$ ? $JSCompiler_inline_result$$161_scrollerHeight$$inline_695_totalRowCount$$ = !1 : ($JSCompiler_inline_result$$161_scrollerHeight$$inline_695_totalRowCount$$ = 
  $JSCompiler_StaticMethods_getElementHeight$$(this.$m_scroller$), $scrollerWidth$$inline_696_totalColumnCount$$ = $JSCompiler_StaticMethods_getElementWidth$$(this.$m_scroller$), $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$ = this.$m_scroller$.firstChild, $addResult_avgHeight_scrollerContentHeight$$inline_698_top$$4$$ = $JSCompiler_StaticMethods_getElementHeight$$($cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$), 
  $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$ = $JSCompiler_StaticMethods_getElementWidth$$($cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$), $JSCompiler_inline_result$$161_scrollerHeight$$inline_695_totalRowCount$$ = this.$m_endRowPixel$ > $JSCompiler_inline_result$$161_scrollerHeight$$inline_695_totalRowCount$$ && $scrollerWidth$$inline_696_totalColumnCount$$ == 
  $cellSet$$1_scrollerContent$$inline_697_scrollerContentWidth$$inline_699_totalColumnWidth$$1_totalRowHeight$$1$$ || this.$m_endColPixel$ > $scrollerWidth$$inline_696_totalColumnCount$$ && $JSCompiler_inline_result$$161_scrollerHeight$$inline_695_totalRowCount$$ == $addResult_avgHeight_scrollerContentHeight$$inline_698_top$$4$$ ? !0 : !1), $JSCompiler_inline_result$$161_scrollerHeight$$inline_695_totalRowCount$$ || !0 == this.$m_resizeRequired$ || this.$m_endRowHeaderPixel$ > $JSCompiler_StaticMethods_getElementHeight$$($cellRange$$3_databody$$6$$) && 
  $JSCompiler_StaticMethods_getElementHeight$$(this.$m_scroller$) > $JSCompiler_StaticMethods_getElementHeight$$($cellRange$$3_databody$$6$$) || this.$m_endColHeaderPixel$ > $JSCompiler_StaticMethods_getElementWidth$$($cellRange$$3_databody$$6$$) && $JSCompiler_StaticMethods_getElementWidth$$(this.$m_scroller$) > $JSCompiler_StaticMethods_getElementWidth$$($cellRange$$3_databody$$6$$) ? $JSCompiler_StaticMethods_resizeGrid$$(this) : (this.$m_scrollWidth$ = $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$) - 
  $JSCompiler_StaticMethods_getElementWidth$$($cellRange$$3_databody$$6$$), this.$m_scrollHeight$ = $JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_inline_result$$289_JSCompiler_temp$$288_databodyContent_responseRowStart$$inline_655_rowCount$$inline_676_rowRange$$3_scroller$$8$$) - $JSCompiler_StaticMethods_getElementHeight$$($cellRange$$3_databody$$6$$)), $JSCompiler_StaticMethods_fillViewport$$(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$), $JSCompiler_StaticMethods_isFetchComplete$$(this) && 
  this.fireEvent("ready", {})));
};
var $JSCompiler_StaticMethods__insertRowsWithAnimation$$ = function $$JSCompiler_StaticMethods__insertRowsWithAnimation$$$($JSCompiler_StaticMethods__insertRowsWithAnimation$self$$, $rowFragment$$, $rowHeaderFragment$$, $rowStart$$3$$, $totalRowHeight$$2$$) {
  var $isAppend$$4$$, $databodyContent$$1$$, $rowHeaderSupport$$, $rowHeaderContent$$2$$, $referenceRow$$2$$, $referenceRowHeader$$, $referenceRowTop$$, $insertStartPixel$$, $i$$14$$, $row$$3_rowHeader$$4$$, $newTop$$, $deltaY$$, $lastAnimatedElement$$, $transitionListener$$;
  $isAppend$$4$$ = $rowStart$$3$$ > $JSCompiler_StaticMethods__insertRowsWithAnimation$self$$.$m_endRow$;
  $databodyContent$$1$$ = $JSCompiler_StaticMethods__insertRowsWithAnimation$self$$.$m_databody$.firstChild;
  $rowHeaderSupport$$ = null == $rowHeaderFragment$$ ? !1 : !0;
  $referenceRow$$2$$ = $databodyContent$$1$$.childNodes[$rowStart$$3$$ - $JSCompiler_StaticMethods__insertRowsWithAnimation$self$$.$m_startRow$ - 1];
  $referenceRowTop$$ = $JSCompiler_StaticMethods_getElementDir$$($referenceRow$$2$$, "top");
  $insertStartPixel$$ = $referenceRowTop$$ + $JSCompiler_StaticMethods_getElementHeight$$($referenceRow$$2$$);
  $JSCompiler_StaticMethods_changeStyleProperty$$($referenceRow$$2$$, $JSCompiler_StaticMethods_getCssSupport$$("z-index"), 10);
  $rowHeaderSupport$$ && ($rowHeaderContent$$2$$ = $JSCompiler_StaticMethods__insertRowsWithAnimation$self$$.$m_rowHeader$.firstChild, $referenceRowHeader$$ = $rowHeaderContent$$2$$.childNodes[$rowStart$$3$$ - $JSCompiler_StaticMethods__insertRowsWithAnimation$self$$.$m_startRow$ - 1], $JSCompiler_StaticMethods_changeStyleProperty$$($referenceRowHeader$$, $JSCompiler_StaticMethods_getCssSupport$$("z-index"), 10));
  for ($i$$14$$ = 0;$i$$14$$ < $rowFragment$$.childNodes.length;$i$$14$$++) {
    $row$$3_rowHeader$$4$$ = $rowFragment$$.childNodes[$i$$14$$], $newTop$$ = $insertStartPixel$$ + $JSCompiler_StaticMethods_getElementDir$$($row$$3_rowHeader$$4$$, "top"), $deltaY$$ = $referenceRowTop$$ - $newTop$$, $JSCompiler_StaticMethods_setElementDir$$($row$$3_rowHeader$$4$$, $newTop$$, "top"), $JSCompiler_StaticMethods_addTransformMoveStyle$$($row$$3_rowHeader$$4$$, 0, 0, "linear", 0, $deltaY$$), $rowHeaderSupport$$ && ($row$$3_rowHeader$$4$$ = $rowHeaderFragment$$.childNodes[$i$$14$$], $JSCompiler_StaticMethods_setElementDir$$($row$$3_rowHeader$$4$$, 
    $newTop$$, "top"), $JSCompiler_StaticMethods_addTransformMoveStyle$$($row$$3_rowHeader$$4$$, 0, 0, "linear", 0, $deltaY$$));
  }
  for ($i$$14$$ = $rowStart$$3$$ - $JSCompiler_StaticMethods__insertRowsWithAnimation$self$$.$m_startRow$;$i$$14$$ < $databodyContent$$1$$.childNodes.length;$i$$14$$++) {
    $row$$3_rowHeader$$4$$ = $databodyContent$$1$$.childNodes[$i$$14$$], $newTop$$ = $totalRowHeight$$2$$ + $JSCompiler_StaticMethods_getElementDir$$($row$$3_rowHeader$$4$$, "top"), $deltaY$$ = -$totalRowHeight$$2$$, $JSCompiler_StaticMethods_setElementDir$$($row$$3_rowHeader$$4$$, $newTop$$, "top"), $JSCompiler_StaticMethods_addTransformMoveStyle$$($row$$3_rowHeader$$4$$, 0, 0, "linear", 0, $deltaY$$), $rowHeaderSupport$$ && ($row$$3_rowHeader$$4$$ = $rowHeaderContent$$2$$.childNodes[$i$$14$$], 
    $JSCompiler_StaticMethods_setElementDir$$($row$$3_rowHeader$$4$$, $newTop$$, "top"), $JSCompiler_StaticMethods_addTransformMoveStyle$$($row$$3_rowHeader$$4$$, 0, 0, "linear", 0, $deltaY$$));
  }
  $JSCompiler_StaticMethods__insertRowsWithAnimation$self$$.$m_endRow$ += $rowFragment$$.childNodes.length;
  $JSCompiler_StaticMethods__insertRowsWithAnimation$self$$.$m_endRowPixel$ += $totalRowHeight$$2$$;
  $rowHeaderSupport$$ && ($JSCompiler_StaticMethods__insertRowsWithAnimation$self$$.$m_endRowHeader$ += $rowHeaderFragment$$.childNodes.length, $JSCompiler_StaticMethods__insertRowsWithAnimation$self$$.$m_endRowHeaderPixel$ += $totalRowHeight$$2$$);
  $JSCompiler_StaticMethods_setElementHeight$$($databodyContent$$1$$, $JSCompiler_StaticMethods__insertRowsWithAnimation$self$$.$m_endRowPixel$ - $JSCompiler_StaticMethods__insertRowsWithAnimation$self$$.$m_startRowPixel$);
  $JSCompiler_StaticMethods_setElementHeight$$($JSCompiler_StaticMethods__insertRowsWithAnimation$self$$.$m_scroller$.firstChild, $JSCompiler_StaticMethods__insertRowsWithAnimation$self$$.$m_endRowPixel$ - $JSCompiler_StaticMethods__insertRowsWithAnimation$self$$.$m_startRowPixel$);
  $JSCompiler_StaticMethods_resizeGrid$$($JSCompiler_StaticMethods__insertRowsWithAnimation$self$$);
  $isAppend$$4$$ ? ($databodyContent$$1$$.appendChild($rowFragment$$), $rowHeaderSupport$$ && $rowHeaderContent$$2$$.appendChild($rowHeaderFragment$$)) : ($databodyContent$$1$$.insertBefore($rowFragment$$, $referenceRow$$2$$.nextSibling), $rowHeaderSupport$$ && $rowHeaderContent$$2$$.insertBefore($rowHeaderFragment$$, $referenceRowHeader$$.nextSibling));
  $JSCompiler_StaticMethods_updateRowBanding$$($JSCompiler_StaticMethods__insertRowsWithAnimation$self$$);
  $lastAnimatedElement$$ = $databodyContent$$1$$.lastChild;
  $transitionListener$$ = function $$transitionListener$$$() {
    $JSCompiler_StaticMethods__handleAnimationEnd$$($JSCompiler_StaticMethods__insertRowsWithAnimation$self$$);
    $lastAnimatedElement$$.removeEventListener("transitionend", $transitionListener$$, !1);
  };
  $lastAnimatedElement$$.addEventListener("transitionend", $transitionListener$$, !1);
  (0,window.setTimeout)(function() {
    var $rowFragment$$;
    for ($rowFragment$$ = $databodyContent$$1$$.childNodes.length - 1;$rowFragment$$ >= $rowStart$$3$$ - $JSCompiler_StaticMethods__insertRowsWithAnimation$self$$.$m_startRow$;$rowFragment$$--) {
      $JSCompiler_StaticMethods_addTransformMoveStyle$$($databodyContent$$1$$.childNodes[$rowFragment$$], "500ms", 0, "ease-out", 0, 0), $rowHeaderSupport$$ && $JSCompiler_StaticMethods_addTransformMoveStyle$$($rowHeaderContent$$2$$.childNodes[$rowFragment$$], "500ms", 0, "ease-out", 0, 0);
    }
  }, 0);
}, $JSCompiler_StaticMethods__addRows$$ = function $$JSCompiler_StaticMethods__addRows$$$($JSCompiler_StaticMethods__addRows$self$$, $fragment$$4$$, $isAppendOrInsert$$, $top$$5$$, $rowStart$$5$$, $rowCount$$6$$, $columnStart$$3$$, $columnRangeNeedsUpdate$$1$$, $cellSet$$3$$) {
  var $renderer$$4$$, $columnBandingInterval$$1$$, $rowBandingInterval$$, $horizontalGridlines$$2$$, $verticalGridlines$$2$$, $row$$5$$, $avgWidth$$3_index$$59$$, $totalRowHeight$$3$$, $height$$17_returnVal$$4$$, $i$$17$$;
  $renderer$$4$$ = $JSCompiler_StaticMethods_getRenderer$$($JSCompiler_StaticMethods__addRows$self$$.$m_options$, "cell");
  $columnBandingInterval$$1$$ = $JSCompiler_StaticMethods_getColumnBandingInterval$$($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  $rowBandingInterval$$ = $JSCompiler_StaticMethods_getRowBandingInterval$$($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  $horizontalGridlines$$2$$ = $JSCompiler_StaticMethods_getHorizontalGridlines$$($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  $verticalGridlines$$2$$ = $JSCompiler_StaticMethods_getVerticalGridlines$$($JSCompiler_StaticMethods__addRows$self$$.$m_options$);
  for ($i$$17$$ = $totalRowHeight$$3$$ = 0;$i$$17$$ < $rowCount$$6$$;$i$$17$$ += 1) {
    $avgWidth$$3_index$$59$$ = $isAppendOrInsert$$ ? $rowStart$$5$$ + $i$$17$$ : $rowStart$$5$$ + ($rowCount$$6$$ - 1 - $i$$17$$), $row$$5$$ = window.document.createElement("div"), $row$$5$$.className = $JSCompiler_StaticMethods__addRows$self$$.getMappedStyle("row"), 1 === Math.floor($avgWidth$$3_index$$59$$ / $rowBandingInterval$$) % 2 && ($row$$5$$.className += " " + $JSCompiler_StaticMethods__addRows$self$$.getMappedStyle("banded")), $JSCompiler_StaticMethods__addRows$self$$.$m_root$.appendChild($row$$5$$), 
    $height$$17_returnVal$$4$$ = $JSCompiler_StaticMethods_addCellsToRow$$($JSCompiler_StaticMethods__addRows$self$$, $cellSet$$3$$, $row$$5$$, $avgWidth$$3_index$$59$$, $renderer$$4$$, !0, $columnStart$$3$$, $i$$17$$ == $rowCount$$6$$ - 1 && $columnRangeNeedsUpdate$$1$$, $columnBandingInterval$$1$$, $horizontalGridlines$$2$$, $verticalGridlines$$2$$, $top$$5$$), $avgWidth$$3_index$$59$$ = $height$$17_returnVal$$4$$.avgWidth, $height$$17_returnVal$$4$$ = $height$$17_returnVal$$4$$.height, $totalRowHeight$$3$$ += 
    $height$$17_returnVal$$4$$, $isAppendOrInsert$$ ? ($row$$5$$.style.top = $top$$5$$ + "px", $top$$5$$ += $height$$17_returnVal$$4$$, $fragment$$4$$.appendChild($row$$5$$)) : ($top$$5$$ -= $height$$17_returnVal$$4$$, $row$$5$$.style.top = $top$$5$$ + "px", $fragment$$4$$.insertBefore($row$$5$$, $fragment$$4$$.firstChild));
  }
  return{avgWidth:$avgWidth$$3_index$$59$$, totalRowHeight:$totalRowHeight$$3$$, top:$top$$5$$};
}, $JSCompiler_StaticMethods_pushRowsDown$$ = function $$JSCompiler_StaticMethods_pushRowsDown$$$($row$$6$$, $adjustment$$) {
  for (;$row$$6$$;) {
    $row$$6$$.style.top = $JSCompiler_StaticMethods_getElementDir$$($row$$6$$, "top") + $adjustment$$ + "px", $row$$6$$ = $row$$6$$.nextSibling;
  }
}, $JSCompiler_StaticMethods_getRowHeaderWidth$$ = function $$JSCompiler_StaticMethods_getRowHeaderWidth$$$($JSCompiler_StaticMethods_getRowHeaderWidth$self$$) {
  return-1 === $JSCompiler_StaticMethods_getRowHeaderWidth$self$$.$m_endRowHeader$ ? 0 : $JSCompiler_StaticMethods_getRowHeaderWidth$self$$.$m_rowHeaderWidth$;
}, $JSCompiler_StaticMethods_getColumnHeaderHeight$$ = function $$JSCompiler_StaticMethods_getColumnHeaderHeight$$$($JSCompiler_StaticMethods_getColumnHeaderHeight$self$$) {
  return-1 === $JSCompiler_StaticMethods_getColumnHeaderHeight$self$$.$m_endColHeader$ ? 0 : $JSCompiler_StaticMethods_getColumnHeaderHeight$self$$.$m_colHeaderHeight$;
}, $JSCompiler_StaticMethods_getRowBottom$$ = function $$JSCompiler_StaticMethods_getRowBottom$$$($JSCompiler_StaticMethods_getRowBottom$self_height$$18$$, $row$$8$$, $bottom$$1_top$$8$$) {
  var $colHeaderHeight$$3$$;
  $colHeaderHeight$$3$$ = $JSCompiler_StaticMethods_getColumnHeaderHeight$$($JSCompiler_StaticMethods_getRowBottom$self_height$$18$$);
  if (null != $bottom$$1_top$$8$$) {
    return $colHeaderHeight$$3$$ + $bottom$$1_top$$8$$;
  }
  $bottom$$1_top$$8$$ = $JSCompiler_StaticMethods_getElementDir$$($row$$8$$, "top");
  $JSCompiler_StaticMethods_getRowBottom$self_height$$18$$ = $JSCompiler_StaticMethods_calculateRowHeight$$($JSCompiler_StaticMethods_getRowBottom$self_height$$18$$, $row$$8$$);
  return(0,window.isNaN)($bottom$$1_top$$8$$) || (0,window.isNaN)($JSCompiler_StaticMethods_getRowBottom$self_height$$18$$) ? $colHeaderHeight$$3$$ : $colHeaderHeight$$3$$ + $bottom$$1_top$$8$$ + $JSCompiler_StaticMethods_getRowBottom$self_height$$18$$;
}, $JSCompiler_StaticMethods_addCellsToRow$$ = function $$JSCompiler_StaticMethods_addCellsToRow$$$($JSCompiler_StaticMethods_addCellsToRow$self$$, $cellSet$$4$$, $row$$9$$, $rowIndex$$, $renderer$$5$$, $isRowFetch$$, $columnStart$$4$$, $updateColumnRangeInfo$$, $columnBandingInterval$$2$$, $horizontalGridlines$$3$$, $verticalGridlines$$3$$, $bottom$$2$$) {
  var $isAppend$$5$$, $cellContent$$, $firstColumn$$, $indexes$$8_indexes$$inline_702_inlineStyle$$1_inlineStyleClass_width$$17$$, $cellStyleClass_data$$inline_703_shimHeaderContext_styleClass$$2$$, $currentLeft$$, $dir$$5$$, $totalWidth$$, $columnCount$$2$$, $cellData_content$$1$$, $cellMetadata_metadata$$inline_704_shimHeader$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_701_cellContext$$1$$, $j$$3$$, $cell$$1$$, $columnIndex_textWrapper$$1$$, $selectionAffordanceAppend$$, $height$$19_rowKey$$;
  $isAppend$$5$$ = $columnStart$$4$$ >= $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_startCol$;
  $firstColumn$$ = $row$$9$$.firstChild;
  $currentLeft$$ = $isRowFetch$$ || !$isAppend$$5$$ ? $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_startColPixel$ : $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_endColPixel$;
  $JSCompiler_StaticMethods_isTouchDevice$$($JSCompiler_StaticMethods_addCellsToRow$self$$.$m_utils$) && $JSCompiler_StaticMethods_containsCSSClassName$$($row$$9$$.lastChild, $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("toucharea")) && ($selectionAffordanceAppend$$ = $JSCompiler_StaticMethods_containsCSSClassName$$($row$$9$$.children[$row$$9$$.children.length - 2], $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("toucharea")) ? $row$$9$$.children[$row$$9$$.children.length - 
  2] : $row$$9$$.lastChild);
  $dir$$5$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  $totalWidth$$ = 0;
  $columnCount$$2$$ = $cellSet$$4$$.getCount("column");
  for ($j$$3$$ = 0;$j$$3$$ < $columnCount$$2$$;$j$$3$$ += 1) {
    $columnIndex_textWrapper$$1$$ = $isAppend$$5$$ || $isRowFetch$$ ? $columnStart$$4$$ + $j$$3$$ : $columnStart$$4$$ + ($columnCount$$2$$ - 1 - $j$$3$$);
    $indexes$$8_indexes$$inline_702_inlineStyle$$1_inlineStyleClass_width$$17$$ = {row:$rowIndex$$, column:$columnIndex_textWrapper$$1$$};
    $cellData_content$$1$$ = $cellSet$$4$$.getData($indexes$$8_indexes$$inline_702_inlineStyle$$1_inlineStyleClass_width$$17$$);
    $cellMetadata_metadata$$inline_704_shimHeader$$ = $cellSet$$4$$.getMetadata($indexes$$8_indexes$$inline_702_inlineStyle$$1_inlineStyleClass_width$$17$$);
    $cell$$1$$ = window.document.createElement("div");
    $cell$$1$$.setAttribute("tabIndex", -1);
    $cellContent$$ = window.document.createElement("div");
    $cellContent$$.className = $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("cellcontent");
    $cell$$1$$.appendChild($cellContent$$);
    $JSCompiler_StaticMethods_createCellContext$self$$inline_701_cellContext$$1$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$;
    $cellStyleClass_data$$inline_703_shimHeaderContext_styleClass$$2$$ = $cellData_content$$1$$;
    var $cellContext$$inline_706$$ = void 0, $prop$$inline_707$$ = void 0, $cellContext$$inline_706$$ = {};
    $cellContext$$inline_706$$.parentElement = $cell$$1$$.firstChild;
    $cellContext$$inline_706$$.indexes = $indexes$$8_indexes$$inline_702_inlineStyle$$1_inlineStyleClass_width$$17$$;
    $cellContext$$inline_706$$.data = $cellStyleClass_data$$inline_703_shimHeaderContext_styleClass$$2$$;
    $cellContext$$inline_706$$.component = $JSCompiler_StaticMethods_createCellContext$self$$inline_701_cellContext$$1$$;
    $cellContext$$inline_706$$.datasource = $JSCompiler_StaticMethods_createCellContext$self$$inline_701_cellContext$$1$$.$m_dataSource$;
    for ($prop$$inline_707$$ in $cellMetadata_metadata$$inline_704_shimHeader$$) {
      $cellMetadata_metadata$$inline_704_shimHeader$$.hasOwnProperty($prop$$inline_707$$) && ($cellContext$$inline_706$$[$prop$$inline_707$$] = $cellMetadata_metadata$$inline_704_shimHeader$$[$prop$$inline_707$$]);
    }
    null != $JSCompiler_StaticMethods_createCellContext$self$$inline_701_cellContext$$1$$.$m_createContextCallback$ && $JSCompiler_StaticMethods_createCellContext$self$$inline_701_cellContext$$1$$.$m_createContextCallback$.call($JSCompiler_StaticMethods_createCellContext$self$$inline_701_cellContext$$1$$, $cellContext$$inline_706$$);
    $JSCompiler_StaticMethods_createCellContext$self$$inline_701_cellContext$$1$$ = $cellContext$$inline_706$$;
    $cell$$1$$.id = $JSCompiler_StaticMethods_createSubId$$($JSCompiler_StaticMethods_addCellsToRow$self$$, "r" + $JSCompiler_StaticMethods_createCellContext$self$$inline_701_cellContext$$1$$.keys.row + "c" + $JSCompiler_StaticMethods_createCellContext$self$$inline_701_cellContext$$1$$.keys.column);
    $cell$$1$$[$JSCompiler_StaticMethods_addCellsToRow$self$$.$m_resources$.getMappedAttribute("context")] = $JSCompiler_StaticMethods_createCellContext$self$$inline_701_cellContext$$1$$;
    null == $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods_addCellsToRow$self$$, $row$$9$$) && ($height$$19_rowKey$$ = $JSCompiler_StaticMethods_createCellContext$self$$inline_701_cellContext$$1$$.keys.row, $JSCompiler_StaticMethods__setKey$$($JSCompiler_StaticMethods_addCellsToRow$self$$, $row$$9$$, $height$$19_rowKey$$), -1 == $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_endRowHeader$ ? ($cellStyleClass_data$$inline_703_shimHeaderContext_styleClass$$2$$ = $JSCompiler_StaticMethods_createHeaderContext$$($JSCompiler_StaticMethods_addCellsToRow$self$$, 
    "row", $rowIndex$$, null, {key:$height$$19_rowKey$$}, null, 0, 0, 1), $indexes$$8_indexes$$inline_702_inlineStyle$$1_inlineStyleClass_width$$17$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getInlineStyle$("row", $cellStyleClass_data$$inline_703_shimHeaderContext_styleClass$$2$$), $cellStyleClass_data$$inline_703_shimHeaderContext_styleClass$$2$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getStyleClass$("row", $cellStyleClass_data$$inline_703_shimHeaderContext_styleClass$$2$$), 
    $cellMetadata_metadata$$inline_704_shimHeader$$ = window.document.createElement("div"), $cellMetadata_metadata$$inline_704_shimHeader$$.style.cssText = $indexes$$8_indexes$$inline_702_inlineStyle$$1_inlineStyleClass_width$$17$$, $cellMetadata_metadata$$inline_704_shimHeader$$.className = $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("row") + " " + $cellStyleClass_data$$inline_703_shimHeaderContext_styleClass$$2$$, $height$$19_rowKey$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$getRowHeight$($cellMetadata_metadata$$inline_704_shimHeader$$, 
    $height$$19_rowKey$$)) : $height$$19_rowKey$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$getRowHeight$($row$$9$$, $height$$19_rowKey$$), $JSCompiler_StaticMethods_setElementHeight$$($row$$9$$, $height$$19_rowKey$$));
    $indexes$$8_indexes$$inline_702_inlineStyle$$1_inlineStyleClass_width$$17$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getInlineStyle$("cell", $JSCompiler_StaticMethods_createCellContext$self$$inline_701_cellContext$$1$$);
    null != $indexes$$8_indexes$$inline_702_inlineStyle$$1_inlineStyleClass_width$$17$$ && ($cell$$1$$.style.cssText = $indexes$$8_indexes$$inline_702_inlineStyle$$1_inlineStyleClass_width$$17$$);
    "" != $cell$$1$$.style.height && ($cell$$1$$.style.height = "");
    "" != $cell$$1$$.style.width && ($cell$$1$$.style.width = "");
    $cellStyleClass_data$$inline_703_shimHeaderContext_styleClass$$2$$ = 1 === Math.floor($columnIndex_textWrapper$$1$$ / $columnBandingInterval$$2$$) % 2 ? $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("cell") + " " + $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("banded") : $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("cell");
    $indexes$$8_indexes$$inline_702_inlineStyle$$1_inlineStyleClass_width$$17$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getStyleClass$("cell", $JSCompiler_StaticMethods_createCellContext$self$$inline_701_cellContext$$1$$);
    $cell$$1$$.className = null != $indexes$$8_indexes$$inline_702_inlineStyle$$1_inlineStyleClass_width$$17$$ ? $cellStyleClass_data$$inline_703_shimHeaderContext_styleClass$$2$$ + " " + $indexes$$8_indexes$$inline_702_inlineStyle$$1_inlineStyleClass_width$$17$$ : $cellStyleClass_data$$inline_703_shimHeaderContext_styleClass$$2$$;
    -1 != $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_endColHeader$ || 0 != $rowIndex$$ || $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_initialized$ ? $indexes$$8_indexes$$inline_702_inlineStyle$$1_inlineStyleClass_width$$17$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$getColumnWidth$($cell$$1$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_701_cellContext$$1$$.keys.column) : ($cellStyleClass_data$$inline_703_shimHeaderContext_styleClass$$2$$ = $JSCompiler_StaticMethods_createHeaderContext$$($JSCompiler_StaticMethods_addCellsToRow$self$$, 
    "column", $columnIndex_textWrapper$$1$$, null, {key:$JSCompiler_StaticMethods_createCellContext$self$$inline_701_cellContext$$1$$.keys.column}, null, 0, 0, 1), $indexes$$8_indexes$$inline_702_inlineStyle$$1_inlineStyleClass_width$$17$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getInlineStyle$("column", $cellStyleClass_data$$inline_703_shimHeaderContext_styleClass$$2$$), $cellStyleClass_data$$inline_703_shimHeaderContext_styleClass$$2$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_options$.$getStyleClass$("column", 
    $cellStyleClass_data$$inline_703_shimHeaderContext_styleClass$$2$$), $cellMetadata_metadata$$inline_704_shimHeader$$ = window.document.createElement("div"), $cellMetadata_metadata$$inline_704_shimHeader$$.style.cssText = $indexes$$8_indexes$$inline_702_inlineStyle$$1_inlineStyleClass_width$$17$$, $cellMetadata_metadata$$inline_704_shimHeader$$.className = $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("colheadercell") + " " + $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("headercell") + 
    " " + $cellStyleClass_data$$inline_703_shimHeaderContext_styleClass$$2$$, $indexes$$8_indexes$$inline_702_inlineStyle$$1_inlineStyleClass_width$$17$$ = $JSCompiler_StaticMethods_addCellsToRow$self$$.$getColumnWidth$($cellMetadata_metadata$$inline_704_shimHeader$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_701_cellContext$$1$$.keys.column));
    $JSCompiler_StaticMethods_setElementWidth$$($cell$$1$$, $indexes$$8_indexes$$inline_702_inlineStyle$$1_inlineStyleClass_width$$17$$);
    if ("hidden" === $verticalGridlines$$3$$ || $JSCompiler_StaticMethods__isLastColumn$$($JSCompiler_StaticMethods_addCellsToRow$self$$, $columnIndex_textWrapper$$1$$) && $JSCompiler_StaticMethods_getRowHeaderWidth$$($JSCompiler_StaticMethods_addCellsToRow$self$$) + $currentLeft$$ + $indexes$$8_indexes$$inline_702_inlineStyle$$1_inlineStyleClass_width$$17$$ >= $JSCompiler_StaticMethods_addCellsToRow$self$$.getWidth()) {
      "left" === $dir$$5$$ ? $cell$$1$$.style.borderRightStyle = "none" : $cell$$1$$.style.borderLeftStyle = "none";
    }
    "hidden" === $horizontalGridlines$$3$$ ? $cell$$1$$.style.borderBottomStyle = "none" : $JSCompiler_StaticMethods__isLastRow$$($JSCompiler_StaticMethods_addCellsToRow$self$$, $rowIndex$$) && (null != $bottom$$2$$ && $columnIndex_textWrapper$$1$$ == $columnStart$$4$$ && ($bottom$$2$$ += $JSCompiler_StaticMethods_getElementHeight$$($row$$9$$)), $JSCompiler_StaticMethods_getRowBottom$$($JSCompiler_StaticMethods_addCellsToRow$self$$, $row$$9$$, $bottom$$2$$) >= $JSCompiler_StaticMethods_addCellsToRow$self$$.getHeight() && 
    ($cell$$1$$.style.borderBottomStyle = "none"));
    $isAppend$$5$$ || $isRowFetch$$ ? $JSCompiler_StaticMethods_setElementDir$$($cell$$1$$, $currentLeft$$, $dir$$5$$) : $JSCompiler_StaticMethods_setElementDir$$($cell$$1$$, $currentLeft$$ - $indexes$$8_indexes$$inline_702_inlineStyle$$1_inlineStyleClass_width$$17$$, $dir$$5$$);
    $isAppend$$5$$ || $isRowFetch$$ ? ($selectionAffordanceAppend$$ ? $row$$9$$.insertBefore($cell$$1$$, $selectionAffordanceAppend$$) : $row$$9$$.appendChild($cell$$1$$), $currentLeft$$ += $indexes$$8_indexes$$inline_702_inlineStyle$$1_inlineStyleClass_width$$17$$) : ($row$$9$$.insertBefore($cell$$1$$, $firstColumn$$), $firstColumn$$ = $cell$$1$$, $currentLeft$$ -= $indexes$$8_indexes$$inline_702_inlineStyle$$1_inlineStyleClass_width$$17$$);
    null != $renderer$$5$$ ? ($cellData_content$$1$$ = $renderer$$5$$.call($JSCompiler_StaticMethods_addCellsToRow$self$$, $JSCompiler_StaticMethods_createCellContext$self$$inline_701_cellContext$$1$$), null != $cellData_content$$1$$ && (null === $cellData_content$$1$$.parentNode || $cellData_content$$1$$.parentNode instanceof window.DocumentFragment ? $cellContent$$.appendChild($cellData_content$$1$$) : null == $cellData_content$$1$$.parentNode && $cellData_content$$1$$.toString && ($columnIndex_textWrapper$$1$$ = 
    window.document.createElement("span"), $columnIndex_textWrapper$$1$$.className = $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("celltext"), $columnIndex_textWrapper$$1$$.appendChild(window.document.createTextNode($cellData_content$$1$$.toString())), $cellContent$$.appendChild($columnIndex_textWrapper$$1$$))), $JSCompiler_StaticMethods__disableAllFocusableElements$$($JSCompiler_StaticMethods_addCellsToRow$self$$, $cell$$1$$)) : (null == $cellData_content$$1$$ && ($cellData_content$$1$$ = 
    ""), $columnIndex_textWrapper$$1$$ = window.document.createElement("span"), $columnIndex_textWrapper$$1$$.className = $JSCompiler_StaticMethods_addCellsToRow$self$$.getMappedStyle("celltext"), $columnIndex_textWrapper$$1$$.appendChild(window.document.createTextNode($cellData_content$$1$$.toString())), $cellContent$$.appendChild($columnIndex_textWrapper$$1$$));
    $updateColumnRangeInfo$$ && ($isAppend$$5$$ || $isRowFetch$$ ? $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_endColPixel$ += $indexes$$8_indexes$$inline_702_inlineStyle$$1_inlineStyleClass_width$$17$$ : $JSCompiler_StaticMethods_addCellsToRow$self$$.$m_startColPixel$ -= $indexes$$8_indexes$$inline_702_inlineStyle$$1_inlineStyleClass_width$$17$$, $totalWidth$$ += $indexes$$8_indexes$$inline_702_inlineStyle$$1_inlineStyleClass_width$$17$$);
  }
  return $updateColumnRangeInfo$$ && 0 < $columnCount$$2$$ ? {avgWidth:$totalWidth$$ / $columnCount$$2$$, height:$height$$19_rowKey$$} : {avgWidth:null, height:$height$$19_rowKey$$};
};
$DvtDataGrid$$.prototype.$handleCellsFetchError$ = function $$DvtDataGrid$$$$$handleCellsFetchError$$($errorStatus$$, $cellRange$$4$$) {
  var $rowRange$$4$$, $columnRange$$4$$;
  this.$m_fetching$.cells = !1;
  $JSCompiler_StaticMethods_hideStatusText$$(this);
  null == this.$m_databody$.firstChild ? $JSCompiler_StaticMethods__shouldInitialize$$(this) && $JSCompiler_StaticMethods__handleInitialization$$(this, !0) : ($rowRange$$4$$ = $cellRange$$4$$[0], $columnRange$$4$$ = $cellRange$$4$$[1], $columnRange$$4$$.start + $columnRange$$4$$.count - 1 > this.$m_endCol$ && (this.$m_stopColumnHeaderFetch$ = this.$m_stopColumnFetch$ = !0), $rowRange$$4$$.start + $rowRange$$4$$.count - 1 > this.$m_endRow$ && (this.$m_stopRowHeaderFetch$ = this.$m_stopRowFetch$ = 
  !0));
};
var $JSCompiler_StaticMethods_showStatusText$$ = function $$JSCompiler_StaticMethods_showStatusText$$$($JSCompiler_StaticMethods_showStatusText$self$$) {
  var $left$$5_msg$$;
  $left$$5_msg$$ = $JSCompiler_StaticMethods_showStatusText$self$$.$m_resources$.getTranslatedText("msgFetchingData");
  "block" != $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.style.display && ($JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.textContent = $left$$5_msg$$, $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.style.display = "block", $left$$5_msg$$ = $JSCompiler_StaticMethods_showStatusText$self$$.getWidth() / 2 - $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.offsetWidth / 2, $JSCompiler_StaticMethods_showStatusText$self$$.$m_status$.style.left = $left$$5_msg$$ + 
  "px");
}, $JSCompiler_StaticMethods_hideStatusText$$ = function $$JSCompiler_StaticMethods_hideStatusText$$$($JSCompiler_StaticMethods_hideStatusText$self$$) {
  $JSCompiler_StaticMethods_hideStatusText$self$$.$m_status$.style.display = "none";
}, $JSCompiler_StaticMethods_getFocusableElementsInNode$$ = function $$JSCompiler_StaticMethods_getFocusableElementsInNode$$$($JSCompiler_StaticMethods_getFocusableElementsInNode$self_attr$$, $node$$3_nodes$$, $skipTabIndexCheck$$) {
  var $inputElems$$, $elem$$5$$, $nodeCount$$, $inputRegExp$$, $i$$18$$;
  $inputElems$$ = [];
  $JSCompiler_StaticMethods_getFocusableElementsInNode$self_attr$$ = $JSCompiler_StaticMethods_getFocusableElementsInNode$self_attr$$.$m_resources$.getMappedAttribute("tabMod");
  if (window.document.evaluate) {
    for ($node$$3_nodes$$ = window.document.evaluate(".//input|.//select|.//textarea|.//button|.//a|.//INPUT|.//SELECT|.//TEXTAREA|.//BUTTON|.//A|.//*[@tabindex\x3e\x3d0]|.//*[@" + $JSCompiler_StaticMethods_getFocusableElementsInNode$self_attr$$ + "\x3e\x3d0]", $node$$3_nodes$$, null, window.XPathResult.ANY_TYPE, null), $elem$$5$$ = $node$$3_nodes$$.iterateNext();$elem$$5$$;) {
      !$elem$$5$$.disabled && ($skipTabIndexCheck$$ || !$elem$$5$$.tabIndex || 0 < $elem$$5$$.tabIndex || 0 <= (0,window.parseInt)($elem$$5$$.getAttribute($JSCompiler_StaticMethods_getFocusableElementsInNode$self_attr$$))) && $inputElems$$.push($elem$$5$$), $elem$$5$$ = $node$$3_nodes$$.iterateNext();
    }
  } else {
    for ($node$$3_nodes$$ = $node$$3_nodes$$.getElementsByTagName("*"), $nodeCount$$ = $node$$3_nodes$$.length, $inputRegExp$$ = /^INPUT|SELECT|BUTTON|^A\b|TEXTAREA/, $i$$18$$ = 0;$i$$18$$ < $nodeCount$$;$i$$18$$ += 1) {
      $elem$$5$$ = $node$$3_nodes$$[$i$$18$$], $elem$$5$$.tagName.match($inputRegExp$$) && !$elem$$5$$.disabled && ($skipTabIndexCheck$$ || !$elem$$5$$.tabIndex || 0 <= $elem$$5$$.tabIndex || 0 <= (0,window.parseInt)($elem$$5$$.getAttribute($JSCompiler_StaticMethods_getFocusableElementsInNode$self_attr$$))) && $inputElems$$.push($elem$$5$$);
    }
  }
  return $inputElems$$;
}, $JSCompiler_StaticMethods__disableAllFocusableElements$$ = function $$JSCompiler_StaticMethods__disableAllFocusableElements$$$($JSCompiler_StaticMethods__disableAllFocusableElements$self$$, $cell$$2$$) {
  var $focusElems$$, $i$$19$$, $tabIndex$$, $attr$$1$$;
  $attr$$1$$ = $JSCompiler_StaticMethods__disableAllFocusableElements$self$$.$m_resources$.getMappedAttribute("tabMod");
  $focusElems$$ = $JSCompiler_StaticMethods_getFocusableElementsInNode$$($JSCompiler_StaticMethods__disableAllFocusableElements$self$$, $cell$$2$$);
  for ($i$$19$$ = 0;$i$$19$$ < $focusElems$$.length;$i$$19$$++) {
    if ($tabIndex$$ = (0,window.parseInt)($focusElems$$[$i$$19$$].tabIndex, 10), (0,window.isNaN)($tabIndex$$) || 0 <= $tabIndex$$) {
      $focusElems$$[$i$$19$$].setAttribute($attr$$1$$, (0,window.isNaN)($tabIndex$$) ? -1 : $tabIndex$$), $focusElems$$[$i$$19$$].setAttribute("tabIndex", -1);
    }
  }
}, $JSCompiler_StaticMethods_isActionableMode$$ = function $$JSCompiler_StaticMethods_isActionableMode$$$($JSCompiler_StaticMethods_isActionableMode$self$$) {
  return "actionable" == $JSCompiler_StaticMethods_isActionableMode$self$$.$m_keyMode$;
}, $JSCompiler_StaticMethods_setActionableMode$$ = function $$JSCompiler_StaticMethods_setActionableMode$$$($JSCompiler_StaticMethods_setActionableMode$self$$, $flag$$1$$) {
  $JSCompiler_StaticMethods_setActionableMode$self$$.$m_keyMode$ = $flag$$1$$ ? "actionable" : "navigation";
  $JSCompiler_StaticMethods__setAccInfoText$$($JSCompiler_StaticMethods_setActionableMode$self$$, "actionable" === $JSCompiler_StaticMethods_setActionableMode$self$$.$m_keyMode$ ? "accessibleActionableMode" : "accessibleNavigationMode");
};
$DvtDataGrid$$.prototype.$handleScroll$ = function $$DvtDataGrid$$$$$handleScroll$$($event$$4_scroller$$9$$) {
  if (!$JSCompiler_StaticMethods_isTouchDevice$$(this.$m_utils$)) {
    if (!0 == this.$m_silentScroll$) {
      this.$m_silentScroll$ = !1;
    } else {
      var $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_709_scrollLeft_width$$inline_711$$;
      $event$$4_scroller$$9$$ || ($event$$4_scroller$$9$$ = window.event);
      $event$$4_scroller$$9$$ = $event$$4_scroller$$9$$.target ? $event$$4_scroller$$9$$.target : $event$$4_scroller$$9$$.srcElement;
      $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_709_scrollLeft_width$$inline_711$$ = this.$m_utils$;
      var $elemWidth$$inline_712$$;
      $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_709_scrollLeft_width$$inline_711$$.$dataGrid$.$m_resources$.isRTLMode() ? "gecko" == $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_709_scrollLeft_width$$inline_711$$.platform || "ie" == $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_709_scrollLeft_width$$inline_711$$.platform || "edge" == $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_709_scrollLeft_width$$inline_711$$.platform ? $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_709_scrollLeft_width$$inline_711$$ = 
      Math.abs($event$$4_scroller$$9$$.scrollLeft) : ($JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_709_scrollLeft_width$$inline_711$$ = $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_709_scrollLeft_width$$inline_711$$.$dataGrid$.$m_scroller$.firstChild), $elemWidth$$inline_712$$ = $event$$4_scroller$$9$$.clientWidth, $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_709_scrollLeft_width$$inline_711$$ = Math.max(0, $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_709_scrollLeft_width$$inline_711$$ - 
      $elemWidth$$inline_712$$ - $event$$4_scroller$$9$$.scrollLeft)) : $JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_709_scrollLeft_width$$inline_711$$ = $event$$4_scroller$$9$$.scrollLeft;
      this.scrollTo($JSCompiler_StaticMethods_getElementScrollLeft$self$$inline_709_scrollLeft_width$$inline_711$$, $event$$4_scroller$$9$$.scrollTop);
    }
  }
};
var $JSCompiler_StaticMethods__getMaxScrollHeight$$ = function $$JSCompiler_StaticMethods__getMaxScrollHeight$$$($JSCompiler_StaticMethods__getMaxScrollHeight$self$$) {
  return $JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$($JSCompiler_StaticMethods__getMaxScrollHeight$self$$, "row") && !$JSCompiler_StaticMethods__getMaxScrollHeight$self$$.$m_stopRowFetch$ ? Number.MAX_VALUE : $JSCompiler_StaticMethods__getMaxScrollHeight$self$$.$m_scrollHeight$;
};
$DvtDataGrid$$.prototype.scroll = function $$DvtDataGrid$$$$scroll$($options$$5_scrollTop$$1$$) {
  var $scrollLeft$$1$$;
  null != $options$$5_scrollTop$$1$$.position && ($scrollLeft$$1$$ = Math.max(0, Math.min($JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$(this, "column") && !this.$m_stopColumnFetch$ ? Number.MAX_VALUE : this.$m_scrollWidth$, $options$$5_scrollTop$$1$$.position.scrollX)), $options$$5_scrollTop$$1$$ = Math.max(0, Math.min($JSCompiler_StaticMethods__getMaxScrollHeight$$(this), $options$$5_scrollTop$$1$$.position.scrollY)), $JSCompiler_StaticMethods__initiateScroll$$(this, $scrollLeft$$1$$, 
  $options$$5_scrollTop$$1$$));
};
$DvtDataGrid$$.prototype.scroll = $DvtDataGrid$$.prototype.scroll;
var $JSCompiler_StaticMethods_scrollDelta$$ = function $$JSCompiler_StaticMethods_scrollDelta$$$($JSCompiler_StaticMethods_scrollDelta$self$$, $deltaX_scrollLeft$$2$$, $deltaY$$1_scrollTop$$2$$) {
  0 != $deltaX_scrollLeft$$2$$ && 0 != $deltaY$$1_scrollTop$$2$$ && (Math.abs($deltaX_scrollLeft$$2$$) > Math.abs($deltaY$$1_scrollTop$$2$$) ? ($deltaY$$1_scrollTop$$2$$ = 0, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_extraScrollOverY$ = null) : ($deltaX_scrollLeft$$2$$ = 0, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_extraScrollOverX$ = null));
  $deltaX_scrollLeft$$2$$ = Math.max(0, Math.min($JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$($JSCompiler_StaticMethods_scrollDelta$self$$, "column") && !$JSCompiler_StaticMethods_scrollDelta$self$$.$m_stopColumnFetch$ ? Number.MAX_VALUE : $JSCompiler_StaticMethods_scrollDelta$self$$.$m_scrollWidth$, $JSCompiler_StaticMethods_scrollDelta$self$$.$m_currentScrollLeft$ - $deltaX_scrollLeft$$2$$));
  $deltaY$$1_scrollTop$$2$$ = Math.max(0, Math.min($JSCompiler_StaticMethods__getMaxScrollHeight$$($JSCompiler_StaticMethods_scrollDelta$self$$), $JSCompiler_StaticMethods_scrollDelta$self$$.$m_currentScrollTop$ - $deltaY$$1_scrollTop$$2$$));
  $JSCompiler_StaticMethods__initiateScroll$$($JSCompiler_StaticMethods_scrollDelta$self$$, $deltaX_scrollLeft$$2$$, $deltaY$$1_scrollTop$$2$$);
}, $JSCompiler_StaticMethods__initiateScroll$$ = function $$JSCompiler_StaticMethods__initiateScroll$$$($JSCompiler_StaticMethods__initiateScroll$self$$, $scrollLeft$$3$$, $scrollTop$$3$$) {
  if ($JSCompiler_StaticMethods_isTouchDevice$$($JSCompiler_StaticMethods__initiateScroll$self$$.$m_utils$)) {
    $JSCompiler_StaticMethods__initiateScroll$self$$.scrollTo($scrollLeft$$3$$, $scrollTop$$3$$);
  } else {
    var $JSCompiler_StaticMethods_setElementScrollLeft$self$$inline_718_width$$inline_721$$ = $JSCompiler_StaticMethods__initiateScroll$self$$.$m_utils$, $element$$inline_719$$ = $JSCompiler_StaticMethods__initiateScroll$self$$.$m_scroller$, $elemWidth$$inline_722$$;
    $JSCompiler_StaticMethods_setElementScrollLeft$self$$inline_718_width$$inline_721$$.$dataGrid$.$m_resources$.isRTLMode() ? "gecko" === $JSCompiler_StaticMethods_setElementScrollLeft$self$$inline_718_width$$inline_721$$.platform ? $element$$inline_719$$.scrollLeft = -$scrollLeft$$3$$ : "ie" == $JSCompiler_StaticMethods_setElementScrollLeft$self$$inline_718_width$$inline_721$$.platform || "edge" == $JSCompiler_StaticMethods_setElementScrollLeft$self$$inline_718_width$$inline_721$$.platform ? $element$$inline_719$$.scrollLeft = 
    $scrollLeft$$3$$ : ($JSCompiler_StaticMethods_setElementScrollLeft$self$$inline_718_width$$inline_721$$ = $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_setElementScrollLeft$self$$inline_718_width$$inline_721$$.$dataGrid$.$m_scroller$.firstChild), $elemWidth$$inline_722$$ = $element$$inline_719$$.clientWidth, $element$$inline_719$$.scrollLeft = $JSCompiler_StaticMethods_setElementScrollLeft$self$$inline_718_width$$inline_721$$ - $elemWidth$$inline_722$$ - $scrollLeft$$3$$) : 
    $element$$inline_719$$.scrollLeft = $scrollLeft$$3$$;
    $JSCompiler_StaticMethods__initiateScroll$self$$.$m_scroller$.scrollTop = $scrollTop$$3$$;
  }
}, $JSCompiler_StaticMethods__disableTouchScrollAnimation$$ = function $$JSCompiler_StaticMethods__disableTouchScrollAnimation$$$($JSCompiler_StaticMethods__disableTouchScrollAnimation$self$$) {
  $JSCompiler_StaticMethods__disableTouchScrollAnimation$self$$.$m_databody$.firstChild.style.webkitTransitionDuration = "0ms";
  $JSCompiler_StaticMethods__disableTouchScrollAnimation$self$$.$m_rowHeader$.firstChild.style.webkitTransitionDuration = "0ms";
  $JSCompiler_StaticMethods__disableTouchScrollAnimation$self$$.$m_colHeader$.firstChild.style.webkitTransitionDuration = "0ms";
};
$DvtDataGrid$$.prototype.scrollTo = function $$DvtDataGrid$$$$scrollTo$($scrollLeft$$5$$, $scrollTop$$5$$) {
  this.$m_currentScrollLeft$ = $scrollLeft$$5$$;
  this.$m_currentScrollTop$ = $scrollTop$$5$$;
  if (!$JSCompiler_StaticMethods_isTouchDevice$$(this.$m_utils$)) {
    $scrollLeft$$5$$ + $JSCompiler_StaticMethods_getViewportWidth$$(this) < this.$m_startColPixel$ || $scrollLeft$$5$$ > this.$m_endColPixel$ || $scrollTop$$5$$ + $JSCompiler_StaticMethods_getViewportHeight$$(this) < this.$m_startRowPixel$ || $scrollTop$$5$$ > this.$m_endRowPixel$ ? $JSCompiler_StaticMethods_handleLongScroll$$(this, $scrollLeft$$5$$, $scrollTop$$5$$) : $JSCompiler_StaticMethods_fillViewport$$(this, $scrollLeft$$5$$, $scrollTop$$5$$);
    var $scrollerContent$$inline_732_viewportRight$$inline_728$$, $scrollerContentHeight$$inline_733_viewportBottom$$inline_729$$;
    $scrollerContent$$inline_732_viewportRight$$inline_728$$ = $scrollLeft$$5$$ + $JSCompiler_StaticMethods_getElementWidth$$(this.$m_databody$);
    $scrollerContentHeight$$inline_733_viewportBottom$$inline_729$$ = $scrollTop$$5$$ + $JSCompiler_StaticMethods_getElementHeight$$(this.$m_databody$);
    if (this.$m_endRowPixel$ < $scrollerContentHeight$$inline_733_viewportBottom$$inline_729$$ || this.$m_startRowPixel$ > $scrollTop$$5$$ || this.$m_endColPixel$ < $scrollerContent$$inline_732_viewportRight$$inline_728$$ - 2 || this.$m_startColPixel$ > $scrollLeft$$5$$) {
      this.$m_stopDatabodyScroll$ = !0;
      return;
    }
  }
  this.$m_stopDatabodyScroll$ = !1;
  $JSCompiler_StaticMethods__syncScroller$$(this);
  var $scrollerContentWidth$$inline_734$$, $databodyContent$$inline_735$$;
  $scrollerContent$$inline_732_viewportRight$$inline_728$$ = this.$m_scroller$.firstChild;
  $scrollerContentHeight$$inline_733_viewportBottom$$inline_729$$ = $JSCompiler_StaticMethods_getElementHeight$$($scrollerContent$$inline_732_viewportRight$$inline_728$$);
  $scrollerContentWidth$$inline_734$$ = $JSCompiler_StaticMethods_getElementWidth$$($scrollerContent$$inline_732_viewportRight$$inline_728$$);
  $databodyContent$$inline_735$$ = this.$m_databody$.firstChild;
  if (this.$m_endRowPixel$ > $scrollerContentHeight$$inline_733_viewportBottom$$inline_729$$ || this.$m_dataSource$.getCount("row") == this.$m_endRow$ + 1 && !$JSCompiler_StaticMethods__isCountUnknown$$(this, "row") && this.$m_endRowPixel$ < $scrollerContentHeight$$inline_733_viewportBottom$$inline_729$$) {
    $JSCompiler_StaticMethods_setElementHeight$$($scrollerContent$$inline_732_viewportRight$$inline_728$$, this.$m_endRowPixel$), $JSCompiler_StaticMethods_setElementHeight$$($databodyContent$$inline_735$$, this.$m_endRowPixel$);
  }
  if (this.$m_endColPixel$ > $scrollerContentWidth$$inline_734$$ || this.$m_dataSource$.getCount("column") == this.$m_endCol$ + 1 && !$JSCompiler_StaticMethods__isCountUnknown$$(this, "column") && this.$m_endColPixel$ < $scrollerContentWidth$$inline_734$$) {
    $JSCompiler_StaticMethods_setElementWidth$$($scrollerContent$$inline_732_viewportRight$$inline_728$$, this.$m_endColPixel$), $JSCompiler_StaticMethods_setElementWidth$$($databodyContent$$inline_735$$, this.$m_endColPixel$);
  }
  null != this.$m_cellToFocus$ && (this.$m_cellToFocus$.focus(), this.$m_cellToFocus$ = null);
  null != this.$m_scrollIndexAfterFetch$ && 3 === $JSCompiler_StaticMethods__isInViewport$$(this, this.$m_scrollIndexAfterFetch$) && ($JSCompiler_StaticMethods__isDatabodyCellActive$$(this) && this.$m_scrollIndexAfterFetch$.row == this.$m_active$.indexes.row && this.$m_scrollIndexAfterFetch$.column == this.$m_active$.indexes.column && $JSCompiler_StaticMethods__highlightActive$$(this), this.$m_scrollIndexAfterFetch$ = null);
};
$DvtDataGrid$$.prototype.$_scrollTransitionEnd$ = function $$DvtDataGrid$$$$$_scrollTransitionEnd$$() {
  var $databody$$7$$;
  null != this.$m_scrollTransitionEnd$ && ($databody$$7$$ = this.$m_databody$.firstChild, $databody$$7$$.removeEventListener("webkitTransitionEnd", this.$m_scrollTransitionEnd$));
  $JSCompiler_StaticMethods__isSelectionEnabled$$(this) && $JSCompiler_StaticMethods__scrollTouchSelectionAffordance$$(this);
  this.fireEvent("scroll", {event:null, ui:{scrollX:this.$m_currentScrollLeft$, scrollY:this.$m_currentScrollTop$}});
  this.$m_currentScrollLeft$ + $JSCompiler_StaticMethods_getViewportWidth$$(this) < this.$m_startColPixel$ || this.$m_currentScrollLeft$ > this.$m_endColPixel$ || this.$m_currentScrollTop$ + $JSCompiler_StaticMethods_getViewportHeight$$(this) < this.$m_startRowPixel$ || this.$m_currentScrollTop$ > this.$m_endRowPixel$ ? $JSCompiler_StaticMethods_handleLongScroll$$(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$) : $JSCompiler_StaticMethods_fillViewport$$(this, this.$m_currentScrollLeft$, 
  this.$m_currentScrollTop$);
};
$DvtDataGrid$$.prototype.$_bounceBack$ = function $$DvtDataGrid$$$$$_bounceBack$$() {
  var $scrollLeft$$6$$, $scrollTop$$6$$, $databody$$8$$, $colHeader$$3$$, $rowHeader$$7$$;
  $scrollLeft$$6$$ = this.$m_currentScrollLeft$;
  $scrollTop$$6$$ = this.$m_currentScrollTop$;
  $databody$$8$$ = this.$m_databody$.firstChild;
  $colHeader$$3$$ = this.$m_colHeader$.firstChild;
  $rowHeader$$7$$ = this.$m_rowHeader$.firstChild;
  $databody$$8$$.removeEventListener("webkitTransitionEnd", this.$m_bounceBack$);
  $databody$$8$$.style.webkitTransitionDuration = "500ms";
  $colHeader$$3$$.style.webkitTransitionDuration = "500ms";
  $rowHeader$$7$$.style.webkitTransitionDuration = "500ms";
  null == this.$m_scrollTransitionEnd$ && (this.$m_scrollTransitionEnd$ = this.$_scrollTransitionEnd$.bind(this));
  $databody$$8$$.addEventListener("webkitTransitionEnd", this.$m_scrollTransitionEnd$);
  this.$m_resources$.isRTLMode() ? ($databody$$8$$.style.webkitTransform = "translate3d(" + $scrollLeft$$6$$ + "px, " + -$scrollTop$$6$$ + "px, 0)", $colHeader$$3$$.style.webkitTransform = "translate3d(" + $scrollLeft$$6$$ + "px, 0, 0)") : ($databody$$8$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$6$$ + "px, " + -$scrollTop$$6$$ + "px, 0)", $colHeader$$3$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$6$$ + "px, 0, 0)");
  $rowHeader$$7$$.style.webkitTransform = "translate3d(0, " + -$scrollTop$$6$$ + "px, 0)";
  this.$m_extraScrollOverY$ = this.$m_extraScrollOverX$ = null;
};
var $JSCompiler_StaticMethods__syncScroller$$ = function $$JSCompiler_StaticMethods__syncScroller$$$($JSCompiler_StaticMethods__syncScroller$self$$) {
  var $scrollLeft$$7$$, $scrollTop$$7$$, $databody$$9$$, $colHeader$$4$$, $rowHeader$$8$$, $dir$$7$$, $prevScrollLeft$$, $prevScrollTop$$;
  $scrollLeft$$7$$ = $JSCompiler_StaticMethods__syncScroller$self$$.$m_currentScrollLeft$;
  $scrollTop$$7$$ = $JSCompiler_StaticMethods__syncScroller$self$$.$m_currentScrollTop$;
  $databody$$9$$ = $JSCompiler_StaticMethods__syncScroller$self$$.$m_databody$.firstChild;
  $colHeader$$4$$ = $JSCompiler_StaticMethods__syncScroller$self$$.$m_colHeader$.firstChild;
  $rowHeader$$8$$ = $JSCompiler_StaticMethods__syncScroller$self$$.$m_rowHeader$.firstChild;
  $JSCompiler_StaticMethods_isTouchDevice$$($JSCompiler_StaticMethods__syncScroller$self$$.$m_utils$) && window.hasOwnProperty("WebKitCSSMatrix") ? (null != $JSCompiler_StaticMethods__syncScroller$self$$.$m_extraScrollOverX$ || null != $JSCompiler_StaticMethods__syncScroller$self$$.$m_extraScrollOverY$ ? (null != $JSCompiler_StaticMethods__syncScroller$self$$.$m_extraScrollOverX$ ? $scrollLeft$$7$$ += $JSCompiler_StaticMethods__syncScroller$self$$.$m_extraScrollOverX$ : $scrollTop$$7$$ += $JSCompiler_StaticMethods__syncScroller$self$$.$m_extraScrollOverY$, 
  null == $JSCompiler_StaticMethods__syncScroller$self$$.$m_bounceBack$ && ($JSCompiler_StaticMethods__syncScroller$self$$.$m_bounceBack$ = $JSCompiler_StaticMethods__syncScroller$self$$.$_bounceBack$.bind($JSCompiler_StaticMethods__syncScroller$self$$)), $databody$$9$$.addEventListener("webkitTransitionEnd", $JSCompiler_StaticMethods__syncScroller$self$$.$m_bounceBack$)) : "0ms" == $databody$$9$$.style.webkitTransitionDuration ? $JSCompiler_StaticMethods__syncScroller$self$$.$_scrollTransitionEnd$() : 
  (null == $JSCompiler_StaticMethods__syncScroller$self$$.$m_scrollTransitionEnd$ && ($JSCompiler_StaticMethods__syncScroller$self$$.$m_scrollTransitionEnd$ = $JSCompiler_StaticMethods__syncScroller$self$$.$_scrollTransitionEnd$.bind($JSCompiler_StaticMethods__syncScroller$self$$)), $databody$$9$$.addEventListener("webkitTransitionEnd", $JSCompiler_StaticMethods__syncScroller$self$$.$m_scrollTransitionEnd$)), $JSCompiler_StaticMethods__syncScroller$self$$.$m_resources$.isRTLMode() ? ($databody$$9$$.style.webkitTransform = 
  "translate3d(" + $scrollLeft$$7$$ + "px, " + -$scrollTop$$7$$ + "px, 0)", $colHeader$$4$$.style.webkitTransform = "translate3d(" + $scrollLeft$$7$$ + "px, 0, 0)") : ($databody$$9$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$7$$ + "px, " + -$scrollTop$$7$$ + "px, 0)", $colHeader$$4$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$7$$ + "px, 0, 0)"), $rowHeader$$8$$.style.webkitTransform = "translate3d(0, " + -$scrollTop$$7$$ + "px, 0)") : ($dir$$7$$ = $JSCompiler_StaticMethods__syncScroller$self$$.$m_resources$.isRTLMode() ? 
  "right" : "left", $prevScrollLeft$$ = $JSCompiler_StaticMethods_getElementDir$$($databody$$9$$, $dir$$7$$), $prevScrollTop$$ = $JSCompiler_StaticMethods_getElementDir$$($databody$$9$$, "top"), $JSCompiler_StaticMethods_setElementDir$$($databody$$9$$, -$scrollLeft$$7$$, $dir$$7$$), $JSCompiler_StaticMethods_setElementDir$$($databody$$9$$, -$scrollTop$$7$$, "top"), $JSCompiler_StaticMethods_setElementDir$$($colHeader$$4$$, -$scrollLeft$$7$$, $dir$$7$$), $JSCompiler_StaticMethods_setElementDir$$($rowHeader$$8$$, 
  -$scrollTop$$7$$, "top"), $prevScrollTop$$ === -$scrollTop$$7$$ && $prevScrollLeft$$ === -$scrollLeft$$7$$ || $JSCompiler_StaticMethods__syncScroller$self$$.fireEvent("scroll", {event:null, ui:{scrollX:$scrollLeft$$7$$, scrollY:$scrollTop$$7$$}}));
}, $JSCompiler_StaticMethods_handleLongScroll$$ = function $$JSCompiler_StaticMethods_handleLongScroll$$$($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$, $scrollTop$$8_startRow$$) {
  var $startRowPixel$$, $startColPixel$$;
  $scrollTop$$8_startRow$$ = Math.round(Math.max(0, $scrollTop$$8_startRow$$ - $JSCompiler_StaticMethods_handleLongScroll$self$$.getHeight() / 2) / $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgRowHeight$);
  $scrollLeft$$8_startCol$$ = Math.round(Math.max(0, $scrollLeft$$8_startCol$$ - $JSCompiler_StaticMethods_handleLongScroll$self$$.getWidth() / 2) / $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgColWidth$);
  $startRowPixel$$ = $scrollTop$$8_startRow$$ * $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgRowHeight$;
  $startColPixel$$ = $scrollLeft$$8_startCol$$ * $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_avgColWidth$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRow$ = $scrollTop$$8_startRow$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRow$ = -1;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRowHeader$ = $scrollTop$$8_startRow$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRowHeader$ = -1;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRowPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRowPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startRowHeaderPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endRowHeaderPixel$ = $startRowPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startCol$ = $scrollLeft$$8_startCol$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endCol$ = -1;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startColHeader$ = $scrollLeft$$8_startCol$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endColHeader$ = -1;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startColPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endColPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_startColHeaderPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_endColHeaderPixel$ = $startColPixel$$;
  $JSCompiler_StaticMethods_handleLongScroll$self$$.fetchHeaders("row", $scrollTop$$8_startRow$$, $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_rowHeader$, void 0, {success:function($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$) {
    $JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$(this, $JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$);
  }});
  $JSCompiler_StaticMethods_handleLongScroll$self$$.fetchHeaders("column", $scrollLeft$$8_startCol$$, $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_colHeader$, void 0, {success:function($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$) {
    $JSCompiler_StaticMethods_handleColumnHeadersFetchSuccessForLongScroll$$(this, $JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$);
  }});
  $JSCompiler_StaticMethods_handleLongScroll$self$$.fetchCells($JSCompiler_StaticMethods_handleLongScroll$self$$.$m_databody$, $JSCompiler_StaticMethods_handleLongScroll$self$$.$m_scroller$, $scrollTop$$8_startRow$$, $scrollLeft$$8_startCol$$, null, null, {success:function($JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$) {
    $JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$(this, $JSCompiler_StaticMethods_handleLongScroll$self$$, $scrollLeft$$8_startCol$$);
  }});
}, $JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$ = function $$JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$$($JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$self$$, $headerSet$$5$$, $headerRange$$7$$) {
  var $headerContent$$1$$ = $JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$self$$.$m_rowHeader$.firstChild;
  null != $headerContent$$1$$ && $JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$self$$.$m_utils$.empty($headerContent$$1$$);
  $JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$self$$.$handleHeadersFetchSuccess$($headerSet$$5$$, $headerRange$$7$$);
}, $JSCompiler_StaticMethods_handleColumnHeadersFetchSuccessForLongScroll$$ = function $$JSCompiler_StaticMethods_handleColumnHeadersFetchSuccessForLongScroll$$$($JSCompiler_StaticMethods_handleColumnHeadersFetchSuccessForLongScroll$self$$, $headerSet$$6$$, $headerRange$$8$$) {
  var $headerContent$$2$$ = $JSCompiler_StaticMethods_handleColumnHeadersFetchSuccessForLongScroll$self$$.$m_colHeader$.firstChild;
  null != $headerContent$$2$$ && $JSCompiler_StaticMethods_handleColumnHeadersFetchSuccessForLongScroll$self$$.$m_utils$.empty($headerContent$$2$$);
  $JSCompiler_StaticMethods_handleColumnHeadersFetchSuccessForLongScroll$self$$.$handleHeadersFetchSuccess$($headerSet$$6$$, $headerRange$$8$$);
}, $JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$ = function $$JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$$($JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$self$$, $cellSet$$6$$, $cellRange$$6$$) {
  var $databodyContent$$3$$ = $JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$self$$.$m_databody$.firstChild;
  null != $databodyContent$$3$$ && $JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$self$$.$m_utils$.empty($databodyContent$$3$$);
  $JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$self$$.$handleCellsFetchSuccess$($cellSet$$6$$, $cellRange$$6$$);
}, $JSCompiler_StaticMethods_fillViewport$$ = function $$JSCompiler_StaticMethods_fillViewport$$$($JSCompiler_StaticMethods_fillViewport$self$$, $fetchStartRow$$inline_776_rows$$inline_750_scrollLeft$$9_threshold$$inline_764_viewportBottom$$2$$, $fetchSize$$inline_775_scrollTop$$9$$) {
  var $columns$$inline_765_fetchStartRow_indexToRemove$$inline_751_viewportRight$$2$$, $column$$inline_766_columns$$inline_754_fetchStartCol_row$$inline_759_threshold$$inline_746_width$$inline_767$$, $colHeaderContent$$inline_739_colHeaderContent$$inline_745_fetchSize$$1_j$$inline_758_left$$inline_752_returnVal$$inline_741_rows$$inline_768$$;
  $columns$$inline_765_fetchStartRow_indexToRemove$$inline_751_viewportRight$$2$$ = $fetchStartRow$$inline_776_rows$$inline_750_scrollLeft$$9_threshold$$inline_764_viewportBottom$$2$$ + $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$);
  !$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnHeaderFetch$ && ($columns$$inline_765_fetchStartRow_indexToRemove$$inline_751_viewportRight$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ || $columns$$inline_765_fetchStartRow_indexToRemove$$inline_751_viewportRight$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ && $JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$($JSCompiler_StaticMethods_fillViewport$self$$, "column")) ? 
  ($JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("column", $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ + 1, $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$), !$JSCompiler_StaticMethods__isHighWatermarkScrolling$$($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$ && 
  ($colHeaderContent$$inline_739_colHeaderContent$$inline_745_fetchSize$$1_j$$inline_758_left$$inline_752_returnVal$$inline_741_rows$$inline_768$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$.firstChild, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeaderPixel$ >= $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ - 0 || ($colHeaderContent$$inline_739_colHeaderContent$$inline_745_fetchSize$$1_j$$inline_758_left$$inline_752_returnVal$$inline_741_rows$$inline_768$$ = 
  $JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$$($JSCompiler_StaticMethods_fillViewport$self$$, $colHeaderContent$$inline_739_colHeaderContent$$inline_745_fetchSize$$1_j$$inline_758_left$$inline_752_returnVal$$inline_741_rows$$inline_768$$, null, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeaderPixel$, 0), $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeaderPixel$ += $colHeaderContent$$inline_739_colHeaderContent$$inline_745_fetchSize$$1_j$$inline_758_left$$inline_752_returnVal$$inline_741_rows$$inline_768$$.widthChange, 
  $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ += $colHeaderContent$$inline_739_colHeaderContent$$inline_745_fetchSize$$1_j$$inline_758_left$$inline_752_returnVal$$inline_741_rows$$inline_768$$.extentChange))) : $fetchStartRow$$inline_776_rows$$inline_750_scrollLeft$$9_threshold$$inline_764_viewportBottom$$2$$ < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeaderPixel$ && ($column$$inline_766_columns$$inline_754_fetchStartCol_row$$inline_759_threshold$$inline_746_width$$inline_767$$ = 
  Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ - $JSCompiler_StaticMethods_getFetchSize$$($JSCompiler_StaticMethods_fillViewport$self$$, "column")), $colHeaderContent$$inline_739_colHeaderContent$$inline_745_fetchSize$$1_j$$inline_758_left$$inline_752_returnVal$$inline_741_rows$$inline_768$$ = Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ - $column$$inline_766_columns$$inline_754_fetchStartCol_row$$inline_759_threshold$$inline_746_width$$inline_767$$), 
  $JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("column", $column$$inline_766_columns$$inline_754_fetchStartCol_row$$inline_759_threshold$$inline_746_width$$inline_767$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$, $colHeaderContent$$inline_739_colHeaderContent$$inline_745_fetchSize$$1_j$$inline_758_left$$inline_752_returnVal$$inline_741_rows$$inline_768$$), !$JSCompiler_StaticMethods__isHighWatermarkScrolling$$($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeader$ - 
  $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$ && ($colHeaderContent$$inline_739_colHeaderContent$$inline_745_fetchSize$$1_j$$inline_758_left$$inline_752_returnVal$$inline_741_rows$$inline_768$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_colHeader$.firstChild, $column$$inline_766_columns$$inline_754_fetchStartCol_row$$inline_759_threshold$$inline_746_width$$inline_767$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ + 
  $JSCompiler_StaticMethods_getViewportWidth$$($JSCompiler_StaticMethods_fillViewport$self$$) + 0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColHeaderPixel$ <= $column$$inline_766_columns$$inline_754_fetchStartCol_row$$inline_759_threshold$$inline_746_width$$inline_767$$ || ($JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnHeaderFetch$ && ($JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnHeaderFetch$ = !1), $JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$$($JSCompiler_StaticMethods_fillViewport$self$$, 
  $colHeaderContent$$inline_739_colHeaderContent$$inline_745_fetchSize$$1_j$$inline_758_left$$inline_752_returnVal$$inline_741_rows$$inline_768$$, $column$$inline_766_columns$$inline_754_fetchStartCol_row$$inline_759_threshold$$inline_746_width$$inline_767$$))));
  if (!$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnFetch$ && ($columns$$inline_765_fetchStartRow_indexToRemove$$inline_751_viewportRight$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ || $columns$$inline_765_fetchStartRow_indexToRemove$$inline_751_viewportRight$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ && $JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$($JSCompiler_StaticMethods_fillViewport$self$$, "column"))) {
    if ($JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ + 1, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ + 1), !$JSCompiler_StaticMethods__isHighWatermarkScrolling$$($JSCompiler_StaticMethods_fillViewport$self$$) && 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$) {
      var $i$$inline_755_j$$inline_769_k$$inline_760$$, $column$$inline_756_row$$inline_770$$, $prevLeft$$inline_757$$;
      $fetchStartRow$$inline_776_rows$$inline_750_scrollLeft$$9_threshold$$inline_764_viewportBottom$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$.firstChild.childNodes;
      $colHeaderContent$$inline_739_colHeaderContent$$inline_745_fetchSize$$1_j$$inline_758_left$$inline_752_returnVal$$inline_741_rows$$inline_768$$ = $columns$$inline_765_fetchStartRow_indexToRemove$$inline_751_viewportRight$$2$$ = 0;
      if (!(1 > $fetchStartRow$$inline_776_rows$$inline_750_scrollLeft$$9_threshold$$inline_764_viewportBottom$$2$$.length)) {
        $column$$inline_766_columns$$inline_754_fetchStartCol_row$$inline_759_threshold$$inline_746_width$$inline_767$$ = $fetchStartRow$$inline_776_rows$$inline_750_scrollLeft$$9_threshold$$inline_764_viewportBottom$$2$$[0].childNodes;
        for ($i$$inline_755_j$$inline_769_k$$inline_760$$ = 0;$i$$inline_755_j$$inline_769_k$$inline_760$$ < $column$$inline_766_columns$$inline_754_fetchStartCol_row$$inline_759_threshold$$inline_746_width$$inline_767$$.length;$i$$inline_755_j$$inline_769_k$$inline_760$$ += 1) {
          if ($column$$inline_756_row$$inline_770$$ = $column$$inline_766_columns$$inline_754_fetchStartCol_row$$inline_759_threshold$$inline_746_width$$inline_767$$[$i$$inline_755_j$$inline_769_k$$inline_760$$], $prevLeft$$inline_757$$ = $colHeaderContent$$inline_739_colHeaderContent$$inline_745_fetchSize$$1_j$$inline_758_left$$inline_752_returnVal$$inline_741_rows$$inline_768$$, $colHeaderContent$$inline_739_colHeaderContent$$inline_745_fetchSize$$1_j$$inline_758_left$$inline_752_returnVal$$inline_741_rows$$inline_768$$ = 
          $JSCompiler_StaticMethods_getElementDir$$($column$$inline_756_row$$inline_770$$, "left"), $colHeaderContent$$inline_739_colHeaderContent$$inline_745_fetchSize$$1_j$$inline_758_left$$inline_752_returnVal$$inline_741_rows$$inline_768$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ - 0) {
            $columns$$inline_765_fetchStartRow_indexToRemove$$inline_751_viewportRight$$2$$ = $i$$inline_755_j$$inline_769_k$$inline_760$$ - 1;
            $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ += $columns$$inline_765_fetchStartRow_indexToRemove$$inline_751_viewportRight$$2$$;
            $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColPixel$ = $prevLeft$$inline_757$$;
            break;
          }
        }
        for ($colHeaderContent$$inline_739_colHeaderContent$$inline_745_fetchSize$$1_j$$inline_758_left$$inline_752_returnVal$$inline_741_rows$$inline_768$$ = 0;$colHeaderContent$$inline_739_colHeaderContent$$inline_745_fetchSize$$1_j$$inline_758_left$$inline_752_returnVal$$inline_741_rows$$inline_768$$ < $fetchStartRow$$inline_776_rows$$inline_750_scrollLeft$$9_threshold$$inline_764_viewportBottom$$2$$.length;$colHeaderContent$$inline_739_colHeaderContent$$inline_745_fetchSize$$1_j$$inline_758_left$$inline_752_returnVal$$inline_741_rows$$inline_768$$ += 
        1) {
          for ($column$$inline_766_columns$$inline_754_fetchStartCol_row$$inline_759_threshold$$inline_746_width$$inline_767$$ = $fetchStartRow$$inline_776_rows$$inline_750_scrollLeft$$9_threshold$$inline_764_viewportBottom$$2$$[$colHeaderContent$$inline_739_colHeaderContent$$inline_745_fetchSize$$1_j$$inline_758_left$$inline_752_returnVal$$inline_741_rows$$inline_768$$], $i$$inline_755_j$$inline_769_k$$inline_760$$ = 0;$i$$inline_755_j$$inline_769_k$$inline_760$$ < $columns$$inline_765_fetchStartRow_indexToRemove$$inline_751_viewportRight$$2$$;$i$$inline_755_j$$inline_769_k$$inline_760$$ += 
          1) {
            $JSCompiler_StaticMethods_fillViewport$self$$.$_remove$($column$$inline_766_columns$$inline_754_fetchStartCol_row$$inline_759_threshold$$inline_746_width$$inline_767$$.firstChild);
          }
        }
      }
    }
  } else {
    if ($fetchStartRow$$inline_776_rows$$inline_750_scrollLeft$$9_threshold$$inline_764_viewportBottom$$2$$ < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startColPixel$ && ($column$$inline_766_columns$$inline_754_fetchStartCol_row$$inline_759_threshold$$inline_746_width$$inline_767$$ = Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ - $JSCompiler_StaticMethods_getFetchSize$$($JSCompiler_StaticMethods_fillViewport$self$$, "column")), $colHeaderContent$$inline_739_colHeaderContent$$inline_745_fetchSize$$1_j$$inline_758_left$$inline_752_returnVal$$inline_741_rows$$inline_768$$ = 
    Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ - $column$$inline_766_columns$$inline_754_fetchStartCol_row$$inline_759_threshold$$inline_746_width$$inline_767$$), $JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$, $column$$inline_766_columns$$inline_754_fetchStartCol_row$$inline_759_threshold$$inline_746_width$$inline_767$$, 
    $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ + 1, $colHeaderContent$$inline_739_colHeaderContent$$inline_745_fetchSize$$1_j$$inline_758_left$$inline_752_returnVal$$inline_741_rows$$inline_768$$), !$JSCompiler_StaticMethods__isHighWatermarkScrolling$$($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_COLUMN_THRESHOLD$ && 
    ($colHeaderContent$$inline_739_colHeaderContent$$inline_745_fetchSize$$1_j$$inline_758_left$$inline_752_returnVal$$inline_741_rows$$inline_768$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$.firstChild.childNodes, $fetchStartRow$$inline_776_rows$$inline_750_scrollLeft$$9_threshold$$inline_764_viewportBottom$$2$$ = $JSCompiler_StaticMethods_fillViewport$self$$.$m_currentScrollLeft$ + $JSCompiler_StaticMethods_getViewportWidth$$($JSCompiler_StaticMethods_fillViewport$self$$) + 0, 
    !($JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ <= $fetchStartRow$$inline_776_rows$$inline_750_scrollLeft$$9_threshold$$inline_764_viewportBottom$$2$$)))) {
      for ($JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnFetch$ && ($JSCompiler_StaticMethods_fillViewport$self$$.$m_stopColumnFetch$ = !1), $columns$$inline_765_fetchStartRow_indexToRemove$$inline_751_viewportRight$$2$$ = $colHeaderContent$$inline_739_colHeaderContent$$inline_745_fetchSize$$1_j$$inline_758_left$$inline_752_returnVal$$inline_741_rows$$inline_768$$[1], $column$$inline_766_columns$$inline_754_fetchStartCol_row$$inline_759_threshold$$inline_746_width$$inline_767$$ = $columns$$inline_765_fetchStartRow_indexToRemove$$inline_751_viewportRight$$2$$.lastChild, 
      $column$$inline_766_columns$$inline_754_fetchStartCol_row$$inline_759_threshold$$inline_746_width$$inline_767$$ = $JSCompiler_StaticMethods_getElementWidth$$($column$$inline_766_columns$$inline_754_fetchStartCol_row$$inline_759_threshold$$inline_746_width$$inline_767$$);$JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ - $column$$inline_766_columns$$inline_754_fetchStartCol_row$$inline_759_threshold$$inline_746_width$$inline_767$$ > $fetchStartRow$$inline_776_rows$$inline_750_scrollLeft$$9_threshold$$inline_764_viewportBottom$$2$$;) {
        for ($i$$inline_755_j$$inline_769_k$$inline_760$$ = 0;$i$$inline_755_j$$inline_769_k$$inline_760$$ < $colHeaderContent$$inline_739_colHeaderContent$$inline_745_fetchSize$$1_j$$inline_758_left$$inline_752_returnVal$$inline_741_rows$$inline_768$$.length;$i$$inline_755_j$$inline_769_k$$inline_760$$ += 1) {
          $column$$inline_756_row$$inline_770$$ = $colHeaderContent$$inline_739_colHeaderContent$$inline_745_fetchSize$$1_j$$inline_758_left$$inline_752_returnVal$$inline_741_rows$$inline_768$$[$i$$inline_755_j$$inline_769_k$$inline_760$$], $JSCompiler_StaticMethods_fillViewport$self$$.$_remove$($column$$inline_756_row$$inline_770$$.lastChild);
        }
        $JSCompiler_StaticMethods_fillViewport$self$$.$m_endColPixel$ -= $column$$inline_766_columns$$inline_754_fetchStartCol_row$$inline_759_threshold$$inline_746_width$$inline_767$$;
        $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ -= 1;
        $column$$inline_766_columns$$inline_754_fetchStartCol_row$$inline_759_threshold$$inline_746_width$$inline_767$$ = $columns$$inline_765_fetchStartRow_indexToRemove$$inline_751_viewportRight$$2$$.lastChild;
        $column$$inline_766_columns$$inline_754_fetchStartCol_row$$inline_759_threshold$$inline_746_width$$inline_767$$ = $JSCompiler_StaticMethods_getElementWidth$$($column$$inline_766_columns$$inline_754_fetchStartCol_row$$inline_759_threshold$$inline_746_width$$inline_767$$);
      }
    }
  }
  $fetchStartRow$$inline_776_rows$$inline_750_scrollLeft$$9_threshold$$inline_764_viewportBottom$$2$$ = $fetchSize$$inline_775_scrollTop$$9$$ + $JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$);
  if (!$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopRowHeaderFetch$ && ($fetchStartRow$$inline_776_rows$$inline_750_scrollLeft$$9_threshold$$inline_764_viewportBottom$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ || $fetchStartRow$$inline_776_rows$$inline_750_scrollLeft$$9_threshold$$inline_764_viewportBottom$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeaderPixel$ && $JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$($JSCompiler_StaticMethods_fillViewport$self$$, 
  "row"))) {
    $JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("row", $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$ + 1, $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$), !$JSCompiler_StaticMethods__isHighWatermarkScrolling$$($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && 
    $JSCompiler_StaticMethods_removeRowHeadersFromTop$$($JSCompiler_StaticMethods_fillViewport$self$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$);
  } else {
    if (Math.max(0, $fetchSize$$inline_775_scrollTop$$9$$ - 0) < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeaderPixel$) {
      if (0 == $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$) {
        return;
      }
      $columns$$inline_765_fetchStartRow_indexToRemove$$inline_751_viewportRight$$2$$ = Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ - $JSCompiler_StaticMethods_getFetchSize$$($JSCompiler_StaticMethods_fillViewport$self$$, "row"));
      $colHeaderContent$$inline_739_colHeaderContent$$inline_745_fetchSize$$1_j$$inline_758_left$$inline_752_returnVal$$inline_741_rows$$inline_768$$ = Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ - $columns$$inline_765_fetchStartRow_indexToRemove$$inline_751_viewportRight$$2$$);
      $JSCompiler_StaticMethods_fillViewport$self$$.fetchHeaders("row", $columns$$inline_765_fetchStartRow_indexToRemove$$inline_751_viewportRight$$2$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$, $colHeaderContent$$inline_739_colHeaderContent$$inline_745_fetchSize$$1_j$$inline_758_left$$inline_752_returnVal$$inline_741_rows$$inline_768$$);
      !$JSCompiler_StaticMethods__isHighWatermarkScrolling$$($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowHeader$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowHeader$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && $JSCompiler_StaticMethods_removeRowHeadersFromBottom$$($JSCompiler_StaticMethods_fillViewport$self$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_rowHeader$);
    }
  }
  !$JSCompiler_StaticMethods_fillViewport$self$$.$m_stopRowFetch$ && ($fetchStartRow$$inline_776_rows$$inline_750_scrollLeft$$9_threshold$$inline_764_viewportBottom$$2$$ > $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowPixel$ || $fetchStartRow$$inline_776_rows$$inline_750_scrollLeft$$9_threshold$$inline_764_viewportBottom$$2$$ == $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRowPixel$ && $JSCompiler_StaticMethods__isCountUnknownOrHighwatermark$$($JSCompiler_StaticMethods_fillViewport$self$$, 
  "row")) ? ($JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ + 1, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$, null, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ + 1), !$JSCompiler_StaticMethods__isHighWatermarkScrolling$$($JSCompiler_StaticMethods_fillViewport$self$$) && 
  $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && $JSCompiler_StaticMethods_removeRowsFromTop$$($JSCompiler_StaticMethods_fillViewport$self$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$)) : Math.max(0, $fetchSize$$inline_775_scrollTop$$9$$ - 0) < $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRowPixel$ && 0 != $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ && 
  ($fetchStartRow$$inline_776_rows$$inline_750_scrollLeft$$9_threshold$$inline_764_viewportBottom$$2$$ = Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ - $JSCompiler_StaticMethods_getFetchSize$$($JSCompiler_StaticMethods_fillViewport$self$$, "row")), $fetchSize$$inline_775_scrollTop$$9$$ = Math.max(0, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ - $fetchStartRow$$inline_776_rows$$inline_750_scrollLeft$$9_threshold$$inline_764_viewportBottom$$2$$), $JSCompiler_StaticMethods_fillViewport$self$$.fetchCells($JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$, 
  $JSCompiler_StaticMethods_fillViewport$self$$.$m_scroller$, $fetchStartRow$$inline_776_rows$$inline_750_scrollLeft$$9_threshold$$inline_764_viewportBottom$$2$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$, $fetchSize$$inline_775_scrollTop$$9$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_endCol$ - $JSCompiler_StaticMethods_fillViewport$self$$.$m_startCol$ + 1), !$JSCompiler_StaticMethods__isHighWatermarkScrolling$$($JSCompiler_StaticMethods_fillViewport$self$$) && $JSCompiler_StaticMethods_fillViewport$self$$.$m_endRow$ - 
  $JSCompiler_StaticMethods_fillViewport$self$$.$m_startRow$ > $JSCompiler_StaticMethods_fillViewport$self$$.$MAX_ROW_THRESHOLD$ && $JSCompiler_StaticMethods_removeRowsFromBottom$$($JSCompiler_StaticMethods_fillViewport$self$$, $JSCompiler_StaticMethods_fillViewport$self$$.$m_databody$));
}, $JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$$ = function $$JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$$$($JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$, $columnHeadersContainer_returnVal$$6$$, $firstChild$$, $resizerWidth$$, $colThreshold$$1$$) {
  var $element$$11$$, $isColumnHeader$$, $columnHeader$$1$$, $width$$18$$, $removedColumnsWidth$$ = 0, $removedColumns$$ = 0;
  $element$$11$$ = null == $firstChild$$ ? $columnHeadersContainer_returnVal$$6$$.firstChild : $firstChild$$.nextSibling;
  if (null == $element$$11$$) {
    return{extentChange:0, widthChange:0};
  }
  $columnHeader$$1$$ = ($isColumnHeader$$ = $JSCompiler_StaticMethods_containsCSSClassName$$($element$$11$$, $JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$.getMappedStyle("colheadercell"))) ? $element$$11$$ : $element$$11$$.firstChild;
  for ($width$$18$$ = $JSCompiler_StaticMethods_getElementWidth$$($columnHeader$$1$$);$resizerWidth$$ + $width$$18$$ < $JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$.$m_currentScrollLeft$ - $colThreshold$$1$$;) {
    $JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$.$_remove$($element$$11$$);
    $removedColumnsWidth$$ += $width$$18$$;
    $removedColumns$$ += $isColumnHeader$$ ? 1 : $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$, $element$$11$$, "extent");
    $resizerWidth$$ += $width$$18$$;
    $element$$11$$ = null == $firstChild$$ ? $columnHeadersContainer_returnVal$$6$$.firstChild : $firstChild$$.nextSibling;
    if (null == $element$$11$$) {
      return{extentChange:$removedColumns$$, widthChange:$removedColumnsWidth$$};
    }
    $columnHeader$$1$$ = ($isColumnHeader$$ = $JSCompiler_StaticMethods_containsCSSClassName$$($element$$11$$, $JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$.getMappedStyle("colheadercell"))) ? $element$$11$$ : $element$$11$$.firstChild;
    $width$$18$$ = $JSCompiler_StaticMethods_getElementWidth$$($columnHeader$$1$$);
  }
  $isColumnHeader$$ || ($columnHeadersContainer_returnVal$$6$$ = $JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$$($JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$, $element$$11$$, $element$$11$$.firstChild, $resizerWidth$$, $colThreshold$$1$$), $JSCompiler_StaticMethods__setAttribute$$($JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$, $element$$11$$, "start", $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$, 
  $element$$11$$, "start") + $columnHeadersContainer_returnVal$$6$$.extentChange), $JSCompiler_StaticMethods__setAttribute$$($JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$, $element$$11$$, "extent", $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_removeColumnHeadersFromLeftOfContainer$self$$, $element$$11$$, "extent") - $columnHeadersContainer_returnVal$$6$$.extentChange), $JSCompiler_StaticMethods_setElementDir$$($columnHeader$$1$$, $JSCompiler_StaticMethods_getElementDir$$($columnHeader$$1$$, 
  "left") + $columnHeadersContainer_returnVal$$6$$.widthChange, "left"), $JSCompiler_StaticMethods_setElementWidth$$($columnHeader$$1$$, $JSCompiler_StaticMethods_getElementWidth$$($columnHeader$$1$$) - $columnHeadersContainer_returnVal$$6$$.widthChange), $removedColumns$$ += $columnHeadersContainer_returnVal$$6$$.extentChange, $removedColumnsWidth$$ += $columnHeadersContainer_returnVal$$6$$.widthChange);
  return{extentChange:$removedColumns$$, widthChange:$removedColumnsWidth$$};
}, $JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$$ = function $$JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$$$($JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$, $columnHeadersContainer$$1_returnVal$$7$$, $threshold$$1$$) {
  var $element$$12$$, $columnHeader$$2$$, $isColumnHeader$$1$$, $width$$19$$, $removedColumns$$1$$ = 0, $removedColumnsWidth$$1$$ = 0;
  $element$$12$$ = $columnHeadersContainer$$1_returnVal$$7$$.lastChild;
  $columnHeader$$2$$ = ($isColumnHeader$$1$$ = $JSCompiler_StaticMethods_containsCSSClassName$$($element$$12$$, $JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$.getMappedStyle("colheadercell"))) ? $element$$12$$ : $element$$12$$.firstChild;
  for ($width$$19$$ = $JSCompiler_StaticMethods_getElementWidth$$($columnHeader$$2$$);$JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$.$m_endColHeaderPixel$ - $width$$19$$ > $threshold$$1$$;) {
    $JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$.$_remove$($element$$12$$), $removedColumnsWidth$$1$$ += $width$$19$$, $removedColumns$$1$$ += $isColumnHeader$$1$$ ? 1 : $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$, $element$$12$$, "extent"), $JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$.$m_endColHeaderPixel$ -= $width$$19$$, $JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$.$m_endColHeader$ -= 
    $isColumnHeader$$1$$ ? 1 : $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$, $element$$12$$, "extent"), $element$$12$$ = $columnHeadersContainer$$1_returnVal$$7$$.lastChild, $columnHeader$$2$$ = ($isColumnHeader$$1$$ = $JSCompiler_StaticMethods_containsCSSClassName$$($element$$12$$, $JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$.getMappedStyle("colheadercell"))) ? $element$$12$$ : $element$$12$$.firstChild, 
    $width$$19$$ = $JSCompiler_StaticMethods_getElementWidth$$($columnHeader$$2$$);
  }
  $isColumnHeader$$1$$ || ($columnHeadersContainer$$1_returnVal$$7$$ = $JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$$($JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$, $element$$12$$, $threshold$$1$$), $JSCompiler_StaticMethods__setAttribute$$($JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$, $element$$12$$, "extent", $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_removeColumnHeadersFromRightOfContainer$self$$, 
  $element$$12$$, "extent") - $columnHeadersContainer$$1_returnVal$$7$$.extentChange), $JSCompiler_StaticMethods_setElementWidth$$($columnHeader$$2$$, $JSCompiler_StaticMethods_getElementWidth$$($columnHeader$$2$$) - $columnHeadersContainer$$1_returnVal$$7$$.widthChange), $removedColumns$$1$$ += $columnHeadersContainer$$1_returnVal$$7$$.extentChange, $removedColumnsWidth$$1$$ += $columnHeadersContainer$$1_returnVal$$7$$.widthChange);
  return{extentChange:$removedColumns$$1$$, widthChange:$removedColumnsWidth$$1$$};
}, $JSCompiler_StaticMethods_removeRowHeadersFromTop$$ = function $$JSCompiler_StaticMethods_removeRowHeadersFromTop$$$($JSCompiler_StaticMethods_removeRowHeadersFromTop$self$$, $rowHeader$$9$$) {
  var $returnVal$$8_rowHeaderContent$$3$$;
  $returnVal$$8_rowHeaderContent$$3$$ = $rowHeader$$9$$.firstChild;
  $JSCompiler_StaticMethods_removeRowHeadersFromTop$self$$.$m_startRowHeaderPixel$ >= $JSCompiler_StaticMethods_removeRowHeadersFromTop$self$$.$m_currentScrollTop$ - 0 || ($returnVal$$8_rowHeaderContent$$3$$ = $JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$$($JSCompiler_StaticMethods_removeRowHeadersFromTop$self$$, $returnVal$$8_rowHeaderContent$$3$$, null, $JSCompiler_StaticMethods_removeRowHeadersFromTop$self$$.$m_startRowHeaderPixel$, 0), $JSCompiler_StaticMethods_removeRowHeadersFromTop$self$$.$m_startRowHeaderPixel$ += 
  $returnVal$$8_rowHeaderContent$$3$$.heightChange, $JSCompiler_StaticMethods_removeRowHeadersFromTop$self$$.$m_startRowHeader$ += $returnVal$$8_rowHeaderContent$$3$$.extentChange);
}, $JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$$ = function $$JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$$$($JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$, $returnVal$$9_rowHeadersContainer$$, $firstChild$$1$$, $resizerHeight$$, $rowThreshold$$1$$) {
  var $element$$13$$, $rowHeader$$10$$, $isRowHeader$$, $height$$20$$, $removedRows$$ = 0, $removedRowsHeight$$ = 0;
  $element$$13$$ = null == $firstChild$$1$$ ? $returnVal$$9_rowHeadersContainer$$.firstChild : $firstChild$$1$$.nextSibling;
  if (null == $element$$13$$) {
    return{extentChange:0, heightChange:0};
  }
  $rowHeader$$10$$ = ($isRowHeader$$ = $JSCompiler_StaticMethods_containsCSSClassName$$($element$$13$$, $JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$.getMappedStyle("rowheadercell"))) ? $element$$13$$ : $element$$13$$.firstChild;
  for ($height$$20$$ = $JSCompiler_StaticMethods_getElementHeight$$($rowHeader$$10$$);$resizerHeight$$ + $height$$20$$ < $JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$.$m_currentScrollTop$ - $rowThreshold$$1$$;) {
    $JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$.$_remove$($element$$13$$);
    $removedRowsHeight$$ += $height$$20$$;
    $removedRows$$ += $isRowHeader$$ ? 1 : $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$, $element$$13$$, "extent");
    $resizerHeight$$ += $height$$20$$;
    $element$$13$$ = null == $firstChild$$1$$ ? $returnVal$$9_rowHeadersContainer$$.firstChild : $firstChild$$1$$.nextSibling;
    if (null == $element$$13$$) {
      return{extentChange:$removedRows$$, heightChange:$removedRowsHeight$$};
    }
    $rowHeader$$10$$ = ($isRowHeader$$ = $JSCompiler_StaticMethods_containsCSSClassName$$($element$$13$$, $JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$.getMappedStyle("rowheadercell"))) ? $element$$13$$ : $element$$13$$.firstChild;
    $height$$20$$ = $JSCompiler_StaticMethods_getElementHeight$$($rowHeader$$10$$);
  }
  $isRowHeader$$ || ($returnVal$$9_rowHeadersContainer$$ = $JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$$($JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$, $element$$13$$, $element$$13$$.firstChild, $resizerHeight$$, $rowThreshold$$1$$), $JSCompiler_StaticMethods__setAttribute$$($JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$, $element$$13$$, "start", $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$, 
  $element$$13$$, "start") + $returnVal$$9_rowHeadersContainer$$.extentChange), $JSCompiler_StaticMethods__setAttribute$$($JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$, $element$$13$$, "extent", $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_removeRowHeadersFromTopOfContainer$self$$, $element$$13$$, "extent") - $returnVal$$9_rowHeadersContainer$$.extentChange), $JSCompiler_StaticMethods_setElementDir$$($rowHeader$$10$$, $JSCompiler_StaticMethods_getElementDir$$($rowHeader$$10$$, 
  "top") + $returnVal$$9_rowHeadersContainer$$.heightChange, "top"), $JSCompiler_StaticMethods_setElementHeight$$($rowHeader$$10$$, $JSCompiler_StaticMethods_getElementHeight$$($rowHeader$$10$$) - $returnVal$$9_rowHeadersContainer$$.heightChange), $removedRows$$ += $returnVal$$9_rowHeadersContainer$$.extentChange, $removedRowsHeight$$ += $returnVal$$9_rowHeadersContainer$$.heightChange);
  return{extentChange:$removedRows$$, heightChange:$removedRowsHeight$$};
}, $JSCompiler_StaticMethods_removeRowsFromTop$$ = function $$JSCompiler_StaticMethods_removeRowsFromTop$$$($JSCompiler_StaticMethods_removeRowsFromTop$self$$, $databody$$12$$) {
  var $databodyContent$$7$$, $row$$12$$, $height$$21$$;
  $databodyContent$$7$$ = $databody$$12$$.firstChild;
  if (!($JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_startRowPixel$ >= $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_currentScrollTop$ - 0)) {
    for ($row$$12$$ = $databodyContent$$7$$.firstChild, $height$$21$$ = $JSCompiler_StaticMethods_getElementHeight$$($row$$12$$);$JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_startRowPixel$ + $height$$21$$ < $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_currentScrollTop$ - 0;) {
      $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$_remove$($row$$12$$);
      $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_startRowPixel$ += $height$$21$$;
      $JSCompiler_StaticMethods_removeRowsFromTop$self$$.$m_startRow$ += 1;
      $row$$12$$ = $databodyContent$$7$$.firstChild;
      if (null == $row$$12$$) {
        break;
      }
      $height$$21$$ = $JSCompiler_StaticMethods_getElementHeight$$($row$$12$$);
    }
  }
}, $JSCompiler_StaticMethods_removeRowHeadersFromBottom$$ = function $$JSCompiler_StaticMethods_removeRowHeadersFromBottom$$$($JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$, $rowHeader$$11$$) {
  var $rowHeaderContent$$4$$, $threshold$$3$$;
  $rowHeaderContent$$4$$ = $rowHeader$$11$$.firstChild;
  $threshold$$3$$ = $JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$.$m_currentScrollTop$ + $JSCompiler_StaticMethods_getViewportHeight$$($JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$) + 0;
  $JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$.$m_endRowHeaderPixel$ <= $threshold$$3$$ || ($JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$.$m_stopRowHeaderFetch$ && ($JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$.$m_stopRowHeaderFetch$ = !1), $JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$$($JSCompiler_StaticMethods_removeRowHeadersFromBottom$self$$, $rowHeaderContent$$4$$, $threshold$$3$$));
}, $JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$$ = function $$JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$$$($JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$, $returnVal$$10_rowHeadersContainer$$1$$, $threshold$$4$$) {
  var $element$$14$$, $rowHeader$$12$$, $isRowHeader$$1$$, $height$$22$$, $removedRows$$1$$ = 0, $removedRowsHeight$$1$$ = 0;
  $element$$14$$ = $returnVal$$10_rowHeadersContainer$$1$$.lastChild;
  $rowHeader$$12$$ = ($isRowHeader$$1$$ = $JSCompiler_StaticMethods_containsCSSClassName$$($element$$14$$, $JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$.getMappedStyle("rowheadercell"))) ? $element$$14$$ : $element$$14$$.firstChild;
  for ($height$$22$$ = $JSCompiler_StaticMethods_getElementHeight$$($rowHeader$$12$$);$JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$.$m_endRowHeaderPixel$ - $height$$22$$ > $threshold$$4$$;) {
    $JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$.$_remove$($element$$14$$), $removedRowsHeight$$1$$ += $height$$22$$, $removedRows$$1$$ += $isRowHeader$$1$$ ? 1 : $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$, $element$$14$$, "extent"), $JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$.$m_endRowHeaderPixel$ -= $height$$22$$, $JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$.$m_endRowHeader$ -= 
    $isRowHeader$$1$$ ? 1 : $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$, $element$$14$$, "extent"), $element$$14$$ = $returnVal$$10_rowHeadersContainer$$1$$.lastChild, $rowHeader$$12$$ = ($isRowHeader$$1$$ = $JSCompiler_StaticMethods_containsCSSClassName$$($element$$14$$, $JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$.getMappedStyle("rowheadercell"))) ? $element$$14$$ : $element$$14$$.firstChild, $height$$22$$ = 
    $JSCompiler_StaticMethods_getElementHeight$$($rowHeader$$12$$);
  }
  $isRowHeader$$1$$ || ($returnVal$$10_rowHeadersContainer$$1$$ = $JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$$($JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$, $element$$14$$, $threshold$$4$$), $JSCompiler_StaticMethods__setAttribute$$($JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$, $element$$14$$, "extent", $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_removeRowHeadersFromBottomOfContainer$self$$, $element$$14$$, 
  "extent") - $returnVal$$10_rowHeadersContainer$$1$$.extentChange), $JSCompiler_StaticMethods_setElementHeight$$($rowHeader$$12$$, $JSCompiler_StaticMethods_getElementHeight$$($rowHeader$$12$$) - $returnVal$$10_rowHeadersContainer$$1$$.heightChange), $removedRows$$1$$ += $returnVal$$10_rowHeadersContainer$$1$$.extentChange, $removedRowsHeight$$1$$ += $returnVal$$10_rowHeadersContainer$$1$$.heightChange);
  return{extentChange:$removedRows$$1$$, heightChange:$removedRowsHeight$$1$$};
}, $JSCompiler_StaticMethods_removeRowsFromBottom$$ = function $$JSCompiler_StaticMethods_removeRowsFromBottom$$$($JSCompiler_StaticMethods_removeRowsFromBottom$self$$, $databody$$13$$) {
  var $databodyContent$$8$$, $threshold$$5$$, $row$$13$$, $height$$23$$;
  $databodyContent$$8$$ = $databody$$13$$.firstChild;
  $threshold$$5$$ = $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_currentScrollTop$ + $JSCompiler_StaticMethods_getViewportHeight$$($JSCompiler_StaticMethods_removeRowsFromBottom$self$$) + 0;
  if (!($JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRowPixel$ <= $threshold$$5$$)) {
    for ($JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_stopRowFetch$ && ($JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_stopRowFetch$ = !1), $row$$13$$ = $databodyContent$$8$$.lastChild, $height$$23$$ = $JSCompiler_StaticMethods_getElementHeight$$($row$$13$$);$JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRowPixel$ - $height$$23$$ > $threshold$$5$$;) {
      $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$_remove$($row$$13$$), $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRowPixel$ -= $height$$23$$, $JSCompiler_StaticMethods_removeRowsFromBottom$self$$.$m_endRow$ -= 1, $row$$13$$ = $databodyContent$$8$$.lastChild, $height$$23$$ = $JSCompiler_StaticMethods_getElementHeight$$($row$$13$$);
    }
  }
};
$DvtDataGrid$$.prototype.$handleScrollerMouseDown$ = function $$DvtDataGrid$$$$$handleScrollerMouseDown$$() {
  this.$m_captureScrolling$ = !0;
};
$DvtDataGrid$$.prototype.$handleScrollerMouseUp$ = function $$DvtDataGrid$$$$$handleScrollerMouseUp$$() {
  this.$m_captureScrolling$ = !1;
  $JSCompiler_StaticMethods_isFetchComplete$$(this) && this.$m_stopDatabodyScroll$ && $JSCompiler_StaticMethods_fillViewport$$(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$);
};
$DvtDataGrid$$.prototype.$handleContextMenuGesture$ = function $$DvtDataGrid$$$$$handleContextMenuGesture$$($event$$7$$, $eventType$$4$$, $callback$$27$$) {
  var $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_778_JSCompiler_inline_result$$29_index$$60_launcher$$, $element$$15$$, $capabilities_target$$40$$;
  $capabilities_target$$40$$ = $event$$7$$.originalEvent.target;
  $element$$15$$ = $JSCompiler_StaticMethods_findCell$$(this, $capabilities_target$$40$$);
  "touch" === $eventType$$4$$ && null != $element$$15$$ && ($JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_778_JSCompiler_inline_result$$29_index$$60_launcher$$ = {row:this.$getRowIndex$($element$$15$$.parentNode), column:this.$getCellIndex$($element$$15$$)}, !$JSCompiler_StaticMethods_isMultipleSelection$$(this) || !$JSCompiler_StaticMethods__isContainSelection$$(this, $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_778_JSCompiler_inline_result$$29_index$$60_launcher$$) || 
  $JSCompiler_StaticMethods__isDatabodyCellActive$$(this) && $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_778_JSCompiler_inline_result$$29_index$$60_launcher$$.row != this.$m_active$.indexes.row && $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_778_JSCompiler_inline_result$$29_index$$60_launcher$$.column != this.$m_active$.indexes.column) && ($JSCompiler_StaticMethods__isSelectionEnabled$$(this) ? $JSCompiler_StaticMethods_handleDatabodyClickSelection$$(this, 
  $event$$7$$.originalEvent) : $JSCompiler_StaticMethods_handleDatabodyClickActive$$(this, $event$$7$$.originalEvent));
  a: {
    $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_778_JSCompiler_inline_result$$29_index$$60_launcher$$ = this.$m_utils$;
    for (var $node$$inline_779$$ = $capabilities_target$$40$$, $databody$$inline_780$$ = this.$m_databody$, $nodeName$$inline_781$$, $tabIndex$$inline_782$$, $origTabIndex$$inline_783$$;null != $node$$inline_779$$ && $node$$inline_779$$ != $databody$$inline_780$$;) {
      $nodeName$$inline_781$$ = $node$$inline_779$$.nodeName;
      if (3 != $node$$inline_779$$.nodeType) {
        if ($tabIndex$$inline_782$$ = (0,window.parseInt)($node$$inline_779$$.getAttribute("tabIndex"), 10), $origTabIndex$$inline_783$$ = (0,window.parseInt)($node$$inline_779$$.getAttribute($JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_778_JSCompiler_inline_result$$29_index$$60_launcher$$.$dataGrid$.$m_resources$.getMappedAttribute("tabindex")), 10), null != $tabIndex$$inline_782$$ && 0 <= $tabIndex$$inline_782$$) {
          if ($JSCompiler_StaticMethods_containsCSSClassName$$($node$$inline_779$$, $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_778_JSCompiler_inline_result$$29_index$$60_launcher$$.$dataGrid$.$m_resources$.getMappedStyle("cell")) || $JSCompiler_StaticMethods_containsCSSClassName$$($node$$inline_779$$, $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_778_JSCompiler_inline_result$$29_index$$60_launcher$$.$dataGrid$.$m_resources$.getMappedStyle("headercell"))) {
            break;
          } else {
            $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_778_JSCompiler_inline_result$$29_index$$60_launcher$$ = !0;
            break a;
          }
        } else {
          if ($nodeName$$inline_781$$.match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/) && (-1 != $tabIndex$$inline_782$$ || -1 != $origTabIndex$$inline_783$$)) {
            $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_778_JSCompiler_inline_result$$29_index$$60_launcher$$ = !0;
            break a;
          }
        }
      }
      $node$$inline_779$$ = $node$$inline_779$$.parentNode;
    }
    $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_778_JSCompiler_inline_result$$29_index$$60_launcher$$ = !1;
  }
  if (!$JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_778_JSCompiler_inline_result$$29_index$$60_launcher$$) {
    if (null != $element$$15$$) {
      $JSCompiler_StaticMethods_isMultipleSelection$$(this) && $JSCompiler_StaticMethods__isContainSelection$$(this, this.$getCellIndex$($element$$15$$)) ? ($JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_778_JSCompiler_inline_result$$29_index$$60_launcher$$ = $JSCompiler_StaticMethods__getActiveElement$$(this), $capabilities_target$$40$$ = $JSCompiler_StaticMethods__isDatabodyCellActive$$(this) ? "keyboard" === $eventType$$4$$ ? $JSCompiler_StaticMethods__getCellCapability$$(this, 
      $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_778_JSCompiler_inline_result$$29_index$$60_launcher$$) : $JSCompiler_StaticMethods__getCellCapability$$(this, $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_778_JSCompiler_inline_result$$29_index$$60_launcher$$, $element$$15$$) : $JSCompiler_StaticMethods__getHeaderCapability$$(this, $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_778_JSCompiler_inline_result$$29_index$$60_launcher$$, $element$$15$$)) : 
      ($JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_778_JSCompiler_inline_result$$29_index$$60_launcher$$ = $element$$15$$, $capabilities_target$$40$$ = $JSCompiler_StaticMethods__getCellCapability$$(this, $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_778_JSCompiler_inline_result$$29_index$$60_launcher$$));
    } else {
      $element$$15$$ = $JSCompiler_StaticMethods_findHeader$$(this, $capabilities_target$$40$$);
      if (null == $element$$15$$) {
        return;
      }
      $capabilities_target$$40$$ = $JSCompiler_StaticMethods__getHeaderCapability$$(this, $element$$15$$);
      $JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_778_JSCompiler_inline_result$$29_index$$60_launcher$$ = $element$$15$$;
    }
    $callback$$27$$.call(null, {capabilities:$capabilities_target$$40$$, launcher:$JSCompiler_StaticMethods__isNodeEditableOrClickable$self$$inline_778_JSCompiler_inline_result$$29_index$$60_launcher$$}, $event$$7$$, $eventType$$4$$);
  }
};
$DvtDataGrid$$.prototype.handleContextMenuGesture = $DvtDataGrid$$.prototype.$handleContextMenuGesture$;
var $JSCompiler_StaticMethods__getCellCapability$$ = function $$JSCompiler_StaticMethods__getCellCapability$$$($JSCompiler_StaticMethods__getCellCapability$self$$, $cell$$4_resizable$$, $actualCell_rowHeader$$13$$) {
  var $capabilities$$1$$, $columnHeader$$3$$, $sortable$$, $sameColumn_sorted$$ = !0, $sameRow$$ = !0;
  $capabilities$$1$$ = {resize:"disable", resizeWidth:"disable", resizeHeight:"disable", sortRow:"disable", sortCol:"disable", cut:"disable", paste:"disable", sortColAsc:"disable", sortColDsc:"disable"};
  if (null != $actualCell_rowHeader$$13$$ && ($sameColumn_sorted$$ = $JSCompiler_StaticMethods__getCellCapability$self$$.$getCellIndex$($cell$$4_resizable$$) === $JSCompiler_StaticMethods__getCellCapability$self$$.$getCellIndex$($actualCell_rowHeader$$13$$), $sameRow$$ = $cell$$4_resizable$$.parentNode === $actualCell_rowHeader$$13$$.parentNode, !1 === $sameRow$$ && !1 === $sameColumn_sorted$$)) {
    return $capabilities$$1$$;
  }
  $actualCell_rowHeader$$13$$ = $JSCompiler_StaticMethods_getHeaderFromCell$$($JSCompiler_StaticMethods__getCellCapability$self$$, $cell$$4_resizable$$, "row");
  $columnHeader$$3$$ = $JSCompiler_StaticMethods_getHeaderFromCell$$($JSCompiler_StaticMethods__getCellCapability$self$$, $cell$$4_resizable$$, "column");
  $cell$$4_resizable$$ = $JSCompiler_StaticMethods__getCellCapability$self$$.$m_resources$.getMappedAttribute("resizable");
  $sortable$$ = $JSCompiler_StaticMethods__getCellCapability$self$$.$m_resources$.getMappedAttribute("sortable");
  null != $columnHeader$$3$$ && $sameColumn_sorted$$ && ("true" === $columnHeader$$3$$.getAttribute($cell$$4_resizable$$) && ($capabilities$$1$$.resize = "enable", $capabilities$$1$$.resizeWidth = "enable"), "true" === $columnHeader$$3$$.getAttribute($sortable$$) && ($capabilities$$1$$.sortCol = "enable", $capabilities$$1$$.sortColAsc = "enable", $capabilities$$1$$.sortColDsc = "enable", $sameColumn_sorted$$ = $columnHeader$$3$$.getAttribute($JSCompiler_StaticMethods__getCellCapability$self$$.$m_resources$.getMappedAttribute("sortDir")), 
  "ascending" === $sameColumn_sorted$$ ? $capabilities$$1$$.sortColAsc = "disable" : "descending" === $sameColumn_sorted$$ && ($capabilities$$1$$.sortColDsc = "disable")));
  $sameRow$$ && ($JSCompiler_StaticMethods__isMoveEnabled$$($JSCompiler_StaticMethods__getCellCapability$self$$) && ($capabilities$$1$$.cut = "enable", $capabilities$$1$$.paste = "enable"), null != $actualCell_rowHeader$$13$$ && ("true" === $actualCell_rowHeader$$13$$.getAttribute($cell$$4_resizable$$) && ($capabilities$$1$$.resize = "enable", $capabilities$$1$$.resizeHeight = "enable"), "true" === $actualCell_rowHeader$$13$$.getAttribute($sortable$$) && ($capabilities$$1$$.sortRow = "enable")));
  return $capabilities$$1$$;
}, $JSCompiler_StaticMethods__getHeaderCapability$$ = function $$JSCompiler_StaticMethods__getHeaderCapability$$$($JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$, $header$$4$$, $actualCell$$1_resizable$$1$$) {
  var $capabilities$$2$$, $sortable$$1$$, $sameColumn$$1$$ = !0, $sameRow$$1$$ = !0;
  $capabilities$$2$$ = {resize:"disable", resizeWidth:"disable", resizeHeight:"disable", sortRow:"disable", sortCol:"disable", cut:"disable", paste:"disable", sortColAsc:"disable", sortColDsc:"disable"};
  if (null != $actualCell$$1_resizable$$1$$ && ($sameColumn$$1$$ = $JSCompiler_StaticMethods_getHeaderCellIndex$$($JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$, $header$$4$$) === $JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$.$getCellIndex$($actualCell$$1_resizable$$1$$), $sameRow$$1$$ = $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$, $header$$4$$) === $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$, 
  $actualCell$$1_resizable$$1$$.parentNode), !1 === $sameRow$$1$$ && !1 === $sameColumn$$1$$)) {
    return $capabilities$$2$$;
  }
  $actualCell$$1_resizable$$1$$ = $JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$.$m_resources$.getMappedAttribute("resizable");
  $sortable$$1$$ = $JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$.$m_resources$.getMappedAttribute("sortable");
  null !== $header$$4$$ && ($JSCompiler_StaticMethods_containsCSSClassName$$($header$$4$$, $JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$.getMappedStyle("colheadercell")) && $sameColumn$$1$$ ? ("true" === $header$$4$$.getAttribute($actualCell$$1_resizable$$1$$) && ($capabilities$$2$$.resizeWidth = "enable", $capabilities$$2$$.resize = "enable"), $capabilities$$2$$.resizeHeight = $JSCompiler_StaticMethods_isResizable$$($JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$.$m_options$, 
  "column", "height"), "true" === $header$$4$$.getAttribute($sortable$$1$$) && ($capabilities$$2$$.sortCol = "enable", $capabilities$$2$$.sortColAsc = "enable", $capabilities$$2$$.sortColDsc = "enable", $JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$ = $header$$4$$.getAttribute($JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$.$m_resources$.getMappedAttribute("sortDir")), "ascending" === $JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$ ? $capabilities$$2$$.sortColAsc = 
  "disable" : "descending" === $JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$ && ($capabilities$$2$$.sortColDsc = "disable"))) : $sameRow$$1$$ && ($JSCompiler_StaticMethods__isMoveEnabled$$($JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$) && ($capabilities$$2$$.cut = "enable", $capabilities$$2$$.paste = "enable"), "true" === $header$$4$$.getAttribute($actualCell$$1_resizable$$1$$) && ($capabilities$$2$$.resize = "enable", $capabilities$$2$$.resizeHeight = "enable"), 
  $capabilities$$2$$.resizeWidth = $JSCompiler_StaticMethods_isResizable$$($JSCompiler_StaticMethods__getHeaderCapability$self_sorted$$1$$.$m_options$, "row", "width"), "true" === $header$$4$$.getAttribute($sortable$$1$$) && ($capabilities$$2$$.sortRow = "enable")));
  $capabilities$$2$$.resize = "enable" === $capabilities$$2$$.resizeHeight || "enable" === $capabilities$$2$$.resizeWidth ? "enable" : "disable";
  return $capabilities$$2$$;
};
$DvtDataGrid$$.prototype.$handleContextMenuReturn$ = function $$DvtDataGrid$$$$$handleContextMenuReturn$$($details$$inline_799_event$$8$$, $direction$$4_id$$2_newWidth$$inline_796$$, $initialWidth$$inline_794_value$$47$$) {
  var $newHeight$$inline_797_target$$41_target$$inline_793$$;
  null != this.$m_active$ && ($newHeight$$inline_797_target$$41_target$$inline_793$$ = $JSCompiler_StaticMethods__getActiveElement$$(this));
  if ($direction$$4_id$$2_newWidth$$inline_796$$ === this.$m_resources$.getMappedCommand("resizeHeight") || $direction$$4_id$$2_newWidth$$inline_796$$ === this.$m_resources$.getMappedCommand("resizeWidth")) {
    if ($JSCompiler_StaticMethods_isResizeEnabled$$(this)) {
      var $initialHeight$$inline_795$$, $value$$inline_798$$;
      $value$$inline_798$$ = (0,window.parseInt)($initialWidth$$inline_794_value$$47$$, 10);
      $JSCompiler_StaticMethods_containsCSSClassName$$($newHeight$$inline_797_target$$41_target$$inline_793$$, this.getMappedStyle("cell")) && ($newHeight$$inline_797_target$$41_target$$inline_793$$ = $direction$$4_id$$2_newWidth$$inline_796$$ === this.$m_resources$.getMappedCommand("resizeHeight") ? $JSCompiler_StaticMethods_getHeaderFromCell$$(this, $newHeight$$inline_797_target$$41_target$$inline_793$$, "row") : $JSCompiler_StaticMethods_getHeaderFromCell$$(this, $newHeight$$inline_797_target$$41_target$$inline_793$$, 
      "column"));
      this.$m_resizingElement$ = $newHeight$$inline_797_target$$41_target$$inline_793$$;
      $initialWidth$$inline_794_value$$47$$ = $JSCompiler_StaticMethods_getElementWidth$$($newHeight$$inline_797_target$$41_target$$inline_793$$);
      $initialHeight$$inline_795$$ = $JSCompiler_StaticMethods_getElementHeight$$($newHeight$$inline_797_target$$41_target$$inline_793$$);
      $direction$$4_id$$2_newWidth$$inline_796$$ === this.$m_resources$.getMappedCommand("resizeWidth") ? $initialWidth$$inline_794_value$$47$$ !== $value$$inline_798$$ && ($JSCompiler_StaticMethods_containsCSSClassName$$(this.$m_resizingElement$, this.getMappedStyle("colheadercell")) ? $JSCompiler_StaticMethods__isDOMElementResizable$$(this, this.$m_resizingElement$) && $JSCompiler_StaticMethods_resizeColWidth$$(this, $initialWidth$$inline_794_value$$47$$, $value$$inline_798$$) : $JSCompiler_StaticMethods_resizeRowWidth$$(this, 
      $value$$inline_798$$ - $initialWidth$$inline_794_value$$47$$)) : $direction$$4_id$$2_newWidth$$inline_796$$ === this.$m_resources$.getMappedCommand("resizeHeight") && ($initialHeight$$inline_795$$ = $JSCompiler_StaticMethods_getElementHeight$$($newHeight$$inline_797_target$$41_target$$inline_793$$), $initialHeight$$inline_795$$ !== $value$$inline_798$$ && ($JSCompiler_StaticMethods_containsCSSClassName$$(this.$m_resizingElement$, this.getMappedStyle("colheadercell")) ? $JSCompiler_StaticMethods_resizeColHeight$$(this, 
      $value$$inline_798$$ - $initialHeight$$inline_795$$) : $JSCompiler_StaticMethods__isDOMElementResizable$$(this, this.$m_resizingElement$) && $JSCompiler_StaticMethods_resizeRowHeight$$(this, $initialHeight$$inline_795$$, $value$$inline_798$$)));
      $direction$$4_id$$2_newWidth$$inline_796$$ = $JSCompiler_StaticMethods_getElementWidth$$($newHeight$$inline_797_target$$41_target$$inline_793$$);
      $newHeight$$inline_797_target$$41_target$$inline_793$$ = $JSCompiler_StaticMethods_getElementHeight$$($newHeight$$inline_797_target$$41_target$$inline_793$$);
      if ($direction$$4_id$$2_newWidth$$inline_796$$ != $initialWidth$$inline_794_value$$47$$ || $newHeight$$inline_797_target$$41_target$$inline_793$$ != $initialHeight$$inline_795$$) {
        $details$$inline_799_event$$8$$ = {event:$details$$inline_799_event$$8$$, ui:{header:$JSCompiler_StaticMethods__getKey$$(this, this.$m_resizingElement$), oldDimensions:{width:$initialWidth$$inline_794_value$$47$$, height:$initialHeight$$inline_795$$}, newDimensions:{width:$direction$$4_id$$2_newWidth$$inline_796$$, height:$newHeight$$inline_797_target$$41_target$$inline_793$$}, size:$value$$inline_798$$}}, this.fireEvent("resize", $details$$inline_799_event$$8$$), $JSCompiler_StaticMethods_buildCorners$$(this), 
        $JSCompiler_StaticMethods_isTouchDevice$$(this.$m_utils$) && $JSCompiler_StaticMethods__moveTouchSelectionAffordance$$(this);
      }
      this.$m_resizingElement$ = null;
    }
  } else {
    $direction$$4_id$$2_newWidth$$inline_796$$ === this.$m_resources$.getMappedCommand("sortColAsc") || $direction$$4_id$$2_newWidth$$inline_796$$ === this.$m_resources$.getMappedCommand("sortColDsc") ? ($direction$$4_id$$2_newWidth$$inline_796$$ = $direction$$4_id$$2_newWidth$$inline_796$$ === this.$m_resources$.getMappedCommand("sortColAsc") ? "ascending" : "descending", $JSCompiler_StaticMethods_containsCSSClassName$$($newHeight$$inline_797_target$$41_target$$inline_793$$, this.getMappedStyle("cell")) && 
    ($newHeight$$inline_797_target$$41_target$$inline_793$$ = $JSCompiler_StaticMethods_getHeaderFromCell$$(this, $newHeight$$inline_797_target$$41_target$$inline_793$$, "column")), $JSCompiler_StaticMethods__isDOMElementSortable$$(this, $newHeight$$inline_797_target$$41_target$$inline_793$$) && (null == $newHeight$$inline_797_target$$41_target$$inline_793$$ || $JSCompiler_StaticMethods__databodyEmpty$$(this) || $JSCompiler_StaticMethods__doHeaderSort$$(this, $details$$inline_799_event$$8$$, $newHeight$$inline_797_target$$41_target$$inline_793$$, 
    $direction$$4_id$$2_newWidth$$inline_796$$))) : $direction$$4_id$$2_newWidth$$inline_796$$ === this.$m_resources$.getMappedCommand("sortRowAsc") || $direction$$4_id$$2_newWidth$$inline_796$$ === this.$m_resources$.getMappedCommand("sortRowDsc") ? ($direction$$4_id$$2_newWidth$$inline_796$$ = $direction$$4_id$$2_newWidth$$inline_796$$ === this.$m_resources$.getMappedCommand("sortRowAsc") ? "ascending" : "descending", $JSCompiler_StaticMethods_containsCSSClassName$$($newHeight$$inline_797_target$$41_target$$inline_793$$, 
    this.getMappedStyle("cell")) && ($newHeight$$inline_797_target$$41_target$$inline_793$$ = $JSCompiler_StaticMethods_getHeaderFromCell$$(this, $newHeight$$inline_797_target$$41_target$$inline_793$$, "row")), $JSCompiler_StaticMethods__isDOMElementSortable$$(this, $newHeight$$inline_797_target$$41_target$$inline_793$$) && (null == $newHeight$$inline_797_target$$41_target$$inline_793$$ || $JSCompiler_StaticMethods__databodyEmpty$$(this) || $JSCompiler_StaticMethods__doHeaderSort$$(this, $details$$inline_799_event$$8$$, 
    $newHeight$$inline_797_target$$41_target$$inline_793$$, $direction$$4_id$$2_newWidth$$inline_796$$))) : $direction$$4_id$$2_newWidth$$inline_796$$ === this.$m_resources$.getMappedCommand("cut") ? $JSCompiler_StaticMethods__handleCut$$(this, $details$$inline_799_event$$8$$, $newHeight$$inline_797_target$$41_target$$inline_793$$) : $direction$$4_id$$2_newWidth$$inline_796$$ === this.$m_resources$.getMappedCommand("paste") ? $JSCompiler_StaticMethods__handlePaste$$(this, $details$$inline_799_event$$8$$, 
    $newHeight$$inline_797_target$$41_target$$inline_793$$) : $direction$$4_id$$2_newWidth$$inline_796$$ === this.$m_resources$.getMappedCommand("discontiguousSelection") && $JSCompiler_StaticMethods_setDiscontiguousSelectionMode$$(this, $initialWidth$$inline_794_value$$47$$);
  }
};
$DvtDataGrid$$.prototype.handleContextMenuReturn = $DvtDataGrid$$.prototype.$handleContextMenuReturn$;
var $JSCompiler_StaticMethods__isDOMElementSortable$$ = function $$JSCompiler_StaticMethods__isDOMElementSortable$$$($JSCompiler_StaticMethods__isDOMElementSortable$self$$, $element$$16$$) {
  var $header$$5$$ = $JSCompiler_StaticMethods_findHeader$$($JSCompiler_StaticMethods__isDOMElementSortable$self$$, $element$$16$$);
  return null == $header$$5$$ ? !1 : "true" == $header$$5$$.getAttribute($JSCompiler_StaticMethods__isDOMElementSortable$self$$.$m_resources$.getMappedAttribute("sortable"));
}, $JSCompiler_StaticMethods__isSelectionEnabled$$ = function $$JSCompiler_StaticMethods__isSelectionEnabled$$$($JSCompiler_StaticMethods__isSelectionEnabled$self$$) {
  return "none" != $JSCompiler_StaticMethods_getSelectionCardinality$$($JSCompiler_StaticMethods__isSelectionEnabled$self$$.$m_options$);
}, $JSCompiler_StaticMethods_isMultipleSelection$$ = function $$JSCompiler_StaticMethods_isMultipleSelection$$$($JSCompiler_StaticMethods_isMultipleSelection$self$$) {
  return "multiple" == $JSCompiler_StaticMethods_getSelectionCardinality$$($JSCompiler_StaticMethods_isMultipleSelection$self$$.$m_options$);
}, $JSCompiler_StaticMethods_isResizeEnabled$$ = function $$JSCompiler_StaticMethods_isResizeEnabled$$$($JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$) {
  var $row$$14$$ = $JSCompiler_StaticMethods_isResizable$$($JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$.$m_options$, "row");
  $JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$ = $JSCompiler_StaticMethods_isResizable$$($JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$.$m_options$, "column");
  return "disable" !== $row$$14$$.width || "disable" !== $row$$14$$.height || "disable" !== $JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$.width || "disable" !== $JSCompiler_StaticMethods_isResizeEnabled$self_column$$3$$.height;
};
$JSCompiler_prototypeAlias$$ = $DvtDataGrid$$.prototype;
$JSCompiler_prototypeAlias$$.$handleMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleMouseMove$$($event$$9$$) {
  $JSCompiler_StaticMethods_isResizeEnabled$$(this) && !1 == this.$m_databodyDragState$ && $JSCompiler_StaticMethods_handleResize$$(this, $event$$9$$);
};
$JSCompiler_prototypeAlias$$.$handleRowHeaderMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleRowHeaderMouseMove$$($event$$10$$) {
  this.$m_databodyMove$ && $JSCompiler_StaticMethods__handleMove$$(this, $event$$10$$);
};
$JSCompiler_prototypeAlias$$.$handleHeaderMouseDown$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseDown$$($event$$11$$) {
  var $header$$inline_820_row$$15$$, $processed$$;
  $JSCompiler_StaticMethods__exitActionableMode$$(this);
  if (0 === $event$$11$$.button) {
    if (($JSCompiler_StaticMethods_containsCSSClassName$$($event$$11$$.target, this.getMappedStyle("sortascending")) || $JSCompiler_StaticMethods_containsCSSClassName$$($event$$11$$.target, this.getMappedStyle("sortdescending"))) && $JSCompiler_StaticMethods__isDOMElementSortable$$(this, $event$$11$$.target)) {
      $event$$11$$.preventDefault();
      $JSCompiler_StaticMethods__databodyEmpty$$(this) || $JSCompiler_StaticMethods_addCSSClassName$$($event$$11$$.target, this.getMappedStyle("selected"));
      return;
    }
    $JSCompiler_StaticMethods_isResizeEnabled$$(this) && ($processed$$ = $JSCompiler_StaticMethods_handleResizeMouseDown$$(this, $event$$11$$));
    $header$$inline_820_row$$15$$ = this.find($event$$11$$.target, "row");
    !this.$m_isResizing$ && $JSCompiler_StaticMethods__isMoveOnRowEnabled$$(this, $header$$inline_820_row$$15$$) && (this.$m_databodyMove$ = !0, this.$m_currentX$ = $event$$11$$.pageX, this.$m_currentY$ = $event$$11$$.pageY, $processed$$ = !0);
  }
  this.$m_isResizing$ || (this.$m_root$.contains(window.document.activeElement) && window.document.activeElement !== this.$m_root$ || (this.$m_externalFocus$ = !0), $header$$inline_820_row$$15$$ = $JSCompiler_StaticMethods_findHeader$$(this, $event$$11$$.target), null != $header$$inline_820_row$$15$$ && ($JSCompiler_StaticMethods__isSelectionEnabled$$(this) && $JSCompiler_StaticMethods__clearSelection$$(this), $JSCompiler_StaticMethods__setActive$$(this, $header$$inline_820_row$$15$$, $event$$11$$)));
  !0 === $processed$$ && $event$$11$$.preventDefault();
};
$JSCompiler_prototypeAlias$$.$handleMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleMouseUp$$($event$$12$$) {
  this.$m_databodyMove$ && null != this.$m_moveRow$ ? $JSCompiler_StaticMethods__handleMoveMouseUp$$(this, !1) : $JSCompiler_StaticMethods_isResizeEnabled$$(this) && $JSCompiler_StaticMethods_handleResizeMouseUp$$(this, $event$$12$$);
  this.$m_databodyMove$ = !1;
};
$JSCompiler_prototypeAlias$$.$handleHeaderMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseOver$$($event$$13$$) {
  $JSCompiler_StaticMethods_addCSSClassName$$($JSCompiler_StaticMethods_findHeader$$(this, $event$$13$$.target), this.getMappedStyle("hover"));
  if ($JSCompiler_StaticMethods__isDOMElementSortable$$(this, $event$$13$$.target) && !$JSCompiler_StaticMethods__databodyEmpty$$(this)) {
    var $header$$inline_824$$ = $JSCompiler_StaticMethods_findHeader$$(this, $event$$13$$.target);
    $header$$inline_824$$ && $JSCompiler_StaticMethods__showOrHideSortIcon$$(this, $header$$inline_824$$, !1);
    ($JSCompiler_StaticMethods_containsCSSClassName$$($event$$13$$.target, this.getMappedStyle("sortascending")) || $JSCompiler_StaticMethods_containsCSSClassName$$($event$$13$$.target, this.getMappedStyle("sortdescending"))) && $JSCompiler_StaticMethods_addCSSClassName$$($event$$13$$.target, this.getMappedStyle("hover"));
  }
};
$JSCompiler_prototypeAlias$$.$handleHeaderMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseOut$$($event$$14$$) {
  $JSCompiler_StaticMethods_removeCSSClassName$$($JSCompiler_StaticMethods_findHeader$$(this, $event$$14$$.target), this.getMappedStyle("hover"));
  if ($JSCompiler_StaticMethods__isDOMElementSortable$$(this, $event$$14$$.target) && !$JSCompiler_StaticMethods__databodyEmpty$$(this)) {
    var $header$$inline_828$$ = $JSCompiler_StaticMethods_findHeader$$(this, $event$$14$$.target);
    null != $header$$inline_828$$ && null != $event$$14$$.relatedTarget && $header$$inline_828$$ === $JSCompiler_StaticMethods_findHeader$$(this, $event$$14$$.relatedTarget) || $JSCompiler_StaticMethods__showOrHideSortIcon$$(this, $header$$inline_828$$, !0);
    if ($JSCompiler_StaticMethods_containsCSSClassName$$($event$$14$$.target, this.getMappedStyle("sortascending")) || $JSCompiler_StaticMethods_containsCSSClassName$$($event$$14$$.target, this.getMappedStyle("sortdescending"))) {
      $JSCompiler_StaticMethods_removeCSSClassName$$($event$$14$$.target, this.getMappedStyle("hover")), $JSCompiler_StaticMethods_removeCSSClassName$$($event$$14$$.target, this.getMappedStyle("selected"));
    }
  }
};
$JSCompiler_prototypeAlias$$.$handleHeaderMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderMouseUp$$() {
  this.$m_databodyMove$ && null != this.$m_moveRow$ && $JSCompiler_StaticMethods__handleMoveMouseUp$$(this, !0);
};
$JSCompiler_prototypeAlias$$.$handleHeaderClick$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderClick$$($event$$16$$) {
  ($JSCompiler_StaticMethods_containsCSSClassName$$($event$$16$$.target, this.getMappedStyle("sortascending")) || $JSCompiler_StaticMethods_containsCSSClassName$$($event$$16$$.target, this.getMappedStyle("sortdescending"))) && $JSCompiler_StaticMethods__isDOMElementSortable$$(this, $event$$16$$.target) && ($JSCompiler_StaticMethods__handleHeaderSort$$(this, $event$$16$$), $event$$16$$.preventDefault());
};
$JSCompiler_prototypeAlias$$.$handleDatabodyMouseDown$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseDown$$($event$$17$$) {
  $JSCompiler_StaticMethods__exitActionableMode$$(this);
  0 === $event$$17$$.button && $JSCompiler_StaticMethods__isMoveOnRowEnabled$$(this, this.find($event$$17$$.target, "row")) && (this.$m_databodyMove$ = !0, this.$m_currentX$ = $event$$17$$.pageX, this.$m_currentY$ = $event$$17$$.pageY);
  this.$m_root$.contains(window.document.activeElement) && window.document.activeElement !== this.$m_root$ || (this.$m_externalFocus$ = !0);
  $JSCompiler_StaticMethods__isSelectionEnabled$$(this) ? ($JSCompiler_StaticMethods_handleDatabodyClickSelection$$(this, $event$$17$$), $JSCompiler_StaticMethods_isMultipleSelection$$(this) && 0 === $event$$17$$.button && (this.$m_databodyDragState$ = !0)) : $JSCompiler_StaticMethods_handleDatabodyClickActive$$(this, $event$$17$$);
};
$JSCompiler_prototypeAlias$$.$handleDatabodyMouseOut$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseOut$$($event$$18$$) {
  var $row$$16$$, $selectionMode$$;
  this.$m_databodyMove$ || ($selectionMode$$ = this.$m_options$.$getSelectionMode$(), $row$$16$$ = this.find($event$$18$$.target, "row"), "cell" === $selectionMode$$ ? $JSCompiler_StaticMethods_removeCSSClassName$$($JSCompiler_StaticMethods_findCell$$(this, $event$$18$$.target), this.getMappedStyle("hover")) : "row" === $selectionMode$$ && $JSCompiler_StaticMethods_removeCSSClassName$$($row$$16$$, this.getMappedStyle("hover")));
};
$JSCompiler_prototypeAlias$$.$handleDatabodyMouseOver$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseOver$$($event$$19$$) {
  var $row$$17$$, $selectionMode$$1$$;
  this.$m_databodyMove$ || ($selectionMode$$1$$ = this.$m_options$.$getSelectionMode$(), $row$$17$$ = this.find($event$$19$$.target, "row"), "cell" === $selectionMode$$1$$ ? $JSCompiler_StaticMethods_addCSSClassName$$($JSCompiler_StaticMethods_findCell$$(this, $event$$19$$.target), this.getMappedStyle("hover")) : "row" === $selectionMode$$1$$ && $JSCompiler_StaticMethods_addCSSClassName$$($row$$17$$, this.getMappedStyle("hover")));
};
$JSCompiler_prototypeAlias$$.$handleDatabodyMouseMove$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseMove$$($event$$20$$) {
  this.$m_databodyMove$ ? $JSCompiler_StaticMethods__handleMove$$(this, $event$$20$$) : this.$m_databodyDragState$ && $JSCompiler_StaticMethods_handleDatabodySelectionDrag$$(this, $event$$20$$);
};
$JSCompiler_prototypeAlias$$.$handleDatabodyMouseUp$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyMouseUp$$() {
  this.$m_databodyDragState$ = !1;
  this.$m_databodyMove$ && null != this.$m_moveRow$ && $JSCompiler_StaticMethods__handleMoveMouseUp$$(this, !0);
};
$JSCompiler_prototypeAlias$$.$handleDatabodyKeyDown$ = function $$JSCompiler_prototypeAlias$$$$handleDatabodyKeyDown$$($event$$22$$) {
  var $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$;
  if (!$event$$22$$.defaultPrevented && (9 !== $event$$22$$.keyCode || $JSCompiler_StaticMethods__isSelectionEnabled$$(this) && $JSCompiler_StaticMethods_isActionableMode$$(this))) {
    if (null != this.$m_active$ && "header" == this.$m_active$.type) {
      $JSCompiler_StaticMethods__fireKeyDownEvent$$(this, $event$$22$$);
      var $axis$$inline_832_cell$$inline_845_ctrlKey$$inline_846_start$$inline_839$$, $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$, $keyCode$$inline_835_shiftKey$$inline_847$$, $processed$$inline_836$$ = !1, $level$$inline_837$$, $ctrlKey$$inline_838$$;
      "header" == this.$m_active$.type ? ($axis$$inline_832_cell$$inline_845_ctrlKey$$inline_846_start$$inline_839$$ = this.$m_active$.axis, $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$ = this.$m_active$.index, $level$$inline_837$$ = this.$m_active$.level, $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$ = $JSCompiler_StaticMethods__getActiveElement$$(this), 
      $keyCode$$inline_835_shiftKey$$inline_847$$ = $event$$22$$.keyCode, $ctrlKey$$inline_838$$ = $JSCompiler_StaticMethods_ctrlEquivalent$$(this.$m_utils$, $event$$22$$), $JSCompiler_StaticMethods_isActionableMode$$(this) ? $processed$$inline_836$$ = $JSCompiler_StaticMethods__handleActionableModeKeyDown$$(this, $event$$22$$, $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$, !0) : 38 != $keyCode$$inline_835_shiftKey$$inline_847$$ && 40 != $keyCode$$inline_835_shiftKey$$inline_847$$ && 
      37 != $keyCode$$inline_835_shiftKey$$inline_847$$ && 39 != $keyCode$$inline_835_shiftKey$$inline_847$$ || $ctrlKey$$inline_838$$ ? 113 == $keyCode$$inline_835_shiftKey$$inline_847$$ ? $JSCompiler_StaticMethods__enterActionableMode$$(this, $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$) : 32 == $keyCode$$inline_835_shiftKey$$inline_847$$ ? $JSCompiler_StaticMethods__isSelectionEnabled$$(this) && $JSCompiler_StaticMethods_isMultipleSelection$$(this) && 
      ("row" === $axis$$inline_832_cell$$inline_845_ctrlKey$$inline_846_start$$inline_839$$ ? (this.$m_rowHeaderLevelCount$ - 1 === $level$$inline_837$$ ? $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$ = $axis$$inline_832_cell$$inline_845_ctrlKey$$inline_846_start$$inline_839$$ = $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$ : ($axis$$inline_832_cell$$inline_845_ctrlKey$$inline_846_start$$inline_839$$ = 
      $JSCompiler_StaticMethods__getAttribute$$(this, $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$.parentNode, "start"), $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$ = $axis$$inline_832_cell$$inline_845_ctrlKey$$inline_846_start$$inline_839$$ + $JSCompiler_StaticMethods__getAttribute$$(this, $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$.parentNode, 
      "extent") - 1), $JSCompiler_StaticMethods__selectEntireRow$$(this, $axis$$inline_832_cell$$inline_845_ctrlKey$$inline_846_start$$inline_839$$, $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$, $event$$22$$), $JSCompiler_StaticMethods__setAccInfoText$$(this, "accessibleRowSelected", {row:$JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$ + 
      1}), $processed$$inline_836$$ = !0) : "column" === $axis$$inline_832_cell$$inline_845_ctrlKey$$inline_846_start$$inline_839$$ && "cell" == this.$m_options$.$getSelectionMode$() && (this.$m_columnHeaderLevelCount$ - 1 === $level$$inline_837$$ ? $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$ = $axis$$inline_832_cell$$inline_845_ctrlKey$$inline_846_start$$inline_839$$ = $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$ : 
      ($axis$$inline_832_cell$$inline_845_ctrlKey$$inline_846_start$$inline_839$$ = $JSCompiler_StaticMethods__getAttribute$$(this, $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$.parentNode, "start"), $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$ = $axis$$inline_832_cell$$inline_845_ctrlKey$$inline_846_start$$inline_839$$ + $JSCompiler_StaticMethods__getAttribute$$(this, $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$.parentNode, 
      "extent") - 1), $JSCompiler_StaticMethods__selectEntireColumn$$(this, $axis$$inline_832_cell$$inline_845_ctrlKey$$inline_846_start$$inline_839$$, $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$, $event$$22$$), $JSCompiler_StaticMethods__setAccInfoText$$(this, "accessibleColumnSelected", {column:$JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$ + 
      1}), $processed$$inline_836$$ = !0)) : 13 == $keyCode$$inline_835_shiftKey$$inline_847$$ ? "true" == $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$.getAttribute(this.$m_resources$.getMappedAttribute("sortable")) ? ($JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$ = $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$, 
      $JSCompiler_StaticMethods__databodyEmpty$$(this) || ($cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$ = $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$.getAttribute(this.$m_resources$.getMappedAttribute("sortDir")), $JSCompiler_StaticMethods__doHeaderSort$$(this, $event$$22$$, $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$, 
      null == $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$ || "descending" === $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$ ? "ascending" : "descending")), $processed$$inline_836$$ = !0) : $JSCompiler_StaticMethods__enterActionableMode$$(this, $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$) : 33 == $keyCode$$inline_835_shiftKey$$inline_847$$ ? 
      "row" === $axis$$inline_832_cell$$inline_845_ctrlKey$$inline_846_start$$inline_839$$ && ($cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$ = $JSCompiler_StaticMethods__getRowHeaderByIndex$$(this, 0, $level$$inline_837$$), $JSCompiler_StaticMethods__setActive$$(this, $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$, $event$$22$$), $processed$$inline_836$$ = !0) : 34 == $keyCode$$inline_835_shiftKey$$inline_847$$ ? 
      "row" === $axis$$inline_832_cell$$inline_845_ctrlKey$$inline_846_start$$inline_839$$ && ($JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$ = $JSCompiler_StaticMethods__isCountUnknown$$(this, "row") || $JSCompiler_StaticMethods__isHighWatermarkScrolling$$(this) ? Math.max(0, this.$m_endRowHeader$) : Math.max(0, this.$m_dataSource$.getCount("row") - 1), $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$ = 
      $JSCompiler_StaticMethods__getRowHeaderByIndex$$(this, $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$, $level$$inline_837$$), $JSCompiler_StaticMethods__setActive$$(this, $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$, $event$$22$$), $processed$$inline_836$$ = !0) : 36 == $keyCode$$inline_835_shiftKey$$inline_847$$ ? "column" === $axis$$inline_832_cell$$inline_845_ctrlKey$$inline_846_start$$inline_839$$ && 
      ($cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$ = $JSCompiler_StaticMethods__getColumnHeaderByIndex$$(this, 0, $level$$inline_837$$), $JSCompiler_StaticMethods__setActive$$(this, $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$, $event$$22$$), $processed$$inline_836$$ = !0) : 35 == $keyCode$$inline_835_shiftKey$$inline_847$$ ? "column" === $axis$$inline_832_cell$$inline_845_ctrlKey$$inline_846_start$$inline_839$$ && 
      ($JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$ = $JSCompiler_StaticMethods__isCountUnknown$$(this, "column") || $JSCompiler_StaticMethods__isHighWatermarkScrolling$$(this) ? Math.max(0, this.$m_endColHeader$) : Math.max(0, this.$m_dataSource$.getCount("column") - 1), $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$ = $JSCompiler_StaticMethods__getColumnHeaderByIndex$$(this, 
      $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$, $level$$inline_837$$), $JSCompiler_StaticMethods__setActive$$(this, $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$, $event$$22$$), $processed$$inline_836$$ = !0) : $processed$$inline_836$$ = $JSCompiler_StaticMethods_isReadCurrentContent$$(this, $event$$22$$) ? $JSCompiler_StaticMethods_readCurrentContent$$(this) : 
      $JSCompiler_StaticMethods__handleCutPasteKeydown$$(this, $event$$22$$) : $processed$$inline_836$$ = $JSCompiler_StaticMethods_handleHeaderArrowKeys$$(this, $keyCode$$inline_835_shiftKey$$inline_847$$, $event$$22$$), $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$ = $processed$$inline_836$$) : $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$ = 
      void 0;
    } else {
      if ($JSCompiler_StaticMethods__isSelectionEnabled$$(this) && null != this.$m_selectionFrontier$ && ($JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$ = $JSCompiler_StaticMethods_getElementsInRange$$(this, this.createRange(this.$m_selectionFrontier$)), null == $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$)) {
        return;
      }
      $JSCompiler_StaticMethods__fireKeyDownEvent$$(this, $event$$22$$);
      $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$ = $JSCompiler_StaticMethods__handleCutPasteKeydown$$(this, $event$$22$$);
      $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$ || ($JSCompiler_StaticMethods__isSelectionEnabled$$(this) ? ($cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$ = !1, $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$ = $event$$22$$.keyCode, 
      $axis$$inline_832_cell$$inline_845_ctrlKey$$inline_846_start$$inline_839$$ = $JSCompiler_StaticMethods_findCell$$(this, $event$$22$$.target), $JSCompiler_StaticMethods_isActionableMode$$(this) ? $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$ = $JSCompiler_StaticMethods__handleActionableModeKeyDown$$(this, $event$$22$$, $axis$$inline_832_cell$$inline_845_ctrlKey$$inline_846_start$$inline_839$$, !1) : 113 == $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$ || 
      13 == $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$ ? $JSCompiler_StaticMethods__enterActionableMode$$(this, $axis$$inline_832_cell$$inline_845_ctrlKey$$inline_846_start$$inline_839$$) : 27 == $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$ ? this.$m_discontiguousSelection$ && 
      $JSCompiler_StaticMethods_setDiscontiguousSelectionMode$$(this, !1) : $JSCompiler_StaticMethods_isNavigationKey$$($JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$) ? ($axis$$inline_832_cell$$inline_845_ctrlKey$$inline_846_start$$inline_839$$ = $JSCompiler_StaticMethods_ctrlEquivalent$$(this.$m_utils$, $event$$22$$), $keyCode$$inline_835_shiftKey$$inline_847$$ = $event$$22$$.shiftKey, 
      $JSCompiler_StaticMethods__updateStateInfo$$(this, "accessibleStateSelected"), $axis$$inline_832_cell$$inline_845_ctrlKey$$inline_846_start$$inline_839$$ || ($cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$$(this, $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$, $keyCode$$inline_835_shiftKey$$inline_847$$ && 
      $JSCompiler_StaticMethods_isMultipleSelection$$(this), $event$$22$$))) : $event$$22$$.shiftKey && 119 == $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$ ? ($JSCompiler_StaticMethods_setDiscontiguousSelectionMode$$(this, !this.$m_discontiguousSelection$), $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$ = !0) : 32 == $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$ && 
      ($axis$$inline_832_cell$$inline_845_ctrlKey$$inline_846_start$$inline_839$$ = $JSCompiler_StaticMethods_ctrlEquivalent$$(this.$m_utils$, $event$$22$$), $keyCode$$inline_835_shiftKey$$inline_847$$ = $event$$22$$.shiftKey, "cell" == this.$m_options$.$getSelectionMode$() && $JSCompiler_StaticMethods_isMultipleSelection$$(this) && ($keyCode$$inline_835_shiftKey$$inline_847$$ && !$axis$$inline_832_cell$$inline_845_ctrlKey$$inline_846_start$$inline_839$$ || $axis$$inline_832_cell$$inline_845_ctrlKey$$inline_846_start$$inline_839$$) && 
      ($axis$$inline_832_cell$$inline_845_ctrlKey$$inline_846_start$$inline_839$$ ? ($JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$ = this.$m_active$.indexes.column, $JSCompiler_StaticMethods__selectEntireColumn$$(this, $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$, $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$, 
      $event$$22$$), $JSCompiler_StaticMethods__setAccInfoText$$(this, "accessibleColumnSelected", {column:this.$m_active$.keys.column})) : ($JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$ = this.$m_active$.indexes.row, $JSCompiler_StaticMethods__selectEntireRow$$(this, $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$, 
      $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$, $event$$22$$), $JSCompiler_StaticMethods__setAccInfoText$$(this, "accessibleRowSelected", {row:this.$m_active$.keys.row})), $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$ = !0)), $JSCompiler_StaticMethods_isReadCurrentContent$$(this, $event$$22$$) && ($JSCompiler_StaticMethods_readCurrentContent$$(this), 
      $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$ = !0), $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$ = $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$) : ($JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$ = 
      $event$$22$$.keyCode, $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$ = $JSCompiler_StaticMethods_findCell$$(this, $event$$22$$.target), $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$ = $JSCompiler_StaticMethods_isActionableMode$$(this) ? $JSCompiler_StaticMethods__handleActionableModeKeyDown$$(this, $event$$22$$, $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$, 
      !1) : 113 == $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$ || 13 == $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$ ? $JSCompiler_StaticMethods__enterActionableMode$$(this, $cell$$inline_855_direction$$inline_8917_elem$$inline_834_end$$inline_840_processed$$inline_850$$) : 
      $JSCompiler_StaticMethods_isNavigationKey$$($JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$) && !$JSCompiler_StaticMethods_ctrlEquivalent$$(this.$m_utils$, $event$$22$$) ? $JSCompiler_StaticMethods_handleCellArrowKeys$$(this, $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$, 
      !1, $event$$22$$) : $JSCompiler_StaticMethods_isReadCurrentContent$$(this, $event$$22$$) ? $JSCompiler_StaticMethods_readCurrentContent$$(this) : !1));
    }
    !0 === $JSCompiler_temp$$322_cell$$5_column$$inline_848_header$$inline_8915_index$$inline_833_keyCode$$inline_844_keyCode$$inline_854_processed$$1_row$$inline_849$$ && $event$$22$$.preventDefault();
  }
};
var $JSCompiler_StaticMethods__fireKeyDownEvent$$ = function $$JSCompiler_StaticMethods__fireKeyDownEvent$$$($JSCompiler_StaticMethods__fireKeyDownEvent$self$$, $event$$23$$) {
  var $cell$$6_header$$6_rowKey$$1$$;
  $cell$$6_header$$6_rowKey$$1$$ = $JSCompiler_StaticMethods_findCell$$($JSCompiler_StaticMethods__fireKeyDownEvent$self$$, $event$$23$$.target);
  if (null == $cell$$6_header$$6_rowKey$$1$$) {
    $cell$$6_header$$6_rowKey$$1$$ = $JSCompiler_StaticMethods_findHeader$$($JSCompiler_StaticMethods__fireKeyDownEvent$self$$, $event$$23$$.target);
    if (null == $cell$$6_header$$6_rowKey$$1$$) {
      return;
    }
    $cell$$6_header$$6_rowKey$$1$$ = $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods__fireKeyDownEvent$self$$, $cell$$6_header$$6_rowKey$$1$$);
  } else {
    $cell$$6_header$$6_rowKey$$1$$ = $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods__fireKeyDownEvent$self$$, $cell$$6_header$$6_rowKey$$1$$.parentNode);
  }
  $JSCompiler_StaticMethods__fireKeyDownEvent$self$$.fireEvent("keydown", {event:$event$$23$$, ui:{rowKey:$cell$$6_header$$6_rowKey$$1$$}});
}, $JSCompiler_StaticMethods_findPos$$ = function $$JSCompiler_StaticMethods_findPos$$$($JSCompiler_StaticMethods_findPos$self$$, $element$$17$$) {
  var $parentPos$$, $cs$$inline_858_element$$inline_857_transform_transform$$inline_859_transformX$$inline_861$$;
  if ($element$$17$$) {
    $parentPos$$ = $JSCompiler_StaticMethods_findPos$$($JSCompiler_StaticMethods_findPos$self$$, $element$$17$$.offsetParent);
    $cs$$inline_858_element$$inline_857_transform_transform$$inline_859_transformX$$inline_861$$ = $element$$17$$.offsetParent;
    var $matrixArray$$inline_860_transformZ$$inline_863$$, $transformY$$inline_862$$;
    $cs$$inline_858_element$$inline_857_transform_transform$$inline_859_transformX$$inline_861$$ ? ($cs$$inline_858_element$$inline_857_transform_transform$$inline_859_transformX$$inline_861$$ = window.document.defaultView.getComputedStyle($cs$$inline_858_element$$inline_857_transform_transform$$inline_859_transformX$$inline_861$$, null), $cs$$inline_858_element$$inline_857_transform_transform$$inline_859_transformX$$inline_861$$ = $cs$$inline_858_element$$inline_857_transform_transform$$inline_859_transformX$$inline_861$$.getPropertyValue("-webkit-transform") || 
    $cs$$inline_858_element$$inline_857_transform_transform$$inline_859_transformX$$inline_861$$.getPropertyValue("-moz-transform") || $cs$$inline_858_element$$inline_857_transform_transform$$inline_859_transformX$$inline_861$$.getPropertyValue("-ms-transform") || $cs$$inline_858_element$$inline_857_transform_transform$$inline_859_transformX$$inline_861$$.getPropertyValue("-o-transform") || $cs$$inline_858_element$$inline_857_transform_transform$$inline_859_transformX$$inline_861$$.getPropertyValue("transform"), 
    $matrixArray$$inline_860_transformZ$$inline_863$$ = $cs$$inline_858_element$$inline_857_transform_transform$$inline_859_transformX$$inline_861$$.substr(7, $cs$$inline_858_element$$inline_857_transform_transform$$inline_859_transformX$$inline_861$$.length - 8).split(", "), $cs$$inline_858_element$$inline_857_transform_transform$$inline_859_transformX$$inline_861$$ = (0,window.isNaN)((0,window.parseInt)($matrixArray$$inline_860_transformZ$$inline_863$$[4], 10)) ? 0 : (0,window.parseInt)($matrixArray$$inline_860_transformZ$$inline_863$$[4], 
    10), $transformY$$inline_862$$ = (0,window.isNaN)((0,window.parseInt)($matrixArray$$inline_860_transformZ$$inline_863$$[5], 10)) ? 0 : (0,window.parseInt)($matrixArray$$inline_860_transformZ$$inline_863$$[5], 10), $matrixArray$$inline_860_transformZ$$inline_863$$ = (0,window.isNaN)((0,window.parseInt)($matrixArray$$inline_860_transformZ$$inline_863$$[6], 10)) ? 0 : (0,window.parseInt)($matrixArray$$inline_860_transformZ$$inline_863$$[6], 10), $cs$$inline_858_element$$inline_857_transform_transform$$inline_859_transformX$$inline_861$$ = 
    [$cs$$inline_858_element$$inline_857_transform_transform$$inline_859_transformX$$inline_861$$, $transformY$$inline_862$$, $matrixArray$$inline_860_transformZ$$inline_863$$]) : $cs$$inline_858_element$$inline_857_transform_transform$$inline_859_transformX$$inline_861$$ = [0, 0, 0];
    return[(0,window.parseInt)($parentPos$$[0], 10) + (0,window.parseInt)($element$$17$$.offsetLeft, 10) + $cs$$inline_858_element$$inline_857_transform_transform$$inline_859_transformX$$inline_861$$[0], (0,window.parseInt)($parentPos$$[1], 10) + (0,window.parseInt)($element$$17$$.offsetTop, 10) + $cs$$inline_858_element$$inline_857_transform_transform$$inline_859_transformX$$inline_861$$[1]];
  }
  return[0, 0];
};
$DvtDataGrid$$.prototype.$handleDatabodyMouseWheel$ = function $$DvtDataGrid$$$$$handleDatabodyMouseWheel$$($deltaY$$inline_867_event$$24$$) {
  var $delta$$1_deltaX$$inline_866$$;
  $deltaY$$inline_867_event$$24$$.preventDefault();
  $deltaY$$inline_867_event$$24$$.wheelDeltaX ? ($delta$$1_deltaX$$inline_866$$ = $deltaY$$inline_867_event$$24$$.wheelDeltaX, $deltaY$$inline_867_event$$24$$ = $deltaY$$inline_867_event$$24$$.wheelDeltaY) : ($delta$$1_deltaX$$inline_866$$ = 0, $deltaY$$inline_867_event$$24$$ = $deltaY$$inline_867_event$$24$$.detail ? -40 * $deltaY$$inline_867_event$$24$$.detail : $deltaY$$inline_867_event$$24$$.wheelDelta);
  $delta$$1_deltaX$$inline_866$$ = {deltaX:$delta$$1_deltaX$$inline_866$$, deltaY:$deltaY$$inline_867_event$$24$$};
  $JSCompiler_StaticMethods_scrollDelta$$(this, $delta$$1_deltaX$$inline_866$$.deltaX, $delta$$1_deltaX$$inline_866$$.deltaY);
};
$DvtDataGrid$$.prototype.$handleTouchStart$ = function $$DvtDataGrid$$$$$handleTouchStart$$($event$$25$$) {
  var $dir$$8_target$$42$$, $selection$$1$$;
  if (1 == $event$$25$$.touches.length) {
    this.$m_startX$ = $event$$25$$.touches[0].pageX;
    this.$m_startY$ = $event$$25$$.touches[0].pageY;
    this.$m_currentX$ = this.$m_startX$;
    this.$m_currentY$ = this.$m_startY$;
    this.$m_prevX$ = this.$m_startX$;
    this.$m_prevY$ = this.$m_startY$;
    this.$m_startTime$ = (new Date).getTime();
    this.$m_touchActive$ = !0;
    $dir$$8_target$$42$$ = $event$$25$$.touches[0].target;
    if ($JSCompiler_StaticMethods_isMultipleSelection$$(this)) {
      if ($dir$$8_target$$42$$.className === this.getMappedStyle("selectaffordancetop") || $dir$$8_target$$42$$.className === this.getMappedStyle("selectaffordancebottom")) {
        $dir$$8_target$$42$$ = $dir$$8_target$$42$$.parentNode;
      }
      if ($dir$$8_target$$42$$ = $dir$$8_target$$42$$ === this.$m_topSelectIconContainer$ ? "top" : $dir$$8_target$$42$$ === this.$m_bottomSelectIconContainer$ ? "bottom" : null) {
        this.$m_touchMultipleSelect$ = !0, $selection$$1$$ = this.$GetSelection$(), this.$m_touchSelectAnchor$ = "top" === $dir$$8_target$$42$$ ? $selection$$1$$[$selection$$1$$.length - 1].endIndex : $selection$$1$$[$selection$$1$$.length - 1].startIndex;
      }
    }
    !this.$m_touchMultipleSelect$ && $JSCompiler_StaticMethods__isMoveOnRowEnabled$$(this, this.find($event$$25$$.touches[0].target, "row")) && (this.$m_databodyMove$ = !0);
  } else {
    this.$handleTouchCancel$();
  }
};
$DvtDataGrid$$.prototype.$handleTouchMove$ = function $$DvtDataGrid$$$$$handleTouchMove$$($event$$26$$) {
  var $diffX$$, $diffY$$;
  this.$m_touchActive$ ? ($event$$26$$.preventDefault(), this.$m_currentX$ = $event$$26$$.touches[0].pageX, this.$m_currentY$ = $event$$26$$.touches[0].pageY, $diffX$$ = this.$m_currentX$ - this.$m_prevX$, $diffY$$ = this.$m_currentY$ - this.$m_prevY$, this.$m_resources$.isRTLMode() && ($diffX$$ *= -1), this.$m_touchMultipleSelect$ ? $JSCompiler_StaticMethods_handleDatabodySelectionDrag$$(this, $event$$26$$) : this.$m_databodyMove$ ? ($JSCompiler_StaticMethods__removeTouchSelectionAffordance$$(this), 
  $JSCompiler_StaticMethods__handleMove$$(this, $event$$26$$)) : $JSCompiler_StaticMethods__handleNonSwipeScroll$$(this, $diffX$$, $diffY$$), this.$m_prevX$ = this.$m_currentX$, this.$m_prevY$ = this.$m_currentY$) : this.$handleTouchCancel$();
};
$DvtDataGrid$$.prototype.$handleTouchEnd$ = function $$DvtDataGrid$$$$$handleTouchEnd$$($event$$27$$) {
  var $duration$$2$$;
  if (this.$m_touchActive$ && !$event$$27$$.defaultPrevented) {
    if (this.$m_touchMultipleSelect$) {
      $event$$27$$.preventDefault(), this.$m_touchMultipleSelect$ = !1;
    } else {
      $duration$$2$$ = (new Date).getTime() - this.$m_startTime$;
      if (this.$m_currentX$ == this.$m_startX$ && this.$m_currentY$ == this.$m_startY$) {
        this.$m_databodyMove$ = !1;
        $JSCompiler_StaticMethods__isSelectionEnabled$$(this) && 750 > $duration$$2$$ ? $JSCompiler_StaticMethods_handleDatabodyClickSelection$$(this, $event$$27$$) : $JSCompiler_StaticMethods_handleDatabodyClickActive$$(this, $event$$27$$);
        return;
      }
      if (this.$m_databodyMove$) {
        $event$$27$$.preventDefault();
        this.$m_databodyMove$ = !1;
        $JSCompiler_StaticMethods__handleMoveMouseUp$$(this, !0);
        return;
      }
      this.$_handleSwipe$($event$$27$$);
    }
  }
  this.$handleTouchCancel$();
};
var $JSCompiler_StaticMethods__calculateMomentum$$ = function $$JSCompiler_StaticMethods__calculateMomentum$$$($current_destination_distance$$, $duration$$3_start$$16$$, $speed_time$$, $currentScroll$$, $maxScroll$$, $rtl$$1$$) {
  var $overScroll$$;
  $current_destination_distance$$ -= $duration$$3_start$$16$$;
  $speed_time$$ = Math.abs($current_destination_distance$$) / $speed_time$$;
  $current_destination_distance$$ = $speed_time$$ * $speed_time$$ / 0.0012 * (0 > $current_destination_distance$$ ? -1 : 1);
  $duration$$3_start$$16$$ = $speed_time$$ / 6E-4;
  $rtl$$1$$ && ($current_destination_distance$$ *= -1);
  $currentScroll$$ - $current_destination_distance$$ > $maxScroll$$ ? ($overScroll$$ = Math.max(-50, $current_destination_distance$$), $current_destination_distance$$ = $currentScroll$$ - $maxScroll$$, $duration$$3_start$$16$$ = ($maxScroll$$ - $currentScroll$$) / $speed_time$$) : 0 > $currentScroll$$ - $current_destination_distance$$ && ($overScroll$$ = Math.min(50, $current_destination_distance$$), $current_destination_distance$$ = $currentScroll$$, $duration$$3_start$$16$$ = $currentScroll$$ / 
  $speed_time$$);
  return{$destination$:Math.round($current_destination_distance$$), duration:Math.max(100, $duration$$3_start$$16$$), $overScroll$:$overScroll$$};
};
$JSCompiler_prototypeAlias$$ = $DvtDataGrid$$.prototype;
$JSCompiler_prototypeAlias$$.$handleTouchCancel$ = function $$JSCompiler_prototypeAlias$$$$handleTouchCancel$$() {
  this.$m_databodyMove$ && ($JSCompiler_StaticMethods__handleMoveMouseUp$$(this, !1), this.$m_databodyMove$ = !1);
  this.$m_touchSelectAnchor$ = null;
  this.$m_touchActive$ = this.$m_touchMultipleSelect$ = !1;
  this.$m_startTime$ = this.$m_currentY$ = this.$m_currentX$ = this.$m_prevY$ = this.$m_prevX$ = this.$m_startY$ = this.$m_startX$ = 0;
};
$JSCompiler_prototypeAlias$$.$handleHeaderTouchStart$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchStart$$($event$$29$$) {
  var $header$$7$$;
  this.$m_touchStart$ = (new Date).getTime();
  1 == $event$$29$$.touches.length ? (this.$m_startX$ = $event$$29$$.touches[0].pageX, this.$m_startY$ = $event$$29$$.touches[0].pageY, this.$m_currentX$ = this.$m_startX$, this.$m_currentY$ = this.$m_startY$, this.$m_prevX$ = this.$m_startX$, this.$m_prevY$ = this.$m_startY$, this.$m_touchActive$ = !0, $header$$7$$ = $JSCompiler_StaticMethods_findHeader$$(this, $event$$29$$.target), (0,window.setTimeout)(function() {
    this.$m_touchActive$ && !this.$m_isResizing$ && this.$m_currentX$ == this.$m_startX$ && this.$m_currentY$ == this.$m_startY$ && ($JSCompiler_StaticMethods__removeTouchSelectionAffordance$$(this), $JSCompiler_StaticMethods__setActive$$(this, $header$$7$$, $event$$29$$, !0));
  }.bind(this), 300), $JSCompiler_StaticMethods_isResizeEnabled$$(this) && ($JSCompiler_StaticMethods_handleResize$$(this, $event$$29$$), $JSCompiler_StaticMethods_handleResizeMouseDown$$(this, $event$$29$$)), !this.$m_isResizing$ && $JSCompiler_StaticMethods__isMoveOnRowEnabled$$(this, this.find($event$$29$$.target, "row")) && (this.$m_databodyMove$ = !0)) : this.$handleHeaderTouchCancel$();
};
$JSCompiler_prototypeAlias$$.$handleHeaderTouchMove$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchMove$$($event$$30_header$$8$$) {
  var $diffX$$1$$, $diffY$$1$$;
  this.$m_touchActive$ ? ($event$$30_header$$8$$.preventDefault(), this.$m_currentX$ = $event$$30_header$$8$$.touches[0].pageX, this.$m_currentY$ = $event$$30_header$$8$$.touches[0].pageY, $diffX$$1$$ = this.$m_currentX$ - this.$m_prevX$, $diffY$$1$$ = this.$m_currentY$ - this.$m_prevY$, this.$m_isResizing$ && $JSCompiler_StaticMethods_isResizeEnabled$$(this) ? $JSCompiler_StaticMethods_handleResize$$(this, $event$$30_header$$8$$) : this.$m_databodyMove$ ? ($JSCompiler_StaticMethods__removeTouchSelectionAffordance$$(this), 
  $JSCompiler_StaticMethods__handleMove$$(this, $event$$30_header$$8$$)) : ($event$$30_header$$8$$ = $JSCompiler_StaticMethods_findHeader$$(this, $event$$30_header$$8$$.target), "column" == $JSCompiler_StaticMethods_getHeaderCellAxis$$(this, $event$$30_header$$8$$) ? $JSCompiler_StaticMethods__handleNonSwipeScroll$$(this, $diffX$$1$$, 0) : $JSCompiler_StaticMethods__handleNonSwipeScroll$$(this, 0, $diffY$$1$$)), this.$m_prevX$ = this.$m_currentX$, this.$m_prevY$ = this.$m_currentY$) : this.$handleTouchCancel$();
};
$JSCompiler_prototypeAlias$$.$handleHeaderTouchEnd$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchEnd$$($event$$31$$) {
  var $header$$9_touchLength$$;
  $header$$9_touchLength$$ = (new Date).getTime() - this.$m_touchStart$;
  this.$m_touchActive$ && !$event$$31$$.defaultPrevented && (this.$m_isResizing$ && $JSCompiler_StaticMethods_isResizeEnabled$$(this) ? ($JSCompiler_StaticMethods_handleResizeMouseUp$$(this, $event$$31$$), this.$m_currentX$ != this.$m_startX$ && this.$m_currentY$ != this.$m_startY$ && $event$$31$$.preventDefault()) : this.$m_currentX$ == this.$m_startX$ && this.$m_currentY$ == this.$m_startY$ && 300 > $header$$9_touchLength$$ ? $JSCompiler_StaticMethods__isDOMElementSortable$$(this, $event$$31$$.target) && 
  ($event$$31$$.preventDefault(), $JSCompiler_StaticMethods__handleHeaderSort$$(this, $event$$31$$), $JSCompiler_StaticMethods__removeTouchSelectionAffordance$$(this)) : this.$m_databodyMove$ ? ($event$$31$$.preventDefault(), this.$m_databodyMove$ = !1, $JSCompiler_StaticMethods__handleMoveMouseUp$$(this, !0)) : ($header$$9_touchLength$$ = $JSCompiler_StaticMethods_findHeader$$(this, $event$$31$$.target), this.$_handleSwipe$($event$$31$$, $JSCompiler_StaticMethods_getHeaderCellAxis$$(this, $header$$9_touchLength$$))));
  this.$handleHeaderTouchCancel$();
};
$JSCompiler_prototypeAlias$$.$handleHeaderTouchCancel$ = function $$JSCompiler_prototypeAlias$$$$handleHeaderTouchCancel$$() {
  this.$m_databodyMove$ && ($JSCompiler_StaticMethods__handleMoveMouseUp$$(this, !1), this.$m_databodyMove$ = !1);
  this.$m_touchActive$ = !1;
  this.$m_currentY$ = this.$m_currentX$ = this.$m_prevY$ = this.$m_prevX$ = this.$m_startY$ = this.$m_startX$ = 0;
};
var $JSCompiler_StaticMethods__handleNonSwipeScroll$$ = function $$JSCompiler_StaticMethods__handleNonSwipeScroll$$$($JSCompiler_StaticMethods__handleNonSwipeScroll$self$$, $diffX$$2$$, $diffY$$2$$) {
  var $time$$1$$ = (new Date).getTime();
  $JSCompiler_StaticMethods__disableTouchScrollAnimation$$($JSCompiler_StaticMethods__handleNonSwipeScroll$self$$);
  $JSCompiler_StaticMethods_scrollDelta$$($JSCompiler_StaticMethods__handleNonSwipeScroll$self$$, $diffX$$2$$, $diffY$$2$$);
  300 < $time$$1$$ - $JSCompiler_StaticMethods__handleNonSwipeScroll$self$$.$m_startTime$ && ($JSCompiler_StaticMethods__handleNonSwipeScroll$self$$.$m_startX$ = $JSCompiler_StaticMethods__handleNonSwipeScroll$self$$.$m_currentX$, $JSCompiler_StaticMethods__handleNonSwipeScroll$self$$.$m_startY$ = $JSCompiler_StaticMethods__handleNonSwipeScroll$self$$.$m_currentY$, $JSCompiler_StaticMethods__handleNonSwipeScroll$self$$.$m_startTime$ = (new Date).getTime());
};
$DvtDataGrid$$.prototype.$_handleSwipe$ = function $$DvtDataGrid$$$$$_handleSwipe$$($event$$33$$, $axis$$17$$) {
  var $duration$$4_momentumY$$, $momentumX_rtl$$2$$, $diffX$$3$$, $diffY$$3$$, $transitionDuration$$;
  $duration$$4_momentumY$$ = (new Date).getTime() - this.$m_startTime$;
  $momentumX_rtl$$2$$ = this.$m_resources$.isRTLMode();
  $diffX$$3$$ = this.$m_currentX$ - this.$m_startX$;
  $diffY$$3$$ = this.$m_currentY$ - this.$m_startY$;
  $momentumX_rtl$$2$$ && ($diffX$$3$$ *= -1);
  10 > Math.abs($diffX$$3$$) && 10 > Math.abs($diffY$$3$$) && 200 > $duration$$4_momentumY$$ ? ($event$$33$$.preventDefault(), $JSCompiler_StaticMethods__isSelectionEnabled$$(this) && $JSCompiler_StaticMethods__scrollTouchSelectionAffordance$$(this)) : 400 > $duration$$4_momentumY$$ && ($event$$33$$.preventDefault(), "row" != $axis$$17$$ ? ($momentumX_rtl$$2$$ = $JSCompiler_StaticMethods__calculateMomentum$$(this.$m_currentX$, this.$m_startX$, $duration$$4_momentumY$$, this.$m_currentScrollLeft$, 
  this.$m_scrollWidth$, $momentumX_rtl$$2$$), !(0,window.isNaN)($momentumX_rtl$$2$$.$overScroll$) && (0 < $momentumX_rtl$$2$$.$overScroll$ || this.$m_stopColumnFetch$) && (this.$m_extraScrollOverX$ = -1 * $momentumX_rtl$$2$$.$overScroll$)) : ($momentumX_rtl$$2$$ = {duration:0, $destination$:0}, $diffX$$3$$ = 0), "column" != $axis$$17$$ ? ($duration$$4_momentumY$$ = $JSCompiler_StaticMethods__calculateMomentum$$(this.$m_currentY$, this.$m_startY$, $duration$$4_momentumY$$, this.$m_currentScrollTop$, 
  this.$m_scrollHeight$), !(0,window.isNaN)($duration$$4_momentumY$$.$overScroll$) && (0 < $duration$$4_momentumY$$.$overScroll$ || this.$m_stopRowFetch$) && (this.$m_extraScrollOverY$ = -1 * $duration$$4_momentumY$$.$overScroll$)) : ($duration$$4_momentumY$$ = {duration:0, $destination$:0}, $diffY$$3$$ = 0), $transitionDuration$$ = Math.max($momentumX_rtl$$2$$.duration, $duration$$4_momentumY$$.duration), this.$m_databody$.firstChild.style.webkitTransitionDuration = $transitionDuration$$ + "ms", 
  this.$m_rowHeader$.firstChild.style.webkitTransitionDuration = $transitionDuration$$ + "ms", this.$m_colHeader$.firstChild.style.webkitTransitionDuration = $transitionDuration$$ + "ms", $JSCompiler_StaticMethods_scrollDelta$$(this, $diffX$$3$$ + $momentumX_rtl$$2$$.$destination$, $diffY$$3$$ + $duration$$4_momentumY$$.$destination$));
};
$DvtDataGrid$$.prototype.fireEvent = function $$DvtDataGrid$$$$fireEvent$($functionName$$, $details$$3$$) {
  var $callback$$28$$;
  if (null != $functionName$$ && null != $details$$3$$) {
    return $callback$$28$$ = this.$callbacks$[$functionName$$], null != $callback$$28$$ ? $callback$$28$$($details$$3$$) : !0;
  }
};
$DvtDataGrid$$.prototype.addListener = function $$DvtDataGrid$$$$addListener$($functionName$$1$$, $handler$$3$$) {
  this.$callbacks$[$functionName$$1$$] = $handler$$3$$;
};
$DvtDataGrid$$.prototype.addListener = $DvtDataGrid$$.prototype.addListener;
var $JSCompiler_StaticMethods_setElementHeight$$ = function $$JSCompiler_StaticMethods_setElementHeight$$$($elem$$9$$, $height$$24$$) {
  $elem$$9$$.style.height = $height$$24$$ + "px";
}, $JSCompiler_StaticMethods_getElementHeight$$ = function $$JSCompiler_StaticMethods_getElementHeight$$$($elem$$10$$) {
  var $height$$25$$;
  if (-1 < $elem$$10$$.style.height.indexOf("px")) {
    return(0,window.parseInt)($elem$$10$$.style.height, 10);
  }
  window.document.body.contains($elem$$10$$) ? $height$$25$$ = Math.floor($elem$$10$$.getBoundingClientRect().height) : ($elem$$10$$.style.visibility = "hidden", window.document.body.appendChild($elem$$10$$), $height$$25$$ = Math.floor($elem$$10$$.getBoundingClientRect().height), window.document.body.removeChild($elem$$10$$), $elem$$10$$.style.visibility = "");
  return $height$$25$$;
}, $JSCompiler_StaticMethods_setElementWidth$$ = function $$JSCompiler_StaticMethods_setElementWidth$$$($elem$$11$$, $width$$21$$) {
  $elem$$11$$.style.width = $width$$21$$ + "px";
}, $JSCompiler_StaticMethods_getElementWidth$$ = function $$JSCompiler_StaticMethods_getElementWidth$$$($elem$$12$$) {
  var $width$$22$$;
  if (-1 < $elem$$12$$.style.width.indexOf("px")) {
    return(0,window.parseInt)($elem$$12$$.style.width, 10);
  }
  window.document.body.contains($elem$$12$$) ? $width$$22$$ = Math.floor($elem$$12$$.getBoundingClientRect().width) : ($elem$$12$$.style.visibility = "hidden", window.document.body.appendChild($elem$$12$$), $width$$22$$ = Math.floor($elem$$12$$.getBoundingClientRect().width), window.document.body.removeChild($elem$$12$$), $elem$$12$$.style.visibility = "");
  return $width$$22$$;
}, $JSCompiler_StaticMethods_setElementDir$$ = function $$JSCompiler_StaticMethods_setElementDir$$$($elem$$13$$, $pix$$, $dir$$9$$) {
  $elem$$13$$.style[$dir$$9$$] = $pix$$ + "px";
}, $JSCompiler_StaticMethods_getElementDir$$ = function $$JSCompiler_StaticMethods_getElementDir$$$($elem$$14$$, $dir$$10$$) {
  return(0,window.parseInt)($elem$$14$$.style[$dir$$10$$], 10);
}, $JSCompiler_StaticMethods__isInViewport$$ = function $$JSCompiler_StaticMethods__isInViewport$$$($JSCompiler_StaticMethods__isInViewport$self$$, $indexes$$9$$) {
  var $rowIndex$$1$$, $columnIndex$$1$$;
  $rowIndex$$1$$ = $indexes$$9$$.row;
  $columnIndex$$1$$ = $indexes$$9$$.column;
  return-1 === $rowIndex$$1$$ && -1 === $columnIndex$$1$$ ? -1 : -1 === $rowIndex$$1$$ ? $columnIndex$$1$$ < $JSCompiler_StaticMethods__isInViewport$self$$.$m_startCol$ ? 1 : $columnIndex$$1$$ > $JSCompiler_StaticMethods__isInViewport$self$$.$m_endCol$ ? 2 : 3 : -1 === $columnIndex$$1$$ ? $rowIndex$$1$$ < $JSCompiler_StaticMethods__isInViewport$self$$.$m_startRow$ ? 1 : $rowIndex$$1$$ > $JSCompiler_StaticMethods__isInViewport$self$$.$m_endRow$ ? 2 : 3 : $columnIndex$$1$$ >= $JSCompiler_StaticMethods__isInViewport$self$$.$m_startCol$ && 
  $columnIndex$$1$$ <= $JSCompiler_StaticMethods__isInViewport$self$$.$m_endCol$ && $rowIndex$$1$$ >= $JSCompiler_StaticMethods__isInViewport$self$$.$m_startRow$ && $rowIndex$$1$$ <= $JSCompiler_StaticMethods__isInViewport$self$$.$m_endRow$ ? 3 : -1;
};
$DvtDataGrid$$.prototype.$handleModelEvent$ = function $$DvtDataGrid$$$$$handleModelEvent$$($event$$34_insideRowsHeight$$inline_903$$) {
  var $databodyContentHeight$$inline_905_i$$inline_896_operation$$1_totalHeight$$inline_911$$, $keys$$5_keys$$inline_893_scrollerContent$$inline_912$$, $cellSet$$7_flag$$inline_876_row$$inline_877_rowHeader$$inline_878_silent_visibility$$inline_915$$, $headerSet$$7_height$$inline_899$$, $databodyContent$$inline_901_indexes$$10_indexes$$inline_892$$, $beforeRowsHeight$$inline_902_source$$2$$, $afterRowsHeight$$inline_904_indices$$;
  if (this.$m_initialized$) {
    if ($databodyContentHeight$$inline_905_i$$inline_896_operation$$1_totalHeight$$inline_911$$ = $event$$34_insideRowsHeight$$inline_903$$.operation, $keys$$5_keys$$inline_893_scrollerContent$$inline_912$$ = $event$$34_insideRowsHeight$$inline_903$$.keys, $event$$34_insideRowsHeight$$inline_903$$.header && ($headerSet$$7_height$$inline_899$$ = $event$$34_insideRowsHeight$$inline_903$$.header), $afterRowsHeight$$inline_904_indices$$ = $event$$34_insideRowsHeight$$inline_903$$.indices, $beforeRowsHeight$$inline_902_source$$2$$ = 
    $event$$34_insideRowsHeight$$inline_903$$.source, $databodyContent$$inline_901_indexes$$10_indexes$$inline_892$$ = $event$$34_insideRowsHeight$$inline_903$$.indexes, $cellSet$$7_flag$$inline_876_row$$inline_877_rowHeader$$inline_878_silent_visibility$$inline_915$$ = $event$$34_insideRowsHeight$$inline_903$$.silent, "insert" === $databodyContentHeight$$inline_905_i$$inline_896_operation$$1_totalHeight$$inline_911$$) {
      $cellSet$$7_flag$$inline_876_row$$inline_877_rowHeader$$inline_878_silent_visibility$$inline_915$$ = $event$$34_insideRowsHeight$$inline_903$$.result, $JSCompiler_StaticMethods__adjustActive$$(this, $databodyContentHeight$$inline_905_i$$inline_896_operation$$1_totalHeight$$inline_911$$, $databodyContent$$inline_901_indexes$$10_indexes$$inline_892$$), $JSCompiler_StaticMethods__adjustSelectionOnModelChange$$(this, $databodyContentHeight$$inline_905_i$$inline_896_operation$$1_totalHeight$$inline_911$$, 
      $keys$$5_keys$$inline_893_scrollerContent$$inline_912$$, $databodyContent$$inline_901_indexes$$10_indexes$$inline_892$$), null != $cellSet$$7_flag$$inline_876_row$$inline_877_rowHeader$$inline_878_silent_visibility$$inline_915$$ ? $beforeRowsHeight$$inline_902_source$$2$$ && $beforeRowsHeight$$inline_902_source$$2$$ instanceof window.oj.FlattenedTreeDataGridDataSource ? $JSCompiler_StaticMethods__handleModelInsertRangeEvent$$(this, $cellSet$$7_flag$$inline_876_row$$inline_877_rowHeader$$inline_878_silent_visibility$$inline_915$$, 
      $headerSet$$7_height$$inline_899$$) : $JSCompiler_StaticMethods__handleModelInsertRangeEvent$$(this, $cellSet$$7_flag$$inline_876_row$$inline_877_rowHeader$$inline_878_silent_visibility$$inline_915$$) : ($cellSet$$7_flag$$inline_876_row$$inline_877_rowHeader$$inline_878_silent_visibility$$inline_915$$ = $JSCompiler_StaticMethods__isInViewport$$(this, $databodyContent$$inline_901_indexes$$10_indexes$$inline_892$$), 3 === $cellSet$$7_flag$$inline_876_row$$inline_877_rowHeader$$inline_878_silent_visibility$$inline_915$$ || 
      2 === $cellSet$$7_flag$$inline_876_row$$inline_877_rowHeader$$inline_878_silent_visibility$$inline_915$$ && $databodyContent$$inline_901_indexes$$10_indexes$$inline_892$$.row == this.$m_endRow$ + 1 ? null != $keys$$5_keys$$inline_893_scrollerContent$$inline_912$$.row && ($JSCompiler_StaticMethods__databodyEmpty$$(this) ? (this.empty(), this.refresh(this.$m_root$)) : (this.fetchHeaders("row", $databodyContent$$inline_901_indexes$$10_indexes$$inline_892$$.row, this.$m_rowHeader$, 1, {success:this.$_handleHeaderInsertsFetchSuccess$}), 
      this.fetchCells(this.$m_databody$, this.$m_scroller$, $databodyContent$$inline_901_indexes$$10_indexes$$inline_892$$.row, this.$m_startCol$, 1, this.$m_endCol$ - this.$m_startCol$ + 1, {success:this.$_handleCellInsertsFetchSuccess$}))) : (1 === $cellSet$$7_flag$$inline_876_row$$inline_877_rowHeader$$inline_878_silent_visibility$$inline_915$$ && (this.$m_startRow$++, this.$m_startRowHeader$++, this.$m_endRow$++, this.$m_endRowHeader$++, this.$m_startRowPixel$ += this.$m_avgRowHeight$, this.$m_startRowHeaderPixel$ += 
      this.$m_avgRowHeight$, this.$m_endRowPixel$ += this.$m_avgRowHeight$, this.$m_endRowHeaderPixel$ += this.$m_avgRowHeight$, $cellSet$$7_flag$$inline_876_row$$inline_877_rowHeader$$inline_878_silent_visibility$$inline_915$$ = this.$m_databody$.firstChild.firstChild, null != $cellSet$$7_flag$$inline_876_row$$inline_877_rowHeader$$inline_878_silent_visibility$$inline_915$$ && $JSCompiler_StaticMethods_pushRowsDown$$($cellSet$$7_flag$$inline_876_row$$inline_877_rowHeader$$inline_878_silent_visibility$$inline_915$$, 
      this.$m_avgRowHeight$), $cellSet$$7_flag$$inline_876_row$$inline_877_rowHeader$$inline_878_silent_visibility$$inline_915$$ = this.$m_rowHeader$.firstChild.firstChild, null != $cellSet$$7_flag$$inline_876_row$$inline_877_rowHeader$$inline_878_silent_visibility$$inline_915$$ && $JSCompiler_StaticMethods_pushRowsDown$$($cellSet$$7_flag$$inline_876_row$$inline_877_rowHeader$$inline_878_silent_visibility$$inline_915$$, this.$m_avgRowHeight$)), $JSCompiler_StaticMethods_scrollToIndex$$(this, $databodyContent$$inline_901_indexes$$10_indexes$$inline_892$$)))
      ;
    } else {
      if ("update" === $databodyContentHeight$$inline_905_i$$inline_896_operation$$1_totalHeight$$inline_911$$) {
        3 === $JSCompiler_StaticMethods__isInViewport$$(this, $databodyContent$$inline_901_indexes$$10_indexes$$inline_892$$) && (-1 != this.$m_endRowHeader$ && this.fetchHeaders("row", $databodyContent$$inline_901_indexes$$10_indexes$$inline_892$$.row, this.$m_rowHeader$, 1, {success:this.$_handleHeaderUpdatesFetchSuccess$, error:this.$handleHeadersFetchError$}), this.fetchCells(this.$m_databody$, this.$m_scroller$, $databodyContent$$inline_901_indexes$$10_indexes$$inline_892$$.row, this.$m_startCol$, 
        1, this.$m_endCol$ - this.$m_startCol$ + 1, {success:this.$_handleCellUpdatesFetchSuccess$, error:this.$handleCellsFetchError$}));
      } else {
        if ("delete" === $databodyContentHeight$$inline_905_i$$inline_896_operation$$1_totalHeight$$inline_911$$) {
          if ($JSCompiler_StaticMethods__adjustActive$$(this, $databodyContentHeight$$inline_905_i$$inline_896_operation$$1_totalHeight$$inline_911$$, $databodyContent$$inline_901_indexes$$10_indexes$$inline_892$$), $JSCompiler_StaticMethods__adjustSelectionOnModelChange$$(this, $databodyContentHeight$$inline_905_i$$inline_896_operation$$1_totalHeight$$inline_911$$, $keys$$5_keys$$inline_893_scrollerContent$$inline_912$$, $databodyContent$$inline_901_indexes$$10_indexes$$inline_892$$), $beforeRowsHeight$$inline_902_source$$2$$ && 
          $beforeRowsHeight$$inline_902_source$$2$$ instanceof window.oj.FlattenedTreeDataGridDataSource && $JSCompiler_StaticMethods_supportsTransitions$$()) {
            $JSCompiler_StaticMethods__collapseRowsWithAnimation$$(this, $keys$$5_keys$$inline_893_scrollerContent$$inline_912$$);
          } else {
            if ($afterRowsHeight$$inline_904_indices$$ && $JSCompiler_StaticMethods_supportsTransitions$$()) {
              $afterRowsHeight$$inline_904_indices$$ ? $JSCompiler_StaticMethods__removeRowsWithAnimation$$(this, $keys$$5_keys$$inline_893_scrollerContent$$inline_912$$, $afterRowsHeight$$inline_904_indices$$) : $JSCompiler_StaticMethods__collapseRowsWithAnimation$$(this, $keys$$5_keys$$inline_893_scrollerContent$$inline_912$$);
            } else {
              var $key$$inline_895_rowHeader$$inline_906_rowKey$$inline_897$$, $row$$inline_898$$, $flag$$inline_907_index$$inline_908_referenceRow$$inline_900$$, $beforeRowsDeleted$$inline_909$$, $insideRowsDeleted$$inline_910$$;
              Array.isArray($keys$$5_keys$$inline_893_scrollerContent$$inline_912$$) || ($keys$$5_keys$$inline_893_scrollerContent$$inline_912$$ = Array($keys$$5_keys$$inline_893_scrollerContent$$inline_912$$), $databodyContent$$inline_901_indexes$$10_indexes$$inline_892$$ = Array($databodyContent$$inline_901_indexes$$10_indexes$$inline_892$$));
              for ($databodyContentHeight$$inline_905_i$$inline_896_operation$$1_totalHeight$$inline_911$$ = $insideRowsDeleted$$inline_910$$ = $beforeRowsDeleted$$inline_909$$ = $afterRowsHeight$$inline_904_indices$$ = $event$$34_insideRowsHeight$$inline_903$$ = $beforeRowsHeight$$inline_902_source$$2$$ = 0;$databodyContentHeight$$inline_905_i$$inline_896_operation$$1_totalHeight$$inline_911$$ < $keys$$5_keys$$inline_893_scrollerContent$$inline_912$$.length;$databodyContentHeight$$inline_905_i$$inline_896_operation$$1_totalHeight$$inline_911$$++) {
                $key$$inline_895_rowHeader$$inline_906_rowKey$$inline_897$$ = $keys$$5_keys$$inline_893_scrollerContent$$inline_912$$[$databodyContentHeight$$inline_905_i$$inline_896_operation$$1_totalHeight$$inline_911$$], $flag$$inline_907_index$$inline_908_referenceRow$$inline_900$$ = $databodyContent$$inline_901_indexes$$10_indexes$$inline_892$$[$databodyContentHeight$$inline_905_i$$inline_896_operation$$1_totalHeight$$inline_911$$], null != $key$$inline_895_rowHeader$$inline_906_rowKey$$inline_897$$.row && 
                ($headerSet$$7_height$$inline_899$$ = 0, $key$$inline_895_rowHeader$$inline_906_rowKey$$inline_897$$ = $key$$inline_895_rowHeader$$inline_906_rowKey$$inline_897$$.row, $flag$$inline_907_index$$inline_908_referenceRow$$inline_900$$ = $JSCompiler_StaticMethods__isInViewport$$(this, $flag$$inline_907_index$$inline_908_referenceRow$$inline_900$$), 1 === $flag$$inline_907_index$$inline_908_referenceRow$$inline_900$$ ? ($beforeRowsDeleted$$inline_909$$++, $beforeRowsHeight$$inline_902_source$$2$$ += 
                this.$m_avgRowHeight$, this.$m_startRowPixel$ -= this.$m_avgRowHeight$, this.$m_endRowPixel$ -= this.$m_avgRowHeight$, -1 != this.$m_endRowHeader$ && (this.$m_startRowHeaderPixel$ -= this.$m_avgRowHeight$, this.$m_endRowHeaderPixel$ -= this.$m_avgRowHeight$), $row$$inline_898$$ = this.$m_databody$.firstChild.firstChild, null != $row$$inline_898$$ && $JSCompiler_StaticMethods_pushRowsDown$$($row$$inline_898$$, -this.$m_avgRowHeight$), $key$$inline_895_rowHeader$$inline_906_rowKey$$inline_897$$ = 
                this.$m_rowHeader$.firstChild.firstChild, null != $key$$inline_895_rowHeader$$inline_906_rowKey$$inline_897$$ && $JSCompiler_StaticMethods_pushRowsDown$$($key$$inline_895_rowHeader$$inline_906_rowKey$$inline_897$$, -this.$m_avgRowHeight$)) : 3 === $flag$$inline_907_index$$inline_908_referenceRow$$inline_900$$ ? ($insideRowsDeleted$$inline_910$$++, $row$$inline_898$$ = $JSCompiler_StaticMethods__findRowByKey$$(this, $key$$inline_895_rowHeader$$inline_906_rowKey$$inline_897$$), null != 
                $row$$inline_898$$ && ($headerSet$$7_height$$inline_899$$ = $JSCompiler_StaticMethods_calculateRowHeight$$(this, $row$$inline_898$$), $flag$$inline_907_index$$inline_908_referenceRow$$inline_900$$ = $row$$inline_898$$.nextSibling, this.$_remove$($row$$inline_898$$), $JSCompiler_StaticMethods_pushRowsDown$$($flag$$inline_907_index$$inline_908_referenceRow$$inline_900$$, -$headerSet$$7_height$$inline_899$$), this.$m_endRowPixel$ -= $headerSet$$7_height$$inline_899$$), $key$$inline_895_rowHeader$$inline_906_rowKey$$inline_897$$ = 
                $JSCompiler_StaticMethods__findRowHeaderByKey$$(this, $key$$inline_895_rowHeader$$inline_906_rowKey$$inline_897$$), null != $key$$inline_895_rowHeader$$inline_906_rowKey$$inline_897$$ && ($headerSet$$7_height$$inline_899$$ = $JSCompiler_StaticMethods_calculateRowHeaderHeight$$(this, $key$$inline_895_rowHeader$$inline_906_rowKey$$inline_897$$), $flag$$inline_907_index$$inline_908_referenceRow$$inline_900$$ = $key$$inline_895_rowHeader$$inline_906_rowKey$$inline_897$$.nextSibling, this.$_remove$($key$$inline_895_rowHeader$$inline_906_rowKey$$inline_897$$), 
                $JSCompiler_StaticMethods_pushRowsDown$$($flag$$inline_907_index$$inline_908_referenceRow$$inline_900$$, -$headerSet$$7_height$$inline_899$$), this.$m_endRowHeaderPixel$ -= $headerSet$$7_height$$inline_899$$), $event$$34_insideRowsHeight$$inline_903$$ += $headerSet$$7_height$$inline_899$$) : "scroll" === $JSCompiler_StaticMethods_getScrollPolicy$$(this.$m_options$) && ($afterRowsHeight$$inline_904_indices$$ += this.$m_avgRowHeight$));
              }
              this.$m_startRow$ -= $beforeRowsDeleted$$inline_909$$;
              this.$m_endRow$ = this.$m_endRow$ - $beforeRowsDeleted$$inline_909$$ - $insideRowsDeleted$$inline_910$$;
              -1 != this.$m_endRowHeader$ && (this.$m_startRowHeader$ -= $beforeRowsDeleted$$inline_909$$, this.$m_endRowHeader$ = this.$m_endRowHeader$ - $beforeRowsDeleted$$inline_909$$ - $insideRowsDeleted$$inline_910$$);
              $databodyContentHeight$$inline_905_i$$inline_896_operation$$1_totalHeight$$inline_911$$ = $beforeRowsHeight$$inline_902_source$$2$$ + $event$$34_insideRowsHeight$$inline_903$$ + $afterRowsHeight$$inline_904_indices$$;
              $databodyContent$$inline_901_indexes$$10_indexes$$inline_892$$ = this.$m_databody$.firstChild;
              $keys$$5_keys$$inline_893_scrollerContent$$inline_912$$ = this.$m_scroller$.firstChild;
              $databodyContentHeight$$inline_905_i$$inline_896_operation$$1_totalHeight$$inline_911$$ = $JSCompiler_StaticMethods_getElementHeight$$($databodyContent$$inline_901_indexes$$10_indexes$$inline_892$$) - $databodyContentHeight$$inline_905_i$$inline_896_operation$$1_totalHeight$$inline_911$$;
              $JSCompiler_StaticMethods_setElementHeight$$($databodyContent$$inline_901_indexes$$10_indexes$$inline_892$$, $databodyContentHeight$$inline_905_i$$inline_896_operation$$1_totalHeight$$inline_911$$);
              $JSCompiler_StaticMethods_setElementHeight$$($keys$$5_keys$$inline_893_scrollerContent$$inline_912$$, $databodyContentHeight$$inline_905_i$$inline_896_operation$$1_totalHeight$$inline_911$$);
              $JSCompiler_StaticMethods_resizeGrid$$(this);
              $cellSet$$7_flag$$inline_876_row$$inline_877_rowHeader$$inline_878_silent_visibility$$inline_915$$ || !0 == this.$m_moveActive$ || (this.$m_resizeRequired$ = !0, this.$m_stopRowFetch$ = !1, -1 != this.$m_endRowHeader$ && (this.$m_stopRowHeaderFetch$ = !1), $JSCompiler_StaticMethods_fillViewport$$(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$));
              $JSCompiler_StaticMethods_updateRowBanding$$(this);
            }
          }
        } else {
          "refresh" === $databodyContentHeight$$inline_905_i$$inline_896_operation$$1_totalHeight$$inline_911$$ || "reset" === $databodyContentHeight$$inline_905_i$$inline_896_operation$$1_totalHeight$$inline_911$$ ? ($cellSet$$7_flag$$inline_876_row$$inline_877_rowHeader$$inline_878_silent_visibility$$inline_915$$ = this.$getVisibility$(), "visible" === $cellSet$$7_flag$$inline_876_row$$inline_877_rowHeader$$inline_878_silent_visibility$$inline_915$$ ? (this.empty(), null != this.$m_root$.offsetParent ? 
          this.refresh(this.$m_root$) : this.$setVisibility$("refresh")) : "hidden" === $cellSet$$7_flag$$inline_876_row$$inline_877_rowHeader$$inline_878_silent_visibility$$inline_915$$ && (this.empty(), this.$setVisibility$("refresh"))) : "sync" === $databodyContentHeight$$inline_905_i$$inline_896_operation$$1_totalHeight$$inline_911$$ && $JSCompiler_StaticMethods__handleModelSyncEvent$$(this, $event$$34_insideRowsHeight$$inline_903$$);
        }
      }
    }
  } else {
    void 0 == this.$m_modelEvents$ && (this.$m_modelEvents$ = []), this.$m_modelEvents$.push($event$$34_insideRowsHeight$$inline_903$$);
  }
};
var $JSCompiler_StaticMethods__adjustActive$$ = function $$JSCompiler_StaticMethods__adjustActive$$$($JSCompiler_StaticMethods__adjustActive$self$$, $operation$$2$$, $indexes$$11$$) {
  var $activeRowIndex$$, $i$$22$$, $rowIndex$$2$$, $activeHeader$$, $adjustment$$4$$ = 0;
  if (null != $JSCompiler_StaticMethods__adjustActive$self$$.$m_active$) {
    if ("cell" == $JSCompiler_StaticMethods__adjustActive$self$$.$m_active$.type) {
      $activeHeader$$ = !1, $activeRowIndex$$ = $JSCompiler_StaticMethods__adjustActive$self$$.$m_active$.indexes.row;
    } else {
      if ("row" === $JSCompiler_StaticMethods__adjustActive$self$$.$m_active$.axis) {
        $activeHeader$$ = !0, $activeRowIndex$$ = $JSCompiler_StaticMethods__adjustActive$self$$.$m_active$.index;
      } else {
        return;
      }
    }
    Array.isArray($indexes$$11$$) || ($indexes$$11$$ = Array($indexes$$11$$));
    if (!0 === $JSCompiler_StaticMethods__adjustActive$self$$.$m_moveActive$) {
      if ("insert" === $operation$$2$$) {
        $activeHeader$$ ? $JSCompiler_StaticMethods__adjustActive$self$$.$m_active$.index = $indexes$$11$$[0].row : $JSCompiler_StaticMethods__adjustActive$self$$.$m_active$.indexes.row = $indexes$$11$$[0].row;
        return;
      }
      if ("delete" === $operation$$2$$ && $indexes$$11$$[0].row === $activeRowIndex$$) {
        return;
      }
    }
    $adjustment$$4$$ = "insert" === $operation$$2$$ ? 1 : -1;
    for ($i$$22$$ = 0;$i$$22$$ < $indexes$$11$$.length;$i$$22$$++) {
      $rowIndex$$2$$ = $indexes$$11$$[$i$$22$$].row, $rowIndex$$2$$ < $activeRowIndex$$ ? $activeHeader$$ ? $JSCompiler_StaticMethods__adjustActive$self$$.$m_active$.index += $adjustment$$4$$ : $JSCompiler_StaticMethods__adjustActive$self$$.$m_active$.indexes.row += $adjustment$$4$$ : $rowIndex$$2$$ === $activeRowIndex$$ && "delete" === $operation$$2$$ && $JSCompiler_StaticMethods__setActive$$($JSCompiler_StaticMethods__adjustActive$self$$, null);
    }
  }
}, $JSCompiler_StaticMethods__adjustSelectionOnModelChange$$ = function $$JSCompiler_StaticMethods__adjustSelectionOnModelChange$$$($JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$, $movedRow_operation$$3$$, $keys$$6$$, $indexes$$12$$) {
  var $selection$$2$$, $i$$23$$, $rowKey$$2$$, $rowIndex$$3$$, $j$$6$$, $range$$5$$, $newRowKey_startRowKey$$, $endRowKey$$, $startRowIndex$$, $endRowIndex$$, $adjustment$$5$$;
  Array.isArray($keys$$6$$) || ($keys$$6$$ = Array($keys$$6$$));
  Array.isArray($indexes$$12$$) || ($indexes$$12$$ = Array($indexes$$12$$));
  $selection$$2$$ = $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$GetSelection$();
  if (null == $keys$$6$$ || null == $indexes$$12$$ || $keys$$6$$.length != $indexes$$12$$.length || 0 == $selection$$2$$.length) {
    $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_moveActive$ && "insert" == $movedRow_operation$$3$$ && ($JSCompiler_StaticMethods__isSelectionEnabled$$($JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$) && $JSCompiler_StaticMethods__isDatabodyCellActive$$($JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$) && ($movedRow_operation$$3$$ = "cell" == $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_options$.$getSelectionMode$() ? $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.createRange($JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_active$.indexes, 
    $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_active$.indexes, $keys$$6$$[0], $keys$$6$$[0]) : $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.createRange($indexes$$12$$[0], $indexes$$12$$[0], $keys$$6$$[0], $keys$$6$$[0]), $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_selectionFrontier$ = $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_active$.indexes, $selection$$2$$.push($movedRow_operation$$3$$)), $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_moveActive$ = 
    !1);
  } else {
    for ($adjustment$$5$$ = "insert" === $movedRow_operation$$3$$ ? 1 : -1, $i$$23$$ = 0;$i$$23$$ < $keys$$6$$.length;$i$$23$$++) {
      for ($rowKey$$2$$ = $keys$$6$$[$i$$23$$].row, $rowIndex$$3$$ = $indexes$$12$$[$i$$23$$].row, $j$$6$$ = $selection$$2$$.length;$j$$6$$--;) {
        $range$$5$$ = $selection$$2$$[$j$$6$$], $newRowKey_startRowKey$$ = $range$$5$$.startKey.row, $endRowKey$$ = $range$$5$$.endKey.row, $startRowIndex$$ = $range$$5$$.startIndex.row, $endRowIndex$$ = $range$$5$$.endIndex.row, $newRowKey_startRowKey$$ == $rowKey$$2$$ ? $endRowKey$$ == $rowKey$$2$$ && "delete" == $movedRow_operation$$3$$ ? $selection$$2$$.splice($j$$6$$, 1) : ($newRowKey_startRowKey$$ = $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$, 
        $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_databody$.firstChild.childNodes[$range$$5$$.startIndex.row + 1 - $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_startRow$]), $range$$5$$.startKey.row = $newRowKey_startRowKey$$, $range$$5$$.endIndex.row += $adjustment$$5$$) : $endRowKey$$ == $rowKey$$2$$ ? ($newRowKey_startRowKey$$ = $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$, $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_databody$.firstChild.childNodes[$range$$5$$.endIndex.row - 
        1 - $JSCompiler_StaticMethods__adjustSelectionOnModelChange$self$$.$m_startRow$]), $range$$5$$.endKey.row = $newRowKey_startRowKey$$, $range$$5$$.endIndex.row += $adjustment$$5$$) : $rowIndex$$3$$ < $startRowIndex$$ ? ($range$$5$$.startIndex.row += $adjustment$$5$$, $range$$5$$.endIndex.row += $adjustment$$5$$) : $rowIndex$$3$$ < $endRowIndex$$ && ($range$$5$$.endIndex.row += $adjustment$$5$$);
      }
    }
  }
};
$DvtDataGrid$$.prototype.$_handleCellInsertsFetchSuccess$ = function $$DvtDataGrid$$$$$_handleCellInsertsFetchSuccess$$($cellSet$$8$$, $cellRanges$$) {
  this.$m_initialized$ = !1;
  this.$handleCellsFetchSuccess$($cellSet$$8$$, $cellRanges$$, this.$m_endRow$ >= $cellRanges$$[0].start);
  var $row$$inline_919_rowTop$$inline_922$$, $diff$$inline_923_viewportBottom$$inline_927_viewportTop$$inline_920$$, $viewportBottom$$inline_921_viewportTop$$inline_926$$;
  $row$$inline_919_rowTop$$inline_922$$ = this.$m_databody$.firstChild.childNodes[$cellRanges$$[0].start - this.$m_startRow$];
  null != $row$$inline_919_rowTop$$inline_922$$ && ($diff$$inline_923_viewportBottom$$inline_927_viewportTop$$inline_920$$ = this.$m_currentScrollTop$, $viewportBottom$$inline_921_viewportTop$$inline_926$$ = this.$m_currentScrollTop$ + $JSCompiler_StaticMethods_getElementHeight$$(this.$m_databody$), $row$$inline_919_rowTop$$inline_922$$ = $row$$inline_919_rowTop$$inline_922$$.offsetTop, $diff$$inline_923_viewportBottom$$inline_927_viewportTop$$inline_920$$ -= $row$$inline_919_rowTop$$inline_922$$, 
  0 < $diff$$inline_923_viewportBottom$$inline_927_viewportTop$$inline_920$$ ? $JSCompiler_StaticMethods_scrollDelta$$(this, 0, $diff$$inline_923_viewportBottom$$inline_927_viewportTop$$inline_920$$) : ($diff$$inline_923_viewportBottom$$inline_927_viewportTop$$inline_920$$ = $viewportBottom$$inline_921_viewportTop$$inline_926$$ - $row$$inline_919_rowTop$$inline_922$$, 0 > $diff$$inline_923_viewportBottom$$inline_927_viewportTop$$inline_920$$ && $JSCompiler_StaticMethods_scrollDelta$$(this, 0, $diff$$inline_923_viewportBottom$$inline_927_viewportTop$$inline_920$$)));
  $JSCompiler_StaticMethods__isHighWatermarkScrolling$$(this) || ($viewportBottom$$inline_921_viewportTop$$inline_926$$ = this.$m_currentScrollTop$, $diff$$inline_923_viewportBottom$$inline_927_viewportTop$$inline_920$$ = this.$m_currentScrollTop$ + $JSCompiler_StaticMethods_getElementHeight$$(this.$m_databody$), $viewportBottom$$inline_921_viewportTop$$inline_926$$ > this.$m_startRowPixel$ ? this.$m_endRow$ - this.$m_startRow$ > this.$MAX_ROW_THRESHOLD$ && $JSCompiler_StaticMethods_removeRowsFromTop$$(this, 
  this.$m_databody$) : $diff$$inline_923_viewportBottom$$inline_927_viewportTop$$inline_920$$ < this.$m_endRowPixel$ && this.$m_endRow$ - this.$m_startRow$ > this.$MAX_ROW_THRESHOLD$ && $JSCompiler_StaticMethods_removeRowsFromBottom$$(this, this.$m_databody$), $viewportBottom$$inline_921_viewportTop$$inline_926$$ > this.$m_startRowHeaderPixel$ ? this.$m_endRowHeader$ - this.$m_startRowHeader$ > this.$MAX_ROW_THRESHOLD$ && $JSCompiler_StaticMethods_removeRowHeadersFromTop$$(this, this.$m_rowHeader$) : 
  $diff$$inline_923_viewportBottom$$inline_927_viewportTop$$inline_920$$ < this.$m_endRowPixel$ && this.$m_endRowHeader$ - this.$m_startRowHeader$ > this.$MAX_ROW_THRESHOLD$ && $JSCompiler_StaticMethods_removeRowHeadersFromBottom$$(this, this.$m_rowHeader$));
  $JSCompiler_StaticMethods_updateRowBanding$$(this);
  this.$m_stopRowFetch$ = !1;
  -1 != this.$m_endRowHeader$ && (this.$m_stopRowHeaderFetch$ = !1);
  $JSCompiler_StaticMethods_fillViewport$$(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$);
};
$DvtDataGrid$$.prototype.$_handleHeaderInsertsFetchSuccess$ = function $$DvtDataGrid$$$$$_handleHeaderInsertsFetchSuccess$$($headerSet$$8$$, $headerRanges$$) {
  this.$m_resizeRequired$ = !0;
  this.$handleHeadersFetchSuccess$($headerSet$$8$$, $headerRanges$$, this.$m_endRowHeader$ >= $headerRanges$$.start);
};
var $JSCompiler_StaticMethods__handleModelInsertRangeEvent$$ = function $$JSCompiler_StaticMethods__handleModelInsertRangeEvent$$$($JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$, $cellSet$$9$$, $headerSet$$9_rowFragment$$1$$) {
  var $headerRange$$9_rowStart$$7$$, $rowCount$$7_rowRange$$5$$, $columnRange$$5_columnStart$$5$$, $columnCount$$3_headerCount$$3$$, $rowHeaderFragment$$1$$, $c$$2$$, $index$$62_returnVal$$11$$, $totalRowHeight$$4$$, $className$$10$$, $renderer$$6$$;
  $headerRange$$9_rowStart$$7$$ = $cellSet$$9$$.getStart("row");
  $rowCount$$7_rowRange$$5$$ = $cellSet$$9$$.getCount("row");
  $columnRange$$5_columnStart$$5$$ = $cellSet$$9$$.getStart("column");
  $columnCount$$3_headerCount$$3$$ = $cellSet$$9$$.getCount("column");
  if ($JSCompiler_StaticMethods_supportsTransitions$$()) {
    if (null != $headerSet$$9_rowFragment$$1$$) {
      for ($rowHeaderFragment$$1$$ = window.document.createDocumentFragment(), $columnCount$$3_headerCount$$3$$ = $headerSet$$9_rowFragment$$1$$.getCount(), $c$$2$$ = $totalRowHeight$$4$$ = 0, $className$$10$$ = $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.getMappedStyle("row") + " " + $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.getMappedStyle("headercell") + " " + $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.getMappedStyle("rowheadercell"), $renderer$$6$$ = 
      $JSCompiler_StaticMethods_getRenderer$$($JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_options$, "row");0 < $columnCount$$3_headerCount$$3$$ - $c$$2$$;) {
        $index$$62_returnVal$$11$$ = $headerRange$$9_rowStart$$7$$ + $c$$2$$, $index$$62_returnVal$$11$$ = $JSCompiler_StaticMethods_buildLevelHeaders$$($JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$, $rowHeaderFragment$$1$$, $index$$62_returnVal$$11$$, 0, 0, $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_startRowPixel$ + $totalRowHeight$$4$$, !0, !1, $renderer$$6$$, $headerSet$$9_rowFragment$$1$$, "row", $className$$10$$, $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_rowHeaderLevelCount$), 
        $c$$2$$ += $index$$62_returnVal$$11$$.count, $totalRowHeight$$4$$ += $index$$62_returnVal$$11$$.totalHeight;
      }
    }
    $headerSet$$9_rowFragment$$1$$ = window.document.createDocumentFragment();
    $index$$62_returnVal$$11$$ = $JSCompiler_StaticMethods__addRows$$($JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$, $headerSet$$9_rowFragment$$1$$, !0, $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_startRowPixel$, $headerRange$$9_rowStart$$7$$, $rowCount$$7_rowRange$$5$$, $columnRange$$5_columnStart$$5$$, !1, $cellSet$$9$$);
    $JSCompiler_StaticMethods__insertRowsWithAnimation$$($JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$, $headerSet$$9_rowFragment$$1$$, $rowHeaderFragment$$1$$, $headerRange$$9_rowStart$$7$$, $index$$62_returnVal$$11$$.totalRowHeight);
  } else {
    $rowCount$$7_rowRange$$5$$ = {axis:"row", start:$headerRange$$9_rowStart$$7$$, count:$rowCount$$7_rowRange$$5$$}, $columnRange$$5_columnStart$$5$$ = {axis:"column", start:$columnRange$$5_columnStart$$5$$, count:$columnCount$$3_headerCount$$3$$}, null != $headerSet$$9_rowFragment$$1$$ && ($headerRange$$9_rowStart$$7$$ = {axis:"row", header:$JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_rowHeader$, start:$headerRange$$9_rowStart$$7$$, count:$headerSet$$9_rowFragment$$1$$.getCount()}, 
    $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$m_fetching$.row = $headerRange$$9_rowStart$$7$$, $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$_handleHeaderInsertsFetchSuccess$($headerSet$$9_rowFragment$$1$$, $headerRange$$9_rowStart$$7$$)), $JSCompiler_StaticMethods__handleModelInsertRangeEvent$self$$.$_handleCellInsertsFetchSuccess$($cellSet$$9$$, [$rowCount$$7_rowRange$$5$$, $columnRange$$5_columnStart$$5$$]);
  }
};
$DvtDataGrid$$.prototype.$_handleHeaderUpdatesFetchSuccess$ = function $$DvtDataGrid$$$$$_handleHeaderUpdatesFetchSuccess$$($headerSet$$10$$, $headerRange$$10$$) {
  var $row$$20_rowStart$$8$$, $rowHeaderContent$$5$$, $fragment$$5_rowIndex$$4$$;
  this.$m_fetching$[$headerRange$$10$$.axis] = !1;
  $row$$20_rowStart$$8$$ = $headerRange$$10$$.start;
  $rowHeaderContent$$5$$ = this.$m_rowHeader$.firstChild;
  $fragment$$5_rowIndex$$4$$ = $row$$20_rowStart$$8$$ - this.$m_startRowHeader$;
  $row$$20_rowStart$$8$$ = $rowHeaderContent$$5$$.childNodes[$fragment$$5_rowIndex$$4$$];
  $fragment$$5_rowIndex$$4$$ = $JSCompiler_StaticMethods_buildRowHeaders$$(this, this.$m_rowHeader$, $headerSet$$10$$, $fragment$$5_rowIndex$$4$$, 1, !0, !0);
  $rowHeaderContent$$5$$.replaceChild($fragment$$5_rowIndex$$4$$, $row$$20_rowStart$$8$$);
  null != this.$m_active$ && "header" === this.$m_active$.type && "row" === this.$m_active$.axis && $JSCompiler_StaticMethods__getKey$$(this, $row$$20_rowStart$$8$$) === this.$m_active$.key && $JSCompiler_StaticMethods__highlightActive$$(this);
};
$DvtDataGrid$$.prototype.$_handleCellUpdatesFetchSuccess$ = function $$DvtDataGrid$$$$$_handleCellUpdatesFetchSuccess$$($cellSet$$10$$, $cellRange$$7$$) {
  var $rowIndex$$5_rowStart$$9$$, $databodyContent$$10$$, $renderer$$7$$, $columnBandingInterval$$3$$;
  this.$m_fetching$.cells = !1;
  $rowIndex$$5_rowStart$$9$$ = $cellRange$$7$$[0].start;
  $databodyContent$$10$$ = this.$m_databody$.firstChild;
  $renderer$$7$$ = $JSCompiler_StaticMethods_getRenderer$$(this.$m_options$, "cell");
  $columnBandingInterval$$3$$ = $JSCompiler_StaticMethods_getColumnBandingInterval$$(this.$m_options$);
  $JSCompiler_StaticMethods_getRowBandingInterval$$(this.$m_options$);
  $rowIndex$$5_rowStart$$9$$ -= this.$m_startRow$;
  $JSCompiler_StaticMethods__updateCellsInRow$$(this, $cellSet$$10$$, $databodyContent$$10$$.childNodes[$rowIndex$$5_rowStart$$9$$], $rowIndex$$5_rowStart$$9$$, $renderer$$7$$, this.$m_startCol$, $columnBandingInterval$$3$$);
};
var $JSCompiler_StaticMethods__updateCellsInRow$$ = function $$JSCompiler_StaticMethods__updateCellsInRow$$$($JSCompiler_StaticMethods__updateCellsInRow$self$$, $cellSet$$11$$, $row$$22$$, $rowIndex$$6$$, $renderer$$8$$, $columnStart$$6$$, $columnBandingInterval$$4$$) {
  var $width$$23$$;
  $JSCompiler_StaticMethods_supportsTransitions$$() ? ($row$$22$$.addEventListener("transitionend", function() {
    $row$$22$$.style.left = "";
    $JSCompiler_StaticMethods_removeTransformMoveStyle$$($row$$22$$);
    $row$$22$$.removeEventListener("transitionend", arguments.callee, !1);
  }), $width$$23$$ = $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods__updateCellsInRow$self$$.$m_databody$), $JSCompiler_StaticMethods_setElementDir$$($row$$22$$, $width$$23$$, "left"), $JSCompiler_StaticMethods__updateCellsInRow$self$$.$m_utils$.empty($row$$22$$), $JSCompiler_StaticMethods_addCellsToRow$$($JSCompiler_StaticMethods__updateCellsInRow$self$$, $cellSet$$11$$, $row$$22$$, $rowIndex$$6$$, $renderer$$8$$, !0, $columnStart$$6$$, !1, $columnBandingInterval$$4$$), $JSCompiler_StaticMethods__isSelectionEnabled$$($JSCompiler_StaticMethods__updateCellsInRow$self$$) && 
  $JSCompiler_StaticMethods_applySelection$$($JSCompiler_StaticMethods__updateCellsInRow$self$$), $JSCompiler_StaticMethods__updateCellsInRow$self$$.$highlightActive$(!1), $JSCompiler_StaticMethods_hideStatusText$$($JSCompiler_StaticMethods__updateCellsInRow$self$$), $JSCompiler_StaticMethods_addTransformMoveStyle$$($row$$22$$, "250ms", 0, "linear", -1 * $width$$23$$, 0)) : ($JSCompiler_StaticMethods__updateCellsInRow$self$$.$m_utils$.empty($row$$22$$), $JSCompiler_StaticMethods_addCellsToRow$$($JSCompiler_StaticMethods__updateCellsInRow$self$$, 
  $cellSet$$11$$, $row$$22$$, $rowIndex$$6$$, $renderer$$8$$, !0, $columnStart$$6$$, !1, $columnBandingInterval$$4$$), $JSCompiler_StaticMethods__isSelectionEnabled$$($JSCompiler_StaticMethods__updateCellsInRow$self$$) && $JSCompiler_StaticMethods_applySelection$$($JSCompiler_StaticMethods__updateCellsInRow$self$$), $JSCompiler_StaticMethods__updateCellsInRow$self$$.$highlightActive$(!1));
}, $JSCompiler_StaticMethods__getSelectionGaps$$ = function $$JSCompiler_StaticMethods__getSelectionGaps$$$($indices$$2$$) {
  var $i$$25$$, $idx$$, $idxs$$;
  $idx$$ = [];
  $idxs$$ = [];
  for ($i$$25$$ = 0;$i$$25$$ < $indices$$2$$.length - 1;$i$$25$$++) {
    1 == $indices$$2$$[$i$$25$$ + 1] - $indices$$2$$[$i$$25$$] ? $idx$$.push($indices$$2$$[$i$$25$$]) : ($idx$$.push($indices$$2$$[$i$$25$$]), $idxs$$.push($idx$$), $idx$$ = []);
  }
  $idx$$.push($indices$$2$$[$indices$$2$$.length - 1]);
  $idxs$$.push($idx$$);
  return $idxs$$;
}, $JSCompiler_StaticMethods__getRowByLocalPosition$$ = function $$JSCompiler_StaticMethods__getRowByLocalPosition$$$($JSCompiler_StaticMethods__getRowByLocalPosition$self$$, $pos$$4$$) {
  var $indexes$$inline_930$$ = {row:$pos$$4$$}, $keys$$inline_931$$ = {row:null, column:null};
  null != $indexes$$inline_930$$.row && ($keys$$inline_931$$.row = $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods__getRowByLocalPosition$self$$, $JSCompiler_StaticMethods__getRowByLocalPosition$self$$.$m_databody$.firstChild.childNodes[$indexes$$inline_930$$.row - $JSCompiler_StaticMethods__getRowByLocalPosition$self$$.$m_startRow$]));
  null != $indexes$$inline_930$$.column && ($keys$$inline_931$$.column = $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods__getRowByLocalPosition$self$$, $JSCompiler_StaticMethods__getColumnHeaderByIndex$$($JSCompiler_StaticMethods__getRowByLocalPosition$self$$, $indexes$$inline_930$$.column, $JSCompiler_StaticMethods__getRowByLocalPosition$self$$.$m_ColumnHeaderLevelCount$ - 1)));
  return $JSCompiler_StaticMethods__findRowByKey$$($JSCompiler_StaticMethods__getRowByLocalPosition$self$$, $keys$$inline_931$$.$row$);
}, $JSCompiler_StaticMethods__removeRowsWithAnimation$$ = function $$JSCompiler_StaticMethods__removeRowsWithAnimation$$$($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$, $keys$$11$$, $i$$26_indices$$3$$) {
  var $key$$29_rowHeader$$16_rowKey$$5$$, $j$$7$$, $k$$1$$, $row$$24$$, $totalHeight$$1$$, $height$$27$$, $referenceRow$$4_rwn$$, $databodyContent$$12$$, $lastTopRow$$, $start$$17$$, $firstRowCase$$, $gaps_rwp$$, $adjustment$$6_transition_duration$$, $transition_delay$$, $transition_timing_function$$, $opacity$$, $gap_size$$;
  $gaps_rwp$$ = $JSCompiler_StaticMethods__getSelectionGaps$$($i$$26_indices$$3$$);
  $row$$24$$ = $JSCompiler_StaticMethods__getRowByLocalPosition$$($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$, $i$$26_indices$$3$$[$i$$26_indices$$3$$.length - 1]);
  $referenceRow$$4_rwn$$ = $row$$24$$.nextSibling;
  $gap_size$$ = 0;
  $adjustment$$6_transition_duration$$ = $JSCompiler_StaticMethods_getCssSupport$$("transition-duration");
  $transition_delay$$ = $JSCompiler_StaticMethods_getCssSupport$$("transition-delay");
  $transition_timing_function$$ = $JSCompiler_StaticMethods_getCssSupport$$("transition-timing-function");
  $opacity$$ = $JSCompiler_StaticMethods_getCssSupport$$("opacity");
  $JSCompiler_StaticMethods_getCssSupport$$("transform");
  $firstRowCase$$ = !0;
  $databodyContent$$12$$ = $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$.$m_databody$.firstChild;
  $lastTopRow$$ = $JSCompiler_StaticMethods__getRowByLocalPosition$$($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$, $i$$26_indices$$3$$[0]);
  0 != $lastTopRow$$.previousSibling.childElementCount && ($lastTopRow$$ = $lastTopRow$$.previousSibling, $firstRowCase$$ = !1);
  for ($i$$26_indices$$3$$ = 0;$i$$26_indices$$3$$ < $keys$$11$$.length;$i$$26_indices$$3$$++) {
    $key$$29_rowHeader$$16_rowKey$$5$$ = $keys$$11$$[$i$$26_indices$$3$$], $key$$29_rowHeader$$16_rowKey$$5$$.row && ($key$$29_rowHeader$$16_rowKey$$5$$ = $key$$29_rowHeader$$16_rowKey$$5$$.row, $row$$24$$ = $JSCompiler_StaticMethods__findRowByKey$$($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$, $key$$29_rowHeader$$16_rowKey$$5$$), null != $row$$24$$ ? ($height$$27$$ = $JSCompiler_StaticMethods_calculateRowHeight$$($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$, $row$$24$$), 
    $JSCompiler_StaticMethods_changeStyleProperty$$($row$$24$$, $adjustment$$6_transition_duration$$, "400ms"), $JSCompiler_StaticMethods_changeStyleProperty$$($row$$24$$, $transition_delay$$, "0ms"), $JSCompiler_StaticMethods_changeStyleProperty$$($row$$24$$, $transition_timing_function$$, "Cubic-bezier(0.70,0.00,0.51,1.29)"), $JSCompiler_StaticMethods_changeStyleProperty$$($row$$24$$, $opacity$$, 0)) : $height$$27$$ = $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$.$m_avgRowHeight$, $key$$29_rowHeader$$16_rowKey$$5$$ = 
    $JSCompiler_StaticMethods__findRowHeaderByKey$$($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$, $key$$29_rowHeader$$16_rowKey$$5$$), null != $key$$29_rowHeader$$16_rowKey$$5$$ && ($height$$27$$ = $JSCompiler_StaticMethods_calculateRowHeaderHeight$$($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$, $key$$29_rowHeader$$16_rowKey$$5$$), $referenceRow$$4_rwn$$ = $key$$29_rowHeader$$16_rowKey$$5$$.nextSibling, $JSCompiler_StaticMethods_pushRowsDown$$($referenceRow$$4_rwn$$, -$height$$27$$), 
    $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$.$_remove$($key$$29_rowHeader$$16_rowKey$$5$$), $key$$29_rowHeader$$16_rowKey$$5$$.style.display = "none", $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$.$m_endRowHeader$ -= 1, $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$.$m_endRowHeaderPixel$ -= $height$$27$$), $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$.$m_endRow$ -= 1, $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$.$m_endRowPixel$ -= $height$$27$$, 
    $totalHeight$$1$$ += $height$$27$$);
  }
  if (1 < $gaps_rwp$$.length) {
    for ($i$$26_indices$$3$$ = 0;$i$$26_indices$$3$$ < $gaps_rwp$$.length - 1;$i$$26_indices$$3$$++) {
      for ($gap_size$$ += $gaps_rwp$$[$i$$26_indices$$3$$].length, $adjustment$$6_transition_duration$$ = $height$$27$$ * $gap_size$$, $j$$7$$ = $gaps_rwp$$[$i$$26_indices$$3$$][$gaps_rwp$$[$i$$26_indices$$3$$].length - 1] + 1;$j$$7$$ < $gaps_rwp$$[$i$$26_indices$$3$$ + 1][0];$j$$7$$++) {
        $row$$24$$ = $JSCompiler_StaticMethods__getRowByLocalPosition$$($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$, $j$$7$$), $JSCompiler_StaticMethods_addTransformMoveStyle$$($row$$24$$, "600ms", "150ms", "Cubic-bezier(0.70,0.00,0.51,1.29)", 0, "-" + $adjustment$$6_transition_duration$$);
      }
    }
  }
  for ($adjustment$$6_transition_duration$$ = $height$$27$$ * $keys$$11$$.length;$referenceRow$$4_rwn$$;) {
    $gaps_rwp$$ = $referenceRow$$4_rwn$$.previousSibling, $JSCompiler_StaticMethods_addTransformMoveStyle$$($referenceRow$$4_rwn$$, "600ms", "150ms", "Cubic-bezier(0.70,0.00,0.51,1.29)", 0, "-" + $adjustment$$6_transition_duration$$), ($referenceRow$$4_rwn$$ = $referenceRow$$4_rwn$$.nextSibling) || $gaps_rwp$$.addEventListener("transitionend", function() {
      for ($j$$7$$ = 0;$j$$7$$ < $keys$$11$$.length;$j$$7$$++) {
        $keys$$11$$[$j$$7$$].row && ($row$$24$$ = $JSCompiler_StaticMethods__findRowByKey$$($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$, $keys$$11$$[$j$$7$$].row), $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$.$_remove$($row$$24$$), $row$$24$$.style.display = "none");
      }
      $start$$17$$ = -1;
      for ($k$$1$$ = 1;$k$$1$$ < $databodyContent$$12$$.childElementCount;$k$$1$$++) {
        $row$$24$$ = $databodyContent$$12$$.childNodes[$k$$1$$], $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$, $lastTopRow$$) && $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$, $lastTopRow$$) == $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$, $databodyContent$$12$$.childNodes[$k$$1$$]) && ($start$$17$$ = $k$$1$$ + 1), $JSCompiler_StaticMethods_changeStyleProperty$$($row$$24$$, 
        $JSCompiler_StaticMethods_getCssSupport$$("z-index"), 0, "remove"), $JSCompiler_StaticMethods_removeTransformMoveStyle$$($row$$24$$), 0 < $start$$17$$ ? $databodyContent$$12$$.childNodes[$k$$1$$].style.top = $lastTopRow$$.offsetTop + $height$$27$$ * ($k$$1$$ - $start$$17$$ + 1) + "px" : $firstRowCase$$ && ($databodyContent$$12$$.childNodes[$k$$1$$].style.top = $lastTopRow$$.offsetTop + $height$$27$$ * ($k$$1$$ - 1) + "px");
      }
      $JSCompiler_StaticMethods_setElementHeight$$($databodyContent$$12$$, $JSCompiler_StaticMethods_getElementHeight$$($databodyContent$$12$$) - $totalHeight$$1$$);
      $JSCompiler_StaticMethods_setElementHeight$$($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$.$m_scroller$.firstChild, $JSCompiler_StaticMethods_getElementHeight$$($databodyContent$$12$$) - $totalHeight$$1$$);
      $JSCompiler_StaticMethods_resizeGrid$$($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$);
      $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$.$m_stopRowFetch$ = !1;
      $JSCompiler_StaticMethods_fillViewport$$($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$, $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$.$m_currentScrollLeft$, $JSCompiler_StaticMethods__removeRowsWithAnimation$self$$.$m_currentScrollTop$);
      $JSCompiler_StaticMethods_updateRowBanding$$($JSCompiler_StaticMethods__removeRowsWithAnimation$self$$);
      this.removeEventListener("transitionend", arguments.callee, !1);
    }, !1);
  }
}, $JSCompiler_StaticMethods__collapseRowsWithAnimation$$ = function $$JSCompiler_StaticMethods__collapseRowsWithAnimation$$$($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $keys$$12$$) {
  var $databodyContent$$13$$, $referenceRow$$5$$, $referenceRowHeader$$1$$, $lastAnimationElement$$, $i$$27$$, $rowKey$$6$$, $row$$25$$, $rowsToRemove$$, $rowHeadersToRemove$$, $totalRowHeight$$5$$, $rowHeader$$17$$, $tranisitionListener$$, $rowHeaderSupport$$1$$;
  $rowsToRemove$$ = [];
  $totalRowHeight$$5$$ = 0;
  $rowHeaderSupport$$1$$ = -1 == $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_endRowHeader$ ? !1 : !0;
  $databodyContent$$13$$ = $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_databody$.firstChild;
  for ($row$$25$$ = $referenceRow$$5$$ = $JSCompiler_StaticMethods__findRowByKey$$($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $keys$$12$$[0].row).previousSibling;$row$$25$$ && !($JSCompiler_StaticMethods_getElementDir$$($row$$25$$, "top") < $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_currentScrollTop$);) {
    $JSCompiler_StaticMethods_changeStyleProperty$$($row$$25$$, $JSCompiler_StaticMethods_getCssSupport$$("z-index"), 10), $row$$25$$ = $row$$25$$.previousSibling;
  }
  if ($rowHeaderSupport$$1$$) {
    for ($rowHeadersToRemove$$ = [], $row$$25$$ = $referenceRowHeader$$1$$ = $JSCompiler_StaticMethods__findRowHeaderByKey$$($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $keys$$12$$[0].row).previousSibling;$row$$25$$ && !($JSCompiler_StaticMethods_getElementDir$$($row$$25$$, "top") < $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_currentScrollTop$);) {
      $JSCompiler_StaticMethods_changeStyleProperty$$($row$$25$$, $JSCompiler_StaticMethods_getCssSupport$$("z-index"), 10), $row$$25$$ = $row$$25$$.previousSibling;
    }
  }
  for ($i$$27$$ = 0;$i$$27$$ < $keys$$12$$.length;$i$$27$$++) {
    $rowKey$$6$$ = $keys$$12$$[$i$$27$$].row, $row$$25$$ = $JSCompiler_StaticMethods__findRowByKey$$($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $rowKey$$6$$), null != $row$$25$$ && ($rowsToRemove$$.push($row$$25$$), $totalRowHeight$$5$$ += $JSCompiler_StaticMethods_getElementHeight$$($row$$25$$), $JSCompiler_StaticMethods_setElementDir$$($row$$25$$, $JSCompiler_StaticMethods_getElementDir$$($row$$25$$, "top") - $totalRowHeight$$5$$, "top"), $JSCompiler_StaticMethods_addTransformMoveStyle$$($row$$25$$, 
    0, 0, "linear", 0, $totalRowHeight$$5$$)), $rowHeaderSupport$$1$$ && ($rowHeader$$17$$ = $JSCompiler_StaticMethods__findRowHeaderByKey$$($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $rowKey$$6$$), null != $rowHeader$$17$$ && ($rowHeadersToRemove$$.push($rowHeader$$17$$), $JSCompiler_StaticMethods_setElementDir$$($rowHeader$$17$$, $JSCompiler_StaticMethods_getElementDir$$($rowHeader$$17$$, "top") - $totalRowHeight$$5$$, "top"), $JSCompiler_StaticMethods_addTransformMoveStyle$$($rowHeader$$17$$, 
    0, 0, "linear", 0, $totalRowHeight$$5$$)));
  }
  for (;$row$$25$$.nextSibling;) {
    $row$$25$$ = $row$$25$$.nextSibling, $JSCompiler_StaticMethods_setElementDir$$($row$$25$$, $JSCompiler_StaticMethods_getElementDir$$($row$$25$$, "top") - $totalRowHeight$$5$$, "top"), $JSCompiler_StaticMethods_addTransformMoveStyle$$($row$$25$$, 0, 0, "linear", 0, $totalRowHeight$$5$$), $rowHeaderSupport$$1$$ && ($rowHeader$$17$$ = $rowHeader$$17$$.nextSibling, $JSCompiler_StaticMethods_setElementDir$$($rowHeader$$17$$, $JSCompiler_StaticMethods_getElementDir$$($rowHeader$$17$$, "top") - $totalRowHeight$$5$$, 
    "top"), $JSCompiler_StaticMethods_addTransformMoveStyle$$($rowHeader$$17$$, 0, 0, "linear", 0, $totalRowHeight$$5$$));
  }
  $lastAnimationElement$$ = $databodyContent$$13$$.lastChild;
  $tranisitionListener$$ = function $$tranisitionListener$$$() {
    var $keys$$12$$;
    for ($keys$$12$$ = 0;$keys$$12$$ < $rowsToRemove$$.length;$keys$$12$$++) {
      $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$_remove$($rowsToRemove$$[$keys$$12$$]), $rowHeaderSupport$$1$$ && $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$_remove$($rowHeadersToRemove$$[$keys$$12$$]);
    }
    $JSCompiler_StaticMethods_setElementHeight$$($databodyContent$$13$$, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_endRowPixel$ - $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_startRowPixel$);
    $JSCompiler_StaticMethods_setElementHeight$$($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_scroller$.firstChild, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_endRowPixel$ - $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_startRowPixel$);
    $JSCompiler_StaticMethods_resizeGrid$$($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$);
    $JSCompiler_StaticMethods_updateRowBanding$$($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$);
    $JSCompiler_StaticMethods_fillViewport$$($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_currentScrollLeft$, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_currentScrollTop$);
    $JSCompiler_StaticMethods__handleAnimationEnd$$($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$);
    $lastAnimationElement$$.removeEventListener("transitionend", $tranisitionListener$$, !1);
  };
  $lastAnimationElement$$.addEventListener("transitionend", $tranisitionListener$$, !1);
  $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_endRow$ -= $rowsToRemove$$.length;
  $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_endRowPixel$ -= $totalRowHeight$$5$$;
  $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_stopRowFetch$ = !1;
  $rowHeaderSupport$$1$$ && ($JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_endRowHeader$ -= $rowHeadersToRemove$$.length, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_endRowHeaderPixel$ -= $totalRowHeight$$5$$, $JSCompiler_StaticMethods__collapseRowsWithAnimation$self$$.$m_stopRowHeaderFetch$ = !1);
  $row$$25$$ = $referenceRow$$5$$.nextSibling;
  $rowHeaderSupport$$1$$ && ($rowHeader$$17$$ = $referenceRowHeader$$1$$.nextSibling);
  (0,window.setTimeout)(function() {
    for (;$row$$25$$;) {
      $JSCompiler_StaticMethods_addTransformMoveStyle$$($row$$25$$, "400ms", 0, "ease-out", 0, 0), $row$$25$$ = $row$$25$$.nextSibling, $rowHeaderSupport$$1$$ && ($JSCompiler_StaticMethods_addTransformMoveStyle$$($rowHeader$$17$$, "400ms", 0, "ease-out", 0, 0), $rowHeader$$17$$ = $rowHeader$$17$$.nextSibling);
    }
  }, 0);
}, $JSCompiler_StaticMethods__handleAnimationEnd$$ = function $$JSCompiler_StaticMethods__handleAnimationEnd$$$($JSCompiler_StaticMethods__handleAnimationEnd$self$$) {
  var $i$$29$$, $databodyContent$$14$$, $rowHeaderContent$$6$$;
  $databodyContent$$14$$ = $JSCompiler_StaticMethods__handleAnimationEnd$self$$.$m_databody$.firstChild;
  $rowHeaderContent$$6$$ = $JSCompiler_StaticMethods__handleAnimationEnd$self$$.$m_rowHeader$.firstChild;
  for ($i$$29$$ = 0;$i$$29$$ < $databodyContent$$14$$.childNodes.length;$i$$29$$++) {
    $JSCompiler_StaticMethods_removeTransformMoveStyle$$($databodyContent$$14$$.childNodes[$i$$29$$]), $JSCompiler_StaticMethods_changeStyleProperty$$($databodyContent$$14$$.childNodes[$i$$29$$], $JSCompiler_StaticMethods_getCssSupport$$("z-index"), null, "remove"), -1 != $JSCompiler_StaticMethods__handleAnimationEnd$self$$.$m_endRowHeader$ && ($JSCompiler_StaticMethods_removeTransformMoveStyle$$($rowHeaderContent$$6$$.childNodes[$i$$29$$]), $JSCompiler_StaticMethods_changeStyleProperty$$($rowHeaderContent$$6$$.childNodes[$i$$29$$], 
    $JSCompiler_StaticMethods_getCssSupport$$("z-index"), null, "remove"));
  }
}, $JSCompiler_StaticMethods__findRowByKey$$ = function $$JSCompiler_StaticMethods__findRowByKey$$$($JSCompiler_StaticMethods__findRowByKey$self$$, $key$$30$$) {
  var $rows$$5$$, $row$$26$$, $i$$30$$, $rowKey$$7$$;
  if (null == $JSCompiler_StaticMethods__findRowByKey$self$$.$m_databody$) {
    return null;
  }
  $rows$$5$$ = $JSCompiler_StaticMethods__findRowByKey$self$$.$m_databody$.firstChild.childNodes;
  for ($i$$30$$ = 0;$i$$30$$ < $rows$$5$$.length;$i$$30$$++) {
    if ($row$$26$$ = $rows$$5$$[$i$$30$$], $rowKey$$7$$ = $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods__findRowByKey$self$$, $row$$26$$), $rowKey$$7$$ == $key$$30$$) {
      return $row$$26$$;
    }
  }
  return null;
}, $JSCompiler_StaticMethods__findRowHeaderByKey$$ = function $$JSCompiler_StaticMethods__findRowHeaderByKey$$$($JSCompiler_StaticMethods__findRowHeaderByKey$self$$, $key$$31$$) {
  var $rowHeaders$$2$$, $rowHeader$$18$$, $i$$31$$, $rowKey$$8$$;
  if (null == $JSCompiler_StaticMethods__findRowHeaderByKey$self$$.$m_rowHeader$) {
    return null;
  }
  $rowHeaders$$2$$ = $JSCompiler_StaticMethods__findRowHeaderByKey$self$$.$m_rowHeader$.getElementsByClassName($JSCompiler_StaticMethods__findRowHeaderByKey$self$$.getMappedStyle("rowheadercell"));
  for ($i$$31$$ = 0;$i$$31$$ < $rowHeaders$$2$$.length;$i$$31$$++) {
    if ($rowHeader$$18$$ = $rowHeaders$$2$$[$i$$31$$], $rowKey$$8$$ = $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods__findRowHeaderByKey$self$$, $rowHeader$$18$$), $rowKey$$8$$ == $key$$31$$) {
      return $rowHeader$$18$$;
    }
  }
  return null;
}, $JSCompiler_StaticMethods__findColumnHeaderByKey$$ = function $$JSCompiler_StaticMethods__findColumnHeaderByKey$$$($JSCompiler_StaticMethods__findColumnHeaderByKey$self$$, $key$$32$$) {
  var $columnHeaders$$2$$, $columnHeader$$4$$, $i$$32$$, $columnKey$$;
  if (null == $JSCompiler_StaticMethods__findColumnHeaderByKey$self$$.$m_colHeader$) {
    return null;
  }
  $columnHeaders$$2$$ = $JSCompiler_StaticMethods__findColumnHeaderByKey$self$$.$m_colHeader$.getElementsByClassName($JSCompiler_StaticMethods__findColumnHeaderByKey$self$$.getMappedStyle("colheadercell"));
  for ($i$$32$$ = 0;$i$$32$$ < $columnHeaders$$2$$.length;$i$$32$$++) {
    if ($columnHeader$$4$$ = $columnHeaders$$2$$[$i$$32$$], $columnKey$$ = $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods__findColumnHeaderByKey$self$$, $columnHeader$$4$$), $columnKey$$ == $key$$32$$) {
      return $columnHeader$$4$$;
    }
  }
  return null;
}, $JSCompiler_StaticMethods__handleModelSyncEvent$$ = function $$JSCompiler_StaticMethods__handleModelSyncEvent$$$($JSCompiler_StaticMethods__handleModelSyncEvent$self$$, $event$$35$$) {
  var $pageSize$$;
  $pageSize$$ = $event$$35$$.pageSize;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_fetching$ = {};
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_startRow$ = 0;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_endRow$ = -1;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_startRowHeader$ = 0;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_endRowHeader$ = -1;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_startRowPixel$ = 0;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_endRowPixel$ = 0;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_startRowHeaderPixel$ = 0;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_endRowHeaderPixel$ = 0;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_startCol$ = 0;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_endCol$ = -1;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_startColHeader$ = 0;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_endColHeader$ = -1;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_startColPixel$ = 0;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_endColPixel$ = 0;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_startColHeaderPixel$ = 0;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_endColHeaderPixel$ = 0;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_rowHeaderLevelCount$ = void 0;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_columnHeaderLevelCount$ = void 0;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_stopDatabodyScroll$ = !1;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_captureScrolling$ = !1;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_avgRowHeight$ = void 0;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_avgColWidth$ = void 0;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_isEstimateRowCount$ = void 0;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_isEstimateColumnCount$ = void 0;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_stopRowFetch$ = !1;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_stopRowHeaderFetch$ = !1;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_stopColumnFetch$ = !1;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_stopColumnHeaderFetch$ = !1;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_selection$ = null;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_active$ = null;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_prevActive$ = null;
  null != $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_empty$ && ($JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_root$.removeChild($JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_empty$), $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_empty$ = null);
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_initialized$ = !1;
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.fetchHeaders("row", 0, $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_rowHeader$, $pageSize$$, {success:function($JSCompiler_StaticMethods__handleModelSyncEvent$self$$, $event$$35$$) {
    $JSCompiler_StaticMethods_handleRowHeadersFetchSuccessForLongScroll$$(this, $JSCompiler_StaticMethods__handleModelSyncEvent$self$$, $event$$35$$);
  }});
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.fetchHeaders("column", 0, $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_colHeader$, void 0, {success:function($JSCompiler_StaticMethods__handleModelSyncEvent$self$$, $event$$35$$) {
    $JSCompiler_StaticMethods_handleColumnHeadersFetchSuccessForLongScroll$$(this, $JSCompiler_StaticMethods__handleModelSyncEvent$self$$, $event$$35$$);
  }});
  $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.fetchCells($JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_databody$, $JSCompiler_StaticMethods__handleModelSyncEvent$self$$.$m_scroller$, 0, 0, $pageSize$$, null, {success:function($JSCompiler_StaticMethods__handleModelSyncEvent$self$$, $event$$35$$) {
    $JSCompiler_StaticMethods_handleCellsFetchSuccessForLongScroll$$(this, $JSCompiler_StaticMethods__handleModelSyncEvent$self$$, $event$$35$$);
  }});
  $JSCompiler_StaticMethods_setInitialScrollPosition$$($JSCompiler_StaticMethods__handleModelSyncEvent$self$$);
};
$DvtDataGrid$$.prototype.$_setActiveByIndex$ = function $$DvtDataGrid$$$$$_setActiveByIndex$$($index$$64$$, $event$$36$$, $clearSelection$$) {
  return $JSCompiler_StaticMethods__setActive$$(this, $JSCompiler_StaticMethods__getCellByIndex$$(this, $index$$64$$), $event$$36$$, $clearSelection$$);
};
var $JSCompiler_StaticMethods__updateActive$$ = function $$JSCompiler_StaticMethods__updateActive$$$($JSCompiler_StaticMethods__updateActive$self$$, $activeObject$$) {
  var $keys$$inline_934_level$$20$$, $cells$$inline_936_newActiveElement_row$$inline_935$$;
  if (null == $activeObject$$) {
    $JSCompiler_StaticMethods__setActive$$($JSCompiler_StaticMethods__updateActive$self$$, null, null, null, !0);
  } else {
    if (null != $activeObject$$.keys) {
      a: {
        $keys$$inline_934_level$$20$$ = $activeObject$$.keys;
        $cells$$inline_936_newActiveElement_row$$inline_935$$ = $JSCompiler_StaticMethods__findRowByKey$$($JSCompiler_StaticMethods__updateActive$self$$, $keys$$inline_934_level$$20$$.row);
        if (null != $cells$$inline_936_newActiveElement_row$$inline_935$$) {
          $cells$$inline_936_newActiveElement_row$$inline_935$$ = $cells$$inline_936_newActiveElement_row$$inline_935$$.childNodes;
          for (var $i$$inline_937$$ = 0;$i$$inline_937$$ < $cells$$inline_936_newActiveElement_row$$inline_935$$.length;$i$$inline_937$$++) {
            if ($cells$$inline_936_newActiveElement_row$$inline_935$$[$i$$inline_937$$][$JSCompiler_StaticMethods__updateActive$self$$.$m_resources$.getMappedAttribute("context")].keys.column === $keys$$inline_934_level$$20$$.column) {
              $cells$$inline_936_newActiveElement_row$$inline_935$$ = $cells$$inline_936_newActiveElement_row$$inline_935$$[$i$$inline_937$$];
              break a;
            }
          }
        }
        $cells$$inline_936_newActiveElement_row$$inline_935$$ = null;
      }
    } else {
      null != $activeObject$$.indexes ? $cells$$inline_936_newActiveElement_row$$inline_935$$ = $JSCompiler_StaticMethods__getCellByIndex$$($JSCompiler_StaticMethods__updateActive$self$$, $activeObject$$.indexes) : null != $activeObject$$.axis && ($keys$$inline_934_level$$20$$ = null == $activeObject$$.level ? 0 : $activeObject$$.level, "column" == $activeObject$$.axis ? null != $activeObject$$.key ? $cells$$inline_936_newActiveElement_row$$inline_935$$ = $JSCompiler_StaticMethods__findColumnHeaderByKey$$($JSCompiler_StaticMethods__updateActive$self$$, 
      $activeObject$$.key) : null != $activeObject$$.index && ($cells$$inline_936_newActiveElement_row$$inline_935$$ = $JSCompiler_StaticMethods__getColumnHeaderByIndex$$($JSCompiler_StaticMethods__updateActive$self$$, $activeObject$$.index, $keys$$inline_934_level$$20$$)) : "row" == $activeObject$$.axis && (null != $activeObject$$.key ? $cells$$inline_936_newActiveElement_row$$inline_935$$ = $JSCompiler_StaticMethods__findRowHeaderByKey$$($JSCompiler_StaticMethods__updateActive$self$$, $activeObject$$.key) : 
      null != $activeObject$$.index && ($cells$$inline_936_newActiveElement_row$$inline_935$$ = $JSCompiler_StaticMethods__getRowHeaderByIndex$$($JSCompiler_StaticMethods__updateActive$self$$, $activeObject$$.index, $keys$$inline_934_level$$20$$))));
    }
  }
  null != $cells$$inline_936_newActiveElement_row$$inline_935$$ && $JSCompiler_StaticMethods__setActive$$($JSCompiler_StaticMethods__updateActive$self$$, $cells$$inline_936_newActiveElement_row$$inline_935$$, null, null, !0);
}, $JSCompiler_StaticMethods__setActive$$ = function $$JSCompiler_StaticMethods__setActive$$$($JSCompiler_StaticMethods__setActive$self$$, $activeObject$$inline_940_activeRow$$inline_946_element$$19$$, $event$$37$$, $className$$inline_943_clearSelection$$1$$, $silent$$2$$) {
  if (null != $activeObject$$inline_940_activeRow$$inline_946_element$$19$$) {
    var $active$$ = $JSCompiler_StaticMethods__createActiveObject$$($JSCompiler_StaticMethods__setActive$self$$, $activeObject$$inline_940_activeRow$$inline_946_element$$19$$);
    if ($JSCompiler_StaticMethods__compareActive$$($active$$, $JSCompiler_StaticMethods__setActive$self$$.$m_active$) && ($silent$$2$$ || $JSCompiler_StaticMethods__fireBeforeCurrentCellEvent$$($JSCompiler_StaticMethods__setActive$self$$, $active$$, $JSCompiler_StaticMethods__setActive$self$$.$m_active$, $event$$37$$))) {
      $JSCompiler_StaticMethods__setActive$self$$.$m_prevActive$ = $JSCompiler_StaticMethods__setActive$self$$.$m_active$;
      $activeObject$$inline_940_activeRow$$inline_946_element$$19$$ = $JSCompiler_StaticMethods__setActive$self$$.$m_active$ = $active$$;
      "header" === $activeObject$$inline_940_activeRow$$inline_946_element$$19$$.type ? $JSCompiler_StaticMethods_scrollToHeader$$($JSCompiler_StaticMethods__setActive$self$$, $activeObject$$inline_940_activeRow$$inline_946_element$$19$$) : $JSCompiler_StaticMethods_scrollToIndex$$($JSCompiler_StaticMethods__setActive$self$$, $activeObject$$inline_940_activeRow$$inline_946_element$$19$$.indexes);
      $className$$inline_943_clearSelection$$1$$ && $JSCompiler_StaticMethods__isSelectionEnabled$$($JSCompiler_StaticMethods__setActive$self$$) && $JSCompiler_StaticMethods__clearSelection$$($JSCompiler_StaticMethods__setActive$self$$);
      $JSCompiler_StaticMethods__unhighlightActiveObject$$($JSCompiler_StaticMethods__setActive$self$$, $JSCompiler_StaticMethods__setActive$self$$.$m_prevActive$);
      $JSCompiler_StaticMethods__highlightActiveObject$$($JSCompiler_StaticMethods__setActive$self$$, $JSCompiler_StaticMethods__setActive$self$$.$m_active$, $JSCompiler_StaticMethods__setActive$self$$.$m_prevActive$);
      var $activeKey$$inline_944_activeRowHeader$$inline_948$$, $prevActiveKey$$inline_945_prevActiveRowHeader$$inline_949$$, $prevActiveRow$$inline_947$$;
      $className$$inline_943_clearSelection$$1$$ = $JSCompiler_StaticMethods__setActive$self$$.getMappedStyle("draggable");
      $activeKey$$inline_944_activeRowHeader$$inline_948$$ = $JSCompiler_StaticMethods__getActiveRowKey$$($JSCompiler_StaticMethods__setActive$self$$);
      $prevActiveKey$$inline_945_prevActiveRowHeader$$inline_949$$ = $JSCompiler_StaticMethods__getActiveRowKey$$($JSCompiler_StaticMethods__setActive$self$$, !0);
      $activeObject$$inline_940_activeRow$$inline_946_element$$19$$ = $JSCompiler_StaticMethods__findRowByKey$$($JSCompiler_StaticMethods__setActive$self$$, $activeKey$$inline_944_activeRowHeader$$inline_948$$);
      $prevActiveRow$$inline_947$$ = $JSCompiler_StaticMethods__findRowByKey$$($JSCompiler_StaticMethods__setActive$self$$, $prevActiveKey$$inline_945_prevActiveRowHeader$$inline_949$$);
      $JSCompiler_StaticMethods_containsCSSClassName$$($prevActiveRow$$inline_947$$, $className$$inline_943_clearSelection$$1$$) && ($JSCompiler_StaticMethods_removeCSSClassName$$($prevActiveRow$$inline_947$$, $className$$inline_943_clearSelection$$1$$), $prevActiveKey$$inline_945_prevActiveRowHeader$$inline_949$$ = $JSCompiler_StaticMethods__findRowHeaderByKey$$($JSCompiler_StaticMethods__setActive$self$$, $prevActiveKey$$inline_945_prevActiveRowHeader$$inline_949$$), $JSCompiler_StaticMethods_containsCSSClassName$$($prevActiveKey$$inline_945_prevActiveRowHeader$$inline_949$$, 
      $className$$inline_943_clearSelection$$1$$) && $JSCompiler_StaticMethods_removeCSSClassName$$($prevActiveKey$$inline_945_prevActiveRowHeader$$inline_949$$, $className$$inline_943_clearSelection$$1$$));
      $JSCompiler_StaticMethods__isMoveOnRowEnabled$$($JSCompiler_StaticMethods__setActive$self$$, $activeObject$$inline_940_activeRow$$inline_946_element$$19$$) && ($activeKey$$inline_944_activeRowHeader$$inline_948$$ = $JSCompiler_StaticMethods__findRowHeaderByKey$$($JSCompiler_StaticMethods__setActive$self$$, $activeKey$$inline_944_activeRowHeader$$inline_948$$), $JSCompiler_StaticMethods_addCSSClassName$$($activeObject$$inline_940_activeRow$$inline_946_element$$19$$, $className$$inline_943_clearSelection$$1$$), 
      $JSCompiler_StaticMethods_addCSSClassName$$($activeKey$$inline_944_activeRowHeader$$inline_948$$, $className$$inline_943_clearSelection$$1$$));
      $silent$$2$$ || $JSCompiler_StaticMethods__setActive$self$$.fireEvent("currentCell", {event:$event$$37$$, ui:$active$$});
      return!0;
    }
  } else {
    if (!$JSCompiler_StaticMethods__setActive$self$$.$m_scrollIndexAfterFetch$ && !$JSCompiler_StaticMethods__setActive$self$$.$m_scrollHeaderAfterFetch$) {
      if ($silent$$2$$ || $JSCompiler_StaticMethods__fireBeforeCurrentCellEvent$$($JSCompiler_StaticMethods__setActive$self$$, $active$$, $JSCompiler_StaticMethods__setActive$self$$.$m_active$, $event$$37$$)) {
        $JSCompiler_StaticMethods__setActive$self$$.$m_prevActive$ = $JSCompiler_StaticMethods__setActive$self$$.$m_active$, $JSCompiler_StaticMethods__setActive$self$$.$m_active$ = null, $JSCompiler_StaticMethods__unhighlightActiveObject$$($JSCompiler_StaticMethods__setActive$self$$, $JSCompiler_StaticMethods__setActive$self$$.$m_prevActive$), $silent$$2$$ || $JSCompiler_StaticMethods__setActive$self$$.fireEvent("currentCell", {event:$event$$37$$, ui:$active$$});
      }
      return!0;
    }
  }
  return!1;
}, $JSCompiler_StaticMethods__createActiveObject$$ = function $$JSCompiler_StaticMethods__createActiveObject$$$($JSCompiler_StaticMethods__createActiveObject$self$$, $element$$20$$) {
  var $context$$3$$ = $element$$20$$[$JSCompiler_StaticMethods__createActiveObject$self$$.$m_resources$.getMappedAttribute("context")];
  return $JSCompiler_StaticMethods_containsCSSClassName$$($element$$20$$, $JSCompiler_StaticMethods__createActiveObject$self$$.getMappedStyle("headercell")) ? {type:"header", axis:$context$$3$$.axis, index:$JSCompiler_StaticMethods_getHeaderCellIndex$$($JSCompiler_StaticMethods__createActiveObject$self$$, $element$$20$$), key:$context$$3$$.key, level:$context$$3$$.level} : {type:"cell", indexes:{row:$JSCompiler_StaticMethods__createActiveObject$self$$.$getRowIndex$($element$$20$$.parentNode), column:$JSCompiler_StaticMethods__createActiveObject$self$$.$getCellIndex$($element$$20$$)}, 
  keys:{row:$context$$3$$.keys.row, column:$context$$3$$.keys.column}};
}, $JSCompiler_StaticMethods__getActiveElement$$ = function $$JSCompiler_StaticMethods__getActiveElement$$$($JSCompiler_StaticMethods__getActiveElement$self$$) {
  return $JSCompiler_StaticMethods__getElementFromActiveObject$$($JSCompiler_StaticMethods__getActiveElement$self$$, $JSCompiler_StaticMethods__getActiveElement$self$$.$m_active$);
}, $JSCompiler_StaticMethods__getElementFromActiveObject$$ = function $$JSCompiler_StaticMethods__getElementFromActiveObject$$$($JSCompiler_StaticMethods__getElementFromActiveObject$self$$, $active$$1$$) {
  var $elements$$;
  if (null != $active$$1$$) {
    if ("header" == $active$$1$$.type) {
      if ("row" === $active$$1$$.axis) {
        return $JSCompiler_StaticMethods__findRowHeaderByKey$$($JSCompiler_StaticMethods__getElementFromActiveObject$self$$, $active$$1$$.key);
      }
      if ("column" === $active$$1$$.axis) {
        return $JSCompiler_StaticMethods__findColumnHeaderByKey$$($JSCompiler_StaticMethods__getElementFromActiveObject$self$$, $active$$1$$.key);
      }
    } else {
      if ($elements$$ = $JSCompiler_StaticMethods_getElementsInRange$$($JSCompiler_StaticMethods__getElementFromActiveObject$self$$, $JSCompiler_StaticMethods__getElementFromActiveObject$self$$.createRange($active$$1$$.indexes)), null != $elements$$) {
        return $elements$$[0];
      }
    }
  }
  return null;
}, $JSCompiler_StaticMethods__compareActive$$ = function $$JSCompiler_StaticMethods__compareActive$$$($active1$$, $active2$$) {
  if (null != $active1$$ || null != $active2$$) {
    if (null == $active1$$ && null != $active2$$ || null != $active1$$ && null == $active2$$ || $active1$$.type != $active2$$.type) {
      return!0;
    }
    if ("header" == $active1$$.type) {
      if ($active1$$.index != $active2$$.index || $active1$$.key != $active2$$.key || $active1$$.axis != $active2$$.axis || $active1$$.level != $active2$$.level) {
        return!0;
      }
    } else {
      if ($active1$$.indexes.row != $active2$$.indexes.row || $active1$$.indexes.column != $active2$$.indexes.column || $active1$$.keys.row != $active2$$.keys.row || $active1$$.keys.column != $active2$$.keys.column) {
        return!0;
      }
    }
  }
  return!1;
}, $JSCompiler_StaticMethods__fireBeforeCurrentCellEvent$$ = function $$JSCompiler_StaticMethods__fireBeforeCurrentCellEvent$$$($JSCompiler_StaticMethods__fireBeforeCurrentCellEvent$self$$, $newActive$$, $oldActive$$, $event$$38$$) {
  return $JSCompiler_StaticMethods__fireBeforeCurrentCellEvent$self$$.fireEvent("beforeCurrentCell", {event:$event$$38$$, ui:{currentCell:$newActive$$, previousCurrentCell:$oldActive$$}});
}, $JSCompiler_StaticMethods__isDatabodyCellActive$$ = function $$JSCompiler_StaticMethods__isDatabodyCellActive$$$($JSCompiler_StaticMethods__isDatabodyCellActive$self$$) {
  return null != $JSCompiler_StaticMethods__isDatabodyCellActive$self$$.$m_active$ && "cell" == $JSCompiler_StaticMethods__isDatabodyCellActive$self$$.$m_active$.type;
}, $JSCompiler_StaticMethods_handleDatabodyClickActive$$ = function $$JSCompiler_StaticMethods_handleDatabodyClickActive$$$($JSCompiler_StaticMethods_handleDatabodyClickActive$self$$, $event$$40$$) {
  var $cell$$7$$ = $JSCompiler_StaticMethods_findCell$$($JSCompiler_StaticMethods_handleDatabodyClickActive$self$$, $event$$40$$.target);
  null != $cell$$7$$ && $JSCompiler_StaticMethods__setActive$$($JSCompiler_StaticMethods_handleDatabodyClickActive$self$$, $cell$$7$$, $event$$40$$);
}, $JSCompiler_StaticMethods__getCellByIndex$$ = function $$JSCompiler_StaticMethods__getCellByIndex$$$($JSCompiler_StaticMethods__getCellByIndex$self$$, $indexes$$16$$) {
  var $elements$$1$$ = $JSCompiler_StaticMethods_getElementsInRange$$($JSCompiler_StaticMethods__getCellByIndex$self$$, $JSCompiler_StaticMethods__getCellByIndex$self$$.createRange($indexes$$16$$));
  return null != $elements$$1$$ ? $elements$$1$$[0] : null;
};
$DvtDataGrid$$.prototype.$getRowIndex$ = function $$DvtDataGrid$$$$$getRowIndex$$($row$$28$$) {
  for (var $index$$66$$ = this.$m_startRow$;$row$$28$$.previousSibling;) {
    $index$$66$$ += 1, $row$$28$$ = $row$$28$$.previousSibling;
  }
  return $index$$66$$;
};
$DvtDataGrid$$.prototype.$getCellIndex$ = function $$DvtDataGrid$$$$$getCellIndex$$($cell$$8$$) {
  for (var $index$$67$$ = this.$m_startCol$;$cell$$8$$.previousSibling;) {
    $index$$67$$ += 1, $cell$$8$$ = $cell$$8$$.previousSibling;
  }
  return $index$$67$$;
};
var $JSCompiler_StaticMethods_getHeaderCellIndex$$ = function $$JSCompiler_StaticMethods_getHeaderCellIndex$$$($JSCompiler_StaticMethods_getHeaderCellIndex$self$$, $header$$11$$) {
  var $axis$$20$$, $index$$68$$;
  $axis$$20$$ = $JSCompiler_StaticMethods_getHeaderCellAxis$$($JSCompiler_StaticMethods_getHeaderCellIndex$self$$, $header$$11$$);
  if ("row" === $axis$$20$$) {
    if (1 < $JSCompiler_StaticMethods_getHeaderCellIndex$self$$.$m_rowHeaderLevelCount$) {
      $index$$68$$ = $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_getHeaderCellIndex$self$$, $header$$11$$.parentNode, "start");
      if ($header$$11$$ === $header$$11$$.parentNode.firstChild) {
        return $index$$68$$;
      }
      $index$$68$$--;
    } else {
      $index$$68$$ = $JSCompiler_StaticMethods_getHeaderCellIndex$self$$.$m_startRowHeader$;
    }
  } else {
    if ("column" === $axis$$20$$) {
      if (1 < $JSCompiler_StaticMethods_getHeaderCellIndex$self$$.$m_columnHeaderLevelCount$) {
        $index$$68$$ = $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_getHeaderCellIndex$self$$, $header$$11$$.parentNode, "start");
        if ($header$$11$$ === $header$$11$$.parentNode.firstChild) {
          return $index$$68$$;
        }
        $index$$68$$--;
      } else {
        $index$$68$$ = $JSCompiler_StaticMethods_getHeaderCellIndex$self$$.$m_startColHeader$;
      }
    }
  }
  for (;$header$$11$$.previousSibling;) {
    $index$$68$$ += 1, $header$$11$$ = $header$$11$$.previousSibling;
  }
  return $index$$68$$;
}, $JSCompiler_StaticMethods_getHeaderCellAxis$$ = function $$JSCompiler_StaticMethods_getHeaderCellAxis$$$($JSCompiler_StaticMethods_getHeaderCellAxis$self$$, $header$$12$$) {
  return $JSCompiler_StaticMethods_containsCSSClassName$$($header$$12$$, $JSCompiler_StaticMethods_getHeaderCellAxis$self$$.getMappedStyle("colheadercell")) ? "column" : $JSCompiler_StaticMethods_containsCSSClassName$$($header$$12$$, $JSCompiler_StaticMethods_getHeaderCellAxis$self$$.getMappedStyle("rowheadercell")) ? "row" : null;
}, $JSCompiler_StaticMethods_getHeaderCellLevel$$ = function $$JSCompiler_StaticMethods_getHeaderCellLevel$$$($JSCompiler_StaticMethods_getHeaderCellLevel$self$$, $header$$13$$) {
  var $level$$22$$;
  if ($JSCompiler_StaticMethods_containsCSSClassName$$($header$$13$$, $JSCompiler_StaticMethods_getHeaderCellLevel$self$$.getMappedStyle("colheadercell"))) {
    if (1 === $JSCompiler_StaticMethods_getHeaderCellLevel$self$$.$m_columnHeaderLevelCount$) {
      return 0;
    }
  } else {
    if ($JSCompiler_StaticMethods_containsCSSClassName$$($header$$13$$, $JSCompiler_StaticMethods_getHeaderCellLevel$self$$.getMappedStyle("rowheadercell"))) {
      if (1 === $JSCompiler_StaticMethods_getHeaderCellLevel$self$$.$m_rowHeaderLevelCount$) {
        return 0;
      }
    } else {
      return null;
    }
  }
  $level$$22$$ = $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_getHeaderCellLevel$self$$, $header$$13$$.parentNode, "level");
  return $header$$13$$ === $header$$13$$.parentNode.firstChild ? $level$$22$$ : $level$$22$$ + $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_getHeaderCellLevel$self$$, $header$$13$$.parentNode.firstChild, "depth");
}, $JSCompiler_StaticMethods_findCell$$ = function $$JSCompiler_StaticMethods_findCell$$$($JSCompiler_StaticMethods_findCell$self$$, $elem$$15$$) {
  return $JSCompiler_StaticMethods_findCell$self$$.find($elem$$15$$, "cell");
};
$DvtDataGrid$$.prototype.find = function $$DvtDataGrid$$$$find$($elem$$16$$, $key$$33$$, $className$$11$$) {
  if (null == $elem$$16$$ || $elem$$16$$ == this.$getRootElement$()) {
    return null;
  }
  void 0 == $className$$11$$ && ($className$$11$$ = this.getMappedStyle($key$$33$$));
  return null == $className$$11$$ ? null : $JSCompiler_StaticMethods_containsCSSClassName$$($elem$$16$$, $className$$11$$) ? $elem$$16$$ : this.find($elem$$16$$.parentNode, $key$$33$$, $className$$11$$);
};
var $JSCompiler_StaticMethods__highlightActive$$ = function $$JSCompiler_StaticMethods__highlightActive$$$($JSCompiler_StaticMethods__highlightActive$self$$) {
  $JSCompiler_StaticMethods__highlightActiveObject$$($JSCompiler_StaticMethods__highlightActive$self$$, $JSCompiler_StaticMethods__highlightActive$self$$.$m_active$, $JSCompiler_StaticMethods__highlightActive$self$$.$m_prevActive$, void 0);
}, $JSCompiler_StaticMethods__highlightActiveObject$$ = function $$JSCompiler_StaticMethods__highlightActiveObject$$$($JSCompiler_StaticMethods__highlightActiveObject$self$$, $activeObject$$3$$, $prevActiveObject$$1$$, $classNames$$3$$) {
  null == $classNames$$3$$ && ($classNames$$3$$ = ["focus"]);
  if (null != $activeObject$$3$$) {
    var $element$$21$$ = $JSCompiler_StaticMethods__getElementFromActiveObject$$($JSCompiler_StaticMethods__highlightActiveObject$self$$, $activeObject$$3$$);
    $JSCompiler_StaticMethods__highlightElement$$($JSCompiler_StaticMethods__highlightActiveObject$self$$, $element$$21$$, $classNames$$3$$);
    $JSCompiler_StaticMethods__setAriaProperties$$($JSCompiler_StaticMethods__highlightActiveObject$self$$, $activeObject$$3$$, $prevActiveObject$$1$$, $element$$21$$);
  }
}, $JSCompiler_StaticMethods__unhighlightActiveObject$$ = function $$JSCompiler_StaticMethods__unhighlightActiveObject$$$($JSCompiler_StaticMethods__unhighlightActiveObject$self$$, $activeObject$$4_element$$22$$, $classNames$$4$$) {
  null == $classNames$$4$$ && ($classNames$$4$$ = ["focus"]);
  null != $activeObject$$4_element$$22$$ && ($activeObject$$4_element$$22$$ = $JSCompiler_StaticMethods__getElementFromActiveObject$$($JSCompiler_StaticMethods__unhighlightActiveObject$self$$, $activeObject$$4_element$$22$$), $JSCompiler_StaticMethods__unhighlightElement$$($JSCompiler_StaticMethods__unhighlightActiveObject$self$$, $activeObject$$4_element$$22$$, $classNames$$4$$), $JSCompiler_StaticMethods__unsetAriaProperties$$($activeObject$$4_element$$22$$));
}, $JSCompiler_StaticMethods__highlightElement$$ = function $$JSCompiler_StaticMethods__highlightElement$$$($JSCompiler_StaticMethods__highlightElement$self$$, $element$$23$$, $classNames$$5$$) {
  var $className$$12$$, $i$$34$$;
  for ($i$$34$$ = 0;$i$$34$$ < $classNames$$5$$.length;$i$$34$$++) {
    $className$$12$$ = $JSCompiler_StaticMethods__highlightElement$self$$.getMappedStyle($classNames$$5$$[$i$$34$$]), $JSCompiler_StaticMethods_addCSSClassName$$($element$$23$$, $className$$12$$);
  }
}, $JSCompiler_StaticMethods__unhighlightElement$$ = function $$JSCompiler_StaticMethods__unhighlightElement$$$($JSCompiler_StaticMethods__unhighlightElement$self$$, $element$$24$$, $classNames$$6$$) {
  var $className$$13$$, $i$$35$$;
  for ($i$$35$$ = 0;$i$$35$$ < $classNames$$6$$.length;$i$$35$$++) {
    $className$$13$$ = $JSCompiler_StaticMethods__unhighlightElement$self$$.getMappedStyle($classNames$$6$$[$i$$35$$]), $JSCompiler_StaticMethods_removeCSSClassName$$($element$$24$$, $className$$13$$);
  }
}, $JSCompiler_StaticMethods__setAriaProperties$$ = function $$JSCompiler_StaticMethods__setAriaProperties$$$($JSCompiler_StaticMethods__setAriaProperties$self$$, $activeObject$$5$$, $prevActiveObject$$2$$, $element$$25$$) {
  var $label$$3_label$$inline_955_rowHeader$$inline_959$$, $axis$$inline_967_direction$$inline_957_previousElement$$inline_956$$, $columnHeader$$inline_960_key$$inline_958_level$$inline_969$$, $contextObj$$inline_970_previousRowIndex$$inline_961$$, $index$$inline_968_previousColumnIndex$$inline_962$$;
  $label$$3_label$$inline_955_rowHeader$$inline_959$$ = "";
  "header" == $activeObject$$5$$.type ? (null == $prevActiveObject$$2$$ || "header" != $prevActiveObject$$2$$.type || $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_externalFocus$ || ("row" === $prevActiveObject$$2$$.axis && 1 < $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_rowHeaderLevelCount$ ? $axis$$inline_967_direction$$inline_957_previousElement$$inline_956$$ = $JSCompiler_StaticMethods__getRowHeaderByIndex$$($JSCompiler_StaticMethods__setAriaProperties$self$$, $prevActiveObject$$2$$.index, 
  $prevActiveObject$$2$$.level) : "column" === $prevActiveObject$$2$$.axis && 1 < $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_columnHeaderLevelCount$ && ($axis$$inline_967_direction$$inline_957_previousElement$$inline_956$$ = $JSCompiler_StaticMethods__getColumnHeaderByIndex$$($JSCompiler_StaticMethods__setAriaProperties$self$$, $prevActiveObject$$2$$.index, $prevActiveObject$$2$$.level))), $label$$3_label$$inline_955_rowHeader$$inline_959$$ = $JSCompiler_StaticMethods_createSubId$$($JSCompiler_StaticMethods__setAriaProperties$self$$, 
  "context") + $JSCompiler_StaticMethods__getHeaderAndParentIds$$($JSCompiler_StaticMethods__setAriaProperties$self$$, $element$$25$$, $axis$$inline_967_direction$$inline_957_previousElement$$inline_956$$), $axis$$inline_967_direction$$inline_957_previousElement$$inline_956$$ = $element$$25$$.getAttribute($JSCompiler_StaticMethods__setAriaProperties$self$$.$m_resources$.getMappedAttribute("sortDir")), "ascending" === $axis$$inline_967_direction$$inline_957_previousElement$$inline_956$$ ? ($columnHeader$$inline_960_key$$inline_958_level$$inline_969$$ = 
  "accessibleSortAscending", $label$$3_label$$inline_955_rowHeader$$inline_959$$ = $label$$3_label$$inline_955_rowHeader$$inline_959$$ + " " + $JSCompiler_StaticMethods_createSubId$$($JSCompiler_StaticMethods__setAriaProperties$self$$, "state")) : "descending" === $axis$$inline_967_direction$$inline_957_previousElement$$inline_956$$ && ($columnHeader$$inline_960_key$$inline_958_level$$inline_969$$ = "accessibleSortDescending", $label$$3_label$$inline_955_rowHeader$$inline_959$$ = $label$$3_label$$inline_955_rowHeader$$inline_959$$ + 
  " " + $JSCompiler_StaticMethods_createSubId$$($JSCompiler_StaticMethods__setAriaProperties$self$$, "state")), !0 === $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_externalFocus$ && ($label$$3_label$$inline_955_rowHeader$$inline_959$$ = [$JSCompiler_StaticMethods_createSubId$$($JSCompiler_StaticMethods__setAriaProperties$self$$, "summary"), $label$$3_label$$inline_955_rowHeader$$inline_959$$].join(" "), $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_externalFocus$ = !1), null != 
  $columnHeader$$inline_960_key$$inline_958_level$$inline_969$$ && $JSCompiler_StaticMethods__updateStateInfo$$($JSCompiler_StaticMethods__setAriaProperties$self$$, $columnHeader$$inline_960_key$$inline_958_level$$inline_969$$, {id:""}), $element$$25$$.setAttribute("tabIndex", 0)) : (null != $prevActiveObject$$2$$ && ("header" === $prevActiveObject$$2$$.type ? ($contextObj$$inline_970_previousRowIndex$$inline_961$$ = "row" === $prevActiveObject$$2$$.axis ? $prevActiveObject$$2$$.index : null, $index$$inline_968_previousColumnIndex$$inline_962$$ = 
  "column" === $prevActiveObject$$2$$.axis ? $prevActiveObject$$2$$.index : null) : ($contextObj$$inline_970_previousRowIndex$$inline_961$$ = $prevActiveObject$$2$$.indexes.row, $index$$inline_968_previousColumnIndex$$inline_962$$ = $prevActiveObject$$2$$.indexes.column)), -1 == $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_endRowHeader$ || $activeObject$$5$$.indexes.row == $contextObj$$inline_970_previousRowIndex$$inline_961$$ && !$JSCompiler_StaticMethods__setAriaProperties$self$$.$m_externalFocus$ || 
  ($label$$3_label$$inline_955_rowHeader$$inline_959$$ = $JSCompiler_StaticMethods_getHeaderFromCell$$($JSCompiler_StaticMethods__setAriaProperties$self$$, $element$$25$$, "row"), null != $contextObj$$inline_970_previousRowIndex$$inline_961$$ && ($axis$$inline_967_direction$$inline_957_previousElement$$inline_956$$ = $JSCompiler_StaticMethods__getRowHeaderByIndex$$($JSCompiler_StaticMethods__setAriaProperties$self$$, $contextObj$$inline_970_previousRowIndex$$inline_961$$, $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_rowHeaderLevelCount$ - 
  1)), $label$$3_label$$inline_955_rowHeader$$inline_959$$ = $JSCompiler_StaticMethods__getHeaderAndParentIds$$($JSCompiler_StaticMethods__setAriaProperties$self$$, $label$$3_label$$inline_955_rowHeader$$inline_959$$, $axis$$inline_967_direction$$inline_957_previousElement$$inline_956$$)), -1 == $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_endColHeader$ || $activeObject$$5$$.indexes.column == $index$$inline_968_previousColumnIndex$$inline_962$$ && !$JSCompiler_StaticMethods__setAriaProperties$self$$.$m_externalFocus$ || 
  ($columnHeader$$inline_960_key$$inline_958_level$$inline_969$$ = $JSCompiler_StaticMethods_getHeaderFromCell$$($JSCompiler_StaticMethods__setAriaProperties$self$$, $element$$25$$, "column"), null != $index$$inline_968_previousColumnIndex$$inline_962$$ && ($axis$$inline_967_direction$$inline_957_previousElement$$inline_956$$ = $JSCompiler_StaticMethods__getColumnHeaderByIndex$$($JSCompiler_StaticMethods__setAriaProperties$self$$, $index$$inline_968_previousColumnIndex$$inline_962$$, $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_columnHeaderLevelCount$ - 
  1)), $label$$3_label$$inline_955_rowHeader$$inline_959$$ = "" == $label$$3_label$$inline_955_rowHeader$$inline_959$$ ? $JSCompiler_StaticMethods__getHeaderAndParentIds$$($JSCompiler_StaticMethods__setAriaProperties$self$$, $columnHeader$$inline_960_key$$inline_958_level$$inline_969$$, $axis$$inline_967_direction$$inline_957_previousElement$$inline_956$$) : [$label$$3_label$$inline_955_rowHeader$$inline_959$$, $JSCompiler_StaticMethods__getHeaderAndParentIds$$($JSCompiler_StaticMethods__setAriaProperties$self$$, 
  $columnHeader$$inline_960_key$$inline_958_level$$inline_969$$, $axis$$inline_967_direction$$inline_957_previousElement$$inline_956$$)].join(" ")), $label$$3_label$$inline_955_rowHeader$$inline_959$$ = "" == $label$$3_label$$inline_955_rowHeader$$inline_959$$ ? $element$$25$$.id : [$label$$3_label$$inline_955_rowHeader$$inline_959$$, $element$$25$$.id].join(" "), $label$$3_label$$inline_955_rowHeader$$inline_959$$ = [$JSCompiler_StaticMethods_createSubId$$($JSCompiler_StaticMethods__setAriaProperties$self$$, 
  "context"), $label$$3_label$$inline_955_rowHeader$$inline_959$$, $JSCompiler_StaticMethods_createSubId$$($JSCompiler_StaticMethods__setAriaProperties$self$$, "state")].join(" "), $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_externalFocus$ && ($label$$3_label$$inline_955_rowHeader$$inline_959$$ = [$JSCompiler_StaticMethods_createSubId$$($JSCompiler_StaticMethods__setAriaProperties$self$$, "summary"), $label$$3_label$$inline_955_rowHeader$$inline_959$$].join(" "), $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_externalFocus$ = 
  !1));
  var $skip$$inline_971$$;
  if ("header" === $activeObject$$5$$.type) {
    $axis$$inline_967_direction$$inline_957_previousElement$$inline_956$$ = $activeObject$$5$$.axis;
    $index$$inline_968_previousColumnIndex$$inline_962$$ = $activeObject$$5$$.index;
    $columnHeader$$inline_960_key$$inline_958_level$$inline_969$$ = $activeObject$$5$$.level;
    $contextObj$$inline_970_previousRowIndex$$inline_961$$ = {};
    if ("row" === $activeObject$$5$$.axis) {
      if (1 < $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_rowHeaderLevelCount$ && (null == $prevActiveObject$$2$$ || $columnHeader$$inline_960_key$$inline_958_level$$inline_969$$ !== $prevActiveObject$$2$$.level || $axis$$inline_967_direction$$inline_957_previousElement$$inline_956$$ !== $prevActiveObject$$2$$.axis) && ($contextObj$$inline_970_previousRowIndex$$inline_961$$.level = $columnHeader$$inline_960_key$$inline_958_level$$inline_969$$), null == $prevActiveObject$$2$$ || $index$$inline_968_previousColumnIndex$$inline_962$$ !== 
      $prevActiveObject$$2$$.index || $axis$$inline_967_direction$$inline_957_previousElement$$inline_956$$ !== $prevActiveObject$$2$$.axis) {
        $contextObj$$inline_970_previousRowIndex$$inline_961$$.rowHeader = $index$$inline_968_previousColumnIndex$$inline_962$$;
      }
    } else {
      if (1 < $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_columnHeaderLevelCount$ && (null == $prevActiveObject$$2$$ || $columnHeader$$inline_960_key$$inline_958_level$$inline_969$$ !== $prevActiveObject$$2$$.level || $axis$$inline_967_direction$$inline_957_previousElement$$inline_956$$ !== $prevActiveObject$$2$$.axis) && ($contextObj$$inline_970_previousRowIndex$$inline_961$$.level = $columnHeader$$inline_960_key$$inline_958_level$$inline_969$$), null == $prevActiveObject$$2$$ || $index$$inline_968_previousColumnIndex$$inline_962$$ !== 
      $prevActiveObject$$2$$.index || $axis$$inline_967_direction$$inline_957_previousElement$$inline_956$$ !== $prevActiveObject$$2$$.axis) {
        $contextObj$$inline_970_previousRowIndex$$inline_961$$.columnHeader = $index$$inline_968_previousColumnIndex$$inline_962$$;
      }
    }
    $JSCompiler_StaticMethods__updateContextInfo$$($JSCompiler_StaticMethods__setAriaProperties$self$$, $contextObj$$inline_970_previousRowIndex$$inline_961$$, $skip$$inline_971$$);
  } else {
    null == $prevActiveObject$$2$$ || "cell" != $prevActiveObject$$2$$.type || null == $activeObject$$5$$ || $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_externalFocus$ || ($activeObject$$5$$.indexes.row === $prevActiveObject$$2$$.indexes.row ? $skip$$inline_971$$ = "row" : $activeObject$$5$$.indexes.column === $prevActiveObject$$2$$.indexes.column && ($skip$$inline_971$$ = "column")), $JSCompiler_StaticMethods__updateContextInfo$$($JSCompiler_StaticMethods__setAriaProperties$self$$, $activeObject$$5$$.indexes, 
    $skip$$inline_971$$);
  }
  $element$$25$$.setAttribute("tabIndex", 0);
  $element$$25$$.setAttribute("aria-labelledby", $label$$3_label$$inline_955_rowHeader$$inline_959$$);
  null != $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_cellToFocus$ && $JSCompiler_StaticMethods__setAriaProperties$self$$.$m_cellToFocus$ == $element$$25$$ || $element$$25$$.focus();
}, $JSCompiler_StaticMethods__unsetAriaProperties$$ = function $$JSCompiler_StaticMethods__unsetAriaProperties$$$($element$$26$$) {
  null != $element$$26$$ && ($element$$26$$.setAttribute("tabIndex", -1), $element$$26$$.removeAttribute("aria-labelledby"));
}, $JSCompiler_StaticMethods_getHeaderFromCell$$ = function $$JSCompiler_StaticMethods_getHeaderFromCell$$$($JSCompiler_StaticMethods_getHeaderFromCell$self$$, $cell$$9_colIndex_row$$29_rowIndex$$7$$, $axis$$21$$) {
  if ("row" === $axis$$21$$) {
    if (null != $JSCompiler_StaticMethods_getHeaderFromCell$self$$.$m_rowHeader$ && ($cell$$9_colIndex_row$$29_rowIndex$$7$$ = $cell$$9_colIndex_row$$29_rowIndex$$7$$.parentNode, $cell$$9_colIndex_row$$29_rowIndex$$7$$ = $JSCompiler_StaticMethods_findIndexOf$$($cell$$9_colIndex_row$$29_rowIndex$$7$$) + $JSCompiler_StaticMethods_getHeaderFromCell$self$$.$m_startRow$, -1 < $cell$$9_colIndex_row$$29_rowIndex$$7$$)) {
      return $JSCompiler_StaticMethods__getRowHeaderByIndex$$($JSCompiler_StaticMethods_getHeaderFromCell$self$$, $cell$$9_colIndex_row$$29_rowIndex$$7$$, $JSCompiler_StaticMethods_getHeaderFromCell$self$$.$m_rowHeaderLevelCount$ - 1);
    }
  } else {
    if ("column" === $axis$$21$$ && null != $JSCompiler_StaticMethods_getHeaderFromCell$self$$.$m_colHeader$ && ($cell$$9_colIndex_row$$29_rowIndex$$7$$ = $JSCompiler_StaticMethods_findIndexOf$$($cell$$9_colIndex_row$$29_rowIndex$$7$$) + $JSCompiler_StaticMethods_getHeaderFromCell$self$$.$m_startCol$, -1 < $cell$$9_colIndex_row$$29_rowIndex$$7$$)) {
      return $JSCompiler_StaticMethods__getColumnHeaderByIndex$$($JSCompiler_StaticMethods_getHeaderFromCell$self$$, $cell$$9_colIndex_row$$29_rowIndex$$7$$, $JSCompiler_StaticMethods_getHeaderFromCell$self$$.$m_columnHeaderLevelCount$ - 1);
    }
  }
  return null;
}, $JSCompiler_StaticMethods_findIndexOf$$ = function $$JSCompiler_StaticMethods_findIndexOf$$$($elem$$17$$) {
  var $child$$1$$, $children$$, $index$$69$$, $i$$36$$;
  $children$$ = $elem$$17$$.parentNode.childNodes;
  $index$$69$$ = -1;
  for ($i$$36$$ = 0;$i$$36$$ < $children$$.length;$i$$36$$ += 1) {
    $child$$1$$ = $children$$[$i$$36$$];
    if ($child$$1$$ === $elem$$17$$) {
      return $index$$69$$ + 1;
    }
    "DIV" == $child$$1$$.nodeName && $index$$69$$++;
  }
  return $index$$69$$;
};
$DvtDataGrid$$.prototype.createRange = function $$DvtDataGrid$$$$createRange$($startIndex$$, $endColumn_endIndex$$, $startKey$$, $endKey$$) {
  var $startRow$$3$$, $endRow$$, $startColumn$$, $startRowKey$$1$$, $endRowKey$$1$$, $startColumnKey$$, $endColumnKey$$;
  $endColumn_endIndex$$ && ($startIndex$$.row < $endColumn_endIndex$$.row || -1 == $endColumn_endIndex$$.row ? ($startRow$$3$$ = $startIndex$$.row, $endRow$$ = $endColumn_endIndex$$.row, $startKey$$ && ($startRowKey$$1$$ = $startKey$$.row, $endRowKey$$1$$ = $endKey$$.row)) : ($startRow$$3$$ = $endColumn_endIndex$$.row, $endRow$$ = $startIndex$$.row, $startKey$$ && ($startRowKey$$1$$ = $endKey$$.row, $endRowKey$$1$$ = $startKey$$.row)), (0,window.isNaN)($startIndex$$.column) || (0,window.isNaN)($endColumn_endIndex$$.column) ? 
  ($startIndex$$ = {row:$startRow$$3$$}, $endColumn_endIndex$$ = {row:$endRow$$}) : ($startIndex$$.column < $endColumn_endIndex$$.column || -1 == $endColumn_endIndex$$.column ? ($startColumn$$ = $startIndex$$.column, $endColumn_endIndex$$ = $endColumn_endIndex$$.column, $startKey$$ && ($startColumnKey$$ = $startKey$$.column, $endColumnKey$$ = $endKey$$.column)) : ($startColumn$$ = $endColumn_endIndex$$.column, $endColumn_endIndex$$ = $startIndex$$.column, $startKey$$ && ($startColumnKey$$ = $endKey$$.column, 
  $endColumnKey$$ = $startKey$$.column)), $startIndex$$ = {row:$startRow$$3$$, column:$startColumn$$}, $endColumn_endIndex$$ = {row:$endRow$$, column:$endColumn_endIndex$$}), $startKey$$ && ($startKey$$ = {row:$startRowKey$$1$$, column:$startColumnKey$$}, $endKey$$ = {row:$endRowKey$$1$$, column:$endColumnKey$$}));
  return $startKey$$ ? {startIndex:$startIndex$$, endIndex:$endColumn_endIndex$$, startKey:$startKey$$, endKey:$endKey$$} : {startIndex:$startIndex$$, endIndex:$endColumn_endIndex$$};
};
$DvtDataGrid$$.prototype.$_createRangeStartKeyCallback$ = function $$DvtDataGrid$$$$$_createRangeStartKeyCallback$$($endIndex$$2$$, $callback$$30$$, $startKey$$1$$, $startIndex$$2$$) {
  $endIndex$$2$$ === $startIndex$$2$$ ? this.$_createRangeEndKeyCallback$($startKey$$1$$, $startIndex$$2$$, $callback$$30$$, $startKey$$1$$, $startIndex$$2$$) : $endIndex$$2$$ ? $JSCompiler_StaticMethods__keys$$(this, $endIndex$$2$$, this.$_createRangeEndKeyCallback$.bind(this, $startKey$$1$$, $startIndex$$2$$, $callback$$30$$)) : $callback$$30$$.call(this, {startIndex:$startIndex$$2$$, endIndex:$startIndex$$2$$, startKey:$startKey$$1$$, endKey:$startKey$$1$$});
};
$DvtDataGrid$$.prototype.$_createRangeEndKeyCallback$ = function $$DvtDataGrid$$$$$_createRangeEndKeyCallback$$($startKey$$2$$, $startIndex$$3$$, $callback$$31$$, $endKey$$1$$, $endIndex$$3$$) {
  $callback$$31$$.call(this, this.createRange($startIndex$$3$$, $endIndex$$3$$, $startKey$$2$$, $endKey$$1$$));
};
$DvtDataGrid$$.prototype.$getEndIndex$ = function $$DvtDataGrid$$$$$getEndIndex$$($range$$6$$) {
  return null == $range$$6$$.endIndex ? $range$$6$$.startIndex : $range$$6$$.endIndex;
};
var $JSCompiler_StaticMethods_getElementsInRange$$ = function $$JSCompiler_StaticMethods_getElementsInRange$$$($JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$, $range$$7_rangeEndRow$$, $nodes$$1_startRow$$4$$, $endRow$$1_rows$$6$$) {
  var $j$$8_startIndex$$4$$, $cell$$10_endIndex$$4$$, $columns$$2_rangeStartRow$$, $rangeStartColumn_row$$30$$, $rangeEndColumn$$;
  void 0 == $nodes$$1_startRow$$4$$ && ($nodes$$1_startRow$$4$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$.$m_startRow$);
  void 0 == $endRow$$1_rows$$6$$ && ($endRow$$1_rows$$6$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$.$m_endRow$ + 1);
  $j$$8_startIndex$$4$$ = $range$$7_rangeEndRow$$.startIndex;
  $cell$$10_endIndex$$4$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$.$getEndIndex$($range$$7_rangeEndRow$$);
  $columns$$2_rangeStartRow$$ = $j$$8_startIndex$$4$$.row;
  $range$$7_rangeEndRow$$ = $cell$$10_endIndex$$4$$.row;
  -1 == $range$$7_rangeEndRow$$ && ($range$$7_rangeEndRow$$ = Number.MAX_VALUE);
  if ($endRow$$1_rows$$6$$ < $columns$$2_rangeStartRow$$ || $range$$7_rangeEndRow$$ < $nodes$$1_startRow$$4$$ || !(0,window.isNaN)($j$$8_startIndex$$4$$.column) && !(0,window.isNaN)($cell$$10_endIndex$$4$$.column) && ($rangeStartColumn_row$$30$$ = $j$$8_startIndex$$4$$.column, $rangeEndColumn$$ = $cell$$10_endIndex$$4$$.column, -1 == $rangeEndColumn$$ && ($rangeEndColumn$$ = Number.MAX_VALUE), $JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$.$m_endCol$ + 1 < $rangeStartColumn_row$$30$$ || 
  $rangeEndColumn$$ < $JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$.$m_startCol$)) {
    return null;
  }
  $nodes$$1_startRow$$4$$ = [];
  $endRow$$1_rows$$6$$ = $JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$.$m_databody$.firstChild.childNodes;
  $columns$$2_rangeStartRow$$ = Math.max(0, $columns$$2_rangeStartRow$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$.$m_startRow$);
  $range$$7_rangeEndRow$$ = Math.min($endRow$$1_rows$$6$$.length, $range$$7_rangeEndRow$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$.$m_startRow$ + 1);
  if ((0,window.isNaN)($rangeStartColumn_row$$30$$) || (0,window.isNaN)($rangeEndColumn$$)) {
    for ($JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$ = $columns$$2_rangeStartRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$ < $range$$7_rangeEndRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$ += 1) {
      $rangeStartColumn_row$$30$$ = $endRow$$1_rows$$6$$[$JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$], $nodes$$1_startRow$$4$$.push($rangeStartColumn_row$$30$$);
    }
  } else {
    for ($rangeStartColumn_row$$30$$ = Math.max(0, $rangeStartColumn_row$$30$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$.$m_startCol$), $rangeEndColumn$$ = $rangeEndColumn$$ - $JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$.$m_startCol$ + 1, $JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$ = $columns$$2_rangeStartRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$ < $range$$7_rangeEndRow$$;$JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$ += 
    1) {
      for ($columns$$2_rangeStartRow$$ = $endRow$$1_rows$$6$$[$JSCompiler_StaticMethods_getElementsInRange$self_i$$37$$].childNodes, $j$$8_startIndex$$4$$ = $rangeStartColumn_row$$30$$;$j$$8_startIndex$$4$$ < Math.min($columns$$2_rangeStartRow$$.length, $rangeEndColumn$$);$j$$8_startIndex$$4$$ += 1) {
        $cell$$10_endIndex$$4$$ = $columns$$2_rangeStartRow$$[$j$$8_startIndex$$4$$], $nodes$$1_startRow$$4$$.push($cell$$10_endIndex$$4$$);
      }
    }
  }
  return $nodes$$1_startRow$$4$$;
}, $JSCompiler_StaticMethods_isReadCurrentContent$$ = function $$JSCompiler_StaticMethods_isReadCurrentContent$$$($JSCompiler_StaticMethods_isReadCurrentContent$self$$, $event$$42$$) {
  return $event$$42$$.altKey && $JSCompiler_StaticMethods_ctrlEquivalent$$($JSCompiler_StaticMethods_isReadCurrentContent$self$$.$m_utils$, $event$$42$$) && 53 === $event$$42$$.keyCode;
}, $JSCompiler_StaticMethods_readCurrentContent$$ = function $$JSCompiler_StaticMethods_readCurrentContent$$$($JSCompiler_StaticMethods_readCurrentContent$self$$) {
  var $cell$$11_current$$1_currentCell_range$$8$$, $subid$$, $needToModify$$, $labelledBy$$;
  if (null == $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_active$) {
    return!1;
  }
  if ("header" == $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_active$.type) {
    $cell$$11_current$$1_currentCell_range$$8$$ = {}, "row" === $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_active$.axis ? (1 < $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_rowHeaderLevelCount$ && ($cell$$11_current$$1_currentCell_range$$8$$.level = $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_active$.level), $cell$$11_current$$1_currentCell_range$$8$$.rowHeader = $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_active$.index) : (1 < $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_columnHeaderLevelCount$ && 
    ($cell$$11_current$$1_currentCell_range$$8$$.level = $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_active$.level), $cell$$11_current$$1_currentCell_range$$8$$.columnHeader = $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_active$.index), $cell$$11_current$$1_currentCell_range$$8$$ = $JSCompiler_StaticMethods__getActiveElement$$($JSCompiler_StaticMethods_readCurrentContent$self$$);
  } else {
    $cell$$11_current$$1_currentCell_range$$8$$ = $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_active$.indexes;
    $JSCompiler_StaticMethods__isSelectionEnabled$$($JSCompiler_StaticMethods_readCurrentContent$self$$) && $JSCompiler_StaticMethods_isMultipleSelection$$($JSCompiler_StaticMethods_readCurrentContent$self$$) && null != $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_selectionFrontier$ && ($cell$$11_current$$1_currentCell_range$$8$$ = $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_selectionFrontier$);
    if (null == $cell$$11_current$$1_currentCell_range$$8$$) {
      return!1;
    }
    $cell$$11_current$$1_currentCell_range$$8$$ = $JSCompiler_StaticMethods_readCurrentContent$self$$.createRange($cell$$11_current$$1_currentCell_range$$8$$);
    $cell$$11_current$$1_currentCell_range$$8$$ = $JSCompiler_StaticMethods_getElementsInRange$$($JSCompiler_StaticMethods_readCurrentContent$self$$, $cell$$11_current$$1_currentCell_range$$8$$);
    if (null == $cell$$11_current$$1_currentCell_range$$8$$ || 0 == $cell$$11_current$$1_currentCell_range$$8$$.length) {
      return!1;
    }
    $cell$$11_current$$1_currentCell_range$$8$$ = $cell$$11_current$$1_currentCell_range$$8$$[0];
  }
  $JSCompiler_StaticMethods__setAriaProperties$$($JSCompiler_StaticMethods_readCurrentContent$self$$, $JSCompiler_StaticMethods__createActiveObject$$($JSCompiler_StaticMethods_readCurrentContent$self$$, $cell$$11_current$$1_currentCell_range$$8$$), null, $cell$$11_current$$1_currentCell_range$$8$$);
  $subid$$ = $JSCompiler_StaticMethods_createSubId$$($JSCompiler_StaticMethods_readCurrentContent$self$$, "placeHolder");
  $needToModify$$ = !0;
  $labelledBy$$ = $cell$$11_current$$1_currentCell_range$$8$$.getAttribute("aria-labelledby");
  null != $labelledBy$$ && -1 != $labelledBy$$.indexOf($subid$$) && ($needToModify$$ = !1);
  $needToModify$$ ? ($JSCompiler_StaticMethods_readCurrentContent$self$$.$m_placeHolder$.textContent = "\x26nbsp", $labelledBy$$ = $cell$$11_current$$1_currentCell_range$$8$$.getAttribute("aria-labelledby"), $cell$$11_current$$1_currentCell_range$$8$$.setAttribute("aria-labelledby", $labelledBy$$ + " " + $subid$$)) : $JSCompiler_StaticMethods_readCurrentContent$self$$.$m_utils$.empty($JSCompiler_StaticMethods_readCurrentContent$self$$.$m_placeHolder$);
  $cell$$11_current$$1_currentCell_range$$8$$.focus();
  return!0;
}, $JSCompiler_StaticMethods__handleActionableModeKeyDown$$ = function $$JSCompiler_StaticMethods__handleActionableModeKeyDown$$$($JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$, $event$$43$$, $element$$28$$, $isHeader$$) {
  var $keyCode$$, $target$$43$$, $shiftKey$$2$$, $ctrlKey$$2_tagName$$inline_975$$;
  $keyCode$$ = $event$$43$$.keyCode;
  $shiftKey$$2$$ = $event$$43$$.shiftKey;
  $ctrlKey$$2_tagName$$inline_975$$ = $JSCompiler_StaticMethods_ctrlEquivalent$$($JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$.$m_utils$, $event$$43$$);
  $target$$43$$ = $event$$43$$.target;
  if (27 == $keyCode$$) {
    return $JSCompiler_StaticMethods__exitActionableMode$$($JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$), $JSCompiler_StaticMethods__highlightActive$$($JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$), !0;
  }
  if (9 === $keyCode$$) {
    $JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$ = $JSCompiler_StaticMethods_getFocusableElementsInNode$$($JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$, $element$$28$$);
    if (0 < $JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$.length && $event$$43$$.target == $JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$[$JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$.length - 1]) {
      return $JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$[0].focus(), !0;
    }
    if (0 < $JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$.length && $event$$43$$.target == $JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$[0] && $shiftKey$$2$$) {
      return $JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$[$JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$.length - 1].focus(), !0;
    }
  } else {
    if ($JSCompiler_StaticMethods_isNavigationKey$$($keyCode$$) && !$ctrlKey$$2_tagName$$inline_975$$) {
      $ctrlKey$$2_tagName$$inline_975$$ = $target$$43$$.tagName;
      if ("INPUT" === $ctrlKey$$2_tagName$$inline_975$$ || "TEXTAREA" === $ctrlKey$$2_tagName$$inline_975$$ || "SELECT" === $ctrlKey$$2_tagName$$inline_975$$ || "BUTTON" === $ctrlKey$$2_tagName$$inline_975$$ || "A" === $ctrlKey$$2_tagName$$inline_975$$ || null != $target$$43$$.getAttribute("tabIndex") && 0 <= (0,window.parseInt)($target$$43$$.getAttribute("tabIndex"), 10) && $JSCompiler_StaticMethods_findCell$$($JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$, $target$$43$$) != 
      $target$$43$$) {
        return!1;
      }
      0 < $JSCompiler_StaticMethods_getFocusableElementsInNode$$($JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$, $element$$28$$).length || $JSCompiler_StaticMethods__exitActionableMode$$($JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$);
      if ($isHeader$$) {
        return $JSCompiler_StaticMethods_handleHeaderArrowKeys$$($JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$, $keyCode$$, $event$$43$$);
      }
      $JSCompiler_StaticMethods__isSelectionEnabled$$($JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$) && $JSCompiler_StaticMethods__updateStateInfo$$($JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$, "accessibleStateSelected");
      return $JSCompiler_StaticMethods_handleCellArrowKeys$$($JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$, $keyCode$$, $shiftKey$$2$$ && $JSCompiler_StaticMethods_isMultipleSelection$$($JSCompiler_StaticMethods__handleActionableModeKeyDown$self_focusElems$$2$$), $event$$43$$);
    }
  }
  return!1;
}, $JSCompiler_StaticMethods__enterActionableMode$$ = function $$JSCompiler_StaticMethods__enterActionableMode$$$($JSCompiler_StaticMethods__enterActionableMode$self$$, $element$$29$$) {
  var $JSCompiler_inline_result$$57_elems$$inline_979_focusElems$$inline_983$$;
  $JSCompiler_inline_result$$57_elems$$inline_979_focusElems$$inline_983$$ = $JSCompiler_StaticMethods_getFocusableElementsInNode$$($JSCompiler_StaticMethods__enterActionableMode$self$$, $element$$29$$, !0);
  0 < $JSCompiler_inline_result$$57_elems$$inline_979_focusElems$$inline_983$$.length ? ($JSCompiler_inline_result$$57_elems$$inline_979_focusElems$$inline_983$$[0].focus(), $JSCompiler_inline_result$$57_elems$$inline_979_focusElems$$inline_983$$ = !0) : $JSCompiler_inline_result$$57_elems$$inline_979_focusElems$$inline_983$$ = !1;
  if ($JSCompiler_inline_result$$57_elems$$inline_979_focusElems$$inline_983$$) {
    $JSCompiler_StaticMethods_setActionableMode$$($JSCompiler_StaticMethods__enterActionableMode$self$$, !0);
    var $i$$inline_984$$, $tabIndex$$inline_985$$, $attr$$inline_986$$;
    $attr$$inline_986$$ = $JSCompiler_StaticMethods__enterActionableMode$self$$.$m_resources$.getMappedAttribute("tabMod");
    $JSCompiler_inline_result$$57_elems$$inline_979_focusElems$$inline_983$$ = $JSCompiler_StaticMethods_getFocusableElementsInNode$$($JSCompiler_StaticMethods__enterActionableMode$self$$, $element$$29$$, !1);
    for ($i$$inline_984$$ = 0;$i$$inline_984$$ < $JSCompiler_inline_result$$57_elems$$inline_979_focusElems$$inline_983$$.length;$i$$inline_984$$++) {
      $tabIndex$$inline_985$$ = (0,window.parseInt)($JSCompiler_inline_result$$57_elems$$inline_979_focusElems$$inline_983$$[$i$$inline_984$$].getAttribute($attr$$inline_986$$), 10), $JSCompiler_inline_result$$57_elems$$inline_979_focusElems$$inline_983$$[$i$$inline_984$$].removeAttribute($attr$$inline_986$$), -1 == $tabIndex$$inline_985$$ ? $JSCompiler_inline_result$$57_elems$$inline_979_focusElems$$inline_983$$[$i$$inline_984$$].removeAttribute("tabIndex") : $JSCompiler_inline_result$$57_elems$$inline_979_focusElems$$inline_983$$[$i$$inline_984$$].setAttribute("tabIndex", 
      $tabIndex$$inline_985$$);
    }
  }
  return!1;
}, $JSCompiler_StaticMethods__exitActionableMode$$ = function $$JSCompiler_StaticMethods__exitActionableMode$$$($JSCompiler_StaticMethods__exitActionableMode$self$$) {
  var $elem$$18$$;
  $JSCompiler_StaticMethods_isActionableMode$$($JSCompiler_StaticMethods__exitActionableMode$self$$) && ($elem$$18$$ = $JSCompiler_StaticMethods__getActiveElement$$($JSCompiler_StaticMethods__exitActionableMode$self$$), $JSCompiler_StaticMethods_setActionableMode$$($JSCompiler_StaticMethods__exitActionableMode$self$$, !1), $JSCompiler_StaticMethods__disableAllFocusableElements$$($JSCompiler_StaticMethods__exitActionableMode$self$$, $elem$$18$$));
}, $JSCompiler_StaticMethods_isNavigationKey$$ = function $$JSCompiler_StaticMethods_isNavigationKey$$$($keyCode$$2$$) {
  return 38 == $keyCode$$2$$ || 40 == $keyCode$$2$$ || 37 == $keyCode$$2$$ || 39 == $keyCode$$2$$ || 36 == $keyCode$$2$$ || 35 == $keyCode$$2$$ || 33 == $keyCode$$2$$ || 34 == $keyCode$$2$$;
};
$DvtDataGrid$$.prototype.createIndex = function $$DvtDataGrid$$$$createIndex$($row$$31$$, $column$$4$$) {
  return null != $row$$31$$ ? null != $column$$4$$ ? {row:$row$$31$$, column:$column$$4$$} : {row:$row$$31$$} : null;
};
var $JSCompiler_StaticMethods_handleHeaderArrowKeys$$ = function $$JSCompiler_StaticMethods_handleHeaderArrowKeys$$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $keyCode$$5$$, $event$$46$$) {
  var $axis$$23_newCellIndex$$1$$, $index$$71_newIndex$$, $level$$24_newLevel$$, $elem$$20_newElement$$, $depth$$2$$;
  if (!$JSCompiler_StaticMethods_isFetchComplete$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$)) {
    return!0;
  }
  $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_resources$.isRTLMode() && (37 == $keyCode$$5$$ ? $keyCode$$5$$ = 39 : 39 == $keyCode$$5$$ && ($keyCode$$5$$ = 37));
  $axis$$23_newCellIndex$$1$$ = $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_active$.axis;
  $index$$71_newIndex$$ = $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_active$.index;
  $level$$24_newLevel$$ = $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_active$.level;
  $elem$$20_newElement$$ = $JSCompiler_StaticMethods__getActiveElement$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$);
  $depth$$2$$ = null != $elem$$20_newElement$$ ? $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$, "depth") : 1;
  switch($keyCode$$5$$) {
    case 37:
      if ("column" === $axis$$23_newCellIndex$$1$$ && 0 < $index$$71_newIndex$$) {
        if (1 === $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_columnHeaderLevelCount$) {
          $index$$71_newIndex$$ -= 1, $elem$$20_newElement$$ = $elem$$20_newElement$$.previousSibling;
        } else {
          if ($elem$$20_newElement$$ = $JSCompiler_StaticMethods__getColumnHeaderByIndex$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $index$$71_newIndex$$ - 1, $level$$24_newLevel$$), $index$$71_newIndex$$ = null != $elem$$20_newElement$$ ? $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$.parentNode, "start") : $index$$71_newIndex$$ - 1, $level$$24_newLevel$$ = null != $elem$$20_newElement$$ ? $JSCompiler_StaticMethods_getHeaderCellLevel$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, 
          $elem$$20_newElement$$) : $level$$24_newLevel$$, 0 > $index$$71_newIndex$$) {
            break;
          }
        }
        $JSCompiler_StaticMethods_scrollToHeader$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, {axis:$axis$$23_newCellIndex$$1$$, index:$index$$71_newIndex$$, $level$:$level$$24_newLevel$$});
        $JSCompiler_StaticMethods__setActive$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$, $event$$46$$);
      } else {
        "row" === $axis$$23_newCellIndex$$1$$ && 0 < $level$$24_newLevel$$ && ($elem$$20_newElement$$ = $JSCompiler_StaticMethods__getRowHeaderByIndex$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $index$$71_newIndex$$, $level$$24_newLevel$$ - 1), $index$$71_newIndex$$ = $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$.parentNode, "start"), $level$$24_newLevel$$ = $JSCompiler_StaticMethods_getHeaderCellLevel$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, 
        $elem$$20_newElement$$), $JSCompiler_StaticMethods_scrollToHeader$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, {axis:$axis$$23_newCellIndex$$1$$, index:$index$$71_newIndex$$, $level$:$level$$24_newLevel$$}), $JSCompiler_StaticMethods__setActive$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$, $event$$46$$));
      }
      break;
    case 39:
      "row" === $axis$$23_newCellIndex$$1$$ ? $level$$24_newLevel$$ + $depth$$2$$ >= $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_rowHeaderLevelCount$ ? ($axis$$23_newCellIndex$$1$$ = $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.createIndex($index$$71_newIndex$$, 0), $JSCompiler_StaticMethods__isSelectionEnabled$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$) ? $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$selectAndFocus$($axis$$23_newCellIndex$$1$$, $event$$46$$) : 
      $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$_setActiveByIndex$($axis$$23_newCellIndex$$1$$, $event$$46$$)) : ($elem$$20_newElement$$ = $JSCompiler_StaticMethods__getRowHeaderByIndex$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $index$$71_newIndex$$, $level$$24_newLevel$$ + $depth$$2$$), $index$$71_newIndex$$ = $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$.parentNode, "start"), $level$$24_newLevel$$ = 
      $JSCompiler_StaticMethods_getHeaderCellLevel$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$), $JSCompiler_StaticMethods_scrollToHeader$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, {axis:$axis$$23_newCellIndex$$1$$, index:$index$$71_newIndex$$, $level$:$level$$24_newLevel$$}), $JSCompiler_StaticMethods__setActive$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$, $event$$46$$)) : (1 === $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_columnHeaderLevelCount$ ? 
      ($index$$71_newIndex$$ += 1, $elem$$20_newElement$$ = $elem$$20_newElement$$.nextSibling) : ($index$$71_newIndex$$ = $level$$24_newLevel$$ === $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_columnHeaderLevelCount$ - 1 ? $index$$71_newIndex$$ + 1 : null != $elem$$20_newElement$$ ? $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$.parentNode, "start") + $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, 
      $elem$$20_newElement$$.parentNode, "extent") : $index$$71_newIndex$$ + 1, $elem$$20_newElement$$ = $JSCompiler_StaticMethods__getColumnHeaderByIndex$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $index$$71_newIndex$$, $level$$24_newLevel$$), $level$$24_newLevel$$ = null != $elem$$20_newElement$$ ? $JSCompiler_StaticMethods_getHeaderCellLevel$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$) : $level$$24_newLevel$$), $index$$71_newIndex$$ > $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_endColHeader$ && 
      $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_stopColumnHeaderFetch$ || !($JSCompiler_StaticMethods__isCountUnknown$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, "column") || $index$$71_newIndex$$ < $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_dataSource$.getCount("column")) || ($JSCompiler_StaticMethods_scrollToHeader$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, {axis:$axis$$23_newCellIndex$$1$$, index:$index$$71_newIndex$$, $level$:$level$$24_newLevel$$}), 
      $JSCompiler_StaticMethods__setActive$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$, $event$$46$$)));
      break;
    case 38:
      if ("row" === $axis$$23_newCellIndex$$1$$ && 0 < $index$$71_newIndex$$) {
        if (1 === $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_rowHeaderLevelCount$) {
          $index$$71_newIndex$$ -= 1, $elem$$20_newElement$$ = $elem$$20_newElement$$.previousSibling;
        } else {
          if ($level$$24_newLevel$$ === $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_rowHeaderLevelCount$ - 1 ? ($index$$71_newIndex$$ -= 1, $elem$$20_newElement$$ = $JSCompiler_StaticMethods__getRowHeaderByIndex$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $index$$71_newIndex$$, $level$$24_newLevel$$)) : ($elem$$20_newElement$$ = $JSCompiler_StaticMethods__getRowHeaderByIndex$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, 
          $elem$$20_newElement$$.parentNode, "start") - 1, $level$$24_newLevel$$), $index$$71_newIndex$$ = null != $elem$$20_newElement$$ ? $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$.parentNode, "start") : $index$$71_newIndex$$ - 1), $level$$24_newLevel$$ = null != $elem$$20_newElement$$ ? $JSCompiler_StaticMethods_getHeaderCellLevel$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$) : $level$$24_newLevel$$, 
          0 > $index$$71_newIndex$$) {
            break;
          }
        }
        $JSCompiler_StaticMethods_scrollToHeader$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, {axis:$axis$$23_newCellIndex$$1$$, index:$index$$71_newIndex$$, $level$:$level$$24_newLevel$$});
        $JSCompiler_StaticMethods__setActive$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$, $event$$46$$);
      } else {
        "column" === $axis$$23_newCellIndex$$1$$ && 0 < $level$$24_newLevel$$ && ($elem$$20_newElement$$ = $JSCompiler_StaticMethods__getColumnHeaderByIndex$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $index$$71_newIndex$$, $level$$24_newLevel$$ - 1), $index$$71_newIndex$$ = $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$.parentNode, "start"), $level$$24_newLevel$$ = $JSCompiler_StaticMethods_getHeaderCellLevel$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, 
        $elem$$20_newElement$$), $JSCompiler_StaticMethods_scrollToHeader$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, {axis:$axis$$23_newCellIndex$$1$$, index:$index$$71_newIndex$$, $level$:$level$$24_newLevel$$}), $JSCompiler_StaticMethods__setActive$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$, $event$$46$$));
      }
      break;
    case 40:
      "column" === $axis$$23_newCellIndex$$1$$ ? $level$$24_newLevel$$ + $depth$$2$$ >= $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_columnHeaderLevelCount$ ? ($axis$$23_newCellIndex$$1$$ = $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.createIndex(0, $index$$71_newIndex$$), $JSCompiler_StaticMethods__isSelectionEnabled$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$) ? $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$selectAndFocus$($axis$$23_newCellIndex$$1$$, 
      $event$$46$$) : $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$_setActiveByIndex$($axis$$23_newCellIndex$$1$$, $event$$46$$)) : ($elem$$20_newElement$$ = $JSCompiler_StaticMethods__getColumnHeaderByIndex$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $index$$71_newIndex$$, $level$$24_newLevel$$ + $depth$$2$$), $index$$71_newIndex$$ = $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$.parentNode, "start"), 
      $level$$24_newLevel$$ = $JSCompiler_StaticMethods_getHeaderCellLevel$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$), $JSCompiler_StaticMethods_scrollToHeader$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, {axis:$axis$$23_newCellIndex$$1$$, index:$index$$71_newIndex$$, $level$:$level$$24_newLevel$$}), $JSCompiler_StaticMethods__setActive$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$, $event$$46$$)) : (1 === $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_rowHeaderLevelCount$ ? 
      ($index$$71_newIndex$$ += 1, $elem$$20_newElement$$ = $elem$$20_newElement$$.nextSibling) : ($index$$71_newIndex$$ = $level$$24_newLevel$$ === $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_rowHeaderLevelCount$ - 1 ? $index$$71_newIndex$$ + 1 : null != $elem$$20_newElement$$ ? $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$.parentNode, "start") + $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, 
      $elem$$20_newElement$$.parentNode, "extent") : $index$$71_newIndex$$ + 1, $elem$$20_newElement$$ = $JSCompiler_StaticMethods__getRowHeaderByIndex$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $index$$71_newIndex$$, $level$$24_newLevel$$), $level$$24_newLevel$$ = null != $elem$$20_newElement$$ ? $JSCompiler_StaticMethods_getHeaderCellLevel$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$) : $level$$24_newLevel$$), $index$$71_newIndex$$ > $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_endRowHeader$ && 
      $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_stopRowHeaderFetch$ || !($JSCompiler_StaticMethods__isCountUnknown$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, "row") || $index$$71_newIndex$$ < $JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$.$m_dataSource$.getCount("row")) || ($JSCompiler_StaticMethods_scrollToHeader$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, {axis:$axis$$23_newCellIndex$$1$$, index:$index$$71_newIndex$$, $level$:$level$$24_newLevel$$}), 
      $JSCompiler_StaticMethods__setActive$$($JSCompiler_StaticMethods_handleHeaderArrowKeys$self$$, $elem$$20_newElement$$, $event$$46$$)));
  }
  return!0;
}, $JSCompiler_StaticMethods__getHeaderAndParentIds$$ = function $$JSCompiler_StaticMethods__getHeaderAndParentIds$$$($JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$38$$, $header$$15_parents$$, $previousHeader$$) {
  var $idString$$ = "", $previousParents$$ = [];
  if (null == $header$$15_parents$$) {
    return "";
  }
  $header$$15_parents$$ = $JSCompiler_StaticMethods__getHeaderAndParents$$($JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$38$$, $header$$15_parents$$);
  null != $previousHeader$$ && ($previousParents$$ = $JSCompiler_StaticMethods__getHeaderAndParents$$($JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$38$$, $previousHeader$$));
  for ($JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$38$$ = 0;$JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$38$$ < $header$$15_parents$$.length;$JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$38$$++) {
    if ($previousParents$$[$JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$38$$] != $header$$15_parents$$[$JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$38$$] || $JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$38$$ === $header$$15_parents$$.length - 1) {
      $idString$$ += " " + $header$$15_parents$$[$JSCompiler_StaticMethods__getHeaderAndParentIds$self_i$$38$$].id;
    }
  }
  return $idString$$;
}, $JSCompiler_StaticMethods__getHeaderAndParents$$ = function $$JSCompiler_StaticMethods__getHeaderAndParents$$$($JSCompiler_StaticMethods__getHeaderAndParents$self$$, $header$$16$$) {
  var $axis$$24_headerLevels$$, $level$$25$$, $headers$$2$$ = [$header$$16$$];
  $axis$$24_headerLevels$$ = $JSCompiler_StaticMethods_getHeaderCellAxis$$($JSCompiler_StaticMethods__getHeaderAndParents$self$$, $header$$16$$);
  $level$$25$$ = $JSCompiler_StaticMethods_getHeaderCellLevel$$($JSCompiler_StaticMethods__getHeaderAndParents$self$$, $header$$16$$);
  $axis$$24_headerLevels$$ = "row" === $axis$$24_headerLevels$$ ? $JSCompiler_StaticMethods__getHeaderAndParents$self$$.$m_rowHeaderLevelCount$ : $JSCompiler_StaticMethods__getHeaderAndParents$self$$.$m_columnHeaderLevelCount$;
  if (1 === $axis$$24_headerLevels$$) {
    return $headers$$2$$;
  }
  $level$$25$$ === $axis$$24_headerLevels$$ - 1 && ($header$$16$$ = $header$$16$$.parentNode.firstChild, $headers$$2$$.unshift($header$$16$$), $level$$25$$ -= 1);
  for (;0 < $level$$25$$;) {
    $header$$16$$ = $header$$16$$.parentNode.parentNode.firstChild, $headers$$2$$.unshift($header$$16$$), $level$$25$$ -= 1;
  }
  return $headers$$2$$;
}, $JSCompiler_StaticMethods_handleCellArrowKeys$$ = function $$JSCompiler_StaticMethods_handleCellArrowKeys$$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$6_newCellIndex$$2$$, $isExtend$$, $event$$47$$) {
  var $currentCellIndex$$, $row$$32$$, $column$$5$$, $focusFunc$$;
  if (!$JSCompiler_StaticMethods_isFetchComplete$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$)) {
    return!0;
  }
  $currentCellIndex$$ = $isExtend$$ ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_selectionFrontier$ : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_active$.indexes;
  if (null != $currentCellIndex$$) {
    $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_resources$.isRTLMode() && (37 == $keyCode$$6_newCellIndex$$2$$ ? $keyCode$$6_newCellIndex$$2$$ = 39 : 39 == $keyCode$$6_newCellIndex$$2$$ && ($keyCode$$6_newCellIndex$$2$$ = 37));
    $focusFunc$$ = $JSCompiler_StaticMethods__isSelectionEnabled$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$) ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$selectAndFocus$.bind($JSCompiler_StaticMethods_handleCellArrowKeys$self$$) : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$_setActiveByIndex$.bind($JSCompiler_StaticMethods_handleCellArrowKeys$self$$);
    $row$$32$$ = $currentCellIndex$$.row;
    $column$$5$$ = $currentCellIndex$$.column;
    switch($keyCode$$6_newCellIndex$$2$$) {
      case 37:
        0 < $column$$5$$ ? "row" == $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_options$.$getSelectionMode$() ? ($keyCode$$6_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_active$.indexes.row, $column$$5$$ - 1), $JSCompiler_StaticMethods_scrollToIndex$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$6_newCellIndex$$2$$, $isExtend$$), $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$_setActiveByIndex$($keyCode$$6_newCellIndex$$2$$, 
        $event$$47$$)) : ($keyCode$$6_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$, $column$$5$$ - 1), $JSCompiler_StaticMethods_scrollToIndex$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$6_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? $JSCompiler_StaticMethods_extendSelection$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$6_newCellIndex$$2$$, $event$$47$$) : $focusFunc$$($keyCode$$6_newCellIndex$$2$$, $event$$47$$), 
        0 === $column$$5$$ - 1 && $JSCompiler_StaticMethods__setAccInfoText$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "accessibleFirstColumn")) : $isExtend$$ || ($JSCompiler_StaticMethods_scrollToHeader$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, {axis:"row", index:$row$$32$$, $level$:$JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_rowHeaderLevelCount$ - 1}), $JSCompiler_StaticMethods__setActive$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $JSCompiler_StaticMethods__getRowHeaderByIndex$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, 
        $row$$32$$, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_rowHeaderLevelCount$ - 1), $event$$47$$, !0));
        break;
      case 39:
        $JSCompiler_StaticMethods__isLastColumn$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $column$$5$$) ? $isExtend$$ || ($focusFunc$$($currentCellIndex$$, $event$$47$$), $JSCompiler_StaticMethods_scrollToIndex$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $currentCellIndex$$)) : "row" == $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_options$.$getSelectionMode$() ? ($keyCode$$6_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_active$.indexes.row, 
        $column$$5$$ + 1), $JSCompiler_StaticMethods_scrollToIndex$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$6_newCellIndex$$2$$, $isExtend$$), $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$_setActiveByIndex$($keyCode$$6_newCellIndex$$2$$, $event$$47$$)) : ($keyCode$$6_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$, $column$$5$$ + 1), $JSCompiler_StaticMethods_scrollToIndex$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, 
        $keyCode$$6_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? $JSCompiler_StaticMethods_extendSelection$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$6_newCellIndex$$2$$, $event$$47$$) : $focusFunc$$($keyCode$$6_newCellIndex$$2$$, $event$$47$$), $JSCompiler_StaticMethods__isLastColumn$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $column$$5$$ + 1) && $JSCompiler_StaticMethods__setAccInfoText$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "accessibleLastColumn"));
        break;
      case 38:
        0 < $row$$32$$ ? ($keyCode$$6_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$ - 1, $column$$5$$), $JSCompiler_StaticMethods_scrollToIndex$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$6_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? $JSCompiler_StaticMethods_extendSelection$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$6_newCellIndex$$2$$, $event$$47$$) : $focusFunc$$($keyCode$$6_newCellIndex$$2$$, $event$$47$$), 
        0 === $row$$32$$ - 1 && $JSCompiler_StaticMethods__setAccInfoText$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "accessibleFirstRow")) : $isExtend$$ || ($JSCompiler_StaticMethods_scrollToHeader$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, {axis:"column", index:$column$$5$$, $level$:$JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_columnHeaderLevelCount$ - 1}), $JSCompiler_StaticMethods__setActive$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $JSCompiler_StaticMethods__getColumnHeaderByIndex$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, 
        $column$$5$$, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_columnHeaderLevelCount$ - 1), $event$$47$$, !0));
        break;
      case 40:
        $JSCompiler_StaticMethods__isLastRow$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $row$$32$$) ? $isExtend$$ || ($focusFunc$$($currentCellIndex$$, $event$$47$$), $JSCompiler_StaticMethods_scrollToIndex$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $currentCellIndex$$)) : ($keyCode$$6_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$ + 1, $column$$5$$), $JSCompiler_StaticMethods_scrollToIndex$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, 
        $keyCode$$6_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? $JSCompiler_StaticMethods_extendSelection$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$6_newCellIndex$$2$$, $event$$47$$) : $focusFunc$$($keyCode$$6_newCellIndex$$2$$, $event$$47$$), $JSCompiler_StaticMethods__isLastRow$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $row$$32$$ + 1) && $JSCompiler_StaticMethods__setAccInfoText$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "accessibleLastRow"));
        break;
      case 36:
        $keyCode$$6_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$, 0);
        $JSCompiler_StaticMethods_scrollToIndex$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$6_newCellIndex$$2$$);
        $focusFunc$$($keyCode$$6_newCellIndex$$2$$, $event$$47$$);
        break;
      case 35:
        $keyCode$$6_newCellIndex$$2$$ = $JSCompiler_StaticMethods__isCountUnknown$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "column") || $JSCompiler_StaticMethods__isHighWatermarkScrolling$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$) ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$, Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_endCol$)) : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex($row$$32$$, Math.max(0, 
        $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_dataSource$.getCount("column") - 1));
        $JSCompiler_StaticMethods_scrollToIndex$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$6_newCellIndex$$2$$);
        $focusFunc$$($keyCode$$6_newCellIndex$$2$$, $event$$47$$);
        break;
      case 33:
        $keyCode$$6_newCellIndex$$2$$ = $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex(0, $column$$5$$);
        $JSCompiler_StaticMethods_scrollToIndex$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$6_newCellIndex$$2$$);
        $focusFunc$$($keyCode$$6_newCellIndex$$2$$, $event$$47$$);
        break;
      case 34:
        $keyCode$$6_newCellIndex$$2$$ = $JSCompiler_StaticMethods__isCountUnknown$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, "column") || $JSCompiler_StaticMethods__isHighWatermarkScrolling$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$) ? $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex(Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_endRow$), $column$$5$$) : $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.createIndex(Math.max(0, $JSCompiler_StaticMethods_handleCellArrowKeys$self$$.$m_dataSource$.getCount("row") - 
        1), $column$$5$$), $JSCompiler_StaticMethods_scrollToIndex$$($JSCompiler_StaticMethods_handleCellArrowKeys$self$$, $keyCode$$6_newCellIndex$$2$$), $focusFunc$$($keyCode$$6_newCellIndex$$2$$, $event$$47$$);
    }
    return!0;
  }
}, $JSCompiler_StaticMethods_scrollToIndex$$ = function $$JSCompiler_StaticMethods_scrollToIndex$$$($JSCompiler_StaticMethods_scrollToIndex$self$$, $cellLeft_index$$72$$, $isExtend$$1$$) {
  var $cellWidth_row$$33$$, $column$$6_viewportLeft$$2$$, $deltaX$$2_scrollLeft$$10$$, $deltaY$$3_scrollTop$$10$$, $databodyContent$$17_viewportTop$$4$$, $rowElem_rowHeight$$1$$, $viewportBottom$$5$$, $rowTop$$1$$, $cell$$13$$, $scrollRows_viewportRight$$3$$;
  $cellWidth_row$$33$$ = $cellLeft_index$$72$$.row;
  $column$$6_viewportLeft$$2$$ = $cellLeft_index$$72$$.column;
  $deltaY$$3_scrollTop$$10$$ = $deltaX$$2_scrollLeft$$10$$ = 0;
  $cellWidth_row$$33$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ || $cellWidth_row$$33$$ > $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_endRow$ ? ($deltaY$$3_scrollTop$$10$$ = $cellWidth_row$$33$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$ ? $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgRowHeight$ * $cellWidth_row$$33$$ : $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgRowHeight$ * ($cellWidth_row$$33$$ + 1) - $JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), 
  $deltaY$$3_scrollTop$$10$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollTop$ - $deltaY$$3_scrollTop$$10$$, $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ = $cellLeft_index$$72$$, $scrollRows_viewportRight$$3$$ = !0) : ($databodyContent$$17_viewportTop$$4$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$.firstChild, $rowElem_rowHeight$$1$$ = $databodyContent$$17_viewportTop$$4$$.childNodes[$cellWidth_row$$33$$ - $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$], 
  $databodyContent$$17_viewportTop$$4$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollTop$, $viewportBottom$$5$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollTop$ + $JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), $rowTop$$1$$ = $JSCompiler_StaticMethods_getElementDir$$($rowElem_rowHeight$$1$$, "top"), $rowElem_rowHeight$$1$$ = $JSCompiler_StaticMethods_calculateRowHeight$$($JSCompiler_StaticMethods_scrollToIndex$self$$, 
  $rowElem_rowHeight$$1$$), $rowTop$$1$$ + $rowElem_rowHeight$$1$$ > $viewportBottom$$5$$ ? $deltaY$$3_scrollTop$$10$$ = $viewportBottom$$5$$ - ($rowTop$$1$$ + $rowElem_rowHeight$$1$$) : $rowTop$$1$$ < $databodyContent$$17_viewportTop$$4$$ && ($deltaY$$3_scrollTop$$10$$ = $databodyContent$$17_viewportTop$$4$$ - $rowTop$$1$$));
  (0,window.isNaN)($column$$6_viewportLeft$$2$$) || !0 == $scrollRows_viewportRight$$3$$ || ($column$$6_viewportLeft$$2$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startCol$ || $column$$6_viewportLeft$$2$$ > $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_endCol$ ? ($deltaX$$2_scrollLeft$$10$$ = $column$$6_viewportLeft$$2$$ < $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startCol$ ? $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgColWidth$ * $column$$6_viewportLeft$$2$$ : $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_avgColWidth$ * 
  ($column$$6_viewportLeft$$2$$ + 1) - $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), $deltaX$$2_scrollLeft$$10$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollLeft$ - $deltaX$$2_scrollLeft$$10$$, $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ = $cellLeft_index$$72$$) : ($databodyContent$$17_viewportTop$$4$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$.firstChild, $rowElem_rowHeight$$1$$ = 
  $databodyContent$$17_viewportTop$$4$$.childNodes[$cellWidth_row$$33$$ - $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startRow$], $cell$$13$$ = $rowElem_rowHeight$$1$$.childNodes[$column$$6_viewportLeft$$2$$ - $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_startCol$], $cellLeft_index$$72$$ = $JSCompiler_StaticMethods_getElementDir$$($cell$$13$$, "left"), $cellWidth_row$$33$$ = $JSCompiler_StaticMethods_getElementWidth$$($cell$$13$$), $column$$6_viewportLeft$$2$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollLeft$, 
  $scrollRows_viewportRight$$3$$ = $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_currentScrollLeft$ + $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_databody$), $cellLeft_index$$72$$ < $column$$6_viewportLeft$$2$$ ? $deltaX$$2_scrollLeft$$10$$ = $column$$6_viewportLeft$$2$$ - $cellLeft_index$$72$$ : $cellLeft_index$$72$$ + $cellWidth_row$$33$$ > $scrollRows_viewportRight$$3$$ && ($deltaX$$2_scrollLeft$$10$$ = $scrollRows_viewportRight$$3$$ - ($cellLeft_index$$72$$ + 
  $cellWidth_row$$33$$))));
  0 != $deltaX$$2_scrollLeft$$10$$ || 0 != $deltaY$$3_scrollTop$$10$$ ? (null != $cell$$13$$ && !0 !== $isExtend$$1$$ && ($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_cellToFocus$ = $cell$$13$$), $JSCompiler_StaticMethods_scrollDelta$$($JSCompiler_StaticMethods_scrollToIndex$self$$, $deltaX$$2_scrollLeft$$10$$, $deltaY$$3_scrollTop$$10$$)) : null != $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ && ($JSCompiler_StaticMethods_scrollToIndex$self$$.$_setActiveByIndex$($JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$), 
  $JSCompiler_StaticMethods_scrollToIndex$self$$.$m_scrollIndexAfterFetch$ = null);
}, $JSCompiler_StaticMethods_scrollToHeader$$ = function $$JSCompiler_StaticMethods_scrollToHeader$$$($JSCompiler_StaticMethods_scrollToHeader$self$$, $headerInfo$$) {
  var $delta$$2$$, $startIndex$$5$$, $endIndex$$5$$, $averageDiff$$, $diff$$1$$, $currentScroll$$1$$, $headerMin$$, $headerDiff$$, $header$$17$$, $viewportMin$$, $viewportMax$$, $viewportDiff$$, $axis$$25$$, $index$$73$$, $level$$26$$;
  $axis$$25$$ = $headerInfo$$.axis;
  $index$$73$$ = $headerInfo$$.index;
  $level$$26$$ = $headerInfo$$.level;
  $delta$$2$$ = 0;
  "row" === $axis$$25$$ ? ($startIndex$$5$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_startRowHeader$, $endIndex$$5$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_endRowHeader$, $averageDiff$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_avgRowHeight$, $diff$$1$$ = $JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_StaticMethods_scrollToHeader$self$$.$m_databody$), $currentScroll$$1$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_currentScrollTop$) : "column" === 
  $axis$$25$$ && ($startIndex$$5$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_startColHeader$, $endIndex$$5$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_endColHeader$, $averageDiff$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_avgColWidth$, $diff$$1$$ = $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_scrollToHeader$self$$.$m_databody$), $currentScroll$$1$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_currentScrollLeft$);
  $index$$73$$ < $startIndex$$5$$ || $index$$73$$ > $endIndex$$5$$ ? ($delta$$2$$ = $currentScroll$$1$$ - ($index$$73$$ < $startIndex$$5$$ ? $averageDiff$$ * $index$$73$$ : $averageDiff$$ * ($index$$73$$ + 1) - $diff$$1$$), $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_scrollHeaderAfterFetch$ = $headerInfo$$) : ("row" === $axis$$25$$ ? ($header$$17$$ = $JSCompiler_StaticMethods__getRowHeaderByIndex$$($JSCompiler_StaticMethods_scrollToHeader$self$$, $index$$73$$, $level$$26$$), $viewportMin$$ = 
  $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_currentScrollTop$, $viewportMax$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_currentScrollTop$ + $JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_StaticMethods_scrollToHeader$self$$.$m_databody$), $viewportDiff$$ = $viewportMax$$ - $viewportMin$$, $headerMin$$ = $JSCompiler_StaticMethods_getElementDir$$($header$$17$$, "top"), $headerDiff$$ = $JSCompiler_StaticMethods_getElementHeight$$($header$$17$$)) : "column" === $axis$$25$$ && 
  ($header$$17$$ = $JSCompiler_StaticMethods__getColumnHeaderByIndex$$($JSCompiler_StaticMethods_scrollToHeader$self$$, $index$$73$$, $level$$26$$), $viewportMin$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_currentScrollLeft$, $viewportMax$$ = $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_currentScrollLeft$ + $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_scrollToHeader$self$$.$m_databody$), $viewportDiff$$ = $viewportMax$$ - $viewportMin$$, $headerMin$$ = $JSCompiler_StaticMethods_getElementDir$$($header$$17$$, 
  "left"), $headerDiff$$ = $JSCompiler_StaticMethods_getElementWidth$$($header$$17$$)), $viewportDiff$$ > $headerDiff$$ ? $headerMin$$ + $headerDiff$$ > $viewportMax$$ ? $delta$$2$$ = $viewportMax$$ - ($headerMin$$ + $headerDiff$$) : $headerMin$$ < $viewportMin$$ && ($delta$$2$$ = $viewportMin$$ - $headerMin$$) : $delta$$2$$ = $viewportMin$$ - $headerMin$$);
  0 != $delta$$2$$ && (null != $header$$17$$ && ($JSCompiler_StaticMethods_scrollToHeader$self$$.$m_cellToFocus$ = $header$$17$$), "row" === $axis$$25$$ ? $JSCompiler_StaticMethods_scrollDelta$$($JSCompiler_StaticMethods_scrollToHeader$self$$, 0, $delta$$2$$) : $JSCompiler_StaticMethods_scrollDelta$$($JSCompiler_StaticMethods_scrollToHeader$self$$, $delta$$2$$, 0));
  null != $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_scrollHeaderAfterFetch$ && null != $header$$17$$ && ($JSCompiler_StaticMethods__setActive$$($JSCompiler_StaticMethods_scrollToHeader$self$$, $header$$17$$), $JSCompiler_StaticMethods_scrollToHeader$self$$.$m_scrollHeaderAfterFetch$ = null);
}, $JSCompiler_StaticMethods_findHeader$$ = function $$JSCompiler_StaticMethods_findHeader$$$($JSCompiler_StaticMethods_findHeader$self$$, $elem$$21$$, $headerCellClassName$$) {
  void 0 == $headerCellClassName$$ && ($headerCellClassName$$ = $JSCompiler_StaticMethods_findHeader$self$$.getMappedStyle("headercell"));
  if (null != $headerCellClassName$$) {
    if ($JSCompiler_StaticMethods_containsCSSClassName$$($elem$$21$$, $headerCellClassName$$)) {
      return $elem$$21$$;
    }
    if ($elem$$21$$.parentNode) {
      return $JSCompiler_StaticMethods_findHeader$$($JSCompiler_StaticMethods_findHeader$self$$, $elem$$21$$.parentNode, $headerCellClassName$$);
    }
  }
  return null;
}, $JSCompiler_StaticMethods_updateRowBanding$$ = function $$JSCompiler_StaticMethods_updateRowBanding$$$($JSCompiler_StaticMethods_updateRowBanding$self$$) {
  var $rowBandingInterval$$2$$, $rows$$7$$, $i$$39$$, $index$$74$$, $bandingClass$$;
  $rowBandingInterval$$2$$ = $JSCompiler_StaticMethods_getRowBandingInterval$$($JSCompiler_StaticMethods_updateRowBanding$self$$.$m_options$);
  if (0 < $rowBandingInterval$$2$$) {
    for ($rows$$7$$ = $JSCompiler_StaticMethods_updateRowBanding$self$$.$m_databody$.firstChild.childNodes, $bandingClass$$ = $JSCompiler_StaticMethods_updateRowBanding$self$$.getMappedStyle("banded"), $i$$39$$ = 0;$i$$39$$ < $rows$$7$$.length;$i$$39$$++) {
      $index$$74$$ = $JSCompiler_StaticMethods_updateRowBanding$self$$.$m_startRow$ + $i$$39$$, 1 === Math.floor($index$$74$$ / $rowBandingInterval$$2$$) % 2 ? $JSCompiler_StaticMethods_containsCSSClassName$$($rows$$7$$[$i$$39$$], $bandingClass$$) || $JSCompiler_StaticMethods_addCSSClassName$$($rows$$7$$[$i$$39$$], $bandingClass$$) : $JSCompiler_StaticMethods_containsCSSClassName$$($rows$$7$$[$i$$39$$], $bandingClass$$) && $JSCompiler_StaticMethods_removeCSSClassName$$($rows$$7$$[$i$$39$$], $bandingClass$$)
      ;
    }
  }
}, $JSCompiler_StaticMethods__setAccInfoText$$ = function $$JSCompiler_StaticMethods__setAccInfoText$$$($JSCompiler_StaticMethods__setAccInfoText$self$$, $key$$35_text$$13$$, $args$$3$$) {
  $key$$35_text$$13$$ = $JSCompiler_StaticMethods__setAccInfoText$self$$.$m_resources$.getTranslatedText($key$$35_text$$13$$, $args$$3$$);
  null != $key$$35_text$$13$$ && ($JSCompiler_StaticMethods__setAccInfoText$self$$.$m_accInfo$.textContent = $key$$35_text$$13$$);
};
$DvtDataGrid$$.prototype.$handleExpandEvent$ = function $$DvtDataGrid$$$$$handleExpandEvent$$($event$$48$$) {
  $JSCompiler_StaticMethods__findRowByKey$$(this, $event$$48$$.rowKey).setAttribute("aria-expanded", !0);
  $JSCompiler_StaticMethods__setAccInfoText$$(this, "accessibleRowExpanded");
  $JSCompiler_StaticMethods_populateAccInfo$$(this);
};
$DvtDataGrid$$.prototype.$handleCollapseEvent$ = function $$DvtDataGrid$$$$$handleCollapseEvent$$($event$$49$$) {
  $JSCompiler_StaticMethods__findRowByKey$$(this, $event$$49$$.rowKey).setAttribute("aria-expanded", !1);
  $JSCompiler_StaticMethods__setAccInfoText$$(this, "accessibleRowCollapsed");
  $JSCompiler_StaticMethods_populateAccInfo$$(this);
};
var $JSCompiler_StaticMethods__setKey$$ = function $$JSCompiler_StaticMethods__setKey$$$($JSCompiler_StaticMethods__setKey$self$$, $element$$30$$, $key$$36$$) {
  null != $element$$30$$ && ($element$$30$$[$JSCompiler_StaticMethods__setKey$self$$.$m_resources$.getMappedAttribute("key")] = $key$$36$$);
}, $JSCompiler_StaticMethods__getKey$$ = function $$JSCompiler_StaticMethods__getKey$$$($JSCompiler_StaticMethods__getKey$self$$, $element$$31$$) {
  return null != $element$$31$$ ? $element$$31$$[$JSCompiler_StaticMethods__getKey$self$$.$m_resources$.getMappedAttribute("key")] : null;
}, $JSCompiler_StaticMethods__getActiveRowKey$$ = function $$JSCompiler_StaticMethods__getActiveRowKey$$$($JSCompiler_StaticMethods__getActiveRowKey$self$$, $prev$$2$$) {
  if ($prev$$2$$ && null != $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_prevActive$) {
    if ("header" == $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_prevActive$.type && "row" === $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_prevActive$.axis) {
      return $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_prevActive$.key;
    }
    if ("cell" == $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_prevActive$.type) {
      return $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_prevActive$.keys.row;
    }
  } else {
    if (null != $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_active$) {
      if ("header" == $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_active$.type && "row" === $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_active$.axis) {
        return $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_active$.key;
      }
      if ("cell" == $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_active$.type) {
        return $JSCompiler_StaticMethods__getActiveRowKey$self$$.$m_active$.keys.row;
      }
    }
  }
  return null;
}, $JSCompiler_StaticMethods__handleCutPasteKeydown$$ = function $$JSCompiler_StaticMethods__handleCutPasteKeydown$$$($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $event$$50$$) {
  if ($JSCompiler_StaticMethods__isMoveOnRowEnabled$$($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.find($event$$50$$.target, "row"))) {
    if (88 == $event$$50$$.keyCode && $JSCompiler_StaticMethods_ctrlEquivalent$$($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_utils$, $event$$50$$)) {
      return $JSCompiler_StaticMethods__handleCut$$($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $event$$50$$);
    }
    if (86 == $event$$50$$.keyCode && $JSCompiler_StaticMethods_ctrlEquivalent$$($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_utils$, $event$$50$$)) {
      return $JSCompiler_StaticMethods__handlePaste$$($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$, $event$$50$$);
    }
    if (27 == $event$$50$$.keyCode && null != $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRow$) {
      return $JSCompiler_StaticMethods_removeCSSClassName$$($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.getMappedStyle("cut")), $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRow$ = null, null !== $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRowHeader$ && ($JSCompiler_StaticMethods_removeCSSClassName$$($JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRowHeader$, $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.getMappedStyle("cut")), 
      $JSCompiler_StaticMethods__handleCutPasteKeydown$self$$.$m_cutRowHeader$ = null), !0;
    }
  }
  return!1;
}, $JSCompiler_StaticMethods__handleCut$$ = function $$JSCompiler_StaticMethods__handleCut$$$($JSCompiler_StaticMethods__handleCut$self$$, $event$$51_rowKey$$11$$, $target$$45$$) {
  null == $target$$45$$ && ($target$$45$$ = $event$$51_rowKey$$11$$.target);
  null != $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$ && $JSCompiler_StaticMethods_removeCSSClassName$$($JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handleCut$self$$.getMappedStyle("cut"));
  $event$$51_rowKey$$11$$ = $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods__handleCut$self$$, $JSCompiler_StaticMethods__handleCut$self$$.find($target$$45$$, "row"));
  $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$ = $JSCompiler_StaticMethods__findRowByKey$$($JSCompiler_StaticMethods__handleCut$self$$, $event$$51_rowKey$$11$$);
  $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRowHeader$ = $JSCompiler_StaticMethods__findRowHeaderByKey$$($JSCompiler_StaticMethods__handleCut$self$$, $event$$51_rowKey$$11$$);
  $JSCompiler_StaticMethods_addCSSClassName$$($JSCompiler_StaticMethods__handleCut$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handleCut$self$$.getMappedStyle("cut"));
  null !== $JSCompiler_StaticMethods__handleCut$self$$.$m_cutRowHeader$ && $JSCompiler_StaticMethods_addCSSClassName$$($JSCompiler_StaticMethods__handleCut$self$$.$m_cutRowHeader$, $JSCompiler_StaticMethods__handleCut$self$$.getMappedStyle("cut"));
  return!0;
}, $JSCompiler_StaticMethods__handlePaste$$ = function $$JSCompiler_StaticMethods__handlePaste$$$($JSCompiler_StaticMethods__handlePaste$self$$, $event$$52_row$$38$$, $target$$46$$) {
  null == $target$$46$$ && ($target$$46$$ = $event$$52_row$$38$$.target);
  return null != $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$ ? ($JSCompiler_StaticMethods_removeCSSClassName$$($JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$, $JSCompiler_StaticMethods__handlePaste$self$$.getMappedStyle("cut")), null !== $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRowHeader$ && $JSCompiler_StaticMethods_removeCSSClassName$$($JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRowHeader$, $JSCompiler_StaticMethods__handlePaste$self$$.getMappedStyle("cut")), 
  $event$$52_row$$38$$ = $JSCompiler_StaticMethods__handlePaste$self$$.find($target$$46$$, "row"), $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$ !== $event$$52_row$$38$$ && ($JSCompiler_StaticMethods__isSelectionEnabled$$($JSCompiler_StaticMethods__handlePaste$self$$) && $JSCompiler_StaticMethods__clearSelection$$($JSCompiler_StaticMethods__handlePaste$self$$), $JSCompiler_StaticMethods__isDatabodyCellActive$$($JSCompiler_StaticMethods__handlePaste$self$$) && $JSCompiler_StaticMethods__unhighlightActiveObject$$($JSCompiler_StaticMethods__handlePaste$self$$, 
  $JSCompiler_StaticMethods__handlePaste$self$$.$m_active$, void 0), $JSCompiler_StaticMethods__handlePaste$self$$.$m_moveActive$ = !0, $JSCompiler_StaticMethods__handlePaste$self$$.$m_dataSource$.move($JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods__handlePaste$self$$, $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$), $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods__handlePaste$self$$, $event$$52_row$$38$$))), $JSCompiler_StaticMethods__handlePaste$self$$.$m_cutRow$ = 
  null, !0) : !1;
}, $JSCompiler_StaticMethods__handleMove$$ = function $$JSCompiler_StaticMethods__handleMove$$$($JSCompiler_StaticMethods__handleMove$self$$, $event$$53$$) {
  var $deltaY$$4_rowKey$$12$$, $height$$28$$;
  null == $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$ && ($deltaY$$4_rowKey$$12$$ = $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods__handleMove$self$$, $JSCompiler_StaticMethods__handleMove$self$$.find($event$$53$$.target, "row")), $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$ = $JSCompiler_StaticMethods__findRowByKey$$($JSCompiler_StaticMethods__handleMove$self$$, $deltaY$$4_rowKey$$12$$), $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$ = $JSCompiler_StaticMethods__findRowHeaderByKey$$($JSCompiler_StaticMethods__handleMove$self$$, 
  $deltaY$$4_rowKey$$12$$), null != $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.style.height && $JSCompiler_StaticMethods_setElementHeight$$($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, $JSCompiler_StaticMethods_calculateRowHeight$$($JSCompiler_StaticMethods__handleMove$self$$, $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$)), $JSCompiler_StaticMethods_addCSSClassName$$($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("drag")), 
  $JSCompiler_StaticMethods__handleMove$self$$.$m_originalTop$ = $JSCompiler_StaticMethods_getElementDir$$($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top"), $JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$ = window.document.createElement("div"), $JSCompiler_StaticMethods_addCSSClassName$$($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$, $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("drop")), $JSCompiler_StaticMethods_setElementHeight$$($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$, 
  $JSCompiler_StaticMethods_calculateRowHeight$$($JSCompiler_StaticMethods__handleMove$self$$, $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$)), $JSCompiler_StaticMethods_setElementDir$$($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$, $JSCompiler_StaticMethods__handleMove$self$$.$m_originalTop$, "top"), $JSCompiler_StaticMethods__handleMove$self$$.$m_databody$.firstChild.appendChild($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$), null !== $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$ && 
  (null != $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$.style.height && $JSCompiler_StaticMethods_setElementHeight$$($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, $JSCompiler_StaticMethods_calculateRowHeight$$($JSCompiler_StaticMethods__handleMove$self$$, $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$)), $JSCompiler_StaticMethods_addCSSClassName$$($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("drag")), 
  $JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$ = window.document.createElement("div"), $JSCompiler_StaticMethods_addCSSClassName$$($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$, $JSCompiler_StaticMethods__handleMove$self$$.getMappedStyle("drop")), $JSCompiler_StaticMethods_setElementHeight$$($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$, $JSCompiler_StaticMethods_calculateRowHeight$$($JSCompiler_StaticMethods__handleMove$self$$, $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$)), 
  $JSCompiler_StaticMethods_setElementDir$$($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$, $JSCompiler_StaticMethods__handleMove$self$$.$m_originalTop$, "top"), $JSCompiler_StaticMethods__handleMove$self$$.$m_rowHeader$.firstChild.appendChild($JSCompiler_StaticMethods__handleMove$self$$.$m_dropTargetHeader$)));
  $JSCompiler_StaticMethods_isTouchDevice$$($JSCompiler_StaticMethods__handleMove$self$$.$m_utils$) || ($JSCompiler_StaticMethods__handleMove$self$$.$m_prevY$ = $JSCompiler_StaticMethods__handleMove$self$$.$m_currentY$, $JSCompiler_StaticMethods__handleMove$self$$.$m_currentY$ = $event$$53$$.pageY);
  $deltaY$$4_rowKey$$12$$ = $JSCompiler_StaticMethods__handleMove$self$$.$m_currentY$ - $JSCompiler_StaticMethods__handleMove$self$$.$m_prevY$;
  $height$$28$$ = $JSCompiler_StaticMethods_calculateRowHeight$$($JSCompiler_StaticMethods__handleMove$self$$, $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$);
  $JSCompiler_StaticMethods_setElementDir$$($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, $JSCompiler_StaticMethods_getElementDir$$($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top") + $deltaY$$4_rowKey$$12$$, "top");
  null !== $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$ && $JSCompiler_StaticMethods_setElementDir$$($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, $JSCompiler_StaticMethods_getElementDir$$($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRowHeader$, "top") + $deltaY$$4_rowKey$$12$$, "top");
  null != $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.nextSibling && $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.nextSibling != $JSCompiler_StaticMethods__handleMove$self$$.$m_dropTarget$ && $JSCompiler_StaticMethods_getElementDir$$($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.nextSibling, "top") < $JSCompiler_StaticMethods_getElementDir$$($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top") + $height$$28$$ / 2 ? $JSCompiler_StaticMethods__moveDropRows$$($JSCompiler_StaticMethods__handleMove$self$$, 
  "nextSibling") : null != $JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.previousSibling && $JSCompiler_StaticMethods_getElementDir$$($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$.previousSibling, "top") > $JSCompiler_StaticMethods_getElementDir$$($JSCompiler_StaticMethods__handleMove$self$$.$m_moveRow$, "top") - $height$$28$$ / 2 && $JSCompiler_StaticMethods__moveDropRows$$($JSCompiler_StaticMethods__handleMove$self$$, "previousSibling");
}, $JSCompiler_StaticMethods__moveDropRows$$ = function $$JSCompiler_StaticMethods__moveDropRows$$$($JSCompiler_StaticMethods__moveDropRows$self$$, $sibling$$) {
  var $newTop$$1$$, $databodyScroller$$, $newSiblingTop$$, $headerScroller$$;
  $databodyScroller$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$.parentNode;
  "nextSibling" == $sibling$$ ? ($newTop$$1$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_originalTop$ + $JSCompiler_StaticMethods_calculateRowHeight$$($JSCompiler_StaticMethods__moveDropRows$self$$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$]), $newSiblingTop$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_originalTop$) : ($newTop$$1$$ = $JSCompiler_StaticMethods_getElementDir$$($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$], "top"), 
  $newSiblingTop$$ = $newTop$$1$$ + $JSCompiler_StaticMethods_calculateRowHeight$$($JSCompiler_StaticMethods__moveDropRows$self$$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$));
  $JSCompiler_StaticMethods_setElementDir$$($JSCompiler_StaticMethods__moveDropRows$self$$.$m_dropTarget$, $newTop$$1$$, "top");
  $JSCompiler_StaticMethods_setElementDir$$($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$], $newSiblingTop$$, "top");
  null !== $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$ && ($headerScroller$$ = $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$.parentNode, $JSCompiler_StaticMethods_setElementDir$$($JSCompiler_StaticMethods__moveDropRows$self$$.$m_dropTargetHeader$, $newTop$$1$$, "top"), $JSCompiler_StaticMethods_setElementDir$$($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$[$sibling$$], $newSiblingTop$$, "top"));
  $JSCompiler_StaticMethods__moveDropRows$self$$.$m_originalTop$ = $newTop$$1$$;
  $JSCompiler_StaticMethods_removeCSSClassName$$($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$.previousSibling, $JSCompiler_StaticMethods__moveDropRows$self$$.getMappedStyle("activedrop"));
  "nextSibling" === $sibling$$ ? ($databodyScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$][$sibling$$]), null !== $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$ && $headerScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$[$sibling$$][$sibling$$])) : ($databodyScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$, 
  $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$[$sibling$$]), null !== $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$ && $headerScroller$$.insertBefore($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$, $JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRowHeader$[$sibling$$]));
  $JSCompiler_StaticMethods_addCSSClassName$$($JSCompiler_StaticMethods__moveDropRows$self$$.$m_moveRow$.previousSibling, $JSCompiler_StaticMethods__moveDropRows$self$$.getMappedStyle("activedrop"));
}, $JSCompiler_StaticMethods__isMoveEnabled$$ = function $$JSCompiler_StaticMethods__isMoveEnabled$$$($JSCompiler_StaticMethods__isMoveEnabled$self$$) {
  var $capability$$1$$;
  $capability$$1$$ = $JSCompiler_StaticMethods__isMoveEnabled$self$$.$m_dataSource$.getCapability("move");
  return "enable" !== (null != $JSCompiler_StaticMethods_extract$$($JSCompiler_StaticMethods__isMoveEnabled$self$$.$m_options$, "dnd", "reorder", "row") ? $JSCompiler_StaticMethods_extract$$($JSCompiler_StaticMethods__isMoveEnabled$self$$.$m_options$, "dnd", "reorder", "row") : !1) || "full" !== $capability$$1$$ && "row" !== $capability$$1$$ ? !1 : !0;
}, $JSCompiler_StaticMethods__handleMoveMouseUp$$ = function $$JSCompiler_StaticMethods__handleMoveMouseUp$$$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$, $validUp$$) {
  null != $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$ && ($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$_remove$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dropTarget$), $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$.style.zIndex = "", null !== $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRowHeader$ && ($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$_remove$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dropTargetHeader$), 
  $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRowHeader$.style.zIndex = ""), null != $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_active$ && "column" != $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_active$.axis && ($JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveActive$ = !0), $JSCompiler_StaticMethods__isSelectionEnabled$$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$) && $JSCompiler_StaticMethods__clearSelection$$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$), 
  !0 == $validUp$$ ? $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dataSource$.move($JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$, $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$), null === $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$.nextSibling ? null : $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$, $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$.nextSibling)) : 
  $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_dataSource$.move($JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$, $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$), $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods__handleMoveMouseUp$self$$, $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$)), $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_moveRow$ = null, $JSCompiler_StaticMethods__handleMoveMouseUp$self$$.$m_databodyMove$ = 
  !1);
}, $JSCompiler_StaticMethods__isMoveOnRowEnabled$$ = function $$JSCompiler_StaticMethods__isMoveOnRowEnabled$$$($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$, $row$$39$$) {
  return null == $row$$39$$ || $JSCompiler_StaticMethods_containsCSSClassName$$($row$$39$$.parentNode, $JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$.getMappedStyle("colheader")) ? !1 : $JSCompiler_StaticMethods__isMoveEnabled$$($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$) && $JSCompiler_StaticMethods__getActiveRowKey$$($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$) === $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods__isMoveOnRowEnabled$self$$, $row$$39$$) ? !0 : 
  !1;
};
$DvtDataGrid$$.prototype.$handleRootFocus$ = function $$DvtDataGrid$$$$$handleRootFocus$$($event$$55$$) {
  var $newCellIndex$$3$$;
  $JSCompiler_StaticMethods_addCSSClassName$$(this.$m_root$, this.getMappedStyle("focus"));
  if (!this.$m_root$.contains(window.document.activeElement) || window.document.activeElement === this.$m_root$ && 0 == this.$m_root$.tabIndex) {
    this.$m_externalFocus$ = !0, null != this.$m_active$ || $JSCompiler_StaticMethods__databodyEmpty$$(this) ? null != this.$m_active$ && $JSCompiler_StaticMethods__highlightActive$$(this) : ($newCellIndex$$3$$ = this.createIndex(0, 0), $JSCompiler_StaticMethods_scrollToIndex$$(this, $newCellIndex$$3$$), $JSCompiler_StaticMethods__isSelectionEnabled$$(this) ? this.$selectAndFocus$($newCellIndex$$3$$, $event$$55$$) : this.$_setActiveByIndex$($newCellIndex$$3$$));
  }
  this.$m_root$.tabIndex = -1;
};
$DvtDataGrid$$.prototype.$handleRootBlur$ = function $$DvtDataGrid$$$$$handleRootBlur$$() {
  var $active$$3$$;
  (0,window.setTimeout)(function() {
    this.$m_root$.contains(window.document.activeElement) || (this.$m_root$.tabIndex = 0, $active$$3$$ = $JSCompiler_StaticMethods__getActiveElement$$(this), null != $active$$3$$ && $JSCompiler_StaticMethods__unsetAriaProperties$$($active$$3$$));
  }.bind(this), 100);
  null == this.$m_moveRow$ && $JSCompiler_StaticMethods_removeCSSClassName$$(this.$m_root$, this.getMappedStyle("focus"));
};
var $JSCompiler_StaticMethods_calculateRowHeight$$ = function $$JSCompiler_StaticMethods_calculateRowHeight$$$($JSCompiler_StaticMethods_calculateRowHeight$self$$, $row$$40$$) {
  return "" != $row$$40$$.style.height ? $JSCompiler_StaticMethods_getElementHeight$$($row$$40$$) : null != $row$$40$$.nextSibling ? $JSCompiler_StaticMethods_getElementDir$$($row$$40$$.nextSibling, "top") - $JSCompiler_StaticMethods_getElementDir$$($row$$40$$, "top") : $JSCompiler_StaticMethods_calculateRowHeight$self$$.$m_endRowPixel$ - $JSCompiler_StaticMethods_getElementDir$$($row$$40$$, "top");
}, $JSCompiler_StaticMethods_calculateRowHeaderHeight$$ = function $$JSCompiler_StaticMethods_calculateRowHeaderHeight$$$($JSCompiler_StaticMethods_calculateRowHeaderHeight$self$$, $rowHeader$$20$$) {
  return "" != $rowHeader$$20$$.style.height ? $JSCompiler_StaticMethods_getElementHeight$$($rowHeader$$20$$) : null != $rowHeader$$20$$.nextSibling ? $JSCompiler_StaticMethods_getElementDir$$($rowHeader$$20$$.nextSibling, "top") - $JSCompiler_StaticMethods_getElementDir$$($rowHeader$$20$$, "top") : $JSCompiler_StaticMethods_calculateRowHeaderHeight$self$$.$m_endRowHeaderPixel$ - $JSCompiler_StaticMethods_getElementDir$$($rowHeader$$20$$, "top");
}, $JSCompiler_StaticMethods_calculateColumnWidth$$ = function $$JSCompiler_StaticMethods_calculateColumnWidth$$$($JSCompiler_StaticMethods_calculateColumnWidth$self$$, $cell$$14$$) {
  if ("" != $cell$$14$$.style.width) {
    return $JSCompiler_StaticMethods_getElementWidth$$($cell$$14$$);
  }
  var $dir$$11$$ = $JSCompiler_StaticMethods_calculateColumnWidth$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  return null != $cell$$14$$.nextSibling ? $JSCompiler_StaticMethods_getElementDir$$($cell$$14$$.nextSibling, $dir$$11$$) - $JSCompiler_StaticMethods_getElementDir$$($cell$$14$$, $dir$$11$$) : $JSCompiler_StaticMethods_calculateColumnWidth$self$$.$m_endColPixel$ - $JSCompiler_StaticMethods_getElementDir$$($cell$$14$$, $dir$$11$$);
}, $JSCompiler_StaticMethods_calculateColumnHeaderWidth$$ = function $$JSCompiler_StaticMethods_calculateColumnHeaderWidth$$$($JSCompiler_StaticMethods_calculateColumnHeaderWidth$self$$, $columnHeader$$6$$) {
  if ("" != $columnHeader$$6$$.style.width) {
    return $JSCompiler_StaticMethods_getElementWidth$$($columnHeader$$6$$);
  }
  var $dir$$12$$ = $JSCompiler_StaticMethods_calculateColumnHeaderWidth$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  return null != $columnHeader$$6$$.nextSibling ? $JSCompiler_StaticMethods_getElementDir$$($columnHeader$$6$$.nextSibling, $dir$$12$$) - $JSCompiler_StaticMethods_getElementDir$$($columnHeader$$6$$, $dir$$12$$) : $JSCompiler_StaticMethods_calculateColumnHeaderWidth$self$$.$m_endColHeaderPixel$ - $JSCompiler_StaticMethods_getElementDir$$($columnHeader$$6$$, $dir$$12$$);
}, $JSCompiler_StaticMethods__databodyEmpty$$ = function $$JSCompiler_StaticMethods__databodyEmpty$$$($JSCompiler_StaticMethods__databodyEmpty$self$$) {
  return null == $JSCompiler_StaticMethods__databodyEmpty$self$$.$m_databody$.firstChild ? !0 : !1;
}, $JSCompiler_StaticMethods_changeStyleProperty$$ = function $$JSCompiler_StaticMethods_changeStyleProperty$$$($target$$47$$, $prop$$6$$, $value$$48$$, $action$$) {
  "undefined" != typeof $prop$$6$$ && ($target$$47$$.style[$prop$$6$$] = "remove" == $action$$ ? "" : $value$$48$$);
}, $JSCompiler_StaticMethods_addTransformMoveStyle$$ = function $$JSCompiler_StaticMethods_addTransformMoveStyle$$$($target$$48$$, $duration$$7$$, $delay$$3$$, $timing$$1$$, $x$$55$$, $y$$36$$) {
  $JSCompiler_StaticMethods_changeStyleProperty$$($target$$48$$, $JSCompiler_StaticMethods_getCssSupport$$("transition-delay"), $delay$$3$$);
  $JSCompiler_StaticMethods_changeStyleProperty$$($target$$48$$, $JSCompiler_StaticMethods_getCssSupport$$("transition-timing-function"), $timing$$1$$);
  $JSCompiler_StaticMethods_changeStyleProperty$$($target$$48$$, $JSCompiler_StaticMethods_getCssSupport$$("transition-duration"), $duration$$7$$);
  $JSCompiler_StaticMethods_changeStyleProperty$$($target$$48$$, $JSCompiler_StaticMethods_getCssSupport$$("transform"), "translate3d(" + $x$$55$$ + "px," + $y$$36$$ + "px,0px)");
}, $JSCompiler_StaticMethods_removeTransformMoveStyle$$ = function $$JSCompiler_StaticMethods_removeTransformMoveStyle$$$($target$$49$$) {
  $JSCompiler_StaticMethods_changeStyleProperty$$($target$$49$$, $JSCompiler_StaticMethods_getCssSupport$$("transition-delay"), null, "remove");
  $JSCompiler_StaticMethods_changeStyleProperty$$($target$$49$$, $JSCompiler_StaticMethods_getCssSupport$$("transition-timing-function"), null, "remove");
  $JSCompiler_StaticMethods_changeStyleProperty$$($target$$49$$, $JSCompiler_StaticMethods_getCssSupport$$("transition-duration"), null, "remove");
  $JSCompiler_StaticMethods_changeStyleProperty$$($target$$49$$, $JSCompiler_StaticMethods_getCssSupport$$("transform"), null, "remove");
}, $JSCompiler_StaticMethods_getCssSupport$$ = function $$JSCompiler_StaticMethods_getCssSupport$$$($cssprop$$) {
  function $toCamel$$($cssprop$$) {
    return $cssprop$$.replace(/\-([a-z])/gi, function($cssprop$$, $toCamel$$) {
      return $toCamel$$.toUpperCase();
    });
  }
  var $vendors$$, $root$$13$$, $i$$42$$, $css3mc$$;
  $vendors$$ = " -moz- -webkit- -o- -ms- -khtml-".split(" ");
  $root$$13$$ = window.document.documentElement;
  for ($i$$42$$ = 0;$i$$42$$ < $vendors$$.length;$i$$42$$++) {
    if ($css3mc$$ = $toCamel$$($vendors$$[$i$$42$$] + $cssprop$$), "Ms" == $css3mc$$.substr(0, 2) && ($css3mc$$ = "m" + $css3mc$$.substr(1)), $css3mc$$ in $root$$13$$.style) {
      return $css3mc$$;
    }
  }
};

/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
var $JSCompiler_StaticMethods_unhighlightSelection$$ = function $$JSCompiler_StaticMethods_unhighlightSelection$$$($JSCompiler_StaticMethods_unhighlightSelection$self$$) {
  var $i$$47$$, $ranges$$;
  $ranges$$ = $JSCompiler_StaticMethods_unhighlightSelection$self$$.$GetSelection$();
  for ($i$$47$$ = 0;$i$$47$$ < $ranges$$.length;$i$$47$$ += 1) {
    var $JSCompiler_StaticMethods_unhighlightRange$self$$inline_1040$$ = $JSCompiler_StaticMethods_unhighlightSelection$self$$, $elems$$inline_1042$$ = $JSCompiler_StaticMethods_getElementsInRange$$($JSCompiler_StaticMethods_unhighlightRange$self$$inline_1040$$, $ranges$$[$i$$47$$]);
    $JSCompiler_StaticMethods_unhighlightElems$$($JSCompiler_StaticMethods_unhighlightRange$self$$inline_1040$$, $elems$$inline_1042$$);
  }
}, $JSCompiler_StaticMethods_highlightRange$$ = function $$JSCompiler_StaticMethods_highlightRange$$$($JSCompiler_StaticMethods_highlightRange$self$$, $elems$$3_range$$10_selection$$inline_1046$$, $JSCompiler_temp$$38_total$$inline_1045_updateAccInfo$$) {
  $elems$$3_range$$10_selection$$inline_1046$$ = $JSCompiler_StaticMethods_getElementsInRange$$($JSCompiler_StaticMethods_highlightRange$self$$, $elems$$3_range$$10_selection$$inline_1046$$);
  $JSCompiler_StaticMethods_highlightElems$$($JSCompiler_StaticMethods_highlightRange$self$$, $elems$$3_range$$10_selection$$inline_1046$$);
  if ($JSCompiler_temp$$38_total$$inline_1045_updateAccInfo$$) {
    if (1 == $JSCompiler_StaticMethods_highlightRange$self$$.$GetSelection$().length) {
      $JSCompiler_temp$$38_total$$inline_1045_updateAccInfo$$ = $elems$$3_range$$10_selection$$inline_1046$$.length;
    } else {
      var $elems$$inline_1047$$, $i$$inline_1048$$;
      $JSCompiler_temp$$38_total$$inline_1045_updateAccInfo$$ = 0;
      $elems$$3_range$$10_selection$$inline_1046$$ = $JSCompiler_StaticMethods_highlightRange$self$$.$GetSelection$();
      for ($i$$inline_1048$$ = 0;$i$$inline_1048$$ < $elems$$3_range$$10_selection$$inline_1046$$.length;$i$$inline_1048$$++) {
        $elems$$inline_1047$$ = $JSCompiler_StaticMethods_getElementsInRange$$($JSCompiler_StaticMethods_highlightRange$self$$, $elems$$3_range$$10_selection$$inline_1046$$[$i$$inline_1048$$]), $JSCompiler_temp$$38_total$$inline_1045_updateAccInfo$$ += $elems$$inline_1047$$.length;
      }
    }
    $JSCompiler_StaticMethods__setAccInfoText$$($JSCompiler_StaticMethods_highlightRange$self$$, "accessibleMultiCellSelected", {num:$JSCompiler_temp$$38_total$$inline_1045_updateAccInfo$$});
  }
}, $JSCompiler_StaticMethods_unhighlightElems$$ = function $$JSCompiler_StaticMethods_unhighlightElems$$$($JSCompiler_StaticMethods_unhighlightElems$self$$, $elems$$5$$) {
  var $i$$49$$, $elem$$26$$;
  if (null != $elems$$5$$ && 0 != $elems$$5$$.length) {
    for ($i$$49$$ = 0;$i$$49$$ < $elems$$5$$.length;$i$$49$$ += 1) {
      $elem$$26$$ = $elems$$5$$[$i$$49$$], $JSCompiler_StaticMethods__unhighlightElement$$($JSCompiler_StaticMethods_unhighlightElems$self$$, $elem$$26$$, ["selected"]);
    }
  }
}, $JSCompiler_StaticMethods_highlightElems$$ = function $$JSCompiler_StaticMethods_highlightElems$$$($JSCompiler_StaticMethods_highlightElems$self$$, $elems$$6$$) {
  var $i$$50$$, $elem$$27$$;
  if (null != $elems$$6$$ && 0 != $elems$$6$$.length) {
    for ($i$$50$$ = 0;$i$$50$$ < $elems$$6$$.length;$i$$50$$ += 1) {
      $elem$$27$$ = $elems$$6$$[$i$$50$$], $JSCompiler_StaticMethods__highlightElement$$($JSCompiler_StaticMethods_highlightElems$self$$, $elem$$27$$, ["selected"]);
    }
  }
}, $JSCompiler_StaticMethods_applySelection$$ = function $$JSCompiler_StaticMethods_applySelection$$$($JSCompiler_StaticMethods_applySelection$self$$, $startRow$$5$$, $endRow$$2$$) {
  var $i$$51$$, $ranges$$1$$, $elems$$7$$;
  $ranges$$1$$ = $JSCompiler_StaticMethods_applySelection$self$$.$GetSelection$();
  for ($i$$51$$ = 0;$i$$51$$ < $ranges$$1$$.length;$i$$51$$ += 1) {
    $elems$$7$$ = $JSCompiler_StaticMethods_getElementsInRange$$($JSCompiler_StaticMethods_applySelection$self$$, $ranges$$1$$[$i$$51$$], $startRow$$5$$, $endRow$$2$$), $JSCompiler_StaticMethods_highlightElems$$($JSCompiler_StaticMethods_applySelection$self$$, $elems$$7$$);
  }
}, $JSCompiler_StaticMethods_handleDatabodySelectionDrag$$ = function $$JSCompiler_StaticMethods_handleDatabodySelectionDrag$$$($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$, $event$$63$$) {
  var $cell$$16_index$$81$$;
  $cell$$16_index$$81$$ = $JSCompiler_StaticMethods_isTouchDevice$$($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$.$m_utils$) ? $JSCompiler_StaticMethods_findCell$$($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$, window.document.elementFromPoint($event$$63$$.touches[0].clientX, $event$$63$$.touches[0].clientY)) : $JSCompiler_StaticMethods_findCell$$($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$, $event$$63$$.target);
  null != $cell$$16_index$$81$$ && ($cell$$16_index$$81$$ = {row:$JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$.$getRowIndex$($cell$$16_index$$81$$.parentNode), column:$JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$.$getCellIndex$($cell$$16_index$$81$$)}, $JSCompiler_StaticMethods_extendSelection$$($JSCompiler_StaticMethods_handleDatabodySelectionDrag$self$$, $cell$$16_index$$81$$, $event$$63$$));
};
$DvtDataGrid$$.prototype.$_isSelected$ = function $$DvtDataGrid$$$$$_isSelected$$($cell$$17$$) {
  var $selectedClassName$$ = this.getMappedStyle("selected");
  return "row" == this.$m_options$.$getSelectionMode$() && null != $selectedClassName$$ ? $JSCompiler_StaticMethods_containsCSSClassName$$(this.find($cell$$17$$, "row"), $selectedClassName$$) : null != $selectedClassName$$ ? $JSCompiler_StaticMethods_containsCSSClassName$$($cell$$17$$, $selectedClassName$$) : !1;
};
var $JSCompiler_StaticMethods_handleDatabodyClickSelection$$ = function $$JSCompiler_StaticMethods_handleDatabodyClickSelection$$$($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $event$$64$$) {
  var $index$$83$$, $cell$$18_ctrlKey$$5$$, $shiftKey$$3$$;
  $cell$$18_ctrlKey$$5$$ = $JSCompiler_StaticMethods_findCell$$($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $event$$64$$.target);
  null != $cell$$18_ctrlKey$$5$$ && ($index$$83$$ = {row:$JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$getRowIndex$($cell$$18_ctrlKey$$5$$.parentNode), column:$JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$getCellIndex$($cell$$18_ctrlKey$$5$$)});
  null == $index$$83$$ || void 0 == $index$$83$$ || $JSCompiler_StaticMethods_isMultipleSelection$$($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$) && 2 === $event$$64$$.button && $JSCompiler_StaticMethods__isContainSelection$$($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $index$$83$$) || ($JSCompiler_StaticMethods_scrollToIndex$$($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $index$$83$$), $cell$$18_ctrlKey$$5$$ = $JSCompiler_StaticMethods_ctrlEquivalent$$($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_utils$, 
  $event$$64$$), $shiftKey$$3$$ = $event$$64$$.shiftKey, $JSCompiler_StaticMethods_isMultipleSelection$$($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$) ? $JSCompiler_StaticMethods_isTouchDevice$$($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_utils$) ? ($JSCompiler_StaticMethods__removeTouchSelectionAffordance$$($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$), null != $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_active$ && $JSCompiler_StaticMethods__unhighlightActiveObject$$($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, 
  $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$m_active$, void 0), $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$selectAndFocus$($index$$83$$, $event$$64$$, !1)) : $cell$$18_ctrlKey$$5$$ || $shiftKey$$3$$ ? !$cell$$18_ctrlKey$$5$$ && $shiftKey$$3$$ ? $JSCompiler_StaticMethods_extendSelection$$($JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$, $index$$83$$, $event$$64$$) : $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$selectAndFocus$($index$$83$$, 
  $event$$64$$, !0) : $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$selectAndFocus$($index$$83$$, $event$$64$$, !1) : $JSCompiler_StaticMethods_handleDatabodyClickSelection$self$$.$selectAndFocus$($index$$83$$, $event$$64$$, !1));
}, $JSCompiler_StaticMethods__isContainSelection$$ = function $$JSCompiler_StaticMethods__isContainSelection$$$($JSCompiler_StaticMethods__isContainSelection$self$$, $index$$84$$, $ranges$$3$$) {
  var $endIndex$$7_range$$12_rangeEndColumn$$2$$, $rangeStartColumn$$2_startIndex$$7$$, $rangeStartRow$$2$$, $rangeEndRow$$2$$, $i$$53$$;
  null == $ranges$$3$$ && ($ranges$$3$$ = $JSCompiler_StaticMethods__isContainSelection$self$$.$GetSelection$());
  for ($i$$53$$ = 0;$i$$53$$ < $ranges$$3$$.length;$i$$53$$ += 1) {
    if ($endIndex$$7_range$$12_rangeEndColumn$$2$$ = $ranges$$3$$[$i$$53$$], $rangeStartColumn$$2_startIndex$$7$$ = $endIndex$$7_range$$12_rangeEndColumn$$2$$.startIndex, $endIndex$$7_range$$12_rangeEndColumn$$2$$ = $JSCompiler_StaticMethods__isContainSelection$self$$.$getEndIndex$($endIndex$$7_range$$12_rangeEndColumn$$2$$), $rangeStartRow$$2$$ = $rangeStartColumn$$2_startIndex$$7$$.row, $rangeEndRow$$2$$ = $endIndex$$7_range$$12_rangeEndColumn$$2$$.row, !($index$$84$$.row < $rangeStartRow$$2$$ || 
    -1 != $rangeEndRow$$2$$ && $index$$84$$.row > $rangeEndRow$$2$$)) {
      if ((0,window.isNaN)($rangeStartColumn$$2_startIndex$$7$$.column) || (0,window.isNaN)($endIndex$$7_range$$12_rangeEndColumn$$2$$.column)) {
        return!0;
      }
      $rangeStartColumn$$2_startIndex$$7$$ = $rangeStartColumn$$2_startIndex$$7$$.column;
      $endIndex$$7_range$$12_rangeEndColumn$$2$$ = $endIndex$$7_range$$12_rangeEndColumn$$2$$.column;
      if (!($index$$84$$.column < $rangeStartColumn$$2_startIndex$$7$$ || -1 != $endIndex$$7_range$$12_rangeEndColumn$$2$$ && $index$$84$$.column > $endIndex$$7_range$$12_rangeEndColumn$$2$$)) {
        return!0;
      }
    }
  }
  return!1;
}, $JSCompiler_StaticMethods__clearSelection$$ = function $$JSCompiler_StaticMethods__clearSelection$$$($JSCompiler_StaticMethods__clearSelection$self$$) {
  var $previous$$;
  $JSCompiler_StaticMethods_unhighlightSelection$$($JSCompiler_StaticMethods__clearSelection$self$$);
  $JSCompiler_StaticMethods__removeTouchSelectionAffordance$$($JSCompiler_StaticMethods__clearSelection$self$$);
  $previous$$ = $JSCompiler_StaticMethods__clearSelection$self$$.$GetSelection$();
  $JSCompiler_StaticMethods__clearSelection$self$$.$m_selection$ = [];
  $JSCompiler_StaticMethods__compareSelectionAndFire$$($JSCompiler_StaticMethods__clearSelection$self$$, null, $previous$$);
}, $JSCompiler_StaticMethods_setDiscontiguousSelectionMode$$ = function $$JSCompiler_StaticMethods_setDiscontiguousSelectionMode$$$($JSCompiler_StaticMethods_setDiscontiguousSelectionMode$self$$, $flag$$5$$) {
  $JSCompiler_StaticMethods_setDiscontiguousSelectionMode$self$$.$m_discontiguousSelection$ = $flag$$5$$;
  $JSCompiler_StaticMethods__setAccInfoText$$($JSCompiler_StaticMethods_setDiscontiguousSelectionMode$self$$, $flag$$5$$ ? "accessibleRangeSelectModeOn" : "accessibleRangeSelectModeOff");
}, $JSCompiler_StaticMethods__selectEntireRow$$ = function $$JSCompiler_StaticMethods__selectEntireRow$$$($JSCompiler_StaticMethods__selectEntireRow$self$$, $rowStart$$10_startIndex$$8$$, $endIndex$$inline_1055_rowEnd$$1$$, $event$$66$$) {
  $rowStart$$10_startIndex$$8$$ = $JSCompiler_StaticMethods__selectEntireRow$self$$.createIndex($rowStart$$10_startIndex$$8$$, 0);
  $endIndex$$inline_1055_rowEnd$$1$$ = $JSCompiler_StaticMethods__selectEntireRow$self$$.createIndex($endIndex$$inline_1055_rowEnd$$1$$, -1);
  $JSCompiler_StaticMethods_unhighlightSelection$$($JSCompiler_StaticMethods__selectEntireRow$self$$);
  $JSCompiler_StaticMethods__keys$$($JSCompiler_StaticMethods__selectEntireRow$self$$, $rowStart$$10_startIndex$$8$$, $JSCompiler_StaticMethods__selectEntireRow$self$$.$_createRangeStartKeyCallback$.bind($JSCompiler_StaticMethods__selectEntireRow$self$$, $endIndex$$inline_1055_rowEnd$$1$$, $JSCompiler_StaticMethods__selectEntireRow$self$$.$_selectRangeCallback$.bind($JSCompiler_StaticMethods__selectEntireRow$self$$, $event$$66$$)));
}, $JSCompiler_StaticMethods__selectEntireColumn$$ = function $$JSCompiler_StaticMethods__selectEntireColumn$$$($JSCompiler_StaticMethods__selectEntireColumn$self$$, $columnStart$$7_startIndex$$9$$, $columnEnd$$1_endIndex$$inline_1060$$, $event$$67$$) {
  $columnStart$$7_startIndex$$9$$ = $JSCompiler_StaticMethods__selectEntireColumn$self$$.createIndex(0, $columnStart$$7_startIndex$$9$$);
  $columnEnd$$1_endIndex$$inline_1060$$ = $JSCompiler_StaticMethods__selectEntireColumn$self$$.createIndex(-1, $columnEnd$$1_endIndex$$inline_1060$$);
  $JSCompiler_StaticMethods_unhighlightSelection$$($JSCompiler_StaticMethods__selectEntireColumn$self$$);
  $JSCompiler_StaticMethods__keys$$($JSCompiler_StaticMethods__selectEntireColumn$self$$, $columnStart$$7_startIndex$$9$$, $JSCompiler_StaticMethods__selectEntireColumn$self$$.$_createRangeStartKeyCallback$.bind($JSCompiler_StaticMethods__selectEntireColumn$self$$, $columnEnd$$1_endIndex$$inline_1060$$, $JSCompiler_StaticMethods__selectEntireColumn$self$$.$_selectRangeCallback$.bind($JSCompiler_StaticMethods__selectEntireColumn$self$$, $event$$67$$)));
};
$DvtDataGrid$$.prototype.$_selectRangeCallback$ = function $$DvtDataGrid$$$$$_selectRangeCallback$$($event$$69$$, $newRange$$) {
  var $selection$$4$$, $previous$$1$$;
  $previous$$1$$ = this.$GetSelection$();
  $selection$$4$$ = [];
  $selection$$4$$.push($newRange$$);
  this.$m_selection$ = $selection$$4$$;
  $JSCompiler_StaticMethods_highlightRange$$(this, $newRange$$);
  $JSCompiler_StaticMethods__isDatabodyCellActive$$(this) && (this.$m_selectionFrontier$ = this.$m_active$.indexes, $JSCompiler_StaticMethods__highlightActive$$(this));
  $JSCompiler_StaticMethods__compareSelectionAndFire$$(this, $event$$69$$, $previous$$1$$);
};
$DvtDataGrid$$.prototype.$GetSelection$ = function $$DvtDataGrid$$$$$GetSelection$$() {
  null == this.$m_selection$ && (this.$m_selection$ = []);
  return this.$m_selection$;
};
$DvtDataGrid$$.prototype.GetSelection = $DvtDataGrid$$.prototype.$GetSelection$;
$DvtDataGrid$$.prototype.$SetSelection$ = function $$DvtDataGrid$$$$$SetSelection$$($selection$$5$$) {
  void 0 != $selection$$5$$ && (null == $selection$$5$$ && ($selection$$5$$ = []), $JSCompiler_StaticMethods_unhighlightSelection$$(this), this.$GetSelection$(), this.$m_selection$ = $selection$$5$$, null != this.$m_databody$ && $JSCompiler_StaticMethods_applySelection$$(this, this.$m_startRow$, this.$m_endRow$));
};
$DvtDataGrid$$.prototype.SetSelection = $DvtDataGrid$$.prototype.$SetSelection$;
$DvtDataGrid$$.prototype.$fireSelectionEvent$ = function $$DvtDataGrid$$$$$fireSelectionEvent$$($event$$70$$, $previousSelection$$) {
  var $details$$8$$ = {event:$event$$70$$, ui:{selection:this.$GetSelection$(), previousSelection:$previousSelection$$}};
  this.fireEvent("select", $details$$8$$);
};
var $JSCompiler_StaticMethods_extendSelection$$ = function $$JSCompiler_StaticMethods_extendSelection$$$($JSCompiler_StaticMethods_extendSelection$self$$, $index$$85$$, $event$$71$$) {
  var $anchor$$;
  $anchor$$ = $JSCompiler_StaticMethods_isTouchDevice$$($JSCompiler_StaticMethods_extendSelection$self$$.$m_utils$) ? $JSCompiler_StaticMethods_extendSelection$self$$.$m_touchSelectAnchor$ : $JSCompiler_StaticMethods_extendSelection$self$$.$m_active$.indexes;
  null != $anchor$$ && ($JSCompiler_StaticMethods__resetSelectionFrontierFocus$$($JSCompiler_StaticMethods_extendSelection$self$$), $JSCompiler_StaticMethods_extendSelection$self$$.$m_selectionFrontier$ = $index$$85$$, "row" == $JSCompiler_StaticMethods_extendSelection$self$$.$m_options$.$getSelectionMode$() && ($index$$85$$ = $JSCompiler_StaticMethods_extendSelection$self$$.createIndex($index$$85$$.row)), $JSCompiler_StaticMethods__keys$$($JSCompiler_StaticMethods_extendSelection$self$$, $anchor$$, 
  $JSCompiler_StaticMethods_extendSelection$self$$.$_createRangeStartKeyCallback$.bind($JSCompiler_StaticMethods_extendSelection$self$$, $index$$85$$, $JSCompiler_StaticMethods_extendSelection$self$$.$_extendSelectionCallback$.bind($JSCompiler_StaticMethods_extendSelection$self$$, $event$$71$$))));
};
$DvtDataGrid$$.prototype.$_extendSelectionCallback$ = function $$DvtDataGrid$$$$$_extendSelectionCallback$$($event$$72$$, $newRange$$1$$) {
  var $selection$$6_startIndexesMatch$$, $previous$$3$$, $cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$, $endIndexesMatch$$;
  $previous$$3$$ = this.$GetSelection$();
  $cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$ = $previous$$3$$[$previous$$3$$.length - 1];
  $selection$$6_startIndexesMatch$$ = $cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$.startIndex.row == $newRange$$1$$.startIndex.row;
  null != $cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$.startIndex.column && null != $newRange$$1$$.startIndex.column && ($selection$$6_startIndexesMatch$$ = $selection$$6_startIndexesMatch$$ && $cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$.startIndex.column == $newRange$$1$$.startIndex.column);
  $endIndexesMatch$$ = $cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$.endIndex.row == $newRange$$1$$.endIndex.row;
  null != $cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$.endIndex.column && null != $newRange$$1$$.endIndex.column && ($endIndexesMatch$$ = $endIndexesMatch$$ && $cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$.endIndex.column == $newRange$$1$$.endIndex.column);
  $selection$$6_startIndexesMatch$$ && $endIndexesMatch$$ || ($selection$$6_startIndexesMatch$$ = $previous$$3$$.slice(0), $selection$$6_startIndexesMatch$$.pop(), $selection$$6_startIndexesMatch$$.push($newRange$$1$$), this.$m_selection$ = $selection$$6_startIndexesMatch$$, $cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$ = $JSCompiler_StaticMethods_getElementsInRange$$(this, $cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$), 
  $JSCompiler_StaticMethods_unhighlightElems$$(this, $cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$), $JSCompiler_StaticMethods_highlightRange$$(this, $newRange$$1$$, !0), null == this.$m_selectionFrontier$ || $JSCompiler_StaticMethods__isDatabodyCellActive$$(this) && this.$m_selectionFrontier$.row == this.$m_active$.indexes.row && this.$m_selectionFrontier$.column == this.$m_active$.indexes.column || ($JSCompiler_StaticMethods__isDatabodyCellActive$$(this) && 
  ($cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$ = this.createRange(this.$m_active$.indexes), $cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$ = $JSCompiler_StaticMethods_getElementsInRange$$(this, $cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$), null != $cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$ && 0 < $cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$.length && 
  $JSCompiler_StaticMethods__unsetAriaProperties$$($cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$[0])), $cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$ = this.createRange(this.$m_selectionFrontier$), $cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$ = $JSCompiler_StaticMethods_getElementsInRange$$(this, $cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$), 
  null != $cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$ && 0 != $cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$.length && ($JSCompiler_StaticMethods__updateContextInfo$$(this, this.$m_selectionFrontier$), $cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$ = $JSCompiler_StaticMethods_containsCSSClassName$$($cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$[0], 
  this.getMappedStyle("row")) ? $cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$[0].firstChild : $cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$[0], $JSCompiler_StaticMethods__setAriaProperties$$(this, $JSCompiler_StaticMethods__createActiveObject$$(this, $cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$), null, $cell$$inline_1078_currentRange_elems$$inline_1073_range$$inline_1076_rowOrCell$$inline_1077$$))), 
  $JSCompiler_StaticMethods__compareSelectionAndFire$$(this, $event$$72$$, $previous$$3$$), this.$m_discontiguousSelection$ && !$JSCompiler_StaticMethods_isTouchDevice$$(this.$m_utils$) && $JSCompiler_StaticMethods_setDiscontiguousSelectionMode$$(this, !1));
};
var $JSCompiler_StaticMethods__resetSelectionFrontierFocus$$ = function $$JSCompiler_StaticMethods__resetSelectionFrontierFocus$$$($JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$) {
  var $range$$13$$;
  null == $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$.$m_selectionFrontier$ || $JSCompiler_StaticMethods__isDatabodyCellActive$$($JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$) && $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$.$m_selectionFrontier$.row == $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$.$m_active$.indexes.row && $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$.$m_selectionFrontier$.column == 
  $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$.$m_active$.indexes.column || ($range$$13$$ = $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$.createRange($JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$.$m_selectionFrontier$), $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$ = $JSCompiler_StaticMethods_getElementsInRange$$($JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$, $range$$13$$), 
  null != $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$ && 0 < $JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$.length && $JSCompiler_StaticMethods__unsetAriaProperties$$($JSCompiler_StaticMethods__resetSelectionFrontierFocus$self_cell$$20$$[0]));
};
$DvtDataGrid$$.prototype.$selectAndFocus$ = function $$DvtDataGrid$$$$$selectAndFocus$$($index$$86$$, $event$$73$$, $augment$$) {
  null == $augment$$ && ($augment$$ = !1);
  $JSCompiler_StaticMethods__resetSelectionFrontierFocus$$(this);
  this.$_setActiveByIndex$($index$$86$$, $event$$73$$) && ("row" == this.$m_options$.$getSelectionMode$() && ($index$$86$$ = this.createIndex($index$$86$$.row)), $JSCompiler_StaticMethods__keys$$(this, $index$$86$$, this.$_createRangeStartKeyCallback$.bind(this, $index$$86$$, this.$_selectAndFocusRangeCallback$.bind(this, $index$$86$$, $event$$73$$, $augment$$))));
};
$DvtDataGrid$$.prototype.$_selectAndFocusRangeCallback$ = function $$DvtDataGrid$$$$$_selectAndFocusRangeCallback$$($index$$87$$, $event$$74$$, $augment$$1$$, $range$$15$$) {
  var $selection$$7$$, $previous$$4$$;
  $previous$$4$$ = this.$GetSelection$();
  $selection$$7$$ = $previous$$4$$.slice(0);
  $augment$$1$$ || (this.$m_discontiguousSelection$ ? $JSCompiler_StaticMethods__isDatabodyCellActive$$(this) && null != this.$m_prevActive$ && "cell" == this.$m_prevActive$.type && this.$m_selectionFrontier$.row == this.$m_prevActive$.indexes.row && this.$m_selectionFrontier$.column == this.$m_prevActive$.indexes.column && !$JSCompiler_StaticMethods_isTouchDevice$$(this.$m_utils$) && ($selection$$7$$.pop(), $JSCompiler_StaticMethods__isContainSelection$$(this, this.$m_prevActive$.indexes, $selection$$7$$) || 
  $JSCompiler_StaticMethods__unhighlightElement$$(this, $JSCompiler_StaticMethods__getCellByIndex$$(this, this.$m_prevActive$.indexes), ["selected"])) : ($JSCompiler_StaticMethods_unhighlightSelection$$(this), $selection$$7$$ = []));
  this.$m_selectionFrontier$ = $index$$87$$;
  $selection$$7$$.push($range$$15$$);
  this.$m_selection$ = $selection$$7$$;
  $JSCompiler_StaticMethods__highlightElement$$(this, $JSCompiler_StaticMethods__getCellByIndex$$(this, $index$$87$$), ["selected"]);
  $JSCompiler_StaticMethods__compareSelectionAndFire$$(this, $event$$74$$, $previous$$4$$);
};
var $JSCompiler_StaticMethods__compareSelectionAndFire$$ = function $$JSCompiler_StaticMethods__compareSelectionAndFire$$$($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, $event$$75$$, $clone$$1$$) {
  var $JSCompiler_inline_result$$208_selection$$8$$ = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$GetSelection$();
  if ($JSCompiler_StaticMethods_isTouchDevice$$($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_utils$) && $JSCompiler_StaticMethods_isMultipleSelection$$($JSCompiler_StaticMethods__compareSelectionAndFire$self$$) && 0 < $JSCompiler_inline_result$$208_selection$$8$$.length) {
    var $bottomIcon$$inline_1085_cell$$inline_1082_foundMatch$$inline_1095_selectionMode$$inline_1087_topIcon$$inline_1084$$, $iconSize$$inline_1083_j$$inline_1094_left$$inline_1088$$, $dir$$inline_1089_i$$inline_1093_row$$inline_1086$$;
    null == $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$ && null == $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$ && ($dir$$inline_1089_i$$inline_1093_row$$inline_1086$$ = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_resources$.isRTLMode() ? "right" : "left", $iconSize$$inline_1083_j$$inline_1094_left$$inline_1088$$ = $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$($JSCompiler_StaticMethods__compareSelectionAndFire$self$$), 
    $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$ = window.document.createElement("div"), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$.className = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.getMappedStyle("toucharea"), $JSCompiler_StaticMethods_setElementDir$$($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$, -$iconSize$$inline_1083_j$$inline_1094_left$$inline_1088$$ / 
    2, "top"), $bottomIcon$$inline_1085_cell$$inline_1082_foundMatch$$inline_1095_selectionMode$$inline_1087_topIcon$$inline_1084$$ = window.document.createElement("div"), $bottomIcon$$inline_1085_cell$$inline_1082_foundMatch$$inline_1095_selectionMode$$inline_1087_topIcon$$inline_1084$$.className = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.getMappedStyle("selectaffordancetop"), $bottomIcon$$inline_1085_cell$$inline_1082_foundMatch$$inline_1095_selectionMode$$inline_1087_topIcon$$inline_1084$$.setAttribute("role", 
    "button"), $bottomIcon$$inline_1085_cell$$inline_1082_foundMatch$$inline_1095_selectionMode$$inline_1087_topIcon$$inline_1084$$.setAttribute("aria-label", $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_resources$.getTranslatedText("accessibleSelectionAffordanceTop")), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$.appendChild($bottomIcon$$inline_1085_cell$$inline_1082_foundMatch$$inline_1095_selectionMode$$inline_1087_topIcon$$inline_1084$$), 
    $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$ = window.document.createElement("div"), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$.className = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.getMappedStyle("toucharea"), $JSCompiler_StaticMethods_setElementDir$$($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$, -1 * $iconSize$$inline_1083_j$$inline_1094_left$$inline_1088$$ / 
    2, "bottom"), $bottomIcon$$inline_1085_cell$$inline_1082_foundMatch$$inline_1095_selectionMode$$inline_1087_topIcon$$inline_1084$$ = window.document.createElement("div"), $bottomIcon$$inline_1085_cell$$inline_1082_foundMatch$$inline_1095_selectionMode$$inline_1087_topIcon$$inline_1084$$.className = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.getMappedStyle("selectaffordancebottom"), $bottomIcon$$inline_1085_cell$$inline_1082_foundMatch$$inline_1095_selectionMode$$inline_1087_topIcon$$inline_1084$$.setAttribute("role", 
    "button"), $bottomIcon$$inline_1085_cell$$inline_1082_foundMatch$$inline_1095_selectionMode$$inline_1087_topIcon$$inline_1084$$.setAttribute("aria-label", $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_resources$.getTranslatedText("accessibleSelectionAffordanceBottom")), $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$.appendChild($bottomIcon$$inline_1085_cell$$inline_1082_foundMatch$$inline_1095_selectionMode$$inline_1087_topIcon$$inline_1084$$), 
    $bottomIcon$$inline_1085_cell$$inline_1082_foundMatch$$inline_1095_selectionMode$$inline_1087_topIcon$$inline_1084$$ = $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_options$.$getSelectionMode$(), "row" === $bottomIcon$$inline_1085_cell$$inline_1082_foundMatch$$inline_1095_selectionMode$$inline_1087_topIcon$$inline_1084$$ ? ($iconSize$$inline_1083_j$$inline_1094_left$$inline_1088$$ = $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_databody$) / 
    2 + $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_currentScrollLeft$ - $iconSize$$inline_1083_j$$inline_1094_left$$inline_1088$$ / 2, $JSCompiler_StaticMethods_setElementDir$$($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$, $iconSize$$inline_1083_j$$inline_1094_left$$inline_1088$$, $dir$$inline_1089_i$$inline_1093_row$$inline_1086$$), $JSCompiler_StaticMethods_setElementDir$$($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$, 
    $iconSize$$inline_1083_j$$inline_1094_left$$inline_1088$$, $dir$$inline_1089_i$$inline_1093_row$$inline_1086$$)) : ($bottomIcon$$inline_1085_cell$$inline_1082_foundMatch$$inline_1095_selectionMode$$inline_1087_topIcon$$inline_1084$$ = $JSCompiler_StaticMethods_findCell$$($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, $event$$75$$.target), $iconSize$$inline_1083_j$$inline_1094_left$$inline_1088$$ = $JSCompiler_StaticMethods_getElementDir$$($bottomIcon$$inline_1085_cell$$inline_1082_foundMatch$$inline_1095_selectionMode$$inline_1087_topIcon$$inline_1084$$, 
    $dir$$inline_1089_i$$inline_1093_row$$inline_1086$$) - $iconSize$$inline_1083_j$$inline_1094_left$$inline_1088$$ / 2, $JSCompiler_StaticMethods_setElementDir$$($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$, $iconSize$$inline_1083_j$$inline_1094_left$$inline_1088$$, $dir$$inline_1089_i$$inline_1093_row$$inline_1086$$), $JSCompiler_StaticMethods_setElementDir$$($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$, $iconSize$$inline_1083_j$$inline_1094_left$$inline_1088$$ + 
    $JSCompiler_StaticMethods_calculateColumnWidth$$($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, $bottomIcon$$inline_1085_cell$$inline_1082_foundMatch$$inline_1095_selectionMode$$inline_1087_topIcon$$inline_1084$$), $dir$$inline_1089_i$$inline_1093_row$$inline_1086$$)), $dir$$inline_1089_i$$inline_1093_row$$inline_1086$$ = $JSCompiler_StaticMethods_getElementsInRange$$($JSCompiler_StaticMethods__compareSelectionAndFire$self$$, $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.createRange($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_active$.indexes))[0].parentNode, 
    $dir$$inline_1089_i$$inline_1093_row$$inline_1086$$.appendChild($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_topSelectIconContainer$), $dir$$inline_1089_i$$inline_1093_row$$inline_1086$$.appendChild($JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$m_bottomSelectIconContainer$));
    $JSCompiler_StaticMethods__moveTouchSelectionAffordance$$($JSCompiler_StaticMethods__compareSelectionAndFire$self$$);
  }
  a: {
    if ($JSCompiler_inline_result$$208_selection$$8$$.length !== $clone$$1$$.length) {
      $JSCompiler_inline_result$$208_selection$$8$$ = !1;
    } else {
      for ($dir$$inline_1089_i$$inline_1093_row$$inline_1086$$ = 0;$dir$$inline_1089_i$$inline_1093_row$$inline_1086$$ < $JSCompiler_inline_result$$208_selection$$8$$.length;$dir$$inline_1089_i$$inline_1093_row$$inline_1086$$ += 1) {
        $bottomIcon$$inline_1085_cell$$inline_1082_foundMatch$$inline_1095_selectionMode$$inline_1087_topIcon$$inline_1084$$ = !1;
        for ($iconSize$$inline_1083_j$$inline_1094_left$$inline_1088$$ = 0;$iconSize$$inline_1083_j$$inline_1094_left$$inline_1088$$ < $clone$$1$$.length;$iconSize$$inline_1083_j$$inline_1094_left$$inline_1088$$ += 1) {
          $JSCompiler_inline_result$$208_selection$$8$$[$dir$$inline_1089_i$$inline_1093_row$$inline_1086$$].startIndex.row === $clone$$1$$[$iconSize$$inline_1083_j$$inline_1094_left$$inline_1088$$].startIndex.row && $JSCompiler_inline_result$$208_selection$$8$$[$dir$$inline_1089_i$$inline_1093_row$$inline_1086$$].startIndex.column === $clone$$1$$[$iconSize$$inline_1083_j$$inline_1094_left$$inline_1088$$].startIndex.column && $JSCompiler_inline_result$$208_selection$$8$$[$dir$$inline_1089_i$$inline_1093_row$$inline_1086$$].endIndex.row === 
          $clone$$1$$[$iconSize$$inline_1083_j$$inline_1094_left$$inline_1088$$].endIndex.row && $JSCompiler_inline_result$$208_selection$$8$$[$dir$$inline_1089_i$$inline_1093_row$$inline_1086$$].endIndex.column === $clone$$1$$[$iconSize$$inline_1083_j$$inline_1094_left$$inline_1088$$].endIndex.column && ($bottomIcon$$inline_1085_cell$$inline_1082_foundMatch$$inline_1095_selectionMode$$inline_1087_topIcon$$inline_1084$$ = !0);
        }
        if (!1 === $bottomIcon$$inline_1085_cell$$inline_1082_foundMatch$$inline_1095_selectionMode$$inline_1087_topIcon$$inline_1084$$) {
          $JSCompiler_inline_result$$208_selection$$8$$ = !1;
          break a;
        }
      }
      $JSCompiler_inline_result$$208_selection$$8$$ = !0;
    }
  }
  $JSCompiler_inline_result$$208_selection$$8$$ || $JSCompiler_StaticMethods__compareSelectionAndFire$self$$.$fireSelectionEvent$($event$$75$$, $clone$$1$$);
}, $JSCompiler_StaticMethods__removeTouchSelectionAffordance$$ = function $$JSCompiler_StaticMethods__removeTouchSelectionAffordance$$$($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$) {
  $JSCompiler_StaticMethods__isDatabodyCellActive$$($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$) && $JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_topSelectIconContainer$ && $JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_topSelectIconContainer$.parentNode && ($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_topSelectIconContainer$.parentNode.removeChild($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_topSelectIconContainer$), 
  $JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$.parentNode.removeChild($JSCompiler_StaticMethods__removeTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$));
}, $JSCompiler_StaticMethods__moveTouchSelectionAffordance$$ = function $$JSCompiler_StaticMethods__moveTouchSelectionAffordance$$$($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$) {
  var $selection$$9_topIconCell$$, $topRow$$, $bottomRow$$, $dir$$20_selectionMode$$3$$, $bottomIconCell_elementsInRange$$;
  $selection$$9_topIconCell$$ = $JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$GetSelection$();
  0 < $selection$$9_topIconCell$$.length && ($dir$$20_selectionMode$$3$$ = $JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_options$.$getSelectionMode$(), $topRow$$ = $JSCompiler_StaticMethods__findRowByKey$$($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$, $selection$$9_topIconCell$$[$selection$$9_topIconCell$$.length - 1].startKey.row), $bottomRow$$ = $JSCompiler_StaticMethods__findRowByKey$$($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$, $selection$$9_topIconCell$$[$selection$$9_topIconCell$$.length - 
  1].endKey.row), null != $JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_topSelectIconContainer$ && null != $JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$ && ("row" === $dir$$20_selectionMode$$3$$ ? ($topRow$$.appendChild($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_topSelectIconContainer$), $bottomRow$$.appendChild($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$)) : 
  ($dir$$20_selectionMode$$3$$ = $JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_resources$.isRTLMode() ? "right" : "left", $bottomIconCell_elementsInRange$$ = $JSCompiler_StaticMethods_getElementsInRange$$($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$, $selection$$9_topIconCell$$[$selection$$9_topIconCell$$.length - 1]), $selection$$9_topIconCell$$ = $bottomIconCell_elementsInRange$$[0], $bottomIconCell_elementsInRange$$ = $bottomIconCell_elementsInRange$$[$bottomIconCell_elementsInRange$$.length - 
  1], $topRow$$.appendChild($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_topSelectIconContainer$), $bottomRow$$.appendChild($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$), $JSCompiler_StaticMethods_setElementDir$$($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_topSelectIconContainer$, $JSCompiler_StaticMethods_getElementDir$$($selection$$9_topIconCell$$, $dir$$20_selectionMode$$3$$) - $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$) / 
  2, $dir$$20_selectionMode$$3$$), $JSCompiler_StaticMethods_setElementDir$$($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$, $JSCompiler_StaticMethods_getElementDir$$($bottomIconCell_elementsInRange$$, $dir$$20_selectionMode$$3$$) + $JSCompiler_StaticMethods_calculateColumnWidth$$($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$, $bottomIconCell_elementsInRange$$) - $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$($JSCompiler_StaticMethods__moveTouchSelectionAffordance$self$$) / 
  2, $dir$$20_selectionMode$$3$$))));
}, $JSCompiler_StaticMethods__scrollTouchSelectionAffordance$$ = function $$JSCompiler_StaticMethods__scrollTouchSelectionAffordance$$$($JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$) {
  var $newLeft$$, $dir$$21$$;
  "row" === $JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_options$.$getSelectionMode$() && null != $JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_topSelectIconContainer$ && ($dir$$21$$ = $JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_resources$.isRTLMode() ? "right" : "left", $newLeft$$ = $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_databody$) / 2 + $JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_currentScrollLeft$, 
  $JSCompiler_StaticMethods_setElementDir$$($JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_topSelectIconContainer$, $newLeft$$, $dir$$21$$), $JSCompiler_StaticMethods_setElementDir$$($JSCompiler_StaticMethods__scrollTouchSelectionAffordance$self$$.$m_bottomSelectIconContainer$, $newLeft$$, $dir$$21$$));
}, $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$ = function $$JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$$$($JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$) {
  var $div$$1$$, $divWidth$$;
  null == $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_touchSelectionAffordanceSize$ && ($div$$1$$ = window.document.createElement("div"), $div$$1$$.className = $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.getMappedStyle("toucharea"), $div$$1$$.style.visibilty = "hidden", $div$$1$$.style.top = "0px", $div$$1$$.style.visibilty = "0px", $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_root$.appendChild($div$$1$$), $divWidth$$ = $div$$1$$.offsetWidth, 
  $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_root$.removeChild($div$$1$$), $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_touchSelectionAffordanceSize$ = $divWidth$$);
  return $JSCompiler_StaticMethods__getTouchSelectionAffordanceSize$self$$.$m_touchSelectionAffordanceSize$;
};

/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
var $JSCompiler_StaticMethods_handleResize$$ = function $$JSCompiler_StaticMethods_handleResize$$$($JSCompiler_StaticMethods_handleResize$self$$, $event$$57$$) {
  var $header$$18_oldElementHeight$$inline_999_oldElementWidth$$inline_997_resizeHeaderMode$$inline_996$$;
  if (!1 === $JSCompiler_StaticMethods_handleResize$self$$.$m_isResizing$) {
    $header$$18_oldElementHeight$$inline_999_oldElementWidth$$inline_997_resizeHeaderMode$$inline_996$$ = $JSCompiler_StaticMethods_handleResize$self$$.find($event$$57$$.target, "header"), null == $header$$18_oldElementHeight$$inline_999_oldElementWidth$$inline_997_resizeHeaderMode$$inline_996$$ || $header$$18_oldElementHeight$$inline_999_oldElementWidth$$inline_997_resizeHeaderMode$$inline_996$$ != $JSCompiler_StaticMethods_handleResize$self$$.$m_rowHeader$ && $header$$18_oldElementHeight$$inline_999_oldElementWidth$$inline_997_resizeHeaderMode$$inline_996$$ != 
    $JSCompiler_StaticMethods_handleResize$self$$.$m_colHeader$ || ($JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ = $JSCompiler_StaticMethods_manageHeaderCursor$$($JSCompiler_StaticMethods_handleResize$self$$, $event$$57$$), null != $JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$ && ("default" == $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ ? ($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$.style.cursor = "", null != $JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElementSibling$ && 
    ($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElementSibling$.style.cursor = "")) : ($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$.style.cursor = $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$, null != $JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElementSibling$ && ($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElementSibling$.style.cursor = $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$))));
  } else {
    var $newElementHeight$$inline_1000_newElementWidth$$inline_998$$;
    $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$ = $event$$57$$.pageX;
    $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$ = $event$$57$$.pageY;
    $JSCompiler_StaticMethods_isTouchDevice$$($JSCompiler_StaticMethods_handleResize$self$$.$m_utils$) ? ($JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$ = $event$$57$$.touches[0].pageX, $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$ = $event$$57$$.touches[0].pageY) : ($JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$ = $event$$57$$.pageX, $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$ = $event$$57$$.pageY);
    $header$$18_oldElementHeight$$inline_999_oldElementWidth$$inline_997_resizeHeaderMode$$inline_996$$ = $JSCompiler_StaticMethods_containsCSSClassName$$($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$, $JSCompiler_StaticMethods_handleResize$self$$.getMappedStyle("colheadercell")) ? "column" : "row";
    "col-resize" === $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ ? "column" === $header$$18_oldElementHeight$$inline_999_oldElementWidth$$inline_997_resizeHeaderMode$$inline_996$$ ? ($header$$18_oldElementHeight$$inline_999_oldElementWidth$$inline_997_resizeHeaderMode$$inline_996$$ = $JSCompiler_StaticMethods_calculateColumnHeaderWidth$$($JSCompiler_StaticMethods_handleResize$self$$, $JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$), $newElementHeight$$inline_1000_newElementWidth$$inline_998$$ = 
    $JSCompiler_StaticMethods_getNewElementWidth$$($JSCompiler_StaticMethods_handleResize$self$$, "column", $header$$18_oldElementHeight$$inline_999_oldElementWidth$$inline_997_resizeHeaderMode$$inline_996$$), $JSCompiler_StaticMethods_resizeColWidth$$($JSCompiler_StaticMethods_handleResize$self$$, $header$$18_oldElementHeight$$inline_999_oldElementWidth$$inline_997_resizeHeaderMode$$inline_996$$, $newElementHeight$$inline_1000_newElementWidth$$inline_998$$)) : "row" === $header$$18_oldElementHeight$$inline_999_oldElementWidth$$inline_997_resizeHeaderMode$$inline_996$$ && 
    ($header$$18_oldElementHeight$$inline_999_oldElementWidth$$inline_997_resizeHeaderMode$$inline_996$$ = $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$), $newElementHeight$$inline_1000_newElementWidth$$inline_998$$ = $JSCompiler_StaticMethods_getNewElementWidth$$($JSCompiler_StaticMethods_handleResize$self$$, "row", $header$$18_oldElementHeight$$inline_999_oldElementWidth$$inline_997_resizeHeaderMode$$inline_996$$), $JSCompiler_StaticMethods_resizeRowWidth$$($JSCompiler_StaticMethods_handleResize$self$$, 
    $newElementHeight$$inline_1000_newElementWidth$$inline_998$$ - $header$$18_oldElementHeight$$inline_999_oldElementWidth$$inline_997_resizeHeaderMode$$inline_996$$)) : "row-resize" === $JSCompiler_StaticMethods_handleResize$self$$.$m_cursor$ && ("row" === $header$$18_oldElementHeight$$inline_999_oldElementWidth$$inline_997_resizeHeaderMode$$inline_996$$ ? ($header$$18_oldElementHeight$$inline_999_oldElementWidth$$inline_997_resizeHeaderMode$$inline_996$$ = $JSCompiler_StaticMethods_calculateRowHeaderHeight$$($JSCompiler_StaticMethods_handleResize$self$$, 
    $JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$), $newElementHeight$$inline_1000_newElementWidth$$inline_998$$ = $JSCompiler_StaticMethods_getNewElementHeight$$($JSCompiler_StaticMethods_handleResize$self$$, "row", $header$$18_oldElementHeight$$inline_999_oldElementWidth$$inline_997_resizeHeaderMode$$inline_996$$), $JSCompiler_StaticMethods_resizeRowHeight$$($JSCompiler_StaticMethods_handleResize$self$$, $header$$18_oldElementHeight$$inline_999_oldElementWidth$$inline_997_resizeHeaderMode$$inline_996$$, 
    $newElementHeight$$inline_1000_newElementWidth$$inline_998$$)) : "column" === $header$$18_oldElementHeight$$inline_999_oldElementWidth$$inline_997_resizeHeaderMode$$inline_996$$ && ($header$$18_oldElementHeight$$inline_999_oldElementWidth$$inline_997_resizeHeaderMode$$inline_996$$ = $JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_StaticMethods_handleResize$self$$.$m_resizingElement$), $newElementHeight$$inline_1000_newElementWidth$$inline_998$$ = $JSCompiler_StaticMethods_getNewElementHeight$$($JSCompiler_StaticMethods_handleResize$self$$, 
    "column", $header$$18_oldElementHeight$$inline_999_oldElementWidth$$inline_997_resizeHeaderMode$$inline_996$$), $JSCompiler_StaticMethods_resizeColHeight$$($JSCompiler_StaticMethods_handleResize$self$$, $newElementHeight$$inline_1000_newElementWidth$$inline_998$$ - $header$$18_oldElementHeight$$inline_999_oldElementWidth$$inline_997_resizeHeaderMode$$inline_996$$)));
    $JSCompiler_StaticMethods_buildCorners$$($JSCompiler_StaticMethods_handleResize$self$$);
    $JSCompiler_StaticMethods_isTouchDevice$$($JSCompiler_StaticMethods_handleResize$self$$.$m_utils$) && $JSCompiler_StaticMethods__moveTouchSelectionAffordance$$($JSCompiler_StaticMethods_handleResize$self$$);
    $JSCompiler_StaticMethods_handleResize$self$$.$m_lastMouseX$ = $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseX$;
    $JSCompiler_StaticMethods_handleResize$self$$.$m_lastMouseY$ = $JSCompiler_StaticMethods_handleResize$self$$.$m_currentMouseY$;
  }
}, $JSCompiler_StaticMethods_handleResizeMouseDown$$ = function $$JSCompiler_StaticMethods_handleResizeMouseDown$$$($JSCompiler_StaticMethods_handleResizeMouseDown$self$$, $event$$58$$) {
  return "col-resize" === $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_cursor$ || "row-resize" === $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_cursor$ ? ($JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_isResizing$ = !0, $JSCompiler_StaticMethods_isTouchDevice$$($JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_utils$) ? ($JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseX$ = $event$$58$$.touches[0].pageX, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseY$ = 
  $event$$58$$.touches[0].pageY) : ($JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseX$ = $event$$58$$.pageX, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_lastMouseY$ = $event$$58$$.pageY), $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeLeft$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeMinLeft$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeTop$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeMinTop$ = 
  0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeRight$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_overResizeBottom$ = 0, $JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_orginalResizeDimensions$ = {width:$JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_resizingElement$), height:$JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_StaticMethods_handleResizeMouseDown$self$$.$m_resizingElement$)}, 
  !0) : !1;
}, $JSCompiler_StaticMethods_handleResizeMouseUp$$ = function $$JSCompiler_StaticMethods_handleResizeMouseUp$$$($JSCompiler_StaticMethods_handleResizeMouseUp$self$$, $event$$59$$) {
  var $details$$6_newHeight_size$$10$$, $newWidth$$;
  if (!0 === $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_isResizing$) {
    $newWidth$$ = $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$);
    $details$$6_newHeight_size$$10$$ = $JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$);
    if ($newWidth$$ != $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_orginalResizeDimensions$.width || $details$$6_newHeight_size$$10$$ != $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_orginalResizeDimensions$.height) {
      $details$$6_newHeight_size$$10$$ = "col-resize" === $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_cursor$ ? $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$.style.width : $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$.style.height, $details$$6_newHeight_size$$10$$ = {event:$event$$59$$, ui:{header:$JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods_handleResizeMouseUp$self$$, $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$), 
      oldDimensions:{width:$JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_orginalResizeDimensions$.width, height:$JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_orginalResizeDimensions$.height}, newDimensions:{width:$JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$), height:$JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$)}, size:$details$$6_newHeight_size$$10$$}}, 
      $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.fireEvent("resize", $details$$6_newHeight_size$$10$$);
    }
    $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_isResizing$ = !1;
    $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_cursor$ = "default";
    $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$.style.cursor = "";
    null != $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElementSibling$ && ($JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElementSibling$.style.cursor = "");
    $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElement$ = null;
    $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_resizingElementSibling$ = null;
    $JSCompiler_StaticMethods_handleResizeMouseUp$self$$.$m_orginalResizeDimensions$ = null;
  }
}, $JSCompiler_StaticMethods__isDOMElementResizable$$ = function $$JSCompiler_StaticMethods__isDOMElementResizable$$$($JSCompiler_StaticMethods__isDOMElementResizable$self$$, $element$$32$$) {
  return null == $element$$32$$ ? !1 : "true" === $element$$32$$.getAttribute($JSCompiler_StaticMethods__isDOMElementResizable$self$$.$m_resources$.getMappedAttribute("resizable"));
}, $JSCompiler_StaticMethods_manageHeaderCursor$$ = function $$JSCompiler_StaticMethods_manageHeaderCursor$$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $event$$60$$) {
  var $elem$$22$$ = $event$$60$$.target, $resizeHeaderMode$$, $edges_targetWidth$$inline_1007$$, $cursorX_rightEdgeCheck$$, $bottomEdgeCheck_cursorY_index$$76$$, $level$$27_offsetPixel$$, $widthResizable$$, $heightResizable$$, $siblingResizable$$, $leftEdge$$inline_1005_rtl$$3$$, $sibling$$1$$, $parent$$3$$, $elem$$inline_1003_leftEdgeCheck_targetHeight$$inline_1008$$, $elementXY$$inline_1004_topEdge$$inline_1006_topEdgeCheck$$;
  ($elem$$22$$ = $JSCompiler_StaticMethods_manageHeaderCursor$self$$.find($event$$60$$.target, "colheadercell")) ? $resizeHeaderMode$$ = "column" : ($elem$$22$$ = $JSCompiler_StaticMethods_manageHeaderCursor$self$$.find($event$$60$$.target, "rowheadercell"), $resizeHeaderMode$$ = "row");
  if (!$elem$$22$$) {
    return "default";
  }
  $bottomEdgeCheck_cursorY_index$$76$$ = $JSCompiler_StaticMethods_getHeaderCellIndex$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$22$$);
  $level$$27_offsetPixel$$ = $JSCompiler_StaticMethods_getHeaderCellLevel$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$22$$);
  "column" === $resizeHeaderMode$$ ? ($heightResizable$$ = "enable" === $JSCompiler_StaticMethods_isResizable$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_options$, $resizeHeaderMode$$).height ? !0 : !1, $widthResizable$$ = $JSCompiler_StaticMethods__isDOMElementResizable$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$22$$), $sibling$$1$$ = $JSCompiler_StaticMethods__getColumnHeaderByIndex$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $bottomEdgeCheck_cursorY_index$$76$$ - 
  1, $level$$27_offsetPixel$$), $siblingResizable$$ = $JSCompiler_StaticMethods__isDOMElementResizable$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $sibling$$1$$), $parent$$3$$ = $JSCompiler_StaticMethods__getColumnHeaderByIndex$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $bottomEdgeCheck_cursorY_index$$76$$, $level$$27_offsetPixel$$ - 1)) : "row" === $resizeHeaderMode$$ && ($widthResizable$$ = "enable" === $JSCompiler_StaticMethods_isResizable$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_options$, 
  $resizeHeaderMode$$).width ? !0 : !1, $heightResizable$$ = $JSCompiler_StaticMethods__isDOMElementResizable$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$22$$), $sibling$$1$$ = $JSCompiler_StaticMethods__getRowHeaderByIndex$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $bottomEdgeCheck_cursorY_index$$76$$ - 1, $level$$27_offsetPixel$$), $siblingResizable$$ = $JSCompiler_StaticMethods__isDOMElementResizable$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $sibling$$1$$), 
  $parent$$3$$ = $JSCompiler_StaticMethods__getRowHeaderByIndex$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $bottomEdgeCheck_cursorY_index$$76$$, $level$$27_offsetPixel$$ - 1));
  $JSCompiler_StaticMethods_isTouchDevice$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_utils$) ? ($cursorX_rightEdgeCheck$$ = $event$$60$$.touches[0].pageX, $bottomEdgeCheck_cursorY_index$$76$$ = $event$$60$$.touches[0].pageY, $level$$27_offsetPixel$$ = 8) : ($cursorX_rightEdgeCheck$$ = $event$$60$$.pageX, $bottomEdgeCheck_cursorY_index$$76$$ = $event$$60$$.pageY, $level$$27_offsetPixel$$ = 5);
  $elem$$inline_1003_leftEdgeCheck_targetHeight$$inline_1008$$ = $elem$$22$$;
  $elementXY$$inline_1004_topEdge$$inline_1006_topEdgeCheck$$ = $JSCompiler_StaticMethods_findPos$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$inline_1003_leftEdgeCheck_targetHeight$$inline_1008$$);
  $leftEdge$$inline_1005_rtl$$3$$ = $elementXY$$inline_1004_topEdge$$inline_1006_topEdgeCheck$$[0];
  $elementXY$$inline_1004_topEdge$$inline_1006_topEdgeCheck$$ = $elementXY$$inline_1004_topEdge$$inline_1006_topEdgeCheck$$[1];
  $JSCompiler_StaticMethods_containsCSSClassName$$($elem$$inline_1003_leftEdgeCheck_targetHeight$$inline_1008$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.getMappedStyle("colheadercell")) ? ($edges_targetWidth$$inline_1007$$ = $JSCompiler_StaticMethods_calculateColumnHeaderWidth$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$inline_1003_leftEdgeCheck_targetHeight$$inline_1008$$), $elem$$inline_1003_leftEdgeCheck_targetHeight$$inline_1008$$ = $JSCompiler_StaticMethods_getElementHeight$$($elem$$inline_1003_leftEdgeCheck_targetHeight$$inline_1008$$)) : 
  ($edges_targetWidth$$inline_1007$$ = $JSCompiler_StaticMethods_getElementWidth$$($elem$$inline_1003_leftEdgeCheck_targetHeight$$inline_1008$$), $elem$$inline_1003_leftEdgeCheck_targetHeight$$inline_1008$$ = $JSCompiler_StaticMethods_calculateRowHeaderHeight$$($JSCompiler_StaticMethods_manageHeaderCursor$self$$, $elem$$inline_1003_leftEdgeCheck_targetHeight$$inline_1008$$));
  $edges_targetWidth$$inline_1007$$ = [$leftEdge$$inline_1005_rtl$$3$$, $elementXY$$inline_1004_topEdge$$inline_1006_topEdgeCheck$$, $leftEdge$$inline_1005_rtl$$3$$ + $edges_targetWidth$$inline_1007$$, $elementXY$$inline_1004_topEdge$$inline_1006_topEdgeCheck$$ + $elem$$inline_1003_leftEdgeCheck_targetHeight$$inline_1008$$];
  $leftEdge$$inline_1005_rtl$$3$$ = $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resources$.isRTLMode();
  $elem$$inline_1003_leftEdgeCheck_targetHeight$$inline_1008$$ = $cursorX_rightEdgeCheck$$ < $edges_targetWidth$$inline_1007$$[0] + $level$$27_offsetPixel$$;
  $elementXY$$inline_1004_topEdge$$inline_1006_topEdgeCheck$$ = $bottomEdgeCheck_cursorY_index$$76$$ < $edges_targetWidth$$inline_1007$$[1] + $level$$27_offsetPixel$$;
  $cursorX_rightEdgeCheck$$ = $cursorX_rightEdgeCheck$$ > $edges_targetWidth$$inline_1007$$[2] - $level$$27_offsetPixel$$;
  $bottomEdgeCheck_cursorY_index$$76$$ = $bottomEdgeCheck_cursorY_index$$76$$ > $edges_targetWidth$$inline_1007$$[3] - $level$$27_offsetPixel$$;
  if ("column" === $resizeHeaderMode$$) {
    if ($widthResizable$$ && ($leftEdge$$inline_1005_rtl$$3$$ ? $elem$$inline_1003_leftEdgeCheck_targetHeight$$inline_1008$$ : $cursorX_rightEdgeCheck$$)) {
      return $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$22$$, "col-resize";
    }
    if ($siblingResizable$$ && ($leftEdge$$inline_1005_rtl$$3$$ ? $cursorX_rightEdgeCheck$$ : $elem$$inline_1003_leftEdgeCheck_targetHeight$$inline_1008$$)) {
      if ($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $sibling$$1$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElementSibling$ = $elem$$22$$, null !== $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$) {
        return "col-resize";
      }
    } else {
      if ($heightResizable$$) {
        if ($bottomEdgeCheck_cursorY_index$$76$$) {
          return $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$22$$, "row-resize";
        }
        if ($elementXY$$inline_1004_topEdge$$inline_1006_topEdgeCheck$$) {
          return $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $parent$$3$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElementSibling$ = $elem$$22$$, "row-resize";
        }
      }
    }
  } else {
    if ("row" === $resizeHeaderMode$$) {
      if ($heightResizable$$ && $bottomEdgeCheck_cursorY_index$$76$$) {
        return $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$22$$, "row-resize";
      }
      if ($siblingResizable$$ && $elementXY$$inline_1004_topEdge$$inline_1006_topEdgeCheck$$ && ($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $sibling$$1$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElementSibling$ = $elem$$22$$, null !== $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$)) {
        return "row-resize";
      }
      if ($widthResizable$$) {
        if ($leftEdge$$inline_1005_rtl$$3$$ ? $elem$$inline_1003_leftEdgeCheck_targetHeight$$inline_1008$$ : $cursorX_rightEdgeCheck$$) {
          return $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $elem$$22$$, "col-resize";
        }
        if ($leftEdge$$inline_1005_rtl$$3$$ ? $cursorX_rightEdgeCheck$$ : $elem$$inline_1003_leftEdgeCheck_targetHeight$$inline_1008$$) {
          if ($JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$ = $parent$$3$$, $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElementSibling$ = $elem$$22$$, null !== $JSCompiler_StaticMethods_manageHeaderCursor$self$$.$m_resizingElement$) {
            return "col-resize";
          }
        }
      }
    }
  }
  return "default";
}, $JSCompiler_StaticMethods_resizeColWidth$$ = function $$JSCompiler_StaticMethods_resizeColWidth$$$($JSCompiler_StaticMethods_resizeColWidth$self$$, $oldElementWidth$$1_widthChange$$, $newElementWidth$$1_newScrollerWidth_oldScrollerWidth$$) {
  $oldElementWidth$$1_widthChange$$ = $newElementWidth$$1_newScrollerWidth_oldScrollerWidth$$ - $oldElementWidth$$1_widthChange$$;
  if (0 != $oldElementWidth$$1_widthChange$$) {
    $newElementWidth$$1_newScrollerWidth_oldScrollerWidth$$ = $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_scroller$.firstChild);
    $newElementWidth$$1_newScrollerWidth_oldScrollerWidth$$ += $oldElementWidth$$1_widthChange$$;
    $JSCompiler_StaticMethods__databodyEmpty$$($JSCompiler_StaticMethods_resizeColWidth$self$$) || ($JSCompiler_StaticMethods_setElementWidth$$($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_scroller$.firstChild, $newElementWidth$$1_newScrollerWidth_oldScrollerWidth$$), $JSCompiler_StaticMethods_setElementWidth$$($JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.firstChild, $newElementWidth$$1_newScrollerWidth_oldScrollerWidth$$));
    var $dir$$inline_1012$$, $databodyRows$$inline_1013$$, $i$$inline_1014$$, $newStart$$inline_1015$$, $j$$inline_1016$$, $index$$inline_1017$$, $cells$$inline_1018$$, $cell$$inline_1019$$, $newWidth$$inline_1020$$;
    $dir$$inline_1012$$ = $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resources$.isRTLMode() ? "right" : "left";
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.style.display = "none";
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_colHeader$.style.display = "none";
    $index$$inline_1017$$ = $JSCompiler_StaticMethods_getHeaderCellIndex$$($JSCompiler_StaticMethods_resizeColWidth$self$$, $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$);
    1 < $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_columnHeaderLevelCount$ && $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$ === $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$.parentNode.firstChild && null != $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$.nextSibling && ($index$$inline_1017$$ += $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_resizeColWidth$self$$, $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_resizingElement$.parentNode, 
    "extent") - 1);
    $JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$$($JSCompiler_StaticMethods_resizeColWidth$self$$, $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_colHeader$.firstChild, $index$$inline_1017$$, $oldElementWidth$$1_widthChange$$, $dir$$inline_1012$$, $JSCompiler_StaticMethods_resizeColWidth$self$$.getMappedStyle("colheadercell"), "column");
    if (null != $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.firstChild) {
      for ($databodyRows$$inline_1013$$ = $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.firstChild.childNodes, $i$$inline_1014$$ = 0;$i$$inline_1014$$ < $databodyRows$$inline_1013$$.length;$i$$inline_1014$$++) {
        for ($cells$$inline_1018$$ = $databodyRows$$inline_1013$$[$i$$inline_1014$$].childNodes, $cell$$inline_1019$$ = $cells$$inline_1018$$[$index$$inline_1017$$ - $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_startCol$], null == $newWidth$$inline_1020$$ && ($newWidth$$inline_1020$$ = $JSCompiler_StaticMethods_getElementWidth$$($cell$$inline_1019$$) + $oldElementWidth$$1_widthChange$$), $JSCompiler_StaticMethods_setElementWidth$$($cell$$inline_1019$$, $newWidth$$inline_1020$$), $j$$inline_1016$$ = 
        $index$$inline_1017$$ - $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_startCol$ + 1;$j$$inline_1016$$ < $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_endCol$ - $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_startCol$ + 1;$j$$inline_1016$$ += 1) {
          $cell$$inline_1019$$ = $cells$$inline_1018$$[$j$$inline_1016$$], $newStart$$inline_1015$$ = $JSCompiler_StaticMethods_getElementDir$$($cell$$inline_1019$$, $dir$$inline_1012$$) + $oldElementWidth$$1_widthChange$$, $JSCompiler_StaticMethods_setElementDir$$($cell$$inline_1019$$, $newStart$$inline_1015$$, $dir$$inline_1012$$);
        }
      }
    }
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_databody$.style.display = "";
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_colHeader$.style.display = "";
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_endColPixel$ += $oldElementWidth$$1_widthChange$$;
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_endColHeaderPixel$ += $oldElementWidth$$1_widthChange$$;
    $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_avgColWidth$ = $newElementWidth$$1_newScrollerWidth_oldScrollerWidth$$ / $JSCompiler_StaticMethods_resizeColWidth$self$$.$m_dataSource$.getCount("column");
    $JSCompiler_StaticMethods_manageResizeScrollbars$$($JSCompiler_StaticMethods_resizeColWidth$self$$);
  }
}, $JSCompiler_StaticMethods_resizeRowHeight$$ = function $$JSCompiler_StaticMethods_resizeRowHeight$$$($JSCompiler_StaticMethods_resizeRowHeight$self$$, $heightChange_oldElementHeight$$1$$, $newElementHeight$$1_newScrollerHeight_oldScrollerHeight$$) {
  $heightChange_oldElementHeight$$1$$ = $newElementHeight$$1_newScrollerHeight_oldScrollerHeight$$ - $heightChange_oldElementHeight$$1$$;
  if (0 != $heightChange_oldElementHeight$$1$$) {
    $newElementHeight$$1_newScrollerHeight_oldScrollerHeight$$ = $JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_scroller$.firstChild);
    $newElementHeight$$1_newScrollerHeight_oldScrollerHeight$$ += $heightChange_oldElementHeight$$1$$;
    $JSCompiler_StaticMethods__databodyEmpty$$($JSCompiler_StaticMethods_resizeRowHeight$self$$) || ($JSCompiler_StaticMethods_setElementHeight$$($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_scroller$.firstChild, $newElementHeight$$1_newScrollerHeight_oldScrollerHeight$$), $JSCompiler_StaticMethods_setElementHeight$$($JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.firstChild, $newElementHeight$$1_newScrollerHeight_oldScrollerHeight$$));
    var $databodyRows$$inline_1024$$, $i$$inline_1025_index$$inline_1027$$, $newHeight$$inline_1029_newStart$$inline_1026$$, $row$$inline_1028$$;
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.style.display = "none";
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.style.display = "none";
    $i$$inline_1025_index$$inline_1027$$ = $JSCompiler_StaticMethods_getHeaderCellIndex$$($JSCompiler_StaticMethods_resizeRowHeight$self$$, $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$);
    1 < $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeaderLevelCount$ && $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$ === $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$.parentNode.firstChild && null != $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$.nextSibling && ($i$$inline_1025_index$$inline_1027$$ += $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_resizeRowHeight$self$$, $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_resizingElement$.parentNode, 
    "extent") - 1);
    $JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$$($JSCompiler_StaticMethods_resizeRowHeight$self$$, $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.firstChild, $i$$inline_1025_index$$inline_1027$$, $heightChange_oldElementHeight$$1$$, "top", $JSCompiler_StaticMethods_resizeRowHeight$self$$.getMappedStyle("rowheadercell"), "row");
    if (null != $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.firstChild) {
      for ($databodyRows$$inline_1024$$ = $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.firstChild.childNodes, $row$$inline_1028$$ = $databodyRows$$inline_1024$$[$i$$inline_1025_index$$inline_1027$$ - $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_startRow$], $newHeight$$inline_1029_newStart$$inline_1026$$ = $JSCompiler_StaticMethods_getElementHeight$$($row$$inline_1028$$) + $heightChange_oldElementHeight$$1$$, $JSCompiler_StaticMethods_setElementHeight$$($row$$inline_1028$$, 
      $newHeight$$inline_1029_newStart$$inline_1026$$), $i$$inline_1025_index$$inline_1027$$ = $i$$inline_1025_index$$inline_1027$$ - $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_startRow$ + 1;$i$$inline_1025_index$$inline_1027$$ < $databodyRows$$inline_1024$$.length;$i$$inline_1025_index$$inline_1027$$++) {
        $row$$inline_1028$$ = $databodyRows$$inline_1024$$[$i$$inline_1025_index$$inline_1027$$], $newHeight$$inline_1029_newStart$$inline_1026$$ = $JSCompiler_StaticMethods_getElementDir$$($row$$inline_1028$$, "top") + $heightChange_oldElementHeight$$1$$, $JSCompiler_StaticMethods_setElementDir$$($row$$inline_1028$$, $newHeight$$inline_1029_newStart$$inline_1026$$, "top");
      }
    }
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_databody$.style.display = "";
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_rowHeader$.style.display = "";
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_endRowPixel$ += $heightChange_oldElementHeight$$1$$;
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_endRowHeaderPixel$ += $heightChange_oldElementHeight$$1$$;
    $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_avgRowHeight$ = $newElementHeight$$1_newScrollerHeight_oldScrollerHeight$$ / $JSCompiler_StaticMethods_resizeRowHeight$self$$.$m_dataSource$.getCount("row");
    $JSCompiler_StaticMethods_manageResizeScrollbars$$($JSCompiler_StaticMethods_resizeRowHeight$self$$);
  }
}, $JSCompiler_StaticMethods_resizeColHeight$$ = function $$JSCompiler_StaticMethods_resizeColHeight$$$($JSCompiler_StaticMethods_resizeColHeight$self$$, $heightChange$$1$$) {
  if (0 != $heightChange$$1$$) {
    var $level$$28$$ = $JSCompiler_StaticMethods_getHeaderCellLevel$$($JSCompiler_StaticMethods_resizeColHeight$self$$, $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_resizingElement$) + $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_resizeColHeight$self$$, $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_resizingElement$, "depth") - 1;
    $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_columnHeaderLevelHeights$[$level$$28$$] += $heightChange$$1$$;
    $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_databody$.style.display = "none";
    $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_colHeader$.style.display = "none";
    $JSCompiler_StaticMethods__shiftHeadersDirInContainer$$($JSCompiler_StaticMethods_resizeColHeight$self$$, $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_colHeader$.firstChild, $heightChange$$1$$, $level$$28$$, "top", $JSCompiler_StaticMethods_resizeColHeight$self$$.getMappedStyle("colheadercell"), "column");
    $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_databody$.style.display = "";
    $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_colHeader$.style.display = "";
    $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_colHeaderHeight$ += $heightChange$$1$$;
    $JSCompiler_StaticMethods_setElementHeight$$($JSCompiler_StaticMethods_resizeColHeight$self$$.$m_colHeader$, $JSCompiler_StaticMethods_resizeColHeight$self$$.$m_colHeaderHeight$);
    $JSCompiler_StaticMethods_manageResizeScrollbars$$($JSCompiler_StaticMethods_resizeColHeight$self$$);
  }
}, $JSCompiler_StaticMethods_resizeRowWidth$$ = function $$JSCompiler_StaticMethods_resizeRowWidth$$$($JSCompiler_StaticMethods_resizeRowWidth$self$$, $widthChange$$1$$) {
  if (0 != $widthChange$$1$$) {
    var $level$$29$$ = $JSCompiler_StaticMethods_getHeaderCellLevel$$($JSCompiler_StaticMethods_resizeRowWidth$self$$, $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_resizingElement$) + $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods_resizeRowWidth$self$$, $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_resizingElement$, "depth") - 1;
    $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_rowHeaderLevelWidths$[$level$$29$$] += $widthChange$$1$$;
    var $dir$$inline_1038$$ = $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_resources$.isRTLMode() ? "right" : "left";
    $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_databody$.style.display = "none";
    $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_rowHeader$.style.display = "none";
    $JSCompiler_StaticMethods__shiftHeadersDirInContainer$$($JSCompiler_StaticMethods_resizeRowWidth$self$$, $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_rowHeader$.firstChild, $widthChange$$1$$, $level$$29$$, $dir$$inline_1038$$, $JSCompiler_StaticMethods_resizeRowWidth$self$$.getMappedStyle("rowheadercell"), "row");
    $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_databody$.style.display = "";
    $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_rowHeader$.style.display = "";
    $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_rowHeaderWidth$ += $widthChange$$1$$;
    $JSCompiler_StaticMethods_setElementWidth$$($JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_rowHeader$, $JSCompiler_StaticMethods_resizeRowWidth$self$$.$m_rowHeaderWidth$);
    $JSCompiler_StaticMethods_manageResizeScrollbars$$($JSCompiler_StaticMethods_resizeRowWidth$self$$);
  }
}, $JSCompiler_StaticMethods_getNewElementWidth$$ = function $$JSCompiler_StaticMethods_getNewElementWidth$$$($JSCompiler_StaticMethods_getNewElementWidth$self$$, $axis$$35$$, $oldElementWidth$$2$$) {
  var $minWidth$$, $deltaWidth$$, $newElementWidth$$3$$, $halfGridWidth$$;
  $minWidth$$ = $JSCompiler_StaticMethods__getMinValue$$($JSCompiler_StaticMethods_getNewElementWidth$self$$, "width", $axis$$35$$);
  $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_databody$);
  $deltaWidth$$ = $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_resources$.isRTLMode() ? $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_lastMouseX$ - $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_currentMouseX$ : $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_currentMouseX$ - $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_lastMouseX$;
  $newElementWidth$$3$$ = $oldElementWidth$$2$$ + $deltaWidth$$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeLeft$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeMinLeft$ + $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeRight$;
  $JSCompiler_StaticMethods_getElementWidth$$($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_scroller$.firstChild);
  $halfGridWidth$$ = Math.round($JSCompiler_StaticMethods_getNewElementWidth$self$$.getWidth() / 2);
  $newElementWidth$$3$$ < $minWidth$$ ? ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeMinLeft$ += $deltaWidth$$ - $minWidth$$ + $oldElementWidth$$2$$, $newElementWidth$$3$$ = $minWidth$$) : ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeMinLeft$ = 0, $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeLeft$ = 0);
  "row" === $axis$$35$$ && ($newElementWidth$$3$$ > $halfGridWidth$$ ? ($JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeRight$ += $deltaWidth$$ - $halfGridWidth$$ + $oldElementWidth$$2$$, $newElementWidth$$3$$ = $halfGridWidth$$) : $JSCompiler_StaticMethods_getNewElementWidth$self$$.$m_overResizeRight$ = 0);
  return $newElementWidth$$3$$;
}, $JSCompiler_StaticMethods_getNewElementHeight$$ = function $$JSCompiler_StaticMethods_getNewElementHeight$$$($JSCompiler_StaticMethods_getNewElementHeight$self$$, $axis$$36$$, $oldElementHeight$$2$$) {
  var $minHeight$$, $deltaHeight$$, $newElementHeight$$3$$, $halfGridHeight$$;
  $minHeight$$ = $JSCompiler_StaticMethods__getMinValue$$($JSCompiler_StaticMethods_getNewElementHeight$self$$, "height", $axis$$36$$);
  $JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_databody$);
  $deltaHeight$$ = $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_currentMouseY$ - $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_lastMouseY$;
  $newElementHeight$$3$$ = $oldElementHeight$$2$$ + $deltaHeight$$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeTop$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeMinTop$ + $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeBottom$;
  $JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_scroller$.firstChild);
  $halfGridHeight$$ = Math.round($JSCompiler_StaticMethods_getNewElementHeight$self$$.getHeight() / 2);
  $newElementHeight$$3$$ < $minHeight$$ ? ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeMinTop$ += $deltaHeight$$ - $minHeight$$ + $oldElementHeight$$2$$, $newElementHeight$$3$$ = $minHeight$$) : ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeMinTop$ = 0, $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeTop$ = 0);
  "column" === $axis$$36$$ && ($newElementHeight$$3$$ > $halfGridHeight$$ ? ($JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeBottom$ += $deltaHeight$$ - $halfGridHeight$$ + $oldElementHeight$$2$$, $newElementHeight$$3$$ = $halfGridHeight$$) : $JSCompiler_StaticMethods_getNewElementHeight$self$$.$m_overResizeBottom$ = 0);
  return $newElementHeight$$3$$;
}, $JSCompiler_StaticMethods__getMinValue$$ = function $$JSCompiler_StaticMethods__getMinValue$$$($JSCompiler_StaticMethods__getMinValue$self_inner$$1$$, $dimension$$, $axis$$37$$) {
  var $index$$77$$, $level$$30$$, $elem$$23$$, $minValue$$, $extent$$1$$, $currentDimensionValue$$, $innerDimensionValue$$, $depth$$3$$;
  $elem$$23$$ = $JSCompiler_StaticMethods__getMinValue$self_inner$$1$$.$m_resizingElement$;
  $level$$30$$ = $JSCompiler_StaticMethods_getHeaderCellLevel$$($JSCompiler_StaticMethods__getMinValue$self_inner$$1$$, $elem$$23$$);
  $depth$$3$$ = $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods__getMinValue$self_inner$$1$$, $elem$$23$$, "depth");
  $minValue$$ = $JSCompiler_StaticMethods_isTouchDevice$$($JSCompiler_StaticMethods__getMinValue$self_inner$$1$$.$m_utils$) ? 16 : 10;
  if ("column" === $axis$$37$$ && (1 === $JSCompiler_StaticMethods__getMinValue$self_inner$$1$$.$m_columnHeaderLevelCount$ || "height" === $dimension$$ && 1 === $depth$$3$$) || "row" === $axis$$37$$ && (1 === $JSCompiler_StaticMethods__getMinValue$self_inner$$1$$.$m_rowHeaderLevelCount$ || "width" === $dimension$$ && 1 === $depth$$3$$)) {
    return $minValue$$;
  }
  $index$$77$$ = $JSCompiler_StaticMethods_getHeaderCellIndex$$($JSCompiler_StaticMethods__getMinValue$self_inner$$1$$, $elem$$23$$);
  $extent$$1$$ = $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods__getMinValue$self_inner$$1$$, $JSCompiler_StaticMethods__getMinValue$self_inner$$1$$.$m_resizingElement$.parentNode, "extent");
  $currentDimensionValue$$ = $JSCompiler_StaticMethods_getElementDir$$($elem$$23$$, $dimension$$);
  "column" === $axis$$37$$ ? "width" === $dimension$$ ? ($JSCompiler_StaticMethods__getMinValue$self_inner$$1$$ = $JSCompiler_StaticMethods__getColumnHeaderByIndex$$($JSCompiler_StaticMethods__getMinValue$self_inner$$1$$, $index$$77$$ + $extent$$1$$ - 1, $JSCompiler_StaticMethods__getMinValue$self_inner$$1$$.$m_columnHeaderLevelCount$ - 1), $innerDimensionValue$$ = $JSCompiler_StaticMethods_getElementDir$$($JSCompiler_StaticMethods__getMinValue$self_inner$$1$$, $dimension$$)) : $innerDimensionValue$$ = 
  $JSCompiler_StaticMethods__getMinValue$self_inner$$1$$.$_getColumnHeaderLevelHeight$($level$$30$$ + $depth$$3$$ - 1, $elem$$23$$) : "row" === $axis$$37$$ && ("height" === $dimension$$ ? ($JSCompiler_StaticMethods__getMinValue$self_inner$$1$$ = $JSCompiler_StaticMethods__getRowHeaderByIndex$$($JSCompiler_StaticMethods__getMinValue$self_inner$$1$$, $index$$77$$ + $extent$$1$$ - 1, $JSCompiler_StaticMethods__getMinValue$self_inner$$1$$.$m_rowHeaderLevelCount$ - 1), $innerDimensionValue$$ = $JSCompiler_StaticMethods_getElementDir$$($JSCompiler_StaticMethods__getMinValue$self_inner$$1$$, 
  $dimension$$)) : $innerDimensionValue$$ = $JSCompiler_StaticMethods__getMinValue$self_inner$$1$$.$_getRowHeaderLevelWidth$($level$$30$$ + $depth$$3$$ - 1, $elem$$23$$));
  return $currentDimensionValue$$ - ($innerDimensionValue$$ - $minValue$$);
}, $JSCompiler_StaticMethods_manageResizeScrollbars$$ = function $$JSCompiler_StaticMethods_manageResizeScrollbars$$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$) {
  var $databodyContentWidth$$1_width$$24$$, $height$$29_scrollerHeight$$3$$, $colHeader$$7$$, $rowHeader$$21$$, $scroller$$10$$, $databody$$14$$, $colHeaderHeight$$4$$, $rowHeaderWidth$$3$$, $databodyWidth$$2$$, $databodyContentHeight$$2$$, $databodyHeight$$2$$, $isDatabodyHorizontalScrollbarRequired$$1$$, $isDatabodyVerticalScrollbarRequired$$1$$, $scrollbarSize$$2$$, $dir$$14$$, $scrollerWidth$$3$$, $deltaX$$3$$ = 0, $deltaY$$5$$ = 0;
  $databodyContentWidth$$1_width$$24$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.getWidth();
  $height$$29_scrollerHeight$$3$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.getHeight();
  $colHeader$$7$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_colHeader$;
  $rowHeader$$21$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_rowHeader$;
  $scroller$$10$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scroller$;
  $databody$$14$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_databody$;
  $colHeaderHeight$$4$$ = $JSCompiler_StaticMethods_getColumnHeaderHeight$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$);
  $rowHeaderWidth$$3$$ = $JSCompiler_StaticMethods_getRowHeaderWidth$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$);
  $height$$29_scrollerHeight$$3$$ -= $colHeaderHeight$$4$$;
  $scrollerWidth$$3$$ = $databodyContentWidth$$1_width$$24$$ - $rowHeaderWidth$$3$$;
  $dir$$14$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_resources$.isRTLMode() ? "right" : "left";
  if (!$JSCompiler_StaticMethods__databodyEmpty$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$)) {
    $databodyContentWidth$$1_width$$24$$ = $JSCompiler_StaticMethods_getElementWidth$$($databody$$14$$.firstChild);
    $databodyContentHeight$$2$$ = $JSCompiler_StaticMethods_getElementHeight$$($databody$$14$$.firstChild);
    $databodyWidth$$2$$ = Math.min($databodyContentWidth$$1_width$$24$$, $scrollerWidth$$3$$);
    $databodyHeight$$2$$ = Math.min($databodyContentHeight$$2$$, $height$$29_scrollerHeight$$3$$);
    $scrollbarSize$$2$$ = $JSCompiler_StaticMethods_getScrollbarSize$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_utils$);
    ($isDatabodyHorizontalScrollbarRequired$$1$$ = $JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $scrollerWidth$$3$$)) ? $isDatabodyVerticalScrollbarRequired$$1$$ = $JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $height$$29_scrollerHeight$$3$$ - $scrollbarSize$$2$$) : ($isDatabodyVerticalScrollbarRequired$$1$$ = $JSCompiler_StaticMethods_isDatabodyVerticalScrollbarRequired$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, 
    $height$$29_scrollerHeight$$3$$)) && ($isDatabodyHorizontalScrollbarRequired$$1$$ = $JSCompiler_StaticMethods_isDatabodyHorizontalScrollbarRequired$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, $scrollerWidth$$3$$ - $scrollbarSize$$2$$));
    !$isDatabodyVerticalScrollbarRequired$$1$$ && !$isDatabodyHorizontalScrollbarRequired$$1$$ && $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ && $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ && ($scroller$$10$$.style.overflow = "visible");
    if ($isDatabodyVerticalScrollbarRequired$$1$$ && $isDatabodyHorizontalScrollbarRequired$$1$$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ || $isDatabodyVerticalScrollbarRequired$$1$$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ || $isDatabodyHorizontalScrollbarRequired$$1$$ && !$JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$) {
      $scroller$$10$$.style.overflow = "auto";
    }
    $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasHorizontalScroller$ = $isDatabodyHorizontalScrollbarRequired$$1$$;
    $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_hasVerticalScroller$ = $isDatabodyVerticalScrollbarRequired$$1$$;
    $isDatabodyHorizontalScrollbarRequired$$1$$ && $height$$29_scrollerHeight$$3$$ - $scrollbarSize$$2$$ < $databodyHeight$$2$$ && ($databodyHeight$$2$$ = $height$$29_scrollerHeight$$3$$ - $scrollbarSize$$2$$);
    $isDatabodyVerticalScrollbarRequired$$1$$ && $scrollerWidth$$3$$ - $scrollbarSize$$2$$ < $databodyWidth$$2$$ && ($databodyWidth$$2$$ = $scrollerWidth$$3$$ - $scrollbarSize$$2$$);
    $JSCompiler_StaticMethods_setElementHeight$$($rowHeader$$21$$, $databodyHeight$$2$$);
    $JSCompiler_StaticMethods_setElementWidth$$($colHeader$$7$$, $databodyWidth$$2$$);
    $JSCompiler_StaticMethods_setElementWidth$$($databody$$14$$, $databodyWidth$$2$$);
    $JSCompiler_StaticMethods_setElementHeight$$($databody$$14$$, $databodyHeight$$2$$);
    $JSCompiler_StaticMethods_setElementWidth$$($scroller$$10$$, $scrollerWidth$$3$$);
    $JSCompiler_StaticMethods_setElementHeight$$($scroller$$10$$, $height$$29_scrollerHeight$$3$$);
    $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scrollWidth$ = $databodyContentWidth$$1_width$$24$$ - $databodyWidth$$2$$;
    $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scrollHeight$ = $databodyContentHeight$$2$$ - $databodyHeight$$2$$;
  }
  null != $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_empty$ && ($JSCompiler_StaticMethods_setElementDir$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_empty$, $colHeaderHeight$$4$$, "top"), $JSCompiler_StaticMethods_setElementDir$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_empty$, $rowHeaderWidth$$3$$, $dir$$14$$));
  $JSCompiler_StaticMethods_setElementDir$$($rowHeader$$21$$, $colHeaderHeight$$4$$, "top");
  $JSCompiler_StaticMethods_setElementDir$$($colHeader$$7$$, $rowHeaderWidth$$3$$, $dir$$14$$);
  $JSCompiler_StaticMethods_setElementDir$$($databody$$14$$, $colHeaderHeight$$4$$, "top");
  $JSCompiler_StaticMethods_setElementDir$$($databody$$14$$, $rowHeaderWidth$$3$$, $dir$$14$$);
  $JSCompiler_StaticMethods_setElementDir$$($scroller$$10$$, $colHeaderHeight$$4$$, "top");
  $JSCompiler_StaticMethods_setElementDir$$($scroller$$10$$, $rowHeaderWidth$$3$$, $dir$$14$$);
  $JSCompiler_StaticMethods_buildCorners$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$);
  $JSCompiler_StaticMethods_isTouchDevice$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_utils$) && ($JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_currentScrollLeft$ > $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scrollWidth$ && ($deltaX$$3$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scrollWidth$ - $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_currentScrollLeft$), $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_currentScrollTop$ > 
  $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scrollHeight$ && ($deltaY$$5$$ = $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_scrollHeight$ - $JSCompiler_StaticMethods_manageResizeScrollbars$self$$.$m_currentScrollTop$), 0 != $deltaX$$3$$ || 0 != $deltaY$$5$$) && ($JSCompiler_StaticMethods__disableTouchScrollAnimation$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$), $JSCompiler_StaticMethods_scrollDelta$$($JSCompiler_StaticMethods_manageResizeScrollbars$self$$, 
  $deltaX$$3$$, $deltaY$$5$$));
}, $JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$$ = function $$JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$$$($JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$self$$, $element$$33_headersContainer$$, $index$$80$$, $dimensionChange$$, $dir$$16$$, $className$$15$$, $axis$$38$$) {
  var $header$$19_headers$$3$$, $isHeader$$1_newStart$$2$$, $groupingContainer$$1_i$$45_newVal$$, $headerStart$$;
  $element$$33_headersContainer$$ = $element$$33_headersContainer$$.lastChild;
  ($isHeader$$1_newStart$$2$$ = $JSCompiler_StaticMethods_containsCSSClassName$$($element$$33_headersContainer$$, $className$$15$$)) ? ($groupingContainer$$1_i$$45_newVal$$ = $element$$33_headersContainer$$.parentNode, $header$$19_headers$$3$$ = $element$$33_headersContainer$$, $headerStart$$ = $JSCompiler_StaticMethods_getHeaderCellIndex$$($JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$self$$, $header$$19_headers$$3$$)) : ($groupingContainer$$1_i$$45_newVal$$ = $element$$33_headersContainer$$, 
  $header$$19_headers$$3$$ = $element$$33_headersContainer$$.firstChild, $headerStart$$ = $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$self$$, $groupingContainer$$1_i$$45_newVal$$, "start"));
  for (;$index$$80$$ < $headerStart$$;) {
    if ($isHeader$$1_newStart$$2$$) {
      $isHeader$$1_newStart$$2$$ = $JSCompiler_StaticMethods_getElementDir$$($header$$19_headers$$3$$, $dir$$16$$) + $dimensionChange$$, $JSCompiler_StaticMethods_setElementDir$$($header$$19_headers$$3$$, $isHeader$$1_newStart$$2$$, $dir$$16$$), $element$$33_headersContainer$$ = $element$$33_headersContainer$$.previousSibling, $isHeader$$1_newStart$$2$$ = $JSCompiler_StaticMethods_containsCSSClassName$$($element$$33_headersContainer$$, $className$$15$$), $groupingContainer$$1_i$$45_newVal$$ = $element$$33_headersContainer$$.parentNode, 
      $header$$19_headers$$3$$ = $element$$33_headersContainer$$, $headerStart$$ = $JSCompiler_StaticMethods_getHeaderCellIndex$$($JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$self$$, $header$$19_headers$$3$$);
    } else {
      $header$$19_headers$$3$$ = $groupingContainer$$1_i$$45_newVal$$.getElementsByClassName($className$$15$$);
      for ($groupingContainer$$1_i$$45_newVal$$ = 0;$groupingContainer$$1_i$$45_newVal$$ < $header$$19_headers$$3$$.length;$groupingContainer$$1_i$$45_newVal$$++) {
        $isHeader$$1_newStart$$2$$ = $JSCompiler_StaticMethods_getElementDir$$($header$$19_headers$$3$$[$groupingContainer$$1_i$$45_newVal$$], $dir$$16$$) + $dimensionChange$$, $JSCompiler_StaticMethods_setElementDir$$($header$$19_headers$$3$$[$groupingContainer$$1_i$$45_newVal$$], $isHeader$$1_newStart$$2$$, $dir$$16$$);
      }
      $element$$33_headersContainer$$ = $element$$33_headersContainer$$.previousSibling;
      $isHeader$$1_newStart$$2$$ = $JSCompiler_StaticMethods_containsCSSClassName$$($element$$33_headersContainer$$, $className$$15$$);
      $groupingContainer$$1_i$$45_newVal$$ = $element$$33_headersContainer$$;
      $header$$19_headers$$3$$ = $element$$33_headersContainer$$.firstChild;
      $headerStart$$ = $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$self$$, $groupingContainer$$1_i$$45_newVal$$, "start");
    }
  }
  "column" == $axis$$38$$ ? ($groupingContainer$$1_i$$45_newVal$$ = $JSCompiler_StaticMethods_getElementWidth$$($header$$19_headers$$3$$) + $dimensionChange$$, $JSCompiler_StaticMethods_setElementWidth$$($header$$19_headers$$3$$, $groupingContainer$$1_i$$45_newVal$$)) : ($groupingContainer$$1_i$$45_newVal$$ = $JSCompiler_StaticMethods_getElementHeight$$($header$$19_headers$$3$$) + $dimensionChange$$, $JSCompiler_StaticMethods_setElementHeight$$($header$$19_headers$$3$$, $groupingContainer$$1_i$$45_newVal$$));
  $isHeader$$1_newStart$$2$$ || null == $header$$19_headers$$3$$.nextSibling ? $JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$self$$.$m_sizingManager$.$setSize$($axis$$38$$, $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$self$$, $header$$19_headers$$3$$), $groupingContainer$$1_i$$45_newVal$$) : $JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$$($JSCompiler_StaticMethods__shiftHeadersAlongAxisInContainer$self$$, $element$$33_headersContainer$$, 
  $index$$80$$, $dimensionChange$$, $dir$$16$$, $className$$15$$, $axis$$38$$);
}, $JSCompiler_StaticMethods__shiftHeadersDirInContainer$$ = function $$JSCompiler_StaticMethods__shiftHeadersDirInContainer$$$($JSCompiler_StaticMethods__shiftHeadersDirInContainer$self$$, $groupings_headersContainer$$1$$, $dimensionChange$$1$$, $level$$33$$, $dir$$18$$, $className$$16$$, $axis$$39$$) {
  var $i$$46$$, $grouping_headers$$4$$, $headerLevel_isHeader$$2_newDir$$, $headerDepth$$3_j$$12$$;
  $groupings_headersContainer$$1$$ = $groupings_headersContainer$$1$$.childNodes;
  for ($i$$46$$ = 0;$i$$46$$ < $groupings_headersContainer$$1$$.length;$i$$46$$++) {
    if ($grouping_headers$$4$$ = $groupings_headersContainer$$1$$[$i$$46$$], $headerLevel_isHeader$$2_newDir$$ = $JSCompiler_StaticMethods_containsCSSClassName$$($grouping_headers$$4$$, $className$$16$$)) {
      $headerLevel_isHeader$$2_newDir$$ = $JSCompiler_StaticMethods_getHeaderCellLevel$$($JSCompiler_StaticMethods__shiftHeadersDirInContainer$self$$, $grouping_headers$$4$$), $headerDepth$$3_j$$12$$ = $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods__shiftHeadersDirInContainer$self$$, $grouping_headers$$4$$, "depth"), $headerLevel_isHeader$$2_newDir$$ <= $level$$33$$ && $level$$33$$ < $headerLevel_isHeader$$2_newDir$$ + $headerDepth$$3_j$$12$$ ? "column" === $axis$$39$$ ? ($headerLevel_isHeader$$2_newDir$$ = 
      $JSCompiler_StaticMethods_getElementHeight$$($grouping_headers$$4$$) + $dimensionChange$$1$$, $JSCompiler_StaticMethods_setElementHeight$$($grouping_headers$$4$$, $headerLevel_isHeader$$2_newDir$$)) : ($headerLevel_isHeader$$2_newDir$$ = $JSCompiler_StaticMethods_getElementWidth$$($grouping_headers$$4$$) + $dimensionChange$$1$$, $JSCompiler_StaticMethods_setElementWidth$$($grouping_headers$$4$$, $headerLevel_isHeader$$2_newDir$$)) : $headerLevel_isHeader$$2_newDir$$ > $level$$33$$ && ($headerLevel_isHeader$$2_newDir$$ = 
      $JSCompiler_StaticMethods_getElementDir$$($grouping_headers$$4$$, $dir$$18$$) + $dimensionChange$$1$$, $JSCompiler_StaticMethods_setElementDir$$($grouping_headers$$4$$, $headerLevel_isHeader$$2_newDir$$, $dir$$18$$));
    } else {
      if ($headerLevel_isHeader$$2_newDir$$ = $JSCompiler_StaticMethods__getAttribute$$($JSCompiler_StaticMethods__shiftHeadersDirInContainer$self$$, $grouping_headers$$4$$, "level"), $headerLevel_isHeader$$2_newDir$$ <= $level$$33$$) {
        $JSCompiler_StaticMethods__shiftHeadersDirInContainer$$($JSCompiler_StaticMethods__shiftHeadersDirInContainer$self$$, $grouping_headers$$4$$, $dimensionChange$$1$$, $level$$33$$, $dir$$18$$, $className$$16$$, $axis$$39$$);
      } else {
        for ($grouping_headers$$4$$ = $grouping_headers$$4$$.getElementsByClassName($className$$16$$), $headerDepth$$3_j$$12$$ = 0;$headerDepth$$3_j$$12$$ < $grouping_headers$$4$$.length;$headerDepth$$3_j$$12$$++) {
          $headerLevel_isHeader$$2_newDir$$ = $JSCompiler_StaticMethods_getElementDir$$($grouping_headers$$4$$[$headerDepth$$3_j$$12$$], $dir$$18$$) + $dimensionChange$$1$$, $JSCompiler_StaticMethods_setElementDir$$($grouping_headers$$4$$[$headerDepth$$3_j$$12$$], $headerLevel_isHeader$$2_newDir$$, $dir$$18$$);
        }
      }
    }
  }
};

/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
var $JSCompiler_StaticMethods__toggleSortIconDirection$$ = function $$JSCompiler_StaticMethods__toggleSortIconDirection$$$($JSCompiler_StaticMethods__toggleSortIconDirection$self$$, $header$$22_icon$$1$$, $direction$$6$$) {
  null != $header$$22_icon$$1$$ && ($header$$22_icon$$1$$ = $JSCompiler_StaticMethods__getSortIcon$$($header$$22_icon$$1$$), "descending" === $direction$$6$$ && $JSCompiler_StaticMethods_containsCSSClassName$$($header$$22_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortascending")) ? ($JSCompiler_StaticMethods_removeCSSClassName$$($header$$22_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortascending")), $JSCompiler_StaticMethods_addCSSClassName$$($header$$22_icon$$1$$, 
  $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortdescending"))) : "ascending" === $direction$$6$$ && $JSCompiler_StaticMethods_containsCSSClassName$$($header$$22_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortdescending")) && ($JSCompiler_StaticMethods_removeCSSClassName$$($header$$22_icon$$1$$, $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortdescending")), $JSCompiler_StaticMethods_addCSSClassName$$($header$$22_icon$$1$$, 
  $JSCompiler_StaticMethods__toggleSortIconDirection$self$$.getMappedStyle("sortascending"))));
}, $JSCompiler_StaticMethods__showOrHideSortIcon$$ = function $$JSCompiler_StaticMethods__showOrHideSortIcon$$$($JSCompiler_StaticMethods__showOrHideSortIcon$self$$, $header$$23$$, $hide$$) {
  var $icon$$2$$, $sorted$$2$$ = !1;
  null != $header$$23$$ && (($icon$$2$$ = $JSCompiler_StaticMethods__getSortIcon$$($header$$23$$), null != $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.$m_sortInfo$ && ($sorted$$2$$ = $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.$m_sortInfo$.key === $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods__showOrHideSortIcon$self$$, $header$$23$$)), !1 !== $hide$$ || $sorted$$2$$) ? !0 !== $hide$$ || $sorted$$2$$ || ($JSCompiler_StaticMethods_removeCSSClassName$$($icon$$2$$, 
  $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("default")), $JSCompiler_StaticMethods_addCSSClassName$$($icon$$2$$, $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("disabled"))) : ($JSCompiler_StaticMethods_removeCSSClassName$$($icon$$2$$, $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("disabled")), $JSCompiler_StaticMethods_addCSSClassName$$($icon$$2$$, $JSCompiler_StaticMethods__showOrHideSortIcon$self$$.getMappedStyle("default"))));
}, $JSCompiler_StaticMethods__handleHeaderSort$$ = function $$JSCompiler_StaticMethods__handleHeaderSort$$$($JSCompiler_StaticMethods__handleHeaderSort$self$$, $event$$80$$) {
  var $direction$$9$$, $header$$25_target$$52$$;
  $JSCompiler_StaticMethods__databodyEmpty$$($JSCompiler_StaticMethods__handleHeaderSort$self$$) || ($header$$25_target$$52$$ = $event$$80$$.target, $header$$25_target$$52$$ = $JSCompiler_StaticMethods_findHeader$$($JSCompiler_StaticMethods__handleHeaderSort$self$$, $header$$25_target$$52$$), null != $header$$25_target$$52$$ && (null == $direction$$9$$ && ($direction$$9$$ = null != $JSCompiler_StaticMethods__handleHeaderSort$self$$.$m_sortInfo$ && $JSCompiler_StaticMethods__handleHeaderSort$self$$.$m_sortInfo$.key === 
  $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods__handleHeaderSort$self$$, $header$$25_target$$52$$) ? "ascending" === $JSCompiler_StaticMethods__handleHeaderSort$self$$.$m_sortInfo$.direction ? "descending" : "ascending" : "ascending"), $JSCompiler_StaticMethods__doHeaderSort$$($JSCompiler_StaticMethods__handleHeaderSort$self$$, $event$$80$$, $header$$25_target$$52$$, $direction$$9$$)));
}, $JSCompiler_StaticMethods__doHeaderSort$$ = function $$JSCompiler_StaticMethods__doHeaderSort$$$($JSCompiler_StaticMethods__doHeaderSort$self$$, $event$$82_sortedHeader$$inline_1102$$, $header$$27_sortIcon$$inline_1103$$, $direction$$11$$) {
  var $key$$39$$, $axis$$42_criteria$$1$$;
  if (!0 != $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_isSorting$) {
    $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_delayedSort$ = null;
    $key$$39$$ = $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods__doHeaderSort$self$$, $header$$27_sortIcon$$inline_1103$$);
    $axis$$42_criteria$$1$$ = $JSCompiler_StaticMethods__doHeaderSort$self$$.$_getAxis$($header$$27_sortIcon$$inline_1103$$);
    var $oldSortedHeader$$inline_1098$$, $oldsortIcon$$inline_1099$$;
    null != $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$ && ($oldSortedHeader$$inline_1098$$ = $JSCompiler_StaticMethods__findColumnHeaderByKey$$($JSCompiler_StaticMethods__doHeaderSort$self$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$.key), $oldSortedHeader$$inline_1098$$.removeAttribute($JSCompiler_StaticMethods__doHeaderSort$self$$.$m_resources$.getMappedAttribute("sortDir")), $oldsortIcon$$inline_1099$$ = $JSCompiler_StaticMethods__getSortIcon$$($oldSortedHeader$$inline_1098$$), 
    $JSCompiler_StaticMethods__toggleSortIconDirection$$($JSCompiler_StaticMethods__doHeaderSort$self$$, $oldSortedHeader$$inline_1098$$, "ascending"), "descending" === $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$.direction && ($JSCompiler_StaticMethods_removeCSSClassName$$($oldsortIcon$$inline_1099$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("sortdescending")), $JSCompiler_StaticMethods_addCSSClassName$$($oldsortIcon$$inline_1099$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("sortascending"))), 
    $JSCompiler_StaticMethods_addCSSClassName$$($oldsortIcon$$inline_1099$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("disabled")), $JSCompiler_StaticMethods_removeCSSClassName$$($oldsortIcon$$inline_1099$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("default")), $JSCompiler_StaticMethods_removeCSSClassName$$($oldSortedHeader$$inline_1098$$.lastChild, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("enabled")));
    $header$$27_sortIcon$$inline_1103$$.setAttribute($JSCompiler_StaticMethods__doHeaderSort$self$$.$m_resources$.getMappedAttribute("sortDir"), $direction$$11$$);
    $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$ = {event:$event$$82_sortedHeader$$inline_1102$$, key:$key$$39$$, axis:$axis$$42_criteria$$1$$, direction:$direction$$11$$};
    $JSCompiler_StaticMethods__toggleSortIconDirection$$($JSCompiler_StaticMethods__doHeaderSort$self$$, $header$$27_sortIcon$$inline_1103$$, $direction$$11$$);
    null != $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$ && ($event$$82_sortedHeader$$inline_1102$$ = $JSCompiler_StaticMethods__findColumnHeaderByKey$$($JSCompiler_StaticMethods__doHeaderSort$self$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_sortInfo$.key), $header$$27_sortIcon$$inline_1103$$ = $JSCompiler_StaticMethods__getSortIcon$$($event$$82_sortedHeader$$inline_1102$$), $JSCompiler_StaticMethods_addCSSClassName$$($header$$27_sortIcon$$inline_1103$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("default")), 
    $JSCompiler_StaticMethods_removeCSSClassName$$($header$$27_sortIcon$$inline_1103$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("disabled")), $JSCompiler_StaticMethods_removeCSSClassName$$($header$$27_sortIcon$$inline_1103$$, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("selected")), $JSCompiler_StaticMethods_addCSSClassName$$($event$$82_sortedHeader$$inline_1102$$.lastChild, $JSCompiler_StaticMethods__doHeaderSort$self$$.getMappedStyle("enabled")));
    null != $direction$$11$$ && null != $key$$39$$ && null != $axis$$42_criteria$$1$$ && ($JSCompiler_StaticMethods__doHeaderSort$self$$.$m_isSorting$ = !0, $JSCompiler_StaticMethods_showStatusText$$($JSCompiler_StaticMethods__doHeaderSort$self$$), $axis$$42_criteria$$1$$ = {axis:$axis$$42_criteria$$1$$, key:$key$$39$$, direction:$direction$$11$$}, $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_dataSource$.sort($axis$$42_criteria$$1$$, {success:$JSCompiler_StaticMethods__doHeaderSort$self$$.$_handleSortSuccess$.bind($JSCompiler_StaticMethods__doHeaderSort$self$$), 
    error:$JSCompiler_StaticMethods__doHeaderSort$self$$.$_handleSortError$.bind($JSCompiler_StaticMethods__doHeaderSort$self$$)}));
    $JSCompiler_StaticMethods__setAccInfoText$$($JSCompiler_StaticMethods__doHeaderSort$self$$, "ascending" === $direction$$11$$ ? "accessibleSortAscending" : "accessibleSortDescending", {id:$key$$39$$});
  } else {
    $JSCompiler_StaticMethods__doHeaderSort$self$$.$m_delayedSort$ = {event:$event$$82_sortedHeader$$inline_1102$$, header:$header$$27_sortIcon$$inline_1103$$, direction:$direction$$11$$};
  }
};
$DvtDataGrid$$.prototype.$_handleSortError$ = function $$DvtDataGrid$$$$$_handleSortError$$() {
  $JSCompiler_StaticMethods_hideStatusText$$(this);
};
$DvtDataGrid$$.prototype.$_getAxis$ = function $$DvtDataGrid$$$$$_getAxis$$($header$$28$$) {
  var $columnHeaderCellClassName$$, $rowHeaderCellClassName$$;
  $columnHeaderCellClassName$$ = this.getMappedStyle("colheadercell");
  $rowHeaderCellClassName$$ = this.getMappedStyle("rowheadercell");
  return $JSCompiler_StaticMethods_containsCSSClassName$$($header$$28$$, $columnHeaderCellClassName$$) ? "column" : $JSCompiler_StaticMethods_containsCSSClassName$$($header$$28$$, $rowHeaderCellClassName$$) ? "row" : null;
};
$DvtDataGrid$$.prototype.$_handleSortSuccess$ = function $$DvtDataGrid$$$$$_handleSortSuccess$$() {
  $JSCompiler_StaticMethods_hideStatusText$$(this);
  $JSCompiler_StaticMethods__isDatabodyCellActive$$(this) ? $JSCompiler_StaticMethods__indexes$$(this, {row:this.$m_active$.keys.row, column:this.$m_active$.keys.column}, this.$_handlePreSortScrolling$) : $JSCompiler_StaticMethods__fetchForSort$$(this, this.$m_startRow$, this.$m_endRow$ - this.$m_startRow$ + 1, !1);
};
$DvtDataGrid$$.prototype.$_handlePreSortScrolling$ = function $$DvtDataGrid$$$$$_handlePreSortScrolling$$($cellTop_indexes$$17_startRow$$6$$) {
  var $cellBottom_startRowPixel$$4$$, $isHighWatermark$$;
  $cellTop_indexes$$17_startRow$$6$$ = (-1 === $cellTop_indexes$$17_startRow$$6$$.row ? 0 : $cellTop_indexes$$17_startRow$$6$$.row) * this.$m_avgRowHeight$;
  $cellBottom_startRowPixel$$4$$ = $cellTop_indexes$$17_startRow$$6$$ + this.$m_avgRowHeight$;
  $isHighWatermark$$ = $JSCompiler_StaticMethods__isHighWatermarkScrolling$$(this);
  this.$m_currentScrollTop$ <= $cellTop_indexes$$17_startRow$$6$$ && $cellBottom_startRowPixel$$4$$ <= this.$m_currentScrollTop$ + $JSCompiler_StaticMethods_getElementHeight$$(this.$m_databody$) || $isHighWatermark$$ ? $JSCompiler_StaticMethods__fetchForSort$$(this, this.$m_startRow$, this.$m_endRow$ - this.$m_startRow$ + 1, !1) : (this.$m_currentScrollTop$ = Math.min($cellTop_indexes$$17_startRow$$6$$, $JSCompiler_StaticMethods__getMaxScrollHeight$$(this)), $cellTop_indexes$$17_startRow$$6$$ = Math.floor(this.$m_currentScrollTop$ / 
  this.$m_avgRowHeight$), $cellBottom_startRowPixel$$4$$ = $cellTop_indexes$$17_startRow$$6$$ * this.$m_avgRowHeight$, this.$m_startRow$ = $cellTop_indexes$$17_startRow$$6$$, this.$m_endRow$ = -1, this.$m_startRowHeader$ = $cellTop_indexes$$17_startRow$$6$$, this.$m_endRowHeader$ = -1, this.$m_endRowHeaderPixel$ = this.$m_startRowHeaderPixel$ = this.$m_endRowPixel$ = this.$m_startRowPixel$ = $cellBottom_startRowPixel$$4$$, $JSCompiler_StaticMethods__fetchForSort$$(this, $cellTop_indexes$$17_startRow$$6$$, 
  null, !0));
};
var $JSCompiler_StaticMethods__fetchForSort$$ = function $$JSCompiler_StaticMethods__fetchForSort$$$($JSCompiler_StaticMethods__fetchForSort$self$$, $startRow$$7$$, $rowCount$$8$$, $scroll$$) {
  var $rowHeaderFragment$$2$$ = window.document.createDocumentFragment();
  $JSCompiler_StaticMethods__fetchForSort$self$$.fetchHeaders("row", $startRow$$7$$, $rowHeaderFragment$$2$$, $rowCount$$8$$, {success:$JSCompiler_StaticMethods__fetchForSort$self$$.$handleHeadersFetchSuccessForSort$.bind($JSCompiler_StaticMethods__fetchForSort$self$$), error:$JSCompiler_StaticMethods__fetchForSort$self$$.$handleCellsFetchError$});
  $JSCompiler_StaticMethods__fetchForSort$self$$.fetchCells($JSCompiler_StaticMethods__fetchForSort$self$$.$m_databody$, $JSCompiler_StaticMethods__fetchForSort$self$$.$m_scroller$, $startRow$$7$$, $JSCompiler_StaticMethods__fetchForSort$self$$.$m_startCol$, $rowCount$$8$$, $JSCompiler_StaticMethods__fetchForSort$self$$.$m_endCol$ - $JSCompiler_StaticMethods__fetchForSort$self$$.$m_startCol$ + 1, {success:$JSCompiler_StaticMethods__fetchForSort$self$$.$handleCellsFetchSuccessForSort$.bind($JSCompiler_StaticMethods__fetchForSort$self$$, 
  $rowHeaderFragment$$2$$, $scroll$$), error:$JSCompiler_StaticMethods__fetchForSort$self$$.$handleCellsFetchError$});
};
$DvtDataGrid$$.prototype.$handleHeadersFetchSuccessForSort$ = function $$DvtDataGrid$$$$$handleHeadersFetchSuccessForSort$$($headerSet$$13$$, $headerFragment_headerRange$$13$$, $rowInsert$$3$$) {
  var $axis$$43_c$$3$$, $start$$19$$, $headerCount$$4$$, $index$$88_returnVal$$12$$, $totalRowHeight$$6$$, $className$$17$$, $renderer$$9$$;
  $axis$$43_c$$3$$ = $headerFragment_headerRange$$13$$.axis;
  $start$$19$$ = $headerFragment_headerRange$$13$$.start;
  $headerFragment_headerRange$$13$$ = $headerFragment_headerRange$$13$$.header;
  $headerCount$$4$$ = $headerSet$$13$$.getCount();
  this.$m_fetching$[$axis$$43_c$$3$$] = !1;
  $axis$$43_c$$3$$ = $totalRowHeight$$6$$ = 0;
  $className$$17$$ = this.getMappedStyle("row") + " " + this.getMappedStyle("headercell") + " " + this.getMappedStyle("rowheadercell");
  for ($renderer$$9$$ = $JSCompiler_StaticMethods_getRenderer$$(this.$m_options$, "row");0 < $headerCount$$4$$ - $axis$$43_c$$3$$;) {
    $index$$88_returnVal$$12$$ = $start$$19$$ + $axis$$43_c$$3$$, $index$$88_returnVal$$12$$ = $JSCompiler_StaticMethods_buildLevelHeaders$$(this, $headerFragment_headerRange$$13$$, $index$$88_returnVal$$12$$, 0, 0, this.$m_startRowPixel$ + $totalRowHeight$$6$$, !0, $rowInsert$$3$$, $renderer$$9$$, $headerSet$$13$$, "row", $className$$17$$, this.$m_rowHeaderLevelCount$), $axis$$43_c$$3$$ += $index$$88_returnVal$$12$$.count, $totalRowHeight$$6$$ += $index$$88_returnVal$$12$$.totalHeight;
  }
  this.$m_endRowHeader$ = this.$m_startRowHeader$ + $headerCount$$4$$ - 1;
  this.$m_endRowHeaderPixel$ = this.$m_startRowHeaderPixel$ + $totalRowHeight$$6$$;
};
$DvtDataGrid$$.prototype.$handleCellsFetchSuccessForSort$ = function $$DvtDataGrid$$$$$handleCellsFetchSuccessForSort$$($newRowHeaderElements$$, $scroll$$1$$, $cellSet$$13_oldRowElements_returnVal$$13$$, $cellRange$$9_newRowElements$$) {
  var $oldRowHeaderElements_rowStart$$11$$, $rowCount$$9$$, $columnStart$$8$$, $animate$$;
  this.$m_fetching$.cells = !1;
  $JSCompiler_StaticMethods_isFetchComplete$$(this) && $JSCompiler_StaticMethods_hideStatusText$$(this);
  $oldRowHeaderElements_rowStart$$11$$ = $cellRange$$9_newRowElements$$[0].start;
  $rowCount$$9$$ = $cellSet$$13_oldRowElements_returnVal$$13$$.getCount("row");
  $columnStart$$8$$ = $cellRange$$9_newRowElements$$[1].start;
  $cellSet$$13_oldRowElements_returnVal$$13$$.getCount("column");
  $cellRange$$9_newRowElements$$ = window.document.createDocumentFragment();
  $cellSet$$13_oldRowElements_returnVal$$13$$ = $JSCompiler_StaticMethods__addRows$$(this, $cellRange$$9_newRowElements$$, !0, this.$m_startRowPixel$, $oldRowHeaderElements_rowStart$$11$$, $rowCount$$9$$, $columnStart$$8$$, !1, $cellSet$$13_oldRowElements_returnVal$$13$$);
  this.$m_endRow$ = this.$m_startRowHeader$ + $rowCount$$9$$ - 1;
  this.$m_endRowPixel$ = this.$m_startRowPixel$ + $cellSet$$13_oldRowElements_returnVal$$13$$.totalRowHeight;
  $cellSet$$13_oldRowElements_returnVal$$13$$ = this.$m_databody$.firstChild;
  $oldRowHeaderElements_rowStart$$11$$ = this.$m_rowHeader$.firstChild;
  !0 == $scroll$$1$$ && ($animate$$ = $JSCompiler_StaticMethods__isHighWatermarkScrolling$$(this), $JSCompiler_StaticMethods_isTouchDevice$$(this.$m_utils$) ? ($JSCompiler_StaticMethods__disableTouchScrollAnimation$$(this), this.scrollTo(this.$m_currentScrollLeft$, this.$m_currentScrollTop$)) : (this.$m_silentScroll$ = !0, this.$m_scroller$.scrollTop = this.$m_currentScrollTop$, $JSCompiler_StaticMethods__syncScroller$$(this)));
  !$JSCompiler_StaticMethods_supportsTransitions$$() || 1 === $rowCount$$9$$ || 1 < this.$m_rowHeaderLevelCount$ && null != this.$m_rowHeaderLevelCount$ || !1 === $animate$$ ? this.$_handleSortEnd$($cellRange$$9_newRowElements$$, $newRowHeaderElements$$) : $JSCompiler_StaticMethods_processSortAnimationToPosition$$(this, $oldRowHeaderElements_rowStart$$11$$, $newRowHeaderElements$$, $cellSet$$13_oldRowElements_returnVal$$13$$, $cellRange$$9_newRowElements$$);
};
$DvtDataGrid$$.prototype.$_handleSortEnd$ = function $$DvtDataGrid$$$$$_handleSortEnd$$($newRowElements$$1$$, $newRowHeaderElements$$1$$) {
  var $cellIndex$$inline_1108_databodyContent$$18_headerContent$$3_row$$inline_1106$$;
  1 < $newRowHeaderElements$$1$$.childNodes.length && ($cellIndex$$inline_1108_databodyContent$$18_headerContent$$3_row$$inline_1106$$ = this.$m_rowHeader$.firstChild, this.$m_utils$.empty($cellIndex$$inline_1108_databodyContent$$18_headerContent$$3_row$$inline_1106$$), $cellIndex$$inline_1108_databodyContent$$18_headerContent$$3_row$$inline_1106$$.appendChild($newRowHeaderElements$$1$$));
  $cellIndex$$inline_1108_databodyContent$$18_headerContent$$3_row$$inline_1106$$ = this.$m_databody$.firstChild;
  this.$m_utils$.empty($cellIndex$$inline_1108_databodyContent$$18_headerContent$$3_row$$inline_1106$$);
  $cellIndex$$inline_1108_databodyContent$$18_headerContent$$3_row$$inline_1106$$.appendChild($newRowElements$$1$$);
  var $columnHeader$$inline_1107$$;
  null != this.$m_active$ && ("cell" == this.$m_active$.type ? ($cellIndex$$inline_1108_databodyContent$$18_headerContent$$3_row$$inline_1106$$ = $JSCompiler_StaticMethods__findRowByKey$$(this, this.$m_active$.keys.row), $columnHeader$$inline_1107$$ = $JSCompiler_StaticMethods__findColumnHeaderByKey$$(this, this.$m_active$.keys.column), null != $cellIndex$$inline_1108_databodyContent$$18_headerContent$$3_row$$inline_1106$$ && null != $columnHeader$$inline_1107$$ ? ($cellIndex$$inline_1108_databodyContent$$18_headerContent$$3_row$$inline_1106$$ = 
  this.createIndex(this.$getRowIndex$($cellIndex$$inline_1108_databodyContent$$18_headerContent$$3_row$$inline_1106$$), $JSCompiler_StaticMethods_getHeaderCellIndex$$(this, $columnHeader$$inline_1107$$)), $JSCompiler_StaticMethods_scrollToIndex$$(this, $cellIndex$$inline_1108_databodyContent$$18_headerContent$$3_row$$inline_1106$$), $JSCompiler_StaticMethods__isSelectionEnabled$$(this) ? this.$selectAndFocus$($cellIndex$$inline_1108_databodyContent$$18_headerContent$$3_row$$inline_1106$$) : this.$_setActiveByIndex$($cellIndex$$inline_1108_databodyContent$$18_headerContent$$3_row$$inline_1106$$)) : 
  ($JSCompiler_StaticMethods__setActive$$(this, null, null, !0), $JSCompiler_StaticMethods__isSelectionEnabled$$(this) && $JSCompiler_StaticMethods__clearSelection$$(this))) : "row" == this.$m_active$.axis && ($cellIndex$$inline_1108_databodyContent$$18_headerContent$$3_row$$inline_1106$$ = $JSCompiler_StaticMethods__findRowHeaderByKey$$(this, this.$m_active$.key), null != $cellIndex$$inline_1108_databodyContent$$18_headerContent$$3_row$$inline_1106$$ ? $JSCompiler_StaticMethods__setActive$$(this, 
  $cellIndex$$inline_1108_databodyContent$$18_headerContent$$3_row$$inline_1106$$) : $JSCompiler_StaticMethods__setActive$$(this, null)));
  this.$m_isSorting$ = !1;
  this.fireEvent("sort", {event:this.$m_sortInfo$.event, ui:{header:this.$m_sortInfo$.key, direction:this.$m_sortInfo$.direction}});
  null != this.$m_delayedSort$ ? $JSCompiler_StaticMethods__doHeaderSort$$(this, this.$m_delayedSort$.event, this.$m_delayedSort$.header, this.$m_delayedSort$.direction) : $JSCompiler_StaticMethods_fillViewport$$(this, this.$m_currentScrollLeft$, this.$m_currentScrollTop$);
};
var $JSCompiler_StaticMethods_processSortAnimationToPosition$$ = function $$JSCompiler_StaticMethods_processSortAnimationToPosition$$$($JSCompiler_StaticMethods_processSortAnimationToPosition$self$$, $oldRowHeaderElements$$1$$, $newRowHeaderElements$$2$$, $oldElementSet$$, $newElementSet$$) {
  var $rowKey$$13$$, $animationInformation$$, $oldTop$$, $newTop$$2_oldBottom$$, $rowsForAppend$$, $rowHeadersForAppend$$, $i$$55$$, $child$$2$$, $rowHeaderSupport$$2$$, $newBottom$$, $newElementSetClone$$, $newRowHeaderElementsClone$$, $viewportTop$$5$$, $viewportBottom$$6$$, $lastAnimationElement$$1$$;
  $rowsForAppend$$ = [];
  $rowHeadersForAppend$$ = [];
  $rowHeaderSupport$$2$$ = 1 < $newRowHeaderElements$$2$$.childNodes.length ? !0 : !1;
  $viewportTop$$5$$ = $JSCompiler_StaticMethods_processSortAnimationToPosition$self$$.$m_currentScrollTop$;
  $viewportBottom$$6$$ = $viewportTop$$5$$ + $JSCompiler_StaticMethods_getElementHeight$$($JSCompiler_StaticMethods_processSortAnimationToPosition$self$$.$m_databody$);
  $newElementSetClone$$ = $newElementSet$$.cloneNode(!0);
  $newRowHeaderElementsClone$$ = $newRowHeaderElements$$2$$ ? $newRowHeaderElements$$2$$.cloneNode(!0) : null;
  $animationInformation$$ = {};
  for ($i$$55$$ = 0;$i$$55$$ < $oldElementSet$$.childNodes.length;$i$$55$$++) {
    $child$$2$$ = $oldElementSet$$.childNodes[$i$$55$$], $rowKey$$13$$ = $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods_processSortAnimationToPosition$self$$, $child$$2$$), $oldTop$$ = $JSCompiler_StaticMethods_getElementDir$$($child$$2$$, "top"), $newTop$$2_oldBottom$$ = $oldTop$$ + $JSCompiler_StaticMethods_getElementHeight$$($child$$2$$), $newTop$$2_oldBottom$$ = $newTop$$2_oldBottom$$ < $viewportTop$$5$$ || $oldTop$$ > $viewportBottom$$6$$ ? $oldTop$$ : $viewportBottom$$6$$, $animationInformation$$[$rowKey$$13$$] = 
    {$oldTop$:$oldTop$$, $newTop$:$newTop$$2_oldBottom$$};
  }
  for ($i$$55$$ = 0;$i$$55$$ < $newElementSet$$.childNodes.length;$i$$55$$++) {
    $child$$2$$ = $newElementSet$$.childNodes[$i$$55$$], $rowKey$$13$$ = $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods_processSortAnimationToPosition$self$$, $child$$2$$), $newTop$$2_oldBottom$$ = $JSCompiler_StaticMethods_getElementDir$$($child$$2$$, "top"), $JSCompiler_StaticMethods__setKey$$($JSCompiler_StaticMethods_processSortAnimationToPosition$self$$, $newElementSetClone$$.childNodes[$i$$55$$], $rowKey$$13$$), $JSCompiler_StaticMethods__setKey$$($JSCompiler_StaticMethods_processSortAnimationToPosition$self$$, 
    $newRowHeaderElementsClone$$.childNodes[$i$$55$$], $rowKey$$13$$), $animationInformation$$.hasOwnProperty($rowKey$$13$$) ? $animationInformation$$[$rowKey$$13$$].$newTop$ = $newTop$$2_oldBottom$$ : ($oldTop$$ = $viewportBottom$$6$$, $newBottom$$ = $newTop$$2_oldBottom$$ + $JSCompiler_StaticMethods_getElementHeight$$($child$$2$$), $animationInformation$$[$rowKey$$13$$] = {$oldTop$:$oldTop$$, $newTop$:$newTop$$2_oldBottom$$}, $newBottom$$ >= $viewportTop$$5$$ && $newTop$$2_oldBottom$$ < $viewportBottom$$6$$ && 
    ($child$$2$$ = $newElementSetClone$$.childNodes[$i$$55$$], $JSCompiler_StaticMethods_setElementDir$$($child$$2$$, $animationInformation$$[$rowKey$$13$$].$oldTop$, "top"), $rowsForAppend$$.push($child$$2$$), $rowHeaderSupport$$2$$ && ($child$$2$$ = $newRowHeaderElementsClone$$.childNodes[$i$$55$$], $JSCompiler_StaticMethods_setElementDir$$($child$$2$$, $animationInformation$$[$rowKey$$13$$].$oldTop$, "top"), $rowHeadersForAppend$$.push($child$$2$$))));
  }
  for ($i$$55$$ = 0;$i$$55$$ < $rowsForAppend$$.length;$i$$55$$++) {
    $oldElementSet$$.appendChild($rowsForAppend$$[$i$$55$$]), $rowHeaderSupport$$2$$ && $oldRowHeaderElements$$1$$.appendChild($rowHeadersForAppend$$[$i$$55$$]);
  }
  for ($i$$55$$ = $oldElementSet$$.childNodes.length - 1;0 <= $i$$55$$;$i$$55$$--) {
    if ($child$$2$$ = $oldElementSet$$.childNodes[$i$$55$$], $rowKey$$13$$ = $JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods_processSortAnimationToPosition$self$$, $child$$2$$), 0 != $animationInformation$$[$rowKey$$13$$].$newTop$ - $animationInformation$$[$rowKey$$13$$].$oldTop$) {
      $lastAnimationElement$$1$$ = $child$$2$$;
      break;
    }
  }
  null != $lastAnimationElement$$1$$ ? ($lastAnimationElement$$1$$.addEventListener("transitionend", $JSCompiler_StaticMethods_processSortAnimationToPosition$self$$.$_handleSortEnd$.bind($JSCompiler_StaticMethods_processSortAnimationToPosition$self$$, $newElementSet$$, $newRowHeaderElements$$2$$), !1), (0,window.setTimeout)(function() {
    var $newRowHeaderElements$$2$$, $newElementSet$$, $rowKey$$13$$;
    for ($rowKey$$13$$ = 0;$rowKey$$13$$ < $oldElementSet$$.childNodes.length;$rowKey$$13$$++) {
      $newElementSet$$ = 0 * $rowKey$$13$$ + "ms", $child$$2$$ = $oldElementSet$$.childNodes[$rowKey$$13$$], $newRowHeaderElements$$2$$ = $animationInformation$$[$JSCompiler_StaticMethods__getKey$$($JSCompiler_StaticMethods_processSortAnimationToPosition$self$$, $child$$2$$)], $newRowHeaderElements$$2$$ = $newRowHeaderElements$$2$$.$newTop$ - $newRowHeaderElements$$2$$.$oldTop$, 0 != $newRowHeaderElements$$2$$ && ($JSCompiler_StaticMethods_addTransformMoveStyle$$($child$$2$$, "400ms", $newElementSet$$, 
      "ease-in", 0, $newRowHeaderElements$$2$$), $rowHeaderSupport$$2$$ && $JSCompiler_StaticMethods_addTransformMoveStyle$$($oldRowHeaderElements$$1$$.childNodes[$rowKey$$13$$], "400ms", $newElementSet$$, "ease-in", 0, $newRowHeaderElements$$2$$));
    }
  }, 0)) : $JSCompiler_StaticMethods_processSortAnimationToPosition$self$$.$_handleSortEnd$($newElementSet$$, $newRowHeaderElements$$2$$);
}, $JSCompiler_StaticMethods__getSortIcon$$ = function $$JSCompiler_StaticMethods__getSortIcon$$$($header$$29$$) {
  return $header$$29$$.lastChild.firstChild;
};

return D.DvtDataGrid;
});
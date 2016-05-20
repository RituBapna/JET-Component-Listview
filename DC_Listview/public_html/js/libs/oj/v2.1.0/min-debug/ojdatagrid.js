/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore", "jquery", "promise", "ojs/ojcomponentcore", "ojs/ojdatasource-common", "ojs/ojinputnumber", "ojs/ojmenu", "ojs/ojdialog"], function($oj$$11$$, $$$$11$$) {
  function $DvtDataGridOptions$$($options$$223$$) {
    this.options = $options$$223$$;
  }
  function $DvtDataGridUtils$$($dataGrid_userAgent$$2$$) {
    this.$scrollbarSize$ = -1;
    this.$dataGrid$ = $dataGrid_userAgent$$2$$;
    $dataGrid_userAgent$$2$$ = navigator && navigator.userAgent ? navigator.userAgent.toLowerCase() : null;
    this.$os$ = this.$_determineOS$($dataGrid_userAgent$$2$$);
    this.platform = this.$_determinePlatform$($dataGrid_userAgent$$2$$);
  }
  function $DvtDataGridSizingManager$$() {
    this.$sizes$ = {column:{}, row:{}};
  }
  function $DvtDataGrid$$() {
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
    this.callbacks = {};
    this.$m_readinessStack$ = [];
  }
  $oj$$11$$.$DataGridResources$ = function $$oj$$11$$$$DataGridResources$$($rtlMode$$, $translationFunction$$) {
    this.$rtlMode$ = $rtlMode$$;
    this.$translationFunction$ = $translationFunction$$;
    this.$styles$ = {};
    this.$styles$.datagrid = "oj-datagrid";
    this.$styles$.cell = "oj-datagrid-cell";
    this.$styles$.cellcontent = "oj-datagrid-cell-content";
    this.$styles$.celltext = "oj-datagrid-cell-text";
    this.$styles$.banded = "oj-datagrid-banded";
    this.$styles$.row = "oj-datagrid-row";
    this.$styles$.databody = "oj-datagrid-databody";
    this.$styles$.topcorner = "oj-datagrid-top-corner";
    this.$styles$.bottomcorner = "oj-datagrid-bottom-corner";
    this.$styles$.rowheaderspacer = "oj-datagrid-row-header-spacer";
    this.$styles$.colheaderspacer = "oj-datagrid-column-header-spacer";
    this.$styles$.status = "oj-datagrid-status";
    this.$styles$.emptytext = "oj-datagrid-empty-text";
    this.$styles$.header = "oj-datagrid-header";
    this.$styles$.groupingcontainer = "oj-datagrid-header-grouping";
    this.$styles$.headercell = "oj-datagrid-header-cell";
    this.$styles$.headercelltext = "oj-datagrid-header-cell-text";
    this.$styles$.headercellcontent = "oj-datagrid-header-cell-content";
    this.$styles$.rowheader = "oj-datagrid-row-header";
    this.$styles$.colheader = "oj-datagrid-column-header";
    this.$styles$.colheadercell = "oj-datagrid-column-header-cell";
    this.$styles$.rowheadercell = "oj-datagrid-row-header-cell";
    this.$styles$["scroller-mobile"] = "oj-datagrid-scroller-touch";
    this.$styles$.scroller = "oj-datagrid-scroller";
    this.$styles$.scrollers = "oj-datagrid-scrollers";
    this.$styles$.focus = "oj-focus";
    this.$styles$.hover = "oj-hover";
    this.$styles$.active = "oj-active";
    this.$styles$.selected = "oj-selected";
    this.$styles$.disabled = "oj-disabled";
    this.$styles$.enabled = "oj-enabled";
    this.$styles$["default"] = "oj-default";
    this.$styles$.sortcontainer = "oj-datagrid-sort-icon-container";
    this.$styles$.sortascending = "oj-datagrid-sort-ascending-icon";
    this.$styles$.sortdescending = "oj-datagrid-sort-descending-icon";
    this.$styles$.icon = "oj-component-icon";
    this.$styles$.clickableicon = "oj-clickable-icon-nocontext";
    this.$styles$.info = "oj-helper-hidden-accessible";
    this.$styles$.rowexpander = "oj-rowexpander";
    this.$styles$.cut = "oj-datagrid-cut";
    this.$styles$.selectaffordancetop = "oj-datagrid-touch-selection-affordance-top";
    this.$styles$.selectaffordancebottom = "oj-datagrid-touch-selection-affordance-bottom";
    this.$styles$.toucharea = "oj-datagrid-touch-area";
    this.$styles$.draggable = "oj-draggable";
    this.$styles$.drag = "oj-drag";
    this.$styles$.drop = "oj-drop";
    this.$styles$.activedrop = "oj-active-drop";
    this.$styles$.validdrop = "oj-valid-drop";
    this.$styles$.invaliddrop = "oj-invalid-drop";
    this.$commands$ = {};
    this.$commands$.sortCol = "oj-datagrid-sortCol";
    this.$commands$.sortColAsc = "oj-datagrid-sortColAsc";
    this.$commands$.sortColDsc = "oj-datagrid-sortColDsc";
    this.$commands$.sortRow = "oj-datagrid-sortRow";
    this.$commands$.sortRowAsc = "oj-datagrid-sortRowAsc";
    this.$commands$.sortRowDsc = "oj-datagrid-sortRowDsc";
    this.$commands$.resize = "oj-datagrid-resize";
    this.$commands$.resizeWidth = "oj-datagrid-resizeWidth";
    this.$commands$.resizeHeight = "oj-datagrid-resizeHeight";
    this.$commands$.cut = "oj-datagrid-cut";
    this.$commands$.paste = "oj-datagrid-paste";
    this.$commands$.discontiguousSelection = "oj-datagrid-discontiguousSelection";
    this.attributes = {};
    this.attributes.key = "data-oj-key";
    this.attributes.context = "data-oj-context";
    this.attributes.resizable = "data-oj-resizable";
    this.attributes.sortable = "data-oj-sortable";
    this.attributes.sortDir = "data-oj-sortdir";
    this.attributes.expander = "data-oj-expander";
    this.attributes.expanderIndex = "data-oj-expander-index";
    this.attributes.container = $oj$$11$$.Components.$_OJ_CONTAINER_ATTR$;
    this.attributes.extent = "data-oj-extent";
    this.attributes.start = "data-oj-start";
    this.attributes.depth = "data-oj-depth";
    this.attributes.level = "data-oj-level";
    this.attributes.tabMod = "data-oj-tabmod";
  };
  $goog$exportPath_$$("DataGridResources", $oj$$11$$.$DataGridResources$, $oj$$11$$);
  $oj$$11$$.$DataGridResources$.prototype.$isRTLMode$ = function $$oj$$11$$$$DataGridResources$$$$isRTLMode$$() {
    return "rtl" === this.$rtlMode$ ? !0 : !1;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.isRTLMode", {$isRTLMode$:$oj$$11$$.$DataGridResources$.prototype.$isRTLMode$});
  $oj$$11$$.$DataGridResources$.prototype.$getTranslatedText$ = function $$oj$$11$$$$DataGridResources$$$$getTranslatedText$$($key$$47$$, $args$$17$$) {
    return this.$translationFunction$($key$$47$$, $args$$17$$);
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getTranslatedText", {$getTranslatedText$:$oj$$11$$.$DataGridResources$.prototype.$getTranslatedText$});
  $oj$$11$$.$DataGridResources$.prototype.$getMappedStyle$ = function $$oj$$11$$$$DataGridResources$$$$getMappedStyle$$($key$$48$$) {
    return null != $key$$48$$ ? this.$styles$[$key$$48$$] : null;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getMappedStyle", {$getMappedStyle$:$oj$$11$$.$DataGridResources$.prototype.$getMappedStyle$});
  $oj$$11$$.$DataGridResources$.prototype.$getMappedCommand$ = function $$oj$$11$$$$DataGridResources$$$$getMappedCommand$$($key$$49$$) {
    return null != $key$$49$$ ? this.$commands$[$key$$49$$] : null;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getMappedCommand", {$getMappedCommand$:$oj$$11$$.$DataGridResources$.prototype.$getMappedCommand$});
  $oj$$11$$.$DataGridResources$.prototype.$getMappedAttribute$ = function $$oj$$11$$$$DataGridResources$$$$getMappedAttribute$$($key$$50$$) {
    return null != $key$$50$$ ? this.attributes[$key$$50$$] : null;
  };
  $oj$$11$$.$Object$.$exportPrototypeSymbol$("DataGridResources.prototype.getMappedAttribute", {$getMappedAttribute$:$oj$$11$$.$DataGridResources$.prototype.$getMappedAttribute$});
  $DvtDataGrid$$.$DOWN_KEY$ = 40;
  $DvtDataGrid$$.$UP_KEY$ = 38;
  $DvtDataGrid$$.$LEFT_KEY$ = 37;
  $DvtDataGrid$$.$RIGHT_KEY$ = 39;
  $DvtDataGrid$$.$F10_KEY$ = 121;
  $DvtDataGrid$$.$X_KEY$ = 88;
  $DvtDataGrid$$.$V_KEY$ = 86;
  $DvtDataGrid$$.$TAB_KEY$ = 9;
  $DvtDataGrid$$.$HOME_KEY$ = 36;
  $DvtDataGrid$$.$END_KEY$ = 35;
  $DvtDataGrid$$.$PAGEUP_KEY$ = 33;
  $DvtDataGrid$$.$PAGEDOWN_KEY$ = 34;
  $DvtDataGrid$$.$NUM5_KEY$ = 53;
  $DvtDataGrid$$.$UPDATE_ANIMATION_FADE_INOUT$ = 1;
  $DvtDataGrid$$.$UPDATE_ANIMATION_SLIDE_INOUT$ = 2;
  $DvtDataGrid$$.$UPDATE_ANIMATION_DURATION$ = 250;
  $DvtDataGrid$$.$EXPAND_ANIMATION_DURATION$ = 500;
  $DvtDataGrid$$.$COLLAPSE_ANIMATION_DURATION$ = 400;
  $DvtDataGrid$$.$MAX_OVERSCROLL_PIXEL$ = 50;
  $DvtDataGrid$$.$BOUNCE_ANIMATION_DURATION$ = 500;
  $DvtDataGrid$$.$DECELERATION_FACTOR$ = 6E-4;
  $DvtDataGrid$$.$TAP_AND_SCROLL_RESET$ = 300;
  $DvtDataGrid$$.$MIN_SWIPE_DURATION$ = 200;
  $DvtDataGrid$$.$MAX_SWIPE_DURATION$ = 400;
  $DvtDataGrid$$.$MIN_SWIPE_DISTANCE$ = 10;
  $DvtDataGrid$$.$CONTEXT_MENU_TAP_HOLD_DURATION$ = 750;
  $DvtDataGrid$$.$HEADER_TAP_SHORT_HOLD_DURATION$ = 300;
  $DvtDataGrid$$.$VISIBILITY_STATE_HIDDEN$ = "hidden";
  $goog$exportPath_$$("DvtDataGrid.VISIBILITY_STATE_HIDDEN", $DvtDataGrid$$.$VISIBILITY_STATE_HIDDEN$, void 0);
  $DvtDataGrid$$.$VISIBILITY_STATE_REFRESH$ = "refresh";
  $goog$exportPath_$$("DvtDataGrid.VISIBILITY_STATE_REFRESH", $DvtDataGrid$$.$VISIBILITY_STATE_REFRESH$, void 0);
  $DvtDataGrid$$.$VISIBILITY_STATE_RENDER$ = "render";
  $goog$exportPath_$$("DvtDataGrid.VISIBILITY_STATE_RENDER", $DvtDataGrid$$.$VISIBILITY_STATE_RENDER$, void 0);
  $DvtDataGrid$$.$VISIBILITY_STATE_VISIBLE$ = "visible";
  $goog$exportPath_$$("DvtDataGrid.VISIBILITY_STATE_VISIBLE", $DvtDataGrid$$.$VISIBILITY_STATE_VISIBLE$, void 0);
  $DvtDataGrid$$.prototype.$SetOptions$ = function $$DvtDataGrid$$$$$SetOptions$$($options$$220$$) {
    this.$m_options$ = new $DvtDataGridOptions$$($options$$220$$);
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.SetOptions", $DvtDataGrid$$.prototype.$SetOptions$, void 0);
  $DvtDataGrid$$.prototype.$UpdateOptions$ = function $$DvtDataGrid$$$$$UpdateOptions$$($options$$221$$) {
    for (var $candidate$$ in $options$$221$$) {
      $candidate$$ in this.$m_options$.options && this.$m_options$.options[$candidate$$] != $options$$221$$[$candidate$$] && (this.$m_options$.options[$candidate$$] = $options$$221$$[$candidate$$]);
    }
    for ($candidate$$ in $options$$221$$) {
      if (!this.$_updateDataGrid$($candidate$$)) {
        this.empty();
        this.refresh(this.$m_root$);
        break;
      }
    }
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.UpdateOptions", $DvtDataGrid$$.prototype.$UpdateOptions$, void 0);
  $DvtDataGrid$$.prototype.$_updateDataGrid$ = function $$DvtDataGrid$$$$$_updateDataGrid$$($obj$$51_option$$29$$) {
    switch($obj$$51_option$$29$$) {
      case "bandingInterval":
        this.$_removeBanding$();
        this.$updateColumnBanding$();
        this.$updateRowBanding$();
        break;
      case "gridlines":
        this.$_updateGridlines$();
        break;
      case "scrollPosition":
        this.$setInitialScrollPosition$();
        break;
      case "selectionMode":
        break;
      case "emptyText":
        break;
      case "header":
        $obj$$51_option$$29$$ = this.$m_options$.options.header;
        this.$_updateHeaderOptions$($obj$$51_option$$29$$);
        break;
      case "selection":
        $obj$$51_option$$29$$ = this.$m_options$.getSelection();
        this.$_updateSelection$($obj$$51_option$$29$$);
        break;
      case "currentCell":
        $obj$$51_option$$29$$ = this.$m_options$.$getCurrentCell$();
        this.$_updateActive$($obj$$51_option$$29$$);
        break;
      default:
        return!1;
    }
    return!0;
  };
  $DvtDataGrid$$.prototype.$_updateSelection$ = function $$DvtDataGrid$$$$$_updateSelection$$($selection$$) {
    null != $selection$$ && (this.$_isSelectionEnabled$() ? this.$SetSelection$($selection$$) : $selection$$.length = 0);
  };
  $DvtDataGrid$$.prototype.$_updateHeaderOptions$ = function $$DvtDataGrid$$$$$_updateHeaderOptions$$($obj$$52$$) {
    var $colObj$$, $opt$$19$$, $headers$$2$$, $element$$66$$, $refresh$$;
    $refresh$$ = !1;
    for ($element$$66$$ in $obj$$52$$) {
      if ("column" == $element$$66$$ || "row" == $element$$66$$) {
        if ($refresh$$) {
          break;
        }
        "column" == $element$$66$$ ? this.$m_colHeader$ && ($headers$$2$$ = this.$m_colHeader$.firstChild.childNodes) : this.$m_rowHeader$ && ($headers$$2$$ = this.$m_rowHeader$.firstChild.childNodes);
        if ($headers$$2$$) {
          for ($opt$$19$$ in $colObj$$ = $obj$$52$$[$element$$66$$], $colObj$$) {
            if (!this.$_processHeaders$($headers$$2$$, $opt$$19$$, $colObj$$[$opt$$19$$])) {
              $refresh$$ = !0;
              break;
            }
          }
        }
      }
    }
    $refresh$$ && (this.empty(), this.refresh(this.$m_root$));
  };
  $DvtDataGrid$$.prototype.$_processHeaders$ = function $$DvtDataGrid$$$$$_processHeaders$$($headers$$3$$, $attribute$$4_opt$$20$$, $i$$138_value$$179$$) {
    var $val$$27$$;
    $attribute$$4_opt$$20$$ = this.$m_resources$.$getMappedAttribute$($attribute$$4_opt$$20$$);
    $val$$27$$ = $i$$138_value$$179$$;
    $i$$138_value$$179$$.width ? $val$$27$$ = $i$$138_value$$179$$.width : $i$$138_value$$179$$.height && ($val$$27$$ = $i$$138_value$$179$$.height);
    for ($i$$138_value$$179$$ = 0;$i$$138_value$$179$$ < $headers$$3$$.length;$i$$138_value$$179$$++) {
      if ("disable" == $val$$27$$) {
        $headers$$3$$[$i$$138_value$$179$$].setAttribute($attribute$$4_opt$$20$$, "false");
      } else {
        if ("enable" == $val$$27$$) {
          $headers$$3$$[$i$$138_value$$179$$].setAttribute($attribute$$4_opt$$20$$, "true");
        } else {
          return!1;
        }
      }
    }
    return!0;
  };
  $DvtDataGrid$$.prototype.$_updateGridlines$ = function $$DvtDataGrid$$$$$_updateGridlines$$() {
    var $i$$139$$, $j$$19$$, $row$$2$$, $rowCount$$2$$, $horizontalGridlines$$, $verticalGridlines$$, $rows$$, $dir$$1$$;
    $horizontalGridlines$$ = this.$m_options$.$getHorizontalGridlines$();
    $verticalGridlines$$ = this.$m_options$.$getVerticalGridlines$();
    $rows$$ = this.$m_databody$.firstChild.childNodes;
    $rowCount$$2$$ = $rows$$.length;
    $dir$$1$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left";
    for ($i$$139$$ = 0;$i$$139$$ < $rowCount$$2$$;$i$$139$$ += 1) {
      for ($row$$2$$ = $rows$$[$i$$139$$].childNodes, $j$$19$$ = 0;$j$$19$$ < $row$$2$$.length;$j$$19$$ += 1) {
        "hidden" === $verticalGridlines$$ || this.$_isLastColumn$($j$$19$$ + this.$m_startCol$) && this.$getRowHeaderWidth$() + this.$getElementDir$($row$$2$$[$j$$19$$], $dir$$1$$) + this.$calculateColumnWidth$($row$$2$$[$j$$19$$]) >= this.getWidth() ? "left" === $dir$$1$$ ? $row$$2$$[$j$$19$$].style.borderRightStyle = "none" : $row$$2$$[$j$$19$$].style.borderLeftStyle = "none" : "left" === $dir$$1$$ ? $row$$2$$[$j$$19$$].style.borderRightStyle = "" : $row$$2$$[$j$$19$$].style.borderLeftStyle = "", 
        "hidden" === $horizontalGridlines$$ || this.$_isLastRow$($i$$139$$ + this.$m_startRow$) && this.$getRowBottom$($rows$$[$i$$139$$], null) >= this.getHeight() ? $row$$2$$[$j$$19$$].style.borderBottomStyle = "none" : $row$$2$$[$j$$19$$].style.borderBottomStyle = "";
      }
    }
  };
  $DvtDataGrid$$.prototype.$SetResources$ = function $$DvtDataGrid$$$$$SetResources$$($resources$$) {
    this.$m_resources$ = $resources$$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.SetResources", $DvtDataGrid$$.prototype.$SetResources$, void 0);
  $DvtDataGrid$$.prototype.$getResources$ = function $$DvtDataGrid$$$$$getResources$$() {
    return this.$m_resources$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.getResources", $DvtDataGrid$$.prototype.$getResources$, void 0);
  $DvtDataGrid$$.prototype.$getStartRow$ = function $$DvtDataGrid$$$$$getStartRow$$() {
    return this.$m_startRow$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.getStartRow", $DvtDataGrid$$.prototype.$getStartRow$, void 0);
  $DvtDataGrid$$.prototype.$getStartRowHeader$ = function $$DvtDataGrid$$$$$getStartRowHeader$$() {
    return this.$m_startRowHeader$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.getStartRowHeader", $DvtDataGrid$$.prototype.$getStartRowHeader$, void 0);
  $DvtDataGrid$$.prototype.$getStartColumn$ = function $$DvtDataGrid$$$$$getStartColumn$$() {
    return this.$m_startCol$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.getStartColumn", $DvtDataGrid$$.prototype.$getStartColumn$, void 0);
  $DvtDataGrid$$.prototype.$getStartColumnHeader$ = function $$DvtDataGrid$$$$$getStartColumnHeader$$() {
    return this.$m_startColHeader$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.getStartColumnHeader", $DvtDataGrid$$.prototype.$getStartColumnHeader$, void 0);
  $DvtDataGrid$$.prototype.$getMappedStyle$ = function $$DvtDataGrid$$$$$getMappedStyle$$($key$$52$$) {
    return this.$m_resources$.$getMappedStyle$($key$$52$$);
  };
  $DvtDataGrid$$.prototype.$SetDataSource$ = function $$DvtDataGrid$$$$$SetDataSource$$($dataSource$$) {
    this.$_removeDataSourceEventListeners$();
    null != $dataSource$$ && (this.$m_handleModelEventListener$ = this.$handleModelEvent$.bind(this), this.$m_handleExpandEventListener$ = this.$handleExpandEvent$.bind(this), this.$m_handleCollapseEventListener$ = this.$handleCollapseEvent$.bind(this), $dataSource$$.on("change", this.$m_handleModelEventListener$, this), $dataSource$$.on("expand", this.$m_handleExpandEventListener$, this), $dataSource$$.on("collapse", this.$m_handleCollapseEventListener$, this));
    this.$m_dataSource$ = $dataSource$$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.SetDataSource", $DvtDataGrid$$.prototype.$SetDataSource$, void 0);
  $DvtDataGrid$$.prototype.$getDataSource$ = function $$DvtDataGrid$$$$$getDataSource$$() {
    return this.$m_dataSource$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.getDataSource", $DvtDataGrid$$.prototype.$getDataSource$, void 0);
  $DvtDataGrid$$.prototype.$setVisibility$ = function $$DvtDataGrid$$$$$setVisibility$$($state$$) {
    this.$m_visibility$ = $state$$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.setVisibility", $DvtDataGrid$$.prototype.$setVisibility$, void 0);
  $DvtDataGrid$$.prototype.$getVisibility$ = function $$DvtDataGrid$$$$$getVisibility$$() {
    null == this.$m_visibility$ && (null != this.$m_root$.offsetParent ? this.$setVisibility$($DvtDataGrid$$.$VISIBILITY_STATE_VISIBLE$) : this.$setVisibility$($DvtDataGrid$$.$VISIBILITY_STATE_HIDDEN$));
    return this.$m_visibility$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.getVisibility", $DvtDataGrid$$.prototype.$getVisibility$, void 0);
  $DvtDataGrid$$.prototype.$SetRemoveCallback$ = function $$DvtDataGrid$$$$$SetRemoveCallback$$($callback$$85$$) {
    this.$m_removeCallback$ = $callback$$85$$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.SetRemoveCallback", $DvtDataGrid$$.prototype.$SetRemoveCallback$, void 0);
  $DvtDataGrid$$.prototype.$_remove$ = function $$DvtDataGrid$$$$$_remove$$($element$$67$$) {
    null != this.$m_removeCallback$ ? this.$m_removeCallback$.call(null, $element$$67$$) : $element$$67$$.parentNode.removeChild($element$$67$$);
  };
  $goog$exportPath_$$("DvtDataGrid.prototype._remove", $DvtDataGrid$$.prototype.$_remove$, void 0);
  $DvtDataGrid$$.prototype.$SetCreateReadyPromiseCallback$ = function $$DvtDataGrid$$$$$SetCreateReadyPromiseCallback$$($callback$$86$$) {
    this.$m_createReadyPromise$ = $callback$$86$$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.SetCreateReadyPromiseCallback", $DvtDataGrid$$.prototype.$SetCreateReadyPromiseCallback$, void 0);
  $DvtDataGrid$$.prototype.$SetResolveReadyPromiseCallback$ = function $$DvtDataGrid$$$$$SetResolveReadyPromiseCallback$$($callback$$87$$) {
    this.$m_resolveReadyPromise$ = $callback$$87$$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.SetResolveReadyPromiseCallback", $DvtDataGrid$$.prototype.$SetResolveReadyPromiseCallback$, void 0);
  $DvtDataGrid$$.prototype.$_signalTaskStart$ = function $$DvtDataGrid$$$$$_signalTaskStart$$() {
    this.$m_readinessStack$ && (0 == this.$m_readinessStack$.length && this.$m_createReadyPromise$(), this.$m_readinessStack$.push(1));
  };
  $DvtDataGrid$$.prototype.$_signalTaskEnd$ = function $$DvtDataGrid$$$$$_signalTaskEnd$$() {
    this.$m_readinessStack$ && 0 < this.$m_readinessStack$.length && (this.$m_readinessStack$.pop(), 0 == this.$m_readinessStack$.length && this.$m_resolveReadyPromise$());
  };
  $DvtDataGrid$$.prototype.$_indexes$ = function $$DvtDataGrid$$$$$_indexes$$($keys$$10$$, $callback$$88$$) {
    var $self$$69$$ = this, $indexes$$;
    $indexes$$ = this.$m_dataSource$.indexes($keys$$10$$);
    "function" === typeof $indexes$$.then ? ($self$$69$$.$_signalTaskStart$(), $indexes$$.then(function($obj$$53$$) {
      $callback$$88$$.call($self$$69$$, $obj$$53$$, $keys$$10$$);
      $self$$69$$.$_signalTaskEnd$();
    }, function() {
      $callback$$88$$.call($self$$69$$, {row:-1, column:-1}, $keys$$10$$);
      $self$$69$$.$_signalTaskEnd$();
    })) : $callback$$88$$.call($self$$69$$, $indexes$$, $keys$$10$$);
  };
  $DvtDataGrid$$.prototype.$_keys$ = function $$DvtDataGrid$$$$$_keys$$($indexes$$1$$, $callback$$89$$) {
    var $self$$70$$ = this, $keys$$11$$;
    $keys$$11$$ = this.$m_dataSource$.keys($indexes$$1$$);
    "function" === typeof $keys$$11$$.then ? ($self$$70$$.$_signalTaskStart$(), $keys$$11$$.then(function($obj$$54$$) {
      $callback$$89$$.call($self$$70$$, $obj$$54$$, $indexes$$1$$);
      $self$$70$$.$_signalTaskEnd$();
    }, function() {
      $callback$$89$$.call($self$$70$$, {row:null, column:null}, $indexes$$1$$);
      $self$$70$$.$_signalTaskEnd$();
    })) : $callback$$89$$.call($self$$70$$, $keys$$11$$, $indexes$$1$$);
  };
  $DvtDataGrid$$.prototype.$_getLocalKeys$ = function $$DvtDataGrid$$$$$_getLocalKeys$$($indexes$$2$$) {
    var $keys$$12$$ = {row:null, column:null};
    null != $indexes$$2$$.row && ($keys$$12$$.row = this.$_getKey$(this.$m_databody$.firstChild.childNodes[$indexes$$2$$.row - this.$m_startRow$]));
    null != $indexes$$2$$.column && ($keys$$12$$.column = this.$_getKey$(this.$_getColumnHeaderByIndex$($indexes$$2$$.column, this.$m_columnHeaderLevelCount$ - 1)));
    return $keys$$12$$;
  };
  $DvtDataGrid$$.prototype.$SetCreateContextCallback$ = function $$DvtDataGrid$$$$$SetCreateContextCallback$$($callback$$90$$) {
    this.$m_createContextCallback$ = $callback$$90$$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.SetCreateContextCallback", $DvtDataGrid$$.prototype.$SetCreateContextCallback$, void 0);
  $DvtDataGrid$$.prototype.$_isHighWatermarkScrolling$ = function $$DvtDataGrid$$$$$_isHighWatermarkScrolling$$() {
    return "scroll" != this.$m_options$.$getScrollPolicy$();
  };
  $DvtDataGrid$$.prototype.destroy = function $$DvtDataGrid$$$$destroy$() {
    delete this.$m_fetching$;
    this.$_removeDataSourceEventListeners$();
    this.$_removeDomEventListeners$();
    delete this.$m_styleClassDimensionMap$;
    this.$m_styleClassDimensionMap$ = {};
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.destroy", $DvtDataGrid$$.prototype.destroy, void 0);
  $DvtDataGrid$$.prototype.$_removeDataSourceEventListeners$ = function $$DvtDataGrid$$$$$_removeDataSourceEventListeners$$() {
    null != this.$m_dataSource$ && (this.$m_dataSource$.off("change", this.$m_handleModelEventListener$), this.$m_dataSource$.off("expand", this.$m_handleExpandEventListener$), this.$m_dataSource$.off("collapse", this.$m_handleCollapseEventListener$));
  };
  $DvtDataGrid$$.prototype.$_removeDomEventListeners$ = function $$DvtDataGrid$$$$$_removeDomEventListeners$$() {
    document.removeEventListener("mousemove", this.$m_docMouseMoveListener$, !1);
    document.removeEventListener("mouseup", this.$m_docMouseUpListener$, !1);
    null != this.$m_root$ && (this.$m_handleDatabodyKeyDown$ && this.$m_root$.removeEventListener("keydown", this.$m_handleDatabodyKeyDown$, !1), this.$m_handleRootFocus$ && this.$m_root$.removeEventListener("focus", this.$m_handleRootFocus$, !1), this.$m_handleRootBlur$ && this.$m_root$.removeEventListener("blur", this.$m_handleRootBlur$, !1));
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
  $DvtDataGrid$$.prototype.$getScrollableWidth$ = function $$DvtDataGrid$$$$$getScrollableWidth$$() {
    return this.$getElementWidth$(this.$m_scroller$.firstChild);
  };
  $DvtDataGrid$$.prototype.$getViewportWidth$ = function $$DvtDataGrid$$$$$getViewportWidth$$() {
    var $width$$14$$ = this.getWidth();
    return Math.round(1.5 * $width$$14$$);
  };
  $DvtDataGrid$$.prototype.$getViewportHeight$ = function $$DvtDataGrid$$$$$getViewportHeight$$() {
    var $height$$13$$ = this.getHeight();
    return Math.round(1.5 * $height$$13$$);
  };
  $DvtDataGrid$$.prototype.$getFetchSize$ = function $$DvtDataGrid$$$$$getFetchSize$$($axis$$) {
    return "row" == $axis$$ ? (null == this.$m_rowFetchSize$ && (this.$m_rowFetchSize$ = Math.round(this.$getViewportHeight$() / this.$getDefaultRowHeight$())), this.$m_rowFetchSize$) : "column" == $axis$$ ? (null == this.$m_columnFetchSize$ && (this.$m_columnFetchSize$ = Math.round(this.$getViewportWidth$() / this.$getDefaultColumnWidth$())), this.$m_columnFetchSize$) : 0;
  };
  $DvtDataGrid$$.prototype.$getEmptyText$ = function $$DvtDataGrid$$$$$getEmptyText$$() {
    var $emptyText_resources$$1$$;
    $emptyText_resources$$1$$ = this.$m_options$.$getEmptyText$();
    null == $emptyText_resources$$1$$ && ($emptyText_resources$$1$$ = this.$m_resources$, $emptyText_resources$$1$$ = $emptyText_resources$$1$$.$getTranslatedText$("msgNoData"));
    return $emptyText_resources$$1$$;
  };
  $DvtDataGrid$$.prototype.$_buildEmptyText$ = function $$DvtDataGrid$$$$$_buildEmptyText$$() {
    var $emptyText$$1$$, $empty$$;
    $emptyText$$1$$ = this.$getEmptyText$();
    $empty$$ = document.createElement("div");
    $empty$$.id = this.$createSubId$("empty");
    $empty$$.className = this.$getMappedStyle$("emptytext");
    this.$setElementDir$($empty$$, 0 <= this.$m_endColHeader$ ? this.$getColumnHeaderHeight$() : 0, "top");
    $empty$$.textContent = $emptyText$$1$$;
    return this.$m_empty$ = $empty$$;
  };
  $DvtDataGrid$$.prototype.$setDefaultDimensions$ = function $$DvtDataGrid$$$$$setDefaultDimensions$$() {
    var $div$$3$$, $resources$$2$$;
    $div$$3$$ = document.createElement("div");
    $div$$3$$.style.visibilty = "hidden";
    $resources$$2$$ = this.$m_resources$;
    $div$$3$$.className = $resources$$2$$.$getMappedStyle$("colheadercell") + " " + $resources$$2$$.$getMappedStyle$("headercell");
    document.body.appendChild($div$$3$$);
    this.$m_defaultColumnWidth$ = Math.floor($div$$3$$.getBoundingClientRect().width);
    $div$$3$$.className = $resources$$2$$.$getMappedStyle$("row");
    this.$m_defaultRowHeight$ = Math.floor($div$$3$$.getBoundingClientRect().height);
    document.body.removeChild($div$$3$$);
  };
  $DvtDataGrid$$.prototype.$getDefaultRowHeight$ = function $$DvtDataGrid$$$$$getDefaultRowHeight$$() {
    null == this.$m_defaultRowHeight$ && this.$setDefaultDimensions$();
    return this.$m_defaultRowHeight$;
  };
  $DvtDataGrid$$.prototype.$getDefaultColumnWidth$ = function $$DvtDataGrid$$$$$getDefaultColumnWidth$$() {
    null == this.$m_defaultColumnWidth$ && this.$setDefaultDimensions$();
    return this.$m_defaultColumnWidth$;
  };
  $DvtDataGrid$$.prototype.$getRowHeight$ = function $$DvtDataGrid$$$$$getRowHeight$$($elem$$21$$, $key$$53$$) {
    var $rowHeight$$, $className$$6$$;
    $rowHeight$$ = this.$m_sizingManager$.$getSize$("row", $key$$53$$);
    if (null != $rowHeight$$) {
      return $rowHeight$$;
    }
    if ("" != $elem$$21$$.style.height) {
      return $rowHeight$$ = this.$getElementHeight$($elem$$21$$), this.$m_sizingManager$.$setSize$("row", $key$$53$$, $rowHeight$$), $rowHeight$$;
    }
    $className$$6$$ = $elem$$21$$.className;
    $rowHeight$$ = this.$m_styleClassDimensionMap$[$className$$6$$];
    null == $rowHeight$$ && ($rowHeight$$ = this.$getElementHeight$($elem$$21$$));
    $rowHeight$$ != this.$getDefaultRowHeight$() && this.$m_sizingManager$.$setSize$("row", $key$$53$$, $rowHeight$$);
    return this.$m_styleClassDimensionMap$[$className$$6$$] = $rowHeight$$;
  };
  $DvtDataGrid$$.prototype.$getColumnWidth$ = function $$DvtDataGrid$$$$$getColumnWidth$$($elem$$22$$, $key$$54$$) {
    var $columnWidth$$, $className$$7$$;
    $columnWidth$$ = this.$m_sizingManager$.$getSize$("column", $key$$54$$);
    if (null != $columnWidth$$) {
      return $columnWidth$$;
    }
    if ("" != $elem$$22$$.style.width) {
      return $columnWidth$$ = this.$getElementWidth$($elem$$22$$), this.$m_sizingManager$.$setSize$("column", $key$$54$$, $columnWidth$$), $columnWidth$$;
    }
    $className$$7$$ = $elem$$22$$.className;
    $columnWidth$$ = this.$m_styleClassDimensionMap$[$className$$7$$];
    null == $columnWidth$$ && ($columnWidth$$ = this.$getElementWidth$($elem$$22$$));
    $columnWidth$$ != this.$getDefaultColumnWidth$() && this.$m_sizingManager$.$setSize$("column", $key$$54$$, $columnWidth$$);
    return this.$m_styleClassDimensionMap$[$className$$7$$] = $columnWidth$$;
  };
  $DvtDataGrid$$.prototype.$createSubId$ = function $$DvtDataGrid$$$$$createSubId$$($subId$$6$$) {
    var $id$$16$$ = this.$getRootElement$().id;
    null == $id$$16$$ && ($id$$16$$ = "");
    return[$id$$16$$, $subId$$6$$].join(":");
  };
  $DvtDataGrid$$.prototype.$isHeaderFetchComplete$ = function $$DvtDataGrid$$$$$isHeaderFetchComplete$$() {
    return!1 === this.$m_fetching$.row && !1 === this.$m_fetching$.column;
  };
  $DvtDataGrid$$.prototype.$isFetchComplete$ = function $$DvtDataGrid$$$$$isFetchComplete$$() {
    return this.$isHeaderFetchComplete$() && !1 === this.$m_fetching$.cells;
  };
  $DvtDataGrid$$.prototype.$_isLastRow$ = function $$DvtDataGrid$$$$$_isLastRow$$($index$$97$$) {
    return this.$_isCountUnknown$("row") ? $index$$97$$ === this.$m_endRow$ && this.$m_stopRowFetch$ : $index$$97$$ + 1 === this.$m_dataSource$.getCount("row");
  };
  $DvtDataGrid$$.prototype.$_isLastColumn$ = function $$DvtDataGrid$$$$$_isLastColumn$$($index$$98$$) {
    return this.$_isCountUnknown$("column") ? $index$$98$$ === this.$m_endCol$ && this.$m_stopColumnFetch$ : $index$$98$$ + 1 === this.$m_dataSource$.getCount("column");
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
  $DvtDataGrid$$.prototype.refresh = function $$DvtDataGrid$$$$refresh$($root$$2$$) {
    this.$_removeDomEventListeners$();
    this.$resetInternal$();
    this.render($root$$2$$);
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.refresh", $DvtDataGrid$$.prototype.refresh, void 0);
  $DvtDataGrid$$.prototype.$resetInternal$ = function $$DvtDataGrid$$$$$resetInternal$$() {
    this.$m_initialized$ = !1;
    this.$m_readinessStack$ = [];
    this.$_signalTaskStart$();
    this.$_signalTaskEnd$();
    this.$m_status$ = this.$m_stateInfo$ = this.$m_placeHolder$ = this.$m_contextInfo$ = this.$m_accSummary$ = this.$m_accInfo$ = this.$m_empty$ = this.$m_scroller$ = this.$m_databody$ = this.$m_rowHeader$ = this.$m_colHeader$ = this.$m_rowHeaderScrollbarSpacer$ = this.$m_columnHeaderScrollbarSpacer$ = this.$m_bottomCorner$ = this.$m_corner$ = this.$m_cursor$ = null;
    this.$m_isEstimateColumnCount$ = this.$m_isEstimateRowCount$ = void 0;
    this.$m_stopColumnHeaderFetch$ = this.$m_stopColumnFetch$ = this.$m_stopRowHeaderFetch$ = this.$m_stopRowFetch$ = !1;
    this.$m_fetching$ = this.$m_columnFetchSize$ = this.$m_rowFetchSize$ = null;
    this.$m_sizingManager$.clear();
    this.$m_styleClassDimensionMap$ = {};
    this.$m_scrollWidth$ = this.$m_scrollHeight$ = this.$m_width$ = this.$m_height$ = null;
    this.$m_avgColWidth$ = this.$m_avgRowHeight$ = void 0;
    this.$m_prevActive$ = this.$m_active$ = this.$m_columnHeaderLevelHeights$ = this.$m_rowHeaderLevelWidths$ = this.$m_rowHeaderWidth$ = this.$m_colHeaderHeight$ = this.$m_defaultRowHeight$ = this.$m_defaultColumnWidth$ = null;
    this.$m_databodyMove$ = this.$m_databodyDragState$ = !1;
    this.$m_dropTargetHeader$ = this.$m_dropTarget$ = this.$m_moveRowHeader$ = this.$m_moveRow$ = null;
    this.$m_discontiguousSelection$ = !1;
    this.$m_modelEvents$ = this.$m_handleRootBlur$ = this.$m_handleRootFocus$ = this.$m_handleDatabodyKeyDown$ = this.$m_docMouseUpListener$ = this.$m_docMouseMoveListener$ = null;
    this.$m_captureScrolling$ = this.$m_stopDatabodyScroll$ = !1;
    this.$m_externalFocus$ = this.$m_resizeRequired$ = this.$m_sortInfo$ = this.$m_columnHeaderLevelCount$ = this.$m_rowHeaderLevelCount$ = this.$m_endColHeaderPixel$ = this.$m_endRowHeaderPixel$ = this.$m_startColHeaderPixel$ = this.$m_startRowHeaderPixel$ = this.$m_endColHeader$ = this.$m_endRowHeader$ = this.$m_startColHeader$ = this.$m_startRowHeader$ = this.$m_endColPixel$ = this.$m_endRowPixel$ = this.$m_startColPixel$ = this.$m_startRowPixel$ = this.$m_endCol$ = this.$m_endRow$ = this.$m_startCol$ = 
    this.$m_startRow$ = this.$m_resizingElement$ = this.$m_currentScrollTop$ = this.$m_currentScrollLeft$ = this.$m_hasVerticalScroller$ = this.$m_hasHorizontalScroller$ = null;
  };
  $DvtDataGrid$$.prototype.$_shouldInitialize$ = function $$DvtDataGrid$$$$$_shouldInitialize$$() {
    return this.$isFetchComplete$() && !this.$m_initialized$ && null != this.$m_databody$.parentNode;
  };
  $DvtDataGrid$$.prototype.$_handleInitialization$ = function $$DvtDataGrid$$$$$_handleInitialization$$($hasData$$) {
    !0 == $hasData$$ ? (this.$resizeGrid$(), this.$setInitialScrollPosition$(), this.$fillViewport$(this.$m_currentScrollLeft$, this.$m_currentScrollTop$), this.$isFetchComplete$() && (this.$_updateActive$(this.$m_options$.$getCurrentCell$()), this.$m_initialized$ = !0, this.fireEvent("ready", {}), this.$_runModelEventQueue$())) : (this.$m_initialized$ = !0, this.fireEvent("ready", {}), this.$_runModelEventQueue$());
  };
  $DvtDataGrid$$.prototype.$_runModelEventQueue$ = function $$DvtDataGrid$$$$$_runModelEventQueue$$() {
    var $i$$140$$;
    if (null != this.$m_modelEvents$) {
      for ($i$$140$$ = 0;$i$$140$$ < this.$m_modelEvents$.length;$i$$140$$++) {
        this.$handleModelEvent$(this.$m_modelEvents$[$i$$140$$]);
      }
      this.$m_modelEvents$.length = 0;
    }
  };
  $DvtDataGrid$$.prototype.render = function $$DvtDataGrid$$$$render$($root$$3$$) {
    null != this.$m_databody$ && (this.destroy(), this.$resetInternal$());
    this.$m_fetching$ = {};
    this.$m_startCol$ = this.$m_startRow$ = 0;
    this.$m_endCol$ = this.$m_endRow$ = -1;
    this.$m_startColHeader$ = this.$m_startRowHeader$ = this.$m_endColPixel$ = this.$m_endRowPixel$ = this.$m_startColPixel$ = this.$m_startRowPixel$ = 0;
    this.$m_endColHeader$ = this.$m_endRowHeader$ = -1;
    this.$m_currentScrollTop$ = this.$m_currentScrollLeft$ = this.$m_endColHeaderPixel$ = this.$m_endRowHeaderPixel$ = this.$m_startColHeaderPixel$ = this.$m_startRowHeaderPixel$ = 0;
    this.$buildGrid$($root$$3$$);
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.render", $DvtDataGrid$$.prototype.render, void 0);
  $DvtDataGrid$$.prototype.$buildGrid$ = function $$DvtDataGrid$$$$$buildGrid$$($empty$$1_root$$4$$) {
    var $status$$15$$, $accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$, $colHeader$$, $rowHeader$$, $scroller$$, $databody$$;
    this.$m_root$ = $empty$$1_root$$4$$;
    this.$m_root$.setAttribute("role", "application");
    $empty$$1_root$$4$$.tabIndex = 0;
    $status$$15$$ = this.$buildStatus$();
    $empty$$1_root$$4$$.appendChild($status$$15$$);
    this.$m_status$ = $status$$15$$;
    $accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$ = this.$buildAccSummary$();
    $empty$$1_root$$4$$.appendChild($accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$);
    this.$m_accSummary$ = $accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$;
    $accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$ = this.$buildAccInfo$();
    $empty$$1_root$$4$$.appendChild($accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$);
    this.$m_accInfo$ = $accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$;
    $accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$ = this.$buildStateInfo$();
    $empty$$1_root$$4$$.appendChild($accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$);
    this.$m_stateInfo$ = $accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$;
    $accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$ = this.$buildContextInfo$();
    $empty$$1_root$$4$$.appendChild($accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$);
    this.$m_contextInfo$ = $accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$;
    $accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$ = this.$buildPlaceHolder$();
    $empty$$1_root$$4$$.appendChild($accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$);
    this.$m_placeHolder$ = $accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$;
    null != this.$m_dataSource$ ? (this.$m_empty$ = null, $accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$ = this.$m_resources$.$isRTLMode$(), $colHeader$$ = this.$buildHeaders$("column", this.$getMappedStyle$("colheader")), $rowHeader$$ = this.$buildHeaders$("row", this.$getMappedStyle$("rowheader")), $scroller$$ = this.$buildScroller$(), $databody$$ = this.$buildDatabody$($scroller$$), $accInfo_accSummary_contextInfo_placeHolder_rtl_stateInfo$$ && ($colHeader$$.style.direction = "rtl", 
    $databody$$.style.direction = "rtl", $scroller$$.style.direction = "rtl"), this.$m_isResizing$ = !1, this.$m_resizingElement$ = null, this.$m_databodyDragState$ = !1, this.$m_handleDatabodyKeyDown$ = this.$handleDatabodyKeyDown$.bind(this), this.$m_handleRootFocus$ = this.$handleRootFocus$.bind(this), this.$m_handleRootBlur$ = this.$handleRootBlur$.bind(this), this.$m_docMouseMoveListener$ = this.$handleMouseMove$.bind(this), this.$m_docMouseUpListener$ = this.$handleMouseUp$.bind(this), this.$m_utils$.$isTouchDevice$() ? 
    ($databody$$.addEventListener("touchstart", this.$handleTouchStart$.bind(this), !1), $databody$$.addEventListener("touchmove", this.$handleTouchMove$.bind(this), !1), $databody$$.addEventListener("touchend", this.$handleTouchEnd$.bind(this), !1), $databody$$.addEventListener("touchcancel", this.$handleTouchCancel$.bind(this), !1), $colHeader$$.addEventListener("touchstart", this.$handleHeaderTouchStart$.bind(this), !1), $colHeader$$.addEventListener("touchmove", this.$handleHeaderTouchMove$.bind(this), 
    !1), $colHeader$$.addEventListener("touchend", this.$handleHeaderTouchEnd$.bind(this), !1), $colHeader$$.addEventListener("touchcancel", this.$handleHeaderTouchCancel$.bind(this), !1), $rowHeader$$.addEventListener("touchstart", this.$handleHeaderTouchStart$.bind(this), !1), $rowHeader$$.addEventListener("touchmove", this.$handleHeaderTouchMove$.bind(this), !1), $rowHeader$$.addEventListener("touchend", this.$handleHeaderTouchEnd$.bind(this), !1), $rowHeader$$.addEventListener("touchcancel", 
    this.$handleHeaderTouchCancel$.bind(this), !1), $empty$$1_root$$4$$.addEventListener("focus", this.$m_handleRootFocus$, !0), $empty$$1_root$$4$$.addEventListener("blur", this.$m_handleRootBlur$, !0)) : (document.addEventListener("mousemove", this.$m_docMouseMoveListener$, !1), document.addEventListener("mouseup", this.$m_docMouseUpListener$, !1), $empty$$1_root$$4$$.addEventListener("keydown", this.$m_handleDatabodyKeyDown$, !1), $empty$$1_root$$4$$.addEventListener("focus", this.$m_handleRootFocus$, 
    !0), $empty$$1_root$$4$$.addEventListener("blur", this.$m_handleRootBlur$, !0), $databody$$.addEventListener(this.$m_utils$.$getMousewheelEvent$(), this.$handleDatabodyMouseWheel$.bind(this), !1), $databody$$.addEventListener("mousedown", this.$handleDatabodyMouseDown$.bind(this), !1), $databody$$.addEventListener("mousemove", this.$handleDatabodyMouseMove$.bind(this), !1), $databody$$.addEventListener("mouseup", this.$handleDatabodyMouseUp$.bind(this), !1), $databody$$.addEventListener("mouseout", 
    this.$handleDatabodyMouseOut$.bind(this), !1), $databody$$.addEventListener("mouseover", this.$handleDatabodyMouseOver$.bind(this), !1), $rowHeader$$.addEventListener("mousedown", this.$handleHeaderMouseDown$.bind(this), !1), $colHeader$$.addEventListener("mousedown", this.$handleHeaderMouseDown$.bind(this), !1), $rowHeader$$.addEventListener("mouseover", this.$handleHeaderMouseOver$.bind(this), !1), $colHeader$$.addEventListener("mouseover", this.$handleHeaderMouseOver$.bind(this), !1), $rowHeader$$.addEventListener("mousemove", 
    this.$handleRowHeaderMouseMove$.bind(this), !1), $rowHeader$$.addEventListener("mouseup", this.$handleHeaderMouseUp$.bind(this), !1), $rowHeader$$.addEventListener("mouseout", this.$handleHeaderMouseOut$.bind(this), !1), $colHeader$$.addEventListener("mouseout", this.$handleHeaderMouseOut$.bind(this), !1), $rowHeader$$.addEventListener("click", this.$handleHeaderClick$.bind(this), !1), $colHeader$$.addEventListener("click", this.$handleHeaderClick$.bind(this), !1), $scroller$$.addEventListener("mousedown", 
    this.$handleScrollerMouseDown$.bind(this), !1), $scroller$$.addEventListener("mouseup", this.$handleScrollerMouseUp$.bind(this), !1)), $empty$$1_root$$4$$.insertBefore($colHeader$$, $status$$15$$), $empty$$1_root$$4$$.insertBefore($rowHeader$$, $status$$15$$), $empty$$1_root$$4$$.insertBefore($scroller$$, $status$$15$$), $empty$$1_root$$4$$.insertBefore($databody$$, $status$$15$$), this.$_shouldInitialize$() && this.$_handleInitialization$(!0)) : ($empty$$1_root$$4$$ = this.$_buildEmptyText$(), 
    this.$m_root$.appendChild($empty$$1_root$$4$$), this.$_handleInitialization$(!1));
  };
  $DvtDataGrid$$.prototype.$HandleResize$ = function $$DvtDataGrid$$$$$HandleResize$$($width$$16$$, $height$$16$$) {
    $width$$16$$ = this.$getRootElement$().clientWidth;
    $height$$16$$ = this.$getRootElement$().clientHeight;
    if ($width$$16$$ != this.$m_width$ || $height$$16$$ != this.$m_height$) {
      this.$m_width$ = $width$$16$$, this.$m_height$ = $height$$16$$, this.$m_columnFetchSize$ = this.$m_rowFetchSize$ = null, this.$m_initialized$ && (this.$resizeGrid$(), this.$isFetchComplete$() && this.$fillViewport$(this.$m_currentScrollLeft$, this.$m_currentScrollTop$));
    }
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.HandleResize", $DvtDataGrid$$.prototype.$HandleResize$, void 0);
  $DvtDataGrid$$.prototype.$resizeGrid$ = function $$DvtDataGrid$$$$$resizeGrid$$() {
    var $databodyWidth_width$$17$$, $height$$17_scrollerHeight$$, $colHeader$$2_empty$$2$$, $rowHeader$$2$$, $scroller$$1$$, $databody$$1$$, $colHeaderHeight$$1$$, $rowHeaderWidth$$1$$, $databodyContentWidth$$, $databodyContentHeight$$, $databodyHeight$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$, $isDatabodyVerticalScrollbarRequired$$, $scrollbarSize$$, $scrollerWidth$$;
    this.$_databodyEmpty$() ? null == this.$m_empty$ && ($colHeader$$2_empty$$2$$ = this.$_buildEmptyText$(), this.$m_root$.appendChild($colHeader$$2_empty$$2$$)) : ($databodyWidth_width$$17$$ = this.getWidth(), $height$$17_scrollerHeight$$ = this.getHeight(), $colHeader$$2_empty$$2$$ = this.$m_colHeader$, $rowHeader$$2$$ = this.$m_rowHeader$, $scroller$$1$$ = this.$m_scroller$, $databody$$1$$ = this.$m_databody$, $colHeaderHeight$$1$$ = this.$getColumnHeaderHeight$(), $rowHeaderWidth$$1$$ = this.$getRowHeaderWidth$(), 
    $databodyContentWidth$$ = this.$getElementWidth$($databody$$1$$.firstChild), $databodyContentHeight$$ = this.$getElementHeight$($databody$$1$$.firstChild), $height$$17_scrollerHeight$$ -= $colHeaderHeight$$1$$, $scrollerWidth$$ = $databodyWidth_width$$17$$ - $rowHeaderWidth$$1$$, $databodyWidth_width$$17$$ = Math.min($databodyContentWidth$$, $scrollerWidth$$), $databodyHeight$$ = Math.min($databodyContentHeight$$, $height$$17_scrollerHeight$$), this.$m_utils$.$isTouchDevice$(), $scrollbarSize$$ = 
    this.$m_utils$.$getScrollbarSize$(), ($dir$$3_isDatabodyHorizontalScrollbarRequired$$ = this.$isDatabodyHorizontalScrollbarRequired$($scrollerWidth$$)) ? $isDatabodyVerticalScrollbarRequired$$ = this.$isDatabodyVerticalScrollbarRequired$($height$$17_scrollerHeight$$ - $scrollbarSize$$) : ($isDatabodyVerticalScrollbarRequired$$ = this.$isDatabodyVerticalScrollbarRequired$($height$$17_scrollerHeight$$)) && ($dir$$3_isDatabodyHorizontalScrollbarRequired$$ = this.$isDatabodyHorizontalScrollbarRequired$($scrollerWidth$$ - 
    $scrollbarSize$$)), this.$m_hasHorizontalScroller$ = $dir$$3_isDatabodyHorizontalScrollbarRequired$$, this.$m_hasVerticalScroller$ = $isDatabodyVerticalScrollbarRequired$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$ && $height$$17_scrollerHeight$$ - $scrollbarSize$$ < $databodyHeight$$ && ($databodyHeight$$ = $height$$17_scrollerHeight$$ - $scrollbarSize$$), $isDatabodyVerticalScrollbarRequired$$ && $scrollerWidth$$ - $scrollbarSize$$ < $databodyWidth_width$$17$$ && ($databodyWidth_width$$17$$ = 
    $scrollerWidth$$ - $scrollbarSize$$), $dir$$3_isDatabodyHorizontalScrollbarRequired$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left", this.$setElementDir$($rowHeader$$2$$, 0, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), this.$setElementDir$($rowHeader$$2$$, $colHeaderHeight$$1$$, "top"), this.$setElementHeight$($rowHeader$$2$$, $databodyHeight$$), this.$setElementDir$($colHeader$$2_empty$$2$$, $rowHeaderWidth$$1$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), this.$setElementWidth$($colHeader$$2_empty$$2$$, 
    $databodyWidth_width$$17$$), this.$setElementDir$($databody$$1$$, $colHeaderHeight$$1$$, "top"), this.$setElementDir$($databody$$1$$, $rowHeaderWidth$$1$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), this.$setElementWidth$($databody$$1$$, $databodyWidth_width$$17$$), this.$setElementHeight$($databody$$1$$, $databodyHeight$$), this.$setElementDir$($scroller$$1$$, $colHeaderHeight$$1$$, "top"), this.$setElementDir$($scroller$$1$$, $rowHeaderWidth$$1$$, $dir$$3_isDatabodyHorizontalScrollbarRequired$$), 
    this.$setElementWidth$($scroller$$1$$, $scrollerWidth$$), this.$setElementHeight$($scroller$$1$$, $height$$17_scrollerHeight$$), this.$m_scrollWidth$ = $databodyContentWidth$$ - $databodyWidth_width$$17$$, this.$m_scrollHeight$ = $databodyContentHeight$$ - $databodyHeight$$, this.$_adjustColumnHeader$(), this.$buildCorners$(), this.$m_resizeRequired$ = !1);
  };
  $DvtDataGrid$$.prototype.$_adjustColumnHeader$ = function $$DvtDataGrid$$$$$_adjustColumnHeader$$() {
    var $borderStyle$$, $lastHeader$$;
    null != this.$m_colHeader$ && 0 <= this.$m_endColHeader$ && this.$getRowHeaderWidth$() + this.$m_endColHeaderPixel$ >= this.getWidth() && ($borderStyle$$ = this.$m_resources$.$isRTLMode$() ? "borderLeftStyle" : "borderRightStyle", $lastHeader$$ = this.$_getColumnHeaderByIndex$(this.$m_endColHeader$, this.$m_columnHeaderLevelCount$ - 1), $lastHeader$$.style[$borderStyle$$] = "none");
  };
  $DvtDataGrid$$.prototype.$buildCorners$ = function $$DvtDataGrid$$$$$buildCorners$$() {
    var $colHeaderHeight$$2$$, $rowHeaderWidth$$2$$, $bottomCorner$$, $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $dir$$4$$, $colHeaderWidth$$, $rowHeaderHeight$$, $scrollerWidth$$1$$, $scrollerHeight$$1$$;
    this.$m_utils$.$getScrollbarSize$();
    $scrollerWidth$$1$$ = this.$getElementWidth$(this.$m_scroller$);
    $scrollerHeight$$1$$ = this.$getElementHeight$(this.$m_scroller$);
    $colHeaderHeight$$2$$ = this.$getColumnHeaderHeight$();
    $colHeaderWidth$$ = this.$getElementWidth$(this.$m_colHeader$);
    $rowHeaderWidth$$2$$ = this.$getRowHeaderWidth$();
    $rowHeaderHeight$$ = this.$getElementHeight$(this.$m_rowHeader$);
    $dir$$4$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left";
    -1 != this.$m_endRowHeader$ && -1 != this.$m_endColHeader$ && (null != this.$m_corner$ ? $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = this.$m_corner$ : ($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = document.createElement("div"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = this.$createSubId$("corner"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = this.$getMappedStyle$("topcorner")), this.$setElementWidth$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 
    $rowHeaderWidth$$2$$), this.$setElementHeight$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $colHeaderHeight$$2$$), null == this.$m_corner$ && (this.$m_root$.appendChild($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), this.$m_corner$ = $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$));
    null != this.$m_corner$ && null == $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ && (this.$m_root$.removeChild(this.$m_corner$), this.$m_corner$ = null);
    -1 != this.$m_endRowHeader$ && (this.$m_hasHorizontalScroller$ ? (null != this.$m_rowHeaderScrollbarSpacer$ ? $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = this.$m_rowHeaderScrollbarSpacer$ : ($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = document.createElement("div"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = this.$createSubId$("rhSbSpacer"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = this.$getMappedStyle$("rowheaderspacer")), 
    this.$setElementDir$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderHeight$$ + $colHeaderHeight$$2$$, "top"), this.$setElementDir$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 0, $dir$$4$$), this.$setElementWidth$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$), this.$setElementHeight$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $scrollerHeight$$1$$ - $rowHeaderHeight$$), null == this.$m_rowHeaderScrollbarSpacer$ && 
    (this.$m_root$.appendChild($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), this.$m_rowHeaderScrollbarSpacer$ = $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$)) : (null != this.$m_rowHeaderScrollbarSpacer$ && this.$m_root$.removeChild(this.$m_rowHeaderScrollbarSpacer$), this.$m_rowHeaderScrollbarSpacer$ = null));
    -1 != this.$m_endColHeader$ && (this.$m_hasVerticalScroller$ ? (null != this.$m_columnHeaderScrollbarSpacer$ ? $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = this.$m_columnHeaderScrollbarSpacer$ : ($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$ = document.createElement("div"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.id = this.$createSubId$("chSbSpacer"), $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$.className = this.$getMappedStyle$("colheaderspacer")), 
    this.$setElementDir$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $rowHeaderWidth$$2$$ + $colHeaderWidth$$, $dir$$4$$), this.$setElementDir$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, 0, "top"), this.$setElementWidth$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $scrollerWidth$$1$$ - $colHeaderWidth$$), this.$setElementHeight$($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$, $colHeaderHeight$$2$$), null == this.$m_columnHeaderScrollbarSpacer$ && 
    (this.$m_root$.appendChild($columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$), this.$m_columnHeaderScrollbarSpacer$ = $columnHeaderScrollbarSpacer_corner_rowHeaderScrollbarSpacer$$)) : (null != this.$m_columnHeaderScrollbarSpacer$ && this.$m_root$.removeChild(this.$m_columnHeaderScrollbarSpacer$), this.$m_columnHeaderScrollbarSpacer$ = null));
    this.$m_hasHorizontalScroller$ && this.$m_hasVerticalScroller$ && (null != this.$m_bottomCorner$ ? $bottomCorner$$ = this.$m_bottomCorner$ : ($bottomCorner$$ = document.createElement("div"), $bottomCorner$$.id = this.$createSubId$("bcorner"), $bottomCorner$$.className = this.$getMappedStyle$("bottomcorner")), this.$setElementDir$($bottomCorner$$, $rowHeaderHeight$$ + $colHeaderHeight$$2$$, "top"), this.$setElementDir$($bottomCorner$$, $rowHeaderWidth$$2$$ + $colHeaderWidth$$, $dir$$4$$), this.$setElementWidth$($bottomCorner$$, 
    $scrollerWidth$$1$$ - $colHeaderWidth$$), this.$setElementHeight$($bottomCorner$$, $scrollerHeight$$1$$ - $rowHeaderHeight$$), null == this.$m_bottomCorner$ && (this.$m_root$.appendChild($bottomCorner$$), this.$m_bottomCorner$ = $bottomCorner$$));
    null != this.$m_bottomCorner$ && null == $bottomCorner$$ && (this.$m_root$.removeChild(this.$m_bottomCorner$), this.$m_bottomCorner$ = null);
  };
  $DvtDataGrid$$.prototype.$setInitialScrollPosition$ = function $$DvtDataGrid$$$$$setInitialScrollPosition$$() {
    var $databody$$2_firstCell_scrollMode$$, $columnScrollPosition$$, $rowScrollPosition$$, $firstRow$$;
    $databody$$2_firstCell_scrollMode$$ = this.$m_options$.$getScrollPositionMode$();
    if (void 0 != this.$m_scroller$ && null != $databody$$2_firstCell_scrollMode$$ && ($columnScrollPosition$$ = this.$m_options$.$getColumnScrollPosition$(), $rowScrollPosition$$ = this.$m_options$.$getRowScrollPosition$(), null != $columnScrollPosition$$ || null != $rowScrollPosition$$)) {
      if ("key" === $databody$$2_firstCell_scrollMode$$) {
        if (null == $rowScrollPosition$$ || null == $columnScrollPosition$$) {
          $databody$$2_firstCell_scrollMode$$ = this.$m_databody$, $firstRow$$ = null != $databody$$2_firstCell_scrollMode$$ ? $databody$$2_firstCell_scrollMode$$.firstChild.firstChild : null, $databody$$2_firstCell_scrollMode$$ = null != $firstRow$$ ? $databody$$2_firstCell_scrollMode$$.firstChild.firstChild.firstChild : null, null == $rowScrollPosition$$ && null != $databody$$2_firstCell_scrollMode$$ ? $rowScrollPosition$$ = $databody$$2_firstCell_scrollMode$$[this.$m_resources$.$getMappedAttribute$("context")].keys.row : 
          null == $columnScrollPosition$$ && null != $databody$$2_firstCell_scrollMode$$ && ($columnScrollPosition$$ = $databody$$2_firstCell_scrollMode$$[this.$m_resources$.$getMappedAttribute$("context")].keys.column);
        }
        null != $rowScrollPosition$$ && null != $columnScrollPosition$$ && this.$_indexes$({row:$rowScrollPosition$$, column:$columnScrollPosition$$}, this.$_intialScrollPositionCallback$);
      } else {
        null == $rowScrollPosition$$ ? $rowScrollPosition$$ = 0 : null == $columnScrollPosition$$ && ($columnScrollPosition$$ = 0), this.$_intialScrollPositionCallback$({row:$rowScrollPosition$$, column:$columnScrollPosition$$});
      }
    }
  };
  $DvtDataGrid$$.prototype.$_intialScrollPositionCallback$ = function $$DvtDataGrid$$$$$_intialScrollPositionCallback$$($indexes$$3_rowScrollPosition$$1$$) {
    var $columnScrollPosition$$1_initialScrollLeft$$, $initialScrollTop$$ = 0;
    $columnScrollPosition$$1_initialScrollLeft$$ = -1 === $indexes$$3_rowScrollPosition$$1$$.column ? 0 : $indexes$$3_rowScrollPosition$$1$$.column;
    $indexes$$3_rowScrollPosition$$1$$ = -1 === $indexes$$3_rowScrollPosition$$1$$.row ? 0 : $indexes$$3_rowScrollPosition$$1$$.row;
    $columnScrollPosition$$1_initialScrollLeft$$ *= this.$m_avgColWidth$;
    $initialScrollTop$$ = $indexes$$3_rowScrollPosition$$1$$ * this.$m_avgRowHeight$;
    this.$_initiateScroll$($columnScrollPosition$$1_initialScrollLeft$$, $initialScrollTop$$);
  };
  $DvtDataGrid$$.prototype.$isDatabodyHorizontalScrollbarRequired$ = function $$DvtDataGrid$$$$$isDatabodyHorizontalScrollbarRequired$$($expected_expectedWidth$$) {
    var $databody$$3$$;
    $databody$$3$$ = this.$m_databody$;
    $expected_expectedWidth$$ = null == $expected_expectedWidth$$ ? this.$getElementWidth$($databody$$3$$) : $expected_expectedWidth$$;
    return this.$getElementWidth$($databody$$3$$.firstChild) > $expected_expectedWidth$$ ? !0 : !1;
  };
  $DvtDataGrid$$.prototype.$isDatabodyVerticalScrollbarRequired$ = function $$DvtDataGrid$$$$$isDatabodyVerticalScrollbarRequired$$($expected$$1_expectedHeight$$) {
    var $databody$$4$$;
    $databody$$4$$ = this.$m_databody$;
    $expected$$1_expectedHeight$$ = null == $expected$$1_expectedHeight$$ ? this.$getElementHeight$($databody$$4$$) : $expected$$1_expectedHeight$$;
    return this.$getElementHeight$($databody$$4$$.firstChild) > $expected$$1_expectedHeight$$ ? !0 : !1;
  };
  $DvtDataGrid$$.prototype.$buildStatus$ = function $$DvtDataGrid$$$$$buildStatus$$() {
    var $root$$5$$ = document.createElement("div");
    $root$$5$$.id = this.$createSubId$("status");
    $root$$5$$.className = this.$getMappedStyle$("status");
    $root$$5$$.setAttribute("role", "status");
    return $root$$5$$;
  };
  $DvtDataGrid$$.prototype.$buildAccInfo$ = function $$DvtDataGrid$$$$$buildAccInfo$$() {
    var $root$$6$$ = document.createElement("div");
    $root$$6$$.id = this.$createSubId$("info");
    $root$$6$$.className = this.$getMappedStyle$("info");
    $root$$6$$.setAttribute("role", "status");
    return $root$$6$$;
  };
  $DvtDataGrid$$.prototype.$buildAccSummary$ = function $$DvtDataGrid$$$$$buildAccSummary$$() {
    var $root$$7$$ = document.createElement("div");
    $root$$7$$.id = this.$createSubId$("summary");
    $root$$7$$.className = this.$getMappedStyle$("info");
    return $root$$7$$;
  };
  $DvtDataGrid$$.prototype.$buildStateInfo$ = function $$DvtDataGrid$$$$$buildStateInfo$$() {
    var $root$$8$$ = document.createElement("div");
    $root$$8$$.id = this.$createSubId$("state");
    $root$$8$$.className = this.$getMappedStyle$("info");
    return $root$$8$$;
  };
  $DvtDataGrid$$.prototype.$buildContextInfo$ = function $$DvtDataGrid$$$$$buildContextInfo$$() {
    var $root$$9$$ = document.createElement("div");
    $root$$9$$.id = this.$createSubId$("context");
    $root$$9$$.className = this.$getMappedStyle$("info");
    return $root$$9$$;
  };
  $DvtDataGrid$$.prototype.$buildPlaceHolder$ = function $$DvtDataGrid$$$$$buildPlaceHolder$$() {
    var $root$$10$$ = document.createElement("div");
    $root$$10$$.id = this.$createSubId$("placeHolder");
    $root$$10$$.className = this.$getMappedStyle$("info");
    return $root$$10$$;
  };
  $DvtDataGrid$$.prototype.$populateAccInfo$ = function $$DvtDataGrid$$$$$populateAccInfo$$() {
    var $summary$$21$$, $summaryExpanded$$;
    $summary$$21$$ = this.$m_resources$.$getTranslatedText$("accessibleSummaryExact", {rownum:this.$m_endRow$ + 1, colnum:this.$m_endCol$ + 1});
    this.$m_dataSource$.$getExpandedKeys$ && ($summaryExpanded$$ = this.$m_resources$.$getTranslatedText$("accessibleSummaryExpanded", {num:this.$m_dataSource$.$getExpandedKeys$().length}), $summary$$21$$ = $summary$$21$$ + ". " + $summaryExpanded$$);
    this.$m_accSummary$.textContent = $summary$$21$$ + ". ";
  };
  $DvtDataGrid$$.prototype.$SetAccessibleContext$ = function $$DvtDataGrid$$$$$SetAccessibleContext$$($ancestors_context$$49$$) {
    var $label$$4$$, $col$$, $i$$142$$, $parent$$9$$, $cell_row$$3_text$$9$$;
    if (null != $ancestors_context$$49$$ && (null != $ancestors_context$$49$$.context && (this.$m_accessibleContext$ = $ancestors_context$$49$$.context), null != $ancestors_context$$49$$.state && (this.$m_stateInfo$.textContent = $ancestors_context$$49$$.state), null != $ancestors_context$$49$$.ancestors && this.$_isDatabodyCellActive$())) {
      $label$$4$$ = "";
      $ancestors_context$$49$$ = $ancestors_context$$49$$.ancestors;
      $col$$ = this.$m_active$.indexes.column;
      if (null != $col$$ && 0 <= $col$$) {
        for ($i$$142$$ = 0;$i$$142$$ < $ancestors_context$$49$$.length;$i$$142$$++) {
          0 < $i$$142$$ && ($label$$4$$ = $label$$4$$.concat(", ")), $parent$$9$$ = $ancestors_context$$49$$[$i$$142$$], $cell_row$$3_text$$9$$ = this.$_findRowByKey$($parent$$9$$.key), null != $cell_row$$3_text$$9$$ && ($cell_row$$3_text$$9$$ = $cell_row$$3_text$$9$$.childNodes[$col$$ - this.$m_startCol$], $cell_row$$3_text$$9$$ = $cell_row$$3_text$$9$$.textContent, $cell_row$$3_text$$9$$ = null != $cell_row$$3_text$$9$$ ? $cell_row$$3_text$$9$$.replace(/\n|<br\s*\/?>/gi, "").trim() : "", $label$$4$$ = 
          $label$$4$$.concat($parent$$9$$.label).concat(" ").concat($cell_row$$3_text$$9$$));
        }
      }
      this.$m_accessibleContext$ = $label$$4$$.concat(", ").concat(this.$m_accessibleContext$);
    }
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.SetAccessibleContext", $DvtDataGrid$$.prototype.$SetAccessibleContext$, void 0);
  $DvtDataGrid$$.prototype.$_updateStateInfo$ = function $$DvtDataGrid$$$$$_updateStateInfo$$($key$$55$$, $args$$18$$) {
    var $text$$10$$ = this.$m_resources$.$getTranslatedText$($key$$55$$, $args$$18$$);
    null != $text$$10$$ && (this.$m_stateInfo$.textContent = $text$$10$$);
  };
  $DvtDataGrid$$.prototype.$_updateContextInfo$ = function $$DvtDataGrid$$$$$_updateContextInfo$$($context$$50$$, $skip$$1$$) {
    var $row$$4_text$$11$$, $column$$4$$, $info$$3$$, $level$$9$$, $rowHeader$$3$$, $columnHeader$$;
    $row$$4_text$$11$$ = $context$$50$$.row;
    $column$$4$$ = $context$$50$$.column;
    $level$$9$$ = $context$$50$$.level;
    $rowHeader$$3$$ = $context$$50$$.rowHeader;
    $columnHeader$$ = $context$$50$$.columnHeader;
    $info$$3$$ = "";
    null != this.$m_accessibleContext$ || isNaN($row$$4_text$$11$$) || "row" == $skip$$1$$ || ($row$$4_text$$11$$ = this.$m_resources$.$getTranslatedText$("accessibleRowContext", {index:$row$$4_text$$11$$ + 1}), null != $row$$4_text$$11$$ && ($info$$3$$ = $row$$4_text$$11$$));
    isNaN($column$$4$$) || "column" == $skip$$1$$ || ($row$$4_text$$11$$ = this.$m_resources$.$getTranslatedText$("accessibleColumnContext", {index:$column$$4$$ + 1}), null != $row$$4_text$$11$$ && ($info$$3$$ = 0 === $info$$3$$.length ? $row$$4_text$$11$$ : $info$$3$$ + " " + $row$$4_text$$11$$));
    isNaN($rowHeader$$3$$) || "rowHeader" == $skip$$1$$ || ($row$$4_text$$11$$ = this.$m_resources$.$getTranslatedText$("accessibleRowHeaderContext", {index:$rowHeader$$3$$ + 1}), null != $row$$4_text$$11$$ && ($info$$3$$ = 0 === $info$$3$$.length ? $row$$4_text$$11$$ : $info$$3$$ + " " + $row$$4_text$$11$$));
    isNaN($columnHeader$$) || "columnHeader" == $skip$$1$$ || ($row$$4_text$$11$$ = this.$m_resources$.$getTranslatedText$("accessibleColumnHeaderContext", {index:$columnHeader$$ + 1}), null != $row$$4_text$$11$$ && ($info$$3$$ = 0 === $info$$3$$.length ? $row$$4_text$$11$$ : $info$$3$$ + " " + $row$$4_text$$11$$));
    isNaN($level$$9$$) || "level" == $skip$$1$$ || ($row$$4_text$$11$$ = this.$m_resources$.$getTranslatedText$("accessibleLevelContext", {level:$level$$9$$ + 1}), null != $row$$4_text$$11$$ && ($info$$3$$ = 0 === $info$$3$$.length ? $row$$4_text$$11$$ : $info$$3$$ + " " + $row$$4_text$$11$$));
    null != this.$m_accessibleContext$ && ($info$$3$$ = $info$$3$$ + ", " + this.$m_accessibleContext$, this.$m_accessibleContext$ = null);
    this.$m_contextInfo$.textContent = $info$$3$$;
  };
  $DvtDataGrid$$.prototype.$_isCountUnknown$ = function $$DvtDataGrid$$$$$_isCountUnknown$$($axis$$1_colPrecision_rowPrecision$$) {
    var $colCount_datasource_rowCount$$3$$;
    $colCount_datasource_rowCount$$3$$ = this.$m_dataSource$;
    return "row" === $axis$$1_colPrecision_rowPrecision$$ ? (void 0 === this.$m_isEstimateRowCount$ && ($axis$$1_colPrecision_rowPrecision$$ = $colCount_datasource_rowCount$$3$$.getCountPrecision("row"), $colCount_datasource_rowCount$$3$$ = $colCount_datasource_rowCount$$3$$.getCount("row"), this.$m_isEstimateRowCount$ = "estimate" === $axis$$1_colPrecision_rowPrecision$$ || 0 > $colCount_datasource_rowCount$$3$$ ? !0 : !1), this.$m_isEstimateRowCount$) : "column" === $axis$$1_colPrecision_rowPrecision$$ ? 
    (void 0 === this.$m_isEstimateColumnCount$ && ($axis$$1_colPrecision_rowPrecision$$ = $colCount_datasource_rowCount$$3$$.getCountPrecision("column"), $colCount_datasource_rowCount$$3$$ = $colCount_datasource_rowCount$$3$$.getCount("column"), this.$m_isEstimateColumnCount$ = "estimate" === $axis$$1_colPrecision_rowPrecision$$ || 0 > $colCount_datasource_rowCount$$3$$ ? !0 : !1), this.$m_isEstimateColumnCount$) : !1;
  };
  $DvtDataGrid$$.prototype.$_isCountUnknownOrHighwatermark$ = function $$DvtDataGrid$$$$$_isCountUnknownOrHighwatermark$$($axis$$2$$) {
    return this.$_isCountUnknown$($axis$$2$$) || this.$_isHighWatermarkScrolling$();
  };
  $DvtDataGrid$$.prototype.$buildHeaders$ = function $$DvtDataGrid$$$$$buildHeaders$$($axis$$3$$, $styleClass$$) {
    var $root$$11$$ = document.createElement("div");
    $root$$11$$.id = this.$createSubId$($axis$$3$$ + "Header");
    $root$$11$$.className = $styleClass$$ + " " + this.$getMappedStyle$("header");
    "column" === $axis$$3$$ ? this.$m_colHeader$ = $root$$11$$ : "row" === $axis$$3$$ && (this.$m_rowHeader$ = $root$$11$$);
    this.fetchHeaders($axis$$3$$, 0, $root$$11$$);
    return $root$$11$$;
  };
  $DvtDataGrid$$.prototype.fetchHeaders = function $$DvtDataGrid$$$$fetchHeaders$($axis$$4_headerRange$$, $start$$27$$, $header$$4$$, $fetchSize$$, $callbacks$$4_successCallback$$25$$) {
    this.$m_fetching$[$axis$$4_headerRange$$] || (this.$m_fetching$[$axis$$4_headerRange$$] = {start:$start$$27$$}, void 0 == $fetchSize$$ && ($fetchSize$$ = this.$getFetchSize$($axis$$4_headerRange$$)), $axis$$4_headerRange$$ = {axis:$axis$$4_headerRange$$, start:$start$$27$$, count:$fetchSize$$, header:$header$$4$$}, $callbacks$$4_successCallback$$25$$ = null != $callbacks$$4_successCallback$$25$$ && null != $callbacks$$4_successCallback$$25$$.success ? $callbacks$$4_successCallback$$25$$.success : 
    this.$handleHeadersFetchSuccess$, this.$showStatusText$(), this.$_signalTaskStart$(), this.$m_dataSource$.fetchHeaders($axis$$4_headerRange$$, {success:$callbacks$$4_successCallback$$25$$, error:this.$handleHeadersFetchError$}, {success:this, error:this}));
  };
  $DvtDataGrid$$.prototype.$isHeaderFetchResponseValid$ = function $$DvtDataGrid$$$$$isHeaderFetchResponseValid$$($headerRange$$1$$) {
    return $headerRange$$1$$.start == this.$m_fetching$[$headerRange$$1$$.axis].start;
  };
  $DvtDataGrid$$.prototype.$handleHeadersFetchSuccess$ = function $$DvtDataGrid$$$$$handleHeadersFetchSuccess$$($results$$, $headerRange$$2$$, $rowInsert$$) {
    var $axis$$6$$, $root$$12$$, $start$$28$$, $count$$31$$;
    this.$isHeaderFetchResponseValid$($headerRange$$2$$) && ($axis$$6$$ = $headerRange$$2$$.axis, this.$m_fetching$[$axis$$6$$] = !1, $root$$12$$ = $headerRange$$2$$.header, $start$$28$$ = $headerRange$$2$$.start, $count$$31$$ = this.$m_dataSource$.getCount($axis$$6$$), "column" === $axis$$6$$ ? (this.$buildColumnHeaders$($root$$12$$, $results$$, $start$$28$$, $count$$31$$), $results$$.getCount() < $headerRange$$2$$.count && (this.$m_stopColumnHeaderFetch$ = !0)) : "row" === $axis$$6$$ && (this.$buildRowHeaders$($root$$12$$, 
    $results$$, $start$$28$$, $count$$31$$, $rowInsert$$), $results$$.getCount() < $headerRange$$2$$.count && (this.$m_stopRowHeaderFetch$ = !0)), this.$isFetchComplete$() && (this.$hideStatusText$(), this.$_shouldInitialize$() && !$rowInsert$$ && this.$_handleInitialization$(!0)), this.$m_initialized$ && this.$_syncScroller$());
    this.$_signalTaskEnd$();
  };
  $DvtDataGrid$$.prototype.$handleHeadersFetchError$ = function $$DvtDataGrid$$$$$handleHeadersFetchError$$($error$$29$$, $headerRange$$3$$) {
    this.$m_fetching$[$headerRange$$3$$.axis] = !1;
    this.$_signalTaskEnd$();
  };
  $DvtDataGrid$$.prototype.$createHeaderContext$ = function $$DvtDataGrid$$$$$createHeaderContext$$($axis$$8_key$$56$$, $index$$99$$, $data$$77$$, $metadata$$1$$, $elem$$23$$, $level$$10$$, $extent$$, $depth$$4$$) {
    var $headerContext$$, $prop$$62$$;
    $headerContext$$ = {};
    $headerContext$$.axis = $axis$$8_key$$56$$;
    $headerContext$$.index = $index$$99$$;
    $headerContext$$.data = $data$$77$$;
    $headerContext$$.component = this;
    $headerContext$$.datasource = this.$m_dataSource$;
    $headerContext$$.level = $level$$10$$;
    $headerContext$$.depth = $depth$$4$$;
    $headerContext$$.extent = $extent$$;
    null != $elem$$23$$ && ($headerContext$$.parentElement = $elem$$23$$.firstChild);
    $axis$$8_key$$56$$ = $metadata$$1$$.key;
    null != $axis$$8_key$$56$$ && null != $elem$$23$$ && this.$_setKey$($elem$$23$$, $axis$$8_key$$56$$);
    for ($prop$$62$$ in $metadata$$1$$) {
      $metadata$$1$$.hasOwnProperty($prop$$62$$) && ($headerContext$$[$prop$$62$$] = $metadata$$1$$[$prop$$62$$]);
    }
    null != this.$m_createContextCallback$ && this.$m_createContextCallback$.call(this, $headerContext$$);
    return $headerContext$$;
  };
  $DvtDataGrid$$.prototype.$buildColumnHeaders$ = function $$DvtDataGrid$$$$$buildColumnHeaders$$($headerRoot$$, $headerSet$$, $start$$29$$, $totalCount$$) {
    var $scroller$$4$$, $renderer$$, $totalColumnWidth$$, $left$$5$$, $headerCount$$, $c$$36$$, $index$$100_returnVal$$1$$, $isAppend$$, $fragment$$, $className$$8$$;
    null == this.$m_columnHeaderLevelCount$ && (this.$m_columnHeaderLevelCount$ = $headerSet$$.getLevelCount());
    $headerCount$$ = $headerSet$$.getCount();
    if ($headerRoot$$.hasChildNodes()) {
      if (0 == $headerCount$$ && this.$_isCountUnknown$("column")) {
        this.$m_stopColumnHeaderFetch$ = !0;
        return;
      }
      $scroller$$4$$ = $headerRoot$$.firstChild;
      -1 == this.$m_endColHeader$ && "" == $headerRoot$$.className && ($headerRoot$$.className = this.$getMappedStyle$("colheader") + " " + this.$getMappedStyle$("header"), $headerRoot$$.style.height = "", $scroller$$4$$.style.height = "");
    } else {
      $scroller$$4$$ = document.createElement("div"), $scroller$$4$$.className = this.$getMappedStyle$("scroller") + (this.$m_utils$.$isTouchDevice$() ? " " + this.$getMappedStyle$("scroller-mobile") : ""), 0 == $headerCount$$ && ($headerRoot$$.className = "", this.$setElementHeight$($headerRoot$$, 0), this.$setElementHeight$($scroller$$4$$, 0), this.$m_stopColumnHeaderFetch$ = !0);
    }
    $renderer$$ = this.$m_options$.$getRenderer$("column");
    $totalColumnWidth$$ = 0;
    $left$$5$$ = ($isAppend$$ = $start$$29$$ > this.$m_endColHeader$) ? this.$m_endColHeaderPixel$ : this.$m_startColHeaderPixel$;
    $fragment$$ = document.createDocumentFragment();
    $c$$36$$ = 0;
    for ($className$$8$$ = this.$getMappedStyle$("headercell") + " " + this.$getMappedStyle$("colheadercell");0 < $headerCount$$ - $c$$36$$;) {
      $index$$100_returnVal$$1$$ = $isAppend$$ ? $start$$29$$ + $c$$36$$ : $start$$29$$ + ($headerCount$$ - 1 - $c$$36$$), $index$$100_returnVal$$1$$ = this.$buildLevelHeaders$($fragment$$, $index$$100_returnVal$$1$$, 0, $isAppend$$ ? $left$$5$$ + $totalColumnWidth$$ : $left$$5$$ - $totalColumnWidth$$, 0, $isAppend$$, !1, $renderer$$, $headerSet$$, "column", $className$$8$$, this.$m_columnHeaderLevelCount$), $c$$36$$ += $index$$100_returnVal$$1$$.count, $totalColumnWidth$$ += $index$$100_returnVal$$1$$.totalWidth, 
      null == this.$m_colHeaderHeight$ && (this.$m_colHeaderHeight$ = $index$$100_returnVal$$1$$.totalHeight, this.$setElementHeight$($headerRoot$$, this.$m_colHeaderHeight$));
    }
    $isAppend$$ ? $scroller$$4$$.appendChild($fragment$$) : $scroller$$4$$.insertBefore($fragment$$, $scroller$$4$$.firstChild);
    $isAppend$$ ? (this.$m_endColHeader$ = $start$$29$$ + $headerCount$$ - 1, this.$m_endColHeaderPixel$ += $totalColumnWidth$$) : (this.$m_startColHeader$ -= $headerCount$$, this.$m_startColHeaderPixel$ -= $totalColumnWidth$$);
    $headerRoot$$.hasChildNodes() || $headerRoot$$.appendChild($scroller$$4$$);
    !this.$_isCountUnknown$("column") && this.$_isHighWatermarkScrolling$() && this.$m_endColHeader$ + 1 >= $totalCount$$ && (this.$m_stopColumnHeaderFetch$ = !0);
  };
  $DvtDataGrid$$.prototype.$buildLevelHeaders$ = function $$DvtDataGrid$$$$$buildLevelHeaders$$($fragment$$1_returnObj$$, $index$$101_textWrapper$$, $content$$15_level$$11$$, $left$$6_totalLevelDimension$$, $top$$2_totalHeaderDimension$$, $isAppend$$1$$, $insert$$, $renderer$$1$$, $headerSet$$1$$, $axis$$9_sortIcon$$, $className$$9$$, $totalLevels$$) {
    var $getLevelDimension_i$$143$$, $getHeaderDimension_headerDimensionValue$$, $levelDimension$$, $headerDimension$$, $dimensionToAdjust$$, $dimensionToAdjustValue$$, $dimensionSecond$$, $dimensionSecondValue$$, $headerMetadata_start$$30$$, $end$$8_headerContext$$1$$, $getGrouping_header$$5$$, $extentInfo_headerDepth$$, $headerExtent$$, $headerContent_patchBefore$$, $headerData_patchAfter$$, $groupingContainer$$, $returnVal$$2$$, $levelDimensionValue$$, $totalHeaderDimensionValue$$, $headerCount$$1$$, 
    $d$$6_inlineStyle_nextIndex_totalLevelDimensionValue$$, $styleClass$$1$$;
    $headerCount$$1$$ = $totalHeaderDimensionValue$$ = $d$$6_inlineStyle_nextIndex_totalLevelDimensionValue$$ = $levelDimensionValue$$ = 0;
    "row" === $axis$$9_sortIcon$$ ? ($getLevelDimension_i$$143$$ = this.$_getRowHeaderLevelWidth$.bind(this), $getHeaderDimension_headerDimensionValue$$ = this.$getRowHeight$.bind(this), $getGrouping_header$$5$$ = this.$_getRowHeaderContainer$.bind(this), $levelDimension$$ = "width", $headerDimension$$ = "height", $dimensionToAdjust$$ = "top", $dimensionToAdjustValue$$ = $top$$2_totalHeaderDimension$$, $dimensionSecond$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left", $dimensionSecondValue$$ = 
    $left$$6_totalLevelDimension$$, $left$$6_totalLevelDimension$$ = "totalWidth", $top$$2_totalHeaderDimension$$ = "totalHeight", $headerMetadata_start$$30$$ = this.$m_startRowHeader$, $end$$8_headerContext$$1$$ = this.$m_endRowHeader$) : ($getLevelDimension_i$$143$$ = this.$_getColumnHeaderLevelHeight$.bind(this), $getHeaderDimension_headerDimensionValue$$ = this.$getColumnWidth$.bind(this), $getGrouping_header$$5$$ = this.$_getColumnHeaderContainer$.bind(this), $levelDimension$$ = "height", $headerDimension$$ = 
    "width", $dimensionToAdjust$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left", $dimensionToAdjustValue$$ = $left$$6_totalLevelDimension$$, $dimensionSecond$$ = "top", $dimensionSecondValue$$ = $top$$2_totalHeaderDimension$$, $left$$6_totalLevelDimension$$ = "totalHeight", $top$$2_totalHeaderDimension$$ = "totalWidth", $headerMetadata_start$$30$$ = this.$m_startColHeader$, $end$$8_headerContext$$1$$ = this.$m_endColHeader$);
    $extentInfo_headerDepth$$ = $headerSet$$1$$.getExtent($index$$101_textWrapper$$, $content$$15_level$$11$$);
    $headerExtent$$ = $extentInfo_headerDepth$$.extent;
    $headerContent_patchBefore$$ = $extentInfo_headerDepth$$.more.before;
    $headerData_patchAfter$$ = $extentInfo_headerDepth$$.more.after;
    $extentInfo_headerDepth$$ = $headerSet$$1$$.getDepth($index$$101_textWrapper$$, $content$$15_level$$11$$);
    if ($headerContent_patchBefore$$ && $index$$101_textWrapper$$ === $end$$8_headerContext$$1$$ + 1) {
      $groupingContainer$$ = $getGrouping_header$$5$$($index$$101_textWrapper$$ - 1, $content$$15_level$$11$$, 0);
      this.$_setAttribute$($groupingContainer$$, "extent", this.$_getAttribute$($groupingContainer$$, "extent") + $headerExtent$$);
      $getGrouping_header$$5$$ = $groupingContainer$$.firstChild;
      $levelDimensionValue$$ = this.$getElementDir$($getGrouping_header$$5$$, $levelDimension$$);
      for ($getLevelDimension_i$$143$$ = 0;$getLevelDimension_i$$143$$ < $headerExtent$$;) {
        $returnVal$$2$$ = "column" === $axis$$9_sortIcon$$ ? this.$buildLevelHeaders$($groupingContainer$$, $index$$101_textWrapper$$ + $getLevelDimension_i$$143$$, $content$$15_level$$11$$ + $extentInfo_headerDepth$$, $dimensionToAdjustValue$$, $dimensionSecondValue$$ + $levelDimensionValue$$, $isAppend$$1$$, $insert$$, $renderer$$1$$, $headerSet$$1$$, $axis$$9_sortIcon$$, $className$$9$$, $totalLevels$$) : this.$buildLevelHeaders$($groupingContainer$$, $index$$101_textWrapper$$ + $getLevelDimension_i$$143$$, 
        $content$$15_level$$11$$ + $extentInfo_headerDepth$$, $dimensionSecondValue$$ + $levelDimensionValue$$, $dimensionToAdjustValue$$, $isAppend$$1$$, $insert$$, $renderer$$1$$, $headerSet$$1$$, $axis$$9_sortIcon$$, $className$$9$$, $totalLevels$$), $dimensionToAdjustValue$$ += $returnVal$$2$$[$top$$2_totalHeaderDimension$$], $totalHeaderDimensionValue$$ += $returnVal$$2$$[$top$$2_totalHeaderDimension$$], $headerCount$$1$$ += $returnVal$$2$$.count, $getLevelDimension_i$$143$$ += $returnVal$$2$$.count
        ;
      }
      this.$setElementDir$($getGrouping_header$$5$$, this.$getElementDir$($getGrouping_header$$5$$, $headerDimension$$) + $totalHeaderDimensionValue$$, $headerDimension$$);
    } else {
      if ($headerData_patchAfter$$ && $index$$101_textWrapper$$ === $headerMetadata_start$$30$$ - 1) {
        $groupingContainer$$ = $getGrouping_header$$5$$($index$$101_textWrapper$$ + 1, $content$$15_level$$11$$, 0);
        this.$_setAttribute$($groupingContainer$$, "extent", this.$_getAttribute$($groupingContainer$$, "extent") + $headerExtent$$);
        this.$_setAttribute$($groupingContainer$$, "start", this.$_getAttribute$($groupingContainer$$, "start") - $headerExtent$$);
        $getGrouping_header$$5$$ = $groupingContainer$$.firstChild;
        $levelDimensionValue$$ = this.$getElementDir$($getGrouping_header$$5$$, $levelDimension$$);
        for ($getLevelDimension_i$$143$$ = 0;$getLevelDimension_i$$143$$ < $headerExtent$$;) {
          $returnVal$$2$$ = "column" === $axis$$9_sortIcon$$ ? this.$buildLevelHeaders$($groupingContainer$$, $index$$101_textWrapper$$ - $getLevelDimension_i$$143$$, $content$$15_level$$11$$ + $extentInfo_headerDepth$$, $dimensionToAdjustValue$$, $dimensionSecondValue$$ + $levelDimensionValue$$, $isAppend$$1$$, $insert$$, $renderer$$1$$, $headerSet$$1$$, $axis$$9_sortIcon$$, $className$$9$$, $totalLevels$$) : this.$buildLevelHeaders$($groupingContainer$$, $index$$101_textWrapper$$ - $getLevelDimension_i$$143$$, 
          $content$$15_level$$11$$ + $extentInfo_headerDepth$$, $dimensionSecondValue$$ + $levelDimensionValue$$, $dimensionToAdjustValue$$, $isAppend$$1$$, $insert$$, $renderer$$1$$, $headerSet$$1$$, $axis$$9_sortIcon$$, $className$$9$$, $totalLevels$$), $dimensionToAdjustValue$$ -= $returnVal$$2$$[$top$$2_totalHeaderDimension$$], $totalHeaderDimensionValue$$ += $returnVal$$2$$[$top$$2_totalHeaderDimension$$], $headerCount$$1$$ += $returnVal$$2$$.count, $getLevelDimension_i$$143$$ += $returnVal$$2$$.count
          ;
        }
        this.$setElementDir$($getGrouping_header$$5$$, this.$getElementDir$($getGrouping_header$$5$$, $headerDimension$$) + $totalHeaderDimensionValue$$, $headerDimension$$);
        this.$setElementDir$($getGrouping_header$$5$$, $dimensionToAdjustValue$$, $dimensionToAdjust$$);
      } else {
        $headerData_patchAfter$$ = $headerSet$$1$$.getData($index$$101_textWrapper$$, $content$$15_level$$11$$);
        $headerMetadata_start$$30$$ = $headerSet$$1$$.getMetadata($index$$101_textWrapper$$, $content$$15_level$$11$$);
        $headerContent_patchBefore$$ = document.createElement("div");
        $headerContent_patchBefore$$.className = this.$getMappedStyle$("headercellcontent");
        $getGrouping_header$$5$$ = document.createElement("div");
        $getGrouping_header$$5$$.appendChild($headerContent_patchBefore$$);
        $end$$8_headerContext$$1$$ = this.$createHeaderContext$($axis$$9_sortIcon$$, $index$$101_textWrapper$$, $headerData_patchAfter$$, $headerMetadata_start$$30$$, $getGrouping_header$$5$$, $content$$15_level$$11$$, $headerExtent$$, $extentInfo_headerDepth$$);
        $getGrouping_header$$5$$.id = this.$_createHeaderId$($axis$$9_sortIcon$$, $end$$8_headerContext$$1$$.key);
        $getGrouping_header$$5$$[this.$m_resources$.$getMappedAttribute$("context")] = $end$$8_headerContext$$1$$;
        $d$$6_inlineStyle_nextIndex_totalLevelDimensionValue$$ = this.$m_options$.$getInlineStyle$($axis$$9_sortIcon$$, $end$$8_headerContext$$1$$);
        $styleClass$$1$$ = this.$m_options$.$getStyleClass$($axis$$9_sortIcon$$, $end$$8_headerContext$$1$$);
        null != $d$$6_inlineStyle_nextIndex_totalLevelDimensionValue$$ && ($getGrouping_header$$5$$.style.cssText = $d$$6_inlineStyle_nextIndex_totalLevelDimensionValue$$);
        $getGrouping_header$$5$$.className = $className$$9$$;
        null != $styleClass$$1$$ && ($getGrouping_header$$5$$.className += " " + $styleClass$$1$$);
        for ($d$$6_inlineStyle_nextIndex_totalLevelDimensionValue$$ = 0;$d$$6_inlineStyle_nextIndex_totalLevelDimensionValue$$ < $extentInfo_headerDepth$$;$d$$6_inlineStyle_nextIndex_totalLevelDimensionValue$$++) {
          $levelDimensionValue$$ += $getLevelDimension_i$$143$$($content$$15_level$$11$$ + $d$$6_inlineStyle_nextIndex_totalLevelDimensionValue$$, $getGrouping_header$$5$$);
        }
        this.$setElementDir$($getGrouping_header$$5$$, $dimensionToAdjustValue$$, $dimensionToAdjust$$);
        this.$setElementDir$($getGrouping_header$$5$$, $dimensionSecondValue$$, $dimensionSecond$$);
        this.$setElementDir$($getGrouping_header$$5$$, $levelDimensionValue$$, $levelDimension$$);
        $getHeaderDimension_headerDimensionValue$$ = $getHeaderDimension_headerDimensionValue$$($getGrouping_header$$5$$, $end$$8_headerContext$$1$$.key);
        this.$_setAttribute$($getGrouping_header$$5$$, "depth", $extentInfo_headerDepth$$);
        $content$$15_level$$11$$ != $totalLevels$$ - 1 && ($groupingContainer$$ = document.createElement("div"), $groupingContainer$$.className = this.$getMappedStyle$("groupingcontainer"), $groupingContainer$$.appendChild($getGrouping_header$$5$$), this.$_setAttribute$($groupingContainer$$, "start", $isAppend$$1$$ ? $index$$101_textWrapper$$ : $index$$101_textWrapper$$ - $headerExtent$$ + 1), this.$_setAttribute$($groupingContainer$$, "extent", $headerExtent$$), this.$_setAttribute$($groupingContainer$$, 
        "level", $content$$15_level$$11$$));
        if ($content$$15_level$$11$$ + $extentInfo_headerDepth$$ == $totalLevels$$) {
          this.$setElementDir$($getGrouping_header$$5$$, $getHeaderDimension_headerDimensionValue$$, $headerDimension$$), $totalHeaderDimensionValue$$ += $getHeaderDimension_headerDimensionValue$$, $headerCount$$1$$++, $d$$6_inlineStyle_nextIndex_totalLevelDimensionValue$$ = $levelDimensionValue$$, $isAppend$$1$$ || $insert$$ || ($dimensionToAdjustValue$$ -= $getHeaderDimension_headerDimensionValue$$, this.$setElementDir$($getGrouping_header$$5$$, $dimensionToAdjustValue$$, $dimensionToAdjust$$))
          ;
        } else {
          for ($getLevelDimension_i$$143$$ = 0;$getLevelDimension_i$$143$$ < $headerExtent$$;$getLevelDimension_i$$143$$++) {
            $d$$6_inlineStyle_nextIndex_totalLevelDimensionValue$$ = $isAppend$$1$$ ? $index$$101_textWrapper$$ + $getLevelDimension_i$$143$$ : $index$$101_textWrapper$$ - $getLevelDimension_i$$143$$, $returnVal$$2$$ = "column" === $axis$$9_sortIcon$$ ? this.$buildLevelHeaders$($groupingContainer$$, $d$$6_inlineStyle_nextIndex_totalLevelDimensionValue$$, $content$$15_level$$11$$ + $extentInfo_headerDepth$$, $dimensionToAdjustValue$$, $dimensionSecondValue$$ + $levelDimensionValue$$, $isAppend$$1$$, 
            $insert$$, $renderer$$1$$, $headerSet$$1$$, $axis$$9_sortIcon$$, $className$$9$$, $totalLevels$$) : this.$buildLevelHeaders$($groupingContainer$$, $d$$6_inlineStyle_nextIndex_totalLevelDimensionValue$$, $content$$15_level$$11$$ + $extentInfo_headerDepth$$, $dimensionSecondValue$$ + $levelDimensionValue$$, $dimensionToAdjustValue$$, $isAppend$$1$$, $insert$$, $renderer$$1$$, $headerSet$$1$$, $axis$$9_sortIcon$$, $className$$9$$, $totalLevels$$), $getHeaderDimension_headerDimensionValue$$ = 
            $returnVal$$2$$[$top$$2_totalHeaderDimension$$], $dimensionToAdjustValue$$ = $isAppend$$1$$ ? $dimensionToAdjustValue$$ + $getHeaderDimension_headerDimensionValue$$ : $dimensionToAdjustValue$$ - $getHeaderDimension_headerDimensionValue$$, $totalHeaderDimensionValue$$ += $getHeaderDimension_headerDimensionValue$$, $headerCount$$1$$ += $returnVal$$2$$.count, $getLevelDimension_i$$143$$ += $returnVal$$2$$.count - 1;
          }
          $d$$6_inlineStyle_nextIndex_totalLevelDimensionValue$$ = $levelDimensionValue$$ + $returnVal$$2$$[$left$$6_totalLevelDimension$$];
          $isAppend$$1$$ || $insert$$ || this.$setElementDir$($getGrouping_header$$5$$, $dimensionToAdjustValue$$, $dimensionToAdjust$$);
          this.$setElementDir$($getGrouping_header$$5$$, $totalHeaderDimensionValue$$, $headerDimension$$);
        }
        "column" === $axis$$9_sortIcon$$ ? this.$_isLastColumn$($index$$101_textWrapper$$ + $headerExtent$$ - 1) && this.$getRowHeaderWidth$() + $dimensionToAdjustValue$$ + $getHeaderDimension_headerDimensionValue$$ >= this.getWidth() && ("left" === $dimensionToAdjust$$ ? $getGrouping_header$$5$$.style.borderRightStyle = "none" : $getGrouping_header$$5$$.style.borderLeftStyle = "none") : this.$_isLastRow$($index$$101_textWrapper$$ + $headerExtent$$ - 1) && this.$getColumnHeaderHeight$() + $dimensionToAdjustValue$$ + 
        $getHeaderDimension_headerDimensionValue$$ >= this.getHeight() && ($getGrouping_header$$5$$.style.borderBottomStyle = "none");
        this.$_isHeaderResizeEnabled$($axis$$9_sortIcon$$, $end$$8_headerContext$$1$$) && this.$_setAttribute$($getGrouping_header$$5$$, "resizable", "true");
        null != $groupingContainer$$ ? this.$m_root$.appendChild($groupingContainer$$) : this.$m_root$.appendChild($getGrouping_header$$5$$);
        null != $renderer$$1$$ ? ($content$$15_level$$11$$ = $renderer$$1$$.call(this, $end$$8_headerContext$$1$$), null != $content$$15_level$$11$$ && (null === $content$$15_level$$11$$.parentNode ? $headerContent_patchBefore$$.appendChild($content$$15_level$$11$$) : null == $content$$15_level$$11$$.parentNode && $content$$15_level$$11$$.toString && ($index$$101_textWrapper$$ = document.createElement("span"), $index$$101_textWrapper$$.className = this.$getMappedStyle$("headercelltext"), $index$$101_textWrapper$$.appendChild(document.createTextNode($content$$15_level$$11$$.toString())), 
        $headerContent_patchBefore$$.appendChild($index$$101_textWrapper$$))), this.$_disableAllFocusableElements$($getGrouping_header$$5$$)) : (null == $headerData_patchAfter$$ && ($headerData_patchAfter$$ = ""), $index$$101_textWrapper$$ = document.createElement("span"), $index$$101_textWrapper$$.className = this.$getMappedStyle$("headercelltext"), $index$$101_textWrapper$$.appendChild(document.createTextNode($headerData_patchAfter$$.toString())), $headerContent_patchBefore$$.appendChild($index$$101_textWrapper$$));
        "column" === $axis$$9_sortIcon$$ && this.$_isSortEnabled$($axis$$9_sortIcon$$, $end$$8_headerContext$$1$$) && (null != $headerMetadata_start$$30$$.sortDirection && null == this.$m_sortInfo$ && (this.$m_sortInfo$ = {}, this.$m_sortInfo$.key = $headerMetadata_start$$30$$.key, this.$m_sortInfo$.direction = $headerMetadata_start$$30$$.sortDirection, this.$m_sortInfo$.axis = $axis$$9_sortIcon$$), $axis$$9_sortIcon$$ = this.$_buildSortIcon$($end$$8_headerContext$$1$$), $getGrouping_header$$5$$.appendChild($axis$$9_sortIcon$$), 
        this.$_setAttribute$($getGrouping_header$$5$$, "sortable", "true"));
        $isAppend$$1$$ ? null != $groupingContainer$$ ? $fragment$$1_returnObj$$.appendChild($groupingContainer$$) : $fragment$$1_returnObj$$.appendChild($getGrouping_header$$5$$) : null != $groupingContainer$$ ? $fragment$$1_returnObj$$.firstChild ? this.$m_utils$.$containsCSSClassName$($fragment$$1_returnObj$$.firstChild, this.$getMappedStyle$("groupingcontainer")) ? $fragment$$1_returnObj$$.insertBefore($groupingContainer$$, $fragment$$1_returnObj$$.firstChild) : this.$m_utils$.$containsCSSClassName$($fragment$$1_returnObj$$.firstChild, 
        this.$getMappedStyle$("headercell")) && $fragment$$1_returnObj$$.insertBefore($groupingContainer$$, $fragment$$1_returnObj$$.firstChild.nextSibling) : $fragment$$1_returnObj$$.appendChild($groupingContainer$$) : this.$m_utils$.$containsCSSClassName$($fragment$$1_returnObj$$, this.$getMappedStyle$("groupingcontainer")) ? $fragment$$1_returnObj$$.insertBefore($getGrouping_header$$5$$, $fragment$$1_returnObj$$.firstChild.nextSibling) : $fragment$$1_returnObj$$.insertBefore($getGrouping_header$$5$$, 
        $fragment$$1_returnObj$$.firstChild);
      }
    }
    $fragment$$1_returnObj$$ = {};
    $fragment$$1_returnObj$$[$left$$6_totalLevelDimension$$] = $d$$6_inlineStyle_nextIndex_totalLevelDimensionValue$$;
    $fragment$$1_returnObj$$[$top$$2_totalHeaderDimension$$] = $totalHeaderDimensionValue$$;
    $fragment$$1_returnObj$$.count = $headerCount$$1$$;
    return $fragment$$1_returnObj$$;
  };
  $DvtDataGrid$$.prototype.$buildRowHeaders$ = function $$DvtDataGrid$$$$$buildRowHeaders$$($headerRoot$$1$$, $headerSet$$2_prev$$, $start$$31$$, $totalCount$$1$$, $rowInsert$$1$$, $animation$$) {
    var $headerCount$$2$$, $scroller$$5$$, $renderer$$2$$, $isAppend$$2$$, $top$$3$$, $totalRowHeight$$, $className$$10$$, $fragment$$2$$, $index$$102_returnVal$$3$$, $rowHeaderContent$$, $referenceRow$$, $c$$37$$;
    null == this.$m_rowHeaderLevelCount$ && (this.$m_rowHeaderLevelCount$ = $headerSet$$2_prev$$.getLevelCount());
    $headerCount$$2$$ = $headerSet$$2_prev$$.getCount();
    if (!$animation$$) {
      if ($headerRoot$$1$$.hasChildNodes()) {
        if (0 == $headerCount$$2$$ && this.$_isCountUnknown$("row")) {
          this.$m_stopRowHeaderFetch$ = !0;
          return;
        }
        $scroller$$5$$ = $headerRoot$$1$$.firstChild;
        -1 == this.$m_endRowHeader$ && "" == $headerRoot$$1$$.className && ($headerRoot$$1$$.className = this.$getMappedStyle$("rowheader") + " " + this.$getMappedStyle$("header"), $headerRoot$$1$$.style.width = "", $scroller$$5$$.style.width = "");
      } else {
        $scroller$$5$$ = document.createElement("div"), $scroller$$5$$.className = this.$getMappedStyle$("scroller") + (this.$m_utils$.$isTouchDevice$() ? " " + this.$getMappedStyle$("scroller-mobile") : ""), 0 == $headerCount$$2$$ && ($headerRoot$$1$$.className = "", this.$setElementWidth$($headerRoot$$1$$, 0), this.$setElementWidth$($scroller$$5$$, 0), this.$m_stopRowHeaderFetch$ = !0);
      }
    }
    $renderer$$2$$ = this.$m_options$.$getRenderer$("row");
    ($isAppend$$2$$ = $start$$31$$ > this.$m_endRowHeader$ ? !0 : !1) ? $top$$3$$ = this.$m_endRowHeaderPixel$ : $rowInsert$$1$$ ? ($rowHeaderContent$$ = $headerRoot$$1$$.firstChild, $referenceRow$$ = $rowHeaderContent$$.childNodes[$start$$31$$ - this.$m_startRowHeader$], $top$$3$$ = this.$getElementDir$($referenceRow$$, "top")) : $top$$3$$ = this.$m_startRowHeaderPixel$;
    -1 == $totalCount$$1$$ && ($totalCount$$1$$ = this.$m_endRowHeader$ + $headerCount$$2$$);
    $totalRowHeight$$ = 0;
    $fragment$$2$$ = document.createDocumentFragment();
    $c$$37$$ = 0;
    for ($className$$10$$ = this.$getMappedStyle$("row") + " " + this.$getMappedStyle$("headercell") + " " + this.$getMappedStyle$("rowheadercell");0 < $headerCount$$2$$ - $c$$37$$;) {
      $index$$102_returnVal$$3$$ = $isAppend$$2$$ ? $start$$31$$ + $c$$37$$ : $start$$31$$ + ($headerCount$$2$$ - 1 - $c$$37$$), $index$$102_returnVal$$3$$ = this.$buildLevelHeaders$($fragment$$2$$, $index$$102_returnVal$$3$$, 0, 0, $isAppend$$2$$ ? $top$$3$$ + $totalRowHeight$$ : $top$$3$$ - $totalRowHeight$$, $isAppend$$2$$, $rowInsert$$1$$, $renderer$$2$$, $headerSet$$2_prev$$, "row", $className$$10$$, this.$m_rowHeaderLevelCount$), $c$$37$$ += $index$$102_returnVal$$3$$.count, $totalRowHeight$$ += 
      $index$$102_returnVal$$3$$.totalHeight, null == this.$m_rowHeaderWidth$ && (this.$m_rowHeaderWidth$ = $index$$102_returnVal$$3$$.totalWidth, this.$setElementWidth$($headerRoot$$1$$, this.$m_rowHeaderWidth$));
    }
    if ($animation$$) {
      return $fragment$$2$$;
    }
    $isAppend$$2$$ && 0 != $headerCount$$2$$ ? ($scroller$$5$$.appendChild($fragment$$2$$), -1 != this.$m_endRowHeader$ && 0 != $headerCount$$2$$ && ($headerSet$$2_prev$$ = $scroller$$5$$.childNodes[this.$m_endRowHeader$ - this.$m_startRowHeader$], null != $headerSet$$2_prev$$ && ($headerSet$$2_prev$$.firstChild.style.borderBottomStyle = "")), this.$m_endRowHeader$ = $start$$31$$ + $headerCount$$2$$ - 1, this.$m_endRowHeaderPixel$ += $totalRowHeight$$) : $rowInsert$$1$$ ? ($rowHeaderContent$$.insertBefore($fragment$$2$$, 
    $referenceRow$$), $start$$31$$ < this.$m_startRowHeader$ && (this.$m_startRowHeader$ = $start$$31$$, this.$m_startRowHeaderPixel$ = Math.max(0, this.$m_startRowHeaderPixel$ - $totalRowHeight$$)), this.$m_endRowHeader$ += $headerCount$$2$$, this.$m_endRowHeaderPixel$ = Math.max(0, this.$m_endRowHeaderPixel$ + $totalRowHeight$$), this.$pushRowHeadersDown$($referenceRow$$, $totalRowHeight$$)) : ($scroller$$5$$.insertBefore($fragment$$2$$, $scroller$$5$$.firstChild), this.$m_startRowHeader$ = Math.max(0, 
    this.$m_startRowHeader$ - $headerCount$$2$$), this.$m_startRowHeaderPixel$ = Math.max(0, this.$m_startRowHeaderPixel$ - $totalRowHeight$$));
    $rowInsert$$1$$ || $headerRoot$$1$$.appendChild($scroller$$5$$);
    !this.$_isCountUnknown$("row") && this.$_isHighWatermarkScrolling$() && this.$m_endRowHeader$ + 1 >= $totalCount$$1$$ && (this.$m_stopRowHeaderFetch$ = !0);
  };
  $DvtDataGrid$$.prototype.$_getRowHeaderContainer$ = function $$DvtDataGrid$$$$$_getRowHeaderContainer$$($index$$103$$, $level$$12$$, $currentLevel$$1$$, $rowHeaders$$) {
    var $headerIndex$$, $headerExtent$$1$$, $headerDepth$$1$$, $i$$144$$;
    null == $rowHeaders$$ ? ($rowHeaders$$ = this.$m_rowHeader$.firstChild.childNodes, $i$$144$$ = 0) : $i$$144$$ = 1;
    if ($currentLevel$$1$$ === this.$m_rowHeaderLevelCount$ - 1) {
      return $rowHeaders$$[0].parentNode;
    }
    for (;$i$$144$$ < $rowHeaders$$.length;) {
      $headerIndex$$ = this.$_getAttribute$($rowHeaders$$[$i$$144$$], "start");
      $headerExtent$$1$$ = this.$_getAttribute$($rowHeaders$$[$i$$144$$], "extent");
      $headerDepth$$1$$ = this.$_getAttribute$($rowHeaders$$[$i$$144$$].firstChild, "depth");
      if ($index$$103$$ >= $headerIndex$$ && $index$$103$$ < $headerIndex$$ + $headerExtent$$1$$) {
        return $level$$12$$ < $currentLevel$$1$$ + $headerDepth$$1$$ ? $rowHeaders$$[$i$$144$$] : this.$_getRowHeaderContainer$($index$$103$$, $level$$12$$, $currentLevel$$1$$ + $headerDepth$$1$$, $rowHeaders$$[$i$$144$$].childNodes);
      }
      $i$$144$$++;
    }
    return null;
  };
  $DvtDataGrid$$.prototype.$_getRowHeaderByIndex$ = function $$DvtDataGrid$$$$$_getRowHeaderByIndex$$($index$$104$$, $level$$13$$) {
    var $relativeIndex_rowHeaderContainer$$, $rowHeaderContent$$1_start$$32$$;
    if (0 > $level$$13$$) {
      return null;
    }
    if (1 === this.$m_rowHeaderLevelCount$) {
      return $rowHeaderContent$$1_start$$32$$ = this.$m_rowHeader$.firstChild.childNodes, $relativeIndex_rowHeaderContainer$$ = $index$$104$$ - this.$m_startRowHeader$, $rowHeaderContent$$1_start$$32$$[$relativeIndex_rowHeaderContainer$$];
    }
    $relativeIndex_rowHeaderContainer$$ = this.$_getRowHeaderContainer$($index$$104$$, $level$$13$$, 0);
    if (null == $relativeIndex_rowHeaderContainer$$) {
      return null;
    }
    if ($level$$13$$ <= this.$_getAttribute$($relativeIndex_rowHeaderContainer$$, "level") + this.$_getAttribute$($relativeIndex_rowHeaderContainer$$.firstChild, "depth") - 1) {
      return $relativeIndex_rowHeaderContainer$$.firstChild;
    }
    $rowHeaderContent$$1_start$$32$$ = this.$_getAttribute$($relativeIndex_rowHeaderContainer$$, "start");
    return $relativeIndex_rowHeaderContainer$$.childNodes[$index$$104$$ - $rowHeaderContent$$1_start$$32$$ + 1];
  };
  $DvtDataGrid$$.prototype.$_getRowHeaderLevelWidth$ = function $$DvtDataGrid$$$$$_getRowHeaderLevelWidth$$($level$$14$$, $element$$68$$) {
    var $width$$18$$;
    null == this.$m_rowHeaderLevelWidths$ && (this.$m_rowHeaderLevelWidths$ = []);
    $width$$18$$ = this.$m_rowHeaderLevelWidths$[$level$$14$$];
    if (null != $width$$18$$) {
      return $width$$18$$;
    }
    $width$$18$$ = this.$getElementWidth$($element$$68$$);
    return this.$m_rowHeaderLevelWidths$[$level$$14$$] = $width$$18$$;
  };
  $DvtDataGrid$$.prototype.$_getColumnHeaderContainer$ = function $$DvtDataGrid$$$$$_getColumnHeaderContainer$$($index$$105$$, $level$$15$$, $currentLevel$$2$$, $columnHeaders$$) {
    var $headerIndex$$1$$, $headerExtent$$2$$, $headerDepth$$2$$, $i$$145$$;
    null == $columnHeaders$$ ? ($columnHeaders$$ = this.$m_colHeader$.firstChild.childNodes, $i$$145$$ = 0) : $i$$145$$ = 1;
    if ($currentLevel$$2$$ === this.$m_columnHeaderLevelCount$ - 1) {
      return $columnHeaders$$[0].parentNode;
    }
    for (;$i$$145$$ < $columnHeaders$$.length;) {
      $headerIndex$$1$$ = this.$_getAttribute$($columnHeaders$$[$i$$145$$], "start");
      $headerExtent$$2$$ = this.$_getAttribute$($columnHeaders$$[$i$$145$$], "extent");
      $headerDepth$$2$$ = this.$_getAttribute$($columnHeaders$$[$i$$145$$].firstChild, "depth");
      if ($index$$105$$ >= $headerIndex$$1$$ && $index$$105$$ < $headerIndex$$1$$ + $headerExtent$$2$$) {
        return $level$$15$$ < $currentLevel$$2$$ + $headerDepth$$2$$ ? $columnHeaders$$[$i$$145$$] : this.$_getColumnHeaderContainer$($index$$105$$, $level$$15$$, $currentLevel$$2$$ + $headerDepth$$2$$, $columnHeaders$$[$i$$145$$].childNodes);
      }
      $i$$145$$++;
    }
    return null;
  };
  $DvtDataGrid$$.prototype.$_getColumnHeaderByIndex$ = function $$DvtDataGrid$$$$$_getColumnHeaderByIndex$$($index$$106$$, $level$$16$$) {
    var $columnHeaderContainer_relativeIndex$$1$$, $columnHeaderContent_start$$33$$;
    if (0 > $level$$16$$) {
      return null;
    }
    if (1 === this.$m_columnHeaderLevelCount$) {
      return $columnHeaderContent_start$$33$$ = this.$m_colHeader$.firstChild.childNodes, $columnHeaderContainer_relativeIndex$$1$$ = $index$$106$$ - this.$m_startColHeader$, $columnHeaderContent_start$$33$$[$columnHeaderContainer_relativeIndex$$1$$];
    }
    $columnHeaderContainer_relativeIndex$$1$$ = this.$_getColumnHeaderContainer$($index$$106$$, $level$$16$$, 0);
    if (null == $columnHeaderContainer_relativeIndex$$1$$) {
      return null;
    }
    if ($level$$16$$ <= this.$_getAttribute$($columnHeaderContainer_relativeIndex$$1$$, "level") + this.$_getAttribute$($columnHeaderContainer_relativeIndex$$1$$.firstChild, "depth") - 1) {
      return $columnHeaderContainer_relativeIndex$$1$$.firstChild;
    }
    $columnHeaderContent_start$$33$$ = this.$_getAttribute$($columnHeaderContainer_relativeIndex$$1$$, "start");
    return $columnHeaderContainer_relativeIndex$$1$$.childNodes[$index$$106$$ - $columnHeaderContent_start$$33$$ + 1];
  };
  $DvtDataGrid$$.prototype.$_getColumnHeaderLevelHeight$ = function $$DvtDataGrid$$$$$_getColumnHeaderLevelHeight$$($level$$17$$, $element$$69$$) {
    var $height$$18$$;
    null == this.$m_columnHeaderLevelHeights$ && (this.$m_columnHeaderLevelHeights$ = []);
    $height$$18$$ = this.$m_columnHeaderLevelHeights$[$level$$17$$];
    if (null != $height$$18$$) {
      return $height$$18$$;
    }
    $height$$18$$ = this.$getElementHeight$($element$$69$$);
    return this.$m_columnHeaderLevelHeights$[$level$$17$$] = $height$$18$$;
  };
  $DvtDataGrid$$.prototype.$_getAttribute$ = function $$DvtDataGrid$$$$$_getAttribute$$($element$$70$$, $attributeKey$$) {
    var $value$$180$$ = $element$$70$$.getAttribute(this.$m_resources$.$getMappedAttribute$($attributeKey$$));
    return parseInt($value$$180$$, 10);
  };
  $DvtDataGrid$$.prototype.$_setAttribute$ = function $$DvtDataGrid$$$$$_setAttribute$$($element$$71$$, $attributeKey$$1$$, $value$$181$$) {
    $element$$71$$.setAttribute(this.$m_resources$.$getMappedAttribute$($attributeKey$$1$$), $value$$181$$);
  };
  $DvtDataGrid$$.prototype.$buildScroller$ = function $$DvtDataGrid$$$$$buildScroller$$() {
    var $root$$13$$ = document.createElement("div");
    $root$$13$$.id = this.$createSubId$("scroller");
    $root$$13$$.className = this.$getMappedStyle$("scrollers");
    $root$$13$$.tabIndex = "-1";
    $root$$13$$.addEventListener ? $root$$13$$.addEventListener("scroll", this.$handleScroll$.bind(this), !1) : $root$$13$$.attachEvent("onscroll", this.$handleScroll$.bind(this));
    return this.$m_scroller$ = $root$$13$$;
  };
  $DvtDataGrid$$.prototype.$buildDatabody$ = function $$DvtDataGrid$$$$$buildDatabody$$($scroller$$6$$) {
    var $root$$14$$ = document.createElement("div");
    $root$$14$$.id = this.$createSubId$("databody");
    $root$$14$$.className = this.$getMappedStyle$("databody");
    this.$m_databody$ = $root$$14$$;
    this.fetchCells($root$$14$$, $scroller$$6$$, 0, 0);
    return $root$$14$$;
  };
  $DvtDataGrid$$.prototype.fetchCells = function $$DvtDataGrid$$$$fetchCells$($columnRange_databody$$5$$, $scroller$$7$$, $rowRange_rowStart$$, $colStart$$, $rowCount$$4$$, $colCount$$1$$, $callbacks$$5_successCallback$$26$$) {
    this.$m_fetching$.cells || (this.$m_fetching$.cells = {row:$rowRange_rowStart$$, column:$colStart$$}, null == $rowCount$$4$$ && ($rowCount$$4$$ = this.$getFetchSize$("row")), null == $colCount$$1$$ && ($colCount$$1$$ = this.$getFetchSize$("column")), $rowRange_rowStart$$ = {axis:"row", start:$rowRange_rowStart$$, count:$rowCount$$4$$}, $columnRange_databody$$5$$ = {axis:"column", start:$colStart$$, count:$colCount$$1$$, databody:$columnRange_databody$$5$$, scroller:$scroller$$7$$}, $callbacks$$5_successCallback$$26$$ = 
    null != $callbacks$$5_successCallback$$26$$ && null != $callbacks$$5_successCallback$$26$$.success ? $callbacks$$5_successCallback$$26$$.success : this.$handleCellsFetchSuccess$, this.$showStatusText$(), this.$_signalTaskStart$(), this.$m_dataSource$.fetchCells([$rowRange_rowStart$$, $columnRange_databody$$5$$], {success:$callbacks$$5_successCallback$$26$$, error:this.$handleCellsFetchError$}, {success:this, error:this}));
  };
  $DvtDataGrid$$.prototype.$isCellFetchResponseValid$ = function $$DvtDataGrid$$$$$isCellFetchResponseValid$$($cellRange_responseColumnStart$$) {
    var $responseRowStart$$, $requestCellRanges_requestColumnStart$$, $requestRowStart$$;
    $responseRowStart$$ = $cellRange_responseColumnStart$$[0].start;
    $cellRange_responseColumnStart$$ = $cellRange_responseColumnStart$$[1].start;
    $requestCellRanges_requestColumnStart$$ = this.$m_fetching$.cells;
    $requestRowStart$$ = $requestCellRanges_requestColumnStart$$.row;
    $requestCellRanges_requestColumnStart$$ = $requestCellRanges_requestColumnStart$$.column;
    return $requestRowStart$$ == $responseRowStart$$ && $requestCellRanges_requestColumnStart$$ == $cellRange_responseColumnStart$$;
  };
  $DvtDataGrid$$.prototype.$isLongScroll$ = function $$DvtDataGrid$$$$$isLongScroll$$() {
    return this.$m_startRowPixel$ == this.$m_endRowPixel$ && this.$m_startColPixel$ == this.$m_endColPixel$;
  };
  $DvtDataGrid$$.prototype.$isCellFetchResponseInViewport$ = function $$DvtDataGrid$$$$$isCellFetchResponseInViewport$$($cellSet$$, $cellRange$$1$$) {
    var $rowStart$$1_rowStartPixel$$, $rowEnd_rowEndPixel$$, $columnEndPixel_columnStart$$, $columnStartPixel$$, $viewportTop$$, $viewportBottom$$, $viewportLeft$$, $viewportRight$$, $rowCount$$5$$, $columnCount$$;
    if (isNaN(this.$m_avgRowHeight$) || isNaN(this.$m_avgColWidth$)) {
      return!0;
    }
    $rowStart$$1_rowStartPixel$$ = $cellRange$$1$$[0].start;
    $rowCount$$5$$ = $cellSet$$.getCount("row");
    $rowEnd_rowEndPixel$$ = $rowStart$$1_rowStartPixel$$ + $rowCount$$5$$;
    $columnEndPixel_columnStart$$ = $cellRange$$1$$[1].start;
    $columnCount$$ = $cellSet$$.getCount("column");
    $rowStart$$1_rowStartPixel$$ *= this.$m_avgRowHeight$;
    $rowEnd_rowEndPixel$$ *= this.$m_avgRowHeight$;
    $columnStartPixel$$ = this.$m_avgColWidth$ * $columnEndPixel_columnStart$$;
    $columnEndPixel_columnStart$$ = this.$m_avgColWidth$ * ($columnEndPixel_columnStart$$ + $columnCount$$);
    $viewportTop$$ = this.$m_currentScrollTop$;
    $viewportBottom$$ = this.$m_currentScrollTop$ + this.$getElementHeight$(this.$m_databody$);
    $viewportLeft$$ = this.$m_currentScrollLeft$;
    $viewportRight$$ = this.$m_currentScrollLeft$ + this.$getElementWidth$(this.$m_databody$);
    !this.$_isCountUnknown$("row") && this.$m_dataSource$.getCount("row") == $rowCount$$5$$ && $rowEnd_rowEndPixel$$ < $viewportBottom$$ && ($rowEnd_rowEndPixel$$ = $viewportBottom$$);
    !this.$_isCountUnknown$("column") && this.$m_dataSource$.getCount("column") == $columnCount$$ && $columnEndPixel_columnStart$$ < $viewportRight$$ && ($columnEndPixel_columnStart$$ = $viewportRight$$);
    return $viewportTop$$ >= $rowStart$$1_rowStartPixel$$ && $viewportBottom$$ <= $rowEnd_rowEndPixel$$ && $viewportLeft$$ >= $columnStartPixel$$ && $viewportRight$$ <= $columnEndPixel_columnStart$$;
  };
  $DvtDataGrid$$.prototype.$handleCellsFetchSuccess$ = function $$DvtDataGrid$$$$$handleCellsFetchSuccess$$($cellSet$$1_totalRowHeight$$1$$, $cellRange$$2_columnStart$$1$$, $i$$146_rowInsert$$2_rows$$1_totalColumnWidth$$1$$) {
    var $totalRowCount$$, $totalColumnCount$$, $columnCount$$1_rowRange$$3$$, $rowStart$$2$$, $rowCount$$6$$, $isAppend$$3_rowRangeNeedsUpdate$$, $columnRange$$3_inner$$, $columnRangeNeedsUpdate$$, $databody$$6$$, $addResult_avgHeight_top$$4$$, $prev$$1_referenceRow$$1$$, $databodyContent_scroller$$8$$, $fragment$$3$$, $avgWidth$$1$$;
    $totalRowCount$$ = this.$m_dataSource$.getCount("row");
    $totalColumnCount$$ = this.$m_dataSource$.getCount("column");
    if (void 0 === $i$$146_rowInsert$$2_rows$$1_totalColumnWidth$$1$$) {
      $i$$146_rowInsert$$2_rows$$1_totalColumnWidth$$1$$ = !1;
      if (!this.$isCellFetchResponseValid$($cellRange$$2_columnStart$$1$$)) {
        this.$_signalTaskEnd$();
        return;
      }
      if (this.$isLongScroll$() && !this.$isCellFetchResponseInViewport$($cellSet$$1_totalRowHeight$$1$$, $cellRange$$2_columnStart$$1$$)) {
        this.$m_fetching$.cells = !1;
        this.$m_captureScrolling$ || this.$handleLongScroll$(this.$m_currentScrollLeft$, this.$m_currentScrollTop$);
        this.$_signalTaskEnd$();
        return;
      }
    }
    this.$getDefaultRowHeight$();
    $columnCount$$1_rowRange$$3$$ = $cellRange$$2_columnStart$$1$$[0];
    $rowStart$$2$$ = $columnCount$$1_rowRange$$3$$.start;
    $rowCount$$6$$ = $cellSet$$1_totalRowHeight$$1$$.getCount("row");
    $isAppend$$3_rowRangeNeedsUpdate$$ = 0 < $rowCount$$6$$ && ($rowStart$$2$$ > this.$m_endRow$ || $rowStart$$2$$ + $rowCount$$6$$ <= this.$m_startRow$);
    if (0 == $rowCount$$6$$ && this.$_isCountUnknown$("row") && 0 < $columnCount$$1_rowRange$$3$$.count || $isAppend$$3_rowRangeNeedsUpdate$$ && this.$_isHighWatermarkScrolling$() && !this.$_isCountUnknown$("row") && this.$m_endRow$ + $rowCount$$6$$ + 1 >= $totalRowCount$$ || $rowCount$$6$$ < $columnCount$$1_rowRange$$3$$.count) {
      this.$m_stopRowFetch$ = !0;
    }
    $columnRange$$3_inner$$ = $cellRange$$2_columnStart$$1$$[1];
    $cellRange$$2_columnStart$$1$$ = $columnRange$$3_inner$$.start;
    $columnCount$$1_rowRange$$3$$ = $cellSet$$1_totalRowHeight$$1$$.getCount("column");
    $columnRangeNeedsUpdate$$ = 0 < $columnCount$$1_rowRange$$3$$ && ($cellRange$$2_columnStart$$1$$ > this.$m_endCol$ || $cellRange$$2_columnStart$$1$$ + $columnCount$$1_rowRange$$3$$ == this.$m_startCol$);
    if (0 == $columnCount$$1_rowRange$$3$$ && this.$_isCountUnknown$("column") && 0 < $columnRange$$3_inner$$.count || $columnRangeNeedsUpdate$$ && this.$_isHighWatermarkScrolling$() && !this.$_isCountUnknown$("column") && this.$m_endCol$ + $columnCount$$1_rowRange$$3$$ + 1 >= $totalColumnCount$$ || $columnCount$$1_rowRange$$3$$ < $columnRange$$3_inner$$.count) {
      this.$m_stopColumnFetch$ = !0;
    }
    $databody$$6$$ = this.$m_databody$;
    null == $databody$$6$$ && ($databody$$6$$ = $columnRange$$3_inner$$.databody);
    $databodyContent_scroller$$8$$ = this.$m_scroller$;
    null == $databodyContent_scroller$$8$$ && ($databodyContent_scroller$$8$$ = $columnRange$$3_inner$$.scroller);
    $databodyContent_scroller$$8$$.hasChildNodes() ? $columnRange$$3_inner$$ = $databodyContent_scroller$$8$$.firstChild : ($columnRange$$3_inner$$ = document.createElement("div"), $databodyContent_scroller$$8$$.appendChild($columnRange$$3_inner$$));
    $databody$$6$$.hasChildNodes() ? $databodyContent_scroller$$8$$ = $databody$$6$$.firstChild : ($databodyContent_scroller$$8$$ = document.createElement("div"), $databodyContent_scroller$$8$$.className = this.$getMappedStyle$("scroller") + (this.$m_utils$.$isTouchDevice$() ? " " + this.$getMappedStyle$("scroller-mobile") : ""));
    if ($isAppend$$3_rowRangeNeedsUpdate$$ || $i$$146_rowInsert$$2_rows$$1_totalColumnWidth$$1$$) {
      if (($isAppend$$3_rowRangeNeedsUpdate$$ = !$i$$146_rowInsert$$2_rows$$1_totalColumnWidth$$1$$ && $rowStart$$2$$ >= this.$m_startRow$ ? !0 : !1) ? ($prev$$1_referenceRow$$1$$ = $databodyContent_scroller$$8$$.childNodes[$rowStart$$2$$ - this.$m_startRow$], $addResult_avgHeight_top$$4$$ = this.$m_endRowPixel$) : $i$$146_rowInsert$$2_rows$$1_totalColumnWidth$$1$$ ? ($prev$$1_referenceRow$$1$$ = $databodyContent_scroller$$8$$.childNodes[$rowStart$$2$$ - this.$m_startRow$], $addResult_avgHeight_top$$4$$ = 
      this.$getElementDir$($prev$$1_referenceRow$$1$$, "top")) : $addResult_avgHeight_top$$4$$ = this.$m_startRowPixel$, $fragment$$3$$ = document.createDocumentFragment(), $addResult_avgHeight_top$$4$$ = this.$_addRows$($fragment$$3$$, $isAppend$$3_rowRangeNeedsUpdate$$ || $i$$146_rowInsert$$2_rows$$1_totalColumnWidth$$1$$, $addResult_avgHeight_top$$4$$, $rowStart$$2$$, $rowCount$$6$$, $cellRange$$2_columnStart$$1$$, $columnRangeNeedsUpdate$$, $cellSet$$1_totalRowHeight$$1$$), $cellSet$$1_totalRowHeight$$1$$ = 
      $addResult_avgHeight_top$$4$$.totalRowHeight, $avgWidth$$1$$ = $addResult_avgHeight_top$$4$$.avgWidth, $addResult_avgHeight_top$$4$$ = $cellSet$$1_totalRowHeight$$1$$ / $rowCount$$6$$, $isAppend$$3_rowRangeNeedsUpdate$$) {
        $databodyContent_scroller$$8$$.appendChild($fragment$$3$$);
        if (-1 != this.$m_endRow$ && 0 != $rowCount$$6$$ && ($prev$$1_referenceRow$$1$$ = $databodyContent_scroller$$8$$.childNodes[this.$m_endRow$ - this.$m_startRow$], null != $prev$$1_referenceRow$$1$$)) {
          for ($prev$$1_referenceRow$$1$$ = $prev$$1_referenceRow$$1$$.childNodes, $i$$146_rowInsert$$2_rows$$1_totalColumnWidth$$1$$ = 0;$i$$146_rowInsert$$2_rows$$1_totalColumnWidth$$1$$ < $prev$$1_referenceRow$$1$$.length;$i$$146_rowInsert$$2_rows$$1_totalColumnWidth$$1$$ += 1) {
            $prev$$1_referenceRow$$1$$[$i$$146_rowInsert$$2_rows$$1_totalColumnWidth$$1$$].style.borderBottomStyle = "";
          }
        }
        this.$m_endRow$ = $rowStart$$2$$ + $rowCount$$6$$ - 1;
        this.$m_endRowPixel$ += $cellSet$$1_totalRowHeight$$1$$;
        $databody$$6$$.hasChildNodes() || $databody$$6$$.appendChild($databodyContent_scroller$$8$$);
      } else {
        $i$$146_rowInsert$$2_rows$$1_totalColumnWidth$$1$$ ? ($databodyContent_scroller$$8$$.insertBefore($fragment$$3$$, $prev$$1_referenceRow$$1$$), $rowStart$$2$$ < this.$m_startRow$ && (this.$m_startRow$ = $rowStart$$2$$, this.$m_startRowPixel$ = Math.max(0, this.$m_startRowPixel$ - $cellSet$$1_totalRowHeight$$1$$)), this.$m_endRow$ += $rowCount$$6$$, this.$m_endRowPixel$ += $cellSet$$1_totalRowHeight$$1$$, this.$pushRowsDown$($prev$$1_referenceRow$$1$$, $cellSet$$1_totalRowHeight$$1$$)) : ($databodyContent_scroller$$8$$.insertBefore($fragment$$3$$, 
        $databodyContent_scroller$$8$$.firstChild), this.$m_startRow$ -= $rowCount$$6$$, this.$m_startRowPixel$ = Math.max(0, this.$m_startRowPixel$ - $cellSet$$1_totalRowHeight$$1$$));
      }
    } else {
      $columnRangeNeedsUpdate$$ && ($i$$146_rowInsert$$2_rows$$1_totalColumnWidth$$1$$ = $databodyContent_scroller$$8$$.childNodes, $rowCount$$6$$ == $i$$146_rowInsert$$2_rows$$1_totalColumnWidth$$1$$.length && ($avgWidth$$1$$ = this.$_addColumns$($i$$146_rowInsert$$2_rows$$1_totalColumnWidth$$1$$, $rowStart$$2$$, $rowCount$$6$$, $cellRange$$2_columnStart$$1$$, $cellSet$$1_totalRowHeight$$1$$)));
    }
    $i$$146_rowInsert$$2_rows$$1_totalColumnWidth$$1$$ = -1 == $totalColumnCount$$ || this.$_isHighWatermarkScrolling$() ? this.$m_endColPixel$ : $totalColumnCount$$ * $avgWidth$$1$$;
    void 0 == $avgWidth$$1$$ || 0 != this.$m_avgColWidth$ && void 0 != this.$m_avgColWidth$ ? (-1 == $totalColumnCount$$ || this.$_isHighWatermarkScrolling$()) && $i$$146_rowInsert$$2_rows$$1_totalColumnWidth$$1$$ > this.$getElementWidth$($databodyContent_scroller$$8$$) && (this.$setElementWidth$($databodyContent_scroller$$8$$, $i$$146_rowInsert$$2_rows$$1_totalColumnWidth$$1$$), this.$setElementWidth$($columnRange$$3_inner$$, $i$$146_rowInsert$$2_rows$$1_totalColumnWidth$$1$$)) : (this.$m_avgColWidth$ = 
    $avgWidth$$1$$, this.$setElementWidth$($databodyContent_scroller$$8$$, $i$$146_rowInsert$$2_rows$$1_totalColumnWidth$$1$$), this.$setElementWidth$($columnRange$$3_inner$$, $i$$146_rowInsert$$2_rows$$1_totalColumnWidth$$1$$));
    $cellSet$$1_totalRowHeight$$1$$ = -1 == $totalRowCount$$ || this.$_isHighWatermarkScrolling$() ? this.$m_endRowPixel$ : $totalRowCount$$ * $addResult_avgHeight_top$$4$$;
    if (void 0 != $addResult_avgHeight_top$$4$$ && (0 == this.$m_avgRowHeight$ || void 0 == this.$m_avgRowHeight$)) {
      this.$m_avgRowHeight$ = $addResult_avgHeight_top$$4$$, this.$setElementHeight$($databodyContent_scroller$$8$$, $cellSet$$1_totalRowHeight$$1$$), this.$setElementHeight$($columnRange$$3_inner$$, $cellSet$$1_totalRowHeight$$1$$);
    } else {
      if ((-1 == $totalRowCount$$ || this.$_isHighWatermarkScrolling$()) && $cellSet$$1_totalRowHeight$$1$$ > this.$getElementHeight$($databodyContent_scroller$$8$$) || $totalRowCount$$ * $addResult_avgHeight_top$$4$$ != this.$getElementHeight$($databodyContent_scroller$$8$$)) {
        this.$setElementHeight$($databodyContent_scroller$$8$$, $cellSet$$1_totalRowHeight$$1$$), this.$setElementHeight$($columnRange$$3_inner$$, $cellSet$$1_totalRowHeight$$1$$);
      }
    }
    $columnRangeNeedsUpdate$$ && ($cellRange$$2_columnStart$$1$$ < this.$m_startCol$ ? this.$m_startCol$ -= $columnCount$$1_rowRange$$3$$ : this.$m_endCol$ = $cellRange$$2_columnStart$$1$$ + $columnCount$$1_rowRange$$3$$ - 1);
    this.$m_fetching$.cells = !1;
    this.$m_initialized$ && this.$_syncScroller$();
    this.$isFetchComplete$() && (this.$hideStatusText$(), null != this.$m_scrollIndexAfterFetch$ ? this.$scrollToIndex$(this.$m_scrollIndexAfterFetch$) : null != this.$m_scrollHeaderAfterFetch$ ? this.$scrollToHeader$(this.$m_scrollHeaderAfterFetch$) : this.$isActionableMode$() || this.$_highlightActive$(), this.$_isSelectionEnabled$() && this.$applySelection$($rowStart$$2$$, $rowStart$$2$$ + $rowCount$$6$$), this.$populateAccInfo$(), this.$m_utils$.$isTouchDevice$() && window.hasOwnProperty("WebKitCSSMatrix") && 
    ($databody$$6$$.style.webkitTransform = "translate3d(0, 0, 0)", null != this.$m_rowHeader$ && (this.$m_rowHeader$.style.webkitTransform = "translate3d(0, 0, 0)"), null != this.$m_colHeader$ && (this.$m_colHeader$.style.webkitTransform = "translate3d(0, 0, 0)")), this.$_shouldInitialize$() ? this.$_handleInitialization$(!0) : this.$m_initialized$ && (this.$_isScrollerContentOutOfSync$() || !0 == this.$m_resizeRequired$ || this.$m_endRowHeaderPixel$ > this.$getElementHeight$($databody$$6$$) && 
    this.$getElementHeight$(this.$m_scroller$) > this.$getElementHeight$($databody$$6$$) || this.$m_endColHeaderPixel$ > this.$getElementWidth$($databody$$6$$) && this.$getElementWidth$(this.$m_scroller$) > this.$getElementWidth$($databody$$6$$) ? this.$resizeGrid$() : (this.$m_scrollWidth$ = this.$getElementWidth$($databodyContent_scroller$$8$$) - this.$getElementWidth$($databody$$6$$), this.$m_scrollHeight$ = this.$getElementHeight$($databodyContent_scroller$$8$$) - this.$getElementHeight$($databody$$6$$)), 
    this.$fillViewport$(this.$m_currentScrollLeft$, this.$m_currentScrollTop$), this.$isFetchComplete$() && this.fireEvent("ready", {})));
    this.$_signalTaskEnd$();
  };
  $DvtDataGrid$$.prototype.$_insertRowsWithAnimation$ = function $$DvtDataGrid$$$$$_insertRowsWithAnimation$$($rowFragment$$, $rowHeaderFragment$$, $rowStart$$3$$, $totalRowHeight$$2$$) {
    var $self$$72$$, $isAppend$$4$$, $databodyContent$$1$$, $rowHeaderSupport$$, $rowHeaderContent$$2$$, $referenceRow$$2$$, $referenceRowHeader$$, $referenceRowTop$$, $insertStartPixel$$, $i$$147$$, $row$$5_rowHeader$$4$$, $newTop$$, $deltaY$$, $lastAnimatedElement$$, $transitionListener$$;
    $self$$72$$ = this;
    $self$$72$$.$_signalTaskStart$();
    $isAppend$$4$$ = $rowStart$$3$$ > this.$m_endRow$;
    $databodyContent$$1$$ = this.$m_databody$.firstChild;
    $rowHeaderSupport$$ = null == $rowHeaderFragment$$ ? !1 : !0;
    $referenceRow$$2$$ = $databodyContent$$1$$.childNodes[$rowStart$$3$$ - this.$m_startRow$ - 1];
    $referenceRowTop$$ = this.$getElementDir$($referenceRow$$2$$, "top");
    $insertStartPixel$$ = $referenceRowTop$$ + this.$getElementHeight$($referenceRow$$2$$);
    this.$changeStyleProperty$($referenceRow$$2$$, this.$getCssSupport$("z-index"), 10);
    $rowHeaderSupport$$ && ($rowHeaderContent$$2$$ = this.$m_rowHeader$.firstChild, $referenceRowHeader$$ = $rowHeaderContent$$2$$.childNodes[$rowStart$$3$$ - this.$m_startRow$ - 1], this.$changeStyleProperty$($referenceRowHeader$$, this.$getCssSupport$("z-index"), 10));
    for ($i$$147$$ = 0;$i$$147$$ < $rowFragment$$.childNodes.length;$i$$147$$++) {
      $row$$5_rowHeader$$4$$ = $rowFragment$$.childNodes[$i$$147$$], $newTop$$ = $insertStartPixel$$ + this.$getElementDir$($row$$5_rowHeader$$4$$, "top"), $deltaY$$ = $referenceRowTop$$ - $newTop$$, this.$setElementDir$($row$$5_rowHeader$$4$$, $newTop$$, "top"), this.$addTransformMoveStyle$($row$$5_rowHeader$$4$$, 0, 0, "linear", 0, $deltaY$$), $rowHeaderSupport$$ && ($row$$5_rowHeader$$4$$ = $rowHeaderFragment$$.childNodes[$i$$147$$], this.$setElementDir$($row$$5_rowHeader$$4$$, $newTop$$, "top"), 
      this.$addTransformMoveStyle$($row$$5_rowHeader$$4$$, 0, 0, "linear", 0, $deltaY$$));
    }
    for ($i$$147$$ = $rowStart$$3$$ - this.$m_startRow$;$i$$147$$ < $databodyContent$$1$$.childNodes.length;$i$$147$$++) {
      $row$$5_rowHeader$$4$$ = $databodyContent$$1$$.childNodes[$i$$147$$], $newTop$$ = $totalRowHeight$$2$$ + this.$getElementDir$($row$$5_rowHeader$$4$$, "top"), $deltaY$$ = -$totalRowHeight$$2$$, this.$setElementDir$($row$$5_rowHeader$$4$$, $newTop$$, "top"), this.$addTransformMoveStyle$($row$$5_rowHeader$$4$$, 0, 0, "linear", 0, $deltaY$$), $rowHeaderSupport$$ && ($row$$5_rowHeader$$4$$ = $rowHeaderContent$$2$$.childNodes[$i$$147$$], this.$setElementDir$($row$$5_rowHeader$$4$$, $newTop$$, "top"), 
      this.$addTransformMoveStyle$($row$$5_rowHeader$$4$$, 0, 0, "linear", 0, $deltaY$$));
    }
    this.$m_endRow$ += $rowFragment$$.childNodes.length;
    this.$m_endRowPixel$ += $totalRowHeight$$2$$;
    $rowHeaderSupport$$ && (this.$m_endRowHeader$ += $rowHeaderFragment$$.childNodes.length, this.$m_endRowHeaderPixel$ += $totalRowHeight$$2$$);
    this.$setElementHeight$($databodyContent$$1$$, this.$m_endRowPixel$ - this.$m_startRowPixel$);
    this.$setElementHeight$(this.$m_scroller$.firstChild, this.$m_endRowPixel$ - this.$m_startRowPixel$);
    this.$resizeGrid$();
    $isAppend$$4$$ ? ($databodyContent$$1$$.appendChild($rowFragment$$), $rowHeaderSupport$$ && $rowHeaderContent$$2$$.appendChild($rowHeaderFragment$$)) : ($databodyContent$$1$$.insertBefore($rowFragment$$, $referenceRow$$2$$.nextSibling), $rowHeaderSupport$$ && $rowHeaderContent$$2$$.insertBefore($rowHeaderFragment$$, $referenceRowHeader$$.nextSibling));
    this.$updateRowBanding$();
    $lastAnimatedElement$$ = $databodyContent$$1$$.lastChild;
    $transitionListener$$ = function $$transitionListener$$$() {
      $self$$72$$.$_handleAnimationEnd$();
      $lastAnimatedElement$$.removeEventListener("transitionend", $transitionListener$$, !1);
    };
    $lastAnimatedElement$$.addEventListener("transitionend", $transitionListener$$, !1);
    setTimeout(function() {
      var $i$$148$$, $duration$$11$$;
      $duration$$11$$ = $DvtDataGrid$$.$EXPAND_ANIMATION_DURATION$;
      for ($i$$148$$ = $databodyContent$$1$$.childNodes.length - 1;$i$$148$$ >= $rowStart$$3$$ - $self$$72$$.$m_startRow$;$i$$148$$--) {
        $self$$72$$.$addTransformMoveStyle$($databodyContent$$1$$.childNodes[$i$$148$$], $duration$$11$$ + "ms", 0, "ease-out", 0, 0), $rowHeaderSupport$$ && $self$$72$$.$addTransformMoveStyle$($rowHeaderContent$$2$$.childNodes[$i$$148$$], $duration$$11$$ + "ms", 0, "ease-out", 0, 0);
      }
    }, 0);
  };
  $DvtDataGrid$$.prototype.$_addColumns$ = function $$DvtDataGrid$$$$$_addColumns$$($rows$$2$$, $rowStart$$4$$, $rowCount$$7$$, $columnStart$$2$$, $cellSet$$2$$) {
    var $renderer$$3$$, $columnBandingInterval$$, $horizontalGridlines$$1$$, $verticalGridlines$$1$$, $avgWidth$$2_returnVal$$4_row$$6$$, $i$$149$$;
    $renderer$$3$$ = this.$m_options$.$getRenderer$("cell");
    $columnBandingInterval$$ = this.$m_options$.$getColumnBandingInterval$();
    $horizontalGridlines$$1$$ = this.$m_options$.$getHorizontalGridlines$();
    $verticalGridlines$$1$$ = this.$m_options$.$getVerticalGridlines$();
    for ($i$$149$$ = 0;$i$$149$$ < $rowCount$$7$$;$i$$149$$ += 1) {
      $avgWidth$$2_returnVal$$4_row$$6$$ = $rows$$2$$[$i$$149$$], $avgWidth$$2_returnVal$$4_row$$6$$ = this.$addCellsToRow$($cellSet$$2$$, $avgWidth$$2_returnVal$$4_row$$6$$, $rowStart$$4$$ + $i$$149$$, $renderer$$3$$, !1, $columnStart$$2$$, $i$$149$$ == $rowCount$$7$$ - 1, $columnBandingInterval$$, $horizontalGridlines$$1$$, $verticalGridlines$$1$$), $avgWidth$$2_returnVal$$4_row$$6$$ = $avgWidth$$2_returnVal$$4_row$$6$$.avgWidth;
    }
    return $avgWidth$$2_returnVal$$4_row$$6$$;
  };
  $DvtDataGrid$$.prototype.$_addRows$ = function $$DvtDataGrid$$$$$_addRows$$($fragment$$4$$, $isAppendOrInsert$$, $top$$5$$, $rowStart$$5$$, $rowCount$$8$$, $columnStart$$3$$, $columnRangeNeedsUpdate$$1$$, $cellSet$$3$$) {
    var $renderer$$4$$, $columnBandingInterval$$1$$, $rowBandingInterval$$, $horizontalGridlines$$2$$, $verticalGridlines$$2$$, $row$$7$$, $avgWidth$$3_index$$107$$, $totalRowHeight$$3$$, $height$$19_returnVal$$5$$, $i$$150$$;
    $renderer$$4$$ = this.$m_options$.$getRenderer$("cell");
    $columnBandingInterval$$1$$ = this.$m_options$.$getColumnBandingInterval$();
    $rowBandingInterval$$ = this.$m_options$.$getRowBandingInterval$();
    $horizontalGridlines$$2$$ = this.$m_options$.$getHorizontalGridlines$();
    $verticalGridlines$$2$$ = this.$m_options$.$getVerticalGridlines$();
    for ($i$$150$$ = $totalRowHeight$$3$$ = 0;$i$$150$$ < $rowCount$$8$$;$i$$150$$ += 1) {
      $avgWidth$$3_index$$107$$ = $isAppendOrInsert$$ ? $rowStart$$5$$ + $i$$150$$ : $rowStart$$5$$ + ($rowCount$$8$$ - 1 - $i$$150$$), $row$$7$$ = document.createElement("div"), $row$$7$$.className = this.$getMappedStyle$("row"), 1 === Math.floor($avgWidth$$3_index$$107$$ / $rowBandingInterval$$) % 2 && ($row$$7$$.className += " " + this.$getMappedStyle$("banded")), this.$m_root$.appendChild($row$$7$$), $height$$19_returnVal$$5$$ = this.$addCellsToRow$($cellSet$$3$$, $row$$7$$, $avgWidth$$3_index$$107$$, 
      $renderer$$4$$, !0, $columnStart$$3$$, $i$$150$$ == $rowCount$$8$$ - 1 && $columnRangeNeedsUpdate$$1$$, $columnBandingInterval$$1$$, $horizontalGridlines$$2$$, $verticalGridlines$$2$$, $top$$5$$), $avgWidth$$3_index$$107$$ = $height$$19_returnVal$$5$$.avgWidth, $height$$19_returnVal$$5$$ = $height$$19_returnVal$$5$$.height, $totalRowHeight$$3$$ += $height$$19_returnVal$$5$$, $isAppendOrInsert$$ ? ($row$$7$$.style.top = $top$$5$$ + "px", $top$$5$$ += $height$$19_returnVal$$5$$, $fragment$$4$$.appendChild($row$$7$$)) : 
      ($top$$5$$ -= $height$$19_returnVal$$5$$, $row$$7$$.style.top = $top$$5$$ + "px", $fragment$$4$$.insertBefore($row$$7$$, $fragment$$4$$.firstChild));
    }
    return{avgWidth:$avgWidth$$3_index$$107$$, totalRowHeight:$totalRowHeight$$3$$, top:$top$$5$$};
  };
  $DvtDataGrid$$.prototype.$_isScrollerContentOutOfSync$ = function $$DvtDataGrid$$$$$_isScrollerContentOutOfSync$$() {
    var $scrollerHeight$$2$$, $scrollerWidth$$2$$, $scrollerContent$$1_scrollerContentWidth$$, $scrollerContentHeight$$;
    if (null == this.$m_scroller$) {
      return!1;
    }
    $scrollerHeight$$2$$ = this.$getElementHeight$(this.$m_scroller$);
    $scrollerWidth$$2$$ = this.$getElementWidth$(this.$m_scroller$);
    $scrollerContent$$1_scrollerContentWidth$$ = this.$m_scroller$.firstChild;
    $scrollerContentHeight$$ = this.$getElementHeight$($scrollerContent$$1_scrollerContentWidth$$);
    $scrollerContent$$1_scrollerContentWidth$$ = this.$getElementWidth$($scrollerContent$$1_scrollerContentWidth$$);
    return this.$m_endRowPixel$ > $scrollerHeight$$2$$ && $scrollerWidth$$2$$ == $scrollerContent$$1_scrollerContentWidth$$ || this.$m_endColPixel$ > $scrollerWidth$$2$$ && $scrollerHeight$$2$$ == $scrollerContentHeight$$ ? !0 : !1;
  };
  $DvtDataGrid$$.prototype.$pushRowsDown$ = function $$DvtDataGrid$$$$$pushRowsDown$$($row$$8$$, $adjustment$$) {
    for (;$row$$8$$;) {
      $row$$8$$.style.top = this.$getElementDir$($row$$8$$, "top") + $adjustment$$ + "px", $row$$8$$ = $row$$8$$.nextSibling;
    }
  };
  $DvtDataGrid$$.prototype.$pushRowsUp$ = function $$DvtDataGrid$$$$$pushRowsUp$$($row$$9$$, $adjustment$$1$$) {
    this.$pushRowsDown$($row$$9$$, -$adjustment$$1$$);
  };
  $DvtDataGrid$$.prototype.$pushRowHeadersDown$ = function $$DvtDataGrid$$$$$pushRowHeadersDown$$($rowHeader$$5$$, $adjustment$$2$$) {
    for (;$rowHeader$$5$$;) {
      $rowHeader$$5$$.style.top = this.$getElementDir$($rowHeader$$5$$, "top") + $adjustment$$2$$ + "px", $rowHeader$$5$$ = $rowHeader$$5$$.nextSibling;
    }
  };
  $DvtDataGrid$$.prototype.$pushRowHeadersUp$ = function $$DvtDataGrid$$$$$pushRowHeadersUp$$($rowHeader$$6$$, $adjustment$$3$$) {
    this.$pushRowsDown$($rowHeader$$6$$, -$adjustment$$3$$);
  };
  $DvtDataGrid$$.prototype.$createCellContext$ = function $$DvtDataGrid$$$$$createCellContext$$($indexes$$4$$, $data$$78$$, $metadata$$2$$, $elem$$24$$) {
    var $cellContext$$, $prop$$63$$;
    $cellContext$$ = {};
    $cellContext$$.parentElement = $elem$$24$$.firstChild;
    $cellContext$$.indexes = $indexes$$4$$;
    $cellContext$$.data = $data$$78$$;
    $cellContext$$.component = this;
    $cellContext$$.datasource = this.$m_dataSource$;
    for ($prop$$63$$ in $metadata$$2$$) {
      $metadata$$2$$.hasOwnProperty($prop$$63$$) && ($cellContext$$[$prop$$63$$] = $metadata$$2$$[$prop$$63$$]);
    }
    null != this.$m_createContextCallback$ && this.$m_createContextCallback$.call(this, $cellContext$$);
    return $cellContext$$;
  };
  $DvtDataGrid$$.prototype.$_createCellId$ = function $$DvtDataGrid$$$$$_createCellId$$($keys$$13$$) {
    return this.$createSubId$("r" + $keys$$13$$.row + "c" + $keys$$13$$.column);
  };
  $DvtDataGrid$$.prototype.$_createHeaderId$ = function $$DvtDataGrid$$$$$_createHeaderId$$($axis$$10$$, $key$$57$$) {
    return this.$createSubId$($axis$$10$$.charAt(0) + $key$$57$$);
  };
  $DvtDataGrid$$.prototype.$createCellElement$ = function $$DvtDataGrid$$$$$createCellElement$$() {
    return document.createElement("div");
  };
  $DvtDataGrid$$.prototype.$getRowHeaderWidth$ = function $$DvtDataGrid$$$$$getRowHeaderWidth$$() {
    return-1 === this.$m_endRowHeader$ ? 0 : this.$m_rowHeaderWidth$;
  };
  $DvtDataGrid$$.prototype.$getColumnHeaderHeight$ = function $$DvtDataGrid$$$$$getColumnHeaderHeight$$() {
    return-1 === this.$m_endColHeader$ ? 0 : this.$m_colHeaderHeight$;
  };
  $DvtDataGrid$$.prototype.$getRowBottom$ = function $$DvtDataGrid$$$$$getRowBottom$$($row$$10$$, $bottom$$1$$) {
    var $colHeaderHeight$$3$$, $top$$8$$, $height$$20$$;
    $colHeaderHeight$$3$$ = this.$getColumnHeaderHeight$();
    if (null != $bottom$$1$$) {
      return $colHeaderHeight$$3$$ + $bottom$$1$$;
    }
    $top$$8$$ = this.$getElementDir$($row$$10$$, "top");
    $height$$20$$ = this.$calculateRowHeight$($row$$10$$);
    return isNaN($top$$8$$) || isNaN($height$$20$$) ? $colHeaderHeight$$3$$ : $colHeaderHeight$$3$$ + $top$$8$$ + $height$$20$$;
  };
  $DvtDataGrid$$.prototype.$addCellsToRow$ = function $$DvtDataGrid$$$$$addCellsToRow$$($cellSet$$4$$, $row$$11$$, $rowIndex$$, $renderer$$5$$, $isRowFetch$$, $columnStart$$4$$, $updateColumnRangeInfo$$, $columnBandingInterval$$2$$, $horizontalGridlines$$3$$, $verticalGridlines$$3$$, $bottom$$2$$) {
    var $isAppend$$5$$, $cellContent$$, $firstColumn$$, $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$, $cellStyleClass_shimHeaderContext_styleClass$$2$$, $currentLeft$$, $dir$$5$$, $totalWidth$$, $columnCount$$2$$, $cellContext$$1_indexes$$5$$, $cellData_content$$16$$, $j$$21$$, $cell$$1$$, $columnIndex_textWrapper$$1$$, $selectionAffordanceAppend$$, $height$$21_rowKey$$, $shimHeader$$;
    $isAppend$$5$$ = $columnStart$$4$$ >= this.$m_startCol$;
    $firstColumn$$ = $row$$11$$.firstChild;
    $currentLeft$$ = $isRowFetch$$ || !$isAppend$$5$$ ? this.$m_startColPixel$ : this.$m_endColPixel$;
    this.$m_utils$.$isTouchDevice$() && this.$m_utils$.$containsCSSClassName$($row$$11$$.lastChild, this.$getMappedStyle$("toucharea")) && ($selectionAffordanceAppend$$ = this.$m_utils$.$containsCSSClassName$($row$$11$$.children[$row$$11$$.children.length - 2], this.$getMappedStyle$("toucharea")) ? $row$$11$$.children[$row$$11$$.children.length - 2] : $row$$11$$.lastChild);
    $dir$$5$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left";
    $totalWidth$$ = 0;
    $columnCount$$2$$ = $cellSet$$4$$.getCount("column");
    for ($j$$21$$ = 0;$j$$21$$ < $columnCount$$2$$;$j$$21$$ += 1) {
      $columnIndex_textWrapper$$1$$ = $isAppend$$5$$ || $isRowFetch$$ ? $columnStart$$4$$ + $j$$21$$ : $columnStart$$4$$ + ($columnCount$$2$$ - 1 - $j$$21$$);
      $cellContext$$1_indexes$$5$$ = {row:$rowIndex$$, column:$columnIndex_textWrapper$$1$$};
      $cellData_content$$16$$ = $cellSet$$4$$.getData($cellContext$$1_indexes$$5$$);
      $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$ = $cellSet$$4$$.getMetadata($cellContext$$1_indexes$$5$$);
      $cell$$1$$ = this.$createCellElement$();
      $cell$$1$$.setAttribute("tabIndex", -1);
      $cellContent$$ = document.createElement("div");
      $cellContent$$.className = this.$getMappedStyle$("cellcontent");
      $cell$$1$$.appendChild($cellContent$$);
      $cellContext$$1_indexes$$5$$ = this.$createCellContext$($cellContext$$1_indexes$$5$$, $cellData_content$$16$$, $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$, $cell$$1$$);
      $cell$$1$$.id = this.$_createCellId$($cellContext$$1_indexes$$5$$.keys);
      $cell$$1$$[this.$m_resources$.$getMappedAttribute$("context")] = $cellContext$$1_indexes$$5$$;
      null == this.$_getKey$($row$$11$$) && ($height$$21_rowKey$$ = $cellContext$$1_indexes$$5$$.keys.row, this.$_setKey$($row$$11$$, $height$$21_rowKey$$), -1 == this.$m_endRowHeader$ ? ($cellStyleClass_shimHeaderContext_styleClass$$2$$ = this.$createHeaderContext$("row", $rowIndex$$, null, {key:$height$$21_rowKey$$}, null, 0, 0, 1), $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$ = this.$m_options$.$getInlineStyle$("row", $cellStyleClass_shimHeaderContext_styleClass$$2$$), $cellStyleClass_shimHeaderContext_styleClass$$2$$ = 
      this.$m_options$.$getStyleClass$("row", $cellStyleClass_shimHeaderContext_styleClass$$2$$), $shimHeader$$ = document.createElement("div"), $shimHeader$$.style.cssText = $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$, $shimHeader$$.className = this.$getMappedStyle$("row") + " " + $cellStyleClass_shimHeaderContext_styleClass$$2$$, $height$$21_rowKey$$ = this.$getRowHeight$($shimHeader$$, $height$$21_rowKey$$)) : $height$$21_rowKey$$ = this.$getRowHeight$($row$$11$$, $height$$21_rowKey$$), 
      this.$setElementHeight$($row$$11$$, $height$$21_rowKey$$));
      $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$ = this.$m_options$.$getInlineStyle$("cell", $cellContext$$1_indexes$$5$$);
      null != $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$ && ($cell$$1$$.style.cssText = $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$);
      "" != $cell$$1$$.style.height && ($cell$$1$$.style.height = "");
      "" != $cell$$1$$.style.width && ($cell$$1$$.style.width = "");
      $cellStyleClass_shimHeaderContext_styleClass$$2$$ = 1 === Math.floor($columnIndex_textWrapper$$1$$ / $columnBandingInterval$$2$$) % 2 ? this.$getMappedStyle$("cell") + " " + this.$getMappedStyle$("banded") : this.$getMappedStyle$("cell");
      $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$ = this.$m_options$.$getStyleClass$("cell", $cellContext$$1_indexes$$5$$);
      $cell$$1$$.className = null != $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$ ? $cellStyleClass_shimHeaderContext_styleClass$$2$$ + " " + $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$ : $cellStyleClass_shimHeaderContext_styleClass$$2$$;
      -1 != this.$m_endColHeader$ || 0 != $rowIndex$$ || this.$m_initialized$ ? $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$ = this.$getColumnWidth$($cell$$1$$, $cellContext$$1_indexes$$5$$.keys.column) : ($cellStyleClass_shimHeaderContext_styleClass$$2$$ = this.$createHeaderContext$("column", $columnIndex_textWrapper$$1$$, null, {key:$cellContext$$1_indexes$$5$$.keys.column}, null, 0, 0, 1), $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$ = this.$m_options$.$getInlineStyle$("column", 
      $cellStyleClass_shimHeaderContext_styleClass$$2$$), $cellStyleClass_shimHeaderContext_styleClass$$2$$ = this.$m_options$.$getStyleClass$("column", $cellStyleClass_shimHeaderContext_styleClass$$2$$), $shimHeader$$ = document.createElement("div"), $shimHeader$$.style.cssText = $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$, $shimHeader$$.className = this.$getMappedStyle$("colheadercell") + " " + this.$getMappedStyle$("headercell") + " " + $cellStyleClass_shimHeaderContext_styleClass$$2$$, 
      $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$ = this.$getColumnWidth$($shimHeader$$, $cellContext$$1_indexes$$5$$.keys.column));
      this.$setElementWidth$($cell$$1$$, $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$);
      if ("hidden" === $verticalGridlines$$3$$ || this.$_isLastColumn$($columnIndex_textWrapper$$1$$) && this.$getRowHeaderWidth$() + $currentLeft$$ + $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$ >= this.getWidth()) {
        "left" === $dir$$5$$ ? $cell$$1$$.style.borderRightStyle = "none" : $cell$$1$$.style.borderLeftStyle = "none";
      }
      "hidden" === $horizontalGridlines$$3$$ ? $cell$$1$$.style.borderBottomStyle = "none" : this.$_isLastRow$($rowIndex$$) && (null != $bottom$$2$$ && $columnIndex_textWrapper$$1$$ == $columnStart$$4$$ && ($bottom$$2$$ += this.$getElementHeight$($row$$11$$)), this.$getRowBottom$($row$$11$$, $bottom$$2$$) >= this.getHeight() && ($cell$$1$$.style.borderBottomStyle = "none"));
      $isAppend$$5$$ || $isRowFetch$$ ? this.$setElementDir$($cell$$1$$, $currentLeft$$, $dir$$5$$) : this.$setElementDir$($cell$$1$$, $currentLeft$$ - $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$, $dir$$5$$);
      $isAppend$$5$$ || $isRowFetch$$ ? ($selectionAffordanceAppend$$ ? $row$$11$$.insertBefore($cell$$1$$, $selectionAffordanceAppend$$) : $row$$11$$.appendChild($cell$$1$$), $currentLeft$$ += $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$) : ($row$$11$$.insertBefore($cell$$1$$, $firstColumn$$), $firstColumn$$ = $cell$$1$$, $currentLeft$$ -= $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$);
      null != $renderer$$5$$ ? ($cellData_content$$16$$ = $renderer$$5$$.call(this, $cellContext$$1_indexes$$5$$), null != $cellData_content$$16$$ && (null === $cellData_content$$16$$.parentNode || $cellData_content$$16$$.parentNode instanceof DocumentFragment ? $cellContent$$.appendChild($cellData_content$$16$$) : null == $cellData_content$$16$$.parentNode && $cellData_content$$16$$.toString && ($columnIndex_textWrapper$$1$$ = document.createElement("span"), $columnIndex_textWrapper$$1$$.className = 
      this.$getMappedStyle$("celltext"), $columnIndex_textWrapper$$1$$.appendChild(document.createTextNode($cellData_content$$16$$.toString())), $cellContent$$.appendChild($columnIndex_textWrapper$$1$$))), this.$_disableAllFocusableElements$($cell$$1$$)) : (null == $cellData_content$$16$$ && ($cellData_content$$16$$ = ""), $columnIndex_textWrapper$$1$$ = document.createElement("span"), $columnIndex_textWrapper$$1$$.className = this.$getMappedStyle$("celltext"), $columnIndex_textWrapper$$1$$.appendChild(document.createTextNode($cellData_content$$16$$.toString())), 
      $cellContent$$.appendChild($columnIndex_textWrapper$$1$$));
      $updateColumnRangeInfo$$ && ($isAppend$$5$$ || $isRowFetch$$ ? this.$m_endColPixel$ += $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$ : this.$m_startColPixel$ -= $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$, $totalWidth$$ += $cellMetadata_inlineStyle$$1_inlineStyleClass_width$$19$$);
    }
    return $updateColumnRangeInfo$$ && 0 < $columnCount$$2$$ ? {avgWidth:$totalWidth$$ / $columnCount$$2$$, height:$height$$21_rowKey$$} : {avgWidth:null, height:$height$$21_rowKey$$};
  };
  $DvtDataGrid$$.prototype.$handleCellsFetchError$ = function $$DvtDataGrid$$$$$handleCellsFetchError$$($errorStatus$$, $cellRange$$3$$) {
    var $rowRange$$4$$, $columnRange$$4$$;
    this.$m_fetching$.cells = !1;
    this.$hideStatusText$();
    null == this.$m_databody$.firstChild ? this.$_shouldInitialize$() && this.$_handleInitialization$(!0) : ($rowRange$$4$$ = $cellRange$$3$$[0], $columnRange$$4$$ = $cellRange$$3$$[1], $columnRange$$4$$.start + $columnRange$$4$$.count - 1 > this.$m_endCol$ && (this.$m_stopColumnHeaderFetch$ = this.$m_stopColumnFetch$ = !0), $rowRange$$4$$.start + $rowRange$$4$$.count - 1 > this.$m_endRow$ && (this.$m_stopRowHeaderFetch$ = this.$m_stopRowFetch$ = !0));
  };
  $DvtDataGrid$$.prototype.$showStatusText$ = function $$DvtDataGrid$$$$$showStatusText$$() {
    var $left$$7_msg$$22$$;
    $left$$7_msg$$22$$ = this.$m_resources$.$getTranslatedText$("msgFetchingData");
    "block" != this.$m_status$.style.display && (this.$m_status$.textContent = $left$$7_msg$$22$$, this.$m_status$.style.display = "block", $left$$7_msg$$22$$ = this.getWidth() / 2 - this.$m_status$.offsetWidth / 2, this.$m_status$.style.left = $left$$7_msg$$22$$ + "px");
  };
  $DvtDataGrid$$.prototype.$hideStatusText$ = function $$DvtDataGrid$$$$$hideStatusText$$() {
    this.$m_status$.style.display = "none";
  };
  $DvtDataGrid$$.prototype.$getFocusableElementsInNode$ = function $$DvtDataGrid$$$$$getFocusableElementsInNode$$($node$$31$$, $skipTabIndexCheck$$) {
    var $inputElems$$, $nodes$$, $elem$$25$$, $nodeCount$$, $inputRegExp$$, $i$$151$$, $attr$$14$$;
    $inputElems$$ = [];
    $attr$$14$$ = this.$m_resources$.$getMappedAttribute$("tabMod");
    if (document.evaluate) {
      for ($nodes$$ = document.evaluate(".//input|.//select|.//textarea|.//button|.//a|.//INPUT|.//SELECT|.//TEXTAREA|.//BUTTON|.//A|.//*[@tabindex\x3e\x3d0]|.//*[@" + $attr$$14$$ + "\x3e\x3d0]", $node$$31$$, null, XPathResult.ANY_TYPE, null), $elem$$25$$ = $nodes$$.iterateNext();$elem$$25$$;) {
        !$elem$$25$$.disabled && ($skipTabIndexCheck$$ || !$elem$$25$$.tabIndex || 0 < $elem$$25$$.tabIndex || 0 <= parseInt($elem$$25$$.getAttribute($attr$$14$$), 10)) && $inputElems$$.push($elem$$25$$), $elem$$25$$ = $nodes$$.iterateNext();
      }
    } else {
      for ($nodes$$ = $node$$31$$.getElementsByTagName("*"), $nodeCount$$ = $nodes$$.length, $inputRegExp$$ = /^INPUT|SELECT|BUTTON|^A\b|TEXTAREA/, $i$$151$$ = 0;$i$$151$$ < $nodeCount$$;$i$$151$$ += 1) {
        $elem$$25$$ = $nodes$$[$i$$151$$], $elem$$25$$.tagName.match($inputRegExp$$) && !$elem$$25$$.disabled && ($skipTabIndexCheck$$ || !$elem$$25$$.tabIndex || 0 <= $elem$$25$$.tabIndex || 0 <= parseInt($elem$$25$$.getAttribute($attr$$14$$), 10)) && $inputElems$$.push($elem$$25$$);
      }
    }
    return $inputElems$$;
  };
  $DvtDataGrid$$.prototype.$_disableAllFocusableElements$ = function $$DvtDataGrid$$$$$_disableAllFocusableElements$$($cell$$2_focusElems$$) {
    var $i$$152$$, $tabIndex$$, $attr$$15$$;
    $attr$$15$$ = this.$m_resources$.$getMappedAttribute$("tabMod");
    $cell$$2_focusElems$$ = this.$getFocusableElementsInNode$($cell$$2_focusElems$$);
    for ($i$$152$$ = 0;$i$$152$$ < $cell$$2_focusElems$$.length;$i$$152$$++) {
      if ($tabIndex$$ = parseInt($cell$$2_focusElems$$[$i$$152$$].tabIndex, 10), isNaN($tabIndex$$) || 0 <= $tabIndex$$) {
        $cell$$2_focusElems$$[$i$$152$$].setAttribute($attr$$15$$, isNaN($tabIndex$$) ? -1 : $tabIndex$$), $cell$$2_focusElems$$[$i$$152$$].setAttribute("tabIndex", -1);
      }
    }
  };
  $DvtDataGrid$$.prototype.$_enableAllFocusableElements$ = function $$DvtDataGrid$$$$$_enableAllFocusableElements$$($cell$$3_focusElems$$1$$) {
    var $i$$153$$, $tabIndex$$1$$, $attr$$16$$;
    $attr$$16$$ = this.$m_resources$.$getMappedAttribute$("tabMod");
    $cell$$3_focusElems$$1$$ = this.$getFocusableElementsInNode$($cell$$3_focusElems$$1$$, !1);
    for ($i$$153$$ = 0;$i$$153$$ < $cell$$3_focusElems$$1$$.length;$i$$153$$++) {
      $tabIndex$$1$$ = parseInt($cell$$3_focusElems$$1$$[$i$$153$$].getAttribute($attr$$16$$), 10), $cell$$3_focusElems$$1$$[$i$$153$$].removeAttribute($attr$$16$$), -1 == $tabIndex$$1$$ ? $cell$$3_focusElems$$1$$[$i$$153$$].removeAttribute("tabIndex") : $cell$$3_focusElems$$1$$[$i$$153$$].setAttribute("tabIndex", $tabIndex$$1$$);
    }
  };
  $DvtDataGrid$$.prototype.$_isFocusableElement$ = function $$DvtDataGrid$$$$$_isFocusableElement$$($elem$$27$$) {
    var $tagName$$2$$ = $elem$$27$$.tagName;
    return "INPUT" === $tagName$$2$$ || "TEXTAREA" === $tagName$$2$$ || "SELECT" === $tagName$$2$$ || "BUTTON" === $tagName$$2$$ || "A" === $tagName$$2$$ || null != $elem$$27$$.getAttribute("tabIndex") && 0 <= parseInt($elem$$27$$.getAttribute("tabIndex"), 10) && this.$findCell$($elem$$27$$) != $elem$$27$$;
  };
  $DvtDataGrid$$.prototype.$_setFocusToFirstFocusableElement$ = function $$DvtDataGrid$$$$$_setFocusToFirstFocusableElement$$($elem$$28_elems$$) {
    $elem$$28_elems$$ = this.$getFocusableElementsInNode$($elem$$28_elems$$, !0);
    return 0 < $elem$$28_elems$$.length ? ($elem$$28_elems$$[0].focus(), !0) : !1;
  };
  $DvtDataGrid$$.prototype.$isActionableMode$ = function $$DvtDataGrid$$$$$isActionableMode$$() {
    return "actionable" == this.$m_keyMode$;
  };
  $DvtDataGrid$$.prototype.$setActionableMode$ = function $$DvtDataGrid$$$$$setActionableMode$$($flag$$2$$) {
    this.$m_keyMode$ = $flag$$2$$ ? "actionable" : "navigation";
    this.$_setAccInfoText$("actionable" === this.$m_keyMode$ ? "accessibleActionableMode" : "accessibleNavigationMode");
  };
  $DvtDataGrid$$.prototype.$handleScroll$ = function $$DvtDataGrid$$$$$handleScroll$$($event$$108_scrollLeft$$) {
    if (!this.$m_utils$.$isTouchDevice$()) {
      if (!0 == this.$m_silentScroll$) {
        this.$m_silentScroll$ = !1;
      } else {
        var $scroller$$9$$;
        $event$$108_scrollLeft$$ || ($event$$108_scrollLeft$$ = window.event);
        $scroller$$9$$ = $event$$108_scrollLeft$$.target ? $event$$108_scrollLeft$$.target : $event$$108_scrollLeft$$.srcElement;
        $event$$108_scrollLeft$$ = this.$m_utils$.$getElementScrollLeft$($scroller$$9$$);
        this.scrollTo($event$$108_scrollLeft$$, $scroller$$9$$.scrollTop);
      }
    }
  };
  $DvtDataGrid$$.prototype.$_getMaxScrollWidth$ = function $$DvtDataGrid$$$$$_getMaxScrollWidth$$() {
    return this.$_isCountUnknownOrHighwatermark$("column") && !this.$m_stopColumnFetch$ ? Number.MAX_VALUE : this.$m_scrollWidth$;
  };
  $DvtDataGrid$$.prototype.$_getMaxScrollHeight$ = function $$DvtDataGrid$$$$$_getMaxScrollHeight$$() {
    return this.$_isCountUnknownOrHighwatermark$("row") && !this.$m_stopRowFetch$ ? Number.MAX_VALUE : this.$m_scrollHeight$;
  };
  $DvtDataGrid$$.prototype.scroll = function $$DvtDataGrid$$$$scroll$($options$$222_scrollTop$$1$$) {
    var $scrollLeft$$1$$;
    null != $options$$222_scrollTop$$1$$.position && ($scrollLeft$$1$$ = Math.max(0, Math.min(this.$_getMaxScrollWidth$(), $options$$222_scrollTop$$1$$.position.scrollX)), $options$$222_scrollTop$$1$$ = Math.max(0, Math.min(this.$_getMaxScrollHeight$(), $options$$222_scrollTop$$1$$.position.scrollY)), this.$_initiateScroll$($scrollLeft$$1$$, $options$$222_scrollTop$$1$$));
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.scroll", $DvtDataGrid$$.prototype.scroll, void 0);
  $DvtDataGrid$$.prototype.$scrollDelta$ = function $$DvtDataGrid$$$$$scrollDelta$$($deltaX$$, $deltaY$$1$$) {
    var $scrollLeft$$2$$, $scrollTop$$2$$;
    0 != $deltaX$$ && 0 != $deltaY$$1$$ && (Math.abs($deltaX$$) > Math.abs($deltaY$$1$$) ? ($deltaY$$1$$ = 0, this.$m_extraScrollOverY$ = null) : ($deltaX$$ = 0, this.$m_extraScrollOverX$ = null));
    $scrollLeft$$2$$ = Math.max(0, Math.min(this.$_getMaxScrollWidth$(), this.$m_currentScrollLeft$ - $deltaX$$));
    $scrollTop$$2$$ = Math.max(0, Math.min(this.$_getMaxScrollHeight$(), this.$m_currentScrollTop$ - $deltaY$$1$$));
    this.$_initiateScroll$($scrollLeft$$2$$, $scrollTop$$2$$);
  };
  $DvtDataGrid$$.prototype.$_initiateScroll$ = function $$DvtDataGrid$$$$$_initiateScroll$$($scrollLeft$$3$$, $scrollTop$$3$$) {
    this.$m_utils$.$isTouchDevice$() ? this.scrollTo($scrollLeft$$3$$, $scrollTop$$3$$) : (this.$m_utils$.$setElementScrollLeft$(this.$m_scroller$, $scrollLeft$$3$$), this.$m_scroller$.scrollTop = $scrollTop$$3$$);
  };
  $DvtDataGrid$$.prototype.$_shouldScrollDatabody$ = function $$DvtDataGrid$$$$$_shouldScrollDatabody$$($scrollLeft$$4$$, $scrollTop$$4$$) {
    var $viewportRight$$1$$, $viewportBottom$$1$$;
    $viewportRight$$1$$ = $scrollLeft$$4$$ + this.$getElementWidth$(this.$m_databody$);
    $viewportBottom$$1$$ = $scrollTop$$4$$ + this.$getElementHeight$(this.$m_databody$);
    return this.$m_endRowPixel$ < $viewportBottom$$1$$ || this.$m_startRowPixel$ > $scrollTop$$4$$ || this.$m_endColPixel$ < $viewportRight$$1$$ - 2 || this.$m_startColPixel$ > $scrollLeft$$4$$ ? !1 : !0;
  };
  $DvtDataGrid$$.prototype.$_disableTouchScrollAnimation$ = function $$DvtDataGrid$$$$$_disableTouchScrollAnimation$$() {
    this.$m_databody$.firstChild.style.webkitTransitionDuration = "0ms";
    this.$m_rowHeader$.firstChild.style.webkitTransitionDuration = "0ms";
    this.$m_colHeader$.firstChild.style.webkitTransitionDuration = "0ms";
  };
  $DvtDataGrid$$.prototype.scrollTo = function $$DvtDataGrid$$$$scrollTo$($scrollLeft$$5$$, $scrollTop$$5$$) {
    this.$m_currentScrollLeft$ = $scrollLeft$$5$$;
    this.$m_currentScrollTop$ = $scrollTop$$5$$;
    if (!this.$m_utils$.$isTouchDevice$() && ($scrollLeft$$5$$ + this.$getViewportWidth$() < this.$m_startColPixel$ || $scrollLeft$$5$$ > this.$m_endColPixel$ || $scrollTop$$5$$ + this.$getViewportHeight$() < this.$m_startRowPixel$ || $scrollTop$$5$$ > this.$m_endRowPixel$ ? this.$handleLongScroll$($scrollLeft$$5$$, $scrollTop$$5$$) : this.$fillViewport$($scrollLeft$$5$$, $scrollTop$$5$$), !this.$_shouldScrollDatabody$($scrollLeft$$5$$, $scrollTop$$5$$))) {
      this.$m_stopDatabodyScroll$ = !0;
      return;
    }
    this.$m_stopDatabodyScroll$ = !1;
    this.$_syncScroller$();
    this.$_adjustScrollerSize$();
    null != this.$m_cellToFocus$ && (this.$m_cellToFocus$.focus(), this.$m_cellToFocus$ = null);
    null != this.$m_scrollIndexAfterFetch$ && this.$_isInViewport$(this.$m_scrollIndexAfterFetch$) === $DvtDataGrid$$.$INSIDE$ && (this.$_isDatabodyCellActive$() && this.$m_scrollIndexAfterFetch$.row == this.$m_active$.indexes.row && this.$m_scrollIndexAfterFetch$.column == this.$m_active$.indexes.column && this.$_highlightActive$(), this.$m_scrollIndexAfterFetch$ = null);
  };
  $DvtDataGrid$$.prototype.$_scrollTransitionEnd$ = function $$DvtDataGrid$$$$$_scrollTransitionEnd$$() {
    var $databody$$7$$;
    null != this.$m_scrollTransitionEnd$ && ($databody$$7$$ = this.$m_databody$.firstChild, $databody$$7$$.removeEventListener("webkitTransitionEnd", this.$m_scrollTransitionEnd$));
    this.$_isSelectionEnabled$() && this.$_scrollTouchSelectionAffordance$();
    this.fireEvent("scroll", {event:null, ui:{scrollX:this.$m_currentScrollLeft$, scrollY:this.$m_currentScrollTop$}});
    this.$m_currentScrollLeft$ + this.$getViewportWidth$() < this.$m_startColPixel$ || this.$m_currentScrollLeft$ > this.$m_endColPixel$ || this.$m_currentScrollTop$ + this.$getViewportHeight$() < this.$m_startRowPixel$ || this.$m_currentScrollTop$ > this.$m_endRowPixel$ ? this.$handleLongScroll$(this.$m_currentScrollLeft$, this.$m_currentScrollTop$) : this.$fillViewport$(this.$m_currentScrollLeft$, this.$m_currentScrollTop$);
  };
  $DvtDataGrid$$.prototype.$_bounceBack$ = function $$DvtDataGrid$$$$$_bounceBack$$() {
    var $scrollLeft$$6$$, $scrollTop$$6$$, $databody$$8$$, $colHeader$$3$$, $rowHeader$$7$$;
    $scrollLeft$$6$$ = this.$m_currentScrollLeft$;
    $scrollTop$$6$$ = this.$m_currentScrollTop$;
    $databody$$8$$ = this.$m_databody$.firstChild;
    $colHeader$$3$$ = this.$m_colHeader$.firstChild;
    $rowHeader$$7$$ = this.$m_rowHeader$.firstChild;
    $databody$$8$$.removeEventListener("webkitTransitionEnd", this.$m_bounceBack$);
    $databody$$8$$.style.webkitTransitionDuration = $DvtDataGrid$$.$BOUNCE_ANIMATION_DURATION$ + "ms";
    $colHeader$$3$$.style.webkitTransitionDuration = $DvtDataGrid$$.$BOUNCE_ANIMATION_DURATION$ + "ms";
    $rowHeader$$7$$.style.webkitTransitionDuration = $DvtDataGrid$$.$BOUNCE_ANIMATION_DURATION$ + "ms";
    null == this.$m_scrollTransitionEnd$ && (this.$m_scrollTransitionEnd$ = this.$_scrollTransitionEnd$.bind(this));
    $databody$$8$$.addEventListener("webkitTransitionEnd", this.$m_scrollTransitionEnd$);
    this.$m_resources$.$isRTLMode$() ? ($databody$$8$$.style.webkitTransform = "translate3d(" + $scrollLeft$$6$$ + "px, " + -$scrollTop$$6$$ + "px, 0)", $colHeader$$3$$.style.webkitTransform = "translate3d(" + $scrollLeft$$6$$ + "px, 0, 0)") : ($databody$$8$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$6$$ + "px, " + -$scrollTop$$6$$ + "px, 0)", $colHeader$$3$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$6$$ + "px, 0, 0)");
    $rowHeader$$7$$.style.webkitTransform = "translate3d(0, " + -$scrollTop$$6$$ + "px, 0)";
    this.$m_extraScrollOverY$ = this.$m_extraScrollOverX$ = null;
  };
  $DvtDataGrid$$.prototype.$_syncScroller$ = function $$DvtDataGrid$$$$$_syncScroller$$() {
    var $scrollLeft$$7$$, $scrollTop$$7$$, $databody$$9$$, $colHeader$$4$$, $rowHeader$$8$$, $dir$$7$$, $prevScrollLeft$$, $prevScrollTop$$;
    $scrollLeft$$7$$ = this.$m_currentScrollLeft$;
    $scrollTop$$7$$ = this.$m_currentScrollTop$;
    $databody$$9$$ = this.$m_databody$.firstChild;
    $colHeader$$4$$ = this.$m_colHeader$.firstChild;
    $rowHeader$$8$$ = this.$m_rowHeader$.firstChild;
    this.$m_utils$.$isTouchDevice$() && window.hasOwnProperty("WebKitCSSMatrix") ? (null != this.$m_extraScrollOverX$ || null != this.$m_extraScrollOverY$ ? (null != this.$m_extraScrollOverX$ ? $scrollLeft$$7$$ += this.$m_extraScrollOverX$ : $scrollTop$$7$$ += this.$m_extraScrollOverY$, null == this.$m_bounceBack$ && (this.$m_bounceBack$ = this.$_bounceBack$.bind(this)), $databody$$9$$.addEventListener("webkitTransitionEnd", this.$m_bounceBack$)) : "0ms" == $databody$$9$$.style.webkitTransitionDuration ? 
    this.$_scrollTransitionEnd$() : (null == this.$m_scrollTransitionEnd$ && (this.$m_scrollTransitionEnd$ = this.$_scrollTransitionEnd$.bind(this)), $databody$$9$$.addEventListener("webkitTransitionEnd", this.$m_scrollTransitionEnd$)), this.$m_resources$.$isRTLMode$() ? ($databody$$9$$.style.webkitTransform = "translate3d(" + $scrollLeft$$7$$ + "px, " + -$scrollTop$$7$$ + "px, 0)", $colHeader$$4$$.style.webkitTransform = "translate3d(" + $scrollLeft$$7$$ + "px, 0, 0)") : ($databody$$9$$.style.webkitTransform = 
    "translate3d(" + -$scrollLeft$$7$$ + "px, " + -$scrollTop$$7$$ + "px, 0)", $colHeader$$4$$.style.webkitTransform = "translate3d(" + -$scrollLeft$$7$$ + "px, 0, 0)"), $rowHeader$$8$$.style.webkitTransform = "translate3d(0, " + -$scrollTop$$7$$ + "px, 0)") : ($dir$$7$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left", $prevScrollLeft$$ = this.$getElementDir$($databody$$9$$, $dir$$7$$), $prevScrollTop$$ = this.$getElementDir$($databody$$9$$, "top"), this.$setElementDir$($databody$$9$$, -$scrollLeft$$7$$, 
    $dir$$7$$), this.$setElementDir$($databody$$9$$, -$scrollTop$$7$$, "top"), this.$setElementDir$($colHeader$$4$$, -$scrollLeft$$7$$, $dir$$7$$), this.$setElementDir$($rowHeader$$8$$, -$scrollTop$$7$$, "top"), $prevScrollTop$$ === -$scrollTop$$7$$ && $prevScrollLeft$$ === -$scrollLeft$$7$$ || this.fireEvent("scroll", {event:null, ui:{scrollX:$scrollLeft$$7$$, scrollY:$scrollTop$$7$$}}));
  };
  $DvtDataGrid$$.prototype.$_adjustScrollerSize$ = function $$DvtDataGrid$$$$$_adjustScrollerSize$$() {
    var $scrollerContent$$2$$, $scrollerContentHeight$$1$$, $scrollerContentWidth$$1$$, $databodyContent$$2$$;
    $scrollerContent$$2$$ = this.$m_scroller$.firstChild;
    $scrollerContentHeight$$1$$ = this.$getElementHeight$($scrollerContent$$2$$);
    $scrollerContentWidth$$1$$ = this.$getElementWidth$($scrollerContent$$2$$);
    $databodyContent$$2$$ = this.$m_databody$.firstChild;
    if (this.$m_endRowPixel$ > $scrollerContentHeight$$1$$ || this.$m_dataSource$.getCount("row") == this.$m_endRow$ + 1 && !this.$_isCountUnknown$("row") && this.$m_endRowPixel$ < $scrollerContentHeight$$1$$) {
      this.$setElementHeight$($scrollerContent$$2$$, this.$m_endRowPixel$), this.$setElementHeight$($databodyContent$$2$$, this.$m_endRowPixel$);
    }
    if (this.$m_endColPixel$ > $scrollerContentWidth$$1$$ || this.$m_dataSource$.getCount("column") == this.$m_endCol$ + 1 && !this.$_isCountUnknown$("column") && this.$m_endColPixel$ < $scrollerContentWidth$$1$$) {
      this.$setElementWidth$($scrollerContent$$2$$, this.$m_endColPixel$), this.$setElementWidth$($databodyContent$$2$$, this.$m_endColPixel$);
    }
  };
  $DvtDataGrid$$.prototype.$handleLongScroll$ = function $$DvtDataGrid$$$$$handleLongScroll$$($scrollLeft$$8$$, $scrollTop$$8$$) {
    var $startRow$$, $startCol$$, $startRowPixel$$, $startColPixel$$;
    $startRow$$ = Math.round(Math.max(0, $scrollTop$$8$$ - this.getHeight() / 2) / this.$m_avgRowHeight$);
    $startCol$$ = Math.round(Math.max(0, $scrollLeft$$8$$ - this.getWidth() / 2) / this.$m_avgColWidth$);
    $startRowPixel$$ = $startRow$$ * this.$m_avgRowHeight$;
    $startColPixel$$ = $startCol$$ * this.$m_avgColWidth$;
    this.$m_startRow$ = $startRow$$;
    this.$m_endRow$ = -1;
    this.$m_startRowHeader$ = $startRow$$;
    this.$m_endRowHeader$ = -1;
    this.$m_endRowHeaderPixel$ = this.$m_startRowHeaderPixel$ = this.$m_endRowPixel$ = this.$m_startRowPixel$ = $startRowPixel$$;
    this.$m_startCol$ = $startCol$$;
    this.$m_endCol$ = -1;
    this.$m_startColHeader$ = $startCol$$;
    this.$m_endColHeader$ = -1;
    this.$m_endColHeaderPixel$ = this.$m_startColHeaderPixel$ = this.$m_endColPixel$ = this.$m_startColPixel$ = $startColPixel$$;
    this.fetchHeaders("row", $startRow$$, this.$m_rowHeader$, void 0, {success:function($headerSet$$3$$, $headerRange$$4$$) {
      this.$handleRowHeadersFetchSuccessForLongScroll$($headerSet$$3$$, $headerRange$$4$$);
    }});
    this.fetchHeaders("column", $startCol$$, this.$m_colHeader$, void 0, {success:function($headerSet$$4$$, $headerRange$$5$$) {
      this.$handleColumnHeadersFetchSuccessForLongScroll$($headerSet$$4$$, $headerRange$$5$$);
    }});
    this.fetchCells(this.$m_databody$, this.$m_scroller$, $startRow$$, $startCol$$, null, null, {success:function($cellSet$$5$$, $cellRange$$4$$) {
      this.$handleCellsFetchSuccessForLongScroll$($cellSet$$5$$, $cellRange$$4$$);
    }});
  };
  $DvtDataGrid$$.prototype.$handleRowHeadersFetchSuccessForLongScroll$ = function $$DvtDataGrid$$$$$handleRowHeadersFetchSuccessForLongScroll$$($headerSet$$5$$, $headerRange$$6$$) {
    var $headerContent$$1$$ = this.$m_rowHeader$.firstChild;
    null != $headerContent$$1$$ && this.$m_utils$.empty($headerContent$$1$$);
    this.$handleHeadersFetchSuccess$($headerSet$$5$$, $headerRange$$6$$);
  };
  $DvtDataGrid$$.prototype.$handleColumnHeadersFetchSuccessForLongScroll$ = function $$DvtDataGrid$$$$$handleColumnHeadersFetchSuccessForLongScroll$$($headerSet$$6$$, $headerRange$$7$$) {
    var $headerContent$$2$$ = this.$m_colHeader$.firstChild;
    null != $headerContent$$2$$ && this.$m_utils$.empty($headerContent$$2$$);
    this.$handleHeadersFetchSuccess$($headerSet$$6$$, $headerRange$$7$$);
  };
  $DvtDataGrid$$.prototype.$handleCellsFetchSuccessForLongScroll$ = function $$DvtDataGrid$$$$$handleCellsFetchSuccessForLongScroll$$($cellSet$$6$$, $cellRange$$5$$) {
    var $databodyContent$$3$$ = this.$m_databody$.firstChild;
    null != $databodyContent$$3$$ && this.$m_utils$.empty($databodyContent$$3$$);
    this.$handleCellsFetchSuccess$($cellSet$$6$$, $cellRange$$5$$);
  };
  $DvtDataGrid$$.prototype.$fillViewport$ = function $$DvtDataGrid$$$$$fillViewport$$($scrollLeft$$9$$, $scrollTop$$9$$) {
    var $viewportBottom$$2_viewportRight$$2$$, $fetchStartCol_fetchStartRow$$, $fetchSize$$1$$;
    $viewportBottom$$2_viewportRight$$2$$ = $scrollLeft$$9$$ + this.$getElementWidth$(this.$m_scroller$);
    !this.$m_stopColumnHeaderFetch$ && ($viewportBottom$$2_viewportRight$$2$$ > this.$m_endColHeaderPixel$ || $viewportBottom$$2_viewportRight$$2$$ == this.$m_endColHeaderPixel$ && this.$_isCountUnknownOrHighwatermark$("column")) ? (this.fetchHeaders("column", this.$m_endColHeader$ + 1, this.$m_colHeader$), !this.$_isHighWatermarkScrolling$() && this.$m_endColHeader$ - this.$m_startColHeader$ > this.$MAX_COLUMN_THRESHOLD$ && this.$removeColumnHeadersFromLeft$(this.$m_colHeader$)) : $scrollLeft$$9$$ < 
    this.$m_startColHeaderPixel$ && ($fetchStartCol_fetchStartRow$$ = Math.max(0, this.$m_startColHeader$ - this.$getFetchSize$("column")), $fetchSize$$1$$ = Math.max(0, this.$m_startColHeader$ - $fetchStartCol_fetchStartRow$$), this.fetchHeaders("column", $fetchStartCol_fetchStartRow$$, this.$m_colHeader$, $fetchSize$$1$$), !this.$_isHighWatermarkScrolling$() && this.$m_endColHeader$ - this.$m_startColHeader$ > this.$MAX_COLUMN_THRESHOLD$ && this.$removeColumnHeadersFromRight$(this.$m_colHeader$));
    !this.$m_stopColumnFetch$ && ($viewportBottom$$2_viewportRight$$2$$ > this.$m_endColPixel$ || $viewportBottom$$2_viewportRight$$2$$ == this.$m_endColPixel$ && this.$_isCountUnknownOrHighwatermark$("column")) ? (this.fetchCells(this.$m_databody$, this.$m_scroller$, this.$m_startRow$, this.$m_endCol$ + 1, this.$m_endRow$ - this.$m_startRow$ + 1), !this.$_isHighWatermarkScrolling$() && this.$m_endCol$ - this.$m_startCol$ > this.$MAX_COLUMN_THRESHOLD$ && this.$removeColumnsFromLeft$(this.$m_databody$)) : 
    $scrollLeft$$9$$ < this.$m_startColPixel$ && ($fetchStartCol_fetchStartRow$$ = Math.max(0, this.$m_startCol$ - this.$getFetchSize$("column")), $fetchSize$$1$$ = Math.max(0, this.$m_startCol$ - $fetchStartCol_fetchStartRow$$), this.fetchCells(this.$m_databody$, this.$m_scroller$, this.$m_startRow$, $fetchStartCol_fetchStartRow$$, this.$m_endRow$ - this.$m_startRow$ + 1, $fetchSize$$1$$), !this.$_isHighWatermarkScrolling$() && this.$m_endCol$ - this.$m_startCol$ > this.$MAX_COLUMN_THRESHOLD$ && 
    this.$removeColumnsFromRight$(this.$m_databody$));
    $viewportBottom$$2_viewportRight$$2$$ = $scrollTop$$9$$ + this.$getElementHeight$(this.$m_scroller$);
    if (!this.$m_stopRowHeaderFetch$ && ($viewportBottom$$2_viewportRight$$2$$ > this.$m_endRowHeaderPixel$ || $viewportBottom$$2_viewportRight$$2$$ == this.$m_endRowHeaderPixel$ && this.$_isCountUnknownOrHighwatermark$("row"))) {
      this.fetchHeaders("row", this.$m_endRowHeader$ + 1, this.$m_rowHeader$), !this.$_isHighWatermarkScrolling$() && this.$m_endRowHeader$ - this.$m_startRowHeader$ > this.$MAX_ROW_THRESHOLD$ && this.$removeRowHeadersFromTop$(this.$m_rowHeader$);
    } else {
      if (Math.max(0, $scrollTop$$9$$ - 0) < this.$m_startRowHeaderPixel$) {
        if (0 == this.$m_startRowHeader$) {
          return;
        }
        $fetchStartCol_fetchStartRow$$ = Math.max(0, this.$m_startRowHeader$ - this.$getFetchSize$("row"));
        $fetchSize$$1$$ = Math.max(0, this.$m_startRowHeader$ - $fetchStartCol_fetchStartRow$$);
        this.fetchHeaders("row", $fetchStartCol_fetchStartRow$$, this.$m_rowHeader$, $fetchSize$$1$$);
        !this.$_isHighWatermarkScrolling$() && this.$m_endRowHeader$ - this.$m_startRowHeader$ > this.$MAX_ROW_THRESHOLD$ && this.$removeRowHeadersFromBottom$(this.$m_rowHeader$);
      }
    }
    !this.$m_stopRowFetch$ && ($viewportBottom$$2_viewportRight$$2$$ > this.$m_endRowPixel$ || $viewportBottom$$2_viewportRight$$2$$ == this.$m_endRowPixel$ && this.$_isCountUnknownOrHighwatermark$("row")) ? (this.$fetchCellsToBottom$(), !this.$_isHighWatermarkScrolling$() && this.$m_endRow$ - this.$m_startRow$ > this.$MAX_ROW_THRESHOLD$ && this.$removeRowsFromTop$(this.$m_databody$)) : Math.max(0, $scrollTop$$9$$ - 0) < this.$m_startRowPixel$ && 0 != this.$m_startRow$ && (this.$fetchCellsToTop$(), 
    !this.$_isHighWatermarkScrolling$() && this.$m_endRow$ - this.$m_startRow$ > this.$MAX_ROW_THRESHOLD$ && this.$removeRowsFromBottom$(this.$m_databody$));
  };
  $DvtDataGrid$$.prototype.$fetchCellsToBottom$ = function $$DvtDataGrid$$$$$fetchCellsToBottom$$() {
    this.fetchCells(this.$m_databody$, this.$m_scroller$, this.$m_endRow$ + 1, this.$m_startCol$, null, this.$m_endCol$ - this.$m_startCol$ + 1);
  };
  $DvtDataGrid$$.prototype.$fetchCellsToTop$ = function $$DvtDataGrid$$$$$fetchCellsToTop$$() {
    var $fetchSize$$2$$, $fetchStartRow$$1$$;
    $fetchStartRow$$1$$ = Math.max(0, this.$m_startRow$ - this.$getFetchSize$("row"));
    $fetchSize$$2$$ = Math.max(0, this.$m_startRow$ - $fetchStartRow$$1$$);
    this.fetchCells(this.$m_databody$, this.$m_scroller$, $fetchStartRow$$1$$, this.$m_startCol$, $fetchSize$$2$$, this.$m_endCol$ - this.$m_startCol$ + 1);
  };
  $DvtDataGrid$$.prototype.$removeColumnHeadersFromLeft$ = function $$DvtDataGrid$$$$$removeColumnHeadersFromLeft$$($colHeader$$5_colHeaderContent_returnVal$$6$$) {
    $colHeader$$5_colHeaderContent_returnVal$$6$$ = $colHeader$$5_colHeaderContent_returnVal$$6$$.firstChild;
    this.$m_startColHeaderPixel$ >= this.$m_currentScrollLeft$ - 0 || ($colHeader$$5_colHeaderContent_returnVal$$6$$ = this.$removeColumnHeadersFromLeftOfContainer$($colHeader$$5_colHeaderContent_returnVal$$6$$, null, this.$m_startColHeaderPixel$, 0), this.$m_startColHeaderPixel$ += $colHeader$$5_colHeaderContent_returnVal$$6$$.widthChange, this.$m_startColHeader$ += $colHeader$$5_colHeaderContent_returnVal$$6$$.extentChange);
  };
  $DvtDataGrid$$.prototype.$removeColumnHeadersFromLeftOfContainer$ = function $$DvtDataGrid$$$$$removeColumnHeadersFromLeftOfContainer$$($columnHeadersContainer_returnVal$$7$$, $firstChild$$1$$, $resizerWidth$$, $colThreshold$$1$$) {
    var $element$$72$$, $isColumnHeader$$, $columnHeader$$1$$, $width$$20$$, $removedColumnsWidth$$ = 0, $removedColumns$$ = 0;
    $element$$72$$ = null == $firstChild$$1$$ ? $columnHeadersContainer_returnVal$$7$$.firstChild : $firstChild$$1$$.nextSibling;
    if (null == $element$$72$$) {
      return{extentChange:0, widthChange:0};
    }
    $columnHeader$$1$$ = ($isColumnHeader$$ = this.$m_utils$.$containsCSSClassName$($element$$72$$, this.$getMappedStyle$("colheadercell"))) ? $element$$72$$ : $element$$72$$.firstChild;
    for ($width$$20$$ = this.$getElementWidth$($columnHeader$$1$$);$resizerWidth$$ + $width$$20$$ < this.$m_currentScrollLeft$ - $colThreshold$$1$$;) {
      this.$_remove$($element$$72$$);
      $removedColumnsWidth$$ += $width$$20$$;
      $removedColumns$$ += $isColumnHeader$$ ? 1 : this.$_getAttribute$($element$$72$$, "extent");
      $resizerWidth$$ += $width$$20$$;
      $element$$72$$ = null == $firstChild$$1$$ ? $columnHeadersContainer_returnVal$$7$$.firstChild : $firstChild$$1$$.nextSibling;
      if (null == $element$$72$$) {
        return{extentChange:$removedColumns$$, widthChange:$removedColumnsWidth$$};
      }
      $columnHeader$$1$$ = ($isColumnHeader$$ = this.$m_utils$.$containsCSSClassName$($element$$72$$, this.$getMappedStyle$("colheadercell"))) ? $element$$72$$ : $element$$72$$.firstChild;
      $width$$20$$ = this.$getElementWidth$($columnHeader$$1$$);
    }
    $isColumnHeader$$ || ($columnHeadersContainer_returnVal$$7$$ = this.$removeColumnHeadersFromLeftOfContainer$($element$$72$$, $element$$72$$.firstChild, $resizerWidth$$, $colThreshold$$1$$), this.$_setAttribute$($element$$72$$, "start", this.$_getAttribute$($element$$72$$, "start") + $columnHeadersContainer_returnVal$$7$$.extentChange), this.$_setAttribute$($element$$72$$, "extent", this.$_getAttribute$($element$$72$$, "extent") - $columnHeadersContainer_returnVal$$7$$.extentChange), this.$setElementDir$($columnHeader$$1$$, 
    this.$getElementDir$($columnHeader$$1$$, "left") + $columnHeadersContainer_returnVal$$7$$.widthChange, "left"), this.$setElementWidth$($columnHeader$$1$$, this.$getElementWidth$($columnHeader$$1$$) - $columnHeadersContainer_returnVal$$7$$.widthChange), $removedColumns$$ += $columnHeadersContainer_returnVal$$7$$.extentChange, $removedColumnsWidth$$ += $columnHeadersContainer_returnVal$$7$$.widthChange);
    return{extentChange:$removedColumns$$, widthChange:$removedColumnsWidth$$};
  };
  $DvtDataGrid$$.prototype.$removeColumnsFromLeft$ = function $$DvtDataGrid$$$$$removeColumnsFromLeft$$($databody$$10_rows$$3$$) {
    var $indexToRemove$$, $j$$22_left$$8$$, $columns_row$$12$$, $i$$154_k$$9$$, $column$$5$$, $prevLeft$$;
    $databody$$10_rows$$3$$ = $databody$$10_rows$$3$$.firstChild.childNodes;
    $j$$22_left$$8$$ = $indexToRemove$$ = 0;
    if (!(1 > $databody$$10_rows$$3$$.length)) {
      $columns_row$$12$$ = $databody$$10_rows$$3$$[0].childNodes;
      for ($i$$154_k$$9$$ = 0;$i$$154_k$$9$$ < $columns_row$$12$$.length;$i$$154_k$$9$$ += 1) {
        if ($column$$5$$ = $columns_row$$12$$[$i$$154_k$$9$$], $prevLeft$$ = $j$$22_left$$8$$, $j$$22_left$$8$$ = this.$getElementDir$($column$$5$$, "left"), $j$$22_left$$8$$ > this.$m_currentScrollLeft$ - 0) {
          $indexToRemove$$ = $i$$154_k$$9$$ - 1;
          this.$m_startCol$ += $indexToRemove$$;
          this.$m_startColPixel$ = $prevLeft$$;
          break;
        }
      }
      for ($j$$22_left$$8$$ = 0;$j$$22_left$$8$$ < $databody$$10_rows$$3$$.length;$j$$22_left$$8$$ += 1) {
        for ($columns_row$$12$$ = $databody$$10_rows$$3$$[$j$$22_left$$8$$], $i$$154_k$$9$$ = 0;$i$$154_k$$9$$ < $indexToRemove$$;$i$$154_k$$9$$ += 1) {
          this.$_remove$($columns_row$$12$$.firstChild);
        }
      }
    }
  };
  $DvtDataGrid$$.prototype.$removeColumnHeadersFromRight$ = function $$DvtDataGrid$$$$$removeColumnHeadersFromRight$$($colHeader$$6_colHeaderContent$$1$$) {
    var $threshold$$;
    $colHeader$$6_colHeaderContent$$1$$ = $colHeader$$6_colHeaderContent$$1$$.firstChild;
    $threshold$$ = this.$m_currentScrollLeft$ + this.$getViewportWidth$() + 0;
    this.$m_endColHeaderPixel$ <= $threshold$$ || (this.$m_stopColumnHeaderFetch$ && (this.$m_stopColumnHeaderFetch$ = !1), this.$removeColumnHeadersFromRightOfContainer$($colHeader$$6_colHeaderContent$$1$$, $threshold$$));
  };
  $DvtDataGrid$$.prototype.$removeColumnHeadersFromRightOfContainer$ = function $$DvtDataGrid$$$$$removeColumnHeadersFromRightOfContainer$$($columnHeadersContainer$$1$$, $threshold$$1$$) {
    var $element$$73$$, $columnHeader$$2$$, $isColumnHeader$$1_returnVal$$8$$, $width$$21$$, $removedColumns$$1$$ = 0, $removedColumnsWidth$$1$$ = 0;
    $element$$73$$ = $columnHeadersContainer$$1$$.lastChild;
    $columnHeader$$2$$ = ($isColumnHeader$$1_returnVal$$8$$ = this.$m_utils$.$containsCSSClassName$($element$$73$$, this.$getMappedStyle$("colheadercell"))) ? $element$$73$$ : $element$$73$$.firstChild;
    for ($width$$21$$ = this.$getElementWidth$($columnHeader$$2$$);this.$m_endColHeaderPixel$ - $width$$21$$ > $threshold$$1$$;) {
      this.$_remove$($element$$73$$), $removedColumnsWidth$$1$$ += $width$$21$$, $removedColumns$$1$$ += $isColumnHeader$$1_returnVal$$8$$ ? 1 : this.$_getAttribute$($element$$73$$, "extent"), this.$m_endColHeaderPixel$ -= $width$$21$$, this.$m_endColHeader$ -= $isColumnHeader$$1_returnVal$$8$$ ? 1 : this.$_getAttribute$($element$$73$$, "extent"), $element$$73$$ = $columnHeadersContainer$$1$$.lastChild, $columnHeader$$2$$ = ($isColumnHeader$$1_returnVal$$8$$ = this.$m_utils$.$containsCSSClassName$($element$$73$$, 
      this.$getMappedStyle$("colheadercell"))) ? $element$$73$$ : $element$$73$$.firstChild, $width$$21$$ = this.$getElementWidth$($columnHeader$$2$$);
    }
    $isColumnHeader$$1_returnVal$$8$$ || ($isColumnHeader$$1_returnVal$$8$$ = this.$removeColumnHeadersFromRightOfContainer$($element$$73$$, $threshold$$1$$), this.$_setAttribute$($element$$73$$, "extent", this.$_getAttribute$($element$$73$$, "extent") - $isColumnHeader$$1_returnVal$$8$$.extentChange), this.$setElementWidth$($columnHeader$$2$$, this.$getElementWidth$($columnHeader$$2$$) - $isColumnHeader$$1_returnVal$$8$$.widthChange), $removedColumns$$1$$ += $isColumnHeader$$1_returnVal$$8$$.extentChange, 
    $removedColumnsWidth$$1$$ += $isColumnHeader$$1_returnVal$$8$$.widthChange);
    return{extentChange:$removedColumns$$1$$, widthChange:$removedColumnsWidth$$1$$};
  };
  $DvtDataGrid$$.prototype.$removeColumnsFromRight$ = function $$DvtDataGrid$$$$$removeColumnsFromRight$$($databody$$11_threshold$$2$$) {
    var $columns$$1$$, $column$$6_width$$22$$, $rows$$4$$, $j$$23$$, $row$$13$$;
    $rows$$4$$ = $databody$$11_threshold$$2$$.firstChild.childNodes;
    $databody$$11_threshold$$2$$ = this.$m_currentScrollLeft$ + this.$getViewportWidth$() + 0;
    if (!(this.$m_endColPixel$ <= $databody$$11_threshold$$2$$)) {
      for (this.$m_stopColumnFetch$ && (this.$m_stopColumnFetch$ = !1), $columns$$1$$ = $rows$$4$$[1], $column$$6_width$$22$$ = $columns$$1$$.lastChild, $column$$6_width$$22$$ = this.$getElementWidth$($column$$6_width$$22$$);this.$m_endColPixel$ - $column$$6_width$$22$$ > $databody$$11_threshold$$2$$;) {
        for ($j$$23$$ = 0;$j$$23$$ < $rows$$4$$.length;$j$$23$$ += 1) {
          $row$$13$$ = $rows$$4$$[$j$$23$$], this.$_remove$($row$$13$$.lastChild);
        }
        this.$m_endColPixel$ -= $column$$6_width$$22$$;
        this.$m_endCol$ -= 1;
        $column$$6_width$$22$$ = $columns$$1$$.lastChild;
        $column$$6_width$$22$$ = this.$getElementWidth$($column$$6_width$$22$$);
      }
    }
  };
  $DvtDataGrid$$.prototype.$removeRowHeadersFromTop$ = function $$DvtDataGrid$$$$$removeRowHeadersFromTop$$($returnVal$$9_rowHeader$$9_rowHeaderContent$$3$$) {
    $returnVal$$9_rowHeader$$9_rowHeaderContent$$3$$ = $returnVal$$9_rowHeader$$9_rowHeaderContent$$3$$.firstChild;
    this.$m_startRowHeaderPixel$ >= this.$m_currentScrollTop$ - 0 || ($returnVal$$9_rowHeader$$9_rowHeaderContent$$3$$ = this.$removeRowHeadersFromTopOfContainer$($returnVal$$9_rowHeader$$9_rowHeaderContent$$3$$, null, this.$m_startRowHeaderPixel$, 0), this.$m_startRowHeaderPixel$ += $returnVal$$9_rowHeader$$9_rowHeaderContent$$3$$.heightChange, this.$m_startRowHeader$ += $returnVal$$9_rowHeader$$9_rowHeaderContent$$3$$.extentChange);
  };
  $DvtDataGrid$$.prototype.$removeRowHeadersFromTopOfContainer$ = function $$DvtDataGrid$$$$$removeRowHeadersFromTopOfContainer$$($returnVal$$10_rowHeadersContainer$$, $firstChild$$2$$, $resizerHeight$$, $rowThreshold$$1$$) {
    var $element$$74$$, $rowHeader$$10$$, $isRowHeader$$, $height$$22$$, $removedRows$$ = 0, $removedRowsHeight$$ = 0;
    $element$$74$$ = null == $firstChild$$2$$ ? $returnVal$$10_rowHeadersContainer$$.firstChild : $firstChild$$2$$.nextSibling;
    if (null == $element$$74$$) {
      return{extentChange:0, heightChange:0};
    }
    $rowHeader$$10$$ = ($isRowHeader$$ = this.$m_utils$.$containsCSSClassName$($element$$74$$, this.$getMappedStyle$("rowheadercell"))) ? $element$$74$$ : $element$$74$$.firstChild;
    for ($height$$22$$ = this.$getElementHeight$($rowHeader$$10$$);$resizerHeight$$ + $height$$22$$ < this.$m_currentScrollTop$ - $rowThreshold$$1$$;) {
      this.$_remove$($element$$74$$);
      $removedRowsHeight$$ += $height$$22$$;
      $removedRows$$ += $isRowHeader$$ ? 1 : this.$_getAttribute$($element$$74$$, "extent");
      $resizerHeight$$ += $height$$22$$;
      $element$$74$$ = null == $firstChild$$2$$ ? $returnVal$$10_rowHeadersContainer$$.firstChild : $firstChild$$2$$.nextSibling;
      if (null == $element$$74$$) {
        return{extentChange:$removedRows$$, heightChange:$removedRowsHeight$$};
      }
      $rowHeader$$10$$ = ($isRowHeader$$ = this.$m_utils$.$containsCSSClassName$($element$$74$$, this.$getMappedStyle$("rowheadercell"))) ? $element$$74$$ : $element$$74$$.firstChild;
      $height$$22$$ = this.$getElementHeight$($rowHeader$$10$$);
    }
    $isRowHeader$$ || ($returnVal$$10_rowHeadersContainer$$ = this.$removeRowHeadersFromTopOfContainer$($element$$74$$, $element$$74$$.firstChild, $resizerHeight$$, $rowThreshold$$1$$), this.$_setAttribute$($element$$74$$, "start", this.$_getAttribute$($element$$74$$, "start") + $returnVal$$10_rowHeadersContainer$$.extentChange), this.$_setAttribute$($element$$74$$, "extent", this.$_getAttribute$($element$$74$$, "extent") - $returnVal$$10_rowHeadersContainer$$.extentChange), this.$setElementDir$($rowHeader$$10$$, 
    this.$getElementDir$($rowHeader$$10$$, "top") + $returnVal$$10_rowHeadersContainer$$.heightChange, "top"), this.$setElementHeight$($rowHeader$$10$$, this.$getElementHeight$($rowHeader$$10$$) - $returnVal$$10_rowHeadersContainer$$.heightChange), $removedRows$$ += $returnVal$$10_rowHeadersContainer$$.extentChange, $removedRowsHeight$$ += $returnVal$$10_rowHeadersContainer$$.heightChange);
    return{extentChange:$removedRows$$, heightChange:$removedRowsHeight$$};
  };
  $DvtDataGrid$$.prototype.$removeRowsFromTop$ = function $$DvtDataGrid$$$$$removeRowsFromTop$$($databody$$12_databodyContent$$7$$) {
    var $row$$14$$, $height$$23$$;
    $databody$$12_databodyContent$$7$$ = $databody$$12_databodyContent$$7$$.firstChild;
    if (!(this.$m_startRowPixel$ >= this.$m_currentScrollTop$ - 0)) {
      for ($row$$14$$ = $databody$$12_databodyContent$$7$$.firstChild, $height$$23$$ = this.$getElementHeight$($row$$14$$);this.$m_startRowPixel$ + $height$$23$$ < this.$m_currentScrollTop$ - 0;) {
        this.$_remove$($row$$14$$);
        this.$m_startRowPixel$ += $height$$23$$;
        this.$m_startRow$ += 1;
        $row$$14$$ = $databody$$12_databodyContent$$7$$.firstChild;
        if (null == $row$$14$$) {
          break;
        }
        $height$$23$$ = this.$getElementHeight$($row$$14$$);
      }
    }
  };
  $DvtDataGrid$$.prototype.$removeRowHeadersFromBottom$ = function $$DvtDataGrid$$$$$removeRowHeadersFromBottom$$($rowHeader$$11_rowHeaderContent$$4$$) {
    var $threshold$$3$$;
    $rowHeader$$11_rowHeaderContent$$4$$ = $rowHeader$$11_rowHeaderContent$$4$$.firstChild;
    $threshold$$3$$ = this.$m_currentScrollTop$ + this.$getViewportHeight$() + 0;
    this.$m_endRowHeaderPixel$ <= $threshold$$3$$ || (this.$m_stopRowHeaderFetch$ && (this.$m_stopRowHeaderFetch$ = !1), this.$removeRowHeadersFromBottomOfContainer$($rowHeader$$11_rowHeaderContent$$4$$, $threshold$$3$$));
  };
  $DvtDataGrid$$.prototype.$removeRowHeadersFromBottomOfContainer$ = function $$DvtDataGrid$$$$$removeRowHeadersFromBottomOfContainer$$($rowHeadersContainer$$1$$, $threshold$$4$$) {
    var $element$$75$$, $rowHeader$$12$$, $isRowHeader$$1_returnVal$$11$$, $height$$24$$, $removedRows$$1$$ = 0, $removedRowsHeight$$1$$ = 0;
    $element$$75$$ = $rowHeadersContainer$$1$$.lastChild;
    $rowHeader$$12$$ = ($isRowHeader$$1_returnVal$$11$$ = this.$m_utils$.$containsCSSClassName$($element$$75$$, this.$getMappedStyle$("rowheadercell"))) ? $element$$75$$ : $element$$75$$.firstChild;
    for ($height$$24$$ = this.$getElementHeight$($rowHeader$$12$$);this.$m_endRowHeaderPixel$ - $height$$24$$ > $threshold$$4$$;) {
      this.$_remove$($element$$75$$), $removedRowsHeight$$1$$ += $height$$24$$, $removedRows$$1$$ += $isRowHeader$$1_returnVal$$11$$ ? 1 : this.$_getAttribute$($element$$75$$, "extent"), this.$m_endRowHeaderPixel$ -= $height$$24$$, this.$m_endRowHeader$ -= $isRowHeader$$1_returnVal$$11$$ ? 1 : this.$_getAttribute$($element$$75$$, "extent"), $element$$75$$ = $rowHeadersContainer$$1$$.lastChild, $rowHeader$$12$$ = ($isRowHeader$$1_returnVal$$11$$ = this.$m_utils$.$containsCSSClassName$($element$$75$$, 
      this.$getMappedStyle$("rowheadercell"))) ? $element$$75$$ : $element$$75$$.firstChild, $height$$24$$ = this.$getElementHeight$($rowHeader$$12$$);
    }
    $isRowHeader$$1_returnVal$$11$$ || ($isRowHeader$$1_returnVal$$11$$ = this.$removeRowHeadersFromBottomOfContainer$($element$$75$$, $threshold$$4$$), this.$_setAttribute$($element$$75$$, "extent", this.$_getAttribute$($element$$75$$, "extent") - $isRowHeader$$1_returnVal$$11$$.extentChange), this.$setElementHeight$($rowHeader$$12$$, this.$getElementHeight$($rowHeader$$12$$) - $isRowHeader$$1_returnVal$$11$$.heightChange), $removedRows$$1$$ += $isRowHeader$$1_returnVal$$11$$.extentChange, $removedRowsHeight$$1$$ += 
    $isRowHeader$$1_returnVal$$11$$.heightChange);
    return{extentChange:$removedRows$$1$$, heightChange:$removedRowsHeight$$1$$};
  };
  $DvtDataGrid$$.prototype.$removeRowsFromBottom$ = function $$DvtDataGrid$$$$$removeRowsFromBottom$$($databody$$13_databodyContent$$8$$) {
    var $threshold$$5$$, $row$$15$$, $height$$25$$;
    $databody$$13_databodyContent$$8$$ = $databody$$13_databodyContent$$8$$.firstChild;
    $threshold$$5$$ = this.$m_currentScrollTop$ + this.$getViewportHeight$() + 0;
    if (!(this.$m_endRowPixel$ <= $threshold$$5$$)) {
      for (this.$m_stopRowFetch$ && (this.$m_stopRowFetch$ = !1), $row$$15$$ = $databody$$13_databodyContent$$8$$.lastChild, $height$$25$$ = this.$getElementHeight$($row$$15$$);this.$m_endRowPixel$ - $height$$25$$ > $threshold$$5$$;) {
        this.$_remove$($row$$15$$), this.$m_endRowPixel$ -= $height$$25$$, this.$m_endRow$ -= 1, $row$$15$$ = $databody$$13_databodyContent$$8$$.lastChild, $height$$25$$ = this.$getElementHeight$($row$$15$$);
      }
    }
  };
  $DvtDataGrid$$.prototype.$handleScrollerMouseDown$ = function $$DvtDataGrid$$$$$handleScrollerMouseDown$$() {
    this.$m_captureScrolling$ = !0;
  };
  $DvtDataGrid$$.prototype.$handleScrollerMouseUp$ = function $$DvtDataGrid$$$$$handleScrollerMouseUp$$() {
    this.$m_captureScrolling$ = !1;
    this.$isFetchComplete$() && this.$m_stopDatabodyScroll$ && this.$fillViewport$(this.$m_currentScrollLeft$, this.$m_currentScrollTop$);
  };
  $DvtDataGrid$$.prototype.$handleContextMenuGesture$ = function $$DvtDataGrid$$$$$handleContextMenuGesture$$($event$$111$$, $eventType$$31$$, $callback$$91$$) {
    var $capabilities_index$$108$$, $element$$76$$, $launcher$$7_target$$80$$;
    $launcher$$7_target$$80$$ = $event$$111$$.originalEvent.target;
    $element$$76$$ = this.$findCell$($launcher$$7_target$$80$$);
    "touch" === $eventType$$31$$ && null != $element$$76$$ && ($capabilities_index$$108$$ = {row:this.$getRowIndex$($element$$76$$.parentNode), column:this.$getCellIndex$($element$$76$$)}, !this.$isMultipleSelection$() || !this.$_isContainSelection$($capabilities_index$$108$$) || this.$_isDatabodyCellActive$() && $capabilities_index$$108$$.row != this.$m_active$.indexes.row && $capabilities_index$$108$$.column != this.$m_active$.indexes.column) && (this.$_isSelectionEnabled$() ? this.$handleDatabodyClickSelection$($event$$111$$.originalEvent) : 
    this.$handleDatabodyClickActive$($event$$111$$.originalEvent));
    if (!this.$m_utils$.$_isNodeEditableOrClickable$($launcher$$7_target$$80$$, this.$m_root$)) {
      if (null != $element$$76$$) {
        $capabilities_index$$108$$ = {row:this.$getRowIndex$($element$$76$$.parentNode), column:this.$getCellIndex$($element$$76$$)}, this.$isMultipleSelection$() && this.$_isContainSelection$($capabilities_index$$108$$) ? ($launcher$$7_target$$80$$ = this.$_getActiveElement$(), $capabilities_index$$108$$ = this.$_isDatabodyCellActive$() ? "keyboard" === $eventType$$31$$ ? this.$_getCellCapability$($launcher$$7_target$$80$$) : this.$_getCellCapability$($launcher$$7_target$$80$$, $element$$76$$) : 
        this.$_getHeaderCapability$($launcher$$7_target$$80$$, $element$$76$$)) : ($launcher$$7_target$$80$$ = $element$$76$$, $capabilities_index$$108$$ = this.$_getCellCapability$($launcher$$7_target$$80$$));
      } else {
        $element$$76$$ = this.$findHeader$($launcher$$7_target$$80$$);
        if (null == $element$$76$$) {
          return;
        }
        $capabilities_index$$108$$ = this.$_getHeaderCapability$($element$$76$$);
        $launcher$$7_target$$80$$ = $element$$76$$;
      }
      $callback$$91$$.call(null, {capabilities:$capabilities_index$$108$$, launcher:$launcher$$7_target$$80$$}, $event$$111$$, $eventType$$31$$);
    }
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.handleContextMenuGesture", $DvtDataGrid$$.prototype.$handleContextMenuGesture$, void 0);
  $DvtDataGrid$$.prototype.$_getCellCapability$ = function $$DvtDataGrid$$$$$_getCellCapability$$($cell$$4$$, $actualCell$$) {
    var $capabilities$$1$$, $rowHeader$$13$$, $columnHeader$$3_sorted$$, $resizable$$, $sortable$$, $sameColumn$$ = !0, $sameRow$$ = !0;
    $capabilities$$1$$ = {resize:"disable", resizeWidth:"disable", resizeHeight:"disable", sortRow:"disable", sortCol:"disable", cut:"disable", paste:"disable", sortColAsc:"disable", sortColDsc:"disable"};
    if (null != $actualCell$$ && ($sameColumn$$ = this.$getCellIndex$($cell$$4$$) === this.$getCellIndex$($actualCell$$), $sameRow$$ = $cell$$4$$.parentNode === $actualCell$$.parentNode, !1 === $sameRow$$ && !1 === $sameColumn$$)) {
      return $capabilities$$1$$;
    }
    $rowHeader$$13$$ = this.$getHeaderFromCell$($cell$$4$$, "row");
    $columnHeader$$3_sorted$$ = this.$getHeaderFromCell$($cell$$4$$, "column");
    $resizable$$ = this.$m_resources$.$getMappedAttribute$("resizable");
    $sortable$$ = this.$m_resources$.$getMappedAttribute$("sortable");
    null != $columnHeader$$3_sorted$$ && $sameColumn$$ && ("true" === $columnHeader$$3_sorted$$.getAttribute($resizable$$) && ($capabilities$$1$$.resize = "enable", $capabilities$$1$$.resizeWidth = "enable"), "true" === $columnHeader$$3_sorted$$.getAttribute($sortable$$) && ($capabilities$$1$$.sortCol = "enable", $capabilities$$1$$.sortColAsc = "enable", $capabilities$$1$$.sortColDsc = "enable", $columnHeader$$3_sorted$$ = $columnHeader$$3_sorted$$.getAttribute(this.$m_resources$.$getMappedAttribute$("sortDir")), 
    "ascending" === $columnHeader$$3_sorted$$ ? $capabilities$$1$$.sortColAsc = "disable" : "descending" === $columnHeader$$3_sorted$$ && ($capabilities$$1$$.sortColDsc = "disable")));
    $sameRow$$ && (this.$_isMoveEnabled$() && ($capabilities$$1$$.cut = "enable", $capabilities$$1$$.paste = "enable"), null != $rowHeader$$13$$ && ("true" === $rowHeader$$13$$.getAttribute($resizable$$) && ($capabilities$$1$$.resize = "enable", $capabilities$$1$$.resizeHeight = "enable"), "true" === $rowHeader$$13$$.getAttribute($sortable$$) && ($capabilities$$1$$.sortRow = "enable")));
    return $capabilities$$1$$;
  };
  $DvtDataGrid$$.prototype.$_getHeaderCapability$ = function $$DvtDataGrid$$$$$_getHeaderCapability$$($header$$6$$, $actualCell$$1$$) {
    var $capabilities$$2$$, $resizable$$1_sorted$$1$$, $sortable$$1$$, $sameColumn$$1$$ = !0, $sameRow$$1$$ = !0;
    $capabilities$$2$$ = {resize:"disable", resizeWidth:"disable", resizeHeight:"disable", sortRow:"disable", sortCol:"disable", cut:"disable", paste:"disable", sortColAsc:"disable", sortColDsc:"disable"};
    if (null != $actualCell$$1$$ && ($sameColumn$$1$$ = this.$getHeaderCellIndex$($header$$6$$) === this.$getCellIndex$($actualCell$$1$$), $sameRow$$1$$ = this.$_getKey$($header$$6$$) === this.$_getKey$($actualCell$$1$$.parentNode), !1 === $sameRow$$1$$ && !1 === $sameColumn$$1$$)) {
      return $capabilities$$2$$;
    }
    $resizable$$1_sorted$$1$$ = this.$m_resources$.$getMappedAttribute$("resizable");
    $sortable$$1$$ = this.$m_resources$.$getMappedAttribute$("sortable");
    null !== $header$$6$$ && (this.$m_utils$.$containsCSSClassName$($header$$6$$, this.$getMappedStyle$("colheadercell")) && $sameColumn$$1$$ ? ("true" === $header$$6$$.getAttribute($resizable$$1_sorted$$1$$) && ($capabilities$$2$$.resizeWidth = "enable", $capabilities$$2$$.resize = "enable"), $capabilities$$2$$.resizeHeight = this.$m_options$.$isResizable$("column", "height"), "true" === $header$$6$$.getAttribute($sortable$$1$$) && ($capabilities$$2$$.sortCol = "enable", $capabilities$$2$$.sortColAsc = 
    "enable", $capabilities$$2$$.sortColDsc = "enable", $resizable$$1_sorted$$1$$ = $header$$6$$.getAttribute(this.$m_resources$.$getMappedAttribute$("sortDir")), "ascending" === $resizable$$1_sorted$$1$$ ? $capabilities$$2$$.sortColAsc = "disable" : "descending" === $resizable$$1_sorted$$1$$ && ($capabilities$$2$$.sortColDsc = "disable"))) : $sameRow$$1$$ && (this.$_isMoveEnabled$() && ($capabilities$$2$$.cut = "enable", $capabilities$$2$$.paste = "enable"), "true" === $header$$6$$.getAttribute($resizable$$1_sorted$$1$$) && 
    ($capabilities$$2$$.resize = "enable", $capabilities$$2$$.resizeHeight = "enable"), $capabilities$$2$$.resizeWidth = this.$m_options$.$isResizable$("row", "width"), "true" === $header$$6$$.getAttribute($sortable$$1$$) && ($capabilities$$2$$.sortRow = "enable")));
    $capabilities$$2$$.resize = "enable" === $capabilities$$2$$.resizeHeight || "enable" === $capabilities$$2$$.resizeWidth ? "enable" : "disable";
    return $capabilities$$2$$;
  };
  $DvtDataGrid$$.prototype.$handleContextMenuReturn$ = function $$DvtDataGrid$$$$$handleContextMenuReturn$$($event$$112$$, $direction$$4_id$$17$$, $value$$182$$) {
    var $target$$81$$;
    null != this.$m_active$ && ($target$$81$$ = this.$_getActiveElement$());
    $direction$$4_id$$17$$ === this.$m_resources$.$getMappedCommand$("resizeHeight") || $direction$$4_id$$17$$ === this.$m_resources$.$getMappedCommand$("resizeWidth") ? this.$isResizeEnabled$() && this.$handleContextMenuResize$($event$$112$$, $direction$$4_id$$17$$, $value$$182$$, $target$$81$$) : $direction$$4_id$$17$$ === this.$m_resources$.$getMappedCommand$("sortColAsc") || $direction$$4_id$$17$$ === this.$m_resources$.$getMappedCommand$("sortColDsc") ? ($direction$$4_id$$17$$ = $direction$$4_id$$17$$ === 
    this.$m_resources$.$getMappedCommand$("sortColAsc") ? "ascending" : "descending", this.$m_utils$.$containsCSSClassName$($target$$81$$, this.$getMappedStyle$("cell")) && ($target$$81$$ = this.$getHeaderFromCell$($target$$81$$, "column")), this.$_isDOMElementSortable$($target$$81$$) && this.$_handleCellSort$($event$$112$$, $direction$$4_id$$17$$, $target$$81$$)) : $direction$$4_id$$17$$ === this.$m_resources$.$getMappedCommand$("sortRowAsc") || $direction$$4_id$$17$$ === this.$m_resources$.$getMappedCommand$("sortRowDsc") ? 
    ($direction$$4_id$$17$$ = $direction$$4_id$$17$$ === this.$m_resources$.$getMappedCommand$("sortRowAsc") ? "ascending" : "descending", this.$m_utils$.$containsCSSClassName$($target$$81$$, this.$getMappedStyle$("cell")) && ($target$$81$$ = this.$getHeaderFromCell$($target$$81$$, "row")), this.$_isDOMElementSortable$($target$$81$$) && this.$_handleCellSort$($event$$112$$, $direction$$4_id$$17$$, $target$$81$$)) : $direction$$4_id$$17$$ === this.$m_resources$.$getMappedCommand$("cut") ? this.$_handleCut$($event$$112$$, 
    $target$$81$$) : $direction$$4_id$$17$$ === this.$m_resources$.$getMappedCommand$("paste") ? this.$_handlePaste$($event$$112$$, $target$$81$$) : $direction$$4_id$$17$$ === this.$m_resources$.$getMappedCommand$("discontiguousSelection") && this.$setDiscontiguousSelectionMode$($value$$182$$);
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.handleContextMenuReturn", $DvtDataGrid$$.prototype.$handleContextMenuReturn$, void 0);
  $DvtDataGrid$$.prototype.$_isSortEnabled$ = function $$DvtDataGrid$$$$$_isSortEnabled$$($axis$$11$$, $headerContext$$2$$) {
    var $capability$$, $sortable$$2$$;
    $capability$$ = this.$m_dataSource$.getCapability("sort");
    $sortable$$2$$ = this.$m_options$.$isSortable$($axis$$11$$, $headerContext$$2$$);
    return "enable" !== $sortable$$2$$ && "auto" !== $sortable$$2$$ || "full" !== $capability$$ && $capability$$ !== $axis$$11$$ ? !1 : !0;
  };
  $DvtDataGrid$$.prototype.$_isDOMElementSortable$ = function $$DvtDataGrid$$$$$_isDOMElementSortable$$($element$$77_header$$7$$) {
    $element$$77_header$$7$$ = this.$findHeader$($element$$77_header$$7$$);
    return null == $element$$77_header$$7$$ ? !1 : "true" == $element$$77_header$$7$$.getAttribute(this.$m_resources$.$getMappedAttribute$("sortable"));
  };
  $DvtDataGrid$$.prototype.$_isSelectionEnabled$ = function $$DvtDataGrid$$$$$_isSelectionEnabled$$() {
    return "none" != this.$m_options$.$getSelectionCardinality$();
  };
  $DvtDataGrid$$.prototype.$isMultipleSelection$ = function $$DvtDataGrid$$$$$isMultipleSelection$$() {
    return "multiple" == this.$m_options$.$getSelectionCardinality$();
  };
  $DvtDataGrid$$.prototype.$isResizeEnabled$ = function $$DvtDataGrid$$$$$isResizeEnabled$$() {
    var $row$$16$$ = this.$m_options$.$isResizable$("row"), $column$$7$$ = this.$m_options$.$isResizable$("column");
    return "disable" !== $row$$16$$.width || "disable" !== $row$$16$$.height || "disable" !== $column$$7$$.width || "disable" !== $column$$7$$.height;
  };
  $DvtDataGrid$$.prototype.$_isHeaderResizeEnabled$ = function $$DvtDataGrid$$$$$_isHeaderResizeEnabled$$($axis$$12$$, $headerContext$$3$$) {
    var $resizable$$2$$;
    return "column" == $axis$$12$$ ? ($resizable$$2$$ = this.$m_options$.$isResizable$($axis$$12$$, "width", $headerContext$$3$$), "enable" == $resizable$$2$$ ? !0 : !1) : "row" == $axis$$12$$ ? ($resizable$$2$$ = this.$m_options$.$isResizable$($axis$$12$$, "height", $headerContext$$3$$), "enable" == $resizable$$2$$ ? !0 : !1) : !1;
  };
  $DvtDataGrid$$.prototype.$handleMouseMove$ = function $$DvtDataGrid$$$$$handleMouseMove$$($event$$113$$) {
    this.$isResizeEnabled$() && !1 == this.$m_databodyDragState$ && this.$handleResize$($event$$113$$);
  };
  $DvtDataGrid$$.prototype.$handleRowHeaderMouseMove$ = function $$DvtDataGrid$$$$$handleRowHeaderMouseMove$$($event$$114$$) {
    this.$m_databodyMove$ && this.$_handleMove$($event$$114$$);
  };
  $DvtDataGrid$$.prototype.$handleHeaderMouseDown$ = function $$DvtDataGrid$$$$$handleHeaderMouseDown$$($event$$115$$) {
    var $row$$17_target$$82$$, $processed$$;
    this.$_exitActionableMode$();
    $row$$17_target$$82$$ = $event$$115$$.target;
    if (0 === $event$$115$$.button) {
      if ((this.$m_utils$.$containsCSSClassName$($row$$17_target$$82$$, this.$getMappedStyle$("sortascending")) || this.$m_utils$.$containsCSSClassName$($row$$17_target$$82$$, this.$getMappedStyle$("sortdescending"))) && this.$_isDOMElementSortable$($row$$17_target$$82$$)) {
        $event$$115$$.preventDefault();
        this.$_handleSortIconMouseDown$($row$$17_target$$82$$);
        return;
      }
      this.$isResizeEnabled$() && ($processed$$ = this.$handleResizeMouseDown$($event$$115$$));
      $row$$17_target$$82$$ = this.$findRow$($row$$17_target$$82$$);
      !this.$m_isResizing$ && this.$_isMoveOnRowEnabled$($row$$17_target$$82$$) && (this.$m_databodyMove$ = !0, this.$m_currentX$ = $event$$115$$.pageX, this.$m_currentY$ = $event$$115$$.pageY, $processed$$ = !0);
    }
    this.$m_isResizing$ || (this.$m_root$.contains(document.activeElement) && document.activeElement !== this.$m_root$ || (this.$m_externalFocus$ = !0), this.$handleHeaderClickActive$($event$$115$$));
    !0 === $processed$$ && $event$$115$$.preventDefault();
  };
  $DvtDataGrid$$.prototype.$handleMouseUp$ = function $$DvtDataGrid$$$$$handleMouseUp$$($event$$116$$) {
    this.$m_databodyMove$ && null != this.$m_moveRow$ ? this.$_handleMoveMouseUp$(!1) : this.$isResizeEnabled$() && this.$handleResizeMouseUp$($event$$116$$);
    this.$m_databodyMove$ = !1;
  };
  $DvtDataGrid$$.prototype.$handleHeaderMouseOver$ = function $$DvtDataGrid$$$$$handleHeaderMouseOver$$($event$$117$$) {
    var $target$$83$$ = $event$$117$$.target;
    this.$m_utils$.$addCSSClassName$(this.$findHeader$($target$$83$$), this.$getMappedStyle$("hover"));
    this.$_isDOMElementSortable$($target$$83$$) && this.$_handleSortMouseOver$($event$$117$$);
  };
  $DvtDataGrid$$.prototype.$handleHeaderMouseOut$ = function $$DvtDataGrid$$$$$handleHeaderMouseOut$$($event$$118$$) {
    var $target$$84$$ = $event$$118$$.target;
    this.$m_utils$.$removeCSSClassName$(this.$findHeader$($target$$84$$), this.$getMappedStyle$("hover"));
    this.$_isDOMElementSortable$($target$$84$$) && this.$_handleSortMouseOut$($event$$118$$);
  };
  $DvtDataGrid$$.prototype.$handleHeaderMouseUp$ = function $$DvtDataGrid$$$$$handleHeaderMouseUp$$() {
    this.$m_databodyMove$ && null != this.$m_moveRow$ && this.$_handleMoveMouseUp$(!0);
  };
  $DvtDataGrid$$.prototype.$handleHeaderClick$ = function $$DvtDataGrid$$$$$handleHeaderClick$$($event$$120$$) {
    var $target$$85$$ = $event$$120$$.target;
    (this.$m_utils$.$containsCSSClassName$($target$$85$$, this.$getMappedStyle$("sortascending")) || this.$m_utils$.$containsCSSClassName$($target$$85$$, this.$getMappedStyle$("sortdescending"))) && this.$_isDOMElementSortable$($target$$85$$) && (this.$_handleHeaderSort$($event$$120$$), $event$$120$$.preventDefault());
  };
  $DvtDataGrid$$.prototype.$handleDatabodyMouseDown$ = function $$DvtDataGrid$$$$$handleDatabodyMouseDown$$($event$$121$$) {
    var $target$$86$$;
    this.$_exitActionableMode$();
    0 === $event$$121$$.button && ($target$$86$$ = $event$$121$$.target, this.$_isMoveOnRowEnabled$(this.find($target$$86$$, "row")) && (this.$m_databodyMove$ = !0, this.$m_currentX$ = $event$$121$$.pageX, this.$m_currentY$ = $event$$121$$.pageY));
    this.$m_root$.contains(document.activeElement) && document.activeElement !== this.$m_root$ || (this.$m_externalFocus$ = !0);
    this.$_isSelectionEnabled$() ? (this.$handleDatabodyClickSelection$($event$$121$$), this.$isMultipleSelection$() && 0 === $event$$121$$.button && (this.$m_databodyDragState$ = !0)) : this.$handleDatabodyClickActive$($event$$121$$);
  };
  $DvtDataGrid$$.prototype.$handleDatabodyMouseOut$ = function $$DvtDataGrid$$$$$handleDatabodyMouseOut$$($event$$122_row$$18$$) {
    var $selectionMode$$, $target$$87$$;
    this.$m_databodyMove$ || ($selectionMode$$ = this.$m_options$.$getSelectionMode$(), $target$$87$$ = $event$$122_row$$18$$.target, $event$$122_row$$18$$ = this.$findRow$($target$$87$$), "cell" === $selectionMode$$ ? this.$m_utils$.$removeCSSClassName$(this.$findCell$($target$$87$$), this.$getMappedStyle$("hover")) : "row" === $selectionMode$$ && this.$m_utils$.$removeCSSClassName$($event$$122_row$$18$$, this.$getMappedStyle$("hover")));
  };
  $DvtDataGrid$$.prototype.$handleDatabodyMouseOver$ = function $$DvtDataGrid$$$$$handleDatabodyMouseOver$$($event$$123_row$$19$$) {
    var $selectionMode$$1$$, $target$$88$$;
    this.$m_databodyMove$ || ($selectionMode$$1$$ = this.$m_options$.$getSelectionMode$(), $target$$88$$ = $event$$123_row$$19$$.target, $event$$123_row$$19$$ = this.$findRow$($target$$88$$), "cell" === $selectionMode$$1$$ ? this.$m_utils$.$addCSSClassName$(this.$findCell$($target$$88$$), this.$getMappedStyle$("hover")) : "row" === $selectionMode$$1$$ && this.$m_utils$.$addCSSClassName$($event$$123_row$$19$$, this.$getMappedStyle$("hover")));
  };
  $DvtDataGrid$$.prototype.$handleDatabodyMouseMove$ = function $$DvtDataGrid$$$$$handleDatabodyMouseMove$$($event$$124$$) {
    this.$m_databodyMove$ ? this.$_handleMove$($event$$124$$) : this.$m_databodyDragState$ && this.$handleDatabodySelectionDrag$($event$$124$$);
  };
  $DvtDataGrid$$.prototype.$handleDatabodyMouseUp$ = function $$DvtDataGrid$$$$$handleDatabodyMouseUp$$() {
    this.$m_databodyDragState$ = !1;
    this.$m_databodyMove$ && null != this.$m_moveRow$ && this.$_handleMoveMouseUp$(!0);
  };
  $DvtDataGrid$$.prototype.$handleDatabodyKeyDown$ = function $$DvtDataGrid$$$$$handleDatabodyKeyDown$$($event$$126$$) {
    var $cell$$5_processed$$1$$;
    if (!$event$$126$$.defaultPrevented && ($event$$126$$.keyCode !== $DvtDataGrid$$.$TAB_KEY$ || this.$_isSelectionEnabled$() && this.$isActionableMode$())) {
      if (null != this.$m_active$ && "header" == this.$m_active$.type) {
        this.$_fireKeyDownEvent$($event$$126$$), $cell$$5_processed$$1$$ = this.$handleHeaderKeyDown$($event$$126$$);
      } else {
        if (this.$_isSelectionEnabled$() && null != this.$m_selectionFrontier$ && ($cell$$5_processed$$1$$ = this.$getElementsInRange$(this.createRange(this.$m_selectionFrontier$)), null == $cell$$5_processed$$1$$)) {
          return;
        }
        this.$_fireKeyDownEvent$($event$$126$$);
        ($cell$$5_processed$$1$$ = this.$_handleCutPasteKeydown$($event$$126$$)) || ($cell$$5_processed$$1$$ = this.$_isSelectionEnabled$() ? this.$handleSelectionKeyDown$($event$$126$$) : this.$handleActiveKeyDown$($event$$126$$));
      }
      !0 === $cell$$5_processed$$1$$ && $event$$126$$.preventDefault();
    }
  };
  $DvtDataGrid$$.prototype.$_fireKeyDownEvent$ = function $$DvtDataGrid$$$$$_fireKeyDownEvent$$($event$$127$$) {
    var $cell$$6_header$$8_rowKey$$1$$, $target$$89$$;
    $target$$89$$ = $event$$127$$.target;
    $cell$$6_header$$8_rowKey$$1$$ = this.$findCell$($target$$89$$);
    if (null == $cell$$6_header$$8_rowKey$$1$$) {
      $cell$$6_header$$8_rowKey$$1$$ = this.$findHeader$($target$$89$$);
      if (null == $cell$$6_header$$8_rowKey$$1$$) {
        return;
      }
      $cell$$6_header$$8_rowKey$$1$$ = this.$_getKey$($cell$$6_header$$8_rowKey$$1$$);
    } else {
      $cell$$6_header$$8_rowKey$$1$$ = this.$_getKey$($cell$$6_header$$8_rowKey$$1$$.parentNode);
    }
    this.fireEvent("keydown", {event:$event$$127$$, ui:{rowKey:$cell$$6_header$$8_rowKey$$1$$}});
  };
  $DvtDataGrid$$.prototype.$findPos$ = function $$DvtDataGrid$$$$$findPos$$($element$$78$$) {
    var $parentPos$$, $transform$$;
    return $element$$78$$ ? ($parentPos$$ = this.$findPos$($element$$78$$.offsetParent), $transform$$ = this.$getElementTranslationXYZ$($element$$78$$.offsetParent), [parseInt($parentPos$$[0], 10) + parseInt($element$$78$$.offsetLeft, 10) + $transform$$[0], parseInt($parentPos$$[1], 10) + parseInt($element$$78$$.offsetTop, 10) + $transform$$[1]]) : [0, 0];
  };
  $DvtDataGrid$$.prototype.$getElementTranslationXYZ$ = function $$DvtDataGrid$$$$$getElementTranslationXYZ$$($cs_element$$79_transform$$1_transformX$$) {
    var $matrixArray_transformZ$$, $transformY$$;
    return $cs_element$$79_transform$$1_transformX$$ ? ($cs_element$$79_transform$$1_transformX$$ = document.defaultView.getComputedStyle($cs_element$$79_transform$$1_transformX$$, null), $cs_element$$79_transform$$1_transformX$$ = $cs_element$$79_transform$$1_transformX$$.getPropertyValue("-webkit-transform") || $cs_element$$79_transform$$1_transformX$$.getPropertyValue("-moz-transform") || $cs_element$$79_transform$$1_transformX$$.getPropertyValue("-ms-transform") || $cs_element$$79_transform$$1_transformX$$.getPropertyValue("-o-transform") || 
    $cs_element$$79_transform$$1_transformX$$.getPropertyValue("transform"), $matrixArray_transformZ$$ = $cs_element$$79_transform$$1_transformX$$.substr(7, $cs_element$$79_transform$$1_transformX$$.length - 8).split(", "), $cs_element$$79_transform$$1_transformX$$ = isNaN(parseInt($matrixArray_transformZ$$[4], 10)) ? 0 : parseInt($matrixArray_transformZ$$[4], 10), $transformY$$ = isNaN(parseInt($matrixArray_transformZ$$[5], 10)) ? 0 : parseInt($matrixArray_transformZ$$[5], 10), $matrixArray_transformZ$$ = 
    isNaN(parseInt($matrixArray_transformZ$$[6], 10)) ? 0 : parseInt($matrixArray_transformZ$$[6], 10), [$cs_element$$79_transform$$1_transformX$$, $transformY$$, $matrixArray_transformZ$$]) : [0, 0, 0];
  };
  $DvtDataGrid$$.prototype.$handleDatabodyMouseWheel$ = function $$DvtDataGrid$$$$$handleDatabodyMouseWheel$$($delta$$3_event$$128$$) {
    $delta$$3_event$$128$$.preventDefault();
    $delta$$3_event$$128$$ = this.$m_utils$.$getMousewheelScrollDelta$($delta$$3_event$$128$$);
    this.$scrollDelta$($delta$$3_event$$128$$.deltaX, $delta$$3_event$$128$$.deltaY);
  };
  $DvtDataGrid$$.prototype.$handleTouchStart$ = function $$DvtDataGrid$$$$$handleTouchStart$$($dir$$8_event$$129$$) {
    var $fingerCount_selection$$1$$, $target$$90$$;
    $fingerCount_selection$$1$$ = $dir$$8_event$$129$$.touches.length;
    $target$$90$$ = $dir$$8_event$$129$$.touches[0].target;
    if (1 == $fingerCount_selection$$1$$) {
      this.$m_startX$ = $dir$$8_event$$129$$.touches[0].pageX;
      this.$m_startY$ = $dir$$8_event$$129$$.touches[0].pageY;
      this.$m_currentX$ = this.$m_startX$;
      this.$m_currentY$ = this.$m_startY$;
      this.$m_prevX$ = this.$m_startX$;
      this.$m_prevY$ = this.$m_startY$;
      this.$m_startTime$ = (new Date).getTime();
      this.$m_touchActive$ = !0;
      if (this.$isMultipleSelection$()) {
        if ($target$$90$$.className === this.$getMappedStyle$("selectaffordancetop") || $target$$90$$.className === this.$getMappedStyle$("selectaffordancebottom")) {
          $target$$90$$ = $target$$90$$.parentNode;
        }
        if ($dir$$8_event$$129$$ = $target$$90$$ === this.$m_topSelectIconContainer$ ? "top" : $target$$90$$ === this.$m_bottomSelectIconContainer$ ? "bottom" : null) {
          this.$m_touchMultipleSelect$ = !0, $fingerCount_selection$$1$$ = this.$GetSelection$(), this.$m_touchSelectAnchor$ = "top" === $dir$$8_event$$129$$ ? $fingerCount_selection$$1$$[$fingerCount_selection$$1$$.length - 1].endIndex : $fingerCount_selection$$1$$[$fingerCount_selection$$1$$.length - 1].startIndex;
        }
      }
      !this.$m_touchMultipleSelect$ && this.$_isMoveOnRowEnabled$(this.find($target$$90$$, "row")) && (this.$m_databodyMove$ = !0);
    } else {
      this.$handleTouchCancel$();
    }
  };
  $DvtDataGrid$$.prototype.$handleTouchMove$ = function $$DvtDataGrid$$$$$handleTouchMove$$($event$$130$$) {
    var $diffX$$, $diffY$$;
    this.$m_touchActive$ ? ($event$$130$$.preventDefault(), this.$m_currentX$ = $event$$130$$.touches[0].pageX, this.$m_currentY$ = $event$$130$$.touches[0].pageY, $diffX$$ = this.$m_currentX$ - this.$m_prevX$, $diffY$$ = this.$m_currentY$ - this.$m_prevY$, this.$m_resources$.$isRTLMode$() && ($diffX$$ *= -1), this.$m_touchMultipleSelect$ ? this.$handleDatabodySelectionDrag$($event$$130$$) : this.$m_databodyMove$ ? (this.$_removeTouchSelectionAffordance$(), this.$_handleMove$($event$$130$$)) : this.$_handleNonSwipeScroll$($diffX$$, 
    $diffY$$), this.$m_prevX$ = this.$m_currentX$, this.$m_prevY$ = this.$m_currentY$) : this.$handleTouchCancel$();
  };
  $DvtDataGrid$$.prototype.$handleTouchEnd$ = function $$DvtDataGrid$$$$$handleTouchEnd$$($event$$131$$) {
    var $duration$$12$$;
    if (this.$m_touchActive$ && !$event$$131$$.defaultPrevented) {
      if (this.$m_touchMultipleSelect$) {
        $event$$131$$.preventDefault(), this.$m_touchMultipleSelect$ = !1;
      } else {
        $duration$$12$$ = (new Date).getTime() - this.$m_startTime$;
        if (this.$m_currentX$ == this.$m_startX$ && this.$m_currentY$ == this.$m_startY$) {
          this.$m_databodyMove$ = !1;
          this.$_isSelectionEnabled$() && $duration$$12$$ < $DvtDataGrid$$.$CONTEXT_MENU_TAP_HOLD_DURATION$ ? this.$handleDatabodyClickSelection$($event$$131$$) : this.$handleDatabodyClickActive$($event$$131$$);
          return;
        }
        if (this.$m_databodyMove$) {
          $event$$131$$.preventDefault();
          this.$m_databodyMove$ = !1;
          this.$_handleMoveMouseUp$(!0);
          return;
        }
        this.$_handleSwipe$($event$$131$$);
      }
    }
    this.$handleTouchCancel$();
  };
  $DvtDataGrid$$.prototype.$_calculateMomentum$ = function $$DvtDataGrid$$$$$_calculateMomentum$$($current$$4_destination_distance$$, $duration$$13_start$$34$$, $speed_time$$1$$, $currentScroll$$, $maxScroll$$, $rtl$$1$$) {
    var $overScroll$$;
    $current$$4_destination_distance$$ -= $duration$$13_start$$34$$;
    $speed_time$$1$$ = Math.abs($current$$4_destination_distance$$) / $speed_time$$1$$;
    $current$$4_destination_distance$$ = $speed_time$$1$$ * $speed_time$$1$$ / (2 * $DvtDataGrid$$.$DECELERATION_FACTOR$) * (0 > $current$$4_destination_distance$$ ? -1 : 1);
    $duration$$13_start$$34$$ = $speed_time$$1$$ / $DvtDataGrid$$.$DECELERATION_FACTOR$;
    $rtl$$1$$ && ($current$$4_destination_distance$$ *= -1);
    $currentScroll$$ - $current$$4_destination_distance$$ > $maxScroll$$ ? ($overScroll$$ = Math.max(-1 * $DvtDataGrid$$.$MAX_OVERSCROLL_PIXEL$, $current$$4_destination_distance$$), $current$$4_destination_distance$$ = $currentScroll$$ - $maxScroll$$, $duration$$13_start$$34$$ = ($maxScroll$$ - $currentScroll$$) / $speed_time$$1$$) : 0 > $currentScroll$$ - $current$$4_destination_distance$$ && ($overScroll$$ = Math.min($DvtDataGrid$$.$MAX_OVERSCROLL_PIXEL$, $current$$4_destination_distance$$), $current$$4_destination_distance$$ = 
    $currentScroll$$, $duration$$13_start$$34$$ = $currentScroll$$ / $speed_time$$1$$);
    return{$destination$:Math.round($current$$4_destination_distance$$), duration:Math.max(100, $duration$$13_start$$34$$), $overScroll$:$overScroll$$};
  };
  $DvtDataGrid$$.prototype.$handleTouchCancel$ = function $$DvtDataGrid$$$$$handleTouchCancel$$() {
    this.$m_databodyMove$ && (this.$_handleMoveMouseUp$(!1), this.$m_databodyMove$ = !1);
    this.$m_touchSelectAnchor$ = null;
    this.$m_touchActive$ = this.$m_touchMultipleSelect$ = !1;
    this.$m_startTime$ = this.$m_currentY$ = this.$m_currentX$ = this.$m_prevY$ = this.$m_prevX$ = this.$m_startY$ = this.$m_startX$ = 0;
  };
  $DvtDataGrid$$.prototype.$handleHeaderTouchStart$ = function $$DvtDataGrid$$$$$handleHeaderTouchStart$$($event$$133$$) {
    var $header$$9$$, $fingerCount$$1$$, $target$$91$$;
    this.$m_touchStart$ = (new Date).getTime();
    $fingerCount$$1$$ = $event$$133$$.touches.length;
    $target$$91$$ = $event$$133$$.target;
    1 == $fingerCount$$1$$ ? (this.$m_startX$ = $event$$133$$.touches[0].pageX, this.$m_startY$ = $event$$133$$.touches[0].pageY, this.$m_currentX$ = this.$m_startX$, this.$m_currentY$ = this.$m_startY$, this.$m_prevX$ = this.$m_startX$, this.$m_prevY$ = this.$m_startY$, this.$m_touchActive$ = !0, $header$$9$$ = this.$findHeader$($target$$91$$), setTimeout(function() {
      this.$m_touchActive$ && !this.$m_isResizing$ && this.$m_currentX$ == this.$m_startX$ && this.$m_currentY$ == this.$m_startY$ && (this.$_removeTouchSelectionAffordance$(), this.$_setActive$($header$$9$$, $event$$133$$, !0));
    }.bind(this), $DvtDataGrid$$.$HEADER_TAP_SHORT_HOLD_DURATION$), this.$isResizeEnabled$() && (this.$handleResize$($event$$133$$), this.$handleResizeMouseDown$($event$$133$$)), !this.$m_isResizing$ && this.$_isMoveOnRowEnabled$(this.$findRow$($target$$91$$)) && (this.$m_databodyMove$ = !0)) : this.$handleHeaderTouchCancel$();
  };
  $DvtDataGrid$$.prototype.$handleHeaderTouchMove$ = function $$DvtDataGrid$$$$$handleHeaderTouchMove$$($event$$134_header$$10_target$$92$$) {
    var $diffX$$1$$, $diffY$$1$$;
    this.$m_touchActive$ ? ($event$$134_header$$10_target$$92$$.preventDefault(), this.$m_currentX$ = $event$$134_header$$10_target$$92$$.touches[0].pageX, this.$m_currentY$ = $event$$134_header$$10_target$$92$$.touches[0].pageY, $diffX$$1$$ = this.$m_currentX$ - this.$m_prevX$, $diffY$$1$$ = this.$m_currentY$ - this.$m_prevY$, this.$m_isResizing$ && this.$isResizeEnabled$() ? this.$handleResize$($event$$134_header$$10_target$$92$$) : this.$m_databodyMove$ ? (this.$_removeTouchSelectionAffordance$(), 
    this.$_handleMove$($event$$134_header$$10_target$$92$$)) : ($event$$134_header$$10_target$$92$$ = $event$$134_header$$10_target$$92$$.target, $event$$134_header$$10_target$$92$$ = this.$findHeader$($event$$134_header$$10_target$$92$$), "column" == this.$getHeaderCellAxis$($event$$134_header$$10_target$$92$$) ? this.$_handleNonSwipeScroll$($diffX$$1$$, 0) : this.$_handleNonSwipeScroll$(0, $diffY$$1$$)), this.$m_prevX$ = this.$m_currentX$, this.$m_prevY$ = this.$m_currentY$) : this.$handleTouchCancel$();
  };
  $DvtDataGrid$$.prototype.$handleHeaderTouchEnd$ = function $$DvtDataGrid$$$$$handleHeaderTouchEnd$$($event$$135$$) {
    var $header$$11_touchLength$$, $tapMax$$ = $DvtDataGrid$$.$HEADER_TAP_SHORT_HOLD_DURATION$, $target$$93$$;
    $header$$11_touchLength$$ = (new Date).getTime() - this.$m_touchStart$;
    this.$m_touchActive$ && !$event$$135$$.defaultPrevented && ($target$$93$$ = $event$$135$$.target, this.$m_isResizing$ && this.$isResizeEnabled$() ? (this.$handleResizeMouseUp$($event$$135$$), this.$m_currentX$ != this.$m_startX$ && this.$m_currentY$ != this.$m_startY$ && $event$$135$$.preventDefault()) : this.$m_currentX$ == this.$m_startX$ && this.$m_currentY$ == this.$m_startY$ && $header$$11_touchLength$$ < $tapMax$$ ? this.$_isDOMElementSortable$($target$$93$$) && ($event$$135$$.preventDefault(), 
    this.$_handleHeaderSort$($event$$135$$), this.$_removeTouchSelectionAffordance$()) : this.$m_databodyMove$ ? ($event$$135$$.preventDefault(), this.$m_databodyMove$ = !1, this.$_handleMoveMouseUp$(!0)) : ($header$$11_touchLength$$ = this.$findHeader$($target$$93$$), this.$_handleSwipe$($event$$135$$, this.$getHeaderCellAxis$($header$$11_touchLength$$))));
    this.$handleHeaderTouchCancel$();
  };
  $DvtDataGrid$$.prototype.$handleHeaderTouchCancel$ = function $$DvtDataGrid$$$$$handleHeaderTouchCancel$$() {
    this.$m_databodyMove$ && (this.$_handleMoveMouseUp$(!1), this.$m_databodyMove$ = !1);
    this.$m_touchActive$ = !1;
    this.$m_currentY$ = this.$m_currentX$ = this.$m_prevY$ = this.$m_prevX$ = this.$m_startY$ = this.$m_startX$ = 0;
  };
  $DvtDataGrid$$.prototype.$_handleNonSwipeScroll$ = function $$DvtDataGrid$$$$$_handleNonSwipeScroll$$($diffX$$2$$, $diffY$$2$$) {
    var $time$$2$$ = (new Date).getTime();
    this.$_disableTouchScrollAnimation$();
    this.$scrollDelta$($diffX$$2$$, $diffY$$2$$);
    $time$$2$$ - this.$m_startTime$ > $DvtDataGrid$$.$TAP_AND_SCROLL_RESET$ && (this.$m_startX$ = this.$m_currentX$, this.$m_startY$ = this.$m_currentY$, this.$m_startTime$ = (new Date).getTime());
  };
  $DvtDataGrid$$.prototype.$_handleSwipe$ = function $$DvtDataGrid$$$$$_handleSwipe$$($event$$137$$, $axis$$13$$) {
    var $duration$$14_momentumY$$, $momentumX_rtl$$2$$, $diffX$$3$$, $diffY$$3$$, $transitionDuration$$;
    $duration$$14_momentumY$$ = (new Date).getTime() - this.$m_startTime$;
    $momentumX_rtl$$2$$ = this.$m_resources$.$isRTLMode$();
    $diffX$$3$$ = this.$m_currentX$ - this.$m_startX$;
    $diffY$$3$$ = this.$m_currentY$ - this.$m_startY$;
    $momentumX_rtl$$2$$ && ($diffX$$3$$ *= -1);
    Math.abs($diffX$$3$$) < $DvtDataGrid$$.$MIN_SWIPE_DISTANCE$ && Math.abs($diffY$$3$$) < $DvtDataGrid$$.$MIN_SWIPE_DISTANCE$ && $duration$$14_momentumY$$ < $DvtDataGrid$$.$MIN_SWIPE_DURATION$ ? ($event$$137$$.preventDefault(), this.$_isSelectionEnabled$() && this.$_scrollTouchSelectionAffordance$()) : $duration$$14_momentumY$$ < $DvtDataGrid$$.$MAX_SWIPE_DURATION$ && ($event$$137$$.preventDefault(), "row" != $axis$$13$$ ? ($momentumX_rtl$$2$$ = this.$_calculateMomentum$(this.$m_currentX$, this.$m_startX$, 
    $duration$$14_momentumY$$, this.$m_currentScrollLeft$, this.$m_scrollWidth$, $momentumX_rtl$$2$$), !isNaN($momentumX_rtl$$2$$.$overScroll$) && (0 < $momentumX_rtl$$2$$.$overScroll$ || this.$m_stopColumnFetch$) && (this.$m_extraScrollOverX$ = -1 * $momentumX_rtl$$2$$.$overScroll$)) : ($momentumX_rtl$$2$$ = {duration:0, $destination$:0}, $diffX$$3$$ = 0), "column" != $axis$$13$$ ? ($duration$$14_momentumY$$ = this.$_calculateMomentum$(this.$m_currentY$, this.$m_startY$, $duration$$14_momentumY$$, 
    this.$m_currentScrollTop$, this.$m_scrollHeight$), !isNaN($duration$$14_momentumY$$.$overScroll$) && (0 < $duration$$14_momentumY$$.$overScroll$ || this.$m_stopRowFetch$) && (this.$m_extraScrollOverY$ = -1 * $duration$$14_momentumY$$.$overScroll$)) : ($duration$$14_momentumY$$ = {duration:0, $destination$:0}, $diffY$$3$$ = 0), $transitionDuration$$ = Math.max($momentumX_rtl$$2$$.duration, $duration$$14_momentumY$$.duration), this.$m_databody$.firstChild.style.webkitTransitionDuration = $transitionDuration$$ + 
    "ms", this.$m_rowHeader$.firstChild.style.webkitTransitionDuration = $transitionDuration$$ + "ms", this.$m_colHeader$.firstChild.style.webkitTransitionDuration = $transitionDuration$$ + "ms", this.$scrollDelta$($diffX$$3$$ + $momentumX_rtl$$2$$.$destination$, $diffY$$3$$ + $duration$$14_momentumY$$.$destination$));
  };
  $DvtDataGrid$$.prototype.fireEvent = function $$DvtDataGrid$$$$fireEvent$($functionName$$, $details$$1$$) {
    var $callback$$92$$;
    if (null != $functionName$$ && null != $details$$1$$) {
      return $callback$$92$$ = this.callbacks[$functionName$$], null != $callback$$92$$ ? $callback$$92$$($details$$1$$) : !0;
    }
  };
  $DvtDataGrid$$.prototype.addListener = function $$DvtDataGrid$$$$addListener$($functionName$$1$$, $handler$$46$$) {
    this.callbacks[$functionName$$1$$] = $handler$$46$$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.addListener", $DvtDataGrid$$.prototype.addListener, void 0);
  $DvtDataGrid$$.prototype.$setElementHeight$ = function $$DvtDataGrid$$$$$setElementHeight$$($elem$$29$$, $height$$26$$) {
    $elem$$29$$.style.height = $height$$26$$ + "px";
  };
  $DvtDataGrid$$.prototype.$getElementHeight$ = function $$DvtDataGrid$$$$$getElementHeight$$($elem$$30$$) {
    var $height$$27$$;
    if (-1 < $elem$$30$$.style.height.indexOf("px")) {
      return parseInt($elem$$30$$.style.height, 10);
    }
    document.body.contains($elem$$30$$) ? $height$$27$$ = Math.floor($elem$$30$$.getBoundingClientRect().height) : ($elem$$30$$.style.visibility = "hidden", document.body.appendChild($elem$$30$$), $height$$27$$ = Math.floor($elem$$30$$.getBoundingClientRect().height), document.body.removeChild($elem$$30$$), $elem$$30$$.style.visibility = "");
    return $height$$27$$;
  };
  $DvtDataGrid$$.prototype.$setElementWidth$ = function $$DvtDataGrid$$$$$setElementWidth$$($elem$$31$$, $width$$23$$) {
    $elem$$31$$.style.width = $width$$23$$ + "px";
  };
  $DvtDataGrid$$.prototype.$getElementWidth$ = function $$DvtDataGrid$$$$$getElementWidth$$($elem$$32$$) {
    var $width$$24$$;
    if (-1 < $elem$$32$$.style.width.indexOf("px")) {
      return parseInt($elem$$32$$.style.width, 10);
    }
    document.body.contains($elem$$32$$) ? $width$$24$$ = Math.floor($elem$$32$$.getBoundingClientRect().width) : ($elem$$32$$.style.visibility = "hidden", document.body.appendChild($elem$$32$$), $width$$24$$ = Math.floor($elem$$32$$.getBoundingClientRect().width), document.body.removeChild($elem$$32$$), $elem$$32$$.style.visibility = "");
    return $width$$24$$;
  };
  $DvtDataGrid$$.prototype.$setElementDir$ = function $$DvtDataGrid$$$$$setElementDir$$($elem$$33$$, $pix$$, $dir$$9$$) {
    $elem$$33$$.style[$dir$$9$$] = $pix$$ + "px";
  };
  $DvtDataGrid$$.prototype.$getElementDir$ = function $$DvtDataGrid$$$$$getElementDir$$($elem$$34$$, $dir$$10$$) {
    return parseInt($elem$$34$$.style[$dir$$10$$], 10);
  };
  $DvtDataGrid$$.$BEFORE$ = 1;
  $DvtDataGrid$$.$AFTER$ = 2;
  $DvtDataGrid$$.$INSIDE$ = 3;
  $DvtDataGrid$$.prototype.$_isInViewport$ = function $$DvtDataGrid$$$$$_isInViewport$$($columnIndex$$1_indexes$$6$$) {
    var $rowIndex$$1$$;
    $rowIndex$$1$$ = $columnIndex$$1_indexes$$6$$.row;
    $columnIndex$$1_indexes$$6$$ = $columnIndex$$1_indexes$$6$$.column;
    return-1 === $rowIndex$$1$$ && -1 === $columnIndex$$1_indexes$$6$$ ? -1 : -1 === $rowIndex$$1$$ ? $columnIndex$$1_indexes$$6$$ < this.$m_startCol$ ? $DvtDataGrid$$.$BEFORE$ : $columnIndex$$1_indexes$$6$$ > this.$m_endCol$ ? $DvtDataGrid$$.$AFTER$ : $DvtDataGrid$$.$INSIDE$ : -1 === $columnIndex$$1_indexes$$6$$ ? $rowIndex$$1$$ < this.$m_startRow$ ? $DvtDataGrid$$.$BEFORE$ : $rowIndex$$1$$ > this.$m_endRow$ ? $DvtDataGrid$$.$AFTER$ : $DvtDataGrid$$.$INSIDE$ : $columnIndex$$1_indexes$$6$$ >= this.$m_startCol$ && 
    $columnIndex$$1_indexes$$6$$ <= this.$m_endCol$ && $rowIndex$$1$$ >= this.$m_startRow$ && $rowIndex$$1$$ <= this.$m_endRow$ ? $DvtDataGrid$$.$INSIDE$ : -1;
  };
  $DvtDataGrid$$.prototype.$handleModelEvent$ = function $$DvtDataGrid$$$$$handleModelEvent$$($cellSet$$7_event$$138$$) {
    var $operation$$3$$, $keys$$14$$, $headerSet$$7$$, $indexes$$7$$, $source$$9$$, $indices$$1$$, $silent$$22$$;
    this.$m_initialized$ ? ($operation$$3$$ = $cellSet$$7_event$$138$$.operation, $keys$$14$$ = $cellSet$$7_event$$138$$.keys, $cellSet$$7_event$$138$$.header && ($headerSet$$7$$ = $cellSet$$7_event$$138$$.header), $indices$$1$$ = $cellSet$$7_event$$138$$.indices, $source$$9$$ = $cellSet$$7_event$$138$$.source, $indexes$$7$$ = $cellSet$$7_event$$138$$.indexes, $silent$$22$$ = $cellSet$$7_event$$138$$.silent, "insert" === $operation$$3$$ ? ($cellSet$$7_event$$138$$ = $cellSet$$7_event$$138$$.result, 
    this.$_adjustActive$($operation$$3$$, $indexes$$7$$), this.$_adjustSelectionOnModelChange$($operation$$3$$, $keys$$14$$, $indexes$$7$$), null != $cellSet$$7_event$$138$$ ? $source$$9$$ && $oj$$11$$.$FlattenedTreeDataGridDataSource$ && $source$$9$$ instanceof $oj$$11$$.$FlattenedTreeDataGridDataSource$ ? this.$_handleModelInsertRangeEvent$($cellSet$$7_event$$138$$, $headerSet$$7$$) : this.$_handleModelInsertRangeEvent$($cellSet$$7_event$$138$$) : this.$_handleModelInsertEvent$($indexes$$7$$, $keys$$14$$)) : 
    "update" === $operation$$3$$ ? this.$_handleModelUpdateEvent$($indexes$$7$$) : "delete" === $operation$$3$$ ? (this.$_adjustActive$($operation$$3$$, $indexes$$7$$), this.$_adjustSelectionOnModelChange$($operation$$3$$, $keys$$14$$, $indexes$$7$$), $source$$9$$ && $oj$$11$$.$FlattenedTreeDataGridDataSource$ && $source$$9$$ instanceof $oj$$11$$.$FlattenedTreeDataGridDataSource$ && this.$m_utils$.$supportsTransitions$() ? this.$_handleModelDeleteEventWithAnimation$($keys$$14$$) : $indices$$1$$ && 
    this.$m_utils$.$supportsTransitions$() ? this.$_handleModelDeleteEventWithAnimation$($keys$$14$$, $indices$$1$$) : this.$_handleModelDeleteEvent$($indexes$$7$$, $keys$$14$$, $silent$$22$$)) : "refresh" === $operation$$3$$ || "reset" === $operation$$3$$ ? this.$_handleModelRefreshEvent$() : "sync" === $operation$$3$$ && this.$_handleModelSyncEvent$($cellSet$$7_event$$138$$)) : (void 0 == this.$m_modelEvents$ && (this.$m_modelEvents$ = []), this.$m_modelEvents$.push($cellSet$$7_event$$138$$));
  };
  $DvtDataGrid$$.prototype.$_adjustActive$ = function $$DvtDataGrid$$$$$_adjustActive$$($operation$$4$$, $indexes$$8$$) {
    var $activeRowIndex$$, $i$$155$$, $rowIndex$$2$$, $activeHeader$$, $adjustment$$4$$ = 0;
    if (null != this.$m_active$) {
      if ("cell" == this.$m_active$.type) {
        $activeHeader$$ = !1, $activeRowIndex$$ = this.$m_active$.indexes.row;
      } else {
        if ("row" === this.$m_active$.axis) {
          $activeHeader$$ = !0, $activeRowIndex$$ = this.$m_active$.index;
        } else {
          return;
        }
      }
      Array.isArray($indexes$$8$$) || ($indexes$$8$$ = Array($indexes$$8$$));
      if (!0 === this.$m_moveActive$) {
        if ("insert" === $operation$$4$$) {
          $activeHeader$$ ? this.$m_active$.index = $indexes$$8$$[0].row : this.$m_active$.indexes.row = $indexes$$8$$[0].row;
          return;
        }
        if ("delete" === $operation$$4$$ && $indexes$$8$$[0].row === $activeRowIndex$$) {
          return;
        }
      }
      $adjustment$$4$$ = "insert" === $operation$$4$$ ? 1 : -1;
      for ($i$$155$$ = 0;$i$$155$$ < $indexes$$8$$.length;$i$$155$$++) {
        $rowIndex$$2$$ = $indexes$$8$$[$i$$155$$].row, $rowIndex$$2$$ < $activeRowIndex$$ ? $activeHeader$$ ? this.$m_active$.index += $adjustment$$4$$ : this.$m_active$.indexes.row += $adjustment$$4$$ : $rowIndex$$2$$ === $activeRowIndex$$ && "delete" === $operation$$4$$ && this.$_setActive$(null);
      }
    }
  };
  $DvtDataGrid$$.prototype.$_adjustSelectionOnModelChange$ = function $$DvtDataGrid$$$$$_adjustSelectionOnModelChange$$($movedRow_operation$$5$$, $keys$$15$$, $indexes$$9$$) {
    var $selection$$2$$, $i$$156$$, $rowKey$$2$$, $rowIndex$$3$$, $j$$24$$, $range$$5$$, $newRowKey_startRowKey$$, $endRowKey$$, $startRowIndex$$, $endRowIndex$$, $adjustment$$5$$;
    Array.isArray($keys$$15$$) || ($keys$$15$$ = Array($keys$$15$$));
    Array.isArray($indexes$$9$$) || ($indexes$$9$$ = Array($indexes$$9$$));
    $selection$$2$$ = this.$GetSelection$();
    if (null == $keys$$15$$ || null == $indexes$$9$$ || $keys$$15$$.length != $indexes$$9$$.length || 0 == $selection$$2$$.length) {
      this.$m_moveActive$ && "insert" == $movedRow_operation$$5$$ && (this.$_isSelectionEnabled$() && this.$_isDatabodyCellActive$() && ($movedRow_operation$$5$$ = "cell" == this.$m_options$.$getSelectionMode$() ? this.createRange(this.$m_active$.indexes, this.$m_active$.indexes, $keys$$15$$[0], $keys$$15$$[0]) : this.createRange($indexes$$9$$[0], $indexes$$9$$[0], $keys$$15$$[0], $keys$$15$$[0]), this.$m_selectionFrontier$ = this.$m_active$.indexes, $selection$$2$$.push($movedRow_operation$$5$$)), 
      this.$m_moveActive$ = !1);
    } else {
      for ($adjustment$$5$$ = "insert" === $movedRow_operation$$5$$ ? 1 : -1, $i$$156$$ = 0;$i$$156$$ < $keys$$15$$.length;$i$$156$$++) {
        for ($rowKey$$2$$ = $keys$$15$$[$i$$156$$].row, $rowIndex$$3$$ = $indexes$$9$$[$i$$156$$].row, $j$$24$$ = $selection$$2$$.length;$j$$24$$--;) {
          $range$$5$$ = $selection$$2$$[$j$$24$$], $newRowKey_startRowKey$$ = $range$$5$$.startKey.row, $endRowKey$$ = $range$$5$$.endKey.row, $startRowIndex$$ = $range$$5$$.startIndex.row, $endRowIndex$$ = $range$$5$$.endIndex.row, $newRowKey_startRowKey$$ == $rowKey$$2$$ ? $endRowKey$$ == $rowKey$$2$$ && "delete" == $movedRow_operation$$5$$ ? $selection$$2$$.splice($j$$24$$, 1) : ($newRowKey_startRowKey$$ = this.$_getKey$(this.$m_databody$.firstChild.childNodes[$range$$5$$.startIndex.row + 1 - 
          this.$m_startRow$]), $range$$5$$.startKey.row = $newRowKey_startRowKey$$, $range$$5$$.endIndex.row += $adjustment$$5$$) : $endRowKey$$ == $rowKey$$2$$ ? ($newRowKey_startRowKey$$ = this.$_getKey$(this.$m_databody$.firstChild.childNodes[$range$$5$$.endIndex.row - 1 - this.$m_startRow$]), $range$$5$$.endKey.row = $newRowKey_startRowKey$$, $range$$5$$.endIndex.row += $adjustment$$5$$) : $rowIndex$$3$$ < $startRowIndex$$ ? ($range$$5$$.startIndex.row += $adjustment$$5$$, $range$$5$$.endIndex.row += 
          $adjustment$$5$$) : $rowIndex$$3$$ < $endRowIndex$$ && ($range$$5$$.endIndex.row += $adjustment$$5$$);
        }
      }
    }
  };
  $DvtDataGrid$$.prototype.$_handleModelInsertEvent$ = function $$DvtDataGrid$$$$$_handleModelInsertEvent$$($indexes$$10$$, $keys$$16$$) {
    var $flag$$3_row$$20_rowHeader$$14$$;
    $flag$$3_row$$20_rowHeader$$14$$ = this.$_isInViewport$($indexes$$10$$);
    $flag$$3_row$$20_rowHeader$$14$$ === $DvtDataGrid$$.$INSIDE$ || $flag$$3_row$$20_rowHeader$$14$$ === $DvtDataGrid$$.$AFTER$ && $indexes$$10$$.row == this.$m_endRow$ + 1 ? null != $keys$$16$$.row && (this.$_databodyEmpty$() ? (this.empty(), this.refresh(this.$m_root$)) : (this.fetchHeaders("row", $indexes$$10$$.row, this.$m_rowHeader$, 1, {success:this.$_handleHeaderInsertsFetchSuccess$}), this.fetchCells(this.$m_databody$, this.$m_scroller$, $indexes$$10$$.row, this.$m_startCol$, 1, this.$m_endCol$ - 
    this.$m_startCol$ + 1, {success:this.$_handleCellInsertsFetchSuccess$}))) : ($flag$$3_row$$20_rowHeader$$14$$ === $DvtDataGrid$$.$BEFORE$ && (this.$m_startRow$++, this.$m_startRowHeader$++, this.$m_endRow$++, this.$m_endRowHeader$++, this.$m_startRowPixel$ += this.$m_avgRowHeight$, this.$m_startRowHeaderPixel$ += this.$m_avgRowHeight$, this.$m_endRowPixel$ += this.$m_avgRowHeight$, this.$m_endRowHeaderPixel$ += this.$m_avgRowHeight$, $flag$$3_row$$20_rowHeader$$14$$ = this.$m_databody$.firstChild.firstChild, 
    null != $flag$$3_row$$20_rowHeader$$14$$ && this.$pushRowsDown$($flag$$3_row$$20_rowHeader$$14$$, this.$m_avgRowHeight$), $flag$$3_row$$20_rowHeader$$14$$ = this.$m_rowHeader$.firstChild.firstChild, null != $flag$$3_row$$20_rowHeader$$14$$ && this.$pushRowsDown$($flag$$3_row$$20_rowHeader$$14$$, this.$m_avgRowHeight$)), this.$scrollToIndex$($indexes$$10$$));
  };
  $DvtDataGrid$$.prototype.$_handleCellInsertsFetchSuccess$ = function $$DvtDataGrid$$$$$_handleCellInsertsFetchSuccess$$($cellSet$$8$$, $cellRanges$$) {
    this.$m_initialized$ = !1;
    this.$handleCellsFetchSuccess$($cellSet$$8$$, $cellRanges$$, this.$m_endRow$ >= $cellRanges$$[0].start);
    this.$_scrollRowIntoViewport$($cellRanges$$[0].start);
    this.$_isHighWatermarkScrolling$() || this.$_cleanupViewport$();
    this.$updateRowBanding$();
    this.$m_stopRowFetch$ = !1;
    -1 != this.$m_endRowHeader$ && (this.$m_stopRowHeaderFetch$ = !1);
    this.$fillViewport$(this.$m_currentScrollLeft$, this.$m_currentScrollTop$);
  };
  $DvtDataGrid$$.prototype.$_handleHeaderInsertsFetchSuccess$ = function $$DvtDataGrid$$$$$_handleHeaderInsertsFetchSuccess$$($headerSet$$8$$, $headerRanges$$) {
    this.$m_resizeRequired$ = !0;
    this.$handleHeadersFetchSuccess$($headerSet$$8$$, $headerRanges$$, this.$m_endRowHeader$ >= $headerRanges$$.start);
  };
  $DvtDataGrid$$.prototype.$_scrollRowIntoViewport$ = function $$DvtDataGrid$$$$$_scrollRowIntoViewport$$($index$$109_viewportBottom$$3$$) {
    var $row$$21_rowTop$$, $diff_viewportTop$$2$$;
    $row$$21_rowTop$$ = this.$m_databody$.firstChild.childNodes[$index$$109_viewportBottom$$3$$ - this.$m_startRow$];
    null != $row$$21_rowTop$$ && ($diff_viewportTop$$2$$ = this.$m_currentScrollTop$, $index$$109_viewportBottom$$3$$ = this.$m_currentScrollTop$ + this.$getElementHeight$(this.$m_databody$), $row$$21_rowTop$$ = $row$$21_rowTop$$.offsetTop, $diff_viewportTop$$2$$ -= $row$$21_rowTop$$, 0 < $diff_viewportTop$$2$$ ? this.$scrollDelta$(0, $diff_viewportTop$$2$$) : ($diff_viewportTop$$2$$ = $index$$109_viewportBottom$$3$$ - $row$$21_rowTop$$, 0 > $diff_viewportTop$$2$$ && this.$scrollDelta$(0, $diff_viewportTop$$2$$)));
  };
  $DvtDataGrid$$.prototype.$_cleanupViewport$ = function $$DvtDataGrid$$$$$_cleanupViewport$$() {
    var $viewportTop$$3$$, $viewportBottom$$4$$;
    $viewportTop$$3$$ = this.$m_currentScrollTop$;
    $viewportBottom$$4$$ = this.$m_currentScrollTop$ + this.$getElementHeight$(this.$m_databody$);
    $viewportTop$$3$$ > this.$m_startRowPixel$ ? this.$m_endRow$ - this.$m_startRow$ > this.$MAX_ROW_THRESHOLD$ && this.$removeRowsFromTop$(this.$m_databody$) : $viewportBottom$$4$$ < this.$m_endRowPixel$ && this.$m_endRow$ - this.$m_startRow$ > this.$MAX_ROW_THRESHOLD$ && this.$removeRowsFromBottom$(this.$m_databody$);
    $viewportTop$$3$$ > this.$m_startRowHeaderPixel$ ? this.$m_endRowHeader$ - this.$m_startRowHeader$ > this.$MAX_ROW_THRESHOLD$ && this.$removeRowHeadersFromTop$(this.$m_rowHeader$) : $viewportBottom$$4$$ < this.$m_endRowPixel$ && this.$m_endRowHeader$ - this.$m_startRowHeader$ > this.$MAX_ROW_THRESHOLD$ && this.$removeRowHeadersFromBottom$(this.$m_rowHeader$);
  };
  $DvtDataGrid$$.prototype.$_handleModelInsertRangeEvent$ = function $$DvtDataGrid$$$$$_handleModelInsertRangeEvent$$($cellSet$$9$$, $headerSet$$9$$) {
    var $headerRange$$8_rowStart$$7$$, $rowCount$$9_rowRange$$5$$, $columnRange$$5_columnStart$$5$$, $columnCount$$3_headerCount$$3_rowFragment$$1$$, $rowHeaderFragment$$1$$, $c$$38$$, $index$$110_returnVal$$12$$, $totalRowHeight$$4$$, $className$$11$$, $renderer$$6$$;
    $headerRange$$8_rowStart$$7$$ = $cellSet$$9$$.getStart("row");
    $rowCount$$9_rowRange$$5$$ = $cellSet$$9$$.getCount("row");
    $columnRange$$5_columnStart$$5$$ = $cellSet$$9$$.getStart("column");
    $columnCount$$3_headerCount$$3_rowFragment$$1$$ = $cellSet$$9$$.getCount("column");
    if (this.$m_utils$.$supportsTransitions$()) {
      if (null != $headerSet$$9$$) {
        for ($rowHeaderFragment$$1$$ = document.createDocumentFragment(), $columnCount$$3_headerCount$$3_rowFragment$$1$$ = $headerSet$$9$$.getCount(), $c$$38$$ = $totalRowHeight$$4$$ = 0, $className$$11$$ = this.$getMappedStyle$("row") + " " + this.$getMappedStyle$("headercell") + " " + this.$getMappedStyle$("rowheadercell"), $renderer$$6$$ = this.$m_options$.$getRenderer$("row");0 < $columnCount$$3_headerCount$$3_rowFragment$$1$$ - $c$$38$$;) {
          $index$$110_returnVal$$12$$ = $headerRange$$8_rowStart$$7$$ + $c$$38$$, $index$$110_returnVal$$12$$ = this.$buildLevelHeaders$($rowHeaderFragment$$1$$, $index$$110_returnVal$$12$$, 0, 0, this.$m_startRowPixel$ + $totalRowHeight$$4$$, !0, !1, $renderer$$6$$, $headerSet$$9$$, "row", $className$$11$$, this.$m_rowHeaderLevelCount$), $c$$38$$ += $index$$110_returnVal$$12$$.count, $totalRowHeight$$4$$ += $index$$110_returnVal$$12$$.totalHeight;
        }
      }
      $columnCount$$3_headerCount$$3_rowFragment$$1$$ = document.createDocumentFragment();
      $index$$110_returnVal$$12$$ = this.$_addRows$($columnCount$$3_headerCount$$3_rowFragment$$1$$, !0, this.$m_startRowPixel$, $headerRange$$8_rowStart$$7$$, $rowCount$$9_rowRange$$5$$, $columnRange$$5_columnStart$$5$$, !1, $cellSet$$9$$);
      this.$_insertRowsWithAnimation$($columnCount$$3_headerCount$$3_rowFragment$$1$$, $rowHeaderFragment$$1$$, $headerRange$$8_rowStart$$7$$, $index$$110_returnVal$$12$$.totalRowHeight);
    } else {
      $rowCount$$9_rowRange$$5$$ = {axis:"row", start:$headerRange$$8_rowStart$$7$$, count:$rowCount$$9_rowRange$$5$$}, $columnRange$$5_columnStart$$5$$ = {axis:"column", start:$columnRange$$5_columnStart$$5$$, count:$columnCount$$3_headerCount$$3_rowFragment$$1$$}, null != $headerSet$$9$$ && ($headerRange$$8_rowStart$$7$$ = {axis:"row", header:this.$m_rowHeader$, start:$headerRange$$8_rowStart$$7$$, count:$headerSet$$9$$.getCount()}, this.$m_fetching$.row = $headerRange$$8_rowStart$$7$$, this.$_handleHeaderInsertsFetchSuccess$($headerSet$$9$$, 
      $headerRange$$8_rowStart$$7$$)), this.$_handleCellInsertsFetchSuccess$($cellSet$$9$$, [$rowCount$$9_rowRange$$5$$, $columnRange$$5_columnStart$$5$$]);
    }
  };
  $DvtDataGrid$$.prototype.$_handleModelUpdateEvent$ = function $$DvtDataGrid$$$$$_handleModelUpdateEvent$$($indexes$$11$$) {
    this.$_isInViewport$($indexes$$11$$) === $DvtDataGrid$$.$INSIDE$ && (-1 != this.$m_endRowHeader$ && this.fetchHeaders("row", $indexes$$11$$.row, this.$m_rowHeader$, 1, {success:this.$_handleHeaderUpdatesFetchSuccess$, error:this.$handleHeadersFetchError$}), this.fetchCells(this.$m_databody$, this.$m_scroller$, $indexes$$11$$.row, this.$m_startCol$, 1, this.$m_endCol$ - this.$m_startCol$ + 1, {success:this.$_handleCellUpdatesFetchSuccess$, error:this.$handleCellsFetchError$}));
  };
  $DvtDataGrid$$.prototype.$_handleHeaderUpdatesFetchSuccess$ = function $$DvtDataGrid$$$$$_handleHeaderUpdatesFetchSuccess$$($headerSet$$10$$, $headerRange$$9$$) {
    var $row$$22_rowStart$$8$$, $rowHeaderContent$$5$$, $fragment$$5_rowIndex$$4$$;
    this.$m_fetching$[$headerRange$$9$$.axis] = !1;
    $row$$22_rowStart$$8$$ = $headerRange$$9$$.start;
    $rowHeaderContent$$5$$ = this.$m_rowHeader$.firstChild;
    $fragment$$5_rowIndex$$4$$ = $row$$22_rowStart$$8$$ - this.$m_startRowHeader$;
    $row$$22_rowStart$$8$$ = $rowHeaderContent$$5$$.childNodes[$fragment$$5_rowIndex$$4$$];
    $fragment$$5_rowIndex$$4$$ = this.$buildRowHeaders$(this.$m_rowHeader$, $headerSet$$10$$, $fragment$$5_rowIndex$$4$$, 1, !0, !0);
    $rowHeaderContent$$5$$.replaceChild($fragment$$5_rowIndex$$4$$, $row$$22_rowStart$$8$$);
    null != this.$m_active$ && "header" === this.$m_active$.type && "row" === this.$m_active$.axis && this.$_getKey$($row$$22_rowStart$$8$$) === this.$m_active$.key && this.$_highlightActive$();
    this.$_signalTaskEnd$();
  };
  $DvtDataGrid$$.prototype.$_handleCellUpdatesFetchSuccess$ = function $$DvtDataGrid$$$$$_handleCellUpdatesFetchSuccess$$($cellSet$$10$$, $cellRange$$6$$) {
    var $rowIndex$$5_rowStart$$9$$, $databodyContent$$10$$, $renderer$$7$$, $columnBandingInterval$$3$$;
    this.$m_fetching$.cells = !1;
    $rowIndex$$5_rowStart$$9$$ = $cellRange$$6$$[0].start;
    $databodyContent$$10$$ = this.$m_databody$.firstChild;
    $renderer$$7$$ = this.$m_options$.$getRenderer$("cell");
    $columnBandingInterval$$3$$ = this.$m_options$.$getColumnBandingInterval$();
    this.$m_options$.$getRowBandingInterval$();
    $rowIndex$$5_rowStart$$9$$ -= this.$m_startRow$;
    this.$_updateCellsInRow$($cellSet$$10$$, $databodyContent$$10$$.childNodes[$rowIndex$$5_rowStart$$9$$], $rowIndex$$5_rowStart$$9$$, $renderer$$7$$, this.$m_startCol$, $columnBandingInterval$$3$$);
    this.$_signalTaskEnd$();
  };
  $DvtDataGrid$$.prototype.$_getUpdateAnimationDuration$ = function $$DvtDataGrid$$$$$_getUpdateAnimationDuration$$() {
    return $DvtDataGrid$$.$UPDATE_ANIMATION_DURATION$;
  };
  $DvtDataGrid$$.prototype.$_updateCellsInRow$ = function $$DvtDataGrid$$$$$_updateCellsInRow$$($cellSet$$11$$, $row$$24$$, $rowIndex$$6$$, $renderer$$8$$, $columnStart$$6$$, $columnBandingInterval$$4$$) {
    var $animationDuration$$, $self$$73$$, $width$$25$$, $listener$$36$$;
    $animationDuration$$ = this.$_getUpdateAnimationDuration$();
    0 !== $animationDuration$$ && this.$m_utils$.$supportsTransitions$() ? ($self$$73$$ = this, $self$$73$$.$_signalTaskStart$(), $listener$$36$$ = function $$listener$$36$$$() {
      $row$$24$$.style.left = "";
      $self$$73$$.$removeTransformMoveStyle$($row$$24$$);
      $row$$24$$.removeEventListener("transitionend", $listener$$36$$, !1);
      $self$$73$$.$_isSelectionEnabled$() && $self$$73$$.$applySelection$();
      $self$$73$$.$_highlightActive$();
      $self$$73$$.$_signalTaskEnd$();
    }, $row$$24$$.addEventListener("transitionend", $listener$$36$$), $width$$25$$ = this.$getElementWidth$(this.$m_databody$), this.$setElementDir$($row$$24$$, $width$$25$$, "left"), this.$m_utils$.empty($row$$24$$), this.$addCellsToRow$($cellSet$$11$$, $row$$24$$, $rowIndex$$6$$, $renderer$$8$$, !0, $columnStart$$6$$, !1, $columnBandingInterval$$4$$), this.$hideStatusText$(), this.$addTransformMoveStyle$($row$$24$$, $animationDuration$$ + "ms", 0, "linear", -1 * $width$$25$$, 0)) : (this.$m_utils$.empty($row$$24$$), 
    this.$addCellsToRow$($cellSet$$11$$, $row$$24$$, $rowIndex$$6$$, $renderer$$8$$, !0, $columnStart$$6$$, !1, $columnBandingInterval$$4$$), this.$_isSelectionEnabled$() && this.$applySelection$(), this.$_highlightActive$());
  };
  $DvtDataGrid$$.prototype.$_handleModelDeleteEvent$ = function $$DvtDataGrid$$$$$_handleModelDeleteEvent$$($databodyContent$$11_indexes$$12$$, $keys$$18_scrollerContent$$3$$, $silent$$23$$) {
    var $key$$58_rowHeader$$15_rowKey$$3$$, $databodyContentHeight$$1_i$$157_totalHeight$$, $row$$25$$, $height$$28$$, $flag$$5_index$$111_referenceRow$$3$$, $beforeRowsHeight$$, $insideRowsHeight$$, $afterRowsHeight$$, $beforeRowsDeleted$$, $insideRowsDeleted$$;
    Array.isArray($keys$$18_scrollerContent$$3$$) || ($keys$$18_scrollerContent$$3$$ = Array($keys$$18_scrollerContent$$3$$), $databodyContent$$11_indexes$$12$$ = Array($databodyContent$$11_indexes$$12$$));
    for ($databodyContentHeight$$1_i$$157_totalHeight$$ = $insideRowsDeleted$$ = $beforeRowsDeleted$$ = $afterRowsHeight$$ = $insideRowsHeight$$ = $beforeRowsHeight$$ = 0;$databodyContentHeight$$1_i$$157_totalHeight$$ < $keys$$18_scrollerContent$$3$$.length;$databodyContentHeight$$1_i$$157_totalHeight$$++) {
      $key$$58_rowHeader$$15_rowKey$$3$$ = $keys$$18_scrollerContent$$3$$[$databodyContentHeight$$1_i$$157_totalHeight$$], $flag$$5_index$$111_referenceRow$$3$$ = $databodyContent$$11_indexes$$12$$[$databodyContentHeight$$1_i$$157_totalHeight$$], null != $key$$58_rowHeader$$15_rowKey$$3$$.row && ($height$$28$$ = 0, $key$$58_rowHeader$$15_rowKey$$3$$ = $key$$58_rowHeader$$15_rowKey$$3$$.row, $flag$$5_index$$111_referenceRow$$3$$ = this.$_isInViewport$($flag$$5_index$$111_referenceRow$$3$$), $flag$$5_index$$111_referenceRow$$3$$ === 
      $DvtDataGrid$$.$BEFORE$ ? ($beforeRowsDeleted$$++, $beforeRowsHeight$$ += this.$m_avgRowHeight$, this.$m_startRowPixel$ -= this.$m_avgRowHeight$, this.$m_endRowPixel$ -= this.$m_avgRowHeight$, -1 != this.$m_endRowHeader$ && (this.$m_startRowHeaderPixel$ -= this.$m_avgRowHeight$, this.$m_endRowHeaderPixel$ -= this.$m_avgRowHeight$), $row$$25$$ = this.$m_databody$.firstChild.firstChild, null != $row$$25$$ && this.$pushRowsUp$($row$$25$$, this.$m_avgRowHeight$), $key$$58_rowHeader$$15_rowKey$$3$$ = 
      this.$m_rowHeader$.firstChild.firstChild, null != $key$$58_rowHeader$$15_rowKey$$3$$ && this.$pushRowsUp$($key$$58_rowHeader$$15_rowKey$$3$$, this.$m_avgRowHeight$)) : $flag$$5_index$$111_referenceRow$$3$$ === $DvtDataGrid$$.$INSIDE$ ? ($insideRowsDeleted$$++, $row$$25$$ = this.$_findRowByKey$($key$$58_rowHeader$$15_rowKey$$3$$), null != $row$$25$$ && ($height$$28$$ = this.$calculateRowHeight$($row$$25$$), $flag$$5_index$$111_referenceRow$$3$$ = $row$$25$$.nextSibling, this.$_remove$($row$$25$$), 
      this.$pushRowsUp$($flag$$5_index$$111_referenceRow$$3$$, $height$$28$$), this.$m_endRowPixel$ -= $height$$28$$), $key$$58_rowHeader$$15_rowKey$$3$$ = this.$_findRowHeaderByKey$($key$$58_rowHeader$$15_rowKey$$3$$), null != $key$$58_rowHeader$$15_rowKey$$3$$ && ($height$$28$$ = this.$calculateRowHeaderHeight$($key$$58_rowHeader$$15_rowKey$$3$$), $flag$$5_index$$111_referenceRow$$3$$ = $key$$58_rowHeader$$15_rowKey$$3$$.nextSibling, this.$_remove$($key$$58_rowHeader$$15_rowKey$$3$$), this.$pushRowHeadersUp$($flag$$5_index$$111_referenceRow$$3$$, 
      $height$$28$$), this.$m_endRowHeaderPixel$ -= $height$$28$$), $insideRowsHeight$$ += $height$$28$$) : "scroll" === this.$m_options$.$getScrollPolicy$() && ($afterRowsHeight$$ += this.$m_avgRowHeight$));
    }
    this.$m_startRow$ -= $beforeRowsDeleted$$;
    this.$m_endRow$ = this.$m_endRow$ - $beforeRowsDeleted$$ - $insideRowsDeleted$$;
    -1 != this.$m_endRowHeader$ && (this.$m_startRowHeader$ -= $beforeRowsDeleted$$, this.$m_endRowHeader$ = this.$m_endRowHeader$ - $beforeRowsDeleted$$ - $insideRowsDeleted$$);
    $databodyContentHeight$$1_i$$157_totalHeight$$ = $beforeRowsHeight$$ + $insideRowsHeight$$ + $afterRowsHeight$$;
    $databodyContent$$11_indexes$$12$$ = this.$m_databody$.firstChild;
    $keys$$18_scrollerContent$$3$$ = this.$m_scroller$.firstChild;
    $databodyContentHeight$$1_i$$157_totalHeight$$ = this.$getElementHeight$($databodyContent$$11_indexes$$12$$) - $databodyContentHeight$$1_i$$157_totalHeight$$;
    this.$setElementHeight$($databodyContent$$11_indexes$$12$$, $databodyContentHeight$$1_i$$157_totalHeight$$);
    this.$setElementHeight$($keys$$18_scrollerContent$$3$$, $databodyContentHeight$$1_i$$157_totalHeight$$);
    this.$resizeGrid$();
    $silent$$23$$ || !0 == this.$m_moveActive$ || (this.$m_resizeRequired$ = !0, this.$m_stopRowFetch$ = !1, -1 != this.$m_endRowHeader$ && (this.$m_stopRowHeaderFetch$ = !1), this.$fillViewport$(this.$m_currentScrollLeft$, this.$m_currentScrollTop$));
    this.$updateRowBanding$();
  };
  $DvtDataGrid$$.prototype.$_handleModelDeleteEventWithAnimation$ = function $$DvtDataGrid$$$$$_handleModelDeleteEventWithAnimation$$($keys$$19$$, $indices$$2$$) {
    $indices$$2$$ ? this.$_removeRowsWithAnimation$($keys$$19$$, $indices$$2$$) : this.$_collapseRowsWithAnimation$($keys$$19$$);
  };
  $DvtDataGrid$$.prototype.$_getSelectionGaps$ = function $$DvtDataGrid$$$$$_getSelectionGaps$$($indices$$3$$) {
    var $i$$158$$, $idx$$11$$, $idxs$$;
    $idx$$11$$ = [];
    $idxs$$ = [];
    for ($i$$158$$ = 0;$i$$158$$ < $indices$$3$$.length - 1;$i$$158$$++) {
      1 == $indices$$3$$[$i$$158$$ + 1] - $indices$$3$$[$i$$158$$] ? $idx$$11$$.push($indices$$3$$[$i$$158$$]) : ($idx$$11$$.push($indices$$3$$[$i$$158$$]), $idxs$$.push($idx$$11$$), $idx$$11$$ = []);
    }
    $idx$$11$$.push($indices$$3$$[$indices$$3$$.length - 1]);
    $idxs$$.push($idx$$11$$);
    return $idxs$$;
  };
  $DvtDataGrid$$.prototype.$_getRowByLocalPosition$ = function $$DvtDataGrid$$$$$_getRowByLocalPosition$$($pos$$5_rowKey$$4$$) {
    $pos$$5_rowKey$$4$$ = this.$_getLocalKeys$({row:$pos$$5_rowKey$$4$$}).row;
    return this.$_findRowByKey$($pos$$5_rowKey$$4$$);
  };
  $DvtDataGrid$$.prototype.$_removeRowsWithAnimation$ = function $$DvtDataGrid$$$$$_removeRowsWithAnimation$$($keys$$20$$, $indices$$4$$) {
    var $self$$74$$, $key$$59_rowHeader$$16_rowKey$$5$$, $i$$159_rwn$$, $j$$25$$, $k$$10$$, $row$$26$$, $totalHeight$$1$$, $height$$29$$, $referenceRow$$4_rwp$$, $databodyContent$$12$$, $lastTopRow$$, $start$$35$$, $firstRowCase$$, $gaps$$, $adjustment$$6_transition_duration$$, $transition_delay$$, $transition_timing_function$$, $opacity$$1$$, $gap_size$$, $listener$$37$$;
    $self$$74$$ = this;
    $self$$74$$.$_signalTaskStart$();
    $gaps$$ = $self$$74$$.$_getSelectionGaps$($indices$$4$$);
    $row$$26$$ = $self$$74$$.$_getRowByLocalPosition$($indices$$4$$[$indices$$4$$.length - 1]);
    $referenceRow$$4_rwp$$ = $row$$26$$.nextSibling;
    $gap_size$$ = 0;
    $adjustment$$6_transition_duration$$ = $self$$74$$.$getCssSupport$("transition-duration");
    $transition_delay$$ = $self$$74$$.$getCssSupport$("transition-delay");
    $transition_timing_function$$ = $self$$74$$.$getCssSupport$("transition-timing-function");
    $opacity$$1$$ = $self$$74$$.$getCssSupport$("opacity");
    $self$$74$$.$getCssSupport$("transform");
    $firstRowCase$$ = !0;
    $databodyContent$$12$$ = $self$$74$$.$m_databody$.firstChild;
    $lastTopRow$$ = $self$$74$$.$_getRowByLocalPosition$($indices$$4$$[0]);
    0 != $lastTopRow$$.previousSibling.childElementCount && ($lastTopRow$$ = $lastTopRow$$.previousSibling, $firstRowCase$$ = !1);
    for ($i$$159_rwn$$ = 0;$i$$159_rwn$$ < $keys$$20$$.length;$i$$159_rwn$$++) {
      $key$$59_rowHeader$$16_rowKey$$5$$ = $keys$$20$$[$i$$159_rwn$$], $key$$59_rowHeader$$16_rowKey$$5$$.row && ($key$$59_rowHeader$$16_rowKey$$5$$ = $key$$59_rowHeader$$16_rowKey$$5$$.row, $row$$26$$ = $self$$74$$.$_findRowByKey$($key$$59_rowHeader$$16_rowKey$$5$$), null != $row$$26$$ ? ($height$$29$$ = $self$$74$$.$calculateRowHeight$($row$$26$$), $self$$74$$.$changeStyleProperty$($row$$26$$, $adjustment$$6_transition_duration$$, "400ms"), $self$$74$$.$changeStyleProperty$($row$$26$$, $transition_delay$$, 
      "0ms"), $self$$74$$.$changeStyleProperty$($row$$26$$, $transition_timing_function$$, "Cubic-bezier(0.70,0.00,0.51,1.29)"), $self$$74$$.$changeStyleProperty$($row$$26$$, $opacity$$1$$, 0)) : $height$$29$$ = $self$$74$$.$m_avgRowHeight$, $key$$59_rowHeader$$16_rowKey$$5$$ = $self$$74$$.$_findRowHeaderByKey$($key$$59_rowHeader$$16_rowKey$$5$$), null != $key$$59_rowHeader$$16_rowKey$$5$$ && ($height$$29$$ = $self$$74$$.$calculateRowHeaderHeight$($key$$59_rowHeader$$16_rowKey$$5$$), $referenceRow$$4_rwp$$ = 
      $key$$59_rowHeader$$16_rowKey$$5$$.nextSibling, $self$$74$$.$pushRowHeadersUp$($referenceRow$$4_rwp$$, $height$$29$$), $self$$74$$.$_remove$($key$$59_rowHeader$$16_rowKey$$5$$), $key$$59_rowHeader$$16_rowKey$$5$$.style.display = "none", $self$$74$$.$m_endRowHeader$ -= 1, $self$$74$$.$m_endRowHeaderPixel$ -= $height$$29$$), $self$$74$$.$m_endRow$ -= 1, $self$$74$$.$m_endRowPixel$ -= $height$$29$$, $totalHeight$$1$$ += $height$$29$$);
    }
    if (1 < $gaps$$.length) {
      for ($i$$159_rwn$$ = 0;$i$$159_rwn$$ < $gaps$$.length - 1;$i$$159_rwn$$++) {
        for ($gap_size$$ += $gaps$$[$i$$159_rwn$$].length, $adjustment$$6_transition_duration$$ = $height$$29$$ * $gap_size$$, $j$$25$$ = $gaps$$[$i$$159_rwn$$][$gaps$$[$i$$159_rwn$$].length - 1] + 1;$j$$25$$ < $gaps$$[$i$$159_rwn$$ + 1][0];$j$$25$$++) {
          $row$$26$$ = $self$$74$$.$_getRowByLocalPosition$($j$$25$$), $self$$74$$.$addTransformMoveStyle$($row$$26$$, "600ms", "150ms", "Cubic-bezier(0.70,0.00,0.51,1.29)", 0, "-" + $adjustment$$6_transition_duration$$);
        }
      }
    }
    $i$$159_rwn$$ = $referenceRow$$4_rwp$$;
    for ($adjustment$$6_transition_duration$$ = $height$$29$$ * $keys$$20$$.length;$i$$159_rwn$$;) {
      $referenceRow$$4_rwp$$ = $i$$159_rwn$$.previousSibling, $self$$74$$.$addTransformMoveStyle$($i$$159_rwn$$, "600ms", "150ms", "Cubic-bezier(0.70,0.00,0.51,1.29)", 0, "-" + $adjustment$$6_transition_duration$$), $i$$159_rwn$$ = $i$$159_rwn$$.nextSibling, $i$$159_rwn$$ || ($listener$$37$$ = function $$listener$$37$$$() {
        for ($j$$25$$ = 0;$j$$25$$ < $keys$$20$$.length;$j$$25$$++) {
          $keys$$20$$[$j$$25$$].row && ($row$$26$$ = $self$$74$$.$_findRowByKey$($keys$$20$$[$j$$25$$].row), $self$$74$$.$_remove$($row$$26$$), $row$$26$$.style.display = "none");
        }
        $start$$35$$ = -1;
        for ($k$$10$$ = 1;$k$$10$$ < $databodyContent$$12$$.childElementCount;$k$$10$$++) {
          $row$$26$$ = $databodyContent$$12$$.childNodes[$k$$10$$], $self$$74$$.$_getKey$($lastTopRow$$) && $self$$74$$.$_getKey$($lastTopRow$$) == $self$$74$$.$_getKey$($databodyContent$$12$$.childNodes[$k$$10$$]) && ($start$$35$$ = $k$$10$$ + 1), $self$$74$$.$changeStyleProperty$($row$$26$$, $self$$74$$.$getCssSupport$("z-index"), 0, "remove"), $self$$74$$.$removeTransformMoveStyle$($row$$26$$), 0 < $start$$35$$ ? $databodyContent$$12$$.childNodes[$k$$10$$].style.top = $lastTopRow$$.offsetTop + 
          $height$$29$$ * ($k$$10$$ - $start$$35$$ + 1) + "px" : $firstRowCase$$ && ($databodyContent$$12$$.childNodes[$k$$10$$].style.top = $lastTopRow$$.offsetTop + $height$$29$$ * ($k$$10$$ - 1) + "px");
        }
        $self$$74$$.$setElementHeight$($databodyContent$$12$$, $self$$74$$.$getElementHeight$($databodyContent$$12$$) - $totalHeight$$1$$);
        $self$$74$$.$setElementHeight$($self$$74$$.$m_scroller$.firstChild, $self$$74$$.$getElementHeight$($databodyContent$$12$$) - $totalHeight$$1$$);
        $self$$74$$.$resizeGrid$();
        $self$$74$$.$m_stopRowFetch$ = !1;
        $self$$74$$.$fillViewport$($self$$74$$.$m_currentScrollLeft$, $self$$74$$.$m_currentScrollTop$);
        $self$$74$$.$updateRowBanding$();
        this.removeEventListener("transitionend", $listener$$37$$, !1);
      }, $referenceRow$$4_rwp$$.addEventListener("transitionend", $listener$$37$$, !1));
    }
  };
  $DvtDataGrid$$.prototype.$_collapseRowsWithAnimation$ = function $$DvtDataGrid$$$$$_collapseRowsWithAnimation$$($keys$$21$$) {
    var $self$$75$$, $duration$$16$$, $databodyContent$$13$$, $referenceRow$$5$$, $referenceRowHeader$$1$$, $lastAnimationElement$$, $i$$160$$, $rowKey$$6$$, $row$$27$$, $rowsToRemove$$, $rowHeadersToRemove$$, $totalRowHeight$$5$$, $rowHeader$$17$$, $tranisitionListener$$, $rowHeaderSupport$$1$$;
    $self$$75$$ = this;
    $self$$75$$.$_signalTaskStart$();
    $duration$$16$$ = $DvtDataGrid$$.$COLLAPSE_ANIMATION_DURATION$;
    $rowsToRemove$$ = [];
    $totalRowHeight$$5$$ = 0;
    $rowHeaderSupport$$1$$ = -1 == this.$m_endRowHeader$ ? !1 : !0;
    $databodyContent$$13$$ = this.$m_databody$.firstChild;
    for ($row$$27$$ = $referenceRow$$5$$ = this.$_findRowByKey$($keys$$21$$[0].row).previousSibling;$row$$27$$ && !(this.$getElementDir$($row$$27$$, "top") < this.$m_currentScrollTop$);) {
      this.$changeStyleProperty$($row$$27$$, this.$getCssSupport$("z-index"), 10), $row$$27$$ = $row$$27$$.previousSibling;
    }
    if ($rowHeaderSupport$$1$$) {
      for ($rowHeadersToRemove$$ = [], $row$$27$$ = $referenceRowHeader$$1$$ = this.$_findRowHeaderByKey$($keys$$21$$[0].row).previousSibling;$row$$27$$ && !(this.$getElementDir$($row$$27$$, "top") < this.$m_currentScrollTop$);) {
        this.$changeStyleProperty$($row$$27$$, this.$getCssSupport$("z-index"), 10), $row$$27$$ = $row$$27$$.previousSibling;
      }
    }
    for ($i$$160$$ = 0;$i$$160$$ < $keys$$21$$.length;$i$$160$$++) {
      $rowKey$$6$$ = $keys$$21$$[$i$$160$$].row, $row$$27$$ = this.$_findRowByKey$($rowKey$$6$$), null != $row$$27$$ && ($rowsToRemove$$.push($row$$27$$), $totalRowHeight$$5$$ += this.$getElementHeight$($row$$27$$), this.$setElementDir$($row$$27$$, this.$getElementDir$($row$$27$$, "top") - $totalRowHeight$$5$$, "top"), this.$addTransformMoveStyle$($row$$27$$, 0, 0, "linear", 0, $totalRowHeight$$5$$)), $rowHeaderSupport$$1$$ && ($rowHeader$$17$$ = this.$_findRowHeaderByKey$($rowKey$$6$$), null != 
      $rowHeader$$17$$ && ($rowHeadersToRemove$$.push($rowHeader$$17$$), this.$setElementDir$($rowHeader$$17$$, this.$getElementDir$($rowHeader$$17$$, "top") - $totalRowHeight$$5$$, "top"), this.$addTransformMoveStyle$($rowHeader$$17$$, 0, 0, "linear", 0, $totalRowHeight$$5$$)));
    }
    for (;$row$$27$$.nextSibling;) {
      $row$$27$$ = $row$$27$$.nextSibling, this.$setElementDir$($row$$27$$, this.$getElementDir$($row$$27$$, "top") - $totalRowHeight$$5$$, "top"), this.$addTransformMoveStyle$($row$$27$$, 0, 0, "linear", 0, $totalRowHeight$$5$$), $rowHeaderSupport$$1$$ && ($rowHeader$$17$$ = $rowHeader$$17$$.nextSibling, this.$setElementDir$($rowHeader$$17$$, this.$getElementDir$($rowHeader$$17$$, "top") - $totalRowHeight$$5$$, "top"), this.$addTransformMoveStyle$($rowHeader$$17$$, 0, 0, "linear", 0, $totalRowHeight$$5$$))
      ;
    }
    $lastAnimationElement$$ = $databodyContent$$13$$.lastChild;
    $tranisitionListener$$ = function $$tranisitionListener$$$() {
      var $i$$161$$;
      for ($i$$161$$ = 0;$i$$161$$ < $rowsToRemove$$.length;$i$$161$$++) {
        $self$$75$$.$_remove$($rowsToRemove$$[$i$$161$$]), $rowHeaderSupport$$1$$ && $self$$75$$.$_remove$($rowHeadersToRemove$$[$i$$161$$]);
      }
      $self$$75$$.$setElementHeight$($databodyContent$$13$$, $self$$75$$.$m_endRowPixel$ - $self$$75$$.$m_startRowPixel$);
      $self$$75$$.$setElementHeight$($self$$75$$.$m_scroller$.firstChild, $self$$75$$.$m_endRowPixel$ - $self$$75$$.$m_startRowPixel$);
      $self$$75$$.$resizeGrid$();
      $self$$75$$.$updateRowBanding$();
      $self$$75$$.$fillViewport$($self$$75$$.$m_currentScrollLeft$, $self$$75$$.$m_currentScrollTop$);
      $self$$75$$.$_handleAnimationEnd$();
      $lastAnimationElement$$.removeEventListener("transitionend", $tranisitionListener$$, !1);
    };
    $lastAnimationElement$$.addEventListener("transitionend", $tranisitionListener$$, !1);
    this.$m_endRow$ -= $rowsToRemove$$.length;
    this.$m_endRowPixel$ -= $totalRowHeight$$5$$;
    this.$m_stopRowFetch$ = !1;
    $rowHeaderSupport$$1$$ && (this.$m_endRowHeader$ -= $rowHeadersToRemove$$.length, this.$m_endRowHeaderPixel$ -= $totalRowHeight$$5$$, this.$m_stopRowHeaderFetch$ = !1);
    $row$$27$$ = $referenceRow$$5$$.nextSibling;
    $rowHeaderSupport$$1$$ && ($rowHeader$$17$$ = $referenceRowHeader$$1$$.nextSibling);
    setTimeout(function() {
      for (;$row$$27$$;) {
        $self$$75$$.$addTransformMoveStyle$($row$$27$$, $duration$$16$$ + "ms", 0, "ease-out", 0, 0), $row$$27$$ = $row$$27$$.nextSibling, $rowHeaderSupport$$1$$ && ($self$$75$$.$addTransformMoveStyle$($rowHeader$$17$$, $duration$$16$$ + "ms", 0, "ease-out", 0, 0), $rowHeader$$17$$ = $rowHeader$$17$$.nextSibling);
      }
    }, 0);
  };
  $DvtDataGrid$$.prototype.$_handleAnimationEnd$ = function $$DvtDataGrid$$$$$_handleAnimationEnd$$() {
    var $i$$162$$, $databodyContent$$14$$, $rowHeaderContent$$6$$;
    $databodyContent$$14$$ = this.$m_databody$.firstChild;
    $rowHeaderContent$$6$$ = this.$m_rowHeader$.firstChild;
    for ($i$$162$$ = 0;$i$$162$$ < $databodyContent$$14$$.childNodes.length;$i$$162$$++) {
      this.$removeTransformMoveStyle$($databodyContent$$14$$.childNodes[$i$$162$$]), this.$changeStyleProperty$($databodyContent$$14$$.childNodes[$i$$162$$], this.$getCssSupport$("z-index"), null, "remove"), -1 != this.$m_endRowHeader$ && (this.$removeTransformMoveStyle$($rowHeaderContent$$6$$.childNodes[$i$$162$$]), this.$changeStyleProperty$($rowHeaderContent$$6$$.childNodes[$i$$162$$], this.$getCssSupport$("z-index"), null, "remove"));
    }
    this.$_signalTaskEnd$();
  };
  $DvtDataGrid$$.prototype.$_findRowByKey$ = function $$DvtDataGrid$$$$$_findRowByKey$$($key$$60$$) {
    var $rows$$5$$, $row$$28$$, $i$$163$$, $rowKey$$7$$;
    if (null == this.$m_databody$) {
      return null;
    }
    $rows$$5$$ = this.$m_databody$.firstChild.childNodes;
    for ($i$$163$$ = 0;$i$$163$$ < $rows$$5$$.length;$i$$163$$++) {
      if ($row$$28$$ = $rows$$5$$[$i$$163$$], $rowKey$$7$$ = this.$_getKey$($row$$28$$), $rowKey$$7$$ == $key$$60$$) {
        return $row$$28$$;
      }
    }
    return null;
  };
  $DvtDataGrid$$.prototype.$_findRowHeaderByKey$ = function $$DvtDataGrid$$$$$_findRowHeaderByKey$$($key$$61$$) {
    var $rowHeaders$$2$$, $rowHeader$$18$$, $i$$164$$, $rowKey$$8$$;
    if (null == this.$m_rowHeader$) {
      return null;
    }
    $rowHeaders$$2$$ = this.$m_rowHeader$.getElementsByClassName(this.$getMappedStyle$("rowheadercell"));
    for ($i$$164$$ = 0;$i$$164$$ < $rowHeaders$$2$$.length;$i$$164$$++) {
      if ($rowHeader$$18$$ = $rowHeaders$$2$$[$i$$164$$], $rowKey$$8$$ = this.$_getKey$($rowHeader$$18$$), $rowKey$$8$$ == $key$$61$$) {
        return $rowHeader$$18$$;
      }
    }
    return null;
  };
  $DvtDataGrid$$.prototype.$_findColumnHeaderByKey$ = function $$DvtDataGrid$$$$$_findColumnHeaderByKey$$($key$$62$$) {
    var $columnHeaders$$2$$, $columnHeader$$4$$, $i$$165$$, $columnKey$$;
    if (null == this.$m_colHeader$) {
      return null;
    }
    $columnHeaders$$2$$ = this.$m_colHeader$.getElementsByClassName(this.$getMappedStyle$("colheadercell"));
    for ($i$$165$$ = 0;$i$$165$$ < $columnHeaders$$2$$.length;$i$$165$$++) {
      if ($columnHeader$$4$$ = $columnHeaders$$2$$[$i$$165$$], $columnKey$$ = this.$_getKey$($columnHeader$$4$$), $columnKey$$ == $key$$62$$) {
        return $columnHeader$$4$$;
      }
    }
    return null;
  };
  $DvtDataGrid$$.prototype.$_handleModelRefreshEvent$ = function $$DvtDataGrid$$$$$_handleModelRefreshEvent$$() {
    var $visibility$$ = this.$getVisibility$();
    $visibility$$ === $DvtDataGrid$$.$VISIBILITY_STATE_VISIBLE$ ? (this.empty(), null != this.$m_root$.offsetParent ? this.refresh(this.$m_root$) : this.$setVisibility$($DvtDataGrid$$.$VISIBILITY_STATE_REFRESH$)) : $visibility$$ === $DvtDataGrid$$.$VISIBILITY_STATE_HIDDEN$ && (this.empty(), this.$setVisibility$($DvtDataGrid$$.$VISIBILITY_STATE_REFRESH$));
  };
  $DvtDataGrid$$.prototype.$_handleModelSyncEvent$ = function $$DvtDataGrid$$$$$_handleModelSyncEvent$$($event$$139_pageSize$$2$$) {
    $event$$139_pageSize$$2$$ = $event$$139_pageSize$$2$$.pageSize;
    this.$m_fetching$ = {};
    this.$m_startRow$ = 0;
    this.$m_endRow$ = -1;
    this.$m_startRowHeader$ = 0;
    this.$m_endRowHeader$ = -1;
    this.$m_startCol$ = this.$m_endRowHeaderPixel$ = this.$m_startRowHeaderPixel$ = this.$m_endRowPixel$ = this.$m_startRowPixel$ = 0;
    this.$m_endCol$ = -1;
    this.$m_startColHeader$ = 0;
    this.$m_endColHeader$ = -1;
    this.$m_endColHeaderPixel$ = this.$m_startColHeaderPixel$ = this.$m_endColPixel$ = this.$m_startColPixel$ = 0;
    this.$m_columnHeaderLevelCount$ = this.$m_rowHeaderLevelCount$ = void 0;
    this.$m_captureScrolling$ = this.$m_stopDatabodyScroll$ = !1;
    this.$m_isEstimateColumnCount$ = this.$m_isEstimateRowCount$ = this.$m_avgColWidth$ = this.$m_avgRowHeight$ = void 0;
    this.$m_stopColumnHeaderFetch$ = this.$m_stopColumnFetch$ = this.$m_stopRowHeaderFetch$ = this.$m_stopRowFetch$ = !1;
    this.$m_prevActive$ = this.$m_active$ = this.$m_selection$ = null;
    null != this.$m_empty$ && (this.$m_root$.removeChild(this.$m_empty$), this.$m_empty$ = null);
    this.$m_initialized$ = !1;
    this.fetchHeaders("row", 0, this.$m_rowHeader$, $event$$139_pageSize$$2$$, {success:function($headerSet$$11$$, $headerRange$$10$$) {
      this.$handleRowHeadersFetchSuccessForLongScroll$($headerSet$$11$$, $headerRange$$10$$);
    }});
    this.fetchHeaders("column", 0, this.$m_colHeader$, void 0, {success:function($headerSet$$12$$, $headerRange$$11$$) {
      this.$handleColumnHeadersFetchSuccessForLongScroll$($headerSet$$12$$, $headerRange$$11$$);
    }});
    this.fetchCells(this.$m_databody$, this.$m_scroller$, 0, 0, $event$$139_pageSize$$2$$, null, {success:function($cellSet$$12$$, $cellRange$$7$$) {
      this.$handleCellsFetchSuccessForLongScroll$($cellSet$$12$$, $cellRange$$7$$);
    }});
    this.$setInitialScrollPosition$();
  };
  $DvtDataGrid$$.prototype.$_setActiveByIndex$ = function $$DvtDataGrid$$$$$_setActiveByIndex$$($index$$112$$, $event$$140$$, $clearSelection$$) {
    return this.$_setActive$(this.$_getCellByIndex$($index$$112$$), $event$$140$$, $clearSelection$$);
  };
  $DvtDataGrid$$.prototype.$_updateActive$ = function $$DvtDataGrid$$$$$_updateActive$$($activeObject$$) {
    var $level$$18$$, $newActiveElement$$;
    null == $activeObject$$ ? this.$_setActive$(null, null, null, !0) : null != $activeObject$$.keys ? $newActiveElement$$ = this.$_getCellByKeys$($activeObject$$.keys) : null != $activeObject$$.indexes ? $newActiveElement$$ = this.$_getCellByIndex$($activeObject$$.indexes) : null != $activeObject$$.axis && ($level$$18$$ = null == $activeObject$$.level ? 0 : $activeObject$$.level, "column" == $activeObject$$.axis ? null != $activeObject$$.key ? $newActiveElement$$ = this.$_findColumnHeaderByKey$($activeObject$$.key) : 
    null != $activeObject$$.index && ($newActiveElement$$ = this.$_getColumnHeaderByIndex$($activeObject$$.index, $level$$18$$)) : "row" == $activeObject$$.axis && (null != $activeObject$$.key ? $newActiveElement$$ = this.$_findRowHeaderByKey$($activeObject$$.key) : null != $activeObject$$.index && ($newActiveElement$$ = this.$_getRowHeaderByIndex$($activeObject$$.index, $level$$18$$))));
    null != $newActiveElement$$ && this.$_setActive$($newActiveElement$$, null, null, !0);
  };
  $DvtDataGrid$$.prototype.$_setActive$ = function $$DvtDataGrid$$$$$_setActive$$($element$$80$$, $event$$141$$, $clearSelection$$1$$, $silent$$24$$) {
    if (null != $element$$80$$) {
      var $active$$ = this.$_createActiveObject$($element$$80$$);
      if (this.$_compareActive$($active$$, this.$m_active$) && ($silent$$24$$ || this.$_fireBeforeCurrentCellEvent$($active$$, this.$m_active$, $event$$141$$))) {
        return this.$m_prevActive$ = this.$m_active$, this.$m_active$ = $active$$, this.$_scrollToActive$($active$$), $clearSelection$$1$$ && this.$_isSelectionEnabled$() && this.$_clearSelection$(), this.$_unhighlightActiveObject$(this.$m_prevActive$), this.$_highlightActiveObject$(this.$m_active$, this.$m_prevActive$), this.$_manageMoveCursor$(), $silent$$24$$ || this.$_fireCurrentCellEvent$($active$$, $event$$141$$), !0;
      }
    } else {
      if (!this.$m_scrollIndexAfterFetch$ && !this.$m_scrollHeaderAfterFetch$) {
        if ($silent$$24$$ || this.$_fireBeforeCurrentCellEvent$($active$$, this.$m_active$, $event$$141$$)) {
          this.$m_prevActive$ = this.$m_active$, this.$m_active$ = null, this.$_unhighlightActiveObject$(this.$m_prevActive$), $silent$$24$$ || this.$_fireCurrentCellEvent$($active$$, $event$$141$$);
        }
        return!0;
      }
    }
    return!1;
  };
  $DvtDataGrid$$.prototype.$_createActiveObject$ = function $$DvtDataGrid$$$$$_createActiveObject$$($element$$81$$) {
    var $context$$51$$ = $element$$81$$[this.$m_resources$.$getMappedAttribute$("context")];
    return this.$m_utils$.$containsCSSClassName$($element$$81$$, this.$getMappedStyle$("headercell")) ? {type:"header", axis:$context$$51$$.axis, index:this.$getHeaderCellIndex$($element$$81$$), key:$context$$51$$.key, level:$context$$51$$.level} : {type:"cell", indexes:{row:this.$getRowIndex$($element$$81$$.parentNode), column:this.$getCellIndex$($element$$81$$)}, keys:{row:$context$$51$$.keys.row, column:$context$$51$$.keys.column}};
  };
  $DvtDataGrid$$.prototype.$_getActiveElement$ = function $$DvtDataGrid$$$$$_getActiveElement$$() {
    return this.$_getElementFromActiveObject$(this.$m_active$);
  };
  $DvtDataGrid$$.prototype.$_getElementFromActiveObject$ = function $$DvtDataGrid$$$$$_getElementFromActiveObject$$($active$$1_elements$$1$$) {
    if (null != $active$$1_elements$$1$$) {
      if ("header" == $active$$1_elements$$1$$.type) {
        if ("row" === $active$$1_elements$$1$$.axis) {
          return this.$_findRowHeaderByKey$($active$$1_elements$$1$$.key);
        }
        if ("column" === $active$$1_elements$$1$$.axis) {
          return this.$_findColumnHeaderByKey$($active$$1_elements$$1$$.key);
        }
      } else {
        if ($active$$1_elements$$1$$ = this.$getElementsInRange$(this.createRange($active$$1_elements$$1$$.indexes)), null != $active$$1_elements$$1$$) {
          return $active$$1_elements$$1$$[0];
        }
      }
    }
    return null;
  };
  $DvtDataGrid$$.prototype.$_compareActive$ = function $$DvtDataGrid$$$$$_compareActive$$($active1$$, $active2$$) {
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
  };
  $DvtDataGrid$$.prototype.$_fireBeforeCurrentCellEvent$ = function $$DvtDataGrid$$$$$_fireBeforeCurrentCellEvent$$($newActive$$, $oldActive$$, $event$$142$$) {
    return this.fireEvent("beforeCurrentCell", {event:$event$$142$$, ui:{currentCell:$newActive$$, previousCurrentCell:$oldActive$$}});
  };
  $DvtDataGrid$$.prototype.$_fireCurrentCellEvent$ = function $$DvtDataGrid$$$$$_fireCurrentCellEvent$$($active$$2$$, $event$$143$$) {
    this.fireEvent("currentCell", {event:$event$$143$$, ui:$active$$2$$});
  };
  $DvtDataGrid$$.prototype.$_isDatabodyCellActive$ = function $$DvtDataGrid$$$$$_isDatabodyCellActive$$() {
    return null != this.$m_active$ && "cell" == this.$m_active$.type;
  };
  $DvtDataGrid$$.prototype.$_updateActiveContext$ = function $$DvtDataGrid$$$$$_updateActiveContext$$($activeObject$$1$$, $prevActiveObject$$) {
    var $axis$$15$$, $index$$113$$, $level$$19$$, $contextObj$$, $skip$$2$$;
    if ("header" === $activeObject$$1$$.type) {
      $axis$$15$$ = $activeObject$$1$$.axis;
      $index$$113$$ = $activeObject$$1$$.index;
      $level$$19$$ = $activeObject$$1$$.level;
      $contextObj$$ = {};
      if ("row" === $activeObject$$1$$.axis) {
        if (1 < this.$m_rowHeaderLevelCount$ && (null == $prevActiveObject$$ || $level$$19$$ !== $prevActiveObject$$.level || $axis$$15$$ !== $prevActiveObject$$.axis) && ($contextObj$$.level = $level$$19$$), null == $prevActiveObject$$ || $index$$113$$ !== $prevActiveObject$$.index || $axis$$15$$ !== $prevActiveObject$$.axis) {
          $contextObj$$.rowHeader = $index$$113$$;
        }
      } else {
        if (1 < this.$m_columnHeaderLevelCount$ && (null == $prevActiveObject$$ || $level$$19$$ !== $prevActiveObject$$.level || $axis$$15$$ !== $prevActiveObject$$.axis) && ($contextObj$$.level = $level$$19$$), null == $prevActiveObject$$ || $index$$113$$ !== $prevActiveObject$$.index || $axis$$15$$ !== $prevActiveObject$$.axis) {
          $contextObj$$.columnHeader = $index$$113$$;
        }
      }
      this.$_updateContextInfo$($contextObj$$, $skip$$2$$);
    } else {
      null == $prevActiveObject$$ || "cell" != $prevActiveObject$$.type || null == $activeObject$$1$$ || this.$m_externalFocus$ || ($activeObject$$1$$.indexes.row === $prevActiveObject$$.indexes.row ? $skip$$2$$ = "row" : $activeObject$$1$$.indexes.column === $prevActiveObject$$.indexes.column && ($skip$$2$$ = "column")), this.$_updateContextInfo$($activeObject$$1$$.indexes, $skip$$2$$);
    }
  };
  $DvtDataGrid$$.prototype.$handleDatabodyClickActive$ = function $$DvtDataGrid$$$$$handleDatabodyClickActive$$($event$$144$$) {
    var $cell$$7$$;
    $cell$$7$$ = this.$findCell$($event$$144$$.target);
    null != $cell$$7$$ && this.$_setActive$($cell$$7$$, $event$$144$$);
  };
  $DvtDataGrid$$.prototype.$handleHeaderClickActive$ = function $$DvtDataGrid$$$$$handleHeaderClickActive$$($event$$145$$) {
    var $header$$12$$;
    $header$$12$$ = this.$findHeader$($event$$145$$.target);
    null != $header$$12$$ && (this.$_isSelectionEnabled$() && this.$_clearSelection$(), this.$_setActive$($header$$12$$, $event$$145$$));
  };
  $DvtDataGrid$$.prototype.$_scrollToActive$ = function $$DvtDataGrid$$$$$_scrollToActive$$($activeObject$$2$$) {
    "header" === $activeObject$$2$$.type ? this.$scrollToHeader$($activeObject$$2$$) : this.$scrollToIndex$($activeObject$$2$$.indexes);
  };
  $DvtDataGrid$$.prototype.$_getCellByIndex$ = function $$DvtDataGrid$$$$$_getCellByIndex$$($elements$$2_indexes$$13$$) {
    $elements$$2_indexes$$13$$ = this.$getElementsInRange$(this.createRange($elements$$2_indexes$$13$$));
    return null != $elements$$2_indexes$$13$$ ? $elements$$2_indexes$$13$$[0] : null;
  };
  $DvtDataGrid$$.prototype.$_getCellByKeys$ = function $$DvtDataGrid$$$$$_getCellByKeys$$($keys$$22$$) {
    var $cells_row$$29$$ = this.$_findRowByKey$($keys$$22$$.row);
    if (null != $cells_row$$29$$) {
      for (var $cells_row$$29$$ = $cells_row$$29$$.childNodes, $i$$166$$ = 0;$i$$166$$ < $cells_row$$29$$.length;$i$$166$$++) {
        if ($cells_row$$29$$[$i$$166$$][this.$m_resources$.$getMappedAttribute$("context")].keys.column === $keys$$22$$.column) {
          return $cells_row$$29$$[$i$$166$$];
        }
      }
    }
    return null;
  };
  $DvtDataGrid$$.prototype.$getRowIndex$ = function $$DvtDataGrid$$$$$getRowIndex$$($row$$30$$) {
    for (var $index$$114$$ = this.$m_startRow$;$row$$30$$.previousSibling;) {
      $index$$114$$ += 1, $row$$30$$ = $row$$30$$.previousSibling;
    }
    return $index$$114$$;
  };
  $DvtDataGrid$$.prototype.$getCellIndex$ = function $$DvtDataGrid$$$$$getCellIndex$$($cell$$8$$) {
    for (var $index$$115$$ = this.$m_startCol$;$cell$$8$$.previousSibling;) {
      $index$$115$$ += 1, $cell$$8$$ = $cell$$8$$.previousSibling;
    }
    return $index$$115$$;
  };
  $DvtDataGrid$$.prototype.$getHeaderCellIndex$ = function $$DvtDataGrid$$$$$getHeaderCellIndex$$($header$$13$$) {
    var $axis$$16$$, $index$$116$$;
    $axis$$16$$ = this.$getHeaderCellAxis$($header$$13$$);
    if ("row" === $axis$$16$$) {
      if (1 < this.$m_rowHeaderLevelCount$) {
        $index$$116$$ = this.$_getAttribute$($header$$13$$.parentNode, "start");
        if ($header$$13$$ === $header$$13$$.parentNode.firstChild) {
          return $index$$116$$;
        }
        $index$$116$$--;
      } else {
        $index$$116$$ = this.$m_startRowHeader$;
      }
    } else {
      if ("column" === $axis$$16$$) {
        if (1 < this.$m_columnHeaderLevelCount$) {
          $index$$116$$ = this.$_getAttribute$($header$$13$$.parentNode, "start");
          if ($header$$13$$ === $header$$13$$.parentNode.firstChild) {
            return $index$$116$$;
          }
          $index$$116$$--;
        } else {
          $index$$116$$ = this.$m_startColHeader$;
        }
      }
    }
    for (;$header$$13$$.previousSibling;) {
      $index$$116$$ += 1, $header$$13$$ = $header$$13$$.previousSibling;
    }
    return $index$$116$$;
  };
  $DvtDataGrid$$.prototype.$getHeaderCellAxis$ = function $$DvtDataGrid$$$$$getHeaderCellAxis$$($header$$14$$) {
    return this.$m_utils$.$containsCSSClassName$($header$$14$$, this.$getMappedStyle$("colheadercell")) ? "column" : this.$m_utils$.$containsCSSClassName$($header$$14$$, this.$getMappedStyle$("rowheadercell")) ? "row" : null;
  };
  $DvtDataGrid$$.prototype.$getHeaderCellLevel$ = function $$DvtDataGrid$$$$$getHeaderCellLevel$$($header$$15$$) {
    var $level$$20$$;
    if (this.$m_utils$.$containsCSSClassName$($header$$15$$, this.$getMappedStyle$("colheadercell"))) {
      if (1 === this.$m_columnHeaderLevelCount$) {
        return 0;
      }
    } else {
      if (this.$m_utils$.$containsCSSClassName$($header$$15$$, this.$getMappedStyle$("rowheadercell")) && 1 === this.$m_rowHeaderLevelCount$) {
        return 0;
      }
    }
    $level$$20$$ = this.$_getAttribute$($header$$15$$.parentNode, "level");
    return $header$$15$$ === $header$$15$$.parentNode.firstChild ? $level$$20$$ : $level$$20$$ + this.$getHeaderCellDepth$($header$$15$$.parentNode.firstChild);
  };
  $DvtDataGrid$$.prototype.$getHeaderCellDepth$ = function $$DvtDataGrid$$$$$getHeaderCellDepth$$($header$$16$$) {
    return this.$_getAttribute$($header$$16$$, "depth");
  };
  $DvtDataGrid$$.prototype.$findCell$ = function $$DvtDataGrid$$$$$findCell$$($elem$$35$$) {
    return this.find($elem$$35$$, "cell");
  };
  $DvtDataGrid$$.prototype.find = function $$DvtDataGrid$$$$find$($elem$$36$$, $key$$63$$, $className$$12$$) {
    if (null == $elem$$36$$ || $elem$$36$$ == this.$getRootElement$()) {
      return null;
    }
    void 0 == $className$$12$$ && ($className$$12$$ = this.$getMappedStyle$($key$$63$$));
    return null == $className$$12$$ ? null : this.$m_utils$.$containsCSSClassName$($elem$$36$$, $className$$12$$) ? $elem$$36$$ : this.find($elem$$36$$.parentNode, $key$$63$$, $className$$12$$);
  };
  $DvtDataGrid$$.prototype.$_highlightActive$ = function $$DvtDataGrid$$$$$_highlightActive$$() {
    this.$_highlightActiveObject$(this.$m_active$, this.$m_prevActive$, void 0);
  };
  $DvtDataGrid$$.prototype.$_unhighlightActive$ = function $$DvtDataGrid$$$$$_unhighlightActive$$() {
    this.$_unhighlightActiveObject$(this.$m_active$, void 0);
  };
  $DvtDataGrid$$.prototype.$_highlightActiveObject$ = function $$DvtDataGrid$$$$$_highlightActiveObject$$($activeObject$$3$$, $prevActiveObject$$1$$, $classNames$$3$$) {
    null == $classNames$$3$$ && ($classNames$$3$$ = ["focus"]);
    if (null != $activeObject$$3$$) {
      var $element$$82$$ = this.$_getElementFromActiveObject$($activeObject$$3$$);
      this.$_highlightElement$($element$$82$$, $classNames$$3$$);
      this.$_setAriaProperties$($activeObject$$3$$, $prevActiveObject$$1$$, $element$$82$$);
    }
  };
  $DvtDataGrid$$.prototype.$_unhighlightActiveObject$ = function $$DvtDataGrid$$$$$_unhighlightActiveObject$$($activeObject$$4$$, $classNames$$4$$) {
    null == $classNames$$4$$ && ($classNames$$4$$ = ["focus"]);
    if (null != $activeObject$$4$$) {
      var $element$$83$$ = this.$_getElementFromActiveObject$($activeObject$$4$$);
      this.$_unhighlightElement$($element$$83$$, $classNames$$4$$);
      this.$_unsetAriaProperties$($element$$83$$);
    }
  };
  $DvtDataGrid$$.prototype.$_highlightElement$ = function $$DvtDataGrid$$$$$_highlightElement$$($element$$84$$, $classNames$$5$$) {
    var $className$$13$$, $i$$167$$;
    for ($i$$167$$ = 0;$i$$167$$ < $classNames$$5$$.length;$i$$167$$++) {
      $className$$13$$ = this.$getMappedStyle$($classNames$$5$$[$i$$167$$]), this.$m_utils$.$addCSSClassName$($element$$84$$, $className$$13$$);
    }
  };
  $DvtDataGrid$$.prototype.$_unhighlightElement$ = function $$DvtDataGrid$$$$$_unhighlightElement$$($element$$85$$, $classNames$$6$$) {
    var $className$$14$$, $i$$168$$;
    for ($i$$168$$ = 0;$i$$168$$ < $classNames$$6$$.length;$i$$168$$++) {
      $className$$14$$ = this.$getMappedStyle$($classNames$$6$$[$i$$168$$]), this.$m_utils$.$removeCSSClassName$($element$$85$$, $className$$14$$);
    }
  };
  $DvtDataGrid$$.prototype.$_setAriaProperties$ = function $$DvtDataGrid$$$$$_setAriaProperties$$($activeObject$$5$$, $prevActiveObject$$2$$, $element$$86$$) {
    var $label$$5$$;
    $label$$5$$ = this.$getLabelledBy$($activeObject$$5$$, $prevActiveObject$$2$$, $element$$86$$);
    this.$_updateActiveContext$($activeObject$$5$$, $prevActiveObject$$2$$);
    $element$$86$$.setAttribute("tabIndex", 0);
    $element$$86$$.setAttribute("aria-labelledby", $label$$5$$);
    null != this.$m_cellToFocus$ && this.$m_cellToFocus$ == $element$$86$$ || $element$$86$$.focus();
  };
  $DvtDataGrid$$.prototype.$_unsetAriaProperties$ = function $$DvtDataGrid$$$$$_unsetAriaProperties$$($element$$87$$) {
    null != $element$$87$$ && ($element$$87$$.setAttribute("tabIndex", -1), $element$$87$$.removeAttribute("aria-labelledby"));
  };
  $DvtDataGrid$$.prototype.$getLabelledBy$ = function $$DvtDataGrid$$$$$getLabelledBy$$($activeObject$$6_columnHeader$$5$$, $prevActiveObject$$3$$, $element$$88$$) {
    var $label$$6_rowHeader$$19$$, $direction$$5_previousElement$$, $key$$64$$, $previousRowIndex$$, $previousColumnIndex$$;
    $label$$6_rowHeader$$19$$ = "";
    "header" == $activeObject$$6_columnHeader$$5$$.type ? (null == $prevActiveObject$$3$$ || "header" != $prevActiveObject$$3$$.type || this.$m_externalFocus$ || ("row" === $prevActiveObject$$3$$.axis && 1 < this.$m_rowHeaderLevelCount$ ? $direction$$5_previousElement$$ = this.$_getRowHeaderByIndex$($prevActiveObject$$3$$.index, $prevActiveObject$$3$$.level) : "column" === $prevActiveObject$$3$$.axis && 1 < this.$m_columnHeaderLevelCount$ && ($direction$$5_previousElement$$ = this.$_getColumnHeaderByIndex$($prevActiveObject$$3$$.index, 
    $prevActiveObject$$3$$.level))), $label$$6_rowHeader$$19$$ = this.$createSubId$("context") + this.$_getHeaderAndParentIds$($element$$88$$, $direction$$5_previousElement$$), $direction$$5_previousElement$$ = $element$$88$$.getAttribute(this.$m_resources$.$getMappedAttribute$("sortDir")), "ascending" === $direction$$5_previousElement$$ ? ($key$$64$$ = "accessibleSortAscending", $label$$6_rowHeader$$19$$ = $label$$6_rowHeader$$19$$ + " " + this.$createSubId$("state")) : "descending" === $direction$$5_previousElement$$ && 
    ($key$$64$$ = "accessibleSortDescending", $label$$6_rowHeader$$19$$ = $label$$6_rowHeader$$19$$ + " " + this.$createSubId$("state")), !0 === this.$m_externalFocus$ && ($label$$6_rowHeader$$19$$ = [this.$createSubId$("summary"), $label$$6_rowHeader$$19$$].join(" "), this.$m_externalFocus$ = !1), null != $key$$64$$ && this.$_updateStateInfo$($key$$64$$, {id:""}), $element$$88$$.setAttribute("tabIndex", 0)) : (null != $prevActiveObject$$3$$ && ("header" === $prevActiveObject$$3$$.type ? ($previousRowIndex$$ = 
    "row" === $prevActiveObject$$3$$.axis ? $prevActiveObject$$3$$.index : null, $previousColumnIndex$$ = "column" === $prevActiveObject$$3$$.axis ? $prevActiveObject$$3$$.index : null) : ($previousRowIndex$$ = $prevActiveObject$$3$$.indexes.row, $previousColumnIndex$$ = $prevActiveObject$$3$$.indexes.column)), -1 == this.$m_endRowHeader$ || $activeObject$$6_columnHeader$$5$$.indexes.row == $previousRowIndex$$ && !this.$m_externalFocus$ || ($label$$6_rowHeader$$19$$ = this.$getHeaderFromCell$($element$$88$$, 
    "row"), null != $previousRowIndex$$ && ($direction$$5_previousElement$$ = this.$_getRowHeaderByIndex$($previousRowIndex$$, this.$m_rowHeaderLevelCount$ - 1)), $label$$6_rowHeader$$19$$ = this.$_getHeaderAndParentIds$($label$$6_rowHeader$$19$$, $direction$$5_previousElement$$)), -1 == this.$m_endColHeader$ || $activeObject$$6_columnHeader$$5$$.indexes.column == $previousColumnIndex$$ && !this.$m_externalFocus$ || ($activeObject$$6_columnHeader$$5$$ = this.$getHeaderFromCell$($element$$88$$, "column"), 
    null != $previousColumnIndex$$ && ($direction$$5_previousElement$$ = this.$_getColumnHeaderByIndex$($previousColumnIndex$$, this.$m_columnHeaderLevelCount$ - 1)), $label$$6_rowHeader$$19$$ = "" == $label$$6_rowHeader$$19$$ ? this.$_getHeaderAndParentIds$($activeObject$$6_columnHeader$$5$$, $direction$$5_previousElement$$) : [$label$$6_rowHeader$$19$$, this.$_getHeaderAndParentIds$($activeObject$$6_columnHeader$$5$$, $direction$$5_previousElement$$)].join(" ")), $label$$6_rowHeader$$19$$ = "" == 
    $label$$6_rowHeader$$19$$ ? $element$$88$$.id : [$label$$6_rowHeader$$19$$, $element$$88$$.id].join(" "), $label$$6_rowHeader$$19$$ = [this.$createSubId$("context"), $label$$6_rowHeader$$19$$, this.$createSubId$("state")].join(" "), this.$m_externalFocus$ && ($label$$6_rowHeader$$19$$ = [this.$createSubId$("summary"), $label$$6_rowHeader$$19$$].join(" "), this.$m_externalFocus$ = !1));
    return $label$$6_rowHeader$$19$$;
  };
  $DvtDataGrid$$.prototype.$getHeaderFromCell$ = function $$DvtDataGrid$$$$$getHeaderFromCell$$($cell$$9$$, $axis$$17$$) {
    var $colIndex_row$$31_rowIndex$$7$$;
    if ("row" === $axis$$17$$) {
      if (null != this.$m_rowHeader$ && ($colIndex_row$$31_rowIndex$$7$$ = $cell$$9$$.parentNode, $colIndex_row$$31_rowIndex$$7$$ = this.$findIndexOf$($colIndex_row$$31_rowIndex$$7$$) + this.$m_startRow$, -1 < $colIndex_row$$31_rowIndex$$7$$)) {
        return this.$_getRowHeaderByIndex$($colIndex_row$$31_rowIndex$$7$$, this.$m_rowHeaderLevelCount$ - 1);
      }
    } else {
      if ("column" === $axis$$17$$ && null != this.$m_colHeader$ && ($colIndex_row$$31_rowIndex$$7$$ = this.$findIndexOf$($cell$$9$$) + this.$m_startCol$, -1 < $colIndex_row$$31_rowIndex$$7$$)) {
        return this.$_getColumnHeaderByIndex$($colIndex_row$$31_rowIndex$$7$$, this.$m_columnHeaderLevelCount$ - 1);
      }
    }
    return null;
  };
  $DvtDataGrid$$.prototype.$findIndexOf$ = function $$DvtDataGrid$$$$$findIndexOf$$($elem$$37$$) {
    var $child$$2$$, $children$$1$$, $index$$117$$, $i$$169$$;
    $children$$1$$ = $elem$$37$$.parentNode.childNodes;
    $index$$117$$ = -1;
    for ($i$$169$$ = 0;$i$$169$$ < $children$$1$$.length;$i$$169$$ += 1) {
      $child$$2$$ = $children$$1$$[$i$$169$$];
      if ($child$$2$$ === $elem$$37$$) {
        return $index$$117$$ + 1;
      }
      "DIV" == $child$$2$$.nodeName && $index$$117$$++;
    }
    return $index$$117$$;
  };
  $DvtDataGrid$$.prototype.createRange = function $$DvtDataGrid$$$$createRange$($startIndex$$14$$, $endColumn_endIndex$$1$$, $startKey$$, $endKey$$) {
    var $startRow$$3$$, $endRow$$, $startColumn$$, $startRowKey$$1$$, $endRowKey$$1$$, $startColumnKey$$, $endColumnKey$$;
    $endColumn_endIndex$$1$$ && ($startIndex$$14$$.row < $endColumn_endIndex$$1$$.row || -1 == $endColumn_endIndex$$1$$.row ? ($startRow$$3$$ = $startIndex$$14$$.row, $endRow$$ = $endColumn_endIndex$$1$$.row, $startKey$$ && ($startRowKey$$1$$ = $startKey$$.row, $endRowKey$$1$$ = $endKey$$.row)) : ($startRow$$3$$ = $endColumn_endIndex$$1$$.row, $endRow$$ = $startIndex$$14$$.row, $startKey$$ && ($startRowKey$$1$$ = $endKey$$.row, $endRowKey$$1$$ = $startKey$$.row)), isNaN($startIndex$$14$$.column) || 
    isNaN($endColumn_endIndex$$1$$.column) ? ($startIndex$$14$$ = {row:$startRow$$3$$}, $endColumn_endIndex$$1$$ = {row:$endRow$$}) : ($startIndex$$14$$.column < $endColumn_endIndex$$1$$.column || -1 == $endColumn_endIndex$$1$$.column ? ($startColumn$$ = $startIndex$$14$$.column, $endColumn_endIndex$$1$$ = $endColumn_endIndex$$1$$.column, $startKey$$ && ($startColumnKey$$ = $startKey$$.column, $endColumnKey$$ = $endKey$$.column)) : ($startColumn$$ = $endColumn_endIndex$$1$$.column, $endColumn_endIndex$$1$$ = 
    $startIndex$$14$$.column, $startKey$$ && ($startColumnKey$$ = $endKey$$.column, $endColumnKey$$ = $startKey$$.column)), $startIndex$$14$$ = {row:$startRow$$3$$, column:$startColumn$$}, $endColumn_endIndex$$1$$ = {row:$endRow$$, column:$endColumn_endIndex$$1$$}), $startKey$$ && ($startKey$$ = {row:$startRowKey$$1$$, column:$startColumnKey$$}, $endKey$$ = {row:$endRowKey$$1$$, column:$endColumnKey$$}));
    return $startKey$$ ? {startIndex:$startIndex$$14$$, endIndex:$endColumn_endIndex$$1$$, startKey:$startKey$$, endKey:$endKey$$} : {startIndex:$startIndex$$14$$, endIndex:$endColumn_endIndex$$1$$};
  };
  $DvtDataGrid$$.prototype.$_createRangeWithKeys$ = function $$DvtDataGrid$$$$$_createRangeWithKeys$$($startIndex$$15$$, $endIndex$$2$$, $callback$$93$$) {
    this.$_keys$($startIndex$$15$$, this.$_createRangeStartKeyCallback$.bind(this, $endIndex$$2$$, $callback$$93$$));
  };
  $DvtDataGrid$$.prototype.$_createRangeStartKeyCallback$ = function $$DvtDataGrid$$$$$_createRangeStartKeyCallback$$($endIndex$$3$$, $callback$$94$$, $startKey$$1$$, $startIndex$$16$$) {
    $endIndex$$3$$ === $startIndex$$16$$ ? this.$_createRangeEndKeyCallback$($startKey$$1$$, $startIndex$$16$$, $callback$$94$$, $startKey$$1$$, $startIndex$$16$$) : $endIndex$$3$$ ? this.$_keys$($endIndex$$3$$, this.$_createRangeEndKeyCallback$.bind(this, $startKey$$1$$, $startIndex$$16$$, $callback$$94$$)) : $callback$$94$$.call(this, {startIndex:$startIndex$$16$$, endIndex:$startIndex$$16$$, startKey:$startKey$$1$$, endKey:$startKey$$1$$});
  };
  $DvtDataGrid$$.prototype.$_createRangeEndKeyCallback$ = function $$DvtDataGrid$$$$$_createRangeEndKeyCallback$$($startKey$$2$$, $startIndex$$17$$, $callback$$95$$, $endKey$$1$$, $endIndex$$4$$) {
    $callback$$95$$.call(this, this.createRange($startIndex$$17$$, $endIndex$$4$$, $startKey$$2$$, $endKey$$1$$));
  };
  $DvtDataGrid$$.prototype.$getEndIndex$ = function $$DvtDataGrid$$$$$getEndIndex$$($range$$6$$) {
    return null == $range$$6$$.endIndex ? $range$$6$$.startIndex : $range$$6$$.endIndex;
  };
  $DvtDataGrid$$.prototype.$getElementsInRange$ = function $$DvtDataGrid$$$$$getElementsInRange$$($range$$7_rangeEndRow$$, $nodes$$1_startRow$$4$$, $endRow$$1_rows$$6$$) {
    var $columns$$2_startIndex$$18$$, $endIndex$$5_j$$26$$, $i$$170_rangeStartRow$$, $rangeStartColumn_row$$32$$, $rangeEndColumn$$, $cell$$10$$;
    void 0 == $nodes$$1_startRow$$4$$ && ($nodes$$1_startRow$$4$$ = this.$m_startRow$);
    void 0 == $endRow$$1_rows$$6$$ && ($endRow$$1_rows$$6$$ = this.$m_endRow$ + 1);
    $columns$$2_startIndex$$18$$ = $range$$7_rangeEndRow$$.startIndex;
    $endIndex$$5_j$$26$$ = this.$getEndIndex$($range$$7_rangeEndRow$$);
    $i$$170_rangeStartRow$$ = $columns$$2_startIndex$$18$$.row;
    $range$$7_rangeEndRow$$ = $endIndex$$5_j$$26$$.row;
    -1 == $range$$7_rangeEndRow$$ && ($range$$7_rangeEndRow$$ = Number.MAX_VALUE);
    if ($endRow$$1_rows$$6$$ < $i$$170_rangeStartRow$$ || $range$$7_rangeEndRow$$ < $nodes$$1_startRow$$4$$ || !isNaN($columns$$2_startIndex$$18$$.column) && !isNaN($endIndex$$5_j$$26$$.column) && ($rangeStartColumn_row$$32$$ = $columns$$2_startIndex$$18$$.column, $rangeEndColumn$$ = $endIndex$$5_j$$26$$.column, -1 == $rangeEndColumn$$ && ($rangeEndColumn$$ = Number.MAX_VALUE), this.$m_endCol$ + 1 < $rangeStartColumn_row$$32$$ || $rangeEndColumn$$ < this.$m_startCol$)) {
      return null;
    }
    $nodes$$1_startRow$$4$$ = [];
    $endRow$$1_rows$$6$$ = this.$m_databody$.firstChild.childNodes;
    $i$$170_rangeStartRow$$ = Math.max(0, $i$$170_rangeStartRow$$ - this.$m_startRow$);
    $range$$7_rangeEndRow$$ = Math.min($endRow$$1_rows$$6$$.length, $range$$7_rangeEndRow$$ - this.$m_startRow$ + 1);
    if (isNaN($rangeStartColumn_row$$32$$) || isNaN($rangeEndColumn$$)) {
      for (;$i$$170_rangeStartRow$$ < $range$$7_rangeEndRow$$;$i$$170_rangeStartRow$$ += 1) {
        $rangeStartColumn_row$$32$$ = $endRow$$1_rows$$6$$[$i$$170_rangeStartRow$$], $nodes$$1_startRow$$4$$.push($rangeStartColumn_row$$32$$);
      }
    } else {
      for ($rangeStartColumn_row$$32$$ = Math.max(0, $rangeStartColumn_row$$32$$ - this.$m_startCol$), $rangeEndColumn$$ = $rangeEndColumn$$ - this.$m_startCol$ + 1;$i$$170_rangeStartRow$$ < $range$$7_rangeEndRow$$;$i$$170_rangeStartRow$$ += 1) {
        for ($columns$$2_startIndex$$18$$ = $endRow$$1_rows$$6$$[$i$$170_rangeStartRow$$].childNodes, $endIndex$$5_j$$26$$ = $rangeStartColumn_row$$32$$;$endIndex$$5_j$$26$$ < Math.min($columns$$2_startIndex$$18$$.length, $rangeEndColumn$$);$endIndex$$5_j$$26$$ += 1) {
          $cell$$10$$ = $columns$$2_startIndex$$18$$[$endIndex$$5_j$$26$$], $nodes$$1_startRow$$4$$.push($cell$$10$$);
        }
      }
    }
    return $nodes$$1_startRow$$4$$;
  };
  $DvtDataGrid$$.prototype.$isReadCurrentContent$ = function $$DvtDataGrid$$$$$isReadCurrentContent$$($event$$146$$) {
    return $event$$146$$.altKey && this.$m_utils$.$ctrlEquivalent$($event$$146$$) && $event$$146$$.keyCode === $DvtDataGrid$$.$NUM5_KEY$;
  };
  $DvtDataGrid$$.prototype.$readCurrentContent$ = function $$DvtDataGrid$$$$$readCurrentContent$$() {
    var $cell$$11_current$$5_currentCell_range$$8$$, $subid$$, $needToModify$$, $labelledBy$$;
    if (null == this.$m_active$) {
      return!1;
    }
    if ("header" == this.$m_active$.type) {
      $cell$$11_current$$5_currentCell_range$$8$$ = {}, "row" === this.$m_active$.axis ? (1 < this.$m_rowHeaderLevelCount$ && ($cell$$11_current$$5_currentCell_range$$8$$.level = this.$m_active$.level), $cell$$11_current$$5_currentCell_range$$8$$.rowHeader = this.$m_active$.index) : (1 < this.$m_columnHeaderLevelCount$ && ($cell$$11_current$$5_currentCell_range$$8$$.level = this.$m_active$.level), $cell$$11_current$$5_currentCell_range$$8$$.columnHeader = this.$m_active$.index), $cell$$11_current$$5_currentCell_range$$8$$ = 
      this.$_getActiveElement$();
    } else {
      $cell$$11_current$$5_currentCell_range$$8$$ = this.$m_active$.indexes;
      this.$_isSelectionEnabled$() && this.$isMultipleSelection$() && null != this.$m_selectionFrontier$ && ($cell$$11_current$$5_currentCell_range$$8$$ = this.$m_selectionFrontier$);
      if (null == $cell$$11_current$$5_currentCell_range$$8$$) {
        return!1;
      }
      $cell$$11_current$$5_currentCell_range$$8$$ = this.createRange($cell$$11_current$$5_currentCell_range$$8$$);
      $cell$$11_current$$5_currentCell_range$$8$$ = this.$getElementsInRange$($cell$$11_current$$5_currentCell_range$$8$$);
      if (null == $cell$$11_current$$5_currentCell_range$$8$$ || 0 == $cell$$11_current$$5_currentCell_range$$8$$.length) {
        return!1;
      }
      $cell$$11_current$$5_currentCell_range$$8$$ = $cell$$11_current$$5_currentCell_range$$8$$[0];
    }
    this.$_setAriaProperties$(this.$_createActiveObject$($cell$$11_current$$5_currentCell_range$$8$$), null, $cell$$11_current$$5_currentCell_range$$8$$);
    $subid$$ = this.$createSubId$("placeHolder");
    $needToModify$$ = !0;
    $labelledBy$$ = $cell$$11_current$$5_currentCell_range$$8$$.getAttribute("aria-labelledby");
    null != $labelledBy$$ && -1 != $labelledBy$$.indexOf($subid$$) && ($needToModify$$ = !1);
    $needToModify$$ ? (this.$m_placeHolder$.textContent = "\x26nbsp", $labelledBy$$ = $cell$$11_current$$5_currentCell_range$$8$$.getAttribute("aria-labelledby"), $cell$$11_current$$5_currentCell_range$$8$$.setAttribute("aria-labelledby", $labelledBy$$ + " " + $subid$$)) : this.$m_utils$.empty(this.$m_placeHolder$);
    $cell$$11_current$$5_currentCell_range$$8$$.focus();
    return!0;
  };
  $DvtDataGrid$$.prototype.$_handleActionableModeKeyDown$ = function $$DvtDataGrid$$$$$_handleActionableModeKeyDown$$($event$$147_focusElems$$2$$, $element$$89$$, $isHeader$$) {
    var $keyCode$$1$$, $target$$96$$, $shiftKey$$2$$, $ctrlKey$$2$$;
    $keyCode$$1$$ = $event$$147_focusElems$$2$$.keyCode;
    $shiftKey$$2$$ = $event$$147_focusElems$$2$$.shiftKey;
    $ctrlKey$$2$$ = this.$m_utils$.$ctrlEquivalent$($event$$147_focusElems$$2$$);
    $target$$96$$ = $event$$147_focusElems$$2$$.target;
    if ($keyCode$$1$$ == $DvtDataGrid$$.$ESC_KEY$) {
      return this.$_exitActionableMode$(), this.$_highlightActive$(), !0;
    }
    if ($keyCode$$1$$ === $DvtDataGrid$$.$TAB_KEY$) {
      $event$$147_focusElems$$2$$ = this.$getFocusableElementsInNode$($element$$89$$);
      if (0 < $event$$147_focusElems$$2$$.length && $target$$96$$ == $event$$147_focusElems$$2$$[$event$$147_focusElems$$2$$.length - 1]) {
        return $event$$147_focusElems$$2$$[0].focus(), !0;
      }
      if (0 < $event$$147_focusElems$$2$$.length && $target$$96$$ == $event$$147_focusElems$$2$$[0] && $shiftKey$$2$$) {
        return $event$$147_focusElems$$2$$[$event$$147_focusElems$$2$$.length - 1].focus(), !0;
      }
    } else {
      if (this.$isNavigationKey$($keyCode$$1$$) && !$ctrlKey$$2$$) {
        if (this.$_isFocusableElement$($target$$96$$)) {
          return!1;
        }
        this.$_isContainFocusableElement$($element$$89$$) || this.$_exitActionableMode$();
        if ($isHeader$$) {
          return this.$handleHeaderArrowKeys$($keyCode$$1$$, $event$$147_focusElems$$2$$);
        }
        this.$_isSelectionEnabled$() && this.$_updateStateInfo$("accessibleStateSelected");
        return this.$handleCellArrowKeys$($keyCode$$1$$, $shiftKey$$2$$ && this.$isMultipleSelection$(), $event$$147_focusElems$$2$$);
      }
    }
    return!1;
  };
  $DvtDataGrid$$.prototype.$_enterActionableMode$ = function $$DvtDataGrid$$$$$_enterActionableMode$$($element$$90$$) {
    this.$_setFocusToFirstFocusableElement$($element$$90$$) && (this.$setActionableMode$(!0), this.$_enableAllFocusableElements$($element$$90$$));
    return!1;
  };
  $DvtDataGrid$$.prototype.$_exitActionableMode$ = function $$DvtDataGrid$$$$$_exitActionableMode$$() {
    var $elem$$38$$;
    this.$isActionableMode$() && ($elem$$38$$ = this.$_getActiveElement$(), this.$setActionableMode$(!1), this.$_disableAllFocusableElements$($elem$$38$$));
  };
  $DvtDataGrid$$.prototype.$handleActiveKeyDown$ = function $$DvtDataGrid$$$$$handleActiveKeyDown$$($event$$148$$) {
    var $keyCode$$2$$, $cell$$12$$;
    $keyCode$$2$$ = $event$$148$$.keyCode;
    $cell$$12$$ = this.$findCell$($event$$148$$.target);
    return this.$isActionableMode$() ? this.$_handleActionableModeKeyDown$($event$$148$$, $cell$$12$$, !1) : $keyCode$$2$$ == $DvtDataGrid$$.$F2_KEY$ || $keyCode$$2$$ == $DvtDataGrid$$.$ENTER_KEY$ ? this.$_enterActionableMode$($cell$$12$$) : this.$isNavigationKey$($keyCode$$2$$) && !this.$m_utils$.$ctrlEquivalent$($event$$148$$) ? this.$handleCellArrowKeys$($keyCode$$2$$, !1, $event$$148$$) : this.$isReadCurrentContent$($event$$148$$) ? this.$readCurrentContent$() : !1;
  };
  $DvtDataGrid$$.prototype.$isNavigationKey$ = function $$DvtDataGrid$$$$$isNavigationKey$$($keyCode$$3$$) {
    return this.$isArrowKey$($keyCode$$3$$) || $keyCode$$3$$ == $DvtDataGrid$$.$HOME_KEY$ || $keyCode$$3$$ == $DvtDataGrid$$.$END_KEY$ || $keyCode$$3$$ == $DvtDataGrid$$.$PAGEUP_KEY$ || $keyCode$$3$$ == $DvtDataGrid$$.$PAGEDOWN_KEY$;
  };
  $DvtDataGrid$$.prototype.$isArrowKey$ = function $$DvtDataGrid$$$$$isArrowKey$$($keyCode$$4$$) {
    return $keyCode$$4$$ == $DvtDataGrid$$.$UP_KEY$ || $keyCode$$4$$ == $DvtDataGrid$$.$DOWN_KEY$ || $keyCode$$4$$ == $DvtDataGrid$$.$LEFT_KEY$ || $keyCode$$4$$ == $DvtDataGrid$$.$RIGHT_KEY$;
  };
  $DvtDataGrid$$.prototype.createIndex = function $$DvtDataGrid$$$$createIndex$($row$$33$$, $column$$8$$) {
    return null != $row$$33$$ ? null != $column$$8$$ ? {row:$row$$33$$, column:$column$$8$$} : {row:$row$$33$$} : null;
  };
  $DvtDataGrid$$.prototype.$handleHeaderKeyDown$ = function $$DvtDataGrid$$$$$handleHeaderKeyDown$$($event$$149$$) {
    var $axis$$18_start$$36$$, $index$$118$$, $elem$$39_end$$9$$, $keyCode$$5$$, $processed$$2$$ = !1, $level$$21$$, $ctrlKey$$4$$;
    if ("header" == this.$m_active$.type) {
      return $axis$$18_start$$36$$ = this.$m_active$.axis, $index$$118$$ = this.$m_active$.index, $level$$21$$ = this.$m_active$.level, $elem$$39_end$$9$$ = this.$_getActiveElement$(), $keyCode$$5$$ = $event$$149$$.keyCode, $ctrlKey$$4$$ = this.$m_utils$.$ctrlEquivalent$($event$$149$$), this.$isActionableMode$() ? $processed$$2$$ = this.$_handleActionableModeKeyDown$($event$$149$$, $elem$$39_end$$9$$, !0) : this.$isArrowKey$($keyCode$$5$$) && !$ctrlKey$$4$$ ? $processed$$2$$ = this.$handleHeaderArrowKeys$($keyCode$$5$$, 
      $event$$149$$) : $keyCode$$5$$ == $DvtDataGrid$$.$F2_KEY$ ? this.$_enterActionableMode$($elem$$39_end$$9$$) : $keyCode$$5$$ == $DvtDataGrid$$.$SPACE_KEY$ ? this.$_isSelectionEnabled$() && this.$isMultipleSelection$() && ("row" === $axis$$18_start$$36$$ ? (this.$m_rowHeaderLevelCount$ - 1 === $level$$21$$ ? $elem$$39_end$$9$$ = $axis$$18_start$$36$$ = $index$$118$$ : ($axis$$18_start$$36$$ = this.$_getAttribute$($elem$$39_end$$9$$.parentNode, "start"), $elem$$39_end$$9$$ = $axis$$18_start$$36$$ + 
      this.$_getAttribute$($elem$$39_end$$9$$.parentNode, "extent") - 1), this.$_selectEntireRow$($axis$$18_start$$36$$, $elem$$39_end$$9$$, $event$$149$$), this.$_setAccInfoText$("accessibleRowSelected", {row:$index$$118$$ + 1}), $processed$$2$$ = !0) : "column" === $axis$$18_start$$36$$ && "cell" == this.$m_options$.$getSelectionMode$() && (this.$m_columnHeaderLevelCount$ - 1 === $level$$21$$ ? $elem$$39_end$$9$$ = $axis$$18_start$$36$$ = $index$$118$$ : ($axis$$18_start$$36$$ = this.$_getAttribute$($elem$$39_end$$9$$.parentNode, 
      "start"), $elem$$39_end$$9$$ = $axis$$18_start$$36$$ + this.$_getAttribute$($elem$$39_end$$9$$.parentNode, "extent") - 1), this.$_selectEntireColumn$($axis$$18_start$$36$$, $elem$$39_end$$9$$, $event$$149$$), this.$_setAccInfoText$("accessibleColumnSelected", {column:$index$$118$$ + 1}), $processed$$2$$ = !0)) : $keyCode$$5$$ == $DvtDataGrid$$.$ENTER_KEY$ ? "true" == $elem$$39_end$$9$$.getAttribute(this.$m_resources$.$getMappedAttribute$("sortable")) ? (this.$_handleKeyboardSort$($elem$$39_end$$9$$, 
      $event$$149$$), $processed$$2$$ = !0) : this.$_enterActionableMode$($elem$$39_end$$9$$) : $keyCode$$5$$ == $DvtDataGrid$$.$PAGEUP_KEY$ ? "row" === $axis$$18_start$$36$$ && ($elem$$39_end$$9$$ = this.$_getRowHeaderByIndex$(0, $level$$21$$), this.$_setActive$($elem$$39_end$$9$$, $event$$149$$), $processed$$2$$ = !0) : $keyCode$$5$$ == $DvtDataGrid$$.$PAGEDOWN_KEY$ ? "row" === $axis$$18_start$$36$$ && ($index$$118$$ = this.$_isCountUnknown$("row") || this.$_isHighWatermarkScrolling$() ? Math.max(0, 
      this.$m_endRowHeader$) : Math.max(0, this.$m_dataSource$.getCount("row") - 1), $elem$$39_end$$9$$ = this.$_getRowHeaderByIndex$($index$$118$$, $level$$21$$), this.$_setActive$($elem$$39_end$$9$$, $event$$149$$), $processed$$2$$ = !0) : $keyCode$$5$$ == $DvtDataGrid$$.$HOME_KEY$ ? "column" === $axis$$18_start$$36$$ && ($elem$$39_end$$9$$ = this.$_getColumnHeaderByIndex$(0, $level$$21$$), this.$_setActive$($elem$$39_end$$9$$, $event$$149$$), $processed$$2$$ = !0) : $keyCode$$5$$ == $DvtDataGrid$$.$END_KEY$ ? 
      "column" === $axis$$18_start$$36$$ && ($index$$118$$ = this.$_isCountUnknown$("column") || this.$_isHighWatermarkScrolling$() ? Math.max(0, this.$m_endColHeader$) : Math.max(0, this.$m_dataSource$.getCount("column") - 1), $elem$$39_end$$9$$ = this.$_getColumnHeaderByIndex$($index$$118$$, $level$$21$$), this.$_setActive$($elem$$39_end$$9$$, $event$$149$$), $processed$$2$$ = !0) : $processed$$2$$ = this.$isReadCurrentContent$($event$$149$$) ? this.$readCurrentContent$() : this.$_handleCutPasteKeydown$($event$$149$$), 
      $processed$$2$$;
    }
  };
  $DvtDataGrid$$.prototype.$handleHeaderArrowKeys$ = function $$DvtDataGrid$$$$$handleHeaderArrowKeys$$($keyCode$$6$$, $event$$150$$) {
    var $axis$$19_newCellIndex$$1$$, $index$$119_newIndex$$1$$, $level$$22_newLevel$$, $elem$$40_newElement$$, $depth$$5$$;
    if (!this.$isFetchComplete$()) {
      return!0;
    }
    this.$m_resources$.$isRTLMode$() && ($keyCode$$6$$ == $DvtDataGrid$$.$LEFT_KEY$ ? $keyCode$$6$$ = $DvtDataGrid$$.$RIGHT_KEY$ : $keyCode$$6$$ == $DvtDataGrid$$.$RIGHT_KEY$ && ($keyCode$$6$$ = $DvtDataGrid$$.$LEFT_KEY$));
    $axis$$19_newCellIndex$$1$$ = this.$m_active$.axis;
    $index$$119_newIndex$$1$$ = this.$m_active$.index;
    $level$$22_newLevel$$ = this.$m_active$.level;
    $elem$$40_newElement$$ = this.$_getActiveElement$();
    $depth$$5$$ = null != $elem$$40_newElement$$ ? this.$_getAttribute$($elem$$40_newElement$$, "depth") : 1;
    switch($keyCode$$6$$) {
      case $DvtDataGrid$$.$LEFT_KEY$:
        if ("column" === $axis$$19_newCellIndex$$1$$ && 0 < $index$$119_newIndex$$1$$) {
          if (1 === this.$m_columnHeaderLevelCount$) {
            $index$$119_newIndex$$1$$ -= 1, $elem$$40_newElement$$ = $elem$$40_newElement$$.previousSibling;
          } else {
            if ($elem$$40_newElement$$ = this.$_getColumnHeaderByIndex$($index$$119_newIndex$$1$$ - 1, $level$$22_newLevel$$), $index$$119_newIndex$$1$$ = null != $elem$$40_newElement$$ ? this.$_getAttribute$($elem$$40_newElement$$.parentNode, "start") : $index$$119_newIndex$$1$$ - 1, $level$$22_newLevel$$ = null != $elem$$40_newElement$$ ? this.$getHeaderCellLevel$($elem$$40_newElement$$) : $level$$22_newLevel$$, 0 > $index$$119_newIndex$$1$$) {
              break;
            }
          }
          this.$scrollToHeader$({axis:$axis$$19_newCellIndex$$1$$, index:$index$$119_newIndex$$1$$, $level$:$level$$22_newLevel$$});
          this.$_setActive$($elem$$40_newElement$$, $event$$150$$);
        } else {
          "row" === $axis$$19_newCellIndex$$1$$ && 0 < $level$$22_newLevel$$ && ($elem$$40_newElement$$ = this.$_getRowHeaderByIndex$($index$$119_newIndex$$1$$, $level$$22_newLevel$$ - 1), $index$$119_newIndex$$1$$ = this.$_getAttribute$($elem$$40_newElement$$.parentNode, "start"), $level$$22_newLevel$$ = this.$getHeaderCellLevel$($elem$$40_newElement$$), this.$scrollToHeader$({axis:$axis$$19_newCellIndex$$1$$, index:$index$$119_newIndex$$1$$, $level$:$level$$22_newLevel$$}), this.$_setActive$($elem$$40_newElement$$, 
          $event$$150$$));
        }
        break;
      case $DvtDataGrid$$.$RIGHT_KEY$:
        "row" === $axis$$19_newCellIndex$$1$$ ? $level$$22_newLevel$$ + $depth$$5$$ >= this.$m_rowHeaderLevelCount$ ? ($axis$$19_newCellIndex$$1$$ = this.createIndex($index$$119_newIndex$$1$$, 0), this.$_isSelectionEnabled$() ? this.$selectAndFocus$($axis$$19_newCellIndex$$1$$, $event$$150$$) : this.$_setActiveByIndex$($axis$$19_newCellIndex$$1$$, $event$$150$$)) : ($elem$$40_newElement$$ = this.$_getRowHeaderByIndex$($index$$119_newIndex$$1$$, $level$$22_newLevel$$ + $depth$$5$$), $index$$119_newIndex$$1$$ = 
        this.$_getAttribute$($elem$$40_newElement$$.parentNode, "start"), $level$$22_newLevel$$ = this.$getHeaderCellLevel$($elem$$40_newElement$$), this.$scrollToHeader$({axis:$axis$$19_newCellIndex$$1$$, index:$index$$119_newIndex$$1$$, $level$:$level$$22_newLevel$$}), this.$_setActive$($elem$$40_newElement$$, $event$$150$$)) : (1 === this.$m_columnHeaderLevelCount$ ? ($index$$119_newIndex$$1$$ += 1, $elem$$40_newElement$$ = $elem$$40_newElement$$.nextSibling) : ($index$$119_newIndex$$1$$ = $level$$22_newLevel$$ === 
        this.$m_columnHeaderLevelCount$ - 1 ? $index$$119_newIndex$$1$$ + 1 : null != $elem$$40_newElement$$ ? this.$_getAttribute$($elem$$40_newElement$$.parentNode, "start") + this.$_getAttribute$($elem$$40_newElement$$.parentNode, "extent") : $index$$119_newIndex$$1$$ + 1, $elem$$40_newElement$$ = this.$_getColumnHeaderByIndex$($index$$119_newIndex$$1$$, $level$$22_newLevel$$), $level$$22_newLevel$$ = null != $elem$$40_newElement$$ ? this.$getHeaderCellLevel$($elem$$40_newElement$$) : $level$$22_newLevel$$), 
        $index$$119_newIndex$$1$$ > this.$m_endColHeader$ && this.$m_stopColumnHeaderFetch$ || !(this.$_isCountUnknown$("column") || $index$$119_newIndex$$1$$ < this.$m_dataSource$.getCount("column")) || (this.$scrollToHeader$({axis:$axis$$19_newCellIndex$$1$$, index:$index$$119_newIndex$$1$$, $level$:$level$$22_newLevel$$}), this.$_setActive$($elem$$40_newElement$$, $event$$150$$)));
        break;
      case $DvtDataGrid$$.$UP_KEY$:
        if ("row" === $axis$$19_newCellIndex$$1$$ && 0 < $index$$119_newIndex$$1$$) {
          if (1 === this.$m_rowHeaderLevelCount$) {
            $index$$119_newIndex$$1$$ -= 1, $elem$$40_newElement$$ = $elem$$40_newElement$$.previousSibling;
          } else {
            if ($level$$22_newLevel$$ === this.$m_rowHeaderLevelCount$ - 1 ? ($index$$119_newIndex$$1$$ -= 1, $elem$$40_newElement$$ = this.$_getRowHeaderByIndex$($index$$119_newIndex$$1$$, $level$$22_newLevel$$)) : ($elem$$40_newElement$$ = this.$_getRowHeaderByIndex$(this.$_getAttribute$($elem$$40_newElement$$.parentNode, "start") - 1, $level$$22_newLevel$$), $index$$119_newIndex$$1$$ = null != $elem$$40_newElement$$ ? this.$_getAttribute$($elem$$40_newElement$$.parentNode, "start") : $index$$119_newIndex$$1$$ - 
            1), $level$$22_newLevel$$ = null != $elem$$40_newElement$$ ? this.$getHeaderCellLevel$($elem$$40_newElement$$) : $level$$22_newLevel$$, 0 > $index$$119_newIndex$$1$$) {
              break;
            }
          }
          this.$scrollToHeader$({axis:$axis$$19_newCellIndex$$1$$, index:$index$$119_newIndex$$1$$, $level$:$level$$22_newLevel$$});
          this.$_setActive$($elem$$40_newElement$$, $event$$150$$);
        } else {
          "column" === $axis$$19_newCellIndex$$1$$ && 0 < $level$$22_newLevel$$ && ($elem$$40_newElement$$ = this.$_getColumnHeaderByIndex$($index$$119_newIndex$$1$$, $level$$22_newLevel$$ - 1), $index$$119_newIndex$$1$$ = this.$_getAttribute$($elem$$40_newElement$$.parentNode, "start"), $level$$22_newLevel$$ = this.$getHeaderCellLevel$($elem$$40_newElement$$), this.$scrollToHeader$({axis:$axis$$19_newCellIndex$$1$$, index:$index$$119_newIndex$$1$$, $level$:$level$$22_newLevel$$}), this.$_setActive$($elem$$40_newElement$$, 
          $event$$150$$));
        }
        break;
      case $DvtDataGrid$$.$DOWN_KEY$:
        "column" === $axis$$19_newCellIndex$$1$$ ? $level$$22_newLevel$$ + $depth$$5$$ >= this.$m_columnHeaderLevelCount$ ? ($axis$$19_newCellIndex$$1$$ = this.createIndex(0, $index$$119_newIndex$$1$$), this.$_isSelectionEnabled$() ? this.$selectAndFocus$($axis$$19_newCellIndex$$1$$, $event$$150$$) : this.$_setActiveByIndex$($axis$$19_newCellIndex$$1$$, $event$$150$$)) : ($elem$$40_newElement$$ = this.$_getColumnHeaderByIndex$($index$$119_newIndex$$1$$, $level$$22_newLevel$$ + $depth$$5$$), $index$$119_newIndex$$1$$ = 
        this.$_getAttribute$($elem$$40_newElement$$.parentNode, "start"), $level$$22_newLevel$$ = this.$getHeaderCellLevel$($elem$$40_newElement$$), this.$scrollToHeader$({axis:$axis$$19_newCellIndex$$1$$, index:$index$$119_newIndex$$1$$, $level$:$level$$22_newLevel$$}), this.$_setActive$($elem$$40_newElement$$, $event$$150$$)) : (1 === this.$m_rowHeaderLevelCount$ ? ($index$$119_newIndex$$1$$ += 1, $elem$$40_newElement$$ = $elem$$40_newElement$$.nextSibling) : ($index$$119_newIndex$$1$$ = $level$$22_newLevel$$ === 
        this.$m_rowHeaderLevelCount$ - 1 ? $index$$119_newIndex$$1$$ + 1 : null != $elem$$40_newElement$$ ? this.$_getAttribute$($elem$$40_newElement$$.parentNode, "start") + this.$_getAttribute$($elem$$40_newElement$$.parentNode, "extent") : $index$$119_newIndex$$1$$ + 1, $elem$$40_newElement$$ = this.$_getRowHeaderByIndex$($index$$119_newIndex$$1$$, $level$$22_newLevel$$), $level$$22_newLevel$$ = null != $elem$$40_newElement$$ ? this.$getHeaderCellLevel$($elem$$40_newElement$$) : $level$$22_newLevel$$), 
        $index$$119_newIndex$$1$$ > this.$m_endRowHeader$ && this.$m_stopRowHeaderFetch$ || !(this.$_isCountUnknown$("row") || $index$$119_newIndex$$1$$ < this.$m_dataSource$.getCount("row")) || (this.$scrollToHeader$({axis:$axis$$19_newCellIndex$$1$$, index:$index$$119_newIndex$$1$$, $level$:$level$$22_newLevel$$}), this.$_setActive$($elem$$40_newElement$$, $event$$150$$)));
    }
    return!0;
  };
  $DvtDataGrid$$.prototype.$_getHeaderAndParentIds$ = function $$DvtDataGrid$$$$$_getHeaderAndParentIds$$($header$$17$$, $previousHeader$$) {
    var $i$$171$$, $parents$$1$$, $idString$$ = "", $previousParents$$ = [];
    if (null == $header$$17$$) {
      return "";
    }
    $parents$$1$$ = this.$_getHeaderAndParents$($header$$17$$);
    null != $previousHeader$$ && ($previousParents$$ = this.$_getHeaderAndParents$($previousHeader$$));
    for ($i$$171$$ = 0;$i$$171$$ < $parents$$1$$.length;$i$$171$$++) {
      if ($previousParents$$[$i$$171$$] != $parents$$1$$[$i$$171$$] || $i$$171$$ === $parents$$1$$.length - 1) {
        $idString$$ += " " + $parents$$1$$[$i$$171$$].id;
      }
    }
    return $idString$$;
  };
  $DvtDataGrid$$.prototype.$_getHeaderAndParents$ = function $$DvtDataGrid$$$$$_getHeaderAndParents$$($header$$18$$) {
    var $axis$$20_headerLevels$$, $level$$23$$, $headers$$4$$ = [$header$$18$$];
    $axis$$20_headerLevels$$ = this.$getHeaderCellAxis$($header$$18$$);
    $level$$23$$ = this.$getHeaderCellLevel$($header$$18$$);
    $axis$$20_headerLevels$$ = "row" === $axis$$20_headerLevels$$ ? this.$m_rowHeaderLevelCount$ : this.$m_columnHeaderLevelCount$;
    if (1 === $axis$$20_headerLevels$$) {
      return $headers$$4$$;
    }
    $level$$23$$ === $axis$$20_headerLevels$$ - 1 && ($header$$18$$ = $header$$18$$.parentNode.firstChild, $headers$$4$$.unshift($header$$18$$), $level$$23$$ -= 1);
    for (;0 < $level$$23$$;) {
      $header$$18$$ = $header$$18$$.parentNode.parentNode.firstChild, $headers$$4$$.unshift($header$$18$$), $level$$23$$ -= 1;
    }
    return $headers$$4$$;
  };
  $DvtDataGrid$$.prototype.$handleCellArrowKeys$ = function $$DvtDataGrid$$$$$handleCellArrowKeys$$($keyCode$$7_newCellIndex$$2$$, $isExtend$$, $event$$151$$) {
    var $currentCellIndex$$, $row$$34$$, $column$$9$$, $focusFunc$$;
    if (!this.$isFetchComplete$()) {
      return!0;
    }
    $currentCellIndex$$ = $isExtend$$ ? this.$m_selectionFrontier$ : this.$m_active$.indexes;
    if (null != $currentCellIndex$$) {
      this.$m_resources$.$isRTLMode$() && ($keyCode$$7_newCellIndex$$2$$ == $DvtDataGrid$$.$LEFT_KEY$ ? $keyCode$$7_newCellIndex$$2$$ = $DvtDataGrid$$.$RIGHT_KEY$ : $keyCode$$7_newCellIndex$$2$$ == $DvtDataGrid$$.$RIGHT_KEY$ && ($keyCode$$7_newCellIndex$$2$$ = $DvtDataGrid$$.$LEFT_KEY$));
      $focusFunc$$ = this.$_isSelectionEnabled$() ? this.$selectAndFocus$.bind(this) : this.$_setActiveByIndex$.bind(this);
      $row$$34$$ = $currentCellIndex$$.row;
      $column$$9$$ = $currentCellIndex$$.column;
      switch($keyCode$$7_newCellIndex$$2$$) {
        case $DvtDataGrid$$.$LEFT_KEY$:
          0 < $column$$9$$ ? "row" == this.$m_options$.$getSelectionMode$() ? ($keyCode$$7_newCellIndex$$2$$ = this.createIndex(this.$m_active$.indexes.row, $column$$9$$ - 1), this.$scrollToIndex$($keyCode$$7_newCellIndex$$2$$, $isExtend$$), this.$_setActiveByIndex$($keyCode$$7_newCellIndex$$2$$, $event$$151$$)) : ($keyCode$$7_newCellIndex$$2$$ = this.createIndex($row$$34$$, $column$$9$$ - 1), this.$scrollToIndex$($keyCode$$7_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? this.$extendSelection$($keyCode$$7_newCellIndex$$2$$, 
          $event$$151$$) : $focusFunc$$($keyCode$$7_newCellIndex$$2$$, $event$$151$$), 0 === $column$$9$$ - 1 && this.$_setAccInfoText$("accessibleFirstColumn")) : $isExtend$$ || (this.$scrollToHeader$({axis:"row", index:$row$$34$$, $level$:this.$m_rowHeaderLevelCount$ - 1}), this.$_setActive$(this.$_getRowHeaderByIndex$($row$$34$$, this.$m_rowHeaderLevelCount$ - 1), $event$$151$$, !0));
          break;
        case $DvtDataGrid$$.$RIGHT_KEY$:
          this.$_isLastColumn$($column$$9$$) ? $isExtend$$ || ($focusFunc$$($currentCellIndex$$, $event$$151$$), this.$scrollToIndex$($currentCellIndex$$)) : "row" == this.$m_options$.$getSelectionMode$() ? ($keyCode$$7_newCellIndex$$2$$ = this.createIndex(this.$m_active$.indexes.row, $column$$9$$ + 1), this.$scrollToIndex$($keyCode$$7_newCellIndex$$2$$, $isExtend$$), this.$_setActiveByIndex$($keyCode$$7_newCellIndex$$2$$, $event$$151$$)) : ($keyCode$$7_newCellIndex$$2$$ = this.createIndex($row$$34$$, 
          $column$$9$$ + 1), this.$scrollToIndex$($keyCode$$7_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? this.$extendSelection$($keyCode$$7_newCellIndex$$2$$, $event$$151$$) : $focusFunc$$($keyCode$$7_newCellIndex$$2$$, $event$$151$$), this.$_isLastColumn$($column$$9$$ + 1) && this.$_setAccInfoText$("accessibleLastColumn"));
          break;
        case $DvtDataGrid$$.$UP_KEY$:
          0 < $row$$34$$ ? ($keyCode$$7_newCellIndex$$2$$ = this.createIndex($row$$34$$ - 1, $column$$9$$), this.$scrollToIndex$($keyCode$$7_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? this.$extendSelection$($keyCode$$7_newCellIndex$$2$$, $event$$151$$) : $focusFunc$$($keyCode$$7_newCellIndex$$2$$, $event$$151$$), 0 === $row$$34$$ - 1 && this.$_setAccInfoText$("accessibleFirstRow")) : $isExtend$$ || (this.$scrollToHeader$({axis:"column", index:$column$$9$$, $level$:this.$m_columnHeaderLevelCount$ - 
          1}), this.$_setActive$(this.$_getColumnHeaderByIndex$($column$$9$$, this.$m_columnHeaderLevelCount$ - 1), $event$$151$$, !0));
          break;
        case $DvtDataGrid$$.$DOWN_KEY$:
          this.$_isLastRow$($row$$34$$) ? $isExtend$$ || ($focusFunc$$($currentCellIndex$$, $event$$151$$), this.$scrollToIndex$($currentCellIndex$$)) : ($keyCode$$7_newCellIndex$$2$$ = this.createIndex($row$$34$$ + 1, $column$$9$$), this.$scrollToIndex$($keyCode$$7_newCellIndex$$2$$, $isExtend$$), $isExtend$$ ? this.$extendSelection$($keyCode$$7_newCellIndex$$2$$, $event$$151$$) : $focusFunc$$($keyCode$$7_newCellIndex$$2$$, $event$$151$$), this.$_isLastRow$($row$$34$$ + 1) && this.$_setAccInfoText$("accessibleLastRow"));
          break;
        case $DvtDataGrid$$.$HOME_KEY$:
          $keyCode$$7_newCellIndex$$2$$ = this.createIndex($row$$34$$, 0);
          this.$scrollToIndex$($keyCode$$7_newCellIndex$$2$$);
          $focusFunc$$($keyCode$$7_newCellIndex$$2$$, $event$$151$$);
          break;
        case $DvtDataGrid$$.$END_KEY$:
          $keyCode$$7_newCellIndex$$2$$ = this.$_isCountUnknown$("column") || this.$_isHighWatermarkScrolling$() ? this.createIndex($row$$34$$, Math.max(0, this.$m_endCol$)) : this.createIndex($row$$34$$, Math.max(0, this.$m_dataSource$.getCount("column") - 1));
          this.$scrollToIndex$($keyCode$$7_newCellIndex$$2$$);
          $focusFunc$$($keyCode$$7_newCellIndex$$2$$, $event$$151$$);
          break;
        case $DvtDataGrid$$.$PAGEUP_KEY$:
          $keyCode$$7_newCellIndex$$2$$ = this.createIndex(0, $column$$9$$);
          this.$scrollToIndex$($keyCode$$7_newCellIndex$$2$$);
          $focusFunc$$($keyCode$$7_newCellIndex$$2$$, $event$$151$$);
          break;
        case $DvtDataGrid$$.$PAGEDOWN_KEY$:
          $keyCode$$7_newCellIndex$$2$$ = this.$_isCountUnknown$("column") || this.$_isHighWatermarkScrolling$() ? this.createIndex(Math.max(0, this.$m_endRow$), $column$$9$$) : this.createIndex(Math.max(0, this.$m_dataSource$.getCount("row") - 1), $column$$9$$), this.$scrollToIndex$($keyCode$$7_newCellIndex$$2$$), $focusFunc$$($keyCode$$7_newCellIndex$$2$$, $event$$151$$);
      }
      return!0;
    }
  };
  $DvtDataGrid$$.prototype.$scrollToIndex$ = function $$DvtDataGrid$$$$$scrollToIndex$$($index$$120$$, $isExtend$$1$$) {
    var $cellLeft_row$$35$$, $cellWidth_column$$10$$, $deltaX$$2_scrollLeft$$10$$, $deltaY$$3_scrollTop$$10$$, $databodyContent$$17_viewportRight$$3_viewportTop$$4$$, $rowElem_rowHeight$$1$$, $viewportBottom$$5$$, $rowTop$$1$$, $cell$$13$$, $scrollRows_viewportLeft$$2$$;
    $cellLeft_row$$35$$ = $index$$120$$.row;
    $cellWidth_column$$10$$ = $index$$120$$.column;
    $deltaY$$3_scrollTop$$10$$ = $deltaX$$2_scrollLeft$$10$$ = 0;
    $cellLeft_row$$35$$ < this.$m_startRow$ || $cellLeft_row$$35$$ > this.$m_endRow$ ? ($deltaY$$3_scrollTop$$10$$ = $cellLeft_row$$35$$ < this.$m_startRow$ ? this.$m_avgRowHeight$ * $cellLeft_row$$35$$ : this.$m_avgRowHeight$ * ($cellLeft_row$$35$$ + 1) - this.$getElementHeight$(this.$m_databody$), $deltaY$$3_scrollTop$$10$$ = this.$m_currentScrollTop$ - $deltaY$$3_scrollTop$$10$$, this.$m_scrollIndexAfterFetch$ = $index$$120$$, $scrollRows_viewportLeft$$2$$ = !0) : ($databodyContent$$17_viewportRight$$3_viewportTop$$4$$ = 
    this.$m_databody$.firstChild, $rowElem_rowHeight$$1$$ = $databodyContent$$17_viewportRight$$3_viewportTop$$4$$.childNodes[$cellLeft_row$$35$$ - this.$m_startRow$], $databodyContent$$17_viewportRight$$3_viewportTop$$4$$ = this.$m_currentScrollTop$, $viewportBottom$$5$$ = this.$m_currentScrollTop$ + this.$getElementHeight$(this.$m_databody$), $rowTop$$1$$ = this.$getElementDir$($rowElem_rowHeight$$1$$, "top"), $rowElem_rowHeight$$1$$ = this.$calculateRowHeight$($rowElem_rowHeight$$1$$), $rowTop$$1$$ + 
    $rowElem_rowHeight$$1$$ > $viewportBottom$$5$$ ? $deltaY$$3_scrollTop$$10$$ = $viewportBottom$$5$$ - ($rowTop$$1$$ + $rowElem_rowHeight$$1$$) : $rowTop$$1$$ < $databodyContent$$17_viewportRight$$3_viewportTop$$4$$ && ($deltaY$$3_scrollTop$$10$$ = $databodyContent$$17_viewportRight$$3_viewportTop$$4$$ - $rowTop$$1$$));
    isNaN($cellWidth_column$$10$$) || !0 == $scrollRows_viewportLeft$$2$$ || ($cellWidth_column$$10$$ < this.$m_startCol$ || $cellWidth_column$$10$$ > this.$m_endCol$ ? ($deltaX$$2_scrollLeft$$10$$ = $cellWidth_column$$10$$ < this.$m_startCol$ ? this.$m_avgColWidth$ * $cellWidth_column$$10$$ : this.$m_avgColWidth$ * ($cellWidth_column$$10$$ + 1) - this.$getElementWidth$(this.$m_databody$), $deltaX$$2_scrollLeft$$10$$ = this.$m_currentScrollLeft$ - $deltaX$$2_scrollLeft$$10$$, this.$m_scrollIndexAfterFetch$ = 
    $index$$120$$) : ($databodyContent$$17_viewportRight$$3_viewportTop$$4$$ = this.$m_databody$.firstChild, $rowElem_rowHeight$$1$$ = $databodyContent$$17_viewportRight$$3_viewportTop$$4$$.childNodes[$cellLeft_row$$35$$ - this.$m_startRow$], $cell$$13$$ = $rowElem_rowHeight$$1$$.childNodes[$cellWidth_column$$10$$ - this.$m_startCol$], $cellLeft_row$$35$$ = this.$getElementDir$($cell$$13$$, "left"), $cellWidth_column$$10$$ = this.$getElementWidth$($cell$$13$$), $scrollRows_viewportLeft$$2$$ = this.$m_currentScrollLeft$, 
    $databodyContent$$17_viewportRight$$3_viewportTop$$4$$ = this.$m_currentScrollLeft$ + this.$getElementWidth$(this.$m_databody$), $cellLeft_row$$35$$ < $scrollRows_viewportLeft$$2$$ ? $deltaX$$2_scrollLeft$$10$$ = $scrollRows_viewportLeft$$2$$ - $cellLeft_row$$35$$ : $cellLeft_row$$35$$ + $cellWidth_column$$10$$ > $databodyContent$$17_viewportRight$$3_viewportTop$$4$$ && ($deltaX$$2_scrollLeft$$10$$ = $databodyContent$$17_viewportRight$$3_viewportTop$$4$$ - ($cellLeft_row$$35$$ + $cellWidth_column$$10$$))));
    0 != $deltaX$$2_scrollLeft$$10$$ || 0 != $deltaY$$3_scrollTop$$10$$ ? (null != $cell$$13$$ && !0 !== $isExtend$$1$$ && (this.$m_cellToFocus$ = $cell$$13$$), this.$scrollDelta$($deltaX$$2_scrollLeft$$10$$, $deltaY$$3_scrollTop$$10$$)) : null != this.$m_scrollIndexAfterFetch$ && (this.$_setActiveByIndex$(this.$m_scrollIndexAfterFetch$), this.$m_scrollIndexAfterFetch$ = null);
  };
  $DvtDataGrid$$.prototype.$scrollToHeader$ = function $$DvtDataGrid$$$$$scrollToHeader$$($headerInfo$$) {
    var $delta$$4$$, $startIndex$$19$$, $endIndex$$6$$, $averageDiff$$, $diff$$1$$, $currentScroll$$1$$, $headerMin$$, $headerDiff$$, $header$$19$$, $viewportMin$$, $viewportMax$$, $viewportDiff$$, $axis$$21$$, $index$$121$$, $level$$24$$;
    $axis$$21$$ = $headerInfo$$.axis;
    $index$$121$$ = $headerInfo$$.index;
    $level$$24$$ = $headerInfo$$.level;
    $delta$$4$$ = 0;
    "row" === $axis$$21$$ ? ($startIndex$$19$$ = this.$m_startRowHeader$, $endIndex$$6$$ = this.$m_endRowHeader$, $averageDiff$$ = this.$m_avgRowHeight$, $diff$$1$$ = this.$getElementHeight$(this.$m_databody$), $currentScroll$$1$$ = this.$m_currentScrollTop$) : "column" === $axis$$21$$ && ($startIndex$$19$$ = this.$m_startColHeader$, $endIndex$$6$$ = this.$m_endColHeader$, $averageDiff$$ = this.$m_avgColWidth$, $diff$$1$$ = this.$getElementWidth$(this.$m_databody$), $currentScroll$$1$$ = this.$m_currentScrollLeft$);
    $index$$121$$ < $startIndex$$19$$ || $index$$121$$ > $endIndex$$6$$ ? ($delta$$4$$ = $currentScroll$$1$$ - ($index$$121$$ < $startIndex$$19$$ ? $averageDiff$$ * $index$$121$$ : $averageDiff$$ * ($index$$121$$ + 1) - $diff$$1$$), this.$m_scrollHeaderAfterFetch$ = $headerInfo$$) : ("row" === $axis$$21$$ ? ($header$$19$$ = this.$_getRowHeaderByIndex$($index$$121$$, $level$$24$$), $viewportMin$$ = this.$m_currentScrollTop$, $viewportMax$$ = this.$m_currentScrollTop$ + this.$getElementHeight$(this.$m_databody$), 
    $viewportDiff$$ = $viewportMax$$ - $viewportMin$$, $headerMin$$ = this.$getElementDir$($header$$19$$, "top"), $headerDiff$$ = this.$getElementHeight$($header$$19$$)) : "column" === $axis$$21$$ && ($header$$19$$ = this.$_getColumnHeaderByIndex$($index$$121$$, $level$$24$$), $viewportMin$$ = this.$m_currentScrollLeft$, $viewportMax$$ = this.$m_currentScrollLeft$ + this.$getElementWidth$(this.$m_databody$), $viewportDiff$$ = $viewportMax$$ - $viewportMin$$, $headerMin$$ = this.$getElementDir$($header$$19$$, 
    "left"), $headerDiff$$ = this.$getElementWidth$($header$$19$$)), $viewportDiff$$ > $headerDiff$$ ? $headerMin$$ + $headerDiff$$ > $viewportMax$$ ? $delta$$4$$ = $viewportMax$$ - ($headerMin$$ + $headerDiff$$) : $headerMin$$ < $viewportMin$$ && ($delta$$4$$ = $viewportMin$$ - $headerMin$$) : $delta$$4$$ = $viewportMin$$ - $headerMin$$);
    0 != $delta$$4$$ && (null != $header$$19$$ && (this.$m_cellToFocus$ = $header$$19$$), "row" === $axis$$21$$ ? this.$scrollDelta$(0, $delta$$4$$) : this.$scrollDelta$($delta$$4$$, 0));
    null != this.$m_scrollHeaderAfterFetch$ && null != $header$$19$$ && (this.$_setActive$($header$$19$$), this.$m_scrollHeaderAfterFetch$ = null);
  };
  $DvtDataGrid$$.prototype.$findHeader$ = function $$DvtDataGrid$$$$$findHeader$$($elem$$41$$, $headerCellClassName$$) {
    void 0 == $headerCellClassName$$ && ($headerCellClassName$$ = this.$getMappedStyle$("headercell"));
    if (null != $headerCellClassName$$) {
      if (this.$m_utils$.$containsCSSClassName$($elem$$41$$, $headerCellClassName$$)) {
        return $elem$$41$$;
      }
      if ($elem$$41$$.parentNode) {
        return this.$findHeader$($elem$$41$$.parentNode, $headerCellClassName$$);
      }
    }
    return null;
  };
  $DvtDataGrid$$.prototype.$updateRowBanding$ = function $$DvtDataGrid$$$$$updateRowBanding$$() {
    var $rowBandingInterval$$2$$, $rows$$7$$, $i$$172$$, $index$$122$$, $bandingClass$$;
    $rowBandingInterval$$2$$ = this.$m_options$.$getRowBandingInterval$();
    if (0 < $rowBandingInterval$$2$$) {
      for ($rows$$7$$ = this.$m_databody$.firstChild.childNodes, $bandingClass$$ = this.$getMappedStyle$("banded"), $i$$172$$ = 0;$i$$172$$ < $rows$$7$$.length;$i$$172$$++) {
        $index$$122$$ = this.$m_startRow$ + $i$$172$$, 1 === Math.floor($index$$122$$ / $rowBandingInterval$$2$$) % 2 ? this.$m_utils$.$containsCSSClassName$($rows$$7$$[$i$$172$$], $bandingClass$$) || this.$m_utils$.$addCSSClassName$($rows$$7$$[$i$$172$$], $bandingClass$$) : this.$m_utils$.$containsCSSClassName$($rows$$7$$[$i$$172$$], $bandingClass$$) && this.$m_utils$.$removeCSSClassName$($rows$$7$$[$i$$172$$], $bandingClass$$);
      }
    }
  };
  $DvtDataGrid$$.prototype.$updateColumnBanding$ = function $$DvtDataGrid$$$$$updateColumnBanding$$() {
    var $columnBandingInterval$$5$$, $rows$$8$$, $i$$173$$, $index$$123$$, $bandingClass$$1$$, $j$$27$$, $row$$36$$;
    $columnBandingInterval$$5$$ = this.$m_options$.$getColumnBandingInterval$();
    if (0 < $columnBandingInterval$$5$$) {
      for ($rows$$8$$ = this.$m_databody$.firstChild.childNodes, $bandingClass$$1$$ = this.$getMappedStyle$("banded"), $i$$173$$ = 0;$i$$173$$ < $rows$$8$$.length;$i$$173$$ += 1) {
        for ($row$$36$$ = $rows$$8$$[$i$$173$$].childNodes, $j$$27$$ = 0;$j$$27$$ < $row$$36$$.length;$j$$27$$ += 1) {
          $index$$123$$ = this.$m_startCol$ + $j$$27$$, 1 === Math.floor($index$$123$$ / $columnBandingInterval$$5$$) % 2 ? this.$m_utils$.$containsCSSClassName$($row$$36$$[$j$$27$$], $bandingClass$$1$$) || this.$m_utils$.$addCSSClassName$($row$$36$$[$j$$27$$], $bandingClass$$1$$) : this.$m_utils$.$containsCSSClassName$($row$$36$$[$j$$27$$], $bandingClass$$1$$) && this.$m_utils$.$removeCSSClassName$($rows$$8$$[$j$$27$$], $bandingClass$$1$$);
        }
      }
    }
  };
  $DvtDataGrid$$.prototype.$_removeBanding$ = function $$DvtDataGrid$$$$$_removeBanding$$() {
    var $rows$$9$$, $row$$37$$, $i$$174$$, $j$$28$$, $bandingClass$$2$$;
    $rows$$9$$ = this.$m_databody$.firstChild.childNodes;
    $bandingClass$$2$$ = this.$getMappedStyle$("banded");
    for ($i$$174$$ = 0;$i$$174$$ < $rows$$9$$.length;$i$$174$$++) {
      for (this.$m_utils$.$containsCSSClassName$($rows$$9$$[$i$$174$$], $bandingClass$$2$$) && this.$m_utils$.$removeCSSClassName$($rows$$9$$[$i$$174$$], $bandingClass$$2$$), $row$$37$$ = $rows$$9$$[$i$$174$$].childNodes, $j$$28$$ = 0;$j$$28$$ < $row$$37$$.length;$j$$28$$ += 1) {
        this.$m_utils$.$containsCSSClassName$($row$$37$$[$j$$28$$], $bandingClass$$2$$) && this.$m_utils$.$removeCSSClassName$($row$$37$$[$j$$28$$], $bandingClass$$2$$);
      }
    }
  };
  $DvtDataGrid$$.prototype.$_setAccInfoText$ = function $$DvtDataGrid$$$$$_setAccInfoText$$($key$$65$$, $args$$19$$) {
    var $text$$12$$ = this.$m_resources$.$getTranslatedText$($key$$65$$, $args$$19$$);
    null != $text$$12$$ && (this.$m_accInfo$.textContent = $text$$12$$);
  };
  $DvtDataGrid$$.prototype.$handleExpandEvent$ = function $$DvtDataGrid$$$$$handleExpandEvent$$($event$$152$$) {
    this.$_findRowByKey$($event$$152$$.rowKey).setAttribute("aria-expanded", !0);
    this.$_setAccInfoText$("accessibleRowExpanded");
    this.$populateAccInfo$();
  };
  $DvtDataGrid$$.prototype.$handleCollapseEvent$ = function $$DvtDataGrid$$$$$handleCollapseEvent$$($event$$153$$) {
    this.$_findRowByKey$($event$$153$$.rowKey).setAttribute("aria-expanded", !1);
    this.$_setAccInfoText$("accessibleRowCollapsed");
    this.$populateAccInfo$();
  };
  $DvtDataGrid$$.prototype.$_setKey$ = function $$DvtDataGrid$$$$$_setKey$$($element$$91$$, $key$$66$$) {
    null != $element$$91$$ && ($element$$91$$[this.$m_resources$.$getMappedAttribute$("key")] = $key$$66$$);
  };
  $DvtDataGrid$$.prototype.$_getKey$ = function $$DvtDataGrid$$$$$_getKey$$($element$$92$$) {
    return null != $element$$92$$ ? $element$$92$$[this.$m_resources$.$getMappedAttribute$("key")] : null;
  };
  $DvtDataGrid$$.prototype.$_getActiveRowKey$ = function $$DvtDataGrid$$$$$_getActiveRowKey$$($prev$$2$$) {
    if ($prev$$2$$ && null != this.$m_prevActive$) {
      if ("header" == this.$m_prevActive$.type && "row" === this.$m_prevActive$.axis) {
        return this.$m_prevActive$.key;
      }
      if ("cell" == this.$m_prevActive$.type) {
        return this.$m_prevActive$.keys.row;
      }
    } else {
      if (null != this.$m_active$) {
        if ("header" == this.$m_active$.type && "row" === this.$m_active$.axis) {
          return this.$m_active$.key;
        }
        if ("cell" == this.$m_active$.type) {
          return this.$m_active$.keys.row;
        }
      }
    }
    return null;
  };
  $DvtDataGrid$$.prototype.$_handleCutPasteKeydown$ = function $$DvtDataGrid$$$$$_handleCutPasteKeydown$$($event$$154$$) {
    if (this.$_isMoveOnRowEnabled$(this.$findRow$($event$$154$$.target))) {
      if ($event$$154$$.keyCode == $DvtDataGrid$$.$X_KEY$ && this.$m_utils$.$ctrlEquivalent$($event$$154$$)) {
        return this.$_handleCut$($event$$154$$);
      }
      if ($event$$154$$.keyCode == $DvtDataGrid$$.$V_KEY$ && this.$m_utils$.$ctrlEquivalent$($event$$154$$)) {
        return this.$_handlePaste$($event$$154$$);
      }
      if ($event$$154$$.keyCode == $DvtDataGrid$$.$ESC_KEY$ && null != this.$m_cutRow$) {
        return this.$m_utils$.$removeCSSClassName$(this.$m_cutRow$, this.$getMappedStyle$("cut")), this.$m_cutRow$ = null, null !== this.$m_cutRowHeader$ && (this.$m_utils$.$removeCSSClassName$(this.$m_cutRowHeader$, this.$getMappedStyle$("cut")), this.$m_cutRowHeader$ = null), !0;
      }
    }
    return!1;
  };
  $DvtDataGrid$$.prototype.$_handleCut$ = function $$DvtDataGrid$$$$$_handleCut$$($event$$155$$, $target$$98$$) {
    var $rowKey$$11$$;
    null == $target$$98$$ && ($target$$98$$ = $event$$155$$.target);
    null != this.$m_cutRow$ && this.$m_utils$.$removeCSSClassName$(this.$m_cutRow$, this.$getMappedStyle$("cut"));
    $rowKey$$11$$ = this.$_getKey$(this.find($target$$98$$, "row"));
    this.$m_cutRow$ = this.$_findRowByKey$($rowKey$$11$$);
    this.$m_cutRowHeader$ = this.$_findRowHeaderByKey$($rowKey$$11$$);
    this.$m_utils$.$addCSSClassName$(this.$m_cutRow$, this.$getMappedStyle$("cut"));
    null !== this.$m_cutRowHeader$ && this.$m_utils$.$addCSSClassName$(this.$m_cutRowHeader$, this.$getMappedStyle$("cut"));
    return!0;
  };
  $DvtDataGrid$$.prototype.$_handlePaste$ = function $$DvtDataGrid$$$$$_handlePaste$$($event$$156$$, $target$$99$$) {
    var $row$$40$$;
    null == $target$$99$$ && ($target$$99$$ = $event$$156$$.target);
    return null != this.$m_cutRow$ ? (this.$m_utils$.$removeCSSClassName$(this.$m_cutRow$, this.$getMappedStyle$("cut")), null !== this.$m_cutRowHeader$ && this.$m_utils$.$removeCSSClassName$(this.$m_cutRowHeader$, this.$getMappedStyle$("cut")), $row$$40$$ = this.find($target$$99$$, "row"), this.$m_cutRow$ !== $row$$40$$ && (this.$_isSelectionEnabled$() && this.$_clearSelection$(), this.$_isDatabodyCellActive$() && this.$_unhighlightActive$(), this.$m_moveActive$ = !0, this.$m_dataSource$.move(this.$_getKey$(this.$m_cutRow$), 
    this.$_getKey$($row$$40$$))), this.$m_cutRow$ = null, !0) : !1;
  };
  $DvtDataGrid$$.prototype.$_handleMove$ = function $$DvtDataGrid$$$$$_handleMove$$($deltaY$$4_event$$157$$) {
    var $height$$30_rowKey$$12_target$$100$$;
    null == this.$m_moveRow$ && ($height$$30_rowKey$$12_target$$100$$ = $deltaY$$4_event$$157$$.target, $height$$30_rowKey$$12_target$$100$$ = this.$_getKey$(this.find($height$$30_rowKey$$12_target$$100$$, "row")), this.$m_moveRow$ = this.$_findRowByKey$($height$$30_rowKey$$12_target$$100$$), this.$m_moveRowHeader$ = this.$_findRowHeaderByKey$($height$$30_rowKey$$12_target$$100$$), null != this.$m_moveRow$.style.height && this.$setElementHeight$(this.$m_moveRow$, this.$calculateRowHeight$(this.$m_moveRow$)), 
    this.$m_utils$.$addCSSClassName$(this.$m_moveRow$, this.$getMappedStyle$("drag")), this.$m_originalTop$ = this.$getElementDir$(this.$m_moveRow$, "top"), this.$m_dropTarget$ = document.createElement("div"), this.$m_utils$.$addCSSClassName$(this.$m_dropTarget$, this.$getMappedStyle$("drop")), this.$setElementHeight$(this.$m_dropTarget$, this.$calculateRowHeight$(this.$m_moveRow$)), this.$setElementDir$(this.$m_dropTarget$, this.$m_originalTop$, "top"), this.$m_databody$.firstChild.appendChild(this.$m_dropTarget$), 
    null !== this.$m_moveRowHeader$ && (null != this.$m_moveRowHeader$.style.height && this.$setElementHeight$(this.$m_moveRowHeader$, this.$calculateRowHeight$(this.$m_moveRowHeader$)), this.$m_utils$.$addCSSClassName$(this.$m_moveRowHeader$, this.$getMappedStyle$("drag")), this.$m_dropTargetHeader$ = document.createElement("div"), this.$m_utils$.$addCSSClassName$(this.$m_dropTargetHeader$, this.$getMappedStyle$("drop")), this.$setElementHeight$(this.$m_dropTargetHeader$, this.$calculateRowHeight$(this.$m_moveRowHeader$)), 
    this.$setElementDir$(this.$m_dropTargetHeader$, this.$m_originalTop$, "top"), this.$m_rowHeader$.firstChild.appendChild(this.$m_dropTargetHeader$)));
    this.$m_utils$.$isTouchDevice$() || (this.$m_prevY$ = this.$m_currentY$, this.$m_currentY$ = $deltaY$$4_event$$157$$.pageY);
    $deltaY$$4_event$$157$$ = this.$m_currentY$ - this.$m_prevY$;
    $height$$30_rowKey$$12_target$$100$$ = this.$calculateRowHeight$(this.$m_moveRow$);
    this.$setElementDir$(this.$m_moveRow$, this.$getElementDir$(this.$m_moveRow$, "top") + $deltaY$$4_event$$157$$, "top");
    null !== this.$m_moveRowHeader$ && this.$setElementDir$(this.$m_moveRowHeader$, this.$getElementDir$(this.$m_moveRowHeader$, "top") + $deltaY$$4_event$$157$$, "top");
    null != this.$m_moveRow$.nextSibling && this.$m_moveRow$.nextSibling != this.$m_dropTarget$ && this.$getElementDir$(this.$m_moveRow$.nextSibling, "top") < this.$getElementDir$(this.$m_moveRow$, "top") + $height$$30_rowKey$$12_target$$100$$ / 2 ? this.$_moveDropRows$("nextSibling") : null != this.$m_moveRow$.previousSibling && this.$getElementDir$(this.$m_moveRow$.previousSibling, "top") > this.$getElementDir$(this.$m_moveRow$, "top") - $height$$30_rowKey$$12_target$$100$$ / 2 && this.$_moveDropRows$("previousSibling");
  };
  $DvtDataGrid$$.prototype.$_moveDropRows$ = function $$DvtDataGrid$$$$$_moveDropRows$$($sibling$$) {
    var $newTop$$1$$, $databodyScroller$$, $newSiblingTop$$, $headerScroller$$;
    $databodyScroller$$ = this.$m_moveRow$.parentNode;
    "nextSibling" == $sibling$$ ? ($newTop$$1$$ = this.$m_originalTop$ + this.$calculateRowHeight$(this.$m_moveRow$[$sibling$$]), $newSiblingTop$$ = this.$m_originalTop$) : ($newTop$$1$$ = this.$getElementDir$(this.$m_moveRow$[$sibling$$], "top"), $newSiblingTop$$ = $newTop$$1$$ + this.$calculateRowHeight$(this.$m_moveRow$));
    this.$setElementDir$(this.$m_dropTarget$, $newTop$$1$$, "top");
    this.$setElementDir$(this.$m_moveRow$[$sibling$$], $newSiblingTop$$, "top");
    null !== this.$m_moveRowHeader$ && ($headerScroller$$ = this.$m_moveRowHeader$.parentNode, this.$setElementDir$(this.$m_dropTargetHeader$, $newTop$$1$$, "top"), this.$setElementDir$(this.$m_moveRowHeader$[$sibling$$], $newSiblingTop$$, "top"));
    this.$m_originalTop$ = $newTop$$1$$;
    this.$m_utils$.$removeCSSClassName$(this.$m_moveRow$.previousSibling, this.$getMappedStyle$("activedrop"));
    "nextSibling" === $sibling$$ ? ($databodyScroller$$.insertBefore(this.$m_moveRow$, this.$m_moveRow$[$sibling$$][$sibling$$]), null !== this.$m_moveRowHeader$ && $headerScroller$$.insertBefore(this.$m_moveRowHeader$, this.$m_moveRowHeader$[$sibling$$][$sibling$$])) : ($databodyScroller$$.insertBefore(this.$m_moveRow$, this.$m_moveRow$[$sibling$$]), null !== this.$m_moveRowHeader$ && $headerScroller$$.insertBefore(this.$m_moveRowHeader$, this.$m_moveRowHeader$[$sibling$$]));
    this.$m_utils$.$addCSSClassName$(this.$m_moveRow$.previousSibling, this.$getMappedStyle$("activedrop"));
  };
  $DvtDataGrid$$.prototype.$_isMoveEnabled$ = function $$DvtDataGrid$$$$$_isMoveEnabled$$() {
    var $capability$$1$$;
    $capability$$1$$ = this.$m_dataSource$.getCapability("move");
    return "enable" !== this.$m_options$.$isMoveable$() || "full" !== $capability$$1$$ && "row" !== $capability$$1$$ ? !1 : !0;
  };
  $DvtDataGrid$$.prototype.$_handleMoveMouseUp$ = function $$DvtDataGrid$$$$$_handleMoveMouseUp$$($validUp$$) {
    null != this.$m_moveRow$ && (this.$_remove$(this.$m_dropTarget$), this.$m_moveRow$.style.zIndex = "", null !== this.$m_moveRowHeader$ && (this.$_remove$(this.$m_dropTargetHeader$), this.$m_moveRowHeader$.style.zIndex = ""), null != this.$m_active$ && "column" != this.$m_active$.axis && (this.$m_moveActive$ = !0), this.$_isSelectionEnabled$() && this.$_clearSelection$(), !0 == $validUp$$ ? this.$m_dataSource$.move(this.$_getKey$(this.$m_moveRow$), null === this.$m_moveRow$.nextSibling ? null : 
    this.$_getKey$(this.$m_moveRow$.nextSibling)) : this.$m_dataSource$.move(this.$_getKey$(this.$m_moveRow$), this.$_getKey$(this.$m_moveRow$)), this.$m_moveRow$ = null, this.$m_databodyMove$ = !1);
  };
  $DvtDataGrid$$.prototype.$_isMoveOnRowEnabled$ = function $$DvtDataGrid$$$$$_isMoveOnRowEnabled$$($row$$41$$) {
    return null == $row$$41$$ || this.$m_utils$.$containsCSSClassName$($row$$41$$.parentNode, this.$getMappedStyle$("colheader")) ? !1 : this.$_isMoveEnabled$() && this.$_getActiveRowKey$() === this.$_getKey$($row$$41$$) ? !0 : !1;
  };
  $DvtDataGrid$$.prototype.$_manageMoveCursor$ = function $$DvtDataGrid$$$$$_manageMoveCursor$$() {
    var $className$$15$$, $activeKey_activeRowHeader$$, $prevActiveKey_prevActiveRowHeader$$, $activeRow$$, $prevActiveRow$$;
    $className$$15$$ = this.$getMappedStyle$("draggable");
    $activeKey_activeRowHeader$$ = this.$_getActiveRowKey$();
    $prevActiveKey_prevActiveRowHeader$$ = this.$_getActiveRowKey$(!0);
    $activeRow$$ = this.$_findRowByKey$($activeKey_activeRowHeader$$);
    $prevActiveRow$$ = this.$_findRowByKey$($prevActiveKey_prevActiveRowHeader$$);
    this.$m_utils$.$containsCSSClassName$($prevActiveRow$$, $className$$15$$) && (this.$m_utils$.$removeCSSClassName$($prevActiveRow$$, $className$$15$$), $prevActiveKey_prevActiveRowHeader$$ = this.$_findRowHeaderByKey$($prevActiveKey_prevActiveRowHeader$$), this.$m_utils$.$containsCSSClassName$($prevActiveKey_prevActiveRowHeader$$, $className$$15$$) && this.$m_utils$.$removeCSSClassName$($prevActiveKey_prevActiveRowHeader$$, $className$$15$$));
    this.$_isMoveOnRowEnabled$($activeRow$$) && ($activeKey_activeRowHeader$$ = this.$_findRowHeaderByKey$($activeKey_activeRowHeader$$), this.$m_utils$.$addCSSClassName$($activeRow$$, $className$$15$$), this.$m_utils$.$addCSSClassName$($activeKey_activeRowHeader$$, $className$$15$$));
  };
  $DvtDataGrid$$.prototype.$handleRootFocus$ = function $$DvtDataGrid$$$$$handleRootFocus$$($event$$159$$) {
    var $newCellIndex$$3$$;
    this.$m_utils$.$addCSSClassName$(this.$m_root$, this.$getMappedStyle$("focus"));
    if (!this.$m_root$.contains(document.activeElement) || document.activeElement === this.$m_root$ && 0 == this.$m_root$.tabIndex) {
      this.$m_externalFocus$ = !0, null != this.$m_active$ || this.$_databodyEmpty$() ? null != this.$m_active$ && this.$_highlightActive$() : ($newCellIndex$$3$$ = this.createIndex(0, 0), this.$scrollToIndex$($newCellIndex$$3$$), this.$_isSelectionEnabled$() ? this.$selectAndFocus$($newCellIndex$$3$$, $event$$159$$) : this.$_setActiveByIndex$($newCellIndex$$3$$));
    }
    this.$m_root$.tabIndex = -1;
  };
  $DvtDataGrid$$.prototype.$handleRootBlur$ = function $$DvtDataGrid$$$$$handleRootBlur$$() {
    var $active$$3$$;
    setTimeout(function() {
      this.$m_root$.contains(document.activeElement) || (this.$m_root$.tabIndex = 0, $active$$3$$ = this.$_getActiveElement$(), null != $active$$3$$ && this.$_unsetAriaProperties$($active$$3$$));
    }.bind(this), 100);
    null == this.$m_moveRow$ && this.$m_utils$.$removeCSSClassName$(this.$m_root$, this.$getMappedStyle$("focus"));
  };
  $DvtDataGrid$$.prototype.$calculateRowHeight$ = function $$DvtDataGrid$$$$$calculateRowHeight$$($row$$42$$) {
    return "" != $row$$42$$.style.height ? this.$getElementHeight$($row$$42$$) : null != $row$$42$$.nextSibling ? this.$getElementDir$($row$$42$$.nextSibling, "top") - this.$getElementDir$($row$$42$$, "top") : this.$m_endRowPixel$ - this.$getElementDir$($row$$42$$, "top");
  };
  $DvtDataGrid$$.prototype.$calculateRowHeaderHeight$ = function $$DvtDataGrid$$$$$calculateRowHeaderHeight$$($rowHeader$$20$$) {
    return "" != $rowHeader$$20$$.style.height ? this.$getElementHeight$($rowHeader$$20$$) : null != $rowHeader$$20$$.nextSibling ? this.$getElementDir$($rowHeader$$20$$.nextSibling, "top") - this.$getElementDir$($rowHeader$$20$$, "top") : this.$m_endRowHeaderPixel$ - this.$getElementDir$($rowHeader$$20$$, "top");
  };
  $DvtDataGrid$$.prototype.$calculateColumnWidth$ = function $$DvtDataGrid$$$$$calculateColumnWidth$$($cell$$14$$) {
    if ("" != $cell$$14$$.style.width) {
      return this.$getElementWidth$($cell$$14$$);
    }
    var $dir$$11$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left";
    return null != $cell$$14$$.nextSibling ? this.$getElementDir$($cell$$14$$.nextSibling, $dir$$11$$) - this.$getElementDir$($cell$$14$$, $dir$$11$$) : this.$m_endColPixel$ - this.$getElementDir$($cell$$14$$, $dir$$11$$);
  };
  $DvtDataGrid$$.prototype.$calculateColumnHeaderWidth$ = function $$DvtDataGrid$$$$$calculateColumnHeaderWidth$$($columnHeader$$6$$) {
    if ("" != $columnHeader$$6$$.style.width) {
      return this.$getElementWidth$($columnHeader$$6$$);
    }
    var $dir$$12$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left";
    return null != $columnHeader$$6$$.nextSibling ? this.$getElementDir$($columnHeader$$6$$.nextSibling, $dir$$12$$) - this.$getElementDir$($columnHeader$$6$$, $dir$$12$$) : this.$m_endColHeaderPixel$ - this.$getElementDir$($columnHeader$$6$$, $dir$$12$$);
  };
  $DvtDataGrid$$.prototype.$_databodyEmpty$ = function $$DvtDataGrid$$$$$_databodyEmpty$$() {
    return null == this.$m_databody$.firstChild ? !0 : !1;
  };
  $DvtDataGrid$$.prototype.$changeStyleProperty$ = function $$DvtDataGrid$$$$$changeStyleProperty$$($target$$101$$, $prop$$64$$, $value$$183$$, $action$$) {
    "undefined" != typeof $prop$$64$$ && ($target$$101$$.style[$prop$$64$$] = "remove" == $action$$ ? "" : $value$$183$$);
  };
  $DvtDataGrid$$.prototype.$addTransformMoveStyle$ = function $$DvtDataGrid$$$$$addTransformMoveStyle$$($target$$102$$, $duration$$17$$, $delay$$3$$, $timing$$1$$, $x$$54$$, $y$$37$$) {
    this.$changeStyleProperty$($target$$102$$, this.$getCssSupport$("transition-delay"), $delay$$3$$);
    this.$changeStyleProperty$($target$$102$$, this.$getCssSupport$("transition-timing-function"), $timing$$1$$);
    this.$changeStyleProperty$($target$$102$$, this.$getCssSupport$("transition-duration"), $duration$$17$$);
    this.$changeStyleProperty$($target$$102$$, this.$getCssSupport$("transform"), "translate3d(" + $x$$54$$ + "px," + $y$$37$$ + "px,0px)");
  };
  $DvtDataGrid$$.prototype.$removeTransformMoveStyle$ = function $$DvtDataGrid$$$$$removeTransformMoveStyle$$($target$$103$$) {
    this.$changeStyleProperty$($target$$103$$, this.$getCssSupport$("transition-delay"), null, "remove");
    this.$changeStyleProperty$($target$$103$$, this.$getCssSupport$("transition-timing-function"), null, "remove");
    this.$changeStyleProperty$($target$$103$$, this.$getCssSupport$("transition-duration"), null, "remove");
    this.$changeStyleProperty$($target$$103$$, this.$getCssSupport$("transform"), null, "remove");
  };
  $DvtDataGrid$$.prototype.$getCssSupport$ = function $$DvtDataGrid$$$$$getCssSupport$$($cssprop$$) {
    function $toCamel$$($str$$18$$) {
      return $str$$18$$.replace(/\-([a-z])/gi, function($match$$16$$, $val$$28$$) {
        return $val$$28$$.toUpperCase();
      });
    }
    var $vendors$$, $root$$15$$, $i$$175$$, $css3mc$$;
    $vendors$$ = " -moz- -webkit- -o- -ms- -khtml-".split(" ");
    $root$$15$$ = document.documentElement;
    for ($i$$175$$ = 0;$i$$175$$ < $vendors$$.length;$i$$175$$++) {
      if ($css3mc$$ = $toCamel$$($vendors$$[$i$$175$$] + $cssprop$$), "Ms" == $css3mc$$.substr(0, 2) && ($css3mc$$ = "m" + $css3mc$$.substr(1)), $css3mc$$ in $root$$15$$.style) {
        return $css3mc$$;
      }
    }
  };
  $DvtDataGrid$$.$ENTER_KEY$ = 13;
  $DvtDataGrid$$.$ESC_KEY$ = 27;
  $DvtDataGrid$$.$F2_KEY$ = 113;
  $DvtDataGrid$$.$F8_KEY$ = 119;
  $DvtDataGrid$$.$SPACE_KEY$ = 32;
  $DvtDataGrid$$.prototype.$_isContainFocusableElement$ = function $$DvtDataGrid$$$$$_isContainFocusableElement$$($elem$$42$$) {
    return 0 < this.$getFocusableElementsInNode$($elem$$42$$).length;
  };
  $DvtDataGrid$$.prototype.$unhighlightSelection$ = function $$DvtDataGrid$$$$$unhighlightSelection$$() {
    var $i$$176$$, $ranges$$;
    $ranges$$ = this.$GetSelection$();
    for ($i$$176$$ = 0;$i$$176$$ < $ranges$$.length;$i$$176$$ += 1) {
      this.$unhighlightRange$($ranges$$[$i$$176$$]);
    }
  };
  $DvtDataGrid$$.prototype.$unhighlightRange$ = function $$DvtDataGrid$$$$$unhighlightRange$$($elems$$2_range$$9$$) {
    $elems$$2_range$$9$$ = this.$getElementsInRange$($elems$$2_range$$9$$);
    this.$unhighlightElems$($elems$$2_range$$9$$);
  };
  $DvtDataGrid$$.prototype.$highlightRange$ = function $$DvtDataGrid$$$$$highlightRange$$($range$$10$$, $updateAccInfo$$) {
    var $count$$32_elems$$3$$;
    $count$$32_elems$$3$$ = this.$getElementsInRange$($range$$10$$);
    this.$highlightElems$($count$$32_elems$$3$$);
    $updateAccInfo$$ && ($count$$32_elems$$3$$ = 1 == this.$GetSelection$().length ? $count$$32_elems$$3$$.length : this.$_getCurrentSelectionCellCount$(), this.$_setAccInfoText$("accessibleMultiCellSelected", {num:$count$$32_elems$$3$$}));
  };
  $DvtDataGrid$$.prototype.$_getCurrentSelectionCellCount$ = function $$DvtDataGrid$$$$$_getCurrentSelectionCellCount$$() {
    var $total$$, $selection$$3$$, $elems$$4$$, $i$$177$$;
    $total$$ = 0;
    $selection$$3$$ = this.$GetSelection$();
    for ($i$$177$$ = 0;$i$$177$$ < $selection$$3$$.length;$i$$177$$++) {
      $elems$$4$$ = this.$getElementsInRange$($selection$$3$$[$i$$177$$]), $total$$ += $elems$$4$$.length;
    }
    return $total$$;
  };
  $DvtDataGrid$$.prototype.$unhighlightElems$ = function $$DvtDataGrid$$$$$unhighlightElems$$($elems$$5$$) {
    var $i$$178$$, $elem$$43$$;
    if (null != $elems$$5$$ && 0 != $elems$$5$$.length) {
      for ($i$$178$$ = 0;$i$$178$$ < $elems$$5$$.length;$i$$178$$ += 1) {
        $elem$$43$$ = $elems$$5$$[$i$$178$$], this.$_unhighlightElement$($elem$$43$$, ["selected"]);
      }
    }
  };
  $DvtDataGrid$$.prototype.$highlightElems$ = function $$DvtDataGrid$$$$$highlightElems$$($elems$$6$$) {
    var $i$$179$$, $elem$$44$$;
    if (null != $elems$$6$$ && 0 != $elems$$6$$.length) {
      for ($i$$179$$ = 0;$i$$179$$ < $elems$$6$$.length;$i$$179$$ += 1) {
        $elem$$44$$ = $elems$$6$$[$i$$179$$], this.$_highlightElement$($elem$$44$$, ["selected"]);
      }
    }
  };
  $DvtDataGrid$$.prototype.$applySelection$ = function $$DvtDataGrid$$$$$applySelection$$($startRow$$5$$, $endRow$$2$$) {
    var $i$$180$$, $ranges$$1$$, $elems$$7$$;
    $ranges$$1$$ = this.$GetSelection$();
    for ($i$$180$$ = 0;$i$$180$$ < $ranges$$1$$.length;$i$$180$$ += 1) {
      $elems$$7$$ = this.$getElementsInRange$($ranges$$1$$[$i$$180$$], $startRow$$5$$, $endRow$$2$$), this.$highlightElems$($elems$$7$$);
    }
  };
  $DvtDataGrid$$.prototype.$handleDatabodySelectionDrag$ = function $$DvtDataGrid$$$$$handleDatabodySelectionDrag$$($event$$161$$) {
    var $cell$$15_index$$124_target$$104$$;
    this.$m_utils$.$isTouchDevice$() ? $cell$$15_index$$124_target$$104$$ = this.$findCell$(document.elementFromPoint($event$$161$$.touches[0].clientX, $event$$161$$.touches[0].clientY)) : ($cell$$15_index$$124_target$$104$$ = $event$$161$$.target, $cell$$15_index$$124_target$$104$$ = this.$findCell$($cell$$15_index$$124_target$$104$$));
    null != $cell$$15_index$$124_target$$104$$ && ($cell$$15_index$$124_target$$104$$ = {row:this.$getRowIndex$($cell$$15_index$$124_target$$104$$.parentNode), column:this.$getCellIndex$($cell$$15_index$$124_target$$104$$)}, this.$extendSelection$($cell$$15_index$$124_target$$104$$, $event$$161$$));
  };
  $DvtDataGrid$$.prototype.$_isSelected$ = function $$DvtDataGrid$$$$$_isSelected$$($cell$$16$$) {
    var $selectedClassName$$ = this.$getMappedStyle$("selected");
    return "row" == this.$m_options$.$getSelectionMode$() && null != $selectedClassName$$ ? this.$m_utils$.$containsCSSClassName$(this.$findRow$($cell$$16$$), $selectedClassName$$) : null != $selectedClassName$$ ? this.$m_utils$.$containsCSSClassName$($cell$$16$$, $selectedClassName$$) : !1;
  };
  $DvtDataGrid$$.prototype.$_deselect$ = function $$DvtDataGrid$$$$$_deselect$$($columnIndex$$2_index$$125$$) {
    var $rowIndex$$8$$, $indexToRemove$$1$$, $ranges$$2$$, $i$$181$$, $endIndex$$7_range$$11_rangeEndColumn$$1$$, $rangeStartColumn$$1_startIndex$$20$$, $rangeStartRow$$1$$, $rangeEndRow$$1$$;
    "row" == this.$m_options$.$getSelectionMode$() && ($columnIndex$$2_index$$125$$ = this.createIndex($columnIndex$$2_index$$125$$.row));
    $rowIndex$$8$$ = $columnIndex$$2_index$$125$$.row;
    $columnIndex$$2_index$$125$$ = $columnIndex$$2_index$$125$$.column;
    $indexToRemove$$1$$ = -1;
    $ranges$$2$$ = this.$GetSelection$();
    for ($i$$181$$ = 0;$i$$181$$ < $ranges$$2$$.length;$i$$181$$ += 1) {
      if ($endIndex$$7_range$$11_rangeEndColumn$$1$$ = $ranges$$2$$[$i$$181$$], $rangeStartColumn$$1_startIndex$$20$$ = $endIndex$$7_range$$11_rangeEndColumn$$1$$.startIndex, $endIndex$$7_range$$11_rangeEndColumn$$1$$ = this.$getEndIndex$($endIndex$$7_range$$11_rangeEndColumn$$1$$), $rangeStartRow$$1$$ = $rangeStartColumn$$1_startIndex$$20$$.row, $rangeEndRow$$1$$ = $endIndex$$7_range$$11_rangeEndColumn$$1$$.row, $rangeStartRow$$1$$ == $rowIndex$$8$$ && $rangeEndRow$$1$$ == $rowIndex$$8$$) {
        if (!isNaN($rangeStartColumn$$1_startIndex$$20$$.column) && !isNaN($endIndex$$7_range$$11_rangeEndColumn$$1$$.column)) {
          if ($rangeStartColumn$$1_startIndex$$20$$ = $rangeStartColumn$$1_startIndex$$20$$.column, $endIndex$$7_range$$11_rangeEndColumn$$1$$ = $endIndex$$7_range$$11_rangeEndColumn$$1$$.column, $rangeStartColumn$$1_startIndex$$20$$ == $columnIndex$$2_index$$125$$ && $endIndex$$7_range$$11_rangeEndColumn$$1$$ == $columnIndex$$2_index$$125$$) {
            $indexToRemove$$1$$ = $i$$181$$;
            break;
          }
        } else {
          if (isNaN($columnIndex$$2_index$$125$$)) {
            $indexToRemove$$1$$ = $i$$181$$;
            break;
          }
        }
      }
    }
    -1 != $indexToRemove$$1$$ && (this.$unhighlightRange$($ranges$$2$$[$indexToRemove$$1$$]), $ranges$$2$$.splice($indexToRemove$$1$$, 1));
  };
  $DvtDataGrid$$.prototype.$handleDatabodyClickSelection$ = function $$DvtDataGrid$$$$$handleDatabodyClickSelection$$($event$$162$$) {
    var $index$$126$$, $cell$$17_ctrlKey$$5$$, $shiftKey$$3$$;
    $cell$$17_ctrlKey$$5$$ = this.$findCell$($event$$162$$.target);
    null != $cell$$17_ctrlKey$$5$$ && ($index$$126$$ = {row:this.$getRowIndex$($cell$$17_ctrlKey$$5$$.parentNode), column:this.$getCellIndex$($cell$$17_ctrlKey$$5$$)});
    null == $index$$126$$ || void 0 == $index$$126$$ || this.$isMultipleSelection$() && 2 === $event$$162$$.button && this.$_isContainSelection$($index$$126$$) || (this.$scrollToIndex$($index$$126$$), $cell$$17_ctrlKey$$5$$ = this.$m_utils$.$ctrlEquivalent$($event$$162$$), $shiftKey$$3$$ = $event$$162$$.shiftKey, this.$isMultipleSelection$() ? this.$m_utils$.$isTouchDevice$() ? (this.$_removeTouchSelectionAffordance$(), null != this.$m_active$ && this.$_unhighlightActive$(), this.$selectAndFocus$($index$$126$$, 
    $event$$162$$, !1)) : $cell$$17_ctrlKey$$5$$ || $shiftKey$$3$$ ? !$cell$$17_ctrlKey$$5$$ && $shiftKey$$3$$ ? this.$extendSelection$($index$$126$$, $event$$162$$) : this.$selectAndFocus$($index$$126$$, $event$$162$$, !0) : this.$selectAndFocus$($index$$126$$, $event$$162$$, !1) : this.$selectAndFocus$($index$$126$$, $event$$162$$, !1));
  };
  $DvtDataGrid$$.prototype.$_isContainSelection$ = function $$DvtDataGrid$$$$$_isContainSelection$$($index$$127$$, $ranges$$3$$) {
    var $endIndex$$8_range$$12_rangeEndColumn$$2$$, $rangeStartColumn$$2_startIndex$$21$$, $rangeStartRow$$2$$, $rangeEndRow$$2$$, $i$$182$$;
    null == $ranges$$3$$ && ($ranges$$3$$ = this.$GetSelection$());
    for ($i$$182$$ = 0;$i$$182$$ < $ranges$$3$$.length;$i$$182$$ += 1) {
      if ($endIndex$$8_range$$12_rangeEndColumn$$2$$ = $ranges$$3$$[$i$$182$$], $rangeStartColumn$$2_startIndex$$21$$ = $endIndex$$8_range$$12_rangeEndColumn$$2$$.startIndex, $endIndex$$8_range$$12_rangeEndColumn$$2$$ = this.$getEndIndex$($endIndex$$8_range$$12_rangeEndColumn$$2$$), $rangeStartRow$$2$$ = $rangeStartColumn$$2_startIndex$$21$$.row, $rangeEndRow$$2$$ = $endIndex$$8_range$$12_rangeEndColumn$$2$$.row, !($index$$127$$.row < $rangeStartRow$$2$$ || -1 != $rangeEndRow$$2$$ && $index$$127$$.row > 
      $rangeEndRow$$2$$)) {
        if (isNaN($rangeStartColumn$$2_startIndex$$21$$.column) || isNaN($endIndex$$8_range$$12_rangeEndColumn$$2$$.column)) {
          return!0;
        }
        $rangeStartColumn$$2_startIndex$$21$$ = $rangeStartColumn$$2_startIndex$$21$$.column;
        $endIndex$$8_range$$12_rangeEndColumn$$2$$ = $endIndex$$8_range$$12_rangeEndColumn$$2$$.column;
        if (!($index$$127$$.column < $rangeStartColumn$$2_startIndex$$21$$ || -1 != $endIndex$$8_range$$12_rangeEndColumn$$2$$ && $index$$127$$.column > $endIndex$$8_range$$12_rangeEndColumn$$2$$)) {
          return!0;
        }
      }
    }
    return!1;
  };
  $DvtDataGrid$$.prototype.$_compareSelections$ = function $$DvtDataGrid$$$$$_compareSelections$$($selection1$$, $selection2$$) {
    var $i$$183$$, $j$$29$$, $foundMatch$$2$$;
    if ($selection1$$.length !== $selection2$$.length) {
      return!1;
    }
    for ($i$$183$$ = 0;$i$$183$$ < $selection1$$.length;$i$$183$$ += 1) {
      $foundMatch$$2$$ = !1;
      for ($j$$29$$ = 0;$j$$29$$ < $selection2$$.length;$j$$29$$ += 1) {
        $selection1$$[$i$$183$$].startIndex.row === $selection2$$[$j$$29$$].startIndex.row && $selection1$$[$i$$183$$].startIndex.column === $selection2$$[$j$$29$$].startIndex.column && $selection1$$[$i$$183$$].endIndex.row === $selection2$$[$j$$29$$].endIndex.row && $selection1$$[$i$$183$$].endIndex.column === $selection2$$[$j$$29$$].endIndex.column && ($foundMatch$$2$$ = !0);
      }
      if (!1 === $foundMatch$$2$$) {
        return!1;
      }
    }
    return!0;
  };
  $DvtDataGrid$$.prototype.$findRow$ = function $$DvtDataGrid$$$$$findRow$$($elem$$45$$) {
    return this.find($elem$$45$$, "row");
  };
  $DvtDataGrid$$.prototype.$_clearSelection$ = function $$DvtDataGrid$$$$$_clearSelection$$() {
    var $previous$$1$$;
    this.$unhighlightSelection$();
    this.$_removeTouchSelectionAffordance$();
    $previous$$1$$ = this.$GetSelection$();
    this.$m_selection$ = [];
    this.$_compareSelectionAndFire$(null, $previous$$1$$);
  };
  $DvtDataGrid$$.prototype.$setDiscontiguousSelectionMode$ = function $$DvtDataGrid$$$$$setDiscontiguousSelectionMode$$($flag$$6$$) {
    this.$m_discontiguousSelection$ = $flag$$6$$;
    this.$_setAccInfoText$($flag$$6$$ ? "accessibleRangeSelectModeOn" : "accessibleRangeSelectModeOff");
  };
  $DvtDataGrid$$.prototype.$handleSelectionKeyDown$ = function $$DvtDataGrid$$$$$handleSelectionKeyDown$$($event$$163$$) {
    var $column$$11_keyCode$$8_row$$43$$, $cell$$18_ctrlKey$$6$$, $shiftKey$$4$$, $processed$$3$$ = !1;
    $column$$11_keyCode$$8_row$$43$$ = $event$$163$$.keyCode;
    $cell$$18_ctrlKey$$6$$ = this.$findCell$($event$$163$$.target);
    this.$isActionableMode$() ? $processed$$3$$ = this.$_handleActionableModeKeyDown$($event$$163$$, $cell$$18_ctrlKey$$6$$, !1) : $column$$11_keyCode$$8_row$$43$$ == $DvtDataGrid$$.$F2_KEY$ || $column$$11_keyCode$$8_row$$43$$ == $DvtDataGrid$$.$ENTER_KEY$ ? this.$_enterActionableMode$($cell$$18_ctrlKey$$6$$) : $column$$11_keyCode$$8_row$$43$$ == $DvtDataGrid$$.$ESC_KEY$ ? this.$m_discontiguousSelection$ && this.$setDiscontiguousSelectionMode$(!1) : this.$isNavigationKey$($column$$11_keyCode$$8_row$$43$$) ? 
    ($cell$$18_ctrlKey$$6$$ = this.$m_utils$.$ctrlEquivalent$($event$$163$$), $shiftKey$$4$$ = $event$$163$$.shiftKey, this.$_updateStateInfo$("accessibleStateSelected"), $cell$$18_ctrlKey$$6$$ || ($processed$$3$$ = this.$handleCellArrowKeys$($column$$11_keyCode$$8_row$$43$$, $shiftKey$$4$$ && this.$isMultipleSelection$(), $event$$163$$))) : $event$$163$$.shiftKey && $column$$11_keyCode$$8_row$$43$$ == $DvtDataGrid$$.$F8_KEY$ ? (this.$setDiscontiguousSelectionMode$(!this.$m_discontiguousSelection$), 
    $processed$$3$$ = !0) : $column$$11_keyCode$$8_row$$43$$ == $DvtDataGrid$$.$SPACE_KEY$ && ($cell$$18_ctrlKey$$6$$ = this.$m_utils$.$ctrlEquivalent$($event$$163$$), $shiftKey$$4$$ = $event$$163$$.shiftKey, "cell" == this.$m_options$.$getSelectionMode$() && this.$isMultipleSelection$() && ($shiftKey$$4$$ && !$cell$$18_ctrlKey$$6$$ || $cell$$18_ctrlKey$$6$$) && ($cell$$18_ctrlKey$$6$$ ? ($column$$11_keyCode$$8_row$$43$$ = this.$m_active$.indexes.column, this.$_selectEntireColumn$($column$$11_keyCode$$8_row$$43$$, 
    $column$$11_keyCode$$8_row$$43$$, $event$$163$$), this.$_setAccInfoText$("accessibleColumnSelected", {column:this.$m_active$.keys.column})) : ($column$$11_keyCode$$8_row$$43$$ = this.$m_active$.indexes.row, this.$_selectEntireRow$($column$$11_keyCode$$8_row$$43$$, $column$$11_keyCode$$8_row$$43$$, $event$$163$$), this.$_setAccInfoText$("accessibleRowSelected", {row:this.$m_active$.keys.row})), $processed$$3$$ = !0));
    this.$isReadCurrentContent$($event$$163$$) && (this.$readCurrentContent$(), $processed$$3$$ = !0);
    return $processed$$3$$;
  };
  $DvtDataGrid$$.prototype.$_selectEntireRow$ = function $$DvtDataGrid$$$$$_selectEntireRow$$($rowStart$$10_startIndex$$22$$, $endIndex$$9_rowEnd$$1$$, $event$$164$$) {
    $rowStart$$10_startIndex$$22$$ = this.createIndex($rowStart$$10_startIndex$$22$$, 0);
    $endIndex$$9_rowEnd$$1$$ = this.createIndex($endIndex$$9_rowEnd$$1$$, -1);
    this.$_selectRange$($rowStart$$10_startIndex$$22$$, $endIndex$$9_rowEnd$$1$$, $event$$164$$);
  };
  $DvtDataGrid$$.prototype.$_selectEntireColumn$ = function $$DvtDataGrid$$$$$_selectEntireColumn$$($columnStart$$7_startIndex$$23$$, $columnEnd$$1_endIndex$$10$$, $event$$165$$) {
    $columnStart$$7_startIndex$$23$$ = this.createIndex(0, $columnStart$$7_startIndex$$23$$);
    $columnEnd$$1_endIndex$$10$$ = this.createIndex(-1, $columnEnd$$1_endIndex$$10$$);
    this.$_selectRange$($columnStart$$7_startIndex$$23$$, $columnEnd$$1_endIndex$$10$$, $event$$165$$);
  };
  $DvtDataGrid$$.prototype.$_selectRange$ = function $$DvtDataGrid$$$$$_selectRange$$($startIndex$$24$$, $endIndex$$11$$, $event$$166$$) {
    this.$unhighlightSelection$();
    this.$_createRangeWithKeys$($startIndex$$24$$, $endIndex$$11$$, this.$_selectRangeCallback$.bind(this, $event$$166$$));
  };
  $DvtDataGrid$$.prototype.$_selectRangeCallback$ = function $$DvtDataGrid$$$$$_selectRangeCallback$$($event$$167$$, $newRange$$) {
    var $selection$$4$$, $previous$$2$$;
    $previous$$2$$ = this.$GetSelection$();
    $selection$$4$$ = [];
    $selection$$4$$.push($newRange$$);
    this.$m_selection$ = $selection$$4$$;
    this.$highlightRange$($newRange$$);
    this.$_isDatabodyCellActive$() && (this.$m_selectionFrontier$ = this.$m_active$.indexes, this.$_highlightActive$());
    this.$_compareSelectionAndFire$($event$$167$$, $previous$$2$$);
  };
  $DvtDataGrid$$.prototype.$GetSelection$ = function $$DvtDataGrid$$$$$GetSelection$$() {
    null == this.$m_selection$ && (this.$m_selection$ = []);
    return this.$m_selection$;
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.GetSelection", $DvtDataGrid$$.prototype.$GetSelection$, void 0);
  $DvtDataGrid$$.prototype.$SetSelection$ = function $$DvtDataGrid$$$$$SetSelection$$($selection$$5$$) {
    void 0 != $selection$$5$$ && (null == $selection$$5$$ && ($selection$$5$$ = []), this.$unhighlightSelection$(), this.$GetSelection$(), this.$m_selection$ = $selection$$5$$, null != this.$m_databody$ && this.$applySelection$(this.$m_startRow$, this.$m_endRow$));
  };
  $goog$exportPath_$$("DvtDataGrid.prototype.SetSelection", $DvtDataGrid$$.prototype.$SetSelection$, void 0);
  $DvtDataGrid$$.prototype.$fireSelectionEvent$ = function $$DvtDataGrid$$$$$fireSelectionEvent$$($event$$168$$, $previousSelection$$) {
    var $details$$4$$ = {event:$event$$168$$, ui:{selection:this.$GetSelection$(), previousSelection:$previousSelection$$}};
    this.fireEvent("select", $details$$4$$);
  };
  $DvtDataGrid$$.prototype.$extendSelection$ = function $$DvtDataGrid$$$$$extendSelection$$($index$$128$$, $event$$169$$) {
    var $anchor$$;
    $anchor$$ = this.$m_utils$.$isTouchDevice$() ? this.$m_touchSelectAnchor$ : this.$m_active$.indexes;
    null != $anchor$$ && (this.$_resetSelectionFrontierFocus$(), this.$m_selectionFrontier$ = $index$$128$$, "row" == this.$m_options$.$getSelectionMode$() && ($index$$128$$ = this.createIndex($index$$128$$.row)), this.$_createRangeWithKeys$($anchor$$, $index$$128$$, this.$_extendSelectionCallback$.bind(this, $event$$169$$)));
  };
  $DvtDataGrid$$.prototype.$_extendSelectionCallback$ = function $$DvtDataGrid$$$$$_extendSelectionCallback$$($event$$170$$, $newRange$$1$$) {
    var $selection$$6_startIndexesMatch$$, $previous$$4$$, $currentRange$$, $endIndexesMatch$$;
    $previous$$4$$ = this.$GetSelection$();
    $currentRange$$ = $previous$$4$$[$previous$$4$$.length - 1];
    $selection$$6_startIndexesMatch$$ = $currentRange$$.startIndex.row == $newRange$$1$$.startIndex.row;
    null != $currentRange$$.startIndex.column && null != $newRange$$1$$.startIndex.column && ($selection$$6_startIndexesMatch$$ = $selection$$6_startIndexesMatch$$ && $currentRange$$.startIndex.column == $newRange$$1$$.startIndex.column);
    $endIndexesMatch$$ = $currentRange$$.endIndex.row == $newRange$$1$$.endIndex.row;
    null != $currentRange$$.endIndex.column && null != $newRange$$1$$.endIndex.column && ($endIndexesMatch$$ = $endIndexesMatch$$ && $currentRange$$.endIndex.column == $newRange$$1$$.endIndex.column);
    $selection$$6_startIndexesMatch$$ && $endIndexesMatch$$ || ($selection$$6_startIndexesMatch$$ = $previous$$4$$.slice(0), $selection$$6_startIndexesMatch$$.pop(), $selection$$6_startIndexesMatch$$.push($newRange$$1$$), this.$m_selection$ = $selection$$6_startIndexesMatch$$, this.$unhighlightRange$($currentRange$$), this.$highlightRange$($newRange$$1$$, !0), this.$_makeSelectionFrontierFocus$(), this.$_compareSelectionAndFire$($event$$170$$, $previous$$4$$), this.$m_discontiguousSelection$ && !this.$m_utils$.$isTouchDevice$() && 
    this.$setDiscontiguousSelectionMode$(!1));
  };
  $DvtDataGrid$$.prototype.$_resetSelectionFrontierFocus$ = function $$DvtDataGrid$$$$$_resetSelectionFrontierFocus$$() {
    var $cell$$19_range$$13$$;
    null == this.$m_selectionFrontier$ || this.$_isDatabodyCellActive$() && this.$m_selectionFrontier$.row == this.$m_active$.indexes.row && this.$m_selectionFrontier$.column == this.$m_active$.indexes.column || ($cell$$19_range$$13$$ = this.createRange(this.$m_selectionFrontier$), $cell$$19_range$$13$$ = this.$getElementsInRange$($cell$$19_range$$13$$), null != $cell$$19_range$$13$$ && 0 < $cell$$19_range$$13$$.length && this.$_unsetAriaProperties$($cell$$19_range$$13$$[0]));
  };
  $DvtDataGrid$$.prototype.$_makeSelectionFrontierFocus$ = function $$DvtDataGrid$$$$$_makeSelectionFrontierFocus$$() {
    var $cell$$20_range$$14_rowOrCell$$;
    null == this.$m_selectionFrontier$ || this.$_isDatabodyCellActive$() && this.$m_selectionFrontier$.row == this.$m_active$.indexes.row && this.$m_selectionFrontier$.column == this.$m_active$.indexes.column || (this.$_isDatabodyCellActive$() && ($cell$$20_range$$14_rowOrCell$$ = this.createRange(this.$m_active$.indexes), $cell$$20_range$$14_rowOrCell$$ = this.$getElementsInRange$($cell$$20_range$$14_rowOrCell$$), null != $cell$$20_range$$14_rowOrCell$$ && 0 < $cell$$20_range$$14_rowOrCell$$.length && 
    this.$_unsetAriaProperties$($cell$$20_range$$14_rowOrCell$$[0])), $cell$$20_range$$14_rowOrCell$$ = this.createRange(this.$m_selectionFrontier$), $cell$$20_range$$14_rowOrCell$$ = this.$getElementsInRange$($cell$$20_range$$14_rowOrCell$$), null != $cell$$20_range$$14_rowOrCell$$ && 0 != $cell$$20_range$$14_rowOrCell$$.length && (this.$_updateContextInfo$(this.$m_selectionFrontier$), $cell$$20_range$$14_rowOrCell$$ = this.$m_utils$.$containsCSSClassName$($cell$$20_range$$14_rowOrCell$$[0], this.$getMappedStyle$("row")) ? 
    $cell$$20_range$$14_rowOrCell$$[0].firstChild : $cell$$20_range$$14_rowOrCell$$[0], this.$_setAriaProperties$(this.$_createActiveObject$($cell$$20_range$$14_rowOrCell$$), null, $cell$$20_range$$14_rowOrCell$$)));
  };
  $DvtDataGrid$$.prototype.$selectAndFocus$ = function $$DvtDataGrid$$$$$selectAndFocus$$($index$$129$$, $event$$171$$, $augment$$) {
    null == $augment$$ && ($augment$$ = !1);
    this.$_resetSelectionFrontierFocus$();
    this.$_setActiveByIndex$($index$$129$$, $event$$171$$) && ("row" == this.$m_options$.$getSelectionMode$() && ($index$$129$$ = this.createIndex($index$$129$$.row)), this.$_createRangeWithKeys$($index$$129$$, $index$$129$$, this.$_selectAndFocusRangeCallback$.bind(this, $index$$129$$, $event$$171$$, $augment$$)));
  };
  $DvtDataGrid$$.prototype.$_selectAndFocusRangeCallback$ = function $$DvtDataGrid$$$$$_selectAndFocusRangeCallback$$($index$$130$$, $event$$172$$, $augment$$1$$, $range$$15$$) {
    var $selection$$7$$, $previous$$5$$;
    $previous$$5$$ = this.$GetSelection$();
    $selection$$7$$ = $previous$$5$$.slice(0);
    $augment$$1$$ || (this.$m_discontiguousSelection$ ? this.$_isDatabodyCellActive$() && null != this.$m_prevActive$ && "cell" == this.$m_prevActive$.type && this.$m_selectionFrontier$.row == this.$m_prevActive$.indexes.row && this.$m_selectionFrontier$.column == this.$m_prevActive$.indexes.column && !this.$m_utils$.$isTouchDevice$() && ($selection$$7$$.pop(), this.$_isContainSelection$(this.$m_prevActive$.indexes, $selection$$7$$) || this.$_unhighlightElement$(this.$_getCellByIndex$(this.$m_prevActive$.indexes), 
    ["selected"])) : (this.$unhighlightSelection$(), $selection$$7$$ = []));
    this.$m_selectionFrontier$ = $index$$130$$;
    $selection$$7$$.push($range$$15$$);
    this.$m_selection$ = $selection$$7$$;
    this.$_highlightElement$(this.$_getCellByIndex$($index$$130$$), ["selected"]);
    this.$_compareSelectionAndFire$($event$$172$$, $previous$$5$$);
  };
  $DvtDataGrid$$.prototype.$_compareSelectionAndFire$ = function $$DvtDataGrid$$$$$_compareSelectionAndFire$$($event$$173$$, $clone$$2$$) {
    var $selection$$8$$ = this.$GetSelection$();
    this.$m_utils$.$isTouchDevice$() && this.$isMultipleSelection$() && 0 < $selection$$8$$.length && (this.$_addTouchSelectionAffordance$($event$$173$$), this.$_moveTouchSelectionAffordance$());
    this.$_compareSelections$($selection$$8$$, $clone$$2$$) || this.$fireSelectionEvent$($event$$173$$, $clone$$2$$);
  };
  $DvtDataGrid$$.prototype.$_addTouchSelectionAffordance$ = function $$DvtDataGrid$$$$$_addTouchSelectionAffordance$$($cell$$21_event$$174_target$$107$$) {
    var $iconSize_left$$9$$, $bottomIcon_selectionMode$$2_topIcon$$, $dir$$13_row$$44$$;
    null == this.$m_topSelectIconContainer$ && null == this.$m_bottomSelectIconContainer$ && ($dir$$13_row$$44$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left", $iconSize_left$$9$$ = this.$_getTouchSelectionAffordanceSize$(), this.$m_topSelectIconContainer$ = document.createElement("div"), this.$m_topSelectIconContainer$.className = this.$getMappedStyle$("toucharea"), this.$setElementDir$(this.$m_topSelectIconContainer$, -$iconSize_left$$9$$ / 2, "top"), $bottomIcon_selectionMode$$2_topIcon$$ = 
    document.createElement("div"), $bottomIcon_selectionMode$$2_topIcon$$.className = this.$getMappedStyle$("selectaffordancetop"), $bottomIcon_selectionMode$$2_topIcon$$.setAttribute("role", "button"), $bottomIcon_selectionMode$$2_topIcon$$.setAttribute("aria-label", this.$m_resources$.$getTranslatedText$("accessibleSelectionAffordanceTop")), this.$m_topSelectIconContainer$.appendChild($bottomIcon_selectionMode$$2_topIcon$$), this.$m_bottomSelectIconContainer$ = document.createElement("div"), this.$m_bottomSelectIconContainer$.className = 
    this.$getMappedStyle$("toucharea"), this.$setElementDir$(this.$m_bottomSelectIconContainer$, -1 * $iconSize_left$$9$$ / 2, "bottom"), $bottomIcon_selectionMode$$2_topIcon$$ = document.createElement("div"), $bottomIcon_selectionMode$$2_topIcon$$.className = this.$getMappedStyle$("selectaffordancebottom"), $bottomIcon_selectionMode$$2_topIcon$$.setAttribute("role", "button"), $bottomIcon_selectionMode$$2_topIcon$$.setAttribute("aria-label", this.$m_resources$.$getTranslatedText$("accessibleSelectionAffordanceBottom")), 
    this.$m_bottomSelectIconContainer$.appendChild($bottomIcon_selectionMode$$2_topIcon$$), $bottomIcon_selectionMode$$2_topIcon$$ = this.$m_options$.$getSelectionMode$(), "row" === $bottomIcon_selectionMode$$2_topIcon$$ ? ($iconSize_left$$9$$ = this.$getElementWidth$(this.$m_databody$) / 2 + this.$m_currentScrollLeft$ - $iconSize_left$$9$$ / 2, this.$setElementDir$(this.$m_topSelectIconContainer$, $iconSize_left$$9$$, $dir$$13_row$$44$$), this.$setElementDir$(this.$m_bottomSelectIconContainer$, 
    $iconSize_left$$9$$, $dir$$13_row$$44$$)) : ($cell$$21_event$$174_target$$107$$ = $cell$$21_event$$174_target$$107$$.target, $cell$$21_event$$174_target$$107$$ = this.$findCell$($cell$$21_event$$174_target$$107$$), $iconSize_left$$9$$ = this.$getElementDir$($cell$$21_event$$174_target$$107$$, $dir$$13_row$$44$$) - $iconSize_left$$9$$ / 2, this.$setElementDir$(this.$m_topSelectIconContainer$, $iconSize_left$$9$$, $dir$$13_row$$44$$), this.$setElementDir$(this.$m_bottomSelectIconContainer$, $iconSize_left$$9$$ + 
    this.$calculateColumnWidth$($cell$$21_event$$174_target$$107$$), $dir$$13_row$$44$$)), $dir$$13_row$$44$$ = this.$getElementsInRange$(this.createRange(this.$m_active$.indexes))[0].parentNode, $dir$$13_row$$44$$.appendChild(this.$m_topSelectIconContainer$), $dir$$13_row$$44$$.appendChild(this.$m_bottomSelectIconContainer$));
  };
  $DvtDataGrid$$.prototype.$_removeTouchSelectionAffordance$ = function $$DvtDataGrid$$$$$_removeTouchSelectionAffordance$$() {
    this.$_isDatabodyCellActive$() && this.$m_topSelectIconContainer$ && this.$m_topSelectIconContainer$.parentNode && (this.$m_topSelectIconContainer$.parentNode.removeChild(this.$m_topSelectIconContainer$), this.$m_bottomSelectIconContainer$.parentNode.removeChild(this.$m_bottomSelectIconContainer$));
  };
  $DvtDataGrid$$.prototype.$_moveTouchSelectionAffordance$ = function $$DvtDataGrid$$$$$_moveTouchSelectionAffordance$$() {
    var $selection$$9_topIconCell$$, $topRow$$, $bottomRow$$, $dir$$14_selectionMode$$3$$, $bottomIconCell_elementsInRange$$;
    $selection$$9_topIconCell$$ = this.$GetSelection$();
    0 < $selection$$9_topIconCell$$.length && ($dir$$14_selectionMode$$3$$ = this.$m_options$.$getSelectionMode$(), $topRow$$ = this.$_findRowByKey$($selection$$9_topIconCell$$[$selection$$9_topIconCell$$.length - 1].startKey.row), $bottomRow$$ = this.$_findRowByKey$($selection$$9_topIconCell$$[$selection$$9_topIconCell$$.length - 1].endKey.row), null != this.$m_topSelectIconContainer$ && null != this.$m_bottomSelectIconContainer$ && ("row" === $dir$$14_selectionMode$$3$$ ? ($topRow$$.appendChild(this.$m_topSelectIconContainer$), 
    $bottomRow$$.appendChild(this.$m_bottomSelectIconContainer$)) : ($dir$$14_selectionMode$$3$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left", $bottomIconCell_elementsInRange$$ = this.$getElementsInRange$($selection$$9_topIconCell$$[$selection$$9_topIconCell$$.length - 1]), $selection$$9_topIconCell$$ = $bottomIconCell_elementsInRange$$[0], $bottomIconCell_elementsInRange$$ = $bottomIconCell_elementsInRange$$[$bottomIconCell_elementsInRange$$.length - 1], $topRow$$.appendChild(this.$m_topSelectIconContainer$), 
    $bottomRow$$.appendChild(this.$m_bottomSelectIconContainer$), this.$setElementDir$(this.$m_topSelectIconContainer$, this.$getElementDir$($selection$$9_topIconCell$$, $dir$$14_selectionMode$$3$$) - this.$_getTouchSelectionAffordanceSize$() / 2, $dir$$14_selectionMode$$3$$), this.$setElementDir$(this.$m_bottomSelectIconContainer$, this.$getElementDir$($bottomIconCell_elementsInRange$$, $dir$$14_selectionMode$$3$$) + this.$calculateColumnWidth$($bottomIconCell_elementsInRange$$) - this.$_getTouchSelectionAffordanceSize$() / 
    2, $dir$$14_selectionMode$$3$$))));
  };
  $DvtDataGrid$$.prototype.$_scrollTouchSelectionAffordance$ = function $$DvtDataGrid$$$$$_scrollTouchSelectionAffordance$$() {
    var $newLeft$$, $dir$$15$$;
    "row" === this.$m_options$.$getSelectionMode$() && null != this.$m_topSelectIconContainer$ && ($dir$$15$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left", $newLeft$$ = this.$getElementWidth$(this.$m_databody$) / 2 + this.$m_currentScrollLeft$, this.$setElementDir$(this.$m_topSelectIconContainer$, $newLeft$$, $dir$$15$$), this.$setElementDir$(this.$m_bottomSelectIconContainer$, $newLeft$$, $dir$$15$$));
  };
  $DvtDataGrid$$.prototype.$_getTouchSelectionAffordanceSize$ = function $$DvtDataGrid$$$$$_getTouchSelectionAffordanceSize$$() {
    var $div$$4$$, $divWidth$$;
    null == this.$m_touchSelectionAffordanceSize$ && ($div$$4$$ = document.createElement("div"), $div$$4$$.className = this.$getMappedStyle$("toucharea"), $div$$4$$.style.visibilty = "hidden", $div$$4$$.style.top = "0px", $div$$4$$.style.visibilty = "0px", this.$m_root$.appendChild($div$$4$$), $divWidth$$ = $div$$4$$.offsetWidth, this.$m_root$.removeChild($div$$4$$), this.$m_touchSelectionAffordanceSize$ = $divWidth$$);
    return this.$m_touchSelectionAffordanceSize$;
  };
  $DvtDataGrid$$.$SORT_ANIMATION_DURATION$ = 800;
  $DvtDataGrid$$.prototype.$_handleSortMouseOver$ = function $$DvtDataGrid$$$$$_handleSortMouseOver$$($event$$175_target$$108$$) {
    var $header$$20$$;
    this.$_databodyEmpty$() || ($event$$175_target$$108$$ = $event$$175_target$$108$$.target, ($header$$20$$ = this.$findHeader$($event$$175_target$$108$$)) && this.$_showOrHideSortIcon$($header$$20$$, !1), (this.$m_utils$.$containsCSSClassName$($event$$175_target$$108$$, this.$getMappedStyle$("sortascending")) || this.$m_utils$.$containsCSSClassName$($event$$175_target$$108$$, this.$getMappedStyle$("sortdescending"))) && this.$m_utils$.$addCSSClassName$($event$$175_target$$108$$, this.$getMappedStyle$("hover")));
  };
  $DvtDataGrid$$.prototype.$_handleSortMouseOut$ = function $$DvtDataGrid$$$$$_handleSortMouseOut$$($event$$176_header$$21$$) {
    var $target$$109$$, $relatedTarget$$;
    !this.$_databodyEmpty$() && ($target$$109$$ = $event$$176_header$$21$$.target, $relatedTarget$$ = $event$$176_header$$21$$.relatedTarget, $event$$176_header$$21$$ = this.$findHeader$($target$$109$$), null != $event$$176_header$$21$$ && null != $relatedTarget$$ && $event$$176_header$$21$$ === this.$findHeader$($relatedTarget$$) || this.$_showOrHideSortIcon$($event$$176_header$$21$$, !0), this.$m_utils$.$containsCSSClassName$($target$$109$$, this.$getMappedStyle$("sortascending")) || this.$m_utils$.$containsCSSClassName$($target$$109$$, 
    this.$getMappedStyle$("sortdescending"))) && (this.$m_utils$.$removeCSSClassName$($target$$109$$, this.$getMappedStyle$("hover")), this.$m_utils$.$removeCSSClassName$($target$$109$$, this.$getMappedStyle$("selected")));
  };
  $DvtDataGrid$$.prototype.$_handleSortIconMouseDown$ = function $$DvtDataGrid$$$$$_handleSortIconMouseDown$$($icon$$) {
    this.$_databodyEmpty$() || this.$m_utils$.$addCSSClassName$($icon$$, this.$getMappedStyle$("selected"));
  };
  $DvtDataGrid$$.prototype.$_toggleSortIconDirection$ = function $$DvtDataGrid$$$$$_toggleSortIconDirection$$($header$$22$$, $direction$$6$$) {
    var $icon$$1$$;
    null != $header$$22$$ && ($icon$$1$$ = this.$_getSortIcon$($header$$22$$), "descending" === $direction$$6$$ && this.$m_utils$.$containsCSSClassName$($icon$$1$$, this.$getMappedStyle$("sortascending")) ? (this.$m_utils$.$removeCSSClassName$($icon$$1$$, this.$getMappedStyle$("sortascending")), this.$m_utils$.$addCSSClassName$($icon$$1$$, this.$getMappedStyle$("sortdescending"))) : "ascending" === $direction$$6$$ && this.$m_utils$.$containsCSSClassName$($icon$$1$$, this.$getMappedStyle$("sortdescending")) && 
    (this.$m_utils$.$removeCSSClassName$($icon$$1$$, this.$getMappedStyle$("sortdescending")), this.$m_utils$.$addCSSClassName$($icon$$1$$, this.$getMappedStyle$("sortascending"))));
  };
  $DvtDataGrid$$.prototype.$_showOrHideSortIcon$ = function $$DvtDataGrid$$$$$_showOrHideSortIcon$$($header$$23$$, $hide$$) {
    var $icon$$2$$, $sorted$$2$$ = !1;
    null != $header$$23$$ && (($icon$$2$$ = this.$_getSortIcon$($header$$23$$), null != this.$m_sortInfo$ && ($sorted$$2$$ = this.$m_sortInfo$.key === this.$_getKey$($header$$23$$)), !1 !== $hide$$ || $sorted$$2$$) ? !0 !== $hide$$ || $sorted$$2$$ || (this.$m_utils$.$removeCSSClassName$($icon$$2$$, this.$getMappedStyle$("default")), this.$m_utils$.$addCSSClassName$($icon$$2$$, this.$getMappedStyle$("disabled"))) : (this.$m_utils$.$removeCSSClassName$($icon$$2$$, this.$getMappedStyle$("disabled")), 
    this.$m_utils$.$addCSSClassName$($icon$$2$$, this.$getMappedStyle$("default"))));
  };
  $DvtDataGrid$$.prototype.$_buildSortIcon$ = function $$DvtDataGrid$$$$$_buildSortIcon$$($direction$$7_headerContext$$4$$) {
    var $sortIcon$$1$$, $iconClassString$$, $sortContainer$$;
    $sortContainer$$ = document.createElement("div");
    $sortContainer$$.className = this.$getMappedStyle$("sortcontainer");
    $sortIcon$$1$$ = document.createElement("div");
    $iconClassString$$ = this.$getMappedStyle$("icon") + " " + this.$getMappedStyle$("clickableicon");
    $direction$$7_headerContext$$4$$.key === (null != this.$m_sortInfo$ ? this.$m_sortInfo$.key : null) ? ($direction$$7_headerContext$$4$$ = null != this.$m_sortInfo$ ? this.$m_sortInfo$.direction : null, "ascending" === $direction$$7_headerContext$$4$$ ? $sortIcon$$1$$.className = this.$getMappedStyle$("sortascending") + " " + $iconClassString$$ + " " + this.$getMappedStyle$("default") : "descending" === $direction$$7_headerContext$$4$$ && ($sortIcon$$1$$.className = this.$getMappedStyle$("sortdescending") + 
    " " + $iconClassString$$ + " " + this.$getMappedStyle$("default"))) : ($iconClassString$$ += " " + this.$getMappedStyle$("disabled"), $sortIcon$$1$$.className = this.$getMappedStyle$("sortascending") + " " + $iconClassString$$);
    $sortContainer$$.appendChild($sortIcon$$1$$);
    return $sortContainer$$;
  };
  $DvtDataGrid$$.prototype.$_handleKeyboardSort$ = function $$DvtDataGrid$$$$$_handleKeyboardSort$$($header$$24$$, $event$$177$$) {
    if (!this.$_databodyEmpty$()) {
      var $direction$$8$$ = $header$$24$$.getAttribute(this.$m_resources$.$getMappedAttribute$("sortDir"));
      this.$_doHeaderSort$($event$$177$$, $header$$24$$, null == $direction$$8$$ || "descending" === $direction$$8$$ ? "ascending" : "descending");
    }
  };
  $DvtDataGrid$$.prototype.$_handleHeaderSort$ = function $$DvtDataGrid$$$$$_handleHeaderSort$$($event$$178$$) {
    var $direction$$9$$, $header$$25_target$$110$$;
    this.$_databodyEmpty$() || ($header$$25_target$$110$$ = $event$$178$$.target, $header$$25_target$$110$$ = this.$findHeader$($header$$25_target$$110$$), null != $header$$25_target$$110$$ && (null == $direction$$9$$ && ($direction$$9$$ = null != this.$m_sortInfo$ && this.$m_sortInfo$.key === this.$_getKey$($header$$25_target$$110$$) ? "ascending" === this.$m_sortInfo$.direction ? "descending" : "ascending" : "ascending"), this.$_doHeaderSort$($event$$178$$, $header$$25_target$$110$$, $direction$$9$$)));
  };
  $DvtDataGrid$$.prototype.$_handleCellSort$ = function $$DvtDataGrid$$$$$_handleCellSort$$($event$$179$$, $direction$$10$$, $header$$26$$) {
    null == $header$$26$$ || this.$_databodyEmpty$() || this.$_doHeaderSort$($event$$179$$, $header$$26$$, $direction$$10$$);
  };
  $DvtDataGrid$$.prototype.$_doHeaderSort$ = function $$DvtDataGrid$$$$$_doHeaderSort$$($criteria_event$$180$$, $header$$27$$, $direction$$11$$) {
    var $key$$68$$, $axis$$23$$;
    !0 != this.$m_isSorting$ ? (this.$m_delayedSort$ = null, $key$$68$$ = this.$_getKey$($header$$27$$), $axis$$23$$ = this.$_getAxis$($header$$27$$), this.$_removeSortSelection$(), $header$$27$$.setAttribute(this.$m_resources$.$getMappedAttribute$("sortDir"), $direction$$11$$), this.$m_sortInfo$ = {event:$criteria_event$$180$$, key:$key$$68$$, axis:$axis$$23$$, direction:$direction$$11$$}, this.$_toggleSortIconDirection$($header$$27$$, $direction$$11$$), this.$_addSortSelection$(), null != $direction$$11$$ && 
    null != $key$$68$$ && null != $axis$$23$$ && (this.$m_isSorting$ = !0, this.$showStatusText$(), $criteria_event$$180$$ = {axis:$axis$$23$$, key:$key$$68$$, direction:$direction$$11$$}, this.$m_dataSource$.sort($criteria_event$$180$$, {success:this.$_handleSortSuccess$.bind(this), error:this.$_handleSortError$.bind(this)})), this.$_setAccInfoText$("ascending" === $direction$$11$$ ? "accessibleSortAscending" : "accessibleSortDescending", {id:$key$$68$$})) : this.$m_delayedSort$ = {event:$criteria_event$$180$$, 
    header:$header$$27$$, direction:$direction$$11$$};
  };
  $DvtDataGrid$$.prototype.$_handleSortError$ = function $$DvtDataGrid$$$$$_handleSortError$$() {
    this.$hideStatusText$();
  };
  $DvtDataGrid$$.prototype.$_removeSortSelection$ = function $$DvtDataGrid$$$$$_removeSortSelection$$() {
    var $oldSortedHeader$$, $oldsortIcon$$;
    null != this.$m_sortInfo$ && ($oldSortedHeader$$ = this.$_findColumnHeaderByKey$(this.$m_sortInfo$.key), $oldSortedHeader$$.removeAttribute(this.$m_resources$.$getMappedAttribute$("sortDir")), $oldsortIcon$$ = this.$_getSortIcon$($oldSortedHeader$$), this.$_toggleSortIconDirection$($oldSortedHeader$$, "ascending"), "descending" === this.$m_sortInfo$.direction && (this.$m_utils$.$removeCSSClassName$($oldsortIcon$$, this.$getMappedStyle$("sortdescending")), this.$m_utils$.$addCSSClassName$($oldsortIcon$$, 
    this.$getMappedStyle$("sortascending"))), this.$m_utils$.$addCSSClassName$($oldsortIcon$$, this.$getMappedStyle$("disabled")), this.$m_utils$.$removeCSSClassName$($oldsortIcon$$, this.$getMappedStyle$("default")), this.$m_utils$.$removeCSSClassName$(this.$_getSortContainer$($oldSortedHeader$$), this.$getMappedStyle$("enabled")));
  };
  $DvtDataGrid$$.prototype.$_addSortSelection$ = function $$DvtDataGrid$$$$$_addSortSelection$$() {
    var $sortedHeader$$, $sortIcon$$2$$;
    null != this.$m_sortInfo$ && ($sortedHeader$$ = this.$_findColumnHeaderByKey$(this.$m_sortInfo$.key), $sortIcon$$2$$ = this.$_getSortIcon$($sortedHeader$$), this.$m_utils$.$addCSSClassName$($sortIcon$$2$$, this.$getMappedStyle$("default")), this.$m_utils$.$removeCSSClassName$($sortIcon$$2$$, this.$getMappedStyle$("disabled")), this.$m_utils$.$removeCSSClassName$($sortIcon$$2$$, this.$getMappedStyle$("selected")), this.$m_utils$.$addCSSClassName$(this.$_getSortContainer$($sortedHeader$$), this.$getMappedStyle$("enabled")));
  };
  $DvtDataGrid$$.prototype.$_getAxis$ = function $$DvtDataGrid$$$$$_getAxis$$($header$$28$$) {
    var $columnHeaderCellClassName$$, $rowHeaderCellClassName$$;
    $columnHeaderCellClassName$$ = this.$getMappedStyle$("colheadercell");
    $rowHeaderCellClassName$$ = this.$getMappedStyle$("rowheadercell");
    return this.$m_utils$.$containsCSSClassName$($header$$28$$, $columnHeaderCellClassName$$) ? "column" : this.$m_utils$.$containsCSSClassName$($header$$28$$, $rowHeaderCellClassName$$) ? "row" : null;
  };
  $DvtDataGrid$$.prototype.$_handleSortSuccess$ = function $$DvtDataGrid$$$$$_handleSortSuccess$$() {
    this.$hideStatusText$();
    this.$_isDatabodyCellActive$() ? this.$_indexes$({row:this.$m_active$.keys.row, column:this.$m_active$.keys.column}, this.$_handlePreSortScrolling$) : this.$_fetchForSort$(this.$m_startRow$, this.$m_endRow$ - this.$m_startRow$ + 1, !1);
  };
  $DvtDataGrid$$.prototype.$_handlePreSortScrolling$ = function $$DvtDataGrid$$$$$_handlePreSortScrolling$$($cellTop_indexes$$14_startRow$$6$$) {
    var $cellBottom_startRowPixel$$4$$, $isHighWatermark$$;
    $cellTop_indexes$$14_startRow$$6$$ = (-1 === $cellTop_indexes$$14_startRow$$6$$.row ? 0 : $cellTop_indexes$$14_startRow$$6$$.row) * this.$m_avgRowHeight$;
    $cellBottom_startRowPixel$$4$$ = $cellTop_indexes$$14_startRow$$6$$ + this.$m_avgRowHeight$;
    $isHighWatermark$$ = this.$_isHighWatermarkScrolling$();
    this.$m_currentScrollTop$ <= $cellTop_indexes$$14_startRow$$6$$ && $cellBottom_startRowPixel$$4$$ <= this.$m_currentScrollTop$ + this.$getElementHeight$(this.$m_databody$) || $isHighWatermark$$ ? this.$_fetchForSort$(this.$m_startRow$, this.$m_endRow$ - this.$m_startRow$ + 1, !1) : (this.$m_currentScrollTop$ = Math.min($cellTop_indexes$$14_startRow$$6$$, this.$_getMaxScrollHeight$()), $cellTop_indexes$$14_startRow$$6$$ = Math.floor(this.$m_currentScrollTop$ / this.$m_avgRowHeight$), $cellBottom_startRowPixel$$4$$ = 
    $cellTop_indexes$$14_startRow$$6$$ * this.$m_avgRowHeight$, this.$m_startRow$ = $cellTop_indexes$$14_startRow$$6$$, this.$m_endRow$ = -1, this.$m_startRowHeader$ = $cellTop_indexes$$14_startRow$$6$$, this.$m_endRowHeader$ = -1, this.$m_endRowHeaderPixel$ = this.$m_startRowHeaderPixel$ = this.$m_endRowPixel$ = this.$m_startRowPixel$ = $cellBottom_startRowPixel$$4$$, this.$_fetchForSort$($cellTop_indexes$$14_startRow$$6$$, null, !0));
  };
  $DvtDataGrid$$.prototype.$_fetchForSort$ = function $$DvtDataGrid$$$$$_fetchForSort$$($startRow$$7$$, $rowCount$$10$$, $scroll$$) {
    var $rowHeaderFragment$$2$$ = document.createDocumentFragment();
    this.fetchHeaders("row", $startRow$$7$$, $rowHeaderFragment$$2$$, $rowCount$$10$$, {success:this.$handleHeadersFetchSuccessForSort$.bind(this), error:this.$handleCellsFetchError$});
    this.fetchCells(this.$m_databody$, this.$m_scroller$, $startRow$$7$$, this.$m_startCol$, $rowCount$$10$$, this.$m_endCol$ - this.$m_startCol$ + 1, {success:this.$handleCellsFetchSuccessForSort$.bind(this, $rowHeaderFragment$$2$$, $scroll$$), error:this.$handleCellsFetchError$});
  };
  $DvtDataGrid$$.prototype.$handleHeadersFetchSuccessForSort$ = function $$DvtDataGrid$$$$$handleHeadersFetchSuccessForSort$$($headerSet$$13$$, $headerFragment_headerRange$$12$$, $rowInsert$$3$$) {
    var $axis$$24_c$$39$$, $start$$37$$, $headerCount$$4$$, $index$$131_returnVal$$13$$, $totalRowHeight$$6$$, $className$$16$$, $renderer$$9$$;
    $axis$$24_c$$39$$ = $headerFragment_headerRange$$12$$.axis;
    $start$$37$$ = $headerFragment_headerRange$$12$$.start;
    $headerFragment_headerRange$$12$$ = $headerFragment_headerRange$$12$$.header;
    $headerCount$$4$$ = $headerSet$$13$$.getCount();
    this.$m_fetching$[$axis$$24_c$$39$$] = !1;
    $axis$$24_c$$39$$ = $totalRowHeight$$6$$ = 0;
    $className$$16$$ = this.$getMappedStyle$("row") + " " + this.$getMappedStyle$("headercell") + " " + this.$getMappedStyle$("rowheadercell");
    for ($renderer$$9$$ = this.$m_options$.$getRenderer$("row");0 < $headerCount$$4$$ - $axis$$24_c$$39$$;) {
      $index$$131_returnVal$$13$$ = $start$$37$$ + $axis$$24_c$$39$$, $index$$131_returnVal$$13$$ = this.$buildLevelHeaders$($headerFragment_headerRange$$12$$, $index$$131_returnVal$$13$$, 0, 0, this.$m_startRowPixel$ + $totalRowHeight$$6$$, !0, $rowInsert$$3$$, $renderer$$9$$, $headerSet$$13$$, "row", $className$$16$$, this.$m_rowHeaderLevelCount$), $axis$$24_c$$39$$ += $index$$131_returnVal$$13$$.count, $totalRowHeight$$6$$ += $index$$131_returnVal$$13$$.totalHeight;
    }
    this.$m_endRowHeader$ = this.$m_startRowHeader$ + $headerCount$$4$$ - 1;
    this.$m_endRowHeaderPixel$ = this.$m_startRowHeaderPixel$ + $totalRowHeight$$6$$;
    this.$_signalTaskEnd$();
  };
  $DvtDataGrid$$.prototype.$handleCellsFetchSuccessForSort$ = function $$DvtDataGrid$$$$$handleCellsFetchSuccessForSort$$($newRowHeaderElements$$, $scroll$$1$$, $cellSet$$13_oldRowElements_returnVal$$14$$, $cellRange$$8_newRowElements$$) {
    var $oldRowHeaderElements_rowStart$$11$$, $rowCount$$11$$, $columnStart$$8$$, $duration$$18$$, $animate$$;
    this.$m_fetching$.cells = !1;
    $duration$$18$$ = $DvtDataGrid$$.$SORT_ANIMATION_DURATION$;
    this.$isFetchComplete$() && this.$hideStatusText$();
    $oldRowHeaderElements_rowStart$$11$$ = $cellRange$$8_newRowElements$$[0].start;
    $rowCount$$11$$ = $cellSet$$13_oldRowElements_returnVal$$14$$.getCount("row");
    $columnStart$$8$$ = $cellRange$$8_newRowElements$$[1].start;
    $cellSet$$13_oldRowElements_returnVal$$14$$.getCount("column");
    $cellRange$$8_newRowElements$$ = document.createDocumentFragment();
    $cellSet$$13_oldRowElements_returnVal$$14$$ = this.$_addRows$($cellRange$$8_newRowElements$$, !0, this.$m_startRowPixel$, $oldRowHeaderElements_rowStart$$11$$, $rowCount$$11$$, $columnStart$$8$$, !1, $cellSet$$13_oldRowElements_returnVal$$14$$);
    this.$m_endRow$ = this.$m_startRowHeader$ + $rowCount$$11$$ - 1;
    this.$m_endRowPixel$ = this.$m_startRowPixel$ + $cellSet$$13_oldRowElements_returnVal$$14$$.totalRowHeight;
    $cellSet$$13_oldRowElements_returnVal$$14$$ = this.$m_databody$.firstChild;
    $oldRowHeaderElements_rowStart$$11$$ = this.$m_rowHeader$.firstChild;
    !0 == $scroll$$1$$ && ($animate$$ = this.$_isHighWatermarkScrolling$(), this.$m_utils$.$isTouchDevice$() ? (this.$_disableTouchScrollAnimation$(), this.scrollTo(this.$m_currentScrollLeft$, this.$m_currentScrollTop$)) : (this.$m_silentScroll$ = !0, this.$m_scroller$.scrollTop = this.$m_currentScrollTop$, this.$_syncScroller$()));
    !$duration$$18$$ || 0 == $duration$$18$$ || !this.$m_utils$.$supportsTransitions$() || 1 === $rowCount$$11$$ || 1 < this.$m_rowHeaderLevelCount$ && null != this.$m_rowHeaderLevelCount$ || !1 === $animate$$ ? (this.$_signalTaskStart$(), this.$_handleSortEnd$($cellRange$$8_newRowElements$$, $newRowHeaderElements$$)) : this.$processSortAnimationToPosition$($duration$$18$$, $oldRowHeaderElements_rowStart$$11$$, $newRowHeaderElements$$, $cellSet$$13_oldRowElements_returnVal$$14$$, $cellRange$$8_newRowElements$$);
    this.$_signalTaskEnd$();
  };
  $DvtDataGrid$$.prototype.$_handleSortEnd$ = function $$DvtDataGrid$$$$$_handleSortEnd$$($newRowElements$$1$$, $newRowHeaderElements$$1$$) {
    var $databodyContent$$18_headerContent$$3$$;
    1 < $newRowHeaderElements$$1$$.childNodes.length && ($databodyContent$$18_headerContent$$3$$ = this.$m_rowHeader$.firstChild, this.$m_utils$.empty($databodyContent$$18_headerContent$$3$$), $databodyContent$$18_headerContent$$3$$.appendChild($newRowHeaderElements$$1$$));
    $databodyContent$$18_headerContent$$3$$ = this.$m_databody$.firstChild;
    this.$m_utils$.empty($databodyContent$$18_headerContent$$3$$);
    $databodyContent$$18_headerContent$$3$$.appendChild($newRowElements$$1$$);
    this.$_restoreActive$();
    this.$m_isSorting$ = !1;
    this.$_fireSortEvent$();
    this.$_doDelayedSort$();
    this.$_signalTaskEnd$();
  };
  $DvtDataGrid$$.prototype.$processSortAnimationToPosition$ = function $$DvtDataGrid$$$$$processSortAnimationToPosition$$($duration$$19$$, $oldRowHeaderElements$$1$$, $newRowHeaderElements$$2$$, $oldElementSet$$, $newElementSet$$) {
    var $self$$76$$, $rowKey$$13$$, $animationInformation$$, $oldTop$$, $newTop$$2_oldBottom$$, $rowsForAppend$$, $rowHeadersForAppend$$, $i$$184$$, $child$$3$$, $rowHeaderSupport$$2$$, $newBottom$$, $newElementSetClone$$, $newRowHeaderElementsClone$$, $viewportTop$$5$$, $viewportBottom$$6$$, $lastAnimationElement$$1$$;
    $self$$76$$ = this;
    this.$_signalTaskStart$();
    $rowsForAppend$$ = [];
    $rowHeadersForAppend$$ = [];
    $rowHeaderSupport$$2$$ = 1 < $newRowHeaderElements$$2$$.childNodes.length ? !0 : !1;
    $viewportTop$$5$$ = this.$m_currentScrollTop$;
    $viewportBottom$$6$$ = $viewportTop$$5$$ + this.$getElementHeight$(this.$m_databody$);
    $newElementSetClone$$ = $newElementSet$$.cloneNode(!0);
    $newRowHeaderElementsClone$$ = $newRowHeaderElements$$2$$ ? $newRowHeaderElements$$2$$.cloneNode(!0) : null;
    $animationInformation$$ = {};
    for ($i$$184$$ = 0;$i$$184$$ < $oldElementSet$$.childNodes.length;$i$$184$$++) {
      $child$$3$$ = $oldElementSet$$.childNodes[$i$$184$$], $rowKey$$13$$ = this.$_getKey$($child$$3$$), $oldTop$$ = this.$getElementDir$($child$$3$$, "top"), $newTop$$2_oldBottom$$ = $oldTop$$ + this.$getElementHeight$($child$$3$$), $newTop$$2_oldBottom$$ = $newTop$$2_oldBottom$$ < $viewportTop$$5$$ || $oldTop$$ > $viewportBottom$$6$$ ? $oldTop$$ : $viewportBottom$$6$$, $animationInformation$$[$rowKey$$13$$] = {$oldTop$:$oldTop$$, $newTop$:$newTop$$2_oldBottom$$};
    }
    for ($i$$184$$ = 0;$i$$184$$ < $newElementSet$$.childNodes.length;$i$$184$$++) {
      $child$$3$$ = $newElementSet$$.childNodes[$i$$184$$], $rowKey$$13$$ = this.$_getKey$($child$$3$$), $newTop$$2_oldBottom$$ = this.$getElementDir$($child$$3$$, "top"), this.$_setKey$($newElementSetClone$$.childNodes[$i$$184$$], $rowKey$$13$$), this.$_setKey$($newRowHeaderElementsClone$$.childNodes[$i$$184$$], $rowKey$$13$$), $animationInformation$$.hasOwnProperty($rowKey$$13$$) ? $animationInformation$$[$rowKey$$13$$].$newTop$ = $newTop$$2_oldBottom$$ : ($oldTop$$ = $viewportBottom$$6$$, $newBottom$$ = 
      $newTop$$2_oldBottom$$ + this.$getElementHeight$($child$$3$$), $animationInformation$$[$rowKey$$13$$] = {$oldTop$:$oldTop$$, $newTop$:$newTop$$2_oldBottom$$}, $newBottom$$ >= $viewportTop$$5$$ && $newTop$$2_oldBottom$$ < $viewportBottom$$6$$ && ($child$$3$$ = $newElementSetClone$$.childNodes[$i$$184$$], this.$setElementDir$($child$$3$$, $animationInformation$$[$rowKey$$13$$].$oldTop$, "top"), $rowsForAppend$$.push($child$$3$$), $rowHeaderSupport$$2$$ && ($child$$3$$ = $newRowHeaderElementsClone$$.childNodes[$i$$184$$], 
      this.$setElementDir$($child$$3$$, $animationInformation$$[$rowKey$$13$$].$oldTop$, "top"), $rowHeadersForAppend$$.push($child$$3$$))));
    }
    for ($i$$184$$ = 0;$i$$184$$ < $rowsForAppend$$.length;$i$$184$$++) {
      $oldElementSet$$.appendChild($rowsForAppend$$[$i$$184$$]), $rowHeaderSupport$$2$$ && $oldRowHeaderElements$$1$$.appendChild($rowHeadersForAppend$$[$i$$184$$]);
    }
    for ($i$$184$$ = $oldElementSet$$.childNodes.length - 1;0 <= $i$$184$$;$i$$184$$--) {
      if ($child$$3$$ = $oldElementSet$$.childNodes[$i$$184$$], $rowKey$$13$$ = this.$_getKey$($child$$3$$), 0 != $animationInformation$$[$rowKey$$13$$].$newTop$ - $animationInformation$$[$rowKey$$13$$].$oldTop$) {
        $lastAnimationElement$$1$$ = $child$$3$$;
        break;
      }
    }
    null != $lastAnimationElement$$1$$ ? ($lastAnimationElement$$1$$.addEventListener("transitionend", this.$_handleSortEnd$.bind(this, $newElementSet$$, $newRowHeaderElements$$2$$), !1), setTimeout(function() {
      var $animationInfo_deltaY$$5$$, $delay$$4$$, $i$$185$$;
      for ($i$$185$$ = 0;$i$$185$$ < $oldElementSet$$.childNodes.length;$i$$185$$++) {
        $delay$$4$$ = 0 * $i$$185$$ + "ms", $child$$3$$ = $oldElementSet$$.childNodes[$i$$185$$], $animationInfo_deltaY$$5$$ = $animationInformation$$[$self$$76$$.$_getKey$($child$$3$$)], $animationInfo_deltaY$$5$$ = $animationInfo_deltaY$$5$$.$newTop$ - $animationInfo_deltaY$$5$$.$oldTop$, 0 != $animationInfo_deltaY$$5$$ && ($self$$76$$.$addTransformMoveStyle$($child$$3$$, $duration$$19$$ / 2 + "ms", $delay$$4$$, "ease-in", 0, $animationInfo_deltaY$$5$$), $rowHeaderSupport$$2$$ && $self$$76$$.$addTransformMoveStyle$($oldRowHeaderElements$$1$$.childNodes[$i$$185$$], 
        $duration$$19$$ / 2 + "ms", $delay$$4$$, "ease-in", 0, $animationInfo_deltaY$$5$$));
      }
    }, 0)) : this.$_handleSortEnd$($newElementSet$$, $newRowHeaderElements$$2$$);
  };
  $DvtDataGrid$$.prototype.$_restoreActive$ = function $$DvtDataGrid$$$$$_restoreActive$$() {
    var $cellIndex_row$$45$$, $columnHeader$$7$$;
    null != this.$m_active$ && ("cell" == this.$m_active$.type ? ($cellIndex_row$$45$$ = this.$_findRowByKey$(this.$m_active$.keys.row), $columnHeader$$7$$ = this.$_findColumnHeaderByKey$(this.$m_active$.keys.column), null != $cellIndex_row$$45$$ && null != $columnHeader$$7$$ ? ($cellIndex_row$$45$$ = this.createIndex(this.$getRowIndex$($cellIndex_row$$45$$), this.$getHeaderCellIndex$($columnHeader$$7$$)), this.$scrollToIndex$($cellIndex_row$$45$$), this.$_isSelectionEnabled$() ? this.$selectAndFocus$($cellIndex_row$$45$$) : 
    this.$_setActiveByIndex$($cellIndex_row$$45$$)) : (this.$_setActive$(null, null, !0), this.$_isSelectionEnabled$() && this.$_clearSelection$())) : "row" == this.$m_active$.axis && ($cellIndex_row$$45$$ = this.$_findRowHeaderByKey$(this.$m_active$.key), null != $cellIndex_row$$45$$ ? this.$_setActive$($cellIndex_row$$45$$) : this.$_setActive$(null)));
  };
  $DvtDataGrid$$.prototype.$_getSortIcon$ = function $$DvtDataGrid$$$$$_getSortIcon$$($header$$29$$) {
    return $header$$29$$.lastChild.firstChild;
  };
  $DvtDataGrid$$.prototype.$_getSortContainer$ = function $$DvtDataGrid$$$$$_getSortContainer$$($header$$30$$) {
    return $header$$30$$.lastChild;
  };
  $DvtDataGrid$$.prototype.$_fireSortEvent$ = function $$DvtDataGrid$$$$$_fireSortEvent$$() {
    this.fireEvent("sort", {event:this.$m_sortInfo$.event, ui:{header:this.$m_sortInfo$.key, direction:this.$m_sortInfo$.direction}});
  };
  $DvtDataGrid$$.prototype.$_doDelayedSort$ = function $$DvtDataGrid$$$$$_doDelayedSort$$() {
    null != this.$m_delayedSort$ ? this.$_doHeaderSort$(this.$m_delayedSort$.event, this.$m_delayedSort$.header, this.$m_delayedSort$.direction) : this.$fillViewport$(this.$m_currentScrollLeft$, this.$m_currentScrollTop$);
  };
  $DvtDataGrid$$.$RESIZE_OFFSET$ = 5;
  $DvtDataGrid$$.$RESIZE_TOUCH_OFFSET$ = 8;
  $DvtDataGrid$$.prototype.$handleResize$ = function $$DvtDataGrid$$$$$handleResize$$($event$$181$$) {
    var $header$$31$$;
    !1 === this.$m_isResizing$ ? ($header$$31$$ = this.find($event$$181$$.target, "header"), null == $header$$31$$ || $header$$31$$ != this.$m_rowHeader$ && $header$$31$$ != this.$m_colHeader$ || (this.$m_cursor$ = this.$manageHeaderCursor$($event$$181$$), null != this.$m_resizingElement$ && ("default" == this.$m_cursor$ ? (this.$m_resizingElement$.style.cursor = "", null != this.$m_resizingElementSibling$ && (this.$m_resizingElementSibling$.style.cursor = "")) : (this.$m_resizingElement$.style.cursor = 
    this.$m_cursor$, null != this.$m_resizingElementSibling$ && (this.$m_resizingElementSibling$.style.cursor = this.$m_cursor$))))) : this.$handleResizeMouseMove$($event$$181$$);
  };
  $DvtDataGrid$$.prototype.$handleResizeMouseDown$ = function $$DvtDataGrid$$$$$handleResizeMouseDown$$($event$$182$$) {
    return "col-resize" === this.$m_cursor$ || "row-resize" === this.$m_cursor$ ? (this.$m_isResizing$ = !0, this.$m_utils$.$isTouchDevice$() ? (this.$m_lastMouseX$ = $event$$182$$.touches[0].pageX, this.$m_lastMouseY$ = $event$$182$$.touches[0].pageY) : (this.$m_lastMouseX$ = $event$$182$$.pageX, this.$m_lastMouseY$ = $event$$182$$.pageY), this.$m_overResizeBottom$ = this.$m_overResizeRight$ = this.$m_overResizeMinTop$ = this.$m_overResizeTop$ = this.$m_overResizeMinLeft$ = this.$m_overResizeLeft$ = 
    0, this.$m_orginalResizeDimensions$ = {width:this.$getElementWidth$(this.$m_resizingElement$), height:this.$getElementHeight$(this.$m_resizingElement$)}, !0) : !1;
  };
  $DvtDataGrid$$.prototype.$handleResizeMouseUp$ = function $$DvtDataGrid$$$$$handleResizeMouseUp$$($details$$6_event$$183$$) {
    var $newHeight$$2_size$$23$$, $newWidth$$2$$;
    if (!0 === this.$m_isResizing$) {
      $newWidth$$2$$ = this.$getElementWidth$(this.$m_resizingElement$);
      $newHeight$$2_size$$23$$ = this.$getElementHeight$(this.$m_resizingElement$);
      if ($newWidth$$2$$ != this.$m_orginalResizeDimensions$.width || $newHeight$$2_size$$23$$ != this.$m_orginalResizeDimensions$.height) {
        $newHeight$$2_size$$23$$ = "col-resize" === this.$m_cursor$ ? this.$m_resizingElement$.style.width : this.$m_resizingElement$.style.height, $details$$6_event$$183$$ = {event:$details$$6_event$$183$$, ui:{header:this.$_getKey$(this.$m_resizingElement$), oldDimensions:{width:this.$m_orginalResizeDimensions$.width, height:this.$m_orginalResizeDimensions$.height}, newDimensions:{width:this.$getElementWidth$(this.$m_resizingElement$), height:this.$getElementHeight$(this.$m_resizingElement$)}, 
        size:$newHeight$$2_size$$23$$}}, this.fireEvent("resize", $details$$6_event$$183$$);
      }
      this.$m_isResizing$ = !1;
      this.$m_cursor$ = "default";
      this.$m_resizingElement$.style.cursor = "";
      null != this.$m_resizingElementSibling$ && (this.$m_resizingElementSibling$.style.cursor = "");
      this.$m_orginalResizeDimensions$ = this.$m_resizingElementSibling$ = this.$m_resizingElement$ = null;
    }
  };
  $DvtDataGrid$$.prototype.$_isDOMElementResizable$ = function $$DvtDataGrid$$$$$_isDOMElementResizable$$($element$$93$$) {
    return null == $element$$93$$ ? !1 : "true" === $element$$93$$.getAttribute(this.$m_resources$.$getMappedAttribute$("resizable"));
  };
  $DvtDataGrid$$.prototype.$manageHeaderCursor$ = function $$DvtDataGrid$$$$$manageHeaderCursor$$($event$$184_rtl$$3$$) {
    var $elem$$46$$ = $event$$184_rtl$$3$$.target, $resizeHeaderMode$$, $bottomEdgeCheck_edges$$, $cursorX_rightEdgeCheck$$, $cursorY$$, $offsetPixel$$, $widthResizable$$, $heightResizable$$, $siblingResizable$$, $index$$132_leftEdgeCheck$$, $level$$25_topEdgeCheck$$, $sibling$$1$$, $parent$$10$$;
    ($elem$$46$$ = this.find($event$$184_rtl$$3$$.target, "colheadercell")) ? $resizeHeaderMode$$ = "column" : ($elem$$46$$ = this.find($event$$184_rtl$$3$$.target, "rowheadercell"), $resizeHeaderMode$$ = "row");
    if (!$elem$$46$$) {
      return "default";
    }
    $index$$132_leftEdgeCheck$$ = this.$getHeaderCellIndex$($elem$$46$$);
    $level$$25_topEdgeCheck$$ = this.$getHeaderCellLevel$($elem$$46$$);
    "column" === $resizeHeaderMode$$ ? ($heightResizable$$ = "enable" === this.$m_options$.$isResizable$($resizeHeaderMode$$).height ? !0 : !1, $widthResizable$$ = this.$_isDOMElementResizable$($elem$$46$$), $sibling$$1$$ = this.$_getColumnHeaderByIndex$($index$$132_leftEdgeCheck$$ - 1, $level$$25_topEdgeCheck$$), $siblingResizable$$ = this.$_isDOMElementResizable$($sibling$$1$$), $parent$$10$$ = this.$_getColumnHeaderByIndex$($index$$132_leftEdgeCheck$$, $level$$25_topEdgeCheck$$ - 1)) : "row" === 
    $resizeHeaderMode$$ && ($widthResizable$$ = "enable" === this.$m_options$.$isResizable$($resizeHeaderMode$$).width ? !0 : !1, $heightResizable$$ = this.$_isDOMElementResizable$($elem$$46$$), $sibling$$1$$ = this.$_getRowHeaderByIndex$($index$$132_leftEdgeCheck$$ - 1, $level$$25_topEdgeCheck$$), $siblingResizable$$ = this.$_isDOMElementResizable$($sibling$$1$$), $parent$$10$$ = this.$_getRowHeaderByIndex$($index$$132_leftEdgeCheck$$, $level$$25_topEdgeCheck$$ - 1));
    this.$m_utils$.$isTouchDevice$() ? ($cursorX_rightEdgeCheck$$ = $event$$184_rtl$$3$$.touches[0].pageX, $cursorY$$ = $event$$184_rtl$$3$$.touches[0].pageY, $offsetPixel$$ = $DvtDataGrid$$.$RESIZE_TOUCH_OFFSET$) : ($cursorX_rightEdgeCheck$$ = $event$$184_rtl$$3$$.pageX, $cursorY$$ = $event$$184_rtl$$3$$.pageY, $offsetPixel$$ = $DvtDataGrid$$.$RESIZE_OFFSET$);
    $bottomEdgeCheck_edges$$ = this.$getHeaderEdgePixels$($elem$$46$$);
    $event$$184_rtl$$3$$ = this.$m_resources$.$isRTLMode$();
    $index$$132_leftEdgeCheck$$ = $cursorX_rightEdgeCheck$$ < $bottomEdgeCheck_edges$$[0] + $offsetPixel$$;
    $level$$25_topEdgeCheck$$ = $cursorY$$ < $bottomEdgeCheck_edges$$[1] + $offsetPixel$$;
    $cursorX_rightEdgeCheck$$ = $cursorX_rightEdgeCheck$$ > $bottomEdgeCheck_edges$$[2] - $offsetPixel$$;
    $bottomEdgeCheck_edges$$ = $cursorY$$ > $bottomEdgeCheck_edges$$[3] - $offsetPixel$$;
    if ("column" === $resizeHeaderMode$$) {
      if ($widthResizable$$ && ($event$$184_rtl$$3$$ ? $index$$132_leftEdgeCheck$$ : $cursorX_rightEdgeCheck$$)) {
        return this.$m_resizingElement$ = $elem$$46$$, "col-resize";
      }
      if ($siblingResizable$$ && ($event$$184_rtl$$3$$ ? $cursorX_rightEdgeCheck$$ : $index$$132_leftEdgeCheck$$)) {
        if (this.$m_resizingElement$ = $sibling$$1$$, this.$m_resizingElementSibling$ = $elem$$46$$, null !== this.$m_resizingElement$) {
          return "col-resize";
        }
      } else {
        if ($heightResizable$$) {
          if ($bottomEdgeCheck_edges$$) {
            return this.$m_resizingElement$ = $elem$$46$$, "row-resize";
          }
          if ($level$$25_topEdgeCheck$$) {
            return this.$m_resizingElement$ = $parent$$10$$, this.$m_resizingElementSibling$ = $elem$$46$$, "row-resize";
          }
        }
      }
    } else {
      if ("row" === $resizeHeaderMode$$) {
        if ($heightResizable$$ && $bottomEdgeCheck_edges$$) {
          return this.$m_resizingElement$ = $elem$$46$$, "row-resize";
        }
        if ($siblingResizable$$ && $level$$25_topEdgeCheck$$ && (this.$m_resizingElement$ = $sibling$$1$$, this.$m_resizingElementSibling$ = $elem$$46$$, null !== this.$m_resizingElement$)) {
          return "row-resize";
        }
        if ($widthResizable$$) {
          if ($event$$184_rtl$$3$$ ? $index$$132_leftEdgeCheck$$ : $cursorX_rightEdgeCheck$$) {
            return this.$m_resizingElement$ = $elem$$46$$, "col-resize";
          }
          if ($event$$184_rtl$$3$$ ? $cursorX_rightEdgeCheck$$ : $index$$132_leftEdgeCheck$$) {
            if (this.$m_resizingElement$ = $parent$$10$$, this.$m_resizingElementSibling$ = $elem$$46$$, null !== this.$m_resizingElement$) {
              return "col-resize";
            }
          }
        }
      }
    }
    return "default";
  };
  $DvtDataGrid$$.prototype.$handleResizeMouseMove$ = function $$DvtDataGrid$$$$$handleResizeMouseMove$$($event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$) {
    var $newElementHeight_newElementWidth$$;
    this.$m_currentMouseX$ = $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$.pageX;
    this.$m_currentMouseY$ = $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$.pageY;
    this.$m_utils$.$isTouchDevice$() ? (this.$m_currentMouseX$ = $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$.touches[0].pageX, this.$m_currentMouseY$ = $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$.touches[0].pageY) : (this.$m_currentMouseX$ = $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$.pageX, this.$m_currentMouseY$ = $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$.pageY);
    $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$ = this.$m_utils$.$containsCSSClassName$(this.$m_resizingElement$, this.$getMappedStyle$("colheadercell")) ? "column" : "row";
    "col-resize" === this.$m_cursor$ ? "column" === $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$ ? ($event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$ = this.$calculateColumnHeaderWidth$(this.$m_resizingElement$), $newElementHeight_newElementWidth$$ = this.$getNewElementWidth$("column", $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$), this.$resizeColWidth$($event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$, $newElementHeight_newElementWidth$$)) : 
    "row" === $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$ && ($event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$ = this.$getElementWidth$(this.$m_resizingElement$), $newElementHeight_newElementWidth$$ = this.$getNewElementWidth$("row", $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$), this.$resizeRowWidth$($newElementHeight_newElementWidth$$ - $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$)) : "row-resize" === this.$m_cursor$ && 
    ("row" === $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$ ? ($event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$ = this.$calculateRowHeaderHeight$(this.$m_resizingElement$), $newElementHeight_newElementWidth$$ = this.$getNewElementHeight$("row", $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$), this.$resizeRowHeight$($event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$, $newElementHeight_newElementWidth$$)) : "column" === $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$ && 
    ($event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$ = this.$getElementHeight$(this.$m_resizingElement$), $newElementHeight_newElementWidth$$ = this.$getNewElementHeight$("column", $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$), this.$resizeColHeight$($newElementHeight_newElementWidth$$ - $event$$185_oldElementHeight_oldElementWidth_resizeHeaderMode$$1$$)));
    this.$buildCorners$();
    this.$m_utils$.$isTouchDevice$() && this.$_moveTouchSelectionAffordance$();
    this.$m_lastMouseX$ = this.$m_currentMouseX$;
    this.$m_lastMouseY$ = this.$m_currentMouseY$;
  };
  $DvtDataGrid$$.prototype.$resizeColWidth$ = function $$DvtDataGrid$$$$$resizeColWidth$$($oldElementWidth$$1$$, $newElementWidth$$1$$) {
    var $widthChange$$, $newScrollerWidth_oldScrollerWidth$$;
    $widthChange$$ = $newElementWidth$$1$$ - $oldElementWidth$$1$$;
    0 != $widthChange$$ && ($newScrollerWidth_oldScrollerWidth$$ = this.$getElementWidth$(this.$m_scroller$.firstChild), $newScrollerWidth_oldScrollerWidth$$ += $widthChange$$, this.$_databodyEmpty$() || (this.$setElementWidth$(this.$m_scroller$.firstChild, $newScrollerWidth_oldScrollerWidth$$), this.$setElementWidth$(this.$m_databody$.firstChild, $newScrollerWidth_oldScrollerWidth$$)), this.$resizeColumnWidthAndShift$($widthChange$$), this.$m_endColPixel$ += $widthChange$$, this.$m_endColHeaderPixel$ += 
    $widthChange$$, this.$m_avgColWidth$ = $newScrollerWidth_oldScrollerWidth$$ / this.$m_dataSource$.getCount("column"), this.$manageResizeScrollbars$());
  };
  $DvtDataGrid$$.prototype.$resizeRowHeight$ = function $$DvtDataGrid$$$$$resizeRowHeight$$($oldElementHeight$$1$$, $newElementHeight$$1$$) {
    var $heightChange$$, $newScrollerHeight_oldScrollerHeight$$;
    $heightChange$$ = $newElementHeight$$1$$ - $oldElementHeight$$1$$;
    0 != $heightChange$$ && ($newScrollerHeight_oldScrollerHeight$$ = this.$getElementHeight$(this.$m_scroller$.firstChild), $newScrollerHeight_oldScrollerHeight$$ += $heightChange$$, this.$_databodyEmpty$() || (this.$setElementHeight$(this.$m_scroller$.firstChild, $newScrollerHeight_oldScrollerHeight$$), this.$setElementHeight$(this.$m_databody$.firstChild, $newScrollerHeight_oldScrollerHeight$$)), this.$resizeRowHeightAndShift$($heightChange$$), this.$m_endRowPixel$ += $heightChange$$, this.$m_endRowHeaderPixel$ += 
    $heightChange$$, this.$m_avgRowHeight$ = $newScrollerHeight_oldScrollerHeight$$ / this.$m_dataSource$.getCount("row"), this.$manageResizeScrollbars$());
  };
  $DvtDataGrid$$.prototype.$resizeColHeight$ = function $$DvtDataGrid$$$$$resizeColHeight$$($heightChange$$1$$) {
    if (0 != $heightChange$$1$$) {
      var $level$$26$$ = this.$getHeaderCellLevel$(this.$m_resizingElement$) + this.$getHeaderCellDepth$(this.$m_resizingElement$) - 1;
      this.$m_columnHeaderLevelHeights$[$level$$26$$] += $heightChange$$1$$;
      this.$resizeColumnHeightsAndShift$($heightChange$$1$$, $level$$26$$);
      this.$m_colHeaderHeight$ += $heightChange$$1$$;
      this.$setElementHeight$(this.$m_colHeader$, this.$m_colHeaderHeight$);
      this.$manageResizeScrollbars$();
    }
  };
  $DvtDataGrid$$.prototype.$resizeRowWidth$ = function $$DvtDataGrid$$$$$resizeRowWidth$$($widthChange$$1$$) {
    if (0 != $widthChange$$1$$) {
      var $level$$27$$ = this.$getHeaderCellLevel$(this.$m_resizingElement$) + this.$getHeaderCellDepth$(this.$m_resizingElement$) - 1;
      this.$m_rowHeaderLevelWidths$[$level$$27$$] += $widthChange$$1$$;
      this.$resizeRowWidthsAndShift$($widthChange$$1$$, $level$$27$$);
      this.$m_rowHeaderWidth$ += $widthChange$$1$$;
      this.$setElementWidth$(this.$m_rowHeader$, this.$m_rowHeaderWidth$);
      this.$manageResizeScrollbars$();
    }
  };
  $DvtDataGrid$$.prototype.$getNewElementWidth$ = function $$DvtDataGrid$$$$$getNewElementWidth$$($axis$$25$$, $oldElementWidth$$2$$) {
    var $minWidth$$, $deltaWidth$$, $newElementWidth$$3$$, $halfGridWidth$$;
    $minWidth$$ = this.$_getMinValue$("width", $axis$$25$$);
    this.$getElementWidth$(this.$m_databody$);
    $deltaWidth$$ = this.$m_resources$.$isRTLMode$() ? this.$m_lastMouseX$ - this.$m_currentMouseX$ : this.$m_currentMouseX$ - this.$m_lastMouseX$;
    $newElementWidth$$3$$ = $oldElementWidth$$2$$ + $deltaWidth$$ + this.$m_overResizeLeft$ + this.$m_overResizeMinLeft$ + this.$m_overResizeRight$;
    this.$getElementWidth$(this.$m_scroller$.firstChild);
    $halfGridWidth$$ = Math.round(this.getWidth() / 2);
    $newElementWidth$$3$$ < $minWidth$$ ? (this.$m_overResizeMinLeft$ += $deltaWidth$$ - $minWidth$$ + $oldElementWidth$$2$$, $newElementWidth$$3$$ = $minWidth$$) : this.$m_overResizeLeft$ = this.$m_overResizeMinLeft$ = 0;
    "row" === $axis$$25$$ && ($newElementWidth$$3$$ > $halfGridWidth$$ ? (this.$m_overResizeRight$ += $deltaWidth$$ - $halfGridWidth$$ + $oldElementWidth$$2$$, $newElementWidth$$3$$ = $halfGridWidth$$) : this.$m_overResizeRight$ = 0);
    return $newElementWidth$$3$$;
  };
  $DvtDataGrid$$.prototype.$getNewElementHeight$ = function $$DvtDataGrid$$$$$getNewElementHeight$$($axis$$26$$, $oldElementHeight$$2$$) {
    var $minHeight$$, $deltaHeight$$, $newElementHeight$$3$$, $halfGridHeight$$;
    $minHeight$$ = this.$_getMinValue$("height", $axis$$26$$);
    this.$getElementHeight$(this.$m_databody$);
    $deltaHeight$$ = this.$m_currentMouseY$ - this.$m_lastMouseY$;
    $newElementHeight$$3$$ = $oldElementHeight$$2$$ + $deltaHeight$$ + this.$m_overResizeTop$ + this.$m_overResizeMinTop$ + this.$m_overResizeBottom$;
    this.$getElementHeight$(this.$m_scroller$.firstChild);
    $halfGridHeight$$ = Math.round(this.getHeight() / 2);
    $newElementHeight$$3$$ < $minHeight$$ ? (this.$m_overResizeMinTop$ += $deltaHeight$$ - $minHeight$$ + $oldElementHeight$$2$$, $newElementHeight$$3$$ = $minHeight$$) : this.$m_overResizeTop$ = this.$m_overResizeMinTop$ = 0;
    "column" === $axis$$26$$ && ($newElementHeight$$3$$ > $halfGridHeight$$ ? (this.$m_overResizeBottom$ += $deltaHeight$$ - $halfGridHeight$$ + $oldElementHeight$$2$$, $newElementHeight$$3$$ = $halfGridHeight$$) : this.$m_overResizeBottom$ = 0);
    return $newElementHeight$$3$$;
  };
  $DvtDataGrid$$.prototype.$_getMinValue$ = function $$DvtDataGrid$$$$$_getMinValue$$($dimension$$, $axis$$27$$) {
    var $index$$133_inner$$1$$, $level$$28$$, $elem$$47$$, $minValue$$, $extent$$1$$, $currentDimensionValue$$, $innerDimensionValue$$, $depth$$6$$;
    $elem$$47$$ = this.$m_resizingElement$;
    $level$$28$$ = this.$getHeaderCellLevel$($elem$$47$$);
    $depth$$6$$ = this.$getHeaderCellDepth$($elem$$47$$);
    $minValue$$ = this.$m_utils$.$isTouchDevice$() ? 2 * $DvtDataGrid$$.$RESIZE_TOUCH_OFFSET$ : 2 * $DvtDataGrid$$.$RESIZE_OFFSET$;
    if ("column" === $axis$$27$$ && (1 === this.$m_columnHeaderLevelCount$ || "height" === $dimension$$ && 1 === $depth$$6$$) || "row" === $axis$$27$$ && (1 === this.$m_rowHeaderLevelCount$ || "width" === $dimension$$ && 1 === $depth$$6$$)) {
      return $minValue$$;
    }
    $index$$133_inner$$1$$ = this.$getHeaderCellIndex$($elem$$47$$);
    $extent$$1$$ = this.$_getAttribute$(this.$m_resizingElement$.parentNode, "extent");
    $currentDimensionValue$$ = this.$getElementDir$($elem$$47$$, $dimension$$);
    "column" === $axis$$27$$ ? "width" === $dimension$$ ? ($index$$133_inner$$1$$ = this.$_getColumnHeaderByIndex$($index$$133_inner$$1$$ + $extent$$1$$ - 1, this.$m_columnHeaderLevelCount$ - 1), $innerDimensionValue$$ = this.$getElementDir$($index$$133_inner$$1$$, $dimension$$)) : $innerDimensionValue$$ = this.$_getColumnHeaderLevelHeight$($level$$28$$ + $depth$$6$$ - 1, $elem$$47$$) : "row" === $axis$$27$$ && ("height" === $dimension$$ ? ($index$$133_inner$$1$$ = this.$_getRowHeaderByIndex$($index$$133_inner$$1$$ + 
    $extent$$1$$ - 1, this.$m_rowHeaderLevelCount$ - 1), $innerDimensionValue$$ = this.$getElementDir$($index$$133_inner$$1$$, $dimension$$)) : $innerDimensionValue$$ = this.$_getRowHeaderLevelWidth$($level$$28$$ + $depth$$6$$ - 1, $elem$$47$$));
    return $currentDimensionValue$$ - ($innerDimensionValue$$ - $minValue$$);
  };
  $DvtDataGrid$$.prototype.$manageResizeScrollbars$ = function $$DvtDataGrid$$$$$manageResizeScrollbars$$() {
    var $databodyContentWidth$$1_width$$26$$, $height$$31_scrollerHeight$$3$$, $colHeader$$7$$, $rowHeader$$21$$, $scroller$$10$$, $databody$$14$$, $colHeaderHeight$$4$$, $rowHeaderWidth$$3$$, $databodyWidth$$2$$, $databodyContentHeight$$2$$, $databodyHeight$$2$$, $isDatabodyHorizontalScrollbarRequired$$1$$, $isDatabodyVerticalScrollbarRequired$$1$$, $scrollbarSize$$2$$, $dir$$16$$, $scrollerWidth$$3$$, $deltaX$$3$$ = 0, $deltaY$$6$$ = 0;
    $databodyContentWidth$$1_width$$26$$ = this.getWidth();
    $height$$31_scrollerHeight$$3$$ = this.getHeight();
    $colHeader$$7$$ = this.$m_colHeader$;
    $rowHeader$$21$$ = this.$m_rowHeader$;
    $scroller$$10$$ = this.$m_scroller$;
    $databody$$14$$ = this.$m_databody$;
    $colHeaderHeight$$4$$ = this.$getColumnHeaderHeight$();
    $rowHeaderWidth$$3$$ = this.$getRowHeaderWidth$();
    $height$$31_scrollerHeight$$3$$ -= $colHeaderHeight$$4$$;
    $scrollerWidth$$3$$ = $databodyContentWidth$$1_width$$26$$ - $rowHeaderWidth$$3$$;
    $dir$$16$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left";
    if (!this.$_databodyEmpty$()) {
      $databodyContentWidth$$1_width$$26$$ = this.$getElementWidth$($databody$$14$$.firstChild);
      $databodyContentHeight$$2$$ = this.$getElementHeight$($databody$$14$$.firstChild);
      $databodyWidth$$2$$ = Math.min($databodyContentWidth$$1_width$$26$$, $scrollerWidth$$3$$);
      $databodyHeight$$2$$ = Math.min($databodyContentHeight$$2$$, $height$$31_scrollerHeight$$3$$);
      $scrollbarSize$$2$$ = this.$m_utils$.$getScrollbarSize$();
      ($isDatabodyHorizontalScrollbarRequired$$1$$ = this.$isDatabodyHorizontalScrollbarRequired$($scrollerWidth$$3$$)) ? $isDatabodyVerticalScrollbarRequired$$1$$ = this.$isDatabodyVerticalScrollbarRequired$($height$$31_scrollerHeight$$3$$ - $scrollbarSize$$2$$) : ($isDatabodyVerticalScrollbarRequired$$1$$ = this.$isDatabodyVerticalScrollbarRequired$($height$$31_scrollerHeight$$3$$)) && ($isDatabodyHorizontalScrollbarRequired$$1$$ = this.$isDatabodyHorizontalScrollbarRequired$($scrollerWidth$$3$$ - 
      $scrollbarSize$$2$$));
      !$isDatabodyVerticalScrollbarRequired$$1$$ && !$isDatabodyHorizontalScrollbarRequired$$1$$ && this.$m_hasHorizontalScroller$ && this.$m_hasVerticalScroller$ && ($scroller$$10$$.style.overflow = "visible");
      if ($isDatabodyVerticalScrollbarRequired$$1$$ && $isDatabodyHorizontalScrollbarRequired$$1$$ && !this.$m_hasHorizontalScroller$ && !this.$m_hasVerticalScroller$ || $isDatabodyVerticalScrollbarRequired$$1$$ && !this.$m_hasVerticalScroller$ || $isDatabodyHorizontalScrollbarRequired$$1$$ && !this.$m_hasHorizontalScroller$) {
        $scroller$$10$$.style.overflow = "auto";
      }
      this.$m_hasHorizontalScroller$ = $isDatabodyHorizontalScrollbarRequired$$1$$;
      this.$m_hasVerticalScroller$ = $isDatabodyVerticalScrollbarRequired$$1$$;
      $isDatabodyHorizontalScrollbarRequired$$1$$ && $height$$31_scrollerHeight$$3$$ - $scrollbarSize$$2$$ < $databodyHeight$$2$$ && ($databodyHeight$$2$$ = $height$$31_scrollerHeight$$3$$ - $scrollbarSize$$2$$);
      $isDatabodyVerticalScrollbarRequired$$1$$ && $scrollerWidth$$3$$ - $scrollbarSize$$2$$ < $databodyWidth$$2$$ && ($databodyWidth$$2$$ = $scrollerWidth$$3$$ - $scrollbarSize$$2$$);
      this.$setElementHeight$($rowHeader$$21$$, $databodyHeight$$2$$);
      this.$setElementWidth$($colHeader$$7$$, $databodyWidth$$2$$);
      this.$setElementWidth$($databody$$14$$, $databodyWidth$$2$$);
      this.$setElementHeight$($databody$$14$$, $databodyHeight$$2$$);
      this.$setElementWidth$($scroller$$10$$, $scrollerWidth$$3$$);
      this.$setElementHeight$($scroller$$10$$, $height$$31_scrollerHeight$$3$$);
      this.$m_scrollWidth$ = $databodyContentWidth$$1_width$$26$$ - $databodyWidth$$2$$;
      this.$m_scrollHeight$ = $databodyContentHeight$$2$$ - $databodyHeight$$2$$;
    }
    null != this.$m_empty$ && (this.$setElementDir$(this.$m_empty$, $colHeaderHeight$$4$$, "top"), this.$setElementDir$(this.$m_empty$, $rowHeaderWidth$$3$$, $dir$$16$$));
    this.$setElementDir$($rowHeader$$21$$, $colHeaderHeight$$4$$, "top");
    this.$setElementDir$($colHeader$$7$$, $rowHeaderWidth$$3$$, $dir$$16$$);
    this.$setElementDir$($databody$$14$$, $colHeaderHeight$$4$$, "top");
    this.$setElementDir$($databody$$14$$, $rowHeaderWidth$$3$$, $dir$$16$$);
    this.$setElementDir$($scroller$$10$$, $colHeaderHeight$$4$$, "top");
    this.$setElementDir$($scroller$$10$$, $rowHeaderWidth$$3$$, $dir$$16$$);
    this.$buildCorners$();
    this.$m_utils$.$isTouchDevice$() && (this.$m_currentScrollLeft$ > this.$m_scrollWidth$ && ($deltaX$$3$$ = this.$m_scrollWidth$ - this.$m_currentScrollLeft$), this.$m_currentScrollTop$ > this.$m_scrollHeight$ && ($deltaY$$6$$ = this.$m_scrollHeight$ - this.$m_currentScrollTop$), 0 != $deltaX$$3$$ || 0 != $deltaY$$6$$) && (this.$_disableTouchScrollAnimation$(), this.$scrollDelta$($deltaX$$3$$, $deltaY$$6$$));
  };
  $DvtDataGrid$$.prototype.$resizeColumnWidthAndShift$ = function $$DvtDataGrid$$$$$resizeColumnWidthAndShift$$($widthChange$$2$$) {
    var $dir$$17$$, $databodyRows$$, $i$$186$$, $newStart$$2$$, $j$$30$$, $index$$134$$, $cells$$1$$, $cell$$22$$, $newWidth$$3$$;
    $dir$$17$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left";
    this.$m_databody$.style.display = "none";
    this.$m_colHeader$.style.display = "none";
    $index$$134$$ = this.$getHeaderCellIndex$(this.$m_resizingElement$);
    1 < this.$m_columnHeaderLevelCount$ && this.$m_resizingElement$ === this.$m_resizingElement$.parentNode.firstChild && null != this.$m_resizingElement$.nextSibling && ($index$$134$$ += this.$_getAttribute$(this.$m_resizingElement$.parentNode, "extent") - 1);
    this.$_shiftHeadersAlongAxisInContainer$(this.$m_colHeader$.firstChild, $index$$134$$, $widthChange$$2$$, $dir$$17$$, this.$getMappedStyle$("colheadercell"), "column");
    if (null != this.$m_databody$.firstChild) {
      for ($databodyRows$$ = this.$m_databody$.firstChild.childNodes, $i$$186$$ = 0;$i$$186$$ < $databodyRows$$.length;$i$$186$$++) {
        for ($cells$$1$$ = $databodyRows$$[$i$$186$$].childNodes, $cell$$22$$ = $cells$$1$$[$index$$134$$ - this.$m_startCol$], null == $newWidth$$3$$ && ($newWidth$$3$$ = this.$getElementWidth$($cell$$22$$) + $widthChange$$2$$), this.$setElementWidth$($cell$$22$$, $newWidth$$3$$), $j$$30$$ = $index$$134$$ - this.$m_startCol$ + 1;$j$$30$$ < this.$m_endCol$ - this.$m_startCol$ + 1;$j$$30$$ += 1) {
          $cell$$22$$ = $cells$$1$$[$j$$30$$], $newStart$$2$$ = this.$getElementDir$($cell$$22$$, $dir$$17$$) + $widthChange$$2$$, this.$setElementDir$($cell$$22$$, $newStart$$2$$, $dir$$17$$);
        }
      }
    }
    this.$m_databody$.style.display = "";
    this.$m_colHeader$.style.display = "";
  };
  $DvtDataGrid$$.prototype.$resizeRowHeightAndShift$ = function $$DvtDataGrid$$$$$resizeRowHeightAndShift$$($heightChange$$2$$) {
    var $databodyRows$$1$$, $i$$187_index$$135$$, $newHeight$$3_newStart$$3$$, $row$$46$$;
    this.$m_databody$.style.display = "none";
    this.$m_rowHeader$.style.display = "none";
    $i$$187_index$$135$$ = this.$getHeaderCellIndex$(this.$m_resizingElement$);
    1 < this.$m_rowHeaderLevelCount$ && this.$m_resizingElement$ === this.$m_resizingElement$.parentNode.firstChild && null != this.$m_resizingElement$.nextSibling && ($i$$187_index$$135$$ += this.$_getAttribute$(this.$m_resizingElement$.parentNode, "extent") - 1);
    this.$_shiftHeadersAlongAxisInContainer$(this.$m_rowHeader$.firstChild, $i$$187_index$$135$$, $heightChange$$2$$, "top", this.$getMappedStyle$("rowheadercell"), "row");
    if (null != this.$m_databody$.firstChild) {
      for ($databodyRows$$1$$ = this.$m_databody$.firstChild.childNodes, $row$$46$$ = $databodyRows$$1$$[$i$$187_index$$135$$ - this.$m_startRow$], $newHeight$$3_newStart$$3$$ = this.$getElementHeight$($row$$46$$) + $heightChange$$2$$, this.$setElementHeight$($row$$46$$, $newHeight$$3_newStart$$3$$), $i$$187_index$$135$$ = $i$$187_index$$135$$ - this.$m_startRow$ + 1;$i$$187_index$$135$$ < $databodyRows$$1$$.length;$i$$187_index$$135$$++) {
        $row$$46$$ = $databodyRows$$1$$[$i$$187_index$$135$$], $newHeight$$3_newStart$$3$$ = this.$getElementDir$($row$$46$$, "top") + $heightChange$$2$$, this.$setElementDir$($row$$46$$, $newHeight$$3_newStart$$3$$, "top");
      }
    }
    this.$m_databody$.style.display = "";
    this.$m_rowHeader$.style.display = "";
  };
  $DvtDataGrid$$.prototype.$_shiftHeadersAlongAxisInContainer$ = function $$DvtDataGrid$$$$$_shiftHeadersAlongAxisInContainer$$($element$$94_headersContainer$$, $index$$136$$, $dimensionChange$$, $dir$$18$$, $className$$17$$, $axis$$28$$) {
    var $header$$32_headers$$5$$, $isHeader$$1_newStart$$4$$, $groupingContainer$$1_i$$188_newVal$$, $headerStart$$;
    $element$$94_headersContainer$$ = $element$$94_headersContainer$$.lastChild;
    ($isHeader$$1_newStart$$4$$ = this.$m_utils$.$containsCSSClassName$($element$$94_headersContainer$$, $className$$17$$)) ? ($groupingContainer$$1_i$$188_newVal$$ = $element$$94_headersContainer$$.parentNode, $header$$32_headers$$5$$ = $element$$94_headersContainer$$, $headerStart$$ = this.$getHeaderCellIndex$($header$$32_headers$$5$$)) : ($groupingContainer$$1_i$$188_newVal$$ = $element$$94_headersContainer$$, $header$$32_headers$$5$$ = $element$$94_headersContainer$$.firstChild, $headerStart$$ = 
    this.$_getAttribute$($groupingContainer$$1_i$$188_newVal$$, "start"));
    for (;$index$$136$$ < $headerStart$$;) {
      if ($isHeader$$1_newStart$$4$$) {
        $isHeader$$1_newStart$$4$$ = this.$getElementDir$($header$$32_headers$$5$$, $dir$$18$$) + $dimensionChange$$, this.$setElementDir$($header$$32_headers$$5$$, $isHeader$$1_newStart$$4$$, $dir$$18$$), $element$$94_headersContainer$$ = $element$$94_headersContainer$$.previousSibling, $isHeader$$1_newStart$$4$$ = this.$m_utils$.$containsCSSClassName$($element$$94_headersContainer$$, $className$$17$$), $groupingContainer$$1_i$$188_newVal$$ = $element$$94_headersContainer$$.parentNode, $header$$32_headers$$5$$ = 
        $element$$94_headersContainer$$, $headerStart$$ = this.$getHeaderCellIndex$($header$$32_headers$$5$$);
      } else {
        $header$$32_headers$$5$$ = $groupingContainer$$1_i$$188_newVal$$.getElementsByClassName($className$$17$$);
        for ($groupingContainer$$1_i$$188_newVal$$ = 0;$groupingContainer$$1_i$$188_newVal$$ < $header$$32_headers$$5$$.length;$groupingContainer$$1_i$$188_newVal$$++) {
          $isHeader$$1_newStart$$4$$ = this.$getElementDir$($header$$32_headers$$5$$[$groupingContainer$$1_i$$188_newVal$$], $dir$$18$$) + $dimensionChange$$, this.$setElementDir$($header$$32_headers$$5$$[$groupingContainer$$1_i$$188_newVal$$], $isHeader$$1_newStart$$4$$, $dir$$18$$);
        }
        $element$$94_headersContainer$$ = $element$$94_headersContainer$$.previousSibling;
        $isHeader$$1_newStart$$4$$ = this.$m_utils$.$containsCSSClassName$($element$$94_headersContainer$$, $className$$17$$);
        $groupingContainer$$1_i$$188_newVal$$ = $element$$94_headersContainer$$;
        $header$$32_headers$$5$$ = $element$$94_headersContainer$$.firstChild;
        $headerStart$$ = this.$_getAttribute$($groupingContainer$$1_i$$188_newVal$$, "start");
      }
    }
    "column" == $axis$$28$$ ? ($groupingContainer$$1_i$$188_newVal$$ = this.$getElementWidth$($header$$32_headers$$5$$) + $dimensionChange$$, this.$setElementWidth$($header$$32_headers$$5$$, $groupingContainer$$1_i$$188_newVal$$)) : ($groupingContainer$$1_i$$188_newVal$$ = this.$getElementHeight$($header$$32_headers$$5$$) + $dimensionChange$$, this.$setElementHeight$($header$$32_headers$$5$$, $groupingContainer$$1_i$$188_newVal$$));
    $isHeader$$1_newStart$$4$$ || null == $header$$32_headers$$5$$.nextSibling ? this.$m_sizingManager$.$setSize$($axis$$28$$, this.$_getKey$($header$$32_headers$$5$$), $groupingContainer$$1_i$$188_newVal$$) : this.$_shiftHeadersAlongAxisInContainer$($element$$94_headersContainer$$, $index$$136$$, $dimensionChange$$, $dir$$18$$, $className$$17$$, $axis$$28$$);
  };
  $DvtDataGrid$$.prototype.$resizeColumnHeightsAndShift$ = function $$DvtDataGrid$$$$$resizeColumnHeightsAndShift$$($heightChange$$3$$, $level$$29$$) {
    this.$m_databody$.style.display = "none";
    this.$m_colHeader$.style.display = "none";
    this.$_shiftHeadersDirInContainer$(this.$m_colHeader$.firstChild, $heightChange$$3$$, $level$$29$$, "top", this.$getMappedStyle$("colheadercell"), "column");
    this.$m_databody$.style.display = "";
    this.$m_colHeader$.style.display = "";
  };
  $DvtDataGrid$$.prototype.$resizeRowWidthsAndShift$ = function $$DvtDataGrid$$$$$resizeRowWidthsAndShift$$($widthChange$$3$$, $level$$30$$) {
    var $dir$$19$$ = this.$m_resources$.$isRTLMode$() ? "right" : "left";
    this.$m_databody$.style.display = "none";
    this.$m_rowHeader$.style.display = "none";
    this.$_shiftHeadersDirInContainer$(this.$m_rowHeader$.firstChild, $widthChange$$3$$, $level$$30$$, $dir$$19$$, this.$getMappedStyle$("rowheadercell"), "row");
    this.$m_databody$.style.display = "";
    this.$m_rowHeader$.style.display = "";
  };
  $DvtDataGrid$$.prototype.$_shiftHeadersDirInContainer$ = function $$DvtDataGrid$$$$$_shiftHeadersDirInContainer$$($groupings_headersContainer$$1$$, $dimensionChange$$1$$, $level$$31$$, $dir$$20$$, $className$$18$$, $axis$$29$$) {
    var $i$$189$$, $grouping_headers$$6$$, $headerLevel_isHeader$$2_newDir$$, $headerDepth$$3_j$$31$$;
    $groupings_headersContainer$$1$$ = $groupings_headersContainer$$1$$.childNodes;
    for ($i$$189$$ = 0;$i$$189$$ < $groupings_headersContainer$$1$$.length;$i$$189$$++) {
      if ($grouping_headers$$6$$ = $groupings_headersContainer$$1$$[$i$$189$$], $headerLevel_isHeader$$2_newDir$$ = this.$m_utils$.$containsCSSClassName$($grouping_headers$$6$$, $className$$18$$)) {
        $headerLevel_isHeader$$2_newDir$$ = this.$getHeaderCellLevel$($grouping_headers$$6$$), $headerDepth$$3_j$$31$$ = this.$getHeaderCellDepth$($grouping_headers$$6$$), $headerLevel_isHeader$$2_newDir$$ <= $level$$31$$ && $level$$31$$ < $headerLevel_isHeader$$2_newDir$$ + $headerDepth$$3_j$$31$$ ? "column" === $axis$$29$$ ? ($headerLevel_isHeader$$2_newDir$$ = this.$getElementHeight$($grouping_headers$$6$$) + $dimensionChange$$1$$, this.$setElementHeight$($grouping_headers$$6$$, $headerLevel_isHeader$$2_newDir$$)) : 
        ($headerLevel_isHeader$$2_newDir$$ = this.$getElementWidth$($grouping_headers$$6$$) + $dimensionChange$$1$$, this.$setElementWidth$($grouping_headers$$6$$, $headerLevel_isHeader$$2_newDir$$)) : $headerLevel_isHeader$$2_newDir$$ > $level$$31$$ && ($headerLevel_isHeader$$2_newDir$$ = this.$getElementDir$($grouping_headers$$6$$, $dir$$20$$) + $dimensionChange$$1$$, this.$setElementDir$($grouping_headers$$6$$, $headerLevel_isHeader$$2_newDir$$, $dir$$20$$));
      } else {
        if ($headerLevel_isHeader$$2_newDir$$ = this.$_getAttribute$($grouping_headers$$6$$, "level"), $headerLevel_isHeader$$2_newDir$$ <= $level$$31$$) {
          this.$_shiftHeadersDirInContainer$($grouping_headers$$6$$, $dimensionChange$$1$$, $level$$31$$, $dir$$20$$, $className$$18$$, $axis$$29$$);
        } else {
          for ($grouping_headers$$6$$ = $grouping_headers$$6$$.getElementsByClassName($className$$18$$), $headerDepth$$3_j$$31$$ = 0;$headerDepth$$3_j$$31$$ < $grouping_headers$$6$$.length;$headerDepth$$3_j$$31$$++) {
            $headerLevel_isHeader$$2_newDir$$ = this.$getElementDir$($grouping_headers$$6$$[$headerDepth$$3_j$$31$$], $dir$$20$$) + $dimensionChange$$1$$, this.$setElementDir$($grouping_headers$$6$$[$headerDepth$$3_j$$31$$], $headerLevel_isHeader$$2_newDir$$, $dir$$20$$);
          }
        }
      }
    }
  };
  $DvtDataGrid$$.prototype.$handleContextMenuResize$ = function $$DvtDataGrid$$$$$handleContextMenuResize$$($details$$7_event$$186$$, $id$$18_newWidth$$4$$, $initialWidth_val$$29$$, $newHeight$$4_target$$112$$) {
    var $initialHeight$$, $value$$184$$;
    $value$$184$$ = parseInt($initialWidth_val$$29$$, 10);
    this.$m_utils$.$containsCSSClassName$($newHeight$$4_target$$112$$, this.$getMappedStyle$("cell")) && ($newHeight$$4_target$$112$$ = $id$$18_newWidth$$4$$ === this.$m_resources$.$getMappedCommand$("resizeHeight") ? this.$getHeaderFromCell$($newHeight$$4_target$$112$$, "row") : this.$getHeaderFromCell$($newHeight$$4_target$$112$$, "column"));
    this.$m_resizingElement$ = $newHeight$$4_target$$112$$;
    $initialWidth_val$$29$$ = this.$getElementWidth$($newHeight$$4_target$$112$$);
    $initialHeight$$ = this.$getElementHeight$($newHeight$$4_target$$112$$);
    $id$$18_newWidth$$4$$ === this.$m_resources$.$getMappedCommand$("resizeWidth") ? $initialWidth_val$$29$$ !== $value$$184$$ && (this.$m_utils$.$containsCSSClassName$(this.$m_resizingElement$, this.$getMappedStyle$("colheadercell")) ? this.$_isDOMElementResizable$(this.$m_resizingElement$) && this.$resizeColWidth$($initialWidth_val$$29$$, $value$$184$$) : this.$resizeRowWidth$($value$$184$$ - $initialWidth_val$$29$$)) : $id$$18_newWidth$$4$$ === this.$m_resources$.$getMappedCommand$("resizeHeight") && 
    ($initialHeight$$ = this.$getElementHeight$($newHeight$$4_target$$112$$), $initialHeight$$ !== $value$$184$$ && (this.$m_utils$.$containsCSSClassName$(this.$m_resizingElement$, this.$getMappedStyle$("colheadercell")) ? this.$resizeColHeight$($value$$184$$ - $initialHeight$$) : this.$_isDOMElementResizable$(this.$m_resizingElement$) && this.$resizeRowHeight$($initialHeight$$, $value$$184$$)));
    $id$$18_newWidth$$4$$ = this.$getElementWidth$($newHeight$$4_target$$112$$);
    $newHeight$$4_target$$112$$ = this.$getElementHeight$($newHeight$$4_target$$112$$);
    if ($id$$18_newWidth$$4$$ != $initialWidth_val$$29$$ || $newHeight$$4_target$$112$$ != $initialHeight$$) {
      $details$$7_event$$186$$ = {event:$details$$7_event$$186$$, ui:{header:this.$_getKey$(this.$m_resizingElement$), oldDimensions:{width:$initialWidth_val$$29$$, height:$initialHeight$$}, newDimensions:{width:$id$$18_newWidth$$4$$, height:$newHeight$$4_target$$112$$}, size:$value$$184$$}}, this.fireEvent("resize", $details$$7_event$$186$$), this.$buildCorners$(), this.$m_utils$.$isTouchDevice$() && this.$_moveTouchSelectionAffordance$();
    }
    this.$m_resizingElement$ = null;
  };
  $DvtDataGrid$$.prototype.$getHeaderEdgePixels$ = function $$DvtDataGrid$$$$$getHeaderEdgePixels$$($elem$$48_targetHeight$$) {
    var $elementXY_topEdge$$, $leftEdge$$, $targetWidth$$;
    $elementXY_topEdge$$ = this.$findPos$($elem$$48_targetHeight$$);
    $leftEdge$$ = $elementXY_topEdge$$[0];
    $elementXY_topEdge$$ = $elementXY_topEdge$$[1];
    this.$m_utils$.$containsCSSClassName$($elem$$48_targetHeight$$, this.$getMappedStyle$("colheadercell")) ? ($targetWidth$$ = this.$calculateColumnHeaderWidth$($elem$$48_targetHeight$$), $elem$$48_targetHeight$$ = this.$getElementHeight$($elem$$48_targetHeight$$)) : ($targetWidth$$ = this.$getElementWidth$($elem$$48_targetHeight$$), $elem$$48_targetHeight$$ = this.$calculateRowHeaderHeight$($elem$$48_targetHeight$$));
    return[$leftEdge$$, $elementXY_topEdge$$, $leftEdge$$ + $targetWidth$$, $elementXY_topEdge$$ + $elem$$48_targetHeight$$];
  };
  $DvtDataGridSizingManager$$.prototype.$setSize$ = function $$DvtDataGridSizingManager$$$$$setSize$$($axis$$30$$, $headerKey$$, $size$$24$$) {
    this.$sizes$[$axis$$30$$][$headerKey$$] = $size$$24$$;
  };
  $DvtDataGridSizingManager$$.prototype.$getSize$ = function $$DvtDataGridSizingManager$$$$$getSize$$($axis$$31$$, $headerKey$$1$$) {
    return this.$sizes$[$axis$$31$$].hasOwnProperty($headerKey$$1$$) ? this.$sizes$[$axis$$31$$][$headerKey$$1$$] : null;
  };
  $DvtDataGridSizingManager$$.prototype.clear = function $$DvtDataGridSizingManager$$$$clear$() {
    this.$sizes$ = {column:{}, row:{}};
  };
  $DvtDataGridUtils$$.$IE_PLATFORM$ = "ie";
  $DvtDataGridUtils$$.$GECKO_PLATFORM$ = "gecko";
  $DvtDataGridUtils$$.$WEBKIT_PLATFORM$ = "webkit";
  $DvtDataGridUtils$$.$UNKNOWN_PLATFORM$ = "unknown";
  $DvtDataGridUtils$$.$EDGE_PLATFORM$ = "edge";
  $DvtDataGridUtils$$.$WINDOWS_OS$ = "Windows";
  $DvtDataGridUtils$$.$SOLARIS_OS$ = "Solaris";
  $DvtDataGridUtils$$.$MAC_OS$ = "Mac";
  $DvtDataGridUtils$$.$UNKNOWN_OS$ = "Unknown";
  $DvtDataGridUtils$$.prototype.$calculateScrollbarSize$ = function $$DvtDataGridUtils$$$$$calculateScrollbarSize$$() {
    var $scrollDiv$$ = document.createElement("div");
    $scrollDiv$$.style.cssText = "width:100px;height:100px;overflow:scroll;position:absolute;top:-9999px;";
    document.body.appendChild($scrollDiv$$);
    this.$scrollbarSize$ = $scrollDiv$$.offsetWidth - $scrollDiv$$.clientWidth;
    document.body.removeChild($scrollDiv$$);
  };
  $DvtDataGridUtils$$.prototype.$getScrollbarSize$ = function $$DvtDataGridUtils$$$$$getScrollbarSize$$() {
    -1 == this.$scrollbarSize$ && this.$calculateScrollbarSize$();
    return this.$scrollbarSize$;
  };
  $DvtDataGridUtils$$.prototype.$isTouchDevice$ = function $$DvtDataGridUtils$$$$$isTouchDevice$$() {
    if (void 0 == this.$isTouch$) {
      var $agentName$$ = navigator.userAgent.toLowerCase();
      -1 != $agentName$$.indexOf("mobile") || -1 != $agentName$$.indexOf("android") ? this.$isTouch$ = !0 : this.$isTouch$ = !1;
    }
    return this.$isTouch$;
  };
  $DvtDataGridUtils$$.prototype.$addCSSClassName$ = function $$DvtDataGridUtils$$$$$addCSSClassName$$($domElement$$1$$, $className$$19$$) {
    var $currentClassName$$, $classNameIndex$$;
    null != $className$$19$$ && null != $domElement$$1$$ && ($currentClassName$$ = $domElement$$1$$.className, $classNameIndex$$ = $DvtDataGridUtils$$.$_getCSSClassNameIndex$($currentClassName$$, $className$$19$$), -1 == $classNameIndex$$ && ($domElement$$1$$.className = $currentClassName$$ ? $className$$19$$ + " " + $currentClassName$$ : $className$$19$$));
  };
  $DvtDataGridUtils$$.prototype.$removeCSSClassName$ = function $$DvtDataGridUtils$$$$$removeCSSClassName$$($domElement$$2$$, $className$$20$$) {
    var $afterstring_currentClassName$$1$$, $beforestring_classNameIndex$$1$$, $classNameEndIndex$$;
    null != $className$$20$$ && null != $domElement$$2$$ && ($afterstring_currentClassName$$1$$ = $domElement$$2$$.className, $beforestring_classNameIndex$$1$$ = $DvtDataGridUtils$$.$_getCSSClassNameIndex$($afterstring_currentClassName$$1$$, $className$$20$$), -1 != $beforestring_classNameIndex$$1$$ && ($classNameEndIndex$$ = $beforestring_classNameIndex$$1$$ + $className$$20$$.length, $beforestring_classNameIndex$$1$$ = 0 == $beforestring_classNameIndex$$1$$ ? null : $afterstring_currentClassName$$1$$.substring(0, 
    $beforestring_classNameIndex$$1$$), $afterstring_currentClassName$$1$$ = $classNameEndIndex$$ == $afterstring_currentClassName$$1$$.length ? null : $afterstring_currentClassName$$1$$.substring($classNameEndIndex$$ + 1), $domElement$$2$$.className = null == $beforestring_classNameIndex$$1$$ ? null == $afterstring_currentClassName$$1$$ ? "" : $afterstring_currentClassName$$1$$ : null == $afterstring_currentClassName$$1$$ ? $beforestring_classNameIndex$$1$$ : $beforestring_classNameIndex$$1$$ + 
    $afterstring_currentClassName$$1$$));
  };
  $DvtDataGridUtils$$.prototype.$containsCSSClassName$ = function $$DvtDataGridUtils$$$$$containsCSSClassName$$($domElement$$3$$, $className$$21$$) {
    return null != $className$$21$$ && null != $domElement$$3$$ ? -1 != $DvtDataGridUtils$$.$_getCSSClassNameIndex$($domElement$$3$$.className, $className$$21$$) : !1;
  };
  $DvtDataGridUtils$$.$_getCSSClassNameIndex$ = function $$DvtDataGridUtils$$$$_getCSSClassNameIndex$$($currentClassName$$2$$, $className$$22$$) {
    var $classNameLength$$, $currentClassNameLength$$, $nameIndex$$, $hasStart$$, $endIndex$$12_hasEnd$$, $lastNameIndex$$;
    if (!$currentClassName$$2$$ || !$currentClassName$$2$$.indexOf) {
      return-1;
    }
    if ($className$$22$$ === $currentClassName$$2$$) {
      return 0;
    }
    $classNameLength$$ = $className$$22$$.length;
    $currentClassNameLength$$ = $currentClassName$$2$$.length;
    $nameIndex$$ = $currentClassName$$2$$.indexOf($className$$22$$);
    if (0 <= $nameIndex$$) {
      $hasStart$$ = 0 == $nameIndex$$ || " " == $currentClassName$$2$$.charAt($nameIndex$$ - 1);
      $endIndex$$12_hasEnd$$ = $nameIndex$$ + $classNameLength$$;
      $endIndex$$12_hasEnd$$ = $endIndex$$12_hasEnd$$ == $currentClassNameLength$$ || " " == $currentClassName$$2$$.charAt($endIndex$$12_hasEnd$$);
      if ($hasStart$$ && $endIndex$$12_hasEnd$$) {
        return $nameIndex$$;
      }
      $lastNameIndex$$ = $currentClassName$$2$$.lastIndexOf($className$$22$$);
      if ($lastNameIndex$$ != $nameIndex$$) {
        return $hasStart$$ = $currentClassName$$2$$.charAt($lastNameIndex$$ - 1), $endIndex$$12_hasEnd$$ = $lastNameIndex$$ + $classNameLength$$, $endIndex$$12_hasEnd$$ = $endIndex$$12_hasEnd$$ == $currentClassNameLength$$ || " " == $currentClassName$$2$$.charAt($endIndex$$12_hasEnd$$), $hasStart$$ && $endIndex$$12_hasEnd$$ ? $lastNameIndex$$ : $currentClassName$$2$$.indexOf(" " + $className$$22$$ + " ");
      }
    }
    return-1;
  };
  $DvtDataGridUtils$$.prototype.$ctrlEquivalent$ = function $$DvtDataGridUtils$$$$$ctrlEquivalent$$($event$$187$$) {
    return this.$os$ === $DvtDataGridUtils$$.$MAC_OS$ ? $event$$187$$.metaKey : $event$$187$$.ctrlKey;
  };
  $DvtDataGridUtils$$.prototype.$getElementScrollLeft$ = function $$DvtDataGridUtils$$$$$getElementScrollLeft$$($element$$95$$) {
    var $width$$27$$, $elemWidth$$;
    if (this.$dataGrid$.$m_resources$.$isRTLMode$()) {
      if (this.platform == $DvtDataGridUtils$$.$GECKO_PLATFORM$ || this.platform == $DvtDataGridUtils$$.$IE_PLATFORM$ || this.platform == $DvtDataGridUtils$$.$EDGE_PLATFORM$) {
        return Math.abs($element$$95$$.scrollLeft);
      }
      $width$$27$$ = this.$dataGrid$.$getScrollableWidth$();
      $elemWidth$$ = $element$$95$$.clientWidth;
      return Math.max(0, $width$$27$$ - $elemWidth$$ - $element$$95$$.scrollLeft);
    }
    return $element$$95$$.scrollLeft;
  };
  $DvtDataGridUtils$$.prototype.$setElementScrollLeft$ = function $$DvtDataGridUtils$$$$$setElementScrollLeft$$($element$$96$$, $scrollLeft$$11$$) {
    var $width$$28$$, $elemWidth$$1$$;
    this.$dataGrid$.$m_resources$.$isRTLMode$() ? this.platform === $DvtDataGridUtils$$.$GECKO_PLATFORM$ ? $element$$96$$.scrollLeft = -$scrollLeft$$11$$ : this.platform == $DvtDataGridUtils$$.$IE_PLATFORM$ || this.platform == $DvtDataGridUtils$$.$EDGE_PLATFORM$ ? $element$$96$$.scrollLeft = $scrollLeft$$11$$ : ($width$$28$$ = this.$dataGrid$.$getScrollableWidth$(), $elemWidth$$1$$ = $element$$96$$.clientWidth, $element$$96$$.scrollLeft = $width$$28$$ - $elemWidth$$1$$ - $scrollLeft$$11$$) : $element$$96$$.scrollLeft = 
    $scrollLeft$$11$$;
  };
  $DvtDataGridUtils$$.prototype.$_determineOS$ = function $$DvtDataGridUtils$$$$$_determineOS$$($userAgent$$3$$) {
    if ($userAgent$$3$$) {
      if (-1 != $userAgent$$3$$.indexOf("win")) {
        return $DvtDataGridUtils$$.$WINDOWS_OS$;
      }
      if (-1 != $userAgent$$3$$.indexOf("mac")) {
        return $DvtDataGridUtils$$.$MAC_OS$;
      }
      if (-1 != $userAgent$$3$$.indexOf("sunos")) {
        return $DvtDataGridUtils$$.$SOLARIS_OS$;
      }
    }
    return $DvtDataGridUtils$$.$UNKNOWN_OS$;
  };
  $DvtDataGridUtils$$.prototype.$_determinePlatform$ = function $$DvtDataGridUtils$$$$$_determinePlatform$$($userAgent$$4$$) {
    if ($userAgent$$4$$ && -1 == $userAgent$$4$$.indexOf("opera")) {
      if (-1 != $userAgent$$4$$.indexOf("trident") || -1 != $userAgent$$4$$.indexOf("msie")) {
        return $DvtDataGridUtils$$.$IE_PLATFORM$;
      }
      if (-1 != $userAgent$$4$$.indexOf("edge")) {
        return $DvtDataGridUtils$$.$EDGE_PLATFORM$;
      }
      if (-1 != $userAgent$$4$$.indexOf("applewebkit") || -1 != $userAgent$$4$$.indexOf("safari")) {
        return $DvtDataGridUtils$$.$WEBKIT_PLATFORM$;
      }
      if (-1 != $userAgent$$4$$.indexOf("gecko/")) {
        return $DvtDataGridUtils$$.$GECKO_PLATFORM$;
      }
    }
    return $DvtDataGridUtils$$.$UNKNOWN_PLATFORM$;
  };
  $DvtDataGridUtils$$.prototype.$getMousewheelEvent$ = function $$DvtDataGridUtils$$$$$getMousewheelEvent$$() {
    return this.platform === $DvtDataGridUtils$$.$GECKO_PLATFORM$ ? "DOMMouseScroll" : "mousewheel";
  };
  $DvtDataGridUtils$$.prototype.$getMousewheelScrollDelta$ = function $$DvtDataGridUtils$$$$$getMousewheelScrollDelta$$($deltaY$$7_event$$188$$) {
    var $deltaX$$4$$;
    $deltaY$$7_event$$188$$.wheelDeltaX ? ($deltaX$$4$$ = $deltaY$$7_event$$188$$.wheelDeltaX, $deltaY$$7_event$$188$$ = $deltaY$$7_event$$188$$.wheelDeltaY) : ($deltaX$$4$$ = 0, $deltaY$$7_event$$188$$ = $deltaY$$7_event$$188$$.detail ? -40 * $deltaY$$7_event$$188$$.detail : $deltaY$$7_event$$188$$.wheelDelta);
    return{deltaX:$deltaX$$4$$, deltaY:$deltaY$$7_event$$188$$};
  };
  $DvtDataGridUtils$$.prototype.empty = function $$DvtDataGridUtils$$$$empty$($elem$$49$$) {
    for (;$elem$$49$$.firstChild;) {
      this.$dataGrid$.$_remove$($elem$$49$$.firstChild);
    }
  };
  $DvtDataGridUtils$$.prototype.$supportsTransitions$ = function $$DvtDataGridUtils$$$$$supportsTransitions$$() {
    var $s$$8$$ = (document.body || document.documentElement).style, $p$$4$$ = "transition";
    if (/MSIE \d/.test(navigator.userAgent) && (null == document.documentMode || 11 > document.documentMode)) {
      return!1;
    }
    if ("string" == typeof $s$$8$$[$p$$4$$]) {
      return!0;
    }
    for (var $v$$ = "Moz webkit Webkit Khtml O ms".split(" "), $p$$4$$ = $p$$4$$.charAt(0).toUpperCase() + $p$$4$$.substr(1), $i$$190$$ = 0;$i$$190$$ < $v$$.length;$i$$190$$++) {
      if ("string" == typeof $s$$8$$[$v$$[$i$$190$$] + $p$$4$$]) {
        return!0;
      }
    }
    return!1;
  };
  $DvtDataGridUtils$$.prototype.$_isNodeEditableOrClickable$ = function $$DvtDataGridUtils$$$$$_isNodeEditableOrClickable$$($node$$33$$, $databody$$15$$) {
    for (var $nodeName$$2$$, $tabIndex$$2$$, $origTabIndex$$;null != $node$$33$$ && $node$$33$$ != $databody$$15$$;) {
      $nodeName$$2$$ = $node$$33$$.nodeName;
      if (3 != $node$$33$$.nodeType) {
        if ($tabIndex$$2$$ = parseInt($node$$33$$.getAttribute("tabIndex"), 10), $origTabIndex$$ = parseInt($node$$33$$.getAttribute(this.$dataGrid$.$m_resources$.$getMappedAttribute$("tabindex")), 10), null != $tabIndex$$2$$ && 0 <= $tabIndex$$2$$) {
          if (this.$containsCSSClassName$($node$$33$$, this.$dataGrid$.$m_resources$.$getMappedStyle$("cell")) || this.$containsCSSClassName$($node$$33$$, this.$dataGrid$.$m_resources$.$getMappedStyle$("headercell"))) {
            break;
          } else {
            return!0;
          }
        } else {
          if ($nodeName$$2$$.match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/) && (-1 != $tabIndex$$2$$ || -1 != $origTabIndex$$)) {
            return!0;
          }
        }
      }
      $node$$33$$ = $node$$33$$.parentNode;
    }
    return!1;
  };
  $DvtDataGridOptions$$.prototype.$extract$ = function $$DvtDataGridOptions$$$$$extract$$($arg1$$81_val1$$, $arg2$$25_val2$$, $arg3$$7_val3$$, $arg4$$) {
    return null != $arg1$$81_val1$$ ? ($arg1$$81_val1$$ = this.options[$arg1$$81_val1$$], null != $arg2$$25_val2$$ && null != $arg1$$81_val1$$ ? ($arg2$$25_val2$$ = $arg1$$81_val1$$[$arg2$$25_val2$$], null != $arg3$$7_val3$$ && null != $arg2$$25_val2$$ ? ($arg3$$7_val3$$ = $arg2$$25_val2$$[$arg3$$7_val3$$], null != $arg4$$ && null != $arg3$$7_val3$$ ? $arg3$$7_val3$$[$arg4$$] : $arg3$$7_val3$$) : $arg2$$25_val2$$) : $arg1$$81_val1$$) : null;
  };
  $DvtDataGridOptions$$.prototype.evaluate = function $$DvtDataGridOptions$$$$evaluate$($value$$185$$, $obj$$55$$) {
    return "function" == typeof $value$$185$$ ? $value$$185$$.call(this, $obj$$55$$) : $value$$185$$;
  };
  $DvtDataGridOptions$$.prototype.$getRawProperty$ = function $$DvtDataGridOptions$$$$$getRawProperty$$($prop$$65$$, $axis$$32$$) {
    var $arg1$$82$$, $arg2$$26$$, $arg3$$8$$;
    "row" == $axis$$32$$ || "column" == $axis$$32$$ ? ($arg1$$82$$ = "header", $arg2$$26$$ = $axis$$32$$, $arg3$$8$$ = $prop$$65$$) : "cell" == $axis$$32$$ && ($arg1$$82$$ = "cell", $arg2$$26$$ = $prop$$65$$);
    return this.$extract$($arg1$$82$$, $arg2$$26$$, $arg3$$8$$);
  };
  $DvtDataGridOptions$$.prototype.$getProperty$ = function $$DvtDataGridOptions$$$$$getProperty$$($prop$$66$$, $axis$$33$$, $obj$$56$$) {
    return void 0 === $obj$$56$$ ? this.$extract$($prop$$66$$, $axis$$33$$) : this.evaluate(this.$getRawProperty$($prop$$66$$, $axis$$33$$), $obj$$56$$);
  };
  $DvtDataGridOptions$$.prototype.$nullOrDefault$ = function $$DvtDataGridOptions$$$$$nullOrDefault$$($value$$186$$) {
    return null != $value$$186$$ ? $value$$186$$ : !1;
  };
  $DvtDataGridOptions$$.prototype.$getRowBandingInterval$ = function $$DvtDataGridOptions$$$$$getRowBandingInterval$$() {
    var $bandingInterval$$ = this.$getProperty$("bandingInterval", "row");
    return null != $bandingInterval$$ ? $bandingInterval$$ : 0;
  };
  $DvtDataGridOptions$$.prototype.$getColumnBandingInterval$ = function $$DvtDataGridOptions$$$$$getColumnBandingInterval$$() {
    var $bandingInterval$$1$$ = this.$getProperty$("bandingInterval", "column");
    return null != $bandingInterval$$1$$ ? $bandingInterval$$1$$ : 0;
  };
  $DvtDataGridOptions$$.prototype.$getEmptyText$ = function $$DvtDataGridOptions$$$$$getEmptyText$$() {
    return this.$getProperty$("emptyText");
  };
  $DvtDataGridOptions$$.prototype.$getHorizontalGridlines$ = function $$DvtDataGridOptions$$$$$getHorizontalGridlines$$() {
    var $horizontalGridlines$$4$$;
    $horizontalGridlines$$4$$ = this.$extract$("gridlines", "horizontal");
    return null != $horizontalGridlines$$4$$ ? $horizontalGridlines$$4$$ : "visible";
  };
  $DvtDataGridOptions$$.prototype.$getVerticalGridlines$ = function $$DvtDataGridOptions$$$$$getVerticalGridlines$$() {
    var $verticalGridlines$$4$$;
    $verticalGridlines$$4$$ = this.$extract$("gridlines", "vertical");
    return null != $verticalGridlines$$4$$ ? $verticalGridlines$$4$$ : "visible";
  };
  $DvtDataGridOptions$$.prototype.$getRowScrollPosition$ = function $$DvtDataGridOptions$$$$$getRowScrollPosition$$() {
    var $rowScrollPosition$$2$$;
    $rowScrollPosition$$2$$ = this.$extract$("scrollPosition", "key", "row");
    return null != $rowScrollPosition$$2$$ ? $rowScrollPosition$$2$$ : this.$extract$("scrollPosition", "index", "row");
  };
  $DvtDataGridOptions$$.prototype.$getColumnScrollPosition$ = function $$DvtDataGridOptions$$$$$getColumnScrollPosition$$() {
    var $columnScrollPosition$$2$$;
    $columnScrollPosition$$2$$ = this.$extract$("scrollPosition", "key", "column");
    return null != $columnScrollPosition$$2$$ ? $columnScrollPosition$$2$$ : this.$extract$("scrollPosition", "index", "column");
  };
  $DvtDataGridOptions$$.prototype.$getScrollPositionMode$ = function $$DvtDataGridOptions$$$$$getScrollPositionMode$$() {
    var $scrollPosition$$;
    $scrollPosition$$ = this.$getProperty$("scrollPosition");
    return void 0 == $scrollPosition$$ ? null : void 0 != $scrollPosition$$.key ? "key" : void 0 != $scrollPosition$$.index ? "index" : null;
  };
  $DvtDataGridOptions$$.prototype.$getSelectionCardinality$ = function $$DvtDataGridOptions$$$$$getSelectionCardinality$$() {
    var $mode$$13_val$$30$$, $key$$69$$;
    $mode$$13_val$$30$$ = this.$getProperty$("selectionMode");
    if (void 0 == $mode$$13_val$$30$$) {
      return "none";
    }
    $key$$69$$ = this.$getSelectionMode$();
    $mode$$13_val$$30$$ = $mode$$13_val$$30$$[$key$$69$$];
    return null != $mode$$13_val$$30$$ ? $mode$$13_val$$30$$ : "none";
  };
  $DvtDataGridOptions$$.prototype.$getSelectionMode$ = function $$DvtDataGridOptions$$$$$getSelectionMode$$() {
    var $cardinality_mode$$14$$;
    $cardinality_mode$$14$$ = this.$getProperty$("selectionMode");
    if (void 0 == $cardinality_mode$$14$$) {
      return "cell";
    }
    $cardinality_mode$$14$$ = $cardinality_mode$$14$$.row;
    return null != $cardinality_mode$$14$$ && "none" != $cardinality_mode$$14$$ ? "row" : "cell";
  };
  $DvtDataGridOptions$$.prototype.getSelection = function $$DvtDataGridOptions$$$$getSelection$() {
    return this.$getProperty$("selection");
  };
  $DvtDataGridOptions$$.prototype.$getCurrentCell$ = function $$DvtDataGridOptions$$$$$getCurrentCell$$() {
    return this.$getProperty$("currentCell");
  };
  $DvtDataGridOptions$$.prototype.$isSortable$ = function $$DvtDataGridOptions$$$$$isSortable$$($axis$$34$$, $obj$$57$$) {
    return this.$nullOrDefault$(this.$getProperty$("sortable", $axis$$34$$, $obj$$57$$));
  };
  $DvtDataGridOptions$$.prototype.$isResizable$ = function $$DvtDataGridOptions$$$$$isResizable$$($axis$$35_v$$1$$, $dir$$21$$, $obj$$58$$) {
    $axis$$35_v$$1$$ = this.$extract$("header", $axis$$35_v$$1$$, "resizable", $dir$$21$$);
    return void 0 != $obj$$58$$ ? this.evaluate($axis$$35_v$$1$$, $obj$$58$$) : $axis$$35_v$$1$$;
  };
  $DvtDataGridOptions$$.prototype.$isMoveable$ = function $$DvtDataGridOptions$$$$$isMoveable$$() {
    return this.$nullOrDefault$(this.$extract$("dnd", "reorder", "row"));
  };
  $DvtDataGridOptions$$.prototype.$getInlineStyle$ = function $$DvtDataGridOptions$$$$$getInlineStyle$$($axis$$37$$, $obj$$59$$) {
    return this.$getProperty$("style", $axis$$37$$, $obj$$59$$);
  };
  $DvtDataGridOptions$$.prototype.$getStyleClass$ = function $$DvtDataGridOptions$$$$$getStyleClass$$($axis$$38$$, $obj$$60$$) {
    return this.$getProperty$("className", $axis$$38$$, $obj$$60$$);
  };
  $DvtDataGridOptions$$.prototype.$getRenderer$ = function $$DvtDataGridOptions$$$$$getRenderer$$($axis$$39$$) {
    return this.$getRawProperty$("renderer", $axis$$39$$);
  };
  $DvtDataGridOptions$$.prototype.$getScrollPolicy$ = function $$DvtDataGridOptions$$$$$getScrollPolicy$$() {
    var $mode$$15$$ = this.$getProperty$("scrollPolicy");
    null == $mode$$15$$ && ($mode$$15$$ = "auto");
    return $mode$$15$$;
  };
  $oj$$11$$.$__registerWidget$("oj.ojDataGrid", $$$$11$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{bandingInterval:{row:0, column:0}, data:null, gridlines:{horizontal:"visible", vertical:"visible"}, scrollPosition:null, selectionMode:null, dnd:{reorder:{row:"disable"}}, scrollPolicy:"auto", selection:[], currentCell:null, header:{row:{className:null, renderer:null, resizable:{width:"disable", height:"disable"}, sortable:"auto", style:null}, column:{className:null, renderer:null, resizable:{width:"disable", 
  height:"disable"}, sortable:"auto", style:null}}, cell:{className:null, renderer:null, style:null}, resize:null, sort:null, optionChange:null, ready:null, scroll:null, beforeCurrentCell:null}, _ComponentCreate:function() {
    this._super();
    this.root = this.element[0];
    this.$rootId$ = this.root.getAttribute("id");
    this.$_createReadyPromise$();
    this.$_resolveReadyPromise$();
    this.grid = new $DvtDataGrid$$;
    this.grid.$setVisibility$($DvtDataGrid$$.$VISIBILITY_STATE_RENDER$);
    $$$$11$$(this.root).addClass("oj-datagrid oj-component");
    this.$redrawSet$ = {data:"all", header:["className", "renderer", "style", "template"]};
  }, $_AfterCreate$:function() {
    this.$_unregisterResizeListener$(this.root);
    $$$$11$$(this.root).empty();
    this._super();
    this.$resources$ = new $oj$$11$$.$DataGridResources$(this.$_GetReadingDirection$(), this.$_getTranslation$.bind(this));
    this.$_setDataSource$();
    this.$_setSelection$();
    null != this.$datasource$ && (this.$_addContextMenu$(), this.grid.$SetDataSource$(this.$datasource$));
    this.grid.$SetOptions$(this.options);
    this.grid.$SetResources$(this.$resources$);
    this.grid.$SetCreateContextCallback$(this.$_modifyContext$.bind(this));
    this.grid.$SetRemoveCallback$(this.$_remove$.bind(this));
    this.grid.$SetCreateReadyPromiseCallback$(this.$_createReadyPromise$.bind(this));
    this.grid.$SetResolveReadyPromiseCallback$(this.$_resolveReadyPromise$.bind(this));
    this.$_registerEventListeners$();
    this.$_possiblyRenderOrRefresh$();
    null != this.$datasource$ && this.$_registerResizeListener$(this.root);
  }, $_registerEventListeners$:function() {
    var $self$$78$$ = this;
    this.grid.addListener("resize", function($details$$8$$) {
      $self$$78$$._trigger("resize", $details$$8$$.event, $details$$8$$.ui);
    });
    this.grid.addListener("select", function($details$$9$$) {
      $self$$78$$.option("selection", $details$$9$$.ui.selection, {_context:{originalEvent:$details$$9$$.event, $internalSet$:!0}, changed:!0});
    });
    this.grid.addListener("currentCell", function($details$$10$$) {
      $self$$78$$.option("currentCell", $details$$10$$.ui, {_context:{originalEvent:$details$$10$$.event, $internalSet$:!0}, changed:!0});
    });
    this.grid.addListener("beforeCurrentCell", function($details$$11$$) {
      return $self$$78$$._trigger("beforeCurrentCell", $details$$11$$.event, $details$$11$$.ui);
    });
    this.grid.addListener("sort", function($details$$12$$) {
      $self$$78$$._trigger("sort", $details$$12$$.event, $details$$12$$.ui);
    });
    this.grid.addListener("keydown", function($details$$13$$) {
      $self$$78$$._trigger("keydown", $details$$13$$.event, $details$$13$$.ui);
    });
    this.grid.addListener("ready", function() {
      $self$$78$$._trigger("ready", null, {});
    });
    this.grid.addListener("scroll", function($details$$15$$) {
      $self$$78$$._trigger("scroll", $details$$15$$.event, $details$$15$$.ui);
    });
  }, refresh:function() {
    this._super();
    this.$_unregisterResizeListener$(this.root);
    $$$$11$$(this.root).empty();
    !0 === this.$_useDefaultContextMenu$ && (this.options.contextMenu = null);
    this.$_setDataSource$();
    null != this.$datasource$ && ($oj$$11$$.$FlattenedTreeDataGridDataSource$ && this.$datasource$ instanceof $oj$$11$$.$FlattenedTreeDataGridDataSource$ && (this.$datasource$.$Destroy$(), this.$datasource$.Init()), this.$_addContextMenu$(), this.grid.$SetDataSource$(this.$datasource$));
    this.grid.$SetOptions$(this.options);
    this.grid.$SetResources$(this.$resources$);
    this.grid.$getVisibility$() != $DvtDataGrid$$.$VISIBILITY_STATE_RENDER$ && this.grid.$setVisibility$($DvtDataGrid$$.$VISIBILITY_STATE_REFRESH$);
    this.$_possiblyRenderOrRefresh$();
    null != this.$datasource$ && this.$_registerResizeListener$(this.root);
  }, _destroy:function() {
    null != this.$datasource$ && this.$datasource$.$Destroy$ && this.$datasource$.$Destroy$();
    this.grid.destroy();
    this.$_unregisterResizeListener$(this.root);
    $$$$11$$(this.root).empty();
  }, _setOptions:function($options$$224$$, $flags$$16$$) {
    var $isRefresh$$;
    this.$datasource$ ? ($isRefresh$$ = this.$_shouldRefresh$($options$$224$$), this._super($options$$224$$, $flags$$16$$), $isRefresh$$ ? this.refresh() : this.grid.$UpdateOptions$($options$$224$$)) : (this._super($options$$224$$, $flags$$16$$), null != $options$$224$$.data && this.refresh());
  }, $_NotifyShown$:function() {
    this._super();
    this.$_possiblyRenderOrRefresh$();
  }, $_NotifyHidden$:function() {
    this._super();
    this.grid.$getVisibility$() === $DvtDataGrid$$.$VISIBILITY_STATE_VISIBLE$ && this.grid.$setVisibility$($DvtDataGrid$$.$VISIBILITY_STATE_HIDDEN$);
  }, $_NotifyAttached$:function() {
    this._super();
    this.$_possiblyRenderOrRefresh$();
  }, $_NotifyDetached$:function() {
    this._super();
    this.grid.$getVisibility$() === $DvtDataGrid$$.$VISIBILITY_STATE_VISIBLE$ && this.grid.$setVisibility$($DvtDataGrid$$.$VISIBILITY_STATE_HIDDEN$);
  }, $_shouldRefresh$:function($options$$225$$) {
    var $i$$191$$, $key$$70$$, $isRefresh$$1$$, $elm$$, $itm$$, $opt$$21$$;
    $isRefresh$$1$$ = !1;
    for ($key$$70$$ in $options$$225$$) {
      if ($key$$70$$ in this.$redrawSet$) {
        if ("data" === $key$$70$$) {
          $isRefresh$$1$$ = !0;
          break;
        } else {
          if ("header" == $key$$70$$) {
            for ($elm$$ in $options$$225$$.header) {
              if ("column" == $elm$$ || "row" == $elm$$ || "cell" == $elm$$) {
                for ($itm$$ in $options$$225$$.header[$elm$$]) {
                  for ($i$$191$$ = 0;$i$$191$$ < this.$redrawSet$.header.length;$i$$191$$++) {
                    if ($itm$$ == this.$redrawSet$.header[$i$$191$$]) {
                      for ($opt$$21$$ in this.options.header[$elm$$]) {
                        if ($opt$$21$$ == $itm$$ && $options$$225$$.header[$elm$$][$itm$$] != this.options.header[$elm$$][$itm$$]) {
                          $isRefresh$$1$$ = !0;
                          break;
                        }
                      }
                    }
                  }
                  if ($isRefresh$$1$$) {
                    break;
                  }
                }
              }
              if ($isRefresh$$1$$) {
                break;
              }
            }
          } else {
            for ($opt$$21$$ in this.options) {
              if ($opt$$21$$ == $key$$70$$ && !$oj$$11$$.$Object$.$compareValues$($options$$225$$[$key$$70$$], this.options[$opt$$21$$])) {
                $isRefresh$$1$$ = !0;
                break;
              }
            }
          }
        }
      }
    }
    return $isRefresh$$1$$;
  }, $_isResizeEnabled$:function($axis$$40$$, $direction$$12$$) {
    return this.options.header[$axis$$40$$] && this.options.header[$axis$$40$$].resizable ? "disable" !== this.options.header[$axis$$40$$].resizable[$direction$$12$$] : !1;
  }, $_isSortEnabled$:function($axis$$41$$) {
    return this.options.header[$axis$$41$$] ? "disable" !== this.options.header[$axis$$41$$].sortable : !1;
  }, $_addContextMenu$:function() {
    var $self$$79$$, $menuContainer$$, $listItems_resizeMenu$$ = null, $sortMenu$$ = null, $selectMenu$$ = null, $moveMenu$$ = null, $sortCapability$$, $menuItemsSetByGrid$$;
    $self$$79$$ = this;
    if (null == this.options.contextMenu) {
      if (null != this.$datasource$) {
        $menuContainer$$ = $$$$11$$("\x3cul\x3e");
        $menuContainer$$.css("display", "none").attr("id", this.$rootId$ + "contextmenu");
        $$$$11$$(this.root).append($menuContainer$$);
        if (this.$_isResizeEnabled$("column", "width") || this.$_isResizeEnabled$("column", "height") || this.$_isResizeEnabled$("row", "width") || this.$_isResizeEnabled$("row", "height")) {
          $listItems_resizeMenu$$ = this.$_buildContextMenuItem$("resize");
        }
        $sortCapability$$ = this.$datasource$.getCapability("sort");
        !this.$_isSortEnabled$("column") || "column" !== $sortCapability$$ && "full" !== $sortCapability$$ || ($sortMenu$$ = this.$_buildContextMenuItem$("sortCol"));
        !this.$_isSortEnabled$("row") || "row" !== $sortCapability$$ && "full" !== $sortCapability$$ || ($sortMenu$$ = null != $sortMenu$$ ? $sortMenu$$.add(this.$_buildContextMenuItem$("sortRow")) : this.$_buildContextMenuItem$("sortRow"));
        if ("enable" === this.options.dnd.reorder.row) {
          switch(this.$datasource$.getCapability("move")) {
            case "none":
              break;
            default:
              $moveMenu$$ = this.$_buildContextMenuListItem$("cut").add(this.$_buildContextMenuListItem$("paste"));
          }
        }
        this.$_isMultipleSelection$() && $oj$$11$$.$DomUtils$.$isTouchSupported$() && (this.$_discontiguousSelection$ = !1, $selectMenu$$ = this.$_buildContextMenuListItem$("discontiguousSelection"));
        if (null != $listItems_resizeMenu$$ || null != $sortMenu$$ || null != $moveMenu$$ || null != $selectMenu$$) {
          $menuContainer$$.append($listItems_resizeMenu$$).append($sortMenu$$).append($moveMenu$$).append($selectMenu$$), $menuContainer$$.ojMenu(), this.$_useDefaultContextMenu$ = !0, this._setOption("contextMenu", "#" + $menuContainer$$.attr("id")), $menuContainer$$.on("ojselect", this.$_handleContextMenuSelect$.bind(this));
        }
      }
    } else {
      null == this.$_menuItemsSetByGrid$ && (this.$_menuItemsSetByGrid$ = []), $menuContainer$$ = $$$$11$$(this.options.contextMenu), $listItems_resizeMenu$$ = $menuContainer$$.find("[data-oj-command]"), $menuItemsSetByGrid$$ = [], $listItems_resizeMenu$$.each(function() {
        var $anchor$$1_command_newListItem$$;
        $anchor$$1_command_newListItem$$ = $$$$11$$(this).children("a");
        if (0 === $anchor$$1_command_newListItem$$.length || -1 != $self$$79$$.$_menuItemsSetByGrid$.indexOf($anchor$$1_command_newListItem$$.get(0))) {
          $anchor$$1_command_newListItem$$ = $$$$11$$(this).attr("data-oj-command").split("-"), $anchor$$1_command_newListItem$$ = $self$$79$$.$_buildContextMenuItem$($anchor$$1_command_newListItem$$[$anchor$$1_command_newListItem$$.length - 1]), $$$$11$$(this).replaceWith($anchor$$1_command_newListItem$$), $menuItemsSetByGrid$$.push($anchor$$1_command_newListItem$$.children("a").get(0));
        }
      }), this.$_menuItemsSetByGrid$ = $menuItemsSetByGrid$$, $menuContainer$$.data("oj-ojMenu") && $menuContainer$$.ojMenu("refresh"), $menuContainer$$.on("ojselect", this.$_handleContextMenuSelect$.bind(this));
    }
  }, $_buildContextMenuItem$:function($command$$1$$) {
    if ("resize" === $command$$1$$) {
      return this.$_buildContextMenuListItem$("resize").append($$$$11$$("\x3cul\x3e\x3c/ul\x3e").append(this.$_buildContextMenuListItem$("resizeWidth")).append(this.$_buildContextMenuListItem$("resizeHeight")));
    }
    if ("sortCol" === $command$$1$$) {
      return this.$_buildContextMenuListItem$("sortCol").append($$$$11$$("\x3cul\x3e\x3c/ul\x3e").append(this.$_buildContextMenuListItem$("sortColAsc")).append(this.$_buildContextMenuListItem$("sortColDsc")));
    }
    if ("sortRow" === $command$$1$$) {
      return this.$_buildContextMenuListItem$("sortRow").append($$$$11$$("\x3cul\x3e\x3c/ul\x3e").append(this.$_buildContextMenuListItem$("sortRowAsc")).append(this.$_buildContextMenuListItem$("sortRowDsc")));
    }
    if (-1 != Object.keys(this.$resources$.$commands$).indexOf($command$$1$$)) {
      return $$$$11$$(this.$_buildContextMenuListItem$($command$$1$$));
    }
  }, $_buildContextMenuListItem$:function($command$$2$$) {
    var $listItem$$ = $$$$11$$("\x3cli\x3e\x3c/li\x3e");
    $listItem$$.attr("data-oj-command", this.$_getMappedCommand$($command$$2$$));
    $listItem$$.append(this.$_buildContextMenuLabel$($command$$2$$));
    return $listItem$$;
  }, $_buildContextMenuLabel$:function($command$$3$$) {
    var $key$$71$$ = "label" + $command$$3$$.charAt(0).toUpperCase() + $command$$3$$.slice(1);
    "discontiguousSelection" === $command$$3$$ && ($key$$71$$ = "labelEnableNonContiguous");
    return $$$$11$$('\x3ca href\x3d"#"\x3e\x3c/a\x3e').text(this.$_getTranslation$($key$$71$$));
  }, $_getDataGridContextMenu$:function() {
    return $$$$11$$(this.options.contextMenu).get(0);
  }, $_getTranslation$:function($key$$72$$, $args$$20$$) {
    return this.$getTranslatedString$($key$$72$$, $args$$20$$);
  }, $_handleResizeDialog$:function() {
    var $value$$187$$ = $$$$11$$("#" + this.$rootId$ + "spinner").ojInputNumber("option", "value");
    $$$$11$$("#" + this.$rootId$ + "dialog").ojDialog("close");
    this.grid.$handleContextMenuReturn$(this.$contextMenuEvent$, this.$menuItemFunction$, $value$$187$$);
    this.$contextMenuEvent$.target.focus();
  }, $_buildResizeDialog$:function($title$$8$$, $initialSize$$) {
    var $dialog$$, $dialogBody$$, $spinner$$, $dialogFooter$$, $dialogOKButton$$;
    $dialog$$ = $$$$11$$("#" + this.$rootId$ + "dialog");
    $spinner$$ = $$$$11$$("#" + this.$rootId$ + "spinner");
    0 === $dialog$$.length || 0 === $spinner$$.length ? ($dialog$$ = $$$$11$$("\x3cdiv\x3e"), $dialog$$.attr("id", this.$rootId$ + "dialog"), $dialog$$.attr("title", $title$$8$$), $dialogBody$$ = $$$$11$$('\x3cdiv class\x3d"oj-dialog-body"\x3e\x3c/div\x3e'), $dialogFooter$$ = $$$$11$$('\x3cdiv class\x3d"oj-dialog-footer"\x3e\x3c/div\x3e'), $dialog$$.append($dialogBody$$).append($dialogFooter$$), $spinner$$ = $$$$11$$('\x3cinput id\x3d"' + this.$rootId$ + 'spinner"/\x3e'), $dialogOKButton$$ = $$$$11$$('\x3cbutton id\x3d"' + 
    this.$rootId$ + 'dialogsubmit"/\x3e'), $dialogBody$$.append($spinner$$), $dialogFooter$$.append($dialogOKButton$$), $$$$11$$(this.root).append($dialog$$), $dialogOKButton$$.ojButton({$component$:"ojButton", label:this.$_getTranslation$("labelResizeDialogSubmit")}), $dialogOKButton$$.on("click", this.$_handleResizeDialog$.bind(this)), $spinner$$.ojInputNumber({$component$:"ojInputNumber", max:1E3, min:20, step:1, value:$initialSize$$}), $dialog$$.ojDialog({initialVisibility:"show", position:{my:"center center", 
    at:"center center", collision:"none", of:$$$$11$$(this.root)}})) : ($spinner$$.ojInputNumber("option", "value", $initialSize$$), $$$$11$$("#" + this.$rootId$ + "dialog").ojDialog("open"));
  }, $_handleContextMenuSelect$:function($event$$190$$, $ui$$3$$) {
    var $initialSize$$1_key$$73_parent$$11$$;
    this.$menuItemFunction$ = $ui$$3$$.item.attr("data-oj-command");
    this.$menuItemFunction$ === this.$_getMappedCommand$("sortColAsc") || this.$menuItemFunction$ === this.$_getMappedCommand$("sortColDsc") || this.$menuItemFunction$ === this.$_getMappedCommand$("cut") || this.$menuItemFunction$ === this.$_getMappedCommand$("paste") ? this.grid.$handleContextMenuReturn$(this.$contextMenuEvent$, this.$menuItemFunction$, null) : this.$menuItemFunction$ === this.$_getMappedCommand$("resizeWidth") || this.$menuItemFunction$ === this.$_getMappedCommand$("resizeHeight") ? 
    ($initialSize$$1_key$$73_parent$$11$$ = $$$$11$$(this.$contextMenuEvent$.target).closest("." + this.$_getMappedStyle$("cell")), 0 == $initialSize$$1_key$$73_parent$$11$$.length && ($initialSize$$1_key$$73_parent$$11$$ = $$$$11$$(this.$contextMenuEvent$.target).closest("." + this.$_getMappedStyle$("headercell"))), 0 < $initialSize$$1_key$$73_parent$$11$$.length && ($initialSize$$1_key$$73_parent$$11$$ = this.$menuItemFunction$ === this.$_getMappedCommand$("resizeWidth") ? $initialSize$$1_key$$73_parent$$11$$.outerWidth() : 
    $initialSize$$1_key$$73_parent$$11$$.outerHeight(), this.$_buildResizeDialog$($ui$$3$$.item.text(), $initialSize$$1_key$$73_parent$$11$$))) : this.$menuItemFunction$ === this.$_getMappedCommand$("discontiguousSelection") && (this.$_discontiguousSelection$ = !this.$_discontiguousSelection$, this.grid.$handleContextMenuReturn$(this.$contextMenuEvent$, this.$menuItemFunction$, this.$_discontiguousSelection$), $initialSize$$1_key$$73_parent$$11$$ = this.$_discontiguousSelection$ ? "labelDisableNonContiguous" : 
    "labelEnableNonContiguous", $ui$$3$$.item.children().first().text(this.$_getTranslation$($initialSize$$1_key$$73_parent$$11$$)));
  }, $_NotifyContextMenuGesture$:function($menu$$4$$, $event$$191$$, $eventType$$32$$) {
    this.grid.$handleContextMenuGesture$($event$$191$$, $eventType$$32$$, this.$_contextMenuGestureCallback$.bind(this));
  }, $_contextMenuGestureCallback$:function($capabilities$$3_returnVal$$15$$, $event$$192$$, $eventType$$33$$) {
    var $launcher$$8_openOptions$$2$$;
    null != $capabilities$$3_returnVal$$15$$ && (this.$contextMenuEvent$ = $event$$192$$.originalEvent, $launcher$$8_openOptions$$2$$ = $capabilities$$3_returnVal$$15$$.launcher, $capabilities$$3_returnVal$$15$$ = $capabilities$$3_returnVal$$15$$.capabilities, this.$_manageContextMenu$($capabilities$$3_returnVal$$15$$), $launcher$$8_openOptions$$2$$ = "keyboard" === $eventType$$33$$ ? {position:{of:$launcher$$8_openOptions$$2$$}, launcher:$$$$11$$($launcher$$8_openOptions$$2$$)} : {launcher:$$$$11$$($launcher$$8_openOptions$$2$$)}, 
    this.$_OpenContextMenu$($event$$192$$, $eventType$$33$$, $launcher$$8_openOptions$$2$$));
  }, $_addContextMenuCapability$:function($command$$4$$) {
    var $contextMenu$$1$$;
    $contextMenu$$1$$ = $$$$11$$(this.$_getDataGridContextMenu$());
    $contextMenu$$1$$.find("[data-oj-command\x3d" + $command$$4$$ + "]").hasClass("oj-disabled") || $contextMenu$$1$$.find("[data-oj-command\x3d" + $command$$4$$ + "]").addClass("oj-disabled");
  }, $_removeContextMenuCapability$:function($command$$5$$) {
    $$$$11$$(this.$_getDataGridContextMenu$()).find("[data-oj-command\x3d" + $command$$5$$ + "]").removeClass("oj-disabled");
  }, $_manageContextMenu$:function($capabilities$$4$$) {
    var $property$$21$$, $command$$6$$;
    for ($property$$21$$ in $capabilities$$4$$) {
      $capabilities$$4$$.hasOwnProperty($property$$21$$) && ($command$$6$$ = this.$resources$.$getMappedCommand$($property$$21$$), "disable" === $capabilities$$4$$[$property$$21$$] ? this.$_addContextMenuCapability$($command$$6$$) : this.$_removeContextMenuCapability$($command$$6$$));
    }
  }, $_findCellIndex$:function($columnIndex$$3_element$$97$$) {
    var $row$$47$$;
    $row$$47$$ = $columnIndex$$3_element$$97$$.parent();
    $columnIndex$$3_element$$97$$ = $columnIndex$$3_element$$97$$.index();
    return{rowIndex:$row$$47$$.index(), columnIndex:$columnIndex$$3_element$$97$$};
  }, $_findHeadersByCellIndex$:function($columnHeader$$8_index$$137$$) {
    var $rowHeader$$22$$;
    $rowHeader$$22$$ = this.$_getRowHeader$().children().eq(0).children().eq($columnHeader$$8_index$$137$$.rowIndex + 1);
    $columnHeader$$8_index$$137$$ = this.$_getColumnHeader$().children().eq(0).children().eq($columnHeader$$8_index$$137$$.columnIndex);
    return{rowHeader:$rowHeader$$22$$, columnHeader:$columnHeader$$8_index$$137$$};
  }, $_getGrid$:function() {
    return $$$$11$$(this.root);
  }, $_getColumnHeader$:function() {
    return $$$$11$$("#" + this.$rootId$ + "\\:columnHeader");
  }, $_getRowHeader$:function() {
    return $$$$11$$("#" + this.$rootId$ + "\\:rowHeader");
  }, $_getDatabodyRows$:function() {
    return $$$$11$$("#" + this.$rootId$ + "\\:databody ." + this.$_getMappedStyle$("row"));
  }, $_setDataSource$:function() {
    this.$datasource$ = null != this.options.data ? this.options.data : null;
  }, $_setSelection$:function() {
    var $selection$$10$$ = this.options.selection;
    null != $selection$$10$$ && this.grid.$SetSelection$($selection$$10$$);
  }, $_modifyContext$:function($context$$52$$) {
    $context$$52$$.component = $oj$$11$$.Components.$getWidgetConstructor$(this.element, "ojDataGrid");
  }, $_setAccessibleContext$:function($context$$53$$) {
    this.grid.$SetAccessibleContext$($context$$53$$);
  }, $_unregisterResizeListener$:function($element$$98$$) {
    $element$$98$$ && this.$_resizeHandler$ && $oj$$11$$.$DomUtils$.$removeResizeListener$($element$$98$$, this.$_resizeHandler$);
  }, $_registerResizeListener$:function($element$$99$$) {
    $element$$99$$ && (null == this.$_resizeHandler$ && (this.$_resizeHandler$ = this.$_handleResize$.bind(this)), $oj$$11$$.$DomUtils$.$addResizeListener$($element$$99$$, this.$_resizeHandler$));
  }, $_handleResize$:function($width$$29$$, $height$$32$$) {
    0 < $width$$29$$ && 0 < $height$$32$$ && (this.$_possiblyRenderOrRefresh$(), this.grid.$HandleResize$($width$$29$$, $height$$32$$));
  }, getNodeBySubId:function($columnIndex$$4_level$$32_locator$$11$$) {
    var $rowIndex$$11_subId$$7$$, $header$$33$$, $index$$138_returnElement$$, $axis$$42$$;
    if (null == $columnIndex$$4_level$$32_locator$$11$$) {
      return this.element ? this.element[0] : null;
    }
    $rowIndex$$11_subId$$7$$ = $columnIndex$$4_level$$32_locator$$11$$.subId;
    if ("oj-datagrid-cell" === $rowIndex$$11_subId$$7$$) {
      $rowIndex$$11_subId$$7$$ = $columnIndex$$4_level$$32_locator$$11$$.rowIndex - this.grid.$getStartRow$(), $columnIndex$$4_level$$32_locator$$11$$ = $columnIndex$$4_level$$32_locator$$11$$.columnIndex - this.grid.$getStartColumn$(), $index$$138_returnElement$$ = this.$_getDatabodyRows$().eq($rowIndex$$11_subId$$7$$).children().eq($columnIndex$$4_level$$32_locator$$11$$);
    } else {
      if ("oj-datagrid-sort-icon" === $rowIndex$$11_subId$$7$$ || "oj-datagrid-sort-ascending" === $rowIndex$$11_subId$$7$$ || "oj-datagrid-sort-descending" === $rowIndex$$11_subId$$7$$ || "oj-datagrid-header" === $rowIndex$$11_subId$$7$$) {
        $axis$$42$$ = $columnIndex$$4_level$$32_locator$$11$$.axis;
        $index$$138_returnElement$$ = $columnIndex$$4_level$$32_locator$$11$$.index;
        $columnIndex$$4_level$$32_locator$$11$$ = null == $columnIndex$$4_level$$32_locator$$11$$.level ? 0 : $columnIndex$$4_level$$32_locator$$11$$.level;
        "column" === $axis$$42$$ ? $header$$33$$ = this.$_getHeaderByIndex$($index$$138_returnElement$$, $columnIndex$$4_level$$32_locator$$11$$, $$$$11$$("#" + this.$rootId$ + "\\:columnHeader"), this.grid.$m_startColHeader$) : "row" === $axis$$42$$ && ($header$$33$$ = this.$_getHeaderByIndex$($index$$138_returnElement$$, $columnIndex$$4_level$$32_locator$$11$$, $$$$11$$("#" + this.$rootId$ + "\\:rowHeader"), this.grid.$m_startRowHeader$));
        if (null == $header$$33$$) {
          return null;
        }
        if ("oj-datagrid-sort-icon" === $rowIndex$$11_subId$$7$$) {
          return $header$$33$$.children("." + this.$_getMappedStyle$("sortcontainer")).children().get(0);
        }
        $index$$138_returnElement$$ = "oj-datagrid-sort-ascending" === $rowIndex$$11_subId$$7$$ ? $header$$33$$.find("." + this.$_getMappedStyle$("sortascending")) : "oj-datagrid-sort-descending" === $rowIndex$$11_subId$$7$$ ? $header$$33$$.find("." + this.$_getMappedStyle$("sortdescending")) : $header$$33$$;
      }
    }
    return null != $index$$138_returnElement$$ && 0 < $index$$138_returnElement$$.length ? $index$$138_returnElement$$[0] : null;
  }, getSubIdByNode:function($indexes$$15_node$$34_subId$$8$$) {
    var $cell$$23_context$$54$$, $header$$34$$;
    $cell$$23_context$$54$$ = $$$$11$$($indexes$$15_node$$34_subId$$8$$).closest("." + this.$_getMappedStyle$("cell"));
    if (0 < $cell$$23_context$$54$$.length) {
      return $indexes$$15_node$$34_subId$$8$$ = this.$_findCellIndex$($cell$$23_context$$54$$), {subId:"oj-datagrid-cell", rowIndex:$indexes$$15_node$$34_subId$$8$$.rowIndex + this.grid.$getStartRow$(), columnIndex:$indexes$$15_node$$34_subId$$8$$.columnIndex + this.grid.$getStartColumn$()};
    }
    $header$$34$$ = $$$$11$$($indexes$$15_node$$34_subId$$8$$).closest("." + this.$_getMappedStyle$("headercell"));
    return 0 < $header$$34$$.length ? ($cell$$23_context$$54$$ = $header$$34$$[0][this.$_getMappedAttribute$("context")], $indexes$$15_node$$34_subId$$8$$ = $$$$11$$($indexes$$15_node$$34_subId$$8$$).hasClass(this.$_getMappedStyle$("sortascending")) ? "oj-datagrid-sort-ascending" : $$$$11$$($indexes$$15_node$$34_subId$$8$$).hasClass(this.$_getMappedStyle$("sortdescending")) ? "oj-datagrid-sort-descending" : "oj-datagrid-header", {subId:$indexes$$15_node$$34_subId$$8$$, axis:$cell$$23_context$$54$$.axis, 
    index:this.$_getHeaderIndex$($header$$34$$), level:$cell$$23_context$$54$$.level}) : null;
  }, getContextByNode:function($context$$55_node$$35$$) {
    var $cell$$24_header$$35_index$$139$$;
    $cell$$24_header$$35_index$$139$$ = $$$$11$$($context$$55_node$$35$$).closest("." + this.$_getMappedStyle$("cell"));
    if (0 < $cell$$24_header$$35_index$$139$$.length) {
      return $context$$55_node$$35$$ = $cell$$24_header$$35_index$$139$$[0][this.$_getMappedAttribute$("context")], $cell$$24_header$$35_index$$139$$ = this.$_findCellIndex$($cell$$24_header$$35_index$$139$$), {subId:"oj-datagrid-cell", component:$context$$55_node$$35$$.component, data:$context$$55_node$$35$$.data, datasource:$context$$55_node$$35$$.datasource, indexes:{row:$cell$$24_header$$35_index$$139$$.rowIndex + this.grid.$getStartRow$(), column:$cell$$24_header$$35_index$$139$$.columnIndex + 
      this.grid.$getStartColumn$()}, keys:{row:$context$$55_node$$35$$.keys.row, column:$context$$55_node$$35$$.keys.column}};
    }
    $cell$$24_header$$35_index$$139$$ = $$$$11$$($context$$55_node$$35$$).closest("." + this.$_getMappedStyle$("headercell"));
    return 0 < $cell$$24_header$$35_index$$139$$.length ? ($context$$55_node$$35$$ = $cell$$24_header$$35_index$$139$$[0][this.$_getMappedAttribute$("context")], {subId:"oj-datagrid-header", axis:$context$$55_node$$35$$.axis, component:$context$$55_node$$35$$.component, data:$context$$55_node$$35$$.data, datasource:$context$$55_node$$35$$.datasource, depth:$context$$55_node$$35$$.depth, extent:$context$$55_node$$35$$.extent, index:this.$_getHeaderIndex$($cell$$24_header$$35_index$$139$$), key:$context$$55_node$$35$$.key, 
    level:$context$$55_node$$35$$.level}) : null;
  }, $_getMappedStyle$:function($key$$74$$) {
    return this.$resources$.$getMappedStyle$($key$$74$$);
  }, $_getMappedAttribute$:function($key$$75$$) {
    return this.$resources$.$getMappedAttribute$($key$$75$$);
  }, $_getMappedCommand$:function($key$$76$$) {
    return this.$resources$.$getMappedCommand$($key$$76$$);
  }, $_isDataGridSizingAvailable$:function() {
    return null != this.root.offsetParent ? !0 : !1;
  }, $_possiblyRenderOrRefresh$:function() {
    var $visibility$$1$$ = this.grid.$getVisibility$();
    this.$_isDataGridSizingAvailable$() ? ($visibility$$1$$ === $DvtDataGrid$$.$VISIBILITY_STATE_RENDER$ ? this.grid.render(this.root) : $visibility$$1$$ === $DvtDataGrid$$.$VISIBILITY_STATE_REFRESH$ && this.grid.refresh(this.root), this.grid.$setVisibility$($DvtDataGrid$$.$VISIBILITY_STATE_VISIBLE$)) : $visibility$$1$$ === $DvtDataGrid$$.$VISIBILITY_STATE_VISIBLE$ && this.grid.$setVisibility$($DvtDataGrid$$.$VISIBILITY_STATE_HIDDEN$);
  }, $_getHeaderByIndex$:function($index$$140_relativeIndex$$2$$, $level$$33$$, $grouping$$1_headerContainer$$, $start$$38$$) {
    if (0 > $level$$33$$) {
      return null;
    }
    if ($grouping$$1_headerContainer$$.children().first().children().last().hasClass(this.$_getMappedStyle$("headercell"))) {
      return $grouping$$1_headerContainer$$.children().first().children("." + this.$_getMappedStyle$("headercell")).eq($index$$140_relativeIndex$$2$$ - $start$$38$$);
    }
    $grouping$$1_headerContainer$$ = this.$_getGroupingContainer$($index$$140_relativeIndex$$2$$, $level$$33$$, 0, $grouping$$1_headerContainer$$.children().first().children());
    if (null == $grouping$$1_headerContainer$$) {
      return null;
    }
    if ($level$$33$$ <= parseInt($grouping$$1_headerContainer$$.attr(this.$_getMappedAttribute$("level")), 10) + parseInt($grouping$$1_headerContainer$$.children().eq(0).attr(this.$_getMappedAttribute$("depth")), 10) - 1) {
      return $grouping$$1_headerContainer$$.children().eq(0);
    }
    $start$$38$$ = parseInt($grouping$$1_headerContainer$$.attr(this.$_getMappedAttribute$("start")), 10);
    $index$$140_relativeIndex$$2$$ = $index$$140_relativeIndex$$2$$ - $start$$38$$ + 1;
    return $grouping$$1_headerContainer$$.children().eq($index$$140_relativeIndex$$2$$);
  }, $_getGroupingContainer$:function($index$$141$$, $level$$34$$, $currentLevel$$3$$, $headers$$7$$) {
    var $headerIndex$$2_headerRoot$$2$$, $headerExtent$$3$$, $i$$192$$, $headerDepth$$4$$;
    if (null == $headers$$7$$.eq(1) || $headers$$7$$.eq(1).hasClass(this.$_getMappedStyle$("headercell"))) {
      return $level$$34$$ === $currentLevel$$3$$ ? $headers$$7$$.eq(0).parent() : null;
    }
    $headerIndex$$2_headerRoot$$2$$ = $headers$$7$$.parent().parent();
    for ($i$$192$$ = $headerIndex$$2_headerRoot$$2$$.hasClass(this.$_getMappedStyle$("colheader")) || $headerIndex$$2_headerRoot$$2$$.hasClass(this.$_getMappedStyle$("rowheader")) ? 0 : 1;$i$$192$$ < $headers$$7$$.length;$i$$192$$++) {
      if ($headerIndex$$2_headerRoot$$2$$ = parseInt($headers$$7$$.eq($i$$192$$).attr(this.$_getMappedAttribute$("start")), 10), $headerExtent$$3$$ = parseInt($headers$$7$$.eq($i$$192$$).attr(this.$_getMappedAttribute$("extent")), 10), $headerDepth$$4$$ = parseInt($headers$$7$$.eq($i$$192$$).children().eq(0).attr(this.$_getMappedAttribute$("depth")), 10), $index$$141$$ >= $headerIndex$$2_headerRoot$$2$$ && $index$$141$$ < $headerIndex$$2_headerRoot$$2$$ + $headerExtent$$3$$) {
        return $level$$34$$ < $currentLevel$$3$$ + $headerDepth$$4$$ ? $headers$$7$$.eq($i$$192$$) : this.$_getGroupingContainer$($index$$141$$, $level$$34$$, $currentLevel$$3$$ + $headerDepth$$4$$, $headers$$7$$.eq($i$$192$$).children());
      }
    }
    return null;
  }, $_getHeaderIndex$:function($header$$36$$) {
    var $index$$142$$;
    if ($header$$36$$.parent().hasClass(this.$_getMappedStyle$("groupingcontainer"))) {
      $index$$142$$ = parseInt($header$$36$$.parent().attr(this.$_getMappedAttribute$("start")), 10);
      if ($header$$36$$.get(0) === $header$$36$$.parent().children(":first").get(0)) {
        return $index$$142$$;
      }
      $index$$142$$--;
    } else {
      $index$$142$$ = $header$$36$$.hasClass(this.$_getMappedStyle$("rowheadercell")) ? this.grid.$m_startRowHeader$ : this.grid.$m_startColHeader$;
    }
    return $index$$142$$ += $header$$36$$.index();
  }, $_getHeaderLevel$:function($header$$37$$) {
    var $level$$35$$;
    return $header$$37$$.parent().hasClass(this.$_getMappedStyle$("groupingcontainer")) ? ($level$$35$$ = parseInt($header$$37$$.parent().attr(this.$_getMappedAttribute$("level")), 10), $header$$37$$.get(0) === $header$$37$$.parent().children(":first").get(0) ? $level$$35$$ : $level$$35$$ + 1) : 0;
  }, $_isMultipleSelection$:function() {
    return null == this.options.selectionMode || "multiple" !== this.options.selectionMode.row && "multiple" !== this.options.selectionMode.cell ? !1 : !0;
  }, $_remove$:function($element$$100$$) {
    $$$$11$$($element$$100$$).remove();
  }, scrollTo:function($options$$226$$) {
    this.grid.scroll($options$$226$$);
  }, whenReady:function() {
    return this.$_readyPromise$;
  }, $_createReadyPromise$:function() {
    var $self$$80$$ = this;
    this.$_readyPromise$ = new Promise(function($resolve$$26$$) {
      $self$$80$$.$_readyResolve$ = $resolve$$26$$;
    });
  }, $_resolveReadyPromise$:function() {
    this.$_readyResolve$(null);
  }});
});

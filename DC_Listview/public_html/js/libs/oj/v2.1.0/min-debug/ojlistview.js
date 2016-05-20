/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojdomscroller", "promise"], function($oj$$19$$, $$$$18$$) {
  $oj$$19$$.$DataSourceContentHandler$ = function $$oj$$19$$$$DataSourceContentHandler$$($widget$$5$$, $root$$17$$, $data$$124$$) {
    this.$m_root$ = $root$$17$$;
    this.$m_widget$ = $widget$$5$$;
    this.$m_fetching$ = !1;
    this.$setDataSource$($data$$124$$);
    this.Init();
  };
  $oj$$19$$.$Object$.$createSubclass$($oj$$19$$.$DataSourceContentHandler$, $oj$$19$$.$Object$, "oj.DataSourceContentHandler");
  $oj$$19$$.$DataSourceContentHandler$.prototype.Init = function $$oj$$19$$$$DataSourceContentHandler$$$Init$() {
    $oj$$19$$.$DataSourceContentHandler$.$superclass$.Init.call(this);
  };
  $oj$$19$$.$Object$.$exportPrototypeSymbol$("DataSourceContentHandler.prototype.Init", {Init:$oj$$19$$.$DataSourceContentHandler$.prototype.Init});
  $oj$$19$$.$DataSourceContentHandler$.prototype.$HandleResize$ = function $$oj$$19$$$$DataSourceContentHandler$$$$HandleResize$$() {
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$Destroy$ = function $$oj$$19$$$$DataSourceContentHandler$$$$Destroy$$() {
    $$$$18$$(this.$m_root$).empty();
    this.$m_root$ = this.$m_widget$ = null;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$IsReady$ = function $$oj$$19$$$$DataSourceContentHandler$$$$IsReady$$() {
    return!this.$m_fetching$;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$setRootAriaProperties$ = function $$oj$$19$$$$DataSourceContentHandler$$$$setRootAriaProperties$$() {
    this.$IsHierarchical$() ? this.$m_root$.setAttribute("role", "tree") : this.$m_root$.setAttribute("role", "listbox");
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$RenderContent$ = function $$oj$$19$$$$DataSourceContentHandler$$$$RenderContent$$() {
    this.$signalTaskStart$();
    this.$fetchRows$(!1);
    this.$setRootAriaProperties$();
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$GetKey$ = function $$oj$$19$$$$DataSourceContentHandler$$$$GetKey$$($element$$139$$) {
    return $element$$139$$.key;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$FindElementByKey$ = function $$oj$$19$$$$DataSourceContentHandler$$$$FindElementByKey$$($key$$102$$) {
    var $children$$8$$, $i$$324$$, $elem$$50$$;
    $children$$8$$ = $$$$18$$(this.$m_root$).find("." + this.$m_widget$.$getItemElementStyleClass$());
    for ($i$$324$$ = 0;$i$$324$$ < $children$$8$$.length;$i$$324$$++) {
      if ($elem$$50$$ = $children$$8$$[$i$$324$$], $key$$102$$ == this.$GetKey$($elem$$50$$)) {
        return $elem$$50$$;
      }
    }
    return null;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$getDataSource$ = function $$oj$$19$$$$DataSourceContentHandler$$$$getDataSource$$() {
    return this.$m_dataSource$;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$setDataSource$ = function $$oj$$19$$$$DataSourceContentHandler$$$$setDataSource$$($dataSource$$2$$) {
    this.$m_dataSource$ = $dataSource$$2$$;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$fetchRows$ = function $$oj$$19$$$$DataSourceContentHandler$$$$fetchRows$$() {
    this.$m_widget$.$showStatusText$();
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$addItem$ = function $$oj$$19$$$$DataSourceContentHandler$$$$addItem$$($parentElement$$5$$, $index$$165$$, $data$$125$$, $metadata$$4$$, $callback$$109$$) {
    var $item$$15$$, $childElements_position$$11$$;
    $item$$15$$ = document.createElement("li");
    $$$$18$$($item$$15$$).uniqueId();
    $childElements_position$$11$$ = $$$$18$$($parentElement$$5$$).children("." + this.$m_widget$.$getItemElementStyleClass$() + ", .oj-listview-no-data-message");
    $parentElement$$5$$.insertBefore($item$$15$$, $index$$165$$ === $childElements_position$$11$$.length ? null : $childElements_position$$11$$[$index$$165$$]);
    $childElements_position$$11$$ = $$$$18$$($parentElement$$5$$).children().index($item$$15$$);
    this.$_addOrReplaceItem$($item$$15$$, $childElements_position$$11$$, $parentElement$$5$$, $index$$165$$, $data$$125$$, $metadata$$4$$, $callback$$109$$);
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$_handleBeforeReplaceTransitionEnd$ = function $$oj$$19$$$$DataSourceContentHandler$$$$_handleBeforeReplaceTransitionEnd$$($event$$335_item$$16$$) {
    var $ctx$$2$$, $parentElement$$6$$, $position$$12$$;
    $event$$335_item$$16$$ = $event$$335_item$$16$$.target;
    $$$$18$$($event$$335_item$$16$$).empty().removeClass("oj-listview-item-add-remove-transition").off("transitionend", this.$m_beforeReplaceTransitionEndListener$);
    $ctx$$2$$ = $$$$18$$.data($event$$335_item$$16$$, "ctx");
    $$$$18$$.removeData($event$$335_item$$16$$, "ctx");
    $parentElement$$6$$ = $event$$335_item$$16$$.parentNode;
    $position$$12$$ = $$$$18$$($parentElement$$6$$).children().index($event$$335_item$$16$$);
    this.$_addOrReplaceItem$($event$$335_item$$16$$, $position$$12$$, $parentElement$$6$$, $ctx$$2$$.index, $ctx$$2$$.data, $ctx$$2$$.$metadata$, $ctx$$2$$.$callback$);
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$replaceItem$ = function $$oj$$19$$$$DataSourceContentHandler$$$$replaceItem$$($item$$17$$, $index$$166$$, $data$$126$$, $metadata$$5$$, $callback$$110$$) {
    null == this.$m_beforeReplaceTransitionEndListener$ && (this.$m_beforeReplaceTransitionEndListener$ = this.$_handleBeforeReplaceTransitionEnd$.bind(this));
    $$$$18$$.data($item$$17$$, "ctx", {index:$index$$166$$, data:$data$$126$$, $metadata$:$metadata$$5$$, $callback$:$callback$$110$$});
    this.$signalTaskStart$();
    $$$$18$$($item$$17$$).addClass("oj-listview-item-add-remove-transition").on("transitionend", this.$m_beforeReplaceTransitionEndListener$).css("opacity", 0);
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$_addOrReplaceItem$ = function $$oj$$19$$$$DataSourceContentHandler$$$$_addOrReplaceItem$$($item$$18$$, $position$$13$$, $parentElement$$7$$, $context$$79_index$$167$$, $data$$127$$, $content$$18_metadata$$6_renderer$$10$$, $callback$$111$$) {
    var $textWrapper$$2$$;
    void 0 == $callback$$111$$ && ($callback$$111$$ = this.$afterRenderItem$.bind(this));
    $context$$79_index$$167$$ = this.$createContext$($context$$79_index$$167$$, $data$$127$$, $content$$18_metadata$$6_renderer$$10$$, $item$$18$$);
    $content$$18_metadata$$6_renderer$$10$$ = this.$m_widget$.$_getItemRenderer$();
    null != $content$$18_metadata$$6_renderer$$10$$ ? ($content$$18_metadata$$6_renderer$$10$$ = $content$$18_metadata$$6_renderer$$10$$.call(this, $context$$79_index$$167$$), null != $content$$18_metadata$$6_renderer$$10$$ && (null === $content$$18_metadata$$6_renderer$$10$$.parentNode || $content$$18_metadata$$6_renderer$$10$$.parentNode instanceof DocumentFragment ? $item$$18$$.appendChild($content$$18_metadata$$6_renderer$$10$$) : null == $content$$18_metadata$$6_renderer$$10$$.parentNode && 
    $content$$18_metadata$$6_renderer$$10$$.toString && ($textWrapper$$2$$ = document.createElement("span"), $textWrapper$$2$$.appendChild(document.createTextNode($content$$18_metadata$$6_renderer$$10$$.toString())), $item$$18$$.appendChild($textWrapper$$2$$)))) : ($textWrapper$$2$$ = document.createElement("span"), $textWrapper$$2$$.appendChild(document.createTextNode(null == $data$$127$$ ? "" : $data$$127$$.toString())), $item$$18$$.appendChild($textWrapper$$2$$));
    $item$$18$$ = $parentElement$$7$$.children[$position$$13$$];
    $context$$79_index$$167$$.parentElement = $item$$18$$;
    $$$$18$$.data($item$$18$$, "data", $data$$127$$);
    $callback$$111$$($item$$18$$, $context$$79_index$$167$$);
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$afterRenderItem$ = function $$oj$$19$$$$DataSourceContentHandler$$$$afterRenderItem$$($item$$19$$, $context$$80$$) {
    var $elem$$51$$;
    $item$$19$$.key = $context$$80$$.key;
    $item$$19$$ = $$$$18$$($item$$19$$);
    $item$$19$$.uniqueId();
    $elem$$51$$ = this.$m_widget$.$getSingleFocusableElement$($item$$19$$);
    $elem$$51$$.attr("role", this.$IsHierarchical$() ? "treeitem" : "option");
    $elem$$51$$ != $item$$19$$ && $item$$19$$.attr("role", "presentation");
    $elem$$51$$.addClass(this.$m_widget$.$getFocusedElementStyleClass$());
    this.$isFocusable$($context$$80$$) || $item$$19$$.addClass("oj-skipfocus");
    $item$$19$$.addClass(this.$m_widget$.$getItemElementStyleClass$());
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$createContext$ = function $$oj$$19$$$$DataSourceContentHandler$$$$createContext$$($index$$168$$, $data$$128$$, $metadata$$7$$, $elem$$52$$) {
    var $context$$81$$, $prop$$69$$;
    $context$$81$$ = {};
    $context$$81$$.parentElement = $elem$$52$$;
    $context$$81$$.index = $index$$168$$;
    $context$$81$$.data = $data$$128$$;
    $context$$81$$.component = this.$m_widget$.$getWidgetConstructor$();
    $context$$81$$.datasource = this.$m_dataSource$;
    for ($prop$$69$$ in $metadata$$7$$) {
      $metadata$$7$$.hasOwnProperty($prop$$69$$) && ($context$$81$$[$prop$$69$$] = $metadata$$7$$[$prop$$69$$]);
    }
    return $context$$81$$;
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$isFocusable$ = function $$oj$$19$$$$DataSourceContentHandler$$$$isFocusable$$($context$$82$$) {
    return this.$m_widget$.$_getItemOption$("focusable", $context$$82$$, !0);
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$isSelectable$ = function $$oj$$19$$$$DataSourceContentHandler$$$$isSelectable$$($context$$83$$) {
    return this.$m_widget$.$_getItemOption$("selectable", $context$$83$$, !0);
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$signalTaskStart$ = function $$oj$$19$$$$DataSourceContentHandler$$$$signalTaskStart$$() {
    this.$m_widget$ && this.$m_widget$.$signalTaskStart$();
  };
  $oj$$19$$.$DataSourceContentHandler$.prototype.$signalTaskEnd$ = function $$oj$$19$$$$DataSourceContentHandler$$$$signalTaskEnd$$() {
    this.$m_widget$ && this.$m_widget$.$signalTaskEnd$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$ = function $$oj$$19$$$$TableDataSourceContentHandler$$($widget$$6$$, $root$$18$$, $data$$129$$) {
    $oj$$19$$.$TableDataSourceContentHandler$.$superclass$.constructor.call(this, $widget$$6$$, $root$$18$$, $data$$129$$);
  };
  $oj$$19$$.$Object$.$createSubclass$($oj$$19$$.$TableDataSourceContentHandler$, $oj$$19$$.$DataSourceContentHandler$, "oj.TableDataSourceContentHandler");
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.Init = function $$oj$$19$$$$TableDataSourceContentHandler$$$Init$() {
    $oj$$19$$.$TableDataSourceContentHandler$.$superclass$.Init.call(this);
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$IsHierarchical$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$IsHierarchical$$() {
    return!1;
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$Destroy$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$Destroy$$() {
    $oj$$19$$.$TableDataSourceContentHandler$.$superclass$.$Destroy$.call(this);
    this.$_removeDataSourceEventListeners$();
    null != this.$m_domScroller$ && (this.$m_domScroller$.destroy(), this.$m_domScrollerMaxCountFunc$ = this.$m_domScroller$ = null);
    this.$m_loadingIndicator$ = null;
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$HandleResize$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$HandleResize$$($width$$38$$, $height$$38$$) {
    this.$_isLoadMoreOnScroll$() && void 0 != this.$m_height$ && this.$m_height$ != $height$$38$$ && (this.$m_height$ = $height$$38$$, this.checkViewport());
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_isLoadMoreOnScroll$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_isLoadMoreOnScroll$$() {
    return "loadMoreOnScroll" == this.$m_widget$.options.scrollPolicy ? !0 : !1;
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_getFetchSize$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_getFetchSize$$() {
    return Math.max(0, this.$m_widget$.options.scrollPolicyOptions.fetchSize);
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_getMaxCount$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_getMaxCount$$() {
    return this.$m_widget$.options.scrollPolicyOptions.maxCount;
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$setDataSource$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$setDataSource$$($dataSource$$3$$) {
    var $self$$124$$;
    this.$_removeDataSourceEventListeners$();
    if (null != $dataSource$$3$$) {
      this.$_isLoadMoreOnScroll$() && ($self$$124$$ = this, this.$m_domScrollerMaxCountFunc$ = function $this$$m_domScrollerMaxCountFunc$$($result$$49$$) {
        null != $result$$49$$ ? ($self$$124$$.$signalTaskStart$(), $self$$124$$.$_removeLoadingIndicator$(), $self$$124$$.$IsReady$() && $self$$124$$.$signalTaskStart$(), $self$$124$$.$_handleFetchedData$($result$$49$$), $result$$49$$.maxCountLimit ? $self$$124$$.$_handleScrollerMaxRowCount$() : $self$$124$$.$_appendLoadingIndicator$(), $self$$124$$.$signalTaskEnd$(), $self$$124$$.$signalTaskEnd$()) : void 0 === $result$$49$$ && ($self$$124$$.$_removeLoadingIndicator$(), $self$$124$$.$signalTaskEnd$());
      }, this.$m_domScroller$ = new $oj$$19$$.$DomScroller$(this.$m_widget$.$getRootElement$(), $dataSource$$3$$, {fetchSize:this.$_getFetchSize$(), maxCount:this.$_getMaxCount$(), success:this.$m_domScrollerMaxCountFunc$, error:this.$signalTaskEnd$}), this.$m_domScroller$.$_handleScrollerScrollTop$ = function $this$$m_domScroller$$$_handleScrollerScrollTop$$($scrollTop$$14$$, $maxScrollTop$$1$$) {
        1 >= $maxScrollTop$$1$$ - $scrollTop$$14$$ && $self$$124$$.$signalTaskStart$();
        $oj$$19$$.$DomScroller$.prototype.$_handleScrollerScrollTop$.call(this, $scrollTop$$14$$, $maxScrollTop$$1$$);
      });
      this.$m_handleModelSyncEventListener$ = this.$handleModelSyncEvent$.bind(this);
      this.$m_handleModelSortEventListener$ = this.$handleModelSortEvent$.bind(this);
      this.$m_handleModelAddEventListener$ = this.$handleModelAddEvent$.bind(this);
      this.$m_handleModelRemoveEventListener$ = this.$handleModelRemoveEvent$.bind(this);
      this.$m_handleModelChangeEventListener$ = this.$handleModelChangeEvent$.bind(this);
      this.$m_handleModelResetEventListener$ = this.$handleModelResetEvent$.bind(this);
      if ($oj$$19$$.$PagingTableDataSource$ && $dataSource$$3$$ instanceof $oj$$19$$.$PagingTableDataSource$) {
        $dataSource$$3$$.on("sync", this.$m_handleModelSyncEventListener$);
      }
      $dataSource$$3$$.on("sort", this.$m_handleModelSortEventListener$);
      $dataSource$$3$$.on("add", this.$m_handleModelAddEventListener$);
      $dataSource$$3$$.on("remove", this.$m_handleModelRemoveEventListener$);
      $dataSource$$3$$.on("change", this.$m_handleModelChangeEventListener$);
      $dataSource$$3$$.on("reset", this.$m_handleModelResetEventListener$);
      $dataSource$$3$$.on("refresh", this.$m_handleModelResetEventListener$);
    }
    this.$m_dataSource$ = $dataSource$$3$$;
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_appendLoadingIndicator$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_appendLoadingIndicator$$() {
    var $item$$20$$, $icon$$3$$;
    null == this.$m_loadingIndicator$ && ($item$$20$$ = $$$$18$$(document.createElement("li")), $item$$20$$.uniqueId().attr("role", "presentation").addClass(this.$m_widget$.$getItemStyleClass$()), $icon$$3$$ = $$$$18$$(document.createElement("div")), $icon$$3$$.addClass("oj-listview-loading-icon"), $item$$20$$.append($icon$$3$$), $$$$18$$(this.$m_root$).append($item$$20$$), this.$m_loadingIndicator$ = $item$$20$$);
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_removeLoadingIndicator$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_removeLoadingIndicator$$() {
    null != this.$m_loadingIndicator$ && this.$m_loadingIndicator$.remove();
    this.$m_loadingIndicator$ = null;
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$afterRenderItem$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$afterRenderItem$$($item$$21$$, $context$$84$$) {
    var $size$$25$$;
    $oj$$19$$.$TableDataSourceContentHandler$.$superclass$.$afterRenderItem$.call(this, $item$$21$$, $context$$84$$);
    $$$$18$$($item$$21$$).addClass(this.$m_widget$.$getItemStyleClass$());
    this.$m_widget$.$_isSelectionEnabled$() && this.$isSelectable$($context$$84$$) && this.$m_widget$.$getFocusItem$($$$$18$$($item$$21$$)).attr("aria-selected", !1);
    this.$_isLoadMoreOnScroll$() && ($size$$25$$ = Math.min(this.$m_dataSource$.totalSize(), this.$_getMaxCount$()), -1 === $size$$25$$ && ($size$$25$$ = this.$_getMaxCount$()), 0 < $size$$25$$ && $$$$18$$($item$$21$$).attr("aria-setsize", $size$$25$$).attr("aria-posinset", $context$$84$$.index + 1));
    this.$m_widget$.$itemRenderComplete$($item$$21$$, $context$$84$$);
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$afterRenderItemForInsertEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$afterRenderItemForInsertEvent$$($item$$22$$, $context$$85$$) {
    var $elem$$53$$, $height$$39$$, $itemStyleClass$$;
    this.$signalTaskStart$();
    this.$afterRenderItem$($item$$22$$, $context$$85$$);
    $elem$$53$$ = $$$$18$$($item$$22$$);
    $height$$39$$ = $elem$$53$$.outerHeight();
    $elem$$53$$.css("opacity", "0");
    $elem$$53$$.css("maxHeight", "0");
    $itemStyleClass$$ = this.$m_widget$.$getItemStyleClass$();
    $elem$$53$$.children().wrapAll("\x3cdiv\x3e\x3c/div\x3e");
    $elem$$53$$.removeClass($itemStyleClass$$).addClass("oj-listview-item-add-remove-transition");
    $elem$$53$$.children().first().addClass($itemStyleClass$$);
    null == this.$m_addTransitionEndListener$ && (this.$m_addTransitionEndListener$ = this.$_handleAddTransitionEnd$.bind(this));
    $$$$18$$.data($item$$22$$, "ctx", $context$$85$$);
    $elem$$53$$.on("transitionend", this.$m_addTransitionEndListener$);
    this.$signalTaskStart$();
    requestAnimationFrame(function() {
      $elem$$53$$.css("opacity", "1");
      $elem$$53$$.css("maxHeight", $height$$39$$ + "px");
    });
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_handleScrollerMaxRowCount$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_handleScrollerMaxRowCount$$() {
    $oj$$19$$.$Logger$.error("max count reached");
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_removeDataSourceEventListeners$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_removeDataSourceEventListeners$$() {
    null != this.$m_dataSource$ && (this.$m_dataSource$.off("sync", this.$m_handleModelSyncEventListener$), this.$m_dataSource$.off("sort", this.$m_handleModelSortEventListener$), this.$m_dataSource$.off("add", this.$m_handleModelAddEventListener$), this.$m_dataSource$.off("remove", this.$m_handleModelRemoveEventListener$), this.$m_dataSource$.off("change", this.$m_handleModelChangeEventListener$), this.$m_dataSource$.off("reset", this.$m_handleModelResetEventListener$), this.$m_dataSource$.off("refresh", 
    this.$m_handleModelResetEventListener$));
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$fetchRows$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$fetchRows$$($forceFetch$$1_options$$261_promise$$4$$) {
    var $initFetch$$2$$ = !0, $self$$125$$;
    this.$signalTaskStart$();
    if (this.$IsReady$() && (this.$m_fetching$ = !0, $oj$$19$$.$TableDataSourceContentHandler$.$superclass$.$fetchRows$.call(this, $forceFetch$$1_options$$261_promise$$4$$), $oj$$19$$.$PagingTableDataSource$ && this.$m_dataSource$ instanceof $oj$$19$$.$PagingTableDataSource$ && ($initFetch$$2$$ = !1, this.$signalTaskStart$()), $initFetch$$2$$ || $forceFetch$$1_options$$261_promise$$4$$)) {
      $initFetch$$2$$ && this.$signalTaskStart$();
      $forceFetch$$1_options$$261_promise$$4$$ = {fetchType:"init", startIndex:0};
      this.$_isLoadMoreOnScroll$() && ($forceFetch$$1_options$$261_promise$$4$$.pageSize = this.$_getFetchSize$());
      $self$$125$$ = this;
      $forceFetch$$1_options$$261_promise$$4$$ = this.$m_dataSource$.fetch($forceFetch$$1_options$$261_promise$$4$$);
      $forceFetch$$1_options$$261_promise$$4$$.then(function($value$$246$$) {
        null != $self$$125$$.$m_widget$ && $initFetch$$2$$ && ($$$$18$$($self$$125$$.$m_root$).empty(), $self$$125$$.$_handleFetchedData$($value$$246$$), $self$$125$$.$_isLoadMoreOnScroll$() && null != $value$$246$$ && $value$$246$$.keys && 0 < $value$$246$$.keys.length && $self$$125$$.$_appendLoadingIndicator$());
      }, function($reason$$5$$) {
        $self$$125$$.$_handleFetchError$($reason$$5$$);
        $self$$125$$.$signalTaskEnd$();
      });
      this.$signalTaskEnd$();
      return;
    }
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_handleFetchError$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_handleFetchError$$($msg$$23$$) {
    $oj$$19$$.$Logger$.error($msg$$23$$);
    this.$_isLoadMoreOnScroll$() && this.$_removeLoadingIndicator$();
    this.$m_widget$.$renderComplete$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_handleFetchSuccess$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_handleFetchSuccess$$($data$$130$$, $keys$$39$$) {
    var $index$$169$$, $i$$325$$, $row$$74$$;
    $index$$169$$ = this.$m_root$.childElementCount;
    for ($i$$325$$ = 0;$i$$325$$ < $data$$130$$.length;$i$$325$$++) {
      $row$$74$$ = $data$$130$$[$i$$325$$], this.$addItem$(this.$m_root$, $index$$169$$, $row$$74$$, this.getMetadata($index$$169$$, $keys$$39$$[$i$$325$$], $row$$74$$)), $index$$169$$ += 1;
    }
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$handleModelAddEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$handleModelAddEvent$$($event$$336_indexes$$21$$) {
    var $data$$131$$, $keys$$40$$, $i$$326$$;
    if (null != this.$m_root$) {
      this.$signalTaskStart$();
      $data$$131$$ = $event$$336_indexes$$21$$.data;
      $keys$$40$$ = $event$$336_indexes$$21$$.keys;
      $event$$336_indexes$$21$$ = $event$$336_indexes$$21$$.indexes;
      if (null != $data$$131$$ && null != $keys$$40$$ && 0 < $keys$$40$$.length && 0 < $data$$131$$.length && $keys$$40$$.length == $data$$131$$.length && null != $event$$336_indexes$$21$$ && $keys$$40$$.length == $event$$336_indexes$$21$$.length) {
        for ($i$$326$$ = 0;$i$$326$$ < $data$$131$$.length;$i$$326$$++) {
          this.$signalTaskStart$(), this.$addItem$(this.$m_root$, $event$$336_indexes$$21$$[$i$$326$$], $data$$131$$[$i$$326$$], this.getMetadata($event$$336_indexes$$21$$[$i$$326$$], $keys$$40$$[$i$$326$$], $data$$131$$[$i$$326$$]), this.$afterRenderItemForInsertEvent$.bind(this)), this.$signalTaskEnd$();
        }
        this.$IsReady$() && this.$signalTaskStart$();
        this.$fetchEnd$();
      }
      this.$signalTaskEnd$();
    }
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_handleAddTransitionEnd$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_handleAddTransitionEnd$$($elem$$54_event$$337$$) {
    var $context$$86$$;
    $elem$$54_event$$337$$ = $elem$$54_event$$337$$.target;
    $context$$86$$ = $$$$18$$.data($elem$$54_event$$337$$, "ctx");
    $$$$18$$.removeData($elem$$54_event$$337$$, "ctx");
    $$$$18$$($elem$$54_event$$337$$).removeClass("oj-listview-item-add-remove-transition").addClass(this.$m_widget$.$getItemStyleClass$()).off("transitionend", this.$m_addTransitionEndListener$).children().children().unwrap();
    this.$m_widget$.$itemInsertComplete$($elem$$54_event$$337$$, $context$$86$$);
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$handleModelRemoveEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$handleModelRemoveEvent$$($event$$338_keys$$41$$) {
    var $i$$327$$, $elem$$55$$;
    $event$$338_keys$$41$$ = $event$$338_keys$$41$$.keys;
    if (null != this.$m_root$ && null != $event$$338_keys$$41$$ && 0 != $event$$338_keys$$41$$.length) {
      this.$signalTaskStart$();
      for ($i$$327$$ = 0;$i$$327$$ < $event$$338_keys$$41$$.length;$i$$327$$++) {
        $elem$$55$$ = this.$FindElementByKey$($event$$338_keys$$41$$[$i$$327$$]), null != $elem$$55$$ && (this.$signalTaskStart$(), this.$_removeItem$($elem$$55$$), this.$signalTaskEnd$());
      }
      this.$m_widget$.$ClearCache$();
      this.$signalTaskEnd$();
    }
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_removeItem$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_removeItem$$($elem$$56$$) {
    var $itemStyleClass$$2$$, $self$$126$$ = this;
    this.$signalTaskStart$();
    null == this.$m_removeTransitionEndListener$ && (this.$m_removeTransitionEndListener$ = this.$_handleRemoveTransitionEnd$.bind(this));
    $itemStyleClass$$2$$ = this.$m_widget$.$getItemStyleClass$();
    $elem$$56$$ = $$$$18$$($elem$$56$$);
    $elem$$56$$.children().wrapAll("\x3cdiv class\x3d'" + $itemStyleClass$$2$$ + "'\x3e\x3c/div\x3e");
    $elem$$56$$.removeClass($itemStyleClass$$2$$).css("maxHeight", $elem$$56$$.outerHeight() + "px").addClass("oj-listview-item-add-remove-transition").on("transitionend", this.$m_removeTransitionEndListener$);
    setTimeout(function() {
      $self$$126$$.$signalTaskStart$();
      $elem$$56$$.css("opacity", "0");
      $elem$$56$$.css("maxHeight", "0px");
      $self$$126$$.$signalTaskEnd$();
    }, 10);
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_handleRemoveTransitionEnd$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_handleRemoveTransitionEnd$$($elem$$57_event$$339$$) {
    var $parent$$16$$;
    $elem$$57_event$$339$$ = $$$$18$$($elem$$57_event$$339$$.target);
    $parent$$16$$ = $elem$$57_event$$339$$.parent();
    $elem$$57_event$$339$$.off("transitionend", this.$m_removeTransitionEndListener$);
    this.$m_widget$.$itemRemoveComplete$($elem$$57_event$$339$$.get(0));
    $elem$$57_event$$339$$.remove();
    0 == $parent$$16$$.get(0).childElementCount && this.$m_widget$.$renderComplete$();
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$handleModelChangeEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$handleModelChangeEvent$$($event$$340_indexes$$22$$) {
    var $keys$$42$$, $data$$132$$, $i$$328$$, $elem$$58$$;
    $keys$$42$$ = $event$$340_indexes$$22$$.keys;
    if (null != this.$m_root$ && null != $keys$$42$$ && 0 != $keys$$42$$.length) {
      this.$signalTaskStart$();
      $data$$132$$ = $event$$340_indexes$$22$$.data;
      $event$$340_indexes$$22$$ = $event$$340_indexes$$22$$.indexes;
      for ($i$$328$$ = 0;$i$$328$$ < $keys$$42$$.length;$i$$328$$++) {
        $elem$$58$$ = this.$FindElementByKey$($keys$$42$$[$i$$328$$]), null != $elem$$58$$ && (this.$signalTaskStart$(), this.$replaceItem$($elem$$58$$, $event$$340_indexes$$22$$[$i$$328$$], $data$$132$$[$i$$328$$], this.getMetadata($event$$340_indexes$$22$$[$i$$328$$], $keys$$42$$[$i$$328$$], $data$$132$$[$i$$328$$]), this.$afterRenderItemForChangeEvent$.bind(this)), this.$signalTaskEnd$());
      }
      this.$m_widget$.$ClearCache$();
      this.$signalTaskEnd$();
    }
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$afterRenderItemForChangeEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$afterRenderItemForChangeEvent$$($item$$23$$, $context$$87$$) {
    var $self$$127$$ = this;
    this.$signalTaskStart$();
    $$$$18$$($item$$23$$).css("opacity", 0);
    this.$afterRenderItem$($item$$23$$, $context$$87$$);
    null == this.$m_afterReplaceTransitionEndListener$ && (this.$m_afterReplaceTransitionEndListener$ = this.$_handleAfterReplaceTransitionEnd$.bind(this));
    $$$$18$$($item$$23$$).on("transitionend", this.$m_afterReplaceTransitionEndListener$);
    setTimeout(function() {
      $$$$18$$($item$$23$$).addClass("oj-listview-item-add-remove-transition").css("opacity", 1);
      $self$$127$$.$signalTaskEnd$();
    }, 10);
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_handleAfterReplaceTransitionEnd$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_handleAfterReplaceTransitionEnd$$($event$$341$$) {
    $$$$18$$($event$$341$$.target).removeClass("oj-listview-item-add-remove-transition").off("transitionend", this.$m_afterReplaceTransitionEndListener$);
    this.$m_widget$.$restoreCurrentItem$();
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$handleModelResetEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$handleModelResetEvent$$() {
    null != this.$m_root$ && (this.$signalTaskStart$(), this.$m_widget$.$ClearCache$(), this.$fetchRows$(!0), this.$signalTaskEnd$());
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$_handleFetchedData$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$_handleFetchedData$$($dataObj_keys$$43$$) {
    var $data$$133$$;
    null != this.$m_root$ && ($data$$133$$ = $dataObj_keys$$43$$.data, $dataObj_keys$$43$$ = $dataObj_keys$$43$$.keys, Array.isArray($data$$133$$) && Array.isArray($dataObj_keys$$43$$) && $data$$133$$.length == $dataObj_keys$$43$$.length && (this.$_handleFetchSuccess$($data$$133$$, $dataObj_keys$$43$$), this.$fetchEnd$()));
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$handleModelSyncEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$handleModelSyncEvent$$($event$$343$$) {
    null != this.$m_root$ && (this.$signalTaskStart$(), 0 === $event$$343$$.startIndex && $$$$18$$(this.$m_root$).empty(), this.$m_widget$.$ClearCache$(), this.$_handleFetchedData$($event$$343$$), this.$signalTaskEnd$());
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$handleModelSortEvent$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$handleModelSortEvent$$() {
    null != this.$m_root$ && (this.$signalTaskStart$(), this.$m_widget$.$ClearCache$(), this.$m_widget$.$_isMultipleSelection$() && this.$m_widget$.$_clearSelection$(!0), this.$fetchRows$(!0), this.$signalTaskEnd$());
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.$fetchEnd$ = function $$oj$$19$$$$TableDataSourceContentHandler$$$$fetchEnd$$() {
    this.$m_fetching$ = !1;
    this.$m_widget$.$renderComplete$();
    this.checkViewport();
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.checkViewport = function $$oj$$19$$$$TableDataSourceContentHandler$$$checkViewport$() {
    var $self$$128$$ = this, $fetchPromise$$1$$;
    this.$signalTaskStart$();
    null != this.$m_domScroller$ && 0 < this.$m_dataSource$.totalSize() && this.$IsReady$() && ($fetchPromise$$1$$ = this.$m_domScroller$.checkViewport(), null != $fetchPromise$$1$$ && (this.$signalTaskStart$(), $fetchPromise$$1$$.then(function($result$$50$$) {
      $self$$128$$.$m_domScrollerMaxCountFunc$($result$$50$$);
      $self$$128$$.$signalTaskEnd$();
    }, null)));
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TableDataSourceContentHandler$.prototype.getMetadata = function $$oj$$19$$$$TableDataSourceContentHandler$$$getMetadata$($index$$170$$, $key$$103$$, $context$$88_data$$134$$) {
    $context$$88_data$$134$$ = $context$$88_data$$134$$.context;
    null == $context$$88_data$$134$$ && ($context$$88_data$$134$$ = {});
    null == $context$$88_data$$134$$.index && ($context$$88_data$$134$$.index = $index$$170$$);
    null == $context$$88_data$$134$$.key && ($context$$88_data$$134$$.key = $key$$103$$);
    return $context$$88_data$$134$$;
  };
  $oj$$19$$.$TreeDataSourceContentHandler$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$($widget$$7$$, $root$$19$$, $data$$135$$) {
    $oj$$19$$.$TreeDataSourceContentHandler$.$superclass$.constructor.call(this, $widget$$7$$, $root$$19$$, $data$$135$$);
  };
  $oj$$19$$.$Object$.$createSubclass$($oj$$19$$.$TreeDataSourceContentHandler$, $oj$$19$$.$DataSourceContentHandler$, "oj.TreeDataSourceContentHandler");
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.Init = function $$oj$$19$$$$TreeDataSourceContentHandler$$$Init$() {
    $oj$$19$$.$TreeDataSourceContentHandler$.$superclass$.Init.call(this);
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$IsHierarchical$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$IsHierarchical$$() {
    return!0;
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$fetchRows$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$fetchRows$$($forceFetch$$2$$) {
    this.$signalTaskStart$();
    $oj$$19$$.$TreeDataSourceContentHandler$.$superclass$.$fetchRows$.call(this, $forceFetch$$2$$);
    this.$fetchChildren$(0, null, this.$m_root$, null);
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$fetchChildren$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$fetchChildren$$($range$$18_start$$48$$, $parent$$17$$, $parentElem$$, $successCallback$$27$$) {
    this.$signalTaskStart$();
    this.$m_fetching$ = !0;
    $range$$18_start$$48$$ = {start:$range$$18_start$$48$$, count:this.$m_dataSource$.$getChildCount$($parent$$17$$)};
    this.$m_dataSource$.$fetchChildren$($parent$$17$$, $range$$18_start$$48$$, {success:function($nodeSet$$) {
      this.$_handleFetchSuccess$($nodeSet$$, $parent$$17$$, $parentElem$$, $successCallback$$27$$);
    }.bind(this), error:function($status$$16$$) {
      this.$_handleFetchError$($status$$16$$);
    }.bind(this)});
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$_handleFetchSuccess$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$_handleFetchSuccess$$($nodeSet$$1$$, $parent$$18_start$$49$$, $parentElem$$1$$, $successCallback$$28$$) {
    var $count$$38$$, $i$$329$$, $data$$136$$, $metadata$$8$$;
    this.$signalTaskStart$();
    $parent$$18_start$$49$$ = $nodeSet$$1$$.getStart();
    $count$$38$$ = $nodeSet$$1$$.getCount();
    for ($i$$329$$ = 0;$i$$329$$ < $count$$38$$;$i$$329$$++) {
      $data$$136$$ = $nodeSet$$1$$.getData($parent$$18_start$$49$$ + $i$$329$$), $metadata$$8$$ = $nodeSet$$1$$.getMetadata($parent$$18_start$$49$$ + $i$$329$$), this.$addItem$($parentElem$$1$$, $parent$$18_start$$49$$ + $i$$329$$, $data$$136$$, $metadata$$8$$);
    }
    this.$m_fetching$ = !1;
    null != $successCallback$$28$$ && $successCallback$$28$$.call(null, $parentElem$$1$$);
    this.$m_widget$.$renderComplete$();
    this.$m_initialized$ = !0;
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$afterRenderItem$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$afterRenderItem$$($item$$26$$, $context$$89$$) {
    var $groupStyleClass$$, $content$$21_itemStyleClass$$3$$, $groupItemStyleClass_icon$$4$$, $groupCollapseStyleClass$$, $focusedStyleClass$$, $collapseClass_groupItem$$;
    this.$signalTaskStart$();
    $oj$$19$$.$TreeDataSourceContentHandler$.$superclass$.$afterRenderItem$.call(this, $item$$26$$, $context$$89$$);
    $groupStyleClass$$ = this.$m_widget$.$getGroupStyleClass$();
    $content$$21_itemStyleClass$$3$$ = this.$m_widget$.$getItemStyleClass$();
    $groupItemStyleClass_icon$$4$$ = this.$m_widget$.$getGroupItemStyleClass$();
    $groupCollapseStyleClass$$ = this.$m_widget$.$getGroupCollapseStyleClass$();
    $collapseClass_groupItem$$ = this.$m_widget$.$getCollapseIconStyleClass$();
    $focusedStyleClass$$ = this.$m_widget$.$getFocusedElementStyleClass$();
    $item$$26$$ = $$$$18$$($item$$26$$);
    !1 == $context$$89$$.leaf ? ($item$$26$$.children().wrapAll("\x3cdiv\x3e\x3c/div\x3e"), $item$$26$$.hasClass($focusedStyleClass$$) ? $item$$26$$.removeClass($focusedStyleClass$$).children().first().addClass($focusedStyleClass$$).attr("aria-expanded", "false") : $item$$26$$.children().first().attr("role", "presentation").find("." + $focusedStyleClass$$).attr("aria-expanded", "false"), $content$$21_itemStyleClass$$3$$ = $item$$26$$.children().first(), $content$$21_itemStyleClass$$3$$.uniqueId().addClass($groupItemStyleClass_icon$$4$$), 
    this.$m_widget$.$isExpandable$() && ($item$$26$$.addClass("oj-collapsed"), $groupItemStyleClass_icon$$4$$ = document.createElement("a"), $$$$18$$($groupItemStyleClass_icon$$4$$).attr("href", "#").attr("aria-labelledby", $content$$21_itemStyleClass$$3$$.get(0).id).addClass("oj-component-icon oj-clickable-icon-nocontext").addClass($collapseClass_groupItem$$), $content$$21_itemStyleClass$$3$$.prepend($groupItemStyleClass_icon$$4$$)), $collapseClass_groupItem$$ = document.createElement("ul"), $$$$18$$($collapseClass_groupItem$$).addClass($groupStyleClass$$).addClass($groupCollapseStyleClass$$).attr("role", 
    "group"), $item$$26$$.append($collapseClass_groupItem$$)) : !0 == $context$$89$$.leaf && $item$$26$$.addClass($content$$21_itemStyleClass$$3$$);
    this.$m_widget$.$_isSelectionEnabled$() && this.$isSelectable$($context$$89$$) && this.$m_widget$.$getFocusItem$($item$$26$$).attr("aria-selected", !1);
    this.$m_widget$.$itemRenderComplete$($item$$26$$[0], $context$$89$$);
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$_handleFetchError$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$_handleFetchError$$($status$$17$$) {
    this.$signalTaskStart$();
    $oj$$19$$.$Logger$.error($status$$17$$);
    this.$m_widget$.$renderComplete$();
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$Expand$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$Expand$$($item$$27$$, $successCallback$$29$$) {
    var $parentKey$$, $parentElem$$2$$;
    this.$signalTaskStart$();
    $parentKey$$ = this.$GetKey$($item$$27$$[0]);
    $parentElem$$2$$ = $item$$27$$.children("ul")[0];
    this.$fetchChildren$(0, $parentKey$$, $parentElem$$2$$, $successCallback$$29$$);
    this.$signalTaskEnd$();
  };
  $oj$$19$$.$TreeDataSourceContentHandler$.prototype.$Collapse$ = function $$oj$$19$$$$TreeDataSourceContentHandler$$$$Collapse$$($item$$28$$) {
    $item$$28$$.empty();
  };
  $oj$$19$$.$StaticContentHandler$ = function $$oj$$19$$$$StaticContentHandler$$($widget$$8$$, $root$$20$$) {
    this.$m_widget$ = $widget$$8$$;
    this.$m_root$ = $root$$20$$;
  };
  $oj$$19$$.$Object$.$createSubclass$($oj$$19$$.$StaticContentHandler$, $oj$$19$$.$Object$, "oj.StaticContentHandler");
  $oj$$19$$.$StaticContentHandler$.prototype.Init = function $$oj$$19$$$$StaticContentHandler$$$Init$() {
    $oj$$19$$.$StaticContentHandler$.$superclass$.Init.call(this);
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$Destroy$ = function $$oj$$19$$$$StaticContentHandler$$$$Destroy$$() {
    this.$restoreContent$(this.$m_root$, 0);
    this.$unsetRootAriaProperties$();
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$IsReady$ = function $$oj$$19$$$$StaticContentHandler$$$$IsReady$$() {
    return!0;
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$HandleResize$ = function $$oj$$19$$$$StaticContentHandler$$$$HandleResize$$() {
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$RenderContent$ = function $$oj$$19$$$$StaticContentHandler$$$$RenderContent$$() {
    this.$modifyContent$(this.$m_root$, 0);
    this.$setRootAriaProperties$();
    this.$m_widget$.$renderComplete$();
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$Expand$ = function $$oj$$19$$$$StaticContentHandler$$$$Expand$$($item$$29$$, $successCallback$$30$$) {
    var $groupItem$$1_selector$$25$$;
    $groupItem$$1_selector$$25$$ = "." + this.$m_widget$.$getGroupStyleClass$();
    $groupItem$$1_selector$$25$$ = $$$$18$$($item$$29$$).children($groupItem$$1_selector$$25$$)[0];
    $$$$18$$($groupItem$$1_selector$$25$$).css("display", "block");
    $successCallback$$30$$.call(null, $groupItem$$1_selector$$25$$);
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$Collapse$ = function $$oj$$19$$$$StaticContentHandler$$$$Collapse$$() {
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$IsHierarchical$ = function $$oj$$19$$$$StaticContentHandler$$$$IsHierarchical$$() {
    null == this.$m_hier$ && (this.$m_hier$ = 0 < $$$$18$$(this.$m_root$).children("li").children("ul").length);
    return this.$m_hier$;
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$restoreContent$ = function $$oj$$19$$$$StaticContentHandler$$$$restoreContent$$($elem$$59$$, $depth$$13$$) {
    var $groupStyleClass$$1$$, $groupCollapseStyleClass$$1$$, $groupExpandStyleClass$$, $groupItemStyleClass$$1$$, $itemStyleClass$$4$$, $itemElementStyleClass$$, $items$$, $i$$330$$, $groupItem$$2_item$$31$$, $groupItems$$;
    $groupStyleClass$$1$$ = this.$m_widget$.$getGroupStyleClass$();
    $groupCollapseStyleClass$$1$$ = this.$m_widget$.$getGroupCollapseStyleClass$();
    $groupExpandStyleClass$$ = this.$m_widget$.$getGroupExpandStyleClass$();
    $groupItemStyleClass$$1$$ = this.$m_widget$.$getGroupItemStyleClass$();
    $itemStyleClass$$4$$ = this.$m_widget$.$getItemStyleClass$();
    $itemElementStyleClass$$ = this.$m_widget$.$getItemElementStyleClass$();
    $items$$ = $elem$$59$$.children;
    for ($i$$330$$ = 0;$i$$330$$ < $items$$.length;$i$$330$$++) {
      $groupItem$$2_item$$31$$ = $items$$[$i$$330$$], this.$unsetAriaProperties$($groupItem$$2_item$$31$$), $groupItem$$2_item$$31$$ = $$$$18$$($groupItem$$2_item$$31$$), $groupItem$$2_item$$31$$.removeClass($itemElementStyleClass$$).removeClass($itemStyleClass$$4$$).removeClass(this.$m_widget$.$getDepthStyleClass$($depth$$13$$)).removeClass("oj-skipfocus").removeClass("oj-focus").removeClass("oj-hover").removeClass("oj-expanded").removeClass("oj-collapsed").removeClass("oj-selected"), $groupItems$$ = 
      $groupItem$$2_item$$31$$.children("ul"), 0 < $groupItems$$.length && ($groupItem$$2_item$$31$$.children("." + $groupItemStyleClass$$1$$).children().unwrap(), $groupItem$$2_item$$31$$.children(".oj-component-icon").remove(), $groupItem$$2_item$$31$$ = $$$$18$$($groupItems$$[0]), $groupItem$$2_item$$31$$.removeClass($groupStyleClass$$1$$).removeClass($groupExpandStyleClass$$).removeClass($groupCollapseStyleClass$$1$$).removeAttr("role"), this.$restoreContent$($groupItem$$2_item$$31$$[0], $depth$$13$$ + 
      1));
    }
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$modifyContent$ = function $$oj$$19$$$$StaticContentHandler$$$$modifyContent$$($elem$$60$$, $depth$$14$$) {
    var $itemStyleClass$$5$$, $itemElementStyleClass$$1$$, $groupStyleClass$$2$$, $groupItemStyleClass$$2$$, $groupCollapseStyleClass$$2$$, $collapseClass$$1$$, $focusedElementStyleClass$$, $items$$1$$, $expandable$$, $i$$331$$, $item$$32$$, $context$$90$$, $groupItem$$3_groupItems$$1$$, $content$$22$$, $icon$$5$$;
    $itemStyleClass$$5$$ = this.$m_widget$.$getItemStyleClass$();
    $itemElementStyleClass$$1$$ = this.$m_widget$.$getItemElementStyleClass$();
    $groupStyleClass$$2$$ = this.$m_widget$.$getGroupStyleClass$();
    $groupItemStyleClass$$2$$ = this.$m_widget$.$getGroupItemStyleClass$();
    $groupCollapseStyleClass$$2$$ = this.$m_widget$.$getGroupCollapseStyleClass$();
    $collapseClass$$1$$ = this.$m_widget$.$getCollapseIconStyleClass$();
    $focusedElementStyleClass$$ = this.$m_widget$.$getFocusedElementStyleClass$();
    $items$$1$$ = $elem$$60$$.children;
    $expandable$$ = this.$m_widget$.$isExpandable$();
    for ($i$$331$$ = 0;$i$$331$$ < $items$$1$$.length;$i$$331$$++) {
      $item$$32$$ = $$$$18$$($items$$1$$[$i$$331$$]), $context$$90$$ = this.$createContext$($item$$32$$), this.$setAriaProperties$($item$$32$$), $item$$32$$.uniqueId().addClass($itemElementStyleClass$$1$$), 0 < $depth$$14$$ && $item$$32$$.addClass(this.$m_widget$.$getDepthStyleClass$($depth$$14$$)), this.$isFocusable$($context$$90$$) || $item$$32$$.addClass("oj-skipfocus"), $groupItem$$3_groupItems$$1$$ = $item$$32$$.children("ul"), 0 < $groupItem$$3_groupItems$$1$$.length ? (this.$m_hier$ = !0, 
      $item$$32$$.children(":not(ul)").wrapAll("\x3cdiv\x3e\x3c/div\x3e"), $content$$22$$ = $item$$32$$.children().first(), $content$$22$$.addClass($groupItemStyleClass$$2$$), this.$hasChildren$($groupItem$$3_groupItems$$1$$[0]) && ($item$$32$$.hasClass($focusedElementStyleClass$$) ? ($item$$32$$.removeClass($focusedElementStyleClass$$), $content$$22$$.addClass($focusedElementStyleClass$$).attr("aria-expanded", "false")) : ($content$$22$$.attr("role", "presentation"), $content$$22$$.find("." + $focusedElementStyleClass$$).attr("aria-expanded", 
      "false")), $expandable$$ && ($item$$32$$.addClass("oj-collapsed"), $content$$22$$.uniqueId(), $icon$$5$$ = document.createElement("a"), $$$$18$$($icon$$5$$).attr("href", "#").attr("role", "button").attr("aria-labelledby", $content$$22$$.get(0).id).addClass("oj-component-icon oj-clickable-icon-nocontext").addClass($collapseClass$$1$$), $content$$22$$.prepend($icon$$5$$))), $groupItem$$3_groupItems$$1$$ = $$$$18$$($groupItem$$3_groupItems$$1$$[0]), $groupItem$$3_groupItems$$1$$.addClass($groupStyleClass$$2$$).addClass($groupCollapseStyleClass$$2$$).attr("role", 
      "group").css("display", "none"), this.$modifyContent$($groupItem$$3_groupItems$$1$$[0], $depth$$14$$ + 1)) : $item$$32$$.addClass($itemStyleClass$$5$$), this.$m_widget$.$_isSelectionEnabled$() && this.$isSelectable$($context$$90$$) && this.$m_widget$.$getFocusItem$($item$$32$$).attr("aria-selected", !1), this.$m_widget$.$itemRenderComplete$($item$$32$$[0], $context$$90$$);
    }
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$setRootAriaProperties$ = function $$oj$$19$$$$StaticContentHandler$$$$setRootAriaProperties$$() {
    this.$IsHierarchical$() ? this.$m_root$.setAttribute("role", "tree") : this.$m_root$.setAttribute("role", "listbox");
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$unsetRootAriaProperties$ = function $$oj$$19$$$$StaticContentHandler$$$$unsetRootAriaProperties$$() {
    this.$m_root$.removeAttribute("role");
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$hasChildren$ = function $$oj$$19$$$$StaticContentHandler$$$$hasChildren$$($item$$33$$) {
    return 0 < $$$$18$$($item$$33$$).children("li").length;
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$createContext$ = function $$oj$$19$$$$StaticContentHandler$$$$createContext$$($item$$34_parents$$4$$) {
    var $context$$91$$;
    $context$$91$$ = {};
    $context$$91$$.key = $item$$34_parents$$4$$.attr("id");
    $context$$91$$.parentElement = $item$$34_parents$$4$$.children().first()[0];
    $context$$91$$.index = $item$$34_parents$$4$$.index();
    $context$$91$$.data = $item$$34_parents$$4$$[0];
    $context$$91$$.component = this.$m_widget$.$getWidgetConstructor$();
    this.$IsHierarchical$() && ($context$$91$$.leaf = 0 == $item$$34_parents$$4$$.children("ul").length, $item$$34_parents$$4$$ = $item$$34_parents$$4$$.parents("li." + this.$m_widget$.$getItemElementStyleClass$()), $context$$91$$.depth = $item$$34_parents$$4$$.length, $context$$91$$.parentKey = 0 == $item$$34_parents$$4$$.length ? null : $item$$34_parents$$4$$.first().attr("id"));
    return $context$$91$$;
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$setAriaProperties$ = function $$oj$$19$$$$StaticContentHandler$$$$setAriaProperties$$($item$$35$$) {
    var $elem$$61$$ = this.$m_widget$.$getSingleFocusableElement$($item$$35$$);
    $elem$$61$$.attr("role", this.$IsHierarchical$() ? "treeitem" : "option");
    $elem$$61$$ != $item$$35$$ && $item$$35$$.attr("role", "presentation");
    $elem$$61$$.addClass(this.$m_widget$.$getFocusedElementStyleClass$());
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$unsetAriaProperties$ = function $$oj$$19$$$$StaticContentHandler$$$$unsetAriaProperties$$($elem$$62_item$$36$$) {
    $elem$$62_item$$36$$ = this.$m_widget$.$getSingleFocusableElement$($$$$18$$($elem$$62_item$$36$$));
    $elem$$62_item$$36$$.removeAttr("role");
    $elem$$62_item$$36$$.removeAttr("aria-selected");
    $elem$$62_item$$36$$.removeAttr("aria-expanded");
    $elem$$62_item$$36$$.removeClass(this.$m_widget$.$getFocusedElementStyleClass$());
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$GetKey$ = function $$oj$$19$$$$StaticContentHandler$$$$GetKey$$($element$$140$$) {
    return $$$$18$$($element$$140$$).attr("id");
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$FindElementByKey$ = function $$oj$$19$$$$StaticContentHandler$$$$FindElementByKey$$($key$$104$$) {
    return document.getElementById($key$$104$$);
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$isFocusable$ = function $$oj$$19$$$$StaticContentHandler$$$$isFocusable$$($context$$93$$) {
    return this.$m_widget$.$_getItemOption$("focusable", $context$$93$$, !0);
  };
  $oj$$19$$.$StaticContentHandler$.prototype.$isSelectable$ = function $$oj$$19$$$$StaticContentHandler$$$$isSelectable$$($context$$94$$) {
    return this.$m_widget$.$_getItemOption$("selectable", $context$$94$$, !0);
  };
  $oj$$19$$.$_ojListView$ = function($SuperClass$$1$$, $methods$$2$$) {
    function $constructor$$2$$() {
    }
    $oj$$19$$.$Object$.$createSubclass$($constructor$$2$$, $SuperClass$$1$$, "");
    $constructor$$2$$.prototype = $$$$18$$.extend($constructor$$2$$.prototype, $methods$$2$$);
    return $constructor$$2$$;
  }(Object, {$LEFT_KEY$:37, $RIGHT_KEY$:39, $DOWN_KEY$:40, $UP_KEY$:38, $TAB_KEY$:9, $ENTER_KEY$:13, $ESC_KEY$:27, $F2_KEY$:113, $SPACE_KEY$:32, $STATE_EXPANDED$:0, $STATE_COLLAPSED$:1, $STATE_NONE$:2, $FOCUS_MODE_LIST$:0, $FOCUS_MODE_ITEM$:1, $init$:function($opts$$19$$) {
    var $self$$129$$ = this, $dndContext$$;
    this.$readinessStack$ = [];
    this.$signalTaskStart$();
    this.$ojContext$ = $opts$$19$$.$ojContext$;
    this.element = $opts$$19$$.element;
    this.options = $opts$$19$$;
    this.element.uniqueId().addClass(this.$GetStyleClass$() + " oj-component-initnode").attr("tabIndex", 0);
    "undefined" != typeof $oj$$19$$.$ListViewDndContext$ && (this.$m_dndContext$ = $dndContext$$ = new $oj$$19$$.$ListViewDndContext$(this), this.$ojContext$._on(this.element, {dragstart:function($event$$345$$) {
      return $dndContext$$.$_handleDragStart$($event$$345$$);
    }, dragenter:function($event$$346$$) {
      return $dndContext$$.$_handleDragEnter$($event$$346$$);
    }, dragover:function($event$$347$$) {
      return $dndContext$$.$_handleDragOver$($event$$347$$);
    }, dragleave:function($event$$348$$) {
      return $dndContext$$.$_handleDragLeave$($event$$348$$);
    }, dragend:function($event$$349$$) {
      return $dndContext$$.$_handleDragEnd$($event$$349$$);
    }, drag:function($event$$350$$) {
      return $dndContext$$.$_handleDrag$($event$$350$$);
    }, drop:function($event$$351$$) {
      return $dndContext$$.$_handleDrop$($event$$351$$);
    }}));
    this.$ojContext$._on(this.element, {click:function($event$$352$$) {
      $self$$129$$.$HandleMouseClick$($event$$352$$);
    }, touchstart:function($event$$353$$) {
      $self$$129$$.$HandleMouseDownOrTouchStart$($event$$353$$);
    }, touchend:function($event$$354$$) {
      $self$$129$$.$HandleTouchEndOrCancel$($event$$354$$);
    }, touchcancel:function($event$$355$$) {
      $self$$129$$.$HandleTouchEndOrCancel$($event$$355$$);
    }, mousedown:function($event$$356$$) {
      0 !== $event$$356$$.button || $self$$129$$.$_recentTouch$() || $self$$129$$.$HandleMouseDownOrTouchStart$($event$$356$$);
    }, mouseup:function($event$$357$$) {
      $self$$129$$.$_handleMouseUpOrPanMove$($event$$357$$);
      $self$$129$$.$m_preActive$ = !1;
    }, mouseout:function($event$$358$$) {
      $self$$129$$.$_handleMouseOut$($event$$358$$);
    }, mouseover:function($event$$359$$) {
      $self$$129$$.$_handleMouseOver$($event$$359$$);
    }, keydown:function($event$$360$$) {
      $self$$129$$.$HandleKeyDown$($event$$360$$);
    }, focus:function($event$$361$$) {
      $self$$129$$.$HandleFocus$($event$$361$$);
    }, blur:function($event$$362$$) {
      $self$$129$$.$HandleBlur$($event$$362$$);
    }, ojpanmove:function($event$$363$$) {
      $self$$129$$.$_handleMouseUpOrPanMove$($event$$363$$);
    }});
    $oj$$19$$.$AgentUtils$.$getAgentInfo$().browser === $oj$$19$$.$AgentUtils$.$BROWSER$.$FIREFOX$ && this.$ojContext$._on(this.$_getListContainer$(), {focus:function() {
      $self$$129$$.element.focus();
    }});
    this.$FOCUS_MODE_ITEM$ === this.$FOCUS_MODE_ITEM$ ? this.$ojContext$._on(this.element, {focusin:function($event$$365$$) {
      $self$$129$$.$HandleFocus$($event$$365$$);
    }, focusout:function($event$$366$$) {
      $self$$129$$.$HandleFocusOut$($event$$366$$);
    }}) : this.$ojContext$._on(this.element, {focus:function($event$$367$$) {
      $self$$129$$.$HandleFocus$($event$$367$$);
    }, blur:function($event$$368$$) {
      $self$$129$$.$HandleBlur$($event$$368$$);
    }});
    this.$ojContext$.document.bind("touchend.ojlistview touchcancel.ojlistview", this.$HandleTouchEndOrCancel$.bind(this));
    this.$_registerScrollHandler$();
  }, $afterCreate$:function() {
    var $container$$20$$;
    this.$_buildList$();
    this.$_addContextMenu$();
    this.$_initContentHandler$();
    $container$$20$$ = this.$_getListContainer$();
    this.$_registerResizeListener$($container$$20$$[0]);
    this.$signalTaskEnd$();
  }, refresh:function() {
    this.$_resetInternal$();
    this.$signalTaskStart$();
    this.$SetAriaProperties$();
    this.$_addContextMenu$();
    this.$_initContentHandler$();
    this.$_registerScrollHandler$();
    this.$signalTaskEnd$();
  }, whenReady:function() {
    return this.$readyPromise$;
  }, destroy:function() {
    this.element.removeClass(this.$GetStyleClass$() + " oj-component-initnode");
    this.$_unregisterResizeListener$(this.$_getListContainer$());
    this.$_resetInternal$();
    $oj$$19$$.$DomUtils$.unwrap(this.element, this.$_getListContainer$());
    this.$ojContext$.document.off(".ojlistview");
  }, $_resetInternal$:function() {
    var $self$$130$$ = this;
    this.$UnsetAriaProperties$();
    this.$_cleanupTabbableElementProperties$(this.element);
    null != this.$m_contentHandler$ && (this.$m_contentHandler$.$Destroy$(), delete this.$m_contentHandler$, this.$m_contentHandler$ = null);
    this.$m_active$ = null;
    this.$readinessStack$ = [];
    this.$readyPromise$ = new Promise(function($resolve$$30$$) {
      $self$$130$$.$readyResolve$ = $resolve$$30$$;
    });
    this.$ClearCache$();
  }, $notifyDetached$:function() {
    this.$_getListContainer$().removeClass("oj-focus-ancestor");
    null != this.$m_active$ && $$$$18$$(this.$m_active$.elem).removeClass("oj-focus");
    null != this.$m_hoverItem$ && this.$_unhighlightElem$(this.$m_hoverItem$, "oj-hover");
  }, $notifyShown$:function() {
  }, getNodeBySubId:function($anchor$$2_item$$37_key$$105_locator$$26$$) {
    var $subId$$32$$;
    if (null == $anchor$$2_item$$37_key$$105_locator$$26$$) {
      return this.element ? this.element[0] : null;
    }
    $subId$$32$$ = $anchor$$2_item$$37_key$$105_locator$$26$$.subId;
    if ("oj-listview-disclosure" === $subId$$32$$ || "oj-listview-icon" === $subId$$32$$) {
      if ($anchor$$2_item$$37_key$$105_locator$$26$$ = $anchor$$2_item$$37_key$$105_locator$$26$$.key, $anchor$$2_item$$37_key$$105_locator$$26$$ = this.$FindElementByKey$($anchor$$2_item$$37_key$$105_locator$$26$$), null != $anchor$$2_item$$37_key$$105_locator$$26$$ && $anchor$$2_item$$37_key$$105_locator$$26$$.firstElementChild && ($anchor$$2_item$$37_key$$105_locator$$26$$ = $anchor$$2_item$$37_key$$105_locator$$26$$.firstElementChild.firstElementChild, null != $anchor$$2_item$$37_key$$105_locator$$26$$ && 
      ($$$$18$$($anchor$$2_item$$37_key$$105_locator$$26$$).hasClass(this.$getExpandIconStyleClass$()) || $$$$18$$($anchor$$2_item$$37_key$$105_locator$$26$$).hasClass(this.$getCollapseIconStyleClass$())))) {
        return $anchor$$2_item$$37_key$$105_locator$$26$$;
      }
    }
    return null;
  }, getSubIdByNode:function($item$$38_key$$106_node$$71$$) {
    if (null != $item$$38_key$$106_node$$71$$ && $$$$18$$($item$$38_key$$106_node$$71$$).hasClass(this.$getExpandIconStyleClass$()) || $$$$18$$($item$$38_key$$106_node$$71$$).hasClass(this.$getCollapseIconStyleClass$())) {
      if ($item$$38_key$$106_node$$71$$ = this.$FindItem$($item$$38_key$$106_node$$71$$), null != $item$$38_key$$106_node$$71$$ && 0 < $item$$38_key$$106_node$$71$$.length && ($item$$38_key$$106_node$$71$$ = this.$GetKey$($item$$38_key$$106_node$$71$$[0]), null != $item$$38_key$$106_node$$71$$)) {
        return{subId:"oj-listview-disclosure", key:$item$$38_key$$106_node$$71$$};
      }
    }
    return null;
  }, getContextByNode:function($item$$39_node$$72$$) {
    var $context$$95_key$$107$$, $parent$$19$$, $index$$171$$;
    $item$$39_node$$72$$ = this.$FindItem$($item$$39_node$$72$$);
    return null != $item$$39_node$$72$$ && 0 < $item$$39_node$$72$$.length && ($context$$95_key$$107$$ = this.$GetKey$($item$$39_node$$72$$[0]), null != $context$$95_key$$107$$) ? ($parent$$19$$ = $item$$39_node$$72$$.parent(), $index$$171$$ = $parent$$19$$.children("li").index($item$$39_node$$72$$), $context$$95_key$$107$$ = {subId:"oj-listview-item", key:$context$$95_key$$107$$, index:$index$$171$$}, $parent$$19$$.get(0) != this.element.get(0) && ($context$$95_key$$107$$.parent = $parent$$19$$.parent().get(0)), 
    $item$$39_node$$72$$.children().first().hasClass(this.$getGroupItemStyleClass$()) ? $context$$95_key$$107$$.group = !0 : $context$$95_key$$107$$.group = !1, $context$$95_key$$107$$) : null;
  }, getDataForVisibleItem:function($context$$96_parent$$20$$) {
    var $index$$172_item$$40$$;
    $index$$172_item$$40$$ = $context$$96_parent$$20$$.index;
    $context$$96_parent$$20$$ = $context$$96_parent$$20$$.parent;
    $context$$96_parent$$20$$ = null == $context$$96_parent$$20$$ ? this.element.get(0) : $$$$18$$($context$$96_parent$$20$$).children("ul." + this.$getGroupStyleClass$()).first();
    $index$$172_item$$40$$ = $$$$18$$($context$$96_parent$$20$$).children("li").get($index$$172_item$$40$$);
    return null != $index$$172_item$$40$$ && $$$$18$$($index$$172_item$$40$$).hasClass(this.$getItemStyleClass$()) ? this.$_getDataForItem$($index$$172_item$$40$$) : null;
  }, $_getDataForItem$:function($item$$41$$) {
    return null == this.$GetOption$("data") ? $item$$41$$ : $$$$18$$.data($item$$41$$, "data");
  }, $_addContextMenu$:function($contextMenu$$3$$) {
    null != this.$m_dndContext$ && this.$m_dndContext$.$addContextMenu$($contextMenu$$3$$);
  }, $_unregisterResizeListener$:function($element$$141$$) {
    $element$$141$$ && this.$_resizeHandler$ && $oj$$19$$.$DomUtils$.$removeResizeListener$($element$$141$$, this.$_resizeHandler$);
  }, $_registerResizeListener$:function($element$$142$$) {
    $element$$142$$ && (null == this.$_resizeHandler$ && (this.$_resizeHandler$ = this.$_handleResize$.bind(this)), $oj$$19$$.$DomUtils$.$addResizeListener$($element$$142$$, this.$_resizeHandler$));
  }, $_handleResize$:function($width$$40$$, $height$$41$$) {
    0 < $width$$40$$ && 0 < $height$$41$$ && null != this.$m_contentHandler$ && this.$m_contentHandler$.$HandleResize$($width$$40$$, $height$$41$$);
  }, $ShouldRefresh$:function($options$$262$$) {
    return null != $options$$262$$.data || null != $options$$262$$.drillMode || null != $options$$262$$.groupHeaderPosition || null != $options$$262$$.item || null != $options$$262$$.scrollPolicy || null != $options$$262$$.scrollPolicyOptions;
  }, $setOptions$:function($options$$263$$) {
    var $self$$131$$, $elem$$63_expanded$$1$$, $selection$$16$$, $i$$332$$;
    if (this.$ShouldRefresh$($options$$263$$)) {
      return null != $options$$263$$.data && (null == $options$$263$$.currentItem && this.$SetOption$("currentItem", null), null == $options$$263$$.selection && this.$_clearSelection$(!0)), !0;
    }
    null != $options$$263$$.currentItem ? ($elem$$63_expanded$$1$$ = this.$FindElementByKey$($options$$263$$.currentItem), null != $elem$$63_expanded$$1$$ && ($elem$$63_expanded$$1$$ = $$$$18$$($elem$$63_expanded$$1$$), this.$SkipFocus$($elem$$63_expanded$$1$$) || this.$_activeAndFocus$($elem$$63_expanded$$1$$, null))) : null === $options$$263$$.currentItem && (this.$UnhighlightActive$(), this.$m_active$ = null, this.element.attr("tabIndex", 0));
    null != $options$$263$$.expanded && this.$m_contentHandler$.$IsHierarchical$() && ($elem$$63_expanded$$1$$ = $options$$263$$.expanded, Array.isArray($elem$$63_expanded$$1$$) && (this.$signalTaskStart$(), this.$_collapseAll$(), $self$$131$$ = this, $$$$18$$.each($elem$$63_expanded$$1$$, function($index$$173$$, $value$$247$$) {
      $self$$131$$.$expandKey$($value$$247$$, !0, !0, !0);
    }), this.$signalTaskEnd$()));
    if (null != $options$$263$$.selection && this.$_isSelectionEnabled$()) {
      for ($options$$263$$.selection = this.$_filterSelection$($options$$263$$.selection), $selection$$16$$ = $options$$263$$.selection, this.$_clearSelection$(!1), $i$$332$$ = 0;$i$$332$$ < $selection$$16$$.length;$i$$332$$++) {
        $elem$$63_expanded$$1$$ = this.$FindElementByKey$($selection$$16$$[$i$$332$$]), null != $elem$$63_expanded$$1$$ && this.$_applySelection$($elem$$63_expanded$$1$$, $selection$$16$$[$i$$332$$]);
      }
    }
    null != $options$$263$$.selectionMode && (this.$_clearSelection$(!0), this.$SetAriaProperties$());
    null != $options$$263$$.contextMenu && this.$_addContextMenu$($options$$263$$.contextMenu);
    return!1;
  }, $Trigger$:function($type$$84$$, $event$$369$$, $ui$$9$$) {
    return this.$ojContext$._trigger($type$$84$$, $event$$369$$, $ui$$9$$);
  }, $SetOption$:function($key$$108$$, $value$$248$$, $flags$$27$$) {
    this.$ojContext$.option($key$$108$$, $value$$248$$, $flags$$27$$);
  }, $GetOption$:function($key$$109$$) {
    return this.$ojContext$.option($key$$109$$);
  }, $signalTaskStart$:function() {
    var $self$$132$$ = this;
    this.$readinessStack$ && (0 == this.$readinessStack$.length && (this.$readyPromise$ = new Promise(function($resolve$$31$$) {
      $self$$132$$.$readyResolve$ = $resolve$$31$$;
    })), this.$readinessStack$.push(1));
  }, $signalTaskEnd$:function() {
    this.$readinessStack$ && 0 < this.$readinessStack$.length && (this.$readinessStack$.pop(), 0 == this.$readinessStack$.length && this.$readyResolve$(null));
  }, $_initContentHandler$:function() {
    var $data$$137$$;
    this.$signalTaskStart$();
    $data$$137$$ = this.$GetOption$("data");
    if (null != $data$$137$$) {
      if ("undefined" === typeof $oj$$19$$.$TableDataSource$ || "undefined" === typeof $oj$$19$$.$TreeDataSource$) {
        throw "oj.TableDataSource or oj.TreeDataSource not found. Ensure the required modules are imported";
      }
      if ($data$$137$$ instanceof $oj$$19$$.$TableDataSource$) {
        this.$m_contentHandler$ = new $oj$$19$$.$TableDataSourceContentHandler$(this, this.element[0], $data$$137$$);
      } else {
        if ($data$$137$$ instanceof $oj$$19$$.$TreeDataSource$) {
          this.$m_contentHandler$ = new $oj$$19$$.$TreeDataSourceContentHandler$(this, this.element[0], $data$$137$$);
        } else {
          throw "Invalid data";
        }
      }
    } else {
      this.$m_contentHandler$ = new $oj$$19$$.$StaticContentHandler$(this, this.element[0]);
    }
    this.$showStatusText$();
    this.$m_contentHandler$.$RenderContent$();
    this.$signalTaskEnd$();
  }, $UpdateActiveDescendant$:function($elem$$64$$) {
    this.element.attr("aria-activedescendant", $elem$$64$$.attr("id"));
  }, $SetAriaProperties$:function() {
    this.element.attr("aria-activedescendant", "");
    this.$_isMultipleSelection$() ? this.element.attr("aria-multiselectable", !0) : this.$_isSelectionEnabled$() && this.element.attr("aria-multiselectable", !1);
  }, $UnsetAriaProperties$:function() {
    this.element.removeAttr("aria-activedescendant").removeAttr("aria-multiselectable");
  }, $_buildList$:function() {
    var $container$$21$$, $accInfo$$1_status$$18$$;
    $container$$21$$ = this.$_getListContainer$();
    this.$SetAriaProperties$();
    $accInfo$$1_status$$18$$ = this.$_buildStatus$();
    $container$$21$$.append($accInfo$$1_status$$18$$);
    this.$m_status$ = $accInfo$$1_status$$18$$;
    $accInfo$$1_status$$18$$ = this.$_buildAccInfo$();
    $container$$21$$.append($accInfo$$1_status$$18$$);
    this.$m_accInfo$ = $accInfo$$1_status$$18$$;
    this.$_isTouchSupport$() && $container$$21$$.append(this.$_buildAccInstructionText$());
  }, $_buildStatus$:function() {
    var $root$$22$$ = $$$$18$$(document.createElement("div"));
    $root$$22$$.addClass("oj-listview-status-message oj-listview-status").attr({id:this.$_createSubId$("status"), role:"status"});
    return $root$$22$$;
  }, $_buildAccInfo$:function() {
    var $root$$23$$ = $$$$18$$(document.createElement("div"));
    $root$$23$$.addClass("oj-helper-hidden-accessible").attr({id:this.$_createSubId$("info"), role:"status"});
    return $root$$23$$;
  }, $_buildAccInstructionText$:function() {
    var $root$$24$$ = $$$$18$$(document.createElement("div"));
    $root$$24$$.addClass("oj-helper-hidden-accessible").attr({id:this.$_createSubId$("instr")});
    $root$$24$$.text(this.$ojContext$.$getTranslatedString$("accessibleReorderTouchInstructionText"));
    return $root$$24$$;
  }, $_setAccInfoText$:function($text$$21$$) {
    "" != $text$$21$$ && this.$m_accInfo$.text() != $text$$21$$ && this.$m_accInfo$.text($text$$21$$);
  }, $showStatusText$:function() {
    var $msg$$24$$ = this.$ojContext$.$getTranslatedString$("msgFetchingData");
    this.$m_status$.text($msg$$24$$).css("left", this.element.outerWidth() / 2 - this.$m_status$.outerWidth() / 2).show();
  }, $hideStatusText$:function() {
    this.$m_status$.hide();
  }, $getRootElement$:function() {
    return this.$_getListContainer$();
  }, $_getListContainer$:function() {
    null == this.$m_container$ && (this.$m_container$ = this.$_createListContainer$());
    return this.$m_container$;
  }, $_createListContainer$:function() {
    var $listContainer$$ = $$$$18$$(document.createElement("div"));
    $listContainer$$.addClass(this.$GetContainerStyleClass$()).addClass("oj-component");
    this.element.parent()[0].replaceChild($listContainer$$[0], this.element[0]);
    $listContainer$$.prepend(this.element);
    return $listContainer$$;
  }, $_getEmptyText$:function() {
    return this.$ojContext$.$getTranslatedString$("msgNoData");
  }, $_buildEmptyText$:function() {
    var $emptyText$$2$$, $empty$$3$$;
    $emptyText$$2$$ = this.$_getEmptyText$();
    $empty$$3$$ = document.createElement("li");
    $empty$$3$$.id = this.$_createSubId$("empty");
    $empty$$3$$.className = "oj-listview-no-data-message oj-listview-empty-text";
    $empty$$3$$.textContent = $emptyText$$2$$;
    return $empty$$3$$;
  }, $GetState$:function($expanded$$2_item$$42$$) {
    $expanded$$2_item$$42$$ = this.$getFocusItem$($expanded$$2_item$$42$$).attr("aria-expanded");
    return "true" == $expanded$$2_item$$42$$ ? this.$STATE_EXPANDED$ : "false" == $expanded$$2_item$$42$$ ? this.$STATE_COLLAPSED$ : this.$STATE_NONE$;
  }, $SetState$:function($item$$43$$, $state$$6$$) {
    var $expandable$$1$$ = this.$isExpandable$();
    $state$$6$$ == this.$STATE_EXPANDED$ ? (this.$getFocusItem$($item$$43$$).attr("aria-expanded", "true"), $expandable$$1$$ && $item$$43$$.removeClass("oj-collapsed").addClass("oj-expanded")) : $state$$6$$ == this.$STATE_COLLAPSED$ && (this.$getFocusItem$($item$$43$$).attr("aria-expanded", "false"), $expandable$$1$$ && $item$$43$$.removeClass("oj-expanded").addClass("oj-collapsed"));
  }, $_getItemOption$:function($name$$109_value$$249$$, $context$$97$$, $resolve$$32$$) {
    $name$$109_value$$249$$ = this.options.item[$name$$109_value$$249$$];
    return "function" == typeof $name$$109_value$$249$$ && $resolve$$32$$ ? $name$$109_value$$249$$.call(this, $context$$97$$) : $name$$109_value$$249$$;
  }, $_getItemRenderer$:function() {
    var $renderer$$11$$ = this.$_getItemOption$("renderer", null, !1);
    return "function" != typeof $renderer$$11$$ ? null : $renderer$$11$$;
  }, $itemInsertComplete$:function() {
  }, $itemRemoveComplete$:function($elem$$66$$) {
    var $prop$$70$$;
    if (null != $elem$$66$$ && $elem$$66$$.id && null != this.$m_keyElemMap$) {
      for ($prop$$70$$ in this.$m_keyElemMap$) {
        if (this.$m_keyElemMap$.hasOwnProperty($prop$$70$$) && this.$m_keyElemMap$[$prop$$70$$] === $elem$$66$$.id) {
          delete this.$m_keyElemMap$[$prop$$70$$];
          break;
        }
      }
    }
  }, $itemRenderComplete$:function($elem$$67$$, $context$$99$$) {
    var $clone$$3_selection$$17$$, $selectedItems$$2$$, $expanded$$3_i$$333_index$$174$$, $self$$134$$;
    null != this.$m_dndContext$ && this.$m_dndContext$.$itemRenderComplete$($elem$$67$$);
    this.$_disableAllTabbableElements$($elem$$67$$);
    if (this.$_isSelectionEnabled$()) {
      if ($clone$$3_selection$$17$$ = this.$GetOption$("selection"), this.$IsSelectable$($elem$$67$$)) {
        for ($expanded$$3_i$$333_index$$174$$ = 0;$expanded$$3_i$$333_index$$174$$ < $clone$$3_selection$$17$$.length;$expanded$$3_i$$333_index$$174$$++) {
          if ($clone$$3_selection$$17$$[$expanded$$3_i$$333_index$$174$$] == $context$$99$$.key && (this.$_applySelection$($elem$$67$$, $clone$$3_selection$$17$$[$expanded$$3_i$$333_index$$174$$]), !this.$_isMultipleSelection$())) {
            1 < $clone$$3_selection$$17$$.length && ($selectedItems$$2$$ = $$$$18$$(this.$FindElementByKey$($context$$99$$.key)), this.$SetOption$("selection", [$context$$99$$.key], {_context:{originalEvent:null, $internalSet$:!0, $extraData$:{items:$selectedItems$$2$$}}, changed:!0}));
            break;
          }
        }
      } else {
        if ($expanded$$3_i$$333_index$$174$$ = $clone$$3_selection$$17$$.indexOf($context$$99$$.key), -1 < $expanded$$3_i$$333_index$$174$$) {
          $clone$$3_selection$$17$$ = $clone$$3_selection$$17$$.slice(0);
          $clone$$3_selection$$17$$.splice($expanded$$3_i$$333_index$$174$$, 1);
          $selectedItems$$2$$ = Array($clone$$3_selection$$17$$.length);
          for ($expanded$$3_i$$333_index$$174$$ = 0;$expanded$$3_i$$333_index$$174$$ < $clone$$3_selection$$17$$.length;$expanded$$3_i$$333_index$$174$$++) {
            $selectedItems$$2$$[$expanded$$3_i$$333_index$$174$$] = this.$FindElementByKey$($clone$$3_selection$$17$$[$expanded$$3_i$$333_index$$174$$]);
          }
          this.$SetOption$("selection", $clone$$3_selection$$17$$, {_context:{originalEvent:null, $internalSet$:!0, $extraData$:{items:$$$$18$$($selectedItems$$2$$)}}, changed:!0});
        }
      }
    }
    this.$m_contentHandler$.$IsHierarchical$() && this.$GetState$($$$$18$$($elem$$67$$)) == this.$STATE_COLLAPSED$ && ($expanded$$3_i$$333_index$$174$$ = this.$GetOption$("expanded"), this.$_isExpandAll$() ? this.$ExpandItem$($$$$18$$($elem$$67$$), null, !1, null, !1, !1, !1) : Array.isArray($expanded$$3_i$$333_index$$174$$) && ($self$$134$$ = this, $$$$18$$.each($expanded$$3_i$$333_index$$174$$, function($index$$175$$, $value$$250$$) {
      $value$$250$$ == $context$$99$$.key && $self$$134$$.$ExpandItem$($$$$18$$($elem$$67$$), null, !1, null, !1, !1, !1);
    })));
    null != this.$m_active$ && $context$$99$$.key == this.$m_active$.key && null != this.$m_active$.elem && $elem$$67$$ != this.$m_active$.elem.get(0) && (this.$m_active$.elem = $$$$18$$($elem$$67$$));
  }, $renderComplete$:function() {
    var $current$$7_elem$$68_empty$$4$$;
    this.$hideStatusText$();
    $$$$18$$(document.getElementById(this.$_createSubId$("empty"))).remove();
    0 == this.element[0].childElementCount ? ($current$$7_elem$$68_empty$$4$$ = this.$_buildEmptyText$(), this.element.append($current$$7_elem$$68_empty$$4$$)) : (this.$m_items$ = null, $current$$7_elem$$68_empty$$4$$ = this.$GetOption$("currentItem"), null != $current$$7_elem$$68_empty$$4$$ && ($current$$7_elem$$68_empty$$4$$ = this.$FindElementByKey$($current$$7_elem$$68_empty$$4$$), null == $current$$7_elem$$68_empty$$4$$ ? this.$SetOption$("currentItem", null) : null != this.$m_active$ || this.$SkipFocus$($$$$18$$($current$$7_elem$$68_empty$$4$$)) || 
    this.$_activeAndFocus$($$$$18$$($current$$7_elem$$68_empty$$4$$), null)), this.$_getListContainer$().hasClass("oj-focus-ancestor") && null == this.$m_active$ && this.$_initFocus$());
    this.$Trigger$("ready", null, {});
  }, $restoreCurrentItem$:function() {
    var $current$$8_elem$$69$$ = this.$GetOption$("currentItem");
    null != $current$$8_elem$$69$$ && ($current$$8_elem$$69$$ = this.$FindElementByKey$($current$$8_elem$$69$$), null == $current$$8_elem$$69$$ || this.$SkipFocus$($$$$18$$($current$$8_elem$$69$$)) || this.$_activeAndFocus$($$$$18$$($current$$8_elem$$69$$), null));
  }, $ClearCache$:function() {
    this.$m_groupItems$ = this.$m_items$ = null;
  }, $notifyContextMenuGesture$:function($menu$$6$$, $event$$370$$, $eventType$$36$$) {
    var $launcher$$9_openOptions$$4_parent$$21$$;
    if (this.$IsNodeEditableOrClickable$($$$$18$$($event$$370$$.target))) {
      return!1;
    }
    $launcher$$9_openOptions$$4_parent$$21$$ = $$$$18$$($event$$370$$.target).closest("." + this.$getItemElementStyleClass$());
    0 < $launcher$$9_openOptions$$4_parent$$21$$.length && !this.$SkipFocus$($$$$18$$($launcher$$9_openOptions$$4_parent$$21$$[0])) && this.$_activeAndFocus$($$$$18$$($launcher$$9_openOptions$$4_parent$$21$$[0]), null);
    $launcher$$9_openOptions$$4_parent$$21$$ = this.element;
    null != this.$m_active$ && ($launcher$$9_openOptions$$4_parent$$21$$ = this.$m_active$.elem);
    $launcher$$9_openOptions$$4_parent$$21$$ = {launcher:$launcher$$9_openOptions$$4_parent$$21$$, initialFocus:"menu"};
    "keyboard" === $eventType$$36$$ && ($launcher$$9_openOptions$$4_parent$$21$$.position = {my:"start top", at:"start bottom", of:this.$m_active$.elem});
    null != this.$m_dndContext$ && this.$m_dndContext$.$_handleContextMenuBeforeOpen$($$$$18$$($menu$$6$$.element), $event$$370$$);
    this.$ojContext$.$_OpenContextMenu$($event$$370$$, $eventType$$36$$, $launcher$$9_openOptions$$4_parent$$21$$);
  }, $IsElementEditableOrClickable$:function($node$$73$$) {
    return null != $node$$73$$.prop("nodeName").match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/);
  }, $IsNodeEditableOrClickable$:function($node$$74$$) {
    for (;null != $node$$74$$ && $node$$74$$[0] != this.element[0] && "LI" != $node$$74$$.prop("nodeName");) {
      if (3 != $node$$74$$[0].nodeType) {
        var $tabIndex$$4$$ = $node$$74$$.attr("tabIndex"), $origTabIndex$$1$$ = $node$$74$$.attr("data-oj-tabindex");
        if (null != $tabIndex$$4$$ && 0 <= $tabIndex$$4$$ && !$node$$74$$.hasClass(this.$getFocusedElementStyleClass$()) || this.$IsElementEditableOrClickable$($node$$74$$) && (-1 != $tabIndex$$4$$ || -1 != $origTabIndex$$1$$)) {
          return!0;
        }
      }
      $node$$74$$ = $node$$74$$.parent();
    }
    return!1;
  }, $_disableAllTabbableElements$:function($element$$143$$) {
    var $tabIndex$$5$$;
    $$$$18$$($element$$143$$).find("a, input, select, textarea, button, object, .oj-component-initnode").each(function() {
      $$$$18$$(this).removeAttr("data-first").removeAttr("data-last");
      $tabIndex$$5$$ = parseInt($$$$18$$(this).attr("tabIndex"), 10);
      (isNaN($tabIndex$$5$$) || 0 <= $tabIndex$$5$$) && $$$$18$$(this).attr("tabIndex", -1).attr("data-tabmod", isNaN($tabIndex$$5$$) ? -1 : $tabIndex$$5$$);
    });
  }, $_enableAllTabbableElements$:function($elem$$70_elems$$8$$) {
    var $tabIndex$$6$$;
    $elem$$70_elems$$8$$ = $$$$18$$($elem$$70_elems$$8$$).find("[data-tabmod]").each(function() {
      $tabIndex$$6$$ = parseInt($$$$18$$(this).attr("data-tabmod"), 10);
      $$$$18$$(this).removeAttr("data-tabmod");
      -1 == $tabIndex$$6$$ ? $$$$18$$(this).removeAttr("tabIndex") : $$$$18$$(this).attr("tabIndex", $tabIndex$$6$$);
    });
    $elem$$70_elems$$8$$.first().attr("data-first", "true");
    $elem$$70_elems$$8$$.last().attr("data-last", "true");
  }, $_cleanupTabbableElementProperties$:function($elem$$71$$) {
    $$$$18$$($elem$$71$$).find("[data-tabmod]").removeAttr("tabIndex").removeAttr("data-tabmod").removeAttr("data-first").removeAttr("data-last");
  }, $SkipFocus$:function($item$$44$$) {
    return $item$$44$$.hasClass("oj-skipfocus");
  }, $HandleFocus$:function($event$$371$$) {
    this.$_getListContainer$().addClass("oj-focus-ancestor");
    null == this.$m_active$ ? this.$_isTouchSupport$() || this.$m_preActive$ || this.$_initFocus$($event$$371$$) : this.$m_preActive$ || this.$HighlightActive$();
  }, $_initFocus$:function($event$$372$$) {
    var $items$$2$$, $i$$334$$, $item$$46$$;
    $items$$2$$ = this.$_getItemsCache$();
    for ($i$$334$$ = 0;$i$$334$$ < $items$$2$$.length;$i$$334$$++) {
      if ($item$$46$$ = $$$$18$$($items$$2$$[$i$$334$$]), !this.$SkipFocus$($item$$46$$)) {
        this.$_activeAndFocus$($item$$46$$, $event$$372$$);
        break;
      }
    }
  }, $HandleFocusOut$:function($event$$373$$) {
    this.$HandleBlur$($event$$373$$);
  }, $HandleBlur$:function($event$$374$$) {
    null != $event$$374$$.relatedTarget && $$$$18$$.contains(this.element.get(0), $event$$374$$.relatedTarget) || (this.$_getListContainer$().removeClass("oj-focus-ancestor"), this.$UnhighlightActive$());
  }, $_handleMouseOut$:function($event$$375_item$$47$$) {
    $event$$375_item$$47$$ = this.$FindItem$($event$$375_item$$47$$.target);
    null != $event$$375_item$$47$$ && (this.$m_hoverItem$ = null, this.$_unhighlightElem$($event$$375_item$$47$$, "oj-hover"));
  }, $_handleMouseOver$:function($event$$376_item$$48$$) {
    this.$_recentTouch$() || ($event$$376_item$$48$$ = this.$FindItem$($event$$376_item$$48$$.target), null == $event$$376_item$$48$$ || this.$SkipFocus$($event$$376_item$$48$$) || (this.$m_hoverItem$ = $event$$376_item$$48$$, this.$_highlightElem$($event$$376_item$$48$$, "oj-hover")));
  }, $_recentTouch$:function() {
    return 500 > Date.now() - this.$_lastTouch$;
  }, $HandleKeyDown$:function($event$$377$$) {
    var $keyCode$$12_processed$$4$$, $current$$9$$;
    if (this.$isExpandable$() && ($keyCode$$12_processed$$4$$ = $event$$377$$.keyCode, $keyCode$$12_processed$$4$$ === this.$LEFT_KEY$ || $keyCode$$12_processed$$4$$ === this.$RIGHT_KEY$)) {
      if ($current$$9$$ = this.$m_active$.elem, $keyCode$$12_processed$$4$$ === this.$LEFT_KEY$) {
        if (this.$GetState$($current$$9$$) == this.$STATE_EXPANDED$) {
          this.$CollapseItem$($current$$9$$, $event$$377$$, !0, this.$m_active$.key, !0, !0);
          return;
        }
      } else {
        if (this.$GetState$($current$$9$$) == this.$STATE_COLLAPSED$) {
          this.$ExpandItem$($current$$9$$, $event$$377$$, !0, this.$m_active$.key, !0, !0, !0);
          return;
        }
      }
    }
    $keyCode$$12_processed$$4$$ = this.$HandleSelectionOrActiveKeyDown$($event$$377$$);
    null != this.$m_dndContext$ && ($keyCode$$12_processed$$4$$ = $keyCode$$12_processed$$4$$ || this.$m_dndContext$.$HandleKeyDown$($event$$377$$));
    !0 === $keyCode$$12_processed$$4$$ && $event$$377$$.preventDefault();
  }, $_handleMouseUpOrPanMove$:function($event$$378$$) {
    this.$m_preActiveItem$ && this.$_unhighlightElem$(this.$m_preActiveItem$, "oj-focus");
    null != this.$m_dndContext$ && this.$m_dndContext$.$_unsetDraggable$($$$$18$$($event$$378$$.target));
  }, $HandleMouseDownOrTouchStart$:function($event$$379_item$$49$$) {
    var $target$$114$$;
    this.$m_preActive$ = !0;
    $target$$114$$ = $$$$18$$($event$$379_item$$49$$.target);
    null != this.$m_dndContext$ && this.$m_dndContext$.$_setDraggable$($target$$114$$);
    $event$$379_item$$49$$ = this.$_findItem$($target$$114$$);
    null == $event$$379_item$$49$$ || 0 == $event$$379_item$$49$$.length || this.$SkipFocus$($event$$379_item$$49$$) || $target$$114$$.hasClass("oj-listview-drag-handle") || (this.$_getListContainer$().hasClass("oj-focus-ancestor") || this.$_getListContainer$().addClass("oj-focus-ancestor"), this.$m_preActiveItem$ = $event$$379_item$$49$$, this.$_highlightElem$($event$$379_item$$49$$, "oj-focus"));
  }, $HandleTouchEndOrCancel$:function($event$$380$$) {
    null != this.$m_preActiveItem$ && this.$_unhighlightElem$(this.$m_preActiveItem$, "oj-focus");
    this.$_lastTouch$ = Date.now();
    this.$_handleMouseOut$($event$$380$$);
  }, $HandleMouseClick$:function($event$$381$$) {
    var $collapseIconClass_item$$50$$, $expandIconClass$$, $groupItemClass$$, $target$$115$$;
    0 === $event$$381$$.button && ($collapseIconClass_item$$50$$ = this.$getCollapseIconStyleClass$(), $expandIconClass$$ = this.$getExpandIconStyleClass$(), $groupItemClass$$ = this.$getGroupItemStyleClass$(), $target$$115$$ = $$$$18$$($event$$381$$.target), $target$$115$$.hasClass($expandIconClass$$) ? (this.$_collapse$($event$$381$$), $event$$381$$.preventDefault()) : $target$$115$$.hasClass($collapseIconClass_item$$50$$) ? (this.$_expand$($event$$381$$), $event$$381$$.preventDefault()) : (this.$_isActionableMode$() && 
    null != this.$m_active$ && (this.$_setActionableMode$(!1), this.$_disableAllTabbableElements$(this.$m_active$.elem)), $collapseIconClass_item$$50$$ = this.$_findItem$($target$$115$$), null == $collapseIconClass_item$$50$$ || 0 == $collapseIconClass_item$$50$$.length || this.$SkipFocus$($collapseIconClass_item$$50$$) || (this.$_getListContainer$().hasClass("oj-focus-ancestor") || this.$_getListContainer$().addClass("oj-focus-ancestor"), this.$_isSelectionEnabled$() && this.$IsSelectable$($collapseIconClass_item$$50$$[0]) ? 
    this.$_isTouchSupport$() ? this.$_handleTouchSelection$($collapseIconClass_item$$50$$, $event$$381$$) : this.$HandleClickSelection$($collapseIconClass_item$$50$$, $event$$381$$) : this.$HandleClickActive$($collapseIconClass_item$$50$$, $event$$381$$), this.$isExpandable$() && $target$$115$$.closest("." + $groupItemClass$$) && (this.$GetState$($collapseIconClass_item$$50$$) == this.$STATE_COLLAPSED$ ? this.$_expand$($event$$381$$) : this.$GetState$($collapseIconClass_item$$50$$) == this.$STATE_EXPANDED$ && 
    this.$_collapse$($event$$381$$)))));
  }, $_isTouchSupport$:function() {
    return $oj$$19$$.$DomUtils$.$isTouchSupported$();
  }, $_ctrlEquivalent$:function($event$$382$$) {
    return $oj$$19$$.$DomUtils$.$isMetaKeyPressed$($event$$382$$);
  }, $_createSubId$:function($subId$$33$$) {
    return[this.element.attr("id"), $subId$$33$$].join(":");
  }, $FindItem$:function($elem$$72$$) {
    return $$$$18$$($elem$$72$$).closest("." + this.$getItemElementStyleClass$());
  }, $_isClickthroughDisabled$:function($elem$$73$$) {
    return $elem$$73$$.hasClass("oj-clickthrough-disabled") || $elem$$73$$.hasClass("oj-component-initnode") || $elem$$73$$.hasClass("oj-component");
  }, $_findItem$:function($current$$10_target$$116$$) {
    for (;0 < $current$$10_target$$116$$.length && !this.$_isClickthroughDisabled$($current$$10_target$$116$$);) {
      if ($current$$10_target$$116$$.hasClass(this.$getItemElementStyleClass$())) {
        return $current$$10_target$$116$$;
      }
      $current$$10_target$$116$$ = $current$$10_target$$116$$.parent();
    }
    return null;
  }, $_getListContainerBorderWidth$:function() {
    null == this.$m_borderWidth$ && (this.$m_borderWidth$ = parseInt(this.$_getListContainer$().css("border-top-width"), 10) + parseInt(this.$_getListContainer$().css("border-bottom-width"), 10));
    return this.$m_borderWidth$;
  }, $_scrollToVisible$:function($container$$22_elem$$74$$) {
    var $scrollTop$$15_top$$9$$, $height$$42$$, $containerScrollTop$$, $containerHeight$$, $headerTop$$, $headerHeight$$, $offset$$22$$ = 0;
    $scrollTop$$15_top$$9$$ = $container$$22_elem$$74$$.offsetTop;
    $height$$42$$ = $container$$22_elem$$74$$.offsetHeight;
    $container$$22_elem$$74$$ = this.$_getListContainer$()[0];
    $containerScrollTop$$ = $container$$22_elem$$74$$.scrollTop;
    $containerHeight$$ = $container$$22_elem$$74$$.offsetHeight;
    null != this.$m_groupItemToPin$ && ($headerTop$$ = parseInt(this.$m_groupItemToPin$.style.top, 10), $headerHeight$$ = $$$$18$$(this.$m_groupItemToPin$).outerHeight(), $scrollTop$$15_top$$9$$ <= $headerTop$$ && $headerTop$$ < $scrollTop$$15_top$$9$$ + $height$$42$$ ? $offset$$22$$ = ($height$$42$$ + $scrollTop$$15_top$$9$$ - $headerTop$$) / 2 : $scrollTop$$15_top$$9$$ >= $headerTop$$ && $scrollTop$$15_top$$9$$ < $headerTop$$ + $headerHeight$$ && ($offset$$22$$ = ($headerTop$$ + $headerHeight$$ - 
    $scrollTop$$15_top$$9$$) / 2));
    $scrollTop$$15_top$$9$$ >= $containerScrollTop$$ && $scrollTop$$15_top$$9$$ + $height$$42$$ <= $containerScrollTop$$ + $containerHeight$$ ? 0 < $offset$$22$$ && ($container$$22_elem$$74$$.scrollTop = $containerScrollTop$$ - $offset$$22$$) : ($scrollTop$$15_top$$9$$ = Math.max(0, Math.min($scrollTop$$15_top$$9$$ - $offset$$22$$, Math.abs($scrollTop$$15_top$$9$$ + $height$$42$$ - $containerHeight$$))), $scrollTop$$15_top$$9$$ > $containerScrollTop$$ && ($scrollTop$$15_top$$9$$ += this.$_getListContainerBorderWidth$()), 
    $container$$22_elem$$74$$.scrollTop = $scrollTop$$15_top$$9$$);
  }, $GetKey$:function($elem$$75$$) {
    return this.$m_contentHandler$.$GetKey$($elem$$75$$);
  }, $FindElementByKey$:function($key$$110$$) {
    var $id$$32$$;
    return null != this.$m_keyElemMap$ && ($id$$32$$ = this.$m_keyElemMap$[$key$$110$$], null != $id$$32$$) ? document.getElementById($id$$32$$) : this.$m_contentHandler$.$FindElementByKey$($key$$110$$);
  }, $IsArrowKey$:function($keyCode$$13$$) {
    return $keyCode$$13$$ == this.$UP_KEY$ || $keyCode$$13$$ == this.$DOWN_KEY$;
  }, $_getItemsCache$:function() {
    var $disclosureStyleClass$$, $selector$$27$$, $isGroup$$1$$;
    null == this.$m_items$ && ($disclosureStyleClass$$ = this.$getGroupCollapseStyleClass$(), $selector$$27$$ = "." + this.$getItemElementStyleClass$() + ":visible", this.$m_items$ = this.element.find($selector$$27$$).filter(function() {
      return($isGroup$$1$$ = $$$$18$$(this).parent().hasClass($disclosureStyleClass$$)) ? !$$$$18$$(this).parent().parent().hasClass("oj-collapsed") : !0;
    }));
    return this.$m_items$;
  }, $HandleArrowKeys$:function($keyCode$$14_next$$3$$, $isExtend$$2$$, $event$$383$$) {
    var $current$$11_currentIndex$$1$$, $processed$$5$$, $items$$3$$;
    if (!this.$m_contentHandler$.$IsReady$()) {
      return!0;
    }
    $current$$11_currentIndex$$1$$ = !$isExtend$$2$$ || this.$m_isNavigate$ ? this.$m_active$.elem : this.$m_selectionFrontier$;
    $processed$$5$$ = !1;
    $items$$3$$ = this.$_getItemsCache$();
    $current$$11_currentIndex$$1$$ = $items$$3$$.index($current$$11_currentIndex$$1$$);
    switch($keyCode$$14_next$$3$$) {
      case this.$UP_KEY$:
        $current$$11_currentIndex$$1$$--;
        if (0 <= $current$$11_currentIndex$$1$$) {
          for ($keyCode$$14_next$$3$$ = $$$$18$$($items$$3$$[$current$$11_currentIndex$$1$$]);this.$SkipFocus$($keyCode$$14_next$$3$$);) {
            $current$$11_currentIndex$$1$$--;
            if (0 > $current$$11_currentIndex$$1$$) {
              return!1;
            }
            $keyCode$$14_next$$3$$ = $$$$18$$($items$$3$$[$current$$11_currentIndex$$1$$]);
          }
          $isExtend$$2$$ ? (this.$_extendSelection$($keyCode$$14_next$$3$$, $event$$383$$), this.$m_isNavigate$ = !1) : (this.$_activeAndFocus$($keyCode$$14_next$$3$$, $event$$383$$), this.$m_isNavigate$ = !0);
        }
        $processed$$5$$ = !0;
        break;
      case this.$DOWN_KEY$:
        $current$$11_currentIndex$$1$$++;
        if ($current$$11_currentIndex$$1$$ < $items$$3$$.length) {
          for ($keyCode$$14_next$$3$$ = $$$$18$$($items$$3$$[$current$$11_currentIndex$$1$$]);this.$SkipFocus$($keyCode$$14_next$$3$$);) {
            $current$$11_currentIndex$$1$$++;
            if ($current$$11_currentIndex$$1$$ == $items$$3$$.length) {
              return!1;
            }
            $keyCode$$14_next$$3$$ = $$$$18$$($items$$3$$[$current$$11_currentIndex$$1$$]);
          }
          $isExtend$$2$$ ? (this.$_extendSelection$($keyCode$$14_next$$3$$, $event$$383$$), this.$m_isNavigate$ = !1) : (this.$_activeAndFocus$($keyCode$$14_next$$3$$, $event$$383$$), this.$m_isNavigate$ = !0);
        }
        $processed$$5$$ = !0;
    }
    return $processed$$5$$;
  }, $_isActionableMode$:function() {
    return "actionable" == this.$m_keyMode$;
  }, $_setActionableMode$:function($flag$$7$$) {
    this.$m_keyMode$ = $flag$$7$$ ? "actionable" : "navigation";
    $flag$$7$$ || this.element[0].focus();
  }, $GetFocusMode$:function() {
    return this.$FOCUS_MODE_ITEM$;
  }, $getFocusItem$:function($item$$51$$) {
    return $item$$51$$.hasClass(this.$getFocusedElementStyleClass$()) ? $item$$51$$ : $$$$18$$($item$$51$$.find("." + this.$getFocusedElementStyleClass$()).first());
  }, $_setTabIndex$:function($item$$52$$) {
    this.$getFocusItem$($item$$52$$).attr("tabIndex", 0);
  }, $_resetTabIndex$:function($item$$53$$) {
    var $removeAttr$$1$$;
    $removeAttr$$1$$ = !0;
    "presentation" === $item$$53$$.attr("role") && ($removeAttr$$1$$ = !1);
    $item$$53$$ = this.$getFocusItem$($item$$53$$);
    $removeAttr$$1$$ ? $item$$53$$.removeAttr("tabIndex") : $item$$53$$.attr("tabIndex", -1);
  }, $_focusItem$:function($previousItem$$1$$, $item$$54$$) {
    this.$FOCUS_MODE_ITEM$ === this.$FOCUS_MODE_ITEM$ ? (null != $previousItem$$1$$ && this.$_resetTabIndex$($previousItem$$1$$), this.$_setTabIndex$($item$$54$$), this.element.attr("tabIndex") && this.element.removeAttr("tabIndex")) : this.$UpdateActiveDescendant$($item$$54$$);
  }, $getSingleFocusableElement$:function($item$$55$$) {
    var $childElements$$1$$;
    $childElements$$1$$ = $item$$55$$.children("a, input, select, textarea, button");
    return 1 === $childElements$$1$$.length && 0 === $childElements$$1$$.first().find("a, input, select, textarea, button").length ? $childElements$$1$$.first() : $item$$55$$;
  }, $_setActive$:function($item$$56$$, $event$$384$$) {
    var $elem$$76_key$$111$$, $ui$$11$$, $active$$4_cancelled$$;
    null != $item$$56$$ ? ($elem$$76_key$$111$$ = $item$$56$$[0], $elem$$76_key$$111$$ = this.$GetKey$($elem$$76_key$$111$$), null == this.$m_active$ || $elem$$76_key$$111$$ != this.$m_active$.key ? ($ui$$11$$ = {key:$elem$$76_key$$111$$, item:$item$$56$$}, null != this.$m_active$ && ($ui$$11$$.previousKey = this.$m_active$.key, $ui$$11$$.previousItem = this.$m_active$.elem, null != this.$m_dndContext$ && this.$_isTouchSupport$() && this.$m_dndContext$.$_unsetDraggable$($ui$$11$$.previousItem)), 
    $active$$4_cancelled$$ = !this.$Trigger$("beforeCurrentItem", $event$$384$$, $ui$$11$$), $active$$4_cancelled$$ || (this.$m_active$ = $active$$4_cancelled$$ = {key:$elem$$76_key$$111$$, elem:$item$$56$$}, null != this.$m_dndContext$ && this.$_isTouchSupport$() && this.$m_dndContext$.$_setDraggable$($item$$56$$), this.$_focusItem$($ui$$11$$.previousItem, $item$$56$$), this.$SetOption$("currentItem", $elem$$76_key$$111$$, {_context:{originalEvent:$event$$384$$, $internalSet$:!0, $extraData$:{item:$item$$56$$}}, 
    changed:!0}))) : $elem$$76_key$$111$$ == this.$m_active$.key && (this.$m_active$ = $active$$4_cancelled$$ = {key:$elem$$76_key$$111$$, elem:$item$$56$$}, this.$_focusItem$(null, $item$$56$$))) : this.$m_active$ = null;
  }, $HighlightActive$:function($force$$1$$) {
    var $item$$57$$, $target$$117$$;
    null != this.$m_active$ && this.$_getListContainer$().hasClass("oj-focus-ancestor") && ($force$$1$$ = $force$$1$$ || !1, $item$$57$$ = this.$m_active$.elem, this.$_highlightElem$($item$$57$$, "oj-focus"), this.$FOCUS_MODE_ITEM$ === this.$FOCUS_MODE_ITEM$ && ($item$$57$$ = this.$getFocusItem$($item$$57$$), $target$$117$$ = document.activeElement, !$force$$1$$ && $item$$57$$.get(0).contains($target$$117$$) || $item$$57$$.get(0).focus()));
  }, $UnhighlightActive$:function() {
    null != this.$m_active$ && this.$_unhighlightElem$(this.$m_active$.elem, "oj-focus");
  }, $HandleClickActive$:function($item$$58$$, $event$$385$$) {
    this.$_activeAndFocus$($item$$58$$, $event$$385$$);
  }, $_activeAndFocus$:function($item$$59$$, $event$$386$$) {
    this.$_scrollToVisible$($item$$59$$[0]);
    this.$UnhighlightActive$();
    this.$_setActive$($item$$59$$, $event$$386$$);
    this.$HighlightActive$();
  }, $_isSelectionEnabled$:function() {
    return "none" != this.$GetOption$("selectionMode");
  }, $_isMultipleSelection$:function() {
    return "multiple" == this.$GetOption$("selectionMode");
  }, $IsSelectable$:function($item$$60$$) {
    $item$$60$$ = this.$getFocusItem$($$$$18$$($item$$60$$)).get(0);
    return $item$$60$$.hasAttribute("aria-selected");
  }, $_filterSelection$:function($selection$$18$$) {
    var $filtered$$3$$, $i$$335$$, $elem$$77$$;
    $filtered$$3$$ = [];
    for ($i$$335$$ = 0;$i$$335$$ < $selection$$18$$.length && ($elem$$77$$ = this.$FindElementByKey$($selection$$18$$[$i$$335$$]), null == $elem$$77$$ || !this.$IsSelectable$($elem$$77$$) || ($filtered$$3$$.push($selection$$18$$[$i$$335$$]), this.$_isMultipleSelection$()));$i$$335$$++) {
    }
    return $filtered$$3$$;
  }, $_unhighlightSelection$:function() {
    var $self$$135$$, $elem$$78$$;
    null != this.$m_keyElemMap$ && ($self$$135$$ = this, $$$$18$$.each(this.$GetOption$("selection"), function($index$$179$$, $value$$251$$) {
      $elem$$78$$ = $self$$135$$.$FindElementByKey$($value$$251$$);
      null != $elem$$78$$ && $self$$135$$.$_unhighlightElem$($elem$$78$$, "oj-selected");
    }));
  }, $_highlightElem$:function($elem$$79$$, $style$$4$$) {
    this.$HighlightUnhighlightElem$($elem$$79$$, $style$$4$$, !0);
  }, $_unhighlightElem$:function($elem$$80$$, $style$$5$$) {
    this.$HighlightUnhighlightElem$($elem$$80$$, $style$$5$$, !1);
  }, $HighlightUnhighlightElem$:function($elem$$81$$, $style$$6$$, $highlight$$) {
    var $group$$3$$;
    $elem$$81$$ = $$$$18$$($elem$$81$$);
    "oj-selected" == $style$$6$$ && this.$getFocusItem$($elem$$81$$).attr("aria-selected", $highlight$$ ? "true" : "false");
    $group$$3$$ = $elem$$81$$.children("." + this.$getGroupItemStyleClass$());
    0 < $group$$3$$.length && ($elem$$81$$ = $$$$18$$($group$$3$$[0]));
    $highlight$$ ? $elem$$81$$.addClass($style$$6$$) : $elem$$81$$.removeClass($style$$6$$);
  }, $HandleClickSelection$:function($item$$61$$, $event$$387$$) {
    var $ctrlKey$$7$$, $shiftKey$$5$$;
    this.$_scrollToVisible$($item$$61$$[0]);
    $ctrlKey$$7$$ = this.$_ctrlEquivalent$($event$$387$$);
    $shiftKey$$5$$ = $event$$387$$.shiftKey;
    this.$_isMultipleSelection$() ? $ctrlKey$$7$$ || $shiftKey$$5$$ ? !$ctrlKey$$7$$ && $shiftKey$$5$$ ? this.$_extendSelection$($item$$61$$, $event$$387$$) : this.$_augmentSelectionAndFocus$($item$$61$$, $event$$387$$) : this.$SelectAndFocus$($item$$61$$, $event$$387$$) : this.$SelectAndFocus$($item$$61$$, $event$$387$$);
  }, $_handleTouchSelection$:function($item$$62$$, $event$$388$$) {
    this.$_isMultipleSelection$() ? this.$_augmentSelectionAndFocus$($item$$62$$, $event$$388$$) : this.$SelectAndFocus$($item$$62$$, $event$$388$$);
  }, $_clearSelection$:function($updateOption$$) {
    this.$_unhighlightSelection$();
    $updateOption$$ && this.$SetOption$("selection", [], {_context:{originalEvent:null, $internalSet$:!0, $extraData$:{items:$$$$18$$()}}, changed:!0});
    this.$m_selectionFrontier$ = null;
  }, $SelectAndFocus$:function($item$$63$$, $event$$389$$) {
    this.$_clearSelection$(!1);
    this.$_augmentSelectionAndFocus$($item$$63$$, $event$$389$$, []);
  }, $_extendSelection$:function($item$$64$$, $event$$390$$) {
    var $current$$12$$;
    null != this.$m_active$ && ($current$$12$$ = this.$m_selectionFrontier$, $current$$12$$ != $item$$64$$ && (this.$_unhighlightElem$($item$$64$$, "oj-focus"), this.$_extendSelectionRange$(this.$m_active$.elem, $item$$64$$, $event$$390$$)));
  }, $_extendSelectionRange$:function($from$$1$$, $to$$1$$, $event$$391$$) {
    this.$_clearSelection$(!1);
    this.$m_selectionFrontier$ = $to$$1$$;
    this.$_highlightRange$($from$$1$$, $to$$1$$, $event$$391$$);
    this.$HighlightActive$();
  }, $_highlightRange$:function($start$$50_startIndex$$37_to$$2$$, $end$$14_from$$2_i$$336$$, $event$$392$$) {
    var $selection$$19$$, $selectedItems$$3$$, $items$$4$$, $endIndex$$15_item$$65$$, $key$$112$$;
    $selection$$19$$ = [];
    $selectedItems$$3$$ = [];
    $items$$4$$ = this.$_getItemsCache$();
    $start$$50_startIndex$$37_to$$2$$ = $items$$4$$.index($start$$50_startIndex$$37_to$$2$$);
    $endIndex$$15_item$$65$$ = $items$$4$$.index($end$$14_from$$2_i$$336$$);
    $start$$50_startIndex$$37_to$$2$$ > $endIndex$$15_item$$65$$ ? $end$$14_from$$2_i$$336$$ = $endIndex$$15_item$$65$$ : ($end$$14_from$$2_i$$336$$ = $start$$50_startIndex$$37_to$$2$$, $start$$50_startIndex$$37_to$$2$$ = $endIndex$$15_item$$65$$);
    for (;$end$$14_from$$2_i$$336$$ <= $start$$50_startIndex$$37_to$$2$$;$end$$14_from$$2_i$$336$$++) {
      $endIndex$$15_item$$65$$ = $items$$4$$[$end$$14_from$$2_i$$336$$], this.$IsSelectable$($endIndex$$15_item$$65$$) && ($key$$112$$ = this.$m_contentHandler$.$GetKey$($endIndex$$15_item$$65$$), this.$_applySelection$($endIndex$$15_item$$65$$, $key$$112$$), $selection$$19$$.push($key$$112$$), $selectedItems$$3$$.push($endIndex$$15_item$$65$$));
    }
    this.$SetOption$("selection", $selection$$19$$, {_context:{originalEvent:$event$$392$$, $internalSet$:!0, $extraData$:{items:$$$$18$$($selectedItems$$3$$)}}, changed:!0});
  }, $_applySelection$:function($element$$144$$, $key$$113$$) {
    null == this.$m_keyElemMap$ && (this.$m_keyElemMap$ = {});
    this.$m_keyElemMap$[$key$$113$$] = $$$$18$$($element$$144$$).attr("id");
    this.$_highlightElem$($element$$144$$, "oj-selected");
  }, $_augmentSelectionAndFocus$:function($item$$66_selectedItems$$4$$, $event$$393$$, $selection$$20$$) {
    var $i$$337_key$$114$$, $index$$180$$;
    $i$$337_key$$114$$ = this.$GetKey$($item$$66_selectedItems$$4$$[0]);
    void 0 == $selection$$20$$ && ($selection$$20$$ = this.$GetOption$("selection").slice(0));
    this.$UnhighlightActive$();
    this.$_setActive$($item$$66_selectedItems$$4$$, $event$$393$$);
    this.$HighlightActive$();
    if (null == this.$m_active$ || this.$m_active$.elem.get(0) != $item$$66_selectedItems$$4$$.get(0)) {
      null != $selection$$20$$ && 0 == $selection$$20$$.length && this.$SetOption$("selection", $selection$$20$$, {_context:{originalEvent:$event$$393$$, $internalSet$:!0, $extraData$:{items:$$$$18$$([])}}, changed:!0});
    } else {
      $index$$180$$ = $selection$$20$$.indexOf($i$$337_key$$114$$);
      -1 < $index$$180$$ ? (this.$_unhighlightElem$($item$$66_selectedItems$$4$$, "oj-selected"), $selection$$20$$.splice($index$$180$$, 1)) : (this.$m_selectionFrontier$ = $item$$66_selectedItems$$4$$, this.$_applySelection$($item$$66_selectedItems$$4$$, $i$$337_key$$114$$), $selection$$20$$.push($i$$337_key$$114$$));
      $item$$66_selectedItems$$4$$ = Array($selection$$20$$.length);
      for ($i$$337_key$$114$$ = 0;$i$$337_key$$114$$ < $selection$$20$$.length;$i$$337_key$$114$$++) {
        $item$$66_selectedItems$$4$$[$i$$337_key$$114$$] = this.$FindElementByKey$($selection$$20$$[$i$$337_key$$114$$]);
      }
      this.$SetOption$("selection", $selection$$20$$, {_context:{originalEvent:$event$$393$$, $internalSet$:!0, $extraData$:{items:$$$$18$$($item$$66_selectedItems$$4$$)}}, changed:!0});
    }
  }, $ToggleSelection$:function($event$$394$$, $keepCurrentSelection_selectedItems$$5$$, $i$$338_skipIfNotSelected$$) {
    var $selection$$21$$, $item$$67$$, $key$$115$$, $index$$181$$;
    $selection$$21$$ = this.$GetOption$("selection").slice(0);
    $item$$67$$ = this.$m_active$.elem;
    $key$$115$$ = this.$m_active$.key;
    $index$$181$$ = $selection$$21$$.indexOf($key$$115$$);
    if (-1 < $index$$181$$) {
      if ($i$$338_skipIfNotSelected$$) {
        return;
      }
      this.$_unhighlightElem$($item$$67$$, "oj-selected");
      $selection$$21$$.splice($index$$181$$, 1);
      0 == $selection$$21$$.length && (this.$m_selectionFrontier$ = null);
    } else {
      this.$IsSelectable$($item$$67$$[0]) && ($keepCurrentSelection_selectedItems$$5$$ || (this.$_clearSelection$(!1), $selection$$21$$.length = 0), this.$m_selectionFrontier$ = $item$$67$$, this.$_applySelection$($item$$67$$, $key$$115$$), $selection$$21$$.push($key$$115$$));
    }
    $keepCurrentSelection_selectedItems$$5$$ = Array($selection$$21$$.length);
    for ($i$$338_skipIfNotSelected$$ = 0;$i$$338_skipIfNotSelected$$ < $selection$$21$$.length;$i$$338_skipIfNotSelected$$++) {
      $keepCurrentSelection_selectedItems$$5$$[$i$$338_skipIfNotSelected$$] = this.$FindElementByKey$($selection$$21$$[$i$$338_skipIfNotSelected$$]);
    }
    this.$SetOption$("selection", $selection$$21$$, {_context:{originalEvent:$event$$394$$, $internalSet$:!0, $extraData$:{items:$$$$18$$($keepCurrentSelection_selectedItems$$5$$)}}, changed:!0});
  }, $HandleSelectionOrActiveKeyDown$:function($event$$395$$) {
    var $first$$6_keyCode$$15$$, $ctrlKey$$8_current$$13_last$$, $shiftKey$$6$$, $processed$$6$$ = !1;
    if (null == this.$m_active$) {
      return!1;
    }
    $first$$6_keyCode$$15$$ = $event$$395$$.keyCode;
    $ctrlKey$$8_current$$13_last$$ = this.$m_active$.elem;
    this.$_isActionableMode$() ? $first$$6_keyCode$$15$$ == this.$ESC_KEY$ ? (this.$_setActionableMode$(!1), this.$_disableAllTabbableElements$($ctrlKey$$8_current$$13_last$$), this.$HighlightActive$(!0), $processed$$6$$ = !0) : $first$$6_keyCode$$15$$ === this.$TAB_KEY$ && ($first$$6_keyCode$$15$$ = $ctrlKey$$8_current$$13_last$$.find("[data-first]"), $ctrlKey$$8_current$$13_last$$ = $ctrlKey$$8_current$$13_last$$.find("[data-last]"), $event$$395$$.shiftKey ? 0 < $first$$6_keyCode$$15$$.length && 
    0 < $ctrlKey$$8_current$$13_last$$.length && $first$$6_keyCode$$15$$ != $ctrlKey$$8_current$$13_last$$ && $event$$395$$.target == $first$$6_keyCode$$15$$[0] && ($ctrlKey$$8_current$$13_last$$[0].focus(), $processed$$6$$ = !0) : 0 < $first$$6_keyCode$$15$$.length && 0 < $ctrlKey$$8_current$$13_last$$.length && $first$$6_keyCode$$15$$ != $ctrlKey$$8_current$$13_last$$ && $event$$395$$.target == $ctrlKey$$8_current$$13_last$$[0] && ($first$$6_keyCode$$15$$[0].focus(), $processed$$6$$ = !0)) : $first$$6_keyCode$$15$$ == 
    this.$F2_KEY$ ? (this.$_enableAllTabbableElements$($ctrlKey$$8_current$$13_last$$), $first$$6_keyCode$$15$$ = $ctrlKey$$8_current$$13_last$$.find("[data-first]"), 0 < $first$$6_keyCode$$15$$.length && ($first$$6_keyCode$$15$$[0].focus(), this.$_setActionableMode$(!0))) : $first$$6_keyCode$$15$$ == this.$SPACE_KEY$ && this.$_isSelectionEnabled$() ? ($ctrlKey$$8_current$$13_last$$ = this.$_ctrlEquivalent$($event$$395$$), ($shiftKey$$6$$ = $event$$395$$.shiftKey) && !$ctrlKey$$8_current$$13_last$$ && 
    null != this.$m_selectionFrontier$ && this.$_isMultipleSelection$() ? this.$_extendSelectionRange$(this.$m_selectionFrontier$, this.$m_active$.elem, $event$$395$$) : this.$ToggleSelection$($event$$395$$, $ctrlKey$$8_current$$13_last$$ && !$shiftKey$$6$$ && this.$_isMultipleSelection$(), !1), $processed$$6$$ = !0) : $first$$6_keyCode$$15$$ == this.$ENTER_KEY$ && this.$_isSelectionEnabled$() ? this.$ToggleSelection$($event$$395$$, !1, !0) : this.$IsArrowKey$($first$$6_keyCode$$15$$) && ($ctrlKey$$8_current$$13_last$$ = 
    this.$_ctrlEquivalent$($event$$395$$), $shiftKey$$6$$ = $event$$395$$.shiftKey, $ctrlKey$$8_current$$13_last$$ || ($processed$$6$$ = this.$HandleArrowKeys$($first$$6_keyCode$$15$$, $shiftKey$$6$$ && this.$_isSelectionEnabled$() && this.$_isMultipleSelection$(), $event$$395$$)));
    return $processed$$6$$;
  }, $isExpandable$:function() {
    return "none" != this.$GetOption$("drillMode");
  }, $_isExpandAll$:function() {
    var $expanded$$4$$ = this.$GetOption$("expanded");
    if ("auto" === $expanded$$4$$) {
      if (!this.$isExpandable$()) {
        return!0;
      }
    } else {
      if ("all" === $expanded$$4$$) {
        return!0;
      }
    }
    return!1;
  }, $expandKey$:function($key$$116$$, $beforeVetoable$$, $fireBefore$$, $fireAfter$$) {
    var $item$$68$$ = this.$FindElementByKey$($key$$116$$);
    null != $item$$68$$ && this.$ExpandItem$($$$$18$$($item$$68$$), null, !1, $key$$116$$, $beforeVetoable$$, $fireAfter$$, $fireBefore$$);
  }, $_expand$:function($event$$396$$) {
    var $item$$69$$ = this.$FindItem$($event$$396$$.target);
    null != $item$$69$$ && 0 < $item$$69$$.length && this.$ExpandItem$($item$$69$$, $event$$396$$, !0, null, !0, !0, !0);
  }, $ExpandItem$:function($item$$70$$, $event$$397$$, $animate$$1$$, $cancelled$$1_key$$117$$, $beforeVetoable$$1$$, $fireEvent$$1$$, $fireBeforeEvent$$) {
    var $ui$$13$$;
    if (this.$GetState$($item$$70$$) == this.$STATE_COLLAPSED$) {
      null == $cancelled$$1_key$$117$$ && ($cancelled$$1_key$$117$$ = this.$GetKey$($item$$70$$[0]));
      $ui$$13$$ = {item:$item$$70$$, key:$cancelled$$1_key$$117$$};
      if ($fireBeforeEvent$$ && ($cancelled$$1_key$$117$$ = !this.$Trigger$("beforeExpand", $event$$397$$, $ui$$13$$)) && $beforeVetoable$$1$$) {
        return;
      }
      this.$signalTaskStart$();
      this.$m_contentHandler$.$Expand$($item$$70$$, function($groupItem$$4$$) {
        this.$_expandSuccess$($groupItem$$4$$, $animate$$1$$, $event$$397$$, $ui$$13$$, $fireEvent$$1$$);
      }.bind(this));
      this.$m_items$ = null;
      null != $event$$397$$ && $event$$397$$.stopPropagation();
      this.$signalTaskEnd$();
    }
  }, $_expandSuccess$:function($groupItem$$5_item$$71$$, $animate$$2_animationPromise$$, $event$$398$$, $ui$$14$$, $fireEvent$$2$$) {
    var $collapseClass$$2$$, $expandClass$$, $self$$136$$ = this;
    this.$signalTaskStart$();
    $animate$$2_animationPromise$$ = this.$AnimateExpand$($$$$18$$($groupItem$$5_item$$71$$), $animate$$2_animationPromise$$, $event$$398$$);
    $groupItem$$5_item$$71$$ = $groupItem$$5_item$$71$$.parentNode;
    $groupItem$$5_item$$71$$ = $$$$18$$($groupItem$$5_item$$71$$);
    this.$SetState$($groupItem$$5_item$$71$$, this.$STATE_EXPANDED$);
    $collapseClass$$2$$ = this.$getCollapseIconStyleClass$();
    $expandClass$$ = this.$getExpandIconStyleClass$();
    $groupItem$$5_item$$71$$.children("." + this.$getGroupItemStyleClass$()).find("." + $collapseClass$$2$$).removeClass($collapseClass$$2$$).addClass($expandClass$$);
    $fireEvent$$2$$ && $animate$$2_animationPromise$$.then(function() {
      $self$$136$$.$Trigger$("expand", $event$$398$$, $ui$$14$$);
    });
    this.$signalTaskEnd$();
  }, $_adjustAncestorsMaxHeight$:function($groupItem$$6$$, $delta$$6$$) {
    var $maxHeight$$;
    $groupItem$$6$$.parentsUntil("ul.oj-component-initnode", "ul." + this.$getGroupStyleClass$()).each(function() {
      $maxHeight$$ = parseInt($$$$18$$(this).css("maxHeight"), 10);
      0 < $maxHeight$$ && $$$$18$$(this).css("maxHeight", $maxHeight$$ + $delta$$6$$ + "px");
    });
  }, $AnimateExpand$:function($groupItem$$7$$, $animate$$3$$) {
    var $totalHeight$$2$$ = 0, $animationPromise$$1$$, $animationResolve$$;
    $animationPromise$$1$$ = new Promise(function($resolve$$33$$) {
      $animationResolve$$ = $resolve$$33$$;
    });
    $animate$$3$$ ? (this.$signalTaskStart$(), $groupItem$$7$$.children().each(function() {
      $totalHeight$$2$$ += $$$$18$$(this).outerHeight(!0);
    }), this.$_isTouchSupport$() && this.$_adjustAncestorsMaxHeight$($groupItem$$7$$, $totalHeight$$2$$), null == this.$m_expandTransitionEndListener$ && (this.$m_expandTransitionEndListener$ = this.$_handleExpandTransitionEnd$.bind(this)), $groupItem$$7$$.css("maxHeight", "0px"), $groupItem$$7$$.on("transitionend", {animationResolve:$animationResolve$$}, this.$m_expandTransitionEndListener$), this.$signalTaskStart$(), requestAnimationFrame(function() {
      $groupItem$$7$$.css("maxHeight", $totalHeight$$2$$ + "px");
    }), this.$signalTaskEnd$()) : (this.$_isTouchSupport$() ? ($groupItem$$7$$.children().each(function() {
      $totalHeight$$2$$ += $$$$18$$(this).outerHeight(!0);
    }), $groupItem$$7$$.css("maxHeight", $totalHeight$$2$$ + "px"), this.$_adjustAncestorsMaxHeight$($groupItem$$7$$, $totalHeight$$2$$)) : $groupItem$$7$$.css("maxHeight", ""), this.$AnimateExpandComplete$($groupItem$$7$$), $animationResolve$$(null));
    return $animationPromise$$1$$;
  }, $_handleExpandTransitionEnd$:function($event$$400$$) {
    var $groupItem$$8$$;
    $groupItem$$8$$ = $$$$18$$($event$$400$$.target);
    $groupItem$$8$$.off("transitionend", this.$m_expandTransitionEndListener$);
    this.$_isTouchSupport$() || $groupItem$$8$$.css("maxHeight", "");
    this.$AnimateExpandComplete$($groupItem$$8$$);
    (0,$event$$400$$.data.animationResolve)(null);
    this.$signalTaskEnd$();
  }, $AnimateExpandComplete$:function($groupItem$$9$$) {
    $groupItem$$9$$.removeClass(this.$getGroupCollapseStyleClass$()).addClass(this.$getGroupExpandStyleClass$());
  }, $collapseKey$:function($key$$119$$, $fireBefore$$1$$, $fireAfter$$1$$) {
    var $item$$73$$ = this.$FindElementByKey$($key$$119$$);
    null != $item$$73$$ && this.$CollapseItem$($$$$18$$($item$$73$$), null, !1, $key$$119$$, $fireBefore$$1$$, $fireAfter$$1$$);
  }, $_collapse$:function($event$$401$$) {
    var $item$$74$$ = this.$FindItem$($event$$401$$.target);
    null != $item$$74$$ && 0 < $item$$74$$.length && this.$CollapseItem$($item$$74$$, $event$$401$$, !0, null, !0, !0);
  }, $CollapseItem$:function($item$$75$$, $event$$402$$, $animate$$4_collapseClass$$3$$, $animationPromise$$2_cancelled$$2_key$$120$$, $beforeVetoable$$2_expandClass$$1$$, $fireEvent$$3$$) {
    var $ui$$15$$, $self$$137$$ = this;
    this.$GetState$($item$$75$$) == this.$STATE_EXPANDED$ && (null == $animationPromise$$2_cancelled$$2_key$$120$$ && ($animationPromise$$2_cancelled$$2_key$$120$$ = this.$GetKey$($item$$75$$[0])), $ui$$15$$ = {item:$item$$75$$, key:$animationPromise$$2_cancelled$$2_key$$120$$}, $animationPromise$$2_cancelled$$2_key$$120$$ = !this.$Trigger$("beforeCollapse", $event$$402$$, $ui$$15$$), $animationPromise$$2_cancelled$$2_key$$120$$ && $beforeVetoable$$2_expandClass$$1$$ || (this.$signalTaskStart$(), 
    $animationPromise$$2_cancelled$$2_key$$120$$ = this.$AnimateCollapse$($item$$75$$, $animate$$4_collapseClass$$3$$, $event$$402$$), this.$SetState$($item$$75$$, this.$STATE_COLLAPSED$), $animate$$4_collapseClass$$3$$ = this.$getCollapseIconStyleClass$(), $beforeVetoable$$2_expandClass$$1$$ = this.$getExpandIconStyleClass$(), $item$$75$$.find("." + $beforeVetoable$$2_expandClass$$1$$).first().removeClass($beforeVetoable$$2_expandClass$$1$$).addClass($animate$$4_collapseClass$$3$$), this.$m_items$ = 
    null, null != $event$$402$$ && $event$$402$$.stopPropagation(), $fireEvent$$3$$ && $animationPromise$$2_cancelled$$2_key$$120$$.then(function() {
      $self$$137$$.$Trigger$("collapse", $event$$402$$, $ui$$15$$);
    }), this.$signalTaskEnd$()));
  }, $AnimateCollapse$:function($item$$76$$, $animate$$5$$) {
    var $totalHeight$$3$$ = 0, $groupItem$$10$$, $animationPromise$$3$$, $animationResolve$$2$$, $self$$138$$ = this;
    $animationPromise$$3$$ = new Promise(function($resolve$$34$$) {
      $animationResolve$$2$$ = $resolve$$34$$;
    });
    $groupItem$$10$$ = $item$$76$$.children("ul").first();
    $animate$$5$$ ? (this.$signalTaskStart$(), null == this.$m_collapseTransitionEndListener$ && (this.$m_collapseTransitionEndListener$ = this.$_handleCollapseTransitionEnd$.bind(this)), $groupItem$$10$$.children().each(function() {
      $totalHeight$$3$$ += $$$$18$$(this).outerHeight();
    }), $groupItem$$10$$.css("transition-property", "none"), $groupItem$$10$$.css("maxHeight", $totalHeight$$3$$ + "px"), $groupItem$$10$$.css("transition-property", ""), $groupItem$$10$$.on("transitionend", {animationResolve:$animationResolve$$2$$}, this.$m_collapseTransitionEndListener$), setTimeout(function() {
      $self$$138$$.$signalTaskStart$();
      $groupItem$$10$$.css("maxHeight", "0px");
      $self$$138$$.$signalTaskEnd$();
    }, 100)) : ($groupItem$$10$$.css("maxHeight", "0px"), this.$AnimateCollapseComplete$($item$$76$$), $animationResolve$$2$$(null));
    return $animationPromise$$3$$;
  }, $_handleCollapseTransitionEnd$:function($event$$404$$) {
    var $groupItem$$11$$;
    $groupItem$$11$$ = $$$$18$$($event$$404$$.target);
    $groupItem$$11$$.off("transitionend", this.$m_collapseTransitionEndListener$);
    this.$AnimateCollapseComplete$($groupItem$$11$$);
    (0,$event$$404$$.data.animationResolve)(null);
    this.$signalTaskEnd$();
  }, $AnimateCollapseComplete$:function($groupItem$$12$$) {
    $groupItem$$12$$.removeClass(this.$getGroupExpandStyleClass$()).addClass(this.$getGroupCollapseStyleClass$());
    null != this.$m_contentHandler$ && this.$m_contentHandler$.$Collapse$($groupItem$$12$$);
  }, $_collapseAll$:function() {
    var $self$$139$$;
    this.$signalTaskStart$();
    $self$$139$$ = this;
    this.$_getItemsCache$().each(function() {
      $self$$139$$.$CollapseItem$($$$$18$$(this), null, !1, null, !1, !1);
    });
    this.$signalTaskEnd$();
  }, getExpanded:function() {
    var $expanded$$7$$, $self$$140$$, $item$$78$$;
    $expanded$$7$$ = [];
    $self$$140$$ = this;
    this.$_getItemsCache$().each(function() {
      $item$$78$$ = $$$$18$$(this);
      $self$$140$$.$GetState$($item$$78$$) == $self$$140$$.$STATE_EXPANDED$ && $expanded$$7$$.push($self$$140$$.$GetKey$($item$$78$$[0]));
    });
    return $expanded$$7$$;
  }, $getWidgetConstructor$:function() {
    return $oj$$19$$.Components.$getWidgetConstructor$(this.element);
  }, $GetContainerStyleClass$:function() {
    return this.$_isTouchSupport$() ? "oj-listview oj-listview-container-touch" : "oj-listview oj-listview-container";
  }, $GetStyleClass$:function() {
    return "oj-listview-element";
  }, $getItemStyleClass$:function() {
    return "oj-listview-item";
  }, $getFocusedElementStyleClass$:function() {
    return "oj-listview-focused-element";
  }, $getItemElementStyleClass$:function() {
    return "oj-listview-item-element";
  }, $getGroupItemStyleClass$:function() {
    return "oj-listview-group-item";
  }, $getGroupStyleClass$:function() {
    return "oj-listview-group";
  }, $getGroupExpandStyleClass$:function() {
    return "oj-listview-collapsible-transition";
  }, $getGroupCollapseStyleClass$:function() {
    return this.$getGroupExpandStyleClass$();
  }, $getCollapseIconStyleClass$:function() {
    return "oj-listview-collapse-icon";
  }, $getExpandIconStyleClass$:function() {
    return "oj-listview-expand-icon";
  }, $getEmptyTextStyleClass$:function() {
    return "oj-listview-no-data-message";
  }, $getDepthStyleClass$:function() {
    return "";
  }, $_registerScrollHandler$:function() {
    var $self$$141$$ = this;
    this.$ojContext$._off(this.$_getListContainer$(), "scroll");
    this.$_isPinGroupHeader$() && this.$ojContext$._on(this.$_getListContainer$(), {scroll:function() {
      $self$$141$$.$_handlePinGroupHeader$();
    }});
  }, $_isPinGroupHeader$:function() {
    return "static" != this.$GetOption$("groupHeaderPosition");
  }, $_getGroupItemsCache$:function() {
    var $selector$$29$$;
    null == this.$m_groupItems$ && ($selector$$29$$ = "." + this.$getGroupItemStyleClass$() + ":visible", this.$m_groupItems$ = this.element.find($selector$$29$$).filter(function() {
      return!$$$$18$$(this).parent().hasClass("oj-collapsed") && 0 < $$$$18$$(this).next().children().length ? !0 : !1;
    }));
    return this.$m_groupItems$;
  }, $_unpinGroupItem$:function($groupItem$$13$$) {
    $groupItem$$13$$.style.position = "static";
    $groupItem$$13$$.style.top = "auto";
    $groupItem$$13$$.style.width = "auto";
  }, $_getNextGroupItem$:function($groupItem$$14_index$$184$$) {
    var $groupItems$$2$$;
    $groupItems$$2$$ = this.$_getGroupItemsCache$();
    $groupItem$$14_index$$184$$ = $groupItems$$2$$.index($groupItem$$14_index$$184$$);
    return-1 < $groupItem$$14_index$$184$$ && $groupItem$$14_index$$184$$ < $groupItems$$2$$.length - 1 ? $groupItems$$2$$[$groupItem$$14_index$$184$$ + 1] : null;
  }, $_pinGroupItem$:function($groupItem$$15$$, $scrollTop$$16$$) {
    var $width$$41$$, $height$$43$$, $next$$4$$;
    $width$$41$$ = $groupItem$$15$$.offsetWidth;
    $height$$43$$ = $groupItem$$15$$.offsetHeight;
    $next$$4$$ = this.$_getNextGroupItem$($groupItem$$15$$);
    null != $next$$4$$ && $next$$4$$.offsetTop <= $scrollTop$$16$$ + $height$$43$$ + 5 && ($scrollTop$$16$$ -= $height$$43$$);
    $groupItem$$15$$.style.position = "absolute";
    $groupItem$$15$$.style.top = $scrollTop$$16$$ + "px";
    $groupItem$$15$$.style.width = $width$$41$$ + "px";
  }, $_handlePinGroupHeader$:function() {
    var $scrollTop$$17$$, $groupItemToPin_next$$5$$, $groupItems$$3$$, $pinHeaderHeight$$, $i$$339$$, $groupItem$$16$$, $top$$10$$, $bottom$$3$$;
    $scrollTop$$17$$ = this.$_getListContainer$().get(0).scrollTop;
    if (null != this.$m_groupItemToPin$ && 0 == $scrollTop$$17$$) {
      this.$_unpinGroupItem$(this.$m_groupItemToPin$), this.$m_groupItemToPin$ = null;
    } else {
      $groupItems$$3$$ = this.$_getGroupItemsCache$();
      $pinHeaderHeight$$ = 0;
      null != this.$m_groupItemToPin$ && ($pinHeaderHeight$$ = this.$m_groupItemToPin$.offsetHeight);
      for ($i$$339$$ = 0;$i$$339$$ < $groupItems$$3$$.length;$i$$339$$++) {
        if ($groupItem$$16$$ = $groupItems$$3$$[$i$$339$$], this.$m_groupItemToPin$ != $groupItem$$16$$ && ($top$$10$$ = $groupItems$$3$$[$i$$339$$].offsetTop, $bottom$$3$$ = $top$$10$$ + $groupItem$$16$$.parentNode.offsetHeight, $top$$10$$ < $scrollTop$$17$$ && $bottom$$3$$ > $scrollTop$$17$$ + $pinHeaderHeight$$)) {
          $groupItemToPin_next$$5$$ = $groupItem$$16$$;
          break;
        }
      }
      null != $groupItemToPin_next$$5$$ && $groupItemToPin_next$$5$$ != this.$m_groupItemToPin$ ? (null != this.$m_groupItemToPin$ && this.$_unpinGroupItem$(this.$m_groupItemToPin$), this.$_pinGroupItem$($groupItemToPin_next$$5$$, $scrollTop$$17$$), this.$m_groupItemToPin$ = $groupItemToPin_next$$5$$) : null != this.$m_groupItemToPin$ && ($groupItemToPin_next$$5$$ = this.$_getNextGroupItem$(this.$m_groupItemToPin$), this.$m_groupItemToPin$.style.top = null != $groupItemToPin_next$$5$$ && $groupItemToPin_next$$5$$.offsetTop <= 
      $scrollTop$$17$$ + $pinHeaderHeight$$ ? $groupItemToPin_next$$5$$.offsetTop - $pinHeaderHeight$$ + "px" : $scrollTop$$17$$ + "px");
    }
  }, $_scrollToGroupHeader$:function($groupHeader$$) {
    var $container$$24$$, $currentScrollTop$$;
    $container$$24$$ = this.$_getListContainer$().get(0);
    $currentScrollTop$$ = $container$$24$$.scrollTop;
    null != this.$m_groupItemToPin$ && (this.$_unpinGroupItem$(this.$m_groupItemToPin$), this.$m_groupItemToPin$ = null);
    $container$$24$$.scrollTop = $groupHeader$$.offsetTop;
    this.$_isPinGroupHeader$() && $currentScrollTop$$ == $container$$24$$.scrollTop && this.$_handlePinGroupHeader$();
    this.$_setFirstFocusableItemInGroupCurrent$($groupHeader$$);
  }, $_setFirstFocusableItemInGroupCurrent$:function($groupHeader$$1$$) {
    var $self$$142$$ = this, $item$$79$$;
    $$$$18$$($groupHeader$$1$$).next().children().each(function() {
      $item$$79$$ = $$$$18$$(this);
      if (!$self$$142$$.$SkipFocus$($item$$79$$)) {
        return $self$$142$$.$SetOption$("currentItem", this.key), !1;
      }
    });
  }});
  $goog$exportPath_$$("_ojListView", $oj$$19$$.$_ojListView$, $oj$$19$$);
  $oj$$19$$.$__registerWidget$("oj.ojListView", $$$$18$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{currentItem:null, data:null, dnd:{drag:null, drop:null, reorder:{items:"disabled"}}, drillMode:"collapsible", expanded:"auto", groupHeaderPosition:"sticky", item:{focusable:!0, renderer:null, selectable:!0}, scrollPolicy:"auto", scrollPolicyOptions:{fetchSize:25, maxCount:500}, selection:[], selectionMode:"none", beforeCurrentItem:null, beforeExpand:null, beforeCollapse:null, collapse:null, 
  copy:null, cut:null, expand:null, optionChange:null, paste:null, ready:null, reorder:null}, _ComponentCreate:function() {
    this._super();
    this.$_setup$();
  }, $_setup$:function() {
    var $opts$$20$$ = {};
    $opts$$20$$.element = this.element;
    $opts$$20$$.$ojContext$ = this;
    $opts$$20$$ = $$$$18$$.extend(this.options, $opts$$20$$);
    this.$listview$ = new $oj$$19$$.$_ojListView$;
    this.$listview$.$init$($opts$$20$$);
  }, $_AfterCreate$:function() {
    this._super();
    this.$listview$.$afterCreate$();
  }, _destroy:function() {
    this.$listview$.destroy();
    this._super();
  }, $_NotifyContextMenuGesture$:function($menu$$7$$, $event$$406$$, $eventType$$37$$) {
    this.$listview$.$notifyContextMenuGesture$($menu$$7$$, $event$$406$$, $eventType$$37$$);
  }, _setOptions:function($options$$264$$, $flags$$28$$) {
    var $needRefresh$$ = this.$listview$.$setOptions$($options$$264$$, $flags$$28$$);
    this._super($options$$264$$, $flags$$28$$);
    $needRefresh$$ && (this.$listview$.refresh(), this.$_fireIndexerModelChangeEvent$());
  }, _setOption:function($key$$121$$, $value$$252$$) {
    var $valid$$8$$ = !0;
    "selectionMode" == $key$$121$$ ? $valid$$8$$ = "none" == $value$$252$$ || "single" == $value$$252$$ || "multiple" == $value$$252$$ : "drillMode" == $key$$121$$ ? $valid$$8$$ = "collapsible" == $value$$252$$ || "none" == $value$$252$$ : "scrollPolicy" == $key$$121$$ ? $valid$$8$$ = "auto" == $value$$252$$ || "loadMoreOnScroll" == $value$$252$$ : "groupHeaderPosition" == $key$$121$$ && ($valid$$8$$ = "static" == $value$$252$$ || "sticky" == $value$$252$$);
    if ($valid$$8$$) {
      this._super($key$$121$$, $value$$252$$);
    } else {
      throw "Invalid value: " + $value$$252$$ + " for key: " + $key$$121$$;
    }
  }, $_NotifyDetached$:function() {
    this.$listview$.$notifyDetached$();
  }, $_NotifyShown$:function() {
  }, widget:function() {
    return this.$listview$.$getRootElement$();
  }, refresh:function() {
    this._super();
    this.$listview$.refresh();
    this.$_fireIndexerModelChangeEvent$();
  }, whenReady:function() {
    return this.$listview$.whenReady();
  }, getNodeBySubId:function($locator$$27$$) {
    return this.$listview$.getNodeBySubId($locator$$27$$);
  }, getSubIdByNode:function($node$$75$$) {
    return this.$listview$.getSubIdByNode($node$$75$$);
  }, getContextByNode:function($node$$76$$) {
    return this.$listview$.getContextByNode($node$$76$$);
  }, getDataForVisibleItem:function($context$$100$$) {
    return this.$listview$.getDataForVisibleItem($context$$100$$);
  }, expand:function($key$$122$$, $vetoable$$) {
    this.$listview$.$expandKey$($key$$122$$, $vetoable$$, !0, !0);
  }, collapse:function($key$$123$$, $vetoable$$1$$) {
    this.$listview$.$collapseKey$($key$$123$$, $vetoable$$1$$, !0);
  }, getExpanded:function() {
    return this.$listview$.getExpanded();
  }, getIndexerModel:function() {
    null == this.$indexerModel$ && $oj$$19$$.$ListViewIndexerModel$ && (this.$indexerModel$ = new $oj$$19$$.$ListViewIndexerModel$(this.$listview$));
    return this.$indexerModel$;
  }, $_fireIndexerModelChangeEvent$:function() {
    null != this.$indexerModel$ && this.$indexerModel$.$fireChangeEvent$ && this.$indexerModel$.$fireChangeEvent$();
  }});
});

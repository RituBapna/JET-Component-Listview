/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "promise"], function($oj$$73$$, $$$$68$$) {
  $oj$$73$$.$FilmStripPagingModel$ = function $$oj$$73$$$$FilmStripPagingModel$$() {
    this.Init();
  };
  $oj$$73$$.$Object$.$createSubclass$($oj$$73$$.$FilmStripPagingModel$, $oj$$73$$.$EventSource$, "oj.FilmStripPagingModel");
  $oj$$73$$.$FilmStripPagingModel$.prototype.Init = function $$oj$$73$$$$FilmStripPagingModel$$$Init$() {
    $oj$$73$$.$FilmStripPagingModel$.$superclass$.Init.call(this);
    this.$_page$ = -1;
    this.$_totalSize$ = 0;
    this.$_pageSize$ = -1;
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FilmStripPagingModel.prototype.Init", {Init:$oj$$73$$.$FilmStripPagingModel$.prototype.Init});
  $oj$$73$$.$FilmStripPagingModel$.prototype.$setTotalSize$ = function $$oj$$73$$$$FilmStripPagingModel$$$$setTotalSize$$($totalSize$$7$$) {
    this.$_totalSize$ = $totalSize$$7$$;
  };
  $oj$$73$$.$FilmStripPagingModel$.prototype.getPage = function $$oj$$73$$$$FilmStripPagingModel$$$getPage$() {
    return this.$_page$;
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FilmStripPagingModel.prototype.getPage", {getPage:$oj$$73$$.$FilmStripPagingModel$.prototype.getPage});
  $oj$$73$$.$FilmStripPagingModel$.prototype.setPage = function $$oj$$73$$$$FilmStripPagingModel$$$setPage$($page$$8$$, $options$$380$$) {
    $page$$8$$ = parseInt($page$$8$$, 10);
    try {
      var $prevPageCount$$ = this.getPageCount(), $prevPage$$ = this.$_page$, $prevPageSize$$ = this.$_pageSize$, $pageSize$$10$$ = $prevPageSize$$;
      $options$$380$$ && $options$$380$$.pageSize && ($pageSize$$10$$ = $options$$380$$.pageSize);
      var $newPageCount$$ = Math.ceil(this.$_totalSize$ / $pageSize$$10$$);
      if (0 > $page$$8$$ || $page$$8$$ > $newPageCount$$ - 1) {
        throw Error("JET FilmStrip: Invalid 'page' set: " + $page$$8$$);
      }
      var $bFiredBeforePageEvent$$ = !1;
      if ($page$$8$$ != $prevPage$$ || $pageSize$$10$$ != $prevPageSize$$) {
        if (!1 === this.handleEvent("beforePage", {page:$page$$8$$, previousPage:$prevPage$$})) {
          return Promise.reject();
        }
        $bFiredBeforePageEvent$$ = !0;
      }
      this.$_page$ = $page$$8$$;
      this.$_pageSize$ = $pageSize$$10$$;
      var $pageCount$$1$$ = this.getPageCount(), $self$$226$$ = this;
      return new Promise(function($resolve$$68$$) {
        $prevPageCount$$ != $pageCount$$1$$ && $self$$226$$.handleEvent("pageCount", {pageCount:$pageCount$$1$$, previousPageCount:$prevPageCount$$});
        $bFiredBeforePageEvent$$ && $self$$226$$.handleEvent("page", {page:$page$$8$$, previousPage:$prevPage$$});
        $resolve$$68$$(null);
      });
    } catch ($e$$136$$) {
      return Promise.reject($e$$136$$);
    }
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FilmStripPagingModel.prototype.setPage", {setPage:$oj$$73$$.$FilmStripPagingModel$.prototype.setPage});
  $oj$$73$$.$FilmStripPagingModel$.prototype.getStartItemIndex = function $$oj$$73$$$$FilmStripPagingModel$$$getStartItemIndex$() {
    return this.$_page$ * this.$_pageSize$;
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FilmStripPagingModel.prototype.getStartItemIndex", {getStartItemIndex:$oj$$73$$.$FilmStripPagingModel$.prototype.getStartItemIndex});
  $oj$$73$$.$FilmStripPagingModel$.prototype.getEndItemIndex = function $$oj$$73$$$$FilmStripPagingModel$$$getEndItemIndex$() {
    return Math.min(this.getStartItemIndex() + this.$_pageSize$, this.$_totalSize$) - 1;
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FilmStripPagingModel.prototype.getEndItemIndex", {getEndItemIndex:$oj$$73$$.$FilmStripPagingModel$.prototype.getEndItemIndex});
  $oj$$73$$.$FilmStripPagingModel$.prototype.getPageCount = function $$oj$$73$$$$FilmStripPagingModel$$$getPageCount$() {
    return Math.ceil(this.$_totalSize$ / this.$_pageSize$);
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FilmStripPagingModel.prototype.getPageCount", {getPageCount:$oj$$73$$.$FilmStripPagingModel$.prototype.getPageCount});
  $oj$$73$$.$FilmStripPagingModel$.prototype.totalSize = function $$oj$$73$$$$FilmStripPagingModel$$$totalSize$() {
    return this.$_totalSize$;
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FilmStripPagingModel.prototype.totalSize", {totalSize:$oj$$73$$.$FilmStripPagingModel$.prototype.totalSize});
  $oj$$73$$.$FilmStripPagingModel$.prototype.totalSizeConfidence = function $$oj$$73$$$$FilmStripPagingModel$$$totalSizeConfidence$() {
    return "actual";
  };
  $oj$$73$$.$Object$.$exportPrototypeSymbol$("FilmStripPagingModel.prototype.totalSizeConfidence", {totalSizeConfidence:$oj$$73$$.$FilmStripPagingModel$.prototype.totalSizeConfidence});
  (function() {
    function $_escapeHtml$$($text$$27$$) {
      var $jqDiv$$ = $$$$68$$("\x3cdiv\x3e\x3c/div\x3e");
      $jqDiv$$.text($text$$27$$);
      return $jqDiv$$[0].innerHTML;
    }
    function $_removeTransform$$($jqObj$$1$$) {
      $jqObj$$1$$.css("-webkit-transform", $_EMPTY_STRING$$).css("-ms-transform", $_EMPTY_STRING$$).css("transform", $_EMPTY_STRING$$);
    }
    function $_applyTransform$$($jqObj$$, $transform$$5$$) {
      $jqObj$$.css("-webkit-transform", $transform$$5$$).css("-ms-transform", $transform$$5$$).css("transform", $transform$$5$$);
    }
    $oj$$73$$.$__registerWidget$("oj.ojFilmStrip", $$$$68$$.oj.baseComponent, {defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{maxItemsPerPage:0, orientation:"horizontal", currentItem:0, arrowPlacement:"adjacent", arrowVisibility:"auto"}, _ComponentCreate:function() {
      this._super();
      var $elem$$156_options$$381$$ = this.element;
      $elem$$156_options$$381$$.addClass("oj-filmstrip oj-component").attr("tabindex", 0).attr("role", "region");
      $elem$$156_options$$381$$.uniqueId();
      $elem$$156_options$$381$$ = this.options;
      $elem$$156_options$$381$$.disabled && $oj$$73$$.$Logger$.warn($_WARNING_DISABLED_OPTION$$1$$);
      if ($elem$$156_options$$381$$.orientation !== $_HORIZONTAL$$ && $elem$$156_options$$381$$.orientation !== $_VERTICAL$$) {
        throw Error($_ERROR_INVALID_ORIENTATION$$ + $elem$$156_options$$381$$.orientation);
      }
      if ($elem$$156_options$$381$$.arrowPlacement !== $_ADJACENT$$ && $elem$$156_options$$381$$.arrowPlacement !== $_OVERLAY$$) {
        throw Error($_ERROR_INVALID_NAV_ARROW_PLACEMENT$$ + $elem$$156_options$$381$$.arrowPlacement);
      }
      if ($elem$$156_options$$381$$.arrowVisibility !== $_VISIBLE$$ && $elem$$156_options$$381$$.arrowVisibility !== $_HIDDEN$$1$$ && $elem$$156_options$$381$$.arrowVisibility !== $_HOVER$$ && $elem$$156_options$$381$$.arrowVisibility !== $_AUTO$$) {
        throw Error($_ERROR_INVALID_NAV_ARROW_VISIBILITY$$ + $elem$$156_options$$381$$.arrowVisibility);
      }
      this.$touchEventNamespace$ = this.eventNamespace + "Touch";
      this.$mouseEventNamespace$ = this.eventNamespace + "Mouse";
      this.$keyEventNamespace$ = this.eventNamespace + "Key";
      this.$navArrowHoverableEventNamespace$ = this.eventNamespace + "NavArrowHoverable";
      this.$_setup$(!0);
    }, refresh:function() {
      this._super();
      this.$_setup$(!1);
    }, getItemsPerPage:function() {
      return this.$_itemsPerPage$;
    }, getPagingModel:function() {
      return this.$_pagingModel$;
    }, $_NotifyShown$:function() {
      this._super();
      this.$_needsSetup$ && this.$_setup$(this.$_needsSetup$[0]);
    }, $_NotifyAttached$:function() {
      this._super();
      this.$_needsSetup$ && this.$_setup$(this.$_needsSetup$[0]);
    }, $_setup$:function($isInit$$1_pagingModel$$) {
      if (this.$_canCalculateSizes$()) {
        this.$_needsSetup$ = null;
        this.$_bRTL$ = "rtl" === this.$_GetReadingDirection$();
        this.$_bTouchSupported$ = $oj$$73$$.$DomUtils$.$isTouchSupported$();
        var $elem$$157_oldIsInit$$1$$ = this.element, $self$$227$$ = this;
        $isInit$$1_pagingModel$$ ? (this.$_itemsPerPage$ = 0, this.$_handlePageFunc$ = function $this$$_handlePageFunc$$($event$$740$$) {
          $self$$227$$.$_handlePage$($event$$740$$);
        }, this.$_pagingModel$ = new $oj$$73$$.$FilmStripPagingModel$, this.$_componentSize$ = 0, this.$_itemSize$ = -1, this.$_handleTransitionEndFunc$ = function $this$$_handleTransitionEndFunc$$() {
          $self$$227$$.$_handleTransitionEnd$();
        }, this.$_handleResizeFunc$ = function $this$$_handleResizeFunc$$() {
          $self$$227$$.$_handleResize$();
        }, this.$_bTouchSupported$ && (this.$_handleTouchStartFunc$ = function $this$$_handleTouchStartFunc$$($event$$742$$) {
          $self$$227$$.$_handleTouchStart$($event$$742$$);
        }, this.$_handleTouchMoveFunc$ = function $this$$_handleTouchMoveFunc$$($event$$743$$) {
          $self$$227$$.$_handleTouchMove$($event$$743$$);
        }, this.$_handleTouchEndFunc$ = function $this$$_handleTouchEndFunc$$($event$$744$$) {
          $self$$227$$.$_handleTouchEnd$($event$$744$$);
        }, this.$_addTouchListeners$()), this.$_handleMouseDownFunc$ = function $this$$_handleMouseDownFunc$$($event$$745$$) {
          $self$$227$$.$_handleMouseDown$($event$$745$$);
        }, this.$_handleMouseMoveFunc$ = function $this$$_handleMouseMoveFunc$$($event$$746$$) {
          $self$$227$$.$_handleMouseMove$($event$$746$$);
        }, this.$_handleMouseUpFunc$ = function $this$$_handleMouseUpFunc$$($event$$747$$) {
          $self$$227$$.$_handleMouseUp$($event$$747$$);
        }, this.$_addMouseListeners$(), this.$_handleKeyDownFunc$ = function $this$$_handleKeyDownFunc$$($event$$748$$) {
          $self$$227$$.$_handleKeyDown$($event$$748$$);
        }, this.$_addKeyListeners$()) : this.$_destroyInternal$();
        for (var $originalItems$$ = $elem$$157_oldIsInit$$1$$.children(), $i$$514$$ = 0;$i$$514$$ < $originalItems$$.length;$i$$514$$++) {
          $oj$$73$$.Components.$subtreeDetached$($originalItems$$[$i$$514$$]);
        }
        $isInit$$1_pagingModel$$ && ($isInit$$1_pagingModel$$ = this.$_pagingModel$, $isInit$$1_pagingModel$$.$setTotalSize$($originalItems$$.length), $isInit$$1_pagingModel$$.on("page", this.$_handlePageFunc$));
        this.$_wrapChildren$();
        this.$_adjustSizes$();
        for ($i$$514$$ = 0;$i$$514$$ < $originalItems$$.length;$i$$514$$++) {
          $oj$$73$$.Components.$subtreeAttached$($originalItems$$[$i$$514$$]);
        }
        $oj$$73$$.$DomUtils$.$addResizeListener$($elem$$157_oldIsInit$$1$$[0], this.$_handleResizeFunc$);
      } else {
        $elem$$157_oldIsInit$$1$$ = !1, this.$_needsSetup$ && ($elem$$157_oldIsInit$$1$$ = this.$_needsSetup$[0]), this.$_needsSetup$ = [$isInit$$1_pagingModel$$ || $elem$$157_oldIsInit$$1$$];
      }
    }, _destroy:function() {
      this.$_bTouchSupported$ && (this.$_removeTouchListeners$(), this.$_handleTouchEndFunc$ = this.$_handleTouchMoveFunc$ = this.$_handleTouchStartFunc$ = null);
      this.$_removeMouseListeners$();
      this.$_handleMouseUpFunc$ = this.$_handleMouseMoveFunc$ = this.$_handleMouseDownFunc$ = null;
      this.$_removeKeyListeners$();
      this.$_handleKeyDownFunc$ = null;
      this.$_destroyInternal$();
      this.$_pagingModel$.off("page", this.$_handlePageFunc$);
      this.$_handleTransitionEndFunc$ = this.$_handleResizeFunc$ = this.$_pagingModel$ = this.$_handlePageFunc$ = null;
      var $elem$$158$$ = this.element;
      $elem$$158$$.removeClass("oj-filmstrip oj-component " + $_OJ_FILMSTRIP_HOVER$$).removeAttr("tabindex role");
      $elem$$158$$.removeUniqueId();
      this._super();
    }, $_destroyInternal$:function() {
      $oj$$73$$.$DomUtils$.$removeResizeListener$(this.element[0], this.$_handleResizeFunc$);
      this.$_itemSize$ = -1;
      this.$_queuedHandleResize$ && (clearTimeout(this.$_queuedHandleResize$), this.$_queuedHandleResize$ = null);
      for (var $originalItems$$1$$ = this.$_getItems$(), $i$$515$$ = 0;$i$$515$$ < $originalItems$$1$$.length;$i$$515$$++) {
        $oj$$73$$.Components.$subtreeDetached$($originalItems$$1$$[$i$$515$$]);
      }
      this.$_clearCalculatedSizes$();
      this.$_getItemContainers$().unwrap();
      this.$_unwrapChildren$();
      for ($i$$515$$ = 0;$i$$515$$ < $originalItems$$1$$.length;$i$$515$$++) {
        $oj$$73$$.Components.$subtreeAttached$($originalItems$$1$$[$i$$515$$]);
      }
    }, _setOption:function($key$$205$$, $value$$302$$, $flags$$55$$) {
      var $options$$382$$ = this.options, $bRefresh$$ = !1, $newPageIndex$$ = -1, $pagingModel$$1$$ = this.$_pagingModel$, $oldPageIndex$$ = $pagingModel$$1$$.getPage();
      switch($key$$205$$) {
        case "disabled":
          $oj$$73$$.$Logger$.warn($_WARNING_DISABLED_OPTION$$1$$);
          break;
        case "orientation":
          if ($value$$302$$ !== $_HORIZONTAL$$ && $value$$302$$ !== $_VERTICAL$$) {
            throw Error($_ERROR_INVALID_ORIENTATION$$ + $value$$302$$);
          }
          $bRefresh$$ = $options$$382$$.orientation != $value$$302$$;
          break;
        case "maxItemsPerPage":
          $bRefresh$$ = $options$$382$$.maxItemsPerPage != $value$$302$$;
          break;
        case "arrowPlacement":
          if ($value$$302$$ !== $_ADJACENT$$ && $value$$302$$ !== $_OVERLAY$$) {
            throw Error($_ERROR_INVALID_NAV_ARROW_PLACEMENT$$ + $value$$302$$);
          }
          $bRefresh$$ = $options$$382$$.arrowPlacement != $value$$302$$;
          break;
        case "arrowVisibility":
          if ($value$$302$$ !== $_VISIBLE$$ && $value$$302$$ !== $_HIDDEN$$1$$ && $value$$302$$ !== $_HOVER$$ && $value$$302$$ !== $_AUTO$$) {
            throw Error($_ERROR_INVALID_NAV_ARROW_VISIBILITY$$ + $value$$302$$);
          }
          $bRefresh$$ = $options$$382$$.arrowVisibility != $value$$302$$;
          break;
        case $_CURRENT_ITEM$$:
          if ($options$$382$$.currentItem != $value$$302$$ && ($newPageIndex$$ = this.$_findPage$($value$$302$$), 0 > $newPageIndex$$ || $newPageIndex$$ >= $pagingModel$$1$$.getPageCount())) {
            throw Error($_ERROR_CURRENT_ITEM_NOT_FOUND$$ + $value$$302$$);
          }
        ;
      }
      this._super($key$$205$$, $value$$302$$, $flags$$55$$);
      switch($key$$205$$) {
        case $_CURRENT_ITEM$$:
          -1 < $newPageIndex$$ && $newPageIndex$$ != $oldPageIndex$$ && $pagingModel$$1$$.setPage($newPageIndex$$);
      }
      $bRefresh$$ && this.$_setup$(!1);
    }, $_handleResize$:function() {
      if (!this.$_bHandlingResize$) {
        this.$_bHandlingResize$ = !0, this.$_adjustSizes$(!0), this.$_bHandlingResize$ = !1;
      } else {
        if (!this.$_queuedHandleResize$) {
          var $self$$228$$ = this;
          this.$_queuedHandleResize$ = setTimeout(function() {
            $self$$228$$.$_queuedHandleResize$ = null;
            $self$$228$$.$_handleResize$();
          }, 0);
        }
      }
    }, $_isHorizontal$:function() {
      return this.options.orientation !== $_VERTICAL$$;
    }, $_getCssPositionAttr$:function() {
      return this.$_isHorizontal$() ? this.$_bRTL$ ? "right" : "left" : "top";
    }, $_getCssSizeAttr$:function() {
      return this.$_isHorizontal$() ? "width" : "height";
    }, $_canCalculateSizes$:function() {
      var $div$$15$$ = document.createElement("div"), $elem$$160_style$$21$$ = $div$$15$$.style;
      $elem$$160_style$$21$$.position = "absolute";
      $elem$$160_style$$21$$.width = "10px";
      $elem$$160_style$$21$$.height = "10px";
      $elem$$160_style$$21$$ = this.element[0];
      $elem$$160_style$$21$$.appendChild($div$$15$$);
      var $bCanCalcSizes$$1$$ = !1;
      try {
        $bCanCalcSizes$$1$$ = 0 < $div$$15$$.offsetWidth && 0 < $div$$15$$.offsetHeight;
      } catch ($e$$137$$) {
      }
      $elem$$160_style$$21$$.removeChild($div$$15$$);
      return $bCanCalcSizes$$1$$;
    }, $_wrapChildren$:function() {
      var $elem$$161$$ = this.element, $bHorizontal$$2$$ = this.$_isHorizontal$();
      $elem$$161$$.children().addClass($_OJ_FILMSTRIP_ITEM$$).wrap("\x3cdiv class\x3d'" + $_OJ_FILMSTRIP_CONTAINER$$ + " " + $_OJ_FILMSTRIP_ITEM_CONTAINER$$ + "'\x3e\x3c/div\x3e");
      var $cssAttr_pagesWrapper$$ = this.$_getCssPositionAttr$();
      this.$_pagesWrapper$ = $cssAttr_pagesWrapper$$ = $elem$$161$$.children().wrapAll("\x3cdiv class\x3d'" + $_OJ_FILMSTRIP_CONTAINER$$ + " " + $_OJ_FILMSTRIP_PAGES_CONTAINER$$ + "' style\x3d'" + $cssAttr_pagesWrapper$$ + ": 0px;'\x3e\x3c/div\x3e").parent();
      var $options$$384$$ = this.options;
      $options$$384$$.arrowVisibility !== $_HIDDEN$$1$$ && $options$$384$$.arrowPlacement === $_ADJACENT$$ && (this.$_contentWrapper$ = $cssAttr_pagesWrapper$$.wrap("\x3cdiv class\x3d'" + $_OJ_FILMSTRIP_CONTAINER$$ + " oj-filmstrip-content-container'\x3e\x3c/div\x3e").parent());
      $elem$$161$$.addClass($_OJ_FILMSTRIP_CONTAINER$$);
      $bHorizontal$$2$$ || $elem$$161$$.addClass($_OJ_FILMSTRIP_VERTICAL$$);
      $options$$384$$.arrowVisibility !== $_HIDDEN$$1$$ && (this.$_prevButton$ = this.$_createPrevNavArrow$(), this.$_nextButton$ = this.$_createNextNavArrow$(), this.$_navArrowsShownOnHover$() && this.$_setupNavArrowsHoverable$());
    }, $_unwrapChildren$:function() {
      var $elem$$162$$ = this.element, $originalItems$$3$$ = this.$_getItems$();
      this.$_tearDownNavArrowsHoverable$();
      this.$_prevButton$ && (this.$_UnregisterChildNode$(this.$_prevButton$), this.$_prevButton$ = null);
      this.$_nextButton$ && (this.$_UnregisterChildNode$(this.$_nextButton$), this.$_nextButton$ = null);
      var $navArrowContainers$$ = $elem$$162$$.children($_PERIOD$$ + $_OJ_FILMSTRIP_ARROW_CONTAINER$$);
      $navArrowContainers$$ && $navArrowContainers$$.remove();
      $originalItems$$3$$.removeClass($_OJ_FILMSTRIP_ITEM$$).unwrap().unwrap();
      this.$_pagesWrapper$ = null;
      this.$_contentWrapper$ && ($originalItems$$3$$.unwrap(), this.$_contentWrapper$ = null);
      $elem$$162$$.removeClass($_OJ_FILMSTRIP_CONTAINER$$ + " " + $_OJ_FILMSTRIP_VERTICAL$$);
    }, $_setupNavArrowsHoverable$:function() {
      this.element.on("mouseenter" + this.$navArrowHoverableEventNamespace$, function($event$$749$$) {
        $$$$68$$($event$$749$$.currentTarget).hasClass("oj-disabled") || $$$$68$$($event$$749$$.currentTarget).addClass($_OJ_FILMSTRIP_HOVER$$);
      }).on("mouseleave" + this.$navArrowHoverableEventNamespace$, function($event$$750$$) {
        $$$$68$$($event$$750$$.currentTarget).removeClass($_OJ_FILMSTRIP_HOVER$$);
      });
    }, $_tearDownNavArrowsHoverable$:function() {
      this.element.off(this.$navArrowHoverableEventNamespace$);
    }, $_navArrowsShownOnHover$:function() {
      var $options$$385$$ = this.options, $arrowVisibility$$ = $options$$385$$.arrowVisibility;
      return $arrowVisibility$$ === $_HOVER$$ || $arrowVisibility$$ === $_AUTO$$ && $options$$385$$.arrowPlacement === $_OVERLAY$$;
    }, $_hasPrevPage$:function() {
      return 0 < this.$_pagingModel$.getPage();
    }, $_hasNextPage$:function() {
      var $pagingModel$$3$$ = this.$_pagingModel$;
      return $pagingModel$$3$$.getPage() < $pagingModel$$3$$.getPageCount() - 1;
    }, $_prevPage$:function() {
      if (this.$_hasPrevPage$()) {
        var $pagingModel$$4$$ = this.$_pagingModel$;
        $pagingModel$$4$$.setPage($pagingModel$$4$$.getPage() - 1);
      }
    }, $_nextPage$:function() {
      if (this.$_hasNextPage$()) {
        var $pagingModel$$5$$ = this.$_pagingModel$;
        $pagingModel$$5$$.setPage($pagingModel$$5$$.getPage() + 1);
      }
    }, $_displayNavigationArrow$:function($bShow$$, $jqNavArrow$$) {
      this.options.arrowPlacement === $_ADJACENT$$ ? $jqNavArrow$$.css("visibility", $bShow$$ ? "" : $_HIDDEN$$1$$) : $jqNavArrow$$.parent().css("display", $bShow$$ ? "" : $_NONE$$1$$);
    }, $_updateNavigationArrowsDisplay$:function() {
      if (this.options.arrowVisibility !== $_HIDDEN$$1$$) {
        var $pageCount$$2_pagingModel$$6$$ = this.$_pagingModel$, $pageIndex$$ = $pageCount$$2_pagingModel$$6$$.getPage(), $pageCount$$2_pagingModel$$6$$ = $pageCount$$2_pagingModel$$6$$.getPageCount();
        this.$_displayNavigationArrow$(0 !== $pageIndex$$, this.$_prevButton$);
        this.$_displayNavigationArrow$($pageIndex$$ !== $pageCount$$2_pagingModel$$6$$ - 1, this.$_nextButton$);
      }
    }, $_createPrevNavArrow$:function() {
      var $elem$$165_label$$21$$ = this.element, $locationMarker_navArrow$$ = this.$_isHorizontal$() ? $_OJ_START$$ : $_OJ_TOP$$, $container$$32$$ = this.$_createNavigationArrowContainer$($locationMarker_navArrow$$);
      this.options.arrowPlacement === $_OVERLAY$$ ? $elem$$165_label$$21$$.append($container$$32$$) : $elem$$165_label$$21$$.prepend($container$$32$$);
      var $elem$$165_label$$21$$ = $_escapeHtml$$(this.$getTranslatedString$("labelAccArrowPreviousPage")), $tooltip$$ = $_escapeHtml$$(this.$getTranslatedString$("tipArrowPreviousPage")), $locationMarker_navArrow$$ = this.$_createNavigationArrow$($container$$32$$, $locationMarker_navArrow$$, $elem$$165_label$$21$$, $tooltip$$), $self$$229$$ = this;
      $locationMarker_navArrow$$.on("click", function() {
        $self$$229$$.$_prevPage$();
      });
      return $locationMarker_navArrow$$;
    }, $_createNextNavArrow$:function() {
      var $elem$$166_label$$22$$ = this.element, $locationMarker$$1_navArrow$$1$$ = this.$_isHorizontal$() ? $_OJ_END$$ : $_OJ_BOTTOM$$, $container$$33$$ = this.$_createNavigationArrowContainer$($locationMarker$$1_navArrow$$1$$);
      $elem$$166_label$$22$$.append($container$$33$$);
      var $elem$$166_label$$22$$ = $_escapeHtml$$(this.$getTranslatedString$("labelAccArrowNextPage")), $tooltip$$1$$ = $_escapeHtml$$(this.$getTranslatedString$("tipArrowNextPage")), $locationMarker$$1_navArrow$$1$$ = this.$_createNavigationArrow$($container$$33$$, $locationMarker$$1_navArrow$$1$$, $elem$$166_label$$22$$, $tooltip$$1$$), $self$$230$$ = this;
      $locationMarker$$1_navArrow$$1$$.on("click", function() {
        $self$$230$$.$_nextPage$();
      });
      return $locationMarker$$1_navArrow$$1$$;
    }, $_createNavigationArrowContainer$:function($locationMarker$$2$$) {
      var $container$$34$$ = $$$$68$$(document.createElement("div"));
      $container$$34$$.addClass($_OJ_FILMSTRIP_ARROW_CONTAINER$$ + " " + $locationMarker$$2$$);
      this.options.arrowPlacement === $_OVERLAY$$ && ($container$$34$$.addClass("oj-filmstrip-arrow-container-overlay"), this.$_navArrowsShownOnHover$() && $container$$34$$.addClass($_OJ_FILMSTRIP_ARROW_TRANSITION$$));
      return $container$$34$$;
    }, $_createNavigationArrow$:function($arrowElem_parentElem$$4$$, $elemId$$3_locationMarker$$3$$, $label$$23$$, $tooltip$$2$$) {
      var $arrowId_str$$24$$ = "\x3cdiv class\x3d'" + $_OJ_FILMSTRIP_ARROW$$ + " oj-default oj-enabled " + $elemId$$3_locationMarker$$3$$ + "' role\x3d'button' tabindex\x3d'-1'";
      $arrowElem_parentElem$$4$$.append($arrowId_str$$24$$ + ("\x3e\x3cspan class\x3d'oj-filmstrip-arrow-icon " + $elemId$$3_locationMarker$$3$$ + " oj-component-icon'\x3e\x3c/span\x3e\x3c/div\x3e"));
      $elemId$$3_locationMarker$$3$$ = this.element.attr("id");
      $arrowElem_parentElem$$4$$ = $arrowElem_parentElem$$4$$.children($_PERIOD$$ + $_OJ_FILMSTRIP_ARROW$$).eq(0);
      $arrowElem_parentElem$$4$$.uniqueId();
      $arrowId_str$$24$$ = $arrowElem_parentElem$$4$$.attr("id");
      $label$$23$$ && $arrowElem_parentElem$$4$$.attr("aria-label", $label$$23$$);
      $tooltip$$2$$ && $arrowElem_parentElem$$4$$.attr("title", $tooltip$$2$$);
      $arrowElem_parentElem$$4$$.attr("aria-labelledby", $arrowId_str$$24$$ + " " + $elemId$$3_locationMarker$$3$$);
      this._hoverable($arrowElem_parentElem$$4$$);
      this.$_activeable$($arrowElem_parentElem$$4$$);
      this.options.arrowPlacement === $_ADJACENT$$ && this.$_navArrowsShownOnHover$() && $arrowElem_parentElem$$4$$.addClass($_OJ_FILMSTRIP_ARROW_TRANSITION$$);
      return $arrowElem_parentElem$$4$$;
    }, $_getItemContainers$:function() {
      return this.$_pagesWrapper$.find($_PERIOD$$ + $_OJ_FILMSTRIP_ITEM_CONTAINER$$);
    }, $_getItems$:function() {
      return this.$_pagesWrapper$.find($_PERIOD$$ + $_OJ_FILMSTRIP_ITEM$$);
    }, $_getPages$:function() {
      return this.$_pagesWrapper$.children($_PERIOD$$ + $_OJ_FILMSTRIP_PAGE$$);
    }, $_clearCalculatedSizes$:function() {
      var $pagesWrapper$$4$$ = this.$_pagesWrapper$;
      this.$_getPages$().css($_FLEX_BASIS$$, $_EMPTY_STRING$$).css($_WEBKIT_FLEX_BASIS$$, $_EMPTY_STRING$$);
      this.$_getItemContainers$().css($_FLEX_BASIS$$, $_EMPTY_STRING$$).css($_WEBKIT_FLEX_BASIS$$, $_EMPTY_STRING$$);
      $pagesWrapper$$4$$.css(this.$_getCssSizeAttr$(), $_EMPTY_STRING$$);
    }, $_adjustSizes$:function($bNotifyAttach_contentWrapper_newPageIndex$$1$$) {
      this.$_clearCalculatedSizes$();
      var $currPage_options$$391$$ = this.options, $arrowSize_bCreatePages_bHorizontal$$5_calcFitCount$$ = this.$_isHorizontal$(), $fitCount_itemsPerPage$$ = $currPage_options$$391$$.maxItemsPerPage, $bCalcItemsPerPage_fitItemSize_newPageCount$$1$$ = 1 > $fitCount_itemsPerPage$$, $elem$$168_firstArrowContainer_pagingModel$$7$$ = this.element, $items$$18$$ = this.$_getItemContainers$();
      if (0 > this.$_itemSize$) {
        var $componentSize_optionItemContainer_optionItemIndex$$ = this.$_getItemIndex$($currPage_options$$391$$.currentItem), $componentSize_optionItemContainer_optionItemIndex$$ = $$$$68$$($items$$18$$[$componentSize_optionItemContainer_optionItemIndex$$]), $optionItem_pages$$2$$ = $componentSize_optionItemContainer_optionItemIndex$$.children($_PERIOD$$ + $_OJ_FILMSTRIP_ITEM$$);
        $optionItem_pages$$2$$.css($_DISPLAY$$, $_EMPTY_STRING$$);
        $oj$$73$$.Components.$subtreeShown$($optionItem_pages$$2$$[0]);
        this.$_itemSize$ = $arrowSize_bCreatePages_bHorizontal$$5_calcFitCount$$ ? $componentSize_optionItemContainer_optionItemIndex$$.width() : $componentSize_optionItemContainer_optionItemIndex$$.height();
      }
      $componentSize_optionItemContainer_optionItemIndex$$ = $arrowSize_bCreatePages_bHorizontal$$5_calcFitCount$$ ? $elem$$168_firstArrowContainer_pagingModel$$7$$.width() : $elem$$168_firstArrowContainer_pagingModel$$7$$.height();
      $currPage_options$$391$$.arrowVisibility !== $_HIDDEN$$1$$ && $currPage_options$$391$$.arrowPlacement === $_ADJACENT$$ && ($elem$$168_firstArrowContainer_pagingModel$$7$$ = $elem$$168_firstArrowContainer_pagingModel$$7$$.children($_PERIOD$$ + $_OJ_FILMSTRIP_ARROW_CONTAINER$$).eq(0), $arrowSize_bCreatePages_bHorizontal$$5_calcFitCount$$ = $arrowSize_bCreatePages_bHorizontal$$5_calcFitCount$$ ? $elem$$168_firstArrowContainer_pagingModel$$7$$.width() : $elem$$168_firstArrowContainer_pagingModel$$7$$.height(), 
      $componentSize_optionItemContainer_optionItemIndex$$ -= 2 * $arrowSize_bCreatePages_bHorizontal$$5_calcFitCount$$);
      this.$_componentSize$ = $componentSize_optionItemContainer_optionItemIndex$$;
      $bCalcItemsPerPage_fitItemSize_newPageCount$$1$$ || ($arrowSize_bCreatePages_bHorizontal$$5_calcFitCount$$ = Math.max(Math.floor($componentSize_optionItemContainer_optionItemIndex$$ / this.$_itemSize$), 1), $arrowSize_bCreatePages_bHorizontal$$5_calcFitCount$$ < $fitCount_itemsPerPage$$ && ($fitCount_itemsPerPage$$ = $arrowSize_bCreatePages_bHorizontal$$5_calcFitCount$$));
      $fitCount_itemsPerPage$$ = $bCalcItemsPerPage_fitItemSize_newPageCount$$1$$ ? Math.max(Math.floor($componentSize_optionItemContainer_optionItemIndex$$ / this.$_itemSize$), 1) : $fitCount_itemsPerPage$$;
      $bCalcItemsPerPage_fitItemSize_newPageCount$$1$$ = $componentSize_optionItemContainer_optionItemIndex$$ / $fitCount_itemsPerPage$$;
      $items$$18$$.css($_FLEX_BASIS$$, $bCalcItemsPerPage_fitItemSize_newPageCount$$1$$ + $_PX$$1$$).css($_WEBKIT_FLEX_BASIS$$, $bCalcItemsPerPage_fitItemSize_newPageCount$$1$$ + $_PX$$1$$);
      $bCalcItemsPerPage_fitItemSize_newPageCount$$1$$ = Math.ceil($items$$18$$.length / $fitCount_itemsPerPage$$);
      $optionItem_pages$$2$$ = this.$_getPages$();
      $arrowSize_bCreatePages_bHorizontal$$5_calcFitCount$$ = !1;
      $elem$$168_firstArrowContainer_pagingModel$$7$$ = this.$_pagingModel$;
      if ($elem$$168_firstArrowContainer_pagingModel$$7$$.getPageCount() != $bCalcItemsPerPage_fitItemSize_newPageCount$$1$$ || this.$_itemsPerPage$ != $fitCount_itemsPerPage$$ || !$optionItem_pages$$2$$ || 1 > $optionItem_pages$$2$$.length) {
        $arrowSize_bCreatePages_bHorizontal$$5_calcFitCount$$ = !0;
        if ($bNotifyAttach_contentWrapper_newPageIndex$$1$$) {
          for (var $i$$516$$ = 0;$i$$516$$ < $items$$18$$.length;$i$$516$$++) {
            $oj$$73$$.Components.$subtreeDetached$($items$$18$$[$i$$516$$]);
          }
        }
        $optionItem_pages$$2$$ && 0 < $optionItem_pages$$2$$.length && $items$$18$$.unwrap();
        for ($i$$516$$ = 0;$i$$516$$ < $items$$18$$.length;$i$$516$$ += $fitCount_itemsPerPage$$) {
          $items$$18$$.slice($i$$516$$, $i$$516$$ + $fitCount_itemsPerPage$$).wrapAll("\x3cdiv class\x3d'" + $_OJ_FILMSTRIP_CONTAINER$$ + " " + $_OJ_FILMSTRIP_PAGE$$ + "' style\x3d'" + $_DISPLAY$$ + ": " + $_NONE$$1$$ + ";' " + $_ARIA_HIDDEN$$ + "\x3d'true'\x3e\x3c/div\x3e");
        }
        if ($bNotifyAttach_contentWrapper_newPageIndex$$1$$) {
          for ($i$$516$$ = 0;$i$$516$$ < $items$$18$$.length;$i$$516$$++) {
            $oj$$73$$.Components.$subtreeAttached$($items$$18$$[$i$$516$$]);
          }
        }
      }
      $optionItem_pages$$2$$ = this.$_getPages$();
      $optionItem_pages$$2$$.css($_FLEX_BASIS$$, $componentSize_optionItemContainer_optionItemIndex$$ + $_PX$$1$$).css($_WEBKIT_FLEX_BASIS$$, $componentSize_optionItemContainer_optionItemIndex$$ + $_PX$$1$$);
      $bNotifyAttach_contentWrapper_newPageIndex$$1$$ = this.$_contentWrapper$;
      this.$_pagesWrapper$.css(this.$_getCssSizeAttr$(), $componentSize_optionItemContainer_optionItemIndex$$);
      $bNotifyAttach_contentWrapper_newPageIndex$$1$$ && $bNotifyAttach_contentWrapper_newPageIndex$$1$$.css(this.$_getCssSizeAttr$(), $componentSize_optionItemContainer_optionItemIndex$$);
      $bNotifyAttach_contentWrapper_newPageIndex$$1$$ = 0;
      if ($currPage_options$$391$$.currentItem || 0 === $currPage_options$$391$$.currentItem) {
        $bNotifyAttach_contentWrapper_newPageIndex$$1$$ = this.$_findPage$($currPage_options$$391$$.currentItem, $fitCount_itemsPerPage$$);
      }
      $elem$$168_firstArrowContainer_pagingModel$$7$$.getPageCount() != $bCalcItemsPerPage_fitItemSize_newPageCount$$1$$ || this.$_itemsPerPage$ != $fitCount_itemsPerPage$$ || $elem$$168_firstArrowContainer_pagingModel$$7$$.getPage() != $bNotifyAttach_contentWrapper_newPageIndex$$1$$ ? $elem$$168_firstArrowContainer_pagingModel$$7$$.setPage($bNotifyAttach_contentWrapper_newPageIndex$$1$$, {pageSize:$fitCount_itemsPerPage$$}) : $arrowSize_bCreatePages_bHorizontal$$5_calcFitCount$$ && ($currPage_options$$391$$ = 
      $elem$$168_firstArrowContainer_pagingModel$$7$$.getPage(), this.$_handlePage$({previousPage:$currPage_options$$391$$, page:$currPage_options$$391$$}));
    }, $_handlePage$:function($event$$751_pagesWrapper$$6$$) {
      var $pageIndex$$1$$ = $event$$751_pagesWrapper$$6$$.page, $prevPageIndex$$ = $event$$751_pagesWrapper$$6$$.previousPage;
      $event$$751_pagesWrapper$$6$$ = this.$_pagesWrapper$;
      var $pages$$3$$ = this.$_getPages$(), $oldPage_pageSize$$11$$ = this.$_pagingModel$.$_pageSize$, $bImmediate$$ = 0 > $prevPageIndex$$ || $prevPageIndex$$ == $pageIndex$$1$$ || this.$_itemsPerPage$ != $oldPage_pageSize$$11$$;
      this.$_itemsPerPage$ = $oldPage_pageSize$$11$$;
      $oldPage_pageSize$$11$$ = null;
      $bImmediate$$ || ($oldPage_pageSize$$11$$ = $$$$68$$($pages$$3$$[$prevPageIndex$$]));
      var $cssAttr$$1$$ = this.$_getCssPositionAttr$(), $newPage$$ = $$$$68$$($pages$$3$$[$pageIndex$$1$$]), $bPageHidden$$ = $newPage$$.is($_HIDDEN_SELECTOR$$);
      $bPageHidden$$ && this.$_unhidePage$($newPage$$);
      var $bDeferScroll$$ = this.$_bDragInit$;
      -1 < $prevPageIndex$$ && !$bImmediate$$ && ($bDeferScroll$$ = !0, $event$$751_pagesWrapper$$6$$.css(this.$_getCssSizeAttr$(), 2 * this.$_componentSize$), $pageIndex$$1$$ < $prevPageIndex$$ && $bPageHidden$$ && $event$$751_pagesWrapper$$6$$.css($cssAttr$$1$$, -this.$_componentSize$ + $_PX$$1$$), $pageIndex$$1$$ > $prevPageIndex$$ ? ($oldPage_pageSize$$11$$.addClass($_OJ_FILMSTRIP_TRANSITION_NEXT_OLDPAGE_FROM$$), $newPage$$.addClass($_OJ_FILMSTRIP_TRANSITION_NEXT_NEWPAGE_FROM$$)) : ($oldPage_pageSize$$11$$.addClass($_OJ_FILMSTRIP_TRANSITION_PREV_OLDPAGE_FROM$$), 
      $newPage$$.addClass($_OJ_FILMSTRIP_TRANSITION_PREV_NEWPAGE_FROM$$)));
      if ($bDeferScroll$$) {
        var $self$$231$$ = this, $bDragInit$$ = this.$_bDragInit$;
        $bDragInit$$ && 0 > $prevPageIndex$$ && $pages$$3$$.filter($_VISIBLE_SELECTOR$$).addClass($_OJ_FILMSTRIP_TRANSITION$$);
        setTimeout(function() {
          $self$$231$$.$_finishHandlePage$($pageIndex$$1$$, $prevPageIndex$$, $bImmediate$$, $bDragInit$$);
        }, 25);
      } else {
        this.$_finishHandlePage$($pageIndex$$1$$, $prevPageIndex$$, $bImmediate$$);
      }
    }, $_finishHandlePage$:function($newPage$$1_pageIndex$$2_visiblePages$$1$$, $oldPage$$1_prevPageIndex$$1$$, $bImmediate$$1_pages$$4$$, $bDragInit$$1_bNext$$) {
      var $pagesWrapper$$7$$ = this.$_pagesWrapper$;
      $bImmediate$$1_pages$$4$$ || (this.$_bPageChangeTransition$ = !0, $pagesWrapper$$7$$.on("transitionend" + this.eventNamespace + " webkitTransitionEnd" + this.eventNamespace, this.$_handleTransitionEndFunc$));
      $bImmediate$$1_pages$$4$$ ? this.$_handleTransitionEnd$() : ($bImmediate$$1_pages$$4$$ = this.$_getPages$(), $bDragInit$$1_bNext$$ && $_removeTransform$$($bImmediate$$1_pages$$4$$), -1 < $oldPage$$1_prevPageIndex$$1$$ ? ($bDragInit$$1_bNext$$ = $newPage$$1_pageIndex$$2_visiblePages$$1$$ > $oldPage$$1_prevPageIndex$$1$$, $oldPage$$1_prevPageIndex$$1$$ = $$$$68$$($bImmediate$$1_pages$$4$$[$oldPage$$1_prevPageIndex$$1$$]), $newPage$$1_pageIndex$$2_visiblePages$$1$$ = $$$$68$$($bImmediate$$1_pages$$4$$[$newPage$$1_pageIndex$$2_visiblePages$$1$$]), 
      $oldPage$$1_prevPageIndex$$1$$.addClass($_OJ_FILMSTRIP_TRANSITION$$), $newPage$$1_pageIndex$$2_visiblePages$$1$$.addClass($_OJ_FILMSTRIP_TRANSITION$$), $bDragInit$$1_bNext$$ ? ($oldPage$$1_prevPageIndex$$1$$.removeClass($_OJ_FILMSTRIP_TRANSITION_NEXT_OLDPAGE_FROM$$), $newPage$$1_pageIndex$$2_visiblePages$$1$$.removeClass($_OJ_FILMSTRIP_TRANSITION_NEXT_NEWPAGE_FROM$$), $oldPage$$1_prevPageIndex$$1$$.addClass($_OJ_FILMSTRIP_TRANSITION_NEXT_OLDPAGE_TO$$), $newPage$$1_pageIndex$$2_visiblePages$$1$$.addClass($_OJ_FILMSTRIP_TRANSITION_NEXT_NEWPAGE_TO$$)) : 
      ($oldPage$$1_prevPageIndex$$1$$.removeClass($_OJ_FILMSTRIP_TRANSITION_PREV_OLDPAGE_FROM$$), $newPage$$1_pageIndex$$2_visiblePages$$1$$.removeClass($_OJ_FILMSTRIP_TRANSITION_PREV_NEWPAGE_FROM$$), $oldPage$$1_prevPageIndex$$1$$.addClass($_OJ_FILMSTRIP_TRANSITION_PREV_OLDPAGE_TO$$), $newPage$$1_pageIndex$$2_visiblePages$$1$$.addClass($_OJ_FILMSTRIP_TRANSITION_PREV_NEWPAGE_TO$$))) : $bDragInit$$1_bNext$$ && ($newPage$$1_pageIndex$$2_visiblePages$$1$$ = $bImmediate$$1_pages$$4$$.filter($_VISIBLE_SELECTOR$$), 
      $_applyTransform$$($newPage$$1_pageIndex$$2_visiblePages$$1$$, "translate3d(0, 0, 0)")));
    }, $_handleTransitionEnd$:function() {
      this.$_bPageChangeTransition$ = !1;
      var $newFirstItem_pageIndex$$3_pagesWrapper$$8$$ = this.$_pagesWrapper$, $cssAttr$$2_elem$$169_focusElem$$ = this.$_getCssPositionAttr$();
      $newFirstItem_pageIndex$$3_pagesWrapper$$8$$.off(this.eventNamespace).css(this.$_getCssSizeAttr$(), this.$_componentSize$).css($cssAttr$$2_elem$$169_focusElem$$, "0px");
      $cssAttr$$2_elem$$169_focusElem$$ = null;
      if ($oj$$73$$.$FocusUtils$.$containsFocus$($newFirstItem_pageIndex$$3_pagesWrapper$$8$$[0]) || this.$_nextButton$ && $oj$$73$$.$FocusUtils$.$containsFocus$(this.$_nextButton$[0]) || this.$_prevButton$ && $oj$$73$$.$FocusUtils$.$containsFocus$(this.$_prevButton$[0])) {
        $cssAttr$$2_elem$$169_focusElem$$ = document.activeElement;
      }
      for (var $newFirstItem_pageIndex$$3_pagesWrapper$$8$$ = this.$_pagingModel$.getPage(), $firstTabStop_pages$$5$$ = this.$_getPages$(), $i$$517$$ = 0;$i$$517$$ < $firstTabStop_pages$$5$$.length;$i$$517$$++) {
        $i$$517$$ != $newFirstItem_pageIndex$$3_pagesWrapper$$8$$ && this.$_hidePage$($$$$68$$($firstTabStop_pages$$5$$[$i$$517$$]));
      }
      $firstTabStop_pages$$5$$.removeClass($_OJ_FILMSTRIP_TRANSITION$$ + " " + $_OJ_FILMSTRIP_TRANSITION_NEXT_OLDPAGE_TO$$ + " " + $_OJ_FILMSTRIP_TRANSITION_NEXT_NEWPAGE_TO$$ + " " + $_OJ_FILMSTRIP_TRANSITION_PREV_OLDPAGE_TO$$ + " " + $_OJ_FILMSTRIP_TRANSITION_PREV_NEWPAGE_TO$$);
      $_removeTransform$$($firstTabStop_pages$$5$$);
      this.$_updateNavigationArrowsDisplay$();
      $cssAttr$$2_elem$$169_focusElem$$ && $$$$68$$($cssAttr$$2_elem$$169_focusElem$$).is($_HIDDEN_SELECTOR$$) && ($cssAttr$$2_elem$$169_focusElem$$ = this.element, ($firstTabStop_pages$$5$$ = $oj$$73$$.$FocusUtils$.$getFirstTabStop$($firstTabStop_pages$$5$$[$newFirstItem_pageIndex$$3_pagesWrapper$$8$$])) ? $oj$$73$$.$FocusUtils$.$focusElement$($firstTabStop_pages$$5$$) : $oj$$73$$.$FocusUtils$.$focusElement$($cssAttr$$2_elem$$169_focusElem$$[0]));
      this.$_findPage$(this.options.currentItem) != $newFirstItem_pageIndex$$3_pagesWrapper$$8$$ && ($newFirstItem_pageIndex$$3_pagesWrapper$$8$$ = this.$_getFirstItemOnPage$($newFirstItem_pageIndex$$3_pagesWrapper$$8$$), this.option($_CURRENT_ITEM$$, $newFirstItem_pageIndex$$3_pagesWrapper$$8$$, {_context:{$writeback$:!0}}));
    }, $_getItemIndex$:function($item$$135$$) {
      var $itemIndex$$2$$ = -1, $items$$19$$ = this.$_getItems$();
      if ("number" === typeof $item$$135$$) {
        0 <= $item$$135$$ && $item$$135$$ < $items$$19$$.length && ($itemIndex$$2$$ = $item$$135$$);
      } else {
        if ("string" === typeof $item$$135$$ && $oj$$73$$.$DomUtils$.$isValidIdentifier$($item$$135$$)) {
          for (var $i$$518$$ = 0;$i$$518$$ < $items$$19$$.length;$i$$518$$++) {
            var $itemId$$ = $items$$19$$[$i$$518$$].id;
            if ($itemId$$ && 0 < $itemId$$.length && $itemId$$ === $item$$135$$) {
              $itemIndex$$2$$ = $i$$518$$;
              break;
            }
          }
        }
      }
      return $itemIndex$$2$$;
    }, $_findPage$:function($item$$136$$, $itemsPerPage$$1$$) {
      var $itemIndex$$3$$ = this.$_getItemIndex$($item$$136$$), $pageIndex$$4$$ = -1;
      -1 < $itemIndex$$3$$ && (void 0 === $itemsPerPage$$1$$ && ($itemsPerPage$$1$$ = this.$_itemsPerPage$), $pageIndex$$4$$ = Math.floor($itemIndex$$3$$ / $itemsPerPage$$1$$));
      return $pageIndex$$4$$;
    }, $_getFirstItemOnPage$:function($itemIndex$$4_pageIndex$$5$$, $items$$20_pageCount$$3$$, $firstId_itemsPerPage$$2$$) {
      var $pagingModel$$10$$ = this.$_pagingModel$;
      void 0 === $items$$20_pageCount$$3$$ && ($items$$20_pageCount$$3$$ = $pagingModel$$10$$.getPageCount());
      return 0 <= $itemIndex$$4_pageIndex$$5$$ && $itemIndex$$4_pageIndex$$5$$ < $items$$20_pageCount$$3$$ && ($items$$20_pageCount$$3$$ = this.$_getItems$(), void 0 === $firstId_itemsPerPage$$2$$ && ($firstId_itemsPerPage$$2$$ = this.$_itemsPerPage$), $itemIndex$$4_pageIndex$$5$$ *= $firstId_itemsPerPage$$2$$, $itemIndex$$4_pageIndex$$5$$ < $items$$20_pageCount$$3$$.length) ? ($firstId_itemsPerPage$$2$$ = $items$$20_pageCount$$3$$[$itemIndex$$4_pageIndex$$5$$].id) && 0 < $firstId_itemsPerPage$$2$$.length ? 
      $firstId_itemsPerPage$$2$$ : $itemIndex$$4_pageIndex$$5$$ : -1;
    }, $_hidePage$:function($page$$9$$) {
      $oj$$73$$.Components.$subtreeHidden$($page$$9$$[0]);
      $page$$9$$.css($_DISPLAY$$, $_NONE$$1$$).attr($_ARIA_HIDDEN$$, "true");
      $page$$9$$.find($_PERIOD$$ + $_OJ_FILMSTRIP_ITEM$$).css($_DISPLAY$$, $_NONE$$1$$);
    }, $_unhidePage$:function($page$$10$$) {
      $page$$10$$.css($_DISPLAY$$, $_EMPTY_STRING$$).removeAttr($_ARIA_HIDDEN$$);
      $page$$10$$.find($_PERIOD$$ + $_OJ_FILMSTRIP_ITEM$$).css($_DISPLAY$$, $_EMPTY_STRING$$);
      $oj$$73$$.Components.$subtreeShown$($page$$10$$[0]);
    }, $_addKeyListeners$:function() {
      this.element.on("keydown" + this.$keyEventNamespace$, this.$_handleKeyDownFunc$);
    }, $_removeKeyListeners$:function() {
      this.element.off(this.$keyEventNamespace$);
    }, $_addMouseListeners$:function() {
      this.element.on("mousedown" + this.$mouseEventNamespace$, this.$_handleMouseDownFunc$).on("mousemove" + this.$mouseEventNamespace$, this.$_handleMouseMoveFunc$).on("mouseup" + this.$mouseEventNamespace$, this.$_handleMouseUpFunc$);
    }, $_removeMouseListeners$:function() {
      this.element.off(this.$mouseEventNamespace$);
    }, $_addTouchListeners$:function() {
      this.element.on("touchstart" + this.$touchEventNamespace$, this.$_handleTouchStartFunc$).on("touchmove" + this.$touchEventNamespace$, this.$_handleTouchMoveFunc$).on("touchend" + this.$touchEventNamespace$, this.$_handleTouchEndFunc$).on("touchcancel" + this.$touchEventNamespace$, this.$_handleTouchEndFunc$);
    }, $_removeTouchListeners$:function() {
      this.element.off(this.$touchEventNamespace$);
    }, $_handleKeyDown$:function($event$$752$$) {
      var $pagingModel$$11$$ = this.$_pagingModel$, $pageIndex$$6$$ = $pagingModel$$11$$.getPage(), $newPageIndex$$2$$ = -1;
      switch($event$$752$$.keyCode) {
        case $$$$68$$.ui.keyCode.RIGHT:
          $newPageIndex$$2$$ = this.$_bRTL$ ? $pageIndex$$6$$ - 1 : $pageIndex$$6$$ + 1;
          break;
        case $$$$68$$.ui.keyCode.LEFT:
          $newPageIndex$$2$$ = this.$_bRTL$ ? $pageIndex$$6$$ + 1 : $pageIndex$$6$$ - 1;
          break;
        case $$$$68$$.ui.keyCode.DOWN:
          $newPageIndex$$2$$ = $pageIndex$$6$$ + 1;
          break;
        case $$$$68$$.ui.keyCode.UP:
          $newPageIndex$$2$$ = $pageIndex$$6$$ - 1;
          break;
        case $$$$68$$.ui.keyCode.HOME:
          $newPageIndex$$2$$ = 0;
          break;
        case $$$$68$$.ui.keyCode.END:
          $newPageIndex$$2$$ = $pagingModel$$11$$.getPageCount() - 1;
          break;
        default:
          return;
      }
      -1 < $newPageIndex$$2$$ && $newPageIndex$$2$$ < $pagingModel$$11$$.getPageCount() && $pagingModel$$11$$.setPage($newPageIndex$$2$$);
      $event$$752$$.preventDefault();
    }, $_handleMouseDown$:function($event$$753$$) {
      this.$_dragScrollStart$($event$$753$$.originalEvent);
    }, $_handleMouseMove$:function($event$$754$$) {
      this.$_dragScrollMove$($event$$754$$, $event$$754$$.originalEvent);
    }, $_handleMouseUp$:function() {
      this.$_dragScrollEnd$();
    }, $_handleTouchStart$:function($event$$756_eventTouches$$) {
      $event$$756_eventTouches$$ = $event$$756_eventTouches$$.originalEvent.touches;
      1 === $event$$756_eventTouches$$.length && this.$_dragScrollStart$($event$$756_eventTouches$$[0]);
    }, $_handleTouchMove$:function($event$$757$$) {
      this.$_dragScrollMove$($event$$757$$, $event$$757$$.originalEvent.touches[0]);
      (this.$_bTouch$ || this.$_scrolledForThisTouch$) && $event$$757$$.preventDefault();
    }, $_handleTouchEnd$:function() {
      this.$_dragScrollEnd$();
    }, $_dragScrollStart$:function($coordsObj$$) {
      if (1 < this.$_pagingModel$.getPageCount() && !this.$_bPageChangeTransition$) {
        this.$_bTouch$ = !0;
        this.$_bDragInit$ = !1;
        var $bHorizontal$$6$$ = this.$_isHorizontal$();
        this.$_touchStartCoord$ = $bHorizontal$$6$$ ? $coordsObj$$.pageX : $coordsObj$$.pageY;
        this.$_touchStartCoord2$ = $bHorizontal$$6$$ ? $coordsObj$$.pageY : $coordsObj$$.pageX;
      }
    }, $_initDragScroll$:function($coordsObj$$1_cssAttr$$3$$) {
      var $bHorizontal$$7_pagesWrapper$$9$$ = this.$_isHorizontal$();
      this.$_touchStartCoord$ = $bHorizontal$$7_pagesWrapper$$9$$ ? $coordsObj$$1_cssAttr$$3$$.pageX : $coordsObj$$1_cssAttr$$3$$.pageY;
      this.$_touchStartCoord2$ = $bHorizontal$$7_pagesWrapper$$9$$ ? $coordsObj$$1_cssAttr$$3$$.pageY : $coordsObj$$1_cssAttr$$3$$.pageX;
      $coordsObj$$1_cssAttr$$3$$ = this.$_getCssPositionAttr$();
      var $bHorizontal$$7_pagesWrapper$$9$$ = this.$_pagesWrapper$, $pagingModel$$13$$ = this.$_pagingModel$, $pages$$6$$ = this.$_getPages$(), $pageCountToShow$$ = 1;
      0 < $pagingModel$$13$$.getPage() && (this.$_unhidePage$($$$$68$$($pages$$6$$[$pagingModel$$13$$.getPage() - 1])), $bHorizontal$$7_pagesWrapper$$9$$.css($coordsObj$$1_cssAttr$$3$$, -this.$_componentSize$ + $_PX$$1$$), $pageCountToShow$$++);
      $pagingModel$$13$$.getPage() < $pagingModel$$13$$.getPageCount() - 1 && (this.$_unhidePage$($$$$68$$($pages$$6$$[$pagingModel$$13$$.getPage() + 1])), $pageCountToShow$$++);
      1 < $pageCountToShow$$ && $bHorizontal$$7_pagesWrapper$$9$$.css(this.$_getCssSizeAttr$(), $pageCountToShow$$ * this.$_componentSize$);
      this.$_touchStartScroll$ = parseInt($bHorizontal$$7_pagesWrapper$$9$$.css($coordsObj$$1_cssAttr$$3$$), 10);
    }, $_dragScrollMove$:function($event$$759$$, $coordsObj$$2$$) {
      if (this.$_bTouch$) {
        var $bHorizontal$$8_newPageIndex$$3$$ = this.$_isHorizontal$(), $diff$$2$$ = ($bHorizontal$$8_newPageIndex$$3$$ ? $coordsObj$$2$$.pageX : $coordsObj$$2$$.pageY) - this.$_touchStartCoord$;
        Math.abs(($bHorizontal$$8_newPageIndex$$3$$ ? $coordsObj$$2$$.pageY : $coordsObj$$2$$.pageX) - this.$_touchStartCoord2$) > Math.abs($diff$$2$$) && (this.$_scrolledForThisTouch$ = this.$_bTouch$ = !1);
        if (this.$_bDragInit$) {
          var $bNext$$1$$ = $bHorizontal$$8_newPageIndex$$3$$ && this.$_bRTL$ ? 0 < $diff$$2$$ : 0 > $diff$$2$$, $pagingModel$$14_scrollVal_transform$$4$$ = this.$_pagingModel$, $pageIndex$$7_pageToHide$$ = $pagingModel$$14_scrollVal_transform$$4$$.getPage();
          if ($bNext$$1$$ && $pageIndex$$7_pageToHide$$ < $pagingModel$$14_scrollVal_transform$$4$$.getPageCount() - 1 || !$bNext$$1$$ && 0 < $pageIndex$$7_pageToHide$$) {
            var $currScroll_elem$$176_pages$$7$$ = this.element[0], $threshold$$9$$ = Math.min($_DRAG_SCROLL_THRESHOLD$$ * ($bHorizontal$$8_newPageIndex$$3$$ ? $currScroll_elem$$176_pages$$7$$.offsetWidth : $currScroll_elem$$176_pages$$7$$.offsetHeight), $_DRAG_SCROLL_MAX_THRESHOLD$$), $cssAttr$$4$$ = this.$_getCssPositionAttr$(), $pagesWrapper$$10$$ = this.$_pagesWrapper$, $currScroll_elem$$176_pages$$7$$ = this.$_getPages$();
            Math.abs($diff$$2$$) >= $threshold$$9$$ ? ($bHorizontal$$8_newPageIndex$$3$$ = $bNext$$1$$ ? $pageIndex$$7_pageToHide$$ + 1 : $pageIndex$$7_pageToHide$$ - 1, this.$_getFirstItemOnPage$($bHorizontal$$8_newPageIndex$$3$$), $pageIndex$$7_pageToHide$$ = $bNext$$1$$ ? $pageIndex$$7_pageToHide$$ - 1 : $pageIndex$$7_pageToHide$$ + 1, -1 < $pageIndex$$7_pageToHide$$ && $pageIndex$$7_pageToHide$$ < $pagingModel$$14_scrollVal_transform$$4$$.getPageCount() && this.$_hidePage$($$$$68$$($currScroll_elem$$176_pages$$7$$[$pageIndex$$7_pageToHide$$])), 
            $bNext$$1$$ && -1 < $pageIndex$$7_pageToHide$$ && ($currScroll_elem$$176_pages$$7$$ = parseInt($pagesWrapper$$10$$.css($cssAttr$$4$$), 10), $pagesWrapper$$10$$.css($cssAttr$$4$$, $currScroll_elem$$176_pages$$7$$ + this.$_componentSize$ + $_PX$$1$$)), $pagesWrapper$$10$$.css(this.$_getCssSizeAttr$(), 2 * this.$_componentSize$), this.$_bTouch$ = !1, $pagingModel$$14_scrollVal_transform$$4$$.setPage($bHorizontal$$8_newPageIndex$$3$$)) : ($pagingModel$$14_scrollVal_transform$$4$$ = $bHorizontal$$8_newPageIndex$$3$$ && 
            this.$_bRTL$ ? -$diff$$2$$ : $diff$$2$$, $pagingModel$$14_scrollVal_transform$$4$$ = $bHorizontal$$8_newPageIndex$$3$$ ? "translate3d(" + $pagingModel$$14_scrollVal_transform$$4$$ + "px, 0, 0)" : "translate3d(0, " + $pagingModel$$14_scrollVal_transform$$4$$ + "px, 0)", $_applyTransform$$($currScroll_elem$$176_pages$$7$$.filter($_VISIBLE_SELECTOR$$), $pagingModel$$14_scrollVal_transform$$4$$));
            this.$_scrolledForThisTouch$ = !0;
          }
          this.$_scrolledForThisTouch$ && ($event$$759$$.preventDefault(), $event$$759$$.stopPropagation());
        } else {
          Math.abs($diff$$2$$) > $_DRAG_SCROLL_INIT_THRESHOLD$$ && (this.$_initDragScroll$($coordsObj$$2$$), this.$_bDragInit$ = !0);
        }
      }
    }, $_dragScrollEnd$:function() {
      if (this.$_bTouch$ && this.$_bDragInit$) {
        var $pageIndex$$8$$ = this.$_pagingModel$.getPage();
        this.$_handlePage$({previousPage:$pageIndex$$8$$, page:$pageIndex$$8$$});
      }
      this.$_scrolledForThisTouch$ = this.$_bDragInit$ = this.$_bTouch$ = !1;
    }, getNodeBySubId:function($locator$$65_subId$$69$$) {
      if (null == $locator$$65_subId$$69$$) {
        return this.element ? this.element[0] : null;
      }
      $locator$$65_subId$$69$$ = $locator$$65_subId$$69$$.subId;
      return "oj-filmstrip-start-arrow" === $locator$$65_subId$$69$$ ? this.widget().find($_PERIOD$$ + $_OJ_FILMSTRIP_ARROW$$ + $_PERIOD$$ + $_OJ_START$$)[0] : "oj-filmstrip-end-arrow" === $locator$$65_subId$$69$$ ? this.widget().find($_PERIOD$$ + $_OJ_FILMSTRIP_ARROW$$ + $_PERIOD$$ + $_OJ_END$$)[0] : "oj-filmstrip-top-arrow" === $locator$$65_subId$$69$$ ? this.widget().find($_PERIOD$$ + $_OJ_FILMSTRIP_ARROW$$ + $_PERIOD$$ + $_OJ_TOP$$)[0] : "oj-filmstrip-bottom-arrow" === $locator$$65_subId$$69$$ ? 
      this.widget().find($_PERIOD$$ + $_OJ_FILMSTRIP_ARROW$$ + $_PERIOD$$ + $_OJ_BOTTOM$$)[0] : null;
    }, getSubIdByNode:function($currentNode$$4_node$$171$$) {
      for (var $startArrow$$ = this.getNodeBySubId({subId:"oj-filmstrip-start-arrow"}), $endArrow$$ = this.getNodeBySubId({subId:"oj-filmstrip-end-arrow"}), $topArrow$$ = this.getNodeBySubId({subId:"oj-filmstrip-top-arrow"}), $bottomArrow$$ = this.getNodeBySubId({subId:"oj-filmstrip-bottom-arrow"}), $elem$$177$$ = this.element[0];$currentNode$$4_node$$171$$ && $currentNode$$4_node$$171$$ != $elem$$177$$;) {
        if ($currentNode$$4_node$$171$$ === $startArrow$$) {
          return{subId:"oj-filmstrip-start-arrow"};
        }
        if ($currentNode$$4_node$$171$$ === $endArrow$$) {
          return{subId:"oj-filmstrip-end-arrow"};
        }
        if ($currentNode$$4_node$$171$$ === $topArrow$$) {
          return{subId:"oj-filmstrip-top-arrow"};
        }
        if ($currentNode$$4_node$$171$$ === $bottomArrow$$) {
          return{subId:"oj-filmstrip-bottom-arrow"};
        }
        $currentNode$$4_node$$171$$ = $currentNode$$4_node$$171$$.parentElement;
      }
      return null;
    }});
    var $_ADJACENT$$ = "adjacent", $_ARIA_HIDDEN$$ = "aria-hidden", $_AUTO$$ = "auto", $_DISPLAY$$ = "display", $_DRAG_SCROLL_INIT_THRESHOLD$$ = 3, $_DRAG_SCROLL_THRESHOLD$$ = .33, $_DRAG_SCROLL_MAX_THRESHOLD$$ = 100, $_EMPTY_STRING$$ = "", $_ERROR_CURRENT_ITEM_NOT_FOUND$$ = "JET FilmStrip: Value of 'currentItem' option not found: ", $_ERROR_INVALID_ORIENTATION$$ = "JET FilmStrip: Unsupported value set as 'orientation' option: ", $_ERROR_INVALID_NAV_ARROW_PLACEMENT$$ = "Unsupported value set as 'arrowPlacement' option: ", 
    $_ERROR_INVALID_NAV_ARROW_VISIBILITY$$ = "Unsupported value set as 'arrowVisibility' option: ", $_FLEX_BASIS$$ = "flex-basis", $_HIDDEN$$1$$ = "hidden", $_HIDDEN_SELECTOR$$ = ":hidden", $_HORIZONTAL$$ = "horizontal", $_HOVER$$ = "hover", $_CURRENT_ITEM$$ = "currentItem", $_NONE$$1$$ = "none", $_OJ_BOTTOM$$ = "oj-bottom", $_OJ_END$$ = "oj-end", $_OJ_FILMSTRIP_ARROW$$ = "oj-filmstrip-arrow", $_OJ_FILMSTRIP_ARROW_CONTAINER$$ = "oj-filmstrip-arrow-container", $_OJ_FILMSTRIP_ARROW_TRANSITION$$ = "oj-filmstrip-arrow-transition", 
    $_OJ_FILMSTRIP_CONTAINER$$ = "oj-filmstrip-container", $_OJ_FILMSTRIP_HOVER$$ = "oj-filmstrip-hover", $_OJ_FILMSTRIP_ITEM$$ = "oj-filmstrip-item", $_OJ_FILMSTRIP_ITEM_CONTAINER$$ = "oj-filmstrip-item-container", $_OJ_FILMSTRIP_PAGE$$ = "oj-filmstrip-page", $_OJ_FILMSTRIP_PAGES_CONTAINER$$ = "oj-filmstrip-pages-container", $_OJ_FILMSTRIP_TRANSITION$$ = "oj-filmstrip-transition", $_OJ_FILMSTRIP_TRANSITION_NEXT_NEWPAGE_FROM$$ = "oj-filmstrip-transition-next-newpage-from", $_OJ_FILMSTRIP_TRANSITION_NEXT_OLDPAGE_FROM$$ = 
    "oj-filmstrip-transition-next-oldpage-from", $_OJ_FILMSTRIP_TRANSITION_PREV_NEWPAGE_FROM$$ = "oj-filmstrip-transition-prev-newpage-from", $_OJ_FILMSTRIP_TRANSITION_PREV_OLDPAGE_FROM$$ = "oj-filmstrip-transition-prev-oldpage-from", $_OJ_FILMSTRIP_TRANSITION_NEXT_NEWPAGE_TO$$ = "oj-filmstrip-transition-next-newpage-to", $_OJ_FILMSTRIP_TRANSITION_NEXT_OLDPAGE_TO$$ = "oj-filmstrip-transition-next-oldpage-to", $_OJ_FILMSTRIP_TRANSITION_PREV_NEWPAGE_TO$$ = "oj-filmstrip-transition-prev-newpage-to", 
    $_OJ_FILMSTRIP_TRANSITION_PREV_OLDPAGE_TO$$ = "oj-filmstrip-transition-prev-oldpage-to", $_OJ_FILMSTRIP_VERTICAL$$ = "oj-filmstrip-vertical", $_OJ_START$$ = "oj-start", $_OJ_TOP$$ = "oj-top", $_OVERLAY$$ = "overlay", $_PERIOD$$ = ".", $_PX$$1$$ = "px", $_VERTICAL$$ = "vertical", $_VISIBLE$$ = "visible", $_VISIBLE_SELECTOR$$ = ":visible", $_WEBKIT_FLEX_BASIS$$ = "-webkit-flex-basis", $_WARNING_DISABLED_OPTION$$1$$ = "JET FilmStrip: 'disabled' option not supported";
  })();
});

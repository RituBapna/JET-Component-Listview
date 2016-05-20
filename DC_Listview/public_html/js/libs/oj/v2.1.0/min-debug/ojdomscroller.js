/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery"], function($oj$$39$$, $$$$36$$) {
  $oj$$39$$.$DomScroller$ = function $$oj$$39$$$$DomScroller$$($element$$164$$, $datasource$$1$$, $options$$314$$) {
    $options$$314$$ = $options$$314$$ || {};
    this.$_data$ = $datasource$$1$$;
    this.$_element$ = $element$$164$$;
    this.$_fetchSize$ = $options$$314$$.fetchSize;
    this.$_fetchSize$ = 0 < this.$_fetchSize$ ? this.$_fetchSize$ : 25;
    this.$_maxCount$ = $options$$314$$.maxCount;
    this.$_maxCount$ = 0 < this.$_maxCount$ ? this.$_maxCount$ : 500;
    this.$_rowCount$ = 0;
    this.$_successCallback$ = $options$$314$$.success;
    this.$_errorCallback$ = $options$$314$$.error;
    this.$_registerDataSourceEventListeners$();
    $$$$36$$(this.$_element$).on("scroll.domscroller", function($event$$572_maxScrollTop$$2$$) {
      var $scrollTop$$18$$ = $$$$36$$($event$$572_maxScrollTop$$2$$.target).scrollTop();
      $event$$572_maxScrollTop$$2$$ = $$$$36$$($event$$572_maxScrollTop$$2$$.target)[0].scrollHeight - $$$$36$$($event$$572_maxScrollTop$$2$$.target)[0].clientHeight;
      0 < $event$$572_maxScrollTop$$2$$ && this.$_handleScrollerScrollTop$($scrollTop$$18$$, $event$$572_maxScrollTop$$2$$);
    }.bind(this));
  };
  $oj$$39$$.$DomScroller$.prototype.destroy = function $$oj$$39$$$$DomScroller$$$destroy$() {
    this.$_unregisterDataSourceEventListeners$();
    $$$$36$$(this.$_element$).off("scroll.domscroller");
  };
  $oj$$39$$.$Object$.$exportPrototypeSymbol$("DomScroller.prototype.destroy", {destroy:$oj$$39$$.$DomScroller$.prototype.destroy});
  $oj$$39$$.$DomScroller$.prototype.checkViewport = function $$oj$$39$$$$DomScroller$$$checkViewport$() {
    return 0 < this.$_element$[0].clientHeight && !this.$_checkOverflow$() ? this.$_fetchMoreRows$() : Promise.resolve(null);
  };
  $oj$$39$$.$Object$.$exportPrototypeSymbol$("DomScroller.prototype.checkViewport", {checkViewport:$oj$$39$$.$DomScroller$.prototype.checkViewport});
  $oj$$39$$.$DomScroller$.prototype.$_handleScrollerScrollTop$ = function $$oj$$39$$$$DomScroller$$$$_handleScrollerScrollTop$$($scrollTop$$19$$, $maxScrollTop$$3$$) {
    if (1 >= $maxScrollTop$$3$$ - $scrollTop$$19$$) {
      var $self$$168$$ = this;
      this.$_fetchMoreRows$().then(function($result$$61$$) {
        null != $self$$168$$.$_successCallback$ && $self$$168$$.$_successCallback$($result$$61$$);
      }, this.$_errorCallback$);
    }
  };
  $oj$$39$$.$DomScroller$.prototype.$_checkOverflow$ = function $$oj$$39$$$$DomScroller$$$$_checkOverflow$$() {
    var $element$$165$$ = this.$_element$;
    return $element$$165$$[0].scrollHeight > $element$$165$$[0].clientHeight + 1 ? !0 : !1;
  };
  $oj$$39$$.$DomScroller$.prototype.$_fetchMoreRows$ = function $$oj$$39$$$$DomScroller$$$$_fetchMoreRows$$() {
    if (this.$_fetchPromise$) {
      return this.$_fetchPromise$;
    }
    var $remainingCount$$ = this.$_maxCount$ - this.$_rowCount$;
    if (0 < $remainingCount$$) {
      var $pageSize$$5$$ = this.$_fetchSize$, $self$$169$$ = this;
      $remainingCount$$ < this.$_fetchSize$ && ($pageSize$$5$$ = $remainingCount$$);
      var $fetchPromise$$2$$ = this.$_fetchNext$({pageSize:$pageSize$$5$$});
      return this.$_fetchPromise$ = new Promise(function($resolve$$45$$) {
        $fetchPromise$$2$$.then(function($result$$62$$) {
          $self$$169$$.$_fetchPromise$ = null;
          null != $result$$62$$ && ($self$$169$$.$_rowCount$ = $result$$62$$.data.length + $result$$62$$.startIndex, $remainingCount$$ < $self$$169$$.$_fetchSize$ && ($result$$62$$.maxCount = $self$$169$$.$_maxCount$, $result$$62$$.maxCountLimit = !0));
          $resolve$$45$$($result$$62$$);
        });
      });
    }
    return Promise.resolve({maxCount:this.$_maxCount$, maxCountLimit:!0});
  };
  $oj$$39$$.$DomScroller$.prototype.$_fetchNext$ = function $$oj$$39$$$$DomScroller$$$$_fetchNext$$($options$$315$$) {
    $options$$315$$ = $options$$315$$ || {};
    var $pageSize$$6$$ = $options$$315$$.pageSize;
    this.$_currentStartIndex$ = this.$_currentStartIndex$ ? this.$_currentStartIndex$ + $pageSize$$6$$ : $pageSize$$6$$;
    if (-1 == this.$_data$.totalSize() || this.$_data$.totalSize() > this.$_currentStartIndex$) {
      var $self$$170$$ = this;
      return new Promise(function($resolve$$46$$, $reject$$43$$) {
        $self$$170$$.$_data$.fetch({startIndex:$self$$170$$.$_currentStartIndex$, pageSize:$pageSize$$6$$}).then(function($result$$63$$) {
          $resolve$$46$$($result$$63$$);
        }, function() {
          $reject$$43$$(null);
        });
      });
    }
    return Promise.resolve();
  };
  $oj$$39$$.$DomScroller$.prototype.$_handleDataReset$ = function $$oj$$39$$$$DomScroller$$$$_handleDataReset$$() {
    this.$_currentStartIndex$ = null;
    this.$_rowCount$ = 0;
  };
  $oj$$39$$.$DomScroller$.prototype.$_handleDataSync$ = function $$oj$$39$$$$DomScroller$$$$_handleDataSync$$($event$$573$$) {
    this.$_currentStartIndex$ = $event$$573$$.startIndex;
    this.$_rowCount$ = $event$$573$$.data.length + this.$_currentStartIndex$;
  };
  $oj$$39$$.$DomScroller$.prototype.$_registerDataSourceEventListeners$ = function $$oj$$39$$$$DomScroller$$$$_registerDataSourceEventListeners$$() {
    var $data$$150$$ = this.$_data$;
    if (null != $data$$150$$) {
      this.$_unregisterDataSourceEventListeners$();
      this.$_dataSourceEventHandlers$ = [];
      this.$_dataSourceEventHandlers$.push({eventType:$oj$$39$$.$TableDataSource$.$EventType$.SORT, eventHandler:this.$_handleDataReset$.bind(this)});
      this.$_dataSourceEventHandlers$.push({eventType:$oj$$39$$.$TableDataSource$.$EventType$.REFRESH, eventHandler:this.$_handleDataReset$.bind(this)});
      this.$_dataSourceEventHandlers$.push({eventType:$oj$$39$$.$TableDataSource$.$EventType$.RESET, eventHandler:this.$_handleDataReset$.bind(this)});
      this.$_dataSourceEventHandlers$.push({eventType:$oj$$39$$.$TableDataSource$.$EventType$.SYNC, eventHandler:this.$_handleDataSync$.bind(this)});
      var $i$$399$$, $ev$$2$$;
      for ($i$$399$$ = 0;$i$$399$$ < this.$_dataSourceEventHandlers$.length;$i$$399$$++) {
        ($ev$$2$$ = $data$$150$$.on(this.$_dataSourceEventHandlers$[$i$$399$$].eventType, this.$_dataSourceEventHandlers$[$i$$399$$].eventHandler)) && (this.$_dataSourceEventHandlers$[$i$$399$$].eventHandler = $ev$$2$$);
      }
    }
  };
  $oj$$39$$.$DomScroller$.prototype.$_unregisterDataSourceEventListeners$ = function $$oj$$39$$$$DomScroller$$$$_unregisterDataSourceEventListeners$$() {
    var $data$$151$$ = this.$_data$;
    if (null != this.$_dataSourceEventHandlers$ && null != $data$$151$$) {
      var $i$$400$$;
      for ($i$$400$$ = 0;$i$$400$$ < this.$_dataSourceEventHandlers$.length;$i$$400$$++) {
        $data$$151$$.off(this.$_dataSourceEventHandlers$[$i$$400$$].eventType, this.$_dataSourceEventHandlers$[$i$$400$$].eventHandler);
      }
    }
  };
});

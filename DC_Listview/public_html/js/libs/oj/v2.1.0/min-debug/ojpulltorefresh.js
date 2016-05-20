/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "hammerjs", "promise", "ojs/ojjquery-hammer", "ojs/ojcomponentcore"], function($oj$$31$$, $$$$28$$) {
  $oj$$31$$.$PullToRefreshUtils$ = {};
  $goog$exportPath_$$("PullToRefreshUtils", $oj$$31$$.$PullToRefreshUtils$, $oj$$31$$);
  $oj$$31$$.$PullToRefreshUtils$.$setupPullToRefresh$ = function $$oj$$31$$$$PullToRefreshUtils$$$setupPullToRefresh$$($element$$154$$, $refreshFunc$$, $options$$304$$) {
    var $outer$$, $content$$25$$, $panel$$, $threshold$$7$$, $start$$56$$, $height$$44$$, $icon$$10$$, $iconOffset$$, $lastIconClass$$, $title$$9$$, $ratio$$, $iconClass$$;
    $outer$$ = $$$$28$$(document.createElement("div"));
    $oj$$31$$.$PullToRefreshUtils$.$_renderAccessibleLink$($outer$$, $refreshFunc$$, $options$$304$$);
    $content$$25$$ = $$$$28$$(document.createElement("div")).addClass("oj-pulltorefresh-panel");
    $outer$$.append($content$$25$$);
    $panel$$ = $$$$28$$($element$$154$$);
    $panel$$.prepend($outer$$);
    $panel$$.on("touchstart.pulltorefresh", function($event$$490$$) {
      null == $$$$28$$.data($content$$25$$[0], "data-pullstart") && 0 === $panel$$[0].scrollTop && ($oj$$31$$.$PullToRefreshUtils$.$_handlePull$($event$$490$$, $content$$25$$, $options$$304$$), $icon$$10$$ = $content$$25$$.find(".oj-pulltorefresh-icon"), 0 < $icon$$10$$.length && ($iconOffset$$ = $icon$$10$$.parent().outerHeight(!0)), $options$$304$$ && !isNaN($options$$304$$.threshold) && ($threshold$$7$$ = parseInt($options$$304$$.threshold, 10)), $threshold$$7$$ = isNaN($threshold$$7$$) ? $content$$25$$.outerHeight(!0) : 
      Math.max(0, Math.min($threshold$$7$$, $content$$25$$.outerHeight(!0))), $content$$25$$.css("height", 0), $content$$25$$.removeClass("oj-pulltorefresh-transition"), $$$$28$$.data($content$$25$$[0], "data-pullstart", $event$$490$$.originalEvent.touches[0].clientY));
    }).on("touchmove.pulltorefresh", function($event$$491$$) {
      $start$$56$$ = $$$$28$$.data($content$$25$$[0], "data-pullstart");
      null != $start$$56$$ && ($height$$44$$ = $event$$491$$.originalEvent.touches[0].clientY - parseInt($start$$56$$, 10), 0 > $height$$44$$ || ($event$$491$$.preventDefault(), null != $$$$28$$.data($content$$25$$[0], "data-loading") ? $content$$25$$.css("height", Math.max($height$$44$$, $threshold$$7$$)) : ($content$$25$$.css("height", $height$$44$$), $oj$$31$$.$PullToRefreshUtils$.$_fireEvent$($event$$491$$, "pull", $content$$25$$, $height$$44$$), null != $icon$$10$$ && 0 < $icon$$10$$.length && 
      ($lastIconClass$$ = $$$$28$$.data($content$$25$$[0], "data-lasticonclass"), null != $lastIconClass$$ && $icon$$10$$.removeClass($lastIconClass$$), $ratio$$ = 10 * Math.round($height$$44$$ / $threshold$$7$$ * 10), 100 <= $ratio$$ ? ($iconClass$$ = "oj-pulltorefresh-icon-full", $title$$9$$ = $oj$$31$$.$Translations$.$getTranslatedString$("oj-pullToRefresh.titleIconFull")) : ($iconClass$$ = "oj-pulltorefresh-icon-" + $ratio$$ + "-percent", $title$$9$$ = $oj$$31$$.$Translations$.$getTranslatedString$("oj-pullToRefresh.titleIcon" + 
      $ratio$$ + "percent")), $icon$$10$$.addClass($iconClass$$), $icon$$10$$.attr("title", $title$$9$$), $$$$28$$.data($content$$25$$[0], "data-lasticonclass", $iconClass$$), $oj$$31$$.$PullToRefreshUtils$.$_showHideDefaultText$($content$$25$$, $height$$44$$ > $iconOffset$$)))));
    }).on("touchcancel.pulltorefresh", function() {
      $oj$$31$$.$PullToRefreshUtils$.$_cleanup$($content$$25$$);
    }).on("touchend.pulltorefresh", function($event$$493$$) {
      $start$$56$$ = $$$$28$$.data($content$$25$$[0], "data-pullstart");
      null != $start$$56$$ && null == $$$$28$$.data($content$$25$$[0], "data-loading") && ($content$$25$$.outerHeight() < $threshold$$7$$ ? ($content$$25$$.addClass("oj-pulltorefresh-transition").css("height", 0), $oj$$31$$.$PullToRefreshUtils$.$_cleanup$($content$$25$$)) : $oj$$31$$.$PullToRefreshUtils$.$_handleRelease$($event$$493$$, $content$$25$$, $refreshFunc$$));
    });
  };
  $goog$exportPath_$$("PullToRefreshUtils.setupPullToRefresh", $oj$$31$$.$PullToRefreshUtils$.$setupPullToRefresh$, $oj$$31$$);
  $oj$$31$$.$PullToRefreshUtils$.$_handlePull$ = function $$oj$$31$$$$PullToRefreshUtils$$$_handlePull$$($event$$494$$, $content$$26$$, $options$$305$$) {
    var $primaryText$$, $secondaryText$$;
    $oj$$31$$.$PullToRefreshUtils$.$_fireEvent$($event$$494$$, "pull", $content$$26$$, 0);
    0 == $content$$26$$.children().length && ($options$$305$$ && ($primaryText$$ = $options$$305$$.primaryText, $secondaryText$$ = $options$$305$$.secondaryText), $oj$$31$$.$PullToRefreshUtils$.$_createDefaultContent$($content$$26$$, $primaryText$$, $secondaryText$$));
    $content$$26$$.prev().text($oj$$31$$.$Translations$.$getTranslatedString$("oj-pullToRefresh.ariaRefreshingLink"));
    $content$$26$$.css("height", "auto");
    $$$$28$$.data($content$$26$$[0], "data-panelheight", $content$$26$$.outerHeight());
  };
  $oj$$31$$.$PullToRefreshUtils$.$_handleRelease$ = function $$oj$$31$$$$PullToRefreshUtils$$$_handleRelease$$($event$$495$$, $content$$27$$, $refreshFunc$$1$$) {
    var $height$$45$$, $icon$$12$$, $lastIconClass$$1$$, $listener$$39$$;
    $height$$45$$ = $$$$28$$.data($content$$27$$[0], "data-panelheight");
    $content$$27$$.addClass("oj-pulltorefresh-transition").css("height", $height$$45$$);
    $oj$$31$$.$PullToRefreshUtils$.$_fireEvent$($event$$495$$, "release", $content$$27$$, $height$$45$$);
    $$$$28$$.data($content$$27$$[0], "data-loading", !0);
    $icon$$12$$ = $content$$27$$.find(".oj-pulltorefresh-icon");
    0 < $icon$$12$$.length && ($lastIconClass$$1$$ = $$$$28$$.data($content$$27$$[0], "data-lasticonclass"), null != $lastIconClass$$1$$ && $icon$$12$$.removeClass($lastIconClass$$1$$), $icon$$12$$.addClass("oj-pulltorefresh-icon-full"));
    $refreshFunc$$1$$().then(function() {
      $listener$$39$$ = function $$listener$$39$$$() {
        $oj$$31$$.$PullToRefreshUtils$.$_fireEvent$($event$$495$$, "complete", $content$$27$$, $height$$45$$);
        $oj$$31$$.$PullToRefreshUtils$.$_cleanup$($content$$27$$);
        $content$$27$$.off("transitionend", $listener$$39$$);
        $content$$27$$.prev().text("");
      };
      $content$$27$$.prev().text($oj$$31$$.$Translations$.$getTranslatedString$("oj-pullToRefresh.ariaRefreshCompleteLink"));
      $content$$27$$.prev().prev().css("position", "");
      $content$$27$$.on("transitionend", $listener$$39$$);
      $content$$27$$.css("height", 0);
    });
  };
  $oj$$31$$.$PullToRefreshUtils$.$tearDownPullToRefresh$ = function $$oj$$31$$$$PullToRefreshUtils$$$tearDownPullToRefresh$$($element$$155$$) {
    $$$$28$$($element$$155$$).children().first().remove();
    $$$$28$$($element$$155$$).off(".pulltorefresh");
  };
  $goog$exportPath_$$("PullToRefreshUtils.tearDownPullToRefresh", $oj$$31$$.$PullToRefreshUtils$.$tearDownPullToRefresh$, $oj$$31$$);
  $oj$$31$$.$PullToRefreshUtils$.$_fireEvent$ = function $$oj$$31$$$$PullToRefreshUtils$$$_fireEvent$$($originalEvent$$3$$, $event$$496_key$$156$$, $content$$28$$, $distance$$1$$) {
    $event$$496_key$$156$$ = $$$$28$$.Event("oj" + $event$$496_key$$156$$);
    $event$$496_key$$156$$.originalEvent = $originalEvent$$3$$;
    $content$$28$$.trigger($event$$496_key$$156$$, {content:$content$$28$$, distance:$distance$$1$$});
  };
  $oj$$31$$.$PullToRefreshUtils$.$_createDefaultContent$ = function $$oj$$31$$$$PullToRefreshUtils$$$_createDefaultContent$$($content$$29$$, $primary_primaryText$$1$$, $secondary$$1_secondaryText$$1$$) {
    var $icon$$13$$, $iconContainer$$;
    $content$$29$$.addClass("oj-pulltorefresh-content").attr("aria-hidden", "true");
    $icon$$13$$ = $$$$28$$(document.createElement("div"));
    $icon$$13$$.addClass("oj-pulltorefresh-icon oj-pulltorefresh-icon-initial");
    $iconContainer$$ = $$$$28$$(document.createElement("div"));
    $iconContainer$$.addClass("oj-pulltorefresh-icon-container");
    $iconContainer$$.append($icon$$13$$);
    $$$$28$$.data($content$$29$$[0], "data-lasticonclass", "oj-pulltorefresh-icon-initial");
    $content$$29$$.append($iconContainer$$);
    null != $primary_primaryText$$1$$ && ($primary_primaryText$$1$$ = $$$$28$$(document.createElement("div")).addClass("oj-pulltorefresh-primary-text").text($primary_primaryText$$1$$), $content$$29$$.append($primary_primaryText$$1$$), null != $secondary$$1_secondaryText$$1$$ && ($secondary$$1_secondaryText$$1$$ = $$$$28$$(document.createElement("div")).addClass("oj-pulltorefresh-secondary-text").text($secondary$$1_secondaryText$$1$$), $content$$29$$.append($secondary$$1_secondaryText$$1$$)));
  };
  $oj$$31$$.$PullToRefreshUtils$.$_showHideDefaultText$ = function $$oj$$31$$$$PullToRefreshUtils$$$_showHideDefaultText$$($content$$30$$, $show$$) {
    var $primaryText$$2$$, $secondaryText$$2$$;
    $primaryText$$2$$ = $content$$30$$.find(".oj-pulltorefresh-primary-text");
    $secondaryText$$2$$ = $content$$30$$.find(".oj-pulltorefresh-secondary-text");
    $show$$ ? ($primaryText$$2$$ && $primaryText$$2$$.show(), $secondaryText$$2$$ && $secondaryText$$2$$.show()) : ($primaryText$$2$$ && $primaryText$$2$$.hide(), $secondaryText$$2$$ && $secondaryText$$2$$.hide());
  };
  $oj$$31$$.$PullToRefreshUtils$.$_renderAccessibleLink$ = function $$oj$$31$$$$PullToRefreshUtils$$$_renderAccessibleLink$$($panel$$1$$, $refreshFunc$$2$$, $options$$306$$) {
    var $link$$4$$, $content$$31$$, $status$$27$$;
    $link$$4$$ = $$$$28$$(document.createElement("a"));
    $link$$4$$.text($oj$$31$$.$Translations$.$getTranslatedString$("oj-pullToRefresh.ariaRefreshLink"));
    $link$$4$$.addClass("oj-helper-hidden-accessible").attr("href", "#").focus(function() {
      $link$$4$$.css("position", "static");
    }).blur(function($event$$497$$) {
      null != $event$$497$$.relatedTarget && $link$$4$$.css("position", "");
    }).click(function($event$$498$$) {
      $content$$31$$ = $panel$$1$$.children().last();
      $oj$$31$$.$PullToRefreshUtils$.$_handlePull$($event$$498$$, $content$$31$$, $options$$306$$);
      $oj$$31$$.$PullToRefreshUtils$.$_handleRelease$($event$$498$$, $content$$31$$, $refreshFunc$$2$$);
      $refreshFunc$$2$$();
    });
    $status$$27$$ = $$$$28$$(document.createElement("div"));
    $status$$27$$.addClass("oj-helper-hidden-accessible").attr("aria-live", "polite");
    $panel$$1$$.append($link$$4$$);
    $panel$$1$$.append($status$$27$$);
  };
  $oj$$31$$.$PullToRefreshUtils$.$_cleanup$ = function $$oj$$31$$$$PullToRefreshUtils$$$_cleanup$$($content$$32$$) {
    $$$$28$$.removeData($content$$32$$[0], "data-pullstart");
    $$$$28$$.removeData($content$$32$$[0], "data-loading");
    0 < $content$$32$$.find(".oj-pulltorefresh-icon").length && $content$$32$$.empty();
  };
});

/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "knockout", "promise"], function($oj$$43$$, $ko$$5$$) {
  $oj$$43$$.$ModuleAnimations$ = {};
  $oj$$43$$.$ModuleAnimations$.$_DESCRIPTORS$ = {coverStart:{$oldViewClass$:"oj-animation-coverstart", $newViewClass$:"oj-animation-coverstart", $newViewOnTop$:!0}, coverUp:{$newViewClass$:"oj-animation-coverup", $newViewOnTop$:!0}, fade:{$oldViewClass$:"oj-animation-fade", $newViewClass$:"oj-animation-fade", $newViewOnTop$:!1}, revealDown:{$oldViewClass$:"oj-animation-revealdown", $newViewOnTop$:!1}, revealEnd:{$oldViewClass$:"oj-animation-revealend", $newViewClass$:"oj-animation-revealend", $newViewOnTop$:!1}, 
  zoomIn:{$newViewClass$:"oj-animation-zoomin", $newViewOnTop$:!0}, zoomOut:{$oldViewClass$:"oj-animation-zoomout", $newViewOnTop$:!1}};
  $oj$$43$$.$ModuleAnimations$.$_animateElement$ = function $$oj$$43$$$$ModuleAnimations$$$_animateElement$$($element$$166$$, $baseClass$$1$$, $action$$1$$) {
    var $jelem$$10$$ = $($element$$166$$);
    return new Promise(function($resolve$$49$$) {
      function $endListener$$() {
        $resolve$$49$$(!0);
      }
      var $duration$$20_fromClass$$ = "oj-" + $action$$1$$, $toClass$$ = $duration$$20_fromClass$$ + "-active";
      $jelem$$10$$.addClass($baseClass$$1$$);
      $jelem$$10$$.addClass($duration$$20_fromClass$$);
      window.requestAnimationFrame(function() {
        $jelem$$10$$.addClass($toClass$$);
      });
      if (($duration$$20_fromClass$$ = $jelem$$10$$.css("animationDuration") || $jelem$$10$$.css("webkitAnimationDuration")) && "0s" != $duration$$20_fromClass$$) {
        $jelem$$10$$.on("animationend webkitAnimationEnd", $endListener$$);
      } else {
        if (($duration$$20_fromClass$$ = $jelem$$10$$.css("transitionDuration") || $jelem$$10$$.css("webkitTransitionDuration")) && "0s" != $duration$$20_fromClass$$) {
          $jelem$$10$$.on("transitionend webkitTransitionEnd", $endListener$$);
        } else {
          $resolve$$49$$(!0);
        }
      }
    });
  };
  $oj$$43$$.$ModuleAnimations$.$_animateView$ = function $$oj$$43$$$$ModuleAnimations$$$_animateView$$($oldElement$$, $newElement$$1$$, $animateName_descriptor$$2$$) {
    var $promises$$1$$ = [];
    $animateName_descriptor$$2$$ = $oj$$43$$.$ModuleAnimations$.$_DESCRIPTORS$[$animateName_descriptor$$2$$];
    $oldElement$$ && $animateName_descriptor$$2$$ && $animateName_descriptor$$2$$.$oldViewClass$ && $promises$$1$$.push($oj$$43$$.$ModuleAnimations$.$_animateElement$($oldElement$$, $animateName_descriptor$$2$$.$oldViewClass$, "leave"));
    $newElement$$1$$ && $animateName_descriptor$$2$$ && $animateName_descriptor$$2$$.$newViewClass$ && $promises$$1$$.push($oj$$43$$.$ModuleAnimations$.$_animateElement$($newElement$$1$$, $animateName_descriptor$$2$$.$newViewClass$, "enter"));
    return Promise.all($promises$$1$$);
  };
  $oj$$43$$.$ModuleAnimations$.$_addContainedElements$ = function $$oj$$43$$$$ModuleAnimations$$$_addContainedElements$$($node$$100$$, $roots$$) {
    for (var $child$$11$$ = $ko$$5$$.virtualElements.firstChild($node$$100$$);$child$$11$$;) {
      1 == $child$$11$$.nodeType ? $roots$$.push($child$$11$$) : 8 == $child$$11$$.nodeType && this.$_addContainedElements$($child$$11$$, $roots$$), $child$$11$$ = $ko$$5$$.virtualElements.nextSibling($child$$11$$);
    }
  };
  $oj$$43$$.$ModuleAnimations$.$_cacheVirtualViewRoot$ = function $$oj$$43$$$$ModuleAnimations$$$_cacheVirtualViewRoot$$($context$$135$$, $root$$30$$) {
    $context$$135$$._ojOldRoot = $root$$30$$;
  };
  $oj$$43$$.$ModuleAnimations$.$_getVirtualViewRoot$ = function $$oj$$43$$$$ModuleAnimations$$$_getVirtualViewRoot$$($context$$136$$) {
    return $context$$136$$._ojOldRoot;
  };
  $oj$$43$$.$ModuleAnimations$.$_defaultCanAnimate$ = function $$oj$$43$$$$ModuleAnimations$$$_defaultCanAnimate$$($context$$137$$) {
    if ($context$$137$$.isInitial) {
      return!1;
    }
    if (1 == $context$$137$$.node.nodeType) {
      return!0;
    }
    if (8 == $context$$137$$.node.nodeType) {
      var $children$$12$$ = [];
      $oj$$43$$.$ModuleAnimations$.$_addContainedElements$($context$$137$$.node, $children$$12$$);
      if ($children$$12$$ && 1 == $children$$12$$.length) {
        return $oj$$43$$.$ModuleAnimations$.$_cacheVirtualViewRoot$($context$$137$$, $children$$12$$[0]), !0;
      }
    }
    return!1;
  };
  $oj$$43$$.$ModuleAnimations$.$_getOldView$ = function $$oj$$43$$$$ModuleAnimations$$$_getOldView$$($context$$138$$) {
    var $oldView$$;
    1 == $context$$138$$.node.nodeType ? $oldView$$ = $context$$138$$.node : 8 == $context$$138$$.node.nodeType && ($oldView$$ = $oj$$43$$.$ModuleAnimations$.$_getVirtualViewRoot$($context$$138$$));
    return $oldView$$;
  };
  $oj$$43$$.$ModuleAnimations$.$_createViewParent$ = function $$oj$$43$$$$ModuleAnimations$$$_createViewParent$$($host_oldView$$1$$) {
    var $viewport$$ = $(document.createElement("div")), $cssStyle$$ = {position:"absolute", height:$host_oldView$$1$$.offsetHeight + "px", width:$host_oldView$$1$$.offsetWidth + "px", left:$host_oldView$$1$$.offsetLeft + "px", top:$host_oldView$$1$$.offsetTop + "px"};
    $viewport$$.appendTo($host_oldView$$1$$.offsetParent);
    $viewport$$.css($cssStyle$$);
    $viewport$$.addClass("oj-animation-host-viewport");
    $host_oldView$$1$$ = document.createElement("div");
    $host_oldView$$1$$.className = "oj-animation-host";
    $viewport$$.append($host_oldView$$1$$);
    return $host_oldView$$1$$;
  };
  $oj$$43$$.$ModuleAnimations$.$_defaultPrepareAnimation$ = function $$oj$$43$$$$ModuleAnimations$$$_defaultPrepareAnimation$$($context$$139$$, $animateName$$1$$) {
    var $viewParents$$ = {}, $descriptor$$3$$ = $oj$$43$$.$ModuleAnimations$.$_DESCRIPTORS$[$animateName$$1$$], $oldView$$2$$ = $oj$$43$$.$ModuleAnimations$.$_getOldView$($context$$139$$);
    $descriptor$$3$$ && ($descriptor$$3$$.$newViewClass$ && !$descriptor$$3$$.$newViewOnTop$ && ($viewParents$$.newViewParent = $oj$$43$$.$ModuleAnimations$.$_createViewParent$($oldView$$2$$)), $descriptor$$3$$.$oldViewClass$ && ($viewParents$$.oldViewParent = $oj$$43$$.$ModuleAnimations$.$_createViewParent$($oldView$$2$$)), $descriptor$$3$$.$newViewClass$ && $descriptor$$3$$.$newViewOnTop$ && ($viewParents$$.newViewParent = $oj$$43$$.$ModuleAnimations$.$_createViewParent$($oldView$$2$$)));
    return $viewParents$$;
  };
  $oj$$43$$.$ModuleAnimations$.$_defaultAnimate$ = function $$oj$$43$$$$ModuleAnimations$$$_defaultAnimate$$($context$$140$$, $animateName$$2$$) {
    return $oj$$43$$.$ModuleAnimations$.$_animateView$($context$$140$$.oldViewParent, $context$$140$$.newViewParent, $animateName$$2$$).then(function() {
      $oj$$43$$.$ModuleAnimations$.$_postAnimationProcess$($context$$140$$);
    });
  };
  $oj$$43$$.$ModuleAnimations$.$_removeViewParent$ = function $$oj$$43$$$$ModuleAnimations$$$_removeViewParent$$($context$$141$$, $hostProp$$) {
    var $host$$1_viewport$$1$$ = $context$$141$$[$hostProp$$];
    $host$$1_viewport$$1$$ && ($host$$1_viewport$$1$$ = $host$$1_viewport$$1$$.parentNode) && $host$$1_viewport$$1$$.parentNode && $host$$1_viewport$$1$$.parentNode.removeChild($host$$1_viewport$$1$$);
  };
  $oj$$43$$.$ModuleAnimations$.$_postAnimationProcess$ = function $$oj$$43$$$$ModuleAnimations$$$_postAnimationProcess$$($context$$142$$) {
    $context$$142$$.removeOldView();
    $context$$142$$.insertNewView();
    $oj$$43$$.$ModuleAnimations$.$_removeViewParent$($context$$142$$, "newViewParent");
    $oj$$43$$.$ModuleAnimations$.$_removeViewParent$($context$$142$$, "oldViewParent");
  };
  $oj$$43$$.$ModuleAnimations$.$_getImplementation$ = function $$oj$$43$$$$ModuleAnimations$$$_getImplementation$$($animateName$$3$$) {
    return{canAnimate:$oj$$43$$.$ModuleAnimations$.$_defaultCanAnimate$, prepareAnimation:function($context$$143$$) {
      return $oj$$43$$.$ModuleAnimations$.$_defaultPrepareAnimation$($context$$143$$, $animateName$$3$$);
    }, animate:function($context$$144$$) {
      return $oj$$43$$.$ModuleAnimations$.$_defaultAnimate$($context$$144$$, $animateName$$3$$);
    }};
  };
  $oj$$43$$.$ModuleAnimations$.$_getNavigateMethod$ = function $$oj$$43$$$$ModuleAnimations$$$_getNavigateMethod$$($navigationType$$) {
    null == $oj$$43$$.$ModuleAnimations$.$_navigateMethods$ && ($oj$$43$$.$ModuleAnimations$.$_navigateMethods$ = $oj$$43$$.$ThemeUtils$.$parseJSONFromFontFamily$("oj-animation-navigate-methods"));
    return $oj$$43$$.$ModuleAnimations$.$_navigateMethods$ ? $oj$$43$$.$ModuleAnimations$.$_navigateMethods$[$navigationType$$] : null;
  };
  $oj$$43$$.$ModuleAnimations$.$_navigateCanAnimate$ = function $$oj$$43$$$$ModuleAnimations$$$_navigateCanAnimate$$($context$$146$$, $navigationType$$1$$) {
    return $oj$$43$$.$ModuleAnimations$.$_getNavigateMethod$($navigationType$$1$$) && $oj$$43$$.$ModuleAnimations$.$_defaultCanAnimate$($context$$146$$);
  };
  $oj$$43$$.$ModuleAnimations$.$_navigatePrepareAnimation$ = function $$oj$$43$$$$ModuleAnimations$$$_navigatePrepareAnimation$$($context$$147$$, $navigationType$$2$$) {
    var $animateName$$4$$ = $oj$$43$$.$ModuleAnimations$.$_getNavigateMethod$($navigationType$$2$$);
    return $oj$$43$$.$ModuleAnimations$.$_defaultPrepareAnimation$($context$$147$$, $animateName$$4$$);
  };
  $oj$$43$$.$ModuleAnimations$.$_navigateAnimate$ = function $$oj$$43$$$$ModuleAnimations$$$_navigateAnimate$$($context$$148$$, $navigationType$$3$$) {
    var $animateName$$5$$ = $oj$$43$$.$ModuleAnimations$.$_getNavigateMethod$($navigationType$$3$$);
    return $oj$$43$$.$ModuleAnimations$.$_defaultAnimate$($context$$148$$, $animateName$$5$$);
  };
  $oj$$43$$.$ModuleAnimations$.$_getNavigateImplementation$ = function $$oj$$43$$$$ModuleAnimations$$$_getNavigateImplementation$$($navigationType$$4$$) {
    return{canAnimate:function($context$$149$$) {
      return $oj$$43$$.$ModuleAnimations$.$_navigateCanAnimate$($context$$149$$, $navigationType$$4$$);
    }, prepareAnimation:function($context$$150$$) {
      return $oj$$43$$.$ModuleAnimations$.$_navigatePrepareAnimation$($context$$150$$, $navigationType$$4$$);
    }, animate:function($context$$151$$) {
      return $oj$$43$$.$ModuleAnimations$.$_navigateAnimate$($context$$151$$, $navigationType$$4$$);
    }};
  };
  $oj$$43$$.$ModuleAnimations$.$coverStart$ = $oj$$43$$.$ModuleAnimations$.$_getImplementation$("coverStart");
  $goog$exportPath_$$("ModuleAnimations.coverStart", $oj$$43$$.$ModuleAnimations$.$coverStart$, $oj$$43$$);
  $oj$$43$$.$ModuleAnimations$.$revealEnd$ = $oj$$43$$.$ModuleAnimations$.$_getImplementation$("revealEnd");
  $goog$exportPath_$$("ModuleAnimations.revealEnd", $oj$$43$$.$ModuleAnimations$.$revealEnd$, $oj$$43$$);
  $oj$$43$$.$ModuleAnimations$.$coverUp$ = $oj$$43$$.$ModuleAnimations$.$_getImplementation$("coverUp");
  $goog$exportPath_$$("ModuleAnimations.coverUp", $oj$$43$$.$ModuleAnimations$.$coverUp$, $oj$$43$$);
  $oj$$43$$.$ModuleAnimations$.$revealDown$ = $oj$$43$$.$ModuleAnimations$.$_getImplementation$("revealDown");
  $goog$exportPath_$$("ModuleAnimations.revealDown", $oj$$43$$.$ModuleAnimations$.$revealDown$, $oj$$43$$);
  $oj$$43$$.$ModuleAnimations$.$zoomIn$ = $oj$$43$$.$ModuleAnimations$.$_getImplementation$("zoomIn");
  $goog$exportPath_$$("ModuleAnimations.zoomIn", $oj$$43$$.$ModuleAnimations$.$zoomIn$, $oj$$43$$);
  $oj$$43$$.$ModuleAnimations$.$zoomOut$ = $oj$$43$$.$ModuleAnimations$.$_getImplementation$("zoomOut");
  $goog$exportPath_$$("ModuleAnimations.zoomOut", $oj$$43$$.$ModuleAnimations$.$zoomOut$, $oj$$43$$);
  $oj$$43$$.$ModuleAnimations$.$fade$ = $oj$$43$$.$ModuleAnimations$.$_getImplementation$("fade");
  $goog$exportPath_$$("ModuleAnimations.fade", $oj$$43$$.$ModuleAnimations$.$fade$, $oj$$43$$);
  $oj$$43$$.$ModuleAnimations$.$drillIn$ = $oj$$43$$.$ModuleAnimations$.$_getNavigateImplementation$("drillIn");
  $goog$exportPath_$$("ModuleAnimations.drillIn", $oj$$43$$.$ModuleAnimations$.$drillIn$, $oj$$43$$);
  $oj$$43$$.$ModuleAnimations$.$drillOut$ = $oj$$43$$.$ModuleAnimations$.$_getNavigateImplementation$("drillOut");
  $goog$exportPath_$$("ModuleAnimations.drillOut", $oj$$43$$.$ModuleAnimations$.$drillOut$, $oj$$43$$);
  $oj$$43$$.$ModuleAnimations$.$switcher$ = function $$oj$$43$$$$ModuleAnimations$$$switcher$$($callback$$125$$) {
    return new function() {
      function $_getDelegateInvoker$$($name$$115$$) {
        return function($context$$152$$) {
          return $_delegate$$[$name$$115$$].call($_delegate$$, $context$$152$$);
        };
      }
      var $_delegate$$, $_self$$ = this;
      this.canAnimate = function $this$canAnimate$($context$$153$$) {
        var $methods$$4_type$$94$$ = $callback$$125$$($context$$153$$);
        $_delegate$$ = null == $methods$$4_type$$94$$ ? null : $oj$$43$$.ModuleAnimations[$methods$$4_type$$94$$];
        if (!$_delegate$$) {
          return!1;
        }
        for (var $methods$$4_type$$94$$ = ["prepareAnimation", "animate"], $i$$403$$ = 0;$i$$403$$ < $methods$$4_type$$94$$.length;$i$$403$$++) {
          var $method$$8$$ = $methods$$4_type$$94$$[$i$$403$$];
          $_self$$[$method$$8$$] = $_getDelegateInvoker$$($method$$8$$);
        }
        return $_getDelegateInvoker$$("canAnimate")($context$$153$$);
      };
    };
  };
  $goog$exportPath_$$("ModuleAnimations.switcher", $oj$$43$$.$ModuleAnimations$.$switcher$, $oj$$43$$);
});

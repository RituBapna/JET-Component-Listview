/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "knockout", "promise"], function($oj$$23$$, $ko$$4$$) {
  $oj$$23$$.$ModuleBinding$ = {};
  $oj$$23$$.$ModuleBinding$.$defaults$ = {viewPath:"text!views/", viewSuffix:".html", modelPath:"viewModels/", initializeMethod:"initialize", disposeMethod:"dispose", activatedHandler:"handleActivated", attachedHandler:"handleAttached", detachedHandler:"handleDetached", bindingsAppliedHandler:"handleBindingsApplied", deactivatedHandler:"handleDeactivated", transitionCompletedHandler:"handleTransitionCompleted"};
  $goog$exportPath_$$("ModuleBinding.defaults", $oj$$23$$.$ModuleBinding$.$defaults$, $oj$$23$$);
  (function() {
    function $_animate$$($actx$$, $animation$$1$$, $element$$146$$, $oldDomNodes$$, $insertAndActivateFunc$$, $removeOldDomNodes$$, $transitionComplete$$) {
      var $canAnimateFunc_settings$$4$$ = $animation$$1$$.canAnimate;
      if (null == $canAnimateFunc_settings$$4$$ || $canAnimateFunc_settings$$4$$.call($animation$$1$$, $actx$$)) {
        var $newViewParent$$, $oldViewParent$$;
        if ($canAnimateFunc_settings$$4$$ = $animation$$1$$.prepareAnimation.call($animation$$1$$, $actx$$)) {
          $newViewParent$$ = $canAnimateFunc_settings$$4$$.newViewParent, $oldViewParent$$ = $canAnimateFunc_settings$$4$$.oldViewParent;
        }
        var $targetElement$$ = $newViewParent$$ || $element$$146$$;
        $oldViewParent$$ && $oldViewParent$$ !== $element$$146$$ ? $_moveDomNodes$$($oldDomNodes$$, $oldViewParent$$) : $targetElement$$ === $element$$146$$ && $removeOldDomNodes$$(null);
        $targetElement$$ !== $element$$146$$ && $ko$$4$$.virtualElements.setDomNodeChildren($targetElement$$, []);
        $insertAndActivateFunc$$($targetElement$$);
        var $newDomNodes$$ = Array.prototype.slice.call($targetElement$$.childNodes), $viewInserted$$ = !1, $insertNewView$$ = function $$insertNewView$$$() {
          $viewInserted$$ || ($viewInserted$$ = !0, $element$$146$$ !== $targetElement$$ && $_insertNodes$$($element$$146$$, $newDomNodes$$));
        }, $removeOldView$$ = $removeOldDomNodes$$.bind(null, $oldViewParent$$);
        $actx$$.newViewParent = $newViewParent$$;
        $actx$$.oldViewParent = $oldViewParent$$;
        $actx$$.oldViewNodes = $oldDomNodes$$;
        $actx$$.removeOldView = $removeOldView$$;
        $actx$$.insertNewView = $insertNewView$$;
        var $postAnimation$$ = function $$postAnimation$$$() {
          $removeOldView$$();
          $insertNewView$$();
          $transitionComplete$$();
        };
        return $animation$$1$$.animate.call($animation$$1$$, $actx$$).then($postAnimation$$, function() {
          $postAnimation$$();
          $oj$$23$$.$Logger$.error("ojModule animation promise was rejected");
        });
      }
    }
    function $_detachOldView$$($element$$147$$, $oldViewParent$$1$$, $cacheHolder$$) {
      $oldViewParent$$1$$ = $oldViewParent$$1$$ || $element$$147$$;
      var $empty$$5$$ = [];
      $cacheHolder$$ && $element$$147$$ === $oldViewParent$$1$$ && ($cacheHolder$$.parentNode.removeChild($cacheHolder$$), $empty$$5$$.push($cacheHolder$$));
      $ko$$4$$.virtualElements.setDomNodeChildren($oldViewParent$$1$$, $empty$$5$$);
    }
    function $_moveDomNodes$$($nodes$$2$$, $target$$121$$) {
      $nodes$$2$$.forEach(function($n$$22$$) {
        $target$$121$$.appendChild($n$$22$$);
      });
    }
    function $_invokeLifecycleListener$$($listener$$38$$, $method$$7$$, $params$$23$$) {
      if ($listener$$38$$ && $listener$$38$$[$method$$7$$]) {
        var $data$$138$$ = {element:$params$$23$$[0], valueAccessor:$params$$23$$[1]};
        2 < $params$$23$$.length && ($data$$138$$.viewModel = $params$$23$$[2], 3 < $params$$23$$.length && ($data$$138$$["boolean" === typeof $params$$23$$[3] ? "fromCache" : "cachedNodes"] = $params$$23$$[3]));
        return $ko$$4$$.ignoreDependencies($listener$$38$$[$method$$7$$], $listener$$38$$, [$data$$138$$]);
      }
    }
    function $_invokeViewModelMethod$$($model$$58$$, $handler$$50_key$$145_name$$110$$, $params$$24$$) {
      if (null != $model$$58$$ && ($handler$$50_key$$145_name$$110$$ = $oj$$23$$.$ModuleBinding$.$defaults$[$handler$$50_key$$145_name$$110$$], null != $handler$$50_key$$145_name$$110$$ && $model$$58$$ && ($handler$$50_key$$145_name$$110$$ = $model$$58$$[$handler$$50_key$$145_name$$110$$], "function" === typeof $handler$$50_key$$145_name$$110$$))) {
        var $data$$139$$ = void 0;
        $params$$24$$ && ($data$$139$$ = {element:$params$$24$$[0], valueAccessor:$params$$24$$[1]}, 2 < $params$$24$$.length && ($data$$139$$["boolean" === typeof $params$$24$$[2] ? "fromCache" : "cachedNodes"] = $params$$24$$[2]));
        return $ko$$4$$.ignoreDependencies($handler$$50_key$$145_name$$110$$, $model$$58$$, [$data$$139$$]);
      }
    }
    function $_getContainedNodes$$($container$$25_node$$84$$, $cacheHolder$$1$$, $endCommentNode$$) {
      var $childList$$ = [];
      for ($container$$25_node$$84$$ = $ko$$4$$.virtualElements.firstChild($container$$25_node$$84$$);null != $container$$25_node$$84$$ && $container$$25_node$$84$$ != $endCommentNode$$;$container$$25_node$$84$$ = $container$$25_node$$84$$.nextSibling) {
        $container$$25_node$$84$$ != $cacheHolder$$1$$ && $childList$$.push($container$$25_node$$84$$);
      }
      return $childList$$;
    }
    function $_getKoNodes$$($container$$26$$, $cacheHolder$$2$$) {
      var $nodes$$3$$ = [], $firstChild$$4$$ = $ko$$4$$.virtualElements.firstChild($container$$26$$);
      $_koNodesForEach$$($firstChild$$4$$, $cacheHolder$$2$$, function($node$$85$$) {
        $nodes$$3$$.push($node$$85$$);
      });
      return $nodes$$3$$;
    }
    function $_koNodesForEach$$($first$$7_node$$86$$, $cacheHolder$$3$$, $callback$$112$$) {
      for (;null != $first$$7_node$$86$$;) {
        var $next$$6$$ = $ko$$4$$.virtualElements.nextSibling($first$$7_node$$86$$), $type$$86$$ = $first$$7_node$$86$$.nodeType;
        $first$$7_node$$86$$ === $cacheHolder$$3$$ || 1 !== $type$$86$$ && 8 !== $type$$86$$ || $callback$$112$$($first$$7_node$$86$$);
        $first$$7_node$$86$$ = $next$$6$$;
      }
    }
    function $_insertNodes$$($container$$27$$, $nodes$$4$$) {
      for (var $i$$357$$ = $nodes$$4$$.length - 1;0 <= $i$$357$$;$i$$357$$--) {
        $ko$$4$$.virtualElements.prepend($container$$27$$, $nodes$$4$$[$i$$357$$]);
      }
    }
    function $_propagateSubtreeVisibilityToComponents$$($nodeArray$$, $visible$$) {
      if (null != $oj$$23$$.Components) {
        for (var $i$$358$$ = 0;$i$$358$$ < $nodeArray$$.length;$i$$358$$++) {
          $visible$$ ? $oj$$23$$.Components.$subtreeShown$($nodeArray$$[$i$$358$$]) : $oj$$23$$.Components.$subtreeHidden$($nodeArray$$[$i$$358$$]);
        }
      }
    }
    function $_getDomNodes$$($content$$24$$) {
      if ("string" === typeof $content$$24$$) {
        $content$$24$$ = $ko$$4$$.utils.parseHtmlFragment($content$$24$$);
      } else {
        if (window.DocumentFragment ? $content$$24$$ instanceof DocumentFragment : $content$$24$$ && 11 === $content$$24$$.nodeType) {
          $content$$24$$ = $ko$$4$$.utils.arrayPushAll([], $content$$24$$.childNodes);
        } else {
          if (Array.isArray($content$$24$$)) {
            $content$$24$$ = $ko$$4$$.utils.arrayPushAll([], $content$$24$$);
          } else {
            throw "The View (" + $content$$24$$ + ") has an unsupported type";
          }
        }
      }
      return $content$$24$$;
    }
    function $_getRequirePromise$$($module$$1$$) {
      return new Promise(function($resolve$$37$$) {
        require([$module$$1$$], function($loaded$$) {
          $resolve$$37$$($loaded$$);
        }, function() {
          throw Error("ojModule failed to load " + $module$$1$$);
        });
      });
    }
    function $_createNoFailPromise$$($promise$$5$$) {
      return $promise$$5$$ ? new Promise(function($resolve$$38$$) {
        $promise$$5$$.then($resolve$$38$$, $resolve$$38$$);
      }) : $promise$$5$$;
    }
    $ko$$4$$.bindingHandlers.ojModule = {init:function $$ko$$4$$$bindingHandlers$ojModule$init$($element$$148$$, $valueAccessor$$20$$, $allBindingsAccessor$$15$$, $viewModel$$4$$, $bindingContext$$35$$) {
      function $checkPeningId$$($id$$33$$) {
        if ($id$$33$$ != $pendingViewId$$) {
          throw Error("Promise cancelled because ojModule is fetching new View and ViewModel");
        }
      }
      function $invokeModelDispose$$($model$$59$$) {
        $_invokeViewModelMethod$$($model$$59$$, "disposeMethod", [$element$$148$$, $valueAccessor$$20$$]);
      }
      var $currentViewModel$$, $currentAnimationPromise$$, $cache$$ = {}, $currentCacheKey$$, $pendingViewId$$ = -1, $cacheHolder$$4$$, $endCommentNode$$1$$;
      $ko$$4$$.utils.domNodeDisposal.addDisposeCallback($element$$148$$, function() {
        $invokeModelDispose$$($currentViewModel$$);
        for (var $keys$$47$$ = Object.keys($cache$$), $i$$359$$ = 0;$i$$359$$ < $keys$$47$$.length;$i$$359$$++) {
          $invokeModelDispose$$($cache$$[$keys$$47$$[$i$$359$$]].$model$);
        }
      });
      8 === $element$$148$$.nodeType && ($ko$$4$$.virtualElements.setDomNodeChildren($element$$148$$, []), $endCommentNode$$1$$ = $element$$148$$.nextSibling);
      $ko$$4$$.computed(function() {
        $pendingViewId$$++;
        var $isInitial$$1$$ = 0 === $pendingViewId$$, $attachPromise_unwrap$$ = $ko$$4$$.utils.unwrapObservable, $value$$257$$ = $attachPromise_unwrap$$($valueAccessor$$20$$()), $moduleName$$, $viewName$$, $params$$25$$, $modelFactory$$, $viewFunction$$, $cacheKey$$, $lifecycleListener$$, $animation$$2$$;
        "string" === typeof $value$$257$$ ? $moduleName$$ = $value$$257$$ : ($moduleName$$ = $attachPromise_unwrap$$($value$$257$$.name), $viewName$$ = $attachPromise_unwrap$$($value$$257$$.viewName), $params$$25$$ = $attachPromise_unwrap$$($value$$257$$.params), $modelFactory$$ = $attachPromise_unwrap$$($value$$257$$.viewModelFactory), $viewFunction$$ = $attachPromise_unwrap$$($value$$257$$.createViewFunction), $cacheKey$$ = $attachPromise_unwrap$$($value$$257$$.cacheKey), $lifecycleListener$$ = 
        $attachPromise_unwrap$$($value$$257$$.lifecycleListener), $animation$$2$$ = $attachPromise_unwrap$$($value$$257$$.animation));
        var $attachPromise_unwrap$$ = $_invokeLifecycleListener$$($lifecycleListener$$, "activated", [$element$$148$$, $valueAccessor$$20$$]), $viewPromise$$, $modelPromise$$, $cached$$ = null == $cacheKey$$ ? null : $cache$$[$cacheKey$$];
        if (null != $cached$$) {
          delete $cache$$[$cacheKey$$], $viewPromise$$ = Promise.resolve($cached$$.view), $modelPromise$$ = Promise.resolve($cached$$.$model$);
        } else {
          if (null != $modelFactory$$ && ($modelPromise$$ = $ko$$4$$.ignoreDependencies($modelFactory$$.createViewModel, $modelFactory$$, [$params$$25$$, $valueAccessor$$20$$])), null == $modelPromise$$ && null != $moduleName$$ && ($modelPromise$$ = $_getRequirePromise$$($oj$$23$$.$ModuleBinding$.$defaults$.modelPath + $moduleName$$)), null != $modelPromise$$ && ($modelPromise$$ = $modelPromise$$.then(function($id$$34$$, $viewModel$$5$$) {
            $checkPeningId$$($id$$34$$);
            return $viewModel$$5$$ = "function" === typeof $viewModel$$5$$ ? new $viewModel$$5$$($params$$25$$) : $_invokeViewModelMethod$$($viewModel$$5$$, "initializeMethod", [$element$$148$$, $valueAccessor$$20$$]) || $viewModel$$5$$;
          }.bind(null, $pendingViewId$$)), null != $viewFunction$$ && ($viewPromise$$ = $modelPromise$$.then(function($id$$35$$, $model$$61$$) {
            $checkPeningId$$($id$$35$$);
            if (null == $model$$61$$) {
              throw "createViewFunction option cannot be used when the ViewModel is null";
            }
            var $viewMethod$$ = $model$$61$$[$viewFunction$$];
            if (null == $viewMethod$$) {
              throw "function specified by the createViewFunction option was not found on the ViewModel";
            }
            return $viewMethod$$.call($model$$61$$);
          }.bind(null, $pendingViewId$$)))), null == $viewPromise$$) {
            if ($viewName$$ = null == $viewName$$ ? $moduleName$$ : $viewName$$, null != $viewName$$) {
              $viewPromise$$ = $_getRequirePromise$$($oj$$23$$.$ModuleBinding$.$defaults$.viewPath + $viewName$$ + $oj$$23$$.$ModuleBinding$.$defaults$.viewSuffix);
            } else {
              throw Error("View name must be specified");
            }
          }
        }
        if (null == $viewPromise$$) {
          throw Error("ojModule is missing a View");
        }
        var $modelAttachPromise$$;
        null != $modelPromise$$ && ($modelAttachPromise$$ = $modelPromise$$.then(function($id$$36$$, $viewModel$$6$$) {
          $checkPeningId$$($id$$36$$);
          return $_invokeViewModelMethod$$($viewModel$$6$$, "activatedHandler", [$element$$148$$, $valueAccessor$$20$$]);
        }.bind(null, $pendingViewId$$)));
        Promise.all([$viewPromise$$, $modelPromise$$, $attachPromise_unwrap$$, $modelAttachPromise$$, $currentAnimationPromise$$]).then(function($id$$37$$, $values$$12$$) {
          if ($id$$37$$ == $pendingViewId$$) {
            var $removeOldDomNodes$$1_view$$3$$ = $values$$12$$[0];
            if (null == $removeOldDomNodes$$1_view$$3$$) {
              throw "The module's View was resolved to null";
            }
            var $nodes$$5$$ = $_getDomNodes$$($removeOldDomNodes$$1_view$$3$$), $model$$62$$ = $values$$12$$[1], $saveInCache$$ = !1, $cachedNodeArray$$, $oldDomNodes$$1$$ = $_getContainedNodes$$($element$$148$$, $cacheHolder$$4$$, $endCommentNode$$1$$), $oldKoNodes$$ = $_getKoNodes$$($element$$148$$, $cacheHolder$$4$$);
            null != $currentCacheKey$$ && ($saveInCache$$ = !0, $cachedNodeArray$$ = $oldDomNodes$$1$$, $cacheHolder$$4$$ || ($cacheHolder$$4$$ = document.createElement("div"), $cacheHolder$$4$$.className = "oj-helper-module-cache", $ko$$4$$.virtualElements.prepend($element$$148$$, $cacheHolder$$4$$)));
            var $oldNodesRemoved$$ = !1, $removeOldDomNodes$$1_view$$3$$ = function $$removeOldDomNodes$$1_view$$3$$$($oldViewParent$$2$$) {
              $oldNodesRemoved$$ || ($oldNodesRemoved$$ = !0, $saveInCache$$ ? $_moveDomNodes$$($oldDomNodes$$1$$, $cacheHolder$$4$$) : $oldKoNodes$$.forEach(function($n$$23$$) {
                $ko$$4$$.cleanNode($n$$23$$);
              }), $_detachOldView$$($element$$148$$, $oldViewParent$$2$$ || $element$$148$$, $cacheHolder$$4$$), $isInitial$$1$$ || ($_invokeLifecycleListener$$($lifecycleListener$$, "detached", [$element$$148$$, $valueAccessor$$20$$, $currentViewModel$$, $cachedNodeArray$$]), $_invokeViewModelMethod$$($currentViewModel$$, "detachedHandler", [$element$$148$$, $valueAccessor$$20$$, $cachedNodeArray$$]), $_invokeLifecycleListener$$($lifecycleListener$$, "deactivated", [$element$$148$$, $valueAccessor$$20$$, 
              $currentViewModel$$]), $_invokeViewModelMethod$$($currentViewModel$$, "deactivatedHandler", [$element$$148$$, $valueAccessor$$20$$])), $saveInCache$$ ? ($_propagateSubtreeVisibilityToComponents$$($cachedNodeArray$$, !1), $cache$$[$currentCacheKey$$] = {$model$:$currentViewModel$$, view:$cachedNodeArray$$}) : $invokeModelDispose$$($currentViewModel$$), $currentViewModel$$ = $model$$62$$, $currentCacheKey$$ = $cacheKey$$);
            }, $insertAndActivateNewNodes$$ = function $$insertAndActivateNewNodes$$$($targetElement$$1$$) {
              $targetElement$$1$$ = $targetElement$$1$$ || $element$$148$$;
              $_insertNodes$$($targetElement$$1$$, $nodes$$5$$);
              var $fromCache$$ = null != $cached$$;
              $fromCache$$ && $_propagateSubtreeVisibilityToComponents$$($nodes$$5$$, !0);
              $_invokeLifecycleListener$$($lifecycleListener$$, "attached", [$targetElement$$1$$, $valueAccessor$$20$$, $model$$62$$, $fromCache$$]);
              $_invokeViewModelMethod$$($model$$62$$, "attachedHandler", [$targetElement$$1$$, $valueAccessor$$20$$, $fromCache$$]);
              if (!$fromCache$$) {
                var $childBindingContext$$ = $bindingContext$$35$$.createChildContext($model$$62$$, void 0, function($ctx$$3$$) {
                  $ctx$$3$$.$module = $model$$62$$;
                  $ctx$$3$$.$params = $params$$25$$;
                });
                $_koNodesForEach$$($nodes$$5$$[0], $cacheHolder$$4$$, function($node$$88$$) {
                  $ko$$4$$.applyBindings($childBindingContext$$, $node$$88$$);
                });
                $_invokeLifecycleListener$$($lifecycleListener$$, "bindingsApplied", [$targetElement$$1$$, $valueAccessor$$20$$, $model$$62$$]);
                $_invokeViewModelMethod$$($model$$62$$, "bindingsAppliedHandler", [$targetElement$$1$$, $valueAccessor$$20$$]);
              }
            }, $transitionComplete$$1$$ = function $$transitionComplete$$1$$$() {
              $_invokeLifecycleListener$$($lifecycleListener$$, "transitionCompleted", [$element$$148$$, $valueAccessor$$20$$, $model$$62$$]);
              $_invokeViewModelMethod$$($model$$62$$, "transitionCompletedHandler", [$element$$148$$, $valueAccessor$$20$$]);
            };
            if (null != $animation$$2$$) {
              var $promise$$6$$ = $_animate$$({node:$element$$148$$, valueAccessor:$valueAccessor$$20$$, isInitial:$isInitial$$1$$, oldViewModel:$currentViewModel$$, newViewModel:$model$$62$$}, $animation$$2$$, $element$$148$$, $oldDomNodes$$1$$, $insertAndActivateNewNodes$$, $removeOldDomNodes$$1_view$$3$$, $transitionComplete$$1$$);
              $currentAnimationPromise$$ = $_createNoFailPromise$$($promise$$6$$);
            } else {
              $currentAnimationPromise$$ = void 0;
            }
            $currentAnimationPromise$$ || ($removeOldDomNodes$$1_view$$3$$(null), $insertAndActivateNewNodes$$(null), $transitionComplete$$1$$());
          }
        }.bind(null, $pendingViewId$$), function($id$$38$$, $reason$$7$$) {
          $id$$38$$ == $pendingViewId$$ && null != $reason$$7$$ && $oj$$23$$.$Logger$.error($reason$$7$$);
        }.bind(null, $pendingViewId$$));
      }, null, {disposeWhenNodeIsRemoved:$element$$148$$});
      return{controlsDescendantBindings:!0};
    }};
    $ko$$4$$.virtualElements.allowedBindings.ojModule = !0;
  })();
});

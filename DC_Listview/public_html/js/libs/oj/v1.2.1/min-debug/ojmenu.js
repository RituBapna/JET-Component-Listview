/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojpopupcore"], function($oj$$79$$, $$$$73$$) {
  (function() {
    $oj$$79$$.$__registerWidget$("oj.ojMenu", $$$$73$$.oj.baseComponent, {defaultElement:"\x3cul\x3e", delay:300, role:"menu", widgetEventPrefix:"oj", options:{menuSelector:"ul", openOptions:{initialFocus:"menu", launcher:null, position:{my:"start top", at:"start bottom", collision:"flipfit"}}, submenuOpenOptions:{position:{my:"start top", at:"end top", collision:"flipfit"}}, beforeOpen:null, select:null}, _ComponentCreate:function() {
      this._super();
      this._focusForTesting = this.$_focus$;
      this._nextForTesting = this.$_next$;
      this._selectForTesting = this.$_select$;
      this.$activeMenu$ = this.element;
      this.$mouseHandled$ = !1;
      this.element.uniqueId().addClass("oj-menu oj-component").hide().attr({role:this.role, tabIndex:"0"});
      this._on(!0, {"mousedown .oj-menu-item":function($event$$648$$) {
        this.options.disabled && $event$$648$$.preventDefault();
      }, click:function($event$$649$$) {
        this.options.disabled && $event$$649$$.preventDefault();
      }, keydown:function($event$$650$$) {
        !this.options.disabled || $event$$650$$.keyCode !== $$$$73$$.ui.keyCode.ESCAPE && $event$$650$$.keyCode !== $$$$73$$.ui.keyCode.TAB || ($event$$650$$.keyCode === $$$$73$$.ui.keyCode.TAB && $event$$650$$.preventDefault(), this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$650$$));
      }});
      this.options.disabled && this.element.addClass("oj-disabled").attr("aria-disabled", "true");
      var $handleMouseEnterMenuItem$$ = function($event$$651$$) {
        if (!this.$focusHandled$) {
          this.$focusHandled$ = !0;
          var $target$$102$$ = $$$$73$$($event$$651$$.currentTarget);
          $target$$102$$.siblings().removeClass("oj-focus-ancestor");
          this.$_focus$($event$$651$$, $target$$102$$);
        }
      }.bind(this);
      this._on({"mousedown .oj-menu-item \x3e a":function($event$$652$$) {
        $event$$652$$.preventDefault();
      }, "click .oj-disabled \x3e a":function($event$$653$$) {
        $event$$653$$.preventDefault();
      }, click:function() {
        this.$mouseHandled$ = !1;
      }, touchstart:function() {
        this.$focusHandled$ = !1;
      }, mouseover:function() {
        this.$focusHandled$ = !1;
      }, "click .oj-menu-item:has(a)":function($event$$657$$) {
        var $target$$103$$ = $$$$73$$($event$$657$$.target).closest(".oj-menu-item");
        !this.$mouseHandled$ && $target$$103$$.not(".oj-disabled").length && (this.$mouseHandled$ = !0, $event$$657$$.preventDefault(), this.$active$ && this.$active$.closest($target$$103$$).length && this.$active$.get(0) != $target$$103$$.get(0) || ($target$$103$$.has(".oj-menu").length ? this.$_expand$($event$$657$$) : (this.$_select$($event$$657$$), this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.$active$ && 1 === this.$active$.parents(".oj-menu").length && clearTimeout(this.$timer$)))));
      }, "mouseenter .oj-menu-item":$handleMouseEnterMenuItem$$, "touchstart .oj-menu-item":$handleMouseEnterMenuItem$$, mouseleave:function($event$$658$$) {
        this.$_collapse$($event$$658$$, "eventSubtree");
      }, "mouseleave .oj-menu":function($event$$659$$) {
        this.$_collapse$($event$$659$$, "eventSubtree");
      }, focus:function($event$$660$$, $keepActiveItem$$) {
        if (!$keepActiveItem$$) {
          var $item$$125$$ = this.$active$ || this.element.children(".oj-menu-item").eq(0);
          this.$_focus$($event$$660$$, $item$$125$$);
        }
      }, keydown:this.$_keydown$, keyup:function($event$$661$$) {
        if ($event$$661$$.keyCode == $$$$73$$.ui.keyCode.ENTER || $event$$661$$.keyCode == $$$$73$$.ui.keyCode.SPACE) {
          this.$__spaceEnterDownInMenu$ = !1;
        }
      }});
      this.$_usingCallback$ = $$$$73$$.proxy(this.$_usingHandler$, this);
      this.$_setup$();
    }, $__contextMenuPressHoldJustEnded$:function($val$$81$$) {
      if (arguments.length) {
        $_contextMenuPressHoldJustEnded$$ = $val$$81$$;
      } else {
        return $_contextMenuPressHoldJustEnded$$;
      }
    }, $_clickAwayHandler$:function($event$$662$$) {
      if (("focus" === $event$$662$$.type || "mousedown" === $event$$662$$.type || "touchstart" === $event$$662$$.type || 93 == $event$$662$$.which || 121 == $event$$662$$.which && $event$$662$$.shiftKey || 93 == $event$$662$$.keyCode) && ("mousedown" !== $event$$662$$.type || !$_contextMenuPressHoldJustEnded$$)) {
        var $openPopupMenus$$ = $_openPopupMenus$$.slice(0, $_openPopupMenus$$.length);
        $$$$73$$.each($openPopupMenus$$, function($index$$299$$, $menu$$26$$) {
          !$$$$73$$($event$$662$$.target).closest($menu$$26$$.element).length && ("keydown" === $event$$662$$.type || "mousedown" === $event$$662$$.type && 3 === $event$$662$$.which || !$$$$73$$($event$$662$$.target).closest($menu$$26$$.$_launcher$).length || $menu$$26$$.$_launcherClickShouldDismiss$ && ("mousedown" === $event$$662$$.type && 3 !== $event$$662$$.which || "touchstart" === $event$$662$$.type)) && ($menu$$26$$.$_collapse$($event$$662$$, "eventSubtree"), $menu$$26$$.$_launcher$ && $menu$$26$$.$__dismiss$($event$$662$$));
        });
      }
    }, _setOption:function($key$$190$$, $value$$301$$) {
      this._superApply(arguments);
      this.$_launcher$ || ("submenuOpenOptions" === $key$$190$$ ? this.$_submenuPosition$ = $oj$$79$$.$PositionUtils$.$normalizeHorizontalAlignment$($value$$301$$.position, this.$isRtl$) : "submenuOpenOptions.position" === $key$$190$$ && (this.$_submenuPosition$ = $oj$$79$$.$PositionUtils$.$normalizeHorizontalAlignment$($value$$301$$, this.$isRtl$)));
    }, _destroy:function() {
      this.element.is(":visible") && this.$__dismiss$();
      clearTimeout(this.$timer$);
      delete this.$timer$;
      this.element.removeAttr("aria-activedescendant").removeClass("oj-component").find(".oj-menu").addBack().removeClass("oj-menu oj-menu-submenu oj-menu-icons oj-menu-text-only").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
      this.element.find(".oj-menu-item").removeClass("oj-menu-item").removeAttr("role").children("a").removeAttr("aria-disabled").removeUniqueId().removeClass("oj-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
        var $elem$$169$$ = $$$$73$$(this);
        $elem$$169$$.data("oj-ojMenu-submenu-icon") && $elem$$169$$.remove();
      });
      this.element.find("a").removeAttr("aria-expanded");
      this.element.find(".oj-menu-divider").removeClass("oj-menu-divider").removeAttr("role");
      0 <= $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1);
      delete this.$_popupServiceEvents$;
      delete this.$_usingCallback$;
      var $closeDelayTimer$$2$$ = this.$_closeDelayTimer$;
      isNaN($closeDelayTimer$$2$$) || (delete this.$_closeDelayTimer$, window.clearTimeout($closeDelayTimer$$2$$));
      this._super();
    }, $_keydown$:function($event$$663$$) {
      function $escape$$1$$($value$$302$$) {
        return $value$$302$$.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$\x26");
      }
      var $match$$25_prev$$4$$, $activeItemId_character$$1$$, $skip$$3_topLevelAnchorSelector$$, $regex$$1$$, $preventDefault$$ = !0;
      switch($event$$663$$.keyCode) {
        case $$$$73$$.ui.keyCode.HOME:
          this.$_move$("first", "first", $event$$663$$);
          break;
        case $$$$73$$.ui.keyCode.END:
          this.$_move$("last", "last", $event$$663$$);
          break;
        case $$$$73$$.ui.keyCode.UP:
          this.$_previous$($event$$663$$);
          break;
        case $$$$73$$.ui.keyCode.DOWN:
          this.$_next$($event$$663$$);
          break;
        case $$$$73$$.ui.keyCode.LEFT:
        ;
        case $$$$73$$.ui.keyCode.RIGHT:
          $event$$663$$.keyCode === $$$$73$$.ui.keyCode.RIGHT ^ this.$isRtl$ ? this.$active$ && !this.$active$.is(".oj-disabled") && this.$_expand$($event$$663$$) : this.$_collapse$($event$$663$$, "active");
          break;
        case $$$$73$$.ui.keyCode.ENTER:
        ;
        case $$$$73$$.ui.keyCode.SPACE:
          this.$_handleEnterSpace$($event$$663$$);
          this.$__spaceEnterDownInMenu$ = !0;
          var $self$$220$$ = this;
          setTimeout(function() {
            $self$$220$$.$__spaceEnterDownInMenu$ = !1;
          }, 100);
          break;
        case $$$$73$$.ui.keyCode.TAB:
          $event$$663$$.preventDefault();
          this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$663$$);
          break;
        case $$$$73$$.ui.keyCode.ESCAPE:
          this.$_launcher$ ? ($activeItemId_character$$1$$ = this.element.attr("aria-activedescendant"), $skip$$3_topLevelAnchorSelector$$ = "#" + this.element.attr("id") + "\x3e*\x3ea", $activeItemId_character$$1$$ && !$$$$73$$("#" + $activeItemId_character$$1$$).is($skip$$3_topLevelAnchorSelector$$) ? this.$_collapse$($event$$663$$, "active") : this.$_focusLauncherAndDismiss$($event$$663$$)) : this.$_collapse$($event$$663$$, "active");
          break;
        default:
          $preventDefault$$ = !1, $match$$25_prev$$4$$ = this.$previousFilter$ || "", $activeItemId_character$$1$$ = String.fromCharCode($event$$663$$.keyCode), $skip$$3_topLevelAnchorSelector$$ = !1, clearTimeout(this.$filterTimer$), $activeItemId_character$$1$$ === $match$$25_prev$$4$$ ? $skip$$3_topLevelAnchorSelector$$ = !0 : $activeItemId_character$$1$$ = $match$$25_prev$$4$$ + $activeItemId_character$$1$$, $regex$$1$$ = new RegExp("^" + $escape$$1$$($activeItemId_character$$1$$), "i"), $match$$25_prev$$4$$ = 
          this.$activeMenu$.children(".oj-menu-item").filter(function() {
            return $regex$$1$$.test($$$$73$$(this).children("a").text());
          }), $match$$25_prev$$4$$ = $skip$$3_topLevelAnchorSelector$$ && -1 !== $match$$25_prev$$4$$.index(this.$active$.next()) ? this.$active$.nextAll(".oj-menu-item") : $match$$25_prev$$4$$, $match$$25_prev$$4$$.length || ($activeItemId_character$$1$$ = String.fromCharCode($event$$663$$.keyCode), $regex$$1$$ = new RegExp("^" + $escape$$1$$($activeItemId_character$$1$$), "i"), $match$$25_prev$$4$$ = this.$activeMenu$.children(".oj-menu-item").filter(function() {
            return $regex$$1$$.test($$$$73$$(this).children("a").text());
          })), $match$$25_prev$$4$$.length ? (this.$_focus$($event$$663$$, $match$$25_prev$$4$$), 1 < $match$$25_prev$$4$$.length ? (this.$previousFilter$ = $activeItemId_character$$1$$, this.$filterTimer$ = this._delay(function() {
            delete this.$previousFilter$;
          }, 1E3)) : delete this.$previousFilter$) : delete this.$previousFilter$;
      }
      $preventDefault$$ && $event$$663$$.preventDefault();
    }, $_handleEnterSpace$:function($event$$664$$) {
      this.$active$ && !this.$active$.is(".oj-disabled") && (this.$active$.children("a[aria-haspopup\x3d'true']").length ? this.$_expand$($event$$664$$) : this.$_select$($event$$664$$));
    }, refresh:function() {
      this._super();
      this.$_setup$();
      var $element$$145$$ = this.element;
      if ($element$$145$$.is(":visible")) {
        var $position$$50$$ = $element$$145$$.data("oj-menu-position");
        $position$$50$$ && $element$$145$$.position($position$$50$$);
        $element$$145$$.find(".oj-menu").each(function() {
          var $menu$$27$$ = $$$$73$$(this);
          $menu$$27$$.is(":visible") && ($position$$50$$ = $menu$$27$$.data("oj-menu-position")) && $menu$$27$$.position($position$$50$$);
        });
      }
    }, $_setup$:function() {
      this.$isRtl$ = "rtl" === this.$_GetReadingDirection$();
      this.$_submenuPosition$ = $oj$$79$$.$PositionUtils$.$normalizeHorizontalAlignment$(this.options.submenuOpenOptions.position, this.$isRtl$);
      var $self$$221$$ = this, $submenus$$ = this.element.find(this.options.menuSelector), $menus$$ = $submenus$$.add(this.element), $children$$33$$ = $menus$$.children();
      $children$$33$$.filter(".oj-menu-divider").has("a").removeClass("oj-menu-divider oj-menu-item").removeAttr("role");
      $children$$33$$.filter(":not(.oj-menu-item):has(a)").addClass("oj-menu-item").attr("role", "presentation").children("a").uniqueId().attr({tabIndex:"-1", role:"menuitem"});
      $children$$33$$.filter(":not(.oj-menu-item)").each(function() {
        var $item$$126$$ = $$$$73$$(this);
        /[^\-\u2014\u2013\s]/.test($item$$126$$.text()) || $item$$126$$.addClass("oj-menu-divider").attr("role", "separator");
      });
      $children$$33$$.filter(".oj-disabled").children("a").attr("aria-disabled", "true");
      $children$$33$$.filter(":not(.oj-disabled)").children("a").removeAttr("aria-disabled");
      $submenus$$.filter(":not(.oj-menu)").addClass("oj-menu oj-menu-submenu").hide().attr({role:this.role, "aria-hidden":"true"}).each(function() {
        var $menu$$28$$ = $$$$73$$(this), $item$$127_itemId$$1$$ = $self$$221$$.$_getSubmenuAnchor$($menu$$28$$), $submenuIcon$$ = $$$$73$$("\x3cspan\x3e");
        $submenuIcon$$.addClass("oj-menu-submenu-icon oj-component-icon").data("oj-ojMenu-submenu-icon", !0);
        $item$$127_itemId$$1$$.attr("aria-haspopup", "true").attr("aria-expanded", "false").append($submenuIcon$$);
        $item$$127_itemId$$1$$ = $item$$127_itemId$$1$$.attr("id");
        $menu$$28$$.attr("aria-labelledby", $item$$127_itemId$$1$$);
      });
      $menus$$.each(function() {
        var $menu$$29$$ = $$$$73$$(this), $iconCount$$ = $menu$$29$$.children().children().children(".oj-menu-item-icon").length;
        $menu$$29$$.toggleClass("oj-menu-icons", !!$iconCount$$).toggleClass("oj-menu-text-only", !$iconCount$$);
      });
      this.$active$ && !$$$$73$$.contains(this.element[0], this.$active$[0]) && this.$_blur$();
    }, $_getSubmenuAnchor$:function($submenu$$) {
      return $submenu$$.prev("a");
    }, $_itemRole$:function() {
      return "menuitem";
    }, $_addDividers$:function($menuItem$$2$$) {
      return $menuItem$$2$$.add($menuItem$$2$$.prev(".oj-menu-divider")).add($menuItem$$2$$.next(".oj-menu-divider"));
    }, $_focus$:function($event$$665$$, $item$$128$$) {
      $event$$665$$ && "focus" === $event$$665$$.type || clearTimeout(this.$timer$);
      $item$$128$$ = $item$$128$$.first();
      this.$_makeActive$($item$$128$$, $event$$665$$);
      var $nested$$1_parentMenuItem$$ = $item$$128$$.parent().closest(".oj-menu-item");
      this.$_addDividers$($nested$$1_parentMenuItem$$).addClass("oj-focus-ancestor");
      $event$$665$$ && "keydown" === $event$$665$$.type ? this.$_close$() : this.$timer$ = this._delay(function() {
        delete this.$timer$;
        this.$_close$();
      }, this.delay);
      $nested$$1_parentMenuItem$$ = $item$$128$$.children(".oj-menu");
      $nested$$1_parentMenuItem$$.length && $event$$665$$ && /^mouse/.test($event$$665$$.type) && !this.$active$.hasClass("oj-disabled") && this.$_startOpening$($nested$$1_parentMenuItem$$);
      this.$activeMenu$ = $item$$128$$.parent();
    }, $_makeActive$:function($item$$129$$, $event$$666$$) {
      if (!$item$$129$$.is(this.$active$)) {
        var $previousItem$$2$$ = this.$active$ ? this.$active$ : $$$$73$$(), $anchor$$8$$ = $item$$129$$.children("a");
        this.$active$ = $item$$129$$;
        this.element.attr("aria-activedescendant", $anchor$$8$$.attr("id"));
        this.$_addDividers$($previousItem$$2$$).removeClass("oj-focus");
        this.$_addDividers$($item$$129$$).addClass("oj-focus");
        this._trigger("_activeItem", $event$$666$$, {previousItem:$previousItem$$2$$, item:$item$$129$$, privateNotice:"The _activeItem event is private.  Do not use."});
      }
    }, $_removeActive$:function($event$$667$$) {
      if (this.$active$) {
        var $previousItem$$3$$ = this.$active$;
        this.$active$ = null;
        this.element.removeAttr("aria-activedescendant");
        this.$_addDividers$($previousItem$$3$$).removeClass("oj-focus");
        this._trigger("_activeItem", $event$$667$$, {previousItem:$previousItem$$3$$, item:$$$$73$$(), privateNotice:"The _activeItem event is private.  Do not use."});
      }
    }, $_blur$:function($event$$668$$) {
      clearTimeout(this.$timer$);
      this.$_removeActive$($event$$668$$);
    }, $_focusLauncherAndDismiss$:function($event$$669$$) {
      this.$_launcher$.focus();
      this.$__dismiss$($event$$669$$);
    }, $__dismiss$:function($event$$670$$) {
      var $psOptions$$8$$ = {};
      $psOptions$$8$$[$oj$$79$$.$PopupService$.$OPTION$.$POPUP$] = this.element;
      $oj$$79$$.$PopupService$.$getInstance$().close($psOptions$$8$$);
      this.element.removeData("oj-menu-position");
      this.$_launcher$ = void 0;
      this._trigger("__dismiss", $event$$670$$, {});
      0 <= $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1);
    }, open:function($event$$671$$, $initialFocus$$2_openOptions$$7$$, $psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$) {
      this.element.is(":visible") && this.$__dismiss$();
      $initialFocus$$2_openOptions$$7$$ = $$$$73$$.extend({}, this.options.openOptions, $initialFocus$$2_openOptions$$7$$);
      $initialFocus$$2_openOptions$$7$$.position = $$$$73$$.extend({}, $initialFocus$$2_openOptions$$7$$.position);
      $psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$ = $$$$73$$.extend({}, this.options.submenuOpenOptions, $psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$);
      $oj$$79$$.$PositionUtils$.$_normalizeEventForPosition$($event$$671$$);
      this.$_launcherClickShouldDismiss$ = this.$__openingContextMenu$;
      if (this._trigger("beforeOpen", $event$$671$$, {openOptions:$initialFocus$$2_openOptions$$7$$})) {
        var $launcher$$25$$ = $initialFocus$$2_openOptions$$7$$.launcher;
        if (($launcher$$25$$ = "string" === $$$$73$$.type($launcher$$25$$) ? $$$$73$$($launcher$$25$$) : $launcher$$25$$) && $launcher$$25$$.length) {
          var $focusFirstItem_position$$51$$ = $oj$$79$$.$PositionUtils$.$normalizeHorizontalAlignment$($initialFocus$$2_openOptions$$7$$.position, this.$isRtl$);
          $focusFirstItem_position$$51$$.of = $oj$$79$$.$PositionUtils$.$normalizePositionOf$($focusFirstItem_position$$51$$.of, $launcher$$25$$, $event$$671$$);
          if (null == $focusFirstItem_position$$51$$.of) {
            $oj$$79$$.$Logger$.warn("position.of passed to Menu.open() is 'event', but the event is null.  Ignoring the call.");
          } else {
            var $currentMenu$$ = this.element[0], $openPopupMenus$$1$$ = $_openPopupMenus$$.slice(0, $_openPopupMenus$$.length);
            $$$$73$$.each($openPopupMenus$$1$$, function($index$$300$$, $menu$$30$$) {
              $menu$$30$$.element[0] !== $currentMenu$$ && ($menu$$30$$.$_collapse$($event$$671$$, "eventSubtree"), $menu$$30$$.$_launcher$ && $menu$$30$$.$__dismiss$($event$$671$$));
            });
            this.$_submenuPosition$ = $oj$$79$$.$PositionUtils$.$normalizeHorizontalAlignment$($psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$.position, this.$isRtl$);
            $psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$ = this.$_usingCallback$;
            $$$$73$$.isFunction($focusFirstItem_position$$51$$.using) && $focusFirstItem_position$$51$$.using !== $psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$ && ($focusFirstItem_position$$51$$.origUsing = $focusFirstItem_position$$51$$.using);
            $focusFirstItem_position$$51$$.using = $psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$;
            $psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$ = {};
            $psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$[$oj$$79$$.$PopupService$.$OPTION$.$POPUP$] = this.element;
            $psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$[$oj$$79$$.$PopupService$.$OPTION$.$LAUNCHER$] = $launcher$$25$$;
            $psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$[$oj$$79$$.$PopupService$.$OPTION$.$POSITION$] = $focusFirstItem_position$$51$$;
            $psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$[$oj$$79$$.$PopupService$.$OPTION$.$EVENTS$] = this.$_getPopupServiceEvents$();
            $psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$[$oj$$79$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = "oj-menu-layer";
            $oj$$79$$.$PopupService$.$getInstance$().open($psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$);
            this.element.data("oj-menu-position", $focusFirstItem_position$$51$$);
            $initialFocus$$2_openOptions$$7$$ = $initialFocus$$2_openOptions$$7$$.initialFocus;
            (($focusFirstItem_position$$51$$ = "firstItem" === $initialFocus$$2_openOptions$$7$$) || "menu" === $initialFocus$$2_openOptions$$7$$) && this.element.focus();
            $focusFirstItem_position$$51$$ ? this.$_focus$($event$$671$$, this.element.children().first()) : this.$_blur$($event$$671$$);
            this.$_launcher$ = $launcher$$25$$;
            $_openPopupMenus$$.push(this);
          }
        } else {
          $oj$$79$$.$Logger$.warn("When calling Menu.open(), must specify openOptions.launcher via the component option, method param, or beforeOpen listener.  Ignoring the call.");
        }
      }
    }, $_startOpening$:function($submenu$$1$$) {
      clearTimeout(this.$timer$);
      "true" === $submenu$$1$$.attr("aria-hidden") && (this.$timer$ && clearTimeout(this.$timer$), this.$timer$ = this._delay(function() {
        delete this.$timer$;
        this.$_close$();
        this.$_open$($submenu$$1$$);
      }, this.delay));
    }, $_open$:function($submenu$$2$$) {
      var $position$$52$$ = $$$$73$$.extend({of:this.$active$}, this.$_submenuPosition$);
      clearTimeout(this.$timer$);
      this.element.find(".oj-menu").not($submenu$$2$$.parents(".oj-menu")).hide().attr("aria-hidden", "true").removeData("oj-menu-position");
      $submenu$$2$$.show().removeAttr("aria-hidden").position($position$$52$$).data("oj-menu-position", $position$$52$$);
      this.$_getSubmenuAnchor$($submenu$$2$$).attr("aria-expanded", "true");
      !this.$_launcher$ && 0 > $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.push(this);
    }, $__collapseAll$:function($event$$672$$, $all$$1$$, $delay$$3$$) {
      function $collapseMenu$$() {
        delete $self$$222$$.$timer$;
        var $currentMenu$$1$$ = $all$$1$$ ? $self$$222$$.element : $$$$73$$($event$$672$$ && $event$$672$$.target).closest($self$$222$$.element.find(".oj-menu"));
        $currentMenu$$1$$.length || ($currentMenu$$1$$ = $self$$222$$.element);
        $self$$222$$.$_close$($currentMenu$$1$$);
        $self$$222$$.$_blur$($event$$672$$);
        $self$$222$$.$activeMenu$ = $currentMenu$$1$$;
      }
      clearTimeout(this.$timer$);
      var $self$$222$$ = this;
      $delay$$3$$ ? this.$timer$ = this._delay($collapseMenu$$, $delay$$3$$) : $collapseMenu$$();
    }, $_close$:function($startMenu$$) {
      $startMenu$$ || ($startMenu$$ = this.$active$ ? this.$active$.parent() : this.element);
      var $menus$$1$$ = $startMenu$$.find(".oj-menu");
      $menus$$1$$.hide().attr("aria-hidden", "true").removeData("oj-menu-position");
      this.$_getSubmenuAnchor$($menus$$1$$).attr("aria-expanded", "false");
      $startMenu$$.find("oj-focus-ancestor").removeClass("oj-focus-ancestor");
      this.$_launcher$ || 0 <= $_openPopupMenus$$.indexOf(this) && $startMenu$$ === this.element && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1);
    }, $_collapse$:function($event$$673$$, $which$$) {
      if (null == $which$$ || "active" === $which$$) {
        var $newItem$$ = this.$activeMenu$ && this.$activeMenu$.closest(".oj-menu-item", this.element);
        $newItem$$ && $newItem$$.length && (this.$_close$(), this.$_focus$($event$$673$$, $newItem$$));
      } else {
        "all" === $which$$ || "eventSubtree" === $which$$ ? this.$__collapseAll$($event$$673$$, "all" === $which$$, this.delay) : $oj$$79$$.$Logger$.warn("Invalid param " + $which$$ + " passed to Menu._collapse().  Ignoring the call.");
      }
    }, $_expand$:function($event$$674$$) {
      var $newItem$$1$$ = this.$active$ && this.$active$.children(".oj-menu ").children(".oj-menu-item").first();
      $newItem$$1$$ && $newItem$$1$$.length && (this.$_open$($newItem$$1$$.parent()), this.$timer$ && clearTimeout(this.$timer$), this.$timer$ = this._delay(function() {
        delete this.$timer$;
        this.$_focus$($event$$674$$, $newItem$$1$$);
      }));
    }, $_next$:function($event$$675$$) {
      this.$_move$("next", "first", $event$$675$$);
    }, $_previous$:function($event$$676$$) {
      this.$_move$("prev", "last", $event$$676$$);
    }, $_isFirstItem$:function() {
      return this.$active$ && !this.$active$.prevAll(".oj-menu-item").length;
    }, $_isLastItem$:function() {
      return this.$active$ && !this.$active$.nextAll(".oj-menu-item").length;
    }, $_move$:function($direction$$14$$, $filter$$5$$, $event$$677$$) {
      var $next$$10$$;
      this.$active$ && ($next$$10$$ = "first" === $direction$$14$$ || "last" === $direction$$14$$ ? this.$active$["first" === $direction$$14$$ ? "prevAll" : "nextAll"](".oj-menu-item").eq(-1) : this.$active$[$direction$$14$$ + "All"](".oj-menu-item").eq(0));
      $next$$10$$ && $next$$10$$.length && this.$active$ || ($next$$10$$ = this.$activeMenu$.children(".oj-menu-item")[$filter$$5$$]());
      this.$_focus$($event$$677$$, $next$$10$$);
    }, $_select$:function($event$$678$$) {
      if (!this.$active$ && $event$$678$$ && $event$$678$$.target) {
        var $menuItem$$3_ui$$49$$ = $$$$73$$($event$$678$$.target).closest(".oj-menu-item");
        $menuItem$$3_ui$$49$$.closest(this.element).length && this.$_makeActive$($menuItem$$3_ui$$49$$, $event$$678$$);
      }
      this.$active$ ? this.$active$.has(".oj-menu").length || this.$active$.is(".oj-disabled") ? $oj$$79$$.$Logger$.warn("Selecting a disabled menu item or parent menu item is not allowed.") : ($menuItem$$3_ui$$49$$ = {item:this.$active$}, this.$__collapseAll$($event$$678$$, !0), this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$678$$), this._trigger("select", $event$$678$$, $menuItem$$3_ui$$49$$)) : $oj$$79$$.$Logger$.warn("Menu._select() called when no menu item is focused and no menu item can be inferred from event param.");
    }, $_surrogateRemoveHandler$:function() {
      this.element.remove();
    }, $_getPopupServiceEvents$:function() {
      if (!this.$_popupServiceEvents$) {
        var $events$$17$$ = this.$_popupServiceEvents$ = {};
        $events$$17$$[$oj$$79$$.$PopupService$.$EVENT$.$POPUP_CLOSE$] = $$$$73$$.proxy(this.$_closeAll$, this);
        $events$$17$$[$oj$$79$$.$PopupService$.$EVENT$.$POPUP_REMOVE$] = $$$$73$$.proxy(this.$_surrogateRemoveHandler$, this);
        $events$$17$$[$oj$$79$$.$PopupService$.$EVENT$.$POPUP_REFRESH$] = $$$$73$$.proxy(this.refresh, this);
        $events$$17$$[$oj$$79$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$] = $$$$73$$.proxy(this.$_clickAwayHandler$, this);
      }
      return this.$_popupServiceEvents$;
    }, $_closeAll$:function() {
      this.$_close$(this.element);
      this.$__dismiss$(null);
    }, $_usingHandler$:function($pos$$19$$, $props$$26$$) {
      var $origUsing$$1_position$$53_rootMenu$$ = $props$$26$$.element.element;
      $origUsing$$1_position$$53_rootMenu$$.css($pos$$19$$);
      ($origUsing$$1_position$$53_rootMenu$$ = $origUsing$$1_position$$53_rootMenu$$.data("oj-menu-position")) && ($origUsing$$1_position$$53_rootMenu$$ = $origUsing$$1_position$$53_rootMenu$$.origUsing) && $origUsing$$1_position$$53_rootMenu$$($pos$$19$$, $props$$26$$);
      $oj$$79$$.$PositionUtils$.$isAligningPositionClipped$($props$$26$$) && (this.$_closeDelayTimer$ = this._delay($$$$73$$.proxy(this.$_closeAll$, this), 1));
    }});
    var $_openPopupMenus$$ = [], $_contextMenuPressHoldJustEnded$$ = !1;
  })();
});

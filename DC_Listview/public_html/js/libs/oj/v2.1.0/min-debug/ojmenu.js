/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojpopupcore"], function($oj$$80$$, $$$$74$$) {
  (function() {
    $oj$$80$$.$__registerWidget$("oj.ojMenu", $$$$74$$.oj.baseComponent, {defaultElement:"\x3cul\x3e", delay:300, role:"menu", widgetEventPrefix:"oj", options:{menuSelector:"ul", openOptions:{initialFocus:"menu", launcher:null, position:{my:"start top", at:"start bottom", collision:"flipfit"}}, submenuOpenOptions:{position:{my:"start top", at:"end top", collision:"flipfit"}}, beforeOpen:null, close:null, open:null, select:null}, _ComponentCreate:function() {
      this._super();
      this._focusForTesting = this.$_focus$;
      this._nextForTesting = this.$_next$;
      this._selectForTesting = this.$_select$;
      this.$activeMenu$ = this.element;
      this.$mouseHandled$ = !1;
      this.element.uniqueId().addClass("oj-menu oj-component").hide().attr({role:this.role, tabIndex:"0"});
      this._on(!0, {"mousedown .oj-menu-item":function($event$$779$$) {
        this.options.disabled && $event$$779$$.preventDefault();
      }, click:function($event$$780$$) {
        this.options.disabled && $event$$780$$.preventDefault();
      }, keydown:function($event$$781$$) {
        !this.options.disabled || $event$$781$$.keyCode !== $$$$74$$.ui.keyCode.ESCAPE && $event$$781$$.keyCode !== $$$$74$$.ui.keyCode.TAB || ($event$$781$$.keyCode === $$$$74$$.ui.keyCode.TAB && $event$$781$$.preventDefault(), this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$781$$));
      }});
      this.options.disabled && this.element.addClass("oj-disabled").attr("aria-disabled", "true");
      var $handleMouseEnterMenuItem$$ = function($event$$782$$) {
        if (!this.$focusHandled$) {
          this.$focusHandled$ = !0;
          var $target$$140$$ = $$$$74$$($event$$782$$.currentTarget);
          $target$$140$$.siblings().removeClass("oj-focus-ancestor");
          this.$_focus$($event$$782$$, $target$$140$$);
        }
      }.bind(this);
      this._on({"mousedown .oj-menu-item \x3e a":function($event$$783$$) {
        $event$$783$$.preventDefault();
      }, "click .oj-disabled \x3e a":function($event$$784$$) {
        $event$$784$$.preventDefault();
      }, click:function() {
        this.$mouseHandled$ = !1;
      }, touchstart:function() {
        this.$focusHandled$ = !1;
      }, mouseover:function() {
        this.$focusHandled$ = !1;
      }, "click .oj-menu-item:has(a)":function($event$$788$$) {
        var $target$$141$$ = $$$$74$$($event$$788$$.target).closest(".oj-menu-item");
        !this.$mouseHandled$ && $target$$141$$.not(".oj-disabled").length && (this.$mouseHandled$ = !0, $event$$788$$.preventDefault(), this.$active$ && this.$active$.closest($target$$141$$).length && this.$active$.get(0) != $target$$141$$.get(0) || ($target$$141$$.has(".oj-menu").length ? this.$_expand$($event$$788$$) : (this.$_select$($event$$788$$), this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.$active$ && 1 === this.$active$.parents(".oj-menu").length && clearTimeout(this.$timer$)))));
      }, "mouseenter .oj-menu-item":$handleMouseEnterMenuItem$$, "touchstart .oj-menu-item":$handleMouseEnterMenuItem$$, mouseleave:function($event$$789$$) {
        this.$_collapse$($event$$789$$, "eventSubtree");
      }, "mouseleave .oj-menu":function($event$$790$$) {
        this.$_collapse$($event$$790$$, "eventSubtree");
      }, focus:function($event$$791$$, $keepActiveItem$$) {
        if (!$keepActiveItem$$) {
          var $item$$137$$ = this.$active$ || this.element.children(".oj-menu-item").eq(0);
          this.$_focus$($event$$791$$, $item$$137$$);
        }
      }, keydown:this.$_keydown$, keyup:function($event$$792$$) {
        if ($event$$792$$.keyCode == $$$$74$$.ui.keyCode.ENTER || $event$$792$$.keyCode == $$$$74$$.ui.keyCode.SPACE) {
          this.$__spaceEnterDownInMenu$ = !1;
        }
      }});
      this.$_usingCallback$ = $$$$74$$.proxy(this.$_usingHandler$, this);
      this.$_setup$();
    }, $__contextMenuPressHoldJustEnded$:function($val$$85$$) {
      if (arguments.length) {
        $_contextMenuPressHoldJustEnded$$ = $val$$85$$;
      } else {
        return $_contextMenuPressHoldJustEnded$$;
      }
    }, $_clickAwayHandler$:function($event$$793$$) {
      if (("focus" === $event$$793$$.type || "mousedown" === $event$$793$$.type || "touchstart" === $event$$793$$.type || 93 == $event$$793$$.which || 121 == $event$$793$$.which && $event$$793$$.shiftKey || 93 == $event$$793$$.keyCode) && ("mousedown" !== $event$$793$$.type || !$_contextMenuPressHoldJustEnded$$)) {
        var $openPopupMenus$$ = $_openPopupMenus$$.slice(0, $_openPopupMenus$$.length);
        $$$$74$$.each($openPopupMenus$$, function($index$$344$$, $menu$$26$$) {
          !$$$$74$$($event$$793$$.target).closest($menu$$26$$.element).length && ("keydown" === $event$$793$$.type || "mousedown" === $event$$793$$.type && 3 === $event$$793$$.which || !$$$$74$$($event$$793$$.target).closest($menu$$26$$.$_launcher$).length || $menu$$26$$.$_launcherClickShouldDismiss$ && ("mousedown" === $event$$793$$.type && 3 !== $event$$793$$.which || "touchstart" === $event$$793$$.type)) && ($menu$$26$$.$_collapse$($event$$793$$, "eventSubtree"), $menu$$26$$.$_launcher$ && $menu$$26$$.$__dismiss$($event$$793$$));
        });
      }
    }, _setOption:function($key$$213$$, $value$$309$$) {
      this._superApply(arguments);
      this.$_launcher$ || ("submenuOpenOptions" === $key$$213$$ ? this.$_submenuPosition$ = $oj$$80$$.$PositionUtils$.$normalizeHorizontalAlignment$($value$$309$$.position, this.$isRtl$) : "submenuOpenOptions.position" === $key$$213$$ && (this.$_submenuPosition$ = $oj$$80$$.$PositionUtils$.$normalizeHorizontalAlignment$($value$$309$$, this.$isRtl$)));
    }, _destroy:function() {
      this.element.is(":visible") && this.$__dismiss$();
      clearTimeout(this.$timer$);
      delete this.$timer$;
      this.element.removeAttr("aria-activedescendant").removeClass("oj-component").find(".oj-menu").addBack().removeClass("oj-menu oj-menu-submenu oj-menu-icons oj-menu-text-only").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
      this.element.find(".oj-menu-item").removeClass("oj-menu-item").removeAttr("role").children("a").removeAttr("aria-disabled").removeUniqueId().removeClass("oj-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
        var $elem$$201$$ = $$$$74$$(this);
        $elem$$201$$.data("oj-ojMenu-submenu-icon") && $elem$$201$$.remove();
      });
      this.element.find("a").removeAttr("aria-expanded");
      this.element.find(".oj-menu-divider").removeClass("oj-menu-divider").removeAttr("role");
      0 <= $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1);
      delete this.$_popupServiceEvents$;
      delete this.$_usingCallback$;
      var $closeDelayTimer$$2$$ = this.$_closeDelayTimer$;
      isNaN($closeDelayTimer$$2$$) || (delete this.$_closeDelayTimer$, window.clearTimeout($closeDelayTimer$$2$$));
      this._super();
    }, $_keydown$:function($event$$794$$) {
      function $escape$$1$$($value$$310$$) {
        return $value$$310$$.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$\x26");
      }
      var $match$$26_prev$$7$$, $activeItemId_character$$1$$, $skip$$5_topLevelAnchorSelector$$, $regex$$1$$, $preventDefault$$ = !0;
      switch($event$$794$$.keyCode) {
        case $$$$74$$.ui.keyCode.HOME:
          this.$_move$("first", "first", $event$$794$$);
          break;
        case $$$$74$$.ui.keyCode.END:
          this.$_move$("last", "last", $event$$794$$);
          break;
        case $$$$74$$.ui.keyCode.UP:
          this.$_previous$($event$$794$$);
          break;
        case $$$$74$$.ui.keyCode.DOWN:
          this.$_next$($event$$794$$);
          break;
        case $$$$74$$.ui.keyCode.LEFT:
        ;
        case $$$$74$$.ui.keyCode.RIGHT:
          $event$$794$$.keyCode === $$$$74$$.ui.keyCode.RIGHT ^ this.$isRtl$ ? this.$active$ && !this.$active$.is(".oj-disabled") && this.$_expand$($event$$794$$) : this.$_collapse$($event$$794$$, "active");
          break;
        case $$$$74$$.ui.keyCode.ENTER:
        ;
        case $$$$74$$.ui.keyCode.SPACE:
          this.$_handleEnterSpace$($event$$794$$);
          this.$__spaceEnterDownInMenu$ = !0;
          var $self$$242$$ = this;
          setTimeout(function() {
            $self$$242$$.$__spaceEnterDownInMenu$ = !1;
          }, 100);
          break;
        case $$$$74$$.ui.keyCode.TAB:
          $event$$794$$.preventDefault();
          this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$794$$);
          break;
        case $$$$74$$.ui.keyCode.ESCAPE:
          this.$_launcher$ ? ($activeItemId_character$$1$$ = this.element.attr("aria-activedescendant"), $skip$$5_topLevelAnchorSelector$$ = "#" + this.element.attr("id") + "\x3e*\x3ea", $activeItemId_character$$1$$ && !$$$$74$$("#" + $activeItemId_character$$1$$).is($skip$$5_topLevelAnchorSelector$$) ? this.$_collapse$($event$$794$$, "active") : this.$_focusLauncherAndDismiss$($event$$794$$)) : this.$_collapse$($event$$794$$, "active");
          break;
        default:
          $preventDefault$$ = !1, $match$$26_prev$$7$$ = this.$previousFilter$ || "", $activeItemId_character$$1$$ = String.fromCharCode($event$$794$$.keyCode), $skip$$5_topLevelAnchorSelector$$ = !1, clearTimeout(this.$filterTimer$), $activeItemId_character$$1$$ === $match$$26_prev$$7$$ ? $skip$$5_topLevelAnchorSelector$$ = !0 : $activeItemId_character$$1$$ = $match$$26_prev$$7$$ + $activeItemId_character$$1$$, $regex$$1$$ = new RegExp("^" + $escape$$1$$($activeItemId_character$$1$$), "i"), $match$$26_prev$$7$$ = 
          this.$activeMenu$.children(".oj-menu-item").filter(function() {
            return $regex$$1$$.test($$$$74$$(this).children("a").text());
          }), $match$$26_prev$$7$$ = $skip$$5_topLevelAnchorSelector$$ && -1 !== $match$$26_prev$$7$$.index(this.$active$.next()) ? this.$active$.nextAll(".oj-menu-item") : $match$$26_prev$$7$$, $match$$26_prev$$7$$.length || ($activeItemId_character$$1$$ = String.fromCharCode($event$$794$$.keyCode), $regex$$1$$ = new RegExp("^" + $escape$$1$$($activeItemId_character$$1$$), "i"), $match$$26_prev$$7$$ = this.$activeMenu$.children(".oj-menu-item").filter(function() {
            return $regex$$1$$.test($$$$74$$(this).children("a").text());
          })), $match$$26_prev$$7$$.length ? (this.$_focus$($event$$794$$, $match$$26_prev$$7$$), 1 < $match$$26_prev$$7$$.length ? (this.$previousFilter$ = $activeItemId_character$$1$$, this.$filterTimer$ = this._delay(function() {
            delete this.$previousFilter$;
          }, 1E3)) : delete this.$previousFilter$) : delete this.$previousFilter$;
      }
      $preventDefault$$ && $event$$794$$.preventDefault();
    }, $_handleEnterSpace$:function($event$$795$$) {
      this.$active$ && !this.$active$.is(".oj-disabled") && (this.$active$.children("a[aria-haspopup\x3d'true']").length ? this.$_expand$($event$$795$$) : this.$_select$($event$$795$$));
    }, refresh:function() {
      this._super();
      this.$_setup$();
      var $element$$179$$ = this.element;
      if ($element$$179$$.is(":visible")) {
        var $position$$55$$ = $element$$179$$.data("oj-menu-position");
        $position$$55$$ && $element$$179$$.position($position$$55$$);
        $element$$179$$.find(".oj-menu").each(function() {
          var $menu$$27$$ = $$$$74$$(this);
          $menu$$27$$.is(":visible") && ($position$$55$$ = $menu$$27$$.data("oj-menu-position")) && $menu$$27$$.position($position$$55$$);
        });
      }
    }, $_setup$:function() {
      this.$isRtl$ = "rtl" === this.$_GetReadingDirection$();
      this.$_submenuPosition$ = $oj$$80$$.$PositionUtils$.$normalizeHorizontalAlignment$(this.options.submenuOpenOptions.position, this.$isRtl$);
      var $self$$243$$ = this, $submenus$$ = this.element.find(this.options.menuSelector), $menus$$ = $submenus$$.add(this.element), $children$$34$$ = $menus$$.children();
      $children$$34$$.filter(".oj-menu-divider").has("a").removeClass("oj-menu-divider oj-menu-item").removeAttr("role");
      $children$$34$$.filter(":not(.oj-menu-item):has(a)").addClass("oj-menu-item").attr("role", "presentation").children("a").uniqueId().attr({tabIndex:"-1", role:"menuitem"});
      $children$$34$$.filter(":not(.oj-menu-item)").each(function() {
        var $item$$138$$ = $$$$74$$(this);
        /[^\-\u2014\u2013\s]/.test($item$$138$$.text()) || $item$$138$$.addClass("oj-menu-divider").attr("role", "separator");
      });
      $children$$34$$.filter(".oj-disabled").children("a").attr("aria-disabled", "true");
      $children$$34$$.filter(":not(.oj-disabled)").children("a").removeAttr("aria-disabled");
      $submenus$$.filter(":not(.oj-menu)").addClass("oj-menu oj-menu-submenu").hide().attr({role:this.role, "aria-hidden":"true"}).each(function() {
        var $menu$$28$$ = $$$$74$$(this), $item$$139_itemId$$1$$ = $self$$243$$.$_getSubmenuAnchor$($menu$$28$$), $submenuIcon$$ = $$$$74$$("\x3cspan\x3e");
        $submenuIcon$$.addClass("oj-menu-submenu-icon oj-component-icon").data("oj-ojMenu-submenu-icon", !0);
        $item$$139_itemId$$1$$.attr("aria-haspopup", "true").attr("aria-expanded", "false").append($submenuIcon$$);
        $item$$139_itemId$$1$$ = $item$$139_itemId$$1$$.attr("id");
        $menu$$28$$.attr("aria-labelledby", $item$$139_itemId$$1$$);
      });
      $menus$$.each(function() {
        var $menu$$29$$ = $$$$74$$(this), $iconCount$$ = $menu$$29$$.children().children().children(".oj-menu-item-icon").length;
        $menu$$29$$.toggleClass("oj-menu-icons", !!$iconCount$$).toggleClass("oj-menu-text-only", !$iconCount$$);
      });
      this.$active$ && !$$$$74$$.contains(this.element[0], this.$active$[0]) && this.$_blur$();
    }, $_getSubmenuAnchor$:function($submenu$$) {
      return $submenu$$.prev("a");
    }, $_itemRole$:function() {
      return "menuitem";
    }, $_addDividers$:function($menuItem$$2$$) {
      return $menuItem$$2$$.add($menuItem$$2$$.prev(".oj-menu-divider")).add($menuItem$$2$$.next(".oj-menu-divider"));
    }, $_focus$:function($event$$796$$, $item$$140$$) {
      $event$$796$$ && "focus" === $event$$796$$.type || clearTimeout(this.$timer$);
      $item$$140$$ = $item$$140$$.first();
      this.$_makeActive$($item$$140$$, $event$$796$$);
      var $nested$$1_parentMenuItem$$ = $item$$140$$.parent().closest(".oj-menu-item");
      this.$_addDividers$($nested$$1_parentMenuItem$$).addClass("oj-focus-ancestor");
      $event$$796$$ && "keydown" === $event$$796$$.type ? this.$_close$() : this.$timer$ = this._delay(function() {
        delete this.$timer$;
        this.$_close$();
      }, this.delay);
      $nested$$1_parentMenuItem$$ = $item$$140$$.children(".oj-menu");
      $nested$$1_parentMenuItem$$.length && $event$$796$$ && /^mouse/.test($event$$796$$.type) && !this.$active$.hasClass("oj-disabled") && this.$_startOpening$($nested$$1_parentMenuItem$$);
      this.$activeMenu$ = $item$$140$$.parent();
    }, $_makeActive$:function($item$$141$$, $event$$797$$) {
      if (!$item$$141$$.is(this.$active$)) {
        var $previousItem$$2$$ = this.$active$ ? this.$active$ : $$$$74$$(), $anchor$$8$$ = $item$$141$$.children("a");
        this.$active$ = $item$$141$$;
        this.element.attr("aria-activedescendant", $anchor$$8$$.attr("id"));
        this.$_addDividers$($previousItem$$2$$).removeClass("oj-focus");
        this.$_addDividers$($item$$141$$).addClass("oj-focus");
        this._trigger("_activeItem", $event$$797$$, {previousItem:$previousItem$$2$$, item:$item$$141$$, privateNotice:"The _activeItem event is private.  Do not use."});
      }
    }, $_removeActive$:function($event$$798$$) {
      if (this.$active$) {
        var $previousItem$$3$$ = this.$active$;
        this.$active$ = null;
        this.element.removeAttr("aria-activedescendant");
        this.$_addDividers$($previousItem$$3$$).removeClass("oj-focus");
        this._trigger("_activeItem", $event$$798$$, {previousItem:$previousItem$$3$$, item:$$$$74$$(), privateNotice:"The _activeItem event is private.  Do not use."});
      }
    }, $_blur$:function($event$$799$$) {
      clearTimeout(this.$timer$);
      this.$_removeActive$($event$$799$$);
    }, $_focusLauncherAndDismiss$:function($event$$800$$, $selectUi$$) {
      this.$_launcher$.focus();
      this.$__dismiss$($event$$800$$, $selectUi$$);
    }, $__dismiss$:function($event$$801$$, $selectUi$$1$$) {
      var $isOpen$$2$$ = this.element.is(":visible"), $psOptions$$8$$ = {};
      $psOptions$$8$$[$oj$$80$$.$PopupService$.$OPTION$.$POPUP$] = this.element;
      $oj$$80$$.$PopupService$.$getInstance$().close($psOptions$$8$$);
      this.element.removeData("oj-menu-position");
      this.$_launcher$ = void 0;
      $selectUi$$1$$ && ($event$$801$$ = this.$_trigger2$("select", $event$$801$$, $selectUi$$1$$).event);
      $isOpen$$2$$ && this._trigger("close", $event$$801$$, {});
      this.$_currentOpenOptions$ = null;
      0 <= $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1);
    }, getCurrentOpenOptions:function() {
      return $$$$74$$.extend(!0, {}, this.$_currentOpenOptions$ || this.options.openOptions);
    }, open:function($event$$802$$, $initialFocus$$2_openOptions$$7$$, $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$) {
      $initialFocus$$2_openOptions$$7$$ = $$$$74$$.extend({}, this.options.openOptions, $initialFocus$$2_openOptions$$7$$);
      $initialFocus$$2_openOptions$$7$$.position = $$$$74$$.extend({}, $initialFocus$$2_openOptions$$7$$.position);
      $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$ = $$$$74$$.extend({}, this.options.submenuOpenOptions, $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$);
      var $launcher$$27_oldOpenOptions$$ = this.$_currentOpenOptions$;
      this.$_currentOpenOptions$ = $initialFocus$$2_openOptions$$7$$;
      $oj$$80$$.$PositionUtils$.$_normalizeEventForPosition$($event$$802$$);
      this.$_launcherClickShouldDismiss$ = this.$__openingContextMenu$;
      var $beforeOpenResults_position$$56$$ = !this.$_trigger2$("beforeOpen", $event$$802$$, {openOptions:$initialFocus$$2_openOptions$$7$$});
      if ($beforeOpenResults_position$$56$$.proceed) {
        this.$_currentOpenOptions$ = $launcher$$27_oldOpenOptions$$;
      } else {
        if (this.element.is(":visible") && (this.$_currentOpenOptions$ = $launcher$$27_oldOpenOptions$$, this.$__dismiss$($beforeOpenResults_position$$56$$.event), this.$_currentOpenOptions$ = $initialFocus$$2_openOptions$$7$$), $launcher$$27_oldOpenOptions$$ = $initialFocus$$2_openOptions$$7$$.launcher, ($launcher$$27_oldOpenOptions$$ = "string" === $$$$74$$.type($launcher$$27_oldOpenOptions$$) ? $$$$74$$($launcher$$27_oldOpenOptions$$) : $launcher$$27_oldOpenOptions$$) && $launcher$$27_oldOpenOptions$$.length) {
          if ($beforeOpenResults_position$$56$$ = $oj$$80$$.$PositionUtils$.$normalizeHorizontalAlignment$($initialFocus$$2_openOptions$$7$$.position, this.$isRtl$), $beforeOpenResults_position$$56$$.of = $oj$$80$$.$PositionUtils$.$normalizePositionOf$($beforeOpenResults_position$$56$$.of, $launcher$$27_oldOpenOptions$$, $event$$802$$), null == $beforeOpenResults_position$$56$$.of) {
            $oj$$80$$.$Logger$.warn("position.of passed to Menu.open() is 'event', but the event is null.  Ignoring the call."), this.$_currentOpenOptions$ = null;
          } else {
            var $currentMenu$$ = this.element[0], $openPopupMenus$$1$$ = $_openPopupMenus$$.slice(0, $_openPopupMenus$$.length);
            $$$$74$$.each($openPopupMenus$$1$$, function($index$$345$$, $menu$$30$$) {
              $menu$$30$$.element[0] !== $currentMenu$$ && ($menu$$30$$.$_collapse$($event$$802$$, "eventSubtree"), $menu$$30$$.$_launcher$ && $menu$$30$$.$__dismiss$($event$$802$$));
            });
            this.$_submenuPosition$ = $oj$$80$$.$PositionUtils$.$normalizeHorizontalAlignment$($focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$.position, this.$isRtl$);
            $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$ = this.$_usingCallback$;
            $$$$74$$.isFunction($beforeOpenResults_position$$56$$.using) && $beforeOpenResults_position$$56$$.using !== $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$ && ($beforeOpenResults_position$$56$$.origUsing = $beforeOpenResults_position$$56$$.using);
            $beforeOpenResults_position$$56$$.using = $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$;
            $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$ = {};
            $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$[$oj$$80$$.$PopupService$.$OPTION$.$POPUP$] = this.element;
            $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$[$oj$$80$$.$PopupService$.$OPTION$.$LAUNCHER$] = $launcher$$27_oldOpenOptions$$;
            $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$[$oj$$80$$.$PopupService$.$OPTION$.$POSITION$] = $beforeOpenResults_position$$56$$;
            $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$[$oj$$80$$.$PopupService$.$OPTION$.$EVENTS$] = this.$_getPopupServiceEvents$();
            $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$[$oj$$80$$.$PopupService$.$OPTION$.$LAYER_SELECTORS$] = "oj-menu-layer";
            $oj$$80$$.$PopupService$.$getInstance$().open($focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$);
            this.element.data("oj-menu-position", $beforeOpenResults_position$$56$$);
            $initialFocus$$2_openOptions$$7$$ = $initialFocus$$2_openOptions$$7$$.initialFocus;
            (($focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$ = "firstItem" === $initialFocus$$2_openOptions$$7$$) || "menu" === $initialFocus$$2_openOptions$$7$$) && this.element.focus();
            $focusFirstItem_psOptions$$9_submenuOpenOptions$$1_usingCallback$$1$$ ? this.$_focus$($event$$802$$, this.element.children().first()) : this.$_blur$($event$$802$$);
            this.$_launcher$ = $launcher$$27_oldOpenOptions$$;
            $_openPopupMenus$$.push(this);
            this._trigger("open", $event$$802$$, {});
          }
        } else {
          $oj$$80$$.$Logger$.warn("When calling Menu.open(), must specify openOptions.launcher via the component option, method param, or beforeOpen listener.  Ignoring the call."), this.$_currentOpenOptions$ = null;
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
      var $position$$57$$ = $$$$74$$.extend({of:this.$active$}, this.$_submenuPosition$);
      clearTimeout(this.$timer$);
      this.element.find(".oj-menu").not($submenu$$2$$.parents(".oj-menu")).hide().attr("aria-hidden", "true").removeData("oj-menu-position");
      $submenu$$2$$.show().removeAttr("aria-hidden").position($position$$57$$).data("oj-menu-position", $position$$57$$);
      this.$_getSubmenuAnchor$($submenu$$2$$).attr("aria-expanded", "true");
      !this.$_launcher$ && 0 > $_openPopupMenus$$.indexOf(this) && $_openPopupMenus$$.push(this);
    }, $__collapseAll$:function($event$$803$$, $all$$1$$, $delay$$5$$) {
      function $collapseMenu$$() {
        delete $self$$244$$.$timer$;
        var $currentMenu$$1$$ = $all$$1$$ ? $self$$244$$.element : $$$$74$$($event$$803$$ && $event$$803$$.target).closest($self$$244$$.element.find(".oj-menu"));
        $currentMenu$$1$$.length || ($currentMenu$$1$$ = $self$$244$$.element);
        $self$$244$$.$_close$($currentMenu$$1$$);
        $self$$244$$.$_blur$($event$$803$$);
        $self$$244$$.$activeMenu$ = $currentMenu$$1$$;
      }
      clearTimeout(this.$timer$);
      var $self$$244$$ = this;
      $delay$$5$$ ? this.$timer$ = this._delay($collapseMenu$$, $delay$$5$$) : $collapseMenu$$();
    }, $_close$:function($startMenu$$) {
      $startMenu$$ || ($startMenu$$ = this.$active$ ? this.$active$.parent() : this.element);
      var $menus$$1$$ = $startMenu$$.find(".oj-menu");
      $menus$$1$$.hide().attr("aria-hidden", "true").removeData("oj-menu-position");
      this.$_getSubmenuAnchor$($menus$$1$$).attr("aria-expanded", "false");
      $startMenu$$.find("oj-focus-ancestor").removeClass("oj-focus-ancestor");
      this.$_launcher$ || 0 <= $_openPopupMenus$$.indexOf(this) && $startMenu$$ === this.element && $_openPopupMenus$$.splice($_openPopupMenus$$.indexOf(this), 1);
    }, $_collapse$:function($event$$804$$, $which$$) {
      if (null == $which$$ || "active" === $which$$) {
        var $newItem$$ = this.$activeMenu$ && this.$activeMenu$.closest(".oj-menu-item", this.element);
        $newItem$$ && $newItem$$.length && (this.$_close$(), this.$_focus$($event$$804$$, $newItem$$));
      } else {
        "all" === $which$$ || "eventSubtree" === $which$$ ? this.$__collapseAll$($event$$804$$, "all" === $which$$, this.delay) : $oj$$80$$.$Logger$.warn("Invalid param " + $which$$ + " passed to Menu._collapse().  Ignoring the call.");
      }
    }, $_expand$:function($event$$805$$) {
      var $newItem$$1$$ = this.$active$ && this.$active$.children(".oj-menu ").children(".oj-menu-item").first();
      $newItem$$1$$ && $newItem$$1$$.length && (this.$_open$($newItem$$1$$.parent()), this.$timer$ && clearTimeout(this.$timer$), this.$timer$ = this._delay(function() {
        delete this.$timer$;
        this.$_focus$($event$$805$$, $newItem$$1$$);
      }));
    }, $_next$:function($event$$806$$) {
      this.$_move$("next", "first", $event$$806$$);
    }, $_previous$:function($event$$807$$) {
      this.$_move$("prev", "last", $event$$807$$);
    }, $_isFirstItem$:function() {
      return this.$active$ && !this.$active$.prevAll(".oj-menu-item").length;
    }, $_isLastItem$:function() {
      return this.$active$ && !this.$active$.nextAll(".oj-menu-item").length;
    }, $_move$:function($direction$$22$$, $filter$$5$$, $event$$808$$) {
      var $next$$10$$;
      this.$active$ && ($next$$10$$ = "first" === $direction$$22$$ || "last" === $direction$$22$$ ? this.$active$["first" === $direction$$22$$ ? "prevAll" : "nextAll"](".oj-menu-item").eq(-1) : this.$active$[$direction$$22$$ + "All"](".oj-menu-item").eq(0));
      $next$$10$$ && $next$$10$$.length && this.$active$ || ($next$$10$$ = this.$activeMenu$.children(".oj-menu-item")[$filter$$5$$]());
      this.$_focus$($event$$808$$, $next$$10$$);
    }, $_select$:function($event$$809$$) {
      if (!this.$active$ && $event$$809$$ && $event$$809$$.target) {
        var $menuItem$$3_ui$$53$$ = $$$$74$$($event$$809$$.target).closest(".oj-menu-item");
        $menuItem$$3_ui$$53$$.closest(this.element).length && this.$_makeActive$($menuItem$$3_ui$$53$$, $event$$809$$);
      }
      this.$active$ ? this.$active$.has(".oj-menu").length || this.$active$.is(".oj-disabled") ? $oj$$80$$.$Logger$.warn("Selecting a disabled menu item or parent menu item is not allowed.") : ($menuItem$$3_ui$$53$$ = {item:this.$active$}, this.$__collapseAll$($event$$809$$, !0), this.$_launcher$ && this.$_focusLauncherAndDismiss$($event$$809$$, $menuItem$$3_ui$$53$$)) : $oj$$80$$.$Logger$.warn("Menu._select() called when no menu item is focused and no menu item can be inferred from event param.");
    }, $_surrogateRemoveHandler$:function() {
      this.element.remove();
    }, $_getPopupServiceEvents$:function() {
      if (!this.$_popupServiceEvents$) {
        var $events$$17$$ = this.$_popupServiceEvents$ = {};
        $events$$17$$[$oj$$80$$.$PopupService$.$EVENT$.$POPUP_CLOSE$] = $$$$74$$.proxy(this.$_closeAll$, this);
        $events$$17$$[$oj$$80$$.$PopupService$.$EVENT$.$POPUP_REMOVE$] = $$$$74$$.proxy(this.$_surrogateRemoveHandler$, this);
        $events$$17$$[$oj$$80$$.$PopupService$.$EVENT$.$POPUP_REFRESH$] = $$$$74$$.proxy(this.refresh, this);
        $events$$17$$[$oj$$80$$.$PopupService$.$EVENT$.$POPUP_AUTODISMISS$] = $$$$74$$.proxy(this.$_clickAwayHandler$, this);
      }
      return this.$_popupServiceEvents$;
    }, $_closeAll$:function() {
      this.$_close$(this.element);
      this.$__dismiss$(null);
    }, $_usingHandler$:function($pos$$20$$, $props$$27$$) {
      var $origUsing$$1_position$$58_rootMenu$$ = $props$$27$$.element.element;
      $origUsing$$1_position$$58_rootMenu$$.css($pos$$20$$);
      ($origUsing$$1_position$$58_rootMenu$$ = $origUsing$$1_position$$58_rootMenu$$.data("oj-menu-position")) && ($origUsing$$1_position$$58_rootMenu$$ = $origUsing$$1_position$$58_rootMenu$$.origUsing) && $origUsing$$1_position$$58_rootMenu$$($pos$$20$$, $props$$27$$);
      $oj$$80$$.$PositionUtils$.$isAligningPositionClipped$($props$$27$$) && (this.$_closeDelayTimer$ = this._delay($$$$74$$.proxy(this.$_closeAll$, this), 1));
    }});
    var $_openPopupMenus$$ = [], $_contextMenuPressHoldJustEnded$$ = !1;
  })();
});

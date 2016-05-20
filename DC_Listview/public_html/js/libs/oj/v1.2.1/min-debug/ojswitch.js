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
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue"], function($oj$$47$$) {
  (function() {
    $oj$$47$$.$__registerWidget$("oj.ojSwitch", $.oj.editableValue, {version:"1.1.0", defaultElement:"\x3cinput\x3e", widgetEventPrefix:"oj", options:{disabled:!1, readOnly:!1, required:!1, title:"", value:!1}, refresh:function() {
      this._super();
      this.$_setup$();
    }, widget:function() {
      return this.$_element2$;
    }, getNodeBySubId:function($locator$$48_subId$$51$$) {
      var $node$$97$$, $rootElement$$ = this.widget();
      $node$$97$$ = null == $locator$$48_subId$$51$$ || null == $locator$$48_subId$$51$$.subId ? $rootElement$$ : null;
      return $node$$97$$ || ($locator$$48_subId$$51$$ = $locator$$48_subId$$51$$.subId, "oj-switch-thumb" !== $locator$$48_subId$$51$$ && "oj-switch-track" !== $locator$$48_subId$$51$$) ? $node$$97$$ || null : $rootElement$$.find("." + $locator$$48_subId$$51$$)[0];
    }, getSubIdByNode:function($node$$98$$) {
      var $originalId$$ = $(this.element).attr("id"), $nodeId$$1$$, $result$$62$$ = null;
      null != $node$$98$$ && ($($node$$98$$).hasClass("oj-switch-track") || $($node$$98$$).hasClass("oj-switch-thumb")) && ($nodeId$$1$$ = $($node$$98$$).parents("div.oj-switch").find("input.oj-component-initnode").attr("id"), $originalId$$ === $nodeId$$1$$ && $($node$$98$$).hasClass("oj-switch-track") ? $result$$62$$ = {subId:"oj-switch-track"} : $originalId$$ === $nodeId$$1$$ && $($node$$98$$).hasClass("oj-switch-thumb") && ($result$$62$$ = {subId:"oj-switch-thumb"}));
      return $result$$62$$;
    }, $_BUNDLE_KEY$:{$_SWITCH_OFF$:"SwitchOFF", $_SWITCH_ON$:"SwitchON"}, $_InitOptions$:function($originalDefaults$$14$$, $constructorOptions$$16$$) {
      var $val$$60$$;
      this._super($originalDefaults$$14$$, $constructorOptions$$16$$);
      $oj$$47$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $validateOption$:!0}, {$attribute$:"readonly", option:"readOnly", $validateOption$:!0}, {$attribute$:"required", $validateOption$:!1, $coerceDomValue$:function() {
        return!1;
      }}, {$attribute$:"checked", option:"value", $validateOption$:!1, $coerceDomValue$:function($domValue$$2$$) {
        return $domValue$$2$$ ? !0 : !1;
      }}, {$attribute$:"title"}], $constructorOptions$$16$$, this);
      $val$$60$$ = this.option("value");
      this.option({required:!1, value:!!$val$$60$$}, {_context:{$writeback$:!0, $internalSet$:!0}});
    }, _ComponentCreate:function() {
      this._super();
      if (!this.element.is("input")) {
        throw Error("ojSwitch can be bound to INPUT only.");
      }
      this.$_inputElementOriginalDisplay$ = this.element.css("display");
      this.element.css("display", "none").attr("type", "checkbox").attr("checked", this.option("value")).attr("tabindex", "-1").attr("disabled", this.option("disabled")).attr("readonly", this.option("readOnly"));
      this.$_element2$ = this.element.wrap("\x3cdiv\x3e\x3c/div\x3e").parent().addClass("oj-switch oj-component oj-form-control");
      this.$_element2$.append("\x3cdiv class\x3d'oj-switch-container'\x3e\x3cdiv class\x3d'oj-switch-track'\x3e\x3cdiv class\x3d'oj-switch-thumb' tabIndex\x3d'0'\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e");
      this.$switchThumb$ = this.$_element2$.find(".oj-switch-thumb");
      this.$switchThumb$.attr("role", "switch checkbox");
      this.$_setAriaLabel$(this.element, this.$switchThumb$);
      this.$_setup$();
    }, $_setAriaLabel$:function($elem$$73$$, $target$$94$$) {
      var $id$$46_switchLabel$$ = $elem$$73$$.prop("id"), $ariaLabelledBy$$ = $elem$$73$$.attr("aria-labelledby"), $ariaLabel$$ = $elem$$73$$.attr("aria-label");
      $ariaLabel$$ ? $target$$94$$.attr("aria-label", $ariaLabel$$) : $ariaLabelledBy$$ ? $target$$94$$.attr("aria-labelledby", $ariaLabelledBy$$) : $id$$46_switchLabel$$ && ($id$$46_switchLabel$$ = $("label[for\x3d'" + $id$$46_switchLabel$$ + "']")) && ($id$$46_switchLabel$$.attr("id") ? $target$$94$$.attr("aria-labelledby", $id$$46_switchLabel$$.attr("id")) : $target$$94$$.attr("aria-label", $($id$$46_switchLabel$$).text()));
    }, $_setup$:function() {
      var $rootElement$$1$$ = $(this.widget()), $thumbTitle$$ = this.option("title");
      this.$_setupEvents$();
      if (void 0 !== $rootElement$$1$$) {
        this.element.attr("checked", this.option("value"));
        $rootElement$$1$$.removeClass("oj-disabled oj-read-only oj-selected oj-hover oj-active");
        $(this.$switchThumb$).attr("tabindex", "0");
        $(this.$switchThumb$).html("");
        if (this.option("disabled") || this.option("readOnly")) {
          this.option("disabled") ? $rootElement$$1$$.addClass("oj-disabled") : ($rootElement$$1$$.addClass("oj-read-only"), $(this.$switchThumb$).html(this.$_setReadOnlyValue$())), $(this.$switchThumb$).removeAttr("tabindex");
        }
        this.option("value") && $rootElement$$1$$.addClass("oj-selected");
        void 0 !== $thumbTitle$$ && $(this.$switchThumb$).attr("title", $thumbTitle$$);
        $(this.$switchThumb$).attr("aria-checked", this.option("value"));
        $(this.$switchThumb$).removeAttr("aria-disabled");
        $rootElement$$1$$.removeAttr("aria-disabled");
        this.$_CanSetValue$() || $(this.$switchThumb$).attr("aria-disabled", "true");
      }
    }, $_setReadOnlyValue$:function() {
      var $strReturn$$ = this.$_BUNDLE_KEY$.$_SWITCH_OFF$;
      this.option("value") && ($strReturn$$ = this.$_BUNDLE_KEY$.$_SWITCH_ON$);
      return this.$getTranslatedString$($strReturn$$);
    }, $_setupEvents$:function() {
      this._off(this.$_element2$, "keydown keyup mousedown mouseup mouseleave mouseenter touchstart");
      this.$_CanSetValue$() && (this._on(this.$_element2$, this.$_switchEvents$), this._hoverable(this.$_element2$));
      this._focusable(this.$_element2$);
    }, $_switchEvents$:{keydown:function($event$$491$$) {
      if ($event$$491$$.which === $.ui.keyCode.ENTER || $event$$491$$.which === $.ui.keyCode.SPACE) {
        $($event$$491$$.currentTarget).addClass("oj-active"), $event$$491$$.preventDefault();
      }
    }, keyup:function($event$$492$$) {
      $event$$492$$.which !== $.ui.keyCode.ENTER && $event$$492$$.which !== $.ui.keyCode.SPACE || this.$_SetValue$(!this.option("value"), $event$$492$$);
    }, mousedown:function($event$$493$$) {
      1 === $event$$493$$.which && $($event$$493$$.currentTarget).addClass("oj-active");
    }, mouseup:function($event$$494$$) {
      1 === $event$$494$$.which && this.$_SetValue$(!this.option("value"), $event$$494$$);
    }, mouseleave:function($event$$495$$) {
      1 === $event$$495$$.which && $($event$$495$$.currentTarget).removeClass("oj-active");
    }, mouseenter:function($event$$496$$) {
      1 === $event$$496$$.which && $($event$$496$$.currentTarget).addClass("oj-active");
    }, $touchstart$:function($event$$497$$) {
      this.$_SetValue$(!this.option("value"), $event$$497$$);
      $event$$497$$.preventDefault();
    }}, _GetDefaultStyleClass:function() {
      return "oj-switch";
    }, $_setSwitchRole$:function() {
      return "switch checkbox";
    }, _destroy:function() {
      this.$_element2$.find(".oj-switch-track").remove();
      $oj$$47$$.$DomUtils$.unwrap(this.element);
      this.$_RestoreAttributes$(this.element);
      return this._super();
    }, $_GetContentElement$:function() {
      return this.$_element2$;
    }, _setOption:function($key$$150$$, $coercedValue$$1_value$$269$$, $flags$$40$$) {
      switch($key$$150$$) {
        case "disabled":
        ;
        case "readOnly":
        ;
        case "value":
          $coercedValue$$1_value$$269$$ = !!$coercedValue$$1_value$$269$$;
          break;
        case "required":
          $coercedValue$$1_value$$269$$ = !1;
          break;
      }
      this._super($key$$150$$, $coercedValue$$1_value$$269$$, $flags$$40$$);
      this.$_setup$();
    }});
  })();
});

/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "ojs/ojeditablevalue", "ojs/ojradiocheckbox"], function($oj$$44$$, $$$$40$$) {
  (function() {
    $oj$$44$$.$__registerWidget$("oj.ojCheckboxset", $$$$40$$.oj.editableValue, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{disabled:!1, value:void 0}, refresh:function() {
      this._super();
      this.$_setup$();
    }, widget:function() {
      return this.$uiCheckboxset$;
    }, $_InitOptions$:function($originalDefaults$$12$$, $constructorOptions$$14$$) {
      var $checkedValues$$ = [], $selectedCheckbox$$;
      this._super($originalDefaults$$12$$, $constructorOptions$$14$$);
      $oj$$44$$.$EditableValueUtils$.$initializeOptionsFromDom$([{$attribute$:"disabled", $validateOption$:!0}, {$attribute$:"title"}, {$attribute$:"placeholder"}, {$attribute$:"required", $coerceDomValue$:!0, $validateOption$:!0}], $constructorOptions$$14$$, this);
      this.$$checkboxes$ = this.$_findCheckboxesWithMatchingName$();
      void 0 === $constructorOptions$$14$$.value && ($selectedCheckbox$$ = this.$$checkboxes$.filter(":checked"), 0 < $selectedCheckbox$$.length && ($selectedCheckbox$$.each(function() {
        $checkedValues$$.push($$$$40$$(this).val());
      }), this.option("value", $checkedValues$$, {_context:{$writeback$:!0, $internalSet$:!0}})), void 0 === this.options.value && (this.options.value = []));
    }, _ComponentCreate:function() {
      this._super();
      if (this.element.is("fieldset")) {
        throw Error("ojCheckboxset cannot be bound to a fieldset. Use a div instead.");
      }
      this.$$checkboxes$._ojRadioCheckbox();
      this.$uiCheckboxset$ = this.element.addClass("oj-checkboxset oj-component").attr("role", "group").wrapInner("\x3cdiv class\x3d'oj-checkboxset-wrapper'\x3e\x3c/div\x3e");
      this._on(this.$_events$);
      this.$_setup$();
    }, $_ResetComponentState$:function() {
      this.$$checkboxes$ = this.$_findCheckboxesWithMatchingName$();
      this.$$checkboxes$.filter(".oj-checkbox").each(function() {
        var $disabledValue$$ = void 0 !== $$$$40$$(this).attr("disabled") ? !!$$$$40$$(this).prop("disabled") : !1;
        $$$$40$$(this)._ojRadioCheckbox("option", "disabled", $disabledValue$$);
      });
      this.$$checkboxes$.not(".oj-checkbox")._ojRadioCheckbox();
    }, Focus:function() {
      this.$_GetContentElement$().first().focus();
      return!0;
    }, $_SetDisabledDom$:function() {
    }, $_findCheckboxesWithMatchingName$:function() {
      var $allcheckboxes_first$$10_name$$116$$ = this.element.find("input[type\x3dcheckbox]:first");
      0 === $allcheckboxes_first$$10_name$$116$$.length && $oj$$44$$.$Logger$.warn("Could not find any input type\x3dcheckbox within this element");
      $allcheckboxes_first$$10_name$$116$$ = $allcheckboxes_first$$10_name$$116$$.attr("name");
      return void 0 === $allcheckboxes_first$$10_name$$116$$ ? ($allcheckboxes_first$$10_name$$116$$ = this.element.find("input[type\x3dcheckbox]"), $allcheckboxes_first$$10_name$$116$$.not("[name]")) : this.element.find("input[type\x3dcheckbox][name\x3d" + $allcheckboxes_first$$10_name$$116$$ + "]");
    }, $_NotifyContextMenuGesture$:function($launcher$$14_menu$$14$$, $event$$581$$, $eventType$$45$$) {
      $launcher$$14_menu$$14$$ = this.element.find("input[type\x3dcheckbox]:tabbable").first();
      this.$_OpenContextMenu$($event$$581$$, $eventType$$45$$, {launcher:$launcher$$14_menu$$14$$});
    }, _GetMessagingLauncherElement:function() {
      var $inputElem$$ = this.$_GetContentElement$(), $renderInputAs$$ = $oj$$44$$.$ThemeUtils$.$getOptionDefaultMap$("radioset").renderInputAs;
      return $renderInputAs$$ && "html" !== $renderInputAs$$ ? this.widget() : $inputElem$$;
    }, $_setup$:function() {
      this.$_propagateDisabled$(this.options.disabled);
      null !== this.$$checkboxes$ && (1 === this.$$checkboxes$.length ? this.element.addClass("oj-checkboxset-single") : this.element.removeClass("oj-checkboxset-single"));
    }, $_events$:{change:function($event$$582$$) {
      this.$_HandleChangeEvent$($event$$582$$);
    }}, $_HandleChangeEvent$:function($event$$583$$) {
      var $submittedValue$$4$$ = this.$_GetDisplayValue$();
      this.$_SetValue$($submittedValue$$4$$, $event$$583$$, $_sValueChangeCheckFalse$$);
    }, $_GetDisplayValue$:function() {
      return this.$_GetElementValue$();
    }, $_SetDisplayValue$:function($checkedBoxes$$) {
      var $checkboxWithMatchingValue_displayValue$$10_valueFilter$$;
      this.$$checkboxes$._ojRadioCheckbox("option", "checked", !1);
      if (null != $checkedBoxes$$) {
        for (var $i$$404$$ = 0;$i$$404$$ < $checkedBoxes$$.length;$i$$404$$++) {
          $checkboxWithMatchingValue_displayValue$$10_valueFilter$$ = $checkedBoxes$$[$i$$404$$], $checkboxWithMatchingValue_displayValue$$10_valueFilter$$ = "[value\x3d'" + $checkboxWithMatchingValue_displayValue$$10_valueFilter$$ + "']", $checkboxWithMatchingValue_displayValue$$10_valueFilter$$ = this.$$checkboxes$.filter($checkboxWithMatchingValue_displayValue$$10_valueFilter$$), void 0 !== $checkboxWithMatchingValue_displayValue$$10_valueFilter$$ && 0 < $checkboxWithMatchingValue_displayValue$$10_valueFilter$$.length && 
          ($checkboxWithMatchingValue_displayValue$$10_valueFilter$$.prop("checked") || $checkboxWithMatchingValue_displayValue$$10_valueFilter$$._ojRadioCheckbox("option", "checked", !0));
        }
      }
    }, $_GetElementValue$:function() {
      var $checkedValues$$1$$ = [], $selectedCheckbox$$1$$ = this.$$checkboxes$.filter(":checked");
      if (0 === $selectedCheckbox$$1$$.length) {
        return[];
      }
      $selectedCheckbox$$1$$.each(function() {
        $checkedValues$$1$$.push($$$$40$$(this).val());
      });
      return $checkedValues$$1$$;
    }, _GetDefaultStyleClass:function() {
      return "oj-checkboxset";
    }, $_GetContentElement$:function() {
      if (null != this.$$checkboxes$) {
        return this.$$checkboxes$;
      }
      this.$_findCheckboxesWithMatchingName$();
    }, $_RefreshAriaRequired$:function() {
    }, $_AriaRequiredUnsupported$:function() {
      return!0;
    }, $_propagateDisabled$:function($disabled$$10$$) {
      $disabled$$10$$ = !!$disabled$$10$$;
      this.$$checkboxes$.each(function() {
        $$$$40$$(this).data("oj-_ojRadioCheckbox").$__setAncestorComponentDisabled$($disabled$$10$$);
      });
      this.$$checkboxes$._ojRadioCheckbox("refreshDisabled");
    }, _setOption:function($key$$167$$, $value$$273$$, $flags$$38$$) {
      this._super($key$$167$$, $value$$273$$, $flags$$38$$);
      "disabled" === $key$$167$$ && this.$_propagateDisabled$($value$$273$$);
    }, getNodeBySubId:function($locator$$46_subId$$50$$) {
      var $node$$102$$ = this._super($locator$$46_subId$$50$$);
      return $node$$102$$ || ($locator$$46_subId$$50$$ = $locator$$46_subId$$50$$.subId, "oj-checkboxset-inputs" !== $locator$$46_subId$$50$$) ? $node$$102$$ || null : this.$$checkboxes$.get();
    }, _destroy:function() {
      var $ret$$44$$ = this._super(), $wrapperDom$$ = this.element[0].firstChild;
      this.$$checkboxes$ && this.$$checkboxes$._ojRadioCheckbox("destroy");
      $$$$40$$($wrapperDom$$).contents().unwrap();
      return $ret$$44$$;
    }});
    var $_sValueChangeCheckFalse$$ = {$doValueChangeCheck$:!1};
  })();
});

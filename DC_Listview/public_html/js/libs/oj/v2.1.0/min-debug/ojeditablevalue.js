/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore", "jquery", "hammerjs", "ojs/ojjquery-hammer", "ojs/ojcomponentcore", "ojs/ojvalidation", "ojs/ojpopup"], function($oj$$4$$, $$$$4$$, $Hammer$$1$$) {
  $oj$$4$$.$EditableValueUtils$ = {};
  $goog$exportPath_$$("EditableValueUtils", $oj$$4$$.$EditableValueUtils$, $oj$$4$$);
  $oj$$4$$.$EditableValueUtils$.$getAttributeValue$ = function $$oj$$4$$$$EditableValueUtils$$$getAttributeValue$$($element$$36$$, $attribute$$2$$) {
    var $attrVal_result$$4$$, $propVal$$, $returnVal$$ = {};
    if ($element$$36$$ && $attribute$$2$$) {
      switch($attribute$$2$$) {
        case "disabled":
          $attrVal_result$$4$$ = void 0 !== $element$$36$$.attr("disabled") ? !!$element$$36$$.prop("disabled") : void 0;
          break;
        case "pattern":
          $attrVal_result$$4$$ = $element$$36$$.prop("pattern") || void 0;
          break;
        case "placeholder":
          $attrVal_result$$4$$ = $element$$36$$.prop("placeholder") || void 0;
          break;
        case "readonly":
          $attrVal_result$$4$$ = void 0 !== $element$$36$$.attr("readonly") ? !!$element$$36$$.prop("readonly") : void 0;
          break;
        case "required":
          $attrVal_result$$4$$ = $element$$36$$.attr("required");
          $propVal$$ = $element$$36$$.prop("required");
          $attrVal_result$$4$$ = void 0 !== $attrVal_result$$4$$ ? void 0 !== $propVal$$ ? !!$propVal$$ : !!$attrVal_result$$4$$ : void 0;
          break;
        case "title":
          $attrVal_result$$4$$ = void 0 !== $element$$36$$.attr("title") ? $element$$36$$.prop("title") : void 0;
          break;
        case "value":
          $attrVal_result$$4$$ = $element$$36$$.val() || void 0;
          break;
        default:
          $attrVal_result$$4$$ = $element$$36$$.attr($attribute$$2$$) || void 0;
      }
    }
    void 0 !== $attrVal_result$$4$$ ? ($returnVal$$.$fromDom$ = !0, $returnVal$$.value = $attrVal_result$$4$$) : $returnVal$$.$fromDom$ = !1;
    return $returnVal$$;
  };
  $oj$$4$$.$EditableValueUtils$.$initializeOptionsFromDom$ = function $$oj$$4$$$$EditableValueUtils$$$initializeOptionsFromDom$$($props$$5$$, $constructorOptions$$4$$, $comp$$1$$, $postprocessCallback$$) {
    for (var $initializedOptions$$ = {}, $i$$92$$ = 0;$i$$92$$ < $props$$5$$.length;$i$$92$$++) {
      var $attribute$$3_finalValue_result$$5$$, $prop$$55_validateOption$$ = $props$$5$$[$i$$92$$];
      $attribute$$3_finalValue_result$$5$$ = $prop$$55_validateOption$$.$attribute$;
      var $option$$1$$ = $prop$$55_validateOption$$.option || $attribute$$3_finalValue_result$$5$$, $coerceDomValue_valueToValidate$$ = $prop$$55_validateOption$$.$coerceDomValue$, $prop$$55_validateOption$$ = $prop$$55_validateOption$$.$validateOption$, $element$$37$$ = $comp$$1$$.element, $previousValue$$ = $comp$$1$$.options[$option$$1$$];
      void 0 === $constructorOptions$$4$$[$option$$1$$] && ($previousValue$$ = $comp$$1$$.options[$option$$1$$], $attribute$$3_finalValue_result$$5$$ = $oj$$4$$.$EditableValueUtils$.$getAttributeValue$($element$$37$$, $attribute$$3_finalValue_result$$5$$), $attribute$$3_finalValue_result$$5$$.$fromDom$ && ($attribute$$3_finalValue_result$$5$$ = $attribute$$3_finalValue_result$$5$$.value, $coerceDomValue_valueToValidate$$ && ("boolean" === typeof $coerceDomValue_valueToValidate$$ ? $attribute$$3_finalValue_result$$5$$ = 
      $oj$$4$$.$EditableValueUtils$.$coerceDomValueForOption$($option$$1$$, $attribute$$3_finalValue_result$$5$$) : "function" === typeof $coerceDomValue_valueToValidate$$ && ($attribute$$3_finalValue_result$$5$$ = $coerceDomValue_valueToValidate$$.call($comp$$1$$, $attribute$$3_finalValue_result$$5$$))), $initializedOptions$$[$option$$1$$] = $attribute$$3_finalValue_result$$5$$));
      $coerceDomValue_valueToValidate$$ = $option$$1$$ in $initializedOptions$$ ? $initializedOptions$$[$option$$1$$] : $previousValue$$;
      $prop$$55_validateOption$$ && "boolean" === typeof $prop$$55_validateOption$$ && $oj$$4$$.$EditableValueUtils$.$validateValueForOption$($option$$1$$, $coerceDomValue_valueToValidate$$);
    }
    null != $postprocessCallback$$ && $postprocessCallback$$($initializedOptions$$);
    $comp$$1$$.option($initializedOptions$$, {_context:{$writeback$:!0, $internalSet$:!0}});
  };
  $oj$$4$$.$EditableValueUtils$.$validateValueForOption$ = function $$oj$$4$$$$EditableValueUtils$$$validateValueForOption$$($option$$2$$, $value$$76$$) {
    var $error$$16$$ = !1;
    switch($option$$2$$) {
      case "required":
        null !== $value$$76$$ && "boolean" !== typeof $value$$76$$ && ($error$$16$$ = !0);
        break;
      case "readOnly":
      ;
      case "disabled":
        null !== $value$$76$$ && "boolean" !== typeof $value$$76$$ && ($error$$16$$ = !0);
    }
    if ($error$$16$$) {
      throw "Option '" + $option$$2$$ + "' has invalid value set: " + $value$$76$$;
    }
  };
  $oj$$4$$.$EditableValueUtils$.$coerceDomValueForOption$ = function $$oj$$4$$$$EditableValueUtils$$$coerceDomValueForOption$$($option$$3$$, $domValue$$) {
    var $coerced$$ = $domValue$$;
    switch($option$$3$$) {
      case "required":
        $coerced$$ = $domValue$$ ? !0 : !1;
    }
    return $coerced$$;
  };
  $oj$$4$$.$EditableValueUtils$.$setPickerAttributes$ = function $$oj$$4$$$$EditableValueUtils$$$setPickerAttributes$$($picker$$, $pickerAttributes$$) {
    if ($picker$$ && $pickerAttributes$$) {
      var $classValue$$1_styleValue$$1$$ = $pickerAttributes$$["class"];
      $classValue$$1_styleValue$$1$$ && $picker$$.addClass($classValue$$1_styleValue$$1$$);
      if ($classValue$$1_styleValue$$1$$ = $pickerAttributes$$.style) {
        var $currStyle$$1$$ = $picker$$.attr("style");
        $currStyle$$1$$ ? $picker$$.attr("style", $currStyle$$1$$ + ";" + $classValue$$1_styleValue$$1$$) : $picker$$.attr("style", $classValue$$1_styleValue$$1$$);
      }
    }
  };
  $oj$$4$$.$PopupMessagingStrategy$ = function $$oj$$4$$$$PopupMessagingStrategy$$($displayOptions$$5$$) {
    this.Init($displayOptions$$5$$);
  };
  $oj$$4$$.$ComponentMessaging$.$registerMessagingStrategy$($oj$$4$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$NOTEWINDOW$, $oj$$4$$.$PopupMessagingStrategy$);
  $oj$$4$$.$Object$.$createSubclass$($oj$$4$$.$PopupMessagingStrategy$, $oj$$4$$.$MessagingStrategy$, "oj.PopupMessagingStrategy");
  $oj$$4$$.$PopupMessagingStrategy$.$_DEFAULTS_BY_COMPONENT$ = {ojRadioset:{position:"launcher", $events$:{open:"focus focusin mouseover", close:"mouseout"}}, ojCheckboxset:{position:"launcher", $events$:{open:"focusin mouseover", close:"mouseout"}}, ojInputText:{position:"launcher", $events$:{open:"focusin"}}, ojTextArea:{position:"launcher", $events$:{open:"focusin"}}, ojInputPassword:{position:"launcher", $events$:{open:"focusin"}}, ojSwitch:{position:"launcher", $events$:{open:"focusin mouseover", 
  close:"mouseout"}}, ojSlider:{position:"launcher", $events$:{open:"focusin mouseover", close:"mouseout"}}, "default":{position:"launcher-wrapper", $events$:{open:"focusin"}}};
  $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_FORMCONTROL_HINT$ = "oj-form-control-hint";
  $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_FORMCONTROL_HINT_CONVERTER$ = "oj-form-control-hint-converter";
  $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_FORMCONTROL_HINT_VALIDATOR$ = "oj-form-control-hint-validator";
  $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_FORMCONTROL_HINT_TITLE$ = "oj-form-control-hint-title";
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$activate$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$activate$$($cm$$3$$) {
    $oj$$4$$.$PopupMessagingStrategy$.$superclass$.$activate$.call(this, $cm$$3$$);
    this.$_initMessagingPopup$();
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$reactivate$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$reactivate$$($newDisplayOptions$$2$$) {
    $oj$$4$$.$PopupMessagingStrategy$.$superclass$.$reactivate$.call(this, $newDisplayOptions$$2$$);
    this.$_updatePopupIfOpen$();
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.update = function $$oj$$4$$$$PopupMessagingStrategy$$$update$() {
    $oj$$4$$.$PopupMessagingStrategy$.$superclass$.update.call(this);
    this.$_updatePopupIfOpen$();
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$deactivate$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$deactivate$$() {
    this.$_unregisterLauncherEvents$();
    this.$_destroyTooltip$();
    $oj$$4$$.$PopupMessagingStrategy$.$superclass$.$deactivate$.call(this);
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_closePopup$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_closePopup$$() {
    this.$_isPopupInitialized$() && this.$$messagingContentRoot$.ojPopup("close");
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_initMessagingPopup$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_initMessagingPopup$$() {
    this.$_openPopupCallback$ || this.$_registerLauncherEvents$();
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_openPopup$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_openPopup$$() {
    var $domNode_isPopupOpen$$, $latestContent$$;
    if (this.$_canOpenPopup$() && ($latestContent$$ = this.$_buildPopupHtml$(), !$oj$$4$$.$StringUtils$.$isEmptyOrUndefined$($latestContent$$))) {
      var $messagingContentRoot$$ = this.$_getPopupElement$();
      $domNode_isPopupOpen$$ = $messagingContentRoot$$.ojPopup("isOpen");
      $domNode_isPopupOpen$$ ? $domNode_isPopupOpen$$ && ($domNode_isPopupOpen$$ = $messagingContentRoot$$[0], $domNode_isPopupOpen$$.innerHTML = "", $domNode_isPopupOpen$$.innerHTML = $latestContent$$, $messagingContentRoot$$.ojPopup("refresh")) : ($domNode_isPopupOpen$$ = $messagingContentRoot$$[0], $domNode_isPopupOpen$$.innerHTML = "", $domNode_isPopupOpen$$.innerHTML = $latestContent$$, $messagingContentRoot$$.ojPopup("open", this.$GetLauncher$()));
    }
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_canOpenPopup$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_canOpenPopup$$() {
    var $options$$124$$ = this.$GetComponent$().options, $isReadOnly$$ = $options$$124$$.readOnly || !1;
    return!($options$$124$$.disabled || $isReadOnly$$);
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_updatePopupIfOpen$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_updatePopupIfOpen$$() {
    var $domNode$$1_isPopupOpen$$1$$;
    $domNode$$1_isPopupOpen$$1$$ = !1;
    var $contentToShow$$, $isLauncherActiveElement$$;
    if (this.$_isPopupInitialized$()) {
      var $messagingContentRoot$$1$$ = this.$_getPopupElement$();
      $domNode$$1_isPopupOpen$$1$$ = $messagingContentRoot$$1$$.ojPopup("isOpen");
      $contentToShow$$ = this.$_buildPopupHtml$();
      $isLauncherActiveElement$$ = document.activeElement === this.$GetLauncher$()[0] ? !0 : !1;
      $domNode$$1_isPopupOpen$$1$$ ? $contentToShow$$ ? ($domNode$$1_isPopupOpen$$1$$ = $messagingContentRoot$$1$$[0], $domNode$$1_isPopupOpen$$1$$.innerHTML = "", $domNode$$1_isPopupOpen$$1$$.innerHTML = $contentToShow$$, $messagingContentRoot$$1$$.ojPopup("refresh")) : $messagingContentRoot$$1$$.ojPopup("close") : $isLauncherActiveElement$$ && $contentToShow$$ && this.$_openPopup$();
    }
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_unregisterLauncherEvents$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_unregisterLauncherEvents$$() {
    var $compDefaults_events$$ = $oj$$4$$.$PopupMessagingStrategy$.$_DEFAULTS_BY_COMPONENT$[this.$GetComponent$().widgetName], $compDefaults_events$$ = $compDefaults_events$$ ? $compDefaults_events$$.$events$ : $oj$$4$$.$PopupMessagingStrategy$.$_DEFAULTS_BY_COMPONENT$["default"].$events$;
    if ($compDefaults_events$$.open) {
      var $closePopupCallback_openPopupCallback$$ = this.$_openPopupCallback$;
      delete this.$_openPopupCallback$;
      $closePopupCallback_openPopupCallback$$ && this.$GetLauncher$().off($compDefaults_events$$.open, $closePopupCallback_openPopupCallback$$);
    }
    $compDefaults_events$$.close && ($closePopupCallback_openPopupCallback$$ = this.$_closePopupCallback$) && this.$GetLauncher$().off($compDefaults_events$$.close, $closePopupCallback_openPopupCallback$$);
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_registerLauncherEvents$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_registerLauncherEvents$$() {
    var $jqLauncher$$ = this.$GetLauncher$(), $compDefaults$$1_events$$1$$ = $oj$$4$$.$PopupMessagingStrategy$.$_DEFAULTS_BY_COMPONENT$[this.$GetComponent$().widgetName], $compDefaults$$1_events$$1$$ = $compDefaults$$1_events$$1$$ ? $compDefaults$$1_events$$1$$.$events$ : $oj$$4$$.$PopupMessagingStrategy$.$_DEFAULTS_BY_COMPONENT$["default"].$events$;
    if ($compDefaults$$1_events$$1$$.open) {
      var $closePopupCallback$$1_openPopupCallback$$1$$ = this.$_openPopupCallback$;
      $closePopupCallback$$1_openPopupCallback$$1$$ || ($closePopupCallback$$1_openPopupCallback$$1$$ = this.$_openPopupCallback$ = $$$$4$$.proxy(this.$_openPopup$, this));
      $jqLauncher$$.on($compDefaults$$1_events$$1$$.open, $closePopupCallback$$1_openPopupCallback$$1$$);
    }
    $compDefaults$$1_events$$1$$.close && ($closePopupCallback$$1_openPopupCallback$$1$$ = this.$_closePopupCallback$, $closePopupCallback$$1_openPopupCallback$$1$$ || ($closePopupCallback$$1_openPopupCallback$$1$$ = this.$_closePopupCallback$ = $$$$4$$.proxy(this.$_closePopup$, this)), $jqLauncher$$.on($compDefaults$$1_events$$1$$.close, $closePopupCallback$$1_openPopupCallback$$1$$));
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_getPopupPosition$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_getPopupPosition$$() {
    var $launcher$$4$$, $compDefaultPosition_compDefaults$$2$$ = $oj$$4$$.$PopupMessagingStrategy$.$_DEFAULTS_BY_COMPONENT$[this.$GetComponent$().widgetName];
    ($compDefaultPosition_compDefaults$$2$$ = $compDefaultPosition_compDefaults$$2$$ ? $compDefaultPosition_compDefaults$$2$$.position : $oj$$4$$.$PopupMessagingStrategy$.$_DEFAULTS_BY_COMPONENT$["default"].position) && ("launcher" === $compDefaultPosition_compDefaults$$2$$ ? $launcher$$4$$ = this.$GetLauncher$() : "launcher-wrapper" === $compDefaultPosition_compDefaults$$2$$ && ($launcher$$4$$ = this.$GetLauncher$().parent()));
    $launcher$$4$$ || ($launcher$$4$$ = this.$GetComponent$().widget());
    return{my:"start bottom", at:"end top", collision:"flipcenter", of:$launcher$$4$$};
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_getPopupElement$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_getPopupElement$$() {
    if (this.$$messagingContentRoot$) {
      return this.$$messagingContentRoot$;
    }
    var $popup$$ = $oj$$4$$.$PopupMessagingStrategyPoolUtils$.$getNextFreePopup$(), $position$$1$$ = this.$_getPopupPosition$();
    $popup$$.ojPopup("option", "position", $position$$1$$);
    $popup$$.ojPopup("option", "close", $$$$4$$.proxy(this.$_popupCloseCallback$, this));
    $popup$$.ojPopup("option", "open", $$$$4$$.proxy(this.$_popupOpenCallback$, this));
    return this.$$messagingContentRoot$ = $popup$$;
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_popupOpenCallback$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_popupOpenCallback$$($event$$43$$) {
    var $target$$74$$ = $$$$4$$($event$$43$$.target), $self$$47$$ = this;
    window.setTimeout(function() {
      $oj$$4$$.Components.$isComponentInitialized$($target$$74$$) ? $target$$74$$.ojPopup("option", "autoDismiss", "focusLoss") : delete $self$$47$$.$$messagingContentRoot$;
    }, 10);
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_popupCloseCallback$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_popupCloseCallback$$($event$$44_target$$75$$) {
    $event$$44_target$$75$$ = $$$$4$$($event$$44_target$$75$$.target);
    $oj$$4$$.Components.$isComponentInitialized$($event$$44_target$$75$$) && ($event$$44_target$$75$$.ojPopup("option", "autoDismiss", "none"), $event$$44_target$$75$$.ojPopup("option", "open", null), $event$$44_target$$75$$.ojPopup("option", "close", null));
    delete this.$$messagingContentRoot$;
    $event$$44_target$$75$$.children().remove();
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_destroyTooltip$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_destroyTooltip$$() {
    this.$_closePopup$();
    $oj$$4$$.$PopupMessagingStrategyPoolUtils$.$destroyFreePopup$();
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_buildPopupHtml$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_buildPopupHtml$$() {
    var $nwHtml$$ = "", $document$$1$$ = this.$GetComponent$().document[0], $nwContent$$ = [], $addSeparator$$ = !1;
    this.$ShowMessages$() && $nwContent$$.push(this.$_buildMessagesHtml$($document$$1$$));
    (this.$ShowConverterHint$() || this.$ShowValidatorHint$() || this.$ShowTitle$()) && $nwContent$$.push(this.$_buildHintsHtml$($document$$1$$));
    $$$$4$$.each($nwContent$$, function($i$$93$$, $content$$10$$) {
      $content$$10$$ && ($addSeparator$$ ? $nwHtml$$ = $nwHtml$$.concat($oj$$4$$.$PopupMessagingStrategyUtils$.$getSeparatorHtml$($document$$1$$)) : $addSeparator$$ = !0, $nwHtml$$ = $nwHtml$$.concat($content$$10$$));
    });
    return $nwHtml$$;
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_buildMessagesHtml$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_buildMessagesHtml$$($document$$2$$) {
    var $content$$11_messages$$9$$;
    $content$$11_messages$$9$$ = "";
    var $maxSeverity$$2$$ = this.$GetMaxSeverity$();
    this.$HasMessages$() && ($content$$11_messages$$9$$ = this.$GetMessages$(), $content$$11_messages$$9$$ = $oj$$4$$.$PopupMessagingStrategyUtils$.$buildMessagesHtml$($document$$2$$, $content$$11_messages$$9$$, $maxSeverity$$2$$, !1));
    return $content$$11_messages$$9$$;
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_buildHintsHtml$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_buildHintsHtml$$($document$$3$$) {
    var $hint$$2_hints$$3$$ = [], $i$$94$$, $hintsHtml$$ = "";
    this.$ShowConverterHint$() && ($hint$$2_hints$$3$$ = this.$GetConverterHint$(), $hint$$2_hints$$3$$ = $hint$$2_hints$$3$$.length ? $hint$$2_hints$$3$$[0] : "", $hintsHtml$$ += $oj$$4$$.$PopupMessagingStrategyUtils$.$buildHintHtml$($document$$3$$, $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_FORMCONTROL_HINT_CONVERTER$, $hint$$2_hints$$3$$, !1, $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_FORMCONTROL_HINT$));
    if (this.$ShowValidatorHint$()) {
      for ($hint$$2_hints$$3$$ = this.$GetValidatorHints$(), $i$$94$$ = 0;$i$$94$$ < $hint$$2_hints$$3$$.length;$i$$94$$++) {
        $hintsHtml$$ += $oj$$4$$.$PopupMessagingStrategyUtils$.$buildHintHtml$($document$$3$$, $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_FORMCONTROL_HINT_VALIDATOR$, $hint$$2_hints$$3$$[$i$$94$$], !1, $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_FORMCONTROL_HINT$);
      }
    }
    this.$ShowTitle$() && ($hintsHtml$$ += $oj$$4$$.$PopupMessagingStrategyUtils$.$buildHintHtml$($document$$3$$, $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_FORMCONTROL_HINT_TITLE$, this.$GetTitle$(), !0, $oj$$4$$.$PopupMessagingStrategy$.$_SELECTOR_FORMCONTROL_HINT$));
    return $hintsHtml$$ ? "\x3cdiv class\x3d'oj-form-control-hints'\x3e" + $hintsHtml$$ + "\x3c/div\x3e" : "";
  };
  $oj$$4$$.$PopupMessagingStrategy$.prototype.$_isPopupInitialized$ = function $$oj$$4$$$$PopupMessagingStrategy$$$$_isPopupInitialized$$() {
    return this.$$messagingContentRoot$ ? $oj$$4$$.Components.$isComponentInitialized$(this.$$messagingContentRoot$) : !1;
  };
  $oj$$4$$.$PopupMessagingStrategyUtils$ = {};
  $oj$$4$$.$PopupMessagingStrategyUtils$.$buildHintHtml$ = function $$oj$$4$$$$PopupMessagingStrategyUtils$$$buildHintHtml$$($document$$4$$, $selector$$18$$, $hintText$$, $htmlAllowed$$, $formControlSelectors$$) {
    var $jTitleDom$$;
    $hintText$$ && ($jTitleDom$$ = $$$$4$$($document$$4$$.createElement("div")), $jTitleDom$$.addClass($formControlSelectors$$ + (" " + $selector$$18$$)), $jTitleDom$$.append($oj$$4$$.$PopupMessagingStrategyUtils$.$_getTextDom$($document$$4$$, $hintText$$, $htmlAllowed$$)));
    return $jTitleDom$$ ? $jTitleDom$$.get(0).outerHTML : "";
  };
  $oj$$4$$.$PopupMessagingStrategyUtils$.$getSeverityTranslatedString$ = function $$oj$$4$$$$PopupMessagingStrategyUtils$$$getSeverityTranslatedString$$($severity$$5$$) {
    var $sevTypeStr$$;
    switch($severity$$5$$) {
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.FATAL:
        $sevTypeStr$$ = $oj$$4$$.$Translations$.$getTranslatedString$("oj-message.fatal");
        break;
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.ERROR:
        $sevTypeStr$$ = $oj$$4$$.$Translations$.$getTranslatedString$("oj-message.error");
        break;
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.WARNING:
        $sevTypeStr$$ = $oj$$4$$.$Translations$.$getTranslatedString$("oj-message.warning");
        break;
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.INFO:
        $sevTypeStr$$ = $oj$$4$$.$Translations$.$getTranslatedString$("oj-message.info");
        break;
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.CONFIRMATION:
        $sevTypeStr$$ = $oj$$4$$.$Translations$.$getTranslatedString$("oj-message.confirmation");
    }
    return $sevTypeStr$$;
  };
  $oj$$4$$.$PopupMessagingStrategyUtils$.$getSeparatorHtml$ = function $$oj$$4$$$$PopupMessagingStrategyUtils$$$getSeparatorHtml$$($document$$5_jSeparatorDom$$) {
    return($document$$5_jSeparatorDom$$ = $$$$4$$($document$$5_jSeparatorDom$$.createElement("hr"))) ? $document$$5_jSeparatorDom$$.get(0).outerHTML : "";
  };
  $oj$$4$$.$PopupMessagingStrategyUtils$.$buildMessagesHtml$ = function $$oj$$4$$$$PopupMessagingStrategyUtils$$$buildMessagesHtml$$($document$$6$$, $j$$8_messages$$10$$, $maxSeverity$$3_severityStr_summary$$4$$, $renderSeveritySelectors$$1$$) {
    var $content$$12$$ = "", $i$$95$$, $severityLevel$$, $detail$$7_message$$29$$, $messageObj_messagesByType$$, $messagesByTypes$$ = {};
    $messageObj_messagesByType$$ = [];
    for ($i$$95$$ = 0;$i$$95$$ < $j$$8_messages$$10$$.length;$i$$95$$++) {
      $detail$$7_message$$29$$ = $j$$8_messages$$10$$[$i$$95$$], $messageObj_messagesByType$$ = $detail$$7_message$$29$$ instanceof $oj$$4$$.$Message$ ? $detail$$7_message$$29$$ : new $oj$$4$$.$Message$($detail$$7_message$$29$$.summary, $detail$$7_message$$29$$.detail, $detail$$7_message$$29$$.severity), $severityLevel$$ = $oj$$4$$.$Message$.$getSeverityLevel$($messageObj_messagesByType$$.severity), $messagesByTypes$$[$severityLevel$$] || ($messagesByTypes$$[$severityLevel$$] = []), $messagesByTypes$$[$severityLevel$$].push($messageObj_messagesByType$$)
      ;
    }
    for ($i$$95$$ = $maxSeverity$$3_severityStr_summary$$4$$;$i$$95$$ >= $oj$$4$$.$Message$.$SEVERITY_LEVEL$.CONFIRMATION;$i$$95$$--) {
      for ($messageObj_messagesByType$$ = $messagesByTypes$$[$i$$95$$] || [], $j$$8_messages$$10$$ = 0;$j$$8_messages$$10$$ < $messageObj_messagesByType$$.length;$j$$8_messages$$10$$++) {
        $detail$$7_message$$29$$ = $messageObj_messagesByType$$[$j$$8_messages$$10$$], $oj$$4$$.$Assert$.$assertPrototype$($detail$$7_message$$29$$, $oj$$4$$.$Message$), $severityLevel$$ = $oj$$4$$.$Message$.$getSeverityLevel$($detail$$7_message$$29$$.severity), $maxSeverity$$3_severityStr_summary$$4$$ = $oj$$4$$.$PopupMessagingStrategyUtils$.$getSeverityTranslatedString$($severityLevel$$), $maxSeverity$$3_severityStr_summary$$4$$ = $detail$$7_message$$29$$.summary || $maxSeverity$$3_severityStr_summary$$4$$, 
        $detail$$7_message$$29$$ = $detail$$7_message$$29$$.detail || "", $content$$12$$ = $content$$12$$.concat($oj$$4$$.$PopupMessagingStrategyUtils$.$buildMessageHtml$($document$$6$$, $maxSeverity$$3_severityStr_summary$$4$$, $detail$$7_message$$29$$, $severityLevel$$, $renderSeveritySelectors$$1$$));
      }
    }
    return $content$$12$$;
  };
  $oj$$4$$.$PopupMessagingStrategyUtils$.$buildMessageHtml$ = function $$oj$$4$$$$PopupMessagingStrategyUtils$$$buildMessageHtml$$($$msgDetail_document$$7$$, $detailDom_summary$$5$$, $detail$$8$$, $$msgContent_severityLevel$$1$$, $$msgIcon_addSeverityClass$$) {
    var $$msgDom$$, $$msgSummary_severityStr$$1$$;
    $$msgSummary_severityStr$$1$$ = $oj$$4$$.$PopupMessagingStrategyUtils$.$getSeverityTranslatedString$($$msgContent_severityLevel$$1$$);
    $$msgDom$$ = $$$$4$$($$msgDetail_document$$7$$.createElement("div"));
    $$msgDom$$.addClass($oj$$4$$.$PopupMessagingStrategyUtils$.$_SELECTOR_MESSAGE$);
    $$msgIcon_addSeverityClass$$ && $$msgDom$$.addClass($oj$$4$$.$PopupMessagingStrategyUtils$.$_getSeveritySelector$($$msgContent_severityLevel$$1$$));
    $$msgIcon_addSeverityClass$$ = $$$$4$$($$msgDetail_document$$7$$.createElement("span"));
    $$msgIcon_addSeverityClass$$.addClass($oj$$4$$.$PopupMessagingStrategyUtils$.$_getSeverityIconSelector$($$msgContent_severityLevel$$1$$)).attr("title", $$msgSummary_severityStr$$1$$).attr("role", "img");
    $$msgDom$$.append($$msgIcon_addSeverityClass$$);
    $$msgContent_severityLevel$$1$$ = $$$$4$$($$msgDetail_document$$7$$.createElement("span"));
    $$msgContent_severityLevel$$1$$.addClass($oj$$4$$.$PopupMessagingStrategyUtils$.$_SELECTOR_MESSAGE_CONTENT$);
    $$msgSummary_severityStr$$1$$ = $$$$4$$($$msgDetail_document$$7$$.createElement("div"));
    $$msgSummary_severityStr$$1$$.addClass($oj$$4$$.$PopupMessagingStrategyUtils$.$_SELECTOR_MESSAGE_SUMMARY$).text($detailDom_summary$$5$$);
    $$msgContent_severityLevel$$1$$.append($$msgSummary_severityStr$$1$$);
    $detail$$8$$ && ($detailDom_summary$$5$$ = $oj$$4$$.$PopupMessagingStrategyUtils$.$_getTextDom$($$msgDetail_document$$7$$, $detail$$8$$, !0), $$msgDetail_document$$7$$ = $$$$4$$($$msgDetail_document$$7$$.createElement("div")), $$msgDetail_document$$7$$.addClass($oj$$4$$.$PopupMessagingStrategyUtils$.$_SELECTOR_MESSAGE_DETAIL$).append($detailDom_summary$$5$$), $$msgContent_severityLevel$$1$$.append($$msgDetail_document$$7$$));
    $$msgDom$$.append($$msgContent_severityLevel$$1$$);
    return $$msgDom$$ ? $$msgDom$$.get(0).outerHTML : "";
  };
  $oj$$4$$.$PopupMessagingStrategyUtils$.$_getSeverityIconSelector$ = function $$oj$$4$$$$PopupMessagingStrategyUtils$$$_getSeverityIconSelector$$($severity$$6$$) {
    var $sevIconStr$$;
    switch($severity$$6$$) {
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.FATAL:
        $sevIconStr$$ = $oj$$4$$.$PopupMessagingStrategyUtils$.$_SELECTOR_MESSAGE_ERROR_ICON$;
        break;
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.ERROR:
        $sevIconStr$$ = $oj$$4$$.$PopupMessagingStrategyUtils$.$_SELECTOR_MESSAGE_ERROR_ICON$;
        break;
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.WARNING:
        $sevIconStr$$ = $oj$$4$$.$PopupMessagingStrategyUtils$.$_SELECTOR_MESSAGE_WARNING_ICON$;
        break;
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.INFO:
        $sevIconStr$$ = $oj$$4$$.$PopupMessagingStrategyUtils$.$_SELECTOR_MESSAGE_INFO_ICON$;
        break;
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.CONFIRMATION:
        $sevIconStr$$ = $oj$$4$$.$PopupMessagingStrategyUtils$.$_SELECTOR_MESSAGE_CONFIRMATION_ICON$;
    }
    return $oj$$4$$.$PopupMessagingStrategyUtils$.$_DEFAULT_STATUS_ICON_SELECTORS$ + $sevIconStr$$;
  };
  $oj$$4$$.$PopupMessagingStrategyUtils$.$_getSeveritySelector$ = function $$oj$$4$$$$PopupMessagingStrategyUtils$$$_getSeveritySelector$$($sevSelectorStr_severity$$7$$) {
    switch($sevSelectorStr_severity$$7$$) {
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.FATAL:
        $sevSelectorStr_severity$$7$$ = $oj$$4$$.$PopupMessagingStrategyUtils$.$_SELECTOR_MESSAGE_ERROR$;
        break;
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.ERROR:
        $sevSelectorStr_severity$$7$$ = $oj$$4$$.$PopupMessagingStrategyUtils$.$_SELECTOR_MESSAGE_ERROR$;
        break;
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.WARNING:
        $sevSelectorStr_severity$$7$$ = $oj$$4$$.$PopupMessagingStrategyUtils$.$_SELECTOR_MESSAGE_WARNING$;
        break;
      case $oj$$4$$.$Message$.$SEVERITY_LEVEL$.INFO:
        $sevSelectorStr_severity$$7$$ = $oj$$4$$.$PopupMessagingStrategyUtils$.$_SELECTOR_MESSAGE_INFO$;
        break;
      default:
        $sevSelectorStr_severity$$7$$ = $oj$$4$$.$PopupMessagingStrategyUtils$.$_SELECTOR_MESSAGE_CONFIRMATION$;
    }
    return $sevSelectorStr_severity$$7$$;
  };
  $oj$$4$$.$PopupMessagingStrategyUtils$.$_getTextDom$ = function $$oj$$4$$$$PopupMessagingStrategyUtils$$$_getTextDom$$($document$$8$$, $value$$77$$, $htmlAllowed$$1$$) {
    var $textDom$$ = null;
    $oj$$4$$.$StringUtils$.$isString$($value$$77$$) && ($htmlAllowed$$1$$ && $oj$$4$$.$DomUtils$.$isHTMLContent$($value$$77$$) ? $textDom$$ = $oj$$4$$.$DomUtils$.$cleanHtml$($value$$77$$.substring(6, $value$$77$$.length - 7)) : ($textDom$$ = $document$$8$$.createElement("span"), $textDom$$.textContent = $value$$77$$));
    return $textDom$$;
  };
  $oj$$4$$.$PopupMessagingStrategyUtils$.$_DEFAULT_STATUS_ICON_SELECTORS$ = "oj-component-icon oj-message-status-icon ";
  $oj$$4$$.$PopupMessagingStrategyUtils$.$_SELECTOR_MESSAGE$ = "oj-message";
  $oj$$4$$.$PopupMessagingStrategyUtils$.$_SELECTOR_MESSAGE_SUMMARY$ = "oj-message-summary";
  $oj$$4$$.$PopupMessagingStrategyUtils$.$_SELECTOR_MESSAGE_DETAIL$ = "oj-message-detail";
  $oj$$4$$.$PopupMessagingStrategyUtils$.$_SELECTOR_MESSAGE_CONTENT$ = "oj-message-content";
  $oj$$4$$.$PopupMessagingStrategyUtils$.$_SELECTOR_MESSAGE_ERROR_ICON$ = "oj-message-error-icon";
  $oj$$4$$.$PopupMessagingStrategyUtils$.$_SELECTOR_MESSAGE_WARNING_ICON$ = "oj-message-warning-icon";
  $oj$$4$$.$PopupMessagingStrategyUtils$.$_SELECTOR_MESSAGE_INFO_ICON$ = "oj-message-info-icon";
  $oj$$4$$.$PopupMessagingStrategyUtils$.$_SELECTOR_MESSAGE_CONFIRMATION_ICON$ = "oj-message-confirmation-icon";
  $oj$$4$$.$PopupMessagingStrategyUtils$.$_SELECTOR_MESSAGE_ERROR$ = "oj-message-error";
  $oj$$4$$.$PopupMessagingStrategyUtils$.$_SELECTOR_MESSAGE_WARNING$ = "oj-message-warning";
  $oj$$4$$.$PopupMessagingStrategyUtils$.$_SELECTOR_MESSAGE_INFO$ = "oj-message-info";
  $oj$$4$$.$PopupMessagingStrategyUtils$.$_SELECTOR_MESSAGE_CONFIRMATION$ = "oj-message-confirmation";
  $oj$$4$$.$PopupMessagingStrategyPoolUtils$ = {};
  $oj$$4$$.$PopupMessagingStrategyPoolUtils$.$getNextFreePopup$ = function $$oj$$4$$$$PopupMessagingStrategyPoolUtils$$$getNextFreePopup$$() {
    var $pool$$ = $oj$$4$$.$PopupMessagingStrategyPoolUtils$.$_getPool$(), $popup$$1_popups$$ = $pool$$.find("." + $oj$$4$$.$PopupMessagingStrategyPoolUtils$.$_SELECTOR_MESSAGING_CONTAINER$);
    0 === $popup$$1_popups$$.length ? ($popup$$1_popups$$ = $$$$4$$($oj$$4$$.$PopupMessagingStrategyPoolUtils$.$_getPopupContentHtml$()).hide(), $popup$$1_popups$$.appendTo($pool$$), $popup$$1_popups$$.ojPopup({rootAttributes:{"class":$oj$$4$$.$PopupMessagingStrategyPoolUtils$.$_SELECTOR_MESSAGING$}, initialFocus:"none", tail:"simple", autoDismiss:"none", modality:"modeless"})) : $popup$$1_popups$$ = $$$$4$$($popup$$1_popups$$[0]);
    return $popup$$1_popups$$;
  };
  $oj$$4$$.$PopupMessagingStrategyPoolUtils$.$destroyFreePopup$ = function $$oj$$4$$$$PopupMessagingStrategyPoolUtils$$$destroyFreePopup$$() {
    if (0 < $oj$$4$$.$PopupMessagingStrategyPoolUtils$.$_getFreePoolCount$()) {
      var $popup$$2$$ = $oj$$4$$.$PopupMessagingStrategyPoolUtils$.$getNextFreePopup$();
      $popup$$2$$.ojPopup("destroy");
      $popup$$2$$.remove();
    }
  };
  $oj$$4$$.$PopupMessagingStrategyPoolUtils$.$_getPool$ = function $$oj$$4$$$$PopupMessagingStrategyPoolUtils$$$_getPool$$() {
    var $pool$$1$$ = $$$$4$$("#" + $oj$$4$$.$PopupMessagingStrategyPoolUtils$.$_MESSAGING_POPUP_POOL_ID$);
    if (0 < $pool$$1$$.length) {
      return $pool$$1$$;
    }
    $pool$$1$$ = $$$$4$$("\x3cdiv\x3e");
    $pool$$1$$.attr("id", $oj$$4$$.$PopupMessagingStrategyPoolUtils$.$_MESSAGING_POPUP_POOL_ID$);
    $pool$$1$$.attr("role", "presentation");
    $pool$$1$$.appendTo($$$$4$$(document.body));
    return $pool$$1$$;
  };
  $oj$$4$$.$PopupMessagingStrategyPoolUtils$.$_getFreePoolCount$ = function $$oj$$4$$$$PopupMessagingStrategyPoolUtils$$$_getFreePoolCount$$() {
    return $oj$$4$$.$PopupMessagingStrategyPoolUtils$.$_getPool$().find("." + $oj$$4$$.$PopupMessagingStrategyPoolUtils$.$_SELECTOR_MESSAGING_CONTAINER$).length;
  };
  $oj$$4$$.$PopupMessagingStrategyPoolUtils$.$_getPopupContentHtml$ = function $$oj$$4$$$$PopupMessagingStrategyPoolUtils$$$_getPopupContentHtml$$() {
    return "\x3cdiv class\x3d'" + $oj$$4$$.$PopupMessagingStrategyPoolUtils$.$_SELECTOR_MESSAGING_CONTAINER$ + "'\x3e\x3c/div\x3e";
  };
  $oj$$4$$.$PopupMessagingStrategyPoolUtils$.$_SELECTOR_MESSAGING_CONTAINER$ = "oj-messaging-popup-container";
  $oj$$4$$.$PopupMessagingStrategyPoolUtils$.$_SELECTOR_MESSAGING$ = "oj-messaging-popup";
  $oj$$4$$.$PopupMessagingStrategyPoolUtils$.$_MESSAGING_POPUP_POOL_ID$ = "__oj_messaging_popup_pool";
  (function() {
    $oj$$4$$.$__registerWidget$("oj._ojLabel", $$$$4$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3clabel\x3e", widgetEventPrefix:"oj", options:{ariaRequiredUnsupported:!1, describedById:null, help:{definition:null, source:null}, required:!1, rootAttributes:null}, $_BUNDLE_KEY$:{$_TOOLTIP_HELP$:"tooltipHelp", $_TOOLTIP_REQUIRED$:"tooltipRequired"}, widget:function() {
      return this.$uiLabel$;
    }, refresh:function() {
      this._super();
      this.$_refreshRequired$();
      this.$_refreshHelp$();
    }, $_InitOptions$:function($originalDefaults$$3$$, $constructorOptions$$5$$) {
      this._super($originalDefaults$$3$$, $constructorOptions$$5$$);
      this.$_checkRequiredOption$();
      this.$_checkDescribedByIdOption$();
    }, _ComponentCreate:function() {
      this._super();
      this.$_touchEatClickNamespace$ = this.eventNamespace + "TouchEatClick";
      this.$_helpDefPopupNamespace$ = this.eventNamespace + "HelpDefPopup";
      this.$_bTouchSupported$ = $oj$$4$$.$DomUtils$.$isTouchSupported$();
      this.$_drawOnCreate$();
    }, $_SaveAttributes$:function($element$$38$$) {
      this.$_savedClasses$ = $element$$38$$.attr("class");
    }, $_RestoreAttributes$:function() {
      this.$_savedClasses$ ? this.element.attr("class", this.$_savedClasses$) : this.element.removeAttr("class");
    }, $_drawOnCreate$:function() {
      var $ariaRequiredUnsupported_options$$125$$ = this.options, $requiredOpt$$ = $ariaRequiredUnsupported_options$$125$$.required, $ariaRequiredUnsupported_options$$125$$ = $ariaRequiredUnsupported_options$$125$$.ariaRequiredUnsupported, $needsDescribedBySpan$$ = this.$_needsDescribedBySpan$(), $describedByDom$$ = null;
      this.$uiLabel$ = this.element.wrap(this.$_createRootDomElement$()).closest(".oj-component");
      this.$_moveClassesToRoot$();
      $needsDescribedBySpan$$ && ($describedByDom$$ = this.$_createDescribedBySpan$());
      this.$_createHelpIfNeeded$($describedByDom$$);
      $requiredOpt$$ && ($ariaRequiredUnsupported_options$$125$$ ? $describedByDom$$.appendChild(this.$_createRequiredIconDomElement$()) : this.element.before(this.$_createRequiredIconDomElement$()));
    }, $_createHelpIfNeeded$:function($describedByDom$$1$$) {
      var $options$$126$$ = this.options, $helpDef$$ = $options$$126$$.help.definition;
      if ($options$$126$$.help.source || $helpDef$$) {
        this.$_insertHelpHtml$($describedByDom$$1$$), this.$_addHelpDefToLabel$(), this.$_attachHelpDefToIconAnchor$();
      }
    }, $_checkRequiredOption$:function() {
      var $required$$ = this.options.required;
      if (null !== $required$$ && "boolean" !== typeof $required$$) {
        throw Error("Option 'required' has invalid value set: " + $required$$);
      }
    }, $_checkDescribedByIdOption$:function() {
      var $options$$127$$ = this.options;
      if (this.$_needsDescribedBySpan$() && null == $options$$127$$.describedById) {
        throw Error("ojLabel's describedById option must be set if help source is set\n\r\n      or (ariaRequiredUnsupported and required is set).");
      }
    }, $_moveClassesToRoot$:function() {
      var $arrayOfClasses_classes$$ = this.element.attr("class"), $numClasses$$;
      if ($arrayOfClasses_classes$$ && ($arrayOfClasses_classes$$ = $arrayOfClasses_classes$$.split(/\s+/), null != $arrayOfClasses_classes$$)) {
        $numClasses$$ = $arrayOfClasses_classes$$.length;
        for (var $i$$96$$ = 0;$i$$96$$ < $numClasses$$;$i$$96$$++) {
          var $className$$4$$ = $arrayOfClasses_classes$$[$i$$96$$];
          0 < $className$$4$$.indexOf("-label") && (this.$uiLabel$.addClass($className$$4$$), this.element.removeClass($className$$4$$));
        }
      }
    }, $_createDescribedBySpan$:function() {
      var $ojLabelGroupDom$$ = this.$uiLabel$.find(".oj-label-group"), $describedBySpan$$ = document.createElement("span");
      $describedBySpan$$.setAttribute("id", this.options.describedById);
      $ojLabelGroupDom$$.prepend($describedBySpan$$);
      return $describedBySpan$$;
    }, $_createRootDomElement$:function() {
      var $rootAttributes_rootDomNode$$ = this.options.rootAttributes, $inputLabelClass$$, $labelGroupNode_rootDomNodeClasses$$;
      $labelGroupNode_rootDomNodeClasses$$ = "oj-label oj-component";
      $rootAttributes_rootDomNode$$ && ($inputLabelClass$$ = $rootAttributes_rootDomNode$$["class"]);
      null !== $inputLabelClass$$ && ($labelGroupNode_rootDomNodeClasses$$ = $labelGroupNode_rootDomNodeClasses$$ + " " + $inputLabelClass$$);
      $rootAttributes_rootDomNode$$ = document.createElement("div");
      $rootAttributes_rootDomNode$$.className = $labelGroupNode_rootDomNodeClasses$$;
      $labelGroupNode_rootDomNodeClasses$$ = document.createElement("div");
      $labelGroupNode_rootDomNodeClasses$$.className = "oj-label-group";
      $rootAttributes_rootDomNode$$.appendChild($labelGroupNode_rootDomNodeClasses$$);
      return $rootAttributes_rootDomNode$$;
    }, $_createRequiredIconDomElement$:function() {
      var $requiredTooltip$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_REQUIRED$), $requiredDom$$ = document.createElement("span");
      $requiredDom$$.className = "oj-label-required-icon oj-component-icon";
      $requiredDom$$.setAttribute("role", "img");
      $requiredDom$$.setAttribute("title", $requiredTooltip$$);
      return $requiredDom$$;
    }, $_createHelpIconAnchorDomElement$:function($helpDef$$1$$, $source$$8$$) {
      var $helpIconAnchor$$;
      if (this.$_needsHelpIcon$()) {
        $helpIconAnchor$$ = document.createElement("a");
        $helpIconAnchor$$.setAttribute("tabindex", "0");
        $helpIconAnchor$$.setAttribute("target", "_blank");
        $helpIconAnchor$$.className = "oj-label-help-icon-anchor oj-label-help-icon oj-component-icon oj-clickable-icon-nocontext";
        if ($source$$8$$) {
          try {
            $oj$$4$$.$DomUtils$.$validateURL$($source$$8$$), $helpIconAnchor$$.setAttribute("href", $source$$8$$);
          } catch ($e$$31$$) {
            throw Error($e$$31$$ + ". The source option (" + $source$$8$$ + ") is invalid.");
          }
        }
        $helpDef$$1$$ ? $helpIconAnchor$$.setAttribute("title", $helpDef$$1$$) : $helpIconAnchor$$.setAttribute("title", this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_HELP$));
      }
      return $helpIconAnchor$$;
    }, $_attachHelpDefToIconAnchor$:function() {
      var $helpDef$$2_helpDefPopupDiv_position$$2$$;
      $helpDef$$2_helpDefPopupDiv_position$$2$$ = this.options.help.definition;
      var $bodyDom_helpDefText$$, $helpIcon$$, $$helpDefPopupDiv$$;
      $helpIcon$$ = this.widget().find(".oj-label-help-icon-anchor");
      if (0 != $helpIcon$$.length) {
        $bodyDom_helpDefText$$ = $helpDef$$2_helpDefPopupDiv_position$$2$$ ? $helpDef$$2_helpDefPopupDiv_position$$2$$ : this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_HELP$);
        this.$_helpDefPopupDivId$ ? ($$helpDefPopupDiv$$ = $$$$4$$(document.getElementById(this.$_helpDefPopupDivId$))) && $$helpDefPopupDiv$$.text($bodyDom_helpDefText$$) : ($helpDef$$2_helpDefPopupDiv_position$$2$$ = document.createElement("div"), $helpDef$$2_helpDefPopupDiv_position$$2$$.style.display = "none", $$helpDefPopupDiv$$ = $$$$4$$($helpDef$$2_helpDefPopupDiv_position$$2$$), $$helpDefPopupDiv$$.uniqueId(), this.$_helpDefPopupDivId$ = $$helpDefPopupDiv$$.prop("id"), $$helpDefPopupDiv$$.text($bodyDom_helpDefText$$), 
        $bodyDom_helpDefText$$ = document.getElementsByTagName("body")[0], $bodyDom_helpDefText$$.appendChild($helpDef$$2_helpDefPopupDiv_position$$2$$));
        this.$_bTouchSupported$ && (this.$_eatClickOnHelpIconListener$ && this.widget().off(this.$_touchEatClickNamespace$), this.$_eatClickOnHelpIconListener$ = function $this$$_eatClickOnHelpIconListener$$() {
          return!1;
        });
        var $self$$48$$ = this;
        this.$_openPopupForHelpDefCallbackListener$ || (this.$_openPopupForHelpDefCallbackListener$ = function $this$$_openPopupForHelpDefCallbackListener$$($event$$46$$) {
          $self$$48$$.$_handleOpenPopupForHelpDef$($event$$46$$, $$helpDefPopupDiv$$, $helpIcon$$, !1);
        });
        if (this.$_bTouchSupported$) {
          $helpIcon$$.$ojHammer$({recognizers:[[$Hammer$$1$$.Press, {time:750}]]}).on("press", this.$_openPopupForHelpDefCallbackListener$);
        } else {
          $helpIcon$$.on("focusin" + this.$_helpDefPopupNamespace$ + " mousedown" + this.$_helpDefPopupNamespace$, this.$_openPopupForHelpDefCallbackListener$);
        }
        $helpDef$$2_helpDefPopupDiv_position$$2$$ = {my:"start bottom", at:"end top", collision:"flipcenter", of:$helpIcon$$};
        $$helpDefPopupDiv$$.ojPopup({position:$helpDef$$2_helpDefPopupDiv_position$$2$$, modality:"modeless"});
      }
    }, $_handleOpenPopupForHelpDef$:function($event$$47$$, $helpDefPopupDiv$$1$$, $helpIcon$$1$$, $inMouseDown$$1$$) {
      if ("mousedown" === $event$$47$$.type) {
        $inMouseDown$$1$$ = !0;
      } else {
        if ("focusin" === $event$$47$$.type && $inMouseDown$$1$$) {
          $inMouseDown$$1$$ = !1;
        } else {
          if (this.$_bTouchSupported$) {
            if ("press" === $event$$47$$.type) {
              var $widget$$1$$ = this.widget();
              $widget$$1$$.on("click" + this.$_touchEatClickNamespace$, this.$_eatClickOnHelpIconListener$);
              var $self$$49$$ = this;
              $helpDefPopupDiv$$1$$.on("ojclose", function() {
                $widget$$1$$.off($self$$49$$.$_touchEatClickNamespace$);
                $self$$49$$.$_eatClickOnHelpIconListener$ = null;
              });
            } else {
              $helpDefPopupDiv$$1$$.off("ojclose");
            }
          }
          $helpDefPopupDiv$$1$$.ojPopup("isOpen") || $helpDefPopupDiv$$1$$.ojPopup("open", $helpIcon$$1$$);
        }
      }
    }, $_addHelpDefToLabel$:function() {
      var $element$$40$$ = this.element, $helpDef$$3$$ = this.options.help.definition, $title$$7$$;
      $helpDef$$3$$ && ($element$$40$$.addClass("oj-label-help-def"), ($title$$7$$ = $element$$40$$.attr("title")) ? $element$$40$$.attr("title", $title$$7$$ + " " + $helpDef$$3$$) : $element$$40$$.attr("title", $helpDef$$3$$));
    }, $_removeHelpDefIconEventListeners$:function($helpIcon$$2$$) {
      this.$_bTouchSupported$ && (this.widget().off(this.$_touchEatClickNamespace$), this.$_eatClickOnHelpIconListener$ = null, $helpIcon$$2$$.$ojHammer$().off(this.$_helpDefPopupNamespace$));
      $helpIcon$$2$$.off(this.$_helpDefPopupNamespace$);
      this.$_openPopupForHelpDefCallbackListener$ = null;
    }, $_removeHelpDefPopup$:function() {
      var $$helpDefPopupDiv$$1$$;
      if (null != this.$_helpDefPopupDivId$) {
        if ($$helpDefPopupDiv$$1$$ = $$$$4$$(document.getElementById(this.$_helpDefPopupDivId$))) {
          $$helpDefPopupDiv$$1$$.ojPopup("destroy"), $$helpDefPopupDiv$$1$$.remove();
        }
        this.$_helpDefPopupDivId$ = null;
      }
    }, $_removeHelpDefFromLabel$:function() {
      this.element.removeClass("oj-label-help-def");
      this.element.attr("title", "");
    }, $_insertHelpHtml$:function($describedByDom$$2$$) {
      var $helpSource$$1$$ = this.options.help.source, $helpDef$$4$$ = this.options.help.definition;
      this.$_needsHelpIcon$() && $$$$4$$($describedByDom$$2$$).prepend(this.$_createHelpIconAnchorDomElement$($helpDef$$4$$, $helpSource$$1$$));
    }, $_needsDescribedBySpan$:function() {
      var $options$$128$$ = this.options;
      return this.$_needsHelpIcon$() || $options$$128$$.ariaRequiredUnsupported && $options$$128$$.required;
    }, $_needsHelpIcon$:function() {
      var $options$$129$$ = this.options;
      return $options$$129$$.help.source || $options$$129$$.help.definition;
    }, $_refreshHelp$:function() {
      var $helpIcon$$3_needsHelpIcon$$, $describedBySpan$$1$$;
      this.$_checkDescribedByIdOption$();
      this.$_removeHelpDefFromLabel$();
      $helpIcon$$3_needsHelpIcon$$ = this.$uiLabel$.find(".oj-label-help-icon");
      1 === $helpIcon$$3_needsHelpIcon$$.length && (this.$_removeHelpDefIconEventListeners$($helpIcon$$3_needsHelpIcon$$), this.$_removeHelpDefPopup$(), $helpIcon$$3_needsHelpIcon$$.remove());
      $helpIcon$$3_needsHelpIcon$$ = this.$_needsHelpIcon$();
      $describedBySpan$$1$$ = document.getElementById(this.options.describedById);
      null != $helpIcon$$3_needsHelpIcon$$ && null == $describedBySpan$$1$$ ? $describedBySpan$$1$$ = this.$_createDescribedBySpan$() : null == $helpIcon$$3_needsHelpIcon$$ && null !== $describedBySpan$$1$$ && 0 === $describedBySpan$$1$$.children.length && $describedBySpan$$1$$.remove();
      this.$_createHelpIfNeeded$($describedBySpan$$1$$);
    }, $_refreshRequired$:function() {
      var $describedById$$1_requiredTooltip$$1$$, $describedBySpan$$2_requiredDom$$1$$;
      $describedBySpan$$2_requiredDom$$1$$ = this.$uiLabel$.find(".oj-label-required-icon");
      $describedById$$1_requiredTooltip$$1$$ = this.options.describedById;
      this.options.required ? (this.$_checkDescribedByIdOption$(), 0 === $describedBySpan$$2_requiredDom$$1$$.length ? this.options.ariaRequiredUnsupported ? ($describedBySpan$$2_requiredDom$$1$$ = document.getElementById($describedById$$1_requiredTooltip$$1$$), null == $describedBySpan$$2_requiredDom$$1$$ && ($describedBySpan$$2_requiredDom$$1$$ = this.$_createDescribedBySpan$()), $describedBySpan$$2_requiredDom$$1$$.appendChild(this.$_createRequiredIconDomElement$())) : this.element.before(this.$_createRequiredIconDomElement$()) : 
      ($describedById$$1_requiredTooltip$$1$$ = this.$getTranslatedString$(this.$_BUNDLE_KEY$.$_TOOLTIP_REQUIRED$), $describedBySpan$$2_requiredDom$$1$$.attr("title", $describedById$$1_requiredTooltip$$1$$))) : ($describedBySpan$$2_requiredDom$$1$$.remove(), $describedBySpan$$2_requiredDom$$1$$ = document.getElementById($describedById$$1_requiredTooltip$$1$$), null !== $describedBySpan$$2_requiredDom$$1$$ && 0 === $describedBySpan$$2_requiredDom$$1$$.children.length && $describedBySpan$$2_requiredDom$$1$$.remove());
    }, _setOption:function($key$$35$$, $value$$78$$) {
      this._superApply(arguments);
      "required" === $key$$35$$ && this.$_refreshRequired$();
      "help" === $key$$35$$ && this.$_refreshHelp$();
    }, getNodeBySubId:function($locator$$4_subId$$) {
      var $node$$16$$;
      $node$$16$$ = this._super($locator$$4_subId$$);
      $node$$16$$ || ($locator$$4_subId$$ = $locator$$4_subId$$.subId, "oj-label-help-icon" === $locator$$4_subId$$ && ($node$$16$$ = this.widget().find(".oj-label-help-icon")[0]), "oj-label-required-icon" === $locator$$4_subId$$ && ($node$$16$$ = this.widget().find(".oj-label-required-icon")[0]));
      return $node$$16$$ || null;
    }, getSubIdByNode:function($node$$17$$) {
      var $subId$$1$$ = null;
      null != $node$$17$$ && ($node$$17$$ === this.widget().find(".oj-label-help-icon")[0] ? $subId$$1$$ = {subId:"oj-label-help-icon"} : $node$$17$$ === this.widget().find(".oj-label-required-icon")[0] && ($subId$$1$$ = {subId:"oj-label-required-icon"}));
      return $subId$$1$$ || this._superApply(arguments);
    }, _destroy:function() {
      var $helpIcon$$4$$ = this.$uiLabel$.find(".oj-label-help-icon");
      this.$_removeHelpDefIconEventListeners$($helpIcon$$4$$);
      this.$_removeHelpDefPopup$();
      $oj$$4$$.$DomUtils$.unwrap(this.element, this.$uiLabel$);
      return this._super();
    }});
  })();
  var $_sValidationContext$$ = {$COMPONENT_CREATE$:1, $CONVERTER_OPTION_CHANGE$:2, $DISABLED_OPTION_CHANGE$:3, $READONLY_OPTION_CHANGE$:4, $REFRESH_METHOD$:5, $REQUIRED_OPTION_CHANGE$:6, $RESET_METHOD$:7, $USER_ACTION$:8, $VALIDATE_METHOD$:9, $VALIDATORS_OPTION_CHANGE$:10, $VALUE_OPTION_CHANGE$:11}, $_sConverterOptionOptions$$ = {$doNotClearMessages$:!0, $validationContext$:$_sValidationContext$$.$CONVERTER_OPTION_CHANGE$}, $_sDisabledOptionOptions$$ = {$doNotClearMessages$:!0, $validationContext$:$_sValidationContext$$.$DISABLED_OPTION_CHANGE$}, 
  $_sRequiredOptionOptions$$ = {$doNotClearMessages$:!0, $validationContext$:$_sValidationContext$$.$REQUIRED_OPTION_CHANGE$}, $_sReadOnlyOptionOptions$$ = {$doNotClearMessages$:!0, $validationContext$:$_sValidationContext$$.$READONLY_OPTION_CHANGE$}, $_sRefreshMethodOptions$$ = {$doNotClearMessages$:!0, $validationContext$:$_sValidationContext$$.$REFRESH_METHOD$}, $_sValidatorsOptionOptions$$ = {$doNotClearMessages$:!0, $validationContext$:$_sValidationContext$$.$VALIDATORS_OPTION_CHANGE$};
  $oj$$4$$.$__registerWidget$("oj.editableValue", $$$$4$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{disabled:!1, displayOptions:void 0, help:{definition:null, source:null}, messagesCustom:void 0, messagesHidden:void 0, messagesShown:void 0, required:!1, title:"", validators:void 0, value:void 0}, getNodeBySubId:function($locator$$5$$) {
    return this._super($locator$$5$$);
  }, isValid:function() {
    void 0 === this.$_valid$ && (this.$_valid$ = this.$_getValid$());
    return this.$_valid$;
  }, refresh:function() {
    this._super();
    this.$_doRefresh$(!0);
  }, reset:function() {
    this.$_clearAllMessages$();
    this.$_runDeferredValidation$(this.$_VALIDATION_CONTEXT$.$RESET_METHOD$);
    this.$_refreshComponentDisplayValue$(this.options.value, !0);
  }, showMessages:function() {
    var $msgs$$ = this.options.messagesHidden, $msg$$4$$, $mutated$$ = !1, $i$$97$$, $clonedMsgs$$ = [];
    for ($i$$97$$ = 0;$i$$97$$ < $msgs$$.length;$i$$97$$++) {
      $mutated$$ = !0, $msg$$4$$ = $msgs$$[$i$$97$$], $msg$$4$$ instanceof $oj$$4$$.$ComponentMessage$ && $msg$$4$$.$_forceDisplayToShown$(), $clonedMsgs$$.push($msg$$4$$.clone());
    }
    $mutated$$ && (this.$_clearMessages$("messagesHidden"), this.$_updateMessagesOption$("messagesShown", $clonedMsgs$$));
  }, validate:function() {
    return this.$_SetValue$(this.$_GetDisplayValue$(), null, this.$_VALIDATE_METHOD_OPTIONS$);
  }, $_VALIDATION_MODE$:{$FULL$:1, $VALIDATORS_ONLY$:2, $REQUIRED_VALIDATOR_ONLY$:3}, $_VALIDATION_CONTEXT$:$_sValidationContext$$, $_VALIDATE_METHOD_OPTIONS$:{$doValueChangeCheck$:!1, $validationContext$:$_sValidationContext$$.$VALIDATE_METHOD$}, $_InitOptions$:function($originalDefaults$$4$$, $constructorOptions$$6$$) {
    this._super($originalDefaults$$4$$, $constructorOptions$$6$$);
  }, _ComponentCreate:function() {
    var $node$$18$$ = this.element, $savedAttributes$$1$$ = this.$_GetSavedAttributes$($node$$18$$);
    this._super();
    this.options.messagesCustom = this.options.messagesCustom || [];
    this.options.messagesHidden = [];
    this.options.messagesShown = 0 < this.options.messagesCustom.length ? this.$_cloneMessagesBeforeSet$(this.options.messagesCustom) : [];
    this.$_SetDisabledDom$($node$$18$$);
    this.$_HasPlaceholderSet$() && (this.$_SetPlaceholder$(this.options.placeholder), this.$_customPlaceholderSet$ = !0);
    $$$$4$$.each(["required", "title", "pattern"], function($index$$86$$, $value$$79$$) {
      $value$$79$$ in $savedAttributes$$1$$ && $node$$18$$.removeAttr($value$$79$$);
    });
  }, $_AfterCreate$:function() {
    this._super();
    this.$_createOjLabel$();
    this.$_doRefresh$(!1);
    this.$_initComponentMessaging$();
    this.$_runDeferredValidation$(this.$_VALIDATION_CONTEXT$.$COMPONENT_CREATE$);
    0 < this.options.messagesShown.length && this.$_setMessagesOption$("messagesShown", this.options.messagesShown, null, !0);
    this.widget().addClass("oj-form-control");
  }, $_SaveAttributes$:function($element$$41$$) {
    this.$_SaveAllAttributes$($element$$41$$);
  }, $_RestoreAttributes$:function($element$$42$$) {
    this.$_RestoreAllAttributes$($element$$42$$);
  }, $_AfterSetOption$:function($option$$4$$, $flags$$8$$) {
    switch($option$$4$$) {
      case "disabled":
        this.$_AfterSetOptionDisabledReadOnly$($option$$4$$, $_sDisabledOptionOptions$$);
        break;
      case "converter":
        this.$_AfterSetOptionConverter$($option$$4$$);
        break;
      case "displayOptions":
        this.$_initComponentMessaging$();
        break;
      case "help":
        this.$_Refresh$($option$$4$$, this.options[$option$$4$$]);
        break;
      case "messagesCustom":
        this.$_messagesCustomOptionChanged$($flags$$8$$);
        break;
      case "placeholder":
        this.$_placeholderOptionChanged$($flags$$8$$);
        break;
      case "readOnly":
        this.$_AfterSetOptionDisabledReadOnly$($option$$4$$, $_sReadOnlyOptionOptions$$);
        break;
      case "required":
        this.$_AfterSetOptionRequired$($option$$4$$);
        break;
      case "title":
        this.$_titleOptionChanged$();
        break;
      case "translations":
        this.refresh();
        break;
      case "value":
        this.$_AfterSetOptionValue$($option$$4$$, $flags$$8$$);
        break;
      case "validators":
        this.$_AfterSetOptionValidators$($option$$4$$);
    }
  }, $_AfterSetOptionConverter$:function($option$$5$$) {
    var $runFullValidation$$ = !1;
    this.$_ResetConverter$();
    this.$_hasInvalidMessagesShowing$() && ($runFullValidation$$ = !0);
    $runFullValidation$$ ? (this.$_clearComponentMessages$(), this.$_updateValue$($_sConverterOptionOptions$$)) : this.$_Refresh$($option$$5$$, this.options[$option$$5$$], !0);
  }, $_AfterSetOptionDisabledReadOnly$:function($option$$6$$, $validationOptions$$) {
    var $isEnabled$$ = !this.options[$option$$6$$];
    this.$_Refresh$($option$$6$$, this.options[$option$$6$$]);
    $isEnabled$$ && this.$_runMixedValidationAfterSetOption$($validationOptions$$);
  }, $_AfterSetOptionRequired$:function($option$$7$$) {
    this.$_Refresh$($option$$7$$, this.options[$option$$7$$]);
    this.$_runMixedValidationAfterSetOption$($_sRequiredOptionOptions$$);
  }, $_AfterSetOptionValue$:function($option$$8$$, $flags$$9$$) {
    var $isUIValueChange$$ = !1, $doNotClearMessages$$, $context$$35$$ = $flags$$9$$ ? $flags$$9$$._context : null;
    $context$$35$$ && ($isUIValueChange$$ = $context$$35$$.originalEvent ? !0 : !1, $doNotClearMessages$$ = $context$$35$$.$doNotClearMessages$ || !1);
    $isUIValueChange$$ || ($doNotClearMessages$$ || this.$_clearAllMessages$(null), this.$_runDeferredValidation$(this.$_VALIDATION_CONTEXT$.$VALUE_OPTION_CHANGE$));
    this.$_Refresh$($option$$8$$, this.options[$option$$8$$], !0);
  }, $_AfterSetOptionValidators$:function() {
    var $runFullValidation$$1$$ = !1;
    this.$_ResetAllValidators$();
    this.$_hasInvalidMessagesShowing$() && ($runFullValidation$$1$$ = !0);
    $runFullValidation$$1$$ && (this.$_clearComponentMessages$(), this.$_updateValue$($_sValidatorsOptionOptions$$));
  }, $_CanSetValue$:function() {
    var $readOnly$$ = this.options.readOnly || !1;
    return this.options.disabled || $readOnly$$ ? !1 : !0;
  }, _destroy:function() {
    this.widget();
    var $ret$$2$$ = this._super(), $labelLength$$, $labelIndex$$;
    this.$_clearAllMessages$(null, !0);
    this.$_getComponentMessaging$().$deactivate$();
    if (this.$$label$) {
      for ($labelLength$$ = this.$$label$.length, $labelIndex$$ = 0;$labelIndex$$ < $labelLength$$;$labelIndex$$++) {
        this.$$label$[$labelIndex$$] && null != $oj$$4$$.Components.$getWidgetConstructor$(this.$$label$[$labelIndex$$]) && $$$$4$$(this.$$label$[$labelIndex$$])._ojLabel("destroy");
      }
    }
    return $ret$$2$$;
  }, Focus:function() {
    this.$_GetContentElement$().focus();
    return!0;
  }, _setOption:function($name$$71$$, $value$$80$$, $flags$$10$$) {
    var $retVal$$5_skipSetOption$$;
    $retVal$$5_skipSetOption$$ = !1;
    if ("string" === typeof $name$$71$$ && void 0 !== $value$$80$$) {
      switch($name$$71$$) {
        case "messagesHidden":
          $retVal$$5_skipSetOption$$ = !0;
          break;
        case "messagesShown":
          $retVal$$5_skipSetOption$$ = !0;
          break;
        case "rawValue":
          $retVal$$5_skipSetOption$$ = !0;
      }
    }
    if ($retVal$$5_skipSetOption$$) {
      return $oj$$4$$.$Logger$.error($name$$71$$ + " option cannot be set"), this;
    }
    $retVal$$5_skipSetOption$$ = this._superApply(arguments);
    this.$_AfterSetOption$($name$$71$$, $flags$$10$$);
    return $retVal$$5_skipSetOption$$;
  }, $_GetContentElement$:function() {
    return this.element;
  }, $_GetLabelElement$:function() {
    var $ariaElement_id$$14_queryResult$$ = this.$_getAriaLabelledByElement$(this.element);
    if (null !== $ariaElement_id$$14_queryResult$$ && 0 !== $ariaElement_id$$14_queryResult$$.length) {
      return $ariaElement_id$$14_queryResult$$;
    }
    $ariaElement_id$$14_queryResult$$ = this.element.prop("id");
    if (void 0 !== $ariaElement_id$$14_queryResult$$ && ($ariaElement_id$$14_queryResult$$ = $$$$4$$("label[for\x3d'" + $ariaElement_id$$14_queryResult$$ + "']"), 0 !== $ariaElement_id$$14_queryResult$$.length)) {
      return $ariaElement_id$$14_queryResult$$;
    }
    $ariaElement_id$$14_queryResult$$ = this.element.closest("[aria-labelledby]");
    return 0 !== $ariaElement_id$$14_queryResult$$.length && ($ariaElement_id$$14_queryResult$$ = this.$_getAriaLabelledByElement$($ariaElement_id$$14_queryResult$$), null !== $ariaElement_id$$14_queryResult$$ && 0 !== $ariaElement_id$$14_queryResult$$.length) ? $ariaElement_id$$14_queryResult$$ : null;
  }, $_GetElementValue$:function() {
    return this.element.val();
  }, _GetMessagingLauncherElement:function() {
    return this.$_GetContentElement$();
  }, $_GetConverter$:function() {
    this.$_converter$ || (this.$_converter$ = $oj$$4$$.$IntlConverterUtils$.getConverterInstance(this.options.converter));
    return this.$_converter$ || null;
  }, $_GetImplicitValidators$:function() {
    this.$_implicitValidators$ || (this.$_implicitValidators$ = {});
    return this.$_implicitValidators$;
  }, $_GetDisplayValue$:function() {
    return this.$_GetContentElement$().val();
  }, $_GetAllValidators$:function() {
    if (!this.$_allValidators$) {
      var $allValidators$$ = [], $validatorsOption$$ = this.options.validators, $vOptions_valType_validator$$, $isValidatorInstance$$ = !0, $implicitValidatorMap_vType$$ = this.$_GetImplicitValidators$(), $implicitValidators_normalizedValidators$$ = [], $len$$5_vTypeStr$$, $i$$98_keys$$6$$;
      $i$$98_keys$$6$$ = Object.keys($implicitValidatorMap_vType$$);
      $len$$5_vTypeStr$$ = $i$$98_keys$$6$$.length;
      if (0 < $len$$5_vTypeStr$$) {
        for (var $idx$$1$$ = 0;$idx$$1$$ < $len$$5_vTypeStr$$;$idx$$1$$++) {
          $vOptions_valType_validator$$ = $i$$98_keys$$6$$[$idx$$1$$], $implicitValidators_normalizedValidators$$.push($implicitValidatorMap_vType$$[$vOptions_valType_validator$$]);
        }
        $allValidators$$ = $allValidators$$.concat($implicitValidators_normalizedValidators$$);
      }
      if ($validatorsOption$$) {
        $implicitValidators_normalizedValidators$$ = [];
        for ($i$$98_keys$$6$$ = 0;$i$$98_keys$$6$$ < $validatorsOption$$.length;$i$$98_keys$$6$$++) {
          $vOptions_valType_validator$$ = $validatorsOption$$[$i$$98_keys$$6$$], "object" === typeof $vOptions_valType_validator$$ ? ($vOptions_valType_validator$$.validate && "function" === typeof $vOptions_valType_validator$$.validate || ($isValidatorInstance$$ = !1), $isValidatorInstance$$ || ($len$$5_vTypeStr$$ = $vOptions_valType_validator$$.type) && "string" === typeof $len$$5_vTypeStr$$ && (($implicitValidatorMap_vType$$ = $oj$$4$$.$Validation$.$validatorFactory$($len$$5_vTypeStr$$)) ? ($vOptions_valType_validator$$ = 
          $oj$$4$$.$CollectionUtils$.$copyInto$({}, $vOptions_valType_validator$$.options) || {}, $vOptions_valType_validator$$.converter = $vOptions_valType_validator$$.converter || this.$_GetConverter$(), $vOptions_valType_validator$$.label = $vOptions_valType_validator$$.label || this.$_getLabelText$(), $vOptions_valType_validator$$ = $implicitValidatorMap_vType$$.createValidator($vOptions_valType_validator$$)) : $oj$$4$$.$Logger$.error("Unable to locate a validatorFactory for the requested type: " + 
          $len$$5_vTypeStr$$)), $implicitValidators_normalizedValidators$$.push($vOptions_valType_validator$$)) : $oj$$4$$.$Logger$.error("Unable to parse the validator provided:" + $vOptions_valType_validator$$);
        }
        $allValidators$$ = $allValidators$$.concat($implicitValidators_normalizedValidators$$);
      }
      this.$_allValidators$ = $allValidators$$;
    }
    return this.$_allValidators$ || [];
  }, $_ResetAllValidators$:function() {
    this.$_allValidators$ && (this.$_allValidators$.length = 0);
    this.$_allValidators$ = null;
    this.$_getComponentMessaging$().update(this.$_getMessagingContent$(this.$_MESSAGING_CONTENT_UPDATE_TYPE$.$VALIDATOR_HINTS$));
  }, $_ResetConverter$:function() {
    this.$_converter$ = null;
    this.$_getComponentMessaging$().update(this.$_getMessagingContent$(this.$_MESSAGING_CONTENT_UPDATE_TYPE$.$CONVERTER_HINT$));
  }, $_IsRequired$:function() {
    return this.options.required;
  }, $_HandleChangeEvent$:function($event$$49$$) {
    var $submittedValue$$ = this.$_GetDisplayValue$();
    this.$_SetValue$($submittedValue$$, $event$$49$$);
  }, $_SetRawValue$:function($val$$20$$, $event$$50$$) {
    var $flags$$11$$ = {};
    $flags$$11$$._context = {originalEvent:$event$$50$$, $writeback$:!0, $internalSet$:!0};
    this.options.rawValue !== $val$$20$$ && this.option("rawValue", $val$$20$$, $flags$$11$$);
  }, $_Refresh$:function($labelHelpIconWrapper_name$$72$$, $helpDef$$5_value$$82$$, $forceDisplayValueRefresh_helpSource$$2$$) {
    switch($labelHelpIconWrapper_name$$72$$) {
      case "converter":
        $helpDef$$5_value$$82$$ = this.options.value;
        this.$_refreshComponentDisplayValue$($helpDef$$5_value$$82$$, $forceDisplayValueRefresh_helpSource$$2$$);
        break;
      case "disabled":
        this.$_refreshTheming$("disabled", this.options.disabled);
        break;
      case "help":
        $helpDef$$5_value$$82$$ = this.options.help.definition;
        $forceDisplayValueRefresh_helpSource$$2$$ = this.options.help.source;
        $labelHelpIconWrapper_name$$72$$ = this.$_getAriaDescribedByIconWrapperId$();
        this.$$label$ && (this.$$label$._ojLabel("option", "describedById", $labelHelpIconWrapper_name$$72$$), this.$$label$._ojLabel("option", "help", {definition:$helpDef$$5_value$$82$$, source:$forceDisplayValueRefresh_helpSource$$2$$}));
        break;
      case "required":
        this.$_refreshTheming$("required", this.$_IsRequired$());
        this.$_RefreshAriaRequired$($helpDef$$5_value$$82$$);
        this.$$label$ && ($labelHelpIconWrapper_name$$72$$ = this.$_getAriaDescribedByIconWrapperId$(), this.$$label$._ojLabel("option", {describedById:$labelHelpIconWrapper_name$$72$$, ariaRequiredUnsupported:this.$_AriaRequiredUnsupported$()}), this.$$label$._ojLabel("option", "required", $helpDef$$5_value$$82$$));
        break;
      case "value":
        this.$_refreshComponentDisplayValue$($helpDef$$5_value$$82$$, $forceDisplayValueRefresh_helpSource$$2$$);
    }
  }, $_RefreshAriaRequired$:function($value$$83$$) {
    var $contentNode$$ = this.$_GetContentElement$();
    $value$$83$$ && $contentNode$$ ? $contentNode$$.attr("aria-required", $value$$83$$) : $contentNode$$.removeAttr("aria-required");
  }, $_AriaRequiredUnsupported$:function() {
    return!1;
  }, $_ResetComponentState$:function() {
    this.$$label$ && this.$$label$._ojLabel("refresh");
    this.$_converter$ = this.$_implicitReqValidator$ = null;
    this.$_ResetAllValidators$();
  }, $_SetDisplayValue$:function($displayValue$$) {
    var $contentElem$$ = this.$_GetContentElement$();
    $contentElem$$.val() !== $displayValue$$ && $contentElem$$.val($displayValue$$);
  }, $_SetDisabledDom$:function($node$$19$$) {
    "boolean" === typeof this.options.disabled && $node$$19$$.prop("disabled", this.options.disabled);
  }, $_SetPlaceholder$:function($value$$84$$) {
    this.$_GetContentElement$().attr("placeholder", $value$$84$$);
  }, $_SetPlaceholderOption$:function($value$$85$$) {
    this.options.placeholder = $value$$85$$;
  }, $_HasPlaceholderSet$:function() {
    return this.options.placeholder;
  }, $_ClearPlaceholder$:function() {
    this.$_SetPlaceholderOption$("");
    this.$_SetPlaceholder$("");
  }, $_SetValue$:function($newValue_parsed$$, $event$$51$$, $options$$130$$) {
    var $doValueChangeCheck$$ = $options$$130$$ && "boolean" === typeof $options$$130$$.$doValueChangeCheck$ ? $options$$130$$.$doValueChangeCheck$ : !0;
    if (void 0 === $newValue_parsed$$) {
      return $oj$$4$$.$Logger$.warn("Attempt to set a value of undefined"), !1;
    }
    if ($doValueChangeCheck$$ && $newValue_parsed$$ === this.$_getLastDisplayValue$()) {
      $oj$$4$$.$Logger$.$level$ > $oj$$4$$.$Logger$.$LEVEL_WARN$ && $oj$$4$$.$Logger$.info("Validation skipped and value option not updated as submitted value '" + $newValue_parsed$$.toString ? $newValue_parsed$$.toString() : $newValue_parsed$$ + " same as previous.");
    } else {
      if ($newValue_parsed$$ = this.$_Validate$($newValue_parsed$$, $event$$51$$, $options$$130$$), void 0 !== $newValue_parsed$$ && this.isValid()) {
        var $updateContext$$;
        $options$$130$$ && $options$$130$$._context && ($updateContext$$ = $options$$130$$._context);
        this.$_updateValueOption$($newValue_parsed$$, $event$$51$$, $options$$130$$ && $options$$130$$.$validationContext$, $updateContext$$);
        return!0;
      }
    }
    return!1;
  }, $_Validate$:function($newValue$$1$$, $event$$52$$, $doNotClearMessages$$1_options$$131$$) {
    var $mode$$11$$ = $doNotClearMessages$$1_options$$131$$ && $doNotClearMessages$$1_options$$131$$.$validationMode$ ? $doNotClearMessages$$1_options$$131$$.$validationMode$ : this.$_VALIDATION_MODE$.$FULL$, $context$$36$$ = $doNotClearMessages$$1_options$$131$$ && $doNotClearMessages$$1_options$$131$$.$validationContext$ ? $doNotClearMessages$$1_options$$131$$.$validationContext$ : this.$_VALIDATION_CONTEXT$.$USER_ACTION$;
    $doNotClearMessages$$1_options$$131$$ = $doNotClearMessages$$1_options$$131$$ && $doNotClearMessages$$1_options$$131$$.$doNotClearMessages$ || !1;
    if (void 0 === $newValue$$1$$) {
      $oj$$4$$.$Logger$.warn("Attempt to set a value of undefined");
    } else {
      if (this.$_CanSetValue$()) {
        $doNotClearMessages$$1_options$$131$$ || this.$_clearAllMessages$($event$$52$$);
        this.$_setLastSubmittedValue$($newValue$$1$$);
        try {
          return this.$_runNormalValidation$($newValue$$1$$, $mode$$11$$, $context$$36$$, $event$$52$$);
        } catch ($e$$32$$) {
        }
      } else {
        $oj$$4$$.$Logger$.$level$ > $oj$$4$$.$Logger$.$LEVEL_WARN$ && $oj$$4$$.$Logger$.info("Validation skipped and value option not set as component state does not  allow setting value. For example if the component is readonly or disabled.");
      }
    }
  }, $_CompareOptionValues$:function($option$$9$$, $value1$$7$$, $value2$$7$$) {
    return "value" === $option$$9$$ ? $oj$$4$$.$Object$.$compareValues$($value1$$7$$, $value2$$7$$) : 0 === $option$$9$$.indexOf("messages") ? this.$_messagesEquals$($value1$$7$$, $value2$$7$$) : this._superApply(arguments);
  }, _GetDefaultStyleClass:function() {
    $oj$$4$$.$Assert$.$failedInAbstractFunction$();
    return "";
  }, $_MESSAGING_CONTENT_UPDATE_TYPE$:{$ALL$:1, $VALIDITY_STATE$:2, $CONVERTER_HINT$:3, $VALIDATOR_HINTS$:4, $TITLE$:5}, $_OPTION_TO_CSS_MAPPING$:{disabled:"oj-disabled", required:"oj-required"}, $_clearAllMessages$:function($event$$53$$, $doNotSetOption$$) {
    $doNotSetOption$$ ? (this.options.messagesHidden = [], this.options.messagesShown = [], this.options.messagesCustom = []) : (this.$_clearMessages$("messagesHidden", $event$$53$$), this.$_clearMessages$("messagesShown", $event$$53$$), this.$_clearMessages$("messagesCustom", $event$$53$$));
  }, $_clearComponentMessages$:function() {
    var $shownMsgs$$ = this.options.messagesShown, $beforeLen$$ = $shownMsgs$$.length, $msg$$5$$;
    this.$_clearMessages$("messagesHidden");
    for (var $i$$99$$ = $beforeLen$$ - 1;0 <= $i$$99$$;$i$$99$$--) {
      $msg$$5$$ = $shownMsgs$$[$i$$99$$], $msg$$5$$ instanceof $oj$$4$$.$ComponentMessage$ && $shownMsgs$$.splice($i$$99$$, 1);
    }
    $shownMsgs$$.length !== $beforeLen$$ && this.$_setMessagesOption$("messagesShown", $shownMsgs$$, null, !0);
  }, $_setMessagesOption$:function($key$$36$$, $value$$86$$, $event$$54$$, $changed$$1$$) {
    var $flags$$12$$ = {}, $bothEmpty$$ = 0 === $value$$86$$.length && 0 === this.options[$key$$36$$].length;
    if ($changed$$1$$ || !$bothEmpty$$) {
      $flags$$12$$._context = {originalEvent:$event$$54$$, $writeback$:!0, $internalSet$:!0}, $flags$$12$$.changed = $changed$$1$$ || !$bothEmpty$$, this.$_resetValid$(), this.option($key$$36$$, $value$$86$$, $flags$$12$$), this.$_updateMessagingContent$();
    }
  }, $_clearMessages$:function($option$$10$$, $event$$55$$) {
    this.$_setMessagesOption$($option$$10$$, [], $event$$55$$);
  }, $_cloneMessagesBeforeSet$:function($value$$87$$) {
    var $msg$$6_val$$21$$, $msgsClone$$ = [], $i$$100$$;
    if ($value$$87$$ && 0 < $value$$87$$.length) {
      for ($i$$100$$ = 0;$i$$100$$ < $value$$87$$.length;$i$$100$$++) {
        $msg$$6_val$$21$$ = $value$$87$$[$i$$100$$], $msg$$6_val$$21$$ instanceof $oj$$4$$.$Message$ ? $msgsClone$$.push($msg$$6_val$$21$$.clone()) : ($msg$$6_val$$21$$ = new $oj$$4$$.$Message$($msg$$6_val$$21$$.summary, $msg$$6_val$$21$$.detail, $msg$$6_val$$21$$.severity), $msg$$6_val$$21$$ = Object.freeze ? Object.freeze($msg$$6_val$$21$$) : $msg$$6_val$$21$$, $msgsClone$$.push($msg$$6_val$$21$$));
      }
    }
    return $msgsClone$$;
  }, $_createOjLabel$:function() {
    if (this.$$label$ = this.$_GetLabelElement$()) {
      var $helpDef$$6$$ = this.options.help.definition, $helpSource$$3$$ = this.options.help.source, $ariaRequiredUnsupported$$1$$ = this.$_AriaRequiredUnsupported$(), $labelHelpIconWrapper$$1$$ = this.$_addAriaDescribedByAndReturnId$($helpSource$$3$$, $helpDef$$6$$, this.options.required, $ariaRequiredUnsupported$$1$$);
      this.$$label$._ojLabel({rootAttributes:{"class":this._GetDefaultStyleClass() + "-label"}, describedById:$labelHelpIconWrapper$$1$$, required:this.options.required, ariaRequiredUnsupported:$ariaRequiredUnsupported$$1$$, help:{definition:$helpDef$$6$$, source:$helpSource$$3$$}});
    }
  }, $_doRefresh$:function($fullRefresh$$) {
    var $runFullValidation$$2$$ = !1;
    $fullRefresh$$ ? (this.$_ResetComponentState$(), this.$_initComponentMessaging$(), this.$_hasInvalidMessagesShowing$() && ($runFullValidation$$2$$ = !0), this.$_clearComponentMessages$(), $runFullValidation$$2$$ ? this.$_updateValue$($_sRefreshMethodOptions$$) : (this.$_IsRequired$() && this.$_runDeferredValidation$($_sRefreshMethodOptions$$.$validationContext$), this.$_Refresh$("value", this.options.value, !0))) : (this.$_Refresh$("value", this.options.value), this.$_Refresh$("required", this.options.required));
    this.$_Refresh$("disabled", this.options.disabled);
  }, $_getLastModelValue$:function() {
    return this.$_oj_lastModelValue$;
  }, $_getLastDisplayValue$:function() {
    void 0 === this.$_oj_lastElementValue$ && (this.$_oj_lastElementValue$ = "");
    return this.$_oj_lastElementValue$;
  }, $_getAriaLabelledByElement$:function($ariaId_elem$$19$$) {
    $ariaId_elem$$19$$ = $ariaId_elem$$19$$.attr("aria-labelledby");
    return void 0 !== $ariaId_elem$$19$$ ? $$$$4$$("label[id\x3d'" + $ariaId_elem$$19$$ + "']") : null;
  }, $_getAriaDescribedByIconWrapperId$:function() {
    this.element.uniqueId();
    return this.element.prop("id") + "Icons";
  }, $_addAriaDescribedByAndReturnId$:function($helpSource$$4$$, $helpDef$$7$$, $required$$2$$, $ariaRequiredUnsupported$$2$$) {
    var $labelHelpIconWrapperId$$1$$ = this.$_getAriaDescribedByIconWrapperId$();
    ($helpSource$$4$$ || $helpDef$$7$$ || $required$$2$$ && $ariaRequiredUnsupported$$2$$) && this.$_addAriaDescribedBy$($labelHelpIconWrapperId$$1$$);
    return $labelHelpIconWrapperId$$1$$;
  }, $_addAriaDescribedBy$:function($ariaDescribedById$$) {
    this.$_GetContentElement$().each(function() {
      var $ariaDescBy$$ = $$$$4$$(this).attr("aria-describedby");
      $ariaDescBy$$ ? $$$$4$$(this).attr("aria-describedby", $ariaDescBy$$ + " " + $ariaDescribedById$$) : $$$$4$$(this).attr("aria-describedby", $ariaDescribedById$$);
    });
  }, $_getMessages$:function() {
    return this.options.messagesShown.concat(this.options.messagesHidden);
  }, $_getLabelText$:function() {
    if (this.$$label$) {
      return this.$$label$.text();
    }
  }, $_getValidityState$:function() {
    this.$_validityState$ || (this.$_validityState$ = new $oj$$4$$.$ComponentValidity$(this.isValid(), this.$_getMessages$()));
    return this.$_validityState$;
  }, $_hasInvalidMessages$:function() {
    return!$oj$$4$$.$Message$.isValid(this.$_getMessages$());
  }, $_hasInvalidMessagesShowing$:function() {
    return!this.isValid() && 0 < this.options.messagesShown.length;
  }, $_hasInvalidComponentMessagesShowing$:function() {
    for (var $shown$$ = this.options.messagesShown, $msg$$7$$, $compMsgs$$, $i$$101$$ = 0;$i$$101$$ < $shown$$.length;$i$$101$$++) {
      $msg$$7$$ = $shown$$[$i$$101$$], $msg$$7$$ instanceof $oj$$4$$.$ComponentMessage$ && $msg$$7$$.$_isMessageAddedByComponent$() && ($compMsgs$$ = $compMsgs$$ || [], $compMsgs$$.push($msg$$7$$));
    }
    return void 0 === $compMsgs$$ ? !1 : !$oj$$4$$.$Message$.isValid($compMsgs$$);
  }, $_initComponentMessaging$:function() {
    var $compMessaging$$ = this.$_getComponentMessaging$(), $messagingLauncher$$ = this._GetMessagingLauncherElement(), $messagingContent$$ = this.$_getMessagingContent$(this.$_MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$);
    this.$_customPlaceholderSet$ || this.$_ClearPlaceholder$();
    $compMessaging$$.$activate$($messagingLauncher$$, $messagingContent$$);
  }, $_messagesCustomOptionChanged$:function($flags$$13$$) {
    var $customMsgs$$ = this.options.messagesCustom, $shownMsgs$$1$$ = [], $msg$$8$$, $i$$102$$, $previousShown$$ = this.options.messagesShown, $context$$37$$ = $flags$$13$$ ? $flags$$13$$._context : null;
    for ($i$$102$$ = 0;$i$$102$$ < $previousShown$$.length;$i$$102$$++) {
      $msg$$8$$ = $previousShown$$[$i$$102$$], $msg$$8$$ instanceof $oj$$4$$.$ComponentMessage$ && $msg$$8$$.$_isMessageAddedByComponent$() && $shownMsgs$$1$$.push($msg$$8$$);
    }
    for ($i$$102$$ = 0;$i$$102$$ < $customMsgs$$.length;$i$$102$$++) {
      $shownMsgs$$1$$.push($customMsgs$$[$i$$102$$]);
    }
    this.$_setMessagesOption$("messagesShown", $shownMsgs$$1$$, $context$$37$$ ? $context$$37$$.originalEvent : null, $flags$$13$$ && $flags$$13$$.changed);
  }, $_placeholderOptionChanged$:function($flags$$14_refreshMessagingOptions$$) {
    $flags$$14_refreshMessagingOptions$$ = ($flags$$14_refreshMessagingOptions$$ && $flags$$14_refreshMessagingOptions$$._context || {}).$internalMessagingSet$ ? !1 : !0;
    this.$_SetPlaceholder$(this.options.placeholder);
    $flags$$14_refreshMessagingOptions$$ ? (this.$_customPlaceholderSet$ = !0, this.$_GetConverter$() && this.$_initComponentMessaging$()) : this.$_customPlaceholderSet$ = !1;
  }, $_setLastModelValue$:function($value$$89$$) {
    this.$_oj_lastModelValue$ = $value$$89$$;
  }, $_setLastSubmittedValue$:function($value$$90$$) {
    this.$_oj_lastElementValue$ = $value$$90$$;
  }, $_titleOptionChanged$:function() {
    this.$_getComponentMessaging$().update(this.$_getMessagingContent$(this.$_MESSAGING_CONTENT_UPDATE_TYPE$.$TITLE$));
  }, $_updateMessagesOption$:function($option$$11$$, $newMsgs$$, $event$$56$$) {
    var $len$$6$$, $i$$103$$, $msgs$$1$$;
    if ("object" === typeof $newMsgs$$ && Array.isArray($newMsgs$$)) {
      for ($msgs$$1$$ = this.options[$option$$11$$], $len$$6$$ = $newMsgs$$.length, $i$$103$$ = 0;$i$$103$$ < $len$$6$$;$i$$103$$++) {
        $msgs$$1$$.push($newMsgs$$[$i$$103$$]);
      }
    }
    this.$_setMessagesOption$($option$$11$$, $msgs$$1$$, $event$$56$$, !0);
  }, $_updateMessagingContent$:function() {
    this.$_getComponentMessaging$().update(this.$_getMessagingContent$());
  }, $_updateValueOption$:function($newValue$$2$$, $event$$57$$, $validationContext$$, $context$$39_updateContext$$1$$) {
    $context$$39_updateContext$$1$$ = $context$$39_updateContext$$1$$ || {};
    $event$$57$$ && ($context$$39_updateContext$$1$$.originalEvent = $event$$57$$);
    switch($validationContext$$) {
      case this.$_VALIDATION_CONTEXT$.$CONVERTER_OPTION_CHANGE$:
      ;
      case this.$_VALIDATION_CONTEXT$.$DISABLED_OPTION_CHANGE$:
      ;
      case this.$_VALIDATION_CONTEXT$.$READONLY_OPTION_CHANGE$:
      ;
      case this.$_VALIDATION_CONTEXT$.$REFRESH_METHOD$:
      ;
      case this.$_VALIDATION_CONTEXT$.$REQUIRED_OPTION_CHANGE$:
      ;
      case this.$_VALIDATION_CONTEXT$.$VALIDATE_METHOD$:
      ;
      case this.$_VALIDATION_CONTEXT$.$VALIDATORS_OPTION_CHANGE$:
        $context$$39_updateContext$$1$$.$writeback$ = !0, $context$$39_updateContext$$1$$.$doNotClearMessages$ = !0;
    }
    this.option({value:$newValue$$2$$}, {_context:$context$$39_updateContext$$1$$});
  }, $_resetValid$:function() {
    this.$_valid$ = void 0;
  }, $_getValid$:function() {
    var $msgs$$2$$ = this.$_getMessages$(), $valid$$5$$ = !0;
    $msgs$$2$$ && 0 !== $msgs$$2$$.length && ($valid$$5$$ = !this.$_hasInvalidMessages$());
    return $valid$$5$$;
  }, $_formatValue$:function($value$$91$$) {
    var $formattedValue$$ = $value$$91$$, $converter$$ = this.$_GetConverter$();
    $converter$$ && "object" === typeof $converter$$ && ($converter$$.format && "function" === typeof $converter$$.format ? $formattedValue$$ = $converter$$.format($value$$91$$) : $oj$$4$$.$Logger$.$level$ > $oj$$4$$.$Logger$.$LEVEL_WARN$ && $oj$$4$$.$Logger$.info("converter does not support the format method."));
    return $formattedValue$$;
  }, $_getComponentMessaging$:function() {
    this.$_componentMessaging$ || (this.$_componentMessaging$ = new $oj$$4$$.$ComponentMessaging$(this));
    return this.$_componentMessaging$;
  }, $_getHintsForAllValidators$:function($allValidators$$1$$) {
    var $vHint_validator$$1$$, $validatorHints$$ = [];
    $vHint_validator$$1$$ = "";
    var $i$$104$$;
    this.$_IsRequired$() && ($vHint_validator$$1$$ = this.$_getImplicitRequiredValidator$(), $vHint_validator$$1$$.getHint && "function" === typeof $vHint_validator$$1$$.getHint && ($vHint_validator$$1$$ = $vHint_validator$$1$$.getHint()) && $validatorHints$$.push($vHint_validator$$1$$));
    for ($i$$104$$ = 0;$i$$104$$ < $allValidators$$1$$.length;$i$$104$$++) {
      $vHint_validator$$1$$ = $allValidators$$1$$[$i$$104$$], "object" === typeof $vHint_validator$$1$$ && $vHint_validator$$1$$.getHint && "function" === typeof $vHint_validator$$1$$.getHint && ($vHint_validator$$1$$ = $vHint_validator$$1$$.getHint()) && $validatorHints$$.push($vHint_validator$$1$$);
    }
    return $validatorHints$$;
  }, $_getImplicitRequiredValidator$:function() {
    var $reqTrans_vf$$;
    $reqTrans_vf$$ = {};
    var $reqValOptions$$;
    null == this.$_implicitReqValidator$ && ($reqTrans_vf$$ = this.options.translations ? this.options.translations.required || {} : {}, $reqValOptions$$ = {hint:$reqTrans_vf$$.hint || null, label:this.$_getLabelText$(), messageSummary:$reqTrans_vf$$.messageSummary || null, messageDetail:$reqTrans_vf$$.messageDetail || null}, this.$_implicitReqValidator$ = ($reqTrans_vf$$ = $oj$$4$$.$Validation$.$validatorFactory$($oj$$4$$.$ValidatorFactory$.VALIDATOR_TYPE_REQUIRED)) ? $reqTrans_vf$$.createValidator($reqValOptions$$) : 
    null);
    return this.$_implicitReqValidator$;
  }, $_getMessagingContent$:function($updateType$$) {
    var $messagingContent$$1$$ = {}, $allValidators$$2_converter$$1$$ = this.$_GetConverter$(), $converterHint$$1$$ = "", $messages$$11_validatorHints$$1$$ = [];
    $updateType$$ = $updateType$$ || this.$_MESSAGING_CONTENT_UPDATE_TYPE$.$VALIDITY_STATE$;
    if ($updateType$$ === this.$_MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$ || $updateType$$ === this.$_MESSAGING_CONTENT_UPDATE_TYPE$.$VALIDITY_STATE$) {
      $messages$$11_validatorHints$$1$$ = this.$_getMessages$(), this.$_getValidityState$().update(this.isValid(), $messages$$11_validatorHints$$1$$), $messagingContent$$1$$.$validityState$ = this.$_getValidityState$();
    }
    if ($updateType$$ === this.$_MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$ || $updateType$$ === this.$_MESSAGING_CONTENT_UPDATE_TYPE$.$CONVERTER_HINT$) {
      $allValidators$$2_converter$$1$$ && "object" === typeof $allValidators$$2_converter$$1$$ && $allValidators$$2_converter$$1$$.getHint && "function" === typeof $allValidators$$2_converter$$1$$.getHint && ($converterHint$$1$$ = $allValidators$$2_converter$$1$$.getHint() || ""), $messagingContent$$1$$.$converterHint$ = $converterHint$$1$$;
    }
    if ($updateType$$ === this.$_MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$ || $updateType$$ === this.$_MESSAGING_CONTENT_UPDATE_TYPE$.$VALIDATOR_HINTS$) {
      $allValidators$$2_converter$$1$$ = this.$_GetAllValidators$(), $messages$$11_validatorHints$$1$$ = this.$_getHintsForAllValidators$($allValidators$$2_converter$$1$$) || [], $messagingContent$$1$$.$validatorHint$ = $messages$$11_validatorHints$$1$$;
    }
    if ($updateType$$ === this.$_MESSAGING_CONTENT_UPDATE_TYPE$.$ALL$ || $updateType$$ === this.$_MESSAGING_CONTENT_UPDATE_TYPE$.$TITLE$) {
      $messagingContent$$1$$.title = this.options.title || "";
    }
    return $messagingContent$$1$$;
  }, $_messagesEquals$:function($pm$$, $m$$10$$) {
    var $match$$ = -1, $pmo$$, $passed$$ = !0, $previousMsgs$$ = $$$$4$$.extend([], $pm$$), $msgs$$3$$ = $$$$4$$.extend([], $m$$10$$);
    if ($previousMsgs$$.length !== $msgs$$3$$.length) {
      return!1;
    }
    $$$$4$$.each($previousMsgs$$, function($i$$105$$, $pMsg$$) {
      $pMsg$$ instanceof $oj$$4$$.$Message$ ? $pmo$$ = $pMsg$$ : ($pmo$$ = new $oj$$4$$.$Message$($pMsg$$.summary, $pMsg$$.detail, $pMsg$$.severity), $pmo$$ = Object.freeze ? Object.freeze($pmo$$) : $pmo$$);
      $match$$ = -1;
      $$$$4$$.each($msgs$$3$$, function($j$$9$$, $msg$$9$$) {
        $pmo$$.$equals$($msg$$9$$) && ($match$$ = $j$$9$$);
      });
      -1 < $match$$ ? $msgs$$3$$.splice($match$$, 1) : $passed$$ = !1;
    });
    return $passed$$;
  }, $_parseValue$:function($submittedValue$$1$$) {
    var $converter$$2$$ = this.$_GetConverter$(), $parsedValue$$ = $submittedValue$$1$$;
    $converter$$2$$ && "object" === typeof $converter$$2$$ && ($converter$$2$$.parse && "function" === typeof $converter$$2$$.parse ? $parsedValue$$ = $converter$$2$$.parse($submittedValue$$1$$) : $oj$$4$$.$Logger$.$level$ > $oj$$4$$.$Logger$.$LEVEL_WARN$ && $oj$$4$$.$Logger$.info("converter does not support the parse method."));
    return $parsedValue$$;
  }, $_addValidationError$:function($e$$33$$, $msgs$$4$$) {
    var $detail$$9_ojmessage$$, $summary$$6$$, $severity$$8$$;
    $e$$33$$ instanceof $oj$$4$$.$ConverterError$ || $e$$33$$ instanceof $oj$$4$$.$ValidatorError$ ? ($detail$$9_ojmessage$$ = $e$$33$$.$getMessage$(), $oj$$4$$.$Assert$.$assertPrototype$($detail$$9_ojmessage$$, $oj$$4$$.$Message$), $severity$$8$$ = $detail$$9_ojmessage$$.severity, $summary$$6$$ = $detail$$9_ojmessage$$.summary, $detail$$9_ojmessage$$ = $detail$$9_ojmessage$$.detail) : ($severity$$8$$ = $oj$$4$$.$Message$.$SEVERITY_LEVEL$.ERROR, $summary$$6$$ = $oj$$4$$.$Translations$.$getTranslatedString$("oj-message.error"), 
    $detail$$9_ojmessage$$ = $e$$33$$.message || $oj$$4$$.$Translations$.$getTranslatedString$("oj-converter.detail"));
    $msgs$$4$$.push({summary:$summary$$6$$, detail:$detail$$9_ojmessage$$, severity:$severity$$8$$});
  }, $_processValidationErrors$:function($e$$34_msg$$10$$, $context$$40_i$$106$$, $display$$) {
    var $options$$132$$ = {}, $componentMsgs$$ = [], $msgs$$5$$ = $e$$34_msg$$10$$.$_messages$ || [];
    $options$$132$$.context = $context$$40_i$$106$$ || 0;
    $options$$132$$.display = $display$$ || $oj$$4$$.$ComponentMessage$.$DISPLAY$.$SHOWN$;
    0 === $msgs$$5$$.length && this.$_addValidationError$($e$$34_msg$$10$$, $msgs$$5$$);
    for ($context$$40_i$$106$$ = 0;$context$$40_i$$106$$ < $msgs$$5$$.length;$context$$40_i$$106$$++) {
      $e$$34_msg$$10$$ = $msgs$$5$$[$context$$40_i$$106$$], $componentMsgs$$.push(this.$_createComponentMessage$($e$$34_msg$$10$$.summary, $e$$34_msg$$10$$.detail, $e$$34_msg$$10$$.severity, $options$$132$$));
    }
    return $componentMsgs$$ || null;
  }, $_createComponentMessage$:function($cMsg_summary$$7$$, $detail$$10$$, $severity$$9$$, $options$$133$$) {
    $cMsg_summary$$7$$ = new $oj$$4$$.$ComponentMessage$($cMsg_summary$$7$$, $detail$$10$$, $severity$$9$$, $options$$133$$);
    return $cMsg_summary$$7$$ = Object.seal ? Object.seal($cMsg_summary$$7$$) : $cMsg_summary$$7$$;
  }, $_refreshComponentDisplayValue$:function($value$$92$$, $fullRefresh$$1$$) {
    var $modelValue$$ = $value$$92$$ || this.options.value, $lastModelValue$$;
    $lastModelValue$$ = this.$_oj_lastModelValue$;
    ($fullRefresh$$1$$ || $modelValue$$ !== $lastModelValue$$) && this.$_updateElementDisplayValue$($modelValue$$);
  }, $_refreshTheming$:function($option$$12$$, $value$$93$$) {
    -1 !== Object.keys(this.$_OPTION_TO_CSS_MAPPING$).indexOf($option$$12$$) && this.widget().toggleClass(this.$_OPTION_TO_CSS_MAPPING$[$option$$12$$], !!$value$$93$$);
  }, $_runDeferredValidation$:function($context$$41_newMsgs$$1$$) {
    if (this.$_CanSetValue$()) {
      try {
        this.$_validateValue$(this.options.value, this.$_VALIDATION_MODE$.$REQUIRED_VALIDATOR_ONLY$);
      } catch ($ve$$) {
        ($context$$41_newMsgs$$1$$ = this.$_processValidationErrors$($ve$$, $context$$41_newMsgs$$1$$, $oj$$4$$.$ComponentMessage$.$DISPLAY$.$HIDDEN$)) && this.$_updateMessagesOption$("messagesHidden", $context$$41_newMsgs$$1$$);
      }
    } else {
      $oj$$4$$.$Logger$.$level$ > $oj$$4$$.$Logger$.$LEVEL_WARN$ && $oj$$4$$.$Logger$.info("Deferred validation skipped as component is readonly or disabled.");
    }
  }, $_runNormalValidation$:function($newMsgs$$2_value$$94$$, $mode$$12$$, $context$$42$$, $event$$58$$) {
    var $newValue$$4$$ = $newMsgs$$2_value$$94$$;
    try {
      $mode$$12$$ === this.$_VALIDATION_MODE$.$FULL$ && ($newValue$$4$$ = this.$_parseValue$($newMsgs$$2_value$$94$$)), this.$_validateValue$($newValue$$4$$, $mode$$12$$ === this.$_VALIDATION_MODE$.$REQUIRED_VALIDATOR_ONLY$);
    } catch ($ve$$1$$) {
      throw $newMsgs$$2_value$$94$$ = this.$_processValidationErrors$($ve$$1$$, $context$$42$$), this.$_updateMessagesOption$("messagesShown", $newMsgs$$2_value$$94$$, $event$$58$$), $ve$$1$$;
    }
    return $newValue$$4$$;
  }, $_runMixedValidationAfterSetOption$:function($validationOptions$$1$$) {
    var $runDeferredValidation$$ = !0;
    this.$_hasInvalidMessagesShowing$() && ($runDeferredValidation$$ = !1);
    this.$_clearComponentMessages$();
    $runDeferredValidation$$ ? this.$_IsRequired$() && this.$_runDeferredValidation$($validationOptions$$1$$.$validationContext$) : this.$_updateValue$($validationOptions$$1$$);
  }, $_updateElementDisplayValue$:function($modelValue$$1$$, $event$$59$$) {
    var $actualDisplayValue_displayValue$$1$$, $newMsgs$$3$$;
    this.$_setLastModelValue$($modelValue$$1$$);
    $actualDisplayValue_displayValue$$1$$ = $modelValue$$1$$;
    try {
      $actualDisplayValue_displayValue$$1$$ = this.$_formatValue$($modelValue$$1$$);
    } catch ($e$$35$$) {
      $newMsgs$$3$$ = this.$_processValidationErrors$($e$$35$$), this.$_updateMessagesOption$("messagesShown", $newMsgs$$3$$, $event$$59$$);
    }
    this.$_SetDisplayValue$($actualDisplayValue_displayValue$$1$$);
    $actualDisplayValue_displayValue$$1$$ = this.$_GetDisplayValue$();
    this.$_setLastSubmittedValue$($actualDisplayValue_displayValue$$1$$);
    this.$_SetRawValue$($actualDisplayValue_displayValue$$1$$, null);
  }, $_updateValue$:function($options$$134$$) {
    var $newValue$$5$$;
    $newValue$$5$$ = this.$_Validate$(this.$_GetDisplayValue$(), null, $options$$134$$);
    void 0 === $newValue$$5$$ || !this.isValid() && this.$_hasInvalidComponentMessagesShowing$() || this.$_updateValueOption$($newValue$$5$$, null, $options$$134$$.$validationContext$);
  }, $_validateValue$:function($value$$95$$, $requiredOnly$$) {
    var $allValidators$$3_ve$$2$$ = this.$_GetAllValidators$(), $validator$$2$$, $i$$107$$, $valMsgs$$ = [];
    if (this.$_IsRequired$()) {
      $validator$$2$$ = this.$_getImplicitRequiredValidator$();
      try {
        $validator$$2$$.validate($oj$$4$$.$StringUtils$.trim($value$$95$$));
      } catch ($e$$36$$) {
        this.$_addValidationError$($e$$36$$, $valMsgs$$);
      }
    }
    if (!$requiredOnly$$) {
      for ($i$$107$$ = 0;$i$$107$$ < $allValidators$$3_ve$$2$$.length;$i$$107$$++) {
        if ($validator$$2$$ = $allValidators$$3_ve$$2$$[$i$$107$$], "object" === typeof $validator$$2$$) {
          if ($validator$$2$$.validate && "function" === typeof $validator$$2$$.validate) {
            try {
              $validator$$2$$.validate($value$$95$$);
            } catch ($e$$37$$) {
              this.$_addValidationError$($e$$37$$, $valMsgs$$);
            }
          } else {
            $oj$$4$$.$Logger$.$level$ > $oj$$4$$.$Logger$.$LEVEL_WARN$ && $oj$$4$$.$Logger$.info("validator does not support the validate method.");
          }
        }
      }
    }
    if (0 < $valMsgs$$.length) {
      throw $allValidators$$3_ve$$2$$ = Error(), $allValidators$$3_ve$$2$$.$_messages$ = $valMsgs$$, $allValidators$$3_ve$$2$$;
    }
  }}, !0);
  $oj$$4$$.Components.$setDefaultOptions$({editableValue:{displayOptions:{messages:["inline"], converterHint:["placeholder", "notewindow"], validatorHint:["notewindow"], title:["notewindow"]}}});
  $oj$$4$$.$InlineMessagingStrategy$ = function $$oj$$4$$$$InlineMessagingStrategy$$($displayOptions$$6$$) {
    this.Init($displayOptions$$6$$);
  };
  $oj$$4$$.$ComponentMessaging$.$registerMessagingStrategy$($oj$$4$$.$ComponentMessaging$.$_DISPLAY_TYPE$.$INLINE$, $oj$$4$$.$InlineMessagingStrategy$);
  $oj$$4$$.$Object$.$createSubclass$($oj$$4$$.$InlineMessagingStrategy$, $oj$$4$$.$MessagingStrategy$, "oj.InlineMessagingStrategy");
  $oj$$4$$.$InlineMessagingStrategy$.prototype.$reactivate$ = function $$oj$$4$$$$InlineMessagingStrategy$$$$reactivate$$($newDisplayOptions$$3$$) {
    $oj$$4$$.$InlineMessagingStrategy$.$superclass$.$reactivate$.call(this, $newDisplayOptions$$3$$);
    this.$_refreshInlineMessage$();
  };
  $oj$$4$$.$InlineMessagingStrategy$.prototype.$shouldUpdate$ = function $$oj$$4$$$$InlineMessagingStrategy$$$$shouldUpdate$$($content$$13$$) {
    return $content$$13$$ && void 0 !== $content$$13$$.$validityState$ ? !0 : !1;
  };
  $oj$$4$$.$InlineMessagingStrategy$.prototype.update = function $$oj$$4$$$$InlineMessagingStrategy$$$update$() {
    $oj$$4$$.$InlineMessagingStrategy$.$superclass$.update.call(this);
    this.$_refreshInlineMessage$();
  };
  $oj$$4$$.$InlineMessagingStrategy$.prototype.$deactivate$ = function $$oj$$4$$$$InlineMessagingStrategy$$$$deactivate$$() {
    this.$_removeMessagingContentRootDom$();
    $oj$$4$$.$InlineMessagingStrategy$.$superclass$.$deactivate$.call(this);
  };
  $oj$$4$$.$InlineMessagingStrategy$.prototype.$_refreshInlineMessage$ = function $$oj$$4$$$$InlineMessagingStrategy$$$$_refreshInlineMessage$$() {
    var $domNode$$2_widget$$3$$, $contentToShow$$1$$;
    $domNode$$2_widget$$3$$ = this.$GetComponent$().widget();
    ($contentToShow$$1$$ = this.$_buildInlineHtml$()) && null == this.$$messagingContentRoot$ && (this.$$messagingContentRoot$ = $$$$4$$("\x3cdiv class\x3d'oj-messaging-inline-container'\x3e\x3c/div\x3e"), $domNode$$2_widget$$3$$.append(this.$$messagingContentRoot$));
    null != this.$$messagingContentRoot$ && ($contentToShow$$1$$ ? ($domNode$$2_widget$$3$$ = this.$$messagingContentRoot$[0], $domNode$$2_widget$$3$$.innerHTML = $contentToShow$$1$$, this.$_addAriaDescribedBy$(this.$$messagingContentRoot$)) : this.$_removeMessagingContentRootDom$());
  };
  $oj$$4$$.$InlineMessagingStrategy$.prototype.$_removeMessagingContentRootDom$ = function $$oj$$4$$$$InlineMessagingStrategy$$$$_removeMessagingContentRootDom$$() {
    null != this.$$messagingContentRoot$ && (this.$_removeAriaDescribedBy$(this.$$messagingContentRoot$), this.$$messagingContentRoot$.remove(), delete this.$$messagingContentRoot$);
  };
  $oj$$4$$.$InlineMessagingStrategy$.prototype.$_addAriaDescribedBy$ = function $$oj$$4$$$$InlineMessagingStrategy$$$$_addAriaDescribedBy$$($messagingRoot_messagingRootId$$) {
    var $launcher$$5$$ = this.$GetLauncher$();
    $oj$$4$$.$Assert$.$assertPrototype$($launcher$$5$$, jQuery);
    $oj$$4$$.$Assert$.$assertPrototype$($messagingRoot_messagingRootId$$, jQuery);
    $messagingRoot_messagingRootId$$ = $messagingRoot_messagingRootId$$.uniqueId().attr("id");
    var $describedby_tokens$$1$$ = $launcher$$5$$.attr("aria-describedby"), $describedby_tokens$$1$$ = $describedby_tokens$$1$$ ? $describedby_tokens$$1$$.split(/\s+/) : [];
    $describedby_tokens$$1$$.push($messagingRoot_messagingRootId$$);
    $describedby_tokens$$1$$ = $$$$4$$.trim($describedby_tokens$$1$$.join(" "));
    $launcher$$5$$.attr("aria-describedby", $describedby_tokens$$1$$);
  };
  $oj$$4$$.$InlineMessagingStrategy$.prototype.$_removeAriaDescribedBy$ = function $$oj$$4$$$$InlineMessagingStrategy$$$$_removeAriaDescribedBy$$($index$$87_messagingRoot$$1_messagingRootId$$1$$) {
    var $launcher$$6$$ = this.$GetLauncher$();
    $oj$$4$$.$Assert$.$assertPrototype$($launcher$$6$$, jQuery);
    $oj$$4$$.$Assert$.$assertPrototype$($index$$87_messagingRoot$$1_messagingRootId$$1$$, jQuery);
    $index$$87_messagingRoot$$1_messagingRootId$$1$$ = $index$$87_messagingRoot$$1_messagingRootId$$1$$.attr("id");
    var $describedby$$1_tokens$$2$$ = $launcher$$6$$.attr("aria-describedby"), $describedby$$1_tokens$$2$$ = $describedby$$1_tokens$$2$$ ? $describedby$$1_tokens$$2$$.split(/\s+/) : [];
    $index$$87_messagingRoot$$1_messagingRootId$$1$$ = $$$$4$$.inArray($index$$87_messagingRoot$$1_messagingRootId$$1$$, $describedby$$1_tokens$$2$$);
    -1 !== $index$$87_messagingRoot$$1_messagingRootId$$1$$ && $describedby$$1_tokens$$2$$.splice($index$$87_messagingRoot$$1_messagingRootId$$1$$, 1);
    ($describedby$$1_tokens$$2$$ = $$$$4$$.trim($describedby$$1_tokens$$2$$.join(" "))) ? $launcher$$6$$.attr("aria-describedby", $describedby$$1_tokens$$2$$) : $launcher$$6$$.removeAttr("aria-describedby");
  };
  $oj$$4$$.$InlineMessagingStrategy$.prototype.$_buildInlineHtml$ = function $$oj$$4$$$$InlineMessagingStrategy$$$$_buildInlineHtml$$() {
    var $document$$9$$ = this.$GetComponent$().document[0];
    return this.$ShowMessages$() ? this.$_buildMessagesHtml$($document$$9$$) : "";
  };
  $oj$$4$$.$InlineMessagingStrategy$.prototype.$_buildMessagesHtml$ = function $$oj$$4$$$$InlineMessagingStrategy$$$$_buildMessagesHtml$$($document$$10$$) {
    var $content$$14_messages$$12$$;
    $content$$14_messages$$12$$ = "";
    var $maxSeverity$$4$$ = this.$GetMaxSeverity$();
    this.$HasMessages$() && ($content$$14_messages$$12$$ = this.$GetMessages$(), $content$$14_messages$$12$$ = $oj$$4$$.$PopupMessagingStrategyUtils$.$buildMessagesHtml$($document$$10$$, $content$$14_messages$$12$$, $maxSeverity$$4$$, !0));
    return $content$$14_messages$$12$$;
  };
});

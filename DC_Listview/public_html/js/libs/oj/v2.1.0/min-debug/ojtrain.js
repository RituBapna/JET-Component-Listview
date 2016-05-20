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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$25$$, $$$$23$$) {
  (function() {
    $oj$$25$$.$__registerWidget$("oj.ojTrain", $$$$23$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{steps:[], selected:"", optionChange:null, beforeDeselect:null, deselect:null, beforeSelect:null, select:null}, $_stepNum$:0, $_stepArray$:null, _ComponentCreate:function() {
      this._super();
      this.$_setupTrain$();
    }, $_setupTrain$:function() {
      var $i$$361_options$$280$$ = this.options, $stepTag_steps$$ = $i$$361_options$$280$$.steps;
      this.$_stepNum$ = $stepTag_steps$$.length;
      this.$_wrapper$ = $$$$23$$("\x3cdiv class\x3d'oj-train-wrapper'\x3e\x3c/div\x3e");
      this.$_wrapper$.appendTo(this.element);
      this.$_connectorWrapper$ = $$$$23$$("\x3cdiv class\x3d'oj-train-connector-wrapper'\x3e\x3c/div\x3e");
      this.$_connectorWrapper$.appendTo(this.$_wrapper$);
      var $styleClass$$10$$ = this.element.attr("class");
      (this.$_stretch$ = null != $styleClass$$10$$ && 0 <= $styleClass$$10$$.indexOf("oj-train-stretch")) && this.$_connectorWrapper$.css("padding", "0 " + 100 / (2 * this.$_stepNum$) + "%");
      this.$_connector$ = $$$$23$$("\x3cdiv class\x3d'oj-train-connector'\x3e\x3c/div\x3e");
      this.$_connector$.appendTo(this.$_connectorWrapper$);
      this.$_stepList$ = $$$$23$$("\x3cul\x3e");
      this.$_stepList$.addClass("oj-train-step-list");
      this.$_connectorFill$ = $$$$23$$("\x3cdiv class\x3d'oj-train-connector-fill'\x3e\x3c/div\x3e");
      this.$_connectorFill$.appendTo(this.$_connectorWrapper$);
      this.$_setupArray$();
      this.$_selectedIndex$ = this.$_getStepIndex$($i$$361_options$$280$$.selected);
      -1 === this.$_selectedIndex$ && $stepTag_steps$$[0] && $stepTag_steps$$[0].id && (this.$_selectedIndex$ = 0, $i$$361_options$$280$$.selected = $stepTag_steps$$[0].id);
      for ($i$$361_options$$280$$ = 0;$i$$361_options$$280$$ < this.$_stepNum$;$i$$361_options$$280$$++) {
        $stepTag_steps$$ = $$$$23$$("\x3cli\x3e").addClass("oj-train-step-list-item").attr({id:this.$_stepArray$[$i$$361_options$$280$$][1]}), $stepTag_steps$$.appendTo(this.$_stepList$), this.$_drawLabel$($i$$361_options$$280$$), this.$_drawStepFill$($i$$361_options$$280$$), this.$_drawButton$($i$$361_options$$280$$), this.$_drawMessageType$($i$$361_options$$280$$), this.$_stretch$ && $stepTag_steps$$.css("width", 100 / this.$_stepNum$ + "%");
      }
      this.$_connectorFill$.css({width:(this.$_stepNum$ - 1 === this.$_selectedIndex$ ? 100 : 100 / (2 * (this.$_stepNum$ - 1)) + this.$_selectedIndex$ / (this.$_stepNum$ - 1) * 100) + "%"});
      this.$_stepList$.appendTo(this.$_wrapper$);
      this.element.addClass("oj-train");
    }, $_setupArray$:function() {
      var $options$$281$$ = this.options;
      this.$_stepArray$ = [];
      for (var $i$$362$$ = 0;$i$$362$$ < this.$_stepNum$;$i$$362$$++) {
        var $step$$ = $options$$281$$.steps[$i$$362$$];
        this.$_stepArray$[$i$$362$$] = Array(5);
        this.$_stepArray$[$i$$362$$][0] = $step$$.label ? $step$$.label : null;
        this.$_stepArray$[$i$$362$$][1] = $step$$.id ? $step$$.id : null;
        this.$_stepArray$[$i$$362$$][2] = $step$$.disabled ? !0 : !1;
        this.$_stepArray$[$i$$362$$][3] = $step$$.visited ? !0 : !1;
        this.$_stepArray$[$i$$362$$][4] = $step$$.messageType ? $step$$.messageType : null;
      }
    }, $_drawButton$:function($index$$221$$) {
      var $button$$1$$ = $$$$23$$("\x3cdiv/\x3e").addClass("oj-train-button"), $scrnRead$$ = $$$$23$$("\x3cspan/\x3e"), $self$$154$$ = this, $desc$$1$$ = "";
      if (this.$_stepArray$[$index$$221$$]) {
        var $stepBackground_visited$$ = this.$_stepArray$[$index$$221$$][3], $disabled$$8$$ = this.$_stepArray$[$index$$221$$][2];
        this.$_selectedIndex$ === $index$$221$$ ? ($button$$1$$.addClass("oj-selected"), $desc$$1$$ = " current ") : $stepBackground_visited$$ && !$disabled$$8$$ ? ($button$$1$$.addClass("oj-visited"), $desc$$1$$ = " visited ") : $stepBackground_visited$$ || $disabled$$8$$ ? $button$$1$$.addClass("oj-disabled") : ($button$$1$$.addClass("oj-default"), $desc$$1$$ = " not visited ");
        this.$_stepArray$[$index$$221$$][2] || this.$_selectedIndex$ === $index$$221$$ || (this._hoverable($button$$1$$), $button$$1$$.on("click" + this.eventNamespace, function($event$$474$$) {
          $self$$154$$.$_fireOptionChange$("selected", $self$$154$$.options.selected, this.parentNode.parentNode.id, $event$$474$$);
          $self$$154$$.refresh();
        }));
        $stepBackground_visited$$ = this.$_stepList$.children().eq($index$$221$$).find(".oj-train-button-connector");
        1 <= $stepBackground_visited$$.length && $stepBackground_visited$$.children().remove();
        $stepBackground_visited$$.append($button$$1$$);
        $scrnRead$$.text($desc$$1$$);
        $scrnRead$$.addClass("oj-helper-hidden-accessible");
        this.$_stepList$.children().eq($index$$221$$).find("a").append($scrnRead$$);
      }
    }, $_drawMessageType$:function($index$$222$$) {
      var $icon$$9$$ = $$$$23$$("\x3cdiv/\x3e").addClass("oj-train-icon"), $scrnRead$$1$$ = $$$$23$$("\x3cspan/\x3e"), $desc$$2$$ = "", $self$$155$$ = this;
      if (this.$_stepArray$[$index$$222$$]) {
        var $messageType$$ = this.$_stepArray$[$index$$222$$][4];
        "confirmation" === $messageType$$ ? ($icon$$9$$.addClass("oj-confirmation"), $desc$$2$$ = " Confirmation ") : "info" === $messageType$$ ? ($icon$$9$$.addClass("oj-info"), $desc$$2$$ = " Info ") : "error" === $messageType$$ ? ($icon$$9$$.addClass("oj-error"), $desc$$2$$ = " Error ") : "fatal" === $messageType$$ ? ($icon$$9$$.addClass("oj-error"), $desc$$2$$ = " Error ") : "warning" === $messageType$$ && ($icon$$9$$.addClass("oj-warning"), $desc$$2$$ = " Warning ");
        var $button$$2$$ = this.$_stepList$.children().eq($index$$222$$).find(".oj-train-button");
        1 <= $button$$2$$.children().length && $button$$2$$.children().remove();
        this.$_stepArray$[$index$$222$$][2] || this.$_selectedIndex$ === $index$$222$$ || (this._hoverable($icon$$9$$), $icon$$9$$.on("click" + this.eventNamespace, function($event$$475$$) {
          $self$$155$$.$_fireOptionChange$("selected", $self$$155$$.options.selected, this.parentNode.parentNode.parentNode.id, $event$$475$$);
          $self$$155$$.refresh();
        }));
        null != $messageType$$ && ($scrnRead$$1$$.text($desc$$2$$), $scrnRead$$1$$.addClass("oj-helper-hidden-accessible"), this.$_stepList$.children().eq($index$$222$$).find("a").append($scrnRead$$1$$), $button$$2$$.append($icon$$9$$));
      }
    }, $_fireOptionChange$:function($eventData$$8_key$$148$$, $previousValue$$1_stepIndex$$, $value$$260$$, $originalEvent$$1$$) {
      $eventData$$8_key$$148$$ = {option:$eventData$$8_key$$148$$, fromStep:this.getStep($previousValue$$1_stepIndex$$), toStep:this.getStep($value$$260$$), optionMetadata:{writeback:$originalEvent$$1$$ ? "shouldWrite" : "shouldNotWrite"}};
      !1 !== this._trigger("beforeDeselect", $originalEvent$$1$$, $eventData$$8_key$$148$$) && !1 !== this._trigger("beforeSelect", $originalEvent$$1$$, $eventData$$8_key$$148$$) && ($previousValue$$1_stepIndex$$ = this.$_getStepIndex$($previousValue$$1_stepIndex$$), -1 !== $previousValue$$1_stepIndex$$ && (this.options.steps[$previousValue$$1_stepIndex$$].visited = !0), this._trigger("deselect", $originalEvent$$1$$, $eventData$$8_key$$148$$), this.option("selected", $value$$260$$, {_context:{originalEvent:$originalEvent$$1$$, 
      $internalSet$:!0}}), this._trigger("select", $originalEvent$$1$$, $eventData$$8_key$$148$$));
    }, $_drawStepFill$:function($index$$223_stepLi$$) {
      var $stepFill$$ = $$$$23$$("\x3cdiv/\x3e");
      $stepFill$$.addClass("oj-train-button-connector");
      this.$_stepArray$[$index$$223_stepLi$$] && ($index$$223_stepLi$$ <= this.$_selectedIndex$ && $stepFill$$.addClass("oj-train-fill"), $index$$223_stepLi$$ = this.$_stepList$.children().eq($index$$223_stepLi$$).children(), $stepFill$$.insertBefore($index$$223_stepLi$$));
    }, $_drawLabel$:function($index$$224$$) {
      var $self$$156$$ = this;
      if (this.$_stepArray$[$index$$224$$]) {
        var $labelWrapper$$ = $$$$23$$("\x3cdiv/\x3e").addClass("oj-train-label-wrapper"), $label$$17_stepLi$$1$$ = $$$$23$$("\x3ca\x3e");
        $label$$17_stepLi$$1$$.text(this.$_stepArray$[$index$$224$$][0]);
        var $disabled$$9$$ = this.$_stepArray$[$index$$224$$][2];
        $labelWrapper$$.append($label$$17_stepLi$$1$$);
        $label$$17_stepLi$$1$$.addClass("oj-train-label");
        $index$$224$$ === this.$_selectedIndex$ ? $label$$17_stepLi$$1$$.addClass("oj-selected") : this.$_stepArray$[$index$$224$$][3] && !$disabled$$9$$ ? $label$$17_stepLi$$1$$.addClass("oj-visited") : $disabled$$9$$ && $label$$17_stepLi$$1$$.addClass("oj-disabled");
        $disabled$$9$$ || ($label$$17_stepLi$$1$$.attr("href", "#"), this._hoverable($label$$17_stepLi$$1$$), $label$$17_stepLi$$1$$.on("click keydown" + this.eventNamespace, function($event$$476$$) {
          if ($event$$476$$.keyCode === $$$$23$$.ui.keyCode.ENTER || "click" === $event$$476$$.type) {
            $event$$476$$.preventDefault(), $self$$156$$.$_fireOptionChange$("selected", $self$$156$$.options.selected, this.parentNode.parentNode.id, $event$$476$$), $self$$156$$.refresh(), $event$$476$$.keyCode === $$$$23$$.ui.keyCode.ENTER && $self$$156$$.$_setFocus$(this.parentNode.parentNode.id);
          }
        }));
        $label$$17_stepLi$$1$$ = this.$_stepList$.children().eq($index$$224$$).children();
        1 <= $label$$17_stepLi$$1$$.length && $label$$17_stepLi$$1$$[0].remove();
        this.$_stepList$.children().eq($index$$224$$).append($labelWrapper$$);
      }
    }, $_getStepIndex$:function($id$$39$$) {
      for (var $i$$363$$ = 0;$i$$363$$ < this.$_stepNum$;$i$$363$$++) {
        if (this.$_stepArray$[$i$$363$$] && this.$_stepArray$[$i$$363$$][1] === $id$$39$$) {
          return $i$$363$$;
        }
      }
      return-1;
    }, getStep:function($id$$40$$) {
      for (var $i$$364$$ = 0;$i$$364$$ < this.$_stepNum$;$i$$364$$++) {
        if (this.$_stepArray$[$i$$364$$] && this.$_stepArray$[$i$$364$$][1] === $id$$40$$) {
          return jQuery.extend({}, this.options.steps[$i$$364$$]);
        }
      }
      return null;
    }, nextSelectableStep:function() {
      for (var $i$$365$$ = this.$_getStepIndex$(this.options.selected);$i$$365$$ < this.$_stepNum$;$i$$365$$++) {
        if ($i$$365$$ + 1 < this.$_stepNum$ && this.$_stepArray$[$i$$365$$ + 1] && !this.$_stepArray$[$i$$365$$ + 1][2]) {
          return this.$_stepArray$[$i$$365$$ + 1][1];
        }
      }
      return null;
    }, previousSelectableStep:function() {
      for (var $i$$366$$ = this.$_getStepIndex$(this.options.selected);0 <= $i$$366$$;$i$$366$$--) {
        if (this.$_stepArray$[$i$$366$$ - 1] && !this.$_stepArray$[$i$$366$$ - 1][2]) {
          return this.$_stepArray$[$i$$366$$ - 1][1];
        }
      }
      return null;
    }, setStep:function($stepProperties$$) {
      if ($stepProperties$$.id) {
        var $stepInfo$$ = this.getStep($stepProperties$$.id), $stepIndex$$1_stepObj$$ = this.$_getStepIndex$($stepProperties$$.id);
        -1 !== $stepIndex$$1_stepObj$$ && ($stepIndex$$1_stepObj$$ = this.options.steps[$stepIndex$$1_stepObj$$], $stepProperties$$.label && ($stepInfo$$[0] = $stepProperties$$.label, $stepIndex$$1_stepObj$$.label = $stepProperties$$.label), "boolean" === typeof $stepProperties$$.disabled && ($stepInfo$$[2] = $stepProperties$$.disabled, $stepIndex$$1_stepObj$$.disabled = $stepProperties$$.disabled), "boolean" === typeof $stepProperties$$.visited && ($stepInfo$$[3] = $stepProperties$$.visited, $stepIndex$$1_stepObj$$.visited = 
        $stepProperties$$.visited), $stepProperties$$.messageType && ($stepInfo$$[4] = $stepProperties$$.messageType, $stepIndex$$1_stepObj$$.messageType = $stepProperties$$.messageType));
        this.refresh();
      }
    }, _setOptions:function($options$$282$$) {
      this._super($options$$282$$);
      this.refresh();
    }, _setOption:function($key$$149$$, $value$$261$$, $flags$$35$$) {
      "selected" === $key$$149$$ && this.options.selected && this.$_stepArray$ && this.$_stepArray$[this.$_selectedIndex$] && this.$_fireOptionChange$("selected", this.$_stepArray$[this.$_selectedIndex$][1], $value$$261$$, null);
      this._super($key$$149$$, $value$$261$$, $flags$$35$$);
    }, refresh:function() {
      this._super();
      this._destroy();
      this.$_setupTrain$();
    }, _destroy:function() {
      this.$_stepList$.children().each(function() {
        $$$$23$$(this).remove();
      });
      this.element.removeClass("oj-train");
      this.element.find(".oj-train-wrapper").remove();
      this.element.find(".oj-train-connector-wrapper").remove();
      this.element.find(".oj-train-step-list").remove();
      this.element.find(".oj-train-step-list").remove();
      this._super();
    }, $_setFocus$:function($id$$41_index$$225$$) {
      $id$$41_index$$225$$ = this.$_getStepIndex$($id$$41_index$$225$$);
      for (var $i$$367$$ = 0;$i$$367$$ < this.$_stepNum$;$i$$367$$++) {
        if (this.$_stepArray$[($id$$41_index$$225$$ + $i$$367$$ + 1) % this.$_stepNum$] && !this.$_stepArray$[($id$$41_index$$225$$ + $i$$367$$ + 1) % this.$_stepNum$][2]) {
          this.$_stepList$.children().eq(($id$$41_index$$225$$ + $i$$367$$ + 1) % this.$_stepNum$).find(".oj-train-label").focus();
          break;
        }
      }
    }, getNodeBySubId:function($locator$$31$$) {
      if (null === $locator$$31$$) {
        return this.element ? this.element[0] : null;
      }
      var $index$$226$$ = $locator$$31$$.index;
      if ("number" !== typeof $index$$226$$ || 0 > $index$$226$$ || $index$$226$$ >= this.$_stepNum$) {
        return null;
      }
      switch($locator$$31$$.subId) {
        case "oj-train-step":
          return this.$_stepList$.children().eq($index$$226$$)[0];
        case "oj-train-button":
          return this.$_stepList$.children().eq($index$$226$$).find(".oj-train-button")[0];
        case "oj-train-button-connector":
          return this.$_stepList$.children().eq($index$$226$$).find(".oj-train-button-connector")[0];
        case "oj-train-connector":
          return this.$_connector$;
        case "oj-train-connector-fill":
          return this.$_connectorFill$;
        case "oj-train-icon":
          return this.$_stepList$.children().eq($index$$226$$).find(".oj-train-icon")[0];
        case "oj-train-label":
          return this.$_stepList$.children().eq($index$$226$$).find(".oj-train-label")[0];
      }
      return null;
    }, getSubIdByNode:function($node$$89$$) {
      for (var $stepNum$$ = this.$_stepArray$ ? this.$_stepArray$.length : 0, $stepIndex$$3$$ = 0;$stepIndex$$3$$ < $stepNum$$;$stepIndex$$3$$++) {
        var $stepLocator$$ = {subId:"oj-train-step", index:$stepIndex$$3$$};
        if ($node$$89$$ === this.getNodeBySubId($stepLocator$$)) {
          return $stepLocator$$;
        }
      }
      return null;
    }});
  })();
});

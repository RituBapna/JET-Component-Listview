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
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore"], function($oj$$56$$, $$$$51$$) {
  (function() {
    $oj$$56$$.$__registerWidget$("oj.ojProgressbar", $$$$51$$.oj.baseComponent, {version:"1.0.0", defaultElement:"\x3cdiv\x3e", widgetEventPrefix:"oj", options:{max:100, value:0, disabled:!1}, min:0, $_indeterminate$:!1, _ComponentCreate:function() {
      this._super();
      this.oldValue = this.options.value = this.$_constrainedValue$();
      this.element.addClass("oj-progressbar").attr({role:"progressbar", "aria-valuemin":this.min});
      this.$valueDiv$ = $$$$51$$("\x3cdiv class\x3d'oj-progressbar-value'\x3e\x3c/div\x3e").appendTo(this.element);
      this.$_refreshValue$();
    }, $_InitOptions$:function($originalDefaults$$18$$, $constructorOptions$$20$$) {
      var $dom_element$$172$$ = this.element;
      this._super($originalDefaults$$18$$, $constructorOptions$$20$$);
      void 0 === $constructorOptions$$20$$.max && ($dom_element$$172$$ = $dom_element$$172$$.attr("max") || void 0, null != $dom_element$$172$$ && (this.options.max = $dom_element$$172$$));
    }, $_constrainedValue$:function($newValue$$24$$) {
      void 0 === $newValue$$24$$ && ($newValue$$24$$ = this.options.value);
      this.$_indeterminate$ = -1 == $newValue$$24$$;
      "number" !== typeof $newValue$$24$$ && ($newValue$$24$$ = isNaN($newValue$$24$$) ? 0 : Number($newValue$$24$$));
      return this.$_indeterminate$ ? -1 : Math.min(this.options.max, Math.max(this.min, $newValue$$24$$));
    }, _setOptions:function($options$$330$$, $flags$$50$$) {
      var $value$$288$$ = $options$$330$$.value;
      delete $options$$330$$.value;
      this._super($options$$330$$, $flags$$50$$);
      this.options.disabled || (this.options.value = this.$_constrainedValue$($value$$288$$), this.$_refreshValue$());
    }, _setOption:function($key$$174$$, $value$$289$$, $flags$$51$$) {
      "max" === $key$$174$$ && ($value$$289$$ = Math.max(this.min, $value$$289$$));
      this._super($key$$174$$, $value$$289$$, $flags$$51$$);
    }, $_percentage$:function() {
      return this.$_indeterminate$ ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
    }, $_refreshValue$:function() {
      var $value$$290$$ = this.options.value, $percentage$$ = this.$_percentage$();
      this.$valueDiv$.toggle(this.$_indeterminate$ || $value$$290$$ > this.min).width($percentage$$.toFixed(0) + "%");
      this.element.toggleClass("oj-progressbar-indeterminate", this.$_indeterminate$);
      this.$_indeterminate$ ? (this.element.attr({"aria-valuetext":"In Progress"}), this.element.removeAttr("aria-valuenow"), this.element.removeAttr("aria-valuemin"), this.element.removeAttr("aria-valuemax"), this.$overlayDiv$ || (this.$overlayDiv$ = $$$$51$$("\x3cdiv class\x3d'oj-progressbar-overlay'\x3e\x3c/div\x3e").appendTo(this.$valueDiv$), this.$overlayDiv$.addClass("oj-indeterminate"))) : (this.element.attr({"aria-valuemax":this.options.max, "aria-valuenow":$value$$290$$}), this.$overlayDiv$ && 
      (this.$overlayDiv$.remove(), this.$overlayDiv$ = null));
    }, _destroy:function() {
      this.element.removeClass("oj-progressbar").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
      this.$valueDiv$.remove();
      this._super();
    }});
  })();
});

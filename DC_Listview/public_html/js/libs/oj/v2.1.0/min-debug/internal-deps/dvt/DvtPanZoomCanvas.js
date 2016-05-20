/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

var $JSCompiler_alias_VOID$$ = void 0, $JSCompiler_alias_TRUE$$ = !0, $JSCompiler_alias_NULL$$ = null, $JSCompiler_alias_FALSE$$ = !1;
function $JSCompiler_identityFn$$() {
  return function($JSCompiler_identityFn_value$$) {
    return $JSCompiler_identityFn_value$$
  }
}
function $JSCompiler_emptyFn$$() {
  return function() {
  }
}
function $JSCompiler_set$$($JSCompiler_set_name$$) {
  return function($JSCompiler_set_value$$) {
    this[$JSCompiler_set_name$$] = $JSCompiler_set_value$$
  }
}
function $JSCompiler_get$$($JSCompiler_get_name$$) {
  return function() {
    return this[$JSCompiler_get_name$$]
  }
}
function $JSCompiler_returnArg$$($JSCompiler_returnArg_value$$) {
  return function() {
    return $JSCompiler_returnArg_value$$
  }
}
var $JSCompiler_prototypeAlias$$;
function $goog$exportPath_$$($name$$56$$, $opt_object$$) {
  0 == $name$$56$$.indexOf("dvt.") && ($name$$56$$ = $name$$56$$.substring(4));
  var $parts$$ = $name$$56$$.split("."), $cur$$ = eval("dvt");
  !($parts$$[0] in $cur$$) && $cur$$.execScript && $cur$$.execScript("var " + $parts$$[0]);
  for(var $part$$;$parts$$.length && ($part$$ = $parts$$.shift());) {
    !$parts$$.length && $opt_object$$ !== $JSCompiler_alias_VOID$$ ? $cur$$[$part$$] = $opt_object$$ : $cur$$ = $cur$$[$part$$] ? $cur$$[$part$$] : $cur$$[$part$$] = {}
  }
}
Math.floor(2147483648 * Math.random()).toString(36);

(function() {
  function $DvtControlPanelEventManager$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    this.Init($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$)
  }
  function $DvtControlPanelEvent$$($DvtControlPanelEventManager$$) {
    this.Init($DvtControlPanelEvent$$.$TYPE$);
    this.$_subtype$ = $DvtControlPanelEventManager$$
  }
  function $DvtPanControl$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $styleMap$$51$$) {
    this.Init($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $styleMap$$51$$)
  }
  function $DropdownItemSprite$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $id$$151$$) {
    this.Init($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $id$$151$$)
  }
  dvt.$ComboBox$ = function $dvt$$ComboBox$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    this.Init($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$)
  };
  dvt.$Obj$.$createSubclass$(dvt.$ComboBox$, dvt.$Container$);
  dvt.$ComboBox$.$_HIDE_DROPDOWN_DELAY$ = 100;
  dvt.$ComboBox$.$_DROPDOWN_OUTOFFOCUS_CHECK$ = 100;
  dvt.$ComboBox$.prototype.Init = function $dvt$$ComboBox$$$Init$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    dvt.$ComboBox$.$superclass$.Init.call(this, $DvtControlPanelEventManager$$, $JSCompiler_alias_NULL$$, $DvtControlPanelEvent$$);
    this.$_styleMap$ = $DvtPanControl$$;
    this.$_itemButtonStates$ = [];
    this.$_items$ = [];
    this.$_tooltips$ = [];
    this.$_selectedIndex$ = 0;
    this.$_bRemoveDropdown$ = this.$_bStaticButtonStates$ = $JSCompiler_alias_FALSE$$;
    this.$_maxItemDim$ = new dvt.$Rectangle$(0, 0, 0, 0);
    this.$_itemDim$ = new dvt.$Rectangle$(0, 0, 0, 0);
    this.$_tooltipManager$ = $DvtControlPanelEventManager$$.$getTooltipManager$();
    this.$_isTouchDevice$ = dvt.$Agent$.$isTouchDevice$();
    this.$_button$ = this.$createButton$($DvtControlPanelEvent$$ + "_cl");
    this.$addChild$(this.$_button$);
    this.$_contentArea$ = new dvt.$Container$($DvtControlPanelEventManager$$);
    this.$_contentArea$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    this.$addChild$(this.$_contentArea$);
    this.$_hideDropdownTimer$ = new dvt.$Timer$($DvtControlPanelEventManager$$, dvt.$ComboBox$.$_HIDE_DROPDOWN_DELAY$, this.$HandleHideDropdownTimer$, this, 1);
    this.$_outOfFocusCheckTimer$ = new dvt.$Timer$($DvtControlPanelEventManager$$, dvt.$ComboBox$.$_DROPDOWN_OUTOFFOCUS_CHECK$, this.$HandleOutOfFocusCheckTimer$, this, 1);
    this.$_dropdownItemClickEvent$ = $JSCompiler_alias_FALSE$$
  };
  dvt.$ComboBox$.prototype.$setSelectedIndex$ = function $dvt$$ComboBox$$$$setSelectedIndex$$($DvtControlPanelEventManager$$) {
    this.$_selectedIndex$ = $DvtControlPanelEventManager$$;
    this.$_bStaticButtonStates$ || this.$UpdateContentArea$();
    this.$FireChangeEvent$($DvtControlPanelEventManager$$)
  };
  dvt.$ComboBox$.prototype.$createButton$ = function $dvt$$ComboBox$$$$createButton$$($DvtControlPanelEventManager$$) {
    $DvtControlPanelEventManager$$ = new dvt.$Button$(this.$getCtx$(), this.$createUpState$($DvtControlPanelEventManager$$), this.$createDownState$($DvtControlPanelEventManager$$), this.$createOverState$($DvtControlPanelEventManager$$), $JSCompiler_alias_NULL$$, $DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$.$setCallback$(this.$HandleExpandClick$, this);
    this.$_isTouchDevice$ || $DvtControlPanelEventManager$$.$addEvtListener$(dvt.$MouseEvent$.$MOUSEDOWN$, this.$HandleButtonDown$, $JSCompiler_alias_FALSE$$, this);
    $DvtControlPanelEventManager$$.$setToggleEnabled$();
    return $DvtControlPanelEventManager$$
  };
  dvt.$ComboBox$.prototype.$createUpState$ = function $dvt$$ComboBox$$$$createUpState$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = this.$getCtx$();
    $DvtControlPanelEventManager$$ = new dvt.$Rect$($DvtControlPanelEvent$$, 0, 0, this.$_itemDim$.$w$, this.$_itemDim$.$h$, $DvtControlPanelEventManager$$ + "_up");
    $DvtControlPanelEventManager$$.$setCornerRadius$(dvt.$ButtonLAFUtils$.$ROUND_RECT_ELLIPSE$);
    $DvtControlPanelEventManager$$.$setInvisibleFill$();
    $DvtControlPanelEventManager$$.$addChild$(dvt.$ComboBox$.$DrawArrow$($DvtControlPanelEvent$$, $DvtControlPanelEventManager$$.getWidth(), $DvtControlPanelEventManager$$.getHeight()));
    return $DvtControlPanelEventManager$$
  };
  dvt.$ComboBox$.prototype.$createOverState$ = function $dvt$$ComboBox$$$$createOverState$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = this.$getCtx$();
    $DvtControlPanelEventManager$$ = new dvt.$Rect$($DvtControlPanelEvent$$, 0, 0, this.$_itemDim$.$w$, this.$_itemDim$.$h$, $DvtControlPanelEventManager$$ + "_up");
    $DvtControlPanelEventManager$$.$setCornerRadius$(dvt.$ButtonLAFUtils$.$ROUND_RECT_ELLIPSE$);
    $DvtControlPanelEventManager$$.$setSolidStroke$(dvt.$ButtonLAFUtils$.$BORDER_COLOR$);
    $DvtControlPanelEventManager$$.$setFill$(new dvt.$LinearGradientFill$(0, [dvt.$ButtonLAFUtils$.$GRADIENT_DARK$, dvt.$ButtonLAFUtils$.$GRADIENT_LIGHT$]));
    $DvtControlPanelEventManager$$.$addChild$(dvt.$ComboBox$.$DrawArrow$($DvtControlPanelEvent$$, $DvtControlPanelEventManager$$.getWidth(), $DvtControlPanelEventManager$$.getHeight()));
    return $DvtControlPanelEventManager$$
  };
  dvt.$ComboBox$.prototype.$createDownState$ = function $dvt$$ComboBox$$$$createDownState$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = this.$getCtx$();
    $DvtControlPanelEventManager$$ = new dvt.$Rect$($DvtControlPanelEvent$$, 0, 0, this.$_itemDim$.$w$, this.$_itemDim$.$h$, $DvtControlPanelEventManager$$ + "_up");
    $DvtControlPanelEventManager$$.$setSolidStroke$(dvt.$ButtonLAFUtils$.$BORDER_COLOR$);
    $DvtControlPanelEventManager$$.$setFill$(new dvt.$LinearGradientFill$(0, [dvt.$ButtonLAFUtils$.$GRADIENT_LIGHT$, dvt.$ButtonLAFUtils$.$GRADIENT_DARK$]));
    $DvtControlPanelEventManager$$.$setCornerRadius$(dvt.$ButtonLAFUtils$.$ROUND_RECT_ELLIPSE$);
    $DvtControlPanelEventManager$$.$addChild$(dvt.$ComboBox$.$DrawArrow$($DvtControlPanelEvent$$, $DvtControlPanelEventManager$$.getWidth(), $DvtControlPanelEventManager$$.getHeight()));
    return $DvtControlPanelEventManager$$
  };
  dvt.$ComboBox$.prototype.$setStaticButtonStates$ = function $dvt$$ComboBox$$$$setStaticButtonStates$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    this.$_button$.$setUpState$($DvtControlPanelEventManager$$);
    this.$_button$.$setDownState$($DvtPanControl$$);
    this.$_button$.$setOverState$($DvtControlPanelEvent$$);
    this.$_bStaticButtonStates$ = $JSCompiler_alias_TRUE$$
  };
  dvt.$ComboBox$.prototype.$addItem$ = function $dvt$$ComboBox$$$$addItem$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    $DvtControlPanelEventManager$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    this.$_items$.push($DvtControlPanelEventManager$$);
    this.$_tooltips$.push($DvtControlPanelEvent$$);
    $DvtControlPanelEvent$$ = dvt.$ButtonLAFUtils$.$_getDimForced$(this.$getCtx$(), $DvtPanControl$$ ? $DvtPanControl$$ : $DvtControlPanelEventManager$$);
    var $maxItemDim$$ = this.$_maxItemDim$;
    $DvtControlPanelEvent$$.$w$ > $maxItemDim$$.$w$ && ($maxItemDim$$.$w$ = $DvtControlPanelEvent$$.$w$, this.$_itemDim$.$w$ = $DvtControlPanelEvent$$.$w$ + 16);
    $DvtControlPanelEvent$$.$h$ > $maxItemDim$$.$h$ && ($maxItemDim$$.$h$ = $DvtControlPanelEvent$$.$h$, this.$_itemDim$.$h$ = $DvtControlPanelEvent$$.$h$);
    this.$_maxItemDim$ = $maxItemDim$$;
    $DvtControlPanelEvent$$ = $JSCompiler_alias_NULL$$;
    $DvtPanControl$$ && ($DropdownItemSprite$$ && $DvtControlPanelDefaults$$) && ($DvtControlPanelEvent$$ = [], $DvtControlPanelEvent$$[dvt.$Button$.$STATE_ENABLED$] = $DvtPanControl$$, $DvtControlPanelEvent$$[dvt.$Button$.$STATE_OVER$] = $DropdownItemSprite$$, $DvtControlPanelEvent$$[dvt.$Button$.$STATE_DOWN$] = $DvtControlPanelDefaults$$);
    this.$_itemButtonStates$.push($DvtControlPanelEvent$$);
    this.$_bStaticButtonStates$ || (this.removeChild(this.$_button$), this.$_button$ = this.$createButton$($DvtControlPanelEventManager$$.getId()), this.$addChildAt$(this.$_button$, 0), this.$UpdateContentArea$())
  };
  dvt.$ComboBox$.prototype.getItem = function $dvt$$ComboBox$$$getItem$($DvtControlPanelEventManager$$) {
    return this.$_items$[$DvtControlPanelEventManager$$]
  };
  dvt.$ComboBox$.prototype.$getItemCount$ = function $dvt$$ComboBox$$$$getItemCount$$() {
    return this.$_items$.length
  };
  dvt.$ComboBox$.prototype.$getSelectedItem$ = function $dvt$$ComboBox$$$$getSelectedItem$$() {
    var $DvtControlPanelEventManager$$ = this.$_selectedIndex$;
    return 0 > $DvtControlPanelEventManager$$ || $DvtControlPanelEventManager$$ > this.$_items$.length - 1 ? $JSCompiler_alias_NULL$$ : this.$_items$[$DvtControlPanelEventManager$$]
  };
  dvt.$ComboBox$.prototype.$FireChangeEvent$ = function $dvt$$ComboBox$$$$FireChangeEvent$$($DvtControlPanelEventManager$$) {
    $DvtControlPanelEventManager$$ = new dvt.$ComboBoxEvent$(dvt.$ComboBoxEvent$.$SUBTYPE_ITEM_CHANGE$, $DvtControlPanelEventManager$$);
    this.$FireListener$($DvtControlPanelEventManager$$)
  };
  dvt.$ComboBox$.prototype.$HandleExpandClick$ = function $dvt$$ComboBox$$$$HandleExpandClick$$($DvtControlPanelEventManager$$) {
    dvt.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
    this.$_bRemoveDropdown$ && this.$RemoveDropdown$();
    $DvtControlPanelEventManager$$ = this.$getCtx$();
    this.$_dropdown$ = this.$createDropdown$();
    var $DvtControlPanelEvent$$ = dvt.$ButtonLAFUtils$.$_getDimForced$($DvtControlPanelEventManager$$, this.$_dropdown$);
    this.$addChild$(this.$_dropdown$);
    var $DvtPanControl$$ = this.$_button$.$getDimensions$(), $DvtControlPanelEvent$$ = dvt.$Agent$.$isRightToLeft$($DvtControlPanelEventManager$$) ? -$DvtControlPanelEvent$$.$w$ + 1 * $DvtPanControl$$.$w$ / 4 : 3 * $DvtPanControl$$.$w$ / 4;
    this.$_dropdown$.$setTranslate$($DvtControlPanelEvent$$, 3 * $DvtPanControl$$.$h$ / 4);
    this.$_button$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    this.$_button$.$setToggled$($JSCompiler_alias_TRUE$$);
    this.$FireListener$(new dvt.$ComboBoxEvent$(dvt.$ComboBoxEvent$.$SUBTYPE_SHOW_DROPDOWN$));
    ($DvtControlPanelEventManager$$ = $DvtControlPanelEventManager$$.$_stage$) && (this.$_isTouchDevice$ ? $DvtControlPanelEventManager$$.$addEvtListener$(dvt.$TouchEvent$.$TOUCHSTART$, this.$HandleStageMouseFocusChange$, $JSCompiler_alias_TRUE$$, this) : $DvtControlPanelEventManager$$.$addEvtListener$(dvt.$MouseEvent$.$MOUSEUP$, this.$HandleStageMouseFocusChange$, $JSCompiler_alias_TRUE$$, this))
  };
  dvt.$ComboBox$.prototype.$HandleHideDropdownTimer$ = function $dvt$$ComboBox$$$$HandleHideDropdownTimer$$() {
    this.$HideDropdown$();
    this.$_bStaticButtonStates$ || this.$UpdateContentArea$()
  };
  dvt.$ComboBox$.prototype.$HandleStageMouseFocusChange$ = function $dvt$$ComboBox$$$$HandleStageMouseFocusChange$$() {
    this.$_dropdownItemClickEvent$ = $JSCompiler_alias_FALSE$$;
    this.$_outOfFocusCheckTimer$.reset();
    this.$_outOfFocusCheckTimer$.start()
  };
  dvt.$ComboBox$.prototype.$HandleOutOfFocusCheckTimer$ = function $dvt$$ComboBox$$$$HandleOutOfFocusCheckTimer$$() {
    this.$_dropdownItemClickEvent$ || (this.$_hideDropdownTimer$.reset(), this.$_hideDropdownTimer$.start())
  };
  dvt.$ComboBox$.prototype.$createDropdown$ = function $dvt$$ComboBox$$$$createDropdown$$() {
    function $DvtControlPanelEventManager$$($DvtControlPanelEvent$$) {
      return{$HandleClick$:function($DvtControlPanelEventManager$$) {
        $thisRef$$33$$.$HandleDropdownItemClick$($DvtControlPanelEventManager$$)
      }, $HandleMouseDown$:function() {
        $thisRef$$33$$.$HandleButtonDown$()
      }, $getTooltip$:function() {
        return $DvtControlPanelEvent$$
      }}
    }
    for(var $DvtControlPanelEvent$$ = this.$_styleMap$ ? this.$_styleMap$.comboBox : $JSCompiler_alias_NULL$$, $DvtPanControl$$ = dvt.$StyleUtils$.$getStyle$($DvtControlPanelEvent$$, dvt.$ControlPanel$.$CP_PADDING_TOP$, 0), $DropdownItemSprite$$ = dvt.$StyleUtils$.$getStyle$($DvtControlPanelEvent$$, dvt.$ControlPanel$.$CP_PADDING_LEFT$, 0), $DvtControlPanelDefaults$$ = dvt.$StyleUtils$.$getStyle$($DvtControlPanelEvent$$, dvt.$ControlPanel$.$CP_PADDING_BOTTOM$, 0), $bgColor$$10_rightPadding$$ = dvt.$StyleUtils$.$getStyle$($DvtControlPanelEvent$$, 
    dvt.$ControlPanel$.$CP_PADDING_RIGHT$, 0), $bgAlpha_interItemPadding$$ = dvt.$StyleUtils$.$getStyle$($DvtControlPanelEvent$$, dvt.$ControlPanel$.$CP_PADDING_INNER$, 0), $currY$$11$$ = $DvtPanControl$$, $context$$264$$ = this.$getCtx$(), $dim$$55$$, $itemSprite$$2$$, $item$$40$$, $DvtPanControl$$ = new dvt.$Container$($context$$264$$, "__dd"), $thisRef$$33$$ = this, $i$$537$$ = 0;$i$$537$$ < this.$_items$.length;$i$$537$$++) {
      $item$$40$$ = this.$_items$[$i$$537$$], $dim$$55$$ = dvt.$ButtonLAFUtils$.$_getDimForced$($context$$264$$, $item$$40$$), $itemSprite$$2$$ = new dvt.$Container$($context$$264$$, "__it" + $i$$537$$), $itemSprite$$2$$.$setTranslate$($DropdownItemSprite$$, $currY$$11$$), $itemSprite$$2$$.$addChild$($item$$40$$), $item$$40$$.$setMouseEnabled$($JSCompiler_alias_TRUE$$), $item$$40$$.setCursor("pointer"), $currY$$11$$ += $dim$$55$$.$h$ + $bgAlpha_interItemPadding$$, this.$_eventManager$ && this.$_eventManager$.$associate$($item$$40$$, 
      $DvtControlPanelEventManager$$(this.$_tooltips$[$i$$537$$])), $DvtPanControl$$.$addChild$($itemSprite$$2$$)
    }
    $DvtControlPanelEvent$$ = dvt.$ButtonLAFUtils$.$drawDropdownShape$($context$$264$$, this.$_maxItemDim$.$w$ + $DropdownItemSprite$$ + $bgColor$$10_rightPadding$$, $currY$$11$$ + $DvtControlPanelDefaults$$ - $bgAlpha_interItemPadding$$, $DvtControlPanelEvent$$);
    $DvtControlPanelEvent$$.$addChild$($DvtPanControl$$);
    $DropdownItemSprite$$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$CSSStyle$.$BORDER_COLOR$, $JSCompiler_alias_NULL$$);
    $DvtControlPanelDefaults$$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$, 1);
    $bgColor$$10_rightPadding$$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$CSSStyle$.$BACKGROUND_COLOR$, $JSCompiler_alias_NULL$$);
    $bgAlpha_interItemPadding$$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$ControlPanel$.$BG_ALPHA$, 1);
    $DvtControlPanelEvent$$.$setSolidStroke$($DropdownItemSprite$$, $DvtControlPanelDefaults$$);
    $bgColor$$10_rightPadding$$ && $DvtControlPanelEvent$$.$setSolidFill$($bgColor$$10_rightPadding$$, $bgAlpha_interItemPadding$$);
    return $DvtControlPanelEvent$$
  };
  dvt.$ComboBox$.prototype.$HandleButtonDown$ = function $dvt$$ComboBox$$$$HandleButtonDown$$() {
    dvt.$EventManager$.$consumeEvent$()
  };
  dvt.$ComboBox$.prototype.$HandleDropdownItemClick$ = function $dvt$$ComboBox$$$$HandleDropdownItemClick$$($DvtControlPanelEventManager$$) {
    this.$_dropdownItemClickEvent$ = $JSCompiler_alias_TRUE$$;
    this.$_hideDropdownTimer$.stop();
    dvt.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$ = dvt.$ComboBox$.$getRootDropdownItemSprite$($DvtControlPanelEventManager$$.target);
    var $DvtControlPanelEvent$$;
    if(this.$_dropdown$ && $DvtControlPanelEventManager$$) {
      var $DvtPanControl$$ = this.$_dropdown$.$getChildAt$(0);
      $DvtPanControl$$ && ($DvtControlPanelEvent$$ = $DvtPanControl$$.$getChildIndex$($DvtControlPanelEventManager$$))
    }
    this.$HideDropdown$();
    this.$setSelectedIndex$($DvtControlPanelEvent$$)
  };
  dvt.$ComboBox$.$getRootDropdownItemSprite$ = function $dvt$$ComboBox$$$getRootDropdownItemSprite$$($DvtControlPanelEventManager$$) {
    for(var $DvtControlPanelEvent$$, $DvtPanControl$$;$DvtControlPanelEventManager$$;) {
      if(($DvtPanControl$$ = $DvtControlPanelEventManager$$.getId()) && $DvtControlPanelEventManager$$ instanceof dvt.$Container$ && "__it" == $DvtPanControl$$.substr(0, 4)) {
        $DvtControlPanelEvent$$ = $DvtControlPanelEventManager$$;
        break
      }
      $DvtControlPanelEventManager$$ = $DvtControlPanelEventManager$$.getParent()
    }
    return $DvtControlPanelEvent$$
  };
  dvt.$ComboBox$.prototype.$HideDropdown$ = function $dvt$$ComboBox$$$$HideDropdown$$() {
    this.$_dropdown$ && (this.$_dropdown$.$setVisible$($JSCompiler_alias_FALSE$$), this.$_button$.$setToggled$($JSCompiler_alias_FALSE$$), this.$FireListener$(new dvt.$ComboBoxEvent$(dvt.$ComboBoxEvent$.$SUBTYPE_HIDE_DROPDOWN$)), this.$_bRemoveDropdown$ = $JSCompiler_alias_TRUE$$);
    var $DvtControlPanelEventManager$$ = this.$getCtx$().$_stage$;
    $DvtControlPanelEventManager$$ && (this.$_isTouchDevice$ ? $DvtControlPanelEventManager$$.$removeEvtListener$(dvt.$TouchEvent$.$TOUCHSTART$, this.$HandleStageMouseFocusChange$, $JSCompiler_alias_TRUE$$, this) : $DvtControlPanelEventManager$$.$removeEvtListener$(dvt.$MouseEvent$.$MOUSEUP$, this.$HandleStageMouseFocusChange$, $JSCompiler_alias_TRUE$$, this));
    this.$_button$.$setMouseEnabled$($JSCompiler_alias_TRUE$$)
  };
  dvt.$ComboBox$.prototype.$RemoveDropdown$ = function $dvt$$ComboBox$$$$RemoveDropdown$$() {
    this.$_bRemoveDropdown$ = $JSCompiler_alias_FALSE$$;
    this.$_dropdown$ && (this.$_dropdown$.$setVisible$($JSCompiler_alias_FALSE$$), this.$_dropdown$.getParent().removeChild(this.$_dropdown$), this.$_dropdown$ = $JSCompiler_alias_NULL$$)
  };
  dvt.$ComboBox$.prototype.$getDimensions$ = function $dvt$$ComboBox$$$$getDimensions$$() {
    return this.$_button$ != $JSCompiler_alias_NULL$$ ? this.$_button$.$getDimensions$() : new dvt.$Rectangle$(0, 0, 0, 0)
  };
  dvt.$ComboBox$.prototype.$getItems$ = $JSCompiler_get$$("$_items$");
  dvt.$ComboBox$.prototype.$UpdateContentArea$ = function $dvt$$ComboBox$$$$UpdateContentArea$$() {
    var $DvtControlPanelEventManager$$ = $JSCompiler_alias_TRUE$$, $DvtControlPanelEvent$$ = this.$_selectedIndex$;
    if(this.$_itemButtonStates$ && this.$_itemButtonStates$.length > $DvtControlPanelEvent$$ && ($DvtControlPanelEvent$$ = this.$_itemButtonStates$[$DvtControlPanelEvent$$]) && 2 < $DvtControlPanelEvent$$.length) {
      this.$_button$.$setUpState$($DvtControlPanelEvent$$[dvt.$Button$.$STATE_ENABLED$]), this.$_button$.$setOverState$($DvtControlPanelEvent$$[dvt.$Button$.$STATE_OVER$]), this.$_button$.$setDownState$($DvtControlPanelEvent$$[dvt.$Button$.$STATE_DOWN$]), $DvtControlPanelEventManager$$ = $JSCompiler_alias_FALSE$$
    }
    $DvtControlPanelEventManager$$ && (0 < this.$_contentArea$.$getNumChildren$() && this.$_contentArea$.$removeChildAt$(0), this.$_contentArea$.$addChild$(this.$getSelectedItem$()))
  };
  dvt.$ComboBox$.$DrawArrow$ = function $dvt$$ComboBox$$$DrawArrow$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    var $DropdownItemSprite$$ = [];
    $DropdownItemSprite$$.push($DvtControlPanelEvent$$ - 12, $DvtPanControl$$ / 2 - 2);
    $DropdownItemSprite$$.push($DvtControlPanelEvent$$ - 4, $DvtPanControl$$ / 2 - 2);
    $DropdownItemSprite$$.push($DvtControlPanelEvent$$ - 8, $DvtPanControl$$ / 2 + 2);
    $DropdownItemSprite$$.push($DvtControlPanelEvent$$ - 12, $DvtPanControl$$ / 2 - 2);
    $DvtControlPanelEventManager$$ = new dvt.$Polygon$($DvtControlPanelEventManager$$, $DropdownItemSprite$$, $JSCompiler_alias_NULL$$);
    $DvtControlPanelEventManager$$.$setSolidStroke$(dvt.$ButtonLAFUtils$.$BORDER_COLOR$);
    $DvtControlPanelEventManager$$.$setSolidFill$(dvt.$ButtonLAFUtils$.$BORDER_COLOR$);
    $DvtControlPanelEventManager$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    return $DvtControlPanelEventManager$$
  };
  dvt.$ComboBox$.prototype.$closeDropdown$ = function $dvt$$ComboBox$$$$closeDropdown$$() {
    this.$HideDropdown$()
  };
  dvt.$ComboBox$.prototype.$setEventManager$ = $JSCompiler_set$$("$_eventManager$");
  dvt.$Obj$.$createSubclass$($DropdownItemSprite$$, dvt.$Rect$);
  $DropdownItemSprite$$.prototype.Init = function $$DropdownItemSprite$$$$Init$($DvtControlPanelEventManager$$) {
    dvt.$Rect$.$superclass$.Init.call(this, $DvtControlPanelEventManager$$)
  };
  dvt.$ComboBoxEvent$ = function $dvt$$ComboBoxEvent$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.Init($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$)
  };
  dvt.$ComboBoxEvent$.$TYPE$ = "comboBoxEvent";
  dvt.$ComboBoxEvent$.$SUBTYPE_ITEM_CHANGE$ = "cbItemChange";
  dvt.$ComboBoxEvent$.$SUBTYPE_SHOW_DROPDOWN$ = "cbShowDropdown";
  dvt.$ComboBoxEvent$.$SUBTYPE_HIDE_DROPDOWN$ = "cbHideDropdown";
  dvt.$Obj$.$createSubclass$(dvt.$ComboBoxEvent$, dvt.$Obj$);
  dvt.$ComboBoxEvent$.prototype.Init = function $dvt$$ComboBoxEvent$$$Init$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.type = dvt.$ComboBoxEvent$.$TYPE$;
    $DvtControlPanelEvent$$ === $JSCompiler_alias_VOID$$ && ($DvtControlPanelEvent$$ = -1);
    this.$subtype$ = $DvtControlPanelEventManager$$;
    this.$_index$ = $DvtControlPanelEvent$$
  };
  dvt.$ComboBoxEvent$.prototype.$getIndex$ = $JSCompiler_get$$("$_index$");
  $DvtPanControl$$.$PAN_TIMER_INTERVAL$ = 50;
  $DvtPanControl$$.$PAN_TIMER_ACCELERATE_COUNT$ = 2 * (1E3 / $DvtPanControl$$.$PAN_TIMER_INTERVAL$);
  dvt.$Obj$.$createSubclass$($DvtPanControl$$, dvt.$Container$);
  $DvtPanControl$$.prototype.Init = function $$DvtPanControl$$$$Init$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $control$$1$$, $styleMap$$52$$) {
    $DvtPanControl$$.$superclass$.Init.call(this, $DvtControlPanelEventManager$$);
    this.$_panTimer$ = new dvt.$Timer$($DvtControlPanelEventManager$$, $DvtPanControl$$.$PAN_TIMER_INTERVAL$, this.$HandlePanTimer$, this);
    this.$_tooltipManager$ = $DvtControlPanelEventManager$$.$getTooltipManager$();
    this.$_bPanMouseDown$ = $JSCompiler_alias_FALSE$$;
    this.$_panZoomCanvas$ = $DvtControlPanelDefaults$$;
    this.$_panCenter$ = new dvt.$Point$(20, 20);
    this.$_controls$ = $control$$1$$ ? $control$$1$$ : dvt.$ControlPanel$.$CONTROLS_ALL$;
    $DvtControlPanelEvent$$.$addChild$($DropdownItemSprite$$);
    $DropdownItemSprite$$ && (this.$_panCenterSprite$ = $DropdownItemSprite$$, this.$_panCenterSprite$.$setVisible$($JSCompiler_alias_FALSE$$), this.$_panCenterSprite$.$addEvtListener$(dvt.$TouchEvent$.$TOUCHSTART$, this.$HandlePanCenterClick$, $JSCompiler_alias_FALSE$$, this), dvt.$Agent$.$isTouchDevice$() || (this.$_panCenterSprite$.$addEvtListener$(dvt.$MouseEvent$.$CLICK$, this.$HandlePanCenterClick$, $JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(dvt.$MouseEvent$.$MOUSEDOWN$, 
    this.$HandlePanCenterDown$, $JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(dvt.$MouseEvent$.$MOUSEUP$, this.$HandlePanCenterUp$, $JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(dvt.$MouseEvent$.$MOUSEOVER$, this.$HandlePanCenterRollOver$, $JSCompiler_alias_FALSE$$, this), this.$_panCenterSprite$.$addEvtListener$(dvt.$MouseEvent$.$MOUSEOUT$, this.$HandlePanCenterRollOut$, $JSCompiler_alias_FALSE$$, this)), this.$_panCenterSprite$.$addEvtListener$(dvt.$MouseEvent$.$MOUSEMOVE$, 
    this.$HandlePanCenterMouseMove$, $JSCompiler_alias_FALSE$$, this));
    this.$_panButton$ = $DvtControlPanelEvent$$;
    this.$_panButton$.$addEvtListener$(dvt.$TouchEvent$.$TOUCHSTART$, this.$HandlePanClick$, $JSCompiler_alias_FALSE$$, this);
    dvt.$Agent$.$isTouchDevice$() || (this.$_panButton$.$addEvtListener$(dvt.$MouseEvent$.$CLICK$, this.$HandlePanClick$, $JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(dvt.$MouseEvent$.$MOUSEDOWN$, this.$HandlePanMouseDown$, $JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(dvt.$MouseEvent$.$MOUSEUP$, this.$HandlePanMouseUp$, $JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(dvt.$MouseEvent$.$MOUSEOVER$, this.$HandlePanRollOver$, $JSCompiler_alias_FALSE$$, 
    this), this.$_panButton$.$addEvtListener$(dvt.$MouseEvent$.$MOUSEOUT$, this.$HandlePanRollOut$, $JSCompiler_alias_FALSE$$, this), this.$_panButton$.$addEvtListener$(dvt.$MouseEvent$.$MOUSEMOVE$, this.$HandlePanMouseMove$, $JSCompiler_alias_FALSE$$, this));
    this.$_panControl$ = dvt.$ButtonLAFUtils$.$createPanButtonBackground$($DvtControlPanelEventManager$$, $styleMap$$52$$);
    this.$_panControl$.$addChild$(this.$_panButton$);
    this.$addChild$(this.$_panControl$)
  };
  $DvtPanControl$$.prototype.$HandlePanClick$ = function $$DvtPanControl$$$$$HandlePanClick$$($DvtControlPanelEventManager$$) {
    dvt.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$)
  };
  $DvtPanControl$$.prototype.$HandlePanMouseDown$ = function $$DvtPanControl$$$$$HandlePanMouseDown$$($DvtControlPanelEventManager$$) {
    dvt.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
    this.$_bPanMouseDown$ = $JSCompiler_alias_TRUE$$;
    this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$($JSCompiler_alias_FALSE$$);
    $DvtControlPanelEventManager$$ = this.$_panZoomCanvas$.$GetRelativeMousePosition$($DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$ = this.$_panButton$.$stageToLocal$($DvtControlPanelEventManager$$);
    this.$_rotatePanControlDirectionalArrow$($DvtControlPanelEventManager$$.x, $DvtControlPanelEventManager$$.y, this.$_panButton$.$downState$);
    this.$_panMousePoint$ = new dvt.$Point$($DvtControlPanelEventManager$$.x, $DvtControlPanelEventManager$$.y);
    this.$_panTimer$.start();
    this.$_panTimerCount$ = 0
  };
  $DvtPanControl$$.prototype.$HandlePanMouseUp$ = function $$DvtPanControl$$$$$HandlePanMouseUp$$($DvtControlPanelEventManager$$) {
    this.$_bPanMouseDown$ && (dvt.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$), this.$_bPanMouseDown$ = $JSCompiler_alias_FALSE$$, this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$($JSCompiler_alias_TRUE$$), this.$_panTimer$.stop());
    this.$_panButton$.$_mouseOutHandler$($DvtControlPanelEventManager$$);
    this.$_tooltipManager$.$hideTooltip$()
  };
  $DvtPanControl$$.prototype.$HandlePanRollOver$ = function $$DvtPanControl$$$$$HandlePanRollOver$$($DvtControlPanelEventManager$$) {
    this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$($JSCompiler_alias_TRUE$$);
    this.$_tooltipManager$.$showTooltip$($DvtControlPanelEventManager$$.pageX, $DvtControlPanelEventManager$$.pageY, dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL_PAN"), $DvtControlPanelEventManager$$.target)
  };
  $DvtPanControl$$.prototype.$HandlePanRollOut$ = function $$DvtPanControl$$$$$HandlePanRollOut$$($DvtControlPanelEventManager$$) {
    this.$HandlePanMouseUp$($DvtControlPanelEventManager$$);
    this.$_panCenterSprite$ && this.$_panCenterSprite$.$setVisible$($JSCompiler_alias_FALSE$$)
  };
  $DvtPanControl$$.prototype.$HandlePanMouseMove$ = function $$DvtPanControl$$$$$HandlePanMouseMove$$($DvtControlPanelEventManager$$) {
    dvt.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$ = this.$_panZoomCanvas$.$GetRelativeMousePosition$($DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$ = this.$_panButton$.$stageToLocal$($DvtControlPanelEventManager$$);
    this.$_bPanMouseDown$ ? (this.$_rotatePanControlDirectionalArrow$($DvtControlPanelEventManager$$.x, $DvtControlPanelEventManager$$.y, this.$_panButton$.$downState$), this.$_panMousePoint$ = new dvt.$Point$($DvtControlPanelEventManager$$.x, $DvtControlPanelEventManager$$.y)) : this.$_rotatePanControlDirectionalArrow$($DvtControlPanelEventManager$$.x, $DvtControlPanelEventManager$$.y, this.$_panButton$.$overState$)
  };
  $DvtPanControl$$.prototype.$HandlePanTimer$ = function $$DvtPanControl$$$$$HandlePanTimer$$() {
    if(this.$_bPanMouseDown$) {
      var $DvtControlPanelEventManager$$ = Math.atan2(this.$_panCenter$.y - this.$_panMousePoint$.y, this.$_panCenter$.x - this.$_panMousePoint$.x), $DvtControlPanelEvent$$ = Math.cos($DvtControlPanelEventManager$$), $DvtControlPanelEventManager$$ = Math.sin($DvtControlPanelEventManager$$), $DropdownItemSprite$$ = 15;
      this.$_panTimerCount$++;
      this.$_panTimerCount$ > $DvtPanControl$$.$PAN_TIMER_ACCELERATE_COUNT$ && ($DropdownItemSprite$$ *= 3);
      this.$_panZoomCanvas$.$panBy$($DropdownItemSprite$$ * $DvtControlPanelEvent$$, $DropdownItemSprite$$ * $DvtControlPanelEventManager$$)
    }
  };
  $DvtPanControl$$.prototype.$HandlePanCenterClick$ = function $$DvtPanControl$$$$$HandlePanCenterClick$$($DvtControlPanelEventManager$$) {
    dvt.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
    this.$_panZoomCanvas$.$zoomAndCenter$()
  };
  $DvtPanControl$$.prototype.$HandlePanCenterDown$ = function $$DvtPanControl$$$$$HandlePanCenterDown$$($DvtControlPanelEventManager$$) {
    dvt.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$)
  };
  $DvtPanControl$$.prototype.$HandlePanCenterUp$ = function $$DvtPanControl$$$$$HandlePanCenterUp$$($DvtControlPanelEventManager$$) {
    dvt.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
    this.$_tooltipManager$.$hideTooltip$()
  };
  $DvtPanControl$$.prototype.$HandlePanCenterRollOver$ = function $$DvtPanControl$$$$$HandlePanCenterRollOver$$($DvtControlPanelEventManager$$) {
    this.$_tooltipManager$.$showTooltip$($DvtControlPanelEventManager$$.pageX, $DvtControlPanelEventManager$$.pageY, dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL_ZOOMANDCENTER"), $DvtControlPanelEventManager$$.target);
    this.$_panCenterSprite$.$setVisible$($JSCompiler_alias_TRUE$$);
    dvt.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$)
  };
  $DvtPanControl$$.prototype.$HandlePanCenterRollOut$ = function $$DvtPanControl$$$$$HandlePanCenterRollOut$$($DvtControlPanelEventManager$$) {
    this.$_tooltipManager$.$hideTooltip$();
    dvt.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$)
  };
  $DvtPanControl$$.prototype.$HandlePanCenterMouseMove$ = function $$DvtPanControl$$$$$HandlePanCenterMouseMove$$($DvtControlPanelEventManager$$) {
    dvt.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$)
  };
  $DvtPanControl$$.prototype.$_rotatePanControlDirectionalArrow$ = function $$DvtPanControl$$$$$_rotatePanControlDirectionalArrow$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    $DvtPanControl$$.$setRotation$(Math.atan2($DvtControlPanelEvent$$ - this.$_panCenter$.y, $DvtControlPanelEventManager$$ - this.$_panCenter$.x) - Math.PI / 4)
  };
  dvt.$Obj$.$createSubclass$($DvtControlPanelEvent$$, dvt.$BaseComponentEvent$);
  $DvtControlPanelEvent$$.$TYPE$ = "dvtPZCPExpand";
  $DvtControlPanelEvent$$.$SUBTYPE_SHOW$ = "show";
  $DvtControlPanelEvent$$.$SUBTYPE_HIDE$ = "hide";
  $DvtControlPanelEvent$$.prototype.$getSubType$ = $JSCompiler_get$$("$_subtype$");
  dvt.$ControlPanel$ = function $dvt$$ControlPanel$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    this.Init($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$)
  };
  dvt.$Obj$.$createSubclass$(dvt.$ControlPanel$, dvt.$Container$);
  dvt.$ControlPanel$.$STATE_COLLAPSED$ = 1;
  dvt.$ControlPanel$.$STATE_EXPANDED$ = 2;
  dvt.$ControlPanel$.$CONTROLS_ALL$ = 16777215;
  dvt.$ControlPanel$.$CONTROLS_ZOOM_SLIDER$ = 1;
  dvt.$ControlPanel$.$CONTROLS_CENTER_BUTTON$ = 16;
  dvt.$ControlPanel$.$CONTROLS_ZOOM_TO_FIT_BUTTON$ = 256;
  dvt.$ControlPanel$.$CONTROLS_ZOOM$ = 4097;
  dvt.$ControlPanel$.$DEFAULT_ZOOM_LEVELS$ = [0, 0.25, 0.5, 0.75, 1];
  dvt.$ControlPanel$.$CONTROL_PANEL_BEHAVIOR_KEY$ = "controlPanelBehavior";
  dvt.$ControlPanel$.$BG_ALPHA$ = "backgroundAlpha";
  dvt.$ControlPanel$.$BG_ROLLOVER_ALPHA$ = "backgroundHoverAlpha";
  dvt.$ControlPanel$.$BG_DRAG_ALPHA$ = "backgroundDragAlpha";
  dvt.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$ = "borderAlpha";
  dvt.$ControlPanel$.$FRAME_ROLLOVER_ALPHA$ = "borderHoverAlpha";
  dvt.$ControlPanel$.$FRAME_DRAG_ALPHA$ = "borderDragAlpha";
  dvt.$ControlPanel$.$CP_BUTTON_WIDTH$ = "buttonWidth";
  dvt.$ControlPanel$.$CP_BUTTON_HEIGHT$ = "buttonHeight";
  dvt.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$ = "openCloseButtonWidth";
  dvt.$ControlPanel$.$CP_TAB_SIZE$ = "tabSize";
  dvt.$ControlPanel$.$CP_PADDING_TOP$ = "paddingTop";
  dvt.$ControlPanel$.$CP_PADDING_SIDE$ = "paddingSide";
  dvt.$ControlPanel$.$CP_PADDING_BOTTOM$ = "paddingBottom";
  dvt.$ControlPanel$.$CP_PADDING_LEFT$ = "paddingLeft";
  dvt.$ControlPanel$.$CP_PADDING_RIGHT$ = "paddingRight";
  dvt.$ControlPanel$.$CP_PADDING_INNER$ = "paddingInner";
  dvt.$ControlPanel$.$CP_PANEL_DRAWER_STYLES$ = "panelDrawerStyles";
  dvt.$ControlPanel$.$CP_IMAGE_WIDTH$ = "imageWidth";
  dvt.$ControlPanel$.$CP_IMAGE_HEIGHT$ = "imageHeight";
  dvt.$ControlPanel$.$CP_CENTER_BUTTON_DISPLAYED$ = "centerButtonDisplayed";
  dvt.$ControlPanel$.prototype.Init = function $dvt$$ControlPanel$$$Init$($DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    dvt.$ControlPanel$.$superclass$.Init.call(this, $DvtControlPanelEvent$$);
    this.$_bMouseOver$ = this.$_bMouseDragPanning$ = $JSCompiler_alias_FALSE$$;
    this.$_panZoomCanvas$ = $DvtPanControl$$.$_panZoomCanvas$;
    this.$_controls$ = $DvtPanControl$$.$_displayedControls$;
    this.$_buttonImages$ = $DvtPanControl$$.$getResourcesMap$();
    this.$_tooltipManager$ = $DvtControlPanelEvent$$.$getTooltipManager$();
    this.$_styleMap$ = $JSCompiler_alias_NULL$$;
    if(this.$_view$ = $DvtPanControl$$) {
      this.$_styleMap$ = this.$_view$.$getSubcomponentStyles$(), this.$_styleMap$[dvt.$ControlPanel$.$CP_CENTER_BUTTON_DISPLAYED$] || (this.$_controls$ &= ~dvt.$ControlPanel$.$CONTROLS_CENTER_BUTTON$, this.$_view$.$setDisplayedControls$(this.$_controls$))
    }
    this.$_zoomLevels$ = dvt.$ControlPanel$.$DEFAULT_ZOOM_LEVELS$;
    this.$_bTransition$ = $JSCompiler_alias_FALSE$$;
    this.$_bgAlpha$ = this.$_styleMap$[dvt.$ControlPanel$.$BG_ALPHA$];
    this.$_eventManager$ = new $DvtControlPanelEventManager$$($DvtControlPanelEvent$$, $JSCompiler_alias_NULL$$, $DvtPanControl$$);
    this.$_eventManager$.$addRolloverType$(dvt.$ControlPanel$);
    this.$_eventManager$.$addListeners$(this);
    this.$_eventManager$.$associate$(this, this);
    this.$_state$ = $DropdownItemSprite$$;
    this.$tabChildren$ = $JSCompiler_alias_FALSE$$;
    this.$setPixelHinting$()
  };
  dvt.$ControlPanel$.prototype.$mouseDragPanningStarted$ = function $dvt$$ControlPanel$$$$mouseDragPanningStarted$$() {
    this.$_bMouseDragPanning$ = $JSCompiler_alias_TRUE$$;
    this.$_background$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    this.$_frame$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    this.$_background$.$setAlpha$(this.$_styleMap$[dvt.$ControlPanel$.$BG_DRAG_ALPHA$]);
    this.$_frame$.$setAlpha$(this.$_styleMap$[dvt.$ControlPanel$.$FRAME_DRAG_ALPHA$])
  };
  dvt.$ControlPanel$.prototype.$mouseDragPanningEnded$ = function $dvt$$ControlPanel$$$$mouseDragPanningEnded$$() {
    this.$_bMouseDragPanning$ = $JSCompiler_alias_FALSE$$;
    this.$_background$.$setMouseEnabled$($JSCompiler_alias_TRUE$$);
    this.$_frame$.$setMouseEnabled$($JSCompiler_alias_TRUE$$);
    this.$_bMouseOver$ ? this.$HandleRollOver$($JSCompiler_alias_NULL$$) : this.$HandleRollOut$($JSCompiler_alias_NULL$$)
  };
  dvt.$ControlPanel$.prototype.$isSingleHorzRow$ = $JSCompiler_returnArg$$($JSCompiler_alias_TRUE$$);
  dvt.$ControlPanel$.prototype.$getViewPanelHeight$ = function $dvt$$ControlPanel$$$$getViewPanelHeight$$() {
    var $DvtControlPanelEventManager$$ = 0, $DvtControlPanelEventManager$$ = this.$isSingleHorzRow$() ? dvt.$ControlPanelLAFUtils$.$getViewPanelHalfHeight$() : dvt.$ControlPanelLAFUtils$.$getViewPanelHeight$(), $DvtControlPanelEvent$$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$ControlPanel$.$CP_TAB_SIZE$, 0);
    return Math.max($DvtControlPanelEvent$$, $DvtControlPanelEventManager$$)
  };
  dvt.$ControlPanel$.prototype.$getViewPanelWidth$ = function $dvt$$ControlPanel$$$$getViewPanelWidth$$() {
    return dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$ControlPanel$.$CP_TAB_SIZE$, 0)
  };
  dvt.$ControlPanel$.prototype.$RenderCollapsed$ = function $dvt$$ControlPanel$$$$RenderCollapsed$$() {
    var $DvtControlPanelEventManager$$ = this.$getCtx$(), $DvtControlPanelEvent$$ = new dvt.$Container$($DvtControlPanelEventManager$$), $DvtPanControl$$ = this.$getViewPanelHeight$(), $DropdownItemSprite$$ = dvt.$Agent$.$isRightToLeft$($DvtControlPanelEventManager$$);
    this.$_background$ = dvt.$ControlPanelLAFUtils$.$createEmptyViewClosedShape$($DvtControlPanelEventManager$$, $DvtPanControl$$, this.$_styleMap$, $DropdownItemSprite$$);
    this.$_frame$ = dvt.$ControlPanelLAFUtils$.$createEmptyViewClosedFrame$($DvtControlPanelEventManager$$, $DvtPanControl$$, this.$_styleMap$, $DropdownItemSprite$$);
    this.$_collapsedDim$ = dvt.$ButtonLAFUtils$.$_getDimForced$($DvtControlPanelEventManager$$, this.$_frame$);
    this.$_expandButton$ = dvt.$ButtonLAFUtils$.$createExpandButton$(this.$getCtx$(), this.$_buttonImages$, this.$getViewPanelHeight$(), this.$_styleMap$, $DropdownItemSprite$$ ? dvt.$ButtonLAFUtils$.$DIR_RIGHT$ : dvt.$ButtonLAFUtils$.$DIR_LEFT$);
    this.$_expandButton$.$setCallback$(this.$HandleExpandClick$, this);
    this.$_expandButton$.$setTooltip$(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL"));
    this.$_eventManager$.$associate$(this.$_expandButton$, this.$_expandButton$);
    this.$_frame$.$addChild$(this.$_expandButton$);
    $DvtControlPanelEvent$$.$addChild$(this.$_background$);
    $DvtControlPanelEvent$$.$addChild$(this.$_frame$);
    return $DvtControlPanelEvent$$
  };
  dvt.$ControlPanel$.prototype.$_addZoomToFitButton$ = function $dvt$$ControlPanel$$$$_addZoomToFitButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    if(0 != (this.$_controls$ & dvt.$ControlPanel$.$CONTROLS_ZOOM_TO_FIT_BUTTON$)) {
      var $DvtPanControl$$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$.vbar, dvt.$ControlPanel$.$CP_PADDING_INNER$, 0), $DropdownItemSprite$$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$.vbar, dvt.$ControlPanel$.$CP_PADDING_LEFT$, 0);
      this.$_zoomToFitButton$ = dvt.$ButtonLAFUtils$.$createZoomToFitButton$(this.$getCtx$(), this.$_buttonImages$, this.$_styleMap$);
      this.$_zoomToFitButton$.$setTranslate$($DropdownItemSprite$$, this.$_zoomToFitButton$.$getTranslateY$() + $DvtControlPanelEvent$$);
      this.$_zoomToFitButton$.$setCallback$(this.$HandleZoomToFitClick$, this);
      this.$_zoomToFitButton$.$setTooltip$(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL_ZOOMTOFIT"));
      this.$_eventManager$.$associate$(this.$_zoomToFitButton$, this.$_zoomToFitButton$);
      $DropdownItemSprite$$ = dvt.$ButtonLAFUtils$.$_getDimForced$(this.$getCtx$(), this.$_zoomToFitButton$);
      $DvtControlPanelEventManager$$.$addChild$(this.$_zoomToFitButton$);
      $DvtControlPanelEvent$$ += $DropdownItemSprite$$.$h$;
      $DvtControlPanelEvent$$ += $DvtPanControl$$
    }
    return $DvtControlPanelEvent$$
  };
  dvt.$ControlPanel$.prototype.$_addZoomControls$ = function $dvt$$ControlPanel$$$$_addZoomControls$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$.vbar, dvt.$ControlPanel$.$CP_PADDING_INNER$, 0), $DropdownItemSprite$$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$.vbar, dvt.$ControlPanel$.$CP_PADDING_LEFT$, 0);
    if(0 != (this.$_controls$ & dvt.$ControlPanel$.$CONTROLS_ZOOM$)) {
      this.$_zoomInButton$ = dvt.$ButtonLAFUtils$.$createZoomInButton$(this.$getCtx$(), this.$_buttonImages$, this.$_styleMap$);
      this.$_zoomInButton$.$setTranslate$($DropdownItemSprite$$, this.$_zoomInButton$.$getTranslateY$() + $DvtControlPanelEvent$$);
      this.$_zoomInButton$.$setCallback$(this.$HandleZoomInClick$, this);
      this.$_zoomInButton$.$setTooltip$(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL_ZOOMIN"));
      this.$_eventManager$.$associate$(this.$_zoomInButton$, this.$_zoomInButton$);
      var $DvtControlPanelDefaults$$ = dvt.$ButtonLAFUtils$.$_getDimForced$(this.$getCtx$(), this.$_zoomInButton$);
      $DvtControlPanelEventManager$$.$addChild$(this.$_zoomInButton$);
      $DvtControlPanelEvent$$ += $DvtControlPanelDefaults$$.$h$ + $DvtPanControl$$;
      this.$_zoomOutButton$ = dvt.$ButtonLAFUtils$.$createZoomOutButton$(this.$getCtx$(), this.$_buttonImages$, this.$_styleMap$);
      this.$_zoomOutButton$.$setTranslate$($DropdownItemSprite$$, this.$_zoomOutButton$.$getTranslateY$() + $DvtControlPanelEvent$$);
      this.$_zoomOutButton$.$setCallback$(this.$HandleZoomOutClick$, this);
      this.$_zoomOutButton$.$setTooltip$(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL_ZOOMOUT"));
      this.$_eventManager$.$associate$(this.$_zoomOutButton$, this.$_zoomOutButton$);
      $DvtControlPanelDefaults$$ = dvt.$ButtonLAFUtils$.$_getDimForced$(this.$getCtx$(), this.$_zoomOutButton$);
      $DvtControlPanelEventManager$$.$addChild$(this.$_zoomOutButton$);
      $DvtControlPanelEvent$$ += $DvtControlPanelDefaults$$.$h$;
      this.$enableZoomControls$()
    }
    return $DvtControlPanelEvent$$
  };
  dvt.$ControlPanel$.prototype.$_createVBarBackground$ = function $dvt$$ControlPanel$$$$_createVBarBackground$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    var $DvtControlPanelDefaults$$ = this.$getCtx$();
    if($DvtControlPanelEvent$$) {
      var $nVertContentBarChildren_roundedCorner$$ = $DvtControlPanelEvent$$.$getNumChildren$(), $nVertContentBarChildren_roundedCorner$$ = 1 < $nVertContentBarChildren_roundedCorner$$ || this.$_zoomToFitButton$ == $JSCompiler_alias_NULL$$ || 1 < $DvtPanControl$$ || 0 < $DvtPanControl$$ && 1 == $nVertContentBarChildren_roundedCorner$$, $openside$$ = $JSCompiler_alias_NULL$$;
      this.$_styleMap$ && this.$_styleMap$[dvt.$ControlPanel$.$CP_PANEL_DRAWER_STYLES$] && ($openside$$ = 0 < $DvtPanControl$$ ? dvt.$ControlPanelLAFUtils$.$OPEN_TOP$ : dvt.$ControlPanelLAFUtils$.$OPEN_RIGHT$);
      $DvtControlPanelEventManager$$ = dvt.$ButtonLAFUtils$.$_getDimForced$($DvtControlPanelDefaults$$, $DvtControlPanelEventManager$$);
      $DropdownItemSprite$$ += 4;
      $DropdownItemSprite$$ = $nVertContentBarChildren_roundedCorner$$ ? $DropdownItemSprite$$ : Math.max($DvtControlPanelEventManager$$.$h$, $DropdownItemSprite$$);
      $DvtControlPanelEventManager$$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$.vbar, dvt.$ControlPanel$.$CP_PADDING_BOTTOM$, 0);
      $DropdownItemSprite$$ += $DvtControlPanelEventManager$$;
      $DvtControlPanelEventManager$$ = dvt.$ControlPanelLAFUtils$.$renderEmptyZoomShape$($DvtControlPanelDefaults$$, $DropdownItemSprite$$, this.$_styleMap$, $openside$$, this.$getViewPanelHeight$());
      $DvtControlPanelDefaults$$ = dvt.$ControlPanelLAFUtils$.$renderEmptyZoomFrame$($DvtControlPanelDefaults$$, $DropdownItemSprite$$, $nVertContentBarChildren_roundedCorner$$, this.$_styleMap$, $openside$$, this.$getViewPanelHeight$());
      $DvtControlPanelEventManager$$.$setTranslate$($DvtControlPanelEvent$$.$getTranslateX$(), $DvtControlPanelEvent$$.$getTranslateY$());
      this.$_background$.$addChild$($DvtControlPanelEventManager$$);
      $DvtControlPanelEvent$$.$addChildAt$($DvtControlPanelDefaults$$, 0)
    }
  };
  dvt.$ControlPanel$.prototype.$_positionVBarElements$ = function $dvt$$ControlPanel$$$$_positionVBarElements$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = this.$getCtx$(), $DropdownItemSprite$$ = dvt.$Agent$.$isRightToLeft$($DvtPanControl$$), $DvtControlPanelDefaults$$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0);
    !this.$_additionalContent$ && 0 == (this.$_controls$ & dvt.$ControlPanel$.$CONTROLS_CENTER_BUTTON$) ? $DropdownItemSprite$$ ? ($DvtControlPanelEventManager$$.$setTranslateX$(0 - $DvtControlPanelEventManager$$.$getTranslateX$()), $DvtControlPanelEventManager$$.$setTranslateY$(0), $DvtControlPanelEvent$$ && ($DvtControlPanelEventManager$$.$setTranslateX$($DvtControlPanelEventManager$$.$getTranslateX$() - $DvtControlPanelDefaults$$), $DvtControlPanelEvent$$.$setTranslateY$(0))) : $DvtControlPanelEvent$$ ? 
    ($DvtPanControl$$ = this.$getViewPanelWidth$(), $DvtControlPanelEvent$$.$setTranslate$(0, 0), $DvtControlPanelEventManager$$.$setTranslate$($DvtControlPanelEventManager$$.$getTranslateX$() + $DvtPanControl$$, 0)) : $DvtControlPanelEventManager$$.$setTranslate$($DvtControlPanelEventManager$$.$getTranslateX$(), 0) : $DropdownItemSprite$$ && $DvtControlPanelEvent$$ && ($DvtPanControl$$ = dvt.$ButtonLAFUtils$.$_getDimForced$($DvtPanControl$$, $DvtControlPanelEventManager$$), $DropdownItemSprite$$ = 
    this.$getViewPanelWidth$(), $DvtControlPanelEventManager$$.$setTranslateX$(0), $DvtControlPanelEvent$$.$setTranslateX$($DvtPanControl$$.$w$ + $DvtPanControl$$.x - $DropdownItemSprite$$))
  };
  dvt.$ControlPanel$.prototype.$_createHBarPanControl$ = function $dvt$$ControlPanel$$$$_createHBarPanControl$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = this.$getCtx$(), $DropdownItemSprite$$ = this.$isSingleHorzRow$();
    0 != (this.$_controls$ & dvt.$ControlPanel$.$CONTROLS_CENTER_BUTTON$) && (this.$_panControl$ = dvt.$ButtonLAFUtils$.$createPanControl$($DvtPanControl$$, this.$_panZoomCanvas$, this.$_controls$, this.$_buttonImages$, this.$_styleMap$), $DropdownItemSprite$$ && (this.$_panControlUnderlay$ = dvt.$ButtonLAFUtils$.$createPanButtonUnderlay$($DvtPanControl$$, this.$_styleMap$), this.$_panControlUnderlay2$ = dvt.$ButtonLAFUtils$.$createPanButtonUnderlay$($DvtPanControl$$, this.$_styleMap$), $DvtControlPanelEventManager$$.$addChild$(this.$_panControlUnderlay2$), 
    $DvtControlPanelEventManager$$.$addChild$(this.$_panControlUnderlay$)), $DvtControlPanelEventManager$$.$addChild$(this.$_panControl$), $DvtControlPanelEvent$$++);
    return $DvtControlPanelEvent$$
  };
  dvt.$ControlPanel$.prototype.$_createHBarAdditionalContent$ = function $dvt$$ControlPanel$$$$_createHBarAdditionalContent$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.$_additionalContent$ = new dvt.$Container$(this.$getCtx$());
    this.$PopulateHorzContentBar$(this.$_additionalContent$);
    0 < this.$_additionalContent$.$getNumChildren$() ? ($DvtControlPanelEventManager$$.$addChild$(this.$_additionalContent$), $DvtControlPanelEvent$$++) : this.$_additionalContent$ = $JSCompiler_alias_NULL$$;
    return $DvtControlPanelEvent$$
  };
  dvt.$ControlPanel$.prototype.$_createHBarCollapseButton$ = function $dvt$$ControlPanel$$$$_createHBarCollapseButton$$($DvtControlPanelEventManager$$) {
    this.$_collapseButton$ = dvt.$ButtonLAFUtils$.$createCollapseButton$(this.$getCtx$(), this.$_buttonImages$, this.$getViewPanelHeight$(), this.$_styleMap$, dvt.$Agent$.$isRightToLeft$(this.$getCtx$()) ? dvt.$ButtonLAFUtils$.$DIR_RIGHT$ : dvt.$ButtonLAFUtils$.$DIR_LEFT$);
    this.$_collapseButton$.$setCallback$(this.$HandleCollapseClick$, this);
    this.$_collapseButton$.$setTooltip$(dvt.$Bundle$.$getTranslatedString$(dvt.$Bundle$.$SUBCOMPONENT_PREFIX$, "CONTROL_PANEL"));
    this.$_eventManager$.$associate$(this.$_collapseButton$, this.$_collapseButton$);
    $DvtControlPanelEventManager$$.$addChild$(this.$_collapseButton$)
  };
  dvt.$ControlPanel$.prototype.$_positionHBarElements$ = function $dvt$$ControlPanel$$$$_positionHBarElements$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = this.$_context$, $DropdownItemSprite$$ = $JSCompiler_alias_NULL$$, $DvtControlPanelDefaults$$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0), $buttonWidth$$4$$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$ControlPanel$.$CP_BUTTON_WIDTH$, 0), $panelWidth$$ = this.$getViewPanelWidth$(), $panelHeight$$ = this.$getViewPanelHeight$(), $buttonPaddingSide$$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$.hbar, dvt.$ControlPanel$.$CP_PADDING_LEFT$, 
    0), $buttonPaddingInner$$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$.hbar, dvt.$ControlPanel$.$CP_PADDING_INNER$, 0);
    $DvtControlPanelEventManager$$ ? (this.$_collapseButton$.$setTranslateX$(0), $DvtControlPanelEvent$$ += $DvtControlPanelDefaults$$, this.$_additionalContent$ && ($DropdownItemSprite$$ = dvt.$ButtonLAFUtils$.$_getDimForced$($DvtPanControl$$, this.$_additionalContent$), $DvtControlPanelEvent$$ += $buttonPaddingInner$$, this.$_additionalContent$.$setTranslate$($DvtControlPanelEvent$$, ($panelHeight$$ - $DropdownItemSprite$$.$h$) / 2), $DvtControlPanelEvent$$ += Math.max($DropdownItemSprite$$.$w$, 
    $buttonWidth$$4$$)), this.$_panControl$ && ($DvtControlPanelEvent$$ += $buttonPaddingInner$$, $DropdownItemSprite$$ = 3.5, this.$_panControl$.$setTranslate$($DvtControlPanelEvent$$, $DropdownItemSprite$$), this.$_panControlUnderlay$ && this.$_panControlUnderlay$.$setTranslate$($DvtControlPanelEvent$$, $DropdownItemSprite$$), this.$_panControlUnderlay2$ && this.$_panControlUnderlay2$.$setTranslate$($DvtControlPanelEvent$$, $DropdownItemSprite$$), $DropdownItemSprite$$ = dvt.$ButtonLAFUtils$.$_getDimForced$($DvtPanControl$$, 
    this.$_panControl$), $DvtControlPanelEvent$$ += $DropdownItemSprite$$.$w$), $DvtControlPanelEvent$$ += $buttonPaddingSide$$) : (this.$_panControl$ && ($DvtControlPanelEvent$$ += $buttonPaddingSide$$, $DropdownItemSprite$$ = 3.5, this.$_panControl$.$setTranslate$($buttonPaddingSide$$, $DropdownItemSprite$$), this.$_panControlUnderlay$ && this.$_panControlUnderlay$.$setTranslate$($buttonPaddingSide$$, $DropdownItemSprite$$), this.$_panControlUnderlay2$ && this.$_panControlUnderlay2$.$setTranslate$($buttonPaddingSide$$, 
    $DropdownItemSprite$$), $DropdownItemSprite$$ = dvt.$ButtonLAFUtils$.$_getDimForced$($DvtPanControl$$, this.$_panControl$), $DvtControlPanelEvent$$ += $buttonPaddingInner$$ + $DropdownItemSprite$$.$w$, $DvtControlPanelEvent$$ += 1), this.$_additionalContent$ && ($DropdownItemSprite$$ = dvt.$ButtonLAFUtils$.$_getDimForced$($DvtPanControl$$, this.$_additionalContent$), 0 == $DvtControlPanelEvent$$ && ($DvtControlPanelEvent$$ += $buttonPaddingSide$$), this.$_additionalContent$.$setTranslate$($DvtControlPanelEvent$$, 
    ($panelHeight$$ - $DropdownItemSprite$$.$h$) / 2), $DvtControlPanelEvent$$ += $DropdownItemSprite$$.$w$, $DvtControlPanelEvent$$ = Math.max($DvtControlPanelEvent$$ + $buttonPaddingInner$$, $panelWidth$$)), this.$_collapseButton$.$setTranslateX$($DvtControlPanelEvent$$), $DvtControlPanelEvent$$ += $DvtControlPanelDefaults$$);
    return $DvtControlPanelEvent$$
  };
  dvt.$ControlPanel$.prototype.$_createHBarBackground$ = function $dvt$$ControlPanel$$$$_createHBarBackground$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    var $context$$278$$ = this.$_context$, $buttonWidth$$5_viewFrame$$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0), $panelWidth$$1$$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$ControlPanel$.$CP_TAB_SIZE$, 0), $panelDrawerStyle$$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$ControlPanel$.$CP_PANEL_DRAWER_STYLES$, $JSCompiler_alias_NULL$$);
    $DvtControlPanelDefaults$$ = $panelDrawerStyle$$ ? $DvtControlPanelDefaults$$ : $DvtControlPanelDefaults$$ - $buttonWidth$$5_viewFrame$$;
    var $backgroundHeight$$1$$ = this.$getViewPanelHeight$(), $backgroundFrameOffsetX$$ = 0, $backgroundShapeOffsetX$$ = 0;
    $panelDrawerStyle$$ ? $panelDrawerStyle$$ && 0 == $DvtPanControl$$ && ($backgroundShapeOffsetX$$ = $DropdownItemSprite$$ ? -$panelWidth$$1$$ : $panelWidth$$1$$) : ($backgroundFrameOffsetX$$ = $DropdownItemSprite$$ ? $buttonWidth$$5_viewFrame$$ : 0, $backgroundShapeOffsetX$$ = $DropdownItemSprite$$ ? $buttonWidth$$5_viewFrame$$ : 0);
    if(0 < $DvtPanControl$$ || $panelDrawerStyle$$) {
      var $r$$37_viewShape$$ = $buttonWidth$$5_viewFrame$$ = $JSCompiler_alias_NULL$$, $r$$37_viewShape$$ = parseInt(dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$CSSStyle$.$BORDER_RADIUS$, 0));
      $panelDrawerStyle$$ ? ($DvtControlPanelEvent$$ = 0 < $DvtPanControl$$ && $DvtControlPanelEvent$$ != $JSCompiler_alias_NULL$$ ? dvt.$ControlPanelLAFUtils$.$OPEN_BOTTOM$ : dvt.$ControlPanelLAFUtils$.$OPEN_LEFT$, $buttonWidth$$5_viewFrame$$ = dvt.$ControlPanelLAFUtils$.$makeViewOpenShapeHelperOpenSide$($context$$278$$, $r$$37_viewShape$$, $DvtControlPanelDefaults$$, $backgroundHeight$$1$$, $DvtControlPanelEvent$$, $panelWidth$$1$$), $r$$37_viewShape$$ = dvt.$ControlPanelLAFUtils$.$makeViewOpenShapeHelperOpenSide$($context$$278$$, 
      $r$$37_viewShape$$, $DvtControlPanelDefaults$$, $backgroundHeight$$1$$, $DvtControlPanelEvent$$, $panelWidth$$1$$)) : ($buttonWidth$$5_viewFrame$$ = dvt.$ControlPanelLAFUtils$.$createEmptyViewOpenShape$($context$$278$$, $DvtControlPanelDefaults$$, this.$getViewPanelHeight$(), !$DropdownItemSprite$$, this.$_styleMap$), $r$$37_viewShape$$ = dvt.$ControlPanelLAFUtils$.$createEmptyViewOpenShape$($context$$278$$, $DvtControlPanelDefaults$$, this.$getViewPanelHeight$(), !$DropdownItemSprite$$, this.$_styleMap$));
      $buttonWidth$$5_viewFrame$$.$setSolidStroke$(dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$CSSStyle$.$BORDER_COLOR$, $JSCompiler_alias_NULL$$));
      $buttonWidth$$5_viewFrame$$.$setFill$($JSCompiler_alias_NULL$$);
      $buttonWidth$$5_viewFrame$$.$setTranslate$($DvtControlPanelEventManager$$.$getTranslateX$() + $backgroundFrameOffsetX$$, $DvtControlPanelEventManager$$.$getTranslateY$());
      $DvtControlPanelEventManager$$.$addChildAt$($buttonWidth$$5_viewFrame$$, 0);
      $r$$37_viewShape$$.$setSolidFill$(dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$CSSStyle$.$BACKGROUND_COLOR$, $JSCompiler_alias_NULL$$));
      $r$$37_viewShape$$.$setTranslate$($DvtControlPanelEventManager$$.$getTranslateX$() + $backgroundShapeOffsetX$$, $DvtControlPanelEventManager$$.$getTranslateY$());
      this.$_background$.$addChild$($r$$37_viewShape$$)
    }
  };
  dvt.$ControlPanel$.prototype.$RenderExpanded$ = function $dvt$$ControlPanel$$$$RenderExpanded$$() {
    var $DvtControlPanelEventManager$$ = this.$getCtx$(), $DvtControlPanelEvent$$ = new dvt.$Container$($DvtControlPanelEventManager$$);
    this.$_background$ = new dvt.$Container$($DvtControlPanelEventManager$$);
    this.$_frame$ = new dvt.$Container$($DvtControlPanelEventManager$$);
    $DvtControlPanelEvent$$.$addChild$(this.$_background$);
    $DvtControlPanelEvent$$.$addChild$(this.$_frame$);
    var $DvtPanControl$$ = dvt.$Agent$.$isRightToLeft$($DvtControlPanelEventManager$$), $DropdownItemSprite$$ = 0, $DvtControlPanelDefaults$$ = new dvt.$Container$($DvtControlPanelEventManager$$), $nHorzContentBarChildren$$4$$;
    $nHorzContentBarChildren$$4$$ = this.$_createHBarPanControl$($DvtControlPanelDefaults$$, 0);
    this.$_createHBarCollapseButton$($DvtControlPanelDefaults$$);
    $nHorzContentBarChildren$$4$$ = this.$_createHBarAdditionalContent$($DvtControlPanelDefaults$$, $nHorzContentBarChildren$$4$$);
    var $DropdownItemSprite$$ = this.$_positionHBarElements$($DvtPanControl$$, $DropdownItemSprite$$), $vertContentBar$$5$$ = $JSCompiler_alias_NULL$$, $currY$$16$$ = this.$_getVBarButtonsOffsetY$($nHorzContentBarChildren$$4$$);
    this.$isSingleHorzRow$() && 0 != (this.$_controls$ & dvt.$ControlPanel$.$CONTROLS_CENTER_BUTTON$) && ($currY$$16$$ += dvt.$ControlPanelLAFUtils$.$getViewPanelHeight$() - this.$getViewPanelHeight$());
    if(0 != (this.$_controls$ & dvt.$ControlPanel$.$CONTROLS_ZOOM_TO_FIT_BUTTON$) || 0 != (this.$_controls$ & dvt.$ControlPanel$.$CONTROLS_ZOOM$)) {
      $vertContentBar$$5$$ = new dvt.$Container$($DvtControlPanelEventManager$$), $vertContentBar$$5$$.$setTranslateY$($DvtControlPanelDefaults$$.$getTranslateY$() + this.$getViewPanelHeight$()), $currY$$16$$ = this.$_addZoomToFitButton$($vertContentBar$$5$$, $currY$$16$$), $currY$$16$$ = this.$_addZoomControls$($vertContentBar$$5$$, $currY$$16$$), this.$_frame$.$addChild$($vertContentBar$$5$$)
    }
    this.$_createHBarBackground$($DvtControlPanelDefaults$$, $vertContentBar$$5$$, $nHorzContentBarChildren$$4$$, $DvtPanControl$$, $DropdownItemSprite$$);
    this.$_frame$.$addChild$($DvtControlPanelDefaults$$);
    this.$_positionVBarElements$($DvtControlPanelDefaults$$, $vertContentBar$$5$$);
    this.$_createVBarBackground$($DvtControlPanelDefaults$$, $vertContentBar$$5$$, $nHorzContentBarChildren$$4$$, $currY$$16$$);
    this.$_expandedDim$ = dvt.$ButtonLAFUtils$.$_getDimForced$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$);
    return $DvtControlPanelEvent$$
  };
  dvt.$ControlPanel$.prototype.$PopulateHorzContentBar$ = $JSCompiler_emptyFn$$();
  dvt.$ControlPanel$.prototype.$toggleExpandCollapse$ = function $dvt$$ControlPanel$$$$toggleExpandCollapse$$() {
    this.$_bTransition$ || (this.$_state$ === dvt.$ControlPanel$.$STATE_EXPANDED$ ? this.$_doCollapse$() : this.$_state$ === dvt.$ControlPanel$.$STATE_COLLAPSED$ && this.$_doExpand$())
  };
  dvt.$ControlPanel$.prototype.$HandleExpandClick$ = function $dvt$$ControlPanel$$$$HandleExpandClick$$($DvtControlPanelEventManager$$) {
    dvt.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
    this.$_bTransition$ || (this.$_doExpand$(), this.$_tooltipManager$.$hideTooltip$())
  };
  dvt.$ControlPanel$.prototype.$_doExpand$ = function $dvt$$ControlPanel$$$$_doExpand$$() {
    this.$_bTransition$ = $JSCompiler_alias_TRUE$$;
    this.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    var $DvtControlPanelEventManager$$ = this.$RenderExpanded$();
    this.$addChild$($DvtControlPanelEventManager$$);
    this.$_applyAlphasForMouse$();
    this.$transitionExpand$(this.$getChildAt$(0), $DvtControlPanelEventManager$$);
    this.$fireExpandEvent$()
  };
  dvt.$ControlPanel$.prototype.$_applyAlphasForMouse$ = function $dvt$$ControlPanel$$$$_applyAlphasForMouse$$() {
    var $DvtControlPanelEventManager$$ = $JSCompiler_alias_FALSE$$;
    this.$getCtx$().$_stage$ && ($DvtControlPanelEventManager$$ = $JSCompiler_alias_TRUE$$);
    $DvtControlPanelEventManager$$ ? this.$_applyAlphasRollover$() : this.$_applyAlphasRollout$()
  };
  dvt.$ControlPanel$.prototype.$HandleCollapseClick$ = function $dvt$$ControlPanel$$$$HandleCollapseClick$$($DvtControlPanelEventManager$$) {
    dvt.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$);
    this.$_bTransition$ || this.$_doCollapse$()
  };
  dvt.$ControlPanel$.prototype.$_doCollapse$ = function $dvt$$ControlPanel$$$$_doCollapse$$() {
    this.$_bTransition$ = $JSCompiler_alias_TRUE$$;
    var $DvtControlPanelEventManager$$ = this.$RenderCollapsed$();
    this.$addChild$($DvtControlPanelEventManager$$);
    this.$_applyAlphasForMouse$();
    this.$transitionCollapse$(this.$getChildAt$(0), $DvtControlPanelEventManager$$);
    this.$fireCollapseEvent$()
  };
  dvt.$ControlPanel$.prototype.$transitionExpand$ = function $dvt$$ControlPanel$$$$transitionExpand$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = $DvtControlPanelEventManager$$.$getDimensions$(), $DropdownItemSprite$$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0);
    if($DvtPanControl$$ && 0 != $DvtPanControl$$.$w$) {
      var $DvtControlPanelDefaults$$ = $DvtControlPanelEvent$$.$getDimensions$(), $animator$$108$$ = new dvt.$Animator$(this.$getCtx$(), 0.25);
      $DvtControlPanelEventManager$$.$setAlpha$(1);
      $DvtControlPanelEvent$$.$setAlpha$(0);
      $animator$$108$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEventManager$$, $DvtControlPanelEventManager$$.$getAlpha$, $DvtControlPanelEventManager$$.$setAlpha$, 0);
      $animator$$108$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEvent$$, $DvtControlPanelEvent$$.$getAlpha$, $DvtControlPanelEvent$$.$setAlpha$, 1);
      $DvtControlPanelEvent$$.$setScaleX$($DvtPanControl$$.$w$ / $DvtControlPanelDefaults$$.$w$);
      $animator$$108$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEvent$$, $DvtControlPanelEvent$$.$getScaleX$, $DvtControlPanelEvent$$.$setScaleX$, 1);
      if(dvt.$Agent$.$isRightToLeft$(this.$getCtx$())) {
        $DvtControlPanelEvent$$.$setTranslateX$($DvtControlPanelEventManager$$.$getTranslateX$());
        var $dimWidth$$ = $DvtControlPanelDefaults$$.$w$ + $DvtControlPanelDefaults$$.x;
        $animator$$108$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEvent$$, $DvtControlPanelEvent$$.$getTranslateX$, $DvtControlPanelEvent$$.$setTranslateX$, $DvtControlPanelEventManager$$.$getTranslateX$() + $DropdownItemSprite$$ - $dimWidth$$)
      }
      $DvtControlPanelEvent$$.$setScaleY$($DvtPanControl$$.$h$ / $DvtControlPanelDefaults$$.$h$);
      $animator$$108$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEvent$$, $DvtControlPanelEvent$$.$getScaleY$, $DvtControlPanelEvent$$.$setScaleY$, 1);
      $animator$$108$$.$setOnEnd$(function() {
        $DvtControlPanelEventManager$$.getParent().removeChild($DvtControlPanelEventManager$$);
        this.$_bTransition$ = $JSCompiler_alias_FALSE$$;
        this.$setMouseEnabled$($JSCompiler_alias_TRUE$$);
        this.$_state$ = dvt.$ControlPanel$.$STATE_EXPANDED$
      }, this);
      $animator$$108$$.play()
    }else {
      this.$_state$ = dvt.$ControlPanel$.$STATE_EXPANDED$, $DvtControlPanelEventManager$$.getParent().removeChild($DvtControlPanelEventManager$$), this.$PositionExpanded$($DvtControlPanelEvent$$)
    }
  };
  dvt.$ControlPanel$.prototype.$PositionExpanded$ = function $dvt$$ControlPanel$$$$PositionExpanded$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$;
    if(dvt.$Agent$.$isRightToLeft$(this.$getCtx$())) {
      $DvtControlPanelEvent$$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0);
      var $DvtPanControl$$ = dvt.$DisplayableUtils$.$getDimensionsForced$(this.$getCtx$(), $DvtControlPanelEventManager$$);
      $DvtControlPanelEvent$$ -= Math.floor($DvtPanControl$$.$w$ + $DvtPanControl$$.x)
    }else {
      $DvtControlPanelEvent$$ = 0
    }
    $DvtControlPanelEventManager$$.$setTranslate$($DvtControlPanelEvent$$, 0)
  };
  dvt.$ControlPanel$.prototype.$transitionCollapse$ = function $dvt$$ControlPanel$$$$transitionCollapse$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = new dvt.$Animator$(this.$getCtx$(), 0.25);
    $DvtControlPanelEventManager$$.$setAlpha$(1);
    $DvtControlPanelEvent$$.$setAlpha$(0);
    $DvtPanControl$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEventManager$$, $DvtControlPanelEventManager$$.$getAlpha$, $DvtControlPanelEventManager$$.$setAlpha$, 0);
    $DvtPanControl$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEvent$$, $DvtControlPanelEvent$$.$getAlpha$, $DvtControlPanelEvent$$.$setAlpha$, 1);
    var $DropdownItemSprite$$ = this.$_collapsedDim$, $DvtControlPanelDefaults$$ = this.$_expandedDim$;
    $DvtPanControl$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEventManager$$, $DvtControlPanelEventManager$$.$getScaleX$, $DvtControlPanelEventManager$$.$setScaleX$, $DropdownItemSprite$$.$w$ / $DvtControlPanelDefaults$$.$w$);
    dvt.$Agent$.$isRightToLeft$(this.$getCtx$()) && $DvtPanControl$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEventManager$$, $DvtControlPanelEventManager$$.$getTranslateX$, $DvtControlPanelEventManager$$.$setTranslateX$, $DvtControlPanelEvent$$.$getTranslateX$());
    $DvtPanControl$$.$addProp$(dvt.$Animator$.$TYPE_NUMBER$, $DvtControlPanelEventManager$$, $DvtControlPanelEventManager$$.$getScaleY$, $DvtControlPanelEventManager$$.$setScaleY$, $DropdownItemSprite$$.$h$ / $DvtControlPanelDefaults$$.$h$);
    $DvtPanControl$$.$setOnEnd$(function() {
      $DvtControlPanelEventManager$$.getParent().removeChild($DvtControlPanelEventManager$$);
      this.$_bTransition$ = $JSCompiler_alias_FALSE$$;
      this.$_state$ = dvt.$ControlPanel$.$STATE_COLLAPSED$
    }, this);
    $DvtPanControl$$.play()
  };
  dvt.$ControlPanel$.prototype.$fireExpandEvent$ = function $dvt$$ControlPanel$$$$fireExpandEvent$$() {
    var $DvtControlPanelEventManager$$ = new $DvtControlPanelEvent$$($DvtControlPanelEvent$$.$SUBTYPE_SHOW$);
    this.$FireListener$($DvtControlPanelEventManager$$)
  };
  dvt.$ControlPanel$.prototype.$fireCollapseEvent$ = function $dvt$$ControlPanel$$$$fireCollapseEvent$$() {
    var $DvtControlPanelEventManager$$ = new $DvtControlPanelEvent$$($DvtControlPanelEvent$$.$SUBTYPE_HIDE$);
    this.$FireListener$($DvtControlPanelEventManager$$)
  };
  dvt.$ControlPanel$.prototype.$HandleRollOver$ = function $dvt$$ControlPanel$$$$HandleRollOver$$() {
    this.$_bMouseOver$ = $JSCompiler_alias_TRUE$$;
    this.$_bMouseDragPanning$ || this.$_applyAlphasRollover$()
  };
  dvt.$ControlPanel$.prototype.$HandleRollOut$ = function $dvt$$ControlPanel$$$$HandleRollOut$$() {
    this.$_bMouseOver$ = $JSCompiler_alias_FALSE$$;
    this.$_bMouseDragPanning$ || this.$_applyAlphasRollout$()
  };
  dvt.$ControlPanel$.prototype.$_applyAlphasRollover$ = function $dvt$$ControlPanel$$$$_applyAlphasRollover$$() {
    this.$_background$.$setAlpha$(this.$_styleMap$[dvt.$ControlPanel$.$BG_ROLLOVER_ALPHA$]);
    this.$_frame$.$setAlpha$(this.$_styleMap$[dvt.$ControlPanel$.$FRAME_ROLLOVER_ALPHA$]);
    this.$_panControlUnderlay$ && this.$_panControlUnderlay$.$setAlpha$(this.$_styleMap$[dvt.$ControlPanel$.$BG_ROLLOVER_ALPHA$])
  };
  dvt.$ControlPanel$.prototype.$_applyAlphasRollout$ = function $dvt$$ControlPanel$$$$_applyAlphasRollout$$() {
    this.$_background$.$setAlpha$(this.$_bgAlpha$);
    this.$_frame$.$setAlpha$(this.$_styleMap$[dvt.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$]);
    this.$_panControlUnderlay$ && this.$_panControlUnderlay$.$setAlpha$(this.$_bgAlpha$)
  };
  dvt.$ControlPanel$.prototype.$getDimensions$ = function $dvt$$ControlPanel$$$$getDimensions$$() {
    this.$_dim$ || (this.$_dim$ = dvt.$ControlPanel$.$superclass$.$getDimensions$.call(this));
    return this.$_dim$
  };
  dvt.$ControlPanel$.prototype.$renderComponent$ = function $dvt$$ControlPanel$$$$renderComponent$$() {
    var $DvtControlPanelEventManager$$;
    this.$_state$ == dvt.$ControlPanel$.$STATE_COLLAPSED$ ? $DvtControlPanelEventManager$$ = this.$RenderCollapsed$() : ($DvtControlPanelEventManager$$ = this.$RenderExpanded$(), this.$PositionExpanded$($DvtControlPanelEventManager$$));
    this.$_background$.$setAlpha$(this.$_bgAlpha$);
    this.$_frame$.$setAlpha$(this.$_styleMap$[dvt.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$]);
    this.$addChild$($DvtControlPanelEventManager$$)
  };
  dvt.$ControlPanel$.prototype.$getButtonImages$ = $JSCompiler_get$$("$_buttonImages$");
  dvt.$ControlPanel$.prototype.$_getVBarButtonsOffsetY$ = function $dvt$$ControlPanel$$$$_getVBarButtonsOffsetY$$($DvtControlPanelEventManager$$) {
    return this.$_controls$ & dvt.$ControlPanel$.$CONTROLS_CENTER_BUTTON$ || this.$_styleMap$ && this.$_styleMap$[dvt.$ControlPanel$.$CP_PANEL_DRAWER_STYLES$] && 0 == $DvtControlPanelEventManager$$ ? dvt.$StyleUtils$.$getStyle$(this.$_styleMap$.vbar, dvt.$ControlPanel$.$CP_PADDING_TOP$, 0) : 0
  };
  dvt.$ControlPanel$.prototype.$enableZoomControls$ = function $dvt$$ControlPanel$$$$enableZoomControls$$() {
    var $DvtControlPanelEventManager$$ = this.$_panZoomCanvas$.$getZoom$(), $DvtControlPanelEvent$$ = this.$_panZoomCanvas$.$getNextZoomLevel$($DvtControlPanelEventManager$$), $DvtPanControl$$ = this.$_panZoomCanvas$.$getPrevZoomLevel$($DvtControlPanelEventManager$$);
    this.$_zoomInButton$ && this.$_zoomInButton$.$setEnabled$($DvtControlPanelEventManager$$ != $DvtControlPanelEvent$$);
    this.$_zoomOutButton$ && this.$_zoomOutButton$.$setEnabled$($DvtControlPanelEventManager$$ != $DvtPanControl$$)
  };
  dvt.$ControlPanel$.prototype.$enableZoomInControl$ = function $dvt$$ControlPanel$$$$enableZoomInControl$$($DvtControlPanelEventManager$$) {
    this.$_zoomInButton$ && this.$_zoomInButton$.$setEnabled$($DvtControlPanelEventManager$$)
  };
  dvt.$ControlPanel$.prototype.$enableZoomOutControl$ = function $dvt$$ControlPanel$$$$enableZoomOutControl$$($DvtControlPanelEventManager$$) {
    this.$_zoomOutButton$ && this.$_zoomOutButton$.$setEnabled$($DvtControlPanelEventManager$$)
  };
  dvt.$ControlPanel$.prototype.$HandleZoomInClick$ = function $dvt$$ControlPanel$$$$HandleZoomInClick$$() {
    var $DvtControlPanelEventManager$$ = this.$_panZoomCanvas$.$getZoom$(), $DvtControlPanelEventManager$$ = this.$_panZoomCanvas$.$getNextZoomLevel$($DvtControlPanelEventManager$$), $DvtControlPanelEvent$$ = new dvt.$Animator$(this.$getCtx$(), this.$_panZoomCanvas$.$getAnimationDuration$());
    this.$_panZoomCanvas$.$zoomTo$($DvtControlPanelEventManager$$, $JSCompiler_alias_VOID$$, $JSCompiler_alias_VOID$$, $DvtControlPanelEvent$$);
    $DvtControlPanelEvent$$.play()
  };
  dvt.$ControlPanel$.prototype.$HandleZoomOutClick$ = function $dvt$$ControlPanel$$$$HandleZoomOutClick$$() {
    var $DvtControlPanelEventManager$$ = this.$_panZoomCanvas$.$getZoom$(), $DvtControlPanelEventManager$$ = this.$_panZoomCanvas$.$getPrevZoomLevel$($DvtControlPanelEventManager$$), $DvtControlPanelEvent$$ = new dvt.$Animator$(this.$getCtx$(), this.$_panZoomCanvas$.$getAnimationDuration$());
    this.$_panZoomCanvas$.$zoomTo$($DvtControlPanelEventManager$$, $JSCompiler_alias_VOID$$, $JSCompiler_alias_VOID$$, $DvtControlPanelEvent$$);
    $DvtControlPanelEvent$$.play()
  };
  dvt.$ControlPanel$.prototype.$HandleZoomToFitClick$ = function $dvt$$ControlPanel$$$$HandleZoomToFitClick$$() {
    var $DvtControlPanelEventManager$$ = new dvt.$Animator$(this.$getCtx$(), this.$_panZoomCanvas$.$getAnimationDuration$());
    this.$_panZoomCanvas$.$zoomToFit$($DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$.play()
  };
  dvt.$ControlPanel$.prototype.$getEventManager$ = $JSCompiler_get$$("$_eventManager$");
  dvt.$ControlPanel$.prototype.$isDisclosed$ = function $dvt$$ControlPanel$$$$isDisclosed$$() {
    return this.$_state$ == dvt.$ControlPanel$.$STATE_EXPANDED$
  };
  dvt.$ControlPanel$.prototype.$getActionDisplayable$ = function $dvt$$ControlPanel$$$$getActionDisplayable$$($DvtControlPanelEventManager$$) {
    if("disclosure" == $DvtControlPanelEventManager$$) {
      return this.$isDisclosed$() ? this.$_collapseButton$ : this.$_expandButton$
    }
    if(this.$isDisclosed$()) {
      if("zoomToFit" == $DvtControlPanelEventManager$$ && this.$_zoomToFitButton$ && this.$_zoomToFitButton$.isEnabled()) {
        return this.$_zoomToFitButton$
      }
      if("zoomIn" == $DvtControlPanelEventManager$$ && this.$_zoomInButton$ && this.$_zoomInButton$.isEnabled()) {
        return this.$_zoomInButton$
      }
      if("zoomOut" == $DvtControlPanelEventManager$$ && this.$_zoomOutButton$ && this.$_zoomOutButton$.isEnabled()) {
        return this.$_zoomOutButton$
      }
    }
    return $JSCompiler_alias_NULL$$
  };
  var $DvtControlPanelDefaults$$ = {};
  dvt.$Obj$.$createSubclass$($DvtControlPanelDefaults$$, dvt.$Obj$);
  $DvtControlPanelDefaults$$.$SKIN_ALTA$ = {"fill-type":"solid", backgroundAlpha:1, backgroundDragAlpha:1, borderDragAlpha:1, panelDrawerStyles:$JSCompiler_alias_TRUE$$, buttonWidth:42, buttonHeight:42, buttonRadius:0, openCloseButtonWidth:42, tabSize:42, paddingTop:15, paddingSide:-1, imageWidth:24, imageHeight:24, centerButtonDisplayed:$JSCompiler_alias_FALSE$$, scrollbarBackground:"linear-gradient(bottom, #dce2e7 0%, #f8f8f8 8%)", scrollbarBorderColor:"#dce2e7", scrollbarHandleColor:"#abb0b4", 
  scrollbarHandleHoverColor:"#333333", scrollbarHandleActiveColor:"#333333", comboBox:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0, itemHeight:30, imagePadding:0, itemPadding:10}, vbar:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0}, hbar:{paddingTop:0, paddingBottom:0, paddingLeft:0, paddingRight:0, paddingInner:0}};
  $DvtControlPanelDefaults$$.$SKIN_SKYROS$ = {"fill-type":"solid"};
  $DvtControlPanelDefaults$$.$DEFAULT$ = {"fill-type":"gradient", "border-color":"#ffffff", "background-color":"#ffffff", "border-radius":6, backgroundAlpha:0.5, backgroundHoverAlpha:1, backgroundDragAlpha:0.5, borderAlpha:1, borderHoverAlpha:1, borderDragAlpha:0.5, tabSize:26, buttonWidth:22, buttonHeight:22, buttonRadius:3, paddingTop:5, paddingSide:5, imageWidth:22, imageHeight:20, openCloseButtonWidth:10, centerButtonDisplayed:$JSCompiler_alias_TRUE$$, comboBox:{paddingTop:2, paddingBottom:6, 
  paddingLeft:3, paddingRight:3, paddingInner:2, itemHeight:22, radius:4, imagePadding:2, itemPadding:7}, vbar:{paddingTop:2.5, paddingBottom:2.5, paddingLeft:2, paddingRight:2, paddingInner:2}, hbar:{paddingTop:2, paddingBottom:2, paddingLeft:3, paddingRight:3, paddingInner:2}};
  $DvtControlPanelDefaults$$.$calcOptions$ = function $$DvtControlPanelDefaults$$$$calcOptions$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = $DvtControlPanelDefaults$$.$_getDefaults$($DvtControlPanelEventManager$$);
    return $DvtControlPanelEventManager$$ ? dvt.$JsonUtils$.$merge$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) : $DvtControlPanelEvent$$
  };
  $DvtControlPanelDefaults$$.$_getDefaults$ = function $$DvtControlPanelDefaults$$$$_getDefaults$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = $JSCompiler_alias_NULL$$;
    return $DvtControlPanelEvent$$ = $DvtControlPanelEventManager$$ && "skyros" === $DvtControlPanelEventManager$$.skin ? dvt.$JsonUtils$.$merge$($DvtControlPanelDefaults$$.$SKIN_SKYROS$, $DvtControlPanelDefaults$$.$DEFAULT$) : $DvtControlPanelEventManager$$ && "alta" === $DvtControlPanelEventManager$$.skin ? dvt.$JsonUtils$.$merge$($DvtControlPanelDefaults$$.$SKIN_ALTA$, $DvtControlPanelDefaults$$.$DEFAULT$) : dvt.$JsonUtils$.$clone$($DvtControlPanelDefaults$$.$DEFAULT$)
  };
  dvt.$Obj$.$createSubclass$($DvtControlPanelEventManager$$, dvt.$EventManager$);
  $DvtControlPanelEventManager$$.prototype.$OnMouseDown$ = function $$DvtControlPanelEventManager$$$$$OnMouseDown$$($DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($DvtControlPanelEvent$$));
    $DvtControlPanelEventManager$$.$superclass$.$OnMouseDown$.call(this, $DvtControlPanelEvent$$);
    $DvtPanControl$$ && ($DvtPanControl$$.$HandleMouseDown$ && $DvtPanControl$$.$HandleMouseDown$($DvtControlPanelEvent$$), $DvtControlPanelEvent$$.stopPropagation())
  };
  $DvtControlPanelEventManager$$.prototype.$OnMouseUp$ = function $$DvtControlPanelEventManager$$$$$OnMouseUp$$($DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($DvtControlPanelEvent$$));
    $DvtControlPanelEventManager$$.$superclass$.$OnMouseUp$.call(this, $DvtControlPanelEvent$$);
    $DvtPanControl$$ && ($DvtPanControl$$.$HandleMouseUp$ && $DvtPanControl$$.$HandleMouseUp$(), $DvtControlPanelEvent$$.stopPropagation())
  };
  $DvtControlPanelEventManager$$.prototype.$OnMouseOut$ = function $$DvtControlPanelEventManager$$$$$OnMouseOut$$($DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($DvtControlPanelEvent$$));
    $DvtControlPanelEventManager$$.$superclass$.$OnMouseOut$.call(this, $DvtControlPanelEvent$$);
    $DvtPanControl$$ && ($DvtPanControl$$.$HandleMouseOut$ && $DvtPanControl$$.$HandleMouseOut$(), $DvtControlPanelEvent$$.stopPropagation())
  };
  $DvtControlPanelEventManager$$.prototype.$OnClick$ = function $$DvtControlPanelEventManager$$$$$OnClick$$($DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($DvtControlPanelEvent$$));
    $DvtControlPanelEventManager$$.$superclass$.$OnClick$.call(this, $DvtControlPanelEvent$$);
    $DvtPanControl$$ && ($DvtPanControl$$.$HandleClick$ && $DvtPanControl$$.$HandleClick$($DvtControlPanelEvent$$), $DvtControlPanelEvent$$.stopPropagation())
  };
  $DvtControlPanelEventManager$$.prototype.$OnRollOver$ = function $$DvtControlPanelEventManager$$$$$OnRollOver$$($DvtControlPanelEvent$$) {
    $DvtControlPanelEventManager$$.$superclass$.$OnRollOver$.call(this, $DvtControlPanelEvent$$);
    var $DvtPanControl$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($DvtControlPanelEvent$$));
    $DvtPanControl$$ && $DvtPanControl$$.$HandleRollOver$ && $DvtPanControl$$.$HandleRollOver$($DvtControlPanelEvent$$)
  };
  $DvtControlPanelEventManager$$.prototype.$OnRollOut$ = function $$DvtControlPanelEventManager$$$$$OnRollOut$$($DvtControlPanelEvent$$) {
    $DvtControlPanelEventManager$$.$superclass$.$OnRollOut$.call(this, $DvtControlPanelEvent$$);
    var $DvtPanControl$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($DvtControlPanelEvent$$));
    $DvtPanControl$$ && $DvtPanControl$$.$HandleRollOut$ && $DvtPanControl$$.$HandleRollOut$($DvtControlPanelEvent$$)
  };
  $DvtControlPanelEventManager$$.prototype.$OnComponentTouchClick$ = function $$DvtControlPanelEventManager$$$$$OnComponentTouchClick$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = this.$GetLogicalObject$(this.$GetCurrentTargetForEvent$($DvtControlPanelEventManager$$));
    $DvtControlPanelEvent$$ && ($DvtControlPanelEvent$$.$HandleClick$ && $DvtControlPanelEvent$$.$HandleClick$($DvtControlPanelEventManager$$), $DvtControlPanelEventManager$$.stopPropagation())
  };
  $DvtControlPanelEventManager$$.prototype.$HandleImmediateTouchStartInternal$ = function $$DvtControlPanelEventManager$$$$$HandleImmediateTouchStartInternal$$($DvtControlPanelEventManager$$) {
    $DvtControlPanelEventManager$$.$blockTouchHold$();
    dvt.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$)
  };
  dvt.$ControlPanelLAFUtils$ = {};
  dvt.$Obj$.$createSubclass$(dvt.$ControlPanelLAFUtils$, dvt.$Obj$);
  dvt.$ControlPanelLAFUtils$.$OPEN_TOP$ = "top";
  dvt.$ControlPanelLAFUtils$.$OPEN_RIGHT$ = "right";
  dvt.$ControlPanelLAFUtils$.$OPEN_LEFT$ = "left";
  dvt.$ControlPanelLAFUtils$.$OPEN_BOTTOM$ = "bottom";
  dvt.$ControlPanelLAFUtils$.$VIEW_PANEL_HEIGHT$ = 47;
  dvt.$ControlPanelLAFUtils$.$VIEW_PANEL_HALF_HEIGHT$ = 26;
  dvt.$ControlPanelLAFUtils$.$SIN_PI_4$ = Math.sin(Math.PI / 4);
  dvt.$ControlPanelLAFUtils$.$TAN_PI_8$ = Math.tan(Math.PI / 8);
  dvt.$ControlPanelLAFUtils$.$getViewPanelHeight$ = function $dvt$$ControlPanelLAFUtils$$$getViewPanelHeight$$() {
    return dvt.$ControlPanelLAFUtils$.$VIEW_PANEL_HEIGHT$
  };
  dvt.$ControlPanelLAFUtils$.$getViewPanelHalfHeight$ = function $dvt$$ControlPanelLAFUtils$$$getViewPanelHalfHeight$$() {
    return dvt.$ControlPanelLAFUtils$.$VIEW_PANEL_HALF_HEIGHT$
  };
  dvt.$ControlPanelLAFUtils$.$createEmptyViewOpenShape$ = function $dvt$$ControlPanelLAFUtils$$$createEmptyViewOpenShape$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    $DvtControlPanelEvent$$ || ($DvtControlPanelEvent$$ = 86);
    $DvtPanControl$$ || ($DvtPanControl$$ = 47);
    $DropdownItemSprite$$ === $JSCompiler_alias_VOID$$ && ($DropdownItemSprite$$ = $JSCompiler_alias_TRUE$$);
    $DvtControlPanelDefaults$$ = parseInt(dvt.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, dvt.$CSSStyle$.$BORDER_RADIUS$, 0));
    return dvt.$ControlPanelLAFUtils$.$makeViewOpenShapeHelper$($DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$, $DvtControlPanelEvent$$ - 2 * $DvtControlPanelDefaults$$, $DvtPanControl$$ - 2 * $DvtControlPanelDefaults$$, $DropdownItemSprite$$)
  };
  dvt.$ControlPanelLAFUtils$.$makeViewOpenShapeHelper$ = function $dvt$$ControlPanelLAFUtils$$$makeViewOpenShapeHelper$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    var $x$$171$$ = $DvtPanControl$$ + $DvtControlPanelEvent$$, $y$$150$$ = $DropdownItemSprite$$ + $DvtControlPanelEvent$$, $cmds$$15$$ = dvt.$PathUtils$.moveTo($x$$171$$ + $DvtControlPanelEvent$$, $y$$150$$ + $DvtControlPanelEvent$$), $cmds$$15$$ = $cmds$$15$$ + dvt.$PathUtils$.lineTo($x$$171$$ - $DvtPanControl$$, $y$$150$$ + $DvtControlPanelEvent$$), $x$$171$$ = $x$$171$$ - $DvtPanControl$$, $cmds$$15$$ = $cmds$$15$$ + dvt.$PathUtils$.lineTo($x$$171$$ - $DvtControlPanelEvent$$, $y$$150$$ + $DvtControlPanelEvent$$), 
    $cmds$$15$$ = $cmds$$15$$ + dvt.$PathUtils$.lineTo($x$$171$$ - $DvtControlPanelEvent$$, $y$$150$$ - $DropdownItemSprite$$), $y$$150$$ = $y$$150$$ - $DropdownItemSprite$$;
    $DvtControlPanelDefaults$$ ? ($cmds$$15$$ += dvt.$PathUtils$.$quadTo$(-$DvtControlPanelEvent$$ + $x$$171$$, -dvt.$ControlPanelLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $y$$150$$, -dvt.$ControlPanelLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $x$$171$$, -dvt.$ControlPanelLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $y$$150$$) + dvt.$PathUtils$.$quadTo$(-dvt.$ControlPanelLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $x$$171$$, -$DvtControlPanelEvent$$ + $y$$150$$, $x$$171$$, -$DvtControlPanelEvent$$ + 
    $y$$150$$) + dvt.$PathUtils$.lineTo($x$$171$$, -$DvtControlPanelEvent$$ + $y$$150$$), $cmds$$15$$ += dvt.$PathUtils$.lineTo($x$$171$$ + $DvtPanControl$$ + $DvtControlPanelEvent$$, -$DvtControlPanelEvent$$ + $y$$150$$), $cmds$$15$$ += dvt.$PathUtils$.lineTo($x$$171$$ + $DvtPanControl$$ + $DvtControlPanelEvent$$, $y$$150$$ + $DropdownItemSprite$$)) : ($cmds$$15$$ += dvt.$PathUtils$.lineTo($x$$171$$ - $DvtControlPanelEvent$$, -$DvtControlPanelEvent$$ + $y$$150$$), $cmds$$15$$ += dvt.$PathUtils$.lineTo($x$$171$$ + 
    $DvtPanControl$$, -$DvtControlPanelEvent$$ + $y$$150$$), $x$$171$$ += $DvtPanControl$$, $cmds$$15$$ += dvt.$PathUtils$.$quadTo$(dvt.$ControlPanelLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $x$$171$$, -$DvtControlPanelEvent$$ + $y$$150$$, dvt.$ControlPanelLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $x$$171$$, -dvt.$ControlPanelLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $y$$150$$) + dvt.$PathUtils$.$quadTo$($DvtControlPanelEvent$$ + $x$$171$$, -dvt.$ControlPanelLAFUtils$.$TAN_PI_8$ * 
    $DvtControlPanelEvent$$ + $y$$150$$, $DvtControlPanelEvent$$ + $x$$171$$, $y$$150$$) + dvt.$PathUtils$.lineTo($x$$171$$ + $DvtControlPanelEvent$$, $y$$150$$ + $DropdownItemSprite$$));
    $cmds$$15$$ += dvt.$PathUtils$.closePath();
    return new dvt.$Path$($DvtControlPanelEventManager$$, $cmds$$15$$)
  };
  dvt.$ControlPanelLAFUtils$.$createEmptyViewClosedShape$ = function $dvt$$ControlPanelLAFUtils$$$createEmptyViewClosedShape$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    $DvtControlPanelEvent$$ || ($DvtControlPanelEvent$$ = 47);
    var $DvtControlPanelDefaults$$ = parseInt(dvt.$StyleUtils$.$getStyle$($DvtPanControl$$, dvt.$CSSStyle$.$BORDER_RADIUS$, 0)), $buttonWidth$$6$$ = dvt.$StyleUtils$.$getStyle$($DvtPanControl$$, dvt.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0);
    $DvtControlPanelEvent$$ = Math.max($DvtControlPanelEvent$$, dvt.$StyleUtils$.$getStyle$($DvtPanControl$$, dvt.$ControlPanel$.$CP_BUTTON_HEIGHT$, $DvtControlPanelEvent$$));
    $DropdownItemSprite$$ = dvt.$ButtonLAFUtils$.$GetButtonPathCommands$($buttonWidth$$6$$, $DvtControlPanelEvent$$, $DvtControlPanelDefaults$$, $DropdownItemSprite$$);
    $DropdownItemSprite$$ = $DropdownItemSprite$$.concat("Z");
    $DvtControlPanelEventManager$$ = new dvt.$Path$($DvtControlPanelEventManager$$, $DropdownItemSprite$$, "cls_shape");
    ($DropdownItemSprite$$ = dvt.$StyleUtils$.$getStyle$($DvtPanControl$$, dvt.$PanelDrawer$.$TAB_BG_COLOR_INACTIVE$, $JSCompiler_alias_NULL$$)) || ($DropdownItemSprite$$ = dvt.$StyleUtils$.$getStyle$($DvtPanControl$$, dvt.$CSSStyle$.$BACKGROUND_COLOR$, $JSCompiler_alias_NULL$$));
    $DvtControlPanelEventManager$$.$setSolidFill$($DropdownItemSprite$$);
    return $DvtControlPanelEventManager$$
  };
  dvt.$ControlPanelLAFUtils$.$createEmptyViewClosedFrame$ = function $dvt$$ControlPanelLAFUtils$$$createEmptyViewClosedFrame$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    $DvtControlPanelEvent$$ || ($DvtControlPanelEvent$$ = 47);
    var $DvtControlPanelDefaults$$ = parseInt(dvt.$StyleUtils$.$getStyle$($DvtPanControl$$, dvt.$CSSStyle$.$BORDER_RADIUS$, 0)), $buttonWidth$$7$$ = dvt.$StyleUtils$.$getStyle$($DvtPanControl$$, dvt.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0);
    $DvtControlPanelEvent$$ = Math.max($DvtControlPanelEvent$$, dvt.$StyleUtils$.$getStyle$($DvtPanControl$$, dvt.$ControlPanel$.$CP_BUTTON_HEIGHT$, $DvtControlPanelEvent$$));
    $DropdownItemSprite$$ = dvt.$ButtonLAFUtils$.$GetButtonPathCommands$($buttonWidth$$7$$, $DvtControlPanelEvent$$, $DvtControlPanelDefaults$$, $DropdownItemSprite$$);
    $DropdownItemSprite$$ = $DropdownItemSprite$$.concat("Z");
    $DvtControlPanelEventManager$$ = new dvt.$Path$($DvtControlPanelEventManager$$, $DropdownItemSprite$$, "cls_shape");
    $DvtControlPanelEventManager$$.$setSolidStroke$(dvt.$StyleUtils$.$getStyle$($DvtPanControl$$, dvt.$CSSStyle$.$BORDER_COLOR$, $JSCompiler_alias_NULL$$));
    $DvtControlPanelEventManager$$.$setFill$($JSCompiler_alias_NULL$$);
    return $DvtControlPanelEventManager$$
  };
  dvt.$ControlPanelLAFUtils$.$renderEmptyZoomShape$ = function $dvt$$ControlPanelLAFUtils$$$renderEmptyZoomShape$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    $DvtControlPanelEvent$$ || ($DvtControlPanelEvent$$ = 137);
    var $r$$42$$ = parseInt(dvt.$StyleUtils$.$getStyle$($DvtPanControl$$, dvt.$CSSStyle$.$BORDER_RADIUS$, 0)), $cpWidth$$1$$ = dvt.$StyleUtils$.$getStyle$($DvtPanControl$$, dvt.$ControlPanel$.$CP_TAB_SIZE$, 0), $ww$$91$$ = $cpWidth$$1$$ - 2 * $r$$42$$, $hh$$76$$ = $DvtControlPanelEvent$$ + 7 - 2 * $r$$42$$;
    $DvtControlPanelEventManager$$ = $DropdownItemSprite$$ && $DvtControlPanelDefaults$$ ? dvt.$ControlPanelLAFUtils$.$makeZoomShapeHelperOpenSide$($DvtControlPanelEventManager$$, $r$$42$$, $cpWidth$$1$$, $DvtControlPanelEvent$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) : dvt.$ControlPanelLAFUtils$.$makeZoomShapeHelper$($DvtControlPanelEventManager$$, $r$$42$$, $ww$$91$$, $hh$$76$$);
    $DvtControlPanelEventManager$$.$setSolidFill$(dvt.$StyleUtils$.$getStyle$($DvtPanControl$$, dvt.$CSSStyle$.$BACKGROUND_COLOR$, $JSCompiler_alias_NULL$$));
    return $DvtControlPanelEventManager$$
  };
  dvt.$ControlPanelLAFUtils$.$renderEmptyZoomFrame$ = function $dvt$$ControlPanelLAFUtils$$$renderEmptyZoomFrame$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $openSideSize$$1$$) {
    $DvtControlPanelEvent$$ || ($DvtControlPanelEvent$$ = 137);
    $DvtPanControl$$ || ($DvtPanControl$$ = $JSCompiler_alias_TRUE$$);
    var $r$$43$$ = parseInt(dvt.$StyleUtils$.$getStyle$($DropdownItemSprite$$, dvt.$CSSStyle$.$BORDER_RADIUS$, 0)), $cpWidth$$2$$ = dvt.$StyleUtils$.$getStyle$($DropdownItemSprite$$, dvt.$ControlPanel$.$CP_TAB_SIZE$, 0), $ww$$92$$ = $cpWidth$$2$$ - 2 * $r$$43$$, $hh$$77$$ = $DvtControlPanelEvent$$ + 7 - 2 * $r$$43$$, $mc$$4$$ = $JSCompiler_alias_NULL$$, $mc$$4$$ = $DvtControlPanelDefaults$$ && $openSideSize$$1$$ ? dvt.$ControlPanelLAFUtils$.$makeZoomShapeHelperOpenSide$($DvtControlPanelEventManager$$, 
    $r$$43$$, $cpWidth$$2$$, $DvtControlPanelEvent$$, $DvtControlPanelDefaults$$, $openSideSize$$1$$) : dvt.$ControlPanelLAFUtils$.$makeZoomShapeHelper$($DvtControlPanelEventManager$$, $r$$43$$, $ww$$92$$, $hh$$77$$, $DvtPanControl$$);
    $mc$$4$$.$setSolidStroke$(dvt.$StyleUtils$.$getStyle$($DropdownItemSprite$$, dvt.$CSSStyle$.$BORDER_COLOR$, $JSCompiler_alias_NULL$$));
    $mc$$4$$.$setFill$($JSCompiler_alias_NULL$$);
    return $mc$$4$$
  };
  dvt.$ControlPanelLAFUtils$.$makeZoomShapeHelper$ = function $dvt$$ControlPanelLAFUtils$$$makeZoomShapeHelper$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    $DvtControlPanelDefaults$$ || ($DvtControlPanelDefaults$$ = $JSCompiler_alias_TRUE$$);
    var $x$$172$$ = $DvtPanControl$$ + $DvtControlPanelEvent$$, $y$$151$$ = $DropdownItemSprite$$, $cmds$$16$$ = dvt.$PathUtils$.moveTo($x$$172$$ + $DvtControlPanelEvent$$, $y$$151$$), $cmds$$16$$ = $DvtControlPanelDefaults$$ ? $cmds$$16$$ + (dvt.$PathUtils$.$quadTo$($DvtControlPanelEvent$$ + $x$$172$$, dvt.$ControlPanelLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $y$$151$$, dvt.$ControlPanelLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $x$$172$$, dvt.$ControlPanelLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + 
    $y$$151$$) + dvt.$PathUtils$.$quadTo$(dvt.$ControlPanelLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $x$$172$$, $DvtControlPanelEvent$$ + $y$$151$$, $x$$172$$, $DvtControlPanelEvent$$ + $y$$151$$) + dvt.$PathUtils$.lineTo($x$$172$$, $DvtControlPanelEvent$$ + $y$$151$$)) : $cmds$$16$$ + dvt.$PathUtils$.lineTo($x$$172$$ + $DvtControlPanelEvent$$, $y$$151$$ + $DvtControlPanelEvent$$), $cmds$$16$$ = $cmds$$16$$ + dvt.$PathUtils$.lineTo($x$$172$$ - $DvtPanControl$$, $DvtControlPanelEvent$$ + $y$$151$$), 
    $x$$172$$ = $x$$172$$ - $DvtPanControl$$, $cmds$$16$$ = $cmds$$16$$ + (dvt.$PathUtils$.$quadTo$(-dvt.$ControlPanelLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $x$$172$$, $DvtControlPanelEvent$$ + $y$$151$$, -dvt.$ControlPanelLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $x$$172$$, dvt.$ControlPanelLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $y$$151$$) + dvt.$PathUtils$.$quadTo$(-$DvtControlPanelEvent$$ + $x$$172$$, dvt.$ControlPanelLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + 
    $y$$151$$, -$DvtControlPanelEvent$$ + $x$$172$$, $y$$151$$) + dvt.$PathUtils$.lineTo(-$DvtControlPanelEvent$$ + $x$$172$$, $y$$151$$) + dvt.$PathUtils$.lineTo(-$DvtControlPanelEvent$$ + $x$$172$$, $y$$151$$ - $DropdownItemSprite$$)), $y$$151$$ = $y$$151$$ - $DropdownItemSprite$$, $cmds$$16$$ = $cmds$$16$$ + (dvt.$PathUtils$.lineTo($x$$172$$ + $DvtPanControl$$ + $DvtControlPanelEvent$$, $y$$151$$) + dvt.$PathUtils$.lineTo($x$$172$$ + $DvtPanControl$$ + $DvtControlPanelEvent$$, $y$$151$$ + $DropdownItemSprite$$) + 
    dvt.$PathUtils$.closePath());
    return new dvt.$Path$($DvtControlPanelEventManager$$, $cmds$$16$$)
  };
  dvt.$ControlPanelLAFUtils$.$makeZoomShapeHelperOpenSide$ = function $dvt$$ControlPanelLAFUtils$$$makeZoomShapeHelperOpenSide$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $openSideSize$$2$$) {
    $DvtControlPanelEvent$$ = dvt.$ControlPanelLAFUtils$.$GetShapePathCommands$($DvtControlPanelEventManager$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelEvent$$, $DvtControlPanelDefaults$$, $openSideSize$$2$$);
    return new dvt.$Path$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$)
  };
  dvt.$ControlPanelLAFUtils$.$makeViewOpenShapeHelperOpenSide$ = function $dvt$$ControlPanelLAFUtils$$$makeViewOpenShapeHelperOpenSide$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $openSideSize$$3$$) {
    $DvtControlPanelEvent$$ = dvt.$ControlPanelLAFUtils$.$GetShapePathCommands$($DvtControlPanelEventManager$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelEvent$$, $DvtControlPanelDefaults$$, $openSideSize$$3$$);
    return new dvt.$Path$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$)
  };
  dvt.$ControlPanelLAFUtils$.$GetShapePathCommands$ = function $dvt$$ControlPanelLAFUtils$$$GetShapePathCommands$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $openSideSize$$4$$) {
    var $arPoints$$12$$;
    $DvtControlPanelEventManager$$ = dvt.$Agent$.$isRightToLeft$($DvtControlPanelEventManager$$);
    $DvtControlPanelDefaults$$ == dvt.$ControlPanelLAFUtils$.$OPEN_TOP$ && !$DvtControlPanelEventManager$$ && ($arPoints$$12$$ = ["M", $DvtControlPanelEvent$$, 0, "L", $DvtControlPanelEvent$$, $DvtPanControl$$ - $DropdownItemSprite$$, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 1, $DvtControlPanelEvent$$ - $DropdownItemSprite$$, $DvtPanControl$$, "L", 0, $DvtPanControl$$, "L", 0, 0]);
    $DvtControlPanelDefaults$$ == dvt.$ControlPanelLAFUtils$.$OPEN_TOP$ && $DvtControlPanelEventManager$$ ? $arPoints$$12$$ = ["M", $DvtControlPanelEvent$$, 0, "L", $DvtControlPanelEvent$$, $DvtPanControl$$, "L", $DropdownItemSprite$$, $DvtPanControl$$, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 1, 0, $DvtPanControl$$ - $DropdownItemSprite$$, "L", 0, 0] : $DvtControlPanelDefaults$$ == dvt.$ControlPanelLAFUtils$.$OPEN_RIGHT$ && !$DvtControlPanelEventManager$$ ? $arPoints$$12$$ = ["M", 
    $DvtControlPanelEvent$$, $openSideSize$$4$$, "L", $DvtControlPanelEvent$$, $DvtPanControl$$ - $DropdownItemSprite$$, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 1, $DvtControlPanelEvent$$ - $DropdownItemSprite$$, $DvtPanControl$$, "L", 0, $DvtPanControl$$, "L", 0, 0, "L", $DvtControlPanelEvent$$, 0] : $DvtControlPanelDefaults$$ == dvt.$ControlPanelLAFUtils$.$OPEN_RIGHT$ && $DvtControlPanelEventManager$$ ? $arPoints$$12$$ = ["M", 0, 0, "L", $DvtControlPanelEvent$$, 0, "L", $DvtControlPanelEvent$$, 
    $DvtPanControl$$, "L", $DropdownItemSprite$$, $DvtPanControl$$, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 1, 0, $DvtPanControl$$ - $DropdownItemSprite$$, "L", 0, $openSideSize$$4$$] : $DvtControlPanelDefaults$$ == dvt.$ControlPanelLAFUtils$.$OPEN_LEFT$ && !$DvtControlPanelEventManager$$ ? $arPoints$$12$$ = ["M", 0, 0, "L", $DvtControlPanelEvent$$ - $DropdownItemSprite$$, 0, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 1, $DvtControlPanelEvent$$, $DropdownItemSprite$$, 
    "L", $DvtControlPanelEvent$$, $DvtPanControl$$ - $DropdownItemSprite$$, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 1, $DvtControlPanelEvent$$ - $DropdownItemSprite$$, $DvtPanControl$$, "L", 0, $DvtPanControl$$] : $DvtControlPanelDefaults$$ == dvt.$ControlPanelLAFUtils$.$OPEN_LEFT$ && $DvtControlPanelEventManager$$ ? $arPoints$$12$$ = ["M", $DvtControlPanelEvent$$, $DvtPanControl$$, "L", $DropdownItemSprite$$, $DvtPanControl$$, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 
    0, 1, 0, $DvtPanControl$$ - $DropdownItemSprite$$, "L", 0, $DropdownItemSprite$$, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 1, $DropdownItemSprite$$, 0, "L", $DvtControlPanelEvent$$, 0] : $DvtControlPanelDefaults$$ == dvt.$ControlPanelLAFUtils$.$OPEN_BOTTOM$ && !$DvtControlPanelEventManager$$ ? $arPoints$$12$$ = ["M", 0, $DvtPanControl$$, "L", 0, 0, "L", $DvtControlPanelEvent$$ - $DropdownItemSprite$$, 0, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 1, $DvtControlPanelEvent$$, 
    $DropdownItemSprite$$, "L", $DvtControlPanelEvent$$, $DvtPanControl$$ - $DropdownItemSprite$$, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 1, $DvtControlPanelEvent$$ - $DropdownItemSprite$$, $DvtPanControl$$, "L", $openSideSize$$4$$, $DvtPanControl$$] : $DvtControlPanelDefaults$$ == dvt.$ControlPanelLAFUtils$.$OPEN_BOTTOM$ && $DvtControlPanelEventManager$$ && ($arPoints$$12$$ = ["M", $DvtControlPanelEvent$$, $DvtPanControl$$, "L", $DvtControlPanelEvent$$, 0, "L", $DropdownItemSprite$$, 
    0, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 0, 0, $DropdownItemSprite$$, "L", 0, $DvtPanControl$$ - $DropdownItemSprite$$, "A", $DropdownItemSprite$$, $DropdownItemSprite$$, 0, 0, 0, $DropdownItemSprite$$, $DvtPanControl$$, "L", $DvtControlPanelEvent$$ - $openSideSize$$4$$, $DvtPanControl$$]);
    return $arPoints$$12$$
  };
  dvt.$PanZoomComponent$ = function $dvt$$PanZoomComponent$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    this.Init($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$)
  };
  dvt.$Obj$.$createSubclass$(dvt.$PanZoomComponent$, dvt.$BaseComponent$);
  dvt.$PanZoomComponent$.$BOX_SHADOW$ = "box-shadow";
  dvt.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_INIT_COLLAPSED$ = "initCollapsed";
  dvt.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_INIT_EXPANDED$ = "initExpanded";
  dvt.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_HIDDEN$ = "hidden";
  dvt.$PanZoomComponent$.$PAN_ZOOM_KEY$ = "panZoomInfo";
  dvt.$PanZoomComponent$.$SKIN_NAME$ = "skin";
  dvt.$PanZoomComponent$.$_ATTR_INLINE_STYLE$ = "inlineStyle";
  dvt.$PanZoomComponent$.$_ATTR_CTRLPANEL_BACKGROUND_COLOR$ = "cpBackgroundColor";
  dvt.$PanZoomComponent$.$_ATTR_CTRLPANEL_BORDER_COLOR$ = "cpBorderColor";
  dvt.$PanZoomComponent$.$_ATTR_CTRLPANEL_BOX_SHADOW$ = "cpBoxShadow";
  dvt.$PanZoomComponent$.$_ATTR_CTRLPANEL_BORDER_RADIUS$ = "cpBorderRadius";
  dvt.$PanZoomComponent$.$_ATTR_TAB_BG_COLOR_INACTIVE$ = "tabBgColorInactive";
  dvt.$PanZoomComponent$.$_ATTR_TAB_BORDER_COLOR_INACTIVE$ = "tabBorderColorInactive";
  dvt.$PanZoomComponent$.$LEGEND_DISCLOSED_EVENT_KEY$ = "isLegendDisclosed";
  dvt.$PanZoomComponent$.prototype.Init = function $dvt$$PanZoomComponent$$$Init$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    dvt.$PanZoomComponent$.$superclass$.Init.call(this, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$);
    this.$_controlPanelBehavior$ = dvt.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_INIT_COLLAPSED$;
    this.$_displayedControls$ = dvt.$PanZoomCanvas$.$DEFAULT_DISPLAYED_CONTROLS$;
    this.$_bSupportsVectorEffects$ = !dvt.$Agent$.$isEnvironmentBatik$() && !dvt.$Agent$.$isPlatformIE$() && !(dvt.$Agent$.$isPlatformGecko$() && 17 >= dvt.$Agent$.$getVersion$());
    this.$_subcomponentStyles$ = this.$_resourcesMap$ = $JSCompiler_alias_NULL$$;
    this.$_skinName$ = ""
  };
  dvt.$PanZoomComponent$.prototype.$getResourcesMap$ = function $dvt$$PanZoomComponent$$$$getResourcesMap$$() {
    this.$_resourcesMap$ || (this.$_resourcesMap$ = this.$Options$ ? this.$Options$._resources : {});
    return this.$_resourcesMap$
  };
  dvt.$PanZoomComponent$.prototype.$getSubcomponentStyles$ = $JSCompiler_get$$("$_subcomponentStyles$");
  dvt.$PanZoomComponent$.prototype.$parseComponentJson$ = function $dvt$$PanZoomComponent$$$$parseComponentJson$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = (new dvt.$CSSStyle$($DvtControlPanelEventManager$$[dvt.$PanZoomComponent$.$_ATTR_INLINE_STYLE$])).$getStyle$(dvt.$CSSStyle$.$BACKGROUND_COLOR$);
    $DvtControlPanelEvent$$ && this.$SetEndGradientColor$($DvtControlPanelEvent$$);
    var $DvtControlPanelEvent$$ = {}, $DvtPanControl$$ = $DvtControlPanelEventManager$$[dvt.$PanZoomComponent$.$SKIN_NAME$];
    $DvtPanControl$$ && (this.$_setSkinName$($DvtPanControl$$), $DvtControlPanelEvent$$[dvt.$PanZoomComponent$.$SKIN_NAME$] = $DvtPanControl$$, "undefined" != typeof dvt.$PanelDrawer$ && (dvt.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, dvt.$CSSStyle$.$BACKGROUND_COLOR$, $DvtControlPanelEventManager$$[dvt.$PanZoomComponent$.$_ATTR_CTRLPANEL_BACKGROUND_COLOR$]), dvt.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, dvt.$CSSStyle$.$BORDER_COLOR$, $DvtControlPanelEventManager$$[dvt.$PanZoomComponent$.$_ATTR_CTRLPANEL_BORDER_COLOR$]), 
    dvt.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, dvt.$CSSStyle$.$BORDER_RADIUS$, $DvtControlPanelEventManager$$[dvt.$PanZoomComponent$.$_ATTR_CTRLPANEL_BORDER_RADIUS$]), dvt.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, dvt.$PanZoomComponent$.$BOX_SHADOW$, $DvtControlPanelEventManager$$[dvt.$PanZoomComponent$.$_ATTR_CTRLPANEL_BOX_SHADOW$]), dvt.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, dvt.$PanelDrawer$.$TAB_BG_COLOR_INACTIVE$, $DvtControlPanelEventManager$$[dvt.$PanZoomComponent$.$_ATTR_TAB_BG_COLOR_INACTIVE$]), 
    dvt.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, dvt.$PanelDrawer$.$TAB_BORDER_COLOR_INACTIVE$, $DvtControlPanelEventManager$$[dvt.$PanZoomComponent$.$_ATTR_TAB_BORDER_COLOR_INACTIVE$])), this.$setSubcomponentStyles$($DvtControlPanelDefaults$$.$calcOptions$($DvtControlPanelEvent$$)))
  };
  dvt.$PanZoomComponent$.prototype.$parseComponentAttrs$ = function $dvt$$PanZoomComponent$$$$parseComponentAttrs$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = (new dvt.$CSSStyle$($DvtControlPanelEventManager$$.$getAttr$(dvt.$PanZoomComponent$.$_ATTR_INLINE_STYLE$))).$getStyle$(dvt.$CSSStyle$.$BACKGROUND_COLOR$);
    $DvtControlPanelEvent$$ && this.$SetEndGradientColor$($DvtControlPanelEvent$$);
    var $DvtControlPanelEvent$$ = {}, $DvtPanControl$$ = $DvtControlPanelEventManager$$.$getAttr$(dvt.$PanZoomComponent$.$SKIN_NAME$);
    $DvtPanControl$$ && (this.$_setSkinName$($DvtPanControl$$), $DvtControlPanelEvent$$[dvt.$PanZoomComponent$.$SKIN_NAME$] = $DvtPanControl$$);
    "undefined" != typeof dvt.$PanelDrawer$ && (dvt.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, dvt.$CSSStyle$.$BACKGROUND_COLOR$, $DvtControlPanelEventManager$$.$getAttr$(dvt.$PanZoomComponent$.$_ATTR_CTRLPANEL_BACKGROUND_COLOR$)), dvt.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, dvt.$CSSStyle$.$BORDER_COLOR$, $DvtControlPanelEventManager$$.$getAttr$(dvt.$PanZoomComponent$.$_ATTR_CTRLPANEL_BORDER_COLOR$)), dvt.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, dvt.$CSSStyle$.$BORDER_RADIUS$, 
    $DvtControlPanelEventManager$$.$getAttr$(dvt.$PanZoomComponent$.$_ATTR_CTRLPANEL_BORDER_RADIUS$)), dvt.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, dvt.$PanZoomComponent$.$BOX_SHADOW$, $DvtControlPanelEventManager$$.$getAttr$(dvt.$PanZoomComponent$.$_ATTR_CTRLPANEL_BOX_SHADOW$)), dvt.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, dvt.$PanelDrawer$.$TAB_BG_COLOR_INACTIVE$, $DvtControlPanelEventManager$$.$getAttr$(dvt.$PanZoomComponent$.$_ATTR_TAB_BG_COLOR_INACTIVE$)), dvt.$StyleUtils$.$setStyle$($DvtControlPanelEvent$$, 
    dvt.$PanelDrawer$.$TAB_BORDER_COLOR_INACTIVE$, $DvtControlPanelEventManager$$.$getAttr$(dvt.$PanZoomComponent$.$_ATTR_TAB_BORDER_COLOR_INACTIVE$)));
    this.$setSubcomponentStyles$($DvtControlPanelDefaults$$.$calcOptions$($DvtControlPanelEvent$$))
  };
  dvt.$PanZoomComponent$.prototype.$render$ = function $dvt$$PanZoomComponent$$$$render$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    this.$Width$ = $DvtControlPanelEvent$$;
    this.$Height$ = $DvtPanControl$$;
    this.$_isResize$ = !$DvtControlPanelEventManager$$;
    if(!this.$_isResize$ || this.$_panZoomCanvas$) {
      this.$PreRender$(), this.$_isResize$ || ("object" == typeof $DvtControlPanelEventManager$$ ? this.$SetOptions$($DvtControlPanelEventManager$$) : this.$_loadXml$($DvtControlPanelEventManager$$)), this.$Render$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$), this.$UpdateAriaAttributes$()
    }
  };
  dvt.$PanZoomComponent$.prototype.$setControlPanelBehavior$ = $JSCompiler_set$$("$_controlPanelBehavior$");
  dvt.$PanZoomComponent$.prototype.$setDisplayedControls$ = $JSCompiler_set$$("$_displayedControls$");
  dvt.$PanZoomComponent$.prototype.$GetControlPanel$ = function $dvt$$PanZoomComponent$$$$GetControlPanel$$() {
    var $DvtControlPanelEventManager$$ = this.$GetControlPanelBehavior$();
    return $DvtControlPanelEventManager$$ != dvt.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_HIDDEN$ ? new dvt.$ControlPanel$(this.$getCtx$(), this, $DvtControlPanelEventManager$$ == dvt.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_INIT_COLLAPSED$ ? dvt.$ControlPanel$.$STATE_COLLAPSED$ : dvt.$ControlPanel$.$STATE_EXPANDED$) : $JSCompiler_alias_NULL$$
  };
  dvt.$PanZoomComponent$.prototype.$GetControlPanelBehavior$ = $JSCompiler_get$$("$_controlPanelBehavior$");
  dvt.$PanZoomComponent$.prototype.$GetXmlDomParser$ = $JSCompiler_returnArg$$($JSCompiler_alias_NULL$$);
  dvt.$PanZoomComponent$.prototype.$GetXmlStringParser$ = function $dvt$$PanZoomComponent$$$$GetXmlStringParser$$() {
    return new dvt.$XmlParser$(this.$getCtx$())
  };
  dvt.$PanZoomComponent$.prototype.$HandlePanEvent$ = $JSCompiler_emptyFn$$();
  dvt.$PanZoomComponent$.prototype.$HandleZoomEvent$ = $JSCompiler_emptyFn$$();
  dvt.$PanZoomComponent$.prototype.$PreRender$ = $JSCompiler_emptyFn$$();
  dvt.$PanZoomComponent$.prototype.$Render$ = function $dvt$$PanZoomComponent$$$$Render$$() {
    if(this.$_endGradientColor$ || !this.$_skinName$) {
      this.$_backgroundPane$ || (this.$_backgroundPane$ = new dvt.$Rect$(this.$getCtx$(), 0, 0, 0, 0), this.$addChild$(this.$_backgroundPane$)), this.$_backgroundPane$.$setWidth$(this.getWidth()), this.$_backgroundPane$.$setHeight$(this.getHeight()), this.$_backgroundPane$.$setFill$(this.$_getBackgroundGradient$(this.$_endGradientColor$))
    }
    if(this.$_isResize$) {
      this.$_panZoomCanvas$.$setSize$(this.getWidth(), this.getHeight())
    }else {
      this.$_panZoomCanvas$ && (this.removeChild(this.$_panZoomCanvas$), this.$_panZoomCanvas$ = $JSCompiler_alias_NULL$$);
      this.$_panZoomCanvas$ = new dvt.$PanZoomCanvas$(this.$getCtx$(), this.getWidth(), this.getHeight(), this);
      this.$_panZoomCanvas$.$addEvtListener$(dvt.$PanEvent$.$TYPE$, this.$HandlePanEvent$, $JSCompiler_alias_FALSE$$, this);
      this.$_panZoomCanvas$.$addEvtListener$(dvt.$ZoomEvent$.$TYPE$, this.$HandleZoomEvent$, $JSCompiler_alias_FALSE$$, this);
      this.$addChild$(this.$_panZoomCanvas$);
      var $DvtControlPanelEventManager$$ = this.$GetControlPanel$();
      $DvtControlPanelEventManager$$ && ($DvtControlPanelEventManager$$.$addEvtListener$($DvtControlPanelEvent$$.$TYPE$, this.$_handleControlPanelEvent$, $JSCompiler_alias_FALSE$$, this), this.$_panZoomCanvas$.$setControlPanel$($DvtControlPanelEventManager$$));
      this.$_panZoomCanvas$.$renderComponent$()
    }
    $DvtControlPanelEventManager$$ = new dvt.$ClipPath$("comp");
    $DvtControlPanelEventManager$$.$addRect$(this.$getTranslateX$(), this.$getTranslateY$(), this.getWidth(), this.getHeight());
    this.$setClipPath$($DvtControlPanelEventManager$$)
  };
  dvt.$PanZoomComponent$.prototype.$SetEndGradientColor$ = $JSCompiler_set$$("$_endGradientColor$");
  dvt.$PanZoomComponent$.prototype.$SetOptions$ = function $dvt$$PanZoomComponent$$$$SetOptions$$($DvtControlPanelEventManager$$) {
    this.$Options$ = this.$Defaults$ ? this.$Defaults$.$calcOptions$($DvtControlPanelEventManager$$) : $DvtControlPanelEventManager$$
  };
  dvt.$PanZoomComponent$.prototype.$_getBackgroundGradient$ = function $dvt$$PanZoomComponent$$$$_getBackgroundGradient$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = 1;
    if($DvtControlPanelEventManager$$ && "#7396C8" != $DvtControlPanelEventManager$$) {
      var $DvtControlPanelEvent$$ = dvt.$ColorUtils$.$getAlpha$($DvtControlPanelEventManager$$), $DvtPanControl$$ = (dvt.$ColorUtils$.$getRed$("#AECDEA") - dvt.$ColorUtils$.$getRed$("#7396C8")) / (255 - dvt.$ColorUtils$.$getRed$("#7396C8")), $DropdownItemSprite$$ = (dvt.$ColorUtils$.$getGreen$("#AECDEA") - dvt.$ColorUtils$.$getGreen$("#7396C8")) / (255 - dvt.$ColorUtils$.$getGreen$("#7396C8")), $DvtControlPanelDefaults$$ = (dvt.$ColorUtils$.$getBlue$("#AECDEA") - dvt.$ColorUtils$.$getBlue$("#7396C8")) / 
      (255 - dvt.$ColorUtils$.$getBlue$("#7396C8")), $gx_rr$$3_ww$$94$$ = dvt.$ColorUtils$.$getRed$($DvtControlPanelEventManager$$), $cx$$29_gg$$3$$ = dvt.$ColorUtils$.$getGreen$($DvtControlPanelEventManager$$), $bb$$5_cy$$30$$ = dvt.$ColorUtils$.$getBlue$($DvtControlPanelEventManager$$), $DvtPanControl$$ = dvt.$ColorUtils$.$makeRGB$(Math.round($gx_rr$$3_ww$$94$$ + $DvtPanControl$$ * (255 - $gx_rr$$3_ww$$94$$)), Math.round($cx$$29_gg$$3$$ + $DropdownItemSprite$$ * (255 - $cx$$29_gg$$3$$)), Math.round($bb$$5_cy$$30$$ + 
      $DvtControlPanelDefaults$$ * (255 - $bb$$5_cy$$30$$)));
      $DvtControlPanelEventManager$$ = dvt.$ColorUtils$.$getRGB$($DvtControlPanelEventManager$$);
      $DvtControlPanelEventManager$$ = ["#FFFFFF", "#FFFFFF", $DvtPanControl$$, $DvtControlPanelEventManager$$]
    }else {
      $DvtControlPanelEventManager$$ = ["#FFFFFF", "#FFFFFF", "#AECDEA", "#7396C8"]
    }
    var $DvtControlPanelEvent$$ = [$DvtControlPanelEvent$$, $DvtControlPanelEvent$$, $DvtControlPanelEvent$$, $DvtControlPanelEvent$$], $DvtPanControl$$ = [0, 45 / 255, 190 / 255, 1], $gx_rr$$3_ww$$94$$ = this.$Width$, $DropdownItemSprite$$ = 1.7 * 1.7 * $gx_rr$$3_ww$$94$$, $DvtControlPanelDefaults$$ = 1.7 * this.$Height$, $gx_rr$$3_ww$$94$$ = 0 + ($gx_rr$$3_ww$$94$$ - $DropdownItemSprite$$) / 2, $cx$$29_gg$$3$$ = $gx_rr$$3_ww$$94$$ + $DropdownItemSprite$$ / 2, $bb$$5_cy$$30$$ = -35 + $DvtControlPanelDefaults$$ / 
    2, $r$$48$$ = 1.5 * Math.min($DropdownItemSprite$$ / 2, $DvtControlPanelDefaults$$ / 2);
    return new dvt.$RadialGradientFill$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $cx$$29_gg$$3$$, $bb$$5_cy$$30$$, $r$$48$$, [$gx_rr$$3_ww$$94$$, -35, $DropdownItemSprite$$, $DvtControlPanelDefaults$$])
  };
  dvt.$PanZoomComponent$.prototype.$_handleControlPanelEvent$ = function $dvt$$PanZoomComponent$$$$_handleControlPanelEvent$$($DvtControlPanelEventManager$$) {
    $DvtControlPanelEventManager$$ = dvt.$EventFactory$.$newAdfPropertyChangeEvent$(dvt.$ControlPanel$.$CONTROL_PANEL_BEHAVIOR_KEY$, $DvtControlPanelEventManager$$.$getSubType$() == $DvtControlPanelEvent$$.$SUBTYPE_SHOW$ ? dvt.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_INIT_EXPANDED$ : dvt.$PanZoomComponent$.$CONTROL_PANEL_BEHAVIOR_INIT_COLLAPSED$);
    this.dispatchEvent($DvtControlPanelEventManager$$)
  };
  dvt.$PanZoomComponent$.prototype.$_loadXml$ = function $dvt$$PanZoomComponent$$$$_loadXml$$($DvtControlPanelEventManager$$) {
    if(!($DvtControlPanelEventManager$$ == $JSCompiler_alias_NULL$$ || 0 == $DvtControlPanelEventManager$$.length)) {
      var $DvtControlPanelEvent$$ = this.$GetXmlStringParser$();
      if($DvtControlPanelEvent$$ && ($DvtControlPanelEventManager$$ = $DvtControlPanelEvent$$.parse($DvtControlPanelEventManager$$))) {
        "r" === $DvtControlPanelEventManager$$.getName() && ($DvtControlPanelEventManager$$ = $DvtControlPanelEventManager$$.getFirstChild()), $DvtControlPanelEventManager$$ && this.$GetXmlDomParser$().$loadXmlInitial$($DvtControlPanelEventManager$$)
      }
    }
  };
  dvt.$PanZoomComponent$.prototype.$_setSkinName$ = $JSCompiler_set$$("$_skinName$");
  dvt.$PanZoomComponent$.prototype.$setSubcomponentStyles$ = $JSCompiler_set$$("$_subcomponentStyles$");
  dvt.$PanZoomComponent$.prototype.$_getLegendMaxWidthValue$ = function $dvt$$PanZoomComponent$$$$_getLegendMaxWidthValue$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = $DvtControlPanelEvent$$;
    if(!$DvtControlPanelEventManager$$) {
      return $DvtPanControl$$
    }
    $DvtPanControl$$ = dvt.$StringUtils$.trim($DvtControlPanelEventManager$$);
    dvt.$StringUtils$.endsWith($DvtPanControl$$, "%") ? ($DvtPanControl$$ = dvt.$StringUtils$.trim($DvtPanControl$$.replace(/\%$/, "")), isNaN(parseFloat($DvtPanControl$$)) || ($DvtPanControl$$ = parseFloat($DvtPanControl$$) / 100 * $DvtControlPanelEvent$$)) : dvt.$StringUtils$.endsWith($DvtPanControl$$, "px") && ($DvtPanControl$$ = $DvtPanControl$$.replace(/px$/, ""));
    $DvtPanControl$$ = isNaN(parseFloat($DvtPanControl$$)) ? $DvtControlPanelEvent$$ : parseFloat($DvtPanControl$$);
    return Math.min($DvtPanControl$$, $DvtControlPanelEvent$$)
  };
  dvt.$PanZoomCanvas$ = function $dvt$$PanZoomCanvas$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    this.Init($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$)
  };
  dvt.$Obj$.$createSubclass$(dvt.$PanZoomCanvas$, dvt.$Container$);
  dvt.$PanZoomCanvas$.$DEFAULT_PAN_INCREMENT$ = 15;
  dvt.$PanZoomCanvas$.$DEFAULT_ZOOM_INCREMENT$ = 0.05;
  dvt.$PanZoomCanvas$.$DEFAULT_ANIMATION_DURATION$ = 0.5;
  dvt.$PanZoomCanvas$.$DEFAULT_DISPLAYED_CONTROLS$ = dvt.$ControlPanel$.$CONTROLS_ALL$;
  dvt.$PanZoomCanvas$.prototype.Init = function $dvt$$PanZoomCanvas$$$Init$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    dvt.$PanZoomCanvas$.$superclass$.Init.call(this, $DvtControlPanelEventManager$$);
    this.$_view$ = $DropdownItemSprite$$;
    this.$_ww$ = $DvtControlPanelEvent$$;
    this.$_hh$ = $DvtPanControl$$;
    this.$_my$ = this.$_mx$ = this.$_py$ = this.$_px$ = 0;
    this.$_maxPanY$ = this.$_minPanY$ = this.$_maxPanX$ = this.$_minPanX$ = $JSCompiler_alias_NULL$$;
    this.$_minZoom$ = 0.1;
    this.$_maxZoom$ = 1;
    this.$_panIncrement$ = dvt.$PanZoomCanvas$.$DEFAULT_PAN_INCREMENT$;
    this.$_zoomIncrement$ = dvt.$PanZoomCanvas$.$DEFAULT_ZOOM_INCREMENT$;
    this.$_bTiltPanningEnabled$ = $JSCompiler_alias_FALSE$$;
    this.$_zoomToFitPadding$ = 20;
    this.$_controlPanel$ = $JSCompiler_alias_NULL$$;
    this.$_bZoomToFitEnabled$ = this.$_bZoomingEnabled$ = this.$_bPanningEnabled$ = $JSCompiler_alias_TRUE$$;
    this.$_backgroundPane$ = new dvt.$Rect$(this.$getCtx$(), 0, 0, this.$_ww$, this.$_hh$);
    this.$addChild$(this.$_backgroundPane$);
    this.$_backgroundPane$.$setInvisibleFill$();
    this.$_contentPane$ = new dvt.$Container$(this.$getCtx$());
    this.$addChild$(this.$_contentPane$);
    this.$_contentPane$.$setMatrix$(new dvt.$Matrix$);
    this.$_animationDuration$ = dvt.$PanZoomCanvas$.$DEFAULT_ANIMATION_DURATION$;
    this.$_eventManager$ = new dvt.$PanZoomCanvasEventManager$($DvtControlPanelEventManager$$, this.$FireListener$, this);
    this.$_eventManager$.$addListeners$(this);
    this.$_clipIdSuffix$ = 1;
    this.$SetClipRect$($DvtControlPanelEvent$$, $DvtPanControl$$);
    this.$_bElasticConstraints$ = $JSCompiler_alias_FALSE$$;
    this.$_elasticConstraintsAnim$ = $JSCompiler_alias_NULL$$
  };
  dvt.$PanZoomCanvas$.prototype.$setSize$ = function $dvt$$PanZoomCanvas$$$$setSize$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    this.$_ww$ = $DvtControlPanelEventManager$$;
    this.$_hh$ = $DvtControlPanelEvent$$;
    $DvtPanControl$$ || (this.$_backgroundPane$.$setWidth$($DvtControlPanelEventManager$$), this.$_backgroundPane$.$setHeight$($DvtControlPanelEvent$$), this.$_controlPanel$ && this.$PositionControlPanel$(), this.$SetClipRect$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$))
  };
  dvt.$PanZoomCanvas$.prototype.$getSize$ = function $dvt$$PanZoomCanvas$$$$getSize$$() {
    return new dvt.$Dimension$(this.$_ww$, this.$_hh$)
  };
  dvt.$PanZoomCanvas$.prototype.$SetClipRect$ = function $dvt$$PanZoomCanvas$$$$SetClipRect$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = new dvt.$ClipPath$("pzc");
    $DvtPanControl$$.$addRect$(this.$getTranslateX$(), this.$getTranslateY$(), $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$);
    this.$setClipPath$($DvtPanControl$$)
  };
  dvt.$PanZoomCanvas$.prototype.$setContentPane$ = $JSCompiler_set$$("$_contentPane$");
  dvt.$PanZoomCanvas$.prototype.$getContentPaneMatrix$ = function $dvt$$PanZoomCanvas$$$$getContentPaneMatrix$$($DvtControlPanelEventManager$$) {
    return $DvtControlPanelEventManager$$ && ($DvtControlPanelEventManager$$ = $DvtControlPanelEventManager$$.$getDestVal$(this.$_contentPane$, this.$_contentPane$.$getMatrix$)) ? $DvtControlPanelEventManager$$ : this.$_contentPane$.$getMatrix$()
  };
  dvt.$PanZoomCanvas$.prototype.$getZoom$ = function $dvt$$PanZoomCanvas$$$$getZoom$$($DvtControlPanelEventManager$$) {
    return this.$getContentPaneMatrix$($DvtControlPanelEventManager$$).$_a$
  };
  dvt.$PanZoomCanvas$.prototype.$getPanX$ = function $dvt$$PanZoomCanvas$$$$getPanX$$($DvtControlPanelEventManager$$) {
    return this.$getContentPaneMatrix$($DvtControlPanelEventManager$$).$_tx$
  };
  dvt.$PanZoomCanvas$.prototype.$getPanY$ = function $dvt$$PanZoomCanvas$$$$getPanY$$($DvtControlPanelEventManager$$) {
    return this.$getContentPaneMatrix$($DvtControlPanelEventManager$$).$_ty$
  };
  dvt.$PanZoomCanvas$.prototype.$setZoomToFitPadding$ = function $dvt$$PanZoomCanvas$$$$setZoomToFitPadding$$() {
    this.$_zoomToFitPadding$ = 0
  };
  dvt.$PanZoomCanvas$.prototype.$panBy$ = function $dvt$$PanZoomCanvas$$$$panBy$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    if(this.$_bPanningEnabled$) {
      var $DropdownItemSprite$$ = this.$getPanX$($DvtPanControl$$), $DvtControlPanelDefaults$$ = this.$getPanY$($DvtPanControl$$), $newX$$5$$ = this.$ConstrainPanX$($DropdownItemSprite$$ + $DvtControlPanelEventManager$$), $newY$$6$$ = this.$ConstrainPanY$($DvtControlPanelDefaults$$ + $DvtControlPanelEvent$$);
      $DvtControlPanelEvent$$ = $newX$$5$$ - $DropdownItemSprite$$;
      var $deltaY$$15_fireEndEventFunc$$ = $newY$$6$$ - $DvtControlPanelDefaults$$;
      $DvtControlPanelEventManager$$ = $JSCompiler_alias_NULL$$;
      $DvtPanControl$$ && ($DvtControlPanelEventManager$$ = $DvtPanControl$$.$getDestVal$(this.$_contentPane$, this.$_contentPane$.$getMatrix$)) && ($DvtControlPanelEventManager$$ = $DvtControlPanelEventManager$$.$clone$());
      $DvtControlPanelEventManager$$ || ($DvtControlPanelEventManager$$ = this.$_contentPane$.$getMatrix$().$clone$());
      $DvtControlPanelEventManager$$.translate($DvtControlPanelEvent$$, $deltaY$$15_fireEndEventFunc$$);
      var $thisRef$$34$$ = this;
      $DvtControlPanelEvent$$ = function $$DvtControlPanelEvent$$$() {
        $thisRef$$34$$.$FirePanEvent$(dvt.$PanEvent$.$SUBTYPE_PANNING$, $newX$$5$$, $newY$$6$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $DvtPanControl$$)
      };
      $deltaY$$15_fireEndEventFunc$$ = function $$deltaY$$15_fireEndEventFunc$$$() {
        $thisRef$$34$$.$FirePanEvent$(dvt.$PanEvent$.$SUBTYPE_PANNED$, $newX$$5$$, $newY$$6$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $DvtPanControl$$)
      };
      $DvtPanControl$$ ? ($DvtPanControl$$.$addProp$(dvt.$Animator$.$TYPE_MATRIX$, this.$_contentPane$, this.$_contentPane$.$getMatrix$, this.$_contentPane$.$setMatrix$, $DvtControlPanelEventManager$$), dvt.$Playable$.$prependOnInit$($DvtPanControl$$, $DvtControlPanelEvent$$), dvt.$Playable$.$appendOnEnd$($DvtPanControl$$, $deltaY$$15_fireEndEventFunc$$)) : ($DvtControlPanelEvent$$(), this.$_contentPane$.$setMatrix$($DvtControlPanelEventManager$$), $deltaY$$15_fireEndEventFunc$$())
    }
  };
  dvt.$PanZoomCanvas$.prototype.$panTo$ = function $dvt$$PanZoomCanvas$$$$panTo$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    this.$_bPanningEnabled$ && ($DvtControlPanelEventManager$$ -= this.$getPanX$($DvtPanControl$$), $DvtControlPanelEvent$$ -= this.$getPanY$($DvtPanControl$$), this.$panBy$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$))
  };
  dvt.$PanZoomCanvas$.prototype.$zoomBy$ = function $dvt$$PanZoomCanvas$$$$zoomBy$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    if(this.$_bZoomingEnabled$) {
      !$DvtControlPanelEvent$$ && 0 !== $DvtControlPanelEvent$$ && ($DvtControlPanelEvent$$ = this.$_ww$ / 2);
      !$DvtPanControl$$ && 0 !== $DvtPanControl$$ && ($DvtPanControl$$ = this.$_hh$ / 2);
      var $DvtControlPanelDefaults$$ = this.$getZoom$($DropdownItemSprite$$), $newZoom$$4$$ = this.$ConstrainZoom$($DvtControlPanelDefaults$$ * $DvtControlPanelEventManager$$);
      this.$adjustZoomControls$($newZoom$$4$$);
      if(dvt.$PanZoomCanvas$.$RoundFloatForCompare$($DvtControlPanelDefaults$$) != dvt.$PanZoomCanvas$.$RoundFloatForCompare$($newZoom$$4$$)) {
        var $deltaZoom_fireStartEventFunc$$1$$ = $newZoom$$4$$ / $DvtControlPanelDefaults$$;
        $DvtControlPanelEventManager$$ = $JSCompiler_alias_NULL$$;
        $DropdownItemSprite$$ && ($DvtControlPanelEventManager$$ = $DropdownItemSprite$$.$getDestVal$(this.$_contentPane$, this.$_contentPane$.$getMatrix$)) && ($DvtControlPanelEventManager$$ = $DvtControlPanelEventManager$$.$clone$());
        $DvtControlPanelEventManager$$ || ($DvtControlPanelEventManager$$ = this.$_contentPane$.$getMatrix$().$clone$());
        $DvtControlPanelEventManager$$.scale($deltaZoom_fireStartEventFunc$$1$$, $deltaZoom_fireStartEventFunc$$1$$, $DvtControlPanelEvent$$, $DvtPanControl$$);
        var $xDiff$$ = this.$ConstrainPanX$($DvtControlPanelEventManager$$.$_tx$) - $DvtControlPanelEventManager$$.$_tx$, $yDiff$$ = this.$ConstrainPanY$($DvtControlPanelEventManager$$.$_ty$) - $DvtControlPanelEventManager$$.$_ty$;
        this.$FireZoomEvent$(dvt.$ZoomEvent$.$SUBTYPE_ADJUST_PAN_CONSTRAINTS$, $newZoom$$4$$, $DvtControlPanelDefaults$$, $DropdownItemSprite$$, $JSCompiler_alias_NULL$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $xDiff$$, $yDiff$$);
        $xDiff$$ = this.$ConstrainPanX$($DvtControlPanelEventManager$$.$_tx$) - $DvtControlPanelEventManager$$.$_tx$;
        $yDiff$$ = this.$ConstrainPanY$($DvtControlPanelEventManager$$.$_ty$) - $DvtControlPanelEventManager$$.$_ty$;
        $DvtControlPanelEventManager$$.translate($xDiff$$, $yDiff$$);
        var $thisRef$$35$$ = this, $deltaZoom_fireStartEventFunc$$1$$ = function $$deltaZoom_fireStartEventFunc$$1$$$() {
          $thisRef$$35$$.$FireZoomEvent$(dvt.$ZoomEvent$.$SUBTYPE_ZOOMING$, $newZoom$$4$$, $DvtControlPanelDefaults$$, $DropdownItemSprite$$, $JSCompiler_alias_NULL$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $xDiff$$, $yDiff$$)
        }, $fireEndEventFunc$$1$$ = function $$fireEndEventFunc$$1$$$() {
          $thisRef$$35$$.$FireZoomEvent$(dvt.$ZoomEvent$.$SUBTYPE_ZOOMED$, $thisRef$$35$$.$getZoom$(), $DvtControlPanelDefaults$$, $DropdownItemSprite$$, $JSCompiler_alias_NULL$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $xDiff$$, $yDiff$$)
        };
        $DropdownItemSprite$$ ? ($DropdownItemSprite$$.$addProp$(dvt.$Animator$.$TYPE_MATRIX$, this.$_contentPane$, this.$_contentPane$.$getMatrix$, this.$_contentPane$.$setMatrix$, $DvtControlPanelEventManager$$), dvt.$Playable$.$prependOnInit$($DropdownItemSprite$$, $deltaZoom_fireStartEventFunc$$1$$), dvt.$Playable$.$appendOnEnd$($DropdownItemSprite$$, $fireEndEventFunc$$1$$)) : ($deltaZoom_fireStartEventFunc$$1$$(), this.$_contentPane$.$setMatrix$($DvtControlPanelEventManager$$), $fireEndEventFunc$$1$$())
      }
    }
  };
  dvt.$PanZoomCanvas$.prototype.$zoomTo$ = function $dvt$$PanZoomCanvas$$$$zoomTo$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    this.$_bZoomingEnabled$ && ($DvtControlPanelEventManager$$ /= this.$getZoom$($DropdownItemSprite$$), this.$zoomBy$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$))
  };
  dvt.$PanZoomCanvas$.prototype.$center$ = function $dvt$$PanZoomCanvas$$$$center$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = this.$_bPanningEnabled$;
    this.$setPanningEnabled$($JSCompiler_alias_TRUE$$);
    var $DropdownItemSprite$$ = $DvtControlPanelEvent$$;
    $DropdownItemSprite$$ || ($DropdownItemSprite$$ = this.$_contentPane$.$getDimensions$());
    var $DvtControlPanelDefaults$$ = ($DropdownItemSprite$$.x + $DropdownItemSprite$$.$w$ / 2) * this.$getZoom$(), $DropdownItemSprite$$ = ($DropdownItemSprite$$.y + $DropdownItemSprite$$.$h$ / 2) * this.$getZoom$();
    this.$panTo$(this.$_ww$ / 2 - $DvtControlPanelDefaults$$, this.$_hh$ / 2 - $DropdownItemSprite$$, $DvtControlPanelEventManager$$);
    this.$setPanningEnabled$($DvtPanControl$$)
  };
  dvt.$PanZoomCanvas$.prototype.$zoomToFit$ = function $dvt$$PanZoomCanvas$$$$zoomToFit$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    if(this.$_bZoomToFitEnabled$) {
      var $DvtPanControl$$ = this.$_bPanningEnabled$, $DropdownItemSprite$$ = this.$_bZoomingEnabled$;
      this.$setPanningEnabled$($JSCompiler_alias_TRUE$$);
      this.$setZoomingEnabled$($JSCompiler_alias_TRUE$$);
      try {
        var $DvtControlPanelDefaults$$ = $DvtControlPanelEvent$$ ? $DvtControlPanelEvent$$ : this.$_contentPane$.$getDimensions$();
        if($DvtControlPanelDefaults$$ = this.$FireZoomEvent$(dvt.$ZoomEvent$.$SUBTYPE_ZOOM_TO_FIT_CALC_BOUNDS$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$).$_zoomToFitBounds$) {
          var $dz$$6$$ = Math.min((this.$_ww$ - 2 * this.$_zoomToFitPadding$) / $DvtControlPanelDefaults$$.$w$, (this.$_hh$ - 2 * this.$_zoomToFitPadding$) / $DvtControlPanelDefaults$$.$h$), $dz$$6$$ = this.$ConstrainZoom$($dz$$6$$), $dx$$18$$ = this.$_ww$ / 2 - ($DvtControlPanelDefaults$$.x + $DvtControlPanelDefaults$$.$w$ / 2) * $dz$$6$$, $dy$$20$$ = this.$_hh$ / 2 - ($DvtControlPanelDefaults$$.y + $DvtControlPanelDefaults$$.$h$ / 2) * $dz$$6$$, $thisRef$$36$$ = this, $fireStartEventFunc$$2$$ = 
          function $$fireStartEventFunc$$2$$$() {
            $thisRef$$36$$.$FireZoomEvent$(dvt.$ZoomEvent$.$SUBTYPE_ZOOM_TO_FIT_BEGIN$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$)
          }, $fireEndEventFunc$$2$$ = function $$fireEndEventFunc$$2$$$() {
            $thisRef$$36$$.$FireZoomEvent$(dvt.$ZoomEvent$.$SUBTYPE_ZOOM_TO_FIT_END$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$)
          };
          $DvtControlPanelEventManager$$ ? dvt.$Playable$.$prependOnInit$($DvtControlPanelEventManager$$, $fireStartEventFunc$$2$$) : $fireStartEventFunc$$2$$();
          this.$zoomTo$($dz$$6$$, 0, 0, $DvtControlPanelEventManager$$);
          this.$panTo$($dx$$18$$, $dy$$20$$, $DvtControlPanelEventManager$$);
          $DvtControlPanelEventManager$$ ? dvt.$Playable$.$appendOnEnd$($DvtControlPanelEventManager$$, $fireEndEventFunc$$2$$) : $fireEndEventFunc$$2$$()
        }
      }finally {
        this.$setPanningEnabled$($DvtPanControl$$), this.$setZoomingEnabled$($DropdownItemSprite$$)
      }
    }
  };
  dvt.$PanZoomCanvas$.prototype.$calcZoomToFitScale$ = function $dvt$$PanZoomCanvas$$$$calcZoomToFitScale$$($DvtControlPanelEventManager$$) {
    $DvtControlPanelEventManager$$ || ($DvtControlPanelEventManager$$ = this.$_contentPane$.$getDimensions$());
    $DvtControlPanelEventManager$$ = this.$FireZoomEvent$(dvt.$ZoomEvent$.$SUBTYPE_ZOOM_TO_FIT_CALC_BOUNDS$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $DvtControlPanelEventManager$$).$_zoomToFitBounds$;
    $DvtControlPanelEventManager$$ = Math.min((this.$_ww$ - 2 * this.$_zoomToFitPadding$) / $DvtControlPanelEventManager$$.$w$, (this.$_hh$ - 2 * this.$_zoomToFitPadding$) / $DvtControlPanelEventManager$$.$h$);
    return $DvtControlPanelEventManager$$ = this.$ConstrainZoom$($DvtControlPanelEventManager$$)
  };
  dvt.$PanZoomCanvas$.prototype.$getViewport$ = function $dvt$$PanZoomCanvas$$$$getViewport$$() {
    var $DvtControlPanelEventManager$$ = this.$localToStage$(new dvt.$Point$(0, 0)), $DvtControlPanelEvent$$ = this.$localToStage$(new dvt.$Point$(this.$_ww$, this.$_hh$)), $DvtControlPanelEventManager$$ = this.$_contentPane$.$stageToLocal$($DvtControlPanelEventManager$$), $DvtControlPanelEvent$$ = this.$_contentPane$.$stageToLocal$($DvtControlPanelEvent$$);
    return new dvt.$Rectangle$($DvtControlPanelEventManager$$.x, $DvtControlPanelEventManager$$.y, $DvtControlPanelEvent$$.x - $DvtControlPanelEventManager$$.x, $DvtControlPanelEvent$$.y - $DvtControlPanelEventManager$$.y)
  };
  dvt.$PanZoomCanvas$.prototype.$SetElasticConstraints$ = function $dvt$$PanZoomCanvas$$$$SetElasticConstraints$$($DvtControlPanelEventManager$$) {
    if(this.$_bElasticConstraints$ = $DvtControlPanelEventManager$$) {
      this.$_elasticConstraintsAnim$ && (this.$_elasticConstraintsAnim$.$isRunning$() && this.$_elasticConstraintsAnim$.stop(), this.$_elasticConstraintsAnim$ = $JSCompiler_alias_NULL$$)
    }else {
      $DvtControlPanelEventManager$$ = this.$getPanX$();
      var $DvtControlPanelEvent$$ = this.$getPanY$(), $DvtPanControl$$ = this.$getZoom$();
      this.$_bElasticPan$ = $DvtControlPanelEventManager$$ != this.$ConstrainPanX$($DvtControlPanelEventManager$$) || $DvtControlPanelEvent$$ != this.$ConstrainPanY$($DvtControlPanelEvent$$);
      this.$_bElasticZoom$ = $DvtPanControl$$ != this.$ConstrainZoom$($DvtPanControl$$);
      if(this.$_bElasticPan$ || this.$_bElasticZoom$) {
        this.$_elasticConstraintsAnim$ = new dvt.$Animator$(this.$getCtx$(), 0.4), this.$_elasticConstraintsAnim$.$setEasing$(dvt.$Easing$.$cubicOut$), this.$_bElasticZoom$ && this.$zoomBy$(1, 0.5 * this.$_ww$, 0.5 * this.$_hh$, this.$_elasticConstraintsAnim$), this.$_bElasticPan$ && this.$panBy$(0, 0, this.$_elasticConstraintsAnim$), dvt.$Playable$.$appendOnEnd$(this.$_elasticConstraintsAnim$, this.$_elasticConstraintsAnimOnEnd$, this), this.$_bElasticPan$ && this.$FirePanEvent$(dvt.$PanEvent$.$SUBTYPE_ELASTIC_ANIM_BEGIN$, 
        $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, this.$_elasticConstraintsAnim$), this.$_bElasticZoom$ && this.$FireZoomEvent$(dvt.$ZoomEvent$.$SUBTYPE_ELASTIC_ANIM_BEGIN$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, this.$_elasticConstraintsAnim$), this.$_elasticConstraintsAnim$.play()
      }
    }
  };
  dvt.$PanZoomCanvas$.prototype.$_elasticConstraintsAnimOnEnd$ = function $dvt$$PanZoomCanvas$$$$_elasticConstraintsAnimOnEnd$$() {
    this.$_elasticConstraintsAnim$ = $JSCompiler_alias_NULL$$;
    this.$_bElasticPan$ && this.$FirePanEvent$(dvt.$PanEvent$.$SUBTYPE_ELASTIC_ANIM_END$);
    this.$_bElasticZoom$ && this.$FireZoomEvent$(dvt.$ZoomEvent$.$SUBTYPE_ELASTIC_ANIM_END$)
  };
  dvt.$PanZoomCanvas$.prototype.$_panDampingFunc$ = function $dvt$$PanZoomCanvas$$$$_panDampingFunc$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    return Math.sqrt(4 * (0.01 * $DvtControlPanelEvent$$) * $DvtControlPanelEventManager$$)
  };
  dvt.$PanZoomCanvas$.prototype.$_zoomDampingFunc$ = function $dvt$$PanZoomCanvas$$$$_zoomDampingFunc$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    return Math.sqrt(4 * (0.002 * $DvtControlPanelEvent$$) * $DvtControlPanelEventManager$$)
  };
  dvt.$PanZoomCanvas$.prototype.$ConstrainPanX$ = function $dvt$$PanZoomCanvas$$$$ConstrainPanX$$($DvtControlPanelEventManager$$) {
    this.$_minPanX$ != $JSCompiler_alias_NULL$$ && $DvtControlPanelEventManager$$ < this.$_minPanX$ && (this.$_bElasticConstraints$ ? ($DvtControlPanelEventManager$$ = this.$_minPanX$ - $DvtControlPanelEventManager$$, $DvtControlPanelEventManager$$ = this.$_minPanX$ - this.$_panDampingFunc$($DvtControlPanelEventManager$$, this.$_ww$)) : $DvtControlPanelEventManager$$ = this.$_minPanX$);
    this.$_maxPanX$ != $JSCompiler_alias_NULL$$ && $DvtControlPanelEventManager$$ > this.$_maxPanX$ && (this.$_bElasticConstraints$ ? ($DvtControlPanelEventManager$$ -= this.$_maxPanX$, $DvtControlPanelEventManager$$ = this.$_maxPanX$ + this.$_panDampingFunc$($DvtControlPanelEventManager$$, this.$_ww$)) : $DvtControlPanelEventManager$$ = this.$_maxPanX$);
    return $DvtControlPanelEventManager$$
  };
  dvt.$PanZoomCanvas$.prototype.$ConstrainPanY$ = function $dvt$$PanZoomCanvas$$$$ConstrainPanY$$($DvtControlPanelEventManager$$) {
    this.$_minPanY$ != $JSCompiler_alias_NULL$$ && $DvtControlPanelEventManager$$ < this.$_minPanY$ && (this.$_bElasticConstraints$ ? ($DvtControlPanelEventManager$$ = this.$_minPanY$ - $DvtControlPanelEventManager$$, $DvtControlPanelEventManager$$ = this.$_minPanY$ - this.$_panDampingFunc$($DvtControlPanelEventManager$$, this.$_hh$)) : $DvtControlPanelEventManager$$ = this.$_minPanY$);
    this.$_maxPanY$ != $JSCompiler_alias_NULL$$ && $DvtControlPanelEventManager$$ > this.$_maxPanY$ && (this.$_bElasticConstraints$ ? ($DvtControlPanelEventManager$$ -= this.$_maxPanY$, $DvtControlPanelEventManager$$ = this.$_maxPanY$ + this.$_panDampingFunc$($DvtControlPanelEventManager$$, this.$_hh$)) : $DvtControlPanelEventManager$$ = this.$_maxPanY$);
    return $DvtControlPanelEventManager$$
  };
  dvt.$PanZoomCanvas$.prototype.$ConstrainZoom$ = function $dvt$$PanZoomCanvas$$$$ConstrainZoom$$($DvtControlPanelEventManager$$) {
    $DvtControlPanelEventManager$$ = Math.max(0, $DvtControlPanelEventManager$$);
    this.$_minZoom$ && $DvtControlPanelEventManager$$ < this.$_minZoom$ && (this.$_bElasticConstraints$ ? ($DvtControlPanelEventManager$$ = this.$_minZoom$ - $DvtControlPanelEventManager$$, $DvtControlPanelEventManager$$ = this.$_minZoom$ - this.$_zoomDampingFunc$($DvtControlPanelEventManager$$, this.$_maxZoom$ - this.$_minZoom$)) : $DvtControlPanelEventManager$$ = this.$_minZoom$);
    this.$_maxZoom$ && $DvtControlPanelEventManager$$ > this.$_maxZoom$ && (this.$_bElasticConstraints$ ? ($DvtControlPanelEventManager$$ -= this.$_maxZoom$, $DvtControlPanelEventManager$$ = this.$_maxZoom$ + this.$_zoomDampingFunc$($DvtControlPanelEventManager$$, this.$_maxZoom$ - this.$_minZoom$)) : $DvtControlPanelEventManager$$ = this.$_maxZoom$);
    return $DvtControlPanelEventManager$$
  };
  dvt.$PanZoomCanvas$.$RoundFloatForCompare$ = function $dvt$$PanZoomCanvas$$$RoundFloatForCompare$$($DvtControlPanelEventManager$$) {
    return Math.round(1E5 * $DvtControlPanelEventManager$$)
  };
  dvt.$PanZoomCanvas$.prototype.$renderComponent$ = function $dvt$$PanZoomCanvas$$$$renderComponent$$() {
    var $DvtControlPanelEventManager$$ = this.$_controlPanel$;
    $DvtControlPanelEventManager$$ && (this.$addChild$($DvtControlPanelEventManager$$), this.$PositionControlPanel$(), $DvtControlPanelEventManager$$.$renderComponent$())
  };
  dvt.$PanZoomCanvas$.prototype.$setControlPanel$ = $JSCompiler_set$$("$_controlPanel$");
  dvt.$PanZoomCanvas$.prototype.$PositionControlPanel$ = function $dvt$$PanZoomCanvas$$$$PositionControlPanel$$() {
    var $DvtControlPanelEventManager$$ = this.$_view$.$getSubcomponentStyles$(), $DvtControlPanelEvent$$ = dvt.$StyleUtils$.$getStyle$($DvtControlPanelEventManager$$, dvt.$ControlPanel$.$CP_PADDING_SIDE$, 0), $DvtPanControl$$ = dvt.$StyleUtils$.$getStyle$($DvtControlPanelEventManager$$, dvt.$ControlPanel$.$CP_PADDING_TOP$, 0), $DvtControlPanelEventManager$$ = dvt.$StyleUtils$.$getStyle$($DvtControlPanelEventManager$$, dvt.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0), $DvtControlPanelEvent$$ = 
    dvt.$Agent$.$isRightToLeft$(this.$getCtx$()) ? this.$_ww$ - $DvtControlPanelEventManager$$ - $DvtControlPanelEvent$$ : $DvtControlPanelEvent$$;
    this.$_controlPanel$.$setTranslate$($DvtControlPanelEvent$$, $DvtPanControl$$)
  };
  dvt.$PanZoomCanvas$.prototype.$GetRelativeMousePosition$ = function $dvt$$PanZoomCanvas$$$$GetRelativeMousePosition$$($DvtControlPanelEventManager$$) {
    return this.$getCtx$().$pageToStageCoords$($DvtControlPanelEventManager$$.pageX, $DvtControlPanelEventManager$$.pageY)
  };
  dvt.$PanZoomCanvas$.prototype.$FirePanEvent$ = function $dvt$$PanZoomCanvas$$$$FirePanEvent$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $animator$$123$$) {
    $DvtControlPanelEventManager$$ = new dvt.$PanEvent$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $animator$$123$$);
    this.$FireListener$($DvtControlPanelEventManager$$)
  };
  dvt.$PanZoomCanvas$.prototype.$FireZoomEvent$ = function $dvt$$PanZoomCanvas$$$$FireZoomEvent$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $xx$$46$$, $yy$$46$$, $tx$$19$$, $ty$$20$$) {
    $DvtControlPanelEventManager$$ = new dvt.$ZoomEvent$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, new dvt.$Point$($xx$$46$$, $yy$$46$$), $tx$$19$$, $ty$$20$$);
    this.$FireListener$($DvtControlPanelEventManager$$);
    return $DvtControlPanelEventManager$$
  };
  dvt.$PanZoomCanvas$.prototype.$zoomAndCenter$ = function $dvt$$PanZoomCanvas$$$$zoomAndCenter$$() {
    this.$FireZoomEvent$(dvt.$ZoomEvent$.$SUBTYPE_ZOOM_AND_CENTER$)
  };
  dvt.$PanZoomCanvas$.prototype.$getNextZoomLevel$ = function $dvt$$PanZoomCanvas$$$$getNextZoomLevel$$($DvtControlPanelEventManager$$) {
    $DvtControlPanelEventManager$$ += this.$_zoomIncrement$;
    $DvtControlPanelEventManager$$ > this.$getMaxZoom$() && ($DvtControlPanelEventManager$$ = this.$getMaxZoom$());
    return $DvtControlPanelEventManager$$
  };
  dvt.$PanZoomCanvas$.prototype.$getPrevZoomLevel$ = function $dvt$$PanZoomCanvas$$$$getPrevZoomLevel$$($DvtControlPanelEventManager$$) {
    $DvtControlPanelEventManager$$ -= this.$_zoomIncrement$;
    $DvtControlPanelEventManager$$ < this.$getMinZoom$() && ($DvtControlPanelEventManager$$ = this.$getMinZoom$());
    return $DvtControlPanelEventManager$$
  };
  dvt.$PanZoomCanvas$.prototype.$setMinZoom$ = $JSCompiler_set$$("$_minZoom$");
  dvt.$PanZoomCanvas$.prototype.$getMinZoom$ = $JSCompiler_get$$("$_minZoom$");
  dvt.$PanZoomCanvas$.prototype.$setMaxZoom$ = function $dvt$$PanZoomCanvas$$$$setMaxZoom$$($DvtControlPanelEventManager$$) {
    0 > $DvtControlPanelEventManager$$ && ($DvtControlPanelEventManager$$ = 1);
    this.$_maxZoom$ = $DvtControlPanelEventManager$$
  };
  dvt.$PanZoomCanvas$.prototype.$getMaxZoom$ = $JSCompiler_get$$("$_maxZoom$");
  dvt.$PanZoomCanvas$.prototype.$setMinPanX$ = $JSCompiler_set$$("$_minPanX$");
  dvt.$PanZoomCanvas$.prototype.$setMaxPanX$ = $JSCompiler_set$$("$_maxPanX$");
  dvt.$PanZoomCanvas$.prototype.$setMinPanY$ = $JSCompiler_set$$("$_minPanY$");
  dvt.$PanZoomCanvas$.prototype.$setMaxPanY$ = $JSCompiler_set$$("$_maxPanY$");
  dvt.$PanZoomCanvas$.prototype.$setAnimationDuration$ = $JSCompiler_set$$("$_animationDuration$");
  dvt.$PanZoomCanvas$.prototype.$getAnimationDuration$ = $JSCompiler_get$$("$_animationDuration$");
  dvt.$PanZoomCanvas$.prototype.$setPanningEnabled$ = $JSCompiler_set$$("$_bPanningEnabled$");
  dvt.$PanZoomCanvas$.prototype.$setZoomingEnabled$ = $JSCompiler_set$$("$_bZoomingEnabled$");
  dvt.$PanZoomCanvas$.prototype.$setZoomToFitEnabled$ = $JSCompiler_set$$("$_bZoomToFitEnabled$");
  dvt.$PanZoomCanvas$.prototype.$adjustZoomControls$ = function $dvt$$PanZoomCanvas$$$$adjustZoomControls$$($DvtControlPanelEventManager$$) {
    if(this.$_controlPanel$) {
      var $DvtControlPanelEvent$$ = this.$getZoom$();
      $DvtControlPanelEventManager$$ == this.$getMinZoom$() && $DvtControlPanelEventManager$$ == this.$getMaxZoom$() ? (this.$_controlPanel$.$enableZoomInControl$($JSCompiler_alias_FALSE$$), this.$_controlPanel$.$enableZoomOutControl$($JSCompiler_alias_FALSE$$)) : $DvtControlPanelEvent$$ <= $DvtControlPanelEventManager$$ && $DvtControlPanelEventManager$$ == this.$getMaxZoom$() ? (this.$_controlPanel$.$enableZoomInControl$($JSCompiler_alias_FALSE$$), this.$_controlPanel$.$enableZoomOutControl$($JSCompiler_alias_TRUE$$)) : 
      $DvtControlPanelEvent$$ >= $DvtControlPanelEventManager$$ && $DvtControlPanelEventManager$$ == this.$getMinZoom$() ? (this.$_controlPanel$.$enableZoomInControl$($JSCompiler_alias_TRUE$$), this.$_controlPanel$.$enableZoomOutControl$($JSCompiler_alias_FALSE$$)) : (this.$_controlPanel$.$enableZoomInControl$($JSCompiler_alias_TRUE$$), this.$_controlPanel$.$enableZoomOutControl$($JSCompiler_alias_TRUE$$))
    }
  };
  dvt.$PanZoomCanvas$.prototype.$setCurrentTouchTargets$ = $JSCompiler_set$$("$_currTargets$");
  dvt.$PanZoomCanvas$.prototype.$resetTouchTargets$ = function $dvt$$PanZoomCanvas$$$$resetTouchTargets$$() {
    dvt.$Agent$.$isTouchDevice$() && (this.$_currTargets$ = $JSCompiler_alias_NULL$$, this.$_eventManager$.$TouchManager$.reset())
  };
  dvt.$PanZoomCanvas$.prototype.$panZoomEnd$ = function $dvt$$PanZoomCanvas$$$$panZoomEnd$$() {
    this.$_eventManager$.$PanZoomEnd$()
  };
  dvt.$PanZoomCanvas$.prototype.$setInteractionEnabled$ = function $dvt$$PanZoomCanvas$$$$setInteractionEnabled$$($DvtControlPanelEventManager$$) {
    $DvtControlPanelEventManager$$ ? this.$_eventManager$.$addListeners$(this) : this.$_eventManager$.$removeListeners$(this)
  };
  dvt.$PanZoomCanvasEventManager$ = function $dvt$$PanZoomCanvasEventManager$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    this.Init($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$)
  };
  dvt.$Obj$.$createSubclass$(dvt.$PanZoomCanvasEventManager$, dvt.$EventManager$);
  dvt.$PanZoomCanvasEventManager$.$EVENT_INFO_PANNED_KEY$ = "panned";
  dvt.$PanZoomCanvasEventManager$.prototype.Init = function $dvt$$PanZoomCanvasEventManager$$$Init$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    dvt.$PanZoomCanvasEventManager$.$superclass$.Init.call(this, $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$);
    this.$_pzc$ = $DvtPanControl$$;
    this.$_zoomAnimator$ = $JSCompiler_alias_NULL$$;
    this.$_bDragging$ = this.$_bZooming$ = this.$_bPanned$ = this.$_bPanning$ = $JSCompiler_alias_FALSE$$;
    this.$_bMomentumPanning$ = $JSCompiler_alias_TRUE$$
  };
  dvt.$PanZoomCanvasEventManager$.$_PAN_TOUCH_KEY$ = "panTouch";
  dvt.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$ = "zoomTouch";
  dvt.$PanZoomCanvasEventManager$.$_MOMENTUM_START_TIMER_INTERVAL$ = 50;
  dvt.$PanZoomCanvasEventManager$.prototype.$addListeners$ = function $dvt$$PanZoomCanvasEventManager$$$$addListeners$$($DvtControlPanelEventManager$$) {
    dvt.$PanZoomCanvasEventManager$.$superclass$.$addListeners$.call(this, $DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$.$addEvtListener$(dvt.$MouseEvent$.$MOUSEWHEEL$, this.$OnMouseWheel$, $JSCompiler_alias_FALSE$$, this)
  };
  dvt.$PanZoomCanvasEventManager$.prototype.$removeListeners$ = function $dvt$$PanZoomCanvasEventManager$$$$removeListeners$$($DvtControlPanelEventManager$$) {
    dvt.$PanZoomCanvasEventManager$.$superclass$.$removeListeners$.call(this, $DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$.$removeEvtListener$(dvt.$MouseEvent$.$MOUSEWHEEL$, this.$OnMouseWheel$, $JSCompiler_alias_FALSE$$, this)
  };
  dvt.$PanZoomCanvasEventManager$.prototype.$OnMouseDown$ = function $dvt$$PanZoomCanvasEventManager$$$$OnMouseDown$$($DvtControlPanelEventManager$$) {
    this.$_bPanned$ = this.$_bDragging$ = $JSCompiler_alias_FALSE$$;
    $DvtControlPanelEventManager$$.button != dvt.$MouseEvent$.$RIGHT_CLICK_BUTTON$ && ($DvtControlPanelEventManager$$ = this.$_callbackObj$.$GetRelativeMousePosition$($DvtControlPanelEventManager$$), this.$_mx$ = $DvtControlPanelEventManager$$.x, this.$_my$ = $DvtControlPanelEventManager$$.y, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_bDown$ = $JSCompiler_alias_TRUE$$, this.$_origPanX$ = this.$_callbackObj$.$getPanX$(), this.$_origPanY$ = this.$_callbackObj$.$getPanY$(), this.$_origZoom$ = 
    this.$_callbackObj$.$getZoom$(), this.$_bMomentumPanning$ && (this.$_currTime$ = (new Date).getTime()));
    this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
  };
  dvt.$PanZoomCanvasEventManager$.prototype.$OnMouseMove$ = function $dvt$$PanZoomCanvasEventManager$$$$OnMouseMove$$($DvtControlPanelEventManager$$) {
    if(this.$_bDown$) {
      this.$_bDragging$ = $JSCompiler_alias_TRUE$$;
      var $DvtControlPanelEvent$$ = this.$_callbackObj$.$GetRelativeMousePosition$($DvtControlPanelEventManager$$), $DvtPanControl$$ = $DvtControlPanelEvent$$.x, $DvtControlPanelEvent$$ = $DvtControlPanelEvent$$.y;
      $DvtControlPanelEventManager$$.ctrlKey ? (this.$_bZooming$ || (this.$_callback$.call(this.$_callbackObj$, new dvt.$ZoomEvent$(dvt.$ZoomEvent$.$SUBTYPE_DRAG_ZOOM_BEGIN$)), this.$_bZooming$ = $JSCompiler_alias_TRUE$$, this.$_pzc$.$_controlPanel$ && this.$_pzc$.$_controlPanel$.$mouseDragPanningStarted$(), this.$_callbackObj$.$SetElasticConstraints$($JSCompiler_alias_TRUE$$)), $DvtControlPanelEventManager$$ = this.$_origZoom$ * Math.pow(1 + 0.01 * (this.$_py$ >= $DvtControlPanelEvent$$ ? 1 : -1), 
      Math.abs(this.$_py$ - $DvtControlPanelEvent$$)), this.$_callbackObj$.$_bPanningEnabled$ ? this.$_callbackObj$.$zoomTo$($DvtControlPanelEventManager$$, this.$_px$, this.$_py$) : this.$_callbackObj$.$zoomTo$($DvtControlPanelEventManager$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$)) : this.$_handlePanMove$($DvtPanControl$$, $DvtControlPanelEvent$$);
      this.$_mx$ = $DvtPanControl$$;
      this.$_my$ = $DvtControlPanelEvent$$
    }
  };
  dvt.$PanZoomCanvasEventManager$.prototype.$OnMouseUp$ = function $dvt$$PanZoomCanvasEventManager$$$$OnMouseUp$$($DvtControlPanelEventManager$$) {
    this.$_bDragging$ = this.$_bDown$ = $JSCompiler_alias_FALSE$$;
    this.$_bPanning$ && this.$_handlePanEnd$();
    this.$_bZooming$ && this.$_handleZoomEnd$();
    dvt.$PanZoomCanvasEventManager$.$superclass$.$OnMouseUp$.call(this, $DvtControlPanelEventManager$$)
  };
  dvt.$PanZoomCanvasEventManager$.prototype.$OnClick$ = function $dvt$$PanZoomCanvasEventManager$$$$OnClick$$($DvtControlPanelEventManager$$) {
    if(this.$_bDragging$ || this.$_bPanned$) {
      this.$_bPanned$ = this.$_bDragging$ = $JSCompiler_alias_FALSE$$, dvt.$EventManager$.$consumeEvent$($DvtControlPanelEventManager$$)
    }
  };
  dvt.$PanZoomCanvasEventManager$.prototype.$OnMouseOut$ = function $dvt$$PanZoomCanvasEventManager$$$$OnMouseOut$$($DvtControlPanelEventManager$$) {
    if(this.$_bDown$ && (this.$_bPanning$ || this.$_bZooming$)) {
      (!$DvtControlPanelEventManager$$.relatedTarget || $DvtControlPanelEventManager$$.relatedTarget == $JSCompiler_alias_NULL$$) && this.$OnMouseUp$($DvtControlPanelEventManager$$)
    }
    dvt.$PanZoomCanvasEventManager$.$superclass$.$OnMouseOut$.call(this, $DvtControlPanelEventManager$$)
  };
  dvt.$PanZoomCanvasEventManager$.prototype.$OnMouseWheel$ = function $dvt$$PanZoomCanvasEventManager$$$$OnMouseWheel$$($DvtControlPanelEventManager$$) {
    if($DvtControlPanelEventManager$$.wheelDelta && 0 !== $DvtControlPanelEventManager$$.wheelDelta && this.$_callbackObj$.$_bZoomingEnabled$) {
      var $DvtControlPanelEvent$$ = this.$_callbackObj$.$getZoom$();
      this.$_zoomAnimator$ && ($DvtControlPanelEvent$$ = this.$_zoomAnimator$, this.$_zoomAnimator$.stop(), $DvtControlPanelEvent$$ = this.$_callbackObj$.$getZoom$($DvtControlPanelEvent$$), this.$_zoomAnimator$ = $JSCompiler_alias_NULL$$);
      this.$_zoomAnimator$ = $JSCompiler_alias_NULL$$;
      var $DvtPanControl$$ = $DvtControlPanelEventManager$$.wheelDelta;
      dvt.$Agent$.$isPlatformGecko$() && ($DvtPanControl$$ = -$DvtPanControl$$);
      $DvtControlPanelEvent$$ *= 1 + this.$_callbackObj$.$_zoomIncrement$ * $DvtPanControl$$ / Math.abs($DvtPanControl$$);
      $DvtPanControl$$ = this.$_callbackObj$.$GetRelativeMousePosition$($DvtControlPanelEventManager$$);
      this.$getCtx$().$getDocumentUtils$().$cancelDomEvent$($DvtControlPanelEventManager$$);
      this.$_callbackObj$.$_bPanningEnabled$ ? this.$_callbackObj$.$zoomTo$($DvtControlPanelEvent$$, $DvtPanControl$$.x, $DvtPanControl$$.y, this.$_zoomAnimator$) : this.$_callbackObj$.$zoomTo$($DvtControlPanelEvent$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, this.$_zoomAnimator$);
      this.$_zoomAnimator$ && (dvt.$Playable$.$appendOnEnd$(this.$_zoomAnimator$, this.$_clearZoomAnimator$, this), this.$_zoomAnimator$.play())
    }
  };
  dvt.$PanZoomCanvasEventManager$.prototype.$_clearZoomAnimator$ = function $dvt$$PanZoomCanvasEventManager$$$$_clearZoomAnimator$$() {
    this.$_zoomAnimator$ = $JSCompiler_alias_NULL$$
  };
  dvt.$PanZoomCanvasEventManager$.prototype.$_handleMomentumStartTimer$ = $JSCompiler_emptyFn$$();
  dvt.$PanZoomCanvasEventManager$.prototype.$_handleMomentumTimer$ = function $dvt$$PanZoomCanvasEventManager$$$$_handleMomentumTimer$$() {
    var $DvtControlPanelEventManager$$ = 1 - 0.04 * this.$_momentumIterCount$, $DvtControlPanelEventManager$$ = $DvtControlPanelEventManager$$ * $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$ = this.$_momentumTimer$.$_interval$, $DvtPanControl$$ = $DvtControlPanelEventManager$$ * this.$_momentumXperMS$ * $DvtControlPanelEvent$$, $DvtControlPanelEventManager$$ = $DvtControlPanelEventManager$$ * this.$_momentumYperMS$ * $DvtControlPanelEvent$$;
    this.$_momentumDx$ += $DvtPanControl$$;
    this.$_momentumDy$ += $DvtControlPanelEventManager$$;
    var $DvtControlPanelEvent$$ = this.$_origPanX$ + this.$_mx$ - this.$_px$ + this.$_momentumDx$, $DropdownItemSprite$$ = this.$_origPanY$ + this.$_my$ - this.$_py$ + this.$_momentumDy$;
    this.$_callbackObj$.$panTo$($DvtControlPanelEvent$$, $DropdownItemSprite$$);
    var $DvtControlPanelDefaults$$ = $JSCompiler_alias_FALSE$$;
    if(24 <= this.$_momentumIterCount$) {
      $DvtControlPanelDefaults$$ = $JSCompiler_alias_TRUE$$
    }else {
      var $currX$$15$$ = this.$_callbackObj$.$getPanX$(), $currY$$18$$ = this.$_callbackObj$.$getPanY$();
      if(Math.abs($currX$$15$$ - $DvtControlPanelEvent$$) > Math.abs($DvtPanControl$$) || Math.abs($currY$$18$$ - $DropdownItemSprite$$) > Math.abs($DvtControlPanelEventManager$$)) {
        $DvtControlPanelDefaults$$ = $JSCompiler_alias_TRUE$$
      }
    }
    $DvtControlPanelDefaults$$ ? (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset(), this.$_callbackObj$.$SetElasticConstraints$($JSCompiler_alias_FALSE$$)) : this.$_momentumIterCount$++
  };
  dvt.$PanZoomCanvasEventManager$.prototype.$HandleImmediateTouchStartInternal$ = function $dvt$$PanZoomCanvasEventManager$$$$HandleImmediateTouchStartInternal$$($DvtControlPanelEventManager$$) {
    this.$_callbackObj$.$_bZoomingEnabled$ && this.$TouchManager$.$processAssociatedTouchAttempt$($DvtControlPanelEventManager$$, this.$ZoomStartTouch$, this);
    this.$_callbackObj$.$_bPanningEnabled$ && this.$TouchManager$.$processAssociatedTouchAttempt$($DvtControlPanelEventManager$$, this.$PanStartTouch$, this)
  };
  dvt.$PanZoomCanvasEventManager$.prototype.$HandleImmediateTouchMoveInternal$ = function $dvt$$PanZoomCanvasEventManager$$$$HandleImmediateTouchMoveInternal$$($DvtControlPanelEventManager$$) {
    this.$_callbackObj$.$_bZoomingEnabled$ && this.$TouchManager$.$processAssociatedTouchMove$($DvtControlPanelEventManager$$, dvt.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$);
    this.$_callbackObj$.$_bPanningEnabled$ && this.$TouchManager$.$processAssociatedTouchMove$($DvtControlPanelEventManager$$, dvt.$PanZoomCanvasEventManager$.$_PAN_TOUCH_KEY$);
    (this.$_callbackObj$.$_bZoomingEnabled$ || this.$_callbackObj$.$_bPanningEnabled$) && $DvtControlPanelEventManager$$.preventDefault()
  };
  dvt.$PanZoomCanvasEventManager$.prototype.$HandleImmediateTouchEndInternal$ = function $dvt$$PanZoomCanvasEventManager$$$$HandleImmediateTouchEndInternal$$($DvtControlPanelEventManager$$) {
    this.$_callbackObj$.$_bZoomingEnabled$ && this.$TouchManager$.$processAssociatedTouchEnd$($DvtControlPanelEventManager$$, dvt.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$);
    this.$_callbackObj$.$_bPanningEnabled$ && this.$TouchManager$.$processAssociatedTouchEnd$($DvtControlPanelEventManager$$, dvt.$PanZoomCanvasEventManager$.$_PAN_TOUCH_KEY$)
  };
  dvt.$PanZoomCanvasEventManager$.prototype.$ZoomStartTouch$ = function $dvt$$PanZoomCanvasEventManager$$$$ZoomStartTouch$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = this.$TouchManager$.$getTouchIdsForObj$(dvt.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$);
    1 >= $DvtPanControl$$.length && (this.$TouchManager$.$saveProcessedTouch$($DvtControlPanelEvent$$.identifier, dvt.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$, dvt.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$, dvt.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$, this.$ZoomMoveTouch$, this.$ZoomEndTouch$, this), this.$_mx$ = $DvtControlPanelEvent$$.pageX, this.$_my$ = $DvtControlPanelEvent$$.pageY, this.$_px$ = this.$_mx$, this.$_py$ = this.$_my$, this.$_origPanX$ = this.$_callbackObj$.$getPanX$(), 
    this.$_origPanY$ = this.$_callbackObj$.$getPanY$(), this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_origDist$ = $JSCompiler_alias_NULL$$, $DvtPanControl$$ = this.$TouchManager$.$getTouchIdsForObj$(dvt.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$), this.$_callbackObj$.$setCurrentTouchTargets$(this.$TouchManager$.$getStartTargetsByIds$($DvtPanControl$$)));
    this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
  };
  dvt.$PanZoomCanvasEventManager$.prototype.$ZoomMoveTouch$ = function $dvt$$PanZoomCanvasEventManager$$$$ZoomMoveTouch$$() {
    var $DvtControlPanelEventManager$$ = this.$TouchManager$.$getTouchIdsForObj$(dvt.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$);
    if(2 == $DvtControlPanelEventManager$$.length) {
      var $DvtControlPanelEvent$$ = this.$TouchManager$.$getMultiTouchData$($DvtControlPanelEventManager$$);
      if($DvtControlPanelEvent$$) {
        this.$_bZooming$ || (this.$_bZooming$ = $JSCompiler_alias_TRUE$$, this.$TouchManager$.$blockTouchHold$(), this.$_callback$.call(this.$_callbackObj$, new dvt.$ZoomEvent$(dvt.$ZoomEvent$.$SUBTYPE_DRAG_ZOOM_BEGIN$)), this.$_pzc$.$_controlPanel$ && this.$_pzc$.$_controlPanel$.$mouseDragPanningStarted$());
        this.$_callbackObj$.$SetElasticConstraints$($JSCompiler_alias_TRUE$$);
        this.$_origDist$ == $JSCompiler_alias_NULL$$ && (this.$_origDist$ = $DvtControlPanelEvent$$.$dist$ - $DvtControlPanelEvent$$.$dz$);
        var $DvtPanControl$$ = this.$_origZoom$ * ($DvtControlPanelEvent$$.$dist$ / this.$_origDist$), $DropdownItemSprite$$ = this.$_pzc$.$getCtx$().$pageToStageCoords$($DvtControlPanelEvent$$.$cx$, $DvtControlPanelEvent$$.$cy$);
        this.$hideTooltip$();
        this.$_callbackObj$.$setCurrentTouchTargets$(this.$TouchManager$.$getStartTargetsByIds$($DvtControlPanelEventManager$$));
        this.$_callbackObj$.$zoomTo$($DvtPanControl$$, $DropdownItemSprite$$.x, $DropdownItemSprite$$.y);
        this.$_callbackObj$.$panBy$($DvtControlPanelEvent$$.$dcx$, $DvtControlPanelEvent$$.$dcy$)
      }
    }
  };
  dvt.$PanZoomCanvasEventManager$.prototype.$ZoomEndTouch$ = function $dvt$$PanZoomCanvasEventManager$$$$ZoomEndTouch$$() {
    this.$_bZooming$ && (this.$_origDist$ = $JSCompiler_alias_NULL$$, this.$TouchManager$.$unblockTouchHold$(), this.$_handleZoomEnd$());
    var $DvtControlPanelEventManager$$ = this.$TouchManager$.$getTouchIdsForObj$(dvt.$PanZoomCanvasEventManager$.$_ZOOM_TOUCH_KEY$);
    this.$_callbackObj$.$setCurrentTouchTargets$(this.$TouchManager$.$getStartTargetsByIds$($DvtControlPanelEventManager$$));
    0 == $DvtControlPanelEventManager$$.length && this.$_callback$.call(this.$_callbackObj$, new dvt.$ZoomEvent$(dvt.$ZoomEvent$.$SUBTYPE_ZOOM_END$))
  };
  dvt.$PanZoomCanvasEventManager$.prototype.$PanStartTouch$ = function $dvt$$PanZoomCanvasEventManager$$$$PanStartTouch$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    !this.$_bZooming$ && 1 >= this.$TouchManager$.$getTouchIdsForObj$(dvt.$PanZoomCanvasEventManager$.$_PAN_TOUCH_KEY$).length && (this.$TouchManager$.$saveProcessedTouch$($DvtControlPanelEvent$$.identifier, dvt.$PanZoomCanvasEventManager$.$_PAN_TOUCH_KEY$, dvt.$PanZoomCanvasEventManager$.$_PAN_TOUCH_KEY$, dvt.$PanZoomCanvasEventManager$.$_PAN_TOUCH_KEY$, this.$PanMoveTouch$, this.$PanEndTouch$, this), this.$_mx$ = $DvtControlPanelEvent$$.pageX, this.$_my$ = $DvtControlPanelEvent$$.pageY, this.$_px$ = 
    this.$_mx$, this.$_py$ = this.$_my$, this.$_origPanX$ = this.$_callbackObj$.$getPanX$(), this.$_origPanY$ = this.$_callbackObj$.$getPanY$(), this.$_origZoom$ = this.$_callbackObj$.$getZoom$(), this.$_bMomentumPanning$ && (this.$_currTime$ = (new Date).getTime()));
    this.$_momentumTimer$ && this.$_momentumTimer$.$isRunning$() && (this.$_momentumTimer$.stop(), this.$_momentumTimer$.reset())
  };
  dvt.$PanZoomCanvasEventManager$.prototype.$PanMoveTouch$ = function $dvt$$PanZoomCanvasEventManager$$$$PanMoveTouch$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    if(!this.$_bZooming$ && 1 == this.$TouchManager$.$getTouchIdsForObj$(dvt.$PanZoomCanvasEventManager$.$_PAN_TOUCH_KEY$).length) {
      var $DvtPanControl$$ = $DvtControlPanelEvent$$.pageX, $DropdownItemSprite$$ = $DvtControlPanelEvent$$.pageY;
      this.$_handlePanMove$($DvtPanControl$$, $DropdownItemSprite$$);
      this.$_mx$ = $DvtPanControl$$;
      this.$_my$ = $DropdownItemSprite$$
    }
  };
  dvt.$PanZoomCanvasEventManager$.prototype.$PanEndTouch$ = function $dvt$$PanZoomCanvasEventManager$$$$PanEndTouch$$($DvtControlPanelEventManager$$) {
    !this.$_bZooming$ && this.$_bPanning$ && (this.$_handlePanEnd$(), this.$SetEventInfo$($DvtControlPanelEventManager$$, "panned", $JSCompiler_alias_TRUE$$))
  };
  dvt.$PanZoomCanvasEventManager$.prototype.$_handleZoomEnd$ = function $dvt$$PanZoomCanvasEventManager$$$$_handleZoomEnd$$() {
    this.$_callback$.call(this.$_callbackObj$, new dvt.$ZoomEvent$(dvt.$ZoomEvent$.$SUBTYPE_DRAG_ZOOM_END$));
    this.$_bZooming$ = $JSCompiler_alias_FALSE$$;
    this.$_pzc$.$_controlPanel$ && this.$_pzc$.$_controlPanel$.$mouseDragPanningEnded$();
    this.$_callbackObj$.$SetElasticConstraints$($JSCompiler_alias_FALSE$$)
  };
  dvt.$PanZoomCanvasEventManager$.prototype.$_handlePanMove$ = function $dvt$$PanZoomCanvasEventManager$$$$_handlePanMove$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.$_bPanning$ || (this.$_callback$.call(this.$_callbackObj$, new dvt.$PanEvent$(dvt.$PanEvent$.$SUBTYPE_DRAG_PAN_BEGIN$)), this.$_bPanning$ = $JSCompiler_alias_TRUE$$, this.$_pzc$.$_controlPanel$ && this.$_pzc$.$_controlPanel$.$mouseDragPanningStarted$(), this.$_callbackObj$.$SetElasticConstraints$($JSCompiler_alias_TRUE$$), this.$_bMomentumPanning$ && (this.$_arLastNMouseMoves$ = []));
    this.$_callbackObj$.$panTo$(this.$_origPanX$ + $DvtControlPanelEventManager$$ - this.$_px$, this.$_origPanY$ + $DvtControlPanelEvent$$ - this.$_py$);
    this.$_bMomentumPanning$ && (this.$_lastTime$ = this.$_currTime$, this.$_currTime$ = (new Date).getTime(), this.$_momentumStartTimer$ ? (this.$_momentumStartTimer$.$isRunning$() && this.$_momentumStartTimer$.stop(), this.$_momentumStartTimer$.reset()) : this.$_momentumStartTimer$ = new dvt.$Timer$(this.$_context$, dvt.$PanZoomCanvasEventManager$.$_MOMENTUM_START_TIMER_INTERVAL$, this.$_handleMomentumStartTimer$, this, 1), this.$_arLastNMouseMoves$.push({$dt$:this.$_currTime$ - this.$_lastTime$, 
    $dx$:$DvtControlPanelEventManager$$ - this.$_mx$, $dy$:$DvtControlPanelEvent$$ - this.$_my$}), 5 < this.$_arLastNMouseMoves$.length && this.$_arLastNMouseMoves$.splice(0, 1), this.$_momentumStartTimer$.start())
  };
  dvt.$PanZoomCanvasEventManager$.prototype.$_handlePanEnd$ = function $dvt$$PanZoomCanvasEventManager$$$$_handlePanEnd$$() {
    this.$_callback$.call(this.$_callbackObj$, new dvt.$PanEvent$(dvt.$PanEvent$.$SUBTYPE_DRAG_PAN_END$));
    this.$_bPanning$ = $JSCompiler_alias_FALSE$$;
    this.$_bPanned$ = $JSCompiler_alias_TRUE$$;
    this.$_pzc$.$_controlPanel$ && this.$_pzc$.$_controlPanel$.$mouseDragPanningEnded$();
    if(this.$_momentumStartTimer$ && this.$_momentumStartTimer$.$isRunning$()) {
      this.$_momentumStartTimer$.stop();
      this.$_momentumStartTimer$.reset();
      this.$_momentumTimer$ ? this.$_momentumTimer$.reset() : this.$_momentumTimer$ = new dvt.$Timer$(this.$_context$, dvt.$PanZoomCanvasEventManager$.$_MOMENTUM_START_TIMER_INTERVAL$, this.$_handleMomentumTimer$, this);
      for(var $DvtControlPanelEventManager$$ = 0, $DvtControlPanelEvent$$ = 0, $DvtPanControl$$ = 0, $DropdownItemSprite$$ = this.$_arLastNMouseMoves$.length;0 < this.$_arLastNMouseMoves$.length;) {
        var $DvtControlPanelDefaults$$ = this.$_arLastNMouseMoves$.pop(), $DvtControlPanelEventManager$$ = $DvtControlPanelEventManager$$ + $DvtControlPanelDefaults$$.$dt$, $DvtControlPanelEvent$$ = $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$.$dx$, $DvtPanControl$$ = $DvtPanControl$$ + $DvtControlPanelDefaults$$.$dy$
      }
      this.$_arLastNMouseMoves$ = $JSCompiler_alias_NULL$$;
      this.$_momentumXperMS$ = $DvtControlPanelEvent$$ / $DvtControlPanelEventManager$$;
      this.$_momentumYperMS$ = $DvtPanControl$$ / $DvtControlPanelEventManager$$;
      this.$_momentumTimer$.setInterval(Math.ceil($DvtControlPanelEventManager$$ / $DropdownItemSprite$$));
      this.$_momentumIterCount$ = 1;
      this.$_momentumDy$ = this.$_momentumDx$ = 0;
      this.$_pzc$.$_bPanningEnabled$ && this.$_momentumTimer$.start()
    }else {
      this.$_callbackObj$.$SetElasticConstraints$($JSCompiler_alias_FALSE$$)
    }
  };
  dvt.$PanZoomCanvasEventManager$.prototype.$PanZoomEnd$ = function $dvt$$PanZoomCanvasEventManager$$$$PanZoomEnd$$() {
    this.$OnMouseUp$($JSCompiler_alias_NULL$$)
  };
  dvt.$PanZoomCanvasEventManager$.prototype.$GetTouchResponse$ = function $dvt$$PanZoomCanvasEventManager$$$$GetTouchResponse$$() {
    return this.$_pzc$.$_bPanningEnabled$ || this.$_pzc$.$_bZoomingEnabled$ ? dvt.$EventManager$.$TOUCH_RESPONSE_TOUCH_HOLD$ : dvt.$EventManager$.$TOUCH_RESPONSE_AUTO$
  };
  dvt.$PanZoomCanvasEventManager$.prototype.$StoreInfoByEventType$ = function $dvt$$PanZoomCanvasEventManager$$$$StoreInfoByEventType$$($DvtControlPanelEventManager$$) {
    return $DvtControlPanelEventManager$$ == dvt.$PanZoomCanvasEventManager$.$EVENT_INFO_PANNED_KEY$ ? $JSCompiler_alias_FALSE$$ : dvt.$PanZoomCanvasEventManager$.$superclass$.$StoreInfoByEventType$.call(this, $DvtControlPanelEventManager$$)
  };
  dvt.$PanZoomCanvasKeyboardHandler$ = function $dvt$$PanZoomCanvasKeyboardHandler$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.Init($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$)
  };
  dvt.$Obj$.$createSubclass$(dvt.$PanZoomCanvasKeyboardHandler$, dvt.$KeyboardHandler$);
  dvt.$PanZoomCanvasKeyboardHandler$.prototype.Init = function $dvt$$PanZoomCanvasKeyboardHandler$$$Init$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    dvt.$PanZoomCanvasKeyboardHandler$.$superclass$.Init.call(this, $DvtControlPanelEvent$$);
    this.$_component$ = $DvtControlPanelEventManager$$
  };
  dvt.$PanZoomCanvasKeyboardHandler$.prototype.$processKeyDown$ = function $dvt$$PanZoomCanvasKeyboardHandler$$$$processKeyDown$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = $DvtControlPanelEventManager$$.keyCode, $DvtPanControl$$ = this.$_component$.$_panZoomCanvas$;
    if($DvtControlPanelEvent$$ == dvt.$KeyboardEvent$.$PAGE_UP$) {
      $DvtControlPanelEventManager$$.ctrlKey || $DvtControlPanelEventManager$$.shiftKey ? $DvtPanControl$$.$panBy$($DvtPanControl$$.$_panIncrement$, 0) : $DvtPanControl$$.$panBy$(0, $DvtPanControl$$.$_panIncrement$)
    }else {
      if($DvtControlPanelEvent$$ == dvt.$KeyboardEvent$.$PAGE_DOWN$) {
        $DvtControlPanelEventManager$$.ctrlKey || $DvtControlPanelEventManager$$.shiftKey ? $DvtPanControl$$.$panBy$(-$DvtPanControl$$.$_panIncrement$, 0) : $DvtPanControl$$.$panBy$(0, -$DvtPanControl$$.$_panIncrement$)
      }else {
        if($DvtControlPanelEvent$$ == dvt.$KeyboardEvent$.$FORWARD_SLASH$) {
          ($DvtControlPanelEventManager$$ = $DvtPanControl$$.$_controlPanel$) && $DvtControlPanelEventManager$$.$toggleExpandCollapse$()
        }else {
          if(dvt.$KeyboardEvent$.$isEquals$($DvtControlPanelEventManager$$) || dvt.$KeyboardEvent$.$isPlus$($DvtControlPanelEventManager$$)) {
            $DvtPanControl$$.$zoomTo$($DvtPanControl$$.$getZoom$() + $DvtPanControl$$.$_zoomIncrement$)
          }else {
            if(dvt.$KeyboardEvent$.$isMinus$($DvtControlPanelEventManager$$) || dvt.$KeyboardEvent$.$isUnderscore$($DvtControlPanelEventManager$$)) {
              $DvtPanControl$$.$zoomTo$($DvtPanControl$$.$getZoom$() - $DvtPanControl$$.$_zoomIncrement$)
            }else {
              if(($DvtControlPanelEvent$$ == dvt.$KeyboardEvent$.ZERO || $DvtControlPanelEvent$$ == dvt.$KeyboardEvent$.$NUMPAD_ZERO$) && !$DvtControlPanelEventManager$$.ctrlKey && !$DvtControlPanelEventManager$$.shiftKey) {
                $DvtPanControl$$.$zoomToFit$()
              }else {
                return dvt.$PanZoomCanvasKeyboardHandler$.$superclass$.$processKeyDown$.call(this, $DvtControlPanelEventManager$$)
              }
            }
          }
        }
      }
    }
  };
  dvt.$CollapsiblePanel$ = function $dvt$$CollapsiblePanel$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $styleMap$$60$$, $disclosed$$1$$, $isFixed$$) {
    this.Init($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $styleMap$$60$$, $disclosed$$1$$, $isFixed$$)
  };
  dvt.$CollapsiblePanel$.$COLLAPSE_NORTHEAST$ = "col_northeast";
  dvt.$CollapsiblePanel$.$COLLAPSE_SOUTHEAST$ = "col_southeast";
  dvt.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ = "col_northwest";
  dvt.$CollapsiblePanel$.$COLLAPSE_SOUTHWEST$ = "col_southwest";
  dvt.$CollapsiblePanel$.$ANIMATIONDURATION$ = 0.25;
  dvt.$CollapsiblePanel$.$BODYCOLOR$ = "#EBEFF5";
  dvt.$CollapsiblePanel$.$TITLEBARCLOSEICON_WIDTH$ = 10;
  dvt.$CollapsiblePanel$.$TITLEBARCLOSEICON_HEIGHT$ = 10;
  dvt.$CollapsiblePanel$.$BUTTONHEIGHT$ = 25;
  dvt.$CollapsiblePanel$.$BUTTONWIDTH$ = 10;
  dvt.$CollapsiblePanel$.$_CONTENT_PADDING$ = 5;
  dvt.$Obj$.$createSubclass$(dvt.$CollapsiblePanel$, dvt.$Container$);
  dvt.$CollapsiblePanel$.prototype.Init = function $dvt$$CollapsiblePanel$$$Init$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $styleMap$$61$$, $disclosed$$2$$, $isFixed$$1$$) {
    dvt.$CollapsiblePanel$.$superclass$.Init.call(this, $DvtControlPanelEventManager$$);
    this.$_maxWidth$ = $DvtControlPanelEvent$$;
    this.$_maxHeight$ = $DvtPanControl$$;
    this.$setCollapseDirection$($DropdownItemSprite$$);
    this.$_buttonImages$ = $DvtControlPanelDefaults$$;
    this.$_isFixed$ = $isFixed$$1$$ ? $isFixed$$1$$ : dvt.$Agent$.$isEnvironmentBatik$();
    this.$_animation$ = this.$_collapseTooltip$ = this.$_expandTooltip$ = $JSCompiler_alias_NULL$$;
    this.$_styleMap$ = $styleMap$$61$$;
    this.$_borderColor$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$CSSStyle$.$BORDER_COLOR$, $JSCompiler_alias_NULL$$);
    this.$_borderRadius$ = parseInt(dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$CSSStyle$.$BORDER_RADIUS$, $JSCompiler_alias_NULL$$));
    this.$_bgColor$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$CSSStyle$.$BACKGROUND_COLOR$, $JSCompiler_alias_NULL$$);
    this.$_bgAlpha$ = dvt.$StyleUtils$.$getStyle$(this.$_styleMap$, dvt.$ControlPanel$.$BG_ALPHA$, 1);
    this.$_collapse$ = $disclosed$$2$$ !== $JSCompiler_alias_VOID$$ ? !$disclosed$$2$$ : $JSCompiler_alias_FALSE$$;
    this.$_contentContainer$ = new dvt.$Container$($DvtControlPanelEventManager$$);
    this.$addChild$(this.$_contentContainer$);
    this.$_contentContainer$.$setTranslate$(dvt.$CollapsiblePanel$.$_CONTENT_PADDING$, dvt.$CollapsiblePanel$.$_CONTENT_PADDING$);
    this.$addEvtListener$(dvt.$MouseEvent$.$MOUSEOVER$, this.$HandleMouseOver$, $JSCompiler_alias_FALSE$$, this);
    this.$addEvtListener$(dvt.$MouseEvent$.$MOUSEOUT$, this.$HandleMouseOut$, $JSCompiler_alias_FALSE$$, this)
  };
  dvt.$CollapsiblePanel$.prototype.$_drawButton$ = function $dvt$$CollapsiblePanel$$$$_drawButton$$() {
    if(!this.$_isFixed$) {
      this.$_buttonFrame$ = dvt.$ControlPanelLAFUtils$.$createEmptyViewClosedFrame$(this.$getCtx$(), dvt.$CollapsiblePanel$.$BUTTONHEIGHT$, this.$_styleMap$, $JSCompiler_alias_FALSE$$);
      this.$_buttonFrame$.$setAlpha$(this.$_styleMap$[dvt.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$]);
      this.$addChild$(this.$_buttonFrame$);
      var $DvtControlPanelEventManager$$ = this.$_collapseDir$ == dvt.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ || this.$_collapseDir$ == dvt.$CollapsiblePanel$.$COLLAPSE_SOUTHWEST$;
      this.isCollapsed() ? this.$_collapseExpandButton$ = dvt.$ButtonLAFUtils$.$createExpandButton$(this.$getCtx$(), this.$_buttonImages$, dvt.$CollapsiblePanel$.$BUTTONHEIGHT$, this.$_styleMap$, $DvtControlPanelEventManager$$ ? dvt.$ButtonLAFUtils$.$DIR_LEFT$ : dvt.$ButtonLAFUtils$.$DIR_RIGHT$) : this.$_collapseExpandButton$ = dvt.$ButtonLAFUtils$.$createCollapseButton$(this.$getCtx$(), this.$_buttonImages$, dvt.$CollapsiblePanel$.$BUTTONHEIGHT$, this.$_styleMap$, $DvtControlPanelEventManager$$ ? 
      dvt.$ButtonLAFUtils$.$DIR_LEFT$ : dvt.$ButtonLAFUtils$.$DIR_RIGHT$);
      this.$_buttonFrame$.$addChild$(this.$_collapseExpandButton$);
      this.$_buttonFrame$.$setTranslateX$($DvtControlPanelEventManager$$ ? this.$_width$ : -dvt.$CollapsiblePanel$.$BUTTONWIDTH$);
      dvt.$Agent$.$isTouchDevice$() ? this.$_collapseExpandButton$.$addEvtListener$(dvt.$TouchEvent$.$TOUCHSTART$, this.$OnButtonClick$, $JSCompiler_alias_FALSE$$, this) : (this.$_collapseExpandButton$.$addEvtListener$(dvt.$MouseEvent$.$CLICK$, this.$OnButtonClick$, $JSCompiler_alias_FALSE$$, this), this.$_collapseExpandButton$.$addEvtListener$(dvt.$MouseEvent$.$MOUSEOVER$, this.$OnButtonHoverOver$, $JSCompiler_alias_FALSE$$, this), this.$_collapseExpandButton$.$addEvtListener$(dvt.$MouseEvent$.$MOUSEOUT$, 
      this.$OnButtonHoverOut$, $JSCompiler_alias_FALSE$$, this))
    }
  };
  dvt.$CollapsiblePanel$.prototype.$setButtonTooltips$ = function $dvt$$CollapsiblePanel$$$$setButtonTooltips$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    this.$_expandTooltip$ = $DvtControlPanelEventManager$$;
    this.$_collapseTooltip$ = $DvtControlPanelEvent$$
  };
  dvt.$CollapsiblePanel$.prototype.$addContent$ = function $dvt$$CollapsiblePanel$$$$addContent$$($DvtControlPanelEventManager$$) {
    this.$_contentContainer$.$addChild$($DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$.$addEvtListener$(dvt.$ResizeEvent$.$RESIZE_EVENT$, this.$HandleResize$, $JSCompiler_alias_FALSE$$, this);
    $DvtControlPanelEventManager$$ = this.$_contentContainer$.$getDimensions$();
    this.$_width$ = Math.min(this.$_maxWidth$, $DvtControlPanelEventManager$$.$w$ + 2 * dvt.$CollapsiblePanel$.$_CONTENT_PADDING$);
    this.$_height$ = Math.min(this.$_maxHeight$, $DvtControlPanelEventManager$$.$h$ + 2 * dvt.$CollapsiblePanel$.$_CONTENT_PADDING$);
    this.$_background$ ? (this.$_background$.$setCmds$(this.$_getOutlinePath$(this.$_width$, this.$_height$)), $DvtControlPanelEventManager$$ = this.$_collapseDir$ == dvt.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ || this.$_collapseDir$ == dvt.$CollapsiblePanel$.$COLLAPSE_SOUTHWEST$, this.$_buttonFrame$ && $DvtControlPanelEventManager$$ && this.$_buttonFrame$.$setTranslateX$(this.$_width$)) : (this.$_background$ = this.$_createRoundRectangle$(this.$_width$, this.$_height$), this.$addChildAt$(this.$_background$, 
    0), this.$_drawButton$());
    this.$_collapse$ && this.$_collapseExpand$($JSCompiler_alias_FALSE$$)
  };
  dvt.$CollapsiblePanel$.prototype.$HandleResize$ = function $dvt$$CollapsiblePanel$$$$HandleResize$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = $DvtControlPanelEventManager$$.getWidth() + 2 * dvt.$CollapsiblePanel$.$_CONTENT_PADDING$;
    $DvtControlPanelEventManager$$ = $DvtControlPanelEventManager$$.getHeight() + 2 * dvt.$CollapsiblePanel$.$_CONTENT_PADDING$;
    this.$_background$.$setCmds$(this.$_getOutlinePath$($DvtControlPanelEvent$$, $DvtControlPanelEventManager$$));
    var $DvtPanControl$$ = this.$_collapseDir$ == dvt.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ || this.$_collapseDir$ == dvt.$CollapsiblePanel$.$COLLAPSE_SOUTHWEST$;
    this.$_buttonFrame$ && $DvtPanControl$$ && this.$_buttonFrame$.$setTranslateX$($DvtControlPanelEvent$$);
    this.$FireListener$(new dvt.$ResizeEvent$($DvtControlPanelEvent$$, $DvtControlPanelEventManager$$, 0, 0))
  };
  dvt.$CollapsiblePanel$.prototype.isCollapsed = $JSCompiler_get$$("$_collapse$");
  dvt.$CollapsiblePanel$.prototype.$setCollapsed$ = function $dvt$$CollapsiblePanel$$$$setCollapsed$$($DvtControlPanelEventManager$$) {
    this.$_collapse$ != $DvtControlPanelEventManager$$ && (this.$_collapse$ = $DvtControlPanelEventManager$$, this.$_collapseExpand$($JSCompiler_alias_TRUE$$), this.$FireListener$(new dvt.$CollapsiblePanelEvent$($DvtControlPanelEventManager$$ ? dvt.$CollapsiblePanelEvent$.$SUBTYPE_HIDE$ : dvt.$CollapsiblePanelEvent$.$SUBTYPE_SHOW$)))
  };
  dvt.$CollapsiblePanel$.prototype.$setCollapseDirection$ = function $dvt$$CollapsiblePanel$$$$setCollapseDirection$$($DvtControlPanelEventManager$$) {
    this.$_collapseDir$ = $DvtControlPanelEventManager$$ ? $DvtControlPanelEventManager$$ : dvt.$CollapsiblePanel$.$COLLAPSE_NORTHEAST$;
    dvt.$Agent$.$isRightToLeft$(this.$getCtx$()) && (this.$_collapseDir$ == dvt.$CollapsiblePanel$.$COLLAPSE_NORTHEAST$ ? this.$_collapseDir$ = dvt.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ : this.$_collapseDir$ == dvt.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ ? this.$_collapseDir$ = dvt.$CollapsiblePanel$.$COLLAPSE_NORTHEAST$ : this.$_collapseDir$ == dvt.$CollapsiblePanel$.$COLLAPSE_SOUTHEAST$ ? this.$_collapseDir$ = dvt.$CollapsiblePanel$.$COLLAPSE_SOUTHWEST$ : this.$_collapseDir$ == dvt.$CollapsiblePanel$.$COLLAPSE_SOUTHWEST$ && 
    (this.$_collapseDir$ = dvt.$CollapsiblePanel$.$COLLAPSE_SOUTHEAST$))
  };
  dvt.$CollapsiblePanel$.prototype.$getMaxContentWidth$ = function $dvt$$CollapsiblePanel$$$$getMaxContentWidth$$() {
    return this.$_maxWidth$ - 2 * dvt.$CollapsiblePanel$.$_CONTENT_PADDING$
  };
  dvt.$CollapsiblePanel$.prototype.$getMaxContentHeight$ = function $dvt$$CollapsiblePanel$$$$getMaxContentHeight$$() {
    return this.$_maxHeight$ - 2 * dvt.$CollapsiblePanel$.$_CONTENT_PADDING$
  };
  dvt.$CollapsiblePanel$.prototype.$_getRefPoint$ = function $dvt$$CollapsiblePanel$$$$_getRefPoint$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    return!this.isCollapsed() ? $DvtControlPanelEvent$$ ? new dvt.$Point$(1 / $DvtControlPanelEventManager$$.x, 1 / $DvtControlPanelEventManager$$.y) : new dvt.$Point$(-$DvtControlPanelEventManager$$.x, -$DvtControlPanelEventManager$$.y) : $DvtControlPanelEventManager$$
  };
  dvt.$CollapsiblePanel$.prototype.$_collapseExpand$ = function $dvt$$CollapsiblePanel$$$$_collapseExpand$$($DvtControlPanelEventManager$$) {
    this.$_animation$ && (this.$_animationStopped$ = $JSCompiler_alias_TRUE$$, this.$_animation$.stop($JSCompiler_alias_TRUE$$));
    var $DvtControlPanelEvent$$ = this.$_collapseDir$ == dvt.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ || this.$_collapseDir$ == dvt.$CollapsiblePanel$.$COLLAPSE_NORTHEAST$, $DvtPanControl$$ = this.$_collapseDir$ == dvt.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ || this.$_collapseDir$ == dvt.$CollapsiblePanel$.$COLLAPSE_SOUTHWEST$, $DropdownItemSprite$$ = $DvtPanControl$$ ? 0 : this.$_width$, $DvtControlPanelDefaults$$ = $DvtControlPanelEvent$$ ? 0 : this.$_height$, $scaleAnim$$1_scalePoint$$ = new dvt.$Point$(1 / 
    this.$_width$, 1 / this.$_height$), $DropdownItemSprite$$ = new dvt.$Point$($DropdownItemSprite$$, $DvtControlPanelDefaults$$), $DvtControlPanelEvent$$ = new dvt.$Point$($DvtPanControl$$ ? -this.$_width$ : this.$_width$, $DvtControlPanelDefaults$$ - ($DvtControlPanelEvent$$ ? 0 : dvt.$CollapsiblePanel$.$BUTTONHEIGHT$));
    $DvtControlPanelEventManager$$ || (this.$_background$.$setAlpha$(0), this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(0));
    $scaleAnim$$1_scalePoint$$ = new dvt.$AnimScaleBy$(this.$getCtx$(), this.$_background$, this.$_getRefPoint$($scaleAnim$$1_scalePoint$$, $JSCompiler_alias_TRUE$$), $DvtControlPanelEventManager$$ ? dvt.$CollapsiblePanel$.$ANIMATIONDURATION$ : 1E-5);
    $DvtControlPanelEvent$$ = new dvt.$AnimMoveBy$(this.$getCtx$(), this.$_buttonFrame$, this.$_getRefPoint$($DvtControlPanelEvent$$), $DvtControlPanelEventManager$$ ? dvt.$CollapsiblePanel$.$ANIMATIONDURATION$ : 1E-5);
    $DvtControlPanelEventManager$$ = new dvt.$AnimMoveBy$(this.$getCtx$(), this.$_background$, this.$_getRefPoint$($DropdownItemSprite$$), $DvtControlPanelEventManager$$ ? dvt.$CollapsiblePanel$.$ANIMATIONDURATION$ : 1E-5);
    if(this.$_animation$ = new dvt.$ParallelPlayable$(this.$getCtx$(), $scaleAnim$$1_scalePoint$$, $DvtControlPanelEvent$$, $DvtControlPanelEventManager$$)) {
      this.$getCtx$().$getTooltipManager$().$hideTooltip$(), this.$removeEvtListener$(dvt.$MouseEvent$.$MOUSEOVER$, this.$HandleMouseOver$, $JSCompiler_alias_FALSE$$, this), this.$removeEvtListener$(dvt.$MouseEvent$.$MOUSEOUT$, this.$HandleMouseOut$, $JSCompiler_alias_FALSE$$, this), this.$_collapseExpandButton$ && (this.$_collapseExpandButton$.$removeEvtListener$(dvt.$TouchEvent$.$TOUCHSTART$, this.$OnButtonClick$, $JSCompiler_alias_FALSE$$, this), this.$_collapseExpandButton$.$removeEvtListener$(dvt.$MouseEvent$.$CLICK$, 
      this.$OnButtonClick$, $JSCompiler_alias_FALSE$$, this), this.$_collapseExpandButton$.$removeEvtListener$(dvt.$MouseEvent$.$MOUSEOVER$, this.$OnButtonHoverOver$, $JSCompiler_alias_FALSE$$, this), this.$_collapseExpandButton$.$removeEvtListener$(dvt.$MouseEvent$.$MOUSEOUT$, this.$OnButtonHoverOut$, $JSCompiler_alias_FALSE$$, this)), this.isCollapsed() && this.$_contentContainer$.$setAlpha$(0), this.$_animation$.$setOnEnd$(this.$OnAnimationEnd$, this), this.$_animation$.play()
    }
  };
  dvt.$CollapsiblePanel$.prototype.$_createRoundRectangle$ = function $dvt$$CollapsiblePanel$$$$_createRoundRectangle$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = new dvt.$Path$(this.$getCtx$(), this.$_getOutlinePath$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$)), $DropdownItemSprite$$ = this.$_styleMap$[dvt.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$];
    $DvtPanControl$$.$setSolidFill$(this.$_bgColor$, this.$_bgAlpha$);
    $DvtPanControl$$.$setSolidStroke$(this.$_borderColor$, $DropdownItemSprite$$);
    return $DvtPanControl$$
  };
  dvt.$CollapsiblePanel$.prototype.$_getOutlinePath$ = function $dvt$$CollapsiblePanel$$$$_getOutlinePath$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = this.$_borderRadius$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$ = this.$_collapseDir$ == dvt.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ || this.$_collapseDir$ == dvt.$CollapsiblePanel$.$COLLAPSE_SOUTHWEST$;
    $DvtControlPanelEvent$$ <= dvt.$CollapsiblePanel$.$BUTTONHEIGHT$ && ($DvtControlPanelEvent$$ = dvt.$CollapsiblePanel$.$BUTTONHEIGHT$);
    $DropdownItemSprite$$ = this.$_isFixed$ || $DvtControlPanelDefaults$$ ? dvt.$PathUtils$.moveTo($DvtPanControl$$, 0) : dvt.$PathUtils$.moveTo(0, 0);
    $DropdownItemSprite$$ += dvt.$PathUtils$.lineTo($DvtControlPanelEventManager$$ - $DvtPanControl$$, 0);
    !this.$_isFixed$ && $DvtControlPanelDefaults$$ ? ($DropdownItemSprite$$ += dvt.$PathUtils$.lineTo($DvtControlPanelEventManager$$, 0), $DropdownItemSprite$$ += dvt.$PathUtils$.lineTo($DvtControlPanelEventManager$$, $DvtPanControl$$)) : $DropdownItemSprite$$ += dvt.$PathUtils$.$quadTo$($DvtControlPanelEventManager$$, 0, $DvtControlPanelEventManager$$, $DvtPanControl$$);
    !this.$_isFixed$ && $DvtControlPanelEvent$$ == dvt.$CollapsiblePanel$.$BUTTONHEIGHT$ && $DvtControlPanelDefaults$$ ? $DropdownItemSprite$$ += dvt.$PathUtils$.lineTo($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) : ($DropdownItemSprite$$ += dvt.$PathUtils$.lineTo($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$ - $DvtPanControl$$), $DropdownItemSprite$$ += dvt.$PathUtils$.$quadTo$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtControlPanelEventManager$$ - $DvtPanControl$$, 
    $DvtControlPanelEvent$$));
    $DropdownItemSprite$$ += dvt.$PathUtils$.lineTo($DvtPanControl$$, $DvtControlPanelEvent$$);
    $DropdownItemSprite$$ = !this.$_isFixed$ && $DvtControlPanelEvent$$ == dvt.$CollapsiblePanel$.$BUTTONHEIGHT$ && !$DvtControlPanelDefaults$$ ? $DropdownItemSprite$$ + dvt.$PathUtils$.lineTo(0, $DvtControlPanelEvent$$) : $DropdownItemSprite$$ + dvt.$PathUtils$.$quadTo$(0, $DvtControlPanelEvent$$, 0, $DvtControlPanelEvent$$ - $DvtPanControl$$);
    if(this.$_isFixed$ || $DvtControlPanelDefaults$$) {
      $DropdownItemSprite$$ += dvt.$PathUtils$.lineTo(0, $DvtPanControl$$), $DropdownItemSprite$$ += dvt.$PathUtils$.$quadTo$(0, 0, $DvtPanControl$$, 0)
    }
    return $DropdownItemSprite$$ += dvt.$PathUtils$.closePath()
  };
  dvt.$CollapsiblePanel$.prototype.$OnAnimationEnd$ = function $dvt$$CollapsiblePanel$$$$OnAnimationEnd$$() {
    this.$_animationStopped$ = $JSCompiler_alias_FALSE$$;
    this.$_animation$ = $JSCompiler_alias_NULL$$;
    var $DvtControlPanelEventManager$$ = this.$_background$.$getStroke$().$clone$();
    $DvtControlPanelEventManager$$.$setAlpha$(this.$_styleMap$[dvt.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$]);
    this.$_background$.$setStroke$($DvtControlPanelEventManager$$);
    var $DvtControlPanelEventManager$$ = this.$_styleMap$[dvt.$ControlPanel$.$BG_ROLLOUT_ALPHA$], $DvtControlPanelEvent$$ = this.$_background$.$getFill$().$clone$();
    $DvtControlPanelEvent$$.$setAlpha$($DvtControlPanelEventManager$$);
    this.$_background$.$setFill$($DvtControlPanelEvent$$);
    this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$[dvt.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$]);
    this.isCollapsed() || this.$_contentContainer$.$setAlpha$(1);
    $DvtControlPanelEventManager$$ = this.$_collapseDir$ == dvt.$CollapsiblePanel$.$COLLAPSE_NORTHWEST$ || this.$_collapseDir$ == dvt.$CollapsiblePanel$.$COLLAPSE_SOUTHWEST$;
    this.$_collapseExpandButton$ && (this.isCollapsed() ? this.$_collapseExpandButton$ = dvt.$ButtonLAFUtils$.$createExpandButton$(this.$getCtx$(), this.$_buttonImages$, dvt.$CollapsiblePanel$.$BUTTONHEIGHT$, this.$_styleMap$, $DvtControlPanelEventManager$$ ? dvt.$ButtonLAFUtils$.$DIR_LEFT$ : dvt.$ButtonLAFUtils$.$DIR_RIGHT$) : this.$_collapseExpandButton$ = dvt.$ButtonLAFUtils$.$createCollapseButton$(this.$getCtx$(), this.$_buttonImages$, dvt.$CollapsiblePanel$.$BUTTONHEIGHT$, this.$_styleMap$, 
    $DvtControlPanelEventManager$$ ? dvt.$ButtonLAFUtils$.$DIR_LEFT$ : dvt.$ButtonLAFUtils$.$DIR_RIGHT$), this.$_buttonFrame$.$addChild$(this.$_collapseExpandButton$), this.$_buttonFrame$.$removeChildAt$(0), dvt.$Agent$.$isTouchDevice$() ? this.$_collapseExpandButton$.$addEvtListener$(dvt.$TouchEvent$.$TOUCHSTART$, this.$OnButtonClick$, $JSCompiler_alias_FALSE$$, this) : (this.$_collapseExpandButton$.$addEvtListener$(dvt.$MouseEvent$.$CLICK$, this.$OnButtonClick$, $JSCompiler_alias_FALSE$$, this), 
    this.$_collapseExpandButton$.$addEvtListener$(dvt.$MouseEvent$.$MOUSEOVER$, this.$OnButtonHoverOver$, $JSCompiler_alias_FALSE$$, this), this.$_collapseExpandButton$.$addEvtListener$(dvt.$MouseEvent$.$MOUSEOUT$, this.$OnButtonHoverOut$, $JSCompiler_alias_FALSE$$, this)))
  };
  dvt.$CollapsiblePanel$.prototype.$OnButtonClick$ = function $dvt$$CollapsiblePanel$$$$OnButtonClick$$() {
    this.$getCtx$().$getTooltipManager$().$hideTooltip$();
    this.$setCollapsed$(!this.isCollapsed())
  };
  dvt.$CollapsiblePanel$.prototype.$OnButtonHoverOver$ = function $dvt$$CollapsiblePanel$$$$OnButtonHoverOver$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = this.isCollapsed() ? this.$_expandTooltip$ : this.$_collapseTooltip$;
    $DvtControlPanelEvent$$ != $JSCompiler_alias_NULL$$ && this.$getCtx$().$getTooltipManager$().$showTooltip$($DvtControlPanelEventManager$$.pageX, $DvtControlPanelEventManager$$.pageY, $DvtControlPanelEvent$$, this.$_collapseExpandButton$, $JSCompiler_alias_TRUE$$)
  };
  dvt.$CollapsiblePanel$.prototype.$OnButtonHoverOut$ = function $dvt$$CollapsiblePanel$$$$OnButtonHoverOut$$() {
    this.$getCtx$().$getTooltipManager$().$hideTooltip$()
  };
  dvt.$CollapsiblePanel$.prototype.$HandleMouseOver$ = function $dvt$$CollapsiblePanel$$$$HandleMouseOver$$() {
    var $DvtControlPanelEventManager$$ = this.$_background$.$getStroke$().$clone$();
    $DvtControlPanelEventManager$$.$setAlpha$(this.$_styleMap$[dvt.$ControlPanel$.$FRAME_ROLLOVER_ALPHA$]);
    this.$_background$.$setStroke$($DvtControlPanelEventManager$$);
    var $DvtControlPanelEventManager$$ = this.$_styleMap$[dvt.$ControlPanel$.$BG_ROLLOVER_ALPHA$], $DvtControlPanelEvent$$ = this.$_background$.$getFill$().$clone$();
    $DvtControlPanelEvent$$.$setAlpha$($DvtControlPanelEventManager$$);
    this.$_background$.$setFill$($DvtControlPanelEvent$$);
    this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$[dvt.$ControlPanel$.$FRAME_ROLLOVER_ALPHA$])
  };
  dvt.$CollapsiblePanel$.prototype.$HandleMouseOut$ = function $dvt$$CollapsiblePanel$$$$HandleMouseOut$$() {
    var $DvtControlPanelEventManager$$ = this.$_background$.$getStroke$().$clone$();
    $DvtControlPanelEventManager$$.$setAlpha$(this.$_styleMap$[dvt.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$]);
    this.$_background$.$setStroke$($DvtControlPanelEventManager$$);
    $DvtControlPanelEventManager$$ = this.$_background$.$getFill$().$clone$();
    $DvtControlPanelEventManager$$.$setAlpha$(this.$_bgAlpha$);
    this.$_background$.$setFill$($DvtControlPanelEventManager$$);
    this.$_buttonFrame$ && this.$_buttonFrame$.$setAlpha$(this.$_styleMap$[dvt.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$])
  };
  dvt.$CollapsiblePanelEvent$ = function $dvt$$CollapsiblePanelEvent$$($DvtControlPanelEventManager$$) {
    this.Init(dvt.$CollapsiblePanelEvent$.$TYPE$);
    this.$_subtype$ = $DvtControlPanelEventManager$$
  };
  dvt.$Obj$.$createSubclass$(dvt.$CollapsiblePanelEvent$, dvt.$BaseComponentEvent$);
  dvt.$CollapsiblePanelEvent$.$TYPE$ = "dvtCollapsiblePanelEvent";
  dvt.$CollapsiblePanelEvent$.$SUBTYPE_HIDE$ = "hide";
  dvt.$CollapsiblePanelEvent$.$SUBTYPE_SHOW$ = "show";
  dvt.$CollapsiblePanelEvent$.prototype.$getSubType$ = $JSCompiler_get$$("$_subtype$");
  dvt.$ImageLAFUtils$ = {};
  dvt.$Obj$.$createSubclass$(dvt.$ImageLAFUtils$, dvt.$Obj$);
  dvt.$ImageLAFUtils$.$loadIcon$ = function $dvt$$ImageLAFUtils$$$loadIcon$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = new dvt.$Image$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$);
    $DvtPanControl$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    dvt.$ImageLoader$.$loadImage$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, function($DvtControlPanelEventManager$$) {
      $DvtControlPanelEventManager$$ != $JSCompiler_alias_NULL$$ && ($DvtControlPanelEventManager$$.width && $DvtControlPanelEventManager$$.height) && ($DvtPanControl$$.$setWidth$($DvtControlPanelEventManager$$.width), $DvtPanControl$$.$setHeight$($DvtControlPanelEventManager$$.height))
    });
    return $DvtPanControl$$
  };
  dvt.$ButtonLAFUtils$ = {};
  dvt.$Obj$.$createSubclass$(dvt.$ButtonLAFUtils$, dvt.$Obj$);
  dvt.$ButtonLAFUtils$.$EXPAND_COLLAPSE_BUTTON_IMG_OFFSET$ = -6;
  dvt.$ButtonLAFUtils$.$CONTROL_BUTTON_WIDTH$ = 23;
  dvt.$ButtonLAFUtils$.$CONTROL_BUTTON_HEIGHT$ = 21;
  dvt.$ButtonLAFUtils$.$ZOOM_BUTTON_HEIGHT$ = 20;
  dvt.$ButtonLAFUtils$.$OPEN_CLOSE_IMAGE_WIDTH$ = 22;
  dvt.$ButtonLAFUtils$.$OPEN_CLOSE_IMAGE_HEIGHT$ = 20;
  dvt.$ButtonLAFUtils$.$VIEW_PANEL_HEIGHT$ = 47;
  dvt.$ButtonLAFUtils$.$VIEW_PANEL_HALF_HEIGHT$ = 26;
  dvt.$ButtonLAFUtils$.$SIN_PI_4$ = Math.sin(Math.PI / 4);
  dvt.$ButtonLAFUtils$.$TAN_PI_8$ = Math.tan(Math.PI / 8);
  dvt.$ButtonLAFUtils$.$BORDER_COLOR$ = "#7C8191";
  dvt.$ButtonLAFUtils$.$GRADIENT_DARK$ = "#E0E1E1";
  dvt.$ButtonLAFUtils$.$GRADIENT_LIGHT$ = "#F0F1F2";
  dvt.$ButtonLAFUtils$.$ROUND_RECT_ELLIPSE$ = 8;
  dvt.$ButtonLAFUtils$.$DEFAULT_FILL_TYPE$ = "solid";
  dvt.$ButtonLAFUtils$.$DEFAULT_BORDER_COLOR$ = "#7BA0D9";
  dvt.$ButtonLAFUtils$.$DEFAULT_MID_COLOR$ = "#3474D3";
  dvt.$ButtonLAFUtils$.$DEFAULT_END_COLOR$ = "#BFD8FB";
  dvt.$ButtonLAFUtils$.$_ZOOMIN_ENA$ = "zoominUp";
  dvt.$ButtonLAFUtils$.$_ZOOMIN_OVR$ = "zoominOver";
  dvt.$ButtonLAFUtils$.$_ZOOMIN_DWN$ = "zoominDown";
  dvt.$ButtonLAFUtils$.$_ZOOMIN_DISABLED$ = "zoominDisabled";
  dvt.$ButtonLAFUtils$.$_ZOOMTOFIT_ENA$ = "zoomtofitUp";
  dvt.$ButtonLAFUtils$.$_ZOOMTOFIT_OVR$ = "zoomtofitOver";
  dvt.$ButtonLAFUtils$.$_ZOOMTOFIT_DWN$ = "zoomtofitDown";
  dvt.$ButtonLAFUtils$.$_ZOOMOUT_ENA$ = "zoomoutUp";
  dvt.$ButtonLAFUtils$.$_ZOOMOUT_OVR$ = "zoomoutOver";
  dvt.$ButtonLAFUtils$.$_ZOOMOUT_DWN$ = "zoomoutDown";
  dvt.$ButtonLAFUtils$.$_ZOOMOUT_DISABLED$ = "zoomoutDisabled";
  dvt.$ButtonLAFUtils$.$_PAN_ENA$ = "pandialUp";
  dvt.$ButtonLAFUtils$.$_PAN_OVR$ = "pandialOver";
  dvt.$ButtonLAFUtils$.$_PAN_DWN$ = "pandialDown";
  dvt.$ButtonLAFUtils$.$_RECENTER_ENA$ = "recenterUp";
  dvt.$ButtonLAFUtils$.$_RECENTER_OVR$ = "recenterOver";
  dvt.$ButtonLAFUtils$.$_RECENTER_DWN$ = "recenterDown";
  dvt.$ButtonLAFUtils$.$_RESET_ENA$ = "resetUp";
  dvt.$ButtonLAFUtils$.$_RESET_OVR$ = "resetOver";
  dvt.$ButtonLAFUtils$.$_RESET_DWN$ = "resetDown";
  dvt.$ButtonLAFUtils$.$_DRILLUP_ENA$ = "drillupUp";
  dvt.$ButtonLAFUtils$.$_DRILLUP_OVR$ = "drillupOver";
  dvt.$ButtonLAFUtils$.$_DRILLUP_DWN$ = "drillupDown";
  dvt.$ButtonLAFUtils$.$_DRILLDOWN_ENA$ = "drilldownUp";
  dvt.$ButtonLAFUtils$.$_DRILLDOWN_OVR$ = "drilldownOver";
  dvt.$ButtonLAFUtils$.$_DRILLDOWN_DWN$ = "drilldownDown";
  dvt.$ButtonLAFUtils$.$_MAX_ENA$ = "maxUp";
  dvt.$ButtonLAFUtils$.$_MAX_OVR$ = "maxOver";
  dvt.$ButtonLAFUtils$.$_MAX_DWN$ = "maxDown";
  dvt.$ButtonLAFUtils$.$_RESTORE_ENA$ = "restoreUp";
  dvt.$ButtonLAFUtils$.$_RESTORE_OVR$ = "restoreOver";
  dvt.$ButtonLAFUtils$.$_RESTORE_DWN$ = "restoreDown";
  dvt.$ButtonLAFUtils$.$_COLLAPSE_ENA$ = "collapseEna";
  dvt.$ButtonLAFUtils$.$_COLLAPSE_OVR$ = "collapseOvr";
  dvt.$ButtonLAFUtils$.$_COLLAPSE_DWN$ = "collapseDwn";
  dvt.$ButtonLAFUtils$.$_EXPAND_ENA$ = "expandEna";
  dvt.$ButtonLAFUtils$.$_EXPAND_OVR$ = "expandOvr";
  dvt.$ButtonLAFUtils$.$_EXPAND_DWN$ = "expandDwn";
  dvt.$ButtonLAFUtils$.$_QUICKQUERY_ENA$ = "quickQueryEna";
  dvt.$ButtonLAFUtils$.$_QUICKQUERY_OVR$ = "quickQueryOvr";
  dvt.$ButtonLAFUtils$.$_QUICKQUERY_DWN$ = "quickQueryDwn";
  dvt.$ButtonLAFUtils$.$_CLEARRESULTS_ENA$ = "clearResultsEna";
  dvt.$ButtonLAFUtils$.$_CLEARRESULTS_OVR$ = "clearResultsOvr";
  dvt.$ButtonLAFUtils$.$_CLEARRESULTS_DWN$ = "clearResultsDwn";
  dvt.$ButtonLAFUtils$.$_UP$ = "Up";
  dvt.$ButtonLAFUtils$.$_OVER$ = "Over";
  dvt.$ButtonLAFUtils$.$_DOWN$ = "Down";
  dvt.$ButtonLAFUtils$.$_SEL$ = "Sel";
  dvt.$ButtonLAFUtils$.$_R2L$ = "_r";
  dvt.$ButtonLAFUtils$.$_SYNC$ = "synchronize";
  dvt.$ButtonLAFUtils$.$DIR_RIGHT$ = "right";
  dvt.$ButtonLAFUtils$.$DIR_LEFT$ = "left";
  dvt.$ButtonLAFUtils$.$createPanControl$ = function $dvt$$ButtonLAFUtils$$$createPanControl$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $styleMap$$62$$) {
    var $panButton$$2_panUpState$$ = dvt.$ButtonLAFUtils$.$_createPanButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$[dvt.$ButtonLAFUtils$.$_PAN_ENA$], $styleMap$$62$$), $panDownState$$ = new dvt.$Container$($DvtControlPanelEventManager$$);
    $panDownState$$.$setTranslate$(20, 20);
    var $downImage_panOverState$$ = dvt.$ButtonLAFUtils$.$_createPanButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$[dvt.$ButtonLAFUtils$.$_PAN_DWN$], $styleMap$$62$$);
    $downImage_panOverState$$.$setTranslate$(-20, -20);
    $panDownState$$.$addChild$($downImage_panOverState$$);
    $downImage_panOverState$$ = new dvt.$Container$($DvtControlPanelEventManager$$);
    $downImage_panOverState$$.$setTranslate$(20, 20);
    var $overImage$$ = dvt.$ButtonLAFUtils$.$_createPanButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$[dvt.$ButtonLAFUtils$.$_PAN_OVR$], $styleMap$$62$$);
    $overImage$$.$setTranslate$(-20, -20);
    $downImage_panOverState$$.$addChild$($overImage$$);
    $panButton$$2_panUpState$$ = new dvt.$Button$($DvtControlPanelEventManager$$, $panButton$$2_panUpState$$, $downImage_panOverState$$, $panDownState$$);
    if(0 < ($DropdownItemSprite$$ & dvt.$ControlPanel$.$CONTROLS_CENTER_BUTTON$)) {
      var $recenterButton$$2$$ = new dvt.$Button$($DvtControlPanelEventManager$$, dvt.$ButtonLAFUtils$.$_createRecenterButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$[dvt.$ButtonLAFUtils$.$_RECENTER_ENA$], $styleMap$$62$$), dvt.$ButtonLAFUtils$.$_createRecenterButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$[dvt.$ButtonLAFUtils$.$_RECENTER_OVR$], $styleMap$$62$$), dvt.$ButtonLAFUtils$.$_createRecenterButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$[dvt.$ButtonLAFUtils$.$_RECENTER_DWN$], 
      $styleMap$$62$$));
      $recenterButton$$2$$.$setTranslate$(9, 9)
    }
    return new $DvtPanControl$$($DvtControlPanelEventManager$$, $panButton$$2_panUpState$$, $recenterButton$$2$$, $DvtControlPanelEvent$$, $DropdownItemSprite$$, $styleMap$$62$$)
  };
  dvt.$ButtonLAFUtils$.$createDrillUpButton$ = function $dvt$$ButtonLAFUtils$$$createDrillUpButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    var $DropdownItemSprite$$ = dvt.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, dvt.$Button$.$STATE_ENABLED$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_DRILLUP_ENA$], $DvtPanControl$$), $DvtControlPanelDefaults$$ = dvt.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, dvt.$Button$.$STATE_OVER$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_DRILLUP_OVR$], $DvtPanControl$$), $dwn$$5$$ = dvt.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, 
    dvt.$Button$.$STATE_DOWN$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_DRILLUP_DWN$], $DvtPanControl$$);
    $DvtControlPanelEvent$$ = dvt.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, dvt.$Button$.$STATE_ENABLED$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_DRILLUP_ENA$], $DvtPanControl$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, 0.4);
    return new dvt.$Button$($DvtControlPanelEventManager$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $dwn$$5$$, $DvtControlPanelEvent$$)
  };
  dvt.$ButtonLAFUtils$.$createDrillDownButton$ = function $dvt$$ButtonLAFUtils$$$createDrillDownButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    var $DropdownItemSprite$$ = dvt.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, dvt.$Button$.$STATE_ENABLED$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_DRILLDOWN_ENA$], $DvtPanControl$$), $DvtControlPanelDefaults$$ = dvt.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, dvt.$Button$.$STATE_OVER$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_DRILLDOWN_OVR$], $DvtPanControl$$), $dwn$$6$$ = dvt.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, 
    dvt.$Button$.$STATE_DOWN$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_DRILLDOWN_DWN$], $DvtPanControl$$);
    $DvtControlPanelEvent$$ = dvt.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, dvt.$Button$.$STATE_ENABLED$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_DRILLDOWN_ENA$], $DvtPanControl$$, $JSCompiler_alias_NULL$$, $JSCompiler_alias_NULL$$, 0.4);
    return new dvt.$Button$($DvtControlPanelEventManager$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $dwn$$6$$, $DvtControlPanelEvent$$)
  };
  dvt.$ButtonLAFUtils$.$createResetButton$ = function $dvt$$ButtonLAFUtils$$$createResetButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    var $DropdownItemSprite$$ = dvt.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, dvt.$Button$.$STATE_ENABLED$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_RESET_ENA$], $DvtPanControl$$), $DvtControlPanelDefaults$$ = dvt.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, dvt.$Button$.$STATE_OVER$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_RESET_OVR$], $DvtPanControl$$), $dwn$$7$$ = dvt.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, 
    dvt.$Button$.$STATE_DOWN$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_RESET_DWN$], $DvtPanControl$$);
    $DvtControlPanelEvent$$ = dvt.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, dvt.$Button$.$STATE_ENABLED$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_RESET_ENA$], $DvtPanControl$$);
    return new dvt.$Button$($DvtControlPanelEventManager$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $dwn$$7$$, $DvtControlPanelEvent$$)
  };
  dvt.$ButtonLAFUtils$.$createZoomToFitButton$ = function $dvt$$ButtonLAFUtils$$$createZoomToFitButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    var $DropdownItemSprite$$ = dvt.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, dvt.$Button$.$STATE_ENABLED$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_ZOOMTOFIT_ENA$], $DvtPanControl$$), $DvtControlPanelDefaults$$ = dvt.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, dvt.$Button$.$STATE_OVER$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_ZOOMTOFIT_OVR$], $DvtPanControl$$);
    $DvtControlPanelEvent$$ = dvt.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, dvt.$Button$.$STATE_DOWN$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_ZOOMTOFIT_DWN$], $DvtPanControl$$);
    return new dvt.$Button$($DvtControlPanelEventManager$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $DvtControlPanelEvent$$)
  };
  dvt.$ButtonLAFUtils$.$createZoomInButton$ = function $dvt$$ButtonLAFUtils$$$createZoomInButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    var $DropdownItemSprite$$ = dvt.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, dvt.$Button$.$STATE_ENABLED$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_ZOOMIN_ENA$], $DvtPanControl$$), $DvtControlPanelDefaults$$ = dvt.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, dvt.$Button$.$STATE_OVER$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_ZOOMIN_OVR$], $DvtPanControl$$), $dwn$$9$$ = dvt.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, 
    dvt.$Button$.$STATE_DOWN$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_ZOOMIN_DWN$], $DvtPanControl$$);
    $DvtControlPanelEvent$$ = dvt.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, dvt.$Button$.$STATE_DISABLED$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_ZOOMIN_DISABLED$], $DvtPanControl$$);
    return new dvt.$Button$($DvtControlPanelEventManager$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $dwn$$9$$, $DvtControlPanelEvent$$)
  };
  dvt.$ButtonLAFUtils$.$createZoomOutButton$ = function $dvt$$ButtonLAFUtils$$$createZoomOutButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    var $DropdownItemSprite$$ = dvt.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, dvt.$Button$.$STATE_ENABLED$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_ZOOMOUT_ENA$], $DvtPanControl$$), $DvtControlPanelDefaults$$ = dvt.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, dvt.$Button$.$STATE_OVER$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_ZOOMOUT_OVR$], $DvtPanControl$$), $dwn$$10$$ = dvt.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, 
    dvt.$Button$.$STATE_DOWN$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_ZOOMOUT_DWN$], $DvtPanControl$$);
    $DvtControlPanelEvent$$ = dvt.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, dvt.$Button$.$STATE_DISABLED$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_ZOOMOUT_DISABLED$], $DvtPanControl$$);
    return new dvt.$Button$($DvtControlPanelEventManager$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $dwn$$10$$, $DvtControlPanelEvent$$)
  };
  dvt.$ButtonLAFUtils$.$createLayoutItemButtonState$ = function $dvt$$ButtonLAFUtils$$$createLayoutItemButtonState$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    var $r$$50$$ = dvt.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, "buttonRadius", 0), $w$$35$$ = dvt.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, dvt.$ControlPanel$.$CP_BUTTON_WIDTH$, 0), $h$$29$$ = dvt.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, dvt.$ControlPanel$.$CP_BUTTON_WIDTH$, 0), $shape$$66$$ = dvt.$ButtonLAFUtils$.$_createBaseButtonShape$($DvtControlPanelEventManager$$, $r$$50$$, $w$$35$$, $h$$29$$, $DvtControlPanelDefaults$$);
    dvt.$ButtonLAFUtils$.$_setButtonColors$($DvtPanControl$$, $shape$$66$$, $w$$35$$, $h$$29$$ + 2 * $r$$50$$, $DvtControlPanelDefaults$$, $JSCompiler_alias_TRUE$$);
    $DvtControlPanelEvent$$ = dvt.$ButtonLAFUtils$.$_getLayoutURI$($DvtControlPanelEventManager$$, $DvtPanControl$$, $DvtControlPanelEvent$$);
    ($DvtControlPanelEventManager$$ = dvt.$ButtonLAFUtils$.$_loadIcon$($DvtControlPanelEventManager$$, $DropdownItemSprite$$[$DvtControlPanelEvent$$], $w$$35$$, $h$$29$$)) && $shape$$66$$.$addChild$($DvtControlPanelEventManager$$);
    return $shape$$66$$
  };
  dvt.$ButtonLAFUtils$.$_getLayoutURI$ = function $dvt$$ButtonLAFUtils$$$_getLayoutURI$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    var $DvtControlPanelDefaults$$ = "";
    $DvtControlPanelEvent$$ == dvt.$Button$.$STATE_ENABLED$ ? $DvtControlPanelEvent$$ = dvt.$ButtonLAFUtils$.$_UP$ : $DvtControlPanelEvent$$ == dvt.$Button$.$STATE_OVER$ ? $DvtControlPanelEvent$$ = dvt.$ButtonLAFUtils$.$_OVER$ : $DvtControlPanelEvent$$ == dvt.$Button$.$STATE_DOWN$ && ($DvtControlPanelEvent$$ = dvt.$ButtonLAFUtils$.$_DOWN$);
    $DropdownItemSprite$$ && ($DvtPanControl$$ += dvt.$ButtonLAFUtils$.$_SEL$, dvt.$Agent$.$isRightToLeft$($DvtControlPanelEventManager$$) && ($DvtControlPanelDefaults$$ = dvt.$ButtonLAFUtils$.$_R2L$));
    return $DvtPanControl$$ + ($DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$)
  };
  dvt.$ButtonLAFUtils$.$createPanelCardButtonState$ = function $dvt$$ButtonLAFUtils$$$createPanelCardButtonState$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    var $DvtControlPanelDefaults$$ = dvt.$ButtonLAFUtils$.$_getLayoutURI$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, dvt.$ButtonLAFUtils$.$_SYNC$, $JSCompiler_alias_TRUE$$);
    return dvt.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DropdownItemSprite$$[$DvtControlPanelDefaults$$], $DvtPanControl$$)
  };
  dvt.$ButtonLAFUtils$.$createPanelCardSyncItemState$ = function $dvt$$ButtonLAFUtils$$$createPanelCardSyncItemState$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    var $r$$51$$ = dvt.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, "buttonRadius", 0);
    $DvtControlPanelEventManager$$ = dvt.$ButtonLAFUtils$.$_createBaseButtonShape$($DvtControlPanelEventManager$$, $r$$51$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$);
    dvt.$ButtonLAFUtils$.$_setButtonColors$($DvtControlPanelEvent$$, $DvtControlPanelEventManager$$, $DvtPanControl$$, $DropdownItemSprite$$ + 2 * $r$$51$$, $DvtControlPanelDefaults$$, $JSCompiler_alias_TRUE$$);
    return $DvtControlPanelEventManager$$
  };
  dvt.$ButtonLAFUtils$.$createControlButtonState$ = function $dvt$$ButtonLAFUtils$$$createControlButtonState$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    $DvtControlPanelEvent$$ = dvt.$ButtonLAFUtils$.$_getLayoutURI$($DvtControlPanelEventManager$$, $DvtPanControl$$, $DvtControlPanelEvent$$);
    return dvt.$ButtonLAFUtils$.$_createButtonBaseImage$($DvtControlPanelEventManager$$, $DvtPanControl$$, $DropdownItemSprite$$[$DvtControlPanelEvent$$], $DvtControlPanelDefaults$$)
  };
  dvt.$ButtonLAFUtils$.$createExpandButton$ = function $dvt$$ButtonLAFUtils$$$createExpandButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    var $right$$14$$ = $DvtControlPanelDefaults$$ == dvt.$ButtonLAFUtils$.$DIR_RIGHT$;
    $DvtControlPanelDefaults$$ = dvt.$ButtonLAFUtils$.$_createCollapseExpandButtonState$($DvtControlPanelEventManager$$, dvt.$Button$.$STATE_ENABLED$, $DvtPanControl$$, $right$$14$$ ? $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_COLLAPSE_ENA$] : $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_EXPAND_ENA$], $DropdownItemSprite$$, $right$$14$$);
    var $ovr$$11$$ = dvt.$ButtonLAFUtils$.$_createCollapseExpandButtonState$($DvtControlPanelEventManager$$, dvt.$Button$.$STATE_OVER$, $DvtPanControl$$, $right$$14$$ ? $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_COLLAPSE_OVR$] : $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_EXPAND_OVR$], $DropdownItemSprite$$, $right$$14$$);
    $DvtControlPanelEvent$$ = dvt.$ButtonLAFUtils$.$_createCollapseExpandButtonState$($DvtControlPanelEventManager$$, dvt.$Button$.$STATE_DOWN$, $DvtPanControl$$, $right$$14$$ ? $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_COLLAPSE_DWN$] : $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_EXPAND_DWN$], $DropdownItemSprite$$, $right$$14$$);
    return new dvt.$Button$($DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$, $ovr$$11$$, $DvtControlPanelEvent$$)
  };
  dvt.$ButtonLAFUtils$.$createCollapseButton$ = function $dvt$$ButtonLAFUtils$$$createCollapseButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    var $right$$15$$ = $DvtControlPanelDefaults$$ == dvt.$ButtonLAFUtils$.$DIR_RIGHT$;
    $DvtControlPanelDefaults$$ = dvt.$ButtonLAFUtils$.$_createCollapseExpandButtonState$($DvtControlPanelEventManager$$, dvt.$Button$.$STATE_ENABLED$, $DvtPanControl$$, $right$$15$$ ? $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_EXPAND_ENA$] : $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_COLLAPSE_ENA$], $DropdownItemSprite$$, $right$$15$$);
    var $ovr$$12$$ = dvt.$ButtonLAFUtils$.$_createCollapseExpandButtonState$($DvtControlPanelEventManager$$, dvt.$Button$.$STATE_OVER$, $DvtPanControl$$, $right$$15$$ ? $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_EXPAND_OVR$] : $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_COLLAPSE_OVR$], $DropdownItemSprite$$, $right$$15$$);
    $DvtControlPanelEvent$$ = dvt.$ButtonLAFUtils$.$_createCollapseExpandButtonState$($DvtControlPanelEventManager$$, dvt.$Button$.$STATE_DOWN$, $DvtPanControl$$, $right$$15$$ ? $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_EXPAND_DWN$] : $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_COLLAPSE_DWN$], $DropdownItemSprite$$, $right$$15$$);
    return new dvt.$Button$($DvtControlPanelEventManager$$, $DvtControlPanelDefaults$$, $ovr$$12$$, $DvtControlPanelEvent$$)
  };
  dvt.$ButtonLAFUtils$.$createQuickQueryButton$ = function $dvt$$ButtonLAFUtils$$$createQuickQueryButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = dvt.$ButtonLAFUtils$.$_createQuickQueryButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_QUICKQUERY_ENA$]), $DropdownItemSprite$$ = dvt.$ButtonLAFUtils$.$_createQuickQueryButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_QUICKQUERY_OVR$]), $DvtControlPanelDefaults$$ = dvt.$ButtonLAFUtils$.$_createQuickQueryButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_QUICKQUERY_DWN$]);
    return new dvt.$Button$($DvtControlPanelEventManager$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$)
  };
  dvt.$ButtonLAFUtils$.$createClearResultsButton$ = function $dvt$$ButtonLAFUtils$$$createClearResultsButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = dvt.$ButtonLAFUtils$.$_createQuickQueryButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_CLEARRESULTS_ENA$]), $DropdownItemSprite$$ = dvt.$ButtonLAFUtils$.$_createQuickQueryButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_CLEARRESULTS_OVR$]), $DvtControlPanelDefaults$$ = dvt.$ButtonLAFUtils$.$_createQuickQueryButtonState$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$[dvt.$ButtonLAFUtils$.$_CLEARRESULTS_DWN$]);
    return new dvt.$Button$($DvtControlPanelEventManager$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$)
  };
  dvt.$ButtonLAFUtils$.$_createButtonBaseImage$ = function $dvt$$ButtonLAFUtils$$$_createButtonBaseImage$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $h$$32$$, $alpha$$27$$) {
    var $r$$52$$ = dvt.$StyleUtils$.$getStyle$($DropdownItemSprite$$, "buttonRadius", 0);
    if("undefined" === $DvtControlPanelDefaults$$ || $DvtControlPanelDefaults$$ == $JSCompiler_alias_NULL$$) {
      $DvtControlPanelDefaults$$ = dvt.$StyleUtils$.$getStyle$($DropdownItemSprite$$, dvt.$ControlPanel$.$CP_BUTTON_WIDTH$, 0)
    }
    if("undefined" === $h$$32$$ || $h$$32$$ == $JSCompiler_alias_NULL$$) {
      $h$$32$$ = dvt.$StyleUtils$.$getStyle$($DropdownItemSprite$$, dvt.$ControlPanel$.$CP_BUTTON_WIDTH$, 0)
    }
    $DvtControlPanelEvent$$ = dvt.$ButtonLAFUtils$.$_drawBaseButton$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $r$$52$$, $DvtControlPanelDefaults$$, $h$$32$$, $DropdownItemSprite$$);
    if($DvtControlPanelEventManager$$ = dvt.$ButtonLAFUtils$.$_loadIcon$($DvtControlPanelEventManager$$, $DvtPanControl$$, $DvtControlPanelDefaults$$, $h$$32$$)) {
      $alpha$$27$$ != $JSCompiler_alias_NULL$$ && $DvtControlPanelEventManager$$.$setAlpha$($alpha$$27$$), $DvtControlPanelEvent$$.$addChild$($DvtControlPanelEventManager$$)
    }
    return $DvtControlPanelEvent$$
  };
  dvt.$ButtonLAFUtils$.$_loadIcon$ = function $dvt$$ButtonLAFUtils$$$_loadIcon$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    var $DvtControlPanelDefaults$$ = new dvt.$Image$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$);
    $DvtControlPanelDefaults$$.$setMouseEnabled$($JSCompiler_alias_FALSE$$);
    dvt.$ImageLoader$.$loadImage$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, function($DvtControlPanelEventManager$$) {
      $DvtControlPanelEventManager$$ != $JSCompiler_alias_NULL$$ && ($DvtControlPanelEventManager$$.width && $DvtControlPanelEventManager$$.height) && ($DvtControlPanelDefaults$$.$setWidth$($DvtControlPanelEventManager$$.width), $DvtControlPanelDefaults$$.$setHeight$($DvtControlPanelEventManager$$.height), $DvtControlPanelDefaults$$.$setTranslate$($DvtPanControl$$ / 2 - $DvtControlPanelEventManager$$.width / 2, $DropdownItemSprite$$ / 2 - $DvtControlPanelEventManager$$.height / 2))
    });
    return $DvtControlPanelDefaults$$
  };
  dvt.$ButtonLAFUtils$.$_createPanButtonState$ = function $dvt$$ButtonLAFUtils$$$_createPanButtonState$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    var $DropdownItemSprite$$ = new dvt.$Container$($DvtControlPanelEventManager$$), $DvtControlPanelDefaults$$ = new dvt.$Circle$($DvtControlPanelEventManager$$, 20, 20, 20);
    $DvtControlPanelDefaults$$.$setAlpha$(0);
    $DvtPanControl$$ = dvt.$StyleUtils$.$getStyle$($DvtPanControl$$, dvt.$CSSStyle$.$BACKGROUND_COLOR$, $JSCompiler_alias_NULL$$);
    $DvtControlPanelDefaults$$.$setSolidFill$($DvtPanControl$$);
    $DropdownItemSprite$$.$addChild$($DvtControlPanelDefaults$$);
    ($DvtControlPanelEventManager$$ = dvt.$ImageLAFUtils$.$loadIcon$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$)) && $DropdownItemSprite$$.$addChild$($DvtControlPanelEventManager$$);
    return $DropdownItemSprite$$
  };
  dvt.$ButtonLAFUtils$.$_createRecenterButtonState$ = function $dvt$$ButtonLAFUtils$$$_createRecenterButtonState$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$) {
    var $DropdownItemSprite$$ = new dvt.$Container$($DvtControlPanelEventManager$$), $DvtControlPanelDefaults$$ = new dvt.$Circle$($DvtControlPanelEventManager$$, 11, 11, 8);
    $DvtControlPanelDefaults$$.$setAlpha$(0);
    $DvtPanControl$$ = dvt.$StyleUtils$.$getStyle$($DvtPanControl$$, dvt.$CSSStyle$.$BACKGROUND_COLOR$, $JSCompiler_alias_NULL$$);
    $DvtControlPanelDefaults$$.$setSolidFill$($DvtPanControl$$);
    $DropdownItemSprite$$.$addChild$($DvtControlPanelDefaults$$);
    ($DvtControlPanelEventManager$$ = dvt.$ImageLAFUtils$.$loadIcon$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$)) && $DropdownItemSprite$$.$addChild$($DvtControlPanelEventManager$$);
    return $DropdownItemSprite$$
  };
  dvt.$ButtonLAFUtils$.$_createCollapseExpandButtonState$ = function $dvt$$ButtonLAFUtils$$$_createCollapseExpandButtonState$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $imageW_right$$16$$) {
    $DvtPanControl$$ || ($DvtPanControl$$ = 47);
    $DvtControlPanelEvent$$ = dvt.$ButtonLAFUtils$.$_drawOpenCloseButtonHelper$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DvtControlPanelDefaults$$, $imageW_right$$16$$);
    if($DvtControlPanelEventManager$$ = dvt.$ImageLAFUtils$.$loadIcon$($DvtControlPanelEventManager$$, $DropdownItemSprite$$)) {
      $imageW_right$$16$$ = dvt.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, dvt.$ControlPanel$.$CP_IMAGE_WIDTH$, 0), $DropdownItemSprite$$ = dvt.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, dvt.$ControlPanel$.$CP_IMAGE_HEIGHT$, 0), $DvtControlPanelEvent$$.$addChild$($DvtControlPanelEventManager$$), $DvtControlPanelDefaults$$ = (dvt.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, dvt.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0) - $imageW_right$$16$$) / 2, $DvtControlPanelEventManager$$.$setTranslate$($DvtControlPanelDefaults$$, 
      ($DvtPanControl$$ - $DropdownItemSprite$$) / 2)
    }
    return $DvtControlPanelEvent$$
  };
  dvt.$ButtonLAFUtils$.$_createQuickQueryButtonState$ = function $dvt$$ButtonLAFUtils$$$_createQuickQueryButtonState$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = dvt.$ImageLAFUtils$.$loadIcon$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$);
    $DvtPanControl$$.$setMouseEnabled$($JSCompiler_alias_TRUE$$);
    return $DvtPanControl$$
  };
  dvt.$ButtonLAFUtils$.$createPanButtonBackground$ = function $dvt$$ButtonLAFUtils$$$createPanButtonBackground$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = dvt.$ButtonLAFUtils$.$_drawPanButtonBase$($DvtControlPanelEventManager$$), $DropdownItemSprite$$ = dvt.$StyleUtils$.$getStyle$($DvtControlPanelEvent$$, dvt.$CSSStyle$.$BACKGROUND_COLOR$, $JSCompiler_alias_NULL$$), $DvtControlPanelDefaults$$ = dvt.$StyleUtils$.$getStyle$($DvtControlPanelEvent$$, dvt.$CSSStyle$.$BORDER_COLOR$, $JSCompiler_alias_NULL$$);
    "solid" == dvt.$StyleUtils$.$getStyle$($DvtControlPanelEvent$$, dvt.$CSSStyle$.$FILL_TYPE$, $JSCompiler_alias_NULL$$) ? ($DvtPanControl$$.$setSolidStroke$($DvtControlPanelDefaults$$), $DvtPanControl$$.$setSolidFill$($DropdownItemSprite$$)) : ($DvtPanControl$$.$setStroke$(new dvt.$LinearGradientStroke$(36, ["#8D93A5", "#E0EAEB", $DvtControlPanelDefaults$$], [1, 1, 1], [0, 125 / 255, 1], [0, 0, 40, 40], 1)), $DvtPanControl$$.$setFill$(new dvt.$LinearGradientFill$(90, [$DropdownItemSprite$$, $DropdownItemSprite$$, 
    "#5A83BE", $DropdownItemSprite$$], [0.9, 0.1, 0, 0.7], [0, 105 / 255, 150 / 255, 1], [0, 0, 40, 40])));
    return $DvtPanControl$$
  };
  dvt.$ButtonLAFUtils$.$createPanButtonUnderlay$ = function $dvt$$ButtonLAFUtils$$$createPanButtonUnderlay$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = dvt.$ButtonLAFUtils$.$_drawPanButtonBase$($DvtControlPanelEventManager$$), $DropdownItemSprite$$ = dvt.$StyleUtils$.$getStyle$($DvtControlPanelEvent$$, dvt.$CSSStyle$.$BACKGROUND_COLOR$, $JSCompiler_alias_NULL$$);
    $DvtPanControl$$.$setSolidStroke$($DropdownItemSprite$$);
    $DvtPanControl$$.$setSolidFill$($DropdownItemSprite$$);
    return $DvtPanControl$$
  };
  dvt.$ButtonLAFUtils$.$_drawPanButtonBase$ = function $dvt$$ButtonLAFUtils$$$_drawPanButtonBase$$($DvtControlPanelEventManager$$) {
    var $DvtControlPanelEvent$$ = dvt.$PathUtils$.moveTo(40, 20) + dvt.$PathUtils$.$quadTo$(40, 20 * dvt.$ButtonLAFUtils$.$TAN_PI_8$ + 20, 20 * dvt.$ButtonLAFUtils$.$SIN_PI_4$ + 20, 20 * dvt.$ButtonLAFUtils$.$SIN_PI_4$ + 20) + dvt.$PathUtils$.$quadTo$(20 * dvt.$ButtonLAFUtils$.$TAN_PI_8$ + 20, 40, 20, 40) + dvt.$PathUtils$.$quadTo$(20 * -dvt.$ButtonLAFUtils$.$TAN_PI_8$ + 20, 40, 20 * -dvt.$ButtonLAFUtils$.$SIN_PI_4$ + 20, 20 * dvt.$ButtonLAFUtils$.$SIN_PI_4$ + 20) + dvt.$PathUtils$.$quadTo$(0, 20 * 
    dvt.$ButtonLAFUtils$.$TAN_PI_8$ + 20, 0, 20) + dvt.$PathUtils$.$quadTo$(0, 20 * -dvt.$ButtonLAFUtils$.$TAN_PI_8$ + 20, 20 * -dvt.$ButtonLAFUtils$.$SIN_PI_4$ + 20, 20 * -dvt.$ButtonLAFUtils$.$SIN_PI_4$ + 20) + dvt.$PathUtils$.$quadTo$(20 * -dvt.$ButtonLAFUtils$.$TAN_PI_8$ + 20, 0, 20, 0) + dvt.$PathUtils$.$quadTo$(20 * dvt.$ButtonLAFUtils$.$TAN_PI_8$ + 20, 0, 20 * dvt.$ButtonLAFUtils$.$SIN_PI_4$ + 20, 20 * -dvt.$ButtonLAFUtils$.$SIN_PI_4$ + 20) + dvt.$PathUtils$.$quadTo$(40, 20 * -dvt.$ButtonLAFUtils$.$TAN_PI_8$ + 
    20, 40, 20) + dvt.$PathUtils$.closePath();
    return new dvt.$Path$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, "draw_pan_button")
  };
  dvt.$ButtonLAFUtils$.$_setGradientBorder$ = function $dvt$$ButtonLAFUtils$$$_setGradientBorder$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    $DvtControlPanelEventManager$$.$setSolidStroke$("#FFFFFF");
    $DvtControlPanelEventManager$$.$setStroke$(new dvt.$LinearGradientStroke$(63, ["#8D93A5", "#E0EAEB", "#FFFFFF"], [1, 1, 1], [0, 155 / 255, 1], [$DropdownItemSprite$$, $DvtControlPanelDefaults$$, $DvtControlPanelEvent$$, $DvtPanControl$$], 1))
  };
  dvt.$ButtonLAFUtils$.$_setButtonColors$ = function $dvt$$ButtonLAFUtils$$$_setButtonColors$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $isDropdownItem$$) {
    if(dvt.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, dvt.$ControlPanel$.$CP_PANEL_DRAWER_STYLES$, $JSCompiler_alias_NULL$$)) {
      !$isDropdownItem$$ || $isDropdownItem$$ && $DvtControlPanelEventManager$$ == dvt.$Button$.$STATE_ENABLED$ ? $DvtControlPanelEvent$$.$setInvisibleFill$() : ($DvtControlPanelEventManager$$ == dvt.$Button$.$STATE_OVER$ || $DvtControlPanelEventManager$$ == dvt.$Button$.$STATE_DOWN$) && $DvtControlPanelEvent$$.$setFill$(new dvt.$SolidFill$("#EBECED"))
    }else {
      if($DvtControlPanelDefaults$$[dvt.$PanZoomComponent$.$SKIN_NAME$] == dvt.$CSSStyle$.$SKIN_SKYROS$) {
        switch($DvtControlPanelEventManager$$) {
          case dvt.$Button$.$STATE_OVER$:
            $DvtControlPanelEvent$$.$setFill$(new dvt.$SolidFill$("#FFFFFF", 0.7));
            $DvtControlPanelEvent$$.$setStroke$(new dvt.$SolidStroke$(dvt.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, dvt.$CSSStyle$.$BORDER_COLOR$, $JSCompiler_alias_NULL$$)));
            break;
          case dvt.$Button$.$STATE_DOWN$:
            $DvtControlPanelEvent$$.$setFill$(new dvt.$SolidFill$("#B3C6DB"));
            $DvtControlPanelEvent$$.$setStroke$(new dvt.$SolidStroke$(dvt.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, dvt.$CSSStyle$.$BORDER_COLOR$, $JSCompiler_alias_NULL$$)));
            break;
          default:
            $DvtControlPanelEvent$$.$setInvisibleFill$()
        }
      }else {
        var $fill_colors$$10$$, $fill_alphas$$10$$, $fill_ratios$$10$$;
        switch($DvtControlPanelEventManager$$) {
          case dvt.$Button$.$STATE_DISABLED$:
          ;
          case dvt.$Button$.$STATE_ENABLED$:
            $fill_colors$$10$$ = ["#5B868A", "#FFFFFF", "#FFFFFF", "#5B868A"];
            $fill_alphas$$10$$ = [0.01, 0, 0.05, 0.01];
            $fill_ratios$$10$$ = [0, 120 / 255, 130 / 255, 1];
            break;
          case dvt.$Button$.$STATE_OVER$:
            dvt.$ButtonLAFUtils$.$_setGradientBorder$($DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, 0, 0);
            $fill_colors$$10$$ = ["#FFFFFF", "#4671B0", "#4671B0", "#FFFFFF"];
            $fill_alphas$$10$$ = [0.5, 0.2, 0.1, 0.7];
            $fill_ratios$$10$$ = [0, 120 / 255, 130 / 255, 1];
            break;
          case dvt.$Button$.$STATE_DOWN$:
            dvt.$ButtonLAFUtils$.$_setGradientBorder$($DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, 0, 0), $fill_colors$$10$$ = ["#E0EAEB", "#5B868A", "#4671B0"], $fill_alphas$$10$$ = [0.1, 0.3, 0.6], $fill_ratios$$10$$ = [0, 130 / 255, 1]
        }
        $DvtControlPanelEvent$$.$setFill$(new dvt.$LinearGradientFill$(90, $fill_colors$$10$$, $fill_alphas$$10$$, $fill_ratios$$10$$, [0, 0, $DvtPanControl$$, $DropdownItemSprite$$]))
      }
    }
  };
  dvt.$ButtonLAFUtils$.$_setCloseButtonColors$ = function $dvt$$ButtonLAFUtils$$$_setCloseButtonColors$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    if(dvt.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, dvt.$ControlPanel$.$CP_PANEL_DRAWER_STYLES$, $JSCompiler_alias_NULL$$)) {
      $DvtControlPanelEvent$$.$setInvisibleFill$()
    }else {
      var $borderColor$$42_stroke$$86$$, $fillType$$11$$ = dvt.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, dvt.$CSSStyle$.$FILL_TYPE$, $JSCompiler_alias_NULL$$);
      $borderColor$$42_stroke$$86$$ = dvt.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, dvt.$CSSStyle$.$BORDER_COLOR$, $JSCompiler_alias_NULL$$);
      if("solid" == $fillType$$11$$) {
        $DvtPanControl$$ = dvt.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, dvt.$CSSStyle$.$BACKGROUND_COLOR$, $JSCompiler_alias_NULL$$);
        var $bgAlpha$$2$$, $strokeAlpha$$2$$;
        switch($DvtControlPanelEventManager$$) {
          case dvt.$Button$.$STATE_ENABLED$:
            $bgAlpha$$2$$ = dvt.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, dvt.$ControlPanel$.$BG_ALPHA$, 1);
            $strokeAlpha$$2$$ = dvt.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, dvt.$ControlPanel$.$FRAME_ROLLOUT_ALPHA$, 1);
            break;
          case dvt.$Button$.$STATE_DOWN$:
          ;
          case dvt.$Button$.$STATE_OVER$:
            $bgAlpha$$2$$ = dvt.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, dvt.$ControlPanel$.$BG_ROLLOVER_ALPHA$, 1), $strokeAlpha$$2$$ = dvt.$StyleUtils$.$getStyle$($DvtControlPanelDefaults$$, dvt.$ControlPanel$.$FRAME_ROLLOVER_ALPHA$, 1)
        }
        $DvtControlPanelEventManager$$ = new dvt.$SolidFill$($DvtPanControl$$, $bgAlpha$$2$$);
        $borderColor$$42_stroke$$86$$ = new dvt.$SolidStroke$($borderColor$$42_stroke$$86$$, $strokeAlpha$$2$$)
      }else {
        var $fill_colors$$11$$, $fill_alphas$$11$$, $fill_ratios$$11$$;
        switch($DvtControlPanelEventManager$$) {
          case dvt.$Button$.$STATE_ENABLED$:
            $fill_colors$$11$$ = ["#FFFFFF", "#5B868A", "#5B868A"];
            $fill_alphas$$11$$ = [0, 0.2, 0.3];
            $fill_ratios$$11$$ = [0, 130 / 255, 1];
            break;
          case dvt.$Button$.$STATE_OVER$:
            $fill_colors$$11$$ = ["#FFFFFF", "#FFFFFF", "#4671B0", "#4671B0"];
            $fill_alphas$$11$$ = [0.1, 0.2, 0.1, 0.6];
            $fill_ratios$$11$$ = [0, 120 / 255, 130 / 255, 1];
            break;
          case dvt.$Button$.$STATE_DOWN$:
            $fill_colors$$11$$ = ["#4671B0", "#5B868A", "#5B868A"], $fill_alphas$$11$$ = [0.5, 0.2, 0.4], $fill_ratios$$11$$ = [0, 130 / 255, 1]
        }
        $DvtControlPanelEventManager$$ = new dvt.$LinearGradientFill$(0, $fill_colors$$11$$, $fill_alphas$$11$$, $fill_ratios$$11$$, [0, 0, $DvtPanControl$$, $DropdownItemSprite$$]);
        $borderColor$$42_stroke$$86$$ = new dvt.$SolidStroke$($borderColor$$42_stroke$$86$$, 1, 0.8)
      }
      $DvtControlPanelEvent$$.$setStroke$($borderColor$$42_stroke$$86$$);
      $DvtControlPanelEvent$$.$setFill$($DvtControlPanelEventManager$$)
    }
  };
  dvt.$ButtonLAFUtils$.$_setSliderButtonColors$ = function $dvt$$ButtonLAFUtils$$$_setSliderButtonColors$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $yy$$54$$) {
    var $fill_colors$$12$$, $fill_alphas$$12$$, $fill_ratios$$12$$;
    switch($DvtControlPanelEventManager$$) {
      case dvt.$Button$.$STATE_ENABLED$:
        $DvtControlPanelEvent$$.$setSolidStroke$("#FFFFFF", 1, 0.25);
        $fill_colors$$12$$ = ["#FFFFFF", "#4671B0", "#E0EAEB", "#FFFFFF"];
        $fill_alphas$$12$$ = [0.6, 0.3, 0.3, 0.8];
        $fill_ratios$$12$$ = [0, 125 / 255, 130 / 255, 1];
        break;
      case dvt.$Button$.$STATE_OVER$:
        dvt.$ButtonLAFUtils$.$_setGradientBorder$($DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $yy$$54$$);
        $fill_colors$$12$$ = ["#4671B0", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
        $fill_alphas$$12$$ = [0.4, 0.3, 0.7, 1];
        $fill_ratios$$12$$ = [0, 70 / 255, 200 / 255, 1];
        break;
      case dvt.$Button$.$STATE_DOWN$:
        dvt.$ButtonLAFUtils$.$_setGradientBorder$($DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $yy$$54$$), $fill_colors$$12$$ = ["#FFFFFF", "#4671B0", "#E0EAEB"], $fill_alphas$$12$$ = [0.6, 0.5, 0.8], $fill_ratios$$12$$ = [0, 130 / 255, 1]
    }
    $DvtControlPanelEvent$$.$setFill$(new dvt.$LinearGradientFill$(90, $fill_colors$$12$$, $fill_alphas$$12$$, $fill_ratios$$12$$, [$DvtControlPanelDefaults$$, $yy$$54$$, $DvtPanControl$$, $DropdownItemSprite$$]))
  };
  dvt.$ButtonLAFUtils$.$GetButtonPathCommands$ = function $dvt$$ButtonLAFUtils$$$GetButtonPathCommands$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    return $DropdownItemSprite$$ ? ["M", $DvtControlPanelEventManager$$, 0, "L", $DvtPanControl$$, 0, "A", $DvtPanControl$$, $DvtPanControl$$, 0, 0, 0, 0, $DvtPanControl$$, "L", 0, $DvtControlPanelEvent$$ - $DvtPanControl$$, "A", $DvtPanControl$$, $DvtPanControl$$, 0, 0, 0, $DvtPanControl$$, $DvtControlPanelEvent$$, "L", $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$] : ["M", 0, 0, "L", $DvtControlPanelEventManager$$ - $DvtPanControl$$, 0, "A", $DvtPanControl$$, $DvtPanControl$$, 0, 0, 1, 
    $DvtControlPanelEventManager$$, $DvtPanControl$$, "L", $DvtControlPanelEventManager$$, $DvtControlPanelEvent$$ - $DvtPanControl$$, "A", $DvtPanControl$$, $DvtPanControl$$, 0, 0, 1, $DvtControlPanelEventManager$$ - $DvtPanControl$$, $DvtControlPanelEvent$$, "L", 0, $DvtControlPanelEvent$$]
  };
  dvt.$ButtonLAFUtils$.$_drawOpenCloseButtonHelper$ = function $dvt$$ButtonLAFUtils$$$_drawOpenCloseButtonHelper$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    $DvtPanControl$$ || ($DvtPanControl$$ = 47);
    var $r$$56$$ = parseInt(dvt.$StyleUtils$.$getStyle$($DropdownItemSprite$$, dvt.$CSSStyle$.$BORDER_RADIUS$, 0)), $buttonWidth$$11$$ = dvt.$StyleUtils$.$getStyle$($DropdownItemSprite$$, dvt.$ControlPanel$.$CP_OPEN_CLOSE_BUTTON_WIDTH$, 0);
    $DvtPanControl$$ = Math.max($DvtPanControl$$, dvt.$StyleUtils$.$getStyle$($DropdownItemSprite$$, dvt.$ControlPanel$.$CP_BUTTON_HEIGHT$, $DvtPanControl$$));
    $DvtControlPanelEventManager$$ = new dvt.$Path$($DvtControlPanelEventManager$$, dvt.$ButtonLAFUtils$.$GetButtonPathCommands$($buttonWidth$$11$$, $DvtPanControl$$, $r$$56$$, $DvtControlPanelDefaults$$));
    dvt.$ButtonLAFUtils$.$_setCloseButtonColors$($DvtControlPanelEvent$$, $DvtControlPanelEventManager$$, $buttonWidth$$11$$, $DvtPanControl$$, $DropdownItemSprite$$);
    return $DvtControlPanelEventManager$$
  };
  dvt.$ButtonLAFUtils$.$_drawBaseButton$ = function $dvt$$ButtonLAFUtils$$$_drawBaseButton$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $styleMap$$84$$) {
    $DvtControlPanelEventManager$$ = dvt.$ButtonLAFUtils$.$_createBaseButtonShape$($DvtControlPanelEventManager$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$, $styleMap$$84$$);
    dvt.$ButtonLAFUtils$.$_setButtonColors$($DvtControlPanelEvent$$, $DvtControlPanelEventManager$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$ + 2 * $DvtPanControl$$, $styleMap$$84$$);
    return $DvtControlPanelEventManager$$
  };
  dvt.$ButtonLAFUtils$.$_createBaseButtonShape$ = function $dvt$$ButtonLAFUtils$$$_createBaseButtonShape$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$, $DvtControlPanelDefaults$$) {
    if($DvtControlPanelDefaults$$[dvt.$PanZoomComponent$.$SKIN_NAME$] == dvt.$CSSStyle$.$SKIN_SKYROS$) {
      return new dvt.$Rect$($DvtControlPanelEventManager$$, 0, 0, $DvtPanControl$$, $DropdownItemSprite$$)
    }
    $DvtPanControl$$ -= 2 * $DvtControlPanelEvent$$;
    $DropdownItemSprite$$ -= 2 * $DvtControlPanelEvent$$;
    $DvtControlPanelDefaults$$ = $DvtPanControl$$ + $DvtControlPanelEvent$$;
    var $y$$153$$ = $DropdownItemSprite$$ + $DvtControlPanelEvent$$, $cmds$$19$$ = dvt.$PathUtils$.moveTo($DvtControlPanelDefaults$$ + $DvtControlPanelEvent$$, $y$$153$$) + dvt.$PathUtils$.$quadTo$($DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, dvt.$ButtonLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $y$$153$$, dvt.$ButtonLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, dvt.$ButtonLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $y$$153$$) + dvt.$PathUtils$.$quadTo$(dvt.$ButtonLAFUtils$.$TAN_PI_8$ * 
    $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, $DvtControlPanelEvent$$ + $y$$153$$, $DvtControlPanelDefaults$$, $DvtControlPanelEvent$$ + $y$$153$$) + dvt.$PathUtils$.lineTo($DvtControlPanelDefaults$$, $y$$153$$ + $DvtControlPanelEvent$$) + dvt.$PathUtils$.lineTo($DvtControlPanelDefaults$$ - $DvtPanControl$$, $DvtControlPanelEvent$$ + $y$$153$$);
    $DvtControlPanelDefaults$$ -= $DvtPanControl$$;
    $cmds$$19$$ += dvt.$PathUtils$.$quadTo$(-dvt.$ButtonLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, $DvtControlPanelEvent$$ + $y$$153$$, -dvt.$ButtonLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, dvt.$ButtonLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $y$$153$$) + dvt.$PathUtils$.$quadTo$(-$DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, dvt.$ButtonLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $y$$153$$, -$DvtControlPanelEvent$$ + 
    $DvtControlPanelDefaults$$, $y$$153$$) + dvt.$PathUtils$.lineTo($DvtControlPanelDefaults$$ - $DvtControlPanelEvent$$, $y$$153$$) + dvt.$PathUtils$.lineTo($DvtControlPanelDefaults$$ - $DvtControlPanelEvent$$, $y$$153$$ - $DropdownItemSprite$$);
    $y$$153$$ -= $DropdownItemSprite$$;
    $cmds$$19$$ += dvt.$PathUtils$.$quadTo$(-$DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, -dvt.$ButtonLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $y$$153$$, -dvt.$ButtonLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, -dvt.$ButtonLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $y$$153$$) + dvt.$PathUtils$.$quadTo$(-dvt.$ButtonLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, -$DvtControlPanelEvent$$ + $y$$153$$, $DvtControlPanelDefaults$$, 
    -$DvtControlPanelEvent$$ + $y$$153$$) + dvt.$PathUtils$.lineTo($DvtControlPanelDefaults$$, -$DvtControlPanelEvent$$ + $y$$153$$) + dvt.$PathUtils$.lineTo($DvtControlPanelDefaults$$ + $DvtPanControl$$, -$DvtControlPanelEvent$$ + $y$$153$$);
    $DvtControlPanelDefaults$$ += $DvtPanControl$$;
    $cmds$$19$$ += dvt.$PathUtils$.$quadTo$(dvt.$ButtonLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, -$DvtControlPanelEvent$$ + $y$$153$$, dvt.$ButtonLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, -dvt.$ButtonLAFUtils$.$SIN_PI_4$ * $DvtControlPanelEvent$$ + $y$$153$$) + dvt.$PathUtils$.$quadTo$($DvtControlPanelEvent$$ + $DvtControlPanelDefaults$$, -dvt.$ButtonLAFUtils$.$TAN_PI_8$ * $DvtControlPanelEvent$$ + $y$$153$$, $DvtControlPanelEvent$$ + 
    $DvtControlPanelDefaults$$, $y$$153$$) + dvt.$PathUtils$.lineTo($DvtControlPanelDefaults$$ + $DvtControlPanelEvent$$, $y$$153$$ + $DropdownItemSprite$$) + dvt.$PathUtils$.closePath();
    return new dvt.$Path$($DvtControlPanelEventManager$$, $cmds$$19$$)
  };
  dvt.$ButtonLAFUtils$.$drawDropdownShape$ = function $dvt$$ButtonLAFUtils$$$drawDropdownShape$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$, $DvtPanControl$$, $DropdownItemSprite$$) {
    $DropdownItemSprite$$ = dvt.$StyleUtils$.$getStyle$($DropdownItemSprite$$, "radius", 0);
    $DvtControlPanelEvent$$ -= 2 * $DropdownItemSprite$$;
    $DvtPanControl$$ -= $DropdownItemSprite$$;
    var $DvtControlPanelDefaults$$ = $DvtControlPanelEvent$$ + $DropdownItemSprite$$, $y$$154$$ = $DvtPanControl$$, $cmds$$20$$ = dvt.$PathUtils$.moveTo($DvtControlPanelDefaults$$ + $DropdownItemSprite$$, $y$$154$$) + dvt.$PathUtils$.$quadTo$($DropdownItemSprite$$ + $DvtControlPanelDefaults$$, dvt.$ButtonLAFUtils$.$TAN_PI_8$ * $DropdownItemSprite$$ + $y$$154$$, dvt.$ButtonLAFUtils$.$SIN_PI_4$ * $DropdownItemSprite$$ + $DvtControlPanelDefaults$$, dvt.$ButtonLAFUtils$.$SIN_PI_4$ * $DropdownItemSprite$$ + 
    $y$$154$$) + dvt.$PathUtils$.$quadTo$(dvt.$ButtonLAFUtils$.$TAN_PI_8$ * $DropdownItemSprite$$ + $DvtControlPanelDefaults$$, $DropdownItemSprite$$ + $y$$154$$, $DvtControlPanelDefaults$$, $DropdownItemSprite$$ + $y$$154$$) + dvt.$PathUtils$.lineTo($DvtControlPanelDefaults$$, $DropdownItemSprite$$ + $y$$154$$) + dvt.$PathUtils$.lineTo($DvtControlPanelDefaults$$ - $DvtControlPanelEvent$$, $DropdownItemSprite$$ + $y$$154$$), $DvtControlPanelDefaults$$ = $DvtControlPanelDefaults$$ - $DvtControlPanelEvent$$, 
    $cmds$$20$$ = $cmds$$20$$ + (dvt.$PathUtils$.$quadTo$(-dvt.$ButtonLAFUtils$.$TAN_PI_8$ * $DropdownItemSprite$$ + $DvtControlPanelDefaults$$, $DropdownItemSprite$$ + $y$$154$$, -dvt.$ButtonLAFUtils$.$SIN_PI_4$ * $DropdownItemSprite$$ + $DvtControlPanelDefaults$$, dvt.$ButtonLAFUtils$.$SIN_PI_4$ * $DropdownItemSprite$$ + $y$$154$$) + dvt.$PathUtils$.$quadTo$(-$DropdownItemSprite$$ + $DvtControlPanelDefaults$$, dvt.$ButtonLAFUtils$.$TAN_PI_8$ * $DropdownItemSprite$$ + $y$$154$$, -$DropdownItemSprite$$ + 
    $DvtControlPanelDefaults$$, $y$$154$$) + dvt.$PathUtils$.lineTo(-$DropdownItemSprite$$ + $DvtControlPanelDefaults$$, $y$$154$$) + dvt.$PathUtils$.lineTo(-$DropdownItemSprite$$ + $DvtControlPanelDefaults$$, $y$$154$$ - $DvtPanControl$$)), $y$$154$$ = $y$$154$$ - $DvtPanControl$$, $cmds$$20$$ = $cmds$$20$$ + (dvt.$PathUtils$.lineTo($DvtControlPanelDefaults$$ + $DvtControlPanelEvent$$ + $DropdownItemSprite$$, $y$$154$$) + dvt.$PathUtils$.lineTo($DvtControlPanelDefaults$$ + $DvtControlPanelEvent$$ + 
    $DropdownItemSprite$$, $y$$154$$ + $DvtPanControl$$) + dvt.$PathUtils$.closePath());
    return new dvt.$Path$($DvtControlPanelEventManager$$, $cmds$$20$$)
  };
  dvt.$ButtonLAFUtils$.$_getDimForced$ = function $dvt$$ButtonLAFUtils$$$_getDimForced$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    $DvtControlPanelEvent$$ instanceof dvt.$Button$ && ($DvtControlPanelEvent$$ = $DvtControlPanelEvent$$.$getChildAt$(0));
    return dvt.$DisplayableUtils$.$getDimForced$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$)
  };
  dvt.$ButtonLAFUtils$.$parseStyle$ = function $dvt$$ButtonLAFUtils$$$parseStyle$$($DvtControlPanelEventManager$$, $DvtControlPanelEvent$$) {
    var $DvtPanControl$$ = dvt.$ButtonLAFUtils$.$DEFAULT_FILL_TYPE$, $DropdownItemSprite$$ = dvt.$ButtonLAFUtils$.$DEFAULT_BORDER_COLOR$, $DvtControlPanelDefaults$$ = dvt.$ButtonLAFUtils$.$DEFAULT_MID_COLOR$, $background$$12$$;
    $DvtControlPanelEvent$$ && ($DvtControlPanelEvent$$.$getStyle$(dvt.$CSSStyle$.$FILL_TYPE$) && ($DvtPanControl$$ = $DvtControlPanelEvent$$.$getStyle$(dvt.$CSSStyle$.$FILL_TYPE$)), $DvtControlPanelEvent$$.$getStyle$(dvt.$CSSStyle$.$BORDER_COLOR$) && ($DropdownItemSprite$$ = $DvtControlPanelEvent$$.$getStyle$(dvt.$CSSStyle$.$BORDER_COLOR$)), $DvtControlPanelEvent$$.$getStyle$(dvt.$CSSStyle$.$BACKGROUND_COLOR$) && ($DvtControlPanelDefaults$$ = $DvtControlPanelEvent$$.$getStyle$(dvt.$CSSStyle$.$BACKGROUND_COLOR$)), 
    $DvtControlPanelEvent$$.$getStyle$(dvt.$CSSStyle$.$BACKGROUND$) && ($background$$12$$ = $DvtControlPanelEvent$$.$getStyle$(dvt.$CSSStyle$.$BACKGROUND$)));
    var $DropdownItemSprite$$ = new dvt.$SolidStroke$($DropdownItemSprite$$), $fill$$56_fill_colors$$13_midColor$$11$$;
    if("solid" == $DvtPanControl$$) {
      $fill$$56_fill_colors$$13_midColor$$11$$ = new dvt.$SolidFill$($DvtControlPanelDefaults$$)
    }else {
      var $endColor$$16_fill_alphas$$13$$, $fill_ratios$$13$$, $degree$$3$$;
      if($background$$12$$ && 0 <= $background$$12$$.indexOf("linear-gradient")) {
        if($DvtPanControl$$ = dvt.$GradientParser$.$parseCSSGradient$($background$$12$$)) {
          $degree$$3$$ = $DvtPanControl$$.$getAngle$(), $fill$$56_fill_colors$$13_midColor$$11$$ = $DvtPanControl$$.$_arColors$, $endColor$$16_fill_alphas$$13$$ = $DvtPanControl$$.$_arAlphas$, $fill_ratios$$13$$ = $DvtPanControl$$.$_arRatios$
        }
      }else {
        $fill$$56_fill_colors$$13_midColor$$11$$ = $DvtControlPanelDefaults$$, $endColor$$16_fill_alphas$$13$$ = dvt.$ButtonLAFUtils$.$DEFAULT_END_COLOR$, $fill$$56_fill_colors$$13_midColor$$11$$ != dvt.$ButtonLAFUtils$.$DEFAULT_MID_COLOR$ && ($endColor$$16_fill_alphas$$13$$ = dvt.$ColorUtils$.$inferColor$(dvt.$ButtonLAFUtils$.$DEFAULT_MID_COLOR$, dvt.$ButtonLAFUtils$.$DEFAULT_END_COLOR$, $fill$$56_fill_colors$$13_midColor$$11$$)), $fill$$56_fill_colors$$13_midColor$$11$$ = [$fill$$56_fill_colors$$13_midColor$$11$$, 
        $endColor$$16_fill_alphas$$13$$], $endColor$$16_fill_alphas$$13$$ = [0.6, 0.8], $fill_ratios$$13$$ = [0, 1], $degree$$3$$ = -270
      }
      $fill$$56_fill_colors$$13_midColor$$11$$ = new dvt.$LinearGradientFill$($degree$$3$$, $fill$$56_fill_colors$$13_midColor$$11$$, $endColor$$16_fill_alphas$$13$$, $fill_ratios$$13$$)
    }
    $DvtControlPanelEventManager$$.$setFill$($fill$$56_fill_colors$$13_midColor$$11$$);
    $DvtControlPanelEventManager$$.$setStroke$($DropdownItemSprite$$)
  };
  dvt.$exportProperty$(dvt.$PanZoomComponent$.prototype, "render", dvt.$PanZoomComponent$.prototype.$render$)
})();

  return dvt;
});

/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit', './DvtAxis'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  
  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
// Copyright (c) 2008, 2015, Oracle and/or its affiliates. All rights reserved.



/**
 * Abstract Base Class for Gauge component.
 * @class
 * @constructor
 * @extends {DvtBaseComponent}
 * @export
 */
var DvtGauge = function() {};

DvtObj.createSubclass(DvtGauge, DvtBaseComponent, 'DvtGauge');


/** @private **/
DvtGauge._DEFAULT_MIN_VALUE = 0;


/** @private **/
DvtGauge._DEFAULT_MAX_VALUE = 100;


/**
 * @override
 */
DvtGauge.prototype.Init = function(context, callback, callbackObj, bStaticRendering) {
  DvtGauge.superclass.Init.call(this, context, callback, callbackObj);

  // If non-interactive, we can skip the following
  this._bStaticRendering = bStaticRendering;
  if (!this._bStaticRendering) {
    // Create the event handler and add event listeners
    this._eventManager = this.CreateEventManager();
    this._eventManager.addListeners(this);

    // Set up keyboard handler on non-touch devices
    if (!DvtAgent.isTouchDevice())
      this._eventManager.setKeyboardHandler(this.CreateKeyboardHandler(this._eventManager));

    // Make sure the object has an id for clipRect naming
    this.setId('gauge' + 1000 + Math.floor(Math.random() * 1000000000));

    // Create an editing overlay to prevent touch conflicts
    this._editingOverlay = new DvtRect(context, 0, 0);
    this._editingOverlay.setInvisibleFill();
    this.addChild(this._editingOverlay);
  }

  /** @private **/
  this._bEditing = false;

  /** @private **/
  this._oldValue = null;
};


/**
 * @override
 */
DvtGauge.prototype.SetOptions = function(options) {
  this.Options = options;

  // Disable animation for canvas and xml
  if (!DvtAgent.isEnvironmentBrowser()) {
    this.Options['animationOnDisplay'] = 'none';
    this.Options['animationOnDataChange'] = 'none';
  }
};


/**
 * @override
 * @export
 */
DvtGauge.prototype.render = function(options, width, height) 
{
  // Update if a new options object has been provided or initialize with defaults if needed.
  if (options)
    this.SetOptions(options);
  else if (!this.Options)
    this.SetOptions(null);

  // Sort the thresholds by value if defined
  if (this.Options['thresholds']) {
    var thresholds = this.Options['thresholds'];
    this.Options['thresholds'] = thresholds.sort(DvtGauge._thresholdComparator);
  }

  // Update the store width and height if provided
  if (!isNaN(width) && !isNaN(height)) {
    this.Width = width;
    this.Height = height;
  }

  var oldShapes = this.__shapes;
  this.__shapes = [];

  // Render the gauge.  Add the container at index 0 to avoid interfering with the editable overlay.
  var container = new DvtContainer(this.getCtx());
  this.addChildAt(container, 0);
  this.Render(container, this.Width, this.Height);

  this._setAnimation(container, (options != null), oldShapes, this.Width, this.Height);

  // Set the size of the editing overlay if editable
  if (this._editingOverlay) {
    this._editingOverlay.setWidth(this.Width);
    this._editingOverlay.setHeight(this.Height);

    // Tooltip support
    this.__getEventManager().associate(this._editingOverlay, this.__getLogicalObject(), true);
  }

  if (!this._bStaticRendering && !this.Options['readOnly']) {
    container.setAriaRole('slider');
    container.setAriaProperty('valuemin', this.Options['min']);
    container.setAriaProperty('valuemax', this.Options['max']);
    var value = DvtGaugeRenderer.getFormattedMetricLabel(this.Options['value'], this);
    container.setAriaProperty('valuenow', value);
    var tooltip = DvtGaugeRenderer.getTooltipString(this);

    if (DvtAgent.isTouchDevice()) {
      this._container.setAriaProperty('live', 'assertive');
      if (value != tooltip)
        tooltip = value + DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'ARIA_LABEL_DESC_DELIMITER') + tooltip;
    }
    if (value != tooltip)
      container.setAriaProperty('label', tooltip);

    // Generate a unique id to force screen readers to update for each render (and potential value change)
    this._renderCount = (this._renderCount != null) ? this._renderCount + 1 : 0;
    var ariaId = this.getId() + '_' + this._renderCount;
    container.setId(ariaId);

    // Set as the active element that's read by the screen reader.
    this.getCtx().setActiveElement(container);
  }

  // . To support ADF action attribute
  if (this.Options['_selectingCursor']) {
    this.setCursor(DvtSelectionEffectUtils.getSelectingCursor());
  }
  this.UpdateAriaAttributes();
};

/**
 * Creates and returns a logical object for this gauge.
 * @return {DvtSimpleObjPeer}
 */
DvtGauge.prototype.__getLogicalObject = function() {
  var tooltip = DvtGaugeRenderer.getTooltipString(this);
  var color = DvtGaugeStyleUtils.getColor(this);
  return new DvtSimpleObjPeer(null, tooltip, color);
};

/**
 * Renders the component at the specified size.
 * @param {DvtContainer} container The container to render within.
 * @param {number} width The width of the component.
 * @param {number} height The height of the component.
 */
DvtGauge.prototype.Render = function(container, width, height) 
{
  // subclasses should override
};


/**
 * Checks animation settings for the gauge and creates and plays animation on display
 * or animation on data change.
 * @param {DvtContainer} container The container to render within.
 * @param {boolean} bData True if new data was provided to the gauge.
 * @param {Array} oldShapes The array of DvtShapes that can be animated
 * @param {number} width The width of the component.
 * @param {number} height The height of the component.
 * @private
 */
DvtGauge.prototype._setAnimation = function(container, bData, oldShapes, width, height) {
  // Stop any animation in progress before starting new animation
  if (this._animation)
    this._animation.stop();

  var bBlackBoxUpdate = false;
  var animationOnDataChange = this._bEditing ? 'none' : this.getOptions()['animationOnDataChange'];
  var animationOnDisplay = this._bEditing ? 'none' : this.getOptions()['animationOnDisplay'];
  var animationDuration = DvtStyleUtils.getTimeMilliseconds(this.getOptions()['animationDuration']) / 1000;

  if (!animationOnDisplay && !animationOnDataChange)
    return;

  var bounds = new DvtRectangle(0, 0, width, height);
  var context = this.getCtx();

  if (!this._container && animationOnDisplay !== 'none' && this.__shapes[0] != null) { // animationOnDisplay
    this._animation = DvtBlackBoxAnimationHandler.getInAnimation(context, animationOnDisplay, container, bounds, animationDuration);
    if (!this._animation)
      this._animation = this.CreateAnimationOnDisplay(this.__shapes, animationOnDisplay, animationDuration);
  }
  else if (this._container && animationOnDataChange != 'none' && bData && this.__shapes[0] != null) { // animationOnDataChange
    this._animation = DvtBlackBoxAnimationHandler.getCombinedAnimation(context, animationOnDataChange,
        this._container, container, bounds, animationDuration);
    if (this._animation)
      bBlackBoxUpdate = true;
    else
      this._animation = this.CreateAnimationOnDataChange(oldShapes, this.__shapes, animationOnDisplay, animationDuration);
  }

  if (!bBlackBoxUpdate)
    this.removeChild(this._container);

  if (this._animation) {
    this._animation.play();
    this._animation.setOnEnd(this._onAnimationEnd, this);
  }

  if (bBlackBoxUpdate)
    this._oldContainer = this._container;

  this._container = container;
};


/**
 * Creates a DvtPlayable that performs animation upon inital gauge display.
 * @param {Array} objs The array of DvtShapes to animate to.
 * @param {string} animationType The animation type.
 * @param {number} animationDuration The duration of the animation in seconds.
 * @return {DvtPlayable}
 * @protected
 */
DvtGauge.prototype.CreateAnimationOnDisplay = function(objs, animationType, animationDuration) {
  // subclasses may implement
  return null;
};


/**
 * Creates a DvtPlayable that performs animation for a gauge update.
 * @param {Array} oldObjs The array of DvtShapes to animate from.
 * @param {Array} newObjs The array of DvtShapes to animate to.
 * @param {string} animationType The animation type.
 * @param {number} animationDuration The duration of the animation in seconds.
 * @return {DvtPlayable}
 * @protected
 */
DvtGauge.prototype.CreateAnimationOnDataChange = function(oldObjs, newObjs, animationType, animationDuration) {
  var animatedObjs = [];
  for (var i = 0; i < oldObjs.length; i++) {
    var oldObj = oldObjs[i];
    var newObj = newObjs[i];
    var startState = oldObj.getAnimationParams();
    var endState = newObj.getAnimationParams();

    newObj.setAnimationParams(startState);
    var animation = new DvtCustomAnimation(this.getCtx(), newObj, animationDuration);
    animation.getAnimator().addProp(DvtAnimator.TYPE_NUMBER_ARRAY, newObj, newObj.getAnimationParams, newObj.setAnimationParams, endState);
    animatedObjs.push(animation);
  }
  return new DvtParallelPlayable(this.getCtx(), animatedObjs);
};


/**
 * Returns the value at the specified coordinates.  Subclasses must override to support editing behavior.
 * @param {number} x The x coordinate of the value change.
 * @param {number} y The y coordinate of the value change.
 * @return {number}
 * @protected
 */
DvtGauge.prototype.GetValueAt = function(x, y) {
  return null;
};

/**
 * Wrapper for the render function to be overridden if subclasses want to behave differently during update events
 */
DvtGauge.prototype.renderUpdate = function() {
  this.render();
  this.UpdateAriaLiveValue(this._container);
};

/**
 * Helper function for updating the live values that are read out while editing for accessibility
 * @param {DvtContainer} container The slider container we are using.
 * @param {number} value The value of the gauge
 * @protected
 */
DvtGauge.prototype.UpdateAriaLiveValue = function(container, value) {
  value = DvtGaugeRenderer.getFormattedMetricLabel(value ? value : this.Options['value'], this);
  container.setAriaProperty('valuenow', value);

  if (DvtAgent.isTouchDevice())
    container.setAriaProperty('label', value);
};

/**
 * Cleans up the old container used by black box updates.
 * @private
 */
DvtGauge.prototype._onAnimationEnd = function() {
  if (this._oldContainer) {
    this.removeChild(this._oldContainer);
    this._oldContainer = null;
  }

  // Reset the animation reference
  this._animation = null;
};

/**
 * @override
 */
DvtGauge.prototype.__getEventManager = function() {
  return this._eventManager;
};


/**
 * Handles the start of a value change update driven by a touch or mouse gesture at the specified coordinates.
 * @param {number} x The x coordinate of the value change.
 * @param {number} y The y coordinate of the value change.
 */
DvtGauge.prototype.__processValueChangeStart = function(x, y) {
  this._bEditing = true;
  this._oldValue = this.Options['value'];
  this.__processValueChangeMove(x, y);
};


/**
 * Handles the continuation of a value change update driven by a touch or mouse gesture at the specified coordinates.
 * @param {number} x The x coordinate of the value change.
 * @param {number} y The y coordinate of the value change.
 */
DvtGauge.prototype.__processValueChangeMove = function(x, y) {
  // Only process the update if there is data to update
  if (this._oldValue != null) {
    // Update the data value and re-render
    this.Options['value'] = DvtGaugeRenderer.adjustForStep(this.Options, this.GetValueAt(x, y));
    this.renderUpdate();

    // Fire the value change input event
    this.__dispatchEvent(new DvtValueChangeEvent(this._oldValue, this.Options['value'], false));
  }
};


/**
 * Handles the end of a value change update driven by a touch or mouse gesture at the specified coordinates.
 * @param {number} x The x coordinate of the value change.
 * @param {number} y The y coordinate of the value change.
 */
DvtGauge.prototype.__processValueChangeEnd = function(x, y) {
  // Render again in case a move was skipped
  this.__processValueChangeMove(x, y);

  // Need to reset the tooltip value if overridden by UpdateAriaLiveValue
  if (DvtAgent.isTouchDevice()) {
    var value = DvtGaugeRenderer.getFormattedMetricLabel(this.Options['value'], this);
    var tooltip = DvtGaugeRenderer.getTooltipString(this);
    if (value != tooltip) {
      tooltip = value + DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'ARIA_LABEL_DESC_DELIMITER') + tooltip;
      this._container.setAriaProperty('label', tooltip);
    }
  }

  // Fire the event and reset
  this.__dispatchEvent(new DvtValueChangeEvent(this._oldValue, this.Options['value'], true));
  this._bEditing = false;
  this._oldValue = null;
};

/**
 * Increases the gauge value by one step.
 */
DvtGauge.prototype.__increaseValue = function() {
  if (this.Options['readOnly'])
    return;

  var oldValue = this.Options['value'];

  // Update the data value and re-render
  if (this.Options['step'] != null) {
    var newValue = this.Options['value'] + this.Options['step'];
    this.Options['value'] = DvtGaugeRenderer.adjustForStep(this.Options, newValue);
  }
  else {
    var step = (this.Options['max'] - this.Options['min']) / 100;
    this.Options['value'] = Math.min(Math.max(this.Options['value'] + step, this.Options['min']), this.Options['max']);
  }
  this.render();

  // Fire the value change input event
  this.__dispatchEvent(new DvtValueChangeEvent(oldValue, this.Options['value'], true));
};


/**
 * Decreases the gauge value by one step.
 */
DvtGauge.prototype.__decreaseValue = function() {
  if (this.Options['readOnly'])
    return;

  var oldValue = this.Options['value'];

  // Update the data value and re-render
  if (this.Options['step'] != null) {
    var newValue = this.Options['value'] - this.Options['step'];
    this.Options['value'] = DvtGaugeRenderer.adjustForStep(this.Options, newValue);
  }
  else {
    var step = (this.Options['max'] - this.Options['min']) / 100;
    this.Options['value'] = Math.min(Math.max(this.Options['value'] - step, this.Options['min']), this.Options['max']);
  }
  this.render();

  // Fire the value change input event
  this.__dispatchEvent(new DvtValueChangeEvent(oldValue, this.Options['value'], true));
};


/**
 * Creates the event manager for the gauge
 * @return {DvtGaugeEventManager} new event manager
 */
DvtGauge.prototype.CreateEventManager = function() {
  return new DvtGaugeEventManager(this);
};


/**
 * Comparison function
 * @param {object} a threshold object.
 * @param {object} b threshold object.
 * @return {number} Positive, negative, or 0 value indicating which threshold is larger.
 * @private
 */
DvtGauge._thresholdComparator = function(a, b) {
  if (a['max'] != null && b['max'] != null)
    return a['max'] - b['max'];
  else
    return a['max'] ? -Infinity : Infinity;
};

/**
 * Returns the automation object for this gauge
 * @return {DvtAutomation} The automation object
 * @export
 */
DvtGauge.prototype.getAutomation = function() {
  return new DvtGaugeAutomation(this);
};

/**
 * Creates the keyboard handler.
 * @param {DvtGaugeEventManager} manager Event manager.
 * @return {DvtKeyboardHandler}
 * @protected
 */
DvtGauge.prototype.CreateKeyboardHandler = function(manager) {
  return new DvtGaugeKeyboardHandler(manager, this);
};

/**
 * @override
 */
DvtGauge.prototype.GetComponentDescription = function() {
  return DvtBundle.getTranslation(this.getOptions(), 'componentName', DvtBundle.UTIL_PREFIX, 'GAUGE');
};

/**
 * @override
 */
DvtGauge.prototype.UpdateAriaAttributes = function() {
  if (!this._bStaticRendering) {
    var tooltip = DvtGaugeRenderer.getTooltipString(this);
    if (this.IsParentRoot()) {
      if (this.Options['readOnly']) {
        this.getCtx().setAriaRole('img');
        this.getCtx().setAriaLabel(DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'COLON_SEP_LIST',
            [DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'DATA_VISUALIZATION'),
              DvtDisplayable.generateAriaLabel(DvtStringUtils.processAriaLabel(this.GetComponentDescription()),
             tooltip ? [tooltip] : null)]));
      } else {
        this.getCtx().setAriaRole('application');
        this.getCtx().setAriaLabel(DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'COLON_SEP_LIST',
            [DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'DATA_VISUALIZATION'), DvtStringUtils.processAriaLabel(this.GetComponentDescription())]));
      }
    }
    else if (this.Options['readOnly']) {
      this.setAriaRole('img');
      this.setAriaProperty('label', DvtDisplayable.generateAriaLabel(DvtStringUtils.processAriaLabel(this.GetComponentDescription()), tooltip ? [tooltip] : null));
    }
  }
};
/**
 *  Provides automation services for a DVT component.
 *  @class DvtGaugeAutomation
 *  @param {DvtGauge} dvtComponent
 *  @implements {DvtAutomation}
 *  @constructor
 *  @export
 */
var DvtGaugeAutomation = function(dvtComponent) {
  this._gauge = dvtComponent;
};

DvtObj.createSubclass(DvtGaugeAutomation, DvtAutomation, 'DvtGaugeAutomation');

/**
 * Valid subIds inlcude:
 * <ul>
 * <li>tooltip</li>
 * </ul>
 * @override
 * @export
 */
DvtGaugeAutomation.prototype.getDomElementForSubId = function(subId) {
  if (subId == DvtAutomation.TOOLTIP_SUBID)
    return this.GetTooltipElement(this._gauge);

  else if (subId.indexOf('item') == 0) {
    var openParen = subId.indexOf('[');
    var closeParen = subId.indexOf(']');

    if (openParen > 0 && closeParen > 0) {
      var index = subId.substring(openParen + 1, closeParen);
      var item = this._gauge.__getRatingGaugeItem(index);
      if (item)
        return item.getElem();
    }
  }

  return null;
};

/**
 * Returns the value of the gauge. Used for verification.
 * @return {Number} the value of the gauge
 * @export
 */
DvtGaugeAutomation.prototype.getValue = function() {
  return this._gauge.getOptions()['value'];
};

/**
 * Returns the formatted metric label of the gauge. Used for verification.
 * Valid only for DialGauge, LedGauge, and StatusMeterGauge.
 * @return {String} the formatted metric label string
 * @export
 */
DvtGaugeAutomation.prototype.getMetricLabel = function() {
  return DvtGaugeRenderer.getFormattedMetricLabel(this.getValue(), this._gauge);
};

DvtBundle.addDefaultStrings(DvtBundle.GAUGE_PREFIX, {
});
/**
 * Default values and utility functions for component versioning.
 * @class
 * @constructor
 * @extends {DvtBaseComponentDefaults}
 */
var DvtGaugeDefaults = function() {};

DvtObj.createSubclass(DvtGaugeDefaults, DvtBaseComponentDefaults, 'DvtGaugeDefaults');


/**
 * Defaults for ALTA.
 */
DvtGaugeDefaults.SKIN_ALTA = {
  'skin': DvtCSSStyle.SKIN_ALTA,
  'color': '#393737',
  'metricLabel': {'style': new DvtCSSStyle("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")},
  '_statusMessageStyle': new DvtCSSStyle("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"),
  'title': {'style': new DvtCSSStyle("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")},
  '_thresholdColors': ['#ed6647', '#fad55c', '#68c182']
};


/**
 * Defaults for version 1.
 */
DvtGaugeDefaults.VERSION_1 = {
  'skin': DvtCSSStyle.SKIN_SKYROS,
  'min': 0, 'max': 100,
  'color': '#313842', 'borderColor': null, 'visualEffects': 'auto', 'emptyText': null,
  'animationOnDataChange': 'none', 'animationOnDisplay': 'none', 'animationDuration': 500,
  'readOnly': 'true',
  'metricLabel': {
    'rendered': 'auto',
    'scaling': 'auto',
    'style': new DvtCSSStyle('font-family: tahoma, sans-serif;'),
    'textType': 'number'
  },
  '_statusMessageStyle': new DvtCSSStyle('font-family: tahoma, sans-serif;'),
  'title': {
    'style': new DvtCSSStyle('font-family: tahoma, sans-serif;'),
    'position': 'auto'
  },

  '_thresholdColors': ['#D62800', '#FFCF21', '#84AE31'],
  // Internal layout constants
  '__layout': {'outerGap': 1, 'labelGap': 5}
};


/**
 * @override
 */
DvtGaugeDefaults.prototype.Init = function(defaultsMap) {
  // This will only be called via subclasses.  Combine with defaults from this class before passing to super.
  var ret = {
    'skyros': DvtJSONUtils.merge(defaultsMap['skyros'], DvtGaugeDefaults.VERSION_1),
    'alta': DvtJSONUtils.merge(defaultsMap['alta'], DvtGaugeDefaults.SKIN_ALTA)
  };

  DvtGaugeDefaults.superclass.Init.call(this, ret);
};


/**
 * Returns true if the skyros skin effects should be used.
 * @param {DvtGauge} gauge
 * @return {boolean}
 */
DvtGaugeDefaults.isSkyrosSkin = function(gauge) 
{
  return (gauge.getOptions()['skin'] == DvtCSSStyle.SKIN_SKYROS);
};
/**
 * Style related utility functions for gauge components.
 * @class
 */
var DvtGaugeDataUtils = new Object();

DvtObj.createSubclass(DvtGaugeDataUtils, DvtObj, 'DvtGaugeDataUtils');


/**
 * Returns true if the specified chart has data.
 * @param {DvtGauge} gauge
 * @return {boolean}
 */
DvtGaugeDataUtils.hasData = function(gauge) {
  var options = gauge.getOptions();

  // Check that there is a data object with a valid value
  if (!options || isNaN(options['value']) || options['value'] === null)
    return false;
  else
    return true;
};


/**
 * Returns the index of the threshold corresponding to the gauge value.
 * @param {DvtGauge} gauge
 * @param {number} value Optional parameter for thresholdIndex of value that isn't the gauge value
 * @return {number} The index of the threshold definition or null if none is available.
 */
DvtGaugeDataUtils.getValueThresholdIndex = function(gauge, value) {
  var options = gauge.getOptions();
  var gaugeValue = value != null ? value : options['value'];
  var thresholds = options['thresholds'];

  // Return -1 if no thresholds exist
  if (!thresholds)
    return -1;

  // Loop through and find the threshold
  for (var i = 0; i < thresholds.length; i++) {
    if (gaugeValue <= thresholds[i]['max'])
      return i;
  }

  // None found, but thresholds exist, this means the last threshold
  return thresholds.length - 1;
};


/**
 * Returns the specified threshold.
 * @param {DvtGauge} gauge
 * @param {number} index The index of the threshold.
 * @return {object} The threshold definition or null if none is available.
 */
DvtGaugeDataUtils.getThreshold = function(gauge, index) {
  var thresholds = gauge.getOptions()['thresholds'];

  if (thresholds && index >= 0 && index < thresholds.length)
    return thresholds[index];
  else
    return null;
};


/**
 * Returns the specified referenceObject.
 * @param {DvtGauge} gauge
 * @param {number} index The index of the referenceObject.
 * @return {object} The referenceObject definition or null if none is available.
 */
DvtGaugeDataUtils.getReferenceObject = function(gauge, index) {
  var options = gauge.getOptions();
  var referenceObjects = options['referenceLines'];
  if (referenceObjects && index >= 0 && index < referenceObjects.length)
    return referenceObjects[index];
  else
    return null;
};
/**
 * Event Manager for DvtGauge.
 * @param {DvtGauge} gauge
 * @class
 * @extends {DvtEventManager}
 * @constructor
 */
var DvtGaugeEventManager = function(gauge) {
  this.Init(gauge.getCtx(), gauge.__dispatchEvent, gauge);
  this._gauge = gauge;
  this.IsMouseEditing = false;
};

DvtObj.createSubclass(DvtGaugeEventManager, DvtEventManager, 'DvtGaugeEventManager');


/**
 * @override
 */
DvtGaugeEventManager.prototype.OnMouseDown = function(event) {
  // Set the editing flag so moves are tracked
  if (this._gauge.getOptions()['readOnly'] === false) {
    this.IsMouseEditing = true;
    this.hideTooltip();
    var coords = this.GetRelativePosition(event.pageX, event.pageY);
    this._gauge.__processValueChangeStart(coords.x, coords.y);
  }
  else // Don't call super if editing, just handle it in this subclass
    DvtGaugeEventManager.superclass.OnMouseDown.call(this, event);
};


/**
 * @override
 */
DvtGaugeEventManager.prototype.OnMouseUp = function(event) {
  // Reset the editing flag
  if (this.IsMouseEditing) {
    this.IsMouseEditing = false;
    var coords = this.GetRelativePosition(event.pageX, event.pageY);
    this._gauge.__processValueChangeEnd(coords.x, coords.y);
  }
  else // Don't call super if editing, just handle it in this subclass
    DvtGaugeEventManager.superclass.OnMouseUp.call(this, event);
};


/**
 * @override
 */
DvtGaugeEventManager.prototype.OnMouseMove = function(event) {
  // Only process move events when editing
  if (this.IsMouseEditing) {
    var coords = this.GetRelativePosition(event.pageX, event.pageY);
    this._gauge.__processValueChangeMove(coords.x, coords.y);
  }
  if (this.IsShowingTooltipWhileEditing() || !this.IsMouseEditing)
    DvtGaugeEventManager.superclass.OnMouseMove.call(this, event);
};


/**
 * Controls whether the tooltip shows up on hover/mousemove
 * @return {boolean}
 */
DvtGaugeEventManager.prototype.IsShowingTooltipWhileEditing = function() {
  return false;
};


/**
 * @override
 */
DvtGaugeEventManager.prototype.PreEventBubble = function(event) {
  if (DvtTouchEvent.TOUCHSTART === event.type && this._gauge.getOptions()['readOnly'] === false) {
    // Set the editing flag so moves are tracked
    this.IsMouseEditing = true;
    var coords = this.GetRelativePosition(event.touches[0].pageX, event.touches[0].pageY);
    this._gauge.__processValueChangeStart(coords.x, coords.y);

    // Prevent default action from occuring
    event.preventDefault();
  }
  else if (DvtTouchEvent.TOUCHMOVE === event.type && this.IsMouseEditing) {
    var coords = this.GetRelativePosition(event.touches[0].pageX, event.touches[0].pageY);
    this._gauge.__processValueChangeMove(coords.x, coords.y);

    // Prevent default action from occuring
    event.preventDefault();
  }
  else if (DvtTouchEvent.TOUCHEND === event.type && this.IsMouseEditing) {
    this.IsMouseEditing = false;
    var coords = this.GetRelativePosition(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
    this._gauge.__processValueChangeEnd(coords.x, coords.y);

    // Prevent default action from occuring
    event.preventDefault();
  }
  // If editing, only show tooltip if it is enabled
  if (!this.IsMouseEditing || this.IsShowingTooltipWhileEditing())
    DvtGaugeEventManager.superclass.PreEventBubble.call(this, event);
};

/**
 * @override
 */
DvtGaugeEventManager.prototype.ProcessKeyboardEvent = function(event) 
{
  if (!this.KeyboardHandler)
    return false;

  this.KeyboardHandler.processKeyDown(event);
  var keyCode = event.keyCode;

  if (keyCode == DvtKeyboardEvent.UP_ARROW || keyCode == DvtKeyboardEvent.LEFT_ARROW || keyCode == DvtKeyboardEvent.DOWN_ARROW || keyCode == DvtKeyboardEvent.RIGHT_ARROW || keyCode == DvtKeyboardEvent.TAB) {
    var pos = this._gauge.getCtx().getStageAbsolutePosition();
    this.ProcessObjectTooltip(event, pos.x, pos.y, this._gauge.__getLogicalObject(), this._gauge);
  }

  return false;
};

/**
 * @override
 */
DvtGaugeEventManager.prototype.OnBlur = function(event) {
  DvtGaugeEventManager.superclass.OnBlur.call(this, event);
  this.hideTooltip();
};

/**
 * Returns the position of the specified page coords, relative to the component.
 * @param {number} pageX
 * @param {number} pageY
 * @return {DvtPoint}
 * @protected
 */
DvtGaugeEventManager.prototype.GetRelativePosition = function(pageX, pageY) {
  var stageCoords = this.getCtx().pageToStageCoords(pageX, pageY);
  return this._gauge.stageToLocal(stageCoords);
};

/**
 * @override
 */
DvtGaugeEventManager.prototype.UpdateActiveElement = function(obj, displayable) {
  // noop: Gauges manage their own WAI-ARIA properties and should not participate in default event manager support.
};

/**
 * Returns whether we are currenctly editing by mouse or touch. Used to decide which tooltip to show for rating gauge.
 * @return {boolean}
 */
DvtGaugeEventManager.prototype.__isMouseEditing = function() {
  return this.IsMouseEditing;
};

/**
 * @param {DvtEventManager} manager The owning DvtEventManager
 * @param {DvtGauge} gauge
 * @class DvtGaugeKeyboardHandler
 * @extends {DvtKeyboardHandler}
 * @constructor
 */
var DvtGaugeKeyboardHandler = function(manager, gauge)
{
  this.Init(manager, gauge);
};

DvtObj.createSubclass(DvtGaugeKeyboardHandler, DvtKeyboardHandler, 'DvtGaugeKeyboardHandler');


/**
 * @override
 */
DvtGaugeKeyboardHandler.prototype.Init = function(manager, gauge) {
  DvtGaugeKeyboardHandler.superclass.Init.call(this, manager);
  this._gauge = gauge;
};


/**
 * @override
 */
DvtGaugeKeyboardHandler.prototype.processKeyDown = function(event) {
  // Note: Don't call superclass so that the arrow key behaviors are not overridden
  var keyCode = event.keyCode;
  var isR2L = DvtAgent.isRightToLeft(this._gauge.getCtx());

  if (keyCode == DvtKeyboardEvent.UP_ARROW || keyCode == (isR2L ? DvtKeyboardEvent.LEFT_ARROW : DvtKeyboardEvent.RIGHT_ARROW)) {
    this._gauge.__increaseValue();
    DvtEventManager.consumeEvent(event);
  }
  else if (keyCode == DvtKeyboardEvent.DOWN_ARROW || keyCode == (isR2L ? DvtKeyboardEvent.RIGHT_ARROW : DvtKeyboardEvent.LEFT_ARROW)) {
    this._gauge.__decreaseValue();
    DvtEventManager.consumeEvent(event);
  }
};

/**
 * Style related utility functions for gauge components.
 * @class
 */
var DvtGaugeStyleUtils = new Object();

DvtObj.createSubclass(DvtGaugeStyleUtils, DvtObj, 'DvtGaugeStyleUtils');


/** @private */
DvtGaugeStyleUtils._THRESHOLD_COLOR_RAMP = ['#ed6647', '#fad55c', '#68c182'];
DvtGaugeStyleUtils._SKYROS_THRESHOLD_COLOR_RAMP = ['#D62800', '#FFCF21', '#84AE31'];
DvtGaugeStyleUtils._SKYROS_THRESHOLD_COLOR_RAMP = ['#D62800', '#FFCF21', '#84AE31'];

DvtGaugeStyleUtils._ALTA_CIRCLE = {'startAngle': 202.5, 'angleExtent': 225,
  'anchorX': 100, 'anchorY': 103,
  'metricLabelBounds': {'x': 80, 'y': 86, 'width': 40, 'height': 34},
  'indicatorLength': .85,
  'tickLabelHeight': 20,
  'tickLabelWidth': 30,
  'radius': 60,
  'majorTickCount': 6};

DvtGaugeStyleUtils._ALTA_DOME = {'startAngle': 202.5, 'angleExtent': 225,
  'anchorX': 100, 'anchorY': 103,
  'metricLabelBounds': {'x': 83, 'y': 86, 'width': 34, 'height': 34},
  'indicatorLength': .85,
  'tickLabelHeight': 20,
  'tickLabelWidth': 30,
  'radius': 60,
  'majorTickCount': 6};

DvtGaugeStyleUtils._ALTA_RECTANGLE = {'startAngle': 202.5, 'angleExtent': 225,
  'anchorX': 100, 'anchorY': 103,
  'metricLabelBounds': {'x': 83, 'y': 86, 'width': 34, 'height': 34},
  'indicatorLength': .85,
  'tickLabelHeight': 20,
  'tickLabelWidth': 30,
  'radius': 60,
  'majorTickCount': 6};

DvtGaugeStyleUtils._ANTIQUE_CIRCLE = {'startAngle': 220.5, 'angleExtent': 261.1,
  'anchorX': 100, 'anchorY': 100,
  'metricLabelBounds': {'x': 82, 'y': 133, 'width': 36, 'height': 34},
  'indicatorLength': .85,
  'tickLabelHeight': 20,
  'tickLabelWidth': 30,
  'radius': 61,
  'majorTickCount': 6};

DvtGaugeStyleUtils._ANTIQUE_DOME = {'startAngle': 195.5, 'angleExtent': 210.8,
  'anchorX': 100, 'anchorY': 100,
  'metricLabelBounds': {'x': 84, 'y': 135, 'width': 32, 'height': 35},
  'indicatorLength': .98,
  'tickLabelHeight': 20,
  'tickLabelWidth': 30,
  'radius': 63,
  'majorTickCount': 6};

DvtGaugeStyleUtils._ANTIQUE_RECTANGLE = {'startAngle': 207.6, 'angleExtent': 235,
  'anchorX': 100, 'anchorY': 95.8,
  'metricLabelBounds': {'x': 83, 'y': 125, 'width': 34, 'height': 40},
  'indicatorLength': 1.05,
  'tickLabelHeight': 20,
  'tickLabelWidth': 30,
  'radius': 64,
  'majorTickCount': 6};

DvtGaugeStyleUtils._LIGHT_CIRCLE = {'startAngle': 220.5, 'angleExtent': 261.1,
  'anchorX': 100, 'anchorY': 100,
  'metricLabelBounds': {'x': 80, 'y': 82, 'width': 40, 'height': 40},
  'indicatorLength': 0.82,
  'tickLabelHeight': 20,
  'tickLabelWidth': 30,
  'radius': 58,
  'majorTickCount': 6};

DvtGaugeStyleUtils._LIGHT_DOME = {'startAngle': 201, 'angleExtent': 222,
  'anchorX': 100.2, 'anchorY': 89,
  'metricLabelBounds': {'x': 80, 'y': 70, 'width': 41, 'height': 39},
  'indicatorLength': 1.23,
  'tickLabelHeight': 20,
  'tickLabelWidth': 30,
  'radius': 56,
  'majorTickCount': 6};

DvtGaugeStyleUtils._LIGHT_RECTANGLE = {'startAngle': 211, 'angleExtent': 242,
  'anchorX': 100, 'anchorY': 91.445,
  'metricLabelBounds': {'x': 78, 'y': 75, 'width': 44, 'height': 38},
  'indicatorLength': 1.1,
  'tickLabelHeight': 20,
  'tickLabelWidth': 30,
  'radius': 58,
  'majorTickCount': 6};

DvtGaugeStyleUtils._DARK_CIRCLE = {'startAngle': 220.5, 'angleExtent': 261.5,
  'metricLabelBounds': {'x': 80, 'y': 82, 'width': 40, 'height': 40},
  'indicatorLength': .85,
  'tickLabelHeight': 20,
  'tickLabelWidth': 30,
  'radius': 60,
  'majorTickCount': 6};

DvtGaugeStyleUtils._DARK_DOME = {'startAngle': 201, 'angleExtent': 222,
  'anchorX': 100.2, 'anchorY': 89,
  'metricLabelBounds': {'x': 80, 'y': 73, 'width': 40, 'height': 36},
  'indicatorLength': 1.23,
  'tickLabelHeight': 20,
  'tickLabelWidth': 30,
  'radius': 56,
  'majorTickCount': 6};

DvtGaugeStyleUtils._DARK_RECTANGLE = {'startAngle': 201, 'angleExtent': 222,
  'anchorX': 100.2, 'anchorY': 99.5,
  'metricLabelBounds': {'x': 80, 'y': 83, 'width': 41, 'height': 36},
  'indicatorLength': 1.1,
  'tickLabelHeight': 20,
  'tickLabelWidth': 30,
  'radius': 58,
  'majorTickCount': 6};

DvtGaugeStyleUtils._ANTIQUE_INDICATOR = {
  'anchorX': 42, 'anchorY': 510
};
DvtGaugeStyleUtils._ALTA_INDICATOR = {
  'anchorX': 187, 'anchorY': 388
};

DvtGaugeStyleUtils._LIGHT_INDICATOR = {
  'anchorX': 227, 'anchorY': 425
};

DvtGaugeStyleUtils._DARK_INDICATOR = {
  'anchorX': 227, 'anchorY': 425
};
/**
 * Returns the color, taking into account the thresholds if specified.
 * @param {DvtGauge} gauge
 * @return {string} The color of the gauge.
 */
DvtGaugeStyleUtils.getColor = function(gauge) {
  // Options Object
  var options = gauge.getOptions();

  // Thresholds
  var thresholdIndex = DvtGaugeDataUtils.getValueThresholdIndex(gauge);
  var threshold = DvtGaugeDataUtils.getThreshold(gauge, thresholdIndex);
  if (threshold && (!(gauge instanceof DvtStatusMeterGauge) ||
      ((gauge instanceof DvtStatusMeterGauge) && options['thresholdDisplay'] == 'onIndicator'))) {
    return DvtGaugeStyleUtils.getThresholdColor(gauge, threshold, thresholdIndex);
  }

  return options['color'];
};


/**
 * Returns the border color, taking into account the thresholds if specified.
 * @param {DvtGauge} gauge
 * @return {string} The border color of the gauge.
 */
DvtGaugeStyleUtils.getBorderColor = function(gauge) {
  // Options Object
  var options = gauge.getOptions();

  // Thresholds
  var thresholdIndex = DvtGaugeDataUtils.getValueThresholdIndex(gauge);
  var threshold = DvtGaugeDataUtils.getThreshold(gauge, thresholdIndex);

  if (threshold && threshold['borderColor'] &&
      (!(gauge instanceof DvtStatusMeterGauge) ||
      (gauge instanceof DvtStatusMeterGauge) && (options['thresholdDisplay'] == 'onIndicator')))
    return threshold['borderColor'];

  return options['borderColor'];
};


/**
 * Returns the color, taking into account the thresholds if specified.
 * @param {DvtGauge} gauge
 * @return {string} The color of the gauge.
 */
DvtGaugeStyleUtils.getPlotAreaColor = function(gauge) {
  // Options Object
  var options = gauge.getOptions();

  // Thresholds
  var thresholdIndex = DvtGaugeDataUtils.getValueThresholdIndex(gauge);
  var threshold = DvtGaugeDataUtils.getThreshold(gauge, thresholdIndex);
  if (threshold && (!(gauge instanceof DvtStatusMeterGauge) || ((gauge instanceof DvtStatusMeterGauge) && options['thresholdDisplay'] != 'onIndicator'))) {
    return DvtGaugeStyleUtils.getThresholdColor(gauge, threshold, thresholdIndex);
  }


  return options['plotArea']['color'];
};


/**
 * Returns the defined threshold color or gets it from the threshold color ramp
 * @param {DvtGauge} gauge
 * @param {object} threshold
 * @param {number} thresholdIndex
 * @return {string} The Threshold color of the gauge.
 */
DvtGaugeStyleUtils.getThresholdColor = function(gauge, threshold, thresholdIndex) {
  if (threshold['color'])
    return threshold['color'];
  else {
    // Style Defaults
    var options = gauge.getOptions();
    var defaultColors = options['_thresholdColors'];
    var colorIndex = thresholdIndex % defaultColors.length;
    return options['_thresholdColors'][colorIndex];
  }
};

/**
 * Returns the background object associated with the specified background string
 * @param {string} backgroundType
 * @return {object} The background object.
 */
DvtGaugeStyleUtils.getDialBackground = function(backgroundType) {
  if (backgroundType === 'rectangleAlta')
    return DvtGaugeStyleUtils._ALTA_RECTANGLE;

  else if (backgroundType === 'domeAlta')
    return DvtGaugeStyleUtils._ALTA_DOME;

  else if (backgroundType === 'circleAntique')
    return DvtGaugeStyleUtils._ANTIQUE_CIRCLE;

  else if (backgroundType === 'rectangleAntique')
    return DvtGaugeStyleUtils._ANTIQUE_RECTANGLE;

  else if (backgroundType === 'domeAntique')
    return DvtGaugeStyleUtils._ANTIQUE_DOME;

  else if (backgroundType === 'circleLight')
    return DvtGaugeStyleUtils._LIGHT_CIRCLE;

  else if (backgroundType === 'rectangleLight')
    return DvtGaugeStyleUtils._LIGHT_RECTANGLE;

  else if (backgroundType === 'domeLight')
    return DvtGaugeStyleUtils._LIGHT_DOME;

  else if (backgroundType === 'circleDark')
    return DvtGaugeStyleUtils._DARK_CIRCLE;

  else if (backgroundType === 'rectangleDark')
    return DvtGaugeStyleUtils._DARK_RECTANGLE;

  else if (backgroundType === 'domeDark')
    return DvtGaugeStyleUtils._DARK_DOME;
  return DvtGaugeStyleUtils._ALTA_CIRCLE;
};
/**
 * Returns the indicator object associated with the specified indicator string
 * @param {string} indicatorType
 * @return {object} The indicator object.
 */
DvtGaugeStyleUtils.getDialIndicator = function(indicatorType) {
  if (indicatorType === 'needleAntique')
    return DvtGaugeStyleUtils._ANTIQUE_INDICATOR;

  else if (indicatorType === 'needleLight')
    return DvtGaugeStyleUtils._LIGHT_INDICATOR;

  else if (indicatorType === 'needleDark')
    return DvtGaugeStyleUtils._DARK_INDICATOR;

  return DvtGaugeStyleUtils._ALTA_INDICATOR;
};

/**
 * Determines if the gauge has a title
 * @param {object} options The options object
 * @return {Boolean} Returns true if the title is rendered
 */
DvtGaugeStyleUtils.hasTitle = function(options) {
  return !!options['title']['text'];
};
/**
 * Renderer for DvtGauge.
 * @class
 */
var DvtGaugeRenderer = new Object();

DvtObj.createSubclass(DvtGaugeRenderer, DvtObj, 'DvtGaugeRenderer');

/**
 * Renders the empty text for the component.
 * @param {DvtGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {DvtRectangle} availSpace The available space.
 */
DvtGaugeRenderer.renderEmptyText = function(gauge, container, availSpace) {
  // Get the empty text string
  var options = gauge.getOptions();
  var emptyTextStr = options['emptyText'];

  if (!emptyTextStr)
    emptyTextStr = DvtBundle.getTranslation(options, 'labelNoData', DvtBundle.UTIL_PREFIX, 'NO_DATA', null);

  // Set font size
  var labelStyle = options['_statusMessageStyle'];
  if (!labelStyle.getStyle('font-size'))
    labelStyle.setStyle('font-size', '13px');

  if (gauge instanceof DvtStatusMeterGauge) {
    var labelColor = labelStyle.getStyle('color');
    labelColor = labelColor ? labelColor : '#333333';
    labelStyle.setStyle('color', labelColor);
  }

  DvtTextUtils.renderEmptyText(container, emptyTextStr,
      new DvtRectangle(availSpace.x, availSpace.y, availSpace.w, availSpace.h),
      gauge.__getEventManager(), labelStyle);
};


/**
 * Formats gauge label.
 * @param {float} value The value to render into.
 * @param {Object} gauge The gauge.
 * @return {string} The formatted metric label string
 */
DvtGaugeRenderer.getFormattedMetricLabel = function(value, gauge) {
  var options = gauge.getOptions();
  if (options['metricLabel']['text'])
    return options['metricLabel']['text'];

  var converter = options['metricLabel']['converter'];
  var scaling = options['metricLabel']['scaling'];
  var autoPrecision = options['metricLabel']['autoPrecision'] ? options['metricLabel']['autoPrecision'] : 'on';
  var isPercent = options['metricLabel']['textType'] == 'percent';
  return DvtGaugeRenderer._formatLabelValue(value, gauge, converter, scaling, autoPrecision, isPercent);
};


/**
 * Formats dial gauge tick labels.
 * @param {float} value The value to render into.
 * @param {Object} gauge The gauge.
 * @return {string} The formatted tick label string
 */
DvtGaugeRenderer.formatTickLabelValue = function(value, gauge) {
  var options = gauge.getOptions();
  var converter = null;
  var isPercent = (options['tickLabel']['textType'] == 'percent');

  if (options['tickLabel']['rendered'] == 'on' && options['tickLabel']['converter'])
    converter = options['tickLabel']['converter'];

  var scaling = null;
  if (options['tickLabel']['rendered'] == 'on' && options['tickLabel']['scaling'])
    scaling = options['tickLabel']['scaling'];

  var autoPrecision = options['tickLabel']['autoPrecision'] ? options['tickLabel']['autoPrecision'] : 'on';
  return DvtGaugeRenderer._formatLabelValue(value, gauge, converter, scaling, autoPrecision, isPercent);
};


/**
 * Formats gauge label.
 * @param {float} value The value to render into.
 * @param {Object} gauge The gauge.
 * @param {object} converter The converter object to use for formatting
 * @param {string} scaling The scale used for formatting the number
 * @param {string} autoPrecision "on" if auto precision should be applied otherwise "off"; if null or undefined then auto precision is applied.
 * @param {boolean} isPercent Specifies whether we should use percent formatting for this label.
 * @return {string} The formatted string value for this label
 * @private
 */
DvtGaugeRenderer._formatLabelValue = function(value, gauge, converter, scaling, autoPrecision, isPercent) {
  var options = gauge.getOptions();
  var percentConverter = null;
  var output;

  var minValue = options['min'];
  var maxValue = options['max'];

  var difference = maxValue - minValue;
  var divider = difference < 1000 ? 100 : 1000;
  var increment = null;
  if (!isNaN(difference))
    increment = difference / divider;

  if (isPercent) {
    value = DvtGaugeRenderer.getFillPercentage(options, options['min'], options['max'], value, true);
    percentConverter = gauge.getCtx().getNumberConverter({'style': 'percent', 'maximumFractionDigits': 0});
  }

  // when scaling is set then init formatter
  var formatter = new DvtLinearScaleAxisValueFormatter(gauge.getCtx(), minValue, maxValue, increment, scaling, autoPrecision);
  if (converter && converter['getAsString'])
    output = formatter.format(value, converter);
  else if (converter && converter['format'])
    output = formatter.format(value, converter);
  else if (percentConverter)
    output = formatter.format(value, percentConverter);
  else if (isPercent)
    output = formatter.format(value * 100);
  else
    output = formatter.format(value);

  // if no percentConverter is set, or if both converters are set, append a % sign to the output
  return (isPercent && (!percentConverter || converter) ? String(output) + '%' : output);
};


/**
 * Determine percent of total area to fill
 * @param {object} options The object containing the data.
 * @param {number} min Min value.
 * @param {number} max Max value.
 * @param {number} value Value to draw to.
 * @param {boolean} unbound Specifies whether to not bound the return value by 0 and 1
 * @return {number} Percent of the area filled
 */
DvtGaugeRenderer.getFillPercentage = function(options, min, max, value, unbound) {
  var percentFill = ((value - min) / (options['max'] - options['min']));
  percentFill = unbound ? percentFill : Math.min(Math.max(0, percentFill), 1);
  return percentFill;
};


/**
 * Returns the tooltip string for the specified gauge.
 * @param {DvtGauge} gauge
 * @return {string}
 */
DvtGaugeRenderer.getTooltipString = function(gauge) {
  var options = gauge.getOptions();
  var thresholdIndex = DvtGaugeDataUtils.getValueThresholdIndex(gauge);
  var threshold = DvtGaugeDataUtils.getThreshold(gauge, thresholdIndex);
  var metricValue = DvtGaugeRenderer.getFormattedMetricLabel(options['value'], gauge);
  // Tooltip is based on the threshold shortDesc, top level shortDesc, or metric label. Check null to allow suppression.
  if (threshold && threshold['shortDesc'] != null)
    return threshold['shortDesc'];
  else if (options['shortDesc'] != null)
    return options['shortDesc'];
  else if (options['title']['text'])
    return DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'COLON_SEP_LIST', [options['title']['text'], metricValue]);
  else // Use the formatted metric label
    return metricValue;
};

/**
 * Renders the label into the specified area.
 * @param {DvtGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {DvtRectangle} bounds The available bounds for rendering.
 * @param {color} color Label color
 * @param {string} halign The horizontal alignment
 * @param {string} valign The vertical alignment
 * @param {boolean=} isRenderedByDefault Whether the label is rendered by default. Defaults to false.
 * @return {boolean} Return true if the title is rendered
 */
DvtGaugeRenderer.renderLabel = function(gauge, container, bounds, color, halign, valign, isRenderedByDefault) {
  var options = gauge.getOptions();
  var rendered = false;

  // Create and position the label
  if (options['metricLabel']['rendered'] == 'on' || (isRenderedByDefault && options['metricLabel']['rendered'] != 'off')) {
    var labelString = DvtGaugeRenderer.getFormattedMetricLabel(options['value'], gauge);
    var minString = DvtGaugeRenderer.getFormattedMetricLabel(options['min'], gauge);
    var maxString = DvtGaugeRenderer.getFormattedMetricLabel(options['max'], gauge);

    // Create the label and align
    var label = new DvtOutputText(gauge.getCtx(), labelString, bounds.x + bounds.w / 2, bounds.y + bounds.h / 2);
    label.setCSSStyle(options['metricLabel']['style']);
    var size = options['metricLabel']['style'].getStyle('font-size');
    size = size ? parseInt(size) : null;
    if (!size) {
      size = DvtGaugeRenderer.calcLabelFontSize([labelString, minString, maxString], label, bounds);
      label.setTextString(labelString);
      label.setFontSize(size);
    }

    if (valign == 'top') {
      label.setY(bounds.y);
      label.alignTop();
    }
    else if (valign == 'middle') {
      DvtTextUtils.centerTextVertically(label, bounds.y + bounds.h / 2);
    }
    else if (valign == 'bottom') {
      label.setY(bounds.y + bounds.h);
      label.alignBottom();
    }

    if (halign == 'center')
      label.alignCenter();
    else if (halign == 'left') {
      label.setX(bounds.x);
      label.alignLeft();
    }
    else if (halign == 'right') {
      label.setX(bounds.x + bounds.w);
      label.alignRight();
    }

    // Set color
    if (color != null)
      label.setSolidFill(color);

    // Truncate if needed, null is returned if the label doesn't fit
    rendered = DvtTextUtils.fitText(label, bounds.w, bounds.h, container);
  }
  return rendered;
};

/**
 * Renders the title into the specified area.
 * @param {DvtGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {DvtRectangle} bounds The available bounds for rendering.
 * @param {color} color Title color
 * @param {string} valign The vertical alignment
 * @return {boolean} Return true if the title is rendered
 */
DvtGaugeRenderer.renderTitle = function(gauge, container, bounds, color, valign) {
  var options = gauge.getOptions();
  var rendered = false;

  // Create and position the label
  if (DvtGaugeStyleUtils.hasTitle(options)) {
    var titleString = options['title']['text'];
    var titleStyle = options['title']['style'];
    var title = new DvtMultilineText(gauge.getCtx(), titleString);
    var fontStyle = titleStyle.clone();
    title.setCSSStyle(titleStyle);
    var size = titleStyle.getStyle('font-size');
    size = size ? parseInt(size) : null;
    if (!size) {
      // Calculate font size
      var tempTitle = new DvtOutputText(gauge.getCtx(), titleString, 0, 0);
      tempTitle.setCSSStyle(titleStyle);
      size = tempTitle.getOptimalFontSize(bounds);
      fontStyle.setFontSize('font-size', size.toString());
    }
    // Set color
    if (color != null)
      fontStyle.setStyle('color', color);

    title.setCSSStyle(fontStyle);
    rendered = DvtTextUtils.fitText(title, bounds.w, bounds.h, gauge);

    var textHeight = DvtTextUtils.getTextHeight(title);
    if (valign == 'top')
      title.setY(bounds.y);
    else if (valign == 'bottom')
      title.setY(bounds.y + bounds.h - textHeight);
    else
      title.setY(bounds.y + bounds.h / 2 - textHeight / 2);

    title.setX(bounds.x + bounds.w / 2);
    title.alignCenter();
    container.addChild(title);
  }
  return rendered;
};

/**
 * Returns the optimal font size based on a list of labels and the available bounds
 * @param {Array} labels A list of label strings used to find the optimal string size for the label
 * @param {DvtOutputText} label The text object used to get the optimal size
 * @param {DvtRectangle} bounds The available bounds for rendering.
 * @return {number} The optimal font size
 */
DvtGaugeRenderer.calcLabelFontSize = function(labels, label, bounds) {
  var maxWidth = 0;
  var maxLabel = null;
  var width = 0;
  for (var i = 0; i < labels.length; i++) {
    label.setTextString(labels[i]);
    width = label.measureDimensions().w;
    if (width > maxWidth) {
      maxLabel = labels[i];
      maxWidth = width;
    }
  }
  label.setTextString(maxLabel);
  return label.getOptimalFontSize(bounds);
};


/**
 * Get step adjusted value.
 * @param {object} options The object containing the data.
 * @param {number} value Current value
 * @return {number} Adjusted value
 */
DvtGaugeRenderer.adjustForStep = function(options, value) {
  var step = Number(options['step']);
  if (step && step > 0) {
    var stepNum = (value - options['min']) / step;
    if (stepNum > .5) {
      var adjustedValue = Math.round(stepNum) * step + options['min'];
      return Math.max(Math.min(options['max'], adjustedValue), options['min']);
    }
    else
      return options['min'];
  }
  return value;
};
// Copyright (c) 2008, 2015, Oracle and/or its affiliates. All rights reserved.



/**
 * LED Gauge component.  This class should never be instantiated directly.  Use the
 * newInstance function instead.
 * @class
 * @constructor
 * @extends {DvtGauge}
 * @export
 */
var DvtLedGauge = function() {};

DvtObj.createSubclass(DvtLedGauge, DvtGauge, 'DvtLedGauge');


/**
 * Returns a new instance of DvtLedGauge.
 * @param {DvtContext} context The rendering context.
 * @param {string=} callback The function that should be called to dispatch component events.
 * @param {object=} callbackObj The optional object instance on which the callback function is defined.
 * @param {boolean=} bStaticRendering True to indicate that the gauge is not interactive to optimize performance.
 * @return {DvtLedGauge}
 * @export
 */
DvtLedGauge.newInstance = function(context, callback, callbackObj, bStaticRendering) {
  var gauge = new DvtLedGauge();
  gauge.Init(context, callback, callbackObj, bStaticRendering);
  return gauge;
};


/**
 * @override
 */
DvtLedGauge.prototype.Init = function(context, callback, callbackObj, bStaticRendering) {
  DvtLedGauge.superclass.Init.call(this, context, callback, callbackObj, bStaticRendering);

  // Create the defaults object
  this.Defaults = new DvtLedGaugeDefaults();
};


/**
 * @override
 */
DvtLedGauge.prototype.SetOptions = function(options) {
  // Combine the user options with the defaults and store
  DvtLedGauge.superclass.SetOptions.call(this, this.Defaults.calcOptions(options));

  // animationOnDisplay="auto" will do "zoom"
  if (this.Options['animationOnDisplay'] == 'auto')
    this.Options['animationOnDisplay'] = 'zoom';

  // animationOnDataChange="auto" will do "alphaFade"
  if (this.Options['animationOnDataChange'] == 'auto')
    this.Options['animationOnDataChange'] = 'alphaFade';

  // readOnly="false" is not supported
  this.Options['readOnly'] = true;
};


/**
 * @override
 */
DvtLedGauge.prototype.Render = function(container, width, height) 
{
  DvtLedGaugeRenderer.render(this, container, width, height);
};
/**
 * Default values and utility functions for component versioning.
 * @class
 * @constructor
 * @extends {DvtGaugeDefaults}
 */
var DvtLedGaugeDefaults = function() {
  this.Init({'skyros': DvtLedGaugeDefaults.VERSION_1, 'alta': {}});
};

DvtObj.createSubclass(DvtLedGaugeDefaults, DvtGaugeDefaults, 'DvtLedGaugeDefaults');


/**
 * Defaults for version 1.
 */
DvtLedGaugeDefaults.VERSION_1 = {
  'type': 'circle'
};
/**
 * Renderer for DvtLedGauge.
 * @class
 */
var DvtLedGaugeRenderer = new Object();

DvtObj.createSubclass(DvtLedGaugeRenderer, DvtObj, 'DvtLedGaugeRenderer');

/** @private **/
DvtLedGaugeRenderer._SKYROS_SHAPE_TRIANGLE_CMDS = 'M-42,36.6Q-50,36.6,-46.54,28.6L-4,-43.07Q0,-50,4,-43.07L46.54,28.6Q50,36.6,42,36.6Z';

/** @private **/
DvtLedGaugeRenderer._SHAPE_TRIANGLE_CMDS = [- 50, 36.6, 0, - 50, 50, 36.6];

/** @private **/
DvtLedGaugeRenderer._SKYROS_SHAPE_TRIANGLE_INNER_CMDS = [- 50, 36.6, 0, - 50, 50, 36.6];

/**
 * Polygon commands for star shape.  Centered at (0,0) with size of 100.
 * @private
 */
DvtLedGaugeRenderer._SKYROS_SHAPE_STAR_CMDS = [- 13.05, - 12.94, - 50, - 11.13, - 21.06, 11.9, - 30.74, 47.6, 0.1, 27.18, 31.06, 47.44, 21.17, 11.79, 50, - 11.39, 13.05, - 13.01, - 0.06, - 47.59];

/**
 * Polygon commands for star shape.  Centered at (0,0) with size of 100.
 * @private
 */
DvtLedGaugeRenderer._SHAPE_STAR_CMDS = [- 50, - 11.22, - 16.69, - 17.94, 0, - 47.55, 16.69, - 17.94, 50, - 11.22, 26.69, 13.8, 30.9, 47.56, 0, 33.42, - 30.9, 47.56, - 26.69, 13.8];

/** @private **/
DvtLedGaugeRenderer._SKYROS_SHAPE_ARROW_CMDS = 'M0,45L21,45Q24.414,44.414,25,41L25,10L42,10Q48.5,9.1,45,4L2,-38Q0,-39,-2,-38L-45,4Q-48.5,9.1,-42,10L-25,10L-25,41Q-24.414,44.414,-21,45Z';

/** @private **/
DvtLedGaugeRenderer._SHAPE_ARROW_CMDS = [25, 48, 25, 8, 47.5, 8, 0, - 39, - 47.5, 8, - 25, 8, - 25, 48];

/** @private **/
DvtLedGaugeRenderer._SKYROS_SHAPE_ARROW_INNER_CMDS = [25, 48, 25, 8, 47.5, 8, 0, - 39, - 47.5, 8, - 25, 8, - 25, 48];

/** @private **/
DvtLedGaugeRenderer._SHAPE_HUMAN_CMDS = 'M -0.06059525142297417 -50.86842065108466 C -11.4496388584463 -50.86842065108466 ' +
    '-20.708163169810554 -39.024253028220556 -20.708163169810554 -24.413724255650386 C -20.708163169810554 -9.803195483080515 ' +
    '-11.4496388584463 2.040972139783591 -0.06059525142297417 2.040972139783591 C 11.328499974520241 2.040972139783591 20.586972666964613 ' +
    '-9.803195483080515 20.586972666964613 -24.413724255650386 C 20.586972666964613 -39.024253028220556 11.328499974520241 -50.86842065108466 ' +
    '-0.06059525142297417 -50.86842065108466 z M -23.93434565705865 -2.959610715450779 C -30.908061721494278 3.3998402034127153 -42.00096758564793 ' +
    '18.817121073473572 -38.77478509839983 33.65756051481475 C -20.651382358034887 47.30044101688934 14.372054723529814 49.13162219665128 ' +
    '39.298831093003386 32.85101489300273 C 40.26410489318826 16.477493533721187 32.34060070450674 4.7883891459240715 23.167918656763206 ' +
    '-2.959610715450779 C 11.553661702670112 21.074158341552575 -11.029615708066558 16.237465556670102 -23.93434565705865 -2.959610715450779 z ';

/**
 * Renders the gauge in the specified area.
 * @param {DvtLedGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {number} width The width of the component.
 * @param {number} height The height of the component.
 */
DvtLedGaugeRenderer.render = function(gauge, container, width, height) {
  if (DvtGaugeDataUtils.hasData(gauge)) {
    // Allocate the outer gap for the component
    var options = gauge.getOptions();
    var outerGap = options['__layout']['outerGap'];
    var size = options && (options['size'] >= 0 || options['size'] < 1) ? Math.sqrt(options['size']) : 1;
    var bounds = new DvtRectangle(outerGap + ((width - 2 * outerGap) * (1 - size) / 2), outerGap + ((height - 2 * outerGap) * (1 - size) / 2), (width - 2 * outerGap) * size, (height - 2 * outerGap) * size);

    // Render the LED shape first
    DvtLedGaugeRenderer._renderShape(gauge, container, bounds);

    // Render the visual effects
    DvtLedGaugeRenderer._renderVisualEffects(gauge, container, bounds);

    // Render the title on top of the LED
    var bTitleRendered = false;
    var labelColor = DvtColorUtils.getContrastingTextColor(DvtGaugeStyleUtils.getColor(gauge));
    if (DvtGaugeStyleUtils.hasTitle(options)) {
      var titleValign = 'middle';
      var titleBounds = DvtLedGaugeRenderer._getLabelBounds(gauge, container, bounds);
      if (options['metricLabel']['rendered'] == 'on') {
        titleBounds.y = titleBounds.y + titleBounds.h * .6;
        titleBounds.h = titleBounds.h * .4;
        titleValign = 'top';
      }
      // Use the specified label color unless in high contrast mode
      if (!DvtAgent.isHighContrast() && options['title']['style'].getStyle('color') != null) {
        bTitleRendered = DvtGaugeRenderer.renderTitle(gauge, container, titleBounds, null, titleValign);
      }
      else {
        bTitleRendered = DvtGaugeRenderer.renderTitle(gauge, container, titleBounds, labelColor, titleValign);
      }
    }

    // Render the label on top of the LED
    if (options['metricLabel']['rendered'] == 'on') {
      var labelBounds = DvtLedGaugeRenderer._getLabelBounds(gauge, container, bounds);
      var valign = 'middle';
      if (bTitleRendered) {
        labelBounds.h = labelBounds.h * .55;
        valign = 'bottom';
      }

      // Use the specified label color unless in high contrast mode
      if (!DvtAgent.isHighContrast() && options['metricLabel']['style'].getStyle('color') != null) {
        DvtGaugeRenderer.renderLabel(gauge, container, labelBounds, null, 'center', valign);
      }
      else {
        DvtGaugeRenderer.renderLabel(gauge, container, labelBounds, labelColor, 'center', valign);
      }
    }
  }
  else // Render the empty text
    DvtGaugeRenderer.renderEmptyText(gauge, container, new DvtRectangle(0, 0, width, height));
};

/**
 * Renders the led shape into the specified area.
 * @param {DvtLedGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {DvtRectangle} bounds The available bounds for rendering.
 * @private
 */
DvtLedGaugeRenderer._renderShape = function(gauge, container, bounds) {
  var context = gauge.getCtx();
  var options = gauge.getOptions();

  // Find the styles
  var type = options['type'];
  var color = DvtGaugeStyleUtils.getColor(gauge);
  var borderColor = DvtGaugeStyleUtils.getBorderColor(gauge);

  // Calculate the center and radius for convenience
  var cx = bounds.x + bounds.w / 2;
  var cy = bounds.y + bounds.h / 2;
  var r = Math.min(bounds.w, bounds.h) / 2;
  var isSkyros = DvtGaugeDefaults.isSkyrosSkin(gauge);

  // Initialize the cache if not done already.  The cache stores the paths centered at 0,0 and at scale 100.
  if (!DvtLedGaugeRenderer._cache)
    DvtLedGaugeRenderer._cache = new DvtCache(50);

  // Render the LED shape
  var shape;
  var cmds;

  // Scale is relative to reference size of 100
  var scale = Math.min(bounds.w / 100, bounds.h / 100);
  if (type == 'rectangle') {
    shape = new DvtRect(context, bounds.x, bounds.y, bounds.w, bounds.h);
  }
  else if (type == 'diamond') {
    shape = new DvtPolygon(context, [cx - r, cy, cx, cy - r, cx + r, cy, cx, cy + r]);
  }
  else if (type == 'circle') {
    shape = new DvtCircle(context, cx, cy, r);
  }
  else {
    if (type == 'star')
      cmds = isSkyros ? DvtLedGaugeRenderer._SKYROS_SHAPE_STAR_CMDS : DvtLedGaugeRenderer._SHAPE_STAR_CMDS;
    else if (type == 'triangle')
      cmds = isSkyros ? DvtLedGaugeRenderer._SKYROS_SHAPE_TRIANGLE_CMDS : DvtLedGaugeRenderer._SHAPE_TRIANGLE_CMDS;
    else if (type == 'arrow')
      cmds = isSkyros ? DvtLedGaugeRenderer._SKYROS_SHAPE_ARROW_CMDS : DvtLedGaugeRenderer._SHAPE_ARROW_CMDS;
    else if (type == 'human')
      cmds = DvtLedGaugeRenderer._SHAPE_HUMAN_CMDS;
    else {
      // Assume we're using a custom path
      cmds = DvtLedGaugeRenderer._cache.get(type);
      if (!cmds) {
        shape = new DvtPath(context, type);
        // Calculate the dimensions and shift the shape to be centered at 0,0 within its containing rectangle
        var dim = DvtDisplayableUtils.getDimForced(context, shape);
        var scaleTo100 = 100 / Math.max(dim.w, dim.h);
        cmds = DvtPathUtils.transformPath(type, - scaleTo100 * (dim.x + dim.w / 2), - scaleTo100 * (dim.y + dim.h / 2), scaleTo100, scaleTo100);
        DvtLedGaugeRenderer._cache.put(type, cmds);
      }
    }

    // These shapes are defined as polygons
    if ((!isSkyros && (type == 'triangle' || type == 'arrow')) || type == 'star') {
      cmds = DvtPolygonUtils.scale(cmds, scale, scale);

      // Translate from center of (0,0)
      cmds = DvtPolygonUtils.translate(cmds, bounds.x + bounds.w / 2, bounds.y + bounds.h / 2);
      shape = new DvtPolygon(context, cmds);
    }
    // All others use paths
    else {
      // Translate from center of (0,0)
      cmds = DvtPathUtils.transformPath(cmds, bounds.x + bounds.w / 2, bounds.y + bounds.h / 2, scale, scale);
      shape = new DvtPath(context, cmds);
    }
  }

  // Apply the style properties
  if (isSkyros || options['visualEffects'] == 'none')
    shape.setSolidFill(color);
  else {
    var arColors = [DvtColorUtils.adjustHSL(color, 0, - .09, .04), DvtColorUtils.adjustHSL(color, 0, - .04, - .05)];
    var rotation = options && (options['rotation'] % 90 == 0) ? options['rotation'] : 0;
    var gradientRotation = type == 'arrow' || type == 'star' || type == 'triangle' ? rotation - 90 : 270;
    shape.setFill(new DvtLinearGradientFill(gradientRotation, arColors, [1, 1], [0, 1]));
  }
  if (borderColor)
    shape.setSolidStroke(borderColor);

  // rotate the shape if needed
  var rotation = isSkyros ? options['rotation'] + 90 : options['rotation'];
  if (rotation && (type == 'arrow' || type == 'triangle' || (shape instanceof DvtPath && type != 'human')))
    shape = DvtLedGaugeRenderer._rotate(gauge, container, shape, bounds);

  // Add the shape to the container
  container.addChild(shape);
};

/**
 * Scales and rotates the shape into the specified bounds.
 * @param {DvtLedGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {DvtDisplayable} shape The shape for the gauge.
 * @param {DvtRectangle} bounds The bounds of the shape.
 * @return {DvtDisplayable} The scaled shape
 * @private
 */
DvtLedGaugeRenderer._rotate = function(gauge, container, shape, bounds) {
  var options = gauge.getOptions();

  // Add containers for the tranforms, add to display list to calc dimensions
  var translateGroup = new DvtContainer(gauge.getCtx());
  container.addChild(translateGroup);
  translateGroup.addChild(shape);

  // Rotate the shape, non-90 degree rotation values are ignored
  var rotation = options && (options['rotation'] % 90 == 0) ? options['rotation'] : 0;
  var rotationMatrix = new DvtMatrix();
  rotationMatrix.rotate(Math.PI * (rotation) / 180);
  shape.setMatrix(rotationMatrix);

  // Translate the shape so that it's centered within the bounds
  var groupDims = translateGroup.getDimensions();
  var tx = (bounds.x + bounds.w / 2) - (groupDims.x + groupDims.w / 2);
  var ty = (bounds.y + bounds.h / 2) - (groupDims.y + groupDims.h / 2);

  var matrix = new DvtMatrix();
  matrix.translate(tx, ty);
  translateGroup.setMatrix(matrix);

  // Return the group with its transform
  return translateGroup;
};

/**
 * Renders the visual effects for the shape into the specified area.
 * @param {DvtLedGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {DvtRectangle} bounds The bounds of the shape.
 * @private
 */
DvtLedGaugeRenderer._renderVisualEffects = function(gauge, container, bounds) {
  var options = gauge.getOptions();
  var type = options['type'];

  if (options['visualEffects'] == 'none')
    return;

  // Render the visual effects
  if (DvtGaugeDefaults.isSkyrosSkin(gauge)) {
    if (type == 'circle')
      DvtLedGaugeRenderer._renderOverlayCircle(gauge, container, bounds);
    else if (type == 'diamond')
      DvtLedGaugeRenderer._renderOverlayDiamond(gauge, container, bounds);
    else if (type == 'triangle')
      DvtLedGaugeRenderer._renderOverlayTriangle(gauge, container, bounds);
    else if (type == 'arrow')
      DvtLedGaugeRenderer._renderOverlayArrow(gauge, container, bounds);
    else // rectangle
      DvtLedGaugeRenderer._renderOverlayRectangle(gauge, container, bounds);
  }
};

/**
 * Renders the visual effects for the rectangle LED into the specified area.
 * @param {DvtLedGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {DvtRectangle} bounds The bounds of the shape.
 * @private
 */
DvtLedGaugeRenderer._renderOverlayRectangle = function(gauge, container, bounds) {
  // Overlay Shape
  var dx = bounds.w * 0.04;
  var dy = bounds.h * 0.04;
  var overlayBounds = new DvtRectangle(bounds.x + dx, bounds.y + dy, bounds.w - 2 * dx, bounds.h - 2 * dy);
  var overlay = new DvtRect(gauge.getCtx(), overlayBounds.x, overlayBounds.y, overlayBounds.w, overlayBounds.h);
  overlay.setMouseEnabled(false);
  container.addChild(overlay);

  // Gradient
  var arColors = ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'];
  var arAlphas = [0.75, 0.5, 0.15, 0, 0.2, 0.4, 0.2];
  var arStops = [0, 0.05, 0.4, 0.6, 0.8, 0.9, 1.0];
  var gradient = new DvtLinearGradientFill(270, arColors, arAlphas, arStops);
  overlay.setFill(gradient);
};

/**
 * Renders the visual effects for the diamond LED into the specified area.
 * @param {DvtLedGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {DvtRectangle} bounds The bounds of the shape.
 * @private
 */
DvtLedGaugeRenderer._renderOverlayDiamond = function(gauge, container, bounds) {
  // Overlay Shape
  var dx = bounds.w * 0.05;
  var dy = bounds.h * 0.05;
  var overlayBounds = new DvtRectangle(bounds.x + dx, bounds.y + dy, bounds.w - 2 * dx, bounds.h - 2 * dy);
  var cx = overlayBounds.x + overlayBounds.w / 2;
  var cy = overlayBounds.y + overlayBounds.h / 2;
  var r = Math.min(overlayBounds.w, overlayBounds.h) / 2;
  var overlay = new DvtPolygon(gauge.getCtx(), [cx - r, cy, cx, cy - r, cx + r, cy, cx, cy + r]);
  overlay.setMouseEnabled(false);
  container.addChild(overlay);

  // Gradient
  var arColors = ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'];
  var arAlphas = [0.75, 0.5, 0.15, 0, 0.2, 0.4, 0.2];
  var arStops = [0, 0.05, 0.4, 0.6, 0.8, 0.9, 1.0];
  var gradient = new DvtLinearGradientFill(270, arColors, arAlphas, arStops);
  overlay.setFill(gradient);
};

/**
 * Renders the visual effects for the triangle LED into the specified area.
 * @param {DvtLedGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {DvtRectangle} bounds The bounds of the shape.
 * @private
 */
DvtLedGaugeRenderer._renderOverlayTriangle = function(gauge, container, bounds) {
  // Overlay Shape
  var dx = bounds.w * 0.05;
  var dy = bounds.h * 0.05;
  var isSkyros = DvtGaugeDefaults.isSkyrosSkin(gauge);
  var overlayBounds = new DvtRectangle(bounds.x + dx, bounds.y + dy, bounds.w - 2 * dx, bounds.h - 2 * dy);
  var cmds = DvtLedGaugeRenderer._SKYROS_SHAPE_TRIANGLE_INNER_CMDS;
  var scale = Math.min(overlayBounds.w / 100, overlayBounds.h / 100);
  cmds = DvtPolygonUtils.scale(cmds, scale, scale);

  // Translate from center of (0,0)
  cmds = DvtPolygonUtils.translate(cmds, bounds.x + bounds.w / 2, bounds.y + bounds.h / 2);

  var overlay = new DvtPolygon(gauge.getCtx(), cmds);
  // Calculate the gradient params
  var options = gauge.getOptions();
  var rotation = options && (options['rotation'] % 90 == 0) ? options['rotation'] : 0;
  var gradientRotation = isSkyros ? rotation - 90 : 360 - rotation;
  var arColors = ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'];
  var arAlphas = [0.3, 0.55, 0.0, 0.25, 0.1];
  var arStops = [0, 0.05, 0.4, 0.9, 1.0];
  var gradient = new DvtLinearGradientFill(gradientRotation, arColors, arAlphas, arStops);
  overlay.setFill(gradient);

  // Add to display list
  overlay = DvtLedGaugeRenderer._rotate(gauge, container, overlay, overlayBounds);
  overlay.setMouseEnabled(false);
  container.addChild(overlay);
};

/**
 * Renders the visual effects for the arrow LED into the specified area.
 * @param {DvtLedGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {DvtRectangle} bounds The bounds of the shape.
 * @private
 */
DvtLedGaugeRenderer._renderOverlayArrow = function(gauge, container, bounds) {
  // Overlay Shape
  var dx = bounds.w * 0.05;
  var dy = bounds.h * 0.05;
  var isSkyros = DvtGaugeDefaults.isSkyrosSkin(gauge);
  var overlayBounds = new DvtRectangle(bounds.x + dx, bounds.y + dy, bounds.w - 2 * dx, bounds.h - 2 * dy);
  var cmds = DvtLedGaugeRenderer._SKYROS_SHAPE_ARROW_INNER_CMDS;

  var scale = Math.min(overlayBounds.w / 100, overlayBounds.h / 100);
  cmds = DvtPolygonUtils.scale(cmds, scale, scale);

  // Translate from center of (0,0)
  cmds = DvtPolygonUtils.translate(cmds, bounds.x + bounds.w / 2, bounds.y + bounds.h / 2);

  var overlay = new DvtPolygon(gauge.getCtx(), cmds);

  // Calculate the gradient params
  var options = gauge.getOptions();
  var rotation = options && (options['rotation'] % 90 == 0) ? options['rotation'] : 0;
  var gradientRotation = isSkyros ? rotation - 90 : 360 - rotation;
  var arColors = ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'];
  var arAlphas = [0.3, 0.55, 0.0, 0.25, 0.1];
  var arStops = [0, 0.05, 0.4, 0.9, 1.0];
  var gradient = new DvtLinearGradientFill(gradientRotation, arColors, arAlphas, arStops);
  overlay.setFill(gradient);

  // Add to display list
  overlay = DvtLedGaugeRenderer._rotate(gauge, container, overlay, overlayBounds);
  overlay.setMouseEnabled(false);
  container.addChild(overlay);
};

/**
 * Renders the visual effects for the circle LED into the specified area.
 * @param {DvtLedGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {DvtRectangle} bounds The bounds of the shape.
 * @private
 */
DvtLedGaugeRenderer._renderOverlayCircle = function(gauge, container, bounds) {
  // The circle uses two overlays.
  var dx = bounds.w * 0.05;
  var dy = bounds.h * 0.05;
  var gradientBounds = new DvtRectangle(bounds.x + dx, bounds.y + dy, bounds.w - 2 * dx, bounds.h - 2 * dy);

  //********************* First Overlay: "Overlay" ************************/
  // Shape
  var cx = gradientBounds.x + gradientBounds.w / 2;
  var cy = gradientBounds.y + gradientBounds.h / 2;
  var radius = Math.min(gradientBounds.w, gradientBounds.h) / 2;
  var overlay = new DvtCircle(gauge.getCtx(), cx, cy, radius);
  overlay.setMouseEnabled(false);
  container.addChild(overlay);

  // Gradient
  var arColors = ['#FFFFFF', '#FFFFFF', '#FFFFFF'];
  var arAlphas = [0, 0.25, 0.5];
  var arStops = [0.15, 0.7, 0.95];
  var gradientCx = cx;
  var gradientCy = cy - radius * 0.6;// per UX
  var gradientRadius = radius * 1.5;
  var gradient = new DvtRadialGradientFill(arColors, arAlphas, arStops, gradientCx, gradientCy, gradientRadius, [gradientBounds.x, gradientBounds.y, gradientBounds.w, gradientBounds.h]);
  overlay.setFill(gradient);

  //********************* Second Overlay: "Highlight" ************************/
  // Shape
  var rx = radius * 0.6;// per UX
  var ry = radius * 0.4;// per UX
  cy = cy - 0.3 * ry;// per UX
  var highlight = new DvtOval(gauge.getCtx(), cx, cy - ry, rx, ry);
  highlight.setMouseEnabled(false);
  container.addChild(highlight);

  // Gradient
  var highlightColors = ['#FFFFFF', '#FFFFFF', '#FFFFFF'];
  var highlightAlphas = [0, 0.2, 0.5];
  var highlightStops = [0.6, 0.8, 1.0];
  var highlightCx = cx;
  var highlightCy = cy;
  var highlightRadius = rx;
  var highlightGradient = new DvtRadialGradientFill(highlightColors, highlightAlphas, highlightStops, highlightCx, highlightCy, highlightRadius, [gradientBounds.x, gradientBounds.y, gradientBounds.w, gradientBounds.h]);
  highlight.setFill(highlightGradient);
};

/**
 * Find correct label bounds
 * @param {DvtLedGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {DvtRectangle} bounds The bounds of the shape.
 * @return {DvtRectangle} Bounds for the label
 * @private
 */
DvtLedGaugeRenderer._getLabelBounds = function(gauge, container, bounds) {
  var options = gauge.getOptions();
  var type = options['type'];
  var rotation = (options['rotation'] % 90 == 0) ? options['rotation'] : 0;
  var minDim = Math.min(bounds.w, bounds.h);
  var newX = bounds.x + bounds.w / 2 - minDim / 2;
  var newY = bounds.y + bounds.h / 2 - minDim / 2;
  var newWidth = minDim;
  var newHeight = minDim;
  if (type == 'triangle') {
    if (rotation == 0) {
      newX += minDim * .2;
      newY += minDim * .25;
      newWidth -= minDim * .4;
      newHeight -= minDim * .3;
    }
    else if (rotation == 90) {
      newX += minDim * .05;
      newY += minDim * .2;
      newWidth -= minDim * .3;
      newHeight -= minDim * .4;
    }
    else if (rotation == 180) {
      newX += minDim * .2;
      newY += minDim * .05;
      newWidth -= minDim * .4;
      newHeight -= minDim * .3;
    }
    else if (rotation == 270) {
      newX += minDim * .25;
      newY += minDim * .2;
      newWidth -= minDim * .3;
      newHeight -= minDim * .4;
    }
  }
  else if (type == 'arrow') {
    if (rotation == 0) {
      newX += minDim * .2;
      newY += minDim * .2;
      newWidth -= minDim * .4;
      newHeight -= minDim * .4;
    }
    else if (rotation == 90) {
      newX += minDim * .05;
      newY += minDim * .2;
      newWidth -= minDim * .28;
      newHeight -= minDim * .4;
    }
    else if (rotation == 180) {
      newX += minDim * .2;
      newY += minDim * .2;
      newWidth -= minDim * .4;
      newHeight -= minDim * .4;
    }
    else if (rotation == 270) {
      newX += minDim * .23;
      newY += minDim * .2;
      newWidth -= minDim * .28;
      newHeight -= minDim * .4;
    }
  }
  else if (type == 'star') {
    newX += minDim * .25;
    newY += minDim * .25;
    newWidth -= minDim * .5;
    newHeight -= minDim * .4;
  }
  else if (type == 'diamond') {
    newX += minDim * .15;
    newY += minDim * .15;
    newWidth -= minDim * .3;
    newHeight -= minDim * .3;
  }
  else if (type == 'rectangle') {
    newX += minDim * .1;
    newY += minDim * .1;
    newWidth -= minDim * .2;
    newHeight -= minDim * .2;
  }
  else {
    newX += minDim * .15;
    newY += minDim * .15;
    newWidth -= minDim * .3;
    newHeight -= minDim * .3;
  }
  return new DvtRectangle(newX, newY, newWidth, newHeight);
};
// Copyright (c) 2008, 2015, Oracle and/or its affiliates. All rights reserved.



/**
 * Status Meter Gauge component.  This class should never be instantiated directly.  Use the
 * newInstance function instead.
 * @class
 * @constructor
 * @extends {DvtGauge}
 * @export
 */
var DvtStatusMeterGauge = function() {};

DvtObj.createSubclass(DvtStatusMeterGauge, DvtGauge, 'DvtStatusMeterGauge');


/**
 * Returns a new instance of DvtStatusMeterGauge.
 * @param {DvtContext} context The rendering context.
 * @param {string} callback The function that should be called to dispatch component events.
 * @param {object} callbackObj The optional object instance on which the callback function is defined.
 * @return {DvtStatusMeterGauge}
 * @export
 */
DvtStatusMeterGauge.newInstance = function(context, callback, callbackObj) {
  var gauge = new DvtStatusMeterGauge();
  gauge.Init(context, callback, callbackObj);
  return gauge;
};


/**
 * @override
 */
DvtStatusMeterGauge.prototype.Init = function(context, callback, callbackObj) {
  DvtStatusMeterGauge.superclass.Init.call(this, context, callback, callbackObj);

  // Create the defaults object
  this.Defaults = new DvtStatusMeterGaugeDefaults();

  /**
   * The axis info of the chart. This will be set during render time and is used for editing support.
   * @type {DvtAxisInfo}
   */
  this.__axisInfo = null;
};


/**
 * @override
 */
DvtStatusMeterGauge.prototype.SetOptions = function(options) {
  // Combine the user options with the defaults and store
  DvtStatusMeterGauge.superclass.SetOptions.call(this, this.Defaults.calcOptions(options));
};


/**
 * @override
 */
DvtStatusMeterGauge.prototype.Render = function(container, width, height) 
{
  DvtStatusMeterGaugeRenderer.render(this, container, width, height);
};


/**
 * @override
 */
DvtStatusMeterGauge.prototype.CreateAnimationOnDisplay = function(objs, animationType, animationDuration) {
  var animatedObjs = [];
  for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var endState = obj.getAnimationParams();
    if (this.Options['orientation'] == 'horizontal')
      obj.setAnimationParams([endState[0], endState[0], endState[2], endState[3]]);
    else if (this.Options['orientation'] == 'vertical')
      obj.setAnimationParams([endState[0], endState[1], endState[3], endState[3]]);
    else if (this.Options['orientation'] == 'circular')
      obj.setAnimationParams([endState[0], endState[1], 0, endState[3], endState[4]]);
    var animation = new DvtCustomAnimation(this.getCtx(), obj, animationDuration);
    animation.getAnimator().addProp(DvtAnimator.TYPE_NUMBER_ARRAY, obj, obj.getAnimationParams, obj.setAnimationParams, endState);
    animation.getAnimator().setEasing(function(progress) {return DvtEasing.backOut(progress, 0.7);});
    animatedObjs.push(animation);
  }
  return new DvtParallelPlayable(this.getCtx(), animatedObjs);
};


/**
 * @override
 */
DvtStatusMeterGauge.prototype.GetValueAt = function(x, y) {
  var options = this.Options;
  var isRTL = DvtAgent.isRightToLeft(this.getCtx());
  if (options['orientation'] == 'horizontal') {
    return this.__axisInfo.getBoundedValueAt(x);
  }
  else if (options['orientation'] == 'vertical') {
    return this.__axisInfo.getBoundedValueAt(y);
  }
  else if (options['orientation'] == 'circular') {
    var angleExtent = options['angleExtent'];
    var angleRads = Math.atan2(y - this.cy, x - this.cx);
    var angle = isRTL ? 180 - (DvtMath.radsToDegrees(angleRads) - options['startAngle']) : DvtMath.radsToDegrees(angleRads) - (360 - options['startAngle']);
    angle = (angle + 720) % 360;

    // Calculate and adjust ratio to keep in bounds
    var ratio = angle / angleExtent;
    var minValue = options['min'];
    var maxValue = options['max'];
    var value = (ratio * (maxValue - minValue)) + minValue;
    if (angle > angleExtent) {
      if ((angle - angleExtent) / (360 - angleExtent) > .5)
        value = 0;
      else
        value = maxValue;
    }

    return value;
  }
};
/**
 * Default values and utility functions for component versioning.
 * @class
 * @constructor
 * @extends {DvtGaugeDefaults}
 */
var DvtStatusMeterGaugeDefaults = function() {
  this.Init({'skyros': DvtStatusMeterGaugeDefaults.VERSION_1, 'alta': DvtStatusMeterGaugeDefaults.SKIN_ALTA});
};

DvtObj.createSubclass(DvtStatusMeterGaugeDefaults, DvtGaugeDefaults, 'DvtStatusMeterGaugeDefaults');


/**
 * Defaults for alta.
 */
DvtStatusMeterGaugeDefaults.SKIN_ALTA = {
  'color': '#393737',
  'metricLabel': {'style': new DvtCSSStyle("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")},
  'plotArea' : {'color': '#E4E8EA', 'borderColor': '#D6DFE6'}
};


/**
 * Defaults for version 1.
 */
DvtStatusMeterGaugeDefaults.VERSION_1 = {
  'angleExtent': 360,
  'borderRadius': 'auto',
  'color': '#313842',
  'indicatorSize': 1,
  'innerRadius': .7,
  'metricLabel': {'style': new DvtCSSStyle('font-family: tahoma, sans-serif;'), 'position': 'auto'},
  'orientation': 'horizontal',
  'plotArea' : {'color': '#AAAAAA', 'borderColor': '#C6C6C6', 'rendered': 'auto', 'borderRadius': 'auto'},
  'startAngle': 90,
  'thresholdDisplay': 'onIndicator'
};
/**
 * Renderer for DvtStatusMeterGauge.
 * @class
 */
var DvtStatusMeterGaugeRenderer = new Object();

DvtObj.createSubclass(DvtStatusMeterGaugeRenderer, DvtObj, 'DvtStatusMeterGaugeRenderer');

/** @private **/
DvtStatusMeterGaugeRenderer._MIN_CORNER_RADIUS = 2.5;

/**
 * Renders the gauge in the specified area.
 * @param {DvtStatusMeterGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {number} width The width of the component.
 * @param {number} height The height of the component.
 */
DvtStatusMeterGaugeRenderer.render = function(gauge, container, width, height) {
  if (DvtGaugeDataUtils.hasData(gauge)) {
    // Allocate the outer gap for the component
    var options = gauge.getOptions();
    var outerGap = options['__layout']['outerGap'];
    var bounds = new DvtRectangle(outerGap, outerGap, width - 2 * outerGap, height - 2 * outerGap);

    if (options['orientation'] == 'horizontal' || options['orientation'] == 'vertical') {
      // Render metric label outside of plot area. Metric labels within the plot area are handled within
      // the renderShape function.
      if (DvtStatusMeterGaugeRenderer._hasMetricLabelOutsidePlotArea(options))
        DvtStatusMeterGaugeRenderer._renderLabelOutsidePlotArea(gauge, container, bounds);

      DvtStatusMeterGaugeRenderer._renderShape(gauge, container, bounds);
    }
    else if (options['orientation'] == 'circular') {
      DvtStatusMeterGaugeRenderer._renderCircularGauge(gauge, container, bounds);
    }
  }
  else // Render the empty text
    DvtGaugeRenderer.renderEmptyText(gauge, container, new DvtRectangle(0, 0, width, height));
};


/**
 * Renders the circular shape into the specified area.
 * @param {DvtStatusMeterGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {DvtRectangle} bounds The available bounds for rendering.
 * @private
 */
DvtStatusMeterGaugeRenderer._renderCircularGauge = function(gauge, container, bounds) {
  var options = gauge.getOptions();
  var isRTL = DvtAgent.isRightToLeft(gauge.getCtx());
  var percentFill = 0;
  var labelBounds = null;
  var value = options['value'];
  var innerRadius = options['innerRadius'];
  var thresholds = options['thresholds'];
  var maxDiameter = null;
  var startAngleRads = DvtMath.TWO_PI - DvtMath.degreesToRads(options['startAngle']);
  var angleExtentRads = DvtMath.degreesToRads(options['angleExtent']);
  var endAngle = (startAngleRads + angleExtentRads) % (2 * Math.PI);

  // Store center for editable gauges
  gauge.cx = bounds.w / 2;
  gauge.cy = bounds.h / 2;
  // Determine start quadrant and end quadrent
  if (angleExtentRads != 2 * Math.PI) {
    labelBounds = DvtStatusMeterGaugeRenderer._adjustCenterAndBounds(gauge, innerRadius, startAngleRads, angleExtentRads, endAngle, bounds, isRTL);
  }
  maxDiameter = maxDiameter ? maxDiameter : Math.min(bounds.w, bounds.h);
  var innerRadiusLength = maxDiameter * .5 * innerRadius;
  var outerRadius = maxDiameter * .5;
  var indicatorSize = options['indicatorSize'];
  if (indicatorSize && indicatorSize > 1) {
    var spaceWidth = ((1 - 1 / indicatorSize) / 2 * (outerRadius - innerRadiusLength));
    innerRadiusLength += spaceWidth;
    outerRadius -= spaceWidth;
  }
  // Add Label first
  var labelHalign = 'center';
  var labelValign = 'middle';
  if (!labelBounds) {
    var maxInnerDiameter = Math.min(bounds.w, bounds.h) * innerRadius;
    innerRadius ? innerRadius * Math.min(bounds.w, bounds.h) : Math.min(bounds.w, bounds.h);
    // Center label bounds within the space available.
    labelBounds = new DvtRectangle(bounds.x + bounds.w / 2 - maxInnerDiameter * (3 / 7), bounds.y + bounds.h / 2 - maxInnerDiameter * (2.5 / 7), maxInnerDiameter * (6 / 7), maxInnerDiameter * (5 / 7));
  }

  var bTitleRendered = false;
  if (DvtGaugeStyleUtils.hasTitle(options)) {
    var titleValign = 'middle';
    var titleSpace = new DvtRectangle(labelBounds.x, labelBounds.y, labelBounds.w, labelBounds.h);
    // If both the title and metricLabel are rendered 1/3 of the available space is allocated for the title
    if (options['metricLabel']['rendered'] != 'off') {
      titleSpace.y = titleSpace.y + titleSpace.h * .6;
      titleSpace.h = titleSpace.h * .4;
      titleValign = 'top';
    }
    bTitleRendered = DvtGaugeRenderer.renderTitle(gauge, container, titleSpace, null, titleValign);
    if (bTitleRendered && options['metricLabel']['rendered'] != 'off') {
      labelBounds.h = labelBounds.h * .55;
      labelValign = 'bottom';
    }

  }
  DvtGaugeRenderer.renderLabel(gauge, container, labelBounds, null, labelHalign, labelValign, true);

  var startAngle = startAngleRads;
  var angleExtent = percentFill * angleExtentRads;
  if (thresholds && options['plotArea']['rendered'] != 'off' && options['thresholdDisplay'] == 'all') {
    for (var currentThresholdIndex = 0; currentThresholdIndex < thresholds.length; currentThresholdIndex++) {
      var thresholdColor = DvtGaugeStyleUtils.getThresholdColor(gauge, thresholds[currentThresholdIndex], currentThresholdIndex);
      var max = thresholds[currentThresholdIndex]['max'] < options['max'] ? thresholds[currentThresholdIndex]['max'] : options['max'];
      var min = currentThresholdIndex == 0 ? options['min'] : thresholds[currentThresholdIndex - 1]['max'];
      startAngle = startAngleRads + angleExtentRads * DvtGaugeRenderer.getFillPercentage(options, options['min'], max, min);
      percentFill = DvtGaugeRenderer.getFillPercentage(options, min, max, max);
      angleExtent = percentFill * angleExtentRads;
      DvtStatusMeterGaugeRenderer._drawCircularArc(gauge, container, bounds, startAngle, angleExtent, innerRadiusLength, outerRadius, thresholdColor, true);
    }
  }
  else if (options['plotArea']['rendered'] != 'off' && options['thresholdDisplay'] != 'all') {
    var plotAreaColor = DvtGaugeStyleUtils.getPlotAreaColor(gauge);
    DvtStatusMeterGaugeRenderer._drawCircularArc(gauge, container, bounds, startAngleRads, angleExtentRads, innerRadiusLength, outerRadius, plotAreaColor, true);
  }

  innerRadiusLength = maxDiameter * innerRadius * .5;
  outerRadius = maxDiameter * .5;
  if (indicatorSize && indicatorSize < 1) {
    var totalWidth = ((1 - indicatorSize) / 2 * (outerRadius - innerRadiusLength));
    innerRadiusLength += totalWidth;
    outerRadius -= totalWidth;
  }

  percentFill = DvtGaugeRenderer.getFillPercentage(options, options['min'], options['max'], value);
  angleExtent = percentFill * angleExtentRads;
  DvtStatusMeterGaugeRenderer._drawCircularArc(gauge, container, bounds, startAngleRads, angleExtent, innerRadiusLength, outerRadius, DvtGaugeStyleUtils.getColor(gauge), false);

  // Reference lines
  var referenceObjects = options['referenceLines'];
  if (referenceObjects) {
    for (var i = 0; i < referenceObjects.length; i++) {
      var referenceLineColor = referenceObjects[i]['color'] ? referenceObjects[i]['color'] : 'black';
      var referenceLineWidth = referenceObjects[i]['lineWidth'] ? referenceObjects[i]['lineWidth'] : 2;
      var referenceLineStyle = referenceObjects[i]['lineStyle'];
      value = referenceObjects[i]['value'];
      var angle = startAngleRads + DvtGaugeRenderer.getFillPercentage(options, options['min'], options['max'], value) * angleExtentRads;
      DvtStatusMeterGaugeRenderer._drawCircularReferenceLine(gauge, container, bounds, angle, referenceLineColor, referenceLineWidth, referenceLineStyle);
    }
  }
};

/**
 * Renders the status meter shape into the specified area.
 * @param {DvtStatusMeterGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {DvtRectangle} bounds The available bounds for rendering.
 * @private
 */
DvtStatusMeterGaugeRenderer._renderShape = function(gauge, container, bounds) {
  var options = gauge.getOptions();
  var isRTL = DvtAgent.isRightToLeft(gauge.getCtx());
  var isVert = (options['orientation'] == 'vertical');

  // Create an axis info to find the coords of values.
  var axisOptions = {
    'layout' : {
    }
  };
  axisOptions['layout']['gapRatio'] = 0;
  axisOptions['timeAxisType'] = 'disabled';
  axisOptions['position'] = isVert ? 'left' : 'bottom';
  axisOptions['min'] = options['min'];
  axisOptions['max'] = options['max'];
  axisOptions['dataMin'] = options['min'];
  axisOptions['dataMax'] = options['max'];
  axisOptions['tickLabel'] = {
    'rendered' : 'off'
  };
  var axisInfo = DvtAxisInfo.newInstance(gauge.getCtx(), axisOptions, bounds);

  // Store the axisInfo on the gauge for editing support
  gauge.__axisInfo = axisInfo;

  // First calculate the baseline coordinate.
  var baseline = 0;
  if (options['max'] <= 0)
    baseline = options['max'];
  else if (options['min'] >= 0)
    baseline = options['min'];

  var baselineCoord = axisInfo.getCoordAt(baseline);
  // For statusmeters with plot area on, always draw from min value
  if (options['plotArea']['rendered'] != 'off' && !((options['plotArea']['rendered'] == 'auto') && (options['thresholdDisplay'] == 'onIndicator')))
    baselineCoord = axisInfo.getUnboundedCoordAt(options['min']);

  // Calculate the endCoord.  Adjust to keep within the axis.
  var endCoord = axisInfo.getUnboundedCoordAt(options['value']);
  endCoord = isVert ? Math.max(bounds.y, Math.min(bounds.y + bounds.h, endCoord)) : Math.max(bounds.x, Math.min(bounds.x + bounds.w, endCoord));

  var indicatorSize = options['indicatorSize'];
  var indicatorX1, indicatorX2, indicatorY1, indicatorY2, plotX1, plotX2, plotY1, plotY2 = 0;

  // The variables drawnPlotSize and drawnIndicatorSize are used to specifiy the fraction
  // of the possible width that will be used for plotArea and the indicator
  var drawnPlotSize = indicatorSize < 1 ? 1 : indicatorSize;
  var drawnIndicatorSize = indicatorSize > 1 ? 1 : indicatorSize;
  if (isVert) {
    indicatorX1 = bounds.x + (1 - drawnIndicatorSize) / 2 * bounds.w + .5;
    indicatorX2 = bounds.x + bounds.w * (1 + drawnIndicatorSize) / 2 - .5;
    indicatorY2 = baselineCoord - .5;
    indicatorY1 = endCoord + .5;
    plotX1 = bounds.x + (1 - 1 / drawnPlotSize) / 2 * bounds.w;
    plotX2 = bounds.x + bounds.w * (1 + 1 / drawnPlotSize) / 2;
    plotY1 = bounds.y;
    plotY2 = bounds.y + bounds.h;
  }
  else {
    indicatorX1 = isRTL ? baselineCoord - .5 : baselineCoord + .5;
    indicatorX2 = isRTL ? endCoord + .5 : endCoord - .5;
    indicatorY1 = bounds.y + (1 - drawnIndicatorSize) / 2 * bounds.h + .5;
    indicatorY2 = bounds.y + bounds.h * (1 + drawnIndicatorSize) / 2 - .5;
    plotX1 = bounds.x;
    plotX2 = bounds.x + bounds.w;
    plotY1 = bounds.y + (1 - 1 / drawnPlotSize) / 2 * bounds.h;
    plotY2 = bounds.y + bounds.h * (1 + 1 / drawnPlotSize) / 2;
  }

  var bRender = true;
  if (endCoord == baselineCoord) {
    if (isVert)
      indicatorY1 = indicatorY2;
    else
      indicatorX1 = indicatorX2;
    bRender = false;// don't draw an empty bar
  }

  // Create plotArea
  var borderColor = DvtGaugeStyleUtils.getBorderColor(gauge);
  var plotAreaBorderColor = options['plotArea']['borderColor'];
  var thresholds = options['thresholds'];
  var gradientAngle = isVert ? 0 : 270;

  // Case for plot area with all thresholds displayed
  if (thresholds && options['plotArea']['rendered'] != 'off' && options['thresholdDisplay'] == 'all') {
    for (var i = thresholds.length - 1; i >= 0; i--) {
      var currentThresholdIndex = i;
      var plotArea = DvtStatusMeterGaugeRenderer._createShape(gauge, gauge.getCtx(), plotX1, plotX2, plotY1, plotY2);

      var cp = new DvtClipPath('pacp' + gauge.getId());

      // For each threshold clip everything above the particular threshold maximum from the plot area shape
      if (i == thresholds.length - 1) {
        if (!isVert && isRTL)
          cp.addRect(axisInfo.getUnboundedCoordAt(options['max']), 0, bounds.w + 2, bounds.h + 2, 0, 0);
        else
          cp.addRect(0, 0, bounds.w + 2, bounds.h + 2, 0, 0);
      }
      else {
        if (isVert) {
          cp.addRect(0, axisInfo.getUnboundedCoordAt(options['max']), bounds.w + 2, (options['max'] - thresholds[thresholds.length - 2 - currentThresholdIndex]['max']) * 1 / (Math.abs(options['min'] - options['max'])) * bounds.h, 0, 0);
        }
        else {
          if (isRTL) {
            var thresholdMax = thresholds[thresholds.length - 2 - currentThresholdIndex]['max'] == null ? 100 : thresholds[thresholds.length - 2 - currentThresholdIndex]['max'];
            cp.addRect(0, 0, (options['max'] - thresholdMax) * 1 / (Math.abs(options['min'] - options['max'])) * bounds.w, bounds.h + 2, 0, 0);
          }
          else
            cp.addRect(0, 0, (thresholds[currentThresholdIndex]['max'] - options['min']) * 1 / (Math.abs(options['min'] - options['max'])) * bounds.w, bounds.h + 2, 0, 0);
        }
      }
      plotArea.setClipPath(cp);

      // Color threshold with defined color, or use the color ramp if possible
      if (isRTL || isVert)
        currentThresholdIndex = thresholds.length - 1 - i;

      plotArea.setSolidFill(DvtGaugeStyleUtils.getThresholdColor(gauge, thresholds[currentThresholdIndex], currentThresholdIndex));
      plotArea.setSolidStroke(plotAreaBorderColor);
      DvtStatusMeterGaugeRenderer._renderPlotAreaVisualEffects(gauge, container, plotArea, DvtGaugeStyleUtils.getThresholdColor(gauge, thresholds[currentThresholdIndex], currentThresholdIndex), gradientAngle);
    }
  }
  else if (!(options['plotArea']['rendered'] == 'off') && !((options['plotArea']['rendered'] == 'auto') && (options['thresholdDisplay'] == 'onIndicator')) && options['thresholdDisplay'] != 'all') {
    var plotArea = isVert ? DvtStatusMeterGaugeRenderer._createShape(gauge, gauge.getCtx(), plotX1, plotX2, axisInfo.getUnboundedCoordAt(options['max']), axisInfo.getUnboundedCoordAt(options['min'])) :
        DvtStatusMeterGaugeRenderer._createShape(gauge, gauge.getCtx(), axisInfo.getUnboundedCoordAt(options['min']), axisInfo.getUnboundedCoordAt(options['max']), plotY1, plotY2);
    var plotAreaColor = DvtGaugeStyleUtils.getPlotAreaColor(gauge);
    plotArea.setSolidFill(plotAreaColor);
    plotArea.setSolidStroke(plotAreaBorderColor);
    DvtStatusMeterGaugeRenderer._renderPlotAreaVisualEffects(gauge, container, plotArea, plotAreaColor, gradientAngle);
  }

  // Create the indicator.
  var shape = new DvtStatusMeterGaugeIndicator(gauge, gauge.getCtx(), indicatorX1, indicatorX2, indicatorY1, indicatorY2);
  gauge.__shapes.push(shape);

  // Apply style properties
  var color = DvtGaugeStyleUtils.getColor(gauge);
  if (!DvtGaugeDefaults.isSkyrosSkin(gauge) && options['visualEffects'] != 'none') {
    var arColors = [DvtColorUtils.adjustHSL(color, 0, - .09, .04), DvtColorUtils.adjustHSL(color, 0, - .04, - .05)];
    var arAlphas = [1, 1];
    var arStops = [0, 1];
    var gradient = new DvtLinearGradientFill(gradientAngle, arColors, arAlphas, arStops);
    shape.setFill(gradient);
  }
  else
    shape.setSolidFill(color);

  if (borderColor)
    shape.setSolidStroke(borderColor);

  // Add the shape
  if (bRender)
    container.addChild(shape);

  // Render the visual effects
  var overlay = DvtStatusMeterGaugeRenderer._createShape(gauge, gauge.getCtx(), indicatorX1, indicatorX2, indicatorY1, indicatorY2);
  DvtStatusMeterGaugeRenderer._renderVisualEffects(gauge, container, overlay, bRender, gradientAngle);

  // Render reference objects
  var xCoord, yCoord;
  var referenceLine, referenceLineSize;
  var referenceObjects = options['referenceLines'];
  if (referenceObjects) {
    for (var i = 0; i < referenceObjects.length; i++) {
      var refColor = referenceObjects[i]['color'] ? referenceObjects[i]['color'] : 'white';
      var value = referenceObjects[i]['value'];
      var indicatorSize = options['indicatorSize'];
      if (isVert) {
        referenceLineSize = ((1 - indicatorSize) / 2 + indicatorSize) * bounds.w;
        xCoord = bounds.x + ((1 - indicatorSize) / 4) * bounds.w;
        yCoord = axisInfo.getUnboundedCoordAt(value);
        referenceLine = new DvtLine(gauge.getCtx(), xCoord, yCoord, xCoord + referenceLineSize, yCoord);
      }
      else {
        referenceLineSize = ((1 - indicatorSize) / 2 + indicatorSize) * bounds.h;
        xCoord = axisInfo.getUnboundedCoordAt(value);
        yCoord = bounds.y + ((1 - indicatorSize) / 4) * bounds.h;
        referenceLine = new DvtLine(gauge.getCtx(), xCoord, yCoord, xCoord, yCoord + referenceLineSize);
      }
      var lineWidth = referenceObjects[i]['lineWidth'] ? referenceObjects[i]['lineWidth'] : 2;
      var stroke = new DvtSolidStroke(refColor, 1, lineWidth);
      if (referenceObjects[i]['lineStyle'])
        stroke.setStyle(DvtStroke.convertTypeString(referenceObjects[i]['lineStyle']));
      referenceLine.setStroke(stroke);
      container.addChild(referenceLine);

      // Shadowing effect
      // Fix for : Shadow causes the reference line to disappear in IE11
      if (!DvtAgent.isPlatformIE() && options['visualEffects'] != 'none') {
        var shadowRGBA = DvtColorUtils.makeRGBA(0, 0, 0, 0.8);
        var shadow = new DvtShadow(shadowRGBA, 0.75, 3, 3, 50, 1, 2, false, false, false);
        referenceLine.addDrawEffect(shadow);
      }
    }
  }

  // Render the metric label within the plot area bounds
  var labelPosition = options['metricLabel']['position'];
  if (options['metricLabel']['rendered'] == 'on' && !DvtStatusMeterGaugeRenderer._hasMetricLabelOutsidePlotArea(options) && !DvtGaugeStyleUtils.hasTitle(options)) {
    var indicatorPoints = {x1: indicatorX1, x2: indicatorX2, y1: indicatorY1, y2: indicatorY2};
    var plotAreaPoints = {x1: plotX1, x2: plotX2, y1: plotY1, y2: plotY2};
    DvtStatusMeterGaugeRenderer._renderLabelInsidePlotArea(gauge, container, bounds, color, labelPosition, indicatorPoints, plotAreaPoints);
  }

  // Render the title
  else if (DvtGaugeStyleUtils.hasTitle(options)) {
    DvtStatusMeterGaugeRenderer._renderTitle(gauge, container, bounds, labelPosition);
  }
};


/**
 * Creates and returns the shape for the statusmeter.
 * @param {DvtStatusMeterGauge} gauge The gauge being rendered.
 * @param {DvtContext} context
 * @param {number} x1
 * @param {number} x2
 * @param {number} y1
 * @param {number} y2
 * @return {DvtPath}
 * @private
 */
DvtStatusMeterGaugeRenderer._createShape = function(gauge, context, x1, x2, y1, y2) {
  var x = Math.min(x1, x2);
  var y = Math.min(y1, y2);
  var width = Math.abs(x1 - x2);
  var height = Math.abs(y2 - y1);
  var options = gauge.getOptions();
  var multiplier = options['orientation'] == 'vertical' ? width : height;
  var defaultValue = DvtGaugeDefaults.isSkyrosSkin(gauge) ? '25%' : '15%';
  var borderRadiusInput = options['plotArea']['borderRadius'] != 'auto' ? options['plotArea']['borderRadius'] : options['borderRadius'];
  var cmds = DvtStatusMeterGaugeRenderer.rectangleWithBorderRadius(x, y, width, height, borderRadiusInput, multiplier, defaultValue);
  return new DvtPath(context, cmds);
};


/**
 * Renders the visual effects for the shape into the specified area.
 * @param {DvtStatusMeterGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {DvtShape} shape The shape to use for the visual effects.
 * @param {boolean} bRender True if the shape should be rendered at this time.
 * @param {number} gradientAngle
 * @private
 */
DvtStatusMeterGaugeRenderer._renderVisualEffects = function(gauge, container, shape, bRender, gradientAngle) {
  var options = gauge.getOptions();

  if (options['visualEffects'] == 'none')
    return;

  // Gradient
  if (DvtGaugeDefaults.isSkyrosSkin(gauge)) {
    var arColors = ['#FFFFFF', '#FFFFFF', '#FFFFFF'];
    var arAlphas = [0.5, 0.3125, 0];
    var arStops = [0, 0.3, 1.0];
    var gradient = new DvtLinearGradientFill(gradientAngle, arColors, arAlphas, arStops);
    shape.setFill(gradient);
    gauge.__shapes.push(shape);

    // Overlay Shape
    shape.setMouseEnabled(false);
    if (bRender)
      container.addChild(shape);
  }
};


/**
 * Renders the visual effects for the plot area.
 * @param {DvtStatusMeterGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {DvtShape} shape The plot area.
 * @param {string} color
 * @param {number} gradientAngle
 * @private
 */
DvtStatusMeterGaugeRenderer._renderPlotAreaVisualEffects = function(gauge, container, shape, color, gradientAngle) {
  var options = gauge.getOptions();
  shape.setMouseEnabled(false);
  container.addChild(shape);

  if (options['visualEffects'] == 'none')
    return;

  var arColors, gradient;

  // Gradient
  if (DvtGaugeDefaults.isSkyrosSkin(gauge)) {
    arColors = [DvtColorUtils.getDarker(color, .9), color, DvtColorUtils.getBrighter(color, .7)];
    gradient = new DvtLinearGradientFill(gradientAngle, arColors, [1, 1, 1], [0, 0.04, 0.73]);
  }
  else {
    arColors = [DvtColorUtils.adjustHSL(color, 0, - .04, - .05), DvtColorUtils.adjustHSL(color, 0, - .09, .04)];
    gradient = new DvtLinearGradientFill(gradientAngle, arColors, [1, 1], [0, 1]);
  }
  shape.setFill(gradient);
};


/**
 * Renders the label into the specified area for vertical/horizontal status meter gauges with the label outside the plotarea.
 * Updates the bounds after rendering to reserve space for the labels.
 * @param {DvtStatusMeterGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {DvtRectangle} bounds The available bounds for rendering.
 * @private
 */
DvtStatusMeterGaugeRenderer._renderLabelOutsidePlotArea = function(gauge, container, bounds) {
  var options = gauge.getOptions();
  var isRTL = DvtAgent.isRightToLeft(gauge.getCtx());
  var isVert = options['orientation'] == 'vertical';
  var label = new DvtOutputText(gauge.getCtx(), '');
  var labelString = DvtGaugeRenderer.getFormattedMetricLabel(options['value'], gauge);
  var labelGap = options['__layout']['labelGap'];
  var labelStyle = options['metricLabel']['style'];

  // Backward compatibility
  var labelColor = labelStyle.getStyle('color');
  labelColor = labelColor ? labelColor : '#333333';

  var maxLabelDims = null;
  label.setCSSStyle(labelStyle);
  label.setSolidFill(labelColor);

  if (isVert && options['metricLabel']['rendered'] == 'on') {
    var bound = options['max'] > 0 ? options['max'] : options['min'];
    var maxValue = DvtGaugeRenderer.getFormattedMetricLabel(bound, gauge);
    var maxLabel = new DvtOutputText(gauge.getCtx(), maxValue);
    maxLabel.setCSSStyle(labelStyle);
    var computedLabelBounds = new DvtRectangle(bounds.x, bounds.y + .8 * bounds.h, bounds.w, .2 * (bounds.h));
    var size = labelStyle.getStyle('font-size');
    size = size ? parseInt(size) : maxLabel.getOptimalFontSize(computedLabelBounds);
    maxLabelDims = maxLabel.measureDimensions();
    bounds.h -= maxLabelDims.h;
    alignCoord = bounds.y - maxLabelDims.h;
    var labelSpace = maxLabelDims.w;
    label.setFontSize(size);
    label.setTextString(labelString);
    label.setX(bounds.x + bounds.w / 2);
    label.setY(bounds.y + bounds.h);
    bounds.h -= labelGap;
    label.alignCenter();
    DvtTextUtils.fitText(label, bounds.w, bounds.h, container);
  }
  // Allocate space for the horizontal label
  else if (!isVert && options['metricLabel']['rendered'] == 'on') {
    // Check if the metric label's height will fit
    var size = labelStyle.getStyle('font-size');
    var minLabel = DvtGaugeRenderer.getFormattedMetricLabel(options['min'], gauge);
    var maxLabel = DvtGaugeRenderer.getFormattedMetricLabel(options['max'], gauge);
    if (size === undefined && bounds.h < 18) {
      size = DvtGaugeRenderer.calcLabelFontSize([labelString, minLabel, maxLabel], label, bounds);
    }
    size = size ? parseInt(size) : 13;
    label.setFontSize(size);

    var alignCoord;// The horizontal alignment point for the label
    // Allocate space to the right for positive values and any values with plotArea
    if (options['max'] > 0 || options['plotArea']['rendered'] != 'off' || !((options['plotArea']['rendered'] == 'auto') && (options['thresholdDisplay'] == 'onIndicator'))) {
      var bound = options['max'] > 0 ? options['max'] : options['min'];
      var maxValue = DvtGaugeRenderer.getFormattedMetricLabel(bound, gauge);
      var maxLabel = new DvtOutputText(gauge.getCtx(), maxValue);
      maxLabel.setCSSStyle(labelStyle);
      maxLabel.setFontSize(size);
      maxLabelDims = maxLabel.measureDimensions();
      maxLabelDims.w = Math.min(maxLabelDims.w, bounds.w);
      // Align the label
      alignCoord = isRTL ? bounds.x + maxLabelDims.w : bounds.x + bounds.w;
      labelSpace = maxLabelDims.w;

      if (isRTL) {
        // Allocate to the left
        bounds.x += (maxLabelDims.w + labelGap);
        bounds.w -= (maxLabelDims.w + labelGap);
      }
      else {// Allocate to the right
        bounds.w -= (maxLabelDims.w + labelGap);
      }
    }

    // Allocate space to the left for negative values
    if (options['min'] < 0 && options['plotArea']['rendered'] != 'on' && !(options['plotArea']['rendered'] == 'auto' && (options['thresholdDisplay'] == 'onIndicator'))) {
      var minValue = DvtGaugeRenderer.getFormattedMetricLabel(options['min'], gauge);
      var minLabel = new DvtOutputText(gauge.getCtx(), minValue);
      minLabel.setCSSStyle(labelStyle);
      minLabel.setFontSize(size);
      var minLabelDims = minLabel.measureDimensions();

      // Align the label
      if (options['value'] < 0 || options['max'] <= 0) {
        alignCoord = isRTL ? bounds.x + bounds.w : bounds.x + minLabelDims.w;
        labelSpace = minLabelDims.w;
      }

      // Update the allocated space
      if (isRTL) // Allocate to the right
        bounds.w -= (minLabelDims.w + labelGap);
      else {
        // Allocate to the left
        bounds.x += (minLabelDims.w + labelGap);
        bounds.w -= (minLabelDims.w + labelGap);
      }
    }
    // Create and position the text
    label.setTextString(labelString);
    label.setX(alignCoord);
    DvtTextUtils.centerTextVertically(label, bounds.y + bounds.h / 2);
    label.alignRight();

    // Truncate to fit
    DvtTextUtils.fitText(label, labelSpace, bounds.h, container);
  }
};

/**
 * Renders the label into the specified area for vertical/horizontal status meter gauges with the label inside the plotarea.
 * @param {DvtStatusMeterGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {DvtRectangle} bounds The available bounds for rendering.
 * @param {string} color The color of the background
 * @param {string} labelPosition The position of the label
 * @param {object} indicator An object containing the indicator x1, y1, x2, y2.
 * @param {object} plotArea An object containing the plotArea x1, y1, x2, y2.
 * @param {boolean} repeatedTry Specifies if this is the second try to fit the label into available space
 * @private
 */
DvtStatusMeterGaugeRenderer._renderLabelInsidePlotArea = function(gauge, container, bounds, color, labelPosition, indicator, plotArea, repeatedTry) {
  var options = gauge.getOptions();
  var isRTL = DvtAgent.isRightToLeft(gauge.getCtx());
  var isVert = options['orientation'] == 'vertical';
  var plotAreaRendered = options['plotArea']['rendered'] == 'on';
  var hAlignment = 'center';
  var vAlignment = 'middle';

  var labelSpace = new DvtRectangle(Math.min(indicator.x1, indicator.x2), Math.min(indicator.y1, indicator.y2),
      Math.abs(indicator.x2 - indicator.x1), Math.abs(indicator.y2 - indicator.y1));
  var labelColor = options['metricLabel']['style'].getStyle('color');
  if (labelPosition == 'center') {
    labelColor = labelColor ? labelColor : DvtColorUtils.getContrastingTextColor(color);
    if (isVert) {
      labelSpace.h -= labelSpace.w;
      labelSpace.y += (labelSpace.w / 2);
    }
    else {
      labelSpace.w -= labelSpace.h;
      labelSpace.x += (labelSpace.h / 2);
    }
  }
  else if (labelPosition == 'insideIndicatorEdge') {
    labelColor = labelColor ? labelColor : DvtColorUtils.getContrastingTextColor(color);
    if (isVert) {
      labelSpace.h -= labelSpace.w;
      labelSpace.y += (labelSpace.w / 2);
      if (!plotAreaRendered && indicator.y1 > indicator.y2) {
        vAlignment = 'bottom';
      }
      else {
        vAlignment = 'top';
      }
    }
    else {
      labelSpace.w -= labelSpace.h;
      labelSpace.x += (labelSpace.h / 2);
      if (isRTL) {
        if (!plotAreaRendered && indicator.x1 < indicator.x2) {
          hAlignment = 'right';
        }
        else {
          hAlignment = 'left';
        }
      }
      else {
        if (!plotAreaRendered && indicator.x1 > indicator.x2) {
          hAlignment = 'left';
        }
        else {
          hAlignment = 'right';
        }
      }
    }
  }
  else if (labelPosition == 'outsideIndicatorEdge') {
    if (isVert) {
      labelSpace.h = Math.abs(plotArea.y1 - indicator.y1) - labelSpace.w;
      labelSpace.y = plotArea.y1 + (labelSpace.w / 2);
      vAlignment = 'bottom';
      if (!plotAreaRendered && indicator.y1 > indicator.y2) {
        labelSpace.h = Math.abs(plotArea.y1 - indicator.y1) - labelSpace.w;
        labelSpace.y = indicator.y1 + (labelSpace.w / 2);
        vAlignment = 'top';
      }
    }
    else {
      if (isRTL) {
        if (!plotAreaRendered && indicator.x1 < indicator.x2) {
          labelSpace.w = Math.abs(plotArea.x2 - indicator.x2) - labelSpace.h;
          labelSpace.x = indicator.x2 + (labelSpace.h / 2);
          hAlignment = 'left';

        }
        else {
          labelSpace.w = Math.abs(plotArea.x1 - indicator.x2) - labelSpace.h;
          labelSpace.x = plotArea.x1 + (labelSpace.h / 2);
          hAlignment = 'right';
        }
      }
      else {
        if (!plotAreaRendered && indicator.x1 > indicator.x2) {
          labelSpace.w = Math.abs(plotArea.x1 - indicator.x2) - labelSpace.h;
          labelSpace.x = plotArea.x1 + (labelSpace.h / 2);
          hAlignment = 'right';
        }
        else {
          labelSpace.w = Math.abs(plotArea.x2 - indicator.x2) - labelSpace.h;
          labelSpace.x = indicator.x2 + (labelSpace.h / 2);
          hAlignment = 'left';
        }
      }
    }
  }
  var labelRendered = DvtGaugeRenderer.renderLabel(gauge, container, labelSpace, labelColor, hAlignment, vAlignment);
  // If the label didn't fit, try to fit it into another section
  if (!labelRendered && !repeatedTry) {
    if (labelPosition == 'outsideIndicatorEdge') {
      DvtStatusMeterGaugeRenderer._renderLabelInsidePlotArea(gauge, container, bounds, color, 'insideIndicatorEdge', indicator, plotArea, true);
    }
    else if (labelPosition == 'insideIndicatorEdge' || labelPosition == 'center') {
      DvtStatusMeterGaugeRenderer._renderLabelInsidePlotArea(gauge, container, bounds, color, 'outsideIndicatorEdge', indicator, plotArea, true);
    }
  }
};

/**
 * Renders the title for vertical/horizontal status meter gauges.
 * @param {DvtStatusMeterGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {DvtRectangle} bounds The available bounds for rendering.
 * @param {string} labelPosition The position of the label
 * @private
 */
DvtStatusMeterGaugeRenderer._renderTitle = function(gauge, container, bounds, labelPosition) {
  var isRTL = DvtAgent.isRightToLeft(gauge.getCtx());
  var options = gauge.getOptions();
  var isVert = options['orientation'] == 'vertical';
  var titleSpace = new DvtRectangle(bounds.x, bounds.y, isVert ? bounds.w : bounds.w - bounds.h, isVert ? bounds.h - bounds.w : bounds.h);
  var titleString = options['title']['text'];
  if (!DvtStatusMeterGaugeRenderer._hasMetricLabelOutsidePlotArea(options) && options['metricLabel']['rendered'] == 'on') {
    var labelString = DvtGaugeRenderer.getFormattedMetricLabel(options['value'], gauge);
    titleString = DvtBundle.getTranslatedString(DvtBundle.UTIL_PREFIX, 'COLON_SEP_LIST', [titleString, labelString]);
  }
  var titleStyle = options['title']['style'];
  var fontStyle = titleStyle.clone();
  var size = titleStyle.getStyle('font-size');
  if (!size) {
    // Calculate font size
    var tempTitle = new DvtOutputText(gauge.getCtx(), titleString, 0, 0);
    tempTitle.setCSSStyle(titleStyle);
    tempTitle.setTextString(titleString);
    // Make size calculations based on the available height not width to have consistent size on same sized gauges
    // for horizontal gauges. For vertical gauges make calculations based on width
    if (isVert)
      size = tempTitle.getOptimalFontSize(new DvtRectangle(titleSpace.x, titleSpace.y, titleSpace.w, Number.MAX_VALUE));
    else
      size = tempTitle.getOptimalFontSize(new DvtRectangle(titleSpace.x, titleSpace.y, Number.MAX_VALUE, titleSpace.h));
  }
  var title = new DvtMultilineText(gauge.getCtx(), titleString);
  fontStyle.setFontSize('font-size', size.toString());
  title.setCSSStyle(fontStyle);
  DvtTextUtils.fitText(title, titleSpace.w, titleSpace.h, gauge);
  if (options['title']['position'] == 'center' || (options['title']['position'] == 'auto' && isVert)) {
    DvtTextUtils.centerTextVertically(title, bounds.y + bounds.h / 2);
    title.setX(bounds.x + bounds.w / 2);
    title.alignCenter();
  }
  else {
    DvtTextUtils.centerTextVertically(title, bounds.y + bounds.h / 2);
    if (!isVert && isRTL) {
      title.setX(bounds.x + bounds.w - titleSpace.h / 2);
      title.alignRight();
    }
    else if (!isVert && !isRTL)
    {
      title.setX(bounds.x + titleSpace.h / 2);
      title.alignLeft();
    }
    else if (isVert) {
      title.setY(bounds.y + bounds.h - title.getDimensions().h - titleSpace.w / 2);
      title.setX(bounds.x + bounds.w / 2);
      title.alignCenter();
    }
  }
  container.addChild(title);
};
/**
 * Returns the location of the point on the arc with the specified radius
 * at the specified angle.
 * @param {DvtRectangle} bounds
 * @param {number} radius
 * @param {number} angle
 * @return {object} An object with x and y properties.
 * @private
 */
DvtStatusMeterGaugeRenderer._calcPointOnArc = function(bounds, radius, angle) {
  var x = Math.cos(angle) * radius + bounds.w / 2 + bounds.x;
  var y = Math.sin(angle) * radius + bounds.h / 2 + bounds.y;
  return {x: x, y: y};
};


/**
 * Draw specified segment for circular status meter
 * @param {DvtStatusMeterGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {DvtRectangle} bounds The available bounds for rendering.
 * @param {Number} startAngle Start angle.
 * @param {Number} angleExtent Angle from start to end.
 * @param {Number} innerRadius Radius to inner border of arc.
 * @param {Number} outerRadius Radius to outer border of arc..
 * @param {color} color Color of the arc.
 * @param {Boolean} isPlotArea True if arc being drawn is the plot area.
 * @private
 */
DvtStatusMeterGaugeRenderer._drawCircularArc = function(gauge, container, bounds, startAngle, angleExtent, innerRadius, outerRadius, color, isPlotArea) {
  var context = gauge.getCtx();
  var isRTL = DvtAgent.isRightToLeft(gauge.getCtx());
  if (isRTL) {
    startAngle = Math.PI - startAngle - angleExtent;
    startAngle = startAngle > 0 ? startAngle : startAngle + 2 * Math.PI;
  }

  var shape;
  if (isPlotArea) {
    shape = new DvtPath(context, DvtStatusMeterGaugeRenderer.createCircularPathCmd(bounds, startAngle, angleExtent, innerRadius, outerRadius));
  }
  else {
    shape = new DvtStatusMeterGaugeCircularIndicator(context, bounds, startAngle, angleExtent, innerRadius, outerRadius);
    gauge.__shapes.push(shape);
  }
  shape.setSolidFill(color);
  var borderColor = DvtGaugeStyleUtils.getBorderColor(gauge);
  if (borderColor && !isPlotArea) {
    shape.setSolidStroke(borderColor);
  }
  container.addChild(shape);
};


/**
 * Draw reference line
 * @param {DvtStatusMeterGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {DvtRectangle} bounds The available bounds for rendering.
 * @param {Number} angle Angle at which line is drawn.
 * @param {string} color Color of the arc.
 * @param {number} lineWidth
 * @param {string} lineStyle
 * @private
 */
DvtStatusMeterGaugeRenderer._drawCircularReferenceLine = function(gauge, container, bounds, angle, color, lineWidth, lineStyle) {
  var context = gauge.getCtx();
  var maxDiameter = Math.min(bounds.w, bounds.h);
  var innerRadius = maxDiameter * .275;
  var outerRadius = maxDiameter * .5;
  if (DvtAgent.isRightToLeft(gauge.getCtx())) {
    angle = Math.PI - angle;
    angle = angle > 0 ? angle : angle + 2 * Math.PI;
  }
  var p1 = DvtStatusMeterGaugeRenderer._calcPointOnArc(bounds, innerRadius, angle);
  var p2 = DvtStatusMeterGaugeRenderer._calcPointOnArc(bounds, outerRadius, angle);
  var shape = new DvtLine(context, p1.x, p1.y, p2.x, p2.y);

  var stroke = new DvtSolidStroke(color, 1, lineWidth);
  if (lineStyle) {
    stroke.setStyle(DvtStroke.convertTypeString(lineStyle));
  }
  shape.setStroke(stroke);
  container.addChild(shape);
};

/**
 * Calculates and returns the path command for the circular shape.
 * @param {DvtRectangle} bounds The available bounds for rendering.
 * @param {Number} startAngle
 * @param {Number} angleExtent
 * @param {Number} innerRadius
 * @param {Number} outerRadius
 * @return {string} The path command for the shape.
 */
DvtStatusMeterGaugeRenderer.createCircularPathCmd = function(bounds, startAngle, angleExtent, innerRadius, outerRadius) {
  var cmd;
  var p1, p2, p3, p4;

  if (angleExtent < DvtMath.TWO_PI)
  {
    // Calc the 4 points.  We will draw:
    // 1. Arc from p1 to p2
    // 2. Line/Move from p2 to p3
    // 3. Arc from p3 to p4
    // 4. Line from p4 to p1
    p1 = DvtStatusMeterGaugeRenderer._calcPointOnArc(bounds, outerRadius, startAngle);
    p2 = DvtStatusMeterGaugeRenderer._calcPointOnArc(bounds, outerRadius, startAngle + angleExtent);
    p3 = DvtStatusMeterGaugeRenderer._calcPointOnArc(bounds, innerRadius, startAngle + angleExtent);
    p4 = DvtStatusMeterGaugeRenderer._calcPointOnArc(bounds, innerRadius, startAngle);

    // Create the command and feed it into the path
    cmd = DvtPathUtils.moveTo(p1.x, p1.y) +
          DvtPathUtils.arcTo(outerRadius, outerRadius, angleExtent, 1, p2.x, p2.y) +
          DvtPathUtils.lineTo(p3.x, p3.y) +
          DvtPathUtils.arcTo(innerRadius, innerRadius, angleExtent, 0, p4.x, p4.y) +
          DvtPathUtils.closePath();
  }
  else
  {
    // To work around a chrome/safari bug, we draw two segments around each of the outer and inner arcs
    p1 = DvtStatusMeterGaugeRenderer._calcPointOnArc(bounds, outerRadius, startAngle);
    p2 = DvtStatusMeterGaugeRenderer._calcPointOnArc(bounds, outerRadius, startAngle + angleExtent / 2);
    p3 = DvtStatusMeterGaugeRenderer._calcPointOnArc(bounds, innerRadius, startAngle);
    p4 = DvtStatusMeterGaugeRenderer._calcPointOnArc(bounds, innerRadius, startAngle + angleExtent / 2);

    // Create the command and return it
    cmd = DvtPathUtils.moveTo(p1.x, p1.y) +
          DvtPathUtils.arcTo(outerRadius, outerRadius, angleExtent / 2, 1, p2.x, p2.y) +
          DvtPathUtils.arcTo(outerRadius, outerRadius, angleExtent / 2, 1, p1.x, p1.y);

    // Add the inner segment for a hollow center
    if (innerRadius > 0)
      cmd += DvtPathUtils.moveTo(p4.x, p4.y) +
             DvtPathUtils.arcTo(innerRadius, innerRadius, angleExtent / 2, 0, p3.x, p3.y) +
             DvtPathUtils.arcTo(innerRadius, innerRadius, angleExtent / 2, 0, p4.x, p4.y);

    cmd += DvtPathUtils.closePath();
  }
  return cmd;
};

/**
 * Calculates which Quadrant the angle specified belongs to.
 * @param {Number} angle
 * @param {Boolean} bStart Indicates if the angle is a start angle.
 * @return {Number} The quadrant.
 */
DvtStatusMeterGaugeRenderer.getAngleQuadrant = function(angle, bStart) {
  var quadrant = 1;
  if (bStart) {
    if (angle >= DvtMath.HALF_PI && angle < Math.PI)
      quadrant = 2;
    else if (angle >= Math.PI && angle < Math.PI * 1.5)
      quadrant = 3;
    else if (angle >= Math.PI * 1.5 && angle < DvtMath.TWO_PI)
      quadrant = 4;
  }
  else {
    if (angle > DvtMath.HALF_PI && angle <= Math.PI)
      quadrant = 2;
    else if (angle > Math.PI && angle <= Math.PI * 1.5)
      quadrant = 3;
    else if (angle > Math.PI * 1.5 && angle < DvtMath.TWO_PI || angle == 0)
      quadrant = 4;
  }
  return quadrant;
};


/**
 * Determines if the metric label is rendered outside the plot area
 * @param {object} options The options object
 * @return {Boolean} Returns true if the plotArea is rendered outside the plot area
 * @private
 */
DvtStatusMeterGaugeRenderer._hasMetricLabelOutsidePlotArea = function(options) {
  var labelPosition = options['metricLabel']['position'];
  return labelPosition == 'auto' || labelPosition == 'outsidePlotArea' || (labelPosition == 'withTitle' && !DvtGaugeStyleUtils.hasTitle(options));
};

/**
 * Adjust the bounds of the rendered circular gauge shape when the angleExtent is less than 360. Returns the label bounds.
 * @param {DvtStatusMeterGauge} gauge The gauge being rendered.
 * @param {Number} innerRadius
 * @param {Number} startAngleRads
 * @param {Number} angleExtentRads
 * @param {Number} endAngle
 * @param {DvtRectangle} bounds The available bounds for rendering.
 * @param {Boolean} isRTL Indicates if the page is right to left.
 * @return {DvtRectangle} The bounds of the label.
 * @private
 */
DvtStatusMeterGaugeRenderer._adjustCenterAndBounds = function(gauge, innerRadius, startAngleRads, angleExtentRads, endAngle, bounds, isRTL) {
  var labelBounds = null;
  var startQuadrant = DvtStatusMeterGaugeRenderer.getAngleQuadrant(startAngleRads, true);
  var endQuadrant = DvtStatusMeterGaugeRenderer.getAngleQuadrant(endAngle, false);
  var width = bounds.w;
  var height = bounds.h;
  var cx = width / 2;
  var cy = height / 2;
  var maxDiameter, maxInnerDiameter;

  // Arc is within one quadrant
  if (startQuadrant == endQuadrant && angleExtentRads <= DvtMath.HALF_PI) {
    maxDiameter = Math.min(bounds.w, bounds.h) * 2;
    bounds.w = bounds.w + maxDiameter / 2;
    bounds.h = bounds.h + maxDiameter / 2;
    maxInnerDiameter = maxDiameter * innerRadius;

    // Start and end in first quadrant
    if ((!isRTL && startQuadrant == 1) || (isRTL && startQuadrant == 2)) {
      bounds.x -= maxDiameter / 2;
      bounds.y -= maxDiameter / 2;
      cx = width / 2 - maxDiameter / 4 + 1;
      cy = height / 2 - maxDiameter / 4 + 1;
      labelBounds = new DvtRectangle(bounds.x + bounds.w / 2 - 1, bounds.y + bounds.h / 2 - 1, maxInnerDiameter * (3 / 7) - 2, maxInnerDiameter * (2.5 / 7) - 2);
    }

  // Start and end in second quadrant
    else if ((!isRTL && startQuadrant == 2) || (isRTL && startQuadrant == 1)) {
      bounds.y -= maxDiameter / 2;
      cx = width / 2 + maxDiameter / 4 - 1;
      cy = height / 2 - maxDiameter / 4 + 1;
      labelBounds = new DvtRectangle(bounds.x + bounds.w / 2 - maxInnerDiameter * (3 / 7) + 1, bounds.y + bounds.h / 2 - 1, maxInnerDiameter * (3 / 7) - 2, maxInnerDiameter * (2.5 / 7) - 2);
    }

  // Start and end in third quadrant
    else if ((!isRTL && startQuadrant == 3) || (isRTL && startQuadrant == 4)) {
      cx = width / 2 + maxDiameter / 4 - 1;
      cy = height / 2 + maxDiameter / 4 - 1;
      labelBounds = new DvtRectangle(bounds.x + bounds.w / 2 - maxInnerDiameter * (3 / 7) + 1, bounds.y + bounds.h / 2 - maxInnerDiameter * (2.5 / 7) + 1, maxInnerDiameter * (3 / 7) - 2, maxInnerDiameter * (2.5 / 7) - 2);
    }

  // Start and end in fourth quadrant
    else if ((!isRTL && startQuadrant == 4) || (isRTL && startQuadrant == 3)) {
      bounds.x -= maxDiameter / 2;
      cx = width / 2 - maxDiameter / 4 + 1;
      cy = height / 2 + maxDiameter / 4 - 1;
      labelBounds = new DvtRectangle(bounds.x + bounds.w / 2 - 1, bounds.y + bounds.h / 2 - maxInnerDiameter * (2.5 / 7) + 1, maxInnerDiameter * (3 / 7) - 2, maxInnerDiameter * (2.5 / 7) - 2);
    }
  }

  // Arc spans 2 quadrants
  else if ((startQuadrant % 4 + 1) == endQuadrant && angleExtentRads <= Math.PI) {
    if (startQuadrant == 1 || startQuadrant == 3) {
      maxDiameter = Math.min(bounds.w, bounds.h * 2);
      maxInnerDiameter = maxDiameter * innerRadius;
      if (bounds.w > bounds.h) {
        labelBounds = new DvtRectangle(bounds.x + bounds.w / 2 - maxInnerDiameter * (3 / 7), bounds.y + bounds.h - (bounds.h - maxDiameter / 2) / 2 - maxInnerDiameter * (2.75 / 7), maxInnerDiameter * (6 / 7), maxInnerDiameter * (2.5 / 7));
        if (startQuadrant == 1) {
          labelBounds.y = bounds.y + (bounds.h - maxDiameter / 2) / 2 + maxInnerDiameter * (.5 / 7);
          bounds.y -= (maxDiameter / 2 - ((bounds.h - maxDiameter / 2) / 2));
          cy = height / 2 - maxDiameter / 4 + 1;
        }
        else {
          bounds.y += ((bounds.h - maxDiameter / 2) / 2);
          cy = height / 2 + maxDiameter / 4 - 1;
        }
        bounds.h = maxDiameter;
      }
    }
    else {
      maxDiameter = Math.min(bounds.w * 2, bounds.h);
      maxInnerDiameter = maxDiameter * innerRadius;
      if (bounds.w < bounds.h) {
        labelBounds = new DvtRectangle(bounds.x + bounds.w - (bounds.w - maxDiameter / 2) / 2 - maxInnerDiameter * (3.25 / 7), bounds.y + bounds.h / 2 - maxInnerDiameter * (2.5 / 7), maxInnerDiameter * (3 / 7), maxInnerDiameter * (5 / 7));
        if ((!isRTL && startQuadrant == 4) || (isRTL && startQuadrant == 2)) {
          labelBounds.x = bounds.x + (bounds.w - maxDiameter / 2) / 2 + maxInnerDiameter * (.25 / 7);
          bounds.x -= (maxDiameter / 2 - ((bounds.w - maxDiameter / 2) / 2));
          cx = width / 2 - maxDiameter / 4 + 1;
        }
        else {
          bounds.x += ((bounds.w - maxDiameter / 2) / 2);
          cx = width / 2 + maxDiameter / 4 - 1;
        }
        bounds.w = maxDiameter;
      }
    }
  }

  // Arc spans 3 quadrants
  else if ((endQuadrant % 4 + 1) == startQuadrant && angleExtentRads > Math.PI) {
    if (startQuadrant == 1 && bounds.h > bounds.w) {
      maxDiameter = Math.min(2 * ((bounds.w) / (Math.cos(startAngleRads) + 1)), 2 * ((bounds.w) / (Math.sin(endAngle - Math.PI * 1.5) + 1)), bounds.h);
      maxInnerDiameter = maxDiameter * innerRadius;
      var labelCenterOffset = maxInnerDiameter * (3 / 7) * ((2 * bounds.w) / maxDiameter - 1);
      if (!isRTL) {
        labelBounds = new DvtRectangle(bounds.x + maxDiameter / 2 - maxInnerDiameter * (3 / 7), bounds.y + bounds.h / 2 - maxInnerDiameter * (2.5 / 7), maxInnerDiameter * (3 / 7) * (1 + ((2 * bounds.w) / maxDiameter - 1)), maxInnerDiameter * (5 / 7));
        cx = maxDiameter / 2;
      }
      else {
        labelBounds = new DvtRectangle(bounds.x + bounds.w - maxDiameter / 2 - labelCenterOffset, bounds.y + bounds.h / 2 - maxInnerDiameter * (2.5 / 7), maxInnerDiameter * (3 / 7) + labelCenterOffset, maxInnerDiameter * (5 / 7));
        bounds.x -= (maxDiameter - bounds.w);
        cx = -maxDiameter / 2 + width;
      }
      bounds.w = maxDiameter;
    }
    else if (startQuadrant == 2 && bounds.h < bounds.w) {
      maxDiameter = Math.min(2 * ((bounds.h) / (Math.cos(startAngleRads - DvtMath.HALF_PI) + 1)), 2 * ((bounds.h) / (Math.sin(endAngle) + 1)), bounds.w);
      maxInnerDiameter = maxDiameter * innerRadius;
      labelBounds = new DvtRectangle(bounds.x + bounds.w / 2 - maxInnerDiameter * (3 / 7), bounds.y + maxDiameter / 2 - maxInnerDiameter * (2.5 / 7), maxInnerDiameter * (6 / 7), maxInnerDiameter * (2.5 / 7) * (1 + ((2 * bounds.h) / maxDiameter - 1)));
      bounds.h = maxDiameter;
      cy = maxDiameter / 2;
    }
    else if (startQuadrant == 3 && bounds.h > bounds.w) {
      maxDiameter = Math.min(2 * ((bounds.w) / (Math.cos(startAngleRads - Math.PI) + 1)), 2 * ((bounds.w) / (Math.sin(endAngle - DvtMath.HALF_PI) + 1)), bounds.h);
      maxInnerDiameter = maxDiameter * innerRadius;
      var labelCenterOffset = maxInnerDiameter * (3 / 7) * ((2 * bounds.w) / maxDiameter - 1);
      if (!isRTL) {
        labelBounds = new DvtRectangle(bounds.x + bounds.w - maxDiameter / 2 - labelCenterOffset, bounds.y + bounds.h / 2 - maxInnerDiameter * (2.5 / 7), maxInnerDiameter * (3 / 7) + labelCenterOffset, maxInnerDiameter * (5 / 7));
        bounds.x -= (maxDiameter - bounds.w);
        cx = -maxDiameter / 2 + width;
      }
      else {
        labelBounds = new DvtRectangle(bounds.x + maxDiameter / 2 - maxInnerDiameter * (3 / 7), bounds.y + bounds.h / 2 - maxInnerDiameter * (2.5 / 7), maxInnerDiameter * (3 / 7) * (1 + ((2 * bounds.w) / maxDiameter - 1)), maxInnerDiameter * (5 / 7));
        cx = maxDiameter / 2;
      }
      bounds.w = maxDiameter;
    }
    else if (startQuadrant == 4 && bounds.h < bounds.w) {
      maxDiameter = Math.min(2 * ((bounds.h) / (Math.cos(startAngleRads - Math.PI * 1.5) + 1)), 2 * ((bounds.h) / (Math.sin(DvtMath.TWO_PI - endAngle) + 1)), bounds.w);
      maxInnerDiameter = maxDiameter * innerRadius;
      var labelCenterOffset = maxInnerDiameter * (2.5 / 7) * ((2 * bounds.h) / maxDiameter - 1);
      labelBounds = new DvtRectangle(bounds.x + bounds.w / 2 - maxInnerDiameter * (3 / 7) , bounds.y + bounds.h - maxDiameter / 2 - labelCenterOffset, maxInnerDiameter * (6 / 7), maxInnerDiameter * (2.5 / 7) + labelCenterOffset);
      bounds.y -= (maxDiameter - bounds.h);
      bounds.h = maxDiameter;
      cy = - maxDiameter / 2 + height;
    }
  }
  gauge.cx = cx;
  gauge.cy = cy;
  return labelBounds;
};

/**
 * Parse corner radii and return the new shape
 * @param {number} x Rectangle x.
 * @param {number} y Rectangle y.
 * @param {number} w Rectangle width.
 * @param {number} h Rectangle height.
 * @param {String} radius The options attribute needed to be parsed
 * @param {number} multiplier The value used for when a percent radius is provided
 * @param {string} defaultValue A specified value for the border radius
 * @return {string} Path command of shape with border radius.
 */
DvtStatusMeterGaugeRenderer.rectangleWithBorderRadius = function(x, y, w, h, radius, multiplier, defaultValue) {
  var topLeftX = defaultValue;
  var topLeftY = defaultValue;
  var topRightX = defaultValue;
  var topRightY = defaultValue;
  var bottomRightX = defaultValue;
  var bottomRightY = defaultValue;
  var bottomLeftX = defaultValue;
  var bottomLeftY = defaultValue;
  if (radius) {
    if (radius.indexOf('/') != -1) {
      var splitHorizVert = radius.split('/');
      var horiz = splitHorizVert[0].trim().split(/\s+/);
      var vert = splitHorizVert[1].trim().split(/\s+/);
      if (horiz.length == 1)
        topLeftX = topRightX = bottomRightX = bottomLeftX = horiz[0];
      else if (horiz.length == 2) {
        topLeftX = bottomRightX = horiz[0];
        topRightX = bottomLeftX = horiz[1];
      }
      else if (horiz.length == 3) {
        topLeftX = horiz[0];
        topRightX = bottomLeftX = horiz[1];
        bottomRightX = horiz[2];
      }
      else if (horiz.length == 4) {
        topLeftX = horiz[0];
        topRightX = horiz[1];
        bottomRightX = horiz[2];
        bottomLeftX = horiz[3];
      }
      if (vert.length == 1)
        topLeftY = topRightY = bottomRightY = bottomLeftY = vert[0];
      else if (vert.length == 2) {
        topLeftY = bottomRightY = vert[0];
        topRightY = bottomLeftY = vert[1];
      }
      else if (vert.length == 3) {
        topLeftY = vert[0];
        topRightY = bottomLeftY = vert[1];
        bottomRightY = vert[2];
      }
      else if (vert.length == 4) {
        topLeftY = vert[0];
        topRightY = vert[1];
        bottomRightY = vert[2];
        bottomLeftY = vert[3];
      }
    }
    else if (radius != 'auto') {
      var split = radius.trim().split(/\s+/);
      if (split.length == 1) {
        topLeftX = topRightX = bottomRightX = bottomLeftX =
            topLeftY = topRightY = bottomRightY = bottomLeftY = split[0];
      }
      else if (split.length == 2) {
        topLeftX = bottomRightX = topLeftY = bottomRightY = split[0];
        topRightX = bottomLeftX = topRightY = bottomLeftY = split[1];
      }
      else if (split.length == 3) {
        topLeftX = topLeftY = split[0];
        topRightX = bottomLeftX = topRightY = bottomLeftY = split[1];
        bottomRightX = bottomRightY = split[2];
      }
      else if (split.length == 4) {
        topLeftX = topLeftY = split[0];
        topRightX = topRightY = split[1];
        bottomRightX = bottomRightY = split[2];
        bottomLeftX = bottomLeftY = split[3];
      }
    }
  }

  return DvtStatusMeterGaugeRenderer._roundedRectangle(x, y, w, h,
      DvtStatusMeterGaugeRenderer._parseBorderRadiusItem(topLeftX, multiplier),
      DvtStatusMeterGaugeRenderer._parseBorderRadiusItem(topLeftY, multiplier),
      DvtStatusMeterGaugeRenderer._parseBorderRadiusItem(topRightX, multiplier),
      DvtStatusMeterGaugeRenderer._parseBorderRadiusItem(topRightY, multiplier),
      DvtStatusMeterGaugeRenderer._parseBorderRadiusItem(bottomRightX, multiplier),
      DvtStatusMeterGaugeRenderer._parseBorderRadiusItem(bottomRightY, multiplier),
      DvtStatusMeterGaugeRenderer._parseBorderRadiusItem(bottomLeftX, multiplier),
      DvtStatusMeterGaugeRenderer._parseBorderRadiusItem(bottomLeftY, multiplier));
};

/**
 * Parse a single corner radius dimension
 * @param {String} item The x or y radius input need to be parsed
 * @param {number} multiplier The value used for when a percent radius is provided
 * @return {number} The integer value of the corner radius
 * @private
 */
DvtStatusMeterGaugeRenderer._parseBorderRadiusItem = function(item, multiplier) {
  var radius = Math.min(parseFloat(item), multiplier / 2);
  if (item.indexOf('%') != -1) {
    radius = Math.min(50, parseFloat(item)) * .01 * multiplier;
  }
  return radius < DvtStatusMeterGaugeRenderer._MIN_CORNER_RADIUS ? 0 : radius;
};

/**
 * Returns a path command for a rounded rectangle.
 * @param {number} x Rectangle x.
 * @param {number} y Rectangle y.
 * @param {number} w Rectangle width.
 * @param {number} h Rectangle height.
 * @param {number} tlcrX Top left corner x radius.
 * @param {number} tlcrY Top left corner y radius.
 * @param {number} trcrX Top right corner x radius.
 * @param {number} trcrY Top right corner y radius.
 * @param {number} brcrX Bottom right corner x radius.
 * @param {number} brcrY Bottom right corner y radius.
 * @param {number} blcrX Bottom left corner x radius.
 * @param {number} blcrY Bottom left corner  y radius.
 * @return {string} Path command.
 * @private
 */
DvtStatusMeterGaugeRenderer._roundedRectangle = function(x, y, w, h, tlcrX, tlcrY, trcrX, trcrY, brcrX, brcrY, blcrX, blcrY) {
  tlcrY = Math.min(tlcrY, .5 * h);
  trcrY = Math.min(trcrY, .5 * h);
  brcrY = Math.min(brcrY, .5 * h);
  blcrY = Math.min(blcrY, .5 * h);
  tlcrX = Math.min(tlcrX, .5 * w);
  trcrX = Math.min(trcrX, .5 * w);
  brcrX = Math.min(brcrX, .5 * w);
  blcrX = Math.min(blcrX, .5 * w);
  var cmd = DvtPathUtils.moveTo(x + tlcrX, y) +
            DvtPathUtils.lineTo(x + w - trcrX, y) +
            DvtPathUtils.arcTo(trcrX, trcrY, Math.PI / 2, 1, x + w, y + trcrY) +
            DvtPathUtils.lineTo(x + w, y + h - brcrY) +
            DvtPathUtils.arcTo(brcrX, brcrY, Math.PI / 2, 1, x + w - brcrX, y + h) +
            DvtPathUtils.lineTo(x + blcrX, y + h) +
            DvtPathUtils.arcTo(blcrX, blcrY, Math.PI / 2, 1, x, y + h - blcrY) +
            DvtPathUtils.lineTo(x, y + tlcrY) +
            DvtPathUtils.arcTo(tlcrX, tlcrY, Math.PI / 2, 1, x + tlcrX, y) +
            DvtPathUtils.closePath();

  return cmd;
};
// Copyright (c) 2008, 2015, Oracle and/or its affiliates. All rights reserved.



/**
 * Indicator for DvtStatusMeterGauge.
 * @class
 * @constructor
 * @extends {DvtRect}
 * @param {DvtStatusMeterGauge} gauge The gauge being rendered.
 * @param {DvtContext} context The rendering context
 * @param {number} x1
 * @param {number} x2
 * @param {number} y1
 * @param {number} y2
 */
var DvtStatusMeterGaugeIndicator = function(gauge, context, x1, x2, y1, y2) {
  this.Init(gauge, context, x1, x2, y1, y2);
};

DvtObj.createSubclass(DvtStatusMeterGaugeIndicator, DvtPath, 'DvtStatusMeterGaugeIndicator');

/**
 * Initializes the component.
 * @param {DvtStatusMeterGauge} gauge The gauge being rendered.
 * @param {DvtContext} context The rendering context
 * @param {number} x1
 * @param {number} x2
 * @param {number} y1
 * @param {number} y2
 * @protected
 */
DvtStatusMeterGaugeIndicator.prototype.Init = function(gauge, context, x1, x2, y1, y2) {
  DvtStatusMeterGaugeIndicator.superclass.Init.call(this, context);
  this._gauge = gauge;

  // Set the coordinates of the shape based on the params
  this.setCoords(x1, x2, y1, y2);
};


/**
 * Specifies the coordinates for the indicator.
 * @param {number} x1
 * @param {number} x2
 * @param {number} y1
 * @param {number} y2
 */
DvtStatusMeterGaugeIndicator.prototype.setCoords = function(x1, x2, y1, y2) {
  // Store these params
  this._x1 = x1;
  this._x2 = x2;
  this._y1 = y1;
  this._y2 = y2;

  // Convert into rectangle coordinates and set
  var x = Math.min(x1, x2);
  var y = Math.min(y1, y2);
  var width = Math.abs(x1 - x2);
  var height = Math.abs(y2 - y1);
  var options = this._gauge.getOptions();
  var multiplier = options['orientation'] == 'vertical' ? width : height;
  var defaultValue = DvtGaugeDefaults.isSkyrosSkin(this._gauge) ? '25%' : '15%';

  var cmds = DvtStatusMeterGaugeRenderer.rectangleWithBorderRadius(x, y, width, height, options['borderRadius'], multiplier, defaultValue);
  this.setCmds(cmds);
};


/**
 * Animation support.
 * @return {array}
 */
DvtStatusMeterGaugeIndicator.prototype.getAnimationParams = function() {
  return [this._x1, this._x2, this._y1, this._y2];
};


/**
 * Animation support.
 * @param {array} params
 */
DvtStatusMeterGaugeIndicator.prototype.setAnimationParams = function(params) {
  if (params && params.length == 4)
    this.setCoords(params[0], params[1], params[2], params[3]);
};
// Copyright (c) 2008, 2015, Oracle and/or its affiliates. All rights reserved.



/**
 * Indicator for the circular DvtStatusMetergauge.
 * @class
 * @constructor
 * @extends {DvtPath}
 * @param {DvtContext} context The rendering context
 * @param {DvtRectangle} bounds The available bounds for rendering.
 * @param {Number} startAngle
 * @param {Number} angleExtent
 * @param {Number} innerRadius
 * @param {Number} outerRadius
 */
var DvtStatusMeterGaugeCircularIndicator = function(context, bounds, startAngle, angleExtent, innerRadius, outerRadius) {
  this.Init(context, bounds, startAngle, angleExtent, innerRadius, outerRadius);
};

DvtObj.createSubclass(DvtStatusMeterGaugeCircularIndicator, DvtPath, 'DvtStatusMeterGaugeCircularIndicator');


/**
 * Initializes the component.
 * @param {DvtContext} context The rendering context
 * @param {DvtRectangle} bounds The available bounds for rendering.
 * @param {Number} startAngle
 * @param {Number} angleExtent
 * @param {Number} innerRadius
 * @param {Number} outerRadius
 * @protected
 */
DvtStatusMeterGaugeCircularIndicator.prototype.Init = function(context, bounds, startAngle, angleExtent, innerRadius, outerRadius) {
  DvtStatusMeterGaugeCircularIndicator.superclass.Init.call(this, context);

  // Set the coordinates of the shape based on the params
  this.setPath(bounds, startAngle, angleExtent, innerRadius, outerRadius);
};


/**
 * Specifies the coordinates for the indicator.
 * @param {DvtRectangle} bounds The available bounds for rendering.
 * @param {Number} startAngle
 * @param {Number} angleExtent
 * @param {Number} innerRadius
 * @param {Number} outerRadius
 */
DvtStatusMeterGaugeCircularIndicator.prototype.setPath = function(bounds, startAngle, angleExtent, innerRadius, outerRadius) {
  if (bounds && (bounds instanceof DvtRectangle))
    this._bounds = bounds;
  else
    bounds = this._bounds;
  this._startAngle = startAngle;
  this._angleExtent = angleExtent;
  this._innerRadius = innerRadius;
  this._outerRadius = outerRadius;

  this.setCmds(DvtStatusMeterGaugeRenderer.createCircularPathCmd(bounds, startAngle, angleExtent, innerRadius, outerRadius));
};


/**
 * Animation support.
 * @return {array}
 */
DvtStatusMeterGaugeCircularIndicator.prototype.getAnimationParams = function() {
  return [this._bounds, this._startAngle, this._angleExtent, this._innerRadius, this._outerRadius];
};


/**
 * Animation support.
 * @param {array} params
 */
DvtStatusMeterGaugeCircularIndicator.prototype.setAnimationParams = function(params) {
  if (params && params.length == 5)
    this.setPath(params[0], params[1], params[2], params[3], params[4]);
};
// Copyright (c) 2008, 2015, Oracle and/or its affiliates. All rights reserved.



/**
 * Dial Gauge component.  This class should never be instantiated directly.  Use the
 * newInstance function instead.
 * @class
 * @constructor
 * @extends {DvtGauge}
 * @export
 */
var DvtDialGauge = function() {};

DvtObj.createSubclass(DvtDialGauge, DvtGauge, 'DvtDialGauge');


/**
 * Returns a new instance of DvtDialGauge.
 * @param {DvtContext} context The rendering context.
 * @param {string} callback The function that should be called to dispatch component events.
 * @param {object} callbackObj The optional object instance on which the callback function is defined.
 * @return {DvtDialGauge}
 * @export
 */
DvtDialGauge.newInstance = function(context, callback, callbackObj) {
  var gauge = new DvtDialGauge();
  gauge.Init(context, callback, callbackObj);
  return gauge;
};


/**
 * @override
 */
DvtDialGauge.prototype.Init = function(context, callback, callbackObj) {
  DvtDialGauge.superclass.Init.call(this, context, callback, callbackObj);

  // Create the defaults object
  this.Defaults = new DvtDialGaugeDefaults();

  /**
   * The anchor point of the indicator on the gauge. This will be set during render time and is used for editing support.
   * @type {DvtPoint}
   */
  this.__anchorPt = null;
};


/**
 * @override
 */
DvtDialGauge.prototype.SetOptions = function(options) {
  var backgroundType = options['background'];
  var indicatorType = options['indicator'];

  if (typeof backgroundType === 'string') {
    options['background'] = DvtGaugeStyleUtils.getDialBackground(backgroundType);
    options['background']['images'] = options['_backgroundImages'];
  }
  if (typeof indicatorType === 'string') {
    options['indicator'] = DvtGaugeStyleUtils.getDialIndicator(indicatorType);
    options['indicator']['images'] = options['_indicatorImages'];
  }

  // Combine the user options with the defaults and store
  DvtDialGauge.superclass.SetOptions.call(this, this.Defaults.calcOptions(options));
};

/**
 * @override
 */
DvtDialGauge.prototype.Render = function(container, width, height) 
{
  DvtDialGaugeRenderer.render(this, container, width, height);
};

/**
 * override
 */
DvtDialGauge.prototype.renderUpdate = function() {
  DvtDialGaugeRenderer.updateIndicatorAndLabel(this, this._container, this.Width, this.Height);

  var eventManager = this.__getEventManager();
  if (eventManager)
    eventManager.associate(this._editingOverlay, this.__getLogicalObject(), true);

  this.UpdateAriaLiveValue(this._container);
};

/**
 * @override
 */
DvtDialGauge.prototype.CreateAnimationOnDisplay = function(objs, animationType, animationDuration) {
  // The only object in objs will be a DvtDialGaugeIndicator
  var animatedObjs = [];
  for (var i = 0; i < objs.length; i++) {
    var obj = objs[i];
    var endState = obj.getAnimationParams();

    // Set the initial state, which is the start angle
    var startAngle = DvtDialGaugeRenderer.__getStartAngle(this);
    obj.setAngle(startAngle);

    // Create the animation
    var animation = new DvtCustomAnimation(this.getCtx(), obj, animationDuration);
    animation.getAnimator().addProp(DvtAnimator.TYPE_NUMBER_ARRAY, obj, obj.getAnimationParams, obj.setAnimationParams, endState);
    animation.getAnimator().setEasing(function(progress) {return DvtEasing.backOut(progress, 0.7);});
    animatedObjs.push(animation);
  }
  return new DvtParallelPlayable(this.getCtx(), animatedObjs);
};


/**
 * @override
 */
DvtDialGauge.prototype.GetValueAt = function(x, y) {
  var angleRads = Math.atan2(y - this.__anchorPt.y, x - this.__anchorPt.x);
  var angle = DvtMath.radsToDegrees(angleRads);
  if (angle <= 0) // adjust to (0, 360]
    angle += 360;

  // Calculate the start angle and extent
  var isRTL = DvtAgent.isRightToLeft(this.getCtx());
  var backgroundOptions = this.getOptions()['background'];
  var startAngle = isRTL ? 180 + backgroundOptions['startAngle'] : 360 - backgroundOptions['startAngle'];
  var angleExtent = backgroundOptions['angleExtent'];
  var endAngle = startAngle + angleExtent;

  // Adjust for BIDI
  if (isRTL) {
    endAngle = startAngle;
    startAngle = startAngle - angleExtent;
    while (startAngle < 0) {
      startAngle += 360;
      endAngle += 360;
    }
  }

  // Normalize the angles.  At this point:
  // start angle is between [0, 360)
  // input angle is between (0, 360]
  // end angle is between (0 and 720)
  if (angle + 360 >= startAngle && angle + 360 <= endAngle) {
    // Angle is between the start and endAngle, where angle and endAngle > 360
    angle += 360;
  }
  else if (!(angle >= startAngle && angle <= endAngle))
  {
    // Input angle is not between the start and end
    if (angle > endAngle)
      angle = (startAngle + 360 - angle < angle - endAngle) ? startAngle : endAngle;
    else
      angle = (startAngle - angle < angle + 360 - endAngle) ? startAngle : endAngle;
  }

  // Calculate and adjust ratio to keep in bounds
  var ratio = (angle - startAngle) / angleExtent;
  if (isRTL) // flip for BIDI, since we flipped the start and end
    ratio = 1 - ratio;

  var minValue = this.Options['min'];
  var maxValue = this.Options['max'];
  var value = (ratio * (maxValue - minValue)) + minValue;
  return value;
};
/**
 * Default values and utility functions for component versioning.
 * @class
 * @constructor
 * @extends {DvtGaugeDefaults}
 */
var DvtDialGaugeDefaults = function() {
  this.Init({'skyros': DvtDialGaugeDefaults.VERSION_1, 'alta': {}});
};

DvtObj.createSubclass(DvtDialGaugeDefaults, DvtGaugeDefaults, 'DvtDialGaugeDefaults');


/**
 * Defaults for version 1.
 */
DvtDialGaugeDefaults.VERSION_1 = {
  'background': {'startAngle': 180, 'angleExtent': 180, 'indicatorLength': 0.7},
  'metricLabel': {'style': new DvtCSSStyle("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")},
  'tickLabel': {
    'scaling': 'auto',
    'style': new DvtCSSStyle("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;")
  }
};
/**
 * Renderer for DvtDialGauge.
 * @class
 */
var DvtDialGaugeRenderer = new Object();

DvtObj.createSubclass(DvtDialGaugeRenderer, DvtObj, 'DvtDialGaugeRenderer');


/**
 * Renders the gauge in the specified area.
 * @param {DvtDialGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {number} width The width of the component.
 * @param {number} height The height of the component.
 */
DvtDialGaugeRenderer.render = function(gauge, container, width, height) {
  if (DvtGaugeDataUtils.hasData(gauge)) {
    // Create the bounds.  No outer gap is allocated to retain image fidelity.
    var bounds = new DvtRectangle(0, 0, width, height);

    // Render the bar
    DvtDialGaugeRenderer._renderShape(gauge, container, bounds);

    // Render the label
    DvtDialGaugeRenderer._renderLabel(gauge, container, bounds);
  }
  else // Render the empty text
    DvtGaugeRenderer.renderEmptyText(gauge, container, new DvtRectangle(0, 0, width, height));
};

/**
 * Update the indicator and metric label without re-rendering the whole gauge
 * @param {DvtDialGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {number} width The width of the component.
 * @param {number} height The height of the component.
 */
DvtDialGaugeRenderer.updateIndicatorAndLabel = function(gauge, container, width, height) 
{
  // Update the rotation angle for the indicator
  gauge.__indicatorContainer.setAngle(DvtDialGaugeRenderer._getRotation(gauge, gauge.getOptions()['value']));

  // Remove and recreate the metric label
  container.removeChild(gauge.__label);
  DvtDialGaugeRenderer._renderLabel(gauge, container, new DvtRectangle(0, 0, width, height));
};

/**
 * Renders the led shape into the specified area.
 * @param {DvtDialGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {DvtRectangle} bounds The available bounds for rendering.
 * @private
 */
DvtDialGaugeRenderer._renderShape = function(gauge, container, bounds) {
  var options = gauge.getOptions();

  // Create the background
  var background = DvtDialGaugeRenderer._createBackground(gauge, bounds);
  container.addChild(background);

  //Add Tick Labels if needed
  if (options['background']['majorTickCount'] && options['background']['radius'])
    DvtDialGaugeRenderer._renderTickLabels(gauge, container, bounds);

  // Create the indicator
  var indicator = DvtDialGaugeRenderer._createIndicator(gauge, bounds);

  // Create containers to separate the transforms so they can be adjusted later
  var translateContainer = new DvtContainer(gauge.getCtx());
  var rotateContainer = new DvtDialGaugeIndicator(gauge.getCtx());
  container.addChild(translateContainer);
  translateContainer.addChild(rotateContainer);
  rotateContainer.addChild(indicator);

  // Calculate the anchor points and the rotation
  var indicatorBounds = indicator.getDimensions();
  var angleRads = DvtDialGaugeRenderer._getRotation(gauge, options['value']);
  var backgroundAnchor = DvtDialGaugeRenderer._getBackgroundAnchorPoint(gauge, bounds);
  var indicatorAnchor = DvtDialGaugeRenderer._getIndicatorAnchorPoint(gauge, bounds, indicatorBounds);
  var scale = DvtDialGaugeRenderer._getIndicatorScaleFactor(gauge, bounds, indicatorBounds);

  // Apply the transformations to correctly position the indicator
  // 1. Translate the indicator so that the anchor point is at the origin
  var mat = new DvtMatrix();
  mat.translate(-indicatorAnchor.x, -indicatorAnchor.y);
  mat.scale(scale, scale);
  indicator.setMatrix(mat);

  // 2. Rotate the indicator
  rotateContainer.setAngle(angleRads);

  // 3. Translate to the anchor point on the background
  mat = new DvtMatrix();
  mat.translate(backgroundAnchor.x, backgroundAnchor.y);
  translateContainer.setMatrix(mat);

  // Add the DvtDialGaugeIndicator for rotation support
  gauge.__shapes.push(rotateContainer);
  gauge.__indicatorContainer = rotateContainer;

  // Store the axisInfo on the gauge for editing support
  gauge.__anchorPt = backgroundAnchor;
};


/**
 * Creates and returns the background.
 * @param {DvtDialGauge} gauge The gauge being rendered.
 * @param {DvtRectangle} bounds The available bounds for rendering.
 * @return {DvtDisplayable}
 * @private
 */
DvtDialGaugeRenderer._createBackground = function(gauge, bounds) {
  var backgroundOptions = gauge.getOptions()['background'];
  var isRTL = DvtAgent.isRightToLeft(gauge.getCtx());

  // Calculate the required resolution needed.  This check isn't ideal, but it's close enough for now.
  var isTouchDevice = DvtAgent.isTouchDevice();
  var widthRes = isTouchDevice ? 2 * bounds.w : bounds.w;
  var heightRes = isTouchDevice ? 2 * bounds.h : bounds.h;

  // Use the images from the list provided
  var images = backgroundOptions['images'];
  if (images && images.length > 0) {
    var i;
    var refWidth;
    var refHeight;

    // Filter the list to images matching the locale type (bidi or not)
    var locImages = [];
    for (i = 0; i < images.length; i++) {
      var isImageRTL = (images[i]['dir'] == 'rtl');
      if (isRTL && isImageRTL)
        locImages.push(images[i]);
      else if (!isRTL && !isImageRTL)
        locImages.push(images[i]);
    }
    images = locImages.length > 0 ? locImages : images; // Use all images if none match the bidi flag

    // Iterate and use the first image with enough detail
    for (i = 0; i < images.length; i++) {
      var image = images[i];
      var source = image['src'];
      var width = image['width'];
      var height = image['height'];
      var isSvg = (source && source.search('.svg') > -1);

      // Store the size of the first image as the reference size
      if (i == 0) {
        refWidth = width;
        refHeight = height;
      }

      // Use the image if it's SVG, a PNG whose size > resolution, or the last image provided.
      if (isSvg || (width >= widthRes && height >= heightRes) || i == images.length - 1) {
        var shape = new DvtImage(gauge.getCtx(), source, 0, 0, width, height);

        // Scale and translate to center
        var matrix = new DvtMatrix();
        var scale = Math.min(bounds.w / width, bounds.h / height);
        var tx = (bounds.w - scale * width) / 2;
        var ty = (bounds.h - scale * height) / 2;
        matrix.scale(scale, scale);
        matrix.translate(tx, ty);
        shape.setMatrix(matrix);

        // Create an image loader to set the width and height of the image after loads.  This is
        // needed to correctly load svg images in webkit.
        if (isSvg && DvtAgent.isPlatformWebkit()) {
          var imageDims = DvtImageLoader.loadImage(gauge.getCtx(), source, DvtObj.createCallback(shape, shape.__setDimensions));
          if (imageDims)
            shape.__setDimensions(imageDims);
        }

        // Adjust the bounds for the space used
        bounds.x += tx;
        bounds.y += ty;
        bounds.w = scale * width;
        bounds.h = scale * height;

        // Adjust the anchor for the bounds
        if (!isNaN(backgroundOptions['anchorX']) && !isNaN(backgroundOptions['anchorY'])) {
          // Store in private fields to avoid modifying the app provided copies
          backgroundOptions['_anchorX'] = isRTL ? bounds.x + bounds.w - bounds.w * backgroundOptions['anchorX'] / refWidth : bounds.x + bounds.w * backgroundOptions['anchorX'] / refWidth;
          backgroundOptions['_anchorY'] = bounds.y + bounds.h * backgroundOptions['anchorY'] / refHeight;
        }
        // Adjust the metric label bounds
        if (backgroundOptions['metricLabelBounds']) {
          var metLblBounds = {};
          metLblBounds['width'] = bounds.w * backgroundOptions['metricLabelBounds']['width'] / refWidth;
          metLblBounds['height'] = bounds.h * backgroundOptions['metricLabelBounds']['height'] / refHeight;
          metLblBounds['y'] = bounds.y + bounds.h * backgroundOptions['metricLabelBounds']['y'] / refHeight;
          if (isRTL)
            metLblBounds['x'] = bounds.x + bounds.w - bounds.w * backgroundOptions['metricLabelBounds']['x'] / refWidth - metLblBounds['width'];
          else
            metLblBounds['x'] = bounds.x + bounds.w * backgroundOptions['metricLabelBounds']['x'] / refWidth;

          backgroundOptions['_metricLabelBounds'] = metLblBounds;

          // Helper for integration of new custom gauges, comment out when not using
          /*var metBounds = new DvtRect(gauge.getCtx(), metLblBounds['x'], metLblBounds['y'], metLblBounds['width'], metLblBounds['height']);
          metBounds.setSolidFill("#0000FF", 0.3);
          gauge.addChild(metBounds);*/
        }

        // Scale radius of tick labels based on reference image size
        var radiusScale = Math.min(bounds.w / refWidth, bounds.h / refHeight);
        backgroundOptions['_radius'] = backgroundOptions['radius'] * radiusScale;
        backgroundOptions['_tickLabelHeight'] = backgroundOptions['tickLabelHeight'] * bounds.h / refHeight;
        backgroundOptions['_tickLabelWidth'] = backgroundOptions['tickLabelWidth'] * bounds.w / refWidth;

        return shape;
      }
    }
  }
  return null;
};


/**
 * Creates and returns the indicator.
 * @param {DvtDialGauge} gauge The gauge being rendered.
 * @param {DvtRectangle} bounds The available bounds for rendering.
 * @return {DvtDisplayable}
 * @private
 */
DvtDialGaugeRenderer._createIndicator = function(gauge, bounds) {
  var indicatorOptions = gauge.getOptions()['indicator'];
  var indicatorLength = DvtDialGaugeRenderer._getIndicatorLength(gauge, bounds);

  // Calculate the required resolution needed.  This check isn't ideal, but it's close enough for now.
  var heightRes = DvtAgent.isTouchDevice() ? 2 * indicatorLength : indicatorLength;

  // Iterate and use the first image with enough detail
  var refWidth;
  var refHeight;
  var images = indicatorOptions['images'];
  if (images && images.length > 0) {
    for (var i = 0; i < images.length; i++) {
      var image = images[i];
      var source = image['src'];
      var width = image['width'];
      var height = image['height'];
      var isSvg = (source && source.search('.svg') > -1);

      // Store the size of the first image as the reference size
      if (i == 0) {
        refWidth = width;
        refHeight = height;
      }

      // Use the image if it's SVG, a PNG whose height > indicatorLength, or the last image provided.
      if (isSvg || height >= heightRes || i == images.length - 1) {
        var shape = new DvtImage(gauge.getCtx(), source, 0, 0, width, height);

        // Create an image loader to set the width and height of the image after loads.  This is
        // needed to correctly load svg images in webkit.
        if (isSvg && DvtAgent.isPlatformWebkit()) {
          var imageDims = DvtImageLoader.loadImage(gauge.getCtx(), source, DvtObj.createCallback(shape, shape.__setDimensions));
          if (imageDims) {
            // Once the image is initially loaded, ping it with the given size.  This is needed to get the
            // browser to correctly render the SVG.  The returned size from imageDims may not be correct
            // for SVG, so use the specified size instead.
            shape.setWidth(width);
            shape.setHeight(height);
          }
        }

        // Adjust the anchor for the image used
        if (!isNaN(indicatorOptions['anchorX']) && !isNaN(indicatorOptions['anchorY'])) {
          // Store in private fields to avoid modifying the app provided copies
          indicatorOptions['_anchorX'] = indicatorOptions['anchorX'] * width / refWidth;
          indicatorOptions['_anchorY'] = indicatorOptions['anchorY'] * height / refHeight;
        }

        // Return the image
        return shape;
      }
    }
  }
  return null;
};


/**
 * Returns the rotation angle for the start angle in radians.
 * @param {DvtDialGauge} gauge The gauge being rendered.
 * @return {Number}
 */
DvtDialGaugeRenderer.__getStartAngle = function(gauge) {
  var backgroundOptions = gauge.getOptions()['background'];
  var isRTL = DvtAgent.isRightToLeft(gauge.getCtx());
  var startAngle = isRTL ? 180 - backgroundOptions['startAngle'] : backgroundOptions['startAngle'];
  return Math.PI * (90 - startAngle) / 180;
};


/**
 * Returns the rotation angle of the indicator in radians.
 * @param {DvtDialGauge} gauge The gauge being rendered.
 * @param {Number} value The value to be rotated to
 * @return {Number}
 * @private
 */
DvtDialGaugeRenderer._getRotation = function(gauge, value) {
  var options = gauge.getOptions();
  var backgroundOptions = options['background'];

  // Calculate the value as a ratio between the min and max
  var minValue = options['min'];
  var maxValue = options['max'];
  value = Math.max(Math.min(value, maxValue), minValue);
  var ratio = (value - minValue) / (maxValue - minValue);

  // Calculate the start angle and extent
  var isRTL = DvtAgent.isRightToLeft(gauge.getCtx());
  var startAngle = isRTL ? 180 - backgroundOptions['startAngle'] : backgroundOptions['startAngle'];
  var angleExtent = isRTL ? -backgroundOptions['angleExtent'] : backgroundOptions['angleExtent'];

  // Convert to angles and return in radians
  var angleDegrees = startAngle - (ratio * angleExtent);
  return Math.PI * (90 - angleDegrees) / 180;
};


/**
 * Returns the anchor point for the indicator on the background relative to the rendering bounds.
 * @param {DvtDialGauge} gauge The gauge being rendered.
 * @param {DvtRectangle} bounds The available bounds for rendering.
 * @return {DvtPoint}
 * @private
 */
DvtDialGaugeRenderer._getBackgroundAnchorPoint = function(gauge, bounds) {
  var backgroundOptions = gauge.getOptions()['background'];
  var anchorX = backgroundOptions['_anchorX'];
  var anchorY = backgroundOptions['_anchorY'];

  if (!isNaN(anchorX) && !isNaN(anchorY)) // private fields are calculated earlier and already scaled
    return new DvtPoint(anchorX, anchorY);
  else // default to center
    return new DvtPoint(bounds.x + bounds.w / 2, bounds.y + bounds.h / 2);
};


/**
 * Returns the length of the indicator.
 * @param {DvtDialGauge} gauge The gauge being rendered.
 * @param {DvtRectangle} bounds The available bounds for rendering.
 * @return {Number} The length of the indicator.
 * @private
 */
DvtDialGaugeRenderer._getIndicatorLength = function(gauge, bounds) {
  var radius = Math.min(bounds.w, bounds.h) / 2;
  return gauge.getOptions()['background']['indicatorLength'] * radius;
};


/**
 * Returns the anchor point of the indicator relative to the indicator image.
 * @param {DvtDialGauge} gauge The gauge being rendered.
 * @param {DvtRectangle} bounds The available bounds for rendering.
 * @param {DvtRectangle} indicatorBounds The bounds for the indicator.
 * @return {DvtPoint}
 * @private
 */
DvtDialGaugeRenderer._getIndicatorAnchorPoint = function(gauge, bounds, indicatorBounds) {
  var indicatorOptions = gauge.getOptions()['indicator'];
  var anchorX = indicatorOptions['_anchorX'];
  var anchorY = indicatorOptions['_anchorY'];

  if (!isNaN(anchorX) && !isNaN(anchorY))
    return new DvtPoint(anchorX, anchorY); // already adjusted for image size
  else // default to center of the bottom edge
    return new DvtPoint(indicatorBounds.x + indicatorBounds.w / 2, indicatorBounds.y + indicatorBounds.h);
};


/**
 * Returns the scaling transform value for the indicator.
 * @param {DvtDialGauge} gauge The gauge being rendered.
 * @param {DvtRectangle} bounds The available bounds for rendering.
 * @param {DvtRectangle} indicatorBounds The bounds for the indicator.
 * @return {Number}
 * @private
 */
DvtDialGaugeRenderer._getIndicatorScaleFactor = function(gauge, bounds, indicatorBounds) {
  var indicatorLength = DvtDialGaugeRenderer._getIndicatorLength(gauge, bounds);
  return indicatorLength / indicatorBounds.h;
};


/**
 * Renders the label into the specified area.
 * @param {DvtLedGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {DvtRectangle} bounds The available bounds for rendering.
 * @private
 */
DvtDialGaugeRenderer._renderLabel = function(gauge, container, bounds) {
  var options = gauge.getOptions();

  // Create and position the label
  if (options['metricLabel']['rendered'] == 'on') {
    var labelString = DvtGaugeRenderer.getFormattedMetricLabel(options['value'], gauge);
    var minString = DvtGaugeRenderer.getFormattedMetricLabel(options['min'], gauge);
    var maxString = DvtGaugeRenderer.getFormattedMetricLabel(options['max'], gauge);
    var cx = bounds.x + bounds.w / 2;
    var cy = bounds.y + bounds.h / 2;
    var labelWidth = bounds.w;
    var labelHeight = bounds.h;

    // Use the metricLabelBounds if specified
    var metricLabelBounds = options['background']['_metricLabelBounds'];
    if (metricLabelBounds) {
      cx = metricLabelBounds['x'] + metricLabelBounds['width'] / 2;
      cy = metricLabelBounds['y'] + metricLabelBounds['height'] / 2;
      bounds.w = metricLabelBounds['width'];
      bounds.h = metricLabelBounds['height'];
    }

    // Create the label and align
    var label = new DvtOutputText(gauge.getCtx(), labelString, cx, cy);
    if (!options['metricLabel']['style'].getStyle('color') && options['background']['_isDark'])
      options['metricLabel']['style'].setStyle('color', '#CCCCCC');
    label.setCSSStyle(options['metricLabel']['style']);
    var size = parseInt(options['metricLabel']['style'].getFontSize());
    size = size ? parseInt(size) : null;
    if (!size) {
      size = DvtGaugeRenderer.calcLabelFontSize([labelString, minString, maxString], label, bounds);
      label.setTextString(labelString);
      label.setFontSize(size);
    }
    label.alignCenter();
    label.alignMiddle();

    // Truncate if needed, null is returned if the label doesn't fit
    if (DvtTextUtils.fitText(label, labelWidth, labelHeight, container)) {
      gauge.__label = label;
    }
  }
};


/**
 * Renders the tick labels into the specified area.
 * @param {DvtLedGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {DvtRectangle} bounds The available bounds for rendering.
 * @private
 */
DvtDialGaugeRenderer._renderTickLabels = function(gauge, container, bounds) {
  var options = gauge.getOptions();
  var isRTL = DvtAgent.isRightToLeft(gauge.getCtx());
  // Create and position the label
  if (options['background']['radius'] && options['background']['majorTickCount']) {
    var radius = options['background']['_radius'];
    var minValue = options['min'];
    var maxValue = options['max'];
    var majorTickCount = options['background']['majorTickCount'];
    var fontSize = 12;
    var labelBounds = new DvtRectangle(cx, cy, bounds.w, bounds.h);
    var style = options['metricLabel']['style'].getStyle('font-size');
    if (options['background']['_tickLabelHeight'] && (!style))
      labelBounds.h = options['background']['_tickLabelHeight'];
    if (options['background']['_tickLabelWidth'] && (!style))
      labelBounds.w = options['background']['_tickLabelWidth'];
    if (!style) {
      var label = new DvtOutputText(gauge.getCtx(), '', cx, cy);
      fontSize = DvtGaugeRenderer.calcLabelFontSize([DvtGaugeRenderer.formatTickLabelValue(options['max'], gauge), DvtGaugeRenderer.formatTickLabelValue(options['min'], gauge)], label, labelBounds);
    }
    for (var x = 0; x < majorTickCount; x++)
    {
      var labelValue = minValue + Math.abs(maxValue - minValue) * x / (majorTickCount - 1);
      if (isRTL)
        labelValue = minValue + Math.abs(maxValue - minValue) * (majorTickCount - 1 - x) / (majorTickCount - 1);

      var labelString = DvtGaugeRenderer.formatTickLabelValue(labelValue, gauge);
      var angleRads = DvtDialGaugeRenderer._getRotation(gauge, labelValue);
      var anchor = DvtDialGaugeRenderer._getBackgroundAnchorPoint(gauge, bounds);

      var cx = anchor.x + radius * Math.cos(angleRads - Math.PI / 2);
      var cy = anchor.y + radius * Math.sin(angleRads - Math.PI / 2);

      // Create the label and align
      var label = new DvtOutputText(gauge.getCtx(), labelString, cx, cy);
      if (!options['tickLabel']['style'].getStyle('color') && options['background']['_isDark'])
        options['tickLabel']['style'].setStyle('color', '#CCCCCC');
      label.setCSSStyle(options['tickLabel']['style']);
      if (!options['tickLabel']['style'].getStyle('font-size'))
        label.setFontSize(fontSize);
      label.alignCenter();
      label.alignMiddle();

      // Truncate if needed
      DvtTextUtils.fitText(label, labelBounds.w + .5, labelBounds.h + .5, container);
    }
  }
};
// Copyright (c) 2008, 2015, Oracle and/or its affiliates. All rights reserved.



/**
 * Indicator for DvtDialGauge.
 * @class
 * @constructor
 * @extends {DvtContainer}
 * @param {DvtContext} context The rendering context
 */
var DvtDialGaugeIndicator = function(context) {
  this.Init(context);
};

DvtObj.createSubclass(DvtDialGaugeIndicator, DvtContainer, 'DvtDialGaugeIndicator');


/**
 * Specifies the angle for the indicator.
 * @param {number} angleRads The angle of the indicator in radians.
 */
DvtDialGaugeIndicator.prototype.setAngle = function(angleRads) {
  // Use a matrix to prevent the angles from being cumulative
  var mat = new DvtMatrix();
  mat.rotate(angleRads);
  this.setMatrix(mat);

  // Store the param
  this._angleRads = angleRads;
};


/**
 * Animation support.
 * @return {array}
 */
DvtDialGaugeIndicator.prototype.getAnimationParams = function() {
  return [this._angleRads];
};


/**
 * Animation support.
 * @param {array} params
 */
DvtDialGaugeIndicator.prototype.setAnimationParams = function(params) {
  if (params && params.length == 1)
    this.setAngle(params[0]);
};
// Copyright (c) 2008, 2015, Oracle and/or its affiliates. All rights reserved.

/**
 * Rating Gauge component.  This class should never be instantiated directly.  Use the
 * newInstance function instead.
 * @class
 * @constructor
 * @extends {DvtGauge}
 * @export
 */
var DvtRatingGauge = function() {};

DvtObj.createSubclass(DvtRatingGauge, DvtGauge, 'DvtRatingGauge');


/**
 * Returns a new instance of DvtRatingGauge.
 * @param {DvtContext} context The rendering context.
 * @param {string} callback The function that should be called to dispatch component events.
 * @param {object} callbackObj The optional object instance on which the callback function is defined.
 * @return {DvtRatingGauge}
 * @export
 */
DvtRatingGauge.newInstance = function(context, callback, callbackObj) {
  var gauge = new DvtRatingGauge();
  gauge.Init(context, callback, callbackObj);
  return gauge;
};


/**
 * @override
 */
DvtRatingGauge.prototype.Init = function(context, callback, callbackObj) {
  DvtRatingGauge.superclass.Init.call(this, context, callback, callbackObj);

  // Create the defaults object
  this.Defaults = new DvtRatingGaugeDefaults();
};


/**
 * @override
 */
DvtRatingGauge.prototype.SetOptions = function(options) {
  // Combine the user options with the defaults and store
  DvtRatingGauge.superclass.SetOptions.call(this, this.Defaults.calcOptions(options));
};

/**
 * @override
 */
DvtRatingGauge.prototype.Render = function(container, width, height) 
{
  var outerGap = this.getOptions()['__layout']['outerGap'];
  var maxValue = this.Options['max'];
  var isVert = this.Options['orientation'] == 'vertical';
  this._size = isVert ? Math.min(width - 2 * outerGap, (height - 2 * outerGap) / maxValue) : Math.min(height - 2 * outerGap, (width - 2 * outerGap) / maxValue);
  this._bounds = isVert ? new DvtRectangle(outerGap, (this.Height - this._size * maxValue) / 2.0, this.Width - 2 * outerGap, this._size * maxValue) :
      new DvtRectangle((this.Width - this._size * maxValue) / 2.0, outerGap, this._size * maxValue, this.Height - 2 * outerGap);
  DvtRatingGaugeRenderer.render(this, container, width, height);
};

/**
 * @override
 */
DvtRatingGauge.prototype.__getLogicalObject = function() {
  return new DvtRatingGaugePeer(this);
};

/**
 * @override
 */
DvtRatingGauge.prototype.GetValueAt = function(x, y) {

  if (DvtGaugeDataUtils.hasData(this)) {
    if (this.Options['orientation'] == 'vertical') {
      y = Math.max(Math.min(y, this._bounds.y + this._bounds.h), this._bounds.y);

      val = Math.max((this._bounds.y + this._bounds.h - y) / this._size, this.Options['min']);
    }

    else {
      x = Math.max(Math.min(x, this._bounds.x + this._bounds.w), this._bounds.x);

      // calculating the val depends on locale, but the rounding doesn't
      var val = 0;
      if (!DvtAgent.isRightToLeft(this.getCtx()))
        val = Math.max((x - this._bounds.x) / this._size, this.Options['min']);
      else
        val = Math.max((this._bounds.x + this._bounds.w - x) / this._size, this.Options['min']);
    }

    return DvtGaugeRenderer.adjustForStep(this.Options, val);

  }
  return null;
};


/**
 * Handles the end of a hover event due to mouse out at the specified coordinates.
 * @param {number} x The x coordinate of the value change.
 * @param {number} y The y coordinate of the value change.
 */
DvtRatingGauge.prototype.__processHoverEnd = function(x, y) {
  this.__updateClipRects(this.Options['value'], 'render');

  // Fire the value change event to reset to the real value
  this.__dispatchEvent(new DvtValueChangeEvent(this.Options['value'], this.Options['value'], false));
};


/**
 * @override
 */
DvtRatingGauge.prototype.__processValueChangeStart = function(x, y) {
  this.__processValueChangeMove(x, y);
};


/**
 * @override
 */
DvtRatingGauge.prototype.__processValueChangeMove = function(x, y) {
  var value = this.GetValueAt(x, y);
  this.__updateClipRects(value, 'hover');

  // Fire the value change event
  this.__dispatchEvent(new DvtValueChangeEvent(this.Options['value'], value, false));
};


/**
 * @override
 */
DvtRatingGauge.prototype.__processValueChangeEnd = function(x, y) {
  // Render again because a click was registerd
  var oldValue = this.Options['value'];
  this.Options['value'] = this.GetValueAt(x, y);
  this.Options['changed'] = true;
  this.render();

  // Fire the both the change and input events on complete
  this.__dispatchEvent(new DvtValueChangeEvent(oldValue, this.Options['value'], false));
  this.__dispatchEvent(new DvtValueChangeEvent(oldValue, this.Options['value'], true));
};

/**
 * Updates the cliprects used in the rating gauge for hover and the different states.
 * @param {number} value The point at which the clips rects are drawn.
 * @param {string} proc The process being done- "hover" or "render"
 * @param {DvtContainer} container The container that holds this gauge- allowing us to access the three subcontainers with selected/changed, unselected, and hover shapes.
 */
DvtRatingGauge.prototype.__updateClipRects = function(value, proc, container) {
  if (!DvtGaugeDataUtils.hasData(this))
    return;

  if (!container)
    container = this._container;

  var isRTL = DvtAgent.isRightToLeft(this.getCtx());
  var isVert = this.Options['orientation'] == 'vertical';

  // which  to show and which to hide based on whether we're hovering or not
  value = Math.max(Math.min(value, this.Options['max']), 0);  //clipping the data value
  var a = 0;
  var b = value * this._size;
  var c = value * this._size;
  if (proc == 'render') {
    a = value * this._size;
    b = 0;
  }

  if (isVert) {
    // Set the clip rect size.
    var unselContainer = container.getChildAt(0);
    var unselClip = new DvtClipPath('unsel' + this.getId());
    unselClip.addRect(this._bounds.x, this._bounds.y, this._bounds.w, this._bounds.h - c);
    unselContainer.setClipPath(unselClip);

    var selContainer = container.getChildAt(1);
    var selClip = new DvtClipPath('sel' + this.getId());
    selClip.addRect(this._bounds.x, this._bounds.y + this._bounds.h - a, this._bounds.w, a);
    selContainer.setClipPath(selClip);

    var hoverContainer = container.getChildAt(2);
    var hoverClip = new DvtClipPath('hover' + this.getId());
    hoverClip.addRect(this._bounds.x, this._bounds.y + this._bounds.h - b, this._bounds.w, b);
    hoverContainer.setClipPath(hoverClip);
  } else if (!isRTL) {
    // Set the clip rect size.
    var unselContainer = container.getChildAt(0);
    var unselClip = new DvtClipPath('unsel' + this.getId());
    unselClip.addRect(this._bounds.x + c, this._bounds.y, this._bounds.w - c, this._bounds.h);
    unselContainer.setClipPath(unselClip);

    var selContainer = container.getChildAt(1);
    var selClip = new DvtClipPath('sel' + this.getId());
    selClip.addRect(this._bounds.x, this._bounds.y, a, this._bounds.h);
    selContainer.setClipPath(selClip);

    var hoverContainer = container.getChildAt(2);
    var hoverClip = new DvtClipPath('hover' + this.getId());
    hoverClip.addRect(this._bounds.x, this._bounds.y, b, this._bounds.h);
    hoverContainer.setClipPath(hoverClip);
  } else {
    // Set the clip rect size.
    var unselContainer = container.getChildAt(0);
    var unselClip = new DvtClipPath('unsel' + this.getId());
    unselClip.addRect(this._bounds.x, this._bounds.y, this._bounds.w - c, this._bounds.h);
    unselContainer.setClipPath(unselClip);

    var selContainer = container.getChildAt(1);
    var selClip = new DvtClipPath('sel' + this.getId());
    selClip.addRect(this._bounds.x + this._bounds.w - c, this._bounds.y, a, this._bounds.h);
    selContainer.setClipPath(selClip);

    var hoverContainer = container.getChildAt(2);
    var hoverClip = new DvtClipPath('hover' + this.getId());
    hoverClip.addRect(this._bounds.x + this._bounds.w - c, this._bounds.y, b, this._bounds.h);
    hoverContainer.setClipPath(hoverClip);
  }
  this.UpdateAriaLiveValue(container, value);
};

/**
 * Return the led gauge drawn at the given index.
 * Internal API used for Automation purposes.
 * @param {Number} index
 * @return {DvtDisplayable}
 */
DvtRatingGauge.prototype.__getRatingGaugeItem = function(index) {
  // Returning the unselected shape at the given index.
  return this._container.getChildAt(0).getChildAt(index);
};

/**
 * @override
 */
DvtRatingGauge.prototype.CreateEventManager = function() {
  return new DvtRatingGaugeEventManager(this);
};
/**
 * Default values and utility functions for component versioning.
 * @class
 * @constructor
 * @extends {DvtGaugeDefaults}
 */
var DvtRatingGaugeDefaults = function() {
  this.Init({'skyros': DvtRatingGaugeDefaults.VERSION_1, 'alta': DvtRatingGaugeDefaults.SKIN_ALTA});
};

DvtObj.createSubclass(DvtRatingGaugeDefaults, DvtGaugeDefaults, 'DvtRatingGaugeDefaults');


/**
 * Defaults for ALTA.
 */
DvtRatingGaugeDefaults.SKIN_ALTA = {
  'unselectedState': {'shape': 'star', 'color': '#C4CED7', 'borderColor': null},
  'selectedState': {'shape': 'star', 'color': '#F8C15A', 'borderColor': null},
  'hoverState': {'shape': 'star', 'color': '#007CC8', 'borderColor': null},
  'changedState': {'shape': 'star', 'color': '#ED2C02', 'borderColor': null}
};


/**
 * Defaults for version 1.
 */
DvtRatingGaugeDefaults.VERSION_1 = {
  'min': 0, 'max': 5,
  'orientation': 'horizontal',
  'unselectedState': {'shape': 'star', 'color': '#F2F2F2', 'borderColor': '#B6B6B6'},
  'selectedState': {'shape': 'star', 'color': '#F8C15A', 'borderColor': '#F5A700'},
  'hoverState': {'shape': 'star', 'color': '#66A7DA', 'borderColor': '#4A86C5'},
  'changedState': {'shape': 'star', 'color': '#F8C15A', 'borderColor': '#959595'},
  'step': 1
};
/**
 * Rating gauge tooltip support
 * @param {DvtRatingGauge} gauge The rating gauge.
 * @class
 * @constructor
 * @implements {DvtTooltipSource}
 */
var DvtRatingGaugePeer = function(gauge) {
  this.Init();
  this._gauge = gauge;
};

DvtObj.createSubclass(DvtRatingGaugePeer, DvtSimpleObjPeer, 'DvtRatingGaugePeer');

/**
 * @override
 */
DvtRatingGaugePeer.prototype.getDatatip = function(target, x, y) {
  var options = this._gauge.getOptions();
  var thresholdIndex;
  if (this._gauge.__getEventManager().__isMouseEditing())
    thresholdIndex = DvtGaugeDataUtils.getValueThresholdIndex(this._gauge, this._gauge.GetValueAt(x, y));
  else
    thresholdIndex = DvtGaugeDataUtils.getValueThresholdIndex(this._gauge);
  var threshold = DvtGaugeDataUtils.getThreshold(this._gauge, thresholdIndex);
  return (threshold && threshold['shortDesc']) ? threshold['shortDesc'] : options['shortDesc'];
};

/**
 * Renderer for DvtRatingGauge.
 * @class
 */
var DvtRatingGaugeRenderer = new Object();

DvtObj.createSubclass(DvtRatingGaugeRenderer, DvtObj, 'DvtRatingGaugeRenderer');

/**
 * Renders the gauge in the specified area.
 * @param {DvtRatingGauge} gauge The gauge being rendered.
 * @param {DvtContainer} container The container to render into.
 * @param {number} width The width of the component.
 * @param {number} height The height of the component.
 */
DvtRatingGaugeRenderer.render = function(gauge, container, width, height) {
  if (DvtGaugeDataUtils.hasData(gauge)) {
    var options = gauge.getOptions();
    var isRTL = DvtAgent.isRightToLeft(gauge.getCtx());
    var isVert = options['orientation'] == 'vertical';

    // Allocate the bounds for rendering the component
    var outerGap = options['__layout']['outerGap'];
    var maxValue = options['max'];
    var size = isVert ? Math.min(width - 2 * outerGap, (height - 2 * outerGap) / maxValue) : Math.min(height - 2 * outerGap, (width - 2 * outerGap) / maxValue);
    var bounds = isVert ? new DvtRectangle(outerGap, (height - size * maxValue) / 2.0, width - 2 * outerGap, size * maxValue) :
        new DvtRectangle((width - size * maxValue) / 2.0, outerGap, size * maxValue, height - 2 * outerGap);
    var thresholdIndex = DvtGaugeDataUtils.getValueThresholdIndex(gauge);
    var threshold = DvtGaugeDataUtils.getThreshold(gauge, thresholdIndex);
    var selectedColor = options['selectedState']['color'];
    var changedColor = options['changedState']['color'];
    var selectedBorderColor = options['selectedState']['borderColor'];
    var changedBorderColor = options['changedState']['borderColor'];
    if (threshold && threshold['color']) {
      selectedColor = threshold['color'];
      changedColor = threshold['color'];
    }

    if (threshold && threshold['borderColor']) {
      selectedBorderColor = threshold['borderColor'];
      changedBorderColor = threshold['borderColor'];
    }

    // Create the options objects for the LED gauges
    var unselectedOptions = {'value': 0, 'type': options['unselectedState']['shape'], 'color': options['unselectedState']['color'],
      'borderColor': options['unselectedState']['borderColor'], 'visualEffects': options['visualEffects']};
    var selectedOptions = {'value': 0, 'type': options['selectedState']['shape'], 'color': selectedColor,
      'borderColor': selectedBorderColor, 'visualEffects': options['visualEffects']};
    var changedOptions = {'value': 0, 'type': options['changedState']['shape'], 'color': changedColor,
      'borderColor': changedBorderColor, 'visualEffects': options['visualEffects']};
    var hoverOptions = {'value': 0, 'type': options['hoverState']['shape'], 'color': options['hoverState']['color'],
      'borderColor': options['hoverState']['borderColor'], 'visualEffects': options['visualEffects']};

    if (options['unselectedState']['shape'] == 'dot') {
      unselectedOptions['type'] = 'circle';
      unselectedOptions['visualEffects'] = 'none';
      unselectedOptions['size'] = 0.05;
    }

    // Create containers for clipping.
    var unselContainer = new DvtContainer(gauge.getCtx());
    container.addChild(unselContainer);
    var selContainer = new DvtContainer(gauge.getCtx());
    container.addChild(selContainer);
    var hoverContainer = new DvtContainer(gauge.getCtx());
    container.addChild(hoverContainer);

    gauge.__updateClipRects(options['value'], 'render', container);

    for (var i = 0; i < maxValue; i++) {
      // The unselectedState shapes
      if (options['unselectedState']['shape'] != 'none') {
        var unselectedLED = DvtLedGauge.newInstance(gauge.getCtx(), null, null, true);
        unselContainer.addChild(unselectedLED);
        isVert ? unselectedLED.setTranslate(bounds.x + bounds.w / 2 - size / 2, bounds.y + bounds.h - (i + 1) * size) :
            isRTL ? unselectedLED.setTranslate(bounds.x + bounds.w - (i + 1) * size, bounds.y + bounds.h / 2 - size / 2) :
            unselectedLED.setTranslate(bounds.x + i * size, bounds.y + bounds.h / 2 - size / 2);
        unselectedLED.render(unselectedOptions, size, size);
      }

      // The selected/changed shapes use the same container and cliprect
      if (options['changed']) {
        var changedLED = DvtLedGauge.newInstance(gauge.getCtx(), null, null, true);
        selContainer.addChild(changedLED);
        isVert ? changedLED.setTranslate(bounds.x + bounds.w / 2 - size / 2, bounds.y + bounds.h - (i + 1) * size) :
            isRTL ? changedLED.setTranslate(bounds.x + bounds.w - (i + 1) * size, bounds.y + bounds.h / 2 - size / 2) :
            changedLED.setTranslate(bounds.x + i * size, bounds.y + bounds.h / 2 - size / 2);
        changedLED.render(changedOptions, size, size);
      }
      else {
        var selectedLED = DvtLedGauge.newInstance(gauge.getCtx(), null, null, true);
        selContainer.addChild(selectedLED);
        isVert ? selectedLED.setTranslate(bounds.x + bounds.w / 2 - size / 2, bounds.y + bounds.h - (i + 1) * size) :
            isRTL ? selectedLED.setTranslate(bounds.x + bounds.w - (i + 1) * size, bounds.y + bounds.h / 2 - size / 2) :
            selectedLED.setTranslate(bounds.x + i * size, bounds.y + bounds.h / 2 - size / 2);
        selectedLED.render(selectedOptions, size, size);
      }

      // The hover shapes
      var hoverLED = DvtLedGauge.newInstance(gauge.getCtx(), null, null, true);
      hoverContainer.addChild(hoverLED);
      isVert ? hoverLED.setTranslate(bounds.x + bounds.w / 2 - size / 2, bounds.y + bounds.h - (i + 1) * size) :
          isRTL ? hoverLED.setTranslate(bounds.x + bounds.w - (i + 1) * size, bounds.y + bounds.h / 2 - size / 2) :
          hoverLED.setTranslate(bounds.x + i * size, bounds.y + bounds.h / 2 - size / 2);
      hoverLED.render(hoverOptions, size, size);
    }
  }
  else // Render the empty text
    DvtGaugeRenderer.renderEmptyText(gauge, container, new DvtRectangle(0, 0, width, height));
};
/**
 * Event Manager for DvtRatingGauge.
 * @param {DvtGauge} gauge
 * @class
 * @extends {DvtEventManager}
 * @constructor
 */
var DvtRatingGaugeEventManager = function(gauge) {
  this.Init(gauge.getCtx(), gauge.__dispatchEvent, gauge);
  this._gauge = gauge;
};

DvtObj.createSubclass(DvtRatingGaugeEventManager, DvtGaugeEventManager, 'DvtRatingGaugeEventManager');


/**
 * @override
 */
DvtRatingGaugeEventManager.prototype.OnMouseOver = function(event) {
  // Only editable gauges
  if (this._gauge.getOptions()['readOnly'] === false) {
    var coords = this.GetRelativePosition(event.pageX, event.pageY);
    this._gauge.__processValueChangeStart(coords.x, coords.y);
    this.IsMouseEditing = true;
  }

  // Need to call the superclass here to support tooltips during hover.
  DvtRatingGaugeEventManager.superclass.OnMouseOver.call(this, event);
};


/**
 * @override
 */
DvtRatingGaugeEventManager.prototype.OnMouseOut = function(event) {
  // Only editable gauges
  if (this._gauge.getOptions()['readOnly'] === false) {
    var coords = this.GetRelativePosition(event.pageX, event.pageY);
    this._gauge.__processHoverEnd(coords.x, coords.y);
    this.IsMouseEditing = false;
  }
  // To dismiss the tooltip if it's showing.
  DvtRatingGaugeEventManager.superclass.OnMouseOut.call(this, event);
};


/**
 * @override
 */
DvtRatingGaugeEventManager.prototype.OnMouseMove = function(event) {

  var coords = this.GetRelativePosition(event.pageX, event.pageY);
  if (this._gauge.getOptions()['readOnly'] === false && !this.IsMouseEditing &&
      this._gauge.getOptions()['value'] != this._gauge.GetValueAt(coords.x, coords.y)) {
    this.IsMouseEditing = true;
  }
  DvtRatingGaugeEventManager.superclass.OnMouseMove.call(this, event);
};

/**
 * @override
 */
DvtRatingGaugeEventManager.prototype.OnMouseDown = function(event) {
  // Want to directly call the OnMouseDown from DvtEventManager, so we don't go through the
  // default gauge behavior since it's already covered in OnMouseOver
  DvtGaugeEventManager.superclass.OnMouseDown.call(this, event);
};

/**
 * @override
 */
DvtRatingGaugeEventManager.prototype.ProcessKeyboardEvent = function(event) 
{
  // Need to clear out the flag to make rating gauge tooltips work with keyboarding
  this.IsMouseEditing = false;
  return DvtRatingGaugeEventManager.superclass.ProcessKeyboardEvent.call(this, event);
};

/**
 * @override
 */
DvtRatingGaugeEventManager.prototype.IsShowingTooltipWhileEditing = function() {
  return true;
};

  return D;
});
/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
define(['./DvtToolkit', './DvtPanZoomCanvas'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.
  // Map the D namespace to dvt, which is used to provide access across partitions.
  var D = dvt;
  
D.$DvtDiagramLayoutContext$$ = function $$DvtDiagramLayoutContext$$$($context$$77$$) {
  this.Init($context$$77$$)
};
(0,D.$goog$exportPath_$$)("DvtDiagramLayoutContext", D.$DvtDiagramLayoutContext$$);
D.$DvtObj$$.$createSubclass$(D.$DvtDiagramLayoutContext$$, D.$DvtObj$$, "DvtDiagramLayoutContext");
D.$DvtDiagramLayoutContext$$.prototype.Init = function $$DvtDiagramLayoutContext$$$$Init$($context$$78$$) {
  this.$_layout$ = $context$$78$$ ? $context$$78$$.$_layout$ : D.$JSCompiler_alias_NULL$$;
  this.$_layoutAttrs$ = $context$$78$$ ? $context$$78$$.$_layoutAttrs$ : D.$JSCompiler_alias_NULL$$;
  this.$_nodeCount$ = $context$$78$$ ? $context$$78$$.$_nodeCount$ : 0;
  this.$_linkCount$ = $context$$78$$ ? $context$$78$$.$_linkCount$ : 0;
  this.$_bLocaleR2L$ = $context$$78$$ ? $context$$78$$.$_bLocaleR2L$ : D.$JSCompiler_alias_FALSE$$;
  this.$_componentSize$ = $context$$78$$ ? $context$$78$$.$_componentSize$ : D.$JSCompiler_alias_NULL$$;
  this.$_viewport$ = $context$$78$$ ? $context$$78$$.$_viewport$ : D.$JSCompiler_alias_NULL$$;
  this.$_containerId$ = $context$$78$$ ? $context$$78$$.$_containerId$ : D.$JSCompiler_alias_NULL$$;
  this.$_containerPadding$ = $context$$78$$ ? $context$$78$$.$_containerPadding$ : D.$JSCompiler_alias_NULL$$;
  this.$_nodes$ = {};
  this.$_links$ = {};
  this.$_arNodes$ = [];
  this.$_arLinks$ = [];
  if($context$$78$$) {
    for(var $i$$242$$ = 0;$i$$242$$ < this.$_nodeCount$;$i$$242$$++) {
      var $linkCopy_nodeCopy$$ = new D.$DvtDiagramLayoutContextNode$$($context$$78$$.$_arNodes$[$i$$242$$]);
      this.$_arNodes$.push($linkCopy_nodeCopy$$);
      this.$_nodes$[$linkCopy_nodeCopy$$.getId()] = $linkCopy_nodeCopy$$
    }
    for(var $nodeId$$15$$ in $context$$78$$.$_nodes$) {
      this.$_nodes$[$nodeId$$15$$] || (this.$_nodes$[$nodeId$$15$$] = new D.$DvtDiagramLayoutContextNode$$($context$$78$$.$_nodes$[$nodeId$$15$$]))
    }
    for($i$$242$$ = 0;$i$$242$$ < this.$_linkCount$;$i$$242$$++) {
      $linkCopy_nodeCopy$$ = new D.$DvtDiagramLayoutContextLink$$($context$$78$$.$_arLinks$[$i$$242$$]), this.$_arLinks$.push($linkCopy_nodeCopy$$), this.$_links$[$linkCopy_nodeCopy$$.getId()] = $linkCopy_nodeCopy$$
    }
    for(var $linkId$$10$$ in $context$$78$$.$_links$) {
      this.$_links$[$linkId$$10$$] || (this.$_links$[$linkId$$10$$] = new D.$DvtDiagramLayoutContextLink$$($context$$78$$.$_links$[$linkId$$10$$]))
    }
  }
};
D.$DvtDiagramLayoutContext$$.prototype.$setLayout$ = (0,D.$JSCompiler_set$$)("$_layout$");
D.$DvtDiagramLayoutContext$$.prototype.$getLayout$ = (0,D.$JSCompiler_get$$)("$_layout$");
D.$DvtDiagramLayoutContext$$.prototype.getLayout = D.$DvtDiagramLayoutContext$$.prototype.$getLayout$;
D.$DvtDiagramLayoutContext$$.prototype.$setLayoutAttributes$ = (0,D.$JSCompiler_set$$)("$_layoutAttrs$");
D.$DvtDiagramLayoutContext$$.prototype.$getLayoutAttributes$ = (0,D.$JSCompiler_get$$)("$_layoutAttrs$");
D.$DvtDiagramLayoutContext$$.prototype.getLayoutAttributes = D.$DvtDiagramLayoutContext$$.prototype.$getLayoutAttributes$;
D.$DvtDiagramLayoutContext$$.prototype.$addNode$ = function $$DvtDiagramLayoutContext$$$$$addNode$$($node$$43$$) {
  this.$getNodeById$($node$$43$$.getId()) || (this.$_nodeCount$++, this.$_arNodes$.push($node$$43$$));
  this.$_nodes$[$node$$43$$.getId()] = $node$$43$$
};
D.$DvtDiagramLayoutContext$$.prototype.$getNodeById$ = function $$DvtDiagramLayoutContext$$$$$getNodeById$$($id$$48$$) {
  return this.$_nodes$[$id$$48$$]
};
D.$DvtDiagramLayoutContext$$.prototype.getNodeById = D.$DvtDiagramLayoutContext$$.prototype.$getNodeById$;
D.$DvtDiagramLayoutContext$$.prototype.$getNodeByIndex$ = function $$DvtDiagramLayoutContext$$$$$getNodeByIndex$$($index$$147$$) {
  return this.$_arNodes$[$index$$147$$]
};
D.$DvtDiagramLayoutContext$$.prototype.getNodeByIndex = D.$DvtDiagramLayoutContext$$.prototype.$getNodeByIndex$;
D.$DvtDiagramLayoutContext$$.prototype.$getNodeCount$ = (0,D.$JSCompiler_get$$)("$_nodeCount$");
D.$DvtDiagramLayoutContext$$.prototype.getNodeCount = D.$DvtDiagramLayoutContext$$.prototype.$getNodeCount$;
D.$JSCompiler_StaticMethods_addLink$$ = function $$JSCompiler_StaticMethods_addLink$$$($JSCompiler_StaticMethods_addLink$self$$, $link$$16$$) {
  $JSCompiler_StaticMethods_addLink$self$$.$getLinkById$($link$$16$$.getId()) || ($JSCompiler_StaticMethods_addLink$self$$.$_linkCount$++, $JSCompiler_StaticMethods_addLink$self$$.$_arLinks$.push($link$$16$$));
  $JSCompiler_StaticMethods_addLink$self$$.$_links$[$link$$16$$.getId()] = $link$$16$$
};
D.$DvtDiagramLayoutContext$$.prototype.$getLinkById$ = function $$DvtDiagramLayoutContext$$$$$getLinkById$$($id$$49$$) {
  return this.$_links$[$id$$49$$]
};
D.$DvtDiagramLayoutContext$$.prototype.getLinkById = D.$DvtDiagramLayoutContext$$.prototype.$getLinkById$;
D.$DvtDiagramLayoutContext$$.prototype.$getLinkByIndex$ = function $$DvtDiagramLayoutContext$$$$$getLinkByIndex$$($index$$148$$) {
  return this.$_arLinks$[$index$$148$$]
};
D.$DvtDiagramLayoutContext$$.prototype.getLinkByIndex = D.$DvtDiagramLayoutContext$$.prototype.$getLinkByIndex$;
D.$DvtDiagramLayoutContext$$.prototype.$getLinkCount$ = (0,D.$JSCompiler_get$$)("$_linkCount$");
D.$DvtDiagramLayoutContext$$.prototype.getLinkCount = D.$DvtDiagramLayoutContext$$.prototype.$getLinkCount$;
D.$DvtDiagramLayoutContext$$.prototype.$localToGlobal$ = function $$DvtDiagramLayoutContext$$$$$localToGlobal$$($point$$9$$, $node$$45$$) {
  for(var $containerId$$inline_2828_node$$inline_2826$$ = $node$$45$$, $offset$$inline_2827$$ = new D.$DvtDiagramPoint$$(0, 0);$containerId$$inline_2828_node$$inline_2826$$;) {
    if($offset$$inline_2827$$.x += $containerId$$inline_2828_node$$inline_2826$$.$getPosition$().x, $offset$$inline_2827$$.y += $containerId$$inline_2828_node$$inline_2826$$.$getPosition$().y, $containerId$$inline_2828_node$$inline_2826$$ = $containerId$$inline_2828_node$$inline_2826$$.$_containerId$) {
      if(($containerId$$inline_2828_node$$inline_2826$$ = this.$getNodeById$($containerId$$inline_2828_node$$inline_2826$$)) && $containerId$$inline_2828_node$$inline_2826$$.$isDisclosed$()) {
        var $containerPadding$$inline_2829$$ = $containerId$$inline_2828_node$$inline_2826$$.$getContainerPadding$();
        $containerPadding$$inline_2829$$ && ($offset$$inline_2827$$.x += $containerPadding$$inline_2829$$.left, $offset$$inline_2827$$.y += $containerPadding$$inline_2829$$.top)
      }
    }else {
      $containerId$$inline_2828_node$$inline_2826$$ = D.$JSCompiler_alias_NULL$$
    }
  }
  return new D.$DvtDiagramPoint$$($point$$9$$.x + $offset$$inline_2827$$.x, $point$$9$$.y + $offset$$inline_2827$$.y)
};
D.$DvtDiagramLayoutContext$$.prototype.localToGlobal = D.$DvtDiagramLayoutContext$$.prototype.$localToGlobal$;
D.$DvtDiagramLayoutContext$$.prototype.$isLocaleR2L$ = (0,D.$JSCompiler_get$$)("$_bLocaleR2L$");
D.$DvtDiagramLayoutContext$$.prototype.isLocaleR2L = D.$DvtDiagramLayoutContext$$.prototype.$isLocaleR2L$;
D.$DvtDiagramLayoutContext$$.prototype.$getComponentSize$ = (0,D.$JSCompiler_get$$)("$_componentSize$");
D.$DvtDiagramLayoutContext$$.prototype.getComponentSize = D.$DvtDiagramLayoutContext$$.prototype.$getComponentSize$;
D.$DvtDiagramLayoutContext$$.prototype.$setViewport$ = (0,D.$JSCompiler_set$$)("$_viewport$");
D.$DvtDiagramLayoutContext$$.prototype.setViewport = D.$DvtDiagramLayoutContext$$.prototype.$setViewport$;
D.$DvtDiagramLayoutContext$$.prototype.$getViewport$ = (0,D.$JSCompiler_get$$)("$_viewport$");
D.$DvtDiagramLayoutContext$$.prototype.getViewport = D.$DvtDiagramLayoutContext$$.prototype.$getViewport$;
D.$DvtDiagramLayoutContext$$.prototype.$setContainerId$ = (0,D.$JSCompiler_set$$)("$_containerId$");
D.$DvtDiagramLayoutContext$$.prototype.$getContainerId$ = (0,D.$JSCompiler_get$$)("$_containerId$");
D.$DvtDiagramLayoutContext$$.prototype.getContainerId = D.$DvtDiagramLayoutContext$$.prototype.$getContainerId$;
D.$DvtDiagramLayoutContext$$.prototype.$setContainerPadding$ = function $$DvtDiagramLayoutContext$$$$$setContainerPadding$$($top$$13$$, $right$$7$$, $bottom$$7$$, $left$$12$$) {
  this.$_containerId$ && (this.$_containerPadding$ = {}, "number" === typeof $top$$13$$ || "string" === typeof $top$$13$$ || ($left$$12$$ = $top$$13$$.left, $right$$7$$ = $top$$13$$.right, $bottom$$7$$ = $top$$13$$.bottom, $top$$13$$ = $top$$13$$.top), this.$_containerPadding$.top = $top$$13$$, this.$_containerPadding$.right = $right$$7$$, this.$_containerPadding$.bottom = $bottom$$7$$, this.$_containerPadding$.left = $left$$12$$)
};
D.$DvtDiagramLayoutContext$$.prototype.setContainerPadding = D.$DvtDiagramLayoutContext$$.prototype.$setContainerPadding$;
D.$DvtDiagramLayoutContext$$.prototype.$getContainerPadding$ = (0,D.$JSCompiler_get$$)("$_containerPadding$");
D.$DvtDiagramLayoutContext$$.prototype.getContainerPadding = D.$DvtDiagramLayoutContext$$.prototype.$getContainerPadding$;
D.$DvtDiagramLayoutContext$$.prototype.$getCurrentViewport$ = (0,D.$JSCompiler_get$$)("$_currentViewport$");
D.$DvtDiagramLayoutContext$$.prototype.getCurrentViewport = D.$DvtDiagramLayoutContext$$.prototype.$getCurrentViewport$;
D.$DvtDiagramLayoutContextLink$$ = function $$DvtDiagramLayoutContextLink$$$($link$$17$$) {
  this.Init($link$$17$$)
};
(0,D.$goog$exportPath_$$)("DvtDiagramLayoutContextLink", D.$DvtDiagramLayoutContextLink$$);
D.$DvtObj$$.$createSubclass$(D.$DvtDiagramLayoutContextLink$$, D.$DvtObj$$, "DvtDiagramLayoutContextLink");
D.$DvtDiagramLayoutContextLink$$.prototype.Init = function $$DvtDiagramLayoutContextLink$$$$Init$($link$$18$$) {
  this.$_id$ = $link$$18$$ ? $link$$18$$.$_id$ : D.$JSCompiler_alias_NULL$$;
  this.$_startId$ = $link$$18$$ ? $link$$18$$.$_startId$ : D.$JSCompiler_alias_NULL$$;
  this.$_endId$ = $link$$18$$ ? $link$$18$$.$_endId$ : D.$JSCompiler_alias_NULL$$;
  this.$_points$ = $link$$18$$ ? $link$$18$$.$_points$ : D.$JSCompiler_alias_NULL$$;
  this.$_labelPosition$ = $link$$18$$ ? $link$$18$$.$_labelPosition$ : D.$JSCompiler_alias_NULL$$;
  this.$_labelBounds$ = $link$$18$$ ? $link$$18$$.$_labelBounds$ : D.$JSCompiler_alias_NULL$$;
  this.$_layoutAttrs$ = $link$$18$$ ? $link$$18$$.$_layoutAttrs$ : D.$JSCompiler_alias_NULL$$;
  this.$_startConnectorOffset$ = $link$$18$$ ? $link$$18$$.$_startConnectorOffset$ : 0;
  this.$_endConnectorOffset$ = $link$$18$$ ? $link$$18$$.$_endConnectorOffset$ : 0;
  this.$_linkWidth$ = $link$$18$$ ? $link$$18$$.$_linkWidth$ : 1;
  this.$_selected$ = $link$$18$$ ? $link$$18$$.$_selected$ : D.$JSCompiler_alias_FALSE$$;
  this.$_labelRotAngle$ = $link$$18$$ ? $link$$18$$.$_labelRotAngle$ : D.$JSCompiler_alias_NULL$$;
  this.$_labelRotPoint$ = $link$$18$$ ? $link$$18$$.$_labelRotPoint$ : D.$JSCompiler_alias_NULL$$;
  this.$_bPromoted$ = $link$$18$$ ? $link$$18$$.$_bPromoted$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtDiagramLayoutContextLink$$.prototype.setId = (0,D.$JSCompiler_set$$)("$_id$");
D.$DvtDiagramLayoutContextLink$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtDiagramLayoutContextLink$$.prototype.getId = D.$DvtDiagramLayoutContextLink$$.prototype.getId;
D.$DvtDiagramLayoutContextLink$$.prototype.$setStartId$ = (0,D.$JSCompiler_set$$)("$_startId$");
D.$DvtDiagramLayoutContextLink$$.prototype.$getStartId$ = (0,D.$JSCompiler_get$$)("$_startId$");
D.$DvtDiagramLayoutContextLink$$.prototype.getStartId = D.$DvtDiagramLayoutContextLink$$.prototype.$getStartId$;
D.$DvtDiagramLayoutContextLink$$.prototype.$setEndId$ = (0,D.$JSCompiler_set$$)("$_endId$");
D.$DvtDiagramLayoutContextLink$$.prototype.$getEndId$ = (0,D.$JSCompiler_get$$)("$_endId$");
D.$DvtDiagramLayoutContextLink$$.prototype.getEndId = D.$DvtDiagramLayoutContextLink$$.prototype.$getEndId$;
D.$DvtDiagramLayoutContextLink$$.prototype.$setPoints$ = function $$DvtDiagramLayoutContextLink$$$$$setPoints$$($points$$18$$) {
  this.$_points$ = "string" == typeof $points$$18$$ ? D.$DvtPathUtils$$.$createPathArray$($points$$18$$) : $points$$18$$
};
D.$DvtDiagramLayoutContextLink$$.prototype.setPoints = D.$DvtDiagramLayoutContextLink$$.prototype.$setPoints$;
D.$DvtDiagramLayoutContextLink$$.prototype.$getPoints$ = (0,D.$JSCompiler_get$$)("$_points$");
D.$DvtDiagramLayoutContextLink$$.prototype.getPoints = D.$DvtDiagramLayoutContextLink$$.prototype.$getPoints$;
D.$DvtDiagramLayoutContextLink$$.prototype.$setLabelPosition$ = (0,D.$JSCompiler_set$$)("$_labelPosition$");
D.$DvtDiagramLayoutContextLink$$.prototype.setLabelPosition = D.$DvtDiagramLayoutContextLink$$.prototype.$setLabelPosition$;
D.$DvtDiagramLayoutContextLink$$.prototype.$getLabelPosition$ = (0,D.$JSCompiler_get$$)("$_labelPosition$");
D.$DvtDiagramLayoutContextLink$$.prototype.getLabelPosition = D.$DvtDiagramLayoutContextLink$$.prototype.$getLabelPosition$;
D.$DvtDiagramLayoutContextLink$$.prototype.$setLabelBounds$ = (0,D.$JSCompiler_set$$)("$_labelBounds$");
D.$DvtDiagramLayoutContextLink$$.prototype.$getLabelBounds$ = (0,D.$JSCompiler_get$$)("$_labelBounds$");
D.$DvtDiagramLayoutContextLink$$.prototype.getLabelBounds = D.$DvtDiagramLayoutContextLink$$.prototype.$getLabelBounds$;
D.$DvtDiagramLayoutContextLink$$.prototype.$getStartConnectorOffset$ = (0,D.$JSCompiler_get$$)("$_startConnectorOffset$");
D.$DvtDiagramLayoutContextLink$$.prototype.getStartConnectorOffset = D.$DvtDiagramLayoutContextLink$$.prototype.$getStartConnectorOffset$;
D.$DvtDiagramLayoutContextLink$$.prototype.$getEndConnectorOffset$ = (0,D.$JSCompiler_get$$)("$_endConnectorOffset$");
D.$DvtDiagramLayoutContextLink$$.prototype.getEndConnectorOffset = D.$DvtDiagramLayoutContextLink$$.prototype.$getEndConnectorOffset$;
D.$DvtDiagramLayoutContextLink$$.prototype.$setLinkWidth$ = (0,D.$JSCompiler_set$$)("$_linkWidth$");
D.$DvtDiagramLayoutContextLink$$.prototype.$getLinkWidth$ = (0,D.$JSCompiler_get$$)("$_linkWidth$");
D.$DvtDiagramLayoutContextLink$$.prototype.getLinkWidth = D.$DvtDiagramLayoutContextLink$$.prototype.$getLinkWidth$;
D.$DvtDiagramLayoutContextLink$$.prototype.$setLayoutAttributes$ = (0,D.$JSCompiler_set$$)("$_layoutAttrs$");
D.$DvtDiagramLayoutContextLink$$.prototype.$getLayoutAttributes$ = (0,D.$JSCompiler_get$$)("$_layoutAttrs$");
D.$DvtDiagramLayoutContextLink$$.prototype.getLayoutAttributes = D.$DvtDiagramLayoutContextLink$$.prototype.$getLayoutAttributes$;
D.$DvtDiagramLayoutContextLink$$.prototype.$setSelected$ = (0,D.$JSCompiler_set$$)("$_selected$");
D.$DvtDiagramLayoutContextLink$$.prototype.$getSelected$ = (0,D.$JSCompiler_get$$)("$_selected$");
D.$DvtDiagramLayoutContextLink$$.prototype.getSelected = D.$DvtDiagramLayoutContextLink$$.prototype.$getSelected$;
D.$DvtDiagramLayoutContextLink$$.prototype.$setLabelRotationAngle$ = (0,D.$JSCompiler_set$$)("$_labelRotAngle$");
D.$DvtDiagramLayoutContextLink$$.prototype.setLabelRotationAngle = D.$DvtDiagramLayoutContextLink$$.prototype.$setLabelRotationAngle$;
D.$DvtDiagramLayoutContextLink$$.prototype.$getLabelRotationAngle$ = (0,D.$JSCompiler_get$$)("$_labelRotAngle$");
D.$DvtDiagramLayoutContextLink$$.prototype.getLabelRotationAngle = D.$DvtDiagramLayoutContextLink$$.prototype.$getLabelRotationAngle$;
D.$DvtDiagramLayoutContextLink$$.prototype.$setLabelRotationPoint$ = (0,D.$JSCompiler_set$$)("$_labelRotPoint$");
D.$DvtDiagramLayoutContextLink$$.prototype.setLabelRotationPoint = D.$DvtDiagramLayoutContextLink$$.prototype.$setLabelRotationPoint$;
D.$DvtDiagramLayoutContextLink$$.prototype.$getLabelRotationPoint$ = (0,D.$JSCompiler_get$$)("$_labelRotPoint$");
D.$DvtDiagramLayoutContextLink$$.prototype.getLabelRotationPoint = D.$DvtDiagramLayoutContextLink$$.prototype.$getLabelRotationPoint$;
D.$DvtDiagramLayoutContextLink$$.prototype.$setPromoted$ = (0,D.$JSCompiler_set$$)("$_bPromoted$");
D.$DvtDiagramLayoutContextLink$$.prototype.$isPromoted$ = (0,D.$JSCompiler_get$$)("$_bPromoted$");
D.$DvtDiagramLayoutContextNode$$ = function $$DvtDiagramLayoutContextNode$$$($node$$47$$) {
  this.Init($node$$47$$)
};
(0,D.$goog$exportPath_$$)("DvtDiagramLayoutContextNode", D.$DvtDiagramLayoutContextNode$$);
D.$DvtObj$$.$createSubclass$(D.$DvtDiagramLayoutContextNode$$, D.$DvtObj$$, "DvtDiagramLayoutContextNode");
D.$DvtDiagramLayoutContextNode$$.prototype.Init = function $$DvtDiagramLayoutContextNode$$$$Init$($node$$48$$) {
  this.$_id$ = $node$$48$$ ? $node$$48$$.$_id$ : D.$JSCompiler_alias_NULL$$;
  this.$_bounds$ = $node$$48$$ ? $node$$48$$.$_bounds$ : D.$JSCompiler_alias_NULL$$;
  this.$_contentBounds$ = $node$$48$$ ? $node$$48$$.$_contentBounds$ : D.$JSCompiler_alias_NULL$$;
  this.$_position$ = $node$$48$$ ? $node$$48$$.$_position$ : D.$JSCompiler_alias_NULL$$;
  this.$_labelPosition$ = $node$$48$$ ? $node$$48$$.$_labelPosition$ : D.$JSCompiler_alias_NULL$$;
  this.$_labelBounds$ = $node$$48$$ ? $node$$48$$.$_labelBounds$ : D.$JSCompiler_alias_NULL$$;
  this.$_layoutAttrs$ = $node$$48$$ ? $node$$48$$.$_layoutAttrs$ : D.$JSCompiler_alias_NULL$$;
  this.$_bReadOnly$ = $node$$48$$ ? $node$$48$$.$_bReadOnly$ : D.$JSCompiler_alias_FALSE$$;
  this.$_containerId$ = $node$$48$$ ? $node$$48$$.$_containerId$ : D.$JSCompiler_alias_NULL$$;
  this.$_selected$ = $node$$48$$ ? $node$$48$$.$_selected$ : D.$JSCompiler_alias_FALSE$$;
  this.$_labelRotAngle$ = $node$$48$$ ? $node$$48$$.$_labelRotAngle$ : D.$JSCompiler_alias_NULL$$;
  this.$_labelRotPoint$ = $node$$48$$ ? $node$$48$$.$_labelRotPoint$ : D.$JSCompiler_alias_NULL$$;
  this.$_containerPadding$ = $node$$48$$ ? $node$$48$$.$_containerPadding$ : D.$JSCompiler_alias_NULL$$;
  this.$_origBounds$ = $node$$48$$ ? $node$$48$$.$_origBounds$ : D.$JSCompiler_alias_NULL$$;
  this.$_origContentBounds$ = $node$$48$$ ? $node$$48$$.$_origContentBounds$ : D.$JSCompiler_alias_NULL$$;
  this.$_bDisclosed$ = $node$$48$$ ? $node$$48$$.$_bDisclosed$ : D.$JSCompiler_alias_FALSE$$
};
D.$DvtDiagramLayoutContextNode$$.prototype.setId = (0,D.$JSCompiler_set$$)("$_id$");
D.$DvtDiagramLayoutContextNode$$.prototype.getId = (0,D.$JSCompiler_get$$)("$_id$");
D.$DvtDiagramLayoutContextNode$$.prototype.getId = D.$DvtDiagramLayoutContextNode$$.prototype.getId;
D.$DvtDiagramLayoutContextNode$$.prototype.$setBounds$ = function $$DvtDiagramLayoutContextNode$$$$$setBounds$$($bounds$$23$$) {
  this.$_origBounds$ = this.$_bounds$ = $bounds$$23$$
};
D.$DvtDiagramLayoutContextNode$$.prototype.$getBounds$ = (0,D.$JSCompiler_get$$)("$_bounds$");
D.$DvtDiagramLayoutContextNode$$.prototype.getBounds = D.$DvtDiagramLayoutContextNode$$.prototype.$getBounds$;
D.$DvtDiagramLayoutContextNode$$.prototype.$getContentBounds$ = (0,D.$JSCompiler_get$$)("$_contentBounds$");
D.$DvtDiagramLayoutContextNode$$.prototype.getContentBounds = D.$DvtDiagramLayoutContextNode$$.prototype.$getContentBounds$;
D.$DvtDiagramLayoutContextNode$$.prototype.$setPosition$ = (0,D.$JSCompiler_set$$)("$_position$");
D.$DvtDiagramLayoutContextNode$$.prototype.setPosition = D.$DvtDiagramLayoutContextNode$$.prototype.$setPosition$;
D.$DvtDiagramLayoutContextNode$$.prototype.$getPosition$ = (0,D.$JSCompiler_get$$)("$_position$");
D.$DvtDiagramLayoutContextNode$$.prototype.getPosition = D.$DvtDiagramLayoutContextNode$$.prototype.$getPosition$;
D.$DvtDiagramLayoutContextNode$$.prototype.$setLabelPosition$ = (0,D.$JSCompiler_set$$)("$_labelPosition$");
D.$DvtDiagramLayoutContextNode$$.prototype.setLabelPosition = D.$DvtDiagramLayoutContextNode$$.prototype.$setLabelPosition$;
D.$DvtDiagramLayoutContextNode$$.prototype.$getLabelPosition$ = (0,D.$JSCompiler_get$$)("$_labelPosition$");
D.$DvtDiagramLayoutContextNode$$.prototype.getLabelPosition = D.$DvtDiagramLayoutContextNode$$.prototype.$getLabelPosition$;
D.$DvtDiagramLayoutContextNode$$.prototype.$setLabelBounds$ = (0,D.$JSCompiler_set$$)("$_labelBounds$");
D.$DvtDiagramLayoutContextNode$$.prototype.$getLabelBounds$ = (0,D.$JSCompiler_get$$)("$_labelBounds$");
D.$DvtDiagramLayoutContextNode$$.prototype.getLabelBounds = D.$DvtDiagramLayoutContextNode$$.prototype.$getLabelBounds$;
D.$DvtDiagramLayoutContextNode$$.prototype.$setLayoutAttributes$ = (0,D.$JSCompiler_set$$)("$_layoutAttrs$");
D.$DvtDiagramLayoutContextNode$$.prototype.$getLayoutAttributes$ = (0,D.$JSCompiler_get$$)("$_layoutAttrs$");
D.$DvtDiagramLayoutContextNode$$.prototype.getLayoutAttributes = D.$DvtDiagramLayoutContextNode$$.prototype.$getLayoutAttributes$;
D.$DvtDiagramLayoutContextNode$$.prototype.$setReadOnly$ = (0,D.$JSCompiler_set$$)("$_bReadOnly$");
D.$DvtDiagramLayoutContextNode$$.prototype.$isReadOnly$ = (0,D.$JSCompiler_get$$)("$_bReadOnly$");
D.$DvtDiagramLayoutContextNode$$.prototype.isReadOnly = D.$DvtDiagramLayoutContextNode$$.prototype.$isReadOnly$;
D.$DvtDiagramLayoutContextNode$$.prototype.$setContainerId$ = (0,D.$JSCompiler_set$$)("$_containerId$");
D.$DvtDiagramLayoutContextNode$$.prototype.$getContainerId$ = (0,D.$JSCompiler_get$$)("$_containerId$");
D.$DvtDiagramLayoutContextNode$$.prototype.getContainerId = D.$DvtDiagramLayoutContextNode$$.prototype.$getContainerId$;
D.$DvtDiagramLayoutContextNode$$.prototype.$setSelected$ = (0,D.$JSCompiler_set$$)("$_selected$");
D.$DvtDiagramLayoutContextNode$$.prototype.$getSelected$ = (0,D.$JSCompiler_get$$)("$_selected$");
D.$DvtDiagramLayoutContextNode$$.prototype.getSelected = D.$DvtDiagramLayoutContextNode$$.prototype.$getSelected$;
D.$DvtDiagramLayoutContextNode$$.prototype.$setLabelRotationAngle$ = (0,D.$JSCompiler_set$$)("$_labelRotAngle$");
D.$DvtDiagramLayoutContextNode$$.prototype.setLabelRotationAngle = D.$DvtDiagramLayoutContextNode$$.prototype.$setLabelRotationAngle$;
D.$DvtDiagramLayoutContextNode$$.prototype.$getLabelRotationAngle$ = (0,D.$JSCompiler_get$$)("$_labelRotAngle$");
D.$DvtDiagramLayoutContextNode$$.prototype.getLabelRotationAngle = D.$DvtDiagramLayoutContextNode$$.prototype.$getLabelRotationAngle$;
D.$DvtDiagramLayoutContextNode$$.prototype.$setLabelRotationPoint$ = (0,D.$JSCompiler_set$$)("$_labelRotPoint$");
D.$DvtDiagramLayoutContextNode$$.prototype.setLabelRotationPoint = D.$DvtDiagramLayoutContextNode$$.prototype.$setLabelRotationPoint$;
D.$DvtDiagramLayoutContextNode$$.prototype.$getLabelRotationPoint$ = (0,D.$JSCompiler_get$$)("$_labelRotPoint$");
D.$DvtDiagramLayoutContextNode$$.prototype.getLabelRotationPoint = D.$DvtDiagramLayoutContextNode$$.prototype.$getLabelRotationPoint$;
D.$DvtDiagramLayoutContextNode$$.prototype.$setContainerPadding$ = function $$DvtDiagramLayoutContextNode$$$$$setContainerPadding$$($top$$14$$, $right$$8$$, $bottom$$8$$, $left$$13$$) {
  this.$isDisclosed$() && (this.$_containerPadding$ = {}, "number" === typeof $top$$14$$ || "string" === typeof $top$$14$$ || ($left$$13$$ = $top$$14$$.left, $right$$8$$ = $top$$14$$.right, $bottom$$8$$ = $top$$14$$.bottom, $top$$14$$ = $top$$14$$.top), this.$_containerPadding$.top = $top$$14$$, this.$_containerPadding$.right = $right$$8$$, this.$_containerPadding$.bottom = $bottom$$8$$, this.$_containerPadding$.left = $left$$13$$, this.$_origBounds$ && (this.$_bounds$ = new D.$DvtDiagramRectangle$$(this.$_origBounds$.x, 
  this.$_origBounds$.y, this.$_origBounds$.w + $left$$13$$ + $right$$8$$, this.$_origBounds$.h + $top$$14$$ + $bottom$$8$$)), this.$_origContentBounds$ && (this.$_contentBounds$ = new D.$DvtDiagramRectangle$$(this.$_origContentBounds$.x, this.$_origContentBounds$.y, this.$_origContentBounds$.w + $left$$13$$ + $right$$8$$, this.$_origContentBounds$.h + $top$$14$$ + $bottom$$8$$)))
};
D.$DvtDiagramLayoutContextNode$$.prototype.setContainerPadding = D.$DvtDiagramLayoutContextNode$$.prototype.$setContainerPadding$;
D.$DvtDiagramLayoutContextNode$$.prototype.$getContainerPadding$ = (0,D.$JSCompiler_get$$)("$_containerPadding$");
D.$DvtDiagramLayoutContextNode$$.prototype.getContainerPadding = D.$DvtDiagramLayoutContextNode$$.prototype.$getContainerPadding$;
D.$DvtDiagramLayoutContextNode$$.prototype.$setDisclosed$ = (0,D.$JSCompiler_set$$)("$_bDisclosed$");
D.$DvtDiagramLayoutContextNode$$.prototype.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_bDisclosed$");
D.$DvtDiagramLayoutContextNode$$.prototype.isDisclosed = D.$DvtDiagramLayoutContextNode$$.prototype.$isDisclosed$;
D.$DvtDiagramPoint$$ = function $$DvtDiagramPoint$$$($x$$98$$, $y$$77$$) {
  this.Init($x$$98$$, $y$$77$$)
};
(0,D.$goog$exportPath_$$)("DvtDiagramPoint", D.$DvtDiagramPoint$$);
D.$DvtObj$$.$createSubclass$(D.$DvtDiagramPoint$$, D.$DvtObj$$, "DvtDiagramPoint");
D.$DvtDiagramPoint$$.prototype.Init = function $$DvtDiagramPoint$$$$Init$($x$$99$$, $y$$78$$) {
  this.x = $x$$99$$ === D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($x$$99$$) ? 0 : $x$$99$$;
  this.y = $y$$78$$ === D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($y$$78$$) ? 0 : $y$$78$$
};
D.$DvtDiagramRectangle$$ = function $$DvtDiagramRectangle$$$($x$$100$$, $y$$79$$, $w$$10$$, $h$$7$$) {
  this.Init($x$$100$$, $y$$79$$, $w$$10$$, $h$$7$$)
};
(0,D.$goog$exportPath_$$)("DvtDiagramRectangle", D.$DvtDiagramRectangle$$);
D.$DvtObj$$.$createSubclass$(D.$DvtDiagramRectangle$$, D.$DvtObj$$, "DvtDiagramRectangle");
D.$DvtDiagramRectangle$$.prototype.Init = function $$DvtDiagramRectangle$$$$Init$($x$$101$$, $y$$80$$, $w$$11$$, $h$$8$$) {
  this.x = $x$$101$$ === D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($x$$101$$) ? 0 : $x$$101$$;
  this.y = $y$$80$$ === D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($y$$80$$) ? 0 : $y$$80$$;
  this.w = $w$$11$$ === D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($w$$11$$) ? 0 : $w$$11$$;
  this.h = $h$$8$$ === D.$JSCompiler_alias_NULL$$ || (0,window.isNaN)($h$$8$$) ? 0 : $h$$8$$
};
D.$DvtBaseDiagram$$ = function $$DvtBaseDiagram$$$($context$$65$$, $callback$$45$$, $callbackObj$$10$$) {
  this.Init($context$$65$$, $callback$$45$$, $callbackObj$$10$$)
};
(0,D.$goog$exportPath_$$)("DvtBaseDiagram", D.$DvtBaseDiagram$$);
D.$DvtObj$$.$createSubclass$(D.$DvtBaseDiagram$$, D.$DvtPanZoomComponent$$, "DvtBaseDiagram");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseDiagram$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$66$$, $callback$$46$$, $callbackObj$$11$$) {
  D.$DvtBaseDiagram$$.$superclass$.Init.call(this, $context$$66$$, $callback$$46$$, $callbackObj$$11$$);
  this.$getCtx$().$_stage$.$getElem$().setAttributeNS(D.$JSCompiler_alias_NULL$$, "text-rendering", "geometricPrecision");
  this.$_layoutOffset$;
  this.$_layoutViewportContainerId$ = this.$_layoutViewport$ = D.$JSCompiler_alias_NULL$$;
  this.$_initAnim$;
  this.$_bInitAnimEnabled$ = D.$JSCompiler_alias_TRUE$$;
  this.$_linksPane$ = new D.$DvtContainer$$($context$$66$$);
  this.$_nodesPane$ = new D.$DvtContainer$$($context$$66$$);
  this.$_topPane$ = new D.$DvtContainer$$($context$$66$$);
  this.$_animationDuration$ = 0.5;
  this.$InitializeZoomLimits$()
};
D.$JSCompiler_prototypeAlias$$.$InitComponentInternal$ = function $$JSCompiler_prototypeAlias$$$$InitComponentInternal$$() {
  var $pzc$$ = this.$_panZoomCanvas$;
  $pzc$$.$setMinZoom$(this.$getMinZoom$());
  $pzc$$.$setMaxZoom$(this.$getMaxZoom$());
  $pzc$$.$setAnimationDuration$(this.$getAnimationDuration$());
  $pzc$$.$_contentPane$.$addChild$(this.$_linksPane$);
  $pzc$$.$_contentPane$.$addChild$(this.$_nodesPane$);
  $pzc$$.$_contentPane$.$addChild$(this.$_topPane$)
};
D.$JSCompiler_prototypeAlias$$.$setAnimationDuration$ = function $$JSCompiler_prototypeAlias$$$$setAnimationDuration$$($animationDuration$$2$$) {
  this.$_animationDuration$ = $animationDuration$$2$$;
  this.$_panZoomCanvas$ && this.$_panZoomCanvas$.$setAnimationDuration$($animationDuration$$2$$)
};
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = (0,D.$JSCompiler_get$$)("$_animationDuration$");
D.$JSCompiler_prototypeAlias$$.$setMaxZoom$ = function $$JSCompiler_prototypeAlias$$$$setMaxZoom$$($maxZoom$$) {
  this.$_maxZoom$ = $maxZoom$$;
  this.$_panZoomCanvas$ && this.$_panZoomCanvas$.$setMaxZoom$($maxZoom$$)
};
D.$JSCompiler_prototypeAlias$$.$getMaxZoom$ = (0,D.$JSCompiler_get$$)("$_maxZoom$");
D.$JSCompiler_prototypeAlias$$.$setMinZoom$ = function $$JSCompiler_prototypeAlias$$$$setMinZoom$$($minZoom$$) {
  this.$_minZoom$ = $minZoom$$;
  this.$_panZoomCanvas$ && this.$_panZoomCanvas$.$setMinZoom$($minZoom$$)
};
D.$JSCompiler_prototypeAlias$$.$getMinZoom$ = (0,D.$JSCompiler_get$$)("$_minZoom$");
D.$JSCompiler_prototypeAlias$$.$InitializeZoomLimits$ = function $$JSCompiler_prototypeAlias$$$$InitializeZoomLimits$$() {
  this.$setMaxZoom$(2);
  this.$setMinZoom$(0)
};
D.$JSCompiler_prototypeAlias$$.$Render$ = function $$JSCompiler_prototypeAlias$$$$Render$$() {
  this.$_handledEventXml$ || (D.$DvtBaseDiagram$$.$superclass$.$Render$.call(this), this.$InitComponentInternal$(), this.$RenderComponentInternal$());
  this.$_handledEventXml$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$RenderComponentInternal$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$GetNodeById$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$GetLinkById$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$GetAllLinks$ = function $$JSCompiler_prototypeAlias$$$$GetAllLinks$$() {
  return[]
};
D.$JSCompiler_prototypeAlias$$.$GetAllNodes$ = function $$JSCompiler_prototypeAlias$$$$GetAllNodes$$() {
  return[]
};
D.$JSCompiler_prototypeAlias$$.$getNodeCount$ = function $$JSCompiler_prototypeAlias$$$$getNodeCount$$() {
  return this.$GetAllNodes$().length
};
D.$DvtBaseDiagram$$.prototype.getNodeCount = D.$DvtBaseDiagram$$.prototype.$getNodeCount$;
D.$DvtBaseDiagram$$.prototype.$getLinkCount$ = function $$DvtBaseDiagram$$$$$getLinkCount$$() {
  return this.$GetAllLinks$().length
};
D.$DvtBaseDiagram$$.prototype.getLinkCount = D.$DvtBaseDiagram$$.prototype.$getLinkCount$;
D.$JSCompiler_StaticMethods_RefreshEmptyText$$ = function $$JSCompiler_StaticMethods_RefreshEmptyText$$$($JSCompiler_StaticMethods_RefreshEmptyText$self$$, $emptyDiagram$$) {
  if($emptyDiagram$$ && $JSCompiler_StaticMethods_RefreshEmptyText$self$$.$getEmptyText$()) {
    $JSCompiler_StaticMethods_RefreshEmptyText$self$$.$_emptyTextDisplay$ ? ($JSCompiler_StaticMethods_RefreshEmptyText$self$$.$_emptyTextDisplay$.$setX$($JSCompiler_StaticMethods_RefreshEmptyText$self$$.$Width$ / 2), $JSCompiler_StaticMethods_RefreshEmptyText$self$$.$_emptyTextDisplay$.$setY$($JSCompiler_StaticMethods_RefreshEmptyText$self$$.$Height$ / 2), D.$DvtTextUtils$$.$fitText$($JSCompiler_StaticMethods_RefreshEmptyText$self$$.$_emptyTextDisplay$, $JSCompiler_StaticMethods_RefreshEmptyText$self$$.getWidth() - 
    2 * D.$DvtTextUtils$$.$EMPTY_TEXT_BUFFER$, window.Infinity, $JSCompiler_StaticMethods_RefreshEmptyText$self$$)) : $JSCompiler_StaticMethods_RefreshEmptyText$self$$.$_emptyTextDisplay$ = $JSCompiler_StaticMethods_RefreshEmptyText$self$$.$CreateEmptyText$($JSCompiler_StaticMethods_RefreshEmptyText$self$$.$getEmptyText$())
  }else {
    if($JSCompiler_StaticMethods_RefreshEmptyText$self$$.$_emptyTextDisplay$) {
      var $parent$$23$$ = $JSCompiler_StaticMethods_RefreshEmptyText$self$$.$_emptyTextDisplay$.getParent();
      $parent$$23$$ && $parent$$23$$.removeChild($JSCompiler_StaticMethods_RefreshEmptyText$self$$.$_emptyTextDisplay$);
      $JSCompiler_StaticMethods_RefreshEmptyText$self$$.$_emptyTextDisplay$ = D.$JSCompiler_alias_NULL$$
    }
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseDiagram$$.prototype;
D.$JSCompiler_prototypeAlias$$.$CreateEmptyText$ = function $$JSCompiler_prototypeAlias$$$$CreateEmptyText$$($text$$50$$) {
  var $options$$109$$ = this.$getOptions$();
  return D.$DvtTextUtils$$.$renderEmptyText$(this, $text$$50$$, new D.$DvtRectangle$$(0, 0, this.getWidth(), this.getHeight()), this.$__getEventManager$(), $options$$109$$._statusMessageStyle)
};
D.$JSCompiler_prototypeAlias$$.$getEmptyText$ = (0,D.$JSCompiler_get$$)("$_emptyText$");
D.$JSCompiler_prototypeAlias$$.$getInitAnim$ = (0,D.$JSCompiler_get$$)("$_initAnim$");
D.$JSCompiler_prototypeAlias$$.$getSelectionHandler$ = (0,D.$JSCompiler_get$$)("$_selectionHandler$");
D.$JSCompiler_prototypeAlias$$.$setSelectionMode$ = function $$JSCompiler_prototypeAlias$$$$setSelectionMode$$($selectionMode$$6$$) {
  this.$_selectionHandler$ = "single" == $selectionMode$$6$$ ? new D.$DvtSelectionHandler$$("s") : "multiple" == $selectionMode$$6$$ ? new D.$DvtSelectionHandler$$("m") : D.$JSCompiler_alias_NULL$$;
  this.$__getEventManager$().$setSelectionHandler$(this.$_selectionHandler$)
};
D.$JSCompiler_prototypeAlias$$.$getSelectionMode$ = function $$JSCompiler_prototypeAlias$$$$getSelectionMode$$() {
  return this.$_selectionHandler$ ? this.$_selectionHandler$.$getType$() : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$isSelectionSupported$ = function $$JSCompiler_prototypeAlias$$$$isSelectionSupported$$() {
  return this.$_selectionHandler$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$__getEventManager$ = (0,D.$JSCompiler_get$$)("$_eventHandler$");
D.$JSCompiler_StaticMethods_CreateEmptyLayoutContext$$ = function $$JSCompiler_StaticMethods_CreateEmptyLayoutContext$$$($JSCompiler_StaticMethods_CreateEmptyLayoutContext$self_compSize$$inline_2528$$) {
  var $layoutContext$$ = new D.$DvtDiagramLayoutContext$$, $bR2L$$inline_2525$$ = (0,D.$DvtAgent$isRightToLeft$$)($JSCompiler_StaticMethods_CreateEmptyLayoutContext$self_compSize$$inline_2528$$.$getCtx$());
  $layoutContext$$.$_bLocaleR2L$ = $bR2L$$inline_2525$$;
  $JSCompiler_StaticMethods_CreateEmptyLayoutContext$self_compSize$$inline_2528$$ = new D.$DvtDiagramRectangle$$(0, 0, $JSCompiler_StaticMethods_CreateEmptyLayoutContext$self_compSize$$inline_2528$$.getWidth(), $JSCompiler_StaticMethods_CreateEmptyLayoutContext$self_compSize$$inline_2528$$.getHeight());
  $layoutContext$$.$_componentSize$ = $JSCompiler_StaticMethods_CreateEmptyLayoutContext$self_compSize$$inline_2528$$;
  return $layoutContext$$
};
D.$DvtBaseDiagram$$.prototype.$CreateLayoutContextNode$ = function $$DvtBaseDiagram$$$$$CreateLayoutContextNode$$($node$$24$$, $layout$$1$$) {
  var $nc$$ = new D.$DvtDiagramLayoutContextNode$$;
  $nc$$.setId($node$$24$$.getId ? $node$$24$$.getId() : $node$$24$$.getData().getId());
  $nc$$.$setBounds$(D.$DvtDiagramLayoutUtils$$.$convertRectToDiagramRect$($node$$24$$.$getLayoutBounds$()));
  var $bounds$$inline_2531_obj$$inline_2534$$ = D.$DvtDiagramLayoutUtils$$.$convertRectToDiagramRect$($node$$24$$.$getContentBounds$());
  $nc$$.$_contentBounds$ = $bounds$$inline_2531_obj$$inline_2534$$;
  $nc$$.$_origContentBounds$ = $bounds$$inline_2531_obj$$inline_2534$$;
  $nc$$.$setLayoutAttributes$($node$$24$$.$getLayoutAttributes$($layout$$1$$));
  $nc$$.$setLabelBounds$(D.$DvtDiagramLayoutUtils$$.$convertRectToDiagramRect$($node$$24$$.$getLabelBounds$()));
  $nc$$.$setLabelPosition$(D.$DvtDiagramLayoutUtils$$.$convertPointToDiagramPoint$($node$$24$$.$getLabelPosition$()));
  $nc$$.$setSelected$(D.$JSCompiler_alias_TRUE$$ == $node$$24$$.$isSelected$());
  if($node$$24$$.$isDisclosed$() && ($nc$$.$setDisclosed$(D.$JSCompiler_alias_TRUE$$), $bounds$$inline_2531_obj$$inline_2534$$ = (0,D.$DvtBaseDiagram$getLayoutContainerPadding$$)($node$$24$$.$getContainerPadding$()), $nc$$.$isDisclosed$() && ($nc$$.$_containerPadding$ = $bounds$$inline_2531_obj$$inline_2534$$))) {
    $nc$$.$_origBounds$ && ($nc$$.$_origBounds$ = new D.$DvtDiagramRectangle$$($nc$$.$_origBounds$.x, $nc$$.$_origBounds$.y, $nc$$.$_origBounds$.w - ($bounds$$inline_2531_obj$$inline_2534$$.left + $bounds$$inline_2531_obj$$inline_2534$$.right), $nc$$.$_origBounds$.h - ($bounds$$inline_2531_obj$$inline_2534$$.top + $bounds$$inline_2531_obj$$inline_2534$$.bottom))), $nc$$.$_origContentBounds$ && ($nc$$.$_origContentBounds$ = new D.$DvtDiagramRectangle$$($nc$$.$_origContentBounds$.x, $nc$$.$_origContentBounds$.y, 
    $nc$$.$_origContentBounds$.w - ($bounds$$inline_2531_obj$$inline_2534$$.left + $bounds$$inline_2531_obj$$inline_2534$$.right), $nc$$.$_origContentBounds$.h - ($bounds$$inline_2531_obj$$inline_2534$$.top + $bounds$$inline_2531_obj$$inline_2534$$.bottom)))
  }
  $nc$$.$setContainerId$($node$$24$$.getData().$getGroupId$ ? $node$$24$$.getData().$_groupId$ : D.$JSCompiler_alias_NULL$$);
  return $nc$$
};
D.$DvtBaseDiagram$$.prototype.$CreateLayoutContextLink$ = function $$DvtBaseDiagram$$$$$CreateLayoutContextLink$$($link$$, $offset$$inline_2537_offset$$inline_2540_startId$$, $endId$$, $layout$$2$$) {
  var $lc$$ = new D.$DvtDiagramLayoutContextLink$$;
  $lc$$.setId($link$$.getId ? $link$$.getId() : $link$$.getData().getId());
  $lc$$.$setStartId$($offset$$inline_2537_offset$$inline_2540_startId$$ ? $offset$$inline_2537_offset$$inline_2540_startId$$ : $link$$.getData().$getStartId$());
  $lc$$.$setEndId$($endId$$ ? $endId$$ : $link$$.getData().$getEndId$());
  $lc$$.$setLayoutAttributes$($link$$.$getLayoutAttributes$($layout$$2$$));
  $lc$$.$setLabelBounds$(D.$DvtDiagramLayoutUtils$$.$convertRectToDiagramRect$($link$$.$getLabelBounds$()));
  $lc$$.$setLabelPosition$(D.$DvtDiagramLayoutUtils$$.$convertPointToDiagramPoint$($link$$.$getLabelPosition$()));
  $offset$$inline_2537_offset$$inline_2540_startId$$ = $link$$.$getStartConnectorOffset$();
  $lc$$.$_startConnectorOffset$ = $offset$$inline_2537_offset$$inline_2540_startId$$;
  $offset$$inline_2537_offset$$inline_2540_startId$$ = $link$$.$getEndConnectorOffset$();
  $lc$$.$_endConnectorOffset$ = $offset$$inline_2537_offset$$inline_2540_startId$$;
  $lc$$.$setLinkWidth$($link$$.$getLinkWidth$());
  $lc$$.$setSelected$(D.$JSCompiler_alias_TRUE$$ == $link$$.$isSelected$());
  $lc$$.$setPromoted$(D.$JSCompiler_alias_TRUE$$ == $link$$.$isPromoted$());
  return $lc$$
};
D.$DvtBaseDiagram$$.prototype.$ApplyLayoutContext$ = function $$DvtBaseDiagram$$$$$ApplyLayoutContext$$($layoutContext$$1$$, $animator$$2_layoutViewport$$, $bSaveOffset$$) {
  var $minx_topContainerPadding_tx$$1$$ = $layoutContext$$1$$.$getContainerPadding$();
  if($minx_topContainerPadding_tx$$1$$) {
    var $containerId_containerNode_lopt_miny_ty$$1$$ = $layoutContext$$1$$.$_containerId$;
    $containerId_containerNode_lopt_miny_ty$$1$$ && ($containerId_containerNode_lopt_miny_ty$$1$$ = this.$GetNodeById$($containerId_containerNode_lopt_miny_ty$$1$$)) && $containerId_containerNode_lopt_miny_ty$$1$$.$setContainerPadding$((0,D.$DvtBaseDiagram$getContainerPadding$$)($minx_topContainerPadding_tx$$1$$), $animator$$2_layoutViewport$$)
  }
  for(var $containerId_containerNode_lopt_miny_ty$$1$$ = $minx_topContainerPadding_tx$$1$$ = window.Number.MAX_VALUE, $li_ni$$ = 0;$li_ni$$ < $layoutContext$$1$$.$getNodeCount$();$li_ni$$++) {
    var $containerPadding_lc$$1_nc$$1_translatedPos$$ = $layoutContext$$1$$.$getNodeByIndex$($li_ni$$), $i$$232_labelBounds_node$$25_obj$$67$$ = this.$GetNodeById$($containerPadding_lc$$1_nc$$1_translatedPos$$.getId()), $controlPoints_labelPos_points$$14_pos$$14$$ = $containerPadding_lc$$1_nc$$1_translatedPos$$.$getPosition$();
    $controlPoints_labelPos_points$$14_pos$$14$$ && ($minx_topContainerPadding_tx$$1$$ = window.Math.min($minx_topContainerPadding_tx$$1$$, $controlPoints_labelPos_points$$14_pos$$14$$.x), $containerId_containerNode_lopt_miny_ty$$1$$ = window.Math.min($containerId_containerNode_lopt_miny_ty$$1$$, $controlPoints_labelPos_points$$14_pos$$14$$.y));
    $i$$232_labelBounds_node$$25_obj$$67$$ = $containerPadding_lc$$1_nc$$1_translatedPos$$.$getLabelBounds$();
    $controlPoints_labelPos_points$$14_pos$$14$$ = $containerPadding_lc$$1_nc$$1_translatedPos$$.$getLabelPosition$();
    $i$$232_labelBounds_node$$25_obj$$67$$ && $controlPoints_labelPos_points$$14_pos$$14$$ && ($minx_topContainerPadding_tx$$1$$ = window.Math.min($minx_topContainerPadding_tx$$1$$, $controlPoints_labelPos_points$$14_pos$$14$$.x + $i$$232_labelBounds_node$$25_obj$$67$$.x), $containerId_containerNode_lopt_miny_ty$$1$$ = window.Math.min($containerId_containerNode_lopt_miny_ty$$1$$, $controlPoints_labelPos_points$$14_pos$$14$$.y + $i$$232_labelBounds_node$$25_obj$$67$$.y))
  }
  for($li_ni$$ = 0;$li_ni$$ < $layoutContext$$1$$.$getLinkCount$();$li_ni$$++) {
    var $containerPadding_lc$$1_nc$$1_translatedPos$$ = $layoutContext$$1$$.$getLinkByIndex$($li_ni$$), $link$$1$$ = this.$GetLinkById$($containerPadding_lc$$1_nc$$1_translatedPos$$.getId());
    if($controlPoints_labelPos_points$$14_pos$$14$$ = $containerPadding_lc$$1_nc$$1_translatedPos$$.$getPoints$()) {
      $controlPoints_labelPos_points$$14_pos$$14$$ = D.$DvtDiagramLinkUtils$$.$GetControlPoints$($controlPoints_labelPos_points$$14_pos$$14$$);
      for($i$$232_labelBounds_node$$25_obj$$67$$ = 0;$i$$232_labelBounds_node$$25_obj$$67$$ < $controlPoints_labelPos_points$$14_pos$$14$$.length;$i$$232_labelBounds_node$$25_obj$$67$$++) {
        var $controlPoint_labelRotAngle_nodeLabelPos$$ = $controlPoints_labelPos_points$$14_pos$$14$$[$i$$232_labelBounds_node$$25_obj$$67$$], $minx_topContainerPadding_tx$$1$$ = window.Math.min($minx_topContainerPadding_tx$$1$$, $controlPoint_labelRotAngle_nodeLabelPos$$.x), $containerId_containerNode_lopt_miny_ty$$1$$ = window.Math.min($containerId_containerNode_lopt_miny_ty$$1$$, $controlPoint_labelRotAngle_nodeLabelPos$$.y)
      }
    }
    $i$$232_labelBounds_node$$25_obj$$67$$ = $containerPadding_lc$$1_nc$$1_translatedPos$$.$getLabelBounds$();
    $controlPoints_labelPos_points$$14_pos$$14$$ = $containerPadding_lc$$1_nc$$1_translatedPos$$.$getLabelPosition$();
    $i$$232_labelBounds_node$$25_obj$$67$$ && $controlPoints_labelPos_points$$14_pos$$14$$ && ($minx_topContainerPadding_tx$$1$$ = window.Math.min($minx_topContainerPadding_tx$$1$$, $controlPoints_labelPos_points$$14_pos$$14$$.x + $i$$232_labelBounds_node$$25_obj$$67$$.x), $containerId_containerNode_lopt_miny_ty$$1$$ = window.Math.min($containerId_containerNode_lopt_miny_ty$$1$$, $controlPoints_labelPos_points$$14_pos$$14$$.y + $i$$232_labelBounds_node$$25_obj$$67$$.y))
  }
  $containerId_containerNode_lopt_miny_ty$$1$$ = this.$CalcLayoutOffset$(-$minx_topContainerPadding_tx$$1$$, -$containerId_containerNode_lopt_miny_ty$$1$$);
  $minx_topContainerPadding_tx$$1$$ = $containerId_containerNode_lopt_miny_ty$$1$$.x;
  $containerId_containerNode_lopt_miny_ty$$1$$ = $containerId_containerNode_lopt_miny_ty$$1$$.y;
  for($li_ni$$ = 0;$li_ni$$ < $layoutContext$$1$$.$getNodeCount$();$li_ni$$++) {
    $containerPadding_lc$$1_nc$$1_translatedPos$$ = $layoutContext$$1$$.$getNodeByIndex$($li_ni$$);
    $i$$232_labelBounds_node$$25_obj$$67$$ = this.$GetNodeById$($containerPadding_lc$$1_nc$$1_translatedPos$$.getId());
    ($controlPoints_labelPos_points$$14_pos$$14$$ = $containerPadding_lc$$1_nc$$1_translatedPos$$.$getPosition$()) && $i$$232_labelBounds_node$$25_obj$$67$$.$SetPosition$($controlPoints_labelPos_points$$14_pos$$14$$.x + $minx_topContainerPadding_tx$$1$$, $controlPoints_labelPos_points$$14_pos$$14$$.y + $containerId_containerNode_lopt_miny_ty$$1$$, $animator$$2_layoutViewport$$);
    var $nodeLabelBounds$$ = $containerPadding_lc$$1_nc$$1_translatedPos$$.$getLabelBounds$(), $controlPoint_labelRotAngle_nodeLabelPos$$ = $containerPadding_lc$$1_nc$$1_translatedPos$$.$getLabelPosition$();
    if($nodeLabelBounds$$ && $controlPoint_labelRotAngle_nodeLabelPos$$) {
      var $controlPoints_labelPos_points$$14_pos$$14$$ = new D.$DvtPoint$$($controlPoint_labelRotAngle_nodeLabelPos$$.x - $controlPoints_labelPos_points$$14_pos$$14$$.x, $controlPoint_labelRotAngle_nodeLabelPos$$.y - $controlPoints_labelPos_points$$14_pos$$14$$.y), $controlPoint_labelRotAngle_nodeLabelPos$$ = $containerPadding_lc$$1_nc$$1_translatedPos$$.$_labelRotAngle$, $labelRotPoint$$ = D.$DvtDiagramLayoutUtils$$.$convertDiagramPointToPoint$($containerPadding_lc$$1_nc$$1_translatedPos$$.$_labelRotPoint$);
      $animator$$2_layoutViewport$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$2_layoutViewport$$, "typeRectangle", $i$$232_labelBounds_node$$25_obj$$67$$, $i$$232_labelBounds_node$$25_obj$$67$$.$getLabelBounds$, $i$$232_labelBounds_node$$25_obj$$67$$.$setLabelBounds$, $nodeLabelBounds$$), $i$$232_labelBounds_node$$25_obj$$67$$.$getLabelPosition$() ? (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$2_layoutViewport$$, "typePoint", $i$$232_labelBounds_node$$25_obj$$67$$, $i$$232_labelBounds_node$$25_obj$$67$$.$getLabelPosition$, 
      $i$$232_labelBounds_node$$25_obj$$67$$.$setLabelPosition$, $controlPoints_labelPos_points$$14_pos$$14$$) : $i$$232_labelBounds_node$$25_obj$$67$$.$setLabelPosition$($controlPoints_labelPos_points$$14_pos$$14$$), $controlPoint_labelRotAngle_nodeLabelPos$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$2_layoutViewport$$, "typeNumber", $i$$232_labelBounds_node$$25_obj$$67$$, $i$$232_labelBounds_node$$25_obj$$67$$.$getLabelRotationAngle$, $i$$232_labelBounds_node$$25_obj$$67$$.$setLabelRotationAngle$, 
      $controlPoint_labelRotAngle_nodeLabelPos$$), $labelRotPoint$$ && ($i$$232_labelBounds_node$$25_obj$$67$$.$_labelRotPoint$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$2_layoutViewport$$, "typePoint", $i$$232_labelBounds_node$$25_obj$$67$$, $i$$232_labelBounds_node$$25_obj$$67$$.$getLabelRotationPoint$, $i$$232_labelBounds_node$$25_obj$$67$$.$setLabelRotationPoint$, $labelRotPoint$$) : $i$$232_labelBounds_node$$25_obj$$67$$.$setLabelRotationPoint$($labelRotPoint$$))) : ($i$$232_labelBounds_node$$25_obj$$67$$.$setLabelBounds$($nodeLabelBounds$$), 
      $i$$232_labelBounds_node$$25_obj$$67$$.$setLabelPosition$($controlPoints_labelPos_points$$14_pos$$14$$), $controlPoint_labelRotAngle_nodeLabelPos$$ != D.$JSCompiler_alias_NULL$$ && $i$$232_labelBounds_node$$25_obj$$67$$.$setLabelRotationAngle$($controlPoint_labelRotAngle_nodeLabelPos$$), $labelRotPoint$$ && $i$$232_labelBounds_node$$25_obj$$67$$.$setLabelRotationPoint$($labelRotPoint$$))
    }
    $i$$232_labelBounds_node$$25_obj$$67$$.$isDisclosed$() && ($containerPadding_lc$$1_nc$$1_translatedPos$$ = $containerPadding_lc$$1_nc$$1_translatedPos$$.$getContainerPadding$()) && $i$$232_labelBounds_node$$25_obj$$67$$.$setContainerPadding$((0,D.$DvtBaseDiagram$getContainerPadding$$)($containerPadding_lc$$1_nc$$1_translatedPos$$), $animator$$2_layoutViewport$$)
  }
  if(!this.$_bCrossedZoomThreshold$) {
    for($li_ni$$ = 0;$li_ni$$ < $layoutContext$$1$$.$getLinkCount$();$li_ni$$++) {
      $containerPadding_lc$$1_nc$$1_translatedPos$$ = $layoutContext$$1$$.$getLinkByIndex$($li_ni$$);
      $link$$1$$ = this.$GetLinkById$($containerPadding_lc$$1_nc$$1_translatedPos$$.getId());
      if($controlPoints_labelPos_points$$14_pos$$14$$ = $containerPadding_lc$$1_nc$$1_translatedPos$$.$getPoints$()) {
        0 < $controlPoints_labelPos_points$$14_pos$$14$$.length && !(0,window.isNaN)($controlPoints_labelPos_points$$14_pos$$14$$[0]) && ($controlPoints_labelPos_points$$14_pos$$14$$ = D.$DvtDiagramLinkUtils$$.$ConvertToPath$($controlPoints_labelPos_points$$14_pos$$14$$));
        for(var $translatedPoints$$ = [], $i$$232_labelBounds_node$$25_obj$$67$$ = 0;$i$$232_labelBounds_node$$25_obj$$67$$ < $controlPoints_labelPos_points$$14_pos$$14$$.length;) {
          (0,window.isNaN)($controlPoints_labelPos_points$$14_pos$$14$$[$i$$232_labelBounds_node$$25_obj$$67$$]) ? ($translatedPoints$$.push($controlPoints_labelPos_points$$14_pos$$14$$[$i$$232_labelBounds_node$$25_obj$$67$$]), $i$$232_labelBounds_node$$25_obj$$67$$++) : ($translatedPoints$$.push($controlPoints_labelPos_points$$14_pos$$14$$[$i$$232_labelBounds_node$$25_obj$$67$$] + $minx_topContainerPadding_tx$$1$$), $translatedPoints$$.push($controlPoints_labelPos_points$$14_pos$$14$$[$i$$232_labelBounds_node$$25_obj$$67$$ + 
          1] + $containerId_containerNode_lopt_miny_ty$$1$$), $i$$232_labelBounds_node$$25_obj$$67$$ += 2)
        }
        $animator$$2_layoutViewport$$ && $link$$1$$.$getPoints$() ? 0 < $translatedPoints$$.length && (0,window.isNaN)($translatedPoints$$[0]) ? ($i$$232_labelBounds_node$$25_obj$$67$$ = D.$DvtShapeAnimationUtils$$.$getAssimilatedPaths$($link$$1$$.$getPoints$(), $translatedPoints$$), $link$$1$$.$setPoints$($i$$232_labelBounds_node$$25_obj$$67$$.$updatedOldPath$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$2_layoutViewport$$, "typePath", $link$$1$$, $link$$1$$.$getPoints$, $link$$1$$.$setPoints$, 
        $i$$232_labelBounds_node$$25_obj$$67$$.$updatedNewPath$), (0,D.$DvtPlayable$appendOnEnd$$)($animator$$2_layoutViewport$$, function() {
          $link$$1$$.$setPoints$($translatedPoints$$)
        })) : (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$2_layoutViewport$$, "typePolyline", $link$$1$$, $link$$1$$.$getPoints$, $link$$1$$.$setPoints$, $translatedPoints$$) : $link$$1$$.$setPoints$($translatedPoints$$)
      }
      $i$$232_labelBounds_node$$25_obj$$67$$ = D.$DvtDiagramLayoutUtils$$.$convertDiagramRectToRect$($containerPadding_lc$$1_nc$$1_translatedPos$$.$getLabelBounds$());
      $controlPoints_labelPos_points$$14_pos$$14$$ = $containerPadding_lc$$1_nc$$1_translatedPos$$.$getLabelPosition$();
      $controlPoint_labelRotAngle_nodeLabelPos$$ = $containerPadding_lc$$1_nc$$1_translatedPos$$.$_labelRotAngle$;
      $labelRotPoint$$ = D.$DvtDiagramLayoutUtils$$.$convertDiagramPointToPoint$($containerPadding_lc$$1_nc$$1_translatedPos$$.$_labelRotPoint$);
      $i$$232_labelBounds_node$$25_obj$$67$$ && $controlPoints_labelPos_points$$14_pos$$14$$ && ($containerPadding_lc$$1_nc$$1_translatedPos$$ = new D.$DvtPoint$$($controlPoints_labelPos_points$$14_pos$$14$$.x + $minx_topContainerPadding_tx$$1$$, $controlPoints_labelPos_points$$14_pos$$14$$.y + $containerId_containerNode_lopt_miny_ty$$1$$), $animator$$2_layoutViewport$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$2_layoutViewport$$, "typeRectangle", $link$$1$$, $link$$1$$.$getLabelBounds$, 
      $link$$1$$.$setLabelBounds$, $i$$232_labelBounds_node$$25_obj$$67$$), $link$$1$$.$getLabelPosition$() ? (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$2_layoutViewport$$, "typePoint", $link$$1$$, $link$$1$$.$getLabelPosition$, $link$$1$$.$setLabelPosition$, $containerPadding_lc$$1_nc$$1_translatedPos$$) : $link$$1$$.$setLabelPosition$($containerPadding_lc$$1_nc$$1_translatedPos$$), $controlPoint_labelRotAngle_nodeLabelPos$$ != D.$JSCompiler_alias_NULL$$ && (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$2_layoutViewport$$, 
      "typeNumber", $link$$1$$, $link$$1$$.$getLabelRotationAngle$, $link$$1$$.$setLabelRotationAngle$, $controlPoint_labelRotAngle_nodeLabelPos$$), $labelRotPoint$$ && ($link$$1$$.$_labelRotPoint$ ? (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$2_layoutViewport$$, "typePoint", $link$$1$$, $link$$1$$.$getLabelRotationPoint$, $link$$1$$.$setLabelRotationPoint$, $labelRotPoint$$) : $link$$1$$.$setLabelRotationPoint$($labelRotPoint$$))) : ($link$$1$$.$setLabelBounds$($i$$232_labelBounds_node$$25_obj$$67$$), 
      $link$$1$$.$setLabelPosition$($containerPadding_lc$$1_nc$$1_translatedPos$$), $controlPoint_labelRotAngle_nodeLabelPos$$ != D.$JSCompiler_alias_NULL$$ && $link$$1$$.$setLabelRotationAngle$($controlPoint_labelRotAngle_nodeLabelPos$$), $labelRotPoint$$ && $link$$1$$.$setLabelRotationPoint$($labelRotPoint$$)))
    }
  }
  if($animator$$2_layoutViewport$$ = $layoutContext$$1$$.$getViewport$()) {
    this.$_layoutViewport$ = new D.$DvtRectangle$$($animator$$2_layoutViewport$$.x + $minx_topContainerPadding_tx$$1$$, $animator$$2_layoutViewport$$.y + $containerId_containerNode_lopt_miny_ty$$1$$, $animator$$2_layoutViewport$$.w, $animator$$2_layoutViewport$$.h), this.$_layoutViewportContainerId$ = $layoutContext$$1$$.$_containerId$
  }
  $bSaveOffset$$ && (this.$_layoutOffset$ = new D.$DvtPoint$$($minx_topContainerPadding_tx$$1$$, $containerId_containerNode_lopt_miny_ty$$1$$))
};
D.$JSCompiler_StaticMethods_GetLayoutViewport$$ = function $$JSCompiler_StaticMethods_GetLayoutViewport$$$($JSCompiler_StaticMethods_GetLayoutViewport$self$$, $animator$$3$$) {
  var $viewport$$;
  if($JSCompiler_StaticMethods_GetLayoutViewport$self$$.$_layoutViewport$ && ($viewport$$ = new D.$DvtRectangle$$($JSCompiler_StaticMethods_GetLayoutViewport$self$$.$_layoutViewport$.x, $JSCompiler_StaticMethods_GetLayoutViewport$self$$.$_layoutViewport$.y, $JSCompiler_StaticMethods_GetLayoutViewport$self$$.$_layoutViewport$.$w$, $JSCompiler_StaticMethods_GetLayoutViewport$self$$.$_layoutViewport$.$h$), $JSCompiler_StaticMethods_GetLayoutViewport$self$$.$_layoutViewportContainerId$)) {
    for(var $containerId$$1_node$$26$$ = $JSCompiler_StaticMethods_GetLayoutViewport$self$$.$GetNodeById$($JSCompiler_StaticMethods_GetLayoutViewport$self$$.$_layoutViewportContainerId$);$containerId$$1_node$$26$$;) {
      var $tx$$2$$ = $containerId$$1_node$$26$$.$getTranslateX$(), $ty$$2$$ = $containerId$$1_node$$26$$.$getTranslateY$();
      if($animator$$3$$) {
        var $animTx$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$3$$, $containerId$$1_node$$26$$, $containerId$$1_node$$26$$.$getTranslateX$), $animTy$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$3$$, $containerId$$1_node$$26$$, $containerId$$1_node$$26$$.$getTranslateY$);
        if($animTx$$ || 0 == $animTx$$) {
          $tx$$2$$ = $animTx$$
        }
        if($animTy$$ || 0 == $animTy$$) {
          $ty$$2$$ = $animTy$$
        }
      }
      $viewport$$.x += $tx$$2$$;
      $viewport$$.y += $ty$$2$$;
      $containerId$$1_node$$26$$ = ($containerId$$1_node$$26$$ = $containerId$$1_node$$26$$.getData().$getGroupId$ ? $containerId$$1_node$$26$$.getData().$_groupId$ : D.$JSCompiler_alias_NULL$$) ? $JSCompiler_StaticMethods_GetLayoutViewport$self$$.$GetNodeById$($containerId$$1_node$$26$$) : D.$JSCompiler_alias_NULL$$
    }
  }
  return $viewport$$
};
D.$DvtBaseDiagram$$.prototype.$CalcLayoutOffset$ = function $$DvtBaseDiagram$$$$$CalcLayoutOffset$$($x$$91$$, $y$$70$$) {
  return new D.$DvtPoint$$($x$$91$$, $y$$70$$)
};
D.$DvtBaseDiagram$$.prototype.$AdjustMinZoom$ = function $$DvtBaseDiagram$$$$$AdjustMinZoom$$($animator$$4$$, $fitBounds$$) {
  if(0 == this.$_minZoom$) {
    var $panZoomCanvas$$ = this.$_panZoomCanvas$, $minZoomFitBounds$$ = $fitBounds$$ ? $fitBounds$$ : (0,D.$JSCompiler_StaticMethods_CalcViewBounds$$)(this, $animator$$4$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$), $minScale$$ = (0,D.$JSCompiler_StaticMethods_CalculateMinimumScale$$)(this, $minZoomFitBounds$$);
    $panZoomCanvas$$.$setMinZoom$(0.5 * window.Math.min($minScale$$, $panZoomCanvas$$.$getMaxZoom$()));
    return $minZoomFitBounds$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_CalculateMinimumScale$$ = function $$JSCompiler_StaticMethods_CalculateMinimumScale$$$($JSCompiler_StaticMethods_CalculateMinimumScale$self$$, $bounds$$10$$) {
  if(!$bounds$$10$$) {
    return 0
  }
  var $panZoomCanvas$$1$$ = $JSCompiler_StaticMethods_CalculateMinimumScale$self$$.$_panZoomCanvas$;
  return window.Math.min(($JSCompiler_StaticMethods_CalculateMinimumScale$self$$.$Width$ - 2 * $panZoomCanvas$$1$$.$_zoomToFitPadding$) / $bounds$$10$$.$w$, ($JSCompiler_StaticMethods_CalculateMinimumScale$self$$.$Height$ - 2 * $panZoomCanvas$$1$$.$_zoomToFitPadding$) / $bounds$$10$$.$h$)
};
D.$JSCompiler_StaticMethods_CalcViewBounds$$ = function $$JSCompiler_StaticMethods_CalcViewBounds$$$($JSCompiler_StaticMethods_CalcViewBounds$self$$, $animator$$6$$, $arNodeIds$$1_link$$2_linkId_linkParent$$, $arLinkIds$$1$$) {
  var $bounds$$11$$ = D.$JSCompiler_alias_NULL$$, $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$, $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$, $bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$, $contentPane$$ = $JSCompiler_StaticMethods_CalcViewBounds$self$$.$_panZoomCanvas$.$_contentPane$;
  $arNodeIds$$1_link$$2_linkId_linkParent$$ || ($arNodeIds$$1_link$$2_linkId_linkParent$$ = $JSCompiler_StaticMethods_CalcViewBounds$self$$.$GetAllNodes$());
  for(var $i$$233$$ = 0;$i$$233$$ < $arNodeIds$$1_link$$2_linkId_linkParent$$.length;$i$$233$$++) {
    if($dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$ = $arNodeIds$$1_link$$2_linkId_linkParent$$[$i$$233$$], ($JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$ = $JSCompiler_StaticMethods_CalcViewBounds$self$$.$GetNodeById$($dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$)) && $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.$_bVisible$ && 
    !$JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.$_bHiddenAncestor$) {
      var $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$ = $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$, $animator$$inline_2543_j$$inline_2561$$ = $animator$$6$$;
      $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$ = $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$.$getLayoutBounds$();
      $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$ = new D.$DvtRectangle$$($dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.x, $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.y, $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.$w$, $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.$h$);
      $bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$ = D.$JSCompiler_alias_NULL$$;
      $animator$$inline_2543_j$$inline_2561$$ && ($bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$inline_2543_j$$inline_2561$$, $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$, $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$.$getLabelPosition$));
      $bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$ || ($bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$ = $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$.$getLabelPosition$());
      var $labelPos$$inline_2563_labelRotAngle$$inline_2547_maxX$$inline_2557$$ = D.$JSCompiler_alias_NULL$$, $labelRotAngle$$inline_2564_labelRotPoint$$inline_2548_maxY$$inline_2558$$ = D.$JSCompiler_alias_NULL$$;
      $animator$$inline_2543_j$$inline_2561$$ && ($labelPos$$inline_2563_labelRotAngle$$inline_2547_maxX$$inline_2557$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$inline_2543_j$$inline_2561$$, $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$, $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$.$getLabelRotationAngle$), $labelRotAngle$$inline_2564_labelRotPoint$$inline_2548_maxY$$inline_2558$$ = 
      (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$inline_2543_j$$inline_2561$$, $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$, $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$.$getLabelRotationPoint$));
      $labelPos$$inline_2563_labelRotAngle$$inline_2547_maxX$$inline_2557$$ == D.$JSCompiler_alias_NULL$$ && ($labelPos$$inline_2563_labelRotAngle$$inline_2547_maxX$$inline_2557$$ = $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$.$_labelRotAngle$);
      $labelRotAngle$$inline_2564_labelRotPoint$$inline_2548_maxY$$inline_2558$$ || ($labelRotAngle$$inline_2564_labelRotPoint$$inline_2548_maxY$$inline_2558$$ = $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$.$_labelRotPoint$);
      $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$ = $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$.$getLabelBounds$();
      $bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$ && $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$ && ($labelPos$$inline_2563_labelRotAngle$$inline_2547_maxX$$inline_2557$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$ = (0,D.$DvtBaseDiagram$RotateBounds$$)($JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$, 
      $labelPos$$inline_2563_labelRotAngle$$inline_2547_maxX$$inline_2557$$, $labelRotAngle$$inline_2564_labelRotPoint$$inline_2548_maxY$$inline_2558$$)), $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$.x = window.Math.min($dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.x, $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$.x + $bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$.x), 
      $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$.y = window.Math.min($dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.y, $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$.y + $bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$.y), $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$.$w$ = 
      window.Math.max($dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.x + $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.$w$, $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$.x + $bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$.x + $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$.$w$) - 
      $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$.x, $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$.$h$ = window.Math.max($dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.y + $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.$h$, $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$.y + $bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$.y + 
      $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$.$h$) - $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$.y);
      $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$ = $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$;
      $bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$ = $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$ = D.$JSCompiler_alias_NULL$$;
      $animator$$6$$ && ($animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$6$$, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.$getTranslateX$), $bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$ = 
      (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$6$$, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.$getTranslateY$));
      $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$ == D.$JSCompiler_alias_NULL$$ && ($animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$ = $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.$getTranslateX$());
      $bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$ == D.$JSCompiler_alias_NULL$$ && ($bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$ = $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.$getTranslateY$());
      $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.x += $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$;
      $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.y += $bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$;
      if($animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$ = $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.getData().$getGroupId$ ? $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.getData().$_groupId$ : D.$JSCompiler_alias_NULL$$) {
        $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$ = $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.getParent(), $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$ = (0,D.$JSCompiler_StaticMethods_LocalToStage$$)(new D.$DvtPoint$$($dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.x, $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.y), 
        $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$, $animator$$6$$), $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$ = (0,D.$JSCompiler_StaticMethods_StageToLocal$$)($JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$, $contentPane$$, $animator$$6$$), $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$ = 
        (0,D.$JSCompiler_StaticMethods_LocalToStage$$)(new D.$DvtPoint$$($dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.x + $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.$w$, $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.y + $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.$h$), $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$, $animator$$6$$), $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$ = 
        (0,D.$JSCompiler_StaticMethods_StageToLocal$$)($animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$, $contentPane$$, $animator$$6$$), $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.x = $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.x, $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.y = $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.y, 
        $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.$w$ = $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$.x - $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.x, $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.$h$ = $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$.y - $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.y
      }
      $bounds$$11$$ ? ($JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$ = $bounds$$11$$.x, $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$ = $bounds$$11$$.y, $bounds$$11$$.x = window.Math.min($bounds$$11$$.x, $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.x), $bounds$$11$$.y = window.Math.min($bounds$$11$$.y, $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.y), 
      $bounds$$11$$.$w$ = window.Math.max($JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$ + $bounds$$11$$.$w$, $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.x + $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.$w$) - $bounds$$11$$.x, $bounds$$11$$.$h$ = window.Math.max($animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$ + $bounds$$11$$.$h$, $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.y + 
      $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.$h$) - $bounds$$11$$.y) : $bounds$$11$$ = $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$
    }
  }
  $arLinkIds$$1$$ || ($arLinkIds$$1$$ = $JSCompiler_StaticMethods_CalcViewBounds$self$$.$GetAllLinks$());
  for($i$$233$$ = 0;$i$$233$$ < $arLinkIds$$1$$.length;$i$$233$$++) {
    if($arNodeIds$$1_link$$2_linkId_linkParent$$ = $arLinkIds$$1$$[$i$$233$$], ($arNodeIds$$1_link$$2_linkId_linkParent$$ = $JSCompiler_StaticMethods_CalcViewBounds$self$$.$GetLinkById$($arNodeIds$$1_link$$2_linkId_linkParent$$)) && $arNodeIds$$1_link$$2_linkId_linkParent$$.$_bVisible$) {
      $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$ = $arNodeIds$$1_link$$2_linkId_linkParent$$;
      $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$ = $animator$$6$$;
      $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$ = new D.$DvtRectangle$$(window.Number.MAX_VALUE, window.Number.MAX_VALUE, -window.Number.MAX_VALUE, -window.Number.MAX_VALUE);
      $bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$ = D.$JSCompiler_alias_NULL$$;
      $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$ && ($bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.$getPoints$));
      $bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$ || ($bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$ = $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.$getPoints$());
      if($bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$) {
        $bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$ = D.$DvtDiagramLinkUtils$$.$GetControlPoints$($bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$);
        for(var $controlPoint$$inline_2556_minY$$inline_2560$$ = D.$JSCompiler_alias_VOID$$, $controlPoint$$inline_2556_minY$$inline_2560$$ = $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$ = $labelRotAngle$$inline_2564_labelRotPoint$$inline_2548_maxY$$inline_2558$$ = $labelPos$$inline_2563_labelRotAngle$$inline_2547_maxX$$inline_2557$$ = D.$JSCompiler_alias_VOID$$, $animator$$inline_2543_j$$inline_2561$$ = 0;$animator$$inline_2543_j$$inline_2561$$ < 
        $bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$.length;$animator$$inline_2543_j$$inline_2561$$++) {
          $controlPoint$$inline_2556_minY$$inline_2560$$ = $bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$[$animator$$inline_2543_j$$inline_2561$$], $labelPos$$inline_2563_labelRotAngle$$inline_2547_maxX$$inline_2557$$ = window.Math.max($dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.x + $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.$w$, $controlPoint$$inline_2556_minY$$inline_2560$$.x), $labelRotAngle$$inline_2564_labelRotPoint$$inline_2548_maxY$$inline_2558$$ = 
          window.Math.max($dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.y + $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.$h$, $controlPoint$$inline_2556_minY$$inline_2560$$.y), $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$ = window.Math.min($dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.x, $controlPoint$$inline_2556_minY$$inline_2560$$.x), $controlPoint$$inline_2556_minY$$inline_2560$$ = 
          window.Math.min($dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.y, $controlPoint$$inline_2556_minY$$inline_2560$$.y), $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.x = $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$, $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.y = $controlPoint$$inline_2556_minY$$inline_2560$$, $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.$w$ = 
          $labelPos$$inline_2563_labelRotAngle$$inline_2547_maxX$$inline_2557$$ - $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$, $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.$h$ = $labelRotAngle$$inline_2564_labelRotPoint$$inline_2548_maxY$$inline_2558$$ - $controlPoint$$inline_2556_minY$$inline_2560$$
        }
      }
      $bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$ = new D.$DvtRectangle$$($dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.x, $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.y, $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.$w$, $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.$h$);
      $labelPos$$inline_2563_labelRotAngle$$inline_2547_maxX$$inline_2557$$ = D.$JSCompiler_alias_NULL$$;
      $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$ && ($labelPos$$inline_2563_labelRotAngle$$inline_2547_maxX$$inline_2557$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.$getLabelPosition$));
      $labelPos$$inline_2563_labelRotAngle$$inline_2547_maxX$$inline_2557$$ == D.$JSCompiler_alias_NULL$$ && ($labelPos$$inline_2563_labelRotAngle$$inline_2547_maxX$$inline_2557$$ = $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.$getLabelPosition$());
      $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$ = $labelRotAngle$$inline_2564_labelRotPoint$$inline_2548_maxY$$inline_2558$$ = D.$JSCompiler_alias_NULL$$;
      $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$ && ($labelRotAngle$$inline_2564_labelRotPoint$$inline_2548_maxY$$inline_2558$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.$getLabelRotationAngle$), 
      $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.$getLabelRotationPoint$));
      $labelRotAngle$$inline_2564_labelRotPoint$$inline_2548_maxY$$inline_2558$$ == D.$JSCompiler_alias_NULL$$ && ($labelRotAngle$$inline_2564_labelRotPoint$$inline_2548_maxY$$inline_2558$$ = $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.$_labelRotAngle$);
      $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$ || ($JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$ = $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.$_labelRotPoint$);
      $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$ = $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.$getLabelBounds$();
      $labelPos$$inline_2563_labelRotAngle$$inline_2547_maxX$$inline_2557$$ && $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$ && ($labelRotAngle$$inline_2564_labelRotPoint$$inline_2548_maxY$$inline_2558$$ != D.$JSCompiler_alias_NULL$$ && ($JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$ = (0,D.$DvtBaseDiagram$RotateBounds$$)($JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$, 
      $labelRotAngle$$inline_2564_labelRotPoint$$inline_2548_maxY$$inline_2558$$, $JSCompiler_StaticMethods_GetNodeBounds$self$$inline_2542_labelBounds$$inline_2549_labelRotPoint$$inline_2565_minX$$inline_2559$$)), $bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$.x = window.Math.min($dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.x, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.x + 
      $labelPos$$inline_2563_labelRotAngle$$inline_2547_maxX$$inline_2557$$.x), $bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$.y = window.Math.min($dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.y, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.y + $labelPos$$inline_2563_labelRotAngle$$inline_2547_maxX$$inline_2557$$.y), $bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$.$w$ = 
      window.Math.max($dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.x + $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.$w$, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.x + $labelPos$$inline_2563_labelRotAngle$$inline_2547_maxX$$inline_2557$$.x + $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.$w$) - $bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$.x, 
      $bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$.$h$ = window.Math.max($dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.y + $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.$h$, $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.y + $labelPos$$inline_2563_labelRotAngle$$inline_2547_maxX$$inline_2557$$.y + $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.$h$) - 
      $bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$.y);
      $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$ = $bounds$$inline_2562_controlPoints$$inline_2555_labelPos$$inline_2546_points$$inline_2554_ty$$3$$;
      if($animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$ = $arNodeIds$$1_link$$2_linkId_linkParent$$.getData().$getGroupId$ ? $arNodeIds$$1_link$$2_linkId_linkParent$$.getData().$_groupId$ : D.$JSCompiler_alias_NULL$$) {
        $arNodeIds$$1_link$$2_linkId_linkParent$$ = $arNodeIds$$1_link$$2_linkId_linkParent$$.getParent(), $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$ = (0,D.$JSCompiler_StaticMethods_LocalToStage$$)(new D.$DvtPoint$$($dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.x, $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.y), $arNodeIds$$1_link$$2_linkId_linkParent$$, $animator$$6$$), $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$ = 
        (0,D.$JSCompiler_StaticMethods_StageToLocal$$)($JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$, $contentPane$$, $animator$$6$$), $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$ = (0,D.$JSCompiler_StaticMethods_LocalToStage$$)(new D.$DvtPoint$$($dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.x + $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.$w$, 
        $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.y + $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.$h$), $arNodeIds$$1_link$$2_linkId_linkParent$$, $animator$$6$$), $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$ = (0,D.$JSCompiler_StaticMethods_StageToLocal$$)($animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$, $contentPane$$, $animator$$6$$), $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.x = 
        $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.x, $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.y = $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.y, $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.$w$ = $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$.x - $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.x, 
        $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.$h$ = $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$.y - $JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$.y
      }
      $bounds$$11$$ ? ($JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$ = $bounds$$11$$.x, $animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$ = $bounds$$11$$.y, $bounds$$11$$.x = window.Math.min($bounds$$11$$.x, $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.x), $bounds$$11$$.y = window.Math.min($bounds$$11$$.y, $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.y), 
      $bounds$$11$$.$w$ = window.Math.max($JSCompiler_StaticMethods_GetLinkBounds$self$$inline_2551_bx_labelBounds$$inline_2566_localPoint1_node$$27_stagePoint1$$ + $bounds$$11$$.$w$, $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.x + $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.$w$) - $bounds$$11$$.x, $bounds$$11$$.$h$ = window.Math.max($animator$$inline_2552_bounds$$inline_2545_by_groupId_localPoint2_nodeParent_stagePoint2_tx$$3$$ + $bounds$$11$$.$h$, $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.y + 
      $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$.$h$) - $bounds$$11$$.y) : $bounds$$11$$ = $dims$$9_linkBounds$$inline_2553_nodeBounds$$inline_2544_nodeId$$
    }
  }
  return $bounds$$11$$
};
D.$DvtBaseDiagram$RotateBounds$$ = function $$DvtBaseDiagram$RotateBounds$$$($bottomRight_bounds$$12_minX$$1$$, $maxY$$3_rotAngle_tl$$, $minY$$3_rotPoint$$) {
  if($maxY$$3_rotAngle_tl$$ == D.$JSCompiler_alias_NULL$$ && !$minY$$3_rotPoint$$) {
    return $bottomRight_bounds$$12_minX$$1$$
  }
  var $br_topLeft$$ = new D.$DvtPoint$$($bottomRight_bounds$$12_minX$$1$$.x, $bottomRight_bounds$$12_minX$$1$$.y), $topRight_tr$$ = new D.$DvtPoint$$($bottomRight_bounds$$12_minX$$1$$.x + $bottomRight_bounds$$12_minX$$1$$.$w$, $bottomRight_bounds$$12_minX$$1$$.y), $bl_bottomLeft$$ = new D.$DvtPoint$$($bottomRight_bounds$$12_minX$$1$$.x, $bottomRight_bounds$$12_minX$$1$$.y + $bottomRight_bounds$$12_minX$$1$$.$h$);
  $bottomRight_bounds$$12_minX$$1$$ = new D.$DvtPoint$$($bottomRight_bounds$$12_minX$$1$$.x + $bottomRight_bounds$$12_minX$$1$$.$w$, $bottomRight_bounds$$12_minX$$1$$.y + $bottomRight_bounds$$12_minX$$1$$.$h$);
  var $mat$$2_maxX$$1$$ = new D.$DvtMatrix$$;
  $maxY$$3_rotAngle_tl$$ != D.$JSCompiler_alias_NULL$$ && ($minY$$3_rotPoint$$ && $mat$$2_maxX$$1$$.translate(-$minY$$3_rotPoint$$.x, -$minY$$3_rotPoint$$.y), $mat$$2_maxX$$1$$.rotate($maxY$$3_rotAngle_tl$$), $minY$$3_rotPoint$$ && $mat$$2_maxX$$1$$.translate($minY$$3_rotPoint$$.x, $minY$$3_rotPoint$$.y));
  $maxY$$3_rotAngle_tl$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($mat$$2_maxX$$1$$, $br_topLeft$$);
  $topRight_tr$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($mat$$2_maxX$$1$$, $topRight_tr$$);
  $bl_bottomLeft$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($mat$$2_maxX$$1$$, $bl_bottomLeft$$);
  $br_topLeft$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($mat$$2_maxX$$1$$, $bottomRight_bounds$$12_minX$$1$$);
  $bottomRight_bounds$$12_minX$$1$$ = window.Math.min(window.Math.min($maxY$$3_rotAngle_tl$$.x, $topRight_tr$$.x), window.Math.min($bl_bottomLeft$$.x, $br_topLeft$$.x));
  $mat$$2_maxX$$1$$ = window.Math.max(window.Math.max($maxY$$3_rotAngle_tl$$.x, $topRight_tr$$.x), window.Math.max($bl_bottomLeft$$.x, $br_topLeft$$.x));
  $minY$$3_rotPoint$$ = window.Math.min(window.Math.min($maxY$$3_rotAngle_tl$$.y, $topRight_tr$$.y), window.Math.min($bl_bottomLeft$$.y, $br_topLeft$$.y));
  $maxY$$3_rotAngle_tl$$ = window.Math.max(window.Math.max($maxY$$3_rotAngle_tl$$.y, $topRight_tr$$.y), window.Math.max($bl_bottomLeft$$.y, $br_topLeft$$.y));
  return new D.$DvtRectangle$$($bottomRight_bounds$$12_minX$$1$$, $minY$$3_rotPoint$$, $mat$$2_maxX$$1$$ - $bottomRight_bounds$$12_minX$$1$$, $maxY$$3_rotAngle_tl$$ - $minY$$3_rotPoint$$)
};
D.$JSCompiler_StaticMethods_StageToLocal$$ = function $$JSCompiler_StaticMethods_StageToLocal$$$($mat$$3_point$$5$$, $displayable$$12$$, $animator$$7$$) {
  for(var $pathToStage$$ = (0,D.$JSCompiler_StaticMethods_getPathToStage$$)($displayable$$12$$), $retPoint$$ = $mat$$3_point$$5$$, $i$$234$$ = $pathToStage$$.length - 1;0 <= $i$$234$$;$i$$234$$--) {
    $displayable$$12$$ = $pathToStage$$[$i$$234$$];
    $mat$$3_point$$5$$ = $displayable$$12$$.$getMatrix$().$clone$();
    var $tx$$4$$ = D.$JSCompiler_alias_NULL$$, $ty$$4$$ = D.$JSCompiler_alias_NULL$$;
    $animator$$7$$ && ($tx$$4$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$7$$, $displayable$$12$$, $displayable$$12$$.$getTranslateX$), $ty$$4$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$7$$, $displayable$$12$$, $displayable$$12$$.$getTranslateY$));
    $tx$$4$$ != D.$JSCompiler_alias_NULL$$ && ($mat$$3_point$$5$$.$_tx$ = $tx$$4$$);
    $ty$$4$$ != D.$JSCompiler_alias_NULL$$ && ($mat$$3_point$$5$$.$_ty$ = $ty$$4$$);
    $mat$$3_point$$5$$.$invert$();
    $retPoint$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($mat$$3_point$$5$$, $retPoint$$)
  }
  return $retPoint$$
};
D.$JSCompiler_StaticMethods_LocalToStage$$ = function $$JSCompiler_StaticMethods_LocalToStage$$$($mat$$4_point$$6$$, $displayable$$13$$, $animator$$8$$) {
  for(var $pathToStage$$1$$ = (0,D.$JSCompiler_StaticMethods_getPathToStage$$)($displayable$$13$$), $retPoint$$1$$ = $mat$$4_point$$6$$, $i$$235$$ = 0;$i$$235$$ < $pathToStage$$1$$.length;$i$$235$$++) {
    $displayable$$13$$ = $pathToStage$$1$$[$i$$235$$];
    $mat$$4_point$$6$$ = $displayable$$13$$.$getMatrix$().$clone$();
    var $tx$$5$$ = D.$JSCompiler_alias_NULL$$, $ty$$5$$ = D.$JSCompiler_alias_NULL$$;
    $animator$$8$$ && ($tx$$5$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$8$$, $displayable$$13$$, $displayable$$13$$.$getTranslateX$), $ty$$5$$ = (0,D.$JSCompiler_StaticMethods_getDestVal$$)($animator$$8$$, $displayable$$13$$, $displayable$$13$$.$getTranslateY$));
    $tx$$5$$ != D.$JSCompiler_alias_NULL$$ && ($mat$$4_point$$6$$.$_tx$ = $tx$$5$$);
    $ty$$5$$ != D.$JSCompiler_alias_NULL$$ && ($mat$$4_point$$6$$.$_ty$ = $ty$$5$$);
    $retPoint$$1$$ = (0,D.$JSCompiler_StaticMethods_transformPoint$$)($mat$$4_point$$6$$, $retPoint$$1$$)
  }
  return $retPoint$$1$$
};
D.$DvtBaseDiagram$$.prototype.$ConstrainPanning$ = function $$DvtBaseDiagram$$$$$ConstrainPanning$$($maxPanX_x$$92$$, $maxPanY_y$$71$$, $minPanX_w$$9$$, $h$$6_minPanY$$, $dy$$7_zoom$$) {
  var $pzc$$1$$ = this.$_panZoomCanvas$, $dx$$5_halfViewportW$$ = $pzc$$1$$.$getSize$().$w$ / 2, $halfViewportH_viewportBounds$$ = $pzc$$1$$.$getSize$().$h$ / 2;
  $minPanX_w$$9$$ = $dx$$5_halfViewportW$$ - ($minPanX_w$$9$$ + $maxPanX_x$$92$$) * $dy$$7_zoom$$;
  $h$$6_minPanY$$ = $halfViewportH_viewportBounds$$ - ($h$$6_minPanY$$ + $maxPanY_y$$71$$) * $dy$$7_zoom$$;
  $maxPanX_x$$92$$ = $dx$$5_halfViewportW$$ - $maxPanX_x$$92$$ * $dy$$7_zoom$$;
  $maxPanY_y$$71$$ = $halfViewportH_viewportBounds$$ - $maxPanY_y$$71$$ * $dy$$7_zoom$$;
  this.$_layoutViewport$ && ($halfViewportH_viewportBounds$$ = (0,D.$JSCompiler_StaticMethods_GetLayoutViewport$$)(this), -$halfViewportH_viewportBounds$$.x * $dy$$7_zoom$$ < $minPanX_w$$9$$ ? ($dx$$5_halfViewportW$$ = $minPanX_w$$9$$ + $halfViewportH_viewportBounds$$.x * $dy$$7_zoom$$, $minPanX_w$$9$$ -= $dx$$5_halfViewportW$$, $maxPanX_x$$92$$ += $dx$$5_halfViewportW$$) : -$halfViewportH_viewportBounds$$.x * $dy$$7_zoom$$ > $maxPanX_x$$92$$ && ($dx$$5_halfViewportW$$ = -$halfViewportH_viewportBounds$$.x * 
  $dy$$7_zoom$$ - $maxPanX_x$$92$$, $minPanX_w$$9$$ -= $dx$$5_halfViewportW$$, $maxPanX_x$$92$$ += $dx$$5_halfViewportW$$), -$halfViewportH_viewportBounds$$.y * $dy$$7_zoom$$ < $h$$6_minPanY$$ ? ($dy$$7_zoom$$ = $h$$6_minPanY$$ + $halfViewportH_viewportBounds$$.y * $dy$$7_zoom$$, $h$$6_minPanY$$ -= $dy$$7_zoom$$, $maxPanY_y$$71$$ += $dy$$7_zoom$$) : -$halfViewportH_viewportBounds$$.y * $dy$$7_zoom$$ > $maxPanY_y$$71$$ && ($dy$$7_zoom$$ = -$halfViewportH_viewportBounds$$.y * $dy$$7_zoom$$ - $maxPanY_y$$71$$, 
  $h$$6_minPanY$$ -= $dy$$7_zoom$$, $maxPanY_y$$71$$ += $dy$$7_zoom$$));
  $pzc$$1$$.$_minPanX$ = $minPanX_w$$9$$;
  $pzc$$1$$.$_minPanY$ = $h$$6_minPanY$$;
  $pzc$$1$$.$_maxPanX$ = $maxPanX_x$$92$$;
  $pzc$$1$$.$_maxPanY$ = $maxPanY_y$$71$$
};
D.$DvtBaseDiagram$getContainerPadding$$ = function $$DvtBaseDiagram$getContainerPadding$$$($layoutContainerPadding$$) {
  var $containerPadding$$1$$ = {};
  $containerPadding$$1$$.top = $layoutContainerPadding$$.top;
  $containerPadding$$1$$.right = $layoutContainerPadding$$.right;
  $containerPadding$$1$$.bottom = $layoutContainerPadding$$.bottom;
  $containerPadding$$1$$.left = $layoutContainerPadding$$.left;
  return $containerPadding$$1$$
};
D.$DvtBaseDiagram$getLayoutContainerPadding$$ = function $$DvtBaseDiagram$getLayoutContainerPadding$$$($containerPadding$$2$$) {
  var $layoutContainerPadding$$1$$ = {};
  $layoutContainerPadding$$1$$.top = $containerPadding$$2$$.top;
  $layoutContainerPadding$$1$$.right = $containerPadding$$2$$.right;
  $layoutContainerPadding$$1$$.bottom = $containerPadding$$2$$.bottom;
  $layoutContainerPadding$$1$$.left = $containerPadding$$2$$.left;
  return $layoutContainerPadding$$1$$
};
D.$DvtBaseDiagramKeyboardHandler$$ = function $$DvtBaseDiagramKeyboardHandler$$$($component$$, $manager$$5$$) {
  this.Init($component$$, $manager$$5$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseDiagramKeyboardHandler$$, D.$DvtPanZoomCanvasKeyboardHandler$$, "DvtBaseDiagramKeyboardHandler");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseDiagramKeyboardHandler$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($diagram$$2$$, $manager$$6$$) {
  D.$DvtBaseDiagramKeyboardHandler$$.$superclass$.Init.call(this, $diagram$$2$$, $manager$$6$$);
  this.$_diagram$ = $diagram$$2$$
};
D.$JSCompiler_prototypeAlias$$.$GetDiagram$ = (0,D.$JSCompiler_get$$)("$_diagram$");
D.$JSCompiler_prototypeAlias$$.$isSelectionEvent$ = function $$JSCompiler_prototypeAlias$$$$isSelectionEvent$$($event$$147$$) {
  return 9 == $event$$147$$.keyCode ? D.$JSCompiler_alias_FALSE$$ : this.$isNavigationEvent$($event$$147$$) && !$event$$147$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$isMultiSelectEvent$ = function $$JSCompiler_prototypeAlias$$$$isMultiSelectEvent$$($event$$148$$) {
  return 32 == $event$$148$$.keyCode && $event$$148$$.ctrlKey
};
D.$JSCompiler_prototypeAlias$$.$getFirstNavigableLink$ = function $$JSCompiler_prototypeAlias$$$$getFirstNavigableLink$$($node$$28_nodeBB_nodeCenterX$$, $direction$$17_event$$149$$, $listOfLinks$$) {
  $direction$$17_event$$149$$ = $direction$$17_event$$149$$.keyCode;
  if(!$listOfLinks$$ || 1 > $listOfLinks$$.length || !$node$$28_nodeBB_nodeCenterX$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $link$$3$$ = $listOfLinks$$[0];
  $node$$28_nodeBB_nodeCenterX$$ = $node$$28_nodeBB_nodeCenterX$$.$getKeyboardBoundingBox$();
  $node$$28_nodeBB_nodeCenterX$$ = $node$$28_nodeBB_nodeCenterX$$.x + $node$$28_nodeBB_nodeCenterX$$.$w$ / 2;
  for(var $i$$236$$ = 0;$i$$236$$ < $listOfLinks$$.length;$i$$236$$++) {
    var $object$$5$$ = $listOfLinks$$[$i$$236$$], $linkBB_linkCenterX$$ = $object$$5$$.$getKeyboardBoundingBox$(), $linkBB_linkCenterX$$ = $linkBB_linkCenterX$$.x + $linkBB_linkCenterX$$.$w$ / 2;
    if(188 == $direction$$17_event$$149$$ && $linkBB_linkCenterX$$ <= $node$$28_nodeBB_nodeCenterX$$ || 190 == $direction$$17_event$$149$$ && $linkBB_linkCenterX$$ >= $node$$28_nodeBB_nodeCenterX$$) {
      $link$$3$$ = $object$$5$$;
      break
    }
  }
  return $link$$3$$
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigableLink$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigableLink$$($i$$inline_2587_index$$144_node$$29$$, $currentLink$$, $bForward$$7_event$$150$$, $listOfLinks$$1$$) {
  if(!$listOfLinks$$1$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  if(!$currentLink$$) {
    return $listOfLinks$$1$$[0]
  }
  if(!$i$$inline_2587_index$$144_node$$29$$) {
    return $currentLink$$
  }
  for(var $i$$237_i$$inline_2583_link$$inline_2588$$ = 0;$i$$237_i$$inline_2583_link$$inline_2588$$ < $listOfLinks$$1$$.length;$i$$237_i$$inline_2583_link$$inline_2588$$++) {
    var $link$$inline_2584$$ = $listOfLinks$$1$$[$i$$237_i$$inline_2583_link$$inline_2588$$], $JSCompiler_temp_const$$9331_JSCompiler_temp_const$$9354$$ = $link$$inline_2584$$, $angle$$inline_9841_node$$inline_9834_p1$$inline_9839_p1$$inline_9847_startNode$$inline_9845$$ = $i$$inline_2587_index$$144_node$$29$$, $endNode$$inline_9837_link$$inline_9835$$ = $link$$inline_2584$$, $endNode$$inline_9846_link$$inline_9844_oppositeNode$$inline_9838_p2$$inline_9840_p2$$inline_9848_startNode$$inline_9836$$ = 
    this.$GetVisibleNode$($endNode$$inline_9837_link$$inline_9835$$.$getStartId$ ? $endNode$$inline_9837_link$$inline_9835$$.$getStartId$() : $endNode$$inline_9837_link$$inline_9835$$.getData().$getStartId$()), $endNode$$inline_9837_link$$inline_9835$$ = this.$GetVisibleNode$($endNode$$inline_9837_link$$inline_9835$$.$getEndId$ ? $endNode$$inline_9837_link$$inline_9835$$.$getEndId$() : $endNode$$inline_9837_link$$inline_9835$$.getData().$getEndId$()), $endNode$$inline_9846_link$$inline_9844_oppositeNode$$inline_9838_p2$$inline_9840_p2$$inline_9848_startNode$$inline_9836$$ = 
    $angle$$inline_9841_node$$inline_9834_p1$$inline_9839_p1$$inline_9847_startNode$$inline_9845$$ == $endNode$$inline_9846_link$$inline_9844_oppositeNode$$inline_9838_p2$$inline_9840_p2$$inline_9848_startNode$$inline_9836$$ ? $endNode$$inline_9837_link$$inline_9835$$ : $endNode$$inline_9846_link$$inline_9844_oppositeNode$$inline_9838_p2$$inline_9840_p2$$inline_9848_startNode$$inline_9836$$, $angle$$inline_9841_node$$inline_9834_p1$$inline_9839_p1$$inline_9847_startNode$$inline_9845$$ = (0,D.$JSCompiler_StaticMethods__getNodeCenter$$)($angle$$inline_9841_node$$inline_9834_p1$$inline_9839_p1$$inline_9847_startNode$$inline_9845$$), 
    $endNode$$inline_9846_link$$inline_9844_oppositeNode$$inline_9838_p2$$inline_9840_p2$$inline_9848_startNode$$inline_9836$$ = (0,D.$JSCompiler_StaticMethods__getNodeCenter$$)($endNode$$inline_9846_link$$inline_9844_oppositeNode$$inline_9838_p2$$inline_9840_p2$$inline_9848_startNode$$inline_9836$$), $angle$$inline_9841_node$$inline_9834_p1$$inline_9839_p1$$inline_9847_startNode$$inline_9845$$ = window.Math.atan2($endNode$$inline_9846_link$$inline_9844_oppositeNode$$inline_9838_p2$$inline_9840_p2$$inline_9848_startNode$$inline_9836$$.y - 
    $angle$$inline_9841_node$$inline_9834_p1$$inline_9839_p1$$inline_9847_startNode$$inline_9845$$.y, $endNode$$inline_9846_link$$inline_9844_oppositeNode$$inline_9838_p2$$inline_9840_p2$$inline_9848_startNode$$inline_9836$$.x - $angle$$inline_9841_node$$inline_9834_p1$$inline_9839_p1$$inline_9847_startNode$$inline_9845$$.x), $angle$$inline_9841_node$$inline_9834_p1$$inline_9839_p1$$inline_9847_startNode$$inline_9845$$ = 0 > $angle$$inline_9841_node$$inline_9834_p1$$inline_9839_p1$$inline_9847_startNode$$inline_9845$$ ? 
    $angle$$inline_9841_node$$inline_9834_p1$$inline_9839_p1$$inline_9847_startNode$$inline_9845$$ + 2 * window.Math.PI : $angle$$inline_9841_node$$inline_9834_p1$$inline_9839_p1$$inline_9847_startNode$$inline_9845$$;
    $JSCompiler_temp_const$$9331_JSCompiler_temp_const$$9354$$.$__angle$ = $angle$$inline_9841_node$$inline_9834_p1$$inline_9839_p1$$inline_9847_startNode$$inline_9845$$;
    $endNode$$inline_9846_link$$inline_9844_oppositeNode$$inline_9838_p2$$inline_9840_p2$$inline_9848_startNode$$inline_9836$$ = $JSCompiler_temp_const$$9331_JSCompiler_temp_const$$9354$$ = $link$$inline_2584$$;
    $angle$$inline_9841_node$$inline_9834_p1$$inline_9839_p1$$inline_9847_startNode$$inline_9845$$ = this.$GetVisibleNode$($endNode$$inline_9846_link$$inline_9844_oppositeNode$$inline_9838_p2$$inline_9840_p2$$inline_9848_startNode$$inline_9836$$.$getStartId$ ? $endNode$$inline_9846_link$$inline_9844_oppositeNode$$inline_9838_p2$$inline_9840_p2$$inline_9848_startNode$$inline_9836$$.$getStartId$() : $endNode$$inline_9846_link$$inline_9844_oppositeNode$$inline_9838_p2$$inline_9840_p2$$inline_9848_startNode$$inline_9836$$.getData().$getStartId$());
    $endNode$$inline_9846_link$$inline_9844_oppositeNode$$inline_9838_p2$$inline_9840_p2$$inline_9848_startNode$$inline_9836$$ = this.$GetVisibleNode$($endNode$$inline_9846_link$$inline_9844_oppositeNode$$inline_9838_p2$$inline_9840_p2$$inline_9848_startNode$$inline_9836$$.$getEndId$ ? $endNode$$inline_9846_link$$inline_9844_oppositeNode$$inline_9838_p2$$inline_9840_p2$$inline_9848_startNode$$inline_9836$$.$getEndId$() : $endNode$$inline_9846_link$$inline_9844_oppositeNode$$inline_9838_p2$$inline_9840_p2$$inline_9848_startNode$$inline_9836$$.getData().$getEndId$());
    $angle$$inline_9841_node$$inline_9834_p1$$inline_9839_p1$$inline_9847_startNode$$inline_9845$$ = (0,D.$JSCompiler_StaticMethods__getNodeCenter$$)($angle$$inline_9841_node$$inline_9834_p1$$inline_9839_p1$$inline_9847_startNode$$inline_9845$$);
    $endNode$$inline_9846_link$$inline_9844_oppositeNode$$inline_9838_p2$$inline_9840_p2$$inline_9848_startNode$$inline_9836$$ = (0,D.$JSCompiler_StaticMethods__getNodeCenter$$)($endNode$$inline_9846_link$$inline_9844_oppositeNode$$inline_9838_p2$$inline_9840_p2$$inline_9848_startNode$$inline_9836$$);
    $JSCompiler_temp_const$$9331_JSCompiler_temp_const$$9354$$.$__distance$ = window.Math.sqrt(window.Math.pow($endNode$$inline_9846_link$$inline_9844_oppositeNode$$inline_9838_p2$$inline_9840_p2$$inline_9848_startNode$$inline_9836$$.x - $angle$$inline_9841_node$$inline_9834_p1$$inline_9839_p1$$inline_9847_startNode$$inline_9845$$.x, 2) + window.Math.pow($endNode$$inline_9846_link$$inline_9844_oppositeNode$$inline_9838_p2$$inline_9840_p2$$inline_9848_startNode$$inline_9836$$.y - $angle$$inline_9841_node$$inline_9834_p1$$inline_9839_p1$$inline_9847_startNode$$inline_9845$$.y, 
    2));
    $link$$inline_2584$$.$__direction$ = $i$$inline_2587_index$$144_node$$29$$ == this.$GetVisibleNode$($link$$inline_2584$$.$getEndId$ ? $link$$inline_2584$$.$getEndId$() : $link$$inline_2584$$.getData().$getEndId$()) ? 1 : 0
  }
  $listOfLinks$$1$$.sort(function($i$$inline_2587_index$$144_node$$29$$, $currentLink$$) {
    var $bForward$$7_event$$150$$ = $i$$inline_2587_index$$144_node$$29$$.$__angle$, $listOfLinks$$1$$ = $currentLink$$.$__angle$, $i$$237_i$$inline_2583_link$$inline_2588$$ = -1;
    !(0,D.$DvtBaseDiagramKeyboardHandler$_anglesAreEqualWithinTolerance$$)($bForward$$7_event$$150$$, $listOfLinks$$1$$) && $bForward$$7_event$$150$$ > $listOfLinks$$1$$ ? $i$$237_i$$inline_2583_link$$inline_2588$$ = 1 : (0,D.$DvtBaseDiagramKeyboardHandler$_anglesAreEqualWithinTolerance$$)($bForward$$7_event$$150$$, $listOfLinks$$1$$) && ($i$$inline_2587_index$$144_node$$29$$.$__distance$ > $currentLink$$.$__distance$ ? $i$$237_i$$inline_2583_link$$inline_2588$$ = 1 : $currentLink$$.$__distance$ == 
    $i$$inline_2587_index$$144_node$$29$$.$__distance$ && $i$$inline_2587_index$$144_node$$29$$.$__direction$ > $currentLink$$.$__direction$ ? $i$$237_i$$inline_2583_link$$inline_2588$$ = 1 : $currentLink$$.$__distance$ == $i$$inline_2587_index$$144_node$$29$$.$__distance$ && $i$$inline_2587_index$$144_node$$29$$.$__direction$ == $currentLink$$.$__direction$ && ($i$$237_i$$inline_2583_link$$inline_2588$$ = 0));
    return $i$$237_i$$inline_2583_link$$inline_2588$$
  });
  for($i$$inline_2587_index$$144_node$$29$$ = 0;$i$$inline_2587_index$$144_node$$29$$ < $listOfLinks$$1$$.length;$i$$inline_2587_index$$144_node$$29$$++) {
    $i$$237_i$$inline_2583_link$$inline_2588$$ = $listOfLinks$$1$$[$i$$inline_2587_index$$144_node$$29$$], $i$$237_i$$inline_2583_link$$inline_2588$$.$__angle$ = D.$JSCompiler_alias_VOID$$, $i$$237_i$$inline_2583_link$$inline_2588$$.$__distance$ = D.$JSCompiler_alias_VOID$$, $i$$237_i$$inline_2583_link$$inline_2588$$.$__direction$ = D.$JSCompiler_alias_VOID$$
  }
  $bForward$$7_event$$150$$ = 40 == $bForward$$7_event$$150$$.keyCode ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$;
  for($i$$237_i$$inline_2583_link$$inline_2588$$ = $i$$inline_2587_index$$144_node$$29$$ = 0;$i$$237_i$$inline_2583_link$$inline_2588$$ < $listOfLinks$$1$$.length;$i$$237_i$$inline_2583_link$$inline_2588$$++) {
    if($listOfLinks$$1$$[$i$$237_i$$inline_2583_link$$inline_2588$$] === $currentLink$$) {
      $i$$inline_2587_index$$144_node$$29$$ = $bForward$$7_event$$150$$ ? $i$$237_i$$inline_2583_link$$inline_2588$$ == $listOfLinks$$1$$.length - 1 ? 0 : $i$$237_i$$inline_2583_link$$inline_2588$$ + 1 : 0 == $i$$237_i$$inline_2583_link$$inline_2588$$ ? $listOfLinks$$1$$.length - 1 : $i$$237_i$$inline_2583_link$$inline_2588$$ - 1;
      break
    }
  }
  return $listOfLinks$$1$$[$i$$inline_2587_index$$144_node$$29$$]
};
D.$JSCompiler_prototypeAlias$$.$GetVisibleNode$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_StaticMethods__getNodeCenter$$ = function $$JSCompiler_StaticMethods__getNodeCenter$$$($node$$31_nodeBB$$1$$) {
  $node$$31_nodeBB$$1$$ = $node$$31_nodeBB$$1$$.$getKeyboardBoundingBox$();
  return new D.$DvtPoint$$($node$$31_nodeBB$$1$$.x + $node$$31_nodeBB$$1$$.$w$ / 2, $node$$31_nodeBB$$1$$.y + $node$$31_nodeBB$$1$$.$h$ / 2)
};
D.$DvtBaseDiagramKeyboardHandler$_anglesAreEqualWithinTolerance$$ = function $$DvtBaseDiagramKeyboardHandler$_anglesAreEqualWithinTolerance$$$($a1$$, $a2$$) {
  var $res$$1$$ = 1E-7 >= window.Math.abs($a1$$ - $a2$$);
  $res$$1$$ || ($res$$1$$ = 1E-7 >= window.Math.abs(2 * window.Math.PI + window.Math.min($a1$$, $a2$$) - window.Math.max($a1$$, $a2$$)));
  return $res$$1$$
};
D.$DvtBaseDiagramLink$$ = function $$DvtBaseDiagramLink$$$($context$$67$$, $linkId$$1$$, $diagram$$3$$) {
  this.Init($context$$67$$, $linkId$$1$$, $diagram$$3$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseDiagramLink$$, D.$DvtContainer$$, "DvtBaseDiagramLink");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseDiagramLink$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$68$$, $linkId$$2$$, $diagram$$4$$) {
  D.$DvtBaseDiagramLink$$.$superclass$.Init.call(this, $context$$68$$, D.$JSCompiler_alias_NULL$$, $linkId$$2$$);
  this.$_diagram$ = $diagram$$4$$;
  this.$_arPoints$;
  this.$_points$;
  this.$_pathCmds$;
  this.$_labelObj$;
  this.$_labelPos$;
  this.$_labelRotAngle$;
  this.$_labelRotPoint$;
  this.$_selected$ = D.$JSCompiler_alias_FALSE$$;
  this.$_selectable$ = D.$JSCompiler_alias_TRUE$$;
  this.$_shape$;
  this.$_endConnector$;
  this.$_startConnector$
};
D.$JSCompiler_prototypeAlias$$.$GetDiagram$ = (0,D.$JSCompiler_get$$)("$_diagram$");
D.$JSCompiler_prototypeAlias$$.$setEndConnectorType$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getEndConnectorType$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$setStartConnectorType$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getStartConnector$ = (0,D.$JSCompiler_get$$)("$_startConnector$");
(0,D.$goog$exportPath_$$)("DvtBaseDiagramLink.prototype.getStartConnector", D.$DvtBaseDiagramLink$$.prototype.$getStartConnector$);
D.$DvtBaseDiagramLink$$.prototype.$getEndConnector$ = (0,D.$JSCompiler_get$$)("$_endConnector$");
(0,D.$goog$exportPath_$$)("DvtBaseDiagramLink.prototype.getEndConnector", D.$DvtBaseDiagramLink$$.prototype.$getEndConnector$);
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseDiagramLink$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setShape$ = (0,D.$JSCompiler_set$$)("$_shape$");
D.$JSCompiler_prototypeAlias$$.$getShape$ = (0,D.$JSCompiler_get$$)("$_shape$");
D.$JSCompiler_prototypeAlias$$.$setLabelRotationAngle$ = function $$JSCompiler_prototypeAlias$$$$setLabelRotationAngle$$($angle$$18_mat$$inline_2595$$) {
  this.$_labelRotAngle$ = $angle$$18_mat$$inline_2595$$;
  var $label$$inline_2590$$ = this.$_labelObj$, $pos$$inline_2591$$ = this.$getLabelPosition$();
  this.$getLabelBounds$();
  $label$$inline_2590$$ && ($angle$$18_mat$$inline_2595$$ = (0,D.$DvtBaseDiagramLink$CalcLabelMatrix$$)($pos$$inline_2591$$, $angle$$18_mat$$inline_2595$$, this.$_labelRotPoint$), $label$$inline_2590$$.$setMatrix$($angle$$18_mat$$inline_2595$$))
};
D.$JSCompiler_prototypeAlias$$.$getLabelRotationAngle$ = (0,D.$JSCompiler_get$$)("$_labelRotAngle$");
D.$JSCompiler_prototypeAlias$$.$setLabelRotationPoint$ = function $$JSCompiler_prototypeAlias$$$$setLabelRotationPoint$$($mat$$inline_2602_point$$7$$) {
  this.$_labelRotPoint$ = $mat$$inline_2602_point$$7$$;
  var $label$$inline_2597$$ = this.$_labelObj$, $pos$$inline_2598$$ = this.$getLabelPosition$();
  this.$getLabelBounds$();
  $label$$inline_2597$$ && ($mat$$inline_2602_point$$7$$ = (0,D.$DvtBaseDiagramLink$CalcLabelMatrix$$)($pos$$inline_2598$$, this.$_labelRotAngle$, $mat$$inline_2602_point$$7$$), $label$$inline_2597$$.$setMatrix$($mat$$inline_2602_point$$7$$))
};
D.$JSCompiler_prototypeAlias$$.$getLabelRotationPoint$ = (0,D.$JSCompiler_get$$)("$_labelRotPoint$");
D.$JSCompiler_prototypeAlias$$.$getLabelPosition$ = (0,D.$JSCompiler_get$$)("$_labelPos$");
D.$JSCompiler_prototypeAlias$$.$setLabelPosition$ = function $$JSCompiler_prototypeAlias$$$$setLabelPosition$$($mat$$inline_2609_pos$$15$$) {
  if($mat$$inline_2609_pos$$15$$) {
    this.$_labelPos$ = $mat$$inline_2609_pos$$15$$;
    var $label$$inline_2604$$ = this.$_labelObj$;
    this.$getLabelBounds$();
    $label$$inline_2604$$ && ($mat$$inline_2609_pos$$15$$ = (0,D.$DvtBaseDiagramLink$CalcLabelMatrix$$)($mat$$inline_2609_pos$$15$$, this.$_labelRotAngle$, this.$_labelRotPoint$), $label$$inline_2604$$.$setMatrix$($mat$$inline_2609_pos$$15$$))
  }
};
D.$JSCompiler_prototypeAlias$$.$getLabelBounds$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$setLabelBounds$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getStartConnectorOffset$ = (0,D.$JSCompiler_returnArg$$)(0);
D.$JSCompiler_prototypeAlias$$.$getEndConnectorOffset$ = (0,D.$JSCompiler_returnArg$$)(0);
D.$JSCompiler_prototypeAlias$$.$setSelectable$ = (0,D.$JSCompiler_set$$)("$_selectable$");
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$GetDiagram$().$isSelectionSupported$() && this.$_selectable$
};
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_selected$");
(0,D.$goog$exportPath_$$)("DvtBaseDiagramLink.prototype.isSelected", D.$DvtBaseDiagramLink$$.prototype.$isSelected$);
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseDiagramLink$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setSelected$ = (0,D.$JSCompiler_set$$)("$_selected$");
D.$JSCompiler_prototypeAlias$$.$setPromoted$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$isPromoted$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_FALSE$$);
D.$JSCompiler_prototypeAlias$$.$setLinkWidth$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getLinkWidth$ = (0,D.$JSCompiler_returnArg$$)(1);
(0,D.$goog$exportPath_$$)("DvtBaseDiagramLink.prototype.getLinkWidth", D.$DvtBaseDiagramLink$$.prototype.$getLinkWidth$);
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseDiagramLink$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setLinkStyle$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getLinkStyle$ = (0,D.$JSCompiler_returnArg$$)("solid");
D.$JSCompiler_prototypeAlias$$.$setLinkColor$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getLinkColor$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getConnectorTemplate$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$GetAppliedLinkStyle$ = function $$JSCompiler_prototypeAlias$$$$GetAppliedLinkStyle$$() {
  return this.$getLinkStyle$()
};
D.$JSCompiler_prototypeAlias$$.$GetAppliedLinkWidth$ = function $$JSCompiler_prototypeAlias$$$$GetAppliedLinkWidth$$() {
  return this.$getLinkWidth$()
};
D.$JSCompiler_prototypeAlias$$.$GetAppliedLinkColor$ = function $$JSCompiler_prototypeAlias$$$$GetAppliedLinkColor$$() {
  return this.$getLinkColor$()
};
D.$JSCompiler_StaticMethods_CreateConnector$$ = function $$JSCompiler_StaticMethods_CreateConnector$$$($JSCompiler_StaticMethods_CreateConnector$self$$, $points$$15$$, $connector_connectorType$$, $connectorPos$$, $connectorTemplate$$) {
  if($connector_connectorType$$ || $connectorTemplate$$) {
    var $stroke$$21$$;
    $connectorTemplate$$ || ($stroke$$21$$ = $JSCompiler_StaticMethods_CreateConnector$self$$.$_shape$.$getStroke$().$clone$(), $stroke$$21$$.$setType$(0), $stroke$$21$$.$_bFixedWidth$ = D.$JSCompiler_alias_FALSE$$);
    if($connector_connectorType$$ = D.$DvtDiagramLinkConnectorUtils$$.$CreateConnectorShape$($JSCompiler_StaticMethods_CreateConnector$self$$.$getCtx$(), $connector_connectorType$$, $connectorTemplate$$, $stroke$$21$$, $JSCompiler_StaticMethods_CreateConnector$self$$)) {
      $JSCompiler_StaticMethods_CreateConnector$self$$.$_shape$.$addChild$($connector_connectorType$$), D.$DvtDiagramLinkConnectorUtils$$.$TransformConnector$($connector_connectorType$$, 0, $connectorTemplate$$, $points$$15$$, $connectorPos$$)
    }
    return $connector_connectorType$$
  }
};
D.$DvtBaseDiagramLink$$.prototype.$setPoints$ = function $$DvtBaseDiagramLink$$$$$setPoints$$($points$$17_underlayStart$$) {
  this.$_arPoints$ = $points$$17_underlayStart$$;
  D.$DvtDiagramLinkUtils$$.$IsPath$($points$$17_underlayStart$$) ? (this.$_pathCmds$ = $points$$17_underlayStart$$, this.$_points$ = D.$DvtDiagramLinkUtils$$.$ConvertToPoints$($points$$17_underlayStart$$)) : (this.$_points$ = $points$$17_underlayStart$$, this.$_pathCmds$ = D.$DvtDiagramLinkUtils$$.$ConvertToPath$($points$$17_underlayStart$$));
  this.$_shape$ && this.$_shape$ instanceof D.$DvtPath$$ && (this.$_shape$.$setCommands$(this.$_pathCmds$), this.$_endConnector$ ? D.$DvtDiagramLinkConnectorUtils$$.$TransformConnector$(this.$_endConnector$, this.$getEndConnectorType$(), this.$getConnectorTemplate$(D.$DvtDiagramLinkConnectorUtils$$.$END_CONNECTOR$), this.$_points$, 1) : this.$_endConnector$ = (0,D.$JSCompiler_StaticMethods_CreateConnector$$)(this, this.$_points$, this.$getEndConnectorType$(), 1, this.$getConnectorTemplate$(D.$DvtDiagramLinkConnectorUtils$$.$END_CONNECTOR$)), 
  this.$_startConnector$ ? D.$DvtDiagramLinkConnectorUtils$$.$TransformConnector$(this.$_startConnector$, this.$getStartConnectorType$(), this.$getConnectorTemplate$(D.$DvtDiagramLinkConnectorUtils$$.$START_CONNECTOR$), this.$_points$, 0) : this.$_startConnector$ = (0,D.$JSCompiler_StaticMethods_CreateConnector$$)(this, this.$_points$, this.$getStartConnectorType$(), 0, this.$getConnectorTemplate$(D.$DvtDiagramLinkConnectorUtils$$.$START_CONNECTOR$)));
  var $underlayEnd$$ = $points$$17_underlayStart$$ = D.$JSCompiler_alias_NULL$$;
  this.$_linkUnderlay$ && this.$_linkUnderlay$.$_underlay$ instanceof D.$DvtPath$$ && this.$_linkUnderlay$.$_underlay$.$setCommands$(this.$_pathCmds$);
  this.$_linkUnderlay$ && ($points$$17_underlayStart$$ = this.$_linkUnderlay$.$_underlayStart$) && D.$DvtDiagramLinkConnectorUtils$$.$TransformConnector$($points$$17_underlayStart$$, this.$getStartConnectorType$(), this.$getConnectorTemplate$(D.$DvtDiagramLinkConnectorUtils$$.$START_CONNECTOR$), this.$_points$, 0);
  this.$_linkUnderlay$ && ($underlayEnd$$ = this.$_linkUnderlay$.$_underlayEnd$) && D.$DvtDiagramLinkConnectorUtils$$.$TransformConnector$($underlayEnd$$, this.$getEndConnectorType$(), this.$getConnectorTemplate$(D.$DvtDiagramLinkConnectorUtils$$.$END_CONNECTOR$), this.$_points$, 1);
  this.$_hitDetectionUnderlay$ && this.$_hitDetectionUnderlay$.$_underlay$ instanceof D.$DvtPath$$ && this.$_hitDetectionUnderlay$.$_underlay$.$setCommands$(this.$_pathCmds$);
  this.$_startHandle$ && this.$_startHandle$.$setPosition$((0,D.$JSCompiler_StaticMethods_getLinkStart$$)(this));
  this.$_endHandle$ && this.$_endHandle$.$setPosition$((0,D.$JSCompiler_StaticMethods_getLinkEnd$$)(this))
};
D.$DvtBaseDiagramLink$$.prototype.$getPoints$ = (0,D.$JSCompiler_get$$)("$_arPoints$");
D.$JSCompiler_StaticMethods_getLinkStart$$ = function $$JSCompiler_StaticMethods_getLinkStart$$$($JSCompiler_StaticMethods_getLinkStart$self$$) {
  return!$JSCompiler_StaticMethods_getLinkStart$self$$.$_points$ ? D.$JSCompiler_alias_NULL$$ : new D.$DvtPoint$$($JSCompiler_StaticMethods_getLinkStart$self$$.$_points$[0], $JSCompiler_StaticMethods_getLinkStart$self$$.$_points$[1])
};
D.$JSCompiler_StaticMethods_getLinkEnd$$ = function $$JSCompiler_StaticMethods_getLinkEnd$$$($JSCompiler_StaticMethods_getLinkEnd$self$$) {
  if(!$JSCompiler_StaticMethods_getLinkEnd$self$$.$_points$) {
    return D.$JSCompiler_alias_NULL$$
  }
  var $numPoints$$ = $JSCompiler_StaticMethods_getLinkEnd$self$$.$_points$.length;
  return new D.$DvtPoint$$($JSCompiler_StaticMethods_getLinkEnd$self$$.$_points$[$numPoints$$ - 2], $JSCompiler_StaticMethods_getLinkEnd$self$$.$_points$[$numPoints$$ - 1])
};
D.$DvtBaseDiagramLink$CalcLabelMatrix$$ = function $$DvtBaseDiagramLink$CalcLabelMatrix$$$($pos$$16$$, $rotAngle$$1$$, $rotPoint$$1$$) {
  var $mat$$5$$ = new D.$DvtMatrix$$;
  $rotAngle$$1$$ != D.$JSCompiler_alias_NULL$$ && ($rotPoint$$1$$ && $mat$$5$$.translate(-$rotPoint$$1$$.x, -$rotPoint$$1$$.y), $mat$$5$$.rotate($rotAngle$$1$$), $rotPoint$$1$$ && $mat$$5$$.translate($rotPoint$$1$$.x, $rotPoint$$1$$.y));
  $pos$$16$$ && $mat$$5$$.translate($pos$$16$$.x, $pos$$16$$.y);
  return $mat$$5$$
};
D.$DvtBaseDiagramLink$$.prototype.$CreateUnderlay$ = function $$DvtBaseDiagramLink$$$$$CreateUnderlay$$($stroke$$22_strokeColor$$, $strokeAlpha$$, $strokeWidth_strokeWidthOffset$$) {
  !$strokeAlpha$$ && 0 != $strokeAlpha$$ && ($strokeAlpha$$ = 1);
  !$strokeWidth_strokeWidthOffset$$ && 0 != $strokeWidth_strokeWidthOffset$$ && ($strokeWidth_strokeWidthOffset$$ = 0);
  $strokeWidth_strokeWidthOffset$$ = this.$GetAppliedLinkWidth$() + $strokeWidth_strokeWidthOffset$$;
  $stroke$$22_strokeColor$$ = new D.$DvtSolidStroke$$($stroke$$22_strokeColor$$, $strokeAlpha$$, $strokeWidth_strokeWidthOffset$$);
  return new D.$DvtDiagramLinkUnderlay$$(this.$getCtx$(), this.$_pathCmds$, $stroke$$22_strokeColor$$)
};
D.$JSCompiler_StaticMethods_CreateFeedbackUnderlay$$ = function $$JSCompiler_StaticMethods_CreateFeedbackUnderlay$$$($JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2626$$, $feedbackUnderlay_strokeColor$$1$$, $connectorType$$inline_2616_connectorType$$inline_2623_strokeAlpha$$1$$, $connectorUnderlay$$inline_2619_strokeWidthOffset$$1$$) {
  $feedbackUnderlay_strokeColor$$1$$ = $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2626$$.$CreateUnderlay$($feedbackUnderlay_strokeColor$$1$$, $connectorType$$inline_2616_connectorType$$inline_2623_strokeAlpha$$1$$, $connectorUnderlay$$inline_2619_strokeWidthOffset$$1$$);
  $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2626$$.$_startConnector$ && $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2626$$.$getStartConnectorType$() && ($connectorType$$inline_2616_connectorType$$inline_2623_strokeAlpha$$1$$ = $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2626$$.$getStartConnectorType$(), $connectorUnderlay$$inline_2619_strokeWidthOffset$$1$$ = (0,D.$JSCompiler_StaticMethods_CreateConnectorUnderlay$$)($feedbackUnderlay_strokeColor$$1$$, 
  $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2626$$.$_points$, $connectorType$$inline_2616_connectorType$$inline_2623_strokeAlpha$$1$$, $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2626$$.$getConnectorTemplate$(D.$DvtDiagramLinkConnectorUtils$$.$START_CONNECTOR$), $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2626$$, 0), $feedbackUnderlay_strokeColor$$1$$.$_underlayStart$ && $feedbackUnderlay_strokeColor$$1$$.removeChild($feedbackUnderlay_strokeColor$$1$$.$_underlayStart$), 
  $feedbackUnderlay_strokeColor$$1$$.$_underlayStart$ = $connectorUnderlay$$inline_2619_strokeWidthOffset$$1$$, $feedbackUnderlay_strokeColor$$1$$.$_underlayStartType$ = $connectorType$$inline_2616_connectorType$$inline_2623_strokeAlpha$$1$$, $feedbackUnderlay_strokeColor$$1$$.$addChild$($feedbackUnderlay_strokeColor$$1$$.$_underlayStart$));
  $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2626$$.$_endConnector$ && $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2626$$.$getEndConnectorType$() && ($connectorType$$inline_2616_connectorType$$inline_2623_strokeAlpha$$1$$ = $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2626$$.$getEndConnectorType$(), $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2626$$ = (0,D.$JSCompiler_StaticMethods_CreateConnectorUnderlay$$)($feedbackUnderlay_strokeColor$$1$$, 
  $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2626$$.$_points$, $connectorType$$inline_2616_connectorType$$inline_2623_strokeAlpha$$1$$, $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2626$$.$getConnectorTemplate$(D.$DvtDiagramLinkConnectorUtils$$.$END_CONNECTOR$), $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2626$$, 1), $feedbackUnderlay_strokeColor$$1$$.$_underlayEnd$ && $feedbackUnderlay_strokeColor$$1$$.removeChild($feedbackUnderlay_strokeColor$$1$$.$_underlayEnd$), 
  $feedbackUnderlay_strokeColor$$1$$.$_underlayEnd$ = $JSCompiler_StaticMethods_CreateFeedbackUnderlay$self_connectorUnderlay$$inline_2626$$, $feedbackUnderlay_strokeColor$$1$$.$_underlayEndType$ = $connectorType$$inline_2616_connectorType$$inline_2623_strokeAlpha$$1$$, $feedbackUnderlay_strokeColor$$1$$.$addChild$($feedbackUnderlay_strokeColor$$1$$.$_underlayEnd$));
  return $feedbackUnderlay_strokeColor$$1$$
};
D.$JSCompiler_StaticMethods_ApplyLinkStyle$$ = function $$JSCompiler_StaticMethods_ApplyLinkStyle$$$($JSCompiler_StaticMethods_ApplyLinkStyle$self_linkStyle_strokeType$$, $stroke$$23$$, $bUnderlay$$) {
  $JSCompiler_StaticMethods_ApplyLinkStyle$self_linkStyle_strokeType$$ = $JSCompiler_StaticMethods_ApplyLinkStyle$self_linkStyle_strokeType$$.$GetAppliedLinkStyle$();
  $JSCompiler_StaticMethods_ApplyLinkStyle$self_linkStyle_strokeType$$ = D.$DvtDiagramLinkUtils$$.$ConvertLinkStyleToStrokeType$($JSCompiler_StaticMethods_ApplyLinkStyle$self_linkStyle_strokeType$$);
  $stroke$$23$$.$setType$($JSCompiler_StaticMethods_ApplyLinkStyle$self_linkStyle_strokeType$$, D.$DvtDiagramLinkUtils$$.$GetStrokeDash$($JSCompiler_StaticMethods_ApplyLinkStyle$self_linkStyle_strokeType$$, $bUnderlay$$), D.$DvtDiagramLinkUtils$$.$GetStrokeDashOffset$($JSCompiler_StaticMethods_ApplyLinkStyle$self_linkStyle_strokeType$$, $bUnderlay$$))
};
D.$JSCompiler_StaticMethods_ReplaceConnectorColor$$ = function $$JSCompiler_StaticMethods_ReplaceConnectorColor$$$($connector$$1$$, $stroke$$24$$) {
  if($connector$$1$$) {
    var $color$$17$$ = D.$JSCompiler_alias_NULL$$;
    $stroke$$24$$.$getColor$ && ($color$$17$$ = $stroke$$24$$.$getColor$());
    if($color$$17$$) {
      var $conStroke$$ = $connector$$1$$.$getStroke$() ? $connector$$1$$.$getStroke$().$clone$() : D.$JSCompiler_alias_NULL$$, $conFill$$ = $connector$$1$$.$getFill$() ? $connector$$1$$.$getFill$().$clone$() : D.$JSCompiler_alias_NULL$$;
      $conStroke$$ && $conStroke$$.$setColor$ && ($conStroke$$.$setColor$($color$$17$$), $connector$$1$$.$setStroke$($conStroke$$));
      $conFill$$ && $conFill$$.$setColor$ && ($conFill$$.$setColor$($color$$17$$), $connector$$1$$.$setFill$($conFill$$))
    }
  }
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseDiagramLink$$.prototype;
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($targetCoordinateSpace$$7$$) {
  return this.$getDimensions$($targetCoordinateSpace$$7$$)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getCategories$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$DvtBaseDiagramNode$$ = function $$DvtBaseDiagramNode$$$($context$$69$$, $nodeId$$2$$, $diagram$$5$$) {
  this.Init($context$$69$$, $nodeId$$2$$, $diagram$$5$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtBaseDiagramNode$$, D.$DvtContainer$$, "DvtBaseDiagramNode");
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseDiagramNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$70$$, $nodeId$$3$$, $diagram$$6$$) {
  D.$DvtBaseDiagramNode$$.$superclass$.Init.call(this, $context$$70$$, D.$JSCompiler_alias_NULL$$, $nodeId$$3$$);
  this.$_diagram$ = $diagram$$6$$;
  this.$_selected$ = this.$_bDisclosed$ = D.$JSCompiler_alias_FALSE$$;
  this.$_selectable$ = D.$JSCompiler_alias_TRUE$$;
  this.$_labelObj$;
  this.$_labelPos$;
  this.$_labelRotAngle$;
  this.$_labelRotPoint$;
  this.$_outLinkIds$;
  this.$_inLinkIds$
};
D.$JSCompiler_prototypeAlias$$.$GetDiagram$ = (0,D.$JSCompiler_get$$)("$_diagram$");
D.$JSCompiler_prototypeAlias$$.getData = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getLayoutBounds$ = function $$JSCompiler_prototypeAlias$$$$getLayoutBounds$$() {
  return this.$getContentBounds$()
};
D.$JSCompiler_prototypeAlias$$.$getContentBounds$ = function $$JSCompiler_prototypeAlias$$$$getContentBounds$$() {
  return new D.$DvtRectangle$$(0, 0, this.getWidth(), this.getHeight())
};
D.$JSCompiler_prototypeAlias$$.$getLayoutAttributes$ = function $$JSCompiler_prototypeAlias$$$$getLayoutAttributes$$() {
  return{}
};
D.$JSCompiler_prototypeAlias$$.$setLabelPosition$ = function $$JSCompiler_prototypeAlias$$$$setLabelPosition$$($mat$$inline_2633_pos$$18$$) {
  if($mat$$inline_2633_pos$$18$$) {
    this.$_labelPos$ = $mat$$inline_2633_pos$$18$$;
    var $label$$inline_2628$$ = this.$_labelObj$;
    this.$getLabelBounds$();
    $label$$inline_2628$$ && ($mat$$inline_2633_pos$$18$$ = (0,D.$DvtBaseDiagramNode$CalcLabelMatrix$$)($mat$$inline_2633_pos$$18$$, this.$_labelRotAngle$, this.$_labelRotPoint$), $label$$inline_2628$$.$setMatrix$($mat$$inline_2633_pos$$18$$))
  }
};
D.$JSCompiler_prototypeAlias$$.$getLabelPosition$ = (0,D.$JSCompiler_get$$)("$_labelPos$");
D.$JSCompiler_prototypeAlias$$.$getLabelBounds$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$setLabelBounds$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getContainerPadding$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$setContainerPadding$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$isDisclosed$ = (0,D.$JSCompiler_get$$)("$_bDisclosed$");
D.$JSCompiler_prototypeAlias$$.$setDisclosed$ = (0,D.$JSCompiler_set$$)("$_bDisclosed$");
D.$JSCompiler_prototypeAlias$$.$isSelected$ = (0,D.$JSCompiler_get$$)("$_selected$");
(0,D.$goog$exportPath_$$)("DvtBaseDiagramNode.prototype.isSelected", D.$DvtBaseDiagramNode$$.prototype.$isSelected$);
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseDiagramNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setSelected$ = (0,D.$JSCompiler_set$$)("$_selected$");
D.$JSCompiler_prototypeAlias$$.$setSelectable$ = (0,D.$JSCompiler_set$$)("$_selectable$");
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$GetDiagram$().$isSelectionSupported$() && this.$_selectable$
};
D.$JSCompiler_prototypeAlias$$.$setHiddenAncestor$ = (0,D.$JSCompiler_set$$)("$_bHiddenAncestor$");
D.$JSCompiler_prototypeAlias$$.$isHiddenAncestor$ = (0,D.$JSCompiler_get$$)("$_bHiddenAncestor$");
D.$JSCompiler_prototypeAlias$$.$setLabelRotationAngle$ = function $$JSCompiler_prototypeAlias$$$$setLabelRotationAngle$$($angle$$19_mat$$inline_2640$$) {
  this.$_labelRotAngle$ = $angle$$19_mat$$inline_2640$$;
  var $label$$inline_2635$$ = this.$_labelObj$, $pos$$inline_2636$$ = this.$getLabelPosition$();
  this.$getLabelBounds$();
  $label$$inline_2635$$ && ($angle$$19_mat$$inline_2640$$ = (0,D.$DvtBaseDiagramNode$CalcLabelMatrix$$)($pos$$inline_2636$$, $angle$$19_mat$$inline_2640$$, this.$_labelRotPoint$), $label$$inline_2635$$.$setMatrix$($angle$$19_mat$$inline_2640$$))
};
D.$JSCompiler_prototypeAlias$$.$getLabelRotationAngle$ = (0,D.$JSCompiler_get$$)("$_labelRotAngle$");
D.$JSCompiler_prototypeAlias$$.$setLabelRotationPoint$ = function $$JSCompiler_prototypeAlias$$$$setLabelRotationPoint$$($mat$$inline_2647_point$$8$$) {
  this.$_labelRotPoint$ = $mat$$inline_2647_point$$8$$;
  var $label$$inline_2642$$ = this.$_labelObj$, $pos$$inline_2643$$ = this.$getLabelPosition$();
  this.$getLabelBounds$();
  $label$$inline_2642$$ && ($mat$$inline_2647_point$$8$$ = (0,D.$DvtBaseDiagramNode$CalcLabelMatrix$$)($pos$$inline_2643$$, this.$_labelRotAngle$, $mat$$inline_2647_point$$8$$), $label$$inline_2642$$.$setMatrix$($mat$$inline_2647_point$$8$$))
};
D.$JSCompiler_prototypeAlias$$.$getLabelRotationPoint$ = (0,D.$JSCompiler_get$$)("$_labelRotPoint$");
D.$DvtBaseDiagramNode$CalcLabelMatrix$$ = function $$DvtBaseDiagramNode$CalcLabelMatrix$$$($pos$$19$$, $rotAngle$$3$$, $rotPoint$$3$$) {
  var $mat$$7$$ = new D.$DvtMatrix$$;
  $rotAngle$$3$$ != D.$JSCompiler_alias_NULL$$ && ($rotPoint$$3$$ && $mat$$7$$.translate(-$rotPoint$$3$$.x, -$rotPoint$$3$$.y), $mat$$7$$.rotate($rotAngle$$3$$), $rotPoint$$3$$ && $mat$$7$$.translate($rotPoint$$3$$.x, $rotPoint$$3$$.y));
  $pos$$19$$ && $mat$$7$$.translate($pos$$19$$.x, $pos$$19$$.y);
  return $mat$$7$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtBaseDiagramNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$SetPosition$ = function $$JSCompiler_prototypeAlias$$$$SetPosition$$($xx$$18$$, $yy$$17$$, $animator$$13$$) {
  $animator$$13$$ ? ((0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$13$$, "typeNumber", this, this.$getTranslateX$, this.$setTranslateX$, $xx$$18$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($animator$$13$$, "typeNumber", this, this.$getTranslateY$, this.$setTranslateY$, $yy$$17$$)) : (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this, $xx$$18$$, $yy$$17$$)
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_prototypeAlias$$.$getKeyboardBoundingBox$ = function $$JSCompiler_prototypeAlias$$$$getKeyboardBoundingBox$$($stageP1_targetCoordinateSpace$$8$$) {
  var $bounds$$21_stageP2$$ = this.$getContentBounds$($stageP1_targetCoordinateSpace$$8$$);
  $stageP1_targetCoordinateSpace$$8$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this, new D.$DvtPoint$$($bounds$$21_stageP2$$.x, $bounds$$21_stageP2$$.y));
  $bounds$$21_stageP2$$ = (0,D.$JSCompiler_StaticMethods_localToStage$$)(this, new D.$DvtPoint$$($bounds$$21_stageP2$$.x + $bounds$$21_stageP2$$.$w$, $bounds$$21_stageP2$$.y + $bounds$$21_stageP2$$.$h$));
  return new D.$DvtRectangle$$($stageP1_targetCoordinateSpace$$8$$.x, $stageP1_targetCoordinateSpace$$8$$.y, $bounds$$21_stageP2$$.x - $stageP1_targetCoordinateSpace$$8$$.x, $bounds$$21_stageP2$$.y - $stageP1_targetCoordinateSpace$$8$$.y)
};
D.$JSCompiler_prototypeAlias$$.$getTargetElem$ = function $$JSCompiler_prototypeAlias$$$$getTargetElem$$() {
  return this.$getElem$()
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getCategories$ = (0,D.$JSCompiler_returnArg$$)(D.$JSCompiler_alias_NULL$$);
D.$JSCompiler_StaticMethods_addOutLinkId$$ = function $$JSCompiler_StaticMethods_addOutLinkId$$$($JSCompiler_StaticMethods_addOutLinkId$self$$, $id$$41$$) {
  $JSCompiler_StaticMethods_addOutLinkId$self$$.$_outLinkIds$ || ($JSCompiler_StaticMethods_addOutLinkId$self$$.$_outLinkIds$ = []);
  $JSCompiler_StaticMethods_addOutLinkId$self$$.$_outLinkIds$.push($id$$41$$)
};
D.$JSCompiler_StaticMethods_addInLinkId$$ = function $$JSCompiler_StaticMethods_addInLinkId$$$($JSCompiler_StaticMethods_addInLinkId$self$$, $id$$43$$) {
  $JSCompiler_StaticMethods_addInLinkId$self$$.$_inLinkIds$ || ($JSCompiler_StaticMethods_addInLinkId$self$$.$_inLinkIds$ = []);
  $JSCompiler_StaticMethods_addInLinkId$self$$.$_inLinkIds$.push($id$$43$$)
};
D.$DvtDiagram$$ = function $$DvtDiagram$$$($context$$71$$, $callback$$47$$, $callbackObj$$12$$) {
  this.Init($context$$71$$, $callback$$47$$, $callbackObj$$12$$)
};
(0,D.$goog$exportPath_$$)("DvtDiagram", D.$DvtDiagram$$);
D.$DvtObj$$.$createSubclass$(D.$DvtDiagram$$, D.$DvtBaseDiagram$$, "DvtDiagram");
D.$DvtDiagram$$.prototype.Init = function $$DvtDiagram$$$$Init$($context$$72$$, $callback$$48$$, $callbackObj$$13$$) {
  D.$DvtDiagram$$.$superclass$.Init.call(this, $context$$72$$, $callback$$48$$, $callbackObj$$13$$);
  this.$Defaults$ = new D.$DvtDiagramDefaults$$;
  this.$_eventHandler$ = new D.$DvtDiagramEventManager$$($context$$72$$, this.$processEvent$, this);
  this.$_eventHandler$.$addListeners$(this);
  (0,D.$DvtAgent$isTouchDevice$$)() || (0,D.$JSCompiler_StaticMethods_setKeyboardHandler$$)(this.$_eventHandler$, new D.$DvtDiagramKeyboardHandler$$(this, this.$_eventHandler$));
  this.$_nodes$ = {};
  this.$_arNodeIds$ = [];
  this.$_links$ = {};
  this.$_arLinkIds$ = [];
  this.$_renderCount$ = 0
};
D.$DvtDiagram$$.newInstance = function $$DvtDiagram$$$newInstance$($context$$73$$, $callback$$49$$, $callbackObj$$14$$) {
  return new D.$DvtDiagram$$($context$$73$$, $callback$$49$$, $callbackObj$$14$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDiagram$$.prototype;
D.$JSCompiler_prototypeAlias$$.$PreRender$ = function $$JSCompiler_prototypeAlias$$$$PreRender$$() {
  !this.$_isResize$ && this.$_bRendered$ && ("none" != this.$_dataChangeAnim$ && (this.$_oldDataAnimState$ = {id:this.getId(), getId:(0,D.$JSCompiler_get$$)("id"), options:this.$getOptions$(), getOptions:(0,D.$JSCompiler_get$$)("options"), panZoomMatrix:this.$_panZoomCanvas$.$_contentPane$.$getMatrix$(), getPanZoomMatrix:(0,D.$JSCompiler_get$$)("panZoomMatrix"), nodes:this.$_nodes$ ? (0,D.$JSCompiler_StaticMethods_GetAllNodeObjects$$)(this) : [], links:this.$_links$ ? (0,D.$JSCompiler_StaticMethods_GetAllLinkObjects$$)(this) : 
  [], getNodes:(0,D.$JSCompiler_get$$)("nodes"), getLinks:(0,D.$JSCompiler_get$$)("links")}, this.$_oldDataAnimState$.$getOptions$ = this.$_oldDataAnimState$.getOptions, this.$_oldDataAnimState$.$getPanZoomMatrix$ = this.$_oldDataAnimState$.getPanZoomMatrix, this.$_oldDataAnimState$.getId = this.$_oldDataAnimState$.getId, this.$_oldDataAnimState$.$getNodes$ = this.$_oldDataAnimState$.getNodes, this.$_oldDataAnimState$.$getLinks$ = this.$_oldDataAnimState$.getLinks), this.$_bRendered$ = D.$JSCompiler_alias_FALSE$$, 
  this.$_oldPanZoomCanvas$ = this.$_panZoomCanvas$);
  this.$_isResize$ || this.$ResetNodesAndLinks$()
};
D.$JSCompiler_prototypeAlias$$.$ResetNodesAndLinks$ = function $$JSCompiler_prototypeAlias$$$$ResetNodesAndLinks$$() {
  this.$_linksPane$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$_nodesPane$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$_topPane$ = new D.$DvtContainer$$(this.$getCtx$());
  this.$_nodes$ = {};
  this.$_arNodeIds$ = [];
  this.$_links$ = {};
  this.$_arLinkIds$ = [];
  this.$_highlightedObjects$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$_onAnimationEnd$ = function $$JSCompiler_prototypeAlias$$$$_onAnimationEnd$$() {
  this.$_deleteContainer$ && (this.removeChild(this.$_deleteContainer$), this.$_deleteContainer$.$destroy$());
  this.$_deleteContainer$ = D.$JSCompiler_alias_NULL$$;
  this.$_animation$ && (this.$_animation$ = D.$JSCompiler_alias_NULL$$, this.$__getEventManager$().$addListeners$(this))
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($animationHandler$$, $oldDiagramState$$) {
  var $playable$$6$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), D.$JSCompiler_alias_NULL$$, $animationHandler$$.$getAnimationDuration$()), $oldMat$$ = $oldDiagramState$$.$getPanZoomMatrix$(), $newMat$$ = this.$_panZoomCanvas$.$_contentPane$.$getMatrix$();
  $oldMat$$.$equals$($newMat$$) || (this.$_panZoomCanvas$.$_contentPane$.$setMatrix$($oldMat$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$6$$.$_animator$, "typeMatrix", this.$_panZoomCanvas$.$_contentPane$, this.$_panZoomCanvas$.$_contentPane$.$getMatrix$, this.$_panZoomCanvas$.$_contentPane$.$setMatrix$, $newMat$$));
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($animationHandler$$, $oldDiagramState$$.$getNodes$(), this.$_nodes$ ? (0,D.$JSCompiler_StaticMethods_GetAllNodeObjects$$)(this) : []);
  (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($animationHandler$$, $oldDiagramState$$.$getLinks$(), this.$_links$ ? (0,D.$JSCompiler_StaticMethods_GetAllLinkObjects$$)(this) : []);
  $animationHandler$$.add($playable$$6$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$RenderComponentInternal$ = function $$JSCompiler_prototypeAlias$$$$RenderComponentInternal$$($animator$$15$$) {
  var $emptyDiagram$$1$$ = D.$JSCompiler_alias_FALSE$$;
  if(!this.$_bRendered$ && !this.$_isResize$) {
    var $linksData$$inline_2670_nodesData$$inline_2663$$ = this.$getOptions$().nodes;
    if($linksData$$inline_2670_nodesData$$inline_2663$$) {
      for(var $i$$inline_2664_i$$inline_2671$$ = 0;$i$$inline_2664_i$$inline_2671$$ < $linksData$$inline_2670_nodesData$$inline_2663$$.length;$i$$inline_2664_i$$inline_2671$$++) {
        var $linkData$$inline_2672_linkId$$inline_2674_node$$inline_2666_nodeData$$inline_2665$$ = $linksData$$inline_2670_nodesData$$inline_2663$$[$i$$inline_2664_i$$inline_2671$$], $linkData$$inline_2672_linkId$$inline_2674_node$$inline_2666_nodeData$$inline_2665$$ = D.$DvtJSONUtils$$.$merge$($linkData$$inline_2672_linkId$$inline_2674_node$$inline_2666_nodeData$$inline_2665$$, this.$getOptions$().styleDefaults.nodeDefaults), $linkData$$inline_2672_linkId$$inline_2674_node$$inline_2666_nodeData$$inline_2665$$ = 
        new D.$DvtDiagramNode$$(this.$getCtx$(), this, $linkData$$inline_2672_linkId$$inline_2674_node$$inline_2666_nodeData$$inline_2665$$), $nodeId$$inline_2667_startNode$$inline_2675$$ = $linkData$$inline_2672_linkId$$inline_2674_node$$inline_2666_nodeData$$inline_2665$$.getId();
        $linkData$$inline_2672_linkId$$inline_2674_node$$inline_2666_nodeData$$inline_2665$$.$isHidden$() ? this.$_arNodeIds$.push($nodeId$$inline_2667_startNode$$inline_2675$$) : ($linkData$$inline_2672_linkId$$inline_2674_node$$inline_2666_nodeData$$inline_2665$$.$render$(this.$_nodesPane$), this.$_arNodeIds$.push($nodeId$$inline_2667_startNode$$inline_2675$$), this.$_nodes$[$nodeId$$inline_2667_startNode$$inline_2675$$] = $linkData$$inline_2672_linkId$$inline_2674_node$$inline_2666_nodeData$$inline_2665$$)
      }
    }
    if($linksData$$inline_2670_nodesData$$inline_2663$$ = this.$getOptions$().links) {
      for($i$$inline_2664_i$$inline_2671$$ = 0;$i$$inline_2664_i$$inline_2671$$ < $linksData$$inline_2670_nodesData$$inline_2663$$.length;$i$$inline_2664_i$$inline_2671$$++) {
        var $linkData$$inline_2672_linkId$$inline_2674_node$$inline_2666_nodeData$$inline_2665$$ = $linksData$$inline_2670_nodesData$$inline_2663$$[$i$$inline_2664_i$$inline_2671$$], $linkData$$inline_2672_linkId$$inline_2674_node$$inline_2666_nodeData$$inline_2665$$ = D.$DvtJSONUtils$$.$merge$($linkData$$inline_2672_linkId$$inline_2674_node$$inline_2666_nodeData$$inline_2665$$, this.$getOptions$().styleDefaults.linkDefaults), $endNode$$inline_2676_link$$inline_2673$$ = new D.$DvtDiagramLink$$(this.$getCtx$(), 
        this, $linkData$$inline_2672_linkId$$inline_2674_node$$inline_2666_nodeData$$inline_2665$$), $linkData$$inline_2672_linkId$$inline_2674_node$$inline_2666_nodeData$$inline_2665$$ = $endNode$$inline_2676_link$$inline_2673$$.getId();
        $endNode$$inline_2676_link$$inline_2673$$.$isHidden$() ? this.$_arLinkIds$.push($linkData$$inline_2672_linkId$$inline_2674_node$$inline_2666_nodeData$$inline_2665$$) : ($endNode$$inline_2676_link$$inline_2673$$.$render$(this.$_linksPane$), this.$_arLinkIds$.push($linkData$$inline_2672_linkId$$inline_2674_node$$inline_2666_nodeData$$inline_2665$$), this.$_links$[$linkData$$inline_2672_linkId$$inline_2674_node$$inline_2666_nodeData$$inline_2665$$] = $endNode$$inline_2676_link$$inline_2673$$, 
        $nodeId$$inline_2667_startNode$$inline_2675$$ = this.$GetNodeById$($endNode$$inline_2676_link$$inline_2673$$.$getStartId$()), $endNode$$inline_2676_link$$inline_2673$$ = this.$GetNodeById$($endNode$$inline_2676_link$$inline_2673$$.$getEndId$()), (0,D.$JSCompiler_StaticMethods_addOutLinkId$$)($nodeId$$inline_2667_startNode$$inline_2675$$, $linkData$$inline_2672_linkId$$inline_2674_node$$inline_2666_nodeData$$inline_2665$$), (0,D.$JSCompiler_StaticMethods_addInLinkId$$)($endNode$$inline_2676_link$$inline_2673$$, 
        $linkData$$inline_2672_linkId$$inline_2674_node$$inline_2666_nodeData$$inline_2665$$))
      }
    }
    $emptyDiagram$$1$$ = 0 === window.Object.keys(this.$_nodes$).length;
    (0,D.$JSCompiler_StaticMethods_setKeyboardFocusArray$$)(this.$getCtx$(), [this]);
    this.$_renderCount$++
  }
  if($emptyDiagram$$1$$) {
    this.$_renderCount$ = this.$_bRendered$ ? this.$_renderCount$ : this.$_renderCount$ - 1, 0 === this.$_renderCount$ && (0,D.$JSCompiler_StaticMethods__processContent$$)(this, $animator$$15$$, $emptyDiagram$$1$$)
  }else {
    this.contains(this.$_oldPanZoomCanvas$) || this.$addChild$(this.$_oldPanZoomCanvas$);
    var $thisRef$$5$$ = this;
    this.$layout$($animator$$15$$).then(function() {
      $thisRef$$5$$.$_renderCount$ = $thisRef$$5$$.$_bRendered$ ? $thisRef$$5$$.$_renderCount$ : $thisRef$$5$$.$_renderCount$ - 1;
      0 === $thisRef$$5$$.$_renderCount$ && (0,D.$JSCompiler_StaticMethods__processContent$$)($thisRef$$5$$, $animator$$15$$, $emptyDiagram$$1$$)
    }, function() {
      $thisRef$$5$$.$_renderCount$ = $thisRef$$5$$.$_bRendered$ ? $thisRef$$5$$.$_renderCount$ : $thisRef$$5$$.$_renderCount$ - 1;
      0 === $thisRef$$5$$.$_renderCount$ && ($thisRef$$5$$.removeChild($thisRef$$5$$.$_oldPanZoomCanvas$), $thisRef$$5$$.$_oldPanZoomCanvas$ = D.$JSCompiler_alias_NULL$$, $thisRef$$5$$.$_bRendered$ = D.$JSCompiler_alias_TRUE$$)
    })
  }
};
D.$JSCompiler_StaticMethods__processContent$$ = function $$JSCompiler_StaticMethods__processContent$$$($JSCompiler_StaticMethods__processContent$self$$, $animator$$16_zoom$$1$$, $bEmptyDiagram_contentDim$$) {
  var $calcViewBounds$$;
  if(!$bEmptyDiagram_contentDim$$) {
    $JSCompiler_StaticMethods__processContent$self$$.removeChild($JSCompiler_StaticMethods__processContent$self$$.$_oldPanZoomCanvas$);
    $JSCompiler_StaticMethods__processContent$self$$.$_processHighlighting$();
    $JSCompiler_StaticMethods__processContent$self$$.$_processInitialSelections$();
    if($calcViewBounds$$ = $JSCompiler_StaticMethods__processContent$self$$.$_cachedViewBounds$ == D.$JSCompiler_alias_NULL$$) {
      $JSCompiler_StaticMethods__processContent$self$$.$_cachedViewBounds$ = (0,D.$JSCompiler_StaticMethods_CalcViewBounds$$)($JSCompiler_StaticMethods__processContent$self$$, $animator$$16_zoom$$1$$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$)
    }
    var $ah$$1_pzc$$inline_2680$$ = $JSCompiler_StaticMethods__processContent$self$$.$_panZoomCanvas$;
    if($JSCompiler_StaticMethods__processContent$self$$.$_bRendered$) {
      if($JSCompiler_StaticMethods__processContent$self$$.$_isResize$) {
        var $fitBounds$$inline_2683_viewBounds$$inline_2681$$ = $JSCompiler_StaticMethods__processContent$self$$.$AdjustMinZoom$($animator$$16_zoom$$1$$, $JSCompiler_StaticMethods__processContent$self$$.$_cachedViewBounds$), $fitBounds$$inline_2683_viewBounds$$inline_2681$$ = $bLayoutViewport$$inline_2682$$ ? (0,D.$JSCompiler_StaticMethods_GetLayoutViewport$$)($JSCompiler_StaticMethods__processContent$self$$) : $fitBounds$$inline_2683_viewBounds$$inline_2681$$ ? $fitBounds$$inline_2683_viewBounds$$inline_2681$$ : 
        $JSCompiler_StaticMethods__processContent$self$$.$_cachedViewBounds$;
        $ah$$1_pzc$$inline_2680$$.$_bZoomToFitEnabled$ = D.$JSCompiler_alias_TRUE$$;
        $ah$$1_pzc$$inline_2680$$.$zoomToFit$(D.$JSCompiler_alias_NULL$$, $fitBounds$$inline_2683_viewBounds$$inline_2681$$);
        $ah$$1_pzc$$inline_2680$$.$_bZoomToFitEnabled$ = $JSCompiler_StaticMethods__processContent$self$$.$_zoomingEnabled$
      }
    }else {
      $JSCompiler_StaticMethods__processContent$self$$.$AdjustMinZoom$($animator$$16_zoom$$1$$, $JSCompiler_StaticMethods__processContent$self$$.$_cachedViewBounds$);
      if(!$JSCompiler_StaticMethods__processContent$self$$.$_isResize$) {
        var $bLayoutViewport$$inline_2682$$ = $JSCompiler_StaticMethods__processContent$self$$.$_layoutViewport$ ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$, $fitBounds$$inline_2683_viewBounds$$inline_2681$$ = $bLayoutViewport$$inline_2682$$ ? (0,D.$JSCompiler_StaticMethods_GetLayoutViewport$$)($JSCompiler_StaticMethods__processContent$self$$) : $JSCompiler_StaticMethods__processContent$self$$.$_cachedViewBounds$;
        $bLayoutViewport$$inline_2682$$ && ($ah$$1_pzc$$inline_2680$$.$_zoomToFitPadding$ = 0);
        $ah$$1_pzc$$inline_2680$$.$zoomToFit$(D.$JSCompiler_alias_NULL$$, $fitBounds$$inline_2683_viewBounds$$inline_2681$$)
      }
      $ah$$1_pzc$$inline_2680$$.$_bPanningEnabled$ = $JSCompiler_StaticMethods__processContent$self$$.$_panningEnabled$;
      $ah$$1_pzc$$inline_2680$$.$_bZoomingEnabled$ = $JSCompiler_StaticMethods__processContent$self$$.$_zoomingEnabled$;
      $ah$$1_pzc$$inline_2680$$.$_bZoomToFitEnabled$ = $JSCompiler_StaticMethods__processContent$self$$.$_zoomingEnabled$
    }
  }
  $JSCompiler_StaticMethods__processContent$self$$.$_oldPanZoomCanvas$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods__processContent$self$$.$_bRendered$ || ($JSCompiler_StaticMethods__processContent$self$$.$_animation$ && $JSCompiler_StaticMethods__processContent$self$$.$_animation$.stop(D.$JSCompiler_alias_TRUE$$), (0,D.$DvtAgent$isEnvironmentBrowser$$)() && $JSCompiler_StaticMethods__processContent$self$$.$getInitAnim$() && !$JSCompiler_StaticMethods__processContent$self$$.$_oldDataAnimState$ ? $JSCompiler_StaticMethods__processContent$self$$.$_animation$ = D.$DvtBlackBoxAnimationHandler$$.$getInAnimation$($JSCompiler_StaticMethods__processContent$self$$.$getCtx$(), 
  $JSCompiler_StaticMethods__processContent$self$$.$getInitAnim$(), $JSCompiler_StaticMethods__processContent$self$$, D.$JSCompiler_alias_NULL$$, $JSCompiler_StaticMethods__processContent$self$$.$getAnimationDuration$()) : "none" != $JSCompiler_StaticMethods__processContent$self$$.$_dataChangeAnim$ && $JSCompiler_StaticMethods__processContent$self$$.$_oldDataAnimState$ && ($JSCompiler_StaticMethods__processContent$self$$.$_deleteContainer$ = new D.$DvtContainer$$($JSCompiler_StaticMethods__processContent$self$$.$getCtx$(), 
  "Delete Container"), $JSCompiler_StaticMethods__processContent$self$$.$addChild$($JSCompiler_StaticMethods__processContent$self$$.$_deleteContainer$), $ah$$1_pzc$$inline_2680$$ = new D.$DvtDiagramDataAnimationHandler$$($JSCompiler_StaticMethods__processContent$self$$.$getCtx$(), $JSCompiler_StaticMethods__processContent$self$$.$_deleteContainer$, $JSCompiler_StaticMethods__processContent$self$$.$_oldDataAnimState$, $JSCompiler_StaticMethods__processContent$self$$), (0,D.$JSCompiler_StaticMethods_constructAnimation$$)($ah$$1_pzc$$inline_2680$$, 
  [$JSCompiler_StaticMethods__processContent$self$$.$_oldDataAnimState$], [$JSCompiler_StaticMethods__processContent$self$$]), $JSCompiler_StaticMethods__processContent$self$$.$_animation$ = $ah$$1_pzc$$inline_2680$$.$getAnimation$()), $JSCompiler_StaticMethods__processContent$self$$.$_animation$ ? ($JSCompiler_StaticMethods__processContent$self$$.$__getEventManager$().$hideTooltip$(), $JSCompiler_StaticMethods__processContent$self$$.$__getEventManager$().$removeListeners$($JSCompiler_StaticMethods__processContent$self$$), 
  $JSCompiler_StaticMethods__processContent$self$$.$_animation$.$setOnEnd$($JSCompiler_StaticMethods__processContent$self$$.$_onAnimationEnd$, $JSCompiler_StaticMethods__processContent$self$$), $JSCompiler_StaticMethods__processContent$self$$.$_animation$.play()) : $JSCompiler_StaticMethods__processContent$self$$.$_onAnimationEnd$());
  $JSCompiler_StaticMethods__processContent$self$$.$_bRendered$ = D.$JSCompiler_alias_TRUE$$;
  (0,D.$JSCompiler_StaticMethods_RefreshEmptyText$$)($JSCompiler_StaticMethods__processContent$self$$, $bEmptyDiagram_contentDim$$);
  $JSCompiler_StaticMethods__processContent$self$$.$_panningEnabled$ && ($bEmptyDiagram_contentDim$$ = $JSCompiler_StaticMethods__processContent$self$$.$_cachedViewBounds$, $bEmptyDiagram_contentDim$$ != D.$JSCompiler_alias_NULL$$ && ($animator$$16_zoom$$1$$ = $JSCompiler_StaticMethods__processContent$self$$.$_panZoomCanvas$.$getZoom$($animator$$16_zoom$$1$$), $JSCompiler_StaticMethods__processContent$self$$.$ConstrainPanning$($bEmptyDiagram_contentDim$$.x, $bEmptyDiagram_contentDim$$.y, $bEmptyDiagram_contentDim$$.$w$, 
  $bEmptyDiagram_contentDim$$.$h$, $animator$$16_zoom$$1$$)));
  $JSCompiler_StaticMethods__processContent$self$$.$_layoutViewport$ = D.$JSCompiler_alias_NULL$$;
  $JSCompiler_StaticMethods__processContent$self$$.$_layoutViewportContainerId$ = D.$JSCompiler_alias_NULL$$;
  $calcViewBounds$$ && ($JSCompiler_StaticMethods__processContent$self$$.$_cachedViewBounds$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDiagram$$.prototype;
D.$JSCompiler_prototypeAlias$$.$SetOptions$ = function $$JSCompiler_prototypeAlias$$$$SetOptions$$($options$$110$$) {
  D.$DvtDiagram$$.$superclass$.$SetOptions$.call(this, $options$$110$$);
  (0,D.$JSCompiler_StaticMethods_parseComponentJson$$)(this, this.$Options$);
  this.$_panningEnabled$ = "none" != this.$Options$.panning;
  this.$_zoomingEnabled$ = "none" != this.$Options$.zooming;
  this.$_controlPanelBehavior$ = "hidden";
  this.$_dataChangeAnim$ = this.$Options$.animationOnDataChange;
  this.$_initAnim$ = "auto" == this.$Options$.animationOnDisplay ? D.$DvtBlackBoxAnimationHandler$$.$ALPHA_FADE$ : D.$JSCompiler_alias_NULL$$;
  this.$setSelectionMode$(this.$Options$.selectionMode);
  this.$_emptyText$ = this.$Options$.emptyText ? this.$Options$.emptyText : (0,D.$DvtBundle$getTranslation$$)(this.$Options$, "labelNoData", "DvtUtilBundle", "NO_DATA")
};
D.$JSCompiler_prototypeAlias$$.$getMaxZoom$ = function $$JSCompiler_prototypeAlias$$$$getMaxZoom$$() {
  var $f_maxZoom$$1$$ = this.$getOptions$().maxZoom, $f_maxZoom$$1$$ = (0,window.parseFloat)($f_maxZoom$$1$$);
  return 0 < $f_maxZoom$$1$$ ? $f_maxZoom$$1$$ : 1
};
D.$JSCompiler_prototypeAlias$$.$getMinZoom$ = function $$JSCompiler_prototypeAlias$$$$getMinZoom$$() {
  var $minZoom$$1$$ = this.$getOptions$().minZoom;
  if($minZoom$$1$$) {
    var $f$$1$$ = (0,window.parseFloat)($minZoom$$1$$);
    0 < $f$$1$$ && ($minZoom$$1$$ = window.Math.min($f$$1$$, this.$getMaxZoom$()));
    return $minZoom$$1$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$getAnimationDuration$ = function $$JSCompiler_prototypeAlias$$$$getAnimationDuration$$() {
  return(0,D.$DvtStyleUtils$getTimeMilliseconds$$)(this.$getOptions$().styleDefaults.animationDuration) / 1E3
};
D.$JSCompiler_prototypeAlias$$.$processEvent$ = function $$JSCompiler_prototypeAlias$$$$processEvent$$($event$$153$$) {
  var $type$$111$$ = $event$$153$$.$getType$();
  ("categoryRollOver" == $type$$111$$ || "categoryRollOut" == $type$$111$$) && this.$_processHighlighting$();
  $event$$153$$ && this.$__dispatchEvent$($event$$153$$)
};
D.$JSCompiler_prototypeAlias$$.$layout$ = function $$JSCompiler_prototypeAlias$$$$layout$$($animator$$18$$) {
  for(var $layoutFunc_promise$$ = this.$getOptions$().layout, $layoutContext$$2$$ = (0,D.$JSCompiler_StaticMethods_CreateEmptyLayoutContext$$)(this), $nodeIds$$ = {}, $link$$11_n$$4$$ = 0;$link$$11_n$$4$$ < this.$_arNodeIds$.length;$link$$11_n$$4$$++) {
    var $nodeId$$5_startId$$1$$ = this.$_arNodeIds$[$link$$11_n$$4$$];
    this.$GetNodeById$($nodeId$$5_startId$$1$$) && ($nodeIds$$[$nodeId$$5_startId$$1$$] = D.$JSCompiler_alias_TRUE$$, $layoutContext$$2$$.$addNode$(this.$CreateLayoutContextNode$(this.$GetNodeById$($nodeId$$5_startId$$1$$))))
  }
  for(var $linkId$$4$$ in this.$_links$) {
    if($link$$11_n$$4$$ = this.$GetLinkById$($linkId$$4$$)) {
      var $nodeId$$5_startId$$1$$ = $link$$11_n$$4$$.getData().startNode, $endId$$1$$ = $link$$11_n$$4$$.getData().endNode;
      $nodeIds$$[$nodeId$$5_startId$$1$$] && $nodeIds$$[$endId$$1$$] && (0,D.$JSCompiler_StaticMethods_addLink$$)($layoutContext$$2$$, this.$CreateLayoutContextLink$($link$$11_n$$4$$, $nodeId$$5_startId$$1$$, $endId$$1$$))
    }
  }
  if($layoutFunc_promise$$ && "function" == typeof $layoutFunc_promise$$) {
    var $thisRef$$6$$ = this;
    ($layoutFunc_promise$$ = $layoutFunc_promise$$($layoutContext$$2$$)) || ($layoutFunc_promise$$ = {then:function $$layoutFunc_promise$$$then$($animator$$18$$) {
      $animator$$18$$()
    }});
    this.$setAlphas$(0);
    $layoutFunc_promise$$.then(function() {
      1 === $thisRef$$6$$.$_renderCount$ && ($thisRef$$6$$.$setAlphas$(1), $thisRef$$6$$.$ApplyLayoutContext$($layoutContext$$2$$, $animator$$18$$, D.$JSCompiler_alias_TRUE$$))
    }, (0,D.$JSCompiler_emptyFn$$)());
    return $layoutFunc_promise$$
  }
  this.$Log$("DvtDiagram: Layout function is not defined", 1)
};
D.$JSCompiler_prototypeAlias$$.$setAlphas$ = function $$JSCompiler_prototypeAlias$$$$setAlphas$$($alpha$$8$$) {
  this.$_bRendered$ || (this.$_linksPane$.$setAlpha$($alpha$$8$$), this.$_nodesPane$.$setAlpha$($alpha$$8$$))
};
D.$JSCompiler_prototypeAlias$$.$GetNodeById$ = function $$JSCompiler_prototypeAlias$$$$GetNodeById$$($id$$45$$) {
  return this.$_nodes$[$id$$45$$]
};
D.$JSCompiler_prototypeAlias$$.$GetLinkById$ = function $$JSCompiler_prototypeAlias$$$$GetLinkById$$($id$$46$$) {
  return this.$_links$[$id$$46$$]
};
D.$JSCompiler_prototypeAlias$$.$GetAllLinks$ = (0,D.$JSCompiler_get$$)("$_arLinkIds$");
D.$JSCompiler_StaticMethods_GetAllLinkObjects$$ = function $$JSCompiler_StaticMethods_GetAllLinkObjects$$$($JSCompiler_StaticMethods_GetAllLinkObjects$self$$) {
  var $allLinks$$ = [], $linkId$$5$$;
  for($linkId$$5$$ in $JSCompiler_StaticMethods_GetAllLinkObjects$self$$.$_links$) {
    $allLinks$$.push($JSCompiler_StaticMethods_GetAllLinkObjects$self$$.$_links$[$linkId$$5$$])
  }
  return $allLinks$$
};
D.$DvtDiagram$$.prototype.$GetAllNodes$ = (0,D.$JSCompiler_get$$)("$_arNodeIds$");
D.$JSCompiler_StaticMethods_GetAllNodeObjects$$ = function $$JSCompiler_StaticMethods_GetAllNodeObjects$$$($JSCompiler_StaticMethods_GetAllNodeObjects$self$$) {
  var $allNodes$$ = [], $nodeId$$6$$;
  for($nodeId$$6$$ in $JSCompiler_StaticMethods_GetAllNodeObjects$self$$.$_nodes$) {
    $allNodes$$.push($JSCompiler_StaticMethods_GetAllNodeObjects$self$$.$_nodes$[$nodeId$$6$$])
  }
  return $allNodes$$
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDiagram$$.prototype;
D.$JSCompiler_prototypeAlias$$.$HandleZoomEvent$ = function $$JSCompiler_prototypeAlias$$$$HandleZoomEvent$$($event$$154$$) {
  D.$DvtDiagram$$.$superclass$.$HandleZoomEvent$.call(this, $event$$154$$);
  switch($event$$154$$.$getSubType$()) {
    case "adjustPanConstraints":
      if(this.$_panningEnabled$) {
        var $nodeId$$7_zoom$$2$$ = $event$$154$$.$_newZoom$, $JSCompiler_StaticMethods_rerenderOnZoom$self$$inline_2723_contentDim$$1$$ = this.$_cachedViewBounds$ ? this.$_cachedViewBounds$ : (0,D.$JSCompiler_StaticMethods_CalcViewBounds$$)(this, $event$$154$$.$_animator$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$);
        this.$ConstrainPanning$($JSCompiler_StaticMethods_rerenderOnZoom$self$$inline_2723_contentDim$$1$$.x, $JSCompiler_StaticMethods_rerenderOnZoom$self$$inline_2723_contentDim$$1$$.y, $JSCompiler_StaticMethods_rerenderOnZoom$self$$inline_2723_contentDim$$1$$.$w$, $JSCompiler_StaticMethods_rerenderOnZoom$self$$inline_2723_contentDim$$1$$.$h$, $nodeId$$7_zoom$$2$$)
      }
      break;
    case "zoomToFitCalcBounds":
      this.$_layoutViewport$ || ($JSCompiler_StaticMethods_rerenderOnZoom$self$$inline_2723_contentDim$$1$$ = this.$_cachedViewBounds$ ? this.$_cachedViewBounds$ : (0,D.$JSCompiler_StaticMethods_CalcViewBounds$$)(this, $event$$154$$.$_animator$, D.$JSCompiler_alias_VOID$$, D.$JSCompiler_alias_VOID$$), $event$$154$$.$_zoomToFitBounds$ = $JSCompiler_StaticMethods_rerenderOnZoom$self$$inline_2723_contentDim$$1$$);
      break;
    case "zoomed":
      if(this.$getOptions$().zoomRenderer && $event$$154$$.$_oldZoom$ !== $event$$154$$.$_newZoom$) {
        for($nodeId$$7_zoom$$2$$ in this.$_nodes$) {
          var $JSCompiler_StaticMethods_rerenderOnZoom$self$$inline_2723_contentDim$$1$$ = this.$GetNodeById$($nodeId$$7_zoom$$2$$), $event$$inline_2724_state$$inline_2726$$ = $event$$154$$;
          if($JSCompiler_StaticMethods_rerenderOnZoom$self$$inline_2723_contentDim$$1$$.$_diagram$.$getOptions$().zoomRenderer) {
            var $prevState$$inline_2725$$ = $JSCompiler_StaticMethods_rerenderOnZoom$self$$inline_2723_contentDim$$1$$.$_getState$($event$$inline_2724_state$$inline_2726$$.$_oldZoom$), $event$$inline_2724_state$$inline_2726$$ = $JSCompiler_StaticMethods_rerenderOnZoom$self$$inline_2723_contentDim$$1$$.$_getState$($event$$inline_2724_state$$inline_2726$$.$_newZoom$);
            (0,D.$JSCompiler_StaticMethods__applyCustomNodeContent$$)($JSCompiler_StaticMethods_rerenderOnZoom$self$$inline_2723_contentDim$$1$$, $JSCompiler_StaticMethods_rerenderOnZoom$self$$inline_2723_contentDim$$1$$.$_diagram$.$getOptions$().zoomRenderer, $event$$inline_2724_state$$inline_2726$$, $prevState$$inline_2725$$)
          }
        }
      }
  }
};
D.$JSCompiler_prototypeAlias$$.$prepareForDataChange$ = (0,D.$JSCompiler_emptyFn$$)();
D.$JSCompiler_prototypeAlias$$.$getNavigableLinksForNodeId$ = function $$JSCompiler_prototypeAlias$$$$getNavigableLinksForNodeId$$($nodeId$$8$$) {
  var $links$$ = [], $linkId$$6$$;
  for($linkId$$6$$ in this.$_links$) {
    var $link$$12$$ = this.$GetLinkById$($linkId$$6$$), $startId$$2$$ = $link$$12$$.$getStartId$(), $endId$$2$$ = $link$$12$$.$getEndId$();
    ($startId$$2$$ == $nodeId$$8$$ || $endId$$2$$ == $nodeId$$8$$) && $link$$12$$.$_bVisible$ && $links$$.push($link$$12$$)
  }
  return $links$$
};
D.$JSCompiler_prototypeAlias$$.$GetComponentDescription$ = function $$JSCompiler_prototypeAlias$$$$GetComponentDescription$$() {
  return(0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", "DIAGRAM")
};
D.$JSCompiler_prototypeAlias$$.$_processInitialSelections$ = function $$JSCompiler_prototypeAlias$$$$_processInitialSelections$$() {
  if(this.$Options$.selection && this.$isSelectionSupported$()) {
    var $targets$$1$$ = [], $nodeId$$9$$;
    for($nodeId$$9$$ in this.$_nodes$) {
      $targets$$1$$.push(this.$GetNodeById$($nodeId$$9$$))
    }
    for(var $linkId$$7$$ in this.$_links$) {
      $targets$$1$$.push(this.$GetLinkById$($linkId$$7$$))
    }
    (0,D.$JSCompiler_StaticMethods_processInitialSelections$$)(this.$getSelectionHandler$(), this.$Options$.selection, $targets$$1$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$_processHighlighting$ = function $$JSCompiler_prototypeAlias$$$$_processHighlighting$$() {
  this.$_highlightedObjects$ && (this.$_updateAlphas$(D.$JSCompiler_alias_FALSE$$, this.$_highlightedObjects$), this.$_highlightedObjects$ = D.$JSCompiler_alias_NULL$$);
  var $categories$$6$$ = this.$Options$.highlightedCategories;
  if($categories$$6$$) {
    var $bAnyMatched$$ = "any" == this.$Options$.highlightMatch;
    this.$_highlightedObjects$ = {};
    var $highlightedLinks_highlightedNodes$$ = [], $link$$13_nodeHighlightMode$$inline_2730_nodeId$$10_outgoing$$inline_2732$$;
    for($link$$13_nodeHighlightMode$$inline_2730_nodeId$$10_outgoing$$inline_2732$$ in this.$_nodes$) {
      var $highlightedLinks$$inline_2733_node$$37$$ = this.$GetNodeById$($link$$13_nodeHighlightMode$$inline_2730_nodeId$$10_outgoing$$inline_2732$$), $incoming$$inline_2731_match$$4$$ = $bAnyMatched$$ ? D.$DvtArrayUtils$$.$hasAnyItem$($highlightedLinks$$inline_2733_node$$37$$.$getCategories$(), $categories$$6$$) : D.$DvtArrayUtils$$.$hasAllItems$($highlightedLinks$$inline_2733_node$$37$$.$getCategories$(), $categories$$6$$);
      $incoming$$inline_2731_match$$4$$ && (this.$_highlightedObjects$[$highlightedLinks$$inline_2733_node$$37$$.getId()] = $highlightedLinks$$inline_2733_node$$37$$, $highlightedLinks_highlightedNodes$$.push($highlightedLinks$$inline_2733_node$$37$$))
    }
    $link$$13_nodeHighlightMode$$inline_2730_nodeId$$10_outgoing$$inline_2732$$ = this.$Options$.nodeHighlightMode;
    if("node" != $link$$13_nodeHighlightMode$$inline_2730_nodeId$$10_outgoing$$inline_2732$$) {
      $incoming$$inline_2731_match$$4$$ = "nodeAndIncomingLinks" == $link$$13_nodeHighlightMode$$inline_2730_nodeId$$10_outgoing$$inline_2732$$ || "nodeAndLinks" == $link$$13_nodeHighlightMode$$inline_2730_nodeId$$10_outgoing$$inline_2732$$;
      $link$$13_nodeHighlightMode$$inline_2730_nodeId$$10_outgoing$$inline_2732$$ = "nodeAndOutgoingLinks" == $link$$13_nodeHighlightMode$$inline_2730_nodeId$$10_outgoing$$inline_2732$$ || "nodeAndLinks" == $link$$13_nodeHighlightMode$$inline_2730_nodeId$$10_outgoing$$inline_2732$$;
      for(var $highlightedLinks$$inline_2733_node$$37$$ = [], $nodeIdx$$inline_2734$$ = 0;$nodeIdx$$inline_2734$$ < $highlightedLinks_highlightedNodes$$.length;$nodeIdx$$inline_2734$$++) {
        for(var $idx$$inline_2737_node$$inline_2735$$ = $highlightedLinks_highlightedNodes$$[$nodeIdx$$inline_2734$$], $links$$inline_2736$$ = $incoming$$inline_2731_match$$4$$ && $idx$$inline_2737_node$$inline_2735$$.$_inLinkIds$ ? $idx$$inline_2737_node$$inline_2735$$.$_inLinkIds$ : [], $links$$inline_2736$$ = $link$$13_nodeHighlightMode$$inline_2730_nodeId$$10_outgoing$$inline_2732$$ && $idx$$inline_2737_node$$inline_2735$$.$_outLinkIds$ ? $links$$inline_2736$$.concat($idx$$inline_2737_node$$inline_2735$$.$_outLinkIds$) : 
        $links$$inline_2736$$, $idx$$inline_2737_node$$inline_2735$$ = 0;$idx$$inline_2737_node$$inline_2735$$ < $links$$inline_2736$$.length;$idx$$inline_2737_node$$inline_2735$$++) {
          var $linkId$$inline_2738$$ = $links$$inline_2736$$[$idx$$inline_2737_node$$inline_2735$$];
          this.$_highlightedObjects$[$linkId$$inline_2738$$] = this.$GetLinkById$($linkId$$inline_2738$$);
          $highlightedLinks$$inline_2733_node$$37$$.push(this.$GetLinkById$($linkId$$inline_2738$$))
        }
      }
      (0,D.$JSCompiler_StaticMethods__processLinkConnections$$)(this, $highlightedLinks$$inline_2733_node$$37$$)
    }
    var $highlightedLinks_highlightedNodes$$ = [], $linkId$$8$$;
    for($linkId$$8$$ in this.$_links$) {
      if($link$$13_nodeHighlightMode$$inline_2730_nodeId$$10_outgoing$$inline_2732$$ = this.$GetLinkById$($linkId$$8$$), $incoming$$inline_2731_match$$4$$ = $bAnyMatched$$ ? D.$DvtArrayUtils$$.$hasAnyItem$($link$$13_nodeHighlightMode$$inline_2730_nodeId$$10_outgoing$$inline_2732$$.$getCategories$(), $categories$$6$$) : D.$DvtArrayUtils$$.$hasAllItems$($link$$13_nodeHighlightMode$$inline_2730_nodeId$$10_outgoing$$inline_2732$$.$getCategories$(), $categories$$6$$)) {
        this.$_highlightedObjects$[$link$$13_nodeHighlightMode$$inline_2730_nodeId$$10_outgoing$$inline_2732$$.getId()] = $link$$13_nodeHighlightMode$$inline_2730_nodeId$$10_outgoing$$inline_2732$$, $highlightedLinks_highlightedNodes$$.push($link$$13_nodeHighlightMode$$inline_2730_nodeId$$10_outgoing$$inline_2732$$)
      }
    }
    "linkAndNodes" == this.$Options$.linkHighlightMode && (0,D.$JSCompiler_StaticMethods__processLinkConnections$$)(this, $highlightedLinks_highlightedNodes$$);
    this.$_updateAlphas$(D.$JSCompiler_alias_TRUE$$, this.$_highlightedObjects$)
  }
};
D.$JSCompiler_StaticMethods__processLinkConnections$$ = function $$JSCompiler_StaticMethods__processLinkConnections$$$($JSCompiler_StaticMethods__processLinkConnections$self$$, $highlightedLinks$$2$$) {
  for(var $linkIdx$$ = 0;$linkIdx$$ < $highlightedLinks$$2$$.length;$linkIdx$$++) {
    var $link$$14_linkEndId$$ = $highlightedLinks$$2$$[$linkIdx$$], $linkStartId$$ = $link$$14_linkEndId$$.$getStartId$(), $link$$14_linkEndId$$ = $link$$14_linkEndId$$.$getEndId$();
    $JSCompiler_StaticMethods__processLinkConnections$self$$.$_highlightedObjects$[$linkStartId$$] = $JSCompiler_StaticMethods__processLinkConnections$self$$.$GetNodeById$($linkStartId$$);
    $JSCompiler_StaticMethods__processLinkConnections$self$$.$_highlightedObjects$[$link$$14_linkEndId$$] = $JSCompiler_StaticMethods__processLinkConnections$self$$.$GetNodeById$($link$$14_linkEndId$$)
  }
};
D.$DvtDiagram$$.prototype.$_updateAlphas$ = function $$DvtDiagram$$$$$_updateAlphas$$($bHighlight$$, $highlightedObjects$$) {
  var $defaultAlpha$$ = $bHighlight$$ ? this.$Options$.styleDefaults._highlightAlpha : 1;
  this.$_linksPane$.$setAlpha$($defaultAlpha$$);
  this.$_nodesPane$.$setAlpha$($defaultAlpha$$);
  for(var $id$$47$$ in $highlightedObjects$$) {
    $bHighlight$$ ? this.$_topPane$.$addChild$($highlightedObjects$$[$id$$47$$]) : $highlightedObjects$$[$id$$47$$] instanceof D.$DvtDiagramLink$$ ? this.$_linksPane$.$addChild$($highlightedObjects$$[$id$$47$$]) : $highlightedObjects$$[$id$$47$$] instanceof D.$DvtDiagramNode$$ && this.$_nodesPane$.$addChild$($highlightedObjects$$[$id$$47$$])
  }
};
D.$DvtDiagram$$.prototype.$highlight$ = function $$DvtDiagram$$$$$highlight$$($categories$$7$$) {
  this.$Options$.highlightedCategories = D.$DvtJSONUtils$$.$clone$($categories$$7$$);
  this.$_processHighlighting$()
};
D.$DvtDiagram$$.prototype.highlight = D.$DvtDiagram$$.prototype.$highlight$;
D.$DvtDiagram$$.prototype.select = function $$DvtDiagram$$$$select$($selection$$21$$) {
  this.$Options$.selection = D.$DvtJSONUtils$$.$clone$($selection$$21$$);
  this.$_processInitialSelections$()
};
D.$DvtDiagram$$.prototype.select = D.$DvtDiagram$$.prototype.select;
D.$DvtDiagram$$.prototype.$getAutomation$ = function $$DvtDiagram$$$$$getAutomation$$() {
  this.$Automation$ || (this.$Automation$ = new D.$DvtDiagramAutomation$$(this));
  return this.$Automation$
};
D.$DvtDiagram$$.prototype.getAutomation = D.$DvtDiagram$$.prototype.$getAutomation$;
D.$DvtDiagram$$.prototype.$Log$ = function $$DvtDiagram$$$$$Log$$($message$$17$$, $level$$62$$) {
  var $logger$$ = this.$getOptions$()._logger;
  if($logger$$) {
    switch($level$$62$$) {
      case 1:
        $logger$$.error && $logger$$.error($message$$17$$);
        break;
      case 2:
        $logger$$.warn && $logger$$.warn($message$$17$$);
        break;
      case 3:
        $logger$$.info && $logger$$.info($message$$17$$);
        break;
      default:
        $logger$$.log && $logger$$.log($message$$17$$)
    }
  }
};
D.$DvtDiagram$$.prototype.$processDefaultHoverEffect$ = function $$DvtDiagram$$$$$processDefaultHoverEffect$$($nodeId$$11$$, $hovered$$) {
  var $node$$39$$ = this.$GetNodeById$($nodeId$$11$$);
  $node$$39$$ && $node$$39$$.$processDefaultHoverEffect$($hovered$$)
};
D.$DvtDiagram$$.prototype.processDefaultHoverEffect = D.$DvtDiagram$$.prototype.$processDefaultHoverEffect$;
D.$DvtDiagram$$.prototype.$processDefaultSelectionEffect$ = function $$DvtDiagram$$$$$processDefaultSelectionEffect$$($nodeId$$12$$, $selected$$15$$) {
  var $node$$40$$ = this.$GetNodeById$($nodeId$$12$$);
  $node$$40$$ && $node$$40$$.$processDefaultSelectionEffect$($selected$$15$$)
};
D.$DvtDiagram$$.prototype.processDefaultSelectionEffect = D.$DvtDiagram$$.prototype.$processDefaultSelectionEffect$;
D.$DvtDiagram$$.prototype.$processDefaultFocusEffect$ = function $$DvtDiagram$$$$$processDefaultFocusEffect$$($nodeId$$13$$, $focused$$) {
  var $node$$41$$ = this.$GetNodeById$($nodeId$$13$$);
  $node$$41$$ && $node$$41$$.$processDefaultFocusEffect$($focused$$)
};
D.$DvtDiagram$$.prototype.processDefaultFocusEffect = D.$DvtDiagram$$.prototype.$processDefaultFocusEffect$;
D.$DvtDiagramCategoryRolloverHandler$$ = function $$DvtDiagramCategoryRolloverHandler$$$($callback$$50$$, $callbackObj$$15$$) {
  D.$DvtDiagramCategoryRolloverHandler$$.$superclass$.constructor.call(this, $callback$$50$$, $callbackObj$$15$$);
  this.$_hoverDelay$ = 100;
  this.$_diagram$ = $callbackObj$$15$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtDiagramCategoryRolloverHandler$$, D.$DvtCategoryRolloverHandler$$, "DvtDiagramCategoryRolloverHandler");
D.$DvtDiagramCategoryRolloverHandler$$.prototype.$GetRolloverCallback$ = function $$DvtDiagramCategoryRolloverHandler$$$$$GetRolloverCallback$$($event$$155$$) {
  return D.$DvtObj$$.$createCallback$(this, function() {
    this.$_bHighlightMode$ = D.$JSCompiler_alias_TRUE$$;
    this.$_diagram$.$processEvent$($event$$155$$)
  })
};
D.$DvtDiagramCategoryRolloverHandler$$.prototype.$GetRolloutCallback$ = function $$DvtDiagramCategoryRolloverHandler$$$$$GetRolloutCallback$$($event$$156$$) {
  return D.$DvtObj$$.$createCallback$(this, function() {
    (0,D.$JSCompiler_StaticMethods_SetHighlightModeTimeout$$)(this);
    this.$_diagram$.$processEvent$($event$$156$$)
  })
};
D.$DvtDiagramDefaults$$ = function $$DvtDiagramDefaults$$$() {
  this.Init({skyros:D.$DvtDiagramDefaults$VERSION_1$$, alta:D.$DvtDiagramDefaults$SKIN_ALTA$$})
};
D.$DvtObj$$.$createSubclass$(D.$DvtDiagramDefaults$$, D.$DvtBaseComponentDefaults$$, "DvtDiagramDefaults");
D.$DvtDiagramDefaults$VERSION_1$$ = {skin:"alta", emptyText:D.$JSCompiler_alias_NULL$$, selectionMode:"none", animationOnDataChange:"none", animationOnDisplay:"none", maxZoom:1, highlightMatch:"all", nodeHighlightMode:"node", linkHighlightMode:"link", panning:"none", touchResponse:"auto", zooming:"none", _statusMessageStyle:new D.$DvtCSSStyle$$("font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;"), styleDefaults:{animationDuration:500, hoverBehaviorDelay:200, _highlightAlpha:0.1, nodeDefaults:{labelStyle:'font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:bold;font-size:12px;color:#383A47', 
hoverInnerColor:"rgb(255,255,255)", hoverOuterColor:"rgba(0,0,0, .3)", selectionColor:"rgb(0,0,0)", icon:{width:10, height:10, fillPattern:"none", shape:"circle"}}, linkDefaults:{startConnectorType:"none", endConnectorType:"none", width:1, style:"solid", hoverInnerColor:"rgb(255,255,255)", hoverOuterColor:"rgba(0,0,0, .3)", selectionColor:"rgb(0,0,0)", labelStyle:'font-family:"Helvetica Neue", Helvetica, Arial, sans-serif;font-weight:bold;font-size:12px;color:#383A47', _hitDetectionOffset:4}}};
D.$DvtDiagramDefaults$SKIN_ALTA$$ = {};
D.$DvtDiagramDataAnimationHandler$$ = function $$DvtDiagramDataAnimationHandler$$$($context$$74$$, $deleteContainer$$, $oldDiagram$$, $newDiagram$$) {
  this.Init($context$$74$$, $deleteContainer$$, $oldDiagram$$, $newDiagram$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDiagramDataAnimationHandler$$, D.$DvtDataAnimationHandler$$, "DvtDiagramDataAnimationHandler");
D.$DvtDiagramDataAnimationHandler$$.prototype.Init = function $$DvtDiagramDataAnimationHandler$$$$Init$($context$$75$$, $deleteContainer$$1$$, $oldDiagram$$1$$, $newDiagram$$1$$) {
  D.$DvtDiagramDataAnimationHandler$$.$superclass$.Init.call(this, $context$$75$$, $deleteContainer$$1$$);
  this.$_oldDiagram$ = $oldDiagram$$1$$;
  this.$_newDiagram$ = $newDiagram$$1$$
};
D.$DvtDiagramDataAnimationHandler$$.prototype.$getAnimationDuration$ = function $$DvtDiagramDataAnimationHandler$$$$$getAnimationDuration$$() {
  return(0,D.$DvtStyleUtils$getTimeMilliseconds$$)(this.$_oldDiagram$.$getOptions$().styleDefaults.animationDuration) / 1E3
};
D.$DvtDiagramEventManager$$ = function $$DvtDiagramEventManager$$$($context$$76$$, $callback$$53$$, $callbackObj$$16$$) {
  this.Init($context$$76$$, $callback$$53$$, $callbackObj$$16$$);
  this.$_diagram$ = $callbackObj$$16$$
};
D.$DvtObj$$.$createSubclass$(D.$DvtDiagramEventManager$$, D.$DvtEventManager$$, "DvtDiagramEventManager");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDiagramEventManager$$.prototype;
D.$JSCompiler_prototypeAlias$$.$ProcessRolloverEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessRolloverEvent$$($event$$157_options$$111$$, $categories$$8_hoverBehaviorDelay$$1_obj$$71$$, $bOver$$1_rolloverEvent$$1$$) {
  $event$$157_options$$111$$ = this.$_diagram$.$getOptions$();
  "dim" == $event$$157_options$$111$$.hoverBehavior && ($categories$$8_hoverBehaviorDelay$$1_obj$$71$$ = $categories$$8_hoverBehaviorDelay$$1_obj$$71$$.$getCategories$ ? $categories$$8_hoverBehaviorDelay$$1_obj$$71$$.$getCategories$() : [], $event$$157_options$$111$$.highlightedCategories = $bOver$$1_rolloverEvent$$1$$ ? $categories$$8_hoverBehaviorDelay$$1_obj$$71$$.slice() : D.$JSCompiler_alias_NULL$$, $bOver$$1_rolloverEvent$$1$$ = new D.$DvtCategoryRolloverEvent$$($bOver$$1_rolloverEvent$$1$$ ? 
  "categoryRollOver" : "categoryRollOut", $event$$157_options$$111$$.highlightedCategories), $categories$$8_hoverBehaviorDelay$$1_obj$$71$$ = (0,D.$DvtStyleUtils$getTimeMilliseconds$$)($event$$157_options$$111$$.styleDefaults.hoverBehaviorDelay), this.$RolloverHandler$.$processEvent$($bOver$$1_rolloverEvent$$1$$, (0,D.$JSCompiler_StaticMethods_GetAllNodeObjects$$)(this.$_diagram$), $categories$$8_hoverBehaviorDelay$$1_obj$$71$$, "any" == $event$$157_options$$111$$.highlightMatch))
};
D.$JSCompiler_prototypeAlias$$.$CreateCategoryRolloverHandler$ = function $$JSCompiler_prototypeAlias$$$$CreateCategoryRolloverHandler$$($callback$$54$$, $callbackObj$$17$$) {
  return new D.$DvtDiagramCategoryRolloverHandler$$($callback$$54$$, $callbackObj$$17$$)
};
D.$JSCompiler_prototypeAlias$$.$ProcessKeyboardEvent$ = function $$JSCompiler_prototypeAlias$$$$ProcessKeyboardEvent$$($event$$158$$) {
  var $eventConsumed$$ = D.$JSCompiler_alias_TRUE$$, $keyCode$$16$$ = $event$$158$$.keyCode, $focusObj$$ = this.$getFocus$(), $focusDisp$$ = $focusObj$$ instanceof D.$DvtDiagramNode$$ ? $focusObj$$.$_customNodeContent$ : D.$JSCompiler_alias_NULL$$;
  9 != $keyCode$$16$$ && this.$_bPassOnEvent$ ? ($focusDisp$$.$fireKeyboardListener$($event$$158$$), $event$$158$$.preventDefault()) : 9 == $keyCode$$16$$ && $focusDisp$$ instanceof D.$DvtBaseComponent$$ ? !$event$$158$$.shiftKey && $focusObj$$.$isShowingKeyboardFocusEffect$() ? ($focusObj$$.$hideKeyboardFocusEffect$(), $focusDisp$$.$fireKeyboardListener$($event$$158$$), $event$$158$$.preventDefault(), this.$_bPassOnEvent$ = D.$JSCompiler_alias_TRUE$$) : ($event$$158$$.shiftKey && this.$_bPassOnEvent$ ? 
  (this.$ShowFocusEffect$($event$$158$$, $focusObj$$), $event$$158$$.preventDefault()) : (this.$_bPassOnEvent$ && $focusObj$$.$showKeyboardFocusEffect$(), $eventConsumed$$ = D.$DvtDiagramEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$158$$)), this.$_bPassOnEvent$ = D.$JSCompiler_alias_FALSE$$) : $eventConsumed$$ = D.$DvtDiagramEventManager$$.$superclass$.$ProcessKeyboardEvent$.call(this, $event$$158$$);
  return $eventConsumed$$
};
D.$JSCompiler_prototypeAlias$$.$GetTouchResponse$ = function $$JSCompiler_prototypeAlias$$$$GetTouchResponse$$() {
  var $options$$112$$ = this.$_diagram$.$getOptions$();
  return"none" !== $options$$112$$.panning || "none" !== $options$$112$$.zooming ? "touchHold" : "touchStart" === $options$$112$$.touchResponse ? "touchStart" : "auto"
};
D.$JSCompiler_prototypeAlias$$.$HandleTouchClickInternal$ = function $$JSCompiler_prototypeAlias$$$$HandleTouchClickInternal$$($event$$159$$) {
  return(0,D.$JSCompiler_StaticMethods_GetEventInfo$$)(this, $event$$159$$, "panned")
};
D.$JSCompiler_prototypeAlias$$.$StoreInfoByEventType$ = function $$JSCompiler_prototypeAlias$$$$StoreInfoByEventType$$($key$$54$$) {
  return"panned" == $key$$54$$ ? D.$JSCompiler_alias_FALSE$$ : D.$DvtDiagramEventManager$$.$superclass$.$StoreInfoByEventType$.call(this, $key$$54$$)
};
D.$DvtDiagramKeyboardHandler$$ = function $$DvtDiagramKeyboardHandler$$$($component$$3$$, $manager$$7$$) {
  this.Init($component$$3$$, $manager$$7$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDiagramKeyboardHandler$$, D.$DvtBaseDiagramKeyboardHandler$$, "DvtDiagramKeyboardHandler");
D.$DvtDiagramKeyboardHandler$$.prototype.$isNavigationEvent$ = function $$DvtDiagramKeyboardHandler$$$$$isNavigationEvent$$($event$$160$$) {
  var $retVal$$ = D.$JSCompiler_alias_FALSE$$;
  switch($event$$160$$.keyCode) {
    case 188:
    ;
    case 190:
      $retVal$$ = $event$$160$$.altKey ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$;
      break;
    default:
      $retVal$$ = D.$DvtDiagramKeyboardHandler$$.$superclass$.$isNavigationEvent$.call(this, $event$$160$$)
  }
  return $retVal$$
};
D.$DvtDiagramKeyboardHandler$$.prototype.$processKeyDown$ = function $$DvtDiagramKeyboardHandler$$$$$processKeyDown$$($event$$161$$) {
  if(9 == $event$$161$$.keyCode) {
    var $arNodes_currentNavigable$$2$$ = this.$_eventManager$.$getFocus$();
    if($arNodes_currentNavigable$$2$$) {
      return(0,D.$DvtEventManager$consumeEvent$$)($event$$161$$), $arNodes_currentNavigable$$2$$
    }
    $arNodes_currentNavigable$$2$$ = (0,D.$JSCompiler_StaticMethods_GetAllNodeObjects$$)(this.$GetDiagram$());
    if(0 < $arNodes_currentNavigable$$2$$.length) {
      return(0,D.$DvtEventManager$consumeEvent$$)($event$$161$$), this.$getDefaultNavigable$($arNodes_currentNavigable$$2$$)
    }
  }
  return D.$DvtDiagramKeyboardHandler$$.$superclass$.$processKeyDown$.call(this, $event$$161$$)
};
D.$DvtDiagramKeyboardHandler$$.prototype.$GetVisibleNode$ = function $$DvtDiagramKeyboardHandler$$$$$GetVisibleNode$$($nodeId$$14$$) {
  return this.$GetDiagram$().$GetNodeById$($nodeId$$14$$)
};
D.$DvtDiagramLayoutUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtDiagramLayoutUtils$$, D.$DvtObj$$, "DvtDiagramLayoutUtils");
D.$DvtDiagramLayoutUtils$$.$gridLayout$ = function $$DvtDiagramLayoutUtils$$$$gridLayout$$($layoutContext$$3$$) {
  for(var $maxNodeBounds_nodeCount$$1$$ = D.$DvtDiagramLayoutUtils$$.$getMaxNodeBounds$($layoutContext$$3$$), $nodeSize_space$$2$$ = window.Math.max($maxNodeBounds_nodeCount$$1$$.w, $maxNodeBounds_nodeCount$$1$$.h), $maxNodeBounds_nodeCount$$1$$ = $layoutContext$$3$$.$getNodeCount$(), $linkCount_startx$$ = $layoutContext$$3$$.$getLinkCount$(), $size$$20$$ = window.Math.floor(window.Math.sqrt($maxNodeBounds_nodeCount$$1$$)), $layoutAttrs$$3_padding$$8_starty$$ = 0, $layoutAttrs$$3_padding$$8_starty$$ = 
  ($layoutAttrs$$3_padding$$8_starty$$ = $layoutContext$$3$$.$getLayoutAttributes$()) && $layoutAttrs$$3_padding$$8_starty$$.padding ? $layoutAttrs$$3_padding$$8_starty$$.padding : 0 < $linkCount_startx$$ ? $nodeSize_space$$2$$ : 0.25 * $nodeSize_space$$2$$, $nodeSize_space$$2$$ = $nodeSize_space$$2$$ + $layoutAttrs$$3_padding$$8_starty$$, $linkCount_startx$$ = -(window.Math.ceil($maxNodeBounds_nodeCount$$1$$ / $size$$20$$) - 1) * $nodeSize_space$$2$$ / 2, $layoutAttrs$$3_padding$$8_starty$$ = -($size$$20$$ - 
  1) * $nodeSize_space$$2$$ / 2, $ni$$1$$ = 0;$ni$$1$$ < $maxNodeBounds_nodeCount$$1$$;$ni$$1$$++) {
    D.$DvtDiagramLayoutUtils$$.$centerNodeAndLabel$($layoutContext$$3$$.$getNodeByIndex$($ni$$1$$), $linkCount_startx$$ + $nodeSize_space$$2$$ * window.Math.floor($ni$$1$$ / $size$$20$$), $layoutAttrs$$3_padding$$8_starty$$ + $nodeSize_space$$2$$ * ($ni$$1$$ % $size$$20$$))
  }
};
D.$DvtDiagramLayoutUtils$$.$getMaxNodeBounds$ = function $$DvtDiagramLayoutUtils$$$$getMaxNodeBounds$$($layoutContext$$4$$) {
  for(var $nodeCount$$2$$ = $layoutContext$$4$$.$getNodeCount$(), $maxW$$ = 0, $maxH$$1$$ = 0, $ni$$2$$ = 0;$ni$$2$$ < $nodeCount$$2$$;$ni$$2$$++) {
    var $labelBounds$$3_node$$50$$ = $layoutContext$$4$$.$getNodeByIndex$($ni$$2$$), $bounds$$26$$ = $labelBounds$$3_node$$50$$.$getBounds$(), $maxW$$ = window.Math.max($bounds$$26$$.w, $maxW$$), $maxH$$1$$ = window.Math.max($bounds$$26$$.h, $maxH$$1$$);
    if($labelBounds$$3_node$$50$$ = $labelBounds$$3_node$$50$$.$getLabelBounds$()) {
      $maxW$$ = window.Math.max($labelBounds$$3_node$$50$$.w, $maxW$$), $maxH$$1$$ = window.Math.max($bounds$$26$$.h + $labelBounds$$3_node$$50$$.h, $maxH$$1$$)
    }
  }
  return new D.$DvtDiagramRectangle$$(0, 0, $maxW$$, $maxH$$1$$)
};
D.$DvtDiagramLayoutUtils$$.$centerNodeAndLabel$ = function $$DvtDiagramLayoutUtils$$$$centerNodeAndLabel$$($node$$51$$, $x$$95$$, $y$$74$$) {
  var $bounds$$27$$ = $node$$51$$.$getContentBounds$();
  $node$$51$$.$setPosition$(new D.$DvtDiagramPoint$$($x$$95$$ - $bounds$$27$$.x - 0.5 * $bounds$$27$$.w, $y$$74$$ - $bounds$$27$$.y - 0.5 * $bounds$$27$$.h));
  D.$DvtDiagramLayoutUtils$$.$positionNodeLabel$($node$$51$$)
};
D.$DvtDiagramLayoutUtils$$.$positionNodeLabel$ = function $$DvtDiagramLayoutUtils$$$$positionNodeLabel$$($node$$52$$) {
  var $nodeBounds$$1$$ = $node$$52$$.$getBounds$(), $nodePos$$ = $node$$52$$.$getPosition$(), $nodeLabelBounds$$1$$ = $node$$52$$.$getLabelBounds$();
  $nodeLabelBounds$$1$$ && $node$$52$$.$setLabelPosition$(new D.$DvtDiagramPoint$$($nodeBounds$$1$$.x + $nodePos$$.x + 0.5 * ($nodeBounds$$1$$.w - $nodeLabelBounds$$1$$.w), $nodeBounds$$1$$.y + $nodePos$$.y + $nodeBounds$$1$$.h))
};
D.$DvtDiagramLayoutUtils$$.$convertRectToDiagramRect$ = function $$DvtDiagramLayoutUtils$$$$convertRectToDiagramRect$$($rect$$2$$) {
  return $rect$$2$$ === D.$JSCompiler_alias_VOID$$ || $rect$$2$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : new D.$DvtDiagramRectangle$$($rect$$2$$.x, $rect$$2$$.y, $rect$$2$$.$w$, $rect$$2$$.$h$)
};
D.$DvtDiagramLayoutUtils$$.$convertPointToDiagramPoint$ = function $$DvtDiagramLayoutUtils$$$$convertPointToDiagramPoint$$($point$$12$$) {
  return $point$$12$$ === D.$JSCompiler_alias_VOID$$ || $point$$12$$ == D.$JSCompiler_alias_NULL$$ ? D.$JSCompiler_alias_NULL$$ : new D.$DvtDiagramPoint$$($point$$12$$.x, $point$$12$$.y)
};
D.$DvtDiagramLayoutUtils$$.$convertDiagramRectToRect$ = function $$DvtDiagramLayoutUtils$$$$convertDiagramRectToRect$$($diagramRect$$) {
  return $diagramRect$$ ? new D.$DvtRectangle$$($diagramRect$$.x, $diagramRect$$.y, $diagramRect$$.w, $diagramRect$$.h) : D.$JSCompiler_alias_NULL$$
};
D.$DvtDiagramLayoutUtils$$.$convertDiagramPointToPoint$ = function $$DvtDiagramLayoutUtils$$$$convertDiagramPointToPoint$$($diagramPoint$$) {
  return $diagramPoint$$ ? new D.$DvtPoint$$($diagramPoint$$.x, $diagramPoint$$.y) : D.$JSCompiler_alias_NULL$$
};
D.$DvtDiagramLink$$ = function $$DvtDiagramLink$$$($context$$79$$, $diagram$$7$$, $linkData$$1$$) {
  this.Init($context$$79$$, $diagram$$7$$, $linkData$$1$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDiagramLink$$, D.$DvtBaseDiagramLink$$, "DvtDiagramLink");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDiagramLink$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$80$$, $diagram$$9$$, $data$$33$$) {
  D.$DvtDiagramLink$$.$superclass$.Init.call(this, $context$$80$$, $data$$33$$.id, $diagram$$9$$);
  this.$_data$ = $data$$33$$;
  this.$_diagram$.$isSelectionSupported$() && this.setCursor("pointer")
};
D.$JSCompiler_prototypeAlias$$.getData = (0,D.$JSCompiler_get$$)("$_data$");
D.$JSCompiler_prototypeAlias$$.getId = function $$JSCompiler_prototypeAlias$$$getId$() {
  return this.getData().id
};
D.$JSCompiler_prototypeAlias$$.$getStartId$ = function $$JSCompiler_prototypeAlias$$$$getStartId$$() {
  return this.getData().startNode
};
D.$JSCompiler_prototypeAlias$$.$getEndId$ = function $$JSCompiler_prototypeAlias$$$$getEndId$$() {
  return this.getData().endNode
};
D.$JSCompiler_prototypeAlias$$.$getLabelBounds$ = function $$JSCompiler_prototypeAlias$$$$getLabelBounds$$() {
  var $bounds$$28$$ = D.$JSCompiler_alias_NULL$$;
  this.$_labelObj$ && ($bounds$$28$$ = this.$_labelObj$.$getDimensions$());
  return $bounds$$28$$
};
D.$JSCompiler_prototypeAlias$$.$getLinkStyle$ = function $$JSCompiler_prototypeAlias$$$$getLinkStyle$$() {
  return this.getData().style
};
D.$JSCompiler_prototypeAlias$$.$getLinkWidth$ = function $$JSCompiler_prototypeAlias$$$$getLinkWidth$$() {
  return this.getData().width
};
D.$JSCompiler_prototypeAlias$$.$getLinkColor$ = function $$JSCompiler_prototypeAlias$$$$getLinkColor$$() {
  return this.getData().color
};
D.$JSCompiler_prototypeAlias$$.$getStartConnectorType$ = function $$JSCompiler_prototypeAlias$$$$getStartConnectorType$$() {
  return this.getData().startConnectorType
};
D.$JSCompiler_prototypeAlias$$.$getEndConnectorType$ = function $$JSCompiler_prototypeAlias$$$$getEndConnectorType$$() {
  return this.getData().endConnectorType
};
D.$JSCompiler_prototypeAlias$$.$getStartConnectorOffset$ = function $$JSCompiler_prototypeAlias$$$$getStartConnectorOffset$$() {
  if(this.$getStartConnectorType$()) {
    var $stroke$$25$$ = this.$getShape$().$getStroke$().$clone$();
    $stroke$$25$$.$setType$(0);
    return D.$DvtDiagramLinkConnectorUtils$$.$GetConnectorOffset$(D.$JSCompiler_alias_NULL$$, this.$getStartConnectorType$(), D.$JSCompiler_alias_NULL$$, $stroke$$25$$, this)
  }
  return 0
};
D.$JSCompiler_prototypeAlias$$.$getEndConnectorOffset$ = function $$JSCompiler_prototypeAlias$$$$getEndConnectorOffset$$() {
  if(this.$getEndConnectorType$()) {
    var $stroke$$26$$ = this.$getShape$().$getStroke$().$clone$();
    $stroke$$26$$.$setType$(0);
    return D.$DvtDiagramLinkConnectorUtils$$.$GetConnectorOffset$(D.$JSCompiler_alias_NULL$$, this.$getEndConnectorType$(), D.$JSCompiler_alias_NULL$$, $stroke$$26$$, this)
  }
  return 0
};
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$68$$) {
  var $diagram$$inline_3022_linkData$$inline_3011_stroke$$inline_3018_text$$inline_9910$$ = this.getData(), $labelWidth$$inline_3027_linkData$$inline_3023_points$$inline_3013_shape$$inline_3020$$ = this.$_pathCmds$;
  $labelWidth$$inline_3027_linkData$$inline_3023_points$$inline_3013_shape$$inline_3020$$ || ($labelWidth$$inline_3027_linkData$$inline_3023_points$$inline_3013_shape$$inline_3020$$ = ["M", 0, 0, "L", 0, 0]);
  var $halign$$inline_3025_id$$inline_3014$$ = $diagram$$inline_3022_linkData$$inline_3011_stroke$$inline_3018_text$$inline_9910$$.id, $linkColor$$inline_3015$$ = $diagram$$inline_3022_linkData$$inline_3011_stroke$$inline_3018_text$$inline_9910$$.color, $linkWidth$$inline_3016$$ = $diagram$$inline_3022_linkData$$inline_3011_stroke$$inline_3018_text$$inline_9910$$.width, $linkStyle$$inline_3017_strokeType$$inline_3019_style$$inline_9908$$ = $diagram$$inline_3022_linkData$$inline_3011_stroke$$inline_3018_text$$inline_9910$$.style;
  this.$_hitDetectionUnderlay$ = this.$CreateUnderlay$("#000000", 0, $diagram$$inline_3022_linkData$$inline_3011_stroke$$inline_3018_text$$inline_9910$$._hitDetectionOffset);
  this.$addChild$(this.$_hitDetectionUnderlay$);
  $diagram$$inline_3022_linkData$$inline_3011_stroke$$inline_3018_text$$inline_9910$$ = new D.$DvtSolidStroke$$($linkColor$$inline_3015$$, 1, $linkWidth$$inline_3016$$);
  (0,D.$DvtAgent$isTouchDevice$$)() && ((0,D.$DvtAgent$isBrowserSafari$$)() && 1 == (0,D.$DvtAgent$getDevicePixelRatio$$)()) && ($diagram$$inline_3022_linkData$$inline_3011_stroke$$inline_3018_text$$inline_9910$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$);
  $linkStyle$$inline_3017_strokeType$$inline_3019_style$$inline_9908$$ = D.$DvtDiagramLinkUtils$$.$ConvertLinkStyleToStrokeType$($linkStyle$$inline_3017_strokeType$$inline_3019_style$$inline_9908$$);
  $diagram$$inline_3022_linkData$$inline_3011_stroke$$inline_3018_text$$inline_9910$$.$setType$($linkStyle$$inline_3017_strokeType$$inline_3019_style$$inline_9908$$, D.$DvtDiagramLinkUtils$$.$GetStrokeDash$($linkStyle$$inline_3017_strokeType$$inline_3019_style$$inline_9908$$), D.$DvtDiagramLinkUtils$$.$GetStrokeDashOffset$($linkStyle$$inline_3017_strokeType$$inline_3019_style$$inline_9908$$));
  $labelWidth$$inline_3027_linkData$$inline_3023_points$$inline_3013_shape$$inline_3020$$ = new D.$DvtPath$$(this.$getCtx$(), $labelWidth$$inline_3027_linkData$$inline_3023_points$$inline_3013_shape$$inline_3020$$, $halign$$inline_3025_id$$inline_3014$$);
  $labelWidth$$inline_3027_linkData$$inline_3023_points$$inline_3013_shape$$inline_3020$$.$setFill$(D.$JSCompiler_alias_NULL$$);
  $labelWidth$$inline_3027_linkData$$inline_3023_points$$inline_3013_shape$$inline_3020$$.$setStroke$($diagram$$inline_3022_linkData$$inline_3011_stroke$$inline_3018_text$$inline_9910$$);
  this.$setShape$($labelWidth$$inline_3027_linkData$$inline_3023_points$$inline_3013_shape$$inline_3020$$);
  this.$addChild$($labelWidth$$inline_3027_linkData$$inline_3023_points$$inline_3013_shape$$inline_3020$$);
  $diagram$$inline_3022_linkData$$inline_3011_stroke$$inline_3018_text$$inline_9910$$ = this.$_diagram$;
  $labelWidth$$inline_3027_linkData$$inline_3023_points$$inline_3013_shape$$inline_3020$$ = this.getData();
  $halign$$inline_3025_id$$inline_3014$$ = (0,D.$DvtAgent$isRightToLeft$$)($diagram$$inline_3022_linkData$$inline_3011_stroke$$inline_3018_text$$inline_9910$$.$getCtx$()) ? "right" : "left";
  $labelWidth$$inline_3027_linkData$$inline_3023_points$$inline_3013_shape$$inline_3020$$.label && ($linkStyle$$inline_3017_strokeType$$inline_3019_style$$inline_9908$$ = $labelWidth$$inline_3027_linkData$$inline_3023_points$$inline_3013_shape$$inline_3020$$.labelStyle, $diagram$$inline_3022_linkData$$inline_3011_stroke$$inline_3018_text$$inline_9910$$ = new D.$DvtOutputText$$($diagram$$inline_3022_linkData$$inline_3011_stroke$$inline_3018_text$$inline_9910$$.$getCtx$(), $labelWidth$$inline_3027_linkData$$inline_3023_points$$inline_3013_shape$$inline_3020$$.label, 
  0, 0), $diagram$$inline_3022_linkData$$inline_3011_stroke$$inline_3018_text$$inline_9910$$.$setCSSStyle$(new D.$DvtCSSStyle$$($linkStyle$$inline_3017_strokeType$$inline_3019_style$$inline_9908$$)), $diagram$$inline_3022_linkData$$inline_3011_stroke$$inline_3018_text$$inline_9910$$.$setHorizAlignment$($halign$$inline_3025_id$$inline_3014$$), $diagram$$inline_3022_linkData$$inline_3011_stroke$$inline_3018_text$$inline_9910$$.$setVertAlignment$("top"), $labelWidth$$inline_3027_linkData$$inline_3023_points$$inline_3013_shape$$inline_3020$$ = 
  (0,D.$DvtCSSStyle$toNumber$$)((new D.$DvtCSSStyle$$($labelWidth$$inline_3027_linkData$$inline_3023_points$$inline_3013_shape$$inline_3020$$.labelStyle)).getWidth()), 0 < $labelWidth$$inline_3027_linkData$$inline_3023_points$$inline_3013_shape$$inline_3020$$ && D.$DvtTextUtils$$.$fitText$($diagram$$inline_3022_linkData$$inline_3011_stroke$$inline_3018_text$$inline_9910$$, $labelWidth$$inline_3027_linkData$$inline_3023_points$$inline_3013_shape$$inline_3020$$, window.Infinity, this) || this.$addChild$($diagram$$inline_3022_linkData$$inline_3011_stroke$$inline_3018_text$$inline_9910$$), 
  this.$_labelObj$ = $diagram$$inline_3022_linkData$$inline_3011_stroke$$inline_3018_text$$inline_9910$$);
  $container$$68$$.$addChild$(this);
  this.$setAriaRole$("img");
  this.$UpdateAriaLabel$();
  this.$_diagram$.$__getEventManager$().$associate$(this, this)
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$18$$) {
  D.$DvtDiagramLink$$.$superclass$.$setSelected$.call(this, $selected$$18$$);
  $selected$$18$$ ? this.$_showFeedback$(this.$_isShowingHoverEffect$, D.$JSCompiler_alias_TRUE$$) : this.$_hideFeedback$();
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$GetDiagram$().$isSelectionSupported$() && "off" != this.getData().selectable
};
D.$JSCompiler_prototypeAlias$$.$_showFeedback$ = function $$JSCompiler_prototypeAlias$$$$_showFeedback$$($bHovered$$, $bSelected$$2$$) {
  if($bHovered$$) {
    this.$_savedStroke$ || (this.$_savedStroke$ = this.$getShape$().$getStroke$());
    var $color$$18_hoverStroke$$ = this.$getShape$().$getStroke$().$clone$();
    $color$$18_hoverStroke$$.$setColor$ && $color$$18_hoverStroke$$.$setColor$(this.getData().hoverInnerColor);
    this.$getShape$().$setStroke$($color$$18_hoverStroke$$);
    (0,D.$JSCompiler_StaticMethods_ReplaceConnectorColor$$)(this.$_startConnector$, $color$$18_hoverStroke$$);
    (0,D.$JSCompiler_StaticMethods_ReplaceConnectorColor$$)(this.$_endConnector$, $color$$18_hoverStroke$$)
  }else {
    this.$_savedStroke$ && (this.$getShape$().$setStroke$(this.$_savedStroke$), (0,D.$JSCompiler_StaticMethods_ReplaceConnectorColor$$)(this.$_startConnector$, this.$_savedStroke$), (0,D.$JSCompiler_StaticMethods_ReplaceConnectorColor$$)(this.$_endConnector$, this.$_savedStroke$), this.$_savedStroke$ = D.$JSCompiler_alias_NULL$$)
  }
  this.$_linkUnderlay$ || (this.$_linkUnderlay$ = (0,D.$JSCompiler_StaticMethods_CreateFeedbackUnderlay$$)(this, "#000000", 1, 0), this.$addChildAt$(this.$_linkUnderlay$, 0));
  var $color$$18_hoverStroke$$ = $bSelected$$2$$ ? this.getData().selectionColor : this.getData().hoverOuterColor, $stroke$$28$$ = this.$_linkUnderlay$.$getStroke$().$clone$();
  $stroke$$28$$.$setColor$($color$$18_hoverStroke$$);
  $stroke$$28$$.$setWidth$(2 + this.$GetAppliedLinkWidth$());
  (0,D.$JSCompiler_StaticMethods_ApplyLinkStyle$$)(this, $stroke$$28$$, D.$JSCompiler_alias_TRUE$$);
  this.$_linkUnderlay$.$setStroke$($stroke$$28$$, 2)
};
D.$JSCompiler_prototypeAlias$$.$_hideFeedback$ = function $$JSCompiler_prototypeAlias$$$$_hideFeedback$$() {
  this.$_savedStroke$ && (this.$getShape$().$setStroke$(this.$_savedStroke$), (0,D.$JSCompiler_StaticMethods_ReplaceConnectorColor$$)(this.$_startConnector$, this.$_savedStroke$), (0,D.$JSCompiler_StaticMethods_ReplaceConnectorColor$$)(this.$_endConnector$, this.$_savedStroke$), this.$_savedStroke$ = D.$JSCompiler_alias_NULL$$);
  this.$_linkUnderlay$ && (this.removeChild(this.$_linkUnderlay$), this.$_linkUnderlay$.$destroy$ && this.$_linkUnderlay$.$destroy$(), this.$_linkUnderlay$ = D.$JSCompiler_alias_NULL$$)
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  this.$_isShowingHoverEffect$ || (this.$_isShowingHoverEffect$ = D.$JSCompiler_alias_TRUE$$, this.$_showFeedback$(D.$JSCompiler_alias_TRUE$$, this.$isSelected$()))
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  this.$isSelected$() ? this.$_showFeedback$(D.$JSCompiler_alias_FALSE$$, D.$JSCompiler_alias_TRUE$$) : this.$_hideFeedback$();
  this.$_isShowingHoverEffect$ = D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  var $tooltipFunc$$3$$ = this.$GetDiagram$().$getOptions$().tooltip;
  return $tooltipFunc$$3$$ ? (0,D.$JSCompiler_StaticMethods_getCustomTooltip$$)(this.$GetDiagram$().$getCtx$().$getTooltipManager$(), $tooltipFunc$$3$$, this.$getDataContext$()) : this.$getShortDesc$()
};
D.$JSCompiler_prototypeAlias$$.$getShortDesc$ = function $$JSCompiler_prototypeAlias$$$$getShortDesc$$() {
  return this.getData().shortDesc
};
D.$JSCompiler_prototypeAlias$$.$getDataContext$ = function $$JSCompiler_prototypeAlias$$$$getDataContext$$() {
  return{id:this.getId(), type:"link", label:this.getData().label}
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$3$$ = [];
  this.$isSelectable$() && $states$$3$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getShortDesc$(), $states$$3$$)
};
D.$JSCompiler_prototypeAlias$$.$UpdateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$UpdateAriaLabel$$() {
  if(!(0,D.$DvtAgent$deferAriaCreation$$)()) {
    var $desc$$7$$ = this.$getAriaLabel$();
    $desc$$7$$ && this.$setAriaProperty$("label", $desc$$7$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$162_nodeId$$16$$) {
  if(32 == $event$$162_nodeId$$16$$.keyCode && $event$$162_nodeId$$16$$.ctrlKey) {
    return this
  }
  if(38 == $event$$162_nodeId$$16$$.keyCode || 40 == $event$$162_nodeId$$16$$.keyCode) {
    var $node$$53$$ = this.$_keyboardNavNode$;
    $node$$53$$ || ($node$$53$$ = this.$GetDiagram$().$GetNodeById$((0,D.$JSCompiler_StaticMethods_getLinkStartId$$)(this.$GetDiagram$(), this)));
    var $nextLink$$ = this, $links$$2$$ = this.$GetDiagram$().$getNavigableLinksForNodeId$($node$$53$$.getId()), $keyboardHandler$$;
    ($keyboardHandler$$ = this.$GetDiagram$().$__getEventManager$().$KeyboardHandler$) && $keyboardHandler$$.$getNextNavigableLink$ && ($nextLink$$ = $keyboardHandler$$.$getNextNavigableLink$($node$$53$$, this, $event$$162_nodeId$$16$$, $links$$2$$));
    $nextLink$$.$_keyboardNavNode$ = $node$$53$$;
    return $nextLink$$
  }
  return 39 == $event$$162_nodeId$$16$$.keyCode || 37 == $event$$162_nodeId$$16$$.keyCode ? ($event$$162_nodeId$$16$$ = this.$_movingToStart$($event$$162_nodeId$$16$$.keyCode) ? this.$getStartId$() : this.$getEndId$(), this.$GetDiagram$().$GetNodeById$($event$$162_nodeId$$16$$)) : $event$$162_nodeId$$16$$.type == D.$DvtMouseEvent$CLICK$$ ? this : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_prototypeAlias$$.$_movingToStart$ = function $$JSCompiler_prototypeAlias$$$$_movingToStart$$($direction$$18$$) {
  var $linkDirectionL2R_start$$27$$ = (0,D.$JSCompiler_StaticMethods_getLinkStart$$)(this), $end$$12$$ = (0,D.$JSCompiler_StaticMethods_getLinkEnd$$)(this), $linkDirectionL2R_start$$27$$ = $linkDirectionL2R_start$$27$$.x < $end$$12$$.x ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$;
  return 39 == $direction$$18$$ && $linkDirectionL2R_start$$27$$ || 37 == $direction$$18$$ && !$linkDirectionL2R_start$$27$$ ? D.$JSCompiler_alias_FALSE$$ : D.$JSCompiler_alias_TRUE$$
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$showHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$hideHoverEffect$()
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return this.getData().categories ? this.getData().categories : [this.getId()]
};
D.$JSCompiler_prototypeAlias$$.$isHidden$ = function $$JSCompiler_prototypeAlias$$$$isHidden$$() {
  var $hiddenCategories$$5$$ = this.$GetDiagram$().$getOptions$().hiddenCategories;
  return $hiddenCategories$$5$$ && D.$DvtArrayUtils$$.$hasAnyItem$($hiddenCategories$$5$$, this.$getCategories$()) || !this.$GetDiagram$().$GetNodeById$(this.$getStartId$()) || !this.$GetDiagram$().$GetNodeById$(this.$getEndId$()) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($animationHandler$$1$$, $oldLink$$) {
  var $linkAnimType_newMat$$1_newStroke_oldPoints$$ = $oldLink$$.$getPoints$(), $newPoints_oldMat$$1_oldStroke$$ = this.$getPoints$(), $playable$$7$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), D.$JSCompiler_alias_NULL$$, $animationHandler$$1$$.$getAnimationDuration$());
  D.$DvtArrayUtils$$.$equals$($linkAnimType_newMat$$1_newStroke_oldPoints$$, $newPoints_oldMat$$1_oldStroke$$) || (this.$setPoints$($linkAnimType_newMat$$1_newStroke_oldPoints$$), $linkAnimType_newMat$$1_newStroke_oldPoints$$ = "typePolyline", 0 < $newPoints_oldMat$$1_oldStroke$$.length && (0,window.isNaN)($newPoints_oldMat$$1_oldStroke$$[0]) && ($linkAnimType_newMat$$1_newStroke_oldPoints$$ = "typePath"), (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$7$$.$_animator$, $linkAnimType_newMat$$1_newStroke_oldPoints$$, 
  this, this.$getPoints$, this.$setPoints$, $newPoints_oldMat$$1_oldStroke$$));
  $oldLink$$.$_labelObj$ && this.$_labelObj$ && ($newPoints_oldMat$$1_oldStroke$$ = $oldLink$$.$_labelObj$.$getMatrix$(), $linkAnimType_newMat$$1_newStroke_oldPoints$$ = this.$_labelObj$.$getMatrix$(), $newPoints_oldMat$$1_oldStroke$$.$equals$($linkAnimType_newMat$$1_newStroke_oldPoints$$) || (this.$_labelObj$.$setMatrix$($newPoints_oldMat$$1_oldStroke$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$7$$.$_animator$, "typeMatrix", this.$_labelObj$, this.$_labelObj$.$getMatrix$, this.$_labelObj$.$setMatrix$, 
  $linkAnimType_newMat$$1_newStroke_oldPoints$$)));
  if($oldLink$$.$getShape$() && this.$getShape$() && ($newPoints_oldMat$$1_oldStroke$$ = $oldLink$$.$getShape$().$getStroke$(), $linkAnimType_newMat$$1_newStroke_oldPoints$$ = this.$getShape$().$getStroke$(), $newPoints_oldMat$$1_oldStroke$$ && $linkAnimType_newMat$$1_newStroke_oldPoints$$ && $newPoints_oldMat$$1_oldStroke$$ instanceof D.$DvtSolidStroke$$ && $linkAnimType_newMat$$1_newStroke_oldPoints$$ instanceof D.$DvtSolidStroke$$ && ($newPoints_oldMat$$1_oldStroke$$.$getColor$() != $linkAnimType_newMat$$1_newStroke_oldPoints$$.$getColor$() || 
  $newPoints_oldMat$$1_oldStroke$$.getWidth() != $linkAnimType_newMat$$1_newStroke_oldPoints$$.getWidth()))) {
    this.$getShape$().$setStroke$($newPoints_oldMat$$1_oldStroke$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$7$$.$_animator$, "typeStroke", this.$getShape$(), this.$getShape$().$getStroke$, this.$getShape$().$setStroke$, $linkAnimType_newMat$$1_newStroke_oldPoints$$)
  }
  $animationHandler$$1$$.add($playable$$7$$, 1)
};
D.$JSCompiler_prototypeAlias$$.$animateDelete$ = function $$JSCompiler_prototypeAlias$$$$animateDelete$$($animationHandler$$2$$) {
  this.$GetDiagram$().$_linksPane$.$addChild$(this);
  var $thisRef$$7$$ = this, $playable$$8$$ = new D.$DvtAnimFadeOut$$(this.$getCtx$(), this, $animationHandler$$2$$.$getAnimationDuration$());
  (0,D.$DvtPlayable$appendOnEnd$$)($playable$$8$$, function() {
    $thisRef$$7$$.getParent().removeChild($thisRef$$7$$);
    $thisRef$$7$$.$destroy$()
  });
  $animationHandler$$2$$.add($playable$$8$$, 0)
};
D.$JSCompiler_prototypeAlias$$.$animateInsert$ = function $$JSCompiler_prototypeAlias$$$$animateInsert$$($animationHandler$$3$$) {
  this.$setAlpha$(0);
  $animationHandler$$3$$.add(new D.$DvtAnimFadeIn$$(this.$getCtx$(), this, $animationHandler$$3$$.$getAnimationDuration$()), 2)
};
D.$JSCompiler_prototypeAlias$$.$getLayoutAttributes$ = function $$JSCompiler_prototypeAlias$$$$getLayoutAttributes$$() {
  return this.getData()
};
D.$DvtDiagramLinkConnectorUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtDiagramLinkConnectorUtils$$, D.$DvtObj$$, "DvtDiagramLinkConnectorUtils");
D.$DvtDiagramLinkConnectorUtils$$.$END_CONNECTOR$ = "endConnector";
D.$DvtDiagramLinkConnectorUtils$$.$START_CONNECTOR$ = "startConnector";
D.$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_ARROW_OPEN$ = "arrowOpen";
D.$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_ARROW$ = "arrow";
D.$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_ARROW_CONCAVE$ = "arrowConcave";
D.$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_RECTANGLE$ = "rectangle";
D.$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_RECTANGLE_ROUNDED$ = "rectangleRounded";
D.$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_CIRCLE$ = "circle";
D.$DvtDiagramLinkConnectorUtils$$.$CreateConnectorShape$ = function $$DvtDiagramLinkConnectorUtils$$$$CreateConnectorShape$$($context$$81$$, $connectorType$$1$$, $connectorTemplate$$1_linkWidth$$1$$, $stroke$$29$$, $parentLink$$) {
  if($connectorTemplate$$1_linkWidth$$1$$) {
    return D.$DvtDiagramLinkConnectorUtils$$.$CreateCustomConnector$($connectorTemplate$$1_linkWidth$$1$$, $parentLink$$)
  }
  $connectorTemplate$$1_linkWidth$$1$$ = $parentLink$$.$GetAppliedLinkWidth$();
  switch($connectorType$$1$$) {
    case D.$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_ARROW$:
      return D.$DvtDiagramLinkConnectorUtils$$.$CreateFilledArrowConnector$($context$$81$$, $connectorTemplate$$1_linkWidth$$1$$, $parentLink$$.$getLinkColor$());
    case D.$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_ARROW_CONCAVE$:
      return D.$DvtDiagramLinkConnectorUtils$$.$CreateFilledConcaveArrowConnector$($context$$81$$, $connectorTemplate$$1_linkWidth$$1$$, $parentLink$$.$getLinkColor$());
    case D.$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_ARROW_OPEN$:
      return D.$DvtDiagramLinkConnectorUtils$$.$CreateOpenArrowConnector$($context$$81$$, $connectorTemplate$$1_linkWidth$$1$$, $stroke$$29$$);
    case D.$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_CIRCLE$:
      return D.$DvtDiagramLinkConnectorUtils$$.$CreateCircleConnector$($context$$81$$, $connectorTemplate$$1_linkWidth$$1$$, $stroke$$29$$);
    case D.$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_RECTANGLE$:
      return D.$DvtDiagramLinkConnectorUtils$$.$CreateRectangleConnector$($context$$81$$, $connectorTemplate$$1_linkWidth$$1$$, $stroke$$29$$);
    case D.$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_RECTANGLE_ROUNDED$:
      return D.$DvtDiagramLinkConnectorUtils$$.$CreateRoundedRectangleConnector$($context$$81$$, $connectorTemplate$$1_linkWidth$$1$$, $stroke$$29$$)
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtDiagramLinkConnectorUtils$$.$TransformConnector$ = function $$DvtDiagramLinkConnectorUtils$$$$TransformConnector$$($connector$$2$$, $connectorType$$2_mat$$9$$, $connectorTemplate$$2$$, $points$$20$$, $connectorPos$$1$$) {
  $connectorType$$2_mat$$9$$ = D.$DvtDiagramLinkConnectorUtils$$.$CalcConnectorTransform$($connector$$2$$, $connectorTemplate$$2$$, $points$$20$$, $connectorPos$$1$$);
  $connector$$2$$.$setMatrix$($connectorType$$2_mat$$9$$)
};
D.$DvtDiagramLinkConnectorUtils$$.$CalcConnectorTransform$ = function $$DvtDiagramLinkConnectorUtils$$$$CalcConnectorTransform$$($connScaleY_connector$$3$$, $connectorTemplate$$3_dims$$10$$, $points$$21_tx$$6$$, $connectorPos$$2_ty$$6$$) {
  var $angleRads_x1$$22$$ = -1, $connScaleX_numPoints$$1_y1$$15$$ = 0, $origMat_x2$$20$$ = 0, $tMat_y2$$14$$ = 0;
  $points$$21_tx$$6$$ && ($connScaleX_numPoints$$1_y1$$15$$ = $points$$21_tx$$6$$.length, 1 === $connectorPos$$2_ty$$6$$ ? (2 <= $connScaleX_numPoints$$1_y1$$15$$ && ($origMat_x2$$20$$ = $points$$21_tx$$6$$[$connScaleX_numPoints$$1_y1$$15$$ - 2], $tMat_y2$$14$$ = $points$$21_tx$$6$$[$connScaleX_numPoints$$1_y1$$15$$ - 1]), 4 <= $connScaleX_numPoints$$1_y1$$15$$ ? ($angleRads_x1$$22$$ = $points$$21_tx$$6$$[$connScaleX_numPoints$$1_y1$$15$$ - 4], $connScaleX_numPoints$$1_y1$$15$$ = $points$$21_tx$$6$$[$connScaleX_numPoints$$1_y1$$15$$ - 
  3]) : ($angleRads_x1$$22$$ = $origMat_x2$$20$$ - 1E-4, $connScaleX_numPoints$$1_y1$$15$$ = $tMat_y2$$14$$)) : (2 <= $connScaleX_numPoints$$1_y1$$15$$ && ($origMat_x2$$20$$ = $points$$21_tx$$6$$[0], $tMat_y2$$14$$ = $points$$21_tx$$6$$[1]), 4 <= $connScaleX_numPoints$$1_y1$$15$$ ? ($angleRads_x1$$22$$ = $points$$21_tx$$6$$[2], $connScaleX_numPoints$$1_y1$$15$$ = $points$$21_tx$$6$$[3]) : ($angleRads_x1$$22$$ = $origMat_x2$$20$$ + 1E-4, $connScaleX_numPoints$$1_y1$$15$$ = $tMat_y2$$14$$)));
  $points$$21_tx$$6$$ = $origMat_x2$$20$$;
  $connectorPos$$2_ty$$6$$ = $tMat_y2$$14$$;
  $angleRads_x1$$22$$ = D.$DvtDiagramLinkConnectorUtils$$.$CalcConnectorRotation$($angleRads_x1$$22$$, $connScaleX_numPoints$$1_y1$$15$$, $origMat_x2$$20$$, $tMat_y2$$14$$);
  $origMat_x2$$20$$ = $connScaleY_connector$$3$$.$_connectorOrigMat$;
  $origMat_x2$$20$$ || ($origMat_x2$$20$$ = $connScaleY_connector$$3$$.$getMatrix$().$clone$(), $connScaleY_connector$$3$$.$_connectorOrigMat$ = $origMat_x2$$20$$);
  $tMat_y2$$14$$ = new D.$DvtMatrix$$;
  $connectorTemplate$$3_dims$$10$$ && ($connectorTemplate$$3_dims$$10$$ = D.$DvtDiagramLinkConnectorUtils$$.$_getCachedDims$($connScaleY_connector$$3$$), $connScaleX_numPoints$$1_y1$$15$$ = $connScaleY_connector$$3$$.$getScaleX$(), $connScaleY_connector$$3$$ = $connScaleY_connector$$3$$.$getScaleY$(), $tMat_y2$$14$$.translate(-0.5 * $connectorTemplate$$3_dims$$10$$.$w$ * $connScaleX_numPoints$$1_y1$$15$$, -0.5 * $connectorTemplate$$3_dims$$10$$.$h$ * $connScaleY_connector$$3$$));
  $tMat_y2$$14$$.rotate($angleRads_x1$$22$$);
  $tMat_y2$$14$$.translate($points$$21_tx$$6$$, $connectorPos$$2_ty$$6$$);
  $tMat_y2$$14$$.concat($origMat_x2$$20$$);
  return $tMat_y2$$14$$
};
D.$DvtDiagramLinkConnectorUtils$$.$_getCachedDims$ = function $$DvtDiagramLinkConnectorUtils$$$$_getCachedDims$$($connector$$4$$) {
  var $dims$$11$$ = $connector$$4$$.$_cachedDims$;
  $dims$$11$$ || ($dims$$11$$ = $connector$$4$$.$getDimensions$(), $connector$$4$$.$_cachedDims$ = $dims$$11$$);
  return $dims$$11$$
};
D.$DvtDiagramLinkConnectorUtils$$.$CalcConnectorRotation$ = function $$DvtDiagramLinkConnectorUtils$$$$CalcConnectorRotation$$($x1$$23$$, $y1$$16$$, $x2$$21$$, $y2$$15$$) {
  return window.Math.atan2($y2$$15$$ - $y1$$16$$, $x2$$21$$ - $x1$$23$$)
};
D.$DvtDiagramLinkConnectorUtils$$.$CreateFilledConcaveArrowConnector$ = function $$DvtDiagramLinkConnectorUtils$$$$CreateFilledConcaveArrowConnector$$($context$$82_filledArrowHead$$, $arrowLength_linkWidth$$2$$, $linkColor$$1$$) {
  $arrowLength_linkWidth$$2$$ = 6 * D.$DvtDiagramLinkConnectorUtils$$.$_getReduce$($arrowLength_linkWidth$$2$$);
  var $arrowWidth$$1$$ = 0.8 * $arrowLength_linkWidth$$2$$;
  $context$$82_filledArrowHead$$ = new D.$DvtPolygon$$($context$$82_filledArrowHead$$, [-0.22 * $arrowLength_linkWidth$$2$$, -0.5 * $arrowWidth$$1$$, 0.78 * $arrowLength_linkWidth$$2$$, 0, -0.22 * $arrowLength_linkWidth$$2$$, 0.5 * $arrowWidth$$1$$, 0, 0]);
  $context$$82_filledArrowHead$$.$setSolidFill$($linkColor$$1$$);
  return $context$$82_filledArrowHead$$
};
D.$DvtDiagramLinkConnectorUtils$$.$CreateFilledArrowConnector$ = function $$DvtDiagramLinkConnectorUtils$$$$CreateFilledArrowConnector$$($context$$83_filledArrowHead$$1$$, $arrowLength$$1_linkWidth$$3$$, $linkColor$$2$$) {
  $arrowLength$$1_linkWidth$$3$$ = 5 * D.$DvtDiagramLinkConnectorUtils$$.$_getReduce$($arrowLength$$1_linkWidth$$3$$);
  var $arrowWidth$$2$$ = 0.8 * $arrowLength$$1_linkWidth$$3$$;
  $context$$83_filledArrowHead$$1$$ = new D.$DvtPolygon$$($context$$83_filledArrowHead$$1$$, [0, -0.5 * $arrowWidth$$2$$, $arrowLength$$1_linkWidth$$3$$, 0, 0, 0.5 * $arrowWidth$$2$$]);
  $context$$83_filledArrowHead$$1$$.$setSolidFill$($linkColor$$2$$);
  return $context$$83_filledArrowHead$$1$$
};
D.$DvtDiagramLinkConnectorUtils$$.$_getReduce$ = function $$DvtDiagramLinkConnectorUtils$$$$_getReduce$$($length$$13_tempLength$$) {
  if(1 >= $length$$13_tempLength$$) {
    return $length$$13_tempLength$$
  }
  $length$$13_tempLength$$ = 0.5 * ($length$$13_tempLength$$ - 1);
  return 1 + $length$$13_tempLength$$
};
D.$DvtDiagramLinkConnectorUtils$$.$CreateOpenArrowConnector$ = function $$DvtDiagramLinkConnectorUtils$$$$CreateOpenArrowConnector$$($arrowHead_context$$84$$, $arrowWidth$$3_linkWidth$$4$$, $stroke$$30$$) {
  $arrowWidth$$3_linkWidth$$4$$ *= 3;
  var $strokeWidth$$1$$ = $stroke$$30$$.getWidth();
  $arrowHead_context$$84$$ = new D.$DvtPolyline$$($arrowHead_context$$84$$, [-$arrowWidth$$3_linkWidth$$4$$ + $strokeWidth$$1$$ * window.Math.sqrt(2) / 2, -$arrowWidth$$3_linkWidth$$4$$, $strokeWidth$$1$$ * window.Math.sqrt(2) / 2, 0, -$arrowWidth$$3_linkWidth$$4$$ + $strokeWidth$$1$$ * window.Math.sqrt(2) / 2, $arrowWidth$$3_linkWidth$$4$$]);
  $arrowHead_context$$84$$.$setStroke$($stroke$$30$$);
  $arrowHead_context$$84$$.$setFill$(D.$JSCompiler_alias_NULL$$);
  return $arrowHead_context$$84$$
};
D.$DvtDiagramLinkConnectorUtils$$.$getCircleRadius$ = function $$DvtDiagramLinkConnectorUtils$$$$getCircleRadius$$($linkWidth$$5$$) {
  return 2 * $linkWidth$$5$$
};
D.$DvtDiagramLinkConnectorUtils$$.$getRectangleLength$ = function $$DvtDiagramLinkConnectorUtils$$$$getRectangleLength$$($linkWidth$$6$$) {
  return 3 * $linkWidth$$6$$
};
D.$DvtDiagramLinkConnectorUtils$$.$CreateCircleConnector$ = function $$DvtDiagramLinkConnectorUtils$$$$CreateCircleConnector$$($conShape_context$$85$$, $linkWidth$$7_radius$$6$$, $stroke$$31$$) {
  $linkWidth$$7_radius$$6$$ = D.$DvtDiagramLinkConnectorUtils$$.$getCircleRadius$($linkWidth$$7_radius$$6$$);
  $conShape_context$$85$$ = new D.$DvtCircle$$($conShape_context$$85$$, $linkWidth$$7_radius$$6$$, 0, $linkWidth$$7_radius$$6$$);
  $conShape_context$$85$$.$setStroke$($stroke$$31$$);
  $conShape_context$$85$$.$setFill$(D.$JSCompiler_alias_NULL$$);
  return $conShape_context$$85$$
};
D.$DvtDiagramLinkConnectorUtils$$.$CreateRectangleConnector$ = function $$DvtDiagramLinkConnectorUtils$$$$CreateRectangleConnector$$($conShape$$1_context$$86$$, $length$$15_linkWidth$$8$$, $stroke$$32$$) {
  $length$$15_linkWidth$$8$$ = D.$DvtDiagramLinkConnectorUtils$$.$getRectangleLength$($length$$15_linkWidth$$8$$);
  $conShape$$1_context$$86$$ = new D.$DvtRect$$($conShape$$1_context$$86$$, 0, -$length$$15_linkWidth$$8$$ / 2, $length$$15_linkWidth$$8$$, $length$$15_linkWidth$$8$$);
  $conShape$$1_context$$86$$.$setStroke$($stroke$$32$$);
  $conShape$$1_context$$86$$.$setFill$(D.$JSCompiler_alias_NULL$$);
  return $conShape$$1_context$$86$$
};
D.$DvtDiagramLinkConnectorUtils$$.$CreateRoundedRectangleConnector$ = function $$DvtDiagramLinkConnectorUtils$$$$CreateRoundedRectangleConnector$$($conShape$$2_context$$87$$, $linkWidth$$9$$, $stroke$$33$$) {
  $conShape$$2_context$$87$$ = D.$DvtDiagramLinkConnectorUtils$$.$CreateRectangleConnector$($conShape$$2_context$$87$$, $linkWidth$$9$$, $stroke$$33$$);
  (0,D.$JSCompiler_StaticMethods_setCornerRadius$$)($conShape$$2_context$$87$$, $linkWidth$$9$$);
  return $conShape$$2_context$$87$$
};
D.$DvtDiagramLinkConnectorUtils$$.$CreateCustomConnector$ = function $$DvtDiagramLinkConnectorUtils$$$$CreateCustomConnector$$($connectorTemplate$$4$$, $parentLink$$1$$) {
  var $afContext$$33$$ = (0,D.$JSCompiler_StaticMethods_createAfContext$$)($parentLink$$1$$.$GetDiagram$()), $array$$inline_3041_elContext$$inline_3038$$ = $parentLink$$1$$.getData().$_elAttributes$;
  $afContext$$33$$.$_elContext$ = $array$$inline_3041_elContext$$inline_3038$$;
  $afContext$$33$$.$setContextCallback$($parentLink$$1$$, $parentLink$$1$$.$eventContextCallback$);
  $array$$inline_3041_elContext$$inline_3038$$ = $parentLink$$1$$.$getTabStopsArray$();
  $afContext$$33$$.$_tabStopsArray$ = $array$$inline_3041_elContext$$inline_3038$$;
  return D.$DvtAfComponentFactory$$.$parseAndLayout$($afContext$$33$$, $connectorTemplate$$4$$, $parentLink$$1$$)
};
D.$DvtDiagramLinkConnectorUtils$$.$GetConnectorOffset$ = function $$DvtDiagramLinkConnectorUtils$$$$GetConnectorOffset$$($connScaleX$$1_connector$$6_linkWidth$$10$$, $connectorType$$4_dims$$12_scaleFactor$$7$$, $connectorTemplate$$5$$, $stroke$$34_strokeWidth$$2$$, $parentLink$$2$$) {
  if($connectorTemplate$$5$$) {
    return $connectorType$$4_dims$$12_scaleFactor$$7$$ = D.$DvtDiagramLinkConnectorUtils$$.$_getCachedDims$($connScaleX$$1_connector$$6_linkWidth$$10$$), $connScaleX$$1_connector$$6_linkWidth$$10$$ = $connScaleX$$1_connector$$6_linkWidth$$10$$.$getScaleX$(), 0.5 * $connectorType$$4_dims$$12_scaleFactor$$7$$.$w$ * $connScaleX$$1_connector$$6_linkWidth$$10$$
  }
  $connScaleX$$1_connector$$6_linkWidth$$10$$ = $parentLink$$2$$.$GetAppliedLinkWidth$();
  $stroke$$34_strokeWidth$$2$$ = $stroke$$34_strokeWidth$$2$$.getWidth();
  switch($connectorType$$4_dims$$12_scaleFactor$$7$$) {
    case D.$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_ARROW_OPEN$:
      return $stroke$$34_strokeWidth$$2$$ * window.Math.sqrt(2);
    case D.$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_ARROW$:
      return $connectorType$$4_dims$$12_scaleFactor$$7$$ = D.$DvtDiagramLinkConnectorUtils$$.$_getReduce$($connScaleX$$1_connector$$6_linkWidth$$10$$), 5 * $connectorType$$4_dims$$12_scaleFactor$$7$$;
    case D.$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_ARROW_CONCAVE$:
      return $connectorType$$4_dims$$12_scaleFactor$$7$$ = D.$DvtDiagramLinkConnectorUtils$$.$_getReduce$($connScaleX$$1_connector$$6_linkWidth$$10$$), 0.78 * 6 * $connectorType$$4_dims$$12_scaleFactor$$7$$;
    case D.$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_CIRCLE$:
      return 2 * D.$DvtDiagramLinkConnectorUtils$$.$getCircleRadius$($stroke$$34_strokeWidth$$2$$) + $stroke$$34_strokeWidth$$2$$ / 2;
    case D.$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_RECTANGLE$:
    ;
    case D.$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_RECTANGLE_ROUNDED$:
      return D.$DvtDiagramLinkConnectorUtils$$.$getRectangleLength$($stroke$$34_strokeWidth$$2$$) + $stroke$$34_strokeWidth$$2$$ / 2;
    default:
      return 0
  }
};
D.$DvtDiagramLinkUnderlay$$ = function $$DvtDiagramLinkUnderlay$$$($context$$89$$, $points$$25$$, $stroke$$35$$) {
  D.$DvtDiagramLinkUnderlay$$.$superclass$.Init.call(this, $context$$89$$);
  this.Init($context$$89$$, $points$$25$$, $stroke$$35$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDiagramLinkUnderlay$$, D.$DvtContainer$$, "DvtDiagramLinkUnderlay");
D.$DvtDiagramLinkUnderlay$$.prototype.Init = function $$DvtDiagramLinkUnderlay$$$$Init$($context$$90$$, $points$$26$$, $stroke$$36$$) {
  $points$$26$$ || ($points$$26$$ = ["M", 0, 0, "L", 1, 0]);
  this.$_stroke$ = $stroke$$36$$;
  this.$_stroke$ || (this.$_stroke$ = new D.$DvtSolidStroke$$("#ffffff", 1, 1));
  this.$_underlay$ = new D.$DvtPath$$($context$$90$$, $points$$26$$);
  this.$_underlay$.$setStroke$($stroke$$36$$);
  this.$_underlay$.$setFill$(D.$JSCompiler_alias_NULL$$);
  this.$addChild$(this.$_underlay$);
  this.$_underlayEndType$ = this.$_underlayEnd$ = this.$_underlayStartType$ = this.$_underlayStart$ = D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods_CreateConnectorUnderlay$$ = function $$JSCompiler_StaticMethods_CreateConnectorUnderlay$$$($JSCompiler_StaticMethods_CreateConnectorUnderlay$self_connectorUnderlay$$2$$, $points$$29$$, $connectorType$$7$$, $connectorTemplate$$8$$, $parentLink$$5$$, $connectorPos$$3$$) {
  $JSCompiler_StaticMethods_CreateConnectorUnderlay$self_connectorUnderlay$$2$$ = D.$DvtDiagramLinkConnectorUtils$$.$CreateConnectorShape$($JSCompiler_StaticMethods_CreateConnectorUnderlay$self_connectorUnderlay$$2$$.$getCtx$(), $connectorType$$7$$, $connectorTemplate$$8$$, $JSCompiler_StaticMethods_CreateConnectorUnderlay$self_connectorUnderlay$$2$$.$_stroke$, $parentLink$$5$$);
  D.$DvtDiagramLinkConnectorUtils$$.$TransformConnector$($JSCompiler_StaticMethods_CreateConnectorUnderlay$self_connectorUnderlay$$2$$, 0, $connectorTemplate$$8$$, $points$$29$$, $connectorPos$$3$$);
  return $JSCompiler_StaticMethods_CreateConnectorUnderlay$self_connectorUnderlay$$2$$
};
D.$DvtDiagramLinkUnderlay$$.prototype.$setStroke$ = function $$DvtDiagramLinkUnderlay$$$$$setStroke$$($stroke$$37$$, $strokeOffset$$1$$) {
  this.$_stroke$ = $stroke$$37$$;
  (0,D.$DvtAgent$isTouchDevice$$)() && ((0,D.$DvtAgent$isBrowserSafari$$)() && 1 == (0,D.$DvtAgent$getDevicePixelRatio$$)()) && ($stroke$$37$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$);
  this.$_underlay$.$setStroke$($stroke$$37$$);
  if(this.$_underlayStart$) {
    var $endStroke_startStroke$$ = $stroke$$37$$.$clone$();
    $endStroke_startStroke$$.$setType$(0);
    $endStroke_startStroke$$.$_bFixedWidth$ = D.$JSCompiler_alias_FALSE$$;
    if(this.$_underlayStartType$ == D.$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_ARROW$ || this.$_underlayStartType$ == D.$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_ARROW_CONCAVE$) {
      $endStroke_startStroke$$.$setWidth$($strokeOffset$$1$$), this.$_underlayStart$.$setSolidFill$($stroke$$37$$.$getColor$())
    }
    this.$_underlayStart$.$setStroke$($endStroke_startStroke$$)
  }
  if(this.$_underlayEnd$) {
    $endStroke_startStroke$$ = $stroke$$37$$.$clone$();
    $endStroke_startStroke$$.$setType$(0);
    $endStroke_startStroke$$.$_bFixedWidth$ = D.$JSCompiler_alias_FALSE$$;
    if(this.$_underlayEndType$ == D.$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_ARROW$ || this.$_underlayEndType$ == D.$DvtDiagramLinkConnectorUtils$$.$CONNECTOR_TYPE_ARROW_CONCAVE$) {
      $endStroke_startStroke$$.$setWidth$($strokeOffset$$1$$), this.$_underlayEnd$.$setSolidFill$($stroke$$37$$.$getColor$())
    }
    this.$_underlayEnd$.$setStroke$($endStroke_startStroke$$)
  }
};
D.$DvtDiagramLinkUnderlay$$.prototype.$getStroke$ = (0,D.$JSCompiler_get$$)("$_stroke$");
D.$DvtDiagramLinkUtils$$ = {};
D.$DvtObj$$.$createSubclass$(D.$DvtDiagramLinkUtils$$, D.$DvtObj$$, "DvtDiagramLinkUtils");
D.$DvtDiagramLinkUtils$$.$ConvertLinkStyleToStrokeType$ = function $$DvtDiagramLinkUtils$$$$ConvertLinkStyleToStrokeType$$($linkStyle$$2$$) {
  var $strokeType$$2$$ = 0;
  switch($linkStyle$$2$$) {
    case "dash":
      $strokeType$$2$$ = 1;
      break;
    case "dot":
      $strokeType$$2$$ = 2;
      break;
    case "dashDot":
      $strokeType$$2$$ = 3
  }
  return $strokeType$$2$$
};
D.$DvtDiagramLinkUtils$$.$GetStrokeDash$ = function $$DvtDiagramLinkUtils$$$$GetStrokeDash$$($strokeType$$3$$, $bUnderlay$$1$$) {
  if(0 == $strokeType$$3$$) {
    return D.$JSCompiler_alias_NULL$$
  }
  if(1 == $strokeType$$3$$) {
    return $bUnderlay$$1$$ ? "8,2" : "6,4"
  }
  if(2 == $strokeType$$3$$) {
    return $bUnderlay$$1$$ ? "4,1" : "2,3"
  }
  if(3 == $strokeType$$3$$) {
    return $bUnderlay$$1$$ ? "10,1,4,1" : "8,3,2,3"
  }
};
D.$DvtDiagramLinkUtils$$.$GetStrokeDashOffset$ = function $$DvtDiagramLinkUtils$$$$GetStrokeDashOffset$$($strokeType$$4$$, $bUnderlay$$2$$) {
  return $bUnderlay$$2$$ && 0 != $strokeType$$4$$ ? 1 : D.$JSCompiler_alias_NULL$$
};
D.$DvtDiagramLinkUtils$$.$ConvertToPath$ = function $$DvtDiagramLinkUtils$$$$ConvertToPath$$($points$$30$$) {
  var $pathCmds$$ = [];
  if($points$$30$$) {
    for(var $i$$243$$ = 0;$i$$243$$ < $points$$30$$.length;$i$$243$$ += 2) {
      0 == $i$$243$$ ? $pathCmds$$.push("M") : $pathCmds$$.push("L"), $pathCmds$$.push($points$$30$$[$i$$243$$]), $pathCmds$$.push($points$$30$$[$i$$243$$ + 1])
    }
  }
  return $pathCmds$$
};
D.$DvtDiagramLinkUtils$$.$ConvertToPoints$ = function $$DvtDiagramLinkUtils$$$$ConvertToPoints$$($pathCmds$$1$$) {
  var $points$$31$$ = [];
  if($pathCmds$$1$$) {
    for(var $i$$244$$ = 0;$i$$244$$ < $pathCmds$$1$$.length;$i$$244$$++) {
      (0,window.isNaN)($pathCmds$$1$$[$i$$244$$]) || $points$$31$$.push($pathCmds$$1$$[$i$$244$$])
    }
  }
  return $points$$31$$
};
D.$DvtDiagramLinkUtils$$.$IsPath$ = function $$DvtDiagramLinkUtils$$$$IsPath$$($points$$32$$) {
  return $points$$32$$ && 0 < $points$$32$$.length ? (0,window.isNaN)($points$$32$$[0]) : D.$JSCompiler_alias_FALSE$$
};
D.$DvtDiagramLinkUtils$$.$GetControlPoints$ = function $$DvtDiagramLinkUtils$$$$GetControlPoints$$($coords$$23_points$$33$$) {
  var $controlPoints$$2$$ = [];
  $coords$$23_points$$33$$ = D.$DvtDiagramLinkUtils$$.$IsPath$($coords$$23_points$$33$$) ? D.$DvtDiagramLinkUtils$$.$ConvertToPoints$($coords$$23_points$$33$$) : $coords$$23_points$$33$$;
  for(var $i$$245$$ = 0;$i$$245$$ < $coords$$23_points$$33$$.length;$i$$245$$ += 2) {
    $controlPoints$$2$$.push(new D.$DvtPoint$$($coords$$23_points$$33$$[$i$$245$$], $coords$$23_points$$33$$[$i$$245$$ + 1]))
  }
  return $controlPoints$$2$$
};
D.$DvtDiagramNode$$ = function $$DvtDiagramNode$$$($context$$91$$, $diagram$$12$$, $nodeData$$1$$) {
  this.Init($context$$91$$, $diagram$$12$$, $nodeData$$1$$)
};
D.$DvtObj$$.$createSubclass$(D.$DvtDiagramNode$$, D.$DvtBaseDiagramNode$$, "DvtDiagramNode");
D.$JSCompiler_prototypeAlias$$ = D.$DvtDiagramNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.Init = function $$JSCompiler_prototypeAlias$$$Init$($context$$92$$, $diagram$$14$$, $data$$35$$) {
  D.$DvtDiagramNode$$.$superclass$.Init.call(this, $context$$92$$, $data$$35$$.id, $diagram$$14$$);
  this.$_data$ = $data$$35$$;
  this.$_diagram$.$isSelectionSupported$() && this.setCursor("pointer")
};
D.$JSCompiler_prototypeAlias$$.getData = (0,D.$JSCompiler_get$$)("$_data$");
D.$JSCompiler_prototypeAlias$$.getId = function $$JSCompiler_prototypeAlias$$$getId$() {
  return this.$_data$.id
};
D.$JSCompiler_prototypeAlias$$.$getContentBounds$ = (0,D.$JSCompiler_get$$)("$_contentDims$");
D.$JSCompiler_prototypeAlias$$.$getLabelBounds$ = function $$JSCompiler_prototypeAlias$$$$getLabelBounds$$() {
  var $bounds$$29$$ = D.$JSCompiler_alias_NULL$$;
  this.$_labelObj$ && ($bounds$$29$$ = this.$_labelDims$ ? this.$_labelDims$ : this.$_labelObj$.$getDimensions$());
  return $bounds$$29$$
};
D.$JSCompiler_prototypeAlias$$.$setSelected$ = function $$JSCompiler_prototypeAlias$$$$setSelected$$($selected$$19$$) {
  var $prevState$$ = this.$_getState$();
  D.$DvtDiagramNode$$.$superclass$.$setSelected$.call(this, $selected$$19$$);
  this.$_diagram$.$getOptions$().selectionRenderer ? (0,D.$JSCompiler_StaticMethods__applyCustomNodeContent$$)(this, this.$_diagram$.$getOptions$().selectionRenderer, this.$_getState$(), $prevState$$) : this.$processDefaultSelectionEffect$($selected$$19$$);
  this.$UpdateAriaLabel$()
};
D.$JSCompiler_prototypeAlias$$.$processDefaultSelectionEffect$ = function $$JSCompiler_prototypeAlias$$$$processDefaultSelectionEffect$$($selected$$20$$) {
  this.$getSelectionShape$() && this.$getSelectionShape$().$setSelected$($selected$$20$$)
};
D.$JSCompiler_prototypeAlias$$.$isSelectable$ = function $$JSCompiler_prototypeAlias$$$$isSelectable$$() {
  return this.$GetDiagram$().$isSelectionSupported$() && "off" != this.getData().selectable
};
D.$JSCompiler_prototypeAlias$$.$GetIcon$ = (0,D.$JSCompiler_get$$)("$_shape$");
D.$JSCompiler_prototypeAlias$$.$render$ = function $$JSCompiler_prototypeAlias$$$$render$$($container$$71_dims$$inline_3081$$) {
  if(this.$_diagram$.$getOptions$().renderer) {
    (0,D.$JSCompiler_StaticMethods__applyCustomNodeContent$$)(this, this.$_diagram$.$getOptions$().renderer, this.$_getState$(), D.$JSCompiler_alias_NULL$$)
  }else {
    var $bbox$$inline_3082_nodeData$$2$$ = this.getData(), $backgroundHeight$$inline_9918_backgroundRect$$inline_3062_diagram$$inline_3052_iconWidth$$inline_3068$$ = this.$_diagram$, $backgroundStyle$$inline_3055_borderRadius$$inline_3061_positionX$$inline_9921$$ = new D.$DvtCSSStyle$$($bbox$$inline_3082_nodeData$$2$$.backgroundStyle);
    if(!(0,D.$JSCompiler_StaticMethods_isEmpty$$)($backgroundStyle$$inline_3055_borderRadius$$inline_3061_positionX$$inline_9921$$)) {
      var $iconHeight$$inline_3069_iconWidth$$inline_9919_width$$inline_3056$$ = (0,D.$DvtCSSStyle$toNumber$$)($backgroundStyle$$inline_3055_borderRadius$$inline_3061_positionX$$inline_9921$$.$getStyle$("width")), $height$$inline_3057_iconHeight$$inline_9920$$ = (0,D.$DvtCSSStyle$toNumber$$)($backgroundStyle$$inline_3055_borderRadius$$inline_3061_positionX$$inline_9921$$.$getStyle$("height")), $diagram$$inline_3064_fillColor$$inline_3058_halign$$inline_3076_iconMarker$$inline_3071_labelWidth$$inline_3078$$ = 
      $backgroundStyle$$inline_3055_borderRadius$$inline_3061_positionX$$inline_9921$$.$getStyle$("background-color"), $borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$ = $backgroundStyle$$inline_3055_borderRadius$$inline_3061_positionX$$inline_9921$$.$getStyle$("border-color"), $backgroundWidth$$inline_9917_borderWidth$$inline_3060_diagram$$inline_3073_iconColor$$inline_3070_text$$inline_9929$$ = (0,D.$DvtCSSStyle$toNumber$$)($backgroundStyle$$inline_3055_borderRadius$$inline_3061_positionX$$inline_9921$$.$getStyle$("border-width")), 
      $backgroundStyle$$inline_3055_borderRadius$$inline_3061_positionX$$inline_9921$$ = (0,D.$DvtCSSStyle$toNumber$$)($backgroundStyle$$inline_3055_borderRadius$$inline_3061_positionX$$inline_9921$$.$getStyle$("border-radius")), $backgroundHeight$$inline_9918_backgroundRect$$inline_3062_diagram$$inline_3052_iconWidth$$inline_3068$$ = new D.$DvtRect$$($backgroundHeight$$inline_9918_backgroundRect$$inline_3062_diagram$$inline_3052_iconWidth$$inline_3068$$.$getCtx$(), 0, 0, $iconHeight$$inline_3069_iconWidth$$inline_9919_width$$inline_3056$$, 
      $height$$inline_3057_iconHeight$$inline_9920$$);
      $backgroundHeight$$inline_9918_backgroundRect$$inline_3062_diagram$$inline_3052_iconWidth$$inline_3068$$.$setSolidFill$($diagram$$inline_3064_fillColor$$inline_3058_halign$$inline_3076_iconMarker$$inline_3071_labelWidth$$inline_3078$$);
      $backgroundStyle$$inline_3055_borderRadius$$inline_3061_positionX$$inline_9921$$ && ($backgroundHeight$$inline_9918_backgroundRect$$inline_3062_diagram$$inline_3052_iconWidth$$inline_3068$$.$setRx$($backgroundStyle$$inline_3055_borderRadius$$inline_3061_positionX$$inline_9921$$), $backgroundHeight$$inline_9918_backgroundRect$$inline_3062_diagram$$inline_3052_iconWidth$$inline_3068$$.$setRy$($backgroundStyle$$inline_3055_borderRadius$$inline_3061_positionX$$inline_9921$$));
      $borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$ && $backgroundHeight$$inline_9918_backgroundRect$$inline_3062_diagram$$inline_3052_iconWidth$$inline_3068$$.$setStroke$(new D.$DvtSolidStroke$$($borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$, 1, $backgroundWidth$$inline_9917_borderWidth$$inline_3060_diagram$$inline_3073_iconColor$$inline_3070_text$$inline_9929$$));
      this.$addChild$($backgroundHeight$$inline_9918_backgroundRect$$inline_3062_diagram$$inline_3052_iconWidth$$inline_3068$$);
      this.$setSelectionShape$($backgroundHeight$$inline_9918_backgroundRect$$inline_3062_diagram$$inline_3052_iconWidth$$inline_3068$$);
      this.$_background$ = $backgroundHeight$$inline_9918_backgroundRect$$inline_3062_diagram$$inline_3052_iconWidth$$inline_3068$$
    }
    $diagram$$inline_3064_fillColor$$inline_3058_halign$$inline_3076_iconMarker$$inline_3071_labelWidth$$inline_3078$$ = this.$_diagram$;
    if($borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$ = $bbox$$inline_3082_nodeData$$2$$.icon) {
      $backgroundHeight$$inline_9918_backgroundRect$$inline_3062_diagram$$inline_3052_iconWidth$$inline_3068$$ = $borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$.width;
      $iconHeight$$inline_3069_iconWidth$$inline_9919_width$$inline_3056$$ = $borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$.height;
      $backgroundWidth$$inline_9917_borderWidth$$inline_3060_diagram$$inline_3073_iconColor$$inline_3070_text$$inline_9929$$ = $borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$.color;
      $diagram$$inline_3064_fillColor$$inline_3058_halign$$inline_3076_iconMarker$$inline_3071_labelWidth$$inline_3078$$ = $borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$.source ? new D.$DvtImageMarker$$($diagram$$inline_3064_fillColor$$inline_3058_halign$$inline_3076_iconMarker$$inline_3071_labelWidth$$inline_3078$$.$getCtx$(), $backgroundHeight$$inline_9918_backgroundRect$$inline_3062_diagram$$inline_3052_iconWidth$$inline_3068$$ / 2, $iconHeight$$inline_3069_iconWidth$$inline_9919_width$$inline_3056$$ / 
      2, $backgroundHeight$$inline_9918_backgroundRect$$inline_3062_diagram$$inline_3052_iconWidth$$inline_3068$$, $iconHeight$$inline_3069_iconWidth$$inline_9919_width$$inline_3056$$, $borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$.source, $borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$.sourceSelected, $borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$.sourceHover, $borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$.sourceHoverSelected) : 
      new D.$DvtSimpleMarker$$($diagram$$inline_3064_fillColor$$inline_3058_halign$$inline_3076_iconMarker$$inline_3071_labelWidth$$inline_3078$$.$getCtx$(), $borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$.shape, "alta", $backgroundHeight$$inline_9918_backgroundRect$$inline_3062_diagram$$inline_3052_iconWidth$$inline_3068$$ / 2, $iconHeight$$inline_3069_iconWidth$$inline_9919_width$$inline_3056$$ / 2, $backgroundHeight$$inline_9918_backgroundRect$$inline_3062_diagram$$inline_3052_iconWidth$$inline_3068$$, 
      $iconHeight$$inline_3069_iconWidth$$inline_9919_width$$inline_3056$$);
      "none" != $borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$.fillPattern ? $diagram$$inline_3064_fillColor$$inline_3058_halign$$inline_3076_iconMarker$$inline_3071_labelWidth$$inline_3078$$.$setFill$(new D.$DvtPatternFill$$($borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$.fillPattern, $backgroundWidth$$inline_9917_borderWidth$$inline_3060_diagram$$inline_3073_iconColor$$inline_3070_text$$inline_9929$$, $backgroundWidth$$inline_9917_borderWidth$$inline_3060_diagram$$inline_3073_iconColor$$inline_3070_text$$inline_9929$$)) : 
      $diagram$$inline_3064_fillColor$$inline_3058_halign$$inline_3076_iconMarker$$inline_3071_labelWidth$$inline_3078$$.$setSolidFill$($backgroundWidth$$inline_9917_borderWidth$$inline_3060_diagram$$inline_3073_iconColor$$inline_3070_text$$inline_9929$$);
      $borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$.borderColor && $diagram$$inline_3064_fillColor$$inline_3058_halign$$inline_3076_iconMarker$$inline_3071_labelWidth$$inline_3078$$.$setStroke$(new D.$DvtSolidStroke$$($borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$.borderColor, $borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$.borderWidth));
      this.$addChild$($diagram$$inline_3064_fillColor$$inline_3058_halign$$inline_3076_iconMarker$$inline_3071_labelWidth$$inline_3078$$);
      this.$_shape$ = $diagram$$inline_3064_fillColor$$inline_3058_halign$$inline_3076_iconMarker$$inline_3071_labelWidth$$inline_3078$$;
      if(this.$_background$) {
        var $borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$ = $bbox$$inline_3082_nodeData$$2$$.icon, $backgroundWidth$$inline_9917_borderWidth$$inline_3060_diagram$$inline_3073_iconColor$$inline_3070_text$$inline_9929$$ = this.$_background$.getWidth(), $backgroundHeight$$inline_9918_backgroundRect$$inline_3062_diagram$$inline_3052_iconWidth$$inline_3068$$ = this.$_background$.getHeight(), $iconHeight$$inline_3069_iconWidth$$inline_9919_width$$inline_3056$$ = 
        $borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$.width, $height$$inline_3057_iconHeight$$inline_9920$$ = $borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$.height, $backgroundStyle$$inline_3055_borderRadius$$inline_3061_positionX$$inline_9921$$ = 0.5 * ($backgroundWidth$$inline_9917_borderWidth$$inline_3060_diagram$$inline_3073_iconColor$$inline_3070_text$$inline_9929$$ - $iconHeight$$inline_3069_iconWidth$$inline_9919_width$$inline_3056$$), 
        $positionY$$inline_9922$$ = 0.5 * ($backgroundHeight$$inline_9918_backgroundRect$$inline_3062_diagram$$inline_3052_iconWidth$$inline_3068$$ - $height$$inline_3057_iconHeight$$inline_9920$$);
        if($borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$.positionX !== D.$JSCompiler_alias_VOID$$) {
          $backgroundStyle$$inline_3055_borderRadius$$inline_3061_positionX$$inline_9921$$ = (0,window.parseFloat)($borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$.positionX), (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) && ($backgroundStyle$$inline_3055_borderRadius$$inline_3061_positionX$$inline_9921$$ = $backgroundWidth$$inline_9917_borderWidth$$inline_3060_diagram$$inline_3073_iconColor$$inline_3070_text$$inline_9929$$ - $backgroundStyle$$inline_3055_borderRadius$$inline_3061_positionX$$inline_9921$$ - 
          $iconHeight$$inline_3069_iconWidth$$inline_9919_width$$inline_3056$$)
        }else {
          var $resolvedHalign$$inline_9923$$ = $borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$.halign;
          "start" == $resolvedHalign$$inline_9923$$ ? $resolvedHalign$$inline_9923$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) ? "right" : "left" : "end" == $resolvedHalign$$inline_9923$$ && ($resolvedHalign$$inline_9923$$ = (0,D.$DvtAgent$isRightToLeft$$)(this.$getCtx$()) ? "left" : "right");
          $backgroundStyle$$inline_3055_borderRadius$$inline_3061_positionX$$inline_9921$$ = "left" == $resolvedHalign$$inline_9923$$ ? 0 : "right" == $resolvedHalign$$inline_9923$$ ? $backgroundWidth$$inline_9917_borderWidth$$inline_3060_diagram$$inline_3073_iconColor$$inline_3070_text$$inline_9929$$ - $iconHeight$$inline_3069_iconWidth$$inline_9919_width$$inline_3056$$ : $backgroundStyle$$inline_3055_borderRadius$$inline_3061_positionX$$inline_9921$$
        }
        $borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$.positionY !== D.$JSCompiler_alias_VOID$$ ? $positionY$$inline_9922$$ = (0,window.parseFloat)($borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$.positionY) : "top" == $borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$.valign ? $positionY$$inline_9922$$ = 0 : "bottom" == $borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$.valign && 
        ($positionY$$inline_9922$$ = $backgroundHeight$$inline_9918_backgroundRect$$inline_3062_diagram$$inline_3052_iconWidth$$inline_3068$$ - $height$$inline_3057_iconHeight$$inline_9920$$);
        (0,D.$JSCompiler_StaticMethods_setTranslate$$)(this.$_shape$, $backgroundStyle$$inline_3055_borderRadius$$inline_3061_positionX$$inline_9921$$, $positionY$$inline_9922$$)
      }
      this.$_background$ || this.$setSelectionShape$($diagram$$inline_3064_fillColor$$inline_3058_halign$$inline_3076_iconMarker$$inline_3071_labelWidth$$inline_3078$$)
    }
    $backgroundWidth$$inline_9917_borderWidth$$inline_3060_diagram$$inline_3073_iconColor$$inline_3070_text$$inline_9929$$ = this.$_diagram$;
    $diagram$$inline_3064_fillColor$$inline_3058_halign$$inline_3076_iconMarker$$inline_3071_labelWidth$$inline_3078$$ = (0,D.$DvtAgent$isRightToLeft$$)($backgroundWidth$$inline_9917_borderWidth$$inline_3060_diagram$$inline_3073_iconColor$$inline_3070_text$$inline_9929$$.$getCtx$()) ? "right" : "left";
    $bbox$$inline_3082_nodeData$$2$$.label && ($borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$ = $bbox$$inline_3082_nodeData$$2$$.labelStyle, $backgroundWidth$$inline_9917_borderWidth$$inline_3060_diagram$$inline_3073_iconColor$$inline_3070_text$$inline_9929$$ = new D.$DvtOutputText$$($backgroundWidth$$inline_9917_borderWidth$$inline_3060_diagram$$inline_3073_iconColor$$inline_3070_text$$inline_9929$$.$getCtx$(), $bbox$$inline_3082_nodeData$$2$$.label, 0, 0), 
    $backgroundWidth$$inline_9917_borderWidth$$inline_3060_diagram$$inline_3073_iconColor$$inline_3070_text$$inline_9929$$.$setCSSStyle$(new D.$DvtCSSStyle$$($borderColor$$inline_3059_icon$$inline_3067_iconData$$inline_9916_style$$inline_9927$$)), $backgroundWidth$$inline_9917_borderWidth$$inline_3060_diagram$$inline_3073_iconColor$$inline_3070_text$$inline_9929$$.$setHorizAlignment$($diagram$$inline_3064_fillColor$$inline_3058_halign$$inline_3076_iconMarker$$inline_3071_labelWidth$$inline_3078$$), 
    $backgroundWidth$$inline_9917_borderWidth$$inline_3060_diagram$$inline_3073_iconColor$$inline_3070_text$$inline_9929$$.$setVertAlignment$("top"), $diagram$$inline_3064_fillColor$$inline_3058_halign$$inline_3076_iconMarker$$inline_3071_labelWidth$$inline_3078$$ = (0,D.$DvtCSSStyle$toNumber$$)((new D.$DvtCSSStyle$$($bbox$$inline_3082_nodeData$$2$$.labelStyle)).getWidth()), 0 < $diagram$$inline_3064_fillColor$$inline_3058_halign$$inline_3076_iconMarker$$inline_3071_labelWidth$$inline_3078$$ && D.$DvtTextUtils$$.$fitText$($backgroundWidth$$inline_9917_borderWidth$$inline_3060_diagram$$inline_3073_iconColor$$inline_3070_text$$inline_9929$$, 
    $diagram$$inline_3064_fillColor$$inline_3058_halign$$inline_3076_iconMarker$$inline_3071_labelWidth$$inline_3078$$, window.Infinity, this) || this.$addChild$($backgroundWidth$$inline_9917_borderWidth$$inline_3060_diagram$$inline_3073_iconColor$$inline_3070_text$$inline_9929$$), this.$_labelObj$ = $backgroundWidth$$inline_9917_borderWidth$$inline_3060_diagram$$inline_3073_iconColor$$inline_3070_text$$inline_9929$$);
    (0,D.$DvtDiagramNode$_addHoverSelectionStrokes$$)(this.$getSelectionShape$(), $bbox$$inline_3082_nodeData$$2$$)
  }
  $container$$71_dims$$inline_3081$$.$addChild$(this);
  $container$$71_dims$$inline_3081$$ = D.$JSCompiler_alias_NULL$$;
  this.$_customNodeContent$ ? ($bbox$$inline_3082_nodeData$$2$$ = this.$getDimensions$()) && ($container$$71_dims$$inline_3081$$ = new D.$DvtRectangle$$($bbox$$inline_3082_nodeData$$2$$.x, $bbox$$inline_3082_nodeData$$2$$.y, $bbox$$inline_3082_nodeData$$2$$.$w$ - $bbox$$inline_3082_nodeData$$2$$.x, $bbox$$inline_3082_nodeData$$2$$.$h$ - $bbox$$inline_3082_nodeData$$2$$.y)) : ($container$$71_dims$$inline_3081$$ = this.$_background$ ? this.$_background$.$GetDimensionsWithStroke$(this) : D.$JSCompiler_alias_NULL$$) && 
  this.$_shape$ ? $container$$71_dims$$inline_3081$$ = (0,D.$JSCompiler_StaticMethods_getUnion$$)($container$$71_dims$$inline_3081$$, this.$_shape$.$GetDimensionsWithStroke$(this)) : !$container$$71_dims$$inline_3081$$ && this.$_shape$ && ($container$$71_dims$$inline_3081$$ = this.$_shape$.$GetDimensionsWithStroke$(this));
  this.$_contentDims$ = $container$$71_dims$$inline_3081$$;
  this.$setAriaRole$("img");
  this.$UpdateAriaLabel$();
  this.$_diagram$.$__getEventManager$().$associate$(this, this)
};
D.$JSCompiler_StaticMethods__applyCustomNodeContent$$ = function $$JSCompiler_StaticMethods__applyCustomNodeContent$$$($JSCompiler_StaticMethods__applyCustomNodeContent$self$$, $nodeContent_renderer$$10$$, $context$$93_state$$6$$, $prevState$$1$$) {
  var $contextHandler$$ = $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$_diagram$.$getOptions$()._contextHandler;
  if($contextHandler$$) {
    var $nodeData$$3$$ = $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.getData();
    $context$$93_state$$6$$ = $contextHandler$$($JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$getElem$(), $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$_customNodeContent$, $nodeData$$3$$, $context$$93_state$$6$$, $prevState$$1$$);
    $nodeContent_renderer$$10$$ = $nodeContent_renderer$$10$$($context$$93_state$$6$$);
    $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$_customNodeContent$ && $nodeContent_renderer$$10$$ != $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$_customNodeContent$ && ($JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$_customNodeContent$.namespaceURI === D.$DvtToolkitUtils$$.$SVG_NS$ ? (0,D.$JSCompiler_StaticMethods_getContainerElem$$)($JSCompiler_StaticMethods__applyCustomNodeContent$self$$).removeChild($JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$_customNodeContent$) : 
    $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.removeChild($nodeContent_renderer$$10$$), $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$_customNodeContent$ = D.$JSCompiler_alias_NULL$$);
    $nodeContent_renderer$$10$$ && $nodeContent_renderer$$10$$.namespaceURI === D.$DvtToolkitUtils$$.$SVG_NS$ ? $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$_customNodeContent$ || (D.$DvtToolkitUtils$$.$appendChildElem$((0,D.$JSCompiler_StaticMethods_getContainerElem$$)($JSCompiler_StaticMethods__applyCustomNodeContent$self$$), $nodeContent_renderer$$10$$), $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$_customNodeContent$ = $nodeContent_renderer$$10$$) : $nodeContent_renderer$$10$$ instanceof 
    D.$DvtBaseComponent$$ ? $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$_customNodeContent$ || ($JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$addChild$($nodeContent_renderer$$10$$), $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$_customNodeContent$ = $nodeContent_renderer$$10$$) : $nodeContent_renderer$$10$$ && $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$_diagram$.$Log$("DvtDiagram: could not add custom node content for the node " + $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.getId() + 
    $nodeContent_renderer$$10$$, 1)
  }else {
    $JSCompiler_StaticMethods__applyCustomNodeContent$self$$.$_diagram$.$Log$("DvtDiagram: could not add custom node content - context handler is undefined", 1)
  }
};
D.$DvtDiagramNode$_addHoverSelectionStrokes$$ = function $$DvtDiagramNode$_addHoverSelectionStrokes$$$($selectionShape$$, $nodeData$$8$$) {
  var $hoverInnerColor_shis$$ = $nodeData$$8$$.hoverInnerColor, $hos_hoverOuterColor$$ = $nodeData$$8$$.hoverOuterColor, $selectionColor_shos$$ = $nodeData$$8$$.selectionColor, $his$$ = new D.$DvtSolidStroke$$($hoverInnerColor_shis$$, 1, 4);
  $his$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$;
  $hos_hoverOuterColor$$ = new D.$DvtSolidStroke$$($hos_hoverOuterColor$$, 1, 8);
  $hos_hoverOuterColor$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$;
  var $sis$$ = new D.$DvtSolidStroke$$($selectionColor_shos$$, 1, 2);
  $sis$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$;
  var $sos$$ = new D.$DvtSolidStroke$$($selectionColor_shos$$, 1, 4);
  $sos$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$;
  $hoverInnerColor_shis$$ = new D.$DvtSolidStroke$$($hoverInnerColor_shis$$, 1, 4);
  $hoverInnerColor_shis$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$;
  $selectionColor_shos$$ = new D.$DvtSolidStroke$$($selectionColor_shos$$, 1, 8);
  $selectionColor_shos$$.$_bFixedWidth$ = D.$JSCompiler_alias_TRUE$$;
  $selectionShape$$.$setHoverStroke$($his$$, $hos_hoverOuterColor$$).$setSelectedStroke$($sis$$, $sos$$).$setSelectedHoverStroke$($hoverInnerColor_shis$$, $selectionColor_shos$$)
};
D.$JSCompiler_prototypeAlias$$ = D.$DvtDiagramNode$$.prototype;
D.$JSCompiler_prototypeAlias$$.$setSelectionShape$ = (0,D.$JSCompiler_set$$)("$_selectionShape$");
D.$JSCompiler_prototypeAlias$$.$getSelectionShape$ = function $$JSCompiler_prototypeAlias$$$$getSelectionShape$$() {
  if(!this.$_selectionShape$ && this.$_contentDims$) {
    var $selectionShape$$2$$ = new D.$DvtRect$$(this.$_diagram$.$getCtx$(), this.$_contentDims$.x, this.$_contentDims$.y, this.$_contentDims$.$w$, this.$_contentDims$.$h$);
    (0,D.$JSCompiler_StaticMethods_setInvisibleFill$$)($selectionShape$$2$$);
    this.$setSelectionShape$($selectionShape$$2$$);
    this.$addChildAt$($selectionShape$$2$$, 0);
    (0,D.$DvtDiagramNode$_addHoverSelectionStrokes$$)($selectionShape$$2$$, this.getData());
    this.$_selectionShape$ = $selectionShape$$2$$
  }
  return this.$_selectionShape$
};
D.$JSCompiler_prototypeAlias$$.$showHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$showHoverEffect$$() {
  var $prevState$$2$$ = this.$_getState$();
  this.$_isShowingHoverEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$_diagram$.$getOptions$().hoverRenderer ? (0,D.$JSCompiler_StaticMethods__applyCustomNodeContent$$)(this, this.$_diagram$.$getOptions$().hoverRenderer, this.$_getState$(), $prevState$$2$$) : this.$processDefaultHoverEffect$(D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$hideHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$hideHoverEffect$$() {
  var $prevState$$3$$ = this.$_getState$();
  this.$_isShowingHoverEffect$ = D.$JSCompiler_alias_FALSE$$;
  this.$_diagram$.$getOptions$().hoverRenderer ? (0,D.$JSCompiler_StaticMethods__applyCustomNodeContent$$)(this, this.$_diagram$.$getOptions$().hoverRenderer, this.$_getState$(), $prevState$$3$$) : this.$processDefaultHoverEffect$(D.$JSCompiler_alias_FALSE$$)
};
D.$JSCompiler_prototypeAlias$$.$processDefaultHoverEffect$ = function $$JSCompiler_prototypeAlias$$$$processDefaultHoverEffect$$($hovered$$1$$) {
  this.$getSelectionShape$() && ($hovered$$1$$ ? this.$getSelectionShape$().$showHoverEffect$() : this.$getSelectionShape$().$hideHoverEffect$())
};
D.$JSCompiler_prototypeAlias$$.$getDatatip$ = function $$JSCompiler_prototypeAlias$$$$getDatatip$$() {
  var $tooltipFunc$$4$$ = this.$GetDiagram$().$getOptions$().tooltip;
  return $tooltipFunc$$4$$ ? (0,D.$JSCompiler_StaticMethods_getCustomTooltip$$)(this.$GetDiagram$().$getCtx$().$getTooltipManager$(), $tooltipFunc$$4$$, this.$getDataContext$()) : this.$getShortDesc$()
};
D.$JSCompiler_prototypeAlias$$.$getShortDesc$ = function $$JSCompiler_prototypeAlias$$$$getShortDesc$$() {
  return this.getData().shortDesc
};
D.$JSCompiler_prototypeAlias$$.$getDataContext$ = function $$JSCompiler_prototypeAlias$$$$getDataContext$$() {
  return{id:this.getId(), type:"node", label:this.getData().label}
};
D.$JSCompiler_prototypeAlias$$.$getAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$getAriaLabel$$() {
  var $states$$4$$ = [];
  this.$isSelectable$() && $states$$4$$.push((0,D.$DvtBundle$getTranslatedString$$)("DvtUtilBundle", this.$isSelected$() ? "STATE_SELECTED" : "STATE_UNSELECTED"));
  return(0,D.$DvtDisplayable$generateAriaLabel$$)(this.$getShortDesc$(), $states$$4$$)
};
D.$JSCompiler_prototypeAlias$$.$UpdateAriaLabel$ = function $$JSCompiler_prototypeAlias$$$$UpdateAriaLabel$$() {
  if(!(0,D.$DvtAgent$deferAriaCreation$$)()) {
    var $desc$$8$$ = this.$getAriaLabel$();
    $desc$$8$$ && this.$setAriaProperty$("label", $desc$$8$$)
  }
};
D.$JSCompiler_prototypeAlias$$.$getNextNavigable$ = function $$JSCompiler_prototypeAlias$$$$getNextNavigable$$($event$$163$$) {
  var $arNodes$$1_next$$2$$ = D.$JSCompiler_alias_NULL$$;
  if(32 == $event$$163$$.keyCode && $event$$163$$.ctrlKey) {
    $arNodes$$1_next$$2$$ = this
  }else {
    if($event$$163$$.altKey) {
      var $adjLinks$$ = this.$GetDiagram$().$getNavigableLinksForNodeId$(this.getId()), $keyboardHandler$$1$$;
      ($keyboardHandler$$1$$ = this.$GetDiagram$().$__getEventManager$().$KeyboardHandler$) && $keyboardHandler$$1$$.$getFirstNavigableLink$ && ($arNodes$$1_next$$2$$ = $keyboardHandler$$1$$.$getFirstNavigableLink$(this, $event$$163$$, $adjLinks$$));
      $arNodes$$1_next$$2$$ ? $arNodes$$1_next$$2$$.$_keyboardNavNode$ = this : $arNodes$$1_next$$2$$ = this
    }else {
      $event$$163$$.type == D.$DvtMouseEvent$CLICK$$ ? $arNodes$$1_next$$2$$ = this : ($arNodes$$1_next$$2$$ = (0,D.$JSCompiler_StaticMethods_GetAllNodeObjects$$)(this.$GetDiagram$()), $arNodes$$1_next$$2$$ = (0,D.$DvtKeyboardHandler$getNextAdjacentNavigable$$)(this, $event$$163$$, $arNodes$$1_next$$2$$))
    }
  }
  return $arNodes$$1_next$$2$$
};
D.$JSCompiler_prototypeAlias$$.$showKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$showKeyboardFocusEffect$$() {
  var $prevState$$4$$ = this.$_getState$();
  this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_TRUE$$;
  this.$_diagram$.$getOptions$().focusRenderer ? (0,D.$JSCompiler_StaticMethods__applyCustomNodeContent$$)(this, this.$_diagram$.$getOptions$().focusRenderer, this.$_getState$(), $prevState$$4$$) : this.$processDefaultFocusEffect$(D.$JSCompiler_alias_TRUE$$)
};
D.$JSCompiler_prototypeAlias$$.$hideKeyboardFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$hideKeyboardFocusEffect$$() {
  this.$isShowingKeyboardFocusEffect$() && (this.$_getState$(), this.$_isShowingKeyboardFocusEffect$ = D.$JSCompiler_alias_FALSE$$, this.$_diagram$.$getOptions$().focusRenderer ? (0,D.$JSCompiler_StaticMethods__applyCustomNodeContent$$)(this, this.$_diagram$.$getOptions$().focusRenderer, this.getData(), this.$_getState$()) : this.$processDefaultFocusEffect$(D.$JSCompiler_alias_FALSE$$))
};
D.$JSCompiler_prototypeAlias$$.$processDefaultFocusEffect$ = function $$JSCompiler_prototypeAlias$$$$processDefaultFocusEffect$$($focused$$1$$) {
  this.$processDefaultHoverEffect$($focused$$1$$)
};
D.$JSCompiler_prototypeAlias$$.$isShowingKeyboardFocusEffect$ = (0,D.$JSCompiler_get$$)("$_isShowingKeyboardFocusEffect$");
D.$JSCompiler_prototypeAlias$$.$getCategories$ = function $$JSCompiler_prototypeAlias$$$$getCategories$$() {
  return this.getData().categories ? this.getData().categories : [this.getId()]
};
D.$JSCompiler_prototypeAlias$$.$isHidden$ = function $$JSCompiler_prototypeAlias$$$$isHidden$$() {
  var $hiddenCategories$$6$$ = this.$GetDiagram$().$getOptions$().hiddenCategories;
  return $hiddenCategories$$6$$ && D.$DvtArrayUtils$$.$hasAnyItem$($hiddenCategories$$6$$, this.$getCategories$()) ? D.$JSCompiler_alias_TRUE$$ : D.$JSCompiler_alias_FALSE$$
};
D.$JSCompiler_prototypeAlias$$.$animateUpdate$ = function $$JSCompiler_prototypeAlias$$$$animateUpdate$$($animationHandler$$4$$, $oldNode$$3$$) {
  var $playable$$9$$ = new D.$DvtCustomAnimation$$(this.$getCtx$(), D.$JSCompiler_alias_NULL$$, $animationHandler$$4$$.$getAnimationDuration$()), $oldMat$$2_oldTx$$ = $oldNode$$3$$.$getTranslateX$(), $newMat$$2_oldTy$$ = $oldNode$$3$$.$getTranslateY$(), $newTx$$ = this.$getTranslateX$(), $newTy$$ = this.$getTranslateY$();
  $oldMat$$2_oldTx$$ != $newTx$$ && (this.$setTranslateX$($oldMat$$2_oldTx$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$9$$.$_animator$, "typeNumber", this, this.$getTranslateX$, this.$setTranslateX$, $newTx$$));
  $newMat$$2_oldTy$$ != $newTy$$ && (this.$setTranslateY$($newMat$$2_oldTy$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$9$$.$_animator$, "typeNumber", this, this.$getTranslateY$, this.$setTranslateY$, $newTy$$));
  $oldNode$$3$$.$_shape$ && this.$_shape$ && ((0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$9$$.$_animator$, "typeRectangle", this.$_shape$, this.$_shape$.$getCenterDimensions$, this.$_shape$.$setCenterDimensions$, this.$_shape$.$getCenterDimensions$()), this.$_shape$.$setCenterDimensions$($oldNode$$3$$.$_shape$.$getCenterDimensions$()));
  $oldNode$$3$$.$_labelObj$ && this.$_labelObj$ && ($oldMat$$2_oldTx$$ = $oldNode$$3$$.$_labelObj$.$getMatrix$(), $newMat$$2_oldTy$$ = this.$_labelObj$.$getMatrix$(), $oldMat$$2_oldTx$$.$equals$($newMat$$2_oldTy$$) || (this.$_labelObj$.$setMatrix$($oldMat$$2_oldTx$$), (0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$9$$.$_animator$, "typeMatrix", this.$_labelObj$, this.$_labelObj$.$getMatrix$, this.$_labelObj$.$setMatrix$, $newMat$$2_oldTy$$)));
  (0,D.$DvtDiagramNode$_animateFill$$)($playable$$9$$, $oldNode$$3$$.$_background$, this.$_background$);
  (0,D.$DvtDiagramNode$_animateFill$$)($playable$$9$$, $oldNode$$3$$.$_shape$, this.$_shape$);
  $animationHandler$$4$$.add($playable$$9$$, 1)
};
D.$DvtDiagramNode$_animateFill$$ = function $$DvtDiagramNode$_animateFill$$$($playable$$10$$, $oldDisplayable$$, $newDisplayable$$) {
  $oldDisplayable$$ && $newDisplayable$$ && ((0,D.$JSCompiler_StaticMethods_addProp$$)($playable$$10$$.$_animator$, "typeFill", $newDisplayable$$, $newDisplayable$$.$getFill$, $newDisplayable$$.$setFill$, $newDisplayable$$.$getFill$()), $newDisplayable$$.$setFill$($oldDisplayable$$.$getFill$()))
};
D.$DvtDiagramNode$$.prototype.$animateDelete$ = function $$DvtDiagramNode$$$$$animateDelete$$($animationHandler$$5$$) {
  this.$GetDiagram$().$_nodesPane$.$addChild$(this);
  var $thisRef$$8$$ = this, $playable$$11$$ = new D.$DvtAnimFadeOut$$(this.$getCtx$(), this, $animationHandler$$5$$.$getAnimationDuration$());
  (0,D.$DvtPlayable$appendOnEnd$$)($playable$$11$$, function() {
    $thisRef$$8$$.getParent().removeChild($thisRef$$8$$);
    $thisRef$$8$$.$destroy$()
  });
  $animationHandler$$5$$.add($playable$$11$$, 0)
};
D.$DvtDiagramNode$$.prototype.$animateInsert$ = function $$DvtDiagramNode$$$$$animateInsert$$($animationHandler$$6$$) {
  this.$setAlpha$(0);
  $animationHandler$$6$$.add(new D.$DvtAnimFadeIn$$(this.$getCtx$(), this, $animationHandler$$6$$.$getAnimationDuration$()), 2)
};
D.$DvtDiagramNode$$.prototype.$getLayoutAttributes$ = function $$DvtDiagramNode$$$$$getLayoutAttributes$$() {
  return this.getData()
};
D.$DvtDiagramNode$$.prototype.$_getState$ = function $$DvtDiagramNode$$$$$_getState$$($zoom$$3$$) {
  return{hovered:this.$_isShowingHoverEffect$, selected:this.$isSelected$(), focused:this.$_isShowingKeyboardFocusEffect$, zoom:$zoom$$3$$ ? $zoom$$3$$ : this.$GetDiagram$().$_panZoomCanvas$.$getZoom$()}
};
D.$DvtDiagramAutomation$$ = function $$DvtDiagramAutomation$$$($dvtComponent$$2$$) {
  this.Init($dvtComponent$$2$$)
};
(0,D.$goog$exportPath_$$)("DvtDiagramAutomation", D.$DvtDiagramAutomation$$);
D.$DvtObj$$.$createSubclass$(D.$DvtDiagramAutomation$$, D.$DvtAutomation$$, "DvtDiagramAutomation");
D.$DvtDiagramAutomation$$.prototype.Init = (0,D.$JSCompiler_set$$)("$_diagram$");
D.$DvtDiagramAutomation$$.prototype.$GetSubIdForDomElement$ = function $$DvtDiagramAutomation$$$$$GetSubIdForDomElement$$($displayable$$14_logicalObj$$6$$) {
  return($displayable$$14_logicalObj$$6$$ = (0,D.$JSCompiler_StaticMethods_GetLogicalObject$$)(this.$_diagram$.$__getEventManager$(), $displayable$$14_logicalObj$$6$$)) && $displayable$$14_logicalObj$$6$$ instanceof D.$DvtDiagramNode$$ ? "node[" + this.$_diagram$.$GetAllNodes$().indexOf($displayable$$14_logicalObj$$6$$.getId()) + "]" : $displayable$$14_logicalObj$$6$$ && $displayable$$14_logicalObj$$6$$ instanceof D.$DvtDiagramLink$$ ? "link[" + this.$_diagram$.$GetAllLinks$().indexOf($displayable$$14_logicalObj$$6$$.getId()) + 
  "]" : D.$JSCompiler_alias_NULL$$
};
D.$DvtDiagramAutomation$$.prototype.$getDomElementForSubId$ = function $$DvtDiagramAutomation$$$$$getDomElementForSubId$$($component$$1_subId$$6$$) {
  if("tooltip" == $component$$1_subId$$6$$) {
    return(0,D.$JSCompiler_StaticMethods_GetTooltipElement$$)(this.$_diagram$)
  }
  var $index$$145_parsedSubId$$ = this.$_parseSubId$($component$$1_subId$$6$$);
  $component$$1_subId$$6$$ = $index$$145_parsedSubId$$.component;
  var $index$$145_parsedSubId$$ = $index$$145_parsedSubId$$.index, $displayable$$15$$ = D.$JSCompiler_alias_NULL$$;
  "node" == $component$$1_subId$$6$$ ? $displayable$$15$$ = this.$_getNode$($index$$145_parsedSubId$$) : "link" == $component$$1_subId$$6$$ && ($displayable$$15$$ = (0,D.$JSCompiler_StaticMethods__getLink$$)(this, $index$$145_parsedSubId$$));
  return $displayable$$15$$ ? $displayable$$15$$.$getElem$() : D.$JSCompiler_alias_NULL$$
};
D.$DvtDiagramAutomation$$.prototype.getDomElementForSubId = D.$DvtDiagramAutomation$$.prototype.$getDomElementForSubId$;
D.$DvtDiagramAutomation$$.prototype.$_parseSubId$ = function $$DvtDiagramAutomation$$$$$_parseSubId$$($subId$$7$$) {
  var $component$$2$$ = $subId$$7$$, $index$$146$$ = -1, $substring$$ = $subId$$7$$.substring(0, $subId$$7$$.indexOf("["));
  $substring$$ && ($component$$2$$ = "node" == $substring$$ || "link" == $substring$$ ? $substring$$ : D.$JSCompiler_alias_NULL$$, $index$$146$$ = (0,window.parseInt)($subId$$7$$.substring($subId$$7$$.indexOf("[") + 1, $subId$$7$$.indexOf("]"))));
  return{component:$component$$2$$, index:$index$$146$$}
};
D.$DvtDiagramAutomation$$.prototype.$getNodeCount$ = function $$DvtDiagramAutomation$$$$$getNodeCount$$() {
  return this.$_diagram$.$getNodeCount$()
};
D.$DvtDiagramAutomation$$.prototype.getNodeCount = D.$DvtDiagramAutomation$$.prototype.$getNodeCount$;
D.$DvtDiagramAutomation$$.prototype.$getLinkCount$ = function $$DvtDiagramAutomation$$$$$getLinkCount$$() {
  return this.$_diagram$.$getLinkCount$()
};
D.$DvtDiagramAutomation$$.prototype.getLinkCount = D.$DvtDiagramAutomation$$.prototype.$getLinkCount$;
D.$DvtDiagramAutomation$$.prototype.$getNode$ = function $$DvtDiagramAutomation$$$$$getNode$$($node$$42_nodeIndex$$) {
  if($node$$42_nodeIndex$$ = this.$_getNode$($node$$42_nodeIndex$$)) {
    var $data$$29$$ = {};
    $data$$29$$.id = $node$$42_nodeIndex$$.getId();
    $data$$29$$.selected = $node$$42_nodeIndex$$.$isSelected$();
    $data$$29$$.tooltip = $node$$42_nodeIndex$$.$getShortDesc$();
    $data$$29$$.label = $node$$42_nodeIndex$$.getData().label;
    $data$$29$$.background = $node$$42_nodeIndex$$.getData().backgroundStyle;
    $data$$29$$.icon = this.$_getMarkerData$($node$$42_nodeIndex$$.$GetIcon$());
    return $data$$29$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtDiagramAutomation$$.prototype.getNode = D.$DvtDiagramAutomation$$.prototype.$getNode$;
D.$DvtDiagramAutomation$$.prototype.$getLink$ = function $$DvtDiagramAutomation$$$$$getLink$$($link$$15_linkIndex$$) {
  if($link$$15_linkIndex$$ = (0,D.$JSCompiler_StaticMethods__getLink$$)(this, $link$$15_linkIndex$$)) {
    var $data$$30$$ = {};
    $data$$30$$.id = $link$$15_linkIndex$$.getId();
    $data$$30$$.selected = $link$$15_linkIndex$$.$isSelected$();
    $data$$30$$.tooltip = $link$$15_linkIndex$$.$getShortDesc$();
    $data$$30$$.label = $link$$15_linkIndex$$.getData().label;
    $data$$30$$.color = $link$$15_linkIndex$$.$getLinkColor$();
    $data$$30$$.width = $link$$15_linkIndex$$.$getLinkWidth$();
    $data$$30$$.style = $link$$15_linkIndex$$.$getLinkStyle$();
    $data$$30$$.startNode = $link$$15_linkIndex$$.$getStartId$();
    $data$$30$$.endNode = $link$$15_linkIndex$$.$getEndId$();
    $data$$30$$.startConnectorType = $link$$15_linkIndex$$.$getStartConnectorType$();
    $data$$30$$.endConnectorType = $link$$15_linkIndex$$.$getEndConnectorType$();
    return $data$$30$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtDiagramAutomation$$.prototype.getLink = D.$DvtDiagramAutomation$$.prototype.$getLink$;
D.$DvtDiagramAutomation$$.prototype.$_getMarkerData$ = function $$DvtDiagramAutomation$$$$$_getMarkerData$$($marker$$7$$) {
  if($marker$$7$$) {
    var $data$$31$$ = {};
    $data$$31$$.shape = $marker$$7$$ instanceof D.$DvtSimpleMarker$$ ? $marker$$7$$.$getType$() : "none";
    $marker$$7$$.$getFill$() && ($data$$31$$.color = $marker$$7$$.$getFill$().$getColor$());
    return $data$$31$$
  }
  return D.$JSCompiler_alias_NULL$$
};
D.$DvtDiagramAutomation$$.prototype.$_getNode$ = function $$DvtDiagramAutomation$$$$$_getNode$$($nodeIndex$$1$$) {
  var $nodeIds$$1$$ = this.$_diagram$.$GetAllNodes$();
  return 0 <= $nodeIndex$$1$$ && $nodeIndex$$1$$ < $nodeIds$$1$$.length ? this.$_diagram$.$GetNodeById$($nodeIds$$1$$[$nodeIndex$$1$$]) : D.$JSCompiler_alias_NULL$$
};
D.$JSCompiler_StaticMethods__getLink$$ = function $$JSCompiler_StaticMethods__getLink$$$($JSCompiler_StaticMethods__getLink$self$$, $linkIndex$$1$$) {
  var $linkIds$$ = $JSCompiler_StaticMethods__getLink$self$$.$_diagram$.$GetAllLinks$();
  return 0 <= $linkIndex$$1$$ && $linkIndex$$1$$ < $linkIds$$.length ? $JSCompiler_StaticMethods__getLink$self$$.$_diagram$.$GetLinkById$($linkIds$$[$linkIndex$$1$$]) : D.$JSCompiler_alias_NULL$$
};

  return D;
});
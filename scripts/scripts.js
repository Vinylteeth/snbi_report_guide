// Constants and globally scoped variables should have good names.
// Comments should be added to each line except where the purpose is obvious.

function openAssetTab(evt, assetName) {
  // Declare all variables
  var i, assetcontainers, assetbuttons;

  // Get all elements with class="asset-containers" and hide them
  assetcontainers = document.getElementsByClassName("asset-containers");
  for (i = 0; i < assetcontainers.length; i++) {
    assetcontainers[i].style.display = "none";
  }

  // Get all elements with class="asset-buttons" and remove the class "active"
  assetbuttons = document.getElementsByClassName("asset-buttons");
  for (i = 0; i < assetbuttons.length; i++) {
    assetbuttons[i].className = assetbuttons[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(assetName).style.display = "block";
  evt.currentTarget.className += " active";
}

//
//

function openBridgeComponent(evt, componentName) {
  // Declare all variables
  var i, bridgecomponentcontainers, bridgecomponentbuttons;

  // Get all elements with class="bridge-component-containers" and hide them
  bridgecomponentcontainers = document.getElementsByClassName("bridge-component-containers");
  for (i = 0; i < bridgecomponentcontainers.length; i++) {
    bridgecomponentcontainers[i].style.display = "none";
  }

  // Get all elements with class="bridge-component-buttons" and remove the class "active"
  bridgecomponentbuttons = document.getElementsByClassName("bridge-component-buttons");
  for (i = 0; i < bridgecomponentbuttons.length; i++) {
    bridgecomponentbuttons[i].className = bridgecomponentbuttons[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(componentName).style.display = "block";
  evt.currentTarget.className += " active";
}

//
//

function openBridgeAlignment(evt, componentName) {
  // Declare all variables
  var i, bridgealignmentcontainers, bridgealignmentbuttons;

  // Get all elements with class="bridge-component-containers" and hide them
  bridgealignmentcontainers = document.getElementsByClassName("bridge-alignment-containers");
  for (i = 0; i < bridgealignmentcontainers.length; i++) {
    bridgealignmentcontainers[i].style.display = "none";
  }

  // Get all elements with class="bridge-component-buttons" and remove the class "active"
  bridgealignmentbuttons = document.getElementsByClassName("bridge-alignment-buttons");
  for (i = 0; i < bridgealignmentbuttons.length; i++) {
    bridgealignmentbuttons[i].className = bridgealignmentbuttons[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(componentName).style.display = "block";
  evt.currentTarget.className += " active";
}

//
//

function openBridgeApproach(evt, componentName) {
  // Declare all variables
  var i, bridgeapproachcontainers, bridgeapproachbuttons;

  // Get all elements with class="bridge-component-containers" and hide them
  bridgeapproachcontainers = document.getElementsByClassName("bridge-approach-containers");
  for (i = 0; i < bridgeapproachcontainers.length; i++) {
    bridgeapproachcontainers[i].style.display = "none";
  }

  // Get all elements with class="bridge-component-buttons" and remove the class "active"
  bridgeapproachbuttons = document.getElementsByClassName("bridge-approach-buttons");
  for (i = 0; i < bridgeapproachbuttons.length; i++) {
    bridgeapproachbuttons[i].className = bridgeapproachbuttons[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(componentName).style.display = "block";
  evt.currentTarget.className += " active";
}

//
//

function openBridgeJoints(evt, componentName) {
  // Declare all variables
  var i, bridgejointscontainers, bridgejointsbuttons;

  // Get all elements with class="bridge-component-containers" and hide them
  bridgejointscontainers = document.getElementsByClassName("bridge-joints-containers");
  for (i = 0; i < bridgejointscontainers.length; i++) {
    bridgejointscontainers[i].style.display = "none";
  }

  // Get all elements with class="bridge-component-buttons" and remove the class "active"
  bridgejointsbuttons = document.getElementsByClassName("bridge-joints-buttons");
  for (i = 0; i < bridgejointsbuttons.length; i++) {
    bridgejointsbuttons[i].className = bridgejointsbuttons[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(componentName).style.display = "block";
  evt.currentTarget.className += " active";
}

//
//

function openBridgeRailings(evt, componentName) {
  // Declare all variables
  var i, bridgerailingscontainers, bridgerailingsbuttons;

  // Get all elements with class="bridge-component-containers" and hide them
  bridgerailingscontainers = document.getElementsByClassName("bridge-railings-containers");
  for (i = 0; i < bridgerailingscontainers.length; i++) {
    bridgerailingscontainers[i].style.display = "none";
  }

  // Get all elements with class="bridge-component-buttons" and remove the class "active"
  bridgerailingsbuttons = document.getElementsByClassName("bridge-railings-buttons");
  for (i = 0; i < bridgerailingsbuttons.length; i++) {
    bridgerailingsbuttons[i].className = bridgerailingsbuttons[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(componentName).style.display = "block";
  evt.currentTarget.className += " active";
}

//
//

function openBridgeDeck(evt, componentName) {
  // Declare all variables
  var i, bridgedeckcontainers, bridgedeckbuttons;

  // Get all elements with class="bridge-component-containers" and hide them
  bridgedeckcontainers = document.getElementsByClassName("bridge-deck-containers");
  for (i = 0; i < bridgedeckcontainers.length; i++) {
    bridgedeckcontainers[i].style.display = "none";
  }

  // Get all elements with class="bridge-component-buttons" and remove the class "active"
  bridgedeckbuttons = document.getElementsByClassName("bridge-deck-buttons");
  for (i = 0; i < bridgedeckbuttons.length; i++) {
    bridgedeckbuttons[i].className = bridgedeckbuttons[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(componentName).style.display = "block";
  evt.currentTarget.className += " active";
}

//
//

function openBridgeSuper(evt, componentName) {
  // Declare all variables
  var i, bridgesupercontainers, bridgesuperbuttons;

  // Get all elements with class="bridge-component-containers" and hide them
  bridgesupercontainers = document.getElementsByClassName("bridge-super-containers");
  for (i = 0; i < bridgesupercontainers.length; i++) {
    bridgesupercontainers[i].style.display = "none";
  }

  // Get all elements with class="bridge-component-buttons" and remove the class "active"
  bridgesuperbuttons = document.getElementsByClassName("bridge-super-buttons");
  for (i = 0; i < bridgesuperbuttons.length; i++) {
    bridgesuperbuttons[i].className = bridgesuperbuttons[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(componentName).style.display = "block";
  evt.currentTarget.className += " active";
}

//
//

function openBridgeBearings(evt, componentName) {
  // Declare all variables
  var i, bridgebearingscontainers, bridgebearingsbuttons;

  // Get all elements with class="bridge-component-containers" and hide them
  bridgebearingscontainers = document.getElementsByClassName("bridge-bearings-containers");
  for (i = 0; i < bridgebearingscontainers.length; i++) {
    bridgebearingscontainers[i].style.display = "none";
  }

  // Get all elements with class="bridge-component-buttons" and remove the class "active"
  bridgebearingsbuttons = document.getElementsByClassName("bridge-bearings-buttons");
  for (i = 0; i < bridgebearingsbuttons.length; i++) {
    bridgebearingsbuttons[i].className = bridgebearingsbuttons[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(componentName).style.display = "block";
  evt.currentTarget.className += " active";
}

//
//

function openBridgeSub(evt, componentName) {
  // Declare all variables
  var i, bridgesubcontainers, bridgesubbuttons;

  // Get all elements with class="bridge-component-containers" and hide them
  bridgesubcontainers = document.getElementsByClassName("bridge-sub-containers");
  for (i = 0; i < bridgesubcontainers.length; i++) {
    bridgesubcontainers[i].style.display = "none";
  }

  // Get all elements with class="bridge-component-buttons" and remove the class "active"
  bridgesubbuttons = document.getElementsByClassName("bridge-sub-buttons");
  for (i = 0; i < bridgesubbuttons.length; i++) {
    bridgesubbuttons[i].className = bridgesubbuttons[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(componentName).style.display = "block";
  evt.currentTarget.className += " active";
}

//
//

function openBridgeCulvert(evt, componentName) {
  // Declare all variables
  var i, bridgeculvertcontainers, bridgeculvertbuttons;

  // Get all elements with class="bridge-component-containers" and hide them
  bridgeculvertcontainers = document.getElementsByClassName("bridge-culvert-containers");
  for (i = 0; i < bridgeculvertcontainers.length; i++) {
    bridgeculvertcontainers[i].style.display = "none";
  }

  // Get all elements with class="bridge-component-buttons" and remove the class "active"
  bridgeculvertbuttons = document.getElementsByClassName("bridge-culvert-buttons");
  for (i = 0; i < bridgeculvertbuttons.length; i++) {
    bridgeculvertbuttons[i].className = bridgeculvertbuttons[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(componentName).style.display = "block";
  evt.currentTarget.className += " active";
}

//
//

function openBridgeChannel(evt, componentName) {
  // Declare all variables
  var i, bridgechannelcontainers, bridgechannelbuttons;

  // Get all elements with class="bridge-component-containers" and hide them
  bridgechannelcontainers = document.getElementsByClassName("bridge-channel-containers");
  for (i = 0; i < bridgechannelcontainers.length; i++) {
    bridgechannelcontainers[i].style.display = "none";
  }

  // Get all elements with class="bridge-component-buttons" and remove the class "active"
  bridgechannelbuttons = document.getElementsByClassName("bridge-channel-buttons");
  for (i = 0; i < bridgechannelbuttons.length; i++) {
    bridgechannelbuttons[i].className = bridgechannelbuttons[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(componentName).style.display = "block";
  evt.currentTarget.className += " active";
}

//
//

function openBridgeScour(evt, componentName) {
  // Declare all variables
  var i, bridgescourcontainers, bridgescourbuttons;

  // Get all elements with class="bridge-component-containers" and hide them
  bridgescourcontainers = document.getElementsByClassName("bridge-scour-containers");
  for (i = 0; i < bridgescourcontainers.length; i++) {
    bridgescourcontainers[i].style.display = "none";
  }

  // Get all elements with class="bridge-component-buttons" and remove the class "active"
  bridgescourbuttons = document.getElementsByClassName("bridge-scour-buttons");
  for (i = 0; i < bridgescourbuttons.length; i++) {
    bridgescourbuttons[i].className = bridgescourbuttons[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(componentName).style.display = "block";
  evt.currentTarget.className += " active";
}

//
//

function openBridgeOvertopping(evt, componentName) {
  // Declare all variables
  var i, bridgeovertoppingcontainers, bridgeovertoppingbuttons;

  // Get all elements with class="bridge-component-containers" and hide them
  bridgeovertoppingcontainers = document.getElementsByClassName("bridge-overtopping-containers");
  for (i = 0; i < bridgeovertoppingcontainers.length; i++) {
    bridgeovertoppingcontainers[i].style.display = "none";
  }

  // Get all elements with class="bridge-component-buttons" and remove the class "active"
  bridgeovertoppingbuttons = document.getElementsByClassName("bridge-overtopping-buttons");
  for (i = 0; i < bridgeovertoppingbuttons.length; i++) {
    bridgeovertoppingbuttons[i].className = bridgeovertoppingbuttons[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(componentName).style.display = "block";
  evt.currentTarget.className += " active";
}

//
//

function openBridgeWildlife(evt, componentName) {
  // Declare all variables
  var i, bridgewildlifecontainers, bridgewildlifebuttons;

  // Get all elements with class="bridge-component-containers" and hide them
  bridgewildlifecontainers = document.getElementsByClassName("bridge-wildlife-containers");
  for (i = 0; i < bridgewildlifecontainers.length; i++) {
    bridgewildlifecontainers[i].style.display = "none";
  }

  // Get all elements with class="bridge-component-buttons" and remove the class "active"
  bridgewildlifebuttons = document.getElementsByClassName("bridge-wildlife-buttons");
  for (i = 0; i < bridgewildlifebuttons.length; i++) {
    bridgewildlifebuttons[i].className = bridgewildlifebuttons[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(componentName).style.display = "block";
  evt.currentTarget.className += " active";
}

//
//

function openCulvertItem(evt, componentName) {
  // Declare all variables
  var i, culvertitemcontainers, culvertitembuttons;

  // Get all elements with class="culvert-item-containers" and hide them
  culvertitemcontainers = document.getElementsByClassName("culvert-item-containers");
  for (i = 0; i < culvertitemcontainers.length; i++) {
    culvertitemcontainers[i].style.display = "none";
  }

  // Get all elements with class="culvert-item-buttons" and remove the class "active"
  culvertitembuttons = document.getElementsByClassName("culvert-item-buttons");
  for (i = 0; i < culvertitembuttons.length; i++) {
    culvertitembuttons[i].className = culvertitembuttons[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(componentName).style.display = "block";
  evt.currentTarget.className += " active";
}

//
//

function openWallItem(evt, componentName) {
  // Declare all variables
  var i, wallitemcontainers, wallitembuttons;

  // Get all elements with class="wall-item-containers" and hide them
  wallitemcontainers = document.getElementsByClassName("wall-item-containers");
  for (i = 0; i < wallitemcontainers.length; i++) {
    wallitemcontainers[i].style.display = "none";
  }

  // Get all elements with class="wall-item-buttons" and remove the class "active"
  wallitembuttons = document.getElementsByClassName("wall-item-buttons");
  for (i = 0; i < wallitembuttons.length; i++) {
    wallitembuttons[i].className = wallitembuttons[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(componentName).style.display = "block";
  evt.currentTarget.className += " active";
}

//
//

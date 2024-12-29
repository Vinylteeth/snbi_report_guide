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

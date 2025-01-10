// General open tab function
function openTab(evt, containerClass, buttonClass, componentName) {
  // Hide all containers
  var containers = document.getElementsByClassName(containerClass);
  for (var i = 0; i < containers.length; i++) {
    containers[i].style.display = "none";
  }

  // Remove "active" class from all buttons
  var buttons = document.getElementsByClassName(buttonClass);
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].className = buttons[i].className.replace(" active", "");
  }

  // Show the current tab and add "active" class to the clicked button
  document.getElementById(componentName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Open tab functions
function openAssetTab(evt, componentName) {
  openTab(evt, "asset-containers", "asset-buttons", componentName);
}

function openBridgeComponent(evt, componentName) {
  openTab(evt, "bridge-component-containers", "bridge-component-buttons", componentName);
}

function openBridgeAlignment(evt, componentName) {
  openTab(evt, "bridge-alignment-containers", "bridge-alignment-buttons", componentName);
}

function openBridgeApproach(evt, componentName) {
  openTab(evt, "bridge-approach-containers", "bridge-approach-buttons", componentName);
}

function openBridgeJoints(evt, componentName) {
  openTab(evt, "bridge-joints-containers", "bridge-joints-buttons", componentName);
}

function openBridgeRailings(evt, componentName) {
  openTab(evt, "bridge-railings-containers", "bridge-railings-buttons", componentName);
}

function openBridgeDeck(evt, componentName) {
  openTab(evt, "bridge-deck-containers", "bridge-deck-buttons", componentName);
}

function openBridgeSuper(evt, componentName) {
  openTab(evt, "bridge-super-containers", "bridge-super-buttons", componentName);
}

function openBridgeBearings(evt, componentName) {
  openTab(evt, "bridge-bearings-containers", "bridge-bearings-buttons", componentName);
}

function openBridgeSub(evt, componentName) {
  openTab(evt, "bridge-sub-containers", "bridge-sub-buttons", componentName);
}

function openBridgeCulvert(evt, componentName) {
  openTab(evt, "bridge-culvert-containers", "bridge-culvert-buttons", componentName);
}

function openBridgeChannel(evt, componentName) {
  openTab(evt, "bridge-channel-containers", "bridge-channel-buttons", componentName);
}

function openBridgeScour(evt, componentName) {
  openTab(evt, "bridge-scour-containers", "bridge-scour-buttons", componentName);
}

function openBridgeOvertopping(evt, componentName) {
  openTab(evt, "bridge-overtopping-containers", "bridge-overtopping-buttons", componentName);
}

function openBridgeWildlife(evt, componentName) {
  openTab(evt, "bridge-wildlife-containers", "bridge-wildlife-buttons", componentName);
}

function openElementItem(evt, componentName) {
  openTab(evt, "bridge-element-containers", "bridge-element-buttons", componentName);
}

function openCulvertItem(evt, componentName) {
  openTab(evt, "culvert-item-containers", "culvert-item-buttons", componentName);
}

function openWallItem(evt, componentName) {
  openTab(evt, "wall-item-containers", "wall-item-buttons", componentName);
}

// Maintenance alert
function openBridgeComponentMaintenance(evt, componentName) {
  // Declare all variables
  var idClicked = evt.target.id; // ID of the clicked element
  var classClicked = evt.target.className; // Class of the clicked element
  var colorsuffix = classClicked.slice(-1); // Last character of the class name determines the color
  var defectNameContainer = evt.target.parentNode.querySelector("div"); // Find the defect description in the parent div
  var defectName = defectNameContainer.innerHTML; // Get the inner HTML of the defect div
  var defectNameLowerCase = defectName.toLowerCase(); // Convert the defect name to lowercase

  // Determine the color based on the class suffix
  if (colorsuffix == 1) {
    colorsuffix = "grey";
  } else if (colorsuffix == 2) {
    colorsuffix = "green";
  } else if (colorsuffix == 3) {
    colorsuffix = "yellow";
  } else {
    colorsuffix = "red"; // Default color is red if none of the above
  }

  // Prepare the text for the clipboard and the alert
  var clipboardValue = "A " + colorsuffix + " deficiency was submitted for " + defectNameLowerCase + ".";
  var finalMessage =
    'This was copied to the clipboard: "' +
    clipboardValue +
    '" This submission is from ' +
    idClicked +
    ". This will eventually be added to the Review page and the plural form will be corrected.";

  // Copy the text to the clipboard
  navigator.clipboard.writeText(clipboardValue);

  // Show an alert with the copied message
  alert(finalMessage);
}

// textarea row control
function expandTextarea(evt, componentName) {
  // Declare all variables
  var elem = document.getElementById(componentName); // Get the textarea element to use its properties.
  elem.parentNode.dataset.replicatedValue = elem.value; // Match the parent element value to it (divTextAreaMirror class = value/comment).
}
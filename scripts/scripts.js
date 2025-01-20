// Imports
import { bridgeComponents } from "./modules/bridge_objects.mjs";
import {
  approachBridgeElements,
  jointsBridgeElements,
  railingsBridgeElements,
  deckBridgeElements,
  wearingBridgeElements,
  superBridgeElements,
  paintBridgeElements,
  bearingsBridgeElements,
  subBridgeElements,
  culvertBridgeElements,
  bridgeElements,
  elementComponentContainer,
  createButtonElement,
  createElementContainer,
} from "./modules/elements.mjs";

import {
  alignmentMaintenanceTasks,
  approachMaintenanceTasks,
  jointsMaintenanceTasks,
  railingsMaintenanceTasks,
  deckMaintenanceTasks,
  superMaintenanceTasks,
  bearingsMaintenanceTasks,
  subMaintenanceTasks,
  culvertMaintenanceTasks,
  channelMaintenanceTasks,
  repairTaskNames,
  createButtonMaintenance,
  createMaintenanceTaskContainer,
  populateMaintenanceTasks,
} from "./modules/maintenance.mjs";

// css
import "../styles/foundations.css";
import "../styles/components.css";

// images
// import logoPurple from "../media/logo-rings-only-purple.png";
// import logoOrange from "../media/logo-rings-only-orange.png";

// Insert commentary in HTML safely
const container = document.querySelector("#bridge-alignment-pg1 .content-container-paragraphs");
if (container) {
  const safeHTML = DOMPurify.sanitize(bridgeComponents[0].commentary);
  container.innerHTML = safeHTML;
  console.log("Sanitization complete and inserted.");
} else {
  console.log("Container element not found.");
}

// General openTab function
function openTab(evt) {
  const button = evt.currentTarget;
  const componentName = button.dataset.target;
  const containerClass = button.dataset.containerClass;
  const buttonClass = button.dataset.buttonClass;

  // Hide all containers
  const containers = document.getElementsByClassName(containerClass);
  for (let i = 0; i < containers.length; i++) {
    containers[i].style.display = "none";
  }

  // Remove "active" class from all buttons
  const buttons = document.getElementsByClassName(buttonClass);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }

  // Show the current tab and add "active" class to the clicked button
  document.getElementById(componentName).style.display = "block";
  button.classList.add("active");
}

// Button classes to handle tabs
const buttonClasses = [
  "asset-buttons",
  "bridge-component-buttons",
  "bridge-alignment-buttons",
  "bridge-approach-buttons",
  "bridge-joints-buttons",
  "bridge-railings-buttons",
  "bridge-deck-buttons",
  "bridge-super-buttons",
  "bridge-bearings-buttons",
  "bridge-sub-buttons",
  "bridge-culvert-buttons",
  "bridge-channel-buttons",
  "bridge-scour-buttons",
  "bridge-overtopping-buttons",
  "bridge-wildlife-buttons",
  "bridge-elements-buttons",
  "bridge-maintenance-buttons",
  "bridge-review-buttons",
  "element-item-buttons",
  "culvert-item-buttons",
  "wall-item-buttons",
];

// Add event listeners for each button class
buttonClasses.forEach((buttonClass) => {
  document.querySelectorAll(`.${buttonClass}`).forEach((button) => {
    button.addEventListener("click", openTab);
  });
});

// Clipboard functionality for copying
function copyToClipboard(evt) {
  const textToCopy = evt.currentTarget.innerHTML; // Get the innerHTML of the clicked element
  navigator.clipboard
    .writeText(textToCopy) // Copy text to clipboard
    .catch((err) => {
      console.error("Error copying text: ", err); // Log any errors
    });
}

// Clipboard functionality for pasting
function pasteFromClipboard(evt) {
  const textarea = evt.currentTarget; // Get the double-clicked textarea
  navigator.clipboard
    .readText() // Read text from the clipboard
    .then((clipboardText) => {
      textarea.value += clipboardText; // Append the clipboard content to the textarea
    })
    .catch((err) => {
      console.error("Error pasting text: ", err); // Log any errors
    });
}

// Event listener for copy and paste actions
document.querySelectorAll(".content-container-comment-lines").forEach((element) => {
  element.addEventListener("click", copyToClipboard);
});

document.querySelectorAll(".textarea-comments").forEach((textarea) => {
  textarea.addEventListener("dblclick", pasteFromClipboard);
});

// Expand Textarea functionality
export function expandTextarea(evt, componentName) {
  const elem = document.getElementById(componentName); // Get the textarea element
  elem.parentNode.dataset.replicatedValue = elem.value; // Replicate the value to its parent
}

// Setup event listeners for textareas
export function setupTextAreaListeners() {
  const textareas = document.querySelectorAll(".textarea-comments");

  textareas.forEach((textarea) => {
    textarea.addEventListener("input", function (event) {
      expandTextarea(event, textarea.id);
    });
  });
}

// Call this function when the page loads or when new textareas are dynamically added
document.addEventListener("DOMContentLoaded", setupTextAreaListeners);

// Sidebar toggle function
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("collapsed");
}

// Function to open content sections
function openContent(sectionId) {
  // Hide all sections
  document.querySelectorAll(".content-section").forEach((section) => {
    section.classList.add("hidden");
  });

  // Show the selected section
  document.getElementById(sectionId).classList.remove("hidden");
}

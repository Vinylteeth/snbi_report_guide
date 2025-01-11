// General open tab function
function openTab(evt) {
  var button = evt.currentTarget;

  // Extract data attributes from the clicked button
  var componentName = button.getAttribute('data-target');
  var containerClass = button.getAttribute('data-container-class');
  var buttonClass = button.getAttribute('data-button-class');

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
  button.className += " active";
}

// Array of button classes
var buttonClasses = [
  'asset-buttons',
  'bridge-component-buttons',
  'bridge-alignment-buttons',
  'bridge-approach-buttons',
  'bridge-joints-buttons',
  'bridge-railings-buttons',
  'bridge-deck-buttons',
  'bridge-super-buttons',
  'bridge-bearings-buttons',
  'bridge-sub-buttons',
  'bridge-culvert-buttons',
  'bridge-channel-buttons',
  'bridge-scour-buttons',
  'bridge-overtopping-buttons',
  'bridge-wildlife-buttons',
  'bridge-elements-buttons',
  'bridge-maintenance-buttons',
  'bridge-review-buttons',
  'element-item-buttons',
  'culvert-item-buttons',
  'wall-item-buttons'
];

// Loop through the array and add event listeners to each button class
buttonClasses.forEach(function(buttonClass) {
  document.querySelectorAll('.' + buttonClass).forEach(function(button) {
    button.addEventListener('click', openTab);
  });
});

// // Activate the second tab (assuming you want to display pg2 as the initial active page)
// window.addEventListener('load', function() {
//   var secondButton = document.querySelectorAll('.' + buttonClasses[0])[1]; // Select the second button in each class
//   if (secondButton) {
//     secondButton.click(); // Trigger a click event on the second button to activate pg2
//   }
// });

// Add event listeners to buttons
// document.querySelectorAll('[class^="bridge-"][class$="-buttons"]').forEach(function(button) {
//   button.addEventListener('click', openTab);
// });



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
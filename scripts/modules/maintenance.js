const repairTaskNames = [
  "Approach Repair",
  "Attenuator Repair",
  "Bearing Repair",
  "Brush Cutting / Herbicide Spray",
  "Channel Debris Removal",
  "Concrete Crack Seal",
  "Deck Cleaning and Flushing",
  "Deck Patch",
  "Drain Repair",
  "Erosion Control / Riprap",
  "Graffiti Removal",
  "Guardrail / Barrier Wall Repair",
  "Joint Repair",
  "Signage Install / Signage Repair",
  "Substructure Cleaning and Flushing",
  "Substructure Repair",
  "Superstructure Cleaning and Flushing",
  "Superstructure Repair"
];

// Dynamically assign numbers to each task
const repairTasks = repairTaskNames.map((name, index) => ({
  number: index + 1,  // Dynamically assign the number starting from 1
  name: name
}));

// console.log(repairTasks);

// console.log(bridgeElements[9].elements[5].name)

// Reference the container whose innerHTML is being dynamically created
const maintenanceContainter = document.getElementById('maintenance-container');

// Clear out the innerHTML so you can work out the js (remove when working)
maintenanceContainter.innerHTML = '';

// Create a header
const header = document.createElement('div');
header.className = 'elements-segment-header';
header.textContent = "Maintenance Items:";
maintenanceContainter.appendChild(header);

// Loop through each repair and add an repairContainer row to the container
repairTasks.forEach(repairItem => {
  const repairContainer = document.createElement('div');
  repairContainer.className = 'component-maintenance-container';

  // Add the child buttons for deficiencies to repairContainer row
  for (let i = 1; i <= 4; i++) {
    const button = document.createElement('button');
    button.id = `bridge-maintenance-bt${repairItem.number}-${i}`;
    button.className = `component-maintenance-button${i}`;
    button.textContent = "+";
    button.setAttribute('onclick', `addDeficiencyButtons(event, 'bridge-maintenance-bt${repairItem.number}-${i}')`);
    button.setAttribute("data-button-number", `Maintenance Item ${repairItem.number}`);
    if (i == 1) {
      colorsuffix = "Grey";
    } else if (i == 2) {
      colorsuffix = "Green";
    } else if (i == 3) {
      colorsuffix = "Yellow";
    } else {
      colorsuffix = "Red"; // Default color is red if none of the above
    }
    button.setAttribute("data-button-category", `${colorsuffix}`);
    repairContainer.appendChild(button);
  }

  // Add the repair name to the repairContainer row
  const item = document.createElement('div');
  item.className = 'component-maintenance-item';
  item.textContent = `${repairItem.name}`;
  repairContainer.appendChild(item);

  // Add the repairContainer to the container
  maintenanceContainter.appendChild(repairContainer);
});

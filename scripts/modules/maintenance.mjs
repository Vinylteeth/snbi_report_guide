// elements.mjs
import { addDeficiencyButtons } from "./elements.mjs";

export const alignmentMaintenanceTasks = [
  { number: 2, name: "Attenuator Repair" },
  { number: 14, name: "Signage Install / Signage Repair" },
];

export const approachMaintenanceTasks = [{ number: 1, name: "Approach Repair" }];

export const jointsMaintenanceTasks = [{ number: 13, name: "Joint Repair" }];

export const railingsMaintenanceTasks = [
  { number: 2, name: "Attenuator Repair" },
  { number: 11, name: "Graffiti Removal" },
  { number: 12, name: "Guardrail / Barrier Wall Repair" },
];

export const deckMaintenanceTasks = [
  { number: 6, name: "Concrete Crack Seal" },
  { number: 7, name: "Deck Cleaning and Flushing" },
  { number: 8, name: "Deck Patch" },
  { number: 9, name: "Drain Repair" },
];

export const superMaintenanceTasks = [
  { number: 11, name: "Graffiti Removal" },
  { number: 14, name: "Signage Install / Signage Repair" },
  { number: 17, name: "Superstructure Cleaning and Flushing" },
  { number: 18, name: "Superstructure Repair" },
];

export const bearingsMaintenanceTasks = [{ number: 3, name: "Bearing Repair" }];

export const subMaintenanceTasks = [
  { number: 2, name: "Attenuator Repair" },
  { number: 11, name: "Graffiti Removal" },
  { number: 14, name: "Signage Install / Signage Repair" },
  { number: 15, name: "Substructure Cleaning and Flushing" },
  { number: 16, name: "Substructure Repair" },
];

export const culvertMaintenanceTasks = [
  { number: 6, name: "Concrete Crack Seal" },
  { number: 18, name: "Superstructure Repair" },
  { number: 16, name: "Substructure Repair" },
];

export const channelMaintenanceTasks = [
  { number: 4, name: "Brush Cutting / Herbicide Spray" },
  { number: 5, name: "Channel Debris Removal" },
  { number: 10, name: "Erosion Control / Riprap" },
];

export const maintenanceTasks = [
  { tasks: alignmentMaintenanceTasks, containerID: "alignment-maintenance-container" },
  { tasks: approachMaintenanceTasks, containerID: "approach-maintenance-container" },
  { tasks: jointsMaintenanceTasks, containerID: "joints-maintenance-container" },
  { tasks: railingsMaintenanceTasks, containerID: "railings-maintenance-container" },
  { tasks: deckMaintenanceTasks, containerID: "deck-maintenance-container" },
  { tasks: superMaintenanceTasks, containerID: "super-maintenance-container" },
  { tasks: bearingsMaintenanceTasks, containerID: "bearings-maintenance-container" },
  { tasks: subMaintenanceTasks, containerID: "sub-maintenance-container" },
  { tasks: culvertMaintenanceTasks, containerID: "culvert-maintenance-container" },
  { tasks: channelMaintenanceTasks, containerID: "channel-maintenance-container" },
];

export const repairTaskNames = [
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
  "Superstructure Repair",
];

///////////////////////////////////////////////////////////////////////////////////

// Dynamically generate tasks with numbers
export const repairTasks = repairTaskNames.map((name, index) => ({
  number: index + 1,
  name: name,
}));

// Helper function to create a button
export function createButtonMaintenance(task, buttonIndex, prefix) {
  const button = document.createElement("button");
  button.id = `${prefix}-bt${task.number}-${buttonIndex}`;
  button.className = `component-maintenance-button${buttonIndex}`;
  button.textContent = "+";
  button.setAttribute("data-button-number", `Maintenance Item ${task.number}`);

  // Assign color categories based on button index
  const colors = ["Grey", "Green", "Yellow", "Red"];
  const colorSuffix = colors[buttonIndex - 1] || "Red"; // Default to Red if index is out of bounds
  button.setAttribute("data-button-category", colorSuffix);
  button.setAttribute("data-button-name", task.name);

  // Add the event listener instead of using onclick
  button.addEventListener("click", (event) => addDeficiencyButtons(event));

  return button;
}

// Helper function to create a maintenance task container
export function createMaintenanceTaskContainer(task, prefix) {
  const container = document.createElement("div");
  container.className = "component-maintenance-container";

  // Add deficiency buttons
  for (let i = 1; i <= 4; i++) {
    const button = createButtonMaintenance(task, i, prefix);
    container.appendChild(button);
  }

  // Add task name
  const item = document.createElement("div");
  item.className = "component-maintenance-item";
  item.textContent = task.name;
  container.appendChild(item);

  return container;
}

// Function to populate maintenance tasks
export function populateMaintenanceTasks(taskArray, containerID, prefix) {
  const container = document.getElementById(containerID);
  container.innerHTML = ""; // Clear existing content

  // Add header
  const header = document.createElement("div");
  header.className = "elements-segment-header";
  header.textContent = "Maintenance Items:";
  container.appendChild(header);

  // Add tasks
  taskArray.forEach((task) => {
    const taskContainer = createMaintenanceTaskContainer(task, prefix);
    container.appendChild(taskContainer);
  });
}

// Call the function to populate maintenance tasks for "maintenance-container"
populateMaintenanceTasks(repairTasks, "maintenance-container", "bridge-maintenance");

// Populate tasks for maintenance page containers (if necessary)
maintenanceTasks.forEach((component) => {
  populateMaintenanceTasks(component.tasks, component.containerID, "maintenance");
});

// Global variables that can be used by ALL the functions on this page.
let is64;
let inputs;
let states = ["On.png", "Off.png", "DownOn.png", "DownOff.png", "RollOn.png", "RollOff.png"];
let states64 = [
  "imageOn",
  "imageOff",
  "imageDownOn",
  "imageDownOff",
  "imageRollOn",
  "imageRollOff",
];

// Set the image, replacing the checkbox from standard HTML
export function setImage(input, state) {
  if (!inputs || !inputs[input]) return;
  if (inputs[input].getAttribute("images").charAt(state) === "1") {
    document.getElementById(inputs[input].getAttribute("id")).src = getSrc(input, state);
  }
}

// () to determine whether or not the source is in base64 or not
export function getSrc(input, state) {
  let src;
  if (is64) {
    src = inputs[input].getAttribute(states64[state]);
  } else {
    src = inputs[input].getAttribute("imageName") + states[state];
  }
  return src;
}

// Main () to replace all checkmarks to the new image and what to replace them to when clicked
export function replaceChecks(isBase64) {
  is64 = isBase64; // Get all the input fields on the page
  inputs = document.querySelectorAll("form input.i");

  // Cycle through the input fields
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].hasAttribute("images"))
      if (
        inputs[i].getAttribute("class") != "idr-hidden" &&
        inputs[i].getAttribute("data-imageAdded") !== "true" &&
        (inputs[i].getAttribute("type") == "checkbox" || inputs[i].getAttribute("type") == "radio")
      ) {
        // Check if the input is a checkbox
        // Create a new image
        let img = document.createElement("img");

        // Check if the checkbox is checked
        if (inputs[i].checked) {
          if (inputs[i].getAttribute("images").charAt(0) == "1") img.src = getSrc(i, 0);
        } else {
          if (inputs[i].getAttribute("images").charAt(1) == "1") img.src = getSrc(i, 1);
        }

        // Set image ID
        img.id = inputs[i].getAttribute("id");

        // Set action associations
        img.onclick = new Function("checkClick(" + i + ")");

        // Place image in front of the checkbox
        inputs[i].parentNode.insertBefore(img, inputs[i]);
        inputs[i].setAttribute("data-imageAdded", "true");

        // Hide the checkbox
        inputs[i].style.display = "none";
      }
  }
}

// Change the checkbox status and set the replacement image
export function checkClick(i) {
  if (inputs[i].checked) {
    inputs[i].checked = "";
    setImage(i, 1);
  } else {
    inputs[i].checked = "checked";
    setImage(i, 0);
    if (inputs[i].getAttribute("name") != null) {
      for (let index = 0; index < inputs.length; index++) {
        if (index != i && inputs[index].getAttribute("name") == inputs[i].getAttribute("name")) {
          inputs[index].checked = "";
          setImage(index, 1);
        }
      }
    }
  }
}

// Function to clear all checkboxes and all forms
export function clear_All() {
  // For all forms, check and see if they need to be cleared or not
  for (let i = 1; i < 250; i++) {
    let j = i.toString();
    let el1 = document.getElementById("form" + j + "_1");
    if (el1 !== null && el1.checked !== true) el1.value = "";
    let el2 = document.getElementById("form" + j + "_2");
    if (el2 !== null && el2.checked !== true) el2.value = "";
    let el3 = document.getElementById("form" + j + "_3");
    if (el3 !== null && el3.checked !== true) el3.value = "";
  }
  // For all checkboxes on the first page, clear them for the next character
  for (let i = 1; i < 24; i++) {
    let j = i.toString();
    remove_click(j);
  }
  // Uncheck persuasion checkbox
  click_off(0);
}

// Function to uncheck a checkbox
export function click_off(i) {
  inputs[i].checked = undefined;
  setImage(i, 1);
}

// Function to check a checkbox
export function click_on(i) {
  inputs[i].checked = "checked";
  setImage(i, 0);
}

// Function to make a skill proficient and checked (moved here from generators)
export function add_click(j) {
  let i = j.toString();
  document.getElementById("form" + i + "_1").checked = "checked";
  click_on(i - 1);
}

// Function to remove skill proficiency and checked status (moved here from generators)
export function remove_click(j) {
  document.getElementById("form" + j + "_1").checked = undefined;
  click_off(j);
}

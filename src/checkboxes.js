// Global variables that can be used by ALL the functions on this page.
let is64;
let inputs;
let states = ['On.png', 'Off.png', 'DownOn.png', 'DownOff.png', 'RollOn.png', 'RollOff.png'];
let states64 = ['imageOn', 'imageOff', 'imageDownOn', 'imageDownOff', 'imageRollOn', 'imageRollOff'];

// Set the image, replacing the checkbox from standard HTML
function setImage(input, state) {
  if (inputs[input].getAttribute('images').charAt(state) === '1') {
    document.getElementById(inputs[input].getAttribute('id')).src = getSrc(input, state);
  }
}

// () to determine whether or not the source is in base64 or not
function getSrc(input, state) {
  let src;
  if (is64) {
    src = inputs[input].getAttribute(states64[state]);
  } else {
    src = inputs[input].getAttribute('imageName') + states[state];
  }
  return src;
}

// Main () to replace all checkmarks to the new image and what to replace them to when clicked
function replaceChecks(isBase64) {

  is64 = isBase64; // Get all the input fields on the page
  inputs = document.querySelectorAll('form input.i');

  // Cycle through the input fields
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].hasAttribute('images'))

      // Check if the input is a checkbox
      if (inputs[i].getAttribute('class') != 'idr-hidden' && inputs[i].getAttribute('data-imageAdded') !== 'true' && (
          inputs[i].getAttribute('type') == 'checkbox' || inputs[i].getAttribute('type') == 'radio')) {

        // Create a new image
        let img = document.createElement('img');

        // Check if the checkbox is checked
        if (inputs[i].checked) {
          if (inputs[i].getAttribute('images').charAt(0) == '1')
            img.src = getSrc(i, 0);
        } else {
          if (inputs[i].getAttribute('images').charAt(1) == '1')
            img.src = getSrc(i, 1);
        }

        // Set image ID
        img.id = inputs[i].getAttribute('id');

        // Set action associations
        img.onclick = new Function('checkClick(' + i + ')');

        // Place image in front of the checkbox
        inputs[i].parentNode.insertBefore(img, inputs[i]);
        inputs[i].setAttribute('data-imageAdded', 'true');

        // Hide the checkbox
        inputs[i].style.display = 'none';
      }
  }
}

// Change the checkbox status and set the replacement image
function checkClick(i) {
  if (inputs[i].checked) {
    inputs[i].checked = '';
    setImage(i, 1);
  } else {
    inputs[i].checked = 'checked';
    setImage(i, 0);
    if (inputs[i].getAttribute('name') != null) {
      for (let index = 0; index < inputs.length; index++) {
        if (index != i && inputs[index].getAttribute('name') == inputs[i].getAttribute('name')) {
          inputs[index].checked = '';
          setImage(index, 1);
        }
      }
    }
  }
}

// Calling function to replace all checkmarks on the page
replaceChecks(false);

// Function to clear all checkboxes and all forms
function clear_All() {
  // For all forms, check and see if they need to be cleared or not
  for (let i = 1; i < 250; i++) {
    let j = i.toString();
    if (document.getElementById("form" + j + "_1") === null) {} else {
      if (document.getElementById("form" + j + "_1").checked === true) {} else {
        document.getElementById("form" + j + "_1").value = '';}
    }
    if (document.getElementById("form" + j + "_2") === null) {} else {
      if (document.getElementById("form" + j + "_2").checked === true) {} else {
        document.getElementById("form" + j + "_2").value = '';}
    }
    if (document.getElementById("form" + j + "_3") === null) {} else {
      if (document.getElementById("form" + j + "_3").checked === true) {} else {
        document.getElementById("form" + j + "_3").value = '';}
    }
  }
  // For all checkboxes on the first page, clear them for the next character
  for (let i = 1; i < 24; i++) {
    let j = i.toString();
    remove_click(j);
  }
  // Uncheck persuasion checkbox
  click_off(0);
  // Put all stats at 0
  strength = 0;
  dexterity = 0;
  constitution = 0;
  intelligence = 0;
  wisdom = 0;
  charisma = 0;
}

// Function to uncheck a checkbox
function click_off(i) {
  inputs[i].checked = undefined;
  setImage(i, 1);
}

// Function to check a checkbox
function click_on(i) {
  inputs[i].checked = 'checked';
  setImage(i, 0);
}
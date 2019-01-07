//global variables that can be used by ALL the function son this page.
var is64;
let inputs;
var states = ['On.png', 'Off.png', 'DownOn.png', 'DownOff.png', 'RollOn.png', 'RollOff.png'];
var states64 = ['imageOn', 'imageOff', 'imageDownOn', 'imageDownOff', 'imageRollOn', 'imageRollOff'];

// set the image, replacing the checkbox from HTML
function setImage(input, state) {
  if (inputs[input].getAttribute('images').charAt(state) === '1') {
    document.getElementById(inputs[input].getAttribute('id')).src = getSrc(input, state);
  }
}

function getSrc(input, state) {
  var src;
  if (is64) {
    src = inputs[input].getAttribute(states64[state]);
  } else {
    src = inputs[input].getAttribute('imageName') + states[state];
  }
  return src;
}

function replaceChecks(isBase64) {

  is64 = isBase64; //get all the input fields on the page
  inputs = document.querySelectorAll('form input.i');

  //cycle through the input fields
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].hasAttribute('images'))

      //check if the input is a checkbox
      if (inputs[i].getAttribute('class') != 'idr-hidden' && inputs[i].getAttribute('data-imageAdded') !== 'true' && (
          inputs[i].getAttribute('type') == 'checkbox' || inputs[i].getAttribute('type') == 'radio')) {

        //create a new image
        var img = document.createElement('img');

        //check if the checkbox is checked
        if (inputs[i].checked) {
          if (inputs[i].getAttribute('images').charAt(0) == '1')
            img.src = getSrc(i, 0);
        } else {
          if (inputs[i].getAttribute('images').charAt(1) == '1')
            img.src = getSrc(i, 1);
        }

        //set image ID
        img.id = inputs[i].getAttribute('id');

        //set action associations
        img.onclick = new Function('checkClick(' + i + ')');
        img.onmousedown = new Function('checkDown(' + i + ')');
        img.onmouseover = new Function('checkOver(' + i + ')');
        img.onmouseup = new Function('checkRelease(' + i + ')');
        img.onmouseout = new Function('checkRelease(' + i + ')');

        //place image in front of the checkbox
        inputs[i].parentNode.insertBefore(img, inputs[i]);
        inputs[i].setAttribute('data-imageAdded', 'true');

        //hide the checkbox
        inputs[i].style.display = 'none';
      }
  }
}

//change the checkbox status and the replacement image
function checkClick(i) {
  if (inputs[i].checked) {
    inputs[i].checked = '';
    setImage(i, 1);
  } else {
    inputs[i].checked = 'checked';

    setImage(i, 0);

    if (inputs[i].getAttribute('name') != null) {
      for (var index = 0; index < inputs.length; index++) {
        if (index != i && inputs[index].getAttribute('name') == inputs[i].getAttribute('name')) {
          inputs[index].checked = '';
          setImage(index, 1);
        }
      }
    }
  }
}

function checkRelease(i) {
  if (!inputs[i].hasAttribute('images')) return;
  if (inputs[i].checked) {
    setImage(i, 0);
  } else {
    setImage(i, 1);
  }
}

function checkDown(i) {
  if (!inputs[i].hasAttribute('images')) return;
  if (inputs[i].checked) {
    setImage(i, 2);
  } else {
    setImage(i, 3);
  }
}

function checkOver(i) {
  if (!inputs[i].hasAttribute('images')) return;
  if (inputs[i].checked) {
    setImage(i, 4);
  } else {
    setImage(i, 5);
  }
}

replaceChecks(false);

// Function to clear all checkboxes and all forms
function clear_All() {
  for (var i = 1; i < 250; i++) {
    var j = i.toString();
    if (document.getElementById("form" + j + "_1") === null) {

    } else {
      if (document.getElementById("form" + j + "_1").checked === true) {

      } else {
        document.getElementById("form" + j + "_1").value = '';

      }
    }

    if (document.getElementById("form" + j + "_2") === null) {

    } else {
      if (document.getElementById("form" + j + "_2").checked === true) {

      } else {
        document.getElementById("form" + j + "_2").value = '';
      }
    }

    if (document.getElementById("form" + j + "_3") === null) {

    } else {
      if (document.getElementById("form" + j + "_3").checked === true) {

      } else {
        document.getElementById("form" + j + "_3").value = '';
      }
    }
  }
  for (var i = 1; i < 24; i++) {
    var j = i.toString();
    remove_click(j);
  }
  click_off(0);
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
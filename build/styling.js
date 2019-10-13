// This function adds styling to each of the top buttons so they feel better when being clicked
var buttonStyling = function buttonStyling(list) {
  // While clicking, background changes to darker color
  addButtonClickEvent(list, "mousedown", "#c0c0c0");
  // When the click stops, background changes back to white
  addButtonClickEvent(list, "mouseup", "white");
  // When hover over, background changes to slightly darker
  addButtonClickEvent(list, "mouseover", "#e6e6e6");
  // When the user stops hovering, background changes back to white
  addButtonClickEvent(list, "mouseout", "white");
};

// This function is for actually adding the event listeners to each button
var addButtonClickEvent = function addButtonClickEvent(list, mouseEvent, color) {
  var _loop = function _loop(i) {
    list[i].addEventListener(mouseEvent, function () {
      list[i].style.background = color;
    });
  };

  for (var i = 0; i < list.length; i++) {
    _loop(i);
  }
};

// Function for showing the generator instead of FAQ if they generate while looking at FAQ
function show_func() {
  var lastPage = document.getElementById("lastPage");
  var dndPage = document.getElementById("dnd");
  if (lastPage.style.display === "block" || null) {
    lastPage.style.display = "none";
    dndPage.style.display = "block";
  }
  if (document.getElementById("top_button").innerHTML === "Show Character Page") {
    document.getElementById("top_button").innerHTML = "Show Information Page";
  }
}

// Making nodelist of buttons to be styled
var UI_topButtons = document.querySelectorAll('.top_buttons');

// Calling function to style the buttons in the node list
buttonStyling(UI_topButtons);
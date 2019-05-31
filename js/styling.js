// This function adds styling to each of the top buttons so they feel better when being clicked
const buttonStyling = list => {
    // While clicking, background changes to darker color
    addButtonClickEvent(list, "mousedown", "#c0c0c0");
    // When the click stops, background changes back to white
    addButtonClickEvent(list, "mouseup", "white");
    // When hover over, background changes to slightly darker
    addButtonClickEvent(list, "mouseover", "#e6e6e6");
    // When the user stops hovering, background changes back to white
    addButtonClickEvent(list, "mouseout", "white");
}

// This function is for actually adding the event listeners to each button
const addButtonClickEvent = (list, mouseEvent, color) => {
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener(mouseEvent, () => {
      list[i].style.background = color;
    })
  }
}

// Function that shows/hides whichever section isn't active (either the character page or the information page)
function show_or_hide_pages() {
  lastPage = document.getElementById("lastPage");
  dndPage = document.getElementById("dnd");
  if (lastPage.style.display === "none") {
    lastPage.style.display = "block";
    dndPage.style.display = "none";
  } else if (lastPage.style.display === "block") {
    lastPage.style.display = "none";
    dndPage.style.display = "block";
  } else {
    lastPage.style.display = "block";
    dndPage.style.display = "none";
  }
  if (document.getElementById("top_button").innerHTML === "Show Information Page") {
    document.getElementById("top_button").innerHTML = "Show Character Page";
  } else {
    document.getElementById("top_button").innerHTML = "Show Information Page";
  }
}

// Making nodelist of buttons to be styled
const UI_topButtons = document.querySelectorAll('.top_buttons');

// Calling function to style the buttons in the node list
buttonStyling(UI_topButtons);

// Calling function to hide last page on load
show_or_hide_pages();
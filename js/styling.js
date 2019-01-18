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

// Making nodelist of buttons to be styled
const UI_topButtons = document.querySelectorAll('.top_buttons');

// Calling function to style the buttons in the node list
buttonStyling(UI_topButtons);
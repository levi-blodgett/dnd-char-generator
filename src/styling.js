// This function adds styling to each of the top buttons so they feel better when being clicked
export const buttonStyling = (list) => {
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
export const addButtonClickEvent = (list, mouseEvent, color) => {
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener(mouseEvent, () => {
      list[i].style.background = color;
    });
  }
};

// Function for showing the generator instead of FAQ if they generate while looking at FAQ
export function show_func() {
  let lastPage = document.getElementById("lastPage");
  let dndPage = document.getElementById("dnd");
  if (lastPage.style.display === "block" || null) {
    lastPage.style.display = "none";
    dndPage.style.display = "block";
  }
  if (document.getElementById("top_button").innerHTML === "Show Character Page") {
    document.getElementById("top_button").innerHTML = "Show Information Page";
  }
}

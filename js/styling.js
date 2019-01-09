const UI_topButtons = document.querySelectorAll('.top_buttons');

// This function adds styling to each of the top buttons so they feel better when being clicked
function buttonStyling(list){
  for (let i = 0; i < list.length; i++) {
    // While clicking, background changes to darker color
    list[i].addEventListener("mousedown", function(){
      list[i].style.background = "#c0c0c0";
    })
    // When the click stops, background changes back to white
    list[i].addEventListener("mouseup", function(){
      list[i].style.background = "white";
    })
    // When hover over, background changes to slightly darker
    list[i].addEventListener("mouseover", function(){
      list[i].style.background = "#e6e6e6";
    })
    // When the user stops hovering, background changes back to white
    list[i].addEventListener("mouseout", function(){
      list[i].style.background = "white";
    })
  }
}

buttonStyling(UI_topButtons);
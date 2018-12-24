const UI_topButtons = document.querySelectorAll('.top_buttons');

function buttonStyling(list){
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("mousedown", function(){
      list[i].style.background = "#c0c0c0";
    })
    list[i].addEventListener("mouseup", function(){
      list[i].style.background = "white";
    })
    list[i].addEventListener("mouseover", function(){
      list[i].style.background = "#e6e6e6";
    })
    list[i].addEventListener("mouseout", function(){
      list[i].style.background = "white";
    })
  }
}

buttonStyling(UI_topButtons);
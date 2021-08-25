// Format and style the initial dropdowns
function format_initial_dropdowns(list, listItems) {
  let checkList = document.getElementById(list);
  let items = document.getElementById(listItems);
  checkList.getElementsByClassName('anchor')[0].onclick = () => {
    if (items.classList.contains('visible')) {
      items.classList.remove('visible');
      items.style.display = "none";
    }
    else {
      items.classList.add('visible');
      items.style.display = "block";
    }
  }
}

// Format and style the initial dropdowns inside of the race dropdown
function format_secondary_dropdowns(list, listItems, checkbox){
  let checkList = document.getElementById(list);
  let items = document.getElementById(listItems);
  let raceCheckbox = document.getElementById(checkbox);
  let listOfSubracesInDropdown = document.querySelectorAll(`ul#${listItems} input.race_class`);
  checkList.getElementsByClassName('chain')[0].addEventListener('click', function() {
      if (items.classList.contains('visible')){
          items.classList.remove('visible');
          items.style.display = "none";
          raceCheckbox.checked = false;
          for(let i = 0; i < listOfSubracesInDropdown.length; i++){
            listOfSubracesInDropdown[i].checked = false;
          }
      } else{
          items.classList.add('visible');
          items.style.display = "block";
          raceCheckbox.checked = true;
          for(let i = 0; i < listOfSubracesInDropdown.length; i++){
            listOfSubracesInDropdown[i].checked = true;
          }
      }
  }, true);
  items.addEventListener('blur', function(){
    items.classList.remove('visible');
  });
}

// Hide any dropdowns passed in this ()
function hide_dropdowns(dropdownValue){
  dropdownValue.classList.remove('visible');
  dropdownValue.style.display = "none";
}

// This () decides whether or not to hide any dropdowns passed through
function on_click_decider(_id, _class){
  let isCheckboxChecked = document.getElementById(_id).checked;
  let input_class = _class;
  let ID = _id;
  let lengthOfArray;
  let arrayItself;
  let arrayOfCheckedCheckboxes;
  if (isCheckboxChecked){
    lengthOfArray = document.querySelectorAll(`input.${input_class}`).length;
    arrayItself = document.querySelectorAll(`input.${input_class}`);
    for(let i = 0; i < lengthOfArray; i++){
      arrayItself[i].checked = false;
    }
    if (input_class === 'race_class'){
      let lengthOfArray_2 = document.querySelectorAll(`input.${input_class}_2`).length;
      let arrayItself_2 = document.querySelectorAll(`input.${input_class}_2`);
      let dropdownIDs = ['dragonborn_dropdown', 'dwarf_dropdown', 'elf_dropdown', 'gnome_dropdown', 'halfling_dropdown', 'human_dropdown']
      let dropdown;
      for (let i = 0; i < format_initial_dropdowns.length; i++) {
        dropdown = document.getElementById(dropdownIDs[i]);
        hide_dropdowns(dropdown);
      }
      for(let i = 0; i < lengthOfArray_2; i++){
        arrayItself_2[i].checked = false;
      }
    }
  } else if (isCheckboxChecked === false){ 
    lengthOfArray = document.querySelectorAll(`input.${input_class}`).length;
    arrayItself = document.querySelectorAll(`input.${input_class}`);
    arrayOfCheckedCheckboxes= [];
    for(let i = 0; i < lengthOfArray; i++){
      if (arrayItself[i].checked === true) {
        arrayOfCheckedCheckboxes.push(arrayItself[i]);
      }
    }
    if (arrayOfCheckedCheckboxes.length === 0){
      document.getElementById(ID).checked = true;
    }
  }
}

// () created for an event listener click, to decide whether or not to hide the secondary dropdown parent element that is being clicked and click random option if no subrace is clicked
function on_subrace_dropdown_option_click(e){
  let targets_ul = document.getElementById(e.target.parentElement.parentElement.id);
  let targets_list = targets_ul.children;
  let targets_list_array = Array.from(targets_list);
  let unchecked_boxes = 0;
  for (let i = 0; i < targets_list.length; i++) {
    let subclass = targets_list[i].childNodes[0].nextSibling.childNodes[0];
    if (subclass === e.target.childNodes[0]) {
      unchecked_boxes++;
    } else {
      if (subclass.checked === false) {
        unchecked_boxes++;
      }
    }
    if (targets_list_array.length === unchecked_boxes) {
      e.target.parentElement.parentElement.style.display = 'none';
      e.target.parentElement.parentElement.classList.remove('visible');
      e.target.parentElement.parentElement.previousElementSibling.childNodes[0].nextSibling.childNodes[0].checked = false;
      //e.target.parentElement.parentElement.previousElementSibling.childNodes[0].childNodes[0].checked = false;
      e.target.childNodes[0].checked = false;
      on_dropdown_option_click('race_random', 'race_class_2');
    }
  }
}

// () created for adding an event listener based on what is passed through
const add_events_for_dropdowns = (dropdown_option_checker, _id, _class, mouseAction, _function) => {
  let all_dropdowns = document.querySelectorAll(dropdown_option_checker);
  for(let i = 0; i < all_dropdowns.length; i++){
    all_dropdowns[i].addEventListener(mouseAction, (e) => {
      if (_function === on_subrace_dropdown_option_click) {
        _function(e);
      } else {
        _function(_id, _class);
      }
    });
  }
}

// Event listener function to check if the random checkmark is checked
function on_dropdown_option_click(_id, _class){
  let ID = _id;
  let input_class = _class;
  let isCheckboxChecked_1 = document.getElementById(ID).checked;
  if (document.getElementById(ID).checked){
    document.getElementById(ID).checked = false;
  } else if (isCheckboxChecked_1 === false){ 
    let lengthOfArray = document.querySelectorAll(`input.${input_class}`).length;
    let arrayItself = document.querySelectorAll(`input.${input_class}`);
    let arrayOfCheckedCheckboxes= [];
    for(let i = 0; i < lengthOfArray; i++){
      if (arrayItself[i].checked === true) {
        arrayOfCheckedCheckboxes.push(arrayItself[i]);
      }
    }
    if (arrayOfCheckedCheckboxes.length === 0){
      document.getElementById(ID).checked = true;
    }
  }
}

// Section that adds click event listeners to the random buttons to see if they'll hide and uncheck all other buttons
document.getElementById("race_random").addEventListener('click', function() {
  on_click_decider('race_random', 'race_class');
});
document.getElementById("background_random").addEventListener('click', function(){
  on_click_decider('background_random', 'background_class');
});
document.getElementById("class_random").addEventListener('click', function(){
  on_click_decider('class_random', 'class_class');
});
document.getElementById("alignment_random").addEventListener('click', function(){
  on_click_decider('alignment_random', 'alignment_class');
});

// Section to initially format all dropdowns
format_initial_dropdowns('race_list', 'race_dropdown');
format_initial_dropdowns('background_list', 'background_dropdown');
format_initial_dropdowns('class_list', 'class_dropdown', 'class_class');
format_initial_dropdowns('alignment_list', 'alignment_dropdown');

// Section to format the secondary dropdowns
format_secondary_dropdowns('dragonborn_list', 'dragonborn_dropdown', 'dragonborn_checkbox');
format_secondary_dropdowns('dwarf_list', 'dwarf_dropdown', 'dwarf_checkbox');
format_secondary_dropdowns('elf_list', 'elf_dropdown', 'elf_checkbox');
format_secondary_dropdowns('gnome_list', 'gnome_dropdown', 'gnome_checkbox');
format_secondary_dropdowns('halfling_list', 'halfling_dropdown', 'halfling_checkbox');
format_secondary_dropdowns('human_list', 'human_dropdown', 'human_checkbox');

// Section that adds all the clicking events for all dropdowns
add_events_for_dropdowns('.alignment_dropdown_option_checker', 'alignment_random', 'alignment_class', 'click', on_dropdown_option_click);
add_events_for_dropdowns('.class_dropdown_option_checker', 'class_random', 'class_class', 'click', on_dropdown_option_click);
add_events_for_dropdowns('.background_dropdown_option_checker', 'background_random', 'background_class', 'click', on_dropdown_option_click);
add_events_for_dropdowns('.race_dropdown_option_checker', 'race_random', 'race_class', 'click', on_dropdown_option_click);
add_events_for_dropdowns('.subrace_dropdown_option_checker', 'race_random', 'race_class', 'mousedown', on_subrace_dropdown_option_click);

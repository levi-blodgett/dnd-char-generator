// Format and style the initial dropdowns
function formatInitialDropdowns(list, listItems) {
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
function formatSecondaryDropdowns(list, listItems, checkbox){
  let checkList = document.getElementById(list);
  let items = document.getElementById(listItems);
  let checkerino = document.getElementById(checkbox);
  let the_checker = document.querySelectorAll(`ul#${listItems} input.race_class`);
  checkList.getElementsByClassName('chain')[0].addEventListener('click', function() {
      if (items.classList.contains('visible')){
          items.classList.remove('visible');
          items.style.display = "none";
          checkerino.checked = false;
          for(i = 0; i < the_checker.length; i++){
            the_checker[i].checked = false;
          }
      } else{
          items.classList.add('visible');
          items.style.display = "block";
          checkerino.checked = true;
          for(i = 0; i < the_checker.length; i++){
            the_checker[i].checked = true;
          }
      }
  }, true);
  items.addEventListener('blur', function(){
    items.classList.remove('visible');
  });
}

// Hide any dropdowns passed in this ()
function hideDropdowns(dropdownValue){
  dropdownValue.classList.remove('visible');
  dropdownValue.style.display = "none";
}

// This () decides whether or not to hide any dropdowns passed through
function onClickDecider(_id, _class){
  let isCheckboxChecked = document.getElementById(_id).checked;
  let input_class = _class;
  let ID = _id;
  let lengthOfArray;
  let arrayItself;
  let arrayOfCheckedCheckboxes;
  if (isCheckboxChecked){
    lengthOfArray = document.querySelectorAll(`input.${input_class}`).length;
    arrayItself = document.querySelectorAll(`input.${input_class}`);
    for(i=0; i < lengthOfArray; i++){
      arrayItself[i].checked = false;
    }
    if (input_class === 'race_class'){
      let lengthOfArray_2 = document.querySelectorAll(`input.${input_class}_2`).length;
      let arrayItself_2 = document.querySelectorAll(`input.${input_class}_2`);
      let dropdownIDs = ['dragonborn_dropdown', 'dwarf_dropdown', 'elf_dropdown', 'gnome_dropdown', 'halfling_dropdown', 'human_dropdown']
      let dropdown;
      for (i = 0; i < formatInitialDropdowns.length; i++) {
        dropdown = document.getElementById(dropdownIDs[i]);
        hideDropdowns(dropdown);
      }
      for(i=0; i < lengthOfArray_2; i++){
        arrayItself_2[i].checked = false;
      }
    }
  } else if (isCheckboxChecked === false){ 
    lengthOfArray = document.querySelectorAll(`input.${input_class}`).length;
    arrayItself = document.querySelectorAll(`input.${input_class}`);
    arrayOfCheckedCheckboxes= [];
    for(i=0; i < lengthOfArray; i++){
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
function onSubraceDropdownOptionClick(e){
  let targets_ul = document.getElementById(e.target.parentElement.parentElement.id);
  let targets_list = targets_ul.children;
  let targets_list_array = Array.from(targets_list);
  for (i = 0; i < targets_list.length; i++) {
    let test = targets_list[i].childNodes[0].childNodes[0];
    if (test.checked === false) {
      targets_list_array.splice(i, i+1);
      if (targets_list_array.length === 1) {
        if (test = e.target) {
          e.target.parentElement.parentElement.style.display = 'none';
          e.target.parentElement.parentElement.classList.remove('visible');
          e.target.parentElement.parentElement.previousElementSibling.childNodes[0].childNodes[0].checked = false;
          e.target.childNodes[0].checked = false;
          onDropdownOptionClick('race_random', 'race_class_2');
        }
      }
    }
  }
}

// () created for adding an event listener based on what is passed through
const addEventsForDropdowns = (dropdown_option_checker, _id, _class, mouseAction, _function) => {
  let all_dropdowns = document.querySelectorAll(dropdown_option_checker);
  for(i=0; i < all_dropdowns.length; i++){
    all_dropdowns[i].addEventListener(mouseAction, (e) => {
      if (_function === onSubraceDropdownOptionClick) {
        _function(e);
      } else {
        _function(_id, _class);
      }
    });
  }
}

// Event listener function to check if the random checkmark is checked
function onDropdownOptionClick(_id, _class){
  let ID = _id;
  let input_class = _class;
  let isCheckboxChecked_1 = document.getElementById(ID).checked;
  if (document.getElementById(ID).checked){
    document.getElementById(ID).checked = false;
  } else if (isCheckboxChecked_1 === false){ 
    lengthOfArray = document.querySelectorAll(`input.${input_class}`).length;
    arrayItself = document.querySelectorAll(`input.${input_class}`);
    arrayOfCheckedCheckboxes= [];
    for(i=0; i < lengthOfArray; i++){
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
  onClickDecider('race_random', 'race_class');
});
document.getElementById("background_random").addEventListener('click', function(){
  onClickDecider('background_random', 'background_class');
});
document.getElementById("class_random").addEventListener('click', function(){
  onClickDecider('class_random', 'class_class');
});
document.getElementById("alignment_random").addEventListener('click', function(){
  onClickDecider('alignment_random', 'alignment_class');
});

// Section to initially format all dropdowns
formatInitialDropdowns('race_list', 'race_dropdown');
formatInitialDropdowns('background_list', 'background_dropdown');
formatInitialDropdowns('class_list', 'class_dropdown', 'class_class');
formatInitialDropdowns('alignment_list', 'alignment_dropdown');

// Section to format the secondary dropdowns
formatSecondaryDropdowns('dragonborn_list', 'dragonborn_dropdown', 'dragonborn_checkbox');
formatSecondaryDropdowns('dwarf_list', 'dwarf_dropdown', 'dwarf_checkbox');
formatSecondaryDropdowns('elf_list', 'elf_dropdown', 'elf_checkbox');
formatSecondaryDropdowns('gnome_list', 'gnome_dropdown', 'gnome_checkbox');
formatSecondaryDropdowns('halfling_list', 'halfling_dropdown', 'halfling_checkbox');
formatSecondaryDropdowns('human_list', 'human_dropdown', 'human_checkbox');

// Section that adds all the clicking events for all dropdowns
addEventsForDropdowns('.alignment_dropdown_option_checker', 'alignment_random', 'alignment_class', 'click', onDropdownOptionClick);
addEventsForDropdowns('.class_dropdown_option_checker', 'class_random', 'class_class', 'click', onDropdownOptionClick);
addEventsForDropdowns('.background_dropdown_option_checker', 'background_random', 'background_class', 'click', onDropdownOptionClick);
addEventsForDropdowns('.race_dropdown_option_checker', 'race_random', 'race_class', 'click', onDropdownOptionClick);
addEventsForDropdowns('.subrace_dropdown_option_checker', 'race_random', 'race_class', 'mousedown', onSubraceDropdownOptionClick);
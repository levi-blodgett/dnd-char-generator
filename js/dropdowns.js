// Section to format the dropdowns
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
let checker = 0;
let raceRandom = document.getElementById('race_random').checked;
if (raceRandom === '' || raceRandom === undefined){
  for(i = 0; i < raceClass.length; i++){
    if (raceClass[i].checked === 'checked'){
      raceRandom = '';
      checker = checker + 1;
    }
  }
  if (checker > 0){
      raceRandom = '';
    } else {
      raceRandom = 'checked';
    }
}

function hideDropdowns(dropdownValue){
  dropdownValue.classList.remove('visible');
  dropdownValue.style.display = "none";
}

function onClickDecider(_id, _class){
  let checkbox_checked = document.getElementById(_id).checked;

  let classer = _class;
  let ID = _id;

  let lengthOfArray;
  let arraything;
  
  let checkerarray;
  if (checkbox_checked){
    lengthOfArray = document.querySelectorAll(`input.${classer}`).length;
    arraything = document.querySelectorAll(`input.${classer}`);
    for(i=0; i < lengthOfArray; i++){
      arraything[i].checked = false;
    }
    if (classer === 'race_class'){
      let lengthOfArray2 = document.querySelectorAll(`input.${classer}_2`).length;
      let arraything2 = document.querySelectorAll(`input.${classer}_2`);
      let dropdown1 = document.getElementById('dragonborn_dropdown');
      let dropdown2 = document.getElementById('dwarf_dropdown');
      let dropdown3 = document.getElementById('elf_dropdown');
      let dropdown4 = document.getElementById('gnome_dropdown');
      let dropdown5 = document.getElementById('halfling_dropdown');
      let dropdown6 = document.getElementById('human_dropdown');
      let checkerarray2= [];
      hideDropdowns(dropdown1);
      hideDropdowns(dropdown2);
      hideDropdowns(dropdown3);
      hideDropdowns(dropdown4);
      hideDropdowns(dropdown5);
      hideDropdowns(dropdown6);
      for(i=0; i < lengthOfArray2; i++){
        arraything2[i].checked = false;
      }
    }
  } else if (checkbox_checked === false){ 
    lengthOfArray = document.querySelectorAll(`input.${classer}`).length;
    arraything = document.querySelectorAll(`input.${classer}`);
    checkerarray= [];
    for(i=0; i < lengthOfArray; i++){
      if (arraything[i].checked === true) {
        checkerarray.push(arraything[i]);
      }
    }
    if (checkerarray.length === 0){
      document.getElementById(ID).checked = true;
    }
  }
}

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

// Event listener function to check if the random race checkmark is checked
function onSubraceDropdownOptionClick_mousedown(e){
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
          checkRandom();
        }
      }
    }
  }
}

let all_subrace_dropdowns_down = document.querySelectorAll('.subrace_dropdown_option_checker');
for(i=0; i < all_subrace_dropdowns_down.length; i++){
  all_subrace_dropdowns_down[i].addEventListener('mousedown', onSubraceDropdownOptionClick_mousedown, false);
}

const dropdownArrayGetter = (dropdown_option_checker, _id, _class) => {
  let all_dropdowns = document.querySelectorAll(dropdown_option_checker);
  for(i=0; i < all_dropdowns.length; i++){
    all_dropdowns[i].addEventListener('click', () => {onDropdownOptionClick(_id, _class)});
  }
}

function checkRandom() {
  let checkbox_checked = document.getElementById('race_random').checked;
  let classer = 'race_class_2';
  let ID = 'race_random';
  let lengthOfArray;
  let arraything;
  let checkerarray;

  if (checkbox_checked === false){
    lengthOfArray = document.querySelectorAll(`input.${classer}`).length;
    arraything = document.querySelectorAll(`input.${classer}`);
    checkerarray= [];
    for(i=0; i < lengthOfArray; i++){
      if (arraything[i].checked === true) {
        checkerarray.push(arraything[i]);
      }
    }
    if (checkerarray.length === 0){
      document.getElementById(ID).checked = true;
    }
  }
}

// Event listener function to check if the random checkmark is checked
function onDropdownOptionClick(_id, _class){
  let checkbox_checked_1 = document.getElementById(_id).checked;
  let racer_2 = _class;
  let ID_1 = _id;
  if (document.getElementById(ID_1).checked){
    document.getElementById(ID_1).checked = false;
  } else if (checkbox_checked_1 === false){ 
    lengthOfArray = document.querySelectorAll(`input.${racer_2}`).length;
    arraything = document.querySelectorAll(`input.${racer_2}`);
    checkerarray= [];
    for(i=0; i < lengthOfArray; i++){
      if (arraything[i].checked === true) {
        checkerarray.push(arraything[i]);
      }
    }
    if (checkerarray.length === 0){
      document.getElementById(ID_1).checked = true;
    }
  }
}

formatInitialDropdowns('race_list', 'race_dropdown');
formatInitialDropdowns('background_list', 'background_dropdown');
formatInitialDropdowns('class_list', 'class_dropdown', 'class_class');
formatInitialDropdowns('alignment_list', 'alignment_dropdown');

let all_alignment_dropdowns = dropdownArrayGetter('.alignment_dropdown_option_checker', 'alignment_random', 'alignment_class');

let all_class_dropdowns = dropdownArrayGetter('.class_dropdown_option_checker', 'class_random', 'class_class');

let all_background_dropdowns = dropdownArrayGetter('.background_dropdown_option_checker', 'background_random', 'background_class');

let all_race_dropdowns = dropdownArrayGetter('.race_dropdown_option_checker', 'race_random', 'race_class');

formatSecondaryDropdowns('dragonborn_list', 'dragonborn_dropdown', 'dragonborn_checkbox');
formatSecondaryDropdowns('dwarf_list', 'dwarf_dropdown', 'dwarf_checkbox');
formatSecondaryDropdowns('elf_list', 'elf_dropdown', 'elf_checkbox');
formatSecondaryDropdowns('gnome_list', 'gnome_dropdown', 'gnome_checkbox');
formatSecondaryDropdowns('halfling_list', 'halfling_dropdown', 'halfling_checkbox');
formatSecondaryDropdowns('human_list', 'human_dropdown', 'human_checkbox');

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
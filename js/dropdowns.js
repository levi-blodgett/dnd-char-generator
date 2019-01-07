// Section to foramt the dropdowns
function formatInitialDropdowns(list, listItems, RandomClass){
  var checkList = document.getElementById(list);
  var items = document.getElementById(listItems);
  checkList.getElementsByClassName('anchor')[0].onclick = function (evt) {
      if (items.classList.contains('visible')){
          items.classList.remove('visible');
          items.style.display = "none";
      }
      
      else{
          items.classList.add('visible');
          items.style.display = "block";
      }
      
      
  }
}
let checker = 0;
let raceRandom = document.getElementById('race_random').checked;
let backgroundRandom = document.getElementById('background_random').checked;
let classRandom = document.getElementById('class_random').checked;
let alignmentRandom = document.getElementById('alignment_random').checked;
let raceClass = document.querySelectorAll('input.race_class');
let backgroundClass = document.querySelectorAll('input.background_class').checked;
let classClass = document.querySelectorAll('input.class_class').checked;
let alignmentClass = document.querySelectorAll('input.alignment_class').checked;
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
} else if (backgroundRandom === '') {

} else if (classRandom === '') {
  
} else if (alignmentRandom === '') {
  
}
formatInitialDropdowns('race_list', 'race_dropdown', 'race_class');
formatInitialDropdowns('background_list', 'background_dropdown', 'background_class');
formatInitialDropdowns('class_list', 'class_dropdown', 'class_class');
formatInitialDropdowns('alignment_list', 'alignment_dropdown', 'alignment_class');

function formatSecondaryDropdowns(list, listItems, checkbox){
  var checkList = document.getElementById(list);
  var items = document.getElementById(listItems);
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

////////////////////////////

// Event listener function to check if the random race checkmark is checked
function onRaceDropdownOptionClick(){
  let race_checked_1 = document.getElementById('race_random').checked;
  let racer_2 = 'race_class_2';
  let ID_1 = 'race_random';
  if (document.getElementById("race_random").checked){
    document.getElementById("race_random").checked = false;
  } else if (race_checked_1 === false){ 
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

// Event listener function to check if the random background checkmark is checked
function onBackgroundDropdownOptionClick(){
  let background_checked_1 = document.getElementById('background_random').checked;
  let backgrounder_1 = 'background_class';
  let ID_1 = 'background_random';
  if (document.getElementById("background_random").checked){
    document.getElementById("background_random").checked = false;
  } else if (background_checked_1 === false){ 
    lengthOfArray = document.querySelectorAll(`input.${backgrounder_1}`).length;
    arraything = document.querySelectorAll(`input.${backgrounder_1}`);
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

// Event listener function to check if the random class checkmark is checked
function onClassDropdownOptionClick(){
  let class_checked_1 = document.getElementById('class_random').checked;
  let classer_1 = 'class_class';
  let ID_1 = 'class_random';
  if (document.getElementById("class_random").checked){
    document.getElementById("class_random").checked = false;
  } else if (class_checked_1 === false){ 
    lengthOfArray = document.querySelectorAll(`input.${classer_1}`).length;
    arraything = document.querySelectorAll(`input.${classer_1}`);
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

// Event listener function to check if the random alignment checkmark is checked
function onAlignmentDropdownOptionClick(){
  let alignment_checked_1 = document.getElementById('alignment_random').checked;
  let alignmenter_1 = 'alignment_class';
  let ID_1 = 'alignment_random';
  if (document.getElementById("alignment_random").checked){
    document.getElementById("alignment_random").checked = false;
  } else if (alignment_checked_1 === false){ 
    lengthOfArray = document.querySelectorAll(`input.${alignmenter_1}`).length;
    arraything = document.querySelectorAll(`input.${alignmenter_1}`);
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

let all_race_dropdowns = document.querySelectorAll('.race_dropdown_option_checker');
for(i=0; i < all_race_dropdowns.length; i++){
  all_race_dropdowns[i].addEventListener('click', onRaceDropdownOptionClick, false);
}

let all_background_dropdowns = document.querySelectorAll('.background_dropdown_option_checker');
for(i=0; i < all_background_dropdowns.length; i++){
  all_background_dropdowns[i].addEventListener('click', onBackgroundDropdownOptionClick);
}

let all_class_dropdowns = document.querySelectorAll('.class_dropdown_option_checker');
for(i=0; i < all_class_dropdowns.length; i++){
  all_class_dropdowns[i].addEventListener('click', onClassDropdownOptionClick);
}

let all_alignment_dropdowns = document.querySelectorAll('.alignment_dropdown_option_checker');
for(i=0; i < all_alignment_dropdowns.length; i++){
  all_alignment_dropdowns[i].addEventListener('click', onAlignmentDropdownOptionClick);
}

formatSecondaryDropdowns('dragonborn_list', 'dragonborn_dropdown', 'dragonborn_checkbox');
formatSecondaryDropdowns('dwarf_list', 'dwarf_dropdown', 'dwarf_checkbox');
formatSecondaryDropdowns('elf_list', 'elf_dropdown', 'elf_checkbox');
formatSecondaryDropdowns('gnome_list', 'gnome_dropdown', 'gnome_checkbox');
formatSecondaryDropdowns('halfling_list', 'halfling_dropdown', 'halfling_checkbox');
formatSecondaryDropdowns('human_list', 'human_dropdown', 'human_checkbox');

function hideDropdowns(dropdownValue){
  dropdownValue.classList.remove('visible');
  dropdownValue.style.display = "none";
}
  
document.getElementById("race_random").addEventListener('click', function(){
  let race_checked = document.getElementById('race_random').checked;

  let classer = 'race_class';
  let ID = 'race_random';

  let lengthOfArray;
  let arraything;
  
  let checkerarray;
  if (race_checked){
    lengthOfArray = document.querySelectorAll(`input.${classer}`).length;
    arraything = document.querySelectorAll(`input.${classer}`);
    for(i=0; i < lengthOfArray; i++){
      arraything[i].checked = false;
    }
    if (classer === 'race_class'){
      let lengthOfArray2 = document.querySelectorAll(`input.${classer}_2`).length;
      let arraything2 = document.querySelectorAll(`input.${classer}_2`);
      let bonkers1 = document.getElementById('dragonborn_dropdown');
      let bonkers2 = document.getElementById('dwarf_dropdown');
      let bonkers3 = document.getElementById('elf_dropdown');
      let bonkers4 = document.getElementById('gnome_dropdown');
      let bonkers5 = document.getElementById('halfling_dropdown');
      let bonkers6 = document.getElementById('human_dropdown');
      let checkerarray2= [];
      hideDropdowns(bonkers1);
      hideDropdowns(bonkers2);
      hideDropdowns(bonkers3);
      hideDropdowns(bonkers4);
      hideDropdowns(bonkers5);
      hideDropdowns(bonkers6);
      for(i=0; i < lengthOfArray2; i++){
        arraything2[i].checked = false;
      }
    }
  } else if (race_checked === false){ 
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
});

document.getElementById("background_random").addEventListener('click', function(){
  let background_checked = document.getElementById('background_random').checked;

  let classer = 'background_class';
  let ID = 'background_random';

  let lengthOfArray;
  let arraything;
  
  let checkerarray;
  if (background_checked){
    lengthOfArray = document.querySelectorAll(`input.${classer}`).length;
    arraything = document.querySelectorAll(`input.${classer}`);
    for(i=0; i < lengthOfArray; i++){
      arraything[i].checked = false;
    }
    if (classer === 'race_class'){
      let lengthOfArray2 = document.querySelectorAll(`input.${classer}_2`).length;
      let arraything2 = document.querySelectorAll(`input.${classer}_2`);
      let bonkers1 = document.getElementById('dragonborn_dropdown');
      let bonkers2 = document.getElementById('dwarf_dropdown');
      let bonkers3 = document.getElementById('elf_dropdown');
      let bonkers4 = document.getElementById('gnome_dropdown');
      let bonkers5 = document.getElementById('halfling_dropdown');
      let bonkers6 = document.getElementById('human_dropdown');
      let checkerarray2= [];
      hideDropdowns(bonkers1);
      hideDropdowns(bonkers2);
      hideDropdowns(bonkers3);
      hideDropdowns(bonkers4);
      hideDropdowns(bonkers5);
      hideDropdowns(bonkers6);
      for(i=0; i < lengthOfArray2; i++){
        arraything2[i].checked = false;
      }
    }
  } else if (background_checked === false){ 
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
});

document.getElementById("class_random").addEventListener('click', function(){
  let class_checked = document.getElementById('class_random').checked;

  let classer = 'class_class';
  let ID = 'class_random';

  let lengthOfArray;
  let arraything;
  
  let checkerarray;
  if (class_checked){
    lengthOfArray = document.querySelectorAll(`input.${classer}`).length;
    arraything = document.querySelectorAll(`input.${classer}`);
    for(i=0; i < lengthOfArray; i++){
      arraything[i].checked = false;
    }
    if (classer === 'race_class'){
      let lengthOfArray2 = document.querySelectorAll(`input.${classer}_2`).length;
      let arraything2 = document.querySelectorAll(`input.${classer}_2`);
      let bonkers1 = document.getElementById('dragonborn_dropdown');
      let bonkers2 = document.getElementById('dwarf_dropdown');
      let bonkers3 = document.getElementById('elf_dropdown');
      let bonkers4 = document.getElementById('gnome_dropdown');
      let bonkers5 = document.getElementById('halfling_dropdown');
      let bonkers6 = document.getElementById('human_dropdown');
      let checkerarray2= [];
      hideDropdowns(bonkers1);
      hideDropdowns(bonkers2);
      hideDropdowns(bonkers3);
      hideDropdowns(bonkers4);
      hideDropdowns(bonkers5);
      hideDropdowns(bonkers6);
      for(i=0; i < lengthOfArray2; i++){
        arraything2[i].checked = false;
      }
    }
  } else if (class_checked === false){ 
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
});

document.getElementById("alignment_random").addEventListener('click', function(){

  let alignment_checked = document.getElementById('alignment_random').checked;

  let classer = 'alignment_class';
  let ID = 'alignment_random';

  let lengthOfArray;
  let arraything;
  
  let checkerarray;
  if (alignment_checked){
    lengthOfArray = document.querySelectorAll(`input.${classer}`).length;
    arraything = document.querySelectorAll(`input.${classer}`);
    for(i=0; i < lengthOfArray; i++){
      arraything[i].checked = false;
    }
    if (classer === 'race_class'){
      let lengthOfArray2 = document.querySelectorAll(`input.${classer}_2`).length;
      let arraything2 = document.querySelectorAll(`input.${classer}_2`);
      let bonkers1 = document.getElementById('dragonborn_dropdown');
      let bonkers2 = document.getElementById('dwarf_dropdown');
      let bonkers3 = document.getElementById('elf_dropdown');
      let bonkers4 = document.getElementById('gnome_dropdown');
      let bonkers5 = document.getElementById('halfling_dropdown');
      let bonkers6 = document.getElementById('human_dropdown');
      let checkerarray2= [];
      hideDropdowns(bonkers1);
      hideDropdowns(bonkers2);
      hideDropdowns(bonkers3);
      hideDropdowns(bonkers4);
      hideDropdowns(bonkers5);
      hideDropdowns(bonkers6);
      for(i=0; i < lengthOfArray2; i++){
        arraything2[i].checked = false;
      }
    }
  } else if (alignment_checked === false){ 
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
});
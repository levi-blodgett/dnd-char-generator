// Initialize for 100000 character error checking
let cleric_counter = 0;
let barbarian_counter = 0;
let paladin_counter = 0;
let rogue_counter = 0;
let ranger_counter = 0;
let bard_counter = 0;
let monk_counter = 0;
let wizard_counter = 0;
let sorcerer_counter = 0;
let warlock_counter = 0;
let fighter_counter = 0;
let druid_counter = 0;
let lawful_good_counter = 0;
let neutral_good_counter = 0;
let chaotic_good_counter = 0;
let lawful_neutral_counter = 0;
let true_neutral_counter = 0;
let chaotic_neutral_counter = 0;
let lawful_evil_counter = 0;
let neutral_evil_counter = 0;
let chaotic_evil_counter = 0;

// Function to count each class for the characters generated
function generate_100000_characters_counter(classlevelvalue, alignmentvalue) {
  if (classlevelvalue === "Cleric 1") {
    cleric_counter++;
  } else if (classlevelvalue === "Barbarian 1") {
    barbarian_counter++;
  } else if (classlevelvalue === "Paladin 1") {
    paladin_counter++;
  } else if (classlevelvalue === "Rogue 1") {
    rogue_counter++;
  } else if (classlevelvalue === "Ranger 1") {
    ranger_counter++;
  } else if (classlevelvalue === "Druid 1") {
    druid_counter++;
  } else if (classlevelvalue === "Wizard 1") {
    wizard_counter++;
  } else if (classlevelvalue === "Sorcerer 1") {
    sorcerer_counter++;
  } else if (classlevelvalue === "Warlock 1") {
    warlock_counter++;
  } else if (classlevelvalue === "Fighter 1") {
    fighter_counter++;
  } else if (classlevelvalue === "Monk 1") {
    monk_counter++;
  } else if (classlevelvalue === "Bard 1") {
    bard_counter++;
  }
  if (alignmentvalue === "Lawful Good"){
    lawful_good_counter++;
  } else if (alignmentvalue === "Neutral Good"){
    neutral_good_counter++;
  } else if (alignmentvalue === "Chaotic Good"){
    chaotic_good_counter++;
  } else if (alignmentvalue === "Lawful Neutral"){
    lawful_neutral_counter++;
  } else if (alignmentvalue === "True Neutral"){
    true_neutral_counter++;
  } else if (alignmentvalue === "Chaotic Neutral"){
    chaotic_neutral_counter++;
  } else if (alignmentvalue === "Lawful Evil"){
    lawful_evil_counter++;
  } else if (alignmentvalue === "Neutral Evil"){
    neutral_evil_counter++;
  } else if (alignmentvalue === "Chaotic Evil"){
    chaotic_evil_counter++;
  }
}

// Function to print for 100000_char_gen
function generate_100000_characters_printer(){
  console.log("Version ran through 100000 iterations: " + version_for_checking);
  console.log("Barbarian count: " + barbarian_counter);
  console.log("Rogue count: " + rogue_counter);
  console.log("Ranger count: " + ranger_counter);
  console.log("Cleric count: " + cleric_counter);
  console.log("Wizard count: " + wizard_counter);
  console.log("Sorcerer count: " + sorcerer_counter);
  console.log("Warlock count: " + warlock_counter);
  console.log("Bard count: " + bard_counter);
  console.log("Monk count: " + monk_counter);
  console.log("Fighter count: " + fighter_counter);
  console.log("Druid count: " + druid_counter);
  console.log("Paladin count: " + paladin_counter);
  console.log();
  console.log("Lawful Good count: " + lawful_good_counter);
  console.log("Neutral Good count: " + neutral_good_counter);
  console.log("Chaotic Good count: " + chaotic_good_counter);
  console.log("Lawful Neutral count: " + lawful_neutral_counter);
  console.log("True Neutral count: " + true_neutral_counter);
  console.log("Chaotic Neutral count: " + chaotic_neutral_counter);
  console.log("Lawful Evil count: " + lawful_evil_counter);
  console.log("Neutral Evil count: " + neutral_evil_counter);
  console.log("Chaotic Evil count: " + chaotic_evil_counter);
}

// Function to generate 100000 characters to make sure there are no errors and classes are thoroughly tested
function generate_100000_characters(version) {
  console.time('generate_100000_characters');
  for (j = 0; j < 100000; j++) {
    clear_All();
    version();
    generate_character(version);
    generate_100000_characters_counter(document.getElementById('form94_1').value, document.getElementById('form92_1').value);
  }
  generate_100000_characters_printer();
  console.timeEnd('generate_100000_characters');
}

const testing = document.getElementById('testing');

testing.innerHTML = `<button class="top_buttons" onclick="generate_100000_characters(roll_version)" id="top_buttoneroni">100000 CHARACTERS</button>`;
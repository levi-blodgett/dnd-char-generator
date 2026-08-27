// TO DO
// 1. Fix Cleric (flow of domains and equipment) and Rogue (expertise function) logic (~2227)
// 2. Test thoroughly

import { clear_All, click_on, click_off, add_click } from "../checkboxes.js";
import { get_random_number, stat_modifier_generator, shuffle } from "../shared/dice.js";
import { make_nameGenerator, select_class, select_race, select_background, select_alignment } from "./selection.js";
import { STANDARD_ARRAY, POINT_BUY_COMBOS } from "../shared/data/stat-arrays.js";
import {
  bardCantrips,
  clericCantrips,
  druidCantrips,
  sorcererCantrips,
  warlockCantrips,
  wizardCantrips,
  bardSpells,
  clericSpells,
  druidSpells,
  sorcererSpells,
  warlockSpells,
  wizardSpells,
  spellForms,
  cantripForms,
  bardCantripCount,
  clericCantripCount,
  druidCantripCount,
  sorcererCantripCount,
  warlockCantripCount,
  wizardCantripCount,
} from "../shared/data/spells.js";
import { ALL_TRAITS } from "../shared/data/personality-traits.js";
import { ALL_IDEALS } from "../shared/data/ideals.js";
import { ALL_BONDS } from "../shared/data/bonds.js";
import { ALL_FLAWS } from "../shared/data/flaws.js";
import { build_armor_table } from "../shared/data/armor.js";
import { build_weapon_arrays, SIMPLE_WEAPONS, MARTIAL_WEAPONS } from "../shared/data/weapons.js";
import { STANDARD_LANGUAGES, EXOTIC_LANGUAGES } from "../shared/data/languages.js";
import { statChecker, statChecker2, statChecker3, statChecker_no_id } from "./util/stat-checkers.js";
import { make_proficiency_adders } from "./util/proficiency-adders.js";
import { random_artisan_tool } from "./util/artisan-tools.js";
import { randomMusicalInstrument } from "./util/instruments.js";
import { make_skill_adder } from "./util/skill-adder.js";
import { make_language_helpers } from "./util/language-helpers.js";
import { dispatch_equipment } from "./equipment/index.js";
import { apply_race } from "./race/index.js";
import { apply_physical_traits } from "./physical-traits.js";
import { apply_background } from "./background/index.js";
import { apply_class_proficiencies, apply_weapon_proficiencies } from "./proficiencies.js";
import { apply_spells } from "./spells.js";
import { apply_saving_throws_and_hp } from "./saving-throws.js";
import { apply_armor_class } from "./armor-class.js";
import { write_character } from "./output.js";

let stats = [], strength = 0, dexterity = 0, constitution = 0, intelligence = 0, wisdom = 0, charisma = 0;
let racialLanguage1, racialLanguage2, randomStatArray = [];
let stat1, stat2, stat3, stat4, stat5, stat6;
let charName, nameGenerator = {};
const getRandomNumber = get_random_number;
const firstWeaponFirstSectionId = "form79_1", firstWeaponSecondSectionId = "form64_1", firstWeaponThirdSectionId = "form76_1";
const secondWeaponFirstSectionId = "form78_1", secondWeaponSecondSectionId = "form65_1", secondWeaponThirdSectionId = "form74_1";
const thirdWeaponFirstSectionId = "form77_1", thirdWeaponSecondSectionId = "form66_1", thirdWeaponThirdSectionId = "form75_1";
let versionForChecking = 0, size, hitDiceModifier, randomStandardLanguageNumber, randomExoticLanguageNumber;
let club, dagger, greatclub, handaxe, javelin, lighthammer, mace, quarterstaff, sickle, spear;
let lightcrossbow, dart, shortbow, sling;
let battleaxe, flail, glaive, greataxe, greatsword, halberd, lance, longsword, maul, morningstar;
let pike, rapier, scimitar, shortsword, trident, warpick, warhammer, whip;
let blowgun, handcrossbow, heavycrossbow, longbow, net;

export function standard_version() {
  const arr = STANDARD_ARRAY.slice();
  [stat1, stat2, stat3, stat4, stat5, stat6] = arr;
  stats = shuffle([stat1, stat2, stat3, stat4, stat5, stat6]);
  versionForChecking = 1;
  return stats;
}

export function roll_version() {
  function remove_smallest(arr) {
    arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1);
    return arr;
  }
  function get_random_stat() {
    randomStatArray = [];
    for (let i = 0; i < 4; i++) randomStatArray.push(getRandomNumber(6));
    remove_smallest(randomStatArray);
    return randomStatArray;
  }
  function get_sum(stat) {
    return stat.reduce((a, b) => a + b, 0);
  }
  stats = shuffle([
    get_sum(get_random_stat()), get_sum(get_random_stat()),
    get_sum(get_random_stat()), get_sum(get_random_stat()),
    get_sum(get_random_stat()), get_sum(get_random_stat()),
  ]);
  versionForChecking = 2;
  return stats;
}

export function pointbuy_version() {
  const arr = POINT_BUY_COMBOS[Math.floor(Math.random() * 65)];
  [stat1, stat2, stat3, stat4, stat5, stat6] = arr;
  stats = shuffle([stat1, stat2, stat3, stat4, stat5, stat6]);
  versionForChecking = 3;
  return stats;
}

// Function used to generate a new character
export function generate_character() {
  nameGenerator = make_nameGenerator();

  let language, firstLanguage, extralanguage, knowledgeLanguage;
  let race, finalFirstName, finalLastName, raceChecker, raceSplitter1, raceSplitter3;
  let ancestry, ancestryHuman, statTotal;
  let i, random, random2, random3, random4, random5, random6;
  let className, classAndLevel, randomClassVariable;
  let name, newLangs, newWeaponProfs, newArmorProfs, newToolProfs;
  let newBackground1 = "", finalLanguages, finalweaponProficiencies, finalarmorProficiencies, finaltoolProficiencies;
  let strengthModifier, dexterityModifier, constitutionModifier, intelligenceModifier, wisdomModifier, charismaModifier;
  let alignmentChecker = false, hp = 0, gold = 0, armorClass = 0;
  let listOfExoticLanguages = [], listOfStandardLanguages = [];
  let martialWeapons = [], simpleWeapons = [], equipment = [], spellcastingSection = [];
  let alliesAndOrganizations = [], features = [], additionalFeatures = [], personalityTraits = [];
  let alignment = [], arrayOfIdeals = [], arrayOfBonds = [], arrayOfFlaws = [];
  let proficienciesAndLanguages = [], simpleWeaponsArray = [], martialWeaponsArray = [];
  let armor;
  let traits = ALL_TRAITS.slice(), ideals = ALL_IDEALS.slice(), bonds = ALL_BONDS.slice(), flaws = ALL_FLAWS.slice();
  let profsAndLangs = { languages: [], armorProficiencies: [], weaponProficiencies: [], toolProficiencies: [] };


  randomClassVariable = getRandomNumber(12);

  // Function to decide if dexterity is more than strength and return the higher value
  function biggerWeaponStatDecider(dex, str) {
    if (dex > str) {
      return dex;
    } else {
      return str;
    }
  }

  // Function to assign stats randomly
  function assign_stats(stats, classtype) {
    let statsValuesArray = stats;
    statsValuesArray = shuffle(statsValuesArray);
    ///
    strength += statsValuesArray[0];
    dexterity += statsValuesArray[1];
    constitution += statsValuesArray[2];
    intelligence += statsValuesArray[3];
    wisdom += statsValuesArray[4];
    charisma += statsValuesArray[5];
    statTotal = strength + dexterity + intelligence + constitution + wisdom + charisma;
    ///
    // Change the value of the temp hit points section to tell the user what the total stats are, and each individual stat in order.
    document.getElementById("form98_1").value =
      classtype +
      "(" +
      statTotal +
      "): " +
      strength +
      ", " +
      dexterity +
      ", " +
      statsValuesArray[2] +
      ", " +
      constitution +
      ", " +
      intelligence +
      ", " +
      charisma;
  }

  classAndLevel = select_class(randomClassVariable);

  // Variable that holds the value of just the class, not the level
  className = classAndLevel.split(" ")[0];

  // Code block that assigns the stats to the class that was chosen
  assign_stats(stats, className);

  const firstNameNumber = Math.floor(Math.random() * 20);
  const lastNameNumber = Math.floor(Math.random() * 20);
  const number = Math.floor(Math.random() * 9);
  ({ race, finalFirstName, finalLastName, raceChecker, raceSplitter1, raceSplitter3 } =
    select_race(number, firstNameNumber, lastNameNumber, nameGenerator));
  newBackground1 = select_background(nameGenerator);
  alignmentChecker = select_alignment(flaws, ideals, alignment, arrayOfFlaws, arrayOfIdeals, randomByLength);

  // Function to get a random interger between a minimum value and a maximum value
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
  }

  listOfStandardLanguages = STANDARD_LANGUAGES.slice();
  listOfExoticLanguages = EXOTIC_LANGUAGES.slice();
  const langState = {
    firstLanguage: undefined, extralanguage: undefined, knowledgeLanguage: undefined,
    race: undefined, racialLanguage1: undefined, racialLanguage2: undefined,
  };
  const { random_language, right_language, right_language2 } =
    make_language_helpers(listOfStandardLanguages, listOfExoticLanguages, langState);


  function attackSectionWeaponPicker(obj) {
    return obj[Math.floor(Math.random() * Math.floor(obj.length))];
  }

  function attackSectionWeaponAdder(weaponObject, form1, form2, form3) {
    equipment.push(weaponObject.inventoryName);
    document.getElementById(form1).value = weaponObject.weaponName;
    statChecker(dexterityModifier + 2, form2);
    statChecker3(weaponObject.modifier, form3, weaponObject.damageDie, weaponObject.damageType);
  }

  // Variable used to determine ancestry of the Dragonborn race
  ancestry = getRandomNumber(10);

  // Variable used to determine ancestry of the Human race
  ancestryHuman = getRandomNumber(9);

  // Function to add a racial cantrip to the last form in the cantrip section
  function add_race_cantrip(cantrip) {
    document.getElementById("form198_3").value = cantrip;
  }

  simpleWeapons = SIMPLE_WEAPONS.slice();
  martialWeapons = MARTIAL_WEAPONS.slice();
  const { weaponAdder, weaponAdder2, armorAdder, armorAdder2, toolAdder, toolAdder2, language_adder, language_adder_2 } = make_proficiency_adders(simpleWeapons, martialWeapons, profsAndLangs);

  const setRacialLanguage1 = (val) => { racialLanguage1 = val; langState.racialLanguage1 = val; };
  const setRacialLanguage2 = (val) => { racialLanguage2 = val; langState.racialLanguage2 = val; };
  const setExtralanguage = (val) => { extralanguage = val; langState.extralanguage = val; };

  const raceCtx = {
    race, strength, dexterity, constitution, intelligence, wisdom, charisma,
    raceSplitter3, raceSplitter1, raceChecker, ancestry, ancestryHuman,
    profsAndLangs, traits, personalityTraits, features, additionalFeatures,
    flaws, arrayOfFlaws, ideals, arrayOfIdeals,
    randomByLength, generate_balance, generate_morality,
    add_race_cantrip, random_language,
    add_click, statChecker, toolAdder, toolAdder2, weaponAdder, weaponAdder2,
    setRacialLanguage1, setRacialLanguage2, setExtralanguage,
    getRandomNumber,
  };
  apply_race(raceCtx);
  race = raceCtx.race;
  langState.race = race;
  strength = raceCtx.strength;
  dexterity = raceCtx.dexterity;
  constitution = raceCtx.constitution;
  intelligence = raceCtx.intelligence;
  wisdom = raceCtx.wisdom;
  charisma = raceCtx.charisma;

  // Function for trait randomization by length of the array
  function randomByLength(array, personalityVariable, id) {
    personalityVariable.push(array[Math.floor(Math.random() * array.length)]);
    document.getElementById(id).value = personalityVariable.join("\r\n");
  }

  // Function for picking balance alignment
  function generate_balance() {
    if (alignmentChecker === false) {
      randomByLength(flaws, arrayOfFlaws, "form99_1");
      if (Math.random() >= 0.666666666) {
        alignment.push("Lawful");
      } else if (0.666666666 >= Math.random() && Math.random() >= 0.3333333333) {
        alignment.push("Chaotic");
      } else {
        alignment.push("Neutral");
      }
    }
  }

  // Function for picking morality alignment
  function generate_morality() {
    if (alignmentChecker === false) {
      randomByLength(ideals, arrayOfIdeals, "form100_1");
      if (Math.random() >= 0.666666666) {
        alignment.push("Good");
      } else if (0.666666666 >= Math.random() && Math.random() >= 0.3333333333) {
        alignment.push("Evil");
      } else {
        alignment.push("Neutral");
      }
    }
  }

  strengthModifier = stat_modifier_generator(strength);
  dexterityModifier = stat_modifier_generator(dexterity);
  constitutionModifier = stat_modifier_generator(constitution);
  intelligenceModifier = stat_modifier_generator(intelligence);
  wisdomModifier = stat_modifier_generator(wisdom);
  charismaModifier = stat_modifier_generator(charisma);
  hitDiceModifier = stat_modifier_generator(constitution);
  const skill_adder = make_skill_adder(
    { strengthModifier, dexterityModifier, intelligenceModifier, wisdomModifier, charismaModifier },
    add_click, statChecker
  );

  armor = build_armor_table(dexterityModifier);
  ({ simpleWeaponsArray, martialWeaponsArray,
    club, dagger, greatclub, handaxe, javelin, lighthammer, mace, quarterstaff, sickle, spear,
    lightcrossbow, dart, shortbow, sling,
    battleaxe, flail, glaive, greataxe, greatsword, halberd, lance, longsword, maul, morningstar,
    pike, rapier, scimitar, shortsword, trident, warpick, warhammer, whip,
    blowgun, handcrossbow, heavycrossbow, longbow, net,
  } = build_weapon_arrays(strengthModifier, dexterityModifier, biggerWeaponStatDecider));

  // Filling in all skills before proficiencies are put in
  statChecker(dexterityModifier, "form38_1"); // acrobatics
  statChecker(wisdomModifier, "form50_1"); // animal handling
  statChecker(intelligenceModifier, "form40_1"); // arcana
  statChecker(strengthModifier, "form49_1"); // athletics
  statChecker(charismaModifier, "form36_1"); // deception
  statChecker(intelligenceModifier, "form48_1"); // history
  statChecker(wisdomModifier, "form35_1"); // insight
  statChecker(charismaModifier, "form44_1"); // intimidation
  statChecker(intelligenceModifier, "form31_1"); // investigation
  statChecker(wisdomModifier, "form53_1"); // medicine
  statChecker(intelligenceModifier, "form37_1"); // nature
  statChecker(wisdomModifier, "form43_1"); // perception
  statChecker(charismaModifier, "form34_1"); // performance
  statChecker(charismaModifier, "form45_1"); // persuasion
  statChecker(intelligenceModifier, "form33_1"); // religion
  statChecker(dexterityModifier, "form46_1"); // sleight of hand
  statChecker(dexterityModifier, "form32_1"); // stealth
  statChecker(wisdomModifier, "form47_1"); // survival

  hp = apply_saving_throws_and_hp(classAndLevel, {
    strengthModifier, dexterityModifier, constitutionModifier,
    intelligenceModifier, wisdomModifier, charismaModifier,
    statChecker, statChecker2, add_click,
  });

  // Block that adds proficiency in perception if you are an Elf
  if (race === "High Elf" || race === "Dark Elf (Drow)" || race === "Wood Elf") {
    add_click(7);
    statChecker(wisdomModifier + 2, "form43_1");
  }

  // Block that adds proficiency in intimidation if you are a Half-Orc
  if (race === "Half-Orc") {
    add_click(24);
    statChecker(charismaModifier + 2, "form44_1");
  }

  randomByLength(bonds, arrayOfBonds, "form101_1");
  apply_weapon_proficiencies(classAndLevel, { weaponAdder, weaponAdder2, armorAdder, armorAdder2, features });

  const physCtx = {
    race, constitution, strength, constitutionModifier, additionalFeatures, getRandomInt,
    weaponAdder, weaponAdder2, armorAdder, armorAdder2, hp, size,
  };
  apply_physical_traits(physCtx);
  hp = physCtx.hp;
  size = physCtx.size;
  const bgCtx = {
    newBackground1, className, race,
    profsAndLangs, equipment, features, bonds, gold,
    add_click, statChecker,
    right_language, random_language,
    toolAdder, toolAdder2, weaponAdder, weaponAdder2,
    randomMusicalInstrument,
    strengthModifier, dexterityModifier, intelligenceModifier, wisdomModifier, charismaModifier,
  };
  apply_background(bgCtx);
  gold = bgCtx.gold;
  // Block to give a Half-Elf two random skills based on the most useful
  if (race === "Half-Elf") {
    skill_adder();
    skill_adder();
  }

  // Function to determine what proficiencies a character gets based on their class and their proficiencies they already have
  // Block that determines what equipment you get based on class
  random = Math.random();
  random2 = Math.random();
  random3 = Math.random();
  random4 = Math.random();
  random5 = Math.random();
  random6 = Math.random();
  const equipCtx = {
    random, random2, random3, random4, random5, random6,
    strengthModifier, dexterityModifier, constitutionModifier,
    charismaModifier, wisdomModifier, intelligenceModifier,
    martialWeaponsArray, simpleWeaponsArray,
    firstWeaponFirstSectionId, firstWeaponSecondSectionId, firstWeaponThirdSectionId,
    secondWeaponFirstSectionId, secondWeaponSecondSectionId, secondWeaponThirdSectionId,
    thirdWeaponFirstSectionId, thirdWeaponSecondSectionId, thirdWeaponThirdSectionId,
    equipment, features, spellcastingSection, alliesAndOrganizations,
    profsAndLangs, alignment,
    armorClass, hp, charName,
    statChecker, statChecker3,
    attackSectionWeaponAdder, attackSectionWeaponPicker,
    armorAdder, armorAdder2, weaponAdder, weaponAdder2, toolAdder, toolAdder2,
    biggerWeaponStatDecider, randomMusicalInstrument, random_artisan_tool,
    language_adder, language_adder_2, random_language, right_language2, add_click,
  };
  dispatch_equipment(classAndLevel, equipCtx);
  armorClass = equipCtx.armorClass;
  hp = equipCtx.hp;

  // Variable that holds your character name
  charName = nameGenerator.CreateNewName(finalFirstName, finalLastName);

  // Variable that holds the name of the player
  name = "Your name";

  // Pushes string to alliesAndOrganizations as a writing prompt
  alliesAndOrganizations.push(
    "Friends? Family? Guild? Crew? Brothers in arms? Priests? Orphans? Good monsters? Lovers? Deities? Rivals? Enemies? Complicated relationships? Party members?"
  );

  // Block of arrays that makes new arrays with commas between them
  newLangs = profsAndLangs.languages.join(", ");
  newWeaponProfs = profsAndLangs.weaponProficiencies.join(", ");
  newArmorProfs = profsAndLangs.armorProficiencies.join(", ");
  newToolProfs = profsAndLangs.toolProficiencies.join(", ");

  // Function to determine if an array is empty
  function determine_if_empty(array) {
    if (array.length === 0) {
      return "none";
    } else {
      return array;
    }
  }

  //Block of arrays that makes new arrays with the sections at the start
  finalLanguages = "Languages: " + determine_if_empty(newLangs);
  finalweaponProficiencies = "Weapon Proficiencies: " + determine_if_empty(newWeaponProfs);
  finalarmorProficiencies = "Armor Proficiencies: " + determine_if_empty(newArmorProfs);
  finaltoolProficiencies = "Tool Proficiencies: " + determine_if_empty(newToolProfs);

  // Pushes arrays to proficienciesAndLanguages
  proficienciesAndLanguages.push(finalLanguages);
  proficienciesAndLanguages.push(finalweaponProficiencies);
  proficienciesAndLanguages.push(finalarmorProficiencies);
  proficienciesAndLanguages.push(finaltoolProficiencies);

  apply_spells(classAndLevel, {
    charismaModifier, wisdomModifier, intelligenceModifier,
    statChecker, spellForms, cantripForms,
    bardSpells, clericSpells, druidSpells, sorcererSpells, warlockSpells, wizardSpells,
    bardCantrips, clericCantrips, druidCantrips, sorcererCantrips, warlockCantrips, wizardCantrips,
    bardCantripCount, clericCantripCount, druidCantripCount,
    sorcererCantripCount, warlockCantripCount, wizardCantripCount,
  });

  armorClass = apply_armor_class(equipment, armor, dexterityModifier, features);

  apply_class_proficiencies({
    classAndLevel,
    strengthModifier, dexterityModifier, constitutionModifier,
    intelligenceModifier, wisdomModifier, charismaModifier,
    add_click, statChecker, skill_adder,
  });

  write_character({
    statChecker, strengthModifier, dexterityModifier, constitutionModifier,
    intelligenceModifier, wisdomModifier, charismaModifier,
    hp, armorClass, gold, charName, name, newBackground1, classAndLevel, race,
    strength, dexterity, constitution, intelligence, wisdom, charisma,
    alliesAndOrganizations, equipment, proficienciesAndLanguages,
    features, additionalFeatures, alignment, spellcastingSection,
  });
}
// Function to generate a new character by clearing all forms and checkboxes and then generating a character again
export function generate_initial_character(version) {
  clear_All();
  version();
  generate_character();
}

// Function to generate a new character by clearing all forms and checkboxes and then generating a character again
export function generate_new_character(version) {
  clear_All();
  version();
  generate_character();
}

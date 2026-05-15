import { clear_All, click_on, click_off, add_click } from "../checkboxes.js";
import {
  get_random_number,
  stat_modifier_generator,
} from "../shared/dice.js";
import { RACE_NAMES } from "../shared/data/names.js";
import { toughTraits, softTraits } from "./data/personality-traits.js";
import { STANDARD_LANGUAGES, EXOTIC_LANGUAGES } from "../shared/data/languages.js";
import { build_armor_table } from "../shared/data/armor.js";
import { SIMPLE_WEAPONS, MARTIAL_WEAPONS } from "../shared/data/weapons.js";
import { lawfulFlaws, neutralFlaws, chaoticFlaws } from "./data/flaws.js";
import { get_random_int } from "./util/random-int.js";
import {
  stat_checker,
  stat_checker_2,
  stat_checker_3,
  stat_checker_no_id,
} from "./util/stat-checkers.js";
import { make_proficiency_adders } from "./util/proficiency-adders.js";
import { random_language, right_language, right_language2 } from "./util/language-helpers.js";
import { apply_barbarian_equipment } from "./equipment/barbarian.js";
import { apply_bard_equipment } from "./equipment/bard.js";
import { apply_cleric_equipment } from "./equipment/cleric.js";
import { apply_druid_equipment } from "./equipment/druid.js";
import { apply_fighter_equipment } from "./equipment/fighter.js";
import { apply_monk_equipment } from "./equipment/monk.js";
import { apply_paladin_equipment } from "./equipment/paladin.js";
import { apply_ranger_equipment } from "./equipment/ranger.js";
import { apply_rogue_equipment } from "./equipment/rogue.js";
import { apply_sorcerer_equipment } from "./equipment/sorcerer.js";
import { apply_warlock_equipment } from "./equipment/warlock.js";
import { apply_wizard_equipment } from "./equipment/wizard.js";
import { random_musical_instrument } from "./util/random-musical-instrument.js";
import { apply_physical_traits } from "./physical-traits.js";
import { apply_spells } from "./spells.js";
import { compute_armor_class } from "./armor-class.js";
import { skill_adder, class_proficiencies } from "./proficiencies.js";
import { apply_background } from "./background/index.js";
import { apply_race } from "./race/index.js";
import { random_by_length } from "./util/random-by-length.js";
import { get_new_background, create_char_name } from "./data/name-generator.js";
import { stat1, stat2, stat3, stat4, stat5, stat6 } from "./stat-versions.js";
import { assign_class_stats, pick_class_from_dropdown } from "./class-stat-assignment.js";
import { apply_weapon_profs } from "./weapon-profs.js";
import { apply_class_combat } from "./class-combat.js";
import { pick_race_random, pick_race_from_dropdown } from "./race/selection.js";
import { pick_background_from_dropdown, apply_alignment_from_dropdown } from "./char-selection.js";
export { standard_version, roll_version, pointbuy_version } from "./stat-versions.js";

export { get_random_number, stat_modifier_generator };

let size = "";
let strength = 0;
let dexterity = 0;
let constitution = 0;
let intelligence = 0;
let wisdom = 0;
let charisma = 0;
let racialLanguage1;
let racialLanguage2;
let newBackground1 = "";
let bardModifier;
let charName;
let nameGenerator = {};


// Function used to generate a new character
export function generate_character() {
  // Name generator object (background/name selection helpers extracted to data/name-generator.js)
  nameGenerator = { _races: RACE_NAMES };

  // Initialize variables
  let language;
  let firstLanguage;
  let secondlanguage;
  let extralanguage;
  let knowledgeLanguage;
  let knowledgeLanguage2;
  let musicalinstrument;
  let musicalinstrument2;
  let musicalinstrument3;
  let artisantool;
  let randomAritsanTool;
  let soldierGamingSet;
  let gladiatorWeapon;
  let finalFirstName;
  let finalLastName;
  let race;
  let ancestry;
  let ancestryHuman;
  let i;
  let random;
  let random2;
  let className;
  let classAndLevel;
  let randomClassVariable;
  let randomChance;
  let clericBuild;
  let name;
  let strengthModifier;
  let dexterityModifier;
  let constitutionModifier;
  let intelligenceModifier;
  let wisdomModifier;
  let charismaModifier;
  let firstNameNumber;
  let lastNameNumber;
  let number;
  let raceChecker;
  let alignmentChecker = false;
  let hp = 0;
  let gold = 0;
  let armorClass = 0;
  let martialWeapons = [];
  let simpleWeapons = [];
  let equipment = [];
  let spellcastingSection = [];
  let alliesAndOrganizations = [];
  let features = [];
  let additionalFeatures = [];
  let personalityTraits = [];
  let alignment = [];
  let ideals = [];
  let bonds = [];
  let flaws = [];
  let proficienciesAndLanguages = [];
  let armor;
  let profsAndLangs = {
    languages: [],
    armorProficiencies: [],
    weaponProficiencies: [],
    toolProficiencies: [],
  };

  randomClassVariable = get_random_number(12);
  randomChance = Math.random();

  // Generates class based on user input
  const _CLASSES = ["Barbarian","Bard","Cleric","Druid","Fighter","Monk","Paladin","Ranger","Rogue","Sorcerer","Warlock","Wizard"];
  classAndLevel = document.getElementById("class_random").checked
    ? _CLASSES[randomClassVariable - 1] + " 1"
    : pick_class_from_dropdown() + " 1";

  // Assign stats based on the chosen class
  ({ strength, dexterity, constitution, intelligence, wisdom, charisma, clericBuild } =
    assign_class_stats(classAndLevel, { stat1, stat2, stat3, stat4, stat5, stat6 }, randomChance));
  // Create variables for the name generator to use
  firstNameNumber = Math.floor(Math.random() * 20);
  lastNameNumber = Math.floor(Math.random() * 20);

  // Random number generator assigned to a variable
  number = Math.floor(Math.random() * 9);

  // Determine race and character name parts
  let _raceSplitter1, _raceSplitter3;
  if (document.getElementById("race_random").checked) {
    ({ race, finalFirstName, finalLastName, raceChecker } =
      pick_race_random(number, nameGenerator, firstNameNumber, lastNameNumber));
  } else {
    ({ race, finalFirstName, finalLastName, raceChecker, raceSplitter1: _raceSplitter1, raceSplitter3: _raceSplitter3 } =
      pick_race_from_dropdown(nameGenerator, firstNameNumber, lastNameNumber, raceChecker));
  }

  // Background selection
  newBackground1 = document.getElementById("background_random").checked
    ? get_new_background(strength, constitution, intelligence, dexterity, classAndLevel)
    : pick_background_from_dropdown();

  // Alignment selection (only when user picked an alignment)
  if (!document.getElementById("alignment_random").checked) {
    const _alignCtx = { alignment, alignmentChecker, flaws, ideals, lawfulFlaws, neutralFlaws, chaoticFlaws };
    apply_alignment_from_dropdown(_alignCtx);
    alignmentChecker = _alignCtx.alignmentChecker;
  }

  armor = build_armor_table(dexterityModifier);

  simpleWeapons = SIMPLE_WEAPONS;
  martialWeapons = MARTIAL_WEAPONS;

  const {
    weapon_adder, weapon_adder_2,
    armor_adder, armor_adder_2,
    tool_adder, tool_adder_2,
    language_adder, language_adder_2,
  } = make_proficiency_adders(simpleWeapons, martialWeapons, profsAndLangs);

  // Variable used to determine ancestry of the Dragonborn race
  ancestry = get_random_number(10);

  // Variable used to determine ancestry of the Human race
  ancestryHuman = get_random_number(9);

  const raceCtx = {
    race, raceSplitter1: _raceSplitter1, raceSplitter3: _raceSplitter3, raceChecker, ancestry, ancestryHuman,
    strength, dexterity, constitution, intelligence, wisdom, charisma,
    racialLanguage1, racialLanguage2, extralanguage,
    profsAndLangs, features, additionalFeatures, personalityTraits,
    alignment, alignmentChecker, flaws, ideals,
    lawfulFlaws, neutralFlaws, chaoticFlaws,
    weapon_adder, weapon_adder_2, tool_adder, tool_adder_2,
  };
  apply_race(raceCtx);
  race = raceCtx.race;
  strength = raceCtx.strength;
  dexterity = raceCtx.dexterity;
  constitution = raceCtx.constitution;
  intelligence = raceCtx.intelligence;
  wisdom = raceCtx.wisdom;
  charisma = raceCtx.charisma;
  racialLanguage1 = raceCtx.racialLanguage1;
  racialLanguage2 = raceCtx.racialLanguage2;
  extralanguage = raceCtx.extralanguage;

  // Creating modifiers for each stat
  strengthModifier = stat_modifier_generator(strength);
  dexterityModifier = stat_modifier_generator(dexterity);
  constitutionModifier = stat_modifier_generator(constitution);
  intelligenceModifier = stat_modifier_generator(intelligence);
  wisdomModifier = stat_modifier_generator(wisdom);
  charismaModifier = stat_modifier_generator(charisma);

  // Filling in all skills before proficiencies are put in
  stat_checker(dexterityModifier, "form38_1"); // acrobatics
  stat_checker(wisdomModifier, "form50_1"); // animal handling
  stat_checker(intelligenceModifier, "form40_1"); // arcana
  stat_checker(strengthModifier, "form49_1"); // athletics
  stat_checker(charismaModifier, "form36_1"); // deception
  stat_checker(intelligenceModifier, "form48_1"); // history
  stat_checker(wisdomModifier, "form35_1"); // insight
  stat_checker(charismaModifier, "form44_1"); // intimidation
  stat_checker(intelligenceModifier, "form31_1"); // investigation
  stat_checker(wisdomModifier, "form53_1"); // medicine
  stat_checker(intelligenceModifier, "form37_1"); // nature
  stat_checker(wisdomModifier, "form43_1"); // perception
  stat_checker(charismaModifier, "form34_1"); // performance
  stat_checker(charismaModifier, "form45_1"); // persuasion
  stat_checker(intelligenceModifier, "form33_1"); // religion
  stat_checker(dexterityModifier, "form46_1"); // sleight of hand
  stat_checker(dexterityModifier, "form32_1"); // stealth
  stat_checker(wisdomModifier, "form47_1"); // survival

  // Variable that holds the value of just the class, not the level
  className = classAndLevel.split(" ")[0];

  // Saving throws + hit die (sets hp)
  hp = apply_class_combat(classAndLevel, {
    strengthModifier, dexterityModifier, constitutionModifier,
    intelligenceModifier, wisdomModifier, charismaModifier,
  });

  // Block that adds proficiency in perception if you are an Elf
  if (race === "High Elf" || race === "Dark Elf (Drow)" || race === "Wood Elf") {
    add_click(7);
    stat_checker(wisdomModifier + 2, "form43_1");
  }

  // Block that adds proficiency in intimidation if you are a Half-Orc
  if (race === "Half-Orc") {
    add_click(24);
    stat_checker(charismaModifier + 2, "form44_1");
  }

  // Function to determine what equipment/spells/features you should have based on your class
  function equipment_chooser(classAndLevel) {
    random = Math.random();
    random2 = Math.random();
    const _equipCtx = {
      features, equipment, spellcastingSection, profsAndLangs,
      strength, dexterity, constitution, intelligence, wisdom, charisma,
      strengthModifier, dexterityModifier, constitutionModifier, intelligenceModifier, wisdomModifier, charismaModifier,
      weapon_adder, weapon_adder_2, armor_adder, armor_adder_2, tool_adder, tool_adder_2,
      language_adder, language_adder_2,
      random, random2,
      clericBuild,
      firstLanguage, racialLanguage1, racialLanguage2, extralanguage,
      alignment, alliesAndOrganizations, charName,
    };
    if (classAndLevel === "Barbarian 1") {
      apply_barbarian_equipment(_equipCtx);
    } else if (classAndLevel === "Bard 1") {
      ({ bardModifier, musicalinstrument, musicalinstrument2, musicalinstrument3 } = apply_bard_equipment(_equipCtx));
    } else if (classAndLevel === "Cleric 1") {
      apply_cleric_equipment(_equipCtx);
    } else if (classAndLevel === "Druid 1") {
      apply_druid_equipment(_equipCtx);
    } else if (classAndLevel === "Fighter 1") {
      apply_fighter_equipment(_equipCtx);
    } else if (classAndLevel === "Monk 1") {
      ({ musicalinstrument, randomAritsanTool } = apply_monk_equipment(_equipCtx));
    } else if (classAndLevel === "Paladin 1") {
      apply_paladin_equipment(_equipCtx);
    } else if (classAndLevel === "Ranger 1") {
      apply_ranger_equipment(_equipCtx);
    } else if (classAndLevel === "Rogue 1") {
      apply_rogue_equipment(_equipCtx);
    } else if (classAndLevel === "Sorcerer 1") {
      const { armorClassDelta: _sorcAC, hpDelta: _sorcHP } = apply_sorcerer_equipment(_equipCtx);
      armorClass += _sorcAC;
      hp += _sorcHP;
    } else if (classAndLevel === "Warlock 1") {
      apply_warlock_equipment(_equipCtx);
    } else if (classAndLevel === "Wizard 1") {
      const { armorClassDelta: _wizAC } = apply_wizard_equipment(_equipCtx);
      armorClass += _wizAC;
    }
  }

  // Per-class weapon proficiencies, armor profs, base armor class, and bonds
  armorClass += apply_weapon_profs(classAndLevel, {
    weapon_adder, weapon_adder_2, armor_adder, armor_adder_2,
    dexterityModifier, constitutionModifier, wisdomModifier,
    equipment, features, bonds,
  });


  // Block to determine physical traits - age, height, skin, hair, weight, and eye color
  const { hpDelta: _ptHP, size: _ptSize } = apply_physical_traits({
    race, constitution, strength, constitutionModifier, additionalFeatures,
    weapon_adder, weapon_adder_2, armor_adder, armor_adder_2,
  });
  hp += _ptHP;
  if (_ptSize) size = _ptSize;

  // Function to determine a random con for the charlatan background

  const bgCtx = {
    newBackground1, race, className,
    racialLanguage2, extralanguage,
    wisdomModifier, charismaModifier, intelligenceModifier, dexterityModifier, strengthModifier,
    profsAndLangs, equipment, features, bonds,
    tool_adder, tool_adder_2, weapon_adder, weapon_adder_2,
    gold,
  };
  apply_background(bgCtx);
  gold = bgCtx.gold;

  const profCtx = { classAndLevel, strength, dexterity, strengthModifier, dexterityModifier, wisdomModifier, intelligenceModifier, charismaModifier };

  // Block to give a Half-Elf two random skills based on the most useful
  if (race === "Half-Elf") {
    skill_adder(profCtx);
    skill_adder(profCtx);
  }

  equipment_chooser(classAndLevel);

  // Variable that holds your character name
  charName = create_char_name(finalFirstName, finalLastName);

  // Variable that holds the name of the player
  name = "Your name";

  // Pushes string to alliesAndOrganizations as a writing prompt
  alliesAndOrganizations.push(
    "Friends? Family? Guild? Crew? Brothers in arms? Priests? Orphans? Good monsters? Lovers? Deities? Rivals? Enemies? Complicated relationships? Party members?"
  );

  const _empty = (a) => a.length === 0 ? "none" : a;
  proficienciesAndLanguages.push("Languages: " + _empty(profsAndLangs.languages.join(", ")));
  proficienciesAndLanguages.push("Weapon Proficiencies: " + _empty(profsAndLangs.weaponProficiencies.join(", ")));
  proficienciesAndLanguages.push("Armor Proficiencies: " + _empty(profsAndLangs.armorProficiencies.join(", ")));
  proficienciesAndLanguages.push("Tool Proficiencies: " + _empty(profsAndLangs.toolProficiencies.join(", ")));

  apply_spells({ classAndLevel, className, strength, constitution, dexterity, charismaModifier, wisdomModifier, intelligenceModifier });
  const acCtx = { equipment, armor, dexterityModifier, features, armorClass };
  compute_armor_class(acCtx);
  armorClass = acCtx.armorClass;

  class_proficiencies(profCtx); // Get proficiencies based on class and previous proficiencies
  stat_checker(strengthModifier, "form56_1"); // str modifier
  stat_checker(dexterityModifier, "form59_1"); // dex modifier
  stat_checker(dexterityModifier, "form88_1"); // initiative
  stat_checker(constitutionModifier, "form58_1"); // con modifier
  stat_checker(intelligenceModifier, "form57_1"); // int modifier
  stat_checker(wisdomModifier, "form60_1"); // wis modifier
  stat_checker(charismaModifier, "form55_1"); // cha modifier
  document.getElementById("form13_2").value = alliesAndOrganizations.join("\r"); // allies and organizations pg 2
  document.getElementById("form61_1").value = "+2"; // proficiency
  document.getElementById("form80_1").value = hp; // max hp
  document.getElementById("form97_1").value = hp; // current hp
  document.getElementById("form67_1").value = 1; // number of hit dice
  document.getElementById("form91_1").value = 0; // experience points
  document.getElementById("form93_1").value = name; // name
  document.getElementById("form90_1").value = newBackground1; // background
  document.getElementById("form96_1").value = charName; // character name
  document.getElementById("form8_2").value = charName; // character name 2nd page
  document.getElementById("form83_1").value = strength; // strength stat
  document.getElementById("form84_1").value = dexterity; // dex stat
  document.getElementById("form82_1").value = constitution; // con stat
  document.getElementById("form86_1").value = intelligence; // int stat
  document.getElementById("form81_1").value = wisdom; // wis stat
  document.getElementById("form85_1").value = charisma; // cha stat
  document.getElementById("form95_1").value = race; // race text field
  document.getElementById("form68_1").value = gold; // gold
  document.getElementById("form104_1").value = equipment.join("\r\n"); // equipment section
  document.getElementById("form94_1").value = classAndLevel; // class and level text field
  document.getElementById("form105_1").value = proficienciesAndLanguages.join("\r"); // proficiencies and languages
  document.getElementById("form106_1").value = features.join("\r\n"); // features & traits
  document.getElementById("form16_2").value = additionalFeatures.join("\r\n"); // additional features, pg. 2
  document.getElementById("form92_1").value = alignment.join(" "); // alignment text fielddice
  document.getElementById("form73_1").value = armorClass; // AC
  document.getElementById("form103_1").value = spellcastingSection.join("\r\n"); // adding spell descriptions to the spellcasting section

  // Block to determine passive perception
  if (document.getElementById("form7_1").checked === "checked") {
    document.getElementById("form63_1").value = 12 + wisdomModifier; // passive perception
  } else {
    document.getElementById("form63_1").value = 10 + wisdomModifier; // passive perception
  }

  // Block to replace' Neutral Neutral' with 'True Neutral'
  if (document.getElementById("form92_1").value === "Neutral Neutral") {
    document.getElementById("form92_1").value = "True Neutral";
  }
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

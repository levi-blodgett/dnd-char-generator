import { RACE_NAMES } from "../shared/data/names.js";

const CLASSES = [
  "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk",
  "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard",
];

const BACKGROUNDS = [
  "Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero", "Gladiator",
  "Guild Artisan", "Guild Merchant", "Hermit", "Knight", "Noble", "Outlander",
  "Pirate", "Sage", "Sailor", "Soldier", "Spy", "Urchin",
];

export function make_nameGenerator() {
  return {
    _races: RACE_NAMES,
    get_new_background() {
      return BACKGROUNDS[Math.floor(Math.random() * 18)];
    },
    CreateNewName(firstName, lastName) {
      return lastName === "" ? firstName : firstName + " " + lastName;
    },
  };
}

export function select_class(randomClassVariable) {
  if (document.getElementById("class_random").checked) {
    return CLASSES[randomClassVariable - 1] + " 1";
  }
  const checked = [...document.querySelectorAll("input.class_class")]
    .filter(el => el.checked)
    .map(el => el.value);
  return checked[Math.floor(Math.random() * checked.length)] + " 1";
}

function _name_for_race(raceLookupKey, firstNameNumber, lastNameNumber, nameGenerator) {
  const key = "_" + raceLookupKey.toLowerCase();
  return {
    finalFirstName: nameGenerator._races[key].firstName[firstNameNumber],
    finalLastName: nameGenerator._races[key].lastName[lastNameNumber],
  };
}

function _normalize_race(rawName) {
  if (rawName === "HalfElf") return "Half-Elf";
  if (rawName === "HalfOrc") return "Half-Orc";
  return rawName;
}

export function select_race(number, firstNameNumber, lastNameNumber, nameGenerator) {
  const RACE_KEYS = ["Dragonborn", "Dwarf", "Elf", "Gnome", "HalfElf", "HalfOrc", "Halfling", "Human", "Tiefling"];

  if (document.getElementById("race_random").checked) {
    const raceKey = RACE_KEYS[number];
    const nameLookup = (raceKey === "HalfElf" || raceKey === "HalfOrc") ? raceKey : raceKey;
    const names = _name_for_race(raceKey, firstNameNumber, lastNameNumber, nameGenerator);
    return {
      race: _normalize_race(raceKey),
      finalFirstName: names.finalFirstName,
      finalLastName: names.finalLastName,
      raceChecker: 0,
      raceSplitter1: undefined,
      raceSplitter3: undefined,
    };
  }

  // Dropdown path
  const allRaces = [...document.querySelectorAll("input.race_class")]
    .filter(el => el.checked)
    .map(el => el.value);

  // Sort subraces into buckets
  const dragonborn = [], dwarves = [], elves = [], gnomes = [], halflings = [], humans = [], leftover = [];
  for (const entry of allRaces) {
    if (entry === "HalfElf" || entry === "HalfOrc" || entry === "Tiefling") {
      leftover.push(entry);
      continue;
    }
    const parts = entry.split(" ", 2);
    const second = parts[1];
    if (second === "Dragonborn") dragonborn.push(entry);
    else if (second === "Dwarf") dwarves.push(entry);
    else if (second === "Elf" || entry === "Dark Elf (Drow)") elves.push(entry);
    else if (second === "Gnome") gnomes.push(entry);
    else if (second === "Halfling") halflings.push(entry);
    else if (parts[0] === "Human") humans.push(entry);
  }
  function pickOne(arr) {
    if (arr.length > 0) leftover.push(arr[Math.floor(Math.random() * arr.length)]);
  }
  pickOne(dragonborn); pickOne(dwarves); pickOne(elves);
  pickOne(gnomes); pickOne(halflings); pickOne(humans);

  const actualRace = leftover[Math.floor(Math.random() * leftover.length)];
  const race = _normalize_race(actualRace);

  let raceSplitter1, raceSplitter3;
  if (actualRace !== "HalfElf" && actualRace !== "HalfOrc" && actualRace !== "(Drow)") {
    const parts = race.split(" ", 2);
    raceSplitter1 = parts[0];
    raceSplitter3 = parts[1];
  }

  let nameLookupKey;
  if (raceSplitter3 === undefined) nameLookupKey = actualRace;
  else if (raceSplitter1 === "Human") nameLookupKey = "Human";
  else if (raceSplitter3 === "(Drow)") nameLookupKey = "Elf";
  else nameLookupKey = raceSplitter3;

  const names = _name_for_race(nameLookupKey, firstNameNumber, lastNameNumber, nameGenerator);
  return {
    race,
    finalFirstName: names.finalFirstName,
    finalLastName: names.finalLastName,
    raceChecker: 1,
    raceSplitter1,
    raceSplitter3,
  };
}

export function select_background(nameGenerator) {
  if (document.getElementById("background_random").checked) {
    return nameGenerator.get_new_background();
  }
  const checked = [...document.querySelectorAll("input.background_class")]
    .filter(el => el.checked)
    .map(el => el.value);
  return checked[Math.floor(Math.random() * checked.length)];
}

export function select_alignment(flaws, ideals, alignment, arrayOfFlaws, arrayOfIdeals, randomByLength) {
  if (!document.getElementById("alignment_random").checked) {
    const checked = [...document.querySelectorAll("input.alignment_class")]
      .filter(el => el.checked)
      .map(el => el.value);
    const picked = checked[Math.floor(Math.random() * checked.length)];
    const parts = picked.split(" ", 2);
    alignment.push(parts[0]);
    randomByLength(flaws, arrayOfFlaws, "form99_1");
    randomByLength(ideals, arrayOfIdeals, "form100_1");
    alignment.push(parts[1]);
    return true;
  }
  return false;
}

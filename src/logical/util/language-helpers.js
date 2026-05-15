import { STANDARD_LANGUAGES, EXOTIC_LANGUAGES } from "../../shared/data/languages.js";

export function random_language(racialLanguage2) {
  const roll = Math.random();
  let standardIdx = Math.floor(Math.random() * 7);
  const exoticIdx = Math.floor(Math.random() * 8);
  while (STANDARD_LANGUAGES[standardIdx] === racialLanguage2) {
    standardIdx = Math.floor(Math.random() * 7);
  }
  return roll >= 0.1 ? STANDARD_LANGUAGES[standardIdx] : EXOTIC_LANGUAGES[exoticIdx];
}

export function right_language(race, firstLanguage, extralanguage, racialLanguage2) {
  if (race === "High Elf" || race === "Wood Elf" || race === "Elf") {
    while (
      firstLanguage === "Elvish" ||
      firstLanguage === extralanguage ||
      extralanguage === racialLanguage2
    ) {
      firstLanguage = random_language(racialLanguage2);
    }
  } else if (race === "Hill Dwarf" || race === "Mountain Dwarf") {
    while (
      firstLanguage === "Dwarvish" ||
      firstLanguage === extralanguage ||
      extralanguage === racialLanguage2
    ) {
      firstLanguage = random_language(racialLanguage2);
    }
  } else if (race === "Lightfoot Halfling" || race === "Stout Halfling") {
    while (
      firstLanguage === "Halfling" ||
      firstLanguage === extralanguage ||
      extralanguage === racialLanguage2
    ) {
      firstLanguage = random_language(racialLanguage2);
    }
  } else if (
    race === "Black Dragonborn" ||
    race === "Blue Dragonborn" ||
    race === "Brass Dragonborn" ||
    race === "Bronze Dragonborn" ||
    race === "Copper Dragonborn" ||
    race === "Gold Dragonborn" ||
    race === "Green Dragonborn" ||
    race === "Red Dragonborn" ||
    race === "Silver Dragonborn" ||
    race === "White Dragonborn"
  ) {
    while (
      firstLanguage === "Draconic" ||
      firstLanguage === extralanguage ||
      extralanguage === racialLanguage2
    ) {
      firstLanguage = random_language(racialLanguage2);
    }
  } else if (race === "Forest Gnome" || race === "Rock Gnome") {
    while (
      firstLanguage === "Gnomish" ||
      firstLanguage === extralanguage ||
      extralanguage === racialLanguage2
    ) {
      firstLanguage = random_language(racialLanguage2);
    }
  } else if (race === "Half-Elf") {
    while (
      firstLanguage === "Elvish" ||
      firstLanguage === extralanguage ||
      extralanguage === racialLanguage2
    ) {
      firstLanguage = random_language(racialLanguage2);
    }
  } else if (race === "Orc") {
    while (
      firstLanguage === "Orc" ||
      firstLanguage === extralanguage ||
      extralanguage === racialLanguage2
    ) {
      firstLanguage = random_language(racialLanguage2);
    }
  } else if (race === "Tiefling") {
    while (
      firstLanguage === "Infernal" ||
      firstLanguage === extralanguage ||
      extralanguage === racialLanguage2
    ) {
      firstLanguage = random_language(racialLanguage2);
    }
  }
  return firstLanguage;
}

export function right_language2(languagevariable, firstLanguage, racialLanguage1, racialLanguage2, extralanguage, knowledgeLanguage) {
  while (
    firstLanguage === languagevariable ||
    languagevariable === racialLanguage1 ||
    languagevariable === racialLanguage2 ||
    extralanguage === languagevariable ||
    knowledgeLanguage === languagevariable
  ) {
    languagevariable = random_language(racialLanguage2);
  }
  return languagevariable;
}

import { random_by_length } from "../util/random-by-length.js";
import { toughTraits, softTraits } from "../../shared/data/personality-traits.js";
import { goodIdeals, neutralIdeals, evilIdeals } from "../../shared/data/ideals.js";
import { random_language } from "../util/language-helpers.js";

function add_race_cantrip(cantrip) {
  document.getElementById("form198_3").value = cantrip;
}

function generate_balance(higherDecimal, lowerDecimal, ctx) {
  const { alignmentChecker, alignment, lawfulFlaws, chaoticFlaws, neutralFlaws, flaws } = ctx;
  if (alignmentChecker === false) {
    if (Math.random() >= higherDecimal) {
      alignment.push("Lawful");
      random_by_length(lawfulFlaws, flaws, "form99_1");
    } else if (higherDecimal >= Math.random() && lowerDecimal >= Math.random()) {
      alignment.push("Chaotic");
      random_by_length(chaoticFlaws, flaws, "form99_1");
    } else if (Math.random() >= lowerDecimal) {
      alignment.push("Neutral");
      random_by_length(neutralFlaws, flaws, "form99_1");
    } else {
      alignment.push("Neutral");
      random_by_length(neutralFlaws, flaws, "form99_1");
    }
  }
}

function generate_morality(higherDecimal, lowerDecimal, ctx) {
  const { alignmentChecker, alignment, ideals } = ctx;
  if (alignmentChecker === false) {
    if (Math.random() >= higherDecimal) {
      alignment.push("Good");
      random_by_length(goodIdeals, ideals, "form100_1");
    } else if (higherDecimal >= Math.random() && lowerDecimal >= Math.random()) {
      alignment.push("Evil");
      random_by_length(evilIdeals, ideals, "form100_1");
    } else if (Math.random() >= lowerDecimal) {
      alignment.push("Neutral");
      random_by_length(neutralIdeals, ideals, "form100_1");
    } else {
      alignment.push("Evil");
      random_by_length(evilIdeals, ideals, "form100_1");
    }
  }
}

export function apply_race(ctx) {
  const {
    raceChecker, ancestry, ancestryHuman,
    profsAndLangs, features, additionalFeatures, personalityTraits,
    weapon_adder, weapon_adder_2, tool_adder, tool_adder_2,
  } = ctx;

  // --- Race and subrace decider ---
  if (ctx.race === "Dragonborn" || ctx.raceSplitter3 === "Dragonborn") {
    ctx.racialLanguage1 = "Common";
    ctx.racialLanguage2 = "Draconic";
    profsAndLangs.languages.push(ctx.racialLanguage1);
    profsAndLangs.languages.push(ctx.racialLanguage2);
    ctx.strength += 2;
    ctx.charisma += 1;
    document.getElementById("form87_1").value = "30";
    random_by_length(toughTraits, personalityTraits, "form102_1");
    if (raceChecker === 0) {
      if (ancestry === 1) ctx.race = "Black Dragonborn";
      else if (ancestry === 2) ctx.race = "Blue Dragonborn";
      else if (ancestry === 3) ctx.race = "Brass Dragonborn";
      else if (ancestry === 4) ctx.race = "Bronze Dragonborn";
      else if (ancestry === 5) ctx.race = "Copper Dragonborn";
      else if (ancestry === 6) ctx.race = "Gold Dragonborn";
      else if (ancestry === 7) ctx.race = "Green Dragonborn";
      else if (ancestry === 8) ctx.race = "Red Dragonborn";
      else if (ancestry === 9) ctx.race = "Silver Dragonborn";
      else if (ancestry === 10) ctx.race = "White Dragonborn";
    }
  } else if (ctx.race === "Dwarf" || ctx.raceSplitter3 === "Dwarf") {
    ctx.racialLanguage1 = "Common";
    ctx.racialLanguage2 = "Dwarvish";
    profsAndLangs.languages.push(ctx.racialLanguage1);
    profsAndLangs.languages.push(ctx.racialLanguage2);
    ctx.constitution += 2;
    random_by_length(toughTraits, personalityTraits, "form102_1");
    features.push("Darkvision: 60 feet.");
    features.push(
      "Dwarven Resilience: You have advantage on saving throws against poison, and you have resistance against poison damage."
    );
    document.getElementById("form87_1").value = "25";
    if (raceChecker === 0) {
      if (ctx.wisdom >= ctx.strength) ctx.race = "Hill Dwarf";
      else ctx.race = "Mountain Dwarf";
    }
  } else if (ctx.race === "Elf" || ctx.raceSplitter3 === "Elf") {
    ctx.dexterity += 2;
    document.getElementById("form87_1").value = "30";
    random_by_length(softTraits, personalityTraits, "form102_1");
    additionalFeatures.push(
      "Fey Ancestry: You have advantage on saving throws against being charmed, and magic can't put you to sleep."
    );
    additionalFeatures.push(
      "Trance: Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After Resting in this way, you gain the same benefit that a human does from 8 hours of sleep."
    );
    if (raceChecker === 0) {
      if (ctx.intelligence >= ctx.wisdom && ctx.intelligence >= ctx.charisma) ctx.race = "High Elf";
      else if (ctx.wisdom >= ctx.intelligence && ctx.wisdom >= ctx.charisma) ctx.race = "Wood Elf";
      else if (ctx.charisma >= ctx.intelligence && ctx.charisma >= ctx.wisdom) ctx.race = "Dark Elf (Drow)";
      else if (ctx.intelligence > ctx.wisdom || ctx.intelligence > ctx.charisma) ctx.race = "High Elf";
      else if (ctx.wisdom > ctx.intelligence || ctx.wisdom > ctx.charisma) ctx.race = "Wood Elf";
      else if (ctx.charisma > ctx.intelligence || ctx.charisma > ctx.wisdom) ctx.race = "Dark Elf (Drow)";
      else if (ctx.intelligence >= ctx.wisdom || ctx.intelligence >= ctx.charisma) ctx.race = "High Elf";
      else if (ctx.wisdom >= ctx.intelligence || ctx.wisdom >= ctx.charisma) ctx.race = "Wood Elf";
    }
  } else if (ctx.race === "Halfling" || ctx.raceSplitter3 === "Halfling") {
    ctx.racialLanguage1 = "Common";
    ctx.racialLanguage2 = "Halfling";
    profsAndLangs.languages.push(ctx.racialLanguage1);
    profsAndLangs.languages.push(ctx.racialLanguage2);
    ctx.dexterity += 2;
    document.getElementById("form87_1").value = "25";
    random_by_length(softTraits, personalityTraits, "form102_1");
    additionalFeatures.push(
      "Halfling Nimbleness: You can move through the space of any creature that is of a size larger than yours."
    );
    additionalFeatures.push(
      "Lucky: When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."
    );
    features.push("Brave: You have advantage on saving throws against being frightened.");
    if (raceChecker === 0) {
      if (ctx.charisma >= ctx.constitution) ctx.race = "Lightfoot Halfling";
      else if (ctx.constitution > ctx.charisma) ctx.race = "Stout Halfling";
    }
  } else if (ctx.race === "Human" || ctx.raceSplitter1 === "Human") {
    ctx.racialLanguage1 = "Common";
    ctx.racialLanguage2 = random_language(ctx.racialLanguage2);
    profsAndLangs.languages.push(ctx.racialLanguage1);
    profsAndLangs.languages.push(ctx.racialLanguage2);
    ctx.strength += 1;
    ctx.dexterity += 1;
    ctx.constitution += 1;
    ctx.intelligence += 1;
    ctx.wisdom += 1;
    ctx.charisma += 1;
    document.getElementById("form87_1").value = "30";
    if (raceChecker === 0) {
      if (ancestryHuman === 1) { ctx.race = "Human (Calishite)"; random_by_length(softTraits, personalityTraits, "form102_1"); }
      else if (ancestryHuman === 2) { ctx.race = "Human (Chondathan)"; random_by_length(softTraits, personalityTraits, "form102_1"); }
      else if (ancestryHuman === 3) { ctx.race = "Human (Damaran)"; random_by_length(softTraits, personalityTraits, "form102_1"); }
      else if (ancestryHuman === 4) { ctx.race = "Human (Illuskan)"; random_by_length(softTraits, personalityTraits, "form102_1"); }
      else if (ancestryHuman === 5) { ctx.race = "Human (Mulan)"; random_by_length(softTraits, personalityTraits, "form102_1"); }
      else if (ancestryHuman === 6) { ctx.race = "Human (Rashemi)"; random_by_length(toughTraits, personalityTraits, "form102_1"); }
      else if (ancestryHuman === 7) { ctx.race = "Human (Shou)"; random_by_length(toughTraits, personalityTraits, "form102_1"); }
      else if (ancestryHuman === 8) { ctx.race = "Human (Tethyrian)"; random_by_length(toughTraits, personalityTraits, "form102_1"); }
      else if (ancestryHuman === 9) { ctx.race = "Human (Turami)"; random_by_length(toughTraits, personalityTraits, "form102_1"); }
    }
  } else if (ctx.race === "Gnome" || ctx.raceSplitter3 === "Gnome") {
    ctx.racialLanguage1 = "Common";
    ctx.racialLanguage2 = "Gnomish";
    profsAndLangs.languages.push(ctx.racialLanguage1);
    profsAndLangs.languages.push(ctx.racialLanguage2);
    ctx.intelligence += 2;
    document.getElementById("form87_1").value = "25";
    random_by_length(softTraits, personalityTraits, "form102_1");
    features.push("Darkvision: 60 feet.");
    features.push(
      "Gnome Cunning: You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
    );
    if (raceChecker === 0) {
      if (ctx.dexterity >= ctx.constitution) ctx.race = "Forest Gnome";
      else if (ctx.constitution > ctx.dexterity) ctx.race = "Rock Gnome";
    }
  }

  // --- Racial features adder ---
  if (ctx.race === "Black Dragonborn") {
    features.push("Draconic Ancestry: Black Dragons.");
    features.push("Damage Resistance: Acid.");
    generate_balance(0.55, 0.4, ctx);
    generate_morality(0.8, 0.55, ctx);
  } else if (ctx.race === "Blue Dragonborn") {
    features.push("Draconic Ancestry: Blue Dragons.");
    features.push("Damage Resistance: Lightning.");
    generate_balance(0.55, 0.4, ctx);
    generate_morality(0.8, 0.55, ctx);
  } else if (ctx.race === "Brass Dragonborn") {
    features.push("Draconic Ancestry: Brass Dragons.");
    features.push("Damage Resistance: Fire.");
    generate_balance(0.55, 0.4, ctx);
    generate_morality(0.6, 0.25, ctx);
  } else if (ctx.race === "Bronze Dragonborn") {
    features.push("Draconic Ancestry: Bronze Dragons.");
    features.push("Damage Resistance: Lightning.");
    generate_balance(0.55, 0.4, ctx);
    generate_morality(0.6, 0.25, ctx);
  } else if (ctx.race === "Copper Dragonborn") {
    features.push("Draconic Ancestry: Copper Dragons.");
    features.push("Damage Resistance: Acid.");
    generate_balance(0.55, 0.4, ctx);
    generate_morality(0.6, 0.25, ctx);
  } else if (ctx.race === "Gold Dragonborn") {
    features.push("Draconic Ancestry: Gold Dragons.");
    features.push("Damage Resistance: Fire.");
    generate_balance(0.55, 0.4, ctx);
    generate_morality(0.6, 0.25, ctx);
  } else if (ctx.race === "Green Dragonborn") {
    features.push("Draconic Ancestry: Green Dragons.");
    features.push("Damage Resistance: Poison.");
    generate_balance(0.55, 0.4, ctx);
    generate_morality(0.75, 0.4, ctx);
  } else if (ctx.race === "Red Dragonborn") {
    features.push("Draconic Ancestry: Red Dragons.");
    features.push("Damage Resistance: Fire.");
    generate_balance(0.55, 0.4, ctx);
    generate_morality(0.75, 0.4, ctx);
  } else if (ctx.race === "Silver Dragonborn") {
    features.push("Draconic Ancestry: Silver Dragons.");
    features.push("Damage Resistance: Cold.");
    generate_balance(0.55, 0.4, ctx);
    generate_morality(0.6, 0.25, ctx);
  } else if (ctx.race === "White Dragonborn") {
    features.push("Draconic Ancestry: White Dragons.");
    features.push("Damage Resistance: Cold.");
    generate_balance(0.55, 0.4, ctx);
    generate_morality(0.75, 0.4, ctx);
  } else if (ctx.race === "Hill Dwarf") {
    ctx.wisdom += 1;
    features.push(
      "Dwarven Toughness: Your hit point maximum increases by 1, and it increases by 1 every time you gain a level."
    );
    generate_balance(0.3, 0.1, ctx);
    generate_morality(0.5, 0.2, ctx);
  } else if (ctx.race === "Mountain Dwarf") {
    ctx.strength += 2;
    generate_balance(0.3, 0.1, ctx);
    generate_morality(0.5, 0.2, ctx);
  } else if (ctx.race === "Human (Calishite)") {
    generate_balance(0.6, 0.2, ctx);
    generate_morality(0.66, 0.3, ctx);
  } else if (ctx.race === "Human (Chondathan)") {
    generate_balance(0.6, 0.2, ctx);
    generate_morality(0.66, 0.3, ctx);
  } else if (ctx.race === "Human (Damaran)") {
    generate_balance(0.6, 0.2, ctx);
    generate_morality(0.66, 0.3, ctx);
  } else if (ctx.race === "Human (Illuskan)") {
    generate_balance(0.6, 0.2, ctx);
    generate_morality(0.66, 0.3, ctx);
  } else if (ctx.race === "Human (Mulan)") {
    generate_balance(0.6, 0.2, ctx);
    generate_morality(0.66, 0.3, ctx);
  } else if (ctx.race === "Human (Rashemi)") {
    generate_balance(0.6, 0.2, ctx);
    generate_morality(0.66, 0.3, ctx);
  } else if (ctx.race === "Human (Shou)") {
    generate_balance(0.6, 0.2, ctx);
    generate_morality(0.66, 0.3, ctx);
  } else if (ctx.race === "Human (Tethyrian)") {
    generate_balance(0.6, 0.2, ctx);
    generate_morality(0.66, 0.3, ctx);
  } else if (ctx.race === "Human (Turami)") {
    generate_balance(0.6, 0.2, ctx);
    generate_morality(0.66, 0.3, ctx);
  } else if (ctx.race === "High Elf") {
    features.push("Darkvision: 60 feet.");
    ctx.racialLanguage1 = "Common";
    ctx.racialLanguage2 = "Elvish";
    ctx.extralanguage = random_language(ctx.racialLanguage2);
    profsAndLangs.languages.push(ctx.racialLanguage1);
    profsAndLangs.languages.push(ctx.racialLanguage2);
    profsAndLangs.languages.push(ctx.extralanguage);
    weapon_adder_2(weapon_adder("longsword"));
    weapon_adder_2(weapon_adder("shortsword"));
    weapon_adder_2(weapon_adder("shortbow"));
    weapon_adder_2(weapon_adder("longbow"));
    features.push(
      "High Elf Cantrip: You know one cantrip (prestidigitation) from your High Elven heritage, intelligence is your spellcasting ability for it."
    );
    add_race_cantrip("Prestidigitation");
    ctx.intelligence += 1;
    generate_balance(0.9, 0.7, ctx);
    generate_morality(0.7, 0.2, ctx);
  } else if (ctx.race === "Wood Elf") {
    features.push("Darkvision: 60 feet.");
    ctx.racialLanguage1 = "Common";
    ctx.racialLanguage2 = "Elvish";
    profsAndLangs.languages.push(ctx.racialLanguage1);
    profsAndLangs.languages.push(ctx.racialLanguage2);
    weapon_adder_2(weapon_adder("longsword"));
    weapon_adder_2(weapon_adder("shortsword"));
    weapon_adder_2(weapon_adder("shortbow"));
    weapon_adder_2(weapon_adder("longbow"));
    ctx.wisdom += 1;
    document.getElementById("form87_1").value = "35";
    features.push(
      "Mask of the Wild: You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
    );
    generate_balance(0.9, 0.7, ctx);
    generate_morality(0.6, 0.2, ctx);
  } else if (ctx.race === "Dark Elf (Drow)") {
    ctx.racialLanguage1 = "Common";
    ctx.racialLanguage2 = "Elvish";
    profsAndLangs.languages.push(ctx.racialLanguage1);
    profsAndLangs.languages.push(ctx.racialLanguage2);
    weapon_adder_2(weapon_adder("rapier"));
    weapon_adder_2(weapon_adder("shortsword"));
    weapon_adder_2(weapon_adder("crossbow"));
    features.push(
      "Drow Cantrip: You know one cantrip (dancing lights) from your High Elven heritage, charisma is your spellcasting ability for it."
    );
    add_race_cantrip("Dancing Lights");
    ctx.charisma += 1;
    features.push("Superior Darkvision: 120 feet.");
    additionalFeatures.push(
      "Sunlight Sensitivity: You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight."
    );
    generate_balance(0.9, 0.7, ctx);
    generate_morality(0.8, 0.4, ctx);
  } else if (ctx.race === "Lightfoot Halfling") {
    ctx.charisma += 1;
    features.push(
      "Naturally Stealthy: You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you."
    );
    generate_balance(0.2, 0.1, ctx);
    generate_morality(0.4, 0.2, ctx);
  } else if (ctx.race === "Stout Halfling") {
    ctx.constitution += 1;
    features.push(
      "Stout Resilience: You have advantage on saving throws against poison, and you have resistance against poison damage."
    );
    generate_balance(0.2, 0.1, ctx);
    generate_morality(0.4, 0.2, ctx);
  } else if (ctx.race === "Forest Gnome") {
    ctx.constitution += 1;
    additionalFeatures.push(
      "Speak with Small Beasts: Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets."
    );
    features.push(
      "Natural Illusionist: You know the 'minor illusion' cantrip, intelligence is your spellcasting ability for it."
    );
    add_race_cantrip("Minor Illusion");
    generate_balance(0.6, 0.4, ctx);
    generate_morality(0.5, 0.2, ctx);
  } else if (ctx.race === "Rock Gnome") {
    ctx.constitution += 1;
    tool_adder_2(tool_adder("tinker's tools"));
    features.push(
      "Artificer's Lore: Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply."
    );
    additionalFeatures.push(
      "Tinker: Using tinker's tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options:\rClockwork Toy: This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.\rFire Starter: The device produces a miniature flame, which you can use to light a Candle, torch, or campfire. Using the device requires your action.\rMusic Box: When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed."
    );
    generate_balance(0.6, 0.4, ctx);
    generate_morality(0.5, 0.2, ctx);
  } else if (ctx.race === "Half-Elf") {
    ctx.racialLanguage1 = "Common";
    ctx.racialLanguage2 = "Elvish";
    ctx.extralanguage = random_language(ctx.racialLanguage2);
    profsAndLangs.languages.push(ctx.racialLanguage1);
    profsAndLangs.languages.push(ctx.racialLanguage2);
    profsAndLangs.languages.push(ctx.extralanguage);
    ctx.charisma += 2;
    random_by_length(softTraits, personalityTraits, "form102_1");
    let firstNumber = Math.floor(Math.random() * 4);
    let secondNumber = Math.floor(Math.random() * 4);
    while (firstNumber === secondNumber) {
      firstNumber = Math.floor(Math.random() * 4);
      secondNumber = Math.floor(Math.random() * 4);
    }
    if (firstNumber === 0) ctx.strength += 1;
    else if (firstNumber === 1) ctx.dexterity += 1;
    else if (firstNumber === 2) ctx.constitution += 1;
    else if (firstNumber === 3) ctx.intelligence += 1;
    else if (firstNumber === 4) ctx.wisdom += 1;
    if (secondNumber === 0) ctx.strength += 1;
    else if (secondNumber === 1) ctx.dexterity += 1;
    else if (secondNumber === 2) ctx.constitution += 1;
    else if (secondNumber === 3) ctx.intelligence += 1;
    else if (secondNumber === 4) ctx.wisdom += 1;
    document.getElementById("form87_1").value = "30";
    features.push("Darkvision: 60 feet.");
    features.push(
      "Fey Ancestry: You have advantage on saving throws against being charmed, and magic can't put you to sleep."
    );
    generate_balance(0.8, 0.6, ctx);
    generate_morality(0.6, 0.3, ctx);
  } else if (ctx.race === "Half-Orc") {
    ctx.racialLanguage1 = "Common";
    ctx.racialLanguage2 = "Orc";
    profsAndLangs.languages.push(ctx.racialLanguage1);
    profsAndLangs.languages.push(ctx.racialLanguage2);
    ctx.strength += 2;
    ctx.constitution += 1;
    document.getElementById("form87_1").value = "30";
    random_by_length(toughTraits, personalityTraits, "form102_1");
    features.push("Darkvision: 60 feet.");
    features.push(
      "Relentless Endurance: When you are reduced to 0 hit points but not killed outright, you can drop to 1 hitpoint instead. You can't use this feature again until you finish a long rest."
    );
    additionalFeatures.push(
      "Savage Attacks: When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."
    );
    generate_balance(0.8, 0.6, ctx);
    generate_morality(0.7, 0.4, ctx);
  } else if (ctx.race === "Tiefling") {
    ctx.racialLanguage1 = "Common";
    ctx.racialLanguage2 = "Infernal";
    profsAndLangs.languages.push(ctx.racialLanguage1);
    profsAndLangs.languages.push(ctx.racialLanguage2);
    features.push(
      "Infernal Legacy: You know the thaumaturgy cantrip, charisma is your spellcasting ability for it."
    );
    add_race_cantrip("Thaumaturgy");
    ctx.charisma += 2;
    ctx.intelligence += 1;
    document.getElementById("form87_1").value = "30";
    random_by_length(softTraits, personalityTraits, "form102_1");
    features.push("Darkvision: 60 feet.");
    features.push("Hellish Resistance. You have resistance to fire damage.");
    generate_balance(0.8, 0.6, ctx);
    generate_morality(0.7, 0.4, ctx);
  }
}

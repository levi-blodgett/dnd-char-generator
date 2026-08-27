export function apply_race(ctx) {
  let { race, strength, dexterity, constitution, intelligence, wisdom, charisma } = ctx;
  const {
    raceSplitter3, raceSplitter1, raceChecker, ancestry, ancestryHuman,
    profsAndLangs, traits, personalityTraits, features, additionalFeatures,
    flaws, arrayOfFlaws, ideals, arrayOfIdeals,
    randomByLength, generate_balance, generate_morality,
    add_race_cantrip, random_language,
    add_click, statChecker, toolAdder, toolAdder2, weaponAdder, weaponAdder2,
    setRacialLanguage1, setRacialLanguage2, setExtralanguage,
    getRandomNumber,
  } = ctx;

  let firstNumber, secondNumber;

  // Race and subrace decider
  if (race === "Dragonborn" || raceSplitter3 === "Dragonborn") {
    setRacialLanguage1("Common");
    setRacialLanguage2("Draconic");
    profsAndLangs.languages.push("Common");
    profsAndLangs.languages.push("Draconic");
    strength += 2;
    charisma += 1;
    document.getElementById("form87_1").value = "30";
    randomByLength(traits, personalityTraits, "form102_1");
    if (raceChecker === 0) {
      if (ancestry === 1) race = "Black Dragonborn";
      else if (ancestry === 2) race = "Blue Dragonborn";
      else if (ancestry === 3) race = "Brass Dragonborn";
      else if (ancestry === 4) race = "Bronze Dragonborn";
      else if (ancestry === 5) race = "Copper Dragonborn";
      else if (ancestry === 6) race = "Gold Dragonborn";
      else if (ancestry === 7) race = "Green Dragonborn";
      else if (ancestry === 8) race = "Red Dragonborn";
      else if (ancestry === 9) race = "Silver Dragonborn";
      else if (ancestry === 10) race = "White Dragonborn";
    }
  } else if (race === "Dwarf" || raceSplitter3 === "Dwarf") {
    setRacialLanguage1("Common");
    setRacialLanguage2("Dwarvish");
    profsAndLangs.languages.push("Common");
    profsAndLangs.languages.push("Dwarvish");
    constitution += 2;
    randomByLength(traits, personalityTraits, "form102_1");
    features.push("Darkvision: 60 feet.");
    features.push(
      "Dwarven Resilience: You have advantage on saving throws against poison, and you have resistance against poison damage."
    );
    document.getElementById("form87_1").value = "25";
    if (raceChecker === 0) {
      const a = getRandomNumber(2);
      race = a === 1 ? "Hill Dwarf" : "Mountain Dwarf";
    }
  } else if (race === "Elf" || raceSplitter3 === "Elf") {
    dexterity += 2;
    document.getElementById("form87_1").value = "30";
    randomByLength(traits, personalityTraits, "form102_1");
    additionalFeatures.push(
      "Fey Ancestry: You have advantage on saving throws against being charmed, and magic can't put you to sleep."
    );
    additionalFeatures.push(
      "Trance: Elves don't need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After Resting in this way, you gain the same benefit that a human does from 8 hours of sleep."
    );
    if (raceChecker === 0) {
      const a = getRandomNumber(3);
      if (a === 1) race = "High Elf";
      else if (a === 2) race = "Wood Elf";
      else race = "Dark Elf (Drow)";
    }
  } else if (race === "Halfling" || raceSplitter3 === "Halfling") {
    setRacialLanguage1("Common");
    setRacialLanguage2("Halfling");
    profsAndLangs.languages.push("Common");
    profsAndLangs.languages.push("Halfling");
    dexterity += 2;
    document.getElementById("form87_1").value = "25";
    randomByLength(traits, personalityTraits, "form102_1");
    additionalFeatures.push(
      "Halfling Nimbleness: You can move through the space of any creature that is of a size larger than yours."
    );
    additionalFeatures.push(
      "Lucky: When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."
    );
    features.push("Brave: You have advantage on saving throws against being frightened.");
    if (raceChecker === 0) {
      const a = getRandomNumber(2);
      race = a === 1 ? "Lightfoot Halfling" : "Stout Halfling";
    }
  } else if (race === "Human" || raceSplitter1 === "Human") {
    setRacialLanguage1("Common");
    const rl2 = random_language();
    setRacialLanguage2(rl2);
    profsAndLangs.languages.push("Common");
    profsAndLangs.languages.push(rl2);
    strength += 1;
    dexterity += 1;
    constitution += 1;
    intelligence += 1;
    wisdom += 1;
    charisma += 1;
    document.getElementById("form87_1").value = "30";
    if (raceChecker === 0) {
      if (ancestryHuman === 1) { race = "Human (Calishite)"; randomByLength(traits, personalityTraits, "form102_1"); }
      else if (ancestryHuman === 2) { race = "Human (Chondathan)"; randomByLength(traits, personalityTraits, "form102_1"); }
      else if (ancestryHuman === 3) { race = "Human (Damaran)"; randomByLength(traits, personalityTraits, "form102_1"); }
      else if (ancestryHuman === 4) { race = "Human (Illuskan)"; randomByLength(traits, personalityTraits, "form102_1"); }
      else if (ancestryHuman === 5) { race = "Human (Mulan)"; randomByLength(traits, personalityTraits, "form102_1"); }
      else if (ancestryHuman === 6) { race = "Human (Rashemi)"; randomByLength(traits, personalityTraits, "form102_1"); }
      else if (ancestryHuman === 7) { race = "Human (Shou)"; randomByLength(traits, personalityTraits, "form102_1"); }
      else if (ancestryHuman === 8) { race = "Human (Tethyrian)"; randomByLength(traits, personalityTraits, "form102_1"); }
      else if (ancestryHuman === 9) { race = "Human (Turami)"; randomByLength(traits, personalityTraits, "form102_1"); }
    }
  } else if (race === "Gnome" || raceSplitter3 === "Gnome") {
    setRacialLanguage1("Common");
    setRacialLanguage2("Gnomish");
    profsAndLangs.languages.push("Common");
    profsAndLangs.languages.push("Gnomish");
    intelligence += 2;
    document.getElementById("form87_1").value = "25";
    randomByLength(traits, personalityTraits, "form102_1");
    features.push("Darkvision: 60 feet.");
    features.push(
      "Gnome Cunning: You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."
    );
    if (raceChecker === 0) {
      const a = getRandomNumber(2);
      race = a === 1 ? "Forest Gnome" : "Rock Gnome";
    }
  }

  // Racial features adder
  generate_balance();
  generate_morality();
  if (race === "Black Dragonborn") {
    features.push("Draconic Ancestry: Black Dragons.");
    features.push("Damage Resistance: Acid.");
  } else if (race === "Blue Dragonborn") {
    features.push("Draconic Ancestry: Blue Dragons.");
    features.push("Damage Resistance: Lightning.");
  } else if (race === "Brass Dragonborn") {
    features.push("Draconic Ancestry: Brass Dragons.");
    features.push("Damage Resistance: Fire.");
  } else if (race === "Bronze Dragonborn") {
    features.push("Draconic Ancestry: Bronze Dragons.");
    features.push("Damage Resistance: Lightning.");
  } else if (race === "Copper Dragonborn") {
    features.push("Draconic Ancestry: Copper Dragons.");
    features.push("Damage Resistance: Acid.");
  } else if (race === "Gold Dragonborn") {
    features.push("Draconic Ancestry: Gold Dragons.");
    features.push("Damage Resistance: Fire.");
  } else if (race === "Green Dragonborn") {
    features.push("Draconic Ancestry: Green Dragons.");
    features.push("Damage Resistance: Poison.");
  } else if (race === "Red Dragonborn") {
    features.push("Draconic Ancestry: Red Dragons.");
    features.push("Damage Resistance: Fire.");
  } else if (race === "Silver Dragonborn") {
    features.push("Draconic Ancestry: Silver Dragons.");
    features.push("Damage Resistance: Cold.");
  } else if (race === "White Dragonborn") {
    features.push("Draconic Ancestry: White Dragons.");
    features.push("Damage Resistance: Cold.");
  } else if (race === "Hill Dwarf") {
    wisdom += 1;
    features.push(
      "Dwarven Toughness: Your hit point maximum increases by 1, and it increases by 1 every time you gain a level."
    );
  } else if (race === "Mountain Dwarf") {
    strength += 2;
  } else if (race === "High Elf") {
    features.push("Darkvision: 60 feet.");
    setRacialLanguage1("Common");
    setRacialLanguage2("Elvish");
    const el = random_language();
    setExtralanguage(el);
    profsAndLangs.languages.push("Common");
    profsAndLangs.languages.push("Elvish");
    profsAndLangs.languages.push(el);
    weaponAdder2(weaponAdder("longsword"));
    weaponAdder2(weaponAdder("shortsword"));
    weaponAdder2(weaponAdder("shortbow"));
    weaponAdder2(weaponAdder("longbow"));
    features.push(
      "High Elf Cantrip: You know one cantrip (prestidigitation) from your High Elven heritage, intelligence is your spellcasting ability for it."
    );
    add_race_cantrip("Prestidigitation");
    intelligence += 1;
  } else if (race === "Wood Elf") {
    features.push("Darkvision: 60 feet.");
    setRacialLanguage1("Common");
    setRacialLanguage2("Elvish");
    profsAndLangs.languages.push("Common");
    profsAndLangs.languages.push("Elvish");
    weaponAdder2(weaponAdder("longsword"));
    weaponAdder2(weaponAdder("shortsword"));
    weaponAdder2(weaponAdder("shortbow"));
    weaponAdder2(weaponAdder("longbow"));
    wisdom += 1;
    document.getElementById("form87_1").value = "35";
    features.push(
      "Mask of the Wild: You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena."
    );
  } else if (race === "Dark Elf (Drow)") {
    setRacialLanguage1("Common");
    setRacialLanguage2("Elvish");
    profsAndLangs.languages.push("Common");
    profsAndLangs.languages.push("Elvish");
    weaponAdder2(weaponAdder("rapier"));
    weaponAdder2(weaponAdder("shortsword"));
    weaponAdder2(weaponAdder("crossbow"));
    features.push(
      "Drow Cantrip: You know one cantrip (dancing lights) from your High Elven heritage, charisma is your spellcasting ability for it."
    );
    add_race_cantrip("Dancing Lights");
    charisma += 1;
    features.push("Superior Darkvision: 120 feet.");
    additionalFeatures.push(
      "Sunlight Sensitivity: You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight."
    );
  } else if (race === "Lightfoot Halfling") {
    charisma += 1;
    features.push(
      "Naturally Stealthy: You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you."
    );
  } else if (race === "Stout Halfling") {
    constitution += 1;
    features.push(
      "Stout Resilience: You have advantage on saving throws against poison, and you have resistance against poison damage."
    );
  } else if (race === "Forest Gnome") {
    constitution += 1;
    additionalFeatures.push(
      "Speak with Small Beasts: Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets."
    );
    features.push(
      "Natural Illusionist: You know the 'minor illusion' cantrip, intelligence is your spellcasting ability for it."
    );
    add_race_cantrip("Minor Illusion");
  } else if (race === "Rock Gnome") {
    constitution += 1;
    toolAdder2(toolAdder("tinker's tools"));
    features.push(
      "Artificer's Lore: Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply."
    );
    additionalFeatures.push(
      "Tinker: Using tinker's tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options:\rClockwork Toy: This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.\rFire Starter: The device produces a miniature flame, which you can use to light a Candle, torch, or campfire. Using the device requires your action.\rMusic Box: When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed."
    );
  } else if (race === "Half-Elf") {
    setRacialLanguage1("Common");
    setRacialLanguage2("Elvish");
    const el = random_language();
    setExtralanguage(el);
    profsAndLangs.languages.push("Common");
    profsAndLangs.languages.push("Elvish");
    profsAndLangs.languages.push(el);
    charisma += 2;
    randomByLength(traits, personalityTraits, "form102_1");
    firstNumber = Math.floor(Math.random() * 4);
    secondNumber = Math.floor(Math.random() * 4);
    while (firstNumber === secondNumber) {
      firstNumber = Math.floor(Math.random() * 4);
      secondNumber = Math.floor(Math.random() * 4);
    }
    if (firstNumber === 0) strength += 1;
    else if (firstNumber === 1) dexterity += 1;
    else if (firstNumber === 2) constitution += 1;
    else if (firstNumber === 3) intelligence += 1;
    else if (firstNumber === 4) wisdom += 1;
    if (secondNumber === 0) strength += 1;
    else if (secondNumber === 1) dexterity += 1;
    else if (secondNumber === 2) constitution += 1;
    else if (secondNumber === 3) intelligence += 1;
    else if (secondNumber === 4) wisdom += 1;
    document.getElementById("form87_1").value = "30";
    features.push("Darkvision: 60 feet.");
    features.push(
      "Fey Ancestry: You have advantage on saving throws against being charmed, and magic can't put you to sleep."
    );
  } else if (race === "Half-Orc") {
    setRacialLanguage1("Common");
    setRacialLanguage2("Orc");
    profsAndLangs.languages.push("Common");
    profsAndLangs.languages.push("Orc");
    strength += 2;
    constitution += 1;
    document.getElementById("form87_1").value = "30";
    randomByLength(traits, personalityTraits, "form102_1");
    features.push("Darkvision: 60 feet.");
    features.push(
      "Relentless Endurance: When you are reduced to 0 hit points but not killed outright, you can drop to 1 hitpoint instead. You can't use this feature again until you finish a long rest."
    );
    additionalFeatures.push(
      "Savage Attacks: When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit."
    );
  } else if (race === "Tiefling") {
    setRacialLanguage1("Common");
    setRacialLanguage2("Infernal");
    profsAndLangs.languages.push("Common");
    profsAndLangs.languages.push("Infernal");
    features.push(
      "Infernal Legacy: You know the thaumaturgy cantrip, charisma is your spellcasting ability for it."
    );
    add_race_cantrip("Thaumaturgy");
    charisma += 2;
    intelligence += 1;
    document.getElementById("form87_1").value = "30";
    randomByLength(traits, personalityTraits, "form102_1");
    features.push("Darkvision: 60 feet.");
    features.push("Hellish Resistance. You have resistance to fire damage.");
  }

  // Write back primitives
  ctx.race = race;
  ctx.strength = strength;
  ctx.dexterity = dexterity;
  ctx.constitution = constitution;
  ctx.intelligence = intelligence;
  ctx.wisdom = wisdom;
  ctx.charisma = charisma;
}

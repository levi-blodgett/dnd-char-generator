export function apply_ranger_equipment(ctx) {
  const {
    random, random2, random3, random4, random5,
    strengthModifier, dexterityModifier,
    simpleWeaponsArray,
    firstWeaponFirstSectionId, firstWeaponSecondSectionId, firstWeaponThirdSectionId,
    secondWeaponFirstSectionId, secondWeaponSecondSectionId, secondWeaponThirdSectionId,
    thirdWeaponFirstSectionId, thirdWeaponSecondSectionId, thirdWeaponThirdSectionId,
    equipment, features,
    statChecker, statChecker3, attackSectionWeaponAdder, attackSectionWeaponPicker,
    biggerWeaponStatDecider, language_adder, language_adder_2,
  } = ctx;

  equipment.push("Longbow w/ quiver of 20 arrows");
  document.getElementById(firstWeaponFirstSectionId).value = "Longbow";
  statChecker(dexterityModifier + 2, firstWeaponSecondSectionId);
  statChecker3(dexterityModifier, firstWeaponThirdSectionId, "1d8", "P");
  if (random > 0.5) {
    equipment.push("Scale mail");
  } else {
    equipment.push("Leather armor");
  }
  if (random2 > 0.91) {
    features.push(
      "Favored Enemy: Your favored enemies are dragons, you have advantage on Survival checks to track them, as well as INT checks to recall information about them. You also learn the language of your favored enemy."
    );
    language_adder_2(language_adder("Draconic"));
  } else if (random2 > 0.78) {
    features.push(
      "Favored Enemy: Your favored enemies are beasts, you have advantage on Survival checks to track them, as well as INT checks to recall information about them. You also learn the language of your favored enemy, if they have one."
    );
  } else if (random2 > 0.65) {
    features.push(
      "Favored Enemy: Your favored enemies are celestials, you have advantage on Survival checks to track them, as well as INT checks to recall information about them. You also learn the language of your favored enemy."
    );
    language_adder_2(language_adder("Celestial"));
  } else if (random2 > 0.52) {
    features.push(
      "Favored Enemy: Your favored enemies are fiends, you have advantage on Survival checks to track them, as well as INT checks to recall information about them. You also learn the language of your favored enemy."
    );
    language_adder_2(language_adder("Abyssal"));
  } else if (random2 > 0.39) {
    features.push(
      "Favored Enemy: Your favored enemies are elementals, you have advantage on Survival checks to track them, as well as INT checks to recall information about them. You also learn the language of your favored enemy."
    );
    language_adder_2(language_adder("Primordial"));
  } else if (random2 > 0.26) {
    features.push(
      "Favored Enemy: Your favored enemies are goblins and orcs, you have advantage on Survival checks to track them, as well as INT checks to recall information about them. You also learn the language of your favored enemy."
    );
    language_adder_2(language_adder("Orc"));
  } else if (random2 > 0.13) {
    features.push(
      "Favored Enemy: Your favored enemies are undead, you have advantage on Survival checks to track them, as well as INT checks to recall information about them. You also learn the language of your favored enemy."
    );
  } else {
    features.push(
      "Favored Enemy: Your favored enemies are giants, you have advantage on Survival checks to track them, as well as INT checks to recall information about them. You also learn the language of your favored enemy."
    );
    language_adder_2(language_adder("Giant"));
  }
  if (random3 > 0.91) {
    features.push(
      "Natural Explorer: Favored terrain is the Underdark, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been."
    );
  } else if (random3 > 0.78) {
    features.push(
      "Natural Explorer: Favored terrain is the Artic, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been."
    );
  } else if (random3 > 0.65) {
    features.push(
      "Natural Explorer: Favored terrain is the Coast, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been."
    );
  } else if (random3 > 0.52) {
    features.push(
      "Natural Explorer: Favored terrain is the Desert, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been."
    );
  } else if (random3 > 0.39) {
    features.push(
      "Natural Explorer: Favored terrain is the Forest, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been."
    );
  } else if (random3 > 0.26) {
    features.push(
      "Natural Explorer: Favored terrain is the Grasslands, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been."
    );
  } else if (random3 > 0.13) {
    features.push(
      "Natural Explorer: Favored terrain is the Mountains, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been."
    );
  } else {
    features.push(
      "Natural Explorer: Favored terrain is the Swamp, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been."
    );
  }
  if (random4 > 0.5) {
    equipment.push("Dungeoneer's pack");
  } else {
    equipment.push("Explorer's pack");
  }
  if (random5 > 0.5) {
    equipment.push("Two shortswords");
    document.getElementById(secondWeaponFirstSectionId).value = "Shortsword";
    statChecker(
      biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2,
      secondWeaponSecondSectionId
    );
    statChecker3(
      biggerWeaponStatDecider(dexterityModifier, strengthModifier),
      secondWeaponThirdSectionId,
      "1d6",
      "S"
    );
  } else {
    attackSectionWeaponAdder(
      attackSectionWeaponPicker(simpleWeaponsArray),
      secondWeaponFirstSectionId,
      secondWeaponSecondSectionId,
      secondWeaponThirdSectionId
    );
    attackSectionWeaponAdder(
      attackSectionWeaponPicker(simpleWeaponsArray),
      thirdWeaponFirstSectionId,
      thirdWeaponSecondSectionId,
      thirdWeaponThirdSectionId
    );
    if (
      document.getElementById(secondWeaponFirstSectionId).value ===
      document.getElementById(thirdWeaponFirstSectionId).value
    ) {
      equipment.pop();
      equipment.pop();
      equipment.push("Two " + document.getElementById(secondWeaponFirstSectionId).value);
      if (
        document.getElementById(secondWeaponFirstSectionId).value === "Longbow" ||
        document.getElementById(secondWeaponFirstSectionId).value === "Shortbow"
      ) {
        equipment.push("Quiver of 40 arrows");
      } else if (
        document.getElementById(secondWeaponFirstSectionId).value === "Light CB" ||
        document.getElementById(secondWeaponFirstSectionId).value === "Heavy CB" ||
        document.getElementById(secondWeaponFirstSectionId).value === "Hand CB"
      ) {
        equipment.push("Quiver of 40 bolts");
      }
      document.getElementById(thirdWeaponFirstSectionId).value = "";
      document.getElementById(thirdWeaponSecondSectionId).value = "";
      document.getElementById(thirdWeaponThirdSectionId).value = "";
    }
  }
}

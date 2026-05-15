import { stat_checker, stat_checker_3 } from "../util/stat-checkers.js";

export function apply_ranger_equipment(ctx) {
  const {
    features, equipment,
    dexterityModifier,
    random, random2,
    language_adder, language_adder_2,
  } = ctx;

  equipment.push("Two shortswords");
  document.getElementById("form78_1").value = "Shortsword"; // 2nd weapon 1st section
  stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
  stat_checker_3(dexterityModifier, "form74_1", "1d6", "S"); // 2nd weapon 3rd section
  equipment.push("Longbow w/ quiver of 20 arrows");
  document.getElementById("form79_1").value = "Longbow"; // 1st weapon 1st section
  stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
  stat_checker_3(dexterityModifier, "form76_1", "1d8", "P"); // 1st weapon 3rd section
  if (random > 0.5) {
    equipment.push("Scale mail");
    equipment.push("Dungeoneer's pack");
  } else {
    equipment.push("Leather armor");
    equipment.push("Explorer's pack");
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

  if (random > 0.91) {
    features.push(
      "Natural Explorer: Favored terrain is the Underdark, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been."
    );
  } else if (random > 0.78) {
    features.push(
      "Natural Explorer: Favored terrain is the Artic, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been."
    );
  } else if (random > 0.65) {
    features.push(
      "Natural Explorer: Favored terrain is the Coast, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been."
    );
  } else if (random > 0.52) {
    features.push(
      "Natural Explorer: Favored terrain is the Desert, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been."
    );
  } else if (random > 0.39) {
    features.push(
      "Natural Explorer: Favored terrain is the Forest, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been."
    );
  } else if (random > 0.26) {
    features.push(
      "Natural Explorer: Favored terrain is the Grasslands, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been."
    );
  } else if (random > 0.13) {
    features.push(
      "Natural Explorer: Favored terrain is the Mountains, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been."
    );
  } else {
    features.push(
      "Natural Explorer: Favored terrain is the Swamp, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been."
    );
  }
}

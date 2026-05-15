import { stat_checker, stat_checker_3 } from "../util/stat-checkers.js";

export function apply_rogue_equipment(ctx) {
  const {
    features, spellcastingSection, equipment,
    dexterityModifier, charismaModifier, intelligenceModifier, wisdomModifier,
    random, tool_adder, tool_adder_2,
    language_adder, language_adder_2,
  } = ctx;

  tool_adder_2(tool_adder("thieves' tools"));
  equipment.push("Rapier");
  document.getElementById("form79_1").value = "Rapier"; // 1st weapon 1st section
  stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
  stat_checker_3(dexterityModifier, "form76_1", "1d8", "P"); // 1st weapon 3rd section
  equipment.push("Leather armor");
  equipment.push("Two daggers");
  document.getElementById("form78_1").value = "Dagger"; // 2nd weapon 1st section
  stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
  stat_checker_3(dexterityModifier, "form74_1", "1d4", "P"); // 2nd weapon 3rd section
  equipment.push("Shortbow w/ quiver of 20 arrows");
  document.getElementById("form77_1").value = "Shortbow"; // 3rd weapon 1st section
  stat_checker(dexterityModifier + 2, "form66_1"); // 3rd weapon 2nd section
  stat_checker_3(dexterityModifier, "form75_1", "1d6", "P"); // 3rd weapon 3rd section
  features.push(
    "Sneak Attack: If an enemy is getting flanked or you have advantage on the attack, you can use your sneak attack dice (1d6) on the attack (once a turn). The weapon must be a finesse or ranged weapon."
  );
  spellcastingSection.push(
    "Sneak Attack: 1d6 to first attack roll of the round that has advantage and hits."
  );
  language_adder_2(language_adder("Thieves' Cant"));
  features.push(
    "Thieves' Cant: You know the secret code of thieves and rogues everywhere, and the secret signs and jargon associated with it."
  );
  if (random > 0.5) {
    features.push(
      "Expertise: Your two skills of expertise are Stealth and Perception. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies."
    );
    equipment.push("Thieves' tools");
    stat_checker(dexterityModifier + 4, "form32_1");
    stat_checker(wisdomModifier + 4, "form43_1");
  } else if (document.getElementById("form17_1").checked === true) {
    features.push(
      "Expertise: Your two skills of expertise are Stealth and Deception. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies."
    );
    stat_checker(dexterityModifier + 4, "form32_1");
    stat_checker(charismaModifier + 4, "form36_1");
    equipment.push("Thieves' tools");
  } else if (document.getElementById("form14_1").checked === true) {
    features.push(
      "Expertise: Your two skills of expertise are Stealth and Investigation. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies."
    );
    stat_checker(dexterityModifier + 4, "form32_1");
    stat_checker(intelligenceModifier + 4, "form31_1");
    equipment.push("Thieves' tools");
  } else {
    features.push(
      "Expertise: Your two skills of expertise are Stealth and Thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies."
    );
    stat_checker(dexterityModifier + 4, "form32_1");
    equipment.push("Thieves' tools (+4)");
  } /* Levi N. Blodgett */
}

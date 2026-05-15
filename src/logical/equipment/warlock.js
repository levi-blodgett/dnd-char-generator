import { stat_checker, stat_checker_3 } from "../util/stat-checkers.js";

export function apply_warlock_equipment(ctx) {
  const {
    features, equipment,
    strength, dexterity, strengthModifier, dexterityModifier,
    random2,
  } = ctx;

  equipment.push("Two daggers");
  equipment.push("Component pouch");
  equipment.push("Leather armor");
  if (strength > dexterity) {
    document.getElementById("form77_1").value = "Dagger"; // 3rd weapon 1st section
    stat_checker(strengthModifier + 2, "form66_1"); // 3rd weapon 2nd section
    stat_checker_3(strengthModifier, "form75_1", "1d4", "P"); // 3rd weapon 3rd section
    equipment.push("Handaxe");
    document.getElementById("form78_1").value = "Handaxe"; // 2nd weapon 1st section
    stat_checker(strengthModifier + 2, "form65_1"); // 2nd weapon 2nd section
    stat_checker_3(strengthModifier, "form74_1", "1d6", "S"); // 2nd weapon 3rd section
    equipment.push("Mace");
    document.getElementById("form79_1").value = "Mace"; // 1st weapon 1st section
    stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
    stat_checker_3(strengthModifier, "form76_1", "1d6", "B"); // 1st weapon 3rd section
    equipment.push("Scholar's pack");
  } else {
    equipment.push("Quarterstaff");
    document.getElementById("form79_1").value = "Quarterstaff"; // 1st weapon 1st section
    stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
    stat_checker_3(strengthModifier, "form76_1", "1d6", "B"); // 1st weapon 3rd section
    equipment.push("Dungeoneer's pack");
    document.getElementById("form77_1").value = "Dagger"; // 3rd weapon 1st section
    stat_checker(dexterityModifier + 2, "form66_1"); // 3rd weapon 2nd section
    stat_checker_3(dexterityModifier, "form75_1", "1d4", "P"); // 3rd weapon 3rd section
    equipment.push("Light crossbow w/ 20 bolts");
    document.getElementById("form78_1").value = "Light CB"; // 2nd weapon 1st section
    stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
    stat_checker_3(dexterityModifier, "form74_1", "1d8", "P"); // 2nd weapon 3rd section
  }
  if (random2 > 0.666) {
    features.push("Otherworldly Patron: Archfey.");
    document.getElementById("form193_3").value = "Faerie Fire";
    document.getElementById("form159_3").value = "Sleep";
    features.push(
      "Fey Presence (1/r): As an action, you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. If a target fails the saving throw, they are charmed or frightened by you (your choice) until the end of your next turn."
    );
  } else if (random2 > 0.333) {
    features.push("Otherworldly Patron: Fiend.");
    document.getElementById("form193_3").value = "Burning Hands";
    document.getElementById("form159_3").value = "Command";
    features.push(
      "Dark One's Blessing: When you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your CHA modifier + your warlock level."
    );
  } else {
    features.push("Otherworldly Patron: Great Old One.");
    document.getElementById("form193_3").value = "Dissonant Whispers";
    document.getElementById("form159_3").value = "Tasha's Hideous Laughter";
    features.push(
      "Awakened Mind: You can communicate telepathically with any creature you can see within 30 feet of you. You don't need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language."
    );
  }
}

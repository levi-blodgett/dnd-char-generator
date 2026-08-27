import { stat_checker, stat_checker_3, stat_checker_no_id } from "../util/stat-checkers.js";

export function apply_fighter_equipment(ctx) {
  const {
    features, spellcastingSection, equipment,
    strength, dexterity, constitution,
    strengthModifier, dexterityModifier,
    random, random2,
  } = ctx;

  features.push(
    "Second Wind (1/r): On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level."
  );
  spellcastingSection.push("Second Wind (1/r): Use a bonus action to gain 1d10 + 1 hp.");
  spellcastingSection.push(" ");
  if (strength > dexterity) {
    equipment.push("Chain mail");
    equipment.push("Two handaxes");
    document.getElementById("form78_1").value = "Handaxe"; // 2nd weapon 1st section
    stat_checker(strengthModifier + 2, "form65_1"); // 2nd weapon 2nd section
    stat_checker_3(strengthModifier, "form74_1", "1d6", "S"); // 2nd weapon 3rd section
    if (strength > constitution) {
      equipment.push("Dungeoneer's pack");
      features.push(
        "Fighting Style: Great Weapon Fighting, when you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must be a two-handed weapon or have the versatile property to gain this benefit."
      );
      spellcastingSection.push(
        "Great Weapon Fighting: Reroll damage rolls that are a 1 or a 2, once per roll."
      );

      equipment.push("Greatsword");
      document.getElementById("form79_1").value = "Greatsword"; // 1st weapon 1st section
      stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
      stat_checker_3(strengthModifier, "form76_1", "2d6", "S"); // 1st weapon 3rd section

      equipment.push("Maul");
      document.getElementById("form77_1").value = "Maul"; // 3rd weapon 1st section
      stat_checker(strengthModifier + 2, "form66_1"); // 3rd weapon 2nd section
      stat_checker_3(strengthModifier, "form75_1", "2d6", "B"); // 3rd weapon 3rd section
    } else {
      equipment.push("Explorer's pack");
      if (random2 > 0.5) {
        features.push(
          "Fighting Style: Dueling, when you are wielding a melee wepaon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon."
        );
        spellcastingSection.push("Dueling: +2 bonus to damage rolls");
      } else {
        features.push(
          "Fighting Style: Protection, When a creature you can see attacks a target other than you that is within 5 feet o f you, you can use your reaction to impose disadvantage on the attack roll. You must be w ielding a shield."
        );
        spellcastingSection.push(
          "Protection: Can use reaction to impose DA on the attack roll of an enemy."
        );
      }
      if (random > 0.75) {
        equipment.push("Shield");
        equipment.push("Warhammer");
        document.getElementById("form79_1").value = "Warhammer"; // 1st weapon 1st section
        stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(strengthModifier, "form76_1", "1d8", "B"); // 1st weapon 3rd section
      } else if (random > 0.5) {
        equipment.push("Shield");
        equipment.push("Longsword");
        document.getElementById("form79_1").value = "Longsword"; // 1st weapon 1st section
        stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(strengthModifier, "form76_1", "1d8", "S"); // 1st weapon 3rd section
      } else if (random > 0.25) {
        equipment.push("Shield");
        equipment.push("Flail");
        document.getElementById("form79_1").value = "Flail"; // 1st weapon 1st section
        stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(strengthModifier, "form76_1", "1d8", "B"); // 1st weapon 3rd section
      } else {
        equipment.push("Shield");
        equipment.push("Morningstar");
        document.getElementById("form79_1").value = "Morningstar"; // 1st weapon 1st section
        stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
        stat_checker_3(strengthModifier, "form76_1", "1d8", "P"); // 1st weapon 3rd section
      }
    }
  } else {
    equipment.push("Leather armor");
    equipment.push("Longbow w/ 20 arrows");
    if (random > 0.5) {
      document.getElementById("form78_1").value = "Longbow"; // 2nd weapon 1st section
      stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
      stat_checker_3(dexterityModifier, "form74_1", "1d8", "P"); // 2nd weapon 3rd section
      features.push(
        "Fighting Style: Two Weapon Fighting, can add your ability modifier to the damage of the second attack."
      );
      spellcastingSection.push(
        "Two Weapon Fighting: +" + dexterityModifier + " to offhand attacks."
      );
      equipment.push("Two scimitars");
      document.getElementById("form79_1").value = "Scimitar (L/R)"; // 1st weapon 1st section
      stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
      stat_checker_3(dexterityModifier, "form76_1", "1d6", "P"); // 1st weapon 3rd section
      equipment.push("Light crossbow w/ 20 bolts");
      document.getElementById("form77_1").value = "Light CB"; // 1st weapon 1st section
      stat_checker(dexterityModifier + 2, "form66_1"); // 1st weapon 2nd section
      stat_checker_3(dexterityModifier, "form75_1", "1d8", "P"); // 1st weapon 3rd section
      equipment.push("Dungeoneer's pack");
    } else {
      features.push(
        "Fighting Style: Archery, gain a +2 bonus to attack rolls you make with ranged weapons."
      );
      spellcastingSection.push("Archery: +2 ranged attack bonus");
      spellcastingSection.push(" ");
      spellcastingSection.push(
        "Shortsword  " +
          stat_checker_no_id(dexterityModifier + 2) +
          "  1d8" +
          stat_checker_no_id(dexterityModifier) +
          " P"
      );
      equipment.push("Hand crossbow");
      document.getElementById("form79_1").value = "Hand CB"; // 1st weapon 1st section
      stat_checker(dexterityModifier + 4, "form64_1"); // 1st weapon 2nd section
      stat_checker_3(dexterityModifier, "form76_1", "1d6", "P"); // 1st weapon 3rd section
      equipment.push("Light crossbow w/ 20 bolts");
      document.getElementById("form77_1").value = "Light CB"; // 3rd weapon 1st section
      stat_checker(dexterityModifier + 4, "form66_1"); // 3rd weapon 2nd section
      stat_checker_3(dexterityModifier, "form75_1", "1d8", "P"); // 3rd weapon 3rd section
      equipment.push("Shortsword");
      equipment.push("Explorer's pack");
      document.getElementById("form78_1").value = "Longbow"; // 2nd weapon 1st section
      stat_checker(dexterityModifier + 4, "form65_1"); // 2nd weapon 2nd section
      stat_checker_3(dexterityModifier, "form74_1", "1d8", "P"); // 2nd weapon 3rd section
    }
  }
}

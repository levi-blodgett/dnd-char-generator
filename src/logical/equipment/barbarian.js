import { stat_checker, stat_checker_3 } from "../util/stat-checkers.js";

export function apply_barbarian_equipment(ctx) {
  const { features, spellcastingSection, equipment, dexterity, strength, dexterityModifier, strengthModifier, random } = ctx;

  features.push(
    "Rage (2/lr): On your turn, you can enter a rage as a Bonus Action. While raging, you gain the following benefits if you aren't wearing heavy armor: You have advantage on Strength Checks and Strength saving throws. When you make a melee weapon Attack using Strength, you gain a +2 bonus to the damage roll. This bonus increases as you level. You have Resistance to bludgeoning, piercing, and slashing damage. If you are able to cast Spells, you can't cast them or concentrate on them while raging. See player's handbook for more details."
  );
  features.push(
    "Unarmored Defense: While you are not wearing any armor, your armor class equals 10 + your dexterity modifier + your constitution modifier, usable with shield.."
  );
  spellcastingSection.push(
    "Rage (2/lr): Use your bonus action to rage and gain +2 to melee damage rolls using strength, and gain defensive benefits outlined in the features section."
  );
  if (dexterity > strength) {
    if (
      document.getElementById("form90_1").value === "Sailor" ||
      document.getElementById("form90_1").value === "Pirate" ||
      document.getElementById("form90_1").value === "Gladiator"
    ) {
      equipment.push("Trident");
      document.getElementById("form79_1").value = "Trident";
      stat_checker(dexterityModifier + 2, "form64_1");
      stat_checker_3(dexterityModifier, "form76_1", "1d6/8", "P");

      equipment.push("Heavy Crossbow");
      document.getElementById("form78_1").value = "Heavy CB";
      stat_checker(dexterityModifier + 2, "form65_1");
      stat_checker_3(dexterityModifier, "form74_1", "1d10", "P");
    } else {
      equipment.push("War pick");
      document.getElementById("form79_1").value = "War Pick";
      stat_checker(dexterityModifier + 2, "form64_1");
      stat_checker_3(dexterityModifier, "form76_1", "1d8", "P");

      equipment.push("Longbow");
      document.getElementById("form78_1").value = "Longbow";
      stat_checker(dexterityModifier + 2, "form65_1");
      stat_checker_3(dexterityModifier, "form74_1", "1d8", "P");
    }
  } else {
    if (random > 0.666) {
      equipment.push("Greataxe");
      document.getElementById("form79_1").value = "Greataxe";
      stat_checker(strengthModifier + 2, "form64_1");
      stat_checker_3(strengthModifier, "form76_1", "1d12", "S");
    } else if (random > 0.333) {
      equipment.push("Greatsword");
      document.getElementById("form79_1").value = "Greatsword";
      stat_checker(strengthModifier + 2, "form64_1");
      stat_checker_3(strengthModifier, "form76_1", "2d6", "S");
    } else {
      equipment.push("Maul");
      document.getElementById("form79_1").value = "Maul";
      stat_checker(strengthModifier + 2, "form64_1");
      stat_checker_3(strengthModifier, "form76_1", "2d6", "B");
    }
    equipment.push("Two handaxes");
    document.getElementById("form78_1").value = "Handaxe";
    stat_checker(strengthModifier + 2, "form65_1");
    stat_checker_3(strengthModifier, "form74_1", "1d6", "S");
  }
}

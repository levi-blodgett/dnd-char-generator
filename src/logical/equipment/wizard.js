import { stat_checker, stat_checker_3 } from "../util/stat-checkers.js";

export function apply_wizard_equipment(ctx) {
  const {
    features, equipment,
    charName, dexterityModifier, strengthModifier,
    random, random2,
  } = ctx;

  let armorClassDelta = 10 + dexterityModifier;

  features.push(
    "Arcane Recovery (1/d): When you finish a short rest once a day, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher."
  );
  if (random > 0.5) {
    equipment.push("Scholar's pack");
    equipment.push("Quarterstaff");
    document.getElementById("form79_1").value = "Quarterstaff"; // 1st weapon 1st section
    stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
    stat_checker_3(strengthModifier, "form76_1", "1d6", "B"); // 1st weapon 3rd section
  } else {
    equipment.push("Explorer's pack");
    equipment.push("Dagger");
    document.getElementById("form79_1").value = "Dagger"; // 1st weapon 1st section
    stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
    stat_checker_3(dexterityModifier, "form76_1", "1d4", "P"); // 1st weapon 3rd section
  }
  if (random2 > 0.8) {
    equipment.push("Crumpled up notes - Spellbook");
    equipment.push("Lightning in a bottle - Focus");
  } else if (random2 > 0.6) {
    equipment.push("Various colorful tattoos - Spellbook");
    equipment.push("Crystal with pink water inside - Focus");
  } else if (random2 > 0.4) {
    equipment.push("Leather-bound tome with suspiciously red ink - Spellbook");
    equipment.push("Metallic rod with amber stone on top - Focus");
  } else if (random2 > 0.2) {
    equipment.push(
      "Thick black leather with platinum reinforced corners, silvery ink, the front embossed with your name, " +
        charName +
        " - Spellbook"
    );
    equipment.push("Specially carved, gnarled, wooden staff - Focus");
  } else {
    equipment.push("Light leather book with gem-encrusted spine - Spellbook");
    equipment.push("Partially petrified willow wand - Focus");
  }

  return { armorClassDelta };
}

import { stat_checker, stat_checker_3 } from "../util/stat-checkers.js";

export function apply_druid_equipment(ctx) {
  const {
    features, equipment, profsAndLangs,
    strength, dexterity, strengthModifier, dexterityModifier,
    random, random2, tool_adder, tool_adder_2,
  } = ctx;

  tool_adder_2(tool_adder("herbalism kit"));
  profsAndLangs.languages.push("Druidic");
  features.push(
    "Druidic: You know the language Druidic, you can see hidden messages of druids and speak the language. Those who don't know Druidic can see the message with a succesful DC 15 Wisdom check, but cannot decipher it."
  );
  equipment.push("Leather armor");
  equipment.push("Explorer's pack");
  if (random2 > 0.5) {
    equipment.push("Wooden shield");
  } else {
    equipment.push("Shortbow");
    document.getElementById("form78_1").value = "Shortbow"; // 2nd weapon 1st section
    stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
    stat_checker_3(dexterityModifier, "form74_1", "1d6", "P"); // 2nd weapon 3rd section
  }
  if (strength > dexterity) {
    equipment.push("Quarterstaff");
    document.getElementById("form79_1").value = "Quarterstaff"; // 1st weapon 1st section
    stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
    stat_checker_3(strengthModifier, "form76_1", "1d6/10", "B"); // 1st weapon 3rd section
    equipment.push("Petrified bear heart - Focus");
  } else if (random > 0.8) {
    equipment.push("Scimitar");
    document.getElementById("form79_1").value = "Scimitar"; // 1st weapon 1st section
    if (dexterity > strength) {
      stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
      stat_checker_3(dexterityModifier, "form76_1", "1d6", "S"); // 1st weapon 3rd section
    } else {
      stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
      stat_checker_3(strengthModifier, "form76_1", "1d6", "S"); // 1st weapon 3rd section
    }
    equipment.push("Yew branch - Focus");
  } else if (random > 0.6) {
    equipment.push("Spear");
    document.getElementById("form79_1").value = "Spear"; // 1st weapon 1st section
    stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
    stat_checker_3(dexterityModifier, "form76_1", "1d6", "P"); // 1st weapon 3rd section
    equipment.push("Opalized oak wand - Focus");
  } else if (random > 0.2) {
    equipment.push("Scimitar");
    document.getElementById("form79_1").value = "Scimitar"; // 1st weapon 1st section
    if (dexterity > strength) {
      stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
      stat_checker_3(dexterityModifier, "form76_1", "1d6", "S"); // 1st weapon 3rd section
    } else {
      stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
      stat_checker_3(strengthModifier, "form76_1", "1d6", "S"); // 1st weapon 3rd section
    }
    equipment.push("Dreamcatcher willow totem - Focus");
  } else if (random <= 0.2) {
    equipment.push("Spear");
    document.getElementById("form79_1").value = "Spear"; // 1st weapon 1st section
    stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
    stat_checker_3(dexterityModifier, "form76_1", "1d6", "P"); // 1st weapon 3rd section
    equipment.push("Animal totem staff - Focus");
  }
}

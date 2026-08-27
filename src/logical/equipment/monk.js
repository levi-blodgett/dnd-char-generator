import { stat_checker, stat_checker_3 } from "../util/stat-checkers.js";
import { random_musical_instrument } from "../util/random-musical-instrument.js";

const ARTISAN_TOOLS = [
  "Alchemist's supplies", "Brewer's supplies", "Calligrapher's supplies",
  "Carpenter's tools", "Cartographer's tools", "Cobbler's tools",
  "Cook's utensils", "Glassblower's tools", "Jeweler's tools",
  "Leatherworker's tools", "Mason's tools", "Painter's supplies",
  "Potter's tools", "Smith's tools", "Tinker's tools",
  "Weaver's tools", "Woodcarver's tools",
];

export function apply_monk_equipment(ctx) {
  const {
    features, spellcastingSection, equipment,
    dexterityModifier, random2, tool_adder, tool_adder_2,
  } = ctx;

  features.push(
    "Unarmored Defense: While you are not wearing any armor or shields, your armor class equals 10 + your dexterity modifier + your wisdom modifier."
  );
  features.push(
    "Martial Arts: You gain the following benefits when you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield:\rYou can use DEX instead of STR for atk and dmg rolls of your unarmed strikes or monk weapons.\rYou can roll a d4 in place of the normal dmg of your unarmed strike or monk weapon.\rWhenever you use the Attack action with an unarmed strike or monk weapon, you can use your bonus action to make an unarmed strike as well."
  );
  spellcastingSection.push(
    "Martial Arts: When you attack with the above weapons, you can use your bonus action to make an unarmed strike."
  );

  const musicalinstrument = random_musical_instrument();
  tool_adder_2(tool_adder(musicalinstrument));

  // Original random_artisan_tool() reassigns the outer `random` to Math.floor(Math.random()*17).
  // The weapon selection below uses that integer value for its comparisons (> 0.666 etc.).
  const artisanRoll = Math.floor(Math.random() * 17);
  const randomAritsanTool = ARTISAN_TOOLS[artisanRoll] || "Woodcarver's tools";
  tool_adder_2(tool_adder(randomAritsanTool));

  document.getElementById("form78_1").value = "Unarmed"; // 2nd weapon 1st section
  stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
  stat_checker_3(dexterityModifier, "form74_1", "1d4", "B"); // 2nd weapon 3rd section
  if (random2 > 0.5) {
    equipment.push("Dungeoneer's pack");
  } else {
    equipment.push("Explorer's pack");
  }
  equipment.push("Ten darts");
  document.getElementById("form77_1").value = "Dart"; // 3rd weapon 1st section
  stat_checker(dexterityModifier + 2, "form66_1"); // 3rd weapon 2nd section
  stat_checker_3(dexterityModifier, "form75_1", "1d4", "P"); // 3rd weapon 3rd section
  if (artisanRoll > 0.666) {
    equipment.push("Nunchaku");
    document.getElementById("form79_1").value = "Nunchaku"; // 1st weapon 1st section
    stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
    stat_checker_3(dexterityModifier, "form76_1", "1d4", "B"); // 1st weapon 3rd section
  } else if (artisanRoll > 0.333) {
    equipment.push("Kama");
    document.getElementById("form79_1").value = "Kama"; // 1st weapon 1st section
    stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
    stat_checker_3(dexterityModifier, "form76_1", "1d4", "S"); // 1st weapon 3rd section
  } else {
    equipment.push("Quarterstaff");
    document.getElementById("form79_1").value = "Quarterstaff"; // 1st weapon 1st section
    stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
    stat_checker_3(dexterityModifier, "form76_1", "1d6", "B"); // 1st weapon 3rd section
  }

  return { musicalinstrument, randomAritsanTool };
}

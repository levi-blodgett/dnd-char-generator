import { add_click } from "../checkboxes.js";
import { stat_checker, stat_checker_2 } from "./util/stat-checkers.js";

export function apply_class_combat(classAndLevel, {
  strengthModifier, dexterityModifier, constitutionModifier,
  intelligenceModifier, wisdomModifier, charismaModifier,
}) {
  // Saving throws
  if (["Barbarian 1","Fighter 1","Monk 1","Ranger 1"].includes(classAndLevel)) {
    stat_checker(strengthModifier + 2, "form42_1"); add_click(15);
  } else { stat_checker(strengthModifier, "form42_1"); }

  if (["Bard 1","Rogue 1","Ranger 1","Monk 1"].includes(classAndLevel)) {
    stat_checker(dexterityModifier + 2, "form54_1"); add_click(18);
  } else { stat_checker(dexterityModifier, "form54_1"); }

  if (["Barbarian 1","Fighter 1","Sorcerer 1"].includes(classAndLevel)) {
    stat_checker(constitutionModifier + 2, "form41_1"); add_click(22);
  } else { stat_checker(constitutionModifier, "form41_1"); }

  if (["Druid 1","Rogue 1","Wizard 1"].includes(classAndLevel)) {
    stat_checker(intelligenceModifier + 2, "form52_1"); add_click(6);
  } else { stat_checker(intelligenceModifier, "form52_1"); }

  if (["Druid 1","Cleric 1","Wizard 1","Paladin 1","Warlock 1"].includes(classAndLevel)) {
    stat_checker(wisdomModifier + 2, "form39_1"); add_click(10);
  } else { stat_checker(wisdomModifier, "form39_1"); }

  if (["Bard 1","Cleric 1","Sorcerer 1","Paladin 1","Warlock 1"].includes(classAndLevel)) {
    stat_checker(charismaModifier + 2, "form51_1"); add_click(3);
  } else { stat_checker(charismaModifier, "form51_1"); }

  // Hit die and starting hp
  if (classAndLevel === "Barbarian 1") {
    stat_checker_2(constitutionModifier, "form89_1", "1d12");
    return 12 + constitutionModifier;
  } else if (["Fighter 1","Paladin 1","Ranger 1"].includes(classAndLevel)) {
    stat_checker_2(constitutionModifier, "form89_1", "1d10");
    return 10 + constitutionModifier;
  } else if (["Bard 1","Cleric 1","Druid 1","Monk 1","Rogue 1","Warlock 1"].includes(classAndLevel)) {
    stat_checker_2(constitutionModifier, "form89_1", "1d8");
    return 8 + constitutionModifier;
  } else {
    stat_checker_2(constitutionModifier, "form89_1", "1d6");
    return 6 + constitutionModifier;
  }
}

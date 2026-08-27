import { stat_checker, stat_checker_3 } from "../util/stat-checkers.js";
import { random_musical_instrument } from "../util/random-musical-instrument.js";

export function apply_bard_equipment(ctx) {
  const {
    features, spellcastingSection, equipment,
    strength, dexterity, strengthModifier, dexterityModifier, charismaModifier,
    random2, tool_adder, tool_adder_2,
  } = ctx;

  const bardModifier = charismaModifier < 1 ? 1 : charismaModifier;

  features.push(
    "Bardic Inspiration (" +
      bardModifier +
      "/lr): Use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes."
  );
  spellcastingSection.push(
    "Bardic Inspiration (" +
      bardModifier +
      "/lr): Use a bonus action to give another creature an inspiration die of 1d6."
  );

  const musicalinstrument = random_musical_instrument();
  tool_adder_2(tool_adder(musicalinstrument.toLowerCase()));
  equipment.push(musicalinstrument + " - Focus");

  const musicalinstrument2 = random_musical_instrument();
  tool_adder_2(tool_adder(musicalinstrument2.toLowerCase()));

  let musicalinstrument3;
  if (Math.random() > 0.5) {
    tool_adder_2(tool_adder("voice"));
  } else {
    musicalinstrument3 = random_musical_instrument();
    tool_adder_2(tool_adder(musicalinstrument3.toLowerCase()));
  }

  equipment.push("Leather armor");
  equipment.push("Dagger");
  document.getElementById("form78_1").value = "Dagger";
  if (strength > dexterity) {
    stat_checker(strengthModifier + 2, "form65_1");
    stat_checker_3(strengthModifier, "form74_1", "1d4", "P");
    equipment.push("Longsword");
    document.getElementById("form79_1").value = "Longsword";
    stat_checker(strengthModifier + 2, "form64_1");
    stat_checker_3(strengthModifier, "form76_1", "1d8", "S");
  } else {
    equipment.push("Rapier");
    document.getElementById("form79_1").value = "Rapier";
    stat_checker(dexterityModifier + 2, "form64_1");
    stat_checker_3(dexterityModifier, "form76_1", "1d8", "P");
    stat_checker(dexterityModifier + 2, "form65_1");
    stat_checker_3(dexterityModifier, "form74_1", "1d4", "P");
  }

  if (random2 > 0.5) {
    equipment.push("Diplomat's pack");
  } else {
    equipment.push("Entertainer's pack");
  }

  return { bardModifier, musicalinstrument, musicalinstrument2, musicalinstrument3 };
}

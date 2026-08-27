export function apply_saving_throws_and_hp(classAndLevel, ctx) {
  const { strengthModifier, dexterityModifier, constitutionModifier,
    intelligenceModifier, wisdomModifier, charismaModifier,
    statChecker, statChecker2, add_click } = ctx;

  if (classAndLevel === "Barbarian 1" || classAndLevel === "Fighter 1" ||
      classAndLevel === "Monk 1" || classAndLevel === "Ranger 1") {
    statChecker(strengthModifier + 2, "form42_1"); add_click(15);
  } else { statChecker(strengthModifier, "form42_1"); }

  if (classAndLevel === "Bard 1" || classAndLevel === "Rogue 1" ||
      classAndLevel === "Ranger 1" || classAndLevel === "Monk 1") {
    statChecker(dexterityModifier + 2, "form54_1"); add_click(18);
  } else { statChecker(dexterityModifier, "form54_1"); }

  if (classAndLevel === "Barbarian 1" || classAndLevel === "Fighter 1" ||
      classAndLevel === "Sorcerer 1") {
    statChecker(constitutionModifier + 2, "form41_1"); add_click(22);
  } else { statChecker(constitutionModifier, "form41_1"); }

  if (classAndLevel === "Druid 1" || classAndLevel === "Rogue 1" ||
      classAndLevel === "Wizard 1") {
    statChecker(intelligenceModifier + 2, "form52_1"); add_click(6);
  } else { statChecker(intelligenceModifier, "form52_1"); }

  if (classAndLevel === "Druid 1" || classAndLevel === "Cleric 1" ||
      classAndLevel === "Wizard 1" || classAndLevel === "Paladin 1" ||
      classAndLevel === "Warlock 1") {
    statChecker(wisdomModifier + 2, "form39_1"); add_click(10);
  } else { statChecker(wisdomModifier, "form39_1"); }

  if (classAndLevel === "Bard 1" || classAndLevel === "Cleric 1" ||
      classAndLevel === "Sorcerer 1" || classAndLevel === "Paladin 1" ||
      classAndLevel === "Warlock 1") {
    statChecker(charismaModifier + 2, "form51_1"); add_click(3);
  } else { statChecker(charismaModifier, "form51_1"); }

  let hp = 0;
  if (classAndLevel === "Barbarian 1") {
    statChecker2(constitutionModifier, "form89_1", "1d12"); hp = 12 + constitutionModifier;
  } else if (classAndLevel === "Fighter 1" || classAndLevel === "Paladin 1" ||
             classAndLevel === "Ranger 1") {
    statChecker2(constitutionModifier, "form89_1", "1d10"); hp = 10 + constitutionModifier;
  } else if (classAndLevel === "Bard 1" || classAndLevel === "Cleric 1" ||
             classAndLevel === "Druid 1" || classAndLevel === "Monk 1" ||
             classAndLevel === "Rogue 1" || classAndLevel === "Warlock 1") {
    statChecker2(constitutionModifier, "form89_1", "1d8"); hp = 8 + constitutionModifier;
  } else if (classAndLevel === "Wizard 1" || classAndLevel === "Sorcerer 1") {
    statChecker2(constitutionModifier, "form89_1", "1d6"); hp = 6 + constitutionModifier;
  }
  return hp;
}

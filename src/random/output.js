export function write_character(ctx) {
  const {
    statChecker, strengthModifier, dexterityModifier, constitutionModifier,
    intelligenceModifier, wisdomModifier, charismaModifier,
    hp, armorClass, gold, charName, name, newBackground1, classAndLevel, race,
    strength, dexterity, constitution, intelligence, wisdom, charisma,
    alliesAndOrganizations, equipment, proficienciesAndLanguages,
    features, additionalFeatures, alignment, spellcastingSection,
  } = ctx;

  statChecker(strengthModifier, "form56_1");
  statChecker(dexterityModifier, "form59_1");
  statChecker(dexterityModifier, "form88_1");
  statChecker(constitutionModifier, "form58_1");
  statChecker(intelligenceModifier, "form57_1");
  statChecker(wisdomModifier, "form60_1");
  statChecker(charismaModifier, "form55_1");
  document.getElementById("form13_2").value = alliesAndOrganizations.join("\r");
  document.getElementById("form61_1").value = "+2";
  document.getElementById("form80_1").value = hp;
  document.getElementById("form97_1").value = hp;
  document.getElementById("form67_1").value = 1;
  document.getElementById("form91_1").value = 0;
  document.getElementById("form93_1").value = name;
  document.getElementById("form90_1").value = newBackground1;
  document.getElementById("form96_1").value = charName;
  document.getElementById("form8_2").value = charName;
  document.getElementById("form83_1").value = strength;
  document.getElementById("form84_1").value = dexterity;
  document.getElementById("form82_1").value = constitution;
  document.getElementById("form86_1").value = intelligence;
  document.getElementById("form81_1").value = wisdom;
  document.getElementById("form85_1").value = charisma;
  document.getElementById("form95_1").value = race;
  document.getElementById("form68_1").value = gold;
  document.getElementById("form104_1").value = equipment.join("\r\n");
  document.getElementById("form94_1").value = classAndLevel;
  document.getElementById("form105_1").value = proficienciesAndLanguages.join("\r");
  document.getElementById("form106_1").value = features.join("\r\n");
  document.getElementById("form16_2").value = additionalFeatures.join("\r\n");
  document.getElementById("form92_1").value = alignment.join(" ");
  document.getElementById("form73_1").value = armorClass;
  document.getElementById("form103_1").value = spellcastingSection.join("\r\n");
  if (document.getElementById("form7_1").checked === "checked") {
    document.getElementById("form63_1").value = 12 + wisdomModifier;
  } else {
    document.getElementById("form63_1").value = 10 + wisdomModifier;
  }
  if (document.getElementById("form92_1").value === "Neutral Neutral") {
    document.getElementById("form92_1").value = "True Neutral";
  }
}

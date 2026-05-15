export function apply_bard_equipment(ctx) {
  const {
    random, random2, random3,
    strengthModifier, dexterityModifier, charismaModifier,
    firstWeaponFirstSectionId, firstWeaponSecondSectionId, firstWeaponThirdSectionId,
    secondWeaponFirstSectionId, secondWeaponSecondSectionId, secondWeaponThirdSectionId,
    equipment, features, spellcastingSection,
    statChecker, statChecker3,
    biggerWeaponStatDecider, randomMusicalInstrument, toolAdder, toolAdder2,
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
  const musicalinstrument = randomMusicalInstrument();
  toolAdder2(toolAdder(musicalinstrument.toLowerCase()));
  equipment.push(musicalinstrument + " - Focus");
  const musicalinstrument2 = randomMusicalInstrument();
  toolAdder2(toolAdder(musicalinstrument2.toLowerCase()));
  if (random > 0.5) {
    toolAdder2(toolAdder("voice"));
  } else {
    const musicalinstrument3 = randomMusicalInstrument();
    toolAdder2(toolAdder(musicalinstrument3.toLowerCase()));
  }
  equipment.push("Leather armor");
  equipment.push("Dagger");
  document.getElementById(secondWeaponFirstSectionId).value = "Dagger";
  if (random2 > 0.5) {
    statChecker(
      biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2,
      secondWeaponSecondSectionId
    );
    statChecker3(
      biggerWeaponStatDecider(dexterityModifier, strengthModifier),
      secondWeaponThirdSectionId,
      "1d4",
      "P"
    );
    equipment.push("Longsword");
    document.getElementById(firstWeaponFirstSectionId).value = "Longsword";
    statChecker(strengthModifier + 2, firstWeaponSecondSectionId);
    statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d8", "S");
  } else {
    equipment.push("Rapier");
    document.getElementById(firstWeaponFirstSectionId).value = "Rapier";
    statChecker(
      biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2,
      firstWeaponSecondSectionId
    );
    statChecker3(
      biggerWeaponStatDecider(dexterityModifier, strengthModifier),
      firstWeaponThirdSectionId,
      "1d8",
      "P"
    );
    statChecker(
      biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2,
      secondWeaponSecondSectionId
    );
    statChecker3(
      biggerWeaponStatDecider(dexterityModifier, strengthModifier),
      secondWeaponThirdSectionId,
      "1d4",
      "P"
    );
  }
  if (random3 > 0.5) {
    equipment.push("Diplomat's pack");
  } else {
    equipment.push("Entertainer's pack");
  }
}

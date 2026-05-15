export function apply_monk_equipment(ctx) {
  const {
    random, random2,
    strengthModifier, dexterityModifier, wisdomModifier,
    firstWeaponFirstSectionId, firstWeaponSecondSectionId, firstWeaponThirdSectionId,
    secondWeaponFirstSectionId, secondWeaponSecondSectionId, secondWeaponThirdSectionId,
    thirdWeaponFirstSectionId, thirdWeaponSecondSectionId, thirdWeaponThirdSectionId,
    equipment, features, spellcastingSection,
    statChecker, statChecker3,
    biggerWeaponStatDecider, randomMusicalInstrument, random_artisan_tool, toolAdder, toolAdder2,
  } = ctx;

  ctx.armorClass += 10 + dexterityModifier + wisdomModifier;
  features.push(
    "Unarmored Defense: While you are not wearing any armor or shields, your armor class equals 10 + your dexterity modifier + your wisdom modifier."
  );
  features.push(
    "Martial Arts: You gain the following benefits when you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield:\rYou can use DEX instead of STR for atk and dmg rolls of your unarmed strikes or monk weapons.\rYou can roll a d4 in place of the normal dmg of your unarmed strike or monk weapon.\rWhenever you use the Attack action with an unarmed strike or monk weapon, you can use your bonus action to make an unarmed strike as well."
  );
  spellcastingSection.push(
    "Martial Arts: When you attack with the above weapons, you can use your bonus action to make an unarmed strike."
  );
  const musicalinstrument = randomMusicalInstrument();
  toolAdder2(toolAdder(musicalinstrument));
  const randomAritsanTool = random_artisan_tool();
  toolAdder2(toolAdder(randomAritsanTool));
  document.getElementById(secondWeaponFirstSectionId).value = "Unarmed";
  statChecker(
    biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2,
    secondWeaponSecondSectionId
  );
  statChecker3(
    biggerWeaponStatDecider(dexterityModifier, strengthModifier),
    secondWeaponThirdSectionId,
    "1d4",
    "B"
  );
  if (random > 0.5) {
    equipment.push("Dungeoneer's pack");
  } else {
    equipment.push("Explorer's pack");
  }
  equipment.push("Ten darts");
  document.getElementById(thirdWeaponFirstSectionId).value = "Dart";
  statChecker(
    biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2,
    thirdWeaponSecondSectionId
  );
  statChecker3(
    biggerWeaponStatDecider(dexterityModifier, strengthModifier),
    thirdWeaponThirdSectionId,
    "1d4",
    "P"
  );
  if (random2 > 0.666) {
    equipment.push("Nunchaku");
    document.getElementById(firstWeaponFirstSectionId).value = "Nunchaku";
    statChecker(
      biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2,
      firstWeaponSecondSectionId
    );
    statChecker3(
      biggerWeaponStatDecider(dexterityModifier, strengthModifier),
      firstWeaponThirdSectionId,
      "1d4",
      "B"
    );
  } else if (random2 > 0.333) {
    equipment.push("Kama");
    document.getElementById(firstWeaponFirstSectionId).value = "Kama";
    statChecker(
      biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2,
      firstWeaponSecondSectionId
    );
    statChecker3(
      biggerWeaponStatDecider(dexterityModifier, strengthModifier),
      firstWeaponThirdSectionId,
      "1d4",
      "S"
    );
  } else {
    equipment.push("Quarterstaff");
    document.getElementById(firstWeaponFirstSectionId).value = "Quarterstaff";
    statChecker(
      biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2,
      firstWeaponSecondSectionId
    );
    statChecker3(
      biggerWeaponStatDecider(dexterityModifier, strengthModifier),
      firstWeaponThirdSectionId,
      "1d6",
      "B"
    );
  }
}

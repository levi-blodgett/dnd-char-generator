export function apply_rogue_equipment(ctx) {
  const {
    random, random2, random3, random4,
    strengthModifier, dexterityModifier, charismaModifier, wisdomModifier, intelligenceModifier,
    firstWeaponFirstSectionId, firstWeaponSecondSectionId, firstWeaponThirdSectionId,
    secondWeaponFirstSectionId, secondWeaponSecondSectionId, secondWeaponThirdSectionId,
    thirdWeaponFirstSectionId, thirdWeaponSecondSectionId, thirdWeaponThirdSectionId,
    equipment, features, spellcastingSection,
    statChecker, statChecker3,
    biggerWeaponStatDecider, toolAdder, toolAdder2, language_adder, language_adder_2,
  } = ctx;

  toolAdder2(toolAdder("thieves' tools"));
  equipment.push("Leather armor");
  equipment.push("Two daggers");
  document.getElementById(firstWeaponFirstSectionId).value = "Dagger";
  statChecker(
    biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2,
    firstWeaponSecondSectionId
  );
  statChecker3(
    biggerWeaponStatDecider(dexterityModifier, strengthModifier),
    firstWeaponThirdSectionId,
    "1d4",
    "P"
  );
  features.push(
    "Sneak Attack: If an enemy is getting flanked or you have advantage on the attack, you can use your sneak attack dice (1d6) on the attack (once a turn). The weapon must be a finesse or ranged weapon."
  );
  spellcastingSection.push(
    "Sneak Attack: 1d6 to first attack roll of the round that has advantage and hits."
  );
  language_adder_2(language_adder("Thieves' Cant"));
  features.push(
    "Thieves' Cant: You know the secret code of thieves and rogues everywhere, and the secret signs and jargon associated with it."
  );
  if (random > 0.5) {
    features.push(
      "Expertise: Your two skills of expertise are Stealth and Perception. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies."
    );
    equipment.push("Thieves' tools");
    statChecker(dexterityModifier + 4, "form32_1");
    statChecker(wisdomModifier + 4, "form43_1");
  } else if (document.getElementById("form17_1").checked === true) {
    features.push(
      "Expertise: Your two skills of expertise are Stealth and Deception. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies."
    );
    statChecker(dexterityModifier + 4, "form32_1");
    statChecker(charismaModifier + 4, "form36_1");
    equipment.push("Thieves' tools");
  } else if (document.getElementById("form14_1").checked === true) {
    features.push(
      "Expertise: Your two skills of expertise are Stealth and Investigation. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies."
    );
    statChecker(dexterityModifier + 4, "form32_1");
    statChecker(intelligenceModifier + 4, "form31_1");
    equipment.push("Thieves' tools");
  } else {
    features.push(
      "Expertise: Your two skills of expertise are Stealth and Thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies."
    );
    statChecker(dexterityModifier + 4, "form32_1");
    equipment.push("Thieves' tools (+4)");
  } /* Levi N. Blodgett */
  if (random2 > 0.5) {
    equipment.push("Rapier");
    document.getElementById(secondWeaponFirstSectionId).value = "Rapier";
    statChecker(
      biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2,
      secondWeaponSecondSectionId
    );
    statChecker3(
      biggerWeaponStatDecider(dexterityModifier, strengthModifier),
      secondWeaponThirdSectionId,
      "1d8",
      "P"
    );
  } else {
    equipment.push("Shortsword");
    document.getElementById(secondWeaponFirstSectionId).value = "Shortsword";
    statChecker(
      biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2,
      secondWeaponSecondSectionId
    );
    statChecker3(
      biggerWeaponStatDecider(dexterityModifier, strengthModifier),
      secondWeaponThirdSectionId,
      "1d6",
      "S"
    );
  }
  if (random3 > 0.5) {
    equipment.push("Shortbow w/ quiver of 20 arrows");
    document.getElementById(thirdWeaponFirstSectionId).value = "Shortbow";
    statChecker(dexterityModifier + 2, thirdWeaponSecondSectionId);
    statChecker3(dexterityModifier, thirdWeaponThirdSectionId, "1d6", "P");
  } else {
    equipment.push("Shortsword");
    document.getElementById(thirdWeaponFirstSectionId).value = "Shortsword";
    statChecker(
      biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2,
      thirdWeaponSecondSectionId
    );
    statChecker3(
      biggerWeaponStatDecider(dexterityModifier, strengthModifier),
      thirdWeaponThirdSectionId,
      "1d6",
      "S"
    );
  }
  if (
    document.getElementById(secondWeaponFirstSectionId).value ===
    document.getElementById(thirdWeaponFirstSectionId).value
  ) {
    equipment.pop();
    equipment.pop();
    equipment.push("Two " + document.getElementById(secondWeaponFirstSectionId).value);
    document.getElementById(thirdWeaponFirstSectionId).value = "";
    document.getElementById(thirdWeaponSecondSectionId).value = "";
    document.getElementById(thirdWeaponThirdSectionId).value = "";
  }
  if (random4 > 0.666) {
    equipment.push("Burglar's Pack");
  } else if (random4 > 0.333) {
    equipment.push("Dungeoneer's Pack");
  } else {
    equipment.push("Explorer's Pack");
  }
}

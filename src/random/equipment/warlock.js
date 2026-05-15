export function apply_warlock_equipment(ctx) {
  const {
    random, random2, random4,
    strengthModifier, dexterityModifier,
    simpleWeaponsArray,
    firstWeaponFirstSectionId, firstWeaponSecondSectionId, firstWeaponThirdSectionId,
    secondWeaponFirstSectionId, secondWeaponSecondSectionId, secondWeaponThirdSectionId,
    thirdWeaponFirstSectionId, thirdWeaponSecondSectionId, thirdWeaponThirdSectionId,
    equipment, features,
    statChecker, statChecker3, attackSectionWeaponAdder, attackSectionWeaponPicker,
    biggerWeaponStatDecider,
  } = ctx;

  equipment.push("Component pouch");
  equipment.push("Leather armor");
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
  if (random > 0.5) {
    equipment.push("Scholar's pack");
  } else {
    equipment.push("Dungeoneer's pack");
  }
  if (random2 > 0.5) {
    equipment.push("Light crossbow w/ quiver of 20 bolts");
    document.getElementById(secondWeaponFirstSectionId).value = "Light CB";
    statChecker(dexterityModifier + 2, secondWeaponSecondSectionId);
    statChecker3(dexterityModifier, secondWeaponThirdSectionId, "1d8", "P");
  } else {
    attackSectionWeaponAdder(
      attackSectionWeaponPicker(simpleWeaponsArray),
      secondWeaponFirstSectionId,
      secondWeaponSecondSectionId,
      secondWeaponThirdSectionId
    );
  }
  attackSectionWeaponAdder(
    attackSectionWeaponPicker(simpleWeaponsArray),
    thirdWeaponFirstSectionId,
    thirdWeaponSecondSectionId,
    thirdWeaponThirdSectionId
  );
  while (
    document.getElementById(secondWeaponFirstSectionId).value ===
      document.getElementById(thirdWeaponFirstSectionId).value &&
    document.getElementById(firstWeaponFirstSectionId).value !=
      document.getElementById(thirdWeaponFirstSectionId).value &&
    document.getElementById(secondWeaponFirstSectionId).value !=
      document.getElementById(firstWeaponFirstSectionId).value
  ) {
    attackSectionWeaponAdder(
      attackSectionWeaponPicker(simpleWeaponsArray),
      thirdWeaponFirstSectionId,
      thirdWeaponSecondSectionId,
      thirdWeaponThirdSectionId
    );
    attackSectionWeaponAdder(
      attackSectionWeaponPicker(simpleWeaponsArray),
      secondWeaponFirstSectionId,
      secondWeaponSecondSectionId,
      secondWeaponThirdSectionId
    );
    if (
      document.getElementById(secondWeaponFirstSectionId).value ===
      document.getElementById(thirdWeaponFirstSectionId).value
    ) {
      equipment.pop();
      equipment.pop();
      if (document.getElementById(secondWeaponFirstSectionId).value != "Dagger") {
        equipment.push("Two " + document.getElementById(secondWeaponFirstSectionId).value);
      }
      document.getElementById(thirdWeaponFirstSectionId).value = "";
      document.getElementById(thirdWeaponSecondSectionId).value = "";
      document.getElementById(thirdWeaponThirdSectionId).value = "";
    }
  }
  if (
    document.getElementById(secondWeaponFirstSectionId).value ===
    document.getElementById(firstWeaponFirstSectionId).value
  ) {
    document.getElementById(secondWeaponFirstSectionId).value =
      document.getElementById(thirdWeaponFirstSectionId).value;
    statChecker(dexterityModifier + 2, secondWeaponSecondSectionId);
    statChecker3(dexterityModifier, secondWeaponThirdSectionId, "1d8", "P");
    document.getElementById(thirdWeaponFirstSectionId).value = "";
    statChecker("", thirdWeaponSecondSectionId);
    statChecker3("", thirdWeaponThirdSectionId, "", "");
  }
  if (
    document.getElementById(thirdWeaponFirstSectionId).value ===
      document.getElementById(secondWeaponFirstSectionId).value &&
    document.getElementById(thirdWeaponFirstSectionId).value ===
      document.getElementById(firstWeaponFirstSectionId).value
  ) {
    equipment.push("Four daggers");
    document.getElementById(thirdWeaponFirstSectionId).value = "";
    document.getElementById(thirdWeaponSecondSectionId).value = "";
    document.getElementById(thirdWeaponThirdSectionId).value = "";
    document.getElementById(secondWeaponFirstSectionId).value = "";
    document.getElementById(secondWeaponSecondSectionId).value = "";
    document.getElementById(secondWeaponThirdSectionId).value = "";
  } else if (
    document.getElementById(thirdWeaponFirstSectionId).value ===
    document.getElementById(firstWeaponFirstSectionId).value
  ) {
    equipment.push("Three daggers");
    document.getElementById(thirdWeaponFirstSectionId).value = "";
    document.getElementById(thirdWeaponSecondSectionId).value = "";
    document.getElementById(thirdWeaponThirdSectionId).value = "";
  } else if (
    document.getElementById(thirdWeaponFirstSectionId).value ===
    document.getElementById(secondWeaponFirstSectionId).value
  ) {
    equipment.push("Three daggers");
    document.getElementById(thirdWeaponFirstSectionId).value = "";
    document.getElementById(thirdWeaponSecondSectionId).value = "";
    document.getElementById(thirdWeaponThirdSectionId).value = "";
  } else {
    equipment.push("Two daggers");
  }
  if (random4 > 0.666) {
    features.push("Otherworldly Patron: Archfey.");
    document.getElementById("form193_3").value = "Faerie Fire";
    document.getElementById("form159_3").value = "Sleep";
    features.push(
      "Fey Presence (1/r): As an action, you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. If a target fails the saving throw, they are charmed or frightened by you (your choice) until the end of your next turn."
    );
  } else if (random4 > 0.333) {
    features.push("Otherworldly Patron: Fiend.");
    document.getElementById("form193_3").value = "Burning Hands";
    document.getElementById("form159_3").value = "Command";
    features.push(
      "Dark One's Blessing: When you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your CHA modifier + your warlock level."
    );
  } else {
    features.push("Otherworldly Patron: Great Old One.");
    document.getElementById("form193_3").value = "Dissonant Whispers";
    document.getElementById("form159_3").value = "Tasha's Hideous Laughter";
    features.push(
      "Awakened Mind: You can communicate telepathically with any creature you can see within 30 feet of you. You don't need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language."
    );
  }
}

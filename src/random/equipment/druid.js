export function apply_druid_equipment(ctx) {
  const {
    random, random2,
    strengthModifier, dexterityModifier,
    firstWeaponFirstSectionId, firstWeaponSecondSectionId, firstWeaponThirdSectionId,
    secondWeaponFirstSectionId, secondWeaponSecondSectionId, secondWeaponThirdSectionId,
    equipment, features,
    statChecker, statChecker3,
    biggerWeaponStatDecider, profsAndLangs, toolAdder, toolAdder2,
  } = ctx;

  toolAdder2(toolAdder("herbalism kit"));
  profsAndLangs.languages.push("Druidic");
  features.push(
    "Druidic: You know the language Druidic, you can see hidden messages of druids and speak the language. Those who don't know Druidic can see the message with a succesful DC 15 Wisdom check, but cannot decipher it."
  );
  equipment.push("Leather armor");
  equipment.push("Explorer's pack");
  if (random > 0.5) {
    equipment.push("Wooden shield");
  } else {
    equipment.push("Shortbow w/ quiver of 20 arrows");
    document.getElementById(secondWeaponFirstSectionId).value = "Shortbow";
    statChecker(dexterityModifier + 2, secondWeaponSecondSectionId);
    statChecker3(dexterityModifier, secondWeaponThirdSectionId, "1d6", "P");
  }
  if (random2 > 0.8) {
    equipment.push("Quarterstaff");
    document.getElementById(firstWeaponFirstSectionId).value = "Quarterstaff";
    statChecker(strengthModifier + 2, firstWeaponSecondSectionId);
    statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6/10", "B");
    equipment.push("Petrified bear heart - Focus");
  } else if (random2 > 0.6) {
    equipment.push("Scimitar");
    document.getElementById(firstWeaponFirstSectionId).value = "Scimitar";
    statChecker(
      biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2,
      firstWeaponSecondSectionId
    );
    statChecker3(
      biggerWeaponStatDecider(dexterityModifier, strengthModifier),
      firstWeaponThirdSectionId,
      "1d6",
      "S"
    );
    equipment.push("Yew branch - Focus");
  } else if (random2 > 0.4) {
    equipment.push("Spear");
    document.getElementById(firstWeaponFirstSectionId).value = "Spear";
    statChecker(strengthModifier + 2, firstWeaponSecondSectionId);
    statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6", "P");
    equipment.push("Opalized oak wand - Focus");
  } else if (random2 > 0.2) {
    equipment.push("Scimitar");
    document.getElementById(firstWeaponFirstSectionId).value = "Scimitar";
    statChecker(
      biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2,
      firstWeaponSecondSectionId
    );
    statChecker3(
      biggerWeaponStatDecider(dexterityModifier, strengthModifier),
      firstWeaponThirdSectionId,
      "1d6",
      "S"
    );
    equipment.push("Dreamcatcher willow totem - Focus");
  } else {
    equipment.push("Spear");
    document.getElementById(firstWeaponFirstSectionId).value = "Spear";
    statChecker(strengthModifier + 2, firstWeaponSecondSectionId);
    statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6", "P");
    equipment.push("Animal totem staff - Focus");
  }
}

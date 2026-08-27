export function apply_fighter_equipment(ctx) {
  const {
    random, random2, random3, random4, random5,
    strengthModifier, dexterityModifier,
    martialWeaponsArray,
    firstWeaponFirstSectionId, firstWeaponSecondSectionId, firstWeaponThirdSectionId,
    secondWeaponFirstSectionId, secondWeaponSecondSectionId, secondWeaponThirdSectionId,
    thirdWeaponFirstSectionId, thirdWeaponSecondSectionId, thirdWeaponThirdSectionId,
    equipment, features, spellcastingSection,
    statChecker, statChecker3, attackSectionWeaponAdder, attackSectionWeaponPicker,
  } = ctx;

  features.push(
    "Second Wind (1/r): On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level."
  );
  spellcastingSection.push("Second Wind (1/r): Use a bonus action to gain 1d10 + 1 hp.");
  spellcastingSection.push(" ");
  if (random2 > 0.5) {
    equipment.push("Dungeoneer's pack");
  } else {
    equipment.push("Explorer's pack");
  }
  if (random3 > 0.833) {
    features.push(
      "Fighting Style: Defense, While you are wearing armor, you gain a +1 bonus to AC."
    );
    ctx.armorClass += 1;
  } else if (random3 > 0.667) {
    features.push(
      "Fighting Style: Dueling, when you are wielding a melee wepaon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon."
    );
    spellcastingSection.push("Dueling: +2 bonus to damage rolls");
    spellcastingSection.push(" ");
  } else if (random3 > 0.5) {
    features.push(
      "Fighting Style: Protection, When a creature you can see attacks a target other than you that is within 5 feet o f you, you can use your reaction to impose disadvantage on the attack roll. You must be w ielding a shield."
    );
    spellcastingSection.push(
      "Protection: Can use reaction to impose DA on the attack roll of an enemy."
    );
    spellcastingSection.push(" ");
  } else if (random3 > 0.334) {
    features.push(
      "Fighting Style: Great Weapon Fighting, when you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must be a two-handed weapon or have the versatile property to gain this benefit."
    );
    spellcastingSection.push(
      "Great Weapon Fighting: Reroll damage rolls that are a 1 or a 2, once per roll."
    );
    spellcastingSection.push(" ");
  } else if (random3 > 0.167) {
    features.push(
      "Fighting Style: Two Weapon Fighting, can add your ability modifier to the damage of the second attack."
    );
    spellcastingSection.push(
      "Two Weapon Fighting: +" + dexterityModifier + " to offhand attacks."
    );
    spellcastingSection.push(" ");
  } else {
    features.push(
      "Fighting Style: Archery, gain a +2 bonus to attack rolls you make with ranged weapons."
    );
    spellcastingSection.push("Archery: +2 ranged attack bonus");
    spellcastingSection.push(" ");
  }
  if (random4 > 0.5) {
    equipment.push("Shield");
    attackSectionWeaponAdder(
      attackSectionWeaponPicker(martialWeaponsArray),
      firstWeaponFirstSectionId,
      firstWeaponSecondSectionId,
      firstWeaponThirdSectionId
    );
  } else {
    attackSectionWeaponAdder(
      attackSectionWeaponPicker(martialWeaponsArray),
      firstWeaponFirstSectionId,
      firstWeaponSecondSectionId,
      firstWeaponThirdSectionId
    );
    attackSectionWeaponAdder(
      attackSectionWeaponPicker(martialWeaponsArray),
      secondWeaponFirstSectionId,
      secondWeaponSecondSectionId,
      secondWeaponThirdSectionId
    );
  }
  if (random > 0.5) {
    console.log("test");
    equipment.push("Chain mail");
  } else {
    if (
      document.getElementById(secondWeaponFirstSectionId).value === undefined ||
      document.getElementById(secondWeaponFirstSectionId).value === null ||
      document.getElementById(secondWeaponFirstSectionId).value === ""
    ) {
      console.log("test2");
      equipment.push("Leather armor");
      equipment.push("Longbow w/ quiver of 20 arrows");
      document.getElementById(secondWeaponFirstSectionId).value = "Longbow";
      statChecker(dexterityModifier + 2, secondWeaponSecondSectionId);
      statChecker3(dexterityModifier, secondWeaponThirdSectionId, "1d8", "P");
    } else {
      console.log("test3");
      equipment.push("Leather armor");
      equipment.push("Longbow w/ quiver of 20 arrows");
      document.getElementById(thirdWeaponFirstSectionId).value = "Longbow";
      statChecker(dexterityModifier + 2, thirdWeaponSecondSectionId);
      statChecker3(dexterityModifier, thirdWeaponThirdSectionId, "1d8", "P");
    }
  }
  if (
    document.getElementById(secondWeaponFirstSectionId).value ===
      document.getElementById(thirdWeaponFirstSectionId).value &&
    document.getElementById(thirdWeaponFirstSectionId).value != ""
  ) {
    equipment.pop();
    equipment.pop();
    equipment.pop();
    equipment.push("Leather armor");
    equipment.push("Two " + document.getElementById(secondWeaponFirstSectionId).value + "s");
    if (
      document.getElementById(secondWeaponFirstSectionId).value === "Longbow" ||
      document.getElementById(secondWeaponFirstSectionId).value === "Shortbow"
    ) {
      equipment.push("Quiver of 40 arrows");
    } else if (
      document.getElementById(secondWeaponFirstSectionId).value === "Light CB" ||
      document.getElementById(secondWeaponFirstSectionId).value === "Heavy CB" ||
      document.getElementById(secondWeaponFirstSectionId).value === "Hand CB"
    ) {
      equipment.push("Quiver of 40 bolts");
    }
    document.getElementById(thirdWeaponFirstSectionId).value = "";
    document.getElementById(thirdWeaponSecondSectionId).value = "";
    document.getElementById(thirdWeaponThirdSectionId).value = "";
  }
  if (
    document.getElementById(firstWeaponFirstSectionId).value ===
      document.getElementById(secondWeaponFirstSectionId).value &&
    document.getElementById(secondWeaponFirstSectionId).value != ""
  ) {
    equipment.pop();
    equipment.pop();
    equipment.push("Two " + document.getElementById(firstWeaponFirstSectionId).value + "s");
    document.getElementById(secondWeaponFirstSectionId).value = "";
    document.getElementById(secondWeaponSecondSectionId).value = "";
    document.getElementById(secondWeaponThirdSectionId).value = "";
  }
  if (
    document.getElementById(secondWeaponFirstSectionId).value === undefined ||
    document.getElementById(secondWeaponFirstSectionId).value === null ||
    document.getElementById(secondWeaponFirstSectionId).value === ""
  ) {
    if (random5 > 0.5) {
      equipment.push("Light crossbow w/ quiver of 20 bolts");
      document.getElementById(secondWeaponFirstSectionId).value = "Light CB";
      statChecker(dexterityModifier + 2, secondWeaponSecondSectionId);
      statChecker3(dexterityModifier, secondWeaponThirdSectionId, "1d8", "P");
    } else {
      equipment.push("Two handaxes");
      document.getElementById(secondWeaponFirstSectionId).value = "Handaxe";
      statChecker(strengthModifier + 2, secondWeaponSecondSectionId);
      statChecker3(strengthModifier, secondWeaponThirdSectionId, "1d6", "S");
    }
  } else if (
    document.getElementById(thirdWeaponFirstSectionId).value === undefined ||
    document.getElementById(thirdWeaponFirstSectionId).value === null ||
    document.getElementById(thirdWeaponFirstSectionId).value === ""
  ) {
    if (random5 > 0.5) {
      equipment.push("Light crossbow w/ quiver of 20 bolts");
      document.getElementById(thirdWeaponFirstSectionId).value = "Light CB";
      statChecker(dexterityModifier + 2, thirdWeaponSecondSectionId);
      statChecker3(dexterityModifier, thirdWeaponThirdSectionId, "1d8", "P");
    } else {
      equipment.push("Two handaxes");
      document.getElementById(thirdWeaponFirstSectionId).value = "Handaxe";
      statChecker(strengthModifier + 2, thirdWeaponSecondSectionId);
      statChecker3(strengthModifier, thirdWeaponThirdSectionId, "1d6", "S");
    }
  } else {
    if (random5 > 0.5) {
      equipment.push("Light crossbow w/ quiver of 20 bolts");
      spellcastingSection.push(
        "Light CB  +" + (dexterityModifier + 2) + "  1d8+" + dexterityModifier + " P"
      );
    } else {
      equipment.push("Two handaxes");
      spellcastingSection.push(
        "Handaxe  +" + (strengthModifier + 2) + "  1d6+" + strengthModifier + " P"
      );
    }
  }
}

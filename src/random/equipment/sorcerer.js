export function apply_sorcerer_equipment(ctx) {
  const {
    random, random2, random3,
    strengthModifier, dexterityModifier,
    simpleWeaponsArray,
    firstWeaponFirstSectionId, firstWeaponSecondSectionId, firstWeaponThirdSectionId,
    secondWeaponFirstSectionId, secondWeaponSecondSectionId, secondWeaponThirdSectionId,
    equipment, features,
    statChecker, statChecker3, attackSectionWeaponAdder, attackSectionWeaponPicker,
    biggerWeaponStatDecider,
  } = ctx;

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
  if (random3 > 0.5) {
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
  if (
    document.getElementById(secondWeaponFirstSectionId).value ===
    document.getElementById(firstWeaponFirstSectionId).value
  ) {
    equipment.pop();
    equipment.pop();
    if (document.getElementById(secondWeaponFirstSectionId).value === "Dagger") {
      equipment.push("Three daggers");
    }
    document.getElementById(secondWeaponFirstSectionId).value = "";
    document.getElementById(secondWeaponSecondSectionId).value = "";
    document.getElementById(secondWeaponThirdSectionId).value = "";
  }
  if (document.getElementById(secondWeaponFirstSectionId).value != "") {
    equipment.push("Two daggers");
  }
  equipment.push("Component pouch");
  if (random > 0.5) {
    if (random2 > 0.9) {
      features.push(
        "Draconic Ancestor: Black, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
      );
      features.push(
        "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
      );
      ctx.armorClass += 13 + dexterityModifier;
      ctx.hp++;
    } else if (random2 > 0.8) {
      features.push(
        "Draconic Ancestor: Blue, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
      );
      features.push(
        "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
      );
      ctx.armorClass += 13 + dexterityModifier;
      ctx.hp++;
    } else if (random2 > 0.7) {
      features.push(
        "Draconic Ancestor: Brass, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
      );
      features.push(
        "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
      );
      ctx.armorClass += 13 + dexterityModifier;
      ctx.hp++;
    } else if (random2 > 0.6) {
      features.push(
        "Draconic Ancestor: Bronze, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
      );
      features.push(
        "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
      );
      ctx.armorClass += 13 + dexterityModifier;
      ctx.hp++;
    } else if (random2 > 0.5) {
      features.push(
        "Draconic Ancestor: Copper, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
      );
      features.push(
        "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
      );
      ctx.armorClass += 13 + dexterityModifier;
      ctx.hp++;
    } else if (random2 > 0.4) {
      features.push(
        "Draconic Ancestor: Gold, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
      );
      features.push(
        "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
      );
      ctx.armorClass += 13 + dexterityModifier;
      ctx.hp++;
    } else if (random2 > 0.3) {
      features.push(
        "Draconic Ancestor: Green, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
      );
      features.push(
        "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
      );
      ctx.armorClass += 13 + dexterityModifier;
      ctx.hp++;
    } else if (random2 > 0.2) {
      features.push(
        "Draconic Ancestor: Red, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
      );
      features.push(
        "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
      );
      ctx.armorClass += 13 + dexterityModifier;
      ctx.hp++;
    } else if (random2 > 0.1) {
      features.push(
        "Draconic Ancestor: Silver, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
      );
      features.push(
        "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
      );
      ctx.armorClass += 13 + dexterityModifier;
      ctx.hp++;
    } else if (random2 > 0.0) {
      features.push(
        "Draconic Ancestor: White, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
      );
      features.push(
        "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
      );
      ctx.armorClass += 13 + dexterityModifier;
      ctx.hp++;
    }
  } else {
    features.push(
      "Wild Magic Surge: Immediately after you cast a sorcerer spell of 1st level or higher, the DM can have you roll a d20. If you roll a 1, roll on the Wild Magic Surge table to create a random magical effect."
    );
    features.push(
      "Tides of Chaos (1/lr): You can gain advantage on one attack roll, ability check, or saving throw. Anytime you regain this feature, the DM can have you roll on the Wild Magic Surge table immediately after you cast a sorcerer spell of 1st level or higher. You then regain the use of this feature."
    );
    ctx.armorClass += 10 + dexterityModifier;
  }
  if (random2 > 0.5) {
    equipment.push("Explorer's pack");
  } else {
    equipment.push("Dungeoneer's pack");
  }
}

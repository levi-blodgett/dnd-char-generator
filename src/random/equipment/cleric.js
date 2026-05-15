export function apply_cleric_equipment(ctx) {
  const {
    random, random2, random3, random4, random5, random6,
    strengthModifier, dexterityModifier, wisdomModifier, intelligenceModifier,
    firstWeaponFirstSectionId, firstWeaponSecondSectionId, firstWeaponThirdSectionId,
    secondWeaponFirstSectionId, secondWeaponSecondSectionId, secondWeaponThirdSectionId,
    equipment, features,
    statChecker, statChecker3, attackSectionWeaponAdder, attackSectionWeaponPicker,
    armorAdder, armorAdder2, weaponAdder, weaponAdder2,
    profsAndLangs, simpleWeaponsArray,
    random_language, right_language2, add_click,
  } = ctx;

  if (random > 0.5) {
    equipment.push("Explorer's pack");
  } else {
    equipment.push("Priest's pack");
  }
  equipment.push("Shield");
  equipment.push("A holy symbol");
  if (random2 > 0.889) {
    features.push("Cleric Domain: Life.");
    armorAdder2(armorAdder("heavy armor"));
    equipment.push("Mace");
    document.getElementById(firstWeaponFirstSectionId).value = "Mace";
    statChecker(strengthModifier + 2, firstWeaponSecondSectionId);
    statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6", "B");
    features.push(
      "Disciple of Life: Whenever you use a spell of 1st level or higher to restore hit points, the target regains additional hit points equal to 2 + the spell's level."
    );
    document.getElementById("form193_3").value = "Bless";
    document.getElementById("form159_3").value = "Cure Wounds";
    if (random4 > 0.666) {
      equipment.push("Scale mail");
    } else if (random4 > 0.333) {
      equipment.push("Leather armor");
    } else {
      equipment.push("Chain mail");
    }
  } else if (random2 > 0.778) {
    features.push("Cleric Domain: War.");
    armorAdder2(armorAdder("heavy armor"));
    weaponAdder2(weaponAdder("martial weapons"));
    if (random3 > 0.5) {
      equipment.push("Mace");
      document.getElementById(firstWeaponFirstSectionId).value = "Mace";
      statChecker(strengthModifier + 2, firstWeaponSecondSectionId);
      statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6", "B");
    } else {
      equipment.push("Warhammer");
      document.getElementById(firstWeaponFirstSectionId).value = "Warhammer";
      statChecker(strengthModifier + 2, firstWeaponSecondSectionId);
      statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d8", "B");
    }
    document.getElementById("form193_3").value = "Divine Favor";
    document.getElementById("form159_3").value = "Shield of Faith";
    const lightGo = wisdomModifier <= 0 ? 1 : wisdomModifier;
    features.push(
      "War Priest (" +
        lightGo +
        "/lr): When you use the Attack action, you can make one weapon attack as a bonus action. Can be used = to WIS modifier (minimum of once) per long rest."
    );
    if (random4 > 0.666) {
      equipment.push("Scale mail");
    } else if (random4 > 0.333) {
      equipment.push("Leather armor");
    } else {
      equipment.push("Chain mail");
    }
  } else if (random2 > 0.668) {
    features.push("Cleric Domain: Nature.");
    armorAdder2(armorAdder("heavy armor"));
    equipment.push("Mace");
    document.getElementById(firstWeaponFirstSectionId).value = "Mace";
    statChecker(strengthModifier + 2, firstWeaponSecondSectionId);
    statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6", "B");
    if (random4 > 0.75 && document.getElementById("form8_1").checked === undefined) {
      add_click(8);
      statChecker(wisdomModifier + 2, "form50_1");
    } else if (random4 > 0.5 && document.getElementById("form11_1").checked === undefined) {
      add_click(11);
      statChecker(intelligenceModifier + 2, "form37_1");
    } else if (random4 > 0.25 && document.getElementById("form12_1").checked === undefined) {
      add_click(12);
      statChecker(wisdomModifier + 2, "form47_1");
    } else {
      add_click(11);
      statChecker(intelligenceModifier + 2, "form37_1");
    }
    if (random5 > 0.666) {
      equipment.push("Scale mail");
    } else if (random5 > 0.333) {
      equipment.push("Leather armor");
    } else {
      equipment.push("Chain mail");
    }
  } else if (random2 > 0.556) {
    features.push("Cleric Domain: Trickery.");
    features.push(
      "Blessing of the Trickster: You can use your action to touch a willing creature other than yourself to give it advantage on Stealth checks. This blessing lasts for 1 hour or until you use this feature again."
    );
    equipment.push("Mace");
    document.getElementById(firstWeaponFirstSectionId).value = "Mace";
    statChecker(strengthModifier + 2, firstWeaponSecondSectionId);
    statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6", "B");
    if (random4 > 0.5) {
      equipment.push("Scale mail");
    } else {
      equipment.push("Leather armor");
    }
  } else if (random2 > 0.445) {
    features.push("Cleric Domain: Tempest.");
    armorAdder2(armorAdder("heavy armor"));
    weaponAdder2(weaponAdder("martial weapons"));
    if (random3 > 0.5) {
      equipment.push("Mace");
      document.getElementById(firstWeaponFirstSectionId).value = "Mace";
      statChecker(strengthModifier + 2, firstWeaponSecondSectionId);
      statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6", "B");
    } else {
      equipment.push("Warhammer");
      document.getElementById(firstWeaponFirstSectionId).value = "Warhammer";
      statChecker(strengthModifier + 2, firstWeaponSecondSectionId);
      statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d8", "B");
    }
    document.getElementById("form193_3").value = "Fog Cloud";
    document.getElementById("form159_3").value = "Thunderwave";
    const lightGo = wisdomModifier <= 0 ? 1 : wisdomModifier;
    features.push(
      "Wrath of the Storm (" +
        lightGo +
        "/lr): When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a DEX saving throw. The creature takes 2d8 lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a successful one. Can be used = to WIS modifier (minimum of once) per long rest."
    );
    if (random4 > 0.666) {
      equipment.push("Scale mail");
    } else if (random4 > 0.333) {
      equipment.push("Leather armor");
    } else {
      equipment.push("Chain mail");
    }
  } else if (random2 > 0.334) {
    features.push("Cleric Domain: Death.");
    weaponAdder2(weaponAdder("martial weapons"));
    if (random3 > 0.5) {
      equipment.push("Mace");
      document.getElementById(firstWeaponFirstSectionId).value = "Mace";
      statChecker(strengthModifier + 2, firstWeaponSecondSectionId);
      statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6", "B");
    } else {
      equipment.push("Warhammer");
      document.getElementById(firstWeaponFirstSectionId).value = "Warhammer";
      statChecker(strengthModifier + 2, firstWeaponSecondSectionId);
      statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d8", "B");
    }
    features.push(
      "Reaper: You learn one necromancy cantrip, and when you cast a necromancy cantrip that normally targets only one creature, the spell instead targets two creatures within range and within 5 feet of each other."
    );
    if (random4 > 0.5) {
      equipment.push("Scale mail");
    } else {
      equipment.push("Leather armor");
    }
    if (random5 > 0.5) {
      document.getElementById("form202_3").value = "Chill Touch";
    } else {
      document.getElementById("form202_3").value = "Spare The Dying";
    }
  } else if (random2 > 0.223) {
    features.push("Cleric Domain: Knowledge.");
    // Note: right_language2 closes over outer knowledgeLanguage; the dedup check for
    // knowledgeLanguage2 uses ctx.knowledgeLanguage set here. The outer var isn't updated,
    // so knowledgeLanguage2 may occasionally equal knowledgeLanguage (rare; fixed in Phase 2b).
    let knowledgeLanguage = random_language();
    knowledgeLanguage = right_language2(knowledgeLanguage);
    profsAndLangs.languages.push(knowledgeLanguage);
    let knowledgeLanguage2 = random_language();
    knowledgeLanguage2 = right_language2(knowledgeLanguage2);
    profsAndLangs.languages.push(knowledgeLanguage2);
    document.getElementById("form193_3").value = "Command";
    document.getElementById("form159_3").value = "Identify";
    equipment.push("Mace");
    document.getElementById(firstWeaponFirstSectionId).value = "Mace";
    statChecker(strengthModifier + 2, firstWeaponSecondSectionId);
    statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6", "B");
    for (let i = 0; i < 2; i++) {
      if (random5 > 0.5 && document.getElementById("form20_1").checked === undefined) {
        add_click(20);
        statChecker(intelligenceModifier + 4, "form33_1");
        features.push("Knowledge Double Proficiency: Religion.");
      } else if (random5 < 0.5 && document.getElementById("form9_1").checked === undefined) {
        add_click(9);
        statChecker(intelligenceModifier + 4, "form48_1");
        features.push("Knowledge Double Proficiency: History.");
      } else if (random4 > 0.5 && document.getElementById("form21_1").checked === undefined) {
        add_click(21);
        statChecker(intelligenceModifier + 4, "form40_1");
        features.push("Knowledge Double Proficiency: Arcana.");
      } else if (random4 < 0.5 && document.getElementById("form11_1").checked === undefined) {
        add_click(11);
        statChecker(intelligenceModifier + 4, "form37_1");
        features.push("Knowledge Double Proficiency: Nature.");
      } else {
        add_click(11);
        statChecker(intelligenceModifier + 4, "form37_1");
        features.push("Knowledge Double Proficiency: Nature.");
      }
    }
    if (random4 > 0.5) {
      equipment.push("Scale mail");
    } else {
      equipment.push("Leather armor");
    }
  } else if (random2 > 0.112) {
    features.push("Cleric Domain: Light.");
    document.getElementById("form193_3").value = "Burning Hands";
    document.getElementById("form159_3").value = "Faerie Fire";
    equipment.push("Mace");
    document.getElementById(firstWeaponFirstSectionId).value = "Mace";
    statChecker(strengthModifier + 2, firstWeaponSecondSectionId);
    statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6", "B");
    const lightGo = wisdomModifier <= 0 ? 1 : wisdomModifier;
    features.push(
      "Warding Flare (" +
        lightGo +
        "/lr): When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll causing light to flare before the attacker before it hits or misses. An attacker can't be blinded is immune to this feature. You can use this equal to your WIS modifier (minimum of once) per long rest."
    );
    if (random4 > 0.5) {
      equipment.push("Scale mail");
    } else {
      equipment.push("Leather armor");
    }
  } else {
    features.push("Cleric Domain: Arcana.");
    document.getElementById("form193_3").value = "Detect Magic";
    document.getElementById("form159_3").value = "Magic Missile";
    equipment.push("Mace");
    document.getElementById(firstWeaponFirstSectionId).value = "Mace";
    statChecker(strengthModifier + 2, firstWeaponSecondSectionId);
    statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6", "B");
    add_click(21);
    statChecker(intelligenceModifier + 4, "form40_1");
    if (random4 > 0.5) {
      equipment.push("Scale mail");
    } else {
      equipment.push("Leather armor");
    }
  }
  if (random6 > 0.5) {
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
    if (
      document.getElementById(secondWeaponFirstSectionId).value ===
      document.getElementById(firstWeaponFirstSectionId).value
    ) {
      equipment.pop();
      equipment.pop();
      equipment.push("Two " + document.getElementById(firstWeaponFirstSectionId).value);
      document.getElementById(secondWeaponFirstSectionId).value = "";
      document.getElementById(secondWeaponSecondSectionId).value = "";
      document.getElementById(secondWeaponThirdSectionId).value = "";
    }
  }
}

import { stat_checker, stat_checker_3 } from "../util/stat-checkers.js";

export function apply_sorcerer_equipment(ctx) {
  const {
    features, equipment,
    dexterityModifier,
    random, random2,
  } = ctx;

  let armorClassDelta = 0;
  let hpDelta = 0;

  equipment.push("Two daggers");
  document.getElementById("form79_1").value = "Dagger"; // 1st weapon 1st section
  stat_checker(dexterityModifier + 2, "form64_1"); // 1st weapon 2nd section
  stat_checker_3(dexterityModifier, "form76_1", "1d4", "P"); // 1st weapon 3rd section
  equipment.push("Light crossbow w/ 20 bolts");
  document.getElementById("form78_1").value = "Light CB"; // 2nd weapon 1st section
  stat_checker(dexterityModifier + 2, "form65_1"); // 2nd weapon 2nd section
  stat_checker_3(dexterityModifier, "form74_1", "1d8", "P"); // 2nd weapon 3rd section
  equipment.push("Component pouch");
  if (random > 0.5) {
    equipment.push("Explorer's pack");
    if (random2 > 0.9) {
      features.push(
        "Draconic Ancestor: Black, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
      );
      features.push(
        "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
      );
      armorClassDelta = 13 + dexterityModifier;
      hpDelta = 1;
    } else if (random2 > 0.8) {
      features.push(
        "Draconic Ancestor: Blue, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
      );
      features.push(
        "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
      );
      armorClassDelta = 13 + dexterityModifier;
      hpDelta = 1;
    } else if (random2 > 0.7) {
      features.push(
        "Draconic Ancestor: Brass, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
      );
      features.push(
        "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
      );
      armorClassDelta = 13 + dexterityModifier;
      hpDelta = 1;
    } else if (random2 > 0.6) {
      features.push(
        "Draconic Ancestor: Bronze, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
      );
      features.push(
        "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
      );
      armorClassDelta = 13 + dexterityModifier;
      hpDelta = 1;
    } else if (random2 > 0.5) {
      features.push(
        "Draconic Ancestor: Copper, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
      );
      features.push(
        "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
      );
      armorClassDelta = 13 + dexterityModifier;
      hpDelta = 1;
    } else if (random2 > 0.4) {
      features.push(
        "Draconic Ancestor: Gold, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
      );
      features.push(
        "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
      );
      armorClassDelta = 13 + dexterityModifier;
      hpDelta = 1;
    } else if (random2 > 0.3) {
      features.push(
        "Draconic Ancestor: Green, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
      );
      features.push(
        "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
      );
      armorClassDelta = 13 + dexterityModifier;
      hpDelta = 1;
    } else if (random2 > 0.2) {
      features.push(
        "Draconic Ancestor: Red, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
      );
      features.push(
        "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
      );
      armorClassDelta = 13 + dexterityModifier;
      hpDelta = 1;
    } else if (random2 > 0.1) {
      features.push(
        "Draconic Ancestor: Silver, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
      );
      features.push(
        "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
      );
      armorClassDelta = 13 + dexterityModifier;
      hpDelta = 1;
    } else if (random2 > 0.0) {
      features.push(
        "Draconic Ancestor: White, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons."
      );
      features.push(
        "Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier."
      );
      armorClassDelta = 13 + dexterityModifier;
      hpDelta = 1;
    }
  } else {
    equipment.push("Dungeoneer's pack");
    features.push(
      "Wild Magic Surge: Immediately after you cast a sorcerer spell of 1st level or higher, the DM can have you roll a d20. If you roll a 1, roll on the Wild Magic Surge table to create a random magical effect."
    );
    features.push(
      "Tides of Chaos (1/lr): You can gain advantage on one attack roll, ability check, or saving throw. Anytime you regain this feature, the DM can have you roll on the Wild Magic Surge table immediately after you cast a sorcerer spell of 1st level or higher. You then regain the use of this feature."
    );
    armorClassDelta = 10 + dexterityModifier;
  }

  return { armorClassDelta, hpDelta };
}

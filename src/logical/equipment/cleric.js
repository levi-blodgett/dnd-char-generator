import { add_click } from "../../checkboxes.js";
import { stat_checker, stat_checker_3 } from "../util/stat-checkers.js";
import { random_language, right_language2 } from "../util/language-helpers.js";

export function apply_cleric_equipment(ctx) {
  const {
    features, equipment, spellcastingSection, profsAndLangs,
    clericBuild, random, random2,
    strengthModifier, dexterityModifier, wisdomModifier, intelligenceModifier,
    weapon_adder, weapon_adder_2, armor_adder, armor_adder_2,
    firstLanguage, racialLanguage1, racialLanguage2, extralanguage,
  } = ctx;
  let lightGo;
  let knowledgeLanguage;
  let knowledgeLanguage2;

  if (random2 > 0.5) {
    equipment.push("Explorer's pack");
  } else {
    equipment.push("Priest's pack");
  }
  equipment.push("Shield");
  equipment.push("A holy symbol");
  if (clericBuild === "STR") {
    equipment.push("Handaxe");
    document.getElementById("form78_1").value = "Handaxe";
    stat_checker(strengthModifier + 2, "form65_1");
    stat_checker_3(strengthModifier, "form74_1", "1d6", "S");
    if (random > 0.66) {
      equipment.push("Mace");
      document.getElementById("form79_1").value = "Mace";
      stat_checker(strengthModifier + 2, "form64_1");
      stat_checker_3(strengthModifier, "form76_1", "1d6", "B");
      features.push("Cleric Domain: Life.");
      if (wisdomModifier === 0) {
        document.getElementById("form137_3").value = "Healing Word";
      } else if (wisdomModifier === 1) {
        document.getElementById("form137_3").value = "Healing Word";
        document.getElementById("form136_3").value = "Guiding Bolt";
      } else if (wisdomModifier === 2) {
        document.getElementById("form137_3").value = "Healing Word";
        document.getElementById("form136_3").value = "Guiding Bolt";
        document.getElementById("form135_3").value = "Bane";
      } else if (wisdomModifier === 3) {
        document.getElementById("form137_3").value = "Healing Word";
        document.getElementById("form136_3").value = "Guiding Bolt";
        document.getElementById("form135_3").value = "Bane";
        document.getElementById("form133_3").value = "Shield of Faith";
      } else if (wisdomModifier === 4) {
        document.getElementById("form137_3").value = "Healing Word";
        document.getElementById("form136_3").value = "Guiding Bolt";
        document.getElementById("form135_3").value = "Bane";
        document.getElementById("form133_3").value = "Shield of Faith";
        document.getElementById("form131_3").value = "Purify Food and Drink";
      } else if (wisdomModifier === 5) {
        document.getElementById("form137_3").value = "Healing Word";
        document.getElementById("form136_3").value = "Guiding Bolt";
        document.getElementById("form135_3").value = "Bane";
        document.getElementById("form133_3").value = "Shield of Faith";
        document.getElementById("form131_3").value = "Purify Food and Drink";
        document.getElementById("form129_3").value = "Detect Evil and Good";
      }
      document.getElementById("form213_3").value = "Guidance";
      document.getElementById("form204_3").value = "Sacred Flame";
      document.getElementById("form203_3").value = "Spare the Dying";
      armor_adder_2(armor_adder("heavy armor"));
      equipment.push("Chain mail");
      features.push(
        "Disciple of Life: Whenever you use a spell of 1st level or higher to restore hit points, the target regains additional hit points equal to 2 + the spell's level."
      );
      document.getElementById("form193_3").value = "Bless";
      document.getElementById("form159_3").value = "Cure Wounds";
    } else if (random > 0.33) {
      features.push("Cleric Domain: War.");
      armor_adder_2(armor_adder("heavy armor"));
      equipment.push("Chain mail");
      weapon_adder_2(weapon_adder("martial weapons"));
      equipment.push("Warhammer");
      document.getElementById("form213_3").value = "Guidance";
      document.getElementById("form204_3").value = "Sacred Flame";
      document.getElementById("form203_3").value = "Thaumaturgy";
      if (wisdomModifier === 0) {
        document.getElementById("form137_3").value = "Bless";
      } else if (wisdomModifier === 1) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
      } else if (wisdomModifier === 2) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
      } else if (wisdomModifier === 3) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
        document.getElementById("form133_3").value = "Bane";
      } else if (wisdomModifier === 4) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
        document.getElementById("form133_3").value = "Bane";
        document.getElementById("form131_3").value = "Cure Wounds";
      } else if (wisdomModifier === 5) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
        document.getElementById("form133_3").value = "Bane";
        document.getElementById("form131_3").value = "Cure Wounds";
        document.getElementById("form129_3").value = "Command";
      }
      document.getElementById("form79_1").value = "Warhammer";
      stat_checker(strengthModifier + 2, "form64_1");
      stat_checker_3(strengthModifier, "form76_1", "1d8", "B");
      document.getElementById("form193_3").value = "Divine Favor";
      document.getElementById("form159_3").value = "Shield of Faith";
      if (wisdomModifier <= 0) {
        lightGo = 1;
      } else {
        lightGo = wisdomModifier;
      }
      features.push(
        "War Priest (" +
          lightGo +
          "/lr): When you use the Attack action, you can make one weapon attack as a bonus action. Can be used = to WIS modifier (minimum of once) per long rest."
      );
    } else {
      features.push("Cleric Domain: Nature.");
      armor_adder_2(armor_adder("heavy armor"));
      equipment.push("Mace");
      document.getElementById("form79_1").value = "Mace";
      stat_checker(strengthModifier + 2, "form64_1");
      stat_checker_3(strengthModifier, "form76_1", "1d6", "B");
      document.getElementById("form213_3").value = "Guidance";
      document.getElementById("form204_3").value = "Sacred Flame";
      document.getElementById("form203_3").value = "Mending";
      document.getElementById("form202_3").value = "Shilelagh";
      equipment.push("Chain mail");
      if (wisdomModifier === 0) {
        document.getElementById("form137_3").value = "Bless";
      } else if (wisdomModifier === 1) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
      } else if (wisdomModifier === 2) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
      } else if (wisdomModifier === 3) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
        document.getElementById("form133_3").value = "Bane";
      } else if (wisdomModifier === 4) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
        document.getElementById("form133_3").value = "Bane";
        document.getElementById("form131_3").value = "Cure Wounds";
      } else if (wisdomModifier === 5) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
        document.getElementById("form133_3").value = "Bane";
        document.getElementById("form131_3").value = "Cure Wounds";
        document.getElementById("form129_3").value = "Sanctuary";
      }
      document.getElementById("form193_3").value = "Animal Friendship";
      document.getElementById("form159_3").value = "Speak with Animals";
      if (random === 1 && document.getElementById("form8_1").checked === undefined) {
        add_click(8);
        stat_checker(wisdomModifier + 2, "form50_1");
      } else if (random === 10 && document.getElementById("form11_1").checked === undefined) {
        add_click(11);
        stat_checker(intelligenceModifier + 2, "form37_1");
      } else if (random === 16 && document.getElementById("form12_1").checked === undefined) {
        add_click(12);
        stat_checker(wisdomModifier + 2, "form47_1");
      } else {
        add_click(11);
        stat_checker(intelligenceModifier + 2, "form37_1");
      }
    }
  } else if (clericBuild === "DEX") {
    equipment.push("Light crossbow w/ 20 bolts");
    document.getElementById("form78_1").value = "Light CB";
    stat_checker(dexterityModifier + 2, "form65_1");
    stat_checker_3(dexterityModifier, "form74_1", "1d8", "P");
    if (random > 0.66) {
      features.push("Cleric Domain: Trickery.");
      document.getElementById("form213_3").value = "Guidance";
      document.getElementById("form204_3").value = "Mending";
      document.getElementById("form203_3").value = "Light";
      if (wisdomModifier === 0) {
        document.getElementById("form137_3").value = "Bless";
      } else if (wisdomModifier === 1) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
      } else if (wisdomModifier === 2) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
      } else if (wisdomModifier === 3) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
        document.getElementById("form133_3").value = "Bane";
      } else if (wisdomModifier === 4) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
        document.getElementById("form133_3").value = "Bane";
        document.getElementById("form131_3").value = "Cure Wounds";
      } else if (wisdomModifier === 5) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
        document.getElementById("form133_3").value = "Bane";
        document.getElementById("form131_3").value = "Cure Wounds";
        document.getElementById("form129_3").value = "Detect Magic";
      }
      document.getElementById("form193_3").value = "Charm Person";
      document.getElementById("form159_3").value = "Disguise Self";
      equipment.push("Leather armor");
      features.push(
        "Blessing of the Trickster: You can use your action to touch a willing creature other than yourself to give it advantage on Stealth checks. This blessing lasts for 1 hour or until you use this feature again."
      );
      equipment.push("Mace");
      document.getElementById("form79_1").value = "Mace";
      stat_checker(strengthModifier + 2, "form64_1");
      stat_checker_3(strengthModifier, "form76_1", "1d6", "B");
    } else if (random > 0.33) {
      features.push("Cleric Domain: Tempest.");
      armor_adder_2(armor_adder("heavy armor"));
      equipment.push("Chain mail");
      weapon_adder_2(weapon_adder("martial weapons"));
      equipment.push("Warhammer");
      document.getElementById("form213_3").value = "Guidance";
      document.getElementById("form204_3").value = "Sacred Flame";
      document.getElementById("form203_3").value = "Thaumaturgy";
      if (wisdomModifier === 0) {
        document.getElementById("form137_3").value = "Bless";
      } else if (wisdomModifier === 1) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
      } else if (wisdomModifier === 2) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
      } else if (wisdomModifier === 3) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
        document.getElementById("form133_3").value = "Bane";
      } else if (wisdomModifier === 4) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
        document.getElementById("form133_3").value = "Bane";
        document.getElementById("form131_3").value = "Cure Wounds";
      } else if (wisdomModifier === 5) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
        document.getElementById("form133_3").value = "Bane";
        document.getElementById("form131_3").value = "Cure Wounds";
        document.getElementById("form129_3").value = "Detect Magic";
      }
      document.getElementById("form79_1").value = "Warhammer";
      stat_checker(strengthModifier + 2, "form64_1");
      stat_checker_3(strengthModifier, "form76_1", "1d8", "B");
      document.getElementById("form193_3").value = "Fog Cloud";
      document.getElementById("form159_3").value = "Thunderwave";
      if (wisdomModifier <= 0) {
        lightGo = 1;
      } else {
        lightGo = wisdomModifier;
      }
      features.push(
        "Wrath of the Storm (" +
          lightGo +
          "/lr): When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a DEX saving throw. The creature takes 2d8 lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a successful one. Can be used = to WIS modifier (minimum of once) per long rest."
      );
    } else {
      features.push("Cleric Domain: Death.");
      weapon_adder_2(weapon_adder("martial weapons"));
      equipment.push("Warhammer");
      document.getElementById("form213_3").value = "Guidance";
      document.getElementById("form204_3").value = "Sacred Flame";
      document.getElementById("form203_3").value = "Spare the Dying";
      document.getElementById("form79_1").value = "Warhammer";
      stat_checker(strengthModifier + 2, "form64_1");
      stat_checker_3(strengthModifier, "form76_1", "1d8", "B");
      document.getElementById("form202_3").value = "Chill Touch";
      equipment.push("Scale mail");
      if (wisdomModifier === 0) {
        document.getElementById("form137_3").value = "Bane";
      } else if (wisdomModifier === 1) {
        document.getElementById("form137_3").value = "Bane";
        document.getElementById("form136_3").value = "Healing Word";
      } else if (wisdomModifier === 2) {
        document.getElementById("form137_3").value = "Bane";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Inflict Wounds";
      } else if (wisdomModifier === 3) {
        document.getElementById("form137_3").value = "Bane";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Inflict Wounds";
        document.getElementById("form133_3").value = "Bless";
      } else if (wisdomModifier === 4) {
        document.getElementById("form137_3").value = "Bane";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Inflict Wounds";
        document.getElementById("form133_3").value = "Bless";
        document.getElementById("form131_3").value = "Guiding Bolt";
      } else if (wisdomModifier === 5) {
        document.getElementById("form137_3").value = "Bane";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Inflict Wounds";
        document.getElementById("form133_3").value = "Bless";
        document.getElementById("form131_3").value = "Guiding Bolt";
        document.getElementById("form129_3").value = "Cure Wounds";
      }
      document.getElementById("form193_3").value = "False Life";
      document.getElementById("form159_3").value = "Ray of Sickness";
      features.push(
        "Reaper: You learn one neromancy cantrip, and when you cast a necromancy cantrip that normally targets only one creature, the spell instead targets two creatures within range and within 5 feet of each other."
      );
    }
  } else if (clericBuild === "WIS") {
    equipment.push("Mace");
    document.getElementById("form79_1").value = "Mace";
    stat_checker(strengthModifier + 2, "form64_1");
    stat_checker_3(strengthModifier, "form76_1", "1d6", "B");
    equipment.push("Light crossbow w/ 20 bolts");
    document.getElementById("form78_1").value = "Light CB";
    stat_checker(dexterityModifier + 2, "form65_1");
    stat_checker_3(dexterityModifier, "form74_1", "1d8", "P");
    if (random > 0.66) {
      features.push("Cleric Domain: Knowledge.");
      document.getElementById("form213_3").value = "Guidance";
      document.getElementById("form204_3").value = "Sacred Flame";
      document.getElementById("form203_3").value = "Thaumaturgy";
      if (wisdomModifier === 0) {
        document.getElementById("form137_3").value = "Bless";
      } else if (wisdomModifier === 1) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
      } else if (wisdomModifier === 2) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
      } else if (wisdomModifier === 3) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
        document.getElementById("form133_3").value = "Bane";
      } else if (wisdomModifier === 4) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
        document.getElementById("form133_3").value = "Bane";
        document.getElementById("form131_3").value = "Cure Wounds";
      } else if (wisdomModifier === 5) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
        document.getElementById("form133_3").value = "Bane";
        document.getElementById("form131_3").value = "Cure Wounds";
        document.getElementById("form129_3").value = "Detect Magic";
      }
      equipment.push("Scale mail");
      knowledgeLanguage = random_language(racialLanguage2);
      knowledgeLanguage = right_language2(knowledgeLanguage, firstLanguage, racialLanguage1, racialLanguage2, extralanguage, knowledgeLanguage);
      profsAndLangs.languages.push(knowledgeLanguage);
      knowledgeLanguage2 = random_language(racialLanguage2);
      knowledgeLanguage2 = right_language2(knowledgeLanguage2, firstLanguage, racialLanguage1, racialLanguage2, extralanguage, knowledgeLanguage);
      profsAndLangs.languages.push(knowledgeLanguage2);
      document.getElementById("form193_3").value = "Command";
      document.getElementById("form159_3").value = "Identify";
      for (let i = 0; i < 2; i++) {
        if (document.getElementById("form20_1").checked === undefined) {
          add_click(20);
          stat_checker(intelligenceModifier + 4, "form33_1");
          features.push("Knowledge Double Proficiency: Religion.");
        } else if (document.getElementById("form9_1").checked === undefined) {
          add_click(9);
          stat_checker(intelligenceModifier + 4, "form48_1");
          features.push("Knowledge Double Proficiency: History.");
        } else if (document.getElementById("form21_1").checked === undefined) {
          add_click(21);
          stat_checker(intelligenceModifier + 4, "form40_1");
          features.push("Knowledge Double Proficiency: Arcana.");
        } else if (document.getElementById("form11_1").checked === undefined) {
          add_click(11);
          stat_checker(intelligenceModifier + 4, "form37_1");
          features.push("Knowledge Double Proficiency: Nature.");
        }
      }
    } else if (random > 0.33) {
      features.push("Cleric Domain: Light.");
      document.getElementById("form213_3").value = "Guidance";
      document.getElementById("form204_3").value = "Sacred Flame";
      document.getElementById("form203_3").value = "Thaumaturgy";
      document.getElementById("form202_3").value = "Light";
      equipment.push("Scale mail");
      if (wisdomModifier === 0) {
        document.getElementById("form137_3").value = "Bless";
      } else if (wisdomModifier === 1) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
      } else if (wisdomModifier === 2) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
      } else if (wisdomModifier === 3) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
        document.getElementById("form133_3").value = "Bane";
      } else if (wisdomModifier === 4) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
        document.getElementById("form133_3").value = "Bane";
        document.getElementById("form131_3").value = "Cure Wounds";
      } else if (wisdomModifier === 5) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
        document.getElementById("form133_3").value = "Bane";
        document.getElementById("form131_3").value = "Cure Wounds";
        document.getElementById("form129_3").value = "Command";
      }
      document.getElementById("form193_3").value = "Burning Hands";
      document.getElementById("form159_3").value = "Faerie Fire";
      if (wisdomModifier <= 0) {
        lightGo = 1;
      } else {
        lightGo = wisdomModifier;
      }
      features.push(
        "Warding Flare (" +
          lightGo +
          "/lr): When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll causing light to flare before the attacker before it hits or misses. An attacker can't be blinded is immune to this feature. You can use this equal to your WIS modifier (minimum of once) per long rest."
      );
    } else {
      features.push("Cleric Domain: Arcana.");
      document.getElementById("form213_3").value = "Guidance";
      document.getElementById("form204_3").value = "Sacred Flame";
      document.getElementById("form203_3").value = "Thaumaturgy";
      document.getElementById("form202_3").value = "Acid Splash";
      document.getElementById("form201_3").value = "Frostbite";
      if (wisdomModifier === 0) {
        document.getElementById("form137_3").value = "Bless";
      } else if (wisdomModifier === 1) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
      } else if (wisdomModifier === 2) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
      } else if (wisdomModifier === 3) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
        document.getElementById("form133_3").value = "Bane";
      } else if (wisdomModifier === 4) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
        document.getElementById("form133_3").value = "Bane";
        document.getElementById("form131_3").value = "Cure Wounds";
      } else if (wisdomModifier === 5) {
        document.getElementById("form137_3").value = "Bless";
        document.getElementById("form136_3").value = "Healing Word";
        document.getElementById("form135_3").value = "Guiding Bolt";
        document.getElementById("form133_3").value = "Bane";
        document.getElementById("form131_3").value = "Cure Wounds";
        document.getElementById("form129_3").value = "Sanctuary";
      }
      equipment.push("Scale mail");
      document.getElementById("form193_3").value = "Detect Magic";
      document.getElementById("form159_3").value = "Magic Missile";
      add_click(21);
      stat_checker(intelligenceModifier + 4, "form40_1");
    }
  }
}

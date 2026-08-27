import { add_click } from "../checkboxes.js";
import { stat_checker } from "./util/stat-checkers.js";

export function skill_adder(ctx) {
  const { strengthModifier, dexterityModifier, wisdomModifier, intelligenceModifier, charismaModifier } = ctx;
  const random = Math.floor(Math.random() * 17);
  if (document.getElementById("form7_1").checked === undefined) {
    add_click(7);
    stat_checker(wisdomModifier + 2, "form43_1"); // perception
  } else if (random === 0 && document.getElementById("form19_1").checked === undefined) {
    add_click(19);
    stat_checker(dexterityModifier + 2, "form38_1"); // acrobatics
  } else if (random === 1 && document.getElementById("form8_1").checked === undefined) {
    add_click(8);
    stat_checker(wisdomModifier + 2, "form50_1"); // animal handling
  } else if (random === 2 && document.getElementById("form21_1").checked === undefined) {
    add_click(21);
    stat_checker(intelligenceModifier + 2, "form40_1"); // arcana
  } else if (random === 3 && document.getElementById("form2_1").checked === undefined) {
    add_click(2);
    stat_checker(strengthModifier + 2, "form49_1"); // athletics
  } else if (random === 4 && document.getElementById("form17_1").checked === undefined) {
    add_click(17);
    stat_checker(charismaModifier + 2, "form36_1"); // deception
  } else if (random === 5 && document.getElementById("form9_1").checked === undefined) {
    add_click(9);
    stat_checker(intelligenceModifier + 2, "form48_1"); // history
  } else if (random === 6 && document.getElementById("form13_1").checked === undefined) {
    add_click(13);
    stat_checker(wisdomModifier + 2, "form35_1"); // insight
  } else if (random === 7 && document.getElementById("form24_1").checked === undefined) {
    add_click(24);
    stat_checker(charismaModifier + 2, "form44_1"); // intimidation
  } else if (random === 8 && document.getElementById("form14_1").checked === undefined) {
    add_click(14);
    stat_checker(intelligenceModifier + 2, "form31_1"); // investigation
  } else if (random === 9 && document.getElementById("form5_1").checked === undefined) {
    add_click(5);
    stat_checker(wisdomModifier + 2, "form53_1"); // medicine
  } else if (random === 10 && document.getElementById("form11_1").checked === undefined) {
    add_click(11);
    stat_checker(intelligenceModifier + 2, "form37_1"); // nature
  } else if (random === 11 && document.getElementById("form16_1").checked === undefined) {
    add_click(16);
    stat_checker(charismaModifier + 2, "form34_1"); // performance
  } else if (random === 12 && document.getElementById("form1_1").checked === undefined) {
    add_click(1);
    stat_checker(charismaModifier + 2, "form45_1"); // persuasion
  } else if (random === 13 && document.getElementById("form20_1").checked === undefined) {
    add_click(20);
    stat_checker(intelligenceModifier + 2, "form33_1"); // religion
  } else if (random === 14 && document.getElementById("form4_1").checked === undefined) {
    add_click(4);
    stat_checker(dexterityModifier + 2, "form46_1"); // sleight of hand
  } else if (random === 15 && document.getElementById("form23_1").checked === undefined) {
    add_click(23);
    stat_checker(dexterityModifier + 2, "form32_1"); // stealth
  } else if (random === 16 && document.getElementById("form12_1").checked === undefined) {
    add_click(12);
    stat_checker(wisdomModifier + 2, "form47_1"); // survival
  } else {
    if (document.getElementById("form7_1").checked === undefined) {
      add_click(7);
      stat_checker(wisdomModifier + 2, "form43_1"); // perception
    } else if (document.getElementById("form23_1").checked === undefined) {
      add_click(23);
      stat_checker(dexterityModifier + 2, "form32_1"); // stealth
    } else if (document.getElementById("form2_1").checked === undefined) {
      add_click(2);
      stat_checker(strengthModifier + 2, "form49_1"); // athletics
    } else if (document.getElementById("form17_1").checked === undefined) {
      add_click(17);
      stat_checker(charismaModifier + 2, "form36_1"); // deception
    } else if (document.getElementById("form13_1").checked === undefined) {
      add_click(13);
      stat_checker(wisdomModifier + 2, "form35_1"); // insight
    } else if (document.getElementById("form24_1").checked === undefined) {
      add_click(24);
      stat_checker(charismaModifier + 2, "form44_1"); // intimidation
    } else if (document.getElementById("form14_1").checked === undefined) {
      add_click(14);
      stat_checker(intelligenceModifier + 2, "form31_1"); // investigation
    } else if (document.getElementById("form1_1").checked === undefined) {
      add_click(1);
      stat_checker(charismaModifier + 2, "form45_1"); // persuasion
    }
  }
}

export function class_proficiencies(ctx) {
  const { classAndLevel, strength, dexterity, strengthModifier, dexterityModifier, wisdomModifier, intelligenceModifier, charismaModifier } = ctx;
  if (classAndLevel === "Barbarian 1") {
    for (let i = 0; i < 2; i++) {
      if (document.getElementById("form7_1").checked === undefined) {
        add_click(7);
        stat_checker(wisdomModifier + 2, "form43_1"); // perception
      } else if (document.getElementById("form2_1").checked === undefined) {
        add_click(2);
        stat_checker(strengthModifier + 2, "form49_1"); // athletics
      } else if (document.getElementById("form12_1").checked === undefined) {
        add_click(12);
        stat_checker(wisdomModifier + 2, "form47_1"); // survival
      } else if (document.getElementById("form24_1").checked === undefined) {
        add_click(24);
        stat_checker(charismaModifier + 2, "form44_1"); // intimidation
      } else if (document.getElementById("form8_1").checked === undefined) {
        add_click(8);
        stat_checker(wisdomModifier + 2, "form50_1"); // animal handling
      } else if (document.getElementById("form11_1").checked === undefined) {
        add_click(11);
        stat_checker(intelligenceModifier + 2, "form37_1"); // nature
      }
    }
  } else if (classAndLevel === "Fighter 1") {
    for (let i = 0; i < 2; i++) {
      if (document.getElementById("form7_1").checked === undefined) {
        add_click(7);
        stat_checker(wisdomModifier + 2, "form43_1"); // perception
      } else if (
        document.getElementById("form2_1").checked === undefined &&
        strength >= dexterity
      ) {
        add_click(2);
        stat_checker(strengthModifier + 2, "form49_1"); // athletics
      } else if (
        document.getElementById("form19_1").checked === undefined &&
        dexterity > strength
      ) {
        add_click(19);
        stat_checker(dexterityModifier + 2, "form38_1"); // acrobatics
      } else if (document.getElementById("form12_1").checked === undefined) {
        add_click(12);
        stat_checker(wisdomModifier + 2, "form47_1"); // survival
      } else if (document.getElementById("form13_1").checked === undefined) {
        add_click(13);
        stat_checker(wisdomModifier + 2, "form35_1"); // insight
      } else if (document.getElementById("form24_1").checked === undefined) {
        add_click(24);
        stat_checker(charismaModifier + 2, "form44_1"); // intimidation
      } else if (document.getElementById("form9_1").checked === undefined) {
        add_click(9);
        stat_checker(intelligenceModifier + 2, "form48_1"); // history
      } else if (document.getElementById("form8_1").checked === undefined) {
        add_click(8);
        stat_checker(wisdomModifier + 2, "form50_1"); // animal handling
      }
    }
  } else if (classAndLevel === "Bard 1") {
    if (document.getElementById("form1_1").checked === undefined) {
      add_click(1);
      stat_checker(charismaModifier + 2, "form45_1"); // persuasion
    } else {
      skill_adder(ctx);
    }
    if (document.getElementById("form16_1").checked === undefined) {
      add_click(16);
      stat_checker(charismaModifier + 2, "form34_1"); // performance
    } else {
      skill_adder(ctx);
    }
    skill_adder(ctx);
  } else if (classAndLevel === "Cleric 1") {
    for (let i = 0; i < 2; i++) {
      if (document.getElementById("form13_1").checked === undefined) {
        add_click(13);
        stat_checker(wisdomModifier + 2, "form35_1"); // insight
      } else if (document.getElementById("form1_1").checked === undefined) {
        add_click(1);
        stat_checker(charismaModifier + 2, "form45_1"); // persuasion
      } else if (document.getElementById("form20_1").checked === undefined) {
        add_click(20);
        stat_checker(intelligenceModifier + 2, "form33_1"); // religion
      } else if (document.getElementById("form9_1").checked === undefined) {
        add_click(9);
        stat_checker(intelligenceModifier + 2, "form48_1"); // history
      } else if (document.getElementById("form5_1").checked === undefined) {
        add_click(5);
        stat_checker(wisdomModifier + 2, "form53_1"); // medicine
      }
    }
  } else if (classAndLevel === "Sorcerer 1") {
    for (let i = 0; i < 2; i++) {
      if (document.getElementById("form21_1").checked === undefined) {
        add_click(21);
        stat_checker(intelligenceModifier + 2, "form40_1"); // arcana
      } else if (document.getElementById("form24_1").checked === undefined) {
        add_click(24);
        stat_checker(charismaModifier + 2, "form44_1"); // intimidation
      } else if (document.getElementById("form1_1").checked === undefined) {
        add_click(1);
        stat_checker(charismaModifier + 2, "form45_1"); // persuasion
      } else if (document.getElementById("form20_1").checked === undefined) {
        add_click(20);
        stat_checker(intelligenceModifier + 2, "form33_1"); // religion
      } else if (document.getElementById("form13_1").checked === undefined) {
        add_click(13);
        stat_checker(wisdomModifier + 2, "form35_1"); // insight
      } else if (document.getElementById("form17_1").checked === undefined) {
        add_click(17);
        stat_checker(charismaModifier + 2, "form36_1"); // deception
      }
    }
  } else if (classAndLevel === "Wizard 1") {
    for (let i = 0; i < 2; i++) {
      if (document.getElementById("form21_1").checked === undefined) {
        add_click(21);
        stat_checker(intelligenceModifier + 2, "form40_1"); // arcana
      } else if (document.getElementById("form14_1").checked === undefined) {
        add_click(14);
        stat_checker(intelligenceModifier + 2, "form31_1"); // investigation
      } else if (document.getElementById("form9_1").checked === undefined) {
        add_click(9);
        stat_checker(intelligenceModifier + 2, "form48_1"); // history
      } else if (document.getElementById("form20_1").checked === undefined) {
        add_click(20);
        stat_checker(intelligenceModifier + 2, "form33_1"); // religion
      } else if (document.getElementById("form13_1").checked === undefined) {
        add_click(13);
        stat_checker(wisdomModifier + 2, "form35_1"); // insight
      } else if (document.getElementById("form5_1").checked === undefined) {
        add_click(5);
        stat_checker(wisdomModifier + 2, "form53_1"); // medicine
      }
    }
  } else if (classAndLevel === "Druid 1") {
    for (let i = 0; i < 2; i++) {
      if (document.getElementById("form7_1").checked === undefined) {
        add_click(7);
        stat_checker(wisdomModifier + 2, "form43_1"); // perception
      } else if (document.getElementById("form11_1").checked === undefined) {
        add_click(11);
        stat_checker(intelligenceModifier + 2, "form37_1"); // nature
      } else if (document.getElementById("form12_1").checked === undefined) {
        add_click(12);
        stat_checker(wisdomModifier + 2, "form47_1"); // survival
      } else if (document.getElementById("form13_1").checked === undefined) {
        add_click(13);
        stat_checker(wisdomModifier + 2, "form35_1"); // insight
      } else if (document.getElementById("form8_1").checked === undefined) {
        add_click(8);
        stat_checker(wisdomModifier + 2, "form50_1"); // animal handling
      } else if (document.getElementById("form20_1").checked === undefined) {
        add_click(20);
        stat_checker(intelligenceModifier + 2, "form33_1"); // religion
      } else if (document.getElementById("form21_1").checked === undefined) {
        add_click(21);
        stat_checker(intelligenceModifier + 2, "form40_1"); // arcana
      } else if (document.getElementById("form5_1").checked === undefined) {
        add_click(5);
        stat_checker(wisdomModifier + 2, "form53_1"); // medicine
      }
    }
  } else if (classAndLevel === "Rogue 1") {
    for (let i = 0; i < 4; i++) {
      if (document.getElementById("form7_1").checked === undefined) {
        add_click(7);
        stat_checker(wisdomModifier + 2, "form43_1"); // perception
      } else if (document.getElementById("form23_1").checked === undefined) {
        add_click(23);
        stat_checker(dexterityModifier + 2, "form32_1"); // stealth
      } else if (
        document.getElementById("form2_1").checked === undefined &&
        strength >= dexterity
      ) {
        add_click(2);
        stat_checker(strengthModifier + 2, "form49_1"); // athletics
      } else if (
        document.getElementById("form19_1").checked === undefined &&
        dexterity > strength
      ) {
        add_click(19);
        stat_checker(dexterityModifier + 2, "form38_1"); // acrobatics
      } else if (document.getElementById("form17_1").checked === undefined) {
        add_click(17);
        stat_checker(charismaModifier + 2, "form36_1"); // deception
      } else if (document.getElementById("form4_1").checked === undefined) {
        add_click(4);
        stat_checker(dexterityModifier + 2, "form46_1"); // sleight of hand
      } else if (document.getElementById("form14_1").checked === undefined) {
        add_click(14);
        stat_checker(intelligenceModifier + 2, "form31_1"); // investigation
      } else if (document.getElementById("form1_1").checked === undefined) {
        add_click(1);
        stat_checker(charismaModifier + 2, "form45_1"); // persuasion
      } else if (document.getElementById("form16_1").checked === undefined) {
        add_click(16);
        stat_checker(charismaModifier + 2, "form34_1"); // performance
      } else if (document.getElementById("form12_1").checked === undefined) {
        add_click(12);
        stat_checker(wisdomModifier + 2, "form47_1"); // survival
      } else if (document.getElementById("form13_1").checked === undefined) {
        add_click(13);
        stat_checker(wisdomModifier + 2, "form35_1"); // insight
      }
    }
  } else if (classAndLevel === "Warlock 1") {
    for (let i = 0; i < 2; i++) {
      if (document.getElementById("form21_1").checked === undefined) {
        add_click(21);
        stat_checker(intelligenceModifier + 2, "form40_1"); // arcana
      } else if (document.getElementById("form17_1").checked === undefined) {
        add_click(17);
        stat_checker(charismaModifier + 2, "form36_1"); // deception
      } else if (document.getElementById("form24_1").checked === undefined) {
        add_click(24);
        stat_checker(charismaModifier + 2, "form44_1"); // intimidation
      } else if (document.getElementById("form20_1").checked === undefined) {
        add_click(20);
        stat_checker(intelligenceModifier + 2, "form33_1"); // religion
      } else if (document.getElementById("form11_1").checked === undefined) {
        add_click(11);
        stat_checker(intelligenceModifier + 2, "form37_1"); // nature
      } else if (document.getElementById("form14_1").checked === undefined) {
        add_click(14);
        stat_checker(intelligenceModifier + 2, "form31_1"); // investigation
      } else if (document.getElementById("form9_1").checked === undefined) {
        add_click(9);
        stat_checker(intelligenceModifier + 2, "form48_1"); // history
      }
    }
  } else if (classAndLevel === "Ranger 1") {
    for (let i = 0; i < 3; i++) {
      if (document.getElementById("form7_1").checked === undefined) {
        add_click(7);
        stat_checker(wisdomModifier + 2, "form43_1"); // perception
      } else if (document.getElementById("form12_1").checked === undefined) {
        add_click(12);
        stat_checker(wisdomModifier + 2, "form47_1"); // survival
      } else if (document.getElementById("form23_1").checked === undefined) {
        add_click(23);
        stat_checker(dexterityModifier + 2, "form32_1"); // stealth
      } else if (document.getElementById("form11_1").checked === undefined) {
        add_click(11);
        stat_checker(intelligenceModifier + 2, "form37_1"); // nature
      } else if (document.getElementById("form2_1").checked === undefined) {
        add_click(2);
        stat_checker(strengthModifier + 2, "form49_1"); // athletics
      } else if (document.getElementById("form8_1").checked === undefined) {
        add_click(8);
        stat_checker(wisdomModifier + 2, "form50_1"); // animal handling
      } else if (document.getElementById("form14_1").checked === undefined) {
        add_click(14);
        stat_checker(intelligenceModifier + 2, "form31_1"); // investigation
      } else if (document.getElementById("form13_1").checked === undefined) {
        add_click(13);
        stat_checker(wisdomModifier + 2, "form35_1"); // insight
      }
    }
  } else if (classAndLevel === "Paladin 1") {
    for (let i = 0; i < 2; i++) {
      if (document.getElementById("form20_1").checked === undefined) {
        add_click(20);
        stat_checker(intelligenceModifier + 2, "form33_1"); // religion
      } else if (document.getElementById("form2_1").checked === undefined) {
        add_click(2);
        stat_checker(strengthModifier + 2, "form49_1"); // athletics
      } else if (document.getElementById("form24_1").checked === undefined) {
        add_click(24);
        stat_checker(charismaModifier + 2, "form44_1"); // intimidation
      } else if (document.getElementById("form13_1").checked === undefined) {
        add_click(13);
        stat_checker(wisdomModifier + 2, "form35_1"); // insight
      } else if (document.getElementById("form1_1").checked === undefined) {
        add_click(1);
        stat_checker(charismaModifier + 2, "form45_1"); // persuasion
      } else if (document.getElementById("form5_1").checked === undefined) {
        add_click(5);
        stat_checker(wisdomModifier + 2, "form53_1"); // medicine
      }
    }
  } else if (classAndLevel === "Monk 1") {
    for (let i = 0; i < 2; i++) {
      if (document.getElementById("form20_1").checked === undefined) {
        add_click(20);
        stat_checker(intelligenceModifier + 2, "form33_1"); // religion
      } else if (
        document.getElementById("form2_1").checked === undefined &&
        strength >= dexterity
      ) {
        add_click(2);
        stat_checker(strengthModifier + 2, "form49_1"); // athletics
      } else if (
        document.getElementById("form19_1").checked === undefined &&
        dexterity > strength
      ) {
        add_click(19);
        stat_checker(dexterityModifier + 2, "form38_1"); // acrobatics
      } else if (document.getElementById("form23_1").checked === undefined) {
        add_click(23);
        stat_checker(dexterityModifier + 2, "form32_1"); // stealth
      } else if (document.getElementById("form13_1").checked === undefined) {
        add_click(13);
        stat_checker(wisdomModifier + 2, "form35_1"); // insight
      } else if (document.getElementById("form9_1").checked === undefined) {
        add_click(9);
        stat_checker(intelligenceModifier + 2, "form48_1"); // history
      }
    }
  }
}

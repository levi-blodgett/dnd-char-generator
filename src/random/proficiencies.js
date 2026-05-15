export function apply_class_proficiencies(ctx) {
  const {
    classAndLevel,
    strengthModifier, dexterityModifier, intelligenceModifier, wisdomModifier, charismaModifier,
    add_click, statChecker, skill_adder,
  } = ctx;
  let classCounter = 0;
  let random;

  if (classAndLevel === "Barbarian 1") {
    while (classCounter < 2) {
      random = Math.floor(Math.random() * 6);
      if (random === 0 && document.getElementById("form7_1").checked === undefined) {
        add_click(7);
        statChecker(wisdomModifier + 2, "form43_1"); // perception
        classCounter++;
      } else if (random === 1 && document.getElementById("form2_1").checked === undefined) {
        add_click(2);
        statChecker(strengthModifier + 2, "form49_1"); // athletics
        classCounter++;
      } else if (random === 2 && document.getElementById("form12_1").checked === undefined) {
        add_click(12);
        statChecker(wisdomModifier + 2, "form47_1"); // survival
        classCounter++;
      } else if (random === 3 && document.getElementById("form24_1").checked === undefined) {
        add_click(24);
        statChecker(charismaModifier + 2, "form44_1"); // intimidation
        classCounter++;
      } else if (random === 4 && document.getElementById("form8_1").checked === undefined) {
        add_click(8);
        statChecker(wisdomModifier + 2, "form50_1"); // animal handling
        classCounter++;
      } else if (random === 5 && document.getElementById("form11_1").checked === undefined) {
        add_click(11);
        statChecker(intelligenceModifier + 2, "form37_1"); // nature
        classCounter++;
      }
    }
  } else if (classAndLevel === "Fighter 1") {
    while (classCounter < 2) {
      random = Math.floor(Math.random() * 8);
      if (random === 0 && document.getElementById("form7_1").checked === undefined) {
        add_click(7);
        statChecker(wisdomModifier + 2, "form43_1"); // perception
        classCounter++;
      } else if (random === 1 && document.getElementById("form2_1").checked === undefined) {
        add_click(2);
        statChecker(strengthModifier + 2, "form49_1"); // athletics
        classCounter++;
      } else if (random === 2 && document.getElementById("form12_1").checked === undefined) {
        add_click(12);
        statChecker(wisdomModifier + 2, "form47_1"); // survival
        classCounter++;
      } else if (random === 3 && document.getElementById("form24_1").checked === undefined) {
        add_click(24);
        statChecker(charismaModifier + 2, "form44_1"); // intimidation
        classCounter++;
      } else if (random === 4 && document.getElementById("form9_1").checked === undefined) {
        add_click(9);
        statChecker(intelligenceModifier + 2, "form48_1"); // history
        classCounter++;
      } else if (random === 5 && document.getElementById("form8_1").checked === undefined) {
        add_click(8);
        statChecker(wisdomModifier + 2, "form50_1"); // animal handling
        classCounter++;
      } else if (random === 6 && document.getElementById("form13_1").checked === undefined) {
        add_click(13);
        statChecker(wisdomModifier + 2, "form35_1"); // insight
        classCounter++;
      } else if (random === 7 && document.getElementById("form19_1").checked === undefined) {
        add_click(19);
        statChecker(dexterityModifier + 2, "form38_1"); // acrobatics
        classCounter++;
      }
    }
  } else if (classAndLevel === "Bard 1") {
    for (let i = 0; i < 2; i++) {
      skill_adder();
    }
  } else if (classAndLevel === "Cleric 1") {
    while (classCounter < 2) {
      random = Math.floor(Math.random() * 5);
      if (random === 0 && document.getElementById("form5_1").checked === undefined) {
        add_click(5);
        statChecker(wisdomModifier + 2, "form53_1"); // medicine
        classCounter++;
      } else if (random === 1 && document.getElementById("form9_1").checked === undefined) {
        add_click(9);
        statChecker(intelligenceModifier + 2, "form48_1"); // history
        classCounter++;
      } else if (random === 2 && document.getElementById("form20_1").checked === undefined) {
        add_click(20);
        statChecker(intelligenceModifier + 2, "form33_1"); // religion
        classCounter++;
      } else if (random === 3 && document.getElementById("form13_1").checked === undefined) {
        add_click(13);
        statChecker(wisdomModifier + 2, "form35_1"); // insight
        classCounter++;
      } else if (random === 4 && document.getElementById("form1_1").checked === undefined) {
        add_click(1);
        statChecker(charismaModifier + 2, "form45_1"); // persuasion
        classCounter++;
      }
    }
  } else if (classAndLevel === "Sorcerer 1") {
    while (classCounter < 2) {
      random = Math.floor(Math.random() * 6);
      if (random === 0 && document.getElementById("form21_1").checked === undefined) {
        add_click(21);
        statChecker(intelligenceModifier + 2, "form40_1"); // arcana
        classCounter++;
      } else if (random === 1 && document.getElementById("form24_1").checked === undefined) {
        add_click(24);
        statChecker(charismaModifier + 2, "form44_1"); // intimidation
        classCounter++;
      } else if (random === 2 && document.getElementById("form20_1").checked === undefined) {
        add_click(20);
        statChecker(intelligenceModifier + 2, "form33_1"); // religion
        classCounter++;
      } else if (random === 3 && document.getElementById("form13_1").checked === undefined) {
        add_click(13);
        statChecker(wisdomModifier + 2, "form35_1"); // insight
        classCounter++;
      } else if (random === 4 && document.getElementById("form1_1").checked === undefined) {
        add_click(1);
        statChecker(charismaModifier + 2, "form45_1"); // persuasion
        classCounter++;
      } else if (random === 5 && document.getElementById("form17_1").checked === undefined) {
        add_click(17);
        statChecker(charismaModifier + 2, "form36_1"); // deception
        classCounter++;
      }
    }
  } else if (classAndLevel === "Wizard 1") {
    while (classCounter < 2) {
      random = Math.floor(Math.random() * 6);
      if (random === 0 && document.getElementById("form21_1").checked === undefined) {
        add_click(21);
        statChecker(intelligenceModifier + 2, "form40_1"); // arcana
        classCounter++;
      } else if (random === 1 && document.getElementById("form14_1").checked === undefined) {
        add_click(14);
        statChecker(intelligenceModifier + 2, "form31_1"); // investigation
        classCounter++;
      } else if (random === 2 && document.getElementById("form20_1").checked === undefined) {
        add_click(20);
        statChecker(intelligenceModifier + 2, "form33_1"); // religion
        classCounter++;
      } else if (random === 3 && document.getElementById("form13_1").checked === undefined) {
        add_click(13);
        statChecker(wisdomModifier + 2, "form35_1"); // insight
        classCounter++;
      } else if (random === 4 && document.getElementById("form1_1").checked === undefined) {
        add_click(1);
        statChecker(charismaModifier + 2, "form45_1"); // persuasion
        classCounter++;
      } else if (random === 5 && document.getElementById("form5_1").checked === undefined) {
        add_click(5);
        statChecker(wisdomModifier + 2, "form53_1"); // medicine
        classCounter++;
      }
    }
  } else if (classAndLevel === "Druid 1") {
    while (classCounter < 2) {
      random = Math.floor(Math.random() * 8);
      if (random === 0 && document.getElementById("form21_1").checked === undefined) {
        add_click(21);
        statChecker(intelligenceModifier + 2, "form40_1"); // arcana
        classCounter++;
      } else if (random === 1 && document.getElementById("form14_1").checked === undefined) {
        add_click(14);
        statChecker(intelligenceModifier + 2, "form31_1"); // investigation
        classCounter++;
      } else if (random === 2 && document.getElementById("form20_1").checked === undefined) {
        add_click(20);
        statChecker(intelligenceModifier + 2, "form33_1"); // religion
        classCounter++;
      } else if (random === 3 && document.getElementById("form13_1").checked === undefined) {
        add_click(13);
        statChecker(wisdomModifier + 2, "form35_1"); // insight
        classCounter++;
      } else if (random === 4 && document.getElementById("form7_1").checked === undefined) {
        add_click(7);
        statChecker(wisdomModifier + 2, "form43_1"); // perception
        classCounter++;
      } else if (random === 5 && document.getElementById("form5_1").checked === undefined) {
        add_click(5);
        statChecker(wisdomModifier + 2, "form53_1"); // medicine
        classCounter++;
      } else if (random === 6 && document.getElementById("form11_1").checked === undefined) {
        add_click(11);
        statChecker(intelligenceModifier + 2, "form37_1"); // nature
        classCounter++;
      } else if (random === 7 && document.getElementById("form12_1").checked === undefined) {
        add_click(12);
        statChecker(wisdomModifier + 2, "form47_1"); // survival
        classCounter++;
      }
    }
  } else if (classAndLevel === "Rogue 1") {
    while (classCounter < 4) {
      random = Math.floor(Math.random() * 11);
      if (random === 0 && document.getElementById("form7_1").checked === undefined) {
        add_click(7);
        statChecker(wisdomModifier + 2, "form43_1"); // perception
        classCounter++;
      } else if (random === 1 && document.getElementById("form23_1").checked === undefined) {
        add_click(23);
        statChecker(dexterityModifier + 2, "form32_1"); // stealth
        classCounter++;
      } else if (random === 2 && document.getElementById("form2_1").checked === undefined) {
        add_click(2);
        statChecker(strengthModifier + 2, "form49_1"); // athletics
        classCounter++;
      } else if (random === 3 && document.getElementById("form19_1").checked === undefined) {
        add_click(19);
        statChecker(dexterityModifier + 2, "form38_1"); // acrobatics
        classCounter++;
      } else if (random === 4 && document.getElementById("form17_1").checked === undefined) {
        add_click(17);
        statChecker(charismaModifier + 2, "form36_1"); // deception
        classCounter++;
      } else if (random === 5 && document.getElementById("form4_1").checked === undefined) {
        add_click(4);
        statChecker(dexterityModifier + 2, "form46_1"); // sleight of hand
        classCounter++;
      } else if (random === 6 && document.getElementById("form14_1").checked === undefined) {
        add_click(14);
        statChecker(intelligenceModifier + 2, "form31_1"); // investigation
        classCounter++;
      } else if (random === 7 && document.getElementById("form1_1").checked === undefined) {
        add_click(1);
        statChecker(charismaModifier + 2, "form45_1"); // persuasion
        classCounter++;
      } else if (random === 8 && document.getElementById("form16_1").checked === undefined) {
        add_click(16);
        statChecker(charismaModifier + 2, "form34_1"); // performance
        classCounter++;
      } else if (random === 9 && document.getElementById("form12_1").checked === undefined) {
        add_click(12);
        statChecker(wisdomModifier + 2, "form47_1"); // survival
        classCounter++;
      } else if (random === 10 && document.getElementById("form13_1").checked === undefined) {
        add_click(13);
        statChecker(wisdomModifier + 2, "form35_1"); // insight
        classCounter++;
      }
    }
  } else if (classAndLevel === "Warlock 1") {
    while (classCounter < 2) {
      random = Math.floor(Math.random() * 7);
      if (random === 0 && document.getElementById("form21_1").checked === undefined) {
        add_click(21);
        statChecker(intelligenceModifier + 2, "form40_1"); // arcana
        classCounter++;
      } else if (random === 1 && document.getElementById("form24_1").checked === undefined) {
        add_click(24);
        statChecker(charismaModifier + 2, "form44_1"); // intimidation
        classCounter++;
      } else if (random === 2 && document.getElementById("form20_1").checked === undefined) {
        add_click(20);
        statChecker(intelligenceModifier + 2, "form33_1"); // religion
        classCounter++;
      } else if (random === 3 && document.getElementById("form11_1").checked === undefined) {
        add_click(11);
        statChecker(intelligenceModifier + 2, "form37_1"); // nature
        classCounter++;
      } else if (random === 4 && document.getElementById("form17_1").checked === undefined) {
        add_click(17);
        statChecker(charismaModifier + 2, "form36_1"); // deception
        classCounter++;
      } else if (random === 5 && document.getElementById("form14_1").checked === undefined) {
        add_click(14);
        statChecker(intelligenceModifier + 2, "form31_1"); // investigation
        classCounter++;
      } else if (random === 6 && document.getElementById("form9_1").checked === undefined) {
        add_click(9);
        statChecker(intelligenceModifier + 2, "form48_1"); // history
        classCounter++;
      }
    }
  } else if (classAndLevel === "Ranger 1") {
    while (classCounter < 3) {
      random = Math.floor(Math.random() * 8);
      if (random === 0 && document.getElementById("form7_1").checked === undefined) {
        add_click(7);
        statChecker(wisdomModifier + 2, "form43_1"); // perception
        classCounter++;
      } else if (random === 1 && document.getElementById("form13_1").checked === undefined) {
        add_click(13);
        statChecker(wisdomModifier + 2, "form35_1"); // insight
        classCounter++;
      } else if (random === 2 && document.getElementById("form2_1").checked === undefined) {
        add_click(2);
        statChecker(strengthModifier + 2, "form49_1"); // athletics
        classCounter++;
      } else if (random === 3 && document.getElementById("form11_1").checked === undefined) {
        add_click(11);
        statChecker(intelligenceModifier + 2, "form37_1"); // nature
        classCounter++;
      } else if (random === 4 && document.getElementById("form23_1").checked === undefined) {
        add_click(23);
        statChecker(dexterityModifier + 2, "form32_1"); // stealth
        classCounter++;
      } else if (random === 5 && document.getElementById("form14_1").checked === undefined) {
        add_click(14);
        statChecker(intelligenceModifier + 2, "form31_1"); // investigation
        classCounter++;
      } else if (random === 6 && document.getElementById("form12_1").checked === undefined) {
        add_click(12);
        statChecker(wisdomModifier + 2, "form47_1"); // survival
        classCounter++;
      } else if (random === 7 && document.getElementById("form8_1").checked === undefined) {
        add_click(8);
        statChecker(wisdomModifier + 2, "form50_1"); // animal handling
        classCounter++;
      }
    }
  } else if (classAndLevel === "Paladin 1") {
    while (classCounter < 2) {
      random = Math.floor(Math.random() * 6);
      if (random === 0 && document.getElementById("form20_1").checked === undefined) {
        add_click(20);
        statChecker(intelligenceModifier + 2, "form33_1"); // religion
        classCounter++;
      } else if (random === 1 && document.getElementById("form13_1").checked === undefined) {
        add_click(13);
        statChecker(wisdomModifier + 2, "form35_1"); // insight
        classCounter++;
      } else if (random === 2 && document.getElementById("form2_1").checked === undefined) {
        add_click(2);
        statChecker(strengthModifier + 2, "form49_1"); // athletics
        classCounter++;
      } else if (random === 3 && document.getElementById("form24_1").checked === undefined) {
        add_click(24);
        statChecker(charismaModifier + 2, "form44_1"); // intimidation
        classCounter++;
      } else if (random === 4 && document.getElementById("form1_1").checked === undefined) {
        add_click(1);
        statChecker(charismaModifier + 2, "form45_1"); // persuasion
        classCounter++;
      } else if (random === 5 && document.getElementById("form5_1").checked === undefined) {
        add_click(5);
        statChecker(wisdomModifier + 2, "form53_1"); // medicine
        classCounter++;
      }
    }
  } else if (classAndLevel === "Monk 1") {
    while (classCounter < 2) {
      random = Math.floor(Math.random() * 6);
      if (random === 0 && document.getElementById("form20_1").checked === undefined) {
        add_click(20);
        statChecker(intelligenceModifier + 2, "form33_1"); // religion
        classCounter++;
      } else if (random === 1 && document.getElementById("form13_1").checked === undefined) {
        add_click(13);
        statChecker(wisdomModifier + 2, "form35_1"); // insight
        classCounter++;
      } else if (random === 2 && document.getElementById("form2_1").checked === undefined) {
        add_click(2);
        statChecker(strengthModifier + 2, "form49_1"); // athletics
        classCounter++;
      } else if (random === 3 && document.getElementById("form19_1").checked === undefined) {
        add_click(19);
        statChecker(dexterityModifier + 2, "form38_1"); // acrobatics
        classCounter++;
      } else if (random === 4 && document.getElementById("form23_1").checked === undefined) {
        add_click(23);
        statChecker(dexterityModifier + 2, "form32_1"); // stealth
        classCounter++;
      } else if (random === 5 && document.getElementById("form9_1").checked === undefined) {
        add_click(9);
        statChecker(intelligenceModifier + 2, "form48_1"); // history
        classCounter++;
      }
    }
  }
}

export function apply_weapon_proficiencies(classAndLevel, ctx) {
  const { weaponAdder, weaponAdder2, armorAdder, armorAdder2, features } = ctx;
  if (classAndLevel === "Barbarian 1") {
    weaponAdder2(weaponAdder("simple weapons")); weaponAdder2(weaponAdder("martial weapons"));
    armorAdder2(armorAdder("light armor")); armorAdder2(armorAdder("medium armor")); armorAdder2(armorAdder("shield"));
  } else if (classAndLevel === "Fighter 1") {
    weaponAdder2(weaponAdder("simple weapons")); weaponAdder2(weaponAdder("martial weapons"));
    armorAdder2(armorAdder("light armor")); armorAdder2(armorAdder("medium armor"));
    armorAdder2(armorAdder("heavy armor")); armorAdder2(armorAdder("shield"));
  } else if (classAndLevel === "Bard 1") {
    weaponAdder2(weaponAdder("simple weapons")); armorAdder2(armorAdder("light armor"));
    weaponAdder2(weaponAdder("hand crossbow")); weaponAdder2(weaponAdder("longsword"));
    weaponAdder2(weaponAdder("rapier")); weaponAdder2(weaponAdder("shortsword"));
  } else if (classAndLevel === "Cleric 1") {
    weaponAdder2(weaponAdder("simple weapons")); armorAdder2(armorAdder("light armor"));
    armorAdder2(armorAdder("medium armor")); armorAdder2(armorAdder("shield"));
  } else if (classAndLevel === "Sorcerer 1" || classAndLevel === "Wizard 1") {
    weaponAdder2(weaponAdder("dagger")); weaponAdder2(weaponAdder("dart"));
    weaponAdder2(weaponAdder("quarterstaff")); weaponAdder2(weaponAdder("sling"));
    weaponAdder2(weaponAdder("light crossbow"));
  } else if (classAndLevel === "Druid 1") {
    armorAdder2(armorAdder("light armor")); armorAdder2(armorAdder("medium armor")); armorAdder2(armorAdder("shield"));
    features.push("(All armor and shields must be nonmetal)");
    weaponAdder2(weaponAdder("club")); weaponAdder2(weaponAdder("dagger")); weaponAdder2(weaponAdder("dart"));
    weaponAdder2(weaponAdder("javelin")); weaponAdder2(weaponAdder("mace")); weaponAdder2(weaponAdder("quarterstaff"));
    weaponAdder2(weaponAdder("scimitar")); weaponAdder2(weaponAdder("sickle")); weaponAdder2(weaponAdder("sling"));
    weaponAdder2(weaponAdder("spear"));
  } else if (classAndLevel === "Rogue 1") {
    weaponAdder2(weaponAdder("simple weapons")); armorAdder2(armorAdder("light armor"));
    weaponAdder2(weaponAdder("hand crossbow")); weaponAdder2(weaponAdder("longsword"));
    weaponAdder2(weaponAdder("rapier")); weaponAdder2(weaponAdder("shortsword"));
  } else if (classAndLevel === "Warlock 1") {
    weaponAdder2(weaponAdder("simple weapons")); armorAdder2(armorAdder("light armor"));
  } else if (classAndLevel === "Ranger 1") {
    weaponAdder2(weaponAdder("simple weapons")); weaponAdder2(weaponAdder("martial weapons"));
    armorAdder2(armorAdder("light armor")); armorAdder2(armorAdder("medium armor")); armorAdder2(armorAdder("shield"));
  } else if (classAndLevel === "Paladin 1") {
    weaponAdder2(weaponAdder("simple weapons")); weaponAdder2(weaponAdder("martial weapons"));
    armorAdder2(armorAdder("light armor")); armorAdder2(armorAdder("medium armor"));
    armorAdder2(armorAdder("heavy armor")); armorAdder2(armorAdder("shield"));
  } else if (classAndLevel === "Monk 1") {
    weaponAdder2(weaponAdder("simple weapons")); weaponAdder2(weaponAdder("shortsword"));
  }
}

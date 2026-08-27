import { stat_checker } from "./util/stat-checkers.js";

export function apply_spells({ classAndLevel, className, strength, constitution, dexterity, charismaModifier, wisdomModifier, intelligenceModifier }) {
  if (classAndLevel === "Bard 1") {
    document.getElementById("form214_3").value = className;
    document.getElementById("form196_3").value = "CHA";
    document.getElementById("form194_3").value = 10 + charismaModifier;
    stat_checker(charismaModifier + 2, "form195_3");
    document.getElementById("form97_3").value = 2;
    document.getElementById("form193_3").value = "Charm Person";
    document.getElementById("form159_3").value = "Faerie Fire";
    if (strength > 12 && constitution > 12) {
      document.getElementById("form137_3").value = "Thunderwave";
    } else {
      document.getElementById("form137_3").value = "Tasha's Hideous Laughter";
    }
    if (strength > 12 && constitution > 12) {
      document.getElementById("form136_3").value = "Cure Wounds";
    } else {
      document.getElementById("form136_3").value = "Healing Word";
    }
    if (document.getElementById("form198_3").value === "Minor Illusion") {
      document.getElementById("form213_3").value = "Vicious Mockery";
      document.getElementById("form204_3").value = "Prestidigitation";
    } else if (document.getElementById("form198_3").value === "Prestidigitation") {
      document.getElementById("form213_3").value = "Vicious Mockery";
      document.getElementById("form204_3").value = "Prestidigitation";
    } else if (document.getElementById("form198_3").value === "Thaumaturgy") {
      document.getElementById("form213_3").value = "Minor Illusion";
      document.getElementById("form204_3").value = "Vicious Mockery";
    } else {
      document.getElementById("form213_3").value = "Vicious Mockery";
      document.getElementById("form204_3").value = "Prestidigitation";
    }
    document.getElementById("form62_1").value = "d6";
  } else if (classAndLevel === "Sorcerer 1") {
    document.getElementById("form214_3").value = className;
    document.getElementById("form196_3").value = "CHA";
    document.getElementById("form194_3").value = 10 + charismaModifier;
    stat_checker(charismaModifier + 2, "form195_3");
    document.getElementById("form97_3").value = 2;
    document.getElementById("form213_3").value = "Prestidigitation";
    document.getElementById("form204_3").value = "Friends";
    document.getElementById("form203_3").value = "Message";
    document.getElementById("form202_3").value = "Fire Bolt";
    document.getElementById("form193_3").value = "Charm Person";
    document.getElementById("form159_3").value = "Burning Hands";
  } else if (classAndLevel === "Warlock 1") {
    document.getElementById("form214_3").value = className;
    document.getElementById("form196_3").value = "CHA";
    document.getElementById("form194_3").value = 10 + charismaModifier;
    stat_checker(charismaModifier + 2, "form195_3");
    document.getElementById("form213_3").value = "Eldritch Blast";
    document.getElementById("form204_3").value = "Poison Spray";
    document.getElementById("form137_3").value = "Hex";
    document.getElementById("form136_3").value = "Witch Bolt";
    document.getElementById("form97_3").value = 1;
  } else if (classAndLevel === "Wizard 1") {
    document.getElementById("form214_3").value = className;
    document.getElementById("form196_3").value = "INT";
    document.getElementById("form194_3").value = 10 + intelligenceModifier;
    stat_checker(intelligenceModifier + 2, "form195_3");
    document.getElementById("form213_3").value = "Prestidigitation";
    if (document.getElementById("form198_3") === "Minor Illusion") {
      document.getElementById("form204_3").value = "Mage Hand";
    } else {
      document.getElementById("form204_3").value = "Minor Illusion";
    }
    document.getElementById("form203_3").value = "Fire Bolt";
    if (intelligenceModifier === 0) {
      document.getElementById("form193_3").value = "Magic Missile";
    } else if (intelligenceModifier === 1) {
      document.getElementById("form193_3").value = "Magic Missile";
      document.getElementById("form159_3").value = "Mage Armor";
    } else if (intelligenceModifier === 2) {
      document.getElementById("form193_3").value = "Magic Missile";
      document.getElementById("form159_3").value = "Mage Armor";
      document.getElementById("form137_3").value = "Sleep";
    } else if (intelligenceModifier === 3) {
      document.getElementById("form193_3").value = "Magic Missile";
      document.getElementById("form159_3").value = "Mage Armor";
      document.getElementById("form137_3").value = "Sleep";
      document.getElementById("form136_3").value = "Burning Hands";
    } else if (intelligenceModifier === 4) {
      document.getElementById("form193_3").value = "Magic Missile";
      document.getElementById("form159_3").value = "Mage Armor";
      document.getElementById("form137_3").value = "Sleep";
      document.getElementById("form136_3").value = "Burning Hands";
      document.getElementById("form135_3").value = "Tasha's Hideous Laughter";
    } else if (intelligenceModifier === 5) {
      document.getElementById("form193_3").value = "Magic Missile";
      document.getElementById("form159_3").value = "Mage Armor";
      document.getElementById("form137_3").value = "Sleep";
      document.getElementById("form136_3").value = "Burning Hands";
      document.getElementById("form135_3").value = "Tasha's Hideous Laughter";
      document.getElementById("form133_3").value = "Unseen Servant";
    }
    document.getElementById("form97_3").value = 2;
  } else if (classAndLevel === "Cleric 1") {
    document.getElementById("form214_3").value = className;
    document.getElementById("form196_3").value = "WIS";
    document.getElementById("form194_3").value = 10 + wisdomModifier;
    stat_checker(wisdomModifier + 2, "form195_3");
    document.getElementById("form97_3").value = 2;
  } else if (classAndLevel === "Druid 1") {
    document.getElementById("form214_3").value = className;
    document.getElementById("form196_3").value = "WIS";
    document.getElementById("form194_3").value = 10 + wisdomModifier;
    stat_checker(wisdomModifier + 2, "form195_3");
    document.getElementById("form97_3").value = 2;
    if (strength > dexterity) {
      document.getElementById("form213_3").value = "Shilelagh";
      document.getElementById("form204_3").value = "Druidcraft";
    } else {
      document.getElementById("form213_3").value = "Produce Flame";
      document.getElementById("form204_3").value = "Druidcraft";
    }
    if (wisdomModifier === 0) {
      document.getElementById("form193_3").value = "Healing Word";
    } else if (wisdomModifier === 1) {
      document.getElementById("form193_3").value = "Healing Word";
      document.getElementById("form159_3").value = "Thunderwave";
    } else if (wisdomModifier === 2) {
      document.getElementById("form193_3").value = "Healing Word";
      document.getElementById("form159_3").value = "Thunderwave";
      document.getElementById("form137_3").value = "Entangle";
    } else if (wisdomModifier === 3) {
      document.getElementById("form193_3").value = "Healing Word";
      document.getElementById("form159_3").value = "Thunderwave";
      document.getElementById("form137_3").value = "Entangle";
      document.getElementById("form136_3").value = "Cure Wounds";
    } else if (wisdomModifier === 4) {
      document.getElementById("form193_3").value = "Healing Word";
      document.getElementById("form159_3").value = "Thunderwave";
      document.getElementById("form137_3").value = "Entangle";
      document.getElementById("form136_3").value = "Cure Wounds";
      document.getElementById("form135_3").value = "Faerie Fire";
    } else if (wisdomModifier === 5) {
      document.getElementById("form193_3").value = "Healing Word";
      document.getElementById("form159_3").value = "Thunderwave";
      document.getElementById("form137_3").value = "Entangle";
      document.getElementById("form136_3").value = "Cure Wounds";
      document.getElementById("form135_3").value = "Faerie Fire";
      document.getElementById("form133_3").value = "Earth Tremor";
    }
  }
}

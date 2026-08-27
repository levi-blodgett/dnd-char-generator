import {
  rangerBonds, rogueBonds, barbarianBonds, wizardBonds, warlockBonds,
  clericBonds, bardBonds, paladinBonds, sorcererBonds, monkBonds,
  druidBonds, fighterBonds,
} from "../shared/data/bonds.js";
import { random_by_length } from "./util/random-by-length.js";

export function apply_weapon_profs(classAndLevel, ctx) {
  const {
    weapon_adder, weapon_adder_2, armor_adder, armor_adder_2,
    dexterityModifier, constitutionModifier, wisdomModifier,
    equipment, features, bonds,
  } = ctx;
  let armorClassDelta = 0;

  if (classAndLevel === "Barbarian 1") {
    weapon_adder_2(weapon_adder("simple weapons"));
    weapon_adder_2(weapon_adder("martial weapons"));
    armor_adder_2(armor_adder("light armor"));
    armor_adder_2(armor_adder("medium armor"));
    armor_adder_2(armor_adder("shield"));
    armorClassDelta += 10 + dexterityModifier + constitutionModifier;
    equipment.push("Four javelins");
    equipment.push("Explorer's pack");
    random_by_length(barbarianBonds, bonds, "form101_1");
  } else if (classAndLevel === "Fighter 1") {
    weapon_adder_2(weapon_adder("simple weapons"));
    weapon_adder_2(weapon_adder("martial weapons"));
    armor_adder_2(armor_adder("light armor"));
    armor_adder_2(armor_adder("medium armor"));
    armor_adder_2(armor_adder("heavy armor"));
    armor_adder_2(armor_adder("shield"));
    random_by_length(fighterBonds, bonds, "form101_1");
  } else if (classAndLevel === "Bard 1") {
    weapon_adder_2(weapon_adder("simple weapons"));
    armor_adder_2(armor_adder("light armor"));
    weapon_adder_2(weapon_adder("hand crossbow"));
    weapon_adder_2(weapon_adder("longsword"));
    weapon_adder_2(weapon_adder("rapier"));
    weapon_adder_2(weapon_adder("shortsword"));
    random_by_length(bardBonds, bonds, "form101_1");
  } else if (classAndLevel === "Cleric 1") {
    weapon_adder_2(weapon_adder("simple weapons"));
    armor_adder_2(armor_adder("light armor"));
    armor_adder_2(armor_adder("medium armor"));
    armor_adder_2(armor_adder("shield"));
    random_by_length(clericBonds, bonds, "form101_1");
  } else if (classAndLevel === "Sorcerer 1") {
    weapon_adder_2(weapon_adder("dagger"));
    weapon_adder_2(weapon_adder("dart"));
    weapon_adder_2(weapon_adder("quarterstaff"));
    weapon_adder_2(weapon_adder("sling"));
    weapon_adder_2(weapon_adder("light crossbow"));
    random_by_length(sorcererBonds, bonds, "form101_1");
  } else if (classAndLevel === "Wizard 1") {
    weapon_adder_2(weapon_adder("dagger"));
    weapon_adder_2(weapon_adder("dart"));
    weapon_adder_2(weapon_adder("quarterstaff"));
    weapon_adder_2(weapon_adder("sling"));
    weapon_adder_2(weapon_adder("light crossbow"));
    random_by_length(wizardBonds, bonds, "form101_1");
  } else if (classAndLevel === "Druid 1") {
    armor_adder_2(armor_adder("light armor"));
    armor_adder_2(armor_adder("medium armor"));
    armor_adder_2(armor_adder("shield"));
    features.push("(All armor and shields must be nonmetal)");
    weapon_adder_2(weapon_adder("club"));
    weapon_adder_2(weapon_adder("dagger"));
    weapon_adder_2(weapon_adder("dart"));
    weapon_adder_2(weapon_adder("javelin"));
    weapon_adder_2(weapon_adder("mace"));
    weapon_adder_2(weapon_adder("quarterstaff"));
    weapon_adder_2(weapon_adder("scimitar"));
    weapon_adder_2(weapon_adder("sickle"));
    weapon_adder_2(weapon_adder("sling"));
    weapon_adder_2(weapon_adder("spear"));
    random_by_length(druidBonds, bonds, "form101_1");
  } else if (classAndLevel === "Rogue 1") {
    weapon_adder_2(weapon_adder("simple weapons"));
    armor_adder_2(armor_adder("light armor"));
    weapon_adder_2(weapon_adder("hand crossbow"));
    weapon_adder_2(weapon_adder("longsword"));
    weapon_adder_2(weapon_adder("rapier"));
    weapon_adder_2(weapon_adder("shortsword"));
    random_by_length(rogueBonds, bonds, "form101_1");
  } else if (classAndLevel === "Warlock 1") {
    weapon_adder_2(weapon_adder("simple weapons"));
    armor_adder_2(armor_adder("light armor"));
    random_by_length(warlockBonds, bonds, "form101_1");
  } else if (classAndLevel === "Ranger 1") {
    weapon_adder_2(weapon_adder("simple weapons"));
    weapon_adder_2(weapon_adder("martial weapons"));
    armor_adder_2(armor_adder("light armor"));
    armor_adder_2(armor_adder("medium armor"));
    armor_adder_2(armor_adder("shield"));
    random_by_length(rangerBonds, bonds, "form101_1");
  } else if (classAndLevel === "Paladin 1") {
    weapon_adder_2(weapon_adder("simple weapons"));
    weapon_adder_2(weapon_adder("martial weapons"));
    armor_adder_2(armor_adder("light armor"));
    armor_adder_2(armor_adder("medium armor"));
    armor_adder_2(armor_adder("heavy armor"));
    armor_adder_2(armor_adder("shield"));
    random_by_length(paladinBonds, bonds, "form101_1");
  } else if (classAndLevel === "Monk 1") {
    armorClassDelta += 10 + dexterityModifier + wisdomModifier;
    weapon_adder_2(weapon_adder("simple weapons"));
    weapon_adder_2(weapon_adder("shortsword"));
    random_by_length(monkBonds, bonds, "form101_1");
  }

  return armorClassDelta;
}

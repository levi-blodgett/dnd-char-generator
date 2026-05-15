export function apply_armor_class(equipment, armor, dexterityModifier, features) {
  let armorClass = 0;
  for (const item of equipment) {
    if (item === armor.lightArmor.padded.armorname || item === armor.lightArmor.leather.armorname) {
      armorClass += 11 + dexterityModifier;
    } else if (item === armor.lightArmor.studdedleather.armorname) {
      armorClass += 12 + dexterityModifier;
    } else if (item === armor.mediumArmor.hide.armorname) {
      armorClass += 12 + dexterityModifier;
    } else if (item === armor.mediumArmor.chainshirt.armorname) {
      armorClass += 13 + dexterityModifier;
    } else if (item === armor.mediumArmor.scalemail.armorname) {
      armorClass += 14 + dexterityModifier;
      features.push("Scale Mail: Disadvantage on stealth rolls from medium armor.");
    } else if (item === armor.heavyArmor.ringmail.armorname) {
      armorClass += 14;
      features.push("Ring Mail: Disadvantage on stealth rolls from heavy armor.");
    } else if (item === armor.heavyArmor.chainmail.armorname) {
      armorClass += 16;
      features.push("Chain Mail: Disadvantage on stealth rolls from heavy armor.");
    }
  }
  for (const item of equipment) {
    if (item === "Shield" || item === "Shield - Focus" || item === "Wooden shield") armorClass += 2;
  }
  return armorClass;
}

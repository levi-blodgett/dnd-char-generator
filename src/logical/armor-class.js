export function compute_armor_class(ctx) {
  const { equipment, armor, dexterityModifier, features } = ctx;

  for (let i = 0; i < equipment.length; i++) {
    if (equipment[i] === armor.lightArmor.padded.armorname) {
      ctx.armorClass += 11 + dexterityModifier;
    } else if (equipment[i] === armor.lightArmor.leather.armorname) {
      ctx.armorClass += 11 + dexterityModifier;
    } else if (equipment[i] === armor.lightArmor.studdedleather.armorname) {
      ctx.armorClass += 12 + dexterityModifier;
    } else if (equipment[i] === armor.mediumArmor.hide.armorname) {
      ctx.armorClass += 12 + dexterityModifier;
    } else if (equipment[i] === armor.mediumArmor.chainshirt.armorname) {
      ctx.armorClass += 13 + dexterityModifier;
    } else if (equipment[i] === armor.mediumArmor.scalemail.armorname) {
      ctx.armorClass += 14 + dexterityModifier;
      features.push("Scale Mail: Disadvantage on stealth rolls from medium armor.");
    } else if (equipment[i] === armor.heavyArmor.ringmail.armorname) {
      ctx.armorClass += 14;
      features.push("Ring Mail: Disadvantage on stealth rolls from heavy armor.");
    } else if (equipment[i] === armor.heavyArmor.chainmail.armorname) {
      ctx.armorClass += 16;
      features.push("Chain Mail: Disadvantage on stealth rolls from heavy armor.");
    }
  }

  for (let i = 0; i < equipment.length; i++) {
    if (
      equipment[i] === "Shield" ||
      equipment[i] === "Shield - Focus" ||
      equipment[i] === "Wooden shield"
    ) {
      ctx.armorClass += 2;
    }
  }
}

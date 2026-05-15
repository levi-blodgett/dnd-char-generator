export function apply_barbarian_equipment(ctx) {
  const {
    random, random2,
    strengthModifier, dexterityModifier, constitutionModifier,
    martialWeaponsArray, simpleWeaponsArray,
    firstWeaponFirstSectionId, firstWeaponSecondSectionId, firstWeaponThirdSectionId,
    secondWeaponFirstSectionId, secondWeaponSecondSectionId, secondWeaponThirdSectionId,
    equipment, features, spellcastingSection,
    statChecker, statChecker3, attackSectionWeaponAdder, attackSectionWeaponPicker,
  } = ctx;

  ctx.armorClass += 10 + dexterityModifier + constitutionModifier;
  equipment.push("Four javelins");
  equipment.push("Explorer's pack");
  features.push(
    "Rage (2/lr): On your turn, you can enter a rage as a Bonus Action. While raging, you gain the following benefits if you aren't wearing heavy armor: You have advantage on Strength Checks and Strength saving throws. When you make a melee weapon Attack using Strength, you gain a +2 bonus to the damage roll. This bonus increases as you level. You have Resistance to bludgeoning, piercing, and slashing damage. If you are able to cast Spells, you can't cast them or concentrate on them while raging. See player's handbook for more details."
  );
  features.push(
    "Unarmored Defense: While you are not wearing any armor, your armor class equals 10 + your dexterity modifier + your constitution modifier, usable with shield.."
  );
  spellcastingSection.push(
    "Rage (2/lr): Use your bonus action to rage and gain +2 to melee damage rolls using strength, and gain defensive benefits outlined in the features section."
  );
  if (random > 0.5) {
    attackSectionWeaponAdder(
      attackSectionWeaponPicker(martialWeaponsArray),
      firstWeaponFirstSectionId,
      firstWeaponSecondSectionId,
      firstWeaponThirdSectionId
    );
  } else {
    equipment.push("Greataxe");
    document.getElementById(firstWeaponFirstSectionId).value = "Greataxe";
    statChecker(strengthModifier + 2, firstWeaponSecondSectionId);
    statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d12", "S");
  }
  if (random2 > 0.5) {
    attackSectionWeaponAdder(
      attackSectionWeaponPicker(simpleWeaponsArray),
      secondWeaponFirstSectionId,
      secondWeaponSecondSectionId,
      secondWeaponThirdSectionId
    );
  } else {
    equipment.push("Two handaxes");
    document.getElementById(secondWeaponFirstSectionId).value = "Handaxe";
    statChecker(strengthModifier + 2, secondWeaponSecondSectionId);
    statChecker3(strengthModifier, secondWeaponThirdSectionId, "1d6", "S");
  }
}

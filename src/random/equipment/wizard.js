export function apply_wizard_equipment(ctx) {
  const {
    random, random2, random3,
    strengthModifier, dexterityModifier,
    firstWeaponFirstSectionId, firstWeaponSecondSectionId, firstWeaponThirdSectionId,
    equipment, features,
    statChecker, statChecker3,
    biggerWeaponStatDecider, charName,
  } = ctx;

  ctx.armorClass += 10 + dexterityModifier;
  features.push(
    "Arcane Recovery (1/d): When you finish a short rest once a day, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher."
  );
  if (random > 0.5) {
    equipment.push("Quarterstaff");
    document.getElementById(firstWeaponFirstSectionId).value = "Quarterstaff";
    statChecker(strengthModifier + 2, firstWeaponSecondSectionId);
    statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6", "B");
  } else {
    equipment.push("Dagger");
    document.getElementById(firstWeaponFirstSectionId).value = "Dagger";
    statChecker(
      biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2,
      firstWeaponSecondSectionId
    );
    statChecker3(
      biggerWeaponStatDecider(dexterityModifier, strengthModifier),
      firstWeaponThirdSectionId,
      "1d4",
      "P"
    );
  }
  if (random2 > 0.8) {
    equipment.push("Crumpled up notes - Spellbook");
    equipment.push("Lightning in a bottle - Focus");
  } else if (random2 > 0.6) {
    equipment.push("Various colorful tattoos - Spellbook");
    equipment.push("Crystal with pink water inside - Focus");
  } else if (random2 > 0.4) {
    equipment.push("Leather-bound tome with suspiciously red ink - Spellbook");
    equipment.push("Metallic rod with amber stone on top - Focus");
  } else if (random2 > 0.2) {
    equipment.push(
      "Thick black leather with platinum reinforced corners, silvery ink, the front embossed with your name, " +
        charName +
        " - Spellbook"
    );
    equipment.push("Specially carved, gnarled, wooden staff - Focus");
  } else {
    equipment.push("Light leather book with gem-encrusted spine - Spellbook");
    equipment.push("Partially petrified willow wand - Focus");
  }
  if (random3 > 0.5) {
    equipment.push("Scholar's pack");
  } else {
    equipment.push("Explorer's pack");
  }
}

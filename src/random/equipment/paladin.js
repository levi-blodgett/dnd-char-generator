export function apply_paladin_equipment(ctx) {
  const {
    random, random2, random4,
    strengthModifier, charismaModifier,
    martialWeaponsArray, simpleWeaponsArray,
    firstWeaponFirstSectionId, firstWeaponSecondSectionId, firstWeaponThirdSectionId,
    secondWeaponFirstSectionId, secondWeaponSecondSectionId, secondWeaponThirdSectionId,
    thirdWeaponFirstSectionId, thirdWeaponSecondSectionId, thirdWeaponThirdSectionId,
    equipment, features, spellcastingSection, alliesAndOrganizations,
    alignment,
    statChecker, statChecker3, attackSectionWeaponAdder, attackSectionWeaponPicker,
  } = ctx;

  equipment.push("Chain mail");
  features.push(
    "Divine Sense (" +
      (charismaModifier + 1) +
      "/lr: As an action, until the end of your next turn, you know the location of any celestial, fiend, or Undead within 60 feet of you that is not behind total cover. You know the type of any being whose presence you sense, but not its identity. Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated."
  );
  features.push(
    "Lay on Hands (5 hp/lr): You can restore a total number of hit points equal to your paladin level x 5. As an action, you can use your pool to heal a target. Alternatively, you can expend 5 hit points from your pool to cure the target of one disease or neutralize one poison affecting it. No effect on Undead and constructs."
  );
  spellcastingSection.push(
    "Lay on Hands (5 hp/lr): As an action you can heal another creature or cure them of disease or poison."
  );
  if (alignment[0] === "Lawful" && alignment[1] === "Good") {
    equipment.push("Silver bracer - Symbol");
    alliesAndOrganizations.push(
      "Pholtus - God of light and law, I will protect the good and bright light to such dark times like the present. This is my moment, this is his will."
    );
    alliesAndOrganizations.push(" ");
  } else if (alignment[0] === "Neutral" && alignment[1] === "Good") {
    equipment.push("Sun tattoo on right palm - Symbol");
    alliesAndOrganizations.push(
      "Pelor, God of the sun and healing, the sun has been beating on my back my entire life, I have only just begun to appreciate the wonders it has presented me."
    );
    alliesAndOrganizations.push(" ");
  } else if (alignment[0] === "Chaotic" && alignment[1] === "Good") {
    equipment.push("Triangular star ring - Symbol");
    alliesAndOrganizations.push(
      "Lliira - Goddess of joy, I won't let anyone take others happiness away, not even for a second if I can help it."
    );
    alliesAndOrganizations.push(" ");
  } else if (alignment[0] === "Lawful" && alignment[1] === "Neutral") {
    equipment.push("Partially-burnt gauntlet - Symbol");
    alliesAndOrganizations.push(
      "Helm, God of protection, I will uplift the just, and smite the self-righteous and wicked."
    );
    alliesAndOrganizations.push(" ");
  } else if (alignment[0] === "Neutral" && alignment[1] === "Neutral") {
    equipment.push("Fire-glass necklace - Symbol");
    alliesAndOrganizations.push(
      "Sirrion, God of fire and change, he will guide me through the world, and the chaos amongst it."
    );
    alliesAndOrganizations.push(" ");
  } else if (alignment[0] === "Chaotic" && alignment[1] === "Neutral") {
    equipment.push("Father's fingerbones - Symbol");
    alliesAndOrganizations.push(
      "The Traveler - deity of chaos and change, I feel like things only get better with change, and I am a catalyst."
    );
    alliesAndOrganizations.push(" ");
  } else if (alignment[0] === "Lawful" && alignment[1] === "Evil") {
    equipment.push("Black glove - Symbol");
    alliesAndOrganizations.push("Bane - God of Tyranny, my one true master.");
    alliesAndOrganizations.push(" ");
  } else if (alignment[0] === "Neutral" && alignment[1] === "Evil") {
    equipment.push("Dragonshard stone (fang-shaped) - Symbol");
    alliesAndOrganizations.push(
      "The Keeper, God of greed and death, I will gain everything in this world, I will devour this planet."
    );
    alliesAndOrganizations.push(" ");
  } else if (alignment[0] === "Chaotic" && alignment[1] === "Evil") {
    equipment.push("Skull of a wicked man - Symbol");
    alliesAndOrganizations.push(
      "Iuz - God of pain and oppression, I will worship this man as a vehicle for the pain and suffering that my wife suffered at the hands of those men."
    );
    alliesAndOrganizations.push(" ");
  }
  if (random > 0.5) {
    equipment.push("Explorer's pack");
  } else {
    equipment.push("Priest's pack");
  }
  if (random2 > 0.5) {
    equipment.push("Five javelins");
    document.getElementById(firstWeaponFirstSectionId).value = "Javelin";
    statChecker(strengthModifier + 2, firstWeaponSecondSectionId);
    statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6", "P");
  } else {
    attackSectionWeaponAdder(
      attackSectionWeaponPicker(simpleWeaponsArray),
      firstWeaponFirstSectionId,
      firstWeaponSecondSectionId,
      firstWeaponThirdSectionId
    );
  }
  attackSectionWeaponAdder(
    attackSectionWeaponPicker(martialWeaponsArray),
    secondWeaponFirstSectionId,
    secondWeaponSecondSectionId,
    secondWeaponThirdSectionId
  );
  if (random4 > 0.5) {
    equipment.push("Shield");
  } else {
    attackSectionWeaponAdder(
      attackSectionWeaponPicker(martialWeaponsArray),
      thirdWeaponFirstSectionId,
      thirdWeaponSecondSectionId,
      thirdWeaponThirdSectionId
    );
  }
  if (
    document.getElementById(thirdWeaponFirstSectionId).value ===
      document.getElementById(secondWeaponFirstSectionId).value &&
    document.getElementById(secondWeaponFirstSectionId).value != ""
  ) {
    equipment.pop();
    equipment.pop();
    equipment.push("Two " + document.getElementById(firstWeaponFirstSectionId).value + "s");
    document.getElementById(thirdWeaponFirstSectionId).value = "";
    document.getElementById(thirdWeaponSecondSectionId).value = "";
    document.getElementById(thirdWeaponThirdSectionId).value = "";
  }
}

import { stat_checker, stat_checker_3 } from "../util/stat-checkers.js";

export function apply_paladin_equipment(ctx) {
  const {
    features, spellcastingSection, equipment, alliesAndOrganizations, alignment,
    strength, charisma, constitution,
    strengthModifier, charismaModifier,
    random,
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
  if (strength > charisma && strength > constitution) {
    equipment.push("Explorer's pack");
    equipment.push("Greatsword");
    document.getElementById("form79_1").value = "Greatsword"; // 1st weapon 1st section
    stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
    stat_checker_3(strengthModifier, "form76_1", "2d6", "S"); // 1st weapon 3rd section

    equipment.push("Maul");
    document.getElementById("form77_1").value = "Maul"; // 3rd weapon 1st section
    stat_checker(strengthModifier + 2, "form66_1"); // 3rd weapon 2nd section
    stat_checker_3(strengthModifier, "form75_1", "2d6", "B"); // 3rd weapon 3rd section

    equipment.push("Five javelins");
    document.getElementById("form78_1").value = "Javelin"; // 2nd weapon 1st section
    stat_checker(strengthModifier + 2, "form65_1"); // 2nd weapon 2nd section
    stat_checker_3(strengthModifier, "form74_1", "1d6", "P"); // 2nd weapon 3rd section
  } else {
    equipment.push("Priest's pack");
    if (random > 0.75) {
      equipment.push("Shield");
      equipment.push("Warhammer");
      document.getElementById("form79_1").value = "Warhammer"; // 1st weapon 1st section
      stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
      stat_checker_3(strengthModifier, "form76_1", "1d8", "B"); // 1st weapon 3rd section
    } else if (random > 0.5) {
      equipment.push("Shield");
      equipment.push("Longsword");
      document.getElementById("form79_1").value = "Longsword"; // 1st weapon 1st section
      stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
      stat_checker_3(strengthModifier, "form76_1", "1d8", "S"); // 1st weapon 3rd section
    } else if (random > 0.25) {
      equipment.push("Shield");
      equipment.push("Flail");
      document.getElementById("form79_1").value = "Flail"; // 1st weapon 1st section
      stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
      stat_checker_3(strengthModifier, "form76_1", "1d8", "B"); // 1st weapon 3rd section
    } else {
      equipment.push("Shield");
      equipment.push("Morningstar");
      document.getElementById("form79_1").value = "Morningstar"; // 1st weapon 1st section
      stat_checker(strengthModifier + 2, "form64_1"); // 1st weapon 2nd section
      stat_checker_3(strengthModifier, "form76_1", "1d8", "P"); // 1st weapon 3rd section
    }

    if (random > 0.5) {
      equipment.push("Five javelins");
      document.getElementById("form78_1").value = "Javelin"; // 2nd weapon 1st section
      stat_checker(strengthModifier + 2, "form65_1"); // 2nd weapon 2nd section
      stat_checker_3(strengthModifier, "form74_1", "1d6", "P"); // 2nd weapon 3rd section
    } else if (random > 0.25) {
      equipment.push("Greatclub");
      document.getElementById("form78_1").value = "Greatclub"; // 2nd weapon 1st section
      stat_checker(strengthModifier + 2, "form65_1"); // 2nd weapon 2nd section
      stat_checker_3(strengthModifier, "form74_1", "1d8", "B"); // 2nd weapon 3rd section
    } else {
      equipment.push("Spear");
      document.getElementById("form78_1").value = "Spear"; // 2nd weapon 1st section
      stat_checker(strengthModifier + 2, "form65_1"); // 2nd weapon 2nd section
      stat_checker_3(strengthModifier, "form74_1", "1d6", "P"); // 2nd weapon 3rd section
    }
  }
}

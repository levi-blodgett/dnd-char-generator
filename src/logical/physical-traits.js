import { get_random_int } from "./util/random-int.js";

function skin_randomizer(skin1, skin2, skin3, skin4, skin5) {
  const options = [skin1, skin2, skin3, skin4, skin5];
  document.getElementById("form2_2").value = options[Math.floor(Math.random() * 5)];
}

function eye_randomizer(eyecolor1, eyecolor2, eyecolor3, eyecolor4) {
  const options = [eyecolor1, eyecolor2, eyecolor3, eyecolor4];
  document.getElementById("form6_2").value = options[Math.floor(Math.random() * 4)];
}

function hair_randomizer(hair1, hair2, hair3, hair4) {
  const options = [hair1, hair2, hair3, hair4];
  document.getElementById("form3_2").value = options[Math.floor(Math.random() * 4)];
}

function weight_randomizer(constitutionNumber, strengthNumber, lowestWeight, lowerWeight, mediumWeight, highWeight, higherWeight, highestWeight) {
  const beefiness = constitutionNumber + strengthNumber;
  const roll = Math.floor(Math.random() * 3);
  const discrepancy = roll === 0 ? -get_random_int(5, 15) : roll === 1 ? get_random_int(5, 15) : Math.floor(Math.random() * 5);
  const weights = [lowestWeight, lowerWeight, mediumWeight, highWeight, higherWeight, highestWeight];
  const idx = beefiness < 14 ? 0 : beefiness < 20 ? 1 : beefiness < 24 ? 2 : beefiness < 32 ? 3 : beefiness < 36 ? 4 : 5;
  document.getElementById("form4_2").value = weights[idx] + discrepancy;
}

function weight_randomizer_small(constitutionNumber, strengthNumber, lowestWeight, lowerWeight, mediumWeight, highWeight, higherWeight, highestWeight) {
  const beefiness = constitutionNumber + strengthNumber;
  const roll = Math.floor(Math.random() * 3);
  const discrepancy = roll === 0 ? -get_random_int(1, 3) : roll === 1 ? get_random_int(1, 3) : Math.floor(Math.random() * 2);
  const weights = [lowestWeight, lowerWeight, mediumWeight, highWeight, higherWeight, highestWeight];
  const idx = beefiness < 14 ? 0 : beefiness < 20 ? 1 : beefiness < 24 ? 2 : beefiness < 32 ? 3 : beefiness < 36 ? 4 : 5;
  document.getElementById("form4_2").value = weights[idx] + discrepancy;
}

function breath_decider(color, damagetype, constitutionModifier, additionalFeatures) {
  if (color === "Black" || color === "Blue" || color === "Brass" || color === "Bronze" || color === "Copper") {
    additionalFeatures.push(
      damagetype + " Breath Weapon: You can use your action to exhale your draconic ancestry in a 5 by 30 foot line. When you use your breath weapon, each creature in the area of the exhalation must make a dexterity saving throw. The DC for this saving throw is " +
        (10 + constitutionModifier) + ". A creature takes 2d6 " + damagetype.toLowerCase() + " damage on a failed save, and half as much damage on a successful one."
    );
  } else if (color === "Gold" || color === "Red") {
    additionalFeatures.push(
      damagetype + " Breath Weapon: You can use your action to exhale your draconic ancestry in a 15 foot cone. When you use your breath weapon, each creature in the area of the exhalation must make a dexterity saving throw. The DC for this saving throw is " +
        (10 + constitutionModifier) + ". A creature takes 2d6 " + damagetype.toLowerCase() + " damage on a failed save, and half as much damage on a successful one."
    );
  } else if (color === "Green" || color === "Silver" || color === "White") {
    additionalFeatures.push(
      damagetype + " Breath Weapon: You can use your action to exhale your draconic ancestry in a 15 foot cone. When you use your breath weapon, each creature in the area of the exhalation must make a constitution saving throw. The DC for this saving throw is " +
        (10 + constitutionModifier) + ". A creature takes 2d6 " + damagetype.toLowerCase() + " damage on a failed save, and half as much damage on a successful one."
    );
  }
}

export function apply_physical_traits(ctx) {
  const {
    race, constitution, strength, constitutionModifier, additionalFeatures,
    weapon_adder, weapon_adder_2, armor_adder, armor_adder_2,
  } = ctx;

  let hpDelta = 0;
  let size = "";

  const bd = (color, dmg) => breath_decider(color, dmg, constitutionModifier, additionalFeatures);
  const h = (in_, out) => { document.getElementById(out).value = in_; };
  const ht = (val) => Math.floor(val / 12) + "'" + (val % 12);

  if (race === "Black Dragonborn") {
    h(get_random_int(15, 40), "form5_2"); // age
    const _h = get_random_int(72, 80); h(ht(_h), "form1_2");
    skin_randomizer("Ivory Black", "Onyx Black", "Carbon Black", "Pearlescent Black", "Black");
    hair_randomizer("", "", "", "");
    weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340);
    eye_randomizer("Violet", "Blue", "Red", "Purple");
    bd("Black", "Acid");
  } else if (race === "Blue Dragonborn") {
    h(get_random_int(15, 40), "form5_2");
    const _h = get_random_int(72, 80); h(ht(_h), "form1_2");
    skin_randomizer("Blue", "Azure Blue", "Navy", "Pale Blue", "Royal Blue");
    hair_randomizer("", "", "", "");
    weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340);
    eye_randomizer("Violet", "Blue", "Red", "Purple");
    bd("Blue", "Lightning");
  } else if (race === "Brass Dragonborn") {
    h(get_random_int(15, 40), "form5_2");
    const _h = get_random_int(72, 80); h(ht(_h), "form1_2");
    skin_randomizer("Brass", "Rusty Brass", "Copper & Brass", "Fiery Brass", "Brass");
    hair_randomizer("", "", "", "");
    weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340);
    eye_randomizer("Yellow", "Green", "Red", "Blue");
    bd("Brass", "Fire");
  } else if (race === "Bronze Dragonborn") {
    h(get_random_int(15, 40), "form5_2");
    const _h = get_random_int(72, 80); h(ht(_h), "form1_2");
    skin_randomizer("Bronze", "Old Gold", "Dark Bronze", "Sandy Bronze", "Bronze");
    hair_randomizer("", "", "", "");
    weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340);
    eye_randomizer("Yellow", "Green", "Red", "Blue");
    bd("Bronze", "Lightning");
  } else if (race === "Copper Dragonborn") {
    h(get_random_int(15, 40), "form5_2");
    const _h = get_random_int(72, 80); h(ht(_h), "form1_2");
    skin_randomizer("Copper", "Bronze & Copper", "Rusty Copper", "Fiery Copper", "Copper");
    hair_randomizer("", "", "", "");
    weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340);
    eye_randomizer("Yellow", "Green", "Red", "Blue");
    bd("Copper", "Acid");
  } else if (race === "Gold Dragonborn") {
    h(get_random_int(15, 40), "form5_2");
    const _h = get_random_int(72, 80); h(ht(_h), "form1_2");
    skin_randomizer("Golden Yellow", "Gold", "Golden Rod", "Nugget Gold", "Gold");
    hair_randomizer("", "", "", "");
    weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340);
    eye_randomizer("Yellow", "Green", "Red", "Blue");
    bd("Gold", "Fire");
  } else if (race === "Green Dragonborn") {
    h(get_random_int(15, 40), "form5_2");
    const _h = get_random_int(72, 80); h(ht(_h), "form1_2");
    skin_randomizer("Sea Green", "Forest Green", "Jade", "Emerald", "Green");
    hair_randomizer("", "", "", "");
    weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340);
    eye_randomizer("Yellow", "Green", "Red", "Blue");
    bd("Green", "Acid");
  } else if (race === "Red Dragonborn") {
    h(get_random_int(15, 40), "form5_2");
    const _h = get_random_int(72, 80); h(ht(_h), "form1_2");
    skin_randomizer("Scarlet", "Red & Orange", "Blood Red", "Cherry Red", "Red");
    hair_randomizer("", "", "", "");
    weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340);
    eye_randomizer("Yellow", "Green", "Red", "Blue");
    bd("Red", "Fire");
  } else if (race === "Silver Dragonborn") {
    h(get_random_int(15, 40), "form5_2");
    const _h = get_random_int(72, 80); h(ht(_h), "form1_2");
    skin_randomizer("Ice Silver", "Liquid Silver", "Lunar Silver", "Silver", "Silver");
    hair_randomizer("", "", "", "");
    weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340);
    eye_randomizer("Violet", "Blue", "Red", "Purple");
    bd("Silver", "Cold");
  } else if (race === "White Dragonborn") {
    h(get_random_int(15, 40), "form5_2");
    const _h = get_random_int(72, 80); h(ht(_h), "form1_2");
    skin_randomizer("Snow", "Ghost White", "White Smoke", "Frost White", "White");
    hair_randomizer("", "", "", "");
    weight_randomizer(constitution, strength, 200, 225, 250, 275, 310, 340);
    eye_randomizer("Violet", "Blue", "Red", "Purple");
    bd("White", "Cold");
  } else if (race === "Hill Dwarf") {
    h(get_random_int(50, 250), "form5_2");
    const _h = get_random_int(52, 60); h(ht(_h), "form1_2");
    skin_randomizer("Pale Reddish", "Light Brown", "Deep Brown", "Deep Tan", "Tan");
    hair_randomizer("Gray", "Black", "Brown", "Red");
    weight_randomizer(constitution, strength, 110, 130, 150, 170, 190, 215);
    eye_randomizer("Black", "Brown", "Green", "Blue");
    weapon_adder_2(weapon_adder("battleaxe"));
    weapon_adder_2(weapon_adder("battleaxe"));
    weapon_adder_2(weapon_adder("handaxe"));
    weapon_adder_2(weapon_adder("light hammer"));
    weapon_adder_2(weapon_adder("warhammer"));
    hpDelta = 1;
  } else if (race === "Mountain Dwarf") {
    h(get_random_int(50, 250), "form5_2");
    const _h = get_random_int(55, 63); h(ht(_h), "form1_2");
    skin_randomizer("Pale Reddish", "Light Brown", "Deep Brown", "Deep Tan", "Tan");
    hair_randomizer("Gray", "Black", "Brown", "Red");
    weight_randomizer(constitution, strength, 110, 130, 150, 170, 190, 215);
    eye_randomizer("Black", "Brown", "Green", "Blue");
    weapon_adder_2(weapon_adder("battleaxe"));
    weapon_adder_2(weapon_adder("battleaxe"));
    weapon_adder_2(weapon_adder("handaxe"));
    weapon_adder_2(weapon_adder("light hammer"));
    weapon_adder_2(weapon_adder("warhammer"));
    armor_adder_2(armor_adder("light armor"));
    armor_adder_2(armor_adder("medium armor"));
  } else if (race === "Human (Calishite)") {
    h(get_random_int(19, 55), "form5_2");
    const _h = get_random_int(64, 73); h(ht(_h), "form1_2");
    skin_randomizer("Dusky Brown", "Brown", "Light Brown", "Tan", "Light Copper");
    hair_randomizer("Dusky Brown", "Brown", "Light Brown", "Black", "Auburn");
    weight_randomizer(constitution, strength, 140, 160, 180, 200, 225, 240);
    eye_randomizer("Light Brown", "Dark Brown", "Black", "Brown");
  } else if (race === "Human (Chondathan)") {
    h(get_random_int(19, 55), "form5_2");
    const _h = get_random_int(65, 73); h(ht(_h), "form1_2");
    skin_randomizer("Tawny", "Light Tawny", "Light Tan", "Tan", "Light");
    hair_randomizer("Blond", "Brown", "Light Brown", "Black", "Dark Brown");
    weight_randomizer(constitution, strength, 140, 155, 170, 190, 215, 230);
    eye_randomizer("Green", "Hazel", "Dark Brown", "Brown");
  } else if (race === "Human (Damaran)") {
    h(get_random_int(19, 55), "form5_2");
    const _h = get_random_int(65, 73); h(ht(_h), "form1_2");
    skin_randomizer("Tawny", "Fair", "Light Tan", "Tan", "Light");
    hair_randomizer("Brown", "Brown", "Light Brown", "Black", "Dark Brown");
    weight_randomizer(constitution, strength, 145, 165, 180, 200, 225, 245);
    eye_randomizer("Dark Brown", "Hazel", "Blue", "Light Brown");
  } else if (race === "Human (Illuskan)") {
    h(get_random_int(19, 55), "form5_2");
    const _h = get_random_int(67, 76); h(ht(_h), "form1_2");
    skin_randomizer("Pale", "Fair", "Light Tan", "Fair", "Light");
    hair_randomizer("Raven-black", "Red", "Light Brown", "Blond", "Raven-black");
    weight_randomizer(constitution, strength, 150, 165, 185, 205, 230, 250);
    eye_randomizer("Blue", "Steel", "Gray", "Dark Bluish-Gray");
  } else if (race === "Human (Mulan)") {
    h(get_random_int(19, 55), "form5_2");
    const _h = get_random_int(66, 75); h(ht(_h), "form1_2");
    skin_randomizer("Amber", "Dark Tan", "Light Tan", "Amber", "Tan");
    hair_randomizer("Bald", "Bald", "Dark Brown", "Black", "Bald");
    weight_randomizer(constitution, strength, 145, 160, 175, 195, 220, 235);
    eye_randomizer("Hazel", "Brown", "Dark Brown", "Dark Hazel");
  } else if (race === "Human (Rashemi)") {
    h(get_random_int(19, 55), "form5_2");
    const _h = get_random_int(64, 71); h(ht(_h), "form1_2");
    skin_randomizer("Dusky", "Dark Tan", "Tan", "Brown", "Dark Amber");
    hair_randomizer("Black", "Brown", "Dark Brown", "Dark Aurburn", "Black");
    weight_randomizer(constitution, strength, 155, 170, 185, 205, 230, 250);
    eye_randomizer("Dark Brown", "Brown", "Black", "Dark Hazel");
  } else if (race === "Human (Shou)") {
    h(get_random_int(19, 55), "form5_2");
    const _h = get_random_int(64, 73); h(ht(_h), "form1_2");
    skin_randomizer("Yellowish", "Bronze", "Copper", "Yellowish-Bronze", "Light Copper");
    hair_randomizer("Black", "Brown", "Black", "Black", "Dark Brown");
    weight_randomizer(constitution, strength, 140, 160, 180, 200, 225, 245);
    eye_randomizer("Dark Auburn", "Dark Brown", "Black", "Brown");
  } else if (race === "Human (Tethyrian)") {
    h(get_random_int(19, 55), "form5_2");
    const _h = get_random_int(64, 74); h(ht(_h), "form1_2");
    skin_randomizer("Dusky", "Fair", "Dark Tan", "Tan", "Dusky");
    hair_randomizer("Light Brown", "Black", "Blond", "Red", "Dark Brown");
    weight_randomizer(constitution, strength, 140, 160, 180, 200, 225, 245);
    eye_randomizer("Blue", "Blue", "Green", "Hazel");
  } else if (race === "Human (Turami)") {
    h(get_random_int(19, 55), "form5_2");
    const _h = get_random_int(66, 76); h(ht(_h), "form1_2");
    skin_randomizer("Dark Mahogany", "Mahogany", "Dark Brown", "Brown", "Dark Amber");
    hair_randomizer("Black", "Black", "Dark Brown", "Dark Aurburn", "Black");
    weight_randomizer(constitution, strength, 155, 170, 185, 205, 230, 250);
    eye_randomizer("Dark Brown", "Brown", "Black", "Dark Hazel");
  } else if (race === "High Elf") {
    h(get_random_int(100, 600), "form5_2");
    const _h = get_random_int(65, 73); h(ht(_h), "form1_2");
    skin_randomizer("Copper", "Bronze", "Pale Bluish-White", "Bluish-White", "Light Copper");
    hair_randomizer("Green", "Blue", "Turquoise", "Silver-White");
    weight_randomizer(constitution, strength, 110, 115, 130, 140, 155, 165);
    eye_randomizer("Gold", "Silver", "Black", "Green");
  } else if (race === "Wood Elf") {
    h(get_random_int(100, 600), "form5_2");
    const _h = get_random_int(65, 73); h(ht(_h), "form1_2");
    skin_randomizer("Copper", "Bronze", "Copper-Hazel", "Dark Tan", "Light Copper");
    hair_randomizer("Brown", "Black", "Copper", "Blond");
    weight_randomizer(constitution, strength, 110, 115, 130, 140, 155, 165);
    eye_randomizer("Green", "Brown", "Hazel", "Amber");
    weapon_adder_2(weapon_adder("longsword"));
    weapon_adder_2(weapon_adder("shortsword"));
    weapon_adder_2(weapon_adder("shortbow"));
    weapon_adder_2(weapon_adder("longbow"));
  } else if (race === "Dark Elf (Drow)") {
    h(get_random_int(100, 600), "form5_2");
    const _h = get_random_int(64, 71); h(ht(_h), "form1_2");
    skin_randomizer("Black", "Onyx", "Dark Gray", "Black", "Dark Silver");
    hair_randomizer("White", "Light Blond", "Pale Yellow", "White & Yellow");
    weight_randomizer(constitution, strength, 100, 105, 120, 130, 145, 155);
    eye_randomizer("Lilac", "Silver", "Pink", "Blue");
    weapon_adder_2(weapon_adder("rapier"));
    weapon_adder_2(weapon_adder("shortsword"));
    weapon_adder_2(weapon_adder("hand crossbow"));
  } else if (race === "Lightfoot Halfling") {
    h(get_random_int(20, 100), "form5_2");
    const _h = get_random_int(32, 41); h(ht(_h), "form1_2");
    skin_randomizer("Tan", "Light Tan", "Pale & Ruddy", "Light", "Fair");
    hair_randomizer("Brown", "Sandy Brown", "Dark Blond", "Auburn");
    weight_randomizer_small(constitution, strength, 35, 39, 42, 44, 47, 50);
    eye_randomizer("Brown", "Hazel", "Green", "Light Brown");
    size = "small";
  } else if (race === "Stout Halfling") {
    h(get_random_int(20, 100), "form5_2");
    const _h = get_random_int(34, 43); h(ht(_h), "form1_2");
    skin_randomizer("Pale", "Light Tan", "Pale & Ruddy", "Light", "Fair & Ruddy");
    hair_randomizer("Brown", "Sandy Brown", "Dark Brown", "Auburn");
    size = "small";
    weight_randomizer_small(constitution, strength, 37, 41, 44, 46, 49, 52);
    eye_randomizer("Brown", "Hazel", "Green", "Light Brown");
  } else if (race === "Forest Gnome") {
    h(get_random_int(40, 250), "form5_2");
    const _h = get_random_int(34, 43); h(ht(_h), "form1_2");
    skin_randomizer("Tan", "Light Tan", "Brown", "Dark Tan", "Light Brown");
    hair_randomizer("Blond", "Sandy Brown", "Dark Blond", "Light Brown");
    weight_randomizer_small(constitution, strength, 35, 39, 42, 44, 47, 50);
    eye_randomizer("Icy Blue", "Navy", "Pale Blue", "Bright Blue");
    size = "small";
  } else if (race === "Rock Gnome") {
    h(get_random_int(40, 250), "form5_2");
    const _h = get_random_int(35, 45); h(ht(_h), "form1_2");
    skin_randomizer("Tan", "Light Tan", "Brown", "Dark Tan", "Light Brown");
    hair_randomizer("Blond", "Sandy Brown", "Dark Blond", "Light Brown");
    weight_randomizer_small(constitution, strength, 37, 41, 44, 46, 49, 52);
    eye_randomizer("Icy Blue", "Navy", "Pale Blue", "Bright Blue");
    size = "small";
  } else if (race === "Half-Elf") {
    h(get_random_int(20, 120), "form5_2");
    const _h = get_random_int(65, 74); h(ht(_h), "form1_2");
    skin_randomizer("Copper", "Fair", "Pale", "Dark Tan", "Light Copper");
    hair_randomizer("Brownish Green", "Bluish Black", "Reddish White", "Silvery Blond");
    weight_randomizer(constitution, strength, 120, 130, 145, 165, 180, 205);
    eye_randomizer("Gold", "Pink", "Lilac", "Green");
  } else if (race === "Half-Orc") {
    h(get_random_int(15, 40), "form5_2");
    const _h = get_random_int(72, 85); h(ht(_h), "form1_2");
    skin_randomizer("Grayish", "Grayish Green", "Gray", "Tannish Gray", "Grayish");
    hair_randomizer("Light Brown", "Black", "Auburn", "Dark Brown");
    weight_randomizer(constitution, strength, 170, 190, 210, 230, 250, 265);
    eye_randomizer("Green", "Blue", "Brown", "Black");
  } else if (race === "Tiefling") {
    h(get_random_int(20, 55), "form5_2");
    const _h = get_random_int(65, 74); h(ht(_h), "form1_2");
    skin_randomizer("Brick Red", "Reddish Tan", "Maroon", "Blood Red", "Tawny Red");
    hair_randomizer("Dark Purple", "Black", "Dark Red", "Dark Blue");
    weight_randomizer(constitution, strength, 140, 160, 180, 200, 225, 245);
    eye_randomizer("White", "Black", "Red", "Silver");
  }

  return { hpDelta, size };
}

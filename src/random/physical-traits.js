export function apply_physical_traits(ctx) {
  const {
    race, constitution, strength, constitutionModifier, additionalFeatures, getRandomInt,
    weaponAdder, weaponAdder2, armorAdder, armorAdder2,
  } = ctx;

  function skinRandomizer(skin1, skin2, skin3, skin4, skin5) {
    const r = Math.floor(Math.random() * 5);
    document.getElementById("form2_2").value = [skin1, skin2, skin3, skin4, skin5][r];
  }

  function eye_randomizer(eyecolor1, eyecolor2, eyecolor3, eyecolor4) {
    const r = Math.floor(Math.random() * 4);
    document.getElementById("form6_2").value = [eyecolor1, eyecolor2, eyecolor3, eyecolor4][r];
  }

  function hair_randomizer(hair1, hair2, hair3, hair4) {
    const r = Math.floor(Math.random() * 4);
    document.getElementById("form3_2").value = [hair1, hair2, hair3, hair4][r];
  }

  function weightRandomizer(constitutionNumber, strengthNumber, lowestWeight, lowerWeight, mediumWeight, highWeight, higherWeight, highestWeight) {
    const beef = constitutionNumber + strengthNumber;
    const r = Math.floor(Math.random() * 3);
    let disc = 0;
    if (r === 0) disc = -getRandomInt(5, 15);
    else if (r === 1) disc = getRandomInt(5, 15);
    else disc = Math.floor(Math.random() * 5);
    let w;
    if (beef < 14) w = lowestWeight;
    else if (beef < 20) w = lowerWeight;
    else if (beef < 24) w = mediumWeight;
    else if (beef < 32) w = highWeight;
    else if (beef < 36) w = higherWeight;
    else w = highestWeight;
    document.getElementById("form4_2").value = w + disc;
  }

  function weightRandomizerSmall(constitutionNumber, strengthNumber, lowestWeight, lowerWeight, mediumWeight, highWeight, higherWeight, highestWeight) {
    const beef = constitutionNumber + strengthNumber;
    const r = Math.floor(Math.random() * 3);
    let disc = 0;
    if (r === 0) disc = -getRandomInt(1, 3);
    else if (r === 1) disc = getRandomInt(1, 3);
    else disc = Math.floor(Math.random() * 2);
    let w;
    if (beef < 14) w = lowestWeight;
    else if (beef < 20) w = lowerWeight;
    else if (beef < 24) w = mediumWeight;
    else if (beef < 32) w = highWeight;
    else if (beef < 36) w = higherWeight;
    else w = highestWeight;
    document.getElementById("form4_2").value = w + disc;
  }

  function breathDecider(color, damagetype) {
    if (color === "Black" || color === "Blue" || color === "Brass" || color === "Bronze" || color === "Copper") {
      additionalFeatures.push(
        damagetype + " Breath Weapon: You can use your action to exhale your draconic ancestry in a 5 by 30 foot line. When you use your breath weapon, each creature in the area of the exhalation must make a dexterity saving throw. The DC for this saving throw is " + (10 + constitutionModifier) + ". A creature takes 2d6 " + damagetype.toLowerCase() + " damage on a failed save, and half as much damage on a successful one."
      );
    } else if (color === "Gold" || color === "Red") {
      additionalFeatures.push(
        damagetype + " Breath Weapon: You can use your action to exhale your draconic ancestry in a 15 foot cone. When you use your breath weapon, each creature in the area of the exhalation must make a dexterity saving throw. The DC for this saving throw is " + (10 + constitutionModifier) + ". A creature takes 2d6 " + damagetype.toLowerCase() + " damage on a failed save, and half as much damage on a successful one."
      );
    } else if (color === "Green" || color === "Silver" || color === "White") {
      additionalFeatures.push(
        damagetype + " Breath Weapon: You can use your action to exhale your draconic ancestry in a 15 foot cone. When you use your breath weapon, each creature in the area of the exhalation must make a constitution saving throw. The DC for this saving throw is " + (10 + constitutionModifier) + ". A creature takes 2d6 " + damagetype.toLowerCase() + " damage on a failed save, and half as much damage on a successful one."
      );
    }
  }

  // Block to determine physical traits - age, height, skin, hair, weight, and eye color
  if (race === "Black Dragonborn") {
    document.getElementById("form5_2").value = getRandomInt(15, 40); // age
    document.getElementById("form1_2").value = getRandomInt(72, 80); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Ivory Black", "Onyx Black", "Carbon Black", "Pearlescent Black", "Black"); // skin
    hair_randomizer("", "", "", ""); // hair
    weightRandomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Violet", "Blue", "Red", "Purple"); // eyes
    breathDecider("Black", "Acid");
  } else if (race === "Blue Dragonborn") {
    document.getElementById("form5_2").value = getRandomInt(15, 40); // age
    document.getElementById("form1_2").value = getRandomInt(72, 80); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Blue", "Azure Blue", "Navy", "Pale Blue", "Royal Blue"); // skin
    hair_randomizer("", "", "", ""); // hair
    weightRandomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Violet", "Blue", "Red", "Purple"); // eyes
    breathDecider("Blue", "Lightning");
  } else if (race === "Brass Dragonborn") {
    document.getElementById("form5_2").value = getRandomInt(15, 40); // age
    document.getElementById("form1_2").value = getRandomInt(72, 80); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Brass", "Rusty Brass", "Copper & Brass", "Fiery Brass", "Brass"); // skin
    hair_randomizer("", "", "", ""); // hair
    weightRandomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Yellow", "Green", "Red", "Blue"); // eyes
    breathDecider("Brass", "Fire");
  } else if (race === "Bronze Dragonborn") {
    document.getElementById("form5_2").value = getRandomInt(15, 40); // age
    document.getElementById("form1_2").value = getRandomInt(72, 80); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Bronze", "Old Gold", "Dark Bronze", "Sandy Bronze", "Bronze"); // skin
    hair_randomizer("", "", "", ""); // hair
    weightRandomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Yellow", "Green", "Red", "Blue"); // eyes
    breathDecider("Bronze", "Lightning");
  } else if (race === "Copper Dragonborn") {
    document.getElementById("form5_2").value = getRandomInt(15, 40); // age
    document.getElementById("form1_2").value = getRandomInt(72, 80); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Copper", "Bronze & Copper", "Rusty Copper", "Fiery Copper", "Copper"); // skin
    hair_randomizer("", "", "", ""); // hair
    weightRandomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Yellow", "Green", "Red", "Blue"); // eyes
    breathDecider("Copper", "Acid");
  } else if (race === "Gold Dragonborn") {
    document.getElementById("form5_2").value = getRandomInt(15, 40); // age
    document.getElementById("form1_2").value = getRandomInt(72, 80); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Golden Yellow", "Gold", "Golden Rod", "Nugget Gold", "Gold"); // skin
    hair_randomizer("", "", "", ""); // hair
    weightRandomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Yellow", "Green", "Red", "Blue"); // eyes
    breathDecider("Gold", "Fire");
  } else if (race === "Green Dragonborn") {
    document.getElementById("form5_2").value = getRandomInt(15, 40); // age
    document.getElementById("form1_2").value = getRandomInt(72, 80); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Sea Green", "Forest Green", "Jade", "Emerald", "Green"); // skin
    hair_randomizer("", "", "", ""); // hair
    weightRandomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Yellow", "Green", "Red", "Blue"); // eyes
    breathDecider("Green", "Acid");
  } else if (race === "Red Dragonborn") {
    document.getElementById("form5_2").value = getRandomInt(15, 40); // age
    document.getElementById("form1_2").value = getRandomInt(72, 80); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Scarlet", "Red & Orange", "Blood Red", "Cherry Red", "Red"); // skin
    hair_randomizer("", "", "", ""); // hair
    weightRandomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Yellow", "Green", "Red", "Blue"); // eyes
    breathDecider("Red", "Fire");
  } else if (race === "Silver Dragonborn") {
    document.getElementById("form5_2").value = getRandomInt(15, 40); // age
    document.getElementById("form1_2").value = getRandomInt(72, 80); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Ice Silver", "Liquid Silver", "Lunar Silver", "Silver", "Silver"); // skin
    hair_randomizer("", "", "", ""); // hair
    weightRandomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Violet", "Blue", "Red", "Purple"); // eyes
    breathDecider("Silver", "Cold");
  } else if (race === "White Dragonborn") {
    document.getElementById("form5_2").value = getRandomInt(15, 40); // age
    document.getElementById("form1_2").value = getRandomInt(72, 80); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Snow", "Ghost White", "White Smoke", "Frost White", "White"); // skin
    hair_randomizer("", "", "", ""); // hair
    weightRandomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Violet", "Blue", "Red", "Purple"); // eyes
    breathDecider("White", "Cold");
  } else if (race === "Hill Dwarf") {
    document.getElementById("form5_2").value = getRandomInt(50, 250); // age
    document.getElementById("form1_2").value = getRandomInt(52, 60); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Pale Reddish", "Light Brown", "Deep Brown", "Deep Tan", "Tan"); // skin
    hair_randomizer("Gray", "Black", "Brown", "Red"); // hair
    weightRandomizer(constitution, strength, 110, 130, 150, 170, 190, 215); // weight
    eye_randomizer("Black", "Brown", "Green", "Blue"); // eyes
    weaponAdder2(weaponAdder("battleaxe"));
    weaponAdder2(weaponAdder("battleaxe"));
    weaponAdder2(weaponAdder("handaxe"));
    weaponAdder2(weaponAdder("light hammer"));
    weaponAdder2(weaponAdder("warhammer"));
    ctx.hp++;
  } else if (race === "Mountain Dwarf") {
    document.getElementById("form5_2").value = getRandomInt(50, 250); // age
    document.getElementById("form1_2").value = getRandomInt(55, 63); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Pale Reddish", "Light Brown", "Deep Brown", "Deep Tan", "Tan"); // skin
    hair_randomizer("Gray", "Black", "Brown", "Red"); // hair
    weightRandomizer(constitution, strength, 110, 130, 150, 170, 190, 215); // weight
    eye_randomizer("Black", "Brown", "Green", "Blue"); // eyes
    weaponAdder2(weaponAdder("battleaxe"));
    weaponAdder2(weaponAdder("battleaxe"));
    weaponAdder2(weaponAdder("handaxe"));
    weaponAdder2(weaponAdder("light hammer"));
    weaponAdder2(weaponAdder("warhammer"));
    armorAdder2(armorAdder("light armor"));
    armorAdder2(armorAdder("medium armor"));
  } else if (race === "Human (Calishite)") {
    document.getElementById("form5_2").value = getRandomInt(19, 55); // age
    document.getElementById("form1_2").value = getRandomInt(64, 73); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Dusky Brown", "Brown", "Light Brown", "Tan", "Light Copper"); // skin
    hair_randomizer("Dusky Brown", "Brown", "Light Brown", "Black", "Auburn"); // hair
    weightRandomizer(constitution, strength, 140, 160, 180, 200, 225, 240); // weight
    eye_randomizer("Light Brown", "Dark Brown", "Black", "Brown"); // eyes
  } else if (race === "Human (Chondathan)") {
    document.getElementById("form5_2").value = getRandomInt(19, 55); // age
    document.getElementById("form1_2").value = getRandomInt(65, 73); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Tawny", "Light Tawny", "Light Tan", "Tan", "Light"); // skin
    hair_randomizer("Blond", "Brown", "Light Brown", "Black", "Dark Brown"); // hair
    weightRandomizer(constitution, strength, 140, 155, 170, 190, 215, 230); // weight
    eye_randomizer("Green", "Hazel", "Dark Brown", "Brown"); // eyes
  } else if (race === "Human (Damaran)") {
    document.getElementById("form5_2").value = getRandomInt(19, 55); // age
    document.getElementById("form1_2").value = getRandomInt(65, 73); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Tawny", "Fair", "Light Tan", "Tan", "Light"); // skin
    hair_randomizer("Brown", "Brown", "Light Brown", "Black", "Dark Brown"); // hair
    weightRandomizer(constitution, strength, 145, 165, 180, 200, 225, 245); // weight
    eye_randomizer("Dark Brown", "Hazel", "Blue", "Light Brown"); // eyes
  } else if (race === "Human (Illuskan)") {
    document.getElementById("form5_2").value = getRandomInt(19, 55); // age
    document.getElementById("form1_2").value = getRandomInt(67, 76); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Pale", "Fair", "Light Tan", "Fair", "Light"); // skin
    hair_randomizer("Raven-black", "Red", "Light Brown", "Blond", "Raven-black"); // hair
    weightRandomizer(constitution, strength, 150, 165, 185, 205, 230, 250); // weight
    eye_randomizer("Blue", "Steel", "Gray", "Dark Bluish-Gray"); // eyes
  } else if (race === "Human (Mulan)") {
    document.getElementById("form5_2").value = getRandomInt(19, 55); // age
    document.getElementById("form1_2").value = getRandomInt(66, 75); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Amber", "Dark Tan", "Light Tan", "Amber", "Tan"); // skin
    hair_randomizer("Bald", "Bald", "Dark Brown", "Black", "Bald"); // hair
    weightRandomizer(constitution, strength, 145, 160, 175, 195, 220, 235); // weight
    eye_randomizer("Hazel", "Brown", "Dark Brown", "Dark Hazel"); // eyes
  } else if (race === "Human (Rashemi)") {
    document.getElementById("form5_2").value = getRandomInt(19, 55); // age
    document.getElementById("form1_2").value = getRandomInt(64, 71); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Dusky", "Dark Tan", "Tan", "Brown", "Dark Amber"); // skin
    hair_randomizer("Black", "Brown", "Dark Brown", "Dark Aurburn", "Black"); // hair
    weightRandomizer(constitution, strength, 155, 170, 185, 205, 230, 250); // weight
    eye_randomizer("Dark Brown", "Brown", "Black", "Dark Hazel"); // eyes
  } else if (race === "Human (Shou)") {
    document.getElementById("form5_2").value = getRandomInt(19, 55); // age
    document.getElementById("form1_2").value = getRandomInt(64, 73); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Yellowish", "Bronze", "Copper", "Yellowish-Bronze", "Light Copper"); // skin
    hair_randomizer("Black", "Brown", "Black", "Black", "Dark Brown"); // hair
    weightRandomizer(constitution, strength, 140, 160, 180, 200, 225, 245); // weight
    eye_randomizer("Dark Auburn", "Dark Brown", "Black", "Brown"); // eyes
  } else if (race === "Human (Tethyrian)") {
    document.getElementById("form5_2").value = getRandomInt(19, 55); // age
    document.getElementById("form1_2").value = getRandomInt(64, 74); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Dusky", "Fair", "Dark Tan", "Tan", "Dusky"); // skin
    hair_randomizer("Light Brown", "Black", "Blond", "Red", "Dark Brown"); // hair
    weightRandomizer(constitution, strength, 140, 160, 180, 200, 225, 245); // weight
    eye_randomizer("Blue", "Blue", "Green", "Hazel"); // eyes
  } else if (race === "Human (Turami)") {
    document.getElementById("form5_2").value = getRandomInt(19, 55); // age
    document.getElementById("form1_2").value = getRandomInt(66, 76); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Dark Mahogany", "Mahogany", "Dark Brown", "Brown", "Dark Amber"); // skin
    hair_randomizer("Black", "Black", "Dark Brown", "Dark Aurburn", "Black"); // hair
    weightRandomizer(constitution, strength, 155, 170, 185, 205, 230, 250); // weight
    eye_randomizer("Dark Brown", "Brown", "Black", "Dark Hazel"); // eyes
  } else if (race === "High Elf") {
    document.getElementById("form5_2").value = getRandomInt(100, 600); // age
    document.getElementById("form1_2").value = getRandomInt(65, 73); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Copper", "Bronze", "Pale Bluish-White", "Bluish-White", "Light Copper"); // skin
    hair_randomizer("Green", "Blue", "Turquoise", "Silver-White"); // hair
    weightRandomizer(constitution, strength, 110, 115, 130, 140, 155, 165); // weight
    eye_randomizer("Gold", "Silver", "Black", "Green"); // eyes
  } else if (race === "Wood Elf") {
    document.getElementById("form5_2").value = getRandomInt(100, 600); // age
    document.getElementById("form1_2").value = getRandomInt(65, 73); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Copper", "Bronze", "Copper-Hazel", "Dark Tan", "Light Copper"); // skin
    hair_randomizer("Brown", "Black", "Copper", "Blond"); // hair
    weightRandomizer(constitution, strength, 110, 115, 130, 140, 155, 165); // weight
    eye_randomizer("Green", "Brown", "Hazel", "Amber"); // eyes
    weaponAdder2(weaponAdder("longsword"));
    weaponAdder2(weaponAdder("shortsword"));
    weaponAdder2(weaponAdder("shortbow"));
    weaponAdder2(weaponAdder("longbow"));
  } else if (race === "Dark Elf (Drow)") {
    document.getElementById("form5_2").value = getRandomInt(100, 600); // age
    document.getElementById("form1_2").value = getRandomInt(64, 71); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Black", "Onyx", "Dark Gray", "Black", "Dark Silver"); // skin
    hair_randomizer("White", "Light Blond", "Pale Yellow", "White & Yellow"); // hair
    weightRandomizer(constitution, strength, 100, 105, 120, 130, 145, 155); // weight
    eye_randomizer("Lilac", "Silver", "Pink", "Blue"); // eyes
    weaponAdder2(weaponAdder("rapier"));
    weaponAdder2(weaponAdder("shortsword"));
    weaponAdder2(weaponAdder("hand crossbow"));
  } else if (race === "Lightfoot Halfling") {
    document.getElementById("form5_2").value = getRandomInt(20, 100); // age
    document.getElementById("form1_2").value = getRandomInt(32, 41); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Tan", "Light Tan", "Pale & Ruddy", "Light", "Fair"); // skin
    hair_randomizer("Brown", "Sandy Brown", "Dark Blond", "Auburn"); // hair
    weightRandomizerSmall(constitution, strength, 35, 39, 42, 44, 47, 50); // weight
    eye_randomizer("Brown", "Hazel", "Green", "Light Brown"); // eyes
    ctx.size = "small";
  } else if (race === "Stout Halfling") {
    document.getElementById("form5_2").value = getRandomInt(20, 100); // age
    document.getElementById("form1_2").value = getRandomInt(34, 43); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Pale", "Light Tan", "Pale & Ruddy", "Light", "Fair & Ruddy"); // skin
    hair_randomizer("Brown", "Sandy Brown", "Dark Brown", "Auburn"); // hair
    ctx.size = "small";
    weightRandomizerSmall(constitution, strength, 37, 41, 44, 46, 49, 52); // weight
    eye_randomizer("Brown", "Hazel", "Green", "Light Brown"); // eyes
  } else if (race === "Forest Gnome") {
    document.getElementById("form5_2").value = getRandomInt(40, 250); // age
    document.getElementById("form1_2").value = getRandomInt(34, 43); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Tan", "Light Tan", "Brown", "Dark Tan", "Light Brown"); // skin
    hair_randomizer("Blond", "Sandy Brown", "Dark Blond", "Light Brown"); // hair
    weightRandomizerSmall(constitution, strength, 35, 39, 42, 44, 47, 50); // weight
    eye_randomizer("Icy Blue", "Navy", "Pale Blue", "Bright Blue"); // eyes
    ctx.size = "small";
  } else if (race === "Rock Gnome") {
    document.getElementById("form5_2").value = getRandomInt(40, 250); // age
    document.getElementById("form1_2").value = getRandomInt(35, 45); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Tan", "Light Tan", "Brown", "Dark Tan", "Light Brown"); // skin
    hair_randomizer("Blond", "Sandy Brown", "Dark Blond", "Light Brown"); // hair
    weightRandomizerSmall(constitution, strength, 37, 41, 44, 46, 49, 52); // weight
    eye_randomizer("Icy Blue", "Navy", "Pale Blue", "Bright Blue"); // eyes
    ctx.size = "small";
  } else if (race === "Half-Elf") {
    document.getElementById("form5_2").value = getRandomInt(20, 120); // age
    document.getElementById("form1_2").value = getRandomInt(65, 74); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Copper", "Fair", "Pale", "Dark Tan", "Light Copper"); // skin
    hair_randomizer("Brownish Green", "Bluish Black", "Reddish White", "Silvery Blond"); // hair
    weightRandomizer(constitution, strength, 120, 130, 145, 165, 180, 205); // weight
    eye_randomizer("Gold", "Pink", "Lilac", "Green"); // eyes
  } else if (race === "Half-Orc") {
    document.getElementById("form5_2").value = getRandomInt(15, 40); // age
    document.getElementById("form1_2").value = getRandomInt(72, 85); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Grayish", "Grayish Green", "Gray", "Tannish Gray", "Grayish"); // skin
    hair_randomizer("Light Brown", "Black", "Auburn", "Dark Brown"); // hair
    weightRandomizer(constitution, strength, 170, 190, 210, 230, 250, 265); // weight
    eye_randomizer("Green", "Blue", "Brown", "Black"); // eyes
  } else if (race === "Tiefling") {
    document.getElementById("form5_2").value = getRandomInt(20, 55); // age
    document.getElementById("form1_2").value = getRandomInt(65, 74); // height
    document.getElementById("form1_2").value =
      Math.floor(document.getElementById("form1_2").value / 12) +
      "'" +
      (document.getElementById("form1_2").value % 12); //height converter
    skinRandomizer("Brick Red", "Reddish Tan", "Maroon", "Blood Red", "Tawny Red"); // skin
    hair_randomizer("Dark Purple", "Black", "Dark Red", "Dark Blue"); // hair
    weightRandomizer(constitution, strength, 140, 160, 180, 200, 225, 245); // weight
    eye_randomizer("White", "Black", "Red", "Silver"); // eyes
  }
}

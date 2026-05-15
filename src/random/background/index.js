import { random_artisan_tool } from "../util/artisan-tools.js";

export function apply_background(ctx) {
  const {
    newBackground1, className, race,
    profsAndLangs, equipment, features, bonds,
    add_click, statChecker,
    right_language, random_language,
    toolAdder, toolAdder2, weaponAdder, weaponAdder2,
    randomMusicalInstrument,
    strengthModifier, dexterityModifier, intelligenceModifier, wisdomModifier, charismaModifier,
  } = ctx;

  function random_con() {
    return ["Ten stoppered bottles filled with colored liquid", "Set of weighted dice", "Deck of marked cards", "Signet ring of an imaginary duke"][Math.floor(Math.random() * 4)];
  }

  function random_gaming_set_capitalize() {
    return ["Dice", "Dragonchess", "Playing cards", "Three-dragon ante"][Math.floor(Math.random() * 4)];
  }

  const TRINKETS = [
    "Piece of crystal that faintly glows in the moonlight",
    "Gold coin minted in an unknown land",
    "Dragon's bony talon hanging from a plain leather necklace",
    "Tiny silver icon of a raven", "Old key", "Silver skull the size of a coin",
    "Set of bone pipes", "Ancient arrow of elven design",
    "Iron holy symbol devoted to an unknown God",
    "Invitation to a party where a murder happened",
    "Glass orb filled with moving smoke",
    "Deed for a parcel of land in a realm unknown to you",
    "Old chess piece made from unbreakable glass",
    "Small wooden statuette of a smug halfling",
    "Brass orb etched with strange runes",
    "Shard of obsidian that always feels warm to the touch",
    "Rectangular metal device with two tiny metal cups on one end that throws sparks when wet",
    "Gemstone that looks like a lump of coal when examined by anyone but you",
    "Whistle made from gold-colored wood", "Indecipherable treasure map",
  ];
  function random_trinket() { return TRINKETS[Math.floor(Math.random() * 20)]; }

  function random_favor_from_admirer() {
    const r = Math.floor(Math.random() * 3);
    if (r === 0) return "Lover letter from an admirer";
    else if (r === 1) return "Lock of hair from an admirer";
    else return random_trinket() + " from an admirer";
  }

  function random_gaming_set_soldier() {
    const r = Math.floor(Math.random() * 2);
    return r === 0 ? "Dice" : "Playing Cards";
  }

  function random_trophy() {
    const r = Math.floor(Math.random() * 4);
    if (r === 0) return "Dagger from fallen enemy";
    else if (r === 1) return "Broken blade from fallen enemy";
    else if (r === 2) return "Piece of banner from fallen enemy";
    else return random_trinket() + " from fallen enemy";
  }

  function random_gladiator_weapon() {
    const r = Math.floor(Math.random() * 4);
    if (r === 0) {
      if (weaponAdder("trident") !== undefined) { weaponAdder2(weaponAdder("trident")); equipment.push("Trident"); }
      else return "Trident already added";
    } else if (r === 1) {
      if (weaponAdder("net") !== undefined) { weaponAdder2(weaponAdder("net")); equipment.push("Net"); }
      else return "Net already added";
    } else if (r === 2) {
      if (weaponAdder("sling") !== undefined) { weaponAdder2(weaponAdder("sling")); equipment.push("Sling"); }
      else return "Sling already added";
    } else {
      if (weaponAdder("whip") !== undefined) { weaponAdder2(weaponAdder("whip")); equipment.push("Whip"); }
      else return "Whip already added";
    }
  }

  function random_gladiator_weapon_checker(variable) {
    if (variable === "Trident already added") equipment.push("Trident");
    else if (variable === "Net already added") equipment.push("Net");
    else if (variable === "Sling already added") equipment.push("Sling");
    else if (variable === "Whip already added") equipment.push("Whip");
  }

  function random_animal_trophy() {
    const r = Math.floor(Math.random() * 8);
    if (r === 0) return "Wolf fang trophy";
    else if (r === 1) return "Boar tusk trophy";
    else if (r === 2) return "Bear claw trophy";
    else if (r === 3) return "Eagle feather trophy";
    else if (r === 4) return "Small dragon tooth trophy";
    else if (r === 5) return "Bearskin cloak trophy";
    else if (r === 6) return "Wolf pelt trophy";
    else return "Lion tooth necklace trophy";
  }

  let firstLanguage, secondlanguage, musicalinstrument, artisantool, soldierGamingSet, gladiatorWeapon;

  // Block that determines what equipment/languages/proficiencies/features you get for your background
  if (newBackground1 === "Acolyte") {
    firstLanguage = right_language();
    profsAndLangs.languages.push(firstLanguage);
    secondlanguage = right_language();
    profsAndLangs.languages.push(secondlanguage);
    add_click(13);
    statChecker(wisdomModifier + 2, "form35_1");
    add_click(20);
    statChecker(intelligenceModifier + 2, "form33_1");
    equipment.push("A holy symbol");
    equipment.push("Prayer Book");
    equipment.push("5 sticks of incense");
    equipment.push("Vestments");
    equipment.push("Set of common clothes");
    equipment.push("Belt Pouch");
    ctx.gold += 15;
    features.push(
      "Shelter of the Faithful: Can perform the religious ceremonies of your deity. Your adventuring party can expect to receive free healing and care at an establishment of your faith, though you must provide any material components needed for spells. Those who share your religion will support you at a modest lifestyle. While near your home establishment, you can call upon the priests for assistance, provided it is not hazardous."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhat caused you to become an acolyte?\rWhat deity do you serve?\rWhere was your temple/monastery?\rWhy did you learn those languages?\rWhy are you a " +
      className.toLowerCase() + "?\r" +
      "How did you go from acolyte to " + className.toLowerCase() + "?\r" +
      "What does being a " + race + " mean to you?";
  } else if (newBackground1 === "Charlatan") {
    toolAdder2(toolAdder("disguise kit"));
    toolAdder2(toolAdder("forgery kit"));
    add_click(17);
    statChecker(charismaModifier + 2, "form36_1");
    add_click(4);
    statChecker(dexterityModifier + 2, "form46_1");
    equipment.push("Disguise kit");
    equipment.push(random_con());
    equipment.push("Set of fine clothes");
    equipment.push("Belt Pouch");
    ctx.gold += 15;
    features.push(
      "False Identity: You have a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhat caused you to become a charlatan?\rWhat is your choice ploy?\rWhat was your biggest trick at?\rWhy are you a " +
      className.toLowerCase() + "?\r" +
      "How did you go from charlatan to " + className.toLowerCase() + "?\r" +
      "What does being a " + race + " mean to you?\r" +
      "Are you still duping people, if not, why the change of heart?";
  } else if (newBackground1 === "Criminal") {
    toolAdder2(toolAdder("thieves' tools"));
    toolAdder2(toolAdder(random_gaming_set_capitalize().toLowerCase()));
    add_click(17);
    statChecker(charismaModifier + 2, "form36_1");
    add_click(23);
    statChecker(dexterityModifier + 2, "form32_1");
    equipment.push("Crowbar");
    equipment.push("Set of dark common clothes with a hood");
    equipment.push("Belt Pouch");
    ctx.gold += 15;
    features.push(
      "Criminal Contact: You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhat caused you to become a criminal?\rWhat kind of criminal were you?\rDid you do anything terrible?\rWho is your criminal contact?\rWhy are you a " +
      className.toLowerCase() + "?\r" +
      "How did you go from criminal to " + className.toLowerCase() + "?\r" +
      "What does being a " + race + " mean to you?\r" +
      "Are you still breaking the law, if not, why the change of heart?";
  } else if (newBackground1 === "Entertainer") {
    musicalinstrument = randomMusicalInstrument();
    toolAdder2(toolAdder(musicalinstrument.toLowerCase()));
    toolAdder2(toolAdder("disguise kit"));
    add_click(19);
    statChecker(dexterityModifier + 2, "form38_1");
    add_click(16);
    statChecker(charismaModifier + 2, "form34_1");
    equipment.push(musicalinstrument);
    equipment.push("Costume");
    document.getElementById("form14_2").value = random_favor_from_admirer();
    equipment.push("Belt Pouch");
    ctx.gold += 15;
    features.push(
      "By Popular Demand: You can always find a place to perform. At that place, you receive free lodging and food of a modest or comfortable standard, as long as you perform each night. Your performance also makes you something of a local figure, when recognized, they typically take a liking to you."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhat caused you to become an entertainer?\rHow did you entertain?\rDo you still have any contacts or people you know from performing?\rWhy are you a " +
      className.toLowerCase() + "?\r" +
      "How did you go from entertainer to " + className.toLowerCase() + "?\r" +
      "What does being a " + race + " mean to you?";
  } else if (newBackground1 === "Folk Hero") {
    artisantool = random_artisan_tool();
    toolAdder2(toolAdder(artisantool.toLowerCase()));
    toolAdder2(toolAdder("land vehicles"));
    add_click(8);
    statChecker(wisdomModifier + 2, "form50_1");
    add_click(12);
    statChecker(wisdomModifier + 2, "form47_1");
    equipment.push(artisantool);
    equipment.push("Shovel");
    equipment.push("Iron pot");
    equipment.push("Set of common clothes");
    equipment.push("Belt Pouch");
    ctx.gold += 10;
    features.push(
      "Rustic Hospitality: Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhat made you famous to your people?\rWhy did you leave them?\rWhy are you a " +
      className.toLowerCase() + "?\r" +
      "How did you go from folk hero to " + className.toLowerCase() + "?\r" +
      "What does being a " + race + " mean to you?";
  } else if (newBackground1 === "Gladiator") {
    gladiatorWeapon = random_gladiator_weapon();
    random_gladiator_weapon_checker(gladiatorWeapon);
    toolAdder2(toolAdder("disguise kit"));
    add_click(19);
    statChecker(dexterityModifier + 2, "form38_1");
    add_click(16);
    statChecker(charismaModifier + 2, "form34_1");
    equipment.push("Costume");
    equipment.push("Belt Pouch");
    ctx.gold += 15;
    features.push(
      "By Popular Demand: Can always find a place to perform that is combat-centered. At that place, receive free lodging and food of a modest or comfortable standard, as long as you perform each night. Your performance makes you something of a local figure, when recognized, persons typically take a liking to you."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhy did you become a gladiator?\rWas it slavery?\rWas it money?\rWas it family?\rWhy are you a " +
      className.toLowerCase() + "?\r" +
      "How did you go from gladiator to " + className.toLowerCase() + "?\r" +
      "What does being a " + race + " mean to you?";
  } else if (newBackground1 === "Guild Artisan") {
    firstLanguage = random_language();
    firstLanguage = right_language();
    profsAndLangs.languages.push(firstLanguage);
    artisantool = random_artisan_tool();
    toolAdder2(toolAdder(artisantool.toLowerCase()));
    add_click(13);
    statChecker(wisdomModifier + 2, "form35_1");
    add_click(1);
    statChecker(charismaModifier + 2, "form45_1");
    equipment.push(artisantool);
    equipment.push("Guild introduction letter");
    equipment.push("Set of traveler's clothes");
    equipment.push("Belt Pouch");
    ctx.gold += 15;
    features.push(
      "Guild Membership: Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral. If accused of a crime, your guild will support you if innocent or have just cause. 5Gp/month for membership, benefits only if you pay on time."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhy did you become an artisan?\rWhy did you choose your artistry?\rWhat's your guilds name?\rWas it money?\rWas it passion?\rWas it the family business?\rWhy are you a " +
      className.toLowerCase() + "?\r" +
      "How did you go from guild artisan to " + className.toLowerCase() + "?\r" +
      "What does being a " + race + " mean to you?";
  } else if (newBackground1 === "Guild Merchant") {
    firstLanguage = right_language();
    profsAndLangs.languages.push(firstLanguage);
    secondlanguage = right_language();
    profsAndLangs.languages.push(secondlanguage);
    add_click(13);
    statChecker(wisdomModifier + 2, "form35_1");
    add_click(1);
    statChecker(charismaModifier + 2, "form45_1");
    equipment.push("Guild introduction letter");
    equipment.push("Set of traveler's clothes");
    equipment.push("Belt Pouch");
    equipment.push("Mule");
    equipment.push("Cart");
    ctx.gold += 15;
    features.push(
      "Guild Membership: Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral. If accused of a crime, your guild will support you if innocent or have just cause. 5Gp/month for membership, benefits only if you pay on time."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhy did you become a merchant?\rWhy did you choose your artistry?\rWhat's your guilds name?\rWas it money?\rWas it passion for trade or meeting new people?\rWas it the family business?\rWhy are you a " +
      className.toLowerCase() + "?\r" +
      "How did you go from guild merchant to " + className.toLowerCase() + "?\r" +
      "What does being a " + race + " mean to you?";
  } else if (newBackground1 === "Hermit") {
    firstLanguage = random_language();
    firstLanguage = right_language();
    profsAndLangs.languages.push(firstLanguage);
    toolAdder2(toolAdder("herbalism kit"));
    add_click(5);
    statChecker(wisdomModifier + 2, "form53_1");
    add_click(20);
    statChecker(intelligenceModifier + 2, "form33_1");
    equipment.push("Scroll case stuffed full of notes from your studies");
    equipment.push("Winter blanket");
    equipment.push("Set of common clothes");
    equipment.push("Herbalism kit");
    ctx.gold += 5;
    features.push("Discovery: The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery.");
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhere were you secluded at?\rDid you travel a lot?\rWhat's your big discovery? Talk it over with your DM as well.\rWhy are you a " +
      className.toLowerCase() + "?\r" +
      "How did you go from hermit to " + className.toLowerCase() + "?\r" +
      "What does being a " + race + " mean to you?";
  } else if (newBackground1 === "Knight") {
    firstLanguage = random_language();
    firstLanguage = right_language();
    profsAndLangs.languages.push(firstLanguage);
    toolAdder2(toolAdder(random_gaming_set_capitalize().toLowerCase()));
    add_click(9);
    statChecker(intelligenceModifier + 2, "form48_1");
    add_click(1);
    statChecker(charismaModifier + 2, "form45_1");
    bonds.splice(0, 1);
    bonds.push("I have an emblem of chivalry and chastity from a noble lady.");
    equipment.push("Emblem of chivalry");
    equipment.push("Signet ring");
    equipment.push("Scroll of pedigree");
    equipment.push("Set of fine clothes");
    equipment.push("Purse");
    ctx.gold += 25;
    features.push(
      "Retainer: You have three retainers loyal to your family. These retainers are a noble-born squire, a groom for your horse, and a servant for mundane tasks. Your retainers are people who can perform tasks for you, but they do not fight for you, will not follow you into dangerous areas, and will leave if they are frequently endangered or abused."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWho is your family?\rAre there any famous persons in it, or is your family famous for something in particular?\rWho is the woman you recieved the emblem of chivalry from?.\rWhy are you a " +
      className.toLowerCase() + "?\r" +
      "How did you go from knight to " + className.toLowerCase() + "?\r" +
      "What does being a " + race + " mean to you?";
  } else if (newBackground1 === "Noble") {
    firstLanguage = random_language();
    firstLanguage = right_language();
    profsAndLangs.languages.push(firstLanguage);
    toolAdder2(toolAdder(random_gaming_set_capitalize().toLowerCase()));
    add_click(9);
    statChecker(intelligenceModifier + 2, "form48_1");
    add_click(1);
    statChecker(charismaModifier + 2, "form45_1");
    equipment.push("Signet ring");
    equipment.push("Scroll of pedigree");
    equipment.push("Set of fine clothes");
    equipment.push("Purse");
    ctx.gold += 25;
    features.push(
      "Position of Privilege: You are welcome in high society, and people assume you have the right to be wherever you are. The common folk and merchants make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWho is your family?\rAre there any famous persons in it, or is your family famous for something in particular?\rWhy are you a " +
      className.toLowerCase() + "?\r" +
      "How did you go from noble to " + className.toLowerCase() + "?\r" +
      "What does being a " + race + " mean to you?";
  } else if (newBackground1 === "Outlander") {
    musicalinstrument = randomMusicalInstrument();
    toolAdder2(toolAdder(musicalinstrument.toLowerCase()));
    add_click(2);
    statChecker(strengthModifier + 2, "form49_1");
    add_click(12);
    statChecker(wisdomModifier + 2, "form47_1");
    equipment.push("Staff");
    equipment.push("Hunting Trap");
    equipment.push(random_animal_trophy());
    equipment.push("Set of traveler's clothes");
    equipment.push("Belt Pouch");
    ctx.gold += 10;
    features.push(
      "Wanderer: You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhere were you at?\rDid you travel a lot?\rWhat's the story behind your animal trophy?\rWhy are you a " +
      className.toLowerCase() + "?\r" +
      "How did you go from outlander to " + className.toLowerCase() + "?\r" +
      "What does being a " + race + " mean to you?";
  } else if (newBackground1 === "Pirate") {
    toolAdder2(toolAdder("navigator's tools"));
    toolAdder2(toolAdder("water vehicles"));
    add_click(2);
    statChecker(strengthModifier + 2, "form49_1");
    add_click(7);
    statChecker(wisdomModifier + 2, "form43_1");
    equipment.push("Club");
    equipment.push("50 feet of silk rope");
    document.getElementById("form14_2").value = random_trinket();
    equipment.push("Set of common clothes");
    equipment.push("Belt Pouch");
    ctx.gold += 10;
    features.push(
      "Bad Reputation: No matter where you go, people are afraid of you due to your reputation. When you are in a civilized settlement, you can get away with minor criminal offenses, such as refusing to pay for food at a tavern or breaking down doors at a local shop, since most people will not report your activity to the authorities."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rHow did you become a pirate?\rDid you have a seaport that was your home?\rDo you still keep in contact with your shipmates?\rWhy are you a " +
      className.toLowerCase() + "?\r" +
      "How did you go from pirate to " + className.toLowerCase() + "?\r" +
      "What does being a " + race + " mean to you?\r" +
      "Why aren't you a pirate still?";
  } else if (newBackground1 === "Sage") {
    firstLanguage = right_language();
    profsAndLangs.languages.push(firstLanguage);
    secondlanguage = right_language();
    profsAndLangs.languages.push(secondlanguage);
    add_click(21);
    statChecker(intelligenceModifier + 2, "form40_1");
    add_click(9);
    statChecker(intelligenceModifier + 2, "form48_1");
    equipment.push("Bottle of black ink");
    equipment.push("Quill");
    equipment.push("Small knife");
    equipment.push("Letter from dead colleague");
    equipment.push("Set of common clothes");
    equipment.push("Belt pouch");
    ctx.gold += 10;
    features.push(
      "Researcher: When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhat were you spending all that time studying?\rWhat does the letter from your dead colleague say?\rWhy did you learn those languages?\rWhy are you a " +
      className.toLowerCase() + "?\r" +
      "How did you go from sage to " + className.toLowerCase() + "?\r" +
      "What does being a " + race + " mean to you?";
  } else if (newBackground1 === "Sailor") {
    toolAdder2(toolAdder("navigator's tools"));
    toolAdder2(toolAdder("water vehicles"));
    add_click(2);
    statChecker(strengthModifier + 2, "form49_1");
    add_click(7);
    statChecker(wisdomModifier + 2, "form43_1");
    equipment.push("Club");
    equipment.push("50 feet of silk rope");
    document.getElementById("form14_2").value = random_trinket();
    equipment.push("Set of common clothes");
    equipment.push("Belt Pouch");
    ctx.gold += 10;
    features.push(
      "Ship's Passage: You can secure free passage on a sailing ship for yourself and your adventuring companions. You might sail on the ship you served on, or another ship you have good relations with. In return for your free passage, you and your companions are expected to assist the crew during the voyage."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rHow did you become a sailor?\rDid you have a seaport that was your home?\rDo you still keep in contact with your shipmates?\rWhy are you a " +
      className.toLowerCase() + "?\r" +
      "How did you go from sailor to " + className.toLowerCase() + "?\r" +
      "What does being a " + race + " mean to you?\r";
  } else if (newBackground1 === "Soldier") {
    soldierGamingSet = random_gaming_set_soldier();
    toolAdder2(toolAdder(soldierGamingSet.toLowerCase()));
    toolAdder2(toolAdder("land vehicles"));
    add_click(2);
    statChecker(strengthModifier + 2, "form49_1");
    add_click(24);
    statChecker(charismaModifier + 2, "form44_1");
    equipment.push("Insignia of rank");
    document.getElementById("form14_2").value = random_trophy();
    if (soldierGamingSet === "Dice") {
      equipment.push("Bone " + soldierGamingSet);
    } else {
      equipment.push(soldierGamingSet);
    }
    equipment.push("Set of common clothes");
    equipment.push("Belt Pouch");
    ctx.gold += 10;
    features.push(
      "Military Rank: Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. Can gain access to friendly military encampments and fortresses where your rank is recognized."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rHow did you become a soldier?\rWhat rank were you?\rDo you still keep in contact with any of your brothers and sisters in arms?\rWhy are you a " +
      className.toLowerCase() + "?\r" +
      "How did you go from soldier to " + className.toLowerCase() + "?\r" +
      "What does being a " + race + " mean to you?\r";
  } else if (newBackground1 === "Spy") {
    toolAdder2(toolAdder("thieves' tools"));
    toolAdder2(toolAdder(random_gaming_set_capitalize().toLowerCase()));
    add_click(17);
    statChecker(charismaModifier + 2, "form36_1");
    add_click(23);
    statChecker(dexterityModifier + 2, "form32_1");
    equipment.push("Crowbar");
    equipment.push("Set of dark common clothes with a hood");
    equipment.push("Belt Pouch");
    ctx.gold += 15;
    features.push(
      "Spy Contact: You have a reliable and trustworthy contact who acts as your liaison to a network of other spies or criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhat caused you to become a spy?\rDid you do anything terrible?\rWho is your spy contact?\rWhy are you a " +
      className.toLowerCase() + "?\r" +
      "How did you go from spy to " + className.toLowerCase() + "?\r" +
      "What does being a " + race + " mean to you?\r" +
      "Who did you work for when you were a spy?";
  } else if (newBackground1 === "Urchin") {
    toolAdder2(toolAdder("disguise kit"));
    toolAdder2(toolAdder("thieves' tools"));
    add_click(4);
    statChecker(dexterityModifier + 2, "form46_1");
    add_click(23);
    statChecker(dexterityModifier + 2, "form32_1");
    equipment.push("Small knife");
    equipment.push("Map of hometown");
    equipment.push("Pet mouse");
    document.getElementById("form14_2").value = random_trinket() + " from parents";
    equipment.push("Set of common clothes");
    equipment.push("Belt Pouch");
    ctx.gold += 10;
    features.push(
      "City Secrets: You know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow."
    );
    document.getElementById("form15_2").value =
      "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhat caused you to become an urchin?\rDid someone wrong you?\rAre you an orphan?\rDid your family's jobs fall through?\rWhy are you a " +
      className.toLowerCase() + "?\r" +
      "How did you go from urchin to " + className.toLowerCase() + "?\r" +
      "What does being a " + race + " mean to you?\r";
  }
}

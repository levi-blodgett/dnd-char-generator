// TO DO
// 1. Fix Cleric (flow of domains and equipment) and Rogue (expertise function) logic (~2227)
// 2. Test thoroughly

// Initialize stats and stats array
let stats = [];
let strength = 0;
let dexterity = 0;
let constitution = 0;
let intelligence = 0;
let wisdom = 0;
let charisma = 0;
let min = 0;
let max = 0;
let sum = 0;
let racialLanguage1;
let racialLanguage2;
let randomStatArray = [];
let stat1 = stats[0];
let stat2 = stats[1];
let stat3 = stats[2];
let stat4 = stats[3];
let stat5 = stats[4];
let stat6 = stats[5];
let newBackground1 = '';
let newBackground2 = 0;
let classCounter = 0;
let firstWeaponFirstSectionId = "form79_1";
let firstWeaponSecondSectionId = "form64_1";
let firstWeaponThirdSectionId = "form76_1";
let secondWeaponFirstSectionId = "form78_1";
let secondWeaponSecondSectionId = "form65_1";
let secondWeaponThirdSectionId = "form74_1";
let thirdWeaponFirstSectionId = "form77_1";
let thirdWeaponSecondSectionId = "form66_1";
let thirdWeaponThirdSectionId = "form75_1";
let currentName;
let bardModifier;
let charName;
let statModifier;
let nameGenerator = {};
let bardCantrips = [
  "Dancing Lights",
  "Light",
  "Mage Hand",
  "Mending",
  "Message",
  "Minor Illusion",
  "Prestidigitation",
  "True Strike",
  "Vicious Mockery"
];
let clericCantrips = [
  "Guidance",
  "Light",
  "Mending",
  "Resistance",
  "Sacred Flame",
  "Spare the Dying",
  "Thaumaturgy"
];
let druidCantrips = [
  "Druidcraft",
  "Guidance",
  "Mending",
  "Poison Spray",
  "Produce Flame",
  "Resistance",
  "Shillelagh"
];
let sorcererCantrips = [
  "Acid Splash",
  "Chill Touch",
  "Dancing Lights",
  "Fire Bolt",
  "Light",
  "Mage Hand",
  "Mending",
  "Message",
  "Minor Illusion",
  "Poison Spray",
  "Prestidigitation",
  "Ray of Frost",
  "Shocking Grasp",
  "True Strike"
];
let warlockCantrips = [
  "Chill Touch",
  "Eldritch Blast",
  "Mage Hand",
  "Minor Illusion",
  "Poison Spray",
  "Prestidigitation",
  "True Strike"
];
let wizardCantrips = [
  "Acid Splash",
  "Chill Touch",
  "Dancing Lights",
  "Fire Bolt",
  "Light",
  "Mage Hand",
  "Mending",
  "Message",
  "Minor Illusion",
  "Poison Spray",
  "Prestidigitation",
  "Ray of Frost",
  "Shocking Grasp",
  "True Strike"
];
let bardSpells = [
  "Animal Friendship",
  "Bane",
  "Charm Person",
  "Comprehend Languages",
  "Cure Wounds",
  "Detect Magic",
  "Disguise Self",
  "Faerie Fire",
  "Feather Fall",
  "Healing Word",
  "Heroism",
  "Hideous Laughter",
  "Identify",
  "Illusory Script",
  "Longstrider",
  "Silent Image",
  "Sleep",
  "Speak with Animals",
  "Thunderwave",
  "Unseen Servant"
];
let clericSpells = [
  "Bane",
  "Bless",
  "Command",
  "Create or Destroy Water",
  "Cure Wounds",
  "Detect Evil and Good",
  "Detect Magic",
  "Detect Poison and Disease",
  "Guiding Bolt",
  "Healing Word",
  "Inflict Wounds",
  "Protection from Evil and Good",
  "Purify Food and Drink",
  "Sanctuary",
  "Shield of Faith"
];
let druidSpells = [
  "Animal Friendship",
  "Charm Person",
  "Create or Destroy Water",
  "Cure Wounds",
  "Detect Magic",
  "Detect Poison and Disease",
  "Entangle",
  "Faerie Fire",
  "Fog Cloud",
  "Goodberry",
  "Healing Word",
  "Jump",
  "Longstrider",
  "Purify Food and Drink",
  "Speak with Animals",
  "Thunderwave"
];
let sorcererSpells = [
  " Burning Hands",
  "Charm Person",
  "Color Spray",
  "Comprehend Languages",
  "Detect Magic",
  "Disguise Self",
  "Expeditious Retreat",
  "False Life",
  "Feather Fall",
  "Fog Cloud",
  "Jump",
  "Mage Armor",
  "Magic Missile",
  "Shield",
  "Silent Image",
  "Sleep",
  "Thunderwave"
];
let warlockSpells = [
  "Charm Person",
  "Comprehend Languages",
  "Expeditious Retreat",
  "Hellish Rebuke",
  "Illusory Script",
  "Protection from Evil and Good",
  "Unseen Servant"
];
let wizardSpells = [
  "Alarm",
  "Burning Hands",
  "Charm Person",
  "Color Spray",
  "Comprehend Languages",
  "Detect Magic",
  "Disguise Self",
  "Expeditious Retreat",
  "False Life",
  "Feather Fall",
  "Find Familiar",
  "Floating Disk",
  "Fog Cloud",
  "Grease",
  "Hideous Laughter",
  "Identify",
  "Illusory Script",
  "Jump",
  "Longstrider",
  "Mage Armor",
  "Magic Missile",
  "Protection from Evil and Good",
  "Shield",
  "Silent Image",
  "Sleep",
  "Thunderwave",
  "Unseen Servant"
];
let spellForms = [
  "form193_3",
  "form159_3",
  "form137_3",
  "form136_3",
  "form135_3",
  "form133_3"
];
let cantripForms = [
  "form213_3",
  "form204_3",
  "form203_3",
  "form202_3",
  "form201_3",
  "form200_3"
];
let bardCantripCount = 2;
let clericCantripCount = 3;
let druidCantripCount = 2;
let sorcererCantripCount = 4;
let warlockCantripCount = 2;
let wizardCantripCount = 3;

// Function to get random number depending on int
function getRandomNumber(int) {
  return Math.ceil(Math.random() * int);
};

// Create stat modifiers for under the ability scores
function stat_modifier_generator(stat) {
  if (3 >= stat) {
    statModifier = -4;
  } else if (5 >= stat) {
    statModifier = -3;
  } else if (7 >= stat) {
    statModifier = -2;
  } else if (9 >= stat) {
    statModifier = -1;
  } else if (11 >= stat) {
    statModifier = 0;
  } else if (13 >= stat) {
    statModifier = 1;
  } else if (15 >= stat) {
    statModifier = 2;
  } else if (17 >= stat) {
    statModifier = 3;
  } else if (19 >= stat) {
    statModifier = 4;
  } else if (20 >= stat) {
    statModifier = 5;
  }
  return statModifier;
};

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Initialize length of all arrays
let lengthOfCheckedRaceArray = 0;
let lengthOfCheckedBackgroundArray = 0;
let lengthOfCheckedClassArray = 0;
let lengthOfCheckedAlignmentArray = 0;

// To determine which version is being used this variable will be assigned a value at the end of each version's ()
let versionForChecking = 0;

// Function that shows/hides whichever section isn't active (either the character page or the information page)
function show_or_hide_pages() {
  lastPage = document.getElementById("lastPage");
  dndPage = document.getElementById("dnd");
  if (lastPage.style.display === "none") {
    lastPage.style.display = "block";
    dndPage.style.display = "none";
  } else if (lastPage.style.display === "block") {
    lastPage.style.display = "none";
    dndPage.style.display = "block";
  } else {
    lastPage.style.display = "block";
    dndPage.style.display = "none";
  }
  if (document.getElementById("top_button").innerHTML === "Show Information Page") {
    document.getElementById("top_button").innerHTML = "Show Character Page";
  } else {
    document.getElementById("top_button").innerHTML = "Show Information Page";
  }
}

function show_func() {
  lastPage = document.getElementById("lastPage");
  dndPage = document.getElementById("dnd");
  if (lastPage.style.display === "block" || null) {
    lastPage.style.display = "none";
    dndPage.style.display = "block";
  }
  if (document.getElementById("top_button").innerHTML === "Show Character Page") {
    document.getElementById("top_button").innerHTML = "Show Information Page";
  }
}

function standard_version() {
  // STANDARD ARRAY STAT BLOCK

  // Standard array used for stats
  standard_array = [15, 14, 13, 12, 10, 8];

  // Assign the standard array to a different variable
  final_stat_array1 = standard_array;

  // Assign the shuffled array into individual variables
  stat1 = final_stat_array1[0];
  stat2 = final_stat_array1[1];
  stat3 = final_stat_array1[2];
  stat4 = final_stat_array1[3];
  stat5 = final_stat_array1[4];
  stat6 = final_stat_array1[5];

  // Assign individual stats to an array named stats
  stats = [stat1, stat2, stat3, stat4, stat5, stat6];

  stats = shuffle(stats);

  // 1 means standard
  versionForChecking = 1;

  // Return stats array
  return stats;
}

function roll_version() {
  // ROLL STATS STAT BLOCK

  // Function to remove the smallest number from an array, this is used in get_random_stat() to drop 4d6 to 3d6
  function remove_smallest_number(arr) {
    arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1);
    return arr;
  };

  // Get a random stat for an ability score
  function get_random_stat() {
    randomStatArray = [];
    for (i = 0; i < 4; i++) {
      randomStatArray.push(getRandomNumber(6));
    }
    remove_smallest_number(randomStatArray);
    return randomStatArray;
  };

  // Function to get the sum of the 4d6 drop lowest that was rolled by get_random_stat()
  function get_sum(stat) {
    for (i = 0, sum = 0; i < stat.length; sum += stat[i++]) {}
    return sum;
  };

  // Block of arrays that are assigned a random stat each
  firstStat = get_random_stat();
  secondStat = get_random_stat();
  thirdStat = get_random_stat();
  fourthStat = get_random_stat();
  fifthStat = get_random_stat();
  sixthStat = get_random_stat();

  // Block of variables that had arrays that were summed up to equal a single number
  temporaryStatHolder1 = get_sum(firstStat);
  temporaryStatHolder2 = get_sum(secondStat);
  temporaryStatHolder3 = get_sum(thirdStat);
  temporaryStatHolder4 = get_sum(fourthStat);
  temporaryStatHolder5 = get_sum(fifthStat);
  temporaryStatHolder6 = get_sum(sixthStat);

  // Assign individual stats to an array named stats
  statspt1 = [temporaryStatHolder1, temporaryStatHolder2, temporaryStatHolder3, temporaryStatHolder4, temporaryStatHolder5, temporaryStatHolder6];

  stats = shuffle(statspt1);

  // 2 means roll
  versionForChecking = 2;

  // Return stats array
  return stats;
}

function pointbuy_version() {
  // POINT BUY STAT BLOCK

  // Array of all possible combinations of the point buy system
  array_of_stat_combos = [
    [15, 15, 15, 8, 8, 8],
    [15, 15, 14, 10, 8, 8],
    [15, 15, 14, 9, 9, 8],
    [15, 15, 13, 12, 8, 8],
    [15, 15, 13, 11, 9, 8],
    [15, 15, 13, 10, 10, 8],
    [15, 15, 13, 10, 9, 9],
    [15, 15, 12, 12, 9, 8],
    [15, 15, 12, 11, 10, 8],
    [15, 15, 12, 11, 9, 9],
    [15, 15, 12, 10, 10, 9],
    [15, 15, 11, 11, 11, 8],
    [15, 15, 11, 11, 10, 9],
    [15, 15, 11, 10, 10, 10],
    [15, 14, 14, 12, 8, 8],
    [15, 14, 14, 11, 9, 8],
    [15, 14, 14, 10, 10, 8],
    [15, 14, 14, 10, 9, 9],
    [15, 14, 13, 13, 9, 8],
    [15, 14, 13, 12, 10, 8],
    [15, 14, 13, 12, 9, 9],
    [15, 14, 13, 11, 11, 8],
    [15, 14, 13, 11, 10, 9],
    [15, 14, 13, 10, 10, 10],
    [15, 14, 12, 12, 11, 8],
    [15, 14, 12, 12, 10, 9],
    [15, 14, 12, 11, 11, 9],
    [15, 14, 12, 11, 10, 10],
    [15, 14, 11, 11, 11, 10],
    [15, 13, 13, 13, 11, 8],
    [15, 13, 13, 13, 10, 9],
    [15, 13, 13, 12, 12, 8],
    [15, 13, 13, 12, 11, 9],
    [15, 13, 13, 12, 10, 10],
    [15, 13, 13, 11, 11, 10],
    [15, 13, 12, 12, 12, 9],
    [15, 13, 12, 12, 11, 10],
    [15, 13, 12, 11, 11, 11],
    [15, 12, 12, 12, 12, 10],
    [15, 12, 12, 12, 11, 11],
    [14, 14, 14, 13, 9, 8],
    [14, 14, 14, 12, 10, 8],
    [14, 14, 14, 12, 9, 9],
    [14, 14, 14, 11, 11, 8],
    [14, 14, 14, 11, 10, 9],
    [14, 14, 14, 10, 10, 10],
    [14, 14, 13, 13, 11, 8],
    [14, 14, 13, 13, 10, 9],
    [14, 14, 13, 12, 12, 8],
    [14, 14, 13, 12, 11, 9],
    [14, 14, 13, 12, 10, 10],
    [14, 14, 13, 11, 11, 10],
    [14, 14, 12, 12, 12, 9],
    [14, 14, 12, 12, 11, 10],
    [14, 14, 12, 11, 11, 11],
    [14, 13, 13, 13, 13, 8],
    [14, 13, 13, 13, 12, 9],
    [14, 13, 13, 13, 11, 10],
    [14, 13, 13, 12, 12, 10],
    [14, 13, 13, 12, 11, 11],
    [14, 13, 12, 12, 12, 11],
    [14, 12, 12, 12, 12, 12],
    [13, 13, 13, 13, 13, 10],
    [13, 13, 13, 13, 12, 11],
    [13, 13, 13, 12, 12, 12]
  ];

  // Function to shuffle all the numbers in a random point buy combination into random order and return it
  function random_array() {
    number = Math.floor(Math.random() * 65);
    array = array_of_stat_combos[number];
    return array;
  }

  // Final array of the random point buy combination
  final_stat_array2 = random_array();

  // Block of variables that are assigned a random stat each
  stat1 = final_stat_array2[0];
  stat2 = final_stat_array2[1];
  stat3 = final_stat_array2[2];
  stat4 = final_stat_array2[3];
  stat5 = final_stat_array2[4];
  stat6 = final_stat_array2[5];

  // Assign individual stats to an array named stats
  stats = [stat1, stat2, stat3, stat4, stat5, stat6];

  stats = shuffle(stats);

  // 3 means pointbuy
  versionForChecking = 3;

  // Return stats array
  return stats;
}


// Function used to generate a new character
function generate_character() {
  // Name generator object that contains all names
  nameGenerator = {
    _races: {
      _dragonborn: { // 20 first, 20 last
        firstName: ["Arjhan", "Balasar", "Bharash", "Donaar", "Ghesh", "Heskan", "Kriv", "Medrash", "Mehen", "Nadarr", "Pandjed", "Patrin", "Rhogar", "Shamash", "Shedinn", "Tarhun", "Torinn", "Tever", "Arsiarth", "Griddry"],
        lastName: ["Clethiallor", "Daardendrian", "Delmirev", "Drachedandion", "Fenkebradon", "Kepemolik", "Kerrhylon", "Kimbatuul", "Linxandalor", "Myastan", "Nemmonis", "Norixius", "Ophshtalajiir", "Prexjandilin", "Sheseliath", "Turnuroth", "Verthurgiesh", "Yarjerit", "Kezzayrth", "Froithudeom"]
      },
      _dwarf: { // 20 first, 20 last
        firstName: ["Adrik", "Baern", "Bruenor", "Dain", "Delg", "Eberk", "Einkil", "Fargrim", "Kildrak", "Morgran", "Orsik", "Rurik", "Taklinn", "Thoradin", "Thorin", "Tordek", "Traubon", "Ulfgar", "Veit", "Vondal"],
        lastName: ["Balderk", "Battlehammer", "Brawnanvil", "Dankil", "Fireforge", "Frostbeard", "Gorunn", "Holderhek", "Ironfist", "Loderr", "Lutgehr", "Rumnaheim", "Strakeln", "Torunn", "Ungart", "Onyxfury", "Brewfinger", "Caskborn", "Grayheart", "Mountainheart"]
      },
      _elf: { // 20 first, 20 last
        firstName: ["Adran", "Aelar", "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carric", "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Thamior", "Tharivol"],
        lastName: ["Amakiir", "Amastacia", "Galanodel", "Holimion", "Ilphelkiir", "Liadon", "Meliamne", "Nai'lo", "Siannodel", "Xiloscient", "Issisil", "Adynore", "Liazana", "Reyro", "Wynynore", "Inavyre", "Presnorin", "Ulaleth", "Daeyra", "Elkas"]
      },
      _gnome: { // 20 first, 20 last
        firstName: ["Alston", "Brocc", "Burgell", "Dimble", "Eldon", "Erky", "Fonkin", "Frug", "Gerbo", "Gimble", "Glim", "Jebeddo", "Namfoodle", "Orryn", "Roondar", "Seebo", "Sindri", "Warryn", "Wrenn", "Zook"],
        lastName: ["Beren", "Daergel", "Folkor", "Garrick", "Nackle", "Murnig", "Ningel", "Raulnor", "Scheppen", "Timbers", "Turen", "Kovocun", "Nudums", "Walmudluss", "Pewaed", "Gan", "Middlambuss", "Ebobbla", "Kreesp", "Fimebs"]
      },
      _halfelf: { // 20 first, 20 last
        firstName: ["Ralmevik", "Shaumar", "Vladislak", "Aoth", "Bareris", "Kulenov", "Stor", "Glar", "Grigor", "Morn", "Adran", "Aelar", "Aramil", "Peren", "Quarion", "Riardon", "Theren", "Varis", "Equival", "Ailduin"],
        lastName: ["Leoavor", "Tyrlamir", "Ilophanis", "Eirxiron", "Loraharice", "Caina", "Evenwood", "Greycastle", "Tallstag", "Tan", "Wan", "Khalid", "Mostana", "Chergoba", "Dyernina", "Keaphyra", "Iarfir", "Enrora", "Yllasatra", "Alexstraza"]
      },
      _halforc: { // 20 first, 20 last
        firstName: ["Dench", "Feng", "Gell", "Henk", "Holg", "Imsh", "Keth", "Krusk", "Shump", "Thokk", "Romero", "Salazar", "Umbero", "Bai", "Chao", "Jia", "Ivor", "Kosef", "Mival", "Glar"],
        lastName: ["", "", "", "", "", "", "", "", "Mhurren", "Ront", "Agosto", "Astorio", "Calabra", "Amblecrown", "Buckman", "Dundragon", "Basha", "Dumein", "Jassan", "Fezim"]
      },
      _halfling: { // 20 first, 20 last
        firstName: ["Alton", "Ander", "Cade", "Corrin", "Eldon", "Errich", "Finnan", "Garret", "Lindal", "Lyle", "Merric", "Milo", "Osborn", "Perrin", "Reed", "Roscoe", "Wellby", "Adelbert", "Munderic", "Godun"],
        lastName: ["Brushgather", "Goodbarrel", "Greenbottle", "High-hill", "Hilltopple", "Leagallow", "Tealeaf", "Thorngage", "Tosscobble", "Underbough", "Fleetfoot", "Gamwich", "Townsend", "Wanderfoot", "Hlothran", "Goodbody", "Hayward", "Bottomhill", "Brownlock", "Oakbottom"]
      },
      _human: { // 20 first, 20 last
        firstName: ["Ehput-Ki", "Luth", "Malcer", "Randal", "Fai", "Anton", "Diero", "Khemed", "Mehmen", "Borivik", "Faurgar", "Jandar", "Kanithar", "Madislak", "On", "Shan", "Shui", "Wen", "Chernin", "Dotsk"],
        lastName: ["Shemov", "Starag", "Brightwood", "Helder", "Hornraven", "Stormwind", "Ankhalab", "Anskuld", "Stayanoga", "Ulmokina", "Pisacar", "Ramondo", "Sum", "Chien", "Pashar", "Rein", "Greycastle", "Tallstag", "Marsk", "Nemetsk"]
      },
      _tiefling: { // 20 first, 20 last
        firstName: ["Akmenos", "Amnon", "Barakas", "Damakos", "Ekemon", "Iados", "Kairon", "Leucis", "Melech", "Mordai", "Morthos", "Pelaios", "Skamos", "Therai", "Vanlor", "Daozon", "Uwaizihr", "Coasihr", "Clielhar", "Shuizalu"],
        lastName: ["Art", "Carrion", "Chant", "Creed", "Despair", "Fear", "Glory", "Hope", "Ideal", "Music", "Nowhere", "Open", "Poetry", "Quest", "Random", "Reverence", "Sorrow", "Temerity", "Torment", "Weary"]
      }
    },
    _backgrounds: ["Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero", "Gladiator", "Guild Artisan", "Guild Merchant", "Hermit", "Knight", "Noble", "Outlander", "Pirate", "Sage", "Sailor", "Soldier", "Spy", "Urchin"], // 18 total

    // Function to get a background that fits their stats
    get_new_background: function get_new_background() {
      newBackground2 = this._backgrounds[Math.floor(Math.random() * 18)];
      return newBackground2;
    },
    // Create a name pulling from the name object
    CreateNewName: function CreateNewName(firstName, lastName) {
      // If they are a Half-orc without a last name, don't append a space.
      if (lastName === "") {
        currentName = firstName;
      } else {
        currentName = firstName + " " + lastName;
      }
      return currentName;
    }
  };

  // Initialize variables
  let language;
  let firstLanguage;
  let secondlanguage;
  let extralanguage;
  let knowledgeLanguage;
  let knowledgeLanguage2;
  let musicalinstrument;
  let musicalinstrument2;
  let musicalinstrument3;
  let artisantool;
  let randomAritsanTool;
  let soldierGamingSet;
  let gladiatorWeapon;
  let beefiness;
  let individualDiscrepancy;
  let randomValue;
  let lightGo;
  let finalFirstName;
  let finalLastName;
  let race;
  let ancestry;
  let ancestryHuman;
  let statTotal;
  let raceSplitter;
  let raceSplitter1;
  let raceSplitter2;
  let raceSplitter3;
  let subraceSplitter;
  let subraceSplitter1;
  let subraceSplitter2;
  let subraceSplitter3;
  let i;
  let j;
  let random;
  let random2;
  let random3;
  let random4;
  let random5;
  let random6;
  let className;
  let classAndLevel;
  let randomClassVariable;
  let randomChance;
  let clericBuild;
  let name;
  let newLangs;
  let newWeaponProfs;
  let newArmorProfs;
  let newToolProfs;
  let firstNumber;
  let secondNumber;
  let finalLanguages;
  let finalweaponProficiencies;
  let finalarmorProficiencies;
  let finaltoolProficiencies;
  let arrayOfAlignment;
  let lengthOfAlignmentArray;
  let AlignmentRandomizerNumber;
  let actualAlignment;
  let balanceAndMorality;
  let balance;
  let morality;
  let arrayOfBackgrounds;
  let lengthOfBackgroundArray;
  let BackgroundRandomizerNumber;
  let actualBackground;
  let raceNameLower;
  let raceNameLowerString;
  let arrayOfRaces;
  let lengthOfRaceArray;
  let RaceRandomizerNumber;
  let actualRace;
  let strengthModifier;
  let dexterityModifier;
  let constitutionModifier;
  let intelligenceModifier;
  let wisdomModifier;
  let charismaModifier;
  let firstNameNumber;
  let lastNameNumber;
  let number;
  let raceChecker;
  let arrayOfClass;
  let lengthOfClassArray;
  let ClassRandomizerNumber;
  let actualClass;
  let alignmentChecker = false;
  let hp = 0;
  let gold = 0;
  let armorClass = 0;
  let arrayOfCheckedClass = [];
  let dwarves = [];
  let dragonborn = [];
  let elves = [];
  let gnomes = [];
  let halflings = [];
  let humans = [];
  let leftoverArray = [];
  let arrayOfCheckedRaces = [];
  let arrayOfCheckedAlignment = [];
  let arrayOfCheckedBackgrounds = [];
  let listOfExoticLanguages = [];
  let listOfStandardLanguages = [];
  let martialWeapons = [];
  let simpleWeapons = [];
  let simpleWeaponsChoices = [];
  let equipment = [];
  let spellcastingSection = [];
  let alliesAndOrganizations = [];
  let features = [];
  let additionalFeatures = [];
  let personalityTraits = [];
  let alignment = [];
  let arrayOfIdeals = [];
  let arrayOfBonds = [];
  let arrayOfFlaws = [];
  let proficienciesAndLanguages = [];
  let simpleWeaponsArray = [];
  let martialWeaponsArray = [];
  let armor = {};
  let profsAndLangs = {
    languages: [],
    armorProficiencies: [],
    weaponProficiencies: [],
    toolProficiencies: []
  };

  const traits = ["I bend the knee to no man who I deem unworthy.", "I walk my own path, regardless of how others criticize it.", "I love a good insult, even one directed at me.", "I was beaten when I was younger, so I act tough to hide that I'm hurting.", "I watch over those I care for as if they were pups.", "I will crush my enemies, with fury and power.", "I place no stock in wealthy or well-mannered folk.", "Money and manners won't save you from a hungry owlbear.", "I work hard so that I can play hard when the work is done.", "I have a crude sense of humor.", "I am confident and assertive.", "There's nothing I like more than a good mystery.", "My friends know they can rely on me, no matter what.", "I face problems head-on. A simple, direct solution is the best path to success.", "I ask a lot of questions.", "I like to walk when I have to think and I HATE being tied up or restrained.", "I'm methodical, calculating, and exacting... unless I've had anything at all to drink.", "I take great pains to always look my best and follow the latest fashions.", "I like meeting new people, I will approach anyone, anytime, anywhere.", "I can find common ground between anyone, even the fiercest enemies", "I see omens in every event and action."];

  const ideals = ["I always try to help those in need, no matter the personal cost.", "I believe beautiful things like art make the world a better place.", "I feel grateful for my life and need it to matter.", "The small and innocent must be cared for and protected.", "I try to help those in need regardless of the cost.", "I must make amends for what people assume I did.", "Every day is a new opportunity to do good in the world.", "Helping others is the most important thing in the world.", "My powers can protect us from all the evils in all the worlds.", "There are all sorts of beings around us; my duty is to prevent them harming good folk.", "Respect those that are different and let all be who they wish.", "There is so much to see and learn.", "All have burdens to bear.", "Everyone deserves to feel safe.", "Eat or be eaten.", "People deserve to be treated by their actions, not by someone else's.", "I must never lose control over myself again, not after last time.", "If I follow my own path I will become who I was meant to be.", "I am obsessively focused on uncovering my past.", "Bettering yourself is essential in life.", "My opinion is the only one that matters and others should reinforce my importance", "The world owes me and I will take what I deserve.", "The only way to overcome adversity is to be powerful.", "I show no mercy to those who oppose me.", "I am a monster that kills monsters.", "I will take what I want or need.", "I will vindicate any wrongdoings against my party or myself.", "If you don't strike first, you die.", "I always have a plan to save myself or my group, regardless of collateral.", "My refined tastes deserve to be catered to."];

  const bonds = ["I owe my guild a great debt for forging me into the person I am today.", "My terrain is my home, and I'll fight to defend it.", "No one else should have to endure the hardships I’ve been through.", "My pipe is my favorite thing in the world. I'll pretty much smoke anything in it. It's so relaxing.", "Alcohol, I use it to numb the pain of my past sins that haunt my thoughts almost always.", "Twins? Pfft, I'm a quintuplet!", "My best friend will never walk again because of a battle I provoked. I choose my fights with much greater care now.", "I heard of a perfect place for me, but I seem to travel in the opposite direction.", "My weapon was given to me to protect my land, and I intend to do so, against any threat.", " I fleeced the wrong person and must work to ensure that this individual never crosses paths with me or those I care about.", "I owe everything to my mentor—a horrible person who’s probably rotting in jail somewhere.", "A powerful person killed someone I love. Some day soon, I'll have my revenge.", "I will become the greatest thief that ever lived.", "I sponsor an orphanage to keep others from enduring what I was forced to endure.", "I escaped poverty once by robbing an important person, and I'm wanted for it.", "I was resurrected after I died, but whoever did the ritual remains a mystery to me.", "I killed a member of a powerful thieves' guild in a dispute over loot once, and now I'm hunted by them.", "I stole from an extremely powerful noble family and they seek to restore their precious heirloom no matter the cost.", "I did what I had to to get by. I hope to never speak of what I've done again.", "I will do anything to prove myself superior to my hated rival.", "I worked the land, I love the land, and I will protect the land.", "My tools are symbols of my past life, and I carry them so that I will never forget my roots.", "I wish my childhood sweetheart had come with me to pursue my destiny.", "I will face any challenge to win the approval of my family.", "The common folk must see me as a hero of the people.", "It is my duty to provide children to sustain my tribe.", "Someone saved my life on the battlefield. To this day, I will never leave a friend behind.", "Those who fight beside me are those worth dying for.", "A loved one is a werewolf, and I will go to any lengths to protect them and their secret.", "I'm trying to pay off an old debt I owe to a generous benefactor.", "I have an ancient text that holds terrible secrets that must not fall into the wrong hands.", "I work to unearth a library that has been hidden for the past thousand years.", "My life's work is a series of tomes related to a specific field of lore.", "I owe a debt I can never repay to the person who took an interest in me, and more importantly, pity.", "I suffer from an exotic illness which forces me to eat or drink something unusual every day.", "I have been convicted of a crime I did not commit, and am a fugitive from my own land.", "By chance I managed to kill an assassin that targeted me. Now I'm always on the lookout for the next attack.", "I follow the lead of a great idol, whom I style myself and my work after.", "I believe that I may be able to unlock the secrets of magics long lost.", "Something important was taken from me, and I aim to steal it back.", "Nothing is more important than the other members of my family.", "I have an ancient text that holds terrible secrets that must not fall into the wrong hands.", "I sold my soul for power. I hope to do enough deeds to win it back.", "The statue at my home is actually my petrified sister who I've sworn to restore to flesh.", "My father sold his soul to some kind of devil in order to save me from a childhood illness or life threatening event.", "I hate someone, hate them so much it spreads to their family and friends.", "Very distinctive tattoos adorn my arms, and I must keep them covered and hidden lest their secret leads to my death.", "I have a personal vendetta against a very popular person. I only live to see their reputation and fortune torn apart.", "I gave up my most precious possession to secure a deal. I still seek for away to regain it.", "I would die to recover an ancient relic of my faith that was lost long ago.", "I owe my life to the priest who took me in when my parents died.", "I will do anything to protect the temple where I served.", "I seek to preserve a sacred text that my enemies consider heretical and seek to destroy.", "I suffer awful visions of a coming disaster and will do anything to prevent it.", "My uncle is a high ranking member of an important temple, that isn't my deity.", "You may never have heard of my temple, but it is the most precious place on earth.", "My patron brought me from rags to this life, I owe them everything.", "My relic was given to me by a stranger at the lowest point in my life. I draw strength from it.", "My life is a series of signs from my deity.", "Somewhere out there, I have a child who doesn't know me. I'm making the world better for him or her.", "My instrument is my most treasured possession, and it reminds me of someone I love.", "Someone stole my precious instrument, and someday I'll get it back.", "I want to be famous, whatever it takes.", "I would do anything for the other members of my old troupe.", "Something from my childhood made me afraid of the dark. To this day, I struggle to enter a cave or other dark, enclosed space.", "I have no memories beyond a few years ago. Flashes of my past sometimes come... I hunger to know who I was.", "When I go out, I'll never do it without the 'gang'. Together we are the life of the party and without them, everything is bleak.", "I have a responsible sibling, whom I love for getting me out of trouble and whom I hate for always showing me up.", "There was a story I read over and over and I model my entire life on it.", "I can't treat women the same as men, they are too beautiful.", "Everything I do is for the common people.", "I come from a noble family, and one day I'll reclaim my lands and title from those who stole them from me.", "A proud noble once gave me a horrible beating, and I will take my revenge on any bully I encounter.", "I protect those who cannot protect themselves.", "I fight for those who cannot fight for themselves.", "One day, I'll proudly wear the tabard of my order again.", "My tattoo signifies my membership in a secret fraternity of knights I presumed had all been killed off except for myself.", "When I nearly died, I had visions of the Nine Hells. Now I seek to atone for sins of my past.", "In his youth, my father ran from a great battle and has lived his life under the insult of 'coward'. I hope to prove this a lie.", "A scoundrel stole my family's most treasured heirloom, and I intend to take it back.", "I pursue wealth to secure someone's love.", "I've been searching my whole life for the answer to a certain question.", "In a harbor town, I have a paramour whose eyes nearly stole me from the world.", "I was cheated out of my fair share of the profits, and I want to get my due.", "I do not know my true name. I go by an alias, but seek to discover the secrets of my own past.", "The birthmark on my forehead marks me as the resolution of an ancient prophecy of my people.", "I am driven by nightly dreams about a mysterious figure who repeats an ominous phrase.", "As a child, my twin sacrificed himself to a devil so that I may live, and now haunts my dreams with a motive I've yet to discern.", "My mother is a witch, reviled and cast-out by our village. I have always felt it my duty to protect her.", "I seek to find my true heritage, ever since I learned of it.", "Someone I loved died because of a mistake I made. That will never happen again.", "Nothing is more important than the other members of my order.", "I'm still seeking the enlightenment I pursued in my seclusion, and it still eludes me.", "I entered seclusion because I loved someone I could not have.", "Should my discovery come to light, it could bring ruin to the world.", "My isolation gave me great insight into a great evil that only I can destroy.", "I work to preserve a monastery.", "I have vivid, repeated visions of someone's death, and though I have never met this person, somehow I know I will.", "In the east, I see a golden light emerging from the heavens at uncertain intervals. No one else seems to be able to see this light.", "During my enlightenment I was told in a dream to find a particular group of people, and follow them to the ends of the world.", "I entered seclusion to hide from the ones who might still be hunting me. I must someday confront them.", "Should my discovery come to light, it could bring ruin to the world.", "An injury to the unspoiled wilderness of my home is an injury to me.", "I will bring terrible wrath down on the evildoers who destroyed my homeland.", "I am the last of my tribe, and it is up to me to ensure their names enter legend.", "His pet tarantula 'Karace' that lives in his hair and spins him silk that he uses for making dream catchers.", "My best friend was experimented on by a wizard, and still suffers to this day. I wish to find a way to cure them.", "There is a former friend whom I hurt terribly. I want to make it up , but I don't dare get close in fear of making it worse.", "When I was first learning my druidic powers, I crippled my clan's sacred tree that hosts our deity.", "My druidic focus has been passed down over ten generations, I must protect it, and with it, my people.", "I idolize a hero of the old tales and measure my deeds against that person's.", "I have a family, but I have no idea where they are. One day, I hope to see them again.", "My tribe is the most important thing in my life, even when they are far from me.", "I would still lay down my life for the people I went to war beside.", "My honor is my life.", "I'll never forget the crushing defeat my tribe suffered or the enemies who dealt it.", "My weapon is a family heirloom, it's by far my most precious possession.", "I keep as many weapons on my as I can in case I drop one.", "My ancestor was quite famous, and I wish to overshadow their legacy with my own.", "I was raised as the hostage of an enemy clan, where I befriended the enemy clan's heir."];

  const flaws = ["I have a 'tell' that reveals when I'm lying.", "I have trouble keeping my true feelings hidden.", "I'm quick to assume that someone is trying to cheat me.", "No one must ever learn that I once stole money from my people.", "I would kill to acquire a noble title.", "I am slow to trust members of other races.", "I overlook obvious solutions in favor of complicated ones.", "I follow orders, even if I think they're wrong.", "Upon touching a new weapon for the first time, roll a d100. If 100, the weapon bursts into flames and turns to ash.", "Small bladder.", "I'm a sucker for a pretty face.", "I let my need to win arguments overshadow friendships and harmony.", "I like keeping secrets and won't share them with anyone.", "I secretly believe that everyone is beneath me.", "I have an insatiable desire for carnal pleasures.", "I believe every villager and towns person is out to get me.", "I can't keep a secret to save my life, or anyone else's.", "My pride will probably lead to my destruction.", "Color blind.", "I am grandiose, I believe everything is about me in the end, no matter how unrelated.", "I'd rather kill someone in their sleep then fight fair.", "I can't resist messing with people who are more powerful than me.", "If there's a plan, I'll forget it. If I don't forget it, I'll ignore it.", "A scandal prevents me from ever going home again. That kind of trouble seems to follow me around.", "I once satirized a noble who still wants my head. It was a mistake that I will likely repeat.", "Despite my best efforts, I am unreliable to my friends.", "The tyrant who rules my land will stop at nothing to see me killed.", "I too often hear veiled insults and threats in every word addressed to me, and I'm quick to anger.", "There's no room for caution in a life lived to the fullest.", "Narrates own thoughts."];

  classAndLevel = '';
  randomClassVariable = getRandomNumber(12);
  randomChance = Math.random();
  clericBuild = '';

  // Function to decide if dexterity is more than strength and return the higher value
  function biggerWeaponStatDecider(dex, str) {
    if (dex > str) {
      return dex;
    } else {
      return str;
    }
  }

  // Function to assign stats randomly
  function assign_stats(stats, classtype) {
    let statsValuesArray = stats;
    statsValuesArray = shuffle(statsValuesArray);
    ///
    strength += statsValuesArray[0];
    dexterity += statsValuesArray[1];
    constitution += statsValuesArray[2];
    intelligence += statsValuesArray[3];
    wisdom += statsValuesArray[4];
    charisma += statsValuesArray[5];
    statTotal = strength + dexterity + intelligence + constitution + wisdom + charisma;
    ///
    // Change the value of the temp hit points section to tell the user what the total stats are, and each individual stat in order.
    document.getElementById("form98_1").value = classtype + "(" + statTotal + "): " + strength + ", " + dexterity + ", " + statsValuesArray[2] + ", " + constitution + ", " + intelligence + ", " + charisma;
  }

  function class_dropdown_generator() {
    arrayOfClass = document.querySelectorAll('input.class_class');
    arrayOfCheckedClass = [];
    // Length of how many are checked
    lengthOfClassArray = arrayOfClass.length;
    // If statement to choose based on the choices given
    for (i = 0; i < lengthOfClassArray; i++) {
      if (arrayOfClass[i].checked) {
        arrayOfCheckedClass.push(arrayOfClass[i].value);
      }
    }
    // Length of how many are checked
    lengthOfCheckedClassArray = arrayOfCheckedClass.length;
    // Equation to randomize based on length
    ClassRandomizerNumber = Math.floor(Math.random() * lengthOfCheckedClassArray);
    // Find Class value
    actualClass = arrayOfCheckedClass[ClassRandomizerNumber];
    return actualClass;
  }

  // Generates class based on user input
  if (document.getElementById('class_random').checked) {
    if (randomClassVariable === 1) {
      classAndLevel = "Barbarian 1";
    } else if (randomClassVariable === 2) {
      classAndLevel = "Bard 1";
    } else if (randomClassVariable === 3) {
      classAndLevel = "Cleric 1";
    } else if (randomClassVariable === 4) {
      classAndLevel = "Druid 1";
    } else if (randomClassVariable === 5) {
      classAndLevel = "Fighter 1";
    } else if (randomClassVariable === 6) {
      classAndLevel = "Monk 1";
    } else if (randomClassVariable === 7) {
      classAndLevel = "Paladin 1";
    } else if (randomClassVariable === 8) {
      classAndLevel = "Ranger 1";
    } else if (randomClassVariable === 9) {
      classAndLevel = "Rogue 1";
    } else if (randomClassVariable === 10) {
      classAndLevel = "Sorcerer 1";
    } else if (randomClassVariable === 11) {
      classAndLevel = "Warlock 1";
    } else if (randomClassVariable === 12) {
      classAndLevel = "Wizard 1";
    }
  } else {
    classAndLevel = class_dropdown_generator() + " 1";
  }

  // Variable that holds the value of just the class, not the level
  className = classAndLevel.split(" ")[0];

  // Code block that assigns the stats to the class that was chosen
  assign_stats(stats, className);

  // Create variables for the name generator to use
  firstNameNumber = Math.floor(Math.random() * 20);
  lastNameNumber = Math.floor(Math.random() * 20);

  // Random number generator assigned to a variable
  number = Math.floor(Math.random() * 9);

  // Code block to read what the user input for the race dropdown box
  if (document.getElementById('race_random').checked) {
    if (number === 0) {
      raceChecker = 0;
      race_generator("Dragonborn");
    } else if (number === 1) {
      raceChecker = 0;
      race_generator("Dwarf");
    } else if (number === 2) {
      raceChecker = 0;
      race_generator("Elf");
    } else if (number === 3) {
      raceChecker = 0;
      race_generator("Gnome");
    } else if (number === 4) {
      raceChecker = 0;
      race_generator("HalfElf");
    } else if (number === 5) {
      raceChecker = 0;
      race_generator("HalfOrc");
    } else if (number === 6) {
      raceChecker = 0;
      race_generator("Halfling");
    } else if (number === 7) {
      raceChecker = 0;
      race_generator("Human");
    } else if (number === 8) {
      raceChecker = 0;
      race_generator("Tiefling");
    };
  } else {
    raceChecker++;
    race_dropdown_generator();
  }

  // Function to minimize code when assigning race based on user-choice
  function race_generator(raceName) {
    raceNameLower = raceName.toLowerCase();
    raceNameLowerString = '_' + raceNameLower.toString();
    finalFirstName = nameGenerator['_races'][raceNameLowerString]['firstName'][firstNameNumber];
    finalLastName = nameGenerator['_races'][raceNameLowerString]['lastName'][lastNameNumber];
    if (raceName === "HalfElf") {
      race = "Half-Elf";
    } else if (raceName === "HalfOrc") {
      race = "Half-Orc";
    } else {
      race = raceName;
    }
  }

  function sub_subrace_picker(race, arrayYouWantToAddTo) {
    randomValue = Math.floor(Math.random() * race.length);
    if (race.length === 0) {

    } else {
      arrayYouWantToAddTo.push(race[randomValue]);
    }
  }

  function subrace_picker(thearray) {
    for (i = 0; i < thearray.length; i++) {
      subraceSplitter = thearray[i];
      if (subraceSplitter === "HalfElf" || subraceSplitter === "HalfOrc" || subraceSplitter === "Tiefling") {
        leftoverArray.push(subraceSplitter);
      } else {
        subraceSplitter1 = subraceSplitter.split(' ', 1).toString();
        subraceSplitter2 = subraceSplitter.split(' ', 2);
        subraceSplitter3 = subraceSplitter2[1];
      }
      if (subraceSplitter3 === "Dragonborn") {
        dragonborn.push(subraceSplitter);
      } else if (subraceSplitter3 === "Dwarf") {
        dwarves.push(subraceSplitter);
      } else if (subraceSplitter3 === "Elf" || subraceSplitter === "Dark Elf (Drow)") {
        elves.push(subraceSplitter);
      } else if (subraceSplitter3 === "Gnome") {
        gnomes.push(subraceSplitter);
      } else if (subraceSplitter3 === "Halfling") {
        halflings.push(subraceSplitter);
      } else if (subraceSplitter1 === "Human") {
        humans.push(subraceSplitter);
      }
    }
    sub_subrace_picker(dragonborn, leftoverArray);
    sub_subrace_picker(dwarves, leftoverArray);
    sub_subrace_picker(elves, leftoverArray);
    sub_subrace_picker(gnomes, leftoverArray);
    sub_subrace_picker(halflings, leftoverArray);
    sub_subrace_picker(humans, leftoverArray);
    return leftoverArray;
  }

  function race_dropdown_generator() {
    // Needs:
    // Function to determine which ones are checked and not
    arrayOfRaces = document.querySelectorAll('input.race_class');
    arrayOfCheckedRaces = [];
    // Length of how many are checked
    lengthOfRaceArray = arrayOfRaces.length;
    // If statement to choose based on the choices given
    for (i = 0; i < lengthOfRaceArray; i++) {
      if (arrayOfRaces[i].checked) {
        arrayOfCheckedRaces.push(arrayOfRaces[i].value);
      }
    }
    arrayOfCheckedRaces = subrace_picker(arrayOfCheckedRaces);

    // Length of how many are checked
    lengthOfCheckedRaceArray = arrayOfCheckedRaces.length;
    // Equation to randomize based on length
    RaceRandomizerNumber = Math.floor(Math.random() * lengthOfCheckedRaceArray);

    // Find race value
    actualRace = arrayOfCheckedRaces[RaceRandomizerNumber];
    if (actualRace === "HalfElf") {
      race = "Half-Elf";
    } else if (actualRace === "HalfOrc") {
      race = "Half-Orc";
    } else {
      race = actualRace;
    }

    raceSplitter = race;

    if (raceSplitter === "HalfElf" || raceSplitter === "HalfOrc" || raceSplitter === "(Drow)") {

    } else {
      raceSplitter1 = raceSplitter.split(' ', 1).toString();
      raceSplitter2 = raceSplitter.split(' ', 2);
      raceSplitter3 = raceSplitter2[1];
    }

    if (raceSplitter3 === undefined) {
      raceNameLower = actualRace.toLowerCase();
      raceNameLowerString = '_' + raceNameLower.toString();
      finalFirstName = nameGenerator['_races'][raceNameLowerString]['firstName'][firstNameNumber];
      finalLastName = nameGenerator['_races'][raceNameLowerString]['lastName'][lastNameNumber];
    } else if (raceSplitter1 === "Human") {
      raceNameLower = raceSplitter1.toLowerCase();
      raceNameLowerString = '_' + raceNameLower.toString();
      finalFirstName = nameGenerator['_races'][raceNameLowerString]['firstName'][firstNameNumber];
      finalLastName = nameGenerator['_races'][raceNameLowerString]['lastName'][lastNameNumber];
    } else if (raceSplitter3 === "(Drow)") {
      raceNameLower = "Elf";
      raceNameLowerString = '_' + raceNameLower.toString();
      finalFirstName = nameGenerator['_races'][raceNameLowerString]['firstName'][firstNameNumber];
      finalLastName = nameGenerator['_races'][raceNameLowerString]['lastName'][lastNameNumber];
    } else {
      raceNameLower = raceSplitter3.toLowerCase();
      raceNameLowerString = '_' + raceNameLower.toString();
      finalFirstName = nameGenerator['_races'][raceNameLowerString]['firstName'][firstNameNumber];
      finalLastName = nameGenerator['_races'][raceNameLowerString]['lastName'][lastNameNumber];
    }

  }

  function background_dropdown_generator() {
    // Needs:
    // Function to determine which ones are checked and not
    arrayOfBackgrounds = document.querySelectorAll('input.background_class');
    // Length of how many are checked
    lengthOfBackgroundArray = arrayOfBackgrounds.length;
    // If statement to choose based on the choices given
    for (i = 0; i < lengthOfBackgroundArray; i++) {
      if (arrayOfBackgrounds[i].checked) {
        arrayOfCheckedBackgrounds.push(arrayOfBackgrounds[i].value);
      }
    }
    // Length of how many are checked
    lengthOfCheckedBackgroundArray = arrayOfCheckedBackgrounds.length;
    // Equation to randomize based on length
    BackgroundRandomizerNumber = Math.floor(Math.random() * lengthOfCheckedBackgroundArray);

    // Find Background value
    actualBackground = arrayOfCheckedBackgrounds[BackgroundRandomizerNumber];
    newBackground1 = actualBackground;
    return newBackground1;
  }

  // Generates background based on user input
  if (document.getElementById('background_random').checked) {
    newBackground1 = nameGenerator.get_new_background();
  } else {
    newBackground1 = background_dropdown_generator();
  }

  // Function to help facilitate easier code for alignment picking
  function alignmentHelper(balance, morality) {
    alignmentChecker = true;
    alignment.push(balance);
    randomByLength(flaws, arrayOfFlaws, "form99_1");
    randomByLength(ideals, arrayOfIdeals, "form100_1");
    alignment.push(morality);
  }

  function alignment_dropdown_generator() {
    // Needs:
    // Function to determine which ones are checked and not
    arrayOfAlignment = document.querySelectorAll('input.alignment_class');
    // Length of how many are checked
    lengthOfAlignmentArray = arrayOfAlignment.length;
    // If statement to choose based on the choices given
    for (i = 0; i < lengthOfAlignmentArray; i++) {
      if (arrayOfAlignment[i].checked) {
        arrayOfCheckedAlignment.push(arrayOfAlignment[i].value);
      }
    }
    // Length of how many are checked
    lengthOfCheckedAlignmentArray = arrayOfCheckedAlignment.length;
    // Equation to randomize based on length
    AlignmentRandomizerNumber = Math.floor(Math.random() * lengthOfCheckedAlignmentArray);
    // Find Alignment value
    actualAlignment = arrayOfCheckedAlignment[AlignmentRandomizerNumber];
    return actualAlignment;
  }

  // Generates alignment based on the users input
  if (document.getElementById('alignment_random').checked) {

  } else {
    balanceAndMorality = alignment_dropdown_generator();
    balance = balanceAndMorality.split(' ', 1).toString();
    morality = balanceAndMorality.split(' ', 2);
    morality = morality[1].toString();
    alignmentHelper(balance, morality);
  }

  // Function to get a random interger between a minimum value and a maximum value
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
  }

  // Function to check if a stat needs a plus or not, usually used to add it to ability modifiers or saving throw modifiers
  function statChecker(stat, id) {
    if (stat <= 0) {
      document.getElementById(id).value = stat;
    } else {
      document.getElementById(id).value = "+" + stat;
    }
  };

  // Function to check if the hit die is less than, equal to, or greater than 0, and add the proper syntax
  function statChecker2(stat, id, dieType) {
    if (stat < 0) {
      document.getElementById(id).value = dieType + stat;
    } else if (stat === 0) {
      document.getElementById(id).value = dieType;
    } else if (stat > 0) {
      document.getElementById(id).value = dieType + "+" + stat;
    }
  };

  // Function to check if the weapon dice are less than, equal to, or greater than 0, and add the proper syntax
  function statChecker3(stat, id, dieType, damagetype) {
    if (stat < 0) {
      document.getElementById(id).value = dieType + stat + " " + damagetype;
    } else if (stat === 0) {
      document.getElementById(id).value = dieType + " " + damagetype;
    } else if (stat > 0) {
      document.getElementById(id).value = dieType + "+" + stat + " " + damagetype;
    }
  };

  // Function to check the weapon dice in the attack & spellcasting section are less than, equal to, or greater than 0, and add the proper syntax
  function statChecker_no_id(stat) {
    if (stat <= 0) {
      return stat;
    } else {
      return "+" + stat;
    }
  };

  // Array of standard languages
  listOfStandardLanguages = ["Dwarvish", "Elvish", "Giant", "Gnomish", "Goblin", "Halfling", "Orc"];

  // Array of exotic languages
  listOfExoticLanguages = ["Abyssal", "Celestial", "Draconic", "Deep Speech", "Infernal", "Primordial", "Sylvan", "Undercommon"];

  // Function to choose a random language, with a small chance for exotic languages
  function random_language() {
    random = Math.random();
    randomStandardLanguageNumber = Math.floor(Math.random() * 7);
    randomExoticLanguageNumber = Math.floor(Math.random() * 8);
    while (listOfStandardLanguages[randomStandardLanguageNumber] === racialLanguage2) {
      randomStandardLanguageNumber = Math.floor(Math.random() * 7);
    }
    if (random >= .1) {
      language = listOfStandardLanguages[randomStandardLanguageNumber];
    } else {
      language = listOfExoticLanguages[randomExoticLanguageNumber];
    }
    return language;
  }

  // Function to choose the right language based on race, with error checking that it doesn't give the same language twice
  function right_language() {
    if (race === "High Elf" || race === "Wood Elf" || race === "Elf") {
      while (firstLanguage === "Elvish" || firstLanguage === extralanguage || extralanguage === racialLanguage2) {
        firstLanguage = random_language();
      }
    } else if (race === "Hill Dwarf" || race === "Mountain Dwarf") {
      while (firstLanguage === "Dwarvish" || firstLanguage === extralanguage || extralanguage === racialLanguage2) {
        firstLanguage = random_language();
      }
    } else if (race === "Lightfoot Halfling" || race === "Stout Halfling") {
      while (firstLanguage === "Halfling" || firstLanguage === extralanguage || extralanguage === racialLanguage2) {
        firstLanguage = random_language();
      }
    } else if (race === "Black Dragonborn" || race === "Blue Dragonborn" || race === "Brass Dragonborn" || race === "Bronze Dragonborn" || race === "Copper Dragonborn" || race === "Gold Dragonborn" || race === "Green Dragonborn" || race === "Red Dragonborn" || race === "Silver Dragonborn" || race === "White Dragonborn") {
      while (firstLanguage === "Draconic" || firstLanguage === extralanguage || extralanguage === racialLanguage2) {
        firstLanguage = random_language();
      }
    } else if (race === "Forest Gnome" || race === "Rock Gnome") {
      while (firstLanguage === "Gnomish" || firstLanguage === extralanguage || extralanguage === racialLanguage2) {
        firstLanguage = random_language();
      }
    } else if (race === "Half-Elf") {
      while (firstLanguage === "Elvish" || firstLanguage === extralanguage || extralanguage === racialLanguage2) {
        firstLanguage = random_language();
      }
    } else if (race === "Orc") {
      while (firstLanguage === "Orc" || firstLanguage === extralanguage || extralanguage === racialLanguage2) {
        firstLanguage = random_language();
      }
    } else if (race === "Tiefling") {
      while (firstLanguage === "Infernal" || firstLanguage === extralanguage || extralanguage === racialLanguage2) {
        firstLanguage = random_language();
      }
    }
    return firstLanguage;
  }

  // Function to choose another language after you already added one via right language
  function right_language2(languagevariable) {
    while (firstLanguage === languagevariable || languagevariable === racialLanguage1 || languagevariable === racialLanguage2 || extralanguage === languagevariable || knowledgeLanguage === languagevariable) {
      languagevariable = random_language();
    }
    return languagevariable;
  }

  // Object that contains armor names and their values
  armor = {
    lightArmor: {
      padded: {
        armorname: "Padded armor",
        armorAC: 11 + dexterityModifier
      },
      leather: {
        armorname: "Leather armor",
        armorAC: 11 + dexterityModifier
      },
      studdedleather: {
        armorname: "Studded leather",
        armorAC: 12 + dexterityModifier
      }
    },
    mediumArmor: {
      hide: {
        armorname: "Hide armor",
        armorAC: 12 + dexterityModifier
      },
      chainshirt: {
        armorname: "Chain shirt",
        armorAC: 13 + dexterityModifier
      },
      scalemail: {
        armorname: "Scale mail",
        armorAC: 14 + dexterityModifier
      },
      breastplate: {
        armorname: "Breastplate",
        armorAC: 14 + dexterityModifier
      },
      halfplate: {
        armorname: "Half plate",
        armorAC: 15 + dexterityModifier
      },
      shield: {
        armorname: "Shield",
        armorAC: 2
      }
    },
    heavyArmor: {
      ringmail: {
        armorname: "Ring mail",
        armorAC: 14
      },
      chainmail: {
        armorname: "Chain mail",
        armorAC: 16
      },
      splint: {
        armorname: "Splint armor",
        armorAC: 17
      },
      plate: {
        armorname: "Plate armor",
        armorAC: 18
      }
    }
  };

  // Array that contains list of simple weapons
  simpleWeapons = ["club", "dagger", "greatclub", "handaxe", "light hammer", "dart", "light crossbow", "mace", "javelin", "quarterstaff", "shortbow", "sickle", "sling", "spear", "unarmed strike"];

  // Array that contains list of martial weapons
  martialWeapons = ["battleaxe", "flail", "glaive", "greataxe", "greatsword", "halberd", "lance", "longsword", "maul", "morningstar", "pike", "rapier", "scimitar", "shortsword", "trident", "war pick", "warhammer", "whip", "blowgun", "hand crossbow", "heavy crossbow", "longbow"];

  function attackSectionWeaponPicker(obj) {
    return obj[Math.floor(Math.random() * Math.floor(obj.length))];
  }

  function attackSectionWeaponAdder(weaponObject, form1, form2, form3) {
    equipment.push(weaponObject.inventoryName);
    document.getElementById(form1).value = weaponObject.weaponName;
    statChecker(dexterityModifier + 2, form2);
    statChecker3(weaponObject.modifier, form3, weaponObject.damageDie, weaponObject.damageType);
  }


  // Function to add weapons to proficiencies section
  function weaponAdder(weapon) {
    for (i = 0; i < simpleWeapons.length; i++) {
      if (simpleWeapons[i] === weapon) {
        for (j = 0; j < profsAndLangs.weaponProficiencies.length; j++) {
          if (profsAndLangs.weaponProficiencies[j] === "simple weapons") {
            return;
          } else if (profsAndLangs.weaponProficiencies[j] === weapon) {
            return;
          }
        }
      }
    }
    for (i = 0; i < martialWeapons.length; i++) {
      if (martialWeapons[i] === weapon) {
        for (j = 0; j < profsAndLangs.weaponProficiencies.length; j++) {
          if (profsAndLangs.weaponProficiencies[j] === "martial weapons") {
            return;
          } else if (profsAndLangs.weaponProficiencies[j] === weapon) {
            return;
          }
        }
      }
    }
    return weapon;
  }

  // Function to check weaponAdder()
  function weaponAdder2(weaponAdder1) {
    if (weaponAdder1 !== undefined) {
      profsAndLangs.weaponProficiencies.push(weaponAdder1);
    }
  }

  // Function to add armor to proficiencies section
  function armorAdder(armorToAddToList) {
    for (i = 0; i < profsAndLangs.armorProficiencies.length; i++) {
      if (profsAndLangs.armorProficiencies[i] === armorToAddToList) {
        return;
      }
    }
    return armorToAddToList;
  }

  // Function to check armorAdder()
  function armorAdder2(armorAdder1) {
    if (armorAdder1 !== undefined) {
      profsAndLangs.armorProficiencies.push(armorAdder1);
    }
  }

  // Function to add tools to proficiencies section
  function toolAdder(tool) {
    for (j = 0; j < profsAndLangs.toolProficiencies.length; j++) {
      if (profsAndLangs.toolProficiencies[j] === tool) {
        return;
      }
    }
    return tool;
  }

  // Function to check toolAdder()
  function toolAdder2(toolAdder1) {
    if (toolAdder1 !== undefined) {
      profsAndLangs.toolProficiencies.push(toolAdder1);
    }
  }

  // Function to add languages to proficiencies section
  function language_adder(language) {
    for (j = 0; j < profsAndLangs.languages.length; j++) {
      if (profsAndLangs.languages[j] === language) {
        return;
      }
    }
    return language;
  }

  // Function to check language_adder()
  function language_adder_2(language_adder1) {
    if (language_adder1 !== undefined) {
      profsAndLangs.languages.push(language_adder1);
    }
  }


  // Variable used to determine ancestry of the Dragonborn race
  ancestry = getRandomNumber(10);

  // Variable used to determine ancestry of the Human race
  ancestryHuman = getRandomNumber(9);

  // Function to add a racial cantrip to the last form in the cantrip section
  function add_race_cantrip(cantrip) {
    document.getElementById("form198_3").value = cantrip;
  }

  // Race and subrace decider
  if (race === "Dragonborn" || raceSplitter3 === "Dragonborn") {
    racialLanguage1 = "Common";
    racialLanguage2 = "Draconic";
    profsAndLangs.languages.push(racialLanguage1);
    profsAndLangs.languages.push(racialLanguage2);
    strength += 2;
    charisma += 1;
    document.getElementById("form87_1").value = "30";
    randomByLength(traits, personalityTraits, "form102_1");
    if (raceChecker === 0) {
      if (ancestry === 1) {
        race = "Black Dragonborn";
      } else if (ancestry === 2) {
        race = "Blue Dragonborn";
      } else if (ancestry === 3) {
        race = "Brass Dragonborn";
      } else if (ancestry === 4) {
        race = "Bronze Dragonborn";
      } else if (ancestry === 5) {
        race = "Copper Dragonborn";
      } else if (ancestry === 6) {
        race = "Gold Dragonborn";
      } else if (ancestry === 7) {
        race = "Green Dragonborn";
      } else if (ancestry === 8) {
        race = "Red Dragonborn";
      } else if (ancestry === 9) {
        race = "Silver Dragonborn";
      } else if (ancestry === 10) {
        race = "White Dragonborn";
      }
    }
  } else if (race === "Dwarf" || raceSplitter3 === "Dwarf") {
    racialLanguage1 = "Common";
    racialLanguage2 = "Dwarvish";
    profsAndLangs.languages.push(racialLanguage1);
    profsAndLangs.languages.push(racialLanguage2);
    constitution += 2;
    randomByLength(traits, personalityTraits, "form102_1");
    features.push("Darkvision: 60 feet.");
    features.push("Dwarven Resilience: You have advantage on saving throws against poison, and you have resistance against poison damage.");
    document.getElementById("form87_1").value = "25";
    if (raceChecker === 0) {
      ancestry = getRandomNumber(2);
      if (ancestry === 1) {
        race = "Hill Dwarf";
      } else {
        race = "Mountain Dwarf";
      }
    }
  } else if (race === "Elf" || raceSplitter3 === "Elf") {
    dexterity += 2;
    document.getElementById("form87_1").value = "30";
    randomByLength(traits, personalityTraits, "form102_1");
    additionalFeatures.push("Fey Ancestry: You have advantage on saving throws against being charmed, and magic can’t put you to sleep.");
    additionalFeatures.push("Trance: Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After Resting in this way, you gain the same benefit that a human does from 8 hours of sleep.");
    if (raceChecker === 0) {
      ancestry = getRandomNumber(3);
      if (ancestry === 1) {
        race = "High Elf";
      } else if (ancestry === 2) {
        race = "Wood Elf";
      } else {
        race = "Dark Elf (Drow)";
      }
    }
  } else if (race === "Halfling" || raceSplitter3 === "Halfling") {
    racialLanguage1 = "Common";
    racialLanguage2 = "Halfling";
    profsAndLangs.languages.push(racialLanguage1);
    profsAndLangs.languages.push(racialLanguage2);
    dexterity += 2;
    document.getElementById("form87_1").value = "25";
    randomByLength(traits, personalityTraits, "form102_1");
    additionalFeatures.push("Halfling Nimbleness: You can move through the space of any creature that is of a size larger than yours.");
    additionalFeatures.push("Lucky: When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.");
    features.push("Brave: You have advantage on saving throws against being frightened.");
    if (raceChecker === 0) {
      ancestry = getRandomNumber(2);
      if (ancestry === 1) {
        race = "Lightfoot Halfling";
      } else {
        race = "Stout Halfling";
      }
    }
  } else if (race === "Human" || raceSplitter1 === "Human") {
    racialLanguage1 = "Common";
    racialLanguage2 = random_language();
    profsAndLangs.languages.push(racialLanguage1);
    profsAndLangs.languages.push(racialLanguage2);
    strength += 1;
    dexterity += 1;
    constitution += 1;
    intelligence += 1;
    wisdom += 1;
    charisma += 1;
    document.getElementById("form87_1").value = "30";
    if (raceChecker === 0) {
      if (ancestryHuman === 1) {
        race = "Human (Calishite)";
        randomByLength(traits, personalityTraits, "form102_1");
      } else if (ancestryHuman === 2) {
        race = "Human (Chondathan)";
        randomByLength(traits, personalityTraits, "form102_1");
      } else if (ancestryHuman === 3) {
        race = "Human (Damaran)";
        randomByLength(traits, personalityTraits, "form102_1");
      } else if (ancestryHuman === 4) {
        race = "Human (Illuskan)";
        randomByLength(traits, personalityTraits, "form102_1");
      } else if (ancestryHuman === 5) {
        race = "Human (Mulan)";
        randomByLength(traits, personalityTraits, "form102_1");
      } else if (ancestryHuman === 6) {
        race = "Human (Rashemi)";
        randomByLength(traits, personalityTraits, "form102_1");
      } else if (ancestryHuman === 7) {
        race = "Human (Shou)";
        randomByLength(traits, personalityTraits, "form102_1");
      } else if (ancestryHuman === 8) {
        race = "Human (Tethyrian)";
        randomByLength(traits, personalityTraits, "form102_1");
      } else if (ancestryHuman === 9) {
        race = "Human (Turami)";
        randomByLength(traits, personalityTraits, "form102_1");
      }
    }
  } else if (race === "Gnome" || raceSplitter3 === "Gnome") {
    racialLanguage1 = "Common";
    racialLanguage2 = "Gnomish";
    profsAndLangs.languages.push(racialLanguage1);
    profsAndLangs.languages.push(racialLanguage2);
    intelligence += 2;
    document.getElementById("form87_1").value = "25";
    randomByLength(traits, personalityTraits, "form102_1");
    features.push("Darkvision: 60 feet.");
    features.push("Gnome Cunning: You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.");
    if (raceChecker === 0) {
      ancestry = getRandomNumber(2);
      if (ancestry === 1) {
        race = "Forest Gnome";
      } else {
        race = "Rock Gnome";
      }
    }
  }

  // Function for trait randomization by length of the array
  function randomByLength(array, personalityVariable, id) {
    personalityVariable.push(array[Math.floor(Math.random() * array.length)]);
    document.getElementById(id).value = personalityVariable.join('\r\n');
  };

  // Function for picking balance alignment
  function generate_balance() {
    if (alignmentChecker === false) {
      randomByLength(flaws, arrayOfFlaws, "form99_1");
      if (Math.random() >= .666666666) {
        alignment.push("Lawful");
      } else if (.666666666 >= Math.random() && Math.random() >= .3333333333) {
        alignment.push("Chaotic");
      } else {
        alignment.push("Neutral");
      }
    }
  }

  // Function for picking morality alignment
  function generate_morality() {
    if (alignmentChecker === false) {
      randomByLength(ideals, arrayOfIdeals, "form100_1");
      if (Math.random() >= .666666666) {
        alignment.push("Good");
      } else if (.666666666 >= Math.random() && Math.random() >= .3333333333) {
        alignment.push("Evil");
      } else {
        alignment.push("Neutral");
      }
    }
  }

  function skill_adder() {
    random = Math.floor(Math.random() * 17);
    if (random === 0 && document.getElementById("form19_1").checked === undefined) {
      addClick(19);
      statChecker(dexterityModifier + 2, "form38_1"); // acrobatics
    } else if (random === 1 && document.getElementById("form8_1").checked === undefined) {
      addClick(8);
      statChecker(wisdomModifier + 2, "form50_1"); // animal handling
    } else if (random === 2 && document.getElementById("form21_1").checked === undefined) {
      addClick(21);
      statChecker(intelligenceModifier + 2, "form40_1"); // arcana
    } else if (random === 3 && document.getElementById("form2_1").checked === undefined) {
      addClick(2);
      statChecker(strengthModifier + 2, "form49_1"); // athletics
    } else if (random === 4 && document.getElementById("form17_1").checked === undefined) {
      addClick(17);
      statChecker(charismaModifier + 2, "form36_1"); // deception
    } else if (random === 5 && document.getElementById("form9_1").checked === undefined) {
      addClick(9);
      statChecker(intelligenceModifier + 2, "form48_1"); // history
    } else if (random === 6 && document.getElementById("form13_1").checked === undefined) {
      addClick(13);
      statChecker(wisdomModifier + 2, "form35_1"); // insight
    } else if (random === 7 && document.getElementById("form24_1").checked === undefined) {
      addClick(24);
      statChecker(charismaModifier + 2, "form44_1"); // intimidation
    } else if (random === 8 && document.getElementById("form14_1").checked === undefined) {
      addClick(14);
      statChecker(intelligenceModifier + 2, "form31_1"); // investigation
    } else if (random === 9 && document.getElementById("form5_1").checked === undefined) {
      addClick(5);
      statChecker(wisdomModifier + 2, "form53_1"); // medicine
    } else if (random === 10 && document.getElementById("form11_1").checked === undefined) {
      addClick(11);
      statChecker(intelligenceModifier + 2, "form37_1"); // nature
    } else if (random === 11 && document.getElementById("form16_1").checked === undefined) {
      addClick(16);
      statChecker(charismaModifier + 2, "form34_1"); // performance
    } else if (random === 12 && document.getElementById("form1_1").checked === undefined) {
      addClick(1);
      statChecker(charismaModifier + 2, "form45_1"); // persuasion
    } else if (random === 13 && document.getElementById("form20_1").checked === undefined) {
      addClick(20);
      statChecker(intelligenceModifier + 2, "form33_1"); // religion
    } else if (random === 14 && document.getElementById("form4_1").checked === undefined) {
      addClick(4);
      statChecker(dexterityModifier + 2, "form46_1"); // sleight of hand
    } else if (random === 15 && document.getElementById("form23_1").checked === undefined) {
      addClick(23);
      statChecker(dexterityModifier + 2, "form32_1"); // stealth
    } else if (random === 16 && document.getElementById("form12_1").checked === undefined) {
      addClick(12);
      statChecker(wisdomModifier + 2, "form47_1"); // survival
    } else if (random === 17 && document.getElementById("form7_1").checked === undefined) {
      addClick(7);
      statChecker(wisdomModifier + 2, "form43_1"); // perception
    } else {
      skill_adder();
    }
  }

  // Racial features adder
  generate_balance();
  generate_morality();
  if (race === "Black Dragonborn") {
    features.push("Draconic Ancestry: Black Dragons.");
    features.push("Damage Resistance: Acid.");
  } else if (race === "Blue Dragonborn") {
    features.push("Draconic Ancestry: Blue Dragons.");
    features.push("Damage Resistance: Lightning.");
  } else if (race === "Brass Dragonborn") {
    features.push("Draconic Ancestry: Brass Dragons.");
    features.push("Damage Resistance: Fire.");
  } else if (race === "Bronze Dragonborn") {
    features.push("Draconic Ancestry: Bronze Dragons.");
    features.push("Damage Resistance: Lightning.");
  } else if (race === "Copper Dragonborn") {
    features.push("Draconic Ancestry: Copper Dragons.");
    features.push("Damage Resistance: Acid.");
  } else if (race === "Gold Dragonborn") {
    features.push("Draconic Ancestry: Gold Dragons.");
    features.push("Damage Resistance: Fire.");
  } else if (race === "Green Dragonborn") {
    features.push("Draconic Ancestry: Green Dragons.");
    features.push("Damage Resistance: Poison.");
  } else if (race === "Red Dragonborn") {
    features.push("Draconic Ancestry: Red Dragons.");
    features.push("Damage Resistance: Fire.");
  } else if (race === "Silver Dragonborn") {
    features.push("Draconic Ancestry: Silver Dragons.");
    features.push("Damage Resistance: Cold.");
  } else if (race === "White Dragonborn") {
    features.push("Draconic Ancestry: White Dragons.");
    features.push("Damage Resistance: Cold.");
  } else if (race === "Hill Dwarf") {
    wisdom += 1;
    features.push("Dwarven Toughness: Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.");
  } else if (race === "Mountain Dwarf") {
    strength += 2;
  } else if (race === "High Elf") {
    features.push("Darkvision: 60 feet.");
    racialLanguage1 = "Common";
    racialLanguage2 = "Elvish";
    extralanguage = random_language();
    profsAndLangs.languages.push(racialLanguage1);
    profsAndLangs.languages.push(racialLanguage2);
    profsAndLangs.languages.push(extralanguage);
    weaponAdder2(weaponAdder("longsword"));
    weaponAdder2(weaponAdder("shortsword"));
    weaponAdder2(weaponAdder("shortbow"));
    weaponAdder2(weaponAdder("longbow"));
    features.push("High Elf Cantrip: You know one cantrip (prestidigitation) from your High Elven heritage, intelligence is your spellcasting ability for it.");
    add_race_cantrip("Prestidigitation");
    intelligence += 1;
  } else if (race === "Wood Elf") {
    features.push("Darkvision: 60 feet.");
    racialLanguage1 = "Common";
    racialLanguage2 = "Elvish";
    profsAndLangs.languages.push(racialLanguage1);
    profsAndLangs.languages.push(racialLanguage2);
    weaponAdder2(weaponAdder("longsword"));
    weaponAdder2(weaponAdder("shortsword"));
    weaponAdder2(weaponAdder("shortbow"));
    weaponAdder2(weaponAdder("longbow"));
    wisdom += 1;
    document.getElementById("form87_1").value = "35";
    features.push("Mask of the Wild: You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.");
  } else if (race === "Dark Elf (Drow)") {
    racialLanguage1 = "Common";
    racialLanguage2 = "Elvish";
    profsAndLangs.languages.push(racialLanguage1);
    profsAndLangs.languages.push(racialLanguage2);
    weaponAdder2(weaponAdder("rapier"));
    weaponAdder2(weaponAdder("shortsword"));
    weaponAdder2(weaponAdder("crossbow"));
    features.push("Drow Cantrip: You know one cantrip (dancing lights) from your High Elven heritage, charisma is your spellcasting ability for it.");
    add_race_cantrip("Dancing Lights");
    charisma += 1;
    features.push("Superior Darkvision: 120 feet.");
    additionalFeatures.push("Sunlight Sensitivity: You have disadvantage on attack rolls and on Wisdom (Perception) checks that rely on sight when you, the target of your attack, or whatever you are trying to perceive is in direct sunlight.");
  } else if (race === "Lightfoot Halfling") {
    charisma += 1;
    features.push("Naturally Stealthy: You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.");
  } else if (race === "Stout Halfling") {
    constitution += 1;
    features.push("Stout Resilience: You have advantage on saving throws against poison, and you have resistance against poison damage.");
  } else if (race === "Forest Gnome") {
    constitution += 1;
    additionalFeatures.push("Speak with Small Beasts: Through sounds and gestures, you can communicate simple ideas with Small or smaller beasts. Forest gnomes love animals and often keep squirrels, badgers, rabbits, moles, woodpeckers, and other creatures as beloved pets.");
    features.push("Natural Illusionist: You know the 'minor illusion' cantrip, intelligence is your spellcasting ability for it.");
    add_race_cantrip("Minor Illusion");
  } else if (race === "Rock Gnome") {
    constitution += 1;
    toolAdder2(toolAdder("tinker's tools"));
    features.push("Artificer’s Lore: Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.");
    additionalFeatures.push("Tinker: Using tinker's tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options:\rClockwork Toy: This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents.\rFire Starter: The device produces a miniature flame, which you can use to light a Candle, torch, or campfire. Using the device requires your action.\rMusic Box: When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song’s end or when it is closed.");
  } else if (race === "Half-Elf") {
    racialLanguage1 = "Common";
    racialLanguage2 = "Elvish";
    extralanguage = random_language();
    profsAndLangs.languages.push(racialLanguage1);
    profsAndLangs.languages.push(racialLanguage2);
    profsAndLangs.languages.push(extralanguage);
    charisma += 2;
    randomByLength(traits, personalityTraits, "form102_1");
    firstNumber = Math.floor(Math.random() * 4);
    secondNumber = Math.floor(Math.random() * 4);
    while (firstNumber === secondNumber) {
      firstNumber = Math.floor(Math.random() * 4);
      secondNumber = Math.floor(Math.random() * 4);
    }
    if (firstNumber === 0) {
      strength += 1;
    } else if (firstNumber === 1) {
      dexterity += 1;
    } else if (firstNumber === 2) {
      constitution += 1;
    } else if (firstNumber === 3) {
      intelligence += 1;
    } else if (firstNumber === 4) {
      wisdom += 1;
    }
    if (secondNumber === 0) {
      strength += 1;
    } else if (secondNumber === 1) {
      dexterity += 1;
    } else if (secondNumber === 2) {
      constitution += 1;
    } else if (secondNumber === 3) {
      intelligence += 1;
    } else if (secondNumber === 4) {
      wisdom += 1;
    }
    document.getElementById("form87_1").value = "30";
    features.push("Darkvision: 60 feet.");
    features.push("Fey Ancestry: You have advantage on saving throws against being charmed, and magic can’t put you to sleep.");;
  } else if (race === "Half-Orc") {
    racialLanguage1 = "Common";
    racialLanguage2 = "Orc";
    profsAndLangs.languages.push(racialLanguage1);
    profsAndLangs.languages.push(racialLanguage2);
    strength += 2;
    constitution += 1;
    document.getElementById("form87_1").value = "30";
    randomByLength(traits, personalityTraits, "form102_1");
    features.push("Darkvision: 60 feet.");
    features.push("Relentless Endurance: When you are reduced to 0 hit points but not killed outright, you can drop to 1 hitpoint instead. You can't use this feature again until you finish a long rest.");
    additionalFeatures.push("Savage Attacks: When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.");
  } else if (race === "Tiefling") {
    racialLanguage1 = "Common";
    racialLanguage2 = "Infernal";
    profsAndLangs.languages.push(racialLanguage1);
    profsAndLangs.languages.push(racialLanguage2);
    features.push("Infernal Legacy: You know the thaumaturgy cantrip, charisma is your spellcasting ability for it.");
    add_race_cantrip("Thaumaturgy");
    charisma += 2;
    intelligence += 1;
    document.getElementById("form87_1").value = "30";
    randomByLength(traits, personalityTraits, "form102_1");
    features.push("Darkvision: 60 feet.");
    features.push("Hellish Resistance. You have resistance to fire damage.");
  };

  // Creating modifiers for each stat
  strengthModifier = stat_modifier_generator(strength);
  dexterityModifier = stat_modifier_generator(dexterity);
  constitutionModifier = stat_modifier_generator(constitution);
  intelligenceModifier = stat_modifier_generator(intelligence);
  wisdomModifier = stat_modifier_generator(wisdom);
  charismaModifier = stat_modifier_generator(charisma);
  hitDiceModifier = stat_modifier_generator(constitution);

  simpleWeaponsArray = [
    club = {
      weaponName: "Club",
      inventoryName: "Club",
      damageDie: "1d4",
      damageType: "B",
      modifier: strengthModifier
    },
    dagger = {
      weaponName: "Dagger",
      inventoryName: "Dagger",
      damageDie: "1d4",
      damageType: "P",
      modifier: biggerWeaponStatDecider(dexterityModifier, strengthModifier)
    },
    greatclub = {
      weaponName: "Greatclub",
      inventoryName: "Greatclub",
      damageDie: "1d8",
      damageType: "B",
      modifier: biggerWeaponStatDecider(dexterityModifier, strengthModifier)
    },
    handaxe = {
      weaponName: "Handaxe",
      inventoryName: "Handaxe",
      damageDie: "1d6",
      damageType: "S",
      modifier: strengthModifier
    },
    javelin = {
      weaponName: "Javelin",
      inventoryName: "5 Javelins",
      damageDie: "1d6",
      damageType: "P",
      modifier: strengthModifier
    },
    lighthammer = {
      weaponName: "L Hammer",
      inventoryName: "Light Hammer",
      damageDie: "1d4",
      damageType: "B",
      modifier: strengthModifier
    },
    mace = {
      weaponName: "Mace",
      inventoryName: "Mace",
      damageDie: "1d6",
      damageType: "B",
      modifier: strengthModifier
    },
    quarterstaff = {
      weaponName: "Quarterstaff",
      inventoryName: "Quarterstaff",
      damageDie: "1d6",
      damageType: "B",
      modifier: strengthModifier
    },
    sickle = {
      weaponName: "Sickle",
      inventoryName: "Sickle",
      damageDie: "1d4",
      damageType: "S",
      modifier: strengthModifier
    },
    spear = {
      weaponName: "Spear",
      inventoryName: "Spear",
      damageDie: "1d6",
      damageType: "P",
      modifier: strengthModifier
    },
    lightcrossbow = {
      weaponName: "Light CB",
      inventoryName: "Light crossbow w/ quiver of 20 bolts",
      damageDie: "1d8",
      damageType: "P",
      modifier: dexterityModifier
    },
    dart = {
      weaponName: "Dart",
      inventoryName: "Ten darts",
      damageDie: "1d4",
      damageType: "P",
      modifier: biggerWeaponStatDecider(dexterityModifier, strengthModifier)
    },
    shortbow = {
      weaponName: "Shortbow",
      inventoryName: "Shortbow w/ quiver of 20 arrows",
      damageDie: "1d6",
      damageType: "P",
      modifier: dexterityModifier
    },
    sling = {
      weaponName: "Sling",
      inventoryName: "Sling w/ bag of 20 rocks",
      damageDie: "1d4",
      damageType: "B",
      modifier: dexterityModifier
    }
  ];

  martialWeaponsArray = [
    battleaxe = {
      weaponName: "Battleaxe",
      inventoryName: "Battleaxe",
      damageDie: "1d8",
      damageType: "S",
      modifier: strengthModifier
    },
    flail = {
      weaponName: "Flail",
      inventoryName: "Flail",
      damageDie: "1d8",
      damageType: "B",
      modifier: strengthModifier
    },
    glaive = {
      weaponName: "Glaive",
      inventoryName: "Glaive",
      damageDie: "1d10",
      damageType: "S",
      modifier: strengthModifier
    },
    greataxe = {
      weaponName: "Greataxe",
      inventoryName: "Greataxe",
      damageDie: "1d12",
      damageType: "S",
      modifier: strengthModifier
    },
    greatsword = {
      weaponName: "Greatsword",
      inventoryName: "Greatsword",
      damageDie: "2d6",
      damageType: "S",
      modifier: strengthModifier
    },
    halberd = {
      weaponName: "Halberd",
      inventoryName: "Halberd",
      damageDie: "1d10",
      damageType: "P",
      modifier: strengthModifier
    },
    lance = {
      weaponName: "Lance",
      inventoryName: "Lance",
      damageDie: "1d10",
      damageType: "P",
      modifier: strengthModifier
    },
    longsword = {
      weaponName: "Longsword",
      inventoryName: "Longsword",
      damageDie: "1d8",
      damageType: "S",
      modifier: strengthModifier
    },
    maul = {
      weaponName: "Maul",
      inventoryName: "Maul",
      damageDie: "2d6",
      damageType: "B",
      modifier: strengthModifier
    },
    morningstar = {
      weaponName: "Morningstar",
      inventoryName: "Morningstar",
      damageDie: "1d8",
      damageType: "P",
      modifier: strengthModifier
    },
    pike = {
      weaponName: "Pike",
      inventoryName: "Pike",
      damageDie: "1d10",
      damageType: "P",
      modifier: strengthModifier
    },
    rapier = {
      weaponName: "Rapier",
      inventoryName: "Rapier",
      damageDie: "1d8",
      damageType: "P",
      modifier: biggerWeaponStatDecider(dexterityModifier, strengthModifier)
    },
    scimitar = {
      weaponName: "Scimitar",
      inventoryName: "Scimitar",
      damageDie: "1d6",
      damageType: "S",
      modifier: biggerWeaponStatDecider(dexterityModifier, strengthModifier)
    },
    shortsword = {
      weaponName: "Shortsword",
      inventoryName: "Shortsword",
      damageDie: "1d6",
      damageType: "S",
      modifier: biggerWeaponStatDecider(dexterityModifier, strengthModifier)
    },
    trident = {
      weaponName: "Trident",
      inventoryName: "Trident",
      damageDie: "1d6",
      damageType: "P",
      modifier: strengthModifier
    },
    warpick = {
      weaponName: "War Pick",
      inventoryName: "War Pick",
      damageDie: "1d8",
      damageType: "P",
      modifier: strengthModifier
    },
    warhammer = {
      weaponName: "Warhammer",
      inventoryName: "Warhammer",
      damageDie: "1d8",
      damageType: "B",
      modifier: strengthModifier
    },
    whip = {
      weaponName: "Whip",
      inventoryName: "Whip",
      damageDie: "1d4",
      damageType: "S",
      modifier: biggerWeaponStatDecider(dexterityModifier, strengthModifier)
    },
    blowgun = {
      weaponName: "Blowgun",
      inventoryName: "Blowgun w/ 50 needles",
      damageDie: "1",
      damageType: "P",
      modifier: dexterityModifier
    },
    handcrossbow = {
      weaponName: "Hand CB",
      inventoryName: "Hand crossbow w/ quiver of 20 bolts",
      damageDie: "1d6",
      damageType: "P",
      modifier: dexterityModifier
    },
    heavycrossbow = {
      weaponName: "Heavy CB",
      inventoryName: "Heavy crossbow w/ quiver of 20 bolts",
      damageDie: "1d10",
      damageType: "P",
      modifier: dexterityModifier
    },
    longbow = {
      weaponName: "Longbow",
      inventoryName: "Longbow w/ quiver of 20 arrows",
      damageDie: "1d10",
      damageType: "P",
      modifier: dexterityModifier
    },
    net = {
      weaponName: "Net",
      inventoryName: "Net",
      damageDie: "",
      damageType: "",
      modifier: biggerWeaponStatDecider(dexterityModifier, strengthModifier)
    }
  ];

  // Filling in all skills before proficiencies are put in
  statChecker(dexterityModifier, "form38_1"); // acrobatics
  statChecker(wisdomModifier, "form50_1"); // animal handling
  statChecker(intelligenceModifier, "form40_1"); // arcana
  statChecker(strengthModifier, "form49_1"); // athletics
  statChecker(charismaModifier, "form36_1"); // deception
  statChecker(intelligenceModifier, "form48_1"); // history
  statChecker(wisdomModifier, "form35_1"); // insight
  statChecker(charismaModifier, "form44_1"); // intimidation
  statChecker(intelligenceModifier, "form31_1"); // investigation
  statChecker(wisdomModifier, "form53_1"); // medicine
  statChecker(intelligenceModifier, "form37_1"); // nature
  statChecker(wisdomModifier, "form43_1"); // perception
  statChecker(charismaModifier, "form34_1"); // performance
  statChecker(charismaModifier, "form45_1"); // persuasion
  statChecker(intelligenceModifier, "form33_1"); // religion
  statChecker(dexterityModifier, "form46_1"); // sleight of hand
  statChecker(dexterityModifier, "form32_1"); // stealth
  statChecker(wisdomModifier, "form47_1"); // survival

  // Block that determines the right saving throws by class
  if (classAndLevel === "Barbarian 1" || classAndLevel === "Fighter 1" || classAndLevel === "Monk 1" || classAndLevel === "Ranger 1") {
    statChecker(strengthModifier + 2, "form42_1");
    addClick(15);
  } else {
    statChecker(strengthModifier, "form42_1");
  }
  if (classAndLevel === "Bard 1" || classAndLevel === "Rogue 1" || classAndLevel === "Ranger 1" || classAndLevel === "Monk 1") {
    statChecker(dexterityModifier + 2, "form54_1");
    addClick(18);
  } else {
    statChecker(dexterityModifier, "form54_1");
  }
  if (classAndLevel === "Barbarian 1" || classAndLevel === "Fighter 1" || classAndLevel === "Sorcerer 1") {
    statChecker(constitutionModifier + 2, "form41_1");
    addClick(22);
  } else {
    statChecker(constitutionModifier, "form41_1");
  }
  if (classAndLevel === "Druid 1" || classAndLevel === "Rogue 1" || classAndLevel === "Wizard 1") {
    statChecker(intelligenceModifier + 2, "form52_1");
    addClick(6);
  } else {
    statChecker(intelligenceModifier, "form52_1");
  }
  if (classAndLevel === "Druid 1" || classAndLevel === "Cleric 1" || classAndLevel === "Wizard 1" || classAndLevel === "Paladin 1" || classAndLevel === "Warlock 1") {
    statChecker(wisdomModifier + 2, "form39_1");
    addClick(10);
  } else {
    statChecker(wisdomModifier, "form39_1");
  }
  if (classAndLevel === "Bard 1" || classAndLevel === "Cleric 1" || classAndLevel === "Sorcerer 1" || classAndLevel === "Paladin 1" || classAndLevel === "Warlock 1") {
    statChecker(charismaModifier + 2, "form51_1");
    addClick(3);
  } else {
    statChecker(charismaModifier, "form51_1");
  }

  // Block that determines the right hit die by class
  if (classAndLevel === "Barbarian 1") {
    statChecker2(constitutionModifier, "form89_1", "1d12");
    hp = 12 + constitutionModifier;
  } else if (classAndLevel === "Fighter 1" || classAndLevel === "Paladin 1" || classAndLevel === "Ranger 1") {
    statChecker2(constitutionModifier, "form89_1", "1d10");
    hp = 10 + constitutionModifier;
  } else if (classAndLevel === "Bard 1" || classAndLevel === "Cleric 1" || classAndLevel === "Druid 1" || classAndLevel === "Monk 1" || classAndLevel === "Rogue 1" || classAndLevel === "Warlock 1") {
    statChecker2(constitutionModifier, "form89_1", "1d8");
    hp = 8 + constitutionModifier;
  } else if (classAndLevel === "Wizard 1" || classAndLevel === "Sorcerer 1") {
    statChecker2(constitutionModifier, "form89_1", "1d6");
    hp = 6 + constitutionModifier;
  }

  // Block that adds proficiency in perception if you are an Elf
  if (race === "High Elf" || race === "Dark Elf (Drow)" || race === "Wood Elf") {
    addClick(7);
    statChecker(wisdomModifier + 2, "form43_1");
  }

  // Block that adds proficiency in intimidation if you are a Half-Orc
  if (race === "Half-Orc") {
    addClick(24);
    statChecker(charismaModifier + 2, "form44_1");
  }

  // Function to choose a random musical instrument
  function randomMusicalInstrument() {
    random = getRandomNumber(10);
    if (random === 1) {
      return "Bagpipes";
    } else if (random === 2) {
      return "Drum";
    } else if (random === 3) {
      return "Dulcimer";
    } else if (random === 4) {
      return "Flute";
    } else if (random === 5) {
      return "Lute";
    } else if (random === 6) {
      return "Lyre";
    } else if (random === 7) {
      return "Horn";
    } else if (random === 8) {
      return "Pan Flute";
    } else if (random === 9) {
      return "Shawm";
    } else if (random === 10) {
      return "Viola";
    }
  }

  // Function to determine what equipment/spells/features you should have based on your class
  function equipmentChooser(classAndLevel) {
    random = Math.random();
    random2 = Math.random();
    random3 = Math.random();
    random4 = Math.random();
    random5 = Math.random();
    random6 = Math.random();
    if (classAndLevel === "Barbarian 1") {
      armorClass += 10 + dexterityModifier + constitutionModifier; // armor class
      equipment.push("Four javelins");
      equipment.push("Explorer's pack");
      features.push("Rage (2/lr): On your turn, you can enter a rage as a Bonus Action. While raging, you gain the following benefits if you aren't wearing heavy armor: You have advantage on Strength Checks and Strength saving throws. When you make a melee weapon Attack using Strength, you gain a +2 bonus to the damage roll. This bonus increases as you level. You have Resistance to bludgeoning, piercing, and slashing damage. If you are able to cast Spells, you can't cast them or concentrate on them while raging. See player's handbook for more details.");
      features.push("Unarmored Defense: While you are not wearing any armor, your armor class equals 10 + your dexterity modifier + your constitution modifier, usable with shield..");
      spellcastingSection.push("Rage (2/lr): Use your bonus action to rage and gain +2 to melee damage rolls using strength, and gain defensive benefits outlined in the features section.");
      if (random > .5) {
        attackSectionWeaponAdder(attackSectionWeaponPicker(martialWeaponsArray), firstWeaponFirstSectionId, firstWeaponSecondSectionId, firstWeaponThirdSectionId);
      } else {
        equipment.push("Greataxe");
        document.getElementById(firstWeaponFirstSectionId).value = "Greataxe"; // 1st weapon 1st section
        statChecker(strengthModifier + 2, firstWeaponSecondSectionId); // 1st weapon 2nd section
        statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d12", "S"); // 1st weapon 3rd section
      }
      if (random2 > .5) {
        attackSectionWeaponAdder(attackSectionWeaponPicker(simpleWeaponsArray), secondWeaponFirstSectionId, secondWeaponSecondSectionId, secondWeaponThirdSectionId);
      } else {
        equipment.push("Two handaxes");
        document.getElementById(secondWeaponFirstSectionId).value = "Handaxe"; // 2nd weapon 1st section
        statChecker(strengthModifier + 2, secondWeaponSecondSectionId); // 2nd weapon 2nd section
        statChecker3(strengthModifier, secondWeaponThirdSectionId, "1d6", "S"); // 2nd weapon 3rd section
      }
    } else if (classAndLevel === "Bard 1") {
      if (charismaModifier < 1) {
        bardModifier = 1;
      } else {
        bardModifier = charismaModifier;
      }
      features.push("Bardic Inspiration (" + bardModifier + "/lr): Use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes.");
      spellcastingSection.push("Bardic Inspiration (" + bardModifier + "/lr): Use a bonus action to give another creature an inspiration die of 1d6.");
      musicalinstrument = randomMusicalInstrument();
      toolAdder2(toolAdder(musicalinstrument.toLowerCase()));
      equipment.push(musicalinstrument + " - Focus");
      musicalinstrument2 = randomMusicalInstrument();
      toolAdder2(toolAdder(musicalinstrument2.toLowerCase()));
      if (random > .5) {
        toolAdder2(toolAdder("voice"));
      } else {
        musicalinstrument3 = randomMusicalInstrument();
        toolAdder2(toolAdder(musicalinstrument3.toLowerCase()));
      }
      equipment.push("Leather armor");
      equipment.push("Dagger");
      document.getElementById(secondWeaponFirstSectionId).value = "Dagger"; // 2nd weapon 1st section
      if (random2 > .500) {
        statChecker(biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2, secondWeaponSecondSectionId); // 2nd weapon 2nd section
        statChecker3(biggerWeaponStatDecider(dexterityModifier, strengthModifier), secondWeaponThirdSectionId, "1d4", "P"); // 2nd weapon 3rd section
        equipment.push("Longsword");
        document.getElementById(firstWeaponFirstSectionId).value = "Longsword"; // 1st weapon 1st section
        statChecker(strengthModifier + 2, firstWeaponSecondSectionId); // 1st weapon 2nd section
        statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d8", "S"); // 1st weapon 3rd section
      } else {
        equipment.push("Rapier");
        document.getElementById(firstWeaponFirstSectionId).value = "Rapier"; // 1st weapon 1st section
        statChecker(biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2, firstWeaponSecondSectionId); // 1st weapon 2nd section
        statChecker3(biggerWeaponStatDecider(dexterityModifier, strengthModifier), firstWeaponThirdSectionId, "1d8", "P"); // 1st weapon 3rd section
        statChecker(biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2, secondWeaponSecondSectionId); // 2nd weapon 2nd section
        statChecker3(biggerWeaponStatDecider(dexterityModifier, strengthModifier), secondWeaponThirdSectionId, "1d4", "P"); // 2nd weapon 3rd section
      }
      if (random3 > .5) {
        equipment.push("Diplomat's pack");
      } else {
        equipment.push("Entertainer's pack");
      }
    } else if (classAndLevel === "Cleric 1") {
      if (random > .5) {
        equipment.push("Explorer's pack");
      } else {
        equipment.push("Priest's pack");
      }
      equipment.push("Shield");
      equipment.push("A holy symbol");
      if (random2 > .889) {
        features.push("Cleric Domain: Life.");
        armorAdder2(armorAdder("heavy armor"));
        equipment.push("Mace");
        document.getElementById(firstWeaponFirstSectionId).value = "Mace"; // 1st weapon 1st section
        statChecker(strengthModifier + 2, firstWeaponSecondSectionId); // 1st weapon 2nd section
        statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6", "B"); // 1st weapon 3rd section
        features.push("Disciple of Life: Whenever you use a spell of 1st level or higher to restore hit points, the target regains additional hit points equal to 2 + the spell's level.");
        document.getElementById("form193_3").value = "Bless";
        document.getElementById("form159_3").value = "Cure Wounds";
        if (random4 > .666) {
          equipment.push("Scale mail");
        } else if (random4 > .333) {
          equipment.push("Leather armor");
        } else {
          equipment.push("Chain mail");
        }
      } else if (random2 > .778) {
        features.push("Cleric Domain: War.");
        armorAdder2(armorAdder("heavy armor"));
        weaponAdder2(weaponAdder("martial weapons"));
        if (random3 > .5) {
          equipment.push("Mace");
          document.getElementById(firstWeaponFirstSectionId).value = "Mace"; // 1st weapon 1st section
          statChecker(strengthModifier + 2, firstWeaponSecondSectionId); // 1st weapon 2nd section
          statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6", "B"); // 1st weapon 3rd section
        } else {
          equipment.push("Warhammer");
          document.getElementById(firstWeaponFirstSectionId).value = "Warhammer"; // 1st weapon 1st section
          statChecker(strengthModifier + 2, firstWeaponSecondSectionId); // 1st weapon 2nd section
          statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d8", "B"); // 1st weapon 3rd section
        }
        document.getElementById("form193_3").value = "Divine Favor";
        document.getElementById("form159_3").value = "Shield of Faith";
        if (wisdomModifier <= 0) {
          lightGo = 1;
        } else {
          lightGo = wisdomModifier;
        }
        features.push("War Priest (" + lightGo + "/lr): When you use the Attack action, you can make one weapon attack as a bonus action. Can be used = to WIS modifier (minimum of once) per long rest.");
        if (random4 > .666) {
          equipment.push("Scale mail");
        } else if (random4 > .333) {
          equipment.push("Leather armor");
        } else {
          equipment.push("Chain mail");
        }
      } else if (random2 > .668) {
        features.push("Cleric Domain: Nature.");
        armorAdder2(armorAdder("heavy armor"));
        equipment.push("Mace");
        document.getElementById(firstWeaponFirstSectionId).value = "Mace"; // 1st weapon 1st section
        statChecker(strengthModifier + 2, firstWeaponSecondSectionId); // 1st weapon 2nd section
        statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6", "B"); // 1st weapon 3rd section
        if (random4 > .750 && document.getElementById("form8_1").checked === undefined) {
          addClick(8);
          statChecker(wisdomModifier + 2, "form50_1"); // animal handling
        } else if (random4 > .500 && document.getElementById("form11_1").checked === undefined) {
          addClick(11);
          statChecker(intelligenceModifier + 2, "form37_1"); // nature
        } else if (random4 > .250 && document.getElementById("form12_1").checked === undefined) {
          addClick(12);
          statChecker(wisdomModifier + 2, "form47_1"); // survival
        } else {
          addClick(11);
          statChecker(intelligenceModifier + 2, "form37_1"); // nature
        }
        if (random5 > .666) {
          equipment.push("Scale mail");
        } else if (random5 > .333) {
          equipment.push("Leather armor");
        } else {
          equipment.push("Chain mail");
        }
      } else if (random2 > .556) {
        features.push("Cleric Domain: Trickery.");
        features.push("Blessing of the Trickster: You can use your action to touch a willing creature other than yourself to give it advantage on Stealth checks. This blessing lasts for 1 hour or until you use this feature again.");
        equipment.push("Mace");
        document.getElementById(firstWeaponFirstSectionId).value = "Mace"; // 1st weapon 1st section
        statChecker(strengthModifier + 2, firstWeaponSecondSectionId); // 1st weapon 2nd section
        statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6", "B"); // 1st weapon 3rd section
        if (random4 > .500) {
          equipment.push("Scale mail");
        } else {
          equipment.push("Leather armor");
        }
      } else if (random2 > .445) {
        features.push("Cleric Domain: Tempest.");
        armorAdder2(armorAdder("heavy armor"));
        weaponAdder2(weaponAdder("martial weapons"));
        if (random3 > .5) {
          equipment.push("Mace");
          document.getElementById(firstWeaponFirstSectionId).value = "Mace"; // 1st weapon 1st section
          statChecker(strengthModifier + 2, firstWeaponSecondSectionId); // 1st weapon 2nd section
          statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6", "B"); // 1st weapon 3rd section
        } else {
          equipment.push("Warhammer");
          document.getElementById(firstWeaponFirstSectionId).value = "Warhammer"; // 1st weapon 1st section
          statChecker(strengthModifier + 2, firstWeaponSecondSectionId); // 1st weapon 2nd section
          statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d8", "B"); // 1st weapon 3rd section
        }
        document.getElementById("form193_3").value = "Fog Cloud";
        document.getElementById("form159_3").value = "Thunderwave";
        if (wisdomModifier <= 0) {
          lightGo = 1;
        } else {
          lightGo = wisdomModifier;
        }
        features.push("Wrath of the Storm (" + lightGo + "/lr): When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a DEX saving throw. The creature takes 2d8 lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a successful one. Can be used = to WIS modifier (minimum of once) per long rest.");
        if (random4 > .666) {
          equipment.push("Scale mail");
        } else if (random4 > .333) {
          equipment.push("Leather armor");
        } else {
          equipment.push("Chain mail");
        }
      } else if (random2 > .334) {
        features.push("Cleric Domain: Death.");
        weaponAdder2(weaponAdder("martial weapons"));
        if (random3 > .5) {
          equipment.push("Mace");
          document.getElementById(firstWeaponFirstSectionId).value = "Mace"; // 1st weapon 1st section
          statChecker(strengthModifier + 2, firstWeaponSecondSectionId); // 1st weapon 2nd section
          statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6", "B"); // 1st weapon 3rd section
        } else {
          equipment.push("Warhammer");
          document.getElementById(firstWeaponFirstSectionId).value = "Warhammer"; // 1st weapon 1st section
          statChecker(strengthModifier + 2, firstWeaponSecondSectionId); // 1st weapon 2nd section
          statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d8", "B"); // 1st weapon 3rd section
        }
        features.push("Reaper: You learn one necromancy cantrip, and when you cast a necromancy cantrip that normally targets only one creature, the spell instead targets two creatures within range and within 5 feet of each other.");
        if (random4 > .500) {
          equipment.push("Scale mail");
        } else {
          equipment.push("Leather armor");
        }
        if (random5 > .5) {
          document.getElementById("form202_3").value = "Chill Touch";
        } else {
          document.getElementById("form202_3").value = "Spare The Dying";
        }
      } else if (random2 > .223) {
        features.push("Cleric Domain: Knowledge.");
        knowledgeLanguage = random_language();
        knowledgeLanguage = right_language2(knowledgeLanguage);
        profsAndLangs.languages.push(knowledgeLanguage);
        knowledgeLanguage2 = random_language();
        knowledgeLanguage2 = right_language2(knowledgeLanguage2);
        profsAndLangs.languages.push(knowledgeLanguage2);
        document.getElementById("form193_3").value = "Command";
        document.getElementById("form159_3").value = "Identify";
        equipment.push("Mace");
        document.getElementById(firstWeaponFirstSectionId).value = "Mace"; // 1st weapon 1st section
        statChecker(strengthModifier + 2, firstWeaponSecondSectionId); // 1st weapon 2nd section
        statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6", "B"); // 1st weapon 3rd section
        for (i = 0; i < 2; i++) {
          if (random5 > .5 && document.getElementById("form20_1").checked === undefined) {
            addClick(20);
            statChecker(intelligenceModifier + 4, "form33_1"); // religion
            features.push("Knowledge Double Proficiency: Religion.");
          } else if (random5 < .5 && document.getElementById("form9_1").checked === undefined) {
            addClick(9);
            statChecker(intelligenceModifier + 4, "form48_1"); // history
            features.push("Knowledge Double Proficiency: History.");
          } else if (random4 > .5 && document.getElementById("form21_1").checked === undefined) {
            addClick(21);
            statChecker(intelligenceModifier + 4, "form40_1"); // arcana
            features.push("Knowledge Double Proficiency: Arcana.");
          } else if (random4 < .5 && document.getElementById("form11_1").checked === undefined) {
            addClick(11);
            statChecker(intelligenceModifier + 4, "form37_1"); // nature
            features.push("Knowledge Double Proficiency: Nature.");
          } else {
            addClick(11);
            statChecker(intelligenceModifier + 4, "form37_1"); // nature
            features.push("Knowledge Double Proficiency: Nature.");
          }
        }
        if (random4 > .500) {
          equipment.push("Scale mail");
        } else {
          equipment.push("Leather armor");
        }
      } else if (random2 > .112) {
        features.push("Cleric Domain: Light.");
        document.getElementById("form193_3").value = "Burning Hands";
        document.getElementById("form159_3").value = "Faerie Fire";
        equipment.push("Mace");
        document.getElementById(firstWeaponFirstSectionId).value = "Mace"; // 1st weapon 1st section
        statChecker(strengthModifier + 2, firstWeaponSecondSectionId); // 1st weapon 2nd section
        statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6", "B"); // 1st weapon 3rd section
        if (wisdomModifier <= 0) {
          lightGo = 1;
        } else {
          lightGo = wisdomModifier;
        }
        features.push("Warding Flare (" + lightGo + "/lr): When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll causing light to flare before the attacker before it hits or misses. An attacker can't be blinded is immune to this feature. You can use this equal to your WIS modifier (minimum of once) per long rest.");
        if (random4 > .500) {
          equipment.push("Scale mail");
        } else {
          equipment.push("Leather armor");
        }
      } else {
        features.push("Cleric Domain: Arcana.");
        document.getElementById("form193_3").value = "Detect Magic";
        document.getElementById("form159_3").value = "Magic Missile";
        equipment.push("Mace");
        document.getElementById(firstWeaponFirstSectionId).value = "Mace"; // 1st weapon 1st section
        statChecker(strengthModifier + 2, firstWeaponSecondSectionId); // 1st weapon 2nd section
        statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6", "B"); // 1st weapon 3rd section
        addClick(21);
        statChecker(intelligenceModifier + 4, "form40_1"); // arcana
        if (random4 > .500) {
          equipment.push("Scale mail");
        } else {
          equipment.push("Leather armor");
        }
      }
      if (random6 > .5) {
        equipment.push("Light crossbow w/ quiver of 20 bolts");
        document.getElementById(secondWeaponFirstSectionId).value = "Light CB"; // 2nd weapon 1st section
        statChecker(dexterityModifier + 2, secondWeaponSecondSectionId); // 2nd weapon 2nd section
        statChecker3(dexterityModifier, secondWeaponThirdSectionId, "1d8", "P"); // 2nd weapon 3rd section
      } else {
        attackSectionWeaponAdder(attackSectionWeaponPicker(simpleWeaponsArray), secondWeaponFirstSectionId, secondWeaponSecondSectionId, secondWeaponThirdSectionId);
        if (document.getElementById(secondWeaponFirstSectionId).value === document.getElementById(firstWeaponFirstSectionId).value) {
          equipment.pop();
          equipment.pop();
          equipment.push("Two " + document.getElementById(firstWeaponFirstSectionId).value);
          document.getElementById(secondWeaponFirstSectionId).value = "";
          document.getElementById(secondWeaponSecondSectionId).value = "";
          document.getElementById(secondWeaponThirdSectionId).value = "";
        }
      }
    } else if (classAndLevel === "Druid 1") {
      toolAdder2(toolAdder("herbalism kit"));
      profsAndLangs.languages.push("Druidic");
      features.push("Druidic: You know the language Druidic, you can see hidden messages of druids and speak the language. Those who don't know Druidic can see the message with a succesful DC 15 Wisdom check, but cannot decipher it.");
      equipment.push("Leather armor");
      equipment.push("Explorer's pack");
      if (random > .5) {
        equipment.push("Wooden shield");
      } else {
        equipment.push("Shortbow w/ quiver of 20 arrows");
        document.getElementById(secondWeaponFirstSectionId).value = "Shortbow"; // 2nd weapon 1st section
        statChecker(dexterityModifier + 2, secondWeaponSecondSectionId); // 2nd weapon 2nd section
        statChecker3(dexterityModifier, secondWeaponThirdSectionId, "1d6", "P"); // 2nd weapon 3rd section
      }
      if (random2 > .8) {
        equipment.push("Quarterstaff");
        document.getElementById(firstWeaponFirstSectionId).value = "Quarterstaff"; // 1st weapon 1st section
        statChecker(strengthModifier + 2, firstWeaponSecondSectionId); // 1st weapon 2nd section
        statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6/10", "B"); // 1st weapon 3rd section
        equipment.push("Petrified bear heart - Focus");
      } else if (random2 > .6) {
        equipment.push("Scimitar");
        document.getElementById(firstWeaponFirstSectionId).value = "Scimitar"; // 1st weapon 1st section
        statChecker(biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2, firstWeaponSecondSectionId); // 1st weapon 2nd section
        statChecker3(biggerWeaponStatDecider(dexterityModifier, strengthModifier), firstWeaponThirdSectionId, "1d6", "S"); // 1st weapon 3rd section
        equipment.push("Yew branch - Focus");
      } else if (random2 > .4) {
        equipment.push("Spear");
        document.getElementById(firstWeaponFirstSectionId).value = "Spear"; // 1st weapon 1st section
        statChecker(strengthModifier + 2, firstWeaponSecondSectionId); // 1st weapon 2nd section
        statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6", "P"); // 1st weapon 3rd section
        equipment.push("Opalized oak wand - Focus");
      } else if (random2 > .2) {
        equipment.push("Scimitar");
        document.getElementById(firstWeaponFirstSectionId).value = "Scimitar"; // 1st weapon 1st section
        statChecker(biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2, firstWeaponSecondSectionId); // 1st weapon 2nd section
        statChecker3(biggerWeaponStatDecider(dexterityModifier, strengthModifier), firstWeaponThirdSectionId, "1d6", "S"); // 1st weapon 3rd section
        equipment.push("Dreamcatcher willow totem - Focus");
      } else {
        equipment.push("Spear");
        document.getElementById(firstWeaponFirstSectionId).value = "Spear"; // 1st weapon 1st section
        statChecker(strengthModifier + 2, firstWeaponSecondSectionId); // 1st weapon 2nd section
        statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6", "P"); // 1st weapon 3rd section
        equipment.push("Animal totem staff - Focus");
      }
    } else if (classAndLevel === "Fighter 1") {
      features.push("Second Wind (1/r): On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level.");
      spellcastingSection.push("Second Wind (1/r): Use a bonus action to gain 1d10 + 1 hp.");
      spellcastingSection.push(" ");
      if (random2 > .500) {
        equipment.push("Dungeoneer's pack");
      } else {
        equipment.push("Explorer's pack");
      }
      if (random3 > .833) {
        features.push("Fighting Style: Defense, While you are wearing armor, you gain a +1 bonus to AC.");
        armorClass += 1;
      } else if (random3 > .667) {
        features.push("Fighting Style: Dueling, when you are wielding a melee wepaon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon.");
        spellcastingSection.push("Dueling: +2 bonus to damage rolls");
        spellcastingSection.push(" ");
      } else if (random3 > .500) {
        features.push("Fighting Style: Protection, When a creature you can see attacks a target other than you that is within 5 feet o f you, you can use your reaction to impose disadvantage on the attack roll. You must be w ielding a shield.");
        spellcastingSection.push("Protection: Can use reaction to impose DA on the attack roll of an enemy.");
        spellcastingSection.push(" ");
      } else if (random3 > .334) {
        features.push("Fighting Style: Great Weapon Fighting, when you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must be a two-handed weapon or have the versatile property to gain this benefit.");
        spellcastingSection.push("Great Weapon Fighting: Reroll damage rolls that are a 1 or a 2, once per roll.");
        spellcastingSection.push(" ");
      } else if (random3 > .167) {
        features.push("Fighting Style: Two Weapon Fighting, can add your ability modifier to the damage of the second attack.");
        spellcastingSection.push("Two Weapon Fighting: +" + dexterityModifier + " to offhand attacks.");
        spellcastingSection.push(" ");
      } else {
        features.push("Fighting Style: Archery, gain a +2 bonus to attack rolls you make with ranged weapons.");
        spellcastingSection.push("Archery: +2 ranged attack bonus");
        spellcastingSection.push(" ");
      }
      if (random4 > .5) {
        equipment.push("Shield");
        attackSectionWeaponAdder(attackSectionWeaponPicker(martialWeaponsArray), firstWeaponFirstSectionId, firstWeaponSecondSectionId, firstWeaponThirdSectionId);
      } else {
        attackSectionWeaponAdder(attackSectionWeaponPicker(martialWeaponsArray), firstWeaponFirstSectionId, firstWeaponSecondSectionId, firstWeaponThirdSectionId);
        attackSectionWeaponAdder(attackSectionWeaponPicker(martialWeaponsArray), secondWeaponFirstSectionId, secondWeaponSecondSectionId, secondWeaponThirdSectionId);
      }
      if (random > .500) {
        console.log("test");
        equipment.push("Chain mail");
      } else {
        if (document.getElementById(secondWeaponFirstSectionId).value === undefined || document.getElementById(secondWeaponFirstSectionId).value === null || document.getElementById(secondWeaponFirstSectionId).value === "") {
          console.log("test2");
          equipment.push("Leather armor");
          equipment.push("Longbow w/ quiver of 20 arrows");
          document.getElementById(secondWeaponFirstSectionId).value = "Longbow"; // 2nd weapon 1st section
          statChecker(dexterityModifier + 2, secondWeaponSecondSectionId); // 2nd weapon 2nd section
          statChecker3(dexterityModifier, secondWeaponThirdSectionId, "1d8", "P"); // 2nd weapon 3rd section
        } else {
          console.log("test3");
          equipment.push("Leather armor");
          equipment.push("Longbow w/ quiver of 20 arrows");
          document.getElementById(thirdWeaponFirstSectionId).value = "Longbow";
          statChecker(dexterityModifier + 2, thirdWeaponSecondSectionId);
          statChecker3(dexterityModifier, thirdWeaponThirdSectionId, "1d8", "P");
        }
      }
      if (document.getElementById(secondWeaponFirstSectionId).value === document.getElementById(thirdWeaponFirstSectionId).value && document.getElementById(thirdWeaponFirstSectionId).value != "") {
        equipment.pop();
        equipment.pop();
        equipment.pop();
        equipment.push("Leather armor");
        equipment.push("Two " + document.getElementById(secondWeaponFirstSectionId).value + "s");
        if (document.getElementById(secondWeaponFirstSectionId).value === "Longbow" || document.getElementById(secondWeaponFirstSectionId).value === "Shortbow") {
          equipment.push("Quiver of 40 arrows");
        } else if (document.getElementById(secondWeaponFirstSectionId).value === "Light CB" || document.getElementById(secondWeaponFirstSectionId).value === "Heavy CB" || document.getElementById(secondWeaponFirstSectionId).value === "Hand CB") {
          equipment.push("Quiver of 40 bolts");
        }
        document.getElementById(thirdWeaponFirstSectionId).value = "";
        document.getElementById(thirdWeaponSecondSectionId).value = "";
        document.getElementById(thirdWeaponThirdSectionId).value = "";
      }
      if (document.getElementById(firstWeaponFirstSectionId).value === document.getElementById(secondWeaponFirstSectionId).value && document.getElementById(secondWeaponFirstSectionId).value != "") {
        equipment.pop();
        equipment.pop();
        equipment.push("Two " + document.getElementById(firstWeaponFirstSectionId).value + "s");
        document.getElementById(secondWeaponFirstSectionId).value = "";
        document.getElementById(secondWeaponSecondSectionId).value = "";
        document.getElementById(secondWeaponThirdSectionId).value = "";
      }
      if (document.getElementById(secondWeaponFirstSectionId).value === undefined || document.getElementById(secondWeaponFirstSectionId).value === null || document.getElementById(secondWeaponFirstSectionId).value === "") {
        if (random5 > .5) {
          equipment.push("Light crossbow w/ quiver of 20 bolts");
          document.getElementById(secondWeaponFirstSectionId).value = "Light CB"; // 1st weapon 1st section
          statChecker(dexterityModifier + 2, secondWeaponSecondSectionId); // 1st weapon 2nd section
          statChecker3(dexterityModifier, secondWeaponThirdSectionId, "1d8", "P"); // 1st weapon 3rd section
        } else {
          equipment.push("Two handaxes");
          document.getElementById(secondWeaponFirstSectionId).value = "Handaxe"; // 2nd weapon 1st section
          statChecker(strengthModifier + 2, secondWeaponSecondSectionId); // 2nd weapon 2nd section

          statChecker3(strengthModifier, secondWeaponThirdSectionId, "1d6", "S"); // 2nd weapon 3rd section
        }
      } else if (document.getElementById(thirdWeaponFirstSectionId).value === undefined || document.getElementById(thirdWeaponFirstSectionId).value === null || document.getElementById(thirdWeaponFirstSectionId).value === "") {
        if (random5 > .5) {
          equipment.push("Light crossbow w/ quiver of 20 bolts");
          document.getElementById(thirdWeaponFirstSectionId).value = "Light CB"; // 1st weapon 1st section
          statChecker(dexterityModifier + 2, thirdWeaponSecondSectionId); // 1st weapon 2nd section
          statChecker3(dexterityModifier, thirdWeaponThirdSectionId, "1d8", "P"); // 1st weapon 3rd section
        } else {
          equipment.push("Two handaxes");
          document.getElementById(thirdWeaponFirstSectionId).value = "Handaxe"; // 2nd weapon 1st section
          statChecker(strengthModifier + 2, thirdWeaponSecondSectionId); // 2nd weapon 2nd section
          statChecker3(strengthModifier, thirdWeaponThirdSectionId, "1d6", "S"); // 2nd weapon 3rd section
        }
      } else {
        if (random5 > .5) {
          equipment.push("Light crossbow w/ quiver of 20 bolts");
          spellcastingSection.push("Light CB  +" + (dexterityModifier + 2) + "  1d8+" + dexterityModifier + " P");
        } else {
          equipment.push("Two handaxes");
          spellcastingSection.push("Handaxe  +" + (strengthModifier + 2) + "  1d6+" + strengthModifier + " P");
        }
      }
    } else if (classAndLevel === "Monk 1") {
      armorClass += 10 + dexterityModifier + wisdomModifier; // armor class
      features.push("Unarmored Defense: While you are not wearing any armor or shields, your armor class equals 10 + your dexterity modifier + your wisdom modifier.");
      features.push("Martial Arts: You gain the following benefits when you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield:\rYou can use DEX instead of STR for atk and dmg rolls of your unarmed strikes or monk weapons.\rYou can roll a d4 in place of the normal dmg of your unarmed strike or monk weapon.\rWhenever you use the Attack action with an unarmed strike or monk weapon, you can use your bonus action to make an unarmed strike as well.");
      spellcastingSection.push("Martial Arts: When you attack with the above weapons, you can use your bonus action to make an unarmed strike.");
      musicalinstrument = randomMusicalInstrument();
      toolAdder2(toolAdder(musicalinstrument));
      randomAritsanTool = random_artisan_tool();
      toolAdder2(toolAdder(randomAritsanTool));
      document.getElementById(secondWeaponFirstSectionId).value = "Unarmed"; // 2nd weapon 1st section
      statChecker(biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2, secondWeaponSecondSectionId); // 2nd weapon 2nd section
      statChecker3(biggerWeaponStatDecider(dexterityModifier, strengthModifier), secondWeaponThirdSectionId, "1d4", "B"); // 2nd weapon 3rd section
      if (random > .5) {
        equipment.push("Dungeoneer's pack");
      } else {
        equipment.push("Explorer's pack");
      }
      equipment.push("Ten darts");
      document.getElementById(thirdWeaponFirstSectionId).value = "Dart"; // 3rd weapon 1st section
      statChecker(biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2, thirdWeaponSecondSectionId); // 3rd weapon 2nd section
      statChecker3(biggerWeaponStatDecider(dexterityModifier, strengthModifier), thirdWeaponThirdSectionId, "1d4", "P"); // 3rd weapon 3rd section
      if (random2 > .666) {
        equipment.push("Nunchaku");
        document.getElementById(firstWeaponFirstSectionId).value = "Nunchaku"; // 1st weapon 1st section
        statChecker(biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2, firstWeaponSecondSectionId); // 1st weapon 2nd section
        statChecker3(biggerWeaponStatDecider(dexterityModifier, strengthModifier), firstWeaponThirdSectionId, "1d4", "B"); // 1st weapon 3rd section
      } else if (random2 > .333) {
        equipment.push("Kama");
        document.getElementById(firstWeaponFirstSectionId).value = "Kama"; // 1st weapon 1st section
        statChecker(biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2, firstWeaponSecondSectionId); // 1st weapon 2nd section
        statChecker3(biggerWeaponStatDecider(dexterityModifier, strengthModifier), firstWeaponThirdSectionId, "1d4", "S"); // 1st weapon 3rd section
      } else {
        equipment.push("Quarterstaff");
        document.getElementById(firstWeaponFirstSectionId).value = "Quarterstaff"; // 1st weapon 1st section
        statChecker(biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2, firstWeaponSecondSectionId); // 1st weapon 2nd section
        statChecker3(biggerWeaponStatDecider(dexterityModifier, strengthModifier), firstWeaponThirdSectionId, "1d6", "B"); // 1st weapon 3rd section
      }
    } else if (classAndLevel === "Paladin 1") {
      equipment.push("Chain mail");
      features.push("Divine Sense (" + (charismaModifier + 1) + "/lr: As an action, until the end of your next turn, you know the location of any celestial, fiend, or Undead within 60 feet of you that is not behind total cover. You know the type of any being whose presence you sense, but not its identity. Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated.");
      features.push("Lay on Hands (5 hp/lr): You can restore a total number of hit points equal to your paladin level x 5. As an action, you can use your pool to heal a target. Alternatively, you can expend 5 hit points from your pool to cure the target of one disease or neutralize one poison affecting it. No effect on Undead and constructs.");
      spellcastingSection.push("Lay on Hands (5 hp/lr): As an action you can heal another creature or cure them of disease or poison.");
      if (alignment[0] === "Lawful" && alignment[1] === "Good") {
        equipment.push("Silver bracer - Symbol");
        alliesAndOrganizations.push("Pholtus - God of light and law, I will protect the good and bright light to such dark times like the present. This is my moment, this is his will.");
        alliesAndOrganizations.push(" ");
      } else if (alignment[0] === "Neutral" && alignment[1] === "Good") {
        equipment.push("Sun tattoo on right palm - Symbol");
        alliesAndOrganizations.push("Pelor, God of the sun and healing, the sun has been beating on my back my entire life, I have only just begun to appreciate the wonders it has presented me.");
        alliesAndOrganizations.push(" ");
      } else if (alignment[0] === "Chaotic" && alignment[1] === "Good") {
        equipment.push("Triangular star ring - Symbol");
        alliesAndOrganizations.push("Lliira - Goddess of joy, I won't let anyone take others happiness away, not even for a second if I can help it.");
        alliesAndOrganizations.push(" ");
      } else if (alignment[0] === "Lawful" && alignment[1] === "Neutral") {
        equipment.push("Partially-burnt gauntlet - Symbol");
        alliesAndOrganizations.push("Helm, God of protection, I will uplift the just, and smite the self-righteous and wicked.");
        alliesAndOrganizations.push(" ");
      } else if (alignment[0] === "Neutral" && alignment[1] === "Neutral") {
        equipment.push("Fire-glass necklace - Symbol");
        alliesAndOrganizations.push("Sirrion, God of fire and change, he will guide me through the world, and the chaos amongst it.");
        alliesAndOrganizations.push(" ");
      } else if (alignment[0] === "Chaotic" && alignment[1] === "Neutral") {
        equipment.push("Father's fingerbones - Symbol");
        alliesAndOrganizations.push("The Traveler - deity of chaos and change, I feel like things only get better with change, and I am a catalyst.");
        alliesAndOrganizations.push(" ");
      } else if (alignment[0] === "Lawful" && alignment[1] === "Evil") {
        equipment.push("Black glove - Symbol");
        alliesAndOrganizations.push("Bane - God of Tyranny, my one true master.");
        alliesAndOrganizations.push(" ");
      } else if (alignment[0] === "Neutral" && alignment[1] === "Evil") {
        equipment.push("Dragonshard stone (fang-shaped) - Symbol");
        alliesAndOrganizations.push("The Keeper, God of greed and death, I will gain everything in this world, I will devour this planet.");
        alliesAndOrganizations.push(" ");
      } else if (alignment[0] === "Chaotic" && alignment[1] === "Evil") {
        equipment.push("Skull of a wicked man - Symbol");
        alliesAndOrganizations.push("Iuz - God of pain and oppression, I will worship this man as a vehicle for the pain and suffering that my wife suffered at the hands of those men.");
        alliesAndOrganizations.push(" ");
      }
      if (random > .500) {
        equipment.push("Explorer's pack");
      } else {
        equipment.push("Priest's pack");
      }
      if (random2 > .5) {
        equipment.push("Five javelins");
        document.getElementById(firstWeaponFirstSectionId).value = "Javelin"; // 2nd weapon 1st section
        statChecker(strengthModifier + 2, firstWeaponSecondSectionId); // 2nd weapon 2nd section
        statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6", "P"); // 2nd weapon 3rd section
      } else {
        attackSectionWeaponAdder(attackSectionWeaponPicker(simpleWeaponsArray), firstWeaponFirstSectionId, firstWeaponSecondSectionId, firstWeaponThirdSectionId);
      }
      attackSectionWeaponAdder(attackSectionWeaponPicker(martialWeaponsArray), secondWeaponFirstSectionId, secondWeaponSecondSectionId, secondWeaponThirdSectionId);
      if (random4 > .5) {
        equipment.push("Shield");
      } else {
        attackSectionWeaponAdder(attackSectionWeaponPicker(martialWeaponsArray), thirdWeaponFirstSectionId, thirdWeaponSecondSectionId, thirdWeaponThirdSectionId);
      }
      if (document.getElementById(thirdWeaponFirstSectionId).value === document.getElementById(secondWeaponFirstSectionId).value && document.getElementById(secondWeaponFirstSectionId).value != "") {
        equipment.pop();
        equipment.pop();
        equipment.push("Two " + document.getElementById(firstWeaponFirstSectionId).value + "s");
        document.getElementById(thirdWeaponFirstSectionId).value = "";
        document.getElementById(thirdWeaponSecondSectionId).value = "";
        document.getElementById(thirdWeaponThirdSectionId).value = "";
      }
    } else if (classAndLevel === "Ranger 1") {
      equipment.push("Longbow w/ quiver of 20 arrows");
      document.getElementById(firstWeaponFirstSectionId).value = "Longbow"; // 1st weapon 1st section
      statChecker(dexterityModifier + 2, firstWeaponSecondSectionId); // 1st weapon 2nd section
      statChecker3(dexterityModifier, firstWeaponThirdSectionId, "1d8", "P"); // 1st weapon 3rd section
      if (random > .5) {
        equipment.push("Scale mail");
      } else {
        equipment.push("Leather armor");
      }
      if (random2 > .91) {
        features.push("Favored Enemy: Your favored enemies are dragons, you have advantage on Survival checks to track them, as well as INT checks to recall information about them. You also learn the language of your favored enemy.");
        language_adder_2(language_adder("Draconic"));
      } else if (random2 > .78) {
        features.push("Favored Enemy: Your favored enemies are beasts, you have advantage on Survival checks to track them, as well as INT checks to recall information about them. You also learn the language of your favored enemy, if they have one.");
      } else if (random2 > .65) {
        features.push("Favored Enemy: Your favored enemies are celestials, you have advantage on Survival checks to track them, as well as INT checks to recall information about them. You also learn the language of your favored enemy.");
        language_adder_2(language_adder("Celestial"));
      } else if (random2 > .52) {
        features.push("Favored Enemy: Your favored enemies are fiends, you have advantage on Survival checks to track them, as well as INT checks to recall information about them. You also learn the language of your favored enemy.");
        language_adder_2(language_adder("Abyssal"));
      } else if (random2 > .39) {
        features.push("Favored Enemy: Your favored enemies are elementals, you have advantage on Survival checks to track them, as well as INT checks to recall information about them. You also learn the language of your favored enemy.");
        language_adder_2(language_adder("Primordial"));
      } else if (random2 > .26) {
        features.push("Favored Enemy: Your favored enemies are goblins and orcs, you have advantage on Survival checks to track them, as well as INT checks to recall information about them. You also learn the language of your favored enemy.");
        language_adder_2(language_adder("Orc"));
      } else if (random2 > .13) {
        features.push("Favored Enemy: Your favored enemies are undead, you have advantage on Survival checks to track them, as well as INT checks to recall information about them. You also learn the language of your favored enemy.");
      } else {
        features.push("Favored Enemy: Your favored enemies are giants, you have advantage on Survival checks to track them, as well as INT checks to recall information about them. You also learn the language of your favored enemy.");
        language_adder_2(language_adder("Giant"));
      }
      if (random3 > .91) {
        features.push("Natural Explorer: Favored terrain is the Underdark, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been.");
      } else if (random3 > .78) {
        features.push("Natural Explorer: Favored terrain is the Artic, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been.");
      } else if (random3 > .65) {
        features.push("Natural Explorer: Favored terrain is the Coast, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been.");
      } else if (random3 > .52) {
        features.push("Natural Explorer: Favored terrain is the Desert, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been.");
      } else if (random3 > .39) {
        features.push("Natural Explorer: Favored terrain is the Forest, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been.");
      } else if (random3 > .26) {
        features.push("Natural Explorer: Favored terrain is the Grasslands, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been.");
      } else if (random3 > .13) {
        features.push("Natural Explorer: Favored terrain is the Mountains, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been.");
      } else {
        features.push("Natural Explorer: Favored terrain is the Swamp, when you make an INT or WIS check related to your favored terrain, your proficiency x2 if you are using a skill that you're proficient in. While traveling an hour or more in your favored terrain, you gain benefits: Difficult terrain doesn't slow your group's travel. Your group can't become lost except by magical means. When engaged in another activity while traveling you remain alert to danger. If alone, you can move stealthily at a normal pace. When you forage, find twice the food. While tracking other creatures, you learn their number, sizes, and how long it has been.");
      }
      if (random4 > .5) {
        equipment.push("Dungeoneer's pack");
      } else {
        equipment.push("Explorer's pack");
      }
      if (random5 > .5) {
        equipment.push("Two shortswords");
        document.getElementById(secondWeaponFirstSectionId).value = "Shortsword"; // 2nd weapon 1st section
        statChecker(biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2, secondWeaponSecondSectionId); // 2nd weapon 2nd section
        statChecker3(biggerWeaponStatDecider(dexterityModifier, strengthModifier), secondWeaponThirdSectionId, "1d6", "S"); // 2nd weapon 3rd section
      } else {
        attackSectionWeaponAdder(attackSectionWeaponPicker(simpleWeaponsArray), secondWeaponFirstSectionId, secondWeaponSecondSectionId, secondWeaponThirdSectionId);
        attackSectionWeaponAdder(attackSectionWeaponPicker(simpleWeaponsArray), thirdWeaponFirstSectionId, thirdWeaponSecondSectionId, thirdWeaponThirdSectionId);
        if (document.getElementById(secondWeaponFirstSectionId).value === document.getElementById(thirdWeaponFirstSectionId).value) {
          equipment.pop();
          equipment.pop();
          equipment.push("Two " + document.getElementById(secondWeaponFirstSectionId).value);
          if (document.getElementById(secondWeaponFirstSectionId).value === "Longbow" || document.getElementById(secondWeaponFirstSectionId).value === "Shortbow") {
            equipment.push("Quiver of 40 arrows");
          } else if (document.getElementById(secondWeaponFirstSectionId).value === "Light CB" || document.getElementById(secondWeaponFirstSectionId).value === "Heavy CB" || document.getElementById(secondWeaponFirstSectionId).value === "Hand CB") {
            equipment.push("Quiver of 40 bolts");
          }
          document.getElementById(thirdWeaponFirstSectionId).value = "";
          document.getElementById(thirdWeaponSecondSectionId).value = "";
          document.getElementById(thirdWeaponThirdSectionId).value = "";
        }
      }
    } else if (classAndLevel === "Rogue 1") {
      toolAdder2(toolAdder("thieves' tools"));
      equipment.push("Leather armor");
      equipment.push("Two daggers");
      document.getElementById(firstWeaponFirstSectionId).value = "Dagger"; // 2nd weapon 1st section
      statChecker(biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2, firstWeaponSecondSectionId); // 2nd weapon 2nd section
      statChecker3(biggerWeaponStatDecider(dexterityModifier, strengthModifier), firstWeaponThirdSectionId, "1d4", "P"); // 2nd weapon 3rd section
      features.push("Sneak Attack: If an enemy is getting flanked or you have advantage on the attack, you can use your sneak attack dice (1d6) on the attack (once a turn). The weapon must be a finesse or ranged weapon.");
      spellcastingSection.push("Sneak Attack: 1d6 to first attack roll of the round that has advantage and hits.");
      language_adder_2(language_adder("Thieves' Cant"));
      features.push("Thieves' Cant: You know the secret code of thieves and rogues everywhere, and the secret signs and jargon associated with it.");
      if (random > .5) {
        features.push("Expertise: Your two skills of expertise are Stealth and Perception. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies.");
        equipment.push("Thieves' tools");
        statChecker(dexterityModifier + 4, "form32_1");
        statChecker(wisdomModifier + 4, "form43_1");
      } else if (document.getElementById("form17_1").checked === true) {
        features.push("Expertise: Your two skills of expertise are Stealth and Deception. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies.");
        statChecker(dexterityModifier + 4, "form32_1");
        statChecker(charismaModifier + 4, "form36_1");
        equipment.push("Thieves' tools");
      } else if (document.getElementById("form14_1").checked === true) {
        features.push("Expertise: Your two skills of expertise are Stealth and Investigation. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies.");
        statChecker(dexterityModifier + 4, "form32_1");
        statChecker(intelligenceModifier + 4, "form31_1");
        equipment.push("Thieves' tools");
      } else {
        features.push("Expertise: Your two skills of expertise are Stealth and Thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies.");
        statChecker(dexterityModifier + 4, "form32_1");
        equipment.push("Thieves' tools (+4)");
      } /* Levi N. Blodgett */
      if (random2 > .5) {
        equipment.push("Rapier");
        document.getElementById(secondWeaponFirstSectionId).value = "Rapier"; // 1st weapon 1st section
        statChecker(biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2, secondWeaponSecondSectionId); // 1st weapon 2nd section
        statChecker3(biggerWeaponStatDecider(dexterityModifier, strengthModifier), secondWeaponThirdSectionId, "1d8", "P"); // 1st weapon 3rd section
      } else {
        equipment.push("Shortsword");
        document.getElementById(secondWeaponFirstSectionId).value = "Shortsword"; // 1st weapon 1st section
        statChecker(biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2, secondWeaponSecondSectionId); // 1st weapon 2nd section
        statChecker3(biggerWeaponStatDecider(dexterityModifier, strengthModifier), secondWeaponThirdSectionId, "1d6", "S"); // 1st weapon 3rd section
      }
      if (random3 > .5) {
        equipment.push("Shortbow w/ quiver of 20 arrows");
        document.getElementById(thirdWeaponFirstSectionId).value = "Shortbow"; // 3rd weapon 1st section
        statChecker(dexterityModifier + 2, thirdWeaponSecondSectionId); // 3rd weapon 2nd section
        statChecker3(dexterityModifier, thirdWeaponThirdSectionId, "1d6", "P"); // 3rd weapon 3rd section
      } else {
        equipment.push("Shortsword");
        document.getElementById(thirdWeaponFirstSectionId).value = "Shortsword"; // 1st weapon 1st section
        statChecker(biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2, thirdWeaponSecondSectionId); // 1st weapon 2nd section
        statChecker3(biggerWeaponStatDecider(dexterityModifier, strengthModifier), thirdWeaponThirdSectionId, "1d6", "S"); // 1st weapon 3rd section
      }
      if (document.getElementById(secondWeaponFirstSectionId).value === document.getElementById(thirdWeaponFirstSectionId).value) {
        equipment.pop();
        equipment.pop();
        equipment.push("Two " + document.getElementById(secondWeaponFirstSectionId).value);
        document.getElementById(thirdWeaponFirstSectionId).value = "";
        document.getElementById(thirdWeaponSecondSectionId).value = "";
        document.getElementById(thirdWeaponThirdSectionId).value = "";
      }
      if (random4 > .666) {
        equipment.push("Burglar's Pack");
      } else if (random4 > .333) {
        equipment.push("Dungeoneer's Pack");
      } else {
        equipment.push("Explorer's Pack");
      }
    } else if (classAndLevel === "Sorcerer 1") {
      equipment.push("Two daggers");
      document.getElementById(firstWeaponFirstSectionId).value = "Dagger"; // 1st weapon 1st section
      statChecker(biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2, firstWeaponSecondSectionId); // 1st weapon 2nd section
      statChecker3(biggerWeaponStatDecider(dexterityModifier, strengthModifier), firstWeaponThirdSectionId, "1d4", "P"); // 1st weapon 3rd section
      if (random3 > .5) {
        equipment.push("Light crossbow w/ quiver of 20 bolts");
        document.getElementById(secondWeaponFirstSectionId).value = "Light CB"; // 2nd weapon 1st section
        statChecker(dexterityModifier + 2, secondWeaponSecondSectionId); // 2nd weapon 2nd section
        statChecker3(dexterityModifier, secondWeaponThirdSectionId, "1d8", "P"); // 2nd weapon 3rd section
      } else {
        attackSectionWeaponAdder(attackSectionWeaponPicker(simpleWeaponsArray), secondWeaponFirstSectionId, secondWeaponSecondSectionId, secondWeaponThirdSectionId);
      }
      if (document.getElementById(secondWeaponFirstSectionId).value === document.getElementById(firstWeaponFirstSectionId).value) {
        equipment.pop();
        equipment.pop();
        if (document.getElementById(secondWeaponFirstSectionId).value === "Dagger") {
          equipment.push("Three daggers");
        }
        document.getElementById(secondWeaponFirstSectionId).value = "";
        document.getElementById(secondWeaponSecondSectionId).value = "";
        document.getElementById(secondWeaponThirdSectionId).value = "";
      }
      if (document.getElementById(secondWeaponFirstSectionId).value != "") {
        equipment.push("Two daggers");
      }
      equipment.push("Component pouch");
      if (random > .5) {
        if (random2 > .9) {
          features.push("Draconic Ancestor: Black, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons.");
          features.push("Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier.");
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        } else if (random2 > .8) {
          features.push("Draconic Ancestor: Blue, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons.");
          features.push("Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier.");
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        } else if (random2 > .7) {
          features.push("Draconic Ancestor: Brass, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons.");
          features.push("Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier.");
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        } else if (random2 > .6) {
          features.push("Draconic Ancestor: Bronze, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons.");
          features.push("Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier.");
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        } else if (random2 > .5) {
          features.push("Draconic Ancestor: Copper, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons.");
          features.push("Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier.");
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        } else if (random2 > .4) {
          features.push("Draconic Ancestor: Gold, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons.");
          features.push("Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier.");
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        } else if (random2 > .3) {
          features.push("Draconic Ancestor: Green, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons.");
          features.push("Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier.");
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        } else if (random2 > .2) {
          features.push("Draconic Ancestor: Red, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons.");
          features.push("Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier.");
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        } else if (random2 > .1) {
          features.push("Draconic Ancestor: Silver, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons.");
          features.push("Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier.");
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        } else if (random2 > .0) {
          features.push("Draconic Ancestor: White, and you know the language 'Draconic', you also get double your proficiency bonus when making a CHA check interacting with dragons.");
          features.push("Draconic Resilience: At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class. Additionally, when you aren't wearing armor, your AC equals 13 + your dexterity modifier.");
          armorClass += 13 + dexterityModifier; // armor class
          hp++;
        }
      } else {
        features.push("Wild Magic Surge: Immediately after you cast a sorcerer spell of 1st level or higher, the DM can have you roll a d20. If you roll a 1, roll on the Wild Magic Surge table to create a random magical effect.");
        features.push("Tides of Chaos (1/lr): You can gain advantage on one attack roll, ability check, or saving throw. Anytime you regain this feature, the DM can have you roll on the Wild Magic Surge table immediately after you cast a sorcerer spell of 1st level or higher. You then regain the use of this feature.");
        armorClass += 10 + dexterityModifier;
      }
      if (random2 > .5) {
        equipment.push("Explorer's pack");
      } else {
        equipment.push("Dungeoneer's pack");
      }
    } else if (classAndLevel === "Warlock 1") {
      equipment.push("Component pouch");
      equipment.push("Leather armor");
      document.getElementById(firstWeaponFirstSectionId).value = "Dagger"; // 3rd weapon 1st section
      statChecker(biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2, firstWeaponSecondSectionId); // 3rd weapon 2nd section
      statChecker3(biggerWeaponStatDecider(dexterityModifier, strengthModifier), firstWeaponThirdSectionId, "1d4", "P"); // 3rd weapon 3rd section
      if (random > .500) {
        equipment.push("Scholar's pack");
      } else {
        equipment.push("Dungeoneer's pack");
      }
      if (random2 > .500) {
        equipment.push("Light crossbow w/ quiver of 20 bolts");
        document.getElementById(secondWeaponFirstSectionId).value = "Light CB"; // 2nd weapon 1st section
        statChecker(dexterityModifier + 2, secondWeaponSecondSectionId); // 2nd weapon 2nd section
        statChecker3(dexterityModifier, secondWeaponThirdSectionId, "1d8", "P"); // 2nd weapon 3rd section
      } else {
        attackSectionWeaponAdder(attackSectionWeaponPicker(simpleWeaponsArray), secondWeaponFirstSectionId, secondWeaponSecondSectionId, secondWeaponThirdSectionId);
      }
      attackSectionWeaponAdder(attackSectionWeaponPicker(simpleWeaponsArray), thirdWeaponFirstSectionId, thirdWeaponSecondSectionId, thirdWeaponThirdSectionId);
      while (document.getElementById(secondWeaponFirstSectionId).value === document.getElementById(thirdWeaponFirstSectionId).value && document.getElementById(firstWeaponFirstSectionId).value != document.getElementById(thirdWeaponFirstSectionId).value && document.getElementById(secondWeaponFirstSectionId).value != document.getElementById(firstWeaponFirstSectionId).value) {
        attackSectionWeaponAdder(attackSectionWeaponPicker(simpleWeaponsArray), thirdWeaponFirstSectionId, thirdWeaponSecondSectionId, thirdWeaponThirdSectionId);
        attackSectionWeaponAdder(attackSectionWeaponPicker(simpleWeaponsArray), secondWeaponFirstSectionId, secondWeaponSecondSectionId, secondWeaponThirdSectionId);
        if (document.getElementById(secondWeaponFirstSectionId).value === document.getElementById(thirdWeaponFirstSectionId).value) {
          equipment.pop();
          equipment.pop();
          if (document.getElementById(secondWeaponFirstSectionId).value != "Dagger") {
            equipment.push("Two " + document.getElementById(secondWeaponFirstSectionId).value);
          }
          document.getElementById(thirdWeaponFirstSectionId).value = "";
          document.getElementById(thirdWeaponSecondSectionId).value = "";
          document.getElementById(thirdWeaponThirdSectionId).value = "";
        }
      }
      if (document.getElementById(secondWeaponFirstSectionId).value === document.getElementById(firstWeaponFirstSectionId).value) {
        document.getElementById(secondWeaponFirstSectionId).value = document.getElementById(thirdWeaponFirstSectionId).value; // 2nd weapon 1st section
        statChecker(dexterityModifier + 2, secondWeaponSecondSectionId); // 2nd weapon 2nd section
        statChecker3(dexterityModifier, secondWeaponThirdSectionId, "1d8", "P"); // 2nd weapon 3rd section
        document.getElementById(thirdWeaponFirstSectionId).value = ""; // 3rd weapon 1st section
        statChecker("", thirdWeaponSecondSectionId); // 3rd weapon 2nd section
        statChecker3("", thirdWeaponThirdSectionId, "", ""); // 3rd weapon 3rd section
      }
      if (document.getElementById(thirdWeaponFirstSectionId).value === document.getElementById(secondWeaponFirstSectionId).value && document.getElementById(thirdWeaponFirstSectionId).value === document.getElementById(firstWeaponFirstSectionId).value) {
        equipment.push("Four daggers");
        document.getElementById(thirdWeaponFirstSectionId).value = "";
        document.getElementById(thirdWeaponSecondSectionId).value = "";
        document.getElementById(thirdWeaponThirdSectionId).value = "";
        document.getElementById(secondWeaponFirstSectionId).value = "";
        document.getElementById(secondWeaponSecondSectionId).value = "";
        document.getElementById(secondWeaponThirdSectionId).value = "";
      } else if (document.getElementById(thirdWeaponFirstSectionId).value === document.getElementById(firstWeaponFirstSectionId).value) {
        equipment.push("Three daggers");
        document.getElementById(thirdWeaponFirstSectionId).value = "";
        document.getElementById(thirdWeaponSecondSectionId).value = "";
        document.getElementById(thirdWeaponThirdSectionId).value = "";
      } else if (document.getElementById(thirdWeaponFirstSectionId).value === document.getElementById(secondWeaponFirstSectionId).value) {
        equipment.push("Three daggers");
        document.getElementById(thirdWeaponFirstSectionId).value = "";
        document.getElementById(thirdWeaponSecondSectionId).value = "";
        document.getElementById(thirdWeaponThirdSectionId).value = "";
      } else {
        equipment.push("Two daggers");
      }
      if (random4 > .666) {
        features.push("Otherworldly Patron: Archfey.");
        document.getElementById("form193_3").value = "Faerie Fire";
        document.getElementById("form159_3").value = "Sleep";
        features.push("Fey Presence (1/r): As an action, you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. If a target fails the saving throw, they are charmed or frightened by you (your choice) until the end of your next turn.");
      } else if (random4 > .333) {
        features.push("Otherworldly Patron: Fiend.");
        document.getElementById("form193_3").value = "Burning Hands";
        document.getElementById("form159_3").value = "Command";
        features.push("Dark One's Blessing: When you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your CHA modifier + your warlock level.");
      } else {
        features.push("Otherworldly Patron: Great Old One.");
        document.getElementById("form193_3").value = "Dissonant Whispers";
        document.getElementById("form159_3").value = "Tasha's Hideous Laughter";
        features.push("Awakened Mind: You can communicate telepathically with any creature you can see within 30 feet of you. You don't need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language.");
      }
    } else if (classAndLevel === "Wizard 1") {
      armorClass += 10 + dexterityModifier;
      features.push("Arcane Recovery (1/d): When you finish a short rest once a day, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.");
      if (random > .5) {
        equipment.push("Quarterstaff");
        document.getElementById(firstWeaponFirstSectionId).value = "Quarterstaff"; // 1st weapon 1st section
        statChecker(strengthModifier + 2, firstWeaponSecondSectionId); // 1st weapon 2nd section
        statChecker3(strengthModifier, firstWeaponThirdSectionId, "1d6", "B"); // 1st weapon 3rd section
      } else {
        equipment.push("Dagger");
        document.getElementById(firstWeaponFirstSectionId).value = "Dagger"; // 1st weapon 1st section
        statChecker(biggerWeaponStatDecider(dexterityModifier, strengthModifier) + 2, firstWeaponSecondSectionId); // 1st weapon 2nd section
        statChecker3(biggerWeaponStatDecider(dexterityModifier, strengthModifier), firstWeaponThirdSectionId, "1d4", "P"); // 1st weapon 3rd section
      }
      if (random2 > .8) {
        equipment.push("Crumpled up notes - Spellbook");
        equipment.push("Lightning in a bottle - Focus");
      } else if (random2 > .6) {
        equipment.push("Various colorful tattoos - Spellbook");
        equipment.push("Crystal with pink water inside - Focus");
      } else if (random2 > .4) {
        equipment.push("Leather-bound tome with suspiciously red ink - Spellbook");
        equipment.push("Metallic rod with amber stone on top - Focus");
      } else if (random2 > .2) {
        equipment.push("Thick black leather with platinum reinforced corners, silvery ink, the front embossed with your name, " + charName + " - Spellbook");
        equipment.push("Specially carved, gnarled, wooden staff - Focus");
      } else {
        equipment.push("Light leather book with gem-encrusted spine - Spellbook");
        equipment.push("Partially petrified willow wand - Focus");
      }
      if (random3 > .5) {
        equipment.push("Scholar's pack");
      } else {
        equipment.push("Explorer's pack");
      }
    }
  }

  // Block that adds weapon proficiencies by class
  randomByLength(bonds, arrayOfBonds, "form101_1");
  if (classAndLevel === "Barbarian 1") {
    weaponAdder2(weaponAdder("simple weapons"));
    weaponAdder2(weaponAdder("martial weapons"));
    armorAdder2(armorAdder("light armor"));
    armorAdder2(armorAdder("medium armor"));
    armorAdder2(armorAdder("shield"));
  } else if (classAndLevel === "Fighter 1") {
    weaponAdder2(weaponAdder("simple weapons"));
    weaponAdder2(weaponAdder("martial weapons"));
    armorAdder2(armorAdder("light armor"));
    armorAdder2(armorAdder("medium armor"));
    armorAdder2(armorAdder("heavy armor"));
    armorAdder2(armorAdder("shield"));
  } else if (classAndLevel === "Bard 1") {
    weaponAdder2(weaponAdder("simple weapons"));
    armorAdder2(armorAdder("light armor"));
    weaponAdder2(weaponAdder("hand crossbow"));
    weaponAdder2(weaponAdder("longsword"));
    weaponAdder2(weaponAdder("rapier"));
    weaponAdder2(weaponAdder("shortsword"));
  } else if (classAndLevel === "Cleric 1") {
    weaponAdder2(weaponAdder("simple weapons"));
    armorAdder2(armorAdder("light armor"));
    armorAdder2(armorAdder("medium armor"));
    armorAdder2(armorAdder("shield"));
  } else if (classAndLevel === "Sorcerer 1") {
    weaponAdder2(weaponAdder("dagger"));
    weaponAdder2(weaponAdder("dart"));
    weaponAdder2(weaponAdder("quarterstaff"));
    weaponAdder2(weaponAdder("sling"));
    weaponAdder2(weaponAdder("light crossbow"));
  } else if (classAndLevel === "Wizard 1") {
    weaponAdder2(weaponAdder("dagger"));
    weaponAdder2(weaponAdder("dart"));
    weaponAdder2(weaponAdder("quarterstaff"));
    weaponAdder2(weaponAdder("sling"));
    weaponAdder2(weaponAdder("light crossbow"));
  } else if (classAndLevel === "Druid 1") {
    armorAdder2(armorAdder("light armor"));
    armorAdder2(armorAdder("medium armor"));
    armorAdder2(armorAdder("shield"));
    features.push("(All armor and shields must be nonmetal)");
    weaponAdder2(weaponAdder("club"));
    weaponAdder2(weaponAdder("dagger"));
    weaponAdder2(weaponAdder("dart"));
    weaponAdder2(weaponAdder("javelin"));
    weaponAdder2(weaponAdder("mace"));
    weaponAdder2(weaponAdder("quarterstaff"));
    weaponAdder2(weaponAdder("scimitar"));
    weaponAdder2(weaponAdder("sickle"));
    weaponAdder2(weaponAdder("sling"));
    weaponAdder2(weaponAdder("spear"));
  } else if (classAndLevel === "Rogue 1") {
    weaponAdder2(weaponAdder("simple weapons"));
    armorAdder2(armorAdder("light armor"));
    weaponAdder2(weaponAdder("hand crossbow"));
    weaponAdder2(weaponAdder("longsword"));
    weaponAdder2(weaponAdder("rapier"));
    weaponAdder2(weaponAdder("shortsword"));
  } else if (classAndLevel === "Warlock 1") {
    weaponAdder2(weaponAdder("simple weapons"));
    armorAdder2(armorAdder("light armor"));
  } else if (classAndLevel === "Ranger 1") {
    weaponAdder2(weaponAdder("simple weapons"));
    weaponAdder2(weaponAdder("martial weapons"));
    armorAdder2(armorAdder("light armor"));
    armorAdder2(armorAdder("medium armor"));
    armorAdder2(armorAdder("shield"));
  } else if (classAndLevel === "Paladin 1") {
    weaponAdder2(weaponAdder("simple weapons"));
    weaponAdder2(weaponAdder("martial weapons"));
    armorAdder2(armorAdder("light armor"));
    armorAdder2(armorAdder("medium armor"));
    armorAdder2(armorAdder("heavy armor"));
    armorAdder2(armorAdder("shield"));
  } else if (classAndLevel === "Monk 1") {
    weaponAdder2(weaponAdder("simple weapons"));
    weaponAdder2(weaponAdder("shortsword"));
  };

  // Randomize skin based on parameters
  function skinRandomizer(skin1, skin2, skin3, skin4, skin5) {
    random = Math.floor(Math.random() * 5);
    if (random === 0) {
      document.getElementById("form2_2").value = skin1;
    } else if (random === 1) {
      document.getElementById("form2_2").value = skin2;
    } else if (random === 2) {
      document.getElementById("form2_2").value = skin3;
    } else if (random === 3) {
      document.getElementById("form2_2").value = skin4;
    } else if (random = 4) {
      document.getElementById("form2_2").value = skin5;
    }
  }

  // Randomize eye color based on parameters
  function eye_randomizer(eyecolor1, eyecolor2, eyecolor3, eyecolor4) {
    random = Math.floor(Math.random() * 4);
    if (random === 0) {
      document.getElementById("form6_2").value = eyecolor1;
    } else if (random === 1) {
      document.getElementById("form6_2").value = eyecolor2;
    } else if (random === 2) {
      document.getElementById("form6_2").value = eyecolor3;
    } else if (random === 3) {
      document.getElementById("form6_2").value = eyecolor4;
    }
  }

  // Randomize hair based on parameters
  function hair_randomizer(hair1, hair2, hair3, hair4) {
    random = Math.floor(Math.random() * 4);
    if (random === 0) {
      document.getElementById("form3_2").value = hair1;
    } else if (random === 1) {
      document.getElementById("form3_2").value = hair2;
    } else if (random === 2) {
      document.getElementById("form3_2").value = hair3;
    } else if (random === 3) {
      document.getElementById("form3_2").value = hair4;
    }
  }

  // Randomize weight based on how strong and tough they are, as well as the races height and weight parameters
  function weightRandomizer(constitutionNumber, strengthNumber, lowestWeight, lowerWeight, mediumWeight, highWeight, higherWeight, highestWeight) {
    beefiness = constitutionNumber + strengthNumber;
    random = Math.floor(Math.random() * 3);
    individualDiscrepancy = 0;
    if (random === 0) {
      individualDiscrepancy = -getRandomInt(5, 15);
    } else if (random === 1) {
      individualDiscrepancy = getRandomInt(5, 15);
    } else if (random === 2) {
      individualDiscrepancy = Math.floor(Math.random() * 5);
    }
    if (beefiness < 14) {
      document.getElementById("form4_2").value = lowestWeight + individualDiscrepancy;
    } else if (beefiness < 20) {
      document.getElementById("form4_2").value = lowerWeight + individualDiscrepancy;
    } else if (beefiness < 24) {
      document.getElementById("form4_2").value = mediumWeight + individualDiscrepancy;
    } else if (beefiness < 32) {
      document.getElementById("form4_2").value = highWeight + individualDiscrepancy;
    } else if (beefiness < 36) {
      document.getElementById("form4_2").value = higherWeight + individualDiscrepancy;
    } else {
      document.getElementById("form4_2").value = highestWeight + individualDiscrepancy;
    }
  }

  // Randomize weight based on how strong and tough they are, as well as the races height and weight parameters, but for the small races
  function weightRandomizerSmall(constitutionNumber, strengthNumber, lowestWeight, lowerWeight, mediumWeight, highWeight, higherWeight, highestWeight) {
    beefiness = constitutionNumber + strengthNumber;
    random = Math.floor(Math.random() * 3);
    individualDiscrepancy = 0;
    if (random === 0) {
      individualDiscrepancy = -getRandomInt(1, 3);
    } else if (random === 1) {
      individualDiscrepancy = getRandomInt(1, 3);
    } else if (random === 2) {
      individualDiscrepancy = Math.floor(Math.random() * 2);
    }
    if (beefiness < 14) {
      document.getElementById("form4_2").value = lowestWeight + individualDiscrepancy;
    } else if (beefiness < 20) {
      document.getElementById("form4_2").value = lowerWeight + individualDiscrepancy;
    } else if (beefiness < 24) {
      document.getElementById("form4_2").value = mediumWeight + individualDiscrepancy;
    } else if (beefiness < 32) {
      document.getElementById("form4_2").value = highWeight + individualDiscrepancy;
    } else if (beefiness < 36) {
      document.getElementById("form4_2").value = higherWeight + individualDiscrepancy;
    } else {
      document.getElementById("form4_2").value = highestWeight + individualDiscrepancy;
    }
  }

  // Function to determine breath type, calculate the saving throw, and push to additional features
  function breathDecider(color, damagetype) {
    if (color === "Black" || color === "Blue" || color === "Brass" || color === "Bronze" || color === "Copper") {
      additionalFeatures.push(damagetype + " Breath Weapon: You can use your action to exhale your draconic ancestry in a 5 by 30 foot line. When you use your breath weapon, each creature in the area of the exhalation must make a dexterity saving throw. The DC for this saving throw is " + (10 + constitutionModifier) + ". A creature takes 2d6 " + damagetype.toLowerCase() + " damage on a failed save, and half as much damage on a successful one.");
    } else if (color === "Gold" || color === "Red") {
      additionalFeatures.push(damagetype + " Breath Weapon: You can use your action to exhale your draconic ancestry in a 15 foot cone. When you use your breath weapon, each creature in the area of the exhalation must make a dexterity saving throw. The DC for this saving throw is " + (10 + constitutionModifier) + ". A creature takes 2d6 " + damagetype.toLowerCase() + " damage on a failed save, and half as much damage on a successful one.");
    } else if (color === "Green" || color === "Silver" || color === "White") {
      additionalFeatures.push(damagetype + " Breath Weapon: You can use your action to exhale your draconic ancestry in a 15 foot cone. When you use your breath weapon, each creature in the area of the exhalation must make a constitution saving throw. The DC for this saving throw is " + (10 + constitutionModifier) + ". A creature takes 2d6 " + damagetype.toLowerCase() + " damage on a failed save, and half as much damage on a successful one.");
    }
  }

  // Block to determine physical traits - age, height, skin, hair, weight, and eye color
  if (race === "Black Dragonborn") {
    document.getElementById("form5_2").value = getRandomInt(15, 40); // age
    document.getElementById("form1_2").value = getRandomInt(72, 80); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Ivory Black", "Onyx Black", "Carbon Black", "Pearlescent Black", "Black"); // skin
    hair_randomizer("", "", "", ""); // hair
    weightRandomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Violet", "Blue", "Red", "Purple"); // eyes

    breathDecider("Black", "Acid");
  } else if (race === "Blue Dragonborn") {
    document.getElementById("form5_2").value = getRandomInt(15, 40); // age
    document.getElementById("form1_2").value = getRandomInt(72, 80); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Blue", "Azure Blue", "Navy", "Pale Blue", "Royal Blue"); // skin
    hair_randomizer("", "", "", ""); // hair
    weightRandomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Violet", "Blue", "Red", "Purple"); // eyes

    breathDecider("Blue", "Lightning");
  } else if (race === "Brass Dragonborn") {
    document.getElementById("form5_2").value = getRandomInt(15, 40); // age
    document.getElementById("form1_2").value = getRandomInt(72, 80); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Brass", "Rusty Brass", "Copper & Brass", "Fiery Brass", "Brass"); // skin
    hair_randomizer("", "", "", ""); // hair
    weightRandomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Yellow", "Green", "Red", "Blue"); // eyes

    breathDecider("Brass", "Fire");
  } else if (race === "Bronze Dragonborn") {
    document.getElementById("form5_2").value = getRandomInt(15, 40); // age
    document.getElementById("form1_2").value = getRandomInt(72, 80); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Bronze", "Old Gold", "Dark Bronze", "Sandy Bronze", "Bronze"); // skin
    hair_randomizer("", "", "", ""); // hair
    weightRandomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Yellow", "Green", "Red", "Blue"); // eyes

    breathDecider("Bronze", "Lightning");
  } else if (race === "Copper Dragonborn") {
    document.getElementById("form5_2").value = getRandomInt(15, 40); // age
    document.getElementById("form1_2").value = getRandomInt(72, 80); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Copper", "Bronze & Copper", "Rusty Copper", "Fiery Copper", "Copper"); // skin
    hair_randomizer("", "", "", ""); // hair
    weightRandomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Yellow", "Green", "Red", "Blue"); // eyes

    breathDecider("Copper", "Acid");
  } else if (race === "Gold Dragonborn") {
    document.getElementById("form5_2").value = getRandomInt(15, 40); // age
    document.getElementById("form1_2").value = getRandomInt(72, 80); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Golden Yellow", "Gold", "Golden Rod", "Nugget Gold", "Gold"); // skin
    hair_randomizer("", "", "", ""); // hair
    weightRandomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Yellow", "Green", "Red", "Blue"); // eyes

    breathDecider("Gold", "Fire");
  } else if (race === "Green Dragonborn") {
    document.getElementById("form5_2").value = getRandomInt(15, 40); // age
    document.getElementById("form1_2").value = getRandomInt(72, 80); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Sea Green", "Forest Green", "Jade", "Emerald", "Green"); // skin
    hair_randomizer("", "", "", ""); // hair
    weightRandomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Yellow", "Green", "Red", "Blue"); // eyes

    breathDecider("Green", "Acid");
  } else if (race === "Red Dragonborn") {
    document.getElementById("form5_2").value = getRandomInt(15, 40); // age
    document.getElementById("form1_2").value = getRandomInt(72, 80); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Scarlet", "Red & Orange", "Blood Red", "Cherry Red", "Red"); // skin
    hair_randomizer("", "", "", ""); // hair
    weightRandomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Yellow", "Green", "Red", "Blue"); // eyes

    breathDecider("Red", "Fire");
  } else if (race === "Silver Dragonborn") {
    document.getElementById("form5_2").value = getRandomInt(15, 40); // age
    document.getElementById("form1_2").value = getRandomInt(72, 80); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Ice Silver", "Liquid Silver", "Lunar Silver", "Silver", "Silver"); // skin
    hair_randomizer("", "", "", ""); // hair
    weightRandomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Violet", "Blue", "Red", "Purple"); // eyes

    breathDecider("Silver", "Cold");
  } else if (race === "White Dragonborn") {
    document.getElementById("form5_2").value = getRandomInt(15, 40); // age
    document.getElementById("form1_2").value = getRandomInt(72, 80); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Snow", "Ghost White", "White Smoke", "Frost White", "White"); // skin
    hair_randomizer("", "", "", ""); // hair
    weightRandomizer(constitution, strength, 200, 225, 250, 275, 310, 340); // weight
    eye_randomizer("Violet", "Blue", "Red", "Purple"); // eyes

    breathDecider("White", "Cold");
  } else if (race === "Hill Dwarf") {
    document.getElementById("form5_2").value = getRandomInt(50, 250); // age
    document.getElementById("form1_2").value = getRandomInt(52, 60); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Pale Reddish", "Light Brown", "Deep Brown", "Deep Tan", "Tan"); // skin
    hair_randomizer("Gray", "Black", "Brown", "Red"); // hair
    weightRandomizer(constitution, strength, 110, 130, 150, 170, 190, 215); // weight
    eye_randomizer("Black", "Brown", "Green", "Blue"); // eyes
    weaponAdder2(weaponAdder("battleaxe"));
    weaponAdder2(weaponAdder("battleaxe"));
    weaponAdder2(weaponAdder("handaxe"));
    weaponAdder2(weaponAdder("light hammer"));
    weaponAdder2(weaponAdder("warhammer"));
    hp++;
  } else if (race === "Mountain Dwarf") {
    document.getElementById("form5_2").value = getRandomInt(50, 250); // age
    document.getElementById("form1_2").value = getRandomInt(55, 63); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
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
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Dusky Brown", "Brown", "Light Brown", "Tan", "Light Copper"); // skin
    hair_randomizer("Dusky Brown", "Brown", "Light Brown", "Black", "Auburn"); // hair
    weightRandomizer(constitution, strength, 140, 160, 180, 200, 225, 240); // weight
    eye_randomizer("Light Brown", "Dark Brown", "Black", "Brown"); // eyes
  } else if (race === "Human (Chondathan)") {
    document.getElementById("form5_2").value = getRandomInt(19, 55); // age
    document.getElementById("form1_2").value = getRandomInt(65, 73); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Tawny", "Light Tawny", "Light Tan", "Tan", "Light"); // skin
    hair_randomizer("Blond", "Brown", "Light Brown", "Black", "Dark Brown"); // hair
    weightRandomizer(constitution, strength, 140, 155, 170, 190, 215, 230); // weight
    eye_randomizer("Green", "Hazel", "Dark Brown", "Brown"); // eyes
  } else if (race === "Human (Damaran)") {
    document.getElementById("form5_2").value = getRandomInt(19, 55); // age
    document.getElementById("form1_2").value = getRandomInt(65, 73); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Tawny", "Fair", "Light Tan", "Tan", "Light"); // skin
    hair_randomizer("Brown", "Brown", "Light Brown", "Black", "Dark Brown"); // hair
    weightRandomizer(constitution, strength, 145, 165, 180, 200, 225, 245); // weight
    eye_randomizer("Dark Brown", "Hazel", "Blue", "Light Brown"); // eyes
  } else if (race === "Human (Illuskan)") {
    document.getElementById("form5_2").value = getRandomInt(19, 55); // age
    document.getElementById("form1_2").value = getRandomInt(67, 76); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Pale", "Fair", "Light Tan", "Fair", "Light"); // skin
    hair_randomizer("Raven-black", "Red", "Light Brown", "Blond", "Raven-black"); // hair
    weightRandomizer(constitution, strength, 150, 165, 185, 205, 230, 250); // weight
    eye_randomizer("Blue", "Steel", "Gray", "Dark Bluish-Gray"); // eyes
  } else if (race === "Human (Mulan)") {
    document.getElementById("form5_2").value = getRandomInt(19, 55); // age
    document.getElementById("form1_2").value = getRandomInt(66, 75); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Amber", "Dark Tan", "Light Tan", "Amber", "Tan"); // skin
    hair_randomizer("Bald", "Bald", "Dark Brown", "Black", "Bald"); // hair
    weightRandomizer(constitution, strength, 145, 160, 175, 195, 220, 235); // weight
    eye_randomizer("Hazel", "Brown", "Dark Brown", "Dark Hazel"); // eyes
  } else if (race === "Human (Rashemi)") {
    document.getElementById("form5_2").value = getRandomInt(19, 55); // age
    document.getElementById("form1_2").value = getRandomInt(64, 71); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Dusky", "Dark Tan", "Tan", "Brown", "Dark Amber"); // skin
    hair_randomizer("Black", "Brown", "Dark Brown", "Dark Aurburn", "Black"); // hair
    weightRandomizer(constitution, strength, 155, 170, 185, 205, 230, 250); // weight
    eye_randomizer("Dark Brown", "Brown", "Black", "Dark Hazel"); // eyes
  } else if (race === "Human (Shou)") {
    document.getElementById("form5_2").value = getRandomInt(19, 55); // age
    document.getElementById("form1_2").value = getRandomInt(64, 73); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Yellowish", "Bronze", "Copper", "Yellowish-Bronze", "Light Copper"); // skin
    hair_randomizer("Black", "Brown", "Black", "Black", "Dark Brown"); // hair
    weightRandomizer(constitution, strength, 140, 160, 180, 200, 225, 245); // weight
    eye_randomizer("Dark Auburn", "Dark Brown", "Black", "Brown"); // eyes
  } else if (race === "Human (Tethyrian)") {
    document.getElementById("form5_2").value = getRandomInt(19, 55); // age
    document.getElementById("form1_2").value = getRandomInt(64, 74); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Dusky", "Fair", "Dark Tan", "Tan", "Dusky"); // skin
    hair_randomizer("Light Brown", "Black", "Blond", "Red", "Dark Brown"); // hair
    weightRandomizer(constitution, strength, 140, 160, 180, 200, 225, 245); // weight
    eye_randomizer("Blue", "Blue", "Green", "Hazel"); // eyes
  } else if (race === "Human (Turami)") {
    document.getElementById("form5_2").value = getRandomInt(19, 55); // age
    document.getElementById("form1_2").value = getRandomInt(66, 76); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Dark Mahogany", "Mahogany", "Dark Brown", "Brown", "Dark Amber"); // skin
    hair_randomizer("Black", "Black", "Dark Brown", "Dark Aurburn", "Black"); // hair
    weightRandomizer(constitution, strength, 155, 170, 185, 205, 230, 250); // weight
    eye_randomizer("Dark Brown", "Brown", "Black", "Dark Hazel"); // eyes
  } else if (race === "High Elf") {
    document.getElementById("form5_2").value = getRandomInt(100, 600); // age
    document.getElementById("form1_2").value = getRandomInt(65, 73); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Copper", "Bronze", "Pale Bluish-White", "Bluish-White", "Light Copper"); // skin
    hair_randomizer("Green", "Blue", "Turquoise", "Silver-White"); // hair
    weightRandomizer(constitution, strength, 110, 115, 130, 140, 155, 165); // weight
    eye_randomizer("Gold", "Silver", "Black", "Green"); // eyes
  } else if (race === "Wood Elf") {
    document.getElementById("form5_2").value = getRandomInt(100, 600); // age
    document.getElementById("form1_2").value = getRandomInt(65, 73); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
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
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
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
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Tan", "Light Tan", "Pale & Ruddy", "Light", "Fair"); // skin
    hair_randomizer("Brown", "Sandy Brown", "Dark Blond", "Auburn"); // hair
    weightRandomizerSmall(constitution, strength, 35, 39, 42, 44, 47, 50); // weight
    eye_randomizer("Brown", "Hazel", "Green", "Light Brown"); // eyes
    size = "small";
  } else if (race === "Stout Halfling") {
    document.getElementById("form5_2").value = getRandomInt(20, 100); // age
    document.getElementById("form1_2").value = getRandomInt(34, 43); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Pale", "Light Tan", "Pale & Ruddy", "Light", "Fair & Ruddy"); // skin
    hair_randomizer("Brown", "Sandy Brown", "Dark Brown", "Auburn"); // hair
    size = "small";
    weightRandomizerSmall(constitution, strength, 37, 41, 44, 46, 49, 52); // weight
    eye_randomizer("Brown", "Hazel", "Green", "Light Brown"); // eyes
  } else if (race === "Forest Gnome") {
    document.getElementById("form5_2").value = getRandomInt(40, 250); // age
    document.getElementById("form1_2").value = getRandomInt(34, 43); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Tan", "Light Tan", "Brown", "Dark Tan", "Light Brown"); // skin
    hair_randomizer("Blond", "Sandy Brown", "Dark Blond", "Light Brown"); // hair
    weightRandomizerSmall(constitution, strength, 35, 39, 42, 44, 47, 50); // weight
    eye_randomizer("Icy Blue", "Navy", "Pale Blue", "Bright Blue"); // eyes
    size = "small";
  } else if (race === "Rock Gnome") {
    document.getElementById("form5_2").value = getRandomInt(40, 250); // age
    document.getElementById("form1_2").value = getRandomInt(35, 45); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Tan", "Light Tan", "Brown", "Dark Tan", "Light Brown"); // skin
    hair_randomizer("Blond", "Sandy Brown", "Dark Blond", "Light Brown"); // hair
    weightRandomizerSmall(constitution, strength, 37, 41, 44, 46, 49, 52); // weight
    eye_randomizer("Icy Blue", "Navy", "Pale Blue", "Bright Blue"); // eyes
    size = "small";
  } else if (race === "Half-Elf") {
    document.getElementById("form5_2").value = getRandomInt(20, 120); // age
    document.getElementById("form1_2").value = getRandomInt(65, 74); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Copper", "Fair", "Pale", "Dark Tan", "Light Copper"); // skin
    hair_randomizer("Brownish Green", "Bluish Black", "Reddish White", "Silvery Blond"); // hair
    weightRandomizer(constitution, strength, 120, 130, 145, 165, 180, 205); // weight
    eye_randomizer("Gold", "Pink", "Lilac", "Green"); // eyes
  } else if (race === "Half-Orc") {
    document.getElementById("form5_2").value = getRandomInt(15, 40); // age
    document.getElementById("form1_2").value = getRandomInt(72, 85); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Grayish", "Grayish Green", "Gray", "Tannish Gray", "Grayish"); // skin
    hair_randomizer("Light Brown", "Black", "Auburn", "Dark Brown"); // hair
    weightRandomizer(constitution, strength, 170, 190, 210, 230, 250, 265); // weight
    eye_randomizer("Green", "Blue", "Brown", "Black"); // eyes
  } else if (race === "Tiefling") {
    document.getElementById("form5_2").value = getRandomInt(20, 55); // age
    document.getElementById("form1_2").value = getRandomInt(65, 74); // height
    document.getElementById("form1_2").value = Math.floor(document.getElementById("form1_2").value / 12) + "'" + document.getElementById("form1_2").value % 12; //height converter
    skinRandomizer("Brick Red", "Reddish Tan", "Maroon", "Blood Red", "Tawny Red"); // skin
    hair_randomizer("Dark Purple", "Black", "Dark Red", "Dark Blue"); // hair
    weightRandomizer(constitution, strength, 140, 160, 180, 200, 225, 245); // weight
    eye_randomizer("White", "Black", "Red", "Silver"); // eyes
  };

  // Function to determine a random con for the charlatan background
  function random_con() {
    random = Math.floor(Math.random() * 4);
    if (random === 0) {
      return "Ten stoppered bottles filled with colored liquid";
    } else if (random === 1) {
      return "Set of weighted dice";
    } else if (random === 2) {
      return "Deck of marked cards";
    } else if (random === 3) {
      return "Signet ring of an imaginary duke";
    }
  }

  // Function to determine a random gaming set
  function random_gaming_set_capitalize() {
    random = Math.floor(Math.random() * 4);
    if (random === 0) {
      return "Dice";
    } else if (random === 1) {
      return "Dragonchess";
    } else if (random === 2) {
      return "Playing cards";
    } else if (random === 3) {
      return "Three-dragon ante";
    }
  }

  // Function to determine a random trinket
  function random_trinket() {
    random = Math.floor(Math.random() * 20);
    if (random === 0) {
      return "Piece of crystal that faintly glows in the moonlight";
    } else if (random === 1) {
      return "Gold coin minted in an unknown land";
    } else if (random === 2) {
      return "Dragon's bony talon hanging from a plain leather necklace";
    } else if (random === 3) {
      return "Tiny silver icon of a raven";
    } else if (random === 4) {
      return "Old key";
    } else if (random === 5) {
      return "Silver skull the size of a coin";
    } else if (random === 6) {
      return "Set of bone pipes";
    } else if (random === 7) {
      return "Ancient arrow of elven design";
    } else if (random === 8) {
      return "Iron holy symbol devoted to an unknown God";
    } else if (random === 9) {
      return "Invitation to a party where a murder happened";
    } else if (random === 10) {
      return "Glass orb filled with moving smoke";
    } else if (random === 11) {
      return "Deed for a parcel of land in a realm unknown to you";
    } else if (random === 12) {
      return "Old chess piece made from unbreakable glass";
    } else if (random === 13) {
      return "Small wooden statuette of a smug halfling";
    } else if (random === 14) {
      return "Brass orb etched with strange runes";
    } else if (random === 15) {
      return "Shard of obsidian that always feels warm to the touch";
    } else if (random === 16) {
      return "Rectangular metal device with two tiny metal cups on one end that throws sparks when wet";
    } else if (random === 17) {
      return "Gemstone that looks like a lump of coal when examined by anyone but you";
    } else if (random === 18) {
      return "Whistle made from gold-colored wood";
    } else if (random === 19) {
      return "Indecipherable treasure map";
    }
  }

  // Function to determine a random favor from an admirer for entertainer background
  function random_favor_from_admirer() {
    random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return "Lover letter from an admirer";
    } else if (random === 1) {
      return "Lock of hair from an admirer";
    } else if (random === 2) {
      return random_trinket() + " from an admirer";
    }
  }

  // Function to determine a random artisan tool
  function random_artisan_tool() {
    random = Math.floor(Math.random() * 17);
    if (random === 0) {
      return "Alchemist's supplies";
    } else if (random === 1) {
      return "Brewer's supplies";
    } else if (random === 2) {
      return "Calligrapher's supplies";
    } else if (random === 3) {
      return "Carpenter's tools";
    } else if (random === 4) {
      return "Cartographer's tools";
    } else if (random === 5) {
      return "Cobbler's tools";
    } else if (random === 6) {
      return "Cook's utensils";
    } else if (random === 7) {
      return "Glassblower's tools";
    } else if (random === 8) {
      return "Jeweler's tools";
    } else if (random === 9) {
      return "Leatherworker's tools";
    } else if (random === 10) {
      return "Mason's tools";
    } else if (random === 11) {
      return "Painter's supplies";
    } else if (random === 12) {
      return "Potter's tools";
    } else if (random === 13) {
      return "Smith's tools";
    } else if (random === 14) {
      return "Tinker's tools";
    } else if (random === 15) {
      return "Weaver's tools";
    } else if (random === 16) {
      return "Woodcarver's tools";
    }
  }

  // Function to determine a random gaming set for soldier background
  function random_gaming_set_soldier() {
    random = Math.floor(Math.random() * 2);
    if (random === 0) {
      return "Dice";
    } else if (random === 1) {
      return "Playing Cards";
    }
  }

  // Function to determine a random trophy
  function random_trophy() {
    random = Math.floor(Math.random() * 4);
    if (random === 0) {
      return "Dagger from fallen enemy";
    } else if (random === 1) {
      return "Broken blade from fallen enemy";
    } else if (random === 2) {
      return "Piece of banner from fallen enemy";
    } else if (random === 3) {
      return random_trinket() + " from fallen enemy";
    }
  }

  // Function to determine a random flashy weapon for the gladiator background
  function random_gladiator_weapon() {
    random = Math.floor(Math.random() * 4);
    if (random === 0) {
      if (weaponAdder("trident") !== undefined) {
        weaponAdder2(weaponAdder("trident"));
        equipment.push("Trident");
      } else {
        return "Trident already added";
      }
    } else if (random === 1) {
      if (weaponAdder("net") !== undefined) {
        weaponAdder2(weaponAdder("net"));
        equipment.push("Net");
      } else {
        return "Net already added";
      }
    } else if (random === 2) {
      if (weaponAdder("sling") !== undefined) {
        weaponAdder2(weaponAdder("sling"));
        equipment.push("Sling");
      } else {
        return "Sling already added";
      }
    } else if (random === 3) {
      if (weaponAdder("whip") !== undefined) {
        weaponAdder2(weaponAdder("whip"));
        equipment.push("Whip");
      } else {
        return "Whip already added";
      }
    }
  }

  // Function to check random_gladiator_weapon()
  function random_gladiator_weapon_checker(variable) {
    if (variable === "Trident already added") {
      equipment.push("Trident");
    } else if (variable === "Net already added") {
      equipment.push("Net");
    } else if (variable === "Sling already added") {
      equipment.push("Sling");
    } else if (variable === "Whip already added") {
      equipment.push("Whip");
    } else {

    }
  }

  // Function to determine a random animal trophy for the outlander background
  function random_animal_trophy() {
    random = Math.floor(Math.random() * 8);
    if (random === 0) {
      return "Wolf fang trophy";
    } else if (random === 1) {
      return "Boar tusk trophy";
    } else if (random === 2) {
      return "Bear claw trophy";
    } else if (random === 3) {
      return "Eagle feather trophy";
    } else if (random === 4) {
      return "Small dragon tooth trophy";
    } else if (random === 5) {
      return "Bearskin cloak trophy";
    } else if (random === 6) {
      return "Wolf pelt trophy";
    } else if (random === 7) {
      return "Lion tooth necklace trophy";
    }
  }

  // Block that determines what equipment/languages/proficiencies/features you get for your background, and adds writing prompts to pg. 2
  if (newBackground1 === "Acolyte") {
    firstLanguage = random_language();
    firstLanguage = right_language();
    profsAndLangs.languages.push(firstLanguage);
    secondlanguage = random_language();
    secondlanguage = right_language();
    profsAndLangs.languages.push(secondlanguage);
    addClick(13);
    statChecker(wisdomModifier + 2, "form35_1");
    addClick(20);
    statChecker(intelligenceModifier + 2, "form33_1");
    equipment.push("A holy symbol");
    equipment.push("Prayer Book");
    equipment.push("5 sticks of incense");
    equipment.push("Vestments");
    equipment.push("Set of common clothes");
    equipment.push("Belt Pouch");
    gold += 15;
    features.push("Shelter of the Faithful: Can perform the religious ceremonies of your deity. Your adventuring party can expect to receive free healing and care at an establishment of your faith, though you must provide any material components needed for spells. Those who share your religion will support you at a modest lifestyle. While near your home establishment, you can call upon the priests for assistance, provided it is not hazardous.");
    document.getElementById("form15_2").value = "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhat caused you to become an acolyte?\rWhat deity do you serve?\rWhere was your temple/monastery?\rWhy did you learn those languages?\rWhy are you a " + className.toLowerCase() + "?\r" + "How did you go from acolyte to " + className.toLowerCase() + "?\r" + "What does being a " + race + " mean to you?";
  } else if (newBackground1 === "Charlatan") {
    toolAdder2(toolAdder("disguise kit"));
    toolAdder2(toolAdder("forgery kit"));
    addClick(17);
    statChecker(charismaModifier + 2, "form36_1");
    addClick(4);
    statChecker(dexterityModifier + 2, "form46_1");
    equipment.push("Disguise kit");
    equipment.push(random_con());
    equipment.push("Set of fine clothes");
    equipment.push("Belt Pouch");
    gold += 15;
    features.push("False Identity: You have a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy.");
    document.getElementById("form15_2").value = "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhat caused you to become a charlatan?\rWhat is your choice ploy?\rWhat was your biggest trick at?\rWhy are you a " + className.toLowerCase() + "?\r" + "How did you go from charlatan to " + className.toLowerCase() + "?\r" + "What does being a " + race + " mean to you?\r" + "Are you still duping people, if not, why the change of heart?";
  } else if (newBackground1 === "Criminal") {
    toolAdder2(toolAdder("thieves' tools"));
    toolAdder2(toolAdder(random_gaming_set_capitalize().toLowerCase()));
    addClick(17);
    statChecker(charismaModifier + 2, "form36_1");
    addClick(23);
    statChecker(dexterityModifier + 2, "form32_1");
    equipment.push("Crowbar");
    equipment.push("Set of dark common clothes with a hood");
    equipment.push("Belt Pouch");
    gold += 15;
    features.push("Criminal Contact: You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.");
    document.getElementById("form15_2").value = "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhat caused you to become a criminal?\rWhat kind of criminal were you?\rDid you do anything terrible?\rWho is your criminal contact?\rWhy are you a " + className.toLowerCase() + "?\r" + "How did you go from criminal to " + className.toLowerCase() + "?\r" + "What does being a " + race + " mean to you?\r" + "Are you still breaking the law, if not, why the change of heart?";
  } else if (newBackground1 === "Entertainer") {
    musicalinstrument = randomMusicalInstrument();
    toolAdder2(toolAdder(musicalinstrument.toLowerCase()));
    toolAdder2(toolAdder("disguise kit"));
    addClick(19);
    statChecker(dexterityModifier + 2, "form38_1");
    addClick(16);
    statChecker(charismaModifier + 2, "form34_1");
    equipment.push(musicalinstrument);
    equipment.push("Costume");
    document.getElementById("form14_2").value = random_favor_from_admirer();
    equipment.push("Belt Pouch");
    gold += 15;
    features.push("By Popular Demand: You can always find a place to perform. At that place, you receive free lodging and food of a modest or comfortable standard, as long as you perform each night. Your performance also makes you something of a local figure, when recognized, they typically take a liking to you.");
    document.getElementById("form15_2").value = "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhat caused you to become an entertainer?\rHow did you entertain?\rDo you still have any contacts or people you know from performing?\rWhy are you a " + className.toLowerCase() + "?\r" + "How did you go from entertainer to " + className.toLowerCase() + "?\r" + "What does being a " + race + " mean to you?";
  } else if (newBackground1 === "Folk Hero") {
    artisantool = random_artisan_tool();
    toolAdder2(toolAdder(artisantool.toLowerCase()));
    toolAdder2(toolAdder("land vehicles"));
    addClick(8);
    statChecker(wisdomModifier + 2, "form50_1");
    addClick(12);
    statChecker(wisdomModifier + 2, "form47_1");
    equipment.push(artisantool);
    equipment.push("Shovel");
    equipment.push("Iron pot");
    equipment.push("Set of common clothes");
    equipment.push("Belt Pouch");
    gold += 10;
    features.push("Rustic Hospitality: Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you.");
    document.getElementById("form15_2").value = "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhat made you famous to your people?\rWhy did you leave them?\rWhy are you a " + className.toLowerCase() + "?\r" + "How did you go from folk hero to " + className.toLowerCase() + "?\r" + "What does being a " + race + " mean to you?";
  } else if (newBackground1 === "Gladiator") {
    gladiatorWeapon = random_gladiator_weapon();
    random_gladiator_weapon_checker(gladiatorWeapon);
    toolAdder2(toolAdder("disguise kit"));
    addClick(19);
    statChecker(dexterityModifier + 2, "form38_1");
    addClick(16);
    statChecker(charismaModifier + 2, "form34_1");
    equipment.push("Costume");
    equipment.push("Belt Pouch");
    gold += 15;
    features.push("By Popular Demand: Can always find a place to perform that is combat-centered. At that place, receive free lodging and food of a modest or comfortable standard, as long as you perform each night. Your performance makes you something of a local figure, when recognized, persons typically take a liking to you.");
    document.getElementById("form15_2").value = "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhy did you become a gladiator?\rWas it slavery?\rWas it money?\rWas it family?\rWhy are you a " + className.toLowerCase() + "?\r" + "How did you go from gladiator to " + className.toLowerCase() + "?\r" + "What does being a " + race + " mean to you?";
  } else if (newBackground1 === "Guild Artisan") {
    firstLanguage = random_language();
    firstLanguage = right_language();
    profsAndLangs.languages.push(firstLanguage);
    artisantool = random_artisan_tool();
    toolAdder2(toolAdder(artisantool.toLowerCase()));
    addClick(13);
    statChecker(wisdomModifier + 2, "form35_1");
    addClick(1);
    statChecker(charismaModifier + 2, "form45_1");
    equipment.push(artisantool);
    equipment.push("Guild introduction letter");
    equipment.push("Set of traveler's clothes");
    equipment.push("Belt Pouch");
    gold += 15;
    features.push("Guild Membership: Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral. If accused of a crime, your guild will support you if innocent or have just cause. 5Gp/month for membership, benefits only if you pay on time.");
    document.getElementById("form15_2").value = "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhy did you become an artisan?\rWhy did you choose your artistry?\rWhat's your guilds name?\rWas it money?\rWas it passion?\rWas it the family business?\rWhy are you a " + className.toLowerCase() + "?\r" + "How did you go from guild artisan to " + className.toLowerCase() + "?\r" + "What does being a " + race + " mean to you?";
  } else if (newBackground1 === "Guild Merchant") {
    firstLanguage = random_language();
    firstLanguage = right_language();
    profsAndLangs.languages.push(firstLanguage);
    secondlanguage = random_language();
    secondlanguage = right_language();
    profsAndLangs.languages.push(secondlanguage);
    addClick(13);
    statChecker(wisdomModifier + 2, "form35_1");
    addClick(1);
    statChecker(charismaModifier + 2, "form45_1");
    equipment.push("Guild introduction letter");
    equipment.push("Set of traveler's clothes");
    equipment.push("Belt Pouch");
    equipment.push("Mule");
    equipment.push("Cart");
    gold += 15;
    features.push("Guild Membership: Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral. If accused of a crime, your guild will support you if innocent or have just cause. 5Gp/month for membership, benefits only if you pay on time.");
    document.getElementById("form15_2").value = "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhy did you become a merchant?\rWhy did you choose your artistry?\rWhat's your guilds name?\rWas it money?\rWas it passion for trade or meeting new people?\rWas it the family business?\rWhy are you a " + className.toLowerCase() + "?\r" + "How did you go from guild merchant to " + className.toLowerCase() + "?\r" + "What does being a " + race + " mean to you?";
  } else if (newBackground1 === "Hermit") {
    firstLanguage = random_language();
    firstLanguage = right_language();
    profsAndLangs.languages.push(firstLanguage);
    toolAdder2(toolAdder("herbalism kit"));
    addClick(5);
    statChecker(wisdomModifier + 2, "form53_1");
    addClick(20);
    statChecker(intelligenceModifier + 2, "form33_1");
    equipment.push("Scroll case stuffed full of notes from your studies");
    equipment.push("Winter blanket");
    equipment.push("Set of common clothes");
    equipment.push("Herbalism kit");
    gold += 5;
    features.push("Discovery: The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery.");
    document.getElementById("form15_2").value = "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhere were you secluded at?\rDid you travel a lot?\rWhat's your big discovery? Talk it over with your DM as well.\rWhy are you a " + className.toLowerCase() + "?\r" + "How did you go from hermit to " + className.toLowerCase() + "?\r" + "What does being a " + race + " mean to you?";
  } else if (newBackground1 === "Knight") {
    firstLanguage = random_language();
    firstLanguage = right_language();
    profsAndLangs.languages.push(firstLanguage);
    toolAdder2(toolAdder(random_gaming_set_capitalize().toLowerCase()));
    addClick(9);
    statChecker(intelligenceModifier + 2, "form48_1");
    addClick(1);
    statChecker(charismaModifier + 2, "form45_1");
    bonds.splice(0, 1);
    bonds.push("I have an emblem of chivalry and chastity from a noble lady.");
    equipment.push("Emblem of chivalry");
    equipment.push("Signet ring");
    equipment.push("Scroll of pedigree");
    equipment.push("Set of fine clothes");
    equipment.push("Purse");
    gold += 25;
    features.push("Retainer: You have three retainers loyal to your family. These retainers are a noble-born squire, a groom for your horse, and a servant for mundane tasks. Your retainers are people who can perform tasks for you, but they do not fight for you, will not follow you into dangerous areas, and will leave if they are frequently endangered or abused.");
    document.getElementById("form15_2").value = "What made you start adventuring?\rWhat were the circumstances of your birth?\rWho is your family?\rAre there any famous persons in it, or is your family famous for something in particular?\rWho is the woman you recieved the emblem of chivalry from?.\rWhy are you a " + className.toLowerCase() + "?\r" + "How did you go from knight to " + className.toLowerCase() + "?\r" + "What does being a " + race + " mean to you?";
  } else if (newBackground1 === "Noble") {
    firstLanguage = random_language();
    firstLanguage = right_language();
    profsAndLangs.languages.push(firstLanguage);
    toolAdder2(toolAdder(random_gaming_set_capitalize().toLowerCase()));
    addClick(9);
    statChecker(intelligenceModifier + 2, "form48_1");
    addClick(1);
    statChecker(charismaModifier + 2, "form45_1");
    equipment.push("Signet ring");
    equipment.push("Scroll of pedigree");
    equipment.push("Set of fine clothes");
    equipment.push("Purse");
    gold += 25;
    features.push("Position of Privilege: You are welcome in high society, and people assume you have the right to be wherever you are. The common folk and merchants make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to.");
    document.getElementById("form15_2").value = "What made you start adventuring?\rWhat were the circumstances of your birth?\rWho is your family?\rAre there any famous persons in it, or is your family famous for something in particular?\rWhy are you a " + className.toLowerCase() + "?\r" + "How did you go from noble to " + className.toLowerCase() + "?\r" + "What does being a " + race + " mean to you?";
  } else if (newBackground1 === "Outlander") {
    musicalinstrument = randomMusicalInstrument();
    toolAdder2(toolAdder(musicalinstrument.toLowerCase()));
    addClick(2);
    statChecker(strengthModifier + 2, "form49_1");
    addClick(12);
    statChecker(wisdomModifier + 2, "form47_1");
    equipment.push("Staff");
    equipment.push("Hunting Trap");
    equipment.push(random_animal_trophy());
    equipment.push("Set of traveler's clothes");
    equipment.push("Belt Pouch");
    gold += 10;
    features.push("Wanderer: You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth.");
    document.getElementById("form15_2").value = "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhere were you at?\rDid you travel a lot?\rWhat's the story behind your animal trophy?\rWhy are you a " + className.toLowerCase() + "?\r" + "How did you go from outlander to " + className.toLowerCase() + "?\r" + "What does being a " + race + " mean to you?";
  } else if (newBackground1 === "Pirate") {
    toolAdder2(toolAdder("navigator's tools"));
    toolAdder2(toolAdder("water vehicles"));
    addClick(2);
    statChecker(strengthModifier + 2, "form49_1");
    addClick(7);
    statChecker(wisdomModifier + 2, "form43_1");
    equipment.push("Club");
    equipment.push("50 feet of silk rope");
    document.getElementById("form14_2").value = random_trinket();
    equipment.push("Set of common clothes");
    equipment.push("Belt Pouch");
    gold += 10;
    features.push("Bad Reputation: No matter where you go, people are afraid of you due to your reputation. When you are in a civilized settlement, you can get away with minor criminal offenses, such as refusing to pay for food at a tavern or breaking down doors at a local shop, since most people will not report your activity to the authorities.");
    document.getElementById("form15_2").value = "What made you start adventuring?\rWhat were the circumstances of your birth?\rHow did you become a pirate?\rDid you have a seaport that was your home?\rDo you still keep in contact with your shipmates?\rWhy are you a " + className.toLowerCase() + "?\r" + "How did you go from pirate to " + className.toLowerCase() + "?\r" + "What does being a " + race + " mean to you?\r" + "Why aren't you a pirate still?";
  } else if (newBackground1 === "Sage") {
    firstLanguage = random_language();
    firstLanguage = right_language();
    profsAndLangs.languages.push(firstLanguage);
    secondlanguage = random_language();
    secondlanguage = right_language();
    profsAndLangs.languages.push(secondlanguage);
    addClick(21);
    statChecker(intelligenceModifier + 2, "form40_1");
    addClick(9);
    statChecker(intelligenceModifier + 2, "form48_1");
    equipment.push("Bottle of black ink");
    equipment.push("Quill");
    equipment.push("Small knife");
    equipment.push("Letter from dead colleague");
    equipment.push("Set of common clothes");
    equipment.push("Belt pouch");
    gold += 10;
    features.push("Researcher: When you attempt to learn or recall a piece of lore, if you do not know that information, you often know where and from whom you can obtain it. Usually, this information comes from a library, scriptorium, university, or a sage or other learned person or creature.");
    document.getElementById("form15_2").value = "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhat were you spending all that time studying?\rWhat does the letter from your dead colleague say?\rWhy did you learn those languages?\rWhy are you a " + className.toLowerCase() + "?\r" + "How did you go from sage to " + className.toLowerCase() + "?\r" + "What does being a " + race + " mean to you?";
  } else if (newBackground1 === "Sailor") {
    toolAdder2(toolAdder("navigator's tools"));
    toolAdder2(toolAdder("water vehicles"));
    addClick(2);
    statChecker(strengthModifier + 2, "form49_1");
    addClick(7);
    statChecker(wisdomModifier + 2, "form43_1");
    equipment.push("Club");
    equipment.push("50 feet of silk rope");
    document.getElementById("form14_2").value = random_trinket();
    equipment.push("Set of common clothes");
    equipment.push("Belt Pouch");
    gold += 10;
    features.push("Ship's Passage: You can secure free passage on a sailing ship for yourself and your adventuring companions. You might sail on the ship you served on, or another ship you have good relations with. In return for your free passage, you and your companions are expected to assist the crew during the voyage.");
    document.getElementById("form15_2").value = "What made you start adventuring?\rWhat were the circumstances of your birth?\rHow did you become a sailor?\rDid you have a seaport that was your home?\rDo you still keep in contact with your shipmates?\rWhy are you a " + className.toLowerCase() + "?\r" + "How did you go from sailor to " + className.toLowerCase() + "?\r" + "What does being a " + race + " mean to you?\r";
  } else if (newBackground1 === "Soldier") {
    soldierGamingSet = random_gaming_set_soldier();
    toolAdder2(toolAdder(soldierGamingSet.toLowerCase()));
    toolAdder2(toolAdder("land vehicles"));
    addClick(2);
    statChecker(strengthModifier + 2, "form49_1");
    addClick(24);
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
    gold += 10;
    features.push("Military Rank: Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. Can gain access to friendly military encampments and fortresses where your rank is recognized.");
    document.getElementById("form15_2").value = "What made you start adventuring?\rWhat were the circumstances of your birth?\rHow did you become a soldier?\rWhat rank were you?\rDo you still keep in contact with any of your brothers and sisters in arms?\rWhy are you a " + className.toLowerCase() + "?\r" + "How did you go from soldier to " + className.toLowerCase() + "?\r" + "What does being a " + race + " mean to you?\r";
  } else if (newBackground1 === "Spy") {
    toolAdder2(toolAdder("thieves' tools"));
    toolAdder2(toolAdder(random_gaming_set_capitalize().toLowerCase()));
    addClick(17);
    statChecker(charismaModifier + 2, "form36_1");
    addClick(23);
    statChecker(dexterityModifier + 2, "form32_1");
    equipment.push("Crowbar");
    equipment.push("Set of dark common clothes with a hood");
    equipment.push("Belt Pouch");
    gold += 15;
    features.push("Spy Contact: You have a reliable and trustworthy contact who acts as your liaison to a network of other spies or criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you.");
    document.getElementById("form15_2").value = "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhat caused you to become a spy?\rDid you do anything terrible?\rWho is your spy contact?\rWhy are you a " + className.toLowerCase() + "?\r" + "How did you go from spy to " + className.toLowerCase() + "?\r" + "What does being a " + race + " mean to you?\r" + "Who did you work for when you were a spy?";
  } else if (newBackground1 === "Urchin") {
    toolAdder2(toolAdder("disguise kit"));
    toolAdder2(toolAdder("thieves' tools"));
    addClick(4);
    statChecker(dexterityModifier + 2, "form46_1");
    addClick(23);
    statChecker(dexterityModifier + 2, "form32_1");
    equipment.push("Small knife");
    equipment.push("Map of hometown");
    equipment.push("Pet mouse");
    document.getElementById("form14_2").value = random_trinket() + " from parents";
    equipment.push("Set of common clothes");
    equipment.push("Belt Pouch");
    gold += 10;
    features.push("City Secrets: You know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow.");
    document.getElementById("form15_2").value = "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhat caused you to become an urchin?\rDid someone wrong you?\rAre you an orphan?\rDid your family's jobs fall through?\rWhy are you a " + className.toLowerCase() + "?\r" + "How did you go from urchin to " + className.toLowerCase() + "?\r" + "What does being a " + race + " mean to you?\r";
  }
  // Block to give a Half-Elf two random skills based on the most useful
  if (race === "Half-Elf") {
    skill_adder();
    skill_adder();
  }

  // Function to determine what proficiencies a character gets based on their class and their proficiencies they already have
  function class_proficiencies() {
    if (classAndLevel === "Barbarian 1") {
      while (classCounter < 2) {
        random = Math.floor(Math.random() * 6);
        if (random === 0 && document.getElementById("form7_1").checked === undefined) {
          addClick(7);
          statChecker(wisdomModifier + 2, "form43_1"); // perception
          classCounter++;
        } else if (random === 1 && document.getElementById("form2_1").checked === undefined) {
          addClick(2);
          statChecker(strengthModifier + 2, "form49_1"); // athletics
          classCounter++;
        } else if (random === 2 && document.getElementById("form12_1").checked === undefined) {
          addClick(12);
          statChecker(wisdomModifier + 2, "form47_1"); // survival
          classCounter++;
        } else if (random === 3 && document.getElementById("form24_1").checked === undefined) {
          addClick(24);
          statChecker(charismaModifier + 2, "form44_1"); // intimidation
          classCounter++;
        } else if (random === 4 && document.getElementById("form8_1").checked === undefined) {
          addClick(8);
          statChecker(wisdomModifier + 2, "form50_1"); // animal handling
          classCounter++;
        } else if (random === 5 && document.getElementById("form11_1").checked === undefined) {
          addClick(11);
          statChecker(intelligenceModifier + 2, "form37_1"); // nature
          classCounter++;
        }
      }
    } else if (classAndLevel === "Fighter 1") {
      while (classCounter < 2) {
        random = Math.floor(Math.random() * 8);
        if (random === 0 && document.getElementById("form7_1").checked === undefined) {
          addClick(7);
          statChecker(wisdomModifier + 2, "form43_1"); // perception
          classCounter++;
        } else if (random === 1 && document.getElementById("form2_1").checked === undefined) {
          addClick(2);
          statChecker(strengthModifier + 2, "form49_1"); // athletics
          classCounter++;
        } else if (random === 2 && document.getElementById("form12_1").checked === undefined) {
          addClick(12);
          statChecker(wisdomModifier + 2, "form47_1"); // survival
          classCounter++;
        } else if (random === 3 && document.getElementById("form24_1").checked === undefined) {
          addClick(24);
          statChecker(charismaModifier + 2, "form44_1"); // intimidation
          classCounter++;
        } else if (random === 4 && document.getElementById("form9_1").checked === undefined) {
          addClick(9);
          statChecker(intelligenceModifier + 2, "form48_1"); // history
          classCounter++;
        } else if (random === 5 && document.getElementById("form8_1").checked === undefined) {
          addClick(8);
          statChecker(wisdomModifier + 2, "form50_1"); // animal handling
          classCounter++;
        } else if (random === 6 && document.getElementById("form13_1").checked === undefined) {
          addClick(13);
          statChecker(wisdomModifier + 2, "form35_1"); // insight
          classCounter++;
        } else if (random === 7 && document.getElementById("form19_1").checked === undefined) {
          addClick(19);
          statChecker(dexterityModifier + 2, "form38_1"); // acrobatics
          classCounter++;
        }
      }
    } else if (classAndLevel === "Bard 1") {
      for (i = 0; i < 2; i++) {
        skill_adder();
      }
    } else if (classAndLevel === "Cleric 1") {
      while (classCounter < 2) {
        random = Math.floor(Math.random() * 5);
        if (random === 0 && document.getElementById("form5_1").checked === undefined) {
          addClick(5);
          statChecker(wisdomModifier + 2, "form53_1"); // medicine
          classCounter++;
        } else if (random === 1 && document.getElementById("form9_1").checked === undefined) {
          addClick(9);
          statChecker(intelligenceModifier + 2, "form48_1"); // history
          classCounter++;
        } else if (random === 2 && document.getElementById("form20_1").checked === undefined) {
          addClick(20);
          statChecker(intelligenceModifier + 2, "form33_1"); // religion
          classCounter++;
        } else if (random === 3 && document.getElementById("form13_1").checked === undefined) {
          addClick(13);
          statChecker(wisdomModifier + 2, "form35_1"); // insight
          classCounter++;
        } else if (random === 4 && document.getElementById("form1_1").checked === undefined) {
          addClick(1);
          statChecker(charismaModifier + 2, "form45_1"); // persuasion
          classCounter++;
        }
      }
    } else if (classAndLevel === "Sorcerer 1") {
      while (classCounter < 2) {
        random = Math.floor(Math.random() * 6);
        if (random === 0 && document.getElementById("form21_1").checked === undefined) {
          addClick(21);
          statChecker(intelligenceModifier + 2, "form40_1"); // arcana
          classCounter++;
        } else if (random === 1 && document.getElementById("form24_1").checked === undefined) {
          addClick(24);
          statChecker(charismaModifier + 2, "form44_1"); // intimidation
          classCounter++;
        } else if (random === 2 && document.getElementById("form20_1").checked === undefined) {
          addClick(20);
          statChecker(intelligenceModifier + 2, "form33_1"); // religion
          classCounter++;
        } else if (random === 3 && document.getElementById("form13_1").checked === undefined) {
          addClick(13);
          statChecker(wisdomModifier + 2, "form35_1"); // insight
          classCounter++;
        } else if (random === 4 && document.getElementById("form1_1").checked === undefined) {
          addClick(1);
          statChecker(charismaModifier + 2, "form45_1"); // persuasion
          classCounter++;
        } else if (random === 5 && document.getElementById("form17_1").checked === undefined) {
          addClick(17);
          statChecker(charismaModifier + 2, "form36_1"); // deception
          classCounter++;
        }
      }
    } else if (classAndLevel === "Wizard 1") {
      while (classCounter < 2) {
        random = Math.floor(Math.random() * 6);
        if (random === 0 && document.getElementById("form21_1").checked === undefined) {
          addClick(21);
          statChecker(intelligenceModifier + 2, "form40_1"); // arcana
          classCounter++;
        } else if (random === 1 && document.getElementById("form14_1").checked === undefined) {
          addClick(14);
          statChecker(intelligenceModifier + 2, "form31_1"); // investigation
          classCounter++;
        } else if (random === 2 && document.getElementById("form20_1").checked === undefined) {
          addClick(20);
          statChecker(intelligenceModifier + 2, "form33_1"); // religion
          classCounter++;
        } else if (random === 3 && document.getElementById("form13_1").checked === undefined) {
          addClick(13);
          statChecker(wisdomModifier + 2, "form35_1"); // insight
          classCounter++;
        } else if (random === 4 && document.getElementById("form1_1").checked === undefined) {
          addClick(1);
          statChecker(charismaModifier + 2, "form45_1"); // persuasion
          classCounter++;
        } else if (random === 5 && document.getElementById("form5_1").checked === undefined) {
          addClick(5);
          statChecker(wisdomModifier + 2, "form53_1"); // medicine
          classCounter++;
        }
      }
    } else if (classAndLevel === "Druid 1") {
      while (classCounter < 2) {
        random = Math.floor(Math.random() * 8);
        if (random === 0 && document.getElementById("form21_1").checked === undefined) {
          addClick(21);
          statChecker(intelligenceModifier + 2, "form40_1"); // arcana
          classCounter++;
        } else if (random === 1 && document.getElementById("form14_1").checked === undefined) {
          addClick(14);
          statChecker(intelligenceModifier + 2, "form31_1"); // investigation
          classCounter++;
        } else if (random === 2 && document.getElementById("form20_1").checked === undefined) {
          addClick(20);
          statChecker(intelligenceModifier + 2, "form33_1"); // religion
          classCounter++;
        } else if (random === 3 && document.getElementById("form13_1").checked === undefined) {
          addClick(13);
          statChecker(wisdomModifier + 2, "form35_1"); // insight
          classCounter++;
        } else if (random === 4 && document.getElementById("form7_1").checked === undefined) {
          addClick(7);
          statChecker(wisdomModifier + 2, "form43_1"); // perception
          classCounter++;
        } else if (random === 5 && document.getElementById("form5_1").checked === undefined) {
          addClick(5);
          statChecker(wisdomModifier + 2, "form53_1"); // medicine
          classCounter++;
        } else if (random === 6 && document.getElementById("form11_1").checked === undefined) {
          addClick(11);
          statChecker(intelligenceModifier + 2, "form37_1"); // nature
          classCounter++;
        } else if (random === 7 && document.getElementById("form12_1").checked === undefined) {
          addClick(12);
          statChecker(wisdomModifier + 2, "form47_1"); // survival
          classCounter++;
        }
      }
    } else if (classAndLevel === "Rogue 1") {
      while (classCounter < 4) {
        random = Math.floor(Math.random() * 11);
        if (random === 0 && document.getElementById("form7_1").checked === undefined) {
          addClick(7);
          statChecker(wisdomModifier + 2, "form43_1"); // perception
          classCounter++;
        } else if (random === 1 && document.getElementById("form23_1").checked === undefined) {
          addClick(23);
          statChecker(dexterityModifier + 2, "form32_1"); // stealth
          classCounter++;
        } else if (random === 2 && document.getElementById("form2_1").checked === undefined) {
          addClick(2);
          statChecker(strengthModifier + 2, "form49_1"); // athletics
          classCounter++;
        } else if (random === 3 && document.getElementById("form19_1").checked === undefined) {
          addClick(19);
          statChecker(dexterityModifier + 2, "form38_1"); // acrobatics
          classCounter++;
        } else if (random === 4 && document.getElementById("form17_1").checked === undefined) {
          addClick(17);
          statChecker(charismaModifier + 2, "form36_1"); // deception
          classCounter++;
        } else if (random === 5 && document.getElementById("form4_1").checked === undefined) {
          addClick(4);
          statChecker(dexterityModifier + 2, "form46_1"); // sleight of hand
          classCounter++;
        } else if (random === 6 && document.getElementById("form14_1").checked === undefined) {
          addClick(14);
          statChecker(intelligenceModifier + 2, "form31_1"); // investigation
          classCounter++;
        } else if (random === 7 && document.getElementById("form1_1").checked === undefined) {
          addClick(1);
          statChecker(charismaModifier + 2, "form45_1"); // persuasion
          classCounter++;
        } else if (random === 8 && document.getElementById("form16_1").checked === undefined) {
          addClick(16);
          statChecker(charismaModifier + 2, "form34_1"); // performance
          classCounter++;
        } else if (random === 9 && document.getElementById("form12_1").checked === undefined) {
          addClick(12);
          statChecker(wisdomModifier + 2, "form47_1"); // survival
          classCounter++;
        } else if (random === 10 && document.getElementById("form13_1").checked === undefined) {
          addClick(13);
          statChecker(wisdomModifier + 2, "form35_1"); // insight
          classCounter++;
        }
      }
    } else if (classAndLevel === "Warlock 1") {
      while (classCounter < 2) {
        random = Math.floor(Math.random() * 7);
        if (random === 0 && document.getElementById("form21_1").checked === undefined) {
          addClick(21);
          statChecker(intelligenceModifier + 2, "form40_1"); // arcana
          classCounter++;
        } else if (random === 1 && document.getElementById("form24_1").checked === undefined) {
          addClick(24);
          statChecker(charismaModifier + 2, "form44_1"); // intimidation
          classCounter++;
        } else if (random === 2 && document.getElementById("form20_1").checked === undefined) {
          addClick(20);
          statChecker(intelligenceModifier + 2, "form33_1"); // religion
          classCounter++;
        } else if (random === 3 && document.getElementById("form11_1").checked === undefined) {
          addClick(11);
          statChecker(intelligenceModifier + 2, "form37_1"); // nature
          classCounter++;
        } else if (random === 4 && document.getElementById("form17_1").checked === undefined) {
          addClick(17);
          statChecker(charismaModifier + 2, "form36_1"); // deception
          classCounter++;
        } else if (random === 5 && document.getElementById("form14_1").checked === undefined) {
          addClick(14);
          statChecker(intelligenceModifier + 2, "form31_1"); // investigation
          classCounter++;
        } else if (random === 6 && document.getElementById("form9_1").checked === undefined) {
          addClick(9);
          statChecker(intelligenceModifier + 2, "form48_1"); // history
          classCounter++;
        }
      }
    } else if (classAndLevel === "Ranger 1") {
      while (classCounter < 3) {
        random = Math.floor(Math.random() * 8);
        if (random === 0 && document.getElementById("form7_1").checked === undefined) {
          addClick(7);
          statChecker(wisdomModifier + 2, "form43_1"); // perception
          classCounter++;
        } else if (random === 1 && document.getElementById("form13_1").checked === undefined) {
          addClick(13);
          statChecker(wisdomModifier + 2, "form35_1"); // insight
          classCounter++;
        } else if (random === 2 && document.getElementById("form2_1").checked === undefined) {
          addClick(2);
          statChecker(strengthModifier + 2, "form49_1"); // athletics
          classCounter++;
        } else if (random === 3 && document.getElementById("form11_1").checked === undefined) {
          addClick(11);
          statChecker(intelligenceModifier + 2, "form37_1"); // nature
          classCounter++;
        } else if (random === 4 && document.getElementById("form23_1").checked === undefined) {
          addClick(23);
          statChecker(dexterityModifier + 2, "form32_1"); // stealth
          classCounter++;
        } else if (random === 5 && document.getElementById("form14_1").checked === undefined) {
          addClick(14);
          statChecker(intelligenceModifier + 2, "form31_1"); // investigation
          classCounter++;
        } else if (random === 6 && document.getElementById("form12_1").checked === undefined) {
          addClick(12);
          statChecker(wisdomModifier + 2, "form47_1"); // survival
          classCounter++;
        } else if (random === 7 && document.getElementById("form8_1").checked === undefined) {
          addClick(8);
          statChecker(wisdomModifier + 2, "form50_1"); // animal handling
          classCounter++;
        }
      }
    } else if (classAndLevel === "Paladin 1") {
      while (classCounter < 2) {
        random = Math.floor(Math.random() * 6);
        if (random === 0 && document.getElementById("form20_1").checked === undefined) {
          addClick(20);
          statChecker(intelligenceModifier + 2, "form33_1"); // religion
          classCounter++;
        } else if (random === 1 && document.getElementById("form13_1").checked === undefined) {
          addClick(13);
          statChecker(wisdomModifier + 2, "form35_1"); // insight
          classCounter++;
        } else if (random === 2 && document.getElementById("form2_1").checked === undefined) {
          addClick(2);
          statChecker(strengthModifier + 2, "form49_1"); // athletics
          classCounter++;
        } else if (random === 3 && document.getElementById("form24_1").checked === undefined) {
          addClick(24);
          statChecker(charismaModifier + 2, "form44_1"); // intimidation
          classCounter++;
        } else if (random === 4 && document.getElementById("form1_1").checked === undefined) {
          addClick(1);
          statChecker(charismaModifier + 2, "form45_1"); // persuasion
          classCounter++;
        } else if (random === 5 && document.getElementById("form5_1").checked === undefined) {
          addClick(5);
          statChecker(wisdomModifier + 2, "form53_1"); // medicine
          classCounter++;
        }
      }
    } else if (classAndLevel === "Monk 1") {
      while (classCounter < 2) {
        random = Math.floor(Math.random() * 6);
        if (random === 0 && document.getElementById("form20_1").checked === undefined) {
          addClick(20);
          statChecker(intelligenceModifier + 2, "form33_1"); // religion
          classCounter++;
        } else if (random === 1 && document.getElementById("form13_1").checked === undefined) {
          addClick(13);
          statChecker(wisdomModifier + 2, "form35_1"); // insight
          classCounter++;
        } else if (random === 2 && document.getElementById("form2_1").checked === undefined) {
          addClick(2);
          statChecker(strengthModifier + 2, "form49_1"); // athletics
          classCounter++;
        } else if (random === 3 && document.getElementById("form19_1").checked === undefined) {
          addClick(19);
          statChecker(dexterityModifier + 2, "form38_1"); // acrobatics
          classCounter++;
        } else if (random === 4 && document.getElementById("form23_1").checked === undefined) {
          addClick(23);
          statChecker(dexterityModifier + 2, "form32_1"); // stealth
          classCounter++;
        } else if (random === 5 && document.getElementById("form9_1").checked === undefined) {
          addClick(9);
          statChecker(intelligenceModifier + 2, "form48_1"); // history
          classCounter++;
        }
      }
    }
  };

  // Block that determines what equipment you get based on class
  equipmentChooser(classAndLevel);

  // Variable that holds your character name
  charName = nameGenerator.CreateNewName(finalFirstName, finalLastName);

  // Variable that holds the name of the player
  name = "Your name";

  // Pushes string to alliesAndOrganizations as a writing prompt
  alliesAndOrganizations.push("Friends? Family? Guild? Crew? Brothers in arms? Priests? Orphans? Good monsters? Lovers? Deities? Rivals? Enemies? Complicated relationships? Party members?");

  // Block of arrays that makes new arrays with commas between them
  newLangs = profsAndLangs.languages.join(', ');
  newWeaponProfs = profsAndLangs.weaponProficiencies.join(', ');
  newArmorProfs = profsAndLangs.armorProficiencies.join(', ');
  newToolProfs = profsAndLangs.toolProficiencies.join(', ');

  // Function to determine if an array is empty
  function determine_if_empty(array) {
    if (array.length === 0) {
      return "none";
    } else {
      return array;
    }
  }

  //Block of arrays that makes new arrays with the sections at the start
  finalLanguages = "Languages: " + determine_if_empty(newLangs);
  finalweaponProficiencies = "Weapon Proficiencies: " + determine_if_empty(newWeaponProfs);
  finalarmorProficiencies = "Armor Proficiencies: " + determine_if_empty(newArmorProfs);
  finaltoolProficiencies = "Tool Proficiencies: " + determine_if_empty(newToolProfs);

  // Pushes arrays to proficienciesAndLanguages
  proficienciesAndLanguages.push(finalLanguages);
  proficienciesAndLanguages.push(finalweaponProficiencies);
  proficienciesAndLanguages.push(finalarmorProficiencies);
  proficienciesAndLanguages.push(finaltoolProficiencies);

  function spellAdder(classSpellArray, modifier) {
    if (modifier < 0) {
      for (let i = classSpellArray.length; i > 1; --i) {
        classSpellArray.splice(Math.floor(Math.random() * classSpellArray.length), 1);
      }
      for (let i2 = 0; i2 < 1; i2++) {
        if (classSpellArray === clericSpells) {
          document.getElementById(spellForms[i2 + 2]).value = classSpellArray[i2];
        } else {
          document.getElementById(spellForms[i2]).value = classSpellArray[i2];
        }
      }
    } else {
      for (let i = classSpellArray.length; i > modifier + 1; --i) {
        classSpellArray.splice(Math.floor(Math.random() * classSpellArray.length), 1);
      }
      for (let i2 = 0; i2 < modifier + 1; i2++) {
        if (classSpellArray === clericSpells) {
          document.getElementById(spellForms[i2 + 2]).value = classSpellArray[i2];
        } else {
          document.getElementById(spellForms[i2]).value = classSpellArray[i2];
        }
      }
    }

  }

  function cantripAdder(classCantripArray, cantripAmount) {
    for (let i3 = classCantripArray.length; i3 > cantripAmount; i3--) {
      classCantripArray.splice(Math.floor(Math.random() * classCantripArray.length), 1);
    }
    for (let i4 = 0; i4 < cantripAmount; i4++) {
      document.getElementById(cantripForms[i4]).value = classCantripArray[i4];
    }
  }

  if (classAndLevel === "Bard 1") {
    document.getElementById("form214_3").value = className; // spellcasting class
    document.getElementById("form196_3").value = "CHA"; // spellcasting ability
    document.getElementById("form194_3").value = 10 + charismaModifier; // spell save dc
    statChecker(charismaModifier + 2, "form195_3"); // spell attack bonus
    document.getElementById("form97_3").value = 2;
    document.getElementById("form62_1").value = "d6";
    spellAdder(bardSpells, charismaModifier);
    cantripAdder(bardCantrips, bardCantripCount);
    bardSpells = [
      "Animal Friendship",
      "Bane",
      "Charm Person",
      "Comprehend Languages",
      "Cure Wounds",
      "Detect Magic",
      "Disguise Self",
      "Faerie Fire",
      "Feather Fall",
      "Healing Word",
      "Heroism",
      "Hideous Laughter",
      "Identify",
      "Illusory Script",
      "Longstrider",
      "Silent Image",
      "Sleep",
      "Speak with Animals",
      "Thunderwave",
      "Unseen Servant"
    ];
    bardCantrips = [
      "Dancing Lights",
      "Light",
      "Mage Hand",
      "Mending",
      "Message",
      "Minor Illusion",
      "Prestidigitation",
      "True Strike",
      "Vicious Mockery"
    ];
  } else if (classAndLevel === "Cleric 1") {
    document.getElementById("form214_3").value = className; // spellcasting class
    document.getElementById("form196_3").value = "WIS"; // spellcasting ability
    document.getElementById("form194_3").value = 10 + wisdomModifier; // spell save dc
    statChecker(wisdomModifier + 2, "form195_3"); // spell attack bonus
    document.getElementById("form97_3").value = 2;
    spellAdder(clericSpells, wisdomModifier);
    cantripAdder(clericCantrips, clericCantripCount);
    clericCantrips = [
      "Guidance",
      "Light",
      "Mending",
      "Resistance",
      "Sacred Flame",
      "Spare the Dying",
      "Thaumaturgy"
    ];
    clericSpells = [
      "Bane",
      "Bless",
      "Command",
      "Create or Destroy Water",
      "Cure Wounds",
      "Detect Evil and Good",
      "Detect Magic",
      "Detect Poison and Disease",
      "Guiding Bolt",
      "Healing Word",
      "Inflict Wounds",
      "Protection from Evil and Good",
      "Purify Food and Drink",
      "Sanctuary",
      "Shield of Faith"
    ];
  } else if (classAndLevel === "Druid 1") {
    document.getElementById("form214_3").value = className; // spellcasting class
    document.getElementById("form196_3").value = "WIS"; // spellcasting ability
    document.getElementById("form194_3").value = 10 + wisdomModifier; // spell save dc
    statChecker(wisdomModifier + 2, "form195_3"); // spell attack bonus
    document.getElementById("form97_3").value = 2;
    spellAdder(druidSpells, wisdomModifier);
    cantripAdder(druidCantrips, druidCantripCount);
    druidSpells = [
      "Animal Friendship",
      "Charm Person",
      "Create or Destroy Water",
      "Cure Wounds",
      "Detect Magic",
      "Detect Poison and Disease",
      "Entangle",
      "Faerie Fire",
      "Fog Cloud",
      "Goodberry",
      "Healing Word",
      "Jump",
      "Longstrider",
      "Purify Food and Drink",
      "Speak with Animals",
      "Thunderwave"
    ];
    druidCantrips = [
      "Druidcraft",
      "Guidance",
      "Mending",
      "Poison Spray",
      "Produce Flame",
      "Resistance",
      "Shillelagh"
    ];
  } else if (classAndLevel === "Sorcerer 1") {
    document.getElementById("form214_3").value = className; // spellcasting class
    document.getElementById("form196_3").value = "CHA"; // spellcasting ability
    document.getElementById("form194_3").value = 10 + charismaModifier; // spell save dc
    statChecker(charismaModifier + 2, "form195_3"); // spell attack bonus
    document.getElementById("form97_3").value = 2;
    spellAdder(sorcererSpells, charismaModifier);
    cantripAdder(sorcererCantrips, sorcererCantripCount);
    sorcererSpells = [
      " Burning Hands",
      "Charm Person",
      "Color Spray",
      "Comprehend Languages",
      "Detect Magic",
      "Disguise Self",
      "Expeditious Retreat",
      "False Life",
      "Feather Fall",
      "Fog Cloud",
      "Jump",
      "Mage Armor",
      "Magic Missile",
      "Shield",
      "Silent Image",
      "Sleep",
      "Thunderwave"
    ];
    sorcererCantrips = [
      "Acid Splash",
      "Chill Touch",
      "Dancing Lights",
      "Fire Bolt",
      "Light",
      "Mage Hand",
      "Mending",
      "Message",
      "Minor Illusion",
      "Poison Spray",
      "Prestidigitation",
      "Ray of Frost",
      "Shocking Grasp",
      "True Strike"
    ];
  } else if (classAndLevel === "Warlock 1") {
    document.getElementById("form214_3").value = className; // spellcasting class
    document.getElementById("form196_3").value = "CHA"; // spellcasting ability
    document.getElementById("form194_3").value = 10 + charismaModifier; // spell save dc
    statChecker(charismaModifier + 2, "form195_3"); // spell attack bonus
    document.getElementById("form97_3").value = 1;
    spellAdder(warlockSpells, charismaModifier);
    cantripAdder(warlockCantrips, warlockCantripCount);
    warlockSpells = [
      "Charm Person",
      "Comprehend Languages",
      "Expeditious Retreat",
      "Hellish Rebuke",
      "Illusory Script",
      "Protection from Evil and Good",
      "Unseen Servant"
    ];
    warlockCantrips = [
      "Chill Touch",
      "Eldritch Blast",
      "Mage Hand",
      "Minor Illusion",
      "Poison Spray",
      "Prestidigitation",
      "True Strike"
    ];
  } else if (classAndLevel === "Wizard 1") {
    document.getElementById("form214_3").value = className; // spellcasting class
    document.getElementById("form196_3").value = "INT"; // spellcasting ability
    document.getElementById("form194_3").value = 10 + intelligenceModifier; // spell save dc
    statChecker(intelligenceModifier + 2, "form195_3"); // spell attack bonus
    document.getElementById("form97_3").value = 2;
    spellAdder(wizardSpells, intelligenceModifier);
    cantripAdder(wizardCantrips, wizardCantripCount);
    wizardSpells = [
      "Alarm",
      "Burning Hands",
      "Charm Person",
      "Color Spray",
      "Comprehend Languages",
      "Detect Magic",
      "Disguise Self",
      "Expeditious Retreat",
      "False Life",
      "Feather Fall",
      "Find Familiar",
      "Floating Disk",
      "Fog Cloud",
      "Grease",
      "Hideous Laughter",
      "Identify",
      "Illusory Script",
      "Jump",
      "Longstrider",
      "Mage Armor",
      "Magic Missile",
      "Protection from Evil and Good",
      "Shield",
      "Silent Image",
      "Sleep",
      "Thunderwave",
      "Unseen Servant"
    ];
    wizardCantrips = [
      "Acid Splash",
      "Chill Touch",
      "Dancing Lights",
      "Fire Bolt",
      "Light",
      "Mage Hand",
      "Mending",
      "Message",
      "Minor Illusion",
      "Poison Spray",
      "Prestidigitation",
      "Ray of Frost",
      "Shocking Grasp",
      "True Strike"
    ];
  }

  // For loop that searches your inventory and determines armor class based on what armor you have
  for (i = 0; i < equipment.length; i++) {
    if (equipment[i] === armor.lightArmor.padded.armorname) {
      armorClass += 11 + dexterityModifier;
    } else if (equipment[i] === armor.lightArmor.leather.armorname) {
      armorClass += 11 + dexterityModifier;
    } else if (equipment[i] === armor.lightArmor.studdedleather.armorname) {
      armorClass += 12 + dexterityModifier;
    } else if (equipment[i] === armor.mediumArmor.hide.armorname) {
      armorClass += 12 + dexterityModifier;
    } else if (equipment[i] === armor.mediumArmor.chainshirt.armorname) {
      armorClass += 13 + dexterityModifier;
    } else if (equipment[i] === armor.mediumArmor.scalemail.armorname) {
      armorClass += 14 + dexterityModifier;
      features.push("Scale Mail: Disadvantage on stealth rolls from medium armor.");
    } else if (equipment[i] === armor.heavyArmor.ringmail.armorname) {
      armorClass += 14;
      features.push("Ring Mail: Disadvantage on stealth rolls from heavy armor.");
    } else if (equipment[i] === armor.heavyArmor.chainmail.armorname) {
      armorClass += 16;
      features.push("Chain Mail: Disadvantage on stealth rolls from heavy armor.");
    }
  }

  // For loop that searches your inventory and adds +2 armor class if you have a shield
  for (i = 0; i < equipment.length; i++) {
    if (equipment[i] === "Shield" || equipment[i] === "Shield - Focus" || equipment[i] === "Wooden shield") {
      armorClass += 2;
    }
  }

  class_proficiencies(); // Get proficiencies based on class and previous proficiencies
  statChecker(strengthModifier, "form56_1"); // str modifier
  statChecker(dexterityModifier, "form59_1"); // dex modifier
  statChecker(dexterityModifier, "form88_1"); // initiative
  statChecker(constitutionModifier, "form58_1"); // con modifier
  statChecker(intelligenceModifier, "form57_1"); // int modifier
  statChecker(wisdomModifier, "form60_1"); // wis modifier
  statChecker(charismaModifier, "form55_1"); // cha modifier
  document.getElementById("form13_2").value = alliesAndOrganizations.join('\r'); // allies and organizations pg 2
  document.getElementById("form61_1").value = "+2"; // proficiency
  document.getElementById("form80_1").value = hp; // max hp
  document.getElementById("form97_1").value = hp; // current hp
  document.getElementById("form67_1").value = 1; // number of hit dice
  document.getElementById("form91_1").value = 0; // experience points
  document.getElementById("form93_1").value = name; // name
  document.getElementById("form90_1").value = newBackground1; // background
  document.getElementById("form96_1").value = charName; // character name
  document.getElementById("form8_2").value = charName; // character name 2nd page
  document.getElementById("form83_1").value = strength; // strength stat
  document.getElementById("form84_1").value = dexterity; // dex stat
  document.getElementById("form82_1").value = constitution; // con stat
  document.getElementById("form86_1").value = intelligence; // int stat
  document.getElementById("form81_1").value = wisdom; // wis stat
  document.getElementById("form85_1").value = charisma; // cha stat
  document.getElementById("form95_1").value = race; // race text field
  document.getElementById("form68_1").value = gold; // gold
  document.getElementById("form104_1").value = equipment.join('\r\n'); // equipment section
  document.getElementById("form94_1").value = classAndLevel; // class and level text field
  document.getElementById("form105_1").value = proficienciesAndLanguages.join('\r'); // proficiencies and languages
  document.getElementById("form106_1").value = features.join('\r\n'); // features & traits
  document.getElementById("form16_2").value = additionalFeatures.join('\r\n'); // additional features, pg. 2
  document.getElementById("form92_1").value = alignment.join(' '); // alignment text fielddice
  document.getElementById("form73_1").value = armorClass; // AC
  document.getElementById("form103_1").value = spellcastingSection.join('\r\n'); // adding spell descriptions to the spellcasting section

  // Block to determine passive perception
  if (document.getElementById("form7_1").checked === 'checked') {
    document.getElementById("form63_1").value = 12 + wisdomModifier; // passive perception
  } else {
    document.getElementById("form63_1").value = 10 + wisdomModifier; // passive perception
  }

  // Block to replace' Neutral Neutral' with 'True Neutral'
  if (document.getElementById("form92_1").value === "Neutral Neutral") {
    document.getElementById("form92_1").value = "True Neutral";
  };
}
// Call the character generator on page load
generate_initial_character(standard_version);

// Function to make a skill proficient and checked
function addClick(j) {
  i = j.toString();
  document.getElementById("form" + i + "_1").checked = 'checked';
  click_on(i - 1);
}

// Function to remove skill proficiency and checked status
function remove_click(j) {
  document.getElementById("form" + j + "_1").checked = undefined;
  click_off(j);
}

// Function to generate a new character by clearing all forms and checkboxes and then generating a character again
function generate_initial_character(version) {
  clear_All();
  version();
  generate_character();
}

// Function to generate a new character by clearing all forms and checkboxes and then generating a character again
function generate_new_character(version) {
  clear_All();
  version();
  generate_character();
}
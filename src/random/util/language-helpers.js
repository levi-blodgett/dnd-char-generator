const RACIAL_AVOID = {
  "High Elf": "Elvish", "Wood Elf": "Elvish", "Elf": "Elvish",
  "Hill Dwarf": "Dwarvish", "Mountain Dwarf": "Dwarvish",
  "Lightfoot Halfling": "Halfling", "Stout Halfling": "Halfling",
  "Black Dragonborn": "Draconic", "Blue Dragonborn": "Draconic",
  "Brass Dragonborn": "Draconic", "Bronze Dragonborn": "Draconic",
  "Copper Dragonborn": "Draconic", "Gold Dragonborn": "Draconic",
  "Green Dragonborn": "Draconic", "Red Dragonborn": "Draconic",
  "Silver Dragonborn": "Draconic", "White Dragonborn": "Draconic",
  "Forest Gnome": "Gnomish", "Rock Gnome": "Gnomish",
  "Half-Elf": "Elvish", "Orc": "Orc", "Tiefling": "Infernal",
};

export function make_language_helpers(listOfStandard, listOfExotic, state) {
  function random_language() {
    let n = Math.floor(Math.random() * 7);
    while (listOfStandard[n] === state.racialLanguage2) n = Math.floor(Math.random() * 7);
    return Math.random() >= 0.1
      ? listOfStandard[n]
      : listOfExotic[Math.floor(Math.random() * 8)];
  }

  function right_language() {
    const avoid = RACIAL_AVOID[state.race];
    if (avoid) {
      while (
        state.firstLanguage === avoid ||
        state.firstLanguage === state.extralanguage ||
        state.extralanguage === state.racialLanguage2
      ) {
        state.firstLanguage = random_language();
      }
    }
    return state.firstLanguage;
  }

  function right_language2(languagevariable) {
    while (
      state.firstLanguage === languagevariable ||
      languagevariable === state.racialLanguage1 ||
      languagevariable === state.racialLanguage2 ||
      state.extralanguage === languagevariable ||
      state.knowledgeLanguage === languagevariable
    ) {
      languagevariable = random_language();
    }
    return languagevariable;
  }

  return { random_language, right_language, right_language2 };
}

export function random_con() {
  const r = Math.floor(Math.random() * 4);
  if (r === 0) return "Ten stoppered bottles filled with colored liquid";
  else if (r === 1) return "Set of weighted dice";
  else if (r === 2) return "Deck of marked cards";
  else return "Signet ring of an imaginary duke";
}

export function random_gaming_set_capitalize() {
  const r = Math.floor(Math.random() * 4);
  if (r === 0) return "Dice";
  else if (r === 1) return "Dragonchess";
  else if (r === 2) return "Playing cards";
  else return "Three-dragon ante";
}

export function random_trinket() {
  const r = Math.floor(Math.random() * 20);
  if (r === 0) return "Piece of crystal that faintly glows in the moonlight";
  else if (r === 1) return "Gold coin minted in an unknown land";
  else if (r === 2) return "Dragon's bony talon hanging from a plain leather necklace";
  else if (r === 3) return "Tiny silver icon of a raven";
  else if (r === 4) return "Old key";
  else if (r === 5) return "Silver skull the size of a coin";
  else if (r === 6) return "Set of bone pipes";
  else if (r === 7) return "Ancient arrow of elven design";
  else if (r === 8) return "Iron holy symbol devoted to an unknown God";
  else if (r === 9) return "Invitation to a party where a murder happened";
  else if (r === 10) return "Glass orb filled with moving smoke";
  else if (r === 11) return "Deed for a parcel of land in a realm unknown to you";
  else if (r === 12) return "Old chess piece made from unbreakable glass";
  else if (r === 13) return "Small wooden statuette of a smug halfling";
  else if (r === 14) return "Brass orb etched with strange runes";
  else if (r === 15) return "Shard of obsidian that always feels warm to the touch";
  else if (r === 16) return "Rectangular metal device with two tiny metal cups on one end that throws sparks when wet";
  else if (r === 17) return "Gemstone that looks like a lump of coal when examined by anyone but you";
  else if (r === 18) return "Whistle made from gold-colored wood";
  else return "Indecipherable treasure map";
}

export function random_favor_from_admirer() {
  const r = Math.floor(Math.random() * 3);
  if (r === 0) return "Lover letter from an admirer";
  else if (r === 1) return "Lock of hair from an admirer";
  else return random_trinket() + " from an admirer";
}

export function random_artisan_tool() {
  const r = Math.floor(Math.random() * 17);
  if (r === 0) return "Alchemist's supplies";
  else if (r === 1) return "Brewer's supplies";
  else if (r === 2) return "Calligrapher's supplies";
  else if (r === 3) return "Carpenter's tools";
  else if (r === 4) return "Cartographer's tools";
  else if (r === 5) return "Cobbler's tools";
  else if (r === 6) return "Cook's utensils";
  else if (r === 7) return "Glassblower's tools";
  else if (r === 8) return "Jeweler's tools";
  else if (r === 9) return "Leatherworker's tools";
  else if (r === 10) return "Mason's tools";
  else if (r === 11) return "Painter's supplies";
  else if (r === 12) return "Potter's tools";
  else if (r === 13) return "Smith's tools";
  else if (r === 14) return "Tinker's tools";
  else if (r === 15) return "Weaver's tools";
  else return "Woodcarver's tools";
}

export function random_gaming_set_soldier() {
  return Math.floor(Math.random() * 2) === 0 ? "Dice" : "Playing Cards";
}

export function random_trophy() {
  const r = Math.floor(Math.random() * 4);
  if (r === 0) return "Dagger from fallen enemy";
  else if (r === 1) return "Broken blade from fallen enemy";
  else if (r === 2) return "Piece of banner from fallen enemy";
  else return random_trinket() + " from fallen enemy";
}

export function random_gladiator_weapon(weapon_adder, weapon_adder_2, equipment) {
  const r = Math.floor(Math.random() * 4);
  if (r === 0) {
    if (weapon_adder("trident") !== undefined) {
      weapon_adder_2(weapon_adder("trident"));
      equipment.push("Trident");
    } else {
      return "Trident already added";
    }
  } else if (r === 1) {
    if (weapon_adder("net") !== undefined) {
      weapon_adder_2(weapon_adder("net"));
      equipment.push("Net");
    } else {
      return "Net already added";
    }
  } else if (r === 2) {
    if (weapon_adder("sling") !== undefined) {
      weapon_adder_2(weapon_adder("sling"));
      equipment.push("Sling");
    } else {
      return "Sling already added";
    }
  } else {
    if (weapon_adder("whip") !== undefined) {
      weapon_adder_2(weapon_adder("whip"));
      equipment.push("Whip");
    } else {
      return "Whip already added";
    }
  }
}

export function random_gladiator_weapon_checker(variable, equipment) {
  if (variable === "Trident already added") equipment.push("Trident");
  else if (variable === "Net already added") equipment.push("Net");
  else if (variable === "Sling already added") equipment.push("Sling");
  else if (variable === "Whip already added") equipment.push("Whip");
}

export function random_animal_trophy() {
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

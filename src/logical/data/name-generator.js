const _backgroundsPhysicalMentalDexterous = [
  "Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero", "Gladiator",
  "Guild Artisan", "Guild Merchant", "Hermit", "Knight", "Noble", "Outlander",
  "Pirate", "Sage", "Sailor", "Soldier", "Spy", "Urchin",
]; // 18 total
const _backgroundsPhysical = [
  "Criminal", "Folk Hero", "Gladiator", "Hermit", "Knight", "Outlander", "Pirate", "Sailor", "Soldier",
]; // 9 total
const _backgroundsMental = [
  "Acolyte", "Entertainer", "Folk Hero", "Guild Artisan", "Guild Merchant", "Hermit", "Noble", "Sage",
]; // 8 total
const _backgroundsDexterous = [
  "Charlatan", "Criminal", "Entertainer", "Folk Hero", "Guild Artisan", "Guild Merchant",
  "Hermit", "Outlander", "Spy", "Urchin",
]; // 10 total
const _backgroundsDexterousPhysical = [
  "Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero", "Gladiator",
  "Guild Artisan", "Guild Merchant", "Hermit", "Knight", "Outlander", "Pirate",
  "Sailor", "Soldier", "Spy", "Urchin",
]; // 16 total
const _backgroundsDexterousMental = [
  "Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero", "Guild Artisan",
  "Guild Merchant", "Hermit", "Noble", "Outlander", "Sage", "Soldier", "Spy", "Urchin",
]; // 14 total
const _backgroundsPhysicalMental = [
  "Acolyte", "Criminal", "Entertainer", "Folk Hero", "Gladiator", "Guild Artisan",
  "Guild Merchant", "Hermit", "Knight", "Noble", "Outlander", "Pirate", "Sage", "Sailor", "Soldier",
]; // 15 total
const _backgroundsNone = [
  "Entertainer", "Folk Hero", "Guild Artisan", "Guild Merchant", "Hermit", "Noble",
]; // 6 total
const _backgroundsCleric = [
  "Acolyte", "Criminal", "Folk Hero", "Gladiator", "Hermit", "Knight", "Pirate", "Sage", "Sailor", "Soldier",
]; // 10 total
const _backgroundsDruid = ["Charlatan", "Folk Hero", "Hermit", "Outlander", "Sage"]; // 5 total
const _backgroundsWarlock = [
  "Acolyte", "Criminal", "Entertainer", "Guild Artisan", "Guild Merchant", "Hermit", "Noble", "Sage", "Urchin",
]; // 9 total

export function get_new_background(strength, constitution, intelligence, dexterity, classAndLevel) {
  if (strength > 11 && constitution > 9 && intelligence > 11 && dexterity > 11) {
    return _backgroundsPhysicalMentalDexterous[Math.floor(Math.random() * 18)];
  } else if (strength > 11 && constitution > 9 && intelligence < 12 && dexterity < 12) {
    return _backgroundsPhysical[Math.floor(Math.random() * 9)];
  } else if ((strength < 12 || constitution < 10) && intelligence > 11 && dexterity < 12) {
    return _backgroundsMental[Math.floor(Math.random() * 8)];
  } else if ((strength < 12 || constitution < 10) && intelligence < 12 && dexterity > 11) {
    return _backgroundsDexterous[Math.floor(Math.random() * 9)];
  } else if (strength > 11 && constitution > 9 && intelligence < 12 && dexterity > 11) {
    return _backgroundsDexterousPhysical[Math.floor(Math.random() * 16)];
  } else if ((strength < 12 || constitution < 10) && intelligence > 11 && dexterity > 11) {
    return _backgroundsDexterousMental[Math.floor(Math.random() * 14)];
  } else if (strength > 11 && constitution > 9 && intelligence > 11 && dexterity < 12) {
    return _backgroundsPhysicalMental[Math.floor(Math.random() * 15)];
  } else if (classAndLevel === "Cleric 1") {
    return _backgroundsCleric[Math.floor(Math.random() * 10)];
  } else if (classAndLevel === "Druid 1") {
    return _backgroundsDruid[Math.floor(Math.random() * 5)];
  } else if (classAndLevel === "Warlock 1") {
    return _backgroundsWarlock[Math.floor(Math.random() * 9)];
  } else {
    return _backgroundsNone[Math.floor(Math.random() * 6)];
  }
}

export function create_char_name(firstName, lastName) {
  return lastName === "" ? firstName : firstName + " " + lastName;
}

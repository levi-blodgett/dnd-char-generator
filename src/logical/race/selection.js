const RANDOM_RACES = [
  "Dragonborn","Dwarf","Elf","Gnome","HalfElf","HalfOrc","Halfling","Human","Tiefling"
];

function look_up_name(raceKey, nameGenerator, firstNameNumber, lastNameNumber) {
  const key = "_" + raceKey.toLowerCase();
  return {
    finalFirstName: nameGenerator._races[key].firstName[firstNameNumber],
    finalLastName: nameGenerator._races[key].lastName[lastNameNumber],
  };
}

function normalize_race(raceName) {
  if (raceName === "HalfElf") return "Half-Elf";
  if (raceName === "HalfOrc") return "Half-Orc";
  return raceName;
}

export function pick_race_random(number, nameGenerator, firstNameNumber, lastNameNumber) {
  const raceName = RANDOM_RACES[number];
  const { finalFirstName, finalLastName } = look_up_name(raceName, nameGenerator, firstNameNumber, lastNameNumber);
  return { race: normalize_race(raceName), finalFirstName, finalLastName, raceChecker: 0 };
}

function sub_subrace_picker(group, leftoverArray) {
  if (group.length > 0) leftoverArray.push(group[Math.floor(Math.random() * group.length)]);
}

function expand_subraces(checkedRaces) {
  const dragonborn = [], dwarves = [], elves = [], gnomes = [], halflings = [], humans = [];
  const leftoverArray = [];
  for (const entry of checkedRaces) {
    if (entry === "HalfElf" || entry === "HalfOrc" || entry === "Tiefling") {
      leftoverArray.push(entry);
      continue;
    }
    const parts = entry.split(" ", 2);
    const part1 = parts[0];
    const part2 = parts[1];
    if (part2 === "Dragonborn") dragonborn.push(entry);
    else if (part2 === "Dwarf") dwarves.push(entry);
    else if (part2 === "Elf" || entry === "Dark Elf (Drow)") elves.push(entry);
    else if (part2 === "Gnome") gnomes.push(entry);
    else if (part2 === "Halfling") halflings.push(entry);
    else if (part1 === "Human") humans.push(entry);
  }
  sub_subrace_picker(dragonborn, leftoverArray);
  sub_subrace_picker(dwarves, leftoverArray);
  sub_subrace_picker(elves, leftoverArray);
  sub_subrace_picker(gnomes, leftoverArray);
  sub_subrace_picker(halflings, leftoverArray);
  sub_subrace_picker(humans, leftoverArray);
  return leftoverArray;
}

export function pick_race_from_dropdown(nameGenerator, firstNameNumber, lastNameNumber, prevRaceChecker) {
  const checkboxes = document.querySelectorAll("input.race_class");
  const checked = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) checked.push(checkboxes[i].value);
  }
  const expanded = expand_subraces(checked);
  const actualRace = expanded[Math.floor(Math.random() * expanded.length)];

  let race = normalize_race(actualRace);
  let nameKey;
  let raceSplitter1, raceSplitter3;
  const p = race.split(" ", 2);
  const p1 = p[0], p2 = p[1];

  if (race !== "Half-Elf" && race !== "Half-Orc" && p2 !== "(Drow)") {
    raceSplitter1 = p1;
    raceSplitter3 = p2;
  }

  if (p2 === undefined) {
    nameKey = actualRace;
  } else if (p1 === "Human") {
    nameKey = "Human";
  } else if (p2 === "(Drow)") {
    nameKey = "Elf";
  } else {
    nameKey = p2;
  }

  const { finalFirstName, finalLastName } = look_up_name(nameKey, nameGenerator, firstNameNumber, lastNameNumber);
  return { race, finalFirstName, finalLastName, raceChecker: prevRaceChecker + 1, raceSplitter1, raceSplitter3 };
}

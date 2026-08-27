export function pick_class_from_dropdown() {
  const checkboxes = document.querySelectorAll("input.class_class");
  const checked = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) checked.push(checkboxes[i].value);
  }
  return checked[Math.floor(Math.random() * checked.length)];
}

export function assign_class_stats(classAndLevel, { stat1, stat2, stat3, stat4, stat5, stat6 }, randomChance) {
  let strength = 0, dexterity = 0, constitution = 0, intelligence = 0, wisdom = 0, charisma = 0;
  let clericBuild = "";

  function assign_stats(s, d, c, i, w, ch, classtype) {
    strength += s; dexterity += d; constitution += c;
    intelligence += i; wisdom += w; charisma += ch;
    const total = s + d + c + i + w + ch;
    document.getElementById("form98_1").value =
      `${classtype}(${total}): ${s}, ${d}, ${c}, ${i}, ${w}, ${ch}`;
  }

  if (classAndLevel === "Barbarian 1") {
    if (randomChance > 0.5) assign_stats(stat1, stat3, stat2, stat6, stat4, stat5, "Barbarian");
    else assign_stats(stat3, stat2, stat1, stat6, stat4, stat5, "Barbarian");
  } else if (classAndLevel === "Bard 1") {
    if (randomChance > 0.5) assign_stats(stat6, stat2, stat3, stat4, stat5, stat1, "Bard");
    else assign_stats(stat2, stat4, stat3, stat5, stat6, stat1, "Bard");
  } else if (classAndLevel === "Cleric 1") {
    if (randomChance > 0.66) { assign_stats(stat4, stat2, stat3, stat5, stat1, stat6, "Cleric"); clericBuild = "DEX"; }
    else if (randomChance > 0.33) { assign_stats(stat2, stat4, stat3, stat6, stat1, stat5, "Cleric"); clericBuild = "STR"; }
    else { assign_stats(stat5, stat3, stat2, stat4, stat1, stat6, "Cleric"); clericBuild = "WIS"; }
  } else if (classAndLevel === "Druid 1") {
    if (randomChance > 0.5) assign_stats(stat6, stat3, stat2, stat5, stat1, stat4, "Druid");
    else assign_stats(stat6, stat3, stat2, stat4, stat1, stat5, "Druid");
  } else if (classAndLevel === "Fighter 1") {
    if (randomChance > 0.66) assign_stats(stat6, stat1, stat2, stat4, stat3, stat5, "Fighter");
    else if (randomChance > 0.33) assign_stats(stat1, stat4, stat2, stat5, stat3, stat6, "Fighter");
    else assign_stats(stat1, stat4, stat3, stat2, stat5, stat6, "Fighter");
  } else if (classAndLevel === "Monk 1") {
    if (randomChance > 0.5) assign_stats(stat4, stat1, stat3, stat6, stat2, stat5, "Monk");
    else assign_stats(stat5, stat1, stat3, stat6, stat2, stat4, "Monk");
  } else if (classAndLevel === "Paladin 1") {
    if (randomChance > 0.5) assign_stats(stat5, stat1, stat3, stat6, stat4, stat2, "Paladin");
    else assign_stats(stat1, stat5, stat3, stat6, stat4, stat2, "Paladin");
  } else if (classAndLevel === "Ranger 1") {
    if (randomChance > 0.5) assign_stats(stat5, stat1, stat2, stat4, stat3, stat6, "Ranger");
    else assign_stats(stat1, stat2, stat3, stat5, stat4, stat6, "Ranger");
  } else if (classAndLevel === "Rogue 1") {
    if (randomChance > 0.66) assign_stats(stat6, stat1, stat2, stat5, stat3, stat4, "Rogue");
    else if (randomChance > 0.33) assign_stats(stat6, stat1, stat2, stat5, stat4, stat3, "Rogue");
    else assign_stats(stat6, stat1, stat3, stat2, stat4, stat5, "Rogue");
  } else if (classAndLevel === "Sorcerer 1") {
    if (randomChance > 0.5) assign_stats(stat6, stat3, stat2, stat5, stat4, stat1, "Sorcerer");
    else assign_stats(stat6, stat2, stat3, stat4, stat5, stat1, "Sorcerer");
  } else if (classAndLevel === "Warlock 1") {
    if (randomChance > 0.5) assign_stats(stat6, stat2, stat3, stat4, stat5, stat1, "Warlock");
    else assign_stats(stat6, stat3, stat2, stat5, stat4, stat1, "Warlock");
  } else if (classAndLevel === "Wizard 1") {
    if (randomChance > 0.5) assign_stats(stat6, stat2, stat3, stat1, stat4, stat5, "Wizard");
    else assign_stats(stat5, stat3, stat2, stat1, stat4, stat6, "Wizard");
  }

  return { strength, dexterity, constitution, intelligence, wisdom, charisma, clericBuild };
}

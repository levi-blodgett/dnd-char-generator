export function make_proficiency_adders(simpleWeapons, martialWeapons, profsAndLangs) {
  function weapon_adder(weapon) {
    for (let i = 0; i < simpleWeapons.length; i++) {
      if (simpleWeapons[i] === weapon) {
        for (let j = 0; j < profsAndLangs.weaponProficiencies.length; j++) {
          if (profsAndLangs.weaponProficiencies[j] === "simple weapons") return;
          else if (profsAndLangs.weaponProficiencies[j] === weapon) return;
        }
      }
    }
    for (let i = 0; i < martialWeapons.length; i++) {
      if (martialWeapons[i] === weapon) {
        for (let j = 0; j < profsAndLangs.weaponProficiencies.length; j++) {
          if (profsAndLangs.weaponProficiencies[j] === "martial weapons") return;
          else if (profsAndLangs.weaponProficiencies[j] === weapon) return;
        }
      }
    }
    return weapon;
  }

  function weapon_adder_2(weapon_adder1) {
    if (weapon_adder1 !== undefined) profsAndLangs.weaponProficiencies.push(weapon_adder1);
  }

  function armor_adder(armorToAddToList) {
    for (let i = 0; i < profsAndLangs.armorProficiencies.length; i++) {
      if (profsAndLangs.armorProficiencies[i] === armorToAddToList) return;
    }
    return armorToAddToList;
  }

  function armor_adder_2(armor_adder1) {
    if (armor_adder1 !== undefined) profsAndLangs.armorProficiencies.push(armor_adder1);
  }

  function tool_adder(tool) {
    for (let j = 0; j < profsAndLangs.toolProficiencies.length; j++) {
      if (profsAndLangs.toolProficiencies[j] === tool) return;
    }
    return tool;
  }

  function tool_adder_2(tool_adder1) {
    if (tool_adder1 !== undefined) profsAndLangs.toolProficiencies.push(tool_adder1);
  }

  function language_adder(language) {
    for (let j = 0; j < profsAndLangs.languages.length; j++) {
      if (profsAndLangs.languages[j] === language) return;
    }
    return language;
  }

  function language_adder_2(language_adder1) {
    if (language_adder1 !== undefined) profsAndLangs.languages.push(language_adder1);
  }

  return {
    weapon_adder,
    weapon_adder_2,
    armor_adder,
    armor_adder_2,
    tool_adder,
    tool_adder_2,
    language_adder,
    language_adder_2,
  };
}

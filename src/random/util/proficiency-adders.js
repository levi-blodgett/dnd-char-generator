export function make_proficiency_adders(simpleWeapons, martialWeapons, profsAndLangs) {
  function weaponAdder(weapon) {
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

  function weaponAdder2(weaponAdder1) {
    if (weaponAdder1 !== undefined) profsAndLangs.weaponProficiencies.push(weaponAdder1);
  }

  function armorAdder(armorToAddToList) {
    for (let i = 0; i < profsAndLangs.armorProficiencies.length; i++) {
      if (profsAndLangs.armorProficiencies[i] === armorToAddToList) return;
    }
    return armorToAddToList;
  }

  function armorAdder2(armorAdder1) {
    if (armorAdder1 !== undefined) profsAndLangs.armorProficiencies.push(armorAdder1);
  }

  function toolAdder(tool) {
    for (let j = 0; j < profsAndLangs.toolProficiencies.length; j++) {
      if (profsAndLangs.toolProficiencies[j] === tool) return;
    }
    return tool;
  }

  function toolAdder2(toolAdder1) {
    if (toolAdder1 !== undefined) profsAndLangs.toolProficiencies.push(toolAdder1);
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
    weaponAdder, weaponAdder2,
    armorAdder, armorAdder2,
    toolAdder, toolAdder2,
    language_adder, language_adder_2,
  };
}

export function make_skill_adder(mods, add_click, statChecker) {
  const { strengthModifier: str, dexterityModifier: dex, intelligenceModifier: int,
          wisdomModifier: wis, charismaModifier: cha } = mods;

  const SKILLS = [
    ["form19_1", 19, dex + 2, "form38_1"],
    ["form8_1",   8, wis + 2, "form50_1"],
    ["form21_1", 21, int + 2, "form40_1"],
    ["form2_1",   2, str + 2, "form49_1"],
    ["form17_1", 17, cha + 2, "form36_1"],
    ["form9_1",   9, int + 2, "form48_1"],
    ["form13_1", 13, wis + 2, "form35_1"],
    ["form24_1", 24, cha + 2, "form44_1"],
    ["form14_1", 14, int + 2, "form31_1"],
    ["form5_1",   5, wis + 2, "form53_1"],
    ["form11_1", 11, int + 2, "form37_1"],
    ["form16_1", 16, cha + 2, "form34_1"],
    ["form1_1",   1, cha + 2, "form45_1"],
    ["form20_1", 20, int + 2, "form33_1"],
    ["form4_1",   4, dex + 2, "form46_1"],
    ["form23_1", 23, dex + 2, "form32_1"],
    ["form12_1", 12, wis + 2, "form47_1"],
    ["form7_1",   7, wis + 2, "form43_1"],
  ];

  function skill_adder() {
    const r = Math.floor(Math.random() * 17);
    const [checkId, clickId, mod, statId] = SKILLS[r];
    if (document.getElementById(checkId).checked === undefined) {
      add_click(clickId);
      statChecker(mod, statId);
    } else {
      skill_adder();
    }
  }

  return skill_adder;
}

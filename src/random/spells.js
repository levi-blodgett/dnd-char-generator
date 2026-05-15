export function apply_spells(classAndLevel, ctx) {
  const {
    charismaModifier, wisdomModifier, intelligenceModifier,
    statChecker, spellForms, cantripForms,
    bardSpells, clericSpells, druidSpells, sorcererSpells, warlockSpells, wizardSpells,
    bardCantrips, clericCantrips, druidCantrips, sorcererCantrips, warlockCantrips, wizardCantrips,
    bardCantripCount, clericCantripCount, druidCantripCount,
    sorcererCantripCount, warlockCantripCount, wizardCantripCount,
  } = ctx;

  function spellAdder(classSpellArray, modifier, clericOffset = 0) {
    const count = modifier < 0 ? 1 : modifier + 1;
    for (let i = classSpellArray.length; i > count; --i) {
      classSpellArray.splice(Math.floor(Math.random() * classSpellArray.length), 1);
    }
    for (let i2 = 0; i2 < count; i2++) {
      document.getElementById(spellForms[i2 + clericOffset]).value = classSpellArray[i2];
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
    document.getElementById("form214_3").value = "Bard";
    document.getElementById("form196_3").value = "CHA";
    document.getElementById("form194_3").value = 10 + charismaModifier;
    statChecker(charismaModifier + 2, "form195_3");
    document.getElementById("form97_3").value = 2;
    document.getElementById("form62_1").value = "d6";
    spellAdder(bardSpells.slice(), charismaModifier);
    cantripAdder(bardCantrips.slice(), bardCantripCount);
  } else if (classAndLevel === "Cleric 1") {
    document.getElementById("form214_3").value = "Cleric";
    document.getElementById("form196_3").value = "WIS";
    document.getElementById("form194_3").value = 10 + wisdomModifier;
    statChecker(wisdomModifier + 2, "form195_3");
    document.getElementById("form97_3").value = 2;
    spellAdder(clericSpells.slice(), wisdomModifier, 2);
    cantripAdder(clericCantrips.slice(), clericCantripCount);
  } else if (classAndLevel === "Druid 1") {
    document.getElementById("form214_3").value = "Druid";
    document.getElementById("form196_3").value = "WIS";
    document.getElementById("form194_3").value = 10 + wisdomModifier;
    statChecker(wisdomModifier + 2, "form195_3");
    document.getElementById("form97_3").value = 2;
    spellAdder(druidSpells.slice(), wisdomModifier);
    cantripAdder(druidCantrips.slice(), druidCantripCount);
  } else if (classAndLevel === "Sorcerer 1") {
    document.getElementById("form214_3").value = "Sorcerer";
    document.getElementById("form196_3").value = "CHA";
    document.getElementById("form194_3").value = 10 + charismaModifier;
    statChecker(charismaModifier + 2, "form195_3");
    document.getElementById("form97_3").value = 2;
    spellAdder(sorcererSpells.slice(), charismaModifier);
    cantripAdder(sorcererCantrips.slice(), sorcererCantripCount);
  } else if (classAndLevel === "Warlock 1") {
    document.getElementById("form214_3").value = "Warlock";
    document.getElementById("form196_3").value = "CHA";
    document.getElementById("form194_3").value = 10 + charismaModifier;
    statChecker(charismaModifier + 2, "form195_3");
    document.getElementById("form97_3").value = 1;
    spellAdder(warlockSpells.slice(), charismaModifier);
    cantripAdder(warlockCantrips.slice(), warlockCantripCount);
  } else if (classAndLevel === "Wizard 1") {
    document.getElementById("form214_3").value = "Wizard";
    document.getElementById("form196_3").value = "INT";
    document.getElementById("form194_3").value = 10 + intelligenceModifier;
    statChecker(intelligenceModifier + 2, "form195_3");
    document.getElementById("form97_3").value = 2;
    spellAdder(wizardSpells.slice(), intelligenceModifier);
    cantripAdder(wizardCantrips.slice(), wizardCantripCount);
  }
}

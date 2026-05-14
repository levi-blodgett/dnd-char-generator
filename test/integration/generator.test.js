import { describe, it, expect, beforeAll } from "vitest";
import { loadPage } from "../helpers/setup.js";

const VALID_CLASSES = [
  "Barbarian", "Bard", "Cleric", "Druid", "Fighter",
  "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer",
  "Warlock", "Wizard",
];

const VALID_ALIGNMENTS = [
  "Lawful Good", "Neutral Good", "Chaotic Good",
  "Lawful Neutral", "True Neutral", "Chaotic Neutral",
  "Lawful Evil", "Neutral Evil", "Chaotic Evil",
];

describe("generate_initial_character (logical / standard version)", () => {
  let win, doc;

  beforeAll(() => {
    ({ window: win, document: doc } = loadPage());
    // Page load already called generate_initial_character(standard_version);
    // call again explicitly to ensure a fresh character is written to the DOM.
    win.generate_initial_character(win.standard_version);
  });

  // The 6 ability scores are written to these form field IDs by generate_character().
  const STAT_FIELDS = ["form83_1", "form84_1", "form82_1", "form86_1", "form81_1", "form85_1"];

  it("all 6 ability score fields are populated with integers in [1, 20]", () => {
    for (const id of STAT_FIELDS) {
      const raw = doc.getElementById(id).value;
      const val = parseInt(raw, 10);
      expect(Number.isInteger(val), `${id} = "${raw}" is not an integer`).toBe(true);
      expect(val, `${id} out of range`).toBeGreaterThanOrEqual(1);
      expect(val, `${id} out of range`).toBeLessThanOrEqual(20);
    }
  });

  it("class field is a recognised class at level 1", () => {
    const classField = doc.getElementById("form94_1").value;
    expect(classField).toBeTruthy();
    const className = classField.replace(" 1", "");
    expect(VALID_CLASSES).toContain(className);
  });

  it("alignment field is a recognised alignment", () => {
    const alignmentField = doc.getElementById("form92_1").value;
    expect(VALID_ALIGNMENTS).toContain(alignmentField);
  });

  it("armor class is a positive integer", () => {
    const ac = parseInt(doc.getElementById("form73_1").value, 10);
    expect(Number.isInteger(ac)).toBe(true);
    expect(ac).toBeGreaterThanOrEqual(1);
  });

  it("character name is non-empty", () => {
    const name = doc.getElementById("form96_1").value;
    expect(name).toBeTruthy();
    expect(name.trim().length).toBeGreaterThan(0);
  });

  it("distribution: 1000 characters cover ≥ 10 of the 12 classes", () => {
    const seen = new Set();
    for (let i = 0; i < 1000; i++) {
      win.generate_initial_character(win.standard_version);
      const classField = doc.getElementById("form94_1").value;
      seen.add(classField.replace(" 1", ""));
    }
    expect(seen.size).toBeGreaterThanOrEqual(10);
  });
});

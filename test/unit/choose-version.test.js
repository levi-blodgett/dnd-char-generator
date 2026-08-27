/**
 * Tests for the version toggle in src/chooseVersion.js.
 *
 * Phase 3 removes dynamic <script> loading. switchScripts() now:
 *  1. Flips the internal _isLogical boolean.
 *  2. Updates the #top_button label.
 *  3. Updates window.standard_version / roll_version / pointbuy_version
 *     to point to the newly-active generator's stat functions.
 */
import { beforeEach, describe, expect, it } from "vitest";
import {
  switchScripts,
  _resetForTests,
  logical,
  random,
} from "../../src/chooseVersion.js";

const INITIAL_LABEL = "Switch to Random Version";
const AFTER_FIRST_SWITCH = "Switch to Logical Version";

beforeEach(() => {
  _resetForTests(); // restore _isLogical = true
  document.body.innerHTML = `<button id="top_button">${INITIAL_LABEL}</button>`;
  // Seed window version refs to logical (mirrors index.js initial state)
  window.standard_version = logical.standard_version;
  window.roll_version = logical.roll_version;
  window.pointbuy_version = logical.pointbuy_version;
});

describe("switchScripts - button label", () => {
  it("label is 'Switch to Logical Version' after first switch (to random)", () => {
    switchScripts();
    expect(document.getElementById("top_button").innerHTML).toBe(AFTER_FIRST_SWITCH);
  });

  it("label is 'Switch to Random Version' after second switch (back to logical)", () => {
    switchScripts();
    switchScripts();
    expect(document.getElementById("top_button").innerHTML).toBe(INITIAL_LABEL);
  });

  it("alternates correctly across four switches", () => {
    const btn = document.getElementById("top_button");
    switchScripts(); expect(btn.innerHTML).toBe(AFTER_FIRST_SWITCH);
    switchScripts(); expect(btn.innerHTML).toBe(INITIAL_LABEL);
    switchScripts(); expect(btn.innerHTML).toBe(AFTER_FIRST_SWITCH);
    switchScripts(); expect(btn.innerHTML).toBe(INITIAL_LABEL);
  });
});

describe("switchScripts - window version functions", () => {
  it("window.standard_version points to random generator after switch to random", () => {
    switchScripts();
    expect(window.standard_version).toBe(random.standard_version);
    expect(window.roll_version).toBe(random.roll_version);
    expect(window.pointbuy_version).toBe(random.pointbuy_version);
  });

  it("window.standard_version points to logical generator after switching back", () => {
    switchScripts();
    switchScripts();
    expect(window.standard_version).toBe(logical.standard_version);
    expect(window.roll_version).toBe(logical.roll_version);
    expect(window.pointbuy_version).toBe(logical.pointbuy_version);
  });
});

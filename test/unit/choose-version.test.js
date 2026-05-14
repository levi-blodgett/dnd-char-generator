/**
 * Regression tests for the version-switch bug in src/chooseVersion.js.
 *
 * Root cause: The initial #top_button innerHTML in index.html contains leading
 * and trailing whitespace, so `innerHTML === "Switch to Random Version"` is
 * FALSE on the very first click. The else-branch fires instead, leaving the
 * button label unchanged while the version DOES switch — the label is
 * permanently off-by-one from that point forward.
 *
 * Fix: replace innerHTML string comparison with a boolean state variable.
 */
import { describe, it, expect, beforeEach } from "vitest";
import { loadChooseVersionOnly } from "../helpers/setup.js";

describe("switchScripts - version toggle", () => {
  let doc;

  beforeEach(() => {
    ({ document: doc } = loadChooseVersionOnly());
  });

  it("button label says 'Switch to Logical Version' after first switch (to random)", () => {
    // Bug: initial innerHTML has whitespace → comparison fails → label stays wrong.
    switchScripts();
    expect(doc.getElementById("top_button").textContent.trim()).toBe("Switch to Logical Version");
  });

  it("random_versionactiveScript is active after first switch", () => {
    switchScripts();
    expect(doc.getElementById("random_versionactiveScript")).not.toBeNull();
    expect(doc.getElementById("logical")).toBeNull();
    expect(doc.getElementById("logical_versionactiveScript")).toBeNull();
  });

  it("button label says 'Switch to Random Version' after second switch (back to logical)", () => {
    switchScripts();
    switchScripts();
    expect(doc.getElementById("top_button").textContent.trim()).toBe("Switch to Random Version");
  });

  it("logical_versionactiveScript is active after second switch", () => {
    switchScripts();
    switchScripts();
    expect(doc.getElementById("logical_versionactiveScript")).not.toBeNull();
    expect(doc.getElementById("random_versionactiveScript")).toBeNull();
  });

  it("alternates correctly across four switches", () => {
    const button = doc.getElementById("top_button");
    switchScripts(); // → random
    expect(button.textContent.trim()).toBe("Switch to Logical Version");
    switchScripts(); // → logical
    expect(button.textContent.trim()).toBe("Switch to Random Version");
    switchScripts(); // → random
    expect(button.textContent.trim()).toBe("Switch to Logical Version");
    switchScripts(); // → logical
    expect(button.textContent.trim()).toBe("Switch to Random Version");
  });
});

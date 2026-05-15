import * as logical from "./logical/index.js";
import * as random from "./random/index.js";

// Tracks which generator is active; true = logical, false = random.
let _isLogical = true;

// Update window.standard_version / roll_version / pointbuy_version so that
// the inline onclick handlers in index.html always pass the right generator's
// stat functions after a version switch.
function _syncWindowVersions(gen) {
  if (typeof window !== "undefined") {
    window.standard_version = gen.standard_version;
    window.roll_version = gen.roll_version;
    window.pointbuy_version = gen.pointbuy_version;
  }
}

export function switchScripts() {
  _isLogical = !_isLogical;
  const gen = _isLogical ? logical : random;
  document.getElementById("top_button").innerHTML = _isLogical
    ? "Switch to Random Version"
    : "Switch to Logical Version";
  _syncWindowVersions(gen);
}

export function generate_new_character(version) {
  if (_isLogical) {
    logical.generate_new_character(version);
  } else {
    random.generate_new_character(version);
  }
}

// Exported for test isolation — resets module state between test cases.
export function _resetForTests() {
  _isLogical = true;
}

// Re-export both generator namespaces so index.js can access them without a
// separate import of the generator files.
export { logical, random };

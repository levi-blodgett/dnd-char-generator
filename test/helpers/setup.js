import { readFileSync } from "fs";
import { join } from "path";

const ROOT = join(import.meta.dirname, "../..");
// Indirect eval: always runs in global (window) scope, not strict-module scope.
const geval = eval; // eslint-disable-line no-eval

function readSrc(filename) {
  return readFileSync(join(ROOT, "src", filename), "utf-8");
}

/**
 * Load order mirrors the <script> tag order in index.html.
 * All files are concatenated into one string before evaling so that let/const
 * declarations from earlier files are in scope for later files (simulating a
 * shared browser global scope).
 */
const LOAD_ORDER = [
  "checkboxes.js",
  "logical_version.js",
  "chooseVersion.js",
  "styling.js",
  "dropdowns.js",
];

/**
 * Loads index.html into the Vitest jsdom global document, then evals all
 * src/ scripts as one concatenated block so cross-file globals are visible.
 * Returns { window, document }.
 */
export function loadPage() {
  const html = readFileSync(join(ROOT, "index.html"), "utf-8");
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  document.body.innerHTML = bodyMatch ? bodyMatch[1] : html;

  const allCode = LOAD_ORDER.map(readSrc).join("\n;\n");
  geval(allCode);

  return { window, document };
}

/**
 * Minimal DOM for testing chooseVersion.js in isolation.
 */
/**
 * Minimal DOM for testing chooseVersion.js in isolation.
 * Uses the same indented button text that index.html produces so the
 * whitespace-mismatch bug is faithfully reproduced.
 */
export function loadChooseVersionOnly() {
  document.body.innerHTML = `
    <button id="top_button">
      Switch to Random Version
    </button>
    <div id="scripts">
      <script id="logical" src="build/logical_version.js"></script>
    </div>
  `;
  geval(readSrc("chooseVersion.js"));
  return { window, document };
}

import { readFileSync } from "fs";
import { join } from "path";

const ROOT = join(import.meta.dirname, "../..");

const html = readFileSync(join(ROOT, "index.html"), "utf-8");
const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);

/**
 * Populate jsdom with index.html body so DOM-dependent functions
 * (generate_character, initDropdowns, etc.) can run.
 * Call in beforeAll/beforeEach before invoking any generator functions.
 */
export function setupPageDOM() {
  document.body.innerHTML = bodyMatch ? bodyMatch[1] : html;
}

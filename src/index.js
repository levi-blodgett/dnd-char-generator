import { switchScripts, generate_new_character, logical } from "./chooseVersion.js";
import { replaceChecks } from "./checkboxes.js";
import { buttonStyling } from "./styling.js";
import { initDropdowns } from "./dropdowns.js";

// Initialize UI — these must run after the HTML DOM is ready.
// The bundle is loaded at the bottom of <body>, so the DOM is already present.
replaceChecks(false);
buttonStyling(document.querySelectorAll(".top_buttons"));
initDropdowns();

// Expose functions referenced by inline onclick handlers in index.html.
window.switchScripts = switchScripts;
window.generate_new_character = generate_new_character;

// Initial stat-generation functions (logical mode is default).
window.standard_version = logical.standard_version;
window.roll_version = logical.roll_version;
window.pointbuy_version = logical.pointbuy_version;

// Generate the first character on page load.
logical.generate_initial_character(logical.standard_version);

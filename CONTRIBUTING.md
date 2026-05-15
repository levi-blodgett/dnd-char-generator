# Contributing to the D&D 5e Character Generator

This is a vanilla-JS static SPA. No framework, no backend. Changes land in `src/`; webpack bundles them into `dist/main.js`.

---

## Local Development

**Prerequisites:** Node.js 22+ and npm.

```bash
npm install          # install all dependencies
npm start            # dev server at localhost:8080 (opens browser automatically)
npm run build        # production bundle → dist/main.js
npm test             # fast test suite (~2 s, must stay green)
npm run smoke        # 100 k-character distribution check (slow, run before big generator changes)
npm run lint         # ESLint (0 errors required; warnings are pre-existing debt)
npm run format       # Prettier (auto-formats src/)
```

---

## Architecture Overview

```
src/
  index.js            ← webpack entry; initialises UI and exposes window globals
  chooseVersion.js    ← version toggle (logical ↔ random); single source of truth
  checkboxes.js       ← custom checkbox image system + skill proficiency helpers
  dropdowns.js        ← dropdown wiring and event listeners
  styling.js          ← button hover/click styling
  logical_version.js  ← re-export shim (delegates to src/logical/)
  random_version.js   ← re-export shim (delegates to src/random/)
  testing.js          ← standalone 100 k smoke harness (not in bundle)

  logical/            ← logical generator (≤500 lines per file)
    index.js          ← orchestrator
    background/       ← per-background logic
    equipment/        ← per-class equipment
    race/             ← race + subrace handling
    proficiencies.js, physical-traits.js, char-selection.js, weapon-profs.js, spells.js

  random/             ← random generator (≤500 lines per file)
    index.js          ← orchestrator (≤500 lines)
    selection.js      ← class/race/background/alignment dropdown logic
    spells.js         ← spellcasting block
    saving-throws.js  ← saving throws + hit die
    armor-class.js    ← AC calculation loop
    output.js         ← write_character (all form writes)
    background/       ← per-background logic
    equipment/        ← per-class equipment (dispatch table + 12 class files)
    race/             ← race + subrace decider
    proficiencies.js  ← class skill proficiencies + weapon proficiencies
    physical-traits.js
    util/             ← shared pure helpers
      stat-checkers.js, proficiency-adders.js, artisan-tools.js,
      instruments.js, skill-adder.js, language-helpers.js

  shared/data/        ← data shared between logical + random generators
    armor.js, bonds.js, flaws.js, ideals.js, languages.js, names.js,
    personality-traits.js, spells.js, stat-arrays.js, weapons.js

test/
  helpers/setup.js          ← DOM setup helper (injects index.html body into jsdom)
  unit/stat-modifier.test.js
  unit/random-number.test.js
  unit/choose-version.test.js
  integration/generator.test.js

dist/                 ← webpack output (gitignored)
index.html            ← SPA shell; loads dist/main.js only (99% auto-generated SVG — do not edit the body)
```

### Key design decisions

- **Single bundle.** Both generators ship in `dist/main.js`. The toggle in `chooseVersion.js` switches
  which generator's functions are exposed on `window.*` at runtime; no `<script>` tag swapping.
- **Window globals for onclick.** `index.html` uses inline `onclick` attributes (`switchScripts()`,
  `generate_new_character(roll_version)`, etc.). `src/index.js` attaches these to `window` explicitly
  so webpack bundling does not tree-shake them away.
- **Module-scope state.** Each generator keeps its own module-level stat variables. They do not share
  state — isolation is guaranteed by ES module scoping, not by the application.

---

## Module Map

| File | Exports | Purpose |
|---|---|---|
| `index.js` | — (side effects only) | UI init; window bindings |
| `chooseVersion.js` | `switchScripts`, `generate_new_character`, `_resetForTests`, `logical`, `random` | Version toggle |
| `checkboxes.js` | `replaceChecks`, `checkClick`, `setImage`, `getSrc`, `clear_All`, `click_on`, `click_off`, `add_click`, `remove_click` | Checkbox image system |
| `dropdowns.js` | `initDropdowns`, `format_initial_dropdowns`, `format_secondary_dropdowns`, `on_click_decider`, `on_dropdown_option_click`, `add_events_for_dropdowns` | Dropdown event wiring |
| `styling.js` | `buttonStyling`, `addButtonClickEvent`, `show_func` | Button hover style |
| `logical_version.js` | re-exports from `src/logical/index.js` | Logical generator shim |
| `random_version.js` | re-exports from `src/random/index.js` | Random generator shim |
| `logical/index.js` | `generate_character`, `generate_initial_character`, `generate_new_character`, `standard_version`, `roll_version`, `pointbuy_version` | Logical generator orchestrator |
| `random/index.js` | same public interface | Random generator orchestrator (≤500 lines) |
| `random/selection.js` | `make_nameGenerator`, `select_class`, `select_race`, `select_background`, `select_alignment` | DOM-reading selection helpers |
| `random/spells.js` | `apply_spells` | Per-class spellcasting setup |
| `random/saving-throws.js` | `apply_saving_throws_and_hp` | Saving throws + HP by class |
| `random/armor-class.js` | `apply_armor_class` | AC calculation from equipment |
| `random/output.js` | `write_character` | All final form writes |
| `random/util/language-helpers.js` | `make_language_helpers` | Language picker factory |
| `random/util/skill-adder.js` | `make_skill_adder` | Random skill proficiency factory |
| `random/util/instruments.js` | `randomMusicalInstrument` | Random instrument picker |
| `random/util/artisan-tools.js` | `random_artisan_tool` | Random artisan tool picker |
| `shared/data/` | various named exports | Data shared between both generators |

---

## Adding a Class, Race, or Background

Both generators are now split into modules (≤500 lines each). Find the right file before editing.

### Add a class

- **Equipment:** add a new `src/random/equipment/<class>.js` (copy an existing one) and register it in `src/random/equipment/index.js` dispatch table. Do the same in `src/logical/equipment/`.
- **Spell setup:** add a branch in `src/random/spells.js → apply_spells`.
- **Saving throws / HP:** add a branch in `src/random/saving-throws.js → apply_saving_throws_and_hp`.
- **Weapon proficiencies:** add a branch in both `src/random/proficiencies.js → apply_weapon_proficiencies` and `src/logical/proficiencies.js`.
- **Class proficiency skills:** add a branch in `src/random/proficiencies.js → apply_class_proficiencies`.
- **Class selection list:** update `src/random/selection.js → CLASSES` array.

### Add a race or background

- **Race:** add to `src/random/race/index.js → apply_race` and `src/logical/race/index.js`. Update `src/random/selection.js → RACE_KEYS` if adding a top-level race.
- **Background:** add a branch in `src/random/background/index.js → apply_background` and `src/logical/background/` (add a new file or extend `index.js`). Update `src/random/selection.js → BACKGROUNDS`.

### Add a dropdown option

New races with subraces need a dropdown entry in `index.html` and a `format_secondary_dropdowns`
call in `dropdowns.js → initDropdowns()`.

---

## Test Conventions

- **Framework:** Vitest + jsdom + `@testing-library/dom`.
- **DOM setup:** call `setupPageDOM()` from `test/helpers/setup.js` in `beforeAll` for any test that
  touches the DOM. Follow it with `replaceChecks(false)` if the test exercises checkbox or skill-click
  functions.
- **Unit tests** (`test/unit/`) import source functions directly; no DOM needed for pure logic.
- **Integration tests** (`test/integration/`) set up the full DOM then call generator entry points.
- **Behaviour, not implementation.** Tests assert observable output (field values, stat ranges,
  class/alignment counts) — not internal variable names or call counts.
- **Smoke test** (`npm run smoke`) is not part of `npm test`; run it manually before large generator changes.
- **Test isolation for `chooseVersion`:** call `_resetForTests()` in `afterEach` to reset the `_isLogical`
  module flag between cases.

---

## Lint and Format

ESLint (flat config, `eslint.config.js`) and Prettier (`.prettierrc`) are configured and integrated.

```bash
npm run lint      # must report 0 errors (warnings are pre-existing; fix opportunistically)
npm run format    # rewrites src/ in place
```

Prettier is the source of truth for formatting; ESLint's formatting rules are turned off via
`eslint-config-prettier`.

---

## PR Expectations

1. Run `npm test` — must be green.
2. Run `npm run lint` — must be 0 errors.
3. Run `npm run build` — must produce `dist/main.js` with exit 0.
4. For generator changes, also run `npm run smoke` and check distribution counts look reasonable.
5. Keep PRs small and focused. A behaviour change and a formatting pass belong in separate PRs.
6. Describe *why*, not just *what*, in the PR description.
7. `CONTRIBUTING.md`, `README.md`, and any affected docs update in the same PR as the code change.

---

## Scope and Roadmap

This generator targets **D&D 5e 2014 ruleset, level 1**. The active revival roadmap (`.agent/repo-revival/implementation-plan.md`) plans:

- Level 2–3 support with a data-driven sourcebook seam
- UI overhaul (preserving the printable character-sheet layout)
- Simplified character creation method: "Create <number> <logical/random> <rolling-method> character(s)"
  - Numerous filters underneath will be available as well

Out of scope: D&D 2024 ruleset, backend/server features, mobile-native app.

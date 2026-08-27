import { apply_barbarian_equipment } from "./barbarian.js";
import { apply_bard_equipment } from "./bard.js";
import { apply_cleric_equipment } from "./cleric.js";
import { apply_druid_equipment } from "./druid.js";
import { apply_fighter_equipment } from "./fighter.js";
import { apply_monk_equipment } from "./monk.js";
import { apply_paladin_equipment } from "./paladin.js";
import { apply_ranger_equipment } from "./ranger.js";
import { apply_rogue_equipment } from "./rogue.js";
import { apply_sorcerer_equipment } from "./sorcerer.js";
import { apply_warlock_equipment } from "./warlock.js";
import { apply_wizard_equipment } from "./wizard.js";

const CLASS_HANDLERS = {
  "Barbarian 1": apply_barbarian_equipment,
  "Bard 1": apply_bard_equipment,
  "Cleric 1": apply_cleric_equipment,
  "Druid 1": apply_druid_equipment,
  "Fighter 1": apply_fighter_equipment,
  "Monk 1": apply_monk_equipment,
  "Paladin 1": apply_paladin_equipment,
  "Ranger 1": apply_ranger_equipment,
  "Rogue 1": apply_rogue_equipment,
  "Sorcerer 1": apply_sorcerer_equipment,
  "Warlock 1": apply_warlock_equipment,
  "Wizard 1": apply_wizard_equipment,
};

export function dispatch_equipment(classAndLevel, ctx) {
  const handler = CLASS_HANDLERS[classAndLevel];
  if (handler) handler(ctx);
}

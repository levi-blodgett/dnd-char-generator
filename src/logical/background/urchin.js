import { add_click } from "../../checkboxes.js";
import { stat_checker } from "../util/stat-checkers.js";
import { random_trinket } from "./helpers.js";

export function apply_urchin_background(ctx) {
  const { dexterityModifier, tool_adder, tool_adder_2, equipment, features, className, race } = ctx;

  tool_adder_2(tool_adder("disguise kit"));
  tool_adder_2(tool_adder("thieves' tools"));
  add_click(4);
  stat_checker(dexterityModifier + 2, "form46_1");
  add_click(23);
  stat_checker(dexterityModifier + 2, "form32_1");
  equipment.push("Small knife");
  equipment.push("Map of hometown");
  equipment.push("Pet mouse");
  document.getElementById("form14_2").value = random_trinket() + " from parents";
  equipment.push("Set of common clothes");
  equipment.push("Belt Pouch");
  ctx.gold += 10;
  features.push(
    "City Secrets: You know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow."
  );
  document.getElementById("form15_2").value =
    "What made you start adventuring?\rWhat were the circumstances of your birth?\rWhat caused you to become an urchin?\rDid someone wrong you?\rAre you an orphan?\rDid your family's jobs fall through?\rWhy are you a " +
    className.toLowerCase() +
    "?\r" +
    "How did you go from urchin to " +
    className.toLowerCase() +
    "?\r" +
    "What does being a " +
    race +
    " mean to you?\r";
}

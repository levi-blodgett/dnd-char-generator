import { random_by_length } from "./util/random-by-length.js";
import { goodIdeals, neutralIdeals, evilIdeals } from "../shared/data/ideals.js";

export function pick_background_from_dropdown() {
  const checkboxes = document.querySelectorAll("input.background_class");
  const checked = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) checked.push(checkboxes[i].value);
  }
  return checked[Math.floor(Math.random() * checked.length)];
}

export function apply_alignment_from_dropdown(ctx) {
  const { alignment, flaws, ideals, lawfulFlaws, neutralFlaws, chaoticFlaws } = ctx;
  const checkboxes = document.querySelectorAll("input.alignment_class");
  const checked = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) checked.push(checkboxes[i].value);
  }
  const value = checked[Math.floor(Math.random() * checked.length)];
  const balance = value.split(" ", 1).toString();
  const morality = value.split(" ", 2)[1];

  ctx.alignmentChecker = true;
  alignment.push(balance);
  if (balance === "Lawful") random_by_length(lawfulFlaws, flaws, "form99_1");
  else if (balance === "Neutral") random_by_length(neutralFlaws, flaws, "form99_1");
  else if (balance === "Chaotic") random_by_length(chaoticFlaws, flaws, "form99_1");

  alignment.push(morality);
  if (morality === "Good") random_by_length(goodIdeals, ideals, "form100_1");
  else if (morality === "Neutral") random_by_length(neutralIdeals, ideals, "form100_1");
  else if (morality === "Evil") random_by_length(evilIdeals, ideals, "form100_1");
}

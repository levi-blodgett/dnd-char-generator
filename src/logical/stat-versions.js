import { get_random_number } from "../shared/dice.js";
import { STANDARD_ARRAY, POINT_BUY_COMBOS } from "../shared/data/stat-arrays.js";

export let stats = [];
export let stat1 = 0, stat2 = 0, stat3 = 0, stat4 = 0, stat5 = 0, stat6 = 0;
export let versionForChecking = 0;

export function standard_version() {
  stats = STANDARD_ARRAY.slice();
  [stat1, stat2, stat3, stat4, stat5, stat6] = stats;
  versionForChecking = 1;
  return stats;
}

export function roll_version() {
  function remove_smallest(arr) {
    arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1);
    return arr;
  }
  function get_random_stat() {
    const roll = [];
    for (let i = 0; i < 4; i++) roll.push(get_random_number(6));
    remove_smallest(roll);
    return roll;
  }
  function get_sum(arr) {
    return arr.reduce((s, n) => s + n, 0);
  }

  const sums = [
    get_sum(get_random_stat()),
    get_sum(get_random_stat()),
    get_sum(get_random_stat()),
    get_sum(get_random_stat()),
    get_sum(get_random_stat()),
    get_sum(get_random_stat()),
  ].sort((a, b) => b - a);

  stats = sums;
  [stat1, stat2, stat3, stat4, stat5, stat6] = stats;
  versionForChecking = 2;
  return 1;
}

export function pointbuy_version() {
  const idx = Math.floor(Math.random() * 65);
  const arr = POINT_BUY_COMBOS[idx];
  [stat1, stat2, stat3, stat4, stat5, stat6] = arr;
  stats = [stat1, stat2, stat3, stat4, stat5, stat6];
  versionForChecking = 3;
  return stats;
}

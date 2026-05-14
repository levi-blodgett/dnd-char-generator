import { describe, it, expect } from "vitest";
import { stat_modifier_generator } from "../../src/logical_version.js";

describe("stat_modifier_generator", () => {
  const cases = [
    [1, -4], [3, -4],
    [4, -3], [5, -3],
    [6, -2], [7, -2],
    [8, -1], [9, -1],
    [10, 0], [11, 0],
    [12, 1], [13, 1],
    [14, 2], [15, 2],
    [16, 3], [17, 3],
    [18, 4], [19, 4],
    [20, 5],
  ];

  it.each(cases)("stat %i → modifier %i", (stat, expected) => {
    expect(stat_modifier_generator(stat)).toBe(expected);
  });
});

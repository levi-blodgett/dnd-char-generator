import { describe, it, expect, beforeAll } from "vitest";
import { loadPage } from "../helpers/setup.js";

let win;

beforeAll(() => {
  ({ window: win } = loadPage());
});

describe("get_random_number", () => {
  it("always returns an integer in [1, n]", () => {
    for (let n = 1; n <= 20; n++) {
      for (let trial = 0; trial < 50; trial++) {
        const result = win.get_random_number(n);
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(n);
        expect(Number.isInteger(result)).toBe(true);
      }
    }
  });
});

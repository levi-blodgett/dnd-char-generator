import { describe, it, expect } from "vitest";
import { get_random_number } from "../../src/logical_version.js";

describe("get_random_number", () => {
  it("always returns an integer in [1, n]", () => {
    for (let n = 1; n <= 20; n++) {
      for (let trial = 0; trial < 50; trial++) {
        const result = get_random_number(n);
        expect(result).toBeGreaterThanOrEqual(1);
        expect(result).toBeLessThanOrEqual(n);
        expect(Number.isInteger(result)).toBe(true);
      }
    }
  });
});

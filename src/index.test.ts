import { TurboNumber } from "./index";

describe("class TurboNumber", function () {
  it("returns the number provided", () => {
    expect(new TurboNumber(10).result()).toBe(10);
  });

  it("divides integers", () => {
    const testCase = new TurboNumber(10);
    testCase.divide(5);
    expect(testCase.result()).toBe(2);
  });

  it("subtracts integers", () => {
    const testCase = new TurboNumber(10);
    testCase.subtract(5);
    expect(testCase.result()).toBe(5);
  });

  it("doesn't divide by 0", () => {
    const tn = new TurboNumber(10);
    expect(() => tn.divide(0)).toThrow("You cannot divide by zero");
  });

  it("chains operations", () => {
    expect(new TurboNumber(17).subtract(5).divide(-3).result()).toBe(-4);
  });

  // it("doesn't operate outside of range", () => {
  //   const tn = new TurboNumber(Number.MIN_SAFE_INTEGER);
  //   -996 -995
  //   tn.subtract(4);
  //   expect(() => tn.result()).toThrow("out of range");
  // });
});

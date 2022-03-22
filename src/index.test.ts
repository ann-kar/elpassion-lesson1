import { TurboNumber } from "./index";

describe("class TurboNumber", function () {

  let tn: TurboNumber;
  beforeEach(() => {
    tn = new TurboNumber(10)
  })

  it("returns the number provided", () => {
    expect(tn.result()).toBe(10);
  });

  it("divides integers", () => {
    tn.divide(5);
    expect(tn.result()).toBe(2);
  });

  it("subtracts integers", () => {
    tn.subtract(5);
    expect(tn.result()).toBe(5);
  });

  it("doesn't divide by 0", () => {
    expect(() => tn.divide(0)).toThrow("You cannot divide by zero");
  });

  it("chains operations", () => {
    expect(tn.subtract(5).divide(-3).result()).toBeCloseTo(-1.667);
  });

  it("doesn't operate outside of range (with MIN_SAFE_INTEGER)", () => {
    expect(() => new TurboNumber(Number.MIN_SAFE_INTEGER).subtract(4)).toThrow("Outside of range");
  });

  it("doesn't operate outside of range (with MAX_SAFE_INTEGER)", () => {
    expect(() => tn.subtract(Number.MAX_SAFE_INTEGER)).toThrow("Outside of range");
  });
});

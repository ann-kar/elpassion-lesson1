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

  // it("doesn't operate outside of range", () => {
  //   const tn = new TurboNumber(Number.MIN_SAFE_INTEGER);
  //   -996 -995
  //   tn.subtract(4);
  //   expect(() => tn.result()).toThrow("out of range");
  // });
});

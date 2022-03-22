import { TurboNumber } from "./index";

describe(TurboNumber.name, () => {
  let tn: TurboNumber;
  beforeEach(() => {
    tn = new TurboNumber(10);
  });

  it("returns the provided number if no operations are made", () => {
    expect(tn.result()).toBe(10);
  });

  it("subtracts a number from the saved number", () => {
    tn.subtract(6);
    expect(tn.result()).toBe(4);
  });

  it("divides the saved number by the number provided", () => {
    tn.divide(5);
    expect(tn.result()).toBe(2);
  });

  it("allows chaining", () => {
    expect(tn.divide(5).subtract(1).result()).toBe(1);
  });

  it("doesn't allow division by zero", () => {
    expect(() => tn.divide(0)).toThrow("You cannot divide by zero!");
  });

  it("doesn't allow to calculate numbers smaller than MIN_SAFE_INTEGER", () => {
    const tn = new TurboNumber(Number.MIN_SAFE_INTEGER + 2);
    expect(() => tn.subtract(5)).toThrow(
      "Value outside of accepted range (integer overflow)"
    );
  });

  it("doesn't allow to calculate numbers larger than MAX_SAFE_INTEGER", () => {
    const tn = new TurboNumber(Number.MAX_SAFE_INTEGER - 2);
    expect(() => tn.subtract(-5)).toThrow(
      "Value outside of accepted range (integer overflow)"
    );
  });
});

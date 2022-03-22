import { TurboNumber } from "./index";

describe(TurboNumber.name, () => {

  it("returns the provided number if no operations are made", () => {
    expect(new TurboNumber(10).result()).toBe(10);
  });

  it("subtracts a number from the saved number", () => {
    const tn = new TurboNumber(10);
    tn.subtract(6);
    expect(tn.result()).toBe(4);
  });
});

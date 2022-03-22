import { TurboNumber } from "./index";

describe(TurboNumber.name, () => {
  it("returns the provided number if no operations are made", () => {
    expect(new TurboNumber(10).result()).toBe(10);
  });
});

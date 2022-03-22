import {NokiaTexter} from "./nokia";

describe(NokiaTexter.name, () => {
  it("returns string without spaces as is", () => {
      expect(new NokiaTexter("NieZmieniajNiczego").squeeze()).toBe("NieZmieniajNiczego");
  });
});

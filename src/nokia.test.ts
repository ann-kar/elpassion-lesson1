import { NokiaTexter } from "./nokia";

describe(NokiaTexter.name, () => {
  it.skip("returns string without spaces as is", () => {
    expect(new NokiaTexter("NieZmieniajNiczego").squeeze()).toBe(
      "NieZmieniajNiczego"
    );
  });

  it("returns 'ZARAZwracam' when 'zaraz wracam' is given", () => {
    expect(new NokiaTexter("zaraz wracam").squeeze()).toBe("ZARAZwracam");
  });

  it("returns 'NIEczekajZkolacja.' when 'Nie czekaj z kolacja.' is given", () => {
    expect(new NokiaTexter("Nie czekaj z kolacja.").squeeze()).toBe(
      "NIEczekajZkolacja."
    );
  });
});

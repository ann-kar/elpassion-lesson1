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

  it.only("throws error 'MessageTooLong' if shortened string is longer than 160 chars", () => {
    const example = new NokiaTexter(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    );
    expect(() => example.squeeze()).toThrowError("MessageTooLong");
  });
});

export class NokiaTexter {
  text: string;
  constructor(text: string) {
    this.text = text;
  }
  squeeze() {
    this.text = this.text.trim();
    if (!this.text.includes(" ")) return this.text;
    if (this.text.split(" ").join("").length > 160)
      throw new Error("MessageTooLong");
    return this.text
      .split(" ")
      .map((word, i) => (i % 2 === 0 ? word.toUpperCase() : word))
      .join("");
  }
}

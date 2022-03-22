export class NokiaTexter {
  text: string;
  constructor(text: string) {
    this.text = text;
  }
  squeeze() {
    if (!this.text.includes(" ")) return this.text;
    return this.text
      .split(" ")
      .map((word, i) => (i % 2 === 0 ? word.toUpperCase() : word))
      .join("");
  }
}

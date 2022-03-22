export class NokiaTexter {
  text: string;
  constructor(text: string) {
    this.text = text;
  }
  squeeze() {
      if (!this.text.includes(" ")) return this.text;
  }
}

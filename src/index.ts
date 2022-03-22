export class TurboNumber {
  num: number;
  constructor(num: number) {
    this.num = num;
  }

  subtract(x: number) {
    this.num -= x;
    return this;
  }

  divide(x: number) {
    this.num = this.num / x;
    return this;
  }

  result() {
    return this.num;
  }
}

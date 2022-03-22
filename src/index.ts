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
    if (x === 0) {
      throw new Error("You cannot divide by zero!");
    }
    this.num = this.num / x;
    return this;
  }

  result() {
    return this.num;
  }
}

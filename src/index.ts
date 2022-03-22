export class TurboNumber {
  num: number;
  constructor(num: number) {
    this.num = num;
  }

  subtract(x: number) {
    this.num -= x;
  }

  result() {
    return this.num;
  }
}

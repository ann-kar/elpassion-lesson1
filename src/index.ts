export class TurboNumber {
    num: number;
    constructor(num: number) {
        this.num = num;
    }
    subtract(x: number) {
        this.num = this.num - x;
    }
    divide(x: number) {
        if (x === 0) {
            throw new Error("You cannot divide by zero")
        }
        this.num = this.num / x;
    }
    result() {
        return this.num;
    }
}
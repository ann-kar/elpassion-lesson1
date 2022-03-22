export class TurboNumber {
    num: number;
    constructor(num: number) {
        this.num = num;
    }
    subtract(x: number) {
        if ((Number.MAX_SAFE_INTEGER - x < this.num) || (Number.MIN_SAFE_INTEGER + x > this.num)) {
            throw new Error("Outside of range")
        }
        this.num = this.num - x;
        return this;
    }
    divide(x: number) {
        if (x === 0) {
            throw new Error("You cannot divide by zero")
        }
        this.num = this.num / x;
        return this;
    }
    result() {
        return this.num;
    }
}
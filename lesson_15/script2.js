function createCalcObject(privatecalc) {
    this.count = privatecalc;

    this.sum = function (value) {
        this.count += value;
    }
    this.mult = function (value) {
        this.count *= value;
    }
    this.sub = function (value) {
        this.count -= value;
    }
    this.div = function (value) {
        this.count /= value;
    }
    this.set = function (value) {
        this.count = value;
    }
}

const calc = new createCalcObject(10);

calc.sum(5);
console.log(calc.count)
calc.mult(10);
console.log(calc.count);
calc.sub(40);
console.log(calc.count);
calc.div(10);
console.log(calc.count);
calc.set(100);
console.log(calc.count);


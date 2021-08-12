function Hamburger(size) {
    this.size = size;
    this.topping = [];
}

Hamburger.SIZE_SMALL = {
    price: 50,
    calories: 20
};
Hamburger.SIZE_MEDIUM = {
    price: 75,
    calories: 30
};
Hamburger.SIZE_LARGE = {
    price: 100,
    calories: 40
};
Hamburger.TOPPING_CHEESE = {
    price: 10,
    calories: 20
};
Hamburger.TOPPING_SALAD = {
    price: 20,
    calories: 5
};
Hamburger.TOPPING_POTATO = {
    price: 15,
    calories: 10
};
Hamburger.TOPPING_FLAVORING = {
    price: 10,
    calories: 15
};
Hamburger.TOPPING_MAYO = {
    price: 20,
    calories: 5
};

Hamburger.prototype.addTopping = function (topping) {
    const addTopping = this.topping.indexOf(topping);
    return this.topping.push(topping);
}

function getSum(arr, prop) {
    if (arr.length > 0) {
        let sum = 0;
        arr.forEach((item) => {
            sum += item[prop];
        });
        return sum;
    } else return 0;
}

Hamburger.prototype.getPrice = function () {
    const sum1 = this.size.price;
    const sum2 = getSum(this.topping, 'price');
    return sum1 + sum2 + ' тугриков.';
}
Hamburger.prototype.getCallories = function () {
    const sum1 = this.size.calories;
    const sum2 = getSum(this.topping, 'calories');
    return sum1 + sum2 + 'калорий';
}
let price;
let calories;


const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);
hamburger.addTopping(Hamburger.TOPPING_SALAD);

console.log("Price with sauce:" + hamburger.getPrice());
console.log("Callories with sauce:" + hamburger.getCallories());
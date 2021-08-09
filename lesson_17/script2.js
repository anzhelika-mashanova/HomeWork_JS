class Hamburger {
    static SIZE_SMALL = {
        price: 50,
        calories: 20
    };
    static SIZE_MEDIUM = {
        price: 75,
        calories: 30
    };
    static SIZE_LARGE = {
        price: 100,
        calories: 40
    };
    static TOPPING_CHEESE = {
        price: 10,
        calories: 20
    };
    static TOPPING_SALAD = {
        price: 20,
        calories: 5
    };
    static TOPPING_POTATO = {
        price: 15,
        calories: 10
    };
    static TOPPING_FLAVORING = {
        price: 15,
        calories: 10
    };
    static TOPPING_MAYO = {
        price: 20,
        calories: 5
    };

    constructor(size, topping) {
        this._SIZE = size;
        this._TOPPING = [];
    }

    addTopping(topping) {
        const indexTop = this._TOPPING.indexOf(topping);
        return this._TOPPING.push(topping);
    }

    getPrice() {
        const sum1 = this._SIZE.price;
        const sum2 = this.getSum(this._TOPPING, 'price');
        return sum1 + sum2 + ' тугриков.';
    }

    getSum(arr, prop) {
        if (arr.length > 0) {
            let sum = 0;
            arr.forEach((item) => {
                sum += item[prop];
            });
            return sum;
        } else return 0;
    }

    getCalories() {
        const sum1 = this._SIZE.calories;
        const sum2 = this.getSum(this._TOPPING, 'calories');
        return sum1 + sum2 + 'калорий';
    }


}


const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);

console.log("Price with sauce:" + hamburger.getPrice());
console.log("Calories with sauce:" + hamburger.getCalories());
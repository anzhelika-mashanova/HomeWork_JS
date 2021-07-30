const user = {
    firstName: "Nikola",
    secondName: "Tesla",
    getFullName: function () {
        const fullName = this.firstName + " " + this.secondName;
        return fullName;
    }
}
console.log(user.getFullName());
console.log(user.getFullName.call({firstName: "Steve", secondName: "Jobs"}));
console.log(user.getFullName.apply({firstName: "Steve", secondName: "Wozniak "}));

let newFullName = user.getFullName.bind({firstName: "Julia ", secondName: "Roberts"});
console.log(newFullName());

function userNew(firstName, secondName) {
    this.firstName = firstName;
    this.secondName = secondName;
}

let userIt = new userNew("Steve", "Wozniak");
let userApple = new userNew("Steve", "Jobs");
let userFilm = new userNew("Julia", "Roberts");
console.log(userApple);
console.log(userIt);
console.log(userFilm);

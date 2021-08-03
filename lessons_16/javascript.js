function taskOne() {
    const personJohn = {
        name: "John",
        sayHello: function () {
            console.log(`Hello, I'm ${this.name}`);
        }
    }

    const sysAdmin = {
        name: "Bob",
        __proto__: personJohn
    }

    const clientNatalia = {
        name: "Natalia",
        __proto__: sysAdmin
    }

    sysAdmin.sayHello();
    clientNatalia.sayHello();
}

taskOne();

function taskTwo() {
    function Person(name) {
        this.name = name;
        this.sayHello = function () {
            console.log(`Hello, I'm ${this.name}`);
        }
    }

    function Employee(name) {
        this.name = name;
    }

    function Client(name) {
        this.name = name;
    }

    Employee.prototype = new Person();
    Client.prototype = new Person();

    const personJohn = new Person("John");
    const sysAdmin = new Employee("Bob");
    const clientNatalia = new Client("Natalia");

    personJohn.sayHello();
    sysAdmin.sayHello();
    clientNatalia.sayHello();
}

taskTwo();

function taskThree() {

    function Student(n, array) {
        this.name = n;
        this.arr = array;
        this.averageMark = function () {
            let mark = 0;
            for (let i = 0; i < this.arr.length; i++) {
                mark += this.arr[i];
            }
            const average = mark / this.arr.length;
            return average;
        }
    }

    const students = [
        new Student('Student 1', [10, 9, 8, 0, 10]),
        new Student('Student 12', [10, 0, 8, 0, 3, 4])
    ];
    console.log(students);
    console.log(students[0].averageMark());
    console.log(students[1].averageMark());
}

taskThree();
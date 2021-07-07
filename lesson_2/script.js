let points = 0; 
let point = 10;
let count = 0;       
const guestion1 = ('Сколько будет 2 + 2');
const answer1 = prompt(guestion1);
const answer1true = "-22";
if (answer1 == answer1true) points = points + point; 
count++;

const guestion2 = ('Назовите оператор присваивания в JavaScript');
const answer2 = prompt(guestion2);
const answer2true = "=";
if (answer2 == answer2true) points = points + point; 
count++;

const guestion3 = ('Сколько будет 5 / 0?');
const answer3 = prompt(guestion3);
const answer3true = "Infinity";
if (answer3 == answer3true) points = points + point; 
count++;

const guestion4 = ('Одинаково ли работает == и === в JavaScript?');
const answer4 = prompt(guestion4);
const answer4true = "no";
if (answer4 == answer4true) points = points + point; 
count++;

const guestion5 = ('Чему равно выражение Boolean(null) в JavaScript?');
const answer5 = prompt(guestion5);
const answer5true = "false";
if (answer5 == answer5true) points = points + point; 
count++;

alert( "Ваш результат: " + points + " баллов");

let x = points / (count*point)*100;
if (x >= 60) {
    alert ("Сдал!");
} else alert ("Не сдал!");


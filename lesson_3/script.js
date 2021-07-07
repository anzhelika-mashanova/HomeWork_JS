function askQuestion(question) {
    const answer = prompt(question);
    return answer;
}
let numberFirst = Number(askQuestion("Введите первое число"));
let numberSecond = Number(askQuestion("Введите второе число"));
let operation = askQuestion("Введите операцию с предложеного списка: + или add; - или sub; * или mult; / или div; % или mod");

function print(a, math, b, answer) {
    const result = alert (a + " " + math + " " + b + " = " + answer);
    return result;
}
function sum(a, b) {
    const result = a + b;
    return print(numberFirst, operation, numberSecond, result);
}
function sub(a, b) {
    const result = a - b;
    return print(numberFirst, operation, numberSecond, result);
}
function mult(a, b) {
    const result = a * b;
    return print(numberFirst, operation, numberSecond, result);
}
function div(a, b) {
    const result = a / b;
    return print(numberFirst, operation, numberSecond, result);
}
function mod(a, b) {
    const result = a % b;
    return print(numberFirst, operation, numberSecond, result);
}
if (operation == "+" || operation == "add"){
    sum(numberFirst, numberSecond)
}else if (operation == "-"|| operation == "sub"){
    sub(numberFirst, numberSecond)
}else if (operation == "*"|| operation == "mult"){
    mult(numberFirst, numberSecond)
}else if (operation == "/"|| operation == "div"){
    div(numberFirst, numberSecond)
}else if (operation == "%"|| operation == "mod"){
    mod(numberFirst, numberSecond)
}

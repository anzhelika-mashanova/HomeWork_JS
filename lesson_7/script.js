function getNumber() {
  let num = +prompt("Enter number: ");
  return num;
}

let number = getNumber();

function printNumbers(num) {
  return num > 0 ? printNumbers(num - 1) + num.toString() + " " : "";
}

console.log(printNumbers(number));

function sumString(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== " ") {
      sum += parseFloat(numbers[i]);
    }
  }
  return console.log("Сумма чисел: " + sum);
}

sumString(printNumbers(number));
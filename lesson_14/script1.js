//task 1
function arrayFill(value, length) { 
	let arr = [];
	for (let i = 0; i < length; i++) {
		arr.push(value);
	}
	return arr;
}

console.log(arrayFill('a', 5));

//task 2.1
let arr2 = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let i = 0; i < arr2.length; i++) {
	for (let b = 0; b < arr2[i].length; b++) {
		sum += arr2[i][b];
	}
}

console.log(sum);

//task 2.2 невірний варіант
const data = [[1, 2, 3], [4, 5], [6]];
const flat = data.reduce((total, amount) => {
  return total.concat(amount);
}, []);

const sum2 = flat.reduce ((total, amount) => total + amount);

console.log(sum2);

//task 2.3 
const arr3 = [[1, 2, 3], [4, 5], [6]];
arr3.flat();
const sum3 = flat.reduce ((total, amount) => total + amount);

console.log(sum3);

//task 3 
let initialInputValue = document.getElementById("initialValue");
let countersContainer = document.getElementById("countersContainer");

function createCounter(outputElement) {
  let counter = +initialInputValue.value;
  return function () {
    counter += 1;
    outputElement.textContent = `Counter value: ${counter}`;
  };
}

function createCounterBtnClickHandler() {
  countersContainer.append(createCounterBlocK());
  initialInputValue.value = "";
}

function createCounterBlocK() {
  let newContainerElement = document.createElement("div");
  newContainerElement.className = "input-group flex-nowrap mt-3";
  let outputElement = document.createElement("span");
  outputElement.textContent = `Counter value: ${initialInputValue.value}`;
  let counterBtnEl = document.createElement("button");
  counterBtnEl.textContent = "Next Value";
  counterBtnEl.className = "btn btn-sm btn-success";
  newContainerElement.append(outputElement);
  newContainerElement.append(counterBtnEl);
  let counter = createCounter(outputElement);
  counterBtnEl.onclick = counter;

  return newContainerElement;
}
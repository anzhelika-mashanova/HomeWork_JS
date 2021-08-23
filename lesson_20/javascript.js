function addButtonClickHandler() {
    let getNameInput = document.querySelector('#nameInput');
    let getAmountInput = document.getElementById('amountInput');
    let getPriceInput = document.getElementById('priceInput');
    if (isValid(getNameInput, getAmountInput, getPriceInput)) {
        let tableBodyEl = document.querySelector("#myTable tbody");
        let newRow = createTableRowWithContent(getNameInput.value, getAmountInput.value, getPriceInput.value);
        tableBodyEl.append(newRow);
        let setPriceSum = document.getElementById('summ');
        setPriceSum.textContent = sumElementPrice();
        clearInput(getNameInput, getAmountInput, getPriceInput);
    } else {
        alert('enter all values to form');
        clearInput(getNameInput, getAmountInput, getPriceInput);
    }
}

function clearInput(name, amount, price) {
    name.value = "";
    price.value = "";
    amount.value = "";
}

function createTableRowWithContent(name, amount, price) {
    let newProduct = document.createElement("tr");
    let newFirstColumn = document.createElement("td");
    newFirstColumn.textContent = name;
    let newSecondColumn = document.createElement("td");
    newSecondColumn.textContent = amount;
    let newThirdColumn = document.createElement("td");
    newThirdColumn.textContent = price;
    newThirdColumn.classList.add('sum');
    let newDelColumn = document.createElement("td");
    newDelColumn.append(createDelButton());
    newProduct.append(newFirstColumn);
    newProduct.append(newSecondColumn);
    newProduct.append(newThirdColumn);
    newProduct.append(newDelColumn);
    sumElementPrice();
    return newProduct;
}

function createDelButton() {
    const delBtnEl = document.createElement("span");
    delBtnEl.textContent = "x";
    delBtnEl.className = "delete-button";
    delBtnEl.onclick = removeParentElement;
    return delBtnEl;
}

function removeParentElement() {
    event.target.parentNode.parentNode.remove();
    sumElementPrice();
}

function sumElementPrice() {
    let price = document.querySelectorAll('.sum');
    let sum = 0;

    for (let i = 0; i < price.length; i++) {
        sum = sum + parseInt(price.item(i).textContent);
        console.log(price.item(i).textContent)
    }
    let setPriceSum = document.getElementById('summ');
    setPriceSum.textContent = sum;
    return sum;
}

function isValid(first, second, third) {
    return first.value !== "" && second.value !== "" && third.value !== "";
}
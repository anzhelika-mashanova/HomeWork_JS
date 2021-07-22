btnTask.addEventListener('click', onClickHandler);

function onClickHandler(event) {
  event.preventDefault();
  let inputElem = document.getElementById('textInput')
  let elem = createElemLi(inputElem);
  let btnRemove = createDelButton(elem);
  document.getElementById('listEvents').append(elem);
  elem.append(btnRemove);
  inputElem.value = '';
}

function createElemLi(inputEl) {
  let item = document.createElement("li");
  item.className = 'yellow';
  item.id = 'item';
  item.textContent = inputEl.value;
  item.addEventListener('click', onClickItem)
  return item;
}

function createDelButton() {
  const btnRemove = document.createElement("span");
  btnRemove.textContent = "    " + "x";
  btnRemove.className = "delete-button";
  btnRemove.addEventListener('click', removeParentElement);
  return btnRemove;
}

function removeParentElement(event) {

  event.target.parentNode.remove();
}

function onClickItem(event) {
  event.target.classList.toggle("green");
}
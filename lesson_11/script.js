btnTask.addEventListener('click', onClickHandler);

function onClickHandler(event) {
  event.preventDefault();
  let inputElem = document.getElementById('textInput')
  let elem = createElemLi(inputElem);
  let btnRemove = createDelButton(elem);
  document.getElementById('listEvents').append(elem);
  elem.append(btnRemove);
  inputElem.value = '';

  let items = document.querySelectorAll('li');

  items.onClick = onClickItems(items);
  items.stopPropagation;
}

function createElemLi(inputEl) {
  let item = document.createElement("li");
  item.className = 'yellow';
  item.id = 'item';
  item.textContent = inputEl.value;
  return item;
}

function createDelButton(el) {
  const btnRemove = document.createElement("span");
  btnRemove.textContent = "  " + "x";
  btnRemove.className = "delete-button";

  btnRemove.addEventListener('click', removeParentElement(el));
  return btnRemove;
}

function removeParentElement(event) {

  event.remove();
}

function onClickItems(event) {

  for (let i = 0; i < event.length; i++) {

    event[i].addEventListener('click', onClickItem);
    event.stopPropagation;
  }
}

function onClickItem(event) {
  event.target.classList.toggle("green");
}
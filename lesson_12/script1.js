
let setYear = document.getElementById('yearBtn');
removeAttrBtn.addEventListener('click',taskTwo,false);
setYear.setAttribute('onclick',"taskOne()")
function taskOne() { 
  let input = document.querySelector('input')
  let elem = document.querySelector('#title span');
    elem.innerText = input.value;
}

function taskTwo(event) {
  event.target
  let removeAttribute = document.querySelector('[my-attribute]');
  removeAttribute.removeAttribute('my-attribute')
console.log(removeAttribute);
}

let body = document.querySelector('body');
body.setAttribute('onload',"load()")
console.log(body)

function setElementsGreen(event) {
  let elem = document.querySelectorAll('[data-id]');
  for (let i = 0; i < elem.length; i++) {
    elem[i].style.backgroundColor = 'green';
  }
  event.stopPropagation();
}

function createRow() {
  let elem = document.createElement('tr');
  let tmp = document.querySelectorAll('table tr');
  let table = document.querySelector('table');
  elem = tmp[tmp.length - 2].cloneNode(true);
  elem.firstElementChild.textContent = 'google';
  elem.firstElementChild.nextElementSibling.textContent = 'Pichai Sundararajan';
  elem.lastElementChild.textContent = '147B';
  table.append(elem);
}

function addRowToTable(event) {
  createRow()
  event.stopPropagation();
}

function removeRowToTable(event) {
  let table = document.querySelectorAll('tr');
  table[1].remove();
  console.log(table);
  event.stopPropagation();
}
function changeFontSize(){
  let getTitle = document.querySelector('#title');
  // getTitle.classList.add("size");
  getTitle.className = 'size';
  console.log(getTitle);
}

function load() {
  document.addEventListener("DOMContentLoaded",changeFontSize());

  
  let setGreen = document.getElementById("setGreenBtn");
  setGreen.addEventListener("click", setElementsGreen, false);
  
  let addRow = document.getElementById('addRowBtn')
  addRow.addEventListener("click", addRowToTable,false)
  
  let removeRow = document.getElementById('removeSecondRowBtn')
  removeRow.addEventListener("click", removeRowToTable,false)
  


}

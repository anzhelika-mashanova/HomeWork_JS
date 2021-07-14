function taskOne() {
  let elem = document.querySelector('#title span');
  elem.innerText = "2020";
}
taskOne();

function taskTwo() {
  let elem = document.querySelector('[my-attribute]');
  elem.removeAttribute('my-attribute');

}
taskTwo();

function taskThree() {
  let elem = document.querySelectorAll('[data-id]');
  for (let i = 0; i < elem.length; i++) {
    elem[i].style.backgroundColor = 'green';
  }
}
taskThree();

function taskFour() {
  let elem = document.createElement('tr');
  let tmp = document.querySelectorAll('table tr');
  let table = document.querySelector('table');
  elem = tmp[tmp.length - 2].cloneNode(true);
  elem.firstElementChild.textContent = 'google';
  elem.firstElementChild.nextElementSibling.textContent = 'Pichai Sundararajan';
  elem.lastElementChild.textContent = '147B';
  table.append(elem);
}
taskFour();

function taskFive() {
  let elem = document.querySelectorAll('tr');
  elem[1].remove();
  console.log(elem);
}

taskFive();
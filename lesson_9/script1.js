let revenue = document.querySelectorAll('tr:nth-child(n)')
let sum = 0;
for (let i = 1; i < revenue.length - 1; i++) {
  let value = revenue[i].lastElementChild.innerText;
  if (value.includes('B')) {
    value = value.split('').filter(el => el != 'B');
    value = value.join('');
    sum += Number(value * 1e9);
  } else if (value.includes('M')) {
    value = value.split('').filter(el => el != 'M');
    value = value.join('');
    sum += Number(value * 1e6);
  } else {
    sum += Number(value);
  }
}
let total = document.querySelector('#summ');
total.textContent = sum;


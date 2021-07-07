const obj = {
  name: 'Alina',
  age: 23,
  adress: {
    country: 'UA',
    city: 'Kyiv'
  }
}
const objCopy = deepClone(obj);

function deepClone(obj) {
  if (typeof obj === 'string' || typeof obj === 'number') {
    return obj;
  } else if (typeof obj === 'object') {
    let res = {};
    for (let k in obj) {
      res[k] = deepClone(obj[k]);
    }
    return res;
  }
}
objCopy.adress.city = "Odessa";
console.log(obj);
console.log(objCopy);
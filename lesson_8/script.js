const obj = {
  name: 'Alina',
  age: null,
  adress: { 
    country: 'UA', 
    city: 'Kyiv'
}
}
const objCopy = deepClone(obj);

function deepClone(obj) {
  if (obj!== null && typeof obj === 'string' || typeof obj === 'number') {
    return obj;
  } else if (obj!==null && typeof obj === 'object') {
    let res = {};
    for (let k in obj) {
      res[k] = deepClone(obj[k]);
        }
    return res;
  }else return obj
}
objCopy.adress.city = "Odessa";
console.log(obj);
console.log(objCopy);
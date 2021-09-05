a = 2;
b = 3;
console.log("1: "+a,b)
let arr = [a, b];
a = arr[1];
b = arr[0];
console.log('2: '+a,b)


a=(a+b);
b=(a-b);
a=(a-b);
console.log('3: '+a,b)
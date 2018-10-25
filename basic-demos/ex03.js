const factorial = require('./my-utils').factorial;
const fibo = require('./my-utils').fibonacci;

let f = factorial(12);
let fib = fibo(10);

console.log('Factorial of 12 is', f);
console.log('First 10 fibonacci elements', fib);
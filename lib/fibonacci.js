// let memo = [];

const fib = (n, memo) => {
  // console.log(n);
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
};

console.log(fib(8), 21);
console.log(fib(14), 377);

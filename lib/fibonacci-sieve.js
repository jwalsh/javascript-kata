// Find all integers that can't be created from two fibonacci numbers

let fibSequence = (n) => {
  let a = [0, 1];
  for (let i = 2; i < n; i++) {
    a.push(a[i - 1] + a[i - 2]);
  }
  return a;
}
let fibSieve = (a) => {
  let summed = [];
  for (let i = 0; i < a.length; i++ ) {
    for (let j = 0; j < a.length; j++ ) {
      let s = a[i] + a[j] 
      summed[s] = true;
    } 
  }
  let sieve = [];
  for (let i = 0; i < summed.length; i++) {
    if (!summed[i]) {
      sieve.push(i);
    }
  }
  return sieve;
}
let s = fibSequence(11);
console.log(fibSieve(s));



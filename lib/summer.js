// Show a remaining value stored in a hash
// Cost 

let sumToValue = (a, n) => {
  console.log(`Looking for ${n} in ${a}`);
  let seen = {};

  for (let i = 0; i < a.length; i++) {
    let v = a[i];
    if (seen[v]) {
      return [v, seen[v], ]
    } else {
      seen[n - v] = v;
    }
  }
}

function append(value, array = []) {
  array.push(value);
  return array;
}


let fib = (n, memo) => {
  // add default paramters = [1, 1]
  if (memo[n]) {
    return memo[n];
  } else {
    return fib(n - 1, memo) + fib(n - 2, memo);
  }
}

let fib2 = (n) => {
  let a = append(1, [1]);
  for (let i = 2; i < n; i++) {
    a.push(a[i - 1] + a[i - 2]);
  }
  return a;
}

// var a = [1, 23, 4, 7, 8, 10, 200, -3, 15, 24, 21, 0, 25, 9, 13, 13];
// var t = 26;
let a = fib2(11);
let t = Math.ceil(Math.random() * 90);

console.log(sumToValue(a, t));




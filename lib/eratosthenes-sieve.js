

var primes = (n) => {
  var ps = (new Array(n + 1)).fill(true);
  var cost = 0;
  // i is our stepper
  for (var i = 2; i <= Math.ceil(Math.sqrt(ps.length)); i++ ) {
    if (ps[i] === true) {
      // j records the integer under review
      for (var j = i * i; j <= ps.length; j += i) {
        cost++;
        if (ps[j] === true) {
          ps[j] = false;
        }
      }
    }
  }
  console.log('cost', cost);
  return ps
    .map((e, i, c) => { return e ? i : e;})
    .filter(n => { return n !== false; } )
}

console.log(primes(101));


var reduce = (list, cb, col) => {
  var result = col;
  for (var i = 0; i < list.length; i++) {
    result = cb(result, list[i]); 
  }
  return result;
}

// sum
var sum = reduce([1, 2, 3], (a, b) => { return a + b; }, 0);
console.log(sum);

// distribution
var dist = reduce(['a', 'b', 'c', 'a'], (a, b) => { a[b] = a[b] ? ++a[b] : 1; return a; }, {});
console.log(dist);

// concat
var concat = reduce(['a', 'b', 'c'], (a, b) => { return a + b }, '');
console.log(concat);

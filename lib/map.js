// map(array, function(e, i, c))


let map = (list, cb) => {
  let tmp = [];
  for (var i = 0; i < list.length; i++) {
    tmp[i] = cb(list[i], i, list);
  }
  return tmp;
}

var a = [1, 2, 3, 4, 5];

// double if starting with 1 and is a range
var o = map(a, (e, i, c) => { return e + i + c[0];  })
console.log('Expect: [ 2, 4, 6, 8, 10 ] = ', o);

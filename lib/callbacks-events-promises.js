
console.log('callbacks to promises');

var generateRandom = (n, cb) => {
  var r = n * 1000 * Math.random();
  setTimeout(()=> { return cb(r); }, r);
}


var c1 = generateRandom(5, function(resp) {
  console.log('callback', resp);
})


var promisizedRandom = (n) => {
  var p = new Promise((resolve, reject) => {
    generateRandom(n, (resp) => { resolve(resp); })
  })
  return p;
}

var p1 = promisizedRandom(5)
  .then((resp) => { console.log('promise', resp); });


console.log('callbacks to promises');

const generateRandom = (n, cb) => {
  const r = n * 1000 * Math.random();
  setTimeout(()=> { return cb(r); }, r);
};


const c1 = generateRandom(5, resp => {
  console.log('callback', resp);
});


const promisizedRandom = (n) => {
  const p = new Promise((resolve, reject) => {
    generateRandom(n, (resp) => { resolve(resp); })
  });
  return p;
};

const p1 = promisizedRandom(5)
  .then((resp) => { console.log('promise', resp); });

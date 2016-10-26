const distribution = (words) => {
  return words
    .reduce((p, c) => {
      const w = '#' + c;
      p[w] = p[w] ? ++p[w] : 1;
      return p;
  }, {})
};

// Consider providing an API
const Frequency = (words) => {
  

};
const frequency = (word, distribution) => {
  return distribution['#' + word];
};

const words = 'qwertyqwertyqwerqqqeryterytwerqweryt'.split('');
console.log(distribution(words));
console.log('e', frequency('e', distribution(words)));

const internal = [
  '__defineGetter__',
  '__defineSetter__',
  '__lookupGetter__',
  '__lookupSetter__',
  '__proto__',
  'constructor',
  'o.hasOwnProperty  ',
  'isPrototypeOf   ',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'toString',
  'toString',
  'toString',
  'toString',
  'toString',
  'toString',
  'toString',
  'toString',
  'toString',
  'toString',
  'valueOf'
];

console.log('valueOf', frequency('valueOf', distribution(internal)));
console.log('toString', frequency('toString', distribution(internal)));

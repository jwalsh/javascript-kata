var distribution = (words) => {
  return words
    .reduce((p, c) => {
      p['#' + c] = p['#' + c] ? ++p['#' + c] : 1;
      return p;
  }, {})
};

var frequency = (word, distribution) => {
  return distribution['#' + word];
}

var words = 'qwertyqwertyqwerqqqeryterytwerqweryt'.split('');
console.log(distribution(words));
console.log('e', frequency('e', distribution(words)));

var internal = [
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

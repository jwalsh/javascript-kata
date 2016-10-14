var diff = function(s1, s2) {
  return a.map(function(e, i, c) {
    return Math.abs(e - s2[i]);
  })
    .reduce(function(a, b) {
      return a + b;
    }, 0);
};

// https://codefights.com/challenge/Qjts7cukDvYpDW4Bc
var closestSequence2 = function(s1, s2) {
  // Best Sub-sequence
  var bss = []; // from s2 values
  var min = 0;
  var max = Math.max.apply(null, s1);
  console.log(min, max);
  while(min < max && bss.length < s1.length) {
    console.log('Processing min', min);
    for (var i = 0; i < s2.length; i++) {
      for (var j = 0; j < s1.length; j++) {
        if (bss.length >= s1.length) {
          break;
        }
        if (s2[i] - s1[j] === min) {
          console.log('matched', s2[i], s1[j]);
          bss.push(s2[i]);
        }
      }
    }
    min++;
  }
  console.log(bss);
  return diff(s1, bss);
};
var a = [1, 2, 6];
var b = [0, 1, 3, 4, 5];
var b1 = [0, 1, 3];
var b2 = [1, 3, 5];

// Sub-sequence example
// console.log(5, diff(a, b1));
// Best Sub-sequence
// console.log(2, diff(a, b2));

console.log(closestSequence2(a, b), 2);

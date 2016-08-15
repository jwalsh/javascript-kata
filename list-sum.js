'use strict';

// list of numbers that can provide 
let findTarget = (a, t) => {
  console.log(a, t);
  var memo = {};
  for (var i = 0; i < a.length; i++) {
    // console.log(a[i]);
    if (memo[a[i]]) {
      return [a[i], memo[a[i]]];
    } else {
      memo[t - a[i]] = a[i]; 
    }
  }
}

var a = [1, 23, 4, 7, 8, 10, 200, -3, 15, 24, 21, 0, 25, 9, 13, 13];
var t = 26;


console.log(findTarget(a, t));

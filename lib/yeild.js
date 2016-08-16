'use strict';

function* odd(s) {
  let i = s;
  while (i < 10000) {
    yield n => i += n; 
  }
}

let gen = odd(1);

for (var i = 0; i < 10; i++) {
  console.log(gen.next(i).value(2));
}


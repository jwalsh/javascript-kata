const diff = (s1, s2) => a.map((e, i, c) => Math.abs(e - s2[i]))
  .reduce((a, b) => a + b, 0);

// https://codefights.com/challenge/Qjts7cukDvYpDW4Bc
const closestSequence2 = (s1, s2) => {
  console.log(s1, s2);
  // Best Sub-sequence
  const bss = []; // from s2 values
  let min = 0;
  const max = Math.max.apply(null, s1);
  let s1i = 0;
  let s2i = 0;
  console.log(min, max);
  si: while (min <= max && bss.length < s1.length) {
    console.log('Processing min', min);
    s1: for (let j = s1i; j < s1.length; j++) {
      s2: for (let i = s2i; i < s2.length; i++) {
        console.log('bss', bss, min, s1[j], s2[i]);
        if (bss.length >= s1.length) {
          console.log('bss filled');
          break s1;
        }
        if (s2[i] - s1[j] === min) {
          bss.push(s2[i]);
          min++;
          s1i = j + 1;
          s2i = i + 1;
          // don't fill the match twice
          console.log('matched and continue s2', s2[i], s1[j], s2i);
          continue si;
        }
      }
    }
    min++;
  }
  console.log(bss);
  return diff(s1, bss);
};

const a = [1, 2, 6];
const b = [0, 1, 3, 4, 5];
const b1 = [0, 1, 3];
const b2 = [1, 3, 5];

// Sub-sequence example
// console.log(5, diff(a, b1));
// Best Sub-sequence
// console.log(2, diff(a, b2));

console.log(closestSequence2(a, b), 2);

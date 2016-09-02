let swap = (a, i1, i2) => {
  const v1 = a[i1];
  const v2 = a[i2];
  a[i1] = v2;
  a[i2] = v1;
  return a;
}

let permute = (a, s, e) => {
  if (s === e) {
    console.log(a.join(''));
  } else {
    for (let i = s; i <= e; i++) {
      swap(a, s, i);
      permute(a, s + 1, e);
      swap(a, i, s);
    }
  }
}

const a = 'ABCD'.split('');

permute(a, 0, a.length - 1);

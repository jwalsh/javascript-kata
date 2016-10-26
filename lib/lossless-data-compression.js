// losslessDataCompression(inputString, width) = "ab(0,1)c(0,3)d(4,3)c(8,3)"

function losslessDataCompression(inputString, width) {
  let _o = '';
  for (let i = 0; i < inputString.length; i++) {

    const _c = inputString.charAt(i);
    const window = inputString.substring(i - width, i);
    let position = -1;
    let length = 0;

    console.log(_c, position, length, window);
    for (var j = 0; j < width; j++) {
      const _s = inputString.substr(i, j + 1);
      const _p = window.indexOf(_s);
      if (_p > -1 && (i + j < inputString.length)) {
        console.log('-_s', _s);
        position = _p + i - window.length;
        length = j + 1;
      } else {
        break;
      }
    }
    if (position > -1) {
      _o += '(' + [position, length].join(',') + ')';
      i += (j - 1);
    }else {
      _o += _c;
    }
  }
  return _o;
}

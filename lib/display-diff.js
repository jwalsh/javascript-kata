const displayDiff = (oldVersion, newVersion) => {
  let out = '';

  // shortest edit script
  const editScript = [];

  const _t = {
    char: '',
    action: ''
  }; // keep, remove, insert

  let ov = true;
  let _j = 0;
  let _o = '';
  let _n = '';
  for (let i = 0; i < oldVersion.length; i++) {

    if (oldVersion.charAt(i) === newVersion.charAt(_j)) {
      if (_o || _n ) {
        // clear the queue
        if (_o) {
          out += '(' + _o + ')';
          _o = '';
        }
        if (_n) {
          out += '[' + _n + ']';
          _n = '';
        }


        out += oldVersion.charAt(i);
        _j++;

      }
    } else {
      if (ov === true) {
        _o += oldVersion.charAt(i);

        ov = false;
      } else {
        _n += oldVersion.charAt(i);
        ov = true;
      }
    }

  }
  return out;
};


const o = "same_prefix_1233_same_suffix";
const n = "same_prefix23123_same_suffix";
console.log(displayDiff(o, n), "same_prefix(_1)23[12]3_same_suffix");

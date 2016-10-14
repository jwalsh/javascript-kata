let initial = '\
- - -\
- - -\
- - -\
';

let board   = '\
x o x\
o x -\
o - x\
';

// BRE = 

// convert string board to matrix
const bc = (bs) => {
  let base = [[ , , ],
              [ , , ],
              [ , , ]]
  // clean the board
  bs.replace(/[^xo-]/g, '');
  let ba = bs.split('');
  console.log(ba);
}

bc(board);

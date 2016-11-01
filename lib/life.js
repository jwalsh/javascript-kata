let board = (n) => {
  let rows = [];
  for (let i = 0; i < n; i++) {
    var cols = [];
    for (let j = 0; j < n; j++) {
      cols.push(false);
    }
    rows.push(cols.slice());
  }
  return rows;
};

let b = board(10);
b[4][4] = true;
console.log(b);


let process = (_board) => {
  for (let i = 0; i < _board.length; i++) {
    let row = _board[i];
    for (let j = 0; j < row.length; j++) {
      if ()
    }
  }
}

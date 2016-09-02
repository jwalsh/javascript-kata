// https://www.cs.auckland.ac.nz/software/AlgAnim/red_black.html

const Colors = Object.freeze({
  RED: 0,
  BLACK: 1
});

let Node = (color, key, value, left, right, count) => {
  this._color = color
  this.key = key
  this.value = value
  this.left = left
  this.right = right
  this._count = count
}

let RedBlackTree = (compare, root) => {
  this._compare = compare
  this.root = root
}


// Rotation
// Insertion

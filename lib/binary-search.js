function binaryIndexOf(searchElement) {
    'use strict';

    var minIndex = 0;
    var maxIndex = this.length - 1;
    var currentIndex;
    var currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) / 2 | 0;
        currentElement = this[currentIndex];

        if (currentElement < searchElement) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > searchElement) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }

    return -1;
}


const search = (a, e) => {
  let min = 0;
  let max = a.length;
  let ci, ce;
  while (min <= max) {
    ci = Math.floor((min + max) / 2);
    ce = a[ci];
    if (ce < e) {
      min = ci + 1;
    } else if (ce > e) {
      max = ci - 1;
    } else {
      return ci;
    }
  }
  return -1;
};


console.log(search([1,2,3,4,6,7,8,9,12,18,30], 18));

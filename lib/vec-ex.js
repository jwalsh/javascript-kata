import {Point, Line} from './geometry'


let intersect = (l1, l2) => {
  return new Point(0, 0);
}


let example = intersect(new Line(new Point(0, 0), new Point(2,2)), new Line(new Point(0, 2), new Point(2, 0)));
console.log(example, new Point(1, 1));

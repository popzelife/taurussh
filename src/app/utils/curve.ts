
type Coord = [number, number];

type Line = {
  length: number;
  angle: number;
};

/**
 * Properties of a line
 *
 * @param {array} pointA The coordinates of point A
 * @param {array} pointB The coordinates of point B
 * @return {object} The properties of the line
 */

const line = (pointA: Coord, pointB: Coord): Line => {
  const lengthX = pointB[0] - pointA[0];
  const lengthY = pointB[1] - pointA[1];

  return {
    length: Math.sqrt(lengthX ** 2 + lengthY ** 2),
    angle: Math.atan2(lengthY, lengthX),
  };
};

// Position of a control point
// I:  - current (array) [x, y]: current point coordinates
//     - previous (array) [x, y]: previous point coordinates
//     - next (array) [x, y]: next point coordinates
//     - reverse (boolean, optional): sets the direction
// O:  - (array) [x,y]: a tuple of coordinates

const controlPoint = (current: Coord, previous: Coord, next: Coord, reverse?: boolean): Coord => {
  // When 'current' is the first or last point of the array
  // 'previous' or 'next' don't exist.
  // Replace with 'current'
  const p = previous || current;
  const n = next || current;

  // The smoothing ratio
  const smoothing = 0.2;

  // Properties of the opposed-line
  const o: Line = line(p, n);

  // If is end-control-point, add PI to the angle to go backward
  const angle = o.angle + (reverse ? Math.PI : 0);
  const length = o.length * smoothing;

  // The control point position is relative to the current point
  const x = current[0] + Math.cos(angle) * length;
  const y = current[1] + Math.sin(angle) * length;

  return [x, y];
};

// Create the bezier curve command
// I:  - point (array) [x,y]: current point coordinates
//     - i (integer): index of 'point' in the array 'a'
//     - a (array): complete array of points coordinates
// O:  - (string) 'C x2,y2 x1,y1 x,y': SVG cubic bezier C command

const bezierCommand = (point: Coord, i: number, a: Coord[]): string => {
  // start control point
  const [cpsX, cpsY] = controlPoint(a[i - 1], a[i - 2], point);

  // end control point
  const [cpeX, cpeY] = controlPoint(point, a[i - 1], a[i + 1], true);

  return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${point[0]},${point[1]}`;
};

export {
  bezierCommand,
  controlPoint,
};

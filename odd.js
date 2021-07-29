// const isOdd = function(num) {
//   return num % 2 === 1;
// }
// console.log('3 is odd,' + isOdd(3))

const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"]
];

// const chooseStations = function (stations) {
//   let place = [];
//   for (let i = 0; i < stations.length; i++) {
//     let capacity = station[1];
//     let type = station[2];
//     if (capacity >= 20 && (type === "school" || type === "community centre")) {
//       place.push(station[0]);
//     }
//   } return place
// };
// console.log(chooseStations(stations));
// const moves = ["north", "north", "west", "west", "north", "east", "north"];

// const finalPosition = function (moves) {
//   let x = 0;
//   let y = 0;
//   for (let move of moves) {
//     if (move === "north") {
//       y += 1;
//       //add to y
//     } else if (move === "south") {
//       y -= 1;
//       //subtract from y
//     } else if (move === "east") {
//       x += 1;
//       //add to x
//     } else if (move === "west") {
//       x -= 1;
//       //subtract from x
//     }
//   }
//   return [x, y];
// };
// console.log(finalPosition(moves));const

// let howManyHundreds = function (num) {
//   let x = num / 100;
//   return Math.floor(x);
// };
// console.log(howManyHundreds(894));

const calculateRectangleArea = function (length, width) {
  if (length >= 0 && width >= 0) {
    return length * width;
  } else {
    return undefined;
  }
};
const calculateTriangleArea = function (base, height) {
  if (base >= 0 && height >= 0) {
    return (base * height * 1) / 2;
  } else {
    return undefined;
  }
};
const calculateCircleArea = function (radius) {
  if (radius >= 0) {
    return Math.PI * radius * radius;
  } else {
    return undefined;
  }
};
console.log(calculateRectangleArea(10, 5)); // should print 50
console.log(calculateRectangleArea(1.5, 2.5)); // should print 3.75
console.log(calculateRectangleArea(10, -5)); // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1));


// const calculateRectangleArea = function (length, width) {
//   let area = length * width;
//   if(area >= 0) {
//     return area;
//   } else {
//     return undefined;
//   }
// };

// const calculateTriangleArea = function (base, height) {
//   let area = base * height / 2;
//   if(area >= 0) {
//     return area;
//   } else {
//     return undefined;
//   }
// };

// const calculateCircleArea = function (radius) {
//   let area = Math.PI * radius * radius;
//   if(area >= 0) {
//     return area;
//   } else {
//     return undefined;
//   }
// };








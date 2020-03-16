'use strict';

// 1

function repeat(fn, n) {
  for (let i = 0; i < n; i++) {
    fn();
  }
}

function hello() {
  console.log('Hello World');
}

function goodbye() {
  console.log('Goodbye World');
}

repeat(goodbye, 5);

// 2
function filter(arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
// const filteredNames = filter(myNames, function(name) {
//   // This is known as a "predicate function" - it's a function that 
//   // only returns a boolean
//   return name[0] === 'R';
// });

//bonus credit
const filteredNames = filter(myNames, (name) => name[0] === 'R');

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// 3

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return location => {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    return warningCounter;
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const coronavirus = hazardWarningCreator('You are infected, the end is nigh');
const earthExploding = hazardWarningCreator('Everything is gone');
rocksWarning('Main St and Pacific Ave');
rocksWarning('A place with rocks');
coronavirus('Michigan');
earthExploding('Everywhere');

//foreach, filter and map
const turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
const filteredTurtleMove = turtleMovements.filter(e => e[0] >= 0 && e[1] >= 0);
const totalTurtleMove = turtleMovements.map(i => i[0] + i[1]);
turtleMovements.forEach(element => {
  console.log(`Movement #1: ${element[0]} steps`);
  console.log(`Movement #2: ${element[1]} steps`);
});

// reduce

let initialValue = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
const arr = initialValue.split(' ');

const reducer = (accum, currentValue) => {
  if (currentValue.length === 3) {
    return accum += ' ';
  }
  else {
    return accum += currentValue.slice(-1).toUpperCase();
  }
};


console.log(arr.reduce(reducer, ''));
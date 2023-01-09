'use strict';

// Coding Challange #1

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? => index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with C
// - String needs to contain day => index + 1
// - Add ... between elements at start and end of string

const data1 = [17, 21, 23];
const data2 = [23, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}˚C in ${i + 1} days ...`;
  }
  console.log('...' + str);
};
printForecast(data1);

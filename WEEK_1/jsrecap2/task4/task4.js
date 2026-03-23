'use strict';

const numbers = [1,2,5,9,6,4,22,3,55,-3,-41]
console.log(numbers);

function sortArray(array) {
  const sorted = [array.sort((a,b) => a - b)];
  return sorted;
}
document.querySelector('#numbers').innerHTML = numbers;
console.log(sortArray(numbers))
document.querySelector('#sorted').innerHTML = sortArray(numbers);

'use strict';

const numbers = [1,2,5,9,6,4,22,3,55,-3,-41]
const nums = [2,6,99,47]
console.log(numbers);
console.log(nums)

function sortArray(numbers, order) {
  if (order === 'asc') {
    return [numbers.sort((a,b) => a - b)];
  }
  else if (order === 'desc') {
    return [numbers.sort((a,b) => b - a)];
    }
  else {
    console.log('parameters not valid')
    return console.log('parameters not valid');
  }
}
console.log( + sortArray(numbers, 'asc'));
console.log(sortArray(nums, 'desc'));


'use strict';

const numbers = [];

for (let i = 1; i < 6; i++) {
  const number = parseInt(prompt(`Enter number ${i}:`));
  numbers.push(number);
}
console.log(numbers);
document.querySelector('#target').innerHTML = 'Given numbers: ' + numbers;

const number = parseInt(prompt('Enter a number to check:'));
if (numbers.includes(number)) {
  console.log(number + 'is in the array');
  document.querySelector('#in').innerHTML = `Number ${number} is in the array`;
}
else {
  console.log(number + 'is not in the array')
  document.querySelector('#in').innerHTML = `Number ${number} is not in the array`;
}
numbers.pop();
document.querySelector('#new').innerHTML = 'New array: ' + numbers;

document.querySelector('#order').innerHTML = numbers.sort((a,b) => a - b);




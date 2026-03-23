const numbers = [];
const end = 'done';
const number = (prompt(`Enter a number (or 'done' to finish): `));
let num = number;
numbers.push(number);
while (num !== end) {
  const number = (prompt(`Enter a number (or 'done' to finish): `));
   num = number;
  numbers.push(number);
}
const evenNumbers = [];
for (const number of numbers) {
  if (number%2 === 0) {
    evenNumbers.push(number);
  }
}
document.querySelector('#numbers').innerHTML = 'even numbers entered: ' + evenNumbers;

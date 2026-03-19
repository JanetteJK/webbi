const number = parseInt(prompt('Enter a positive integer:'));
let sumOfNatNum = 0;
if (number > 0) {
  for (let i = 0; i <= number; i++){
    sumOfNatNum += i;
  }
  document.querySelector('#target').innerHTML = 'Sum of natural numbers is: ' + sumOfNatNum
}
else {
  document.querySelector('#target').innerHTML = 'Not a positive integer. Try again'
}


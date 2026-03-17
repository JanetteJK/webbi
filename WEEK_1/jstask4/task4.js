const grade = parseInt(prompt('Give me your score for the course'))

if (grade >= 0 && grade <= 100){
  if (grade <=39) {
    document.querySelector('#grade').innerHTML = 'With a score of ' + grade + ' You will get a 0'
  }
  else if (grade >= 40 && grade <= 51) {
    document.querySelector('#grade').innerHTML = 'With a score of ' + grade + ' You will get a 1'
  }
  else if (grade >= 52 && grade <= 63) {
    document.querySelector('#grade').innerHTML = 'With a score of ' + grade + ' You will get a 3'
  }
  else if (grade >= 64 && grade <= 75) {
    document.querySelector('#grade').innerHTML = 'With a score of ' + grade + ' You will get a 4'
  }
  else {
    document.querySelector('#grade').innerHTML = 'With a score of ' + grade + ' You will get a 5'
  }
}
else {
document.querySelector('#grade').innerHTML = 'Inserted points are not valid. Try again.'
  }

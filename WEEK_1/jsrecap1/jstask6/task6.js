const number = parseInt(prompt('Please enter a positive integer'))
let result = '<table>';
for (let i = 0; i <= number; i++){
  result += '<tr>';
  for (let j = 0; j <= number; j++) {
    result += '<td>' + i*j + '</td>';
  }
  result += '</tr>';
}
result += '</table>'
console.log(result)
document.querySelector('#target').innerHTML = result;

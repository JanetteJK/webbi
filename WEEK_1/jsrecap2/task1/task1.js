const fruits = ["apple", "banana", "orange", " grape", "kiwi"];
console.log(fruits);
console.log('Fruits array length: ' + fruits.length);
console.log('The second element of the array is: ' + fruits[2])
console.log('The last element in the array: ' + fruits[fruits.length-1]);
const vegetables = [];
for (let i = 0; i < 3; i++){
  let veg = prompt('Give me a vegetable');
  vegetables.push(veg);

}
console.log(vegetables);
console.log('Vegetables array length: ' + vegetables.length);

document.querySelector('#target').innerHTML = 'Vegetables: ' + vegetables;
document.querySelector('#target2').innerHTML = 'Array length: ' + vegetables.length;

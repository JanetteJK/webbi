const tri = parseInt(prompt('Give me the first triangle side length:'));
const ang = parseInt(prompt('Give me the second triangle side length:'));
const le = parseInt(prompt('Give me the third triangle side length:'));

if (tri == ang == le) {
  document.querySelector('#triangle').innerHTML = 'The triangle is a equilateral'
}
else if (tri === ang && tri !== le || ang === le && ang !== le  || tri === le && tri !== ang)  {
  document.querySelector('#triangle').innerHTML = 'The triangle is a isosceles'
}
else {
  document.querySelector('#triangle').innerHTML = 'The triangle is a scalene'
}

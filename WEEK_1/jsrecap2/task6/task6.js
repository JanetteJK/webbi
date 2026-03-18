'use strict';

const numOfMovies = parseInt(prompt("Give me the movie amount"))
const movies = [];

for(let i = 0; i < numOfMovies; i++){
  const name = prompt('Give me a name of a movie')
  const rating = parseInt(prompt('Give a rating for the movie'));
  movies.push({
    name: name,
    grade: rating
  });
}
movies.sort(function(a,b) {
  return b.grade-a.grade;
})


document.querySelector('#fav').insertAdjacentHTML('afterbegin', movies[0].name)
for (const movie of movies){
document.querySelector('#target').innerHTML += `<li>${movie.name}, ${movie.grade}</li>`;
  }

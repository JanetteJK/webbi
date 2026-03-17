const x1 = parseInt(prompt("Give me an x coordinate"));
const x2 = parseInt(prompt("Give me an y coordinate"));
const y1 = parseInt(prompt("Give me an x coordinate"));
const y2 = parseInt(prompt("Give me an y coordinate"));



const betw = (Math.pow((x2 - x1),2) + Math.pow((y2 - y1), 2));
const distance = Math.sqrt(betw)
document.querySelector('#answer').innerHTML = 'The distance between is: ' + distance;

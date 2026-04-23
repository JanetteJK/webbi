'use strict'

// toggle menu
const navLinks = document.getElementById("nav-links")

let map = L.map('map').setView([60.188,24.8],13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function openMenu(){
  navLinks.style.right = "0";
}
function closeMenu(){
  navLinks.style.right = "-200px"
}

const apiUrl = 'https://media2.edu.metropolia.fi/restaurant/api/v1';

const getRestaurants = async () => {
  try {
    return await fetchData(apiUrl + '/restaurants');
  }
  catch (error){
    console.log(error);
  }
}

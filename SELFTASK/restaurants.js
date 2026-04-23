'use strict'

// toggle menu
const navLinks = document.getElementById("nav-links")

function openMenu(){
  navLinks.style.right = "0";
}
function closeMenu(){
  navLinks.style.right = "-200px"
}

const apiUrl = 'https://media2.edu.metropolia.fi/restaurant/api/v1';
const table = document.querySelector('#restaurantTable');
const modal = document.querySelector('#modal');

const getRestaurants = async () => {
  try {
    return await fetchData(apiUrl + '/restaurants');
  }
  catch (error){
    console.log(error);
  }
}
//today's menu
const getDailyMenu = async (id,lang) => {
  try {
    return await fetchData(apiUrl + `/restaurants/daily/${id}/${lang}`)
  }
  catch (error) {
    console.log(error)
  }
};

//week's menu
const getWeeklyMenu = async (id,lang) => {
  try {
    return await fetchData(apiUrl + `/restaurants/weekly/${id}/${lang}`)
  }
  catch (error){
    console.log(error)
  }
}

const menuHTML = (courses) => {
  let html = '';
  for (const course of courses) {
    html += `
    <article class="course">
    <p><strong>${course.name}</strong><p>
    <p><strong>${course.price}</strong></p>
    <p><strong>${course.diets}</strong></p>
    </article>
    `;
  }
  return html;
}

const generateMenu = async () => {
  const restaurants = await getRestaurants();

  restaurants.sort(function(a,b) {
    return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
  });

  for (const restaurant of restaurants) {
    const tr = document.createElement('tr');
    tr.addEventListener('click', async function() {
      for (const elem of document.querySelectorAll('.highlight')) {
        elem.classList.remove('highlight')
      }
      tr.classList.add('highlight');

      modal.innerHTML = '';
      modal.showModal();
      const nameH3 = document.createElement('h3');
      nameH3.innerText = restaurant.name;

      modal.append(nameH3);

      const dMenu = await getDailyMenu(restaurant._id, 'fi');
      const menu = menuHTML(dMenu.courses);
      modal.insertAdjacentHTML('beforeend', restaurant.address + ', ' + restaurant.city + menu)
    });

    const nameTd = document.createElement('td');
    nameTd.innerText = restaurant.name;
    const addressTd = document.createElement('td');
    addressTd.innerText = restaurant.address;
    const cityTd = document.createElement('td');
    cityTd.innerText = restaurant.city;

    tr.append(nameTd, addressTd, cityTd);
    table.append(tr);
  }
}
generateMenu()



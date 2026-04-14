'use strict';

// toggle menu
const navLinks = document.getElementById("nav-links")

function openMenu(){
  navLinks.style.right = "0";
}
function closeMenu(){
  navLinks.style.right = "-200px"
}

// navigation links
const homeBtn  = document.querySelector('#home');
const resBtn = document.querySelector('#restaurants');
const accBtn = document.querySelector('#account');
const loginBtn = document.querySelector('#login');
const box = document.getElementById('box')

// page loading


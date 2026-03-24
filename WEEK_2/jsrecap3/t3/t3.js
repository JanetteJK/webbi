'use strict';

let currentTime = new Date();

let text =
  "<p>Browser name and version: " + navigator.userAgent + "</p>" +
  "<p>Screen width and height: " + window.innerWidth + ", " + window.innerHeight + "</p>" +
    "<p>Available screen space for the browser: " + screen.availWidth + " x " + screen.availHeight + "</p>" +
    "<p>Current date and time: " + currentTime.toString() + "</p>";


document.querySelector('#target').innerHTML = text;

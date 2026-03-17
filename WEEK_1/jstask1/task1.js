const measurement = prompt('Give me a temperature in Celsius')

const toF = parseInt(measurement) * 1.8 + 32;
const toK = parseInt(measurement)+ 273.15;
document.querySelector('#F').innerHTML = parseInt(measurement) + ' Celsius is ' + toF + ' Fahrenheit'
document.querySelector('#K').innerHTML = parseInt(measurement) + ' Celsius is ' + toK + ' Kelvin'

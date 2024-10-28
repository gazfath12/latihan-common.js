// app.js
const { celsiusToFahrenheit, fahrenheitToCelsius } = require('./conversion.js');
const kuadrat = require('./mathUtils.js');

// Konversi 30 derajat Celsius ke Fahrenheit
const suhuCelsius = 30;
const suhuFahrenheit = celsiusToFahrenheit(suhuCelsius);
console.log(`${suhuCelsius} derajat Celsius sama dengan ${suhuFahrenheit} derajat Fahrenheit.`);

// Hitung kuadrat dari hasil konversi
const kuadratSuhu = kuadrat(suhuFahrenheit);
console.log(`Kuadrat dari ${suhuFahrenheit} adalah ${kuadratSuhu}.`);

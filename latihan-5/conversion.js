// conversion.js
function celsiusToFahrenheit(c) {
    return c / 5 * 9 + 32;
}

function fahrenheitToCelsius(f) {
    return (f - 32) * 5/9;
}

module.exports = { celsiusToFahrenheit, fahrenheitToCelsius };

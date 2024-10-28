// app.js
const { kali, bagi } = require('./utils/calculator.js');
const capitalize = require('./utils/stringutils.js');

console.log(`Hasil kali: ${kali(10, 2)}`);
console.log(`Hasil bagi: ${bagi(20, 3)}`);

const kata = "belajar";
console.log(`Kata setelah capitalize: ${capitalize(kata)}`);

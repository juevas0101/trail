// Write a program that calculates and displays the volume of a sphere, providing the value of its radius (R). The formula for calculating volume is: (4/3) * pi * R3. Consider (assign) to pi the value 3.14159.
// Tip: When using the formula, try to use (4/3.0) or (4.0/3), as some languages ​​(including C++) assume that the result of dividing two integers is another integer.

// Input Examples: ------------

// 3

// Output Examples: ------------
// VOLUME = 113.097

const input = require("fs").readFileSync("./devs/ex-1011", "utf-8");
const lines = input.split("\n");

const raio = parseInt(lines.shift());
const pi = 3.14159;

const volume = (4 / 3) * pi * Math.pow(raio, 3);

console.log(`VOLUME = ${volume.toFixed(3)}`);

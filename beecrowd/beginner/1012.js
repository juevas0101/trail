// Write a program that reads three double-precision floating-point values: A, B, and C. Then calculate and display:
// a) The area of ​​a right triangle that has A for its base and C for its height.
// b) the area of ​​the circle of radius C. (pi = 3.14159)
// c) the area of ​​the trapezoid that has A and B for bases and C for height.
// d) the area of ​​the square that has side B.
// e) the area of ​​the rectangle that has sides A and B.

// Input Examples: ------------

// 3.0 4.0 5.2

// Output Examples: ------------

// TRIANGULO: 7.800
// CIRCULO: 84.949
// TRAPEZIO: 18.200
// QUADRADO: 16.000
// RETANGULO: 12.000

const input = require("fs").readFileSync("./devs/ex-1012", "utf-8");
const lines = input.split("\n");

const [a, b, c] = lines[0].split(" ");

const area = (a * c) / 2;
const circulo = Math.PI * Math.pow(c, 2);
const trapezio = (parseFloat(a) + parseFloat(b) * c) / 2.0;
const quadrado = Math.pow(b, 2);
const retangulo = a * b;

console.log("TRIANGULO: " + area.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));
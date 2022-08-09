


const input = require("fs").readFileSync("./devs/ex-1011", "utf-8");
const lines = input.split("\n");

const [a, b, c] = lines[0].split(" ").map((i) => parseInt(i));

const maiorAB = (a + b + Math.abs(a - b)) / 2;
const maiorXC = (c + maiorAB + Math.abs(c - maiorAB)) / 2;

console.log(`${maiorXC} eh o maior`);
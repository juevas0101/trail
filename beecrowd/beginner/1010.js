// In this problem, you must read the code of a part 1, the number of parts 1, the unit value of each part 1, the code of a part 2, the number
//  of parts 2 and the unit value of each part 2. After , calculate and display the amount to be paid.

// Input Examples: ------------

// 12 1 5.30
// 16 2 5.10

// Output Examples: ------------

// VALOR A PAGAR: R$ 15.50

const input = require("fs").readFileSync("./devs/ex-1010", "utf-8");
const lines = input.split("\n");

const [cod1, num1, cost1] = lines[0].split(" ");
const [cod2, num2, cost2] = lines[1].split(" ");

const result = num1 * cost1 + num2 * cost2;

console.log(`VALOR A PAGAR: R$ ${result.toFixed(2)}`);
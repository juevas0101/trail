/*
Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e
o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

Entrada
O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros 
e um valor com 2 casas decimais.

Saída
A saída deverá ser uma mensagem conforme o exemplo fornecido abaixo, lembrando de deixar um espaço após os dois pontos 
e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.
*/

const input = require("fs").readFileSync("./devs/ex-1010", "utf-8");
const lines = input.split("\n");

const [cod1, num1, cost1] = lines[0].split(" ");
const [cod2, num2, cost2] = lines[1].split(" ");

const result = num1 * cost1 + num2 * cost2;

console.log(`VALOR A PAGAR: R$ ${result.toFixed(2)}`);
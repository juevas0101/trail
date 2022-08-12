/*
Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula:
(https://resources.urionlinejudge.com.br/gallery/images/problems/UOJ_1013.png)

Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado

Entrada
O arquivo de entrada contém três valores inteiros.

Saída
Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".
*/

const input = require("fs").readFileSync("./devs/ex-1013", "utf-8");
const lines = input.split("\n");

const [a, b, c] = lines[0].split(" ").map((i) => parseInt(i));

const maiorAB = (a + b + Math.abs(a - b)) / 2;
const maiorXC = (c + maiorAB + Math.abs(c - maiorAB)) / 2;

console.log(`${maiorXC} eh o maior`);
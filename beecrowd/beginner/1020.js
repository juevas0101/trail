/*
Leia um valor inteiro correspondente à idade de uma pessoa em dias e informe-a em anos, meses e dias

Obs.: apenas para facilitar o cálculo, considere todo ano com 365 dias e todo mês com 30 dias. Nos casos de teste 
nunca haverá uma situação que permite 12 meses e alguns dias, como 360, 363 ou 364. Este é apenas um exercício com 
objetivo de testar raciocínio matemático simples.

Entrada
O arquivo de entrada contém um valor inteiro.

Saída
Imprima a saída conforme exemplo fornecido.
*/

const input = require("fs").readFileSync("./devs/ex-1020", "utf-8");
const lines = input.split("\n");

const value = parseInt(lines.shift());

const years = parseInt(value / 360);
const month = parseInt((value % 365) / 30);
const day = parseInt((value % 365) % 30);

console.log(`${years} ano(s)`);
console.log(`${month} mes(s)`);
console.log(`${day} dia(s)`);
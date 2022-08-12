/*
Leia um valor inteiro, que é o tempo de duração em segundos de um determinado evento em uma fábrica, e informe-o expresso no formato 
horas:minutos:segundos.

Entrada
O arquivo de entrada contém um valor inteiro N.

Saída
Imprima o tempo lido no arquivo de entrada (segundos), convertido para horas:minutos:segundos, conforme exemplo fornecido.
*/

const input = require("fs").readFileSync("./devs/ex-1019", "utf-8");
const lines = input.split("\n");

let seconds = parseInt(input);

const hours = parseInt(seconds / 3600);
seconds = seconds % 3600;

const minutes = parseInt(seconds / 60);
seconds = seconds % 60;

console.log(`${hours}:${minutes}:${seconds}`);

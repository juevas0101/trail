/*
Faça um programa que leia o nome de um vendedor, o seu salário fixo e o total de vendas efetuadas por ele no mês (em dinheiro). 
Sabendo que este vendedor ganha 15% de comissão sobre suas vendas efetuadas, informar o total a receber no final do mês, com duas casas decimais.

Entrada
O arquivo de entrada contém um texto (primeiro nome do vendedor) e 2 valores de dupla precisão (double) com duas casas decimais, representando o salário fixo do vendedor
e montante total das vendas efetuadas por este vendedor, respectivamente.

Saída
Imprima o total que o funcionário deverá receber, conforme exemplo fornecido.
*/

const input = require("fs").readFileSync("./devs/ex-1009", "utf-8");
const lines = input.split("\n");

const employee = lines.shift();
const salary = parseFloat(lines.shift());
const sales = parseFloat(lines.shift());

const bonus = sales * 0.15;
const result = salary + bonus;

console.log(`TOTAL = R$ ${result.toFixed(2)}`);
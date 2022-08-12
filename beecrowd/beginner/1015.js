/*
Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles,
mostrando 4 casas decimais após a vírgula, segundo a fórmula: (https://resources.beecrowd.com.br/gallery/images/problems/UOJ_1015.png)

Entrada
O arquivo de entrada contém duas linhas de dados. A primeira linha contém dois valores de ponto flutuante: x1 y1 e a segunda linha contém dois valores de ponto flutuante x2 y2.

Saída
Calcule e imprima o valor da distância segundo a fórmula fornecida, com 4 casas após o ponto decimal.
*/


const input = require("fs").readFileSync("./devs/ex-1015", "utf-8");
const lines = input.split("\n");

const [x1, y1] = lines[0].split(" ");
const [x2, y2] = lines[1].split(" ");

const p1 = Math.pow(parseFloat(x2 - x1), 2);
const p2 = Math.pow(parseFloat(y2 - y1), 2);

const result = Math.sqrt(p1 + p2);

console.log(result.toFixed(4));

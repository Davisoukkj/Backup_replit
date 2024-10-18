const { log } = require("console");

/**
 * ARRAYS - LISTA MISTA DE UNIFORMES
 * PODEM SER ITERADOS
 * SÃO ORDENADOS POR INDICE (A PARTIR DO 0))
 * PODEMOS ALTERÁ-LOS EM TEMPO REAL
 */
const jogos = ["GTA", "NBA", false, 33, "FIFA", "F1"];
//    índice:    0      1      2     3    4      5
//console.log(jogos[3]); //33
jogos[12] = "Pés"; //undefined
//console.log(jogos[12]); // Pés
//MÉTODOS
jogos.pop(); //RETIRA DO FINAL DA LISTA
jogos.shift(); //REMOVE O PRIMEIRO ELEMENTO
jogos.push("MINECRAFT"); // INSERE NO FINAL DA FILA
//jogos.unshift("MINECRAFT");
console.log(jogos.length); //MEDE O COMPRIMENTO DA LISTA

console.log(jogos); // RESULTADO FINAL
//ITERAÇÃO : REPETE ATÉ O ESGOTAMENTO DA PROPRIEDADE
for (let i = 0; i < jogos.length; i++) {
  //console.log(i);
  console.log(jogos[i]); // ACESSA O ELEMENTO DO INDICE
}

//LOOPS SÃO LAÇOS/CICLOS DE REPETIÇÃO INFINITA
//for, for in, for of, foreach, while, do while
//LOOP: INICIALIZAÇÃO, CONDIÇÃO DE PARADQA, INCREMENTO
const pokedex = ["Pikachu", "Charmander", "Bulbassauro", "Squirtle"];
//                  0,           1,              2,             3
const valores = [150, 250, 1000, 3500];

const Pokelist = [
  { nome: "Pikachu", tipo: "Elétrico"},
  { nome: "Charmander", tipo: "Fogo"},
  { nome: "Bulbassauro", tipo: "Planta"},
  { nome: "Squirtle", tipo: "Água"}
]
//FAÇA UM LOOP E RETORNE NOME+TIPO DE CADA POKEMON
// for (let i = 0; i < pokedex.length; i++)
for (let pokemon of Pokelist){
  const nome = pokemon.nome
  const tipo = pokemon.tipo
  console.log(`Nome: ${nome.toUpperCase()} - Tipo: ${tipo.toUpperCase()}`)
}



// for (let i = 0; i < pokedex.length; i++) {
//   //ALGUMA COISA...
// }
// //https:pythontutor.com/javascript.html#mode=edit

// //LOOP FOR IN
// for (let i in valores) {
//   console.log(i);
//   //tem que puxar o indice completo
// }
// for (let i of valores) {
//   console.log(i);
// }
//   //puxa o indice completo

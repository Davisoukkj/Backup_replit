// SET INTERVAL - EXECUTA A CADA X MILISEGUNDOS
//let n = 0;
//const intervalo1 = setInterval(function() {
//  console.clear()
//  console.log("Executando a cada 1 segundo", n);
//  n = n + 1;
//}, 1000);

//clearInterval(intervalo1)  STOP NO INTERVALO


// SET TIMEOUT - EXECUTA "APÓS" X MILISEGUNDOS
//setTimeout(function() {
//  clearInterval(intervalo1) // STOP NO INTERVALO
//  window.alert("Já passou 5 segundos") // GERA UM POP UP
//  location.href = "https://www.youtube.com//@GamesEduUu"
//}, 5000);


/**EXERCICIO/ DESAFIO */
//GERAR UM NUMERO ALEATORIO = Match.random() * 10
// A) CRIE UM PROGRAMA QUE MOSTRE UM NUMEROS RANDÔMICO DE 0 A 10 A CADA 3 SEGUNDOS
// B) APÓS PASSADOS 15 SEGUNDOS, ENCERRE O INTERVALO USANDO clearInterval e setTimeout

let M = 0;
const parar = setInterval(function() {
  M = Math.random() * 10;
  console.log(M.toFixed(0));
}, 3000);

setTimeout(function() {
  clearInterval(parar)
  window.alert("Acabou ;D")
  location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}, 15000);
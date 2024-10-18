/**DESAFIO LOGIN COM WHILE */
/**
 * CRIE UM CÓDIGO QUE PEÇA LOGIN E SENHA
 * ENQUANTO O USUARIO NÃO ESTIVER LOGADO
 * CASO USUARIO E SENHA ESTEJAM CORRETOS
 * ENVIE MSG DE BOAS VINDAS
 * CASO CONTRARIO, INFORME O ERRO!
 */

const usuario = "admin"
const senha = "1234"
let estaLogado = false
let u, s = ""

while (!estaLogado) {
  let usuario = prompt("Digite seu nome de usuario")
  let senha = prompt("Digite sua senha")

  if (u == usuario && s == senha) {
    estaLogado = true
    window.alert("Bem vindo!" + usuario)
  }
}
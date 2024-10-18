//EXEMPLO 01 - alterar o salário
let salario = 1000;
const nome = "João";
const sobrenome = "Silva";

function imprimeDados() {
  const pessoa = `Nome: ${nome} ${sobrenome}`;
  const salarioUsuario = `R$ ${salario}, 00`;
  console.log(pessoa);
  console.log("Ganha: ", salario);
}
//IMPRIMIR DADOS A CADA 1 SEGUNDO
setInterval(imprimeDados, 2000);

// setInterval(function () {
//   console.clear();
//   console.log("conta do banco R$", salario);
//   salario = salario + 100;
// }, 0.1);

//EXEMPLO 02 - alterar o salário

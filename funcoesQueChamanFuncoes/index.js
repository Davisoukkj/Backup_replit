/**CRIE UM ARRAY DE OBJETOS => PESSOAS 
COM OS SEGUINTES ATRIBUTOS: NOME/SOBRENOME
CRIE UMA FUNÇÃO QUE ITERE SOBRE O ARRAY
E RETIRE NOMES E SOBRENOMES
CRIE UMA VARIAVEL COM O CONTEUDO
          -> cont emailBase = "@escola.pr.gov.br"
A PARTIR DESSES DADOS FORME UM @ecola.com
NOME.SOBRENOME+EMAILBASSE
EXECUTE A FUNCÃO...
*/
const pessoas = [
  //JSON
  { nome: "Marco", sobrenome: "Silva" },
  { nome: "Carla", sobrenome: "Santos" },
];
//EMAIL BASE

for (pessoa of pessoas) {
  //console.log(pessoas);
  console.log(pessoa.nome);
  //nome.sobrenome+emailBase
  console.log(pessoa.nome + pessoa.sobrenome + "@escola.pr.gov.br")
}

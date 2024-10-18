// Declaração de Funções
function dizOla() {
  console.log("Olá");
}
function olaPessoa(nome) {
  console.log("Olá, " + nome);
}
function soma(a, b) {
  return a + b;
}

const salario = 2500;

function formataSalario() {
  return "R$ " + salario + ",00";
}

// Funções do Tipo Arrow (Função Seta)
const imprimeMeuTime = () => {
  return "O time da minha namorada é o Inter";
};
// Invocação de Funções
dizOla();
olaPessoa("Joana");
olaPessoa("Carlos");

//formataSalario()
console.log(formataSalario());
console.log(imprimeMeuTime());

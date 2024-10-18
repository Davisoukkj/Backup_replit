// SetInterval que execute uma função personalizada (deve imprimir obj.js) que seja executada de 2 em 2s pela setInterval

function obj() {
  return {
    nome: "João",
    preço: "15,00",
    produto: "Arroz",
  };
}

let interval = setInterval(() => {
  console.log(obj());
}, 2000);

//setTimeOut - clearTimeOut
//clearInterval - ClearInterval

setTimeout(function () {
  clearInterval(interval);
  console.info("Intervalo encerrado");
}, 8000);

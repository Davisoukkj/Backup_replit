//EXPORT EJS
//VARIÁVEIS, FUNÇÕES, CLASSES

const nome = "Julios";

function dizOla() {
  return `Olá, ${nome}`;
}

// EXPORTAÇÃO INLINE

export function toUpper(text) {
  return `${text.toUpperCase()}`;
}

//EXPORTAÇÃO DEFAULT (PADRÃO)
function toLower(text) {
  return `${text.toLowerCase()}`;
}


export default toLower;

//EXPORTAÇÃO MULTIPLA

export { nome, dizOla, };

//IMPORT DE MÓDULOS

import { dizOla, nome, toUpper } from "./lib/strings.js";

//IMPORTAÇÃO DEFAULT
import toLower from "./lib/strings.js";

console.log(nome);

console.log(dizOla());
console.log(toUpper("Escobar"));
console.log(toLower("Jão"));


/**PASSOS DE UTILIZAÇÃO DOS MODULOS EJS 
*1) EXPORTAMOS COM EXPORT OU EXPORT DEFAULT
*2) LIBERAMOS O USO DE MODULOS "type" : "module"
*3) IMPORTAMOS COM import
*4) UTILIZAMOS O MÓDULO IMPORTADO DENTRO DO INDEX.JS
*/
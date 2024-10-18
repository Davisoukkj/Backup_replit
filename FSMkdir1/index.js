// UTILIZAR O MÓDULO
import { pastaDinamica, pastaEstatica } from "./libs/gerenciadorArquivos.cjs";

//pastaEstatica("./relatorio");
//pastaEstatica("./contratos");
//DENTRO DA PASTA ATUAL
pastaDinamica("../Novorelatorio");
pastaDinamica("./ArquivoX");

//CRIA UM NIVEL ACIM DA PASTA ATUAL
pastaDinamica("../../Novorelatorio");
pastaDinamica("../ArquivoX");

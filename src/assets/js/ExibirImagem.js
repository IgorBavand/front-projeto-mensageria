import { URL_SERVIDOR } from "../../utils/servidorImagens"

export default function ExibirImagem(nomeImagem){
    var caminho = `${URL_SERVIDOR}`;
    return `${caminho}${nomeImagem}`;
}
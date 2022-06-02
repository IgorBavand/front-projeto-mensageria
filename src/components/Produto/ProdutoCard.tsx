import { Link } from "react-router-dom";
import { ProdutoDto } from "../../dto/ProdutoDto";

type Props = {
    produto: ProdutoDto;
    adicionaProduto: Function;
    valorTotal : number

}
export default function ProdutoCard({produto, adicionaProduto, valorTotal} : Props){


return (
    <li className="bg-dark listagem-produtos list-group-item">
        <p>{produto.nomeProduto}</p>
        <p>{produto.preco}</p>
        <button className="btn btn-success" onClick={() => adicionaProduto(produto.preco, produto.codigoProduto)}>Adicionar</button>
    </li>
)
}


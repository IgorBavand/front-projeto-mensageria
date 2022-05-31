import { NumericLiteral } from "typescript";
import { ProdutoDto } from "./ProdutoDto";


export type PedidoDto = {
     idPedido: string;
     nome : string;
     valorTotal: number;
     enderecoEntrega: string;
     produtos: ProdutoDto[]
}
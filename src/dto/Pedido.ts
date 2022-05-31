import { RandomUUIDOptions } from "crypto"
import { NumericLiteral } from "typescript";
import { v4 as uuid } from 'uuid';
import { ProdutoDto } from "./ProdutoDto";


export type PedidoDto = {
     idPedido: string;
     nome : string;
     valorTotal: number;
     enderecoEntrega: string;
     produtos: ProdutoDto[]
}
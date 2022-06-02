import { RandomUUIDOptions } from "crypto"
import { NumericLiteral } from "typescript";


export type PedidoDto = {
     idPedido: string; //uuid
     nome : string;
     valorTotal: number;
     enderecoEntrega: string;
     produtos: number[]
}
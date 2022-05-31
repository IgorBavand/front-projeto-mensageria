import { RandomUUIDOptions } from "crypto"
import { NumericLiteral } from "typescript";
import { v4 as uuid } from 'uuid';


export type PedidoDto = {
     idPedido: string; //uuid
     nome : string;
     valorTotal: number;
     enderecoEntrega: string;
     produtos: number[]
}
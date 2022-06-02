import { ProdutoDto } from "../dto/ProdutoDto";

export type ProdutoType = {
    data: ProdutoDto[];
    last: boolean;
    totalPages: number;
    totalRegistros: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}
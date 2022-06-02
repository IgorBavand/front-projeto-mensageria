import { useEffect, useState } from 'react';
import { ProdutoDto } from '../dto/ProdutoDto';
import axios from 'axios';
import { BASE_URL_PEDIDOS } from '../utils/requests_pedidos';
import Pagination from '../components/Pagination';
import { ProdutoType } from '../types/ProdutoType';
import ProdutoCard from '../components/Produto/ProdutoCard';
import { ProdutosPedidoType } from '../types/ProdutosPedidoType';


export default function Home() {


    const [valorTotal, setValorTotal] = useState(0);

    const [produtosPedido, setProdutosPedido] = useState<ProdutosPedidoType>({
        data: []
    });

    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<ProdutoType>({
        data: [],
        last: true,
        totalPages: 0,
        totalRegistros: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    })

    useEffect(() => {
        axios.get(`http://localhost:8050/produtos/buscar-produtos?size=5&page=${pageNumber}`)
            .then(response => {
                console.log(response)

                console.log(page.data)
                const data = response as any;
                setPage(data);
            });
    }, [pageNumber]);




    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }
    const [produtoId, setProdutoId] = useState<number>();


    function adicionaProduto(valor: number, produtoId: number) {
        console.log(valorTotal);
        setValorTotal(valorTotal + valor);
        setProdutoId(produtoId);
    }
    useEffect(() => {
        axios.get(`http://localhost:8050/produtos/${produtoId}`)
            .then(response => {
                console.log(response.data);
                setProdutosPedido(response);
            });
    }, [produtoId])

    return (

        <div className="row d-flex justify-content-center bg-primary">

            <div className="col-6 produtos border">
                <h5 className="titulo-page text-center mt-3">Produtos</h5>

                <input type="search" name="search_produto" id="search_produto" className="align-self-center" />

                <ul className="list-group">
                    {page.data.map(produto => (

                        <div key={produto.codigoProduto}>
                            <ProdutoCard produto={produto} adicionaProduto={adicionaProduto} valorTotal={valorTotal} />
                        </div>

                    ))}

                </ul>
                <Pagination page={page} onChange={handlePageChange} />
            </div>

            <div className="col-6 border">
                <h5 className="titulo-page text-center mt-3">Produtos Selecionados</h5>
                <h5 className="titulo-page text-center">Valor do pedido: {valorTotal}</h5>
                <button className="btn btn-success">Finalizar Pedido</button>
                <ul className="list-group">

                   {/* /*
                   <!-- IMPLEMENTAR ALGUMA COISA NA API - ASSIM N DA CERTO -->

                    { {produtosPedido.data.map(produtoPedido => (
                        <li key={produtoPedido.codigoProduto} className="bg-dark listagem-produtos list-group-item">
                            <p>{produtoPedido.nomeProduto}</p>
                            <p>R$ {produtoPedido.preco}</p>
                            <button className="btn btn-danger">Remover</button>
                        </li>

                    ))} */} 


                </ul>
            </div>

        </div>
    );

}
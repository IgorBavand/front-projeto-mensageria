import { useEffect, useState } from 'react';
import { ProdutoDto } from '../dto/ProdutoDto';


export default function Home() {


    const [valorTotal, setValorTotal] = useState(0);
    const [listaPedidos, setListaPedidos] = useState([]);

    function adicionarProduto(valor: number, idProduto:number){
        //ao receber o id do produto => fazer uma busca com axios e colocá-lo numa lista do tipo produto
        setValorTotal(valorTotal+valor);
    }


    return (

        <div className="row d-flex justify-content-center bg-primary">

            <div className="col-6 produtos border">
                <h5 className="titulo-page text-center mt-3">Produtos</h5>

                <input type="search" name="search_produto" id="search_produto" className="align-self-center" />

                <ul className="list-group">
                    <li className="bg-dark listagem-produtos list-group-item">
                        <p>Notebook</p>
                        <p>R$ 1200.00</p>
                        <button onClick={() => adicionarProduto(1200.00, ProdutoDto)} className="btn btn-success">Adicionar</button>
                    </li>
                    <li className="bg-dark listagem-produtos list-group-item">
                        <p>Notebook</p>
                        <p>R$ 1300.00</p>
                        <button onClick={() => setValorTotal(valorTotal + 1300.00)} className="btn btn-success">Adicionar</button>
                    </li>
                    <li className="bg-dark listagem-produtos list-group-item">
                        <p>Notebook</p>
                        <p>R$ 2200.00</p>
                        <button onClick={() => setValorTotal(valorTotal + 2200.00)} className="btn btn-success">Adicionar</button>
                    </li>

                    
                    
                    
                   

                </ul>
            </div>

            <div className="col-6 border">
                <h5 className="titulo-page text-center mt-3">Produtos Selecionados</h5>
                <h5 className="titulo-page text-center">Valor do pedido: {valorTotal}</h5>
                <button className="btn btn-success">Finalizar Pedido</button>
                <ul className="list-group">
                <li className="bg-dark listagem-produtos list-group-item">
                        <p>Notebook</p>
                        <p>R$ 1200.00</p>
                        <button className="btn btn-danger">Adicionar</button>
                    </li>
                    <li className="bg-dark listagem-produtos list-group-item">
                        <p>Notebook</p>
                        <p>R$ 1200.00</p>
                        <button className="btn btn-danger">Adicionar</button>
                    </li>

                    <li className="bg-dark listagem-produtos list-group-item">
                        <p>Notebook</p>
                        <p>R$ 1200.00</p>
                        <button className="btn btn-danger">Adicionar</button>
                    </li>

<li className="bg-dark listagem-produtos list-group-item">
                        <p>Notebook</p>
                        <p>R$ 1200.00</p>
                        <button className="btn btn-danger">Adicionar</button>
                    </li>

                    
                   

                </ul>
            </div>

        </div>
    );

}
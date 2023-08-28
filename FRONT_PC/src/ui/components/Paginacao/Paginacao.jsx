import { useState } from "react"

export default function Paginacao({count, limit, setOffSet}){
    const [paginaAtual, setPaginaAtual] = useState(0);
    const quantidadeDePaginasNaTela = Math.ceil(count/limit) > 5? 5 : Math.ceil(count/limit);
    const totalDePaginas = (count / limit) > 1 ? Math.ceil(count/limit) : 1;
    const quantidadeDePaginaAEsquerda = 2;
    const primeiraPagina = (paginaAtual-quantidadeDePaginaAEsquerda) > 1 ? paginaAtual-quantidadeDePaginaAEsquerda : 1;


    function gerarNumeracao(arrayComValoresCorretos){
        return arrayComValoresCorretos.map((valor, index) => {
            if(valor == paginaAtual+1){
                return <li key={index} className="pagination-link is-current">{valor}</li>
            }
            return <li key={index} className="pagination-link" onClick={setOffSet(valor*limit)}>{valor}</li>
        })
    }

    function gerarPaginas(){
        const arrayDePaginasInicial = Array(quantidadeDePaginasNaTela).fill(null)
        const arrayComValoresCorretos = arrayDePaginasInicial.map((_, index)=>{
            return index+primeiraPagina
        });
        return gerarNumeracao(arrayComValoresCorretos)
    }

    return <nav className="pagination" role="navigation">
        <ul className="pagination-list">
            {
                gerarPaginas()
            }
        </ul>
    </nav>
}
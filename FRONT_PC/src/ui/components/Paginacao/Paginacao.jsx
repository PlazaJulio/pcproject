import { useState } from "react"

export default function Paginacao({count, limit, alterOffset}){
    const [paginaAtual, setPaginaAtual] = useState(1);
    const quantidadeDePaginasNaTela = Math.ceil(count/limit) > 5? 5 : Math.ceil(count/limit);
    const totalDePaginas = (count / limit) > 1 ? Math.ceil(count/limit) : 1;
    const quantidadeDePaginaAEsquerda = 2;
    const primeiraPagina = (paginaAtual-quantidadeDePaginaAEsquerda) > 1 ? paginaAtual-quantidadeDePaginaAEsquerda : 1;

    function logicaDeAlteracaoDePaginacao(valor){
        if(valor == 1){
            alterOffset(0)
        }else{
            alterOffset(((valor-1)*limit))
        }
        setPaginaAtual(valor)
    }

    function gerarNumeracao(arrayComValoresCorretos){
        return arrayComValoresCorretos.map((valor, index) => {
            if(valor == paginaAtual){
                return (
                    <li 
                        key={index} 
                        className="
                            w-11
                            h-11
                            flex
                            justify-center
                            items-center
                            bg-stone-800
                            rounded
                            text-stone-200
                            cursor-default
                        "
                    >
                        {valor}
                    </li>
                )
            }
            else if((primeiraPagina+index) <= totalDePaginas){
                return (
                    <li 
                        key={index} 
                        className="
                            w-11
                            h-11
                            flex
                            justify-center
                            items-center
                            bg-stone-600
                            rounded
                            text-stone-200
                            hover:bg-stone-800
                            cursor-pointer
                            transition-all
                        " 
                        onClick={()=>logicaDeAlteracaoDePaginacao(valor)}
                    >
                        {valor}
                    </li>
                )
            }
        })
    }

    function gerarPaginas(){
        const arrayDePaginasInicial = Array(quantidadeDePaginasNaTela).fill(null)
        const arrayComValoresCorretos = arrayDePaginasInicial.map((_, index)=>{
            return index+primeiraPagina
        });
        return gerarNumeracao(arrayComValoresCorretos)
    }

    return (
        <nav className="my-3" role="navigation">
            <ul className="flex gap-3 justify-center">
                {
                    gerarPaginas()
                }
            </ul>
        </nav>
    ) 
}
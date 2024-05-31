import { Link, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { RotasContext } from "../../../data/context/RotasContext"
import requestPost from "../../../data/utils/requestPost";
import requestGet from "../../../data/utils/requestGet";
import { TokenContext } from "../../../data/context/TokenContext";

export default function Menu() {
    const listaDeRotas = useContext(RotasContext);
    const { tokenReact } = useContext(TokenContext);
    const navigate = useNavigate();
    const [usuarioId, setUsuarioId] = useState(null);

    useEffect(()=>{
        const requisicao = async () =>{
            const response = await requestGet("/eu", {}, tokenReact)
            const responseDataId = response.data["id"]
            setUsuarioId(responseDataId)
        }
        requisicao()
        
    })
    return (
        <aside className="bg-stone-800 sm:mb-4 md:mb-8 sm:px-3 md:px-6">
            <ul className="flex mx-2">
                {listaDeRotas.map((elemento, index) => {
                    if (elemento.to == window.location.pathname) {
                        return (
                            <li key={index} className="bg-stone-500 p-2.5">
                                <Link 
                                    className="
                                        text-stone-300
                                        focus:outline-none
                                        focus:text-stone-300
                                        hover:text-stone-300
                                    "
                                    to={elemento.to}
                                >
                                    {elemento.nome}
                                </Link>
                            </li>
                        )
                    }
                    if(elemento.to == "/usuarios" && usuarioId != 1){
                        return 
                    }
                    return ( 
                        <li key={index} className="p-2.5">
                            <Link
                                className="
                                    text-stone-300
                                    focus:outline-none
                                    focus:text-stone-50
                                    hover:text-stone-50
                                " 
                                to={elemento.to}
                            >
                                {elemento.nome}
                            </Link>
                        </li>
                    )
                }
                )}
                <li className="p-2.5" key={listaDeRotas.length}>
                    <Link
                        className="
                            text-stone-300
                            focus:outline-none
                            focus:text-stone-50
                            hover:text-stone-50
                        " 
                        onClick={() => {
                                requestPost("/autorizacao/logout", {}, {}, tokenReact).then(()=>navigate("/login"))
                        }}
                    >
                        Sair
                    </Link>
                </li>
            </ul>
        </aside>
    )
}
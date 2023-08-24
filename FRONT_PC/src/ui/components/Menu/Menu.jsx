import { Link } from "react-router-dom"
import { useContext } from "react"
import { RotasContext } from "../../../data/context/RotasContext"
import { TokenContext } from "../../../data/context/TokenContext";
import requestPost from "../../../data/utils/requestPost";
import "./menuStyle.css";

export default function Menu() {
    const listaDeRotas = useContext(RotasContext);
    const token = useContext(TokenContext)
    return <aside className="menu menu-15p">
        <ul className="menu-list">
            {listaDeRotas.map((elemento) => {
                if( elemento.to == window.location.pathname){
                    return <Link className="is-active" to={elemento.to}>{elemento.nome}</Link>
                }
                return <Link to={elemento.to}>{elemento.nome}</Link>
            }
            )}
        </ul>
    </aside>
}
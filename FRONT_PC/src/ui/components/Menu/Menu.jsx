import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { RotasContext } from "../../../data/context/RotasContext"
import requestPost from "../../../data/utils/requestPost";
import { TokenContext } from "../../../data/context/TokenContext";

export default function Menu() {
    const listaDeRotas = useContext(RotasContext);
    const { tokenReact } = useContext(TokenContext);
    const navigate = useNavigate();
    return <aside className="menu column is-one-fifth">
        <ul className="menu-list">
            {listaDeRotas.map((elemento, index) => {
                if (elemento.to == window.location.pathname) {
                    return <li key={index}><Link className="is-active" to={elemento.to}>{elemento.nome}</Link></li>
                }
                return <li key={index}><Link to={elemento.to}>{elemento.nome}</Link></li>
            }
            )}
            <li className="mt-6" key={listaDeRotas.length}><Link onClick={
                () => {
                    requestPost("/autorizacao/logout", {}, {}, tokenReact).then(()=>navigate("/login"))
                }
            }>Sair</Link></li>
        </ul>
    </aside>
}
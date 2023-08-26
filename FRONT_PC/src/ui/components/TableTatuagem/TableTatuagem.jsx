import ButtonEditar from "../../partials/ButtonEditar";
import ButtonExcluir from "../../partials/ButtonExcluir";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import "./style.css"

export default function TableTatuagem({ valores }) {
    return <table className="table is-bordered is-hoverable width-table has-text-centered ml-auto mr-auto">
        <thead>
            <tr>
                <th className="has-text-centered">Id</th>
                <th className="has-text-centered">Tipo</th>
                <th className="has-text-centered">Ações</th>
            </tr>
        </thead>
        <tbody>
            {
                valores &&
                valores.map((dado) => <tr>
                    <td>{dado.id}</td>
                    <td>{dado.tipo}</td>
                    <td>
                        <ButtonEditar onHandle=""><FontAwesomeIcon icon={faPenToSquare} /></ButtonEditar>
                        <ButtonExcluir onHandle=""><FontAwesomeIcon icon={faTrash} /></ButtonExcluir>
                    </td>
                </tr>)
            }
        </tbody>
    </table>
}

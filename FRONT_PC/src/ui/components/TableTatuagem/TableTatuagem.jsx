import ButtonEditar from "../../partials/ButtonEditar";
import ButtonExcluir from "../../partials/ButtonExcluir";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import Paginacao from "../Paginacao/Paginacao";
import "./style.css"
import { useContext, useState } from "react";
import ModalGenerico from "../ModalGenerico/ModalGenerico";
import { TokenContext } from "../../../data/context/TokenContext";
import requestPatch from "../../../data/utils/requestPatch";

export default function TableTatuagem({ valores, countPagination, limitPagination, alterOffsetPagination, setAltualizarTabela }) {
    const [modalEditEnable, setModalEditEnable] = useState(false);
    const [editId, setEditId] = useState(null);
    const [valorAntigo, setValorAntigo] = useState("");
    const [tipo, setTipo] = useState("")
    const { tokenReact } = useContext(TokenContext)

    return <>
        {
            modalEditEnable &&
            <ModalGenerico setModalEnable={setModalEditEnable}
                titulo="Editar"
                conteudo={<input className="input" placeholder="Digite o tipo da tatuagem" value={tipo}
                onChange={(event) => setTipo(event.target.value)}></input>}
                onClickAccept={
                    () => {
                        requestPatch("/tipo-de-tatuagem/" + editId, { tipo: tipo }, {}, tokenReact).then(
                            () => {
                                setModalEditEnable(false)
                                setAltualizarTabela(tipo)
                            }
                        ).catch(() => console.log(tokenReact))
                    }
                } />
        }
        <table className="table is-bordered is-hoverable width-table has-text-centered ml-auto mr-auto">
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
                            <ButtonEditar onHandle={() => {
                                setModalEditEnable(true)
                                setEditId(dado.id)
                                setValorAntigo(dado.tipo)
                                setTipo(dado.tipo)
                            }}><FontAwesomeIcon icon={faPenToSquare} /></ButtonEditar>
                            <ButtonExcluir onHandle=""><FontAwesomeIcon icon={faTrash} /></ButtonExcluir>
                        </td>
                    </tr>)
                }
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan='3' className="ml-auto">
                        <Paginacao count={countPagination} limit={limitPagination} alterOffset={alterOffsetPagination} />
                    </td>
                </tr>
            </tfoot>
        </table>
    </>
}

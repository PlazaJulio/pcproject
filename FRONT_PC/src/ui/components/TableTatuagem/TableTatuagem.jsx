import ButtonEditar from "../../partials/ButtonEditar";
import ButtonExcluir from "../../partials/ButtonExcluir";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import Paginacao from "../Paginacao/Paginacao";
import { useContext, useState } from "react";
import ModalGenerico from "../ModalGenerico/ModalGenerico";
import { TokenContext } from "../../../data/context/TokenContext";
import requestPatch from "../../../data/utils/requestPatch";
import requestDelete from "../../../data/utils/requestDelete";
import PopupGenerico from "../PopupGenerico/PopupGenerico";

export default function TableTatuagem({ valores, countPagination, limitPagination, alterOffsetPagination, setAltualizarTabela, atualizar}) {
    const [modalEditEnable, setModalEditEnable] = useState(false);
    const [modalDeleteEnable, setModalDeleteEnable] = useState(false);
    const [popupSucesso, setPopupSucesso] = useState(false);
    const [popupErro, setPopupErro] = useState(false);
    const [conteudoPopup, setConteudoPopup] = useState("");
    const [id, setId] = useState(null);
    const [tipo, setTipo] = useState("")
    const { tokenReact } = useContext(TokenContext)

    return <>
        {
            popupSucesso &&
            <PopupGenerico
                color="lime"
                setVariavelDeEstado={setPopupSucesso}
            >
                <h3 className="text-lg font-semibold text-lime-800">Alteração realizada com sucesso!</h3>
                <p className="text-sm text-lime-700">{conteudoPopup}</p>
            </PopupGenerico>
        }
        {
            popupErro &&
            <PopupGenerico
                color="red"
                setVariavelDeEstado={setPopupErro}
            >
                <h3 className="text-lg font-semibold text-red-800">Algo deu errado!</h3>
                <p className="text-sm text-red-700">{conteudoPopup}</p>
            </PopupGenerico>
        }
        {
            modalEditEnable &&
            <ModalGenerico setModalEnable={setModalEditEnable}
                titulo="Editar"
                conteudo={
                    <input 
                        className="
                            shadow-inner 
                            shadow-stone-100
                            text-stone-600
                            text-sm
                            bg-stone-50 
                            w-full 
                            border 
                            rounded 
                            border-stone-200 
                            py-2 
                            px-3 
                            hover:border-stone-500 
                            focus:border-stone-500 
                            focus:outline-none
                        " 
                        placeholder="Digite o tipo da tatuagem" 
                        value={tipo}
                        onChange={(event) => setTipo(event.target.value)}
                    />
                }
                onClickAccept={
                    () => {
                        if (tipo != "") {
                            requestPatch("/tipo-de-tatuagem/" + id, { tipo: tipo }, {}, tokenReact).then(
                                () => {
                                    setModalEditEnable(false)
                                    setAltualizarTabela(!atualizar)
                                    setPopupSucesso(true)
                                    setConteudoPopup(`Tipo de tatuagem foi alterado para ${tipo}`)
                                }
                            ).catch((error) => {
                                setPopupErro(true)
                                setErrorMessage(error)
                            })
                        }
                    }
                } />
        }
        {
            modalDeleteEnable &&
            <ModalGenerico setModalEnable={setModalDeleteEnable}
                titulo="Deletar"
                conteudo={<p>Você tem certeza que deseja DELETAR esse tipo? ({tipo})</p>}
                onClickAccept={
                    () => {
                        requestDelete("/tipo-de-tatuagem/" + id, {}, tokenReact).then(
                            () => {
                                setModalDeleteEnable(false);
                                setAltualizarTabela(!atualizar);
                                setPopupSucesso(true)
                                setConteudoPopup("Tipo de tatuagem foi excluído")
                            }
                        ).catch((error) => {
                                setPopupErro(true)
                                setConteudoPopup(error)
                        })
                    }
                }
            />
        }
        <table className="table-auto w-full border border-solid border-stone-900 border-separate" border="1">
            <thead className="bg-stone-700">
                <tr>
                    <th className="text-stone-100 font-bold text-center p-2.5 border border-solid border-stone-900">Id</th>
                    <th className="text-stone-100 font-bold text-center p-2.5 border border-solid border-stone-900">Tipo</th>
                    <th className="text-stone-100 font-bold text-center p-2.5 border border-solid border-stone-900">Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    valores &&
                    valores.map((dado, index) => {
                        return (
                            <tr key={index} className={`${index%2==0?"bg-stone-300":"bg-stone-100"} text-center`}>
                                <td className="p-2 border border-solid border-stone-900">{dado.id}</td>
                                <td className="p-2 border border-solid border-stone-900">{dado.tipo}</td>
                                <td className="flex gap-3 justify-center p-2 border border-solid border-stone-900">
                                    <ButtonEditar onHandle={() => {
                                        setModalEditEnable(true)
                                        setId(dado.id)
                                        setTipo(dado.tipo)
                                    }}><FontAwesomeIcon icon={faPenToSquare} /></ButtonEditar>
                                    <ButtonExcluir onHandle={() => {
                                        setModalDeleteEnable(true)
                                        setTipo(dado.tipo)
                                        setId(dado.id)
                                    }}><FontAwesomeIcon icon={faTrash} /></ButtonExcluir>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <Paginacao count={countPagination} limit={limitPagination} alterOffset={alterOffsetPagination} />
    </>
}

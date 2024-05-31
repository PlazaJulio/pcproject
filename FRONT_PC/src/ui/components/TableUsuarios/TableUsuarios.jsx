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

export default function TableUsuarios({ valores, countPagination, limitPagination, alterOffsetPagination, setAltualizarTabela, atualizar }) {
    const [modalEditEnable, setModalEditEnable] = useState(false);
    const [modalDeleteEnable, setModalDeleteEnable] = useState(false);
    const [popupSucesso, setPopupSucesso] = useState(false);
    const [popupErro, setPopupErro] = useState(false);
    const [conteudoPopup, setConteudoPopup] = useState("");
    const [id, setId] = useState(null);
    const [usuario, setUsuario] = useState("")
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    const [permissaoDeEscrita, setPermissaoDeEscrita] = useState(null)
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
                    <>
                        <div className='mb-3'>
                            <p>Nome do usuario: <span className="text-red-800">*</span></p>
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
                                placeholder="Digite o usuario" 
                                value={usuario}
                                onChange={(event) => setUsuario(event.target.value)} 
                            />
                        </div>
                        <div className='mb-3'>
                            <p>Nome: <span className="text-red-800">*</span></p>
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
                                placeholder="Digite o nome" 
                                value={nome}
                                onChange={(event) => setNome(event.target.value)} 
                            />
                        </div>
                        <div className='mb-3'>
                            <p>Senha: <span className="text-red-800">*</span></p>
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
                                placeholder="Digite a nova senha" 
                                value={senha}
                                onChange={(event) => setSenha(event.target.value)} 
                            />
                        </div>
                        <div className='mb-3'>
                            <label className='flex gap-0.5 items-center'>
                                <input
                                    className='
                                        w-4
                                        h-4
                                        appearance-none
                                        border-2
                                        border-stone-300
                                        rounded 
                                        mr-1
                                        checked:bg-stone-400
                                        hover:border-stone-500
                                        checked:border-stone-500
                                        focus:border-stone-500
                                        focus:outline-none
                                    ' 
                                    type='checkbox' 
                                    value={permissaoDeEscrita}
                                    checked={permissaoDeEscrita}
                                    onChange={() => setPermissaoDeEscrita(!permissaoDeEscrita)}
                                />
                                Permissão de escrita
                            </label>
                        </div>
                    </>
                }
                onClickAccept={() => {
                    if (usuario != "" && nome != "" && senha != "") {
                        requestPatch("/usuario/" + id, { 
                            "usuario": usuario,
                            "permissao_de_escrita": permissaoDeEscrita,
                            "nome": nome,
                            "password": senha
                        }, {}, tokenReact).then(
                            () => {
                                setModalEditEnable(false)
                                setAltualizarTabela(!atualizar)
                                setPopupSucesso(true)
                                setConteudoPopup(`Usuário ${usuario} alterado com sucesso!`)
                            }
                        ).catch((error) => {
                            setModalEditEnable(false)
                            setAltualizarTabela(!atualizar)
                            setPopupErro(true)
                            setConteudoPopup(error)
                        })
                    } else {
                        setPopupErro(true)
                        setConteudoPopup("Preencha todos os campos obrigatórios!")
                    }
                }} 
            />
        }
        {
            modalDeleteEnable &&
            <ModalGenerico setModalEnable={setModalDeleteEnable}
                titulo="Deletar"
                conteudo={<p>Você tem certeza que deseja DELETAR esse dado? ({usuario})</p>}
                onClickAccept={
                    () => {
                        requestDelete("/usuario/" + id, {}, tokenReact).then(() => {
                            setModalDeleteEnable(false);
                            setAltualizarTabela(!atualizar);
                            setPopupSucesso(true)
                            setConteudoPopup(`Usuário ${usuario} excluido com sucesso!`)
                        }).catch((error) => {
                            setModalDeleteEnable(false);
                            setAltualizarTabela(!atualizar);
                            setPopupErro(true)
                            setConteudoPopup(error)
                        })
                    }
                }
            />
        }
        <table className="table-auto w-full border border-solid border-stone-900 border-separate">
            <thead className="bg-stone-700">
                <tr>
                    <th className="text-stone-100 font-bold text-center p-2.5 border border-solid border-stone-900">Id</th>
                    <th className="text-stone-100 font-bold text-center p-2.5 border border-solid border-stone-900">Usuario</th>
                    <th className="text-stone-100 font-bold text-center p-2.5 border border-solid border-stone-900">Nome</th>
                    <th className="text-stone-100 font-bold text-center p-2.5 border border-solid border-stone-900">Permissão de escrita</th>
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
                                <td className="p-2 border border-solid border-stone-900">{dado.usuario}</td>
                                <td className="p-2 border border-solid border-stone-900">{dado.nome}</td>
                                <td className="p-2 border border-solid border-stone-900">{dado.permissao_de_escrita ? "Tem permissão" : "Não tem permissão"}</td>
                                <td className="flex gap-3 justify-center p-2 border border-solid border-stone-900">
                                    <ButtonEditar onHandle={() => {
                                        setModalEditEnable(true)
                                        setId(dado.id)
                                        setUsuario(dado.usuario)
                                        setNome(dado.nome)
                                        setPermissaoDeEscrita(dado.permissao_de_escrita)
                                    }}><FontAwesomeIcon icon={faPenToSquare} /></ButtonEditar>
                                    <ButtonExcluir onHandle={() => {
                                        setModalDeleteEnable(true)
                                        setUsuario(dado.usuario)
                                        setId(dado.id)
                                        setNome(dado.nome)
                                        setPermissaoDeEscrita(dado.permissoa_de_escrita)
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

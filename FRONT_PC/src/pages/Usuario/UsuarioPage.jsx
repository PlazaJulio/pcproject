import { useState, useEffect, useContext } from "react";
import requestGet from "../../data/utils/requestGet";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../data/context/TokenContext";
import Menu from "../../ui/components/Menu/Menu";
import TableUsuarios from "../../ui/components/TableUsuarios/TableUsuarios";
import ModalGenerico from "../../ui/components/ModalGenerico/ModalGenerico";
import Loading from "../../ui/components/Loading/Loading";
import PopupGenerico from "../../ui/components/PopupGenerico/PopupGenerico";
import requestPost from "../../data/utils/requestPost";

export default function UsuarioPage() {
    const [usuarios, setUsuarios] = useState(null);
    const { tokenReact } = useContext(TokenContext)
    const [limiteDeValoresPorRequisicao, setLimiteDeValoresPorRequisicao] = useState(6);
    const [modalAddEnable, setModalAddEnable] = useState(false);
    const [offset, setOffset] = useState(0);
    const [atualizar, setAtualizar] = useState(false);
    const [loading, setLoading] = useState(false);
    const [usuario, setUsuario] = useState("")
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    const [permissaoDeEscrita, setPermissaoDeEscrita] = useState(false)
    const [popupSucesso, setPopupSucesso] = useState(false);
    const [popupErro, setPopupErro] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const response = await requestGet("/usuario", { "limite": limiteDeValoresPorRequisicao, "deslocar": offset }, tokenReact);
                const responseData = response.data;
                setUsuarios(responseData);
                setLoading(false);
            } catch (error) {
                if (error.response.status == 401) {
                    navigate("/login")
                }
            }
        }
        fetchData();
    }, [offset, atualizar]);

    return (
        <section className="flex flex-col">
            {
                popupErro &&
                <PopupGenerico
                    color="red"
                    setVariavelDeEstado={setPopupErro}
                >
                    <h3 className="text-lg font-semibold text-red-800">Algo deu errado!</h3>
                    <p className="text-sm text-red-700">{errorMessage}</p>
                </PopupGenerico>
            }
            {
                popupSucesso &&
                <PopupGenerico
                    color="lime"
                    setVariavelDeEstado={setPopupErro}
                >
                    <h3 className="text-lg font-semibold text-lime-800">Usuário adicionado com sucesso!</h3>
                    <p className="text-sm text-lime-700">Usuário {usuario} foi adicionado!</p>
                </PopupGenerico>
            }
            {
                loading &&
                <Loading />
            }
            <Menu />
            {
                modalAddEnable &&
                <ModalGenerico setModalEnable={setModalAddEnable}
                    titulo="Adicionar usuario"
                    conteudo={
                        <>
                            <div className='mb-3'>
                                <p>Nome do usuario:</p>
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
                                <p>Nome:</p>
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
                                <p>Senha:</p>
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
                            <div className="mb-3">
                                <label className="flex gap-0.5 items-center">
                                    <input 
                                        className="
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
                                        "
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
                            requestPost("/usuario/inserir", {
                                "usuario": usuario,
                                "permissao_de_escrita": permissaoDeEscrita,
                                "nome": nome,
                                "password": senha
                            }, {}, tokenReact).then(() => {
                                    setModalAddEnable(false)
                                    setAtualizar(!atualizar)
                                    setPopupSucesso(true)
                            }).catch((error) => {
                                setModalAddEnable(false)
                                setAtualizar(!atualizar)
                                setPopupErro(true)
                                setErrorMessage(error)
                            })
                        } else {
                            setPopupErro(true)
                            setErrorMessage("Preencha todos os campos obrigatórios!")
                        }
                    }} 
                />
            }
            <div className="max-w-5xl w-full m-auto">
                <button 
                    className="
                        shadow
                        shadow-stone-200
                        bg-lime-400
                        text-sm
                        text-lime-800
                        mb-2
                        p-2
                        border
                        rounded
                        border-lime-800
                        focus:outline-none
                        hover:bg-lime-200
                        transition-all
                    " 
                    onClick={setModalAddEnable}
                >
                    + Adicionar
                </button>
                {
                    usuarios &&
                    <TableUsuarios 
                        valores={usuarios.resultado} 
                        countPagination={usuarios.numero_de_dados_totais} 
                        limitPagination={limiteDeValoresPorRequisicao} 
                        alterOffsetPagination={setOffset} 
                        setAltualizarTabela={setAtualizar} 
                        atualizar={atualizar} 
                    />
                }
            </div>
        </section>
    );
}

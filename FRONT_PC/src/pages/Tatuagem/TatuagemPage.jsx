import { useState, useEffect, useContext } from "react";
import requestGet from "../../data/utils/requestGet";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../data/context/TokenContext";
import Menu from "../../ui/components/Menu/Menu";
import TableTatuagem from "../../ui/components/TableTatuagem/TableTatuagem";
import ModalGenerico from "../../ui/components/ModalGenerico/ModalGenerico";
import Loading from "../../ui/components/Loading/Loading";
import PopupGenerico from "../../ui/components/PopupGenerico/PopupGenerico";
import requestPost from "../../data/utils/requestPost";

export default function TatuagemPage() {
    const [tatuagens, setTatuagens] = useState(null);
    const { tokenReact } = useContext(TokenContext)
    const [limiteDeValoresPorRequisicao, setLimiteDeValoresPorRequisicao] = useState(6);
    const [modalAddEnable, setModalAddEnable] = useState(false);
    const [offset, setOffset] = useState(0);
    const [atualizar, setAtualizar] = useState(false);
    const [loading, setLoading] = useState(false);
    const [tipo, setTipo] = useState("")
    const [popupSucesso, setPopupSucesso] = useState(false);
    const [popupErro, setPopupErro] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true)
        const fetchData = async () => {
            try {
                const response = await requestGet("/tipo-de-tatuagem", { "limite": limiteDeValoresPorRequisicao, "deslocar": offset }, tokenReact);
                const responseData = response.data;
                setTatuagens(responseData);
                setLoading(false);
            } catch (error) {
                if (error.response.status == 401) {
                    navigate("/login")
                }
            }
        }
        fetchData();
    }, [offset, atualizar]);

    function adicionar() {
        if (tipo != "") {
            requestPost("/tipo-de-tatuagem/inserir",
                {
                    "tipo": tipo
                },
                {},
                tokenReact
            ).then(() => {
                setAtualizar(!atualizar)
                setModalAddEnable(false)
                setPopupSucesso(true)
            }).catch((error) => {
                setPopupErro(true)
                setErrorMessage(error)
            });
        } else {
            setPopupErro(true)
            setErrorMessage("Preencha todos os campos")
        }
    }

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
                    <h3 className="text-lg font-semibold text-lime-800">Tatuagem adicionada com sucesso!</h3>
                    <p className="text-sm text-lime-700">Tatuagem de tipo {tipo} foi adicionada!</p>
                </PopupGenerico>
            }
            {
                loading &&
                <Loading />
            }
            <Menu />
            {
                modalAddEnable &&
                <ModalGenerico
                    titulo="Adicionar tatuagem"
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
                        () => adicionar()
                    }
                    setModalEnable={setModalAddEnable}
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
                    tatuagens &&
                    <TableTatuagem 
                        valores={tatuagens.resultado} 
                        countPagination={tatuagens.numero_de_dados_totais} 
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

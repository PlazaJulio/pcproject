import { useState, useEffect, useContext, useReducer } from "react";
import requestPost from "../../data/utils/requestPost";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../../data/context/TokenContext";
import CardCriminoso from "../../ui/components/CardCriminoso/CardCriminoso";
import Paginacao from "../../ui/components/Paginacao/Paginacao";
import Menu from "../../ui/components/Menu/Menu";
import Loading from "../../ui/components/Loading/Loading";
import ModalGenerico from "../../ui/components/ModalGenerico/ModalGenerico";
import ImagemEmBase64 from "../../data/utils/ImagemEmBase64";
import PopupGenerico from "../../ui/components/PopupGenerico/PopupGenerico";
import requestGet from "../../data/utils/requestGet";
import CriminosoDataReducer, { InitialState } from "./CriminosoData";
import CriminosoFilterDataReducer, { FilterInitialState } from "./CriminosoDataFilter";
import CriminosoFilter from "./CriminosoFilter";

export default function CriminosoPage() {
    const { tokenReact } = useContext(TokenContext);
    const navigate = useNavigate()

    const [criminosos, setCriminosos] = useState(null);
    const [limiteDeValoresPorRequisicao, setLimiteDeValoresPorRequisicao] = useState(10)
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const [atualizar, setAtualizar] = useState(false);
    const [modalAddEnable, setModalAddEnable] = useState(false);
    const [popupSucesso, setPopupSucesso] = useState(false);
    const [popupErro, setPopupErro] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [modalFilterEnable, setModalFilterEnable] = useState(false);
    const [limparFiltro, setLimparFiltro] = useState(false);

    const [tatuagens, setTatuagens] = useState({});
    
    const [state, dispatch] = useReducer(CriminosoDataReducer, InitialState);
    const [stateF, dispatchF] = useReducer(CriminosoFilterDataReducer, FilterInitialState);

    const [temMarca, setTemMarca] = useState(null);
    const [ehTatuagem, setEhTatuagem] = useState(false);

    useEffect(() => {
        if (limparFiltro) {
            dispatchF({
                type: 'CLEAR_STATE',
                state: FilterInitialState
            })
            setTemMarca(false);
            setEhTatuagem(false);
        }

        if (temMarca && !ehTatuagem) {
            dispatchF({
                type: 'SET_MARCAOUTATUAGEM',
                cicatriz_ou_tatuagem: 'c'
            })       
        } else if(temMarca && ehTatuagem) {
            dispatchF({
                type: 'SET_MARCAOUTATUAGEM',
                cicatriz_ou_tatuagem: 't'
            })
        } else {
            dispatchF({
                type: 'SET_MARCAOUTATUAGEM',
                cicatriz_ou_tatuagem: undefined
            })
        }
    }, [temMarca, ehTatuagem, limparFiltro])

    useEffect(() => {
        setLoading(true)
        if (!modalAddEnable) {
            dispatch({
                type: 'SET_STATE',
                state: InitialState
            })
        }

        if (limparFiltro) {
            dispatchF({
                type: 'CLEAR_STATE',
                state: FilterInitialState
            })
            setTemMarca(false);
            setEhTatuagem(false);
        }

        /* 
            Verifica se todos os valores do estado de filtragem do criminoso está vazio, 
            caso esteja, retorna um objeto vazio, se não, passa por cada item no objeto e retorna apenas aqueles que foram alterados
        */
        var bodyRequest;
        Object.values(stateF).every(value => value == undefined) 
        ? bodyRequest = {} 
        : Object.keys(stateF).forEach((key) => {
            if (stateF[key] != null && stateF[key] != "") {
                bodyRequest = {
                    ...bodyRequest,
                    [key]: stateF[key]
                }
            }
        })
        
        const fetchData = async () => {
            try {
                const responseTatuagens = await requestGet("/tipo-de-tatuagem", { "limite": 999 }, tokenReact);
                const responseTatuagensData = responseTatuagens.data.resultado;
                if (responseTatuagensData != null) {
                    setTatuagens(responseTatuagensData)
                }
                const response = await requestPost("/criminoso/filtro", bodyRequest, { "limite": limiteDeValoresPorRequisicao, "deslocar": offset }, tokenReact);
                const responseData = response.data;
                setCriminosos(responseData);
                setLoading(false);
            } catch (error) {
                setCriminosos({});
                if (error.response && error.response.status === 401) {
                    navigate("/login");
                }
            }
        };

        fetchData();
        setLimparFiltro(false);
    }, [atualizar, offset, limparFiltro]);

    function handleChange(event) {
        dispatch({
            type: event.currentTarget.getAttribute('data-type'),
            [event.target.name]: event.target.value
        })
    }

    function handleChangeF(event) {
        if (event.target.name == "tem_marca" || event.target.name == "eh_tatuagem") {
            event.target.name == "tem_marca" ? setTemMarca(!temMarca) : setEhTatuagem(!ehTatuagem);
        } else {
            dispatchF({
                type: event.currentTarget.getAttribute('data-type'),
                [event.target.name]: event.target.value
            })
        }
    }

    return (
        <>
            <Menu />
            {
                popupSucesso &&
                <PopupGenerico
                    color="lime"
                    setVariavelDeEstado={setPopupSucesso}
                >
                    <h3 className="text-lg font-semibold text-lime-800">Criminoso adicionado com sucesso!</h3>
                    <p className="text-sm text-lime-700">Criminoso {state.nome} foi adicionado!</p>
                </PopupGenerico>
            }
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
                modalAddEnable &&
                <ModalGenerico
                    titulo="Adicionar criminoso"
                    conteudo={
                        <>
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
                                    data-type="SET_NOME" 
                                    name="nome" 
                                    placeholder="Nome*" 
                                    value={state.nome}
                                    onChange={(event) => handleChange(event)}
                                />
                            </div>

                            <div className='mb-3'>
                                <p>Alcunha:</p>
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
                                    data-type="SET_ALCUNHA" 
                                    name="alcunha" 
                                    placeholder="Alcunha*" 
                                    value={state.alcunha}
                                    onChange={(event) => handleChange(event)}
                                />
                            </div>

                            <div className='mb-3'>
                                <p>Genero:</p>
                                <select
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
                                    data-type="SET_GENERO"
                                    name="genero" 
                                    value={state.genero}
                                    onChange={(event) => handleChange(event)}
                                >
                                    <option value="Masculino">Masculino</option>
                                    <option value="Feminino">Feminino</option>
                                </select>
                            </div>

                            <div className='mb-3'>
                                <p>Data de nascimento:</p>
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
                                    data-type="SET_DATADENASCIMENTO"
                                    name="dataDeNascimento"
                                    type="date"
                                    value={state.dataDeNascimento}
                                    onChange={(event) => handleChange(event)}
                                    locale="pt-BR" // Defina o locale para português do Brasil
                                />
                            </div>

                            <div className='mb-3'>
                                <p>Nome do pai:</p>
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
                                    data-type="SET_PAI"
                                    name="pai"
                                    placeholder="Nome do pai*" 
                                    value={state.pai}
                                    onChange={(event) => handleChange(event)}
                                />
                            </div>


                            <div className='mb-3'>
                                <p>Nome da mãe:</p>
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
                                    data-type="SET_MAE"
                                    name="mae"
                                    placeholder="Nome da mãe*" 
                                    value={state.mae}
                                    onChange={(event) => handleChange(event)}
                                />
                            </div>

                            <div className='mb-3'>
                                <p>RG:</p>
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
                                    data-type="SET_RG"
                                    name="rg"
                                    placeholder="RG" 
                                    value={state.rg}
                                    onChange={(event) => handleChange(event)}
                                />
                            </div>

                            <div className='mb-3'>
                                <p>CPF:</p>
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
                                    data-type="SET_CPF"
                                    name="cpf"
                                    placeholder="Cpf" 
                                    value={state.cpf}
                                    onChange={(event) => handleChange(event)}
                                />
                            </div>

                            <div className='mb-3'>
                                <p>Telefone:</p>
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
                                    data-type="SET_TELEFONE"
                                    name="telefone" 
                                    placeholder="Telefone" 
                                    value={state.telefone}
                                    onChange={(event) => handleChange(event)}
                                />
                            </div>

                            <div className='flex gap-4 items-center mb-3'>
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
                                        data-type="SET_OBITO"
                                        name="obito"
                                        type='checkbox'
                                        value={state.obito}
                                        checked={state.obito}
                                        onChange={() => dispatch({
                                            type: "SET_OBITO",
                                            obito: !state.obito
                                        })}
                                    />
                                    Obito
                                </label>

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
                                        data-type="SET_FORAGIDO"
                                        name="foragido"
                                        type="checkbox" 
                                        value={state.foragido}
                                        checked={state.foragido}
                                        onChange={() => dispatch({
                                            type: "SET_FORAGIDO",
                                            foragido: !state.foragido
                                        })}
                                    />
                                    Foragido
                                </label>
                            </div>

                            <div className='mb-3'>
                                <p>Naturalidade:</p>
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
                                    data-type="SET_NATURALIDADE"
                                    name="naturalidade"
                                    placeholder="Naturalidade" 
                                    value={state.naturalidade}
                                    onChange={(event) => handleChange(event)}
                                />
                            </div>

                            <div className='mb-3'>
                                <p>Nacionalidade:</p>
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
                                    data-type="SET_NACIONALIDADE"
                                    name="nacionalidade"
                                    placeholder="Nacionalidade" 
                                    value={state.nacionalidade}
                                    onChange={(event) => handleChange(event)}
                                />
                            </div>

                            <div className='mb-3'>
                                <p>Local de trabalho:</p>
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
                                    data-type="SET_LOCALDETRABALHO"
                                    name="localDeTrabalho"
                                    placeholder="Local de tabalho" 
                                    value={state.localDeTrabalho}
                                    onChange={(event) => handleChange(event)}
                                />
                            </div>

                            <div className='mb-3'>
                                <p>Profissão:</p>
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
                                    data-type="SET_PROFISSAO"
                                    name="profissao"
                                    placeholder="Profissao" 
                                    value={state.profissao}
                                    onChange={(event) => handleChange(event)}
                                />
                            </div>

                            <div className='mb-3'>
                                <p>Grau de Escolaridade:</p>
                                <select 
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
                                    data-type="SET_GRAUDEESCOLARIDADE"
                                    name="grauDeEscolaridade"
                                    value={state.grauDeEscolaridade}
                                    onChange={(event) => handleChange(event)}
                                >
                                    <option value="Ensino Fundamental Incompleto">Ensino Fundamental Incompleto</option>
                                    <option value="Ensino Fundamental Completo">Ensino Fundamental Completo</option>
                                    <option value="Ensino Medio Incompleto">Ensino Médio Incompleto</option>
                                    <option value="Ensino Medio Completo">Ensino Médio Completo</option>
                                    <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                                    <option value="Ensino Superior Completo">Ensino Superior Completo</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </div>

                            <div className='mb-3'>
                                <p>Altura:</p>
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
                                    data-type="SET_ALTURA"
                                    name="altura"
                                    type="number" 
                                    placeholder="Altura (digite com ponto em vez de virgula - Ex: 1.75)" 
                                    value={state.altura}
                                    onChange={(event) => handleChange(event)}
                                    min={0}
                                />
                            </div>

                            <div className='mb-3'>
                                <p>Etnia:</p>
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
                                    data-type="SET_ETNIA"
                                    name="etnia"
                                    placeholder="Etnia" 
                                    value={state.etnia}
                                    onChange={(event) => handleChange(event)}
                                />
                            </div>


                            <div className='mb-3'>
                                <p>Porte fisico:</p>
                                <select
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
                                    data-type="SET_PORTEFISICO"
                                    name="porteFisico" 
                                    value={state.porteFisico}
                                    onChange={(event) => handleChange(event)}
                                >
                                    <option value="Magro">Magro</option>
                                    <option value="Médio">Médio</option>
                                    <option value="Gordo">Gordo</option>
                                    <option value="Forte">Forte</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </div>

                            <div className='mb-3'>
                                <p>Cor dos olhos:</p>
                                <select 
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
                                    data-type="SET_CORDOSOLHOS"
                                    name="corDosOlhos"
                                    value={state.corDosOlhos}
                                    onChange={(event) => handleChange(event)}
                                >
                                    <option value="Azul">Azul</option>
                                    <option value="Castanho">Castanho claro</option>
                                    <option value="Verde">Verde</option>
                                    <option value="Castanho escuro">Castanho escuro</option>
                                    <option value="Ambar">Ambar</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </div>

                            <div className='mb-3'>
                                <p>Cor da pele:</p>
                                <select
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
                                    data-type="SET_CORDAPELE"
                                    name="corDaPele"
                                    value={state.corDaPele}
                                    onChange={(event) => handleChange(event)}
                                >
                                    <option value="Amarelo">Amarelo</option>
                                    <option value="Branco">Branco</option>
                                    <option value="Indigena">Indigena</option>
                                    <option value="Preto">Preto</option>
                                </select>
                            </div>

                            <div className='mb-3'>
                                <p>Cor do cabelo:</p>
                                <select
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
                                    data-type="SET_CORDOCABELO"
                                    name="corDoCabelo"
                                    placeholder="Cor do cabelo" 
                                    value={state.corDoCabelo}
                                    onChange={(event) => handleChange(event)}
                                >
                                    <option value="Preto">Preto</option>
                                    <option value="Castanho">Castaho</option>
                                    <option value="Loiro">Loiro</option>
                                    <option value="Ruivo">Ruivo</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </div>

                            <div className='mb-3'>
                                <p>Tipo de cabelo:</p>
                                <select 
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
                                    data-type="SET_TIPODECABELO"
                                    name="tipoDeCabelo"
                                    value={state.tipoDeCabelo}
                                    onChange={(event) => handleChange(event)}
                                >
                                    <option value="Encaracolado">Encaracolado</option>
                                    <option value="Liso">Liso</option>
                                    <option value="Careca">Careca</option>
                                    <option value="Calvo">Calvo</option>
                                    <option value="Outro">Outro</option>
                                </select>
                            </div>

                            <div className='mb-3'>
                                <p>Foto de frente:</p>
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
                                    type="file" 
                                    value={state.fotoDeFrente}
                                    onChange={async (event) => {
                                        dispatch({
                                            type: 'SET_FOTODEFRENTE',
                                            action: event.target.value
                                        })
                                        const imgBase64 = await ImagemEmBase64(event.target.files[0])
                                        dispatch({
                                            type: 'SET_FOTODEFRENTEBASE64',
                                            action: imgBase64.split(',')[1] 
                                        })
                                    }}></input>
                            </div>
                            <div className='mb-3'>
                                <p>Foto de perfil esquerdo:</p>
                                <input 
                                    className='
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
                                    ' 
                                    type="file" 
                                    value={state.fotoPerfilEsquerdo}
                                    onChange={async (event) => {
                                        dispatch({
                                            type: 'SET_FOTOPERFILESQUERDO',
                                            action: event.target.value
                                        })
                                        const imgBase64 = await ImagemEmBase64(event.target.files[0])
                                        dispatch({
                                            type: 'SET_FOTOPERFILESQUERDOBASE64',
                                            action: imgBase64.split(',')[1]
                                        })
                                    }}></input>
                            </div>

                            <div className='mb-3'>
                                <p>Foto de perfil direito:</p>
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
                                    type="file" 
                                    placeholder="Foto de perfil direito" 
                                    value={state.fotoPerfilDireito}
                                    onChange={async (event) => {
                                        dispatch({
                                            type: 'SET_FOTOPERFILDIREITO',
                                            action: event.target.value
                                        })
                                        const imgBase64 = await ImagemEmBase64(event.target.files[0])
                                        dispatch({
                                            type: 'SET_FOTOPERFILDIREITOBASE64',
                                            action: imgBase64.split(',')[1]
                                        })
                                    }}></input>
                            </div>

                            <div className='mb-3'>
                                <p>CEP:</p>
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
                                    data-type="SET_CEP"
                                    name="cep"
                                    placeholder="CEP" 
                                    value={state.cep}
                                    onChange={(event) => handleChange(event)}
                                />
                            </div>

                            <div className='mb-3'>
                                <p>Rua:</p>
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
                                    data-type="SET_RUA"
                                    name="rua"
                                    placeholder="Rua" 
                                    value={state.rua}
                                    onChange={(event) => handleChange(event)}
                                />
                            </div>

                            <div className='mb-3'>
                                <p>Bairro:</p>
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
                                    data-type="SET_BAIRRO"
                                    name="bairro"
                                    placeholder="Bairro" 
                                    value={state.bairro}
                                    onChange={(event) => handleChange(event)}
                                />
                            </div>

                            <div className='mb-3'>
                                <p>Numero:</p>
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
                                    data-type="SET_NUMERO"
                                    name="numero"
                                    type="number" 
                                    placeholder="Numero (digite um numero, nunca uma letra)" 
                                    value={state.numero}
                                    onChange={(event) => handleChange(event)}
                                />
                            </div>

                            <div className='mb-3'>
                                <p>Complemento:</p>
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
                                    data-type="SET_COMPLEMENTO"
                                    name="complemento"
                                    placeholder="Complemento" 
                                    value={state.complemento}
                                    onChange={(event) => handleChange(event)}
                                />
                            </div>
                        </>
                    }
                    setModalEnable={setModalAddEnable}
                    onClickAccept={
                        () => {
                            if (state.nome != "" && state.alcunha != "" && state.pai != "" && state.mae != "") {
                                requestPost("/criminoso/inserir",
                                    {
                                        "nome": state.nome,
                                        "alcunha": state.alcunha,
                                        "genero": state.genero,
                                        "data_de_nascimento": state.dataDeNascimento,
                                        "pai": state.pai,
                                        "mae": state.mae,
                                        "rg": state.rg,
                                        "cpf": state.cpf,
                                        "telefone": state.telefone,
                                        "obito": state.obito,
                                        "foragido": state.foragido,
                                        "naturalidade": state.naturalidade,
                                        "nacionalidade": state.nacionalidade,
                                        "local_de_trabalho": state.localDeTrabalho,
                                        "profissao": state.profissao,
                                        "grau_de_escolaridade": state.grauDeEscolaridade,
                                        "altura": state.altura,
                                        "etnia": state.etnia,
                                        "porte_fisico": state.porteFisico,
                                        "cor_da_pele": state.corDaPele,
                                        "cor_dos_olhos": state.corDosOlhos,
                                        "cor_do_cabelo": state.corDoCabelo,
                                        "tipo_de_cabelo": state.tipoDeCabelo,
                                        "foto_frente": state.fotoDeFrenteBase64,
                                        "foto_perfil_esquerdo": state.fotoPerfilEsquerdoBase64,
                                        "foto_perfil_direito": state.fotoPerfilDireitoBase64,
                                        "cep": state.cep,
                                        "rua": state.rua,
                                        "bairro": state.bairro,
                                        "numero": state.numero,
                                        "complemento": state.complemento
                                    }, {}, tokenReact).then(() => {
                                        setPopupSucesso(true)
                                    })
                                    .catch((error) => {
                                        setPopupErro(true)
                                        setErrorMessage(error.response.data)
                                    })
                                setModalAddEnable(false)
                                setAtualizar(!atualizar)
                            }
                            else {
                                setPopupErro(true)
                                setErrorMessage("Campos obrigatórios não preenchidos")
                                setModalAddEnable(false)
                            }
                        }
                    }
                />
            }
            {
                modalFilterEnable &&
                <ModalGenerico
                    setModalEnable={setModalFilterEnable}
                    titulo="Filtrar criminoso"
                    conteudo={
                        <CriminosoFilter 
                            key='Filtro'
                            stateFilter={stateF} 
                            dispatchFilter={dispatchF} 
                            handleChangeFilter={handleChangeF} 
                            ehTatuagem={ehTatuagem}
                            temMarca={temMarca}
                            tatuagens={tatuagens}
                        />
                    }
                    onClickAccept={() => {
                        setAtualizar(!atualizar)
                        setModalFilterEnable(false)
                    }}
                />
            }
            <section className="sm:mx-3 md:mx-6">
                <div className="flex mb-8">
                    <button 
                        className="
                            shadow
                            shadow-stone-200
                            bg-lime-400
                            text-sm
                            text-lime-800
                            mx-2
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
                    <button 
                        className="
                            shadow
                            shadow-stone-200
                            bg-lime-400
                            text-sm
                            text-lime-800
                            mx-2
                            p-2
                            border
                            rounded
                            border-lime-800
                            focus:outline-none
                            hover:bg-lime-200
                            transition-all
                        " 
                        onClick={setModalFilterEnable}
                    >
                        Filtrar
                    </button>
                    <button 
                        className="
                            shadow
                            shadow-stone-200
                            bg-red-400
                            text-sm
                            text-red-900
                            mx-2
                            p-2
                            border
                            rounded
                            border-red-800
                            focus:outline-none
                            hover:bg-red-200
                            transition-all
                        " 
                        onClick={setLimparFiltro}
                    >
                        Limpar Filtro
                    </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 m-2">
                {
                    criminosos &&
                    criminosos.resultado.length > 0 ? (
                        criminosos.resultado.map((criminoso, index) => {
                                return (
                                        <CardCriminoso 
                                            key={index}
                                            id={criminoso.id}
                                            nomeCriminoso={criminoso.nome} 
                                            dataNasc={criminoso.data_de_nascimento} 
                                            imagem={criminoso.foto_frente} 
                                            atualizar={atualizar} 
                                            setAtualizar={setAtualizar} 
                                            criminosoObj={criminoso} 
                                        />
                                ) 
                            }
                        )
                    ) : (
                        <p className="text-sm text-stone-800">
                            Nenhum registro encontrado
                        </p>
                    )
                }
                </div>
                {   
                    criminosos &&   
                    criminosos.resultado.length > 0 &&
                    <Paginacao count={criminosos.numero_de_dados_totais} limit={limiteDeValoresPorRequisicao} alterOffset={setOffset} />
                }
            </section>
            {
                loading &&
                <Loading />
            }
        </>
    );
}

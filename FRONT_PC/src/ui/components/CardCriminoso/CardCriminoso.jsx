import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import ButtonEditar from '../../partials/ButtonEditar';
import ButtonExcluir from '../../partials/ButtonExcluir';
import calcularIdade from "../../../data/utils/calcularIdade";
import base64EmImagem from '../../../data/utils/base64EmImagem';
import { useContext, useState, useEffect, useReducer } from "react";
import { TokenContext } from "../../../data/context/TokenContext";
import ModalGenerico from '../ModalGenerico/ModalGenerico';
import PopupGenerico from '../PopupGenerico/PopupGenerico';
import requestDelete from '../../../data/utils/requestDelete';
import requestGet from "../../../data/utils/requestGet";
import requestPatch from "../../../data/utils/requestPatch";
import requestPost from "../../../data/utils/requestPost";
import Loading from '../Loading/Loading';
import ImagemEmBase64 from '../../../data/utils/ImagemEmBase64';
import CriminosoDataReducer from '../../../pages/Criminoso/CriminosoData';

export default function CardCriminoso({ id, nomeCriminoso, imagem, dataNasc, atualizar, setAtualizar, criminosoObj }) {
    const dataString = dataNasc;
    const partesData = dataString.split('-');
    const ano = parseInt(partesData[0], 10);
    const mes = parseInt(partesData[1], 10) - 1;
    const dia = parseInt(partesData[2], 10);
    const data = new Date(ano, mes, dia);

    const [modalDeleteEnable, setModalDeleteEnable] = useState(false);
    const [modalViewEnable, setModalViewEnable] = useState(false);
    const [modalEditEnable, setModalEditEnable] = useState(false);
    const [popupSucesso, setPopupSucesso] = useState(false);
    const [popupErro, setPopupErro] = useState(false);
    const [conteudoPopup, setConteudoPopup] = useState("");
    const { tokenReact } = useContext(TokenContext)
    const [objMarca, setObjMarca] = useState(null);
    const [loading, setLoading] = useState(false);
    const [modalAddMarca, setModalAddMarca] = useState(false);

    const [state, dispatch] = useReducer(CriminosoDataReducer, {
        ...criminosoObj,
        fotoDeFrente: "",
        fotoDeFrenteBase64: "",
        fotoPerfilDireito: "",
        fotoPerfilDireitoBase64: "",
        fotoPerfilEsquerdo: "",
        fotoPerfilEsquerdoBase64: ""
    })

    const [tatuagens, setTatuagens] = useState(null);
    const [tipoTatuagemAddMarcaId, setTipoTatuagemAddMarcaId] = useState(null);
    const [ehTatuagem, setEhTatuagem] = useState(false);
    const [descricaoTatuagem, setDescricaoTatuagem] = useState("")
    const [parteDoCorpo, setParteDoCorpo] = useState("")
    const [fotoMarca, setFotoMarca] = useState("")
    const [fotoMarcaBase64, setFotoMarcaBase64] = useState("")


    useEffect(() => {
        setLoading(true)
        if (!modalAddMarca) {
            setTatuagens(null)
            setTipoTatuagemAddMarcaId(1)
            setEhTatuagem(false)
            setDescricaoTatuagem("")
            setParteDoCorpo("")
            setFotoMarca("")
            setFotoMarcaBase64("")
        }
        if (!modalEditEnable) {
            dispatch({
                type: "SET_STATE",
                state: {
                    ...criminosoObj,
                    fotoDeFrente: "",
                    fotoDeFrenteBase64: "",
                    fotoPerfilDireito: "",
                    fotoPerfilDireitoBase64: "",
                    fotoPerfilEsquerdo: "",
                    fotoPerfilEsquerdoBase64: ""
                }
            })
        }

        const fetchDataMarca = async () => {
            try {
                const responseMarca = await requestGet("/marca/criminoso/" + id, {}, tokenReact);
                const responseDataMarca = await Promise.all(responseMarca.data.map(async (marca) => {
                    const pegarTipoDeTatuagem = async () => {
                        if (marca.tipo_de_tatuagem_id != null) {
                            const tipo = await requestGet("/tipo-de-tatuagem/" + marca.tipo_de_tatuagem_id, {}, tokenReact);
                            return tipo.data.tipo;
                        }
                        return null;
                    }
                    marca.tipo_de_tatuagem = await pegarTipoDeTatuagem();
                    return marca;
                }));
                const responseTatuagens = await requestGet("/tipo-de-tatuagem", { "limite": 999 }, tokenReact);
                const responseTatuagensData = responseTatuagens.data.resultado;
                if (responseDataMarca.length > 0) {
                    setObjMarca(responseDataMarca);
                }
                else {
                    setObjMarca(null)
                }
                if (responseTatuagensData != null) {
                    setTatuagens(responseTatuagensData)
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchDataMarca();
        setLoading(false);

    }, [modalViewEnable, modalDeleteEnable, modalEditEnable, modalAddMarca]);

    async function deletarMarca(id) {
        await requestDelete("/marca/" + id, {}, tokenReact)
        setModalViewEnable(false)
        setAtualizar(!atualizar)
    }

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
            loading &&
            <Loading />
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
                onClickAccept={
                    () => {
                        requestPatch("/criminoso/" + criminosoObj.id,
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
                                "local_de_tabalho": state.localDeTrabalho,
                                "profissao": state.profissao,
                                "grau_de_escolaridade": state.grauDeEscolaridade,
                                "altura": state.altura,
                                "etnia": state.etnia,
                                "porte_fisico": state.porteFisico,
                                "cor_da_pele": state.corDaPele,
                                "cor_dos_olhos": state.corDosOlhos,
                                "cor_do_cabelo": state.corDoCabelo,
                                "tipo_de_cabelo": state.tipoDeCabelo,
                                "foto_frente": state.fotoDeFrente == "" ? criminosoObj.foto_frente : state.fotoDeFrenteBase64,
                                "foto_perfil_esquerdo": state.fotoPerfilEsquerdo == '' ? criminosoObj.foto_perfil_esquerdo : state.fotoPerfilEsquerdoBase64,
                                "foto_perfil_direito": state.fotoPerfilDireito == '' ? criminosoObj.foto_perfil_direito : state.fotoPerfilDireitoBase64,
                                "cep": state.cep,
                                "rua": state.rua,
                                "bairro": state.bairro,
                                "numero": state.numero,
                                "complemento": state.complemento
                            }, {}, tokenReact).then(
                                () => {
                                    setPopupSucesso(true)
                                    setConteudoPopup("Alteração feita com sucesso!")
                                }
                            ).catch(
                                () => {
                                    setPopupErro(true)
                                    setConteudoPopup("erro")
                                }
                            )
                        setModalEditEnable(false)
                        setAtualizar(!atualizar)
                    }
                }
            />
        }
        {
            modalDeleteEnable &&
            <ModalGenerico setModalEnable={setModalDeleteEnable}
                titulo="Deletar"
                conteudo={<p>Você tem certeza que deseja DELETAR esse dado? ({nomeCriminoso})</p>}
                onClickAccept={
                    () => {
                        requestDelete("/criminoso/" + id, {}, tokenReact).then(
                            () => {
                                setModalDeleteEnable(false);
                                setAtualizar(!atualizar);
                                setPopupSucesso(true)
                                setConteudoPopup("Dadao excluido com sucesso!")
                            }
                        ).catch(
                            () => {
                                setPopupErro(true)
                                setConteudoPopup("Erro")
                            }
                        )
                    }
                }
            />
        }
        {
            modalAddMarca &&
            <ModalGenerico setModalEnable={setModalAddMarca}
                titulo="Adicionar marca"
                conteudo={
                    <>
                        <p className='text-xl text-stone-900 font-bold mb-2.5'>Adicionar marca do criminoso: {criminosoObj.nome}</p>
                        <div className='mb-3'>
                            <label className="flex gap-0.5 items-center">
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
                                    value={ehTatuagem}
                                    checked={ehTatuagem}
                                    onChange={() => setEhTatuagem(!ehTatuagem)}
                                />
                                É uma tatuagem
                            </label>
                        </div>
                        <div className='mb-3'>
                            <p>Descrição da marca:</p>
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
                                placeholder='Descricao da marca' 
                                type='text'
                                value={descricaoTatuagem} 
                                onChange={(event) => setDescricaoTatuagem(event.target.value)} 
                            />
                        </div>
                        <div className='mb-3'>
                            <p>Parte do corpo:</p>
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
                                placeholder='Parte do corpo com a marca' 
                                type='text' 
                                value={parteDoCorpo} 
                                onChange={(event) => setParteDoCorpo(event.target.value)} 
                            />
                        </div>
                        <div className='mb-3'>
                            <p>Foto da marca:</p>
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
                                type='file' 
                                value={fotoMarca}
                                onChange={async (event) => {
                                    setFotoMarca(event.target.value)
                                    const imgBase64 = await ImagemEmBase64(event.target.files[0])
                                    setFotoMarcaBase64(imgBase64.split(',')[1])
                                }}
                            />
                        </div>
                        {
                            ehTatuagem &&
                            <div className='mb-3'>
                                <p>Tipo da tatuagem:</p>
                                <select 
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
                                    value={tipoTatuagemAddMarcaId}
                                    onChange={(event) => setTipoTatuagemAddMarcaId(event.target.value)}
                                >
                                    {tatuagens && tatuagens.map((tatuagem, index) => {
                                        return <option key={index} value={tatuagem.id}>{tatuagem.tipo}</option>
                                    })}
                                </select>
                            </div>
                        }
                    </>
                }
                onClickAccept={
                    () => {
                        requestPost("/marca/inserir", {
                            cicatriz_ou_tatuagem: ehTatuagem ? "t" : "c",
                            descricao: descricaoTatuagem,
                            parte_do_corpo: parteDoCorpo,
                            foto: fotoMarcaBase64,
                            tipo_de_tatuagem_id: tipoTatuagemAddMarcaId,
                            criminoso_id: criminosoObj.id
                        }, {}, tokenReact).then(() => {
                            setModalAddMarca(false);
                            setAtualizar(!atualizar);
                            setPopupSucesso(true)
                            setConteudoPopup("Marca adicionada com sucesso!")
                        }).catch((error) => {
                            setPopupErro(true)
                            setConteudoPopup(error)
                        }
                        )
                    }
                }
            />
        }
        {
            modalViewEnable &&
            <ModalGenerico setModalEnable={setModalViewEnable}
                titulo="Dados do criminoso:"
                conteudo={
                    <>
                        <p className='text-xl text-stone-900 font-bold'>Fotos:</p>
                        <div className="grid grid-cols-3 gap-4">
                            <div className='flex gap-2 flex-col items-center text-stone-900 font-bold'>
                                <figure className='w-32 h-32'>
                                    <img 
                                        src={base64EmImagem(criminosoObj.foto_frente)} 
                                        alt={`Foto de frente de ${criminosoObj.nome}`} 
                                        title={`Foto de frente de ${criminosoObj.nome}`}
                                        width={128}
                                        height={128} 
                                    />
                                </figure>
                                Foto de frente
                            </div>
                            <div className="flex gap-2 flex-col items-center text-stone-900 font-bold">
                                <figure className='w-32 h-32'>
                                    <img 
                                        src={base64EmImagem(criminosoObj.foto_perfil_esquerdo)}
                                        alt={`Foto perfil esquerdo de ${criminosoObj.nome}`}
                                        title={`Foto perfil esquerdo de ${criminosoObj.nome}`}
                                        width={128}
                                        height={128}
                                    />
                                </figure>
                                Foto perfil esquerdo
                            </div>
                            <div className="flex gap-2 flex-col items-center text-stone-900 font-bold">
                                <figure className='w-32 h-32'>
                                    <img 
                                        src={base64EmImagem(criminosoObj.foto_perfil_direito)}
                                        alt={`Foto perfil direito de ${criminosoObj.nome}`}
                                        title={`Foto perfil direito de ${criminosoObj.nome}`}
                                        width={128}
                                        height={128}
                                    />
                                </figure>
                                Foto perfil direito
                            </div>
                        </div>
                        <hr className='my-4 h-0.5 bg-stone-800 border-0' />
                        <p className='text-xl text-stone-900 font-bold mb-2'>Dados pessoais:</p>
                        <div className="grid grid-cols-2 gap-1.5">
                            <p><span className='font-bold'>Nome:</span> {criminosoObj.nome}</p>
                            <p><span className="font-bold">Alcunha:</span> {criminosoObj.alcunha}</p>
                            <p><span className="font-bold">Genero:</span> {criminosoObj.genero}</p>
                            <p><span className="font-bold">Data de nascimento:</span> {data.toLocaleDateString("pt-BR")}</p>
                            <p><span className="font-bold">Nome do pai:</span> {criminosoObj.pai}</p>
                            <p><span className="font-bold">Nome da mãe:</span> {criminosoObj.mae}</p>
                            <p><span className="font-bold">RG:</span> {criminosoObj.rg}</p>
                            <p><span className="font-bold">CPF:</span> {criminosoObj.cpf}</p>
                            <p><span className="font-bold">Telefone:</span> {criminosoObj.telefone}</p>
                            <p><span className="font-bold">Grau de Escolaridade:</span> {criminosoObj.grau_de_escolaridade}</p>
                            <p><span className="font-bold">Obito:</span> {criminosoObj.obito ? "Verdade" : "Falso"}</p>
                            <p><span className="font-bold">Foragido:</span> {criminosoObj.foragido ? "Verdade" : "Falso"}</p>
                            <p><span className="font-bold">Naturalidade:</span> {criminosoObj.naturalidade}</p>
                            <p><span className="font-bold">Nacionalidade:</span> {criminosoObj.nacionalidade}</p>
                            <p><span className="font-bold">Profissão:</span> {criminosoObj.profissao}</p>
                            <p><span className="font-bold">Local de trabalho:</span> {criminosoObj.local_de_trabalho}</p>
                        </div>
                        <hr className='my-4 h-0.5 bg-stone-800 border-0' />
                        <p className='text-xl text-stone-900 font-bold mb-2'>Dados fisicos:</p>
                        <div className="flex gap-1.5 flex-col">
                            <p><span className="font-bold">Altura:</span> {criminosoObj.altura}</p>
                            <p><span className="font-bold">Etnia:</span> {criminosoObj.etnia}</p>
                            <p><span className="font-bold">Porte Fisico:</span> {criminosoObj.porte_fisico}</p>
                            <p><span className="font-bold">Cor dos Olhos:</span> {criminosoObj.cor_dos_olhos}</p>
                            <p><span className="font-bold">Cor da pele:</span> {criminosoObj.cor_da_pele}</p>
                            <p><span className="font-bold">Cor do cabelo:</span> {criminosoObj.cor_do_cabelo}</p>
                            <p><span className="font-bold">Tipo de cabelo:</span> {criminosoObj.tipo_de_cabelo}</p>
                        </div>
                        <hr className='my-4 h-0.5 bg-stone-800 border-0' />
                        <p className='text-xl text-stone-900 font-bold mb-2'>Endereço:</p>
                        <div className="flex gap-1.5 flex-col">
                            <p><span className="font-bold">CEP:</span> {criminosoObj.cep}</p>
                            <p><span className="font-bold">Rua:</span> {criminosoObj.rua}</p>
                            <p><span className="font-bold">Bairro:</span> {criminosoObj.bairro}</p>
                            <p><span className="font-bold">Numero da residencia:</span> {criminosoObj.numero}</p>
                            <p><span className="font-bold">Complemento:</span> {criminosoObj.complemento}</p>
                        </div>
                        {
                            objMarca &&
                            objMarca.map((tatuagem, index) => {
                                return (
                                    <div key={index} className='mb-4'>
                                        <hr className='my-4 h-0.5 bg-stone-800 border-0' />
                                        <div className="flex justify-between mb-2">
                                            <p className='text-xl text-stone-900 font-bold'>{index + 1}ª Marca</p>
                                            <button 
                                                className='
                                                    shadow
                                                    shadow-stone-200
                                                    bg-red-400
                                                    text-sm
                                                    text-red-900
                                                    p-2
                                                    border
                                                    rounded
                                                    border-red-800
                                                    focus:outline-none
                                                    hover:bg-red-200
                                                    transition-all
                                                ' 
                                                onClick={() => deletarMarca(tatuagem.id)}
                                            >
                                                Excluir Marca
                                            </button>
                                        </div>
                                        <div className="flex gap-10">
                                            <figure className='flex gap-2 flex-col text-stone-900 text-center font-bold'>
                                                <img 
                                                    src={base64EmImagem(tatuagem.foto)}
                                                    alt={`Foto da tatuagem`}
                                                    title={`Foto da tatuagem`}
                                                    width={128}
                                                    height={128}
                                                />
                                                Foto
                                            </figure>
                                            <div className="flex flex-col justify-between">
                                                <p><span className="font-bold">Cicatriz ou tatuagem:</span> {tatuagem.cicatriz_ou_tatuagem == 'c' ? "cicatriz" : "tatuagem"}</p>
                                                <p><span className="font-bold">Tipo da tatuagem:</span>  {tatuagem.tipo_de_tatuagem == null ? "Não é uma tatuagem" : tatuagem.tipo_de_tatuagem}</p>
                                                <p><span className="font-bold">Descrição da marca:</span> {tatuagem.descricao}</p>
                                                <p><span className="font-bold">Parte do corpo com a marca:</span> {tatuagem.parte_do_corpo}</p>
                                            </div>
                                        </div>
                                    </div>
                                ) 
                            })
                        }
                        <hr className='my-4 h-0.5 bg-stone-800 border-0' />
                        <div className='mt-4'>
                            <button 
                                className='
                                    shadow
                                    shadow-stone-200
                                    bg-lime-400
                                    text-sm
                                    text-lime-800
                                    p-2
                                    border
                                    rounded
                                    border-lime-800
                                    focus:outline-none
                                    hover:bg-lime-200
                                    transition-all
                                ' 
                                onClick={() => {
                                    setModalAddMarca(true)
                                    setModalViewEnable(false)
                                }}
                            >
                                Adicionar marca +
                            </button>
                        </div>
                    </>
                }
            />
        }

        <div className="flex flex-col justify-center bg-stone-50 rounded-md p-2.5">
            <figure className="flex justify-center cursor-pointer" onClick={() => setModalViewEnable(true)}>
                <img width="256" height="256" src={base64EmImagem(imagem)} alt='Imagem do criminoso' title={nomeCriminoso} />
            </figure>
            <div 
                className="
                    flex 
                    flex-col 
                    items-center 
                    justify-center 
                    mt-3 
                    p-2.5 
                    border-y 
                    border-solid 
                    border-y-stone-300 
                    cursor-pointer
                " 
                onClick={() => setModalViewEnable(true)}
            >
                <p>{nomeCriminoso}</p>
                <p>{data.toLocaleDateString("pt-BR")} - {calcularIdade(ano, mes, dia)} anos</p>
            </div>
            <div className="flex justify-center gap-4 my-3">
                <ButtonEditar onHandle={() => setModalEditEnable(true)} >
                    <FontAwesomeIcon icon={faPenToSquare} />
                </ButtonEditar>
                <ButtonExcluir onHandle={() => setModalDeleteEnable(true)}>
                    <FontAwesomeIcon icon={faTrash} />
                </ButtonExcluir>
            </div>
        </div>
    </>
}


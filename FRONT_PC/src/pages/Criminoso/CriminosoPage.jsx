import { useState, useEffect, useContext } from "react";
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

export default function CriminosoPage() {

    const dataAtual = new Date();
    const ano = dataAtual.getFullYear();
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // +1 porque os meses são indexados a partir de 0
    const dia = String(dataAtual.getDate()).padStart(2, '0');

    const [criminosos, setCriminosos] = useState(null);
    const [limiteDeValoresPorRequisicao, setLimiteDeValoresPorRequisicao] = useState(8)
    const [offset, setOffset] = useState(0);
    const { tokenReact } = useContext(TokenContext)
    const [loading, setLoading] = useState(false);
    const [atualizar, setAtualizar] = useState(false);
    const [modalAddEnable, setModalAddEnable] = useState(false);
    const [popupSucesso, setPopupSucesso] = useState(false);
    const [popupErro, setPopupErro] = useState(false);
    const [conteudoPopup, setConteudoPopup] = useState("");
    const navigate = useNavigate()

    const [nome, setNome] = useState("");
    const [alcunha, setAlcunha] = useState("");
    const [genero, setGenero] = useState("");
    const [dataDeNascimento, setDataDeNascimento] = useState(`${ano}-${mes}-${dia}`);
    const [pai, setPai] = useState("");
    const [mae, setMae] = useState("");
    const [rg, setRg] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [obito, setObito] = useState(false);
    const [foragido, setForagido] = useState(false);
    const [naturalidade, setNaturalidade] = useState("");
    const [nacionalidade, setNacionalidade] = useState("");
    const [localDeTrabalho, setLocalDeTrabalho] = useState("");
    const [profissao, setProfissao] = useState("");
    const [grauDeEscolaridade, setGrauDeEscolaridade] = useState("Ensino Fundamental Incompleto");
    const [altura, setAltura] = useState(null);
    const [etnia, setEtnia] = useState("");
    const [porteFisico, setPorteFisico] = useState("Magro");
    const [corDosOlhos, setCorDosOlhos] = useState("Azul");
    const [corDaPele, setCorDaPele] = useState("Amarelo");
    const [corDoCabelo, setCorDoCabelo] = useState("Preto");
    const [tipoDeCabelo, setTipoDeCabelo] = useState("Encaracolado");
    const [fotoDeFrente, setFotoDeFrente] = useState("");
    const [fotoDeFrenteBase64, setFotoDeFrenteBase64] = useState("");
    const [fotoPerfilEsquerdo, setFotoPerfilEsquerdo] = useState("");
    const [fotoPerfilEsquerdoBase64, setFotoPerfilEsquerdoBase64] = useState("");
    const [fotoPerfilDireito, setFotoPerfilDireito] = useState("");
    const [fotoPerfilDireitoBase64, setFotoPerfilDireitoBase64] = useState("");
    const [cep, setCep] = useState("");
    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");
    const [numero, setNumero] = useState(null);
    const [complemento, setComplemento] = useState("");

    useEffect(() => {
        setLoading(true)
        if(!modalAddEnable){
            setNome("")
            setAlcunha("")
            setGenero("")
            setDataDeNascimento(`${ano}-${mes}-${dia}`)
            setPai("")
            setMae("")
            setRg("")
            setCpf("")
            setTelefone("")
            setObito(false)
            setForagido(false)
            setNaturalidade("")
            setNacionalidade("")
            setLocalDeTrabalho("")
            setProfissao("")
            setGrauDeEscolaridade("Ensino Fundamental Incompleto")
            setAltura(null)
            setEtnia("")
            setPorteFisico("Magro")
            setCorDaPele("Amarelo")
            setCorDoCabelo("Preto")
            setCorDosOlhos("Azul")
            setTipoDeCabelo("Encaracolado")
            setFotoDeFrente("")
            setFotoDeFrenteBase64("")
            setFotoPerfilDireito("")
            setFotoPerfilDireitoBase64("")
            setFotoPerfilEsquerdo("")
            setFotoPerfilEsquerdoBase64("")
            setCep("")
            setRua("")
            setBairro("")
            setNumero(null)
            setComplemento("")
        }
        const fetchData = async () => {
            try {
                const response = await requestPost("/criminoso/filtro", null, { "limite": limiteDeValoresPorRequisicao, "deslocar": offset }, tokenReact);
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
    }, [offset, limiteDeValoresPorRequisicao, tokenReact, atualizar, modalAddEnable]);


    return (
        <div className="columns">
            <Menu />
            {
                popupSucesso &&
                <PopupGenerico
                    bg="is-success"
                    conteudo={<p>{conteudoPopup}</p>}
                    setVariavelDeEstado={setPopupSucesso}
                />
            }
            {
                popupErro &&
                <PopupGenerico
                    bg="is-danger"
                    conteudo={<p>{conteudoPopup}</p>}
                    setVariavelDeEstado={setPopupErro}
                />
            }
            {
                modalAddEnable &&
                <ModalGenerico
                    titulo="Adicionar criminoso"
                    conteudo={
                        <>
                            <div className='mb-3'>
                                <span>Nome:</span>
                                <input className="input" placeholder="Nome*" value={nome}
                                    onChange={(event) => setNome(event.target.value)}></input>
                            </div>

                            <div className='mb-3'>
                                <span>Alcunha:</span>
                                <input className="input" placeholder="Alcunha*" value={alcunha}
                                    onChange={(event) => setAlcunha(event.target.value)}></input>
                            </div>

                            <div className='mb-3'>
                                <p>Genero:</p>
                                <div className="select">
                                    <select value={genero}
                                        onChange={(event) => setGenero(event.target.value)}>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Feminino">Feminino</option>
                                    </select>
                                </div>
                            </div>

                            <div className='mb-3'>
                                <p>Data de nascimento:</p>
                                <input className="input" type='date' value={dataDeNascimento}
                                    onChange={(event) => setDataDeNascimento(event.target.value)}></input>
                            </div>

                            <div className='mb-3'>
                                <p>Nome do pai:</p>
                                <input className="input" placeholder="Nome do pai*" value={pai}
                                    onChange={(event) => setPai(event.target.value)}></input>
                            </div>


                            <div className='mb-3'>
                                <p>Nome da mãe:</p>
                                <input className="input" placeholder="Nome da mãe*" value={mae}
                                    onChange={(event) => setMae(event.target.value)}></input>
                            </div>

                            <div className='mb-3'>
                                <p>RG:</p>
                                <input className="input" placeholder="RG" value={rg}
                                    onChange={(event) => setRg(event.target.value)}></input>
                            </div>

                            <div className='mb-3'>
                                <p>CPF:</p>
                                <input className="input" placeholder="Cpf" value={cpf}
                                    onChange={(event) => setCpf(event.target.value)}></input>
                            </div>

                            <div className='mb-3'>
                                <p>Telefone:</p>
                                <input className="input" placeholder="Telefone" value={telefone}
                                    onChange={(event) => setTelefone(event.target.value)}></input>
                            </div>

                            <div className='mb-3'>
                                <div>
                                    <label className='checkbox'>
                                        <input type='checkbox' value={obito}
                                            checked={obito}
                                            onChange={() => setObito(!obito)}></input>
                                        Obito
                                    </label>
                                </div>

                                <div>
                                    <label className='checkbox'>
                                        <input type="checkbox" value={foragido}
                                            checked={foragido}
                                            onChange={() => setForagido(!foragido)}></input>
                                        Foragido
                                    </label>
                                </div>
                            </div>

                            <div className='mb-3'>
                                <p>Naturalidade:</p>
                                <input className="input" placeholder="Naturalidade" value={naturalidade}
                                    onChange={(event) => setNaturalidade(event.target.value)}></input>
                            </div>

                            <div className='mb-3'>
                                <p>Nacionalidade:</p>
                                <input className="input" placeholder="Nacionalidade" value={nacionalidade}
                                    onChange={(event) => setNacionalidade(event.target.value)}></input>
                            </div>

                            <div className='mb-3'>
                                <p>Local de trabalho:</p>
                                <input className="input" placeholder="Local de tabalho" value={localDeTrabalho}
                                    onChange={(event) => setLocalDeTrabalho(event.target.value)}></input>
                            </div>

                            <div className='mb-3'>
                                <p>Profissão:</p>
                                <input className="input" placeholder="Profissao" value={profissao}
                                    onChange={(event) => setProfissao(event.target.value)}></input>
                            </div>

                            <div className='mb-3'>
                                <p>Grau de Escolaridade:</p>
                                <div className="select">
                                    <select value={grauDeEscolaridade}
                                        onChange={(event) => setGrauDeEscolaridade(event.target.value)}>
                                        <option value="Ensino Fundamental Incompleto">Ensino Fundamental Incompleto</option>
                                        <option value="Ensino Fundamental Completo">Ensino Fundamental Completo</option>
                                        <option value="Ensino Medio Incompleto">Ensino Médio Incompleto</option>
                                        <option value="Ensino Medio Completo">Ensino Médio Completo</option>
                                        <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                                        <option value="Ensino Superior Completo">Ensino Superior Completo</option>
                                        <option value="Outro">Outro</option>
                                    </select>
                                </div>
                            </div>


                            <div className='mb-3'>
                                <p>Altura:</p>
                                <input className="input" type="number" placeholder="Altura (digite com ponto em vez de virgula - Ex: 1.75)" value={altura}
                                    onChange={(event) => setAltura(event.target.value)}></input>
                            </div>

                            <div className='mb-3'>
                                <p>Etnia:</p>
                                <input className="input" placeholder="Etnia" value={etnia}
                                    onChange={(event) => setEtnia(event.target.value)}></input>
                            </div>


                            <div className='mb-3'>
                                <p>Porte fisico:</p>
                                <div className="select">
                                    <select value={porteFisico}
                                        onChange={(event) => setPorteFisico(event.target.value)}>
                                        <option value="Magro">Magro</option>
                                        <option value="Médio">Médio</option>
                                        <option value="Gordo">Gordo</option>
                                        <option value="Forte">Forte</option>
                                        <option value="Outro">Outro</option>
                                    </select>
                                </div>
                            </div>

                            <div className='mb-3'>
                                <p>Cor dos olhos:</p>
                                <div>
                                    <div className="select">
                                        <select value={corDosOlhos}
                                            onChange={(event) => setCorDosOlhos(event.target.value)}>
                                            <option value="Azul">Azul</option>
                                            <option value="Castanho">Castanho claro</option>
                                            <option value="Verde">Verde</option>
                                            <option value="Castanho escuro">Castanho escuro</option>
                                            <option value="Ambar">Ambar</option>
                                            <option value="Outro">Outro</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className='mb-3'>
                                <p>Cor da pele:</p>
                                <div>
                                    <div className="select">
                                        <select value={corDaPele}
                                            onChange={(event) => setCorDaPele(event.target.value)}>
                                            <option value="Amarelo">Amarelo</option>
                                            <option value="Branco">Branco</option>
                                            <option value="Indigena">Indigena</option>
                                            <option value="Preto">Preto</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className='mb-3'>
                                <p>Cor do cabelo:</p>
                                <div>
                                    <div className="select">
                                        <select placeholder="Cor do cabelo" value={corDoCabelo}
                                            onChange={(event) => setCorDoCabelo(event.target.value)}>
                                            <option value="Preto">Preto</option>
                                            <option value="Castanho">Castaho</option>
                                            <option value="Loiro">Loiro</option>
                                            <option value="Ruivo">Ruivo</option>
                                            <option value="Outro">Outro</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className='mb-3'>
                                <p>Tipo de cabelo:</p>
                                <div>
                                    <div className="select">
                                        <select value={tipoDeCabelo}
                                            onChange={(event) => setTipoDeCabelo(event.target.value)}>
                                            <option value="Encaracolado">Encaracolado</option>
                                            <option value="Liso">Liso</option>
                                            <option value="Careca">Careca</option>
                                            <option value="Calvo">Calvo</option>
                                            <option value="Outro">Outro</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className='mb-3'>
                                <p>Foto de frente:</p>
                                <input type="file" className="input" value={fotoDeFrente}
                                    onChange={async (event) => {
                                        setFotoDeFrente(event.target.value)
                                        const imgBase64 = await ImagemEmBase64(event.target.files[0])
                                        setFotoDeFrenteBase64(imgBase64.split(',')[1])
                                    }}></input>
                            </div>
                            <div className='mb-3'>
                                <p>Foto de perfil esquerdo:</p>
                                <input type="file" className='input' value={fotoPerfilEsquerdo}
                                    onChange={async (event) => {
                                        setFotoPerfilEsquerdo(event.target.value)
                                        const imgBase64 = await ImagemEmBase64(event.target.files[0])
                                        setFotoPerfilEsquerdoBase64(imgBase64.split(',')[1])
                                    }}></input>
                            </div>

                            <div className='mb-3'>
                                <p>Foto de perfil direito:</p>
                                <input type="file" className="input" placeholder="Foto de perfil direito" value={fotoPerfilDireito}
                                    onChange={async (event) => {
                                        setFotoPerfilDireito(event.target.value)
                                        const imgBase64 = await ImagemEmBase64(event.target.files[0])
                                        setFotoPerfilDireitoBase64(imgBase64.split(',')[1])
                                    }}></input>
                            </div>

                            <div className='mb-3'>
                                <p>CEP:</p>
                                <input className="input" placeholder="CEP" value={cep}
                                    onChange={(event) => setCep(event.target.value)}></input>
                            </div>

                            <div className='mb-3'>
                                <p>Rua:</p>
                                <input className="input" placeholder="Rua" value={rua}
                                    onChange={(event) => setRua(event.target.value)}></input>
                            </div>

                            <div className='mb-3'>
                                <p>Bairro:</p>
                                <input className="input" placeholder="Bairro" value={bairro}
                                    onChange={(event) => setBairro(event.target.value)}></input>
                            </div>

                            <div className='mb-3'>
                                <p>Numero:</p>
                                <input className="input" type="number" placeholder="Numero (digite um numero, nunca uma letra)" value={numero}
                                    onChange={(event) => setNumero(event.target.value)}></input>
                            </div>

                            <div className='mb-3'>
                                <p>Complemento:</p>
                                <input className="input" placeholder="Complemento" value={complemento}
                                    onChange={(event) => setComplemento(event.target.value)}></input>
                            </div>
                        </>
                    }
                    setModalEnable={setModalAddEnable}
                    onClickAccept={() => {
                        if (nome != "" && alcunha != "" && pai != "" && mae != "") {
                            requestPost("/criminoso/inserir",
                                {
                                    "nome": nome,
                                    "alcunha": alcunha,
                                    "genero": genero,
                                    "data_de_nascimento": dataDeNascimento,
                                    "pai": pai,
                                    "mae": mae,
                                    "rg": rg,
                                    "cpf": cpf,
                                    "telefone": telefone,
                                    "obito": obito,
                                    "foragido": foragido,
                                    "naturalidade": naturalidade,
                                    "nacionalidade": nacionalidade,
                                    "local_de_trabalho": localDeTrabalho,
                                    "profissao": profissao,
                                    "grau_de_escolaridade": grauDeEscolaridade,
                                    "altura": altura,
                                    "etnia": etnia,
                                    "porte_fisico": porteFisico,
                                    "cor_da_pele": corDaPele,
                                    "cor_dos_olhos": corDosOlhos,
                                    "cor_do_cabelo": corDoCabelo,
                                    "tipo_de_cabelo": tipoDeCabelo,
                                    "foto_frente": fotoDeFrenteBase64,
                                    "foto_perfil_esquerdo": fotoPerfilEsquerdoBase64,
                                    "foto_perfil_direito": fotoPerfilDireitoBase64,
                                    "cep": cep,
                                    "rua": rua,
                                    "bairro": bairro,
                                    "numero": numero,
                                    "complemento": complemento
                                }, {}, tokenReact).then(() => {
                                    setPopupSucesso(true)
                                    setConteudoPopup("Marca adicionada com sucesso!")
                                })
                                .catch(() => {
                                    setPopupErro(true)
                                    setConteudoPopup("Erro")
                                })
                            setModalAddEnable(false)
                            setAtualizar(!atualizar)
                        }
                        else {
                            setPopupErro(true)
                            setConteudoPopup("Falha na adição: campo obrigatorio não preenchido")
                            setModalAddEnable(false)
                        }
                    }
                    }
                />
            }
            {
                loading &&
                <Loading />
            }

            <div className="column">
                <h1> Criminosos: </h1>
                <div className="is-flex is-justify-content-flex-end mr-6">
                    <button className="button mt-4 btn-success" onClick={setModalAddEnable}>+ Adicionar</button>
                </div>
                <div className="columns is-multiline">
                    {
                        criminosos &&
                        criminosos.resultado.map((criminoso) => {
                            return <div className="column is-one-quarter"><CardCriminoso id={criminoso.id} nomeCriminoso={criminoso.nome} dataNasc={criminoso.data_de_nascimento} imagem={criminoso.foto_frente} atualizar={atualizar} setAtualizar={setAtualizar} criminosoObj={criminoso} /></div>
                        })
                    }
                </div>
                {
                    criminosos &&
                    <Paginacao count={criminosos.numero_de_dados_totais} limit={limiteDeValoresPorRequisicao} alterOffset={setOffset} />
                }
            </div>
        </div>
    );
}

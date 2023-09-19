import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import ButtonEditar from '../../partials/ButtonEditar';
import ButtonExcluir from '../../partials/ButtonExcluir';
import calcularIdade from "../../../data/utils/calcularIdade";
import base64EmImagem from '../../../data/utils/base64EmImagem';
import { useContext, useState } from "react";
import { TokenContext } from "../../../data/context/TokenContext";
import ModalGenerico from '../ModalGenerico/ModalGenerico';
import PopupGenerico from '../PopupGenerico/PopupGenerico';
import requestDelete from '../../../data/utils/requestDelete';

export default function CardCriminoso({ id, nomeCriminoso, imagem, dataNasc, atualizar, setAtualizar, criminosoObj }) {
    const dataString = dataNasc;
    const partesData = dataString.split('-');
    const ano = parseInt(partesData[0], 10);
    const mes = parseInt(partesData[1], 10) - 1;
    const dia = parseInt(partesData[2], 10);
    const data = new Date(ano, mes, dia);
    const [modalDeleteEnable, setModalDeleteEnable] = useState(false);
    const [modalViewEnable, setModalViewEnable] = useState(false);
    const [popupSucesso, setPopupSucesso] = useState(false);
    const [popupErro, setPopupErro] = useState(false);
    const [conteudoPopup, setConteudoPopup] = useState("");
    const { tokenReact } = useContext(TokenContext)

    return <>
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
            modalViewEnable &&
            <ModalGenerico setModalEnable={setModalViewEnable}
                titulo="Dados do criminoso:"
                conteudo={
                    <ul>
                        <li><b>Nome:</b> {criminosoObj.nome}</li>
                        <li><b>Alcunha:</b> {criminosoObj.alcunha}</li>
                        <li><b>Telefone:</b> {criminosoObj.telefone}</li>
                        <li><b>Nome do pai:</b> {criminosoObj.pai}</li>
                        <li><b>Nome da mãe:</b> {criminosoObj.mae}</li>
                        <li><b>Obito:</b> {criminosoObj.obito ? "Verdade" : "Falso"}</li>
                        <li><b>Foragido:</b> {criminosoObj.foragido ? "Verdade" : "Falso"}</li>
                        <li><b>RG:</b> {criminosoObj.rg}</li>
                        <li><b>CPF:</b> {criminosoObj.cpf}</li>
                        <li><b>Naturalidade:</b> {criminosoObj.naturalidade}</li>
                        <li><b>Nacionalidade:</b> {criminosoObj.nacionalidade}</li>
                        <li><b>Local de trabalho:</b> {criminosoObj.local_de_trabalho}</li>
                        <li><b>Profissao:</b> {criminosoObj.profissao}</li>
                        <li><b>Grau de Escolaridade:</b> {criminosoObj.grau_de_escolaridade}</li>
                        <li><b>Genero:</b> {criminosoObj.genero}</li>
                        <li><b>Altura:</b> {criminosoObj.altura}</li>
                        <li><b>Etnia:</b> {criminosoObj.etnia}</li>
                        <li><b>Porte Fisico:</b> {criminosoObj.porte_fisico}</li>
                        <li><b>Cor dos Olhos:</b> {criminosoObj.cor_dos_olhos}</li>
                        <li><b>Cor da pele:</b> {criminosoObj.cor_da_pele}</li>
                        <li><b>Cor do cabelo:</b> {criminosoObj.cor_do_cabelo}</li>
                        <li><b>Tipo de cabelo:</b> {criminosoObj.tipo_de_cabelo}</li>
                        <li><b>Foto de frente:</b> <figure className='image  is-128x128'><img src={base64EmImagem(criminosoObj.foto_frente)}></img></figure></li>
                        <li><b>Foto perfil esquerdo:</b> <figure className='image  is-128x128'><img src={base64EmImagem(criminosoObj.foto_perfil_esquerdo)}></img></figure></li>
                        <li><b>Foto perfil direito:</b> <figure className='image  is-128x128'><img src={base64EmImagem(criminosoObj.foto_perfil_direito)}></img></figure></li>
                        <li><b>Data de nascimento:</b> {data.toLocaleDateString("pt-BR")}</li>
                    </ul>
                }
            />
        }

        <div className="card m-2">
            <figure className="card-image" onClick={() => setModalViewEnable(true)}>
                <img src={base64EmImagem(imagem)} />
            </figure>
            <div className="card-content" onClick={() => setModalViewEnable(true)}>
                <p><b>{nomeCriminoso}</b></p>
                <p><i>{data.toLocaleDateString("pt-BR")} - {calcularIdade(ano, mes, dia)}</i></p>
            </div>
            <div className="card-footer is-flex is-justify-content-center">
                <div className='mr-4 mt-4 mb-4'>
                    <ButtonEditar onHandle="" >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </ButtonEditar>
                </div>
                <div className='mt-4 mb-4'>
                    <ButtonExcluir onHandle={() => setModalDeleteEnable(true)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </ButtonExcluir>
                </div>

            </div>
        </div>
    </>
}


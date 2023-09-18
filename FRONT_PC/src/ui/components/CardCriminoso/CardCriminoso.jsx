import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import ButtonEditar from '../../partials/ButtonEditar';
import ButtonExcluir from '../../partials/ButtonExcluir';
import calcularIdade from "../../../data/utils/calcularIdade";
import base64EmImagem from '../../../data/utils/base64EmImagem';

export default function CardCriminoso({ nomeCriminoso, imagem, dataNasc }) {
    const dataString = dataNasc;
    const partesData = dataString.split('-');
    const ano = parseInt(partesData[0], 10);
    const mes = parseInt(partesData[1], 10) - 1; 
    const dia = parseInt(partesData[2], 10);
    const data = new Date(ano, mes, dia);
        
    return <div className="card m-2">
        <figure className="card-image">
            <img src={base64EmImagem(imagem)} />
        </figure>
        <div className="card-content">
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
                <ButtonExcluir onHandle="">
                    <FontAwesomeIcon icon={faTrash} />
                </ButtonExcluir>
            </div>

        </div>
    </div>
}


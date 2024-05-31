/**
 * 
 * @param {state} 
 *  é todo o estado gerado para o reducer, nesse caso, será todos os campos do formulário do criminoso 
 * @param {action} 
 *  é a ação que o reducer executará, a mesma deve conter um tipo(type) e o nome do componente o qual alterará.
 *  Ex. action = {type: 'SET_NOME', nome: 'Rodrigo Ide'} 
 * @returns 
 *  retorna um objeto contendo todo o estado do formulário(se ocorreu alguma alteração antes) mais o campo que foi alterado.
 *  também é possível retornar um erro em caso de /action.type/ não ser reconhecido
 */
export default function CriminosoDataReducer(state, action) {
    switch (action.type) {
        case 'SET_NOME': {
            return {
                ...state,
                nome: action.nome
            }
        }
        case 'SET_ALCUNHA': {
            return {
                ...state,
                alcunha: action.alcunha
            }
        }
        case 'SET_GENERO': {
            return {
                ...state,
                genero: action.genero
            }
        }
        case 'SET_DATADENASCIMENTO': {
            return {
                ...state,
                dataDeNascimento: action.dataDeNascimento
            }
        }
        case 'SET_PAI': {
            return {
                ...state,
                pai: action.pai
            }
        }
        case 'SET_MAE':
            return {
                ...state,
                mae: action.mae
            }
        case 'SET_RG': {
            return {
                ...state,
                rg: action.rg
            }
        }
        case 'SET_CPF': {
            return {
                ...state,
                cpf: action.cpf
            }
        }
        case 'SET_TELEFONE': {
            return {
                ...state,
                telefone: action.telefone
            }
        }
        case 'SET_OBITO': {
            return {
                ...state,
                obito: action.obito
            }
        }
        case 'SET_FORAGIDO': {
            return {
                ...state,
                foragido: action.foragido
            }
        }
        case 'SET_NATURALIDADE': {
            return {
                ...state,
                naturalidade: action.naturalidade
            }
        }
        case 'SET_NACIONALIDADE': {
            return {
                ...state,
                nacionalidade: action.nacionalidade
            }
        }
        case 'SET_LOCALDETRABALHO': {
            return {
                ...state,
                localDeTrabalho: action.localDeTrabalho
            }
        }
        case 'SET_PROFISSAO': {
            return {
                ...state,
                profissao: action.profissao
            }
        }
        case 'SET_GRAUDEESCOLARIDADE': {
            return {
                ...state,
                grauDeEscolaridade: action.grauDeEscolaridade
            }
        }
        case 'SET_ALTURA': {
            return {
                ...state,
                altura: action.altura
            }
        }
        case 'SET_ETNIA': {
            return {
                ...state,
                etnia: action.etnia
            }
        }
        case 'SET_PORTEFISICO': {
            return {
                ...state,
                porteFisico: action.porteFisico
            }
        }
        case 'SET_CORDOSOLHOS': {
            return {
                ...state,
                corDosOlhos: action.corDosOlhos
            }
        }
        case 'SET_CORDAPELE': {
            return {
                ...state,
                corDaPele: action.corDaPele
            }
        }
        case 'SET_CORDOCABELO': {
            return {
                ...state,
                corDoCabelo: action.corDoCabelo
            }
        }
        case 'SET_TIPODECABELO': {
            return {
                ...state,
                tipoDeCabelo: action.tipoDeCabelo
            }
        }
        case 'SET_FOTODEFRENTE': {
            return {
                ...state,
                fotoDeFrente: action.fotoDeFrente
            }
        }
        case 'SET_FOTODEFRENTEBASE64': {
            return {
                ...state,
                fotoDeFrenteBase64: action.fotoDeFrenteBase64
            }
        }
        case 'SET_FOTOPERFILESQUERDO': {
            return {
                ...state,
                fotoPerfilEsquerdo: action.fotoPerfilEsquerdo
            }
        }
        case 'SET_FOTOPERFILESQUERDOBASE64': {
            return {
                ...state,
                fotoPerfilEsquerdoBase64: action.fotoPerfilEsquerdoBase64
            }
        }
        case 'SET_FOTOPERFILDIREITO': {
            return {
                ...state,
                fotoPerfilDireito: action.fotoPerfilDireito
            }
        }
        case 'SET_FOTOPERFILDIREITOBASE64': {
            return {
                ...state,
                fotoPerfilDireitoBase64: action.fotoPerfilDireitoBase64
            }
        }
        case 'SET_CEP': {
            return {
                ...state,
                cep: action.cep
            }
        }
        case 'SET_RUA': {
            return {
                ...state,
                rua: action.rua
            }
        }
        case 'SET_BAIRRO': {
            return {
                ...state,
                bairro: action.bairro
            }
        }
        case 'SET_NUMERO': {
            return {
                ...state,
                numero: action.numero
            }
        }
        case 'SET_COMPLEMENTO': {
            return {
                ...state,
                complemento: action.complemento
            }
        }
        case 'SET_STATE': {
            return {
                ...action.state
            }
        }
    }
    throw Error('Ação desconhecida: ', action.type);
}

/**
 * Exporta estado inicial, também será utilizada para limpar todos os campos
 */
const dataAtual = new Date();
const ano = dataAtual.getFullYear();
const mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // +1 porque os meses são indexados a partir de 0
const dia = String(dataAtual.getDate()).padStart(2, '0');

export const InitialState = {
    nome: "",
    alcunha: "",
    genero: "Masculino",
    dataDeNascimento: `${ano}-${mes}-${dia}`,
    pai: "",
    mae: "",
    rg: "",
    cpf: "",
    telefone: "",
    obito: false,
    foragido: false,
    naturalidade: "",
    nacionalidade: "",
    localDeTrabalho: "",
    profissao: "",
    grauDeEscolaridade: "Ensino Fundamental Incompleto",
    altura: null,
    etnia: "",
    porteFisico: "Magro",
    corDosOlhos: "Azul",
    corDaPele: "Amarelo",
    corDoCabelo: "Preto",
    tipoDeCabelo: "Encaracolado",
    fotoDeFrente: "",
    fotoDeFrenteBase64: "",
    fotoPerfilEsquerdo: "",
    fotoPerfilEsquerdoBase64: "",
    fotoPerfilDireito: "",
    fotoPerfilDireitoBase64: "",
    cep: "",
    rua: "",
    bairro: "",
    numero: null,
    complemento: ""
}
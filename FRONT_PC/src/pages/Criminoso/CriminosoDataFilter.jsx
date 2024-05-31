/**
 * 
 * @param {state} 
 *  é todo o estado gerado para o reducer, nesse caso, será todos os campos para filtrar o criminoso 
 * @param {action} 
 *  é a ação que o reducer executará, a mesma deve conter um tipo(type) e o nome do componente o qual alterará.
 *  Ex. action = {type: 'SET_NOME', nome: 'Rodrigo Ide'} 
 * @returns 
 *  retorna um objeto contendo todo o estado do formulário(se ocorreu alguma alteração antes) mais o campo que foi alterado.
 *  também é possível retornar um erro em caso de /action.type/ não ser reconhecido
 */
export default function CriminosoFilterDataReducer(state, action) {
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
        case 'SET_IDADEMIN': {
            return {
                ...state,
                idade_min: action.idade_min
            }
        }
        case 'SET_IDADEMAX': {
            return {
                ...state,
                idade_max: action.idade_max
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
                local_de_trabalho: action.local_de_trabalho
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
                grau_de_escolaridade: action.grau_de_escolaridade
            }
        }
        case 'SET_ALTURAMIN': {
            return {
                ...state,
                altura_min: action.altura_min
            }
        }
        case 'SET_ALTURAMAX': {
            return {
                ...state,
                altura_max: action.altura_max
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
                porte_fisico: action.porte_fisico
            }
        }
        case 'SET_CORDOSOLHOS': {
            return {
                ...state,
                cor_dos_olhos: action.cor_dos_olhos
            }
        }
        case 'SET_CORDAPELE': {
            return {
                ...state,
                cor_da_pele: action.cor_da_pele
            }
        }
        case 'SET_CORDOCABELO': {
            return {
                ...state,
                cor_do_cabelo: action.cor_do_cabelo
            }
        }
        case 'SET_TIPODECABELO': {
            return {
                ...state,
                tipo_de_cabelo: action.tipo_de_cabelo
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
        case 'SET_MARCAOUTATUAGEM': {
            return {
                ...state,
                cicatriz_ou_tatuagem: action.cicatriz_ou_tatuagem
            }
        }
        case 'SET_PARTEDOCORPO': {
            return {
                ...state,
                parte_do_corpo: action.parte_do_corpo
            }
        }
        case 'SET_DESCRICAOMARCA': {
            return {
                ...state,
                descricao: action.descricao
            }
        }
        case 'SET_TIPODETATUAGEM': {
            return {
                ...state,
                tipo_de_tatuagem_id: action.tipo_de_tatuagem_id
            }
        }
        case 'CLEAR_STATE': {
            return {
                ...action.state
            }
        }
    }
    throw Error('Ação desconhecida: ', action.type);
}

/**
 * Exporta estado inicial, também será utilizada para limpar todos os campos do filtro
 */

export const FilterInitialState = {
    nome: undefined,
    alcunha: undefined,
    genero: undefined,
    idade_min: undefined,
    idade_max: undefined,
    pai: undefined,
    mae: undefined,
    rg: undefined,
    cpf: undefined,
    telefone: undefined,
    obito: undefined,
    foragido: undefined,
    naturalidade: undefined,
    nacionalidade: undefined,
    local_de_trabalho: undefined,
    profissao: undefined,
    grau_de_escolaridade: undefined,
    altura_min: undefined,
    altura_max: undefined,
    etnia: undefined,
    porte_fisico: undefined,
    cor_dos_olhos: undefined,
    cor_da_pele: undefined,
    cor_do_cabelo: undefined,
    tipo_de_cabelo: undefined,
    cep: undefined,
    rua: undefined,
    bairro: undefined,
    numero: undefined,
    complemento: undefined,
    cicatriz_ou_tatuagem: undefined,
    parte_do_corpo: undefined,
    descricao: undefined,
    tipo_de_tatuagem_id: undefined
}
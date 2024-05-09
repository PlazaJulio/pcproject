import { createAction } from '@ngrx/store';

export const dashboardActions = {
    busca: createAction("[DashboardComponent] Busca Criminoso"),
    adicionaLista: createAction("[DashboardComponent] Adiciona na lista"),
    removeLista: createAction("[DashboardComponent] Remove da lista"),
    pegaUsuario: createAction("[DashboardAction] Pega usuario atual")
}





import { createReducer, on } from "@ngrx/store";
import { dashboardActions } from "./dashboard.actions";
import { AppState } from "../core/interfaces/AppState.interface";

export const initialState: AppState = {
    usuario:            undefined,
    listaCriminosos:    []
}

export const dashboardReducer = createReducer(
    initialState,
    
    on(dashboardActions.busca, (state: Partial<AppState>) => { 
        console.log(`Busca`)
        console.log(state)
        return initialState
    }),
    
    on(dashboardActions.adicionaLista ,(state: Partial<AppState>) => { 
        console.log(`Adiciona`)
        console.log(state)
        return initialState
    }),
    
    on(dashboardActions.removeLista,(state: Partial<AppState>) => { 
        console.log(`Remove`)
        console.log(state)
        return initialState
    }),
    
    on(dashboardActions.pegaUsuario, (state: Partial<AppState>) => {
        console.log('Pega Usuario Atual')    
        console.log(state)
        return initialState
    })
    
) 
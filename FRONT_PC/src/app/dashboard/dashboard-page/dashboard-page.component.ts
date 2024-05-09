import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Criminoso } from '../../core/interfaces/Criminoso.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/interfaces/AppState.interface';
import { Observable } from 'rxjs';
import { dashboardActions } from '../dashboard.actions';

@Component({
  selector: 'dp-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent implements OnInit{
  
  $state: Observable<AppState>
  criminosos: Criminoso[] = []
  searchForm: FormGroup = this.formBuilder.group({
    nome: ["",[]]
  })

  constructor( private store: Store<{ state: AppState }>,
               private formBuilder: FormBuilder ){
    
    this.store.dispatch(dashboardActions.pegaUsuario())
    
    this.$state = store.select("state")
    this.$state.subscribe((state)=>{console.log(state)})
  }
               
  ngOnInit(): void {
    this.store.dispatch(dashboardActions.busca())
    this.store.dispatch(dashboardActions.adicionaLista())
    this.store.dispatch(dashboardActions.removeLista())
  }
}

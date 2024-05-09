import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { UserService } from '../core/services/user/user.service';
import { dashboardActions } from './dashboard.actions';
import { Usuario } from '../core/interfaces/Usuario.interface';

@Injectable()
export class DashboardEffects {

    constructor(
        private $actions: Actions,
        private userService: UserService
    ){}

    // $getCurrentUser = createEffect( () => {})
}



// TODO - criar os effects para a dashboard
// TODO - criar a guarda para a pagina dashboard
// TODO - criar os effects para as outra funçoes
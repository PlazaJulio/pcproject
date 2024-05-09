import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { UserService } from '../core/services/user/user.service';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { dashboardReducer } from './dashboard.reducer';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [
    DashboardPageComponent,
    DashboardListComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    StoreModule.forRoot({dashboardReducer: dashboardReducer}),
    EffectsModule.forRoot([])
  ],
  exports:[
    DashboardPageComponent
  ],
  providers: [
    UserService
  ]
})
export class DashboardModule { }

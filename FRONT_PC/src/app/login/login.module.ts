import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../core/services/login/login-service.service';



@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [
    LoginPageComponent
  ],
  providers: [
    LoginService,
  ]
})
export class LoginModule { }

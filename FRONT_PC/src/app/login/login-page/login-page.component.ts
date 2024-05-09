import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../../core/services/login/login-service.service';

import { Router } from '@angular/router';

@Component({
  selector: 'dp-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  loginForm: FormGroup = this.formBuilder.group({
    login: ["", []],
    password: ["", []]
  })
  
  constructor( private formBuilder: FormBuilder,
               private loginService: LoginService, 
               private router: Router ){}

  onSubmit(event: Event){
    event.preventDefault()

    let login = this.loginForm.get("login")?.value
    let password = this.loginForm.get("password")?.value

    // FIXME - Talvez tenha um problema aqui 
    this.loginService.login(login, password)

    this.router.navigate(["/dashboard"], {
      state:{'AuthorizationToken': sessionStorage.getItem("AuthorizationToken")}
    })
     // FIXME #
  }
}

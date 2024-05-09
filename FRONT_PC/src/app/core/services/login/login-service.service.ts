import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Autorizacao } from '../../interfaces/Autorizacao.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private httpClient: HttpClient ) {}

  login(login: string, password: string ){
    this.httpClient.post<Autorizacao>(`${environment.host}${environment.rotas.autorizacao.login}`, {
      usuario:  login,
      password: password 
    },{
      headers: environment.http_headers
    }).subscribe({

      next: (response: Autorizacao) => {
        sessionStorage.setItem("AuthorizationToken", response["access_token"])
        console.log(response)
      }, 

      error: (error: HttpErrorResponse) => {
        console.log(console.log(error))     
      },
      
      complete: () => {
        console.log("Requisiçao finalizada")
      } 
    })

  }
}

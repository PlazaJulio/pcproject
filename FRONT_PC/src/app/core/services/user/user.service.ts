import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Usuario } from '../../interfaces/Usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private httpClient: HttpClient ) { }

  getCurrentUser(){
    return this.httpClient.get<Usuario>(
      `${environment.host}${environment.rotas.eu}`, 
      { headers: environment.http_headers }
  )}
}

/*
export class UserService {

  constructor( private httpClient: HttpClient ) { }

  getCurrentUser(){
    let currentUser: Usuario | undefined

    this.httpClient.get<Usuario>(`${environment.host}${environment.rotas.eu}`, {
      headers: environment.http_headers
    }).subscribe({

      next: (response: Usuario) => { 
        console.log(response)
        currentUser = response
      },

      error: (error: HttpErrorResponse) => {
        console.log(error)
        currentUser = undefined
      },

      complete: () => {
        console.log("completo")
      }
    })
    return currentUser
  }
}

*/
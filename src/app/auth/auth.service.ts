import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  // retona uma chave ficticia para ativar o login. essa implementação seria através da api com a validação de uma chave.
  login(user: any){
    return new Promise((resolve) => {
      window.localStorage.setItem('token', 'my-token');
      resolve(true);
    });

  }
}

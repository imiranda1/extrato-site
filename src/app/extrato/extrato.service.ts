import { Extrato } from './extrato';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ExtratoService {

  extratoUrl = 'http://localhost:8080/extrato';

  constructor( private http: HttpClient) { }

  listar(){

    return this.http.get<Extrato>(this.extratoUrl).pipe((map(result => result.lancamentos)));

  }
}

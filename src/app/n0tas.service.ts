import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http'
import {  Observable} from 'rxjs'
import { NOTAS} from '../app/interface/notas'
import { FormBuilder } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class N0tasService {
  url='http://localhost:3759';
  
  constructor(private service:HttpClient) { 
 }
  catchNota( ): Observable<any>{
    return this.service.get(`${this.url}`) 
  }
  sendNota(nota:NOTAS ): Observable<any>{
    return this.service.post(`${this.url}a`,nota)
  }

  deleteNota(eliminable:NOTAS): Observable<any>{
    console.log("2",eliminable);
    return this.service.post(`${this.url}b`,eliminable);
  }
}

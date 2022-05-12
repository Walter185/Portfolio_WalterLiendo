import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  url= 'http://localhost:4200/api/login';
  currentUserSubject: BehaviorSubject<any>;
  constructor (private http:HttpClient) {
     console.log("funcionando");
     this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
   }

IniciarSesion(credenciales:any):Observable<any>{

  return this.http.post(this.url, credenciales).pipe(map(data=>{
    sessionStorage.setItem('currentUser', JSON.stringify(data));
    this.currentUserSubject.next(data);
    return data;
  }))
}
  get UsuarioAutenticado () {
  return this.currentUserSubject.value; 
  }
}
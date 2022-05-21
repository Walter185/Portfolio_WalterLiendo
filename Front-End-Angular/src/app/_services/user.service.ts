import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { environment } from 'src/environments/environment';

const API_URL = 'http://localhost:8080/api/test/';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServeUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
  //////////////////////////////////////////////Fin de jwt//////////////////

  public getPersona():Observable<persona>{
    return this.http.get<persona>(`${this.apiServeUrl}/persona/id/1`); 
  }
 
  public updatePersona(persona:persona):Observable<persona>{
    return this.http.put<persona>(`${this.apiServeUrl}/persona/update`,persona);
  }
} 